---
id: lem-inexact-proximal-gradient-one-step-estimate
kind: lemma
title: "One-step estimate for a certified inexact proximal call"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-certified-inexact-proximal-gradient-and-fista
  - def-extended-real-epsilon-subdifferential
  - lem-l-smoothness-descent-inequality
  - lem-smooth-composite-sum-preserves-proper-closed-convexity
  - thm-differentiable-convex-functions-and-gradient-inequality
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Mark Schmidt, Nicolas Le Roux, and Francis Bach, Convergence Rates of Inexact Proximal-Gradient Methods for Convex Optimization, Appendix §§6.1–6.2"
      url: "https://arxiv.org/pdf/1109.2415"
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §4.2"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
---

## Statement

Let $f$ be convex, continuously differentiable and have $L$-Lipschitz gradient, $L>0$, and let $g$ be proper, closed and convex. Given $y$, suppose $x^+$ and $\eta\ge0$ satisfy
$$L(y-x^+)-\nabla f(y)\in\partial_\eta g(x^+).$$
With $F=f+g$, for every $z\in\mathbb R^n$,
$$F(z)\ge F(x^+)+\frac{L}{2}\|x^+-y\|_2^2+L\langle y-z,x^+-y\rangle-\eta.$$

## Facts & Assumptions

**Given:** The functions, certificate and points in the Statement.

[F1] [[alg-certified-inexact-proximal-gradient-and-fista]]: each reported proximal call supplies $L(y-x^+)-\nabla f(y)\in\partial_\eta g(x^+)$ with $\eta\ge0$.

[F2] [[def-extended-real-epsilon-subdifferential]]: the certificate means $g(z)-g(x^+)\ge\langle L(y-x^+)-\nabla f(y),z-x^+\rangle-\eta$ for finite $g(z)$.

[F3] [[lem-l-smoothness-descent-inequality]]: $f(x^+)\le f(y)+\langle\nabla f(y),x^+-y\rangle+(L/2)\|x^+-y\|_2^2$.

[F4] [[thm-differentiable-convex-functions-and-gradient-inequality]]: $f(z)\ge f(y)+\langle\nabla f(y),z-y\rangle$.

[F5] [[lem-smooth-composite-sum-preserves-proper-closed-convexity]]: $F=f+g$ is a well-defined proper convex extended-real objective.

[F6] [[def-extended-real-epsilon-subdifferential]]: membership in $\partial_\eta g(x^+)$ entails $x^+\in\operatorname{dom}g$; since $f$ is real-valued, $F(x^+)$ is finite.

## Proof

1.1 Put $d=x^+-y$. If $g(z)=+\infty$, then $F(z)=+\infty$ and the asserted inequality holds because [F6] makes its right side finite. Otherwise $F(z)$ and $F(x^+)$ are real, so ordinary subtraction is valid. From [F3] and [F4], $$F(z)-F(x^+)\ge g(z)-g(x^+)+\langle\nabla f(y),z-x^+\rangle-\frac{L}{2}\|d\|_2^2.$$ By [F2], the first two terms on the right are bounded below by $L\langle y-x^+,z-x^+\rangle-\eta$. [F1, F2, F3, F4, F5, F6, given, algebra]

2.1 Since $y-x^+=-d$ and $z-x^+=(z-y)-d$, the lower bound from step 1.1 is $$L\langle y-x^+,z-x^+\rangle-\frac{L}{2}\|d\|_2^2-\eta=L\langle y-z,d\rangle+\frac{L}{2}\|d\|_2^2-\eta.$$ Adding the finite value $F(x^+)$ gives the displayed inequality. [step 1.1, F6, algebra] ∎
