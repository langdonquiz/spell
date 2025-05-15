const wordLists = {
  "100 High Frequency Words": [
    { word: "the", definition: "used to talk about a specific person, place, or thing", examples: ["I saw ______ cat in the garden.", "She opened ______ door slowly."] },
    { word: "that", definition: "refers to a specific person, place, or thing mentioned earlier", examples: ["______ is my favourite toy.", "I like ______ song we heard yesterday."] },
    { word: "not", definition: "shows the opposite or negative of something", examples: ["I am ______ going to the park today.", "She does ______ like carrots."] },
    { word: "look", definition: "to use your eyes to see something", examples: ["Please ______ at the sky.", "______ at this picture I drew!"] },
    { word: "put", definition: "to place something somewhere", examples: ["Can you ______ the book on the shelf?", "I ______ my shoes under the bed."] },
    { word: "and", definition: "used to connect words or ideas together", examples: ["I have a dog ______ a cat.", "She likes apples ______ bananas."] },
    { word: "with", definition: "together or accompanied by someone or something", examples: ["I went to the park ______ my brother.", "She painted a picture ______ bright colours."] },
    { word: "then", definition: "shows what happens next or afterward", examples: ["We ate lunch, ______ we played outside.", "First, do your homework, ______ you can watch TV."] },
    { word: "don't", definition: "short for 'do not'; means not doing something", examples: ["Please ______ touch the hot stove.", "I ______ like broccoli."] },
    { word: "could", definition: "used to say something is possible or to make polite requests", examples: ["______ you help me with this puzzle?", "She ______ ride a bike when she was five."] },
    { word: "a", definition: "used to refer to a single thing or person", examples: ["I have ______ cat.", "She wants ______ new toy."] },
    { word: "all", definition: "the whole amount or every part of something", examples: ["______ the cookies are gone.", "We played games ______ day."] },
    { word: "were", definition: "past form of 'are'", examples: ["They ______ happy at the party.", "We ______ running in the park."] },
    { word: "come", definition: "to move or travel toward a place", examples: ["Please ______ inside.", "Can you ______ to my house?"] },
    { word: "house", definition: "a building where people live", examples: ["We live in a big ______.", "The ______ is painted blue."] },
    { word: "to", definition: "used to show direction or purpose", examples: ["We are going ______ the store.", "She wants ______ learn piano."] },
    { word: "we", definition: "used to talk about yourself and other people", examples: ["______ are going to the zoo.", "______ will bake a cake together."] },
    { word: "go", definition: "to move from one place to another", examples: ["Let's ______ to the park.", "Can we ______ swimming today?"] },
    { word: "will", definition: "shows future action or intention", examples: ["I ______ visit grandma tomorrow.", "We ______ play soccer later."] },
    { word: "old", definition: "having lived for a long time", examples: ["My grandpa is very ______.", "That book looks very ______."] },
    { word: "said", definition: "to speak words", examples: ["She ______ hello to me.", "He ______ he was happy."] },
    { word: "can", definition: "to be able to do something", examples: ["I ______ ride a bike.", "She ______ sing well."] },
    { word: "little", definition: "small in size or amount", examples: ["The ______ dog is cute.", "I have a ______ bit of candy."] },
    { word: "into", definition: "moving to the inside of something", examples: ["The cat went ______ the room.", "He climbed ______ the car."] },
    { word: "too", definition: "more than what is needed or wanted", examples: ["It is ______ hot today.", "She ate ______ much candy."] },
    { word: "in", definition: "inside or within something", examples: ["The toys are ______ the box.", "She is ______ the room."] },
    { word: "are", definition: "present form of 'be' used with plural subjects", examples: ["We ______ happy today.", "They ______ playing soccer."] },
    { word: "as", definition: "used to compare or indicate function", examples: ["He is as tall ______ his brother.", "Use this ______ a marker."] },
    { word: "back", definition: "to return to a place or position", examples: ["Come ______ to the house.", "She went ______ home."] },
    { word: "by", definition: "close to or next to something", examples: ["The cat is ______ the door.", "Sit ______ me."] },
    { word: "he", definition: "used to refer to a male person", examples: ["______ is my brother.", "I saw ______ at the park."] },
    { word: "up", definition: "towards a higher position", examples: ["Climb ______ the ladder.", "The balloon went ______."] },
    { word: "no", definition: "used to show disagreement or refusal", examples: ["There is ______ milk left.", "______ one is here."] },
    { word: "from", definition: "indicates the starting point of something", examples: ["She walked ______ the park.", "I got a gift ______ my friend."] },
    { word: "day", definition: "a period of 24 hours", examples: ["Today is a sunny ______.", "We had fun all ______."] },
    { word: "I", definition: "refers to oneself", examples: ["______ am happy.", "______ like to read."] },
    { word: "had", definition: "past tense of 'have'", examples: ["I ______ a great time yesterday.", "She ______ a new book."] },
    { word: "mum", definition: "another word for mother", examples: ["My ______ makes delicious food.", "I love my ______."] },
    { word: "children", definition: "young boys and girls", examples: ["The ______ are playing outside.", "She has three ______."] },
    { word: "made", definition: "past tense of 'make'", examples: ["She ______ a cake.", "We ______ a mess in the room."] },
    { word: "of", definition: "belonging to or coming from", examples: ["The color ______ the sky is blue.", "A book ______ stories."] },
    { word: "my", definition: "belonging to me", examples: ["This is ______ favorite toy.", "I lost ______ keys."] },
    { word: "one", definition: "the number 1 or a single thing", examples: ["I have ______ apple.", "Can you give me ______ more?"] },
    { word: "him", definition: "refers to a male person mentioned earlier", examples: ["I saw ______ at school.", "Give the book to ______."] },
    { word: "time", definition: "a period during which something happens", examples: ["It's ______ to go to bed.", "What ______ is it now?"] },
    { word: "it", definition: "used to refer to a thing or an idea", examples: ["______ is raining outside.", "I found ______ under the table."] },
    { word: "her", definition: "refers to a female person mentioned earlier", examples: ["Give the present to ______.", "I helped ______ with homework."] },
    { word: "them", definition: "refers to two or more people or things", examples: ["I saw ______ at the park.", "Help ______ with the project."] },
    { word: "Mr", definition: "a title used before a man's surname", examples: ["______ Smith is our teacher.", "I saw ______ Brown at the store."] },
    { word: "I'm", definition: "short for 'I am'", examples: ["______ happy to see you.", "______ going to the store."] },
    { word: "was", definition: "past tense of 'is' or 'am'", examples: ["She ______ at the party yesterday.", "The dog ______ barking all night."] },
    { word: "what", definition: "used to ask for information", examples: ["______ is your name?", "Do you know ______ time it is?"] },
    { word: "do", definition: "to perform or carry out an action", examples: ["Can you ______ your homework?", "I will ______ it later."] },
    { word: "get", definition: "to obtain or receive something", examples: ["Can you ______ me some water?", "I will ______ a new toy."] },
    { word: "if", definition: "shows a condition or possibility", examples: ["______ it rains, we will stay inside.", "I will help you ______ you need it."] },
    { word: "you", definition: "used to refer to the person being spoken to", examples: ["______ are my best friend.", "Can ______ help me?"] },
    { word: "there", definition: "in or at that place", examples: ["Look over ______.", "The book is over ______."] },
    { word: "me", definition: "refers to oneself", examples: ["Can you help ______?", "Give the book to ______."] },
    { word: "just", definition: "only or simply", examples: ["I ______ want a little more.", "She was ______ here."] },
    { word: "help", definition: "to give assistance or support", examples: ["Can you ______ me with my homework?", "I need someone to ______ with the dishes."] },
    { word: "they", definition: "used to refer to two or more people or things", examples: ["______ are playing soccer.", "______ finished their project."] },
    { word: "out", definition: "away from the inside", examples: ["He went ______ to play.", "Take the trash ______."] },
    { word: "down", definition: "from a higher to a lower position", examples: ["The cat jumped ______ from the shelf.", "Sit ______ and relax."] },
    { word: "now", definition: "at the present moment", examples: ["We need to leave ______.", "It's time to go ______."] },
    { word: "Mrs", definition: "a title for a married woman", examples: ["______ Johnson is our neighbor.", "I spoke to ______ Brown yesterday."] },
    { word: "on", definition: "in a position above something", examples: ["The book is ______ the table.", "Put the vase ______ the shelf."] },
    { word: "this", definition: "used to identify a specific thing or person", examples: ["______ is my favorite song.", "I like ______ book."] },
    { word: "dad", definition: "another word for father", examples: ["My ______ likes to read.", "I went fishing with my ______."] },
    { word: "came", definition: "past tense of 'come'", examples: ["She ______ to visit us.", "The cat ______ inside."] },
    { word: "called", definition: "to shout or make a phone call", examples: ["He ______ for help.", "I ______ my friend yesterday."] },
    { word: "she", definition: "used to refer to a female person", examples: ["______ likes to sing.", "I saw ______ at the park."] },
    { word: "have", definition: "to possess or own something", examples: ["I ______ a new toy.", "They ______ lots of friends."] },
    { word: "big", definition: "large in size", examples: ["The dog is very ______.", "We have a ______ house."] },
    { word: "oh", definition: "an expression of surprise or realization", examples: ["______! I forgot my keys.", "______ no, I made a mistake."] },
    { word: "here", definition: "in this place", examples: ["Come over ______.", "Sit ______ with me."] },
    { word: "is", definition: "present form of 'be' for singular subjects", examples: ["The dog ______ barking.", "She ______ my friend."] },
    { word: "went", definition: "past tense of 'go'", examples: ["She ______ to the store.", "We ______ hiking yesterday."] },
    { word: "when", definition: "used to talk about a time", examples: ["Tell me ______ you will arrive.", "I remember ______ we first met."] },
    { word: "about", definition: "on the subject of or concerning", examples: ["We talked ______ the game.", "Tell me more ______ your trip."] },
    { word: "off", definition: "away or not attached", examples: ["The hat fell ______ his head.", "Turn the lights ______."] },
    { word: "for", definition: "used to indicate purpose or reason", examples: ["This gift is ______ you.", "I am waiting ______ my turn."] },
    { word: "be", definition: "to exist or live", examples: ["It will ______ fun.", "She wants to ______ a doctor."] },
    { word: "it's", definition: "short for 'it is' or 'it has'", examples: ["______ raining outside.", "______ been a long day."] },
    { word: "got", definition: "past tense of 'get'", examples: ["I ______ a new toy.", "She ______ a good grade."] },
    { word: "asked", definition: "past tense of 'ask'", examples: ["He ______ for help.", "She ______ a question."] },
    { word: "at", definition: "used to indicate location or time", examples: ["Meet me ______ the park.", "The event starts ______ 6 PM."] },
    { word: "like", definition: "to enjoy or feel fondness for", examples: ["I ______ ice cream.", "She ______ playing soccer."] },
    { word: "see", definition: "to look at or notice something", examples: ["I can ______ the mountains.", "Did you ______ the movie?"] },
    { word: "their", definition: "belonging to them", examples: ["This is ______ house.", "I met ______ friends."] },
    { word: "saw", definition: "past tense of 'see'", examples: ["I ______ a rainbow yesterday.", "She ______ a movie at the theater."] },
    { word: "his", definition: "belonging to a male person", examples: ["This is ______ bike.", "He lost ______ keys."] },
    { word: "some", definition: "an unspecified amount or number", examples: ["I need ______ help.", "She bought ______ apples."] },
    { word: "looked", definition: "past tense of 'look'", examples: ["He ______ at the sky.", "She ______ happy today."] },
    { word: "people", definition: "human beings in general or considered collectively", examples: ["Many ______ came to the event.", "I saw a lot of ______ at the park."] },
    { word: "make", definition: "to create or produce something", examples: ["Let's ______ a cake.", "I want to ______ a drawing."] },
    { word: "but", definition: "used to introduce a contrasting statement", examples: ["I like pizza, ______ not olives.", "She is smart, ______ sometimes forgetful."] },
    { word: "so", definition: "to a great extent", examples: ["I am ______ tired today.", "She was ______ happy to see me."] },
    { word: "very", definition: "extremely or to a high degree", examples: ["The movie was ______ interesting.", "He is ______ tall."] },
    { word: "your", definition: "belonging to the person being spoken to", examples: ["Is this ______ bag?", "I like ______ idea."] },
    { word: "an", definition: "used before words that start with a vowel sound", examples: ["She ate ______ apple.", "I saw ______ elephant."] }
  ],
  "Spring 2 Week 6": [
    { word: "purple", definition: "a colour between blue and red", examples: ["She wore a ______ dress.", "The flower was a bright shade of ______."] },
    { word: "answer", definition: "a response to a question", examples: ["Please write your ______ clearly.", "He gave the wrong ______."] },
    { word: "decision", definition: "a choice made after thinking", examples: ["Making a ______ can be difficult.", "She made the ______ to stay home."] },
    { word: "completion", definition: "the act of finishing something", examples: ["The ______ of the project took two weeks.", "Upon ______, we celebrated."] },
    { word: "invention", definition: "something created for the first time", examples: ["The telephone was a great ______.", "His ______ changed the world."] },
    { word: "eighty", definition: "the number 80", examples: ["There are ______ students in the class.", "The cake was for Grandma's ______ birthday."] },
    { word: "believe", definition: "to accept as true", examples: ["I ______ you can do it.", "Do you ______ in magic?"] },
    { word: "collision", definition: "an instance of two objects hitting each other", examples: ["The cars had a ______.", "There was a loud ______."] },
    { word: "confession", definition: "an admission of wrongdoing", examples: ["He made a ______ about the broken window.", "Her ______ surprised everyone."] },
    { word: "expansion", definition: "the act of becoming larger", examples: ["The ______ of the city continued.", "They planned the ______ of their home."] },
    { word: "turquoise", definition: "a blue-green colour", examples: ["She painted her room ______.", "The ocean looked ______."] },
    { word: "calendar", definition: "a chart showing days, weeks, and months", examples: ["Mark the date on your ______.", "The ______ is hanging on the wall."] },
    { word: "television", definition: "a device for watching programmes", examples: ["We watched the news on ______.", "She turned off the ______ before bed."] },
    { word: "action", definition: "the process of doing something", examples: ["Quick ______ saved the day.", "He took ______ immediately."] },
    { word: "magician", definition: "a person who performs magic tricks", examples: ["The ______ pulled a rabbit from the hat.", "Everyone clapped for the ______."] },
    { word: "mystery", definition: "something difficult to explain or understand", examples: ["The book was a thrilling ______.", "Solving the ______ took weeks."] },
    { word: "typical", definition: "usual or expected", examples: ["It was a ______ rainy day.", "She gave a ______ answer."] },
    { word: "gymnast", definition: "a person who performs flips, jumps, and balance skills", examples: ["The ______ performed a flip.", "She is a talented ______."] }
  ],
  "Summer 1 Week 1": [
    { word: "would", definition: "used to indicate a possible situation or action", examples: ["I ______ like to go to the park today.", "He said he ______ bring the book tomorrow."] },
    { word: "could", definition: "used to express possibility or ability in the past", examples: ["She ______ see the mountains from her window.", "We ______ have been there earlier."] },
    { word: "should", definition: "used to indicate obligation or duty", examples: ["You ______ brush your teeth twice a day.", "We ______ finish our homework before playing."] },
    { word: "because", definition: "for the reason that", examples: ["He stayed home ______ he was sick.", "They left early ______ the weather was bad."] },
    { word: "said", definition: "past tense of say", examples: ["She ______ she was tired.", "He ______ he liked chocolate."] },
    { word: "hear", definition: "perceive with the ear", examples: ["Can you ______ the music playing?", "I ______ a noise outside."] },
    { word: "here", definition: "in this place", examples: ["Come ______ and sit next to me.", "Your book is right ______."] },
    { word: "where", definition: "in or to what place", examples: ["Do you know ______ she went?", "Tell me ______ you are."] },
    { word: "were", definition: "past tense of are", examples: ["They ______ playing outside all afternoon.", "We ______ very tired after the trip."] },
    { word: "people", definition: "human beings in general", examples: ["There were many ______ at the concert.", "The ______ in the village were friendly."] },
    { word: "night", definition: "the time of darkness between sunset and sunrise", examples: ["We stayed up late into the ______.", "It was a cold ______."] },
    { word: "father", definition: "a male parent", examples: ["Her ______ made breakfast every morning.", "My ______ is reading a book."] },
    { word: "mother", definition: "a female parent", examples: ["His ______ read him a story.", "Her ______ works at the hospital."] },
    { word: "beautiful", definition: "pleasing the senses or mind aesthetically", examples: ["The ______ sunset lit up the sky.", "It was a ______ dress."] },
    { word: "water", definition: "a clear liquid essential for life", examples: ["Drink plenty of ______ every day.", "The glass was full of ______."] },
    { word: "friend", definition: "a person with whom one has a bond of mutual affection", examples: ["My best ______ and I went to the beach.", "He is a good ______."] },
    { word: "knight", definition: "a man awarded a non-hereditary title of honour", examples: ["The ______ rode a horse in shining armour.", "He was made a ______ by the Queen."] },
    { word: "children", definition: "young human beings", examples: ["The ______ played in the park all afternoon.", "Many ______ enjoy reading stories."] }
  ],
  "Summer 1 Week 2": [
    { word: "consider", definition: "to think about carefully", examples: ["Please ______ the question before you answer.", "You should ______ all the options."] },
    { word: "describe", definition: "to say or write what something is like", examples: ["Can you ______ the painting?", "Please ______ what you saw."] },
    { word: "disappear", definition: "to go out of sight", examples: ["The rabbit seemed to ______ into thin air.", "Watch the sun ______ behind the clouds."] },
    { word: "eight", definition: "the number 8", examples: ["I have ______ pencils in my box.", "There are ______ ducks in the pond."] },
    { word: "exercise", definition: "physical activity to stay healthy", examples: ["Running is good ______.", "We need to do more ______ every day."] },
    { word: "continue", definition: "to keep doing something", examples: ["Let's ______ our walk.", "You should ______ practising your spellings."] },
    { word: "different", definition: "not the same", examples: ["The twins have ______ hobbies.", "We chose ______ colours for our rooms."] },
    { word: "early", definition: "before the usual time", examples: ["I woke up ______ today.", "Please arrive ______ for the trip."] },
    { word: "eighth", definition: "in the position number 8", examples: ["She came ______ in the race.", "The ______ page is missing from the book."] },
    { word: "experience", definition: "something that happens to you", examples: ["Climbing the mountain was a great ______.", "She shared her ______ with the class."] },
    { word: "decide", definition: "to make a choice", examples: ["I will ______ which game to play.", "Can you ______ what to have for lunch?"] },
    { word: "difficult", definition: "hard to do", examples: ["This puzzle is very ______.", "Learning a new language can be ______."] },
    { word: "earth", definition: "the planet we live on", examples: ["The ______ moves around the sun.", "We must look after the ______."] },
    { word: "enough", definition: "as much as you need", examples: ["I have ______ sweets for everyone.", "Make sure you drink ______ water."] },
    { word: "experiment", definition: "a test to discover something", examples: ["We did a science ______ with magnets.", "The ______ showed surprising results."] },
    { word: "extreme", definition: "very great or strong", examples: ["The desert has ______ heat.", "He showed ______ bravery."] },
    { word: "forward", definition: "towards the front", examples: ["Step ______ when your name is called.", "The car moved ______ slowly."] },
    { word: "famous", definition: "known by many people", examples: ["He is a ______ footballer.", "Paris is ______ for its landmarks."] }
  ],
  "Summer 1 Week 3": [
    { word: "scheme", definition: "a plan or idea for doing something", examples: ["They came up with a clever ______.", "We have a ______ for raising money."] },
    { word: "echo", definition: "a sound that repeats after bouncing off a surface", examples: ["The mountains made the shout ______.", "We heard our voices ______ in the cave."] },
    { word: "chalet", definition: "a wooden house, often found in the mountains", examples: ["We stayed in a cosy ______ on our holiday.", "The ______ was surrounded by snow."] },
    { word: "ache", definition: "a continuous pain", examples: ["I have an ______ in my leg.", "After running, he felt an ______ in his side."] },
    { word: "monarch", definition: "a king or queen", examples: ["The ______ ruled the land for many years.", "The ______ wore a golden crown."] },
    { word: "chorus", definition: "part of a song that is repeated", examples: ["Everyone sang the ______ loudly.", "I love the ______ of that song."] },
    { word: "character", definition: "a person in a story, play, or film", examples: ["The main ______ was very brave.", "Which ______ is your favourite?"] },
    { word: "machine", definition: "a device that does work", examples: ["The washing ______ was broken.", "The vending ______ gave us snacks."] },
    { word: "anchor", definition: "a heavy object used to keep a ship in place", examples: ["The ship dropped its ______ in the harbour.", "The sailor pulled up the heavy ______."] },
    { word: "mechanic", definition: "a person who fixes machines", examples: ["The ______ repaired the car.", "We called a ______ when the engine stopped."] },
    { word: "chemist", definition: "a shop that sells medicines", examples: ["I bought the medicine from the ______.", "She works as a ______ in town."] },
    { word: "chef", definition: "a person who cooks professionally", examples: ["The ______ made a delicious meal.", "He trained to become a ______."] },
    { word: "brochure", definition: "a small book with information about something", examples: ["I picked up a holiday ______.", "The ______ showed lots of places to visit."] },
    { word: "chaos", definition: "a situation of complete confusion", examples: ["The playground was in ______ after the bell.", "There was ______ when the fire alarm rang."] },
    { word: "school", definition: "a place where children go to learn", examples: ["We walk to ______ every morning.", "______ finishes at 3:30 p.m."] },
    { word: "parachute", definition: "a cloth device that slows a fall from the sky", examples: ["The skydiver opened his ______.", "The ______ floated gently down."] },
    { word: "chute", definition: "a sloping channel or slide", examples: ["The laundry fell down the ______.", "The children slid down the ______."] },
    { word: "champagne", definition: "a sparkling wine", examples: ["They drank ______ at the celebration.", "The bottle of ______ popped loudly."] }
  ],
  "Summer 1 Week 4": [
    { word: "league", definition: "a group of teams that compete against each other", examples: ["Our football team won the ______.", "The schools formed a reading ______."] },
    { word: "unique", definition: "one of a kind", examples: ["Her painting was ______.", "Every snowflake is ______."] },
    { word: "cheque", definition: "a written order for payment from a bank account", examples: ["She wrote a ______ to pay for the books.", "The shop accepted payment by ______."] },
    { word: "intrigue", definition: "to interest greatly or cause curiosity", examples: ["The story will ______ you.", "The strange noise began to ______ everyone."] },
    { word: "argue", definition: "to disagree or fight with words", examples: ["Please do not ______ with your friends.", "They started to ______ about the rules."] },
    { word: "tongue", definition: "the muscle in the mouth used for tasting and speaking", examples: ["He burned his ______ on the hot soup.", "The cat cleaned itself with its ______."] },
    { word: "mosque", definition: "a building where Muslims worship", examples: ["They prayed together at the ______.", "The ______ has a tall tower."] },
    { word: "rogue", definition: "a person or animal that behaves badly", examples: ["The ______ elephant ran into the village.", "He played a ______ in the story."] },
    { word: "dialogue", definition: "a conversation between two or more people", examples: ["The play had funny ______ between characters.", "Write some ______ for your story."] },
    { word: "plague", definition: "a serious disease that spreads quickly", examples: ["The ______ affected many towns.", "In history, the ______ caused great fear."] },
    { word: "antique", definition: "something very old and valuable", examples: ["The ______ chair was over 200 years old.", "They collect ______ jewellery."] },
    { word: "fatigue", definition: "a feeling of great tiredness", examples: ["He felt ______ after the long race.", "The soldiers marched on despite their ______."] },
    { word: "vague", definition: "not clear or certain", examples: ["His answer was very ______.", "She gave a ______ description of the place."] },
    { word: "analogue", definition: "something represented by a continuous physical quantity (like a clock with hands)", examples: ["The old watch is an ______ device.", "We learned how an ______ clock works."] },
    { word: "epilogue", definition: "the section at the end of a book or play", examples: ["The story ended with a short ______.", "The ______ explained what happened next."] },
    { word: "plaque", definition: "a flat, decorated piece to mark something important", examples: ["There is a ______ on the wall to remember the hero.", "The school put up a ______ to honour the founder."] },
    { word: "torque", definition: "a force that causes rotation", examples: ["The engine produces powerful ______.", "He measured the wheel's ______ with a tool."] },
    { word: "barbeque", definition: "a meal cooked outside over a fire", examples: ["We had sausages at the ______.", "The ______ was set up in the garden."] }
  ],
  "Summer 1 Week 5": [
    { word: "science", definition: "the study of the natural world", examples: ["We did a fun ______ experiment.", "She loves learning about ______."] },
    { word: "fascinate", definition: "to strongly interest or amaze", examples: ["Dinosaurs ______ many children.", "The magician will ______ the audience."] },
    { word: "disciplinary", definition: "relating to punishment for bad behaviour", examples: ["He faced ______ action for breaking the rules.", "The school had a ______ meeting."] },
    { word: "scent", definition: "a pleasant smell", examples: ["The flowers gave off a sweet ______.", "I love the ______ of fresh bread."] },
    { word: "ascend", definition: "to move upward", examples: ["We watched the balloon ______ into the sky.", "The hikers began to ______ the mountain."] },
    { word: "scene", definition: "a part of a play, movie, or story", examples: ["The first ______ shows the hero arriving.", "We acted out a funny ______ in drama class."] },
    { word: "crescent", definition: "a curved shape that is wide in the middle and pointed at the ends", examples: ["The moon was a thin ______ tonight.", "The flag showed a white ______."] },
    { word: "disciple", definition: "a follower or student of a leader", examples: ["The wise man taught his ______.", "Each ______ learned from the master."] },
    { word: "scissors", definition: "a tool for cutting", examples: ["Use ______ carefully when making crafts.", "I need the ______ to cut this paper."] },
    { word: "isosceles", definition: "having two sides of equal length (especially a triangle)", examples: ["An ______ triangle has two equal sides.", "We drew an ______ triangle in maths."] },
    { word: "discipline", definition: "self-control or training to follow rules", examples: ["Good ______ helps you succeed.", "The army demands strict ______."] },
    { word: "fascinating", definition: "extremely interesting", examples: ["The story about space was ______.", "He told a ______ tale about dragons."] },
    { word: "muscle", definition: "a body part that helps you move", examples: ["Exercise makes your ______ stronger.", "I pulled a ______ in my arm."] },
    { word: "muscles", definition: "body parts that help movement (plural)", examples: ["Strong ______ help athletes run faster.", "You use your ______ when you lift things."] },
    { word: "scenario", definition: "a situation or sequence of events", examples: ["Imagine a ______ where you are the hero.", "Let's act out a new ______."] },
    { word: "scientific", definition: "related to science", examples: ["We used a ______ method in the experiment.", "The museum had a ______ display."] },
    { word: "susceptible", definition: "easily affected by something", examples: ["Young children are ______ to colds.", "Plants are ______ to frost damage."] },
    { word: "transcend", definition: "to go beyond or rise above", examples: ["She wanted to ______ her limits.", "A great leader can ______ difficulties."] }
  ],
  "Summer 1 Week 6": [
    { word: "vein", definition: "a tube that carries blood through the body", examples: ["The nurse found the ______ easily.", "Blood flows through a ______."] },
    { word: "neighbour", definition: "a person who lives nearby", examples: ["Our ______ helped us carry the shopping.", "We invited our ______ to the party."] },
    { word: "sleigh", definition: "a vehicle for travelling over snow, usually pulled by horses or reindeer", examples: ["Santa rides a ______ at Christmas.", "The children rode on a wooden ______."] },
    { word: "money", definition: "coins or notes used to buy things", examples: ["I saved up my ______ for a new toy.", "He counted his ______ carefully."] },
    { word: "neigh", definition: "the sound a horse makes", examples: ["The horse gave a loud ______.", "We heard a ______ from the stable."] },
    { word: "weigh", definition: "to find out how heavy something is", examples: ["Let's ______ the apples.", "The bag did not ______ much."] },
    { word: "they", definition: "used to refer to more than one person", examples: ["______ are going to the park.", "______ said it was fun."] },
    { word: "weight", definition: "how heavy something is", examples: ["The box had a lot of ______.", "She could lift a heavy ______."] },
    { word: "neighbourhood", definition: "an area where people live", examples: ["Our ______ is very friendly.", "There is a park in our ______."] },
    { word: "freight", definition: "goods carried by ship, train, or lorry", examples: ["The train was carrying heavy ______.", "The ______ ship arrived at the port."] },
    { word: "eight", definition: "the number 8", examples: ["I have ______ crayons.", "We found ______ seashells on the beach."] },
    { word: "obey", definition: "to do what you are told", examples: ["You must ______ the rules.", "The dog will ______ its owner."] },
    { word: "bobsleigh", definition: "a fast sled used in races down an icy track", examples: ["They raced down the track in a ______.", "The team won the ______ event."] },
    { word: "reign", definition: "the time a king or queen rules", examples: ["The Queen's ______ lasted many years.", "During his ______, peace was kept."] },
    { word: "beige", definition: "a pale brown colour", examples: ["She wore a ______ coat.", "The sofa was a soft shade of ______."] },
    { word: "obeying", definition: "doing what you are told", examples: ["______ the rules is important.", "She is good at ______ her teachers."] },
    { word: "weighing", definition: "finding out how heavy something is", examples: ["He is ______ the potatoes.", "We are ______ the puppy at the vet."] },
    { word: "eighty", definition: "the number 80", examples: ["Grandma turned ______ today.", "There were ______ people at the party."] }
  ],
  "Summer 1 Week 7": [
    { word: "because", definition: "for the reason that", examples: ["I stayed home ______ it was raining.", "She was happy ______ she won the race."] },
    { word: "extreme", definition: "very great or strong", examples: ["The desert has ______ temperatures.", "He showed ______ bravery."] },
    { word: "scheme", definition: "a plan or idea for doing something", examples: ["They created a clever ______.", "The school has a ______ for recycling."] },
    { word: "cheque", definition: "a written order for payment from a bank account", examples: ["She wrote a ______ for the books.", "He paid the bill with a ______."] },
    { word: "science", definition: "the study of the natural world", examples: ["We did a fun ______ experiment.", "She enjoys learning about ______."] },
    { word: "were", definition: "past tense of are", examples: ["We ______ at the park yesterday.", "They ______ very tired after the match."] },
    { word: "forward", definition: "towards the front", examples: ["Step ______ when your name is called.", "The dog ran ______ quickly."] },
    { word: "echo", definition: "a sound that repeats after bouncing off a surface", examples: ["Our voices made an ______ in the tunnel.", "The shout produced a loud ______."] },
    { word: "rogue", definition: "a person or animal that behaves badly", examples: ["The ______ lion escaped from the zoo.", "He played a ______ in the play."] },
    { word: "scene", definition: "a part of a play, movie, or story", examples: ["The first ______ shows the castle.", "We practised the next ______ for the play."] },
    { word: "beautiful", definition: "pleasing the senses or mind aesthetically", examples: ["The sunset was ______.", "She wore a ______ dress."] },
    { word: "famous", definition: "known by many people", examples: ["He is a ______ actor.", "London is ______ for its history."] },
    { word: "chalet", definition: "a wooden house, often found in the mountains", examples: ["We stayed in a cosy ______.", "The ______ was covered in snow."] },
    { word: "vague", definition: "not clear or certain", examples: ["His answer was very ______.", "She gave a ______ explanation."] },
    { word: "discipline", definition: "self-control or training to follow rules", examples: ["Good ______ is important at school.", "The soldiers showed strict ______."] },
    { word: "vein", definition: "a tube that carries blood through the body", examples: ["Blood travels through a ______.", "The nurse found the ______ quickly."] },
    { word: "neighbour", definition: "a person who lives nearby", examples: ["Our ______ brought us some cake.", "We waved to the ______ across the street."] },
    { word: "sleigh", definition: "a vehicle for travelling over snow, usually pulled by horses or reindeer", examples: ["The children rode a ______ down the hill.", "The ______ glided over the snow."] }
  ]
};
let currentList = null;
let quizWords = [];
let wrongWords = [];
let round = 1;
let currentIndex = 0;
let mustTypeCorrect = false;

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-GB';
  window.speechSynthesis.speak(utterance);
}

