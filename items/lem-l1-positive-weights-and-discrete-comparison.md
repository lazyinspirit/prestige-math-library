---
id: lem-l1-positive-weights-and-discrete-comparison
kind: lemma
title: Positive L1 weights, discrete comparison, and residual stability
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-uniform-and-graded-grid-l1
  - def-caputo-derivative-and-fractional-integral
  - def-real-beta-integral
  - thm-real-beta-gamma-identity
  - thm-real-gamma-functional-equation
  - thm-real-power-continuity-and-derivatives
  - cor-mean-value-theorem
  - def-real-gamma-function-by-the-euler-integral
  - def-l-one-of-a-measure
  - def-absolutely-continuous-function
  - cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous
  - lem-fractional-integral-kernel-power-integral
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: None. The proof uses finite sums and integrals of monotone scalar kernels.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Yumin Lin and Chuanju Xu, Finite difference/spectral approximations for the time-fractional diffusion equation, Journal of Computational Physics 225 (2007), §3
      url: https://sem.xmu.edu.cn/papers/jcp07.pdf
    - title: Bangti Jin, Raytcho Lazarov, and Zhi Zhou, An Analysis of the L1 Scheme for the Subdiffusion Equation with Nonsmooth Data, IMA Journal of Numerical Analysis, §§1–2
      url: https://discovery.ucl.ac.uk/1459965/1/fracL1scheme_IMA_rev.pdf
---

## Statement

Let $0<\alpha<1$, $\lambda\ge0$, and let
$0=t_0<t_1<\cdots<t_N=T$ be any finite grid with $T>0$. Use the weights
$b_{n,k}$ and operator $\delta_{\mathcal T}^\alpha$ from
[[alg-uniform-and-graded-grid-l1]]. Then:

1. For every $n$, $0<b_{n,1}\le b_{n,2}\le\cdots\le b_{n,n}$.
2. If $z^0\ge0$ and $\delta_{\mathcal T}^\alpha z^n+\lambda z^n\ge0$ for
   $1\le n\le N$, then $z^n\ge0$ for every $n$.
3. If $R\ge0$, $e^0=0$, and
   $\delta_{\mathcal T}^\alpha e^n+\lambda e^n=r^n$ with
   $|r^n|\le R$, then
   $$\max_{0\le n\le N}|e^n|\le\frac{T^\alpha}{\Gamma(1+\alpha)}R.$$
4. For any initial value $U^0$ and forcing values $F^1,\ldots,F^N$, the
   recurrence in [[alg-uniform-and-graded-grid-l1]] is well-defined at every
   step and gives the unique $U^n$ satisfying
   $\delta_{\mathcal T}^\alpha U^n+\lambda U^n=F^n$.

## Facts & Assumptions

**Given:** $0<\alpha<1$, $\lambda\ge0$, a finite strictly increasing grid,
scalar sequences on its nodes, and $R\ge0$ for part 3. For part 4, also an
initial value $U^0$ and forcing values $F^1,\ldots,F^N$.

[F1] [[alg-uniform-and-graded-grid-l1]]: the L1 weights are
$b_{n,k}=\big((t_n-t_{k-1})^{1-\alpha}-(t_n-t_k)^{1-\alpha}\big)/
(\Gamma(2-\alpha)(t_k-t_{k-1}))$, and
$\delta_{\mathcal T}^\alpha z^n=\sum_{k=1}^n b_{n,k}(z^k-z^{k-1})$; its
update is
$U^n=(F^n+b_{n,1}U^0+\sum_{k=1}^{n-1}(b_{n,k+1}-b_{n,k})U^k)/(b_{n,n}+\lambda)$.

[F2] [[def-caputo-derivative-and-fractional-integral]]:
$D_C^\alpha u=\Gamma(1-\alpha)^{-1}\int_0^t(t-s)^{-\alpha}u'(s)ds$
almost everywhere. Whenever this integral is finite at a specified point, its
pointwise integral value is a representative of that a.e.-defined function
there; step 1.2 uses this representative at the grid nodes.

[F3] [[def-real-beta-integral]] and
[[thm-real-beta-gamma-identity]]:
$B(p,q)=\Gamma(p)\Gamma(q)/\Gamma(p+q)$ for $p,q>0$.

[F4] [[thm-real-gamma-functional-equation]]:
$\Gamma(x+1)=x\Gamma(x)$ for $x>0$.

[F5] [[thm-real-power-continuity-and-derivatives]]:
for every real $q$, $(t^q)'=q t^{q-1}$ for $t>0$.

[F6] [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]]:
the indefinite Lebesgue integral of an $L^1$ function is absolutely
continuous, in the sense of [[def-absolutely-continuous-function]].

[F7] [[def-real-gamma-function-by-the-euler-integral]]:
$\Gamma(x)=\int_0^\infty s^{x-1}e^{-s}\,ds>0$ for $x>0$.

[F8] [[cor-mean-value-theorem]]: a differentiable function whose
derivative is negative on an interval is decreasing there.

[F9] [[lem-fractional-integral-kernel-power-integral]]:
$\int_0^t s^{\alpha-1}ds=t^\alpha/\alpha$ for $t>0$.

## Proof

