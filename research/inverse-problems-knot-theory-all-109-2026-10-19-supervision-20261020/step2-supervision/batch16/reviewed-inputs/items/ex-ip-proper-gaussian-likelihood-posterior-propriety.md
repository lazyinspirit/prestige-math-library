---
id: ex-ip-proper-gaussian-likelihood-posterior-propriety
kind: example
title: A proper Gaussian likelihood gives a proper posterior
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-misfit-evidence-and-posterior-law
  - thm-ip-function-space-posterior-propriety
  - def-ip-forward-map-and-solution-classes
  - def-ip-prior-on-a-forward-domain
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-measurable-function-between-measurable-spaces
  - def-bayesian-model-as-prior-and-sampling-kernel
  - def-measure-kernel-and-probability-kernel
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-standard-normal-and-normal-laws
  - lem-normal-location-scale-density
  - def-natural-logarithm
  - thm-exponential-addition-formula
  - thm-of-square-roots
  - cor-exponential-reciprocal-and-positivity
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-finite-sigma-finite-and-semifinite-measures
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-bayes-formula-for-dominated-kernels
  - def-bayesian-posterior-as-regular-conditional-law
  - def-conditional-law-given-a-random-element
  - prop-fiberwise-posterior-propriety-iff-finite-positive-evidence
  - lem-of-square-positive
  - lem-of-abs-value
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "The Axiom of Choice is assumed for the repository's normal-law and location-scale density interfaces. It implies countable choice, needed for the stated Lebesgue sigma-finiteness interface. The general function-space propriety proof itself is choice-free."
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "M. Dashti and A. M. Stuart, The Bayesian Approach to Inverse Problems (full lecture notes, arXiv:1302.6989)"
      url: "https://arxiv.org/pdf/1302.6989"
      locator: "§3.2, Theorem 3.4 and proof; §4.1, Theorem 4.3 and proof."
    - title: "J. Latz, On the Well-posedness of Bayesian Inverse Problems, SIAM/ASA Journal on Uncertainty Quantification 8 (2020)"
      url: "https://arxiv.org/pdf/1902.10257"
      locator: "§2.2, Theorem 2.5 and Appendix B.2 proof."
---

## Example

Assume the Axiom of Choice. Let $X=\mathbb R$ with its usual real Banach norm, let $U=D=\{0,1\}$ with the Borel subspace structure, and let the forward map be $F(u)=u$. Give the parameter the Borel probability $\mu_0(A)=\tfrac12\mathbf1_{\{0\in A\}}+\tfrac12\mathbf1_{\{1\in A\}}$ for Borel $A\subseteq\mathbb R$. Let the data space be $\mathbb R$ with its usual metric and Borel sigma-algebra. Conditional on $u\in D$, let the observation have law $N(u,1)$, with Lebesgue density
$$
L(u;y)=\frac{1}{\sqrt{2\pi}}\exp\!\left(-\frac{(y-u)^2}{2}\right),
$$
and likelihood potential $\Phi(u;y)=\tfrac12(y-u)^2+\tfrac12\log(2\pi)$. For every $y\in\mathbb R$,
$$
Z(y)=\tfrac12L(0;y)+\tfrac12L(1;y)\in(0,\infty),
$$
and the normalized update on $A\subseteq D$ is
$$
\Pi^y(A)=\frac{L(0;y)\mathbf1_{\{0\in A\}}+L(1;y)\mathbf1_{\{1\in A\}}}{L(0;y)+L(1;y)}.
$$
This is a data-indexed posterior-kernel version for the prior-predictive model; its values on any measurable data-marginal-null set may be changed without changing the conditional-law identities.

## Example references

[[def-ip-misfit-evidence-and-posterior-law|The likelihood-potential evidence and its normalized fiberwise update.]]

[[thm-ip-function-space-posterior-propriety|A common lower envelope and continuity at a support point imply positive finite evidence.]]

[[def-ip-forward-map-and-solution-classes|A forward map is defined on an admissible truth set.]]

[[def-ip-prior-on-a-forward-domain|The prior is a Borel probability concentrated on the stated forward domain.]]

[[def-bayesian-model-as-prior-and-sampling-kernel|A proper Bayesian model consists of a probability prior and a probability sampling kernel.]]

