import { useEffect } from 'react';

export default function useAnimate(selector) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'scale(1)';
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'scale(0.95)';
      observer.observe(el);
    });

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [selector]);
}
