---
id: lem-rpm-charge-multipole-remainder
kind: lemma
title: Finite-size charge multipole remainder
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-darboux-integral
  - def-darboux-sums
  - def-euclidean-inner-product
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-l-one-of-a-measure
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-chain-rule-for-total-derivatives
  - thm-continuous-implies-integrable
  - thm-extreme-value-metric
  - thm-heine-borel-rn
  - thm-ftc-second-part
  - thm-integral-triangle-inequality
  - thm-linearity-of-the-lebesgue-integral-on-l-one
dependency_roles:
  def-darboux-integral: mathematical-premise
  def-darboux-sums: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-l-one-of-a-measure: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Carnegie Mellon 21-269, Riemann integration notes
      url: https://www.math.cmu.edu/~gautam/c/2026-269/notes/rint.html
      locator: Fundamental-theorem-of-calculus method used for the integral Taylor remainder; the item derives the bound directly.
verification:
  precheck: pass
---

## Statement

Throughout this item, use one-based coordinate labels: for a vector $x\in\mathbb R^n$ (a function on $\{0,\ldots,n-1\}$ in [[def-euclidean-inner-product]]), write $x_i:=x(i-1)$ for $1\le i\le n$. For a vector-valued map $f$, write $f_i(y):=f(y)(i-1)$ with the same convention.

Let $\ell>0$, $z\in\mathbb R^3$, write $d^3y$ for three-dimensional Lebesgue measure on $\mathbb R^3$, and interpret $L^1(\mathbb R^3)$ relative to this measure. Define the closed Euclidean ball
$$\overline B_\ell(z):=\{y\in\mathbb R^3:|y-z|\le\ell\},$$
using the norm of [[def-euclidean-inner-product]]. Let $\rho\in L^1(\mathbb R^3)$ be real and zero almost everywhere outside $\overline B_\ell(z)$. Write $\|\rho\|_1:=\int_{\mathbb R^3}|\rho(y)|\,d^3y$. Let $\mathcal U\subseteq\mathbb R^3$ be open with $\overline B_\ell(z)\subset\mathcal U$, and let $b:\mathcal U\to\mathbb R^m$ be $C^2$ for a finite integer $m\ge1$. For each component $b_k$, let
$$M_k:=\sup_{x\in\overline B_\ell(z)}\|D^2b_k(x)\|_{\mathrm{op}}<\infty,$$
where, for a real bilinear map $B:\mathbb R^3\times\mathbb R^3\to\mathbb R$, define explicitly $\|B\|_{\mathrm{op}}:=\sup\{|B[u,v]|:|u|\le1,\ |v|\le1\}$ using the Euclidean vector norm. This norm is finite, and the continuous Hessian coefficients on the compact ball make each $M_k$ finite. Bilinearity gives $|B[u,v]|\le\|B\|_{\mathrm{op}}|u||v|$ for all $u,v$. Define $Q:=\int\rho\,d^3y$, $d:=\int(y-z)\rho(y)\,d^3y$, and $\mathcal B:=\int\rho(y)b(y)\,d^3y$, with all three integrals over $\overline B_\ell(z)$ and vector integrals taken componentwise. Then
$$\mathcal B_k=Q\,b_k(z)+Db_k(z)d+R_k,\qquad |R_k|\le\frac12M_k\ell^2\|\rho\|_1\quad(k=1,\ldots,m).$$
Thus every fixed component in a smooth finite-component trivialization has the stated charge multipole remainder. A tensor-valued component may be treated only after a fixed smooth trivialization over the ball; derivatives of that trivialization enter $M_k$, and no covariant tensor remainder without this data is asserted.

## Facts & Assumptions

**Given:** A compactly supported real $\rho\in L^1(\mathbb R^3)$, $\ell>0$, $z\in\mathbb R^3$, and a $C^2$ finite-component map $b$ on a neighborhood of the closed ball, with the component Hessian bounds in the Statement.

[A1] The charge density is real and integrable with support in the stated ball; the map $b$ is $C^2$ on its neighborhood and each component Hessian has the stated finite bound.

[F1] $L^1$ is the class of functions whose absolute value has finite Lebesgue integral, and the Lebesgue integral is linear on $L^1$. [[def-l-one-of-a-measure]]; [[def-integrable-real-and-complex-functions-and-their-integrals]]; [[thm-linearity-of-the-lebesgue-integral-on-l-one]]

[F2] The nonnegative integral is monotone and positively homogeneous; for an integrable real function, $|\int f|\le\int|f|$. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]; [[thm-integral-triangle-inequality]]

