---
id: lem-heath-brown-short-error-times-bounded-polynomial
kind: lemma
title: Short Heath–Brown error times a bounded Dirichlet polynomial
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - thm-fundamental-theorem-of-arithmetic
  - thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials
sources:
  references:
    - title: Siddarth Menon, Improved Bounds for Multiplicative Functions in Almost All Short Intervals
      url: https://arxiv.org/pdf/2607.15574v1
      locator: Lemma 2.21, especially (2.20)–(2.21), and the product-error estimate following (3.11), printed pp. 20–22 and 29; the divisor-multiplicity bound below is proved locally and does not assume coefficient-norm factorization.
---

## Statement

For an integer $k\ge1$, write $\tau_k(n)$ for the number of ordered $k$-tuples of positive integers with product $n$. Let $P\ge2$, $M\ge1$, $1\le c$, $0\le\delta\le1$, $T\ge1$, and $A,B\ge0$. Let $E(s)=\sum e_n n^{-s}$ and $R(s)=\sum r_m m^{-s}$ be finite Dirichlet polynomials with
$$e_n=0\ \text{unless}\ P\le n\le(1+\delta)P,\qquad |e_n|\le A\tau_k(n),$$
$$r_m=0\ \text{unless}\ M\le m\le cM,\qquad |r_m|\le B.$$
Set $D=4k^4$ and $H(y)=1+\log(2+y)$. There is an absolute constant $C$ such that
$$\int_{-T}^{T}|E(1+it)R(1+it)|^2dt\le C A^2B^2c^2\left(1+\frac{T}{PM}\right)\sqrt{\delta+\frac1P}\,H(2P)^{(D-1)/2}H(cM).$$
The same inequality holds with an additional factor $J^2$ on the right for $E=\sum_{j=1}^{J}E_j$, provided each $E_j$ satisfies the same displayed support and coefficient bounds; for $J=0$ the left side is zero. In particular, if $c,k$ are fixed, $M\le P^C$ for a fixed $C$, $A,B,J$ are bounded by fixed powers of $\log P$, and $\delta=(\log P)^{-a}$, then the right side is at most $(1+T/(PM))(\log P)^{-b}$ for any prescribed $b>0$ once $a$ is chosen sufficiently large in terms of the fixed data and $P$ is sufficiently large.

The bound uses Dirichlet convolution with its divisor multiplicity. It does not assert that the coefficient $\ell^2$ norm of a product factors, construct a Heath–Brown expansion or show that any particular remainder has the displayed short support and coefficient bounds.

## Facts & Assumptions

**Given:** The polynomials and parameters in the Statement. The divisor functions count finite ordered factorizations; all sums are finite.

[F1] [[thm-fundamental-theorem-of-arithmetic]] gives unique prime factorization, so the divisor-counting functions $\tau_k$ and their pointwise products are multiplicative.

[F2] [[thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials]] gives $\int_0^L|\sum_{n\le N}a_nn^{-it}|^2dt\ll(N+L)\sum_{n\le N}|a_n|^2$ for $L\ge2$ and complex coefficients.

## Proof

1.1 Let $d=\tau_2$. For a prime power $p^a$, $\tau_k(p^a)$ counts weak compositions of $a$ into $k$ parts. More generally, given four such compositions and two numbers in $\{0,\ldots,a\}$, assign each integer $1\le t\le a$ to the appropriate interval of each of the four compositions and record whether $t$ lies in the first $j$ positions for each of the two numbers. Counting the resulting $4k^4$ types gives a weak composition of $a$ into $4k^4$ parts. The four original compositions and two numbers are recovered as its marginals, so this is an injection. Thus $$d(p^a)^2\tau_k(p^a)^4\le\tau_{4k^4}(p^a).$$ By [F1] this extends to every $n$. For every integer $D\ge1$ and $Y\ge1$, counting the first $D-1$ factors in an ordered factorization gives $$\sum_{n\le Y}\tau_D(n)\le Y\left(\sum_{m\le Y}\frac1m\right)^{D-1}\le YH(Y)^{D-1}.$$ The last inequality follows by comparing the finite harmonic sum with $1+\int_1^Ydu/u$. [F1, given, construct, algebra]

1.2 Let $C_\ell=\sum_{nm=\ell}e_nr_m$ be the actual Dirichlet-convolution coefficients. Cauchy–Schwarz over the at most $d(\ell)$ divisors gives $$|C_\ell|^2\le d(\ell)\sum_{nm=\ell}|e_n|^2|r_m|^2.$$ By [F1], $d(nm)\le d(n)d(m)$: on each prime power the inequality is $a+b+1\le(a+1)(b+1)$. Summing over $\ell$ and rearranging the finite sums therefore yields $$\sum_\ell\frac{|C_\ell|^2}{\ell^2}\le\left(\sum_n\frac{d(n)|e_n|^2}{n^2}\right)\left(\sum_m\frac{d(m)|r_m|^2}{m^2}\right).$$ This inequality includes the necessary multiplicity weights and is not a factorization of unweighted coefficient norms. [F1, given, algebra]

2.1 The number of integers in $[P,(1+\delta)P]$ is at most $\delta P+1$. By Cauchy–Schwarz, step 1.1 and $n\ge P$, $$\sum_n\frac{d(n)|e_n|^2}{n^2}\le\frac{A^2}{P^2}\left((\delta P+1)\sum_{n\le2P}d(n)^2\tau_k(n)^4\right)^{1/2}\le\frac{\sqrt2A^2}{P}\sqrt{\delta+\frac1P}\,H(2P)^{(D-1)/2}.$$ Likewise $m\ge M$, $|r_m|\le B$, and step 1.1 with $D=2$ give $$\sum_m\frac{d(m)|r_m|^2}{m^2}\le\frac{B^2}{M^2}\sum_{m\le cM}d(m)\le\frac{cB^2}{M}H(cM).$$ Combine these inequalities with step 1.2. [step 1.1, step 1.2, given, algebra]

3.1 The product polynomial has support $\ell\le c(1+\delta)PM\le2cPM$. Translate $[-T,T]$ to $[0,2T]$; the translation multiplies the normalized coefficients $C_\ell/\ell$ by numbers of modulus one. Apply [F2] with $N=\lfloor2cPM\rfloor$ and $L=2T\ge2$, then use step 2.1. Since $c\ge1$, the resulting $(N+2T)c/(PM)$ is bounded by an absolute constant times $c^2(1+T/(PM))$. This proves the first displayed estimate. For $E=\sum_jE_j$, apply $|\sum_jz_j|^2\le J\sum_j|z_j|^2$ pointwise and the first estimate to each term, giving $J^2$; the empty sum is zero. [F2, step 2.1, given, algebra]

4.1 Under the final fixed-parameter hypotheses, $H(2P)$ and $H(cM)$ are bounded by fixed multiples of $\log P$ for large $P$, and $P^{-1}\le(\log P)^{-a}$ eventually. The explicit upper bound in step 3.1 is therefore $(1+T/(PM))$ times a fixed power of $\log P$ multiplied by $(\log P)^{-a/2}$. Choosing $a$ larger than twice that fixed power plus $2b$ gives the claimed saving, uniformly in $T\ge1$. [step 3.1, given, algebra] ∎

## References

[Menon, *Improved Bounds for Multiplicative Functions in Almost All Short Intervals*, Lemma 2.21 and (3.11)](https://arxiv.org/pdf/2607.15574v1)
