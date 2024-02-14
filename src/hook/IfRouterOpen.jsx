/* 라우터 오픈시  이벤트 발생 */

// 사용법 : const routerOpen = IfRouterOpen() 함수 선언 후
// 사용법 : 원하는 요소에 style={{ transform: `translateX(${routerOpen ? '0px' : '1000px'})` }} 을 추가한다.

import { useEffect, useState } from "react"

const IfRouterOpen = () => {
   const [routerOpen, setRouterOpen] = useState(false)

   useEffect(() => {
      // 라우터 상태를 변경하는 코드에 따라 라우터가 열릴 때마다 routerOpen 값을 변경하도록 설정
      setRouterOpen(true)

      // 라우터가 닫힐 때마다 routerOpen 값을 변경하도록 설정
      return () => {
         setRouterOpen(false)
      }
   }, [])

   return routerOpen
}

export default IfRouterOpen
