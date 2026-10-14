---
id: cor-wald-score-lr-asymptotic-equivalence
kind: corollary
title: First-order equivalence of Wald, score, and likelihood-ratio statistics
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - thm-wald-score-likelihood-ratio-asymptotic-chi-square
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 26, PDF pp. 11–17"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/26notes.pdf"
    - title: "Yen-Chi Chen, STAT 581 Chapter 4: Hypothesis tests in likelihood models, lines 73–76"
      url: "https://faculty.washington.edu/yenchic/26A_stat581/Lec4_Test.html"
---

## Statement

Assume AC and the hypotheses of
[[thm-wald-score-likelihood-ratio-asymptotic-chi-square]]. Under the null,
the three statistics satisfy
$W_n-S_n=o_P(1)$, $S_n-L_n=o_P(1)$, and $L_n-W_n=o_P(1)$. Hence they have
the same first-order null calibration, namely $\chi_q^2$.

## Facts & Assumptions

**Given:** AC and the hypotheses of
[[thm-wald-score-likelihood-ratio-asymptotic-chi-square]].

[F1] [[thm-wald-score-likelihood-ratio-asymptotic-chi-square]]: all three statistics equal one common quadratic score form up to $o_P(1)$, and that form converges to $\chi_q^2$.

[A1] [[def-axiom-of-choice]]: AC is inherited from [F1], whose iid score CLT uses the multivariate iid CLT.

## Proof

1.1 By [F1], there is a common random quadratic form $T_n$ with $W_n=T_n+o_P(1)$, $S_n=T_n+o_P(1)$, and $L_n=T_n+o_P(1)$. Subtracting the first two equalities and applying the triangle inequality gives $W_n-S_n=o_P(1)$; subtracting the second and third gives $S_n-L_n=o_P(1)$; subtracting the third and first gives $L_n-W_n=o_P(1)$. [A1, F1, algebra]

2.1 Theorem [F1] states $T_n\Rightarrow\chi_q^2$ and each statistic has that same limit under the theorem's hypotheses. The differences proved in step 1.1 therefore express first-order equivalence, not exact finite-sample equality. [F1, step 1.1] ∎
