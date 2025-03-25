
// Pirate dictionary for word translations
const pirateDictionary: Record<string, string> = {
  // Pronouns
  "i": "I be",
  "my": "me",
  "mine": "me",
  "you": "ye",
  "your": "yer",
  "yours": "yers",
  "he": "that scurvy dog",
  "she": "that comely wench",
  "his": "his",
  "her": "her",
  "we": "we",
  "our": "our",
  "us": "us scallywags",
  "they": "them landlubbers",
  "their": "their",
  "them": "those scurvy dogs",

  // Common words
  "hello": "ahoy",
  "hi": "ahoy",
  "hey": "ahoy",
  "goodbye": "fare ye well",
  "bye": "fare ye well",
  "yes": "aye",
  "yeah": "aye",
  "no": "nay",
  "okay": "aye",
  "ok": "aye",
  "friend": "matey",
  "friends": "hearties",
  "man": "landlubber",
  "woman": "lass",
  "boy": "cabin boy",
  "girl": "lassie",
  "person": "scallywag",
  "people": "scurvy dogs",
  "money": "doubloons",
  "treasure": "booty",
  "gold": "pieces o' eight",
  "food": "grub",
  "drink": "grog",
  "beer": "grog",
  "rum": "the good stuff",
  "water": "briny deep",
  "home": "port",
  "house": "shanty",
  "boat": "ship",
  "ship": "vessel",
  "car": "land vessel",
  "sword": "cutlass",
  "gun": "flintlock",
  "happy": "jolly",
  "sad": "glum",
  "angry": "wrathful",
  "tired": "beat",
  "sorry": "arrr, forgive me",
  "thank you": "thankee",
  "thanks": "thankee",
  "good": "fine",
  "bad": "bilge-sucking",
  "excellent": "mighty fine",
  "terrible": "abysmal",
  "look": "spy",
  "see": "spy",
  "go": "sail",
  "going": "sailing",
  "went": "sailed",
  "gone": "sailed",
  "take": "plunder",
  "taking": "plundering",
  "took": "plundered",
  "taken": "plundered",
  "steal": "pillage",
  "stealing": "pillaging",
  "stole": "pillaged",
  "stolen": "pillaged",
  "fight": "battle",
  "fighting": "battling",
  "fought": "battled",
  "kill": "send to Davy Jones' locker",
  "killing": "sending to Davy Jones' locker",
  "killed": "sent to Davy Jones' locker",
  "die": "meet the maker",
  "dying": "meeting the maker",
  "died": "met the maker",
  "dead": "in Davy Jones' locker",
  "walk": "swagger",
  "walking": "swaggering",
  "walked": "swaggered",
  "run": "scurry",
  "running": "scurrying",
  "ran": "scurried",
  "talk": "parley",
  "talking": "parleying",
  "talked": "parleyed",
  "speak": "parley",
  "speaking": "parleying",
  "spoke": "parleyed",
  "spoken": "parleyed",
  "tell": "spin a yarn",
  "telling": "spinning a yarn",
  "told": "spun a yarn",
  
  // Common phrases
  "how are you": "how be ye farin'",
  "what is your name": "what be ye called",
  "what's your name": "what be ye called",
  "nice to meet you": "pleasure to meet ye, matey",
  "good morning": "mornin' to ye",
  "good afternoon": "afternoon to ye",
  "good evening": "evenin' to ye",
  "good night": "g'night, matey",
  "have a good day": "have a fine day sailin'",
  "take care": "keep yer powder dry",
  "see you later": "until we meet on the high seas again",
  "see you soon": "until we meet on the high seas again",
  "how's it going": "how be the winds blowin'",
  "what's up": "what be the news from above deck",
  "what's happening": "what be the news from above deck",
  "for your information": "be it known to ye",
  "by the way": "shipmate, I tells ye",
  "in my opinion": "in me humble pirate opinion",
  "of course": "aye, that be true",
  "as a matter of fact": "truth be told",
  "on the other hand": "on the port side",
  "in other words": "in pirate speak",
  "in conclusion": "lastly before we hit port",
  "in summary": "to shorten the tale",
  "for example": "take this tale",
  "such as": "like the time",
  "to be honest": "truth be on the wind",
  "to tell you the truth": "I'll not be lyin' to ye",
  "in any case": "blow me down",
  "as soon as possible": "quick as a cannon shot",
  "as far as I know": "far as me spyglass can see",
  "more or less": "give or take a doubloon",
  "in general": "by and large",
  "the fact that": "the seafarin' truth",
  "a lot of": "a ship full o'",
  "a few": "a handful o'",
  "a little": "a wee bit o'",
  
  // Common verbs replacements
  "is": "be",
  "am": "be",
  "are": "be",
  "was": "were",
  "have": "be havin'",
  "has": "be havin'",
  "had": "were havin'",
  "do": "be doin'",
  "does": "be doin'",
  "did": "were doin'",
  "will": "gonna",
  "going to": "gonna",
  "would": "would",
  "should": "should",
  "could": "could",
  "can": "can",
  "may": "may",
  "might": "might",
  "must": "must",
  "need": "be needin'",
  "wants": "be wantin'",
  "want": "be wantin'",
  "wanted": "were wantin'",
  "like": "be likin'",
  "likes": "be likin'",
  "liked": "were likin'",
  "love": "be lovin'",
  "loves": "be lovin'",
  "loved": "were lovin'",
  "hate": "be hatin'",
  "hates": "be hatin'",
  "hated": "were hatin'",
  "think": "be thinkin'",
  "thinks": "be thinkin'",
  "thought": "were thinkin'",
  "know": "be knowin'",
  "knows": "be knowin'",
  "knew": "were knowin'",
  "feel": "be feelin'",
  "feels": "be feelin'",
  "felt": "were feelin'",
  "get": "be gettin'",
  "gets": "be gettin'",
  "got": "were gettin'",
  "make": "be makin'",
  "makes": "be makin'",
  "made": "were makin'",
  
  // Enhanced Nautical Terms
  "ocean": "high seas",
  "sea": "briny deep",
  "beach": "shore",
  "island": "isle",
  "map": "chart",
  "port": "harbor",
  "harbor": "safe haven",
  "anchor": "drop iron",
  "sail": "canvas",
  "captain": "cap'n",
  "sailor": "seadog",
  "navigate": "chart course",
  "direction": "bearin'",
  "north": "nor'",
  "south": "sou'",
  "east": "east'ard",
  "west": "west'ard",
  "navigate": "find bearings",
  "compass": "guide needle",
  "wind": "gale",
  "storm": "tempest",
  "rain": "squall",
  "lightning": "sky fire",
  "crew": "hands",
  "team": "crew",
  "group": "band o' brigands",
  "leader": "cap'n",
  "boss": "admiral",
  "manager": "quartermaster",
  "police": "navy dogs",
  "law": "code",
  "rules": "articles",
  "prison": "brig",
  "jail": "the hold",
  "alcohol": "grog",
  "drunk": "three sheets to the wind",
  "knife": "dirk",
  "flag": "colors",
  "bathroom": "head",
  "toilet": "head",
  "bed": "hammock",
  "sleep": "catch some shut-eye",
  "sleeping": "catchin' some shut-eye",
  "slept": "caught some shut-eye",
  "rope": "line",
  "ladder": "Jacob's ladder",
  "stairs": "companionway",
  "floor": "deck",
  "wall": "bulkhead",
  "ceiling": "overhead",
  "room": "cabin",
  "kitchen": "galley",
  "cook": "ship's cook",
  "doctor": "sawbones",
  "surgeon": "sawbones",
  "problem": "trouble",
  "issue": "pickle",
  "difficulty": "rough waters",
  "easy": "smooth sailin'",
  "hard": "tough as old rope",
  "impossible": "not even with the wind at yer back",
  "possible": "within reach",
  "fast": "fleet",
  "slow": "dragging anchor",
  "strong": "sturdy",
  "weak": "lily-livered",
  "brave": "bold",
  "cowardly": "yellow-bellied",
  "friend": "matey",
  "enemy": "scurvy dog",
  "stranger": "landlubber",
  "foreigner": "foreign swab",
  "rich": "flush with doubloons",
  "poor": "without a copper to yer name",
  "beautiful": "fair",
  "ugly": "hard on the eyes",
  "old": "long in the tooth",
  "young": "greenhorn",
  "small": "wee",
  "big": "hulking",
  "large": "grand",
  "happy": "merry",
  "angry": "in a foul temper",
  "smart": "clever",
  "stupid": "addled",
  "crazy": "touched in the head",
  "thief": "bilge rat",
  "steal": "plunder",
  "rob": "pillage",
  "kill": "dispatch",
  "fight": "scrap",
  "attack": "board",
  "defend": "stand ground",
  "run": "flee",
  "hide": "lay low",
  "search": "hunt",
  "find": "discover",
  "lose": "misplace",
  "win": "triumph",
  "defeated": "scuppered",
  "victory": "conquest",
  "help": "lend a hand",
  "computer": "magic box",
  "phone": "talking device",
  "internet": "the seven digital seas",
  "website": "digital port",
  "email": "message in a digital bottle",
  "password": "secret code",
  "login": "board",
  "download": "haul aboard",
  "upload": "send off",
  "app": "treasure map",
  "program": "contraption",
  "bug": "curse",
  "error": "mishap",
  "crash": "wreck",
  "fix": "repair",
  "update": "refit",
  "version": "incarnation",
  "data": "loot",
  "information": "intelligence",
  "game": "diversion",
  "video": "moving picture",
  "photo": "portrait",
  "camera": "picture box",
  "music": "shanty",
  "song": "tune",
  "movie": "tale",
  "television": "magic picture box",
  "radio": "squawk box",
  "meeting": "parley",
  "conference": "grand parley",
  "office": "quarters",
  "desk": "chart table",
  "chair": "seat",
  "table": "mess",
  "coffee": "black brew",
  "tea": "leaf water",
  "breakfast": "morning rations",
  "lunch": "midday rations",
  "dinner": "evening rations",
  "restaurant": "mess hall",
  "store": "trading post",
  "shop": "merchant",
  "mall": "market",
  "bank": "treasure house",
  "money": "coins",
  "cash": "loot",
  "credit card": "magic money card",
  "car": "land ship",
  "bus": "land galleon",
  "train": "iron horse",
  "airplane": "flying ship",
  "airport": "flying ship dock",
  "vacation": "shore leave",
  "holiday": "day of revelry",
  "weekend": "time off watch",
  "monday": "back to work day",
  "friday": "freedom day",
};

