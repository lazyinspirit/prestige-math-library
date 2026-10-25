---
id: thm-kde-global-mise-upper-rate
kind: theorem
title: "Global MISE upper bound for the KDE"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-density-target-and-kernel-density-estimator
  - lem-kde-jointly-measurable-in-sample-and-evaluation-point
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - lem-second-order-kernel-convolution-l2-bias-bound
  - def-identically-distributed-and-iid-random-variables
  - lem-measurable-functions-preserve-independence
  - thm-factorization-of-expectations-for-independent-variables
  - def-moments-variance-and-covariance
  - thm-change-of-variables-for-expectation
  - thm-integration-against-a-density
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - cor-c-one-change-of-variables-for-l-one-functions
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-countable-choice
  - def-product-measure-on-sigma-finite-spaces
  - cor-finite-nonnegative-integral-implies-finite-almost-everywhere
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Whitney K. Newey, Nonparametric and Semiparametric Estimation, MIT OpenCourseWare 14.385, Fall 2007, integrated MSE calculation and multivariate rate, PDF pp. 5–7"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf"
    - title: "Adrian Bowman and Ludger Evers, Nonparametric Smoothing, APTS 2013–14 course notes, §1.2.1, PDF p. 8"
      url: "https://warwick.ac.uk/fac/sci/statistics/apts/students/resources-1314/ns_notes.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $X_1,\ldots,X_n$ be iid with a Borel density
version $f\in W^{2,2}(\mathbb R^d)$. Let $K:\mathbb R^d\to\mathbb R$ be
Borel, $K\in L^1\cap L^2$, $\int K(u)du=1$,
$\int u_jK(u)du=0$ for every $j$, and
$M_2(K):=\int|K(u)|\|u\|^2du<\infty$. For every $h>0$ define
$$\operatorname{MISE}(\widehat f_h) :=\mathbb E\int_{\mathbb R^d}(\widehat f_h(x)-f(x))^2dx.$$
Then
$$\operatorname{MISE}(\widehat f_h) \le\frac{h^4}{4}M_2(K)^2\|D^2f\|_{2,F}^2+ \frac{\|K\|_2^2}{nh^d}.$$
In particular, $h_n=n^{-1/(d+4)}$ gives
$\operatorname{MISE}(\widehat f_{h_n})=O(n^{-4/(d+4)})$, where $O(n^{-4/(d+4)})$
means bounded by a finite constant times $n^{-4/(d+4)}$ for all sufficiently
large $n$. This is an upper rate under the displayed hypotheses; it is not a
minimax lower bound.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n,d\ge1$, iid observations with density version $f\in W^{2,2}(\mathbb R^d)$, a Borel kernel with the displayed integrability and moment conditions, and $h>0$.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] The estimate is the finite sum $(nh^d)^{-1}\sum_iK((x-X_i)/h)$, and $f$ is a selected Borel density version ([[def-density-target-and-kernel-density-estimator]]).

[F2] The estimator is jointly Borel in the sample and evaluation point ([[lem-kde-jointly-measurable-in-sample-and-evaluation-point]]); arithmetic operations preserve measurability ([[thm-arithmetic-and-lattice-operations-preserve-measurability]]).

[F3] The convolution bias satisfies $\|S_hf-f\|_2\le h^2M_2(K)\|D^2f\|_{2,F}/2$ ([[lem-second-order-kernel-convolution-l2-bias-bound]]).

[F4] Iid random elements are independent and identically distributed ([[def-identically-distributed-and-iid-random-variables]]).

[F5] Measurable functions preserve independence, and expectations of integrable products of independent real random variables factor ([[lem-measurable-functions-preserve-independence]], [[thm-factorization-of-expectations-for-independent-variables]]).

[F6] Tonelli interchanges nonnegative integrals on the product of a probability space and $\mathbb R^d$ with Lebesgue measure; the factors are sigma-finite ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[def-product-measure-on-sigma-finite-spaces]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]).

[F7] For nonnegative measurable integrands, expectation under $P_f=f\,d\lambda_d$ is integration against $f$ ([[thm-change-of-variables-for-expectation]], [[thm-integration-against-a-density]]).

[F8] Under $\mathrm{AC}_\omega$, the C$^1$ affine substitutions used below satisfy the nonnegative and $L^1$ change-of-variables formulas ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[cor-c-one-change-of-variables-for-l-one-functions]]).

