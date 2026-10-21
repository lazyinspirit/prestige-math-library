---
id: cex-ip-point-mass-prior-excludes-truth-no-contraction
kind: counterexample
title: "A point-mass Gaussian prior excluding the truth prevents contraction"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-ip-gaussian-sequence-inverse-model
  - def-ip-posterior-contraction-rate
  - thm-ip-conjugate-gaussian-sequence-contraction
  - def-axiom-of-choice
  - def-countable-choice
  - def-standard-normal-and-normal-laws
  - thm-nondegenerate-multivariate-normal-law-has-density
  - lem-finite-measure-uniqueness-on-a-pi-system
  - cor-exponential-reciprocal-and-positivity
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: "AC and Countable Choice are stated for consistency with the sequence model and the theorem whose scope is contrasted. The point-mass posterior identity and one-coordinate likelihood-ratio calculation use no additional choice principle."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
sources:
  references:
    - title: "B. T. Knapik, A. W. van der Vaart, and J. H. van Zanten, Bayesian inverse problems with Gaussian priors, The Annals of Statistics 39 (2011), 2626–2657"
      url: "https://arxiv.org/pdf/1103.2692"
      locator: "§3, Proposition 3.1, and §4, Theorem 4.1, for the positive trace-class Gaussian prior and truth-smoothness assumptions; the point-mass support boundary is proved locally."
---

## Statement refuted

Assume AC and Countable Choice. In every positive-noise Gaussian sequence inverse experiment, every proper centered Gaussian prior on $\ell^2$ yields posterior contraction at some rate $r_\epsilon\to0$ about every truth $\theta^\dagger\in\ell^2$, including truths for which the prior gives zero mass to every ball of radius less than $1$ centered at $\theta^\dagger$.

## Statement references

[[thm-ip-conjugate-gaussian-sequence-contraction|The conjugate contraction theorem assumes strictly positive coordinate variances with finite total prior variance.]]

[Knapik, van der Vaart, and van Zanten, *Bayesian inverse problems with Gaussian priors*, §§3–4](https://arxiv.org/pdf/1103.2692)

## Facts & Assumptions

**Given:** AC and Countable Choice; the positive-noise sequence inverse experiment; its standard basis vector $e_1=(1,0,0,\ldots)$; and the posterior contraction definition.

[A1] AC and Countable Choice are assumed by the Gaussian sequence model and its product-law theorem. [[def-axiom-of-choice]], [[def-countable-choice]]

[F1] The data coordinates are $Y_j=s_j\theta_j+\epsilon\xi_j$ with positive $s_j$ and independent standard-normal noise. [[def-ip-gaussian-sequence-inverse-model]]

[F2] The conjugate contraction theorem assumes $\tau_j>0$ and $\sum_j\tau_j^2<\infty$; its conclusion is not stated for every Gaussian prior without those hypotheses. [[thm-ip-conjugate-gaussian-sequence-contraction]]

[F3] The law $N(0,0)$ is the point mass $\delta_0$. [[def-standard-normal-and-normal-laws]]

[F4] A nondegenerate finite-dimensional Gaussian with covariance $\epsilon^2 I$ has density proportional to $\exp(-\|y-m\|_2^2/(2\epsilon^2))$. [[thm-nondegenerate-multivariate-normal-law-has-density]]

[F5] Finite measures agreeing on a generating cylinder $\pi$-system and on the whole space agree on the generated product Borel sigma-algebra. [[lem-finite-measure-uniqueness-on-a-pi-system]]

[F6] The real exponential is strictly positive. [[cor-exponential-reciprocal-and-positivity]]

[F7] The posterior contraction condition requires the expected posterior mass outside every diverging multiple of a rate to tend to zero under the fixed-truth data law. [[def-ip-posterior-contraction-rate]]

## Counterexample

**Given:** Let the prior be $\Pi_0=\delta_0$ on $\ell^2$, let the truth be $\theta^\dagger=e_1$, and let $s_1>0$ and $\epsilon>0$.

1.1 The prior $\delta_0=N(0,0)$ is a proper centered Gaussian law. Under its prior-predictive joint law, $\theta=0$ almost surely, so for every Borel $A\subseteq\ell^2$ and product-Borel $B\subseteq\mathbb R^{\mathbb N}$, $\mathbb P(\theta\in A,Y\in B)=\mathbf 1_A(0)\mathbb P_0^\epsilon(Y\in B)=\int_B\delta_0(A)\,\mathbb P_0^\epsilon(dy)$. Thus the constant kernel $y\mapsto\delta_0$ is a posterior version. The prior assigns zero mass to every ball centered at $e_1$ of radius less than $1$. [A1, F1, F3, given, construct]

2.1 Under the fixed truth $e_1$, only the first data coordinate shifts. Relative to the prior-predictive data law, the one-coordinate normal density ratio is $L(y)=\exp\!\left(\frac{s_1y_1}{\epsilon^2}-\frac{s_1^2}{2\epsilon^2}\right)$, and it integrates to $1$ under the prior-predictive first-coordinate law. It is positive and finite for every $y$ by [F4]–[F6]. All remaining coordinates have identical independent laws. The two full product-Borel data laws therefore agree as finite measures on the generating cylinder $\pi$-system after weighting by $L$; [F5] extends the identity to all data events. Since $L>0$, the laws are equivalent, so the posterior version $\delta_0$ remains the same almost surely under the truth law. [A1, F1, F4, F5, F6, given, step 1.1, algebra]

3.1 For any candidate rate $r_\epsilon\to0$, take $M_\epsilon=r_\epsilon^{-1/2}$ for sufficiently small $\epsilon$. Then $M_\epsilon\to\infty$ and $M_\epsilon r_\epsilon=\sqrt{r_\epsilon}<1$ eventually. The posterior is concentrated at $0$, whose distance from $e_1$ is $1$, so its mass outside the radius-$M_\epsilon r_\epsilon$ ball is exactly $1$ under the truth law. This violates [F7] and refutes the Statement. The example lies outside the positive-coordinate-variance hypotheses in [F2]. [F2, F7, given, step 1.1, step 2.1, algebra] ∎