// Pirate interjections to randomly add
const pirateInterjections = [
  "Arr!",
  "Ahoy!",
  "Avast!",
  "Aye aye!",
  "Shiver me timbers!",
  "Blimey!",
  "Yo ho ho!",
  "By Blackbeard's sword!",
  "Savvy?",
  "Yarr!",
  "Ahoy there!",
  "Blow me down!",
  "By the powers!",
  "Splice the mainbrace!",
  "Scupper that!",
  "Abandon ship!",
  "All hands on deck!",
  "Batten down the hatches!",
  "Dead men tell no tales!",
  "Feed the fish!",
  "Fire in the hole!",
  "Heave ho!",
  "Land ho!",
  "Prepare to be boarded!",
  "Swash me buckles!",
  "Walk the plank!",
  "Sink me!",
  "Strike the colors!",
  "Man the capstan!",
  "Hoist the mizzen!",
  "Keelhaul the lot of ye!",
  "Belay that talk!",
  "What in the Kraken's name!",
  "Thunder and lightning!",
  "Well blow me down!",
  "Fetch me cutlass!",
  "By Neptune's trident!",
  "Great balls of fire!",
  "Slap me thrice!",
  "Blisterin' barnacles!",
  "Blister me barnacles!",
  "By the Devil's teeth!",
  "Clear the deck!",
  "Cursed be the seven seas!",
  "Sink me with a cannonball!",
  "By the Grand Line!",
  "Blast me britches!",
  "Begad and begory!",
  "By Davy Jones himself!",
];

