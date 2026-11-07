---
id: lem-henselian-mixed-characteristic-integral-flat-annihilators
kind: lemma
title: "Integral annihilators for finite-flat groups over Henselian mixed-characteristic traits"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 20
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-finite-flat-groups-over-henselian-dvr-have-zero-higher-cohomology
  - lem-finite-flat-torsors-over-a-henselian-dvr-extend-generic-sections
  - thm-smooth-affine-commutative-groups-have-etale-fppf-comparison
  - thm-galois-h1-of-smooth-connected-group-over-finite-field-vanishes
  - lem-henselian-completion-finite-etale-and-finite-module-tate-comparison
  - lem-complete-mixed-characteristic-integral-flat-annihilators
justified_by: []
proof_strategy: direct
axiom_use: "AC and DC are assumed for the completion, smooth-group and complete local-duality suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, second edition"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "III §1, pp. 241–243 for the complete local duality setting; this Henselian completion transfer is reconstructed here."
verification: {}
---

## Statement

Assume AC and DC. Let $R$ be a Henselian DVR with finite residue field and characteristic-zero fraction field $K$. For every commutative finite flat $R$-group $N$ and its Cartier dual $N^D$, both degree-one restrictions to $K$ are injective, and their images are exact annihilators under the normalized perfect generic Tate pairing. No completeness or prime-to-residue-characteristic assumption is imposed.

## Facts & Assumptions

**Given:** The Henselian DVR, finite flat group and dual in the Statement.

[A1] The Axiom of Choice and Dependent Choice are assumed. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] A finite-flat group has a smooth connected affine finite-flat isogeny resolution over $R$. [[lem-finite-flat-groups-over-henselian-dvr-have-zero-higher-cohomology]]

[F2] Restriction to the generic fibre is injective on finite-flat torsor isomorphism classes. [[lem-finite-flat-torsors-over-a-henselian-dvr-extend-generic-sections]]

[F3] Smooth affine cohomology over a Henselian finite-residue DVR agrees with residue cohomology, and smooth connected finite-field groups have zero first cohomology. [[thm-smooth-affine-commutative-groups-have-etale-fppf-comparison]] [[thm-galois-h1-of-smooth-connected-group-over-finite-field-vanishes]]

[F4] Completion preserves all generic finite-module cohomology and the actual normalized local Tate pairing. [[lem-henselian-completion-finite-etale-and-finite-module-tate-comparison]]

[F5] Over the complete characteristic-zero finite-residue valuation ring, the two integral degree-one images are exact annihilators. [[lem-complete-mixed-characteristic-integral-flat-annihilators]]

## Proof

**Proof technique:** transfer the two integral images to completion using density and generic injectivity.

1.1 Write $\widehat R$ and $\widehat K$ for the completions. By [F1] choose a finite-flat isogeny $0\to N\to H\to H'\to0$ with $H,H'$ smooth affine and geometrically connected. By [F3], $H^1(R,H)=0$ and $H^1(\widehat R,H_{\widehat R})=0$, so both integral first cohomology groups are respectively $H'(R)/H(R)$ and $H'(\widehat R)/H(\widehat R)$. The same construction applies to $N^D$. [A1, F1, F3, given, choose, algebra]

2.1 The map $H'(R)\to H'(\widehat R)$ has dense image. Indeed a smooth chart near any completed point is given by finitely many polynomial equations with an invertible Jacobian minor. Approximate the free coordinates and an approximate solution by elements of the dense subring $R$; Hensel's simple-root lifting for that minor corrects the remaining coordinates while preserving an arbitrarily prescribed congruence. The image of $H(\widehat R)$ in $H'(\widehat R)$ is open: the characteristic-zero finite generic kernel makes the differential invertible over $\widehat K$, and on a sufficiently deep congruence chart the inverse-linearized nonlinear term is strictly contracting. Thus every coset of the completed image contains an $R$-point of $H'$, giving surjectivity of $H^1(R,N)\to H^1(\widehat R,N)$. [step 1.1, construct, algebra]

3.1 If an $R$-torsor becomes trivial over $\widehat R$, its generic class becomes zero over $\widehat K$. By [F4] generic restriction to completion is an isomorphism, so the original generic class is zero; [F2] then makes the original $R$-torsor trivial. Therefore the map in step 2.1 is also injective. Apply the same argument to $N^D$. [F2, F4, step 2.1, algebra]

4.1 The square of integral and generic restriction maps commutes for both groups. By step 3.1 the integral completion maps are bijective; by [F4] the generic maps and normalized pairings are isomorphisms. The exact annihilators over $\widehat R$ from [F5] therefore pull back to exact annihilators over $R$. Injectivity into the generic fibres is [F2]. [F2, F4, F5, step 3.1, algebra] ∎
