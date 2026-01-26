
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// 18장의 유니크한 시공 사례 이미지 리스트
const PORTFOLIO_IMAGES = [
    "https://i.imgur.com/pguGYyh.jpeg",
    "https://i.imgur.com/oJDoRLU.jpeg",
    "https://i.imgur.com/6m9OyeX.jpeg",
    "https://i.imgur.com/GapM8zy.jpeg",
    "https://i.imgur.com/6pCF4xz.jpeg",
    "https://i.imgur.com/cTEsnIE.jpeg",
    "https://i.imgur.com/j2TVm1G.jpeg",
    "https://i.imgur.com/rDswUCZ.jpeg",
    "https://i.imgur.com/CvoBXzu.jpeg",
    "https://i.imgur.com/Ez3gghJ.jpeg",
    "https://i.imgur.com/QAtJHHd.jpeg",
    "https://i.imgur.com/tswW8nL.jpeg",
    "https://i.imgur.com/3S6nkN1.jpeg",
    "https://i.imgur.com/9ZrzQL5.jpeg",
    "https://i.imgur.com/wKAus8m.jpeg",
    "https://i.imgur.com/ShpP673.jpeg",
    "https://i.imgur.com/WV2VzeQ.jpeg",
    "https://i.imgur.com/gP4gSob.jpeg"
];

const PACKAGES = [
  {
    name: "실속형 베이직",
    price: "180만원~",
    features: ["부분 타일 수리/보수", "양변기 또는 세면기 교체", "욕실 수납장 설치", "악세사리 4종"],
    desc: "가장 필요한 부분만 실속 있게 개선"
  },
  {
    name: "표준형 스탠다드",
    price: "250만원~",
    features: ["국산 고급 타일", "젠다이 설치", "해바라기 샤워기", "슬라이딩 거울장", "LED 조명"],
    desc: "가장 선호하시는 욕실 전체 리모델링",
    popular: true
  },
  {
    name: "장인 프리미엄",
    price: "400만원~",
    features: ["수입 포세린 타일", "졸리컷 정밀 마감", "매립 수전", "최고급 도기류", "맞춤 조명 설계"],
    desc: "30년 노하우의 하이엔드 욕실"
  }
];

function App() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const phoneNumber = "010-5614-1942";

  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="main-nav">
        <div className="container">
          <a href="/" className="logo">새론하우징</a>
          <div className="nav-links">
            <a href="#about">소개</a>
            <a href="#portfolio">포트폴리오</a>
            <a href="#packages">패키지</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <span className="badge">30년 경력의 베테랑 장인</span>
            <h1>욕실의 새로운 가치,<br/>새론하우징입니다.</h1>
            <p>
              한샘·리바트 공식 시공 파트너 경력 30년의 독보적인 기술력.<br/>
              이재연 대표가 직접 현장에서 책임지고 시공합니다.
            </p>
            <div className="hero-btns">
              <a href={`tel:${phoneNumber}`} className="btn btn-primary">상담 전화하기</a>
              <a href="#portfolio" className="btn btn-secondary">시공 사례 보기</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats container">
        <div className="stat-item">
          <div className="number">30+</div>
          <div className="label">경력(년)</div>
        </div>
        <div className="stat-item">
          <div className="number">5,000+</div>
          <div className="label">누적 시공</div>
        </div>
        <div className="stat-item">
          <div className="number">100%</div>
          <div className="label">직접 시공</div>
        </div>
        <div className="stat-item">
          <div className="number">2</div>
          <div className="label">AS 보증(년)</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about bg-light">
        <div className="container grid-2">
          <div className="about-img">
            <img src={PORTFOLIO_IMAGES[0]} alt="대표 시공 사진" />
          </div>
          <div className="about-text">
            <h2>대기업이 인정한 기술력,<br/>이재연 장인이 직접 완성합니다.</h2>
            <p>
              한샘과 리바트에서 30년간 수천 개의 욕실을 만들며 쌓아온 노하우로
              보이지 않는 방수부터 마지막 실리콘 한 줄까지 타협하지 않습니다.
            </p>
            <ul className="check-list">
              <li>완벽한 누수 차단을 위한 3중 고메즈 방수 공법</li>
              <li>물고임 현상 없는 1:100 정밀 구배 시공</li>
              <li>최신 트렌드를 반영한 고품질 타일 및 도기</li>
              <li>새론하우징만의 정직하고 합리적인 투명 견적</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="portfolio container">
        <div className="section-header">
          <h2>시공 포트폴리오</h2>
          <p>새론하우징이 직접 시공한 실제 현장 사진입니다.</p>
        </div>
        <div className="portfolio-grid">
          {PORTFOLIO_IMAGES.map((img, idx) => (
            <div key={idx} className="portfolio-item" onClick={() => setActiveImage(img)}>
              <img src={img} alt={`시공사례 ${idx + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="packages bg-light">
        <div className="container">
          <div className="section-header">
            <h2>시공 패키지 안내</h2>
            <p>정직한 가격으로 고품격 욕실을 약속드립니다.</p>
          </div>
          <div className="package-grid">
            {PACKAGES.map((pkg, idx) => (
              <div key={idx} className={`package-card ${pkg.popular ? 'popular' : ''}`}>
                <h3>{pkg.name}</h3>
                <div className="price">{pkg.price}</div>
                <ul className="pkg-features">
                  {pkg.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <a href={`tel:${phoneNumber}`} className="btn btn-outline">상담 예약하기</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="main-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h2>새론하우징</h2>
              <div className="biz-details">
                <p>상호: 새론하우징 | 대표자: 이재연</p>
                <p>사업자등록번호: 665-01-03169</p>
                <p>주소: 경남 김해시 호계로422번길 34-21, 1층</p>
                <p>이메일: okbath12@naver.com</p>
              </div>
              <p className="copyright">© 2024 Saeron Housing. All rights reserved.</p>
            </div>
            <div className="footer-contact">
              <h3>실시간 문의</h3>
              <a href={`tel:${phoneNumber}`} className="phone">{phoneNumber}</a>
              <p>평일/주말 언제든 친절하게 상담해 드립니다.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Optimized Floating Call Button */}
      <div className="floating-actions">
        <a href={`tel:${phoneNumber}`} className="float-btn">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
          </svg>
          현장 무료 견적 신청
        </a>
      </div>

      {/* Modal for Images */}
      {activeImage && (
        <div className="modal-overlay" onClick={() => setActiveImage(null)}>
          <div className="modal-content">
            <img src={activeImage} alt="시공 상세 사진" />
          </div>
        </div>
      )}
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
