---
id: lem-crossing-minimal-regular-link-diagrams-are-reduced
kind: lemma
title: "Crossing-minimal regular link diagrams are reduced"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-crossing-number-of-link
  - def-reduced-alternating-link-diagram
  - lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations
  - lem-choice-free-isotopy-extension-for-a-compact-smooth-source
  - lem-jordan-schoenflies-extension-for-plane-curves
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is retained through the crossing-number and finite smooth disk-normalization interfaces. The actual overpass detour and compact-source extension use finite supplied disks."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alexander Stoimenow, Diagram Genus, Generators, and Applications (2016), publisher chapter2, printed pp.14 and27, Figures2.1 and2.7; smooth detour proof supplied here"
      url: "https://www.routledge.com/rsc/downloads/diamgram_genus_-_chapter.pdf"
---

## Statement

Assume full AC. If a regular diagram $D$ of a nonempty smooth link $L$ has $c(D)=c(L)$, then no complementary region has any crossing more than once on its boundary. Thus $D$ is reduced, whether or not it is alternating, prime or connected. More precisely, a crossing incident twice to one complementary region can be eliminated by a smooth ambient isotopy of the represented link, yielding a regular diagram with exactly one fewer crossing.

## Statement references

[[def-axiom-of-choice]]

[[def-crossing-number-of-link]]

[[def-reduced-alternating-link-diagram]]

## Facts & Assumptions

**Given:** Full AC and a regular diagram, its smooth height realization, and a crossing incident more than once to one complementary region when the more precise assertion is used.

[F1] A crossing has four local sectors with opposite strand branches; reducedness excludes repeated incidence of a region at a crossing. The crossing number is the minimum crossing count among regular diagrams of the same underlying smooth link. ([[def-reduced-alternating-link-diagram]], [[def-crossing-number-of-link]])

[F2] The actual finite smooth disk-normalization proof provides smooth disk parameters with prescribed boundary arcs and their inward collars. Its circle-map extensions and corner collars give the corresponding parameters for a disk with finitely many specified smooth boundary arcs meeting in corners. ([[lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations]], Proof7.1–12.1)

[F3] A smooth embedding isotopy of a compact source extends to a smooth ambient isotopy; one can make time stationary at its endpoints. ([[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]])

[F4] A planar Jordan curve bounds its disk region; finite smooth corners may be rounded in disjoint coordinate disks. ([[lem-jordan-schoenflies-extension-for-plane-curves]])

[F5] Full AC implies countable choice, so the crossing-number domain and the stated smooth suppliers are available. ([[thm-choice-implies-dependent-implies-countable-choice]])

## Proof

1.1 Let $v$ be the repeated crossing and take a short overpassing subarc $a$ through $v$, with endpoints just outside its crossing disk. Each of the four sectors touches exactly one of the two ends of this overpass. Two adjacent sectors cannot belong to the same complementary region: a small transverse crossing of their intervening strand changes the parity of intersection with the finite immersed link cycle on the sphere. This parity is well-defined by filling that cycle modulo two on the sphere, or directly by the signed crossing count of a generic path; a closed path has even intersection with a closed immersed curve, since its individual smoothed Jordan circles each separate the sphere. Thus the repeated sectors are opposite. They touch the two different ends of $a$. Within their common open region join nearby points by a simple smooth arc: a finite chain of coordinate disks along a path gives a polygonal arc, loop erasure makes it simple, and finitely many local roundings smooth it. Extend it to the endpoints of $a$ in their empty small neighborhoods, obtaining an arc $b$ missing the diagram except at its endpoints. It meets $a$ only at those endpoints. Therefore $a\cup b$ bounds a planar bigon disk $J$, with smooth boundary arcs and endpoint corners. [given, F1, F2, F4, F5, construct]

2.1 Use a finite plane chart containing $J$ and the diagram. At each endpoint $p$ of $a$, straighten its crossing-free continuation in a small projection disk $U_p$, disjoint from the other endpoint disk and all other strands. Write $v_p$ for the direction along the old strand from the fixed exterior towards the interior of $a$. Choose $b$ radial near $p$, with inward direction $u_p$ different from $-v_p$; the open region sector permits this choice. Both arcs can be made exactly radial in the disk by small smooth changes supported there. The interior angle of $J$ at $p$ may exceed $\pi$; no claim about the exterior continuation lying outside $J$ is needed. Choose $H$ and $\delta>0$ with $H-2\delta$ above the entire remaining compact link, shrinking the endpoint disks to contain the constructions below. First flatten the old height on smaller endpoint neighborhoods by interpolation over its injective projection in the empty cylinders. Raise the interior of the overpass to height $H$, using monotone height tapers on those flattened ends. This is an embedding isotopy: its projection remains the injective arc $a$, and the only intersection of that projected interior with the remaining diagram is the understrand at $v$, below its original height. In each empty endpoint cylinder replace the taper by a bottom rounded corner, a vertical segment over $p$, and a top quarter-circle joining that segment to the radial arc at height $H$. This replacement also has an explicit embedding isotopy: oriented from the exterior to the interior, the old taper and the new rounded path have nonnegative coordinates in the directions $v_p$ and the vertical vector, with strictly positive derivative of their sum. Parametrize by that sum and interpolate the other coordinate, keeping the exterior collars fixed. Use smooth rounded corners with those positive derivatives. The intermediate paths remain graphs, and all their supports are in the cylinders containing only this strand. [step 1.1, construct]

