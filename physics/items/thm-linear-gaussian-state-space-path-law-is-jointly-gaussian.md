---
id: thm-linear-gaussian-state-space-path-law-is-jointly-gaussian
kind: theorem
title: The finite linear-Gaussian state-space path is jointly Gaussian
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-general-state-space-model-by-kernels
  - def-independent-random-elements
  - def-linear-gaussian-state-space-model-with-independent-noises
  - def-measure-kernel-and-probability-kernel
  - def-multivariate-normal-law
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - lem-characteristic-function-of-a-multivariate-normal-law
  - lem-characteristic-functions-under-affine-maps-and-independent-sums
  - lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal
  - lem-finite-products-of-standard-borel-spaces-are-standard-borel
  - thm-finite-horizon-state-space-kernel-law-exists-uniquely
  - thm-independent-random-elements-have-product-joint-law
  - thm-measurability-of-integration-against-a-kernel
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
justified_by: []
proof_strategy: direct
axiom_use: Assume AC. It is used to obtain the Gaussian marginals for all positive-semidefinite covariances and through the stated Gaussian, uniqueness, Cramer–Wold, and Ionescu–Tulcea suppliers. The finite product measure construction adds no choice.
provenance:
  statement: literature-derived
  proof: ai-altered
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

## Statement

Assume AC and fix a finite-horizon model of
[[def-linear-gaussian-state-space-model-with-independent-noises]]. There is a
probability space carrying mutually independent Gaussian vectors
$x_0,q_1,r_1,\ldots,q_T,r_T$ with the stated laws. The recursions
$x_t=F_t x_{t-1}+q_t$ and $y_t=H_t x_t+r_t$ induce the general kernel-product
law of [[def-general-state-space-model-by-kernels]]. In the interleaved order
$Z_T=(x_0,x_1,y_1,\ldots,x_T,y_T)$, there is a deterministic matrix $M_T$
such that
$$Z_T=M_T W_T,\qquad W_T=(x_0,q_1,r_1,\ldots,q_T,r_T),$$
and
$$Z_T\sim N\!\left(M_T a_T,\ M_T\Sigma_T M_T^T\right),\qquad a_T=(m_0,0,\ldots,0),\quad \Sigma_T=\operatorname{diag}(P_0,Q_1,R_1,\ldots,Q_T,R_T).$$
The covariance may be singular.

## Facts & Assumptions

**Given:** AC and a finite-horizon parameter tuple from the linear-Gaussian
definition, with every initial/process/observation covariance symmetric
positive semidefinite.

[A1] AC is used by the multivariate-normal construction, characteristic-law
uniqueness, Cramer–Wold, and Ionescu–Tulcea suppliers below.
([[def-axiom-of-choice]])

[F1] The model has Gaussian initial, transition and observation laws, and its
independent-noise representation uses the displayed linear recursions.
([[def-linear-gaussian-state-space-model-with-independent-noises]])

[F2] Under AC, every positive-semidefinite covariance defines a multivariate
normal probability law, including singular covariances.
([[def-multivariate-normal-law]])

[F3] Finite products of probability measures exist by the sigma-finite product
measure theorem and have the rectangle formula.
([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]])

[F4] Independence of random elements is independence of their generated
sigma-algebras, and a finite independent family has product joint law.
([[def-independent-random-elements]],
[[thm-independent-random-elements-have-product-joint-law]])

