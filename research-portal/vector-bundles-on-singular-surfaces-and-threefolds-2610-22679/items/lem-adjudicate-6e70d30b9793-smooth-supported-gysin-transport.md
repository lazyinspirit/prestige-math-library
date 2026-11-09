---
id: lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport
kind: lemma
title: The field comparison preserves refined smooth Gysin and the point class
status: draft
domain: mathematics
deps:
  - lem-adjudicate-6e70d30b9793-field-unit-zigzag
  - lem-adjudicate-6e70d30b9793-em-picard-square
  - lem-adjudicate-6e70d30b9793-chern-operation-transport
  - thm-adjudicate-6e70d30b9793-oriented-field-map-input
  - math:def-axiom-of-choice
  - lem-author-d026a7b99ace-positive-coordinates
dependency_roles:
  lem-adjudicate-6e70d30b9793-field-unit-zigzag: mathematical-premise
  lem-adjudicate-6e70d30b9793-em-picard-square: mathematical-premise
  lem-adjudicate-6e70d30b9793-chern-operation-transport: mathematical-premise
  thm-adjudicate-6e70d30b9793-oriented-field-map-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-author-d026a7b99ace-positive-coordinates: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 20
---

## Statement
Assume the Axiom of Choice and the existing universe bounds. For a regular closed immersion $i:Z\hookrightarrow V$ of smooth finite-type schemes over a perfect field, the specified field comparison preserves the refined motivic Gysin map and its forget-support map. In particular it takes the actual Spitzweck/classical refined point class to the actual EM positive point class on a smooth point pair. This is sufficient for the supported codimension-three RR application; it asserts no global smooth comparison or new Gysin formalism on singular normal qcqs schemes.

## Statement references

[[lem-adjudicate-6e70d30b9793-field-unit-zigzag]]

[[lem-adjudicate-6e70d30b9793-em-picard-square]]

[[lem-adjudicate-6e70d30b9793-chern-operation-transport]]

[[thm-adjudicate-6e70d30b9793-oriented-field-map-input]]

## Facts & Assumptions
[A9] Choice is inherited through the current smooth motivic comparison and its classical/cycle model. [[math:def-axiom-of-choice]]

[F1] [[thm-adjudicate-6e70d30b9793-oriented-field-map-input]] supplies the coefficient-independent smooth homotopy-purity equivalence and the orientation/Thom definition of Gysin. [[lem-adjudicate-6e70d30b9793-field-unit-zigzag]], [[lem-adjudicate-6e70d30b9793-em-picard-square]] and [[lem-adjudicate-6e70d30b9793-chern-operation-transport]] identify the actual ring and Picard maps and universal Chern classes.

[F2] [[lem-author-d026a7b99ace-positive-coordinates]] fixes the positive EM point class by the literal supported reduced cycle $[x]$, whose coordinate is $+1$.

## Proof
**Given:** $i$ as stated, its normal bundle $N$, the specified coefficient comparison on the smooth site, AC and the stated universe bounds.

**Goal:** Identify actual supported Gysin operations, not just their target groups.

1.1 The Thom class of a line bundle is determined by the pointed first-Chern class on its projective completion. The sum/product construction and projective-bundle detection determine the rank-$d$ Thom class from these line classes. Thus an orientation-preserving multiplicative coefficient map preserves the actual Thom class, as well as the Thom isomorphism $a\mapsto\pi^*a\,\mathrm{th}(N)$. Equivalently use the top-Chern definition on the projective completion and its unique refined lift. This uses the actual top class, not Navarro's malformed displayed Thom expansion. [F1, A9]

2.1 Homotopy purity identifies $V/(V\setminus Z)$ with $\mathrm{Th}(N)$ in the motivic category. This is a map of motivic spaces before applying any coefficients, so the coefficient comparison commutes with it. Define refined Gysin by composing the Thom isomorphism from step 1.1 with this purity identification. The resulting square commutes; composing with the coefficient-independent forget-support arrow gives the ordinary Gysin square. The deformation construction in the cited RR source agrees with this construction on smooth regular pairs. For a nonseparated smooth pair, perform this construction on affine opens of the ambient scheme; their closed intersections with $Z$ are affine smooth pairs. Naturality on their open overlaps and Nisnevich descent glue the same purity and Thom maps. Thus the application of the primary purity theorem uses only separated finite-type pairs; descent handles the stated nonseparated scope. [F1, step 1.1]

3.1 For a smooth rational point of codimension three, $N$ is a rank-three vector space. Its Thom class is the product of the three normalized Cartier zero-section classes, hence is the positive point class. Units are preserved, so $i_!(1)$ has precisely the same normalization in the two theories. In the supported cycle model these three regular Cartier parameters cut out the reduced point with intersection multiplicity $+1$; the divisor bonding normalization is the $+1$ boundary in Spitzweck Lemma 6.6. In the article application over an algebraically closed field this is exactly the $\delta_x$ of [F2], on its stated pure-threefold neighbourhood. This also agrees with the three-coordinate-hyperplane test in $\mathbb P^3$. No cancellation of a forget-support map or division is used. [F1, F2, step 1.1, step 2.1] ∎
