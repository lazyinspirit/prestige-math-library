---
id: thm-abc-zero-tolerance-target-is-summary-posterior-under-density-regularity
kind: theorem
title: ABC targets the density-defined summary posterior at zero tolerance
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-approximate-bayesian-computation
  - def-bayesian-posterior-as-regular-conditional-law
  - def-countable-choice
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-measure-kernel-and-probability-kernel
  - def-posterior-evidence-normalizer-and-fiberwise-update
  - def-probability-measure
  - def-total-variation-distance-for-probability-laws
  - prop-fiberwise-posterior-propriety-iff-finite-positive-evidence
  - thm-dominated-convergence
  - thm-sequential-criterion-for-function-limits
  - lem-metrics-on-rn
  - prop-measure-monotonicity
  - thm-borel-sets-are-lebesgue-measurable
  - thm-metric-open-set-algebra
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-measurability-of-integration-against-a-kernel
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is used in step 1.1 through Borel measurability and box-volume results to prove positive finite volume of the closed Euclidean tolerance ball. The density-limit and normalization arguments use no further choice."
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Jarno Lintusaari, Michael U. Gutmann, Ritabrata Dutta, Samuel Kaski, and Jukka Corander, Fundamentals and Recent Developments in Approximate Bayesian Computation"
      url: https://www.pure.ed.ac.uk/ws/files/27977065/Lintusaari2016b.pdf
    - title: "Paul Fearnhead and Dennis Prangle, Constructing Summary Statistics for Approximate Bayesian Computation: Semi-automatic ABC"
      url: https://arxiv.org/pdf/1004.1112
    - title: "Martin, Kumar, and Lao, Bayesian Modeling and Computation in Python, Chapter 8"
      url: https://bayesiancomputationbook.com/markdown/chp_08.html
---

## Statement

Assume the Axiom of Countable Choice. In the proper prior-simulator model of [[def-approximate-bayesian-computation]], let $d\ge1$, $s_0\in\mathbb R^d$, and suppose the summary-predictive measure has a specified jointly measurable density version
$$M(d\theta,ds)=m_\theta(s)\,\Pi(d\theta)\,\lambda_d(ds),$$
where $\lambda_d$ is Lebesgue measure on $\mathbb R^d$ ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]). Assume that $s\mapsto m_\theta(s)$ is continuous at $s_0$ for $\Pi$-almost every $\theta$, that a measurable $H:\Theta\to[0,\infty]$ satisfies
$$m_\theta(s)\le H(\theta)\quad\quad\text{for }\Pi\text{-almost every }\theta\text{ and every }\|s-s_0\|_2\le\epsilon_0$$
for some $\epsilon_0>0$ and $\int H\,d\Pi<\infty$, and that
$$0<z_0:=\int_\Theta m_\theta(s_0)\,\Pi(d\theta)<\infty.$$
Define the density-selected summary posterior
$$\Pi^m_{s_0}(A):=\frac{\int_A m_\theta(s_0)\,\Pi(d\theta)}{z_0}.$$
Then, for all sufficiently small $\epsilon>0$ for which the target is defined, the indicator ABC target $\Pi_\epsilon(\cdot\mid s_0)$ converges to $\Pi^m_{s_0}$ in total variation as $\epsilon\downarrow0$.

The pointwise density version is part of the statement. The conclusion is the density-selected summary update; it does not claim that every regular conditional distribution has that value at a null summary value.

## Facts & Assumptions

**Given:** A proper prior-simulator model, a measurable summary $S:\mathsf Y\to\mathbb R^d$, the Axiom of Countable Choice, and the density and regularity hypotheses in the Statement.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, is the assertion that every sequence of nonempty sets has a choice function. [[def-countable-choice]]

[A2] The function $m$ is a specified nonnegative jointly measurable density version of the summary-predictive law. For $\Pi$-almost every $\theta$, the summary simulator has density $m_\theta$ relative to $\lambda_d$.

[A3] For $\Pi$-almost every $\theta$, $m_\theta$ is continuous at $s_0$ and is bounded by the measurable integrable envelope $H$ throughout the radius-$\epsilon_0$ ball.

[A4] The prior-averaged density at $s_0$ is the finite positive number $z_0$ in the Statement.

[F1] The prior-simulator law and its summary-predictive pushforward define the probability measure $M$; the ABC target is its restriction to the tolerance event divided by that event's positive mass. [[def-approximate-bayesian-computation]]

[F2] $\lambda_d$ is Lebesgue measure on the Lebesgue-measurable subsets of $\mathbb R^d$. [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]

[F3] The Euclidean distance is a metric; its closed balls are closed and hence Borel. Under Countable Choice, Borel sets and boxes are Lebesgue measurable, boxes have their side-product volumes, and measure is monotone. [[lem-metrics-on-rn]], [[thm-metric-open-set-algebra]], [[thm-borel-sets-are-lebesgue-measurable]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[prop-measure-monotonicity]]

[F4] Integrating a nonnegative product-measurable function against a kernel gives a measurable function of the kernel input. [[thm-measurability-of-integration-against-a-kernel]]

[F5] Tonelli's theorem permits the two orders of integration for a nonnegative measurable function on sigma-finite product spaces. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F6] Almost-everywhere convergence under a single integrable majorant implies convergence in $L^1$. [[thm-dominated-convergence]]

