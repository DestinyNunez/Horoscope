const submitBtn = document.getElementById('submitBtn');
submitBtn.onclick = submit;

function submit() {
  const month = document.querySelector('.month').value;
  const day = parseInt(document.querySelector('.day').value);

  //Aquarius SZN
  if (month === 'January' && day >= 20 || month === 'Feburary' && day <= 18) {
    document.querySelector('#results').innerText = 'It isn\'t always pleasant to have to question oneself, Aquarius, but this is the main objective of today\'s planetary energies - to launch you into new adventures. So take advantage of the configuration to look inside and find the source of some of your setbacks. This isn\'t an easy exercise, to be sure, but it will do you an enormous amount of good. Just be honest with yourself'

    document.querySelector('img').src = 'assets/a.jpeg'

  }

  //Pisces SZN
  else if (month === 'Feburary' && day >= 19 || month === 'March' && day <= 20) {

    document.querySelector('#results').innerText = 'Today isn\'t a day for meditation, Pisces. The planetary energies are asking you to step outside of yourself and get back into the world again! You\'ve been doing an awful lot of thinking about your image recently, and now you\'re going to have to test out how the new and improved you operates in your daily life. You can expect some pleasant feedback and truly lasting changes.'

    document.querySelector('img').src = 'assets/p.jpeg'
  }

  //Aries SZN
  else if (month === 'March' && day >= 21 || month === 'April' && day <= 19) {

    document.querySelector('#results').innerText = 'If you have grievances about your love life, Aries, today is the day to speak up. Indeed, today requires only total honesty and forthrightness in all areas. You can expect to confront the other, whether it\'s your mate or co-worker, on the basis of truth and righteousness. Rest assured you\'ll command his or her attention! Be careful that the weight of your words doesn\'t surpass that of your thoughts.'

    document.querySelector('img').src = 'assets/ar.jpeg'
  }

  //Taurus SZN
  else if (month === 'April' && day >= 20 || month === 'May' && day <= 20) {

    document.querySelector('#results').innerText = 'You\'re you thinking of switching careers or traveling to the other side of the world, Or perhaps you just want to pull a "Greta Garbo" and stay at home alone with the shades drawn tight. A series of small incidents at work is likely to inspire you with the most outlandish of ideas. It might just be that you sense your inner need for a change of scene.'

    document.querySelector('img').src = 'assets/t.jpeg'
  }

  // Gemeni SZN
  else if (month === 'May' && day >= 21 || month === 'June' && day <= 20) {

    document.querySelector('#results').innerText = 'You\'re likely to find people somewhat irritating today, Gemini. It\'s as though nothing is good enough, and nobody seems to know exactly what he or she wants. You\'ll reign supreme within this maze of overt conflict and dissatisfaction. You might even be asked to step in and restore order. If the conflict is domestic, go ahead. But tread carefully if you\'re asked to be the sheriff at the office.'

    document.querySelector('img').src = 'assets/gem.jpeg'
  }

  //Cancer SZN
  else if (month === 'June' && day >= 21 || month === 'July' && day <= 22) {

    document.querySelector('#results').innerText = 'When you woke up this morning, you may have felt an oppressive mood hanging in the air. Unfortunately, that haze of misunderstanding and conflict is likely to last all day. However, it makes this an ideal time to speak up about anything that\'s bothering you! Don\'t be shy about going on the warpath today. If you don\'t, Cancer, you\'re likely to be the target of a surprise attack.'

    document.querySelector('img').src = 'assets/can.jpeg'
  }

  // Leo SZN
  else if (month === 'July' && day >= 23 || month === 'August' && day <= 22) {

    document.querySelector('#results').innerText = 'The mood you\'re in today is the stuff of which memorable encounters are made. You\'ll be wary at first, perhaps even somewhat hostile, to anyone who dares intrude on your freedom. Then suddenly you\'ll realize that this person is someone special, intriguing, and definitely out of the ordinary. Finally, Leo, you\'ll realize that the qualities he or she offers just happen to be those you need the most right now.'

    document.querySelector('img').src = 'assets/leo.jpeg'
  }

  //Virgo SZN
  else if (month === 'August' && day >= 23 || month === 'September' && day <= 22) {

    document.querySelector('#results').innerText = 'More than ever before, you\'ll feel as though it\'s time to take matters into your own hands and build your own career future. You\'re fed up with living on hope and putting off your happiness until tomorrow. Your determination will be so strong that you could even surprise yourself. Tomorrow you\'ll refine your approach and make it more concrete. Today is the first day of a new life for you, Virgo.'

    document.querySelector('img').src = 'assets/virgo.jpeg'
  }

  //Libra SZN
  else if (month === 'September' && day >= 23 || month === 'October' && day <= 22) {

    document.querySelector('#results').innerText = 'This is the ideal moment to address once and for all the questions that have been on your mind for the last three weeks, Libra. Pay particular attention to questions that touch on your sentimental side. If you\'re currently involved in unsatisfactory relationships, don\'t be afraid to leave them behind. And if you\'re fretting about a request you made that has yet to be answered, let it go. No response is forthcoming.'

    document.querySelector('img').src = 'assets/libra.jpeg'
  }

  //Scorpio SZN
  else if (month === 'October' && day >= 23 || month === 'November' && day <= 21) {

    document.querySelector('#results').innerText = 'Like your compatriots, Scorpio, something is coming to an end concerning the lack of confidence you have in yourself. You have been hesitant to stand in the spotlight for quite a while now, feeling you aren\'t quite ready. Well, no more excuses! Ready or not, you\'re going to have to push forward. The only thing you risk losing is your pride, and that, Scorpio, is your most resilient asset.'

    document.querySelector('img').src = 'assets/scorpio.jpeg'
  }

  //Sagitarius SZN
  else if (month === 'November' && day >= 22 || month === 'December' && day <= 21) {

    document.querySelector('#results').innerText = 'It\'s possible that the last few weeks have allowed you to gain a little clarity on certain questions you may have about your vocation, Sagittarius. You might even be a little clearer about your feelings concerning what your destiny might be. The planetary energy makes this a good time to stop thinking about such questions and let your life take over. You are well prepared for this kind of thing!'

    document.querySelector('img').src = 'assets/sag.jpeg'
  }

  //Capricorn SZN
  else if (month === 'December' && day >= 22 || month === 'January' && day <= 19) {

    document.querySelector('#results').innerText = 'These past three weeks were rather good for your equilibrium, Capricorn. It was just a matter of getting a bit more involved in life than is usual for you, and showing what you\'re capable of. It\'s likely you had a mixture of successes and setbacks, but on the whole, improvements have been steady. You might have noticed that something about you needed improvement, but isn\'t that true for everyone?'

    document.querySelector('img').src = 'assets/cap.jpeg'

  } else {
    document.querySelector('#results').innerText = 'you\'re wild!';

  }
}
