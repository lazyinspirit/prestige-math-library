---
id: rem-egorov-theorem
kind: remark
title: "Egorov's theorem"
status: draft
origin: session
proved_here: false
deps: [rem-lebesgue-measure-and-integral]
justified_by: []
forward_refs: []
aliases: [rem-egoroff]
landmark: false
short: "On a finite measure space, pointwise a.e. convergence is uniform off a set of small measure"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Egorov's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Egorov%27s_theorem"
    - title: "Egorov theorem (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Egorov_theorem"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{A}, \mu)$ be a measure space with $\mu(X) < \infty$, and let
$f_n, f : X \to \mathbb{R}$ be measurable with $f_n \to f$ pointwise almost
everywhere. Then for every $\varepsilon > 0$ there is a measurable
$E \subseteq X$ with

$$\mu(X \setminus E) < \varepsilon \qquad \text{and} \qquad f_n \to f \text{ uniformly on } E.$$

The finiteness of $\mu(X)$ is essential: on $\mathbb{R}$ with Lebesgue measure,
$f_n = \mathbf{1}_{[n, n+1]} \to 0$ pointwise, but on any set whose complement
has finite measure the convergence is not uniform. The conclusion cannot be
improved to $\varepsilon = 0$: convergence is in general not uniform off a null
set, as $f_n = x^n$ on $[0,1]$ shows.

## Remarks

**Not proved in this library.** It is recorded with citations and used in no
proof here.

**What would prove it.** Countable subadditivity and continuity from above of a
finite measure, applied to the sets
$E_{n,k} = \bigcup_{m \ge n} \{ |f_m - f| \ge 1/k \}$: each decreases in $n$ to
a null set, so some $E_{n_k, k}$ has measure below $\varepsilon 2^{-k}$, and the
complement of their union works. The argument is short but is entirely about the
measure, which this library does not have
([[rem-lebesgue-measure-and-integral]]). Continuity from above is where
$\mu(X) < \infty$ is spent.

**Which page it serves.** The uniform convergence page. That page proves what
uniform convergence buys, and it can exhibit sequences that converge pointwise
but not uniformly; Egorov is the theorem that says the failure is always
confined to a small set, and it is the standard bridge from pointwise hypotheses
to uniform conclusions. It is also the usual route to Lusin's theorem
([[rem-lusin-theorem]]).
