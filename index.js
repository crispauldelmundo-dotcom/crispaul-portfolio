import React from "react"

export default function VAPortfolio() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden">
        <div className="bg-black text-white p-10">
          <h1 className="text-4xl font-bold">Cris Paul M. Del Mundo</h1>
          <p className="text-lg mt-2">Virtual Assistant | Customer Support | Operations & Sales Support</p>
          <div className="mt-4 space-y-1 text-sm opacity-90">
            <p>📍 7C Taywanak 1, Alfonso, Cavite</p>
            <p>📧 crispauldelmundo@gmail.com</p>
            <p>📞 09217007500</p>
          </div>
        </div>

        <div className="p-8 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Professional Summary</h2>
            <p className="leading-7 text-gray-700">
              Experienced customer service and operations professional with a strong background in sales, account management, dispatch coordination, lead generation, and client communication. Skilled in handling remote work environments, CRM tools, scheduling systems, email outreach, and customer relationship management. Adept at multitasking, problem-solving, and delivering excellent client experiences in fast-paced industries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>

            <div className="space-y-6">
              <div className="border rounded-2xl p-5">
                <h3 className="font-bold text-lg">Sales & Purchasing Manager</h3>
                <p className="text-sm text-gray-500">Wheelzy</p>
                <ul className="list-disc ml-5 mt-3 space-y-1 text-gray-700">
                  <li>Managed inbound and outbound customer communication.</li>
                  <li>Handled negotiations, scheduling, and operational coordination.</li>
                  <li>Maintained accurate customer records and documentation.</li>
                </ul>
              </div>

              <div className="border rounded-2xl p-5">
                <h3 className="font-bold text-lg">Inside Sales & Upselling Representative</h3>
                <p className="text-sm text-gray-500">American Express & Chase</p>
                <ul className="list-disc ml-5 mt-3 space-y-1 text-gray-700">
                  <li>Provided customer support and account assistance.</li>
                  <li>Performed upselling and relationship management.</li>
                  <li>Handled high-volume calls while maintaining quality service.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Email Management",
                "Calendar Management",
                "Lead Generation",
                "Customer Support",
                "CRM Management",
                "Data Entry",
                "Sales Support",
                "Scheduling",
                "Cold Outreach",
                "Remote Collaboration",
                "Administrative Support",
                "Operations Coordination",
              ].map((skill) => (
                <div key={skill} className="bg-gray-100 rounded-xl px-4 py-3 text-sm font-medium">
                  {skill}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Tools & Software</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Google Workspace",
                "Microsoft Office",
                "Slack",
                "Zoom",
                "HubSpot",
                "Salesforce",
                "Zendesk",
                "Canva",
                "Trello",
                "Asana",
              ].map((tool) => (
                <span key={tool} className="bg-black text-white px-4 py-2 rounded-full text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Why Hire Me?</h2>
            <p className="leading-7 text-gray-700">
              I bring a strong combination of customer service expertise, administrative support, sales experience, and remote work efficiency. I am highly organized, proactive, and adaptable, with experience supporting clients and teams in fast-paced environments. My communication skills, attention to detail, and ability to multitask make me a valuable asset for Virtual Assistant and operations-related roles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Virtual Assistant Experience</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="border rounded-2xl p-5 bg-gray-50">
                <h3 className="font-bold text-lg mb-2">Administrative Support</h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-700 text-sm">
                  <li>Managed calendars, appointments, and scheduling for clients and teams.</li>
                  <li>Handled email management, inbox organization, and follow-ups.</li>
                  <li>Prepared reports, spreadsheets, and documentation using Google Workspace and Microsoft Office.</li>
                </ul>
              </div>

              <div className="border rounded-2xl p-5 bg-gray-50">
                <h3 className="font-bold text-lg mb-2">Customer Support & Communication</h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-700 text-sm">
                  <li>Provided professional support through phone, email, and chat.</li>
                  <li>Resolved customer concerns while maintaining high satisfaction.</li>
                  <li>Managed CRM systems and updated customer records accurately.</li>
                </ul>
              </div>

              <div className="border rounded-2xl p-5 bg-gray-50">
                <h3 className="font-bold text-lg mb-2">Lead Generation & Outreach</h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-700 text-sm">
                  <li>Conducted lead research and maintained prospect databases.</li>
                  <li>Performed cold email outreach and follow-up communication.</li>
                  <li>Assisted in sales pipeline management and appointment setting.</li>
                </ul>
              </div>

              <div className="border rounded-2xl p-5 bg-gray-50">
                <h3 className="font-bold text-lg mb-2">Operations & Coordination</h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-700 text-sm">
                  <li>Coordinated remote workflows and team communication.</li>
                  <li>Handled task management using Trello, Asana, and Slack.</li>
                  <li>Supported fast-paced operations while meeting deadlines efficiently.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Sample Work</h2>
            <div className="space-y-5">
              <div className="border rounded-2xl p-5">
                <h3 className="font-bold text-lg">Inbox & Calendar Management</h3>
                <p className="text-gray-700 mt-2 leading-7">
                  Organized client inboxes, filtered urgent communications, scheduled meetings, and coordinated reminders to improve workflow efficiency and response time.
                </p>
              </div>

              <div className="border rounded-2xl p-5">
                <h3 className="font-bold text-lg">Lead Generation Spreadsheet</h3>
                <p className="text-gray-700 mt-2 leading-7">
                  Created organized prospect lists containing business information, contact details, and lead tracking data using Google Sheets and CRM platforms.
                </p>
              </div>

              <div className="border rounded-2xl p-5">
                <h3 className="font-bold text-lg">Customer Support Assistance</h3>
                <p className="text-gray-700 mt-2 leading-7">
                  Managed customer inquiries, account follow-ups, and issue resolution through email and phone support while maintaining professionalism and customer satisfaction.
                </p>
              </div>

              <div className="border rounded-2xl p-5">
                <h3 className="font-bold text-lg">Sales & Appointment Coordination</h3>
                <p className="text-gray-700 mt-2 leading-7">
                  Assisted with appointment setting, sales coordination, and client follow-ups to support business operations and maintain smooth communication pipelines.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
