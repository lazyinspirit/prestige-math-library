---
id: alg-interval-arithmetic-selberg-eigenvalue-verification
kind: algorithm
title: Interval-Arithmetic Verification of Finite Selberg Eigenvalue Ranges
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - lem-bls-single-sign-change-implies-imaginary-axis-positivity
  - alg-bls-exact-rational-interval-transcript-core
  - thm-booker-lee-strombergsson-twist-minimal-sieve
  - def-b-l-s-finite-trace-certificate-data
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "A. Booker, M. Lee, and A. Strömbergsson, Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture"
      url: "https://arxiv.org/pdf/1803.06016v2"
      locator: "§5, numerical remarks: finite test functions, trace matrices, Arb intervals, Molin quadrature, and parameter bounds."
    - title: "P. Molin, L'intégration numérique par la méthode double-exponentielle"
      url: "https://webusers.imj-prg.fr/~pascal.molin/pdf/integration.pdf"
      locator: "Analytic quadrature error estimate cited as Lemma 5.1 in BLS §5."
---

## Definition

The exact-core input is the finite rational core record in
[[def-b-l-s-finite-trace-certificate-data]]. Output is either rejection with
the first failed condition or acceptance carrying the computed rational
interval for the declared normalized $Q(x)$.

1. Parse the finite record with exactly the integer, rational, interval and
   transcript syntax of [[alg-bls-exact-rational-interval-transcript-core]].
   Reject malformed syntax, $M<1$, $X<1$, $m<1$, incorrect table dimensions,
   a pivot outside $0\le k<M$, or a vector of length other than $M$.
   Check $\sum_jx_j=1$ by exact rational arithmetic.
2. Check $x_j\le0$ for every $j<k$ and $x_j\ge0$ for every $j>k$.
   The pivot coefficient is unrestricted. Reject a failed sign check.
3. From the coefficient leaves construct the fixed lexicographic expression
   $\sum_{i,j}c_{ij}x_ix_j$ with exact singleton constants for the $x_j$.
   Evaluate its rational interval hull by the total transcript core.
   If a redundant transcript is supplied, compare its finite syntax with
   that constructed expression and reject a mismatch.
4. Accept if and only if every preceding check passed and the resulting
   interval upper endpoint is strictly less than $1$; otherwise reject.

The scope and arithmetic labels are not proofs of their semantics: the
coefficient enclosure, trace, sieve, multiplicity and known-Artin assertions
are the explicit hypotheses of the conditional correctness theorem.
The sign test is a sufficient exact positivity mode, not a characterization
of all valid test vectors. The broader original target allows other proved
positivity records and certified interval backends. Those modes remain
unresolved construction obligations until exact syntax, total checkers and
soundness proofs are supplied. An arbitrary opaque backend record is never
executed or accepted by the core. No production record has been recovered,
checked or accepted here.

## Definition references

[A. Booker, M. Lee, and A. Strömbergsson, *Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture*](https://arxiv.org/pdf/1803.06016v2)

[P. Molin, *L'intégration numérique par la méthode double-exponentielle*](https://webusers.imj-prg.fr/~pascal.molin/pdf/integration.pdf)

## Remarks

The BLS article describes its Arb-based production computation, but its source
code, input arrays, and raw interval outputs are not staged. This local
procedure specifies a conditional verification interface; it is not a replay
of the production computation.
