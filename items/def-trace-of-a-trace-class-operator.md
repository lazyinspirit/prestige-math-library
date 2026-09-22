---
id: def-trace-of-a-trace-class-operator
kind: definition
title: Trace of a trace class operator
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-trace-class-operator, def-absolute-value-and-singular-values-of-a-compact-operator, thm-singular-value-decomposition-for-compact-operators, lem-nuclear-series-characterizes-trace-norm, def-square-summable-family-on-an-arbitrary-index-set, lem-finite-bessel-inequality, thm-cauchy-schwarz-in-an-inner-product-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-real-and-complex-inner-product-space, def-hilbert-space, def-operator-norm, def-bounded-linear-operator, def-metric-convergence, def-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.6, Lemma 3.27 (printed pp. 97–98)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §5, Proposition 2.8"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
real or complex Hilbert space ([[def-hilbert-space]]), let $T\in\mathcal B(H)$
be a trace-class operator on $H$ ([[def-trace-class-operator]]) and let $E$ be a
Hilbert basis of $H$, **supplied as data**
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]];
existence of such a basis is not asserted here). The **trace of $T$ relative to
$E$** is
$$\operatorname{tr}_E(T):=\sum_{e\in E}\langle Te,e\rangle,$$
the sum of the scalar family $(\langle Te,e\rangle)_{e\in E}$ in the
finite-subset-net sense of
[[def-square-summable-family-on-an-arbitrary-index-set]].

**The family is absolutely summable, uniformly in $E$.** Let
$T=\sum_js_j\langle\cdot,e_j\rangle f_j$ be the singular-value series
([[thm-singular-value-decomposition-for-compact-operators]],
[[def-absolute-value-and-singular-values-of-a-compact-operator]]) with
$(e_j)_{j\in J}$, $(f_j)_{j\in J}$ orthonormal and $\sum_js_j=\|T\|_1<+\infty$
([[def-trace-class-operator]]). For every $e\in H$ the series
$\langle Te,e\rangle=\sum_{j}s_j\langle e,e_j\rangle\langle f_j,e\rangle$
converges absolutely, because the moduli are bounded by
$s_1\sum_j|\langle e,e_j\rangle\langle f_j,e\rangle|\le s_1\|e\|^2$ by
Cauchy–Schwarz and Bessel
([[thm-cauchy-schwarz-in-an-inner-product-space]],
[[lem-finite-bessel-inequality]]). Consequently, for every finite
$F\subseteq E$, using the interchange of finite sums with the nonnegative
finite-subset supremum over $j$ and then finite Cauchy–Schwarz and Bessel twice,
$$\sum_{e\in F}|\langle Te,e\rangle|\le\sum_{e\in F}\sum_{j}s_j|\langle e,e_j\rangle|\,|\langle f_j,e\rangle|=\sum_{j}s_j\sum_{e\in F}|\langle e,e_j\rangle|\,|\langle f_j,e\rangle|\le\sum_{j}s_j\Bigl(\sum_{e\in F}|\langle e,e_j\rangle|^2\Bigr)^{1/2}\Bigl(\sum_{e\in F}|\langle f_j,e\rangle|^2\Bigr)^{1/2}\le\sum_{j}s_j=\|T\|_1 ,$$
because for each $j$ the two finite coefficient sums are bounded by
$\|e_j\|=1$ and $\|f_j\|=1$ (finite Bessel). Hence the finite subsums of
$|(\langle Te,e\rangle)|_{e\in E}$ are bounded by $\|T\|_1$, the family is
absolutely summable, and an absolutely summable family of scalars is summable in
ZF with $|\sum_{e\in E}\langle Te,e\rangle|\le\|T\|_1$
([[def-square-summable-family-on-an-arbitrary-index-set]]). This justifies the
notation $\operatorname{tr}_E(T)$ before any basis-independence statement.

**Choice accounting and status.** Only a supplied basis $E$ and the singular
values of $T$ are used; no Hilbert basis of $H$ is assumed to exist, and the
next theorem proves that $\operatorname{tr}_E(T)$ does not depend on the
supplied basis and equals the basis-free trace of $T$
([[thm-trace-is-absolutely-convergent-and-basis-independent]]).

