---
id: thm-steinhaus-difference-set-contains-a-ball
kind: theorem
title: "If a Lebesgue measurable subset of $\\mathbb{R}^n$ has positive measure, its difference set contains an open ball about the origin"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-a-set-of-positive-finite-measure-fills-most-of-a-dyadic-cube, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-lebesgue-measure-of-a-box-of-every-kind, thm-lebesgue-measure-is-a-complete-measure, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, thm-continuity-from-below-for-measures, prop-measure-monotonicity, def-measure, def-metric-ball, lem-metrics-on-rn, def-dyadic-cube-in-rn, lem-dyadic-cubes-of-one-generation-partition-rn, def-half-open-box, def-rational-power, lem-rational-power-well-defined, thm-nth-roots-exist, lem-power-monotone, lem-power-laws, def-integer-power, def-translation-of-a-set-in-rn, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-countable-choice]
justified_by: []
aliases: []
landmark: true
short: "Steinhaus theorem"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Exercise 1.6.8"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "J. Ye, L. Yu, X. Zhao, When is $A+xA=\\mathbb{R}$?, Theorem 1.1"
      url: "https://arxiv.org/pdf/2505.00556"
pipeline_run: null
---

## Statement

Let $n \ge 1$ and **assume the Axiom of Countable Choice**
([[def-countable-choice]]). Let $E \subseteq \mathbb{R}^n$ be Lebesgue
measurable with $\lambda_n(E) > 0$, and put

$$E - E \;:=\; \{\, x - y \;:\; x, y \in E \,\}.$$

Then there is a real $r > 0$ with $B(0,r) \subseteq E-E$, the open Euclidean
ball of centre the origin and radius $r$ ([[def-metric-ball]],
[[lem-metrics-on-rn]]).

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the Axiom of Countable Choice, and a Lebesgue measurable set $E \subseteq \mathbb{R}^n$ with $\lambda_n(E)>0$.

[L1] Assuming countable choice, a Lebesgue measurable $F$ with $0<\lambda_n(F)<+\infty$ and a real $\theta$ with $0<\theta<1$ admit a dyadic cube $Q$ with $\lambda_n(F\cap Q) > \theta\,\lambda_n(Q)$ ([[lem-a-set-of-positive-finite-measure-fills-most-of-a-dyadic-cube]], [[def-dyadic-cube-in-rn]]).

[L2] $\lambda_n(S+h)=\lambda_n(S)$ for every Lebesgue measurable $S$ and every $h$, and $S+h$ is measurable exactly when $S$ is ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[def-translation-of-a-set-in-rn]]).

[L3] Every set $R$ with $R^{\circ} \subseteq R \subseteq \overline{R}$ is Lebesgue measurable with $\lambda_n(R) = \prod_{i<n}(b_i-a_i)$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]), and $\operatorname{vol}(Q_{k,m}) = 2^{-kn}$ ([[lem-dyadic-cubes-of-one-generation-partition-rn]], [[def-half-open-box]]).

[L4] Assuming countable choice, $\lambda_n$ is a complete measure on $\mathcal{L}(\mathbb{R}^n)$, a sigma-algebra ([[thm-lebesgue-measure-is-a-complete-measure]]), and every bounded Lebesgue measurable set has finite measure ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F1] Let $(E_k)_{k\in\mathbb N}$ be an increasing sequence of measurable sets for a measure $\mu$; then $\mu\left(\bigcup_{k\in\mathbb N}E_k\right)=\sup_{k\in\mathbb N}\mu(E_k)$ ([[thm-continuity-from-below-for-measures]]).

[F2] A **measure** is countably additive on pairwise disjoint measurable sequences, hence finitely additive ([[def-measure]]), and monotone ([[prop-measure-monotonicity]]).

[F3] For $a>0$ and rational $r=m/q$ with $q \ge 1$, $a^{r} := (a^{1/q})^{m}$, where $a^{1/q}$ is the unique nonnegative $q$-th root of $a$ ([[def-rational-power]], [[thm-nth-roots-exist]]), and the value does not depend on the representative ([[lem-rational-power-well-defined]]).

[F4] If $0 \le a < b$ and $n \ge 1$ then $a^n < b^n$; if $0 \le a \le 1$ then $a^n \le 1$ ([[lem-power-monotone]], claims 2 and 3; [[def-integer-power]]), and $(ab)^n = a^nb^n$ ([[lem-power-laws]], claim 1).

[F5] For every $x \in \mathbb{R}^{n}$, $\lVert x\rVert_\infty \le \lVert x\rVert_2$, and $\lVert x-y\rVert_2 = d_2(x,y)$, $\lVert x-y\rVert_\infty = d_\infty(x,y) = \max\{|x_k-y_k|:k<n\}$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], claim 3; [[lem-p-norms-are-norms-and-induce-the-published-metrics]], claim 3; [[def-p-norms-on-rn]]; [[lem-metrics-on-rn]]).

## Proof

**Proof technique:** direct.

1.1 The sets $E \cap (-k,k]^n$ for $k \in \mathbb{N}$ are Lebesgue measurable, increase with $k$ and have union $E$, so continuity from below gives $\sup_k\lambda_n\big(E\cap(-k,k]^n\big) = \lambda_n(E) > 0$ and some $k$ has $\lambda_n\big(E\cap(-k,k]^n\big) > 0$; that set is bounded, hence of finite measure. Replacing $E$ by it shrinks $E-E$, so it suffices to prove the theorem when $0<\lambda_n(E)<+\infty$. [L3, L4, F1]

1.2 Put $t := (3/2)^{1/n}$, the unique nonnegative $n$-th root of $3/2$; then $t > 1$, since $t \le 1$ would give $t^{\,n} \le 1 < 3/2$, and $\eta := (t-1)/2$ is a strictly positive real with $1+2\eta = t$ and $(1+2\eta)^n = 3/2$. [F3, F4]

2.1 Assume $0<\lambda_n(E)<+\infty$ and apply the density lemma with $\theta := 3/4$: there is a dyadic cube $Q$, of some generation $k$ and side $s := 2^{-k}$, with $\lambda_n(E\cap Q) > \tfrac34 s^{\,n}$, since $\lambda_n(Q) = s^{\,n}$. [step 1.1, L1, L3]

3.1 Let $h \in \mathbb{R}^n$ with $d_2(0,h) < \eta s$, so that $|h_i| < \eta s$ in every coordinate. Writing $Q = B(a,b)$ with $b_i-a_i = s$, both $E\cap Q$ and $(E\cap Q)+h$ are contained in the half-open box $P$ with parameter pairs $(a_i - \eta s,\ b_i + \eta s]$, whose measure is $\big(s(1+2\eta)\big)^n = s^{\,n}t^{\,n} = \tfrac32 s^{\,n}$. [step 1.2, step 2.1, L2, L3, F4, F5]

4.1 The two sets are Lebesgue measurable with the same measure, by translation invariance, so if they were disjoint then additivity and monotonicity inside $P$ would give $\tfrac32 s^{\,n} = \lambda_n(P) \ge 2\lambda_n(E\cap Q) > 2\cdot\tfrac34 s^{\,n} = \tfrac32 s^{\,n}$, which is impossible; hence they meet, and a common point $z = w+h$ with $z,w \in E\cap Q$ exhibits $h = z-w \in E-E$. [step 2.1, step 3.1, L2, L4, F2]

5.1 Therefore $B(0,\eta s) \subseteq E-E$, and $r := \eta s$ is a strictly positive real. [step 1.2, step 4.1, F5] ∎
