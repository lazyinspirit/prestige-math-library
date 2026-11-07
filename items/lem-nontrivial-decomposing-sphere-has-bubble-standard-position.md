---
id: lem-nontrivial-decomposing-sphere-has-bubble-standard-position
kind: lemma
title: "A nontrivial decomposing sphere has bubble standard position"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-flype-crossing-ball-and-alternating-tangle-data
  - lem-finite-saddle-position-in-protected-crossing-balls
  - lem-explicit-quadrilateral-saddle-foliation-of-a-crossing-ball
  - lem-simultaneous-surface-transversality-fixed-on-a-protected-closed-set
  - thm-well-ordering-principle
  - lem-nondisk-proper-surface-in-a-ball-has-a-compressing-disk
  - lem-disk-replacement-on-a-nonsplit-two-point-sphere
  - lem-empty-rectangle-for-a-repeated-hemisphere-circle
  - lem-empty-overpass-free-rectangle-cancels-two-saddles
  - lem-uppermost-meridional-surgery-strictly-decreases-saddle-count
  - lem-the-extended-time-dependent-field-has-a-global-time-one-flow
  - thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from the declared geometric suppliers and smooth flows. Joint complexity is minimized by two successive natural-number minima, not by any infinite descent in integers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "William Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), 37–44, Lemma 1 case (2), printed pp.39–40, Figures 4–5"
      url: "https://doi.org/10.1016/0040-9383(84)90023-5"
---

## Statement

Assume countable choice. Supply a projection sphere $P\subset S^3$, finitely many pairwise disjoint closed crossing balls $C_j$, and upper and lower closed balls $B_+,B_-$. The balls cover $S^3$, have pairwise disjoint interiors, and the boundary of $B_\pm$ consists of the portion of $P$ outside the crossing-ball interiors together with the corresponding hemispheres $H_j^\pm$ of those balls. Use supplied compatible corner roundings. Each crossing ball has unit coordinates with $P$ its equatorial disk and the two link arcs the upper and lower semicircles of the explicit crossing-ball model. Let a nonsplit smooth link $L$ lie in these two crossing arcs inside each ball and in $P$ outside them; in particular it misses the interiors of $B_+,B_-$. Write $S_\pm=\partial B_\pm$.

If $L$ admits a transverse two-point sphere with both side tangles nontrivial, then it admits such a sphere $T$ with its punctures outside all crossing balls, meeting each crossing ball in finitely many ordered quadrilateral saddle disks and transverse to $S_+,S_-$. Every component of $T\cap B_+$ and $T\cap B_-$ is a disk, every bubble word is nonempty, and no component of $T\cap S_\pm$ meets any one hemisphere $H_j^\pm$ in more than one arc. Thus $T$ is in bubble standard position. It need not be isotopic to the original decomposing sphere: the construction allows a nontrivial meridional child.

## Statement references

[[def-countable-choice]]

[[def-flype-crossing-ball-and-alternating-tangle-data]]

## Facts & Assumptions

**Given:** Countable choice, the supplied crossing-ball decomposition, nonsplit link, and a two-point sphere with both side tangles nontrivial.

[F1] Bubble words record link punctures and crossings of saddle patches; bubble standard position means nonempty words and no repeated crossing ball on any one shifted-sphere intersection circle. ([[def-flype-crossing-ball-and-alternating-tangle-data]])

[F2] A closed surface whose link punctures avoid the crossing balls can be put into finite ordered saddle position by an ambient isotopy fixing the link pointwise. The explicit local foliation has two upper arcs per disk, one around each of the two underpass endpoints; higher levels are closer to the upper overpass in the linear order of those arcs. Exchanging $x,y$ and replacing $z$ by $-z$ interchanges the two hemisphere models and replaces $q$ by $-q$. ([[lem-finite-saddle-position-in-protected-crossing-balls]], [[lem-explicit-quadrilateral-saddle-foliation-of-a-crossing-ball]])

[F3] A compact surface already transverse to finitely many target surfaces near its intersection with a protected closed set can be made transverse everywhere by an arbitrarily small ambient isotopy fixing a neighborhood of that closed set pointwise. ([[lem-simultaneous-surface-transversality-fixed-on-a-protected-closed-set]])

[F4] Every nonempty subset of the natural numbers has a least member. ([[thm-well-ordering-principle]])

[F5] A nondisk component of a finite neat proper surface in a ball, all of whose components have boundary, gives a compression disk for the whole surface. In a nonsplit link the boundary of such a link-free disk on a two-point sphere bounds a puncture-free sphere disk, and its replacement is an ambient isotopy fixing the link and preserving the retained sphere outside a small boundary collar. ([[lem-nondisk-proper-surface-in-a-ball-has-a-compressing-disk]], [[lem-disk-replacement-on-a-nonsplit-two-point-sphere]])

