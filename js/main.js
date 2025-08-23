// ＝＝＝ハンバーガーメニュー＝＝＝
const hamburgerMenu = () => {
  // 要素を取得
  const hamburgerOpen = document.getElementById("js-hamburger-open-button");
  const hamburger = document.getElementById("js-hamburger");
  const closeHamburger = document.getElementById("js-hamburger-close");
  const hamburgerBg = document.getElementById("js-hamburger-bg");

  // ハンバーガーメニューが無い場合の処理
  if (!hamburgerOpen || !hamburger) return;

  // Opening Keyframe
  const openingKeyframes = {
    opacity: [0, 1],
  };

  // Closing Keyframe
  const closingKeyframes = {
    opacity: [1, 0],
  };

  // 共通Option
  const options = {
    duration: 300,
    fill: "forwards",
  };

  // 背景 Opening Keyframe
  const bgOpeningKeyframes = {
    opacity: [0, 1],
  };

  // 背景 Opening Option
  const bgOpeningOptions = {
    duration: 300,
    fill: "forwards",
  };

  // 背景 Closing Option
  const bgClosingOptions = {
    duration: 300,
    fill: "forwards",
  };

  // 背景 Closing Keyframe
  const bgClosingKeyframes = {
    opacity: [1, 0],
  };

  // openする関数
  const openHamburgerMenu = () => {
    hamburger.animate(openingKeyframes, options);
    hamburgerBg.animate(bgOpeningKeyframes, bgOpeningOptions);
    hamburgerBg.style.display = "block";
    hamburger.showModal();
  };

  // closeする関数
  const closeHamburgerMenu = () => {
    const closingAnim = hamburger.animate(closingKeyframes, options);
    hamburgerBg.animate(bgClosingKeyframes, bgClosingOptions);

    closingAnim.onfinish = () => {
      hamburger.close();
      hamburgerBg.style.display = "none";
    };
  };

  // ボタンクリックでメニューを表示
  hamburgerOpen.addEventListener("click", () => {
    openHamburgerMenu();
  });

  // escキーを押したら閉じる
  hamburger.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeHamburgerMenu();
    }
  });

  // 閉じるボタンで閉じる
  closeHamburger.addEventListener("click", () => {
    closeHamburgerMenu();
  });
};

// 関数を実行
hamburgerMenu();

// ＝＝＝ドロップダウンメニュー＝＝＝
const dropdownMenu = () => {
  // ドロップダウンメニューのリストを取得
  const menuList = document.querySelector(".js-menu-list");
  const button = document.querySelector(".js-button");
  const isActive = "is-active";

  if (!button || !menuList) return;

  // クリック時の処理（修正）
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    menuList.classList.toggle(isActive);
  });

  // menu外をクリックで非表示
  document.addEventListener("click", () => {
    menuList.classList.remove(isActive);
  });

  // escキーが押された時の処理
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      menuList.classList.remove(isActive);
    }
  });
};

// 関数を実行
dropdownMenu();

// ＝＝＝モーダル＝＝＝
const modalWindow = () => {
  // 要素を取得
  const modalOpen = document.getElementById("js-modal-open");
  const modal = document.getElementById("js-modal");
  const closeModal = document.getElementById("js-modal-close");
  const modalBg = document.getElementById("js-modal-inner");

  // モーダルが無い場合の処理
  if (!modalOpen || !modal || !closeModal) return;

  // Opening Keyframe
  const openingKeyframes = {
    opacity: [0, 1],
    transform: ["scale(0.95)", "scale(1)"],
  };

  // Closing Keyframe
  const closingKeyframes = {
    opacity: [1, 0],
    transform: ["scale(1)", "scale(0.95)"],
  };

  // Option
  const options = {
    duration: 300,
    easing: "ease-out",
    fill: "forwards",
  };

  // 背景 Keyframe
  const openBg = {
    opacity: [0, 1],
  };

  const closeBg = {
    opacity: [1, 0],
  };

  // 背景Option
  const bgOptions = {
    duration: 150,
    easing: "ease-out",
    fill: "forwards",
  };

  // ボタンクリックでモーダルを表示
  modalOpen.addEventListener("click", () => {
    modalBg.style.display = "block";
    modalBg.animate(openBg, bgOptions);
    modal.animate(openingKeyframes, options);
    modal.showModal();
  });

  const closeModalAnime = () => {
    const closingAnim = modal.animate(closingKeyframes, options);
    modalBg.animate(closeBg, bgOptions);

    closingAnim.onfinish = () => {
      modal.close();
      modalBg.style.display = "none";
    };
  };

  // モーダル外をクリックで閉じる
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModalAnime();
    }
  });

  // escキーを押したら閉じる
  modal.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeModalAnime();
    }
  });

  // 閉じるボタンでモーダルを閉じる
  closeModal.addEventListener("click", () => {
    closeModalAnime();
  });
};

// 関数を実行
modalWindow();

// ＝＝＝タブメニュー＝＝＝
const tabMenu = () => {
  // 要素を取得
  const tabs = document.querySelectorAll(".js-tab-button");
  const contents = document.querySelectorAll(".js-tab-content");

  // Keyframe
  const keyframes = {
    opacity: [0, 1],
    translate: ["0 10px", 0],
  };

  // Option
  const options = {
    duration: 300,
    easing: "ease-out",
    fill: "forwards",
  };

  // タブメニューが無い場合の処理
  if (!tabs || !contents) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // すべてのタブからアクティブをとる
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      // クリックされたタブをアクティブにする
      tab.classList.add("active");

      // すべてのコンテンツを非表示にする
      contents.forEach((content) => {
        content.classList.remove("active");
      });

      // 対応したコンテンツを表示する
      const target = document.getElementById(tab.dataset.tabid);
      target.classList.add("active");
      target.animate(keyframes, options);
    });
  });
};
// 関数を実行
tabMenu();

// ＝＝＝アコーディオンメニュー＝＝＝
const accordionMenu = () => {
  // 要素を取得
  const accordions = document.querySelectorAll(".js-accordion");

  if (!accordions) return;

  accordions.forEach((accordion) => {
    const summary = accordion.querySelector(".js-summary");
    const content = accordion.querySelector(".js-accordion-content");
    const icon = accordion.querySelector(
      ".accordion-icon > span:nth-of-type(2)"
    );

    // Opening Keyframe
    const openingKeyframes = {
      opacity: [0, 1],
      height: [0, content.offsetHeight + "px"],
    };

    // Closing Keyframe
    const closingKeyframes = {
      opacity: [1, 0],
      height: [content.offsetHeight + "px", 0],
    };

    // アイコンのアニメーション
    const openingIconAnime = {
      transform: "rotate(180deg)",
    };

    const closingIconAnime = {
      transform: "rotate(90deg)",
    };

    // 共通Option
    const options = {
      duration: 300,
      easing: "ease-out",
      fill: "forwards",
    };

    summary.addEventListener("click", (e) => {
      e.preventDefault();

      if (!summary || !content || !icon) return;

      if (accordion.open) {
        const closingAnim = content.animate(closingKeyframes, options);
        icon.animate(closingIconAnime, options);

        closingAnim.onfinish = () => {
          accordion.removeAttribute("open");
        };
      } else {
        accordion.setAttribute("open", "true");
        content.animate(openingKeyframes, options);
        icon.animate(openingIconAnime, options);
      }
    });
  });
};

// 関数を実行
accordionMenu();
