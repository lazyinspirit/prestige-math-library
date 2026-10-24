---
id: thm-hadamard-factorization-for-finite-order-entire-functions
kind: theorem
title: "Hadamard factorization for finite-order entire functions"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-order-of-an-entire-function, def-weierstrass-products-canonical-products-and-genus, def-weierstrass-elementary-factor, lem-unit-disc-estimate-for-weierstrass-elementary-factors, thm-canonical-product-convergence-from-exponent-sum, thm-weierstrass-factorization-for-entire-functions, thm-zero-exponent-is-bounded-by-entire-order, thm-entire-polynomial-growth-is-polynomial, thm-boundary-maximum-modulus-principle, thm-local-maximum-modulus-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 5 Hadamard's factorization theorem"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 3 §3.6"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
---

## Statement

Let $f$ be a nonzero entire function of finite order $\rho$, let $m$ be the
order of its zero at $0$, let $(a_n)_{n\ge1}$ list its nonzero zeros with
multiplicity and without finite accumulation point, and put

$$p:=\lfloor\rho\rfloor.$$

Then there is a polynomial $Q$ of degree at most $p$ such that

$$f(z)=z^m e^{Q(z)}\prod_{n\ge1}E_p(z/a_n).$$

In particular, a finite-order entire function factors as an exponential of a
polynomial times a canonical product whose genus is bounded by its order.

## Facts & Assumptions

**Given:** A nonzero entire function $f$ of finite order $\rho$, its zero order $m$ at $0$, and its nonzero zero sequence $(a_n)$.

[F1] The order of an entire function is the limsup growth rate of $\log\log M_f(r)$ ([[def-order-of-an-entire-function]]).

[F2] The exponent of convergence of the nonzero zero sequence of a finite-order entire function does not exceed the order ([[thm-zero-exponent-is-bounded-by-entire-order]]).

[F3] If $\sum|a_n|^{-(p+1)}$ converges, then the canonical product $\prod E_p(z/a_n)$ converges normally on $\mathbb C$ and has exactly the zeros $a_n$ with their multiplicities ([[thm-canonical-product-convergence-from-exponent-sum]]).

[F4] The elementary factor is $$E_p(w)=(1-w)\exp\!\left(w+\frac{w^2}{2}+\cdots+\frac{w^p}{p}\right),$$ and on the unit disc it satisfies $|1-E_p(w)|\le|w|^{p+1}$ ([[def-weierstrass-elementary-factor]], [[lem-unit-disc-estimate-for-weierstrass-elementary-factors]]).

[F5] Every nonzero entire function factors as an exponential times a Weierstrass product over its zeros ([[thm-weierstrass-factorization-for-entire-functions]]).

[F6] An entire function with polynomial growth is a polynomial ([[thm-entire-polynomial-growth-is-polynomial]]).

[F7] If a holomorphic function on a bounded complex domain extends continuously to the boundary, then its modulus is bounded there by a boundary value ([[thm-boundary-maximum-modulus-principle]]).

[F8] If a holomorphic function has an interior local modulus maximum, then it is constant ([[thm-local-maximum-modulus-principle]]).

## Proof

**Proof technique:** direct.

1.1 Since $p+1>\rho$, [F2] gives $\sum_{n\ge1}|a_n|^{-(p+1)}<\infty$. Therefore [F3] constructs the canonical product $P(z):=\prod_{n\ge1}E_p(z/a_n)$, and $P$ has exactly the nonzero zeros of $f$, with multiplicity. [F2, F3, F1, given, construct]

1.2 Fix a real number $\sigma$ with $\rho<\sigma\le p+1$. By [F1], for all sufficiently large $R$ one has $\log M_f(R)\le R^\sigma$, and [F2] gives a finite sum $S_\sigma:=\sum_{n\ge1}|a_n|^{-\sigma}<\infty$. [F1, F2, given, choose, algebra]

2.1 The quotient $H(z):=f(z)/(z^mP(z))$ is therefore entire and zero-free: the factor $z^m$ removes the zero at $0$, and step 1.1 removes every other zero of $f$ with the correct multiplicity. [step 1.1, given, algebra]

2.2 There is a constant $A_\sigma\ge0$ such that $$\frac{1}{|E_p(w)|}\le \exp(A_\sigma|w|^\sigma)$$ whenever $|w|\ge2$ or $|w|\le1/2$. Indeed, if $|w|\ge2$, then [F4] gives $$\frac{1}{|E_p(w)|}=\frac{1}{|1-w|}\exp\!\left(-\operatorname{Re}\!\left(w+\frac{w^2}{2}+\cdots+\frac{w^p}{p}\right)\right)\le \exp\!\left(\sum_{k=1}^p \frac{|w|^k}{k}\right)\le \exp(A_\sigma|w|^\sigma),$$ because $|1-w|\ge1$ and $k\le p<\sigma+1$. If $|w|\le1/2$, then [F4] gives $|1-E_p(w)|\le|w|^{p+1}\le|w|^\sigma\le1/2$, so $$\frac{1}{|E_p(w)|}\le\frac{1}{1-|1-E_p(w)|}\le \exp(2|w|^\sigma).$$ Enlarge the constant once to cover both cases. [F4, step 1.2, algebra]

