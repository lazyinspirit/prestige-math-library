---
id: cex-local-hessian-does-not-capture-multiple-modes
kind: counterexample
title: "A full-rank local Hessian does not capture both posterior modes"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-countable-choice
  - def-dominated-statistical-experiment
  - def-estimand-on-a-statistical-model
  - def-exact-inferential-target-and-approximation-chain
  - def-identifiability-of-an-estimand
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-measurable-function-between-measurable-spaces
  - def-nonnegative-lebesgue-integral
  - def-observational-equivalence
  - def-parametric-statistical-model
  - def-probability-measure
  - def-statistical-experiment
  - def-total-variation-distance-for-probability-laws
  - lem-of-abs-value
  - lem-of-square-monotone
  - lem-positive-definite-gaussian-integral
  - thm-borel-sets-are-lebesgue-measurable
  - thm-borel-sigma-algebra-of-a-subspace-is-the-trace
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - cor-cauchy-reals-lub-complete
  - thm-continuity-from-below-for-measures
  - thm-laplace-approximation-under-unique-interior-maximum
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-of-archimedean
  - thm-of-square-roots
  - thm-reals-ordered-field
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is used through the positive-definite Gaussian integral, Lebesgue change-of-variables, Borel-to-Lebesgue measurability, and box-measure suppliers. No full Axiom of Choice is used."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
sources:
  references:
    - title: "Laplace method for integrals, PHYS 2400 – Mathematical methods for the physical sciences, University of Connecticut"
      url: "https://www.phys.uconn.edu/~rozman/Courses/P2400_23S/downloads/laplace-method-integrals.pdf"
      locator: "Complete 7-page note, Gaussian mode approximation and discussion of the Hessian-based local formula."
    - title: "NIST Digital Library of Mathematical Functions, §2.3(iii), Laplace's Method"
      url: "https://dlmf.nist.gov/2.3"
      locator: "Conditions and formulas (2.3.13)–(2.3.18); asymptotic context only, not a proof of this counterexample."
    - title: "Francis Bach, Approximating Integrals with Laplace's Method"
      url: "https://francisbach.com/laplace-method/"
      locator: "Opening multidimensional formula and Hessian/Jacobian calculation; the local example supplies its own posterior comparison."
---

## Statement refuted

A nondegenerate local Hessian at one mode does not by itself ensure that a one-mode Laplace Gaussian approximates the full posterior law in total variation, even when the full-data model identifies the parameter.

## Facts & Assumptions

**Given:** Assume Countable Choice. Let $\Theta=[-2,2]$ with its Borel sigma-algebra, let $n\ge1$ be an integer, and set
$$h(\theta)=-(\theta^2-1)^2.$$
Give the data space $\mathcal X=\{0,1,2\}$ its power-set sigma-algebra and counting measure, and define the $n$th experiment by
$$p_{n,\theta}(0)=\tfrac12e^{nh(\theta)},\qquad p_{n,\theta}(1)=\tfrac14+\tfrac{\theta}{32},\qquad p_{n,\theta}(2)=1-p_{n,\theta}(0)-p_{n,\theta}(1).$$
Use the uniform prior $\Pi_0(A)=\lambda(A\cap\Theta)/4$ on Borel $A$, observe $x=0$, and use the likelihood version $\ell_0(\theta)=p_\theta(0)$. Let $\Pi_n$ be the exact target and let $\overline\Pi_n$ be its image on $\mathbb R$ under the inclusion $\Theta\hookrightarrow\mathbb R$. Define the one-mode Laplace proxy $Q_n$ on $\mathbb R$ by the density
$$q_n(t)=\sqrt{4n/\pi}\,e^{-4n(t-1)^2}.$$

[A1] Countable Choice means every countable family of nonempty sets has a choice function. [[def-countable-choice]]

[F1] A fixed measurable likelihood version and finite positive evidence define $\Pi_x(A)=Z_x^{-1}\int_A\ell_x\,d\Pi_0$; the likelihood version here is the density relative to the stated counting measure. [[def-exact-inferential-target-and-approximation-chain]] [[def-dominated-statistical-experiment]] [[def-measurable-function-between-measurable-spaces]]

[F2] In the parametric model, observational equivalence means equality of sampling laws, and the identity estimand is identifiable when equivalent parameters agree. [[def-statistical-experiment]] [[def-parametric-statistical-model]] [[def-observational-equivalence]] [[def-estimand-on-a-statistical-model]] [[def-identifiability-of-an-estimand]]

[F3] The cited Laplace asymptotic theorem assumes a unique interior global maximizer in addition to a positive-definite negative Hessian and local and global domination conditions. [[thm-laplace-approximation-under-unique-interior-maximum]]

[F4] Under Countable Choice, the one-dimensional Gaussian integral gives $\int_{\mathbb R}e^{-u^2/2}\,du=\sqrt{2\pi}$, and the positive-definite Gaussian integral lemma includes its normalization. [[lem-positive-definite-gaussian-integral]]

[F5] Under Countable Choice, an affine $C^1$ diffeomorphism changes a nonnegative Lebesgue integral by its absolute Jacobian. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]

