// Chess.com "Neo"-Inspired Vectors (Dynamically Themed via CSS Variables)
const PIECE_SVGS = {
  wP: `<svg viewBox="0 0 45 45"><path d="M22.5 9.5c-2.3 0-4.2 1.85-4.2 4.15 0 .95.33 1.82.88 2.52-1.85 1.15-3.08 3.15-3.08 5.45 0 2.1.98 3.95 2.52 5.15-3.35 1.18-7.62 5.45-7.62 12.73h23c0-7.28-4.27-11.55-7.62-12.73 1.54-1.2 2.52-3.05 2.52-5.15 0-2.3-1.23-4.3-3.08-5.45.55-.7.88-1.57.88-2.52 0-2.3-1.9-4.15-4.2-4.15z" fill="url(#wPieceGrad)" stroke="var(--w-piece-stroke)" stroke-width="1.8" stroke-linejoin="round"/><path d="M13 36.5h19" stroke="var(--w-piece-stroke)" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  wR: `<svg viewBox="0 0 45 45"><g fill="url(#wPieceGrad)" stroke="var(--w-piece-stroke)" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><path d="M10 39h25v-3.2H10V39zM12.8 35.8v-3.5h19.4v3.5H12.8zM11.5 14.5V9.5h4.2v2.3h4.6V9.5h4.4v2.3h4.6V9.5h4.2v5"/><path d="M33.5 14.5l-2.8 2.8H14.3l-2.8-2.8"/><path d="M30.7 17.3v12.2H14.3V17.3"/><path d="M30.7 29.5l1.5 2.8H12.8l1.5-2.8"/></g></svg>`,
  wN: `<svg viewBox="0 0 45 45"><g fill="url(#wPieceGrad)" stroke="var(--w-piece-stroke)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10.5c10.2 1 16 7.8 15.5 28.5H15c0-8.8 9.5-6.5 7.8-20.5"/><path d="M23.8 18.2c.38 2.8-5.3 7.1-7.8 8.8-2.9 1.9-2.8 4.2-4.9 3.9-1-.9 1.3-2.9 0-2.9-1 0 .2 1.2-1 1.9-1 0-3.9.9-3.9-3.9 0-2 5.8-11.6 5.8-11.6s1.8-1.9 1.9-3.4c-.7-.95-.5-1.9-.5-2.9 1-1 2.9 2.4 2.9 2.4h2s.75-1.9 2.4-2.9c1 0 1 2.9 1 2.9"/><circle cx="9.8" cy="25.2" r="0.8" fill="var(--w-piece-stroke)"/><circle cx="15.2" cy="15.8" r="1.1" fill="var(--w-piece-stroke)"/><path d="M12 39h26v-2.8H12V39z"/></g></svg>`,
  wB: `<svg viewBox="0 0 45 45"><g fill="url(#wPieceGrad)" stroke="var(--w-piece-stroke)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 36.5c3.4-.9 10.1.4 12.5-1.8 2.4 2.2 9.1.9 12.5 1.8 0 0 1.6.5 2.8 1.9-.7.9-1.6.9-2.8.5-3.4-.9-10.1.4-12.5-1-2.4 1.4-9.1.1-12.5 1-1.2.4-2.1.4-2.8-.5 1.2-1.4 2.8-1.9 2.8-1.9z"/><path d="M15.2 32.2c2.5 2.3 12.1 2.3 14.6 0 .5-1.4 0-2 0-2 0-2.4-2.4-3.8-2.4-3.8 5.3-1.5 5.8-11.1-4.9-15-10.7 3.9-10.2 13.5-4.9 15 0 0-2.4 1.4-2.4 3.8 0 0-.5.6 0 2z"/><circle cx="22.5" cy="8.2" r="2.4"/><path d="M17.5 26.2h10M15.5 29.8h14M22.5 15.8v4.8M20.2 18.2h4.6" fill="none"/></g></svg>`,
  wQ: `<svg viewBox="0 0 45 45"><g fill="url(#wPieceGrad)" stroke="var(--w-piece-stroke)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6.5" cy="12.5" r="2.1"/><circle cx="14.2" cy="9.5" r="2.1"/><circle cx="22.5" cy="8.2" r="2.1"/><circle cx="30.8" cy="9.5" r="2.1"/><circle cx="38.5" cy="12.5" r="2.1"/><path d="M9.5 26.5c8.2-1.4 17.8-1.4 26 0l2-11.8-6.8 10.6V11.5l-5.2 13-3-14.2-3 14.2-5.2-13v13.8L7.5 14.7l2 11.8z"/><path d="M9.5 26.5c0 1.9 1.5 1.9 2.4 3.8 1 1.4 1 1 .5 3.3-1.4 1-1.4 2.4-1.4 2.4-1.4 1.4.5 2.4.5 2.4 6.2 1 15.8 1 22 0 0 0 1.4-1 0-2.4 0 0 .5-1.4-1-2.4-.5-2.3-.5-1.9.5-3.3.9-1.9 2.4-1.9 2.4-3.8-8.2-1.4-17.8-1.4-26 0z"/><path d="M12 30.2c3.5-.9 17.5-.9 21 0M12.5 33.6c5.8-.9 14.2-.9 20 0" fill="none"/></g></svg>`,
  wK: `<svg viewBox="0 0 45 45"><g fill="url(#wPieceGrad)" stroke="var(--w-piece-stroke)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.6V6M20 8.2h5"/><path d="M22.5 25s4.4-7.2 2.9-10.1c0 0-1-2.4-2.9-2.4s-2.9 2.4-2.9 2.4c-1.5 2.9 2.9 10.1 2.9 10.1"/><path d="M11.8 37.2c5.3 3.3 16.1 3.3 21.4 0v-6.8s8.8-4.4 5.8-10.2c-3.9-6.3-13.2-3.4-15.6 3.9V27v-3.4c-3.4-7.3-12.7-10.2-15.6-3.9-3 5.8 4.8 9.8 4.8 9.8v7.7z"/><path d="M11.8 30.4c5.3-2.8 16.1-2.8 21.4 0m-21.4 3.4c5.3-2.8 16.1-2.8 21.4 0" fill="none"/></g></svg>`,
  bP: `<svg viewBox="0 0 45 45"><path d="M22.5 9.5c-2.3 0-4.2 1.85-4.2 4.15 0 .95.33 1.82.88 2.52-1.85 1.15-3.08 3.15-3.08 5.45 0 2.1.98 3.95 2.52 5.15-3.35 1.18-7.62 5.45-7.62 12.73h23c0-7.28-4.27-11.55-7.62-12.73 1.54-1.2 2.52-3.05 2.52-5.15 0-2.3-1.23-4.3-3.08-5.45.55-.7.88-1.57.88-2.52 0-2.3-1.9-4.15-4.2-4.15z" fill="url(#bPieceGrad)" stroke="var(--b-piece-stroke)" stroke-width="1.8" stroke-linejoin="round"/><path d="M13.5 36.2h18" stroke="var(--b-piece-detail)" stroke-width="1.3" stroke-linecap="round"/></svg>`,
  bR: `<svg viewBox="0 0 45 45"><g fill="url(#bPieceGrad)" stroke="var(--b-piece-stroke)" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><path d="M10 39h25v-3.2H10V39zM12.8 35.8v-3.5h19.4v3.5H12.8zM11.5 14.5V9.5h4.2v2.3h4.6V9.5h4.4v2.3h4.6V9.5h4.2v5"/><path d="M33.5 14.5l-2.8 2.8H14.3l-2.8-2.8"/><path d="M30.7 17.3v12.2H14.3V17.3"/><path d="M30.7 29.5l1.5 2.8H12.8l1.5-2.8"/><path d="M13 35.5h19M14.5 29.5h16M14.5 17.3h16" fill="none" stroke="var(--b-piece-detail)" stroke-width="1.2"/></g></svg>`,
  bN: `<svg viewBox="0 0 45 45"><g fill="url(#bPieceGrad)" stroke="var(--b-piece-stroke)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10.5c10.2 1 16 7.8 15.5 28.5H15c0-8.8 9.5-6.5 7.8-20.5"/><path d="M23.8 18.2c.38 2.8-5.3 7.1-7.8 8.8-2.9 1.9-2.8 4.2-4.9 3.9-1-.9 1.3-2.9 0-2.9-1 0 .2 1.2-1 1.9-1 0-3.9.9-3.9-3.9 0-2 5.8-11.6 5.8-11.6s1.8-1.9 1.9-3.4c-.7-.95-.5-1.9-.5-2.9 1-1 2.9 2.4 2.9 2.4h2s.75-1.9 2.4-2.9c1 0 1 2.9 1 2.9"/><circle cx="9.8" cy="25.2" r="0.8" fill="var(--b-piece-detail)" stroke="var(--b-piece-detail)"/><circle cx="15.2" cy="15.8" r="1.1" fill="var(--b-piece-detail)" stroke="var(--b-piece-detail)"/><path d="M12 39h26v-2.8H12V39z"/></g></svg>`,
  bB: `<svg viewBox="0 0 45 45"><g fill="url(#bPieceGrad)" stroke="var(--b-piece-stroke)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 36.5c3.4-.9 10.1.4 12.5-1.8 2.4 2.2 9.1.9 12.5 1.8 0 0 1.6.5 2.8 1.9-.7.9-1.6.9-2.8.5-3.4-.9-10.1.4-12.5-1-2.4 1.4-9.1.1-12.5 1-1.2.4-2.1.4-2.8-.5 1.2-1.4 2.8-1.9 2.8-1.9z"/><path d="M15.2 32.2c2.5 2.3 12.1 2.3 14.6 0 .5-1.4 0-2 0-2 0-2.4-2.4-3.8-2.4-3.8 5.3-1.5 5.8-11.1-4.9-15-10.7 3.9-10.2 13.5-4.9 15 0 0-2.4 1.4-2.4 3.8 0 0-.5.6 0 2z"/><circle cx="22.5" cy="8.2" r="2.4"/><path d="M17.5 26.2h10M15.5 29.8h14M22.5 15.8v4.8M20.2 18.2h4.6" fill="none" stroke="var(--b-piece-detail)" stroke-width="1.4"/></g></svg>`,
  bQ: `<svg viewBox="0 0 45 45"><g fill="url(#bPieceGrad)" stroke="var(--b-piece-stroke)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6.5" cy="12.5" r="2.1"/><circle cx="14.2" cy="9.5" r="2.1"/><circle cx="22.5" cy="8.2" r="2.1"/><circle cx="30.8" cy="9.5" r="2.1"/><circle cx="38.5" cy="12.5" r="2.1"/><path d="M9.5 26.5c8.2-1.4 17.8-1.4 26 0l2-11.8-6.8 10.6V11.5l-5.2 13-3-14.2-3 14.2-5.2-13v13.8L7.5 14.7l2 11.8z"/><path d="M9.5 26.5c0 1.9 1.5 1.9 2.4 3.8 1 1.4 1 1 .5 3.3-1.4 1-1.4 2.4-1.4 2.4-1.4 1.4.5 2.4.5 2.4 6.2 1 15.8 1 22 0 0 0 1.4-1 0-2.4 0 0 .5-1.4-1-2.4-.5-2.3-.5-1.9.5-3.3.9-1.9 2.4-1.9 2.4-3.8-8.2-1.4-17.8-1.4-26 0z"/><path d="M12 30.2c3.5-.9 17.5-.9 21 0M12.5 33.6c5.8-.9 14.2-.9 20 0" fill="none" stroke="var(--b-piece-detail)" stroke-width="1.2"/></g></svg>`,
  bK: `<svg viewBox="0 0 45 45"><g fill="url(#bPieceGrad)" stroke="var(--b-piece-stroke)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.6V6M20 8.2h5"/><path d="M22.5 25s4.4-7.2 2.9-10.1c0 0-1-2.4-2.9-2.4s-2.9 2.4-2.9 2.4c-1.5 2.9 2.9 10.1 2.9 10.1"/><path d="M11.8 37.2c5.3 3.3 16.1 3.3 21.4 0v-6.8s8.8-4.4 5.8-10.2c-3.9-6.3-13.2-3.4-15.6 3.9V27v-3.4c-3.4-7.3-12.7-10.2-15.6-3.9-3 5.8 4.8 9.8 4.8 9.8v7.7z"/><path d="M11.8 30.4c5.3-2.8 16.1-2.8 21.4 0m-21.4 3.4c5.3-2.8 16.1-2.8 21.4 0" fill="none" stroke="var(--b-piece-detail)" stroke-width="1.3"/></g></svg>`
};

const PIECE_VALUES = { P: 1, N: 3, B: 3, R: 5, Q: 9, K: 0 };
const ENGINE_VALUES = { P: 100, N: 320, B: 330, R: 500, Q: 900, K: 20000 };
const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const RANKS = ['8', '7', '6', '5', '4', '3', '2', '1'];

// Piece-Square Tables (White perspective; mirrored for Black)
const PST = {
  P: [
    [0,0,0,0,0,0,0,0],[50,50,50,50,50,50,50,50],[10,10,20,30,30,20,10,10],
    [5,5,10,27,27,10,5,5],[0,0,0,22,22,0,0,0],[5,-5,-10,0,0,-10,-5,5],
    [5,10,10,-20,-20,10,10,5],[0,0,0,0,0,0,0,0]
  ],
  N: [
    [-50,-40,-30,-30,-30,-30,-40,-50],[-40,-20,0,0,0,0,-20,-40],[-30,0,10,15,15,10,0,-30],
    [-30,5,15,20,20,15,5,-30],[-30,0,15,20,20,15,0,-30],[-30,5,10,15,15,10,5,-30],
    [-40,-20,0,5,5,0,-20,-40],[-50,-40,-30,-30,-30,-30,-40,-50]
  ],
  B: [
    [-20,-10,-10,-10,-10,-10,-10,-20],[-10,0,0,0,0,0,0,-10],[-10,0,5,10,10,5,0,-10],
    [-10,5,5,10,10,5,5,-10],[-10,0,10,10,10,10,0,-10],[-10,10,10,10,10,10,10,-10],
    [-10,5,0,0,0,0,5,-10],[-20,-10,-10,-10,-10,-10,-10,-20]
  ],
  R: [
    [0,0,0,0,0,0,0,0],[5,10,10,10,10,10,10,5],[-5,0,0,0,0,0,0,-5],
    [-5,0,0,0,0,0,0,-5],[-5,0,0,0,0,0,0,-5],[-5,0,0,0,0,0,0,-5],
    [-5,0,0,0,0,0,0,-5],[0,0,0,5,5,0,0,0]
  ],
  Q: [
    [-20,-10,-10,-5,-5,-10,-10,-20],[-10,0,0,0,0,0,0,-10],[-10,0,5,5,5,5,0,-10],
    [-5,0,5,5,5,5,0,-5],[0,0,5,5,5,5,0,-5],[-10,5,5,5,5,5,0,-10],
    [-10,0,5,0,0,0,0,-10],[-20,-10,-10,-5,-5,-10,-10,-20]
  ],
  K: [
    [-30,-40,-40,-50,-50,-40,-40,-30],[-30,-40,-40,-50,-50,-40,-40,-30],[-30,-40,-40,-50,-50,-40,-40,-30],
    [-30,-40,-40,-50,-50,-40,-40,-30],[-20,-30,-30,-40,-40,-30,-30,-20],[-10,-20,-20,-20,-20,-20,-20,-10],
    [20,20,0,0,0,0,20,20],[20,30,10,0,0,10,30,20]
  ]
};

const BOT_LABELS = {
  400: 'Bot — Beginner (400)',
  800: 'Bot — Casual (800)',
  1200: 'Bot — Intermediate (1200)',
  1600: 'Bot — Advanced (1600)',
  2000: 'Bot — Master (2000+)'
};

const INITIAL_BOARD = [
  ['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR'],
  ['bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP'],
  ['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR']
];

// Core Game State
let board = [];
let turn = 'w';
let selected = null;
let legalMoves = [];
let castling = { wK: true, wQ: true, bK: true, bQ: true };
let epTarget = null;
let lastMove = null;
let gameOver = false;
let gameResult = '*';
let halfMoveClock = 0;
let positionCounts = {};
let history = [];
let snapshots = [];
let viewIndex = 0;
let moveLog = [];
let capturedByWhite = [];
let capturedByBlack = [];
let pendingPromotion = null;

// Animation State
let slideTimeout = null;
let flipTimeout = null;

// Mode & Preferences
let gameMode = 'pass';
let humanColor = 'w';
let botLevel = 1200;
let botThinking = false;
let botTimer = null;
let autoFlip = true;
let isBoardFlipped = false;
let soundEnabled = true;
let soundPack = 'wood'; // 'wood' | 'crisp' | 'synth'

// Confirm states
let confirmResign = false;
let confirmDraw = false;

// Clock State
let baseSeconds = 600;
let incrementSeconds = 0;
let whiteTime = 600;
let blackTime = 600;
let clockInterval = null;
let clockStarted = false;
let clockPaused = false;
let whiteLowWarned = false;
let blackLowWarned = false;
let lastWhiteTickSec = -1;
let lastBlackTickSec = -1;

// Custom Names
let savedWhiteName = 'White';
let savedBlackName = 'Black';

// DOM Elements
const boardColumn = document.getElementById('boardColumn');
const boardEl = document.getElementById('board');
const statusBanner = document.getElementById('statusBanner');
const statusText = document.getElementById('statusText');
const whiteCard = document.getElementById('whiteCard');
const blackCard = document.getElementById('blackCard');
const whiteNameInput = document.getElementById('whiteNameInput');
const blackNameInput = document.getElementById('blackNameInput');
const whiteClockEl = document.getElementById('whiteClock');
const blackClockEl = document.getElementById('blackClock');
const whiteCapturedEl = document.getElementById('whiteCaptured');
const blackCapturedEl = document.getElementById('blackCaptured');
const whiteAdvEl = document.getElementById('whiteAdv');
const blackAdvEl = document.getElementById('blackAdv');
const moveListEl = document.getElementById('moveList');
const timeControlSelect = document.getElementById('timeControlSelect');
const pauseBtn = document.getElementById('pauseBtn');
const modePassBtn = document.getElementById('modePassBtn');
const modeBotBtn = document.getElementById('modeBotBtn');
const botSettingsEl = document.getElementById('botSettings');
const botLevelSelect = document.getElementById('botLevelSelect');
const botSideSelect = document.getElementById('botSideSelect');
const themeButtons = document.querySelectorAll('#themeButtons .theme-chip');
const pieceStyleSelect = document.getElementById('pieceStyleSelect');
const soundPackSelect = document.getElementById('soundPackSelect');
const flipToggleBtn = document.getElementById('flipToggleBtn');
const soundToggleBtn = document.getElementById('soundToggleBtn');
const undoBtn = document.getElementById('undoBtn');
const copyPgnBtn = document.getElementById('copyPgnBtn');
const drawBtn = document.getElementById('drawBtn');
const resignBtn = document.getElementById('resignBtn');
const rematchBtn = document.getElementById('rematchBtn');
const promoOverlay = document.getElementById('promoOverlay');
const promoChoices = document.getElementById('promoChoices');

// ==========================================
// CUSTOM BOARD SOUND PACKS (Web Audio API)
// ==========================================
let audioCtx = null;
function ensureAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function playTone(ctx, { type = 'sine', freqStart, freqEnd, startOffset = 0, duration = 0.08, gainPeak = 0.25 }) {
  const now = ctx.currentTime + startOffset;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freqStart, now);
  if (freqEnd && freqEnd !== freqStart) {
    osc.frequency.exponentialRampToValueAtTime(Math.max(20, freqEnd), now + duration);
  }
  gain.gain.setValueAtTime(0.001, now);
  gain.gain.linearRampToValueAtTime(gainPeak, now + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + duration + 0.02);
}

function playSound(eventType) {
  if (!soundEnabled) return;
  try {
    const ctx = ensureAudio();
    const packProfiles = {
      wood:  { moveOsc: 'triangle', moveF1: 195, moveF2: 72, capF1: 135, capF2: 44 },
      crisp: { moveOsc: 'sine',     moveF1: 420, moveF2: 180, capF1: 290, capF2: 95 },
      synth: { moveOsc: 'sine',     moveF1: 310, moveF2: 240, capF1: 220, capF2: 140 }
    };
    const p = packProfiles[soundPack] || packProfiles.wood;

    if (eventType === 'move') {
      playTone(ctx, { type: p.moveOsc, freqStart: p.moveF1, freqEnd: p.moveF2, duration: 0.07, gainPeak: 0.3 });
    } else if (eventType === 'capture') {
      playTone(ctx, { type: 'sawtooth', freqStart: p.capF1, freqEnd: p.capF2, duration: 0.09, gainPeak: 0.22 });
      playTone(ctx, { type: 'sine',     freqStart: p.capF1 * 0.85, freqEnd: 38, duration: 0.12, gainPeak: 0.34 });
    } else if (eventType === 'castle') {
      // Distinct double wooden thud (King + Rook)
      playTone(ctx, { type: p.moveOsc, freqStart: p.moveF1, freqEnd: p.moveF2, startOffset: 0, duration: 0.07, gainPeak: 0.28 });
      playTone(ctx, { type: p.moveOsc, freqStart: p.moveF1 * 1.18, freqEnd: p.moveF2 * 1.15, startOffset: 0.09, duration: 0.08, gainPeak: 0.3 });
    } else if (eventType === 'promote') {
      // Bright ascending 3-note chime
      playTone(ctx, { type: 'triangle', freqStart: 523.25, freqEnd: 523.25, startOffset: 0,    duration: 0.12, gainPeak: 0.2 });
      playTone(ctx, { type: 'triangle', freqStart: 659.25, freqEnd: 659.25, startOffset: 0.07, duration: 0.12, gainPeak: 0.22 });
      playTone(ctx, { type: 'triangle', freqStart: 783.99, freqEnd: 1046.5, startOffset: 0.14, duration: 0.22, gainPeak: 0.25 });
    } else if (eventType === 'check') {
      playTone(ctx, { type: 'triangle', freqStart: 620, freqEnd: 460, startOffset: 0, duration: 0.11, gainPeak: 0.25 });
      playTone(ctx, { type: 'sine',     freqStart: 460, freqEnd: 390, startOffset: 0.09, duration: 0.12, gainPeak: 0.2 });
    } else if (eventType === 'lowTime') {
      // Double urgent warning ping at 20 seconds
      playTone(ctx, { type: 'sine', freqStart: 880, freqEnd: 880, startOffset: 0,    duration: 0.08, gainPeak: 0.18 });
      playTone(ctx, { type: 'sine', freqStart: 880, freqEnd: 880, startOffset: 0.12, duration: 0.08, gainPeak: 0.18 });
    } else if (eventType === 'tick') {
      // Subtle clock tick in final 10 seconds
      playTone(ctx, { type: 'sine', freqStart: 740, freqEnd: 620, startOffset: 0, duration: 0.04, gainPeak: 0.1 });
    } else if (eventType === 'win') {
      // Celebratory major fanfare
      playTone(ctx, { type: 'triangle', freqStart: 523.25, freqEnd: 523.25, startOffset: 0,    duration: 0.16, gainPeak: 0.22 });
      playTone(ctx, { type: 'triangle', freqStart: 659.25, freqEnd: 659.25, startOffset: 0.1,  duration: 0.16, gainPeak: 0.22 });
      playTone(ctx, { type: 'triangle', freqStart: 783.99, freqEnd: 783.99, startOffset: 0.2,  duration: 0.18, gainPeak: 0.24 });
      playTone(ctx, { type: 'sine',     freqStart: 1046.5, freqEnd: 1046.5, startOffset: 0.3,  duration: 0.42, gainPeak: 0.26 });
    } else if (eventType === 'draw') {
      // Neutral two-note resolution
      playTone(ctx, { type: 'sine', freqStart: 440, freqEnd: 440, startOffset: 0,    duration: 0.18, gainPeak: 0.2 });
      playTone(ctx, { type: 'sine', freqStart: 392, freqEnd: 392, startOffset: 0.16, duration: 0.28, gainPeak: 0.2 });
    }
  } catch (e) {}
}

// ==========================================
// THEME & PREFERENCES PERSISTENCE
// ==========================================
function applyTheme(theme) {
  document.body.dataset.theme = theme;
  themeButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === theme);
  });
  try { localStorage.setItem('chess_theme', theme); } catch (e) {}
}

function applyPieceStyle(style) {
  document.body.dataset.pieces = style;
  pieceStyleSelect.value = style;
  try { localStorage.setItem('chess_pieces', style); } catch (e) {}
}

function applySoundPack(pack) {
  soundPack = pack;
  soundPackSelect.value = pack;
  try { localStorage.setItem('chess_sound_pack', pack); } catch (e) {}
}

function loadSavedPreferences() {
  try {
    const savedTheme = localStorage.getItem('chess_theme');
    if (savedTheme) applyTheme(savedTheme);
    const savedPieces = localStorage.getItem('chess_pieces');
    if (savedPieces) applyPieceStyle(savedPieces);
    const savedPack = localStorage.getItem('chess_sound_pack');
    if (savedPack) applySoundPack(savedPack);
  } catch (e) {}
}

// ==========================================
// ORIENTATION & PLAYER NAMES
// ==========================================
function setBoardOrientation(perspectiveColor) {
  isBoardFlipped = (perspectiveColor === 'b');
  const angle = isBoardFlipped ? '180deg' : '0deg';
  const counter = isBoardFlipped ? '-180deg' : '0deg';
  document.documentElement.style.setProperty('--board-rot', angle);
  document.documentElement.style.setProperty('--counter-rot', counter);
  boardColumn.classList.toggle('flipped', isBoardFlipped);
}

function updateOrientationForCurrentState() {
  if (gameMode === 'bot') {
    setBoardOrientation(humanColor);
  } else {
    setBoardOrientation(autoFlip ? turn : 'w');
  }
}

function syncPlayerNameInputs() {
  if (gameMode === 'bot') {
    const botLabel = BOT_LABELS[botLevel] || `Bot (${botLevel})`;
    if (humanColor === 'w') {
      whiteNameInput.value = savedWhiteName === 'White' ? 'You' : savedWhiteName;
      whiteNameInput.disabled = false;
      blackNameInput.value = botLabel;
      blackNameInput.disabled = true;
    } else {
      whiteNameInput.value = botLabel;
      whiteNameInput.disabled = true;
      blackNameInput.value = savedBlackName === 'Black' ? 'You' : savedBlackName;
      blackNameInput.disabled = false;
    }
  } else {
    whiteNameInput.disabled = false;
    blackNameInput.disabled = false;
    whiteNameInput.value = savedWhiteName;
    blackNameInput.value = savedBlackName;
  }
}

function getPlayerDisplayName(color) {
  const raw = color === 'w' ? whiteNameInput.value.trim() : blackNameInput.value.trim();
  return raw || (color === 'w' ? 'White' : 'Black');
}

// ==========================================
// CLOCK LOGIC + LOW-TIME AUDIO CUES
// ==========================================
function formatTime(secs) {
  if (baseSeconds === 0) return '∞';
  const s = Math.max(0, Math.ceil(secs));
  const mins = Math.floor(s / 60);
  const rem = s % 60;
  return `${String(mins).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
}

function renderClocks() {
  whiteClockEl.textContent = formatTime(whiteTime);
  blackClockEl.textContent = formatTime(blackTime);

  whiteClockEl.classList.toggle('low-time', baseSeconds > 0 && whiteTime <= 20 && !gameOver);
  blackClockEl.classList.toggle('low-time', baseSeconds > 0 && blackTime <= 20 && !gameOver);

  whiteCard.classList.toggle('active-turn', turn === 'w' && !gameOver);
  blackCard.classList.toggle('active-turn', turn === 'b' && !gameOver);
}

function stopClock() {
  if (clockInterval) {
    clearInterval(clockInterval);
    clockInterval = null;
  }
}

function startClockLoop() {
  stopClock();
  if (baseSeconds === 0 || gameOver) return;
  clockStarted = true;
  clockPaused = false;
  pauseBtn.textContent = '⏸';

  let lastTick = performance.now();
  clockInterval = setInterval(() => {
    if (clockPaused || gameOver || pendingPromotion) {
      lastTick = performance.now();
      return;
    }
    const now = performance.now();
    const delta = (now - lastTick) / 1000;
    lastTick = now;

    if (turn === 'w') {
      whiteTime -= delta;
      if (whiteTime <= 20 && !whiteLowWarned && baseSeconds > 20) {
        whiteLowWarned = true;
        playSound('lowTime');
      }
      const wholeSec = Math.ceil(whiteTime);
      if (wholeSec <= 10 && wholeSec > 0 && wholeSec !== lastWhiteTickSec) {
        lastWhiteTickSec = wholeSec;
        playSound('tick');
      }
      if (whiteTime <= 0) {
        whiteTime = 0;
        finishGame('0-1', `Time Out — ${getPlayerDisplayName('b')} Wins!`, 'win');
      }
    } else {
      blackTime -= delta;
      if (blackTime <= 20 && !blackLowWarned && baseSeconds > 20) {
        blackLowWarned = true;
        playSound('lowTime');
      }
      const wholeSec = Math.ceil(blackTime);
      if (wholeSec <= 10 && wholeSec > 0 && wholeSec !== lastBlackTickSec) {
        lastBlackTickSec = wholeSec;
        playSound('tick');
      }
      if (blackTime <= 0) {
        blackTime = 0;
        finishGame('1-0', `Time Out — ${getPlayerDisplayName('w')} Wins!`, 'win');
      }
    }
    renderClocks();
  }, 100);
}

// ==========================================
// BOARD HELPERS & CHESS RULES
// ==========================================
function cloneBoard(b) { return b.map(row => [...row]); }
function inBounds(r, c) { return r >= 0 && r < 8 && c >= 0 && c < 8; }

function getPositionKey(b, activeTurn, castlingRights, ep) {
  let rows = '';
  for (let r = 0; r < 8; r++) {
    let empty = 0;
    for (let c = 0; c < 8; c++) {
      if (!b[r][c]) empty++;
      else {
        if (empty > 0) { rows += empty; empty = 0; }
        rows += b[r][c];
      }
    }
    if (empty > 0) rows += empty;
    rows += '/';
  }
  const cStr = (castlingRights.wK ? 'K' : '') + (castlingRights.wQ ? 'Q' : '') +
               (castlingRights.bK ? 'k' : '') + (castlingRights.bQ ? 'q' : '');
  const epStr = ep ? `${ep.r},${ep.c}` : '-';
  return `${rows}|${activeTurn}|${cStr || '-'}|${epStr}`;
}

function isSquareAttacked(b, targetR, targetC, byColor) {
  const pawnDir = byColor === 'w' ? 1 : -1;
  for (const dc of [-1, 1]) {
    const pr = targetR + pawnDir, pc = targetC + dc;
    if (inBounds(pr, pc) && b[pr][pc] === `${byColor}P`) return true;
  }

  const knightJumps = [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];
  for (const [dr, dc] of knightJumps) {
    const nr = targetR + dr, nc = targetC + dc;
    if (inBounds(nr, nc) && b[nr][nc] === `${byColor}N`) return true;
  }

  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;
      const kr = targetR + dr, kc = targetC + dc;
      if (inBounds(kr, kc) && b[kr][kc] === `${byColor}K`) return true;
    }
  }

  const ortho = [[-1,0],[1,0],[0,-1],[0,1]];
  for (const [dr, dc] of ortho) {
    let r = targetR + dr, c = targetC + dc;
    while (inBounds(r, c)) {
      const p = b[r][c];
      if (p) {
        if (p === `${byColor}R` || p === `${byColor}Q`) return true;
        break;
      }
      r += dr; c += dc;
    }
  }

  const diag = [[-1,-1],[-1,1],[1,-1],[1,1]];
  for (const [dr, dc] of diag) {
    let r = targetR + dr, c = targetC + dc;
    while (inBounds(r, c)) {
      const p = b[r][c];
      if (p) {
        if (p === `${byColor}B` || p === `${byColor}Q`) return true;
        break;
      }
      r += dr; c += dc;
    }
  }

  return false;
}

