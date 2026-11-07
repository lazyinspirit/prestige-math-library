---
dependency_level: 3
id: lem-logarithmic-averaging-for-completely-multiplicative-sums
kind: lemma
title: "Logarithmic averaging for bounded completely multiplicative sums"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-completely-multiplicative-arithmetic-function
  - def-von-mangoldt-function
  - thm-von-mangoldt-divisor-sum-identity
  - thm-selberg-sieve-upper-bound-with-remainders
  - thm-fundamental-theorem-of-arithmetic
  - thm-p-series-real-exponents
proof_strategy: direct
sources:
  references:
    - title: "Andrew Granville and K. Soundararajan, The Distribution of Prime Numbers, author manuscript"
      url: "https://dms.umontreal.ca/~andrew/PDF/PretendBook010610.pdf"
      locator: "Section 3.1, equation (3.1.3), PDF pp. 23–24"
---

## Statement

There is an absolute constant $C$ such that every completely multiplicative function $g:\mathbb Z_{>0}\to\mathbb C$ with $|g(n)|\le1$ and every real $x\ge3$ satisfy, with $S(y):=\sum_{n\le y}g(n)$,

$$ |S(x)|\le\frac{Cx}{\log x}\left(1+\int_1^x\frac{|S(y)|}{y^2}\,dy\right). $$

## Statement references

[[def-completely-multiplicative-arithmetic-function]]

