// src/data/genres.ts
// Genre-specific writing advice, conventions, and common pitfalls

export interface Genre {
  name: string;
  overview: string;
  conventions: string[];
  reader_expectations: string[];
  common_pitfalls: string[];
  recommended_structures: string[];
  notable_practitioners: string[];
}

export const GENRES: Genre[] = [
  {
    name: "Literary Fiction",
    overview: "Character-driven fiction where the quality of prose, depth of theme, and complexity of character are the primary draws. Plot serves character rather than the reverse. Often explores the human condition through ordinary (or extraordinary) lives. Prize-winning fiction typically falls here.",
    conventions: [
      "Character interiority is deep — we spend significant time in characters' minds",
      "Prose quality is elevated — word choice, rhythm, and imagery are central",
      "Ambiguity is valued — stories may not resolve cleanly or moralize explicitly",
      "Theme drives structure — the story's form reflects its meaning",
      "Settings are richly observed — place becomes character",
      "Pacing tends toward reflective rather than urgent"
    ],
    reader_expectations: [
      "Beautiful, precise prose — every sentence considered",
      "Complex, flawed, believable characters who resist easy categorization",
      "Thematic depth — the story means something beyond its plot",
      "Emotional truth — even if events are extraordinary, emotions must ring true",
      "An ending that's satisfying on an intellectual/emotional level, even if not 'happy'"
    ],
    common_pitfalls: [
      "Purple prose — sacrificing clarity for ornamentation",
      "Nothing happens — character study without dramatic movement",
      "Pretentiousness — obscurity for its own sake, not in service of meaning",
      "Navel-gazing — too much interiority, not enough external action",
      "Contempt for genre — literary fiction that looks down on plot is often boring literary fiction",
      "MFA voice — polished, technically competent, but lacking genuine emotional risk"
    ],
    recommended_structures: ["Three-Act Structure (flexible)", "Five-Act Structure", "Kishotenketsu", "In Medias Res"],
    notable_practitioners: ["Toni Morrison", "Kazuo Ishiguro", "Marilynne Robinson", "Cormac McCarthy", "George Saunders", "Chimamanda Ngozi Adichie"]
  },
  {
    name: "Fantasy",
    overview: "Fiction set in worlds with supernatural elements — magic, mythical creatures, alternate histories, invented peoples. Ranges from epic (Tolkien) to urban (Gaiman) to literary (Le Guin). Worldbuilding is a core skill. The best fantasy uses its impossible elements to explore very real human themes.",
    conventions: [
      "Worldbuilding: the world has its own rules, history, cultures, and logic",
      "Magic systems: range from soft/mysterious (Tolkien) to hard/rule-based (Sanderson)",
      "Quest or journey narratives are common (but not required)",
      "Good vs. evil — often with nuance in modern fantasy",
      "Maps, appendices, glossaries for complex worlds",
      "Series format: trilogies and longer series dominate the market"
    ],
    reader_expectations: [
      "A world that feels real and internally consistent",
      "Magic that follows its own rules (or is consistently mysterious)",
      "A sense of wonder — moments that make the reader stop and marvel",
      "Stakes that matter — what is the cost of failure?",
      "Character growth through external challenges",
      "A satisfying resolution (fantasy readers tolerate long series but expect payoff)"
    ],
    common_pitfalls: [
      "Worldbuilder's disease: spending more time on the world than the story",
      "Info-dumping: chapters of history, geography, and magic rules before the plot starts",
      "Chosen One fatigue: another prophecy, another farm boy, another destiny",
      "Soft magic as deus ex machina: if the reader doesn't understand the magic, it can't solve problems satisfyingly",
      "Monocultures: every elf is the same, every dwarf is the same — real cultures are diverse",
      "Forgetting the human: magic and monsters should illuminate human nature, not replace it"
    ],
    recommended_structures: ["Hero's Journey", "Three-Act Structure", "Save the Cat Beat Sheet"],
    notable_practitioners: ["J.R.R. Tolkien", "Ursula K. Le Guin", "Brandon Sanderson", "N.K. Jemisin", "Robin Hobb", "Patrick Rothfuss", "Joe Abercrombie"]
  },
  {
    name: "Science Fiction",
    overview: "Fiction that extrapolates from scientific or technological premises. 'What if this technology existed?' 'What if this scientific principle were different?' Ranges from hard SF (scientifically rigorous) to soft SF (focused on social/psychological implications). The best SF uses speculative settings to examine present-day human concerns.",
    conventions: [
      "A speculative premise rooted in science or technology (even if loosely)",
      "Worldbuilding through extrapolation — what would society look like if X were true?",
      "Ideas drive narrative — the concept is often as important as the characters",
      "Social commentary through metaphor — alien cultures reflect human issues",
      "Technology as character — how tech shapes society and individuals",
      "Plausibility within the story's rules (hard SF demands scientific accuracy)"
    ],
    reader_expectations: [
      "An interesting 'what if' premise explored thoughtfully",
      "Internal consistency — the science/technology should follow its own rules",
      "Implications explored: not just 'what is the technology' but 'what does it mean for people?'",
      "Sense of discovery and intellectual stimulation",
      "Characters who respond believably to extraordinary circumstances"
    ],
    common_pitfalls: [
      "Idea over character: the concept is fascinating but the people are cardboard",
      "Techno-babble: pages of pseudo-scientific exposition that reads like a manual",
      "Present-day mindset in future setting: characters think and act exactly like 21st-century Americans despite living 500 years from now",
      "Dystopia fatigue: another totalitarian government, another rebellion, another chosen teenager",
      "Ignoring social implications: inventing faster-than-light travel but not exploring how it would change culture, politics, economics",
      "Monoplanet: an entire planet has one climate, one culture, one language"
    ],
    recommended_structures: ["Three-Act Structure", "Fichtean Curve", "In Medias Res"],
    notable_practitioners: ["Ursula K. Le Guin", "Isaac Asimov", "Octavia Butler", "Ted Chiang", "Ann Leckie", "Liu Cixin", "Philip K. Dick"]
  },
  {
    name: "Horror",
    overview: "Fiction designed to evoke fear, dread, and unease. The best horror explores what we're actually afraid of — loss, powerlessness, the unknown, the corruption of the familiar. Horror is not just about monsters; it's about vulnerability. The genre ranges from supernatural (King) to psychological (Jackson) to cosmic (Lovecraft) to literary (Shirley Jackson).",
    conventions: [
      "Escalating dread — unease builds gradually before the horror manifests",
      "The familiar made strange — horror often corrupts safe spaces (home, family, childhood)",
      "Isolation — characters are cut off from help (physically, socially, psychologically)",
      "Transgression — something is wrong, a line has been crossed, a rule broken",
      "The monster reveals theme — what the monster IS tells you what the story is about",
      "Ambiguity: the most unsettling horror leaves some things unexplained"
    ],
    reader_expectations: [
      "Genuine unease — not just jump scares but lingering dread",
      "Characters we care about — fear requires empathy",
      "Escalation — each chapter should be more disturbing than the last",
      "Atmosphere: the setting should feel oppressive, wrong, suffocating",
      "A sense that something fundamental is threatening the characters' worldview",
      "The possibility of a bad ending — horror must be willing to let the darkness win"
    ],
    common_pitfalls: [
      "Relying on gore instead of dread — violence without psychological horror is just gross",
      "Stupid characters: horror falls apart when characters make obviously idiotic decisions to serve the plot",
      "Explaining the monster too much — mystery is scarier than understanding",
      "Jump scare structure: tension → release → tension → release with no cumulative dread",
      "Consequence-free horror: terrible things happen but nothing permanently changes",
      "Cliché settings: another haunted house, another creepy child, another small town with a secret"
    ],
    recommended_structures: ["Fichtean Curve", "Three-Act Structure", "Five-Act Structure"],
    notable_practitioners: ["Stephen King", "Shirley Jackson", "Thomas Ligotti", "Carmen Maria Machado", "Paul Tremblay", "Victor LaValle", "Mariana Enriquez"]
  },
  {
    name: "Thriller / Suspense",
    overview: "Plot-driven fiction designed to keep the reader in a state of heightened anticipation. The engine is 'what happens next?' Thrillers move fast, raise stakes relentlessly, and put protagonists under extreme pressure. The distinction from mystery: in a mystery, you figure out what happened; in a thriller, you worry about what's going to happen.",
    conventions: [
      "High stakes from the start — lives, nations, or fundamental safety at risk",
      "Ticking clock — a deadline creates urgency throughout",
      "Plot twists and reversals — nothing is as it seems",
      "Cat-and-mouse dynamics between protagonist and antagonist",
      "Short chapters, fast pacing, chapter-end hooks",
      "The protagonist is often competent but outmatched"
    ],
    reader_expectations: [
      "Unputdownable pacing — constant forward momentum",
      "Stakes that escalate throughout — each act raises the threat",
      "A worthy antagonist who is smart, capable, and dangerous",
      "Twists that are surprising but fair (clues were planted)",
      "A satisfying climax that resolves the central tension",
      "Visceral tension — the reader should physically feel the stakes"
    ],
    common_pitfalls: [
      "Plot over character: exciting events happening to people we don't care about",
      "Deus ex machina: the protagonist is saved by coincidence rather than skill",
      "Villain monologue: the antagonist explains their plan when they should just act",
      "Fake-out deaths: 'killing' a character only to reveal they survived, eroding stakes",
      "Info-dump openings: pages of backstory before the action starts",
      "Climax by gunfight: the resolution comes down to who shoots better, not who's smarter"
    ],
    recommended_structures: ["Fichtean Curve", "Save the Cat Beat Sheet", "Three-Act Structure"],
    notable_practitioners: ["Gillian Flynn", "Lee Child", "Tana French", "Dennis Lehane", "Don Winslow", "Stieg Larsson"]
  },
  {
    name: "Mystery / Crime",
    overview: "Fiction centered on solving a puzzle — usually a crime. The reader follows a detective (professional or amateur) as they gather clues, interview suspects, and piece together the truth. The genre demands fair play: the reader should have access to the same clues as the detective. The satisfaction is in the revelation.",
    conventions: [
      "A crime or puzzle at the center (usually murder)",
      "A detective figure (professional, amateur, or reluctant)",
      "Clue-laying: evidence is presented for the reader to analyze",
      "Red herrings: false leads that misdirect without cheating",
      "The revelation: the solution is surprising but inevitable in retrospect",
      "Fair play: the reader has access to all necessary clues before the solution"
    ],
    reader_expectations: [
      "An engaging puzzle — the reader should want to solve it",
      "Fair clues planted throughout — the solution should be deducible",
      "A satisfying 'aha' moment when the truth is revealed",
      "An interesting detective with a distinctive method or personality",
      "Multiple viable suspects with believable motives",
      "A resolution that feels earned, not arbitrary"
    ],
    common_pitfalls: [
      "Withholding clues: the detective knows things the reader doesn't — that's cheating",
      "The too-obvious suspect turns out to be guilty — reader feels let down",
      "Convoluted solution: the answer requires so many coincidences that it's implausible",
      "Boring procedural: following procedure step-by-step without dramatic tension",
      "The detective is too perfect: never wrong, never stumped, never surprised",
      "Deus ex DNA: modern forensics solve everything — remove the reader's ability to play along"
    ],
    recommended_structures: ["Three-Act Structure", "Fichtean Curve", "Five-Act Structure"],
    notable_practitioners: ["Agatha Christie", "Raymond Chandler", "Tana French", "Walter Mosley", "Ruth Rendell", "Attica Locke"]
  },
  {
    name: "Romance",
    overview: "Fiction centered on a romantic relationship with an emotionally satisfying, optimistic ending. The romance IS the plot — not a subplot. The genre has strict conventions that readers expect: the central couple must be established early, the relationship must drive every major plot beat, and the ending must be happy (HEA: Happily Ever After) or optimistic (HFN: Happy For Now).",
    conventions: [
      "Central love story: the romance is the main plot, not a subplot",
      "HEA or HFN ending: the couple must end up together (or at least optimistic)",
      "Meet-cute or inciting moment: the couple's first significant interaction",
      "Obstacles to the relationship: internal (fear, past trauma) and external (family, society, circumstances)",
      "The black moment: the crisis that makes it seem impossible for the couple to be together",
      "Emotional intimacy builds alongside physical intimacy",
      "Dual POV: many romances alternate between both love interests' perspectives"
    ],
    reader_expectations: [
      "Chemistry: the reader must feel the attraction between the protagonists",
      "Emotional arc: the relationship should develop believably from meeting to commitment",
      "The guaranteed happy ending — this is non-negotiable in genre romance",
      "Internal conflict that feels real — not manufactured misunderstandings",
      "Both protagonists are developed, interesting characters with agency",
      "Swoon moments — scenes that make the reader's heart race"
    ],
    common_pitfalls: [
      "Miscommunication as sole conflict: the entire problem would be solved by one honest conversation",
      "Insta-love without chemistry: characters declare feelings without the reader feeling them",
      "One-dimensional love interest: the romantic partner is a prize, not a person",
      "The Big Secret: one character hides something obvious; revelation is the only conflict",
      "No life outside the romance: characters with no friends, hobbies, goals beyond the relationship",
      "Purple prose overload: 'his smoldering azure orbs' — restraint is sexier than excess"
    ],
    recommended_structures: ["Three-Act Structure", "Save the Cat Beat Sheet", "Story Circle"],
    notable_practitioners: ["Nora Roberts", "Talia Hibbert", "Christina Lauren", "Casey McQuiston", "Helen Hoang", "Courtney Milan", "Beverly Jenkins"]
  }
];

export const GENRE_MAP = new Map<string, Genre>(
  GENRES.flatMap(g => [
    [g.name.toLowerCase(), g],
    ...(g.name === "Literary Fiction" ? [["literary", g]] as [string, Genre][] : []),
    ...(g.name === "Fantasy" ? [["fantasy", g], ["epic fantasy", g], ["urban fantasy", g]] as [string, Genre][] : []),
    ...(g.name === "Science Fiction" ? [["sci-fi", g], ["scifi", g], ["sf", g], ["science fiction", g]] as [string, Genre][] : []),
    ...(g.name === "Horror" ? [["horror", g]] as [string, Genre][] : []),
    ...(g.name === "Thriller / Suspense" ? [["thriller", g], ["suspense", g]] as [string, Genre][] : []),
    ...(g.name === "Mystery / Crime" ? [["mystery", g], ["crime", g], ["detective", g], ["whodunit", g]] as [string, Genre][] : []),
    ...(g.name === "Romance" ? [["romance", g], ["love story", g]] as [string, Genre][] : []),
  ])
);