[F3] A closed bounded Euclidean ball is compact ([[thm-heine-borel-rn]]). A continuous function on a nonempty compact metric space is bounded, and a continuous function on a compact interval is Riemann integrable. [[thm-extreme-value-metric]]; [[thm-continuous-implies-integrable]]

[F4] The chain rule along $t\mapsto z+t(y-z)$ and the one-dimensional fundamental theorem of calculus hold for the stated $C^2$ maps. [[thm-chain-rule-for-total-derivatives]]; [[thm-ftc-second-part]]

[F5] The Euclidean inner product and norm are the usual positive-definite ones. [[def-euclidean-inner-product]]

[F6] For a bounded real function $f$ on a compact interval and a partition $P$, the lower and upper Darboux sums use the subinterval infima and suprema weighted by the positive subinterval lengths. For an integrable function, $\int f=\sup_P L(f,P)=\inf_P U(f,P)$. [[def-darboux-sums]]; [[def-darboux-integral]]

## Proof

**Proof technique:** direct.

1.1 For each component $k$, write $D^2b_k(x)[u,v]=\sum_{i,j=1}^3 a_{ij}(x)u_iv_j$. The coefficients $a_{ij}$ are continuous because $b$ is $C^2$. The ball is compact by [F3], so the finitely many coefficients have a common bound $C_k<\infty$ there. Since $|u_i|\le|u|$ and $|v_j|\le|v|$, the sum has magnitude at most $9C_k|u||v|$, hence the displayed bilinear supremum and $M_k$ are finite. For nonzero $u,v$, apply that supremum to $u/|u|,v/|v|$ and multiply by $|u||v|$; when either vector is zero the bilinear expression is zero. This proves the homogeneous bound used below. Since $|y-z|\le\ell$ on the support, monotonicity and homogeneity in [F2] show that each moment is absolutely integrable: $|Q|\le\|\rho\|_1$ and $|d_i|\le\ell\|\rho\|_1$. By compactness of the ball and continuity of each $b_k$, [F3] bounds $b_k$ there, so $\rho b_k$ is integrable as well. [given, A1, F1, F2, F3, F5]

2.1 Fix $y\in\overline B_\ell(z)$ and component $k$, and set $\phi(t)=b_k(z+t(y-z))$ on $[0,1]$. The segment stays in the closed ball, and the chain rule [F4] gives $\phi'(0)=Db_k(z)(y-z)$ and $\phi''(t)=D^2b_k(z+t(y-z))[y-z,y-z]$, hence $|\phi''(t)|\le C:=M_k|y-z|^2$. Set $H(t)=(1-t)\phi'(t)+\phi(t)$ and $f(t):=H'(t)=(1-t)\phi''(t)$. This derivative is continuous and Riemann integrable by [F3], so [F4] gives $r_k(y):=b_k(y)-b_k(z)-Db_k(z)(y-z)=\int_0^1 f(t)\,dt$. To bound this Riemann integral, let $h_\pm(t):=\pm C(1-t)$. The pointwise inequalities $h_-\le f\le h_+$ imply $L(h_-,P)\le L(f,P)$ and $U(f,P)\le U(h_+,P)$ for every partition, by the infimum, supremum and positive weights in [F6]. Taking the corresponding supremum and infimum gives $\int h_-\le\int f\le\int h_+$. The continuous functions $h_\pm$ have primitives $\pm C(t-t^2/2)$, so [F4] evaluates their integrals as $\pm C/2$. Consequently $|r_k(y)|\le\tfrac12M_k|y-z|^2$. [given, A1, F3, F4, F5, F6, step 1.1, algebra]

3.1 The function $r_k$ defined in step 2.1 is continuous on the ball. Its bound there makes $\rho r_k$ absolutely Lebesgue integrable by [F2]. Multiply that component expansion by $\rho(y)$ and integrate over $\overline B_\ell(z)$. Linearity [F1] gives $\mathcal B_k=Qb_k(z)+Db_k(z)d+R_k$, with $R_k=\int_{\overline B_\ell(z)}\rho(y)r_k(y)\,d^3y$. By the Lebesgue integral triangle inequality and domination [F2], $|R_k|\le\tfrac12M_k\ell^2\int_{\overline B_\ell(z)}|\rho|\,d^3y\le\tfrac12M_k\ell^2\|\rho\|_1$. [given, A1, F1, F2, step 2.1, algebra] ∎

## Remarks

This is a local component estimate. It does not differentiate the remainder or identify it with a force; a tensor estimate requires the stated fixed trivialization and its derivatives.
