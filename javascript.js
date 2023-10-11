// JavaScript
document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav > li');

  // 마우스가 메뉴 아이템 또는 하위 메뉴 위에 있을 때도 메뉴를 유지
  navItems.forEach(function (item) {
    const depth1 = item.querySelector('.depth_1');
    let timeoutId; // 지연 시간을 관리하기 위한 변수

    item.addEventListener('mouseenter', function () {
      clearTimeout(timeoutId); // 마우스가 다시 들어오면 기존 지연 작업을 취소
      depth1.style.display = 'block';
    });

    // 메뉴 아이템에서 떠나면 일정 시간 후에 하위 메뉴를 숨김
    item.addEventListener('mouseleave', function () {
      // 마우스가 떨어진 후 0.2초 후에 하위 메뉴를 숨김
      timeoutId = setTimeout(function () {
        depth1.style.display = 'none';
      }, 100);
    });

    // 하위 메뉴에서 떠나면 일정 시간 후에 하위 메뉴를 숨김
    depth1.addEventListener('mouseleave', function () {
      // 마우스가 하위 메뉴를 떠난 후 0.2초 후에 하위 메뉴를 숨김
      timeoutId = setTimeout(function () {
        depth1.style.display = 'none';
      }, 200);
    });
  });
});
