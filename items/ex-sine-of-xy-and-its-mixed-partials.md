---
id: ex-sine-of-xy-and-its-mixed-partials
kind: example
title: "$\\sin(xy)$ and its mixed partial derivatives"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-sine-and-cosine-derivatives,
       thm-chain-rule,
       thm-algebra-of-derivatives,
       def-directional-and-partial-derivatives]
justified_by: []
aliases: []
landmark: false
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

For

$$f:\mathbb R^2\longrightarrow\mathbb R,\qquad f(x,y)=\sin(xy),$$

the first partial derivatives and the two mixed partial derivatives exist
everywhere and satisfy

$$\partial_xf(x,y)=y\cos(xy),\qquad \partial_yf(x,y)=x\cos(xy),$$

$$\partial_y\partial_xf(x,y)=\partial_x\partial_yf(x,y)=\cos(xy)-xy\sin(xy).$$

These formulas hold without excluding either coordinate axis.

## Facts & Assumptions

**Given:** The function $f(x,y)=\sin(xy)$ on $\mathbb R^2$.

[L1] The functions $\sin$ and $\cos$ are differentiable on $\mathbb R$, with $(\sin t)'=\cos t$ and $(\cos t)'=-\sin t$ ([[thm-sine-and-cosine-derivatives]]).

[L2] If real functions $g$ and $h$ are differentiable at the relevant points, then $(g\circ h)'=(g'\circ h)h'$ ([[thm-chain-rule]]).

[L3] If real functions $g$ and $h$ are differentiable at a point, then $(gh)'=g'h+gh'$; sums and scalar multiples obey the corresponding derivative rules ([[thm-algebra-of-derivatives]]).

[L4] A coordinate partial derivative is the derivative at zero of the corresponding coordinate-line restriction ([[def-directional-and-partial-derivatives]]).

## Verification

**Proof technique:** direct.

1.1 Fixing $y$ and differentiating the map $x\mapsto\sin(xy)$ gives $\partial_xf(x,y)=y\cos(xy)$. [L1, L2, L4]

1.2 Fixing $x$ and differentiating the map $y\mapsto\sin(xy)$ gives $\partial_yf(x,y)=x\cos(xy)$. [L1, L2, L4]

2.1 Differentiating the formula in step 1.1 with respect to $y$ gives $\partial_y\partial_xf(x,y)=\cos(xy)-xy\sin(xy)$. [step 1.1, L1, L2, L3]

2.2 Differentiating the formula in step 1.2 with respect to $x$ gives $\partial_x\partial_yf(x,y)=\cos(xy)-xy\sin(xy)$. [step 1.2, L1, L2, L3]

3.1 The formulas in steps 1.1 through 2.2 are defined for every $(x,y)\in\mathbb R^2$, including $x=0$ or $y=0$, and the two mixed partials agree everywhere. [step 1.1, step 1.2, step 2.1, step 2.2] ∎

## Remarks

The equality is obtained by direct calculation rather than by invoking [[thm-clairaut-schwarz-mixed-partials]]. It is therefore an explicit instance of that theorem, not an application used to determine the common formula.
