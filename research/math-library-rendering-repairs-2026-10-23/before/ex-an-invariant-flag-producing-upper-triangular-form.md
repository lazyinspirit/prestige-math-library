---
id: ex-an-invariant-flag-producing-upper-triangular-form
kind: example
title: "Building an upper-triangular matrix from a complete invariant flag"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-complete-invariant-flags-and-upper-triangular-matrices]
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

On $\mathbb Q^3$, define
$$Te_1=2e_1,\qquad Te_2=e_1+3e_2,\qquad Te_3=2e_1-e_2+4e_3.$$
The complete flag
$$0\subset\langle e_1\rangle\subset\langle e_1,e_2\rangle\subset\mathbb Q^3$$
is $T$-invariant, and in the flag-adapted basis $(e_1,e_2,e_3)$,
$$[T]=\begin{pmatrix}2&1&2\\0&3&-1\\0&0&4\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The displayed action of $T$ on the standard basis of $\mathbb Q^3$.

[L1] A basis gives an upper-triangular matrix exactly when its successive spans form a complete invariant flag ([[prop-complete-invariant-flags-and-upper-triangular-matrices]]).

## Verification

**Proof technique:** computation.

1.1 The formulas show $T\langle e_1\rangle\subseteq\langle e_1\rangle$ and $T\langle e_1,e_2\rangle\subseteq\langle e_1,e_2\rangle$, while the final space is automatically invariant. [algebra]

2.1 The coordinate columns of $Te_1,Te_2,Te_3$ give the displayed matrix, and [L1] identifies this upper-triangular form with the verified complete flag. [step 1.1, L1, algebra] ∎
