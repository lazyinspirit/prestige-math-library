---
id: lem-gaussian-sample-mean-signal-alignment
kind: lemma
title: Signal alignment of a Gaussian sample mean
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: adversarial-robustness-and-robust-risk
dependency_level: 1
deps:
  - def-two-class-spherical-gaussian-mixture-model
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-independent-random-elements
  - lem-measurable-functions-preserve-independence
  - lem-characteristic-functions-under-affine-maps-and-independent-sums
  - lem-characteristic-function-of-a-normal-law
  - thm-uniqueness-of-a-law-from-its-characteristic-function
  - thm-cramer-wold-device
  - lem-gaussian-vector-norm-concentration
  - thm-finite-union-bound
justified_by: []
axiom_use: "AC enters through the finite-dimensional Gaussian laws, scalar-law uniqueness and Cramer–Wold suppliers, and the Gaussian concentration supplier; the finite sample transformations add no choice premise."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Ludwig Schmidt, Shibani Santurkar, Dimitris Tsipras, Kunal Talwar, and Aleksander Madry, Adversarially Robust Generalization Requires More Data, arXiv:1804.11285v2, Lemma 16 and Appendix A.1, PDF pp. 22–23"
      url: "https://arxiv.org/pdf/1804.11285v2"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Gaussian laws and characteristic functions"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "S. R. S. Varadhan, Probability Theory, independent random elements and characteristic functions"
      url: "https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf"
---

## Statement

Assume AC. Let $d,n\ge1$ be integers, let $\sigma>0$, let $\theta\in\mathbb R^d$ satisfy $\|\theta\|_2=\sqrt d$, and draw independent observations $(X_i,Y_i)_{i=1}^n$ from the two-class spherical Gaussian model with parameters $\theta,\sigma$. Put $W=n^{-1}\sum_{i=1}^nY_iX_i$, and define $\widehat W=W/\|W\|_2$ when $W\ne0$ and $\widehat W=e_1$ when $W=0$. Then
$$\mathbb P\!\left(\langle\widehat W,\theta\rangle\le\frac{2\sqrt n-1}{2\sqrt n+4\sigma}\sqrt d\right)\le2\exp\!\left(-\frac{d}{8(\sigma^2+1)}\right).$$

## Statement references

[Schmidt et al., Lemma 16 and its proof, Appendix A.1, PDF pp. 22–23](https://arxiv.org/pdf/1804.11285v2).

## Facts & Assumptions

**Given:** The hypotheses in the Statement.

[A1] Assume the Axiom of Choice. It is used through the Gaussian-law, scalar characteristic-function uniqueness, Cramer–Wold, and Gaussian concentration suppliers. [[def-axiom-of-choice]].

[F1] Under the model, conditional on $Y_i=y$, $X_i$ has law $N_d(y\theta,\sigma^2I_d)$; the sample pairs are independent. [[def-two-class-spherical-gaussian-mixture-model]].

[F2] A multivariate normal law has the stated scalar normal projection laws; scalar normal laws have characteristic function $\exp(imt-vt^2/2)$ when their mean is $m$ and variance is $v$. [[def-multivariate-normal-law]], [[lem-characteristic-function-of-a-normal-law]].

[F3] Equal characteristic functions determine equal scalar Borel probability laws under AC. [[thm-uniqueness-of-a-law-from-its-characteristic-function]].

[F4] Equal laws of all one-dimensional linear projections determine a Borel probability law on $\mathbb R^d$ under AC. [[thm-cramer-wold-device]].

[F5] Applying a measurable map separately to independent random elements preserves independence. [[def-independent-random-elements]], [[lem-measurable-functions-preserve-independence]].

[F6] Characteristic functions transform under affine maps and factor for finite independent sums. [[lem-characteristic-functions-under-affine-maps-and-independent-sums]].

[F7] If $G\sim N_d(0,\eta^2I_d)$, then $\mathbb P(\|G\|_2\ge\eta\sqrt d+t)\le e^{-t^2/(2\eta^2)}$, and for every unit $u$, $\mathbb P(\langle u,G\rangle\le-s)\le e^{-s^2/(2\eta^2)}$ for $t,s\ge0$. [[lem-gaussian-vector-norm-concentration]].

[F8] The probability of a union of two events is at most the sum of their probabilities. [[thm-finite-union-bound]].

## Proof

1.1 For each $i$, the map $(x,y)\mapsto yx$ is Borel, so [F5] makes $Z_i:=Y_iX_i$ independent. For each $u\in\mathbb R^d$ and $y\in\{-1,+1\}$, [F1]–[F2] give the conditional characteristic function $\mathbb E[e^{it\langle u,yX_i\rangle}\mid Y_i=y]=\exp(it\langle u,\theta\rangle-t^2\sigma^2\|u\|_2^2/2)$: the mean term uses $y^2=1$ and the variance term uses $y^2=1$. This does not depend on $y$, so the same formula holds after averaging over the two labels. By [F3] each projection has law $N(\langle u,\theta\rangle,\sigma^2\|u\|_2^2)$, and [F4] identifies $Z_i\sim N_d(\theta,\sigma^2I_d)$. [A1, F1, F2, F3, F4, F5]

2.1 Put $E_i=Z_i-\theta$. They remain independent by [F5]. For each fixed $u$, their projections are independent scalar $N(0,\sigma^2\|u\|_2^2)$ variables by step 1.1 and [F2]. By [F6], the characteristic function of $n^{-1}\sum_i\langle u,E_i\rangle$ is $\exp(-t^2\sigma^2\|u\|_2^2/(2n))$; [F3] identifies this as $N(0,\sigma^2\|u\|_2^2/n)$. Since this holds for every $u$, [F4] gives $\overline E:=n^{-1}\sum_iE_i\sim N_d(0,\sigma^2I_d/n)$. Thus $W=\theta+\overline E$. [step 1.1, A1, F2, F3, F4, F5, F6]

3.1 Set $\eta=\sigma/\sqrt n$. Apply the norm tail in [F7] to $\overline E$ with $t=\eta\sqrt d$. Except on an event of probability at most $e^{-d/2}$, $\|\overline E\|_2<2\eta\sqrt d$, so $\|W\|_2\le\sqrt d+2\sigma\sqrt{d/n}=(1+2\sigma/\sqrt n)\sqrt d$. [step 2.1, F7]

3.2 Apply the projection tail in [F7] to $u=\theta/\sqrt d$ and $s=\sqrt d/(2\sqrt n)$. Except on an event of probability at most $e^{-d/(8\sigma^2)}$, $\langle\overline E,\theta\rangle>-d/(2\sqrt n)$, hence $\langle W,\theta\rangle>d(1-1/(2\sqrt n))>0$. [step 2.1, F7, algebra]

4.1 On the intersection of the events in steps 3.1 and 3.2, $W\ne0$, and division by the positive upper bound for $\|W\|_2$ yields $\langle\widehat W,\theta\rangle\ge\frac{1-1/(2\sqrt n)}{1+2\sigma/\sqrt n}\sqrt d=\frac{2\sqrt n-1}{2\sqrt n+4\sigma}\sqrt d$. By [F8], the failure probability is at most $e^{-d/2}+e^{-d/(8\sigma^2)}\le2e^{-d/(8(\sigma^2+1))}$, since both exponents dominate $d/(8(\sigma^2+1))$. [step 3.1, step 3.2, A1, F8, algebra] ∎

## Proof references

[[def-two-class-spherical-gaussian-mixture-model]]: the conditional Gaussian law and independent training sample convention.

[[lem-gaussian-vector-norm-concentration]]: the Euclidean norm and one-sided projection tails.
