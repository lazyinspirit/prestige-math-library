---
id: thm-brun-combinatorial-sieve-inequalities
kind: theorem
title: "Brun truncation bounds for the sifted sum"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-brun-combinatorial-sieve-truncation-weights
  - def-sifted-sum-and-sieve-density-product
  - def-sieve-sequence-local-density-and-remainders
  - thm-the-bonferroni-inequalities
  - thm-inclusion-exclusion
  - lem-finite-sum-reindexing-and-fubini
  - def-number-theoretic-mobius-function
  - thm-canonical-prime-factorisation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Kiran Kedlaya, Notes on Analytic Number Theory, Chapter 12, §§12.1–12.2"
      url: "https://kskedlaya.org/ant/chap-brun.html"
    - title: "D. R. Heath-Brown, Lectures on sieves, §§1–2"
      url: "https://arxiv.org/pdf/math/0209360"
verification:
  precheck: pass
---

## Statement

Let $N\ge1$, let $a(1),\ldots,a(N)$ be nonnegative real weights, let
$z>1$, let $\mathcal P$ be a set of primes, and for each $p\in\mathcal P$ with
$p<z$ let $\Omega_p\subseteq\mathbb Z/p\mathbb Z$ be a set of forbidden
residue classes. Put

$$P(z):=\prod_{\substack{p\in\mathcal P\\p<z}}p,\qquad
A_d:=\sum_{\substack{1\le n\le N\\[n]_p\in\Omega_p\text{ for every }p\mid d}}a(n),\qquad
g(d):=\prod_{p\mid d}\frac{|\Omega_p|}{p},\qquad
r_d:=A_d-g(d)X$$

for every squarefree $d\mid P(z)$, where $X\in\mathbb R$. Define

$$S(A,z):=\sum_{\substack{1\le n\le N\\[n]_p\notin\Omega_p\text{ for every }p\in\mathcal P,\ p<z}}a(n).$$

For a positive integer $d$, let $\omega(d)$ be the number of its distinct
prime divisors, and for $k\in\mathbb N$ put

$$\lambda_k^+(d):=\begin{cases}\mu(d),&d\mid P(z),\ \omega(d)\le 2k,\\0,&\text{otherwise},\end{cases}\qquad
\lambda_k^-(d):=\begin{cases}\mu(d),&d\mid P(z),\ \omega(d)\le 2k+1,\\0,&\text{otherwise}.
\end{cases}$$

Set

$$V_k^\pm(z):=\sum_{d\mid P(z)}\lambda_k^\pm(d)g(d),\qquad
R_k^\pm(A,z):=\sum_{d\mid P(z)}\lambda_k^\pm(d)r_d.$$

Then exact inclusion-exclusion and the Brun upper and lower inequalities hold:

$$S(A,z)=\sum_{d\mid P(z)}\mu(d)A_d,\qquad
X V_k^-(z)+R_k^-(A,z)\le S(A,z)\le
X V_k^+(z)+R_k^+(A,z).$$

## Statement references

