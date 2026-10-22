---
id: lem-normal-handle-cuts-strictly-decrease-finite-complexity
kind: lemma
title: "Normal handle cuts strictly decrease finite complexity"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-finite-marked-disk-cuts-decrease-waldhausen-handle-weights
  - thm-finite-pl-schoenflies-in-dimension-three
  - lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks
  - thm-higher-dimensional-spheres-are-simply-connected
  - lem-parametrized-pl-balls-absorb-standard-boundary-windows
  - lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar
  - lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Friedhelm Waldhausen, On irreducible 3-manifolds which are sufficiently large"
      url: https://homepages.math.uic.edu/~kauffman/Waldhausen.pdf
      locator: "Full §2.1–2.4, printed61–65; actual definitions, proof and printed63–64 images read. The isolated-ball convention and essential-disk case are specified and proved below."
---

## Statement

Let $M$ be a compact PL three-manifold with a supplied finite ball–beam–plate handle decomposition, in the following precise sense. Its closed handles have disjoint interiors. Zero-handles are parametrized balls; one-handles are parametrized beams $I\times D$; two-handles are parametrized plates $D\times I$; three-handles are parametrized balls attached along their entire boundary. All intersections are specified finite PL face identifications, with product corner charts giving the given manifold. Distinct handles of the same index are disjoint. A beam meets the zero-handles precisely in $\partial I\times D$, and meets the plates in $I\times d$, where $d$ is a finite disjoint union of closed boundary arcs with nonempty gaps. A plate meets zero-handles in $e_0\times I$ and beams in $e_1\times I$, where $e_0,e_1$ are nonempty alternating families of boundary arcs covering $\partial D$, with common endpoints at their corners. The beam and plate product structures agree on every common rectangle. Faces not incident to a three-handle or another specified handle belong to $\partial M$. The faces of a three-handle have no free boundary: their seams lie on the corresponding lower-handle seams. In particular, on a zero-handle boundary, the boundary of the region incident to three-handles is contained in the union of its beam and plate attachment regions.

For each beam let $m$ be its number of marked arcs $d$; for each zero-handle let $s$ be the number of its beam and plate attachment regions. Put
$$X=\sum_{\mathrm{beams}}\max(m-2,0),\quad Y=\sum_{\mathrm{beams}}\max(m-1,0),\quad Z=\sum_{\mathrm{zero\ handles}}\max(s-1,0).$$
Thus isolated ball handles contribute zero rather than minus one.

Let $F$ be a connected compact properly embedded locally flat PL surface with nonempty boundary and a supplied product collar. Suppose it misses all three-handles; in each plate it is a finite collection of full layers $D\times\{t\}$ with $0<t<1$; in each beam it is $I\times K$, where $K$ is a finite union of disjoint proper arcs avoiding the endpoints of $d$; and in each zero-handle it is a finite collection of disjoint proper disks. Impose these normal endpoint conditions on every component of $K$: its endpoints are not in the same marked arc, not in the same gap, and not in a marked arc and an adjacent gap. Assume $F$ is not a disk parallel to a disk in $\partial M$: there is no parametrized PL ball with boundary the union of $F$ and a disk in $\partial M$.

