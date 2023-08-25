import Base from "@layouts/Baseof";
import React from "react";

export default function Form() {
  return (
    <Base>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdjnk0LlPOHfi55wnxXwbJ_4qj69FYLBBCAiGbBviqksAwxYg/viewform?embedded=true"
        width="800"
        height="2000"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        style={{ width: "100%", height: "100vh" }}
      >
        Yükleniyor…
      </iframe>
    </Base>
  );
}
