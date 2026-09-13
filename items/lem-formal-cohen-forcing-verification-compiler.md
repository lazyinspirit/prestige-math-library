---
id: lem-formal-cohen-forcing-verification-compiler
kind: lemma
title: Fixed finite-fragment verification for the Cohen countermodels
status: draft
origin: pipeline
deps: [lem-forcing-transfer-for-finite-zfc-fragments, thm-cohen-forcing-controls-the-continuum, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Kunen, Set Theory, Chapters VII–VIII", url: "https://fa.ewi.tudelft.nl/~hart/set_theory/Jech/Kunen-1980-Set_Theory.pdf"}
---

## Statement

For each externally fixed finite fragment $\Delta$ of $\mathrm{ZFC}+\neg\mathrm{CH}$, and likewise of $\mathrm{ZFC}+\neg\mathrm{GCH}$, the Cohen forcing argument admits a finite ZFC verification for $\Delta$ of the kind required by [[lem-forcing-transfer-for-finite-zfc-fragments]]. Consequently ZFC proves that a model of that particular $\Delta$ exists. This is an externally indexed assertion about each fixed fragment; it does not assert a PA-verified uniform proof-code constructor.

## Facts & Assumptions

**Given:** One externally fixed finite target fragment $\Delta$ and its finite list of Separation and Replacement instances.

[F1] [[lem-forcing-transfer-for-finite-zfc-fragments]] converts a supplied finite formal forcing verification into a finite source fragment and a ZFC proof of a model of $\Delta$.

[F2] [[thm-cohen-forcing-controls-the-continuum]] proves that Cohen forcing preserves cardinals and adds at least the indexed number of distinct reals.

## Proof

1.1 In ZFC let $\lambda=(2^{\aleph_0})^+$ and use $P=\operatorname{Add}(\omega,\lambda)$. The empty condition witnesses nonemptiness. The finite-partial-function definition gives the preorder and generic-coordinate names as sets. The delta-system ccc argument and the maximal-antichain cardinal-preservation argument in F2 are ZFC proofs; for this fixed $\Delta$, collect the finitely many axioms and schema instances they use. AC is used for the cardinal successor and the maximal-antichain argument. [F2]

2.1 For distinct $\xi,\eta<\lambda$, extending a condition at a fresh bit forces the $\xi$ and $\eta$ coordinate reals to differ. Thus $\lambda$ injects into the reals of the extension. Since $P$ preserves $\aleph_2$, it forces $2^{\aleph_0}\ge\aleph_2$, hence $\neg\mathrm{CH}$. GCH implies CH at $\omega$, so the same extension forces $\neg\mathrm{GCH}$. No ground-model CH or equality for the continuum is used. [F2, step 1.1]

3.1 For the chosen $\Delta$, include its finitely many ZFC axioms and the finite instances needed to verify the forcing relation, the generic extension, cardinal preservation, and step 2.1. The forcing theorem supplies a formal derivation that every condition forces each target member; the quantified schema instances in $\Delta$ are handled one at a time as their actual formulas, with their translated forcing instances included in the finite source fragment. F1 now yields a ZFC proof that a model of this fixed $\Delta$ exists. The choices of proofs and finite support may depend on $\Delta$; no arithmetic uniformity or PA checker theorem follows. [F1, step 1.1, step 2.1] ∎
