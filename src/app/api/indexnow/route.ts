import { baseURL, routes as routesConfig } from "@/resources";
import { NextResponse } from "next/server";

export async function GET() {
  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig]
  );

  const urlList = activeRoutes.map((route) => `${baseURL}${route === "/" ? "" : route}`);

  const host = baseURL.replace("https://", "").replace("http://", "");
  // Simple IndexNow payload format
  const payload = {
    host: host,
    key: "5340a71656cd78ac",
    keyLocation: `${baseURL}/google5340a71656cd78ac.html`,
    urlList: urlList,
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: res.ok,
      status: res.status,
      message: "IndexNow submission triggered for Bing and search engines.",
      submittedUrls: urlList,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error?.message || "IndexNow ping failed",
      submittedUrls: urlList,
    }, { status: 500 });
  }
}
