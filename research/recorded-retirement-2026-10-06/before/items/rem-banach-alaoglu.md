---
id: rem-banach-alaoglu
kind: remark
title: "Banach-Alaoglu theorem"
status: draft
origin: session
proved_here: false
deps: [rem-weak-and-weak-star-topologies]
justified_by: []
forward_refs: [thm-ultrafilter-lemma]
aliases: []
landmark: true
short: "the dual unit ball is weak-star compact"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Banach-Alaoglu theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Banach%E2%80%93Alaoglu_theorem"
    - title: "Boolean prime ideal theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem"
    - title: "F. Albiac and N. J. Kalton, Topics in Banach Space Theory, 2nd ed., Graduate Texts in Mathematics 233, Springer (2016)"
      url: "https://doi.org/10.1007/978-3-319-31557-7"
pipeline_run: null
---

## Statement

Let $X$ be a normed space. The closed unit ball
$B_{X^{*}} = \{ f \in X^{*} : \lVert f \rVert \le 1 \}$ of the dual space is compact in the
weak-star topology $\sigma(X^{*}, X)$.

**Set-theoretic cost.** Over ZF the theorem is equivalent to the Boolean prime ideal theorem,
equivalently to the ultrafilter lemma. The sequential form for separable $X$, that every bounded
sequence in $X^{*}$ has a weak-star convergent subsequence, is proved by a diagonal argument and
needs only countable choice.

## Remarks

**Not proved in this library.** Recorded with a citation.

**What would prove it.** Regard a functional of norm at most one as a point of the product
$\prod_{x \in X} \{ \lambda : |\lambda| \le \lVert x \rVert \}$, which is compact by Tychonoff for
products of compact Hausdorff spaces, and check that the set of linear functionals is closed in the
product topology. The Tychonoff theorem for Hausdorff factors is exactly the ultrafilter lemma,
which this library proves as [[thm-ultrafilter-lemma]]; the missing ingredient is again the normed
space track and not the choice principle.

**Why it matters here.** Compactness of the dual ball in a topology weak enough to have it is the
device that turns "bounded" into "has a convergent subnet", which is how existence proofs are run in
infinite dimensions. Two items below depend on it in spirit: Banach-Stone, whose proof runs through
the extreme points of the dual ball, and the fact that $c_0$ is not a dual space.
