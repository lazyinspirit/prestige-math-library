---
id: lem-finite-injective-surface-hierarchies-give-aspherical-pieces-and-annulus-map-control
kind: lemma
title: "Finite injective surface hierarchies give aspherical pieces and annulus map control"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-finite-pl-irreducible-boundary-manifolds-admit-super-hierarchies
  - lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity
  - lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks
  - thm-universal-cover-existence
  - thm-homotopy-lifting-for-covering-maps
  - thm-covering-maps-inject-fundamental-groups
  - thm-long-exact-sequence-of-relative-homotopy-groups
  - lem-vanishing-relative-homotopy-extends-a-homotopy-inverse-over-successive-cells
  - prop-relative-cw-inclusions-are-cofibrations
  - thm-whitehead-theorem
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf
      locator: "§1.B, printed90–95, full Proposition1B.9 proof and graph-of-groups Theorem1B.11 construction/proof read. The locally finite geometric version and relative annulus criterion are proved below."
---

## Statement

Assume full AC. Let $M$ be a compact oriented finite PL three-manifold with a supplied finite hierarchy whose cuts are connected two-sided compact proper finite PL surfaces with nonempty boundary and injective face and piece groups, and whose final pieces are parametrized PL balls. In particular this applies to the hierarchy in [[thm-finite-pl-irreducible-boundary-manifolds-admit-super-hierarchies]]. Every manifold piece in the hierarchy has contractible universal cover.

For any connected two-sided injective proper finite PL cut $F$ with nonempty boundary in one of these pieces, whether or not it is a cut of the supplied hierarchy, in the universal cover $X$ of that piece the graph dual to the lifts of $F$ is a tree. A vertex is a component of the cut-open $X$ and an edge is a connected lift of $F$. The deck group acts without inversions; vertex stabilizers are the conjugate current cut-piece groups and edge stabilizers are the conjugate surface groups. Those surface groups are finite-rank free groups, so every abelian subgroup of an edge stabilizer is cyclic.

The following map-control conclusion will also be used. Let $C$ be any such aspherical piece, and let $Q\subset C$ be a connected injective annulus or torus. For a continuous map $f:S^1\times I\to C$ whose boundary circles lie in $Q$, choose the transverse interval $\gamma=f(\{1\}\times I)$. If $\gamma$ is homotopic relative its endpoints to a path in $Q$, then $f$ is homotopic into $Q$ with its boundary maps pointwise fixed. This is a conclusion about the given map, not merely the existence of another annulus with essential boundary.

## Facts & Assumptions

**Given:** The actual finite PL hierarchy, its face collars and injections, and the annulus-map data in the Statement.

[F1] The hierarchy exists for the indicated irreducible finite PL inputs; all its face and piece injections are actual. [[thm-finite-pl-irreducible-boundary-manifolds-admit-super-hierarchies]] [[lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity]]

[F2] A compact oriented finite PL surface with boundary has a finite graph spine, by the explicit triangle-collapse proof; a nondisk boundary circle has injective infinite cyclic group. [[lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks]]

[F3] Universal covers exist and lift homotopies; each connected lifted subspace with injective fundamental group has simply connected covering components. [[thm-universal-cover-existence]] [[thm-homotopy-lifting-for-covering-maps]] [[thm-covering-maps-inject-fundamental-groups]]

[F4] Relative homotopy exactness and cellular compression make a contractible CW complex strongly deformation retract onto any nonempty contractible CW subcomplex. Indeed the relative groups vanish, and the stated cellular compression fixes that whole subcomplex. CW pairs have homotopy extension; a weakly contractible CW complex is contractible under AC. [[thm-long-exact-sequence-of-relative-homotopy-groups]] [[lem-vanishing-relative-homotopy-extends-a-homotopy-inverse-over-successive-cells]] [[prop-relative-cw-inclusions-are-cofibrations]] [[thm-whitehead-theorem]]

## Proof

1.1 A cutting surface retracts to its finite graph spine by [F2]. Lift that deformation retraction to its universal cover by [F3]. The graph cover is a tree: a reduced nonempty edge path cannot close in the graph's reduced-path cover, whose vertices are edge paths with immediate inverse pairs cancelled. Its rooted geodesics contract it. Thus the universal cover of every cutting surface is contractible. Its group is the finite-rank free edge-path group. For later use, a nontrivial element of a free group acts on the reduced-word tree by a translation on its unique bi-infinite axis: cyclically reduce its word, and concatenate that cyclic word in both directions, adding the conjugating stem. For a vertex at distance $r$ from that line, the unique tree path to its translate has length $2r+\ell$, where $\ell>0$ is the cyclic word length; it goes to the line, along it, and back out. Thus the line is precisely the minimum-displacement set and is unique. A commuting element preserves this axis and acts on it by a translation, since a reflection would conjugate the nonzero translation to its inverse. The displacement homomorphism of the centralizer into the integer translations is injective: an element of the free group fixing an axis vertex fixes a vertex of its free tree action and is identity. Hence every abelian subgroup containing that element embeds in $\mathbb Z$ and is cyclic: a nonzero subgroup of the integers is generated by its least positive member. The trivial subgroup is cyclic as well. [F2, F3, given, construct, algebra]

