---
id: lem-finite-complexity-local-factors-converge
kind: lemma
title: "Finite-complexity systems have a convergent singular product"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-finite-complexity-of-a-linear-forms-system
  - def-affine-linear-forms-system-and-size
  - def-local-von-mangoldt-factor-beta-p
  - def-prime
  - def-integers-modulo-n
  - def-addition-and-multiplication-modulo-n
  - thm-integers-modulo-n-basic-algebra
  - thm-standard-representatives-modulo-n
  - lem-prime-not-dividing-is-coprime
  - thm-bezout-identity
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ben Green and Terence Tao, Linear equations in primes"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n3-p08-p.pdf"
      locator: "Lemma 1.3 and its complete proof, printed pp. 1757–1758."
    - title: "Terence Tao, Higher Order Fourier Analysis, AMS Graduate Studies in Mathematics 142"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf"
      locator: "Section 1.7, printed pp. 123–128: local-modulus bias and the singular-series motivation."
---

## Statement

Let $\Psi=(\psi_1,\ldots,\psi_t):\mathbb Z^d\to\mathbb Z^t$ be a finite-complexity system of nonconstant integer affine-linear forms, with local factors $\beta_p(\Psi)$ as defined above. Then

$$
\beta_p(\Psi)=1+O_\Psi(p^{-2})\qquad(p\to\infty),
$$

so the singular product $\mathfrak S(\Psi)=\prod_p\beta_p(\Psi)$ converges. If $\beta_p(\Psi)>0$ for every prime $p$, then $\mathfrak S(\Psi)>0$.

## Statement references

[[def-finite-complexity-of-a-linear-forms-system]]

[[def-local-von-mangoldt-factor-beta-p]]

[Green and Tao, Lemma 1.3](https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n3-p08-p.pdf)

[Tao, Higher Order Fourier Analysis, Section 1.7](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf)

## Facts & Assumptions

**Given:** A finite-complexity system $\Psi=(\psi_i)_{i=1}^t$ of nonconstant integer affine-linear forms, with $\psi_i(x)=a_i\cdot x+b_i$, $a_i\ne0$, and the local factors $\beta_p(\Psi)$.

[F1] The coefficient vector of $\psi_i$ is $a_i\in\mathbb Z^d$, and nonconstant means $a_i\ne0$. [[def-affine-linear-forms-system-and-size]]

[F2] The affine-linear span of a class of forms consists of the forms whose homogeneous vectors lie in the rational linear span of the class; finite complexity requires, for each $i$, a cover of the other forms by classes whose spans omit $\psi_i$. [[def-finite-complexity-of-a-linear-forms-system]]

[F3] For a prime $p$, $\beta_p(\Psi)=p^{-d}\sum_{a\in(\mathbb Z/p\mathbb Z)^d}\prod_i\Lambda_p([\psi_i(a)]_p)$, where each factor is $p/(p-1)$ when $p\nmid\psi_i(a)$ and zero otherwise. [[def-local-von-mangoldt-factor-beta-p]]

[F4] The quotient $\mathbb Z/p\mathbb Z$ has $p$ elements, its arithmetic is induced by integer arithmetic, and any integer $c$ with $p\nmid c$ has an inverse modulo $p$: Bézout gives $cu+pv=1$. [[def-prime]] [[def-integers-modulo-n]] [[def-addition-and-multiplication-modulo-n]] [[thm-integers-modulo-n-basic-algebra]] [[thm-standard-representatives-modulo-n]] [[lem-prime-not-dividing-is-coprime]] [[thm-bezout-identity]]

## Proof

1.1 No two coefficient vectors $a_i,a_j$, $i\ne j$, are rationally proportional. If $a_i=q a_j$ for some $q\in\mathbb Q$, then $a_i\in\operatorname{span}_{\mathbb Q}\{a_j\}$, so $\psi_i$ lies in the affine-linear span of the singleton class $\{\psi_j\}$. In every cover of the other forms, the class containing $\psi_j$ therefore has a span containing $\psi_i$, contradicting finite complexity. [given, F1, F2, algebra]

1.2 For all sufficiently large primes $p$, each event $E_i:=\{a:\psi_i(a)=0\text{ in }\mathbb Z/p\mathbb Z\}$, with $a$ uniform in $(\mathbb Z/p\mathbb Z)^d$, has probability $1/p$. Choose a nonzero coefficient of $a_i$; for $p$ larger than its absolute value this coefficient is invertible by [F4], and after fixing the other $d-1$ coordinates there is exactly one choice of the remaining coordinate satisfying the affine equation. [F1, F4, choose, algebra]

2.1 If a pair $i\ne j$ exists, then $d\ge2$ by step 1.1. Nonproportionality gives two coordinates $r,s$ for which the integer minor $\Delta_{ij}=a_{ir}a_{js}-a_{is}a_{jr}$ is nonzero. For $p>|\Delta_{ij}|$, this minor is invertible modulo $p$; fixing the other $d-2$ coordinates leaves a unique solution to the two simultaneous affine equations. Thus $\mathbb P(E_i\cap E_j)=p^{-2}$. There are finitely many coefficients and minors, so both estimates hold for every sufficiently large prime. [step 1.1, F4, choose, algebra]

3.1 Bonferroni's two-term bounds give $\mathbb P(\bigcup_iE_i)=t/p+O_t(p^{-2})$, hence $\mathbb P(\bigcap_iE_i^c)=1-t/p+O_t(p^{-2})$. By [F3], $\beta_p=(p/(p-1))^t\mathbb P(\bigcap_iE_i^c)$; since $(1-1/p)^{-t}=1+t/p+O_t(p^{-2})$, multiplication yields $\beta_p=1+O_\Psi(p^{-2})$. [F3, step 1.2, step 2.1, algebra]

4.1 The tail deviations are absolutely summable because $\sum_p|\beta_p-1|\le C_\Psi\sum_{n\ge p_0}n^{-2}<\infty$; the latter series converges by grouping integers into intervals $[2^k,2^{k+1})$, each of whose sums is at most $2^{-k}$. Expanding a finite tail product gives $|\prod_p(1+\delta_p)-1|\le\prod_p(1+|\delta_p|)-1\le\exp(\sum_p|\delta_p|)-1$, where $\delta_p=\beta_p-1$; this tends to zero for tails, so the partial products are Cauchy. If any factor is zero the product limit is zero. If all factors are positive, choose the tail so $\sum|\delta_p|<1/2$; every finite tail product is at least $\prod(1-|\delta_p|)\ge1-\sum|\delta_p|>1/2$. The finite initial product is positive, so the full limit is positive. [step 3.1, algebra] ∎
