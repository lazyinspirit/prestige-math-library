---
id: ex-partite-triangle-removal-from-finite-hypergraph-removal
kind: example
title: "Tripartite triangle removal with unequal vertex classes"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - thm-finite-partite-hypergraph-removal
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Terence Tao, A variant of the hypergraph removal lemma, arXiv:math/0503572v2"
      url: "https://arxiv.org/pdf/math/0503572v2"
      locator: "§1 Theorems 1.1 and 1.12, and Corollary 1.14, printed pp. 1–6."
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics (2006), Chapter 11, §11.6"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Theorem 11.27, printed p. 454 (PDF p. 474), and Proposition 11.28, printed p. 455 (PDF p. 475), framework comparison only; its printed general-k deletion exponent is not used."
---

## Example

Let $V_1,V_2,V_3$ be arbitrary nonempty finite sets and let $E_{12}\subseteq V_1\times V_2$, $E_{23}\subseteq V_2\times V_3$, and $E_{31}\subseteq V_3\times V_1$ (the last face is read in the displayed coordinate order). For every $\epsilon>0$ there is a $\delta_0>0$, depending only on $\epsilon$, such that if the number of triples $(x_1,x_2,x_3)$ with all three pair conditions satisfied is at most $\delta_0|V_1||V_2||V_3|$, then one can delete at most $\epsilon|V_i||V_j|$ pairs from each $E_{ij}$ and leave no such triple. The vertex classes need not have equal sizes. If there are no triples initially, no deletion is needed.

The drawing displays the incidence pattern for one labelled triangle: its three vertices are chosen from the distinct classes, and an edge labelled $E_{ij}$ means the corresponding pair belongs to that edge set. It is only a schematic of one copy; the verification uses the full finite-set definition above.

```tikz
\begin{tikzpicture}
\coordinate (v1) at (0,0);
\coordinate (v2) at (3,0);
\coordinate (v3) at (1.5,2.4);
\node[below left] at (v1) {$x_1\in V_1$};
\node[below right] at (v2) {$x_2\in V_2$};
\node[above] at (v3) {$x_3\in V_3$};
\draw (v1)--node[below] {$E_{12}$}(v2);
\draw (v2)--node[right] {$E_{23}$}(v3);
\draw (v3)--node[left] {$E_{31}$}(v1);
\end{tikzpicture}
```

## Example references

[Tao, §1 Theorems 1.1 and 1.12 and Corollary 1.14](https://arxiv.org/pdf/math/0503572v2)

[Tao and Van H. Vu, *Additive Combinatorics*, Chapter 11, §11.6](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)

## Facts & Assumptions

**Given:** Three nonempty finite vertex classes, pair-event sets $E_{12},E_{23},E_{31}$, and $\epsilon>0$.

[F1] For any finite partite pattern and deletion tolerance, sufficiently small labelled-copy density permits deleting at most that fraction of each ambient edge class to remove every copy ([[thm-finite-partite-hypergraph-removal]]).

## Verification

1.1 Set $J=\{1,2,3\}$, $d=2$, and $\mathcal H_2=\{\{1,2\},\{2,3\},\{3,1\}\}$. A labelled copy of this pattern is exactly a triple with all three pair conditions; its density is the triangle count divided by $|V_1||V_2||V_3|$. [given, F1, algebra]

2.1 Apply [F1] to this fixed pattern with tolerance $\epsilon$. It gives subsets $E'_{ij}\subseteq E_{ij}$ with no surviving triangle and $|E_{ij}\setminus E'_{ij}|\le\epsilon|V_i\times V_j|=\epsilon|V_i||V_j|$. This argument uses the actual class sizes separately, with no equality assumption. [step 1.1, F1, algebra]

3.1 If the original triangle count is zero, choose $E'_{ij}=E_{ij}$ for all three pairs. This deletes zero pairs and satisfies the conclusion, including when a vertex class is a singleton. The TikZ drawing is not used in steps 1.1–3.1. [given, step 1.1, step 2.1, F1] ∎
