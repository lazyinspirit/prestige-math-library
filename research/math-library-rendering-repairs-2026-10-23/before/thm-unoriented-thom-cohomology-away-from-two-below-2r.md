---
id: thm-unoriented-thom-cohomology-away-from-two-below-2r
kind: theorem
title: "Unoriented Thom cohomology away from two and its strict endpoint"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - lem-finite-cover-transfer-with-inverted-degree-and-sign-anti-invariants
  - thm-bo-bso-cohomology-away-from-two
  - def-stiefel-space-grassmannian-and-tautological-bundle
  - def-oriented-grassmannian-and-tautological-oriented-bundle
  - def-r-oriented-vector-bundle-and-orientation-local-system
  - lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence
  - lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology
  - thm-thom-isomorphism-for-oriented-vector-bundles
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "§17, Proposition 17.1 and Corollary 17.2; twisted Thom conclusion and endpoint corrected locally"
    - title: "J. P. May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Chapter 23 §5, Thom isomorphism, printed pp.194–196"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. Let R be a nonzero commutative unital ring with 2 invertible, r>0, MO(r)=Th(γ_r), and MSO(r)=Th(γ_r⁺). Then reduced H^i(MO(r);R)=H^{i−r}(BO(r);O_R(γ_r)). For odd r this is zero in every degree. For r=2m it is the shifted module u e R[p₁,…,p_m], with |u|=r, |e|=r and |p_i|=4i, interpreted through the oriented cover, not as a global unoriented R-Thom class. In particular reduced H^i(MO(r);R)=0 for i<2r, whereas reduced H^{2r}(MO(2m);R)=R. For MSO(r), reduced H^i(MSO(r);R)=H^{i−r}(BSO(r);R).

## Facts & Assumptions

**Given:** AC; a nonzero commutative ring $R$ with $2$ invertible; a rank $r\ge1$; the universal real bundle $\gamma_r$ with its disk and sphere bundles and sign local system $O_R(\gamma_r)$; and the oriented double cover $BSO(r)\to BO(r)$ with its two-lift CW model.

[F1] The general relative Thom isomorphism identifies reduced Thom cohomology with the cohomology of the base with coefficients in the orientation local system ([[lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence]], [[def-r-oriented-vector-bundle-and-orientation-local-system]]), and relative cohomology of the disk/sphere quotient is the reduced cohomology of the Thom space ([[lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology]], [[thm-thom-isomorphism-for-oriented-vector-bundles]]).

[F2] The finite-cover transfer identifies the orientation-local-system cohomology with the anti-invariant part of the double cover ([[lem-finite-cover-transfer-with-inverted-degree-and-sign-anti-invariants]]), and the away-from-two computation gives the polynomial presentations of $BO$ and $BSO$ with their orientation behaviour ([[thm-bo-bso-cohomology-away-from-two]]).

[F3] The classical tautological and oriented models supply the bundles and cells used ([[def-stiefel-space-grassmannian-and-tautological-bundle]], [[def-oriented-grassmannian-and-tautological-oriented-bundle]]), and AC is inherited from the transfer and CW model choices ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 The finite-cover transfer identifies the right side with the anti-invariants of BSO(r) cohomology. In odd rank the polynomial generators are all orientation independent, so the anti-invariant part is zero: x=−x implies x=0 because 2 is invertible. In even rank r=2m, the polynomial presentation has anti-invariant part eR[p₁,…,p_{m-1},e²]=eR[p₁,…,p_m]. This proves the module formulas stated at the beginning of the theorem and their exact endpoint. Upstairs, the oriented Thom class changes sign under the deck map, so multiplying it by this anti-invariant Euler factor gives the invariant class u e. This explains why it descends, and why there is no unqualified unoriented R-Thom class. [given, F1, F2]

2.1 For MSO(r), the oriented Thom theorem instead gives H~^i(MSO(r);R)=H^{i-r}(BSO(r);R). [step 1.1, F1, F2, F3] ∎
