---
id: lem-reverse-mirror-sum-has-a-ribbon-immersion
kind: lemma
title: "A reverse-mirror sum admits an explicit ribbon immersion"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ribbon-disk-and-ribbon-knot
  - def-reverse-mirror-of-oriented-knot
  - def-knot-connected-sum-and-prime-knot
  - lem-knot-connected-sum-well-defined
  - def-regular-oriented-link-diagram
  - lem-every-oriented-link-admits-a-regular-projection
  - thm-isotopy-extension
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Arunima Ray, Slice Knots and Knot Concordance"
      url: "https://aru-ray.github.io/documents/slicenotes.pdf"
      locator: "Propositions 1.5 and 1.6, PDF p.3; ribbon singularity in Figure 6, PDF p.5. The explicit strip proof is supplied here."
dependency_level: 7
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume the Axiom of Countable Choice. Every smooth oriented knot $K$ in the standard oriented three-sphere has its connected sum with its reverse mirror represented by the boundary of a smooth immersed disk in $S^3$ whose only multiple points are finitely many transverse double arcs, each having one proper preimage arc and one interior preimage arc. Consequently $K\#K^\dagger$ is ribbon in the ribbon-immersion sense.

## Statement references

[[def-ribbon-disk-and-ribbon-knot|Ribbon immersions and their double-arc condition]]

[[def-reverse-mirror-of-oriented-knot|The reverse mirror]]

[[def-knot-connected-sum-and-prime-knot|Oriented connected sum]]

## Facts & Assumptions

**Given:** ACω and a smooth oriented knot $K$.

[A1] ACω is the countable choice assumption of the regular-projection and smooth isotopy-extension suppliers. [[def-countable-choice]]

[F1] Every smooth knot already contained in the standard $\mathbb R^3\subset S^3$ has a regular projection under ACω. It is an immersion with finitely many transverse double points, no triple points, and over/under data specified by strict height inequalities. [[lem-every-oriented-link-admits-a-regular-projection]], [[def-regular-oriented-link-diagram]]

[F2] Under ACω, every smooth isotopy of a compact smooth manifold embedded in $S^3$ extends to an ambient isotopy. In particular, this applies to a point and to an embedded circle; each extending ambient isotopy is orientation-preserving because it starts at the identity. [[thm-isotopy-extension]]

[F3] Gluing a ball-arc tangle to its reflected copy, traversed in the opposite direction, gives the oriented connected sum of the tangle's knot closure with its reverse mirror. Its oriented knot type is unchanged when either factor is replaced by an oriented ambient-isotopic representative or when the small trivial closing arc is changed. [[def-reverse-mirror-of-oriented-knot]], [[def-knot-connected-sum-and-prime-knot]], [[lem-knot-connected-sum-well-defined]]

[F4] The ribbon condition requires finitely many disjoint transverse double arcs with one proper preimage arc and one interior preimage arc, and no other multiple points. [[def-ribbon-disk-and-ribbon-knot]]

## Proof

**Given:** $K$ and ACω.

1.1 Choose $p\in S^3\setminus K$ and a smooth path $p_t$ from $p$ to $\infty$, constant near both endpoints of $I$. This is an isotopy of embeddings of the compact $0$-manifold consisting of one point. By [F2] it extends to an ambient isotopy $H_t$ of $S^3$. Set $K':=H_1(K)$, so $K'\subset S^3\setminus\{\infty\}=\mathbb R^3$, and take a regular diagram of $K'$ by [F1]. Delete a short open subarc of an edge incident to the unbounded complementary region. Its remaining projected arc can be placed in a closed planar disk with its two endpoints on the disk boundary, all its other points in the disk interior, and the deleted closing arc outside that disk: draw the boundary through the deleted edge along the adjacent unbounded region and round it away from the diagram. Parameterize the remaining immersed planar arc by $\gamma:[0,1]\to\mathbb R^2$, straight near its endpoints. It has nonzero derivative, finitely many transverse crossing pairs $(u_i,v_i)\in(0,1)^2$, no triples, and no endpoint multiple points. The closing arc has no crossing. At each crossing mark which of $u_i,v_i$ is over according to the diagram of $K'$. Since $H_t$ is orientation-preserving, the conjugate isotopy $rH_t r^{-1}$ shows $K'^\dagger$ is oriented ambient-isotopic to $K^\dagger$. By [F3], the oriented connected-sum type $K'\#K'^\dagger$ is therefore $K\#K^\dagger$ under the fixed gluing convention. [A1, F1, F2, F3, given, construct]

