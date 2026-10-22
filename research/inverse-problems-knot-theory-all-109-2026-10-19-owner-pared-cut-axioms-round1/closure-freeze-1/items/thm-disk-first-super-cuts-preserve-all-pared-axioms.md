---
id: thm-disk-first-super-cuts-preserve-all-pared-axioms
kind: theorem
title: "Disk-first super cuts preserve all pared axioms"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-pared-hyperbolic-structures-and-volume
  - lem-minimal-annular-boundary-cuts-have-embedded-peripheral-lift-trees
  - lem-finite-injective-surface-hierarchies-give-aspherical-pieces-and-annulus-map-control
  - lem-finite-super-hierarchies-carry-annular-torus-and-square-cut-data
  - thm-finite-pl-irreducible-boundary-manifolds-admit-super-hierarchies
  - lem-finite-pl-irreducible-manifolds-admit-finite-boundary-disk-decompositions
  - lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity
  - lem-finite-pi1-injective-surface-cuts-preserve-three-manifold-irreducibility
  - thm-homotopy-lifting-for-covering-maps
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Michael Kapovich, Hyperbolic Manifolds and Discrete Groups"
      url: https://www.math.ucdavis.edu/~kapovich/RFG/book.pdf
      locator: "Actual§1.5/PDF31 and Chapter15 Theorems15.2–15.3/PDF367–368 fully read. The boundary convention and deletion of contractible pieces are retained; the two full pared axioms after cutting are proved below rather than assumed from the word pared."
    - title: "Allen Hatcher, Algebraic Topology"
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf
      locator: "Full§1.B Proposition1B.9 proof and Theorem1B.11 graph-of-spaces proof, printed90–95 read; actual covering/tree and given-annulus-map control are proved in the local suppliers."
---

## Statement

Assume full AC. Let $(M,P)$ be a pared pair in the exact sense of [[def-pared-hyperbolic-structures-and-volume]], in a supplied compact connected oriented finite PL three-manifold with nonempty boundary. Embedded spheres, irreducibility and ball parameters are interpreted in this supplied PL category. Let $F$ be a connected compact oriented two-sided proper locally flat PL surface with nonempty boundary, an injective fundamental group and essential boundary circles. Put $\partial F$ in the actual parallel-boundary placement and constrained minimum of [[lem-finite-super-hierarchies-carry-annular-torus-and-square-cut-data]]. Suppose either:

* $F$ is an essential disk; or
* $F$ is not a disk, every boundary component of $M$ injects on fundamental groups, and $F$ has no boundary-compressing disk with essential proper surface arc.

Cut along $F$ and form $P'$ by retaining the actual annuli and tori of $P\mathbin{\|}\partial F$ and removing its contractible rectangular components from that marking, with all square gluing data still recorded. Then each resulting pair $(C,Q)$, where $Q$ is the part of $P'$ on $\partial C$, satisfies ALL pared axioms in the cited Definition:

1. $C$ is compact, oriented and irreducible, and $Q$ consists of injective annuli and tori.
2. Every noncyclic abelian subgroup of $\pi_1C$ is conjugate into the group of a component of $Q$.
3. EVERY injective continuous annulus map of pairs into $(C,Q)$ is homotopic through maps of pairs into $Q$. Indeed its two actual boundary maps can be kept pointwise fixed.

No pared property of a cut target is an assumption. No nonparallel-component convention, all-torus-boundary clause, discrete faithful representation, or geometric finiteness is added. Consequently the previously constructed finite disk-first super hierarchy of any such $(M,P)$, with its actual normalized annuli/tori/square data, is a finite hierarchy of pared pairs ending in balls with empty marking. This supplies pared-cut preservation, not a relative Waldhausen/Johannson marking theorem or analytic hyperbolization.

## Facts & Assumptions

**Given:** The actual finite PL pared pair and one of the two cutting-surface branches in the Statement.

[F1] The exact original pared axioms include capture of every noncyclic abelian subgroup, and the homotopy-through-maps-of-pairs condition for every injective annulus map. Boundary points may move within $P$ during such a homotopy; pointwise relative boundary is not assumed. [[def-pared-hyperbolic-structures-and-volume]]

[F2] The actual cut geometry gives annuli/tori/rectangles, injectivity of every retained marking component, all square maps and preserved coherent complexity. Cutting an injective two-sided surface preserves irreducibility and injects the piece groups. [[lem-finite-super-hierarchies-carry-annular-torus-and-square-cut-data]] [[lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity]] [[lem-finite-pi1-injective-surface-cuts-preserve-three-manifold-irreducibility]]

