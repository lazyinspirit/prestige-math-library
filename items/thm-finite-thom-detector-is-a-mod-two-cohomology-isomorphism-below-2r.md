---
id: thm-finite-thom-detector-is-a-mod-two-cohomology-isomorphism-below-2r
kind: theorem
title: "The finite Thom detector is a mod-two cohomology isomorphism below 2r"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - lem-finite-thom-classifying-detector-map-exists-and-is-continuous
  - def-finite-thom-classifying-detector-map
  - lem-universal-real-thom-spaces-are-r-minus-one-connected
  - lem-metastable-cohomology-of-eilenberg-maclane-spaces
  - prop-serre-polynomial-cohomology-of-mod-two-eilenberg-maclane-spaces
  - lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q
  - thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism
dependency_level: 10
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "§13, Theorem 13.2, printed pp. 24–25; the strict <2r endpoint and finite product decomposition are proved locally."
    - title: "Allen Hatcher, Spectral Sequences in Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/SSAT/SSch1.pdf"
      locator: "§1.3, Theorems 1.32 and 1.36 and comparison proof, printed pp. 52–58."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. For the detector f_r:T_r→P_r, the pullback f_r*:H̃ᵏ(P_r;F₂)→H̃ᵏ(T_r;F₂) is an isomorphism for every k<2r. No comparison is asserted at k=2r.

## Facts & Assumptions

**Given:** AC; a rank $r\ge2$; the finite detector $f_r:T_r\to P_r$ of [[def-finite-thom-classifying-detector-map]] with its finite product of Eilenberg–Mac Lane factors; and the stable-coordinate isomorphism of the degreewise constancy lemma.

[F1] The detector exists and is continuous, and its coordinate factors represent the chosen rank-$r$ classes ([[lem-finite-thom-classifying-detector-map-exists-and-is-continuous]], [[def-finite-thom-classifying-detector-map]]); the Thom spaces are $(r-1)$-connected with the described cell structure ([[lem-universal-real-thom-spaces-are-r-minus-one-connected]]).

[F2] The strict metastable theorem identifies $\widetilde H^{q+i}(K(\mathbb F_2,q);\mathbb F_2)$ with $\mathcal A^i$ for $0\le i<q$, and the polynomial presentation controls products of generators ([[lem-metastable-cohomology-of-eilenberg-maclane-spaces]], [[prop-serre-polynomial-cohomology-of-mod-two-eilenberg-maclane-spaces]]); each factor is finite-dimensional in mod-two homology in every degree, so finite-product Künneth applies, and cohomology over a field is dual to homology ([[lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q]], [[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]).

[F3] The free-module decomposition of stable Thom cohomology provides the basis of $\widetilde H^k(T_r;\mathbb F_2)$ in the range $r\le k<2r$; AC underlies the global choices ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 For k<r, the Thom-cell description gives H̃^k(T_r)=0. Every factor K(F₂,r+d_b) is (r−1)-connected, so the finite product has zero reduced cohomology in degrees below r. Thus f_r^* is an isomorphism in this range. [given, F1]

2.1 Now let r≤k<2r and put e=k−r, so 0≤e≤r−1. The stable-coordinate isomorphism gives H̃^k(T_r;F₂) ≅ M^e = ⊕_{b∈B(r), d_b≤e} A^{e−d_b}m_b. The last equality is the graded free-module decomposition; generators with d_b>e cannot contribute because A has no negative degrees. [step 1.1, F2, F3]

3.1 The strict metastable theorem gives, strictly for 0≤i<q, H̃^{q+i}(K(F₂,q);F₂) ≅ A^i, a ↦ a(ι_q). For a factor indexed by b∈B_d, q=r+d. In total degree k<2r, its operation degree is i=k−q=e−d. When i≥0, i ≤ r−d−1 < r+d=q, so the strict Eilenberg–Mac Lane theorem applies. A product of two positive-degree polynomial generators, whether in one factor or in two factors, has degree at least 2r because every q≥r. Hence below 2r the cohomology of the finite product P_r is the direct sum of the single-factor operation classes $\widetilde H^k(P_r;\mathbb F_2)\cong\bigoplus_{b\in B(r),\,d_b\le e}\mathcal A^{e-d_b}$. [step 2.1, F2]

4.1 H̃^k(P_r;F₂) ≅ ⊕_{b∈B(r), d_b≤e} A^{e−d_b}. Here finite-product Künneth applies: each factor has finite-dimensional F₂ homology in every degree by the finite-type lemma, hence finite-free homology over F₂; the polynomial presentation of the Eilenberg–Mac Lane cohomology gives the stated cohomology basis. The classifying-map evaluation identity gives $f_r^*(a(\iota_{r+d_b}))=a(m_{r,b})$. [step 3.1, F2, F3]

5.1 Under the stable-coordinate identification, the right side is exactly a·m_b. The free-module decomposition above says these classes form a basis of H̃^k(T_r). Thus f_r^* is an isomorphism for every k<2r. The endpoint is intentionally excluded. At degree 2r, products of two degree-r classes can occur in P_r, and the strict Eilenberg–Mac Lane computation does not identify them by the argument above. No claim at 2r is used. [step 4.1, F3] ∎
