---
id: lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel
kind: lemma
title: "Essential surfaces in a solid torus are meridian disks"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - thm-compact-topological-three-manifolds-admit-finite-pl-triangulations
  - thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds
  - thm-seifert-van-kampen
  - thm-normal-form-for-free-products-with-amalgamation
  - thm-hnn-normal-form-theorem
  - thm-fundamental-group-of-the-circle
  - thm-fundamental-group-of-a-product
  - lem-compact-smooth-boundary-preimage-surfaces-admit-neat-embedding-isotopies
  - lem-angular-boundary-neatification-preserves-smooth-disk-obstructions
  - def-incompressibility-seifert-fibration-and-jsj-system
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
  - thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds
  - lem-relative-smooth-mapping-classes-of-annulus-and-torus
  - lem-smooth-sphere-diffeomorphisms-extend-over-balls
  - lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms
  - lem-gluing-irreducible-smooth-three-manifolds-across-injective-annuli
  - lem-relative-transversality-for-embedded-surfaces
  - thm-isotopy-extension
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The original full AC hypothesis is retained and implies countable choice for the smooth general-position and Schoenflies suppliers. The smooth Loop criterion and new finite relative isotopy suppliers are choice-free. Full AC is also the explicit premise of the TOP cut-piece finite triangulation used in F10."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Example preceding Lemma 1.10, printed pp.14–15"
    - title: "Walter Neumann and Gadde Swarup, Canonical decompositions of 3-manifolds"
      url: "https://arxiv.org/pdf/math/9712227"
      locator: "§2, cut-and-paste of incompressible annuli and tori"
---

## Statement

