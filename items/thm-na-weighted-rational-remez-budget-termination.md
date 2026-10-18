---
id: thm-na-weighted-rational-remez-budget-termination
kind: theorem
title: "A budgeted weighted rational Remez exchange terminates within its finite cap"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - alg-na-weighted-rational-remez-exchange
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Silviu-Ioan Filip, Yuji Nakatsukasa, Lloyd N. Trefethen, and Bernhard Beckermann, Rational Minimax Approximation via Adaptive Barycentric Representations, §§3–4"
      url: "https://people.maths.ox.ac.uk/trefethen/minimax_published.pdf"
      locator: "pp. A2432–A2436, finite rational Remez solve and update branches."
---

## Statement

For a finite integer budget $B\in\mathbb N_0$, the procedure
[[alg-na-weighted-rational-remez-exchange]] makes at most $B+1$ alternation
solver calls and at most $B+1$ extrema-oracle calls (at most $2(B+1)$ calls
total) and returns an explicit status, provided each input procedure
terminates. This does not assert that the nonlinear solver succeeds or that
the exchange iterates converge.

## Facts & Assumptions

**Given:** The input and status contract of [[alg-na-weighted-rational-remez-exchange]], with a finite integer budget $B\in\mathbb N_0$ and terminating solver/oracle calls.

[F1] [[alg-na-weighted-rational-remez-exchange]]: each iteration makes one solver call and, only after a normal candidate, at most one extrema-oracle call; it either returns a status or exchanges one reference node.

## Proof

1.1 Every entered iteration has exactly one solver call; if the solver returns a status, the procedure terminates. If it returns a defective candidate, the explicit defect branch terminates. Otherwise a normal candidate receives one oracle call. An inconclusive response returns oracle-inconclusive; every other response either returns a certificate or zero-level status, or searches the finite reference set for an exchange and then returns no-valid-exchange or updates one node. Thus each iteration terminates under the given termination hypothesis. [given, F1]

2.1 The loop has only the indices $0,\ldots,B$, so it has at most $B+1$ iterations. Each iteration makes one solver call and at most one oracle call, giving at most $B+1$ calls to each procedure. If no earlier branch returns, the final iteration is followed by budget-exhausted. Therefore the procedure terminates within the stated total call bound. [given, F1, step 1.1, algebra] ∎
