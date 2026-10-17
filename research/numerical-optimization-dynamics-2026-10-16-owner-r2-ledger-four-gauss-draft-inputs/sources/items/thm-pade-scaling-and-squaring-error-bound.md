---
id: thm-pade-scaling-and-squaring-error-bound
kind: theorem
title: "Padé error and squaring defects give a conditional exponential error bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - alg-pade-scaling-and-squaring-exponential
  - thm-pade-denominator-solve-verified-branch-correct
  - def-diagonal-pade-approximant-for-exponential
  - lem-diagonal-pade-remainder-bound
  - thm-matrix-function-rational-contour-error-bound
  - lem-scaling-and-squaring-error-recurrence
  - def-complex-exponential
  - lem-exponential-series-of-a-bounded-operator
  - thm-complex-resolvent-cover-validator-soundness
  - thm-analytic-primary-matrix-function-jordan-contour-agreement
  - def-complex-infinity-matrix-norm
  - lem-complex-infinity-matrix-norm-submultiplicative
  - cor-finite-dimensional-normed-spaces-are-banach
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jan Zur, Matrix Functions, TU Berlin full lecture notes"
      url: "https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf"
    - title: "Awad H. Al-Mohy and Nicholas J. Higham, A New Scaling and Squaring Algorithm for the Matrix Exponential"
      url: "https://eprints.maths.manchester.ac.uk/1217/1/paper9.pdf"
---

## Statement

Suppose [[alg-pade-scaling-and-squaring-exponential]] returns status
conditional-error-bound for a stored finite matrix $A$, Padé order $m$, and
scaling count $s$, with computed candidate $\widehat X_s$ and exact nonnegative upper
bound $E_s$ (rational in the fully encoded rational adapter). Also suppose the caller-supplied certification hypotheses hold:
with $B=2^{-s}A$, the cycle $\Gamma$ is polygonal with trace in
$|z|\le\rho$ for exact dyadic $\rho>0$, $\sigma(B)\subset\{|z|<\rho\}$,
$\Gamma$ is disjoint from $\sigma(B)$ and null-homologous in the disk, and its
index is one at every point of $\sigma(B)$. Then
$$\|\widehat X_s-\exp(A)\|_{\infty,\mathbb C}\le E_s.$$
The assertion is conditional on the exact denominator residual, scalar disk
remainder, caller-supplied contour topology, validated contour resolvent bound,
and every recorded squaring-defect bound. The validator does not establish the
contour hypotheses or count enclosed eigenvalues. A finite budget need not
produce a bound.

## Facts & Assumptions

**Given:** A conditional-error-bound return with exact stored matrix $A$, Padé order
$m$, scale $s$, disk radius $\rho$, $d_m(\rho)>0$, contour length upper
$\ell$, validator bound $M$, scalar exponential upper bounds $U(\rho)$ and
$U(\alpha)$, local squaring bounds $\delta_j$, and recurrence values $E_j$.

[F1] The algorithm forms $B=2^{-s}A$, computes the rational-coefficient polynomial
matrices $P_m(B)$ and $Q_m(B)$ exactly, and accepts its initial candidate only
after an exact solve check ([[alg-pade-scaling-and-squaring-exponential]]).

[F2] A verified denominator solve satisfies $Q_m(B)X_0=P_m(B)$ exactly
([[thm-pade-denominator-solve-verified-branch-correct]]).

[F3] The scalar exponential is the everywhere-defined power series
([[def-complex-exponential]]). If $d_m(\rho)>0$, then $q_m$ has no zero in the disk and
$|e^z-r_m(z)|\le
\rho^{2m+1}e^\rho(m!)^2/((2m)!(2m+1)!d_m(\rho))$
for $|z|\le\rho$ ([[lem-diagonal-pade-remainder-bound]]).

[F4] A scalar rational error and uniform contour resolvent bound imply
$\|e^B-r_m(B)\|_{\infty,\mathbb C}\le
L_\Gamma\varepsilon M/(2\pi)$
([[thm-matrix-function-rational-contour-error-bound]]).

[F5] The validator's successful return supplies the stated uniform resolvent
bound on every supplied contour segment
([[thm-complex-resolvent-cover-validator-soundness]]).

[F6] If $\widehat X_{j+1}=\widehat X_j^2+D_j$ and $X_{j+1}=X_j^2$, then
$\|\widehat X_{j+1}-X_{j+1}\|
\le(2\|X_j\|+\|\widehat X_j-X_j\|)\|\widehat X_j-X_j\|+\|D_j\|$
([[lem-scaling-and-squaring-error-recurrence]]).

[F7] The complex infinity norm is the maximum absolute row sum
([[def-complex-infinity-matrix-norm]]) and is submultiplicative
([[lem-complex-infinity-matrix-norm-submultiplicative]]).

[F8] The bounded-operator exponential series is absolutely convergent and
satisfies $\|\exp(tT)\|\le e^{|t|\|T\|}$
([[cor-finite-dimensional-normed-spaces-are-banach]],
[[lem-exponential-series-of-a-bounded-operator]]).

[F9] Analytic primary matrix functions respect products
([[thm-analytic-primary-matrix-function-jordan-contour-agreement]]).

