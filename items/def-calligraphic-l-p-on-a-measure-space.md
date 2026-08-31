---
id: def-calligraphic-l-p-on-a-measure-space
kind: definition
title: "The function space $\\mathcal{L}^p(\\mu)$ for $0 < p < \\infty$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-measure-space, def-real-power, def-nonnegative-lebesgue-integral]
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Section 7A"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Section 7.1"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
verification:
  audited: 2026-08-31
  precheck: n/a
---

## Definition

Let $(X,\mathcal A,\mu)$ be a measure space and let $p$ be a real number with
$0<p<\infty$. Write $\mathcal M(X,\mu)$ for the measurable functions
$f:X\to\mathbb R$. For $f\in\mathcal M(X,\mu)$ define the extended-valued
$p$-functional

$$\|f\|_p:=\begin{cases}\left(\int |f|^p\,d\mu\right)^{1/p},&\displaystyle\int |f|^p\,d\mu<\infty,\\+\infty,&\displaystyle\int |f|^p\,d\mu=+\infty.\end{cases}$$

The finite power uses [[def-real-power]], while the second clause avoids
applying real powers to the extended value $+\infty$. The integral is the
nonnegative Lebesgue integral of [[def-nonnegative-lebesgue-integral]].

The class

$$\mathcal L^p(\mu):=\{f\in\mathcal M(X,\mu): \|f\|_p<\infty\}$$

is the measurable-function space used on this page before passing to
almost-everywhere equivalence classes.

For $1\le p<\infty$, the pointwise operations make $\mathcal L^p(\mu)$ a real
vector space by
[[thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one]].
