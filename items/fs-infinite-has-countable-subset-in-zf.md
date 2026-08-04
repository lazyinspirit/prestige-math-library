---
id: fs-infinite-has-countable-subset-in-zf
kind: false-statement
title: "FALSE: every infinite set has a countably infinite subset, in ZF"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [rem-cohen-first-model, def-countable, def-countable-choice, def-equinumerous, lem-pigeonhole]
justified_by: []
aliases: []
landmark: false
short: "not a ZF theorem"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Does DC imply countable choice uniformly? (Journal of Symbolic Logic)"
      url: "https://www.cambridge.org/core/journals/journal-of-symbolic-logic/article/does-mathsf-dc-imply-mathsf-acomega-uniformly/05069A84199B3477B3BEA2E58EF21AF6"
    - title: "Dedekind-infinite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dedekind-infinite_set"
    - title: "Amorphous set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Amorphous_set"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
pipeline_run: null
---

## Statement

**FALSE.** The statement

> every infinite set has a countably infinite subset

is a theorem of ZF: it can be proved from the Zermelo-Fraenkel axioms without
any choice principle.

Here "infinite" means "not finite" and "countably infinite" means "equinumerous
with $\mathbb{N}$" ([[def-countable]], [[def-equinumerous]]). The claim is
plausible because the proof everyone reaches for seems to need nothing at all:
$A$ is infinite, so it is nonempty, so pick $a_0 \in A$; then $A \setminus \{a_0\}$
is still infinite, so pick $a_1$; and so on, giving
$\{a_0, a_1, a_2, \dots\} \approx \mathbb{N}$. The "and so on" is the whole
difficulty. Each step depends on the previous choices and there are infinitely
many of them, so what the argument uses is dependent choice
([[def-countable-choice]] records where DC sits), not a construction. Nothing in
ZF turns "$A$ is not equinumerous with any natural number" into a rule for
naming elements of $A$.

## Facts & Assumptions

**Given:** The axioms of ZF, **assumed to be consistent**, together with the external metamathematical result cited below. Every conclusion here is relative to that consistency assumption, which cannot be dropped and cannot be proved inside ZF. "$S$" abbreviates the displayed statement above.

[A1] **If** ZF is consistent, **then** there is a model of ZF containing an infinite set with no countably infinite subset (equivalently, an infinite set that is not Dedekind-infinite). Such models are produced by forcing, following Cohen (1963), whose first model is exactly of this kind ([[rem-cohen-first-model]]), and by transferring Fraenkel-Mostowski permutation models, where the witnesses are amorphous sets, into ZF by the Jech-Sochor embedding theorem. This is an external result, it is NOT proved in this library, and it presupposes the consistency of ZF assumed in the Given.

[L1] "Infinite" means not finite, that is, not equinumerous with any natural number; "countably infinite" means equinumerous with $\mathbb{N}$ ([[def-countable]], [[def-equinumerous]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose $S$ were a theorem of ZF. [assume-contra]

1.2 By [A1], and under the consistency assumption of the Given, fix a model $M$ of ZF containing an infinite set $A$ with no countably infinite subset. [A1, given]

2.1 Every theorem of ZF holds in every model of ZF, so $M$ satisfies $S$; applied to $A$, which is infinite in $M$, this yields a countably infinite subset of $A$ in $M$. [step 1.1, step 1.2, L1]

3.1 That contradicts the defining property of $A$ in $M$, and no model satisfies both a statement and its negation; hence, under the consistency of ZF assumed in the Given, $S$ is not a theorem of ZF. Equivalently and without any assumption: if ZF proves $S$, then ZF is inconsistent. [step 1.2, step 2.1, discharge-contradiction] ∎

## Remarks

- **What is and is not proved here.** As in [[fs-zorn-provable-in-zf]] and [[fs-countable-union-theorem-of-zf]], the refutation is conditional on the consistency of ZF and rests on an independence result that this library does not prove. The honest reading is: $S$ is a theorem of ZF only if ZF is inconsistent.

- **With [[def-countable-choice|$\mathrm{AC}_\omega$]] the statement is true**, which is exactly why it feels obvious. This standard contrast is not proved in this library either. Given an infinite $A$, for each $n$ the set of injections $n \to A$ is nonempty, and $\mathrm{AC}_\omega$ selects one for every $n$ at once; from that sequence a countably infinite subset is assembled with no further choices. The intuition behind the naive argument is therefore not wrong, it is just not a ZF argument.

- **Two notions of infinite come apart in ZF.** A set is *Dedekind-infinite* when it is equinumerous with a proper subset of itself, equivalently when it has a countably infinite subset. Dedekind-infinite implies infinite in ZF, and that direction is a theorem of this library rather than a convention: it is claim 5 of [[lem-pigeonhole]], transported along a bijection. In detail, suppose $A$ were both finite and Dedekind-infinite, say $f : A \to n$ is a bijection onto a natural number and $g : A \to B$ is a bijection onto a proper subset $B \subsetneq A$. Then $f[B] \subseteq n$, and $f[B] \neq n$ because $f$ is injective and $B \neq A$, while $n \approx A \approx B \approx f[B]$; so $n$ is equinumerous with a proper subset of itself, which claim 5 forbids. The converse implication, that infinite implies Dedekind-infinite, is exactly $S$. So ZF does not prove the two notions equivalent, unless ZF is inconsistent: that separation is the conditional conclusion of the refutation above and inherits its consistency hypothesis, and an amorphous set, one that cannot be split into two infinite pieces at all, is infinite in the weak sense only.

- This is the reason the library's definition of finiteness ([[def-countable]]) is by equinumerosity with a natural number rather than by the Dedekind condition. The two definitions are equivalent under $\mathrm{AC}_\omega$ and not equivalent in ZF, and only the first supports the induction arguments used in [[lem-subset-of-countable]] and [[lem-finite-subsets-listable]].
