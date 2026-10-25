---
id: thm-rational-hurewicz-for-highly-connected-cw-complexes
kind: theorem
title: "Rational Hurewicz for highly connected CW complexes"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - lem-rationalization-is-exact-and-commutes-with-singular-homology
  - lem-rational-hurewicz-for-arbitrary-wedges-of-high-dimensional-spheres
  - lem-rational-homotopy-isomorphisms-and-an-endpoint-surjection-give-homology-isomorphisms
  - thm-absolute-hurewicz-theorem
  - def-hurewicz-homomorphism
  - thm-every-independent-set-extends-to-a-basis
  - lem-high-relative-cells-do-not-change-lower-homotopy
  - lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex
  - prop-higher-homotopy-basepoint-transport-and-moving-homotopies
  - def-axiom-of-choice
dependency_level: 7
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Milnor and Stasheff, Characteristic Classes"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Theorem 18.3 and preceding discussion, printed pp.207–208; finite-complex comparison only, not a proof supplier for the arbitrary-CW theorem"
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§4.2 Theorem 4.32, printed pp.366–369, ordinary Hurewicz; arbitrary-CW rational range derived in local rows 1–10"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. If a based CW complex X is (c−1)-connected with c≥2, the natural actual rationalized Hurewicz map π_i(X)⊗_Z Q→H_i(X;Q) is an isomorphism for c≤i≤2c−2. Lower positive rational homology vanishes. No finite-type, countability or finite-CW hypothesis is imposed, and no injectivity at 2c−1 is claimed.

## Facts & Assumptions

**Given:** AC; a $(c-1)$-connected CW complex $X$ with $c\ge2$; for each $j$ a rational basis of $V_j=\pi_j(X,v)\otimes\mathbb Q$; the CW wedge $W$ of based sphere representatives; and the actual Hurewicz maps $h_W,h_X$.

[F1] Rationalization is exact and every element of $\pi_j\otimes\mathbb Q$ is a fraction with positive denominator, so rescaling a basis by nonzero rational numbers preserves it ([[lem-rationalization-is-exact-and-commutes-with-singular-homology]]); the wedge of spheres is $(c-1)$-connected by the high-relative-cells lemma and its rational homotopy is the direct sum of the sphere groups in the stated range ([[lem-rational-hurewicz-for-arbitrary-wedges-of-high-dimensional-spheres]], [[lem-high-relative-cells-do-not-change-lower-homotopy]]).

[F2] The rational homotopy-isomorphism lemma with the endpoint surjection turns the homotopy comparison into a rational homology comparison ([[lem-rational-homotopy-isomorphisms-and-an-endpoint-surjection-give-homology-isomorphisms]]); the Hurewicz map on the wedge is an isomorphism in the same range ([[lem-rational-hurewicz-for-arbitrary-wedges-of-high-dimensional-spheres]]).

[F3] The absolute Hurewicz theorem and its degree-one abelianization identify the low-degree groups ([[thm-absolute-hurewicz-theorem]]); basepoint transport along a path is an isomorphism of homotopy groups and the moving-basepoint homotopy leaves the homology pushforward unchanged ([[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]]).

[F4] AC chooses the numerators, sphere representatives and paths ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 For c=2 there is just i=2, so integral first Hurewicz and the rationalization lemma prove the theorem. Assume c≥3 and put D=2c−2. Choose a vertex v∈X as basepoint. For each j=c,...,D+1, choose a rational basis of V_j=π_j(X,v)⊗Q. Every basis vector is a fraction a/s by the rationalization lemma, with a∈π_j(X,v) and positive integer s. For each vector choose such a numerator and a based sphere map representing it. Replacing each basis vector by its numerator only rescales that vector by a nonzero rational number, so the chosen numerators still form a basis. AC makes these simultaneous choices for set-sized families. [given, F1, F4]

2.1 Let W be the CW wedge of all these spheres, and define f:W→X by the chosen representatives. The wedge weak topology makes f continuous, because its restriction to every sphere is continuous and the maps agree at the vertex. Both W and X are 2-connected; W has no positive cells below c, and the high-relative-cells lemma applied to (W,{vertex}) supplies that connectivity. The wedge Hurewicz lemma shows that, for i≤D, the rational π_i(W) consists exactly of the independent sphere generators in dimension i. Their images are the chosen basis of V_i. Below c both groups are zero. Thus π_i(f)⊗Q is an isomorphism for 2≤i≤D. In degree D+1 no decomposition of the full wedge homotopy group is asserted: the sphere generators chosen in that degree already span V_{D+1}, so π_{D+1}(f)⊗Q is surjective. [step 1.1, F1, F2]

3.1 The rational homotopy-to-homology comparison gives H_i(f;Q) an isomorphism through D. By the wedge Hurewicz lemma the Hurewicz map on W is an isomorphism in that same range. For each c≤i≤D the naturality square π_i(W)⊗Q --π_i(f)⊗Q--> π_i(X)⊗Q | h_W | h_X v v H_i(W;Q) ----H_i(f;Q)----> H_i(X;Q) commutes. The left, upper and lower arrows are isomorphisms, so h_X is an isomorphism. This proves the specified map, not merely equality of dimensions of two vector spaces. [step 2.1, F2]

4.1 For a different basepoint x∈X choose a path from v to x. Published basepoint transport is an isomorphism, and the moving-basepoint homotopy of its sphere representative leaves its singular homology pushforward unchanged. Hence the same statement holds at every basepoint and has the usual naturality under based continuous maps. Connectivity and first integral Hurewicz give lower homology vanishing. The empty space is excluded by connectivity; a point and zero rational homotopy groups give empty sphere families and are included. The argument never identifies an infinite-dimensional space with its double dual, interchanges an infinite spectral-sequence limit, or assumes finite generation of any homotopy group. The finite range ends at D=2c−2 throughout. [step 3.1, F3, F4] ∎
