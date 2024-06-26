import React from "react";

const UserProfile = () => {
  return (
    <div className="flex flex-col items-center md:flex-row gap-4 md:px-32 font-medium">
      <div className="flex flex-col items-center md:w-1/3">
        <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
          <img src="/img/logo.png" alt="User Avatar" className="rounded-full" />
        </div>
        <p className="mt-2 text-gray-500 text-center">
          Nơi lưu tiến trình học của bạn
        </p>
      </div>
      <div className="overflow-hidden w-full lg:w-auto flex flex-col lg:grow">
        {" "}
        <div className="w-full">
          <h2 className="text-lg font-semibold mb-4">Gần đây</h2>
          <div className="w-full max-w-full flex flex-nowrap gap-3 my-4 overflow-auto profile-recent-scrollbar">
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-lg font-semibold mb-4">Tiến độ học</h2>
          <div className="flex justify-between">
            <span className="text-gray-700">Tổng kinh nghiệm</span>
            <span className="text-yellow-500">369 exp</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Chủ đề đã hoàn thành</span>
            <span className="text-blue-500">1/30</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Bài kiểm tra đã hoàn thành</span>
            <span className="text-red-500">0/3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
