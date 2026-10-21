---
id: thm-schubert-bridge-connected-sum
kind: theorem
title: Bridge number is additive under connected sum minus one
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - def-knot-bridge-position-and-unknotting-number
  - def-knot-connected-sum-and-prime-knot
  - lem-knot-connected-sum-well-defined
  - thm-oriented-knot-connected-sum-is-a-commutative-monoid
  - lem-knot-decomposing-sphere-realizes-connected-sum
  - lem-bridge-sphere-normalization
  - thm-bridge-one-is-unknot
  - def-countable-choice
  - lem-knot-exterior-h1-is-generated-by-meridian
  - lem-knot-exterior-is-irreducible
  - lem-boundary-compressible-annulus-is-boundary-parallel
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
  - lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption
  - thm-isotopy-extension
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jennifer Schultens, Additivity of Bridge Numbers of Knots"
      url: "https://www.math.ucdavis.edu/~jcs/pubs/addbri15.pdf"
      locator: "Theorem 1 and proof, printed pp. 1–5; taut swallow-follow torus route"
    - title: "Seiya Negami and Kazuo Okita, The Splittability and Triviality of 3-Bridge Links"
      url: "https://www.researchgate.net/publication/243080042_The_splittability_and_triviality_of_3-bridge_links"
      locator: "§3, Proposition 3-5 and Corollary 3-6, printed pp. 262–263"
---

## Statement

