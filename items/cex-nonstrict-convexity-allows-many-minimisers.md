---
id: cex-nonstrict-convexity-allows-many-minimisers
kind: counterexample
title: "Non-strict convexity allows many minimisers"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-convex-and-strictly-convex-functionals-on-a-banach-space, cor-strict-convexity-gives-uniqueness-of-a-minimiser]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.2, Corollary 13.4 and Example 13.5, printed p. 299"
    - title: "Riccardo Cristoferi, Calculus of Variations: Lecture Notes, Carnegie Mellon University 2016 (complete 133-page notes)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 2 Section 2.4, convex functions, printed pp. 14-15"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

**Counterexample.** On the real Banach space $\mathbb R^2$ consider $I(x,y)=x^2$. Then $I$ is convex ([[def-convex-and-strictly-convex-functionals-on-a-banach-space]]) and
$$\operatorname*{arg\,min}_{\mathbb R^2}I=\{(0,y):y\in\mathbb R\},$$
an affine line of minimisers: $I\ge0$ and $I(0,y)=0$ for every $y$, while for $x\ne0$, $I(x,y)>0$. The functional is not strictly convex, so the strictness hypothesis in [[cor-strict-convexity-gives-uniqueness-of-a-minimiser]] is genuinely needed: convexity alone does not force uniqueness of a minimiser.

## Facts & Assumptions

**Given:** The functional $I:\mathbb R^2\to\mathbb R$, $I(x,y)=x^2$, on the real Banach space $\mathbb R^2$.

[F1] A function $I$ on a convex set is convex when $I(\lambda u+(1-\lambda)v)\le\lambda I(u)+(1-\lambda)I(v)$ for all $u,v$ and $\lambda\in[0,1]$, and strictly convex when the inequality is strict for $u\ne v$ and $\lambda\in(0,1)$ with finite values ([[def-convex-and-strictly-convex-functionals-on-a-banach-space]]).

[F2] A proper, strictly convex functional has at most one minimiser on a convex set; in particular at most one finite minimiser ([[cor-strict-convexity-gives-uniqueness-of-a-minimiser]]).

## Counterexample

**Proof technique:** direct verification.

1.1 $I$ is convex. For $u=(x_1,y_1)$, $v=(x_2,y_2)$ and $\lambda\in[0,1]$ one computes $I(\lambda u+(1-\lambda)v)=(\lambda x_1+(1-\lambda)x_2)^2$ and $\lambda I(u)+(1-\lambda)I(v)=\lambda x_1^2+(1-\lambda)x_2^2$, whose difference is $\lambda(1-\lambda)(x_1-x_2)^2\ge0$; hence $I$ is convex by [F1]. [F1, algebra]

1.2 The minimisers. Since $I(x,y)=x^2\ge0$ for every $(x,y)$, and $x^2=0$ exactly when $x=0$, the infimum of $I$ on $\mathbb R^2$ is $0$ and the set of minimisers is exactly the affine line $\{(0,y):y\in\mathbb R\}$. [algebra]

1.3 $I$ is not strictly convex. Take the distinct points $u=(0,0)$ and $v=(0,1)$, which satisfy $I(u)=I(v)=0<+\infty$, and $\lambda=\tfrac12$. Then $I(\tfrac12u+\tfrac12v)=I(0,\tfrac12)=0=\tfrac12I(u)+\tfrac12I(v)$, so the strict inequality required by [F1] fails; hence $I$ is not strictly convex. [F1, algebra]

2.1 Uniqueness genuinely needs strictness. The line $\{(0,y):y\in\mathbb R\}$ consists of pairwise distinct minimisers of the convex functional $I$ by step 1.2, so convexity alone does not force uniqueness; by [F2] the uniqueness conclusion requires the strict convexity hypothesis, which fails for this functional by step 1.3. This is exactly the sharpness recorded in the statement refuted. [F2, step 1.2, step 1.3] ∎ 
