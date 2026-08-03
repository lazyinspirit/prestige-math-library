---
id: def-maximal-element
kind: definition
title: "Maximal element and greatest element"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-partial-order]
justified_by: []
forward_refs: [cex-maximal-not-greatest]
aliases: []
landmark: true
short: "maximal element"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Greatest element and least element (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Greatest_element_and_least_element"
    - title: "Maximal and minimal elements (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximal_and_minimal_elements"
    - title: "Partially ordered set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Partially_ordered_set"
pipeline_run: null
---

## Definition

Let $(P, \le)$ be a poset ([[def-partial-order]]) and $m \in P$.

$m$ is a **maximal element** of $P$ if no element of $P$ is strictly above it:
there is no $x \in P$ with $m < x$. Equivalently, for every $x \in P$, if
$m \le x$ then $x = m$.

$m$ is a **greatest element** (or **maximum**) of $P$ if $x \le m$ for every
$x \in P$.

**Minimal** and **least** elements are defined dually, reversing every
inequality.

## Remarks

- **Maximal is not greatest, and the difference is the single most common
  confusion about ordered sets.** A maximal element has nothing strictly above
  it; a greatest element is above everything. In a total order the two coincide,
  which is why the distinction is invisible to intuition trained on
  $\mathbb{R}$, but a partial order may have many maximal elements and no
  greatest one. The refutation is [[fs-maximal-is-greatest]], witnessed by
  [[cex-maximal-not-greatest]].
- A greatest element is always maximal, and it is unique when it exists: if $m$
  and $m'$ are both greatest then $m \le m'$ and $m' \le m$, so $m = m'$ by
  antisymmetry. Maximal elements need not be unique.
- **Zorn's lemma concludes that a maximal element exists, never that a greatest
  one does** ([[thm-zorn]]). In a particular poset the maximal element it
  produces may happen to be greatest, since a greatest element is maximal; what
  Zorn never supplies is a *guarantee* of greatestness. Every application of Zorn
  therefore has to be phrased so that
  maximality is enough, typically by arranging the poset so that a maximal
  object cannot be extended, which is a statement about nothing being strictly
  above it.
- Maximality says nothing about comparability: a maximal element may be
  incomparable to other elements, including to other maximal ones. In
  [[cex-maximal-not-greatest]] the two maximal elements are incomparable to each
  other, and in an antichain every element is maximal and is incomparable to all
  the rest.
