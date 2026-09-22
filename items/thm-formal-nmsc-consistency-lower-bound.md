---
id: thm-formal-nmsc-consistency-lower-bound
kind: theorem
title: "Metatheoretic consistency lower bound for NMSC"
status: published
origin: pipeline
deps: [thm-normal-moore-implies-inner-model-measurable, def-relativization-to-a-definable-class, lem-interpretation-translates-finite-derivations, thm-formal-relative-consistency-from-verified-proof-reduction, thm-finite-fragment-relative-consistency-transfer, def-arithmetic-provability-and-consistency, def-axiom-of-choice]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "William G. Fleissner, If all normal Moore spaces are metrizable, then there is an inner model with a measurable cardinal"
      url: "https://kuscholarworks.ku.edu/server/api/core/bitstreams/88062b98-5ab8-4fdc-9548-9e00a9c7507d/content"
      locator: "Main theorem and consistency-strength discussion, printed pp. 365-368"
    - title: "Freiburg, Course Notes for Set Theory and Independence Proofs (2024), Lemma 3.5.12 p54"
      url: "https://home.mathematik.uni-freiburg.de/maxwell/coursenotes-settheoryandindependenceproofs.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Externally, in the metatheory $\mathrm{ZFC}$,
$\operatorname{Con}(\mathrm{ZFC} + \mathrm{NMSC})$ implies
$\operatorname{Con}(\mathrm{ZFC} + \text{there is a measurable cardinal})$.
Here each consistency assertion is evaluated on the standard natural-number
proof codes using the arithmetic formula fixed in
[[def-arithmetic-provability-and-consistency]]. No claim is made that an
unspecified arithmetic base proves the displayed implication.

## Facts & Assumptions

**Given:** The metatheory $\mathrm{ZFC}$; the fixed arithmetization of the calculus of [[def-arithmetic-provability-and-consistency]].

[F1] $\mathrm{ZFC}+\mathrm{NMSC}$ proves that there is an inner model with a measurable cardinal ([[thm-normal-moore-implies-inner-model-measurable]]). In the first-order class convention this has the following finite-fragment meaning: for each externally fixed finite set $\Delta$ of target axioms, one uses a single class-defining formula (with its fixed parameters) for the asserted inner model, and the source theory proves nonemptiness of that class and every $\sigma^M$ for $\sigma\in\Delta$. This is separate relativization for each fixed formula, not quantification over a class truth predicate ([[def-relativization-to-a-definable-class]]).

[F2] Every actual derivation is finite. If an actual $U$-refutation uses the finite set $\Delta$ of nonlogical axioms, apply [F1] only to that $\Delta$. Relativization to its one nonempty class predicate is an interpretation of the finite theory $\Delta$ in the source theory, so the finite derivation translates to a source refutation ([[lem-interpretation-translates-finite-derivations]], [[thm-finite-fragment-relative-consistency-transfer]]).

[F3] This per-refutation, externally selected finite translation proves only the external consistency implication. It does not provide one fixed interpretation of all of $U$, an effective selector of class predicates from proof codes, or a base-verifiable total refutation-code map. Any assertion that an arithmetic base $B$ proves the implication would require exactly such additional uniform data ([[thm-formal-relative-consistency-from-verified-proof-reduction]]).



## Proof

**Proof technique:** direct.

1.1 Let $T:=\mathrm{ZFC}+\mathrm{NMSC}$ and $U:=\mathrm{ZFC}+\text{there is a measurable cardinal}$. Suppose, contrapositively, that an actual finite $U$-refutation $p$ exists, and let $\Delta$ be the finite set of nonlogical $U$-axioms occurring in $p$. [given, F2]

2.1 Apply the finite-fragment reading of the inner-model theorem [F1] to this particular $\Delta$. It supplies one definable nonempty class $M$ and $T$-proofs of $\sigma^M$ for every $\sigma\in\Delta$. With membership and equality unchanged, these finitely many obligations make relativization to $M$ an interpretation of the finite theory $\Delta$ in $T$. [step 1.1, F1, F2]

3.1 Translate the fixed refutation $p$ through that finite interpretation. By [F2], its translated logical steps and the finitely many proofs from step 2.1 assemble into an actual $T$-refutation. Thus every actual $U$-refutation entails an actual $T$-refutation, so absence of a $T$-refutation entails absence of a $U$-refutation. Under the standard-natural-number convention in the Statement, this is $\operatorname{Con}(T)\to\operatorname{Con}(U)$. [step 1.1, step 2.1, F2, F3] ∎

## Remarks

- **What is and is not used.** The proof supplies the external syntactic consistency implication by selecting a definable-class relativization after a particular finite refutation is fixed. It neither claims one fixed global interpretation nor that a named arithmetic base proves the implication, and it does not build or assume a transitive set model of the source theory.
- **AC.** $\mathrm{ZFC}$ is part of both theories; the relativization of AC to the inner model is part of [F1], and no additional choice principle is used in the transfer ([[def-axiom-of-choice]]).
