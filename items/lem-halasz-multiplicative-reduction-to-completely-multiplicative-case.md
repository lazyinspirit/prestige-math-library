---
dependency_level: 4
id: lem-halasz-multiplicative-reduction-to-completely-multiplicative-case
kind: lemma
title: "Reduction of the bounded multiplicative case to the completely multiplicative case"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-pretentious-distance-to-an-archimedean-twist
  - def-halasz-minimal-pretentious-distance
  - lem-halasz-minimal-distance-is-well-defined
  - lem-reciprocal-prime-sum-from-mertens-first-theorem
  - def-multiplicative-arithmetic-function
  - def-completely-multiplicative-arithmetic-function
  - thm-fundamental-theorem-of-arithmetic
  - thm-p-series-real-exponents
  - thm-exponential-beats-every-polynomial
proof_strategy: direct
aliases: []
sources:
  scraped: []
  references:
    - title: "Andrew Granville and K. Soundararajan, Pretentious Multiplicative Number Theory (author manuscript, 2011)"
      url: "https://dms.umontreal.ca/~andrew/PDF/PretendBook010610.pdf"
---

## Statement

Let $f:\mathbb Z_{>0}\to\mathbb C$ be multiplicative with $|f(n)|\le1$ for
all $n\ge1$, and let $g:\mathbb Z_{>0}\to\mathbb C$ be completely
multiplicative with $|g(n)|\le1$ and $g(p)=f(p)$ for every prime $p$. Suppose
there is a constant $C_0>0$ such that for every real $y\ge3$ and $U\ge1$,

$$ \frac1y\left|\sum_{n\le y}g(n)\right|\le C_0\left((1+M(g;y,U))e^{-M(g;y,U)}+\frac1U+\frac{\log\log y}{\log y}\right). $$

Then there is a constant $C_1$, depending only on $C_0$, such that for every
real $x\ge9$ and $T\ge1$,

$$ \frac1x\left|\sum_{n\le x}f(n)\right|\le C_1\left((1+M(f;x,T))e^{-M(f;x,T)}+\frac1T+\frac{\log\log x}{\log x}\right). $$

## Statement references

[[def-multiplicative-arithmetic-function]]

[[def-completely-multiplicative-arithmetic-function]]

[[def-pretentious-distance-to-an-archimedean-twist]]

[[def-halasz-minimal-pretentious-distance]]

