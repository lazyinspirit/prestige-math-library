---
id: def-elimination-tree-and-column-reach
kind: definition
title: Elimination-tree column patterns and reach
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-hermitian-structural-graph-adapter
  - def-symmetric-structural-elimination-graph-and-ordering
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapter 4, §4.2"
      url: "https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf"
    - title: "Timothy A. Davis, Siva Rajamanickam, and Wissam M. Sid-Lakhdar, A survey of direct methods for sparse linear systems, §4.1"
      url: "https://people.engr.tamu.edu/davis/publications_files/survey_tech_report.pdf"
---

## Definition

Let $A=A^*$ and use the Hermitian structural graph of [[def-hermitian-structural-graph-adapter]]. The graph definition [[def-symmetric-structural-elimination-graph-and-ordering]] supplies the ordering $v_0,\ldots,v_{n-1}$, filled graphs, parent map, and elimination forest. For each $k$, let $N_k(v_k)$ be the later-neighbor set at elimination of $v_k$, and define its structural column set
$$\mathcal C_k=\{v_k\}\cup N_k(v_k).$$
Its off-diagonal size is the column count $\ell_k=|N_k(v_k)|$. An **ancestor** of $v_k$ is obtained by following one or more supplied parent edges; a **descendant** is the inverse relation. The **reach** of $v_k$ is the set of vertices visited by following its parent path, including $v_k$.
