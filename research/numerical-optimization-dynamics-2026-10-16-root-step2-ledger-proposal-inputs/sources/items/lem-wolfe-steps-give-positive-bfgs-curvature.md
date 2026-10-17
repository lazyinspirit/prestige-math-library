---
id: lem-wolfe-steps-give-positive-bfgs-curvature
kind: lemma
title: "A Wolfe step gives positive Bfgs curvature on a descent direction"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-wolfe-and-strong-wolfe-conditions
  - def-bfgs-curvature-pair-and-update-formulas
  - def-euclidean-inner-product
proof_strategy: direct
axiom_use: "None beyond classical real analysis and finite-dimensional linear algebra supplied by the listed dependencies; no choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 6 §6.1, equations (6.7)–(6.8), printed pp. 138–139 / PDF pp. 156–157."
    - title: "Manuel Carreira-Perpiñán, Lecture Notes on Numerical Optimization"
      url: "https://faculty.ucmerced.edu/mcarreira-perpinan/teaching/EECS260/lecture-notes.pdf"
      locator: "§6, curvature condition and Wolfe implication, printed p. 21 / PDF p. 22."
---

## Statement

Let $f:D\to\mathbb R$ be $C^1$ on an open $D\subseteq\mathbb R^n$. At $x\in D$, let $p\ne0$ be a strict descent direction, so $g^Tp<0$ for $g:=\nabla f(x)$. Suppose $\alpha>0$, $x+\alpha p\in D$, and $\alpha$ satisfies the Wolfe curvature condition of [[def-wolfe-and-strong-wolfe-conditions]]. With $s:=\alpha p$ and $y:=\nabla f(x+\alpha p)-\nabla f(x)$, one has
$$ s^Ty\ge(1-c_2)\alpha |g^Tp|>0. $$

## Facts & Assumptions

**Given:** $f,x,p,\alpha,g,s,y$ and the strict-descent and Wolfe hypotheses in the Statement.

[F1] [[def-wolfe-and-strong-wolfe-conditions]]: for $\phi(t)=f(x+tp)$, a Wolfe step satisfies $\phi'(\alpha)\ge c_2\phi'(0)$ with $0<c_2<1$; the chain rule gives $\phi'(t)=\nabla f(x+tp)^Tp$.

[F2] [[def-bfgs-curvature-pair-and-update-formulas]]: $s=\alpha p$ and $y=\nabla f(x+\alpha p)-\nabla f(x)$.

[F3] [[def-euclidean-inner-product]]: $u^Tv$ denotes the Euclidean inner product of $u,v\in\mathbb R^n$.

## Proof

1.1 By [F1] and [F2], $$ s^Ty=\alpha p^T(\nabla f(x+\alpha p)-g) \ge\alpha(c_2-1)g^Tp =(1-c_2)\alpha |g^Tp|. $$ The last quantity is strictly positive because $\alpha>0$, $c_2<1$, and $g^Tp<0$. [given, F1, F2, F3, algebra]

2.1 Thus $s^Ty>0$, so the curvature denominator used in the BFGS updates is positive and the pair meets the positive-curvature condition of [[def-bfgs-curvature-pair-and-update-formulas]]. [step 1.1, F2] ∎
