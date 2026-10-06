---
id: def-countable-choice
kind: definition
title: "The Axiom of Countable Choice ($\\mathrm{AC}_\\omega$)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-choice-function, def-axiom-of-choice, def-countable, thm-well-ordering-principle, lem-countable-iff-surjection-from-n]
justified_by: []
forward_refs: [cor-relative-consistency-of-feferman-levy-choice-failures-over-zf]
aliases: [def-ac-omega, axiom-of-countable-choice]
landmark: false
short: "$\\mathrm{AC}_\\omega$"
sources:
  scraped: []
  references:
    - title: "D. H. Fremlin, Measure Theory, Chapter 56"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap56.pdf"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
verification:
  repair: research/recorded-retirement-2026-10-06/receipts/def-countable-choice.json
---

## Definition

The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following
statement.

> For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by
> $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that
> $f(n) \in X_n$ for every $n \in \mathbb{N}$.

Equivalently, in the vocabulary of [[def-choice-function]]: every at most
countable family of nonempty sets ([[def-countable]]) has a choice function.

## Remarks

- **The two formulations are equivalent, and the passage between them uses no
  choice.** Given an at most countable family $\mathcal{F}$ of nonempty sets,
  either $\mathcal{F} = \varnothing$, where the empty function is a choice
  function, or a surjection $s : \mathbb{N} \to \mathcal{F}$ exists
  ([[lem-countable-iff-surjection-from-n]]); applying the indexed form to
  $X_n := s(n)$ gives $f$ with $f(n) \in s(n)$, and
  $g(S) := f(\min\{\, n : s(n) = S \,\})$ is a choice function for $\mathcal{F}$,
  the minimum being canonical by [[thm-well-ordering-principle]]. Conversely a
  choice function $g$ on the at most countable family $\{\, X_n : n \in \mathbb{N} \,\}$
  gives $f(n) := g(X_n)$.

- **AC implies countable choice.** The Axiom of Choice
  ([[def-axiom-of-choice]]) applies to the family of values of any sequence of
  nonempty sets; composing the resulting choice function with the sequence
  gives the function required above.

- **Dependent choices and independent choices have different input data.**
  Countable choice selects from a family fixed in advance. Dependent choice
  instead asks for a sequence following an entire relation, where the available
  successors depend on the preceding term. The later
  [[thm-choice-implies-dependent-implies-countable-choice]] proves
  $\mathrm{AC}\Rightarrow\mathrm{DC}\Rightarrow\mathrm{AC}_\omega$ in ZF.
  This remark makes no assertion about reversing either implication.

- **A locally proved failure comparison appears later.**
  [[cor-relative-consistency-of-feferman-levy-choice-failures-over-zf]] proves
  the external implication from consistency of ZF to consistency of
  $\mathrm{ZF}+\neg\mathrm{AC}_\omega$, together with the stated
  Feferman–Levy properties. Hence, if ZF is consistent, it cannot prove
  countable choice: a ZF proof would also hold in that consistent extension.
  This is a conditional consistency comparison, not an assertion that
  countable choice fails in the present development.

- **Being an axiom, $\mathrm{AC}_\omega$ carries no well-definedness obligation**,
  which is why this item has no `justified_by`. Its role in this library is
  bookkeeping: [[thm-countable-union-of-countable]] assumes it and flags the
  exact step that spends it. No necessity claim is inferred from that proof.

- Every result *proved* on this page other than
  [[thm-countable-union-of-countable]] is a theorem of ZF alone. In particular
  [[lem-subset-of-countable]], [[lem-countable-iff-surjection-from-n]],
  [[thm-schroder-bernstein]], [[thm-rationals-countable]], [[thm-cantor-powerset]]
  and [[thm-r-uncountable]] are choice free, and each says so.
