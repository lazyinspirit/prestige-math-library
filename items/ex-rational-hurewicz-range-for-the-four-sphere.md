---
id: ex-rational-hurewicz-range-for-the-four-sphere
kind: example
title: "The rational Hurewicz range for the four-sphere"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - thm-rational-hurewicz-for-highly-connected-cw-complexes
  - lem-rational-homotopy-of-a-sphere-below-its-first-unstable-degree
  - lem-a-low-dimensional-disk-can-be-pushed-off-a-higher-cell
  - cor-homology-of-spheres
  - def-axiom-of-choice
dependency_level: 8
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Lecture 12, printed p. 105, where rational Hurewicz is invoked; the stated range and sphere example are proved using the local A-page theorem."
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Theorem 4.32 and Corollary 4.33, printed pp. 366–368: the integral relative-Hurewicz comparison used in the local range proof."
verification:
  precheck: pass
---

## Example

Assume AC. For S⁴, the rational Hurewicz map is an isomorphism in degrees 4, 5, and 6: π₄(S⁴)⊗Q≅H₄(S⁴;Q)≅Q, and both π_i(S⁴)⊗Q and H_i(S⁴;Q) vanish for i=5,6.

## Facts & Assumptions

**Given:** AC; the standard based CW structure on $S^4$ with one $0$-cell and one $4$-cell; the cell-pushing lemma for low-dimensional disks; and the sphere homology computation with coefficients in $\mathbb Q$.

[F1] The low-dimensional disk-pushing lemma deforms a based cube map of dimension $j<4$ into the 0-cell while fixing its boundary, so $S^4$ is 3-connected ([[lem-a-low-dimensional-disk-can-be-pushed-off-a-higher-cell]]).

[F2] The sphere homology computation with coefficient group $\mathbb Q$ gives the displayed rational homology groups ([[cor-homology-of-spheres]]), and the rational Hurewicz theorem applies with $c=4$ in the range $c\le i\le 2c-2$, namely $4\le i\le 6$ ([[thm-rational-hurewicz-for-highly-connected-cw-complexes]]).

[F3] The rational sphere homotopy computation identifies $\pi_i(S^4)\otimes\mathbb Q$ in that range ([[lem-rational-homotopy-of-a-sphere-below-its-first-unstable-degree]]), and AC is inherited from the rational Hurewicz theorem ([[def-axiom-of-choice]]).

## Verification

1.1 Give S⁴ its standard based CW structure with one 0-cell and one 4-cell. For each j=1,2,3, a based cubical representative f:Iʲ→S⁴ has boundary mapped to the 0-cell. Apply `lem-a-low-dimensional-disk-can-be-pushed-off-a-higher-cell` to the finite one-cell attachment (S⁴,*), with n=j<4. It deforms f into the 0-cell while fixing its boundary, so π₁(S⁴)=π₂(S⁴)=π₃(S⁴)=0. This writes out the one-cell connectivity argument using the published cell-pushing supplier; the stronger `lem-high-relative-cells-do-not-change-lower-homotopy` is also available in page 547's published prerequisite closure but is not needed as a direct dependency. `cor-homology-of-spheres` with coefficient group Q gives the displayed rational homology groups directly. [given, F1, F3]

2.1 Now apply the rational Hurewicz theorem with c=4; its range is c≤i≤2c−2, namely 4≤i≤6. The rational sphere lemma computes the three homotopy groups. The degree-4 map is the first-nonzero-degree Hurewicz isomorphism; in degrees 5 and 6 both sides vanish. [step 1.1, F2, F3] ∎
