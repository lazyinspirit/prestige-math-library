---
page: compactness-in-metric-spaces
title: "Compactness in Metric Spaces"
status: published
items: [def-dependent-choice, def-metric-compactness, lem-compactness-is-intrinsic,
        def-metric-compactness-variants, def-totally-bounded,
        lem-totally-bounded-basic, thm-compact-iff-finite-intersection-property,
        lem-closed-subset-of-a-compact-space-is-compact,
        thm-compact-subset-is-closed-and-bounded,
        thm-compact-implies-complete-and-totally-bounded,
        thm-compact-implies-the-other-compactness-forms,
        lem-sequentially-compact-implies-complete,
        thm-sequentially-compact-implies-totally-bounded,
        thm-complete-and-totally-bounded-implies-compact,
        thm-metric-compactness-equivalences, thm-heine-borel-rn,
        thm-continuous-image-of-a-compact-space-is-compact,
        thm-extreme-value-metric, thm-lebesgue-number-lemma,
        thm-heine-cantor-metric,
        thm-continuous-bijection-from-a-compact-space-has-continuous-inverse,
        lem-compact-metric-space-has-a-countable-dense-subset,
        rem-compactness-choice-ledger-metric]
examples: [fs-closed-and-bounded-implies-compact-in-every-metric-space,
           fs-totally-bounded-implies-compact, fs-bounded-implies-totally-bounded]
---

**Objective.** Compactness is the hypothesis under which the finite behaves like
the infinite: a covering by open sets can be thinned to a finite one, a
continuous function attains its extreme values, and pointwise continuity becomes
uniform. This page defines it for metric spaces, proves it equivalent to four standard
alternatives, and settles Heine-Borel in $\mathbb{R}^n$. It also
does something the textbook treatment does not: it records, arrow by arrow,
exactly which of those implications need a choice principle and which do not.

**Compactness of a subset is intrinsic.** [[def-metric-compactness]] defines a
compact metric space by open covers, and calls a subset compact when the metric
subspace it carries is compact. That is a statement about the subspace alone, so
the notion does not depend on which larger space the subset is regarded as
sitting in. The bridge to the working form is
[[lem-compactness-is-intrinsic]]: the sets open in a subspace are exactly the
traces on it of the ambient open sets, and a subset is compact exactly when every
family of ambient open sets covering it has finitely many members that already
cover it. Almost every proof below uses that lemma in its indexed form, because a
cover is normally produced by a rule attaching an open set to each point, and a
bare set of open sets forgets the rule.

**Four properties, one theorem, three different prices.**
[[def-metric-compactness-variants]] introduces countable compactness, sequential
compactness and limit point compactness, and [[def-totally-bounded]] introduces
the finite $\varepsilon$-net. The implications between them are then proved one
at a time:

- [[thm-compact-implies-complete-and-totally-bounded]] and
  [[thm-compact-implies-the-other-compactness-forms]] show that compactness
  implies all four of the other conditions, **with no choice principle at all**.
  The two arrows into sequential compactness extract a subsequence by taking the
  *least* admissible index at each stage, which
  [[thm-well-ordering-principle]] makes canonical.
- [[lem-sequentially-compact-implies-complete]] is likewise a theorem of ZF.
- [[thm-sequentially-compact-implies-totally-bounded]] is the one implication on
  this page that uses **dependent choice**, and that is why
  [[def-dependent-choice]] is the first item of the page. The construction adds
  one point at a time, each at distance at least $\varepsilon$ from the points
  already produced, so the set the next point comes from is not known until the
  earlier ones are fixed; countable choice does not licence that.
- [[thm-complete-and-totally-bounded-implies-compact]] uses **countable choice**,
  spent once, to fix a finite $1/(n+1)$-net together with a listing of it for
  every $n$ at the same time.

[[thm-metric-compactness-equivalences]] assembles the five conditions into a
single equivalence under both hypotheses, and
[[rem-compactness-choice-ledger-metric]] is the ledger that keeps the individual
prices visible, since an equivalence proved by going round a cycle charges every
arrow the maximum. Every cost recorded on this page is an upper bound on what the
proof given here uses; no item claims that a choice principle is *necessary*,
because that would be an independence result and this library proves none.

**Heine-Borel is proved here, and proved metrically.**
[[thm-compact-subset-is-closed-and-bounded]] holds in every metric space; the
converse is special to $\mathbb{R}^n$, and [[thm-heine-borel-rn]] proves it by
bisection from [[thm-nested-interval-property]]. The bisection halves one
coordinate at a time and keeps the left half whenever the left half is still not
finitely covered — a rule with two outcomes, so nothing is selected and the proof
stays inside ZF. The same theorem records the case of the real line, obtained by
transporting the one-dimensional case along the isometry between $\mathbb{R}$ and
$\mathbb{R}^1$.

**What compactness is for.** The last block of the page is the payoff:
[[thm-continuous-image-of-a-compact-space-is-compact]], the extreme value theorem
[[thm-extreme-value-metric]], the Lebesgue number lemma
[[thm-lebesgue-number-lemma]], Heine-Cantor [[thm-heine-cantor-metric]], the
continuity of the inverse of a continuous bijection
[[thm-continuous-bijection-from-a-compact-space-has-continuous-inverse]], and
[[lem-compact-metric-space-has-a-countable-dense-subset]]. All but the last are
theorems of ZF.

**Three false statements** close the page, each with a witness built inline
rather than borrowed: that a closed and bounded subset of an arbitrary metric
space is compact, that a totally bounded space is compact, and that a bounded
space is totally bounded. Together they separate the three conditions that the
$\mathbb{R}^n$ case runs together, and the worked witnesses are on the companion
page.

**Vocabulary deliberately avoided.** Two standard words are not used anywhere on
this page, because nothing at this point in the reading order defines them: the
name for a continuous bijection with continuous inverse, and the name for a space
with an at most countable dense subset. Both statements are written out in full
instead.
