---
id: alg-qc-exact-single-qubit-clifford-t-synthesis
kind: algorithm
title: Exact single-qubit Clifford+T synthesis
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - thm-qc-single-qubit-exact-clifford-t-characterization
  - def-qc-denominator-exponent
  - lem-qc-clifford-t-denominator-descent-and-base
  - def-qc-clifford-t-gate-library
  - def-qc-circuit-denotational-semantics
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Kliuchnikov, Maslov, and Mosca, Practical approximation of single-qubit unitaries by single-qubit quantum circuits"
      url: https://arxiv.org/pdf/1206.5236
---

## Definition

Input a $2\times2$ matrix $U$ as four canonical elements of $D$. Perform the
following exact procedure.

1. Test $U^*U=I$ by rational coefficient arithmetic. If it fails, return
   `INVALID`.
2. Set $M=U$ and an empty list $K$. While
   $s=\operatorname{sde}(|M_{00}|^2)>3$, test $k=0,1,2,3$ in that order and
   choose the first for which
$\operatorname{sde}(|(HT^{-k}M)_{00}|^2)=s-1$. Append $k$ to $K$ and replace
$M$ by $HT^{-k}M$.
3. Look up the first column of $M$ in the complete base-column table at
   `research/quantum-computing-algorithms-60-2026-10-15-batch-13-finite-certificates.json`.
   Let $W_0$ be its stored H/T preparation word. Compute
   $W_0^*M=\operatorname{diag}(1,\lambda)$ exactly and find $j\in\{0,\ldots,7\}$
   with $\lambda=\omega^j$.
4. If $K=(k_1,\ldots,k_r)$ in reduction order, return the exact matrix-word
factorization
$$U=(T^{k_1}H)\cdots(T^{k_r}H)W_0T^j.$$
For the chronological output, emit $T^j$ first, then the stored chronological
gate list for $W_0$, then for $i=r,r-1,\ldots,1$ emit $H$ followed by
$T^{k_i}$. The QC09 semantics put later gates on the left, so this list has the
displayed matrix product.

The denominator descent and table completeness are the mathematical
properties in [[lem-qc-clifford-t-denominator-descent-and-base]] and
[[thm-qc-single-qubit-exact-clifford-t-characterization]]. The finite lookup
table uses exact rational coefficients; no numerical equality tolerance is
used.

## Unresolved supplier checks

The current QC07 gate alphabet and QC09 circuit-semantics bodies were
inspected. Their exact matrices and chronological order agree with the
procedure; no separate interface hold remains.
