---
id: ex-integration-of-a-density-on-the-mobius-band
title: "A density integral on the Mobius band"
kind: example
status: published
origin: pipeline
deps: ["thm-density-integration-is-defined-without-an-orientation", "prop-density-pullback-under-local-diffeomorphisms"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Proposition 16.37 and Exercise 16.44; Nicolaescu Definition 3.4.1"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Example

On the compact Möbius band
$$B=(\mathbb R\times[-1,1])/\langle T\rangle,\qquad T(s,t)=(s+1,-t),$$
the density $|ds\,dt|$ descends to a smooth positive density $\delta$, and $\int_B\delta=2$.

## Facts & Assumptions

[F1] [[thm-density-integration-is-defined-without-an-orientation]]: Compactly supported smooth density integration is independent of charts and partition, linear, local, nonnegative on nonnegative densities and strictly positive for a nonzero nonnegative density. It is invariant under every diffeomorphism, without choosing an orientation. The finite-parametrization formula holds under the hypotheses of prop-integration-of-top-forms-by-finite-parametrizations, with orientation preservation omitted and absolute Jacobians used.

[F2] [[prop-density-pullback-under-local-diffeomorphisms]]: For a local diffeomorphism $F:M^n\to N^n$, pullback of smooth densities is smooth and in coordinates satisfies $$F^*(f|dy|)=(f\circ F)|\det DF|\,|dx|.$$ It is real-linear, obeys $F^*(a\delta)=(a\circ F)F^*\delta$ for smooth functions $a$ on $N$, and $(F\circ G)^*=G^*F^*$ for composable local diffeomorphisms.

## Verification

**Given:** The objects and hypotheses in the statement above.

1.1 The quotient map is open because the inverse image of an image-open set is the union of its translates. A rectangle with s-width less than one is disjoint from all its nontrivial translates, so maps homeomorphically onto its image; at t=1 or t=-1 use a half-rectangle. For two inequivalent points only finitely many translates of a bounded neighborhood of one can approach a bounded neighborhood of the other; shrink to separate these finitely many translates. Their saturated neighborhoods are disjoint, proving Hausdorffness. Images of rational rectangles form a countable base. The transition maps are restrictions of $T^k$, hence smooth, so these charts define a smooth manifold with boundary. It is compact as the image of $[0,1]\times[-1,1]$. [construct]

2.1 The seam transition has determinant $-1$, with absolute value one, so the local densities glue and are positive. Equivalently $T^*|ds\,dt|=|ds\,dt|$ by the pullback formula; the same holds for all integer powers. [F2, step 1.1]

3.1 Use the single finite parametrization from $D=(0,1)\times(-1,1)$ to the quotient. It is a diffeomorphism onto the open complement of seam and boundary, extends continuously from the closed rectangle, and is smooth up to each edge in target coordinates. Its image closure is B and its pulled-back density coefficient is one. The density parametrization formula therefore gives $\int_B\delta=\int_0^1\int_{-1}^1 1\,dt\,ds=2$. Seam and boundary are covered by that formula’s null-boundary control. [F1, step 1.1, step 2.1] ∎
