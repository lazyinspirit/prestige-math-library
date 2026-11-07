---
id: thm-selberg-sieve-upper-bound-with-remainders
kind: theorem
title: "Selberg's optimized quadratic upper-bound sieve"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-selberg-upper-bound-sieve-weights
  - def-sifted-sum-and-sieve-density-product
  - def-sieve-sequence-local-density-and-remainders
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - cor-classical-mobius-inversion
  - def-number-theoretic-mobius-function
  - lem-finite-sum-reindexing-and-fubini
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Kiran Kedlaya, Notes on Analytic Number Theory, Chapter 13, §13.2, Theorem 13.1"
      url: "https://kskedlaya.org/ant/chap-selberg.html"
    - title: "D. R. Heath-Brown, Lectures on sieves, §2, Fundamental Theorem for Selberg's sieve"
      url: "https://arxiv.org/pdf/math/0209360"
verification:
  precheck: pass
---

## Statement

Let $N\ge1$, let $a(1),\ldots,a(N)$ be nonnegative real weights, let $z>1$,
let $\mathcal P$ be a set of primes, and for every $p\in\mathcal P$ with
$p<z$ let $\Omega_p\subseteq\mathbb Z/p\mathbb Z$ be a set of forbidden
residue classes. Put

$$P(z):=\prod_{\substack{p\in\mathcal P\\p<z}}p,\qquad
A_d:=\sum_{\substack{1\le n\le N\\[n]_p\in\Omega_p\text{ for every }p\mid d}}a(n),\qquad
g(d):=\prod_{p\mid d}\frac{|\Omega_p|}{p},\qquad r_d:=A_d-g(d)X$$

for squarefree $d\mid P(z)$, where $X>0$ and $0<g(p)<1$ for every
$p\mid P(z)$. Define $S(A,z)$ to be the sum of $a(n)$ over indices avoiding
every forbidden class. For $y>1$, let

$$\mathcal D(y,z):=\{d\mid P(z):d<\sqrt y\},\qquad
h(1):=1,\qquad h(d):=\prod_{p\mid d}\frac{g(p)}{1-g(p)},\qquad
H(y,z):=\sum_{d\in\mathcal D(y,z)}h(d).$$

For $d\in\mathcal D(y,z)$ set

$$\rho(d):=\frac{\mu(d)h(d)}{g(d)H(y,z)}
\sum_{\substack{m\mid P(z)\\dm<\sqrt y\\(m,d)=1}}h(m),\qquad
\lambda^+(q):=\sum_{\substack{d,e\in\mathcal D(y,z)\\[d,e]=q}}\rho(d)\rho(e),$$

where $[d,e]$ is the least positive common multiple. Then $H(y,z)>0$,
$\rho(1)=1$, and $\lambda^+(q)=0$ unless $q\mid P(z)$ and $q<y$. The
Selberg quadratic upper-bound is

$$S(A,z)\le \frac{X}{H(y,z)}+
\sum_{\substack{q\mid P(z)\\q<y}}\lambda^+(q)r_q.$$

Among all real weights $\rho(d)$ supported on $\mathcal D(y,z)$ with
$\rho(1)=1$, the displayed weights minimize the quadratic main-term factor
$\sum_{d,e\in\mathcal D(y,z)}\rho(d)\rho(e)g([d,e])$, whose minimum is
$H(y,z)^{-1}$.

## Statement references

