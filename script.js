// Crisp Staunton-style SVG vectors
const PIECE_SVGS = {
  wK: `<svg viewBox="0 0 45 45"><g fill="#fff" stroke="#1c1917" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6M20 8h5"/><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/><path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z"/><path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0" fill="none"/></g></svg>`,
  wQ: `<svg viewBox="0 0 45 45"><g fill="#fff" stroke="#1c1917" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="2.2"/><circle cx="14" cy="9" r="2.2"/><circle cx="22.5" cy="8" r="2.2"/><circle cx="31" cy="9" r="2.2"/><circle cx="39" cy="12" r="2.2"/><path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-14V25L7 14l2 12z"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" fill="none"/></g></svg>`,
  wR: `<svg viewBox="0 0 45 45"><g fill="#fff" stroke="#1c1917" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5"/><path d="M34 14l-3 3H14l-3-3"/><path d="M31 17v12.5H14V17"/><path d="M31 29.5l1.5 2.5h-20l1.5-2.5"/><path d="M11 14h23" fill="none"/></g></svg>`,
  wB: `<svg viewBox="0 0 45 45"><g fill="#fff" stroke="#1c1917" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><circle cx="22.5" cy="8" r="2.5"/><path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" fill="none"/></g></svg>`,
  wN: `<svg viewBox="0 0 45 45"><g fill="#fff" stroke="#1c1917" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/><circle cx="9.5" cy="25.5" r=".7" fill="#1c1917"/><circle cx="14.93" cy="15.75" r="1" fill="#1c1917"/></g></svg>`,
  wP: `<svg viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#fff" stroke="#1c1917" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  bK: `<svg viewBox="0 0 45 45"><g fill="#262320" stroke="#111" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6M20 8h5"/><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/><path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z"/><path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0" fill="none" stroke="#e5dfd7"/></g></svg>`,
  bQ: `<svg viewBox="0 0 45 45"><g fill="#262320" stroke="#111" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="2.2"/><circle cx="14" cy="9" r="2.2"/><circle cx="22.5" cy="8" r="2.2"/><circle cx="31" cy="9" r="2.2"/><circle cx="39" cy="12" r="2.2"/><path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-14V25L7 14l2 12z"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" fill="none" stroke="#e5dfd7"/></g></svg>`,
  bR: `<svg viewBox="0 0 45 45"><g fill="#262320" stroke="#111" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zM12.5 32l1.5-2.5h17l1.5 2.5h-20zM12 36v-4h21v4H12z"/><path d="M14 29.5v-13h17v13H14z"/><path d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z"/><path d="M12 35.5h21M13 31.5h19M14 29.5h17M14 16.5h17M11 14h23" fill="none" stroke="#e5dfd7" stroke-width="1.2"/></g></svg>`,
  bB: `<svg viewBox="0 0 45 45"><g fill="#262320" stroke="#111" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><circle cx="22.5" cy="8" r="2.5"/><path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" fill="none" stroke="#e5dfd7" stroke-width="1.4"/></g></svg>`,
  bN: `<svg viewBox="0 0 45 45"><g fill="#262320" stroke="#111" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/><circle cx="9.5" cy="25.5" r=".7" fill="#e5dfd7" stroke="#e5dfd7"/><circle cx="14.93" cy="15.75" r="1" fill="#e5dfd7" stroke="#e5dfd7"/></g></svg>`,
  bP: `<svg viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#262320" stroke="#111" stroke-width="1.6" stroke-linecap="round"/></svg>`
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

let board = [];
let turn = 'w';
let selected = null;
let legalMoves = [];
let castling = { wK: true, wQ: true, bK: true, bQ: true };
let epTarget = null;
let lastMove = null;
let gameOver = false;
let history = [];
let pendingPromotion = null;

const boardEl = document.getElementById('board');
const statusText = document.getElementById('statusText');
const turnSwatch = document.getElementById('turnSwatch');
const alertBadge = document.getElementById('alertBadge');
const promoOverlay = document.getElementById('promoOverlay');
const promoChoices = document.getElementById('promoChoices');

function initCoords() {
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];

  ['filesTop', 'filesBottom'].forEach(id => {
    document.getElementById(id).innerHTML = files
      .map(f => `<span class="coord-label">${f}</span>`).join('');
  });

  ['ranksLeft', 'ranksRight'].forEach(id => {
    document.getElementById(id).innerHTML = ranks
      .map(r => `<span class="coord-label">${r}</span>`).join('');
  });
}

