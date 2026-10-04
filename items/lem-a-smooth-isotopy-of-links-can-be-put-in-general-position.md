---
id: lem-a-smooth-isotopy-of-links-can-be-put-in-general-position
kind: lemma
title: "General-position isotopies of links"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-regular-oriented-link-diagram, lem-every-oriented-link-admits-a-regular-projection,
       def-countable-choice, thm-parametric-transversality,
       lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family,
       thm-relative-whitney-approximation-for-manifold-valued-maps,
       thm-transversality-homotopy-theorem, def-smooth-manifold,
       def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary,
       thm-transverse-preimage-theorem,
       def-planar-isotopy-of-link-diagrams]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Queffelec, Reidemeister's theorem using transversality, Bulletin of the Australian Mathematical Society (2024); arXiv:2406.18203v1, sections 2-3.2"
      url: "https://arxiv.org/pdf/2406.18203v1"
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links, AMS Surveys and Monographs 208 (2015); Appendix B.1, printed pp. 367-372"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $F:C\times I\to\mathbb R^3$ be a smooth
isotopy of a finite disjoint union of circles, constant near both ends, and
suppose both end projections under the fixed $\pi$ are regular. Arbitrarily
close to $F$ in the strong smooth topology there is such an isotopy $F'$, equal
to $F$ near the ends, whose projected slices have only these exceptional events:

(i) finitely many ordinary cusps, at distinct times; in a source coordinate
$x$, writing $g(x,t)=\pi F'(x,t)$, each satisfies
$g_x=0$, $\det(g_{xx},g_{xt})\ne0$ and
$\det(g_{xx},g_{xxx})\ne0$;

(ii) the **off-diagonal unordered** double-point locus is a smooth
one-dimensional manifold with boundary in the local-extension sense of
[[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]]; its boundary
consists exactly of the double points at $t=0,1$. Its interior is a manifold
without boundary, and its time projection has only finitely many
nondegenerate critical points, each an ordinary quadratic tangency of two
immersed branches;

(iii) finitely many transverse triple events, with all three pairs of
projected tangents independent, and no quadruple points.

No two exceptional events have the same time. All other slices are regular,
and between exceptional times their decorated diagrams vary by planar isotopy.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the isotopy $F$, regular end projections, and a prescribed strong smooth neighbourhood of $F$.

[F1] Under countable choice, a smooth parameter family transverse to a smooth submanifold has a null set of nontransverse slice parameters ([[thm-parametric-transversality]]).

[F2] Transverse preimages have the target codimension ([[thm-transverse-preimage-theorem]]).

[F3] Regularity and planar isotopy have the meanings of [[def-regular-oriented-link-diagram]] and [[def-planar-isotopy-of-link-diagrams]].

## Proof

**Proof technique:** direct.

1.1 **A family controlling independent jets.** The empty source is immediate. Embed $C\times I$ explicitly in Euclidean space by using separated standard circles for its finitely many components and the coordinate $t$. Choose a smooth cutoff $\lambda(t)$ zero on fixed end collars and positive on their complement; choose these collars inside the stationary regular portions of $F$. Perturb the two coordinates of $g_0=\pi F$ by $\lambda(t)$ times all ambient-coordinate monomials of degree at most $43$. At any at most six distinct interior source points this family independently prescribes their jets through order three. Indeed, for point $X_i$, the polynomial $\prod_{j\ne i}|X-X_j|^8$ vanishes to order eight at the others and is nonzero at $X_i$; multiply it by a degree-three Taylor polynomial chosen to prescribe the desired jet at $X_i$, and sum over $i$. The total degree is at most $8(6-1)+3=43$. Restriction to the embedded source prescribes any intrinsic jet, and multiplication by the nonzero $\lambda$ is invertible on jets. Keeping the third coordinate of $F$ unchanged gives a finite-dimensional family of link isotopies for sufficiently small parameters: uniform local immersion bounds and compact separation of distant source points preserve slice embeddings. Its smooth dependence on the parameter keeps it in the prescribed neighbourhood and fixes the end collars. Pointwise submersivity alone would not give these independent-jet assertions. [given, construct]