[F7] For probability measures, total variation is $\sup_A|\mu(A)-\nu(A)|$, without a factor of $1/2$. [[def-total-variation-distance-for-probability-laws]]

[F8] A nonnegative measurable likelihood update is a probability exactly when its evidence is finite and positive. [[def-posterior-evidence-normalizer-and-fiberwise-update]], [[prop-fiberwise-posterior-propriety-iff-finite-positive-evidence]]

[F9] A data-indexed posterior RCD has no pointwise prescribed value on a marginal-null set. [[def-bayesian-posterior-as-regular-conditional-law]]

[F10] A real-parameter limit holds if it holds along every sequence of positive tolerances tending to zero. [[thm-sequential-criterion-for-function-limits]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Fix $0<\epsilon<\epsilon_0$. The Euclidean distance is a metric by [F3], so its closed ball $B_\epsilon(s_0)$ is closed and therefore Borel. Under [A1], [F3] makes it Lebesgue measurable. It contains the open cube of side $2\epsilon/\sqrt d$ centered at $s_0$ and is contained in the closed cube of side $2\epsilon$ centered there: the first inclusion follows from $\|x-s_0\|_2^2<d(\epsilon/\sqrt d)^2=\epsilon^2$, and the second from $|x_i-s_{0,i}|\le\epsilon$. The box-volume formula and monotonicity in [F3] give $0<(2\epsilon/\sqrt d)^d\le v_\epsilon:=\lambda_d(B_\epsilon(s_0))\le(2\epsilon)^d<\infty.$ [given, A1, F2, F3, algebra]

2.1 Define $q_\epsilon(\theta):=\frac{1}{v_\epsilon}\int_{B_\epsilon(s_0)}m_\theta(s)\,\lambda_d(ds).$ By [A2], [F2], and [F4], $q_\epsilon$ is measurable. The density identity and [F5] give, for every measurable $A\subseteq\Theta$, $M(A\times B_\epsilon(s_0))=v_\epsilon\int_A q_\epsilon(\theta)\,\Pi(d\theta).$ Thus, whenever $z_\epsilon:=\int q_\epsilon\,d\Pi>0$, the ABC target has density $q_\epsilon/z_\epsilon$ relative to $\Pi$. The envelope bounds $q_\epsilon\le H$, so $z_\epsilon<\infty$. [given, A2, A3, F1, F2, F4, F5, step 1.1]

3.1 Take an arbitrary sequence $\epsilon_j>0$ with $\epsilon_j\to0$. Fix any $\theta$ in the full-measure set where $m_\theta$ is continuous at $s_0$ and bounded by $H(\theta)$. Given $\eta>0$, continuity supplies $\delta>0$ such that $|m_\theta(s)-m_\theta(s_0)|<\eta$ whenever $\|s-s_0\|_2<\delta$. For all large $j$, $\epsilon_j<\delta$, and averaging over $B_{\epsilon_j}(s_0)$ gives $|q_{\epsilon_j}(\theta)-m_\theta(s_0)|\le\eta$. Thus pointwise convergence holds for $\Pi$-almost every $\theta$. Also $|q_{\epsilon_j}-m_\theta(s_0)|\le2H$ and $\int H\,d\Pi<\infty$, so [F6] yields $\int_\Theta|q_{\epsilon_j}(\theta)-m_\theta(s_0)|\,\Pi(d\theta)\longrightarrow0.$ Since the sequence was arbitrary, [F10] gives this $L^1$ limit as $\epsilon\downarrow0$. In particular $z_\epsilon\to z_0>0$, and therefore $z_\epsilon>0$ for every sufficiently small positive $\epsilon$. [given, A3, A4, F6, F10, step 2.1]

4.1 For such $\epsilon$, the normalized densities satisfy $\int_\Theta\left|\frac{q_\epsilon}{z_\epsilon}-\frac{m_\theta(s_0)}{z_0}\right|d\Pi \le \frac{1}{z_\epsilon}\int_\Theta|q_\epsilon-m_\theta(s_0)|d\Pi +\frac{|z_\epsilon-z_0|}{z_\epsilon}.$ The right side tends to zero by step 3.1. The second density integrates to one by [F8] and $0<z_0<\infty$; the first is the ABC target density by step 2.1. [given, A4, F1, F8, step 2.1, step 3.1, algebra]

5.1 For every measurable $A\subseteq\Theta$, the absolute difference between the two probabilities of $A$ is at most the $L^1(\Pi)$ difference in step 4.1. Taking the supremum over $A$ and using [F7] proves $\|\Pi_\epsilon(\cdot\mid s_0)-\Pi^m_{s_0}\|_{\mathrm{TV}}\to0$. The limit is the density-selected update; by [F9], no claim is made that every RCD version takes that value at a marginal-null $s_0$. [given, F7, F9, step 4.1] ∎

## Remarks

For an atomless summary, the event $S(Y)=s_0$ can have prior-predictive probability zero. In that case conditional-law identities do not choose a unique posterior value at $s_0$; the specified density version above selects one. The envelope is a substantive hypothesis: without an integrable local bound, moving density spikes can prevent total-variation convergence, as shown by [[cex-abc-zero-tolerance-limit-fails-without-integrable-envelope]].
