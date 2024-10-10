const audioFiles = [
  { file: "assets/audio/fake/139.wav", isReal: false },
  { file: "assets/audio/real/30720.wav", isReal: true },
  { file: "assets/audio/real/30880.wav", isReal: true },
  { file: "assets/audio/real/30882.wav", isReal: true },
  { file: "assets/audio/real/31114.wav", isReal: true },
  { file: "assets/audio/real/31116.wav", isReal: true },
  { file: "assets/audio/real/31181.wav", isReal: true },
  { file: "assets/audio/real/31244.wav", isReal: true },
  { file: "assets/audio/real/31284.wav", isReal: true },
  { file: "assets/audio/fake/403.wav", isReal: false },
  { file: "assets/audio/fake/547.wav", isReal: false },
  { file: "assets/audio/fake/565.wav", isReal: false },
  { file: "assets/audio/fake/578.wav", isReal: false },
  { file: "assets/audio/fake/1021.wav", isReal: false },
  { file: "assets/audio/fake/2006.wav", isReal: false },
  { file: "assets/audio/fake/2143.wav", isReal: false },
  { file: "assets/audio/fake/3383.wav", isReal: false },
  { file: "assets/audio/fake/3833.wav", isReal: false },
  { file: "assets/audio/fake/4122.wav", isReal: false },
  { file: "assets/audio/fake/4280.wav", isReal: false },
  { file: "assets/audio/fake/4295.wav", isReal: false },
  { file: "assets/audio/fake/4320.wav", isReal: false },
  { file: "assets/audio/fake/4442.wav", isReal: false },
  { file: "assets/audio/real/1080.wav", isReal: true },
  { file: "assets/audio/real/1104.wav", isReal: true },
  { file: "assets/audio/real/1206.wav", isReal: true },
  { file: "assets/audio/real/1210.wav", isReal: true },
  { file: "assets/audio/real/1277.wav", isReal: true },
  { file: "assets/audio/real/2105.wav", isReal: true },
  { file: "assets/audio/real/2113.wav", isReal: true },
  { file: "assets/audio/real/2138.wav", isReal: true },
  { file: "assets/audio/real/2185.wav", isReal: true },
  { file: "assets/audio/real/2343.wav", isReal: true },
  { file: "assets/audio/real/2444.wav", isReal: true },
  { file: "assets/audio/fake/4570.wav", isReal: false },
  { file: "assets/audio/fake/19723.wav", isReal: false },
  { file: "assets/audio/fake/19698.wav", isReal: false },
  { file: "assets/audio/fake/19734.wav", isReal: false },
  { file: "assets/audio/fake/19770.wav", isReal: false },
  { file: "assets/audio/real/314.wav", isReal: true },
  { file: "assets/audio/real/436.wav", isReal: true },
  { file: "assets/audio/real/564.wav", isReal: true },
  { file: "assets/audio/real/568.wav", isReal: true },
  { file: "assets/audio/real/707.wav", isReal: true },
  { file: "assets/audio/fake/19777.wav", isReal: false },
  { file: "assets/audio/fake/19909.wav", isReal: false },
  { file: "assets/audio/fake/19925.wav", isReal: false },
  { file: "assets/audio/fake/19942.wav", isReal: false },
  { file: "assets/audio/real/82.wav", isReal: true },
  { file: "assets/audio/fake/31022.wav", isReal: false },
  { file: "assets/audio/fake/31032.wav", isReal: false },
  { file: "assets/audio/fake/31078.wav", isReal: false },
  { file: "assets/audio/fake/31187.wav", isReal: false },
  { file: "assets/audio/fake/31245.wav", isReal: false },
  { file: "assets/audio/fake/31304.wav", isReal: false },
  { file: "assets/audio/fake/31307.wav", isReal: false },
  { file: "assets/audio/fake/31326.wav", isReal: false },
  { file: "assets/audio/fake/31353.wav", isReal: false },
  { file: "assets/audio/fake/31483.wav", isReal: false },
  { file: "assets/audio/real/765.wav", isReal: true },
  { file: "assets/audio/real/885.wav", isReal: true },
  { file: "assets/audio/real/2491.wav", isReal: true },
  { file: "assets/audio/real/2566.wav", isReal: true },
  { file: "assets/audio/real/2682.wav", isReal: true },
  { file: "assets/audio/real/3959.wav", isReal: true },
  { file: "assets/audio/real/4050.wav", isReal: true },
  { file: "assets/audio/real/4249.wav", isReal: true },
  { file: "assets/audio/real/4304.wav", isReal: true },
  { file: "assets/audio/real/4443.wav", isReal: true },
  { file: "assets/audio/real/4468.wav", isReal: true },
  { file: "assets/audio/real/19930.wav", isReal: true },
  { file: "assets/audio/real/19969.wav", isReal: true },
  { file: "assets/audio/real/20066.wav", isReal: true },
  { file: "assets/audio/real/20203.wav", isReal: true },
  { file: "assets/audio/real/20239.wav", isReal: true },
  { file: "assets/audio/real/20351.wav", isReal: true },
  { file: "assets/audio/real/20402.wav", isReal: true },
  { file: "assets/audio/fake/2221.wav", isReal: false },
  { file: "assets/audio/fake/2235.wav", isReal: false },
  { file: "assets/audio/fake/2249.wav", isReal: false },
  { file: "assets/audio/fake/2432.wav", isReal: false },
  { file: "assets/audio/fake/2437.wav", isReal: false },
  { file: "assets/audio/fake/2477.wav", isReal: false },
  { file: "assets/audio/fake/2636.wav", isReal: false },
  { file: "assets/audio/fake/2701.wav", isReal: false },
  { file: "assets/audio/fake/2820.wav", isReal: false },
  { file: "assets/audio/fake/3127.wav", isReal: false },
  { file: "assets/audio/real/20449.wav", isReal: true },
  { file: "assets/audio/real/20546.wav", isReal: true },
  { file: "assets/audio/real/30475.wav", isReal: true },
  { file: "assets/audio/real/30603.wav", isReal: true },
  { file: "assets/audio/real/30633.wav", isReal: true },
  { file: "assets/audio/real/30640.wav", isReal: true },
  { file: "assets/audio/fake/19978.wav", isReal: false },
  { file: "assets/audio/fake/20003.wav", isReal: false },
  { file: "assets/audio/fake/20305.wav", isReal: false },
  { file: "assets/audio/fake/30584.wav", isReal: false },
  { file: "assets/audio/fake/30597.wav", isReal: false },
  { file: "assets/audio/real/2694.wav", isReal: true },
  { file: "assets/audio/real/2933.wav", isReal: true },
  { file: "assets/audio/real/2987.wav", isReal: true },
  { file: "assets/audio/real/2989.wav", isReal: true },
  { file: "assets/audio/real/3003.wav", isReal: true },
  { file: "assets/audio/real/3232.wav", isReal: true },
  { file: "assets/audio/real/3282.wav", isReal: true },
  { file: "assets/audio/real/3545.wav", isReal: true },
  { file: "assets/audio/real/3578.wav", isReal: true },
  { file: "assets/audio/real/3636.wav", isReal: true },
  { file: "assets/audio/real/3647.wav", isReal: true },
  { file: "assets/audio/real/3841.wav", isReal: true },
  { file: "assets/audio/fake/30642.wav", isReal: false },
  { file: "assets/audio/fake/30699.wav", isReal: false },
  { file: "assets/audio/fake/30755.wav", isReal: false },
  { file: "assets/audio/fake/30873.wav", isReal: false },
  { file: "assets/audio/fake/30921.wav", isReal: false },
  { file: "assets/audio/fake/30973.wav", isReal: false },
  { file: "assets/audio/real/30656.wav", isReal: true },
  { file: "assets/audio/real/31387.wav", isReal: true },
  { file: "assets/audio/real/31446.wav", isReal: true },
];

