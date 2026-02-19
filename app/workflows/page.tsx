const workflows = [
  {
    title: "Opportunity Radar",
    former: "formerly Lead Scout",
    oneLiner:
      "Stop cold emailing strangers; start conversations with founders who actually need you.",
    whatItDoes:
      "This isn't a database—it's an active research agent. Give it a domain or a LinkedIn profile, and it scours the web for the prospect's recent podcasts, news features, and tweets to construct a hyper-personalized outreach message that proves you've done your homework.",
    whatYouGet: [
      "Verified email addresses (personal & work)",
      "Summary of their last 3 months of activity",
      '"Icebreaker" hooks based on real data',
      "Personality profile (communication style analysis)",
      "Drafted connection request message",
      "Exportable CSV for your CRM",
    ],
    bestFor: 'Agency owners and B2B founders who hate "spray and pray" sales.',
    pricing: ["Managed: $99/mo (includes 100 credits)", "BYOK: $15/mo (bring your own API keys)"],
    underTheHood:
      "Orchestrates Brave Search for deep research and Gemini Pro for psychological profiling and copywriting.",
  },
  {
    title: "Brand Voice Multiplier",
    former: "formerly Content Repurposing",
    oneLiner: "Turn one video into a week's worth of high-performing social content.",
    whatItDoes:
      "Stop the content treadmill. This workflow takes a single core asset (like a YouTube video, podcast transcript, or blog post) and ghostwrites native content for every other platform. It doesn't just summarize; it matches your specific tone, humor, and formatting style.",
    whatYouGet: [
      "1 Twitter/X Thread (hook-optimized)",
      "3 LinkedIn text posts (story-driven)",
      "1 Newsletter draft (formatted HTML)",
      "5 Viral short hooks for TikTok/Reels",
      "SEO metadata and tags",
    ],
    bestFor: "Founders and creators who have great ideas but zero time to write.",
    pricing: ["Managed: $49/mo (4 runs/month)", "BYOK: $5/mo + usage"],
    underTheHood:
      "Uses web_fetch to ingest source content and a fine-tuned Claude 3.5 Sonnet prompt chain to mimic human nuance.",
  },
  {
    title: "Social Sentinel",
    oneLiner:
      "The 24/7 watchdog that filters noise and wakes you up only when it matters.",
    whatItDoes:
      "Most listening tools give you a firehose of garbage. Social Sentinel reads posts from X, Reddit, and LinkedIn, but uses an LLM to read them like a human. It filters out spam, competitors, and irrelevant noise, delivering only the high-intent leads or brand risks directly to your Telegram or Slack.",
    whatYouGet: [
      "Real-time alerts to Slack/Telegram",
      "Intent Score (1-10) for every mention",
      "Spam & bot filtering (99% accuracy)",
      "Sentiment analysis",
      'Weekly "Heat Report" of trending topics',
    ],
    bestFor: "Brands who can't afford to miss a customer complaint or a viral mention.",
    pricing: ["Managed: $29/mo (Daily monitoring)", "BYOK: Free tier available (pay for your own tokens)"],
    underTheHood:
      "Combines high-frequency scraping with Gemini Flash for ultra-fast, cost-effective semantic filtering.",
  },
  {
    title: "Rival Recon",
    former: "New",
    oneLiner: "Know when your competitors change their pricing before their customers do.",
    whatItDoes:
      "Business is war, and you need intelligence. Rival Recon visits your top 3 competitors' websites weekly to snapshot their pricing, feature lists, and headlines. It compares them against the previous week's version to detect subtle strategy shifts—like a quiet price hike or a new Enterprise tier.",
    whatYouGet: [
      'Weekly "Spy Report" email',
      "Visual Before & After diffs of pricing pages",
      "Alerts for new feature launches",
      'Messaging shift analysis (e.g., "They stopped saying AI")',
      "Headless screenshots of their landing pages",
    ],
    bestFor: "SaaS founders and agencies in crowded markets.",
    pricing: ["Managed: $39/mo (Track up to 5 competitors)", "BYOK: $9/mo"],
    underTheHood:
      "Headless browser automation snapshots DOM elements and uses vision models to detect meaningful visual and text changes.",
  },
];

