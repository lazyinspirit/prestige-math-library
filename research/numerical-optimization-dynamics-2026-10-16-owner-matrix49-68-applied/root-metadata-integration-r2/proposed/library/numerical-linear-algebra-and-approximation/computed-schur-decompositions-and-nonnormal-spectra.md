---
page: computed-schur-decompositions-and-nonnormal-spectra
title: Computed Schur decompositions and nonnormal spectra
status: draft
items:
  - def-real-and-complex-schur-forms
  - def-exact-real-2x2-discriminant-sign-predicate
  - def-closed-epsilon-pseudospectrum
  - lem-unitary-similarity-error-accumulation
  - lem-neumann-invertibility-for-finite-matrices
  - lem-implicit-q-uniqueness-for-unreduced-hessenberg
  - lem-francis-compact-bulge-support-propagation
  - alg-complex-scaled-householder-reflector-step
  - lem-real-francis-double-shift-polynomial
  - thm-closed-pseudospectrum-resolvent-perturbation-equivalence
  - thm-bauer-fike-eigenvalue-perturbation-bound
  - alg-exact-francis-hessenberg-qr-step
  - lem-francis-double-shift-bulge-chase-matches-explicit-qr
  - alg-finite-budget-francis-schur-reduction
  - thm-computed-francis-schur-backward-error
  - thm-computed-pseudospectrum-membership-enclosure
  - lem-two-sided-scaled-householder-similarity-error
  - lem-exact-rational-two-by-two-discriminant-sign
  - thm-finite-budget-francis-schur-termination-and-status
examples: []
---

This page defines real and complex Schur forms and a finite-budget Hessenberg QR procedure. An exact real-block discriminant predicate fixes the Schur stop condition. A finite integer recipe evaluates it for exact rational or dyadic encodings; general stored reals without an available exact evaluator retain `schur-type-undecided`. The exact QR routine uses a complex single shift or a real Francis double shift, applies finite Householder bulge chases, records deflations, consumes declared exceptional shifts after stagnation, and returns explicit budget, range, and invariant-failure statuses. A local support invariant proves that each length-2/3 chase restores the Hessenberg pattern and preserves the initial vector direction. Its exact updates are unitary similarities. The real double-shift chase agrees with two explicit shifted QR steps under the stated unreduced and nonsingular hypotheses ([[lem-francis-double-shift-bulge-chase-matches-explicit-qr]]). No shift schedule is claimed to converge unconditionally.

The computed procedure [[alg-finite-budget-francis-schur-reduction]] returns the reflector product, a Schur residual diagnostic, an exact zero orthogonality bound for that product representation, and recorded deflation changes. Its certificate bookkeeping carries an outward upper bound $\rho$ for each current Frobenius norm and an accumulated sum $C_{\rm acc}$ across every similarity and deflation stage; unavailable rigorous evaluations leave the certificate inconclusive. The theorem [[thm-computed-francis-schur-backward-error]] proves that the returned accumulator dominates the conditional backward-error sum. The theorem retains the general conditional local-update statement and instantiates it with the proved real/complex coefficient $\alpha=a+b+ab$: a left target-overwrite or separate-panel coefficient and a right separate-block coefficient. The canonical complex arithmetic includes stable scaled phase formation. Deflation errors, pure-deflation identity stages and rounded dense-factor diagnostics remain separate, with explicit arithmetic/range hypotheses.

For a simple eigenvalue branch of a differentiable matrix path, with compatible differentiable right and left eigenvectors normalized by $y(t)^*x(t)=1$, reuse [[thm-derivative-of-a-simple-eigenvalue-is-y-star-a-prime-x]] verbatim:

$$\lambda'(t)=y(t)^*A'(t)x(t).$$

The published normwise first-order condition number [[prop-simple-eigenvalue-condition-number-is-norm-x-norm-y-over-y-star-x]] is likewise reused verbatim: for a simple eigenvalue $\lambda$ and compatible nonzero right and left eigenvectors $x,y$,

$$\kappa(\lambda;A)=\frac{\|x\|_2\|y\|_2}{|y^*x|},\qquad y^*x=1\ \Longrightarrow\ \kappa(\lambda;A)=\|x\|_2\|y\|_2.$$

These local sensitivity formulas do not give a same-size forward error estimate for an arbitrary nonnormal eigenvalue. Bauer–Fike retains the eigenvector condition factor $\kappa_2(V)$ for a diagonalization $A=V\Lambda V^{-1}$.

The closed $\epsilon$-pseudospectrum uses the singular-value condition $\sigma_{\min}(zI-A)\le\epsilon$. The local proof equates it with the resolvent threshold and with spectra of complex perturbations of spectral norm at most $\epsilon$; equality at the boundary is included. A computed smallest-singular-value interval classifies a point as inside, outside, or undecided. Its certificate uses the now-proved real/complex computed-SVD local arithmetic and includes the final modulus-readout allowance and any error in forming the stored shifted matrix.

The published Schur triangularisation theorem [[thm-schur-triangularisation]] is reused under its stated hypothesis that the characteristic polynomial splits over the scalar field: it supplies an orthonormal basis in which the matrix is upper triangular. That existence theorem does not prove convergence of this finite shift schedule or replace the real $2\times2$ block definition.

A separate finite-status theorem proves termination under the actual finite controls and terminating evaluator contracts; it preserves the identity representative for zero columns and the one-entry deflation norm bookkeeping.
