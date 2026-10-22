---
id: alg-ip-finite-candidate-information-design
kind: algorithm
title: Finite-candidate information design
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-ip-design-indexed-inverse-experiment
  - def-ip-expected-information-gain
  - thm-ip-linear-gaussian-information-gain-logdet
  - thm-non-negative-square-root-exists-and-is-unique
  - def-cholesky-factorisation-with-positive-diagonal
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost
  - thm-determinant-of-a-triangular-matrix
  - def-determinant-of-a-square-matrix
  - def-natural-logarithm
  - alg-rounded-cholesky-with-failure-status
  - lem-rounded-triangular-substitution-componentwise-backward-error
  - thm-rounded-cholesky-componentwise-and-normwise-backward-error
  - lem-information-matrix-perturbation-bound
  - lem-logdet-information-perturbation-bound
  - def-nonlinear-experimental-design-and-local-identifiability
justified_by: []
forward_refs: []
axiom_use: >-
  The finite scan and its deterministic tie rule are choice-free. The exact
  utility inherits AC from the EIG/KL convention; no arbitrary selection among
  the finite candidates is made.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Carl Edward Rasmussen and Christopher K. I. Williams, Gaussian Processes for Machine Learning, MIT Press (2006)"
      url: "https://gaussianprocess.org/gpml/chapters/RW.pdf"
      locator: "Chapter 2, Algorithm 2.1 and equation (2.30): Cholesky solves and log determinant from a positive-diagonal triangular factor."
    - title: "Kathryn Chaloner and Isabella Verdinelli, Bayesian Experimental Design: A Review, Statistical Science 10(3) (1995), 273–304"
      url: "https://www.stat.cmu.edu/tr/tr599/tr599.ps"
      locator: "§2.2, expected information criterion in the normal linear model."
---

## Definition

Assume AC for the library KL/EIG convention. Input a prior covariance $C\in\mathbb R^{n\times n}$ with $n\ge1$ symmetric positive semidefinite, a finite ordered list of raw candidate records $(A_d,\Gamma_d,c_d)_{d=1}^N$, and a real budget $B$. Each stored $A_d$ and $\Gamma_d$ is a finite real matrix, with its dimensions part of the input, and each declared cost $c_d$ is finite and real. A candidate is dimension-valid when $A_d$ has at least one row and exactly $n$ columns and $\Gamma_d$ is a symmetric square matrix whose dimension equals the row count of $A_d$; for a dimension-valid candidate write that common positive dimension as $m_d$. The prior mean is immaterial to the score.

Interpret each admissible candidate $d$ (dimension-valid with $\Gamma_d$ positive definite) as a separate singleton-design dominated inverse experiment with prior $\theta\sim N_n(m_0,C)$ for any $m_0\in\mathbb R^n$, observation space $\mathbb R^{m_d}$ with Lebesgue measure, and observation $Y_d=A_d\theta+\eta_d$, where $\eta_d\sim N_{m_d}(0,\Gamma_d)$ is independent of $\theta$. Here $\operatorname{EIG}(d)$ is the expected information gain from the preceding definition for that singleton experiment. Different candidates may have different $m_d$ because each is evaluated on its own observation space. The score is independent of $m_0$.

In exact-real arithmetic, process the list in order. Mark a candidate inadmissible if it is not dimension-valid or if its noise covariance $\Gamma_d$ is not positive definite. For each remaining candidate with $c_d\le B$, compute the Cholesky factor $\Gamma_d=L_dL_d^T$ with positive diagonal, solve $L_dV_d=A_d$ by forward substitution, and form the symmetric positive-semidefinite matrix $Z_d=V_dCV_d^T$. Set $H_d=I_{m_d}+Z_d$ and compute its Cholesky factor $H_d=R_dR_d^T$. Assign the utility
$$U_d=\sum_{j=1}^{m_d}\log (R_d)_{jj}-c_d=\tfrac12\log\det(H_d)-c_d.$$
Initialize the stored best candidate as unset. For each admissible candidate meeting the budget, set it if unset; otherwise replace it exactly when the new utility is strictly greater than the stored utility. After the scan, return the stored candidate. This update rule preserves the first index in any tie. If every candidate is inadmissible, return `all-inadmissible`; if at least one candidate is admissible but none meets the budget, return `budget-exhausted`.

