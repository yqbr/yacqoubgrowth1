import Head from 'next/head'
import ServiceCard from '@/components/ServiceCard'
import PriceCard from '@/components/PriceCard'
import ContactRow from '@/components/ContactRow'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <title>Yacqoub Moallim — Growth Operating</title>
        <meta name="description" content="Helping businesses grow with strategy, execution, and automation." />
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Yacqoub Moallim — Growth Operating</h1>
          <nav className="space-x-4">
            <a href="#services" className="text-sm hover:underline">Services</a>
            <a href="#pricing" className="text-sm hover:underline">Pricing</a>
            <a href="#contact" className="text-sm hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section id="services" className="mt-16">
          <h3 className="text-2xl font-semibold">Services I offer</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard title="Growth Strategy" desc="90-minute deep-dive, pricing review, 30/90 day playbook." price="$300 (one-time)" />
            <ServiceCard title="Website + Funnel" desc="Landing page or 3-page website that converts leads." price="$1,200 (one-time)" />
            <ServiceCard title="Monthly Growth Retainer" desc="Ongoing execution: ads, content, optimization, and reporting." price="$799 / month" />
          </div>
        </section>

        <section id="pricing" className="mt-16">
          <h3 className="text-2xl font-semibold">Pricing (CAD)</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <PriceCard name="Starter" bullets={["Strategy session","1 landing page","Basic automations"]} price="$299 / month" />
            <PriceCard name="Growth" bullets={["Everything in Starter","Website improvements","Weekly tests & reporting"]} price="$799 / month" featured />
            <PriceCard name="Scale" bullets={["Growth + team ops","Paid ads management","Dedicated growth roadmap"]} price="$1,999 / month" />
          </div>
        </section>

        <section id="contact" className="mt-16">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <ContactRow label="Email" value="hello@yacqoubmoallim.com" link="mailto:hello@yacqoubmoallim.com" />
          <ContactRow label="WhatsApp" value="+1 (647) 555-0123" link="https://wa.me/16475550123" />
        </section>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Yacqoub Moallim — All rights reserved.
        </div>
      </footer>
    </div>
  )
}
