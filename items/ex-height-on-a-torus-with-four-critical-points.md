---
id: ex-height-on-a-torus-with-four-critical-points
kind: example
title: "A standard torus height function has four critical points"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-morse-function-and-excellent-morse-function, def-nondegenerate-critical-point-nullity-index-and-coindex]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct computation
verification:
  audited: 2026-09-04
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
---

## Example

On the torus $T^2=\mathbb R^2/\mathbb Z^2$, the smooth function

$$f([x],[y])=\cos(2\pi x)+\cos(2\pi y)$$

has exactly four critical points: one minimum, two saddles, and one maximum.
It is Morse but not excellent.

## Facts & Assumptions

**Given:** The torus function $f([x],[y])=\cos(2\pi x)+\cos(2\pi y)$.

[F1] Morse, excellent, nondegenerate, and index are defined on the A page
([[def-morse-function-and-excellent-morse-function]],
[[def-nondegenerate-critical-point-nullity-index-and-coindex]]).

## Verification

**Proof technique:** direct computation.

1.1 The partial derivatives are $\partial f/\partial x=-2\pi\sin(2\pi x)$ and $\partial f/\partial y=-2\pi\sin(2\pi y)$, so a point is critical exactly when $x,y\in\{0,\tfrac12\}$ mod $\mathbb Z$. Hence there are exactly four critical points. [given, algebra]

2.1 The Hessian matrix is $\operatorname{diag}(-4\pi^2\cos(2\pi x),-4\pi^2\cos(2\pi y))$. At $(0,0)$ it is negative definite, at $(\tfrac12,\tfrac12)$ it is positive definite, and at $(0,\tfrac12)$ and $(\tfrac12,0)$ it has one positive and one negative eigenvalue. Therefore the four critical points have indices $2,0,1,1$ respectively, and all are nondegenerate. [F1, step 1.1, algebra]

3.1 Hence $f$ is Morse by [F1]. Its critical values are $2,-2,0,0$, so the two saddles share the value $0$. Therefore $f$ is not excellent. [F1, step 2.1, algebra] ∎
