---
id: rem-two-senses-of-regularity-for-lebesgue-measure
kind: remark
title: "Regularity of an outer measure and regularity of a measure with respect to open and compact sets are different conditions, both satisfied here"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-regular-outer-measure-and-measurable-hull, cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls, thm-lebesgue-outer-regularity-for-arbitrary-subsets, thm-lebesgue-inner-regularity-by-closed-and-compact-sets]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Chapter 2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "E. A. Carlen, Notes on Lebesgue Measure on $\\mathbb{R}^n$ and $S^{n-1}$ (Rutgers Math 501), Theorem 1.5"
      url: "https://sites.math.rutgers.edu/~carlen/501F13/LebesgueMeas.pdf"
pipeline_run: null
---

Assuming the Axiom of Countable Choice, the word *regular* is carrying two
different conditions in this development, and both of them hold for Lebesgue
measure. They are not variants of one statement:
one is about arbitrary subsets and measurable supersets, the other about
measurable sets and topologically distinguished sub- and supersets.

**Regularity of an outer measure.** [[def-regular-outer-measure-and-measurable-hull]]
calls an outer measure $\mu^*$ **regular** when every subset $E$ of the ambient
set has a *measurable hull*: a Carathéodory measurable $H \supseteq E$ with
$\mu^*(H) = \mu^*(E)$. This mentions no topology at all, and it is a condition
that fails for some outer measures. For $\lambda_n^*$ it holds, with the hull
available in the special form $G_\delta$:
[[cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls]].

**Regularity of a measure with respect to open and compact sets.** Here the
statements are that $\lambda_n^*(E)$ is the infimum of $\lambda_n(U)$ over open
$U \supseteq E$ ([[thm-lebesgue-outer-regularity-for-arbitrary-subsets]]), and
that $\lambda_n(E)$ is the supremum of $\lambda_n(K)$ over compact $K \subseteq E$
for measurable $E$
([[thm-lebesgue-inner-regularity-by-closed-and-compact-sets]]). Both mention the
topology essentially, and the second is restricted to measurable sets, which the
first is not.

**Why the distinction has to be made rather than left to context.** The two
conditions have different hypotheses on $E$, different quantifiers, and
different witnesses: a measurable hull is a *superset with equal outer measure*,
while outer regularity produces supersets whose measures merely *approach* the
outer measure and are open. The one implies the other only through an argument —
here, intersecting a sequence of open supersets, which is exactly the proof of
the $G_\delta$ hull. Nothing below uses the word *regular* without saying which
of the two is meant.
