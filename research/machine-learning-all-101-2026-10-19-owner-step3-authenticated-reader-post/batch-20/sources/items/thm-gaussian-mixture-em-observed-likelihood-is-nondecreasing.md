---
id: thm-gaussian-mixture-em-observed-likelihood-is-nondecreasing
kind: theorem
title: "Exact Gaussian-mixture EM does not decrease observed log likelihood"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-expectation-maximization
  - alg-gaussian-mixture-em
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - cor-continuous-functions-are-borel-measurable
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-axiom-of-choice
  - def-finite-gaussian-mixture
  - def-finite-sigma-finite-and-semifinite-measures
  - def-kullback-leibler-divergence
  - def-latent-variable-joint-and-observed-data-factorization
  - def-measure-with-density
  - def-probability-measure
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - thm-determinant-differential-and-jacobis-formula
  - thm-derivative-of-matrix-inversion
  - thm-em-observed-log-likelihood-is-nondecreasing
  - thm-finite-gaussian-component-density-normalized
  - thm-gaussian-mixture-exact-m-step-maximizes-q
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-observed-density-is-latent-marginal-under-tonelli
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-kullback-leibler-is-nonnegative
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-cauchy-schwarz-finite
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing, §8.5.2 and §14.3.7"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Christopher M. Bishop, Pattern Recognition and Machine Learning, §§9.2.2 and 9.4"
      url: "https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf"
---

## Statement

Assume AC. Let $n,p,K$ be positive integers, let $x_1,\ldots,x_n\in\mathbb R^p$ have affine span $\mathbb R^p$ (equivalently, no nonzero $v\in\mathbb R^p$ makes $v^{\mathsf T}x_i$ constant over all $i$), and start from a finite Gaussian-mixture parameter $\theta_0=((\pi_k^{(0)},\mu_k^{(0)},\Sigma_k^{(0)}))_{k=1}^K$ with positive weights summing to one and symmetric positive-definite covariances. For $t=0,\ldots,T-1$, where $T\ge1$, set

$$\gamma_{ik}^{(t)}:=\frac{\pi_k^{(t)}\phi_p(x_i;\mu_k^{(t)},\Sigma_k^{(t)})}{\sum_{j=1}^K\pi_j^{(t)}\phi_p(x_i;\mu_j^{(t)},\Sigma_j^{(t)})},\qquad N_k^{(t)}:=\sum_i\gamma_{ik}^{(t)},$$

and update

$$\pi_k^{(t+1)}:=N_k^{(t)}/n,\qquad \mu_k^{(t+1)}:=\frac{\sum_i\gamma_{ik}^{(t)}x_i}{N_k^{(t)}},\qquad \Sigma_k^{(t+1)}:=\frac{\sum_i\gamma_{ik}^{(t)}(x_i-\mu_k^{(t+1)})(x_i-\mu_k^{(t+1)})^{\mathsf T}}{N_k^{(t)}}.$$

For each $t$, define

$$\ell(\theta_t;x_{1:n}):=\sum_{i=1}^n\log\!\left(\sum_{k=1}^K\pi_k^{(t)}\phi_p(x_i;\mu_k^{(t)},\Sigma_k^{(t)})\right).$$

Every update is well-defined, every $\theta_t$ remains in the stated mixture domain, and

$$\ell(\theta_{t+1};x_{1:n})\ge\ell(\theta_t;x_{1:n})\qquad(0\le t<T).$$

No strict increase, parameter convergence, or global maximum conclusion is asserted.

## Facts & Assumptions

**Given:** Assume AC; take positive integers $n,p,K$, a full-affine-span sample $x_{1:n}$, an initial finite Gaussian-mixture parameter, and a finite number $T$ of exact EM updates.

[A1] [[def-axiom-of-choice]]: AC is assumed by the finite-Gaussian density construction and by the published KL/EM interface. The density construction also uses countable choice, which AC supplies through [F10]. No stronger choice principle is used.

[F1] [[def-finite-gaussian-mixture]]: a finite mixture has positive weights summing to one, SPD component covariances, component density $\phi_p$, observation density $f_\theta(y)=\sum_k\pi_k\phi_p(y;\mu_k,\Sigma_k)$, and iid-sample log likelihood $\sum_i\log f_\theta(x_i)$.

[F2] [[thm-finite-gaussian-component-density-normalized]]: for every positive-definite component covariance, $\phi_p$ is finite, strictly positive at each finite observation, and integrates to one with respect to $p$-dimensional Lebesgue measure.

[F3] [[def-latent-variable-joint-and-observed-data-factorization]]: a latent-variable model supplies one jointly measurable nonnegative density on parameter, observation, and latent spaces, normalized on every parameter fibre; the observed marginal is its latent integral and the posterior is defined on positive finite marginal fibres.

[F4] [[thm-observed-density-is-latent-marginal-under-tonelli]]: under [F3], the observed marginal is a density, and the normalized latent fibre is a probability density wherever its marginal is positive and finite.

[F5] [[alg-expectation-maximization]]: exact mode selects an attained maximizer of the expected complete-data log density over an admissible candidate set containing the current parameter; admissible candidates satisfy positive finite observed marginal, directional support, finite KL, and absolute log integrability.

