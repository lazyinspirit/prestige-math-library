---
id: ex-the-subdivision-chain-of-an-oriented-two-simplex
kind: example
title: "The subdivision chain of an oriented two simplex"
status: published
origin: pipeline
deps: ["def-oriented-simplicial-subdivision-chain-map", "lem-oriented-simplicial-subdivision-commutes-with-boundary"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Example

Abbreviate singleton face vertices by $a,b,c$, two-element face vertices by $ab,ac,bc$, and the triangle face vertex by $T=abc$. For the orientation $[a,b,c]$,
$$S[a,b,c]=[b,bc,T]-[c,bc,T]-[a,ac,T]+[c,ac,T]+[a,ab,T]-[b,ab,T].$$
Its boundary is
$$[b,bc]-[c,bc]-[a,ac]+[c,ac]+[a,ab]-[b,ab]=S([b,c]-[a,c]+[a,b]).$$

## Source locators

2.1 pp.121–122.


## Facts & Assumptions

[F1] Subdivision uses the cone recursion. [[def-oriented-simplicial-subdivision-chain-map]].

[F2] The general boundary identity is a chain-map identity. [[lem-oriented-simplicial-subdivision-commutes-with-boundary]].


## Verification

**Given:** The full oriented triangle $[a,b,c]$ and the displayed face-label abbreviations.

1.1 The augmented cone recursion gives $S[u,v]=[uv,v]-[uv,u]=[u,uv]-[v,uv]$. Hence $S\partial[a,b,c]=[b,bc]-[c,bc]-[a,ac]+[c,ac]+[a,ab]-[b,ab]$. Prepending $T$ to each term and moving it past the two other vertices changes sign by $(-1)^2=1$, giving exactly the six displayed oriented triangles. [F1]

2.1 For a term $[u,e,T]$, its boundary is $[e,T]-[u,T]+[u,e]$. The first two triangle terms give radial contribution $-[b,T]+[c,T]$ after the $[bc,T]$ terms cancel. The next two give $[a,T]-[c,T]$ after the $[ac,T]$ terms cancel. The last two give $-[a,T]+[b,T]$ after the $[ab,T]$ terms cancel. The three remaining radial contributions sum to zero. The six base terms are exactly the displayed $S\partial[a,b,c]$, verifying the boundary identity directly, in agreement with the general chain-map lemma. [F2, step 1.1] ∎