2.1 Choose a smooth function $q:[0,1]\to(0,\infty)$ so that $h(s)=\sqrt{s(1-s)q(s)}$ has the prescribed strict over-minus-under sign at every crossing pair. This is a finite interpolation: assign positive heights $2$ and $1$ at the over and under parameters, respectively, and prescribe $q(s)=h(s)^2/(s(1-s))$ at these finitely many distinct parameters; interpolate the positive $q$ values by disjoint nonnegative smooth bumps against a positive constant. Distinct crossing parameters are disjoint because there are no triples. Make $q$ constant near the endpoints. Put $\Omega=\{(s,t):0\le s\le1,\ t^2\le s(1-s)q(s)\}$. The map $(s,v)\mapsto(s,v\sqrt{q(s)})$ is a smooth diffeomorphism from the round disk $v^2\le s(1-s)$ onto $\Omega$, including its two endpoint tips. Thus $\Omega$ is a smooth disk. [F1, step 1.1, construct, algebra]

3.1 Define $f:\Omega\to\mathbb R^3\subset S^3$ by $f(s,t)=(\gamma(s),t)$. Since $\gamma'(s)\ne0$, its two derivative vectors $(\gamma'(s),0)$ and $(0,0,1)$ are independent, so $f$ is an immersion, including in the smooth disk charts at the tips. The only possible multiple points occur at the crossing pairs of $\gamma$. For a pair $(u,v)$, assume $h(u)<h(v)$. The image double arc is $\{(\gamma(u),t):|t|\le h(u)\}$, with preimages $\{u\}\times[-h(u),h(u)]$ and $\{v\}\times[-h(u),h(u)]$. The first is properly embedded in $\Omega$, whereas the second lies entirely in its interior because $h(u)<h(v)$. The image sheets are transverse: their planar tangent directions are independent, and both contain the vertical tangent. Double arcs from different crossings are disjoint because their planar crossing points are distinct. There are no triple points. No two boundary points have the same image, since boundary heights at a crossing are $\pm h(u)$ and $\pm h(v)$, all distinct. Thus $f$ satisfies exactly [F4]. [F1, F4, step 1.1, step 2.1, construct, algebra]

4.1 The plane $t=0$, completed by the point at infinity, is an equatorial sphere of $S^3$. It cuts the boundary of $f(\Omega)$ at exactly the two tips. The upper boundary arc is $(\gamma(s),h(s))$ and the lower is its reflection $(\gamma(s),-h(s))$ with opposite boundary orientation. Both are smooth proper ball-arc tangles: near a tip the equation $t^2=s(1-s)q(s)$ solves smoothly for $s$ as a function of $t^2$, so the arc is transverse to the equatorial plane. Close the upper arc by the deleted trivial arc in the equatorial sphere and round its two corners in crossing-free endpoint neighborhoods. This closure represents $K'$: it has exactly the projected crossings of the diagram in step 1.1 and their original height ordering. Explicitly, after choosing smooth endpoint roundings, interpolate its heights to those of the regular diagram realization of $K'$ while keeping the planar immersion fixed. At every crossing, each endpoint height difference is positive in its marked ordering, so their convex interpolation stays positive; the planar immersion ensures immersion of every slice. This gives a smooth isotopy of embedded circles, and [F2] makes it ambient. The endpoint rounding takes place in disjoint balls without other strands and changes no knot type. Consequently [F3] identifies the oriented boundary of $f(\Omega)$ with $K'\#K'^\dagger$, which represents $K\#K^\dagger$ by step 1.1. Together with step 3.1, this is the required ribbon immersion. [F1, F2, F3, step 1.1, step 2.1, step 3.1, construct] ∎

## Remarks

This direct construction does not require conversion of an arbitrary disk with a radial Morse function without maxima to a ribbon immersion. That general equivalence is a separate theorem.