function findKing(b, color) {
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      if (b[r][c] === `${color}K`) return { r, c };
    }
  }
  return null;
}

function isKingInCheck(b, color) {
  const kingPos = findKing(b, color);
  if (!kingPos) return false;
  return isSquareAttacked(b, kingPos.r, kingPos.c, color === 'w' ? 'b' : 'w');
}

function getPseudoMoves(b, r, c, castlingRights, ep) {
  const piece = b[r][c];
  if (!piece) return [];
  const color = piece[0], type = piece[1];
  const enemy = color === 'w' ? 'b' : 'w';
  const moves = [];

  if (type === 'P') {
    const dir = color === 'w' ? -1 : 1;
    const startRow = color === 'w' ? 6 : 1;
    if (inBounds(r + dir, c) && !b[r + dir][c]) {
      moves.push({ r: r + dir, c });
      if (r === startRow && !b[r + 2 * dir][c]) {
        moves.push({ r: r + 2 * dir, c, doublePawn: true });
      }
    }
    for (const dc of [-1, 1]) {
      const nr = r + dir, nc = c + dc;
      if (!inBounds(nr, nc)) continue;
      if (b[nr][nc] && b[nr][nc][0] === enemy) moves.push({ r: nr, c: nc, capture: true });
      else if (ep && ep.r === nr && ep.c === nc) moves.push({ r: nr, c: nc, capture: true, enPassant: true });
    }
  } else if (type === 'N') {
    const jumps = [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];
    for (const [dr, dc] of jumps) {
      const nr = r + dr, nc = c + dc;
      if (!inBounds(nr, nc)) continue;
      if (!b[nr][nc]) moves.push({ r: nr, c: nc });
      else if (b[nr][nc][0] === enemy) moves.push({ r: nr, c: nc, capture: true });
    }
  } else if (type === 'B' || type === 'R' || type === 'Q') {
    const dirs = [];
    if (type === 'R' || type === 'Q') dirs.push([-1,0],[1,0],[0,-1],[0,1]);
    if (type === 'B' || type === 'Q') dirs.push([-1,-1],[-1,1],[1,-1],[1,1]);
    for (const [dr, dc] of dirs) {
      let nr = r + dr, nc = c + dc;
      while (inBounds(nr, nc)) {
        if (!b[nr][nc]) moves.push({ r: nr, c: nc });
        else {
          if (b[nr][nc][0] === enemy) moves.push({ r: nr, c: nc, capture: true });
          break;
        }
        nr += dr; nc += dc;
      }
    }
  } else if (type === 'K') {
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) continue;
        const nr = r + dr, nc = c + dc;
        if (!inBounds(nr, nc)) continue;
        if (!b[nr][nc]) moves.push({ r: nr, c: nc });
        else if (b[nr][nc][0] === enemy) moves.push({ r: nr, c: nc, capture: true });
      }
    }
    const homeRow = color === 'w' ? 7 : 0;
    if (r === homeRow && c === 4 && !isKingInCheck(b, color)) {
      if (castlingRights[`${color}K`] &&
          !b[homeRow][5] && !b[homeRow][6] && b[homeRow][7] === `${color}R` &&
          !isSquareAttacked(b, homeRow, 5, enemy) && !isSquareAttacked(b, homeRow, 6, enemy)) {
        moves.push({ r: homeRow, c: 6, castle: 'K' });
      }
      if (castlingRights[`${color}Q`] &&
          !b[homeRow][3] && !b[homeRow][2] && !b[homeRow][1] && b[homeRow][0] === `${color}R` &&
          !isSquareAttacked(b, homeRow, 3, enemy) && !isSquareAttacked(b, homeRow, 2, enemy)) {
        moves.push({ r: homeRow, c: 2, castle: 'Q' });
      }
    }
  }

  return moves;
}

