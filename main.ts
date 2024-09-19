import puppeteer from "https://deno.land/x/puppeteer_plus@0.23.0/mod.ts";

const url = "http://youtube.com/tv";
const agentString =
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36; Youtube ; Tizen 4.0";

const setupOptions: Parameters<typeof puppeteer.launch>[0] = {
    headless: false,
    /**
     * These settings are taken from this suggestion in Github Issues; as they work, we're keeping them https://github.com/puppeteer/puppeteer/issues/5450#issuecomment-855235985
     */
    args: [
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--disable-setuid-sandbox",
        "--no-first-run",
        "--no-sandbox",
        "--no-zygote",
        "--proxy-server='direct://'",
        "--proxy-bypass-list=*",
        "--deterministic-fetch",
        "--single-process",
        "--start-fullscreen",
    ],
    timeout: 0,
    defaultViewport: null,
};
const browser = await puppeteer.launch(setupOptions);
const page = (await browser.pages())?.[0] || await browser.newPage();
page.setUserAgent(agentString);
await page.goto(url, { waitUntil: "networkidle0" });
