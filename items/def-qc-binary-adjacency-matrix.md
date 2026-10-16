---
id: def-qc-binary-adjacency-matrix
kind: definition
title: "Binary adjacency matrix of an ordered finite simple graph"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-finite-simple-graph, thm-z-mod-p-is-a-field, def-finite-field-and-its-order, def-vector-space, def-matrices-over-a-commutative-ring, def-qc-ordered-bitstring-encoding]
justified_by: []
dependency_level: 2
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Robert Raussendorf, Daniel E. Browne, and Hans J. Briegel, Measurement-based quantum computation on cluster states, arXiv:quant-ph/0301052, p. 4"
      url: https://arxiv.org/pdf/quant-ph/0301052
    - title: "M. Hein et al., Entanglement in graph states and its applications, arXiv:quant-ph/0602096, §2.2.4, p. 23"
      url: https://arxiv.org/pdf/quant-ph/0602096
---

## Definition

Let $G=(V,E)$ be a finite simple graph with a fixed order
$V=(v_0,\ldots,v_{n-1})$. Put $\mathbb F_2:=\mathbb Z/2\mathbb Z$; the
field law follows from [[thm-z-mod-p-is-a-field]] at $p=2$, and this field has
order two by [[def-finite-field-and-its-order]]. Define the binary adjacency
matrix $A_2(G)\in M_n(\mathbb F_2)$ by

$$ (A_2(G))_{jk}=\begin{cases}1,&\{v_j,v_k\}\in E,\\0,&\{v_j,v_k\}\notin E.\end{cases} $$

The indices use the ordered bit coordinates of
[[def-qc-ordered-bitstring-encoding]]. Since edges are unordered pairs of
distinct vertices, $A_2(G)$ is symmetric and has zero diagonal. This is a
matrix over $\mathbb F_2$, using [[def-matrices-over-a-commutative-ring]];
it is not the root library's real-valued adjacency matrix. When $V=\varnothing$,
$A_2(G)$ is the unique $0\times0$ matrix.
