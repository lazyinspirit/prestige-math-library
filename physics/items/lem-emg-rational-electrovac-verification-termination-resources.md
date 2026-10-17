---
id: lem-emg-rational-electrovac-verification-termination-resources
kind: lemma
title: Termination and separate algebraic resource account for rational tensor verification
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - alg-emg-rational-electrovac-verification
dependency_roles:
  alg-emg-rational-electrovac-verification: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Sections 2.1-2.2: tensor calculation scope; no complexity claim is borrowed"
physical_scope: null
---


## Statement

For an input of [[alg-emg-rational-electrovac-verification]] with $N_{\mathrm{in}}$ input coefficient/exponent records, suppose the expanded fixed schedule has $K$ polynomial operations and every intermediate polynomial support has at most $R$ monomials. The algorithm terminates. Under elementary rational-coefficient arithmetic, sparse addition, multiplication, differentiation and sorted-list insertion perform at most $K(2R^2+2R)$ coefficient operations and at most that many ordered exponent-vector insertions; sorted-list insertion uses at most $R$ support comparisons per insertion. If every intermediate support is retained, memory is at most $(K+N_{\mathrm{in}})R$ coefficient/exponent records. These are algebraic-operation and record bounds in terms of actual intermediate support; the statement gives no polynomial input-size bound, bit-complexity bound, practical runtime estimate or optimality claim.

## Facts & Assumptions

**Given:** The fixed finite instruction schedule and finite sparse inputs of [[alg-emg-rational-electrovac-verification]].

[F1] [[alg-emg-rational-electrovac-verification]]: every loop has a fixed finite index range; polynomial operations enumerate finite supports; no instruction tests convergence or iterates until a numerical tolerance is reached.

[A1] $N_{\mathrm{in}}$, $K$ and $R$ are finite nonnegative integers, with $R$ bounding the number of monomials in every stored intermediate polynomial.

## Proof


1.1 The determinant uses $4!=24$ signed permutation products, the inverse table has sixteen entries, the four Maxwell residuals have four coordinate terms each, and every Christoffel, Ricci and contraction table has a fixed finite index range in $\{0,1,2,3\}$. By [F1], all loops therefore make finitely many calls to arithmetic operations on finite-support polynomials. [given, F1, algebra]

2.1 A sparse sum combines at most $2R$ terms. A sparse product examines at most $R^2$ ordered monomial pairs; differentiating a support of size at most $R$ visits at most $R$ terms. Thus for each of the $K$ polynomial operations the stated upper bound $2R^2+2R$ dominates the coefficient work and insertion count. A sorted support list has at most $R$ entries, so each insertion makes at most $R$ comparisons. Summing over $K$ operations and retaining at most $R$ records for each of the $K$ intermediate results and $N_{\mathrm{in}}$ inputs gives the stated operation, insertion and memory bounds. [A1, step 1.1, algebra]

3.1 All integer and rational coefficient operations and all finite list traversals terminate; the schedule has no convergence or data-dependent loop. The finite operation schedule from step 1.1 therefore terminates. The bounds count algebraic operations and records only; they do not bound coefficient bit lengths or elapsed machine time. [F1, step 1.1, step 2.1] ∎

## Remarks

The script execution time stored with a finite check is an observation about that execution, not a consequence of this lemma.

