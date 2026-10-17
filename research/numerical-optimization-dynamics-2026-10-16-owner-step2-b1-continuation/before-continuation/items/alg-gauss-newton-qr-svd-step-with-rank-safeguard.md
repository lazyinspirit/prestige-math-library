---
id: alg-gauss-newton-qr-svd-step-with-rank-safeguard
kind: algorithm
title: "Gauss-Newton linearized least-squares step with QR/SVD rank safeguards"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-scaled-householder-reflector-formation-and-application
  - def-forward-and-back-substitution-for-triangular-systems
  - def-full-reduced-and-column-pivoted-computational-qr-factorisations
  - def-jacobian-matrix-and-gradient
  - def-truncated-singular-value-pseudoinverse-at-a-declared-threshold
  - thm-computed-full-rank-least-squares-backward-stability
  - thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number
  - thm-singular-value-decomposition
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 10, §10.2, printed pp. 251–253 / PDF pp. 270–272, and §10.3, printed pp. 254–255 / PDF pp. 273–274: reduced QR/SVD linear least squares and the Gauss–Newton subproblem."
    - title: "David Bindel, CS 4220: Numerical Analysis, Gauss-Newton and nonlinear least squares"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-04-10.html"
      locator: "Section Newton and Gauss-Newton: the Gauss-Newton step as a linear least-squares solve."
---

## Definition

Input a stored residual $r\in\mathbb R^m$, a stored Jacobian $J\in\mathbb R^{m\times n}$ with $m,n\ge1$ (using the convention of [[def-jacobian-matrix-and-gradient]]), a factorization mode QR or SVD, and a declared singular-value threshold $\tau\ge0$. A computed QR report may also carry a verified full-rank certificate $s>0$ asserting $\|Jv\|_2\ge s\|v\|_2$ for every $v\in\mathbb R^n$. The target exact step, when it is returned, is the unique minimizer of $\frac12\|r+Jp\|_2^2$ and hence solves $J^TJp=-J^Tr$; this target is asserted only on a full-column-rank branch. Do not form $J^TJ$ in either solve path.

For QR mode, either supply an exact reduced factorization $J=QR$ with $Q^TQ=I_n$, or compute one by setting $C=[J\mid-r]$ and, for $k=1,\ldots,n$, applying [[alg-scaled-householder-reflector-formation-and-application]] to the active part of column $k$ and all trailing columns of $C$, including its last right-hand-side column. Propagate the first factorization failure. In exact mode, a zero diagonal in $R$ returns rank-deficient; otherwise solve $Rp=Q^T(-r)$ by backward substitution and return exact-step($p$). In computed mode, a zero diagonal returns rank-deficient-candidate; a failed triangular solve returns linear-solve-failure; and a nonzero computed diagonal without an independently supplied full-rank certificate returns rank-unverified with the computed candidate but no full-rank claim. With a full-rank certificate, return computed-candidate($p$). The computed-QR backward-stability conclusion of [[thm-computed-full-rank-least-squares-backward-stability]] is attached only when all of that theorem's successful-execution, arithmetic, and nonsingularity hypotheses are supplied; otherwise no backward-stability conclusion is returned.

For SVD mode, the input includes an exact factorization $J=U\Sigma V^T$, or a computed report containing finite stored factors $\widehat U_1$, $\widehat\Sigma=\operatorname{diag}(\widehat\sigma_i)$ with nonnegative entries, and $\widehat V$, together with certified intervals $[\ell_i,u_i]$ satisfying $\ell_i\le\sigma_i(J)\le u_i$ for each of the $n$ singular values relevant to full column rank. In the exact case, if any $\sigma_i\le\tau$, return rank-below-threshold and no Gauss-Newton step. If every $\sigma_i>\tau$, return
$$p=-V\,\operatorname{diag}(\sigma_1^{-1},\ldots,\sigma_n^{-1})\,U_1^Tr,$$
where $U_1$ consists of the corresponding $n$ left singular vectors. For a computed report, if any $u_i\le\tau$, return rank-below-threshold; if any interval satisfies $\ell_i\le\tau<u_i$, return rank-unverified; if every lower endpoint exceeds $\tau$ but some stored $\widehat\sigma_i=0$, return factorization-failure; otherwise return the finite candidate
$$\widehat p=-\widehat V\,\operatorname{diag}(\widehat\sigma_1^{-1},\ldots,\widehat\sigma_n^{-1})\,\widehat U_1^Tr$$
with status computed-candidate and make no accuracy claim beyond the supplied report. The certified intervals determine only the threshold branch; no computed-SVD accuracy bound is asserted. A computed SVD routine is not defined here; the SVD branch consumes its report.

If $m<n$, return unsupported-shape; if the selected factorization reports failure, return factorization-failure; every status other than exact-step is explicitly not a certified exact full-rank Gauss-Newton step.

## Facts & Assumptions

**Given:** The matrix $J$, residual $r$, threshold $\tau$, chosen factorization report or computed factorization path, and the dimensions and statuses in the Definition.

[F1] [[def-full-reduced-and-column-pivoted-computational-qr-factorisations]]: a reduced QR factorization has $J=QR$, $Q^TQ=I_n$, and upper-triangular $R$.

[F2] [[thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number]]: for full-column-rank $J=QR$, the unique least-squares solution is the solution of $Rp=Q^Tb$.

[F3] [[thm-singular-value-decomposition]]: a finite-dimensional real matrix has orthonormal left and right singular vectors and nonnegative singular values giving its SVD.

[F4] [[def-truncated-singular-value-pseudoinverse-at-a-declared-threshold]]: a declared threshold retains singular values strictly greater than $\tau$ and discards those at or below $\tau$.

[F5] [[alg-scaled-householder-reflector-formation-and-application]]: each reflector call has finite loops and returns either its stated transformed block or a failure status.

[F6] [[thm-computed-full-rank-least-squares-backward-stability]]: after successful scaled Householder QR, reflector application, and triangular solve under its arithmetic bounds, a backward-stability conclusion is available only if the stated nonsingularity condition on the perturbed triangular factor also holds.

[F7] [[def-forward-and-back-substitution-for-triangular-systems]]: for an upper-triangular matrix with nonzero diagonal, backward substitution solves its triangular system by a finite descending recursion.

## Proof

1.1 In QR mode the loop has exactly $n$ calls. Each call either returns its specified block or a failure by [F5]; after a successful loop the diagonal and solve branches have finite checks and a finite recursion by [F7]. The SVD report is an input, so its branch uses only finitely many comparisons, reciprocal calculations above the strict threshold, and matrix-vector operations. Thus every input returns one of the listed statuses in finite work. [given, F5, F7, construct]

2.1 In the exact full-rank QR branch, [F1] and [F2] show that the returned solution of $Rp=Q^T(-r)$ uniquely minimizes $\|r+Jp\|_2$. In the exact SVD branch with all $\sigma_i>\tau\ge0$, orthogonality gives $J^TJ=V\Sigma_n^2V^T$ and $J^T(-r)=-V\Sigma_nU_1^Tr$, so the displayed $p$ solves the normal system; full column rank makes it unique, and [F3] gives the least-squares minimizer. If a threshold or rank test fails, the algorithm returns a status rather than asserting that minimizer. [F1, F2, F3, F4, step 1.1, algebra]

3.1 In computed QR mode, [F6] is used only with its exact hypotheses: a candidate without the required nonsingularity certificate is labeled rank-unverified, and no computed-SVD accuracy or rank claim is made from an interval that meets $\tau$. Therefore the finite-precision branches do not silently strengthen the exact full-rank result of step 2.1. [F4, F5, F6, step 1.1, step 2.1] ∎
