---
id: lem-nelder-mead-finite-budget-returns-status
kind: lemma
title: "Finite-budget Nelder–Mead always returns a status"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-nelder-mead-finite-budget
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tamara G. Kolda, Robert Michael Lewis, and Virginia Torczon, Optimization by Direct Search, Nelder–Mead discussion"
      url: https://www.kolda.net/publication/SIAM-42889.pdf
    - title: "K. I. M. McKinnon, Convergence of the Nelder–Mead Simplex Method to a Nonstationary Point, §§2–3"
      url: https://www.ime.unicamp.br/~sandra/MT853/handouts/Ref5%28McKinnon1998%29.pdf
verification:
  precheck: pass
---

## Statement

Every invocation of [[alg-nelder-mead-finite-budget]] with finite call budget $B$ returns a status after at most $B$ objective calls. If it returns **tolerance-met**, both the simplex diameter and objective spread satisfy their stated tolerances. The status is a finite-budget result only and does not certify global or local optimality.

## Facts & Assumptions

**Given:** The exact branch rules, stopping test, call accounting, and return statuses in [[alg-nelder-mead-finite-budget]].

[F1] Every continuing outer iteration performs a reflection evaluation, while each additional branch evaluates finitely many trials and checks the budget before each call ([[alg-nelder-mead-finite-budget]]).

[F2] The procedure returns tolerance-met only after testing both diameter and spread against their tolerances ([[alg-nelder-mead-finite-budget]]).

## Proof

1.1 Each continuing iteration consumes at least one call for reflection. Every further expansion, contraction, or shrink evaluation also consumes a call, and the counter is bounded by $B$; before any call that cannot fit in the remaining budget, the procedure returns budget-exhausted. It therefore cannot continue indefinitely and returns a listed status after at most $B$ calls. [F1, given, construct]

2.1 The only tolerance-met branch is the explicit test $D\le\varepsilon_x$ and $S\le\varepsilon_f$ on a committed simplex, so that status implies both inequalities. None of the algorithm's finite statuses asserts a minimizer without an additional theorem. [F2, given, step 1.1] ∎

