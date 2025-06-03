"use client";
import { Search, Filter, Edit, Trash2 } from "lucide-react";
import { useStudentsQuery } from "@/entities/useStudentQuery";
import { Student } from "@/types/student";
import { useDeleteStudent } from "@/hooks/students";

const StudentTable = () => {

const {students, isError, isLoading,refetch} = useStudentsQuery();
console.log('student == ', students)
const { deleteStudent, loading, error, success } = useDeleteStudent();

const handleClick = (id:string) => {
  deleteStudent(id);
  refetch()
};



  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h2 className="text-3xl font-semibold mb-6">Students</h2>

      {/* Filter & Search */}
      <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
        <div className="flex space-x-4">
          <button className="flex items-center bg-gray-700 px-4 py-2 rounded-md">
            <Filter className="w-5 h-5 mr-2" /> Filter By
          </button>
          <select className="bg-gray-700 px-4 py-2 rounded-md">
            <option>Fields</option>
          </select>
          <select className="bg-gray-700 px-4 py-2 rounded-md">
            <option>Course</option>
          </select>
          <select className="bg-gray-700 px-4 py-2 rounded-md">
            <option>Status</option>
          </select>
          <button className="text-orange-500">Reset Filter</button>
        </div>

        {/* Search Bar */}
        <div className="flex bg-gray-700 px-4 py-2 rounded-md">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search student name or ID"
            className="bg-transparent text-white ml-2 focus:outline-none"
          />
        </div>
      </div>

      {/* Student Table */}
      <div className="mt-6">
        <table className="w-full border-collapse bg-gray-800 rounded-lg overflow-hidden">
          <thead className="bg-gray-700 text-gray-400">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Student Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">User Status</th>
              {/* <th className="py-3 px-4 text-left">Registration Date</th> */}
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="scroll-container">
            {students?.data?.map((student:Student) => (
              <tr className="border-b border-gray-700" key={student.id}>
                <td className="py-3 px-4">{student?.id}</td>
                <td className="py-3 px-4">{student?.name}</td>
                <td className="py-3 px-4">{student?.email}</td>
                <td className="py-3 px-4">{student?.phone}</td>
                <td className="py-3 px-4">{student?.isVerified ? 'true': 'false'}</td>
                {/* <td className="py-3 px-4">{student?.registrationDate}</td> */}
                <td className="py-3 px-4 flex space-x-2">
                  <button className="p-2 bg-gray-700 rounded">
                    <Edit className="w-5 h-5 text-gray-400" />
                  </button>
                  <button className="p-2 bg-gray-700 rounded text-red-500" onClick={()=>handleClick(student.id)}>
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
