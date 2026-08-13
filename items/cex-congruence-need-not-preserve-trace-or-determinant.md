---
id: cex-congruence-need-not-preserve-trace-or-determinant
kind: counterexample
title: 'Congruence need not preserve trace or determinant: the real $1\times1$ matrices $[1]$ and $[4]$ are congruent'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-change-of-basis-for-a-bilinear-form-is-congruence, cor-rank-and-nondegeneracy-are-congruence-invariants, def-trace-of-a-square-matrix, def-determinant-of-a-square-matrix]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

**Refuted claim:** Matrix congruence preserves trace or determinant.

## Facts & Assumptions

**Given:** The real $1\times1$ matrices $A=[1]$, $C=[4]$, and $P=[2]$.

[L1] Congruence has the form $C=P^{\mathsf T}AP$ with $P$ invertible ([[thm-change-of-basis-for-a-bilinear-form-is-congruence]]).

[L2] Congruence does preserve rank and nondegeneracy ([[cor-rank-and-nondegeneracy-are-congruence-invariants]]).

[L3] Trace is the sum of diagonal entries ([[def-trace-of-a-square-matrix]]), and determinant is the signed Leibniz sum ([[def-determinant-of-a-square-matrix]]).

## Counterexample

**Proof technique:** direct $1\times1$ computation.

1.1 Since $P^{\mathsf T}AP=[2][1][2]=[4]=C$ and $P$ is invertible, [L1] makes $A$ and $C$ congruent. [L1, algebra]

1.2 By [L3], $\operatorname{tr}A=1$, $\operatorname{tr}C=4$, $\det A=1$, and $\det C=4$. Thus neither trace nor determinant is preserved. [L3, algebra]

2.1 Both matrices nevertheless have rank $1$ and are nondegenerate, in agreement with [L2]; the counterexample isolates exactly the two false invariance claims. [step 1.1, step 1.2, L2] ∎
