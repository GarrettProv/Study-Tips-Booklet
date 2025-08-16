import React, { useRef } from "react";

const TIPS = [
  {
    title: "Use the Pomodoro Technique",
    text: "Study for 25 minutes, then take a 5-minute break to maintain focus.",
    img: "/pomodoro.png",
    alt: "Student studying by a clock set to 25 minutes",
  },
  {
    title: "Teach What You Learn",
    text: "Explain the material out loud to a friend—or to yourself—to cement understanding.",
    img: "/teach.png",
    alt: "Two students discussing notes",
  },
  {
    title: "Organize with a Planner",
    text: "Write down deadlines, exams, and tasks to avoid last-minute stress.",
    img: "/planner.png",
    alt: "Open planner with assignments",
  },
  {
    title: "Active Recall > Rereading",
    text: "Quiz yourself and practice retrieval instead of passively rereading notes.",
    img: "/recall.png",
    alt: "Lightbulb over a brain",
  },
  {
    title: "Limit Digital Distractions",
    text: "Silence your phone or put it in another room while you study.",
    img: "/distractions.png",
    alt: "Phone with a do-not-disturb sign",
  },
  {
    title: "Mix Study Locations",
    text: "Rotate between the library, a café, and your desk to keep focus fresh.",
    img: "/locations.png",
    alt: "Student working in a cafe",
  },
  {
    title: "Reward Yourself",
    text: "Set small goals and celebrate progress with a short break or treat.",
    img: "/reward.png",
    alt: "Student holding a small reward",
  },
];

export default function StudyTipsBooklet() {
  const handlePrint = () => window.print();

  return (
    <div className="app">
      <header>
        <h1>Study Tips Booklet</h1>
        <button onClick={handlePrint} className="print-btn">
          Print / Save as PDF
        </button>
      </header>

      <main>
        <p>
          A quick, AI-assisted guide for college students to study smarter.
          Replace images below with your AI-generated illustrations, then click
          <span style={{ fontWeight: "bold" }}> Print / Save as PDF</span> to
          export.
        </p>

        <section className="cards">
          {TIPS.map((tip, i) => (
            <div className="card" key={i}>
              <h3>{i + 1}. {tip.title}</h3>
              <img src={tip.img} alt={tip.alt} />
              <p>{tip.text}</p>
            </div>
          ))}
        </section>

        <footer>
          <p style={{ fontSize: "0.8rem", marginTop: "2rem", color: "#555" }}>
            Created with generative AI (text + images). Replace placeholder
            images with your AI-generated visuals and export as PDF for your
            portfolio.
          </p>
        </footer>
      </main>
    </div>
  );
}
