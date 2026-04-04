// src/data/structure.ts
// Story structures and narrative frameworks

export interface StoryStructure {
  name: string;
  origin: string;
  overview: string;
  beats: string[];
  strengths: string[];
  weaknesses: string[];
  best_for: string;
  example: string;
}

export const STRUCTURES: StoryStructure[] = [
  {
    name: "Three-Act Structure",
    origin: "Aristotle (Poetics, ~335 BC), refined by Syd Field (1979)",
    overview: "The foundational Western narrative structure. Act 1 (Setup, ~25%) establishes character, world, and the inciting incident. Act 2 (Confrontation, ~50%) escalates conflict through rising action and a midpoint reversal. Act 3 (Resolution, ~25%) delivers the climax and denouement. Nearly every Hollywood film and most commercial novels follow this structure.",
    beats: [
      "ACT 1 — SETUP (first quarter):",
      "  - Opening: Establish the protagonist in their ordinary world",
      "  - Inciting Incident: An event that disrupts the status quo",
      "  - First Plot Point / Break into Act 2: The protagonist commits to action",
      "",
      "ACT 2 — CONFRONTATION (middle half):",
      "  - Rising Action: Escalating obstacles, try/fail cycles",
      "  - Midpoint: A reversal or revelation that changes everything (false victory or false defeat)",
      "  - Complications deepen: Stakes rise, allies are lost, the protagonist is tested",
      "  - Second Plot Point / All Is Lost: The lowest point, crisis",
      "",
      "ACT 3 — RESOLUTION (final quarter):",
      "  - Climax: The protagonist faces the central conflict in a final confrontation",
      "  - Falling Action: Consequences of the climax play out",
      "  - Denouement: New equilibrium established, character arc resolved"
    ],
    strengths: [
      "Universal and intuitive — audiences instinctively understand it",
      "Flexible enough for any genre",
      "Clear momentum with rising stakes",
      "The midpoint reversal prevents saggy middles"
    ],
    weaknesses: [
      "Can feel formulaic if followed too rigidly",
      "The long Act 2 is where most writers struggle",
      "May not suit experimental, literary, or non-Western narratives",
      "The 'all is lost' moment can feel cliché if not earned"
    ],
    best_for: "Commercial fiction, screenwriting, genre fiction. The default structure — learn it even if you plan to break it.",
    example: "The Lord of the Rings: Act 1 — The Shire, Frodo gets the Ring, leaves home. Act 2 — The Fellowship, Moria, breaking of the Fellowship, Helm's Deep, Shelob. Act 3 — Mount Doom, the destruction of the Ring, the scouring of the Shire, the Grey Havens."
  },
  {
    name: "The Hero's Journey (Monomyth)",
    origin: "Joseph Campbell, The Hero with a Thousand Faces (1949); adapted by Christopher Vogler for screenwriting (1992)",
    overview: "A mythic narrative pattern found across world cultures. The hero leaves the ordinary world, enters a special world of adventure, faces trials and transformation, and returns changed with a boon for their community. George Lucas explicitly used Campbell's framework for Star Wars.",
    beats: [
      "ACT 1 — DEPARTURE:",
      "  1. Ordinary World: The hero's normal life before the adventure",
      "  2. Call to Adventure: A problem or challenge presents itself",
      "  3. Refusal of the Call: The hero hesitates or declines",
      "  4. Meeting the Mentor: A guide provides wisdom, tools, or confidence",
      "  5. Crossing the First Threshold: The hero commits and enters the special world",
      "",
      "ACT 2 — INITIATION:",
      "  6. Tests, Allies, Enemies: The hero learns the rules of the special world",
      "  7. Approach to the Inmost Cave: Preparations for the central ordeal",
      "  8. The Ordeal: The hero faces their greatest challenge — death and rebirth",
      "  9. Reward (Seizing the Sword): The hero gains what they came for",
      "",
      "ACT 3 — RETURN:",
      "  10. The Road Back: The hero begins the journey home, often pursued",
      "  11. Resurrection: A final test where the hero applies everything learned",
      "  12. Return with the Elixir: The hero returns home, transformed, bringing a gift"
    ],
    strengths: [
      "Psychologically resonant — maps to universal human development",
      "Provides clear character arc from ordinary to extraordinary",
      "Rich mythic archetypes (mentor, shapeshifter, shadow, trickster)",
      "Proven across thousands of years of storytelling"
    ],
    weaknesses: [
      "Can feel repetitive when applied rigidly (every blockbuster feels the same)",
      "Centers a single protagonist — poorly suited for ensemble stories",
      "Implicitly masculine and Western — the 'hero' conquering the 'unknown'",
      "Not every story is about transformation through ordeal"
    ],
    best_for: "Fantasy, science fiction, adventure, coming-of-age. Any story about personal transformation through external challenge.",
    example: "Star Wars (A New Hope): Ordinary World (Tatooine) → Call (Leia's message) → Refusal (Luke has chores) → Mentor (Obi-Wan) → Threshold (leaving Tatooine) → Tests (Mos Eisley, Death Star) → Ordeal (trash compactor, Obi-Wan's death) → Reward (rescuing Leia) → Road Back (Death Star attack) → Resurrection (trusting the Force) → Elixir (medals ceremony)"
  },
  {
    name: "Save the Cat Beat Sheet",
    origin: "Blake Snyder, Save the Cat! (2005)",
    overview: "A screenwriting-focused structure with 15 specific beats mapped to page numbers (or percentage of total). Extremely prescriptive but effective for commercial storytelling. Emphasizes audience engagement — the protagonist must be likeable (save a cat!), the premise must be delivered in the 'Fun and Games' section.",
    beats: [
      "1. Opening Image (0-1%): Visual snapshot of the 'before'",
      "2. Theme Stated (5%): Someone states the theme (protagonist doesn't get it yet)",
      "3. Setup (1-10%): Establish protagonist, world, stakes, six things that need fixing",
      "4. Catalyst (10%): Inciting incident — life changes forever",
      "5. Debate (10-25%): Protagonist hesitates, weighs options",
      "6. Break into Two (25%): Active choice to enter the new world",
      "7. B Story (30%): Subplot begins (carries the theme, often romance)",
      "8. Fun and Games (30-50%): The promise of the premise — trailer moments",
      "9. Midpoint (50%): False victory or false defeat, stakes raised",
      "10. Bad Guys Close In (50-75%): External + internal pressure mounts",
      "11. All Is Lost (75%): Lowest point, whiff of death",
      "12. Dark Night of the Soul (75-85%): Protagonist at bottom, before breakthrough",
      "13. Break into Three (85%): A+B stories merge, solution found via theme",
      "14. Finale (85-99%): Apply lessons, defeat antagonist, create new world",
      "15. Final Image (99-100%): Opposite of opening image — proof of transformation"
    ],
    strengths: [
      "Extremely specific — tells you exactly where each beat should land",
      "Emphasizes audience engagement (likeable hero, clear premise delivery)",
      "The 'Fun and Games' concept prevents boring middle sections",
      "Works as a diagnostic tool for stories that 'feel off'"
    ],
    weaknesses: [
      "Can feel formulaic — critics call it 'screenwriting by numbers'",
      "Not suited for literary, experimental, or slow-burn narratives",
      "Over-specificity about page numbers can be constraining",
      "Focuses on commercial appeal, which may not be every writer's goal"
    ],
    best_for: "Screenwriting, commercial genre fiction, debut novels. Excellent as a first structural framework to learn.",
    example: "The Matrix: Opening Image (Trinity's superhuman escape) → Setup (Neo as bored office worker) → Catalyst (follow the white rabbit) → Break into Two (takes the red pill) → Fun and Games (kung fu training, jumping between buildings) → Midpoint (Oracle says he's not The One) → All Is Lost (Morpheus captured) → Dark Night (choosing to go back) → Break into Three (believes in himself) → Finale (bullet-dodging, defeating Agent Smith) → Final Image (Neo flies)"
  },
  {
    name: "Five-Act Structure",
    origin: "Gustav Freytag (Freytag's Pyramid, 1863), based on Shakespeare's plays",
    overview: "An expansion of three-act structure into five distinct phases, visualized as a pyramid. Particularly suited for drama and tragedy. The key addition is the explicit falling action phase between climax and resolution, and the clear identification of the turning point.",
    beats: [
      "Act 1 — Exposition: Introduce characters, setting, and the initial situation",
      "Act 2 — Rising Action: Complications build, stakes escalate, conflict deepens",
      "Act 3 — Climax (Turning Point): The peak of the drama, the decisive moment",
      "Act 4 — Falling Action: Consequences of the climax unfold, tension releases",
      "Act 5 — Denouement (Resolution/Catastrophe): Final outcome, new equilibrium (or tragedy)"
    ],
    strengths: [
      "Excellent for tragedy — the falling action gives space for consequences",
      "Clear symmetry (rise and fall) creates satisfying structure",
      "Forces the climax to the center, creating balanced momentum",
      "Well-suited for stage plays and literary fiction"
    ],
    weaknesses: [
      "The central climax can feel early for modern audiences used to late climaxes",
      "Falling action can drag if not handled carefully",
      "Less suited for thriller/action where the climax should be near the end",
      "The pyramid shape assumes a single peak — doesn't account for double climaxes"
    ],
    best_for: "Drama, tragedy, Shakespeare-inspired work, literary fiction with moral weight.",
    example: "Hamlet: Exposition (ghost appears, Hamlet learns of murder) → Rising Action (play-within-a-play, killing Polonius) → Climax (confrontation with Gertrude, point of no return) → Falling Action (Ophelia's madness/death, Laertes' plot) → Catastrophe (the duel, everyone dies)"
  },
  {
    name: "Fichtean Curve",
    origin: "Named after Johann Fichte; popularized in modern creative writing instruction",
    overview: "Begins in medias res — in the middle of action. No lengthy setup. The story opens with crisis, then alternates between rising action and brief moments of exposition (delivered as needed). Multiple crises build toward the climax. Ideal for fast-paced narratives.",
    beats: [
      "1. Inciting crisis (opens the story — NO setup before this)",
      "2. Brief exposition woven into action (only what's needed, when it's needed)",
      "3. Second crisis (escalation)",
      "4. More exposition as needed (backstory dripped in through dialogue/flashback)",
      "5. Third crisis (highest pre-climax tension)",
      "6. Climax (the culmination of all crises)",
      "7. Falling action and resolution (brief)"
    ],
    strengths: [
      "Immediate engagement — no slow opening to lose readers",
      "Exposition is delivered in context, making it feel natural",
      "Multiple crises create relentless momentum",
      "Perfect for modern attention spans and genre fiction"
    ],
    weaknesses: [
      "Can be disorienting if the reader is dropped in without enough context",
      "Little room for quiet character development",
      "Exhausting over long narratives — readers need breathing room",
      "Backstory delivery requires skill to avoid awkward info-dumps"
    ],
    best_for: "Thrillers, mysteries, action-adventure, short stories, prologues. Any story that needs to hook immediately.",
    example: "The Bourne Identity: Opens with a man pulled from the ocean with amnesia and bullet wounds. No backstory. Each crisis (assassins, embassy, discovery of skills) reveals more about who he is. Exposition emerges through action."
  },
  {
    name: "Kishotenketsu",
    origin: "East Asian narrative structure (Chinese, Japanese, Korean), rooted in classical Chinese poetry",
    overview: "A four-act structure that does NOT require conflict as the driving force. Ki (introduction), Sho (development), Ten (twist/pivot), Ketsu (conclusion). The 'Ten' is the key — an unexpected shift in perspective or a surprising juxtaposition that recontextualizes everything. Common in manga, Studio Ghibli films, and literary fiction.",
    beats: [
      "Ki (Introduction): Establish the characters, world, and situation. Set the tone.",
      "Sho (Development): Deepen the elements introduced in Ki. Build on them without introducing conflict necessarily. Explore, expand.",
      "Ten (Twist/Turn): An unexpected element enters — a new perspective, a surprising connection, or a shift that makes the reader see everything differently. This is NOT necessarily a conflict — it can be a juxtaposition, a revelation, or a change of context.",
      "Ketsu (Conclusion): Harmonize all elements. The Ki and Sho are now seen through the lens of the Ten. Resolution doesn't require defeating an antagonist — it may simply be a new understanding."
    ],
    strengths: [
      "Allows stories without traditional conflict — ideal for slice-of-life, contemplative narratives",
      "The 'twist' creates surprise and depth without requiring an antagonist",
      "Culturally rich alternative to Western conflict-driven structures",
      "Excellent for short-form storytelling, essays, and visual narratives"
    ],
    weaknesses: [
      "Unfamiliar to Western audiences who expect conflict-driven narrative",
      "The 'twist' can feel arbitrary if not well-executed",
      "Harder to sustain over novel length without additional structural support",
      "May feel plotless to readers expecting rising action and climax"
    ],
    best_for: "Manga, anime, slice-of-life, literary fiction, short stories, picture books, any narrative where the point is understanding rather than victory.",
    example: "My Neighbor Totoro: Ki (sisters move to the country) → Sho (they explore their new home, discover nature spirits) → Ten (the younger sister goes missing — but this isn't a 'conflict' so much as a shift in emotional register) → Ketsu (Totoro helps find her, the family is whole, the mother is getting better)"
  },
  {
    name: "In Medias Res",
    origin: "Homer (The Iliad, ~8th century BC), coined by Horace",
    overview: "Not a full structure but a technique: begin in the middle of the action. The Iliad doesn't start with the beginning of the Trojan War — it starts in the ninth year. Backstory is filled in through flashback, dialogue, and exposition. Forces immediate engagement.",
    beats: [
      "1. Open in the middle of dramatic action or at a moment of high tension",
      "2. The reader/audience is disoriented but intrigued — questions are raised",
      "3. Brief flashback or exposition fills in what happened before",
      "4. Return to present action with the reader now oriented",
      "5. Continue with the story's main narrative"
    ],
    strengths: [
      "Hooks the reader immediately",
      "Creates natural suspense (what happened before? why are we here?)",
      "Avoids boring setup scenes",
      "Classic technique — used by Homer, Virgil, Milton, and thousands of modern works"
    ],
    weaknesses: [
      "Disorientation can turn readers off if context is withheld too long",
      "Flashback exposition can feel clunky if not handled well",
      "Overused in modern fiction — some readers expect and are bored by it",
      "The 'real' beginning still needs to be told eventually"
    ],
    best_for: "Any genre. Especially effective for thrillers, literary fiction, and stories with complex timelines.",
    example: "Breaking Bad: The pilot opens with Walter White in his underwear in the desert, driving an RV while bodies slide around in the back. Then flashes back to show how he got there."
  },
  {
    name: "Story Circle (Dan Harmon)",
    origin: "Dan Harmon (Community, Rick and Morty), simplified from Campbell's monomyth",
    overview: "An eight-beat simplification of the hero's journey designed for episodic television. Each episode (or story) follows the same circle: a character starts in comfort, wants something, enters an unfamiliar situation, adapts, gets what they wanted, pays a price, returns, and has changed. Dead simple to apply.",
    beats: [
      "1. YOU: A character is in a zone of comfort (the status quo)",
      "2. NEED: But they want something (conscious desire)",
      "3. GO: They enter an unfamiliar situation (cross a threshold)",
      "4. SEARCH: They adapt to it (tests, allies, enemies)",
      "5. FIND: They get what they wanted (or think they do)",
      "6. TAKE: But they pay a heavy price for it (the cost)",
      "7. RETURN: They return to the familiar situation",
      "8. CHANGE: Having changed (they're not the same person)"
    ],
    strengths: [
      "Extremely simple — 8 beats, easy to memorize",
      "Works for episodes, scenes, entire series, and individual character arcs",
      "Forces transformation — the character must change",
      "Applicable to comedy and drama equally"
    ],
    weaknesses: [
      "Very simplified — loses nuance of Campbell's full framework",
      "Repetitive if every episode follows the same circle",
      "The 'pay a price' beat can feel forced in lighter stories",
      "Not suited for complex, multi-threaded narratives without modification"
    ],
    best_for: "Television episodes, short stories, game narratives, any story that needs to be told in a compact space.",
    example: "A Rick and Morty episode: YOU (Morty at school) → NEED (wants to impress a girl) → GO (Rick takes him to alien dimension) → SEARCH (navigates alien society) → FIND (gets the thing) → TAKE (everything goes wrong, people die) → RETURN (back home) → CHANGE (Morty is a little more jaded)"
  }
];

