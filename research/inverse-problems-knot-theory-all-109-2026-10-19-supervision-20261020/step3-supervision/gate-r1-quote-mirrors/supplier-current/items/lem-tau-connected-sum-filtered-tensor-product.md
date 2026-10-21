---
id: lem-tau-connected-sum-filtered-tensor-product
kind: lemma
title: "The filtered knot Floer complex of a connected sum is a tensor product"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-knot-floer-filtration-and-tau
  - lem-tau-additive-for-filtered-tensor-products
  - def-knot-connected-sum-and-prime-knot
  - lem-knot-connected-sum-well-defined
  - def-oriented-seifert-surface
  - def-countable-choice
  - thm-balanced-knot-data-admit-full-marked-square-zero-holomorphic-counts
  - thm-balanced-s-three-knot-generators-admit-consistent-relative-gradings
  - thm-strictly-admissible-triple-free-polygons-have-full-marked-low-dimensional-counts
  - lem-os-disk-and-polygon-analytic-foundations
  - lem-transverse-linear-strip-cauchy-riemann-isomorphism
  - lem-real-boundary-strip-cauchy-riemann-inverse-with-free-end-constants
  - lem-flat-complex-torus-cauchy-riemann-mean-inverse-and-normalized-dipoles
  - thm-balanced-knot-ordinary-stabilization-has-full-minus-inverse-maps
  - lem-same-handlebody-model-top-counts-have-no-positive-marked-terms
  - thm-balanced-knot-full-minus-auxiliary-continuations-are-filtered-equivalences
  - thm-balanced-knot-attaching-moves-have-full-minus-inverse-maps
  - thm-globally-weak-hat-handleslides-have-explicit-inverse-homotopies
  - lem-balanced-periodic-domain-morse-chern-evaluation
  - lem-heegaard-polygon-spin-c-difference-is-the-capped-periodic-domain
  - lem-heegaard-polygon-relative-maslov-variation-is-chern-plus-marks
  - thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization
  - lem-doubly-pointed-knot-morse-fields-have-a-zero-framed-seifert-extension
  - thm-doubly-pointed-s-three-moves-preserve-the-seifert-normalized-filtration
  - thm-handle-cancellation
dependency_level: 5
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The Statement retains AC_omega. The published connected-sum theorem is imported as stated, without a local analytic reconstruction or a claim about its weakest set-theoretic base; base change and the finite tensor-threshold calculation require no further choice."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and knot invariants"
      url: "https://arxiv.org/pdf/math/0209056"
      locator: "Section7, Theorem7.1, actual PDF43–45; multiplication triple, meridian slide and Seifert-cap origins"
    - title: "Ozsvath and Szabo, Holomorphic disks and three-manifold invariants: properties and applications"
      url: "https://arxiv.org/pdf/math/0105202"
      locator: "Section6, actual PDF34–40, especially Proposition6.4 and the triangle multiplication proof of Theorem6.2"
    - title: "Peter S. Ozsvath and Zoltan Szabo, Knot Floer homology and the four-ball genus"
      url: "https://arxiv.org/pdf/math/0301149v4"
      locator: "Proposition 3.2, printed pp.9–10; connected-sum filtered tensor product and tau additivity"
    - title: "Jennifer Hom, A survey on Heegaard Floer homology and concordance"
      url: "https://arxiv.org/pdf/1512.00383v3"
      locator: "§3.1, Theorem 3.1(1), printed p.8; tau is a concordance-group homomorphism; coefficients F₂ throughout, stated p.2"
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Chapters 5, 6, and 13; connected-sum grid models and their filtered knot Floer interpretation"
---

## Statement

