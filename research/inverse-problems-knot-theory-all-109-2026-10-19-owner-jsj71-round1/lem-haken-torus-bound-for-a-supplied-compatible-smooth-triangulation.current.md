---
id: lem-haken-torus-bound-for-a-supplied-compatible-smooth-triangulation
kind: lemma
title: "Haken torus bound for a supplied compatible smooth triangulation"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-smooth-incompressible-tori-admit-normal-position-in-a-compatible-triangulation
  - lem-rectangular-normal-cut-components-are-interval-bundles
  - lem-connected-complement-surfaces-have-independent-mod-two-homology-classes
  - lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars
  - lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption
  - thm-simplicial-and-singular-homology-agree-for-simplicial-complexes
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
justified_by: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from the smooth normal-position supplier through its standard-ball Schoenflies step. The finite interval-bundle assembly, mod-two independence, graph choices and homology matrices are choice-free; the finite boundary-collar construction explicitly has dispensable AC."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Proposition1.7 and Corollary1.8, printed pp.11–13. The normal-position, interval-bundle and mod-two independence ingredients have distinct full local proofs; no arbitrary triangulation compatibility is inferred."
---

## Statement

Assume countable choice. Let $M$ be a compact connected orientable irreducible smooth three-manifold with nonempty boundary, and supply a finite compatible whole-star smooth manifold triangulation with $t$ triangular faces. Let $\mathcal S$ be a finite disjoint family of two-sided incompressible smooth interior tori. If no component of $M$ cut open along $\mathcal S$ is homeomorphic to $T^2\times I$, then
$$
|\mathcal S|\le 4t+\dim_{\mathbb F_2}H_2(M;\mathbb F_2)-1.
$$
Thus any process accumulating cuts whose every finite stage has this no-product property can make only finitely many cuts. The family may be empty.

The supplied triangulation is compatible with the smooth structure in the stated whole-star sense. This result asserts no compatibility of an arbitrary topological marking and does not alter the scope of any other finiteness item.

## Facts & Assumptions

**Given:** Countable choice, the compact manifold, the fixed compatible triangulation and finite torus system with no product cut component.

[A1] Countable choice is [[def-countable-choice]].

[F1] The torus system has simultaneous smooth normal position for the original compatible triangulation, with marked cut-ball parameters in each tetrahedron. [[lem-smooth-incompressible-tori-admit-normal-position-in-a-compatible-triangulation]]

[F2] A rectangular-only cut component, with its cut-ball and rectangle data, is an interval bundle with a compact locally flat core. If it is not $T^2\times I$, the core is one-sided and its complement in that component is connected. [[lem-rectangular-normal-cut-components-are-interval-bundles]]

[F3] Finitely many disjoint compact locally flat closed surfaces in a connected boundaryless three-manifold have independent mod-two classes if their complement is connected, including one-sided surfaces. This uses no choice or ambient triangulation. [[lem-connected-complement-surfaces-have-independent-mod-two-homology-classes]]

[F4] Smooth planar Jordan disk parameters and prescribed corner-window parameters have the finite constructions of [[lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars]] and [[lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption]]. For the topological rectangle parameters below, a boundary circle map can also be extended radially once its disk parameter is given.

[F5] Finite simplicial homology agrees with singular homology, so the supplied finite triangulation makes $\beta=\dim_{\mathbb F_2}H_2(M;\mathbb F_2)$ finite. Ordinary smooth boundary collars have the finite inward-field construction in [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]], Proof 1.2 and 2.2; its Statement, F4 and Proof 5.1 explicitly make AC dispensable. [[thm-simplicial-and-singular-homology-agree-for-simplicial-complexes]]

## Proof