3.1 Fix $r\ge1$ such that $r$ is not one of the moduli $|a_n|$, and put $$H_1(z):=\frac{f(z)}{z^m\prod_{|a_n|\le2r}E_p(z/a_n)},\qquad H_2(z):=\prod_{|a_n|>2r}E_p(z/a_n)^{-1}.$$ Then $H=H_1H_2$. If $|z|=4r$, every factor of $H_1$ satisfies $|z/a_n|\ge2$, so steps 1.2 and 2.2 give $$|H_1(z)|\le |f(z)|\exp\!\left(A_\sigma|z|^\sigma\sum_{|a_n|\le2r}|a_n|^{-\sigma}\right)\le \exp((1+A_\sigma S_\sigma)|z|^\sigma)$$ for all sufficiently large $r$. The function $H_1$ is entire by step 2.1, so [F7] applies on the disc $|z|<4r$ and gives the same bound for $|z|=r$. On that circle every factor of $H_2$ satisfies $|z/a_n|<1/2$, so step 2.2 gives $$|H_2(z)|\le \exp\!\left(A_\sigma|z|^\sigma\sum_{|a_n|>2r}|a_n|^{-\sigma}\right)\le \exp(A_\sigma S_\sigma|z|^\sigma).$$ Therefore $|H(z)|\le\exp(B_\sigma|z|^\sigma)$ on $|z|=r$ for all sufficiently large admissible $r$, with $B_\sigma:=1+2A_\sigma S_\sigma$. Since such radii occur arbitrarily large, $H$ has order at most $\rho$. [F7, step 2.1, step 1.2, step 2.2, algebra]

4.1 Apply [F5] to the zero-free entire function $H$. Since $H$ has no zeros at all, its Weierstrass product part is empty, so there is an entire function $g$ with $H=e^g$. Hence $f(z)=z^m e^{g(z)}P(z)$. [F5, step 2.1, step 3.1, construct]

4.2 For $R>0$, let $A_R:=1+\max_{|\zeta|=R}\operatorname{Re}(g(\zeta)-g(0))$. Because $|H|=e^{\operatorname{Re}g}$ and step 3.1 bounds $M_H(R)$ by $\exp(C''_\sigma(1+R^\sigma))$, one has $A_R\le C'''_\sigma(1+R^\sigma)$. On the disc $|z|<R$, define $F_R(z):=(g(z)-g(0))/(2A_R-(g(z)-g(0)))$. If $|z|=R$, then $\operatorname{Re}(g(z)-g(0))\le A_R-1$, so $|2A_R-(g(z)-g(0))|^2-|g(z)-g(0)|^2=4A_R(A_R-\operatorname{Re}(g(z)-g(0)))>0$, hence $|F_R(z)|<1$ on the boundary circle. Also $F_R(0)=0$, so $F_R(z)/z$ extends holomorphically across $0$. If $|F_R(z)/z|$ had an interior local maximum larger than $1/R$, then multiplying by the constant $R$ would give an interior local modulus maximum for a nonconstant holomorphic function, contradicting [F8]. Therefore $|F_R(z)|\le|z|/R$ for $|z|<R$. [F8, step 3.1, construct, algebra]

5.1 For $|z|\le R/2$, step 4.2 gives $|F_R(z)|\le1/2$, so $|g(z)-g(0)|=2A_R|F_R(z)|/|1+F_R(z)|\le2A_R$. Together with the bound on $A_R$, this yields $|g(z)|\le C''''_\sigma(1+R^\sigma)$ for $|z|\le R/2$. Taking $R:=2(1+|z|)$ gives a global growth estimate $|g(z)|\le C_\sigma^{(5)}(1+|z|)^\sigma$ on $\mathbb C$. [step 4.2, algebra]

6.1 Step 5.1 holds for every $\sigma>\rho$. Applying [F6] to any one such $\sigma$ makes $g$ a polynomial; because the polynomial degree is an integer and the bound is available for every $\sigma>\rho$, the degree of $g$ is at most $p=\lfloor\rho\rfloor$. Put $Q:=g$. Then step 4.1 becomes $f(z)=z^m e^{Q(z)}\prod_{n\ge1}E_p(z/a_n)$ with $\deg Q\le p$, exactly as claimed. [F6, step 4.1, step 5.1] ∎
