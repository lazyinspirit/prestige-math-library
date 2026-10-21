---
id: lem-an-isolated-same-index-knot-morse-trajectory-gives-a-marked-disk-slide
kind: lemma
title: "An isolated same-index knot Morse trajectory gives a marked disk slide"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - lem-cc-relative-descending-paths-have-finite-same-index-events
  - lem-regular-grouped-knot-morse-data-give-balanced-diagram-isotopies
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - lem-supported-neat-proper-isotopies-extend-boundary-preservingly
  - lem-empty-cut-ball-births-erase-to-balanced-disk-slides
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Proposition2.2 and complete Lemma2.3–2.4 proofs, printed6–7, actually read; the local same-index trajectory to disk-slide translation is proved explicitly here"
---

## Statement

Assume Countable Choice. Supply a smooth grouped weak knot Morse family on $S^3$ over a sufficiently small parameter interval about zero. Its middle level is regular throughout; its protected marked knot neighborhood is fixed. There is no fold, and the only same-index trajectory is one trajectory at parameter zero from a critical point $p$ to another $q$ of the same index. It is transverse in the parameter in the finite-incidence sense: the source-sphere directions together with the parameter direction map isomorphically onto the normal directions to the destination stable section. No trajectory increases index. The critical models and all other hypotheses are those of the finite weak-field and regular grouped-diagram constructions.

Identify the middle levels by the knot-fixed regular-level transport. On sufficiently close negative and positive regular slices the extended attaching systems are related by isotopies and one disk slide, supported away from the actual knot and all marks. For an index-one trajectory the lower stable disk of $q$ slides over the lower stable disk of $p$; the other lower disks and the upper system change only by isotopies. For index two the time-reversed assertion is an upper disk slide. These are the only possible indices. The slide is an actual boundary band sum of proper disks with its transported band and framing, rather than just a homology relation between boundary circles. Any chosen rooted-forest balanced reductions on the two slices are therefore related by finitely many permitted marked curve isotopies and slides.

## Statement references

[[lem-cc-relative-descending-paths-have-finite-same-index-events]]

[[lem-regular-grouped-knot-morse-data-give-balanced-diagram-isotopies]]

## Facts & Assumptions

**Given:** The isolated parameter-transverse trajectory, the supplied local product models, grouped levels and fixed protected knot neighborhood.

[F1] The weak-field construction supplies these finite-incidence transversality conditions and broken-trajectory compactness, with no index-increasing or other same-index trajectory in this interval. Its regular critical models may be normalized without changing their invariant coordinate disks. ([[lem-cc-relative-descending-paths-have-finite-same-index-events]])

[F2] A regular grouped slice has actual extended compression disks and cut balls, with simultaneous bridge witnesses missing their faces. Over a closed event-free interval the disks and middle levels are transported by finite-time flow and marked isotopies. ([[lem-regular-grouped-knot-morse-data-give-balanced-diagram-isotopies]])

[F3] A nonsingular smooth finite-dimensional coordinate change has a smooth inverse, also with parameters by adjoining the parameters as unchanged coordinates. ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]])

[F4] A supported neat proper-disk isotopy extends to a boundary-preserving ambient isotopy. Round finitely many disk-face corners in their product collars before applying the smooth-boundary assertion, and transport the coordinates through that rounding. ([[lem-supported-neat-proper-isotopies-extend-boundary-preservingly]])

[F5] An actual extended disk slide induces a finite marked slide/isotopy sequence between arbitrary rooted-forest balanced reductions, preserving the actual arcs and their simultaneous bridge data. ([[lem-empty-cut-ball-births-erase-to-balanced-disk-slides]])

## Proof

**Given:** The family in the Statement.

1.1 A same-index trajectory cannot have index zero: its source unstable manifold is a point and has no outgoing sphere. It cannot have index three: its destination stable manifold is a point and has no incoming sphere. Consider index one first. Strict descent gives $f_0(p)>f_0(q)$, with both points below the middle level. Choose small disjoint product blocks about $p,q$ and a thin tube along a compact segment of the unique event orbit outside them. These miss the fixed knot tube. In the $p$ block use coordinates $(x,y,z)$ with $f_t=f_t(p)-x^2+y^2+z^2$ and $X_t=(2x,-2y,-2z)$, and put the event on its positive $x$ branch. A positive scalar-speed version has the same orbits and gives the same calculation below. Choose its outgoing face $x=\eta$, with transverse coordinates $v=(y,z)$; its unstable branch meets this face at $v=0$. The stable disk of $q$, followed backwards through the event tube, intersects this face in a smooth curve depending on $t$. Indeed the central tube has finite transit to a fixed local stable section of $q$, and all its transverse holonomies are smooth diffeomorphisms. Parameter transversality says precisely that this curve passes through $v=0$ with nonzero normal parameter velocity. [F1, F2, F3, given, construct]

2.1 Rotate the $v$ coordinates once so the central curve is transverse to the $z=0$ direction. On a smaller section it is $y=a(t,z)$ with $a(0,0)=0$ and $\partial_ta(0,0)\ne0$. Write $a(t,z)=A(t)+zB(t,z)$, where $A(t)=a(t,0)$ and $B(t,z)=\int_0^1\partial_za(t,sz)\,ds$. The section change $H_t(y,z)=(y-zB(t,z),z)$ fixes the origin and takes this curve to $y=A(t)$. It is a local diffeomorphism with explicit inverse $(Y,z)\mapsto(Y+zB(t,z),z)$. The changes with $sB$ instead of $B$ form an isotopy. They also lift smoothly to the radial cylinder at the origin: $H_t(r\theta)=rL_t(r,\theta)$ with $L_t(r,\theta)=\int_0^1 DH_t(sr\theta)\theta\,ds\ne0$ on a small neighborhood, so its lifted formulas are $r\mapsto r|L_t|$ and $\theta\mapsto L_t/|L_t|$. This shows explicitly that using these coordinates changes the incoming disk collars only by smooth isotopies, including at their belt boundary; the induced circle isotopy extends over its disk by a boundary collar cutoff, stationary near the disk center. Shrink the parameter interval and use $A(t)$ as its coordinate by [F3], reversing its sign if necessary. Thus the local comparison reduces, up to supported disk isotopies, to the straight section curve $(y,z)=(t,z)$. This normalization does not assert a new linearization of the field: the radial lift is a coordinate comparison of its actual holonomy and disk collars. [F3, F4, step 1.1, construct, algebra]

