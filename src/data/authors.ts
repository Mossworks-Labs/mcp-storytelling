// src/data/authors.ts
// Writing advice from diverse authors — many perspectives, sometimes contradictory

export interface Author {
  name: string;
  key_work: string;
  era: string;
  genre_focus: string;
  philosophy: string;
  core_principles: string[];
  notable_quotes: string[];
  writing_exercises: string[];
  contrarian_view: string;
}

export const AUTHORS: Author[] = [
  {
    name: "Stephen King",
    key_work: "On Writing: A Memoir of the Craft (2000)",
    era: "1970s–present",
    genre_focus: "Horror, thriller, literary fiction",
    philosophy: "Writing is a craft learned through practice. Write with the door closed, rewrite with the door open. Story comes from situation, not plot. Characters drive narrative. Kill your darlings. The first draft is for you; the second draft is for everyone else.",
    core_principles: [
      "Write every day — 2,000 words minimum, no excuses. Talent is cheaper than table salt; what separates the talented from the successful is hard work.",
      "2nd draft = 1st draft minus 10%. Cut ruthlessly. Every word must earn its place.",
      "The road to hell is paved with adverbs. Use strong verbs instead. 'He shouted' not 'he said loudly.'",
      "Write with the door closed (first draft — no audience, no critics, pure creation). Rewrite with the door open (revision — now consider the reader).",
      "Start with a situation, not a plot. Put interesting characters in a difficult situation and see what they do. 'What if...?' is the most powerful question.",
      "Read a lot and write a lot. There is no shortcut. Read 70-80 books a year. Read bad writing too — you'll learn what not to do.",
      "Kill your darlings. That beautiful sentence you love? If it doesn't serve the story, cut it. Marry the story, not the prose.",
      "Description begins in the writer's imagination and ends in the reader's. Don't over-describe. Give enough for the reader to fill in the rest.",
      "Dialogue is character. People reveal who they are by how they speak. Listen to real people talk.",
      "Avoid passive voice. Active voice makes prose more immediate and engaging. 'The body was discovered' → 'They found the body.'"
    ],
    notable_quotes: [
      "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
      "The scariest moment is always just before you start.",
      "If you want to be a writer, you must do two things above all others: read a lot and write a lot.",
      "Kill your darlings, kill your darlings, even when it breaks your egocentric little scribbler's heart, kill your darlings.",
      "The adverb is not your friend.",
      "I believe the road to hell is paved with adverbs, and I will shout it from the rooftops."
    ],
    writing_exercises: [
      "Write 2,000 words today. Don't stop, don't edit, don't look back. Do this every day for a month.",
      "Take a scene you've written and cut 10% of the words. Then cut another 10%. See if it's better.",
      "Rewrite a passage replacing all adverbs with stronger verbs.",
      "Write a short story starting with 'What if...' — a single impossible situation. No outline. See where the characters take it."
    ],
    contrarian_view: "King is skeptical of outlining and plotting in advance. He believes stories should be discovered, not planned. This directly contradicts McKee, Snyder, and Truby who advocate detailed structural planning."
  },
  {
    name: "Kurt Vonnegut",
    key_work: "Bagombo Snuff Box preface / Various lectures",
    era: "1950s–2000s",
    genre_focus: "Satirical fiction, science fiction, literary",
    philosophy: "Respect the reader's time. Every sentence must advance the story or reveal character. Be direct. Find a subject you care about. Shape stories so the reader always knows where they stand.",
    core_principles: [
      "Use the time of a total stranger in such a way that he or she will not feel the time was wasted.",
      "Give the reader at least one character they can root for.",
      "Every character should want something, even if it is only a glass of water.",
      "Every sentence must do one of two things: reveal character or advance the action.",
      "Start as close to the end as possible. Don't waste time on setup that doesn't matter.",
      "Be a sadist. No matter how sweet and innocent your leading characters, make awful things happen to them — so the reader can see what they're made of.",
      "Write to please just one person. If you open a window and make love to the world, your story will get pneumonia.",
      "Give your readers as much information as possible as soon as possible. Readers should have such complete understanding that they could finish the story themselves."
    ],
    notable_quotes: [
      "So it goes.",
      "We are what we pretend to be, so we must be careful about what we pretend to be.",
      "Use the time of a total stranger in such a way that he or she will not feel the time was wasted.",
      "Write to please just one person. If you open a window and make love to the world, your story will get pneumonia.",
      "Every character should want something, even if it is only a glass of water."
    ],
    writing_exercises: [
      "Take a story you've written and identify which sentences reveal character and which advance action. Delete everything else.",
      "Rewrite a story's opening so it starts as close to the end as possible.",
      "Write a scene where every character wants something different. Make those wants collide.",
      "Write a story meant for exactly one specific person you know."
    ],
    contrarian_view: "Vonnegut's 'give readers as much information as possible' contradicts the mystery/thriller school of withholding information for suspense. His approach is anti-mystery: trust readers with truth, let drama come from character, not from hidden facts."
  },
  {
    name: "Brandon Sanderson",
    key_work: "Sanderson's Laws of Magic / BYU Lectures (free online)",
    era: "2000s–present",
    genre_focus: "Epic fantasy, science fiction",
    philosophy: "Systematic worldbuilding and transparent storytelling. The reader should understand the rules. Promise, progress, payoff structure. Hard magic systems have rules; soft magic systems have mystery. Both are valid but serve different purposes.",
    core_principles: [
      "Sanderson's First Law: An author's ability to solve conflict with magic is DIRECTLY PROPORTIONAL to how well the reader understands said magic. (Hard magic = satisfying problem-solving. Soft magic = wonder and mystery.)",
      "Sanderson's Second Law: Limitations are more interesting than powers. What a character CAN'T do creates tension. Superman is boring; kryptonite makes him interesting.",
      "Sanderson's Third Law: Expand what you already have before adding something new. Deepen existing magic/abilities before introducing new ones. Complexity should grow organically.",
      "Promise → Progress → Payoff: Every story element should promise something early, show progress toward it, and deliver a payoff. Foreshadowing is a promise. The climax is the payoff.",
      "The Iceberg Principle of worldbuilding: Know 10× more about your world than you show. Readers sense the depth without needing every detail.",
      "Try/Fail cycles: Characters should attempt things and fail (or succeed with complications) multiple times before the climax. Each attempt should escalate stakes and reveal character.",
      "Outline your endings. You can discovery-write the middle, but know where you're going. A strong ending retroactively improves everything before it.",
      "Conflict should come from characters pursuing incompatible goals, not from miscommunication or stupidity."
    ],
    notable_quotes: [
      "The mark of a great magic system is when the limitations are more interesting than the powers.",
      "A story should escalate. If the second act isn't harder than the first, you're doing something wrong.",
      "Know your ending. You can pants everything else, but know where you're going.",
      "Characters should be proactive, not reactive. They should make choices that drive the plot forward."
    ],
    writing_exercises: [
      "Design a magic system with three clear rules and three clear limitations. Write a scene where the protagonist must solve a problem using those rules.",
      "Take a story you're writing. For every plot element, identify: what was promised, what progress was shown, what payoff was delivered.",
      "Write a try/fail cycle: three attempts to solve a problem, each failing differently, each teaching something new.",
      "Create a worldbuilding iceberg: write 2 pages of world detail, then tell the story using only 2 paragraphs of that world."
    ],
    contrarian_view: "Sanderson's systematic approach to magic and worldbuilding contradicts King's 'discovery writing' philosophy. Sanderson outlines extensively; King refuses to outline. Both produce bestsellers. The lesson: find YOUR process."
  },
  {
    name: "Ursula K. Le Guin",
    key_work: "Steering the Craft (1998/2015)",
    era: "1960s–2018",
    genre_focus: "Science fiction, fantasy, literary fiction",
    philosophy: "Writing is a craft of language first. The sound of prose matters. POV discipline is paramount. Crowding and leaping — know what to include and what to skip. Resist the Hollywood story model; not every story needs a hero's journey.",
    core_principles: [
      "The sound of language: Read your prose aloud. Rhythm, cadence, and music are as important as meaning. Sentences have beats like poetry.",
      "POV discipline: Pick a point of view and COMMIT to it. Head-hopping within scenes destroys reader trust. If you're in third-person limited, stay limited. The discipline strengthens intimacy.",
      "Crowding and leaping: Crowd your prose with vivid, specific detail in key moments. Leap over transitions and unimportant scenes. Don't narrate people walking through doors unless the door matters.",
      "Resist the hero's journey as universal template: Not every story is about a chosen one on a quest. Quiet stories, ensemble stories, stories about communities — these are equally valid and powerful.",
      "Verbs carry sentences. Nouns ground them. Adjectives and adverbs are seasoning — use sparingly. A sentence should stand on its verbs and nouns alone.",
      "Punctuation is musical notation. A comma is a breath. A period is a stop. A semicolon is a pivot. Master punctuation and you master rhythm.",
      "Reliable narration is a choice, not a default. Unreliable narrators can reveal deeper truths than reliable ones. But the author must always be in control of the unreliability.",
      "Exposition is not the enemy. Telling is not always worse than showing. Sometimes a paragraph of clear, beautiful telling is more powerful than a clumsy scene designed to 'show' the same information."
    ],
    notable_quotes: [
      "We read books to find out who we are.",
      "The only thing that makes life possible is permanent, intolerable uncertainty; not knowing what comes next.",
      "A writer is a person who cares what words mean, what they say, how they say it.",
      "Resistance and change often begin in art. Very often in our art, the art of words.",
      "The exercise of imagination is dangerous to those who profit from the way things are because it has the power to show that the way things are is not permanent, not universal, not necessary."
    ],
    writing_exercises: [
      "Write a full page with no adjectives or adverbs. Rely entirely on nouns and verbs.",
      "Read one of your scenes aloud. Mark where you stumble. Those are rhythm problems — fix them.",
      "Write a scene in strict third-person limited from a single character's POV. Never reveal anything that character cannot see, hear, or know.",
      "Write a one-page story that leaps over the most dramatic event. Start before it, end after it. Let the reader fill in the gap.",
      "Write the same scene twice: once 'showing' and once 'telling.' Honestly evaluate which is better."
    ],
    contrarian_view: "Le Guin pushes back against the universal 'show don't tell' rule and the hero's journey template. She argues that sometimes telling IS the right choice and that many great stories don't follow the Campbell/Vogler model at all."
  },
  {
    name: "Robert McKee",
    key_work: "Story: Substance, Structure, Style, and the Principles of Screenwriting (1997)",
    era: "1980s–present",
    genre_focus: "Screenwriting, applicable to all narrative",
    philosophy: "Story is about the gap between expectation and result. Great stories turn on the gap — a character takes action expecting one result but gets another. Turning points create meaning. Structure is not formula — it's the architecture of meaning.",
    core_principles: [
      "The Gap: When a character takes an action expecting a result and gets an unexpected response, that's a gap. Great scenes turn on gaps. The wider the gap between expectation and result, the more powerful the moment.",
      "Turning points: Every scene must turn — the value at stake changes from positive to negative (or vice versa). A scene where nothing changes is a dead scene. Cut it.",
      "Spine of the story: The protagonist's conscious desire drives the narrative. The unconscious need (what they actually need but don't know) creates depth. The best stories resolve the gap between desire and need.",
      "Antagonism: The more powerful and complex the forces of antagonism, the more fully realized the protagonist. Don't write weak villains. The antagonist should have a valid worldview.",
      "Exposition through conflict: Never have characters explain things to each other that they would already know. Exposition should emerge naturally through dramatic conflict.",
      "The controlling idea: Every story makes an argument about life. A single sentence that expresses this argument is the controlling idea. Everything in the story should serve this idea.",
      "Progressive complications: Each scene must be more complicated than the last. Stakes escalate. Options narrow. Pressure builds. If the middle of your story sags, your complications aren't progressing.",
      "Crisis, climax, resolution: The crisis is the dilemma (the worst choice the protagonist faces). The climax is the action taken. The resolution is the new equilibrium."
    ],
    notable_quotes: [
      "Story is about principles, not rules.",
      "Anxious, inexperienced writers obey rules. Rebellious, unschooled writers break rules. Artists master the form.",
      "True character is revealed in the choices a human being makes under pressure.",
      "The more beautifully you shape your work around one clear idea, the more meanings audiences will discover in your film as they take it to heart."
    ],
    writing_exercises: [
      "Analyze your favorite movie scene. What did the character expect? What actually happened? How wide is the gap?",
      "For a scene you've written, identify the value at stake (love/hate, freedom/slavery, truth/lie). Does it change by scene's end? If not, the scene doesn't turn.",
      "Write your story's controlling idea in one sentence: '[Value] results when [cause].' Example: 'Justice prevails when the protagonist sacrifices personal desire for the common good.'",
      "Take a boring exposition scene and rewrite it so the information emerges through an argument between two characters who want different things."
    ],
    contrarian_view: "McKee's rigorous structural analysis can feel formulaic despite his insistence otherwise. King and Le Guin might argue that stories should grow organically, not be engineered around gaps and turning points. McKee's framework is most useful for diagnosis (why isn't this working?) rather than creation."
  },
  {
    name: "Blake Snyder",
    key_work: "Save the Cat! The Last Book on Screenwriting You'll Ever Need (2005)",
    era: "2000s",
    genre_focus: "Screenwriting, commercial fiction",
    philosophy: "Stories follow predictable emotional beats. The 'Save the Cat' beat sheet maps 15 story beats onto page numbers. Highly structured, commercially oriented. The protagonist must be likeable (save a cat!) before we ask audiences to follow them into trouble.",
    core_principles: [
      "The 15 Beat Sheet — a structured story map that works for any genre:",
      "1. Opening Image (p.1): Visual snapshot of the 'before' world",
      "2. Theme Stated (p.5): Someone states the story's theme, often to the protagonist who doesn't understand it yet",
      "3. Setup (p.1-10): Establish protagonist, their world, what's missing, the six things that need fixing",
      "4. Catalyst (p.12): The inciting incident — life will never be the same",
      "5. Debate (p.12-25): Protagonist hesitates. Should I go? Can I do this? The last chance to back out.",
      "6. Break into Two (p.25): Protagonist makes an active choice to enter the new world (Act 2). Must be a CHOICE, not a push.",
      "7. B Story (p.30): The subplot (often a love interest) that carries the theme",
      "8. Fun and Games (p.30-55): The promise of the premise. Why we bought the ticket. The trailer moments.",
      "9. Midpoint (p.55): False victory or false defeat. Stakes are raised. A and B stories cross.",
      "10. Bad Guys Close In (p.55-75): External pressure mounts AND internal doubts grow. The team fractures.",
      "11. All Is Lost (p.75): The opposite of the midpoint. Something or someone dies (literally or metaphorically).",
      "12. Dark Night of the Soul (p.75-85): Protagonist at their lowest. The moment before the breakthrough.",
      "13. Break into Three (p.85): The A and B stories combine. The protagonist discovers the solution — driven by the theme from beat 2.",
      "14. Finale (p.85-110): The protagonist applies what they've learned, defeats the antagonist, creates a new world.",
      "15. Final Image (p.110): Opposite of the opening image — proof of change."
    ],
    notable_quotes: [
      "Give me the same thing... only different!",
      "Save the Cat! — the hero must do something likeable early so we root for them.",
      "All stories are about transformation. If your character doesn't change, you don't have a story.",
      "The promise of the premise is why someone picks up your book. Deliver on it in the Fun and Games section."
    ],
    writing_exercises: [
      "Map your story onto the 15 beats. Which beats are missing? Which are weak?",
      "Write your protagonist saving a cat (or equivalent) in the first 10 pages. Make the reader LIKE them before trouble starts.",
      "Identify your story's 'promise of the premise.' Write three 'fun and games' scenes that deliver on that promise.",
      "Write your 'All Is Lost' moment. Make it genuinely devastating. Then write the 'Dark Night of the Soul' that follows."
    ],
    contrarian_view: "Snyder's beat sheet is often criticized as paint-by-numbers storytelling. Le Guin, King, and literary authors may find it reductive. However, for commercial fiction and screenwriting, understanding these beats (even to subvert them) is valuable. The debate is not whether these beats exist in stories — they often do — but whether you should plan around them."
  },
  {
    name: "Joseph Campbell",
    key_work: "The Hero with a Thousand Faces (1949)",
    era: "1940s–1980s",
    genre_focus: "Mythology, comparative literature (applied to all genres)",
    philosophy: "All great myths share a common structure: the monomyth or hero's journey. The hero leaves the ordinary world, crosses a threshold into the unknown, faces trials, achieves transformation, and returns changed. This pattern appears across cultures because it reflects universal human psychology.",
    core_principles: [
      "The Monomyth — three acts of the hero's journey:",
      "DEPARTURE: The hero begins in the ordinary world. A call to adventure disrupts normalcy. The hero may refuse the call. A mentor provides aid. The hero crosses the first threshold into the special world.",
      "INITIATION: The hero faces tests, allies, and enemies. They approach the innermost cave (greatest challenge). They endure an ordeal — death and rebirth (literal or metaphorical). They seize the reward/elixir.",
      "RETURN: The hero must return to the ordinary world. They may resist the return. They cross the return threshold (sometimes as harrowing as the first crossing). They are transformed — master of two worlds. They bring the elixir/boon back to their community.",
      "Key stages: Call to Adventure → Refusal of the Call → Supernatural Aid → Crossing the Threshold → Belly of the Whale → Road of Trials → Meeting with the Goddess → Atonement with the Father → Apotheosis → The Ultimate Boon → Refusal of the Return → Magic Flight → Rescue from Without → Crossing the Return Threshold → Master of Two Worlds → Freedom to Live",
      "The journey is internal as much as external. The dragon the hero slays is their own fear, doubt, or ego. The treasure they find is self-knowledge.",
      "Every character in the story serves a mythic function: hero, mentor, threshold guardian, herald, shapeshifter, shadow (antagonist), trickster, ally."
    ],
    notable_quotes: [
      "A hero is someone who has given his or her life to something bigger than oneself.",
      "The cave you fear to enter holds the treasure you seek.",
      "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
      "Follow your bliss and the universe will open doors where there were only walls.",
      "The privilege of a lifetime is being who you are."
    ],
    writing_exercises: [
      "Map your protagonist's journey onto Campbell's stages. Which stages are strongest? Which are missing?",
      "Write the 'Crossing the Threshold' moment — the point of no return. Make it visceral.",
      "Identify your story's 'Supreme Ordeal' — the death and rebirth moment. What dies? What is born?",
      "Write a scene where the mentor provides a crucial gift (physical object or wisdom) that the hero will need later."
    ],
    contrarian_view: "Campbell's framework is powerful but often over-applied. Not every story is a hero's journey. Le Guin and many feminist/non-Western critics point out that the monomyth centers a single male hero's transformative arc and ignores communal stories, cyclical narratives, and stories where the point is acceptance rather than conquest."
  },
  {
    name: "John Truby",
    key_work: "The Anatomy of Story: 22 Building Blocks of Great Storytelling (2007)",
    era: "2000s–present",
    genre_focus: "Screenwriting, literary fiction, all narrative forms",
    philosophy: "Story is organic, not mechanical. The 22 steps aren't a formula — they're interconnected elements that grow from a single seed: the moral argument. Every great story is a moral argument between the protagonist's belief and the story's theme. Character web is more important than linear plot.",
    core_principles: [
      "Premise: Your story in one sentence that contains the seed of everything — character, conflict, and theme. If you can't state your premise clearly, you don't have a story yet.",
      "Seven Key Steps: 1) Weakness/Need, 2) Desire, 3) Opponent, 4) Plan, 5) Battle, 6) Self-Revelation, 7) New Equilibrium. These are the structural skeleton.",
      "Moral argument: Every story argues for a particular way of living. The protagonist starts with a flawed belief, and through conflict with the opponent, discovers a better way (or fails to). The moral argument should be expressed through ACTION, not dialogue.",
      "Character web: Characters should be defined in relation to each other, not in isolation. The opponent is the key — they should attack the protagonist's greatest weakness. Supporting characters represent different approaches to the same moral problem.",
      "The opponent should be human, specific, and pursuing the same goal as the protagonist through different means. The best opponents are also right (from their own perspective).",
      "Story world is not decoration — it's an expression of theme. The world should physically embody the story's moral argument. A story about corruption should feel corrupt. A story about freedom should feel confining until the breakthrough.",
      "Revelation sequences: The protagonist (and audience) should experience revelations in a specific order. Each revelation deepens understanding and raises stakes. The self-revelation at the climax should feel both surprising and inevitable.",
      "22 building blocks include: premise, story structure, character, moral argument, story world, symbol web, plot, scene weave, dialogue, title/opening/closing"
    ],
    notable_quotes: [
      "True character is revealed under pressure. What choices does the character make when stakes are high?",
      "The single biggest mistake writers make is thinking that plot is a series of events. Plot is a series of revelations.",
      "Your opponent is the key to your story. Spend more time on your opponent than your hero.",
      "Great storytelling is not about following rules. It's about understanding why the rules exist and then transcending them."
    ],
    writing_exercises: [
      "Write your story premise in one sentence. It must contain: a protagonist with a flaw, a goal, an opponent, and a moral question.",
      "Design your character web: protagonist, main opponent, 3-4 supporting characters. Each must represent a different approach to the same central moral question.",
      "Write the self-revelation scene. What does your protagonist finally understand about themselves? How does this change their actions?",
      "Map your story's symbol web: what recurring images, objects, or settings embody the theme?"
    ],
    contrarian_view: "Truby's organic approach is more sophisticated than Snyder's beat sheet but can be paralyzing for beginners. King would argue you're overthinking it — just write. Truby counters that writing without understanding structure leads to stories that 'feel wrong' in ways the author can't diagnose."
  },
  {
    name: "Chuck Palahniuk",
    key_work: "Workshop essays ('Nuts and Bolts,' 'Submerging the I')",
    era: "1990s–present",
    genre_focus: "Transgressive fiction, literary, satire",
    philosophy: "Eliminate abstraction. Ban 'thought' verbs. Submerge exposition so deep the reader absorbs it unconsciously. Establish authority through specific, physical detail. Writing should be visceral, concrete, and surprising. Avoid the 'thesis statement' opening.",
    core_principles: [
      "Ban 'thought' verbs: Eliminate thinks, knows, understands, realizes, believes, wants, remembers, imagines, desires, loves, hates. Instead of 'He thought the room was cold,' write 'He pulled his jacket tighter and pressed his hands between his knees.'",
      "No 'is' of identity: Don't say 'Lisa is a control freak.' Show Lisa alphabetizing the spice rack at 3 AM, labeling containers, and snapping at anyone who puts the paprika in the wrong place.",
      "Submerge exposition: Never explain directly. Bury backstory in action and objects. Instead of 'They were divorced,' write 'He noticed the pale band where her ring used to be.'",
      "Establish authority through specifics: Readers trust writers who know things. Include specific brand names, technical details, exact numbers. 'She drove a car' → 'She drove a 1987 Buick Century with 213,000 miles and a cracked windshield.'",
      "Unpack to the body: Abstract emotions must be translated to physical sensations. Not 'She felt sad' but 'Her throat tightened. Her eyes burned. She pressed her tongue to the roof of her mouth.'",
      "Use 'burnt tongue' — a rhythmic, repetitive style that mimics how people actually talk when they're agitated or passionate. Repetition with slight variation builds hypnotic effect.",
      "Big voice vs recorded voice: The 'big voice' is the author's style and rhythm. The 'recorded voice' is a character's. Know which you're using and be consistent.",
      "Clock it: Every story needs a ticking clock — a deadline, a countdown, something running out. Urgency creates pace."
    ],
    notable_quotes: [
      "Don't say 'the old man sat down.' Give him a name. Give the chair a name. Unpack the action.",
      "The goal isn't to write something the reader will read. The goal is to write something the reader can't stop reading.",
      "Thinking is abstract. Knowing and believing are intangible. Only through specific physical detail can you show these states.",
      "If you could stop yourself, you wouldn't be a writer."
    ],
    writing_exercises: [
      "Rewrite a page of your work eliminating all 'thought' verbs. Replace every thinks/knows/remembers with a physical action or sensory detail.",
      "Take an abstract emotion (grief, jealousy, excitement) and unpack it to the body. Write 5 sentences describing the physical sensation without ever naming the emotion.",
      "Write a character description without any adjectives about personality. Only physical actions and objects.",
      "Rewrite your story's opening, cutting any sentence that tells the reader what to think or feel. Only concrete details."
    ],
    contrarian_view: "Palahniuk's extreme 'show don't tell' position is the opposite of Le Guin's. Le Guin says sometimes telling is better. Palahniuk says NEVER tell. His approach creates vivid, visceral prose but can be exhausting over novel length. It works brilliantly for short, intense narratives."
  },
  {
    name: "Anton Chekhov",
    key_work: "Letters and short stories (1880s–1900s)",
    era: "1880s–1904",
    genre_focus: "Literary fiction, drama, short stories",
    philosophy: "Show, don't tell. Remove everything unnecessary. Chekhov's Gun: if a rifle hangs on the wall in act one, it must be fired by act three. Art should pose questions, not answer them. The writer's job is to describe truthfully, not to judge.",
    core_principles: [
      "Chekhov's Gun: 'Remove everything that has no relevance to the story. If you say in the first chapter that there is a rifle hanging on the wall, in the second or third chapter it absolutely must go off. If it's not going to be fired, it shouldn't be hanging there.'",
      "Show, don't tell (the original): 'Don't tell me the moon is shining; show me the glint of light on broken glass.'",
      "Brevity is the soul of wit. 'Brevity is the sister of talent.' Cut ruthlessly. A short story should be short. Say what you need to say and stop.",
      "The writer is not a judge: Present characters honestly, with compassion and complexity. Don't impose moral judgment. Let the reader decide.",
      "Specificity over abstraction: 'In descriptions of Nature one must seize on small details, grouping them so that when the reader closes his eyes he gets a picture.'",
      "Avoid sentimentality: True emotion emerges from restraint. The most moving scenes are often the most understated. When a character would cry, make them not cry — the restraint is more powerful.",
      "Subtext: What characters DON'T say is as important as what they do say. In Chekhov's plays, the real drama happens in the silences, the evasions, the things left unsaid.",
      "Ordinary people, extraordinary moments: Great stories don't require extraordinary characters. Find the drama in ordinary lives — the quiet desperation, the small hopes, the mundane cruelties."
    ],
    notable_quotes: [
      "Don't tell me the moon is shining; show me the glint of light on broken glass.",
      "If you say in the first chapter that there is a rifle hanging on the wall, in the second or third chapter it absolutely must go off.",
      "Brevity is the sister of talent.",
      "Any idiot can face a crisis — it's day to day living that wears you out.",
      "The task of a writer is not to solve the problem but to state the problem correctly."
    ],
    writing_exercises: [
      "Audit your story: list every object, detail, and character mentioned. Does each one pay off? Remove what doesn't.",
      "Write a deeply emotional scene where no character expresses their emotion directly. Use only subtext, body language, and what's left unsaid.",
      "Write a 500-word story. Then cut it to 300 words. Then 200. See what's essential.",
      "Write a scene about an 'ordinary' moment (doing dishes, commuting, waiting in line) and find the hidden drama in it."
    ],
    contrarian_view: "Chekhov's principle of removing everything irrelevant seems to conflict with the richly detailed worlds of Tolkien or Sanderson, where world-building details that don't 'pay off' as plot devices still serve atmosphere and immersion. Chekhov's Gun is a powerful principle for tight narratives but can be too reductive for expansive ones."
  },
  {
    name: "Sol Stein",
    key_work: "Stein on Writing (1995)",
    era: "1990s–2000s",
    genre_focus: "Literary fiction, commercial fiction, editing",
    philosophy: "Writing is rewriting. The first reader is the writer — if you're bored, the reader is asleep. Every page must create tension. Dialogue should be adversarial — agreement is boring. The writer is an 'editor-in-chief' of their own work.",
    core_principles: [
      "Tension on every page: 'The reader should feel tense on every page. Not action-movie tense, but the tension of wanting to know what happens next.' If a page has no tension, it needs conflict, suspense, or a question.",
      "Adversarial dialogue: 'In real life, people try to get along. In fiction, they shouldn't.' Every conversation should have an element of conflict — characters wanting different things, hiding something, pushing against each other.",
      "The actor's studio method: Characters should have: a public persona (what they show), a private persona (what they hide), and an unconscious drive (what they don't know about themselves). The best scenes reveal the private or unconscious layer.",
      "Evoking emotion vs. describing emotion: 'Don't tell the reader what to feel. Create the conditions that evoke the feeling.' Describe the situation so vividly that the reader feels the emotion without being told.",
      "First sentences must compel. 'The first sentence of every chapter is a pick-up line.' It must make the reader want to continue. If it doesn't, rewrite it.",
      "The 'lifeboat' test: 'If you have too many characters, put them in a lifeboat. If the boat is too heavy and one must be thrown out, who goes?' That character doesn't need to be in your story.",
      "Dialogue is oblique: People rarely say what they mean directly. Real dialogue circles, evades, implies, deflects. 'How was work?' 'The coffee machine broke.' (Translation: 'Terrible, and I don't want to talk about it.')",
      "Flashbacks are dangerous: Every flashback stops the story's forward momentum. Use them only when the past information is MORE dramatic than the present scene. If you must flashback, enter late and exit early."
    ],
    notable_quotes: [
      "A writer is someone for whom writing is more difficult than it is for other people.",
      "The first sentence of every chapter is a pick-up line. It should be impossible to resist.",
      "In fiction, the only sin is being boring.",
      "Readers don't turn pages because they're well-written. They turn pages because they want to know what happens next."
    ],
    writing_exercises: [
      "Take a conversation scene and make it adversarial. Give each character a hidden agenda that conflicts with the other's.",
      "Test every scene for tension: what does the reader want to know? If the answer is 'nothing,' add a question, a threat, or a secret.",
      "Rewrite all first sentences of your chapters. Each must compel the reader to continue.",
      "Write a dialogue scene where neither character says what they actually mean. All meaning is in subtext."
    ],
    contrarian_view: "Stein's 'tension on every page' can lead to exhausting prose if taken literally. Le Guin and literary authors might argue that quiet, reflective passages serve a purpose — they allow the reader to process and the story to breathe. Not every page needs to be a cliffhanger."
  }
];

