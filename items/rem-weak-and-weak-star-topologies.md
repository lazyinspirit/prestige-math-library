---
id: rem-weak-and-weak-star-topologies
kind: remark
title: "Weak and weak-star topologies, and why sequences do not see them"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: [def-filter]
aliases: []
landmark: true
short: "weak topologies are not first countable"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Weak topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Weak_topology"
    - title: "Dual space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dual_space"
    - title: "F. Albiac and N. J. Kalton, Topics in Banach Space Theory, 2nd ed., Graduate Texts in Mathematics 233, Springer (2016)"
      url: "https://doi.org/10.1007/978-3-319-31557-7"
pipeline_run: null
---

## Statement

Let $X$ be a normed space with dual $X^{*}$.

The **weak topology** $\sigma(X, X^{*})$ on $X$ is the coarsest topology making every $f \in X^{*}$
continuous; a base of neighbourhoods of $x_0$ is given by the finite intersections
$\{x : |f_i(x - x_0)| < \varepsilon,\ i = 1, \dots, n\}$. The **weak-star topology**
$\sigma(X^{*}, X)$ on $X^{*}$ is the coarsest topology making every evaluation
$f \mapsto f(x)$ continuous, that is, the topology of pointwise convergence on $X$.

Three facts. The weak topology is Hausdorff, because $X^{*}$ separates points. If $X$ is
infinite-dimensional, the weak topology is strictly coarser than the norm topology and is **not
first countable at any point**, hence not metrizable. Consequently the weak closure of a set can be
strictly larger than the set of limits of weakly convergent sequences from it; the standard witness
is that in an infinite-dimensional normed space the weak closure of the unit sphere
$\{x : \lVert x \rVert = 1\}$ is the whole closed unit ball.

## Remarks

**Not proved in this library.** The definitions above are recorded so that later items can refer to
them; nothing here is established, and the library has no topological vector space track.

**What would prove it.** The initial topology construction, which the general topology track
supplies; the Hausdorff property, which consumes Hahn-Banach as recorded in
[[rem-hahn-banach-theorem]]; and a dimension count for the failure of first countability, since any
weak neighbourhood of a point contains an affine subspace of finite codimension.

**Why it matters here.** This is the analysis payoff of nets and filters ([[def-filter]]). In a
topology that is not first countable, sequences do not determine the closure, so the elementary
sequential criteria that suffice throughout metric analysis simply stop being valid. Everything in
this library that is stated with sequences and used in a metric setting must be restated with nets
or filters before it may be used weakly. The repair for convex sets is Mazur's lemma, and the
partial rescue for compactness is the Eberlein-Smulian theorem, both recorded below.