[[lem-normal-location-scale-density|A normal law has its location-scale density for positive variance.]]

[[thm-bayes-formula-for-dominated-kernels|The dominated sampling density gives the prior-predictive density and a posterior conditional-kernel version.]]

[[def-conditional-law-given-a-random-element|Conditional-kernel values on a measurable data-marginal-null set may be changed.]]

[Dashti and Stuart, §3.2 and §4.1, full lecture notes](https://arxiv.org/pdf/1302.6989)

[Latz, §2.2 and Appendix B.2, full paper](https://arxiv.org/pdf/1902.10257)

## Facts & Assumptions

**Given:** AC; $X=\mathbb R$, $U=D=\{0,1\}$, the identity forward map, the stated two-atom prior, the observation law $N(u,1)$ and its displayed Lebesgue density, and its likelihood potential.

[A1] AC is the assertion that every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F1] Under AC, $N(m,\sigma^2)$ is the affine image of $N(0,1)$ and for $\sigma>0$ has Lebesgue density $\frac{1}{\sqrt{2\pi\sigma^2}}e^{-(y-m)^2/(2\sigma^2)}$. [[def-standard-normal-and-normal-laws]], [[lem-normal-location-scale-density]]

[F2] AC implies countable choice. [[thm-choice-implies-dependent-implies-countable-choice]]

[F3] Lebesgue measure on $\mathbb R$ is sigma-finite under countable choice. [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]

[F4] A proper Bayesian model has a probability prior and a parameter-measurable probability sampling kernel. [[def-bayesian-model-as-prior-and-sampling-kernel]]

[F5] For the displayed common lower envelope and continuity assumptions, the evidence is finite and strictly positive, and the normalized fiberwise update is a probability. [[thm-ip-function-space-posterior-propriety]]

[F6] For a proper prior and a jointly measurable sampling density over a sigma-finite dominating measure, the data marginal has density $m(y)$ and the filled normalized kernel is a conditional law. [[thm-bayes-formula-for-dominated-kernels]]

[F7] Replacing a data-indexed conditional kernel on a measurable data-marginal-null set preserves its conditional identities. [[def-conditional-law-given-a-random-element]]

[F8] A prior on a forward domain is a Borel probability on $X$ with full measure on $D$. [[def-ip-prior-on-a-forward-domain]]

[F9] An inverse-problem forward map has metric parameter and data spaces, a nonempty admissible truth set $U$, and a map $F:U\to Y$. [[def-ip-forward-map-and-solution-classes]]

[F10] A probability kernel has probability sections at every parameter and measurable evaluations. [[def-measure-kernel-and-probability-kernel]]

[F11] Every real square is nonnegative and $a\ge-|a|$ for every real $a$. [[lem-of-square-positive]], [[lem-of-abs-value]]

[F12] A nonnegative simple function has its simple integral, and that equals its nonnegative integral. [[def-integral-of-a-nonnegative-simple-function]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]

[F13] Joint measurability uses the product sigma-algebra, and measurability is defined by measurable preimages. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[def-measurable-function-between-measurable-spaces]]

[F14] At a fixed datum, evidence is the prior integral of the likelihood section and the normalized update is defined only at positive finite evidence. [[def-ip-misfit-evidence-and-posterior-law]]

[F15] The natural logarithm has domain $(0,\infty)$ and satisfies $\exp(\log a)=a$ for every $a>0$ ([[def-natural-logarithm]]).

[F16] For all real $s,t$, $\exp(s+t)=\exp(s)\exp(t)$ ([[thm-exponential-addition-formula]]).

[F17] In the complete ordered field $\mathbb R$, every nonnegative real has a unique nonnegative square root ([[thm-of-square-roots]]).

[F18] For every real $t$, $\exp(t)>0$ and $\exp(-t)=1/\exp(t)$ ([[cor-exponential-reciprocal-and-positivity]]).

## Verification

**Given:** The hypotheses and conventions in the Statement.

