---
title: A uniform inverse-sine majorant and geometric angular tail
status: draft
research_item: lem-author-2e2d9953c21a-geometric-tail
dependency_level: 1
---

## Prerequisites

- [lem-author-2e2d9953c21a-sine-enclosures](item-lem-author-2e2d9953c21a-sine-enclosures)
- [lem-author-2e2d9953c21a-logarithm-and-pi](item-lem-author-2e2d9953c21a-logarithm-and-pi)
- [math:def-principal-inverse-sine-and-cosine](https://alphabetamath.cc/item/def-principal-inverse-sine-and-cosine)
- [math:def-series](https://alphabetamath.cc/item/def-series)
- [math:thm-nonnegative-series-bounded-partial-sums](https://alphabetamath.cc/item/thm-nonnegative-series-bounded-partial-sums)
- [math:lem-rat-embeds-dense](https://alphabetamath.cc/item/lem-rat-embeds-dense)


## Statement

Put $h=3.168$, $t=3.326$, $r=t/h$ and $q=2.1274$, with these decimals interpreted as exact rationals. For $0\le x\le1/4$, $\arcsin x\le rx$. Consequently, for every real $C\ge63.295$, the series $\sum_{k=0}^{\infty}\arcsin(h/(Cq^k))$ converges and its sum is at most $t/(C(1-1/q))$. For every integer $m\ge0$, the tail series also converges and satisfies $0\le\sum_{k=m}^{\infty}\arcsin(h/(Cq^k))\le t/(Cq^m(1-1/q))$.

## Facts & Assumptions

[F1] [lem-author-2e2d9953c21a-sine-enclosures](item-lem-author-2e2d9953c21a-sine-enclosures) gives $y-y^3/6\le\sin y\le y$ for rational $y$ with $0\le y\le1$; in particular $\sin0=0$.

[F2] [math:def-principal-inverse-sine-and-cosine](https://alphabetamath.cc/item/def-principal-inverse-sine-and-cosine) supplies sine continuity and strict increase on $[-\pi/2,\pi/2]$, and its principal inverse.

[F3] [lem-author-2e2d9953c21a-logarithm-and-pi](item-lem-author-2e2d9953c21a-logarithm-and-pi) supplies a rational enclosure of $\pi$; its $N=1$ Machin bound gives $\pi>3$.

[F4] [math:def-series](https://alphabetamath.cc/item/def-series) defines a series sum as the limit of its partial sums and defines the tail starting at an integer $m\ge0$ as the series with terms $a_{m+j}$ for integers $j\ge0$.

[F5] [math:thm-nonnegative-series-bounded-partial-sums](https://alphabetamath.cc/item/thm-nonnegative-series-bounded-partial-sums) states that a real series with nonnegative terms converges if its partial sums are bounded above, and its sum is then the supremum of those partial sums.

[F6] [math:lem-rat-embeds-dense](https://alphabetamath.cc/item/lem-rat-embeds-dense) states that strictly between any two distinct real numbers lies a rational number.

## Proof

**Given:** The exact rational constants above, and real $C\ge63.295$ and integer $m\ge0$ for the series and tail claims.

**Goal:** Prove the stated inverse-sine and geometric-tail estimates.

1.1 We first extend the lower bound in [F1] to all real $y\in[0,1]$. Put $p(y)=y-y^3/6$. For $y,z\in[0,1]$, factorization gives $|p(z)-p(y)|=|z-y|\,|1-(z^2+zy+y^2)/6|\le(3/2)|z-y|$. The endpoints $y=0,1$ are rational, so [F1] applies there. Fix real $0<y<1$ and $\varepsilon>0$. By [F3], $[0,1]\subset[-\pi/2,\pi/2]$, and continuity in [F2] gives $\delta>0$ such that $|\sin z-\sin y|<\varepsilon/2$ for branch points $z$ with $|z-y|<\delta$. Set $\eta=\min\{\delta,\varepsilon/3,y,1-y\}>0$. By [F6], choose a rational $z$ strictly between $y-\eta$ and $y+\eta$. Then $0<z<1$, $|p(z)-p(y)|<\varepsilon/2$, and [F1] gives $p(z)\le\sin z$. Therefore $p(y)<p(z)+\varepsilon/2\le\sin z+\varepsilon/2<\sin y+\varepsilon$. Since this holds for every $\varepsilon>0$, $p(y)\le\sin y$: a positive difference would violate it at half that difference. Thus $y-y^3/6\le\sin y$ for every real $0\le y\le1$. [given, F1, F2, F3, F6, choose, algebra]

2.1 Exact rational arithmetic gives $1<r<21/20$ and $r-r^3/96>1$. For $0\le x\le1/4$, $0\le rx\le21/80<1<\pi/2$, and step 1.1 yields $\sin(rx)\ge rx-r^3x^3/6\ge x(r-r^3/96)\ge x$. By increasing-branch inversion, $\arcsin x\le rx$. Since $\sin0=0$, the same branch inversion gives $\arcsin0=0$ and $\arcsin x\ge0$ for $x\ge0$ in this interval. At $x=0$ equality holds. [given, F1, F2, F3, step 1.1, algebra]

3.1 Since $h/63.295<1/4$ and $q>1$, for every integer $k\ge0$ the argument $h/(Cq^k)$ lies in $[0,1/4]$. Set $a_k=\arcsin(h/(Cq^k))$. Step 2.1 gives $0\le a_k\le t/(Cq^k)$. Thus these are well-defined nonnegative real terms. [given, step 2.1, algebra]

4.1 Put $\rho=1/q$, so $0<\rho<1$. For integers $m,n\ge0$, let $P_{m,n}=\sum_{j=0}^{n-1}a_{m+j}$ and $G_n=\sum_{j=0}^{n-1}\rho^j$, with both sums zero when $n=0$. The finite telescoping identity $(1-\rho)G_n=\sum_{j=0}^{n-1}(\rho^j-\rho^{j+1})=1-\rho^n$ holds also at $n=0$. Since $0<\rho^n\le1$, it gives $0\le G_n\le1/(1-\rho)$. Termwise finite summation of step 3.1 therefore gives $0\le P_{m,n}\le(t/(Cq^m))G_n\le B_m$, where $B_m=t/(Cq^m(1-1/q))$ is positive and independent of $n$. [given, F4, step 3.1, algebra]

5.1 Fix any integer $m\ge0$. By [F4], $P_{m,n}$ are precisely the partial sums of the tail series with terms $a_{m+j}$. These terms are nonnegative by step 3.1, and their partial sums are bounded above by $B_m$ by step 4.1. Hence [F5] proves convergence and identifies the tail sum with the supremum of these partial sums, which lies in $[0,B_m]$. This proves the stated tail bound for every integer $m\ge0$; taking $m=0$ gives convergence and the bound for the full series. [given, F4, F5, step 3.1, step 4.1] ∎
