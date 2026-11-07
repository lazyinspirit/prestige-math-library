---
id: lem-uppermost-meridional-surgery-strictly-decreases-saddle-count
kind: lemma
title: "Uppermost meridional surgery strictly decreases the saddle count"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-uppermost-saddle-rectangle-supplies-a-meridional-disk
  - lem-explicit-quadrilateral-saddle-foliation-of-a-crossing-ball
  - lem-punctured-disk-window-slides-across-a-trivial-arc-ball
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
  - thm-neat-submanifolds-have-boundary-adapted-slice-charts
  - thm-collar-neighborhood-theorem
  - lem-smooth-ball-windows-and-boundary-disk-absorption
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from the meridional disk, sphere, collar and puncture-slide suppliers. All level selections, collar modifications and saddle counts are finite."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "William Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), 37–44, Lemma 1 case (2), printed p.40, Figure 5(a)"
      url: "https://doi.org/10.1016/0040-9383(84)90023-5"
---

## Statement

Assume countable choice. Let a sphere $S$ meet a smooth link $L$ transversely twice, with both side tangles nontrivial. Supply finitely many pairwise disjoint closed coordinate crossing balls $C_j$, disjoint from the two punctures, such that $S\cap C_j$ is a finite collection of ordered disks in one explicit quadrilateral saddle foliation for each ball. Suppose a ball $B$ has interior disjoint from $L$ and every crossing ball, and $S\cap B$ is a finite neat proper disk family.

In one crossing ball $C_k$, assume all the uppermost-saddle rectangle hypotheses of the meridional-disk lemma: both upper arcs of its largest-level saddle $\sigma$ belong to one disk component of $S\cap B$, their central upper-hemisphere rectangle contains the overpass and has interior disjoint from $S$, and the two crossing arcs have the specified semicircle coordinates. All shared faces have compatible corner roundings.

Then meridional surgery followed by an ambient isotopy preserving $L$ setwise gives a two-point sphere $S'$ with both side tangles nontrivial, whose punctures lie outside all the crossing balls, and whose intersection with each crossing ball consists of a subset of the original whole saddle disks, with $\sigma$ excluded. In particular, if $s(S)=\sum_j\#\pi_0(S\cap C_j)$, then $s(S')\le s(S)-1$. The post-surgery isotopy need not fix the punctures pointwise.

## Statement references

[[def-countable-choice]]

[[lem-uppermost-saddle-rectangle-supplies-a-meridional-disk]]

## Facts & Assumptions

**Given:** Countable choice, the nontrivial two-point decomposing sphere, protected crossing balls, disk pieces and the specified uppermost-saddle rectangle.

[F1] The specified rectangle gives a meridional disk with boundary an arc of $\sigma$ and an arc of the exterior disk piece. Its planar part is the $x=0$ cap above the uppermost saddle, with a short exterior collar, and its remaining bridge lies in $\operatorname{int}B$. Its boundary separates the punctures, and at least one meridional child has both side tangles nontrivial. ([[lem-uppermost-saddle-rectangle-supplies-a-meridional-disk]])

[F2] The ordered saddle disks are graphs $z+x^2-y^2-hd(z)=0$, with positive $z$ derivative and four equatorial corners; in particular the plane $x=0$ cuts each in one transverse proper arc whose boundary endpoints are on the upper hemisphere. Higher levels lie strictly above lower ones. ([[lem-explicit-quadrilateral-saddle-foliation-of-a-crossing-ball]])

[F3] A surface disk window in a ball containing one supplied boundary-parallel proper link arc can be moved to a disk arbitrarily near the opposite boundary face, avoiding every closed set missing that face. The ambient isotopy preserves the link setwise, fixes the window boundary collar and all other surface pieces, and moves its puncture along the arc. ([[lem-punctured-disk-window-slides-across-a-trivial-arc-ball]])

[F4] A smooth sphere in $S^3$ bounds balls on both sides. ([[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]])

[F5] Neat submanifolds have simultaneous boundary half-slice charts, and smooth manifolds with boundary have product collars under countable choice. ([[thm-neat-submanifolds-have-boundary-adapted-slice-charts]], [[thm-collar-neighborhood-theorem]])

[F6] A collar indentation or a disk-window ball attachment and its reverse preserves the ball diffeomorphism type, with compatible local corner smoothing. ([[lem-smooth-ball-windows-and-boundary-disk-absorption]])

## Proof

1.1 Take the meridional disk of [F1] and separate its two cap copies when forming the two children. Choose the copies inside $C=C_k$ to be the planar caps $x=\delta$ and $x=-\delta$ for a sufficiently small $\delta>0$, bounded below by their intersections with $\sigma$ and above by the upper sphere meridians, with their exterior collars. These are legitimate parallel copies: at $x=0$ the saddle equation in [F2] has nonzero $z$ derivative and its boundary has nonzero $x$ derivative at its two $x=0$ points. Compactness gives the same properties for small $|x|$. The planar sections and their endpoint collars therefore vary smoothly with $x$, and this variation extends across the exterior bridge's product neighborhood. One child contains the right half $\sigma\cap\{x\ge\delta\}$ together with the right cap; the other contains the left half. Every other original saddle lies wholly in one child, because the surgery circle meets no other saddle and the cap interiors lie above $\sigma$. [given, F1, F2, F5, construct]