1.1 The set $D=U=\{0,1\}$ is Borel and nonempty. The function $\mu_0(A)=\tfrac12\mathbf1_{\{0\in A\}}+\tfrac12\mathbf1_{\{1\in A\}}$ is countably additive: in a disjoint sequence of Borel sets each of the two points occurs at most once, so the sum of assigned masses equals the mass of the union. Also $\mu_0(\mathbb R)=1$ and $\mu_0(D)=1$, making it a prior on the stated domain by [F8]. The identity $F:D\to\mathbb R$ is measurable because every subset of finite $D$ is Borel, and it satisfies the forward-map interface [F9]. [F8, F9, given, construct, algebra]

2.1 By [A1] and [F1], each $N(u,1)$ is a probability law with the displayed density; since $D$ is finite, every evaluation $u\mapsto N(u,1)(B)$ is measurable, so [F10] gives a probability kernel. By [F2] and [F3], Lebesgue measure is sigma-finite. The potential and likelihood are jointly Borel: for each of the two $u$ values their data sections are continuous, each singleton $\{u\}$ is Borel in $D$, and each preimage of a Borel set is a finite union of rectangles $\{u\}\times B_u$ in $\mathcal B(D)\otimes\mathcal B(\mathbb R)$ by [F13]. Thus [F4] gives a proper Bayesian model with the stated prior and sampling kernel. [A1, F1, F2, F3, F4, F8, F9, F10, F13, step 1.1, given, algebra]

3.1 The finite subspace $D=\{0,1\}$ is discrete: the open balls of radius $1/2$ about $0$ and $1$ isolate the two points, so every real-valued function on $D$ is continuous. For every $u\in D$ and $y\in\mathbb R$, $\Phi(u;y)$ is finite. By [F11], $(y-u)^2\ge0$ and $a\ge-|a|$ for $a:=\tfrac12\log(2\pi)$, so $\Phi(u;y)\ge -C$ where $C:=|a|\ge0$. The constant envelope $M_1(r)=C$ is Borel, and [F12] gives $\int_D e^{M_1(\|u\|)}\,\mu_0(du)=e^C\mu_0(D)=e^C<\infty$. Applying [F5] with $\mathsf Y_0=\mathbb R$ proves $0<Z(y)<\infty$ and propriety of the normalized update for every datum. [F5, F8, F11, F12, step 2.1, given, algebra]

3.2 For any $u\in D$ and $y\in\mathbb R$, put $a:=2\pi$; since $\log a$ occurs in the real-valued potential, [F15] gives $a>0$. Put $b:=\tfrac12(y-u)^2$ and $c:=\tfrac12\log a$. By [F15], $\exp(2c)=a$. By [F16], $\exp(c)^2=\exp(2c)=a$; by [F18], $\exp(c)>0$. Thus uniqueness of the nonnegative square root [F17] gives $\exp(c)=\sqrt{2\pi}$, and [F18] gives $\exp(-c)=1/\sqrt{2\pi}$. Applying [F16] again, $e^{-\Phi(u;y)}=\exp(-(b+c))=\exp(-b)\exp(-c)=\frac{1}{\sqrt{2\pi}}\exp\!\left(-\frac{(y-u)^2}{2}\right)=L(u;y)$. The last expression is the displayed Gaussian density, so the likelihood and potential agree pointwise. [F15, F16, F17, F18, given, algebra]

4.1 By [F14], integrate the likelihood section against the prior. Step 3.2 gives $L(u;y)=e^{-\Phi(u;y)}$ for both atoms, so this likelihood evidence equals $Z_\Phi(y)$, the evidence established finite and positive by step 3.1. The two atom masses are $1/2$, so $Z(y)=\tfrac12L(0;y)+\tfrac12L(1;y)$. Each density value is positive and at most $(2\pi)^{-1/2}$, so this displayed evidence is strictly positive and finite; integrating over any $A\subseteq D$ and dividing by it yields the stated posterior weights. [F1, F14, step 2.1, step 3.1, step 3.2, given, algebra]

5.1 Apply [F6] with parameter $u\in D$, prior $\mu_0$, dominating measure Lebesgue, and the jointly Borel density $L(u;y)$. Its evidence is exactly the $Z(y)$ computed in step 4.1, so the displayed $\Pi^y$ is a data-indexed posterior-kernel version. By [F7], changing its values on a data-marginal-null set leaves the conditional identities unchanged. [F4, F6, F7, step 2.1, step 4.1] ∎