Assume full AC. Let $V=S^1\times D^2$ be a solid torus. Every connected, two-sided, properly embedded incompressible and boundary-incompressible surface $F\subset V$ with nonempty boundary is a disk, either a meridian disk or a boundary-parallel disk. In particular, if $F$ is not boundary-parallel, it is a meridian disk. Any two smooth meridian disks with the same boundary admit a smooth isotopy of embeddings relative to that boundary, with a boundary-fixing topological ambient extension. If both disks are neat, this can be a smooth ambient isotopy relative to the boundary. In addition, every two-sided embedded torus $T\subset\operatorname{int}V$ has a compressing disk in $V$.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Example preceding Lemma 1.10](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Walter Neumann and Gadde Swarup, *Canonical decompositions of 3-manifolds*](https://arxiv.org/pdf/math/9712227)

## Facts & Assumptions

**Given:** Full AC, the standard smooth solid torus $V$, the connected two-sided proper surface $F$ with nonempty boundary and the two disk-obstruction hypotheses; and, for the last assertion, an embedded two-sided torus $T$ in its interior.

[A1] Full AC is [[def-axiom-of-choice]] and implies countable choice ([[thm-choice-implies-dependent-implies-countable-choice]], Statement; [[def-countable-choice]]).

[F1] The disk obstructions and product definition of boundary-parallelity are [[def-incompressibility-seifert-fibration-and-jsj-system]], Definition.

[F2] Every smooth sphere in $S^3$ bounds smooth balls on both sides ([[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]], Statement).

[F3] A smooth sphere boundary map extends over parametrized balls, as a product in their smaller boundary collars ([[lem-smooth-sphere-diffeomorphisms-extend-over-balls]], Statement). Smooth disk boundary maps extend retaining prescribed collars ([[lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms]], Statement).

[F4] Essential torus circles in the same primitive class admit smooth finite bigon reductions and parallel-strip parameters ([[lem-relative-smooth-mapping-classes-of-annulus-and-torus]], Proof 1.1–2.1). Disk pushes across a ball have a smooth cap sweep with fixed boundary circle, explicitly parametrized in [[lem-gluing-irreducible-smooth-three-manifolds-across-injective-annuli]], Proof 3.1.

[F5] Finite relative general position and smooth ambient extension are [[lem-relative-transversality-for-embedded-surfaces]] and [[thm-isotopy-extension]], Statements.

[F6] For a compact two-sided neat surface in a compact orientable smooth three-manifold, geometric incompressibility is equivalent to injectivity on fundamental groups ([[thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds]], Statement).

[F9] Boundary-fixed smooth embedding neatification, its explicit topological ambient extension and the smooth disk-obstruction transport retain both classification hypotheses. A neat input admits a smooth ambient extension; a broad input has only the stated topological ambient extension at its original tangencies. [[lem-compact-smooth-boundary-preimage-surfaces-admit-neat-embedding-isotopies]] [[lem-angular-boundary-neatification-preserves-smooth-disk-obstructions]]

[F10] Full AC gives a finite PL triangulation of every compact TOP cut piece, with its entire boundary triangulated. The finite PL Loop theorem applies to a connected boundary component with nontrivial inclusion kernel; transporting its proper disk through that triangulation gives a TOP disk in the original piece. [[thm-compact-topological-three-manifolds-admit-finite-pl-triangulations]] [[thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds]]

[F11] Connected-overlap van Kampen and amalgam normal form embed an injected common torus group. For a connected cut piece with two faces, the same collar van Kampen calculation gives the HNN presentation; its normal form embeds the vertex group and its associated subgroups, with transversals supplied by full AC. The torus group is $\mathbb Z^2$ and the standard solid-torus group is $\mathbb Z$. [[thm-seifert-van-kampen]] [[thm-normal-form-for-free-products-with-amalgamation]] [[thm-hnn-normal-form-theorem]] [[thm-fundamental-group-of-the-circle]] [[thm-fundamental-group-of-a-product]]

## Proof

1.1 The solid torus is irreducible. Embed it as a standard unknotted solid torus in $S^3$. A sphere in its interior has two ball sides by [F2]. Its exterior solid torus is connected and misses the sphere, so lies entirely on one side; the other ball is contained in $V$. We will use the following disk-push consequence with its smooth interpretation. If two smooth disks meet just along their common boundary and bound such a ball, their faces admit a common-boundary disk sweep through the ball. To retain the actual faces, take a thin rim collar first. At a transverse rim its normal section is a quadrant; at a previously shared collar first separate the two faces by a small normal graph. Parametrize the two faces by smooth disks with their prescribed rim collars, using [F3]. Round and truncate the rim; the remaining boundary is a smooth sphere with these marked disk and collar portions. The two disk maps and the intervening product annulus give a smooth boundary diffeomorphism to the corresponding standard rounded lens; [F3] extends it over the ball. Restore the quadrant rim using those same product collars. This gives a lens parameter retaining both faces and their rim coordinates. In this parameter use [F4]'s spherical-cap sweep; in the rim section its inward tangent runs between the two face tangents and stays nonzero. The sweep is jointly smooth, including at the disk center, by [F4]'s displayed formulas. It can be continued just past either face in its normal collar and extended ambiently by [F5]. If another surface misses the ball except in one face, the push removes that face's intersections and creates none. The support can be restricted to the ball and arbitrarily thin face and rim collars. [A1, F2, F3, F4, F5, given, construct]

2.1 For the classification first replace $F$ by its neat representative using [F9]; both disk-obstruction hypotheses pass to it. Its boundary and abstract surface are unchanged. The topological ambient extension pulls a boundary-parallel product back to the original surface, and no smooth product at an original tangency is asserted. In the rest of the classification denote this neat representative again by $F$. The surface $F$ is compact, since its inclusion is proper and $V$ is compact, and it is orientable, since it is two-sided in oriented $V$. If some component $c$ of $\partial F$ is nullhomotopic on $\partial V$, choose one with an innermost boundary disk $Q$ whose interior misses all of $\partial F$. A short inward push gives a disk with boundary $c$ on $F$ and interior disjoint from $F$. If $F$ is not a disk, $c$ is essential on $F$: a boundary circle of a connected surface can bound a disk in that surface only when that disk is the entire surface, by the local half-disk charts and connectedness. The pushed disk would therefore compress $F$. Thus in this case $F$ is a disk. For the rest of the classification suppose $F$ is not a disk; then every boundary circle is essential on $\partial V$. Disjoint essential circles on a torus have the same primitive unoriented slope, as the strip reductions of [F4] show. Use those reductions for the finite family and extend into a boundary collar by [F5] to make them parallel affine circles in coordinates $(\mu,\phi)\in(\mathbb R/\mathbb Z)^2$, where $\phi$ is the longitude coordinate of $V$. If the slope is meridional, choose a standard meridian disk $D_0$ with boundary disjoint from them. Otherwise the affine circles have nonzero $\phi$ derivative and meet $\partial D_0=\{\phi=0\}$ transversely. [F9, F1, F4, F5, step 1.1, construct]

3.1 Put the interiors of $F$ and $D_0$ in finite transverse position. An innermost intersection circle on $D_0$ bounds a disk $D$ with interior missing $F$. Incompressibility makes its boundary bound a disk $D'$ on $F$. The sphere $D\cup D'$ bounds a ball in $V$ by step 1.1, with the corner interpreted there. The connected surface $F\setminus\operatorname{Int}D'$ reaches $\partial V$, misses the sphere off its rim, and hence lies on the exterior side of that ball. The disk push of step 1.1 replaces $D'$ by a disk just past $D$. It removes this circle and any additional circles in $D'$, and creates none. After finitely many pushes no circle remains. The isotopies have interior support and retain the normalized boundary curves. [F1, F5, step 1.1, step 2.1, construct]

4.1 Suppose an intersection arc remains. An outermost arc $\alpha$ cuts off a disk $D$ in $D_0$, with other boundary arc $\beta\subset\partial D_0$ and interior missing $F$. Boundary-incompressibility implies that $\alpha$ cuts off a disk $D'$ on $F$, with other boundary arc $\gamma$ contained in one component of $\partial F$. If the slope were meridional there would be no arc endpoints, by the chosen disjoint boundaries. Otherwise $\gamma$ is a nonconstant subarc of an affine boundary circle whose longitude coordinate is strictly monotone on its lift. Both its endpoints have $\phi=0$, so its lifted longitude displacement is a nonzero integer. But $\beta$ has constant longitude. The union $D\cup D'$, pushed a little along its common edge if necessary, gives a continuous disk cap for the loop $\beta\cup\gamma$ in $V$. Its longitude degree would therefore be zero, contradicting that nonzero integer. Thus there are no arcs. If the slope were nonmeridional, the affine boundary curves would necessarily meet $\partial D_0$, so this case is impossible. We have made $F$ disjoint from $D_0$. Cutting $V$ along $D_0$ leaves a ball. An innermost boundary circle of $F$ on its boundary sphere has a disk there with interior missing all boundary circles of $F$. Push it inward. Unless $F$ is a disk it is a compressing disk, by the boundary-circle argument of step 2.1. This contradicts our supposition that $F$ was not a disk. [F1, step 2.1, step 3.1, construct]

4.2 Let $D_1,D_2$ be meridian disks with the same boundary $C$. If either disk is not neat, first neatify each separately by [F9], fixing $C$. Apply the following neat-disk argument and then reverse the second embedding path. This gives a smooth embedding isotopy for the broad inputs; their two explicit topological ambient extensions and the middle smooth ambient path give a topological ambient extension. For neat inputs no preliminary change is necessary, and the entire argument below is smooth ambient. Now suppose both disks neat. In coordinates along $C$, use a small normal graph to separate their interior collars while fixing $C$ pointwise: with inward boundary coordinate $q\ge0$ and a transverse coordinate $y$ on $\partial V$, the two collars can be arranged as $y=\pm\varepsilon q$ on a common smaller strip. First each neat disk is straightened to such a graph by its full-rank collar coordinates; interpolation of the positive inward derivative gives an embedding path on a common compact strip, extended by [F5]. This keeps every boundary point fixed. General position relative to those collars then leaves only finitely many interior intersection circles. An innermost one on $D_1$ and its subdisk on $D_2$ bound a ball by irreducibility. The complement of that subdisk in $D_2$ reaches $C$ outside the ball, so the disk push from step 1.1 removes the circle and any circles inside that subdisk. Repeat until the interiors are disjoint. The resulting disks bound a ball with rim $C$, again by step 1.1 after the rim is rounded. Its common-boundary cap sweep carries one disk to the other, fixing $C$ throughout; at the rim every intermediate tangent is an inward direction between the two collar tangents, so the family remains neat in $V$. Undo the preliminary isotopies of $D_2$ and concatenate with stationary time changes. This gives a jointly smooth isotopy relative to $C$; The velocity vanishes on $C$ throughout this neat path. In a neat boundary chart it is $q$ times a smooth coefficient, as in [F9] and its neatification supplier Proof 5.2. Extend that coefficient and retain the factor $q$; the finite compact flow gives a smooth ambient isotopy fixing all of $\partial V$, not only $C$. [F9, A1, F2, F3, F4, F5, step 1.1, step 3.1, construct]

5.1 We have proved that $F$ is a disk. If $\partial F$ is essential on $\partial V$, it is a primitive class in the kernel of $\pi_1(\partial V)=\mathbb Z\mu\oplus\mathbb Z\phi\to\pi_1(V)=\mathbb Z\phi$, since $F$ caps it. It is therefore $\pm\mu$, so $F$ is a meridian disk. If $\partial F$ is inessential, let $Q$ be its disk on $\partial V$. The sphere $F\cup Q$, pushed slightly into the interior and rounded, bounds a ball there. Restore the boundary collar as in step 1.1 to get a ball with these two disk faces. Its marked lens parameter gives the boundary-parallel product: extend $Q$ a short distance beyond its rim in $\partial V$ and retain a smaller collar on $F$; in the normal section the two disk faces are separated by a rectangle, with its outer edge on $\partial V$. The lens parameter away from that rim and this rectangle near it identify the region with $D^2\times[0,1]$, with $D^2\times\{0\}=F$ and the other disk and lateral annulus in $\partial V$. Thus $F$ is boundary-parallel in exactly [F1]'s product sense. Conversely a boundary-parallel disk has no essential circle or essential proper arc, so it does satisfy both disk-obstruction hypotheses; this is why it must be retained in the conclusion. [F1, F3, step 1.1, step 4.1, algebra]

6.1 Finally allow the torus $T\subset\operatorname{Int}V$ to be TOP two-sided with its given product neighborhood, without assuming it smooth. Cut along that TOP collar. The cut pieces are compact orientable TOP3-manifolds; there are either two connected pieces with one torus face each, or one connected piece with two torus faces. Indeed every piece meets a face, and each face is connected. If any face map has nontrivial fundamental-group kernel, [F10] gives a proper disk in that cut piece whose boundary has nontrivial class on the face. Its image in $V$ is an embedded TOP compression of $T$ contained in $\operatorname{Int}V$, since its interior misses every cut boundary face and its boundary lies on only the chosen copy of $T$. Suppose therefore all face maps inject. In the two-piece case, [F11] embeds $\pi_1(T)$ in their amalgam $\pi_1(V)$. In the one-piece case choose a path in the cut piece joining the two face basepoints. Adjoining a thin copy of this path to the collar makes its overlap connected; van Kampen gives the presentation $\langle\pi_1(W),t\mid t i_+(a)t^{-1}=i_-(a),\ a\in\pi_1(T)\rangle$. One torus-overlap group maps to the collar's torus group and the other to its conjugate by the new path letter, which is exactly the displayed HNN relation. The two injected face groups are its associated subgroups, so HNN normal form [F11] again embeds $\pi_1(T)$ in $\pi_1(V)$. Both alternatives would inject $\mathbb Z^2$ into $\mathbb Z$, impossible: if the two basis images are $a,b$, then $(b,-a)$ is a nonzero kernel vector when either image is nonzero, and otherwise the whole group is the kernel. Thus some face kernel is nontrivial and the TOP compression exists. This closes the original unqualified torus clause without converting its input or its resulting disk to the smooth category. The preceding smooth classification and meridian-isotopy arguments are unchanged; their original convention/disposition remains owned by the parent assembly. [A1, F1, F10, F11, construct, algebra]