3.1 There is a smooth family of planar embedded arcs $a_t$ from $a$ to $b$, fixing their endpoints but allowing their endpoint tangents to rotate through the whole sector of $J$, including a reflex sector. To construct it, delete small round endpoint disks from $J$. The remaining disk is a quadrilateral with the truncated $a,b$ as two sides and two circular sector arcs as its other sides. Its four corners are right-angle corners, even when an original endpoint of $J$ was reflex. Use [F2] to parametrize it by a rectangle with prescribed collars on all four sides. Its horizontal arcs join the two circular sides; append the radial segments from their endpoints to the original endpoints of $a$. Prescribe radial matching collars so these joins are smooth. Near $p$ the result is exactly $p+r u_p(t)$, with $r\geq0$ and $u_p(t)$ a smoothly rotating unit vector. The circular side may have angular length greater than $\pi$; its polar parametrization is still injective. The arcs are therefore embedded, depend smoothly on time including their endpoints, and have nonzero endpoint derivatives. Round the time parameter to make it stationary at both ends. [step 1.1, step 2.1, F2, construct]

4.1 Sweep the raised middle of the strand along $a_t$ at height $H$, truncating its two radial ends at radius $2\delta$, inside endpoint disks of that radius. Keep the vertical segments from step 2.1 fixed. At $p$ join the top of its segment to radius $\delta$ on the radial end by the quarter-circle whose coordinates are $p+\delta(1-\cos\theta)u_p(t)$ and $H-\delta+\delta\sin\theta$, for $0\leq\theta\leq\pi/2$. Its initial tangent is vertical and its final tangent is $u_p(t)$; use fixed smooth rounded joins to the vertical and radial pieces, with positive tangent components in these two directions. Continue radially from radius $\delta$ to $2\delta$. Round only in smaller neighborhoods of the joins, so the top connector remains inside radius $2\delta$. The joins depend smoothly on $u_p(t)$. The top corner stays inside the endpoint disk and above $H-2\delta$, the radial-truncated middle stays outside those endpoint disks at height $H$, and the fixed vertical segments end below these top corners. Thus these pieces meet only at their prescribed joins. The rest of the link is below the moving pieces; in each endpoint cylinder the lower pieces are the fixed single continuation. This proves disjointness for the entire sweep, even when the rotating tangent points over that continuation in projection. In particular the reflex endpoint causes no intersection: height, rather than a claimed convex planar corner, separates the strands. [step 2.1, step 3.1, construct]

5.1 At the final time straighten each endpoint connector to an embedded projected join from the fixed exterior to $b$. Here is a relative construction that permits the reflex case. Since $u_p\ne -v_p$, there is a planar linear functional $\ell_p$ positive on both $u_p$ and $v_p$. The connector consisting of the bottom corner, vertical segment and final top corner has nondecreasing $\ell_p$ coordinate, with equality only along its vertical segment; its height is strictly increasing there. Smoothly perturb that coordinate to be strictly increasing, keeping the outer collars fixed: parametrize the connector regularly and interpolate its coordinate with a smooth strictly increasing function with the same endpoint values that agrees on those collars. Such a function is obtained by replacing its nonnegative derivative by a positive one on the interior, preserving its integral by a compensating small decrease where the derivative is already positive. For every positive interpolation parameter the projection to $\ell_p$ is injective, and at parameter zero the vertical height separates the only equal-coordinate pairs. Hence this is an embedding isotopy, with no zero tangent. Now parametrize by $\ell_p$ and interpolate the other planar coordinate and the height to a smooth rounded planar corner from the exterior direction $v_p$ to the radial direction $u_p$, retaining its positive $\ell_p$ derivative and the outer collars. The target height matches the remaining high arc. These graph interpolations stay in a sufficiently small empty endpoint cylinder; the exterior continuation is on the exterior side of its coordinate interval and the remaining arc $b$ is outside the smaller endpoint disk. They cannot meet either. The rounded corner need not lie in $J$, which is harmless because this endpoint disk contains no other strand. After both connectors are straightened, the entire replacement has an injective projection, disjoint from the unchanged diagram except at its matched ends. Its high portions can now be lowered by interpolation of height, with fixed exterior collars, without meeting any other strand. This gives a regular final diagram with exactly $c(D)-1$ crossings: the sole crossing on $a$ is removed, and all others and their over-under data are untouched. Apply [F3] to the concatenated smooth embedding isotopies of the whole link, made stationary at their time endpoints, to obtain a smooth ambient isotopy. [step 1.1, step 2.1, step 4.1, F3, construct]

6.1 If $c(D)=c(L)$, the diagram in step 5.1 contradicts the minimum in [F1]. Hence there is no repeated region at any crossing and $D$ is reduced. The same construction proves the more precise assertion without any minimality assumption. It uses no alternation, primeness or connectedness. [given, step 5.1, F1, algebra] ∎
