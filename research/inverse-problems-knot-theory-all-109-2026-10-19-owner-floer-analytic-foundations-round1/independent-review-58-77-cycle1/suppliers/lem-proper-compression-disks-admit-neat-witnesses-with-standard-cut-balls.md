---
id: lem-proper-compression-disks-admit-neat-witnesses-with-standard-cut-balls
kind: lemma
title: "Proper compression disks admit neat witnesses with standard cut balls"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - thm-collar-neighborhood-theorem
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Chapter1, Theorem1.1 and Lemmas1.2–1.3, printed1–3; the boundary-fixing tangential-disk normalization is proved locally here"
---

## Statement

Assume Countable Choice. Let $U\subset S^3$ be a compact smooth three-manifold with smooth boundary and let a finite disjoint family of smooth rank-two embedded disks be proper in the following broad sense: each disk has its boundary in $\partial U$ and its interior in $\operatorname{Int}U$. No transversality at its boundary is required. Suppose the topological cut components are three-balls. Then the disks can be replaced by arbitrarily $C^1$-close neat compression disks with exactly the SAME boundary curves, unchanged outside arbitrarily small boundary collars. The new topological cut components correspond to the old ones. After ordinary finite smooth corner rounding the new components are smoothly parametrized standard balls, with labelled disk faces and compatible product collars. Reattaching the disk neighborhoods recovers the actual $U$ and the new disks as their cocores.

The replacement can be supported away from any fixed compact set disjoint from the disk boundary collars, in particular the actual knot arcs and any supplied simultaneous bridge witnesses disjoint from the disks. These objects, their endpoints, ordered pairing and face avoidance are retained. Only the auxiliary compression witnesses change; the surface, attaching curves and actual knot stay fixed. The transport across the initial tangency is a boundary-fixing homeomorphism, smooth separately off its tangency edges; a smooth ambient boundary-preserving diffeomorphism changing tangency is not claimed. The smooth standard-ball assertion uses the full smooth three-dimensional Schoenflies theorem under Countable Choice, rather than a general topological smoothing theorem.

## Statement references

[[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]]

## Facts & Assumptions

**Given:** The broad proper disk system, its ball cut components, and the compact data to retain.

[F1] Smooth target boundary collars and finite compact cutoffs exist under Countable Choice; local smooth coordinate inverses exist with parameters. ([[thm-collar-neighborhood-theorem]], [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]], [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]])

[F2] A smooth embedded standard two-sphere in $S^3$ bounds standard smooth balls on both sides, with compatible boundary and collar parametrizations, under Countable Choice. ([[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]])

[F3] On an oriented surface a nullhomotopic regular embedded circle bounds a disk region; on a topological sphere both complementary closures are disk regions. For smooth input the finite disk-and-band construction parametrizes such disks smoothly with prescribed boundary collars. Two such disk parametrizations glue to a standard smooth sphere when their signed collar expressions agree. ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]], [[lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations]], smooth-input Proof7.1–13.1)

## Proof

**Given:** The data in the Statement.

1.1 In a target collar write its inward normal coordinate as $r\ge0$. In a source boundary collar of a disk write the inward coordinate as $v\ge0$ and the boundary parameter as $s$. Then $r(s,0)=0$, $r(s,v)>0$ for $v>0$, and $\partial_vr(s,0)\ge0$. Add $\epsilon v\chi(s,v)$ to the target normal coordinate, leaving its other coordinates fixed, with $\chi$ nonnegative and positive at the boundary points to be neatened. The resulting boundary-normal derivative is $\partial_vr+\epsilon\chi>0$ there. A sufficiently small $C^1$ change remains an embedding: finitely many local graph charts preserve their nonzero rank-two minors and local injectivity; source-point pairs outside these neighborhoods have a positive image-separation minimum by compactness. Finite positive separations likewise preserve disjointness of different disks and the prescribed compact data. The target support is chosen near the boundary curves, away from that compact data; the displacement is zero on the boundary itself and away from the chosen source collar. [F1, given, construct, algebra]