[Kedlaya, *Notes on Analytic Number Theory*, Ch. 12, §§12.1–12.2](https://kskedlaya.org/ant/chap-brun.html)

[Heath-Brown, *Lectures on sieves*, §§1–2](https://arxiv.org/pdf/math/0209360)

## Facts & Assumptions

**Given:** The finite weighted local sieve data in the Statement, with
$A_d=g(d)X+r_d$, and a depth $k\in\mathbb N$.

[F1] [[def-sieve-sequence-local-density-and-remainders]]: $P(z)$ is the finite
product of the sieving primes $p<z$; $A_d$ is the weighted sum over indices
whose residue lies in every forbidden set for $p\mid d$; $g(d)$ is the product
of the local proportions; and $r_d=A_d-g(d)X$.

[F2] [[def-sifted-sum-and-sieve-density-product]]: $S(A,z)$ is the total weight
of indices avoiding every forbidden residue class, and
$A_d=\sum_{d\mid q_z(n)}a(n)$.

[F3] [[def-brun-combinatorial-sieve-truncation-weights]]: for squarefree
$d\mid P(z)$, $\lambda_k^+(d)=\mu(d)$ when $\omega(d)\le2k$ and is $0$
otherwise; $\lambda_k^-(d)=\mu(d)$ when $\omega(d)\le2k+1$ and is $0$
otherwise. The sums $V_k^\pm$ and $R_k^\pm$ are finite.

[F4] [[def-number-theoretic-mobius-function]]: for squarefree $d$,
$\mu(d)=(-1)^{\omega(d)}$ and $\mu(1)=1$.

[F5] [[thm-canonical-prime-factorisation]]: every squarefree divisor of $P(z)$
is the product of a unique subset of its distinct prime factors.

[F6] [[thm-inclusion-exclusion]]: for a finite family of subsets of a finite
set, the weight of the complement of their union is the alternating sum of
the weights of all finite intersections, including the empty intersection.

[F7] [[thm-the-bonferroni-inequalities]]: if $T_m$ is the inclusion-exclusion
sum through intersections of size $m$, then $T_{2k}$ underestimates the union
and $T_{2k+1}$ overestimates it, including $k=0$.

[F8] [[lem-finite-sum-reindexing-and-fubini]]: finite sums may be split over
disjoint index sets and their order may be interchanged.

## Proof

**Given:** The data and notation in the Statement and Facts & Assumptions.

1.1 Fix $n\in\{1,\ldots,N\}$ and let $I_n:=\{p\in\mathcal P:p<z,\ [n]_p\in\Omega_p\}$. In the singleton ambient set $\{n\}$ define $E_p:=\{n\}$ for $p\in I_n$ and $E_p:=\varnothing$ otherwise. Complementary inclusion-exclusion [F6] says the indicator that $n$ avoids every forbidden class is the alternating sum over subsets $J\subseteq I_n$ of $(-1)^{|J|}$. The map $J\mapsto d_J:=\prod_{p\in J}p$ is a bijection onto the squarefree divisors $d\mid P(z)$ whose local conditions all hold at $n$ [F1, F5], and $\mu(d_J)=(-1)^{|J|}$ [F4]. Multiplying by $a(n)$, summing over $n$, and reindexing the finite sums [F8] gives $S(A,z)=\sum_{d\mid P(z)}\mu(d)A_d$. [given, F1, F2, F4, F5, F6, F8, construct]

1.2 Let $U_n:=\bigcup_{p\in\mathcal P,\ p<z}E_p$ and define its Bonferroni truncation by $T_m(U_n):=\sum_{j=1}^{m}(-1)^{j+1}\sum_{\substack{J\subseteq I_n\\|J|=j}}\mathbf1_{\cap_{p\in J}E_p}(n)$, with $T_0(U_n)=0$. The theorem [F7] gives $T_{2k}(U_n)\le\mathbf1_{U_n}(n)\le T_{2k+1}(U_n)$. Since $n$ is sifted exactly when $n\notin U_n$, subtracting reverses these bounds. For each $j$, the size-$j$ intersection sum counts the active $j$-subsets, hence equals $\sum_{\substack{d\mid P(z)\\\omega(d)=j}}\mathbf1_{d\mid q_z(n)}$ by [F2, F5]. Expanding $1-T_m(U_n)$ includes the empty intersection $d=1$ and assigns each remaining term sign $(-1)^j=\mu(d)$ [F3, F4]. Thus $\sum_{\substack{d\mid P(z)\\\omega(d)\le2k+1}}\mu(d)\mathbf1_{d\mid q_z(n)}\le\mathbf1_{\mathrm{sifted}}(n)\le\sum_{\substack{d\mid P(z)\\\omega(d)\le2k}}\mu(d)\mathbf1_{d\mid q_z(n)}$. [given, F2, F3, F4, F5, F7, construct]

2.1 Multiply the pointwise inequalities in step 1.2 by $a(n)\ge0$ and sum over $1\le n\le N$. Finite reindexing [F8] turns each inner sum into $A_d$ [F1, F2], so $\sum_d\lambda_k^-(d)A_d\le S(A,z)\le\sum_d\lambda_k^+(d)A_d$. [step 1.2, F1, F2, F3, F8, given]

3.1 Substitute $A_d=g(d)X+r_d$ into the finite sums of step 2.1 and distribute the coefficients. By the definitions in step 2.1 and [F3], the main terms are $XV_k^-(z)$ and $XV_k^+(z)$ and the remaining terms are $R_k^-(A,z)$ and $R_k^+(A,z)$, proving the claimed bounds. [step 2.1, F1, F3, algebra] ∎
