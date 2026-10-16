---
id: alg-qc-rz-clifford-t-approximation
kind: algorithm
title: Ancilla-free Clifford+T Rz approximation
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-ancilla-free-rz-approximation-problem
  - def-qc-clifford-t-gate-library
  - lem-integer-part
  - lem-qc-rz-epsilon-region-equivalence
  - lem-qc-rz-determinant-one-reduction
  - lem-qc-rz-scaled-grid-norm-solution-exists
  - alg-qc-exact-single-qubit-clifford-t-synthesis
  - alg-qc-cyclotomic-scaled-grid-and-norm-solver
  - thm-qc-cyclotomic-norm-equation-decision
justified_by:
  - thm-qc-rz-approximation-correct-on-termination
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations"
      url: https://arxiv.org/pdf/1403.2975
dependency_level: 15
---

## Definition

Inputs are exact reals $\theta\in\mathbb R$ and $\varepsilon>0$, exact-real
arithmetic and comparisons for the grid predicates, and the exact integer
part operation needed to compute
$q=\lfloor 2\theta/\pi+1/2\rfloor$; the integer part is the one defined in
[[lem-integer-part]]. Also choose a norm mode: COMPLETE uses
either a valid full integer-factorization oracle or the complete finite-search
norm solver; BOUNDED uses the calibrated capped-prime attempt only. Supply a
total candidate limit $B\in\mathbb N_0\cup\{\infty\}$, defaulting to
$\infty$; $B$ counts grid candidates on which a norm call is started. Output
is either a finite chronological Clifford+T word or TIMEOUT. No bit encoding
for arbitrary reals is implicit. In the randomized modes use an independent
random stream for the grid iterator and fresh independent streams for each
randomized norm call; candidate order depends only on the grid stream, not
on norm-call outcomes.

Let $c=|1-e^{i\pi/8}|$.

1. If $\varepsilon\ge c$, compute the nearest integer
   $q=\lfloor2\theta/\pi+1/2\rfloor$, with ties rounded upward, and return
   the chronological word with scalar phase $\omega^{-q}I$ first and $S^q$
   second, omitting identity factors. Reduce the scalar exponent modulo $8$
   and the $S$ exponent modulo $4$. It has T-count zero.
2. Otherwise $\varepsilon<c<1/2$. Set $j=0$ and enumerate $u$ from
   [[alg-qc-cyclotomic-scaled-grid-and-norm-solver]] in increasing denominator
   exponent. Before starting a norm call for a candidate, if $j=B$ return
   TIMEOUT; otherwise increment $j$. Compute $\xi=1-|u|^2$. In COMPLETE
   mode invoke the selected complete norm solver, obtaining a valid complete
   integer factorization when that solver requires one. In BOUNDED mode use
   only the calibrated capped-prime attempt, which accepts an exact
   certificate and otherwise may return FACTOR_TIMEOUT.
3. If the norm solver returns FACTOR_TIMEOUT or NO_SOLUTION, continue to the
   next candidate. For each returned $t$ with $t^*t=\xi$, form
   $U=\begin{pmatrix}u&-\bar t\\t&\bar u\end{pmatrix}$ and
   $U'=TUT^\dagger$.
4. Run [[alg-qc-exact-single-qubit-clifford-t-synthesis]] on both matrices.
   Return the word with smaller exact T-count; break ties by lexicographic
   gate word.

The exact grid-to-error equivalence is proved in
[[lem-qc-rz-epsilon-region-equivalence]]. The unbounded factoring-oracle mode
uses the complete efficient solver from the norm procedure, or the finite
alternative [[thm-qc-cyclotomic-norm-equation-decision]]. Successful
termination (almost surely for the randomized efficient mode) under the stated
terminating exact-real comparisons is proved in
[[thm-qc-rz-approximation-correct-on-termination]]. A finite-budget call can
return TIMEOUT. The zero-T branch is the construction in
[[lem-qc-rz-determinant-one-reduction]]. The complete finite-search norm mode
gives no polynomial arithmetic-time guarantee.
