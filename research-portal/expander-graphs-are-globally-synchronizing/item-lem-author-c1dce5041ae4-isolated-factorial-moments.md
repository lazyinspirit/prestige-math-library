---
title: Factorial moments of isolated vertices at the connectivity window
status: draft
research_item: lem-author-c1dce5041ae4-isolated-factorial-moments
dependency_level: 1
---

## Prerequisites

- [math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)
- [math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)
- [math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)
- [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)
- [math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral)
- [math:thm-logarithm-slower-than-every-positive-power](https://alphabetamath.cc/item/thm-logarithm-slower-than-every-positive-power)
- [math:def-indicator-random-variable](https://alphabetamath.cc/item/def-indicator-random-variable)
- [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)
- [math:cor-exponential-is-a-bijection-onto-positive-reals](https://alphabetamath.cc/item/cor-exponential-is-a-bijection-onto-positive-reals)
- [math:thm-algebra-of-limits](https://alphabetamath.cc/item/thm-algebra-of-limits)
- [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)
- [math:thm-algebra-of-continuous-functions](https://alphabetamath.cc/item/thm-algebra-of-continuous-functions)
- [math:lem-continuous-functions-riemann-integrable](https://alphabetamath.cc/item/lem-continuous-functions-riemann-integrable)
- [math:lem-riemann-integral-linearity](https://alphabetamath.cc/item/lem-riemann-integral-linearity)
- [math:thm-monotone-change-of-variable-for-riemann-integrals](https://alphabetamath.cc/item/thm-monotone-change-of-variable-for-riemann-integrals)


## Statement

Let $G\sim G(n,p)$, let $X$ count isolated vertices (vertices incident to no edges), and write $(x)_r=x(x-1)\cdots(x-r+1)$, with $(x)_0=1$. For $0\le r\le n$,
$$\mathbb E(X)_r=(n)_r(1-p)^{rn-r(r+1)/2}.$$
Here a power with exponent zero is the empty product $1$, including $0^0=1$ in this formula.
If $p=(\log n+c_n)/n$ and $c_n\to c\in\mathbb R$, then for each fixed integer $r\ge0$, $\mathbb E(X)_r\to e^{-cr}$.

## Facts & Assumptions

**Given:** The objects and hypotheses of the Statement.

**Goal:** Prove the Statement.

[F1] Distinct possible edges are independent and each is absent with probability $1-p$ ([math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)).

[F2] For a finite probability space expectation is the outcome-weighted sum; finite sums can therefore be interchanged ([math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)).

[F3] The falling factorial $(x)_r$ counts ordered selections of $r$ distinct elements from a set of size $x$, by successive selection ([math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)).

[F4] Limits and the symbols $O$ and $o$ have their sequence meanings ([def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)).

[F5] The logarithm satisfies $\log x=\int_1^x dt/t$ ([math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral)).

[F6] For every $a>0$, $\log n/n^a\to0$ ([math:thm-logarithm-slower-than-every-positive-power](https://alphabetamath.cc/item/thm-logarithm-slower-than-every-positive-power)).

[F7] For an event $A$ in a finite probability space, $\mathbf 1_A$ equals $1$ on $A$ and $0$ elsewhere ([math:def-indicator-random-variable](https://alphabetamath.cc/item/def-indicator-random-variable)).

[F8] The logarithm is the inverse of the exponential: $\exp(\log x)=x$ for $x>0$ and $\log(\exp y)=y$ for real $y$ ([math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)).

[F9] The exponential is continuous on $\mathbb R$ and is a bijection onto $(0,\infty)$ ([math:cor-exponential-is-a-bijection-onto-positive-reals](https://alphabetamath.cc/item/cor-exponential-is-a-bijection-onto-positive-reals), its first fact and Statement).

[F10] Limits of real sequences respect sums, differences, scalar multiples, finite products and quotients with nonzero limiting denominator ([math:thm-algebra-of-limits](https://alphabetamath.cc/item/thm-algebra-of-limits)).

[F11] On positive reals, the logarithm is continuous, strictly increasing and onto $\mathbb R$, $\log 1=0$, $\log(xy)=\log x+\log y$ and $\log(x/y)=\log x-\log y$ ([math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)).

[F12] Constants, the identity, sums, scalar multiples, products and quotients with nonvanishing denominator are continuous on their domains ([math:thm-algebra-of-continuous-functions](https://alphabetamath.cc/item/thm-algebra-of-continuous-functions)).

[F13] Continuous real functions on a compact interval are Riemann integrable. Their oriented integrals reverse sign on reversing endpoints and vanish on zero-length intervals. Integrals preserve pointwise order, and the integral of a constant $d$ over $[a,b]$ is $d(b-a)$, by the constant bounds in the Statement ([math:lem-continuous-functions-riemann-integrable](https://alphabetamath.cc/item/lem-continuous-functions-riemann-integrable)).

[F14] The oriented Riemann integral is linear in continuous integrands ([math:lem-riemann-integral-linearity](https://alphabetamath.cc/item/lem-riemann-integral-linearity)).

[F15] If $\phi:[c,d]\to[a,b]$ is a monotone surjection, differentiable with one-sided endpoint derivatives and Riemann-integrable derivative, and $f$ is bounded and Riemann integrable on $[a,b]$, then $\int_a^b f(x)\,dx=\int_c^d f(\phi(t))|\phi'(t)|\,dt$ ([math:thm-monotone-change-of-variable-for-riemann-integrals](https://alphabetamath.cc/item/thm-monotone-change-of-variable-for-riemann-integrals)).

## Proof

**Proof technique:** direct.

1.1 For each ordered tuple $t$ of $r$ distinct vertices, let $A_t$ be the event that every vertex in $t$ is isolated. In each graph, the number of such tuples is $(X)_r$, so $(X)_r=\sum_t\mathbf 1_{A_t}$. By the finite expectation formula, $\mathbb E\mathbf 1_{A_t}=\sum_{\omega\in A_t}w(\omega)=\mathbb P(A_t)$, and the two finite sums can be interchanged. The edges required absent consist of $r(n-r)$ edges to the complement and $r(r-1)/2$ internal pairs, for a total of $m_{n,r}=rn-r(r+1)/2$. Independence gives $\mathbb P(A_t)=(1-p)^{m_{n,r}}$. There are $(n)_r$ tuples, proving the exact formula. When $m_{n,r}=0$ the absent-edge product is $1$, even at $p=1$; for $r=0$ there is one empty tuple and its event is the whole probability space. [F1, F2, F3, F7, algebra]

1.2 Fix $0<u<1$. The rational integrands below are continuous by [F12], since $x\ge1-u>0$ on $[1-u,1]$ and $1-t\ge1-u>0$ on $[0,u]$; hence they are bounded and integrable by [F13]. The decreasing affine surjection $\phi(t)=1-t$ from $[0,u]$ onto $[1-u,1]$ has derivative $-1$ at every point, including the one-sided endpoints (its difference quotient is identically $-1$), so its derivative is integrable. Applying [F15], then [F5], [F13] and [F14], gives $\log(1-u)=-\int_{1-u}^1 dx/x=-\int_0^u dt/(1-t)$ and $\log(1-u)+u=-\int_0^u t/(1-t)\,dt$. To evaluate $I:=\int_0^u t\,dt$, use the affine surjection $\psi(t)=u-t$ from $[0,u]$ onto itself, with the same derivative $-1$ and the continuous bounded integrand $f(x)=x$. By [F15] and [F14], $I=\int_0^u(u-t)\,dt=u^2-I$, using the constant-integral rule in [F13]; hence $I=u^2/2$. On $[0,u]$ we have $0\le t/(1-t)\le t/(1-u)$, so [F13] and [F14] give $|\log(1-u)+u|=\int_0^u t/(1-t)\,dt\le u^2/[2(1-u)]$. At $u=0$ the identity and bound follow from the zero-length integral rule and $\log1=0$. [F5, F11, F12, F13, F14, F15, algebra]

2.1 Since $c_n\to c$, eventually $|c_n|\le |c|+1$. The logarithm is unbounded above by [F11], so $p=O(\log n/n)\to0$, and $np^2=O((\log n)^2/n)\to0$ by [F6] with $a=1/2$. For fixed $r$, therefore $m_{n,r}\log(1-p)=-m_{n,r}p+o(1)=-r(\log n+c_n)+o(1)$. Also $q_n:=(n)_r/n^r=\prod_{j=0}^{r-1}(1-j/n)\to1$ by the finite product limit rule, and $q_n>0$ eventually. [step 1.1, step 1.2, F3, F4, F6, F10, F11, algebra]

3.1 Fix $r\ge1$. Eventually $n\ge r$ and $0\le p<1$, so the exact moment in step 1.1 is positive. The product and quotient laws for logarithms, applied repeatedly to its integer powers, give $\log\bigl(\mathbb E(X)_r\bigr)=\log q_n+r\log n+m_{n,r}\log(1-p)=-rc_n+o(1)\to-rc$, since $\log q_n\to\log1=0$. Apply the inverse relation and continuity of the exponential to conclude $\mathbb E(X)_r\to\exp(-rc)=e^{-cr}$. For $r=0$ the moment is identically $1=e^0$. [step 1.1, step 2.1, F4, F8, F9, F10, F11, algebra] ∎
