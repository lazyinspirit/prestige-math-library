---
id: thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials
kind: theorem
title: "Montgomery–Vaughan Mean-Square Estimate for Dirichlet Polynomials"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-one-separated-dirichlet-polynomial-samples
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-newton-leibniz-with-interior-derivative
  - thm-integration-by-parts-with-interior-derivatives
  - thm-complex-exponential-is-entire-with-derivative-itself
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-continuous-implies-integrable
justified_by: []
aliases: []
forward_refs: []
dependency_level: 1
proof_strategy: direct
sources:
  references:
    - title: "Montgomery–Vaughan, Multiplicative Number Theory III, §26.1, Theorem 26.8 and proof (current PDF pp. 121–122, printed pp. 113–114)"
      url: "https://personal.science.psu.edu/rcv4/Vol3/Vol3.pdf"
---

## Statement

Let $N\ge1$ be an integer, let $T\ge2$, and let $D(s)=\sum_{n=1}^{N}a_n n^{-s}$ have complex coefficients. Let $t_1,\ldots,t_R\in[0,T]$ be pairwise distinct real numbers with $|t_r-t_q|\ge1$ for $r\ne q$, and put $G:=\sum_{n=1}^{N}|a_n|^2$. Then
$$\sum_{r=1}^{R}|D(it_r)|^2\ll (N+T)\log(2N)G,$$
with an absolute implied constant. The corresponding continuous estimate is
$$\int_0^T|D(it)|^2\,dt\ll(N+T)G.$$

## Statement references

