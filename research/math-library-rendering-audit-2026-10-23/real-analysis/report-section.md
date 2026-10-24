## Real Analysis

Completed visual review of **1743 items across 112 pages**, with **3249 image tiles**. Findings: 6 uncertain, 3 confirmed. Evidence: [manifest](math-library-rendering-audit-2026-10-23/real-analysis/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/real-analysis/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/real-analysis/category-review-receipt.json).

### Confirmed rendering defects

#### real-analysis / confirmed 001: `ex-alternating-harmonic-series-sums-to-log-two`

- Location: **Facts & Assumptions**; source lines 37.
- Pages: `the-logarithm-and-general-powers-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/real-analysis/screenshots/ex-alternating-harmonic-series-sums-to-log-two--01.png); [frozen source](math-library-rendering-audit-2026-10-23/real-analysis/snapshots/ex-alternating-harmonic-series-sums-to-log-two.md).

Exact frozen source lines:

```text
37: [L1] At $x=1$, $\log(1+x)=\sum_{n\ge1}(-1)^{n+1}x^n/n$ converges to $\log2$ ([[thm-log-one-plus-x-power-series]]).
```

#### real-analysis / confirmed 002: `thm-signed-infinite-product-square-summability-criterion`

- Location: **Item body**; source lines 4.
- Pages: `the-logarithm-and-general-powers`.
- Visible defect: The rendered title displays p_n with a literal underscore instead of a subscript; the source title contains un-delimited mathematical notation.
- Future repair: Typeset the p_n fragments in the title as inline math, or rewrite them using plain prose without TeX-style subscripts.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/real-analysis/screenshots/thm-signed-infinite-product-square-summability-criterion--01.png); [frozen source](math-library-rendering-audit-2026-10-23/real-analysis/snapshots/thm-signed-infinite-product-square-summability-criterion.md).

Exact frozen source lines:

```text
4: title: "Under square summability, the signed product of (1+p_n) converges iff the series of p_n converges"
```

#### real-analysis / confirmed 003: `thm-signed-infinite-product-square-summability-criterion`

- Location: **Facts & Assumptions**; source lines 41.
- Pages: `the-logarithm-and-general-powers`.
- Visible defect: Fact [L2] renders the reference as visible Markdown link syntax, including the /library/item/... target, after the equation instead of a linked title.
- Future repair: Render the [[item-id]] reference as a normal linked title in the fact paragraph; do not expose the Markdown label and target.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/real-analysis/screenshots/thm-signed-infinite-product-square-summability-criterion--01.png); [frozen source](math-library-rendering-audit-2026-10-23/real-analysis/snapshots/thm-signed-infinite-product-square-summability-criterion.md).

Exact frozen source lines:

```text
41: [L2] $\log(1+t)=t+\sum_{k\ge2}(-1)^{k+1}t^k/k$ for $|t|<1$ ([[thm-log-one-plus-x-power-series]]).
```

### Uncertain observations

#### real-analysis / uncertain 001: `ex-the-closed-unit-box-is-an-elementary-solid-region`

- Location: **Example**; source lines 32, 33, 34, 35, 36, 37.
- Pages: `the-divergence-theorem-and-classical-stokes-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/real-analysis/screenshots/ex-the-closed-unit-box-is-an-elementary-solid-region--01.png), [tile 02](math-library-rendering-audit-2026-10-23/real-analysis/screenshots/ex-the-closed-unit-box-is-an-elementary-solid-region--02.png), [tile 03](math-library-rendering-audit-2026-10-23/real-analysis/screenshots/ex-the-closed-unit-box-is-an-elementary-solid-region--03.png); [frozen source](math-library-rendering-audit-2026-10-23/real-analysis/snapshots/ex-the-closed-unit-box-is-an-elementary-solid-region.md).

Exact frozen source lines:

```text
32: Let $B:=[0,1]^3$ and let $S:=[0,1]^2$ with parameters $(u,v)$. Then the six faces of the closed unit box, each parametrized on the unit square so that its oriented area vector points out of the box, form one presentation adapted in all three coordinate directions, so $B$ is an elementary solid region ([[def-elementary-solid-region]]) with that presentation. The six parametrizations are
33: 
34: $$\varphi_{z^+}(u,v)=(u,v,1),\quad \varphi_{z^-}(u,v)=(v,u,0),\quad \varphi_{x^+}(u,v)=(1,u,v),$$
35: $$\varphi_{x^-}(u,v)=(0,v,u),\quad \varphi_{y^+}(u,v)=(v,1,u),\quad \varphi_{y^-}(u,v)=(u,0,v),$$
36: 
37: all on $S$, and their oriented area vectors are the constants $e_z$, $-e_z$, $e_x$, $-e_x$, $e_y$ and $-e_y$ respectively.
```