[F5] Tonelli's theorem permits iterated integration of nonnegative product-
measurable functions against sigma-finite product measures.
([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[F6] A probability kernel has probability-measure sections and measurable
evaluations. ([[def-measure-kernel-and-probability-kernel]])

[F7] Integrating a nonnegative product-measurable function against a
probability kernel gives a measurable evaluation function.
([[thm-measurability-of-integration-against-a-kernel]])

[F8] Under AC, the characteristic function of a multivariate normal law is
$\exp(iu\cdot a-u^T\Sigma u/2)$ and uniquely determines the law, including
singular covariance. ([[lem-characteristic-function-of-a-multivariate-normal-law]])

[F9] Scalar affine transformations have the stated characteristic-function
formula. ([[lem-characteristic-functions-under-affine-maps-and-independent-sums]])

[F10] The finite-horizon kernel law exists uniquely and has the stated ordered
iterated-integral formula. ([[thm-finite-horizon-state-space-kernel-law-exists-uniquely]])

[F11] A finite stack of mutually independent Gaussian vectors is multivariate
normal with block-diagonal covariance. ([[lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal]])

[F12] Finite products of standard-Borel spaces are standard Borel.
([[lem-finite-products-of-standard-borel-spaces-are-standard-borel]])

## Proof

**Given:** The hypotheses in the Statement.

1.1 Each Gaussian marginal law in the model exists on its finite-dimensional Euclidean Borel space. Repeatedly applying the finite-product measure construction creates a finite product probability space with these marginals. Its coordinate maps $x_0,q_1,r_1,\ldots,q_T,r_T$ have the prescribed marginals, and the rectangle formula gives product probabilities on all measurable coordinate rectangles. Therefore the generated sigma-algebras are mutually independent, and the finite family has the product joint law. Thus this space supplies the required independent Gaussian noise vectors. [A1, F1, F2, F3, F4, given, construct]

1.2 For a Borel set $A\subseteq\mathbb R^{d_t}$, define $K_t(x,A)=\int 1_A(F_tx+z)\,N_{d_t}(0,Q_t)(dz)$; define $G_t$ analogously using $H_t$ and $N_{p_t}(0,R_t)$. The maps $(x,z)\mapsto F_tx+z$ and $(x,z)\mapsto H_tx+z$ are continuous, so the integrands are product-measurable. Each fixed-state section is a pushforward probability measure. Regard each fixed Gaussian noise law as a constant probability kernel. Kernel integration then makes the evaluations measurable in the state argument, so both families are probability kernels. For fixed $x$ and any $u$, the scalar affine characteristic-function identity applied to $u^Tq_t$, together with the multivariate-normal characteristic-function formula, gives $\mathbb E[e^{iu^T(F_tx+q_t)}]=\exp(iu^TF_tx-\tfrac12u^TQ_tu)$. This is the multivariate-normal characteristic function with mean $F_tx$ and covariance $Q_t$, so its uniqueness identifies the translated law with $N_{d_t}(F_tx,Q_t)$. The same calculation with $H_t,r_t,R_t$ identifies $G_t$. No covariance inverse is used. [A1, F1, F2, F6, F7, F8, F9, given]

2.1 Let $\phi$ be any nonnegative Borel function on the finite trajectory space. The recursion is a finite composition of continuous affine maps, so $\phi(Z_T)$ is measurable. By Tonelli, integrate the noise product law from step 1.1 backward, starting with the last pair $(q_T,r_T)$. For each fixed preceding history, the integral over $q_T$ is the pushforward through $x_T=F_Tx_{T-1}+q_T$, hence equals integration against $K_T$; the following integral over $r_T$ is the pushforward through $y_T=H_Tx_T+r_T$, hence equals integration against $G_T$. Repeating this argument for $t=T-1,\ldots,1$ and finally integrating $x_0$ against $\mu_0$ gives $\mathbb E[\phi(Z_T)]=\int\mu_0(dx_0)\prod_{t=1}^T K_t(x_{t-1},dx_t)G_t(x_t,dy_t)\,\phi(x_0,x_1,y_1,\ldots,x_T,y_T)$. For $T=0$, it is simply integration against $\mu_0$. This is exactly the unique general model law, and the trajectory space is standard Borel. [A1, F1, F5, F10, F12, step 1.1, step 1.2]

3.1 The stacked-noise lemma gives the vector $W_T$ the multivariate normal law $N(a_T,\Sigma_T)$. Successive substitution in the two recursions shows by finite induction that each coordinate of $Z_T$ is a linear function of $W_T$; collecting those coefficients gives a deterministic matrix $M_T$. For any vector $u$, $u^TZ_T=(M_T^Tu)^TW_T$, whose law is normal with mean $u^TM_Ta_T$ and variance $u^TM_T\Sigma_TM_T^Tu$. The multivariate-normal projection definition gives $Z_T\sim N(M_Ta_T,M_T\Sigma_TM_T^T)$. The covariance is positive semidefinite because $v^T\Sigma_Tv\ge0$ implies $u^TM_T\Sigma_TM_T^Tu=(M_T^Tu)^T\Sigma_T(M_T^Tu)\ge0$. Thus singular covariances are included and no inverse is needed. [A1, F1, F2, F11, step 1.1, algebra] ∎