[F6] [[thm-em-observed-log-likelihood-is-nondecreasing]]: for a normalized jointly measurable complete-data density and current/candidate parameters satisfying those conditions, the observed log-likelihood difference equals the Q difference plus the directional KL divergence; an admissible Q-ascent update therefore cannot decrease observed log likelihood.

[F7] [[thm-gaussian-mixture-exact-m-step-maximizes-q]]: under the stated full-affine-span hypothesis, the finite Gaussian responsibilities have positive effective counts, their weighted covariance matrices are SPD, and the displayed updates are an attained global maximizer of the finite expected complete-data log density over the full mixture domain.

[F8] [[def-kullback-leibler-divergence]]: for $P\ll R$, $D(P\|R)$ is the integral of the log Radon–Nikodym derivative with respect to $P$; on a finite space with positive masses it is a finite sum.

[F9] [[def-finite-sigma-finite-and-semifinite-measures]] and [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]: finite-dimensional Lebesgue measure and counting measure on the finite label set are sigma-finite, and their product reference measure exists with the rectangle formula.

[F10] [[lem-ac-supplies-sequential-choices-for-probability-constructions]]: AC implies countable choice, as required for the product-Lebesgue identity and the local component-density normalization proof.

[F11] [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]: under countable choice, finite products of Euclidean Lebesgue measures agree with Lebesgue measure on the corresponding Euclidean product space.

[F12] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: a nonnegative product-measurable function on sigma-finite factors has measurable section integrals, and its product integral equals either iterated integral.

[F13] [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]: finite product sigma-algebras are generated by measurable rectangles.

[F14] [[cor-continuous-functions-are-borel-measurable]]: a continuous function on a finite-dimensional Euclidean space is Borel measurable; the relative version on a Borel parameter domain follows by taking relative Borel preimages.

[F15] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]], [[thm-determinant-differential-and-jacobis-formula]], and [[thm-derivative-of-matrix-inversion]]: real symmetric matrices diagonalize orthogonally; determinant and matrix inverse are continuous on their respective finite-dimensional domains (the cited differentiability statements imply continuity).

[F16] [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]: for finite-dimensional Euclidean factors, the product Borel sigma-algebra is the Euclidean Borel sigma-algebra.

[F17] [[def-measure-with-density]] and [[def-probability-measure]]: a nonnegative density $q$ relative to counting measure defines the measure $q\,\#$, and when its finite sum is one this is a probability measure.

[F18] [[cor-additivity-of-the-nonnegative-lebesgue-integral]]: the nonnegative integral is additive for finite sums of nonnegative measurable functions.

[F19] [[thm-cauchy-schwarz-finite]]: for finite real lists $(a_r)$ and $(b_r)$, $|\sum_r a_rb_r|\le(\sum_r a_r^2)^{1/2}(\sum_r b_r^2)^{1/2}$.

## Proof

1.1 Let $\Theta_K$ be the set of mixture parameters in [F1], let $Y=(\mathbb R^p)^n$ with product Lebesgue measure $\nu=\lambda_p^{\otimes n}$, and let $Z=\{1,\ldots,K\}^n$ with counting measure $\#(B):=|B|$ for $B\subseteq Z$. The parameter domain is Borel: the positive-weight simplex is relatively open in its affine hyperplane, and the SPD cone is open as follows. For a symmetric positive-definite matrix $A$, the spectral theorem [F15] gives an orthonormal eigenbasis. Every eigenvalue $\lambda$ has a unit eigenvector $u$ with $\lambda=u^{\mathsf T}Au>0$, so the least eigenvalue $\lambda_{\min}(A)$ is positive. For a symmetric perturbation $E$, define $\|E\|_F:=(\sum_{i,j}e_{ij}^2)^{1/2}$. Applying [F19] to the finite lists $(e_{ij})$ and $(v_iv_j)$ gives $|v^{\mathsf T}Ev|\le\|E\|_F(\sum_{i,j}v_i^2v_j^2)^{1/2}=\|E\|_F\|v\|_2^2$. Therefore, whenever $\|E\|_F<\lambda_{\min}(A)$, $$v^{\mathsf T}(A+E)v\ge(\lambda_{\min}(A)-\|E\|_F)\|v\|_2^2>0$$ for every nonzero $v$, so $A+E$ is positive definite. This supplies a relative open neighborhood of each $A$ in the symmetric-matrix subspace. For each fixed $z\in Z$, the formula below is continuous in $(\eta,y)\in\Theta_K\times Y$: determinants and inverses are continuous on the SPD cone by [F15], and the remaining operations are sums, products, and exponentials. A continuous map on this Borel subspace has Borel preimages relative to it; those relative Borel sets are ambient Borel. The product-Borel identification for Euclidean factors [F16] and finite discreteness of $Z$ then make the function jointly measurable for the required product sigma-algebra. [A1, F1, F10, F13, F14, F15, F16, F19, algebra]