#### real-analysis / uncertain 002: `ex-irregular-pentagon-area-by-triangulation-and-shoelace`

- Location: **Example**; source lines 28, 42, 43, 44.
- Pages: `areas-of-elementary-plane-figures-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/real-analysis/screenshots/ex-irregular-pentagon-area-by-triangulation-and-shoelace--01.png); [frozen source](math-library-rendering-audit-2026-10-23/real-analysis/snapshots/ex-irregular-pentagon-area-by-triangulation-and-shoelace.md).

Exact frozen source lines:

```text
28: Let $P$ have counterclockwise vertices $(0,0),(4,0),(5,2),(2,4),(0,3)$. It is a convex simple pentagon with Jordan content $15$.
42: 1.1 Write the vertices as $v_0,\ldots,v_4$ in the displayed order. The five supporting-line calculations $$\det(v_{i+1}-v_i,v_j-v_i)>0\qquad(j\notin\{i,i+1\})$$ give respectively the positive lists $(8,16,12)$, $(8,8,11)$, $(16,8,7)$, $(6,10,7)$, and $(12,15,6)$, with indices modulo five. Thus every other vertex lies strictly to the left of every directed boundary edge. The intersection of these five closed left half-planes is convex, has exactly the displayed boundary chain, and contains both diagonals from $v_0$; hence the chain is simple and counterclockwise and those diagonals triangulate it. The three triangle determinants are $8$, $16$, and $6$, so [L1] gives content $(8+16+6)/2=15$. [L1, algebra]
43: 
44: 1.2 The cyclic shoelace sum is $(0+8+20+6+0)-(0+0+4+0+0)=30$, so [L2] gives content $30/2=15$. [L2, algebra]
```

#### real-analysis / uncertain 003: `ex-surface-area-of-the-sine-solid-of-revolution`

- Location: **Example**; source lines 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60.
- Pages: `trigonometric-and-oscillatory-examples-in-several-variables-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/real-analysis/screenshots/ex-surface-area-of-the-sine-solid-of-revolution--01.png), [tile 02](math-library-rendering-audit-2026-10-23/real-analysis/screenshots/ex-surface-area-of-the-sine-solid-of-revolution--02.png), [tile 03](math-library-rendering-audit-2026-10-23/real-analysis/screenshots/ex-surface-area-of-the-sine-solid-of-revolution--03.png); [frozen source](math-library-rendering-audit-2026-10-23/real-analysis/snapshots/ex-surface-area-of-the-sine-solid-of-revolution.md).

Exact frozen source lines:

```text
50: Rotate the graph $y=\sin x$, $0\le x\le\pi$, about the $x$-axis. The resulting
51: surface has area
52: 
53: $$A=2\pi\left(\sqrt2+\operatorname{arsinh}1\right)=2\pi\left(\sqrt2+\log(1+\sqrt2)\right).$$
54: 
55: The profile is positive in the parameter interior and vanishes only at its
56: endpoints, where the generating curve meets the axis of revolution.
57: 
58: ## Facts & Assumptions
59: 
60: **Given:** The radius function $r(x)=\sin x$ on $[0,\pi]$ and the surface obtained by rotating its graph about the $x$-axis.
```

#### real-analysis / uncertain 004: `ex-the-right-circular-cylinder-is-an-elementary-solid-region`

