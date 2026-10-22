---
id: lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity
kind: lemma
title: "Finite PL two-sided incompressibility is fundamental-group injectivity"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds
  - lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks
  - thm-finite-simplicial-approximation-for-maps-of-pairs
  - lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation
  - thm-seifert-van-kampen
  - thm-normal-form-for-free-products-with-amalgamation
  - thm-covering-maps-inject-fundamental-groups
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: https://pi.math.cornell.edu/~hatcher/3M/3M.pdf
      locator: "Corollary3.3 and proof, printed p.48. The proof below instead uses finite cut-face Loop applications and explicit group reconstruction to stay within the proved finite PL supplier interfaces."
axiom_use: "No choice premise: all PL triangulations and collars are given, finite generating edge paths give explicit shortlex transversals, and the Loop supplier has no choice assumption."
---

## Statement

Let $M$ be a compact connected orientable PL three-manifold with a given finite compatible manifold triangulation. Let $S$ be a finite union of disjoint compact two-sided properly embedded locally flat PL surfaces, with given finite compatible triangulations and product collars. Then the inclusion of every connected component of $S$ into $M$ is injective on fundamental groups if and only if there is no embedded PL disk $D$ with $D\cap S=\partial D$ and with $\partial D$ not bounding a PL disk in the component of $S$ containing it. In the no-compressing-disk case, each boundary face of $M\mathbin{\|}S$ is injective into its incident cut piece, and every cut piece is injective into $M$. This assertion makes no irreducibility assumption and no smooth or topological triangulation-existence assertion.

## Statement references

[[thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds]]

[[lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks]]

## Facts & Assumptions

**Given:** The finite compatible PL manifold, surfaces and product collars in the Statement.

[F1] The finite PL Loop theorem with a specified connected boundary subsurface $F$ and normal subgroup $N$ converts a nullhomotopy whose boundary is outside $N$ to a properly embedded disk with that property. [[thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds]]

[F2] A nullhomotopic embedded polygonal circle in an oriented finite PL surface bounds an embedded PL disk. [[lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks]]

[F3] Compact PL embedded subpolyhedra become subcomplexes in finite compatible subdivisions. Based loops on a finite simplicial complex admit based simplicial approximation after subdivision. A connected-overlap cover gives the fundamental-group pushout, and amalgam normal form with supplied transversals makes both injective factors injective into that pushout. Coverings induce injections on fundamental groups. [[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]] [[thm-finite-simplicial-approximation-for-maps-of-pairs]] [[thm-seifert-van-kampen]] [[thm-normal-form-for-free-products-with-amalgamation]] [[thm-covering-maps-inject-fundamental-groups]]

## Proof

**Given:** The data in the Statement; all group maps may be conjugated by the chosen finite base paths without changing injectivity.

1.1 Suppose each component is injective into $M$. A putative compressing disk makes its boundary nullhomotopic in $M$, hence nullhomotopic in that component. The surface is oriented: its two-sided normal orientation together with the ambient orientation gives one. By [F2] the polygonal boundary then bounds a PL disk in the surface, contradicting the required essentiality. Thus no compressing disk exists. [F2, given, algebra]

1.2 Conversely suppose there is no compressing disk. Cut open along the given finite product collars. The cut pieces are compact orientable finite PL three-manifolds, with the two labeled copies of each component as boundary subsurfaces; finite subdivisions of the given collar prisms give their compatible triangulations. If a face $F$ had noninjective map into its incident piece $C$, choose a nontrivial kernel loop, moving it into $\operatorname{Int}F$ by its boundary collar if necessary, and take its nullhomotopy in $C$. Apply [F1] with $N=1$. It gives a proper embedded disk in $C$ with boundary nontrivial in $F$. Its interior misses every cut face because it is in $\operatorname{Int}C$. Gluing back therefore gives a disk meeting $S$ exactly in that boundary loop, which cannot bound a disk in $S$ since its class is nontrivial. This contradicts the hypothesis. Hence all face-group maps into incident pieces are injective. [F1, given, construct, algebra]

2.1 All connected finite pieces and all finite partial regluings have finitely generated groups: approximate a based loop by an edge loop using [F3], choose a finite spanning tree of the one-skeleton, and use its non-tree edges as generators. Give the resulting finite alphabet an order. Its words are well-ordered by length and lexicographic order. In any coset of an injected overlap subgroup take the group element represented by the least such word in that coset. This defines the transversals needed by [F3] without arbitrary-index choice; no algorithm deciding subgroup membership is asserted or required. If a face pair joins distinct connected pieces, thickened collars give a connected-overlap cover. Their pushout is the amalgamated product over that face group, and both piece groups inject by [F3]. [F3, step 1.2, construct, algebra]

3.1 If a paired face joins two boundary faces of the same connected piece $C$, glue copies $C_j$, $j\in\mathbb Z$, by attaching the positive face of $C_j$ to the negative face of $C_{j+1}$. The map identifying each copy with $C$ in the one-pair regluing $Y$ is a covering: on face interiors and at face-boundary half-space charts the paired half-collars give precisely evenly covered neighborhoods. Each finite consecutive chain of copies has injective vertex groups by the amalgam argument in step 2.1, since its overlap face maps are injective. A nullhomotopy of a loop from $C_0$ in the covering has compact image and meets only finitely many copies: the collar decomposition is locally finite, and a finite subcover of that compact image gives the assertion. It therefore lies in a finite chain and is already null in $C_0$. Thus $\pi_1(C_0)$ injects into the covering's group, and then into $\pi_1(Y)$ by [F3]. [F3, step 1.2, step 2.1, construct, algebra]

4.1 Reglue the finitely many face pairs in any order. Initially all face maps inject by step 1.2. Steps 2.1 and 3.1 make every old connected component inject into the new one, so each still-unglued face retains its injection by composition; the finite induction therefore applies to every subsequent gluing. At the end every original cut piece injects into $M$. Composing a face injection with its piece injection now shows that each original component of $S$ injects into $M$, since the face inclusion followed by regluing is its original inclusion up to the product-collar homotopy. Together with step 1.1 this proves the equivalence and the asserted extra injections. Every construction uses the stated finite PL data; no assumption about irreducibility, smoothing, or infinitely many independent choices entered. [step 1.1, step 1.2, step 2.1, step 3.1, construct] ∎
