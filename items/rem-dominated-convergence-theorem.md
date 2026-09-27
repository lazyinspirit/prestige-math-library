---
id: rem-dominated-convergence-theorem
kind: remark
title: "Dominated convergence theorem"
status: published
origin: session
proved_here: false
verification:
  precheck: n/a
  sources_checked:
    date: 2026-09-26
    scope: "Current recorded statement and cited passages; research/frontier-35-ten-categories-recorded-source-audit-20260926.md"
    by: "owner-delegated source audit (GPT-6-Sol xhigh)"
deps: [rem-lebesgue-measure-and-integral, rem-fatou-lemma]
justified_by: []
forward_refs: [thm-dominated-convergence]
aliases: [rem-dct]
landmark: true
short: "A single integrable dominating function licenses passage to the limit"
sources:
  scraped: []
  references:
    - title: "Dominated convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dominated_convergence_theorem"
    - title: "Fatou's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fatou%27s_lemma"
    - title: "T. Tao, An Introduction to Measure Theory, Ch. 1"
      url: "https://terrytao.wordpress.com/books/an-introduction-to-measure-theory/"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{A}, \mu)$ be a measure space, let $f_n : X \to \mathbb{R}$ be
measurable with $f_n \to f$ pointwise almost everywhere, and suppose there is a
single $g \in L^{1}(\mu)$ with $|f_n| \le g$ almost everywhere for every $n$.
Then $f$ and every $f_n$ are integrable,

$$\lim_{n \to \infty} \int_X |f_n - f| \, d\mu = 0, \qquad \text{hence} \qquad \lim_{n \to \infty} \int_X f_n \, d\mu = \int_X f \, d\mu.$$

The domination hypothesis cannot be dropped:
$f_n = n\,\mathbf{1}_{(0,1/n)}$ on $[0,1]$ converges pointwise to $0$ while
$\int f_n \, d\lambda = 1$. There is no integrable common dominator: on
$0<x<1$ the pointwise supremum of the $f_n(x)$ is
$\lceil 1/x\rceil-1\ge 1/x-1$, whose integral diverges near $0$.

## Remarks

**Not proved on this page.** The separate published
[[thm-dominated-convergence]] supplies a local proof. This page records the
theorem and its scope without using it in a proof.

**How the published proof works.** After removing one null set for the
countably many domination and convergence conditions, it bounds
$|f_n-f|$ by $2g$ and applies reverse Fatou to obtain convergence in
$L^1$. The integral triangle inequality then gives convergence of the
integrals. See [[thm-dominated-convergence]] for the proof and
[[rem-fatou-lemma]] for the underlying limit inequality.

**Which page it serves.** It is the endpoint of the Riemann integral page and of
the uniform convergence page. Uniform convergence on a bounded interval is one
Riemann-level sufficient condition for interchanging a limit and an integral;
the published Lebesgue theorem allows pointwise almost-everywhere convergence
under a single integrable dominator.

**The Riemann-level substitute that is in scope.** Arzela's bounded convergence
theorem, that a uniformly bounded sequence of Riemann integrable functions on
$[a,b]$ converging pointwise to a Riemann integrable limit may be integrated
term by term, is a theorem about the Riemann integral and is not deferred. It
needs the limit function's Riemann integrability as a hypothesis, which is
exactly the weakness the Lebesgue theory removes.
