---
id: thm-compact-oriented-manifold-local-coefficient-duality-in-zf
kind: theorem
title: Compact oriented manifold duality with local coefficients without choice
status: draft
origin: pipeline
deps:
  - lem-choice-free-local-coefficient-duality-on-a-coordinate-ball
  - lem-compact-support-local-coefficient-mayer-vietoris-and-cap-ladder
  - def-compactly-supported-cohomology-with-local-coefficients
  - def-cup-and-cap-products-with-local-coefficient-pairings
  - lem-canonical-twisted-fundamental-classes-over-compact-subsets
  - thm-excision-and-mayer-vietoris-with-local-coefficients
  - thm-five-lemma-for-a-morphism-of-long-exact-sequences
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Davis and Kirk, Lecture Notes in Algebraic Topology, Chapter5,
        local-coefficient Poincare duality
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
    - title: Hatcher, Algebraic Topology, Poincare duality and local coefficients
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
---

## Statement

Let $M$ be a compact oriented boundaryless Hausdorff topological $n$-manifold and let $\mathcal L$ be a local system of abelian groups. Cap with its integral orientation class induces isomorphisms
$$H^p(M;\mathcal L)\xrightarrow{\sim}H_{n-p}(M;\mathcal L)$$
for every integer $p$, without a choice principle. The maps respect any coefficient-ring action commuting with transport, and in particular apply to local systems of modules over a noncommutative ring by forgetting to abelian groups and retaining that action. No smoothness, triangulation or prescribed finite CW structure is assumed.

## Facts & Assumptions

**Given:** The compact oriented manifold and the local system.

[F1] The actual support cap maps are well-defined and use compatible canonical integral support orientation classes, with no choice assumption. [[def-compactly-supported-cohomology-with-local-coefficients]], [[def-cup-and-cap-products-with-local-coefficient-pairings]], [[lem-canonical-twisted-fundamental-classes-over-compact-subsets]]

[F2] Cap duality holds on coordinate balls without choice. [[lem-choice-free-local-coefficient-duality-on-a-coordinate-ball]]

[F3] The compact-support local-coefficient Mayer–Vietoris ladder commutes with homology Mayer–Vietoris after its prescribed connector signs. [[lem-compact-support-local-coefficient-mayer-vietoris-and-cap-ladder]]

[F4] The five lemma compares the middle terms of exact five-term windows; local excision permits passage between a compact support in an open subspace and its ambient space. [[thm-five-lemma-for-a-morphism-of-long-exact-sequences]], [[thm-excision-and-mayer-vietoris-with-local-coefficients]]

## Proof

1.1 For every open $W\subset M$, define $D_W:H_c^p(W;\mathcal L)\to H_{n-p}(W;\mathcal L)$ by the supportwise cap of [F1], using the restricted orientation. If $W=U\cup V$ and all three maps for $U,V,U\cap V$ are isomorphisms in every degree, the exact ladder [F3] and five lemma [F4] make $D_W$ an isomorphism in every degree. The five-term window centered on degree $p$ has the surrounding compact-support terms in degrees $p$ and $p+1$ on the intersection and on the two pieces; their homology comparisons are the assumed isomorphisms. Multiplying a connecting map by the specified sign preserves exactness. Thus this finite gluing implication is valid without a chosen splitting. [F1, F3, F4, given, construct, algebra]

2.1 Let $O$ be any open subset of one coordinate ball. In coordinates enumerate all bounded open boxes with rational endpoints whose closures lie in $O$, using the fixed elementary enumeration of finite rational tuples. They cover $O$: each point has a sufficiently small coordinate box with closure in $O$, and density supplies rational endpoints on either side of its coordinates. A box, and a nonempty intersection of finitely many boxes, is a coordinate ball; its local coefficient system is trivialized by the straight contraction inside the ambient coordinate chart, so [F2] applies. Prove duality for every finite union of these boxes by induction on their number. For the last box $B$ and preceding union $A$, the intersection $A\cap B$ is a union of fewer boxes, namely the nonempty intersections with $B$. The induction hypothesis applies to that union as well as to $A$, and step 1.1 proves duality on $A\cup B$. Empty intersections and the empty union have zero groups. [F2, step 1.1, construct, algebra]

3.1 Let $O_j$ be the union of the admissible boxes among the first $j$ tuples in the fixed rational enumeration; inadmissible tuples contribute nothing. Every compact subset of $O$ is contained in some $O_j$, since finitely many of the boxes cover it and their indices have a finite maximum. Excision [F4] identifies a relative class supported on such a compact set with its class in that $O_j$; any equality of compact-support classes is witnessed on one larger compact support by [F1], hence in some common later stage. These two representative tests identify $H_c^p(O;\mathcal L)$ with the colimit of the $H_c^p(O_j;\mathcal L)$ under extension. A local homology cycle uses finitely many compact simplex images, as does any chain bounding it, so the identical finite-cover test identifies $H_{n-p}(O;\mathcal L)$ with the homology colimit of the stages. Cap commutes with these extension and inclusion maps by its support formula in [F1]. The stage maps are isomorphisms by step 2.1; surjectivity and injectivity at a common stage therefore make $D_O$ an isomorphism. This argument uses an explicitly enumerated family inside one supplied chart, rather than selecting a countable chart family on the manifold. [F1, F4, step 2.1, construct, algebra]

4.1 Compactness supplies a finite cover $B_1,\ldots,B_m$ of $M$ by coordinate balls, each with a specified chart; selecting that finite list requires only finite choice. Induct on the number of balls. The one-ball case is [F2]. If duality holds on $A=B_1\cup\cdots\cup B_{j-1}$, the intersection $A\cap B_j$ is an open subset of the single chart $B_j$, so step 3.1 proves duality there. Step 1.1 now proves duality on $A\cup B_j$. After finitely many steps this gives duality on all of $M$. Since $M$ is compact, its support $M$ is terminal and $H_c^p(M;\mathcal L)=H^p(M;\mathcal L)$; its support orientation class is the integral orientation class by [F1]. This is exactly the displayed map. [F1, F2, step 1.1, step 3.1, construct, algebra]

5.1 Compact disconnected manifolds have finitely many components, since their open components cover them; the same finite construction already applies without choosing data on an infinite component family. Empty manifolds give zero groups; dimension zero and all integer degrees are covered by [F2] and the same exact windows. All cap, transport, extension and inclusion maps commute with a commuting coefficient-ring action, so their inverses do too. Only the finite chart cover is selected, and the sole infinite family used was the fixed rational enumeration inside one chosen chart; all representative lifts are made one at a time. Thus no AC, countable choice, smooth or PL structure, or triangulation theorem has been used. [F1, F2, step 2.1, step 3.1, step 4.1, algebra] ∎
