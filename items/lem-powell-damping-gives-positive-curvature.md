---
id: lem-powell-damping-gives-positive-curvature
kind: lemma
title: "Powell damping gives a strictly positive curvature pair"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-bfgs-curvature-pair-and-update-formulas
proof_strategy: direct
axiom_use: "None beyond classical real analysis and finite-dimensional linear algebra supplied by the listed dependencies; no choice principle is used."
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
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 18 §18.3, Procedure 18.2 and equation (18.17), printed pp. 537–538 / PDF pp. 555–556."
    - title: "Manuel Carreira-Perpiñán, Lecture Notes on Numerical Optimization"
      url: "https://faculty.ucmerced.edu/mcarreira-perpinan/teaching/EECS260/lecture-notes.pdf"
      locator: "§6, positive-curvature BFGS update, printed pp. 21–22 / PDF pp. 22–23."
---

## Statement

Let $B$ be SPD, let $s\ne0$, and put $c:=s^TBs>0$ and $q:=s^Ty$ for an arbitrary $y$. Define $\widetilde y$ by Powell damping in [[def-bfgs-curvature-pair-and-update-formulas]]. Then $s^T\widetilde y\ge0.2c>0$. In the damped branch, the coefficient $\theta$ is strictly between $0$ and $1$ and $s^T\widetilde y=0.2c$.

## Facts & Assumptions

**Given:** $B,s,y,c,q$ and the damping rule in the Statement.

[F1] [[def-bfgs-curvature-pair-and-update-formulas]]: if $q<0.2c$, then $\theta=0.8c/(c-q)$ and $\widetilde y=\theta y+(1-\theta)Bs$; otherwise $\widetilde y=y$.

## Proof


**Given:** $B,s,y,c,q$ and the damping rule in the Statement.

[F1] [[def-bfgs-curvature-pair-and-update-formulas]]: if $q<0.2c$, then $\theta=0.8c/(c-q)$ and $\widetilde y=\theta y+(1-\theta)Bs$; otherwise $\widetilde y=y$.



1.1 In the damped branch, $q<0.2c$ gives $c-q>0.8c>0$. Therefore $\theta>0$ and $\theta<1$. [given, F1, algebra]

2.1 In that branch, $$ s^T\widetilde y=\theta q+(1-\theta)c =c-\theta(c-q)=c-0.8c=0.2c>0. $$ In the other branch, $\widetilde y=y$ and $q\ge0.2c$, so $s^T\widetilde y=q\ge0.2c>0$. [given, F1, step 1.1, algebra] ∎