2.1 Consider the right child; the left has the reflected construction. Inside $C\cap\{x\ge\delta\}$ take the closed region $Z$ above the graph $\sigma$. Its boundary has two disk faces: the union $U_0$ of the half-saddle and the planar cap, and the remaining curved sphere cap $A$. To verify the disk and ball assertions, the planar section of $\sigma$ is one proper arc for small $\delta$ by step 1.1. It cuts its graph disk into two disks; its boundary arc on the curved face and the upper meridian bound a disk $A$ there. The two disks forming $U_0$ are glued along their common section arc, so $U_0$ is a disk. Thus $U_0\cup A$ is a sphere with product corners. Round these using [F5]; its contained side is $Z$, a ball by [F4]. It has no other surface piece in its interior, since all remaining saddle levels are lower. Its link intersection is exactly the overpass segment from the new cap puncture towards the right overpass endpoint, lying on $A$; the underpass has $x=0$ and is outside this half-ball. [step 1.1, F2, F4, F5, construct]

3.1 Extend $A$ slightly outside $C$ and extend $U_0$ along the actual child surface to a disk $U$ with boundary outside $C$. The planar cap already has its exterior collar from [F1]. At each other boundary arc of $U_0$, transversality supplies an exterior child-surface collar. Choose these finitely many extensions small enough to avoid every other crossing ball and every other child-surface piece. Push the opposite face outward, matching these collars, to a disk $V$ entirely outside $C$. Corner charts at $\partial U_0$ give the explicit local operation: the face on the child is $v=0$, the curved ball face is $t=0$, and their region is $v,t\ge0$; extend the first face across $t=0$, and replace the second by a small graph on the exterior side, joining the same two extended edge collars. These collar replacements preserve the ball type by [F6]. They can also be chosen so the resulting ball $W$ meets the child surface exactly in $U$, with $V=\overline{\partial W\setminus U}$, and avoids all other original saddle disks. The new puncture is in the interior of $U$, because its planar cap extends across the original crossing-ball boundary. [step 1.1, step 2.1, F1, F5, F6, construct]

4.1 Choose the outward face near the overpass endpoint so that $L\cap W$ is one boundary-parallel proper arc. Here is the endpoint construction and its actual disk witness. Along the overpass segment in $A$, take strip coordinates $(s,u,t)$ with $A$ given by $t=0$, its outward side $t>0$, and the link by $(s,0,0)$. Continue the coordinates a short distance past the original overpass endpoint. The outgoing link misses $C$, so after straightening its tangential projection it has the form $(s,0,t(s))$, where $t(s)>0$ after that endpoint and $t(s)=0$ on the old overpass. Choose a point $q$ on this short outgoing segment. Put the outward face in the form $t=\epsilon(s,u)>0$, with $\epsilon(s,0)>t(s)$ before $q$, equality at $q$, and $\partial_s(\epsilon(s,0)-t(s))<0$ there. Continue with the opposite strict inequality just past $q$. Such a smooth positive function exists: near $q$ take $\epsilon(s,0)=t(s)-c(s-s_q)$ with $c>0$ small, then join it to a larger positive function on the preceding compact segment. This face is still outside $C$ and crosses $L$ once, transversely. The strip $u=0$ between $t=t(s)$ and $t=\epsilon(s,0)$ is a disk: at $q$ its width vanishes linearly, and at the original puncture its joining interval lies in the extended planar cap $U$. Its boundary is exactly the captured link arc and an arc on $U\cup V$. Its interior lies inside $W$. This is a boundary-parallelism disk for the one arc $L\cap W$. No other link points occur, by a sufficiently small choice of the compact face collars and the outgoing-segment neighborhood. [step 2.1, step 3.1, F5, F6, construct]

5.1 Put $K=\bigcup_jC_j$. The opposite face $V$ misses this closed set by step 3.1, while $W$ meets no other child-surface piece. Apply [F3] to the marked ball $(W,U,L\cap W)$ and the explicit bridge disk of step 4.1. The child cap and its half-saddle are moved to a disk outside all crossing balls, and the new puncture moves close to $q$, also outside them. Every other surface piece stays fixed. The reflected construction does the same for the other child. Thus each child, after its own ambient isotopy preserving $L$ setwise, has only whole original saddle disks left, with the original uppermost $\sigma$ absent. [step 3.1, step 4.1, F3, construct]

6.1 Choose the nontrivial child guaranteed by [F1]. The ambient isotopy of step 5.1 preserves nontriviality of its side tangles: it carries each proper arc, each closed component and every possible boundary-parallelism disk to the corresponding data on the image side. Its original other puncture remains outside the crossing balls, while the cap puncture was moved outside them. Every remaining saddle is a distinct original saddle other than $\sigma$, by steps 1.1 and 5.1, so their total number is at most $s(S)-1$. This proves the stated strict decrease and all geometric conclusions. [step 1.1, step 5.1, F1, construct] ∎
