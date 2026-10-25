---
id: lem-relative-three-manifolds-admit-parametrized-link-surgery-presentations
kind: lemma
title: "Parametrized link-surgery existence for compact oriented three-manifolds"
status: published
dependency_level: 8
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: ["def-axiom-of-choice", "thm-every-closed-oriented-smooth-three-manifold-bounds-a-compact-oriented-smooth-four-manifold", "lem-fixed-vertical-height-relative-morse-handle-normalization", "lem-interior-one-handle-trade-and-framed-circle-surgery-pair", "thm-parametric-transversality", "lem-isotopy-extension-for-a-compact-source-with-boundary", "thm-collar-neighborhood-theorem", "lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism"]
justified_by: []
sources:
  references:
    - title: "Justin Roberts, Kirby calculus in manifolds with boundary"
      url: https://arxiv.org/pdf/math/9812086
      locator: "Stage 1 and relative handle setup; the full local constructions are supplied in this proof, rather than assuming surgery or Kirby completeness."
---

## Statement

Assume AC. Let $N,M$ be connected nonempty compact oriented smooth three-manifolds, with their boundaries identified with the same oriented surface $\Sigma$ in the bordism convention and with fixed compatible product collars. There is a finite framed link in $\operatorname{int}N$ whose surgery is diffeomorphic to $M$ with the prescribed external boundary parametrization. It may be realized as a four-dimensional two-handle trace with those marked horizontal faces and vertical collar $\Sigma\times[0,1]$. More generally this holds componentwise for a specified common component partition; empty input is treated by the empty union. In particular a fixed connected standard base with the required boundary may be chosen on each component, and a closed component may use $N=S^3$. An explicit connected standard base is the complement in $S^3$ of standard handlebodies placed in pairwise disjoint balls, one for each boundary component with its specified genus, with the given surface parametrizations attached to these boundary copies. This is relative surgery existence, not equivalence or completeness of surgery moves. Decorations may be carried by the resulting actual diffeomorphism; a complete decorated move theorem is a separate assertion.

## Facts & Assumptions

**Given:** The manifolds, collars, framed embeddings and boundary identifications in the Statement; AC ([[def-axiom-of-choice]]).

[F1] [[thm-every-closed-oriented-smooth-three-manifold-bounds-a-compact-oriented-smooth-four-manifold]] supplies a compact oriented smooth four-dimensional filling of every actual closed oriented three-manifold, retaining its marked cap submanifolds by the boundary identification.

[F2] [[lem-fixed-vertical-height-relative-morse-handle-normalization]] gives fixed-vertical-height relative handles and, for connected nonempty ends and connected total bordism, a presentation with no zero or top handles. [[lem-interior-one-handle-trade-and-framed-circle-surgery-pair]] changes a one-handle into a two-handle in dimension four while preserving the full boundary, provided its feet are joined in the lower attaching boundary face and its closed core has orientable normal bundle.

[F3] [[thm-parametric-transversality]] makes a generic slice transverse to each prescribed belt-core circle when the full evaluation is submersive. [[lem-isotopy-extension-for-a-compact-source-with-boundary]] extends isotopies of compact full-dimensional tubular embeddings in the boundaryless interior, with support in a prescribed neighborhood of their track.

[F4] [[thm-collar-neighborhood-theorem]] supplies smooth collars and [[lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism]] supplies collar-supported compatible seam roundings.

## Proof

**Proof technique:** Direct constructions in product collars, retaining the actual boundary maps.

1.1 Glue $-N$ to $M$ along the actual given boundary map and collars, obtaining a closed oriented three-manifold $X$ with a marked seam $\Sigma$. By [F1] choose $U$ with $\partial U\cong X$ and pull back this marking. Discard filling components without boundary. If necessary join the remaining finitely many components by interior connected sums: remove two interior four-balls and join their oriented sphere boundaries by $S^3\times I$, using product annulus charts. These operations preserve every old boundary collar and make $U$ connected. Its boundary is nonempty, even when the seam is empty, since $N,M$ are nonempty. [given, F1, F4, construct]

