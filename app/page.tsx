export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0b] text-gray-100 antialiased">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0b]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-bold tracking-tight">
            <span className="text-white">MonkeyLove</span>
            <span className="text-violet-400">Stack</span>
          </span>
          <a
            href="#pricing"
            className="text-sm px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-500 transition font-medium"
          >
            Become a Founding Client
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20">
            Founding Client spots open — limited availability
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            I replaced three marketing hires
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              with AI agents.
            </span>
            <br />
            Now I run them for you.
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I&apos;m Steven. I built AI systems that generate my leads, produce
            my podcast, and run my social media — every day, without me lifting
            a finger. MonkeyLoveStack takes the same approach and builds custom
            AI pipelines for your business. Fully managed. You get the output.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/steve-d-pennington"
              className="px-8 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 transition font-semibold text-base"
            >
              Become a Founding Client — $300/mo →
            </a>
            <a
              href="#capabilities"
              className="px-8 py-3.5 rounded-full border border-white/10 hover:border-white/25 transition font-semibold text-base text-gray-300"
            >
              See what&apos;s actually running ↓
            </a>
          </div>
        </div>
      </section>

      {/* Proof Bar */}
      <section className="py-8 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "37+", label: "podcast episodes produced" },
            { number: "2x daily", label: "social posts, automated" },
            { number: "24/7", label: "lead scanning active" },
            { number: "6+", label: "AI voices production-ready" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl font-bold text-violet-400">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Here&apos;s the honest version.
          </h2>
          <div className="space-y-5 text-gray-400 text-lg leading-relaxed">
            <p>
              I didn&apos;t set out to build a service. I set out to stop doing
              my own marketing.
            </p>
            <p>
              I&apos;m a solo founder. I was spending 15+ hours a week on lead
              research, content creation, and social media. So I built AI agents
              to do it. Not chatbots — actual autonomous systems that scan for
              leads, write and produce podcast episodes, and post to social media
              on a schedule.
            </p>
            <p>
              After six months of running these systems for myself, I realized:
              this isn&apos;t a side project. This is infrastructure. And other
              founders need it too.
            </p>
            <p className="text-gray-300 font-medium">
              MonkeyLoveStack isn&apos;t a platform you sign up for and figure
              out yourself. I set it up, I manage it, I optimize it. You get the
              output.
            </p>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            — Steven Pennington, Founder
          </div>
        </div>
      </section>

      {/* What This Isn't */}
      <section className="py-16 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            {
              bold: "Not SaaS.",
              rest: "You don't get a login and good luck. You get a running system and results.",
            },
            {
              bold: "Not an agency.",
              rest: "No $15K retainers, no strategy decks, no 6-month timelines.",
            },
            {
              bold: "Not a freelancer.",
              rest: "Agents don't take sick days.",
            },
          ].map((item) => (
            <div key={item.bold} className="p-6">
              <p className="text-white font-bold text-lg mb-2">{item.bold}</p>
              <p className="text-gray-500 text-sm">{item.rest}</p>
            </div>
          ))}
        </div>
      </section>

      {/* More Than Automation */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Stop being the only one who knows
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                how your business works.
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Automation tools run workflows. They&apos;re excellent plumbing. But you
              can&apos;t ask a pipe a question.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 mb-10">
            <div className="space-y-5 text-gray-400 leading-relaxed">
              <p>
                Zapier moves data from A to B. n8n chains triggers to actions. They do
                exactly what you told them to do — nothing more, nothing less. They don&apos;t
                know your product, your customers, or why you made that call in November.
                They execute, then forget everything.
              </p>
              <p className="text-gray-300 font-medium">
                MonkeyLoveStack is different. Every client gets a system that&apos;s been set
                up with your business context — your docs, your data, your processes,
                whatever matters. It runs your pipelines automatically. But it also becomes
                something automation tools never are: a knowledgeable presence you can
                actually talk to.
              </p>
              <p>
                Message it on Telegram. Ask what happened to this week&apos;s lead numbers.
                Ask it to pull together a summary for a client call. Ask it something you
                haven&apos;t thought to automate yet. It knows your business. It answers.
              </p>
            </div>
          </div>

          {/* Comparison */}
          <div className="grid grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-white/5 mb-10">
            <div className="p-5 bg-white/[0.02]" />
            <div className="p-5 bg-white/[0.02] text-center">
              <p className="text-sm font-medium text-gray-500">Automation Tools</p>
              <p className="text-xs text-gray-600">Zapier / n8n / Make</p>
            </div>
            <div className="p-5 bg-violet-500/10 text-center">
              <p className="text-sm font-medium text-violet-400">MonkeyLoveStack</p>
            </div>
            {[
              { feature: "Runs automated pipelines", them: true, us: true },
              { feature: "Indexes your business data", them: false, us: true },
              { feature: "Answers ad-hoc questions", them: false, us: true },
              { feature: "Handles requests without reprogramming", them: false, us: true },
              { feature: "Fully managed for you", them: false, us: true },
              { feature: "Gets smarter over time", them: false, us: true },
            ].map((row, i) => (
              <div key={row.feature} className="contents">
                <div className={`p-4 text-sm text-gray-300 ${i % 2 === 0 ? 'bg-white/[0.01]' : 'bg-white/[0.03]'}`}>
                  {row.feature}
                </div>
                <div className={`p-4 text-center ${i % 2 === 0 ? 'bg-white/[0.01]' : 'bg-white/[0.03]'}`}>
                  <span className={row.them ? 'text-gray-400' : 'text-gray-600'}>{row.them ? '✓' : '—'}</span>
                </div>
                <div className={`p-4 text-center ${i % 2 === 0 ? 'bg-violet-500/[0.05]' : 'bg-violet-500/[0.08]'}`}>
                  <span className="text-violet-400">✓</span>
                </div>
              </div>
            ))}
          </div>

          {/* The moment of truth */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <p className="text-sm font-medium text-gray-500 mb-3">When something unexpected happens...</p>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Your Zapier zap does what it was configured to do. For anything outside the
                script, you&apos;re on your own at 11pm.
              </p>
              <p className="text-xs text-gray-600 italic">
                &ldquo;Why did lead volume drop 40% today?&rdquo;
              </p>
              <p className="text-xs text-gray-600 mt-1">🤷 No answer. It&apos;s plumbing.</p>
            </div>
            <div className="p-6 rounded-2xl bg-violet-500/[0.06] border border-violet-500/20">
              <p className="text-sm font-medium text-violet-400 mb-3">With MonkeyLoveStack...</p>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                Your system notices the anomaly, checks it against your business context,
                and messages you — proactively.
              </p>
              <p className="text-xs text-gray-400 italic">
                &ldquo;Hey — order volume dropped 40% in the last 2 hours. Based on what
                happened in October, this usually means a payment processor issue. Want me
                to check the Stripe logs?&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-24 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What&apos;s already running — for us.
            </h2>
            <p className="text-gray-400 text-lg">
              These are three systems we built and run every day. But the real offer is simpler: tell us what workflow is eating your time, and we&apos;ll build the pipeline.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🎯",
                title: "Lead Generation",
                desc: "AI agents scan Reddit, Hacker News, job boards, and niche forums 24/7 for opportunities that match your business. Leads are scored, filtered, and delivered to your Telegram or email every morning.",
                proof:
                  "Custom scoring criteria per client — industry keywords, company size signals, buying intent. Not a generic keyword alert.",
              },
              {
                emoji: "🎙️",
                title: "Podcast Production",
                desc: "From script to published episode — fully automated. AI generates scripts, produces multi-voice audio with 6+ speakers, normalizes audio, and publishes to your RSS feed on Cloudflare R2.",
                proof:
                  "37+ episodes of The Synthetic Lens produced end-to-end. Full production quality — not robot-voice demos.",
              },
              {
                emoji: "📱",
                title: "Social Media Management",
                desc: "AI creates content from your brand voice, queues it, and posts to your accounts on schedule — currently 2x daily. Direct platform integration, not a scheduling tool you have to manage.",
                proof:
                  "The Violytic X account runs entirely on this system. Daily automated content generation, scheduling, and posting.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-violet-500/20 transition flex flex-col"
              >
                <div className="text-3xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {item.desc}
                </p>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-xs text-violet-400 font-medium uppercase tracking-wider mb-1">
                    Proof
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {item.proof}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Three steps. Live in a week.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery call (30 min)",
                desc: "We talk about your business, what's eating your time, and which capability makes sense to start with. No pitch deck. Just a conversation.",
              },
              {
                step: "02",
                title: "I build your system",
                desc: "I configure your AI agents, set up your pipelines, and test everything end-to-end. Fully managed on our infrastructure — you don't touch a server.",
              },
              {
                step: "03",
                title: "You get the output",
                desc: "Leads in your inbox. Episodes in your feed. Posts on your accounts. You review what matters. The system runs 24/7.",
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

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 border-b border-white/5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Founding Client — $300/mo
            </h2>
            <p className="text-gray-400 text-lg">
              You&apos;re not buying software. You&apos;re hiring an AI
              operations partner.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-violet-500/10 border border-violet-500/30 ring-1 ring-violet-500/20">
            <ul className="space-y-4 mb-8">
              {[
                "One custom AI pipeline built for your business — or start with a proven one",
                "Fully managed — setup, hosting, optimization, all included",
                "Direct access to Steven via Telegram",
                "Monthly optimization based on your results",
                "Add additional capabilities for $200/mo each",
                "Month-to-month. Cancel anytime.",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-gray-300"
                >
                  <span className="text-violet-400 mt-0.5 shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 mb-8">
              <p className="text-sm text-gray-400 leading-relaxed">
                <span className="text-white font-medium">Why $300?</span> This
                is founding client pricing. I&apos;m building case studies and
                refining the service. You get a disproportionately good deal.
                Early clients get locked in at this rate.
              </p>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 text-center">
              <span className="text-white font-medium">Limited spots.</span> I personally manage every client. That means capacity is real, not artificial scarcity. When I&apos;m full, this page says so.
            </p>
            <a
              href="https://calendly.com/steve-d-pennington"
              className="block text-center py-4 rounded-full bg-violet-600 hover:bg-violet-500 transition font-semibold text-base"
            >
              Become a Founding Client →
            </a>
            <p className="text-center text-xs text-gray-500 mt-4">
              Limited spots — I personally manage every client.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Questions you should ask
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is this actually AI, or is it you doing the work manually?",
                a: "It's actually AI. Autonomous agents running on real infrastructure — cron jobs, API integrations, browser automation, the works. I built and maintain the systems. The agents do the daily work.",
              },
              {
                q: "What if the AI produces garbage?",
                a: "You approve everything that goes public. Leads are scored and filtered before they reach you. Podcast episodes go through a review step. Social posts can be previewed before publishing. You stay in control.",
              },
              {
                q: "I need something completely different from these three.",
                a: "Good — that's the point. These are examples, not a menu. We build custom pipelines for whatever's eating your time. The founding client tier gets you one fully managed pipeline to start, and we go from there.",
              },
              {
                q: "How is this different from Jasper, Copy.ai, or other AI tools?",
                a: "Those are self-serve tools — you still do the work, just faster. MonkeyLoveStack is fully managed. I build the system, run the system, and deliver the results. You don't log into a dashboard.",
              },
              {
                q: "Can't I just use ChatGPT?",
                a: "You could. But who's going to run it at 3 AM, score leads, generate podcasts, and post to social — every single day? That's what our agents do.",
              },
              {
                q: "Why not build it myself?",
                a: "You could. I did. It took months. Your first pipeline runs this week.",
              },
              {
                q: "What happens if I cancel?",
                a: "You keep everything produced during your engagement. Episodes, content, lead lists — it's all yours. Month-to-month, no contracts, no exit fees.",
              },
              {
                q: "Can you build something not listed here?",
                a: "Almost certainly. Lead gen, podcasts, and social media are proof of what the system can do — not the limits of it. If your business runs on repeatable workflows, we can probably automate them. Data pipelines, report generation, customer outreach, content repurposing, monitoring — if you can describe the process, we can build the pipeline. Book a call and let's talk about your specific needs.",
              },
            ].map((item) => (
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

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            This is real. It&apos;s running. And there are spots open.
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Not a waitlist. Not a beta. Not &ldquo;coming soon.&rdquo; These
            systems produce real output every day. The only question is whether
            they&apos;re producing it for you.
          </p>
          <a
            href="https://calendly.com/steve-d-pennington"
            className="inline-block px-10 py-4 rounded-full bg-violet-600 hover:bg-violet-500 transition font-semibold text-lg"
          >
            Book a Founding Client Call →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-sm text-gray-500">
            © {new Date().getFullYear()} MonkeyLoveStack. All rights reserved.
          </span>
          <span className="text-sm text-gray-500">
            Built by Steven Pennington. Powered by AI agents that actually work.
          </span>
        </div>
      </footer>
    </main>
  );
}
