---
id: lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal
kind: lemma
title: "Essential annuli and tori in Seifert pieces are vertical or horizontal"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - lem-compact-smooth-boundary-preimage-surfaces-admit-neat-embedding-isotopies
  - lem-angular-boundary-neatification-preserves-smooth-disk-obstructions
  - def-incompressibility-seifert-fibration-and-jsj-system
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel
  - thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds
  - lem-incompressible-surface-torus-boundary-essential-or-parallel-annulus
  - lem-relative-transversality-for-embedded-surfaces
  - lem-choice-free-smooth-torus-curves-and-annulus-strips
  - lem-smooth-two-sided-klein-bottle-curves-have-vertical-or-horizontal-normal-forms
  - lem-simultaneous-smooth-disk-and-primitive-annulus-normalization
  - lem-choice-free-isotopy-extension-for-a-compact-smooth-source
  - thm-parametric-transversality
  - thm-picard-lindelof-local-existence-and-uniqueness
  - thm-smooth-dependence-of-ode-solutions-on-parameters
  - thm-isotopy-extension
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is retained from the original Statement and the solid-torus and simultaneous-system suppliers. It implies countable choice for smooth general position, flow and isotopy extension. No orientability hypothesis on M has been added."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Proposition 1.11 and its proof, printed pp.16–18"
    - title: "Walter Neumann and Gadde Swarup, Canonical decompositions of 3-manifolds"
      url: "https://arxiv.org/pdf/math/9712227"
      locator: "§§2–3, essential annuli and tori in Seifert pieces"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume full AC. Let $M$ be a compact connected irreducible Seifert-fibered $3$-manifold, and let $F\subset M$ be a connected, two-sided essential annulus or torus, neatly embedded at its boundary (the condition is vacuous for a torus). Then $F$ is ambient isotopic to either a vertical surface, meaning a union of regular fibers, or a horizontal surface, meaning a surface transverse to every fiber. For a horizontal surface $F$ with $n$ sheets over the base orbifold $B$ and exceptional-fiber multiplicities $q_1,\ldots,q_m$, the Euler characteristics satisfy
$$
\frac{\chi(F)}{n}=\chi(B)-\sum_{i=1}^m\left(1-\frac1{q_i}\right).
$$
If $F$ is two-sided and horizontal, cutting $M$ along $F$ gives an interval bundle over a surface.

For a smooth boundary-preimage embedding without the neatness condition, the same vertical-or-horizontal normal form is attained by a smooth isotopy of embeddings, fixed on the original boundary during its preliminary neatification, and by a topological ambient isotopy. The Euler count and interval-bundle conclusions apply to the resulting horizontal representative. A smooth ambient isotopy is asserted for the neat inputs above.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Proposition 1.11](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Walter Neumann and Gadde Swarup, *Canonical decompositions of 3-manifolds*](https://arxiv.org/pdf/math/9712227)

## Facts & Assumptions

**Given:** Full AC, the compact connected irreducible smooth Seifert-fibered three-manifold $M$ and the connected two-sided essential annulus or torus $F$, neat for the smooth ambient conclusion and otherwise a smooth boundary-preimage embedding for the final broader variant. The ambient manifold is not assumed orientable.

[A1] Full AC implies countable choice ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] Essentiality, the geometric disk obstructions and the fibered solid-torus models are [[def-incompressibility-seifert-fibration-and-jsj-system]], Definition.

[F2] In a solid torus an incompressible boundary-incompressible proper surface is a meridian disk or a boundary-parallel disk; an embedded torus compresses there ([[lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel]], Statement). Its Proof 1.1 gives the actual smooth ball/disk push with marked rim collars. A two-sided torus in a parametrized smooth ball also compresses there: otherwise [[thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds]], Statement, would inject $\mathbb Z^2$ into the trivial group. This is the compact orientable smooth-ball application of that criterion, not an unproved category change for a PL ball.

[F3] An incompressible proper surface in an irreducible orientable manifold with torus boundary is either boundary-incompressible or a boundary-parallel annulus ([[lem-incompressible-surface-torus-boundary-essential-or-parallel-annulus]], Statement).