[F6] For increasing measurable sets, measure of the union is the supremum of their measures. [[thm-continuity-from-below-for-measures]]

[F7] Total variation is the supremum of event-probability differences. [[def-total-variation-distance-for-probability-laws]]

[F8] Borel subsets of Euclidean space are Lebesgue measurable, bounded boxes have their usual volume, and the Borel sigma-algebra on $\Theta$ is the trace of the one on $\mathbb R$. [[thm-borel-sets-are-lebesgue-measurable]] [[thm-lebesgue-measure-of-a-box-of-every-kind]] [[thm-borel-sigma-algebra-of-a-subspace-is-the-trace]]

[F9] The real numbers form a complete ordered field, so their natural numbers are unbounded; $|z|\ge0$ and $|z|^2=z^2$, and squaring is strictly increasing on nonnegative numbers. Uniqueness of nonnegative square roots therefore makes the square root order-preserving. [[cor-cauchy-reals-lub-complete]] [[thm-reals-ordered-field]] [[thm-of-archimedean]] [[lem-of-abs-value]] [[lem-of-square-monotone]] [[thm-of-square-roots]]

## Counterexample

**Given:** The hypotheses and explicit model in Facts & Assumptions.

1.1 On $\Theta$, $0\le(\theta^2-1)^2\le9$, so $0<p_{n,\theta}(0)\le1/2$. Also $3/16\le p_{n,\theta}(1)\le5/16$, hence $p_{n,\theta}(2)\ge1-1/2-5/16=3/16$; the three entries are nonnegative and sum to one. Thus each $P_{n,\theta}$ is a probability measure on $\mathcal X$. Since $p_{n,\theta}(1)=1/4+\theta/32$ is injective, $P_{n,\theta}=P_{n,\eta}$ implies $\theta=\eta$, so the identity estimand is identifiable by [F2]. [given, F2, algebra]

1.2 The Borel sets of $\Theta$ are Lebesgue measurable, $\lambda([-2,2])=4$, and $\ell_0(\theta)=p_{n,\theta}(0)$ is continuous and satisfies $\tfrac12e^{-9n}\le\ell_0(\theta)\le\tfrac12$. Therefore $\Pi_0$ is a probability measure, $\ell_0$ is measurable, and $0<\tfrac12e^{-9n}\le Z_n=\int\ell_0d\Pi_0\le\tfrac12<\infty$. By [F1], $\Pi_n$ is the exact posterior target with density proportional to $e^{-n(\theta^2-1)^2}$ relative to $\Pi_0$. [A1, F1, F8, given, algebra]

1.3 The phase $h$ has exactly two global maxima, at $\theta=\pm1$, because $(\theta^2-1)^2=0$ exactly there and is positive elsewhere. Direct differentiation gives $h''(\theta)=4-12\theta^2$, so $h''(\pm1)=-8$; each local negative Hessian is full rank, but [F3]'s unique-maximum hypothesis fails. Writing $t=1+u$ gives $h(1+u)=-(2u+u^2)^2=-4u^2-4u^3-u^4$, so its quadratic term at $+1$ is $-4u^2$. The one-mode Laplace density is therefore proportional to $e^{-4nu^2}$, exactly the stated $q_n$, and integrates to one by [A1, F4]. [A1, F3, F4, given, algebra]

2.1 Under the affine change $z=\sqrt{8n}(t-1)$, [F5] sends $Q_n((0,\infty))$ to the standard normal probability of $(-\sqrt{8n},\infty)$. These sets are increasing. Given any $z\in\mathbb R$, choose $n>z^2/8$ by [F9]; positivity and monotonicity of the square root then give $\sqrt{8n}>|z|$, so their union is all of $\mathbb R$. Continuity from below [F6] therefore gives $Q_n((0,\infty))\to1$. [A1, F5, F6, F9, step 1.3, algebra]

2.2 Define $w_n(t)=e^{-n(t^2-1)^2}\mathbf1_{[-2,2]}(t)$ on $\mathbb R$; it is a nonnegative even Borel function. Apply [F5] to the reflection diffeomorphism $T(t)=-t$ on $\mathbb R$, using the function $w_n\mathbf1_{(0,\infty)}$: the unnormalized integrals of $w_n$ over $(0,\infty)$ and $(-\infty,0)$ are equal. The singleton $\{0\}$ has Lebesgue measure zero by [F8], so these two integrals split the prior-weighted posterior normalizer equally. Thus $\overline\Pi_n((0,\infty))=\Pi_n((0,\infty))=1/2$. [A1, F5, F8, step 1.2, algebra]

3.1 Using event $(0,\infty)$ in [F7], $\lVert Q_n-\overline\Pi_n\rVert_{\mathrm{TV}}\ge|Q_n((0,\infty))-\overline\Pi_n((0,\infty))|$, whose right side tends to $1/2$ by steps 2.1 and 2.2. Thus $\liminf_{n\to\infty}\lVert Q_n-\overline\Pi_n\rVert_{\mathrm{TV}}\ge1/2$, proving that the local curvature at one mode misses persistent posterior mass at the other. [F7, step 2.1, step 2.2, algebra] ∎