function applyMoveToBoard(b, from, move, promoType = 'Q') {
  const next = cloneBoard(b);
  const piece = next[from.r][from.c];
  const color = piece[0], type = piece[1];
  next[from.r][from.c] = null;

  if (move.enPassant) next[from.r][move.c] = null;
  if (move.castle === 'K') {
    next[from.r][5] = `${color}R`;
    next[from.r][7] = null;
  } else if (move.castle === 'Q') {
    next[from.r][3] = `${color}R`;
    next[from.r][0] = null;
  }

  const isPromo = type === 'P' && (move.r === 0 || move.r === 7);
  next[move.r][move.c] = isPromo ? `${color}${promoType}` : piece;
  return next;
}

function getUpdatedCastling(rights, from, move, movingPiece) {
  const next = { ...rights };
  const color = movingPiece[0], type = movingPiece[1];
  if (type === 'K') { next[`${color}K`] = false; next[`${color}Q`] = false; }
  if (from.r === 7 && from.c === 0) next.wQ = false;
  if (from.r === 7 && from.c === 7) next.wK = false;
  if (from.r === 0 && from.c === 0) next.bQ = false;
  if (from.r === 0 && from.c === 7) next.bK = false;
  if (move.r === 7 && move.c === 0) next.wQ = false;
  if (move.r === 7 && move.c === 7) next.wK = false;
  if (move.r === 0 && move.c === 0) next.bQ = false;
  if (move.r === 0 && move.c === 7) next.bK = false;
  return next;
}

