---
id: lem-chen-switching-count-lower-bound
kind: lemma
title: "Switching and half-counting the three-prime-factor obstruction"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-prime-factor-count-with-multiplicity
  - def-number-of-distinct-prime-divisors
  - def-chen-kuehn-weighted-sifted-sum
  - lem-chen-singular-series-specialization
  - thm-chen-weighted-sifted-lower-bound
  - thm-chen-switched-triple-product-upper-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jing-run Chen, On the representation of a large even integer as the sum of a prime and the product of at most two primes, equation (17) and Theorems 1–2"
      url: "https://raw.githubusercontent.com/lixiang90/chen_theorem/main/pdf/main_en.pdf"
    - title: "Heini Halberstam, A proof of Chen's theorem, Sections 2–5"
      url: "https://www.numdam.org/item/AST_1975__24-25__281_0.pdf"
---

## Statement

For even $N$, put

$$R_2(N):=\#\{p\le N:p\text{ is prime and }N-p\in P_2\}.$$

For a fixed nonzero even integer $h$, put

$$R_h(x):=\#\{p\le x:p\text{ is prime},\ 0<p+h\le x,\ p+h\in P_2\}.$$

For all sufficiently large even $N$,

$$R_2(N)\ge W_{-N}(N;3,10,2)-\frac12\Omega_{\rm sw}(-N,N)-O(N^{0.91}),$$

and for each fixed nonzero even $h$ and all sufficiently large $x$,

$$R_h(x)\ge W_h^{\le x}(x;3,10,2)-\frac12\Omega_{\rm sw}(h,x)-O_h(x^{0.91}).$$

Consequently, in both regimes,

$$R_2(N)\ge0.67C(N)\frac N{(\log N)^2},\qquad R_h(x)\ge0.67C(h)\frac x{(\log x)^2}.$$

## Statement references

[[def-prime-factor-count-with-multiplicity|Prime factors counted with multiplicity]]

[[def-number-of-distinct-prime-divisors|Distinct prime divisors]]

[[def-chen-kuehn-weighted-sifted-sum|Kuhn weighted sifted sum]]

[[thm-chen-weighted-sifted-lower-bound|Chen weighted lower bound]]

[[thm-chen-switched-triple-product-upper-bound|Switched triple-product upper bound]]

Chen, *On the representation of a large even integer as the sum of a prime and the product of at most two primes*, equation (17) and Theorems 1–2

Halberstam, *A proof of Chen's theorem*, Sections 2–5

## Facts & Assumptions

**Given:** The Goldbach specialization $h=-N,x=N$, or a fixed nonzero even shift $h$ and sufficiently large $x$.

[F1] [[def-prime-factor-count-with-multiplicity]]: $P_2$ consists of integers greater than $1$ with at most two prime factors counted with multiplicity.

[F2] [[def-number-of-distinct-prime-divisors]]: for $0<a<b$, write
$\omega_{(a,b]}(m):=\#\{q:q\text{ prime},\ q\mid m,\ a<q\le b\}$;
in this proof only primes $q\nmid h$ are counted, as in [F3]. This is the
restriction of the distinct-prime-divisor count, with no multiplicities.

[F3] [[def-chen-kuehn-weighted-sifted-sum]]: $W_h^{\le x}$ restricts to $0<|p+h|\le x$; its weight is $1-\omega_{(x^{1/10},x^{1/3}]}(|p+h|)/2$ on rough prime translates, with prime divisors of $h$ omitted from that distinct-factor count.

[F4] [[thm-chen-weighted-sifted-lower-bound]]: the truncated weighted sum has the stated $2.6408C(h)x/(\log x)^2$ lower bound, with the fixed-shift $O_h(1)$ tail loss.

[F5] [[thm-chen-switched-triple-product-upper-bound]]: $\Omega_{\rm sw}(h,x)\le3.94033C(h)x/(\log x)^2$ in those regimes.

[F6] [[lem-chen-singular-series-specialization]]: $C(h)=C_0\prod_{q\mid h,\ q>2}(q-1)/(q-2)$, where $C_0:=\prod_{q>2}(1-1/(q-1)^2)>0$; hence $C(h)\ge C_0$ uniformly.

## Proof

**Given:** The Goldbach specialization $h=-N,x=N$, or a fixed nonzero even shift $h$ and sufficiently large $x$.

[F1] [[def-prime-factor-count-with-multiplicity]]: $P_2$ consists of integers greater than $1$ with at most two prime factors counted with multiplicity.

[F2] [[def-number-of-distinct-prime-divisors]]: for $0<a<b$, write
$\omega_{(a,b]}(m):=\#\{q:q\text{ prime},\ q\mid m,\ a<q\le b\}$;
in this proof only primes $q\nmid h$ are counted, as in [F3]. This is the
restriction of the distinct-prime-divisor count, with no multiplicities.

