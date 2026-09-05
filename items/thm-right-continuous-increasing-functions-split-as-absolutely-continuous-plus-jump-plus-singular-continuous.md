---
id: thm-right-continuous-increasing-functions-split-as-absolutely-continuous-plus-jump-plus-singular-continuous
kind: theorem
title: "A right-continuous nondecreasing function splits uniquely as absolutely continuous plus jump plus singular continuous"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-absolutely-continuous-function, def-jump-function-of-an-increasing-function, def-singular-function, thm-absolute-continuity-of-the-integral, thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n, thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition, thm-first-fundamental-theorem-of-calculus-for-l-one, thm-increasing-functions-split-uniquely-as-jump-plus-continuous, thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures, thm-lebesgue-stieltjes-correspondence-with-distribution-functions]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. M. Bruckner, J. B. Bruckner, and B. S. Thomson, Real Analysis, 2nd ed., Theorems 7.14 and 7.22"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Section 14.5"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement

Assume the Axiom of Countable Choice.

Let $F : [a,b] \to \mathbb{R}$ be nondecreasing and right-continuous. Then
there exist unique nondecreasing functions $A,J,S : [a,b] \to \mathbb{R}$ such
that:

1. $F = A + J + S$;
2. $A$ is absolutely continuous;
3. $J$ is the jump function of $F$;
4. $S$ is continuous;
5. $S(a)=0$;
6. either $S$ is constant or $S$ is a singular function.

## Facts & Assumptions

**Given:** Countable choice and a right-continuous nondecreasing function $F : [a,b] \to \mathbb{R}$.

[A1] The symbols are those of the statement.

## Proof

**Proof technique:** direct.

1.1 Let $\mu_F$ be the Lebesgue-Stieltjes measure of $F$. By [[thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition]], $\mu_F = f\,\lambda + \mu_d + \mu_s$ with $f \in L^1([a,b])$ chosen nonnegative almost everywhere, $\mu_d$ discrete, and $\mu_s$ singular and atomless. Let $$ A(x) := F(a) + \int_{[a,x]} f\,d\lambda, $$ let $J$ be the distribution function of $\mu_d$ normalized by $J(a)=0$, and let $S$ be the distribution function of $\mu_s$ normalized by $S(a)=0$. By the Lebesgue-Stieltjes correspondence [[thm-lebesgue-stieltjes-correspondence-with-distribution-functions]], the measure of $A+J+S$ is exactly $\mu_F$, and at $x=a$ the three functions satisfy $A(a)+J(a)+S(a)=F(a)$. Hence $F=A+J+S$. [given, construct]

2.1 The integral form of $A-F(a)$ is absolutely continuous by [[thm-absolute-continuity-of-the-integral]], so $A$ is absolutely continuous as well, and because $f \ge 0$ almost everywhere the function $A$ is increasing. Also [[thm-first-fundamental-theorem-of-calculus-for-l-one]] gives $A'=f$ almost everywhere. The discrete measure $\mu_d$ is carried by its atoms, so the corresponding distribution function is exactly the jump function of $F$ by [[thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures]]. The atomless singular measure $\mu_s$ has a continuous distribution function $S$, again by the interval formulas. [step 1.1]

2.2 Uniqueness follows from the uniqueness of the measure decomposition of $\mu_F$ and the uniqueness part of the Lebesgue-Stieltjes correspondence: the absolutely continuous, discrete, and singular-continuous parts of the measure are unique, so the three normalized distribution functions are unique as well. [step 1.1]

3.1 Apply [[thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n]] to $\mu_s$. Its absolutely continuous part is zero, so the differentiation density is $0$ almost everywhere. The interval formulas therefore give $S' = 0$ almost everywhere. If $S$ is nonconstant, then it is continuous, nondecreasing, and has derivative $0$ almost everywhere, so $S$ is a singular function by [[def-singular-function]]. [step 2.1]

4.1 Steps 1.1 through 3.1 prove the theorem. [step 1.1, step 2.1, step 2.2, step 3.1] ∎
