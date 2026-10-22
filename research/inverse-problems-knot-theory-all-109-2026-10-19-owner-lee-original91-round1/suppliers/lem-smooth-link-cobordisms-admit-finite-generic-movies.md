---
id: lem-smooth-link-cobordisms-admit-finite-generic-movies
kind: lemma
title: Smooth link cobordisms admit finite generic movies
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-locally-flat-proper-surface-and-concordance-collars
  - lem-a-smooth-isotopy-of-links-can-be-put-in-general-position
  - lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times
  - lem-every-oriented-link-admits-a-regular-projection
  - thm-parametric-transversality
  - thm-morse-sard-for-smooth-manifolds
  - thm-morse-lemma
  - lem-separating-critical-values-far-from-the-boundary
  - cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time
  - thm-isotopy-extension
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Hoel Queffelec, Reidemeister's theorem using transversality
      url: https://arxiv.org/pdf/2406.18203v1
      locator: Entire eleven-page text read; §§3.1–3.6, pp.5–10, prove the regular
        projection and one-parameter event classification. The finite-jet and
        diagonal-finiteness refinements are in the local suppliers.
    - title: John Milnor, Lectures on the h-Cobordism Theorem
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
      locator: Morse and regular-band local constructions, used through the proved
        local suppliers; no new whole-book reading claimed.
---

## Statement

Assume countable choice. Let $S\subset S^3\times[0,1]$ be a compact smooth properly embedded oriented surface, with product collars and boundary the finite oriented links $-L_0$ and $L_1$ in the two ends. Components of $S$ and either boundary link may be empty. After an ambient isotopy fixed on smaller prescribed end collars, $S$ has a finite movie consisting of planar isotopies, oriented Reidemeister moves R1, R2 and R3, births, oriented saddle band moves, and deaths. All exceptional times are distinct. The movie's actual smoothly embedded trace is ambient isotopic to the given $S$ relative to those collars, with its boundary orientations and parametrizations retained. Prescribed regular endpoint diagrams may be retained. This is movie existence; it asserts no equivalence theorem for two movies.

## Statement references

[[def-locally-flat-proper-surface-and-concordance-collars|Proper smooth surfaces and end collars]]

[[lem-a-smooth-isotopy-of-links-can-be-put-in-general-position|Finite generic link isotopies]]

[[lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times|Local Reidemeister events]]

## Facts & Assumptions

**Given:** Countable choice, the compact collared smooth surface $S$, and any prescribed regular endpoint diagrams.

[A1] [[def-countable-choice]] is used in Sard, transversality, the regular-band flow and isotopy extension. All surface charts and slabs selected after compactness are finite.

[F1] [[thm-parametric-transversality]] supplies good parameters for a finite-dimensional family whose evaluation is transverse. [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]] supplies supported chart bumps. A differential transverse to the zero section has invertible Hessian at its zeros; this is also the coordinate calculation used below.

[F2] [[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]] and [[lem-separating-critical-values-far-from-the-boundary]] supply finiteness and distinct values. [[thm-morse-lemma]] supplies the quadratic forms at these points.

[F3] [[lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time]] trivializes a compact band with no critical point by a flow satisfying $dh(X)=1$.

[F4] [[lem-a-smooth-isotopy-of-links-can-be-put-in-general-position]] supplies arbitrarily small perturbations of a link isotopy, fixed on stationary regular ends, with finitely many distinct ordinary cusp, double-tangency and triple events and no higher events. Its proof controls independent finite jets and excludes accumulation at deleted source diagonals. [[lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times]] identifies exactly R1, R2 and R3, with their actual over/under orders and orientations.

[F5] [[lem-every-oriented-link-admits-a-regular-projection]] supplies finite regular diagrams. [[thm-morse-sard-for-smooth-manifolds]] makes the image of a smooth surface in $S^3$ null. [[thm-isotopy-extension]] extends compact embedding isotopies under countable choice. For an isotopy fixed near part of the source, its velocity is zero there; the extension can be cut off away from a smaller such neighbourhood.

## Proof

1.1 **A spatial chart and small embedding perturbations.** If $S$ is empty take the empty movie. Extend its spatial projection constantly across appended product collars to a boundaryless surface. Its differential has rank at most two, so [F5] makes its image in $S^3$ null; in particular the original compact spatial image is null. Choose a point outside that compact image and use a spatial stereographic chart, so the entire surface lies in $\mathbb R^3\times I$. If endpoint diagrams use the fixed point at infinity, choose this missing point near infinity, outside the track, and move it to infinity by an ambient point motion in a small ball disjoint from the end links; this fixes smaller end collars, exactly as in the compact-track argument for link isotopies. Write its embedding as $e(x)=(a(x),h(x))$. Small $C^1$ perturbations of $e$ on a fixed compact support in the interior remain embeddings: injectivity of each local differential has a uniform lower bound on finitely many smaller charts, while images of source pairs outside those chart neighbourhoods have positive minimum separation. Interpolating a sufficiently small perturbation with $e$ gives an embedding isotopy fixed on the collars. Its velocity extends by [F5], working in the boundaryless collar extension $S^3\times\mathbb R$ and cutting it off away from the fixed end collars. Thus these perturbations preserve the actual collared surface up to ambient isotopy. [given, A1, F5, construct]

