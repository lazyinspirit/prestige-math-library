---
id: ex-dirichlet-boundary-forcing-strang-order-reduction
kind: example
title: "Boundary-incompatible forcing reduces Strang order to five quarters in a Dirichlet modal model"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-dirichlet-sine-mode-heat-splitting-model
  - lem-diagonal-heat-semigroup-generator-domain
  - lem-dirichlet-forcing-coefficients-exceed-the-generator-domain
  - thm-p-series-real-exponents
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - thm-derivative-of-exponential
  - cor-mean-value-theorem
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - thm-of-square-roots
  - lem-of-inverse-positive
  - lem-of-square-monotone
  - def-real-power
  - thm-real-power-laws
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations, complete 120-page graduate lecture notes"
      url: "https://arxiv.org/pdf/1203.2344"
      locator: "Chapter 2, §One dimension, interval Dirichlet case, printed p. 15: sine eigenmodes and eigenvalues; the modal order calculation is supplied here."
---

## Example

Use the sequence-space Dirichlet heat model in [[def-dirichlet-sine-mode-heat-splitting-model]] with zero initial state and forcing coefficients $g_k=1/k$ for odd $k$, zero for even $k$. The generator-domain and boundary mismatch are certified by [[lem-diagonal-heat-semigroup-generator-domain]] and [[lem-dirichlet-forcing-coefficients-exceed-the-generator-domain]]. At a fixed time $T>0$, the exact coordinatewise solution and the Strang approximation with $N=T/h$ steps satisfy
$$c_T h^{5/4}\le\|\widetilde u_N-u(T)\|_{\ell^2}\le C_T h^{5/4}$$
for all sufficiently small $h=T/N$, with constants $c_T,C_T>0$. This is a rigorously specified modal example of boundary-induced order reduction. It is not a convergence theorem for general unbounded PDE operators.

## Facts & Assumptions

**Given:** The sequence-space model, fixed $T>0$, zero initial state, and uniform step $h=T/N$.

[F1] [[def-dirichlet-sine-mode-heat-splitting-model]]: $A$ acts by $(Au)_k=-k^2u_k$, $g_k=1/k$ on odd modes and $0$ on even modes, $E_tu=(\exp(-k^2t)u_k)_k$, and $S_h=E_{h/2}B_hE_{h/2}$.

[F2] [[lem-diagonal-heat-semigroup-generator-domain]]: $E_t$ is a strongly continuous contraction semigroup whose generator domain is $\{u:\sum k^4|u_k|^2<\infty\}$.

[F3] [[lem-dirichlet-forcing-coefficients-exceed-the-generator-domain]]: the constant forcing has these coefficients, lies in $\ell^2$, and is outside the heat-generator domain because it fails the homogeneous Dirichlet boundary condition.

[F4] [[thm-p-series-real-exponents]]: $\sum_{k\ge1}k^{-p}$ converges for $p>1$.

[F5] [[def-real-exponential-function-and-e]], [[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-addition-formula]], [[thm-exponential-is-strictly-increasing]], and [[thm-derivative-of-exponential]]: the scalar exponential is positive, obeys its addition law, is strictly increasing, and has derivative $\exp(x)$.

[F6] [[cor-mean-value-theorem]]: differentiable real functions satisfy the mean-value theorem on closed intervals.

[F7] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: the exponential has a degree-two Taylor expansion with a cubic remainder on a bounded interval.

[F8] [[thm-of-square-roots]], [[lem-of-square-monotone]], and [[lem-of-inverse-positive]]: for $0<h\le1$, the positive root $\sqrt h$ satisfies $\sqrt h\le1$, so $H:=1/\sqrt h\ge1$.

[F9] [[def-real-power]], [[thm-real-power-laws]], and [[cor-exponential-reciprocal-and-positivity]]: for $h>0$, $h^{1/2}>0$ and $(h^{1/2})^2=h$, so uniqueness of square roots gives $h^{1/2}=\sqrt h$. The power laws then give $H=h^{-1/2}$, $H^{-5}=h^{5/2}$, and $\sqrt{h^{5/2}}=h^{5/4}$.

## Proof

1.1 For each mode, solving $u_k'=-k^2u_k+g_k$, $u_k(0)=0$, gives $u_k(t)=\frac{g_k}{k^2}(1-\exp(-k^2t)).$ Differentiating verifies the equation and initial value. Also $|u_k(t)|\le |g_k|/k^2\le k^{-3}$, so [F4] shows the reference state belongs to $\ell^2$ for every $t\ge0$. [F1, F4, F5, algebra]