[F6] In a disk whose intersection arcs all span two fixed disjoint boundary intervals, a repeated intersection circle supplies a rectangle between two of its arcs with interior disjoint from the entire circle family; the repeated circle may be replaced by another one in obtaining this empty rectangle. ([[lem-empty-rectangle-for-a-repeated-hemisphere-circle]])

[F7] An empty overpass-free rectangle between adjacent saddle disks, with its two arc sides on one exterior disk piece, allows an ambient isotopy fixing the link that deletes exactly those two saddles and leaves the other saddle disks unchanged. ([[lem-empty-overpass-free-rectangle-cancels-two-saddles]])

[F8] An empty central rectangle between the two upper arcs of an uppermost saddle, on one exterior disk piece, gives a nontrivial meridional child which can be put back into ordered saddle position preserving the link setwise, retaining only a subset of the old saddles with that saddle absent. Its total saddle count is strictly smaller. ([[lem-uppermost-meridional-surgery-strictly-decreases-saddle-count]])

[F9] Smooth cutoffs exist under countable choice, and compactly supported smooth fields have global unique flows on compact time intervals. A field tangent to a link preserves it setwise in both time directions. ([[thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]], [[lem-the-extended-time-dependent-field-has-a-global-time-one-flow]])

## Proof

1.1 First move the two punctures of the supplied sphere onto link edges outside all crossing balls. Each link component has an open subarc there: inside the disjoint crossing balls its pieces are only arcs with distinct endpoints, so a whole closed component cannot be contained in their union. On each component containing punctures, choose distinct target points in such a subarc with the same cyclic order. There is a smooth increasing circle diffeomorphism taking the old points to the new ones. To construct it, choose a positive smooth periodic derivative with prescribed integrals on the finitely many intervening intervals: start with a sufficiently small positive constant and add positive interior bumps to obtain each required positive target interval length. Integrate, fixing one initial value. Interpolation of its increasing lift with the identity is a smooth circle isotopy. Extend its velocity off the link in finitely many link-axis charts, patch with smooth cutoffs, and set it to zero on other components. By [F9] its ambient flow preserves $L$ setwise and realizes the circle isotopy. Transporting the sphere preserves nontriviality of both side tangles and places its punctures outside the crossing balls. [given, F9, construct]

2.1 Apply [F2] to obtain a sphere with finite saddle position, and fix the resulting explicit foliation function $q_j$ in each crossing ball for the rest of the argument. Make the sphere transverse to both $S_+,S_-$ using [F3] with protected set $L\cup\bigcup_jC_j$. The required transversality already holds near that protected intersection: proper foliation disks meet both hemispheres transversely, their four equatorial corners are simple, and the compatible roundings retain these transverse charts. Explicitly at a corner $x,y\ne0$ the level normal is $(2x,-2y,1)$; it cannot be parallel to any combination of the equatorial normal $(0,0,1)$ and the hemisphere normal $(x,y,0)$, since the two nonzero horizontal coordinates would require opposite proportionality factors. Thus the usual collar rounding also preserves the transverse condition. At a link puncture outside the crossing balls, transversality to $L\subset P$ forces transversality to $P$: a surface tangent to $P$ would contain the link tangent and fail to be transverse to the link. Thus [F3] applies and preserves all fixed foliation patches. The class $\mathcal A$ of nontrivial two-point spheres with punctures outside the crossing balls, transverse to both shifted spheres and meeting each crossing ball in a finite subset of levels of its fixed $q_j$, is nonempty. [step 1.1, F2, F3, construct]

3.1 For $T\in\mathcal A$ put $s(T)=\sum_j\#\pi_0(T\cap C_j)$ and $c(T)=\#\pi_0(T\cap S_+)+\#\pi_0(T\cap S_-)$. These are finite natural numbers, the second by compact transverse one-manifold intersections. Use [F4] first to minimize $s$ over $\mathcal A$, and then to minimize $c$ among spheres attaining that least $s$. Choose a sphere attaining both minima. This is a global minimum over all such nontrivial decomposing spheres; it is not restricted to the isotopy class of the starting sphere. Hence a nontrivial meridional child in $\mathcal A$ is an admissible competitor. [step 2.1, F4, construct]

