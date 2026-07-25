---
id: rem-choice-ledger
kind: remark
title: "The choice ledger: what costs the Axiom of Choice and what does not"
status: draft
origin: session
deps: [rem-godel-constructible-universe, rem-cohen-forcing-ac-independent, rem-schechter-kelley-tychonoff,
       rem-feferman-no-free-ultrafilter-in-zf, rem-halpern-levy-bpi-not-ac, rem-cohen-first-model,
       cor-ac-iff-well-ordering, cor-ac-iff-zorn, thm-hartogs, lem-well-order-comparability]
justified_by: []
aliases: [rem-choice-strength-ledger]
landmark: false
short: "equivalents, strictly weaker principles, choice-free substitutes"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Boolean prime ideal theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
pipeline_run: null
---

This item is bookkeeping, not mathematics: it records what each statement in the
neighbourhood of the Axiom of Choice actually costs, so that later pages can
state honestly which of their theorems are choice-free. Nothing here is proved
that is not proved elsewhere in the library, and everything cited without a
link is flagged as such.

**Equivalent to the Axiom of Choice over ZF.**

- **Zorn's lemma** and **the well-ordering theorem**. Both equivalences are
  proved in this library, in [[cor-ac-iff-zorn]] and
  [[cor-ac-iff-well-ordering]]. Anything proved with either of them costs
  exactly the Axiom of Choice, no more and no less.
- **Tychonoff's theorem**, that a product of compact spaces is compact. The
  implication from the Axiom of Choice is the familiar one; the converse is
  Kelley 1950. Not proved here, and worth a warning when it is: Kelley's
  original argument needs a repair, supplied by Schechter, and without the
  repair it yields only the Boolean prime ideal theorem
  ([[rem-schechter-kelley-tychonoff]]).
- **Every vector space has a basis.** The implication from the Axiom of Choice
  is a routine application of Zorn's lemma; the converse is a hard theorem of
  Blass, 1984. Not proved here, and, unlike the other entries in this ledger,
  not recorded anywhere in this library either: it is quoted on the authority of
  the references alone.
- **Cardinal comparability**, that for any two sets one injects into the other.
  This is Hartogs 1915, and the proof runs through the construction of
  [[thm-hartogs]]. Not proved here.

**Strictly weaker than the Axiom of Choice.**

Each of the following is a genuine choice principle: not provable in ZF
(assuming ZF consistent), yet strictly weaker than the Axiom of Choice.

- **The ultrafilter lemma**, that every filter extends to an ultrafilter,
  equivalently the **Boolean prime ideal theorem**. The Axiom of Choice implies
  it, that implication being the one thing here this library does prove; it is
  not provable in ZF (Feferman 1965,
  [[rem-feferman-no-free-ultrafilter-in-zf]]), and it does not imply the Axiom
  of Choice (Halpern and Levy 1971, [[rem-halpern-levy-bpi-not-ac]]). Both of
  those are external results, recorded and not proved here.
- **Dependent choice (DC)**, that a relation with no dead ends admits an
  infinite chain. Implied by the Axiom of Choice, implies countable choice, and
  neither implication reverses. It is the principle quietly used whenever a
  sequence is built by picking each term in terms of the previous one. The two
  non-reversals are external results that this library neither proves nor
  records; they are quoted from the references.
- **Countable choice ($\mathrm{AC}_\omega$)**, choice functions for countable families.
  Weakest of the three, and still not a theorem of ZF: Cohen's first model
  contains an infinite set of reals with no countably infinite subset
  ([[rem-cohen-first-model]]), which is already a failure of
  $\mathrm{AC}_\omega$.

Dependent choice and the ultrafilter lemma are incomparable: neither implies the
other. That too is quoted, not recorded here. So "weaker than the Axiom of
Choice" is not a linear scale, and a theorem should be labelled with the
principle it actually uses rather than with a position on a line.

**Choice-free, and deliberately so.**

- **[[thm-hartogs]]**: for every set $A$ there is a least ordinal that does not
  inject into $A$. This is the ZF substitute for cardinal comparability, and its
  whole value is that it needs no choice.
- **[[lem-well-order-comparability]]**: any two well-orders are comparable.
  Comparability of arbitrary sets is equivalent to the Axiom of Choice;
  comparability of well-orders is free.
- Transfinite induction, transfinite recursion, the assignment of order types,
  and the Burali-Forti theorem are all theorems of ZF. Transfinite recursion
  spends Replacement, and that is the only axiom beyond the basic ones it needs;
  the standard confusion on this point is recorded as
  [[fs-transfinite-induction-needs-choice]].
- Rigidity of well-orders ([[lem-well-order-rigid]]) is the structural reason for
  all of this: the witnessing isomorphisms are unique, so they never have to be
  chosen.

**Where this library spends the axiom.**

Exactly once so far. The Axiom of Choice is used at a single step of the proof of
Zorn's lemma, to select a strict upper bound for every chain at once; the fixed
point theorem underlying it is choice-free. Everything on this page that costs
choice, which is to say [[thm-well-ordering-theorem]] and its corollary, costs
it through that one step and no other.

**What is not proved anywhere here.**

The **independence** of the Axiom of Choice from ZF. Gödel's 1938 constructible
universe shows ZF cannot refute it ([[rem-godel-constructible-universe]]);
Cohen's 1963 forcing shows ZF cannot prove it
([[rem-cohen-forcing-ac-independent]]). Both are external results requiring
machinery this library does not yet contain, and both are conditional on the
consistency of ZF. Every statement in
the library that relies on them is written conditionally, as in
[[fs-zorn-provable-in-zf]] and [[fs-every-set-well-orderable-in-zf]]. A reader
who wants the unconditional version of those statements will not find it, here
or anywhere.
