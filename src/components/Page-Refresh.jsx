import React from "react"

const PageRefresh = () => {
   const reloadPage = () => {
      window.location.reload();
   }

   return (
      <button className='GoTop' onClick={reloadPage}
         style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            padding: "10px",
            backgroundColor: "#333",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
         }}
      >
         새로고침
      </button>
   )
}

export default PageRefresh
