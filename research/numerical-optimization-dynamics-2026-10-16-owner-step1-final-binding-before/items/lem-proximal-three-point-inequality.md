---
id: lem-proximal-three-point-inequality
kind: lemma
title: "Three-point inequality for the proximal-gradient model"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-proper-closed-convex-function-on-rn
  - def-proximal-mapping
  - thm-proximal-operator-existence-resolvent-firm-nonexpansive
  - def-extended-real-epsilon-subdifferential
  - def-euclidean-inner-product
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §4.2"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
    - title: "Amir Beck and Marc Teboulle, A Fast Iterative Shrinkage-Thresholding Algorithm for Linear Inverse Problems, Lemma 2.3"
      url: "https://www.tau.ac.il/~becka/FISTA.pdf"
---

## Statement

Let $g$ be proper, closed and convex, let $L>0$, let $f$ be differentiable at $y$, and set $x^+=\operatorname{prox}_{g/L}(y-\nabla f(y)/L)$. For every $z\in\mathbb R^n$,
$$g(x^+)+\langle\nabla f(y),x^+-y\rangle+\frac{L}{2}\|x^+-y\|_2^2+\frac{L}{2}\|x^+-z\|_2^2\le g(z)+\langle\nabla f(y),z-y\rangle+\frac{L}{2}\|z-y\|_2^2.$$

## Facts & Assumptions

**Given:** The function, point, and scalar in the Statement.

[F1] [[thm-proximal-operator-existence-resolvent-firm-nonexpansive]]: $x^+=\operatorname{prox}_{g/L}(w)$ iff $L(w-x^+)\in\partial g(x^+)$.

[F2] [[def-extended-real-epsilon-subdifferential]]: $p\in\partial g(x)$ implies $g(z)\ge g(x)+\langle p,z-x\rangle$ for every $z$.

[F3] [[def-proximal-mapping]]: the proximal step uses $w=y-\nabla f(y)/L$ and parameter $1/L$.

## Proof

1.1 By [F1] and [F3], $L(y-x^+)-\nabla f(y)\in\partial g(x^+)$. For finite $g(z)$, [F2] gives $$g(z)-g(x^+)\ge\langle L(y-x^+)-\nabla f(y),z-x^+\rangle.$$ Add $\langle\nabla f(y),z-x^+\rangle$ and $\frac{L}{2}(\|z-y\|_2^2-\|x^+-y\|_2^2)$ to both sides. Using $$\|z-y\|_2^2-\|x^+-y\|_2^2=\|z-x^+\|_2^2+2\langle z-x^+,x^+-y\rangle$$ and $y-x^+=-(x^+-y)$ cancels the cross terms and leaves $L\|z-x^+\|_2^2/2$. Rearranging is the claimed inequality. [F1, F2, F3, given, algebra]

2.1 If $g(z)=+\infty$, the right side is $+\infty$ and the inequality holds automatically, so the finite-$g(z)$ calculation proves the statement for every $z$. [step 1.1, algebra] ∎
