
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
  "made": "were makin'"
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
  "and there be no doubt!"
];

// Simple text preprocessing
const preprocessText = (text: string): string => {
  return text.toLowerCase().trim();
};

// Translate a word based on the dictionary
const translateWord = (word: string): string => {
  const lowerWord = word.toLowerCase().replace(/[^\w']/g, '');
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
  
  return text;
};

// Main translation function
export const translateToPirate = (text: string): string => {
  const preprocessedText = preprocessText(text);
  
  // Translate words
  let translatedText = preprocessedText
    .split(' ')
    .map(word => translateWord(word))
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