[F4] Smooth torus circles and annulus arcs have the finite strip normalizations of [[lem-choice-free-smooth-torus-curves-and-annulus-strips]], Statement. Essential two-sided Klein-bottle circles have the vertical or horizontal normal forms of [[lem-smooth-two-sided-klein-bottle-curves-have-vertical-or-horizontal-normal-forms]], Statement.

[F5] Finite disk systems in a ball or solid torus, primitive vertical-boundary annulus systems, and horizontal meridian-boundary disk systems admit simultaneous smooth normalization, fixing a smaller already common boundary collar ([[lem-simultaneous-smooth-disk-and-primitive-annulus-normalization]], Statement).

[F6] Relative surface general position is [[lem-relative-transversality-for-embedded-surfaces]], Statement; general embedded-submanifold parametric transversality is [[thm-parametric-transversality]], Statement. For boundary faces apply the former in the double of the supplied neat collars. The latter also applies to the one-dimensional fiber cores.

[F7] Compact-source isotopies extend smoothly ([[thm-isotopy-extension]]; [[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]]). The latter's Proof 2.1–4.1 also gives the finite-chart bump and compact-time flow construction. Smooth Euclidean flows and parameter dependence are [[thm-picard-lindelof-local-existence-and-uniqueness]] and [[thm-smooth-dependence-of-ode-solutions-on-parameters]], Statements.

[F8] Compact smooth surfaces with boundary have compatible finite triangulations ([[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]], Statement in dimension two).

[F9] Boundary-fixed smooth embedding neatification has an explicit topological ambient extension and preserves absence of smooth compressing and boundary-compressing disks. Boundary-parallelity is invariant under that extension: a product for the final surface pulls back to a product for the original surface, and conversely. Hence essentiality in the original product sense is retained. [[lem-compact-smooth-boundary-preimage-surfaces-admit-neat-embedding-isotopies]] [[lem-angular-boundary-neatification-preserves-smooth-disk-obstructions]]

## Proof

1.1 For the broader variant first use [F9] to neatify the surface, retaining the disk obstructions and essentiality. Apply the following proof to that neat surface. Concatenate its smooth ambient isotopy with the preliminary smooth embedding isotopy, using stationary time changes at the join; this gives a jointly smooth embedding isotopy. The explicit topological ambient extension of the preliminary path followed by the smooth ambient path supplies the asserted topological ambient alternative. For the main neat-input conclusion no preliminary path is used. On every boundary component the fibration is an ordinary circle bundle over a circle. It has a fiber-preserving smooth identification with a product torus or the standard circle-bundle Klein bottle. To construct it, choose horizontal lifts of the base coordinate in finitely many bundle charts, combine them with a finite bump sum and transport once around the base using [F7]. This gives a circle return diffeomorphism $g$. An increasing angular lift of $g$ is smoothly interpolated to the identity lift when its degree is $+1$; a decreasing lift is smoothly interpolated to $\theta\mapsto-\theta$ when its degree is $-1$. Their derivatives retain their sign. Using this path on a base interval, stationary in endpoint collars, identifies the mapping torus with the product or reflection mapping torus, respectively. Every component of $\partial F$ is essential on its boundary component: an innermost boundary disk would compress $F$, since an annulus or torus is not a disk. Its normal line in $\partial M$ is the restriction of the two-sided normal of $F$, so in the Klein-bottle case it is two-sided. Apply [F4] to make these circles vertical or horizontal in each boundary component, extending the boundary isotopies into collars by [F7]. No orientability of $M$ is used. [F9, A1, F1, F4, F7, given, construct]

2.1 Choose fiber cores $C_i$ containing all exceptional fibers, and choose one regular fiber if that list was empty. Put $F$ transverse to these finitely many curves. Here is the needed codimension-two use of [F6]: choose finitely many supported coordinate vector fields spanning the target tangent spaces near the compact core set; their short flows give a finite parameter family of ambient diffeomorphisms whose evaluation on $F$ is a submersion near every possible core intersection. Away from that neighborhood there are none. Parametric transversality gives a sufficiently small parameter with transverse slice. The path of parameters gives an ambient isotopy, fixed near $\partial M$. Thus there are finitely many intersection points. In each fibered core neighborhood, transversality makes $F$ a finite collection of disk graphs over the meridian plane. Shrink the neighborhood until all these graphs are transverse to the fiber direction, and straighten them to constant core-coordinate meridian disks by graph interpolation. On the finite ordered core coordinates the disks remain disjoint on this small neighborhood; extend in a larger collar by [F7]. All other parts of $F$ are separated from the core neighborhoods by compactness. Consequently $F$ meets each selected small fibered solid torus $N_i$ in horizontal meridian disks, each meeting its core once. [A1, F1, F6, F7, step 1.1, construct]

