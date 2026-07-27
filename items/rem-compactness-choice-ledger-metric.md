---
id: rem-compactness-choice-ledger-metric
kind: remark
title: "What each implication between the compactness properties of a metric space costs: which are theorems of ZF, which use countable choice, and which use dependent choice"
status: published
origin: session
deps: [thm-metric-compactness-equivalences, thm-compact-subset-is-closed-and-bounded, thm-compact-implies-the-other-compactness-forms, thm-compact-implies-complete-and-totally-bounded, thm-complete-and-totally-bounded-implies-compact, thm-sequentially-compact-implies-totally-bounded, lem-sequentially-compact-implies-complete, lem-compact-metric-space-has-a-countable-dense-subset, thm-heine-borel-rn, def-countable-choice, def-dependent-choice]
justified_by: []
aliases: []
landmark: true
short: "the choice ledger for this page"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "H. Herrlich, Axiom of Choice, Lecture Notes in Mathematics 1876, Springer 2006"
      url: "https://link.springer.com/book/10.1007/11601562"
pipeline_run: null
---

## What this page spends, implication by implication

[[thm-metric-compactness-equivalences]] states five conditions and asserts that
they are equivalent, under two choice hypotheses. Stated that way the theorem
overcharges almost every arrow it contains, so this remark records the arrows one
at a time. Every entry is a statement about **the proof given in this library**,
and about nothing else.

**Theorems of ZF, using no choice principle at all.**

- A compact subset of a metric space is closed and bounded
  ([[thm-compact-subset-is-closed-and-bounded]]).
- A compact metric space is complete and totally bounded
  ([[thm-compact-implies-complete-and-totally-bounded]]). Completeness is
  obtained there from the finite intersection characterisation applied to the
  closures of the tails of a Cauchy sequence, precisely so that the argument does
  not pass through the extraction of a subsequence.
- Compactness implies countable compactness and limit point compactness, and each
  of those implies sequential compactness
  ([[thm-compact-implies-the-other-compactness-forms]]). The two arrows into
  sequential compactness extract a subsequence by taking, at every stage, the
  **least** admissible index.
- A sequentially compact metric space is complete
  ([[lem-sequentially-compact-implies-complete]]).
- A closed subset of a compact metric space is compact, a continuous image of a
  compact space is compact, the extreme value theorem, the Lebesgue number lemma,
  Heine-Cantor, and the continuity of the inverse of a continuous bijection from
  a compact space.
- Heine-Borel in $\mathbb{R}^n$ ([[thm-heine-borel-rn]]), by a bisection in which
  each step halves one coordinate and keeps the left half when the left half is
  still not finitely covered.

**Using the Axiom of Countable Choice** ([[def-countable-choice]]), spent once and
named at the step that spends it.

- A complete, totally bounded metric space is compact
  ([[thm-complete-and-totally-bounded-implies-compact]]): one finite
  $1/(n+1)$-net, together with a listing of it, is fixed for every $n$ at once.
- A compact metric space has an at most countable dense subset
  ([[lem-compact-metric-space-has-a-countable-dense-subset]]): the same
  selection, and the countable union theorem it then invokes carries the same
  hypothesis and no more.

**Using the Axiom of Dependent Choice** ([[def-dependent-choice]]).

- A sequentially compact metric space is totally bounded
  ([[thm-sequentially-compact-implies-totally-bounded]]). This is the only
  implication on the page with that cost. The construction adds one point at a
  time, each at distance at least $\varepsilon$ from all the points already
  produced, so the set the next point is drawn from is not known until the
  earlier ones are fixed. Countable choice returns one $\varepsilon$-separated
  tuple for each length with no coherence between them, and no diagonal argument
  assembles those into a single separated sequence.

## What is claimed and what is not

**Claimed:** each proof in this library can be carried out in ZF together with
the principle named above, and in no case is more used than is named.

**Not claimed:** that any of these principles is *necessary*. Showing that an
implication cannot be proved in ZF alone is an independence result, obtained by
forcing or by permutation models, and this library contains neither and proves
none. Every cost above is an upper bound. The systematic study of which forms of
compactness need which fragment of choice is a subject in its own right, and
Herrlich's *Axiom of Choice* is the standard reference; it is cited here as
literature and is not used.

**Not claimed either:** that a cost recorded for one proof is a cost of the
statement. Two proofs of the same implication may spend differently, and the
completeness half of
[[thm-compact-implies-complete-and-totally-bounded]] is exactly a case where the
textbook route and the route taken here differ in what they use.

## How to read the equivalence theorem

A cycle of implications transmits the weakest hypothesis around the whole cycle:
once [[thm-metric-compactness-equivalences]] has closed its cycle, every one of
its five conditions implies every other *under both hypotheses*. The individual
arrows do not inherit that. A reader working in ZF alone still has, without any
choice at all, that a compact metric space satisfies all four of the other
conditions, and that a sequentially compact one is complete. What fails in ZF, as
far as this library's proofs go, is the journey back from the weaker conditions to
compactness.

Where these principles sit relative to one another — that the Axiom of Choice
implies dependent choice, which implies countable choice, and that the reverse
implications are relative-consistency results quoted rather than proved — is
recorded in [[def-dependent-choice]] and in the definitions it points to.
