---
id: rem-dominated-convergence-theorem
kind: remark
title: "Dominated convergence theorem"
status: published
origin: session
proved_here: false
deps: [rem-lebesgue-measure-and-integral, rem-fatou-lemma]
justified_by: []
forward_refs: []
aliases: [rem-dct]
landmark: true
short: "A single integrable dominating function licenses passage to the limit"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
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
$\int f_n \, d\lambda = 1$, and the least function dominating all $f_n$ is
$1/x$, which is not integrable on $(0,1)$.

## Remarks

**Not proved in this library.** It is recorded with citations and used in no
proof here.

**What would prove it.** Fatou's lemma ([[rem-fatou-lemma]]) applied to the
nonnegative sequences $g + f_n$ and $g - f_n$, whose liminfs are $g + f$ and
$g - f$; the two resulting inequalities squeeze $\int f_n$ to $\int f$. The
convergence in $L^{1}$ comes from the same argument applied to
$2g - |f_n - f| \ge 0$. So the three convergence theorems form one block: the
monotone convergence theorem is proved from the construction of the integral,
Fatou from monotone convergence, and this from Fatou.

**Which page it serves.** It is the endpoint of the Riemann integral page and of
the uniform convergence page. Uniform convergence on a bounded interval is what
this library can offer for interchanging a limit and an integral, and it is a
much heavier hypothesis than pointwise convergence with a dominating function.

**The Riemann-level substitute that is in scope.** Arzela's bounded convergence
theorem, that a uniformly bounded sequence of Riemann integrable functions on
$[a,b]$ converging pointwise to a Riemann integrable limit may be integrated
term by term, is a theorem about the Riemann integral and is not deferred. It
needs the limit function's Riemann integrability as a hypothesis, which is
exactly the weakness the Lebesgue theory removes.