const faqs = [
  {
    q: 'What is "BYOK" (Bring Your Own Key)?',
    a: "If you're technical, you can run our workflows using your own OpenAI or Anthropic API keys. You pay a lower monthly fee to us for the platform, and pay the AI providers directly for usage. It's the cheapest option for heavy users.",
  },
  {
    q: 'What is the "Managed" tier?',
    a: "The it just works option. We pay for the AI tokens, server costs, and maintenance. You pay one flat monthly fee. No surprise bills, no API key headaches.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. All plans are month-to-month. We believe the results should keep you here, not a contract.",
  },
  {
    q: "How fast is setup?",
    a: "Most workflows are live within 24 hours. Once you subscribe, you'll receive a secure configuration link to set your preferences.",
  },
  {
    q: "Do you use my data to train models?",
    a: "Never. Your data is processed in isolated containers and discarded immediately after the workflow completes. We are an agency, not a model lab.",
  },
];

export default function WorkflowsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b] text-gray-100 antialiased">
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0b]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-lg font-bold tracking-tight">
            <span className="text-white">MonkeyLove</span>
            <span className="text-violet-400">Stack</span>
          </a>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="text-sm text-gray-400 hover:text-white transition"
            >
              Home
            </a>
            <a
              href="https://calendly.com/steve-d-pennington"
              className="text-sm px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-500 transition font-medium"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-36 pb-20 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-violet-400/80 mb-4">
            Workflow Gallery
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Automate the work you hate.
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Scale the work you love.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-6 leading-relaxed">
            Battle-tested AI workflows we use to run our own agency. Now available for yours.
          </p>
          <p className="text-base sm:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Most AI automation is just a wrapper around ChatGPT. We build{" "}
            <span className="text-gray-200 font-medium">intelligent pipelines</span>
            —complex, multi-step agents that research, write, and monitor the web
            for you. We built these to save our own sanity. They worked so well,
            we decided to let you rent them.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {workflows.map((workflow) => (
              <div
                key={workflow.title}
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-violet-500/20 transition flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-2xl font-bold">{workflow.title}</h2>
                  {workflow.former ? (
                    <span className="text-xs text-gray-500 border border-white/10 rounded-full px-2 py-1">
                      {workflow.former}
                    </span>
                  ) : null}
                </div>
                <p className="text-gray-300 text-sm mb-4 font-medium">
                  {workflow.oneLiner}
                </p>
                <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-violet-400 mb-2">
                      What it does
                    </p>
                    <p>{workflow.whatItDoes}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-violet-400 mb-2">
                      What you get
                    </p>
                    <ul className="space-y-2">
                      {workflow.whatYouGet.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-violet-400">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-violet-400 mb-2">
                        Best for
                      </p>
                      <p>{workflow.bestFor}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-violet-400 mb-2">
                        Pricing
                      </p>
                      <ul className="space-y-1">
                        {workflow.pricing.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-xs uppercase tracking-wider text-violet-400 mb-2">
                      Under the hood
                    </p>
                    <p className="text-gray-500">{workflow.underTheHood}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Browse the Gallery",
                desc: "Find the workflow that solves your biggest bottleneck.",
              },
              {
                step: "02",
                title: "Configure Your Agent",
                desc: 'Click "Request a Quote". We’ll jump on a 15-min call to confirm your data sources (e.g., "Scan these 5 competitors") and integrations (e.g., "Send leads to Slack").',
              },
              {
                step: "03",
                title: "Launch & Relax",
                desc: "We deploy your private instance. You get the first report in your inbox within 24 hours.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/10 text-violet-400 font-bold text-sm mb-4 border border-violet-500/20">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            FAQ
          </h2>
          <div className="space-y-6">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/5"
              >
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready for a workflow that ships results?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Tell us what you want automated. We will scope it, configure it, and
            launch it fast.
          </p>
          <a
            href="https://calendly.com/steve-d-pennington"
            className="inline-block px-10 py-4 rounded-full bg-violet-600 hover:bg-violet-500 transition font-semibold text-lg"
          >
            Request a Quote →
          </a>
        </div>
      </section>
    </main>
  );
}
