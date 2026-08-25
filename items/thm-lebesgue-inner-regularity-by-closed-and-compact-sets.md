---
id: thm-lebesgue-inner-regularity-by-closed-and-compact-sets
kind: theorem
title: "Assuming countable choice, the Lebesgue measure of a measurable set is the supremum of the measures of its compact subsets"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-littlewood-characterisations-of-lebesgue-measurability, thm-lebesgue-measure-is-a-complete-measure, thm-borel-sets-are-lebesgue-measurable, thm-heine-borel-rn, thm-compact-subset-is-closed-and-bounded, thm-continuity-from-below-for-measures, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, prop-measure-of-a-set-difference, prop-measure-monotonicity, thm-metric-open-set-algebra, def-metric-ball, def-metric-bounded-diameter, def-metric-topology, def-metric-compactness, def-half-open-box, thm-lebesgue-measure-of-a-box-of-every-kind, thm-of-archimedean, def-countable-choice]
justified_by: []
aliases: []
landmark: true
short: "inner regularity"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Exercise 1.2.15"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "E. A. Carlen, Notes on Lebesgue Measure on $\\mathbb{R}^n$ and $S^{n-1}$ (Rutgers Math 501), Theorem 1.5"
      url: "https://sites.math.rutgers.edu/~carlen/501F13/LebesgueMeas.pdf"
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Chapter 2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$ and **assume the Axiom of Countable Choice**
([[def-countable-choice]]). For every Lebesgue measurable
$E \subseteq \mathbb{R}^n$,

$$\lambda_n(E) \;=\; \sup\,\{\, \lambda_n(K) \;:\; K \subseteq E \text{ and } K \text{ is a compact subset of } \mathbb{R}^n \,\}$$

([[def-metric-compactness]]), the supremum being over a nonempty family since
$\varnothing$ is compact.

**The choice hypothesis is inherited, not decorative.** The proof runs through
[[thm-littlewood-characterisations-of-lebesgue-measurability]], which is itself
stated under countable choice, so the conclusion carries the same hypothesis and
says so.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the Axiom of Countable Choice, and a Lebesgue measurable set $E \subseteq \mathbb{R}^n$.

[L1] Assuming countable choice, $E$ is Lebesgue measurable if and only if for every real $\varepsilon > 0$ there is a closed $F \subseteq E$ with $\lambda_n^*(E\setminus F) < \varepsilon$ ([[thm-littlewood-characterisations-of-lebesgue-measurability]], condition 3).

[L2] Assuming countable choice, $\mathcal{L}(\mathbb{R}^n)$ is a sigma-algebra and $\lambda_n$ is a complete measure on it, and $\lambda_n$ is the restriction of $\lambda_n^*$ ([[thm-lebesgue-measure-is-a-complete-measure]]).

[L3] Assuming countable choice, every Borel subset of $\mathbb{R}^n$ is Lebesgue measurable ([[thm-borel-sets-are-lebesgue-measurable]]).

[L4] Every bounded Lebesgue measurable subset of $\mathbb{R}^n$ has finite measure, and every compact subset of $\mathbb{R}^n$ is Lebesgue measurable of finite measure ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[L5] Every set $R$ with $R^{\circ} \subseteq R \subseteq \overline{R}$ is Lebesgue measurable with $\lambda_n(R) = \prod_{i<n}(b_i-a_i)$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]), and $(u,v]^n := B(\mathbf{u},\mathbf{v})$ ([[def-half-open-box]]).

[F1] A subset $K \subseteq \mathbb{R}^n$ is compact if and only if $K$ is closed in $\mathbb{R}^n$ and bounded ([[thm-heine-borel-rn]], claim 2), and a compact subset of a metric space is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]], [[def-metric-bounded-diameter]], [[def-metric-topology]]).

[F2] Closed balls are closed, for every $x \in X$ and every $r > 0$ ([[thm-metric-open-set-algebra]], claim 4), where $\bar B(x,r) := \{\, y \in X : d(x,y) \le r \,\}$ ([[def-metric-ball]]).

[F3] Let $(E_n)_{n\in\mathbb N}$ be an increasing sequence of measurable sets for a measure $\mu$; then $\mu\left(\bigcup_{n\in\mathbb N}E_n\right)=\sup_{n\in\mathbb N}\mu(E_n)$ ([[thm-continuity-from-below-for-measures]]).

[F4] Let $\mu$ be a measure and let $A\subseteq B$ be measurable with $\mu(A)<+\infty$; then $\mu(B)=\mu(A)+\mu(B\setminus A)$ ([[prop-measure-of-a-set-difference]]).

[F5] If $A,B\in\mathcal A$ and $A\subseteq B$, then $\mu(A)\le\mu(B)$ ([[prop-measure-monotonicity]]).

[F6] Every complete ordered field $F$ is Archimedean: for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$ ([[thm-of-archimedean]]).

[F7] The **Axiom of Countable Choice** says that for every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that $f(n) \in X_n$ for every $n \in \mathbb{N}$ ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Every compact $K \subseteq E$ is Lebesgue measurable of finite measure and satisfies $\lambda_n(K) \le \lambda_n(E)$ by monotonicity, and the empty set is compact, so the displayed family is nonempty and its supremum is at most $\lambda_n(E)$. [L2, L4, F1, F5]

1.2 Suppose $\lambda_n(E) < +\infty$ and let $t < \lambda_n(E)$ be real. Applying the closed-deficit condition with $\varepsilon := \lambda_n(E)-t$ gives a closed $F \subseteq E$ with $\lambda_n^*(E\setminus F) < \lambda_n(E)-t$; $F$ is Borel, hence measurable, of finite measure, and the difference formula gives $\lambda_n(E) = \lambda_n(F)+\lambda_n(E\setminus F)$, so $\lambda_n(F) > t$. [L1, L2, L3, L4, F4, F7]

2.1 The sets $F \cap \bar B(0,k)$ for $k \ge 1$ are closed and bounded, hence compact subsets of $E$, they increase with $k$, and their union is $F$ because the Archimedean property puts every point of $F$ inside some $\bar B(0,k)$; continuity from below therefore gives $\lambda_n(F) = \sup_{k}\lambda_n\big(F\cap\bar B(0,k)\big)$, so some $k$ has $\lambda_n\big(F\cap\bar B(0,k)\big) > t$. [step 1.2, L2, L3, F1, F2, F3, F6]

3.1 Suppose instead $\lambda_n(E) = +\infty$ and let $t$ be any real. The sets $E\cap(-k,k]^n$ are measurable, bounded and hence of finite measure, they increase with $k$ and their union is $E$, so continuity from below gives $\sup_k\lambda_n\big(E\cap(-k,k]^n\big) = +\infty$ and some $k$ has $\lambda_n\big(E\cap(-k,k]^n\big) > t$; steps 1.2 and 2.1 applied to that set of finite measure produce a compact subset of it, hence of $E$, of measure above $t$. [step 1.2, step 2.1, L2, L4, L5, F3, F6]

4.1 In both cases every real below $\lambda_n(E)$ is below the measure of some compact subset of $E$, so the supremum is at least $\lambda_n(E)$, and step 1.1 gives the reverse inequality. [step 1.1, step 2.1, step 3.1] ∎
