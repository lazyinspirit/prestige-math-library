---
id: lem-skeletal-homology-stabilizes-away-from-the-cell-dimension
kind: lemma
title: Skeletal homology stabilizes away from the cell dimension
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-relative-homology-of-consecutive-cw-skeleta, thm-long-exact-sequence-of-a-pair-in-singular-homology]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Section 2.2
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement

Let $X$ be a CW complex, let $G$ be an abelian group, and let $n\geq0$.
The skeletal inclusion induces an isomorphism
$H_k(X^n;G)\to H_k(X^{n+1};G)$ for $k<n$ and a surjection for $k=n$.

## Facts & Assumptions

**Given:** A CW complex $X$, an abelian coefficient group $G$, and the consecutive-skeleton pair $(X^{n+1},X^n)$.

## Proof

**Proof technique:** direct.

1.1 Its relative homology vanishes outside degree $n+1$ by [[thm-relative-homology-of-consecutive-cw-skeleta]]. [given]

2.1 In the pair long exact sequence, the two relative groups adjacent to $H_k(X^n)$ vanish for $k<n$, and only the outgoing one need vanish for $k=n$; exactness gives respectively an isomorphism and a surjection. [step 1.1] ∎
