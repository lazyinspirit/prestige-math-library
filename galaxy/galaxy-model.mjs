export const TAU = Math.PI * 2;
export const COLORS = ['#5abdff', '#ff7956', '#aa7951', '#b7a7cd'];
export const colorIndex = kind => kind === 'definition' ? 0
  : ['theorem', 'lemma', 'proposition', 'corollary'].includes(kind) ? 1
  : ['example', 'counterexample', 'false-statement'].includes(kind) ? 2 : 3;
export const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
export function random(seed) {
  return () => {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t ^= t + Math.imul(t ^ t >>> 7, 61 | t);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const spiral = radius => 5.8 * Math.pow(radius, .58);
const gaussian = rng => Math.sqrt(-2 * Math.log(Math.max(1e-8, rng()))) * Math.cos(TAU * rng());
const rgb = hex => [1, 3, 5].map(offset => parseInt(hex.slice(offset, offset + 2), 16) / 255);

/** Shared coordinates for the GPU and picking. The disc has thickness; the core is a spheroid. */
export function layoutItems(nodes, categories, consumers) {
  const rng = random(41721);
  const categoryIndex = new Map(categories.filter(c => c.id !== 'foundations').map((c, i) => [c.id, i]));
  const bands = Math.ceil(categoryIndex.size / 4);
  const vertices = new Float32Array(nodes.length * 8);
  nodes.forEach((node, i) => {
    const core = node.categories.includes('foundations');
    const category = categoryIndex.get(node.categories[0]) ?? 0;
    const radius = core ? .19 * Math.pow(rng(), .65)
      : .13 + 1.12 * Math.pow((Math.floor(category / 4) + rng()) / bands, .86);
    const angle = core ? rng() * TAU
      : (category % 4) * TAU / 4 + spiral(radius) + gaussian(rng) * .13;
    node.x = radius * Math.cos(angle);
    node.y = radius * Math.sin(angle);
    node.z = gaussian(rng) * (core ? .065 : .012 + .013 * radius);
    node.color = colorIndex(node.kind);
    node.size = 3.5 + rng() * 2.2 + Math.min(3, Math.log1p(consumers[i].length) * .45);
    vertices.set([node.x, node.y, node.z, ...rgb(COLORS[node.color]), node.size, .8], i * 8);
  });
  return vertices;
}

/** Procedural stellar light, gas and absorbing dust, all in the same 3D coordinate system. */
export function createEnvironment() {
  const rng = random(81073), stars = [], gas = [], dust = [];
  const add = (array, x, y, z, color, size, alpha) => array.push(x, y, z, ...color, size, alpha);
  for (let i = 0; i < 185000; i++) {
    const bulge = i < 32000;
    const r = bulge ? Math.abs(gaussian(rng)) * .13 : .06 + Math.pow(rng(), .72) * 1.22;
    const arm = Math.floor(rng() * 4);
    const diffuse = rng() < .42;
    const a = bulge || diffuse ? rng() * TAU : arm * TAU / 4 + spiral(r) + gaussian(rng) * (.13 + .10 * r);
    const z = gaussian(rng) * (bulge ? .07 : .01 + .012 * r);
    const warmth = Math.exp(-r * 4.5);
    const blue = rng() < .8;
    const color = blue ? [.39 + .55 * warmth, .51 + .25 * warmth, .85 - .29 * warmth]
      : [.85, .61, .48];
    const fade = Math.pow(1 - r / 1.4, .55);
    add(stars, r * Math.cos(a), r * Math.sin(a), z, color, .8 + rng() * 2, (.13 + rng() * .24) * fade);
  }
  // Large, low-opacity volumetric splats blend into continuous light rather than a flat texture.
  for (let i = 0; i < 18000; i++) {
    const r = .025 + Math.pow(rng(), .83) * 1.24;
    const a = rng() < .28 ? rng() * TAU : (i % 4) * TAU / 4 + spiral(r) + gaussian(rng) * .23;
    const x = r * Math.cos(a), y = r * Math.sin(a);
    const clump = .45 + .55 * Math.sin(a * 13 + r * 80) ** 2;
    const warmth = Math.exp(-r * 5);
    const color = [.10 + .78 * warmth, .19 + .45 * warmth, .62 - .20 * warmth];
    add(gas, x, y, gaussian(rng) * .018, color, .04 + rng() * .12, .009 * clump * (1.2 - r / 1.4));
    if (i < 3500) {
      const coreR = Math.abs(gaussian(rng)) * .10, ca = rng() * TAU;
      add(gas, coreR * Math.cos(ca), coreR * Math.sin(ca), gaussian(rng) * .045,
        [1, .84, .64], .035 + rng() * .18, .0015);
    }
  }
  // Narrow, broken dust lanes follow the inside of the luminous arms.
  for (let i = 0; i < 18000; i++) {
    const r = .13 + rng() * 1.12;
    const a = (i % 4) * TAU / 4 + spiral(r) - .12 + gaussian(rng) * .042;
    const clump = .25 + .75 * Math.sin(r * 73 + a * 6) ** 2;
    add(dust, r * Math.cos(a), r * Math.sin(a), gaussian(rng) * .007,
      [.008, .005, .003], .02 + rng() * .045, .095 * clump);
  }
  return { stars: new Float32Array(stars), gas: new Float32Array(gas), dust: new Float32Array(dust) };
}

export const DEFAULT_CAMERA = Object.freeze({ yaw: -.25, pitch: .98, zoom: .84, panX: 0, panY: 0 });
export const CAMERA_DISTANCE = 3.8;
/** Perspective projection mirrors the vertex shader; depth is also used to pick overlapping stars. */
export function project(node, camera, rotation, width, height) {
  const angle = camera.yaw + rotation, c = Math.cos(angle), s = Math.sin(angle);
  const x = c * node.x - s * node.y, y = s * node.x + c * node.y;
  const cp = Math.cos(camera.pitch), sp = Math.sin(camera.pitch);
  const up = cp * y - sp * node.z;
  const depth = CAMERA_DISTANCE - (sp * y + cp * node.z);
  const focal = Math.min(width, height) * 1.32 * camera.zoom;
  return [width / 2 + camera.panX + x * focal / depth,
    height / 2 + camera.panY - up * focal / depth, depth];
}
