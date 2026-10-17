---
id: lem-proximal-gradient-one-step-estimate
kind: lemma
title: "One-step proximal-gradient estimate"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-proximal-gradient-mapping
  - thm-proximal-operator-existence-resolvent-firm-nonexpansive
  - lem-proximal-three-point-inequality
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
    - title: "Amir Beck and Marc Teboulle, A Fast Iterative Shrinkage-Thresholding Algorithm for Linear Inverse Problems, Lemma 2.3"
      url: "https://www.tau.ac.il/~becka/FISTA.pdf"
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §4.2"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
---

## Statement

Let $f:\mathbb R^n\to\mathbb R$ be convex and continuously differentiable with $L$-Lipschitz gradient, $L>0$, and let $g$ be proper, closed and convex. Put $F=f+g$ and $x^+=T_L(y)$. For every $z\in\mathbb R^n$,
$$F(z)\ge F(x^+)+\frac{L}{2}\|x^+-y\|_2^2+L\langle y-z,x^+-y\rangle.$$

## Facts & Assumptions

**Given:** The functions and points in the Statement.

[F1] [[lem-proximal-three-point-inequality]]: the proximal model at $y$ satisfies its three-point inequality for every comparison point.

[F2] [[lem-l-smoothness-descent-inequality]]: $f(x^+)\le f(y)+\langle\nabla f(y),x^+-y\rangle+(L/2)\|x^+-y\|_2^2$.

[F3] [[thm-differentiable-convex-functions-and-gradient-inequality]]: $f(z)\ge f(y)+\langle\nabla f(y),z-y\rangle$.

[F4] [[lem-smooth-composite-sum-preserves-proper-closed-convexity]]: $F$ is proper, closed and convex, and $F=f+g$.

[F5] [[thm-proximal-operator-existence-resolvent-firm-nonexpansive]]: $T_L(y)$ is an attained proximal minimizer; comparison with a finite-domain point shows $x^+\in\operatorname{dom}g$, so $F(x^+)$ is finite.

## Proof

1.1 Write $d=x^+-y$. If $g(z)=+\infty$, then $F(z)=+\infty$ and the asserted inequality holds because [F5] makes its right side finite. Otherwise $F(z)$ and $F(x^+)$ are real, so ordinary subtraction is valid. By [F2] and [F3], $$F(z)-F(x^+)\ge g(z)-g(x^+)+\langle\nabla f(y),z-x^+\rangle-\frac{L}{2}\|d\|_2^2.$$ The three-point inequality [F1], after rearrangement, gives $$g(z)-g(x^+)+\langle\nabla f(y),z-x^+\rangle\ge\frac{L}{2}\|d\|_2^2+\frac{L}{2}\bigl(\|x^+-z\|_2^2-\|z-y\|_2^2\bigr).$$ Substitution yields $$F(z)-F(x^+)\ge\frac{L}{2}\bigl(\|x^+-z\|_2^2-\|z-y\|_2^2\bigr).$$ [F1, F2, F3, F4, F5, given, algebra]

2.1 Since $z-y=(z-x^+)+d$, the difference of squares in step 1.1 is $$\|x^+-z\|_2^2-\|z-y\|_2^2=-2\langle z-x^+,d\rangle-\|d\|_2^2=2\langle y-z,d\rangle+\|d\|_2^2.$$ Multiplying by $L/2$ gives the finite-gap inequality; adding the finite value $F(x^+)$ yields the displayed statement. [step 1.1, F5, algebra] ∎
