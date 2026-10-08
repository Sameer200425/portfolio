import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Play, Trash2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function InteractiveCli() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'Initializing Khan Interactive Systems Console (v2.4.0-release)...',
    },
    {
      type: 'system',
      text: 'Connected to node cluster [asia-south1-a]. Type "help" or click quick commands below.',
    },
  ]);

  const terminalContainerRef = useRef(null);
  const inputRef = useRef(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'input', text: `$ ${cmdStr}` }];

    switch (trimmed) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available Commands:
  • about          : Display engineering background & specializations
  • projects       : Inspect featured GitHub production repositories
  • stack          : View full-stack Python, ML & web technologies
  • experience     : Review industry internships (HCLTech, Krutanic, Codsoft, Internpe)
  • education      : Display academic credentials & institutions
  • certifications : List verified professional certifications & credentials
  • infer          : Run simulated Vision Transformer (ViT) fraud inference test
  • contact        : Get direct contact & communication channels
  • clear          : Clear terminal buffer`,
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: `Pathan Sameer Khan - Python Full Stack Developer & ML Engineer
Education : B.E. Computer Science Engineering, AVIT (CGPA: 7.8)
Focus     : Full-stack web architectures (React, Node.js, Express, SQLite, FastAPI), Vision Transformers (ViT), Explainable AI (Grad-CAM), and MLOps delivery across internships at HCLTech and Krutanic Solutions.`,
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `Engineering Projects on GitHub:
1. Vision Transformer (ViT) Banking Fraud Recognition Engine [Final Year Project]
   • Stack: Vision Transformers, PyTorch, Grad-CAM XAI, FastAPI, Python
   • Focus: Document authenticity, feature attention maps, secure inference
2. university-admission-prediction-system [ML Decision Systems]
   • Stack: Python, Random Forest (94.5% Acc), FastAPI, React 18, TNEA 5-Yr Data
   • Repo : https://github.com/Sameer200425/university-admission-prediction-system
3. Todo-Application [Full-Stack Web App]
   • Stack: React, Node.js, Express, SQLite, Auth, Productivity Timers
   • Repo : https://github.com/Sameer200425/Todo-Application
4. Car_price_prediction [Machine Learning & Regression]
   • Stack: Python, Scikit-Learn, Random Forest, GridSearchCV 3-Fold, Joblib, CLI Predictor
   • Repo : https://github.com/Sameer200425/Car_price_prediction
5. Diwali_Sales_Analysis [Data Analytics & Spend Regression]
   • Stack: Python, Pandas, Seaborn, Matplotlib, Scikit-Learn, 11,250+ Transactions
   • Repo : https://github.com/Sameer200425/Diwali_Sales_Analysis
6. Handwritten-Digit-Recognition-System [Deep Learning]
   • Stack: TensorFlow/Keras, Sequential CNN, MNIST 70K, Tkinter Drawing Canvas
   • Repo : https://github.com/Sameer200425/Handwritten-Digit-Recognition-System
7. AI-Chatbot-for-College-Helpdesk [NLP & Dialogue]
   • Stack: Python, CountVectorizer + Logistic Regression, Rule Heuristics, JSON Intents
   • Repo : https://github.com/Sameer200425/AI-Chatbot-for-College-Helpdesk