2.1 Supply an actual topological cut comparison for this change. At a nonneat boundary point the disk tangent plane is contained in the boundary tangent plane, so its projection to that plane has rank two. By [F1] it is locally a graph $r=R(s,v)$ over a one-sided boundary rectangle, with $R(s,0)=0$ and $R(s,v)>0$ for $v>0$. On such a graph put $E(s,v)=\epsilon v\chi(s,v)$ and choose a constant $L>2\epsilon\|\chi\|_\infty$. For fixed $s,v>0$ define an increasing map of $r\ge0$ by $$r'=\begin{cases}(R+E)r/R,&0\le r\le R,\\ R+E+(1-E/(Lv))(r-R),&R\le r\le R+Lv,\\ r,&r\ge R+Lv.\end{cases}$$ The formulas agree at their endpoints and have positive slopes. They fix zero, send $R$ to $R+E$, and move every point by at most $E$. Their inverses have the same displacement bound. Define the identity for $v\le0$. Since $E\le C\epsilon v$, the maps and inverses are continuous at $v=0$, even when $R$ is infinitely flat there. With the compact $s,v$ cutoff they are boundary-fixing supported homeomorphisms. They are smooth on each open cut component away from the edge after smoothing the outer positive-slope seam; no matching of derivatives across the two separate disk faces is needed. These homeomorphisms carry the actual disk and all complementary cut components. [F1, step 1.1, construct, algebra]

3.1 Apply the preceding local construction finitely to all remaining tangencies. The set of tangent boundary points is compact. Each has the projection graph chart of step2.1. Choose finitely many smaller chart cores covering it, and nonnegative cutoffs positive on those cores. Perform their neatenings successively. Previously positive boundary-normal derivatives remain positive, since every perturbation adds a nonnegative boundary-normal derivative; sufficiently small later perturbations retain the graph charts and embedding estimates already used. On the complement of these chart cores the original derivative had a positive minimum, which small changes preserve. The final disks are therefore neat everywhere. Their boundaries and all protected compact data are unchanged. The composition of step2.1's homeomorphisms identifies their topological cut components with the original balls, including all occupied arcs and labelled faces. Only the graph charts near genuine or sufficiently small-normal tangencies are needed; already neat regions may be left unchanged. [F1, step 1.1, step 2.1, construct]

4.1 Now cut along small product neighborhoods of the NEW neat disks. Boundary-adapted local coordinates exist directly: on each disk choose its transverse boundary collar; its tangent vectors together with one complementary disk-normal vector give invertible three-dimensional charts, by [F1]. Extend the latter smoothly along the finite compact disk family and use its short flow, shrinking by compactness to get injective disk-product neighborhoods. At their boundary choose that normal vector tangent to $\partial U$; neatness makes this compatible with the disk-normal direction. Thus their face edges are genuine transverse quadrant corners. Round those finitely many corners inside arbitrarily small product neighborhoods, missing the retained arcs and bridge witnesses. A monotone planar rounding leaves each component homeomorphic to its unrounded cut ball: in its two normal coordinates an increasing radial parametrization carries the quadrant to its rounded truncation, fixed beyond the corner collar. The resulting component $C$ is a smooth compact embedded three-manifold in $S^3$, homeomorphic to a closed ball. Its boundary is consequently a smooth surface topologically $S^2$. [F1, step 3.1, construct]

5.1 To check the exact input of [F2], parametrize $\partial C$ as a STANDARD smooth sphere, not merely a topological sphere. Choose a small smooth coordinate disk in it. Its boundary circle is nullhomotopic because the whole boundary is topologically $S^2$. By [F3] its other complementary closure is also a disk region, with a smooth parametrization. Choose their signed boundary collars together; [F3]'s prescribed circle-map extensions make the two disk parametrizations agree in those collars. Gluing the standard two hemispheres through these common collar expressions gives a smooth diffeomorphism $S^2\to\partial C$. Its inclusion into $S^3$ is the smooth embedding required by [F2]. That theorem gives a standard smooth ball on each side. The actual $C$ is one of them: its connected interior is open in $S^3\setminus\partial C$ and closed relative to that complement, since its only boundary is $\partial C$; hence it is a whole complementary component. Its closure is $C$. Therefore $C$ has an actual smooth standard-ball parametrization with the stated boundary collars. This argument does not infer a smooth structure from an arbitrary topological ball homeomorphism. [F2, F3, step 4.1, construct]

6.1 Carry the finite labelled disk faces and their collars through these actual ball parametrizations, rather than requiring the parametrizations to fix them pointwise. Undoing the finite corner rounding and restoring the removed product neighborhoods recovers the original smooth $U$ with the newly neat disks as the central cocores. The rounding was away from the actual arcs and bridge witnesses, so the latter retain the same endpoint curves, pairing and disjointness from the faces; if a component was occupied or empty, it remains so. The surface and all attaching curves were fixed already in step1.1. All choices beyond the stated suppliers were finite. Countable Choice enters through the collar, smooth surface and full smooth Schoenflies suppliers; no topological Moise theorem or smooth ambient tangency-changing extension was invoked. [F1, F2, F3, step 1.1, step 3.1, step 4.1, step 5.1, construct] ∎
