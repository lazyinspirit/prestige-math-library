---
id: def-banach-valued-simple-function-and-integral
kind: definition
title: "Banach-valued simple function and integral"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-banach-space, def-measure-space]
justified_by: [lem-banach-valued-simple-integral-is-well-defined]
forward_refs: []
aliases: []
landmark: false
verification:
  audited: 2026-09-14
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "Section 11.6, definition preceding Lemma 11.28, printed p. 332"
pipeline_run: phase-2-next-18
---

## Definition

Let $(\Omega,\mathcal A,\mu)$ be a measure space and let $X$ be a real or
complex Banach space. An $X$-valued **measurable simple function** is a function
$s:\Omega\to X$ having a representation

$$s=\sum_{j=1}^{m}x_j\mathbf 1_{A_j},$$

where $m\geq 0$, the sets $A_j\in\mathcal A$ are pairwise disjoint, and the
vectors $x_j\in X$ are distinct and nonzero. The value of $s$ off
$\bigcup_jA_j$ is $0$. The empty representation is therefore the zero
function.

The simple function is **integrable** when $\mu(A_j)<\infty$ for every nonzero
coefficient $x_j$. Its integral over $E\in\mathcal A$ is

$$\int_E s\,d\mu:=\sum_{j=1}^{m}\mu(E\cap A_j)x_j.$$

In particular, $\int s\,d\mu$ means $\int_\Omega s\,d\mu$. Requiring finite
measure only for the nonzero level sets avoids the undefined product
$0\cdot\infty$. The next lemma proves that the displayed value does not depend
on the chosen disjoint representation.

## Remarks

- The canonical representation uses the nonzero fibres
  $A_j=s^{-1}(\{x_j\})$. Thus repetitions may always be merged and an explicit
  zero fibre may be discarded.
- When $m=0$, every displayed sum is empty and the integral is $0_X$.