8. Tic-Tac-Toe-Game-with-AI-Player [AI & Game Theory]
   • Stack: Python, Minimax Algorithm (Unbeatable), Tkinter GUI, CLI Mode
   • Repo : https://github.com/Sameer200425/Tic-Tac-Toe-Game-with-AI-Player`,
        });
        break;

      case 'stack':
        newHistory.push({
          type: 'output',
          text: `[Full-Stack & Web]     : Python, JavaScript, React, Node.js, Express, Tailwind CSS, FastAPI
[AI & Machine Learning] : Vision Transformers (ViT), PyTorch, Grad-CAM XAI, Scikit-Learn, Pandas, NumPy
[Databases & Cloud]     : SQLite, PostgreSQL, MySQL, MongoDB Certified, AWS Data Analytics
[Core Tooling]          : Git/GitHub, REST APIs, JWT Auth, Linux, Postman`,
        });
        break;

      case 'experience':
        newHistory.push({
          type: 'output',
          text: `Industry Track Record & Internships:
1. HCLTech (Jan 2026 – Apr 2026) | Industry Internship in LLM [Chennai]
   • Built intelligent banking fraud platform with CNN, ViT, and hybrid models.
   • Production MLOps with FastAPI endpoints, drift detection, and Grad-CAM XAI.
2. Krutanic Solutions (Dec 2025 – Feb 2026) | Data Science Intern [Remote]
   • Car Price Prediction system using Pandas, Scikit-learn, regression algorithms.
   • Diwali Sales Analysis with Matplotlib and Seaborn across 11,250+ transactions.
3. Codsoft (Jun 2025 – Jul 2025) | Python Programming Intern [Remote]
   • Developed Rock-Paper-Scissors, Contact Book, and Password Generator utilities.
4. Internpe (Jul 2024 – Aug 2024) | Web Development Intern [Remote]
   • Created dynamic interactive calculator applications with Java, HTML, CSS, JS.`,
        });
        break;

      case 'education':
        newHistory.push({
          type: 'output',
          text: `Academic Qualifications:
1. Aarupadai Veedu Institute of Technology (AVIT)
   • B.E. Computer Science Engineering (2022–2026) | CGPA: 7.8 / 10.0
2. Srinivasa Junior College
   • Higher Secondary (11th, 12th) (2020–2022) | Score: 68%
3. Golden Rule English Medium High School
   • Secondary School Certificate (Class X) (2019–2020) | Score: 86%`,
        });
        break;

      case 'certifications':
        newHistory.push({
          type: 'output',
          text: `Verified Certifications & Credentials:
• TCS iON Career Edge - Young Professional (Tata Consultancy Services)
• Getting Started with Data Analytics on AWS (Coursera / AWS)
• MongoDB: From Relational to Document Model & Python (Credential ID: MDBwlo3ktd0he)
• Python Programming Virtual Program (Codsoft)
• Python for Data Science, AI and Development (Coursera)
• Data Science Specialization (IBM / Coursera)
• Data Visualization Simulation (Tata Group / Forage)`,
        });
        break;

      case 'infer':
        newHistory.push({
          type: 'output',
          text: `[TEST RUN] Executing ViT Banking Document Fraud Inference Pass...
- Input Sample     : Check_Document_#89421.png
- Model            : Hybrid CNN + Vision Transformer (ViT-Base-Patch16)
- Grad-CAM Heatmap : High-attention focus on signature & MICR code field
- Latency          : 18.4 ms (FastAPI inference engine)
- Classification   : [AUTHENTIC VERIFIED] -> Confidence: 99.4%`,
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Connect with Pathan Sameer Khan:
- Phone    : ${PERSONAL_INFO.phone}
- Email    : ${PERSONAL_INFO.email}
- WhatsApp : ${PERSONAL_INFO.whatsapp}
- GitHub   : ${PERSONAL_INFO.github}
- LinkedIn : ${PERSONAL_INFO.linkedin}
- YouTube  : ${PERSONAL_INFO.youtube}
- Instagram: ${PERSONAL_INFO.instagram}`,
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not found: "${cmdStr}". Type "help" to view supported operations.`,
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const quickCommands = ['help', 'about', 'projects', 'stack', 'experience', 'education', 'infer', 'contact'];

  return (
    <section id="terminal" className="relative z-10 py-24 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Interactive Telemetry Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Developer CLI Sandbox
          </h2>
          <p className="text-zinc-400 text-sm">
            Execute real-time commands to query developer telemetry, run simulated Vision Transformer inference passes, and inspect system architecture.
          </p>
        </div>

        {/* Quick Command Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="text-xs font-mono text-zinc-500 mr-1">Quick Run:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-800 text-xs font-mono text-zinc-300 hover:text-emerald-400 transition-all flex items-center gap-1 active:scale-95"
            >
              <Play className="w-2.5 h-2.5 text-emerald-500" />
              <span>{cmd}</span>
            </button>
          ))}
          <button
            onClick={() => executeCommand('clear')}
            className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-all flex items-center gap-1"
            title="Clear Terminal Buffer"
          >
            <Trash2 className="w-2.5 h-2.5" />
            <span>clear</span>
          </button>
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl border border-zinc-800 bg-[#0d0d0f]/95 shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800/80">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-xs font-mono text-zinc-400">khan@cluster-node-01: ~</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ONLINE</span>
            </div>
          </div>

          {/* Terminal Scroll Area */}
          <div
            ref={terminalContainerRef}
            onClick={() => inputRef.current?.focus()}
            className="p-4 sm:p-6 font-mono text-xs sm:text-sm h-80 sm:h-96 overflow-y-auto space-y-2.5 select-text cursor-text"
          >
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed whitespace-pre-wrap">
                {item.type === 'system' && (
                  <div className="text-zinc-500">{item.text}</div>
                )}
                {item.type === 'input' && (
                  <div className="text-emerald-400 font-semibold">{item.text}</div>
                )}
                {item.type === 'output' && (
                  <div className="text-zinc-300">{item.text}</div>
                )}
                {item.type === 'error' && (
                  <div className="text-red-400">{item.text}</div>
                )}
              </div>
            ))}
          </div>

          {/* Terminal Command Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-4 py-3 bg-zinc-900/80 border-t border-zinc-800"
          >
            <span className="text-emerald-400 font-mono font-bold">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type a command (try 'about', 'projects', 'infer', 'experience')..."
              className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm outline-none placeholder:text-zinc-600"
            />
            <button
              type="submit"
              className="p-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
              title="Execute Command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