function getLegalMoves(b, r, c, castlingRights, ep) {
  const piece = b[r][c];
  if (!piece) return [];
  const color = piece[0];
  return getPseudoMoves(b, r, c, castlingRights, ep).filter(move => {
    const sim = applyMoveToBoard(b, { r, c }, move);
    return !isKingInCheck(sim, color);
  });
}

function getAllLegalMoves(b, color, castlingRights, ep) {
  const all = [];
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      if (b[r][c] && b[r][c][0] === color) {
        const moves = getLegalMoves(b, r, c, castlingRights, ep);
        for (const m of moves) all.push({ from: { r, c }, move: m, piece: b[r][c] });
      }
    }
  }
  return all;
}

function hasAnyLegalMoves(b, color, castlingRights, ep) {
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      if (b[r][c] && b[r][c][0] === color && getLegalMoves(b, r, c, castlingRights, ep).length > 0) {
        return true;
      }
    }
  }
  return false;
}

function isInsufficientMaterial(b) {
  const pieces = [];
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      if (b[r][c] && b[r][c][1] !== 'K') pieces.push(b[r][c]);
    }
  }
  if (pieces.length === 0) return true;
  if (pieces.length === 1 && (pieces[0][1] === 'B' || pieces[0][1] === 'N')) return true;
  return false;
}