[F3] [[def-chen-kuehn-weighted-sifted-sum]]: $W_h^{\le x}$ restricts to $0<|p+h|\le x$; its weight is $1-\omega_{(x^{1/10},x^{1/3}]}(|p+h|)/2$ on rough prime translates, with prime divisors of $h$ omitted from that distinct-factor count.

[F4] [[thm-chen-weighted-sifted-lower-bound]]: the truncated weighted sum has the stated $2.6408C(h)x/(\log x)^2$ lower bound, with the fixed-shift $O_h(1)$ tail loss.

[F5] [[thm-chen-switched-triple-product-upper-bound]]: $\Omega_{\rm sw}(h,x)\le3.94033C(h)x/(\log x)^2$ in those regimes.

[F6] [[lem-chen-singular-series-specialization]]: $C(h)>0$ for every nonzero even $h$.



**Given:** The definitions and supplier statements in [F1]–[F6].

1.1 Fix a prime translate counted by $W_h^{\le x}$ and put $m=|p+h|$. The candidates with $m=1$ are at most two. If a prime $q\mid h$ also divides $m$, then $q\mid p$, so $p=q$; there are at most $(\log x)/\log 2$ such primes, since the product of $r$ distinct prime divisors of $h$ is at least $2^r$ and $|h|\le x$. Remove these exceptional candidates. Any $m\le x$ has at most nine distinct prime divisors exceeding $x^{1/10}$, since ten would have product greater than $x$; hence each discarded weight has magnitude at most $1+9/2$ and their total weight is $O(\log x)=O(x^{0.91})$, using $\log x\le x^{0.91}/0.91$ for $x\ge1$. Every remaining squarefree $m$ has all prime factors greater than $x^{1/10}$, and every factor in $(x^{1/10},x^{1/3}]$ not dividing $h$ is counted by $s:=\omega_{(x^{1/10},x^{1/3}]}(m)$. By [F3], its weight is $1-s/2$, which is nonpositive when $s\ge2$. If $s=0$, all factors exceed $x^{1/3}$, so $m\le x$ forces at most two factors and $m\in P_2$ by [F1]. [F1, F2, F3, given]

2.1 If $s=1$ and the squarefree $m$ is not in $P_2$, it has exactly three prime factors: one $q_1$ in $(x^{1/10},x^{1/3}]$ and two factors $q_2\le q_3$ above $x^{1/3}$. Four factors would have product greater than $x^{1/10+3(1/3)}=x^{1.1}>x$, so no fourth factor is possible. Since $q_1q_2q_3\le x$, $q_2\le(x/q_1)^{1/2}$, and $(p,q_1,q_2,q_3)$ is counted by $\Omega_{\rm sw}(h,x)$. Its weight is $1/2$, exactly the half-count charged to this switched triple. [F2, F3, F5, step 1.1, algebra]

3.1 If a remaining $m$ is not squarefree, then $q^2\mid p+h$ for some prime $q>x^{1/10}$: a repeated factor below the roughness cutoff would have to divide $h$ and was removed in step 1.1. Also $q\le x^{1/2}$. For each such $q$, the congruence $p\equiv-h\pmod {q^2}$ has at most $x/q^2+1$ integer solutions with $p\le x$, so the repeated-factor exceptions number at most $\sum_{x^{1/10}<q\le x^{1/2}}(x/q^2+1)\le x\sum_{n>x^{1/10}}n^{-2}+x^{1/2}=O(x^{0.9})=O(x^{0.91})$, using $\sum_{n>y}n^{-2}\le\int_y^\infty t^{-2}\,dt=1/y$ for $y\ge1$. For fixed $h$, the finitely many primes with $p+h\le0$ contribute $O_h(1)$ and are absorbed. [given, step 1.1, step 2.1, algebra]

4.1 On all remaining candidates, each target $P_2$ value contributes weight at most $1$, each non-target positive weight is a three-prime obstruction canceled by one half of its switched count, and all other non-target weights are nonpositive. Removing the exceptional candidates bounded in steps 1.1 and 3.1 proves the two switching inequalities in the Statement. [F1, F3, F5, step 1.1, step 2.1, step 3.1, algebra]

5.1 Apply [F4] and [F5] to step 4.1; the coefficient difference is $2.6408-3.94033/2=0.670635>0.67$. Since $x^{0.91}=o(x/(\log x)^2)$ (put $t=\log x$ and use $e^{0.09t}\ge(0.09t)^3/6$), [F6] gives a uniform positive lower bound for $C(N)$ in the Goldbach branch and a fixed positive value for each fixed shift. Thus the $O(N^{0.91})$, $O_h(x^{0.91})$, and fixed-shift $O_h(1)$ errors are absorbed for all sufficiently large arguments, proving both quantitative conclusions. [F4, F5, F6, step 4.1, algebra] ∎
