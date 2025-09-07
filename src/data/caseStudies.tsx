import React from "react";

export const aiAssistedCodingCaseStudy = {
  id: "ai-assisted-coding",
  title: "AI Assisted Coding for Healthcare Providers",
  description: "Redesigning the EM coding experience to reduce provider time spent in charting and reduce under coding of clinic visits",
  company: "UrgentIQ",
  category: "Web Platform",
  tags: ["User Research", "Product Design", "AI", "Web", "Health"],
  heroImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
  metadata: {
    role: ["Product Designer", "Product Manager"],
    team: ["Product Designer", "Clinical Expert", "2 Developers"],
    tools: ["Figma", "Notion"],
    timeline: ["4 weeks", "Oct-Nov 2024", "Part-time"]
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Redesign the Medical Coding experience for providers to reduce time spent on documentation and reduce billing errors related to medical coding.
            </h2>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">About UrgentIQ</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                UrgentIQ is a New York-based health tech startup founded in 2022, focusing on AI-powered software for urgent care clinics and modern EMR systems to streamline clinical documentation and improve patient care.
              </p>
              <p>
                As Product and Design Lead at UrgentIQ, I led the development of the EM Coding automation feature, working closely with clinical experts and engineering teams to create a solution that addresses real provider pain points.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Background</h3>
            <div className="space-y-4 text-gray-700">
              <h4 className="text-lg font-medium text-gray-900">What is EM Coding and Why It Matters</h4>
              <p>
                Evaluation and Management (EM) coding is a standardized system for classifying patient visit complexity for reimbursement. It's guided by AMA and CMS criteria and determines how much healthcare providers get paid for their services.
              </p>
              <p>
                Accurate EM coding is crucial for clinical documentation and proper reimbursement in urgent care clinics. Under-coding leads to lost income, while over-coding can result in audits and penalties.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "background",
      title: "Background",
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Problem</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Provider Pain Points</h3>
              <ul className="list-disc list-inside space-y-2 text-red-700">
                <li>Providers spend 15-20 minutes per patient on coding documentation</li>
                <li>High error rates lead to under-coding and lost revenue</li>
                <li>Complex coding guidelines are difficult to remember and apply</li>
                <li>Time spent on coding reduces time for patient care</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Current State Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Manual Process</h4>
                <p className="text-gray-700 text-sm">
                  Providers manually review patient charts and select appropriate codes based on their knowledge and experience.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Time Investment</h4>
                <p className="text-gray-700 text-sm">
                  Average 15-20 minutes per patient visit spent on coding and documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "research",
      title: "Research",
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">User Research</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                <div className="text-sm text-blue-800">Provider Interviews</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">5</div>
                <div className="text-sm text-green-800">Clinic Observations</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <div className="text-sm text-purple-800">Billing Expert Sessions</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Insights</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Coding Confidence Varies</h4>
                  <p className="text-gray-700 text-sm">Newer providers struggle with complex cases, while experienced providers have developed their own shortcuts.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Time Pressure is Real</h4>
                  <p className="text-gray-700 text-sm">Providers often rush through coding to see more patients, leading to errors and under-coding.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">AI Assistance is Welcome</h4>
                  <p className="text-gray-700 text-sm">Providers are open to AI assistance but want to maintain control and understanding of the process.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "ideation",
      title: "Ideation",
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Solution Design</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Coding Assistant</h3>
              <p className="text-gray-700 mb-6">
                An intelligent system that analyzes patient charts and suggests appropriate EM codes, 
                while providing explanations and allowing provider oversight.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl mb-2">🤖</div>
                  <h4 className="font-semibold text-gray-900 mb-1">AI Analysis</h4>
                  <p className="text-sm text-gray-600">Analyzes patient data and suggests codes</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl mb-2">👁️</div>
                  <h4 className="font-semibold text-gray-900 mb-1">Provider Review</h4>
                  <p className="text-sm text-gray-600">Providers can review and modify suggestions</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl mb-2">⚡</div>
                  <h4 className="font-semibold text-gray-900 mb-1">Quick Approval</h4>
                  <p className="text-sm text-gray-600">One-click approval for accurate suggestions</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                <div className="w-8 h-8 bg-[#DC134C] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Real-time Code Suggestions</h4>
                  <p className="text-gray-600 text-sm">AI analyzes patient data and suggests appropriate EM codes with confidence scores</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                <div className="w-8 h-8 bg-[#DC134C] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Explanation Panel</h4>
                  <p className="text-gray-600 text-sm">Clear explanations of why specific codes were suggested based on clinical criteria</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                <div className="w-8 h-8 bg-[#DC134C] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Provider Override</h4>
                  <p className="text-gray-600 text-sm">Providers can easily modify or reject suggestions and add their own codes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "results",
      title: "Results",
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Impact & Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
                <div className="text-sm text-green-800">Provider Adoption</div>
                <div className="text-xs text-green-600 mt-1">Within 2 weeks</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
                <div className="text-sm text-blue-800">Time Reduction</div>
                <div className="text-xs text-blue-600 mt-1">Coding time per patient</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                <div className="text-sm text-purple-800">Accuracy Rate</div>
                <div className="text-xs text-purple-600 mt-1">AI suggestions accepted</div>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">25%</div>
                <div className="text-sm text-orange-800">Revenue Increase</div>
                <div className="text-xs text-orange-600 mt-1">From better coding</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Provider Feedback</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic mb-2">
                  "This tool has completely changed how I approach coding. I can focus on patient care instead of spending time figuring out the right codes."
                </p>
                <p className="text-sm text-gray-500">- Dr. Sarah Chen, Urgent Care Physician</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic mb-2">
                  "The explanations help me learn and improve my coding skills. I feel more confident in my decisions."
                </p>
                <p className="text-sm text-gray-500">- Dr. Michael Rodriguez, Family Medicine</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "next-steps",
      title: "Next Steps",
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Future Enhancements</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Advanced AI Training</h3>
                  <p className="text-gray-700 text-sm">
                    Continue training the AI model with more diverse cases to improve accuracy and expand to other coding types beyond EM codes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-green-50 rounded-lg">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Integration Expansion</h3>
                  <p className="text-gray-700 text-sm">
                    Integrate with more EMR systems and expand to different types of healthcare facilities beyond urgent care.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-lg">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
                  <p className="text-gray-700 text-sm">
                    Build comprehensive analytics to help providers and administrators track coding performance and identify improvement opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Reflection</h3>
            <p className="text-gray-700">
              This project demonstrated the power of combining AI technology with user-centered design. By deeply understanding provider workflows and pain points, 
              we created a solution that not only improved efficiency but also enhanced the quality of care. The key was maintaining provider agency while 
              leveraging AI to handle the complex, time-consuming aspects of medical coding.
            </p>
          </div>
        </div>
      )
    }
  ]
};

export default aiAssistedCodingCaseStudy;