1.1 For fixed $n$, the function $w(s)=(t_n-s)^{-\alpha}$ is positive and increasing on $[0,t_n)$, and $b_{n,k}=\Gamma(1-\alpha)^{-1}h_k^{-1}\int_{t_{k-1}}^{t_k}w(s)ds$ by [F1] and [F4]. The factor $\Gamma(1-\alpha)^{-1}$ is positive by [F7]. The average of an increasing function on an earlier interval is at most its value at the shared endpoint, which is at most its average on the next interval. Each integral is finite because $\alpha<1$. Thus the weights are positive and nondecreasing in $k$. [given, F1, F4, F7, algebra]

1.2 Put $\phi(t)=t^\alpha$. By [F5], $\phi'(s)=\alpha s^{\alpha-1}$ for $s>0$, and this derivative is decreasing because its derivative is $\alpha(\alpha-1)s^{\alpha-2}<0$ and [F8] applies. It is in $L^1(0,T)$ by [F9], with integral $T^\alpha$. Its indefinite integral is $\phi(t)-\phi(0)=t^\alpha$, so $\phi$ is absolutely continuous by [F6] and its Caputo derivative is defined. In this proof, $D_C^\alpha\phi(t_n)$ denotes the pointwise integral representative in [F2]; the displayed Beta-kernel calculation below proves that this value is finite at every grid node. On an interval $[a,b]=[t_{k-1},t_k]$ its secant slope $\bar\phi'_k$ is the average of $\phi'$, hence $e_k(s):=\bar\phi'_k-\phi'(s)$ is increasing and $\int_a^b e_k(s)ds=0$. Since $w(s)=(t_n-s)^{-\alpha}$ is also increasing, their pairwise differences have the same sign. Expanding the double integral and using $\int_a^b e_k=0$ gives $$\int_a^b e_k(s)w(s)ds=\frac1{2(b-a)}\int_a^b\int_a^b (e_k(s)-e_k(r))(w(s)-w(r))dr\,ds\ge0.$$ These integrals are finite: $e_k,w\in L^1(a,b)$, and the only possible singular product $\phi'(s)w(s)$ occurs when $n=k=1$; there it is the integrable Beta kernel $\alpha s^{\alpha-1}(t_1-s)^{-\alpha}$ from [F3]. Expanding the absolute value of the double-integral integrand bounds it by the sum of products of the finite integrals $\int|e_k|$, $\int w$, and $\int|e_k|w$, which justifies the expansion. Summing over intervals and using [F2] yields $\delta_{\mathcal T}^\alpha\phi(t_n)\ge D_C^\alpha\phi(t_n)$. Direct substitution $s=t_n y$ and [F3]–[F4] give $$D_C^\alpha(t^\alpha)(t_n)=\frac{\alpha}{\Gamma(1-\alpha)}t_n^0B(\alpha,1-\alpha)=\Gamma(1+\alpha).$$ Thus, using $\Gamma(1+\alpha)>0$ from [F7], $q^n:=t_n^\alpha/\Gamma(1+\alpha)$ satisfies $q^0=0$ and $\delta_{\mathcal T}^\alpha q^n\ge1$. [given, F2, F3, F4, F5, F6, F7, F8, F9, algebra]

2.1 Expanding [F1] by collecting coefficients gives $$\delta_{\mathcal T}^\alpha z^n=b_{n,n}z^n+\sum_{k=1}^{n-1}(b_{n,k}-b_{n,k+1})z^k-b_{n,1}z^0.$$ If some $z^n<0$, let $m$ be the first such index. Then $z^k\ge0$ for $k<m$, the middle coefficients in this display are nonpositive by step 1.1, and $-b_{m,1}z^0\le0$. The terms $(b_{m,m}+\lambda)z^m$ are strictly negative because $b_{m,m}>0$ and $\lambda\ge0$. Therefore $\delta_{\mathcal T}^\alpha z^m+\lambda z^m<0$, contradicting the hypothesis. This proves comparison. [given, F1, step 1.1, algebra]

3.1 For the residual equation, set $z_\pm^n:=Rq^n\pm e^n$. Then $z_\pm^0=0$ and $$\delta_{\mathcal T}^\alpha z_\pm^n+\lambda z_\pm^n =R(\delta_{\mathcal T}^\alpha q^n+\lambda q^n)\pm r^n\ge R-|r^n|\ge0.$$ Comparison from step 2.1 gives $z_\pm^n\ge0$, hence $|e^n|\le Rq^n\le RT^\alpha/\Gamma(1+\alpha)$ for every $n$. This proves residual stability. [given, step 2.1, step 1.2, algebra]

4.1 For each $n$, expanding the operator from [F1] gives $$\delta_{\mathcal T}^\alpha U^n=b_{n,n}U^n+\sum_{k=1}^{n-1}(b_{n,k}-b_{n,k+1})U^k-b_{n,1}U^0.$$ By step 1.1, $b_{n,n}>0$, so with $\lambda\ge0$ the coefficient $b_{n,n}+\lambda$ is positive. Rearranging $\delta_{\mathcal T}^\alpha U^n+\lambda U^n=F^n$ therefore gives exactly the recurrence in [F1], with a unique value at step $n$ once the earlier values are fixed. Induction over $n=1,\ldots,N$ proves well-definedness and uniqueness of the full sequence and the stated equation. [given, F1, step 1.1, algebra, induction] ∎
