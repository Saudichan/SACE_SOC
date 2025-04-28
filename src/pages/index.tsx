import { useState } from 'react';

export default function Home() {
  const [issues, setIssues] = useState([]);
  const [newIssue, setNewIssue] = useState({
    title: '',
    registrant: '',
    trade: '',
    location: '',
    description: '',
    photo: null,
  });

  const handleRegister = () => {
    const today = new Date().toISOString().split('T')[0];
    setIssues([...issues, { ...newIssue, status: 'OPEN', date: today }]);
    setNewIssue({ title: '', registrant: '', trade: '', location: '', description: '', photo: null });
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">SACE_SOC 현장 지적사항 등록</h1>
      <div className="space-y-4">
        <input className="border p-2 w-full" placeholder="등록자 이름" value={newIssue.registrant} onChange={(e) => setNewIssue({ ...newIssue, registrant: e.target.value })} />
        <input className="border p-2 w-full" placeholder="지적 제목" value={newIssue.title} onChange={(e) => setNewIssue({ ...newIssue, title: e.target.value })} />
        <input className="border p-2 w-full" placeholder="공종" value={newIssue.trade} onChange={(e) => setNewIssue({ ...newIssue, trade: e.target.value })} />
        <input className="border p-2 w-full" placeholder="위치" value={newIssue.location} onChange={(e) => setNewIssue({ ...newIssue, location: e.target.value })} />
        <textarea className="border p-2 w-full" placeholder="설명" value={newIssue.description} onChange={(e) => setNewIssue({ ...newIssue, description: e.target.value })}></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleRegister}>등록하기</button>
      </div>

      <h2 className="text-xl font-semibold mt-10">지적사항 대시보드</h2>
      <table className="w-full border mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">번호</th>
            <th className="border p-2">제목</th>
            <th className="border p-2">등록자</th>
            <th className="border p-2">공종</th>
            <th className="border p-2">위치</th>
            <th className="border p-2">등록일</th>
            <th className="border p-2">상태</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue, idx) => (
            <tr key={idx}>
              <td className="border p-2">{idx + 1}</td>
              <td className="border p-2">{issue.title}</td>
              <td className="border p-2">{issue.registrant}</td>
              <td className="border p-2">{issue.trade}</td>
              <td className="border p-2">{issue.location}</td>
              <td className="border p-2">{issue.date}</td>
              <td className="border p-2">{issue.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}