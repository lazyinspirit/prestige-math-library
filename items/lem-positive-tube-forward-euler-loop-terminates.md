---
id: lem-positive-tube-forward-euler-loop-terminates
kind: lemma
title: Termination of the finite-budget guarded forward-Euler loop
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
aliases: []
deps: [alg-positive-tube-forward-euler-for-compressible-sbp]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "R. Eymard, T. Gallouët, and R. Herbin, Finite Volume Methods, January 2019 updated author text, complete manuscript"
      url: "https://raphaeleh.github.io/PUBLI/bookevol.pdf"
      locator: "Chapter 1, Example 1.1, PDF pp. 4–5: a finite explicit-Euler stage and finite-volume balance. The bounded-loop termination is proved locally."
    - title: "Eitan Tadmor, Entropy Stable Schemes, Chapter 18, Handbook of Numerical Methods for Hyperbolic Problems: Basic and Fundamental Issues, 2016, complete chapter"
      url: "https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf"
      locator: "Sections 2–7: distinction between semidiscrete and fully discrete entropy assertions; the loop termination is proved locally."
---

## Statement

For every valid input to [[alg-positive-tube-forward-euler-for-compressible-sbp]] with finite budget $N$, the loop returns after at most $N$ candidate evaluations. Its accepted-step count is between $0$ and $N$, and every returned nodal state lies in the specified compact tube $\mathcal C$.

## Facts & Assumptions

**Given:** The algorithm inputs $U^0$, $\Delta t>0$, a finite integer budget $N\ge0$, and a compact tube $\mathcal C$ as specified in the algorithm definition.

[F1] [[alg-positive-tube-forward-euler-for-compressible-sbp]]: each candidate is either rejected with immediate return of the last accepted vector, or accepted after a nodewise test; after $N$ acceptances, the algorithm returns `completed`.

## Proof


1.1 If $N=0$, branch 4 of [F1] returns the input immediately, with zero evaluations and zero accepted stages. [F1, given]

1.2 Suppose $N>0$. At each visited stage $n<N$, branch 3 returns immediately if the candidate fails, so no rejected stage repeats; the algorithm reports $n$ accepted steps because $U^n$ follows exactly $n$ earlier acceptances. Otherwise branch 2 accepts one candidate, so the next stored iterate follows one more acceptance. If all $N$ candidates are accepted, branch 4 returns `completed` with count $N$. Thus the loop has at most $N$ evaluations and the accepted count lies in $[0,N]$. [F1, given]

2.1 The initial nodal vector is in $\mathcal C$ by the algorithm input. Each later vector becomes the stored state only after every node passes membership in $\mathcal C$; branch 3 returns the preceding stored vector. Therefore every returned nodal state lies in $\mathcal C$. [F1, step 1.2, given] ∎
