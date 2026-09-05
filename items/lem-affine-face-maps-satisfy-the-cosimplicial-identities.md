---
id: lem-affine-face-maps-satisfy-the-cosimplicial-identities
kind: lemma
title: "The affine face maps satisfy the cosimplicial identities"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-standard-topological-simplex-and-its-affine-face-maps]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: frontier-30
---

## Statement

For every $n\geq 2$ and every pair of integers $0\leq i<j\leq n$, the affine
face maps of [[def-standard-topological-simplex-and-its-affine-face-maps]]
satisfy
$$\delta_j\circ\delta_i=\delta_i\circ\delta_{j-1}:\Delta^{n-2}\to\Delta^n.$$

## Facts & Assumptions

**Given:** An integer $n\geq 2$ and indices $0\leq i<j\leq n$.

[L1] For $n\geq 1$, the face map $\delta_k:\Delta^{n-1}\to\Delta^n$ inserts a
zero in the $k$th coordinate
([[def-standard-topological-simplex-and-its-affine-face-maps]]).

## Proof

**Proof technique:** direct.

1.1 Let $t=(t_0,\dots,t_{n-2})\in\Delta^{n-2}$. By [L1], the composite $\delta_j\delta_i(t)$ is obtained by first inserting $0$ in slot $i$ and then inserting $0$ in slot $j$. Since $i<j$, the second insertion happens strictly to the right of the first one, so the resulting $(n+1)$-tuple has zeros exactly in positions $i$ and $j$. [L1, given]

2.1 Again by [L1], the composite $\delta_i\delta_{j-1}(t)$ first inserts $0$ in slot $j-1$ and then inserts $0$ in slot $i$. After the second insertion, the earlier zero has shifted one place to the right, so the final tuple also has zeros exactly in positions $i$ and $j$, with every other coordinate of $t$ appearing in the same relative order as in step 1.1. Therefore the two composites agree coordinatewise. [L1, step 1.1] ∎