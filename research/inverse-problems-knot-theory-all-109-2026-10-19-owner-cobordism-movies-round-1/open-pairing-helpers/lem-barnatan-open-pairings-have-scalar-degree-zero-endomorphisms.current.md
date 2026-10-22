---
id: lem-barnatan-open-pairings-have-scalar-degree-zero-endomorphisms
kind: lemma
title: "Degree zero endomorphisms of an open pairing are integral scalars"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
justified_by: []
aliases: []
deps: [def-barnatan-open-tangle-cobordism-complexes, def-countable-choice, thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three, thm-isotopy-extension, lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations, lem-smooth-ball-windows-and-boundary-disk-absorption, lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]
dependency_level: 10
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dror Bar-Natan, Khovanov's homology for tangles and cobordisms, sections 3–6 and 8.3"
      url: "https://arxiv.org/pdf/math/0410495v2"
---

## Statement

Assume countable choice. In the open Bar-Natan category, let $P$ be a smoothing consisting of $k$ arcs and no circles, including $k=0$. The map $\mathbb Z\to\operatorname{End}^0(P)$ sending $n$ to $n\operatorname{id}_P$ is an isomorphism of rings. Consequently the one-term complex $P$, with any common grading shift, is simple.

## Statement references

[[def-barnatan-open-tangle-cobordism-complexes]]

[[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]]

[[thm-isotopy-extension]]