- Location: **Example**; source lines 30, 31, 32, 33, 34, 35, 36, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84.
- Pages: `the-divergence-theorem-and-classical-stokes-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/real-analysis/screenshots/ex-the-right-circular-cylinder-is-an-elementary-solid-region--01.png), [tile 02](math-library-rendering-audit-2026-10-23/real-analysis/screenshots/ex-the-right-circular-cylinder-is-an-elementary-solid-region--02.png), [tile 03](math-library-rendering-audit-2026-10-23/real-analysis/screenshots/ex-the-right-circular-cylinder-is-an-elementary-solid-region--03.png); [frozen source](math-library-rendering-audit-2026-10-23/real-analysis/snapshots/ex-the-right-circular-cylinder-is-an-elementary-solid-region.md).

Exact frozen source lines:

```text
30: Fix $R>0$ and $H>0$, and let
31: $$C_{R,H}:=\{(x,y,z)\in\mathbb R^3:x^2+y^2\le R^2,\ 0\le z\le H\}.$$
32: Its boundary can be presented by two polar cap patches and four quarter-cylinder side patches. That six-patch presentation is compatible and adapted in all three coordinate directions, so $C_{R,H}$ is an elementary solid region.
33: 
34: ## Facts & Assumptions
35: 
36: **Given:** A radius $R>0$, a height $H>0$, the top and bottom cap parametrizations $\kappa_+(r,\theta)=(r\cos\theta,r\sin\theta,H)$ and $\kappa_-(r,\theta)=(r\sin\theta,r\cos\theta,0)$ on $[0,R]\times[0,2\pi]$, and the four side patches $\sigma_j(\theta,z)=(R\cos\theta,R\sin\theta,z)$ on $J_j\times[0,H]$ for $J_0=[0,\pi/2]$, $J_1=[\pi/2,\pi]$, $J_2=[\pi,3\pi/2]$, and $J_3=[3\pi/2,2\pi]$.
72: 1.1 The two caps and four quarter-cylinder side patches are the six displayed parametrizations, with the quarter-turn cuts in the azimuth chosen as in [L5]. [given, L5]
73: 
74: 2.1 Differentiating gives $\kappa_{+,r}\times\kappa_{+,\theta}=(0,0,r)$, $\kappa_{-,r}\times\kappa_{-,\theta}=(0,0,-r)$, and $\sigma_{j,\theta}\times\sigma_{j,z}=R(\cos\theta,\sin\theta,0)$, so the caps have oriented area vectors $\pm re_z$ and each side quarter has outward horizontal area vector $R(\cos\theta,\sin\theta,0)$ by [F6], [L2], and [L3]. [step 1.1, F6, L2, L3, F8]
75: 
76: 3.1 The two caps are regular patches: by step 2.1 their oriented area vectors are $\pm re_z$, nonzero on the parameter interiors $0<r<R$ and $0<\theta<2\pi$; equality of two cap images gives equality of their radii by [L3] and then equality of their angles by [L6]. Each side quarter is regular too: step 2.1 gives the nonzero area vector $R(\cos\theta,\sin\theta,0)$ on the parameter interior, the third coordinate recovers $z$, and [L6] recovers $\theta$ from the first two coordinates. The six images are exactly the top disc, the bottom disc, and the four quarter-cylinders of the lateral surface, so they cover $\partial C_{R,H}$. The caps meet the sides only along the top and bottom circles, and distinct side quarters meet only along vertical seam segments. In every patch, the preimage of such an overlap lies in the boundary of its compact rectangular parameter region, hence has content zero by [L8]. No overlap point is the image of interior points of two distinct patches. Therefore the six patches are compatible in the sense of [F5]. [step 1.1, step 2.1, F5, L3, L6, L8]
77: 
78: 3.2 In the $z$ direction the base is the closed disc $D_z=\{(x,y):x^2+y^2\le R^2\}$, the boundary functions are $\gamma_1(x,y)=0$ and $\gamma_2(x,y)=H$, the top cap is the upper sublist, the bottom cap is the lower sublist, and the four side quarters are lateral because their third area-vector coordinate is zero. [step 2.1, F2, F3, L1]
79: 
80: 3.3 In the $x$ direction the base is the rectangle $D_x=[-R,R]\times[0,H]$ in the coordinates $(y,z)$, the boundary functions are $\gamma_1^x(y,z)=-\sqrt{R^2-y^2}$ and $\gamma_2^x(y,z)=\sqrt{R^2-y^2}$, the two side quarters with $\cos\theta>0$ form the upper sublist, the two with $\cos\theta<0$ form the lower sublist, and both caps are lateral because their first area-vector coordinate is zero. [step 2.1, F2, F3, L1, L4]
81: 
82: 3.4 In the $y$ direction the base is the rectangle $D_y=[0,H]\times[-R,R]$ in the coordinates $(z,x)$, the boundary functions are $\gamma_1^y(z,x)=-\sqrt{R^2-x^2}$ and $\gamma_2^y(z,x)=\sqrt{R^2-x^2}$, the two side quarters with $\sin\theta>0$ form the upper sublist, the two with $\sin\theta<0$ form the lower sublist, and both caps are lateral because their second area-vector coordinate is zero. [step 2.1, F2, F3, L1, L4]
83: 
84: 4.1 The projected interior of the top cap is the open disc with the positive $x$-axis removed, while that of the bottom cap is the open disc with the positive $y$-axis removed: the polar parameter interior has $0<r<R$ and $0<\theta<2\pi$, so it misses the centre and the seam $\theta=0=2\pi$, and the two cap parametrizations place that seam on those two different radii. Thus each graph sublist in the $z$ direction fills the base up to the boundary circle together with one radius. The circle is the union of two continuous semicircle graphs, and each missing radius is itself a continuous graph over a compact interval, so the omitted set has content zero by [L7] and [F9]. [step 3.2, F3, F9, L7]
```

#### real-analysis / uncertain 005: `fs-spherical-coordinates-are-globally-injective`

- Location: **Statement**; source lines 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 79, 80, 81.
- Pages: `trigonometric-and-oscillatory-examples-in-several-variables-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/real-analysis/screenshots/fs-spherical-coordinates-are-globally-injective--01.png), [tile 02](math-library-rendering-audit-2026-10-23/real-analysis/screenshots/fs-spherical-coordinates-are-globally-injective--02.png); [frozen source](math-library-rendering-audit-2026-10-23/real-analysis/snapshots/fs-spherical-coordinates-are-globally-injective.md).

