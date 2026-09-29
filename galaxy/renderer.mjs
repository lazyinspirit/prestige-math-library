import { CAMERA_DISTANCE } from './galaxy-model.mjs';

const VERTEX = `#version 300 es
in vec3 aPosition;
in vec3 aColor;
in float aSize;
in float aAlpha;
in float aState;
uniform vec4 uOrbit;
uniform vec4 uView;
uniform vec2 uPan;
uniform float uDpr;
uniform float uWorld;
uniform float uItems;
uniform float uFade;
uniform float uZoom;
uniform float uMaxPoint;
out vec3 vColor;
out float vAlpha;
out float vState;
out float vDiameter;
out vec3 vSeed;
void main() {
  float x = uOrbit.x * aPosition.x - uOrbit.y * aPosition.y;
  float y = uOrbit.y * aPosition.x + uOrbit.x * aPosition.y;
  float up = uOrbit.z * y - uOrbit.w * aPosition.z;
  float depth = ${CAMERA_DISTANCE.toFixed(1)} - (uOrbit.w * y + uOrbit.z * aPosition.z);
  gl_Position = vec4(x * uView.x + uPan.x * depth,
    up * uView.y + uPan.y * depth, .999 * depth - .02, depth);
  float size = uWorld > .5 ? aSize * uView.z / depth
    : aSize * sqrt(${CAMERA_DISTANCE.toFixed(1)} / depth) * pow(uZoom, .18);
  if (uItems > .5) {
    size = min(120., aSize * sqrt(${CAMERA_DISTANCE.toFixed(1)} / depth) * pow(uZoom, .75));
  }
  gl_PointSize = clamp(size * uDpr, 1., uMaxPoint);
  vDiameter = gl_PointSize;
  vSeed = aPosition * 137.;
  vColor = aColor;
  vAlpha = aAlpha * uFade * (aState < .01 ? 0. : min(aState, 1.));
  vState = aState;
}`;
const FRAGMENT = `#version 300 es
precision highp float;
in vec3 vColor;
in float vAlpha;
in float vState;
in float vDiameter;
in vec3 vSeed;
out vec4 fragColor;
uniform float uWorld;
uniform float uItems;
// Smooth 3D noise follows the spherical surface, with a stable seed per star.
float hash(vec3 p) {
  p = fract(p * .1031);
  p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}
float noise(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3. - 2. * f);
  return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x),
                 mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
                 mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float surfaceNoise(vec3 p, float footprint) {
  float value = 0., weight = .55;
  for (int i = 0; i < 4; i++) {
    // Fade frequencies that cannot be resolved by a pixel.
    value += weight * mix(noise(p), .5, smoothstep(.3, .9, footprint));
    p = p * 2.03 + 7.1; footprint *= 2.03; weight *= .5;
  }
  return value;
}
void main() {
  vec2 p = gl_PointCoord * 2. - 1.;
  float r2 = dot(p, p);
  if (r2 >= 1. || vAlpha < .00001) discard;
  if (uItems > .5) {
    // Emissive photosphere and a corona ending one-quarter body radius beyond the limb.
    float r = sqrt(r2);
    vec2 surface = p / .8;
    float z = sqrt(max(0., 1. - dot(surface, surface)));
    vec3 normal = normalize(vec3(surface, z));
    float edge = max(fwidth(r), .001);
    float body = 1. - smoothstep(.8 - edge, .8 + edge, r);
    float grain = .5, activity = .5, spots = 0.;
    if (vDiameter > 6.) {
      vec3 q = normal * 24. + vSeed;
      float footprint = max(length(dFdx(q)), length(dFdy(q)));
      activity = noise(q * .14);
      grain = surfaceNoise(q + .55 * vec3(noise(q), noise(q + 13.), noise(q + 29.)), footprint);
      spots = smoothstep(.69, .86, activity) * (1. - smoothstep(.28, .48, grain));
    }
    float filaments = smoothstep(.38, .65, grain);
    float brightness = (.56 + .44 * z) * (.48 + .85 * grain + .36 * filaments) * (1. - .72 * spots);
    // Convert display colors to linear light before the final exposure/gamma pass.
    vec3 base = pow(vColor, vec3(2.2));
    vec3 hot = min(vec3(1.), base * vec3(1.1, 1.65, 1.3) + vec3(.025, .012, .002));
    vec3 surfaceColor = mix(base * .65, hot, filaments) * brightness;
    float altitude = clamp((r - .8) / .2, 0., 1.);
    float angle = atan(p.y, p.x);
    float streamers = .78 + .22 * sin(angle * 19. + vSeed.x + 3. * sin(angle * 7.));
    float halo = .85 * exp(-2.6 * altitude) * (1. - smoothstep(.35, 1., altitude)) * streamers;
    vec3 coronaColor = base * vec3(1., .55, .45);
    float emphasis = vState > 1.5 ? 1.45 : 1.;
    fragColor = vec4(mix(coronaColor, surfaceColor, body) * emphasis,
      (body + halo * (1. - body)) * vAlpha);
    return;
  }
  float profile = uWorld > .5 ? exp(-r2 * 5.) * (1. - smoothstep(.7, 1., r2))
    : exp(-r2 * 42.) + .14 * exp(-r2 * 5.);
  vec3 color = uWorld > .5 ? vColor : mix(vColor, vec3(1.), .35 * exp(-r2 * 85.));
  fragColor = vec4(color, min(1., profile * vAlpha));
}`;