function setBoardOrientation(activeColor) {
  const angle = activeColor === 'b' ? '180deg' : '0deg';
  const counter = activeColor === 'b' ? '-180deg' : '0deg';
  document.documentElement.style.setProperty('--board-rot', angle);
  document.documentElement.style.setProperty('--counter-rot', counter);
}

function cloneBoard(b) {
  return b.map(row => [...row]);
}

function inBounds(r, c) {
  return r >= 0 && r < 8 && c >= 0 && c < 8;
}

function isSquareAttacked(b, targetR, targetC, byColor) {
  const pawnDir = byColor === 'w' ? 1 : -1;
  for (const dc of [-1, 1]) {
    const pr = targetR + pawnDir;
    const pc = targetC + dc;
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
  const enemy = color === 'w' ? 'b' : 'w';
  return isSquareAttacked(b, kingPos.r, kingPos.c, enemy);
}

function getPseudoMoves(b, r, c, castlingRights, ep) {
  const piece = b[r][c];
  if (!piece) return [];
  const color = piece[0];
  const type = piece[1];
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
      if (b[nr][nc] && b[nr][nc][0] === enemy) {
        moves.push({ r: nr, c: nc, capture: true });
      } else if (ep && ep.r === nr && ep.c === nc) {
        moves.push({ r: nr, c: nc, capture: true, enPassant: true });
      }
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
        if (!b[nr][nc]) {
          moves.push({ r: nr, c: nc });
        } else {
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
          !b[homeRow][5] && !b[homeRow][6] &&
          b[homeRow][7] === `${color}R` &&
          !isSquareAttacked(b, homeRow, 5, enemy) &&
          !isSquareAttacked(b, homeRow, 6, enemy)) {
        moves.push({ r: homeRow, c: 6, castle: 'K' });
      }
      if (castlingRights[`${color}Q`] &&
          !b[homeRow][3] && !b[homeRow][2] && !b[homeRow][1] &&
          b[homeRow][0] === `${color}R` &&
          !isSquareAttacked(b, homeRow, 3, enemy) &&
          !isSquareAttacked(b, homeRow, 2, enemy)) {
        moves.push({ r: homeRow, c: 2, castle: 'Q' });
      }
    }
  }

  return moves;
}

function applyMoveToBoard(b, from, move, promoType = 'Q') {
  const next = cloneBoard(b);
  const piece = next[from.r][from.c];
  const color = piece[0];
  const type = piece[1];

  next[from.r][from.c] = null;

  if (move.enPassant) {
    next[from.r][move.c] = null;
  }

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

function getLegalMoves(b, r, c, castlingRights, ep) {
  const piece = b[r][c];
  if (!piece) return [];
  const color = piece[0];
  return getPseudoMoves(b, r, c, castlingRights, ep).filter(move => {
    const sim = applyMoveToBoard(b, { r, c }, move);
    return !isKingInCheck(sim, color);
  });
}

function hasAnyLegalMoves(b, color, castlingRights, ep) {
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      if (b[r][c] && b[r][c][0] === color) {
        if (getLegalMoves(b, r, c, castlingRights, ep).length > 0) return true;
      }
    }
  }
  return false;
}

