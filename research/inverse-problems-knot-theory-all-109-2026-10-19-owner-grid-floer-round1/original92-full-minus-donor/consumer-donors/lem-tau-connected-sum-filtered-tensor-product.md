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
  - lem-tau-is-independent-of-heegaard-grid
  - def-knot-connected-sum-and-prime-knot
  - lem-knot-connected-sum-well-defined
  - def-oriented-seifert-surface
  - def-oriented-seifert-surface-and-knot-genus
  - def-admissible-pointed-heegaard-floer-data
  - def-grid-diagram-for-an-oriented-knot
  - alg-grid-knot-floer-complex
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
  - def-countable-choice
dependency_level: 9
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC_omega is used only for finite admissible diagram and neck-stretching choices in the declared route; the filtered tensor threshold calculation is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter S. Ozsvath and Zoltan Szabo, Knot Floer homology and the four-ball genus"
      url: "https://arxiv.org/pdf/math/0301149v4"
      locator: "Proposition 3.2, printed pp.9–10; connected-sum filtered tensor product and tau additivity"
    - title: "Jennifer Hom, A survey on Heegaard Floer homology and concordance"
      url: "https://arxiv.org/pdf/1512.00383v3"
      locator: "§3.1, connected-sum additivity of tau"
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Chapters 5, 6, and 13; connected-sum grid models and their filtered knot Floer interpretation"
---

## Statement

Assume the Axiom of Countable Choice. Let $K$ and $J$ be smooth oriented knots in the standard oriented three-sphere, with chosen minimum-genus oriented Seifert surfaces. A normalized $CFK^\infty(K)$ is a free finite-rank chain complex over $\mathbb F_2[U,U^{-1}]$ with two integer filtrations $(i,j)$, where multiplication by $U$ lowers both coordinates by one. Give the connected sum $K\#J$ the fixed oriented gluing convention and the sum filtrations and Maslov/Alexander gradings. Then $CFK^\infty(K\#J)$ is bifiltered chain homotopy equivalent to $CFK^\infty(K)\otimes_{\mathbb F_2[U,U^{-1}]}CFK^\infty(J)$, with an equivalence and homotopies preserving both filtration coordinates. Moreover, the normalized finite filtered hat complex of $K\#J$ is filtered chain homotopy equivalent to $C_K\otimes C_J$ with tensor filtration $F_s(C_K\otimes C_J)=\sum_{p+q\le s}F_pC_K\otimes F_qC_J$. Consequently,
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

**Given:** The Axiom of Countable Choice, the two oriented knots and Seifert surfaces, and the fixed connected-sum gluing datum.

[A1] [[def-countable-choice]] is the sequence-choice principle used to select the finite diagrams in the analytic connected-sum construction.

[F1] [[lem-tau-additive-for-filtered-tensor-products]] proves that finite filtered complexes with one-dimensional total homology satisfy $\tau(C\otimes D)=\tau(C)+\tau(D)$ for the stated convolution filtration.

[F2] [[def-knot-connected-sum-and-prime-knot]] fixes the oriented boundary gluing used to define $K\#J$.

[F3] [[lem-knot-connected-sum-well-defined]] proves that changing the local sum data does not change the oriented knot type under its stated $\mathrm{AC}_\omega$ hypothesis.

[L1] [[lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing]] proves the actual full-marked disk count and compactification package. Its statement contains no connected-sum tensor factorization: the ordinary-stabilization target operation adds a cancelling torus and does not replace the two nontrivial connected-summand matching problem here.

[L2] [[thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization]] supplies actual full-minus move comparisons, variable restrictions and ordinary collapse, with Seifert-cap normalization on doubly pointed models. It can identify a constructed connected-sum diagram with other endpoint diagrams, but does not itself identify its differential with a tensor differential or prove additivity of the two summands' absolute grading origins.

[L3] [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] is required for the declared grid presentation and normalized analytic complex to agree; its current Step-1 record is escalated.

## Proof

1.1 If the connected-sum filtered chain homotopy equivalence in the Statement has been constructed, both endpoint total homologies are $\mathbb F_2$ and [F1] applies to its tensor filtration. It then gives $\tau(K\#J)=\tau(K)+\tau(J)$. The oriented knot represented by the chosen local gluing is independent of that local choice by [F2] and [F3]. [F1, F2, F3, given, algebra]

2.1 The missing premise in step 1.1 is the bifiltered $CFK^\infty$ connected-sum equivalence and the finite filtered hat-complex tensor equivalence. Their proofs require a connected-sum Heegaard diagram, a neck-stretching limit identifying every index-one disk with the product/neck configurations, compactness and gluing in both directions, and verification that the Maslov and absolute Alexander normalizations add. The actual disk-analysis item [L1] does not contain this connected-sum gluing argument. The move comparison [L2] applies after that argument has constructed the required endpoint model; the grid comparison [L3] and the tensor/absolute-additivity operations are separate obligations. The declared construction uses [A1] only to select the required finite diagram and perturbation data. Therefore the equivalences and the full connected-sum statement remain unproved here; the finite algebraic consequence in step 1.1 is conditional only. [A1, L1, L2, L3, step 1.1, given]
