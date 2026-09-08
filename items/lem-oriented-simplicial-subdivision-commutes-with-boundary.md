---
id: lem-oriented-simplicial-subdivision-commutes-with-boundary
kind: lemma
title: "Oriented simplicial subdivision commutes with boundary"
status: draft
origin: pipeline
deps: ["def-oriented-simplicial-subdivision-chain-map", "lem-an-augmented-simplicial-cone-has-an-explicit-chain-contraction", "thm-the-simplicial-boundary-squares-to-zero"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Statement

The oriented subdivision operator on integral augmented chains satisfies $\partial S=S\partial$. Restriction to ordinary chains is also a chain map.

## Source locators

2.1, pp.121–122.


## Facts & Assumptions

[F1] Subdivision is given by the augmented cone recursion. [[def-oriented-simplicial-subdivision-chain-map]].

[F2] The cone on the maximal face satisfies the contraction identity. [[lem-an-augmented-simplicial-cone-has-an-explicit-chain-contraction]].

[F3] The simplicial boundary squares to zero. [[thm-the-simplicial-boundary-squares-to-zero]].


## Proof

**Given:** The augmented recursion $S(s)=c_\sigma S(\partial s)$ and $S_{-1}=1$.

1.1 For a vertex $v$, $\partial S[v]=\partial[\{v\}]=1=S\partial[v]$. The degree $-1$ equation is zero on each side. On an edge $[a,b]$, the formula is $S[a,b]=[ab,b]-[ab,a]=[a,ab]-[b,ab]$, abbreviating singleton face labels by their vertices and $\{a,b\}$ by $ab$. Its boundary is $[b]-[a]=S\partial[a,b]$. [F1]

2.1 Assume boundary compatibility through degree $n-1$. In the cone $\operatorname{sd}\sigma$ the contraction identity gives $\partial S(s)=\partial c_\sigma S(\partial s)=S(\partial s)-c_\sigma\partial S(\partial s)=S(\partial s)-c_\sigma S(\partial^2s)=S(\partial s)$. For the augmented boundary square at a one-simplex, $\varepsilon([b]-[a])=0$; in higher degrees use the boundary-square theorem. Induction proves the identity in every degree. Geometrically the cone terms on boundary-of-boundary faces cancel, exactly accounting for internal faces. Setting the degree-zero ordinary boundary to zero preserves the identity on ordinary chains. [F1, F2, F3, step 1.1] ∎

