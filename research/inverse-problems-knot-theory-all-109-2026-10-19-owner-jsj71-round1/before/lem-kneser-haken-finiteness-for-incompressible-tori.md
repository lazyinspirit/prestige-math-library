---
id: lem-kneser-haken-finiteness-for-incompressible-tori
kind: lemma
title: "Kneser–Haken finiteness for incompressible tori"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-relative-transversality-for-embedded-surfaces
  - thm-parametric-transversality
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The finite-position and isotopy steps use countable choice through relative transversality; the finite combinatorial bound itself is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Proposition 1.7 and Corollary 1.8, printed pp.11–13"
    - title: "Ryan Budney, JSJ-decompositions of knot and link complements in the 3-sphere"
      url: "https://arxiv.org/pdf/math/0506523"
      locator: "§1, finiteness and minimality of the torus system, PDF pp.2–3"
---

## Statement

Assume countable choice. Let $M$ be a compact connected irreducible orientable smooth $3$-manifold with nonempty boundary, and fix a finite triangulation of $M$ with $t$ triangular faces. If $\mathcal T$ is any finite family of pairwise disjoint, two-sided, incompressible tori in $M$ such that no component obtained by cutting $M$ along $\mathcal T$ is homeomorphic to $T^2\times[0,1]$, then
$$
|\mathcal T|\le 4t+\dim_{\mathbb Z_2}H_2(M;\mathbb Z_2)-1.
$$
Consequently, any iterative process that cuts along tori and for which every finite stage satisfies this no-product condition terminates after finitely many cuts.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Proposition 1.7 and Corollary 1.8](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Ryan Budney, *JSJ-decompositions of knot and link complements in the 3-sphere*](https://arxiv.org/pdf/math/0506523)

## Facts & Assumptions

**Given:** Countable choice, a compact connected irreducible orientable smooth $3$-manifold $M$ with nonempty boundary, a finite compatible triangulation with $t$ triangular faces, and a finite family $\mathcal T$ satisfying the Statement's hypotheses.

[F1] Under countable choice, a compact embedded surface can be isotoped, fixing its boundary collar, to be transverse to a specified embedded surface ([[lem-relative-transversality-for-embedded-surfaces]], Statement). For a finite collection of strata, the parametric transversality theorem makes the good-parameter sets dense ([[thm-parametric-transversality]], Statement).

[F2] [[def-incompressibility-seifert-fibration-and-jsj-system]] defines incompressibility, irreducibility, and a product component $T^2\times[0,1]$.

[A1] Countable choice is [[def-countable-choice]]. It is used only to obtain the relative general position in [F1].

## Proof

1.1 Use the finite triangulation supplied in the Statement. Put the torus family in general position with its strata in increasing dimension: first make it disjoint from vertices, then transverse to open edges, then transverse to open triangular faces, keeping fixed collars of strata already treated. At each stage only finitely many embedded strata occur. By [F1], each bad-parameter set is null, so the complement of their finite union is dense in every small parameter ball; choose a perturbation there. Choose each perturbation small enough in $C^1$ to preserve the previously achieved transverse intersections and their fixed collars. This yields one finite general position for the whole triangulation. [A1, F1, given, construct]

1.2 Simplify each intersection with a tetrahedron by innermost-circle surgery: incompressibility supplies a disk in the torus with the surgery boundary, and irreducibility makes the resulting sphere bound a ball, so pushing across that ball realizes the surgery by isotopy. This removes all non-disk components in tetrahedra and all circular components in faces. Next remove every arc in a triangular face whose endpoints lie on the same edge, using an outermost such arc and an isotopy across the disk it cuts off. Thus each face is cut by disjoint arcs joining distinct edges. At most four complementary regions in a triangular face fail to be rectangles: the three regions incident to its vertices and at most one central region. [F2, step 1.1, given, construct]

2.1 A cut component meeting every triangular face only in rectangular strips has a local interval direction across each tetrahedron. The strip directions agree on common faces, so they form an interval-bundle structure on that component. A trivial bundle over a torus would be a forbidden $T^2\times[0,1]$ component. Each remaining such component is a regular neighbourhood of a closed one-sided surface; write these pairwise disjoint surfaces as $Q_1,\ldots,Q_m$. [F2, step 1.2, given, construct]

2.2 Since $M$ is connected, use a spanning tree in the dual graph of the torus cuts and order the non-tree edges first. The corresponding first $k$ tori are nonseparating when successively cut; each remaining tree-edge torus separates its current component. The dual graph of those remaining pieces and separating tori is therefore a tree. In each rectangular-only piece, the one-sided core $Q_j$ has connected complement: its twisted interval-bundle neighbourhood minus the core retracts to the connected double-cover boundary of that neighbourhood. Removing all $Q_j$ therefore keeps each such piece connected, and the tree of pieces remains connected when its separating torus faces are identified. Thus the complement of the first $k$ tori and all $Q_j$ is connected. Their mod-two homology classes are linearly independent: a nonempty relation would make a nonempty subcollection the boundary of a $3$-chain, and such a boundary disconnects its complement, contrary to connectedness. Therefore $k+m\le\beta$. [F2, step 2.1, algebra, construct]

2.3 If $n=|\mathcal T|$, the first $k$ cuts leave the manifold connected and each remaining cut adds one component, so cutting along $\mathcal T$ gives $n-k+1$ components. At most $m$ are the nontrivial interval-bundle neighbourhoods from step 2.1. Every other component meets a nonrectangular region in some triangular face from step 1.2, and distinct components use distinct regions. There are at most $4t$ such regions, so $n-k+1\le m+4t$. [step 1.2, step 2.1, algebra]

3.1 Combining $k+m\le\beta$ with $n-k+1\le m+4t$ gives $n+1\le k+m+4t\le\beta+4t$. Hence $n\le4t+\beta-1$. At every stage of the stated process this same bound applies to the accumulated torus family, so no process satisfying the no-product condition can make more than that many cuts. [step 2.2, step 2.3, algebra] ∎
