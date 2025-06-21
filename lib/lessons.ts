export interface LessonStep {
  id: number;
  type: "multiple-choice" | "writing";
  question: string;
  content?: string;
  options?: string[];
  correctAnswer: string | number;
  explanation?: string;
  hint?: string;
}

export interface Lesson {
  id: string;
  title: string;
  steps: LessonStep[];
}

interface LanguageLessons {
  [key: string]: Lesson[];
}

export const lessons: LanguageLessons = {
  hindi: [
    // Lesson 1: Basics of Greetings
    {
      id: "1",
      title: "Basics of Greetings",
      steps: [
        {
          id: 1,
          type: "multiple-choice",
          question: "Which of these means 'Hello'?",
          options: ["अलविदा (Alvida)", "नमस्ते (Namaste)", "धन्यवाद (Dhanyavaad)", "माफ़ कीजिए (Maaf Kijiye)"],
          correctAnswer: 1,
          explanation: "'नमस्ते' (Namaste) is a common, respectful greeting in Hindi.",
        },
        {
          id: 2,
          type: "writing",
          question: "How do you say 'Thank you' in Hindi?",
          correctAnswer: "धन्यवाद",
          explanation: "'धन्यवाद' (Dhanyavaad) is the formal way to say 'Thank you'.",
        },
        {
          id: 3,
          type: "writing",
          question: "How do you say 'Goodbye'?",
          correctAnswer: "अलविदा",
          explanation: "'अलविदा' (Alvida) is a common way to say goodbye.",
        },
        {
          id: 4,
          type: "multiple-choice",
          question: "What is 'Yes' in Hindi?",
          options: ["नहीं (Nahin)", "हाँ (Haan)", "ठीक है (Theek Hai)", "शायद (Shaayad)"],
          correctAnswer: 1,
          explanation: "'हाँ' (Haan) means Yes.",
        },
      ],
    },
    // Lesson 2: Common Phrases
    {
      id: "2",
      title: "Common Phrases",
      steps: [
        {
          id: 1,
          type: "writing",
          question: "Translate 'How are you?' to Hindi.",
          correctAnswer: "आप कैसे हैं?",
          explanation: "A polite way to ask someone how they are.",
        },
        {
          id: 2,
          type: "multiple-choice",
          question: "What does 'मेरा नाम...' (Mera naam...) mean?",
          options: ["My house is...", "My name is...", "I want...", "I am..."],
          correctAnswer: 1,
          explanation: "'मेरा नाम' (Mera naam) means 'My name'.",
        },
        {
          id: 3,
          type: "writing",
          question: "How do you say 'goodbye'?",
          correctAnswer: "अलविदा",
          explanation: "'अलविदा' (Alvida) is a common way to say goodbye.",
        },
      ],
    },
    // Lesson 3: Ordering Food
    {
      id: "3",
      title: "Ordering Food",
      steps: [
        {
          id: 1,
          type: "multiple-choice",
          question: "What is 'water' in Hindi?",
          options: ["चाय (Chai)", "कॉफी (Coffee)", "पानी (Paani)", "दूध (Doodh)"],
          correctAnswer: 2,
          explanation: "'पानी' (Paani) is the word for water.",
        },
        {
          id: 2,
          type: "writing",
          question: "How do you ask for 'the bill'?",
          correctAnswer: "बिल देना",
          explanation: "'बिल देना' (Bill dena) literally means 'Give the bill'.",
        },
        {
          id: 3,
          type: "multiple-choice",
          question: "What does 'मुझे एक चाय चाहिए' (Mujhe ek chai chahiye) mean?",
          options: ["I want one water", "I have one tea", "Give me tea", "I want one tea"],
          correctAnswer: 3,
          explanation: "This is a common way to order something.",
        },
      ],
    },
    // Lesson 4: Asking for Directions
    {
      id: "4",
      title: "Asking for Directions",
      steps: [
        {
          id: 1,
          type: "writing",
          question: "How do you ask 'Where is the station?'",
          correctAnswer: "स्टेशन कहाँ है?",
          explanation: "'कहाँ' (kahan) means 'where'.",
        },
        {
          id: 2,
          type: "multiple-choice",
          question: "What does 'सीधे जाओ' (Seedhe jao) mean?",
          options: ["Go left", "Go right", "Go straight", "Go back"],
          correctAnswer: 2,
          explanation: "'सीधे' (seedhe) means 'straight'.",
        },
      ],
    },
    // Lesson 5: Family & Friends
    {
      id: "5",
      title: "Family & Friends",
      steps: [
        {
          id: 1,
          type: "multiple-choice",
          question: "What does 'घर' (Ghar) mean?",
          options: ["Car", "School", "House", "Work"],
          correctAnswer: 2,
          explanation: "'घर' (Ghar) is the Hindi word for house.",
        },
        {
          id: 2,
          type: "writing",
          question: "How do you say 'This is my friend.'?",
          correctAnswer: "यह मेरा दोस्त है",
          explanation: "'दोस्त' (dost) means friend.",
        },
      ],
    },
  ],
  spanish: [
    // Lesson 1: Basics of Greetings
    {
      id: "1",
      title: "Basics of Greetings",
      steps: [
        {
          id: 1,
          type: "multiple-choice",
          question: "Which of these means 'Hello'?",
          options: ["Adiós", "Hola", "Gracias", "Por favor"],
          correctAnswer: 1,
          explanation: "'Hola' is the most common way to say 'Hello' in Spanish.",
        },
        {
          id: 2,
          type: "writing",
          question: "How do you say 'Thank you' in Spanish?",
          correctAnswer: "Gracias",
          explanation: "'Gracias' is the way to say 'Thank you'.",
        },
        {
          id: 3,
          type: "multiple-choice",
          question: "How do you say 'Goodbye'?",
          options: ["Hola", "Buenos días", "Adiós", "Buenas noches"],
          correctAnswer: 2,
          explanation: "'Adiós' is a standard way to say goodbye.",
        },
      ],
    },
    // Lesson 2: Common Phrases
    {
      id: "2",
      title: "Common Phrases",
      steps: [
        {
          id: 1,
          type: "writing",
          question: "Translate 'How are you?' to Spanish.",
          correctAnswer: "¿Cómo estás?",
          explanation: "This is the informal way to ask someone how they are.",
        },
        {
          id: 2,
          type: "multiple-choice",
          question: "What does 'Me llamo...' mean?",
          options: ["My house is...", "My name is...", "I want...", "I am..."],
          correctAnswer: 1,
          explanation: "'Me llamo' is used to introduce your name.",
        },
      ],
    },
  ],
  english: [
    // Lesson 1: Basics of Greetings
    {
      id: "1",
      title: "Basics of Greetings",
      steps: [
        {
          id: 1,
          type: "multiple-choice",
          question: "Which of these is a common way to say 'Hello'?",
          options: ["Goodbye", "Hello", "Yes", "No"],
          correctAnswer: 1,
          explanation: "'Hello' is a universal greeting in English.",
        },
        {
          id: 2,
          type: "writing",
          question: "How do you say 'Thank you'?",
          correctAnswer: "Thank you",
          explanation: "Used to show appreciation.",
        },
      ],
    },
    // Lesson 2: Common Phrases
    {
      id: "2",
      title: "Common Phrases",
      steps: [
        {
          id: 1,
          type: "writing",
          question: "How do you ask 'How are you?'",
          correctAnswer: "How are you?",
          explanation: "A polite inquiry about someone's well-being.",
        },
        {
          id: 2,
          type: "multiple-choice",
          question: "What does 'My name is...' mean?",
          options: ["I live at...", "My name is...", "I am going to...", "I have..."],
          correctAnswer: 1,
          explanation: "Used to introduce yourself.",
        },
      ],
    },
  ],
}; 