---
id: thm-universal-elliptic-curve-r1-is-lisse-and-pointwise-pure-of-weight-one
kind: theorem
title: Universal elliptic R1 is lisse and pointwise pure of weight one
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-full-level-modular-curve-moduli-problem-and-universal-elliptic-curve
- lem-elliptic-relative-r1-lisse-and-pure
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, Proper base change
    url: https://stacks.math.columbia.edu/tag/095S
    locator: Section 59.91 source scope; the relative elliptic statement is locally reconstructed in the exact named supplier.
dependency_level: 8
proof_strategy: direct
axiom_use: AC is explicit and inherited from the relative elliptic R1 supplier.
---

## Statement

Assume the Axiom of Choice. Let S be a locally Noetherian scheme carrying an actual elliptic curve π:E→S whose restriction to the characteristic-zero locus is the universal curve for a supplied full-level modular moduli model, and let ℓ be invertible on S. The rationalization of the compatible finite-level sheaves `R¹π_*(Z/ℓ^n)` is lisse of rank two. At every closed point x with finite residue field F_q, every geometric-Frobenius eigenvalue on its rational geometric stalk has absolute value √q under every complex embedding of its algebraic splitting field. The extension to the S-model is given; this statement does not assert representability or existence of such a model.

## Facts & Assumptions

**Given:** AC, the locally Noetherian base, actual elliptic extension of the universal curve and invertible prime in the Statement.

[F1] The full-level moduli definition describes a universal elliptic curve when the representing S-model is supplied; it does not assert representability. [[def-full-level-modular-curve-moduli-problem-and-universal-elliptic-curve]]

[F2] For every elliptic curve over a locally Noetherian base with ℓ invertible, the actual finite-level R¹ system is lisse rank two and its finite-field geometric Frobenius eigenvalues have absolute value √q. [[lem-elliptic-relative-r1-lisse-and-pure]]

[F3] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** specialization of the general relative elliptic result.

1.1 The given extension π is an elliptic curve over S in the scope of [F2]; [F1] identifies its characteristic-zero restriction as the supplied universal curve. ℓ is invertible by hypothesis. [F1, F2, F3, given]

2.1 Apply [F2]. Its actual finite-level system is the one in the Statement, so its rationalization is lisse of rank two, and its finite-field fibres have the stated geometric-Frobenius absolute values. No separate assertion that a universal S-model exists is made. [F2, F3, step 1.1, given, algebra] ∎

## Source and authoring record

This local AC-scoped corollary applies the relative elliptic supplier. It does not supply modular-model existence, a derived rational-adic direct-image construction, or unqualified proper base change. This AC-scoped corollary is installed as a draft; its owner readiness is recorded separately.
