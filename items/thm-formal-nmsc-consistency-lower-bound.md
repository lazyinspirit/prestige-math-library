---
id: thm-formal-nmsc-consistency-lower-bound
kind: theorem
title: "Formal consistency lower bound for NMSC"
status: draft
origin: pipeline
deps: [thm-normal-moore-implies-inner-model-measurable, lem-interpretation-translates-finite-derivations, thm-formal-relative-consistency-from-verified-proof-reduction, thm-finite-fragment-relative-consistency-transfer, def-arithmetic-provability-and-consistency, def-axiom-of-choice]
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

[F1] $\mathrm{ZFC} + \mathrm{NMSC}$ proves "there is an inner model with a measurable cardinal" ([[thm-normal-moore-implies-inner-model-measurable]]); unpacked, it proves the existence of a transitive class $M$ containing all ordinals with $M \models \mathrm{ZFC}$ and $M \models$ "$\kappa$ is measurable" for some $\kappa$.

[F2] Relativizing every axiom of $\mathrm{ZFC}$ and the sentence "there is a measurable cardinal" to the fixed formula defining $M$ gives an interpretation of the target theory in the source theory: each relativized axiom is a theorem of $\mathrm{ZFC}+\mathrm{NMSC}$ by [F1] together with the standard relativization properties of the ZF axioms. As an interpretation it transports derivations: every target derivation of $\varphi$ yields a source derivation of the guarded relativization, and in particular a target refutation yields a source refutation ([[lem-interpretation-translates-finite-derivations]]).

[F3] The effective interpretation of [F2] sends every actual finite target derivation to an actual finite source derivation, so an actual target refutation yields an actual source refutation ([[lem-interpretation-translates-finite-derivations]]). This proves the external consistency implication. The stronger conclusion that a specified arithmetic base $B$ proves the implication would additionally require $B$-verification of a total refutation-code map ([[thm-formal-relative-consistency-from-verified-proof-reduction]]); no such internal-base conclusion is used here. The finite-fragment theorem records the same external-versus-uniform distinction for the model-theoretic sibling route ([[thm-finite-fragment-relative-consistency-transfer]]).



## Proof

**Proof technique:** direct.

1.1 Let $T := \mathrm{ZFC} + \mathrm{NMSC}$ and $U := \mathrm{ZFC} + \text{there is a measurable cardinal}$. By [F1] the fixed source theory proves that a transitive class model $M$ of $\mathrm{ZFC}$ with a measurable cardinal exists. [given, F1]
2.1 Relativize each $U$-axiom to $M$. By [F2] every such relativization is a $T$-theorem, so the relativization is an interpretation of $U$ in $T$. [step 1.1, F2]
3.1 Suppose $U$ had an actual refutation. Relativizing the finitely many axioms that refutation uses produces an actual $T$-refutation by [F2] and [F3]. Hence the absence of an actual $T$-refutation excludes every actual $U$-refutation. Equivalently, under the standard-natural-number reading fixed in the Statement, $\operatorname{Con}(T) \to \operatorname{Con}(U)$ holds. [step 2.1, F2, F3] ∎

## Remarks

- **What is and is not used.** The proof supplies the external syntactic consistency implication from the internal theorem plus the effective relativization map. It neither claims that a named arithmetic base proves the implication nor builds a set model of $\mathrm{ZFC}$, and it does not assume a transitive set model of the source theory.
- **AC.** $\mathrm{ZFC}$ is part of both theories; the relativization of AC to the inner model is part of [F1], and no additional choice principle is used in the transfer ([[def-axiom-of-choice]]).