/** GPU point clouds: no raster galaxy, fixed-resolution texture, or edge geometry. */
export class GalaxyRenderer {
  constructor(canvas) {
    const gl = canvas.getContext('webgl2', { alpha: false, antialias: true, depth: false, powerPreference: 'high-performance' });
    if (!gl) throw new Error('WebGL is unavailable. Enable hardware acceleration and reload.');
    this.canvas = canvas;
    this.gl = gl;
    this.hdr = Boolean(gl.getExtension('EXT_color_buffer_float'));
    this.sceneVAO = gl.createVertexArray();
    this.compositeVAO = gl.createVertexArray();
    this.target = gl.createFramebuffer();
    this.texture = gl.createTexture();
    const compile = (type, source) => {
      const shader = gl.createShader(type); gl.shaderSource(shader, source); gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader));
      return shader;
    };
    this.program = gl.createProgram();
    const shaders = [compile(gl.VERTEX_SHADER, VERTEX), compile(gl.FRAGMENT_SHADER, FRAGMENT)];
    shaders.forEach(shader => gl.attachShader(this.program, shader));
    gl.linkProgram(this.program);
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(this.program));
    shaders.forEach(shader => gl.deleteShader(shader));
    this.composite = gl.createProgram();
    const compositeShaders = [compile(gl.VERTEX_SHADER, `#version 300 es
      out vec2 uv;
      void main() {
        vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
        uv = p; gl_Position = vec4(p * 2. - 1., 0., 1.);
      }`), compile(gl.FRAGMENT_SHADER, `#version 300 es
      precision highp float;
      uniform sampler2D image;
      in vec2 uv;
      out vec4 color;
      void main() {
        vec3 light = texture(image, uv).rgb;
        vec3 mapped = vec3(1.) - exp(-light * 1.15);
        color = vec4(pow(mapped, vec3(1. / 2.2)), 1.);
      }`)];
    compositeShaders.forEach(shader => gl.attachShader(this.composite, shader));
    gl.linkProgram(this.composite);
    if (!gl.getProgramParameter(this.composite, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(this.composite));
    compositeShaders.forEach(shader => gl.deleteShader(shader));
    gl.useProgram(this.program);
    this.attributes = Object.fromEntries(['aPosition', 'aColor', 'aSize', 'aAlpha', 'aState'].map(name => [name, gl.getAttribLocation(this.program, name)]));
    this.uniforms = Object.fromEntries(['uOrbit', 'uView', 'uPan', 'uDpr', 'uWorld', 'uItems', 'uFade', 'uZoom', 'uMaxPoint'].map(name => [name, gl.getUniformLocation(this.program, name)]));
    gl.uniform1f(this.uniforms.uMaxPoint, gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)[1]);
    gl.clearColor(0, 0, 0, 1);
    gl.enable(gl.BLEND);
    this.layers = [];
  }
  upload(vertices) {
    const gl = this.gl, buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    const layer = { buffer, count: vertices.length / 8 }; this.layers.push(layer); return layer;
  }
  setScene(vertices, environment) {
    this.gas = this.upload(environment.gas);
    this.dust = this.upload(environment.dust);
    this.faintStars = this.upload(environment.stars);
    this.state = this.gl.createBuffer();
    this.setItems(vertices);
  }
  setItems(vertices) {
    if (!this.items) { this.items = this.upload(vertices); return; }
    const gl = this.gl;
    gl.bindBuffer(gl.ARRAY_BUFFER, this.items.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    this.items.count = vertices.length / 8;
  }
  setStates(states) {
    const gl = this.gl;
    gl.bindBuffer(gl.ARRAY_BUFFER, this.state); gl.bufferData(gl.ARRAY_BUFFER, states, gl.DYNAMIC_DRAW);
  }
  resize(width, height) {
    this.width = width; this.height = height;
    // Native high-DPI detail, bounded only to keep very large windows within GPU limits.
    const max = this.gl.getParameter(this.gl.MAX_RENDERBUFFER_SIZE);
    this.dpr = Math.min(devicePixelRatio || 1, 3, max / width, max / height);
    this.canvas.width = Math.round(width * this.dpr); this.canvas.height = Math.round(height * this.dpr);
    const gl = this.gl;
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, this.hdr ? gl.RGBA16F : gl.RGBA8,
      this.canvas.width, this.canvas.height, 0, gl.RGBA, this.hdr ? gl.HALF_FLOAT : gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.target);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);
    if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) throw new Error('Could not create the galaxy render target.');
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }
  drawLayer(layer, world, fade, itemStates = false, absorbing = false) {
    const gl = this.gl, a = this.attributes;
    gl.bindBuffer(gl.ARRAY_BUFFER, layer.buffer);
    for (const [name, size, offset] of [['aPosition', 3, 0], ['aColor', 3, 12], ['aSize', 1, 24], ['aAlpha', 1, 28]]) {
      gl.enableVertexAttribArray(a[name]); gl.vertexAttribPointer(a[name], size, gl.FLOAT, false, 32, offset);
    }
    if (itemStates) {
      gl.bindBuffer(gl.ARRAY_BUFFER, this.state); gl.enableVertexAttribArray(a.aState);
      gl.vertexAttribPointer(a.aState, 1, gl.FLOAT, false, 4, 0);
    } else { gl.disableVertexAttribArray(a.aState); gl.vertexAttrib1f(a.aState, 1); }
    gl.uniform1f(this.uniforms.uWorld, world ? 1 : 0);
    gl.uniform1f(this.uniforms.uItems, itemStates ? 1 : 0);
    gl.uniform1f(this.uniforms.uFade, fade);
    gl.blendFunc(gl.SRC_ALPHA, absorbing ? gl.ONE_MINUS_SRC_ALPHA : gl.ONE);
    gl.drawArrays(gl.POINTS, 0, layer.count);
  }
  render(camera, rotation, inspecting, visibleFraction) {
    const gl = this.gl, u = this.uniforms;
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.target);
    gl.bindVertexArray(this.sceneVAO);
    gl.useProgram(this.program);
    gl.enable(gl.BLEND);
    gl.clear(gl.COLOR_BUFFER_BIT);
    const angle = camera.yaw + rotation;
    const focal = Math.min(this.width, this.height) * 1.32 * camera.zoom;
    gl.uniform4f(u.uOrbit, Math.cos(angle), Math.sin(angle), Math.cos(camera.pitch), Math.sin(camera.pitch));
    gl.uniform4f(u.uView, 2 * focal / this.width, 2 * focal / this.height, focal, 0);
    gl.uniform2f(u.uPan, 2 * camera.panX / this.width, -2 * camera.panY / this.height);
    gl.uniform1f(u.uDpr, this.dpr); gl.uniform1f(u.uZoom, camera.zoom);
    // Decorative matter recedes during inspection/filtering so the actual items remain legible.
    const atmosphere = (inspecting ? .075 : 1) * visibleFraction;
    this.drawLayer(this.gas, true, atmosphere);
    this.drawLayer(this.faintStars, false, atmosphere);
    this.drawLayer(this.dust, true, atmosphere, false, true);
    this.drawLayer(this.items, false, 1, true);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindVertexArray(this.compositeVAO);
    gl.useProgram(this.composite);
    gl.disable(gl.BLEND);
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
}
