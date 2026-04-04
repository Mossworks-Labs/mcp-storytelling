// src/data/craft.ts
// Writing craft elements — dialogue, pacing, POV, voice, tension, revision

export interface CraftElement {
  name: string;
  overview: string;
  principles: string[];
  common_mistakes: string[];
  author_perspectives: { author: string; view: string }[];
  exercises: string[];
}

export const CRAFT_ELEMENTS: CraftElement[] = [
  {
    name: "Dialogue",
    overview: "Dialogue serves multiple purposes simultaneously: reveals character, advances plot, conveys information, and creates rhythm. Great dialogue sounds natural but is actually highly compressed and purposeful — real speech transcribed directly is boring and repetitive.",
    principles: [
      "Each character should have a distinct voice — vocabulary, rhythm, sentence length, verbal tics. Cover the names and you should still know who's speaking.",
      "Dialogue should do at least two things at once: reveal character AND advance plot, or convey information AND create tension.",
      "Subtext is everything. What characters DON'T say matters as much as what they do. People rarely express feelings directly — they deflect, evade, use humor, change the subject.",
      "Said is invisible — 'said' and 'asked' disappear for the reader. Avoid 'exclaimed,' 'retorted,' 'opined,' 'queried.' Let the dialogue itself convey tone.",
      "Cut small talk. In real life, conversations start with 'Hey, how are you?' In fiction, cut to the point. Enter late, leave early.",
      "Conflict in every conversation. Even friendly dialogue should have an undercurrent of tension — disagreement, secrets, competing desires.",
      "Dialect and accent should be suggested, not transcribed. A few dropped g's or colloquial words suggest an accent; full phonetic spelling is exhausting to read.",
      "Dialogue is not a vehicle for exposition. Characters should never explain things to each other that they both already know ('As you know, Professor...')."
    ],
    common_mistakes: [
      "Info-dumping through dialogue ('As you know, Bob, our company was founded in 1952...')",
      "All characters sounding the same — same vocabulary, rhythm, and patterns",
      "Over-tagging with adverbs ('she said angrily,' 'he whispered softly')",
      "Using dialogue to state subtext directly ('I'm feeling really jealous right now')",
      "Long unbroken speeches — break up monologues with action, interruption, or reaction",
      "Perfect grammar — real people use fragments, interruptions, trailing off..."
    ],
    author_perspectives: [
      { author: "Stephen King", view: "Dialogue is character. People reveal who they are by how they speak. Avoid adverbs in dialogue tags — the dialogue should do the work." },
      { author: "Sol Stein", view: "Make dialogue adversarial. In fiction, people shouldn't get along. Every conversation should have conflict — open or hidden." },
      { author: "Anton Chekhov", view: "Subtext above all. The most powerful dialogue is what's left unsaid. Characters circle around the truth, approach it, retreat from it." },
      { author: "Chuck Palahniuk", view: "Dialogue should feel recorded, not written. Use fragments, interruptions, repetition. Capture the rhythm of real agitation." },
      { author: "Ursula K. Le Guin", view: "Dialogue has musicality. Read it aloud. The rhythm of exchange — short/long, question/statement — creates pace and texture." }
    ],
    exercises: [
      "Write a scene between two people with a secret. Neither reveals it directly, but the reader should figure it out through subtext.",
      "Take a scene and cut all dialogue tags except 'said.' If you can't tell who's speaking, the voices aren't distinct enough.",
      "Write an argument where both sides are right. Neither character is wrong — they just want incompatible things.",
      "Eavesdrop on a real conversation, then compress it to 1/4 its length while keeping the emotional core."
    ]
  },
  {
    name: "Pacing",
    overview: "Pacing is the speed at which the story feels like it's moving. It's controlled by sentence length, scene length, the ratio of action to reflection, and the density of events. Fast pacing creates excitement; slow pacing creates depth. Great writing modulates between them.",
    principles: [
      "Short sentences speed up: 'He ran. The door slammed. Glass shattered.' Long sentences slow down: 'The afternoon drifted into evening as they sat on the porch, watching the shadows lengthen across the yard.'",
      "Scene length affects pace. Short scenes (1-3 pages) create urgency. Long scenes (10+ pages) create immersion. Alternate for rhythm.",
      "Action sequences: short sentences, short paragraphs, active verbs, minimal description. The prose should move as fast as the character.",
      "Reflective passages: longer sentences, sensory detail, internal thought, metaphor. Give the reader space to feel.",
      "Chapter endings should propel readers forward: a revelation, a question, a cliff. Chapter openings can slow down briefly to orient.",
      "The 'try/fail cycle' creates pacing: attempt → failure → adjustment → new attempt. Each cycle should be shorter and more intense than the last.",
      "White space is pacing. A one-sentence paragraph surrounded by white space COMMANDS attention. Use it for impact moments.",
      "Cut transitions. Don't narrate characters going from place to place unless the journey matters. End the scene, start the next one in the new location."
    ],
    common_mistakes: [
      "Same pace throughout — no variation, either relentlessly fast or uniformly slow",
      "Long passages of description between action beats — kills momentum",
      "Chapters that all end neatly — no reason to turn the page",
      "Over-detailing mundane transitions (walking through doors, driving to places, ordering food)",
      "Flashbacks at high-tension moments — stops the story dead",
      "Too many subplots weaving simultaneously — reader can't build momentum with any of them"
    ],
    author_perspectives: [
      { author: "Stephen King", view: "Pace is instinct. Read your work aloud. Where you get bored, the reader is already asleep. Cut those parts." },
      { author: "Sol Stein", view: "Tension on every page. If a page has no tension, it needs a question, a threat, or a secret to keep the reader moving." },
      { author: "Kurt Vonnegut", view: "Start as close to the end as possible. Don't waste the reader's time on setup that doesn't pay off." },
      { author: "Ursula K. Le Guin", view: "Crowding and leaping. Crowd vivid detail into moments that matter. Leap over transitions that don't. Trust the reader to keep up." }
    ],
    exercises: [
      "Write an action scene using only sentences of 10 words or fewer.",
      "Write the same scene twice: once as a 500-word slow-burn, once as a 100-word sprint. Compare the emotional effect.",
      "Audit your chapter endings: does each one make the reader want to turn the page? Rewrite any that don't.",
      "Take a 2,000-word section and cut it to 1,000. Notice what you lose (description, transition, reflection) and what you keep (conflict, revelation, action)."
    ]
  },
  {
    name: "Point of View (POV)",
    overview: "POV determines whose eyes the reader sees through, what information is available, and how intimate the reader feels with the characters. The three main choices — first person, third limited, and third omniscient — each create radically different reading experiences. POV discipline is one of the hardest skills to master.",
    principles: [
      "First person ('I'): Maximum intimacy, unreliable narration possible, limited to what the narrator knows/sees. Risk: the narrator's voice must be compelling enough to sustain the entire story.",
      "Third person limited ('She thought...'): The camera is on one character's shoulder. We see what they see, know what they know, filtered through their perception. Can switch POV between chapters/scenes. Most common in modern fiction.",
      "Third person omniscient ('They all felt...'): The narrator knows everything — all characters' thoughts, the future, the past. Powerful but difficult. The narrator becomes a character. Risks feeling distant.",
      "Second person ('You walk into the bar'): Rare in fiction. Creates unusual immediacy. Used in choose-your-own-adventure, some literary fiction (Bright Lights, Big City), self-help frameworks.",
      "POV discipline: Once you choose a POV for a scene, DO NOT slip. If you're in third-limited with Character A, you cannot suddenly know what Character B is thinking. Head-hopping is the most common beginner mistake.",
      "Deep POV: Go beyond reporting thoughts — merge the narration with the character's consciousness. Not 'She thought the room was cold' but 'God, it was freezing in here.' The narration IS the character's thought.",
      "POV reveals character through filtering: Two characters in the same room will notice different things. What a character notices tells us who they are.",
      "Choosing POV: Whose story is it? Who has the most at stake? Who changes the most? That character should usually be the POV character."
    ],
    common_mistakes: [
      "Head-hopping: switching between characters' thoughts within a scene without clear breaks",
      "First person narrators who describe themselves ('I brushed my long auburn hair from my bright green eyes')",
      "Third limited that accidentally reveals information the POV character can't know",
      "Omniscient narration that's really just sloppy limited — no consistent narrative voice",
      "Choosing the wrong POV character — the observer is sometimes more interesting than the protagonist",
      "Deep POV that breaks voice — the narration uses vocabulary the character wouldn't use"
    ],
    author_perspectives: [
      { author: "Ursula K. Le Guin", view: "POV discipline is paramount. Pick a POV and commit. The discipline strengthens intimacy. Head-hopping destroys reader trust." },
      { author: "Stephen King", view: "Third limited is the 'all-purpose tool' of POV. It gives you access to a character's thoughts while maintaining the ability to describe them from outside." },
      { author: "Brandon Sanderson", view: "Deep POV is powerful but tricky. The narration should sound like the character thinks. A peasant's chapters should read differently than a scholar's." },
      { author: "Chuck Palahniuk", view: "First person is a trap for beginners — they use it to tell rather than show. The 'I' gives false permission to explain feelings instead of dramatizing them." }
    ],
    exercises: [
      "Write the same scene from three different POVs (first person, third limited, omniscient). Notice how each changes the reader's relationship with the character.",
      "Write a scene in deep third-limited where the character's personality colors every observation. Their vocabulary, metaphors, and focus should reveal who they are.",
      "Write an unreliable first-person narrator. Include clues that what they're telling us isn't quite true.",
      "Audit a chapter for POV slips: does the POV character ever know something they shouldn't, or notice something they wouldn't?"
    ]
  },
  {
    name: "Showing vs Telling",
    overview: "The most debated principle in writing craft. 'Show' means dramatizing through scene, action, and sensory detail. 'Tell' means summarizing through narration. The standard advice is 'show, don't tell,' but the reality is nuanced — great writing uses both strategically.",
    principles: [
      "Show for emotional moments: When something matters, dramatize it. Let the reader experience it in real time through action, dialogue, and sensory detail.",
      "Tell for transitions and compression: 'Three weeks passed' is telling, and it's often the right choice. Not every moment needs to be dramatized.",
      "Show reveals; tell summarizes: 'She was angry' (tell) vs. 'She slammed the mug on the counter, coffee splashing across the tile' (show). The show is more vivid but takes more space.",
      "Telling can be beautiful: 'It was the best of times, it was the worst of times' is pure telling, and it's one of the most famous opening lines in literature.",
      "The real rule: Don't tell the reader what to FEEL. You can tell facts ('It rained for three days') but not emotions ('He felt incredibly sad'). Emotions must be evoked through showing.",
      "When in doubt: If it's important, show it. If it's background, tell it. If it's critical backstory, find a way to dramatize it. If it's a minor transition, narrate it and move on."
    ],
    common_mistakes: [
      "Showing everything — even mundane transitions get full scenes, bloating the manuscript",
      "Telling emotions: 'She felt angry/sad/excited' instead of dramatizing the emotion",
      "Showing then telling: dramatizing a scene beautifully, then adding a summary sentence that explains what it meant (trust the reader)",
      "Never telling — resulting in endless scenes when a paragraph of narration would serve better"
    ],
    author_perspectives: [
      { author: "Anton Chekhov", view: "The original: 'Don't tell me the moon is shining; show me the glint of light on broken glass.' The reader should see and feel, not be told what to see and feel." },
      { author: "Ursula K. Le Guin", view: "The counter: Sometimes telling IS the right choice. A paragraph of clear, beautiful telling can be more powerful than a clumsy scene designed to 'show.' The rule should be 'show OR tell, as appropriate.'" },
      { author: "Chuck Palahniuk", view: "The extreme: ALWAYS show. Eliminate all thought verbs. Unpack every abstraction to the body. If a character is sad, describe the physical sensation of sadness." },
      { author: "Sol Stein", view: "The diagnostic: Don't tell the reader what to feel. Create the conditions that evoke the feeling. Telling is lazy; showing is craft." }
    ],
    exercises: [
      "Take a paragraph of telling and convert it to showing. Then honestly evaluate: which is better for THIS moment in the story?",
      "Write a deeply emotional scene without ever naming the emotion. Use only action, dialogue, and sensory detail.",
      "Write one page of beautiful telling — summary narration that covers weeks or months with elegance.",
      "Find a passage where you show THEN tell. Delete the telling sentence. Is it better?"
    ]
  },
  {
    name: "Tension and Suspense",
    overview: "Tension is the reader's need to know what happens next. It's the engine that drives page-turning. Tension comes from uncertainty — will the character succeed? What will they choose? What does that clue mean? Great writing creates tension in every scene, not just action sequences.",
    principles: [
      "Dramatic irony creates tension: When the reader knows something the character doesn't (the bomb under the table), every ordinary moment becomes tense.",
      "Raise questions, delay answers: Every chapter should raise more questions than it answers. The accumulation of unanswered questions creates forward momentum.",
      "Micro-tension: Not just 'will they survive?' but 'will they say the wrong thing?' 'will the lie be discovered?' Tension in ordinary conversations keeps readers engaged.",
      "The clock: Deadlines create urgency. 'You have 24 hours.' 'The ship leaves at dawn.' Even implicit clocks (winter is coming, the illness is progressing) create pressure.",
      "Stakes must be clear and personal: Abstract stakes (the world will end) are less tense than personal ones (your daughter will die). Make stakes concrete and connected to characters we care about.",
      "Reversals create tension spikes: Just when things seem to be going well, reverse the fortune. Just when all seems lost, provide a glimmer of hope. The oscillation between hope and fear is addictive.",
      "Withholding information: Don't reveal everything at once. Let the reader piece things together. The pleasure of discovery is itself a form of tension.",
      "End chapters mid-scene: Don't wrap up neatly. Stop in the middle of action, mid-conversation, mid-revelation. Force the reader to turn the page."
    ],
    common_mistakes: [
      "Resolving tension too quickly — raising a question and answering it immediately",
      "False tension: threats that the reader knows won't be followed through on (the protagonist won't die in chapter 3 of a novel)",
      "Tension without stakes: exciting action with nothing meaningful at risk",
      "Constant high tension: no release, no breathing room, reader becomes numb",
      "Explaining the tension: 'He felt tense because...' — if you have to explain it, you haven't created it"
    ],
    author_perspectives: [
      { author: "Robert McKee", view: "The gap between expectation and result is the source of all tension. A character takes action expecting one thing; something else happens. That gap is where story lives." },
      { author: "Sol Stein", view: "Tension on every page. Not action-movie tension, but the tension of wanting to know. Every scene needs a question the reader wants answered." },
      { author: "Stephen King", view: "Suspense is about making the reader identify with the character, then putting that character in danger. We're scared BECAUSE we care." },
      { author: "Kurt Vonnegut", view: "Be a sadist. Make awful things happen to characters the reader loves. That's how you see what they're made of — and how you keep readers turning pages." }
    ],
    exercises: [
      "Write a scene where the reader knows something the protagonist doesn't. Make ordinary actions feel dangerous through dramatic irony.",
      "Take a calm, low-stakes scene and add micro-tension: a hidden agenda, an unspoken secret, a question that lingers.",
      "Write a chapter ending that makes it impossible NOT to start the next chapter.",
      "Create a ticking clock for your story. What deadline is approaching? How can you make the reader feel time running out?"
    ]
  },
  {
    name: "Voice and Style",
    overview: "Voice is the author's fingerprint on the page — the unique way they use language that makes their writing recognizable. Style is the set of choices (sentence structure, vocabulary, rhythm, tone) that create that voice. Voice cannot be taught directly, but it can be developed through deliberate practice and wide reading.",
    principles: [
      "Voice emerges from consistent choices: word length, sentence structure, metaphor style, level of formality, sense of humor. These choices accumulate into a recognizable sound.",
      "Read widely, steal selectively. Every writer's voice is a remix of their influences. Read authors whose voice you admire, analyze what they do, absorb it, then write in your own way.",
      "Voice is different from character voice. Author voice is the overall 'sound' of the prose. Character voice (in first person or deep third) is how a specific character thinks/speaks. Great authors can write many character voices while maintaining a recognizable author voice.",
      "Simplicity is not absence of style. Hemingway's stripped-down prose is as distinctive a style as Faulkner's baroque complexity. Both are deliberate choices.",
      "Vocabulary level matters. Literary fiction often uses precise, unusual words. Thrillers use direct, common words. Choose vocabulary appropriate to your genre AND your voice.",
      "Rhythm is voice. Some writers (Le Guin, Morrison) write with a lyrical, almost musical rhythm. Others (Elmore Leonard, Cormac McCarthy) are spare and percussive. Read your work aloud to hear your rhythm.",
      "Consistency within a project. You can have different voices in different projects, but within one book, the voice should be consistent (unless there's a deliberate narrative reason to shift).",
      "Don't imitate; synthesize. If you find yourself writing 'like' a favorite author, you're imitating. Push past imitation to synthesis — where the influence is absorbed but the output is yours."
    ],
    common_mistakes: [
      "Trying too hard to 'have a voice' — it sounds affected and unnatural",
      "Purple prose: overly ornate, self-conscious writing that prioritizes style over substance",
      "No voice: generic, flat prose that could have been written by anyone (or by AI)",
      "Inconsistent voice within a project — shifting formality or vocabulary without purpose",
      "Mistaking complexity for quality — long words aren't better than short ones"
    ],
    author_perspectives: [
      { author: "Ursula K. Le Guin", view: "The sound of language is fundamental. Read your prose aloud. If it doesn't sound good, it isn't good. Rhythm, cadence, and music are as important as meaning." },
      { author: "Stephen King", view: "Voice develops through volume. Write a million words and your voice will emerge. You can't force it. Read widely and write daily." },
      { author: "Chuck Palahniuk", view: "Voice comes from authority. Specific details, confident assertions, unusual observations. A distinctive voice says 'I have seen things and I will tell you about them.'" },
      { author: "Kurt Vonnegut", view: "Find a subject you care about and write about it honestly. If you try to sound like someone else, you'll sound like nobody." }
    ],
    exercises: [
      "Write the same paragraph in three different voices: formal literary, casual conversational, and terse minimalist. Which feels most natural?",
      "Pick a favorite author. Write a paragraph imitating their style. Then rewrite it in your own voice. What did you keep? What changed?",
      "Read a page of your writing aloud. Mark where it feels stilted, forced, or generic. Those are where your voice disappears.",
      "Write 500 words about something you genuinely care about, with no audience in mind. That unguarded writing is close to your natural voice."
    ]
  },
  {
    name: "Revision and Editing",
    overview: "Writing is rewriting. The first draft gets the story down; revision makes it good. Professional authors typically revise 3-10 times before publication. Revision is not just fixing typos — it's restructuring scenes, deepening characters, tightening prose, and killing darlings.",
    principles: [
      "Let the first draft rest. Put it in a drawer for at least two weeks (King recommends six weeks). You need distance to see it clearly.",
      "First revision pass: structure. Does the story work? Are the acts balanced? Does the middle sag? Is the climax earned? Fix structural problems before polishing prose.",
      "Second revision pass: character. Are characters consistent? Do they have clear arcs? Is the dialogue distinct? Are motivations believable?",
      "Third revision pass: prose. Now tighten sentences. Cut adverbs. Strengthen verbs. Eliminate redundancy. Remove every word that doesn't earn its place.",
      "King's formula: 2nd draft = 1st draft - 10%. If your first draft is 100,000 words, the second draft should be 90,000. Cut ruthlessly.",
      "Read aloud. Reading your work aloud reveals rhythm problems, clunky dialogue, and awkward phrasing that the eye skips over.",
      "Kill your darlings. That beautiful metaphor, that clever sentence, that scene you love — if it doesn't serve the story, cut it. Save it in a 'darlings' file if you must.",
      "Get beta readers. You cannot be objective about your own work. Find 3-5 trusted readers who will be honest. Listen to what they say. If two or more readers have the same problem, the problem is real."
    ],
    common_mistakes: [
      "Editing while drafting — kills momentum and leads to endlessly polished first chapters with no ending",
      "Only one revision pass — most work needs 3-5 passes minimum",
      "Polishing prose before fixing structure — rearranging deck chairs on the Titanic",
      "Ignoring beta reader feedback because 'they don't understand my vision'",
      "Over-revising: polishing until the life is drained out. Stop when it's done, not when it's perfect",
      "Never finishing because it's 'not ready yet' — at some point you must ship"
    ],
    author_perspectives: [
      { author: "Stephen King", view: "Write with the door closed, rewrite with the door open. 2nd draft = 1st draft minus 10%. Kill your darlings." },
      { author: "Sol Stein", view: "The writer is the editor-in-chief of their own work. If you're bored reading it, the reader is already asleep." },
      { author: "Ursula K. Le Guin", view: "Revision is where craft lives. The first draft is the raw material. Revision is the actual writing." },
      { author: "Anton Chekhov", view: "Brevity is the sister of talent. In revision, the question is always: can I say this more concisely?" }
    ],
    exercises: [
      "Take a finished piece and cut exactly 10% of the word count. No exceptions. What did you lose? Is it better?",
      "Do a 'darling audit': find the 3 sentences or passages you love most. Evaluate honestly whether they serve the story. Cut at least one.",
      "Read a chapter aloud, recording yourself. Play it back. Mark every place where you stumble, rush, or lose interest.",
      "Give a chapter to 3 beta readers with one question: 'Where did you stop reading?' Fix those spots."
    ]
  }
];

export const CRAFT_MAP = new Map<string, CraftElement>(
  CRAFT_ELEMENTS.flatMap(c => [
    [c.name.toLowerCase(), c],
    ...(c.name === "Dialogue" ? [["dialogue", c], ["conversation", c]] as [string, CraftElement][] : []),
    ...(c.name === "Pacing" ? [["pacing", c], ["pace", c], ["rhythm", c]] as [string, CraftElement][] : []),
    ...(c.name === "Point of View (POV)" ? [["pov", c], ["point of view", c], ["first person", c], ["third person", c], ["omniscient", c]] as [string, CraftElement][] : []),
    ...(c.name === "Showing vs Telling" ? [["show dont tell", c], ["show don't tell", c], ["showing", c], ["telling", c]] as [string, CraftElement][] : []),
    ...(c.name === "Tension and Suspense" ? [["tension", c], ["suspense", c]] as [string, CraftElement][] : []),
    ...(c.name === "Voice and Style" ? [["voice", c], ["style", c]] as [string, CraftElement][] : []),
    ...(c.name === "Revision and Editing" ? [["revision", c], ["editing", c], ["rewriting", c], ["kill your darlings", c]] as [string, CraftElement][] : []),
  ])
);
