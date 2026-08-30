---
id: cex-invertible-matrix-can-fail-unpivoted-lu-at-the-first-pivot
kind: counterexample
title: "An invertible matrix can fail unpivoted LU at the first pivot"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-unpivoted-unit-lower-lu-exists-iff-leading-principal-minors-are-nonzero]
aliases: []
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Example 2.6.1"
      url: "https://fncbook.com/pivoting/"
---

## Statement refuted

Every invertible square matrix has an unpivoted unit-lower LU factorisation.

## Facts & Assumptions

**Given:** The matrix
$$A=\begin{pmatrix}0&1\\1&0\end{pmatrix}.$$

[L1] A square matrix has an unpivoted unit-lower LU factorisation with nonzero
pivots exactly when every leading principal minor is nonzero
([[thm-unpivoted-unit-lower-lu-exists-iff-leading-principal-minors-are-nonzero]]).

## Counterexample

**Proof technique:** direct.

1.1 The determinant of $A$ is $-1$, so $A$ is invertible. Its first leading principal minor is the $1\times 1$ determinant $\Delta_1=0$. [given, algebra]

2.1 By [L1], the vanishing of $\Delta_1$ forbids an unpivoted unit-lower LU factorisation with nonzero pivots. Therefore invertibility alone does not suffice. [step 1.1, L1]

3.1 Step 2.1 refutes the statement. [step 2.1] ∎