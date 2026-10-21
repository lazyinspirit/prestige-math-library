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

In floating-point mode, treat each finite stored floating-point matrix entry, cost, budget, and tolerance as the exact real number represented by that value; no uncertainty in these input data is included. Use failure-aware Cholesky and triangular-solve procedures, and take a certificate provider as part of the floating-point input. Each provider result is a finite, independently checkable certificate; if the provider cannot certify a required fact, it returns `unresolved`.

Process the candidates in list order. Test dimensions and symmetry exactly, marking a dimension-invalid candidate inadmissible. For each dimension-valid noise matrix $\Gamma_d$, call `CertifyPositiveDefiniteness(\Gamma_d)`. It returns `positive-definite` only with a checkable positive-definiteness certificate, `not-positive-definite` only with a checkable certificate, or `unresolved`. For example, an exact factorization $\Gamma_d=L L^T$ with $L$ lower triangular and positive diagonal certifies positive definiteness, while a nonzero vector $v$ with $v^T\Gamma_dv\le0$ certifies that it is not positive definite. A failed rounded Cholesky factorization is not a certificate of non-positive-definiteness. If any required status is unresolved, return `numerically-unresolved`. After all statuses are certified, return `all-inadmissible` if none is admissible. Compare each admissible stored cost to the stored budget exactly; if none meets it, return `budget-exhausted`.

For each feasible candidate $d$ in inherited order, call `CertifyScore(d)`. It first runs failure-aware rounded Cholesky on $\Gamma_d$ and, on success, failure-aware forward substitution on each column of $A_d$ in order; any operation failure or unmet range hypothesis returns `unresolved`. After forming a certified positive-semidefinite $\widehat Z_d$, it forms a stored matrix $\widehat H_d$ and certifies both that $\widehat H_d$ is symmetric positive definite and that $\|\widehat H_d-(I_{m_d}+\widehat Z_d)\|_2\le\sigma_d$ for a rational bound $\sigma_d\ge0$. It then runs failure-aware rounded Cholesky on $\widehat H_d$; a failed definiteness check, factorization, or formation bound returns `unresolved`. The call then returns either `certified` with finite stored values $\widehat U_d$, $\widehat Z_d$, and $\widehat R_d$, nonnegative rational upper bounds $\delta_d,\rho_d,\lambda_d$, and certificates for all of the following, or `unresolved`:

- $\widehat Z_d$ is symmetric positive semidefinite and $\|\widehat Z_d-Z_d\|_2\le\delta_d$, where $Z_d$ uses the exact Cholesky factor of the represented $\Gamma_d$. This bound includes rounding in forming the Cholesky factor and triangular solve for $\Gamma_d$, the covariance square root, and the matrix products.
- $\widehat R_d$ is a successful lower-triangular Cholesky factor with positive diagonal. If $\widetilde\rho_d$ is a certified upper bound for $\|\widehat R_d\widehat R_d^T-\widehat H_d\|_2$, choose a rational $\rho_d\ge\widetilde\rho_d+\sigma_d$ with $\rho_d<1$; then $\|\widehat R_d\widehat R_d^T-(I_{m_d}+\widehat Z_d)\|_2\le\rho_d$.
- $\left|\widehat U_d-\left(\frac12\log\det(\widehat R_d\widehat R_d^T)-c_d\right)\right|\le\lambda_d$. Evaluate the exact expression as $\sum_j\log((\widehat R_d)_{jj})-c_d$ using the triangular determinant identity; $\lambda_d$ covers rounded logarithms, their summation, and cost evaluation.

The matrix radius may be certified by the published information-matrix perturbation bound in its single-design, unit-weight $W=I_n$ case. Factor $C$ as $C^{1/2}C^{1/2}$ and set $J_d=C^{1/2}V_d^T$; for a computed solve $\widehat V_d$, set $\widehat J_d=C^{1/2}\widehat V_d^T$. Then $Z_d=J_d^TJ_d$ and $\widehat Z_d=\widehat J_d^T\widehat J_d$. The lemma's finite-design hypotheses hold for the one-point sensitivity maps $z\mapsto J_dz$ and $z\mapsto\widehat J_dz$ from $\mathbb R^{m_d}$ to $\mathbb R^n$, with weight $W=I_n$ and design weight $1$. If $\|J_d\|_2\le K_d$ and $\|\widehat J_d-J_d\|_2\le\eta_d$, then $\delta_d$ may be any verified bound at least $2K_d\eta_d+\eta_d^2$, enlarged by any separate matrix-formation residual. A rounded triangular-substitution bound may be used only after checking its $(m_d+3)u<1$ and normal-range, finite-operation hypotheses for every right-hand side. Convert its backward-error bound to the required forward matrix bound using verified conditioning; a solve backward-error bound alone does not certify $\eta_d$. For the published rounded-Cholesky normwise bound, verify success and its operationwise model, put $q=20m_d+20$ and $g=qu/(1-qu)$, and check $qu<1/5$ before using $100g\|\widehat R_d\|_F^2$ as a residual bound; if using its relative bound, also check $100\sqrt{m_d}g\le1/2$. The log-determinant perturbation bound is applied on the two symmetric matrix segments with eigenvalue floors $1$ and $1-\rho_d$. A missing or failed certificate returns `numerically-unresolved` and no optimum claim.

Set $\varepsilon_d=\frac{m_d}{2}\left(\delta_d+\frac{\rho_d}{1-\rho_d}\right)+\lambda_d$ and form the exact rational interval $[\widehat U_d-\varepsilon_d,\widehat U_d+\varepsilon_d]$. Given a finite nonnegative stored tolerance $\tau$, compute $M=\max_{d\text{ feasible}}\widehat U_d$ and return the first feasible candidate with $\widehat U_d\ge M-\tau$. Certify the comparisons exactly on the represented floating-point values and rational bounds; if any comparison needed for this branch or for its interval certificate is undecided, return `numerically-unresolved`. The returned candidate's true utility gap is at most $\tau+2\max_d\varepsilon_d$. If its lower interval endpoint exceeds every earlier candidate's upper endpoint and is at least every later candidate's upper endpoint, certify it as the first exact maximizer. The algorithm makes no bit-complexity claim for exact-real comparisons.

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
