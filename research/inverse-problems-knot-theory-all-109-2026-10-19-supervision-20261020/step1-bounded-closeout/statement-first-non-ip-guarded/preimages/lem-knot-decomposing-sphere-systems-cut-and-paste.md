---
id: lem-knot-decomposing-sphere-systems-cut-and-paste
kind: lemma
title: Cut and paste of decomposing sphere systems preserves prime factors
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - lem-knot-decomposing-sphere-realizes-connected-sum
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
  - def-knot-connected-sum-and-prime-knot
  - thm-oriented-knot-connected-sum-is-a-commutative-monoid
  - lem-relative-transversality-for-embedded-surfaces
  - thm-isotopy-extension
  - thm-knot-genus-additive-under-connected-sum
  - lem-knot-genus-zero-iff-unknot
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Burde and Zieschang, Knots, 2nd revised and extended edition
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/burdzies.pdf
      locator: Chapter 7, §§7.14–7.18, printed pp.96–98; especially Lemma 7.17 and the
        full text accompanying Figures 7.7–7.8
    - title: Stefan Friedl, Introduction to Knots and Links, 2024 lecture notes
      url: https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf
      locator: Chapter 11 §§11.4–11.5, printed pp.162–168; uniqueness explicitly
        deferred to Schubert
---

## Statement

Assume the Axiom of Countable Choice. Let $K$ be a smooth oriented knot and let $\mathcal S$ and $\mathcal S'$ be finite systems of pairwise disjoint smooth spheres in $S^3$, each sphere meeting $K$ transversely in two points, such that every knot obtained by capping the arcs cut off by the system is prime. Put the systems in transverse general position. The standard innermost-disk replacements and the replacement of a maximal factor ball across a disjoint sphere preserve the unordered list of capped prime knot isotopy classes.

## Statement references

[[def-knot-connected-sum-and-prime-knot|Connected sums and prime knots]]

## Facts & Assumptions

**Given:** AC$_\omega$ and two finite prime decomposing sphere systems for an oriented knot.

[F1] A sphere transverse to a knot in two points gives exactly its capped oriented connected-sum factors, independently of boundary-cap choices. ([[lem-knot-decomposing-sphere-realizes-connected-sum]])

[F2] Every smooth sphere in $S^3$ has two standard ball sides, simultaneously parametrized by smooth Schoenflies. ([[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]])

[F3] A prime knot is nontrivial and cannot split into two nontrivial summands; the unknot is the identity for oriented connected sum. ([[def-knot-connected-sum-and-prime-knot]], [[thm-oriented-knot-connected-sum-is-a-commutative-monoid]])

[F4] Relative surface transversality and compact isotopy extension hold under AC$_\omega$. ([[lem-relative-transversality-for-embedded-surfaces]], [[thm-isotopy-extension]], [[def-countable-choice]])

[F5] Under AC$_\omega$, genus is additive, nonnegative, and zero precisely for the unknot. ([[thm-knot-genus-additive-under-connected-sum]], [[lem-knot-genus-zero-iff-unknot]])

## Proof

**Given:** The two systems $\mathcal S,\mathcal T$, in transverse general position away from the knot. Call the two knot intersection points on a sphere its marks. A region cut out by one system is capped by standard balls and trivial cap arcs on all its spherical boundaries; its resulting knot is its factor.

1.1 First record the local replacement precisely. Let $D$ be a disk in one region of the complement of $\mathcal S$, with interior disjoint from that system and boundary a circle $c$ on a single sphere $A\in\mathcal S$. The circle misses the marks. Surgery on $A$ replaces it by the two spheres obtained by attaching parallel copies of $D$ to the two disks of $A\setminus c$, rounded and slightly pushed apart. The three spheres bound a standard sphere with three holes: take a product collar of $A$ and attach the thickened disk. Consequently the region on the other side of $A$ is unchanged after capping, except for extra punctures; all actual changes of capped knot occur in the one region containing the interior of $D$. Its other cap balls and arcs are untouched. This gives a precise local model in which the following cases are checked. [given, F1, F2, construct]