[Kedlaya, *Notes on Analytic Number Theory*, Ch. 13, §13.2, Theorem 13.1](https://kskedlaya.org/ant/chap-selberg.html)

[Heath-Brown, *Lectures on sieves*, §2, Fundamental Theorem for Selberg's sieve](https://arxiv.org/pdf/math/0209360)

## Facts & Assumptions

**Given:** The finite local sieve data in the Statement; $0<g(p)<1$ for every
sieving prime; a positive scale $X$; and a level $y>1$.

[F1] [[def-sieve-sequence-local-density-and-remainders]]: $P(z)$ is a finite
product of distinct primes; $A_d$ is the nonnegative weighted mass satisfying
all local conditions for $p\mid d$; $g(d)=\prod_{p\mid d}g(p)$; and
$A_d=g(d)X+r_d$.

[F2] [[def-sifted-sum-and-sieve-density-product]]: $S(A,z)$ is the total weight
of indices with no forbidden local condition, and $A_d=\sum_{d\mid q_z(n)}a(n)$.

[F3] [[def-selberg-upper-bound-sieve-weights]]: $\mathcal D(y,z)$ is the
finite divisor-closed set $d\mid P(z)$ with $d<\sqrt y$; $h(p)=g(p)/(1-g(p))$;
$H=\sum_{d\in\mathcal D}h(d)$; the explicit $\rho$ is defined by its finite
formula; and $\lambda^+(q)=\sum_{[d,e]=q}\rho(d)\rho(e)$.

[F4] [[def-number-theoretic-mobius-function]]: on squarefree integers,
$\mu(d)=(-1)^{\omega(d)}$, $\mu(d)^2=1$, and $\mu$ is multiplicative on
coprime factors.

[F5] [[cor-classical-mobius-inversion]]: applying divisor Möbius inversion to
the constant-one function gives $\sum_{e\mid m}\mu(e)=1$ when $m=1$ and $0$
when $m>1$.

[F6] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: for finite real vectors
$(x_i)$ and $(y_i)$, $|\sum_i x_i y_i|^2\le(\sum_i x_i^2)(\sum_i y_i^2)$.

[F7] [[lem-finite-sum-reindexing-and-fubini]]: finite sums may be reordered,
reindexed by bijections, and expanded as finite double sums.

## Proof

**Given:** The hypotheses and notation in the Statement and Facts & Assumptions.

1.1 Since $1\in\mathcal D(y,z)$ and $h(1)=1$, $H(y,z)\ge1>0$. At $d=1$ the inner sum in the formula for $\rho(d)$ is exactly $H(y,z)$, and $\mu(1)=g(1)=1$, so $\rho(1)=1$. For $d,e\in\mathcal D$, $[d,e]\le de<y$ and $[d,e]\mid P(z)$; therefore $\lambda^+(q)$ vanishes unless $q\mid P(z)$ and $q<y$. [F1, F3, F4, algebra]

1.2 Define $Q(\rho):=\sum_{d,e\in\mathcal D}\rho(d)\rho(e)g([d,e])$ and $u_r:=\sum_{d\in\mathcal D,\ r\mid d}g(d)\rho(d)$. For squarefree $d,e$, $g([d,e])=g(d)g(e)\prod_{p\mid(d,e)}\frac1{g(p)} =g(d)g(e)\sum_{r\mid(d,e)}\frac1{h(r)},$ because $1/g(p)=1+1/h(p)$ and $h$ is multiplicative. Reordering the finite sums [F7] therefore diagonalizes the quadratic form: $Q(\rho)=\sum_{r\in\mathcal D}\frac{u_r^2}{h(r)}.$ [F1, F3, F7, algebra]

2.1 For each $n$ put $W_n:=\sum_{d\in\mathcal D(y,z),\ d\mid q_z(n)}\rho(d)$. If $n$ is sifted, then $q_z(n)=1$, so $W_n=\rho(1)=1$ by step 1.1. If it is not sifted, its indicator is $0\le W_n^2$. Thus the sifted indicator is at most $W_n^2$ for every $n$. Multiply by $a(n)\ge0$, sum, expand the square and reindex the finite sums [F7]; since $d,e\mid q_z(n)$ exactly when $[d,e]\mid q_z(n)$, this gives $S(A,z)\le\sum_{d,e\in\mathcal D(y,z)}\rho(d)\rho(e)A_{[d,e]}.$ [step 1.1, given, F2, F3, F7, construct]

2.2 Reordering the finite sum defining $u_r$ [F7] and using [F5] gives $\sum_{r\in\mathcal D}\mu(r)u_r =\sum_{d\in\mathcal D}g(d)\rho(d)\sum_{r\mid d}\mu(r) =g(1)\rho(1)=1.$ Finite Cauchy–Schwarz [F6] applied to the real vectors $(u_r/\sqrt{h(r)})_{r\in\mathcal D}$ and $(\mu(r)\sqrt{h(r)})_{r\in\mathcal D}$ yields $1\le\left(\sum_{r\in\mathcal D}\frac{u_r^2}{h(r)}\right) \left(\sum_{r\in\mathcal D}\mu(r)^2h(r)\right)=Q(\rho)H(y,z).$ Every $h(r)>0$, and the finite set $\mathcal D$ can be listed in increasing order, so the finite-vector hypotheses hold without any choice assumption. [step 1.1, F3, F4, F5, F6, F7]

3.1 For the explicit weights in [F3], multiplicativity of $h$ rewrites the definition as $g(d)\rho(d)=\frac{\mu(d)}{H(y,z)} \sum_{\substack{s\in\mathcal D(y,z)\\d\mid s}}h(s).$ Consequently, after reordering the finite sums [F7], for $r\in\mathcal D$, $u_r=\frac1H\sum_{\substack{s\in\mathcal D\\r\mid s}}h(s) \sum_{\substack{d\in\mathcal D\\r\mid d\\d\mid s}}\mu(d) =\frac{\mu(r)h(r)}{H},$ since $r\mid d\mid s$ and $s$ is squarefree, writing $d=re$ makes $e$ range over the divisors of $s/r$ with $(e,r)=1$; multiplicativity gives the inner sum $\mu(r)\sum_{e\mid s/r}\mu(e)$, which is zero unless $s=r$ and equals $\mu(r)$ when $s=r$ by [F4, F5]. Hence $Q(\rho)=\sum_{r\in\mathcal D}\frac{u_r^2}{h(r)} =\frac1{H^2}\sum_{r\in\mathcal D}\mu(r)^2h(r)=\frac1H.$ Together with step 2.2 this proves that the selected weights attain the minimum $H^{-1}$. [step 1.2, F3, F4, F5, F7, algebra]

4.1 Substitute $A_{[d,e]}=g([d,e])X+r_{[d,e]}$ into step 2.1. The main term is $XQ(\rho)=X/H$ by step 3.1. Grouping the remaining finite terms by $q=[d,e]$ gives $\sum_{d,e\in\mathcal D}\rho(d)\rho(e)r_{[d,e]} =\sum_{\substack{q\mid P(z)\\q<y}}\lambda^+(q)r_q,$ because $[d,e]\le de<y$ for $d,e<\sqrt y$ and by [F3]. This is the stated upper bound with the exact signed remainder. [step 2.1, step 3.1, F1, F3, F7, algebra] ∎