[F3] On a boundary-injective nondisk branch, every connected peripheral lift has an actual embedded invariant subtree in the surface cut tree, and its vertex stabilizers are exactly the groups of the annular/torus/rectangular cut regions. [[lem-minimal-annular-boundary-cuts-have-embedded-peripheral-lift-trees]]

[F4] All the irreducible finite PL pieces with boundary have actual finite injective super hierarchies ending in balls, and hence contractible universal covers. The cut tree has free surface edge stabilizers, all of whose abelian subgroups are cyclic. A given annulus map into a piece can be homotoped relative its actual boundary maps into an injective annulus/torus once its actual transverse path is homotopic into that component. [[thm-finite-pl-irreducible-boundary-manifolds-admit-super-hierarchies]] [[lem-finite-injective-surface-hierarchies-give-aspherical-pieces-and-annulus-map-control]]

[F5] The hierarchy uses essential disks when available; otherwise the boundary-disk-ball property and injectivity of the boundary hold. This is the actual disk-first selection in the hierarchy proof, using the supplied disk-decomposition result. [[thm-finite-pl-irreducible-boundary-manifolds-admit-super-hierarchies]] [[lem-finite-pl-irreducible-manifolds-admit-finite-boundary-disk-decompositions]]

[F6] Homotopies lift uniquely through covers, with the prescribed initial lift. A map from a contractible square lifts by applying this to its contraction from a point. [[thm-homotopy-lifting-for-covering-maps]]

## Proof

1.1 By [F2] the cut pieces are compact oriented irreducible finite PL manifolds with nonempty boundary; their groups inject into $\pi_1M$, and their retained marking components are actual injective annuli or tori. They satisfy the input of the finite hierarchy theorem in [F4], independently of any new pared property, so their universal covers are contractible. Let $X\to M$ be the universal cover, $T$ the actual dual cut tree, and $X_v$ a lifted cut component, with stabilizer $H_v$. The group and lift identifications are those of [F4], with finite base paths understood. This establishes the first pared axiom and the homotopy input needed later, without assuming the other two cut axioms. [F2, F4, given, construct]

2.1 In the disk branch every retained marking component is a WHOLE old component of $P$ disjoint from the disk. Indeed the disk boundary cannot meet an old torus component: it would then be an essential circle on that entire boundary torus, nullhomotopic in $M$, contrary to its injection. In an annular component of $P$, the minimal-position alternatives in [F2] are cores or spanning arcs. A closed core would be the entire disk boundary and represent a nontrivial peripheral element, again contradicting its disk nullhomotopy. Thus an annulus is either disjoint from the disk and retained whole, or cut into rectangles only. A lift $L$ of any retained old component lies wholly in a single $X_v$. Its stabilizer is its original peripheral group, fixing that vertex; its intersection there is connected. The disk edge stabilizers are trivial. [F1, F2, F4, step 1.1, given, construct]

2.2 In the nondisk branch [F3] applies with all its actual hypotheses. For every peripheral lift $L$ let $S_L\subset T$ be its embedded subtree, invariant under the original peripheral group $G_L$. For a vertex $w$ of $S_L$, the intersection $L\cap X_w$ has exactly one region $R_w$, and $$G_L\cap H_w=\operatorname{Stab}(R_w).$$ This is the conjugate group of the corresponding actual annulus, torus or rectangle. A torus region occurs only when its old torus was uncut; in that case $S_L$ is that single vertex. Thus all required subgroup intersections have been proved geometrically, rather than posited as a peripheral graph. [F3, step 1.1, given, construct]

2.3 Let $f:(S^1\times I,S^1\times\partial I)\to(C,Q)$ be ANY map meeting the injectivity requirement of the pared axiom. Compose it with the piece inclusion into $M$; it remains injective by [F2], and its boundary maps lie in the old $P$. The original pared axiom [F1] supplies a homotopy of THIS map through maps of pairs into $P$. Parametrize the annulus by a square with its two vertical sides identified. Lift the square of the initial map to $X$, choosing its image in $X_v$ because it lies in $C$; this lift exists by [F6]. Lift the entire supplied homotopy from that initial lift. Each of the two chosen endpoint tracks of the transverse interval stays in its initial connected component of the inverse image of $P$. At final time the whole connected square maps into one peripheral lift $L$. Therefore both initial endpoint components were this same $L$. This uses the actual homotopy and allows its boundary tracks to move, exactly as permitted by the original Definition. [F1, F2, F6, step 1.1, given, construct]

