---
id: thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
kind: theorem
title: "Smooth Schoenflies for an embedded two-sphere in the three-sphere"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps: [def-countable-choice, lem-smooth-ball-windows-and-boundary-disk-absorption, lem-capped-elementary-height-spheres-bound-smooth-balls, lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups, lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations, thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse, lem-finitely-many-critical-values-can-be-separated-locally, thm-isotopy-extension]
justified_by: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Chapter 1, Theorem 1.1 and Lemmas 1.2–1.3, printed pp.1–3"
---

## Statement

Assume countable choice. Let $S\subset S^3$ be the image of a smooth embedding of the standard $S^2$. There is a smooth ambient isotopy $H_t:S^3\to S^3$, with $H_0=\operatorname{id}$, such that $H_1(S)$ is the standard equatorial sphere $E$. In particular $S^3\setminus S$ has exactly two components. Their closures $B_+$ and $B_-$ are smoothly embedded standard closed $3$-balls with common boundary $S$. If $D_+$ and $D_-$ denote the standard closed hemispheres bounded by $E$, the labels can be chosen so that the restrictions $H_1:B_\pm\to D_\pm$ are diffeomorphisms with the same boundary restriction $H_1|_S:S\to E$. Thus the ball identifications are compatible on their boundary and on a common two-sided collar of that boundary.

## Statement references

[[def-countable-choice]]

[[lem-smooth-ball-windows-and-boundary-disk-absorption]]

[[lem-capped-elementary-height-spheres-bound-smooth-balls]]

## Facts & Assumptions

**Given:** Countable choice and the smooth embedded sphere $S\subset S^3$.

[F1] A generic linear height on a compact Euclidean embedded smooth manifold is Morse ([[thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse]]). Its finitely many critical values can be separated by arbitrarily small local bump perturbations without changing its critical points or Hessians ([[lem-finitely-many-critical-values-can-be-separated-locally]]).

[F2] Under countable choice a regular nullhomotopic circle on an oriented surface bounds a compact disk; on a sphere both complementary closures are disk regions ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]], clause 4). In the plane use the explicit linear contraction. Smooth disk parametrizations, including collar-compatible boundary maps, are obtained by the smooth-input disk-and-band construction in steps 7.1–13.1 of [[lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations]]. In particular the two disks obtained by cutting a smooth sphere along a regular circle are smooth disks.

[F3] Each sphere obtained by capping a height piece with at most one critical point bounds a smooth standard ball ([[lem-capped-elementary-height-spheres-bound-smooth-balls]]).

[F4] A disk attachment or its reverse is absorbed without changing the smooth manifold type, and an embedded standard ball is ambient isotopic to a coordinate round ball ([[lem-smooth-ball-windows-and-boundary-disk-absorption]]).

[F5] Smooth isotopies of compact embedded submanifolds extend to ambient isotopies under countable choice ([[thm-isotopy-extension]]).

[A1] Countable choice is [[def-countable-choice]]. Its use is inherited from the local disk, smooth normal-form and isotopy-extension suppliers [F2]–[F5]; it is an assumption of this local proof, not a claim that the classical theorem requires that axiom intrinsically. The surgeries and their reversal form finite constructions.

## Proof

**Given:** The sphere and assumptions above.

1.1 Choose a point of $S^3$ outside $S$ and use its stereographic chart to regard $S$ as a compact smoothly embedded sphere in $\mathbb R^3$. By [F1] choose a direction whose restricted height is Morse, and rotate it to the $z$ direction. Separate its finitely many critical values by the finite small perturbation in [F1]. Realize that perturbation geometrically by retaining the $x,y$ coordinates and changing only $z$. A sufficiently small $C^1$ perturbation and its straight interpolation are embeddings: finitely many graph charts retain a nonzero rank-two minor and local injectivity, while pairs of source points outside those chart neighborhoods have a positive image-separation minimum by compactness. Choose the perturbation below both bounds. By [F5] this is an ambient isotopy of $S^3$, supported away from the stereographic point. It therefore suffices to prove that the resulting sphere, with excellent Morse height, bounds a smooth standard ball in $\mathbb R^3$. [F1, F5, A1, construct]

1.2 Choose finitely many regular heights between consecutive critical values. A level meets the sphere in finitely many smooth disjoint circles: its preimage is a compact regular one-manifold, and finitely many connected local interval charts cover it. Each circle bounds a planar smooth disk by [F2]. Choose an innermost circle, so that this disk's interior misses every other level circle and hence misses the sphere. In a sufficiently thin regular band around the level remove the sphere's annular collar of that circle and replace it by the two horizontal disks at the band's ends. The level curves vary smoothly, so their disks at nearby heights remain disjoint from the rest of the surface after a sufficiently small band shrink. Round the two seams in that band. This is surgery on the sphere along a disk whose interior misses the surface. [F2, construct]

