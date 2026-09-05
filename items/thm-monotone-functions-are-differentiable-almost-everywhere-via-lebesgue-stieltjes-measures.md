---
id: thm-monotone-functions-are-differentiable-almost-everywhere-via-lebesgue-stieltjes-measures
kind: theorem
title: "A monotone function is differentiable almost everywhere by the Lebesgue-Stieltjes route"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, def-monotone-function, def-one-sided-limits, thm-countable-union-of-null-is-null, thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n, thm-dini-derivatives-exist-are-ordered-and-detect-differentiability, thm-froda, thm-increasing-functions-split-uniquely-as-jump-plus-continuous, thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures, thm-jump-functions-have-derivative-zero-almost-everywhere, thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line, thm-lebesgue-stieltjes-correspondence-with-distribution-functions]
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
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 14.5"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $F : [a,b] \to \mathbb{R}$ be monotone. Then $F$ is differentiable at
Lebesgue-almost every point of $(a,b)$.

## Facts & Assumptions

**Given:** Countable choice and a monotone function $F : [a,b] \to \mathbb{R}$.

[A1] The symbols are those of the statement.

## Proof

**Proof technique:** direct.

1.1 Replacing $F$ by $-F$ if necessary, we may assume that $F$ is nondecreasing. By [[thm-increasing-functions-split-uniquely-as-jump-plus-continuous]], write $F = J_F + C_F$ where $J_F$ is the jump part and $C_F$ is continuous and nondecreasing. By [[thm-jump-functions-have-derivative-zero-almost-everywhere]], $J_F' = 0$ almost everywhere. [given]

2.1 Let $\mu$ be the Lebesgue-Stieltjes measure of $C_F$. Since $C_F$ is continuous, [[thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures]] shows that $\mu$ has no atoms. The differentiation theorem for measures [[thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n]] applied to the shrinking interval families $(x-h,x]$ and $(x,x+h]$ therefore gives a full-measure set on which the left and right interval ratios of $\mu$ both converge to the same finite density. By the interval formulas for Lebesgue-Stieltjes measures, those interval ratios are exactly the left and right difference quotients of $C_F$. Hence all four Dini derivatives of $C_F$ agree finitely almost everywhere, and [[thm-dini-derivatives-exist-are-ordered-and-detect-differentiability]] implies that $C_F'$ exists almost everywhere. [step 1.1]

3.1 On the common full-measure set where $J_F'$ and $C_F'$ exist, one has $F' = J_F' + C_F' = C_F'$. Therefore $F'$ exists almost everywhere on $(a,b)$. Using [[thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line]], this is exactly the claimed almost-everywhere differentiability statement. [step 1.1, step 2.1] ∎
