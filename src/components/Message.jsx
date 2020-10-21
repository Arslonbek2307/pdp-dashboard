import React from "react";
import { dateFormater } from "../utility/dateFormater";
import { Icon } from "./common/Icon";
import "../styles/message.scss";

const Message = ({ isFileExist, captionText, fileData, isMyMessage }) => {
  const getFileElement = () => {
    return (
      <div className="file">
        <div
          className={`downloader_wrapper message-${getClassNameOfMessage()}`}
        >
          <Icon name="downloader" color="#fff" width={20} height={20} />
        </div>
        <div className="file_content">
          <p className="file_name">{fileData.fileName}</p>
          <p className="file_size">{`${fileData.fileSize} MB`}</p>
        </div>
      </div>
    );
  };

  const getClassNameOfMessage = () => {
    return isMyMessage ? "my" : "your";
  };

  return (
    <div className="wrapper_message">
      <div
        className={`wrapper_message_content message-${getClassNameOfMessage()}`}
      >
        {isFileExist && getFileElement()}
        <span className="caption">{captionText}</span>
      </div>
      <span className="date_format">{dateFormater(new Date())}</span>
    </div>
  );
};

export default Message;
