---
id: lem-summatory-euler-totient-lower-bound
kind: lemma
title: "Positive average order of Euler's totient on dyadic intervals"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-unit-group-modulo-n-and-euler-totient
  - thm-unit-criterion-modulo-n
  - thm-standard-representatives-modulo-n
  - def-coprime
proof_strategy: direct
verification:
  precheck: n/a
sources:
  references:
    - title: "Beresnevich and Velani, A note on zero-one laws in metrical Diophantine approximation, §2"
      url: "https://arxiv.org/pdf/0803.2355v1"
---

## Statement

Let $\varphi(q)$ be Euler's totient, the number of residue classes modulo $q$ that are units. There are constants $c>0$ and $N_0\ge1$ such that

$$\sum_{N<q\le2N}\varphi(q)\ge cN^2\qquad(N\ge N_0).$$

Consequently, for every nonincreasing sequence $a_q\ge0$,

$$\sum_{q=1}^{\infty}\varphi(q)a_q=\infty\quad\Longleftrightarrow\quad\sum_{q=1}^{\infty}q\,a_q=\infty.$$

## Facts & Assumptions

**Given:** The totient counts the integers $1\le a\le q$ coprime to $q$.

[F1] $\varphi(q)$ counts the unit classes modulo $q$; a class is a unit exactly when its representative is coprime to $q$, and every class has a representative in $0,\ldots,q-1$. For $q>1$, this gives the coprime representatives $1,\ldots,q-1$; for $q=1$, both the unit-class count and the number of $a\in\{1\}$ with $\gcd(a,1)=1$ equal $1$. ([[def-unit-group-modulo-n-and-euler-totient]], [[thm-unit-criterion-modulo-n]], [[thm-standard-representatives-modulo-n]], [[def-coprime]])

## Proof

1.1 Let $C_N$ count ordered coprime pairs $(a,b)$ with $1\le a,b\le N$. Every non-coprime pair has both coordinates divisible by some integer $d\ge2$, so the union bound gives $C_N\ge N^2-\sum_{d=2}^{N}\lfloor N/d\rfloor^2\ge N^2\left(1-\sum_{d=2}^{\infty}d^{-2}\right).$ The estimate $\sum_{d=2}^{\infty}d^{-2}\le\tfrac14+\tfrac19+\int_3^\infty x^{-2}\,dx=\tfrac{25}{36}$ yields $C_N\ge 11N^2/36$. [given, F1, algebra]

2.1 Count these pairs by $\max(a,b)$. For $q\ge2$, there are $2\varphi(q)$ coprime pairs with maximum $q$, and there is one pair for $q=1$. Thus $C_N=2\sum_{q\le N}\varphi(q)-1$, so $F(N):=\sum_{q\le N}\varphi(q)\ge11N^2/72$. [F1, step 1.1, algebra]

3.1 For $N\ge9$, $F(2N)-F(N)\ge 11(2N)^2/72-N(N+1)/2\ge N^2/18$, since $F(N)\le\sum_{q\le N}q=N(N+1)/2$. This proves the dyadic lower bound with $c=1/18$. [step 2.1, algebra]

4.1 Since $\varphi(q)\le q$, convergence of $\sum q a_q$ implies convergence of $\sum\varphi(q)a_q$. Conversely, put $N=2^j$. Monotonicity gives $\sum_{N\le q<2N}q a_q\le2N^2a_N,$ while the dyadic lower bound on $(N/2,N]$ gives $\sum_{N/2<q\le N}\varphi(q)a_q\ge a_N\sum_{N/2<q\le N}\varphi(q)\ge c(N/2)^2a_N$ for sufficiently large $j$. Summing over $j$ shows that divergence of the $q$-weighted series forces divergence of the totient-weighted series. [given, step 3.1, algebra]

5.1 The two implications in step 4.1 prove the asserted equivalence. [step 4.1] ∎

## Statement references

[Beresnevich and Velani, *A note on zero-one laws in metrical Diophantine approximation*, §2](https://arxiv.org/pdf/0803.2355v1)