function goHome() {
  document.getElementById('root').innerHTML = `
    <h1>Choose a List</h1>
    ${Object.keys(wordLists).map(
      (list) => `<button onclick="selectList('${list}')">${list}</button>`
    ).join('')}
    <div id="content"></div>
  `;
}

function goBack() {
  selectList(currentList);
}

function selectList(listName) {
  currentList = listName;
  document.getElementById('root').innerHTML = `
    <h1>${listName}</h1>
    <button onclick="startQuiz()">Start Quiz</button>
    <button onclick="viewWords()">View Words</button>
    <button onclick="goHome()">Back to Main Menu</button>
    <div id="content"></div>
  `;
}

function viewWords() {
  const words = wordLists[currentList];
  document.getElementById('content').innerHTML = `
    <h2>${currentList} - Words</h2>
    ${words.map(w => `
      <div class="card">
        <h3>${w.word}</h3>
        <p><strong>${w.definition}</strong></p>
        ${w.examples.map(e => `<div><em>${e}</em></div>`).join('')}
      </div>
    `).join('')}
    <button onclick="goBack()">Back</button>
  `;
}

function startQuiz() {
  quizWords = [...wordLists[currentList]];
  wrongWords = [];
  round = 1;
  currentIndex = 0;
  showQuiz();
}

