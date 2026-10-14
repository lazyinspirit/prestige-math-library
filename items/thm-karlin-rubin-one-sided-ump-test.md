---
id: thm-karlin-rubin-one-sided-ump-test
kind: theorem
title: The Karlin–Rubin theorem for one-sided tests
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps: [def-monotone-likelihood-ratio-family,
       lem-randomized-threshold-has-exact-level,
       lem-mlr-orders-randomized-thresholds,
       def-randomized-test, def-measure-kernel-and-probability-kernel,
       def-test-size-and-power,
       def-likelihood-density, def-measure-with-density,
       thm-integration-against-a-density,
       def-integrable-real-and-complex-functions-and-their-integrals,
       prop-order-and-scalar-rules-for-the-nonnegative-integral,
       thm-linearity-of-the-lebesgue-integral-on-l-one,
       thm-arithmetic-and-lattice-operations-preserve-measurability,
       def-axiom-of-choice]
justified_by: []
proof_strategy: direct
axiom_use: AC is inherited through the likelihood-density versions in the MLR definition; the threshold calibration and pairwise comparison add no choice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: George Deligiannidis, Foundations of Statistical Inference, Theorem 13.5 and proof, PDF pp. 77–78
      url: https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf
    - title: Jun Shao, Stat 610 Mathematical Statistics, Lecture 11, Theorem 8.3.17 and proof, PDF pp. 8–10
      url: https://pages.stat.wisc.edu/~shao/stat610/stat610-11.pdf
    - title: Karl B. Gregory, STAT 713 Lecture 11, Karlin–Rubin theorem and examples, annotated PDF pp. 13–22
      url: https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_11_slides_annotated.pdf
---

## Statement

Assume AC. Let $\mathcal E=((\mathcal X,\mathcal A),\Theta,(P_\theta))$ have
MLR in a real statistic $T$, let $\theta_0\in\Theta$, and let
$0<\alpha<1$. A randomized test is a binary-action probability kernel as in
[[def-randomized-test]]; write $\psi(x)=K(x,\{1\})$ for its measurable
rejection function. For nonempty, disjoint null and alternative sets,
power, size, and level have the conventions in
[[def-test-size-and-power]]: $\beta_\psi(\theta)=E_\theta\psi$,
size $\sup_{\theta\in\Theta_0}\beta_\psi(\theta)$, and level $\alpha$ when
the size is at most $\alpha$. Here a level-$\alpha$ test is **uniformly most
powerful (UMP)** when it has at least as large a power as every other
level-$\alpha$ test at every parameter in the alternative set; if an
alternative set is empty, define level by the same null-supremum formula and
the pointwise UMP comparison is vacuous.

Choose $c_+,\gamma_+$ and $c_-,\gamma_-$ such that
$$P_{\theta_0}(T>c_+)+\gamma_+P_{\theta_0}(T=c_+)=\alpha,\qquad P_{\theta_0}(T<c_-)+\gamma_-P_{\theta_0}(T=c_-)=\alpha.$$
Such choices exist by [[lem-randomized-threshold-has-exact-level]]. Then
$$\phi_+=\mathbf1_{\{T>c_+\}}+\gamma_+\mathbf1_{\{T=c_+\}}$$
defines a UMP randomized test of level $\alpha$ for
$H_0:\theta\le\theta_0$ against
$H_1:\theta>\theta_0$, and
$$\phi_-=\mathbf1_{\{T<c_-\}}+\gamma_-\mathbf1_{\{T=c_-\}}$$
defines a UMP randomized test of level $\alpha$ for
$H_0:\theta\ge\theta_0$ against
$H_1:\theta<\theta_0$. All hypotheses are intersected with $\Theta$.

## Facts & Assumptions

**Given:** AC, a dominated experiment with $\Theta\subseteq\mathbb R$ and MLR in $T$, $\theta_0\in\Theta$, and $0<\alpha<1$.

[F1] For every $\theta_1<\theta_2$, there is a nondecreasing Borel function $q:\mathbb R\to[0,+\infty]$ such that $q(T)$ equals the extended likelihood ratio $p_{\theta_2}/p_{\theta_1}$ $\mu$-almost everywhere on the union of the density supports, with ratio $+\infty$ where $p_{\theta_1}=0<p_{\theta_2}$. The exceptional null set may depend on the parameter pair. ([[def-monotone-likelihood-ratio-family]])

[F2] For a real-valued statistic under any probability law and $0<\alpha<1$, an upper or lower threshold with boundary randomization can be chosen to have rejection probability exactly $\alpha$. ([[lem-randomized-threshold-has-exact-level]])

[F3] Under MLR, the rejection probability of an upper randomized threshold is nondecreasing in $\theta$, while that of a lower randomized threshold is nonincreasing. ([[lem-mlr-orders-randomized-thresholds]])

[F4] A randomized test has a measurable rejection-probability function $\psi:\mathcal X\to[0,1]$. ([[def-randomized-test]])

[F5] A density $p_\theta$ defines the measure $p_\theta\,d\mu=P_\theta$, and for nonnegative measurable $g$ one has $E_\theta g=\int g p_\theta\,d\mu$. ([[def-likelihood-density]], [[def-measure-with-density]], [[thm-integration-against-a-density]])

