---
id: lem-hermitian-schur-support-is-contained-in-structural-fill
kind: lemma
title: Hermitian Schur-complement support stays inside the symmetric filled graph
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-hermitian-structural-graph-adapter
  - def-symmetric-structural-elimination-graph-and-ordering
  - lem-of-no-zero-divisors
  - thm-complex-numbers-form-a-field
justified_by: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapter 4, §§4.1–4.3"
      url: "https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf"
    - title: "Timothy A. Davis, Siva Rajamanickam, and Wissam M. Sid-Lakhdar, A survey of direct methods for sparse linear systems, §4"
      url: "https://people.engr.tamu.edu/davis/publications_files/survey_tech_report.pdf"
---

## Statement

Let $A\in\mathbb C^{n\times n}$ be Hermitian and use the Hermitian structural graph adapter of [[def-hermitian-structural-graph-adapter]]. Fix an ordering and suppose each scalar pivot $p_k=S^k_{v_kv_k}$ is nonzero. Form the Hermitian Schur updates
$$S^{k+1}_{ij}=S^k_{ij}-S^k_{iv_k}p_k^{-1}S^k_{v_kj}.$$
Then every $S^k$ is Hermitian, every nonzero off-diagonal entry of $S^k$ is an edge of the corresponding filled graph, and the later neighbors of every eliminated vertex form a clique in the next filled graph.

## Facts & Assumptions


**Given:** A Hermitian matrix, an ordering, nonzero scalar pivots, and the displayed Schur update.

[F1] [[def-hermitian-structural-graph-adapter]]: The undirected graph has edge $\{i,j\}$ exactly when the Hermitian matrix has a nonzero off-diagonal entry in that pair.

[F2] [[def-symmetric-structural-elimination-graph-and-ordering]]: At each step the graph deletes the pivot, retains all edges between remaining vertices, and adds every edge between distinct later neighbors of the pivot.

[F3] [[lem-of-no-zero-divisors]]: In a field, a nonzero product has every factor nonzero.

[F4] [[thm-complex-numbers-form-a-field]]: The complex numbers form a field containing $\mathbb R$; for $a+bi\ne0$, $(a+bi)^{-1}=(a-bi)/(a^2+b^2)$.

## Proof


1.1 At stage $0$, $S^0=A$ is Hermitian. If $S^k$ is Hermitian, then its diagonal pivot $p_k$ is real. Since it is nonzero, substituting $a=p_k,b=0$ in [F4] gives $p_k^{-1}=p_k/p_k^2=1/p_k\in\mathbb R$; the denominator is nonzero by [F3]. For remaining $i,j$, [given, F1, F3, F4, base, IH, algebra]
$$\overline{S^{k+1}_{ji}}=\overline{S^k_{ji}-S^k_{jv_k}p_k^{-1}S^k_{v_ki}} =S^k_{ij}-S^k_{iv_k}p_k^{-1}S^k_{v_kj}=S^{k+1}_{ij}.$$
Thus the update preserves Hermitian symmetry. [given, F1, F3, F4, base, IH, algebra]

1.2 By [F2], the graph update itself joins every pair of distinct later neighbors of $v_k$. Thus each such later-neighbor set is a clique in the next filled graph. [given, F2, algebra]

2.1 Induct on the elimination stage for support. Initially every nonzero upper-triangular entry is an edge by [F1]. Suppose the inclusion holds at stage $k$ and $S^{k+1}_{ij}\ne0$ for $i<j$. If $S^k_{ij}\ne0$, its edge is retained by [F2]. Otherwise the correction term is nonzero. Since $\mathbb C$ is a field by [F4], applying [F3] to $(S^k_{iv_k}p_k^{-1})S^k_{v_kj}$ and then to $S^k_{iv_k}p_k^{-1}$ shows that $S^k_{iv_k}\ne0$ and $S^k_{v_kj}\ne0$. Hermitian symmetry from step 1.1 gives the undirected edges from $i$ to $v_k$ and from $v_k$ to $j$ in the active graph. Hence both vertices are later neighbors of $v_k$, and [F2] inserts $\{i,j\}$. This proves the support inclusion at stage $k+1$. [step 1.1, F1, F2, F3, F4, base, IH, induction, algebra]

3.1 The base case and step 2.1 prove the support inclusion at every stage; step 1.2 proves the clique property. The proof uses conjugate symmetry for Hermitian matrices and therefore supplies the complex-Hermitian extension beyond the real-symmetric supplier theorem. [step 1.1, step 2.1, step 1.2, discharge-induction] ∎
