import { useEffect } from 'react';

export function useMousePosition(ref, callback) {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;

      const x = clientX - rect.left;
      const y = clientY - rect.top;

      callback?.({ x, y });
    };

    const handleTouchMove = (event) => {
      const { clientX, clientY } = event.touches[0];
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;

      const x = clientX - rect.left;
      const y = clientY - rect.top;

      callback?.({ x, y });
    };

    const node = ref.current;
    node?.addEventListener('mousemove', handleMouseMove);
    node?.addEventListener('touchmove', handleTouchMove);

    return () => {
      node?.removeEventListener('mousemove', handleMouseMove);
      node?.removeEventListener('touchmove', handleTouchMove);
    };
  }, [ref, callback]);
}
