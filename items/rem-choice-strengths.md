---
id: rem-choice-strengths
kind: remark
title: "What the ultrafilter lemma costs: a choice principle strictly weaker than AC"
status: draft
origin: session
deps: [rem-feferman-no-free-ultrafilter-in-zf, rem-halpern-levy-bpi-not-ac, thm-ultrafilter-lemma, cor-ac-iff-zorn, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
short: "UL is strictly between ZF and AC"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Boolean prime ideal theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem"
    - title: "Ultrafilter lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter_lemma"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "The Axiom of Choice (Stanford Encyclopedia of Philosophy)"
      url: "https://plato.stanford.edu/entries/axiom-choice/"
pipeline_run: null
---

The **ultrafilter lemma** (UL), that every filter on a set extends to an
ultrafilter ([[thm-ultrafilter-lemma]]), is a genuine choice principle. It is
neither free nor as expensive as the Axiom of Choice, and this remark records
exactly where it sits, separating what this library proves from what it cites.

**What is proved here.** The Axiom of Choice implies UL. That is
[[thm-ultrafilter-lemma]], which uses Zorn's lemma, and Zorn's lemma is
equivalent to the Axiom of Choice over ZF ([[cor-ac-iff-zorn]],
[[def-axiom-of-choice]]). Nothing else about the strength of UL is derived in
this library, and the three statements below are cited, not proved.

**What is cited and not proved.**

- **UL is not a theorem of ZF.** If ZF is consistent, ZF does not prove that a
  free ultrafilter on $\mathbb{N}$ exists (Feferman 1965, by forcing:
  [[rem-feferman-no-free-ultrafilter-in-zf]]), and UL produces one by extending
  the filter of tails, so ZF does not prove UL. This is external to this library
  exactly as the independence of the Axiom of Choice itself is
  ([[fs-zorn-provable-in-zf]]).
- **UL does not imply the Axiom of Choice.** If ZF is consistent, there is a
  model of ZF in which UL holds and the Axiom of Choice fails (Halpern and Lévy
  1971: [[rem-halpern-levy-bpi-not-ac]]). Together with the previous point this
  places UL strictly between the two, again under the consistency of ZF: it is
  not provable in ZF, and it is not strong enough to recover AC.
- **UL is the Boolean prime ideal theorem.** Over ZF, UL is equivalent to the
  statement that every nontrivial Boolean algebra has a prime ideal, equivalently
  an ultrafilter in the lattice sense. The dictionary is the one visible in
  [[lem-ultrafilter-prime]]: a maximal filter is a prime filter, and complements
  turn filters into ideals. The Boolean form is the name under which the
  principle is catalogued in the literature on weak choice principles.

**Why this matters for the rest of the library.** A theorem proved from UL is not
"a theorem of choice" in the same sense as one proved from the Axiom of Choice.
Because the Axiom of Choice and Zorn's lemma are equivalent, a proof through Zorn
shows the theorem costs **at most** the Axiom of Choice, and nothing more than
that: it is an upper bound on the price, never a lower one ([[cor-ac-iff-zorn]]).
A result provable from UL alone carries the strictly smaller upper bound UL, and a
page that nonetheless routes it through Zorn is overpaying and should say so. UL
itself is the standing example, proved here from Zorn and yet, on the cited
results above and so under the consistency of ZF, strictly weaker than the Axiom
of Choice. That is why
[[thm-ultrafilter-lemma]] is kept as a named statement rather than being inlined
into its applications: naming it is what makes the smaller bound visible
downstream.

**Two honest caveats.**

- This library proves the implication AC $\Rightarrow$ UL and nothing about the
  converse direction. Calling UL "strictly weaker" is a citation, and it depends
  on the consistency of ZF, which is not provable inside ZF.
- The implication proved here goes through Zorn's lemma, so the *proof* given in
  [[thm-ultrafilter-lemma]] uses full choice even though the *statement* does not
  require it. A proof of UL from a weaker principle would not change the theorem,
  only its price. Nothing in this library currently avoids Zorn's lemma at that
  step.