Assume the Axiom of Countable Choice. For any two smooth oriented knots $K$ and $J$ in $S^3$, the bridge number of their oriented connected sum satisfies
$$b(K\#J)=b(K)+b(J)-1.$$

## Statement references

[[def-knot-bridge-position-and-unknotting-number|Bridge number from local maxima of the fixed height]]

[[def-knot-connected-sum-and-prime-knot|The oriented connected-sum convention]]

## Facts & Assumptions

**Given:** AC$_\omega$ and smooth oriented knots $K,J\subset S^3$.

[A1] The Axiom of Countable Choice, written AC$_\omega$. [[def-countable-choice]]

[F1] The bridge-number minima are over nonempty subsets of $\mathbb N$ and are attained, and changing the connected-sum datum preserves the oriented knot class. [[def-knot-bridge-position-and-unknotting-number]], [[lem-knot-connected-sum-well-defined]]

[F2] The connected sum is represented by removing a small trivial ball-arc neighborhood from each summand and gluing the two boundary spheres with the fixed arc-matching convention. [[def-knot-connected-sum-and-prime-knot]]

[F3] The essential-annulus normalization for the fixed bridge pair is [[lem-bridge-sphere-normalization]]. Its two final disk-intersection arcs end on $P\cap S$, away from the knot.

[F4] A knot exterior has $H_1(E;\mathbb Z)=\mathbb Z[\mu]$. [[lem-knot-exterior-h1-is-generated-by-meridian]]

[F5] Knot exteriors are irreducible under countable choice, and an incompressible boundary-compressible annulus in an irreducible smooth torus-boundary manifold is boundary-parallel. [[lem-knot-exterior-is-irreducible]], [[lem-boundary-compressible-annulus-is-boundary-parallel]]

[F6] Smooth Schoenflies gives an ambient isotopy of a smooth sphere to the equator with compatible ball-side parameters. Disk-window attachment and removal preserve the displayed ball type. [[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]], [[lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption]]

[F7] Compact smooth embedding isotopies extend ambiently. [[thm-isotopy-extension]]

[F8] A two-puncture sphere determines the stated oriented connected-sum factors by boundary caps; the unknot is the connected-sum identity and has bridge number one. [[lem-knot-decomposing-sphere-realizes-connected-sum]], [[thm-oriented-knot-connected-sum-is-a-commutative-monoid]], [[thm-bridge-one-is-unknot]]

## Proof

1.1 We first justify using bridge spheres for the height-based minimum in [F1]. In the product of regular height levels $S^2\times(-1,1)$, a maximum can be raised without changing the number or kinds of critical points: take a small cap containing only that maximum, perturb its horizontal location so that its central vertical ray misses the rest of the knot, narrow the cap inside its original small chart to fit a tube about that ray, and lift it along the ray, lengthening its two descending ends monotonically. The horizontal location is available arbitrarily close to the initial cap: the projection of the remaining finite collection of compact smooth arcs has empty interior, as follows by covering each arc by finitely many intervals of derivative bound $C$, whose projected images lie in disks of radius $C\delta$ and have total area tending to zero as $\delta\to0$. Compact disjointness then gives a narrow tube about the ray avoiding the rest of the knot; its two thin parallel sides are the lengthened ends. A horizontal cap perturbation and the subsequent vertical move have embedding tracks with no new extrema; the moving cap has the translated local quadratic maximum and the ends have strictly positive or negative height derivative. Extend with [F7]. Do this finitely many times, choosing distinct rays avoiding earlier cap tracks, until all maxima lie above a regular level above all minima. The upper and lower pieces are trivial tangles with simultaneous disjoint spanning disks: sweep their endpoints between successive critical heights, extending the finite point motions on each level sphere by disjoint small coordinate vector fields. Transport disjoint joining arcs by these level isotopies. At a cap choose its joining arc in its small cap chart, away from the finitely many earlier arcs (move those arcs off that chart by a level isotopy before the birth). Their swept traces, capped at the extrema, give pairwise disjoint disks. Conversely, for any smooth bridge sphere and displayed disks, [F6] first carries the sphere to a regular level. Push each bridge through its own disk to a thin collar of its foot; in disk parameters use a positive rounded arch whose height is $\varepsilon\sin(\pi t)$ above, and $-\varepsilon\sin(\pi t)$ below, with compatible endpoint collars. The disjoint same-side disks allow these isotopies simultaneously; [F7] extends them, and rounding at endpoints gives exactly one maximum per upper arc and one minimum per lower arc. Thus the minimum number of upper arcs over bridge spheres is exactly the height-defined $b$. In particular a minimum-height representative supplies a bridge sphere with $b$ upper arcs, and any factor bridge sphere with $n$ upper arcs gives $b(\text{factor})\le n$. [A1, F1, F6, F7, construct]

2.1 Choose bridge representatives realizing $b(K)$ and $b(J)$, which is possible by [F1] and step 1.1. Each comes with its bridge sphere and disjoint upper and lower bridge-spanning disks. [A1, F1, step 1.1, choose]

2.2 If either factor is the unknot, [F8] gives equality immediately. Suppose therefore both are nontrivial. Choose a bridge sphere $S$ of $L=K\#J$ with $b=b(L)$ upper arcs, by step 1.1. Transport the connected-sum construction's two-puncture sphere through the representative isotopy; this gives a smooth sphere $P$ cutting $L$ into the specified factors. Choose a sufficiently small product tube adapted to its two transverse punctures and form $A=P\setminus\operatorname{int}N(L)$. The annulus core is a positive or negative meridian in the tube: both its boundary components bound the normal disks $P\cap N(L)$ and its core is homotopic within $A$ to either boundary. By [F4], composing $\pi_1(A)=\mathbb Z\to\pi_1(E_L)$ with abelianization sends its generator to $\pm1\in\mathbb Z$. The inclusion is therefore injective. [F1, F2, F4, F8, step 1.1, construct]

3.1 Choose one point of each knot on its bridge sphere where an upper bridge arc and a lower bridge arc meet. Take product-coordinate balls around the two points so each ball meets the sphere in a disk, the knot in one short arc crossing that disk once, and each of the two incident bridge-spanning disks in a half-disk. Remove the ball interiors and glue the punctured spheres by the connected-sum map from [F2]. The two selected upper bridge arcs join into one proper upper arc, and the two selected lower bridge arcs join into one proper lower arc. The new upper spanning disk is the union of the two punctured upper disks and the gluing rectangle; two disks joined along one boundary interval form a disk. The same construction gives the lower spanning disk. Every unselected bridge arc and disk remains unchanged and disjoint from these disks. Thus the connected-sum position has $b(K)+b(J)-1$ upper arcs, so $b(K\#J)\le b(K)+b(J)-1$. [F1, F2, step 1.1, step 2.1, construct]

3.2 There is no boundary compression of $A$. If there were, [F5] would give a parallelism to one of the two annuli $A_0$ on the boundary torus between its meridional boundaries. This implies that one factor is the unknot, as can be checked with the markings: write the tube over the corresponding subinterval of the core knot as $D^2\times I$, with side $A_0=\partial D^2\times I$ and end disks the two disks $P\cap N(L)$. Attach the annulus parallelism to this side, retaining its rim collars. It merely enlarges the radial disk coordinate in each $I$-fiber, so the result is a ball with boundary the original $P$ after rounding. Its knot arc is the core $\{0\}\times I$, and it cobounds with an arc on that ball's boundary a disk given by a fixed radial interval times $I$, rounded at its ends. Capping this arc on $P$ produces an unknot. The same construction works for either complementary annulus of the torus; it uses its actual product parameter, not just a homological slope. By [F8] the resulting unknot is one of the given factors, contradicting nontriviality. Thus all hypotheses of [F3] hold for this particular $P$, and we may apply its isotopy and disk changes without changing $(L,S)$ or the specified factors. [F3, F5, F6, F8, step 2.2, construct]

4.1 In the resulting normal form $P\cap S=C$ is one circle disjoint from $L$. The two disks $P_\pm=P\cap B_\pm$ each contain one puncture. Indeed the two disk-intersection arcs of [F3] have their puncture endpoints one on each side, as in that lemma's final normalization. Each $P_\pm$ is a proper disk cutting its bridge ball into two balls: cap it by either of the two disks on $\partial B_\pm$ bounded by its rim, round, and apply [F6]; the side not containing the exterior of $B_\pm$ is the required ball. Their collars give compatible markings. Let $S_1,S_2$ be the disks on $S$ bounded by $C$, labelled by the two sides of $P$, and put $r_i=|L\cap S_i|$. Then $r_1+r_2=2b$. In each original bridge ball exactly one bridge arc crosses $P_\pm$: it is the arc carrying its unique puncture. Its two endpoints on $S$ lie on opposite sides of $C$, because the bridge crosses that separating disk once. Every other bridge arc is wholly on one side. Consequently $r_i$ is odd. [F3, F6, step 3.2, construct, algebra]

5.1 Cap each of the two cut ball-arcs of $L$ by a boundary arc on $P$ running from the upper puncture to the lower puncture and crossing $C$ once, chosen as the two type-I traces joined by an arc of $C$ between their distinct foot endpoints, then rounded slightly in the collar of $C$ so that it crosses $C$ transversely just once. Push the two caps into their respective boundary collars. On each side this cap is a trivial ball-arc meeting the capped bridge sphere $S_i\cup$(cap disk) once. Its upper and lower portions extend the severed bridge arcs. Every uncut bridge disk remains in its original region. Each of the two cut bridge disks is cut along its one trace into two disks; on each side join its disk piece to the narrow cap strip. This is a disk attached along one boundary interval, so gives a spanning disk for the extended upper or lower arc. Choose the cap strips in disjoint small quadrant collars of the traces; other disks miss them, and on a given side all disk pieces were originally disjoint. Thus these are simultaneous disjoint spanning-disk systems. The upper and lower ambient pieces are balls: attach the cap half-balls along the displayed windows on $P_\pm$ and use [F6]. We have therefore constructed actual bridge spheres for the two specified oriented factors, not merely diagrams with a proposed number of bridges. Each has $r_i+1$ knot endpoints on its sphere, the extra endpoint being the single crossing of the cap. It follows that their upper arc counts are $n_i=(r_i+1)/2$, and $n_1+n_2=b+1$. Cap orientation is chosen to close the original oriented arc, so [F8] identifies the factors with $K,J$, up to their harmless interchange. [F3, F6, F8, step 4.1, construct, algebra]

6.1 Step 1.1 applied to the two factor bridge spheres gives $b(K)\le n_1$ and $b(J)\le n_2$. Hence $b(K)+b(J)-1\le n_1+n_2-1=b=b(K\#J)$. Together with step 3.1 and the unknot case in step 2.2, this proves the formula for every pair of smooth oriented knots in the Statement. The constructions use finitely many extrema, disks, cuts and collars; their smooth extension and Schoenflies uses are precisely the stated countable-choice suppliers. [F1, F8, step 1.1, step 3.1, step 2.2, step 5.1, algebra] ∎

## Diagram

The schematic shows the local gluing at one bridge-sphere endpoint. The two selected upper disks join along a boundary strip to one upper disk, and the lower pair joins in the same way. The drawing records only the local count reduction by one; the lower-bound proof does not rely on it.

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[dashed] (-4,0)--(4,0) node[right] {$S$};
  \fill (-1.2,0) circle (2pt);
  \fill (1.2,0) circle (2pt);
  \draw[thick] (-1.2,0) .. controls (-1.1,1.2) and (-0.2,1.2) .. (0,0.5);
  \draw[thick] (1.2,0) .. controls (1.1,1.2) and (0.2,1.2) .. (0,0.5);
  \draw[thick] (-1.2,0) .. controls (-1.1,-1.2) and (-0.2,-1.2) .. (0,-0.5);
  \draw[thick] (1.2,0) .. controls (1.1,-1.2) and (0.2,-1.2) .. (0,-0.5);
  \draw[<->] (-0.5,1.55)--(0.5,1.55) node[midway,above] {glue};
  \node[above] at (-2,0.8) {one upper arc};
  \node[above] at (2,0.8) {one upper arc};
\end{tikzpicture}
```
