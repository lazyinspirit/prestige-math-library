---
id: thm-exact-cp-als-block-updates-are-monotone
kind: theorem
title: Exact CP-ALS block updates do not increase the objective
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-tensor-arrays-and-frobenius-inner-product, def-canonical-polyadic-rank, lem-full-column-rank-matrix-least-squares-solution, alg-budgeted-cp-alternating-least-squares]
aliases: []
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "ACM 270-1, Complete Lecture Notes, Caltech, Spring 2019, Lecture 13, §4.3"
      url: "https://iqim.caltech.edu/wp-content/uploads/2019/08/ACM270_complete_lecture_notes.pdf"
    - title: "Tamara G. Kolda and Brett W. Bader, Tensor Decompositions and Applications, SIAM Review 51(3) (2009), §3.4"
      url: "https://www.kolda.net/publication/TensorReview.pdf"
dependency_level: 3
---

## Statement

During budgeted CP-ALS, each successful exact block update does not increase the squared Frobenius residual. A rank-deficient-design halt leaves the factor matrices unchanged, so it leaves the objective unchanged. Consequently, the objective is nonincreasing over every sequence of completed exact block updates.

## Facts & Assumptions

**Given:** The tensor, initial factor matrices, finite budget, and exact-arithmetic procedure of budgeted CP-ALS.

[F1] [[alg-budgeted-cp-alternating-least-squares]]: each successful block replaces one factor by the exact least-squares minimizer with other factors fixed; a rank-deficient design halts without changing the current factor.

[F2] [[lem-full-column-rank-matrix-least-squares-solution]]: a full-column-rank design has a unique Frobenius least-squares minimizer, and its residual is no larger than that of any other candidate factor.

## Proof

1.1 Fix a successful mode-$k$ update and keep all other factor matrices fixed. The residual objective as a function of the replaced factor $X$ is $\|A_{(k)}-XZ_k^{\mathsf T}\|_F^2$. Taking adjoints preserves the Frobenius norm and rewrites it as $\|A_{(k)}^*-\overline{Z_k}X^*\|_F^2$. Since $Z_k$ has full column rank, so does $\overline{Z_k}$; [F2] therefore makes the algorithm's update the unique minimizer of this block objective. The old factor is an admissible candidate, so the updated objective is at most the old one. [F1, F2, algebra]

2.1 A rank-deficient-design branch stops before changing a factor, so the objective is identical before and after that branch. Every other executed update satisfies step 1.1; chaining these finitely many inequalities across any completed part of a sweep proves the objective is nonincreasing through all successful exact block updates. This asserts no convergence or global optimality. [F1, step 1.1, algebra] ∎
