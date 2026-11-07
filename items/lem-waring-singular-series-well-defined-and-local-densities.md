---
id: lem-waring-singular-series-well-defined-and-local-densities
kind: lemma
title: "Absolute convergence and local densities of the Waring singular series"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-waring-singular-series-and-singular-integral
  - def-exponential-character-e
  - lem-waring-complete-monomial-exponential-sum
  - lem-orthogonality-of-characters-on-a-finite-cyclic-group
  - thm-chinese-remainder-theorem
  - thm-fundamental-theorem-of-arithmetic
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "N. Assing, The Circle Method and Waring's Problem"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§6.2, Lemmas 6.6–6.8 and Theorem 6.18, printed pp. 39–41"
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "§1, equation (1.12), and §10, printed pp. 1578–1579 and 1620–1621"
---

## Statement

Let $k\ge2$ and $s>2k$ be integers, and use
$$A_{s,k}(q,n)=\sum_{\substack{a\pmod q\\\gcd(a,q)=1}}q^{-s}S_k(q,a)^s e(-an/q),\qquad \mathfrak S_{s,k}(n)=\sum_{q=1}^{\infty}A_{s,k}(q,n),$$
where $\gcd(a,q)=1$ means that $a$ and $q$ have no positive common divisor other than $1$, and the $q=1$ term has its single residue $a=0$. Then the series converges absolutely for every positive integer $n$, the function $q\mapsto A_{s,k}(q,n)$ is multiplicative on coprime moduli, and
$$\mathfrak S_{s,k}(n)=\prod_p\sigma_p(n),\qquad \sigma_p(n)=\lim_{h\to\infty}p^{-h(s-1)}\#\left\{\mathbf x\pmod {p^h}:\sum_{i=1}^s x_i^k\equiv n\pmod {p^h}\right\}.$$
Each local density $\sigma_p(n)$ exists and is nonnegative. If $\sigma_p(n)>0$ for every prime $p$, then the singular series is strictly positive.

## Statement references

