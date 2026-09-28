import { reachable } from './graph-utils.mjs';
const $ = selector => document.querySelector(selector);
const canvas = $('#universe');
const ctx = canvas.getContext('2d', { alpha: false });
const TAU = Math.PI * 2;
const COLORS = ['#5abdff', '#ff7956', '#aa7951', '#b7a7cd'];
const colorIndex = kind => kind === 'definition' ? 0
  : ['theorem', 'lemma', 'proposition', 'corollary'].includes(kind) ? 1
  : ['example', 'counterexample', 'false-statement'].includes(kind) ? 2 : 3;
const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
function random(seed) {
  return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t ^= t + Math.imul(t ^ t >>> 7, 61 | t); return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
const rng = random(41721);
const makeCanvas = size => { const c = document.createElement('canvas'); c.width = c.height = size; return c; };
const sprites = COLORS.map(color => {
  const c = makeCanvas(48), cctx = c.getContext('2d');
  const glow = cctx.createRadialGradient(24, 24, 0, 24, 24, 24);
  glow.addColorStop(0, '#ffffff'); glow.addColorStop(.07, color);
  glow.addColorStop(.2, color + '90'); glow.addColorStop(.5, color + '20'); glow.addColorStop(1, color + '00');
  cctx.fillStyle = glow; cctx.fillRect(0, 0, 48, 48); return c;
});
let graph, nodes, prerequisites, consumers, visible, selected, width, height, unit;
let zoom = 1, panX = 0, panY = 0, rotation = -.32;
let paused = matchMedia('(prefers-reduced-motion: reduce)').matches;
let direction = 'dependencies', hovered = -1, closure = new Set();
let pointer = null, lastTime = 0, frameId = 0, dirty = true, loaded = false;
let starLayer, highlightedLayer, backdrop;
const LAYER_SIZE = 3000, WORLD_EXTENT = 1.12, CELL = .025;
const cells = new Map();
const pointers = new Map();
let gesture = null, moved = false, pinned = false;


function layout() {
  const categories = graph.categories.filter(c => c.id !== 'foundations');
  const categoryIndex = new Map(categories.map((c, i) => [c.id, i]));
  // Stable spiral sectors preserve each subject's neighborhood; foundations occupy the core.
  nodes.forEach((node, i) => {
    const core = node.categories.includes('foundations');
    const category = categoryIndex.get(node.categories[0]) ?? 0;
    const radial = Math.sqrt(rng());
    const band = Math.floor(category / 5), bands = Math.ceil(categories.length / 5);
    const radius = core ? .15 * radial : .12 + .85 * Math.pow((band + rng()) / bands, .78);
    const spread = (rng() - rng()) * (rng() < .12 ? .9 : .22);
    const angle = core ? rng() * TAU : (category % 5) / 5 * TAU + radius * 3.5 + spread;
    node.x = Math.cos(angle) * radius;
    node.y = Math.sin(angle) * radius;
    node.color = colorIndex(node.kind);
    node.size = .55 + rng() * .85 + Math.min(1, Math.log1p(consumers[i].length) * .16);
    const key = `${Math.floor(node.x / CELL)},${Math.floor(node.y / CELL)}`;
    if (!cells.has(key)) cells.set(key, []);
    cells.get(key).push(i);
  });
}
function layerPoint(node) {
  return [(node.x / WORLD_EXTENT + 1) * LAYER_SIZE / 2, (node.y / WORLD_EXTENT + 1) * LAYER_SIZE / 2];
}
function paintStars(layer, indices, vivid = false) {
  const c = layer.getContext('2d'); c.clearRect(0, 0, LAYER_SIZE, LAYER_SIZE);
  c.globalCompositeOperation = 'lighter';
  for (const i of indices) {
    if (!visible[i]) continue;
    const node = nodes[i], [x, y] = layerPoint(node);
    const size = node.size * (vivid ? 11 : 9);
    c.globalAlpha = vivid ? 1 : .88;
    c.drawImage(sprites[node.color], x - size / 2, y - size / 2, size, size);
    c.globalAlpha = vivid ? 1 : .85;
    c.fillStyle = COLORS[node.color]; c.beginPath(); c.arc(x, y, node.size * (vivid ? .9 : .65), 0, TAU); c.fill();
  }
  c.globalAlpha = 1;
}
function makeBackdrop() {
  backdrop = makeCanvas(1800);
  const c = backdrop.getContext('2d'), rand = random(718);
  c.translate(900, 900); c.globalCompositeOperation = 'lighter';
  const cloud = (x, y, radius, color) => {
    const g = c.createRadialGradient(x, y, 0, x, y, radius);
    g.addColorStop(0, color); g.addColorStop(1, 'transparent');
    c.fillStyle = g; c.fillRect(x - radius, y - radius, radius * 2, radius * 2);
  };
  for (let arm = 0; arm < 5; arm++) {
    for (let step = 0; step < 90; step++) {
      const r = 90 + step * 7.3, a = arm * TAU / 5 + r / 220;
      cloud(Math.cos(a) * r, Math.sin(a) * r, 45 + r * .16, step % 3 ? '#16417809' : '#71513608');
    }
  }
  cloud(0, 0, 390, '#20478224'); cloud(0, 0, 150, '#6595d42a'); cloud(0, 0, 55, '#bad9f537');
  // Faint dust provides depth, while the brighter colored points are actual library items.
  for (let i = 0; i < 13000; i++) {
    const r = Math.sqrt(rand()) * 800, a = rand() * TAU;
    c.fillStyle = i % 4 ? '#5483bb13' : '#b9937416';
    c.fillRect(Math.cos(a) * r, Math.sin(a) * r, .6 + rand(), .6 + rand());
  }
}
function resize() {
  width = innerWidth; height = innerHeight;
  const dpr = Math.min(devicePixelRatio || 1, 2);
  canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  unit = Math.min(width * .44, height * .58);
  dirty = true; schedule();
}
// Inclined galactic disc: its own rotation is distinct from the fixed camera tilt.
function toScreen(x, y) {
  const c = Math.cos(rotation), s = Math.sin(rotation);
  const xx = x * c - y * s, yy = (x * s + y * c) * .69;
  const tilt = -.19, a = Math.cos(tilt), b = Math.sin(tilt);
  return [width / 2 + panX + (xx * a - yy * b) * unit * zoom,
    height / 2 + panY + (xx * b + yy * a) * unit * zoom];
}
function toWorld(x, y) {
  x = (x - width / 2 - panX) / (unit * zoom); y = (y - height / 2 - panY) / (unit * zoom);
  const tilt = .19, a = Math.cos(tilt), b = Math.sin(tilt);
  const xx = x * a - y * b, yy = (x * b + y * a) / .69;
  return [xx * Math.cos(rotation) + yy * Math.sin(rotation), -xx * Math.sin(rotation) + yy * Math.cos(rotation)];
}
function transformGalaxy() {
  ctx.translate(width / 2 + panX, height / 2 + panY);
  ctx.scale(unit * zoom, unit * zoom); ctx.rotate(-.19); ctx.scale(1, .69); ctx.rotate(rotation);
}
function drawLayer(layer) { ctx.drawImage(layer, -WORLD_EXTENT, -WORLD_EXTENT, WORLD_EXTENT * 2, WORLD_EXTENT * 2); }
function render(time) {
  frameId = 0;
  if (!loaded || document.hidden) return;
  const elapsed = Math.min((time - lastTime) / 1000 || 0, .05); lastTime = time;
  const rotating = !paused && hovered < 0 && !pointers.size;
  if (rotating) { rotation += elapsed * .018; dirty = true; }
  if (dirty) {
    ctx.fillStyle = '#03050c'; ctx.fillRect(0, 0, width, height);
    // Fixed, understated distant stars.
    const rand = random(52);
    for (let i = 0; i < 260; i++) {
      ctx.fillStyle = i % 7 ? '#849abb28' : '#b4cdec65';
      ctx.fillRect(rand() * width, rand() * height, i % 7 ? .7 : 1.1, i % 7 ? .7 : 1.1);
    }
    ctx.save(); transformGalaxy();
    ctx.globalAlpha = hovered < 0 ? 1 : .25; drawLayer(backdrop);
    if (zoom <= 2.5) {
      ctx.globalAlpha = hovered < 0 ? 1 : .14; drawLayer(starLayer);
      ctx.globalAlpha = 1;
      if (hovered >= 0) drawLayer(highlightedLayer);
    }
    ctx.restore();
    if (zoom > 2.5) drawDetail();
    if (hovered >= 0) {
      const [x, y] = toScreen(nodes[hovered].x, nodes[hovered].y);
      ctx.strokeStyle = '#deecffbb'; ctx.lineWidth = .8;
      ctx.beginPath(); ctx.arc(x, y, 8, 0, TAU); ctx.stroke();
    }
    dirty = false;
  }
  if (rotating) schedule();
}
// At close range, redraw visible stars at screen resolution instead of magnifying a bitmap.
function drawDetail() {
  ctx.save(); ctx.globalCompositeOperation = 'lighter';
  for (let i = 0; i < nodes.length; i++) {
    if (!visible[i]) continue;
    const node = nodes[i], [x, y] = toScreen(node.x, node.y);
    if (x < -20 || x > width + 20 || y < -20 || y > height + 20) continue;
    const lit = hovered === i || closure.has(i);
    ctx.globalAlpha = hovered < 0 || lit ? 1 : .12;
    const size = node.size * (hovered >= 0 && lit ? 14 : 10);
    ctx.drawImage(sprites[node.color], x - size / 2, y - size / 2, size, size);
    ctx.fillStyle = COLORS[node.color];
    ctx.beginPath(); ctx.arc(x, y, node.size * .7, 0, TAU); ctx.fill();
  }
  ctx.restore();
}
function schedule() { if (!frameId && !document.hidden) frameId = requestAnimationFrame(render); }
function hitTest(x, y) {
  const [wx, wy] = toWorld(x, y), radius = 9 / (unit * zoom * .69);
  let best = -1, distance = 81;
  for (let cx = Math.floor((wx - radius) / CELL); cx <= Math.floor((wx + radius) / CELL); cx++) {
    for (let cy = Math.floor((wy - radius) / CELL); cy <= Math.floor((wy + radius) / CELL); cy++) {
      for (const i of cells.get(`${cx},${cy}`) ?? []) {
        if (!visible[i]) continue;
        const [sx, sy] = toScreen(nodes[i].x, nodes[i].y), d = (sx - x) ** 2 + (sy - y) ** 2;
        if (d < distance) { best = i; distance = d; }
      }
    }
  }
  return best;
}
function updateTooltip() {
  if (hovered < 0) return;
  const node = nodes[hovered], tip = $('#tooltip');
  $('#tip-kind').textContent = node.kind.replaceAll('-', ' ');
  $('#tip-kind').style.color = COLORS[node.color];
  $('#tip-title').textContent = node.title;
  const visibleCount = [...closure].filter(i => visible[i]).length;
  $('#tip-detail').textContent = `${closure.size.toLocaleString()} ${direction === 'dependencies' ? 'prerequisites' : 'downstream consumers'} · ${visibleCount.toLocaleString()} visible`;
  tip.href = `https://alphabetamath.cc/item/${encodeURIComponent(node.id)}`;
  tip.hidden = false;
  const [x, y] = toScreen(node.x, node.y);
  tip.style.left = `${clamp(x + 18, 12, width - tip.offsetWidth - 12)}px`;
  tip.style.top = `${clamp(y + 18, 12, height - tip.offsetHeight - 60)}px`;
}
function inspect(index) {
  if (hovered === index) return;
  hovered = index;
  document.body.classList.toggle('inspecting', index >= 0);
  $('#tooltip').hidden = index < 0;
  if (index >= 0) {
    closure = reachable(index, direction === 'dependencies' ? prerequisites : consumers);
    paintStars(highlightedLayer, [index, ...closure], true);
    updateTooltip();
  }
  dirty = true; schedule();
}
function refilter() {
  visible = nodes.map(n => n.categories.some(c => selected.has(c)));
  inspect(-1); pinned = false;
  paintStars(starLayer, nodes.keys());
  const count = visible.filter(Boolean).length;
  $('#census').textContent = `${count.toLocaleString()} / ${nodes.length.toLocaleString()} stars`;
  $('#status').textContent = count ? '' : 'Select a constellation to explore';
  $('#status').hidden = count > 0;
  updateSearch(); dirty = true; schedule();
}
function updateSearch() {
  const query = $('#search').value.trim().toLowerCase(), results = $('#results');
  results.replaceChildren();
  if (!query) return;
  const matches = nodes.filter((n, i) => visible[i] && (n.title.toLowerCase().includes(query) || n.id.includes(query))).slice(0, 30);
  for (const node of matches) {
    const a = document.createElement('a'); a.textContent = node.title;
    a.href = `https://alphabetamath.cc/item/${encodeURIComponent(node.id)}`; a.target = '_blank'; a.rel = 'noopener';
    results.append(a);
  }
  if (!matches.length) { const p = document.createElement('p'); p.textContent = 'No matching stars in the selected categories.'; results.append(p); }
}
function setZoom(value, x = width / 2, y = height / 2) {
  const next = clamp(value, .5, 18), ratio = next / zoom;
  panX = x - width / 2 - (x - width / 2 - panX) * ratio;
  panY = y - height / 2 - (y - height / 2 - panY) * ratio;
  zoom = next; inspect(-1); pinned = false; dirty = true; schedule();
}
function syncMotion() {
  $('#motion').setAttribute('aria-pressed', String(paused));
  $('#motion').setAttribute('aria-label', paused ? 'Resume rotation' : 'Pause rotation');
  $('#motion').title = paused ? 'Resume rotation' : 'Pause rotation';
  $('#motion-icon').setAttribute('d', paused ? 'M9 5l10 7-10 7Z' : 'M9 6v12M15 6v12');
  dirty = true; schedule();
}
function bindControls() {
  $('#filters-toggle').onclick = () => {
    const panel = $('#filters'); panel.hidden = !panel.hidden;
    $('#filters-toggle').setAttribute('aria-expanded', String(!panel.hidden));
  };
  for (const category of graph.categories) {
    const label = document.createElement('label'), input = document.createElement('input'), count = document.createElement('small');
    input.type = 'checkbox'; input.checked = true; input.value = category.id;
    count.textContent = nodes.filter(n => n.categories.includes(category.id)).length.toLocaleString();
    label.append(input, document.createTextNode(category.title), count); $('#categories').append(label);
    input.onchange = () => { input.checked ? selected.add(category.id) : selected.delete(category.id); refilter(); };
  }
  for (const all of [true, false]) $(`#select-${all ? 'all' : 'none'}`).onclick = () => {
    selected = new Set(all ? graph.categories.map(c => c.id) : []);
    document.querySelectorAll('#categories input').forEach(input => { input.checked = all; }); refilter();
  };
  document.querySelectorAll('[name=direction]').forEach(input => { input.onchange = () => {
    direction = input.value; const previous = hovered; hovered = -1; inspect(previous);
  }; });
  $('#search').oninput = updateSearch;
  $('#motion').onclick = () => { paused = !paused; syncMotion(); };
  $('#reset').onclick = () => { zoom = 1; panX = panY = 0; rotation = -.32; pinned = false; inspect(-1); dirty = true; schedule(); };
  $('#zoom-in').onclick = () => setZoom(zoom * 1.4);
  $('#zoom-out').onclick = () => setZoom(zoom / 1.4);
  canvas.addEventListener('wheel', event => { event.preventDefault(); setZoom(zoom * Math.exp(-event.deltaY * .001), event.clientX, event.clientY); }, { passive: false });
  canvas.addEventListener('pointerdown', event => {
    canvas.setPointerCapture(event.pointerId);
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    moved = false; pinned = false;
    gesture = { x: event.clientX, y: event.clientY, panX, panY };
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()]; gesture = { distance: Math.hypot(a.x - b.x, a.y - b.y), zoom };
    }
  });
  canvas.addEventListener('pointermove', event => {
    pointer = { x: event.clientX, y: event.clientY };
    if (pointers.has(event.pointerId)) {
      pointers.set(event.pointerId, pointer);
      if (pointers.size === 2 && gesture.distance) {
        const [a, b] = [...pointers.values()];
        setZoom(gesture.zoom * Math.hypot(a.x - b.x, a.y - b.y) / gesture.distance, (a.x + b.x) / 2, (a.y + b.y) / 2); moved = true;
      } else if (pointers.size === 1 && gesture.x !== undefined) {
        const dx = pointer.x - gesture.x, dy = pointer.y - gesture.y;
        if (Math.hypot(dx, dy) > 4) moved = true;
        if (moved) { panX = gesture.panX + dx; panY = gesture.panY + dy; inspect(-1); dirty = true; schedule(); }
      }
    } else if (!pinned) inspect(hitTest(pointer.x, pointer.y));
  });
  canvas.addEventListener('pointerup', event => {
    pointers.delete(event.pointerId);
    if (!moved && !pointers.size) {
      const index = hitTest(event.clientX, event.clientY);
      if (index >= 0 && event.pointerType === 'mouse') window.open(`https://alphabetamath.cc/item/${encodeURIComponent(nodes[index].id)}`, '_blank', 'noopener');
      else { inspect(index); pinned = index >= 0; }
    }
    if (pointers.size === 1) { const a = [...pointers.values()][0]; gesture = { ...a, panX, panY }; moved = true; }
    schedule();
  });
  canvas.addEventListener('pointercancel', event => { pointers.delete(event.pointerId); moved = true; inspect(-1); schedule(); });
  // Keep the tooltip available when crossing into controls or its link.
  canvas.addEventListener('pointerleave', () => { pointer = null; });
  canvas.addEventListener('keydown', event => {
    if (['+', '=', '-','ArrowLeft','ArrowRight','ArrowUp','ArrowDown',' '].includes(event.key)) event.preventDefault();
    if (event.key === '+' || event.key === '=') setZoom(zoom * 1.2);
    if (event.key === '-') setZoom(zoom / 1.2);
    if (event.key === ' ') { paused = !paused; syncMotion(); }
    const moves = { ArrowLeft: [40, 0], ArrowRight: [-40, 0], ArrowUp: [0, 40], ArrowDown: [0, -40] };
    if (moves[event.key]) { panX += moves[event.key][0]; panY += moves[event.key][1]; inspect(-1); dirty = true; schedule(); }
  });
  addEventListener('keydown', event => { if (event.key === 'Escape') { pinned = false; inspect(-1); $('#filters').hidden = true; $('#filters-toggle').setAttribute('aria-expanded', 'false'); } });
  addEventListener('resize', () => { resize(); updateTooltip(); });
  document.addEventListener('visibilitychange', () => { lastTime = performance.now(); schedule(); });
  matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', event => { paused = event.matches; syncMotion(); });
}

async function init() {
  try {
    const response = await fetch('/graph.json');
    if (!response.ok) throw new Error(`Graph request failed (${response.status})`);
    graph = await response.json(); nodes = graph.nodes;
    prerequisites = nodes.map(() => []); consumers = nodes.map(() => []);
    for (const [from, to] of graph.edges) { prerequisites[from].push(to); consumers[to].push(from); }
    selected = new Set(graph.categories.map(c => c.id));
    starLayer = makeCanvas(LAYER_SIZE); highlightedLayer = makeCanvas(LAYER_SIZE);
    layout(); makeBackdrop(); bindControls(); resize(); loaded = true; refilter(); syncMotion();
  } catch (error) {
    $('#status').textContent = 'The stars could not be loaded. Refresh to try again.';
    console.error(error);
  }
}
init();