export const STRUCTURE_MAP = new Map<string, StoryStructure>(
  STRUCTURES.flatMap(s => [
    [s.name.toLowerCase(), s],
    ...(s.name === "Three-Act Structure" ? [["three act", s], ["3 act", s], ["three-act", s]] as [string, StoryStructure][] : []),
    ...(s.name === "The Hero's Journey (Monomyth)" ? [["heros journey", s], ["hero's journey", s], ["monomyth", s], ["campbell", s]] as [string, StoryStructure][] : []),
    ...(s.name === "Save the Cat Beat Sheet" ? [["save the cat", s], ["beat sheet", s], ["snyder", s]] as [string, StoryStructure][] : []),
    ...(s.name === "Five-Act Structure" ? [["five act", s], ["5 act", s], ["freytag", s], ["freytags pyramid", s]] as [string, StoryStructure][] : []),
    ...(s.name === "Fichtean Curve" ? [["fichtean", s], ["in medias res curve", s]] as [string, StoryStructure][] : []),
    ...(s.name === "Kishotenketsu" ? [["kishotenketsu", s], ["ki sho ten ketsu", s], ["japanese structure", s]] as [string, StoryStructure][] : []),
    ...(s.name === "In Medias Res" ? [["in medias res", s], ["medias res", s]] as [string, StoryStructure][] : []),
    ...(s.name === "Story Circle (Dan Harmon)" ? [["story circle", s], ["dan harmon", s], ["harmon", s]] as [string, StoryStructure][] : []),
  ])
);
