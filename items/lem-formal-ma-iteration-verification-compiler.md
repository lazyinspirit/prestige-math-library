---
id: lem-formal-ma-iteration-verification-compiler
kind: lemma
title: Fixed finite-fragment verification for the MA iteration
status: draft
origin: pipeline
deps: [thm-omega-two-iteration-forces-ma-and-not-ch, lem-finite-fragment-l-interpretation-with-gch, cor-countable-transitive-models-of-fixed-zfc-fragments, def-axiom-of-choice]
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
    - {title: "Kunen, Set Theory, Martin's Axiom iteration", url: "https://fa.ewi.tudelft.nl/~hart/set_theory/Jech/Kunen-1980-Set_Theory.pdf"}
---

## Statement

For every externally fixed finite fragment $\Delta$ of $\mathrm{ZFC}+\mathrm{MA}+\neg\mathrm{CH}$, there is a finite fragment $\Gamma$ of ZFC such that ZFC proves the existence of a model of $\Delta$ by the constructible-ground and finite-support $\omega_2$-iteration argument. The fragment and its proof may depend on $\Delta$; no PA-verified uniform refutation transformer is asserted.

## Facts & Assumptions

**Given:** One finite list $\Delta$ of target axioms and MA instances, fixed externally.

[F1] [[lem-finite-fragment-l-interpretation-with-gch]] supplies, for each fixed finite source support, an $L$-relativized finite ZF proof of the required GCH instances.

[F2] [[cor-countable-transitive-models-of-fixed-zfc-fragments]] supplies countable transitive models of each fixed finite ZFC source fragment by finite reflection.

[F3] [[thm-omega-two-iteration-forces-ma-and-not-ch]] proves the ccc, bookkeeping, continuum and MA conclusions of the specified finite-support iteration over the required GCH ground.

## Proof

1.1 Fix the actual ZFC axiom and MA instances in $\Delta$. Expand the finite-support iteration proof F3 for those formulas. Its ccc induction, size and bounded-stage capture calculations, bookkeeping argument, and Cohen-coordinate argument use only finitely many ZFC schema instances and the GCH cardinal arithmetic needed at the relevant cardinals. Collect these in a finite source support. The iteration and its forcing relation are set definitions in that support; AC is used in the ccc, cardinal and bookkeeping choices. [F3]

2.1 Apply F1 to the fixed GCH part of that support. Add its finitely many $L$-relativized certificates and the source instances required to construct the $L$ model. Enlarge the resulting finite $\Gamma$ to cover the forcing theorem and the finite target formulas. F2 gives a countable transitive source model of $\Gamma$; its constructible inner model has the particular source GCH instances, and the generic iteration over that model satisfies each member of $\Delta$ by F3. These are ZFC-formalizable fixed-fragment steps, so ZFC proves the existence of the resulting set model of $\Delta$. [F1, F2, F3, step 1.1]

3.1 The argument chooses a finite proof separately for the actual $\Delta$. A semantic schedule for all MA instances does not by itself verify a numerical proof constructor or its PA checker invariant. [step 2.1] ∎
