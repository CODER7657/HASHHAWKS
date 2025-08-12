import { useMemo } from "react";
import { SPLINE_SCENE_URL } from "@/config/spline";

const SplineBackground = () => {
  const useIframe = useMemo(
    () => typeof window !== "undefined" && !customElements.get("spline-viewer"),
    []
  );

  if (!SPLINE_SCENE_URL) return null;

  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
      {useIframe ? (
        <iframe
          title="HASHHAWKS 3D Background"
          src={SPLINE_SCENE_URL}
          className="w-full h-full block"
          allow="autoplay; fullscreen"
        />
      ) : (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - web component available via script tag
        <spline-viewer url={SPLINE_SCENE_URL} style={{ width: '100%', height: '100%', display: 'block' }}></spline-viewer>
      )}
      <div className="absolute inset-0 bg-background/60" />
    </div>
  );
};

export default SplineBackground;