[F9] A nonnegative measurable function with finite integral is finite almost everywhere ([[cor-finite-nonnegative-integral-implies-finite-almost-everywhere]]).

[F10] For a square-integrable variable $Z$, $\operatorname{Var}(Z)=\mathbb E[(Z-\mathbb EZ)^2]$ ([[def-moments-variance-and-covariance]]).

[F11] Expectation is linear on integrable variables ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Proof


1.1 For fixed $h$, [F2] makes $(z,x)\mapsto\widehat f_h(x)$ Borel, and [F1] makes $f(x)$ Borel as a function of $(z,x)$. Arithmetic measurability in [F2] therefore makes the squared error product-measurable and nonnegative. Tonelli [F6] identifies MISE with the integral over $x$ of its expected pointwise squared error, even before finiteness has been established. [given, F1, F2, F6]

2.1 Write $q_h(x,z)=h^{-d}K((x-z)/h)$. By Tonelli and the substitution $z+hu$ in [F8], $\int_{\mathbb R^d}\mathbb E|q_h(x,X_1)|dx=\|K\|_1, \qquad \int_{\mathbb R^d}\mathbb E[q_h(x,X_1)^2]dx =h^{-d}\|K\|_2^2.$ Consequently, [F9] makes the summands integrable and square-integrable for almost every $x$. For such $x$, put $g(z)=q_h(x,z)$ and $g^+=\max(g,0)$, $g^-=\max(-g,0)$. The nonnegative density formula [F7] applied to $|g|$ shows $\int|g|f<\infty$. Thus both parts have finite density integrals, and [F7] applied separately to them, followed by subtraction using [F11], gives $\mathbb E q_h(x,X_1)=\int g(z)f(z)dz$. Signed substitution [F8] then identifies this integral with $S_hf(x)$, and identical laws plus finite-sum linearity [F11] give $\mathbb E\widehat f_h(x)=S_hf(x)$. [given, A1, F4, F6, F7, F8, F9, F11, step 1.1]

3.1 At almost every $x$ from step 2.1, the variables $q_h(x,X_i)$ are iid and square-integrable. Set $W_i=q_h(x,X_i)-\mathbb E q_h(x,X_i)$. These are independent, integrable and square-integrable by [F5] and step 2.1; for $i\ne j$, [F5] makes $W_iW_j$ integrable and gives $\mathbb E[W_iW_j]=\mathbb EW_i\,\mathbb EW_j=0$. Expanding the finite square in the variance definition [F10] and applying [F11] gives $\operatorname{Var}(\widehat f_h(x))=n^{-2}\sum_i\mathbb EW_i^2=\operatorname{Var}(q_h(x,X_1))/n$. Expanding one centered square using [F10]–[F11] gives $\operatorname{Var}(q_h(x,X_1))=\mathbb E[q_h(x,X_1)^2]-(\mathbb E q_h(x,X_1))^2\le\mathbb E[q_h(x,X_1)^2]$. Integrating and using step 2.1 bounds the integrated variance by $\|K\|_2^2/(nh^d)$. [step 2.1, F4, F5, F10, F11, algebra]

3.2 For almost every $x$, step 2.1 identifies the bias with $S_hf(x)-f(x)$. The $L^2$ bound [F3] therefore gives $\int_{\mathbb R^d}(\mathbb E\widehat f_h(x)-f(x))^2dx \le\frac{h^4}{4}M_2(K)^2\|D^2f\|_{2,F}^2.$ [step 2.1, F3]

4.1 At almost every $x$, expand $\widehat f_h(x)-f(x)=(\widehat f_h(x)-\mathbb E\widehat f_h(x))+(\mathbb E\widehat f_h(x)-f(x))$. The centered term has expectation zero, so [F10]–[F11] give $\mathbb E[(\widehat f_h(x)-f(x))^2] =\operatorname{Var}(\widehat f_h(x)) +(\mathbb E\widehat f_h(x)-f(x))^2.$ Integrate this nonnegative identity using step 1.1, then apply steps 3.1 and 3.2 to obtain the displayed MISE bound. For $h_n=n^{-1/(d+4)}$, both $h_n^4$ and $(nh_n^d)^{-1}$ equal $n^{-4/(d+4)}$, which proves the stated upper rate. [F10, F11, step 1.1, step 3.1, step 3.2, algebra] ∎

