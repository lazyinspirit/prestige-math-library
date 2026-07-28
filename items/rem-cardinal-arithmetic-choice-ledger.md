---
id: rem-cardinal-arithmetic-choice-ledger
kind: remark
title: "What each result on this page costs in choice, and where the continuum escapes what ZFC can decide"
status: draft
origin: session
deps: [def-cardinal, def-cardinal-arithmetic, lem-cardinality-of-a-well-orderable-set, lem-cardinal-operations-are-well-defined, thm-cardinal-arithmetic-agrees-with-finite-counting, thm-hessenberg, cor-cardinal-absorption, lem-successor-cardinal-exists, cor-the-aleph-and-beth-hierarchies-are-well-defined, def-aleph-and-beth-hierarchies, thm-every-infinite-cardinal-is-an-aleph, thm-cardinal-comparability-iff-ac, thm-tarski-square, def-cofinality, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-cardinal-power-set-and-cantor, def-infinite-cardinal-sum-and-product, thm-konig, cor-cofinality-of-a-cardinal-power, def-axiom-of-choice, def-countable-choice, rem-choice-ledger, rem-continuum-hypothesis]
justified_by: []
external_refs: [rem-independence-of-ch-and-gch, rem-gch-implies-ac, rem-gitik-all-uncountable-cardinals-singular]
aliases: []
landmark: false
short: "ZF, AC, and what stays undecided"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Cardinal number — cardinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_number#Cardinal_arithmetic"
    - title: "Continuum hypothesis (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuum_hypothesis"
pipeline_run: null
---

## Remark

This item is bookkeeping, in the manner of [[rem-choice-ledger]]: it records what
each result stated here actually costs, so that anything quoting a result from
this page knows whether it is quoting a theorem of ZF or a consequence of the
Axiom of Choice ([[def-axiom-of-choice]]).

**Theorems of ZF, using no choice principle at all.**

- [[lem-cardinality-of-a-well-orderable-set]]: a well-orderable set has a least
  equinumerous ordinal, that ordinal is a cardinal, and equinumerous sets receive
  the same one. The choice hypothesis of [[def-cardinal]] is needed only to make
  *every* set well-orderable.
- [[lem-cardinal-operations-are-well-defined]], and with it $\oplus$ and
  $\otimes$ of [[def-cardinal-arithmetic]]. The disjoint union and the product of
  two ordinals are well-ordered by orders written down from the ordinal order.
- [[thm-cardinal-arithmetic-agrees-with-finite-counting]], the dictionary with
  finite counting.
- [[thm-hessenberg]] and its consequence [[cor-cardinal-absorption]].
- [[lem-successor-cardinal-exists]], and with it the whole aleph hierarchy:
  [[cor-the-aleph-and-beth-hierarchies-are-well-defined]] and
  [[def-aleph-and-beth-hierarchies]] in their aleph clauses, and clause (a) of
  [[thm-every-infinite-cardinal-is-an-aleph]].
- [[def-cofinality]] and [[thm-cofinality-basics]]; and clauses (a) and (c) of
  [[thm-regularity-of-the-alephs]], that $\aleph_0$ is regular and
  $\operatorname{cf}(\aleph_\omega) = \aleph_0$.

**Costing the Axiom of Choice, and named as such in their own statements.**

- Cardinal exponentiation $\kappa^{\lambda}$ itself, because ZF does not
  well-order a set of functions. Everything reached through it inherits the
  hypothesis: [[thm-cardinal-power-set-and-cantor]], the beth clauses of
  [[def-aleph-and-beth-hierarchies]], [[def-infinite-cardinal-sum-and-product]],
  [[thm-konig]] and [[cor-cofinality-of-a-cardinal-power]].
- Clause (b) of [[thm-every-infinite-cardinal-is-an-aleph]], that an arbitrary
  infinite *set* is equinumerous with an aleph.
- Clauses (b) and (d) of [[thm-regularity-of-the-alephs]], that successor alephs
  are regular and that $\aleph_\omega$ is the least singular infinite cardinal.

**Equivalent to the Axiom of Choice over ZF**, so neither weaker nor stronger:
comparability of arbitrary sets ([[thm-cardinal-comparability-iff-ac]]) and
Tarski's square law ([[thm-tarski-square]]). The first is recorded in
[[rem-choice-ledger]] as Hartogs' result, quoted there and proved here.

**Countable choice** ([[def-countable-choice]]) is not used anywhere on this
page. Where an argument might have needed it, the ordinal structure supplied a
canonical least element instead.

**How far regularity can fail without choice.** That clause (b) above cannot be
proved in ZF is recorded rather than proved here, and it is conditional:
[[rem-gitik-all-uncountable-cardinals-singular]] states that, relative to a
large-cardinal consistency hypothesis, there is a model of ZF in which **every**
uncountable cardinal is singular. Granting that hypothesis, "successor cardinals
are regular" is a consequence of choice and not a structural fact about
cardinals, which is why clause (b) is stated with its hypothesis.

**Where the continuum escapes ZFC.** The constraint proved here is
$\operatorname{cf}(2^{\aleph_0}) > \aleph_0$
([[cor-cofinality-of-a-cardinal-power]]), which excludes some candidate values
for $2^{\aleph_0}$ and selects none. Whether $2^{\aleph_0} = \aleph_1$ is the
continuum hypothesis, stated in [[rem-continuum-hypothesis]]; that ZFC proves
neither it nor its negation, granted the consistency of ZFC, is recorded in
[[rem-independence-of-ch-and-gch]] and is proved neither on this page nor on any
page this one rests on. The
generalised form is stronger than it looks: over ZF it implies the Axiom of
Choice, a result of Sierpiński recorded in [[rem-gch-implies-ac]], and proved
neither here nor on any page this one rests on.

**What this page therefore does and does not settle about $2^{\aleph_0}$.** It
settles that $2^{\aleph_0}$ is an aleph, granted choice; that it is strictly
above $\aleph_0$; and that its cofinality is uncountable. It settles nothing
about which aleph it is, and no statement on this page or its companion asserts a
value.
