---
id: lem-stable-thom-detector-coordinates-commute-with-suspension
kind: lemma
title: "Stable Thom detector coordinates commute with suspension"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - def-thom-prespectrum-of-the-universal-real-and-oriented-bundles
  - def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum
  - lem-stable-thom-cohomology-is-degreewise-eventually-constant
  - lem-stable-squares-on-universal-thom-classes
  - def-finite-thom-classifying-detector-map
  - thm-finite-thom-detector-is-a-homotopy-isomorphism-through-2r-minus-2
  - def-stable-homotopy-groups-of-a-sequential-prespectrum
  - def-kronecker-evaluation-pairing
  - lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives
  - def-additive-singular-cohomology-cross-product
  - def-homology-cross-product-for-tensor-complexes
  - lem-the-kunneth-cross-product-map-is-well-defined-and-natural
  - def-singular-chain-cross-product-on-generators
  - lem-singular-chain-cross-product-boundary-formula
  - prop-singular-chain-cross-products-are-natural
  - thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism
dependency_level: 13
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Lectures 7–10, printed pp. 55–91: Thom classes, Thom spectra, and stabilization; the coordinate-pairing compatibility is proved locally."
verification:
  precheck: pass
---

## Statement

Assume AC. Fix n≥0 and V_n=F₂^{B_n}. For every r≥n+2 let D_{r,n}:π_{r+n}(T_r)→V_n pair a sphere class with the rank-r stable-coordinate classes m_{r,b}, b∈B_n. If β_r:S¹∧T_r→T_{r+1} is the prespectrum structure map, then D_{r+1,n}∘(β_r)_*=D_{r,n} under suspension of representatives.

## Facts & Assumptions

**Given:** AC; a stable degree $n\ge0$ and $V_n=\mathbb F_2^{B_n}$; for every $r\ge n+2$ the coordinate map $D_{r,n}:\pi_{r+n}(T_r)\to V_n$ pairing sphere classes with the stable classes $m_{r,b}$, $b\in B_n$; and the prespectrum structure maps $\beta_r:S^1\wedge T_r\to T_{r+1}$.

[F1] The degreewise constancy lemma gives $\sigma^{-1}\beta_r^*m_{r+1,b}=m_{r,b}$ for the inverse-limit element $m_b$ ([[lem-stable-thom-cohomology-is-degreewise-eventually-constant]], [[def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum]], [[lem-stable-squares-on-universal-thom-classes]]); the detector coordinates are the same classes, and the finite-range theorem makes $D_{r,n}$ an isomorphism on the tail ([[def-finite-thom-classifying-detector-map]], [[thm-finite-thom-detector-is-a-homotopy-isomorphism-through-2r-minus-2]]).

[F2] The Kronecker pairing is natural in both variables and independent of cocycle and cycle representatives ([[def-kronecker-evaluation-pairing]], [[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]]); the cohomology suspension of a class is paired with the suspension of a cycle through the external cross product, whose mod-two fundamental classes multiply without sign ([[def-additive-singular-cohomology-cross-product]], [[def-homology-cross-product-for-tensor-complexes]], [[lem-the-kunneth-cross-product-map-is-well-defined-and-natural]], [[def-singular-chain-cross-product-on-generators]], [[lem-singular-chain-cross-product-boundary-formula]], [[prop-singular-chain-cross-products-are-natural]], [[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]).

[F3] The prespectrum structure maps are the fixed-coordinate maps of the definition ([[def-thom-prespectrum-of-the-universal-real-and-oriented-bundles]]) and AC fixes the global basis ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Fix n≥0 and the degree-n part B_n of the single global basis fixed in the detector definition. For every r≥n+2, define D_{r,n}:π_{r+n}(T_r)→V_n, V_n=F₂^{B_n}, by pairing with the stable coordinates m_{r,b}, b∈B_n. The finite-range theorem says D_{r,n} is an isomorphism. This is the same map as the π_{r+n} map of f_r after identifying π_{r+n}(P_r) with V_n by its normalized Eilenberg–Mac Lane fundamental classes. [given, F1]

2.1 Let β_r:S¹∧T_r→T_{r+1} be the prespectrum structure map, and let b_{r,n} be its induced stabilization map on π_{r+n}. Since m_b is an inverse-limit element, its coordinates satisfy σ⁻¹β_r^* m_{r+1,b}=m_{r,b}. For a based representative α:S^{r+n}→T_r, naturality of the Kronecker pairing gives ⟨m_{r+1,b}, (β_r∘(1∧α))_*[S¹∧S^{r+n}]_{F₂}⟩ =⟨β_r^* m_{r+1,b}, (1∧α)_*[S¹∧S^{r+n}]_{F₂}⟩ =⟨m_{r,b}, α_*[S^{r+n}]_{F₂}⟩. All sphere classes in these pairings are mod-two fundamental classes, not unreduced integral classes. For the second equality, represent the cohomology suspension of m_{r,b} by its external product with the degree-one generator of S¹. Under S¹∧S^{r+n}≅S^{r+n+1}, the mod-two sphere fundamental class is the external product of the two mod-two fundamental classes. Evaluation of external products on product chains is the product of the two evaluations; the S¹ factor evaluates to 1. Naturality of the Kronecker pairing then gives exactly the displayed equality. These are the published suspension, external-product/Künneth, and Kronecker naturality interfaces; coefficients are F₂, so there is no sign ambiguity. Thus $D_{r+1,n}b_{r,n}=D_{r,n}$ coordinate by coordinate, proving the claimed suspension compatibility. [step 1.1, F1, F2, F3] ∎