1.2 Put $x=k^2h$. By [F1], each Strang coordinate obeys $\widetilde u_{n+1,k}=\exp(-x)\widetilde u_{n,k}+h\exp(-x/2)g_k.$ Starting from zero and summing this scalar recurrence gives $\widetilde u_{N,k}=h\exp(-x/2)\frac{1-\exp(-Nx)}{1-\exp(-x)}g_k,$ where the finite geometric identity follows by multiplying the sum by $1-\exp(-x)$; the denominator is positive because $x>0$ and the exponential is strictly increasing. [F1, F5, algebra]

1.3 Define $\sigma(x):=\exp(x/2)-\exp(-x/2)$ for real $x$, and $q(x):=1-x/\sigma(x)$ for $x>0$. For $x>0$, $\sigma'(x)=\tfrac12(\exp(x/2)+\exp(-x/2))>1$, because $\exp(x/2)+\exp(-x/2)-2=(\exp(x/4)-\exp(-x/4))^2>0.$ Thus [F6] gives $\sigma(x)>x$, so $0<q(x)<1$. Direct differentiation gives $\sigma(0)=0$, $\sigma'(0)=1$, and $\sigma''(0)=0$; [F7] therefore gives $\sigma(x)=x+O(x^3)$ on $0<x\le1$. Hence $q(x)=(\sigma(x)-x)/\sigma(x)\le Cx^2$ there. [F5, F6, F7, algebra]

2.1 By [F2] and [F3], this constant Dirichlet forcing is outside the generator domain and has nonzero boundary value while the sine modes vanish at both endpoints. The modal comparison below therefore concerns the boundary-incompatible data identified in the Statement. [F2, F3, step 1.1]

2.2 Since $Nx=k^2T$, the identity $\frac{h\exp(-x/2)}{1-\exp(-x)}=\frac{1}{k^2}\frac{x}{\exp(x/2)-\exp(-x/2)}$ turns the numerical value into the exact modal value times $x/\sigma(x)$. Therefore for odd $k$, $|\widetilde u_{N,k}-u_k(T)|=k^{-3}(1-\exp(-k^2T))q(k^2h),$ and the error is zero for even $k$. [F1, step 1.1, step 1.2, step 1.3, algebra]

2.3 The quotient $\sigma(x)/x$ is increasing for $x>0$: its derivative has numerator $p(x)=x\sigma'(x)-\sigma(x)$, with $p(0)=0$ and $p'(x)=x\sigma''(x)=x\sigma(x)/4>0$. Therefore $x/\sigma(x)$ decreases and $q$ increases. In particular $q(x)\ge q(1)>0$ on $1\le x\le4$. [F5, F6, step 1.3, algebra]

3.1 For sufficiently small $h\le1$, set $H:=1/\sqrt h$; [F8] gives $H\ge1$. For odd $k\le H$, steps 2.2 and 1.3 give $|\widetilde u_{N,k}-u_k(T)|\le C h^2 k$. The sum of their squared errors is at most $C h^4H^3=C h^{5/2}$. For $k>H$, use $q<1$ and $1-\exp(-k^2T)<1$; dyadic blocks $[2^jH,2^{j+1}H)$ contain at most $2^{j+1}H$ integers and contribute at most $2^{j+1}H(2^jH)^{-6}$. Summing the geometric series gives a tail at most $C H^{-5}=C h^{5/2}$. Thus the squared $\ell^2$ error is at most $C_T h^{5/2}$. [F4, F8, F9, step 2.2, step 1.3, algebra]

4.1 Choose $h$ sufficiently small that $h\le1/64$ and $h\le T$. Then $\sqrt h\le1/8$ by [F8], so $H\ge8$. The interval $[H,2H]$ contains at least $H-1$ integers, and among any $m$ consecutive integers at least $(m-1)/2$ are odd; hence it contains at least $H/4$ odd integers. For each such $k$, $1\le k^2h\le4$, $k^{-6}\ge(2H)^{-6}$, $q(k^2h)\ge q(1)$ by step 2.3, and $1-\exp(-k^2T)\ge1-\exp(-T/h)>1/2$ since $T/h\ge1$ and $e=1+1+\sum_{n\ge2}1/n!>2$. Therefore the sum of squared errors over these modes is at least $\frac H4\,(2H)^{-6}\,\frac{q(1)^2}{4}=cH^{-5}=c h^{5/2}$ for a constant $c>0$. Taking square roots of the upper bound in step 3.1 and this lower bound, then using [F9], proves the claimed two-sided $h^{5/4}$ error rate. [F5, F8, F9, step 2.3, step 3.1, algebra] ∎