// ==========================================
// CHESS BOT ENGINE
// ==========================================
function evaluateBoard(b) {
  let score = 0;
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const p = b[r][c];
      if (!p) continue;
      const color = p[0], type = p[1];
      const base = ENGINE_VALUES[type];
      const pstRow = color === 'w' ? r : 7 - r;
      const positional = PST[type][pstRow][c];
      score += color === 'w' ? (base + positional) : -(base + positional);
    }
  }
  return score;
}

function scoreMoveForOrdering(b, entry) {
  let s = 0;
  const target = b[entry.move.r][entry.move.c];
  if (target) s += 10 * ENGINE_VALUES[target[1]] - ENGINE_VALUES[entry.piece[1]];
  if (entry.move.enPassant) s += 900;
  if (entry.piece[1] === 'P' && (entry.move.r === 0 || entry.move.r === 7)) s += 800;
  if (entry.move.castle) s += 60;
  return s;
}

function quiescence(b, alpha, beta, maximizing, castlingRights, ep, qDepth) {
  const standPat = evaluateBoard(b);
  if (qDepth === 0) return standPat;
  if (maximizing) {
    if (standPat >= beta) return beta;
    if (standPat > alpha) alpha = standPat;
  } else {
    if (standPat <= alpha) return alpha;
    if (standPat < beta) beta = standPat;
  }
  const color = maximizing ? 'w' : 'b';
  const captures = getAllLegalMoves(b, color, castlingRights, ep)
    .filter(e => e.move.capture)
    .sort((a, z) => scoreMoveForOrdering(b, z) - scoreMoveForOrdering(b, a));
  for (const entry of captures) {
    const nextB = applyMoveToBoard(b, entry.from, entry.move, 'Q');
    const nextC = getUpdatedCastling(castlingRights, entry.from, entry.move, entry.piece);
    const val = quiescence(nextB, alpha, beta, !maximizing, nextC, null, qDepth - 1);
    if (maximizing) {
      if (val >= beta) return beta;
      if (val > alpha) alpha = val;
    } else {
      if (val <= alpha) return alpha;
      if (val < beta) beta = val;
    }
  }
  return maximizing ? alpha : beta;
}

function minimax(b, depth, alpha, beta, maximizing, castlingRights, ep, useQuiescence) {
  const color = maximizing ? 'w' : 'b';
  const moves = getAllLegalMoves(b, color, castlingRights, ep);
  if (moves.length === 0) {
    if (isKingInCheck(b, color)) return maximizing ? (-99999 - depth) : (99999 + depth);
    return 0;
  }
  if (depth === 0) {
    return useQuiescence ? quiescence(b, alpha, beta, maximizing, castlingRights, ep, 2) : evaluateBoard(b);
  }
  moves.sort((a, z) => scoreMoveForOrdering(b, z) - scoreMoveForOrdering(b, a));
  if (maximizing) {
    let best = -Infinity;
    for (const entry of moves) {
      const nextB = applyMoveToBoard(b, entry.from, entry.move, 'Q');
      const nextC = getUpdatedCastling(castlingRights, entry.from, entry.move, entry.piece);
      const nextEp = entry.move.doublePawn ? { r: (entry.from.r + entry.move.r) / 2, c: entry.from.c } : null;
      const val = minimax(nextB, depth - 1, alpha, beta, false, nextC, nextEp, useQuiescence);
      if (val > best) best = val;
      if (val > alpha) alpha = val;
      if (beta <= alpha) break;
    }
    return best;
  } else {
    let best = Infinity;
    for (const entry of moves) {
      const nextB = applyMoveToBoard(b, entry.from, entry.move, 'Q');
      const nextC = getUpdatedCastling(castlingRights, entry.from, entry.move, entry.piece);
      const nextEp = entry.move.doublePawn ? { r: (entry.from.r + entry.move.r) / 2, c: entry.from.c } : null;
      const val = minimax(nextB, depth - 1, alpha, beta, true, nextC, nextEp, useQuiescence);
      if (val < best) best = val;
      if (val < beta) beta = val;
      if (beta <= alpha) break;
    }
    return best;
  }
}

function chooseBotMove() {
  const botColor = humanColor === 'w' ? 'b' : 'w';
  const maximizing = (botColor === 'w');
  const moves = getAllLegalMoves(board, botColor, castling, epTarget);
  if (moves.length === 0) return null;

  if (botLevel === 400 && Math.random() < 0.45) {
    return moves[Math.floor(Math.random() * moves.length)];
  }

  const config = {
    400:  { depth: 1, noise: 260, q: false },
    800:  { depth: 1, noise: 140, q: false },
    1200: { depth: 2, noise: 60,  q: false },
    1600: { depth: 3, noise: 18,  q: false },
    2000: { depth: 3, noise: 0,   q: true  }
  }[botLevel] || { depth: 2, noise: 50, q: false };

  moves.sort((a, z) => scoreMoveForOrdering(board, z) - scoreMoveForOrdering(board, a));

  let bestEntry = moves[0];
  let bestScore = maximizing ? -Infinity : Infinity;

  for (const entry of moves) {
    const nextB = applyMoveToBoard(board, entry.from, entry.move, 'Q');
    const nextC = getUpdatedCastling(castling, entry.from, entry.move, entry.piece);
    const nextEp = entry.move.doublePawn ? { r: (entry.from.r + entry.move.r) / 2, c: entry.from.c } : null;
    let score = minimax(nextB, config.depth - 1, -Infinity, Infinity, !maximizing, nextC, nextEp, config.q);

    const nextKey = getPositionKey(nextB, maximizing ? 'b' : 'w', nextC, nextEp);
    if ((positionCounts[nextKey] || 0) >= 2) {
      score += maximizing ? -40 : 40;
    }
    if (config.noise > 0) score += (Math.random() * 2 - 1) * config.noise;

    if (maximizing ? (score > bestScore) : (score < bestScore)) {
      bestScore = score;
      bestEntry = entry;
    }
  }
  return bestEntry;
}

function maybeTriggerBotMove() {
  if (gameMode !== 'bot' || gameOver || pendingPromotion) return;
  const botColor = humanColor === 'w' ? 'b' : 'w';
  if (turn !== botColor) return;

  botThinking = true;
  statusBanner.className = 'status-banner';
  statusText.textContent = `${getPlayerDisplayName(botColor)} is thinking...`;

  clearTimeout(botTimer);
  botTimer = setTimeout(() => {
    botThinking = false;
    if (gameOver || gameMode !== 'bot' || turn !== botColor) return;
    const picked = chooseBotMove();
    if (picked) executeMove(picked.from, picked.move, 'Q');
  }, 440);
}

