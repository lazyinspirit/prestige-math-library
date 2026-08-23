---
id: ex-radial-r-squared-sine-one-over-r-is-differentiable-with-discontinuous-gradient
kind: example
title: "$r^2\\sin(1/r)$ is differentiable at the origin with a discontinuous gradient"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-p-norms-on-rn,
       cor-trigonometric-parity-and-pythagorean-identity,
       thm-sine-and-cosine-derivatives,
       thm-chain-rule,
       thm-algebra-of-derivatives,
       def-total-derivative-in-euclidean-space,
       thm-total-derivative-computes-directional-and-partial-derivatives,
       def-jacobian-matrix-and-gradient,
       thm-real-power-continuity-and-derivatives,
       thm-real-power-agrees-with-rational-exponent,
       thm-of-square-roots,
       thm-quarter-turn-values-and-shift-formulas,
       thm-sine-cosine-zero-sets-and-fundamental-period,
       cor-archimedean-reciprocal,
       def-pi-via-first-positive-cosine-zero]
justified_by: []
aliases: []
landmark: true
short: "Differentiable with discontinuous gradient"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, sections 8.3 and 11.4"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
    - title: "University of Toronto MAT237, section 2.1 Differentiation of real-valued functions"
      url: "https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter2/S2.1.html"
pipeline_run: null
---

## Example

For $(x,y)\in\mathbb R^2$ put $r=\sqrt{x^2+y^2}$ and define

$$F(0,0)=0,\qquad F(x,y)=r^2\sin(1/r)\quad\text{when }r>0.$$

Then $F$ is totally differentiable at the origin with derivative zero. On the
punctured plane,

$$\nabla F(x,y)=\left(2r\sin(1/r)-\cos(1/r)\right)\left(\frac{x}{r},\frac{y}{r}\right),$$

and this gradient is not continuous at the origin.

## Facts & Assumptions

**Given:** The function $F$ in the Example and $r=\lVert(x,y)\rVert_2$.

[L1] For $(x,y)\in\mathbb R^2$, $\lVert(x,y)\rVert_2=\sqrt{x^2+y^2}$ ([[def-p-norms-on-rn]]).

[L2] For every real $t$, $|\sin t|\le1$ and $\sin^2t+\cos^2t=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L3] The functions $\sin$ and $\cos$ are differentiable on $\mathbb R$, with $(\sin t)'=\cos t$ and $(\cos t)'=-\sin t$; also $\sin0=0$ and $\cos0=1$ ([[thm-sine-and-cosine-derivatives]]).

[L4] If real functions $g$ and $h$ are differentiable at the relevant points, then $(g\circ h)'=(g'\circ h)h'$ ([[thm-chain-rule]]).

[L5] Products, sums, scalar multiples, and quotients with nonzero denominator obey their usual derivative rules ([[thm-algebra-of-derivatives]]).

[L6] A map is totally differentiable at the origin with derivative zero when $|F(h)|/\lVert h\rVert_2\to0$ as $h\to0$ through nonzero vectors ([[def-total-derivative-in-euclidean-space]]).

[L7] For a scalar function, the gradient is the vector of its coordinate partial derivatives ([[def-jacobian-matrix-and-gradient]]).

[L8] On $(0,\infty)$, $(u^{1/2})'=\tfrac12u^{-1/2}$ ([[thm-real-power-continuity-and-derivatives]]).

[L9] If $a>0$ and $q\in\mathbb Q$, then the real power $a^q$ agrees with the rational power; in particular this holds for $q=1/2$ ([[thm-real-power-agrees-with-rational-exponent]]).

[L10] Every nonnegative real has a unique nonnegative square root ([[thm-of-square-roots]]).

[L11] For every real $t$, $\sin(t+\pi)=-\sin t$ and $\cos(t+\pi)=-\cos t$ ([[thm-quarter-turn-values-and-shift-formulas]]).

[L12] Both sine and cosine have period $2\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[L13] For every real $\varepsilon>0$ there is a natural $n\ge1$ with $1/n<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[L14] The number $\pi$ is positive ([[def-pi-via-first-positive-cosine-zero]]).

[L15] If a map is totally differentiable at a point, then each partial derivative there equals the total derivative applied to the corresponding standard basis vector ([[thm-total-derivative-computes-directional-and-partial-derivatives]]).

## Verification

**Proof technique:** direct.

1.1 For $r>0$, $|F(x,y)|/r=r|\sin(1/r)|\le r$; hence this quotient tends to zero as $(x,y)\to(0,0)$. [given, L1, L2, algebra]

1.2 For $k\ge1$ put $a_k=1/(2\pi k)$ and $b_k=1/((2k+1)\pi)$. Both are positive. Given $\varepsilon>0$, apply [L13] to $2\pi\varepsilon>0$ to obtain $N\ge1$ with $1/N<2\pi\varepsilon$; then $k\ge N$ gives $0<b_k<a_k\le1/(2\pi N)<\varepsilon$. Thus $a_k\to0$ and $b_k\to0$. [L13, L14, algebra]

1.3 On the punctured plane, applying the derivative of the positive square root to $r=(x^2+y^2)^{1/2}$ gives $\partial_xr=x/r$ and $\partial_yr=y/r$. [given, L4, L5, L8, L9, L10, algebra]

1.4 For $g(r)=r^2\sin(1/r)$ on $(0,\infty)$, the derivative rules give $g'(r)=2r\sin(1/r)-\cos(1/r)$. [L3, L4, L5, algebra]

2.1 Therefore $F$ is totally differentiable at the origin with derivative zero, and $\nabla F(0,0)=(0,0)$. [step 1.1, L6, L7, L15]

2.2 Since $F(x,y)=g(r)$ for $r>0$, steps 1.3 and 1.4 and the definition of the gradient give $\nabla F(x,y)=\left(2r\sin(1/r)-\cos(1/r)\right)(x/r,y/r)$. [step 1.3, step 1.4, L7]

3.1 Along the positive $x$-axis, periodicity gives $\nabla F(a_k,0)=(-1,0)$, while periodicity followed by the shift through $\pi$ gives $\nabla F(b_k,0)=(1,0)$. [step 1.2, step 2.2, L3, L11, L12, algebra]

4.1 Both point sequences in step 1.2 approach the origin but their gradient values in step 3.1 are distinct constants, so $\nabla F$ has no limit at the origin and is not continuous there. [step 2.1, step 1.2, step 3.1] ∎

## Remarks

The factor $r^2$ is strong enough to make $F(h)=o(\lVert h\rVert_2)$ at the origin. Differentiation removes one radial power and exposes the undamped cosine oscillation, which is why the gradient behaves differently from the function.