Assume the Axiom of Countable Choice. Let $K$ and $J$ be smooth oriented knots in the standard oriented three-sphere, with chosen minimum-genus oriented Seifert surfaces $F_K$ and $F_J$. Use the boundary-connected-sum surface $F_K\natural F_J$ to normalize the connected-sum model. A normalized $CFK^\infty(K)$ is a free finite-rank chain complex over $\mathbb F_2[U,U^{-1}]$ with two integer filtrations $(i,j)$, where multiplication by $U$ lowers both coordinates by one. Give the connected sum $K\#J$ the fixed oriented gluing convention and the sum filtrations and Maslov/Alexander gradings. Then $CFK^\infty(K\#J)$ is bifiltered chain homotopy equivalent to $CFK^\infty(K)\otimes_{\mathbb F_2[U,U^{-1}]}CFK^\infty(J)$, with an equivalence and homotopies preserving both filtration coordinates. Moreover, the normalized finite filtered hat complex of $K\#J$ is filtered chain homotopy equivalent to $C_K\otimes C_J$ with tensor filtration $F_s(C_K\otimes C_J)=\sum_{p+q\le s}F_pC_K\otimes F_qC_J$. Consequently,
$$\tau(K\#J)=\tau(K)+\tau(J).$$

## Statement references

[[def-knot-floer-filtration-and-tau|The normalized finite filtered complex and tau threshold]]

[[def-knot-connected-sum-and-prime-knot|The fixed oriented connected-sum gluing convention]]

[[lem-tau-additive-for-filtered-tensor-products|Additivity of the threshold under a filtered tensor product]]

[[lem-knot-connected-sum-well-defined|Independence of local connected-sum choices]]

[Ozsvath and Szabo, *Knot Floer homology and the four-ball genus*, Proposition 3.2](https://arxiv.org/pdf/math/0301149v4)

[Hom, *A survey on Heegaard Floer homology and concordance*, §3.1](https://arxiv.org/pdf/1512.00383v3)

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, Chapters 5, 6, and 13](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

## Facts & Assumptions

**Given:** Countable choice, the knots and their chosen oriented Seifert surfaces, and the fixed oriented connected-sum convention.

[A1] [[def-countable-choice]] is the sequence-choice principle assumed in the Statement.

[F1] [[def-knot-floer-filtration-and-tau]] defines the finite normalized filtered hat complex and its threshold for the specified diagram and Seifert surface.

[F2] [[def-knot-connected-sum-and-prime-knot]] fixes the oriented connected-sum convention, and [[lem-knot-connected-sum-well-defined]] identifies the resulting knot type independently of the local gluing choices.

[F3] [[lem-tau-additive-for-filtered-tensor-products]] proves additivity of the threshold for the finite tensor filtration when both total homology groups are one-dimensional.

[F4] **External input, authorized by the run-specific source boundary.** Ozsváth and Szabó, *Holomorphic disks and knot invariants*, §7, Theorem 7.1, PDF pp. 43–45, states filtered chain homotopy equivalences for the knot complexes $CFK^0$, $CFK^-$, and $CFK^\infty$ under connected sum, using the boundary-connected-sum Seifert surface and the sum of the Alexander and Maslov gradings. The hypotheses apply to knots in $S^3$. The theorem is stated over $\mathbb Z$; tensoring its chain maps, inverse maps, and homotopies with $\mathbb F_2$ preserves their identities. Its tensor filtration on homogeneous generators gives the convolution filtration displayed in the Statement. I read the theorem and its proof sketch; the proof constructs the standard triangle map and refers to Ozsváth–Szabó, *Holomorphic disks and three-manifold invariants: properties and applications*, §6, for the ordinary connected-sum map. I read that section through Theorem 6.2, but do not claim to reconstruct the knot-filtration adaptation stated in Theorem 7.1.

[F5] **External input, authorized by the run-specific source boundary.** Hom, *A survey on Heegaard Floer homology and concordance*, §3.1, Theorem 3.1(1), printed p. 8, states that the standard $\tau$ invariant is a homomorphism from the smooth knot concordance group to $\mathbb Z$. Hom's threshold definition in §3.1 is the same least filtered level as [F1]; its target is $\widehat{HF}(S^3)\cong\mathbb F_2$, so “nonzero image” and “surjective” agree. The survey states on printed p. 2 that it works throughout with $\mathbb F_2$ coefficients. I read the definition and theorem statement; I do not claim to reconstruct the theorem's cited proof.

## Proof

**Given:** The hypotheses of the Statement.

1.1 Apply the external connected-sum theorem [F4] to the chosen doubly pointed models for $(K,F_K)$ and $(J,F_J)$. Its $CFK^\infty$ conclusion gives the required bifiltered chain homotopy equivalence, and its $CFK^0$ conclusion gives the finite hat equivalence for the boundary-connected-sum surface. The theorem's maps and inverse homotopies are over the stated coefficient ring; base change from $\mathbb Z$ to $\mathbb F_2$ preserves each chain-map and homotopy identity. The source's generator filtration is the sum of the input Alexander levels, so the induced increasing filtration is exactly $\sum_{p+q\le s}F_pC_K\otimes F_qC_J$. [F1, F2, F4, given, construct]

2.1 A filtered chain homotopy equivalence between finite complexes with one-dimensional total homology preserves the threshold. Indeed, each filtered map commutes with the inclusion into total homology, and the induced total map is an isomorphism; a nonzero class from one filtered subcomplex therefore maps to a nonzero class from the corresponding subcomplex of the other. Applying this in both directions shows that the least such filtration level agrees. [F1, step 1.1, algebra]

3.1 The two total homology groups are $\mathbb F_2$, so their tensor has one-dimensional total homology. Apply the finite tensor-threshold formula [F3] to the equivalence in step 1.1, obtaining additivity for the specified diagramwise thresholds. Hom's external theorem [F5] identifies the unqualified $\tau(K)$ with the common standard knot invariant and states its additivity under connected sum. This gives the final invariant-level formula without treating any unverified local analytic factorization as a premise. [F3, F5, step 1.1, step 2.1, algebra] ∎