// ==========================================
// ALGEBRAIC NOTATION (SAN) & PGN
// ==========================================
function buildSAN(prevBoard, from, move, promoType, nextBoard, nextTurn, nextCastling, nextEp) {
  let san = '';
  if (move.castle === 'K') san = 'O-O';
  else if (move.castle === 'Q') san = 'O-O-O';
  else {
    const piece = prevBoard[from.r][from.c];
    const type = piece[1];
    const destCoord = `${FILES[move.c]}${RANKS[move.r]}`;
    if (type === 'P') {
      if (move.capture) san += `${FILES[from.c]}x`;
      san += destCoord;
      if (move.r === 0 || move.r === 7) san += `=${promoType}`;
    } else {
      san += type;
      const ambiguous = [];
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          if ((r !== from.r || c !== from.c) && prevBoard[r][c] === piece) {
            const candidates = getLegalMoves(prevBoard, r, c, castling, epTarget);
            if (candidates.some(m => m.r === move.r && m.c === move.c)) ambiguous.push({ r, c });
          }
        }
      }
      if (ambiguous.length > 0) {
        const sameFile = ambiguous.some(a => a.c === from.c);
        const sameRank = ambiguous.some(a => a.r === from.r);
        if (!sameFile) san += FILES[from.c];
        else if (!sameRank) san += RANKS[from.r];
        else san += `${FILES[from.c]}${RANKS[from.r]}`;
      }
      if (move.capture) san += 'x';
      san += destCoord;
    }
  }
  const enemyInCheck = isKingInCheck(nextBoard, nextTurn);
  const enemyHasMoves = hasAnyLegalMoves(nextBoard, nextTurn, nextCastling, nextEp);
  if (enemyInCheck) san += enemyHasMoves ? '+' : '#';
  return san;
}

function generatePGN() {
  const now = new Date();
  const dateStr = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;
  const eventName = gameMode === 'bot' ? `Pass & Play Chess vs Bot (${botLevel})` : 'Pass & Play Local Chess';
  const headers = [
    `[Event "${eventName}"]`,
    `[Site "Local Browser"]`,
    `[Date "${dateStr}"]`,
    `[White "${getPlayerDisplayName('w')}"]`,
    `[Black "${getPlayerDisplayName('b')}"]`,
    `[Result "${gameResult}"]`
  ].join('\n');

  let body = '';
  for (let i = 0; i < moveLog.length; i += 2) {
    const num = Math.floor(i / 2) + 1;
    body += `${num}. ${moveLog[i]}${moveLog[i + 1] ? ' ' + moveLog[i + 1] : ''} `;
  }
  body += gameResult;
  return `${headers}\n\n${body.trim()}`;
}

// ==========================================
// SMOOTH ANIMATED PIECE SLIDING
// ==========================================
function clearSlideAnimation() {
  clearTimeout(slideTimeout);
  clearTimeout(flipTimeout);
  boardEl.querySelectorAll('.sliding-piece').forEach(el => el.remove());
  boardEl.querySelectorAll('.piece.anim-hidden').forEach(el => el.classList.remove('anim-hidden'));
}

function animatePieceSlide(slides, onComplete) {
  clearSlideAnimation();

  const hiddenEls = [];
  const overlayEls = [];

  for (const s of slides) {
    const targetSq = boardEl.querySelector(`.square[data-r="${s.to.r}"][data-c="${s.to.c}"]`);
    if (targetSq) {
      const targetPiece = targetSq.querySelector('.piece');
      if (targetPiece) {
        targetPiece.classList.add('anim-hidden');
        hiddenEls.push(targetPiece);
      }
    }

    const slider = document.createElement('div');
    slider.className = 'sliding-piece';
    slider.style.left = `${s.from.c * 12.5}%`;
    slider.style.top = `${s.from.r * 12.5}%`;
    slider.innerHTML = `<div class="piece">${PIECE_SVGS[s.piece]}</div>`;
    boardEl.appendChild(slider);
    overlayEls.push({ el: slider, to: s.to });
  }

  // Force layout reflow so the CSS transition triggers cleanly
  void boardEl.offsetWidth;

  for (const item of overlayEls) {
    item.el.style.left = `${item.to.c * 12.5}%`;
    item.el.style.top = `${item.to.r * 12.5}%`;
  }

  slideTimeout = setTimeout(() => {
    overlayEls.forEach(item => item.el.remove());
    hiddenEls.forEach(el => el.classList.remove('anim-hidden'));
    if (onComplete) onComplete();
  }, 220);
}

// ==========================================
// GAME EXECUTION & SNAPSHOTS
// ==========================================
function resetConfirmButtons() {
  confirmResign = false;
  confirmDraw = false;
  resignBtn.textContent = '🏳 Resign';
  resignBtn.classList.remove('confirm-pulse');
  drawBtn.textContent = '🤝 Draw';
  drawBtn.classList.remove('confirm-pulse');
}

function saveSnapshot() {
  snapshots.push({
    board: cloneBoard(board),
    lastMove: lastMove ? { from: { ...lastMove.from }, to: { ...lastMove.to } } : null,
    capturedByWhite: [...capturedByWhite],
    capturedByBlack: [...capturedByBlack],
    turn
  });
  viewIndex = snapshots.length - 1;
}

function finishGame(resultCode, message, bannerClass = '') {
  gameOver = true;
  gameResult = resultCode;
  stopClock();
  clearTimeout(botTimer);
  botThinking = false;
  resetConfirmButtons();

  statusBanner.className = `status-banner ${bannerClass}`;
  statusText.textContent = message;
  rematchBtn.classList.remove('hidden');
  renderClocks();
  playSound(resultCode === '1/2-1/2' ? 'draw' : 'win');
}

function executeMove(from, move, promoType = 'Q') {
  clearSlideAnimation();
  resetConfirmButtons();

  history.push({
    board: cloneBoard(board),
    turn,
    castling: { ...castling },
    epTarget: epTarget ? { ...epTarget } : null,
    lastMove: lastMove ? { ...lastMove } : null,
    gameOver,
    gameResult,
    halfMoveClock,
    positionCounts: { ...positionCounts },
    moveLog: [...moveLog],
    capturedByWhite: [...capturedByWhite],
    capturedByBlack: [...capturedByBlack],
    whiteTime,
    blackTime
  });

  const prevBoard = cloneBoard(board);
  const movingPiece = board[from.r][from.c];
  const color = movingPiece[0];
  const type = movingPiece[1];
  const isPromo = type === 'P' && (move.r === 0 || move.r === 7);

  let capturedPiece = null;
  if (move.enPassant) capturedPiece = board[from.r][move.c];
  else if (board[move.r][move.c]) capturedPiece = board[move.r][move.c];

  if (capturedPiece) {
    if (color === 'w') capturedByWhite.push(capturedPiece);
    else capturedByBlack.push(capturedPiece);
  }

  const nextBoard = applyMoveToBoard(board, from, move, promoType);
  const nextCastling = getUpdatedCastling(castling, from, move, movingPiece);
  const nextEp = move.doublePawn ? { r: (from.r + move.r) / 2, c: from.c } : null;
  const nextTurn = turn === 'w' ? 'b' : 'w';

  const san = buildSAN(prevBoard, from, move, promoType, nextBoard, nextTurn, nextCastling, nextEp);

  board = nextBoard;
  castling = nextCastling;
  epTarget = nextEp;
  moveLog.push(san);

  if (type === 'P' || capturedPiece) halfMoveClock = 0;
  else halfMoveClock++;

  const posKey = getPositionKey(board, nextTurn, castling, epTarget);
  positionCounts[posKey] = (positionCounts[posKey] || 0) + 1;

  if (baseSeconds > 0 && clockStarted) {
    if (turn === 'w') whiteTime += incrementSeconds;
    else blackTime += incrementSeconds;
  }

  lastMove = { from, to: { r: move.r, c: move.c } };
  selected = null;
  legalMoves = [];
  turn = nextTurn;

  saveSnapshot();

  if (!clockStarted && baseSeconds > 0) {
    startClockLoop();
  }

  // Determine exact audio cue
  const moveAudioKind = isPromo
    ? 'promote'
    : move.castle
      ? 'castle'
      : capturedPiece
        ? 'capture'
        : 'move';

  updateStatus(moveAudioKind, posKey);
  renderCaptured();
  renderMoveHistory();
  renderClocks();
  renderBoard();

  // Build sliding animations (including Rook slide on castling)
  const slides = [{
    piece: isPromo ? `${color}${promoType}` : movingPiece,
    from,
    to: { r: move.r, c: move.c }
  }];
  if (move.castle === 'K') {
    slides.push({ piece: `${color}R`, from: { r: from.r, c: 7 }, to: { r: from.r, c: 5 } });
  } else if (move.castle === 'Q') {
    slides.push({ piece: `${color}R`, from: { r: from.r, c: 0 }, to: { r: from.r, c: 3 } });
  }

  // Slide smoothly FIRST, then rotate board in Pass & Play mode
  animatePieceSlide(slides, () => {
    if (!gameOver && gameMode === 'pass' && autoFlip) {
      flipTimeout = setTimeout(() => {
        updateOrientationForCurrentState();
        renderBoard();
      }, 90);
    }
  });

  if (!gameOver) {
    maybeTriggerBotMove();
  }
}