[F10] The Padé functions are $p_m(z)$, $q_m(z)=p_m(-z)$, and
$r_m(z)=p_m(z)/q_m(z)$ where the denominator is nonzero
([[def-diagonal-pade-approximant-for-exponential]]).

[F11] When the scalar-tail computation succeeds, the algorithm's exact controller
values satisfy $U(x)\ge e^x$ for both $x=\rho$ and its row-bound input
$x=\alpha$ ([[alg-pade-scaling-and-squaring-exponential]]).

[L1] $\pi/4=\int_0^1(1+x^2)^{-1}\,dx$, and on $[0,1]$ the finite identity
$\frac1{1+x^2}=\sum_{k=0}^7(-x^2)^k+\frac{x^{16}}{1+x^2}$ holds.

## Proof


1.1 Integrating [L1] gives a positive remainder and the partial sum $1-\frac13+\frac15-\frac17+\frac19-\frac1{11}+\frac1{13}-\frac1{15}=(45045-15015+9009-6435+5005-4095+3465-3003)/45045=33976/45045$. Since $4\cdot33976=135904>135135=3\cdot45045$, we have $\pi/4>3/4$, hence $\pi>3$ and $1/(2\pi)<1/6$. Therefore $L_\Gamma\varepsilon M/(2\pi)\le\ell\varepsilon M/6$ whenever $L_\Gamma\le\ell$. [L1, algebra]

1.2 Let $B=2^{-s}A$. Since $d_m(\rho)>0$, [F3] makes $q_m$ nonzero throughout $|z|\le\rho$, which contains $\sigma(B)$ by the caller's topological hypothesis. In a Jordan basis of $B$, polynomial evaluation makes each block of $Q_m(B)$ upper triangular with diagonal $q_m(\lambda)$, so $Q_m(B)$ is invertible. The polynomial $q_m$ has finitely many zeros and none in the closed disk by [F3]; hence some $\eta>0$ makes $q_m$ nonzero on the open disk $D(0,\rho+\eta)$, which contains both $\Gamma$ and $\sigma(B)$. Thus $1/q_m$ is holomorphic there. By the product rule [F9] applied to $q_m(1/q_m)=1$, $Q_m(B)(1/q_m)(B)=I$, hence $(1/q_m)(B)=Q_m(B)^{-1}$. Applying [F9] again to $r_m=p_m(1/q_m)$ from [F10] gives $r_m(B)=P_m(B)Q_m(B)^{-1}$. The polynomial matrices $P_m(B)$ and $Q_m(B)$ commute, so this is also $Q_m(B)^{-1}P_m(B)$. The exact solve from [F2] therefore makes the initial candidate $X_0=r_m(B)$. [F1, F2, F3, F9, F10, algebra]

1.3 Put $X_j=\exp(2^jB)$ for $0\le j\le s$. The exponential semigroup law in [F8] gives $X_{j+1}=X_j^2$ and $X_s=\exp(A)$. The row-sum matrix norm is the operator norm induced by the vector infinity norm: the row triangle inequality gives the upper bound, and for a maximizing row choose each nonzero coordinate of $x$ to cancel the phase of that matrix entry, with arbitrary unit phases for zero entries; then $\|x\|_\infty=1$ and that row attains its row sum. By [F7] and [F8], $\|X_j\|_{\infty,\mathbb C}\le e^{2^j\|B\|_{\infty,\mathbb C}}\le e^\alpha\le U(\alpha)$ by [F11], where $\alpha\ge\|A\|_{\infty,\mathbb C}$ is the exact row bound used by the algorithm. [F7, F8, F11, given, algebra]

2.1 The scalar bound [F3] applies at every point of $\Gamma$ because its trace lies in $|z|\le\rho$. Since $e^\rho\le U(\rho)$ by [F11], it gives $\sup_{\Gamma}|e^z-r_m(z)|\le\varepsilon$ with the $\varepsilon$ computed by the algorithm. The validator gives the resolvent bound $M$ by [F5]; applying [F4] and then step 1.1 gives $\|X_0-e^B\|_{\infty,\mathbb C}\le \frac{L_\Gamma}{2\pi}\varepsilon M\le\frac{\ell\varepsilon M}{6}=E_0.$ [F3, F4, F5, F11, step 1.1, step 1.2, algebra]

3.1 For each returned square, the exact controller audit defines $D_j=\widehat X_{j+1}-\widehat X_j^2$. Since $|x+iy|\le|x|+|y|$, its row sums give $\|D_j\|_{\infty,\mathbb C}\le\delta_j$. If $\|\widehat X_j-X_j\|_{\infty,\mathbb C}\le E_j$, [F6] and step 1.3 imply $\|\widehat X_{j+1}-X_{j+1}\|_{\infty,\mathbb C} \le(2U(\alpha)+E_j)E_j+\delta_j=E_{j+1}.$ Starting from step 2.1, induction proves this bound for every $j\le s$. [F6, F7, step 2.1, step 1.3, algebra]

4.1 At $j=s$, $X_s=\exp(A)$ by step 1.3, so step 3.1 gives $\|\widehat X_s-\exp(A)\|_{\infty,\mathbb C}\le E_s$, as claimed. [step 1.3, step 3.1] ∎
