---
id: rem-riemann-integral-choice-ledger
kind: remark
title: "What this page costs in choice: the basic Riemann integrability results use ZF; the forward half of the Lebesgue criterion uses countable choice at the countable union of null sets"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [thm-lebesgue-criterion, thm-countable-union-of-null-is-null, def-countable-choice, thm-riemann-criterion, thm-darboux-equals-riemann, thm-continuous-implies-integrable, thm-monotone-implies-integrable, thm-finitely-many-discontinuities-integrable, cor-countably-many-discontinuities-integrable, thm-heine-cantor-r, rem-heine-criterion-choice-cost, thm-compact-iff-sequentially-compact-r, lem-finite-choice, lem-countable-sets-are-null, thm-compact-null-is-content-zero, lem-content-zero-implies-null, thm-heine-borel-characterisation-r, lem-oscillation-superlevel-sets-are-closed, def-tagged-partition-and-riemann-sum]
justified_by: []
aliases: []
landmark: false
short: "choice ledger for the Riemann integral"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
pipeline_run: null
---

This page develops the Riemann integral over ZF except at the points recorded
below. The only choice principle that appears anywhere on it is the Axiom of
Countable Choice ([[def-countable-choice]]); the full Axiom of Choice is never
used, and no claim is made anywhere that a use recorded here is *necessary*.

## The ledger, item by item

| item | choice used | where it enters |
|---|---|---|
| [[def-partition-and-refinement]] | none | recursion only, over a totally defined map |
| [[def-darboux-sums]] | none | suprema and infima are canonical |
| [[lem-refinement-inequalities]] | none | one induction on the coarse index |
| [[def-darboux-integral]] | none | $\sup$ and $\inf$ over a set of partitions |
| [[lem-integral-elementary-bounds]] | none | — |
| [[thm-riemann-criterion]] | none | finitely many existential instantiations |
| [[def-tagged-partition-and-riemann-sum]] | none | a tagging is exhibited by a formula |
| [[thm-darboux-equals-riemann]] | none | see the note on finite choice below |
| [[thm-continuous-implies-integrable]] | none | the current [[thm-heine-cantor-r]] proof uses a finite subcover |
| [[thm-monotone-implies-integrable]] | none | the partition is a formula in $N$ |
| [[thm-finitely-many-discontinuities-integrable]] | none | its Heine-Cantor supplier is choice-free |
| [[thm-lebesgue-criterion]] | $\mathrm{AC}_\omega$, once, in the forward half only | [[thm-countable-union-of-null-is-null]] |
| [[cor-countably-many-discontinuities-integrable]] | none | see below |
| [[fs-bounded-implies-riemann-integrable]] | none | — |
| [[fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set]] | none | refuted from the interval-cover bound directly, not through the criterion |
| [[fs-nonnegative-integrable-with-zero-integral-vanishes]] | none | rests on the corollary, which is choice-free |
| [[fs-pointwise-limit-of-riemann-integrable-is-integrable]] | none | its finitely-many-discontinuities supplier is choice-free |

## The four entries that are easy to get wrong

**Selecting a tag in every subinterval is not countable choice.**
[[thm-darboux-equals-riemann]] picks, for a *single fixed* partition, one point
in each of its $n$ subintervals subject to a supremum condition. That family is
listed by the index $i < n$, and a family of nonempty sets listed by a natural
number has a choice function outright, by
[[lem-finite-choice]], which is a theorem of ZF proved by induction. (That
lemma is careful to state only the listed form, since no definition of
finiteness is available where it is proved; the listed form is what is used
here.) The
temptation to read this as a choice principle comes from the phrase "for each
$i$ pick a point"; the number of picks is what matters, and it is finite.

**"For each $n$ pick a partition" would be countable choice, and the page never
does it.** Both directions of [[thm-riemann-criterion]] and the whole of
[[thm-darboux-equals-riemann]] instantiate an existential a fixed, finite number
of times, once per $\varepsilon$ under consideration; no proof on this page ever
forms a sequence of partitions indexed by $\mathbb{N}$ and reasons about it. The
one place where a sequence of sets does appear is step 7.1 of
[[thm-lebesgue-criterion]], and that is exactly where the ledger records a cost.

**Only the forward half of [[thm-lebesgue-criterion]] costs anything.** The
implication "integrable $\Rightarrow$ the discontinuity set is null" exhibits
that set as $\bigcup_k E_{1/(k+1)}$ and applies
[[thm-countable-union-of-null-is-null]], which assumes $\mathrm{AC}_\omega$ and
names its own single use. The converse, "null $\Rightarrow$ integrable", is a
theorem of ZF: [[lem-oscillation-superlevel-sets-are-closed]] and
[[thm-heine-borel-characterisation-r]] are choice-free,
[[thm-compact-null-is-content-zero]] and [[lem-content-zero-implies-null]] are
choice-free, and the partition is built by Cousin's supremum construction, which
uses the completeness of $\mathbb{R}$ and nothing else. This asymmetry is why
[[cor-countably-many-discontinuities-integrable]] appears in the table with no
cost at all: it uses the converse half only, together with
[[lem-countable-sets-are-null]], whose own statement records that no choice
principle is used there.

**Heine-Cantor no longer spends choice here.** The current proof of
[[thm-heine-cantor-r]] takes the family of all admissible continuity intervals
and extracts a finite subcover. It makes no sequence of bad-point selections.
Thus [[thm-continuous-implies-integrable]] and
[[thm-finitely-many-discontinuities-integrable]] do not inherit countable
choice. The separate pointwise sequential criterion discussed in
[[rem-heine-criterion-choice-cost]] still uses countable choice in its current
proof; that is a different argument.

## What is deliberately not claimed

Nothing here says that $\mathrm{AC}_\omega$ is **necessary** for the forward
half of the Lebesgue criterion. The independence question for countable
additivity of nullity over $\mathbb{R}$ is not settled in this library. The
table records what the proofs on disk currently spend.

The one further caution is that a *later* proof of a result stated here could
spend less. The direct argument for [[thm-monotone-implies-integrable]] is kept
alongside the shorter route through
[[cor-countably-many-discontinuities-integrable]] precisely for that reason: the
direct one is elementary and quantitative, and both are choice-free, so nothing
is lost by keeping the pair.
