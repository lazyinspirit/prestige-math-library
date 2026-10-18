---
id: ex-aaa-transfer-function-pole
kind: example
title: AAA recovers a scalar transfer-function pole from four samples
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - alg-aaa-finite-sample-rational-approximation
  - alg-householder-bidiagonalization
  - alg-implicit-shifted-bidiagonal-qr-with-deflation
  - def-real-and-complex-givens-transformations
  - lem-exact-householder-bidiagonal-reduction
  - thm-aaa-loewner-minimum-and-support-interpolation
  - def-barycentric-rational-quotient
dependency_level: 5
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Yuji Nakatsukasa, Olivier Sète, and Lloyd N. Trefethen, The AAA algorithm for rational approximation, Sections 2–4
      url: https://people.maths.ox.ac.uk/trefethen/AAAfinal.pdf
---

## Example

The scalar transfer function $H(z)=C(zI-A)^{-1}B$ with $A=[2]$ and
$B=C=[1]$ is $H(z)=1/(z-2)$. On the ordered sample set
$Z=(0,1,3,4)$, exact AAA with support budget $B_{\max}=2$, tolerance $0$,
and bidiagonal-QR sweep budget $S=1$ selects support nodes $1$ and $3$ and
returns the exact transfer function. Its reduced denominator has the true
pole $z=2$.

## Facts & Assumptions

**Given:** The sample set $Z=(0,1,3,4)$, data $H(z)=1/(z-2)$, support budget $B_{\max}=2$, tolerance $0$, sweep budget $S=1$, and the exact AAA procedure.

[F1] [[alg-aaa-finite-sample-rational-approximation]]: the initial candidate is the sample mean; the Loewner entries are $(f_i-f_{s_j})/(z_i-z_{s_j})$; the next support is a remaining sample with maximal absolute residual, ties going to the least original index; each iteration chooses a unit smallest-singular-vector weight for the Loewner matrix.

[F2] [[thm-aaa-loewner-minimum-and-support-interpolation]]: the selected vector minimizes the Loewner residual, and a barycentric candidate with nonzero weights interpolates its support data.

[F3] [[def-barycentric-rational-quotient]]: the quotient has numerator $\sum_jw_jf_j/(z-z_j)$ and denominator $\sum_jw_j/(z-z_j)$, with poles taken from the reduced denominator.

[F4] [[alg-householder-bidiagonalization]]: the exact reduction applies the specified left Householder to the first column, then a right Householder to the remaining active row.

[F5] [[alg-implicit-shifted-bidiagonal-qr-with-deflation]]: with zero deflation tolerance, the exact shifted QR procedure uses the nearest eigenvalue of the trailing $2\times2$ block of $B^*B$, breaks a tie toward the smaller eigenvalue, performs at most $S$ block sweeps, and checks deflation before the budget branch on each new pass.

[F6] [[def-real-and-complex-givens-transformations]]: the displayed real rotation has the prescribed real Givens block.

[F7] [[lem-exact-householder-bidiagonal-reduction]]: the exact negative-phase Householder construction in [F4] sends each nonzero active vector to its signed norm in the first coordinate and leaves zero active vectors unchanged.

## Verification

1.1 The data in order are $(-1/2,-1,1,1/2)$, with mean zero. Thus
$\eta_0=1>\tau=0$, so the initial tolerance test does not return. Their largest
absolute residuals are tied at $z=1$ and $z=3$; [F1] selects the earlier
sample $z=1$. The first Loewner matrix is the single column
$(-1/2,1,1/2)^T$, since its entries are
$$
\frac{H(0)-H(1)}{0-1}=-\frac12,\qquad
\frac{H(3)-H(1)}{3-1}=1,\qquad
\frac{H(4)-H(1)}{4-1}=\frac12.
$$
Since its right domain is one-dimensional, the selected unit weight is $1$
under the phase rule. Its Householder reduction has a single diagonal entry;
by [F5] there is only a singleton block, so the SVD call converges without
using a sweep. The one-support quotient is the constant $-1$. Its remaining
residual magnitudes are $1/2,2,3/2$ at
$z=0,3,4$, respectively, so $\eta_1=2>\tau$ and the second support is
$z=3$.
[given, F1, F4, F5, F7, algebra]

1.2 The remaining sample points are $0$ and $4$. In that row and support
order, the Loewner matrix is
$$
L=\begin{bmatrix}-1/2&1/2\\1/2&-1/2\end{bmatrix}.
$$
The rows are negatives of one another and $L(1,1)^T=0$, so $L$ has rank one,
its smallest singular value is zero, and its right nullspace is spanned by
$(1,1)$. The orthogonal projection of $e_1$ onto this line is
$(1/2,1/2)$; normalizing it and applying the positive-real phase rule [F1]
gives $w=(1,1)/\sqrt2$, whose components are both nonzero.
[given, F1, algebra]

1.3 Substitution into the barycentric quotient [F3] gives
$$
r(z)=
\frac{-1/(z-1)+1/(z-3)}{1/(z-1)+1/(z-3)}
=\frac1{z-2}.
$$
The denominator reduces to a nonzero constant times $z-2$, so its sole finite
pole is $2$. The values at $z=0,4$ are $-1/2,1/2$; the support values at
$z=1,3$ are $-1,1$ by [F2]. Thus this quotient matches all four data.
[given, F2, F3, step 1.2, algebra]

1.4 At the second support addition the Loewner matrix in step 1.2 is
$$
L=\begin{bmatrix}-1/2&1/2\\1/2&-1/2\end{bmatrix}.
$$
Its first column has norm $1/\sqrt2$ and its second is its negative. By
[F4] and [F7], the left Householder sends the first column to
$(1/\sqrt2,0)^T$ and the second to $(-1/\sqrt2,0)^T$. The one-dimensional
right active scalar is $-1/\sqrt2$; its phase is $-1$, its reflector vector
is $-1$, and its Householder factor is $[-1]$. Thus the bidiagonal reduction returns
$$
B_0=\begin{bmatrix}1/\sqrt2&1/\sqrt2\\0&0\end{bmatrix}.
$$
Then
$$
B_0^*B_0=\begin{bmatrix}1/2&1/2\\1/2&1/2\end{bmatrix}.
$$
Its eigenvalues are $0$ and $1$, each at distance $1/2$ from the trailing
diagonal entry $1/2$, so [F5] chooses shift $0$. The initial shift vector is
$(1/2,1/2)^T$. The real Givens factor
$$
G=\frac1{\sqrt2}\begin{bmatrix}1&-1\\1&1\end{bmatrix}
$$
satisfies $G^*(1/2,1/2)^T=(1/\sqrt2,0)^T$, and
$B_0G=\operatorname{diag}(1,0)$. The left rotation is the identity because
the subdiagonal entry is already zero. Thus one block sweep makes the
superdiagonal zero; the next zero-tolerance pass deflates it and sees only
singleton blocks before checking the exhausted budget, so the SVD call
succeeds with $S=1$. Step 1.3 shows all four samples match, hence
$\eta_2=0=\tau$ and [F1]'s tolerance branch returns the exact quotient.
[given, F1, F4, F5, F6, F7, step 1.2, step 1.3, algebra] ∎
