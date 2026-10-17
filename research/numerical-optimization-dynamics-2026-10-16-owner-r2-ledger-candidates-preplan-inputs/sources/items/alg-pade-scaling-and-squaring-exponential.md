---
id: alg-pade-scaling-and-squaring-exponential
kind: algorithm
title: "Finite-order Padé scaling-and-squaring exponential"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - def-diagonal-pade-approximant-for-exponential
  - def-complex-exponential
  - lem-diagonal-pade-remainder-bound
  - lem-scaling-and-squaring-error-recurrence
  - alg-pade-denominator-solve-by-householder-qr
  - thm-matrix-function-rational-contour-error-bound
  - alg-complex-resolvent-cover-validator
  - thm-complex-resolvent-cover-validator-soundness
  - def-complex-infinity-matrix-norm
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jan Zur, Matrix Functions, TU Berlin full lecture notes"
      url: "https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf"
    - title: "Awad H. Al-Mohy and Nicholas J. Higham, A New Scaling and Squaring Algorithm for the Matrix Exponential"
      url: "https://eprints.maths.manchester.ac.uk/1217/1/paper9.pdf"
---

## Definition

Input a finite complex matrix $A\in\mathbb C^{n\times n}$ whose stored entries
are representable in the operationwise model, a Padé order $m\ge0$, an integer
scaling count $s\ge0$, finite nonnegative integer Householder-candidate and squaring-operation budgets,
finite scalar-series budgets, and an
error policy that is either candidate-only or certify. The procedure never
selects adaptive Higham parameters. Certification data, including contour
vertices and the radius, have exact dyadic or rational encodings.

1. Interpret the stored entries of $A$ as their exact real/imaginary values and
   form $B=2^{-s}A$ exactly. Evaluate $P=p_m(B)$ and $Q=q_m(B)$ by exact
   controller matrix arithmetic: increasing-index sums/products and finite
   polynomial powers with their rational coefficients. Use the exact real-RAM
   controller declared in [[alg-pade-denominator-solve-by-householder-qr]];
   the optional rational adapter is used only when all required actual
   encodings are supplied. No dyadic representation is assumed for the
   abstract floating model.
2. Call [[alg-pade-denominator-solve-by-householder-qr]] on $QX=P$. If it
   returns a candidate, retain that candidate. If it returns a failure without
   a candidate, propagate its status. If the solve is not verified, continue
   only in candidate-only mode; certification mode returns
   denominator-unverified.
3. For $j=0,\ldots,s-1$, compute the next matrix square in the operationwise
   model. A range failure returns range-failure with the last candidate.
   Retain their exact stored real values and form
   $D_j=\widehat X_{j+1}-\widehat X_j^2$ by the exact controller's finite
   matrix loops. Set
   $\delta_j=\max_i\sum_k(|\operatorname{Re}(D_j)_{ik}|
   +|\operatorname{Im}(D_j)_{ik}|)$; this exact nonnegative real number bounds
   $\|D_j\|_{\infty,\mathbb C}$.
4. In candidate-only mode, return the final candidate with status
   unevaluated-error-bound. Certification mode has these caller preconditions,
   which the procedure does not itself verify: (a) a supplied polygonal Cauchy
   cycle $\Gamma$ with dyadic vertices, trace in a disk $|z|\le\rho$ for
   dyadic $\rho>0$, $\sigma(B)\subset\{|z|<\rho\}$, disjointness from
   $\sigma(B)$, index one on $\sigma(B)$, and null-homology in that disk;
   (b) $d_m(\rho)>0$; (c) a supplied finite dyadic resolvent-cover input for
   the singleton family $\{B\}$; and (d) a finite term budget $K$.
   The contour-validator call
   [[alg-complex-resolvent-cover-validator]] must return
   certified-resolvent-cover with bound $M$, or the procedure returns
   inconclusive-resolvent. The validator checks resolvent inequalities and
   segment coverage only; it does not validate the caller's topological
   preconditions or count enclosed eigenvalues. Here $\sigma(B)$ denotes the
   eigenvalue set of $B$ from
   [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]].
5. For $x=\rho$ and for
   $\alpha=\max_i\sum_j(|\operatorname{Re}A_{ij}|+
   |\operatorname{Im}A_{ij}|)$, compute an upper bound $U(x)$ for $e^x$ as
   follows. If $x=0$, set $U(x)=1$. Otherwise, if $x\ge K+2$, return
   inconclusive-scalar-tail. If $x<K+2$, put
   $r=x/(K+2)$,
   $U(x)=\sum_{k=0}^Kx^k/k!+
   [x^{K+1}/(K+1)!]/(1-r)$.
   The geometric tail bound makes $U(x)\ge e^x$.
6. Let $\ell$ be the sum, over the polygon segments, of
   $|\Delta\operatorname{Re}z|+|\Delta\operatorname{Im}z|$; then
   $\ell$ is an exact rational upper bound for the contour length (the supplied vertices have rational/dyadic encodings). Put
   $\epsilon=\rho^{2m+1}U(\rho)(m!)^2/
   ((2m)!(2m+1)!d_m(\rho))$. Since
   $\pi/4=\int_0^1(1+x^2)^{-1}\,dx$, the finite identity
   $1/(1+x^2)=\sum_{k=0}^7(-1)^kx^{2k}+x^{16}/(1+x^2)$ on $[0,1]$ gives
   $\pi/4>33976/45045>3/4$, hence $1/(2\pi)<1/6$. Set
   $E_0=\ell\epsilon M/6$.
7. For each squaring use
   $E_{j+1}=(2U(\alpha)+E_j)E_j+\delta_j$.
   If every computed certification check succeeded, the denominator solve
   returned verified-solution, and the caller preconditions hold, return the
   final candidate with status conditional-error-bound and bound $E_s$.
   Otherwise retain the candidate and return
   the corresponding inconclusive status.

The exact controller uses only prescribed finite field-expression trees and
loops over dimensions, $m,s$ and the finite scalar-series term budget $K$;
absolute values/maxima use exact comparisons. It performs no additional
unprovided certification call. Count every rounded real primitive of a square
in row-major/increasing inner-index order against an explicitly supplied
finite squaring-operation budget, and propagate `budget-exhausted` before an
unaffordable operation. The solve uses its separately supplied finite
candidate-operation budget. Exact controller work is separate: its values
need not be rational, and no bit-computability or total bit-cost bound for
arbitrary real encodings is claimed. For the optional rational adapter with
all values encoded, these same finite formulas use exact rational arithmetic.
All loops are finite. The conditional-error-bound status is sound
only under the caller preconditions in step 4 and does not mean that the
procedure checked contour topology or eigenvalue count. No floating-point
stability is asserted for the candidate alone.
