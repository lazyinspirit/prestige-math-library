---
id: fs-every-noncompact-submanifold-has-a-uniform-radius-tubular-neighbourhood
kind: false-statement
title: "FALSE: every noncompact submanifold has a uniform-radius tubular neighbourhood"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-euclidean-tubular-neighbourhood-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Tubular Neighborhoods"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

**False claim:** every noncompact embedded submanifold of Euclidean space has a
tubular neighbourhood of one fixed radius.

## Facts & Assumptions

**Given:** A smooth embedded curve obtained by joining, for each integer
$n\ge1$, a long horizontal segment to a smoothed hairpin whose two parallel
strands are distance $2^{-n}$ apart.

[L1] The Euclidean tubular neighbourhood theorem only guarantees a positive
radius function along the submanifold
([[thm-euclidean-tubular-neighbourhood-theorem]]).

## Refutation
**Proof technique:** direct.

1.1 The described curve is a smooth embedding of $\mathbb R$ into $\mathbb R^2$: each hairpin lives far to the right of the previous ones, and the smoothing keeps successive pieces joined with nonvanishing tangent. [given, construct]

2.1 Let $r>0$. Choose $n$ with $2^{-n}<2r$. In the $n$th hairpin the two nearly parallel strands are closer than $2r$, so the normal discs of radius $r$ centered on opposite strands meet before reaching the turning cap. Hence the normal addition map is not injective on the radius-$r$ neighbourhood of that part of the curve. [step 1.1, algebra]

3.1 Since this happens for every fixed $r>0$, no uniform tubular radius works. Thus [L1] is sharp: in the noncompact case one generally needs a variable radius. [L1, step 2.1] ∎