2.1 For one cut, take the universal cover $X$ of the current manifold. Compatible finite collar triangulations lift to a locally finite triangulation. A lift of $F$ is connected and simply connected by the assumed injection and [F3], and has a two-sided collar. It separates $X$: otherwise a path in its complement joins its two collar sides and closes to a loop crossing that lift once. Mod-two crossings define a cocycle on a compatible subdivision, since every triangle has an even number of transverse boundary crossings; that loop has evaluation one, impossible in simply connected $X$. The components of the complement and these separating lifts form a connected dual graph: a path in $X$ between two points can be made transverse to finitely many lifts and reads a finite dual walk. A cycle would cross one of its separating lifts once, also impossible. Thus the dual graph is a tree. [F1, F3, step 1.1, given, construct]

3.1 A deck transformation stabilizes a lifted cut component precisely when its class is represented by a loop in the corresponding downstairs piece: lift such a loop from a point of that component, and conversely join that point to its translate inside the component. This identifies the stabilizer with the conjugate piece group. The same argument applies to a lifted surface and its group. No inversion is possible because deck transformations preserve the lifted globally chosen normal coordinate of the two-sided surface. Moreover each lifted piece is the universal cover of that piece by its injection and [F3]. This proves the tree action and stabilizer assertions, including their base-path conjugacies. [F1, F3, step 2.1, given, construct]

4.1 Prove contractibility by backward induction over the supplied finite hierarchy. The terminal balls have contractible covers. At the next gluing, each vertex space of the universal cover is contractible by induction; each edge space is the contractible surface cover from step1.1, with its product cylinder. For a finite subtree of this tree of spaces, retract a leaf vertex and its incident cylinder to the attachment in the remaining subtree. The attachment is a contractible CW subcomplex of a contractible lifted vertex, so [F4] gives the required strong deformation retraction; the cylinder retracts along its interval. It fixes the rest of the union. Removing finitely many leaves shows that every finite subtree union is contractible. A compact map into $X$ meets only finitely many lifted pieces: the lifted collar system is locally finite, and a finite subcover of its compact image gives this assertion. Add the finitely many intervening edges to obtain a finite subtree containing that image. Thus every sphere map into $X$ is nullhomotopic there. The connected CW complex $X$ is weakly contractible, hence contractible by [F4]. This supplies the induction step for every finite gluing, including a pair of faces of the same piece. [F1, F3, F4, step 1.1, step 2.1, step 3.1, given, induction]

5.1 Now consider the given annulus map $f$ into $C$. Cut its domain along the chosen transverse interval, obtaining a square. Its boundary word is $\alpha_0\gamma\alpha_1^{-1}\gamma^{-1}$, where the two $\alpha_i$ are the actual boundary maps with a common traversal convention. Let $\delta$ be a path in $Q$ homotopic to $\gamma$ relative endpoints. This square shows that $\alpha_0\delta\alpha_1^{-1}\delta^{-1}$ is nullhomotopic in $C$. By injectivity of $Q$, it is nullhomotopic in $Q$. Choose such a disk filling there, and identify its two equally parametrized $\delta$ sides. This gives an annulus map $k$ into $Q$ with the same pointwise boundary maps as $f$ and transverse path $\delta$. [given, step 4.1, construct, algebra]

6.1 Use the specified homotopy $\gamma\simeq\delta$ on the transverse interval and keep both boundary circles fixed. The homotopy extension property in [F4] extends it over the annulus, giving $f'$ which agrees with $k$ on its entire one-skeleton. On the remaining two-cell, the fillings by $f'$ and $k$, with their common boundary, define a sphere map into $C$. Its class in $\pi_2(C)$ is zero by step4.1, so its nullhomotopy gives a homotopy between those disk fillings relative boundary. Equivalently this is the filling of the boundary of the two-cell prism. Paste it to the fixed one-skeleton homotopy. The resulting homotopy from the original $f$ to $k$ fixes both actual boundary loops throughout. This proves the exact annulus-map criterion and all conclusions. [F4, step 4.1, step 5.1, given, construct] ∎

## Scope

The annulus-map criterion requires control of the given transverse path. An embedded annulus with possibly different boundary words is not a substitute for that control. No pared axiom is an assumption of the asphericity argument, which uses the already proved finite hierarchy.
