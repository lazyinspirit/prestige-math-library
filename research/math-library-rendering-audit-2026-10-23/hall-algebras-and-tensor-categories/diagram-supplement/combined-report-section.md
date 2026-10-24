# Hall Algebras and Tensor Categories diagram-candidate supplement

Integrated with the primary review; optional candidates remain uncertain until independent adjudication. Existing diagram checks are stored separately as positive coverage.

## Candidate 1: `lem-circumcision-meridian-pair-preserves-relative-three-manifold`

- Review lanes: 03.
- Diagram kind: TikZ product-and-surgery slope schematic.
- Why considered: The claim is supported by a long proof whose central bookkeeping identifies a product exterior, three boundary tori, actual meridian/longitude curves, and two filling slopes before cutting and regluing a compression body. A small schematic could make those geometric identifications auditable; the source already gives the mathematical data and explicitly explains the product without relying on a diagram.
- Concrete content/check: Draw P as a disk with two interior disks, label boundary components T_A,T_K,T_U and fiber h; mark b_A,b_K,b_U and the slope identifications μ_K=h, λ_K=b_K, μ_U=b_U, λ_U=h. Show fillings along b_K+fh and h; optionally a second panel shows α×S¹ capped in V to give proper disk D with ∂D=h⊂T_A, and the resulting T²×I plus h-meridian 2-handle. Keep orientations and framing sign f explicit.
- Source lines: 42, 48.
- Source SHA-256: `cb88724ab25c513d67c85a461c4aa3203f08bf960b45f0ff348a15aa2d008d2e`.
- Local tile evidence: `lem-circumcision-meridian-pair-preserves-relative-three-manifold--01.png` (`ab5daaec172804a452b641d91823fa47cee1e8d619cdd5eb8eca82e3bd283b68`), `lem-circumcision-meridian-pair-preserves-relative-three-manifold--02.png` (`afce52b3c0c4e9d949560441ee1ae405b8e1004d5f902ee4d58b24b53f6377d2`).

## Candidate 2: `lem-quiver-exact-sequence-correspondence-is-smooth-and-proper`

- Review lanes: 10.
- Diagram kind: potential TikZ correspondence span.
- Why considered: The Statement identifies the exact-sequence stack and two maps used by Hall convolution, and the body proves their distinct geometric properties (q smooth with relative dimension; p representable proper). A small span makes the input/output order and geometric role of each map quick to inspect.
- Concrete content/check: Draw the span M_a × M_b ←^{q} E_{a,b} →^{p} M_{a+b}. Label the E_{a,b} point as a short exact sequence 0→M_a→E→M_b→0 (subobject dimension a, quotient dimension b); label q as “subobject, quotient” and p as “forget filtration / total object”. Do not make the two legs a commutative square or reverse the a,b order.
- Source lines: 49, 67, 73, 81, 105, 109.
- Source SHA-256: `ef9957031f74847c72fe0a1bffa8bdc07afc0f2513114810ccbc68ae577b7ee2`.
- Local tile evidence: `lem-quiver-exact-sequence-correspondence-is-smooth-and-proper--01.png` (`13018a2278a96fa8729d6276981da0b76c8b63a0072b8d060e3e5c7a1de90c84`), `lem-quiver-exact-sequence-correspondence-is-smooth-and-proper--02.png` (`999faba5b78c6e12b524fa688f2a30a28a2692609e75f3cda96751f62333e318`), `lem-quiver-exact-sequence-correspondence-is-smooth-and-proper--03.png` (`1c0be9ed383eea44d300cf487f1ee7bfe6815c33b9318b5d21053d8ab79e06ee`), `lem-quiver-exact-sequence-correspondence-is-smooth-and-proper--04.png` (`521a601bfc8a2f4ee69d7ea21480d0109a181f2b53697a66c6a6e5586b143163`).

## Candidate 3: `thm-braided-category-tensor-product-algebra-structure`

- Review lanes: 01.
- Diagram kind: Optional TikZ braid/string diagram for the associativity comparison on A⊗B⊗A⊗B⊗A⊗B..
- Why considered: The proof explicitly compares two sequences of three B_i/A_j crossings, making the braid order and the disjoint crossing interchange concrete enough to inspect. The proof is already locally explicit, so the diagram is an aid rather than a prerequisite or correctness repair.
- Concrete content/check: Show the three A strands and three B strands through the two parenthesized multiplication routes; label the crossings c_{B,A}, show the hexagon expansions and identify the disjoint B1/A2 and B2/A3 crossings that commute. Keep the proof valid independently of the picture.
- Source lines: 27, 28, 41, 43.
- Source SHA-256: `77cb405e19a568f48287e0ef62d6853d3852d0e11b27b8fb0b549c68acc4c501`.
- Local tile evidence: `thm-braided-category-tensor-product-algebra-structure--01.png` (`3ec7e2cba4a3c10673acb6755be91251413ebd0e2536f008cd689966a4937895`).

## Candidate 4: `thm-finite-quiver-hall-wall-crossing`