2.1 Near the marked seam the filling has coordinates $\Sigma\times(-2\epsilon,2\epsilon)_u\times[0,2\epsilon)_v$, with $v$ inward. Remove a small notch along $u=v=0$: in this half-plane replace a small boundary interval by an inward compact arc with quadrant corners at its endpoints, unchanged outside a small rectangle. Its product with $\Sigma$ is the vertical face $\Sigma\times I$. Identify the shortened horizontal collars with the original ones by smooth increasing interval maps, identity near their far ends, and keep the identity on every $\Sigma$ point. Product quadrant charts retain the prescribed parametrizations at both corners. The notch does not disconnect the interior: each remaining local point joins the unchanged interior region. Thus this is a connected boundary-marked four-bordism from $N$ to $M$ with precisely the given vertical product collar. For empty $\Sigma$ no notch is needed. [F1, F4, step 1.1, construct]

3.1 Apply [F2] in dimension four to remove zero and four handles and order by index. The horizontal attaching face starts at connected $N$, and attaching a one-handle to a connected three-face preserves its connectedness. Join each pair of feet by an embedded arc in the interior of that face off the protected collar. Orientation compatibility makes its closed core's normal bundle orientable, so [F2] trades the one-handle for a two-handle with the same outgoing face. Induction trades every one-handle. Reorder by index, reverse from connected $M$, and repeat for the reversed one-handles, which were original three-handles. Reversing back leaves only two-handles. The modified four-manifold need not equal the original filling; its entire marked boundary does. Denote its resulting successive two-handle trace by $W'$. [F2, step 2.1, construct]

4.1 Record this successive trace by one link in the original $N$. Inductively suppose preceding handles are represented by a framed link $L\subset N$. The next attaching circle has a framed product chart $c:S^1\times D^2_{2r}\to\operatorname{int}Q$ in the surgered outgoing three-manifold $Q$, away from the protected collar. For $|z|<r/2$ set $c_z(t)=c(t,z)$. The evaluation $(t,z)\mapsto c(t,z)$ is a submersion. By [F3] choose an arbitrarily small $z$ for which $c_z$ is transverse to every belt core; since each core has codimension two and the curve has dimension one, they are disjoint. For a smooth $\eta:[0,1]\to[0,1]$ stationary at its endpoints with $\eta(0)=0$, $\eta(1)=1$, the maps $(t,v)\mapsto c(t,v+\eta(u)z)$, $|v|\le r$, are an isotopy of the full compact attaching tube. After shrinking the original disk factor to this tube, [F3] extends it to a supported ambient isotopy. This carries the given framing, rather than merely choosing a freely homotopic knot. Compactness now bounds the circle's radial coordinate in each filling product $D^2\times S^1$ below by some $\epsilon>0$. [F3, step 3.1, construct]

5.1 In each such product choose a smooth increasing radial reparametrization, identity near zero and outside a slightly larger seam collar, which sends every radius at least $\epsilon$ beyond the old filling-torus boundary. This exists by choosing its strictly positive derivative with the required integral and fixed end intervals. It is a radial ambient isotopy, stationary at its parameter ends. Thus the circle is pushed into the old exterior $N\setminus\nu L$. Carry its full attaching thickening by the derivative, shrinking it uniformly first if needed. By [F3] the isotopy extends over a collar of the existing trace, fixed at the incoming face and external boundary. Hence the total trace agrees with the prescribed successive one, retaining the outgoing comparison. The new circle is now an additional framed component in the original $N$. Finite induction produces a single link. [F3, F4, step 4.1, construct]

6.1 The outgoing boundary of a four-dimensional two-handle removes $S^1\times\operatorname{int}D^2$ and inserts $D^2\times S^1$ in its product attaching coordinates, exactly the stated framed surgery. Therefore the final link yields $M$ with the original external parametrization. For disconnected manifolds run the construction independently on each prescribed pair of connected components, using that pair's fixed base, and take their finite disjoint union. For empty inputs take the empty union. The common partition is essential: surgery never changes the number of ambient components. No nullhomotopy of attaching circles, fundamental-group restriction, Kirby completeness or decorated move completeness has been used. [F4, step 5.1, construct] ∎

## Scope and source attribution

This is the full existence construction of `five-dimensional-common-middle-trace-construction.md`, Section 6, with its actual boundary-marked filling input now discharged by the integral three-bounding theorem and an explicit connected-filling/notch construction. The single-link consolidation keeps complete framings and outgoing maps. It does not replace the native full relative-presentation theorem, whose global move-completion duty remains separate.
