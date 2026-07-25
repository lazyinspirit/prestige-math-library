---
id: cor-ac-iff-zorn
kind: corollary
title: "The Axiom of Choice and Zorn's lemma are equivalent"
status: published
origin: session
deps: [thm-zorn, thm-zorn-implies-ac, def-axiom-of-choice]
justified_by: []
forward_refs: [rem-choice-strengths, thm-ultrafilter-lemma]
external_refs: [rem-godel-constructible-universe, rem-cohen-forcing-ac-independent]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Zorn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zorn%27s_lemma"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Statement

Over ZF, the Axiom of Choice ([[def-axiom-of-choice]]) and Zorn's lemma
([[thm-zorn]]) are equivalent: each implies the other.

## Facts & Assumptions

**Given:** The axioms of ZF.

[L1] The Axiom of Choice implies Zorn's lemma ([[thm-zorn]]).

[L2] Zorn's lemma implies the Axiom of Choice ([[thm-zorn-implies-ac]]).

## Proof

**Proof technique:** direct.

1.1 Assuming the Axiom of Choice, every nonempty poset in which each chain has an upper bound has a maximal element, which is Zorn's lemma. [L1]

1.2 Assuming Zorn's lemma, every family of nonempty sets has a choice function, which is the Axiom of Choice. [L2]

2.1 Each statement implies the other over ZF, so they are equivalent. [step 1.1, step 1.2] ∎

## Remarks

- This is the item later pages cite when they want to use either form without re-arguing the passage between them. The ultrafilter lemma ([[thm-ultrafilter-lemma]]) uses the Zorn form; results about products of nonempty sets use the choice-function form.
- Equivalence is over **ZF**, and it is a genuine two-way implication proved here, not an appeal to authority. What is *not* proved here, and cannot be until forcing is available, is that either statement is independent of ZF. That rests on two external results this library records but does not prove, [[rem-godel-constructible-universe]] and [[rem-cohen-forcing-ac-independent]]; where the weaker choice principles sit is [[rem-choice-strengths]], and the corresponding trap is [[fs-zorn-provable-in-zf]].
- Because the two are equivalent, a theorem proved with Zorn's lemma costs **at most** the Axiom of Choice, and the equivalence says nothing beyond that. It does not say the theorem *needs* the Axiom of Choice: a proof through Zorn is an upper bound on the price, never a lower one. The ultrafilter lemma ([[thm-ultrafilter-lemma]]) is the standing example, proved here with Zorn and yet, **if ZF is consistent**, on the external results recorded in [[rem-choice-strengths]], strictly weaker than the Axiom of Choice, so that proof overpays. The consistency hypothesis is not decoration and cannot be dropped: "strictly weaker" is a relative-consistency claim, resting on models of ZF in which the ultrafilter lemma holds and the Axiom of Choice fails, and an inconsistent ZF would prove everything, collapsing the separation. Only a statement that is itself equivalent to the Axiom of Choice, as Zorn's lemma is by this corollary, costs exactly the Axiom of Choice, no more and no less. Where the weaker principles sit is [[rem-choice-strengths]].
