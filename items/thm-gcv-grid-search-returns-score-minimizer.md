---
id: thm-gcv-grid-search-returns-score-minimizer
kind: theorem
title: Finite-grid GCV is well-defined and minimizes its supplied score
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: ai-altered
dependency_level: 2
deps:
  - alg-gcv-finite-grid-parameter-choice
  - lem-linear-smoother-gcv-expression
aliases: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 5: Regularization Parameter Choice"
      url: https://people.compute.dtu.dk/pcha/DIP/chap5.pdf
      locator: Complete 27-slide chapter; slides 16–18 give the finite GCV score and caution about occasional failure.
    - title: "Guido Clason, Regularization of Inverse Problems, full lecture notes"
      url: https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf
      locator: Chapter 4, §4.1 on heuristic and a-posteriori rules, PDF pp. 34–35; the present result concerns only a finite score search.
---

## Statement

For every admissible input to [[alg-gcv-finite-grid-parameter-choice]], all
GCV scores are finite real numbers, the algorithm terminates, and its output
has the least score on the supplied grid, with ties resolved by the least
index. This is a score-minimization statement only; it gives no bound on
solution error or universal statistical optimality.

## Facts & Assumptions

**Given:** A real matrix $A\in\mathbb R^{m\times n}$, $m\ge1$, data
$b\in\mathbb R^m$, and a nonempty finite increasing positive grid, as in
[[alg-gcv-finite-grid-parameter-choice]].

[F1] [[alg-gcv-finite-grid-parameter-choice]]: The algorithm computes the
Tikhonov hat matrix and the stated GCV score at each grid point, then returns
a least-score parameter with least-index tie breaking.

[F2] [[lem-linear-smoother-gcv-expression]]: For every $\lambda>0$,
$1-\operatorname{tr}(H_\lambda)/m>0$ and the score equals
$\|(I-H_\lambda)b\|^2/[m(1-\operatorname{tr}(H_\lambda)/m)^2]$.

## Proof
1.1 Each $\lambda_j>0$ makes $A^TA+\lambda_jI$ positive definite, so all matrix inverses in [F1] exist. By [F2], the denominator of each score is strictly positive; the numerator is a finite squared norm. Thus each score is a finite real number. The procedure performs finitely many operations for finitely many grid entries and terminates. [given, F1, F2, algebra]

2.1 A nonempty finite list of real scores has a minimum, and a nonempty finite set of indices attaining the minimum has a least element. By the selection rule in [F1], the algorithm returns that index and hence a least-score grid parameter. No part of this finite comparison identifies the score with the unknown solution error. [F1, step 1.1, algebra] ∎
