---
id: fs-transfinite-induction-needs-choice
kind: false-statement
title: "FALSE: transfinite induction and recursion need the Axiom of Choice"
status: draft
origin: session
deps: [thm-transfinite-induction, thm-transfinite-recursion, def-axiom-of-choice, thm-well-ordering-theorem, thm-zorn]
justified_by: []
aliases: []
landmark: false
short: "both are ZF theorems; the choosing is a separate cost"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Transfinite induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Transfinite_induction"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Axiom schema of replacement (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_schema_of_replacement"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
pipeline_run: null
---

## Statement

**FALSE.** Transfinite induction ([[thm-transfinite-induction]]) and transfinite
recursion ([[thm-transfinite-recursion]]) require the Axiom of Choice
([[def-axiom-of-choice]]): arguments that run along a well-order past the finite
stages are not available in ZF alone.

The claim is plausible because the constructions one meets first do cost the
Axiom of Choice. Well ordering an arbitrary set, extending a linearly
independent family to a basis, building a maximal object stage by stage: each
of these is usually presented as a transfinite recursion, and each really does
need choice. The confusion is about which half of the argument is expensive. It
is never the recursion.

## Facts & Assumptions

**Given:** The axioms of ZF. The two theorems named in the claim are proved earlier on this page, and the point at issue is which axioms those proofs consume.

[A1] The Axiom of Choice is the statement that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[L1] Transfinite induction is proved from a single property of the well-order, that every nonempty subset has a least element, with no selection anywhere ([[thm-transfinite-induction]]).

[L2] Transfinite recursion is proved from Separation, Union and Replacement, and at every stage the object used is the **unique** attempt with the given domain, so nothing is selected ([[thm-transfinite-recursion]]).

[L3] The place where this development genuinely spends the Axiom of Choice is Zorn's lemma ([[thm-zorn]]), consumed once inside the well-ordering theorem ([[thm-well-ordering-theorem]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], transfinite induction is a theorem of ZF: its proof takes the least element of the complement of the given set and derives a contradiction, and no family of sets is ever chosen from. [L1]

1.2 By [L2], transfinite recursion is a theorem schema of ZF: Replacement collects the attempts, and uniqueness of the attempt with a given domain means the construction is determined rather than selected. [L2]

2.1 Both principles are therefore available in ZF without any choice principle, so the claim is false. [step 1.1, step 1.2, A1]

3.1 The correct diagnosis is that the cost lies in the class function fed to the recursion: when it is given by a formula, as it is for the order type assignment and the Hartogs construction on this page, the whole construction is choice-free, whereas the informal rule "at stage $a$ take some element not yet used" names no formula and needs a choice function supplied in advance, which is exactly how the well-ordering theorem spends the axiom. [step 2.1, A1, L2, L3]

4.1 Transfinite induction and transfinite recursion are theorems of ZF, and the claim is refuted. [step 2.1, step 3.1] ∎

## Remarks

**A useful test.** Ask what the value at stage $a$ is. If the answer is a definite description, "the least ordinal such that", "the order type of", "the union of the earlier values", then the recursion is choice-free. If the answer is "some element with the following property", and there is generally more than one, then a choice function is being used and must be paid for.

**Three choice-free constructions on this page.** The collapsing map of [[thm-mostowski-collapse]], the family of order types in [[thm-hartogs]], and the comparison map of [[lem-well-order-comparability]] are all defined by formulas, which is why each is a ZF theorem. Their proofs say so explicitly, and the reason is always the same: rigidity of well-orders makes the relevant witnesses unique ([[lem-well-order-rigid]]).

**Dependent choice is the usual hidden cost.** A construction along $\mathbb{N}$ that picks an object at each step, using the previous one, needs the principle of dependent choice (DC). It is not transfinite recursion that costs this; it is the picking. Where DC sits is a separate question and a strictly metamathematical one: **if ZF is consistent**, then DC is not a theorem of ZF and DC does not imply the Axiom of Choice, so DC is then strictly between the two. Both separations are external results, established by forcing and permutation models, quoted from the references and proved nowhere in this library; the consistency hypothesis cannot be dropped and cannot be proved inside ZF. **The refutation above needs none of this**, because transfinite induction and transfinite recursion are outright theorems of ZF and the claim is refuted by exhibiting their proofs. The ledger of principles is [[rem-choice-ledger]].

**Ordinary induction is the same story.** Nobody suspects induction on $\mathbb{N}$ ([[thm-induction-principle]]) of using choice, and transfinite induction is the same theorem with $\mathbb{N}$ replaced by an arbitrary well-order. The proofs are the same length and use the same single ingredient.
