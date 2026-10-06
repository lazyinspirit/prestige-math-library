---
id: "cex-dependent-equality-constraints-have-nonunique-multiplier-vectors"
kind: "counterexample"
title: "Dependent equality constraints have nonunique multiplier vectors"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 6
deps:
  - "def-frechet-derivative-between-banach-spaces"
  - "lem-lagrange-multiplier-is-unique-when-constraint-gradients-are-independent"
  - "thm-finite-regular-constraint-lagrange-multiplier-rule"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Riccardo Cristoferi, Calculus of Variations: Lecture Notes, Carnegie Mellon University 2016 (complete 133-page notes)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 7, printed pp. 67-68 (finite-dimensional Lagrange multipliers and the role of the independence of the constraint gradients)"
---

## Statement refuted

**Refuted:** that the multiplier vector produced by the Lagrange multiplier rule is unique without any independence hypothesis on the constraint derivatives — equivalently, that the conclusion of [[lem-lagrange-multiplier-is-unique-when-constraint-gradients-are-independent]] remains true when surjectivity of $DG(u)$ is dropped.

The witness is the finite-dimensional problem $X=\mathbb R^2$, $G(x,y)=(x,2x)$ and $I(x,y)=x^2+y^2$ ([[thm-finite-regular-constraint-lagrange-multiplier-rule]], [[def-frechet-derivative-between-banach-spaces]]). On the level set $G=0$, which is the $y$-axis, the point $u=(0,0)$ is the strict global minimiser of $I$, and $DI(u)=0$, while $DG_1(u)=(1,0)$ and $DG_2(u)=(2,0)$ are linearly dependent, so $DG(u)$ is not surjective. The stationarity equation $DI(u)=\lambda_1DG_1(u)+\lambda_2DG_2(u)$ holds exactly for the pairs with $\lambda_1+2\lambda_2=0$, a one-parameter family of multiplier vectors. Hence surjectivity of $DG(u)$, equivalently independence of the constraint gradients, is what makes the multiplier unique.

## Facts & Assumptions

**Given:** The maps $G:\mathbb R^2\to\mathbb R^2$, $G(x,y)=(x,2x)$, and $I:\mathbb R^2\to\mathbb R$, $I(x,y)=x^2+y^2$, with components $G_1(x,y)=x$, $G_2(x,y)=2x$, and the point $u=(0,0)$.

[F1] [[def-frechet-derivative-between-banach-spaces]]: $I$ and the components $G_1,G_2$ are differentiable everywhere with $DI(x,y)=(2x,2y)$ as a linear functional, $DG_1\equiv(1,0)$ and $DG_2\equiv(2,0)$, and $DG(x,y):\mathbb R^2\to\mathbb R^2$ is the linear map $(\xi,\eta)\mapsto(\xi,2\xi)$.

[F2] [[thm-finite-regular-constraint-lagrange-multiplier-rule]], [[lem-lagrange-multiplier-is-unique-when-constraint-gradients-are-independent]]: the multiplier rule asserts the existence of multipliers when $DG(u)$ is surjective, and the uniqueness lemma shows that surjectivity is precisely the hypothesis that rules out the degeneracy exhibited here.

## Counterexample

**Proof technique:** direct.

**Given:** The maps and point above.

1.1 The level set $\{G=G(u)\}=\{(x,y):x=0\}$ is the $y$-axis, and $I(0,y)=y^2\ge0$ with equality only for $y=0$; hence $u=(0,0)$ is the strict global minimiser of $I$ on the level set. [given, F1]

1.2 The derivatives at $u$ are $DI(u)=(0,0)=0$, $DG_1(u)=(1,0)$ and $DG_2(u)=(2,0)$ by [F1]; the map $DG(u):(\xi,\eta)\mapsto(\xi,2\xi)$ has image $\{(a,2a):a\in\mathbb R\}\ne\mathbb R^2$, so $DG(u)$ is not surjective, and $DG_2(u)=2\,DG_1(u)$ shows that the two constraint gradients are linearly dependent. [given, F1]

2.1 A pair $(\lambda_1,\lambda_2)\in\mathbb R^2$ satisfies $\lambda_1DG_1(u)+\lambda_2DG_2(u)=DI(u)$ exactly when $(\lambda_1+2\lambda_2,0)=(0,0)$, that is, exactly when $\lambda_1+2\lambda_2=0$; the solution set is the line of all pairs $(-2t,t)$, $t\in\mathbb R$, a one-parameter family. [step 1.2, F1, algebra]

3.1 The stationarity equation therefore holds for infinitely many multiplier vectors although the constrained minimiser is unique, so the claim that uniqueness of the multiplier follows from stationarity alone is false; the uniqueness statement of [F2] genuinely requires the surjectivity, equivalently the independence, hypothesis. [step 1.1, step 1.2, step 2.1, F2] ∎