2.1 If $D$ has no mark, parity forces $c$ to leave both marks of $A$ in one disk of $A\setminus c$. Indeed otherwise one of the surgery spheres would meet the closed knot once, whereas a separating sphere has an even number of transverse intersections with a closed curve. Thus one surgery sphere is unmarked and the other has two marks. After capping the affected region, the unmarked sphere misses its closed knot. By [F2] its ball side not containing that connected knot is an empty ball. Filling or removing this empty ball and the adjoining product collars changes no capped knot. Discard the unmarked sphere and retain the twice-marked sphere. Hence this replacement preserves every nontrivial factor. The same argument covers empty ball and nested ball positions: it uses the side avoiding the capped knot, rather than a prespecified inside side. [F1, F2, step 1.1, construct]

2.2 If $D$ has one mark, parity instead forces each disk of $A\setminus c$ to have one mark. Both surgery spheres then have two marks. Let $C$ be the cap ball attached to $A$ on the affected region. Construct a proper disk $E\subset C$ with $\partial E=c$ by pushing one of the disks of $A\setminus c$ into the cap collar, fixing its boundary and rounding there. This disk is boundary parallel. Choose a simple boundary arc joining the two marks and crossing $c$ exactly once; a thin rectangular strip about that arc gives a boundary-parallel cap arc $\beta$ in $C$ meeting $E$ transversely exactly once. Explicitly the strip passes from the side of $E$ next to the first marked boundary disk to the side next to the other one, with a single normal crossing; away from that crossing it stays in disjoint boundary collars. Thus $\beta$ is trivial, and changing the original cap to $\beta$ is allowed by [F1]. Now $D\cup E$, rounded at $c$, meets the capped knot exactly twice: once on $D$ and once on $\beta$. It is the required marked decomposing sphere in the capped affected region. By [F1] the old factor $P$ is the sum $P'\#P''$ of the two new capped factors, with orientations inherited from the original knot. Since $P$ is prime, exactly one is the unknot and the other is $P$, by [F3]. Retain both new spheres temporarily and then delete the sphere separating that trivial region from its other neighbour. Deletion merges the neighbour with an unknot, so leaves its oriented knot class unchanged by [F3]. The net result is again a prime system with exactly the same unordered prime factors. The disk $E$ and the cap change lie entirely in $C$, disjoint from every other cap ball of the affected region. On the opposite region the three-holed-sphere collar of step 1.1 replaces only the cap at $A$: the short pieces of that cap become the caps on the two new spherical boundaries with the same endpoint pairing and orientation. Its other cap balls and their arcs stay pointwise fixed outside this collar. Therefore, even when that neighbour has several boundary spheres, deleting the sphere next to the trivial new region changes its capped knot precisely by oriented connected sum with the unknot, without changing any other attachment or factor. [F1, F3, step 1.1, construct]

3.1 To compare intersecting systems, choose a sphere of $\mathcal T$ that meets $\mathcal S$ and an innermost intersection disk on it containing at most one mark. Such a disk always exists: if there is one intersection circle, its two complementary disks have at most two marks in total, so choose a side with at most one. If there are several circles, the circle nesting tree has at least two leaf disks with disjoint interiors; since there are only two marks, one leaf contains at most one. Its interior misses $\mathcal S$. Use this disk in step 2.1 or step 2.2. The surgery copies can be pushed off $\mathcal T$ in its product neighbourhood and rounded near $c$; they introduce no new intersection circles, while $c$ disappears. Deleting a redundant sphere only decreases the count further. Thus the finite total number of intersection circles strictly decreases. Iterating makes the first system disjoint from $\mathcal T$, preserving its prime factor list throughout. [F4, step 2.1, step 2.2, construct]

4.1 For completeness, the disjoint-system comparison is the same local calculation without surgery. Add the spheres of $\mathcal T$ one at a time to the disjoint first system, initially allowing trivial capped regions. In the capped region containing such a new sphere, its two marks give a connected-sum decomposition by [F1]. If the region's factor is prime, one new factor is that prime and the other the unknot; if it is the unknot, both new factors have genus zero by [F5] and hence are unknotted. Thus adding disjoint spheres preserves precisely the multiset of nontrivial prime factors. The union system therefore gives both original lists, which agree. A maximal factor ball replacement across a disjoint sphere consists of adding that sphere and deleting the old one; the same comparison proves its asserted preservation, including nested positions. [F1, F2, F3, F5, step 3.1, construct] ∎

## Remarks

This proof uses spheres with two marked points. It does not assert a link-level prime decomposition with attachment data. It uses neither knot-exterior boundary incompressibility nor a theorem about decomposing a knot exterior.

## Proof references

[[lem-knot-decomposing-sphere-realizes-connected-sum]]

[[thm-oriented-knot-connected-sum-is-a-commutative-monoid]]
