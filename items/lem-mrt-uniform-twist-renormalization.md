---
id: lem-mrt-uniform-twist-renormalization
kind: lemma
title: Uniform renormalization of a multiplicative mean under a real twist
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - thm-fundamental-theorem-of-arithmetic
  - thm-chebyshev-theta-linear-bounds
  - thm-logarithm-derivative-and-integral
  - thm-complex-exponential-is-entire-with-derivative-itself
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-integration-by-parts
  - thm-ftc-second-part
sources:
  references:
    - title: "Granville–Soundararajan, Decay of mean-values of multiplicative functions, arXiv v1, Section 7, Lemma 7.1 and its complete proof, pp. 22–23"
      url: https://arxiv.org/pdf/math/9911246v1
---

## Statement

Let $b:\mathbb Z_{>0}\to\mathbb C$ be multiplicative, meaning $b(1)=1$ and $b(mn)=b(m)b(n)$ whenever $m,n$ are coprime. Assume $|b(n)|\le1$ for all $n$. For every real $x\ge3$ and $\alpha\in\mathbb R$,
$$\sum_{n\le x}b(n)n^{i\alpha} =\frac{x^{i\alpha}}{1+i\alpha}\sum_{n\le x}b(n) +O\left(\frac{x\log(e+|\alpha|)}{\log x} \exp\left(\sum_{p\le x}\frac{|1-b(p)|}{p}\right)\right).$$
The implied constant is absolute, simultaneously for $b,x,\alpha$. All sums over $n$ are over positive integers and sums over $p$ are over primes; $u^{i\alpha}=\exp(i\alpha\log u)$ for $u>0$. No complete multiplicativity is assumed. Integrals in the proof are componentwise Riemann integrals; no choice axiom is required.

## Statement references

