---
dependency_level: 2
id: cex-smooth-interval-density-without-upper-length-control
kind: counterexample
title: Unrestricted growing interval lengths need not have the starting-scale Dickman density
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-generated
  proof: ai-altered
deps:
- def-y-smooth-integer-and-smooth-counting-function
- def-dickman-de-brujin-function
- thm-fundamental-theorem-of-arithmetic
- def-prime
- def-prime-counting-function
- thm-third-mertens-theorem-for-primes
- thm-chebyshev-prime-counting-bounds
- thm-logarithm-derivative-and-integral
- thm-log-one-plus-x-power-series
- thm-natural-logarithm-laws
- def-natural-logarithm
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
  - title: Kaisa Matomäki and Maksym Radziwiłł, Multiplicative Functions in Short Intervals
    url: https://arxiv.org/pdf/1501.04585v4
  - title: Adolf Hildebrand and Gérald Tenenbaum, Integers without large prime factors
    url: https://numdam.org/item/JTNB_1993__5_2_411_0.pdf
generation:
  role: counterexample
---

## Statement refuted

Let $\psi:\mathbb Z_{\ge2}\to(0,\infty)$ satisfy $\psi(x)\to\infty$ as $x\to\infty$, and fix $u>0$. For each integer $x\ge2$, let $N_u(x,\psi)$ be the number of positive integers $n$ with $x\le n\le x+\psi(x)$ and with every prime divisor of $n$ at most $x^{1/u}$. Then there is a set $E\subseteq\mathbb Z_{\ge2}$ with $\#(E\cap[2,X])=o(X)$ such that $N_u(x,\psi)\sim\rho(u)\psi(x)$ as integer $x\to\infty$ outside $E$.

## Statement references

[Matomäki and Radziwiłł, Corollary 6, introduction, and its proof in §11.1, printed pp. 5 and 35](https://arxiv.org/pdf/1501.04585v4)

[Hildebrand and Tenenbaum, Theorem 1.1, printed pp. 415–416](https://numdam.org/item/JTNB_1993__5_2_411_0.pdf)

## Remarks

The unrestricted formulation is preserved from the actual native batch61 carrier. The explicit $u=1$, $\psi(x)=x^2$ example refutes that formulation; it does not refute an estimate with the necessary upper growth control.

## Facts & Assumptions

**Given:** An integer $x$ sufficiently large, $u=1$, and $\psi(x)=x^2$.

[F1] [[def-y-smooth-integer-and-smooth-counting-function]]: $n$ is $y$-smooth exactly when each prime divisor of $n$ is at most $y$.

[F2] [[thm-fundamental-theorem-of-arithmetic]]: Every integer $n\ge1$ is a finite product of primes.

[F3] [[thm-fundamental-theorem-of-arithmetic]]: Prime factorizations are unique up to order.

[F4] [[thm-third-mertens-theorem-for-primes]]: $\prod_{p\le z}(1-1/p)=e^{-\gamma}(\log z)^{-1}(1+O(1/\log z))$ for real $z\ge2$.

[F5] [[thm-chebyshev-prime-counting-bounds]]: For all sufficiently large real $z$, $\pi(z)\le c_2 z/\log z$ for some constant $c_2>0$.

[F6] [[def-dickman-de-brujin-function]]: $\rho(1)=1$.

[F7] [[thm-logarithm-derivative-and-integral]]: $\log 2=\int_1^2dt/t>0$.

[F8] [[def-prime-counting-function]]: $\pi(z)$ counts the primes at most $z$.

[F9] [[def-y-smooth-integer-and-smooth-counting-function]]: $\Psi(x,y)$ counts the positive integers $n\le x$ that are $y$-smooth.

[F10] [[thm-log-one-plus-x-power-series]]: For $-1<w\le1$, $\log(1+w)=\sum_{k\ge1}(-1)^{k+1}w^k/k$.

[F11] [[def-natural-logarithm]]: $\log(\exp t)=t$ for every real $t$.

[F12] [[thm-natural-logarithm-laws]]: $\log$ is strictly increasing, $\log1=0$, and $\log(ab)=\log a+\log b$ for positive $a,b$.

[F13] [[def-prime]]: Every prime $p$ satisfies $p>1$.

## Counterexample

**Given:** The assumptions in the statement, specialized to $u=1$ and $\psi(x)=x^2$.

1.1 For integer $x$ and $n\le x^2$, nonsmoothness at cutoff $x$ means that some prime divisor of $n$ exceeds $x$. There can be at most one such prime factor, counted with multiplicity, because two factors exceeding $x$ would have product greater than $x^2$. By [F2] and [F3], each nonsmooth $n\le x^2$ is therefore counted once among the multiples of a prime $p$ with $x<p\le x^2$, and conversely every such multiple is nonsmooth. Thus the nonsmooth count is exactly $\sum_{x<p\le x^2}\lfloor x^2/p\rfloor$. [given, F1, F2, F3, construct]

1.2 Put $T(z)=-\log\prod_{p\le z}(1-1/p)$. For large $z$, [F4] writes the product as $e^{-\gamma}(\log z)^{-1}(1+\eta_z)$ with $\eta_z=O(1/\log z)$ and $|\eta_z|\le1/2$; [F11] gives $T(z)=\log\log z+\gamma-\log(1+\eta_z)$, and [F10] bounds the last term by $O(1/\log z)$. By [F13], $p>1$, so applying [F10] at $w=-1/p$ and adding the finite logarithms gives $T(x^2)-T(x)=\sum_{x<p\le x^2}\sum_{k\ge1}1/(kp^k)$. The terms with $k\ge2$ total at most $\sum_{n>x}\sum_{k\ge2}n^{-k}=O(1/x)$, since $\sum_{k\ge2}n^{-k}=1/(n(n-1))$. Finally [F12] gives $\log\log(x^2)-\log\log x=\log2$, so $\sum_{x<p\le x^2}1/p=\log2+O(1/\log x)$. [given, F4, F10, F11, F12, F13, algebra]

2.1 Replacing each floor in step 1.1 by its argument changes the sum by at most $\pi(x^2)$ by [F8]; [F5] bounds this by $O(x^2/\log x)$. Step 1.2 then gives nonsmooth count $(\log2+O(1/\log x))x^2$, so subtracting from the $x^2$ positive integers at most $x^2$ yields $\Psi(x^2,x)=(1-\log2+O(1/\log x))x^2$ by [F9]. [F5, F8, F9, step 1.1, step 1.2, algebra]

3.1 The number counted in $[x,x+x^2]$ differs from $\Psi(x^2,x)$ by at most $2x+2$, since only integers below $x$ or above $x^2$ can differ and each boundary portion has at most $x+1$ integers; [F9] gives this comparison. Hence $N_1(x,\psi)/\psi(x)\to1-\log2$ along all integer $x$, and therefore along the unbounded complement of any zero-density set $E$; that complement is unbounded because otherwise $E$ contains every sufficiently large integer and has density $1$. But [F6] gives the claimed limit $\rho(1)=1$ and [F7] gives $\log2>0$, so the asserted asymptotic fails. [given, F6, F7, F9, step 2.1, algebra] ∎