In floating-point mode, use the failure-aware Cholesky and triangular-solve procedures. Certify the positive-definiteness status of every dimension-valid $\Gamma_d$; a failed rounded factorization alone is not evidence that $\Gamma_d$ is not positive definite. If any candidate's admissibility cannot be certified, return `numerically-unresolved`. Once admissibility is certified, return `all-inadmissible` if none is admissible and `budget-exhausted` if none meets the budget. Otherwise require a certified interval $[\widehat U_d-\varepsilon_d,\widehat U_d+\varepsilon_d]$ for each feasible candidate's exact utility. One admissible score certificate supplies a positive-semidefinite computed matrix $\widehat Z_d$ with $\|\widehat Z_d-Z_d\|_2\le\delta_d$, a successful computed Cholesky factor $\widehat R_d$ with $\|\widehat R_d\widehat R_d^T-(I+\widehat Z_d)\|_2\le\rho_d<1$, and a remaining log/summation/cost evaluation radius $\lambda_d$. It sets
$$\varepsilon_d=\frac{m_d}{2}\left(\delta_d+\frac{\rho_d}{1-\rho_d}\right)+\lambda_d.$$
The matrix radius may be certified by the published information-matrix perturbation bound in its single-design, unit-weight $W=I$ case. Factor $C$ as $C^{1/2}C^{1/2}$ and set $J_d=C^{1/2}V_d^T$; for a computed solve $\widehat V_d$, set $\widehat J_d=C^{1/2}\widehat V_d^T$. Then $Z_d=J_d^TJ_d$ and $\widehat Z_d=\widehat J_d^T\widehat J_d$. The lemma's finite-design hypotheses hold for the one-point sensitivity maps $z\mapsto J_dz$ and $z\mapsto\widehat J_dz$ on $\mathbb R^{m_d}$, with weight $W=I$ and design weight $1$. If $\|J_d\|_2\le K_d$ and $\|\widehat J_d-J_d\|_2\le\eta_d$, then $\delta_d$ may be any verified bound at least $2K_d\eta_d+\eta_d^2$, enlarged by any separate matrix-formation residual. A rounded triangular-solve backward-error bound must be converted to the required forward matrix bound using verified conditioning; any rounding in the covariance-root multiply is included in $\eta_d$ or the formation residual. The published rounded-Cholesky and log-determinant perturbation results supply their stated components under their own hypotheses. A missing or failed certificate returns `numerically-unresolved` and no optimum claim. Given a comparison tolerance $\tau\ge0$, compute $M=\max_{d\text{ feasible}}\widehat U_d$ and return the first feasible candidate with $\widehat U_d\ge M-\tau$. Its true utility gap is at most $\tau+2\max_d\varepsilon_d$. If the selected candidate's lower interval endpoint exceeds every earlier candidate's upper endpoint and is at least every later candidate's upper endpoint, return it as the certified first exact maximizer. The algorithm makes no bit-complexity claim for exact-real comparisons.

## Definition references

[[thm-ip-linear-gaussian-information-gain-logdet|The exact linear-Gaussian EIG is a log determinant, including singular state covariance.]]

[[def-ip-design-indexed-inverse-experiment|Each candidate's Gaussian model is a singleton design in the dominated-experiment convention.]]

[[def-ip-expected-information-gain|EIG is the extended prior-predictive posterior-to-prior KL integral.]]

[[thm-non-negative-square-root-exists-and-is-unique|A positive-semidefinite prior covariance has a positive-semidefinite square root for the Gram representation.]]

[[def-cholesky-factorisation-with-positive-diagonal|Cholesky factors are lower triangular with positive diagonal.]]

[[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique|Every symmetric positive-definite matrix has a unique positive-diagonal Cholesky factor.]]

[[thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost|Cholesky triangular solves evaluate positive-definite systems without forming an inverse.]]

[[thm-determinant-of-a-triangular-matrix|The determinant of a triangular matrix is the product of its diagonal entries.]]

[[def-determinant-of-a-square-matrix|The log-determinant score uses the usual determinant of a finite square matrix.]]

[[def-natural-logarithm|The logarithm in the score is the natural logarithm.]]

[[alg-rounded-cholesky-with-failure-status|The floating-point factorization reports success or its first pivot/operation failure.]]

[[lem-rounded-triangular-substitution-componentwise-backward-error|Successful rounded triangular solves have the stated componentwise backward error.]]

[[thm-rounded-cholesky-componentwise-and-normwise-backward-error|Successful rounded Cholesky gives the stated factorization residual bounds.]]

[[lem-information-matrix-perturbation-bound|Uniform factor and solve errors imply the stated information-matrix perturbation bound.]]

[[def-nonlinear-experimental-design-and-local-identifiability|A one-point approximate design with a linear sensitivity map and weight matrix $W=I$ satisfies the finite-design setting.]]

[[lem-logdet-information-perturbation-bound|A positive eigenvalue floor controls log-determinant perturbation.]]

[Rasmussen and Williams, Chapter 2, Algorithm 2.1 and equation (2.30)](https://gaussianprocess.org/gpml/chapters/RW.pdf)

[Chaloner and Verdinelli, §2.2](https://www.stat.cmu.edu/tr/tr599/tr599.ps)

## Remarks

This procedure is for the specified finite linear-Gaussian candidates. A Monte Carlo estimate of nonlinear EIG is a different procedure and inherits no exact finite optimum guarantee from this algorithm.

Any solve-error certificate must convert triangular-solve backward error to the required matrix error using a verified conditioning bound. Backward error alone is not a forward-error bound.

## Remarks references

[[thm-ip-linear-gaussian-information-gain-logdet|The exact log-determinant formula applies to the linear-Gaussian model stated there.]]

[[lem-rounded-triangular-substitution-componentwise-backward-error|A rounded triangular-solve certificate is a backward-error statement and requires conditioning to produce a forward bound.]]

[MacKay, §6.1, model-correctness caveat](https://gwern.net/doc/reinforcement-learning/exploration/active-learning/1992-mackay.pdf)