3.1 Remove the interiors of $N_i$, obtaining a circle bundle $M_0\to B_0$ over a connected compact surface with boundary. Choose finitely many disjoint proper base arcs cutting $B_0$ to one disk, and let $A_j$ be their inverse-image annuli. Cutting $M_0$ along them gives a product solid torus $W=D^2\times S^1$. The finite base cut can be read from a triangulation [F8]: a dual spanning tree first joins its triangles to one polygon, and finitely many polygon side arcs remove its handles and extra boundary components. Choose among all such transverse configurations, with horizontal core disks, normalized outer boundary collars and the displayed base-arc cut, one minimizing lexicographically the number of core intersections and then the number of intersection components with the annuli $A_j$. Only finite integer minima are selected. The neighborhoods and their base-arc end collars may be shrunk again after an isotopy; such a shrink preserves the displayed disk graphs and only appends their already transverse graph strips to the annulus ends, so it creates no new intersection component. Put $F$ transverse to the annuli by [F6]. A circle innermost in an $A_j$ bounds a disk there. It cannot be essential on $F$. Its disk on $F$ and the annulus disk bound a ball by irreducibility. The remainder of $F$ lies outside that ball: for a proper annulus it reaches $\partial M$; for a closed torus, lying inside would put the whole torus in the closed ball. Shrink that parametrized ball a little by [F7] to move the torus into its interior; [F2] then gives a compression, pulled back by the isotopy. The marked disk push from [F2] removes the circle and any further intersections inside the disk on $F$. Its final disk is near the annulus disk and misses all cores, so it decreases the first count or retains it and decreases the second. This contradicts minimality. Thus no circle of $F\cap A_j$ is inessential in $A_j$. [A1, F1, F2, F6, F8, step 2.1, construct]

4.1 An outermost returning arc in an $A_j$ cuts off a disk $D$ with its other edge $\beta$ on a fiber circle of $\partial M_0$. Its interior misses $F$. If its endpoints are on an original boundary component of $M$, essentiality of its edge on $F$ would make it a boundary compression. If that edge is inessential, its ends lie on one boundary circle of $F$. This is also impossible: $D$ lies on one coherent normal side of the two-sided $F$, whereas a fiber interval between successive crossings of one affine horizontal boundary circle approaches opposite sides at its two ends. The same normal-side argument applies on a Klein bottle in its orientation double cover; the boundary lift is horizontal there. If instead $\beta$ lies on $\partial N_i$, it joins two different meridian disks of $F\cap N_i$ by that same argument. In the constant core coordinates of step 2.1, successive crossings along the regular boundary fiber project to successive core-coordinate values. The projected interval has length less than one core period and contains no other intersection with $F$. Its radial ruling in $N_i$ is therefore an embedded strip: the core coordinate is strictly monotone on it, so even an exceptional fiber's meridional winding creates no self-intersection. Join this strip to $D$. This is an embedded bigon between $F$ and a core interval, with interior missing both. The smooth graph bigon move across it cancels the two core intersections, contrary to the first minimum. We have proved that every arc of $F\cap A_j$ spans its annulus. By [F4], straighten these arcs to graphs over the base interval, and straighten the essential circles to fibers. Circles and spanning arcs cannot coexist in one annulus. Extend these moves through small product neighborhoods, retaining the normalized boundary collars. Along spanning arcs the two transverse surface planes force $F$ to be transverse to the fiber; along fiber circles straighten its other tangent to a base direction. Thus near the cut annuli and the outer boundary, $F$ is already horizontal or vertical as appropriate. [A1, F1, F4, F6, F7, step 1.1, step 2.1, step 3.1, construct]