[Assing, §6.2, Lemmas 6.6–6.8 and Theorem 6.18](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

[Wooley, equations (1.12) and §10](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

## Facts & Assumptions

**Given:** Integers $k\ge2$, $s>2k$, $n\ge1$, the sums $S_k(q,a)$ and $A_{s,k}(q,n)$, and the character $e(t)=\exp(2\pi i t)$.

[F1] $S_k(q,a)=\sum_{x\pmod q}e(ax^k/q)$ and $A_{s,k}(q,n)=\sum_{a\pmod q,(a,q)=1}q^{-s}S_k(q,a)^s e(-an/q)$ ([[def-waring-singular-series-and-singular-integral]], [[def-exponential-character-e]]).

[F2] For every $\eta>0$, $|S_k(q,a)|\le C_{k,\eta}q^{1-1/k+\eta}$ when $\gcd(a,q)=1$ ([[lem-waring-complete-monomial-exponential-sum]]).

[F3] For every positive integer $m$ and integer $u$, $\sum_{x\pmod m}e(ux/m)=m$ if $m\mid u$ and $0$ otherwise ([[lem-orthogonality-of-characters-on-a-finite-cyclic-group]]).

[F4] Coprime moduli have a unique simultaneous residue class for every pair of residue classes, and reduced residue classes modulo their product correspond bijectively to pairs of reduced residue classes ([[thm-chinese-remainder-theorem]]).

[F5] Every positive integer has a unique factorization into prime powers ([[thm-fundamental-theorem-of-arithmetic]]).

## Proof

**Proof technique:** absolute convergence, Chinese remaindering, and finite orthogonality.

1.1 Choose $\eta=(s/k-2)/(2s)>0$. By [F2] and the bound that there are at most $q$ residues $a\pmod q$,
$$|A_{s,k}(q,n)|\le C_{k,\eta}^s q^{1-s/k+s\eta}=C_{k,\eta}^s q^{-s/(2k)}.$$
Since $s/(2k)>1$, comparison with the convergent $p$-series proves absolute convergence, uniformly in $n$. [F2, algebra]

1.2 Let $q_1,q_2$ be coprime. For $a$ reduced modulo $q_1q_2$, let $a_1\equiv a\overline{q_2}\pmod {q_1}$ and $a_2\equiv a\overline{q_1}\pmod {q_2}$, where the bars denote multiplicative inverses in the indicated residue rings. Chinese remaindering [F4] gives
$$e\!\left(\frac{a x^k}{q_1q_2}\right)=e\!\left(\frac{a_1x_1^k}{q_1}\right)e\!\left(\frac{a_2x_2^k}{q_2}\right)$$
when $x_i$ is the residue of $x$ modulo $q_i$. Summing over all $x$ therefore gives $S_k(q_1q_2,a)=S_k(q_1,a_1)S_k(q_2,a_2)$, and $e(-an/(q_1q_2))=e(-a_1n/q_1)e(-a_2n/q_2)$. The reduced residue map is bijective, so summing these products and using $(q_1q_2)^{-s}=q_1^{-s}q_2^{-s}$ proves $A_{s,k}(q_1q_2,n)=A_{s,k}(q_1,n)A_{s,k}(q_2,n)$. [F1, F4, algebra]

2.1 For a prime $p$ and integer $h\ge1$, let $N_h(p,n)$ be the number of vectors $\mathbf x\pmod {p^h}$ satisfying $\sum_i x_i^k\equiv n\pmod {p^h}$. By [F3],
$$N_h(p,n)=p^{-h}\sum_{a\pmod {p^h}}e(-an/p^h)\left(\sum_{x\pmod {p^h}}e(ax^k/p^h)\right)^s.$$
The term $a=0$ is $p^{h(s-1)}$. Every other residue has a unique form $a=p^{h-j}b$ with $1\le j\le h$ and $p\nmid b$, and its inner sum is $p^{h-j}S_k(p^j,b)$ because the phase depends only on $x\pmod {p^j}$. [F1, F3, algebra]

2.2 Divide the identity in step 2.1 by $p^{h(s-1)}$ and group by $j$. The coefficient of the sum over reduced $b\pmod {p^j}$ is
$$p^{-h}p^{s(h-j)}p^{-h(s-1)}=p^{-js},$$
so
$$p^{-h(s-1)}N_h(p,n)=1+\sum_{j=1}^h A_{s,k}(p^j,n).$$
By step 1.1 the right-hand side converges as $h\to\infty$ to $\sum_{j\ge0}A_{s,k}(p^j,n)$; the left-hand side is nonnegative for every $h$. Thus the local-density limit exists, is nonnegative, and equals the prime-power factor. [step 1.1, step 2.1, algebra]

3.1 Unique prime factorization [F5] and multiplicativity from step 1.2 give, for every finite set of primes, the corresponding finite Euler product for the sum over integers supported on those primes. Absolute convergence from step 1.1 permits passage to the limit over increasing finite sets of primes: the omitted integers have total absolute contribution tending to zero. Hence $\mathfrak S_{s,k}(n)=\prod_p\sum_{j\ge0}A_{s,k}(p^j,n)=\prod_p\sigma_p(n)$. [F5, step 1.1, step 1.2, step 2.2]

3.2 Also, $\sum_p|\sigma_p(n)-1|\le\sum_p\sum_{j\ge1}|A_{s,k}(p^j,n)|\le\sum_{q\ge2}|A_{s,k}(q,n)|<\infty$. If every $\sigma_p(n)>0$, choose a finite initial set of primes so the sum of $|\sigma_p(n)-1|$ over the remaining primes is less than $1/2$. On that tail, each factor is at least $1-|\sigma_p(n)-1|$, and every finite tail product satisfies $\prod(1-u_i)\ge1-\sum u_i$ for $0\le u_i\le1$, so it is bounded below by $1/2$. These tail products converge: for $\delta_p=\sigma_p(n)-1$ and finite tail $F$, expansion gives $|\prod_{p\in F}(1+\delta_p)-1|\le\prod_{p\in F}(1+|\delta_p|)-1\le e^{\sum_{p\in F}|\delta_p|}-1$, which tends to zero as the tail sum tends to zero. Multiplying by the finitely many positive initial factors proves $\mathfrak S_{s,k}(n)>0$. [step 1.1, step 3.1, algebra] ∎