Cut $M$ along $F$, retaining both labeled copies of $F$ and all inherited face labels. The pieces have a finite handle decomposition of the same kind, obtained by cutting each old handle and retaining the induced beam and plate product structures, and its complexity satisfies
$$(X',Y',Z')<(X,Y,Z)$$
in lexicographic order. This includes essential disks whose boundary is zero in boundary homology. In particular the nonparallel-disk hypothesis holds whenever $[\partial F]\ne0$ in $H_1(\partial M;\mathbb Z)$, or whenever $F$ is a disk with essential boundary in $\partial M$.

No existence of the stated handle decomposition or of this normal position is asserted. The lemma is a strict-decrease statement for the supplied actual finite geometry, not a hierarchy theorem.

## Facts & Assumptions

**Given:** The supplied finite handle decomposition, surface, product collars and face parameters in the Statement.

[F1] Cutting a marked polygonal disk along disjoint proper arcs never increases the sum of $\max(m-2,0)$ when no arc returns to its own marked component. A mixed marked/unmarked arc to a nonadjacent gap strictly decreases that sum. If all endpoints are unmarked and an arc joins different gaps, the sum of $\max(m-1,0)$ strictly decreases. [[lem-finite-marked-disk-cuts-decrease-waldhausen-handle-weights]]

[F2] A finite PL sphere in a supplied standard PL three-sphere bounds two parametrized balls. The standard two-sphere is simply connected; nullhomotopic simple PL circles on a finite oriented PL surface bound PL disks. [[thm-finite-pl-schoenflies-in-dimension-three]] [[thm-higher-dimensional-spheres-are-simply-connected]] [[lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks]]

[F3] Prescribed disk maps extend over parametrized balls. Compact locally collared PL faces have PL collars and finite embedded PL polyhedra admit compatible finite subdivisions. [[lem-parametrized-pl-balls-absorb-standard-boundary-windows]] [[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]] [[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]]

## Proof

1.1 A proper locally flat PL disk in a parametrized ball cuts it into two parametrized balls. Its boundary cuts the boundary sphere into disks by [F2]. Join the proper disk to either boundary disk, move the common seam slightly across its collar, and view the resulting sphere in the standard double of the parametrized ball. By [F2] its side not containing the exterior of the original ball is a parametrized ball inside that ball. Undoing the seam move gives the corresponding closed side of the proper disk; [F3] extends the prescribed seam parameters. The two choices of boundary disk give opposite sides. They exhaust the original ball: near every point of the proper disk the local charts give the two opposite half-balls, and any omitted component would have frontier outside the disk and the boundary sphere, which is impossible in the connected ball. Repeat for finitely many disjoint disks, one at a time. Thus cutting a zero-handle produces parametrized balls, with their labeled cut faces. [F2, F3, given, construct]

2.1 Split along $F$ rather than remove an open neighborhood. In a beam the resulting pieces are exactly $I\times Q$, with $Q$ the disks obtained by cutting $D$ along $K$; their marked sides are precisely the retained portions of the old $d$. The elementary disk cuts and their parameters are [F1]. In a plate, cutting the finitely many levels gives products $D\times J$ for successive closed subintervals $J$, with distinct labeled copies at cut levels. The zero-handles are the balls of step1.1; three-handles are unchanged. Products on common rectangles still agree because they were restrictions of the original common products. End faces and alternating plate side arcs are simply their retained subdivided portions; no attachment is created at a newly cut face, which is a free boundary face. In particular every new plate retains its original nonempty alternating zero/one side arcs, and every beam retains its two zero-handle ends. All cut corners are the product of the old face chart with a half-interval, so the stated incidence and seam conditions persist. [F1, F3, step 1.1, given, construct]

3.1 For every old beam, [F1] proves that the sum of its descendant $X$ contributions is at most its original contribution. If even one of its arcs is mixed marked/unmarked, the normal endpoint hypothesis says its gap is nonadjacent to its marked arc. The strict clause of [F1] then makes this beam's contribution strictly smaller. Consequently $X'\le X$ always, and $X'<X$ if some beam arc is mixed. No assertion about preserving gap adjacency during successive cuts is used: [F1] proves strictness by doing an appropriate original arc first. [F1, step 2.1, given, algebra]

4.1 Suppose $F$ meets a plate. We show some beam arc must be mixed. If no arc were mixed, every beam rectangle of $F$ would have either two marked ends or two unmarked ends. On a zero-handle boundary, the boundary of each disk of $F$ is made of arcs in beam end disks, arcs in plate attachment strips, and arcs on $\partial M$. It cannot enter a three-handle face because $F$ misses those handles. Each plate-strip arc joins two marked beam endpoints, since a plate layer is interior to the plate's interval coordinate. Each free-boundary arc joins two unmarked beam endpoints, unless the whole boundary circle avoids every attachment, in which case its disk is an isolated component of $F$. Traverse the boundary circle of one zero-handle disk: crossing a beam arc preserves marked/unmarked type by the no-mixed assumption; the intervening plate or free arc preserves the same type. Hence this whole disk is either incident only to plate and marked-ended rectangles, or only to free boundary and unmarked-ended rectangles. A circle avoiding attachments is of the latter type. The surface pieces therefore partition into two disjoint subfamilies: plate layers, marked-ended beam rectangles and their incident zero-handle disks; and unmarked-ended rectangles and their incident disks. Only the second subfamily meets $\partial M$. Both would be nonempty, since $F$ meets a plate and has nonempty boundary. This contradicts connectedness of $F$. Thus a mixed arc exists, and step3.1 gives $X'<X$. [step 2.1, step 3.1, given, construct]

5.1 Suppose $F$ misses all plates but meets a beam. Every endpoint of every beam arc is then unmarked, since a marked endpoint would lie on a plate. The normal condition excludes two endpoints in the same original gap. Every beam with a nonempty arc system therefore satisfies the strict $Y$ clause of [F1], while beams not met by $F$ have unchanged $Y$. Thus $Y'<Y$; step3.1 still gives $X'\le X$. This suffices for strict lexicographic decrease regardless of $Z'$. [F1, step 2.1, step 3.1, step 4.1, given, algebra]

6.1 The remaining case is that $F$ misses all beams. It also misses every plate: a full plate layer meets its nonempty beam attachment arcs. Since it misses three-handles as well, connectedness makes $F$ one of the proper disks in a single zero-handle $B$. It avoids every attachment region in $\partial B$. On splitting $B$, the two new zero-handles have attachment counts $s_1,s_2$ with $s_1+s_2=s$; each old attachment region remains connected and lies wholly on one side. We claim both counts are positive. Otherwise let $Q$ be the disk on $\partial B$ on the side with no attachment. Its boundary is $\partial F\subset\partial M$. It meets no beam or plate attachment. By the stated three-handle seam condition, the portion of its interior incident to three-handles is both open and closed in its connected interior: its frontier would have to lie on a beam or plate attachment. It cannot be the whole interior because a collar of $\partial Q$ is free boundary, as $F$ is proper and misses the three-handles and their closed attaching faces. Therefore $Q$ lies wholly in $\partial M$. Step1.1 makes the ball side bounded by $F\cup Q$ a parametrized ball. This contradicts the nonparallel-disk hypothesis. Both $s_i$ are consequently at least one. [step 1.1, step 2.1, step 5.1, given, construct]

7.1 In this last case $s=s_1+s_2\ge2$, so the replacement of $B$ changes its $Z$ contribution from $s-1$ to $(s_1-1)+(s_2-1)=s-2$. All other zero-handles and all beams and plates are unchanged. Hence $X'=X$, $Y'=Y$ and $Z'=Z-1$. This proves strict decrease in the last case. Together with steps4.1 and5.1 it proves strict decrease in all cases. All three entries of each triple are nonnegative integers by their definitions, including zero-handles with no attachments. [step 4.1, step 5.1, step 6.1, algebra]

8.1 A disk parallel in the stated sense has boundary bounding the displayed disk on $\partial M$, so that boundary is nullhomotopic and is zero in integral boundary homology. Thus essential boundary excludes this disk, and $[\partial F]\ne0$ excludes it as well. Cutting labels, product structures and all parameters were retained in step2.1; a sufficiently small collar push converts splitting into removal of an open product neighborhood if desired, without changing any count. This proves all conclusions, including the essential separating-disk case. No step constructs normal position or an infinite sequence of cuts. [F3, step 2.1, step 7.1, given, construct] ∎

## Scope

This is a finite geometric prerequisite to termination. An actual proof that the required superincompressible surfaces and essential disks can be normalized for one coherently inherited handle system remains necessary. Replacing the original handle system by an arbitrary new triangulation after each cut gives no bound by this lemma. Pared-boundary minimal position, square/cusp updates and the pared axioms of the cut pieces are also separate obligations.
