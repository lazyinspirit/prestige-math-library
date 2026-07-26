---
id: def-metrizable-space
kind: definition
title: "Metrizable space: a topological space whose topology is induced by some metric; metrizability is topological, the metric is not"
status: draft
origin: session
deps: [def-topological-space, def-metric-topology, def-metric-space, thm-metric-open-set-algebra, def-equivalent-metrics,
       def-metric-ball, def-neighbourhood-top, def-interior-closure-boundary-top, def-continuous-map-top,
       def-sequence-convergence-top, def-homeomorphism-and-open-maps, def-first-countable-top,
       lem-metric-ball-neighbourhood-base, thm-metric-hausdorff-separation, def-metric-convergence,
       def-metric-continuity, thm-metric-closure-characterisation, def-metric-interior-closure-boundary,
       lem-metric-limits-unique, lem-real-line-is-a-metric-space]
justified_by: []
aliases: [def-metrizable, def-usual-topology-of-r]
landmark: true
short: "metrizable space; the usual topology of $\\mathbb{R}$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Metrizable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metrizable_space"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "J. Munkres, Topology, 2nd ed., §20"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**metrizable** if there is a metric $d$ on $X$ ([[def-metric-space]]) whose
metric topology is $\mathcal{T}$, that is $\mathcal{T} = \mathcal{T}_d$
([[def-metric-topology]]). Such a $d$ is said to **induce** or **metrise**
$\mathcal{T}$.

**The definition presupposes that $\mathcal{T}_d$ is a topology in the sense of
[[def-topological-space]], and it is.** By [[def-metric-topology]] both
$\varnothing$ and $X$ are open in $(X,d)$, which is (T1), and by
[[thm-metric-open-set-algebra]] the family $\mathcal{T}_d$ is closed under
arbitrary unions, which is (T2), and under intersections of $n \ge 1$ members,
which contains (T3). So every metric space is a topological space, and the
metric-space development of this library is a special case of the present one.

**The two developments agree notion by notion, and the agreement is definitional
rather than a coincidence.** Let $d$ be a metric on $X$ and give $X$ the topology
$\mathcal{T}_d$.

- *Neighbourhoods and balls.* For $x \in X$ the balls $B(x,r)$, $r > 0$
  ([[def-metric-ball]]), are open ([[thm-metric-open-set-algebra]]) and form a
  neighbourhood base at $x$ in the sense of [[def-neighbourhood-top]]: each is a
  neighbourhood of $x$, and any neighbourhood $N$ of $x$ contains an open
  $U \ni x$, hence a ball around $x$ by [[def-metric-topology]]. The balls of
  radius $1/n$ alone already suffice ([[lem-metric-ball-neighbourhood-base]]).
- *Interior, closure, boundary.* [[def-metric-interior-closure-boundary]] defines
  them by the same conditions with balls in place of neighbourhoods, and the
  previous bullet makes the two conditions equivalent; the metric closure is the
  smallest closed superset ([[thm-metric-closure-characterisation]]), which is the
  definition used here ([[def-interior-closure-boundary-top]]). So the two
  closures, the two interiors and the two boundaries are the same three
  operations.
- *Convergence.* $x_k \to p$ in the sense of [[def-sequence-convergence-top]] is
  "eventually in every neighbourhood of $p$", and by the first bullet this is
  "eventually in every ball around $p$", which is [[def-metric-convergence]].
- *Continuity.* $\varepsilon$-$\delta$ continuity at $a$
  ([[def-metric-continuity]]) says that every ball around $f(a)$ has a ball
  around $a$ mapped into it, which by the first bullet is continuity at $a$ in
  the sense of [[def-continuous-map-top]].

Consequently every statement proved for metric spaces in this library may be
quoted verbatim for a metrizable space once a metric is named, and conversely.

**Metrizability is a topological property; the metric is not part of it.** If
$h : X \to Y$ is a homeomorphism ([[def-homeomorphism-and-open-maps]]) and $d$
metrises $X$, then $d'(y_1,y_2) := d(h^{-1}(y_1), h^{-1}(y_2))$ is a metric on
$Y$ — the three axioms transfer along the bijection $h^{-1}$ — and
$h[B_d(x,r)] = B_{d'}(h(x), r)$, so $h$ carries a basis of $\mathcal{T}_d$ to a
basis of $\mathcal{T}_{d'}$ and $\mathcal{T}_{d'} = h[\mathcal{T}_d] = \mathcal{T}_Y$.
Hence $Y$ is metrizable. The metric itself, however, is **not** determined by the
topology: two metrics on one set may induce the same topology without agreeing,
which is exactly topological equivalence ([[def-equivalent-metrics]]), and
properties of a metric that are not properties of its topology, boundedness among
them, are therefore not properties of a metrizable space.

**Two things every metrizable space has.** It is **Hausdorff**: distinct points
have disjoint open neighbourhoods, by [[thm-metric-hausdorff-separation]] applied
to any metric inducing the topology. And it is **first countable**
([[def-first-countable-top]]), by [[lem-metric-ball-neighbourhood-base]]. Either
failure is therefore an obstruction to metrizability, and this page uses the
first of them to exhibit a topology induced by no metric.

**Sequential limits in a metrizable space are unique, so the notation
$\lim_k x_k$ is available there.** In a metric space a sequence has at most one
limit ([[lem-metric-limits-unique]]), and by the agreement of convergence above
that uniqueness is a statement about the topology alone; so within a metrizable
space, and only there, this page writes $\lim_k x_k$ in the ordinary way. In a
general space the symbol is unavailable ([[def-sequence-convergence-top]]).

**The usual topology of $\mathbb{R}$.** The absolute value makes $\mathbb{R}$ a
metric space under $d_{\mathbb{R}}(x,y) = |x-y|$, its open balls are the bounded
open intervals, and the resulting metric topology is what claim 3 of
[[lem-real-line-is-a-metric-space]] names the **usual topology** of $\mathbb{R}$.
That is the topology meant by the phrase throughout these two pages, and
$\mathbb{R}$ carrying it is metrizable by definition. Every statement about it on
these two pages is proved from the metric $d_{\mathbb{R}}$ and the bridge above,
and no example re-derives any of it.

## Remarks

- **The usual topology of $\mathbb{R}$ is not a second notion alongside the
  order-native development built earlier in this library.**
  [[rem-r-native-topology-scope]] records that the two collections of open subsets
  of $\mathbb{R}$ — the one defined from balls and the one defined from
  order-neighbourhoods — are literally the same collection, and hence that
  interior, closure, boundary, limit point, density and sequential convergence
  agree on the two sides. That identification is quoted here for orientation only;
  nothing on these two pages uses the order-native description.

- **A metrizable space comes with many metrics and no canonical one.** The
  statement "$X$ is metrizable" asserts existence, and every argument that uses a
  metric must name one first. Where two metrics are compared, the vocabulary is
  that of [[def-equivalent-metrics]]: Lipschitz, uniform and topological
  equivalence, of which only the last is visible to the topology.

- **Metrization theorems are not proved here.** Necessary conditions are easy —
  Hausdorff, first countable — and sufficient ones require separation and
  countability axioms that this page does not develop. Nothing below asserts that
  a space *is* metrizable except by exhibiting a metric.

- **Not every topology is metrizable**, and the cheapest witness is the
  indiscrete topology on a two-point set, which is not Hausdorff. That is
  recorded on this page as a false statement and witnessed on the companion page.