[Granville–Soundararajan, Lemma 7.1, pp. 22–23](https://arxiv.org/pdf/math/9911246v1)

## Facts & Assumptions

**Given:** The function $b$ and parameters in the Statement.

[F1] [[thm-fundamental-theorem-of-arithmetic]] gives unique prime factorization and hence the expansion of finite products over prime powers.

[F2] [[thm-chebyshev-theta-linear-bounds]] gives constants $C,x_0$ with $\theta(v):=\sum_{p\le v}\log p\le Cv$ for $v\ge x_0$. For $2\le v<x_0$, the elementary bound $\theta(v)\le v\log x_0$ supplies the same estimate with a larger absolute constant.

[F3] [[thm-logarithm-derivative-and-integral]], [[thm-complex-exponential-is-entire-with-derivative-itself]] and [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] give the power derivatives, $|u^{i\alpha}|=1$, and the real logarithmic integral.

[F4] [[thm-integration-by-parts]] and [[thm-ftc-second-part]] apply on compact intervals to continuously differentiable real functions. Applying them to real and imaginary parts gives the corresponding componentwise Riemann identities for complex functions. All calculus applications below have smooth integrands or finitely many step-function pieces.



## Proof

1.1 An absolute constant $C_0$ satisfies $\sum_{p^k\le v}k\log p\le C_0v$ for $v\ge2$. Indeed, [F2] gives an absolute $C_1$ with $\theta(w)\le C_1w$ for every $w\ge2$. The $k=1$ contribution is at most $C_1v$. For $2\le k\le K:=\lfloor\log v/\log2\rfloor$, [F2] bounds the contribution $k\theta(v^{1/k})$ by $C_1k\sqrt v$. Thus the total is at most $C_1v+C\sqrt v(\log v)^2\le C_0v$; the last inequality follows since $(\log v)^2/\sqrt v$ is bounded on $[2,\infty)$, as follows by differentiation. There are no contributing powers for $1\le v<2$. [F2, F3, algebra]

1.2 For every $z\ge1$, $$\sum_{m\le z}m^{i\alpha}=\frac{z^{1+i\alpha}}{1+i\alpha}+O(1+\alpha^2),\qquad \left|\sum_{m\le z}m^{i\alpha}\right|\le z.$$ For completeness let $q(u)=u^{i\alpha}$ and $N=\lfloor z\rfloor$. Twice integrating by parts on $[j,j+1]$ gives $$\frac{q(j)+q(j+1)}2-\int_j^{j+1}q(u)\,du =\frac12\int_j^{j+1}(u-j)(j+1-u)q''(u)\,du.$$ Sum for $1\le j<N$. The two endpoint corrections have modulus at most $1$, and $\int_1^N|q''(u)|\,du\le|\alpha|\sqrt{1+\alpha^2}\le C(1+\alpha^2)$. The integral of $q$ equals $(N^{1+i\alpha}-1)/(1+i\alpha)$; moving the upper endpoint from $N$ to $z$ costs at most $1$. This proves the first bound, including $N=1$. The second is the finite triangle inequality. [F3, F4, algebra]

2.1 Let $h$ be any nonnegative multiplicative function with $h(p^k)\le2$, and put $H(v)=\sum_{n\le v}h(n)$ and $E(v)=\sum_{n\le v}h(n)/n$. Unique factorization and positivity give $$\sum_{n\le v}h(n)\log n =\sum_{p^km\le v,\ (m,p)=1}k\log p\,h(p^k)h(m) \le 2\sum_{m\le v}h(m)\sum_{p^k\le v/m}k\log p \le 2C_0v E(v).$$ Also $H(u)\le uE(v)$ for $1\le u\le v$. Integrating each finite summand gives $\sum_{n\le v}h(n)\log(v/n)=\int_1^v H(u)\,du/u\le vE(v)$. Adding these two inequalities proves $$H(v)\le C_1\frac{v}{\log v}E(v)\qquad(v\ge2)$$ with an absolute $C_1$. This proves directly the mean bound needed in place of the sharper published (7.1). [F1, F3, step 1.1, algebra]

3.1 For $1\le Y\le\sqrt x$, set $a=x/Y\ge\sqrt x$. Integrating the step function $H$ on its finitely many constant pieces yields $$\sum_{a<n\le x}\frac{h(n)}n=\frac{H(x)}x-\frac{H(a)}a+\int_a^x\frac{H(u)}{u^2}\,du.$$ Dropping the negative term and using $E(u)\le E(x)$ and step 2.1 bounds this by $$C_1E(x)\left(\frac1{\log x}+\log\frac{\log x}{\log a}\right) \le C_2E(x)\frac{1+\log Y}{\log x}.$$ The last inequality uses $-\log(1-r)\le2r$ for $0\le r\le1/2$, obtained by integrating $1/(1-r)\le2$. For $3\le x<4$ the same bound follows directly from $\sum_{a<n\le x}h(n)/n\le E(x)$ by increasing $C_2$; for $x\ge4$ all arguments of step 2.1 here are at least $2$. [F3, F4, step 2.1, algebra]

3.2 Define $g(1)=1$ and, multiplicatively, $g(p^k)=b(p^k)-b(p^{k-1})$ for $k\ge1$. Telescoping at each prime gives $b(n)=\sum_{d\mid n}g(d)$. The multiplicative function $h=|g|$ is nonnegative, $h(p^k)\le2$, and $h(p)=|1-b(p)|$. Its harmonic sum has the uniform bound $$E(x)\le\prod_{p\le x}\left(1+\frac{|1-b(p)|}{p}+\sum_{k\ge2}\frac2{p^k}\right) \le \exp\left(\sum_{p\le x}\frac{|1-b(p)|}{p}+C_3\right).$$ Here $1+u\le e^u$ for $u\ge0$ and $\sum_{p\le x}2/[p(p-1)]\le\sum_{m\ge2}2/[m(m-1)]=2$. Only a finite product is used; its geometric factors majorize the finite sum $E(x)$. [F1, step 2.1, algebra]

4.1 Suppose $x\ge4$ and $Y:=1+\alpha^2\le\sqrt x$. Expanding $b(n)=\sum_{d\mid n}g(d)$ and changing finite summation order gives $$\sum_{n\le x}b(n)n^{i\alpha}=\sum_{d\le x}g(d)d^{i\alpha}\sum_{m\le x/d}m^{i\alpha}.$$ Use the first estimate of step 1.2 for $d\le a=x/Y$, and the second for $a<d\le x$. Complete the main sum over $d$ to $x$; the added terms are at most $x\sum_{a<d\le x}h(d)/d$ in modulus. The result is $$\sum_{n\le x}b(n)n^{i\alpha} =\frac{x^{1+i\alpha}}{1+i\alpha}\sum_{d\le x}\frac{g(d)}d +O\left(YH(a)+x\sum_{a<d\le x}\frac{h(d)}d\right) =\frac{x^{1+i\alpha}}{1+i\alpha}\sum_{d\le x}\frac{g(d)}d +O\left(\frac{xE(x)}{\log x}\log(e+|\alpha|)\right).$$ For the last equality use steps 2.1 and 3.1, $\log a\ge(\log x)/2$, and $1+\log(1+\alpha^2)\le C\log(e+|\alpha|)$. [step 2.1, step 3.1, step 3.2, step 1.2, algebra]

5.1 At $\alpha=0$ the same result gives $\sum_{n\le x}b(n)=x\sum_{d\le x}g(d)/d+O(xE(x)/\log x)$. Multiply this identity by $x^{i\alpha}/(1+i\alpha)$, whose modulus is at most $1$, and subtract from step 4.1. Step 3.2 then gives the claimed error in the case considered. [F3, step 3.2, step 4.1, algebra]

6.1 If $x\ge4$ and $1+\alpha^2>\sqrt x$, the two means in the Statement have difference at most $2x$. Moreover $|\alpha|>\sqrt{\sqrt x-1}\ge x^{1/4}/\sqrt2$, so $\log(e+|\alpha|)\ge c\log x$ with an absolute $c>0$ (for $x\ge16$ take $c=1/8$, and the compact interval $[4,16]$ is immediate). The claimed error therefore dominates $2x$, since its exponential is at least $1$. For $3\le x<4$ the same conclusion follows from $\log(e+|\alpha|)\ge1$ and $\log x\le\log4$. Together with step 5.1 these cases prove the uniform assertion. [F3, step 5.1, given, algebra] ∎
