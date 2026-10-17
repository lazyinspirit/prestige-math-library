---
id: thm-matrix-function-rational-contour-error-bound
kind: theorem
title: "A resolvent contour bound transfers scalar rational error to matrices"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-analytic-primary-matrix-function
  - thm-analytic-primary-matrix-function-jordan-contour-agreement
  - thm-complex-resolvent-cover-certificate-soundness
  - def-complex-infinity-matrix-norm
  - lem-complex-infinity-matrix-norm-submultiplicative
  - def-complex-contours-reversal-concatenation-and-closedness
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jan Zur, Matrix Functions, TU Berlin full lecture notes"
      url: "https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf"
    - title: "Nicholas J. Higham, Functions of Matrices, Handbook of Linear Algebra, Chapter 17"
      url: "https://eprints.maths.manchester.ac.uk/2109/1/fm2_final_njh.pdf"
---

## Statement

Let $A\in\mathbb C^{n\times n}$ with $n\ge1$, let $f$ be holomorphic on an open
$\Omega\subseteq\mathbb C$ containing $\sigma(A)$, and let $r$ be rational
with no pole on $\Omega$. Let $\Gamma$ be an admissible Cauchy cycle for $A$
contained in $\Omega$. Write its finite chain representation as $\Gamma=\sum_\nu m_\nu\gamma_\nu$ with integer coefficients and define its coefficient-weighted length by $L_\Gamma:=\sum_\nu|m_\nu|L(\gamma_\nu)$. The integral and this length use the same signed-chain representation. Suppose
$$\sup_{z\in\Gamma}|f(z)-r(z)|\le\varepsilon,\qquad \sup_{z\in\Gamma}\|(zI-A)^{-1}\|_{\infty,\mathbb C}\le M.$$
Then
$$\|f(A)-r(A)\|_{\infty,\mathbb C} \le \frac{L_\Gamma}{2\pi}\,\varepsilon M.$$
The resolvent hypothesis may be supplied by the diskwise certificate of
[[thm-complex-resolvent-cover-certificate-soundness]]. A scalar disk error
alone does not give this matrix bound for a nonnormal matrix.

## Facts & Assumptions

**Given:** $A,f,r,\Omega,\Gamma,L_\Gamma,\varepsilon,M$ as in the statement.

[F1] Analytic primary matrix functions have the Cauchy-cycle representation
([[thm-analytic-primary-matrix-function-jordan-contour-agreement]]).

[F2] The complex infinity matrix norm is the maximum absolute row sum
([[def-complex-infinity-matrix-norm]]) and is submultiplicative
([[lem-complex-infinity-matrix-norm-submultiplicative]]).

[F3] The resolvent certificate gives the stated uniform bound on the supplied
contour when its disk inequalities hold
([[thm-complex-resolvent-cover-certificate-soundness]]).

## Proof

1.1 Since $f$ and $r$ are holomorphic on $\Omega$, [F1] applied to each gives $f(A)-r(A)=\frac{1}{2\pi i}\int_\Gamma (f(z)-r(z))(zI-A)^{-1}\,dz.$ The cycle is disjoint from $\sigma(A)$, so every resolvent in the integrand exists. [given, F1]

1.2 Write the finite chain integral as $\sum_\nu m_\nu\int_{\gamma_\nu}G$. Parametrize each rectifiable contour piece by arc length. Multiplying its estimate by $|m_\nu|$ and applying the triangle inequality to the finite chain sum gives the coefficient-weighted total $\sum_\nu|m_\nu|L(\gamma_\nu)=L_\Gamma$, including zero or negative coefficients. For every row, the absolute value of the integral is at most the integral of the absolute value; summing the row bounds and using [F2] gives $\left\|\int_\Gamma G(z)\,dz\right\|_{\infty,\mathbb C} \le L_\Gamma\sup_{z\in\Gamma}\|G(z)\|_{\infty,\mathbb C}.$ For $G(z)=(f(z)-r(z))(zI-A)^{-1}$, the hypotheses give $\sup_\Gamma\|G(z)\|_{\infty,\mathbb C}\le\varepsilon M$, with the resolvent bound certified by [F3]. [given, F2, F3, algebra]

2.1 Taking norms in step 1.1, applying step 1.2, and using $|1/(2\pi i)|=1/(2\pi)$ proves the claimed estimate. [step 1.1, step 1.2, algebra] ∎