function updateStatus(moveAudioKind = 'move', latestPosKey = '') {
  const inCheck = isKingInCheck(board, turn);
  const anyMoves = hasAnyLegalMoves(board, turn, castling, epTarget);

  if (!anyMoves) {
    if (inCheck) {
      const winnerColor = turn === 'w' ? 'b' : 'w';
      const code = winnerColor === 'w' ? '1-0' : '0-1';
      finishGame(code, `Checkmate — ${getPlayerDisplayName(winnerColor)} Wins!`, 'win');
    } else {
      finishGame('1/2-1/2', 'Draw by Stalemate');
    }
  } else if (isInsufficientMaterial(board)) {
    finishGame('1/2-1/2', 'Draw — Insufficient Material');
  } else if (latestPosKey && positionCounts[latestPosKey] >= 3) {
    finishGame('1/2-1/2', 'Draw — Threefold Repetition');
  } else if (halfMoveClock >= 100) {
    finishGame('1/2-1/2', 'Draw — 50-Move Rule');
  } else {
    gameOver = false;
    gameResult = '*';
    statusBanner.className = 'status-banner';
    if (inCheck) {
      statusBanner.classList.add('alert');
      statusText.textContent = `${getPlayerDisplayName(turn)} is in Check!`;
      playSound('check');
    } else {
      statusText.textContent = `${getPlayerDisplayName(turn)} to Move`;
      playSound(moveAudioKind);
    }
  }
}

function promptPromotion(from, move) {
  pendingPromotion = { from, move };
  const color = turn;
  promoChoices.innerHTML = ['Q', 'R', 'B', 'N'].map(type => `
    <div class="promo-choice" data-type="${type}">
      ${PIECE_SVGS[`${color}${type}`]}
    </div>
  `).join('');

  promoChoices.querySelectorAll('.promo-choice').forEach(el => {
    el.addEventListener('click', () => {
      const chosen = el.dataset.type;
      promoOverlay.classList.remove('active');
      const { from: f, move: m } = pendingPromotion;
      pendingPromotion = null;
      executeMove(f, m, chosen);
    });
  });

  promoOverlay.classList.add('active');
}

function handleSquareClick(r, c) {
  if (gameOver || pendingPromotion || botThinking) return;

  if (viewIndex !== snapshots.length - 1) {
    goToSnapshot(snapshots.length - 1);
    return;
  }

  if (gameMode === 'bot' && turn !== humanColor) return;

  const chosenMove = legalMoves.find(m => m.r === r && m.c === c);
  if (selected && chosenMove) {
    const piece = board[selected.r][selected.c];
    const isPromo = piece[1] === 'P' && (chosenMove.r === 0 || chosenMove.r === 7);
    if (isPromo) promptPromotion(selected, chosenMove);
    else executeMove(selected, chosenMove);
    return;
  }

  const clickedPiece = board[r][c];
  if (clickedPiece && clickedPiece[0] === turn) {
    if (selected && selected.r === r && selected.c === c) {
      selected = null;
      legalMoves = [];
    } else {
      selected = { r, c };
      legalMoves = getLegalMoves(board, r, c, castling, epTarget);
    }
  } else {
    selected = null;
    legalMoves = [];
  }

  renderBoard();
}

// ==========================================
// RENDERING & MOVE HISTORY SCRUBBING
// ==========================================
function goToSnapshot(index) {
  clearSlideAnimation();
  const clamped = Math.max(0, Math.min(snapshots.length - 1, index));
  viewIndex = clamped;
  selected = null;
  legalMoves = [];

  const isLive = (viewIndex === snapshots.length - 1);
  if (!isLive) {
    statusBanner.className = 'status-banner review';
    statusText.textContent = `Reviewing Move ${Math.ceil(viewIndex / 2)} (Click Live to resume)`;
  } else if (!gameOver) {
    const inCheck = isKingInCheck(board, turn);
    statusBanner.className = inCheck ? 'status-banner alert' : 'status-banner';
    statusText.textContent = inCheck
      ? `${getPlayerDisplayName(turn)} is in Check!`
      : `${getPlayerDisplayName(turn)} to Move`;
  }

  renderCaptured();
  renderMoveHistory();
  renderBoard();
}

function renderCaptured() {
  const snap = snapshots[viewIndex] || { capturedByWhite, capturedByBlack };
  const sortOrder = { Q: 1, R: 2, B: 3, N: 4, P: 5 };
  const sortFn = (a, b) => sortOrder[a[1]] - sortOrder[b[1]];

  const wSorted = [...snap.capturedByWhite].sort(sortFn);
  const bSorted = [...snap.capturedByBlack].sort(sortFn);

  whiteCapturedEl.innerHTML = wSorted.map(p => `<span class="captured-mini">${PIECE_SVGS[p]}</span>`).join('');
  blackCapturedEl.innerHTML = bSorted.map(p => `<span class="captured-mini">${PIECE_SVGS[p]}</span>`).join('');

  const wScore = wSorted.reduce((sum, p) => sum + PIECE_VALUES[p[1]], 0);
  const bScore = bSorted.reduce((sum, p) => sum + PIECE_VALUES[p[1]], 0);
  const diff = wScore - bScore;

  whiteAdvEl.textContent = diff > 0 ? `+${diff}` : '';
  blackAdvEl.textContent = diff < 0 ? `+${Math.abs(diff)}` : '';
}

function renderMoveHistory() {
  if (moveLog.length === 0) {
    moveListEl.innerHTML = `<div class="empty-history">Make a move to start the game</div>`;
    return;
  }

  let html = '';
  for (let i = 0; i < moveLog.length; i += 2) {
    const moveNum = Math.floor(i / 2) + 1;
    const wPly = i + 1;
    const bPly = i + 2;
    const wMove = moveLog[i];
    const bMove = moveLog[i + 1] || '';

    html += `
      <div class="move-row">
        <span class="move-num">${moveNum}.</span>
        <span class="move-cell ${viewIndex === wPly ? 'active-ply' : ''}" data-ply="${wPly}">${wMove}</span>
        <span class="move-cell ${bMove && viewIndex === bPly ? 'active-ply' : ''}" data-ply="${bMove ? bPly : ''}">${bMove}</span>
      </div>
    `;
  }

  moveListEl.innerHTML = html;
  moveListEl.querySelectorAll('.move-cell[data-ply]').forEach(cell => {
    const ply = Number(cell.dataset.ply);
    if (ply) cell.addEventListener('click', () => goToSnapshot(ply));
  });

  if (viewIndex === snapshots.length - 1) {
    moveListEl.scrollTop = moveListEl.scrollHeight;
  }
}

function renderBoard() {
  const snap = snapshots[viewIndex] || { board, lastMove, turn };
  const displayBoard = snap.board;
  const displayLast = snap.lastMove;
  const isLive = (viewIndex === snapshots.length - 1);

  const inCheck = isKingInCheck(displayBoard, snap.turn);
  const checkedKing = inCheck ? findKing(displayBoard, snap.turn) : null;

  boardEl.innerHTML = '';

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const sq = document.createElement('div');
      const isLight = (r + c) % 2 === 0;
      sq.className = `square ${isLight ? 'light' : 'dark'}`;
      sq.dataset.r = r;
      sq.dataset.c = c;

      if (displayLast &&
          ((displayLast.from.r === r && displayLast.from.c === c) ||
           (displayLast.to.r === r && displayLast.to.c === c))) {
        sq.classList.add('last-move');
      }

      if (isLive && selected && selected.r === r && selected.c === c) {
        sq.classList.add('selected');
      }

      if (checkedKing && checkedKing.r === r && checkedKing.c === c) {
        sq.classList.add('in-check');
      }

      // In-Square Coordinates
      if (!isBoardFlipped) {
        if (c === 0) {
          const rankEl = document.createElement('span');
          rankEl.className = 'sq-coord rank-normal';
          rankEl.textContent = RANKS[r];
          sq.appendChild(rankEl);
        }
        if (r === 7) {
          const fileEl = document.createElement('span');
          fileEl.className = 'sq-coord file-normal';
          fileEl.textContent = FILES[c];
          sq.appendChild(fileEl);
        }
      } else {
        if (c === 7) {
          const rankEl = document.createElement('span');
          rankEl.className = 'sq-coord rank-flipped';
          rankEl.textContent = RANKS[r];
          sq.appendChild(rankEl);
        }
        if (r === 0) {
          const fileEl = document.createElement('span');
          fileEl.className = 'sq-coord file-flipped';
          fileEl.textContent = FILES[c];
          sq.appendChild(fileEl);
        }
      }

      if (isLive) {
        const moveTarget = legalMoves.find(m => m.r === r && m.c === c);
        if (moveTarget) {
          const indicator = document.createElement('div');
          indicator.className = moveTarget.capture ? 'capture-ring' : 'move-dot';
          sq.appendChild(indicator);
        }
      }

      const piece = displayBoard[r][c];
      if (piece) {
        const pieceEl = document.createElement('div');
        pieceEl.className = 'piece';
        pieceEl.innerHTML = PIECE_SVGS[piece];
        sq.appendChild(pieceEl);
      }

      sq.addEventListener('click', () => handleSquareClick(r, c));
      boardEl.appendChild(sq);
    }
  }
}

