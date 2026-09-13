---
id: cor-formal-consistency-of-ma-and-not-ch
kind: corollary
title: Externally fixed-fragment relative consistency of MA and not CH
status: published
origin: pipeline
deps: [lem-formal-ma-iteration-verification-compiler]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Kunen, Set Theory, Martin's Axiom iteration", url: "https://fa.ewi.tudelft.nl/~hart/set_theory/Jech/Kunen-1980-Set_Theory.pdf"}
---

## Statement

Externally, $\operatorname{Con}(\mathrm{ZFC})$ implies $\operatorname{Con}(\mathrm{ZFC}+\mathrm{MA}+\neg\mathrm{CH})$. This is a fixed finite-fragment metatheorem, without a claim that PA verifies a uniform proof-code reduction.

## Facts & Assumptions

**Given:** One hypothetical finite contradiction proof in the target theory.

[F1] [[lem-formal-ma-iteration-verification-compiler]] gives a ZFC proof of a model of every externally fixed finite target fragment.

## Proof

1.1 A contradiction proof in $\mathrm{ZFC}+\mathrm{MA}+\neg\mathrm{CH}$ uses some finite set $\Delta$ of target axioms, including finitely many MA instances. Apply F1 to that particular $\Delta$. ZFC proves that a model of $\Delta$ exists, while the alleged contradiction proof and finite-model soundness give a ZFC proof that no such model exists. Thus a target inconsistency would imply a ZFC inconsistency. [F1]

2.1 Contraposition yields the displayed external relative-consistency implication. No assertion about PA verification of the fragment-selection map is needed. [step 1.1] ∎