function executeMove(from, move, promoType = 'Q') {
  history.push({
    board: cloneBoard(board),
    turn,
    castling: { ...castling },
    epTarget: epTarget ? { ...epTarget } : null,
    lastMove: lastMove ? { ...lastMove } : null,
    gameOver
  });

  const movingPiece = board[from.r][from.c];
  const color = movingPiece[0];
  const type = movingPiece[1];

  board = applyMoveToBoard(board, from, move, promoType);

  if (type === 'K') {
    castling[`${color}K`] = false;
    castling[`${color}Q`] = false;
  }
  if (from.r === 7 && from.c === 0) castling.wQ = false;
  if (from.r === 7 && from.c === 7) castling.wK = false;
  if (from.r === 0 && from.c === 0) castling.bQ = false;
  if (from.r === 0 && from.c === 7) castling.bK = false;
  if (move.r === 7 && move.c === 0) castling.wQ = false;
  if (move.r === 7 && move.c === 7) castling.wK = false;
  if (move.r === 0 && move.c === 0) castling.bQ = false;
  if (move.r === 0 && move.c === 7) castling.bK = false;

  if (move.doublePawn) {
    epTarget = { r: (from.r + move.r) / 2, c: from.c };
  } else {
    epTarget = null;
  }

  lastMove = { from, to: { r: move.r, c: move.c } };
  selected = null;
  legalMoves = [];

  turn = turn === 'w' ? 'b' : 'w';
  updateStatus();
  renderBoard();

  if (!gameOver) {
    setBoardOrientation(turn);
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
  if (gameOver || pendingPromotion) return;

  const chosenMove = legalMoves.find(m => m.r === r && m.c === c);
  if (selected && chosenMove) {
    const piece = board[selected.r][selected.c];
    const isPromo = piece[1] === 'P' && (chosenMove.r === 0 || chosenMove.r === 7);
    if (isPromo) {
      promptPromotion(selected, chosenMove);
    } else {
      executeMove(selected, chosenMove);
    }
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

function updateStatus() {
  const inCheck = isKingInCheck(board, turn);
  const anyMoves = hasAnyLegalMoves(board, turn, castling, epTarget);
  const playerName = turn === 'w' ? 'White' : 'Black';

  turnSwatch.className = `turn-swatch ${turn === 'b' ? 'black' : ''}`;
  alertBadge.className = 'alert-badge';

  if (!anyMoves) {
    gameOver = true;
    if (inCheck) {
      const winner = turn === 'w' ? 'Black' : 'White';
      statusText.textContent = `${winner} Wins!`;
      alertBadge.textContent = 'Checkmate';
      alertBadge.classList.add('visible');
    } else {
      statusText.textContent = 'Game Drawn';
      alertBadge.textContent = 'Stalemate';
      alertBadge.classList.add('visible', 'draw');
    }
  } else {
    gameOver = false;
    statusText.textContent = `${playerName} to Move`;
    if (inCheck) {
      alertBadge.textContent = 'Check!';
      alertBadge.classList.add('visible');
    }
  }
}

function renderBoard() {
  const inCheck = isKingInCheck(board, turn);
  const checkedKing = inCheck ? findKing(board, turn) : null;

  boardEl.innerHTML = '';

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const sq = document.createElement('div');
      const isLight = (r + c) % 2 === 0;
      sq.className = `square ${isLight ? 'light' : 'dark'}`;

      if (lastMove &&
          ((lastMove.from.r === r && lastMove.from.c === c) ||
           (lastMove.to.r === r && lastMove.to.c === c))) {
        sq.classList.add('last-move');
      }

      if (selected && selected.r === r && selected.c === c) {
        sq.classList.add('selected');
      }

      if (checkedKing && checkedKing.r === r && checkedKing.c === c) {
        sq.classList.add('in-check');
      }

      const moveTarget = legalMoves.find(m => m.r === r && m.c === c);
      if (moveTarget) {
        const indicator = document.createElement('div');
        indicator.className = moveTarget.capture ? 'capture-ring' : 'move-dot';
        sq.appendChild(indicator);
      }

      const piece = board[r][c];
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

function resetGame() {
  board = cloneBoard(INITIAL_BOARD);
  turn = 'w';
  selected = null;
  legalMoves = [];
  castling = { wK: true, wQ: true, bK: true, bQ: true };
  epTarget = null;
  lastMove = null;
  gameOver = false;
  history = [];
  pendingPromotion = null;
  promoOverlay.classList.remove('active');
  setBoardOrientation('w');
  updateStatus();
  renderBoard();
}

document.getElementById('newGameBtn').addEventListener('click', resetGame);

document.getElementById('undoBtn').addEventListener('click', () => {
  if (history.length === 0 || pendingPromotion) return;
  const prev = history.pop();
  board = prev.board;
  turn = prev.turn;
  castling = prev.castling;
  epTarget = prev.epTarget;
  lastMove = prev.lastMove;
  gameOver = prev.gameOver;
  selected = null;
  legalMoves = [];
  setBoardOrientation(turn);
  updateStatus();
  renderBoard();
});

initCoords();
resetGame();