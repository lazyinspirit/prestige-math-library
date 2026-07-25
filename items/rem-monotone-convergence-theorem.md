---
id: rem-monotone-convergence-theorem
kind: remark
title: "Monotone convergence theorem (Beppo Levi)"
status: draft
origin: session
proved_here: false
deps: [rem-lebesgue-measure-and-integral]
justified_by: []
forward_refs: []
aliases: [rem-mct]
landmark: false
short: "An increasing sequence of nonnegative measurable functions may be integrated term by term"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Monotone convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotone_convergence_theorem"
    - title: "Lebesgue integration (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lebesgue_integral"
    - title: "T. Tao, An Introduction to Measure Theory, Ch. 1"
      url: "https://terrytao.wordpress.com/books/an-introduction-to-measure-theory/"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{A}, \mu)$ be a measure space and let
$f_1 \le f_2 \le f_3 \le \cdots$ be measurable functions
$X \to [0, +\infty]$ with pointwise limit $f = \lim_n f_n$. Then $f$ is
measurable and

$$\lim_{n \to \infty} \int_X f_n \, d\mu = \int_X f \, d\mu,$$

both sides being allowed the value $+\infty$. Equivalently, for measurable
$g_n : X \to [0, +\infty]$,

$$\int_X \sum_{n=1}^{\infty} g_n \, d\mu = \sum_{n=1}^{\infty} \int_X g_n \, d\mu.$$

No integrability hypothesis and no dominating function are needed: monotonicity
and nonnegativity are the whole hypothesis.

## Remarks

**Not proved in this library.** It is recorded with citations and used in no
proof here.

**What would prove it.** The Lebesgue integral of a nonnegative measurable
function as a supremum over simple minorants
([[rem-lebesgue-measure-and-integral]]), plus continuity from below of the
measure, that is $\mu(\bigcup_n E_n) = \lim_n \mu(E_n)$ for an increasing
sequence of measurable sets. The standard argument fixes a simple
$0 \le s \le f$ and $c \in (0,1)$, applies continuity from below to
$E_n = \{f_n \ge c\,s\}$, and lets $c \to 1$. The theorem is then used
immediately to prove that the integral is additive, so it is not a corollary of
the basic theory but part of its foundation.

**Which page it serves.** The Riemann integral page, where the corresponding
statement is false without extra hypotheses: an increasing sequence of Riemann
integrable functions on $[0,1]$ with bounded integrals may converge pointwise to
a bounded function that is not Riemann integrable. That failure is exactly the
defect this theorem repairs, and it is the honest motivation for building a
measure track at all.

**Interchange results that this library does prove.** Uniform convergence
permits interchange for the Riemann integral, and so does Arzela's bounded
convergence theorem, which is a Riemann-level result and is in scope here even
though its natural home is next to dominated convergence. The deferral is of the
measure-theoretic statements, not of every interchange theorem.
