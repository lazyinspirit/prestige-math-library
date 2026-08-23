---
id: ex-xy-sine-one-over-radius-squared-has-unbounded-partial-derivatives
kind: example
title: "$xy\\sin(1/(x^2+y^2))$ is differentiable at the origin with unbounded partial derivatives nearby"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-trigonometric-parity-and-pythagorean-identity,
       thm-sine-and-cosine-derivatives,
       thm-chain-rule,
       thm-algebra-of-derivatives,
       def-total-derivative-in-euclidean-space,
       def-directional-and-partial-derivatives,
       def-p-norms-on-rn,
       thm-sine-cosine-zero-sets-and-fundamental-period,
       cor-archimedean-reciprocal,
       thm-nth-roots-exist,
       def-pi-via-first-positive-cosine-zero]
justified_by: []
aliases: []
landmark: true
short: "Differentiable with unbounded partials"
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

Define $f:\mathbb R^2\to\mathbb R$ by

$$f(0,0)=0,\qquad f(x,y)=xy\sin\!\left(\frac1{x^2+y^2}\right)\quad\text{when }(x,y)\ne(0,0).$$

Then $f$ is totally differentiable at the origin with $Df(0,0)=0$. Both partial
derivatives exist at every point, but each is unbounded on every neighbourhood
of the origin.

## Facts & Assumptions

**Given:** The function $f$ in the Example and $s=x^2+y^2$.

[L1] For every real $t$, $|\sin t|\le1$ and $|\cos t|\le1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L2] The functions $\sin$ and $\cos$ are differentiable on $\mathbb R$, with $(\sin t)'=\cos t$ and $(\cos t)'=-\sin t$; also $\sin0=0$ and $\cos0=1$ ([[thm-sine-and-cosine-derivatives]]).

[L3] If real functions $g$ and $h$ are differentiable at the relevant points, then $(g\circ h)'=(g'\circ h)h'$ ([[thm-chain-rule]]).

[L4] Products, sums, scalar multiples, and quotients with nonzero denominator obey their usual derivative rules ([[thm-algebra-of-derivatives]]).

[L5] A map is totally differentiable at the origin with derivative zero when $|f(h)|/\lVert h\rVert_2\to0$ as $h\to0$ through nonzero vectors ([[def-total-derivative-in-euclidean-space]]).

[L6] The coordinate partial derivatives are the derivatives of the two coordinate-line restrictions ([[def-directional-and-partial-derivatives]]).

[L7] For $(x,y)\in\mathbb R^2$, $\lVert(x,y)\rVert_2=\sqrt{x^2+y^2}$ ([[def-p-norms-on-rn]]).

[L8] Sine and cosine have period $2\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[L9] For every real $\varepsilon>0$ there is a natural $n\ge1$ with $1/n<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[L10] Every nonnegative real $a$ has a unique nonnegative square root $a^{1/2}$, positive when $a>0$ ([[thm-nth-roots-exist]]).

[L11] The number $\pi$ is positive ([[def-pi-via-first-positive-cosine-zero]]).

## Verification

**Proof technique:** direct.

1.1 For all real $x,y$, $2|xy|\le x^2+y^2=s$, since $(|x|-|y|)^2\ge0$. [algebra]

1.2 Both coordinate-line restrictions through the origin are identically zero, so $\partial_xf(0,0)=\partial_yf(0,0)=0$. [given, L6]

1.3 At every point with $s>0$, the derivative rules give $\partial_xf=y\sin(1/s)-2x^2y\cos(1/s)/s^2$ and $\partial_yf=x\sin(1/s)-2xy^2\cos(1/s)/s^2$. [given, L2, L3, L4, algebra]

1.4 For $k\ge1$ put $a_k=1/\sqrt{4\pi k}$. Then $a_k>0$ and $a_k\to0$: for $\varepsilon>0$, choose $N\ge1$ with $1/N<4\pi\varepsilon^2$ by [L9]; if $k\ge N$, then $0<a_k^2=1/(4\pi k)<\varepsilon^2$, hence $a_k<\varepsilon$. [L9, L10, L11, algebra]

2.1 If $(x,y)\ne(0,0)$, then $|f(x,y)|\le|xy|\le s/2=\lVert(x,y)\rVert_2^2/2$. [given, step 1.1, L1, L7]

2.2 Since $1/(2a_k^2)=2\pi k$, periodicity and the values in [L2] give $\sin(1/(2a_k^2))=0$ and $\cos(1/(2a_k^2))=1$; step 1.3 therefore gives $\partial_xf(a_k,a_k)=\partial_yf(a_k,a_k)=-1/(2a_k)$. [step 1.3, L2, L8, algebra]

3.1 Dividing step 2.1 by $\lVert(x,y)\rVert_2>0$ gives $|f(x,y)|/\lVert(x,y)\rVert_2\le\lVert(x,y)\rVert_2/2\to0$, so $f$ is totally differentiable at the origin with derivative zero. [step 2.1, L5, algebra]

4.1 Given any neighbourhood radius $\delta>0$ and any bound $B>0$, step 1.4 permits a $k$ with $a_k<\min\{\delta/\sqrt2,1/(2B)\}$; then $\lVert(a_k,a_k)\rVert_2<\delta$ while step 2.2 gives $|\partial_xf(a_k,a_k)|=|\partial_yf(a_k,a_k)|>B$. Thus both partial derivatives are unbounded on every neighbourhood of the origin. [step 1.4, step 2.2, L7, choose] ∎

## Remarks

Differentiability at one point controls the size of the function's increment there. It does not impose a bound on derivatives at nearby points, and the rapidly oscillating reciprocal phase makes that distinction explicit.
