---
id: ex-global-lipschitz-scalar-ornstein-uhlenbeck-well-posedness
kind: example
title: A scalar Ornstein–Uhlenbeck SDE satisfies the strong well-posedness hypotheses
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
axiom_base: Full AC
deps:
  - def-ito-sde-and-strong-solution
  - thm-global-strong-well-posedness-for-lipschitz-ito-sdes
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Ramon van Handel, Stochastic Calculus, Filtering, and Stochastic Control: Lecture Notes (ACM 217, Spring 2007), Chapter 5.1"
      url: "https://web.math.princeton.edu/~rvan/acm217/ACM217.pdf"
    - title: "A.W. van der Vaart, Martingales, Diffusions and Financial Mathematics (preliminary notes), Section 7.1"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Example

Fix $T>0$, $\theta\ge0$, and $\sigma_0\in\mathbb R\setminus\{0\}$.
On a complete usual filtered probability space, let $W$ be a filtration-relative
standard scalar Brownian motion and let $X_0$ be $\mathcal F_0$-measurable,
square-integrable, and independent of the future Brownian increments. Consider
$$dX_t=-\theta X_t\,dt+\sigma_0\,dW_t,\qquad 0\le t\le T.$$
In dimension one, a constant diffusion is nondegenerate when its variance
$\sigma_0^2$ is positive.

## Facts & Assumptions

**Given:** The data above, the coefficient maps $b(t,x)=-\theta x$ and
$\sigma(t,x)=\sigma_0$, and the Itô SDE conventions of the A page.

[F1] The global well-posedness contract requires jointly Borel coefficients,
uniform global state Lipschitz and linear-growth bounds, a filtration-relative
Brownian motion, and an independent $\mathcal F_0$ initial value in $L^2$.
[[def-ito-sde-and-strong-solution]]

[F2] Under those hypotheses the SDE has an adapted continuous strong solution,
unique up to indistinguishability, with finite $E\sup_{t\le T}|X_t|^2$.
[[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]

## Verification

1.1 The coefficients are jointly Borel. For all $x,y$, $|b(t,x)-b(t,y)|+|\sigma(t,x)-\sigma(t,y)|=\theta|x-y|$, so the uniform Lipschitz constant can be $L=\theta$. Also $|b(t,x)|+|\sigma(t,x)|=\theta|x|+|\sigma_0|\le(\theta+|\sigma_0|)(1+|x|)$, so the linear-growth constant can be $K=\theta+|\sigma_0|$. Finally $\sigma_0^2>0$, so the constant scalar diffusion is nondegenerate. [given, F1, algebra]

2.1 The initial value and Brownian motion satisfy the filtration and moment assumptions by the example's hypotheses. Step 1.1 verifies both coefficient bounds, so [F2] gives a unique adapted continuous strong solution on $[0,T]$ and its finite path-sup second moment. [given, F1, F2, step 1.1] ∎