[F6] Integrability is $\int|f|<\infty$, the nonnegative integral is monotone, and the Lebesgue integral is linear on $L^1$. ([[def-integrable-real-and-complex-functions-and-their-integrals]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[F7] For each parameter the chosen likelihood density is a finite-valued nonnegative representative of its Radon–Nikodym class. ([[def-likelihood-density]])

[F8] For nonempty disjoint null and alternative sets, the power is $E_\theta\psi$, size is the supremum of power on the null, and level $\alpha$ means size at most $\alpha$. ([[def-test-size-and-power]])

[F9] Sums, scalar multiples, and products of measurable extended-real functions are measurable whenever the pointwise operations are defined. ([[thm-arithmetic-and-lattice-operations-preserve-measurability]])

[F10] A probability kernel assigns a probability measure to each $x$ and has a measurable event-evaluation function $x\mapsto K(x,B)$ for each action event $B$. ([[def-measure-kernel-and-probability-kernel]])

[A1] AC permits the simultaneous choice of likelihood-density representatives in [[def-likelihood-density]], as required by the MLR definition ([[def-axiom-of-choice]]).

## Proof

1.1 By [F2], choose $c_+,\gamma_+$ and $c_-,\gamma_-$ so both threshold functions have expectation $\alpha$ under $P_{\theta_0}$. Since $T$ is measurable, their threshold events and functions $\phi_+,\phi_-$ are measurable; disjointness of each pair of threshold events and $\gamma_\pm\in[0,1]$ give $0\le\phi_\pm\le1$. For each sign, define $K_\pm(x,B)=\phi_\pm(x)\mathbf1_{\{1\in B\}}+(1-\phi_\pm(x))\mathbf1_{\{0\in B\}}$ for $B\subseteq\{0,1\}$. The two weights are nonnegative and sum to one, and the formula is countably additive because each point belongs to at most one event in a disjoint sequence; thus $K_\pm(x,\cdot)$ is a probability measure. Each event evaluation is one of $0,1,\phi_\pm,1-\phi_\pm$, hence measurable by [F9]. Thus [F10] gives probability kernels, which are randomized tests by [F4], with the stated functions. Select the finite-valued density representatives used below as in [F7] and [A1]. [given, F2, F4, F7, F9, F10, A1, choose, construct]

2.1 By [F3], $E_\theta\phi_+\le E_{\theta_0}\phi_+=\alpha$ for $\theta\le\theta_0$, and $E_\theta\phi_-\le E_{\theta_0}\phi_-=\alpha$ for $\theta\ge\theta_0$. Each null contains $\theta_0$, so its supremum size is at most $\alpha$; by [F8] and the empty-alternative convention in the statement, both candidates have level $\alpha$ for their stated nulls. [step 1.1, F3, F8, algebra]

2.2 Fix $\theta_1>\theta_0$ with densities $p_0,p_1$, let $q$ be their Borel MLR function, and let $N$ be its pairwise $\mu$-null exceptional set from [F1]. By [F5], $P_{\theta_0}(N)=0$ and $P_{\theta_0}(p_0>0)=1$. Put $k=q(c_+)$. The value $k$ is finite: if $P_{\theta_0}(T=c_+)>0$, there is a point of this boundary outside $N$ with $p_0>0$ and finite $p_1$; otherwise $P_{\theta_0}(T>c_+)=\alpha>0$ gives such a point above the threshold and monotonicity forces $q(c_+)<\infty$. On $\{p_0>0\}\setminus N$, $p_1-kp_0=p_0(q(T)-k)$ is nonnegative above $c_+$, nonpositive below it, and zero at $T=c_+$. On $\{p_0=0<p_1\}\setminus N$, $q(T)=+\infty$; finite $k$ and monotonicity force $T>c_+$, where $\phi_+=1$. Where both densities vanish, $p_1-kp_0=0$. By [F9], the products and differences are measurable, so every competing test $\psi$ satisfies $(\phi_+-\psi)(p_1-kp_0)\ge0$ $\mu$-almost everywhere. [given, F1, F5, F7, F9, step 1.1]

3.1 The measurable product in step 2.2 is integrable because $|\phi_+-\psi|\le1$ and $p_0,p_1$ each integrate to one. Apply [F5] to the positive and negative parts of $\phi_+-\psi$; linearity [F6] then gives $E_{\theta_1}(\phi_+-\psi)-kE_{\theta_0}(\phi_+-\psi)=\int(\phi_+-\psi)(p_1-kp_0)\,d\mu\ge0$. For a level-$\alpha$ competitor, [F8] and step 1.1 give $E_{\theta_0}\psi\le\alpha=E_{\theta_0}\phi_+$, while $k\ge0$; thus $E_{\theta_1}\phi_+\ge E_{\theta_1}\psi$. Since $\theta_1>\theta_0$ was arbitrary, $\phi_+$ is UMP for the upper alternative. [step 1.1, step 2.1, step 2.2, F5, F6, F8, F9, algebra]

4.1 Reparameterize by $\eta=-\theta$ and put $S=-T$. For $\eta_1<\eta_2$, let $q$ represent $p_{-\eta_1}/p_{-\eta_2}$ as in [F1]. Define $h(u)=1/u$ for $0<u<+\infty$, $h(0)=+\infty$, and $h(+\infty)=0$. The function $s\mapsto h(q(-s))$ is Borel and nondecreasing, since reflection and $h$ both reverse order. Outside the original pairwise exceptional set on the union of supports, it represents $p_{-\eta_2}/p_{-\eta_1}$, including points where either density is zero; where both vanish no ratio is required. Thus the reflected family has MLR in $S$. Apply the upper-tail result of steps 1.1–3.1 at $\eta_0=-\theta_0$ with cutoff $-c_-$ and boundary probability $\gamma_-$, calibrated by step 1.1. The resulting UMP test is exactly $\phi_-$ for the original lower alternative. [F1, step 1.1, step 3.1, construct, algebra] ∎