2.1 Every such surgery replaces one smooth sphere by two smooth spheres. Indeed its circle splits that sphere into two disk regions by [F2], and each region, with the added cap, is a smooth sphere: the boundary gluing is a smooth circle map and extends over a disk by the angular interpolation used in [F2]'s normal-form construction. Now repeat step 1.2 on each remaining circle of that regular level, always innermost among the remaining circles and with a new sufficiently small collar width. Earlier horizontal caps are kept at distinct nearby levels, and the new width is chosen smaller than their positive distances from the chosen level. There are finitely many circles. Then repeat at the finitely many other chosen regular levels, with disjoint level neighborhoods. The outcome is a finite disjoint collection of smooth spheres, each made from a connected piece of the original sphere between successive cutting levels, together with horizontal caps. Each such piece contains at most one height critical point. [F2, step 1.2, construct]

3.1 By [F3] each final sphere bounds a smooth embedded standard ball. We shall reverse the surgeries and prove inductively that each sphere then present bounds a smooth embedded standard ball. No assertion that all their chosen balls are disjoint is needed: balls bounded by disjoint spheres may be nested. [F3, step 2.1, construct]

4.1 Consider the reverse of the last unreversed surgery, whose two output spheres bound balls $A$ and $B$ by the inductive assertion. In its product disk neighborhood the two added cap disks can be moved toward each other until both occupy the original surgery disk $D$; equivalently shrink the normal coordinate of the deleted annular collar to zero. Their remaining boundaries are disjoint. The move is an isotopy up to its endpoint on each individual ball, because the cap has a product collar and its boundary annulus is shortened monotonically; at the endpoint it merely meets the other ball's boundary in $D$. An arbitrarily small corner rounding reverses this motion and recovers the pre-surgery sphere. The balls now have either disjoint interiors and intersection exactly $D$, or one is contained in the other, with their boundaries meeting exactly in $D$. To check that these alternatives exhaust the possibilities, first take their disjoint cap positions. The complement of a known embedded ball in $\mathbb R^3$ is connected: [F4] carries that ball to a round one by a compactly supported ambient isotopy. Hence each connected sphere disjoint from the other's boundary lies wholly inside or wholly outside its ball. If neither ball contains the other's boundary, their interiors are disjoint; otherwise one ball is inside the other. The product cap motion preserves the corresponding alternative and makes their boundary contact exactly $D$. [F4, step 3.1, construct]

5.1 In the disjoint-interior case the pre-surgery sphere is the rounded boundary of $A\cup_D B$. This union is a ball by disk absorption [F4]. In the nested case, relabel so that $B\subset A$; the pre-surgery sphere is the rounded boundary of $A\setminus\operatorname{Int}B$, where $B$ meets $\partial A$ in the disk $D$. Disk removal [F4] says that this too is a ball. These boundary identifications can be checked in $D\times[-\varepsilon,\varepsilon]$: the pre-surgery annular wall is the side $\partial D\times[-\varepsilon,\varepsilon]$, whereas surgery inserts the faces $D\times\{-\varepsilon,\varepsilon\}$; all surfaces agree outside that neighborhood. Thus the induction gives a smooth standard ball bounded by the original excellent-height sphere. Undoing the initial small ambient isotopy gives a smooth embedded standard ball bounded by the given $S$. [F4, step 1.1, step 4.1, construct]

6.1 Apply [F4] to that parametrized embedded ball, using the stereographic chart, to carry it by an ambient isotopy to a small Euclidean round ball. Translation and positive dilation in $\mathbb R^3$ extend smoothly across its compactifying point: they are the usual stereographic conformal transformations of $S^3$, and their parameter paths give smooth ambient isotopies. They carry the round boundary sphere to the unit sphere, the standard equator in this stereographic convention. Concatenate with the preceding isotopies, using smooth stationary reparametrizations. This gives the claimed $H_t$, starting at the identity. The two components and both ball diffeomorphisms are now the inverse images of the two standard open hemispheres and their closures under $H_1$. The two restrictions agree on $S$ because they restrict one ambient diffeomorphism, and pulling back the standard equator's two-sided collar gives a common collar with the same property. [F4, F5, A1, step 5.1, construct] ∎

## Remarks

The boundary map is the one furnished simultaneously by the ambient isotopy. The proof does not assert extension of an arbitrary preassigned diffeomorphism of $S^2$. For decomposing-sphere applications one may transport the two marked intersection points and the chosen boundary cap arc by this common map and choose all ball coordinates and collars together.
