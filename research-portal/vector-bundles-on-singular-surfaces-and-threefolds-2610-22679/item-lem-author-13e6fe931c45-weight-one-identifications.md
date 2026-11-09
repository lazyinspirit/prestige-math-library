---
title: Low-degree consequences of a weight-one comparison
status: draft
research_item: lem-author-13e6fe931c45-weight-one-identifications
dependency_level: 15
---

PDF p. 4: equation (2.3)

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)
- [lem-author-13e6fe931c45-shifted-units](item-lem-author-13e6fe931c45-shifted-units)
- [lem-author-13e6fe931c45-cone-exact-range](item-lem-author-13e6fe931c45-cone-exact-range)

## Statement
Assume the Axiom of Choice and the site-size bounds of [lem-author-13e6fe931c45-shifted-units](item-lem-author-13e6fe931c45-shifted-units). Let $X$ be a qcqs scheme over a field, and suppose a morphism $f:R\Gamma_{\rm Nis}(X,\mathbb G_m)[-1]\to\mathbb Z(1)_{\rm mot}(X)$ has cofiber supported in degrees $>3$. Then it induces $H^{i-1}_{\rm Nis}(X,\mathbb G_m)\cong H^{i,1}_{\rm mot}(X,\mathbb Z)$ for $i\leq3$. In particular the motivic groups are zero for $i\leq0$, global units for $i=1$, and the Picard group for $i=2$.

## Facts & Assumptions

**Given:** $X$, $f$, the cofiber bound, Choice, and the site-size bounds.

**Goal:** Derive the displayed cohomology identifications.

[F1] The cofiber bound gives an isomorphism on cohomology through degree three ([lem-author-13e6fe931c45-cone-exact-range](item-lem-author-13e6fe931c45-cone-exact-range)).

[F2] The source groups and their low degrees are identified in [lem-author-13e6fe931c45-shifted-units](item-lem-author-13e6fe931c45-shifted-units). Motivic cohomology is cohomology of the target complex ([def-motivic-cohomology](item-def-motivic-cohomology)).

## Proof

1.1 Apply [F1] to $f$. By [F2], the source of the resulting degree-$i$ isomorphism is $H^{i-1}_{\rm Nis}(X,\mathbb G_m)$ and the target is $H^{i,1}_{\rm mot}(X,\mathbb Z)$. [F1, F2, given]

2.1 Substitute the computations of [F2] for $i\leq2$. This gives zero, units and the Picard group in the stated ranges, retaining the assumptions required by the supplier. [F2, step 1.1] ∎
