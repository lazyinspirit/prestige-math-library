---
id: thm-exact-jordan-block-analytic-evaluation-correct
kind: theorem
title: "A verified Jordan evaluation returns the primary matrix function"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-exact-jordan-block-analytic-evaluation
  - def-analytic-primary-matrix-function
  - thm-analytic-primary-matrix-function-jordan-contour-agreement
proof_strategy: direct
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
    - title: "Jan Zur, Matrix Functions, TU Berlin full lecture notes"
      url: "https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf"
    - title: "Nicholas J. Higham, Functions of Matrices, Handbook of Linear Algebra, Chapter 17"
      url: "https://eprints.maths.manchester.ac.uk/2109/1/fm2_final_njh.pdf"
---

## Statement

If [[alg-exact-jordan-block-analytic-evaluation]] returns status exact for the
supplied $A$, $f$, and Jordan certificate, then its output is $f(A)$ as defined
by [[def-analytic-primary-matrix-function]].

## Facts & Assumptions

**Given:** A successful exact-Jordan output for $A$ and a holomorphic $f$.

[F1] On success the algorithm verifies $A=ZJZ^{-1}$ and returns
$Z\operatorname{diag}(F_1,\ldots,F_r)Z^{-1}$ with
$F_i=\sum_{k<d_i}f^{(k)}(\lambda_i)N_{d_i}^k/k!$
([[alg-exact-jordan-block-analytic-evaluation]]).

[F2] The analytic primary matrix function is the same Jordan block expression
([[def-analytic-primary-matrix-function]]), independent of the chosen
representation by [[thm-analytic-primary-matrix-function-jordan-contour-agreement]].

## Proof

1.1 By [F1], the returned matrix is the block expression formed from the verified Jordan representation and the exact derivatives of $f$. [given, F1]

2.1 This is exactly the defining expression in [F2]; independence of the certificate choice is supplied by [F2]. Therefore the output equals $f(A)$. [F2, step 1.1] ∎
