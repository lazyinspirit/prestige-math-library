---
id: thm-ip-finite-candidate-information-design-correctness
kind: theorem
title: Finite-candidate information design returns an exact or certified approximate optimum
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - alg-ip-finite-candidate-information-design
  - thm-ip-linear-gaussian-information-gain-logdet
  - def-axiom-of-choice
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost
  - thm-determinant-multiplicative
  - thm-determinant-of-a-triangular-matrix
  - thm-non-negative-square-root-exists-and-is-unique
  - lem-information-matrix-perturbation-bound
  - def-nonlinear-experimental-design-and-local-identifiability
  - lem-logdet-information-perturbation-bound
  - thm-rounded-cholesky-componentwise-and-normwise-backward-error
  - lem-rounded-triangular-substitution-componentwise-backward-error
  - thm-natural-logarithm-laws
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: >-
  The finite comparison and its tie rule are choice-free. The utility inherits
  the Axiom of Choice from the EIG/KL convention; the numerical error bounds
  use only the declared finite-dimensional error interfaces.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization, §3.1.5"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "The complete book was retrieved; §3.1.5, printed pp. 73–74, supports log-determinant perturbation context. The local finite-candidate guarantee is proved here."
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §§2.8–2.9"
      url: "https://fncbook.com/structure/"
      locator: "Cholesky factorization and rounded factorization context; the local certificate conditions retain the library's exact residual hypotheses."
---

## Statement

Assume AC for the library KL/EIG convention.

Assume the finite-candidate algorithm's hypotheses. A candidate is admissible when it is dimension-valid and its symmetric noise covariance is positive definite; let $\mathcal V$ be the ordered list of admissible candidates and let $\mathcal F=(d\in\mathcal V:c_d\le B)$ in the inherited order. For each $d\in\mathcal F$, let $U_d=\operatorname{EIG}(d)-c_d$ be its exact utility. In exact-real mode, if $\mathcal F$ is nonempty, the algorithm returns the first index in $\mathcal F$ attaining $\max_{d\in\mathcal F}U_d$; if $\mathcal V$ is empty it returns `all-inadmissible`, and if $\mathcal V$ is nonempty but $\mathcal F$ is empty it returns `budget-exhausted`.

For the floating-point mode, suppose each $d\in\mathcal F$ has a computed score $\widehat U_d$, a symmetric positive-semidefinite matrix $\widehat Z_d$, a successful factor $\widehat R_d$, and certified radii $\delta_d\ge0$, $0\le\rho_d<1$, and $\lambda_d\ge0$ such that
$$\|\widehat Z_d-Z_d\|_2\le\delta_d,\qquad \|\widehat R_d\widehat R_d^T-(I_{m_d}+\widehat Z_d)\|_2\le\rho_d,$$
where $Z_d$ is the exact Cholesky-whitened matrix in the algorithm's Definition, and
$$\left|\widehat U_d-\left(\frac12\log\det(\widehat R_d\widehat R_d^T)-c_d\right)\right|\le\lambda_d.$$
For example, the matrix-radius component can use the information-matrix perturbation result in its single-design, unit-weight $W=I$ specialization: if $Z_d=J_d^TJ_d$, $\widehat Z_d=\widehat J_d^T\widehat J_d$, $\|J_d\|_2\le K_d$, and $\|\widehat J_d-J_d\|_2\le\eta_d$, then $\delta_d\ge2K_d\eta_d+\eta_d^2$ is sufficient, with any separate formation residual added. A rounded triangular-solve backward-error bound must be converted to the needed forward matrix error using a verified conditioning bound. The rounded-Cholesky residual must follow from a successful factorization under its stated floating-point assumptions; in particular, the cited bound assumes $m u<1/5$, where $m=20m_d+20$ and $u$ is unit roundoff. The value $\lambda_d$ must bound the rounded logarithms, their summation, and cost evaluation. Set $\varepsilon_d=\frac{m_d}{2}\left(\delta_d+\frac{\rho_d}{1-\rho_d}\right)+\lambda_d$. If the algorithm returns a candidate $\widehat d$ with $\widehat U_{\widehat d}\ge\max_{d\in\mathcal F}\widehat U_d-\tau$, then
$$\max_{d\in\mathcal F}U_d-U_{\widehat d}\le\tau+\varepsilon_{d^*}+\varepsilon_{\widehat d}\le\tau+2\max_{d\in\mathcal F}\varepsilon_d,$$
where $d^*$ is any exact maximizer. If the certified score intervals show that the selected candidate's lower endpoint exceeds every earlier candidate's upper endpoint and is at least every later candidate's upper endpoint, it is the first exact maximizer. The matrix and factor radii must be certified under the published solve, information-matrix, rounded-Cholesky, and log-determinant error hypotheses; $\lambda_d$ must additionally cover rounded logarithm, summation, and cost evaluation.

