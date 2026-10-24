---
id: thm-contiguous-simplicial-maps-induce-the-same-map-on-simplicial-homology
kind: theorem
title: "Contiguous simplicial maps induce the same map on simplicial homology"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-contiguous-simplicial-maps, def-induced-simplicial-chain-map, lem-induced-simplicial-chain-maps-commute-with-boundaries, def-chain-homotopy, thm-chain-homotopic-maps-induce-the-same-map-on-homology]
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

If $f,g:K \to L$ are contiguous simplicial maps, then
$$f_*=g_*:H_n^{\mathrm{simp}}(K)\to H_n^{\mathrm{simp}}(L)$$
for every $n$.

## Proof

**Given:** Contiguous simplicial maps $f,g:K \to L$.

1.1 Let $z$ be an $n$-cycle. Its support generates a finite subcomplex $K_z$ of $K$. Choose a total ordering of the finite vertex set of $K_z$, and use the increasing vertex order as the preferred oriented generator of every simplex of $K_z$. On these generators define $$P_k[v_0,\dots,v_k]:=\sum_{i=0}^k(-1)^i[f(v_0),\dots,f(v_i),g(v_i),\dots,g(v_k)],$$ omitting a summand when its displayed vertices are not pairwise distinct, and extend linearly. This is a well-defined homomorphism on $C_k(K_z)$ because it is defined on a chosen free basis, and contiguity makes every nondegenerate summand a simplex of $L$. [given, construct]

2.1 For each preferred generator of $C_k(K_z)$, expand the boundary of the $i$th prism simplex from step 1.1. Consecutive interior faces cancel, the two outer faces give $g_\#-f_\#$, and the remaining faces give $-P\partial$. Terms with repeated image vertices cancel in the corresponding normalized formula. Hence $$\partial P+P\partial=g_\#-f_\#$$ on the chains of $K_z$. [step 1.1, algebra]

3.1 Applying step 2.1 to the cycle $z$ gives $$g_\#z-f_\#z=\partial(Pz),$$ because $\partial z=0$. Thus $f_\#z$ and $g_\#z$ represent the same homology class. Every homology class has such a finitely supported cycle representative, so $f_*=g_*$ in every degree. [step 1.1, step 2.1, algebra] ∎