1.1 Apply [F1]; its ambient diffeomorphism preserves the no-product condition. In a triangular face the normal arcs have three types, according to the pair of distinct edges they join. Arcs of one type occur in a parallel stack about their common vertex: otherwise two of them separate each other's endpoints and would intersect in the disk. Between consecutive arcs of a stack is a rectangle, with two opposite surface edges and two original edge segments. Collapse each such strip for this count. There remains at most one arc of each type, so at most three disjoint arcs and hence at most four regions. All nonrectangular regions survive as distinct regions of this collapsed picture. Thus there are at most four nonrectangular regions per face, and at most $4t$ overall. The face cells have actual disk parameters: cut the parametrized triangular disk successively along its finitely many disjoint smooth proper arcs. At each cut the arc and either boundary side form a Jordan circle with finitely many corners; [F4]'s finite rounding and restoration give its two disk parameters retaining those corner arcs. Induction gives every face-cell parameter. A rectangle's four boundary intervals then specify its product boundary map, extended over that disk by [F4]. All input rectangle and cut-ball parameters for [F2] are therefore supplied. [A1, F1, F4, given, construct]

2.1 Write $n=|\mathcal S|$, and let $v$ be the number of cut components. Let $m$ be the number of components meeting faces only in rectangles. By [F2] and the no-product hypothesis they have disjoint one-sided compact locally flat cores $Q_1,\ldots,Q_m$, and removing a core keeps its component connected. Every other component contains a nonrectangular face region. A physical face region belongs to only one cut component: its two incident tetrahedral regions are glued across its interior, or it is an original boundary face with one incident side. Thus distinct components can be assigned distinct nonrectangular regions, using a fixed order on their finite set. Consequently $v\le m+4t$. [F2, step 1.1, construct, algebra]

3.1 Form the finite connected dual graph of the torus cuts, with one vertex for each cut component and one edge for each torus, including loops. Choose a spanning tree and let the other $k$ edges correspond to $S_1,\ldots,S_k$. Gluing all the tree edges keeps the union connected, so cutting only these $k$ tori leaves a connected manifold. In the fully cut manifold remove all the cores $Q_j$. Each piece remains connected by [F2]. Regluing the same tree edges again gives a connected space. In the uncut manifold this says exactly that the complement of $S_1\cup\cdots\cup S_k\cup Q_1\cup\cdots\cup Q_m$ is connected; the small cut-face collars merely supply the adjacent open product neighborhoods. All these surfaces are compact, closed, disjoint and locally flat. The tree has $v-1$ edges, so $k=n-v+1$, equivalently $v=n-k+1$. [F2, step 2.1, construct, algebra]

4.1 Pass to $N=\operatorname{Int}M$ to apply [F3]. The finite boundary collar in [F5] can be chosen disjoint from the displayed compact surfaces. In its coordinate $r\ge0$, choose a nonnegative cutoff $\chi$, equal to one near zero and zero beyond a smaller collar, and a sufficiently small $\epsilon>0$. The map $r\mapsto r+\epsilon\chi(r)$ pushes $M$ into its interior and fixes all the surfaces. The homotopy $r\mapsto r+s\epsilon\chi(r)$ proves that the interior inclusion is a homotopy equivalence, since the same homotopy starting at a positive $r$ stays in the interior. It also proves that their complement in $N$ is connected: its pushed image is connected by step 3.1, and every interior point is joined inside that complement to its pushed image. By [F3], the $k+m$ surface classes are independent in $H_2(N;\mathbb F_2)$, and therefore in $H_2(M;\mathbb F_2)$ under this homotopy equivalence. Hence $k+m\le\beta$. No simultaneous triangulation of the possibly one-sided cores has been assumed; their independence is the local singular-chain jump theorem [F3]. [F3, F5, step 3.1, construct, algebra]

5.1 Combine $n-k+1=v\le m+4t$ with $k+m\le\beta$ to obtain $n+1\le k+m+4t\le\beta+4t$, as claimed. This applies also to the empty family; its one cut component contains a nonrectangular face region. The bound uses the original fixed compatible triangulation, so it is uniform over every finite stage of a process satisfying the hypothesis. Such a process cannot make more cuts than this fixed integer. Countable choice was inherited only in [F1]'s smooth ball splitting; every other selection was finite, and the homology computation used finite matrices and the choice-free local jump argument. In particular no full AC, arbitrary-marking triangulation bridge or PL-to-smooth irreducibility assertion entered. [A1, F1, F2, F3, F5, step 2.1, step 3.1, step 4.1, algebra] ∎