4.1 Every component of $T\cap B_\pm$ has boundary. A closed component would be open and closed in the connected sphere and equal to $T$, contrary to its punctures on the boundary link and transversality there. If a component on one side were not a disk, [F5] would supply a compression disk $D$ in that ball interior, missing the whole surface, the link and every crossing ball. Its boundary bounds a puncture-free disk $E$ on $T$. This disk contains at least one shifted-sphere cut circle: otherwise it would lie wholly in the original ball piece and contradict the essentiality of the compression boundary. Since $\partial E$ misses all crossing balls and both shifted spheres, $E$ contains whole saddle patches and whole cut circles whenever it meets their interiors. Replacing $E$ by $D$ therefore deletes some whole saddles and at least one cut circle, and adds none; the new patch and boundary collar lie in the open-side ball. The retained surface remains transverse to both shifted spheres and retains only original fixed foliation levels. Nontriviality is preserved by the link-fixed isotopy in [F5], so this is a sphere in $\mathcal A$ with smaller $(s,c)$, a contradiction. Both side pieces are consequently disks. [step 3.1, F5, construct, contradiction]

5.1 Suppose a shifted-sphere intersection circle has empty bubble word. It lies in the common projection face, avoids the link and every hemisphere, and is therefore the same intersection circle on $S_+$ and $S_-$. Its incident upper and lower pieces are disks by step 4.1, each with this as its sole boundary. Their union is a closed component of $T$: the surface crosses the common face transversely, so these are its two local sides along the circle, with no further sheet attached. The union is both open and closed in connected $T$, hence is all of $T$. But it misses $L$, since the two disk interiors lie in the link-free ball interiors and their common boundary has no puncture. This contradicts the two link intersections. Thus all bubble words are nonempty. [given, step 4.1, F1, construct, contradiction]

5.2 Suppose an upper shifted-sphere circle meets one hemisphere more than once. The finitely many upper saddle arcs span two disjoint equatorial intervals, chosen on the $x>0$ and $x<0$ sides to contain their finitely many endpoints. Apply [F6] to obtain an empty rectangle $R$ between two arcs of one intersection circle. That circle bounds one of the disk pieces $E$ from step 4.1. The upper arcs have the order: the positive-$y$ arcs in increasing saddle height, followed by the negative-$y$ arcs in decreasing height. This follows from the four corner equations $x^2=(1+h)/2$, $y^2=(1-h)/2$ and the disjointness of the foliation levels in [F2]. Thus if $R$ misses the overpass its two arcs are of the same type and belong to distinct adjacent saddle levels. If $R$ meets the overpass, its interior contains the whole overpass except its endpoints, since no saddle arc meets that connected overpass. Emptiness then forces its two arc sides to be the positive-$y$ and negative-$y$ arcs of the same uppermost saddle. These are the only two possibilities. [step 2.1, step 4.1, F2, F6, construct]

6.1 In the overpass-free case the annulus between the two adjacent saddle boundaries is the boundary level band between their parameters: the boundary restriction of $q_j$ is a submersion there with one circle per level. It misses $T$ in its interior and misses $L$, because all link arcs have $|q_j|\ge1$ outside the middle foliation band. The rectangle spans this annulus and its two sides lie on the one disk piece $E$. Apply [F7] to delete the two saddle patches, preserving nontriviality of both tangles. If necessary restore simultaneous transversality outside the protected balls using [F3], again fixing the link and every crossing ball. The remaining saddle levels are unchanged, so the new sphere lies in $\mathcal A$ and has $s$ smaller by two. This contradicts step 3.1. [step 3.1, step 5.2, F2, F3, F7, construct, contradiction]

6.2 In the central-rectangle case apply [F8]. It produces a sphere with both side tangles nontrivial, punctures outside the crossing balls, and only a subset of the original saddle levels, with the uppermost saddle absent. Restore exterior simultaneous transversality with [F3], if needed, preserving all remaining patches. This gives a member of $\mathcal A$ with strictly smaller $s$, again contradicting step 3.1. Consequently no upper intersection circle repeats a bubble. For the lower sphere use the coordinate change $(x,y,z)\mapsto(y,x,-z)$ in each ball. It exchanges overpass and underpass and sends $q_j$ to $-q_j$, so the identical two cases and their exact decreases apply with the signs reversed. No lower intersection circle repeats a bubble either. [step 3.1, step 5.2, F2, F3, F8, construct, contradiction]

7.1 The minimizing sphere retains both nontrivial side tangles and two punctures outside the crossing balls by its membership in $\mathcal A$. Step 4.1 gives disk pieces, step 5.1 gives nonempty words, and steps 6.1–6.2 exclude repeated bubbles on either shifted sphere. By [F1] these are exactly the stated bubble-standard conditions. The global minimization explicitly allowed replacement by a nontrivial meridional child, so no unproved isotopy claim about the original decomposing sphere has been used. [step 3.1, step 4.1, step 5.1, step 6.1, step 6.2, F1] ∎
