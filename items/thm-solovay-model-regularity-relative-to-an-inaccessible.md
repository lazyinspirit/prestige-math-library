---
id: thm-solovay-model-regularity-relative-to-an-inaccessible
kind: theorem
title: Solovay-model regularity is consistent relative to an inaccessible cardinal
status: published
origin: pipeline
deps: [lem-solovay-construction-is-uniformly-formalizable, thm-finite-fragment-relative-consistency-transfer, thm-solovay-model-fails-full-choice, cor-solovay-model-has-no-vitali-or-bernstein-set, thm-solovay-model-has-no-hamel-basis-or-discontinuous-additive-function, cor-solovay-model-has-no-banach-tarski-decomposition]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: finite-fragment-relative-consistency
sources: {references: [{title: "Solovay 1970, Theorem 1 and p. 2", url: "https://people.math.ethz.ch/~fdalio/ZKmodel.pdf"}]}
verification:
  audited: 2026-09-14
---

## Statement

$\operatorname{Con}(\mathrm{ZFC}+\text{an inaccessible})$ implies $\operatorname{Con}(\mathrm{ZF}+\mathrm{DC}+\text{universal LM+BP+PSP}+\neg\mathrm{AC})$, including the stated exclusions. No converse or internal inaccessible is asserted.

## Facts & Assumptions

**Given:** The standard arithmetized consistency predicates.

[F1] [[lem-solovay-construction-is-uniformly-formalizable]]: for every externally fixed finite target fragment, the source theory proves that a set model of that fragment exists by a finite reflected-model construction.

[F2] [[thm-finite-fragment-relative-consistency-transfer]]: externally indexed finite-fragment model transfers imply the one-way consistency implication, without a uniform internal proof transformer.

[F3] [[thm-solovay-model-fails-full-choice]], [[cor-solovay-model-has-no-vitali-or-bernstein-set]], [[thm-solovay-model-has-no-hamel-basis-or-discontinuous-additive-function]], and [[cor-solovay-model-has-no-banach-tarski-decomposition]]: supply the finite target consequences.

## Proof

1.1 Put $T=\mathrm{ZFC}+$“there is an inaccessible cardinal” and let $U$ be the explicitly countable target theory in the Statement. For each external finite $\Delta\subseteq U$, F1 explicitly supplies a finite source fragment $\Gamma$ together with a $T$-proof that a suitable countable transitive model of $\Gamma$ exists and a $T$-proof converting that model into a set model of $\Delta$. These are exactly the two externally indexed hypotheses of F2. Hence external $\operatorname{Con}(T)$ implies $\operatorname{Con}(U)$. No uniform arithmetic proof-code map is used. [F1, F2]

2.1 The finite target formulas available in F1 include ZF, DC, universal LM/BP/PSP and failure of AC; F3 supplies the advertised named exclusions in that same target model, so any finite proof using them is covered by the same fragment construction. The inaccessible occurs only in $T$. Thus the displayed one-way consistency implication, and no converse or internal large-cardinal assertion, follows. [F1, F3, step 1.1] ∎
