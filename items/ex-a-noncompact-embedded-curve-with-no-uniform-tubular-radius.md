---
id: ex-a-noncompact-embedded-curve-with-no-uniform-tubular-radius
kind: example
title: "A noncompact embedded curve with no uniform tubular radius"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-euclidean-tubular-neighbourhood-theorem,
       fs-every-noncompact-submanifold-has-a-uniform-radius-tubular-neighbourhood]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Tubular Neighborhoods"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Example

Construct a smooth embedding $\gamma:\mathbb R\to\mathbb R^2$ by concatenating
successively farther-right smoothed hairpins, where the $n$th hairpin contains
two nearly parallel strands at distance $2^{-n}$ and is joined to the next one
by a long horizontal segment. The image is a noncompact embedded curve.

## Facts & Assumptions

**Given:** The smooth hairpin curve described above.

## Verification
**Proof technique:** direct.

1.1 Each hairpin occupies a region disjoint from all the previous ones except for one joining segment, and the joins can be smoothed so that the velocity never vanishes. Therefore the concatenated curve is a smooth embedding of $\mathbb R$. [given, construct]

2.1 Fix $r>0$ and choose $n$ with $2^{-n}<2r$. In the $n$th hairpin the two nearly parallel strands are closer than $2r$, so normal discs of radius $r$ based on opposite strands intersect. Hence no tubular neighbourhood of constant radius $r$ can be injective there. [step 1.1, algebra]

3.1 This realizes the failure asserted in [[fs-every-noncompact-submanifold-has-a-uniform-radius-tubular-neighbourhood]] while remaining compatible with the variable-radius theorem [[thm-euclidean-tubular-neighbourhood-theorem]]. [step 2.1] ∎