// Funkcija za nasumično biranje audio fajla
function getRandomAudio() {
  const randomIndex = Math.floor(Math.random() * audioFiles.length);
  return audioFiles[randomIndex];
}

let wavesurfer = null;
let correctAnswers = 0;
let totalQuestions = 9999;
let round = 1;
let randomAudio = null;

const startBtn = document.querySelector("#start-quiz");

document.getElementById("start-quiz").addEventListener("click", function () {
  randomAudio = getRandomAudio();
  // console.log("Current audio source:", randomAudio.file);

  startBtn.style.display = "none";

  const audioLoader = document.getElementById("audio-loader");
  if (audioLoader) {
    audioLoader.style.display = "block";
  }

  if (wavesurfer) {
    wavesurfer.destroy();
  }

  wavesurfer = WaveSurfer.create({
    container: "#audio-player",
    height: 100,
    width: 295,
    splitChannels: false,
    normalize: false,
    waveColor: "#bc05ff",
    progressColor: "#ff7fc2",
    cursorColor: "#ddd5e9",
    cursorWidth: 2,
    barWidth: 2,
    barGap: 1,
    barRadius: 1,
    barHeight: 1,
    minPxPerSec: 1,
    fillParent: true,
    url: randomAudio.file,
    autoplay: true,
    interact: true,
    dragToSeek: true,
    hideScrollbar: true,
    audioRate: 1,
    autoScroll: true,
    autoCenter: true,
    sampleRate: 8000,
  });

  wavesurfer.on("loading", function (progress) {});

  wavesurfer.on("ready", function () {
    if (audioLoader) {
      audioLoader.style.display = "none";
    }
  });

  wavesurfer.on("finish", function () {
    document.getElementById("choices").style.display = "block";
  });
});