export const AUTHOR_MAP = new Map<string, Author>(
  AUTHORS.flatMap(a => [
    [a.name.toLowerCase(), a],
    ...(a.name === "Stephen King" ? [["king", a], ["on writing", a]] as [string, Author][] : []),
    ...(a.name === "Kurt Vonnegut" ? [["vonnegut", a]] as [string, Author][] : []),
    ...(a.name === "Brandon Sanderson" ? [["sanderson", a], ["sandersons laws", a]] as [string, Author][] : []),
    ...(a.name === "Ursula K. Le Guin" ? [["le guin", a], ["leguin", a], ["steering the craft", a]] as [string, Author][] : []),
    ...(a.name === "Robert McKee" ? [["mckee", a]] as [string, Author][] : []),
    ...(a.name === "Blake Snyder" ? [["snyder", a], ["save the cat", a], ["beat sheet", a]] as [string, Author][] : []),
    ...(a.name === "Joseph Campbell" ? [["campbell", a], ["heros journey", a], ["hero's journey", a], ["monomyth", a]] as [string, Author][] : []),
    ...(a.name === "John Truby" ? [["truby", a], ["anatomy of story", a]] as [string, Author][] : []),
    ...(a.name === "Chuck Palahniuk" ? [["palahniuk", a], ["fight club", a]] as [string, Author][] : []),
    ...(a.name === "Anton Chekhov" ? [["chekhov", a], ["chekhovs gun", a], ["chekhov's gun", a]] as [string, Author][] : []),
    ...(a.name === "Sol Stein" ? [["stein", a], ["stein on writing", a]] as [string, Author][] : []),
  ])
);
