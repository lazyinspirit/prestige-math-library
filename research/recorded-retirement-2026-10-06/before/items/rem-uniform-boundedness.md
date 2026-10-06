---
id: rem-uniform-boundedness
kind: remark
title: "Uniform boundedness principle (Banach-Steinhaus)"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: [def-norm-and-normed-space]
aliases: []
landmark: false
short: "pointwise bounded implies uniformly bounded"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Uniform boundedness principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_boundedness_principle"
    - title: "Banach-Steinhaus theorem (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Banach-Steinhaus_theorem"
    - title: "A. D. Sokal, A really simple elementary proof of the uniform boundedness theorem, Amer. Math. Monthly 118 (2011) 450-452"
      url: "https://arxiv.org/abs/1005.1585"
    - title: "P. Howard and E. Tachtsis, On infinite-dimensional Banach spaces and weak forms of the axiom of choice, Math. Log. Quart. 63 (2017) 509-535"
      url: "https://commons.emich.edu/fac_sch2017/127/"
pipeline_run: null
---

## Statement

Let $X$ be a Banach space, let $Y$ be a normed space and let $\mathcal{F}$ be a family of bounded
linear maps $X \to Y$ such that
$$\sup_{T \in \mathcal{F}} \lVert Tx \rVert < \infty \quad \text{for every } x \in X.$$
Then $\sup_{T \in \mathcal{F}} \lVert T \rVert < \infty$.

**Banach-Steinhaus corollary.** If $T_n \colon X \to Y$ are bounded and $T_n x$ converges for every
$x \in X$, then $\sup_n \lVert T_n \rVert < \infty$ and $Tx = \lim_n T_n x$ defines a bounded linear
map.

## Remarks

**Not proved in this library, and flagged as borderline.** DEFERRED.md marks this one for
reconsideration, and the flag is worth repeating here: unlike Hahn-Banach, its
proof needs no new machinery beyond the vocabulary in which to state it. The
usual proof is the Baire category theorem for complete metric spaces, which is
in scope, plus linearity. Normed spaces are now defined in
[[def-norm-and-normed-space]]; the missing vocabulary is Banach spaces, bounded
linear operators and their operator norms. Once that remaining vocabulary
exists, this result can be pulled forward and proved in full.

**What would prove it.** Either the Baire argument, applied to the closed sets
$E_n = \{x : \lVert Tx \rVert \le n \text{ for all } T \in \mathcal{F}\}$, one of which must have
interior; or the gliding hump argument of Sokal, which uses no category theorem at all and rests on
the inequality $\max \{ \lVert T(x + y) \rVert, \lVert T(x - y) \rVert \} \ge \lVert Ty \rVert$.
The second route is the more attractive one for this library, because it removes the dependence on
the category theorem and hence on dependent choice.

**Why it matters here.** It is the standard bridge from pointwise information to uniform
information, and it is the reason that a pointwise limit of bounded operators is bounded. Its exact
choice cost is not settled: Howard and Tachtsis record it as open whether the uniform boundedness
principle implies countable choice.