function showShameDetection(isReal, userChoice) {
  document.getElementById("choices").style.display = "none";

  const shameDetection = document.getElementById("shame-detection");
  if (shameDetection) {
    shameDetection.style.display = "block";
  }

  setTimeout(function () {
    if (shameDetection) {
      shameDetection.style.display = "none";
    }

    const resultCircle = document.getElementById("result-circle");
    const resultDisplay = document.getElementById("result-display");
    if (resultDisplay) {
      resultDisplay.style.display = "block";
    }

    if (resultCircle) {
      resultCircle.className = "";
      if (isReal === userChoice) {
        resultCircle.classList.add("green");
        correctAnswers++;
      } else {
        resultCircle.classList.add("red");
      }
    }

    const userPrediction = document.getElementById("user-prediction");
    if (userPrediction) {
      userPrediction.textContent = userChoice ? "Real" : "Fake";
    }

    const truthLabel = document.getElementById("truth-label");
    if (truthLabel) {
      truthLabel.textContent = isReal ? "Real" : "Fake";
    }

    const roundNumber = document.getElementById("round-number");
    if (roundNumber) {
      roundNumber.textContent = round;
    }

    const userPerformance = document.getElementById("user-performance");
    if (userPerformance) {
      userPerformance.textContent = `${correctAnswers}/${round}`;
    }

    const shamaPerformance = document.getElementById("shama-performance");
    if (shamaPerformance) {
      shamaPerformance.textContent = `${round}/${round}`;
    }

    if (round < totalQuestions) {
      document.getElementById("next-btn").style.display = "block";
    } else {
      showFinalResults();
    }
  }, 1000);
}

document.getElementById("real-btn").addEventListener("click", function () {
  showShameDetection(randomAudio.isReal, true);
});

document.getElementById("fake-btn").addEventListener("click", function () {
  showShameDetection(randomAudio.isReal, false);
});

document.getElementById("next-btn").addEventListener("click", function () {
  document.getElementById("result-display").style.display = "none";
  document.getElementById("choices").style.display = "none";
  document.getElementById("next-btn").style.display = "none";

  round++;

  const audioLoader = document.getElementById("audio-loader");
  if (audioLoader) {
    audioLoader.style.display = "block";
  }

  randomAudio = getRandomAudio();
  // console.log("Next audio source:", randomAudio.file);
  wavesurfer.load(randomAudio.file);
});

function showFinalResults() {
  document.getElementById("choices").style.display = "none";
  document.getElementById("result-display").style.display = "none";
  document.getElementById("next-btn").style.display = "none";

  const finalResult = document.getElementById("final-result");
  finalResult.innerHTML = `Your final score is: ${correctAnswers} / ${totalQuestions}`;
  finalResult.style.display = "block"; // Prikazujemo konačan rezultat

  document.getElementById("restart-btn").style.display = "block";
}

document.getElementById("restart-btn").addEventListener("click", function () {
  round = 1;
  correctAnswers = 0;

  document.getElementById("final-result").style.display = "none";
  document.getElementById("restart-btn").style.display = "none";

  randomAudio = getRandomAudio();
  console.log("Restarting quiz with audio source:", randomAudio.file);

  if (wavesurfer) {
    wavesurfer.load(randomAudio.file);
  } else {
    wavesurfer = WaveSurfer.create({
      container: "#audio-player",
      height: 100,
      width: 295,
      splitChannels: false,
      normalize: false,
      waveColor: "#bc05ff",
      progressColor: "#ff7fc2",
      cursorColor: "#ddd5e9",
      cursorWidth: 2,
      barWidth: 2,
      barGap: 1,
      barRadius: 1,
      barHeight: 1,
      minPxPerSec: 1,
      fillParent: true,
      url: randomAudio.file,
      autoplay: true,
      interact: true,
      dragToSeek: true,
      hideScrollbar: true,
      audioRate: 1,
      autoScroll: true,
      autoCenter: true,
      sampleRate: 8000,
    });
  }

  const audioLoader = document.getElementById("audio-loader");
  if (audioLoader) {
    audioLoader.style.display = "block";
  }

  wavesurfer.on("ready", function () {
    if (audioLoader) {
      audioLoader.style.display = "none";
    }
  });
});