## Statement references

[[alg-ip-finite-candidate-information-design|The exact scan, feasible set, tie rule, and floating-point certificate interface.]]

[[lem-information-matrix-perturbation-bound|Uniform sensitivity errors control the weighted information-matrix error.]]

[[def-nonlinear-experimental-design-and-local-identifiability|A one-point design with the linear sensitivity maps and unit weight instantiates the finite-design perturbation setting.]]

[[lem-logdet-information-perturbation-bound|A common positive eigenvalue floor controls log-determinant error.]]

[[thm-rounded-cholesky-componentwise-and-normwise-backward-error|A successful rounded Cholesky factorization supplies a residual bound under its operationwise hypotheses.]]

[[thm-natural-logarithm-laws|The natural logarithm turns positive products into sums.]]

## Facts & Assumptions

**Given:** The algorithm and candidate data in the Statement, and, for each floating-point candidate, the certified matrices and error radii stated there.

[A1] AC is inherited through the algorithm's EIG/KL convention. [[def-axiom-of-choice]]

[F1] The exact candidate utility is the linear-Gaussian EIG minus its declared cost; exact-mode updates replace the stored candidate only on a strictly greater score, and floating mode selects the first score at least $\max_d\widehat U_d-\tau$. [[alg-ip-finite-candidate-information-design]]

[F2] For $C\succeq0$ and $\Gamma_d\succ0$, $\operatorname{EIG}(d)=\frac12\log\det(I+\Gamma_d^{-1/2}A_dCA_d^T\Gamma_d^{-1/2})$. [[thm-ip-linear-gaussian-information-gain-logdet]]

[F3] A symmetric positive-definite matrix has a unique Cholesky factor; its triangular solves are the unique exact solutions and its triangular determinant is the product of its diagonal entries. [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]] [[thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost]] [[thm-determinant-of-a-triangular-matrix]]

[F4] Determinants are multiplicative on same-sized finite square matrices. [[thm-determinant-multiplicative]]

[F5] A positive-semidefinite matrix has a unique positive-semidefinite square root. [[thm-non-negative-square-root-exists-and-is-unique]]

[F6] For a one-point approximate design with $\xi=1$, linear sensitivity maps on $\mathbb R^{m_d}$, and symmetric positive-definite weight $W=I$, if $Z=J^TJ$, $\widehat Z=\widehat J^T\widehat J$, $\|J\|_2\le K$, and $\|\widehat J-J\|_2\le\eta$, the information-matrix perturbation is at most $2K\eta+\eta^2$. [[def-nonlinear-experimental-design-and-local-identifiability]] [[lem-information-matrix-perturbation-bound]]

[F7] For symmetric matrices on a segment with eigenvalue floor $\alpha>0$, $|\log\det B-\log\det A|\le p\|B-A\|_2/\alpha$ in dimension $p$. [[lem-logdet-information-perturbation-bound]]

[F8] A successful rounded Cholesky factorization has its stated spectral residual bound when the operationwise arithmetic and unit-roundoff hypotheses hold. [[thm-rounded-cholesky-componentwise-and-normwise-backward-error]]

[F9] A successful rounded triangular solve has a componentwise backward-error bound under its stated normal-range and unit-roundoff hypotheses. [[lem-rounded-triangular-substitution-componentwise-backward-error]]

[F10] The natural logarithm is multiplicative on positive products: $\log(xy)=\log x+\log y$, and $\log(x^2)=2\log x$ for $x>0$. [[thm-natural-logarithm-laws]]

## Proof

**Given:** The hypotheses and notation in the Statement.

1.1 For a valid candidate, $\Gamma_d=L_dL_d^T$ and $V_d=L_d^{-1}A_d$, so $Z_d=V_dCV_d^T$ is symmetric positive semidefinite. Hence $H_d=I_{m_d}+Z_d$ is positive definite and has the Cholesky factor used by the exact algorithm. [given, F1, F3, algebra]

