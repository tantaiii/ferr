import React from 'react';

function Question(props) {
  // Nhận dữ liệu câu hỏi và hàm xử lý thông qua props
  const { questionData, onAnswerSelect } = props;

  return (
    <div>
      {/* Hiển thị tiêu đề nội dung câu hỏi */}
      <h3 className="className='fw-bold mb-4'">{questionData.question}</h3>
      
      {/* Hiển thị danh sách câu trả lời theo khối list-group */}
      <div className="list-group">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            type="button"
            // Đã thêm class text-decoration-underline để tạo đường gạch ngang dưới chữ
            className="list-group-item list-group-item-action text-primary py-3 px-4 fs-5 border text-decoration-underline"
            onClick={() => onAnswerSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;