import Header from './components/Header'
import Article from './components/Article'
import Footer from './components/Footer'
import './index.css'
import * as ReactVFX from 'react-vfx';
import { useCallback, useEffect, useRef, useState } from 'react';

const VFXWrapper: React.FC<{ vfxEnabled: boolean, children: React.ReactNode }> = ({ vfxEnabled, children }) => {
  if (vfxEnabled) {
    return (
    <ReactVFX.VFXProvider>
      <ReactVFX.VFXDiv shader={"glitch"}>
        {children}
      </ReactVFX.VFXDiv>
    </ReactVFX.VFXProvider>
    );
  }
  return <>{children}</>;
  
}

function App() {
    /**
   * scrollYを保持するための状態をuseRefで初期化する。
   */
  const scrollRef = useRef({
    scrollY: 0,
  });
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">(
    "down",
  );
  const [vfxEnabled, setVfxEnabled] = useState(false);
  const toggleVfx = useCallback(() => {
    setVfxEnabled(() => true);
    setTimeout(() => {
      setVfxEnabled(false);
    }, 1000);
  }, []);
  /**
   * スクロールの検知する。
   */
  const onScroll = useCallback(() => {
    if (window.scrollY > scrollRef.current.scrollY) {
      setScrollDirection((prev) => {
        if (prev !== "down") {
          toggleVfx();
        }
        return "down"
      });
      
    } else if (window.scrollY < scrollRef.current.scrollY) {
      setScrollDirection((prev) => {
        if (prev !== "up") {
          toggleVfx();
        }
        return "up"
      });
    }
    scrollRef.current.scrollY = window.scrollY;
  }, [scrollRef, toggleVfx]);

  // 登録と後始末
  useEffect(() => {
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);
  console.warn("scrollDirection", scrollDirection);
  return (
    <VFXWrapper vfxEnabled={vfxEnabled}>
      <div className={`blog-wrapper ${scrollDirection === "up" ? "is-up" : ""}`}>
        <Header scrollDirection={scrollDirection} />
        <main>
          <Article scrollDirection={scrollDirection} />
        </main>
        <Footer scrollDirection={scrollDirection} />
      </div>
    </VFXWrapper>
  )
}

export default App