3.1 The actual backward holonomy of the quadratic field from $x=\eta$, $v\ne0$, to the incoming face $|v|=\eta$ is $$x_{\mathrm{in}}=|v|,\qquad v_{\mathrm{in}}=\eta v/|v|.$$ This follows from the invariants $xy,xz$ and from $x$ decreasing while $|v|$ increases backwards. Consequently the pulled-back stable sheet inside the positive branch of the block has equation $$xy=\eta t,\qquad x>0.$$ In a smaller product neighborhood its remaining coordinate is the free variable $z$. For $t>0$ the sheet rounds the union of the outgoing strip $y=0,x\ge0$ and the half disk $x=0,y\ge0$; for $t<0$ it rounds that same strip and the complementary half disk $x=0,y\le0$. Here the full disk $x=0$ in the block is exactly the stable cocore of $p$. These rounding statements have an explicit collar description: in each $(x,y)$ plane at fixed $z$, the arc $xy=\eta|t|$ in the appropriate quadrant is the graph $y=\eta|t|/x$. Cut it at fixed small $x$ and $|y|$; its two end collars are graphs over the coordinate rays. Adjust those collars by graph interpolation and use the monotone coordinate $x-|y|$ on the remaining arc to identify any two sufficiently small positive rounding parameters. Taking the product in $z$ and rounding its end corners supplies proper-disk isotopies relative the outside collars. In particular no singular isotopy at $t=0$ is used. Equivalently, on the incoming cylinder the two arcs run along complementary semicircles about the belt of $p$; their union traverses that belt once, with no additional turn. [F1, F3, F4, step 1.1, step 2.1, algebra, construct]

4.1 This local replacement is the actual disk band sum. To see the disks, cut the stable cocore $D_p$ along the diameter where the outgoing strip attaches. Denote the resulting half disks by $D_p^+$ and $D_p^-$. The central stable sheet going towards $q$ supplies a rectangular strip from this diameter to a small boundary interval on the surviving part of $D_q$; its interior is disjoint from the disks. The two regular slices in step3.1 are precisely the two smoothings obtained by capping that strip with $D_p^+$ or with $D_p^-$. A parallel copy of the WHOLE $D_p$ attached by a parallel narrow copy of the same strip changes the first cap to the second: cut the parallel disk at its corresponding diameter, pair its $D_p^+$ half with the old cap across the intervening product collar, and flatten that paired cap collar. The remaining half is $D_p^-$. This flattening is an isotopy, described in the normal product coordinates of the paired half disks by contracting their collar interval and moving its rounded boundary graph; it fixes the complementary collars. Hence the result is a boundary connected sum of $D_q$ with a parallel of $D_p$, followed by a proper-disk isotopy. Reversing the roles gives the inverse slide. The interval normal to the strip comes from the actual flow tube and product block, so this cap pairing also fixes the band framing. In particular the proof does not infer disk equivalence from a boundary homology calculation or assume that an arbitrary disk with the same boundary is isotopic. [F4, step 3.1, construct]

5.1 Transport the two ends of the local comparison upwards to the middle level. The stable cocore of $p$ reaches that level and is smooth throughout this interval: a failure would require another same-index trajectory into $p$. On $D_q$ the only nonuniform transit is the passage through the displayed $p$ block; all remaining compact pieces have bounded transit. Otherwise [F1]'s broken-limit extraction gives a second index-one trajectory at parameter zero. This applies also to every other lower disk; a nonuniform transit for one of them would give another same-index event. Their compact crossing curves and the event band can therefore be chosen disjoint, and their transported collars give disk isotopies outside the one replacement in step4.1. The event strip is disjoint from $K$: its central orbit is disjoint, its compact regular segment has a disjoint thin tube, and the stable cocore of $p$ is disjoint from $K$ since knot points descend to protected minima. Its upwards continuation and the boundary band consequently avoid every marked crossing and every other lower disk. The upper disks are truncated above the middle level, so no part of their transport meets this lower event; an unbounded transit there would require an upper same-index event, which is excluded. The regular middle-level transport is fixed near $K$ by [F2]. Thus step4.1 is a marked lower disk slide with only isotopies on the other disks. [F1, F2, F4, step 1.1, step 3.1, step 4.1, construct]

6.1 For index two replace $f$ by $1-f$ and $X$ by $-X$. Its unique event is an index-one trajectory with the endpoints interchanged. All the preceding constructions therefore give the asserted upper disk slide on reversing time, with the same fixed marks and actual knot. At either end [F2] supplies the full extended cut-ball and simultaneous bridge data. The local disk band sum is disjoint from the actual arcs and from all other disks, so it is an extended slide in [F5]'s exact sense. Apply [F5] to this slide and the finitely many disk isotopies, using any prescribed forest reductions at the two endpoints. This gives the stated finite balanced marked move sequence. Countable Choice is inherited from [F1]–[F5]; the local coordinates, collar smoothings, bands and reductions here require only finitely many selections. [F1, F2, F4, F5, step 4.1, step 5.1, construct] ∎
