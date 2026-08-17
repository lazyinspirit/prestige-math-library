---
id: def-oriented-complex-triangle-and-boundary
kind: definition
title: "Filled complex triangles, their oriented three-edge boundary contours, diameter, and perimeter"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [rem-complex-plane-euclidean-dictionary, def-complex-contours-reversal-concatenation-and-closedness, def-metric-bounded-diameter, lem-complex-conjugation-and-modulus-laws, cor-piecewise-c1-paths-have-additive-speed-integral-length]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2, Section 1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Definition

For $u,v\in\mathbb C$, write

$$\ell_{uv}(t)=(1-t)u+tv\qquad(0\le t\le1)$$

for the directed line segment from $u$ to $v$. It is a piecewise-$C^1$ complex contour, and its length is $|v-u|$ by [[cor-piecewise-c1-paths-have-additive-speed-integral-length]].

For an ordered triple $a,b,c\in\mathbb C$, the **filled complex triangle** is

$$\Delta[a,b,c]=\{(1-s-t)a+sb+tc:s,t\ge0,\ s+t\le1\}.$$

Its **positively oriented boundary contour** is

$$\partial\Delta[a,b,c]=\ell_{ab}*\ell_{bc}*\ell_{ca},$$

with concatenation understood up to increasing reparametrization as in [[def-complex-contours-reversal-concatenation-and-closedness]]. Reversing the order of two vertices reverses the orientation. Repeated or collinear vertices are allowed; thus this notation also covers degenerate triangles.

The **perimeter** and **diameter** are

$$P(\Delta[a,b,c])=|b-a|+|c-b|+|a-c|$$

and

$$\operatorname{diam}(\Delta[a,b,c])=\sup\{|z-w|:z,w\in\Delta[a,b,c]\},$$

where the latter is the metric diameter of [[def-metric-bounded-diameter]] under the standard identification of [[rem-complex-plane-euclidean-dictionary]]. These quantities are defined for every ordered triple: the filled triangle is nonempty because it contains $a$, and if $z=(1-s-t)a+sb+tc$ then the modulus laws of [[lem-complex-conjugation-and-modulus-laws]] give $|z-a|\le |b-a|+|c-a|$. Hence it lies in a ball of finite positive radius and is bounded. Its perimeter is the length of its boundary contour, including in the degenerate cases.

If $f$ is continuous on the trace of the boundary, abbreviate

$$I_f[a,b,c]=\int_{\partial\Delta[a,b,c]}f(z)\,dz.$$