function showQuiz() {
  if (currentIndex >= quizWords.length) {
    if (wrongWords.length) {
      quizWords = [...wrongWords];
      wrongWords = [];
      round++;
      currentIndex = 0;
      document.getElementById('content').innerHTML = `
        <h2>Round ${round} begins!</h2>
        <button onclick="showQuiz()">Start</button>`;
    } else {
      document.getElementById('content').innerHTML = `
        <h2>🎉 Congratulations! You completed the test!</h2>
        <button onclick="goHome()">Home</button>`;
    }
    return;
  }

  const word = quizWords[currentIndex];
  document.getElementById('content').innerHTML = `
    <h2>${currentList} - Round ${round}</h2>
    <div class="card">
      <p><strong>${word.definition}</strong></p>
      ${word.examples.map(e => `<div><em>${e}</em></div>`).join('')}
      <br>
      <button onclick="speak('${word.word}')">Hear Word</button>
      <br><br>
      <input id="userInput" type="text" placeholder="Type the word" onkeydown="if(event.key==='Enter') checkAnswer()">
      <div id="message" style="margin-top:10px; font-weight:bold;"></div>
      <br>
      <button onclick="checkAnswer()">Check</button>
    </div>
  `;

  setTimeout(() => {
    const input = document.getElementById('userInput');
    if (input) input.focus();
  }, 50);

  speak(word.word);
}

