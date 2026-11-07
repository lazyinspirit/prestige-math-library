---
id: lem-primitive-khintchine-groshev-radial-mass-divergence
kind: lemma
title: "Divergence of the total primitive Khintchine–Groshev event mass"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-countable-choice
  - def-primitive-linear-form-approximation-condition
  - def-number-theoretic-mobius-function
  - def-unit-group-modulo-n-and-euler-totient
  - thm-euler-totient-product-formula
  - thm-fundamental-theorem-of-arithmetic
  - thm-sum-of-totients-over-divisors
  - lem-primitive-khintchine-groshev-event-bounds-and-intersections
  - lem-primitive-vector-supnorm-shell-count
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Victor Beresnevich and Sanju Velani, Classical Metric Diophantine Approximation Revisited: the Khintchine–Groshev Theorem, §3.2"
      url: "https://arxiv.org/pdf/0811.0809v3"
---

## Statement

Assume the Axiom of Countable Choice. Let $n,m\ge1$ with $nm>1$, and let $\psi:\mathbb N\to[0,1/2)$ satisfy

$$\sum_{h=1}^{\infty}h^{n-1}\psi(h)^m=\infty.$$

For each $q\in\mathbb Z^n\setminus\{0\}$, let $B'(q,\delta)$ be the set of matrices in $[0,1)^{n\times m}$ for which some offset $p\in\mathbb Z^m$ satisfies $\|qX+p\|_\infty<\delta$ and $\gcd(q_1,\ldots,q_n,p_1,\ldots,p_m)=1$. For $h\ge1$, define

$$M_{n,m}(h):=\sum_{\substack{q\in\mathbb Z^n\setminus\{0\}\\\|q\|_\infty=h}}|B'(q,\psi(h))|.$$

Then the following shell lower bounds hold:

$$M_{n,m}(h)\ge
\begin{cases}
2^m n h^{n-1}\psi(h)^m,&m\ge2,\\
h^{n-1}\psi(h),&m=1,\ n\ge3,\\
8h\psi(h),&m=1,\ n=2.
\end{cases}$$

In particular,

$$\sum_{q\in\mathbb Z^n\setminus\{0\}}|B'(q,\psi(\|q\|_\infty))|=\infty.$$

## Statement references

[Beresnevich and Velani, *Classical Metric Diophantine Approximation Revisited*, §3.2](https://arxiv.org/pdf/0811.0809v3)

## Facts & Assumptions

**Given:** Countable Choice, $nm>1$, the radius function, and divergence of its weighted power sum.

[A1] Countable Choice supplies the countably additive Lebesgue measures on the matrix cubes. ([[def-countable-choice]])

[F1] The primitive event mass is $(2\delta)^m\prod_{p\mid d}(1-p^{-m})$ for $d=\gcd(q_1,\ldots,q_n)$. ([[lem-primitive-khintchine-groshev-event-bounds-and-intersections]])

[F2] In dimension two, $8\varphi(r)$ primitive integer vectors lie on the sup-norm shell of radius $r$; in dimensions at least three there are at least $r^{n-1}/2$. ([[lem-primitive-vector-supnorm-shell-count]])

[F3] Euler's product formula is $\varphi(r)/r=\prod_{p\mid r}(1-p^{-1})$, and $\sum_{k\mid r}\varphi(k)=r$. ([[thm-euler-totient-product-formula]], [[thm-sum-of-totients-over-divisors]])

[F4] The Möbius function is supported on squarefree divisors with sign $(-1)^{\#\{p:p\mid d\}}$; unique prime factorization identifies the finite prime support. ([[def-number-theoretic-mobius-function]], [[thm-fundamental-theorem-of-arithmetic]])

## Proof




1.1 Suppose $m\ge2$. For every positive integer $d$, the product in [F1] obeys $\displaystyle \prod_{p\mid d}(1-p^{-m})\ge\prod_{p\mid d}(1-p^{-2})\ge\prod_{k=2}^{R}(1-k^{-2})>\frac12,$ where $R$ is at least the largest prime divisor of $d$; for $d=1$ the product is empty and equals $1$. The finite product identity follows from $1-k^{-2}=(k-1)(k+1)/k^2$ and cancellation. Also $\displaystyle \#\{q\in\mathbb Z^n:\|q\|_\infty=h\}=(2h+1)^n-(2h-1)^n =2\sum_{j=0}^{n-1}(2h+1)^{n-1-j}(2h-1)^j\ge2n h^{n-1},$ because each of the $n$ summands is at least $h^{n-1}$ for $h\ge1$. This proves the first shell bound. [given, F1, algebra, algebra]

1.2 Suppose $m=1$ and $n\ge3$. Restrict the shell at radius $h$ to primitive rows $q$, for which $d=1$ and [F1] gives event measure $2\psi(h)$. By [F2], this shell contributes at least $h^{n-1}\psi(h)$, proving the second shell bound. [given, F1, F2, algebra]

1.3 It remains to treat $m=1,n=2$. Write $q=d u$ with $d=\gcd(q_1,q_2)>0$ and $u$ primitive. On the shell $\|q\|_\infty=h$, one has $d\mid h$ and $\|u\|_\infty=h/d$. The number of such rows for a given $d$ is $8\varphi(h/d)$ by [F2], and their event mass is $2\psi(h)\varphi(d)/d$ by [F1] and [F3]. Hence the shell mass is $\displaystyle 16\psi(h)\sum_{d\mid h}\frac{\varphi(d)\varphi(h/d)}d.$ [given, F1, F2, F3, algebra, algebra]

2.1 For the divisor sum in step 1.3, apply [F3] and [F4]: $\displaystyle \begin{aligned} \sum_{d\mid h}\frac{\varphi(d)\varphi(h/d)}d &=\sum_{d\mid h}\varphi(h/d)\sum_{\ell\mid d}\frac{\mu(\ell)}\ell\\ &=\sum_{\ell\mid h}\frac{\mu(\ell)}\ell\sum_{k\mid h/\ell}\varphi(k) =h\sum_{\ell\mid h}\frac{\mu(\ell)}{\ell^2} =h\prod_{p\mid h}(1-p^{-2}). \end{aligned}$ The last product is at least $1/2$ by the finite-product estimate in step 1.1. Thus every radius-$h$ shell contributes at least $8h\psi(h)$, proving the third shell bound. Summing the appropriate shell bound over $h$ and using the hypothesis proves divergence of the total primitive event mass. [step 1.1, step 1.2, step 1.3, F3, F4, algebra] ∎