[Granville and Soundararajan, *Pretentious Multiplicative Number Theory*, §6.4, PDF pp. 40–41](https://dms.umontreal.ca/~andrew/PDF/PretendBook010610.pdf)

## Facts & Assumptions

**Given:** $f,g,C_0$ as in the statement; in particular, the displayed estimate for $g$ holds for all $y\ge3$ and $U\ge1$.

[F1] Multiplicativity means $f(1)=1$ and $f(mn)=f(m)f(n)$ when $m,n$ are coprime positive integers ([[def-multiplicative-arithmetic-function]]).

[F2] Complete multiplicativity means $g(1)=1$ and $g(mn)=g(m)g(n)$ for all positive integers $m,n$ ([[def-completely-multiplicative-arithmetic-function]]).

[F3] Every positive integer is a finite product of primes ([[thm-fundamental-theorem-of-arithmetic]]).

[F4] Prime factorization is unique up to order ([[thm-fundamental-theorem-of-arithmetic]]).

[F5] For real $z\ge3$, $\sum_{p\le z}1/p=\log\log z+O(1)$ ([[lem-reciprocal-prime-sum-from-mertens-first-theorem]]).

[F6] $M(h;z,U)=\min_{|t|\le U}\sum_{p\le z}(1-\operatorname{Re}(h(p)p^{-it}))/p$ for each 1-bounded multiplicative $h$ ([[def-halasz-minimal-pretentious-distance]]).

[F7] The minimum in [F6] is attained for every real $z\ge3$ and $U\ge1$ ([[lem-halasz-minimal-distance-is-well-defined]]).

[F8] $\sum_{n\ge1}n^{-3/2}$ converges ([[thm-p-series-real-exponents]]).

[F9] For each fixed positive integer $m$ and positive real $a$, $u^m/\exp(au)\to0$ as $u\to+\infty$ ([[thm-exponential-beats-every-polynomial]]).

[A1] There is $C_0>0$ such that the displayed mean-value estimate holds for $g$ for every real $y\ge3$ and $U\ge1$.

## Proof

1.1 Define $h(1)=1$, $h(p)=0$, and $h(p^k)=f(p^k)-f(p)f(p^{k-1})$ for each prime $p$ and $k\ge2$, then extend $h$ multiplicatively using [F3]–[F4]. This defines $h$ uniquely; $|h(p^k)|\le2$ for $k\ge2$. [given, F1, F3, F4, construct, algebra]

1.2 For each prime $p$ and integer $k\ge0$, complete multiplicativity of $g$ and the definition of $h$ give $\sum_{j=0}^k g(p^{k-j})h(p^j)=f(p^k)$: for $k=0,1$ this is immediate, and for $k\ge2$ the terms telescope, with $g(p)=f(p)$. By [F3]–[F4], the divisor sum factors into these local sums, so $f(n)=\sum_{d\mid n}h(d)g(n/d)$ for every $n\ge1$. [given, F2, F3, F4, step 1.1, algebra]

2.1 Expanding over finite prime sets by [F3]–[F4] and using $|h(p)|=0$, $|h(p^k)|\le2$ for $k\ge2$, gives
$$ \sum_{d\ge1}\frac{|h(d)|}{d^{3/4}}\le\prod_p\left(1+2\sum_{k\ge2}p^{-3k/4}\right)<\infty. $$
Indeed, each inner sum is at most $C p^{-3/2}$ for an absolute $C$, the series $\sum_p p^{-3/2}$ is bounded by the convergent series in [F8], and $\prod_p(1+C p^{-3/2})\le\exp(C\sum_p p^{-3/2})$. Monotone limits of the finite prime products prove the stated convergence. [F3, F4, F8, step 1.1, algebra]

2.2 Put $H:=\sum_{d\ge1}|h(d)|/d^{3/4}<\infty$. Then $\sum_d|h(d)|/d\le H$, and
$$ \sum_{d>\sqrt{x}}\frac{|h(d)|}{d}\le x^{-1/8}H, $$
since $d^{-1}=d^{-3/4}d^{-1/4}$ and $d^{-1/4}<x^{-1/8}$ for $d>\sqrt{x}$. [step 2.1, algebra]

3.1 Since $f(p)=g(p)$ for every prime, [F6] gives $M(f;x,T)=M(g;x,T)$. For $y=x/d\ge\sqrt{x}\ge3$, the prime sum defining $M$ is nondecreasing with the upper cutoff, and an attained minimizer at $y$ from [F7] gives
$$ 0\le M(g;x,T)-M(g;y,T)\le2\sum_{y<p\le x}\frac1p=2\log\!\left(\frac{\log x}{\log y}\right)+O(1)=O(1), $$
by [F5] and $\log y\ge\frac12\log x$. Therefore $(1+M(g;y,T))e^{-M(g;y,T)}\ll(1+M(f;x,T))e^{-M(f;x,T)}$, with an absolute comparison constant. [F5, F6, F7, given, algebra]

4.1 Sum the identity in step 1.2 over $n\le x$ and regroup its finite terms to obtain
$$ \sum_{n\le x}f(n)=\sum_{d\le x}h(d)\sum_{m\le x/d}g(m). $$
[step 1.2, given, algebra]

4.2 For $d\le\sqrt{x}$, let $y=x/d\ge\sqrt{x}\ge3$ and apply [A1] with $U=T$. Step 3.1 controls the exponential term; moreover $\log\log y/\log y\le2\log\log x/\log x$. Summing with weights $|h(d)|/d$ and using step 2.1 bounds this part by
$$ \ll_{C_0}x\left((1+M(f;x,T))e^{-M(f;x,T)}+\frac1T+\frac{\log\log x}{\log x}\right). $$
[A1, F6, step 1.2, step 2.1, step 3.1, algebra]

4.3 For $d>\sqrt{x}$, the trivial estimate $|\sum_{m\le x/d}g(m)|\le x/d$ and step 2.2 bound the remaining contribution in step 4.1 by $Hx^{7/8}$. By [F9], $x^{-1/8}\ll\log\log x/\log x$ for $x\ge9$: set $u=\log x$, use $u e^{-u/8}\to0$, and note $\log u$ is positive and bounded away from zero for $u\ge\log9$. Thus the tail is absorbed by the displayed logarithmic error. [F9, step 2.2, step 4.1, algebra]

5.1 Divide the bounds from steps 4.2–4.3 by $x$ and combine them. The resulting constant depends only on $C_0$ and absolute constants, proving the claim. [given, step 4.2, step 4.3, algebra] ∎

## Proof references

[[def-multiplicative-arithmetic-function]]

[[def-completely-multiplicative-arithmetic-function]]

[[thm-fundamental-theorem-of-arithmetic]]

[[lem-reciprocal-prime-sum-from-mertens-first-theorem]]

[[def-halasz-minimal-pretentious-distance]]

[[lem-halasz-minimal-distance-is-well-defined]]

[[thm-p-series-real-exponents]]

[[thm-exponential-beats-every-polynomial]]