function checkAnswer() {
  const inputField = document.getElementById('userInput');
  // Improved normalization and apostrophe handling
  const input = inputField.value.trim().toLowerCase()
    .normalize("NFKD")
    .replace(/[’‘‛ʻ´`]/g, "'");  // Normalize all types of apostrophes
  const correct = quizWords[currentIndex].word.toLowerCase();
  const messageDiv = document.getElementById('message');

  if (mustTypeCorrect) {
    if (input === correct) {
      mustTypeCorrect = false;
      messageDiv.textContent = "✅ Correct!";
      currentIndex++;
      setTimeout(showQuiz, 1000);
    } else {
      messageDiv.textContent = `❌ Please type the correct spelling: ${quizWords[currentIndex].word}`;
      setTimeout(() => {
        inputField.value = '';
        inputField.focus();
        messageDiv.textContent = '';
      }, 1000);
    }
  } else {
    if (input === correct) {
      messageDiv.textContent = "✅ Correct!";
      currentIndex++;
      setTimeout(showQuiz, 1000);
    } else {
      mustTypeCorrect = true;
      wrongWords.push(quizWords[currentIndex]);
      messageDiv.textContent = `❌ Incorrect. The correct spelling is: ${quizWords[currentIndex].word}`;
      setTimeout(() => {
        inputField.value = '';
        inputField.placeholder = quizWords[currentIndex].word;
        inputField.focus();
      }, 1000);
    }
  }
}

goHome();
