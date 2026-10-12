---
id: lem-small-open-excess-implies-lebesgue-measurable
kind: lemma
title: "A subset of $\\mathbb{R}^n$ with open supersets of arbitrarily small excess is Lebesgue measurable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-lebesgue-measure-is-a-complete-measure, thm-borel-sets-are-lebesgue-measurable, thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume, def-outer-measure, def-g-delta-and-f-sigma-in-a-topological-space, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, cor-heine-borel-in-the-product-topology, def-metric-topology, cor-archimedean-reciprocal, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Theorem 2.24"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Exercise 1.2.7"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$ and **assume the Axiom of Countable Choice**
([[def-countable-choice]]). Let $E \subseteq \mathbb{R}^n$ be such that for every
real $\varepsilon > 0$ there is an open $U \supseteq E$ with
$\lambda_n^*(U\setminus E) < \varepsilon$. Then there are a $G_\delta$ set $G$
([[def-g-delta-and-f-sigma-in-a-topological-space]]) and a set $Z$ with

$$E \;=\; G \setminus Z, \qquad E \subseteq G, \qquad \lambda_n^*(Z) = 0,$$

and $E$ is Lebesgue measurable
([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]).

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the Axiom of Countable Choice, and a set $E \subseteq \mathbb{R}^n$ admitting open supersets of arbitrarily small outer excess.

[L1] Assuming countable choice, $\mathcal{L}(\mathbb{R}^n)$ is a sigma-algebra, $\lambda_n$ is a complete measure on it, and every $S \subseteq \mathbb{R}^n$ with $\lambda_n^*(S)=0$ is Lebesgue measurable with $\lambda_n(S)=0$ ([[thm-lebesgue-measure-is-a-complete-measure]]).

[L2] Assuming countable choice, every Borel subset of $\mathbb{R}^n$ is Lebesgue measurable ([[thm-borel-sets-are-lebesgue-measurable]]).

[L3] Assuming countable choice, $\lambda_n^*$ is an outer measure on $\mathbb{R}^n$, hence monotone ([[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]], [[def-outer-measure]]).

[F1] $A$ is a **$G_\delta$ set of $X$** when there is a sequence $(V_n)_{n \in \mathbb{N}}$ of open subsets of $X$ with $A = \bigcap_{n \in \mathbb{N}} V_n$ ([[def-g-delta-and-f-sigma-in-a-topological-space]]).

[F2] The product topology on $\mathbb{R}^n$ **is** the metric topology of $d_2$ ([[cor-heine-borel-in-the-product-topology]], claim 1; [[def-metric-topology]]).

[F3] For every real $\varepsilon > 0$ there is a natural number $k \ge 1$ with $1/k < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[F4] The **Axiom of Countable Choice** says that for every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that $f(n) \in X_n$ for every $n \in \mathbb{N}$ ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 For every $m \in \mathbb{N}$ the family of open $U \supseteq E$ with $\lambda_n^*(U\setminus E) < 1/(m+1)$ is nonempty by hypothesis, since $1/(m+1)$ is a positive real, so countable choice selects such a $U_m$ for every $m$. [F3, F4]

2.1 Put $G := \bigcap_{m\in\mathbb{N}}U_m$ and $Z := G\setminus E$; then $G$ is a $G_\delta$ set containing $E$, so $E = G\setminus Z$, and $Z \subseteq U_m\setminus E$ for every $m$, whence monotonicity gives $\lambda_n^*(Z) \le 1/(m+1)$ for every $m$ and therefore $\lambda_n^*(Z) = 0$. [step 1.1, L3, F1, F2, F3]

3.1 $G$ is a countable intersection of open sets, hence Borel and Lebesgue measurable; $Z$ has outer measure $0$, hence is Lebesgue measurable; and $E = G\setminus Z$ is a difference of measurable sets, hence Lebesgue measurable. [step 2.1, L1, L2, F1] ∎