3.1 Both endpoints lie in $X_v\cap L$. In the nondisk branch step2.2 and the embedded subtree imply that they lie in the SAME connected lifted cut region $R_v$, since two different regions cannot map to the same global vertex. In the disk branch their old peripheral component must be retained, and step2.1 gives the same conclusion with $R_v=L$. Choose a path in $R_v$ between these endpoints. The lift of the original transverse path is in the simply connected $X_v$, so it is homotopic relative endpoints to this chosen path. Projecting gives a homotopy of the original transverse path into the single component of $Q$ represented by $R_v$. In particular the two original boundary loops lie in that same component. [F3, F4, step 2.1, step 2.2, step 2.3, given, construct]

3.2 Let $A\le H_v$ be any noncyclic abelian subgroup, with no finite-generation restriction. Through the piece injection regard it as a subgroup of $\pi_1M$. The original capture axiom puts it in the stabilizer $G_L$ of a suitable peripheral lift $L$, after the allowed base-path conjugacy. In the nondisk branch it preserves $S_L$ and fixes $v$. A nonempty subtree of a tree has a unique closest vertex to any given vertex: existence follows by minimizing the nonnegative integer path length, and two distinct nearest vertices would give two different paths in a tree. This projection is equivariant under automorphisms preserving the subtree. Hence $A$ fixes the closest vertex $w\in S_L$. Step2.2 puts $A$ into the group of its cut region $R_w$. That region cannot be a rectangle or annulus, since their groups are trivial or cyclic and every subgroup of $\mathbb Z$ is cyclic, by its least positive element. It must therefore be a retained uncut torus region. [F1, F3, F4, step 1.1, step 2.2, given, construct, algebra]

4.1 Apply [F4]'s exact annulus-map criterion in $C$. It homotopes the original $f$ into that component of $Q$, keeping both actual boundary maps pointwise fixed. Its proof uses injectivity of $Q$ to fill the one-skeleton word and $\pi_2(C)=0$ to fill the two-cell prism; it does not replace $f$ by an unrelated embedded annulus. Thus every original injective annulus map satisfies the full new cylinder axiom, with a conclusion stronger than the required homotopy through pairs. [F2, F4, step 1.1, step 3.1, given, construct]

4.2 If $w\ne v$, every element of $A$ fixes the whole path from $w$ to $v$, and in particular an edge. Its stabilizer is a free surface group by [F4], whose abelian subgroups are cyclic. This contradicts the choice of $A$. Thus $w=v$, and $A$ lies in the torus marking subgroup at its original cut-piece vertex, which is exactly the required capture up to conjugacy IN that piece. In the disk branch the original capturing peripheral component is necessarily a torus, because an annular group has no noncyclic subgroup. Its lift is disjoint from the disk by step2.1 and lies in one $X_w$. Both $v$ and $w$ are fixed by $A$; if distinct, their path has a trivial disk edge stabilizer, an immediate contradiction. Thus again $v=w$ and the unchanged torus is the required component of $Q$. This proves capture for every noncyclic abelian subgroup in both branches. [F1, F4, step 2.1, step 2.2, step 3.2, given, construct, algebra]

5.1 Steps1.1,4.1 and4.2 verify every clause of the original pared Definition on each cut pair. The hierarchy theorem selects an essential disk on a boundary-compressible piece, and otherwise [F5] makes the whole boundary injective and selects a connected nondisk superincompressible surface. Its essential-arc boundary incompressibility is among its proved properties. Boundary placement and the square update are those of [F2], so every stage satisfies one of the two branches just proved. Induction over its actual finite decreasing handle complexity therefore produces pared pairs at every stage. The terminal pieces are balls, and marking injection forces their annular/torus marking empty. All square and face maps remain the records already constructed in [F2]; none of them has been assumed to imply the two group-and-map axioms without steps2.3–4.2. [F1, F2, F5, step 1.1, step 4.1, step 4.2, given, induction] ∎

## Scope

This closes ALL pared axioms after the actual disk-first super cuts, with arbitrary noncyclic abelian subgroups and homotopies of each given annulus map. It leaves separate the conversion of an original smooth input to the supplied PL category, full relative Waldhausen/Johannson marking and peripheral graph compatibility for subsequent applications, and every analytic or geometrically finite gluing theorem. No cut target was presupposed pared.
