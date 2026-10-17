---
id: thm-na-clenshaw-curtis-exactness-and-near-best-error
kind: theorem
title: "Polynomial exactness and best-approximation error for Clenshaw–Curtis"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature
dependency_level: 7
deps: [def-na-clenshaw-curtis-quadrature, thm-na-clenshaw-curtis-interpolation-coefficients, lem-na-chebyshev-integral-moments, def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants, lem-cardinal-lagrange-interpolation-and-operator-norm, thm-chebyshev-interpolation-near-best-error-bound, def-real-polynomial-degree-leading-coefficient-and-monic, thm-monotone-change-of-variable-for-riemann-integrals, thm-continuous-implies-integrable, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, thm-ftc-second-part]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None. The affine change, interpolation, and integral estimates are choice-free.
sources:
  references:
    - title: "L. Ridgway Scott, Numerical Analysis, 2nd ed., §13.1 and §13.4.1"
      url: "https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf"
      locator: "Printed pp. 217–219 and 236, interpolatory quadrature error bound and Chebyshev rules."
    - title: "Lloyd N. Trefethen, Is Gauss Quadrature Better than Clenshaw–Curtis?, §2"
      url: "https://courses.grainger.illinois.edu/cs591mh/fa2012/trefethen/Clenshaw-Curtis.pdf"
      locator: "Printed pp. 69–70, definition by integrating the Chebyshev interpolant."
---

## Statement

Let $a<b$, $n\ge0$, and $f\in C[a,b]$. Put $m=(a+b)/2$, $d=(b-a)/2$, and $g(t)=f(m+dt)$ on $[-1,1]$. Let $E_n(g)$ and $\Lambda_n^L$ be the best uniform polynomial error and the Chebyshev–Lobatto interpolation norm from [[def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants]]. The rule $Q_{n,[a,b]}$ of [[def-na-clenshaw-curtis-quadrature]] is exact for every polynomial of degree at most $n$, and
$$\left|\int_a^b f(x)\,dx-Q_{n,[a,b]}(f)\right|\le(b-a)(1+\Lambda_n^L)E_n(g).$$
Because affine pullback preserves the supremum norm and polynomial degree, $E_n(g)$ is also the best degree-$n$ uniform error of $f$ on $[a,b]$.

## Facts & Assumptions

**Given:** $a<b$, $n\ge0$, and $f\in C[a,b]$.

[A1] The normalized function is $g(t)=f(m+dt)$ with $m=(a+b)/2$ and $d=(b-a)/2>0$.

[F1] [[def-na-clenshaw-curtis-quadrature]]: for $n\ge1$, $Q_{n,[a,b]}(f)=d\sum_{k=0}^na_k\mu_k$ with the DCT-I coefficients and Chebyshev moments; at $n=0$ it is $(b-a)f(m)$.

[F2] [[thm-na-clenshaw-curtis-interpolation-coefficients]]: for $n\ge1$, $\sum_{k=0}^na_kT_k=I_n^L g$.

[F3] [[lem-na-chebyshev-integral-moments]]: $\mu_k=\int_{-1}^1T_k(t)\,dt$ for every $k\ge0$.

[F4] [[lem-cardinal-lagrange-interpolation-and-operator-norm]]: $I_n^L p=p$ for every $p\in\mathcal P_n$, including $n=0$.

[F5] [[thm-chebyshev-interpolation-near-best-error-bound]]: $\|g-I_n^L g\|_\infty\le(1+\Lambda_n^L)E_n(g)$ for every $n\ge0$.

[F6] [[def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants]]: $E_n(g)=\inf_{p\in\mathcal P_n}\|g-p\|_\infty$, $\Lambda_n^L$ is the operator norm of $I_n^L$, and $I_0^L g=g(0)$.

[F7] [[def-real-polynomial-degree-leading-coefficient-and-monic]]: substituting an affine polynomial into a polynomial of degree at most $n$ again gives degree at most $n$.

[F8] [[thm-monotonicity-of-the-integral]] and [[thm-ftc-second-part]]: if $|u(x)|\le M$ on $[a,b]$, then $|\int_a^b u(x)\,dx|\le(b-a)M$.

[F9] [[thm-monotone-change-of-variable-for-riemann-integrals]]: for the increasing affine bijection $t\mapsto m+dt$, $\int_a^bP(x)\,dx=d\int_{-1}^1P(m+dt)\,dt$.

[F10] [[thm-continuous-implies-integrable]] and [[thm-linearity-of-the-integral]]: the continuous functions here are integrable and finite sums may be integrated termwise.

## Proof

1.1 For $n\ge1$, let $p_n(t)=\sum_{k=0}^na_kT_k(t)$. By [F1]–[F3] and [F10], $Q_{n,[a,b]}(f)=d\sum_k a_k\int_{-1}^1T_k(t)\,dt=d\int_{-1}^1p_n(t)\,dt$. The affine substitution [F9] makes this $\int_a^bP(x)\,dx$ for $P(x)=p_n((x-m)/d)$, and [F2] identifies $P$ with the interpolant pullback. For $n=0$, [F1] is the integral of the constant polynomial $P(x)=f(m)$ by [F9]. Thus $Q_{n,[a,b]}(f)=\int_a^bP(x)\,dx$ in every case. [given, F1, F2, F3, F9, F10, algebra]

2.1 Let $q$ be any polynomial of degree at most $n$ on $[a,b]$ and put $\tilde q(t)=q(m+dt)$. By [F7], $\tilde q\in\mathcal P_n$. The interpolation reproduction in [F4] gives $I_n^L\tilde q=\tilde q$, so step 1.1 yields $Q_{n,[a,b]}(q)=\int_a^bq(x)\,dx$. This proves polynomial exactness. [given, F4, F7, step 1.1, algebra]

2.2 Set $P(x)=I_n^L g((x-m)/d)$ as in step 1.1. The pullback bijection gives $\|f-P\|_{\infty,[a,b]}=\|g-I_n^L g\|_{\infty,[-1,1]}$. By [F8], $|\int_a^b(f-P)|\le(b-a)\|f-P\|_\infty$. Combining this with $Q(f)=\int P$ from step 1.1 and [F5] proves the displayed bound. [given, F5, F8, F10, step 1.1, algebra]

3.1 For each $p\in\mathcal P_n$ on $[-1,1]$, the pullback $x\mapsto p((x-m)/d)$ is in $\mathcal P_n$ on $[a,b]$ by [F7] and has the same supremum error against $f$ as $p$ has against $g$. Conversely, every degree-at-most-$n$ polynomial on $[a,b]$ pulls back to one on $[-1,1]$. The two infima defining best uniform error are therefore equal. [given, F6, F7, algebra] ∎
