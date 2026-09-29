import { reachable } from './graph-utils.mjs';
import { COLORS, clamp, layoutItems, createEnvironment, defaultCamera, project, projectedStarRadius } from './galaxy-model.mjs';
import { GalaxyRenderer } from './renderer.mjs';
import { initMusic } from './music.mjs';
import { renderTitle } from './math-title.mjs';
import { followGraph } from './graph-live.mjs';

const $ = selector => document.querySelector(selector);
const canvas = $('#universe');
const camera = defaultCamera(innerWidth, innerHeight);
const pointers = new Map();
const pickGrid = new Map();
let renderer, graph, nodes, prerequisites, consumers, visible, selected, states;
let width = innerWidth, height = innerHeight, rotation = 0;
let paused = matchMedia('(prefers-reduced-motion: reduce)').matches;
let highlighting = true;
let direction = 'dependencies', hovered = -1, closure = new Set();
let lastTime = 0, frameId = 0, dirty = true, loaded = false, projectionDirty = true;
let gesture = null, moved = false, pinned = false, visibleFraction = 1;

function invalidate() { dirty = true; projectionDirty = true; schedule(); }
function resize() {
  width = innerWidth; height = innerHeight;
  renderer.resize(width, height); invalidate();
}
function schedule() {
  if (!frameId && loaded && !document.hidden) frameId = requestAnimationFrame(render);
}
function render(time) {
  frameId = 0;
  if (!loaded || document.hidden) return;
  const elapsed = Math.min((time - lastTime) / 1000 || 0, .05); lastTime = time;
  const rotating = !paused && hovered < 0 && !pointers.size;
  if (rotating) { rotation -= elapsed * .018; dirty = true; projectionDirty = true; }
  if (dirty) {
    renderer.render(camera, rotation, highlighting && hovered >= 0, visibleFraction);
    dirty = false;
  }
  if (rotating) schedule();
}
function updateStates() {
  visibleFraction = nodes.length ? visible.filter(Boolean).length / nodes.length : 0;
  for (let i = 0; i < nodes.length; i++) {
    states[i] = !visible[i] ? 0 : !highlighting || hovered < 0 ? 1 : i === hovered ? 3 : closure.has(i) ? 2 : .008;
  }
  renderer.setStates(states);
}
function rebuildPickGrid() {
  pickGrid.clear();
  for (let i = 0; i < nodes.length; i++) {
    if (!visible[i]) continue;
    const [x, y, depth] = project(nodes[i], camera, rotation, width, height);
    if (depth <= 0 || x < -60 || x > width + 60 || y < -60 || y > height + 60) continue;
    const key = `${Math.floor(x / 16)},${Math.floor(y / 16)}`;
    if (!pickGrid.has(key)) pickGrid.set(key, []);
    pickGrid.get(key).push({ i, x, y, depth, radius: projectedStarRadius(nodes[i], camera, depth, renderer.pointScaleLimit) });
  }
  projectionDirty = false;
}
function hitTest(x, y) {
  if (projectionDirty) rebuildPickGrid();
  let best = -1, distance = Infinity, bestDepth = Infinity;
  const cx = Math.floor(x / 16), cy = Math.floor(y / 16);
  for (let xx = cx - 1; xx <= cx + 1; xx++) {
    for (let yy = cy - 1; yy <= cy + 1; yy++) {
      for (const point of pickGrid.get(`${xx},${yy}`) ?? []) {
        const d = (point.x - x) ** 2 + (point.y - y) ** 2;
        if (d > Math.max(9, point.radius) ** 2) continue;
        if (d < distance - .25 || (Math.abs(d - distance) < .25 && point.depth < bestDepth)) {
          best = point.i; distance = d; bestDepth = point.depth;
        }
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
  renderTitle($('#tip-title'), node.title);
  const visibleCount = [...closure].filter(i => visible[i]).length;
  $('#tip-detail').hidden = !highlighting;
  $('#tip-detail').textContent = `${closure.size.toLocaleString()} ${direction === 'dependencies' ? 'prerequisites' : 'downstream consumers'} · ${visibleCount.toLocaleString()} visible`;
  tip.href = `https://alphabetamath.cc/item/${encodeURIComponent(node.id)}`;
  tip.hidden = false;
  const [x, y] = project(node, camera, rotation, width, height);
  tip.style.left = `${clamp(x + 18, 12, width - tip.offsetWidth - 12)}px`;
  tip.style.top = `${clamp(y + 18, 12, height - tip.offsetHeight - 60)}px`;
}
function inspect(index) {
  if (hovered === index) return;
  hovered = index;
  document.body.classList.toggle('inspecting', index >= 0);
  $('#tooltip').hidden = index < 0;
  if (index >= 0) {
    closure = highlighting ? reachable(index, direction === 'dependencies' ? prerequisites : consumers) : new Set();
    updateTooltip();
  }
  updateStates();
  dirty = true; schedule();
}
function refilter() {
  visible = nodes.map(n => n.categories.some(c => selected.has(c)));
  inspect(-1); pinned = false;
  updateStates();
  projectionDirty = true;
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
    const a = document.createElement('a'); renderTitle(a, node.title);
    a.href = `https://alphabetamath.cc/item/${encodeURIComponent(node.id)}`; a.target = '_blank'; a.rel = 'noopener';
    results.append(a);
  }
  if (!matches.length) { const p = document.createElement('p'); p.textContent = 'No matching stars in the selected categories.'; results.append(p); }
}
function setZoom(value, x = width / 2, y = height / 2) {
  const next = clamp(value, .35, 180), ratio = next / camera.zoom;
  camera.panX = x - width / 2 - (x - width / 2 - camera.panX) * ratio;
  camera.panY = y - height / 2 - (y - height / 2 - camera.panY) * ratio;
  camera.zoom = next; inspect(-1); pinned = false; invalidate();
}
function syncMotion() {
  const label = paused ? 'Resume rotation' : 'Pause rotation';
  $('#motion').setAttribute('aria-pressed', String(paused));
  $('#motion').setAttribute('aria-label', label); $('#motion').title = label;
  $('#motion-icon').setAttribute('d', paused ? 'M9 5l10 7-10 7Z' : 'M9 6v12M15 6v12');
  invalidate();
}
function beginGesture(event) {
  if (pointers.size === 2) {
    const [a, b] = [...pointers.values()];
    gesture = { distance: Math.hypot(a.x - b.x, a.y - b.y), zoom: camera.zoom };
    moved = true;
  } else {
    const point = [...pointers.values()][0];
    gesture = { ...point, yaw: camera.yaw, pitch: camera.pitch, panX: camera.panX, panY: camera.panY,
      pan: event.shiftKey || event.button === 2 };
  }
}
function buildCategoryControls() {
  $('#categories').replaceChildren();
  for (const category of graph.categories) {
    const label = document.createElement('label'), input = document.createElement('input'), count = document.createElement('small');
    input.type = 'checkbox'; input.checked = selected.has(category.id); input.value = category.id;
    count.textContent = nodes.filter(n => n.categories.includes(category.id)).length.toLocaleString();
    label.append(input, document.createTextNode(category.title), count); $('#categories').append(label);
    input.onchange = () => { input.checked ? selected.add(category.id) : selected.delete(category.id); refilter(); };
  }
}
function bindControls() {
  $('#filters-toggle').onclick = () => {
    const panel = $('#filters'); panel.hidden = !panel.hidden;
    $('#filters-toggle').setAttribute('aria-expanded', String(!panel.hidden));
  };
  buildCategoryControls();
  for (const all of [true, false]) $(`#select-${all ? 'all' : 'none'}`).onclick = () => {
    selected = new Set(all ? graph.categories.map(c => c.id) : []);
    document.querySelectorAll('#categories input').forEach(input => { input.checked = all; }); refilter();
  };
  document.querySelectorAll('[name=direction]').forEach(input => { input.onchange = () => {
    direction = input.value; const previous = hovered; hovered = -1; inspect(previous);
  }; });
  $('#highlight-toggle').onclick = () => {
    highlighting = !highlighting;
    $('#highlight-toggle').setAttribute('aria-pressed', String(highlighting));
    $('#highlight-toggle').title = highlighting ? 'Disable hover highlighting' : 'Enable hover highlighting';
    $('#highlight-off').toggleAttribute('hidden', highlighting);
    const previous = hovered; hovered = -1; inspect(previous);
    updateStates(); invalidate();
  };
  $('#search').oninput = updateSearch;
  $('#motion').onclick = () => { paused = !paused; syncMotion(); };
  $('#reset').onclick = () => { Object.assign(camera, defaultCamera(width, height)); rotation = 0; pinned = false; inspect(-1); invalidate(); };
  $('#zoom-in').onclick = () => setZoom(camera.zoom * 1.4);
  $('#zoom-out').onclick = () => setZoom(camera.zoom / 1.4);
  canvas.addEventListener('contextmenu', event => event.preventDefault());
  canvas.addEventListener('wheel', event => {
    event.preventDefault(); setZoom(camera.zoom * Math.exp(-event.deltaY * .001), event.clientX, event.clientY);
  }, { passive: false });
  canvas.addEventListener('pointerdown', event => {
    if (event.button !== 0 && event.button !== 2) return;
    canvas.setPointerCapture(event.pointerId);
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.size === 1) moved = false;
    pinned = false; beginGesture(event);
  });
  canvas.addEventListener('pointermove', event => {
    if (pointers.has(event.pointerId)) {
      pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      if (pointers.size === 2 && gesture.distance) {
        const [a, b] = [...pointers.values()];
        setZoom(gesture.zoom * Math.hypot(a.x - b.x, a.y - b.y) / gesture.distance,
          (a.x + b.x) / 2, (a.y + b.y) / 2);
        moved = true;
      } else if (pointers.size === 1 && gesture.x !== undefined) {
        const dx = event.clientX - gesture.x, dy = event.clientY - gesture.y;
        if (Math.hypot(dx, dy) > 4) moved = true;
        if (moved) {
          if (gesture.pan) { camera.panX = gesture.panX + dx; camera.panY = gesture.panY + dy; }
          else { camera.yaw = gesture.yaw + dx * .005; camera.pitch = clamp(gesture.pitch + dy * .005, .015, Math.PI - .015); }
          inspect(-1); invalidate();
        }
      }
    } else if (!pinned && event.pointerType !== 'touch') inspect(hitTest(event.clientX, event.clientY));
  });
  canvas.addEventListener('pointerup', event => {
    pointers.delete(event.pointerId);
    if (!moved && !pointers.size && event.button === 0) {
      const index = hitTest(event.clientX, event.clientY);
      if (index >= 0 && event.pointerType === 'mouse') {
        window.open(`https://alphabetamath.cc/item/${encodeURIComponent(nodes[index].id)}`, '_blank', 'noopener');
      } else { inspect(index); pinned = index >= 0; }
    }
    if (pointers.size === 1) { beginGesture(event); moved = true; }
    schedule();
  });
  canvas.addEventListener('pointercancel', event => { pointers.delete(event.pointerId); moved = true; inspect(-1); schedule(); });
  canvas.addEventListener('keydown', event => {
    if (['+', '=', '-', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' '].includes(event.key)) event.preventDefault();
    if (event.key === '+' || event.key === '=') setZoom(camera.zoom * 1.2);
    if (event.key === '-') setZoom(camera.zoom / 1.2);
    if (event.key === ' ') { paused = !paused; syncMotion(); }
    const moves = { ArrowLeft: [-.1, 0], ArrowRight: [.1, 0], ArrowUp: [0, -.1], ArrowDown: [0, .1] };
    if (moves[event.key]) {
      camera.yaw += moves[event.key][0]; camera.pitch = clamp(camera.pitch + moves[event.key][1], .015, Math.PI - .015);
      inspect(-1); invalidate();
    }
  });
  addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      pinned = false; inspect(-1); $('#filters').hidden = true; $('#filters-toggle').setAttribute('aria-expanded', 'false');
    }
  });
  addEventListener('resize', () => { resize(); updateTooltip(); });
  document.addEventListener('visibilitychange', () => { lastTime = performance.now(); schedule(); });
  matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', event => { paused = event.matches; syncMotion(); });
}
function applyGraph(next) {
  const allSelected = graph.categories.every(category => selected.has(category.id));
  selected = new Set(next.categories.filter(category => allSelected || selected.has(category.id)).map(category => category.id));
  hovered = -1; closure = new Set(); pinned = false;
  $('#tooltip').hidden = true; document.body.classList.remove('inspecting');
  graph = next; nodes = next.nodes;
  prerequisites = nodes.map(() => []); consumers = nodes.map(() => []);
  for (const [from, to] of graph.edges) { prerequisites[from].push(to); consumers[to].push(from); }
  states = new Float32Array(nodes.length);
  renderer.setItems(layoutItems(nodes, graph.categories, consumers));
  buildCategoryControls(); refilter();
}
async function init() {
  try {
    renderer = new GalaxyRenderer(canvas);
    const response = await fetch('/universe/graph.json');
    if (!response.ok) throw new Error(`Graph request failed (${response.status})`);
    graph = await response.json(); nodes = graph.nodes;
    prerequisites = nodes.map(() => []); consumers = nodes.map(() => []);
    for (const [from, to] of graph.edges) { prerequisites[from].push(to); consumers[to].push(from); }
    selected = new Set(graph.categories.map(c => c.id));
    states = new Float32Array(nodes.length);
    renderer.setScene(layoutItems(nodes, graph.categories, consumers), createEnvironment());
    bindControls(); initMusic(); resize(); loaded = true; refilter(); syncMotion();
    followGraph(() => graph.revision, applyGraph);
    canvas.addEventListener('webglcontextlost', event => {
      event.preventDefault(); loaded = false;
      $('#status').hidden = false; $('#status').textContent = 'Graphics connection lost. Refresh to restore the galaxy.';
    });
  } catch (error) {
    $('#status').textContent = error.message.includes('WebGL') ? error.message : 'The stars could not be loaded. Refresh to try again.';
    console.error(error);
  }
}
init();
