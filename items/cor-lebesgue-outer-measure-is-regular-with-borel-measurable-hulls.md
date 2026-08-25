---
id: cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls
kind: corollary
title: "Every subset of $\\mathbb{R}^n$ has a $G_\\delta$ measurable hull of the same outer measure"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-lebesgue-outer-regularity-for-arbitrary-subsets, def-regular-outer-measure-and-measurable-hull, thm-premeasure-induced-outer-measure-is-regular, def-lebesgue-outer-measure, thm-borel-sets-are-lebesgue-measurable, thm-lebesgue-measure-is-a-complete-measure, thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume, def-outer-measure, def-g-delta-and-f-sigma-in-a-topological-space, cor-heine-borel-in-the-product-topology, def-metric-topology, cor-archimedean-reciprocal, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Exercise 1.2.14"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Chapter 2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$ and **assume the Axiom of Countable Choice**
([[def-countable-choice]]). Every $E \subseteq \mathbb{R}^n$ has a $G_\delta$ set
$G$ ([[def-g-delta-and-f-sigma-in-a-topological-space]]) with

$$E \subseteq G \qquad\text{and}\qquad \lambda_n^*(G) = \lambda_n^*(E).$$

Such a $G$ is Borel, hence Lebesgue measurable, so it is a measurable hull of $E$
and $\lambda_n^*$ is a regular outer measure
([[def-regular-outer-measure-and-measurable-hull]]). The regularity also follows
from [[thm-premeasure-induced-outer-measure-is-regular]], which supplies a
measurable hull inside $\sigma(\mathcal{E}_n)$; the point added here is that the
hull may be taken of the special form $G_\delta$.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the Axiom of Countable Choice, and a subset $E \subseteq \mathbb{R}^n$.

[L1] Assuming countable choice, $\lambda_n^*(E) = \inf\{\lambda_n(U) : U \subseteq \mathbb{R}^n$ open and $E \subseteq U\}$ for every subset $E$ ([[thm-lebesgue-outer-regularity-for-arbitrary-subsets]]).

[L2] Assuming countable choice, every Borel subset of $\mathbb{R}^n$ is Lebesgue measurable ([[thm-borel-sets-are-lebesgue-measurable]]).

[L3] Assuming countable choice, $\mathcal{L}(\mathbb{R}^n)$ is a sigma-algebra and $\lambda_n$ is a complete measure on it, and $\lambda_n$ is the restriction of $\lambda_n^*$ ([[thm-lebesgue-measure-is-a-complete-measure]]).

[L4] Assuming countable choice, $\lambda_n^*$ is an outer measure on $\mathbb{R}^n$, hence monotone ([[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]], [[def-outer-measure]], [[def-lebesgue-outer-measure]]).

[F1] $A$ is a **$G_\delta$ set of $X$** when there is a sequence $(V_n)_{n \in \mathbb{N}}$ of open subsets of $X$ with $A = \bigcap_{n \in \mathbb{N}} V_n$ ([[def-g-delta-and-f-sigma-in-a-topological-space]]).

[F2] A **measurable hull** of $E$ is a Carathéodory measurable set $H\supseteq E$ with $\mu^*(H)=\mu^*(E)$; the outer measure is **regular** when every subset has a measurable hull ([[def-regular-outer-measure-and-measurable-hull]]).

[F3] Assume the Axiom of Countable Choice. An outer measure induced by a premeasure is regular, and every set has a measurable hull in $\sigma(\mathcal A_0)$ ([[thm-premeasure-induced-outer-measure-is-regular]]).

[F4] The product topology on $\mathbb{R}^n$ **is** the metric topology of $d_2$ ([[cor-heine-borel-in-the-product-topology]], claim 1; [[def-metric-topology]]).

[F5] For every real $\varepsilon > 0$ there is a natural number $k \ge 1$ with $1/k < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[F6] The **Axiom of Countable Choice** says that for every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that $f(n) \in X_n$ for every $n \in \mathbb{N}$ ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 If $\lambda_n^*(E) = +\infty$, take $G := \mathbb{R}^n$, which is open and hence a $G_\delta$ by the constant sequence, contains $E$, and has $\lambda_n^*(G) = +\infty$ by monotonicity. [L4, F1, F4]

1.2 If $\lambda_n^*(E) < +\infty$, then for each $m \in \mathbb{N}$ the family of open sets $U \supseteq E$ with $\lambda_n(U) < \lambda_n^*(E) + 1/(m+1)$ is nonempty, because the infimum in [L1] is not a lower bound of anything larger; countable choice selects one such $U_m$ for every $m$. [L1, F5, F6]

2.1 Put $G := \bigcap_{m\in\mathbb{N}}U_m$, a $G_\delta$ set containing $E$; monotonicity gives $\lambda_n^*(E) \le \lambda_n^*(G) \le \lambda_n^*(U_m) = \lambda_n(U_m) < \lambda_n^*(E)+1/(m+1)$ for every $m$, so $\lambda_n^*(G) = \lambda_n^*(E)$. [step 1.2, L2, L3, L4, F1, F5]

3.1 In both cases $G$ is a countable intersection of open sets, hence Borel and Lebesgue measurable, so $G$ is a measurable hull of $E$ and $\lambda_n^*$ is regular; the same regularity is delivered by the published theorem on premeasure-induced outer measures, with the hull taken in $\sigma(\mathcal{E}_n)$ instead. [step 1.1, step 2.1, L2, F1, F2, F3] ∎