5.1 Let $F_1$ be the surface cut open in $W$. It is incompressible there. Indeed a compressing disk has boundary bounding a disk $D'$ on $F$, by incompressibility in $M$. If $D'$ were contained in $F_1$, it would not be a compression. Otherwise it crosses a cut annulus or a deleted core disk. Its union with the compressing disk bounds a ball by irreducibility. As in step 3.1, the rest of $F$ lies outside; the alternative of a torus inside the ball would itself supply a compression. The smooth disk push replaces $D'$ by a disk in $W$, reducing core intersections or retaining them and reducing annulus intersections. This contradicts the chosen minimum. Every boundary circle of $F_1$ is vertical or horizontal on $\partial W$: the collar models of step 4.1 are already vertical or transverse to the fiber, and their graph parameters agree across the rounded base-disk corners. Such a circle is essential on this torus; in the horizontal case its projection is a local diffeomorphism onto the base boundary circle, so has nonzero degree. [F1, F2, F6, step 3.1, step 4.1, construct]

6.1 Apply [F3] to each component with boundary in the orientable solid torus $W$, then [F2] to a boundary-incompressible component. The alternatives are a meridian disk or a boundary-parallel annulus; a boundary-parallel disk is excluded by the essential boundary circles. Closed torus components are excluded by [F2]. Suppose a boundary-parallel annulus has horizontal boundary. Its parallel boundary annulus contains an interval of a vertical fiber over an original boundary segment of the cut base disk, away from the cut-arc faces. Its product gives a boundary-compressing disk whose boundary edge is that vertical interval. This disk can be made to miss all other components: remove intersection circles using incompressibility of $F_1$ and disk replacement; an edgemost remaining arc nearest that interval cuts off a disk with interior missing $F_1$. Its vertical boundary edge lies on one component of $\partial M_0$. The exact argument of step 4.1 now gives either a forbidden boundary compression or a cancellation of two core intersections. Thus horizontal-boundary parallel annuli do not occur. The remaining annuli have vertical boundary. A disk cannot have vertical boundary, since a product fiber generates $\pi_1(W)$ and does not bound a disk there. Thus the remaining disks have horizontal boundary. [A1, F1, F2, F3, step 4.1, step 5.1, construct]

7.1 A vertical circle on $\partial W$ and a horizontal circle have nonzero algebraic intersection, equal up to sign to the latter's nonzero base degree. Disjoint boundary circles cannot have both types. Thus $F_1$ consists entirely of vertical-boundary annuli or entirely of horizontal-boundary disks. In the first case apply [F5](b), and in the second apply [F5](c). All boundary and cut-face collars were already of the corresponding type, so choose the target product/graph systems to agree on smaller collars and retain them in the simultaneous isotopies. The maps then reglue smoothly across each cut annulus and agree with the identity in the deleted core neighborhoods. The vertical case has no core disks, since their boundary would be horizontal; it yields a union of regular fibers. In the horizontal case those unchanged core disks are already transverse to every fiber in $N_i$, so the reglued whole surface is horizontal. Every step used an actual smooth ambient isotopy; stationary time changes at the finite joins give joint smoothness, including the parameter endpoints. This proves the alternative in the original ambient category, also when $M$ is nonorientable. [A1, F1, F4, F5, F7, step 2.1, step 4.1, step 6.1, construct]

8.1 For a horizontal $F$, its proper local projection off the exceptional points is a finite cover, with constant positive sheet count $n$ since the base is connected. In the fibered solid-torus model a transverse meridian disk projects to a disk by the order-$q_i$ branched map; hence there are $n/q_i$ preimages over the $i$th exceptional point. Triangulate the underlying base by [F8], including those finitely many marked points by a local subdivision, and lift it. Every ordinary cell has $n$ lifts; only the marked vertices have $n/q_i$ rather than $n$ lifts. The finite alternating count gives $$\chi(F)=n\chi(B)-\sum_i(n-n/q_i),$$ as claimed. Finally cut the fibers at their intersections with $F$. Over an ordinary chart the resulting segments form product interval charts. Near an exceptional fiber use its finite cyclic model: the action permutes the lifted cut segments freely, so the quotient of each segment chart is again a disk times an interval, not an orbifold interval chart. These charts paste along whole segment fibers, possibly reversing their interval coordinate, and supply an interval bundle on the cut-open manifold. Two-sidedness provides its two boundary copies of $F$. No orientability assumption on $M$ is needed for this interval-bundle conclusion. [F1, F7, F8, step 7.1, construct] ∎
