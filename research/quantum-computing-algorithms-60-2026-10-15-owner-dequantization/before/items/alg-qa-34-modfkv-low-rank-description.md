---
id: alg-qa-34-modfkv-low-rank-description
kind: algorithm
title: ModFKV low-rank description procedure
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-34-l2-sample-query-access
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Ewin Tang, A quantum-inspired classical algorithm for recommendation systems, version 3
      url: https://arxiv.org/pdf/1807.04271v3
---

## Definition

**Inputs:** a nonzero real matrix $A\in\mathbb R^{m\times n}$ with the exact row/column ℓ2 sample/query interface of [[def-qa-34-l2-sample-query-access]], a threshold $0<\sigma\le\|A\|_F$, tolerances $0<\epsilon\le1$ and $0<\eta\le1$, and an integer sample count $q\ge1$. The procedure returns a compact description; it does not write all $mn$ entries of the output matrix.

1. Sample $i_1,\ldots,i_q$ independently from the row distribution $D_A$. Form the conceptual matrix $S\in\mathbb R^{q\times n}$ whose $r$th row is $A_{i_r,*}/\sqrt{qD_A(i_r)}$. The entries of $S$ can be queried through the stored row indices; no zero-probability row is selected.
2. Define a column distribution $F$ by choosing $r$ uniformly in $[q]$ and then sampling a column from $D_{S_{r,*}}$. Draw $j_1,\ldots,j_q$ independently from $F$. Form $W\in\mathbb R^{q\times q}$ with $W_{r,c}=S_{r,j_c}/\sqrt{qF(j_c)}$. A sampled column has $F(j_c)>0$; otherwise return INVALID.
3. Compute a singular value decomposition of $W$. Retain the left singular vectors $u^{(1)},\ldots,u^{(k)}$ whose singular values $\widehat\sigma_1,\ldots,\widehat\sigma_k$ are strictly greater than $\sigma$, and set $\widehat U=[u^{(1)}\ \cdots\ u^{(k)}]$ and $\widehat\Sigma=\operatorname{diag}(\widehat\sigma_1,\ldots,\widehat\sigma_k)$. If $k=0$, return the zero matrix description. Otherwise return the row indices and the matrices needed to evaluate
$$D:=AS^T\widehat U\widehat\Sigma^{-2}\widehat U^TS.$$

The sample count $q$, matrix-entry and norm queries, sample operations, arithmetic, SVD, storage, and any finite-precision implementation are charged in the declared access model. Correctness, success probability, approximation error, and the parameter-dependent choice of $q$ are separate claims of [[thm-qa-34-modfkv-low-rank-approximation]].
