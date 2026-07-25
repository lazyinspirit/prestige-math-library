---
id: fs-countable-union-theorem-of-zf
kind: false-statement
title: "FALSE: countable unions of countable sets are countable is a theorem of ZF"
status: published
origin: session
deps: [rem-feferman-levy-model, thm-countable-union-of-countable, def-countable-choice, thm-r-uncountable, def-countable, thm-n-cross-n-countable]
justified_by: []
aliases: []
landmark: false
short: "the countable-union theorem is not ZF"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "Zermelo-Fraenkel set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory"
    - title: "Cardinality of the continuum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinality_of_the_continuum"
pipeline_run: null
---

## Statement

**FALSE.** The statement

> a union of countably many at most countable sets is at most countable

is a theorem of ZF: it can be proved from the Zermelo-Fraenkel axioms with no
appeal to any choice principle.

The claim is plausible because the proof looks like pure bookkeeping. One writes
the elements of $A_n$ as $a_{n,0}, a_{n,1}, a_{n,2}, \dots$, reads off the array
by diagonals, and every single step of that argument is elementary, with the
countability of $\mathbb{N} \times \mathbb{N}$ ([[thm-n-cross-n-countable]])
doing the real work and needing no choice. What is easy to miss is the very first
move: writing the elements of $A_n$ as a list means choosing one enumeration of
$A_n$, for every $n$ at once, out of the many that each $A_n$ admits. That is
exactly the Axiom of Countable Choice ([[def-countable-choice]]), and
[[thm-countable-union-of-countable]] flags it at the step where it is spent.

## Facts & Assumptions

**Given:** The axioms of ZF, **assumed to be consistent**, together with the external metamathematical result cited below. Every conclusion here is relative to that consistency assumption, which cannot be dropped and cannot be proved inside ZF. "$U$" abbreviates the displayed statement above.

[A1] **If** ZF is consistent, **then** there is a model of ZF in which $\mathbb{R}$ is a union of countably many at most countable sets (Feferman and Levy, 1963, by forcing, [[rem-feferman-levy-model]]). This is an external result, it is NOT proved in this library, and it presupposes the consistency of ZF assumed in the Given.

[L1] $\mathbb{R}$ is uncountable, and the proof is carried out in ZF alone, using no choice principle at any step ([[thm-r-uncountable]]); "uncountable" means "not at most countable" ([[def-countable]]).

[L2] $U$ is provable from ZF together with $\mathrm{AC}_\omega$ ([[thm-countable-union-of-countable]], [[def-countable-choice]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose $U$ were a theorem of ZF. [assume-contra]

1.2 By [A1], and under the consistency assumption of the Given, fix a model $M$ of ZF in which $\mathbb{R}$ is a union of countably many at most countable sets. [A1, given]

2.1 Every theorem of ZF holds in every model of ZF, so $M$ satisfies $U$; applied to the countable family of at most countable sets whose union is $\mathbb{R}$ in $M$, this makes $\mathbb{R}$ at most countable in $M$. [step 1.1, step 1.2]

2.2 By [L1], "$\mathbb{R}$ is uncountable" is also a theorem of ZF, hence also holds in $M$: in $M$, $\mathbb{R}$ is not at most countable. [step 1.2, L1]

3.1 So $M$ would satisfy both "$\mathbb{R}$ is at most countable" and its negation, which no model does; hence, under the consistency of ZF assumed in the Given, $U$ is not a theorem of ZF. Equivalently and without any assumption: if ZF proves $U$, then ZF is inconsistent. [step 2.1, step 2.2, discharge-contradiction] ∎

## Remarks

- **What is and is not proved here.** The refutation is a correct argument given the cited independence result, but that result is not proved in this library: the Feferman-Levy model is built by forcing, which is deferred. The honest reading is conditional, namely that $U$ is a theorem of ZF only if ZF is inconsistent. It is recorded this way deliberately rather than presented as fully derived, exactly as in [[fs-zorn-provable-in-zf]].

- **The correct reading of the true theorem.** [[thm-countable-union-of-countable]] assumes $\mathrm{AC}_\omega$ and is not weakened by this item; what this item says is that the assumption is doing real work and cannot be dropped. The library's habit of naming the exact step that spends a choice principle is what makes the difference visible.

- **How strange the Feferman-Levy model is.** In it ([[rem-feferman-levy-model]]) $\mathbb{R}$ is a countable union of countable sets, yet $\mathbb{R}$ is still uncountable, since [[thm-r-uncountable]] is a ZF theorem. There is no contradiction: countably many countable sets can have an uncountable union when no single function enumerates them all simultaneously. What fails is not any statement about $\mathbb{R}$ but the ability to assemble the enumerations.

- The same phenomenon is why "a countable union of countable sets of reals" arguments in analysis, for instance in measure theory, are usually stated over ZFC or at least ZF plus $\mathrm{AC}_\omega$. The choice ledger is not a formality there either.
