---
id: lem-all-polynomial-convolutions-have-uniformly-bounded-degree
kind: lemma
title: "Polynomial activation convolutions have a common degree bound"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-activation-class-locally-essentially-bounded-ae-continuous
  - def-countable-choice
  - def-convolution-of-a-distribution-with-a-test-function
  - def-fixed-support-test-function-frechet-space
  - def-regular-distribution-from-a-locally-integrable-function
  - lem-fixed-support-test-function-space-is-separable
  - lem-fixed-support-test-function-spaces-are-complete
  - thm-convolution-with-a-test-function-is-smooth
  - thm-locally-integrable-functions-embed-in-distributions
  - cor-mean-value-theorem
  - thm-separable-complete-metric-baire-in-zf
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Leshno, Lin, Pinkus, and Schocken, Multilayer Feedforward Networks With a Non-Polynomial Activation Function Can Approximate Any Function, proof of Theorem 1, Step 6"
      url: "https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf"
    - title: "Semyon Dyatlov, Lecture Notes for 18.155, fixed-support test functions and Baire category"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
---

## Statement

Assume Countable Choice. Let $\sigma\in\mathcal M$ and, for every real smooth test function $\varphi$ supported in $[-1,1]$, define

$$g_\varphi(x)=\int_{\mathbb R}\sigma(x-t)\varphi(t)\,dt. $$

If every $g_\varphi$ is a real polynomial, then there is one integer $N\in\mathbb N_0$ such that every $g_\varphi$ has degree at most $N$.

## Statement references

[Leshno et al., proof of Theorem 1, Baire-category common-degree step](https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf)

[Dyatlov, Lecture Notes for 18.155, fixed-support test-function spaces](https://math.mit.edu/~dyatlov/18.155/155-notes.pdf)

## Facts & Assumptions

**Given:** Countable Choice and $\sigma\in\mathcal M$ such that every displayed convolution is a polynomial.

[F1] Each $\sigma\in\mathcal M$ is measurable and essentially bounded on compact intervals, hence locally integrable; its regular distribution is defined by integration and embeds into distributions under Countable Choice ([[def-activation-class-locally-essentially-bounded-ae-continuous]], [[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]]).

[F2] The complex fixed-support test-function space is complete; its real-valued subspace $X$ is closed because uniform limits of real-valued functions are real, and is therefore complete with the induced metric ([[def-fixed-support-test-function-frechet-space]], [[lem-fixed-support-test-function-spaces-are-complete]]).

[F3] This fixed-support test-function space is separable ([[lem-fixed-support-test-function-space-is-separable]]).

[F4] A separable complete metric space is Baire in ZF ([[thm-separable-complete-metric-baire-in-zf]]).

[F5] Convolution of a distribution with a test function is smooth, differentiates by moving derivatives to the test function, and agrees with the displayed integral for the regular distribution of $\sigma$ ([[thm-convolution-with-a-test-function-is-smooth]], [[def-convolution-of-a-distribution-with-a-test-function]], [[def-regular-distribution-from-a-locally-integrable-function]]).

[F6] A differentiable real function with zero derivative on an interval is constant there, by the mean-value theorem ([[cor-mean-value-theorem]]).

[A1] Countable Choice means every sequence of nonempty sets has a function choosing one element from each ([[def-countable-choice]]); it is assumed for the Lebesgue-integral realization of $\sigma$.

## Proof

1.1 Let $X=D_{[-1,1]}$ with its fixed-support Fréchet topology. For each $n\in\mathbb N_0$, set $E_n=\{\varphi\in X:g_\varphi^{(n+1)}(x)=0\text{ for every }x\in\mathbb R\}$. Linearity of convolution makes $E_n$ a linear subspace. For fixed $x$, its defining functional is continuous: on the compact interval $x-[-1,1]$, local essential boundedness of $\sigma$ gives a finite bound $M_x$, and $|g_{\varphi}^{(n+1)}(x)-g_{\psi}^{(n+1)}(x)|\le 2M_xp_{n+1}(\varphi-\psi)$. Thus $E_n$, an intersection of kernels of continuous functionals, is closed. [given, F1, F5, A1, algebra]

1.2 If a smooth function $g$ has $(n+1)$st derivative zero, [F6] first makes $g^{(n)}$ constant; subtracting its corresponding multiple of $x^n/n!$ leaves an $n$th derivative equal to zero. Repeating this argument down to order zero shows $g$ is a polynomial of degree at most $n$. Conversely every such polynomial has $(n+1)$st derivative zero. Thus the hypothesis gives $X=\bigcup_{n=0}^\infty E_n$. [given, F6, induction, algebra]

2.1 By [F2]–[F4], the Baire theorem applies to $X$. Therefore some closed subspace $E_N$ has nonempty interior; otherwise the closed sets $E_n$ would all be nowhere dense and their countable union could not equal $X$. A linear subspace with nonempty interior contains a neighborhood of zero, and scaling any vector into that neighborhood shows it is the whole space. Hence $E_N=X$. [step 1.1, step 1.2, F2, F3, F4, algebra]

3.1 Membership $E_N=X$ says $g_\varphi^{(N+1)}=0$ for every test function supported in $[-1,1]$. Repeated application of [F6] then makes every $g_\varphi$ a polynomial of degree at most $N$, as claimed. [step 2.1, F6] ∎

