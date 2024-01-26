import React from "react";

function Footer({ Children }) {
  return (
    <>
      {Children}
      <hr />
      <div className="text-align-center">
        다시 만든 Todo List 입니다.
        <br />
        Copyright 2024. 박지영. All Rights Reserved.
      </div>
    </>
  );
}

export default Footer;
