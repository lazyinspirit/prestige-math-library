---
id: ex-a-trivial-smooth-bundle-has-a-projection-preserving-product-triangulation
kind: example
title: "Projection-preserving product triangulation of a trivial smooth bundle"
status: draft
origin: session
deps: [def-relative-smooth-triangulation-and-projection-preserving-fitting, lem-finite-convex-cell-complexes-admit-compatible-triangulations]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $h:D\to B$ and $g:L\to N$ be supplied finite corner-adapted whole-star smooth triangulations. The trivial bundle $\pi:B\times N\to B$ has a finite smooth triangulation $F:K\to B\times N$ satisfying $\pi F=hr$ for a piecewise affine map $r:K\to D$, with $h$ unchanged. Product corner faces are subpolyhedra.

## Facts & Assumptions

**Given:** the two supplied finite smooth triangulations and the trivial product bundle.

[F1] Finite convex product cells can be triangulated compatibly ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]).

[F2] Whole-star and affine-base diagrams have the meanings of [[def-relative-smooth-triangulation-and-projection-preserving-fitting]].

## Verification

1.1 The cells $\sigma\times\tau$, $\sigma\in D$, $\tau\in L$, form a finite convex cell complex: the intersection of two is the product of their respective common faces, hence is a common face. Apply [F1] to obtain a finite compatible triangulation $K$ of $|D|\times|L|$. Define $F(x,y)=(h(x),g(y))$ and $r(x,y)=x$. Each simplex of $K$ lies in a product cell, so $F$ is smooth there and $r$ is affine into its original base simplex; the values agree on faces. The equality $\pi F=hr$ holds pointwise. [F1, F2, given, algebra]

2.1 The product map is a homeomorphism because each factor is. Its differential on the tangent star is $(u,v)\mapsto(dh(u),dg(v))$. Equality of two such values implies equality of both source components by the two whole-star hypotheses; thus the product differential is injective on the full star, even after the product-cell subdivision. The corner-face fans and their zero sets are products of those of the factors, so the triangulation is corner adapted. Every product face is a union of the product cells already triangulated compatibly. This proves the smooth triangulation and projection-preservation claims without invoking the general bundle theorem. [F1, F2, step 1.1] ∎
