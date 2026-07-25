---
id: rem-choice-ledger
kind: remark
title: "The choice ledger: what costs the Axiom of Choice and what does not"
status: draft
origin: session
deps: [rem-godel-constructible-universe, rem-cohen-forcing-ac-independent, rem-schechter-kelley-tychonoff,
       rem-feferman-no-free-ultrafilter-in-zf, rem-halpern-levy-bpi-not-ac, rem-cohen-first-model,
       cor-ac-iff-well-ordering, cor-ac-iff-zorn, thm-hartogs, lem-well-order-comparability,
       thm-zorn, thm-bourbaki-witt, def-chain, thm-well-ordering-theorem, def-cardinal]
justified_by: []
aliases: [rem-choice-strength-ledger]
landmark: false
short: "equivalents, strictly weaker principles, choice-free substitutes"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
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
  [[cor-ac-iff-well-ordering]]. Each of *these two statements* costs exactly the
  Axiom of Choice, no more and no less. A theorem proved *with* one of them costs
  at most the Axiom of Choice, which is an upper bound and not a lower one: the
  theorem may well follow from something strictly weaker, and the ultrafilter
  lemma below is exactly that case.
- **Tychonoff's theorem**, that a product of compact spaces is compact. The
  implication from the Axiom of Choice is the familiar one; the converse is
  Kelley 1950. Not proved here, and worth a warning when it is: Kelley's
  original argument needs a repair, supplied by Schechter, and without the
  repair it yields only the Boolean prime ideal theorem
  ([[rem-schechter-kelley-tychonoff]]).
- **Every vector space has a basis.** The implication from the Axiom of Choice
  is a routine application of Zorn's lemma; the converse is a hard theorem of
  Blass, 1984. Neither direction is proved here, and no item derives either, so
  both are quoted on the authority of the references. The equivalence itself is
  recorded in the library, in [[rem-hahn-banach-hamel-basis-open]], where it
  fixes the upper endpoint of an open question about the strength of
  Hahn-Banach.
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
  those are external results, recorded and not proved here. The proof given here
  ([[thm-ultrafilter-lemma]]) runs through Zorn's lemma, so it pays full price
  for a statement that costs strictly less: exactly the overpayment set out in
  [[rem-choice-strengths]], and the reason a cost may not be read off a proof.
- **Dependent choice (DC)**, that if every element of a nonempty set $X$ stands
  in a relation $R$ to some element of $X$, then there is a **sequence**
  $(x_n)_{n \in \mathbb{N}}$ in $X$ with $x_n \mathbin{R} x_{n+1}$ for every $n$.
  What DC delivers is an $\mathbb{N}$-indexed sequence, not a chain in this
  library's sense ([[def-chain]], a totally ordered subset of a poset): $R$ need
  not be an order at all, and the terms need not be distinct. Implied by the
  Axiom of Choice, and implies countable choice; neither implication reverses,
  which is a relative-consistency result and so holds under the standing
  assumption that ZF is consistent. It
  is the principle quietly used whenever a sequence is built by picking each term
  in terms of the previous one. The two non-reversals are external results that
  this library neither proves nor records; they are quoted from the references.
- **Countable choice ($\mathrm{AC}_\omega$)**, choice functions for countable
  families. Implied by dependent choice, and still not a theorem of ZF: Cohen's
  first model contains an infinite set of reals with no countably infinite subset
  ([[rem-cohen-first-model]]), which is already a failure of
  $\mathrm{AC}_\omega$.

**These three are not ranked on a line, and none of them is "the weakest".** The
only implications among them PROVABLE IN ZF are $\mathrm{DC} \Rightarrow \mathrm{AC}_\omega$
and its consequences; the ultrafilter lemma is incomparable with dependent choice
and with countable choice alike, neither implying nor implied by either. Every
*non*-implication in that sentence is a relative-consistency result, quoted from
the references and conditional on the consistency of ZF: what is established is
that ZF, if consistent, does not prove the missing implications, never that they
are outright false. Those
incomparabilities are quoted from the references, not recorded here. So a theorem
must be labelled with the principle it actually uses, never with a position on a
scale, and a phrase like "the weakest of the three" is simply not available.

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

**Where this library spends choice.**

There is exactly one *place* where the full Axiom of Choice is spent, and more
than one *result* that assumes it, and there is a second, weaker principle
assumed elsewhere. All three facts belong in the ledger.

- **One step, in one proof.** The Axiom of Choice is used at a single step of the
  proof of Zorn's lemma ([[thm-zorn]]), to select a strict upper bound for every
  chain at once; the fixed point theorem underlying it ([[thm-bourbaki-witt]]) is
  choice-free. Every result in this library that assumes full choice reaches it
  through that step and no other.
- **The results that assume full choice.** [[thm-zorn]] itself is the first of
  them: its statement takes the Axiom of Choice as a standing hypothesis, which
  is why the step above lives inside it. On this page: the well-ordering
  theorem ([[thm-well-ordering-theorem]]), which takes the Axiom of Choice as a
  hypothesis; and the **cardinality assignment** of [[def-cardinal]], which
  assumes it in order to well order an arbitrary set. That last one is easy to
  miss, because the *property* of being a cardinal is choice-free and only the
  attachment of $|X|$ to an arbitrary $X$ is not. The two equivalences
  [[cor-ac-iff-zorn]] and [[cor-ac-iff-well-ordering]] do **not** belong in this
  list: each is proved in ZF outright and assumes no choice principle, saying
  only that the statements it names imply one another. Elsewhere in the library,
  [[thm-ultrafilter-lemma]] is proved through Zorn's lemma and so also pays full
  price, although its statement costs strictly less; and the **Hausdorff maximal
  principle**, that every poset has a maximal chain, is drawn from Zorn as a
  consequence in [[ex-zorn-poset-of-chains]] and pays the same price, the
  chain-completeness verified there being free.
- **A weaker principle, spent separately.** [[thm-countable-union-of-countable]]
  is stated under countable choice ([[def-countable-choice]]) and flags the one
  step that spends it. That is **not** a use of the Axiom of Choice:
  $\mathrm{AC}_\omega$ is strictly weaker, so the theorem may be neither
  relabelled choice-free nor lumped in with the full-choice results above.

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