2.1 Define the complete-data density, relative to $\nu$ times counting measure on $Z$, by $p(\eta,y,z):=\prod_{i=1}^n\pi_{z_i}\phi_p(y_i;\mu_{z_i},\Sigma_{z_i}).$ Repeated use of [F9] constructs the finite product measures, including $\nu\otimes\#$, and preserves sigma-finiteness. AC supplies the countable-choice premise of [F11] by [F10]; repeated use of [F11] then identifies $\nu=\lambda_p^{\otimes n}$ with Euclidean Lebesgue measure on $\mathbb R^{pn}$. For each component, [F1,F2] and finite-sum additivity [F18] give $\int f_\eta(y_i)\,\lambda_p(dy_i)=\sum_k\pi_k=1$. Distributing the finite sum over labels gives $\sum_{z\in Z}p(\eta,y,z)=\prod_i f_\eta(y_i)$. Repeated Tonelli integration [F12] therefore gives $\sum_{z\in Z}\int_Yp(\eta,y,z)\,\nu(dy)=\int_Y\prod_i f_\eta(y_i)\,\nu(dy)=\prod_i\int_{\mathbb R^p}f_\eta(y_i)\,\lambda_p(dy_i)=1.$ Thus $p$ is normalized on each parameter fibre as required by [F3]. [A1, F1, F2, F3, F9, F10, F11, F12, F18, step 1.1, algebra]

3.1 For a fixed observed sample $x_{1:n}$, summing the complete density over the finite label set yields $m_\eta(x_{1:n})=\sum_{z\in Z}p(\eta,x_{1:n},z)=\prod_i\sum_k\pi_k\phi_p(x_i;\mu_k,\Sigma_k)=\prod_i f_\eta(x_i).$ Every factor is finite and strictly positive by [F1,F2], so this marginal is positive and finite. Its logarithm is exactly the likelihood $\ell(\eta;x_{1:n})$ in the statement. By [F4], every normalized posterior $q_\eta^{x_{1:n}}(z)=p(\eta,x_{1:n},z)/m_\eta(x_{1:n})$ is a probability mass function. More explicitly it is $q_\eta^{x_{1:n}}(z)=\prod_i\gamma_{i,z_i}(\eta),$ and every one of its finitely many masses is positive. [F1, F2, F3, F4, step 2.1, algebra]

4.1 At any current parameter $\theta$ and its exact update $\theta'$, both posterior measures obtained from the probability masses in step 3.1 by [F17] are strictly positive on the same finite label set. Hence $q_\theta^{x_{1:n}}\ll q_{\theta'}^{x_{1:n}}$, and the directional KL divergence is a sum of finitely many finite terms by [F8], so it is finite. For each $z$, $p(\theta,x_{1:n},z)$ and $p(\theta',x_{1:n},z)$ are strictly positive and finite; their logarithms are finite. The posterior expectations of the absolute log densities are finite sums and therefore finite. Thus every admissibility condition in [F5,F6] holds for this current/candidate pair. [F5, F6, F8, F17, step 3.1, algebra]

4.2 The posterior in step 3.1 factors over observations. Taking the finite expectation of the complete log density gives $\sum_{z\in Z}q_\theta^{x_{1:n}}(z)\log p(\vartheta,x_{1:n},z)=\sum_{i=1}^n\sum_{k=1}^K\gamma_{ik}(\theta)\log\!\left(\rho_k\phi_p(x_i;m_k,V_k)\right)=Q(\vartheta\mid\theta),$ where $Q$ is the function in [F7]. Indeed, expand $\log p$ as the sum over $i$, sum first over $z_i=k$, and use $\sum_{j\ne i}\sum_{z_j}\gamma_{j,z_j}(\theta)=1$ for each other coordinate. This is a finite-sum identity, and all terms are finite by step 3.1. [F1, F7, step 3.1, algebra]

5.1 The local exact M-step result [F7] says $\theta'$ globally maximizes this same Q over the full mixture domain. Step 4.1 verifies that both $\theta$ and $\theta'$ are admissible, so the two-point candidate set $\{\theta,\theta'\}$ is admissible and contains the current parameter; the global maximizer $\theta'$ is therefore an attained maximizer over this set as required by the exact mode of [F5]. Consequently $Q(\theta'\mid\theta)\ge Q(\theta\mid\theta)$. Applying the identity and nonnegativity conclusion of [F6], with the verified conditions from step 4.1, yields $\ell(\theta';x_{1:n})-\ell(\theta;x_{1:n})=Q(\theta'\mid\theta)-Q(\theta\mid\theta)+D(q_\theta^{x_{1:n}}\|q_{\theta'}^{x_{1:n}})\ge0.$ Thus one exact update does not decrease observed log likelihood. [F5, F6, F7, step 4.1, step 4.2, algebra]

6.1 Initially $\theta_0$ is in the mixture domain by hypothesis. If $\theta_t$ is in that domain, step 3.1 supplies positive finite marginals and positive responsibilities, and [F7] supplies the next positive weights and SPD covariances; hence $\theta_{t+1}$ is again in the domain. Induction gives valid parameters through $T$, and step 5.1 applies at each $t<T$, proving every displayed likelihood inequality. This proves the claim without asserting strict increase or convergence. [given, F1, F7, step 3.1, step 5.1, induction] ∎
