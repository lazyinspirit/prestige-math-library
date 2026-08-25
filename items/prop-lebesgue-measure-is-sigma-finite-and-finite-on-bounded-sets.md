---
id: prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
kind: proposition
title: "Lebesgue measure is sigma-finite, and every metrically bounded subset of $\\mathbb{R}^n$ has finite outer measure"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-lebesgue-measure-is-a-complete-measure, thm-lebesgue-measure-of-a-box-of-every-kind, thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume, thm-borel-sets-are-lebesgue-measurable, def-finite-sigma-finite-and-semifinite-measures, def-metric-bounded-diameter, def-metric-ball, def-metric-topology, lem-metrics-on-rn, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, thm-heine-borel-rn, thm-compact-subset-is-closed-and-bounded, prop-measure-monotonicity, def-outer-measure, def-half-open-box, def-integer-power, thm-of-archimedean, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Chapter 2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "E. A. Carlen, Notes on Lebesgue Measure on $\\mathbb{R}^n$ and $S^{n-1}$ (Rutgers Math 501), Section 1"
      url: "https://sites.math.rutgers.edu/~carlen/501F13/LebesgueMeas.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$ and **assume the Axiom of Countable Choice**
([[def-countable-choice]]). Then:

1. $\lambda_n$ is sigma-finite ([[def-finite-sigma-finite-and-semifinite-measures]]):
   the cubes $(-k,k]^n$ are Lebesgue measurable with
   $\lambda_n\big((-k,k]^n\big) = (2k)^n < +\infty$, they increase with $k$, and
   their union over $k \in \mathbb{N}$ is $\mathbb{R}^n$.
2. Every bounded subset $E \subseteq \mathbb{R}^n$
   ([[def-metric-bounded-diameter]]) has $\lambda_n^*(E) < +\infty$; a bounded
   Lebesgue measurable set therefore has finite measure, and every compact
   subset of $\mathbb{R}^n$ is Lebesgue measurable of finite measure.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the Axiom of Countable Choice, and Lebesgue measure $\lambda_n$ on $\mathcal{L}(\mathbb{R}^n)$.

[L1] Assuming countable choice, $\mathcal{L}(\mathbb{R}^n)$ is a sigma-algebra, $\lambda_n$ is a complete measure on it, and $\lambda_n(B)=\operatorname{vol}(B)$ for every half-open box $B$ ([[thm-lebesgue-measure-is-a-complete-measure]]).

[L2] Every set $R$ with $R^{\circ} \subseteq R \subseteq \overline{R}$ is Lebesgue measurable with $\lambda_n(R) = \prod_{i<n}(b_i-a_i)$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[L3] Assuming countable choice, $\lambda_n^*$ is an outer measure on $\mathbb{R}^n$, hence monotone ([[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]], [[def-outer-measure]]).

[L4] Assuming countable choice, every Borel subset of $\mathbb{R}^n$ is Lebesgue measurable ([[thm-borel-sets-are-lebesgue-measurable]]).

[L5] For a nonempty box $\operatorname{vol}(B) := \prod_{i<n}(b_i - a_i)$ when every $a_i$ and every $b_i$ is real, and $(u,v]^n := B(\mathbf{u}, \mathbf{v})$ ([[def-half-open-box]], [[def-integer-power]]).

[F1] $\mu$ is **sigma-finite** if there is a sequence $(E_n)_{n\in\mathbb N}$ in $\mathcal A$ such that $X=\bigcup_nE_n$ and $\mu(E_n)<+\infty$ for every $n$ ([[def-finite-sigma-finite-and-semifinite-measures]]).

[F2] $A$ is **bounded** if $A = \emptyset$ or there are $x_0 \in X$ and a real $r > 0$ with $A \subseteq B(x_0, r)$, where $B(x_0,r) := \{\, y : d(x_0,y) < r \,\}$ ([[def-metric-bounded-diameter]], [[def-metric-ball]]).

[F3] For every $x \in \mathbb{R}^{n}$, $\lVert x\rVert_\infty \le \lVert x\rVert_2$, and $\lVert x-y\rVert_2 = d_2(x,y)$, $\lVert x-y\rVert_\infty = d_\infty(x,y)$, where $d_\infty(x,y) = \max\{|x_k-y_k| : k<n\}$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], claim 3; [[lem-p-norms-are-norms-and-induce-the-published-metrics]], claim 3; [[def-p-norms-on-rn]]; [[lem-metrics-on-rn]]).

[F4] A subset $K \subseteq \mathbb{R}^n$ is compact if and only if $K$ is closed in $\mathbb{R}^n$ and bounded ([[thm-heine-borel-rn]], claim 2; [[def-metric-topology]]); and a compact subset of a metric space is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]).

[F5] If $A,B\in\mathcal A$ and $A\subseteq B$, then $\mu(A)\le\mu(B)$ ([[prop-measure-monotonicity]]).

[F6] Every complete ordered field $F$ is Archimedean: for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$ ([[thm-of-archimedean]]).

## Proof

**Proof technique:** direct.

1.1 Each cube $(-k,k]^n$ is a half-open box, hence Lebesgue measurable with $\lambda_n\big((-k,k]^n\big)=\prod_{i<n}\big(k-(-k)\big)=(2k)^n$, a real number; the cubes increase with $k$; and every $x \in \mathbb{R}^n$ lies in one of them, because the Archimedean property gives a natural $k \ge 1$ above each of the finitely many reals $|x_i|$, so their union is $\mathbb{R}^n$ and $\lambda_n$ is sigma-finite. [L1, L2, L5, F1, F6]

1.2 Let $E$ be bounded and nonempty, say $E \subseteq B(x_0,r)$ with $r$ a positive real; every $y \in E$ satisfies $|y_i-(x_0)_i| \le d_2(x_0,y) < r$ in each coordinate, so $E$ is contained in the half-open box with parameter pairs $\big((x_0)_i-r,\ (x_0)_i+r\big]$, whose volume is $(2r)^n$; monotonicity of the outer measure therefore gives $\lambda_n^*(E) \le (2r)^n < +\infty$, and the empty set has outer measure $0$. [L1, L3, L5, F2, F3]

2.1 A bounded Lebesgue measurable set has $\lambda_n(E)=\lambda_n^*(E)<+\infty$ by step 1.2; and a compact $K \subseteq \mathbb{R}^n$ is closed, hence Borel and Lebesgue measurable, and bounded, hence of finite measure. [step 1.2, L4, F4, F5]

3.1 Step 1.1 is claim 1 and steps 1.2 and 2.1 are claim 2. [step 1.1, step 1.2, step 2.1] ∎