function resetGame(keepResolvedSide = false) {
  clearSlideAnimation();
  stopClock();
  clearTimeout(botTimer);
  botThinking = false;
  resetConfirmButtons();

  if (gameMode === 'bot' && !keepResolvedSide) {
    const choice = botSideSelect.value;
    humanColor = choice === 'random' ? (Math.random() < 0.5 ? 'w' : 'b') : choice;
  }

  const [secs, inc] = timeControlSelect.value.split('|').map(Number);
  baseSeconds = secs;
  incrementSeconds = inc;
  whiteTime = baseSeconds;
  blackTime = baseSeconds;
  clockStarted = false;
  clockPaused = false;
  whiteLowWarned = false;
  blackLowWarned = false;
  lastWhiteTickSec = -1;
  lastBlackTickSec = -1;
  pauseBtn.textContent = '⏸';

  board = cloneBoard(INITIAL_BOARD);
  turn = 'w';
  selected = null;
  legalMoves = [];
  castling = { wK: true, wQ: true, bK: true, bQ: true };
  epTarget = null;
  lastMove = null;
  gameOver = false;
  gameResult = '*';
  halfMoveClock = 0;
  positionCounts = {};
  history = [];
  snapshots = [];
  moveLog = [];
  capturedByWhite = [];
  capturedByBlack = [];
  pendingPromotion = null;
  promoOverlay.classList.remove('active');
  rematchBtn.classList.add('hidden');

  const startKey = getPositionKey(board, 'w', castling, null);
  positionCounts[startKey] = 1;
  saveSnapshot();

  syncPlayerNameInputs();
  updateOrientationForCurrentState();

  statusBanner.className = 'status-banner';
  statusText.textContent = `${getPlayerDisplayName('w')} to Move`;
  renderCaptured();
  renderMoveHistory();
  renderClocks();
  renderBoard();

  if (gameMode === 'bot' && humanColor === 'b') {
    maybeTriggerBotMove();
  }
}

// ==========================================
// UI EVENT LISTENERS
// ==========================================
document.getElementById('newGameBtn').addEventListener('click', () => resetGame(false));

rematchBtn.addEventListener('click', () => {
  if (gameMode === 'bot') {
    humanColor = humanColor === 'w' ? 'b' : 'w';
    if (botSideSelect.value !== 'random') botSideSelect.value = humanColor;
    resetGame(true);
  } else {
    const temp = savedWhiteName;
    savedWhiteName = savedBlackName;
    savedBlackName = temp;
    resetGame(false);
  }
});

modePassBtn.addEventListener('click', () => {
  if (gameMode === 'pass') return;
  gameMode = 'pass';
  modePassBtn.classList.add('active');
  modeBotBtn.classList.remove('active');
  botSettingsEl.classList.add('hidden');
  flipToggleBtn.disabled = false;
  resetGame(false);
});

modeBotBtn.addEventListener('click', () => {
  if (gameMode === 'bot') return;
  gameMode = 'bot';
  modeBotBtn.classList.add('active');
  modePassBtn.classList.remove('active');
  botSettingsEl.classList.remove('hidden');
  flipToggleBtn.disabled = true;
  resetGame(false);
});

botLevelSelect.addEventListener('change', () => {
  botLevel = Number(botLevelSelect.value);
  syncPlayerNameInputs();
});

botSideSelect.addEventListener('change', () => resetGame(false));
timeControlSelect.addEventListener('change', () => resetGame(false));

// One-click Theme Switcher
themeButtons.forEach(btn => {
  btn.addEventListener('click', () => applyTheme(btn.dataset.theme));
});

pieceStyleSelect.addEventListener('change', () => applyPieceStyle(pieceStyleSelect.value));

soundPackSelect.addEventListener('change', () => {
  applySoundPack(soundPackSelect.value);
  playSound('move');
});

whiteNameInput.addEventListener('input', () => {
  if (gameMode === 'pass' || humanColor === 'w') savedWhiteName = whiteNameInput.value || 'White';
});

blackNameInput.addEventListener('input', () => {
  if (gameMode === 'pass' || humanColor === 'b') savedBlackName = blackNameInput.value || 'Black';
});

pauseBtn.addEventListener('click', () => {
  if (!clockStarted || gameOver || baseSeconds === 0) return;
  clockPaused = !clockPaused;
  pauseBtn.textContent = clockPaused ? '▶' : '⏸';
  statusText.textContent = clockPaused ? 'Clock Paused' : `${getPlayerDisplayName(turn)} to Move`;
});

flipToggleBtn.addEventListener('click', () => {
  autoFlip = !autoFlip;
  flipToggleBtn.textContent = `🔄 Auto-Flip: ${autoFlip ? 'On' : 'Off'}`;
  flipToggleBtn.classList.toggle('toggle-active', autoFlip);
  updateOrientationForCurrentState();
  renderBoard();
});

soundToggleBtn.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  soundToggleBtn.textContent = `🔊 Sound: ${soundEnabled ? 'On' : 'Off'}`;
  soundToggleBtn.classList.toggle('toggle-active', soundEnabled);
});

resignBtn.addEventListener('click', () => {
  if (gameOver || pendingPromotion) return;
  if (!confirmResign) {
    resetConfirmButtons();
    confirmResign = true;
    resignBtn.textContent = 'Confirm Resign?';
    resignBtn.classList.add('confirm-pulse');
    return;
  }
  const loser = gameMode === 'bot' ? humanColor : turn;
  const winner = loser === 'w' ? 'b' : 'w';
  const code = winner === 'w' ? '1-0' : '0-1';
  finishGame(code, `${getPlayerDisplayName(loser)} Resigned — ${getPlayerDisplayName(winner)} Wins!`, 'win');
});

drawBtn.addEventListener('click', () => {
  if (gameOver || pendingPromotion) return;
  if (gameMode === 'bot') {
    const score = evaluateBoard(board);
    const botAdvantage = humanColor === 'w' ? -score : score;
    if (botAdvantage <= 80 && moveLog.length >= 6) {
      finishGame('1/2-1/2', 'Draw Agreed with Bot');
    } else {
      statusBanner.className = 'status-banner review';
      statusText.textContent = 'Bot declined your draw offer.';
    }
    return;
  }
  if (!confirmDraw) {
    resetConfirmButtons();
    confirmDraw = true;
    drawBtn.textContent = 'Accept Draw?';
    drawBtn.classList.add('confirm-pulse');
    return;
  }
  finishGame('1/2-1/2', 'Draw by Mutual Agreement');
});

copyPgnBtn.addEventListener('click', async () => {
  const pgn = generatePGN();
  try {
    await navigator.clipboard.writeText(pgn);
  } catch (e) {
    const ta = document.createElement('textarea');
    ta.value = pgn;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
  const orig = copyPgnBtn.textContent;
  copyPgnBtn.textContent = '✅ PGN Copied!';
  setTimeout(() => { copyPgnBtn.textContent = orig; }, 1800);
});

undoBtn.addEventListener('click', () => {
  if (history.length === 0 || pendingPromotion) return;
  clearSlideAnimation();
  clearTimeout(botTimer);
  botThinking = false;
  resetConfirmButtons();

  const stepsToUndo = (gameMode === 'bot' && turn === humanColor && history.length >= 2) ? 2 : 1;
  let prev = null;
  for (let i = 0; i < stepsToUndo && history.length > 0; i++) {
    prev = history.pop();
    snapshots.pop();
  }
  if (!prev) return;

  board = prev.board;
  turn = prev.turn;
  castling = prev.castling;
  epTarget = prev.epTarget;
  lastMove = prev.lastMove;
  gameOver = prev.gameOver;
  gameResult = prev.gameResult;
  halfMoveClock = prev.halfMoveClock;
  positionCounts = prev.positionCounts;
  moveLog = prev.moveLog;
  capturedByWhite = prev.capturedByWhite;
  capturedByBlack = prev.capturedByBlack;
  whiteTime = prev.whiteTime;
  blackTime = prev.blackTime;
  selected = null;
  legalMoves = [];
  viewIndex = snapshots.length - 1;
  rematchBtn.classList.add('hidden');

  if (moveLog.length === 0) {
    stopClock();
    clockStarted = false;
  } else if (!gameOver && baseSeconds > 0 && !clockInterval) {
    startClockLoop();
  }

  updateOrientationForCurrentState();
  const inCheck = isKingInCheck(board, turn);
  statusBanner.className = inCheck ? 'status-banner alert' : 'status-banner';
  statusText.textContent = inCheck
    ? `${getPlayerDisplayName(turn)} is in Check!`
    : `${getPlayerDisplayName(turn)} to Move`;

  renderCaptured();
  renderMoveHistory();
  renderClocks();
  renderBoard();
});

document.getElementById('histFirstBtn').addEventListener('click', () => goToSnapshot(0));
document.getElementById('histPrevBtn').addEventListener('click', () => goToSnapshot(viewIndex - 1));
document.getElementById('histNextBtn').addEventListener('click', () => goToSnapshot(viewIndex + 1));
document.getElementById('histLastBtn').addEventListener('click', () => goToSnapshot(snapshots.length - 1));

document.addEventListener('keydown', (e) => {
  if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'SELECT') return;
  if (e.key === 'ArrowLeft') goToSnapshot(viewIndex - 1);
  if (e.key === 'ArrowRight') goToSnapshot(viewIndex + 1);
});

loadSavedPreferences();
resetGame(false);