1.2 In floating-point mode, when $\widehat Z_d=\widehat J_d^T\widehat J_d$ and $Z_d=J_d^TJ_d$, [F6] supplies $\delta_d\ge2K_d\eta_d+\eta_d^2$ from certified bounds $\|J_d\|_2\le K_d$ and $\|\widehat J_d-J_d\|_2\le\eta_d$; any rounded matrix-formation residual is included in the supplied $\delta_d$. Both $I+Z_d$ and $I+\widehat Z_d$ have eigenvalues at least $1$, and every matrix on their segment does too. Applying [F7] gives $|\log\det(I+\widehat Z_d)-\log\det(I+Z_d)|\le m_d\delta_d$. [given, F6, F7, algebra]

1.3 Put $E_d=\widehat R_d\widehat R_d^T-(I+\widehat Z_d)$. Every matrix $I+\widehat Z_d+tE_d$ has quadratic form at least $(1-t\rho_d)\|v\|_2^2\ge(1-\rho_d)\|v\|_2^2$, since $I+\widehat Z_d\succeq I$ and $\|E_d\|_2\le\rho_d<1$. Applying [F7] on this segment yields $|\log\det(\widehat R_d\widehat R_d^T)-\log\det(I+\widehat Z_d)|\le m_d\rho_d/(1-\rho_d)$. Under the successful rounded-factorization hypotheses, [F8] provides such a residual radius. [F9] supplies only a backward-error constraint for triangular solves; any forward matrix error used in $\delta_d$ must additionally account for conditioning. [given, F7, F8, F9, algebra]

2.1 Put $Q_d=A_dCA_d^T$ and $W_d=\Gamma_d^{-1/2}$. The square-root identity [F5] gives $\Gamma_d+Q_d=\Gamma_d^{1/2}(I_{m_d}+W_dQ_dW_d)\Gamma_d^{1/2}$. By [F4], $\det(\Gamma_d+Q_d)=\det(\Gamma_d^{1/2})^2\det(I_{m_d}+W_dQ_dW_d)=\det(\Gamma_d)\det(I_{m_d}+W_dQ_dW_d)$. Also step 1.1 gives $\Gamma_d+Q_d=L_dH_dL_d^T$, so [F3]–[F4] give $\det(\Gamma_d+Q_d)=\det(\Gamma_d)\det(H_d)$ with $\det(\Gamma_d)=(\det L_d)^2>0$. Dividing proves $\det(I_{m_d}+W_dQ_dW_d)=\det(H_d)$. By [F2], the exact EIG is $\tfrac12\log\det(H_d)$. By [F3], $\det(H_d)=\det(R_dR_d^T)=(\prod_j(R_d)_{jj})^2$; all Cholesky diagonal entries are positive, so [F10] gives $\tfrac12\log\det(H_d)=\sum_j\log(R_d)_{jj}$. Thus the algorithm's exact score equals $U_d$. [A1, given, F2, F3, F4, F5, F10, step 1.1, algebra]

2.2 The certificate's $\lambda_d$ bounds the remaining rounded log, summation, and cost evaluation. Combining it with steps 1.2, 1.3, the log-determinant perturbation [F7], and the factor $1/2$ in the EIG formula gives $|\widehat U_d-U_d|\le\varepsilon_d$. [given, F7, step 1.2, step 1.3, algebra]

3.1 For the exact scan, after the first feasible candidate the stored candidate is the first maximum of that one-element prefix. When the next candidate is processed, [F1] says a strictly larger score replaces it; an equal or smaller score leaves it in place, preserving the earliest maximizing index. Repeating this finite comparison through the ordered feasible list proves the final stored candidate is the first global maximizer. The validity and budget tests likewise make `all-inadmissible` and `budget-exhausted` exactly the two stated empty-feasible-set cases. [given, F1, step 2.1, algebra]

3.2 Let $d^*$ maximize exact utility and let $\widehat d$ be the selected computed $\tau$-maximizer. By [F1] and the hypothesis, $\widehat U_{\widehat d}\ge\max_d\widehat U_d-\tau$. Then $U_{d^*}\le\widehat U_{d^*}+\varepsilon_{d^*}\le\max_d\widehat U_d+\varepsilon_{d^*}$, while $U_{\widehat d}\ge\widehat U_{\widehat d}-\varepsilon_{\widehat d}\ge\max_d\widehat U_d-\tau-\varepsilon_{\widehat d}$. Subtracting gives the stated gap bound. [given, F1, step 2.2, algebra]

4.1 If the selected interval's lower endpoint exceeds each earlier upper endpoint and is at least each later upper endpoint, then every earlier exact utility is strictly smaller and every later exact utility is no larger. Thus the selected candidate is the first exact maximizer. [given, algebra] ∎

