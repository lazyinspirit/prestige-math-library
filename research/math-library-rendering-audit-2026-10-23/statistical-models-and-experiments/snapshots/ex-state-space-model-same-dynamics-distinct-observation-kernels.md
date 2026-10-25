---
id: ex-state-space-model-same-dynamics-distinct-observation-kernels
kind: example
title: Same state dynamics with distinct observation kernels
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-general-state-space-model-by-kernels
  - def-independent-random-elements
  - def-linear-gaussian-state-space-model-with-independent-noises
  - def-moments-variance-and-covariance
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - lem-variance-and-covariance-identities-for-random-variables
  - thm-factorization-of-expectations-for-independent-variables
  - thm-finite-horizon-state-space-kernel-law-exists-uniquely
  - thm-linear-gaussian-state-space-path-law-is-jointly-gaussian
justified_by: []
proof_strategy: direct
axiom_use: Assume AC as required by the Gaussian model and path-law suppliers. The example uses no additional choice.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Spring 2015 lecture notes"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Take $T=1$ with scalar state and observation, $X_0\sim N_1(0,1)$,
$F_1=1$, $Q_1=0$, and $R_1=1$. Let $q_1\sim N_1(0,0)$ and
$r_1\sim N_1(0,1)$ be independent of each other and of $X_0$. For $c\in\{1,2\}$,
set $H_1=c$ and use the equations
$$X_1=X_0+q_1,\qquad Y_1=cX_1+r_1.$$
The two models have the same initial and transition laws, but their
observation kernels are $G_1^{(c)}(x,\cdot)=N_1(cx,1)$.

## Facts & Assumptions

**Given:** The two one-step model specifications in the Example.

[A1] AC is required for the stated Gaussian laws and the finite path-law
supplier. ([[def-axiom-of-choice]])

[F1] The general model law is the finite iterated product of its initial,
transition and observation kernels.
([[def-general-state-space-model-by-kernels]])

[F2] The linear-Gaussian definition specifies Gaussian marginal laws,
positive-semidefinite covariances, mutually independent noises and the
displayed equations.
([[def-linear-gaussian-state-space-model-with-independent-noises]])

[F3] The finite path has the exact kernel-product law and a multivariate
normal law with its stated mean and covariance.
([[thm-linear-gaussian-state-space-path-law-is-jointly-gaussian]])

[F4] A multivariate normal vector has its specified mean and covariance;
singular covariance is allowed.
([[def-multivariate-normal-law]])

[F5] Independent random elements have independent generated
sigma-algebras. ([[def-independent-random-elements]])

[F6] Expectations of products of integrable functions of independent random
variables factor. ([[thm-factorization-of-expectations-for-independent-variables]])

[F7] Covariance is bilinear on finite linear combinations and equals
$\mathbb E[XY]-\mathbb E[X]\mathbb E[Y]$ for square-integrable variables.
([[lem-variance-and-covariance-identities-for-random-variables]])

[F8] Covariance and variance are defined for square-integrable real random
variables by centered second moments. ([[def-moments-variance-and-covariance]])

[F9] The finite-horizon kernel theorem gives a unique law with the ordered
iterated-integral probabilities. ([[thm-finite-horizon-state-space-kernel-law-exists-uniquely]])

[F10] A scalar normal law with zero variance is the point mass at its mean.
([[def-standard-normal-and-normal-laws]])

## Verification

**Given:** The parameters and independent Gaussian noises in the Example.

1.1 By [F10], the degenerate noise satisfies $q_1=0$ almost surely, so both models have $X_1=X_0$ and the same transition kernel $K_1(x,A)=1_A(x)$. Each set of kernels defines the state-space model. The finite-horizon theorem and the path-law theorem supply its joint law. At $x=1$, the two observation-kernel means are $1$ and $2$, so the kernels themselves are distinct. [A1, F1, F2, F3, F4, F9, F10, given]

1.2 In the model indexed by $c$, $Y_1=cX_0+r_1$, with both variables centered, $\operatorname{Var}(X_0)=\operatorname{Var}(r_1)=1$, and $\operatorname{Cov}(X_0,r_1)=0$ by independence and factorization of expectations. Covariance bilinearity gives $\operatorname{Cov}(X_0,Y_1)=c\operatorname{Var}(X_0)+\operatorname{Cov}(X_0,r_1)=c$. Thus the two joint laws have cross-covariances $1$ and $2$. [F2, F3, F4, F5, F6, F7, F8, algebra]

2.1 Both joint laws have finite second moments. If the laws were equal, the covariance of their first and third coordinates would be equal. Step 1.2 gives different values, so the joint laws are different. [F3, F4, F8, step 1.2, contradiction] ∎