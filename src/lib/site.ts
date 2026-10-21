export const site = {
  name: "MunaSIP",
  url: "https://munasip.oxog.dev",
  repo: "https://github.com/MunaSIP/MunaSIP",
  websiteRepo: "https://github.com/ersinkoc/munasip-site",
  version: "1.6.0",
  release: "https://github.com/MunaSIP/MunaSIP/releases/tag/v1.6.0",
  sourceZip: "https://github.com/MunaSIP/MunaSIP/archive/refs/tags/v1.6.0.zip",
  image: "ghcr.io/munasip/munasip:1.6.0",
  sourceRevision: "e8b6183afde8fff50e16d4a7a62a892f78986417",
  description:
    "An open-source company PBX you run yourself. Asterisk calling, a visual IVR designer, browser softphone and one clear admin panel. Deploy on your Linux server with Docker.",
};

export const sourceDoc = (file: string) =>
  `${site.repo}/blob/main/docs/${file}.md`;

export const dockerCommand = `docker run -d --name munasip \\
  --restart unless-stopped \\
  -p 3000:3000 \\
  -p 10000-10100:10000-10100/udp \\
  -v munasip-data:/data \\
  -e EXTERNAL_IP=203.0.113.10 \\
  -e PUBLIC_HOST=pbx.example.com \\
  ghcr.io/munasip/munasip:1.6.0`;

export const composeCommand = `git clone https://github.com/MunaSIP/MunaSIP.git
cd MunaSIP
git checkout v1.6.0
cp .env.example .env
chmod +x scripts/gen-certs.sh
./scripts/gen-certs.sh
docker compose up --build -d`;

export const docNav = [
  {
    slug: "getting-started",
    title: "Getting started",
    detail: "Install, configure and make your first call.",
    icon: "terminal",
  },
  {
    slug: "architecture",
    title: "Architecture",
    detail: "Understand the services behind every call.",
    icon: "network",
  },
  {
    slug: "ivr",
    title: "IVR & speech",
    detail: "Design call flows with APIs and neural voices.",
    icon: "flow",
  },
  {
    slug: "softphone",
    title: "Softphone & portal",
    detail: "Give every extension a home in the browser.",
    icon: "phone",
  },
  {
    slug: "integrations",
    title: "Integrations",
    detail: "Connect your phone system to your tools.",
    icon: "code",
  },
  {
    slug: "security",
    title: "Security & operations",
    detail: "Plan access, persistence and recovery.",
    icon: "shield",
  },
];