[Montgomery–Vaughan, §26.1, Corollary 26.2 and Theorem 26.8](https://personal.science.psu.edu/rcv4/Vol3/Vol3.pdf)

## Facts & Assumptions

**Given:** A positive integer $N$, $T\ge2$, complex coefficients $a_1,\ldots,a_N$, and a finite 1-separated sample set in $[0,T]$.

[F1] [[def-one-separated-dirichlet-polynomial-samples]] defines $D(s)=\sum_{n=1}^{N}a_n n^{-s}$, the sample set, and $G=\sum_{n=1}^{N}|a_n|^2$.

[F2] [[thm-cauchy-schwarz-and-the-euclidean-norm]] gives finite real Cauchy–Schwarz. In particular $2uv\le u^2+v^2$ for nonnegative $u,v$, also directly from $(u-v)^2\ge0$.

[F3] [[thm-newton-leibniz-with-interior-derivative]] integrates a continuous real derivative on a finite interval to the endpoint increment. Applied to real and imaginary parts, it gives the same identity for complex $C^1$ functions. All finite-interval integrals below are Riemann integrals, and whole-line integrals are absolutely convergent improper Riemann integrals.

[F4] [[thm-integration-by-parts-with-interior-derivatives]] gives finite-interval integration by parts for continuous real factors with integrable interior derivatives; applying it to components gives the complex version.

[F5] [[thm-complex-exponential-is-entire-with-derivative-itself]] gives the exponential derivative. [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] gives $|e^{iy}|=1$ for real $y$.

[F6] Every continuous real function on a compact interval is Riemann integrable. In particular, each continuous derivative of a real $C^1$ function provides the integrable extension required by [F3] and [F4]; apply this componentwise to complex functions. [[thm-continuous-implies-integrable]]

## Proof

**Given:** The data in the statement.

1.1 Put $c_0:=\int_{\mathbb R}e^{-x^2}\,dx$, positive and finite by comparison with $e^{-|x|}$ outside $[-1,1]$, and $F(\xi):=\int_{\mathbb R}e^{-x^2}e^{-i\xi x}\,dx$ for real $\xi$. These improper integrals converge absolutely. Two applications of [F3] to $y\mapsto e^{-iy}$, using [F5] to bound its second derivative by one, give $|e^{-iy}-1+iy|\le y^2/2$ for real $y$. Therefore $|e^{-x^2}e^{-i\xi x}((e^{-ihx}-1)/h+ix)|\le |h|x^2e^{-x^2}/2$ for nonzero real $h$. The function $x^2e^{-x^2}$ has finite integral by comparison with a constant multiple of $e^{-|x|}$ for large $|x|$. Integrating this error bound first on finite intervals and passing absolutely convergent tails to the limit proves $F'(\xi)=-i\int_{\mathbb R}xe^{-x^2}e^{-i\xi x}\,dx$, with difference-quotient error at most $|h|\int_{\mathbb R}x^2e^{-x^2}\,dx/2$. Apply [F4] on $[-M,M]$ to $e^{-x^2}$ and $e^{-i\xi x}$. The boundary term tends to zero and both integrands converge absolutely as $M\to\infty$, yielding $\int xe^{-x^2}e^{-i\xi x}\,dx=-i\xi F(\xi)/2$. Hence $F'(\xi)=-\xi F(\xi)/2$. The derivative of $e^{\xi^2/4}F(\xi)$ is zero, so [F3] on finite intervals makes this product constant, equal to $F(0)=c_0$. Thus $F(\xi)=c_0e^{-\xi^2/4}$. The affine substitution $t=b+Hx$ (valid directly in Riemann sums and then in their absolutely convergent tails) gives $\int_{\mathbb R}e^{-((t-b)/H)^2}e^{-itu}\,dt=c_0H e^{-ibu}e^{-H^2u^2/4}$ for $H>0$ and real $b,u$. [F6, F3, F4, F5, given, algebra]

1.2 Put $f(t)=D(it)$ and $I_r=[t_r-1/2,t_r+1/2]$. The interiors of these intervals are disjoint, and all lie in $J=[-1/2,T+1/2]$. For any $x\in I_r$, [F3] applied to the real $C^1$ function $|f|^2$ gives $|f(t_r)|^2\le|f(x)|^2+2\int_{I_r}|f(t)||f'(t)|\,dt$, because $(|f|^2)'=2\operatorname{Re}(f'\overline f)$. Integrating in $x$ over this unit interval and summing over $r$ yields $\sum_r|f(t_r)|^2\le\int_J|f(t)|^2\,dt+2\int_J|f(t)||f'(t)|\,dt$. This also covers the empty sample set, when the left side is zero. [F6, F1, F3, F5, given, algebra]

2.1 For arbitrary complex coefficients $b_1,\ldots,b_N$ write $Q(t)=\sum_{n=1}^{N}b_n n^{-it}$. Expanding this finite square and using step 1.1 gives $\int_{\mathbb R}e^{-((t-b)/H)^2}|Q(t)|^2\,dt=c_0H\sum_{m,n=1}^{N}b_m\overline{b_n}e^{-ib\log(m/n)}e^{-H^2\log^2(m/n)/4}$. For $m,n\le N$, integration of $1/x\ge1/N$ between $m$ and $n$ gives $|\log(m/n)|\ge|m-n|/N$. Consequently each absolute kernel row sum is at most $1+2\sum_{k\ge1}e^{-H^2k^2/(4N^2)}\le1+2\int_0^\infty e^{-H^2x^2/(4N^2)}\,dx=1+2c_0N/H$. Apply $2|b_m||b_n|\le|b_m|^2+|b_n|^2$ and symmetry to the expanded sum. The result is $\int_{\mathbb R}e^{-((t-b)/H)^2}|Q(t)|^2\,dt\le C(H+N)\sum_{n=1}^{N}|b_n|^2$ for an absolute constant $C$. [F2, step 1.1, algebra]

3.1 If an interval $J$ has length $L\ge1$, choose its midpoint as $b$ and put $H=L$. The weight in step 2.1 is at least $e^{-1/4}$ on $J$, so $\int_J|Q(t)|^2\,dt\le C'(L+N)\sum_n|b_n|^2$ with an absolute $C'$. Taking $J=[0,T]$ and $b_n=a_n$ proves the continuous assertion. [F1, step 2.1, choose, algebra]

4.1 Let $B=\log(2N)>0$. The scalar inequality in [F2] gives $2|f||f'|\le B|f|^2+B^{-1}|f'|^2$. Also $f'(t)=\sum_{n=1}^{N}(-i\log n)a_n n^{-it}$, whose coefficient square norm is at most $(\log N)^2G\le B^2G$. Apply step 3.1 on $J$, of length $T+1$, both to $f$ and to $f'$. Step 1.2 is therefore at most $C'(T+1+N)(1+2B)G\ll(T+N)\log(2N)G$, since $T\ge2$ and $B\ge\log2$. This proves the discrete assertion, including $N=1$, $G=0$, and samples at either endpoint. [F1, F2, F5, step 3.1, step 1.2, algebra] ∎