- Review lanes: 06.
- Diagram kind: two-panel phase-order/HN-factorization schematic.
- Why considered: The main content is a comparison of two phase-ordered factorizations, and the statement links their equality to equality of induced automorphisms. A small schematic could help readers keep the two orderings and map from Hall product to quantum-torus automorphism distinct.
- Concrete content/check: Use two abstract phase-ray panels labeled Z_- and Z_+, each with decreasing-phase factors S_Z(phi) in the order from equation (1) and an equality between their completed Hall products. Below, show I or J sending the equal products to the same unit A in the completed quantum torus, then conjugation x↦AxA^{-1}. Do not draw numerical rays or assert a specific wall-crossing path, since the theorem quantifies over arbitrary charge assignments and supplies no such path.
- Source lines: 30, 40.
- Source SHA-256: `4f076afe829d4f9f97205e90184ecfd685eb14f784e2a3358ed6739260ab31a7`.
- Local tile evidence: `thm-finite-quiver-hall-wall-crossing--01.png` (`c1ca252817541e703bdff95a55359726371e91eeafd82721ee2f1646cacb90bd`), `thm-finite-quiver-hall-wall-crossing--02.png` (`80518abbd18f4044a05696a151d6a4540e1c45d0d6d3b27ad5823608e5d21c7c`).

## Candidate 5: `thm-four-cocycle-2vect-g-is-fusion-two-category`

- Review lanes: 07.
- Diagram kind: pentagon pasting diagram labeled by homogeneous grades and scalar 4-cocycle factors.
- Why considered: The proof is exactly a comparison of two routes through the associator pentagon, while the current statement and proof are prose/algebra only. A diagram could make the five parenthesizations and the two path products easier to follow.
- Concrete content/check: Draw the five parenthesizations of g,h,k,l,m as vertices and the elementary associator/pentagonator transitions as directed edges; annotate the two boundary routes with the exact scalar products in line 52 and state their equality by line 38. Do not imply a strict 2-category or suppress the scalar modification.
- Source lines: 2, 32, 37, 38, 39, 40, 52.
- Source SHA-256: `6a298bf6158aa32e04cc06a928f274fe39a82e2bdc91bd81037fd551a7d39d12`.
- Local tile evidence: `thm-four-cocycle-2vect-g-is-fusion-two-category--01.png` (`3d8988a63296f01511f62b99adcc32f7086881cb7efd85c6e92058c1983088dc`), `thm-four-cocycle-2vect-g-is-fusion-two-category--02.png` (`bd9e781b39ef3b26c4879061beacbc2aec0847471d503a882fe06e7998b6cab2`).

## Candidate 6: `thm-quiver-quotient-stack-borel-moore-operation-package`

- Review lanes: 05.
- Diagram kind: 2-Cartesian proper/smooth base-change square.
- Why considered: The theorem explicitly includes two 2-Cartesian squares of three-step quiver flags; the proof’s central formula is an exchange identity with both proper pushforward and smooth pullback and depends on frame/base-change orientation. A compact labeled square would make the particular map assignments and equation inspectable.
- Concrete content/check: Draw D_N=A_N×_{C_N}B_N with arrows D_N→A_N (smooth block-forgetting pullback side), D_N→B_N (proper base-change side), A_N→C_N proper f, B_N→C_N smooth q; label the induced exchange q^! f_* = f’_* (q’)^!, after matching names to exact source definitions. Do not collapse the two distinct 2-Cartesian flag squares into an unlabeled generic square.
- Source lines: 33, 61, 62.
- Source SHA-256: `22fed3256acd496ccb886d87f4cdbedc9dbd0d9f1d6a6ee9d4394a1259db176b`.
- Local tile evidence: `thm-quiver-quotient-stack-borel-moore-operation-package--01.png` (`d54c42258945da31cebba7f90cebfee35ed32b1bb0d062a3a402fc9bd2d32eff`), `thm-quiver-quotient-stack-borel-moore-operation-package--02.png` (`bbb427946bdfac10ed825e79939a5f96cefd41f15e092e55b4fdba10b3fb7e78`), `thm-quiver-quotient-stack-borel-moore-operation-package--03.png` (`087fd46c6a3390ad0fcac8929671045ce0eeda1694192f40c333e56db61dd846`).

## Candidate 7: `thm-separable-bimodule-relative-tensor-is-associative`

- Review lanes: 07.
- Diagram kind: bicategory associator pentagon for relative tensor products.
- Why considered: The theorem explicitly asserts bicategory pentagon coherence and its proof invokes two paths around the pentagon, but presents the comparison only in prose. A small diagram would expose the associator direction and routes.
- Concrete content/check: Use four composable bimodules and vertices (((X⊗_B Y)⊗_D Z)⊗_E W), (X⊗_B(Y⊗_D Z))⊗_E W, (X⊗_B Y)⊗_D(Z⊗_E W), X⊗_B((Y⊗_D Z)⊗_E W), and X⊗_B(Y⊗_D(Z⊗_E W)); label the five edges with the canonical associators in the stated direction and compare the two paths. The proof says both preserve the universal four-balanced map; make clear that the diagram is a coherence comparison and does not add hypotheses.
- Source lines: 27, 44, 45, 46, 47, 48.
- Source SHA-256: `475ff2b26598a19cf7c8126f4653d54c24bd8dc2383bf76e4868b7b63d414b2b`.
- Local tile evidence: `thm-separable-bimodule-relative-tensor-is-associative--01.png` (`f0b6e802043d14a694b1a068160031557c7aee96d0dca5cd6bb152f1ed026856`), `thm-separable-bimodule-relative-tensor-is-associative--02.png` (`c4c17eb94c8576cedf3ef45240cce5be24a09fc35d6725fb474b83398768d12f`).