[Granville–Soundararajan, §3.1, equation (3.1.3), PDF pp. 23–24](https://dms.umontreal.ca/~andrew/PDF/PretendBook010610.pdf)

## Facts & Assumptions

**Given:** $g,x,S$ as in the Statement; all implied constants below are absolute.

[F1] Complete multiplicativity gives $g(ab)=g(a)g(b)$ and $g(1)=1$ ([[def-completely-multiplicative-arithmetic-function]]).

[F2] $\log n=\sum_{d\mid n}\Lambda(d)$, where $\Lambda(p^k)=\log p$ and $\Lambda(n)=0$ otherwise ([[thm-von-mangoldt-divisor-sum-identity]], [[def-von-mangoldt-function]]).

[F3] The finite Selberg sieve bounds a sifted interval count by $X/H+\sum_{d,e}\rho(d)\rho(e)r_{[d,e]}$, with the exact explicit weights and density data in [[thm-selberg-sieve-upper-bound-with-remainders]].

[F4] Unique prime factorization holds ([[thm-fundamental-theorem-of-arithmetic]]), and $\sum_{n\ge1}n^{-3/2}<\infty$ ([[thm-p-series-real-exponents]]).

## Proof

1.1 We first prove uniformly for real $v\ge0$ and $h\ge2$ that the number of primes in $(v,v+h]$ is $O(h/\log(2h))$. It suffices to take large $h$. Put $R=h^{1/8}$, $z=R$ and sieve the consecutive integers in this interval by the zero residue class modulo every prime $p<R$. In [F3] use $X=h$, density $g_0(p)=1/p$, sieve level $R^2$, and the translated forbidden classes if the interval is indexed from $1$. Then $A_d=h/d+O(1)$, with error at most $2$, for every squarefree $d$; the allowed weight indices are precisely squarefree $d<R$. Write $\varphi(d):=\prod_{p\mid d}(p-1)$ on squarefree $d$. The normalizing sum is $H=\sum_{d<R,\ d\text{ squarefree}}1/\varphi(d)$ and the explicit sieve weights satisfy $|\rho(d)|\le d/\varphi(d)\le d$, since their inner sum is at most $H$. Consequently the absolute remainder is at most $2(\sum_{d<R}d)^2=O(R^4)$. [F3, F4, construct, algebra]

1.2 Put $H_0(u):=\sum_{1\le n<u}1/n$. Elementary integral comparison gives $H_0(u)=\log u+O(1)$ for $u\ge1$. A nonsquarefree integer is divisible by some $k^2$ with $k\ge2$, so
$$ \sum_{d<R,\ d\text{ squarefree}}\frac1d\ge H_0(R)-\sum_{2\le k<\sqrt R}\frac1{k^2}H_0(R/k^2). $$
Since $H_0(R/k^2)\le\log R+1$ and $\sum_{k\ge2}k^{-2}\le1/4+\int_2^\infty t^{-2}\,dt=3/4$, the right side is at least $\frac14\log R-O(1)$. Thus $H\ge c\log R$ for all sufficiently large $R$, with an absolute $c>0$. Every prime at least $R$ in the interval survives the sieve, and there are at most $R$ smaller primes. Step 1.1 therefore bounds the prime count by $O(h/\log R+R^4+R)=O(h/\log(2h))$; bounded $h\ge2$ follow from the trivial count $h+1$. [F4, step 1.1, algebra]

2.1 Let $B(x):=\sum_{n\le x}g(n)\log n$. Since $|g(n)|\le1$,
$$ |S(x)\log x-B(x)|\le\sum_{n\le x}\log(x/n)=\int_1^x\frac{\lfloor t\rfloor}{t}\,dt\le x. $$
By [F1]–[F2], finite rearrangement gives $B(x)=\sum_{d\le x}g(d)\Lambda(d)S(x/d)$. The prime-power terms with $d=p^k$, $k\ge2$, have total modulus at most $x\sum_{p,k\ge2}\log p/p^k=O(x)$. Indeed the last sum is bounded by $2\sum_{p}\log p/p^2<\infty$, since $\log p\ll\sqrt p$ and [F4] applies. Hence
$$ |S(x)|\log x\le\sum_{p\le x}\log p\,|S(x/p)|+O(x). $$
[F1, F2, F4, given, algebra]

3.1 Fix an absolute sufficiently large $Y_0$. For $Y\ge Y_0$, partition any interval $[Y,Z]$ with $Y<Z\le2Y$ into consecutive intervals of length at most $h:=Y/(\log Y)^2$. Except for the last interval their length is $h$; bound the last prime count by an interval of length $h$. Step 1.2 and $\log h\asymp\log Y$ show that the prime weight $\sum\log p$ on each interval is $O(h)$. The number of intervals is at most $Y/h+1$. For $t,u$ in the same such interval,
$$ \bigl||S(x/t)|-|S(x/u)|\bigr|\le|S(x/t)-S(x/u)|\le\frac{xh}{Y^2}+1, $$
because the number of integers between two real cutoffs is at most their distance plus $1$. For each full interval the supremum of $|S(x/t)|$ is at most its integral average plus this oscillation. Its prime-weighted contribution is therefore at most an absolute constant times the integral of $|S(x/t)|$, plus $O(h(xh/Y^2+1))$. For the final shorter interval the same assertion holds with an additional $O(xh/Y)$, by the trivial $|S(x/t)|\le x/Y$. Summing over the block gives
$$ \sum_{Y<p\le Z}\log p\,|S(x/p)|\ll\int_Y^Z|S(x/t)|\,dt+\frac{x}{(\log Y)^2}+Y. $$
[step 1.2, given, construct, algebra]

3.2 Cover $[Y_0,x]$ by successive dyadic blocks, truncating the last at $x$. The errors in step 3.1 sum to $O(x)$: $\sum_j(\log(2^jY_0))^{-2}<\infty$ and $\sum_{2^jY_0\le x}2^jY_0\le2x$. The finitely many primes below $Y_0$ also contribute $O(x)$. Thus step 2.1 gives
$$ |S(x)|\log x\ll x+\int_1^x|S(x/t)|\,dt=x+x\int_1^x\frac{|S(y)|}{y^2}\,dy. $$
This proves the assertion for $x\ge Y_0$; for $3\le x<Y_0$, increase the absolute constant and use $|S(x)|\le x$. [step 2.1, step 3.1, algebra] ∎
