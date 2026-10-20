---
id: ex-du-initial-output-common-mode-variance
kind: example
title: "Correlated inputs create a high-variance common initialization mode"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-du-overparameterized-network-architectures-and-gram-kernels
  - lem-du-activation-normalizer-finite-positive
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - lem-gaussian-even-moment-bound-for-brownian-increments
  - cor-cauchy-schwarz-for-random-variables
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - thm-finite-dimensional-orthogonal-decomposition
  - lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: "AC, DC and countable choice are inherited from the architecture probability-law construction and Gaussian suppliers; the conditional finite moment calculations use no further choice."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Du et al., initialization scheme and Appendix B, Lemmas B.4–B.5"
      url: "https://proceedings.mlr.press/v97/du19c/du19c-supp.pdf"
    - title: "University of Toronto, Theory of Deep Learning, Lecture 6, slides 31–43"
      url: "https://www.cs.toronto.edu/~rgrosse/courses/csc2541_2022/slides/lec06.pdf"
---

## Example

Assume AC, DC and countable choice. Use depth $H=1$, the softplus activation $\sigma(t)=\log(1+e^t)$, width $m\ge1$, and orthonormal inputs $x_i=e_i$ in $\mathbb R^d$ for $1\le i\le n\le d$. Let $\mu=\mathbb E[\sigma(Z)]$ for standard normal $Z$, let $c_\sigma=(\mathbb E[\sigma(Z)^2])^{-1}$, put $\rho=c_\sigma\mu^2\in(0,1)$, and define the hidden-feature matrix by $\Phi_{ir}=\sqrt{c_\sigma/m}\,\sigma(W^{(1)}_{r\cdot}x_i)$. If $u=(f(x_i,\theta^{(0)}))_{i=1}^n$ is the randomly initialized output vector and $e=n^{-1/2}(1,\ldots,1)^T$, then

$$\mathbb E[e^T\Phi\Phi^Te]=1+(n-1)\rho,$$

where $\Phi$ is the hidden-feature matrix at initialization. Consequently, for every finite $C>0$, there is positive probability that $|e^Tu|>C\sqrt n$. A confidence-uniform bound $\|u\|_2\le C\sqrt n$ for all confidence levels is therefore unavailable in this example; this observation does not refute the finite-width convergence theorem, whose bounds depend on $\delta$.

## Example references

[Du et al., Gaussian output initialization and Appendix B, Lemmas B.4–B.5](https://proceedings.mlr.press/v97/du19c/du19c-supp.pdf)

[Toronto, Theory of Deep Learning, Lecture 6, slides 31–43, finite-width initialization context](https://www.cs.toronto.edu/~rgrosse/courses/csc2541_2022/slides/lec06.pdf)

[[def-du-overparameterized-network-architectures-and-gram-kernels|Network initialization and hidden-feature definition]]

## Facts & Assumptions

**Given:** The depth-one fully connected architecture, orthonormal inputs, softplus activation, independent Gaussian initialization, and the associated hidden-feature matrix.

[F1] At depth one, each hidden feature coordinate is $\sqrt{c_\sigma/m}\,\sigma(W^{(1)}x_i)$ and each output weight is an independent standard normal. [[def-du-overparameterized-network-architectures-and-gram-kernels]]

[F2] The normalizer $c_\sigma$ is finite and positive for softplus, the standard normal law has an everywhere-positive density, and its second moment is $1$. [[lem-du-activation-normalizer-finite-positive]] [[def-standard-normal-and-normal-laws]] [[lem-gaussian-even-moment-bound-for-brownian-increments]]

[F3] A standard Gaussian vector transformed by a fixed linear functional is normal with variance given by the corresponding quadratic form. [[def-multivariate-normal-law]]

[F4] Cauchy–Schwarz bounds the first absolute moment by the square root of the second moment. [[cor-cauchy-schwarz-for-random-variables]]

[F5] A finite-dimensional inner-product space is the direct sum of a subspace and its orthogonal complement. [[thm-finite-dimensional-orthogonal-decomposition]]

[F6] Every finite-dimensional inner-product space has an orthonormal basis. [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]

[F7] Right multiplication of an iid standard Gaussian matrix by a fixed orthogonal matrix preserves its iid Gaussian law. [[lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence]]

[A1] Assume AC as required by the normal-law suppliers. [[def-axiom-of-choice]]

[A2] Assume countable choice as required by the iid Gaussian-matrix supplier. [[def-countable-choice]]

## Verification

**Given:** The setting in the Example, $Z\sim N(0,1)$, $s=\sigma(Z)$, and $\Phi_{ir}=\sqrt{c_\sigma/m}\,\sigma(W^{(1)}_{r\cdot}x_i)$.

1.1 Softplus is positive and nonconstant. It is analytic, has derivative in $(0,1)$, and its second derivative is at most $1/4$, so it satisfies the activation regularity assumptions. By [F2] and [F4], $\mu$ is finite; because $\sigma(Z)\ge\log 2$ when $Z\ge0$ and the standard normal density is positive on $(0,1)$, $\mu>0$. Since softplus is nonconstant, choose $z_0$ with $\sigma(z_0)\ne\mu$; continuity and the positive Gaussian density give $\mathbb E[(s-\mu)^2]>0$. Expanding this finite square and using $\mathbb E s=\mu$ yields $\mathbb E[s^2]>\mu^2$. Therefore $0<\rho<1$. [A1, F2, F4, given, choose, algebra]

2.1 Let $U=\operatorname{span}\{x_1,\ldots,x_n\}$. By [F5], $\mathbb R^d=U\oplus U^\perp$, and [F6] supplies an orthonormal basis of $U^\perp$. Joining it to $x_1,\ldots,x_n$ gives the columns of an orthogonal matrix $Q$. By [F7], $W^{(1)}Q$ has the same iid Gaussian law as $W^{(1)}$, so all coordinates $W^{(1)}_{r\cdot}x_i$ are independent standard normals. Thus $\mathbb E[(\Phi\Phi^T)_{ii}]=c_\sigma\mathbb E[s^2]=1$, while for $i\ne j$, $\mathbb E[(\Phi\Phi^T)_{ij}]=c_\sigma\mu^2=\rho$. Therefore $\mathbb E[\Phi\Phi^T]=(1-\rho)I_n+\rho\mathbf1\mathbf1^T$, and its quadratic form in the unit vector $e$ is $1+(n-1)\rho$. [A2, F1, F2, F5, F6, F7, given, step 1.1, construct, algebra]

3.1 Conditional on the hidden weights, $e^Tu=e^T\Phi a$ is a centered normal random variable with variance $S=e^T\Phi\Phi^Te\ge0$, by [F1] and [F3]. The nonnegative random variable $S$ has expectation $1+(n-1)\rho>\rho n/2$, so the event $S>\rho n/2$ has positive probability; otherwise its expectation would be at most $\rho n/2$. On this event, for any fixed $C>0$, the conditional probability of $|e^Tu|>C\sqrt n$ is at least $P\{|Z|>C\sqrt{2/\rho}\}>0$. Averaging over the hidden weights proves positive unconditional probability. Since $e$ is a unit vector, write $u=(e^Tu)e+(u-(e^Tu)e)$; the summands are orthogonal, so $\|u\|_2^2=|e^Tu|^2+\|u-(e^Tu)e\|_2^2\ge|e^Tu|^2$. This proves the asserted absence of one confidence-uniform constant by a local projection calculation. [A1, A2, F1, F3, step 2.1, given, algebra] ∎