2.1 **Morse height realized on the embedded surface.** Cover the complement of a smaller product collar by finitely many chart cores and choose supported bumps equal to one there by [F1]. In each surface chart with coordinates $x_1,x_2$, perturb the height $h$ by finite linear combinations of $\chi x_1,\chi x_2$, extended by zero. At a zero of its differential, the parameter derivatives span the cotangent fiber on at least one core. Thus the evaluation of the differential is transverse to the zero section. [F1] gives arbitrarily small parameters with transverse differential, hence nonsingular critical Hessians. Choose them so small that step 1.1 applies and the height stays strictly between zero and one off the collars. On the collars $h=t$ is unchanged and has no critical point. By [F2] there are finitely many critical points; separate their heights by the supported small perturbation in [F2], still within the embedding neighbourhood. The embedding is now $(a,h')$ with excellent Morse height $h'$, and is ambient isotopic to the original surface relative to the collars. [F1, F2, step 1.1, construct]

3.1 **Isolating the Morse pictures.** Let $p$ be one of the finitely many critical points, of height $c$. Since $dh'_p=0$ and the surface embedding is immersive, the spatial derivative $da_p$ is injective. Choose planar projection transverse to this tangent plane. In a small source disk the spatial projection is therefore a diffeomorphism onto a planar disk, and [F2] writes the height there as $c+x^2+y^2$, $c-x^2-y^2$, or $c-x^2+y^2$, after a change of its planar disk coordinates. These give respectively one circle born, one circle dying, or the two smoothings of a saddle band. The orientations are the boundary orientations induced from the same oriented surface. We may arrange that the projected critical point misses every other branch at height $c$: equality with a distinct regular-level branch imposes two planar equations on its one source coordinate, so a transverse perturbation has no solution. Likewise regular immersion, transverse double points and absence of triple points on the rest of that slice follow from the one-slice jet conditions in [F4] or [F5]. Here the finite-dimensional families are supported away from the critical source disk and the end collars; on the disk only its projection direction or an arbitrarily small spatial linear perturbation is needed to make its tangent projection invertible. Finitely many disjoint source disks permit these choices simultaneously, with no change in $h'$. Transversality on the remaining slice pieces uses independent chart bumps exactly as in [F4]. All conditions are open away from the selected local critical model. Compactness then gives a small time interval about each $c$, disjoint from the others, in which the critical picture occupies a disk missing all other projected strands, and the complementary diagrams are regular and vary by planar isotopy. Thus there is one isolated birth, saddle or death in each such interval. [F1, F2, F4, F5, step 2.1, construct]

4.1 **Regular slabs retain the actual isotopy.** Cut at regular levels on the two sides of each critical interval. Extend the height over the product collars when a boundaryless carrier is needed. On every complementary closed slab the normalized-gradient flow [F3] identifies the surface with $C\times[a,b]$ and its embedding with $(F_t(x),t)$, for a finite union of circles $C$. Compactness makes $C$ finite, and each $F_t$ is a spatial embedding. If a slab is empty there is nothing to do. Use slightly extended regular bands at the cuts. Choose a smooth function $\rho$ on each such band, equal to the cut time on a smaller central strip and equal to $t$ near the band's two outer faces. Replace $F_t$ by $F_{\rho(t)}$. This replacement is an isotopy of the traced surfaces, not an assertion that $\rho$ is an ambient time diffeomorphism: the interpolation $(F_{(1-s)t+s\rho(t)}(x),t)$ is an embedding for every $s$, because its time coordinate is still $t$ and its spatial slices are embeddings. It is fixed near the band's outer faces, so it extends by the identity over the rest of the surface and ambiently by [F5]. In particular the traces on both sides of a cut now agree with the same stationary product near it. Bands are chosen disjoint from the critical pictures and the prescribed end collars. The regular slabs, with these smaller product strips at their ends, therefore have stationary regular endpoint projections, while the intervening critical pieces remain unchanged on smaller neighbourhoods of their critical levels. The endpoint diagrams at the cuts are regular by step 3.1. [F3, F5, step 3.1, construct]

5.1 **Finite projection events on each regular slab.** Apply [F4] to each stationary-ended $F$ of step 4.1. It gives an arbitrarily small smooth perturbation $F'$ fixed near both slab ends, with finitely many mutually distinct cusp, quadratic double-tangency and transverse triple times. Interpolate linearly in the spatial $\mathbb R^3$ chart between $F$ and $F'$; take the perturbation small enough that all intermediate slices are embeddings, using compact local immersion and distant-pair separation as in step 1.1. The traces $(F_{s,t}(x),t)$ are therefore embedding isotopies fixed on the slab ends, and extend ambiently by [F5]. Thus the chosen generic isotopy represents the original traced regular slab up to ambient isotopy relative to its cuts. By [F4] its projected events are precisely oriented R1, R2 and R3 and the intervals between them are planar isotopies. This uses the generic-isotopy supplier on the actual traced family; replacing it merely by an arbitrary Reidemeister sequence between the same endpoint links would not establish the trace assertion. [F4, F5, step 1.1, step 4.1, construct]

6.1 **Gluing and boundary cases.** There are finitely many critical intervals and regular slabs. All slab perturbations are fixed near their cuts, so their traced surfaces glue smoothly to the unchanged local critical pictures. Their ambient isotopies glue using collars, or compose after extending each by the identity off its support. The resulting finite ordered movie retains all boundary parametrizations and smaller end collars. Critical intervals contain only their one Morse event; the generic projection events are in the complementary slabs, so all exceptional times are distinct. Empty incoming or outgoing links merely omit the respective end cylinders; closed surface components have their own finitely many births and deaths, and are included by the same construction. The empty surface has already been treated. Prescribed regular end diagrams were never perturbed. The orientations and crossing height orders throughout are those of the actual embedded surface. Countable choice has been used only in the named suppliers and countable-chart transversality, not full AC. This proves the stated existence and trace comparison without any movie-move classification. [given, A1, F2, F4, F5, step 2.1, step 3.1, step 5.1] ∎
