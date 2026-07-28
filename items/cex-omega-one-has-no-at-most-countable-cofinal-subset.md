---
id: cex-omega-one-has-no-at-most-countable-cofinal-subset
kind: counterexample
title: "Refuted: every limit ordinal has an at most countable cofinal subset — $\\omega_1$ has none, assuming countable choice"
status: draft
origin: session
deps: [thm-countable-subsets-of-omega-one-are-bounded, rem-omega-one-and-the-cost-of-choice, def-cofinal-subset-of-an-ordinal, thm-omega-one-is-the-least-uncountable-ordinal, def-first-uncountable-ordinal, def-countable-choice, def-countable, lem-ordinal-basics, lem-ordinal-trichotomy, def-limit-ordinal, lem-omega-least-limit-ordinal, def-ordinal, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
short: "$\\omega_1$ refutes it, under $\\mathrm{AC}_\\omega$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Cofinality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofinality"
    - title: "First uncountable ordinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First_uncountable_ordinal"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
pipeline_run: null
---

## Statement refuted

**False claim:** every limit ordinal has an at most countable cofinal subset
([[def-cofinal-subset-of-an-ordinal]], [[def-countable]]).

The claim is plausible because every limit ordinal a reader meets first does
have one. $\omega$ is cofinal in itself and at most countable; and **every** at
most countable limit ordinal $\lambda$ is cofinal in itself and at most
countable, so the claim holds for all of them, and $\omega + \omega$ and
$\omega^{2}$ are among them, both being shown at most countable earlier on this
page. Whether $\omega^{\omega}$ and $\varepsilon_0$ are at most countable is a
question no item on these pages settles, so neither is offered here as an
instance.

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). The first
uncountable ordinal $\omega_1$ ([[def-first-uncountable-ordinal]]) refutes the
claim: it is a limit ordinal, and no at most countable subset of it is cofinal
in it.

The hypothesis is not removable, and the item states it in the title: **without
a choice principle the refutation itself fails**, since consistently with ZF the
ordinal $\omega_1$ is the supremum of an $\omega$-sequence of at most countable
ordinals. That is recorded in [[rem-omega-one-and-the-cost-of-choice]].

## Facts & Assumptions

**Given:** The Axiom of Countable Choice ([[def-countable-choice]]) and $\omega_1$, the first uncountable ordinal ([[def-first-uncountable-ordinal]]).

[L1] $C \subseteq \alpha$ is cofinal in $\alpha$ when every $\xi \in \alpha$ satisfies $\xi \le \eta$ for some $\eta \in C$ ([[def-cofinal-subset-of-an-ordinal]]).

[L2] $\omega_1$ is uncountable, every ordinal in $\omega_1$ is at most countable, and $\omega_1$ is a limit ordinal ([[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-limit-ordinal]]).

[L3] Assuming $\mathrm{AC}_\omega$: no at most countable subset of $\omega_1$ is cofinal in $\omega_1$ (claim (b) of [[thm-countable-subsets-of-omega-one-are-bounded]]).

[L4] $\omega$ is a limit ordinal and is at most countable, being $\mathbb{N}$ ([[lem-omega-least-limit-ordinal]], [[def-countable]], [[def-natural-numbers]]).

[L5] Every ordinal is transitive and $\mu \subseteq \nu$ iff $\mu \in \nu$ or $\mu = \nu$ ([[def-ordinal]], [[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).

## Counterexample

**Proof technique:** direct.

1.1 The claim does hold for every at most countable limit ordinal $\lambda$: the set $\lambda$ itself is a subset of $\lambda$, it is at most countable by hypothesis, and it is cofinal in $\lambda$ by [L1], since every $\xi \in \lambda$ satisfies $\xi \le \xi \in \lambda$. In particular it holds at $\lambda = \omega$ by [L4]. [L1, L4]

1.2 $\omega_1$ is a limit ordinal by [L2], so it is an instance of the claim. [L2]

2.1 No at most countable $C \subseteq \omega_1$ is cofinal in $\omega_1$, by [L3]; so the claim fails at $\omega_1$. [step 1.2, L1, L3]

3.1 Therefore $\omega_1$ is a limit ordinal with no at most countable cofinal subset, and the claim that every limit ordinal has one is false. [step 2.1, step 1.2, step 1.1] ∎

## Remarks

**What separates $\omega_1$ from the countable limit ordinals.** A limit ordinal is always cofinal in itself, so the claim can only fail when the ordinal is itself uncountable. $\omega_1$ is the least uncountable ordinal ([[thm-omega-one-is-the-least-uncountable-ordinal]]), so it is the first place where the claim can fail at all, and under $\mathrm{AC}_\omega$ it does fail there.

**The refutation carries the hypothesis it uses.** [[thm-countable-subsets-of-omega-one-are-bounded]] is stated under $\mathrm{AC}_\omega$ and spends it at exactly one step, so this counterexample inherits the same cost. A page that quotes this item must carry $\mathrm{AC}_\omega$ forward into its own statement; [[rem-omega-one-and-the-cost-of-choice]] is the ledger, and it names the model in which the conclusion fails outright.

**What is deliberately not said.** In the usual vocabulary this item says $\operatorname{cf}(\omega_1) > \omega$, or "$\omega_1$ is regular". Neither the cofinality function nor the ordinal sense of the word *regular* is defined in this library — the word does occur here, but only as the separation axiom for topological spaces — so the statement is made in terms of subsets only ([[def-cofinal-subset-of-an-ordinal]]). Nothing is lost: the applications, such as the non-normality of the deleted Tychonoff plank, use exactly the subset form.