[Bar-Natan, Lemma 8.6, printed pp.1477–1478](https://arxiv.org/pdf/math/0410495v2)

## Facts & Assumptions

**Given:** The pairing $P$ with $|B|=2k$ and the category in the statement.

[F1] [[def-barnatan-open-tangle-cobordism-complexes]] supplies the embedded surface category, its local relations, its grading and its one-term complexes.

[F2] [[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]] supplies standard ball fillings on both sides of any smooth embedded sphere in $S^3$, with compatible collars.

[F3] [[thm-isotopy-extension]] extends a compact smooth isotopy to an ambient isotopy, with support in a prescribed neighbourhood of its track; its velocity-field construction can be made zero on a collar where the disk isotopy is stationary.

[F4] [[lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations]], supplies smooth disk and Euler-characteristic-zero torus normal forms, with collar-compatible parametrizations.

[F5] [[lem-smooth-ball-windows-and-boundary-disk-absorption]] standardizes a smooth ball with a chosen boundary disk as a round ball with a hemispherical disk window, retaining disk coordinates up to a fixed orthogonal symmetry; it also permits removal of a boundary-attached ball.

[F6] [[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]], clauses 2 and 4, gives the finite genus and Euler characteristic normal forms for compact subsurfaces and the two complementary disk regions of a regular circle on a sphere. They are smooth disks by [F4].

[A1] [[def-countable-choice]] is assumed through [F2]–[F6]. All surface decompositions and isotopies below involve finitely many components.

## Proof

1.1 After smoothing corners, the prescribed boundary of an endomorphism surface has exactly $k$ circles: each arc at the bottom joins its identical top arc by its two vertical boundary intervals. A compact connected orientable surface with boundary embeds as one half of its smooth double: glue two copies along the reflected boundary collar. Thus the compact-subsurface formulas in [F6] apply to it. For genus $g$ and $b>0$ boundary circles they give $\chi=2-2g-b\le b$, with equality exactly when $g=0,b=1$, a topological disk. By [F4] it is a smooth disk with the prescribed boundary collar. For a closed connected orientable surface [F6] gives $\chi=2-2g$: the genus zero surface is a sphere, the genus one surface a torus, and all others have negative Euler characteristic. Their smooth disk or torus identifications are supplied by [F4]; the sphere follows by gluing its two smooth disk regions with the collar-compatible boundary parametrizations there. Summing over the boundary-bearing components gives $\chi\le k$, with equality only for $k$ disks. [F1, F4, F6, A1, construct, algebra]

1.2 We record why a disk system with these fixed boundary circles is unique relative to its boundary collars. More generally, two finite systems of disjoint smooth proper disks in a standard three-ball, with the same boundary curves, are isotopic relative to the boundary. For a nonempty system choose a boundary curve $\gamma$ bounding a boundary disk $Q$ whose interior contains no other boundary curve; For [F6], a stereographic chart avoiding a point outside each curve gives its required nullhomotopy by linear contraction in the plane; finite nesting then supplies the innermost curve. If $E$ is the proper disk with boundary $\gamma$, the union $E\cup Q$, rounded using the fixed collar, is a sphere: push the interior of $Q$ a little outside the ball before rounding, keeping its seam collar fixed. By [F2] the side of this sphere adjacent to the interior of $Q$ is a standard ball. It lies on that side of $E$ inside the original ball, apart from the small outside collar of $Q$: the complementary part of the original boundary sphere is connected and lies on the other side, as is checked first near the seam and then by disjointness. Removing the added collar therefore gives a ball region bounded by $E$ and $Q$. No other disk of the system lies inside it, since each has boundary outside $Q$ and is disjoint from $E$. [F2, F5, F6, A1, construct]

2.1 A degree zero generator has $\chi=k$. If it contains a sphere it vanishes by S. Otherwise its closed components have nonpositive Euler characteristic, so the inequality in step 1.1 forces every boundary-bearing component to be a disk and every closed component to be a torus. Delete all tori by T, giving $2^t$ times a disk system. For $k=0$, the remaining system is the empty surface. In particular a negative Euler characteristic closed component cannot survive by being balanced against any boundary-bearing component; its only possible positive compensation would have been a sphere, already zero. [F1, F4, step 1.1, algebra]

2.2 To exclude torsion of that identity, define an integer evaluation of any closed orientable embedded surface by ignoring its embedding and assigning $0$ to a sphere, $2$ to a torus, and $0$ to any negative Euler characteristic component, then multiplying over components; the empty product is $1$. This evaluation respects S and T. It also respects four-tube relations. Indeed components not meeting the four patches give a common factor. If there is a negative Euler characteristic component all four evaluations vanish: a tube on one component lowers its Euler characteristic by two, while a tube merging two components replaces their Euler characteristics by their sum minus two. Even merging with a sphere therefore leaves negative Euler characteristic. If there are at least two spheres, every tube attachment leaves a sphere or merges two spheres to a sphere, so again every evaluation vanishes. With no spheres and only tori, attaching a tube creates a negative Euler characteristic component, and all four values vanish. The remaining case is exactly one sphere and $r$ tori. A tube meeting the sphere in zero, one or two patches has value respectively $0,2^r,2^{r+1}$: in the middle case it merges the sphere with one torus; in the last case it turns the sphere into a torus. Thus its value is $2^r$ times the number of its two patches on the sphere. Both sides of four-tube count each patch once, so their values agree. [F1, step 1.1, algebra]

3.1 Sweep $E$ through this ball region to a fixed disk parallel and very close to $Q$, keeping its boundary collar fixed. In ball coordinates this is the family of disk slices between the two hemispherical faces, stationary in a thin equatorial collar; rounding and a smooth reparametrization make the sweep smooth. Apply the ball-window assertion of [F5] to this actual ball region and its face $Q$, retaining the chosen seam collar; the complementary face is then the opposite hemispherical disk. This supplies the ball coordinates used in the sweep, rather than extending an arbitrary sphere diffeomorphism. The moving part is compactly contained away from the original boundary after deleting its stationary collar. Extend its velocity by the construction of [F3], cut it off before that boundary collar and before the other disks, and use its ambient flow. The velocity is zero where the sweep is stationary, so this extension fixes the entire original boundary and all other disks. Do this for either of the two systems, using the same final parallel disk. Cut off its small boundary ball. The remaining region is again a standard ball by the boundary-ball removal assertion of [F5]. Repeat for the remaining boundary curves. Finite induction identifies both systems with the same successive boundary-parallel disks, and hence with each other. Applying this to the vertical curtain disks proves that the system in step 2.1 is isotopic to $P\times[0,1]$. Thus every degree zero endomorphism is an integral multiple of the identity. [F2, F3, F5, A1, step 1.2, construct]

4.1 Outside the cylinder cap each of the $k$ prescribed boundary circles by a fixed disjoint once-punctured torus. Such caps exist: take the complementary boundary-parallel disks to the standard curtain system in a second ball and attach to each a tiny handle in its own disjoint neighbourhood. Gluing and applying step 2.2 gives a linear functional on the quotient endomorphism group, since any relation in the cylinder remains the same local relation after closure. On the curtain identity it has value $2^k$, including value $1$ for $k=0$. Hence $n\operatorname{id}_P=0$ implies $n2^k=0$ in $\mathbb Z$, and therefore $n=0$. Combined with step 3.1 this proves the asserted ring isomorphism. [F1, step 3.1, step 2.2, construct, algebra]

5.1 A one-term complex has no nonzero homotopies between endomorphisms because the target in cochain degree $-1$ is zero. Its degree zero endomorphism ring is therefore the ring just computed. Its invertible elements are precisely the integers $+1,-1$, since $nm=1$ in $\mathbb Z$ forces that pair of possibilities. A common grading shift leaves these degrees unchanged. This proves simplicity. [F1, step 4.1, algebra] ∎
