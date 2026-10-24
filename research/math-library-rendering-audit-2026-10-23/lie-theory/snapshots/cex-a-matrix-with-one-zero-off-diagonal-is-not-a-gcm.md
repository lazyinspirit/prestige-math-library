---
id: cex-a-matrix-with-one-zero-off-diagonal-is-not-a-gcm
kind: counterexample
title: "A matrix with one zero off diagonal is not a gcm"
status: published
origin: pipeline
deps: ["def-generalized-cartan-matrix"]
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — "
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
generation:
  role: counterexample
proof_strategy: direct
---

## Statement refuted

False claim: every integer matrix with diagonal entries 2 and nonpositive off-diagonal entries is a GCM.

## Facts & Assumptions

**Given:** The witness A with rows (2,0) and (−1,2).

[F1] GCMs require a symmetric zero pattern. ([[def-generalized-cartan-matrix]]).

## Counterexample

1.1 Take $A=\begin{pmatrix}2&0\\-1&2\end{pmatrix}$. All four entries are integers, both diagonal entries are 2, and its off-diagonal entries 0 and −1 are nonpositive. Thus every hypothesis of the false claim holds. [given]

2.1 Here $a_{12}=0$ but $a_{21}=-1\ne0$. This violates the forward implication in the symmetric-zero condition of F1, so $A$ is not a GCM. It is the required counterexample. [F1, step 1.1] ∎

## Sources

The displayed finite computation is local.