// Pirate endings to randomly add
const pirateEndings = [
  "ye scurvy dog!",
  "ye landlubber!",
  "me hearty!",
  "arr!",
  "and that's the truth of it!",
  "or I'll feed ye to the sharks!",
  "and a bottle of rum!",
  "savvy?",
  "ye scallywag!",
  "fair winds!",
  "by the powers!",
  "on me honor!",
  "or I'm a Dutchman!",
  "and that's no fish tale!",
  "may the wind be at yer back!",
  "or may I walk the plank!",
  "mark my words!",
  "or strike me down!",
  "I'll be bound!",
  "and there be no doubt!",
  "so help me Neptune!",
  "and that's me final word!",
  "blast me barnacles!",
  "I swear on me wooden leg!",
  "if I ever saw one!",
  "or feed me to the sharks!",
  "or I'm the Flying Dutchman!",
  "or I'll be keelhauled!",
  "so says I!",
  "on me mother's grave!",
];

// Different pirate dialect types
type PirateDialect = 'caribbean' | 'golden-age' | 'blackbeard';

// Dialect-specific words
const dialectWords: Record<PirateDialect, Record<string, string>> = {
  'caribbean': {
    "hello": "ahoy there",
    "gold": "Spanish doubloons",
    "ship": "galleon",
    "captain": "el capitán",
    "rum": "Caribbean grog",
    "treasure": "Spanish gold",
    "island": "tropical isle",
    "sailor": "buccaneer",
    "friend": "compadre",
    "yes": "aye, mon",
  },
  'golden-age': {
    "hello": "hail and well met",
    "gold": "pieces of eight",
    "ship": "man o' war",
    "captain": "commodore",
    "rum": "finest spirits",
    "treasure": "king's ransom",
    "island": "sovereign isle",
    "sailor": "jack tar",
    "friend": "trusted salt",
    "yes": "indeed so",
  },
  'blackbeard': {
    "hello": "fear me, if ye be wise",
    "gold": "devil's coin",
    "ship": "fear bringer",
    "captain": "master of the deep",
    "rum": "dark spirits",
    "treasure": "blood money",
    "island": "forsaken land",
    "sailor": "damned soul",
    "friend": "temporary ally",
    "yes": "it shall be so",
  }
};

