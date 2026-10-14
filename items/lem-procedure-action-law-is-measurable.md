---
id: lem-procedure-action-law-is-measurable
kind: lemma
title: "A randomized procedure has a measurable action law"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-statistical-experiment
  - def-randomized-procedure-as-a-markov-kernel
  - def-measure-kernel-and-probability-kernel
  - def-measure
  - def-probability-measure
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-nonnegative-simple-measurable-function
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - thm-monotone-convergence-for-the-integral
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - def-nonnegative-extended-series
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.1, PDF pp. 100–102"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Peter Hoff, Statistical Decision Problems, §§2–4.2, PDF pp. 2–8"
      url: "https://www2.stat.duke.edu/~pdh10/Teaching/581/LectureNotes/intro.pdf"
---

## Statement

Let $K$ be a randomized procedure for the experiment
$\mathsf E=((\mathcal X,\mathcal A),\Theta,(P_\theta)_{\theta\in\Theta})$
with action space $(\mathsf D,\mathcal G)$. Give $[0,+\infty]$ its Borel
sigma-algebra. For every nonnegative $\mathcal G/\mathcal B([0,+\infty])$-
measurable function $g:\mathsf D\to[0,+\infty]$, the function
$$h_g(x)=\int_{\mathsf D}g(a)\,K(x,da)$$
is $\mathcal A$-measurable. In particular, $x\mapsto K(x,B)$ is measurable
for every action event $B\in\mathcal G$. For each $\theta\in\Theta$, the
set function
$$Q_\theta(B)=\int_{\mathcal X}K(x,B)\,P_\theta(dx),\qquad B\in\mathcal G,$$
is a probability measure on $(\mathsf D,\mathcal G)$, and for every such $g$,
$$\int_{\mathsf D}g\,dQ_\theta=\int_{\mathcal X}\left(\int_{\mathsf D}g(a)\,K(x,da)\right)P_\theta(dx).$$
with nonnegative extended values allowed.

## Facts & Assumptions

**Given:** The experiment and randomized procedure in the statement, and a nonnegative measurable function $g$ on the action space.

[F1] For each $\theta$, $P_\theta$ is a probability measure on $(\mathcal X,\mathcal A)$ ([[def-statistical-experiment]]).

[F2] For every $x$, $K(x,\cdot)$ is a probability measure, and for every $B\in\mathcal G$, $x\mapsto K(x,B)$ is measurable ([[def-measure-kernel-and-probability-kernel]]).

[F3] The expectation of a nonnegative measurable function under $P_\theta$ is its extended nonnegative integral ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]]).

[F4] A nonnegative simple measurable function has finite range and a finite sum representation using disjoint measurable sets ([[def-nonnegative-simple-measurable-function]]).

[F5] The simple integral of $\sum_j c_j1_{B_j}$ is $\sum_jc_j\mu(B_j)$ ([[def-integral-of-a-nonnegative-simple-function]]).

[F6] The nonnegative integral agrees with the simple integral on nonnegative simple functions ([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

[F7] The nonnegative integral is additive on finite sums of nonnegative measurable functions ([[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

[F8] The nonnegative integral is monotone and homogeneous under positive scalar multiplication; the zero function has integral zero. No product $0\cdot(+\infty)$ is formed ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F9] Nonnegative measurable functions admit increasing simple approximations ([[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]]).

[F10] Increasing pointwise limits pass through nonnegative integrals ([[thm-monotone-convergence-for-the-integral]]).

[F11] The nonnegative extended sum is the supremum of its finite partial sums ([[def-nonnegative-extended-series]]).

[F12] A measure is countably additive and assigns zero to the empty set; a probability measure also assigns mass one to the whole space ([[def-measure]], [[def-probability-measure]]).

[F13] Finite sums of nonnegative measurable functions are measurable. Nonnegative scalar multiples of real-valued measurable functions are measurable, and increasing pointwise limits of nonnegative measurable functions are measurable, including extended-valued limits ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\theta\in\Theta$. For each $B\in\mathcal G$, the function $x\mapsto K(x,B)$ is measurable and lies in $[0,1]$ by [F2]. Thus its integral is finite and at most $\int1\,dP_\theta=1$ by [F1], [F3], [F8], and [F12]. Since $K(x,\varnothing)=0$ and $K(x,\mathsf D)=1$, the simple-integral formula and agreement [F5, F6] give $Q_\theta(\varnothing)=0$ and $Q_\theta(\mathsf D)=P_\theta(\mathcal X)=1$. [F1, F2, F3, F5, F6, F8, F12]

1.2 By [F9], choose nonnegative simple functions $g_n\uparrow g$. Fix $n$ and write $g_n=\sum_{j=1}^m c_j1_{B_j}$ with finite $m$, $c_j\ge0$, and pairwise disjoint $B_j\in\mathcal G$, as in [F4]. The simple-integral formula and agreement [F5, F6] give $h_{g_n}(x)=\sum_{j=1}^m c_jK(x,B_j)$. Each summand is measurable by [F2], and finite sums and nonnegative scalar multiples are measurable by [F13]. For every $x$, monotone convergence under the probability measure $K(x,\cdot)$ gives $h_{g_n}(x)\uparrow h_g(x)$. Thus $h_g$ is measurable by the increasing-limit clause of [F13]. [F2, F4, F5, F6, F9, F10, F13]

2.1 If $(B_j)_{j\in\mathbb N}$ are pairwise disjoint members of $\mathcal G$, then for every $x$, $K(x,\bigcup_jB_j)=\lim_{N\to\infty}S_N(x)$, where $S_N(x)=\sum_{j=0}^NK(x,B_j)$, by countable additivity of $K(x,\cdot)$. Each $S_N$ is measurable by [F2] and finite-sum closure [F13], and $S_N$ increases. Monotone convergence [F10] and finite additivity of the nonnegative integral [F7] give $Q_\theta(\bigcup_jB_j)=\lim_N\sum_{j=0}^NQ_\theta(B_j)=\sum_jQ_\theta(B_j)$, where the last expression is the nonnegative extended sum [F11]. Together with step 1.1 and [F12], this proves that $Q_\theta$ is a probability measure. [F1, F2, F7, F10, F11, F12, F13, step 1.1]

3.1 For an indicator $g=1_B$, [F5] and [F6] give $h_g(x)=K(x,B)$ and $\int g\,dQ_\theta=Q_\theta(B)$, so the defining equation for $Q_\theta$ proves the iterated-integral identity. Finite addition [F7] and nonnegative homogeneity [F8] extend this equality from indicators to every nonnegative simple $g$. [given, F2, F3, F4, F5, F6, F7, F8, step 1.1, step 2.1]

4.1 The increasing simple sequence from step 1.2 satisfies $g_n\uparrow g$ and $h_{g_n}\uparrow h_g$. By step 1.2 all $h_{g_n}$ and $h_g$ are measurable; by step 2.1, $Q_\theta$ is a probability measure. Applying monotone convergence [F10] under $Q_\theta$ and under $P_\theta$ to the simple identities of step 3.1 proves the asserted equality, including when its value is $+\infty$. [F1, F3, F10, step 2.1, step 1.2, step 3.1] ∎
