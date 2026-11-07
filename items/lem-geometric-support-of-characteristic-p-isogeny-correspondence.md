---
id: lem-geometric-support-of-characteristic-p-isogeny-correspondence
kind: lemma
title: Geometric support of the characteristic-p isogeny correspondence
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-relative-frobenius-and-verschiebung-of-an-elliptic-family
- lem-frobenius-and-verschiebung-graphs-on-fine-modular-curves
- lem-geometric-rank-p-subgroups-of-an-elliptic-curve
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Pierre Deligne, Formes modulaires et représentations ℓ-adiques
    url: https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf
    locator: §4, characteristic-p correspondences; only geometric support is established below.
dependency_level: 2
proof_strategy: direct
axiom_use: AC is assumed by the named Frobenius and subgroup suppliers.
---

## Statement

Assume AC. Let p be prime, N≥3 with p∤N, and Y/F_p a smooth fine full-level-N modular curve. Let k be algebraically closed of characteristic p. Consider pairs of k-points of Y related by a finite flat degree-p isogeny whose kernel is a rank-p subgroup of E[p] and whose target frame is induced by the isogeny. This set of pairs is exactly the union of the k-points of the two graph families `(id,F_Y)` and `(F_Y,D_p)` from [[lem-frobenius-and-verschiebung-graphs-on-fine-modular-curves]]. At a geometric ordinary curve the two subgroup choices are distinct; at a geometric supersingular curve they give the same pair. Here ordinary means the T^p coefficient of `[p]` is nonzero and supersingular means it is zero. No moduli-scheme multiplicities or cohomological Hecke identity are asserted.

## Facts & Assumptions

**Given:** AC, p, N, Y and algebraically closed k as in the Statement.

[F1] Relative Frobenius and Verschiebung are degree-p finite flat isogenies, satisfy `VF=[p]`, and induce isomorphisms on prime-to-p torsion. [[lem-relative-frobenius-and-verschiebung-of-an-elliptic-family]]

[F2] The characteristic-p Frobenius and Verschiebung families give the two stated level-framed graphs. [[lem-frobenius-and-verschiebung-graphs-on-fine-modular-curves]]

[F3] Over algebraically closed k, an ordinary elliptic curve has exactly two rank-p subgroup schemes of E[p], the connected Frobenius kernel and one étale subgroup; a supersingular one has only the Frobenius kernel. [[lem-geometric-rank-p-subgroups-of-an-elliptic-curve]]

[F4] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** classify the kernel and reverse Frobenius on the algebraically closed field.

1.1 The two graph families in [F2] consist of finite flat degree-p isogenies. Their kernels lie in p-torsion: `VF=[p]` gives this for ker F, while the corresponding identity `FV=[p]` gives it for ker V. Thus every graph point is one of the pairs in the Statement. [F1, F2, F4, given, algebra]

2.1 Take a framed elliptic curve `(E,α)` over k and a rank-p subgroup C⊂E[p]. By [F3], either C=ker F_E or E is ordinary and C is the unique étale rank-p subgroup. In the first case F_E is an fppf quotient by C, so any degree-p isogeny with that kernel factors uniquely through F_E and gives the same framed target; this is the first graph point. [F1, F2, F3, F4, step 1.1, given, algebra]

3.1 In the remaining ordinary case, Frobenius of the algebraically closed field k is an automorphism. Twist E and its frame back along its inverse to get a framed curve `(E₀,α₀)` with `F_E₀(α₀)=α`. Its Verschiebung has étale kernel, because the ordinary leading coefficient remains nonzero under field twist. By [F3], this kernel is the unique étale C. Its quotient isogeny therefore has the same framed target as any isogeny with kernel C, and [F2] identifies the pair with `(F_Y(y₀),D_p(y₀))`. If E is supersingular, both graph families have the unique subgroup as kernel, so their quotient targets with induced frames are uniquely isomorphic and they give the same pair. This proves the claimed equality of sets without assigning multiplicities. [F1, F2, F3, F4, step 2.1, given, construct, algebra] ∎

## Source and authoring record

This is only a statement about geometric points. The scheme-theoretic p-isogeny correspondence, its ordinary/supersingular multiplicities and the cohomological Eichler–Shimura identity remain separate.
