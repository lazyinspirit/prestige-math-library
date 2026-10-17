---
id: lem-loghom-barrier-gradient-is-dual
kind: lemma
title: "The negative gradient of a log-homogeneous cone barrier is dual feasible"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-self-concordant-log-homogeneous-barrier
  - def-conic-optimization-primal-dual-models
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 11 §11.6.1, generalized logarithms and their dual-cone gradients."
    - title: "Hamza Fawzi, Topics in Convex Optimisation, Lecture 15"
      url: "https://www.damtp.cam.ac.uk/user/hf323/M19-OPT/lecture15.pdf"
      locator: "Full lecture, Lemma 15.1 and Theorem 15.1, logarithmically homogeneous barrier gap argument."
---

## Statement

Let $K$ be a proper cone in a finite-dimensional real inner-product space and let $F$ be a differentiable $\nu$-log-homogeneous barrier on $\operatorname{int}K$. Then for every $x\in\operatorname{int}K$,
$$-\nabla F(x)\in K^*,\qquad DF(x)[x]=-\nu.$$

## Facts & Assumptions

**Given:** The dual-cone and log-homogeneity definitions in [[def-conic-optimization-primal-dual-models]] and [[def-self-concordant-log-homogeneous-barrier]].

[F1] $K^*=\{z:\langle z,k\rangle\ge0\text{ for all }k\in K\}$ ([[def-conic-optimization-primal-dual-models]]), and $F(\alpha x)=F(x)-\nu\log\alpha$ for $\alpha>0$ ([[def-self-concordant-log-homogeneous-barrier]]).

## Proof

1.1 Fix $y\in\operatorname{int}K$ and let $\phi(t)=F(x+ty)$ for $t\ge0$. The sum of an interior cone point and a cone point is interior, so $\phi$ is defined and convex. Log-homogeneity gives $\phi(t)=F(y+x/t)-\nu\log t$ for $t>0$, which tends to $-\infty$ as $t\to\infty$. If $DF(x)[y]=\phi'(0)>0$, convexity would imply $\phi(t)\ge\phi(0)+t\phi'(0)\to+\infty$, a contradiction. Thus $DF(x)[y]\le0$ for all interior $y$. [given, F1, algebra]

2.1 For any $y\in K$ and $\varepsilon>0$, $y+\varepsilon x\in\operatorname{int}K$: an open ball around $\varepsilon x$ lies in $K$, and adding $y\in K$ keeps that ball in $K$. Step 1.1 applied to $y+\varepsilon x$ and continuity of the linear functional $DF(x)$ as $\varepsilon\downarrow0$ give $DF(x)[y]\le0$. Hence $-\nabla F(x)$ pairs nonnegatively with every $y\in K$, so it lies in $K^*$ by [F1]. Differentiating $F(\alpha x)=F(x)-\nu\log\alpha$ at $\alpha=1$ gives $DF(x)[x]=-\nu$. [F1, step 1.1, algebra] ∎