2.1 **Single and double events.** Apply [F1] to the jet strata in the family of step 1.1. The equations $g_x=0$ have codimension two on the two-dimensional source $(x,t)$; transverse occurrence gives $\det(g_{xx},g_{xt})\ne0$. The extra equation $\det(g_{xx},g_{xxx})=0$ has codimension one there and is avoided, since its total codimension is three. For distinct $x,y$, the equality $g(x,t)=g(y,t)$ has codimension two on $(x,y,t)$, giving a smooth one-dimensional locus for $0<t<1$ by [F2]. On each stationary regular end collar the finitely many double pairs are constant, so the locus is a disjoint union of half-intervals at $t=0,1$, with precisely those endpoints as its boundary. Constant extension of the collar makes these boundary charts smooth in the stated local-extension sense. An equality with either derivative zero has codimension four and is avoided. With both derivatives nonzero, equality plus parallel tangents has codimension three. Its transverse occurrences are isolated. In coordinates making both branches graphs, write their difference as $q(v,t)$. Equality and tangency are $q=q_v=0$; transversality means $q_tq_{vv}\ne0$, giving quadratic contact, nonzero normal relative velocity and a nondegenerate critical point of the time projection. Quotient by $(x,y)\leftrightarrow(y,x)$, a free finite action, so one geometric event is counted once. [F1, F2, step 1.1, algebra]

3.1 **Multiple events and separation of their times.** Triple equality has codimension four on $(x,y,z,t)$ of dimension four, so is transverse and isolated. Adding a zero derivative or a pairwise tangency increases the codimension and is avoided. Quadruple equality has codimension six on a five-dimensional source, so is avoided. Finally require that two distinct singular events never occur at a common time. For disjoint source sets, the combined cusp, tangent-double and triple strata have respectively two, three and four constraints per event; the shared time removes one source dimension, so every combined codimension exceeds the source dimension by one. Independent jets at at most six points give [F1] for each such stratum. Overlapping source sets instead give an already excluded cusp-double coincidence, triple tangency or quadruple equality. There are finitely many event types; their smooth strata may be covered by countably many coordinate pieces. [F1] makes all their exceptional parameter sets null, and countable choice permits their countable null union. Choose an arbitrarily small parameter outside this union. The end collars meet none of these strata and remain fixed. [F1, F2, step 1.1, step 2.1, algebra]

4.1 **Finiteness, including the deleted diagonals.** Cusp points form a closed isolated subset of the compact source away from the regular end collars, hence are finite. Near a cusp the two determinant conditions give the ordinary cusp unfolding: after subtracting the moving basepoint and choosing target axes its leading terms are $(b x^2,e tx+c x^3)$ with $bec\ne0$. Solving equality of two nearby branches after division by their source separation gives one local double-point arc ending at the cusp, transverse to time off that endpoint; it has no nearby tangent-double or triple event. Near a regular source point one projected coordinate is locally strictly monotone, uniformly for nearby times, excluding near-diagonal double pairs. These neighbourhoods therefore exclude accumulation of tangent-double and triple events on the deleted source diagonals. On the remaining compact configuration subsets those events are closed and isolated by steps 2.1–3.1, so are finite. At an ordinary slice the same diagonal separation makes its transverse double pairs finite. [F2, F3, step 2.1, step 3.1, algebra]

5.1 **Intervals without singular events.** On an interval of regular slices, each transverse crossing and its two incident source points continue smoothly by the inverse function theorem. The compact source and the absence of exceptional events keep their finite incidence pattern fixed. Straighten the two transverse branches jointly in small disjoint crossing disks, and extend the resulting motions on the intervening compact embedded edges by normal-coordinate cutoffs. This produces a planar ambient isotopy locally in time; on each closed subinterval finitely many such time intervals suffice, and their compositions carry any two diagrams in the same regular interval. Strict height inequalities at crossings cannot reverse while $F'_t$ remains an embedding, and strand orientations are transported continuously. Thus the decorated diagrams vary by planar isotopy. Together with steps 1.1–4.1 this proves all assertions; countable choice enters only through [F1] and countable null unions. [F1, F3, step 2.1, step 3.1, step 4.1, construct] ∎