// Simple text preprocessing
const preprocessText = (text: string): string => {
  return text.toLowerCase().trim();
};

// Translate a word based on the dictionary
const translateWord = (word: string, dialect: PirateDialect = 'caribbean'): string => {
  const lowerWord = word.toLowerCase().replace(/[^\w']/g, '');
  
  // Check dialect-specific translation first
  if (dialectWords[dialect][lowerWord]) {
    return dialectWords[dialect][lowerWord];
  }
  
  // Fall back to standard pirate dictionary
  return pirateDictionary[lowerWord] || word;
};

// Add random pirate interjections
const addInterjections = (text: string): string => {
  // 30% chance to add an interjection at the beginning
  if (Math.random() < 0.3) {
    const randomInterjection = pirateInterjections[Math.floor(Math.random() * pirateInterjections.length)];
    text = `${randomInterjection} ${text}`;
  }
  
  // 20% chance to add an ending
  if (Math.random() < 0.2) {
    const randomEnding = pirateEndings[Math.floor(Math.random() * pirateEndings.length)];
    text = `${text} ${randomEnding}`;
  }
  
  return text;
};

// Apply pirate grammar transformations
const applyPirateGrammar = (text: string): string => {
  // Replace "ing" with "in'" at the end of words
  text = text.replace(/ing\b/g, "in'");
  
  // Replace "my" with "me" when it's a possessive
  text = text.replace(/\bmy\b/g, "me");
  
  // Add apostrophes to certain words
  text = text.replace(/\bof\b/g, "o'");
  text = text.replace(/\bto\b/g, "t'");
  
  // Change "er" endings to "a" (pirate dialect)
  text = text.replace(/er\b/g, "a");
  
  // Change "th" to "t" in many words
  text = text.replace(/\bth/g, "t'");
  
  // Change "you" at the beginning of questions to "ye"
  text = text.replace(/\byou\b/g, "ye");
  
  return text;
};

// Main translation function with dialect support
export const translateToPirate = (text: string, dialect: PirateDialect = 'caribbean'): string => {
  const preprocessedText = preprocessText(text);
  
  // Translate words
  let translatedText = preprocessedText
    .split(' ')
    .map(word => translateWord(word, dialect))
    .join(' ');
  
  // Apply pirate grammar transformations
  translatedText = applyPirateGrammar(translatedText);
  
  // Add random interjections and endings
  translatedText = addInterjections(translatedText);
  
  // Capitalize first letter of sentences
  translatedText = translatedText.charAt(0).toUpperCase() + translatedText.slice(1);
  
  return translatedText;
};

export const getRandomPiratePhrase = (): string => {
  const phrases = [
    "Ahoy there, matey! What words ye be needin' translated?",
    "Yarr! Type yer message and I'll give it the proper pirate speak!",
    "Avast ye! Enter yer landlubber words and I'll make 'em fit for the high seas!",
    "Shiver me timbers! Ready to translate yer boring words into pirate talk?",
    "Ahoy! This old sea dog be ready to translate yer words!",
    "By Blackbeard's beard! Let me turn yer words into proper pirate speak!",
    "Arr! What message needs the pirate touch today?",
    "Ahoy there! This captain be ready to piratify yer words!",
    "Yo ho ho! Give me some words to make more... piratey!",
    "Avast! What landlubber speech shall I transform for ye?",
  ];
  
  return phrases[Math.floor(Math.random() * phrases.length)];
};

// Pirate joke generator
const pirateJokes = [
  "What's a pirate's favorite letter? Ye might think it's R, but his true love be the C!",
  "How much did the pirate pay for his hook and peg? An arm and a leg!",
  "Why don't pirates shower before they walk the plank? Because they'll just wash up on shore later!",
  "What's a pirate's favorite type of fish? A gold-fish!",
  "Why are pirates terrible singers? Because they can't hit the high seas!",
  "Why does it take pirates so long to learn the alphabet? Because they spend years at C!",
  "What do you call a pirate with two eyes, two hands, and two legs? A beginner.",
  "How did the pirate get his Jolly Roger so cheap? He bought it on sail!",
  "Why do pirates carry their treasure maps in bottles? To keep them dry... it's just common sense!",
  "Why don't pirates go to strip clubs? Because they already have all the booty!",
  "What did the pirate say on his 80th birthday? Aye Matey!",
  "What's a pirate's favorite programming language? R!",
  "How do pirates prefer to communicate? Aye to aye!",
  "What's a pirate's least favorite vegetable? Leeks!",
  "Why did the pirate buy an eye patch? Because he couldn't afford an iPad!",
  "What lies at the bottom of the ocean and twitches? A nervous wreck!",
  "Why don't pirates go to boxing matches? They don't like getting hooked!",
  "What's a pirate's favorite car? A Yarrrrrris!",
  "Why couldn't the pirate play cards? Because he was standing on the deck!",
  "How do pirates know that they are pirates? They think, therefore they ARRRR!"
];

export const getRandomPirateJoke = (): string => {
  return pirateJokes[Math.floor(Math.random() * pirateJokes.length)];
};

// Pirate name generator
const pirateFirstNames = [
  "Captain", "Blackbeard", "Redbeard", "One-Eyed", "Peg-Leg", "Hook-Hand", "Salty", "Scurvy", "Barnacle", 
  "Jolly", "Crusty", "Scallywag", "Cutlass", "Foul", "Dirty", "Bilge", "Stinky", "Grumpy", "Mad", "Crazy",
  "Bloody", "Filthy", "Rusty", "Scarred", "Gnarled", "Toothless", "Rotten", "Mangy", "Wild", "Fierce",
  "Surly", "Sneaky", "Crafty", "Savage", "Cruel", "Rough", "Scoundrel", "Corsair", "Buccaneer", "Marauder"
];

const pirateLastNames = [
  "Bones", "Morgan", "Silver", "Flint", "Kidd", "Sparrow", "Beard", "Hook", "Patch", "Roger",
  "Blackheart", "Deadwood", "Grimbeard", "Darkwater", "Ironhook", "Gold", "Doubloon", "Plunder", "Cutthroat", "Maroon",
  "Seadog", "Bloodsail", "Stormbringer", "Kraken", "Shark", "Stormchaser", "Squid", "Barnacle", "Cannonball", "Gunpowder",
  "Tide", "Wave", "Reef", "Coast", "Anchor", "Sail", "Mast", "Keel", "Deck", "Hull"
];

export const generatePirateName = (): string => {
  const firstName = pirateFirstNames[Math.floor(Math.random() * pirateFirstNames.length)];
  const lastName = pirateLastNames[Math.floor(Math.random() * pirateLastNames.length)];
  return `${firstName} ${lastName}`;
};
