---
id: lem-rational-hurewicz-for-arbitrary-wedges-of-high-dimensional-spheres
kind: lemma
title: "Rational Hurewicz for arbitrary wedges of high-dimensional spheres"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - lem-rationalization-is-exact-and-commutes-with-singular-homology
  - lem-rational-homotopy-of-a-sphere-below-its-first-unstable-degree
  - lem-high-relative-cells-do-not-change-lower-homotopy
  - lem-compact-cw-images-have-finite-cell-support-without-choice
  - lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex
  - thm-cellular-homology-computes-singular-homology
  - prop-cellular-maps-induce-cellular-chain-maps
  - def-hurewicz-homomorphism
  - def-axiom-of-choice
dependency_level: 6
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Appendix A, Proposition A.1, compact support in CW complexes; §4.1 Proposition 4.8, cellular approximation and high-dimensional cell invariance"
    - title: "Milnor and Stasheff, Characteristic Classes"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Theorem 18.3 and preceding discussion, printed pp.207–208; finite-complex comparison only, not a proof supplier for the arbitrary-CW theorem"
verification:
  precheck: pass
---

## Statement

Assume AC. Let W be the CW wedge of any set of spheres of dimensions at least c≥2. For 1≤i≤2c−2, π_i(W)⊗Q and H_i(W;Q) are the direct sum of Q indexed by spheres of dimension i, and actual Hurewicz identifies their orientation generators.

## Facts & Assumptions

**Given:** AC; an integer $c\ge2$; a CW wedge $W$ of any set of based spheres of dimensions at least $c$; and for a finite wedge the finite product $P$ of the same spheres.

[F1] Step 1.1 constructs the finite product CW structure for the spheres using characteristic product disks and checks its ordinary topology by the compact-to-Hausdorff quotient test; the high-relative-cells lemma compares the wedge inclusion with the finite product in the metastable range ([[lem-high-relative-cells-do-not-change-lower-homotopy]]).

[F2] Homotopy groups of a finite product of based spaces are the products of the factor groups, and the rational homotopy of a single sphere below its first unstable degree is known ([[lem-rational-homotopy-of-a-sphere-below-its-first-unstable-degree]]); rationalization is exact and commutes with direct sums ([[lem-rationalization-is-exact-and-commutes-with-singular-homology]]).

[F3] Cellular homology of a wedge of spheres has one free generator per sphere with zero differentials, computed by finite chains without a finite-type hypothesis ([[thm-cellular-homology-computes-singular-homology]]); compact images in a CW complex have finite cell support, so classes and homotopies are represented in finite subwedges ([[lem-compact-cw-images-have-finite-cell-support-without-choice]]); the rational sphere lemma identifies the orientation generators of the actual Hurewicz map.

[F4] AC is used to choose representatives and to rationalize set-sized families ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Let P be the finite product of the spheres. Their CW structures have a vertex and a top cell. Products of their characteristic disks give the finite product CW structure: each product disk is a disk of the sum dimension, with boundary mapping into the union of products of lower faces; an explicit radial disk homeomorphism or a finite subdivision gives its characteristic map. The weak CW topology agrees with the ordinary product because the spaces are finite compact Hausdorff CW complexes. W embeds as the subcomplex with at most one nonvertex coordinate. Every relative cell of (P,W) has at least two top factors, and hence dimension at least 2c. The published high-relative-cells lemma makes π_i(W)→π_i(P) an isomorphism for i<2c−1. Based cube maps into a finite product are exactly tuples of based cube maps; homotopies and concatenations are coordinatewise, so π_i(P)=∏π_i(S^{m_t}). The rational sphere lemma gives the displayed rational groups: for m_t>i connectivity suffices, while for m_t≤i we have i≤2c−2≤2m_t−2. [given, F1, F2, F4]

2.1 The cellular complex of W has one zero-cell and one top cell for each sphere, with zero differentials. Sphere inclusions therefore identify its positive homology with the corresponding direct sums. Naturality of Hurewicz on those inclusions and the degree-m orientation generator calculation in the rational sphere lemma show that the displayed isomorphism is the actual Hurewicz map. [step 1.1, F3]

3.1 Every sphere representative and disk homotopy has finite cell support. Its image is therefore contained in a finite subwedge, obtained by including all spheres whose top cells meet that support. A class in π_i(W) is thus represented in a finite subwedge; equality of two such classes is witnessed in a larger finite subwedge by the finite support of a homotopy. This is exactly the filtered-colimit description of π_i(W). The finite-wedge comparisons above are natural under adding factors: the corresponding map on finite products inserts constant coordinates. Thus that colimit is the direct sum of the individual sphere homotopy groups in this range. Row 1 rationalizes it to their rational direct sum. Cellular homology of the infinite wedge uses finite chains and gives the same direct sum without any finite-type assumption. Naturality of Hurewicz retains the generator identification. [step 2.1, F2, F3, F4] ∎
