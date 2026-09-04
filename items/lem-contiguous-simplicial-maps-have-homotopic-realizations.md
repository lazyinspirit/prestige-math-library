---
id: lem-contiguous-simplicial-maps-have-homotopic-realizations
kind: lemma
title: "Contiguous simplicial maps have homotopic realizations"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-contiguous-simplicial-maps, def-homotopy-relative-and-path-homotopy]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 02: Homotopy"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2002%20Homotopy.pdf"
---

## Statement

If $f,g:K \to L$ are contiguous simplicial maps, then their geometric
realizations $|f|,|g|:|K| \to |L|$ are homotopic.

## Proof

**Given:** Contiguous simplicial maps $f,g:K \to L$.

1.1 Let $x=\sum_i \lambda_i v_i$ lie in a simplex $\sigma=\{v_0,\dots,v_n\}$ of $K$. Contiguity says that the vertices $f(v_i)$ and $g(v_i)$ together span a simplex of $L$, so for each $t \in [0,1]$ the barycentric combination $H(x,t):=\sum_i (1-t)\lambda_i f(v_i)+\sum_i t\lambda_i g(v_i)$ lies in $|L|$. [given]

2.1 On each simplex of $K$, the formula in step 1.1 is affine in both $x$ and $t$, so it is continuous there. If a point lies on a common face of two simplices, the same barycentric formula is obtained from either side, so the simplexwise formulas patch to a continuous map $H:|K| \times [0,1] \to |L|$. [step 1.1]

3.1 At $t=0$ the formula gives $|f|(x)$, and at $t=1$ it gives $|g|(x)$. Thus $H$ is a homotopy from $|f|$ to $|g|$. [step 1.1, step 2.1] ∎
