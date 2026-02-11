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
    features: [
      "부분 타일 수리/보수", 
      "양변기 또는 세면기 교체", 
      "욕실 수납장 설치", 
      "악세사리 4종"
    ],
    highlight: "💡 대기업 협력사 기준 시공",
    subtext: "중간 마진 없는 합리적 가격"
  },
  {
    name: "표준형 스탠다드",
    price: "240만원~",
    features: [
      "국산 고급 타일", 
      "젠다이 설치", 
      "해바라기 샤워기", 
      "슬라이딩 거울장", 
      "LED 조명"
    ],
    highlight: "💡 대기업 동일 품질 기준",
    subtext: "직접 시공으로 비용 절감",
    popular: true
  },
  {
    name: "장인 프리미엄",
    price: "400만원~",
    features: [
      "수입 포세린 타일", 
      "졸리컷 정밀 마감", 
      "매립 수전", 
      "최고급 도기류", 
      "맞춤 조명 설계"
    ],
    highlight: "💡 대기업 VIP 수준 시공",
    subtext: "브랜드 마진 없는 정직한 가격"
  }
];

function App() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const phoneNumber = "010-2668-7395";

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
            <span className="badge">대기업 품질, 합리적인 가격</span>
            <h1>욕실의 새로운 가치,<br/>새론하우징입니다.</h1>
            <p>30년 대기업 협력 경력 전문팀이<br/>직접 책임지고 시공합니다.</p>
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
            <h2>대기업 협력사의 기준으로,<br/>합리적인 가격으로</h2>
            <p>
              주요 브랜드 협력사로 활동하며 30년간 축적한 노하우.
              대기업의 까다로운 품질 기준은 그대로 지키되,
              불필요한 중간 마진을 없애 합리적인 가격으로 제공합니다.
            </p>
            <ul className="check-list">
              <li>대기업 수준 3중 고메즈 방수 공법 (누수 제로)</li>
              <li>1:100 정밀 구배 시공 (물고임 현상 없음)</li>
              <li>엄격한 품질 검수 시스템 (대기업 기준 적용)</li>
              <li>투명하고 정직한 견적 (중간 마진 없음)</li>
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
                {pkg.popular && <div className="popular-badge">인기</div>}
                <h3>{pkg.name}</h3>
                <div className="price">{pkg.price}</div>
                <ul className="pkg-features">
                  {pkg.features.map((f, i) => <li key={i}>✓ {f}</li>)}
                </ul>
                <div className="pkg-highlight">
                  <div className="highlight-text">{pkg.highlight}</div>
                  <div className="subtext">{pkg.subtext}</div>
                </div>
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
              <p className="footer-tagline">대구·울산·부산·경북·경남 욕실 리모델링 전문</p>
              <div className="biz-details">
                <p>상호: 새론하우징 | 대표자: 이재연</p>
                <p>사업자등록번호: 665-01-03169</p>
                <p>이메일: okbath12@naver.com</p>
              </div>
              <p className="copyright">© 2024 Saeron Housing. All rights reserved.</p>
            </div>
            <div className="footer-contact">
              <h3>실시간 상담 문의</h3>
              <a href={`tel:${phoneNumber}`} className="phone">{phoneNumber}</a>
              <p>대구/울산/부산/경남/경북 전역 무료 출장 견적</p>
              <p>평일/주말 언제든 친절하게 상담해 드립니다.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal for Images */}
      {activeImage && (
        <div className="modal-overlay" onClick={() => setActiveImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={activeImage} alt="시공 상세 사진" />
            <button className="close-modal-btn" onClick={() => setActiveImage(null)}>&times;</button>
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
