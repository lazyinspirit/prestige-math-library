---
id: ex-an-atomic-signed-measure-on-z-has-total-variation-three
kind: example
title: "An atomic signed measure on Z has total variation three"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-jordan-decomposition-for-signed-measures, prop-jordan-parts-and-total-variation-formulas-for-signed-measures]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Chapter 12"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Example

On $\mathcal P(\mathbb Z)$, define
$$\nu(A):=\sum_{k\in A}(-1)^k2^{-|k|}.$$
Then $\nu$ is a finite signed measure, its positive set is the even integers,
its negative set is the odd integers, and
$$|\nu|(\mathbb Z)=\sum_{k\in\mathbb Z}2^{-|k|}=3.$$

## Facts & Assumptions

**Given:** The set function $\nu(A)=\sum_{k\in A}(-1)^k2^{-|k|}$ on
$\mathcal P(\mathbb Z)$.

[L1] Jordan decomposition gives positive and negative parts for a signed
measure, and the total variation is their sum. ([[thm-jordan-decomposition-for-signed-measures]], [[prop-jordan-parts-and-total-variation-formulas-for-signed-measures]])

[A1] The absolutely summable series $\sum_{k\in\mathbb Z}2^{-|k|}$ equals
$1+2\sum_{n\ge1}2^{-n}=3$.

## Verification

**Proof technique:** direct.

1.1 The defining series is absolutely convergent on every subset of [L1, A1]
$\mathbb Z$, so $\nu$ is countably additive. If $E$ contains only even
integers, then every term in the series for $\nu(E)$ is nonnegative; if $E$
contains only odd integers, every term is nonpositive. Thus the even integers
form a positive set and the odd integers form a negative set.

2.1 The Jordan positive part is therefore the even-atom measure [L1, A1, step 1.1] ∎
$\nu^+(A)=\sum_{k\in A,\ k\text{ even}}2^{-|k|}$ and the negative part is
$\nu^-(A)=\sum_{k\in A,\ k\text{ odd}}2^{-|k|}$. Hence [L1] gives
$|\nu|(\mathbb Z)=\nu^+(\mathbb Z)+\nu^-(\mathbb Z)=\sum_{k\in\mathbb Z}2^{-|k|}=3$
by [A1].
