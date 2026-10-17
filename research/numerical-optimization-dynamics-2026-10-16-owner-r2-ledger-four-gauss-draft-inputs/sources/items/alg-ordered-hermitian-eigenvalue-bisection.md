---
id: alg-ordered-hermitian-eigenvalue-bisection
kind: algorithm
title: Budgeted ordered Hermitian eigenvalue bisection by verified inertia
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps: [thm-inertia-guided-bisection-loop-soundness, alg-interval-hermitian-ldl-inertia-certifier, thm-interval-hermitian-ldl-inertia-certifier-soundness, lem-hermitian-eigenvalue-frobenius-bound, def-intervals-rectangles-and-complex-balls, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound]
justified_by: [thm-ordered-hermitian-eigenvalue-bisection-soundness]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §5.6"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §§5.1–5.5"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Definition

Input $n\ge1$, a nonempty family of Hermitian $n\times n$ matrices enclosed by conjugate-symmetric interval rectangles, tolerance $\varepsilon>0$, a total query budget $B\in\mathbb N_0$, and a fixed ordering, block plan and threshold $\theta\in(0,1]$ for the interval inertia certifier. Interpret all interval endpoints and shifts exactly.

1. Outward-compute $M\ge\sup_{A}\|A\|_F$ by bounding each entry modulus and summing their squares. If a finite bound cannot be obtained, return `inconclusive` with no eigenvalue intervals. Otherwise initialize, for each increasing index $k=1,\ldots,n$, the bracket $I_k=[-M,M]$ and successful-query count $s_k=0$. The Frobenius eigenvalue bound guarantees that these brackets contain every eigenvalue of every family member.

2. Until $B$ total queries have been used, choose the least index $k$ whose bracket width exceeds $\varepsilon$ and which has not been marked blocked. Query its exact midpoint $\tau$. Run [[alg-interval-hermitian-ldl-inertia-certifier]] on the shifted family $\{A-\tau I:A\in\mathcal A\}$ with the fixed plan. If the result is `pivot-inconclusive`, or its certified inertia has nonzero zero-count, mark this index blocked and leave $I_k$ unchanged. Otherwise set $\nu=n_-$, the certified number of negative eigenvalues. If $\nu\ge k$, replace the upper endpoint of $I_k$ by $\tau$; if $\nu<k$, replace the lower endpoint by $\tau$. Increase $s_k$ by one. A certified update halves the bracket width.

3. Return every current bracket with status `enclosed` when its width is at most $\varepsilon$, `inconclusive` if its index was blocked, or `budget-exhausted` if the total budget ended first. A zero-width initial bracket is already complete. Neither blocked pivots nor exhausted budget alter an existing bracket.

The algorithm does not perturb a shift to force an LDL pivot and does not infer singularity from a failed factorization. It returns uniform outer intervals for a family; it does not identify eigenvalue branches across parameter values.
