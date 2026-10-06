---
id: rem-mazur-lemma
kind: remark
title: "Mazur's lemma: for convex sets, weak closure equals norm closure"
status: draft
origin: session
proved_here: false
deps: [rem-weak-and-weak-star-topologies]
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "convexity repairs weak convergence"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Mazur's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mazur's_lemma"
    - title: "P. Howard and E. Tachtsis, On infinite-dimensional Banach spaces and weak forms of the axiom of choice, Math. Log. Quart. 63 (2017) 509-535"
      url: "https://commons.emich.edu/fac_sch2017/127/"
    - title: "F. Albiac and N. J. Kalton, Topics in Banach Space Theory, 2nd ed., Graduate Texts in Mathematics 233, Springer (2016)"
      url: "https://doi.org/10.1007/978-3-319-31557-7"
pipeline_run: null
---

## Statement

Let $X$ be a normed space and let $C \subseteq X$ be convex. Then the weak closure of $C$ equals its
norm closure. In particular a convex set is weakly closed if and only if it is norm closed.

**Sequential form.** If $x_n \to x$ weakly, then there is a sequence of convex combinations of the
$x_n$, each a finite average $\sum_{k} \lambda_k x_k$ with $\lambda_k \ge 0$ and
$\sum_k \lambda_k = 1$, converging to $x$ in norm.

## Remarks

**Not proved in this library.** Recorded with a citation.

**What would prove it.** The Hahn-Banach separation theorem, itself a geometric restatement of
[[rem-hahn-banach-theorem]]: a point outside a closed convex set is separated from it strictly by a
continuous functional, and such a functional is weakly continuous by definition of the weak
topology.

**A name clash worth recording.** A different statement is also called Mazur's lemma: if $X$ is an
infinite-dimensional Banach space, $Y \subseteq X$ a finite-dimensional subspace and
$\varepsilon > 0$, then there is a unit vector $x$ with
$\lVert y \rVert \le (1 + \varepsilon) \lVert y + \alpha x \rVert$ for all $y \in Y$ and all scalars
$\alpha$. That one is the key step in Banach's theorem that every infinite-dimensional Banach space
contains a basic sequence, and its usual proof consumes Hahn-Banach. The two results are unrelated,
and the library should never cite "Mazur's lemma" without saying which.

**Why it matters here.** It is the exact repair for the defect recorded in
[[rem-weak-and-weak-star-topologies]]. Weak limits cannot be reached by sequences in general, but
for convex sets, which is where optimisation and variational arguments live, weak and norm closures
agree, so weak limit points really can be approximated in norm.