Exact frozen source lines:

```text
38: ## Statement
39: 
40: **False claim.** The spherical-coordinate map
41: 
42: $$S(r,\phi,\theta)=\bigl(r\sin\phi\cos\theta,\ r\sin\phi\sin\theta,\ r\cos\phi\bigr)$$
43: 
44: is injective on
45: $[0,\infty)\times[0,\pi]\times[0,2\pi]$.
46: 
47: The angular seam identifies $\theta=0$ with $\theta=2\pi$. At either polar
48: angle, every azimuth represents the same point, and at radius zero both angles
49: are lost. The Jacobian determinant
50: 
51: $$\det DS(r,\phi,\theta)=r^2\sin\phi$$
52: 
53: vanishes on the zero-radius and polar-axis loci.
79: 1.1 The two distinct points $(1,\pi/2,0)$ and $(1,\pi/2,2\pi)$ lie in $D$, and periodicity gives $S(1,\pi/2,0)=S(1,\pi/2,2\pi)=(1,0,0)$. [given, L1, L3, L4, L7]
80: 
81: 1.2 At $\phi=0$, every $\theta\in[0,2\pi]$ gives $S(r,0,\theta)=(0,0,r)$; at $\phi=\pi$, every such $\theta$ gives $S(r,\pi,\theta)=(0,0,-r)$; and $S(0,\phi,\theta)=(0,0,0)$ for every pair of angles. [given, L1, L3, L4, algebra]
```

#### real-analysis / uncertain 006: `cex-topologists-sine-curve-connected-not-path-connected`

- Location: **Facts & Assumptions**; source lines 52, 58.
- Pages: `trigonometric-and-oscillatory-examples-in-one-variable-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/real-analysis/screenshots/cex-topologists-sine-curve-connected-not-path-connected--01.png), [tile 02](math-library-rendering-audit-2026-10-23/real-analysis/screenshots/cex-topologists-sine-curve-connected-not-path-connected--02.png), [tile 03](math-library-rendering-audit-2026-10-23/real-analysis/screenshots/cex-topologists-sine-curve-connected-not-path-connected--03.png); [frozen source](math-library-rendering-audit-2026-10-23/real-analysis/snapshots/cex-topologists-sine-curve-connected-not-path-connected.md).

Exact frozen source lines:

```text
52: [L1] The topologist's sine curve $S=\{(x,\sin(1/x)):0<x\le1\}\cup(\{0\}\times[-1,1])$ is connected ([[lem-topologists-sine-curve-is-connected]]).
58: [L4] The interval $[0,1]$ is compact ([[thm-heine-borel-r]]), real and metric compactness agree on subsets of $\mathbb R$ ([[lem-real-and-metric-notions-agree]], claim 5), and a closed subset of a compact metric space is compact ([[lem-closed-subset-of-a-compact-space-is-compact]]).
```

