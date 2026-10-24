---
id: lem-an-augmented-simplicial-cone-has-an-explicit-chain-contraction
kind: lemma
title: "An augmented simplicial cone has an explicit chain contraction"
status: published
origin: pipeline
deps: ["def-simplicial-chain-groups-and-boundary", "def-augmentation-and-reduced-simplicial-homology", "def-contractible-complex", "def-abstract-simplicial-complex", "def-barycentric-subdivision-of-an-abstract-simplicial-complex"]
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

## Statement

A simplicial cone with specified apex $a$ means that $\sigma\cup\{a\}\in K$ for every $\sigma\in K$. On its augmented integral chain complex, put $h_{-1}(1)=[a]$ and
$$h_n[v_0,\ldots,v_n]=[a,v_0,\ldots,v_n]\quad(n\geq0),$$
interpreting a repeated vertex as zero. Then $\partial h+h\partial=1$ in every degree, including $-1$, so the augmented complex is contractible. In particular the subdivision of a nonempty full simplex is a cone whose apex is its maximal face.

## Source locators

2.1, p.121, cone identity adapted to oriented simplicial chains.


## Facts & Assumptions

[F1] Oriented relations and alternating boundaries govern the computation. [[def-simplicial-chain-groups-and-boundary]].

[F2] The degree-zero boundary on augmented chains sends every vertex to 1. [[def-augmentation-and-reduced-simplicial-homology]].

[F3] A null homotopy of the identity is a contraction. [[def-contractible-complex]].


## Proof

**Given:** A cone $K$ with apex $a$; integral oriented chains, augmented by $C_{-1}=\mathbb Z$ and $\partial[v]=1$.

1.1 Adjoining $a$ stays inside $K$ by the cone hypothesis. Permuting the original vertices changes $[a,v_0,\ldots,v_n]$ by the same sign, so $h$ respects the oriented-chain relations. If $a$ is absent from $s=[v_0,\ldots,v_n]$, expansion gives $\partial[a,v_0,\ldots,v_n]=s+\sum_{i=0}^n(-1)^{i+1}[a,v_0,\ldots,\widehat v_i,\ldots,v_n]=s-h\partial s$. [F1, F2]

2.1 If $a=v_j$, then $h(s)=0$. In $h\partial s$ all terms except deletion of $v_j$ repeat $a$ and vanish. The remaining term is $(-1)^j[a,v_0,\ldots,\widehat v_j,\ldots,v_n]=s$, because moving $a$ back to position $j$ contributes another $(-1)^j$. In degree zero this says $\partial[a,v]+[a]=[v]$ for $v\ne a$, and $0+[a]=[a]$ for $v=a$. In degree $-1$, $\partial h(1)=\partial[a]=1$. Thus the identity holds on all generators and hence all chains. [F1, F2, step 1.1]

3.1 The identity $1=\partial h+h\partial$ is a null homotopy of the identity, hence contractibility. A chain of faces of a nonempty full simplex can always be enlarged by the maximal face; thus its order complex, as defined in [[def-barycentric-subdivision-of-an-abstract-simplicial-complex]], is a cone with that face as specified apex, and the same calculation applies. [F3, step 2.1] ∎
