---
dependency_level: 1
id: lem-elementary-rankin-smooth-number-upper-bound
kind: lemma
title: Elementary Rankin upper bound sufficient for the final range
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- lem-short-interval-prime-sum-calculus
- thm-canonical-prime-factorisation
justified_by: []
proof_strategy: direct
sources:
  references:
  - title: Hildebrand and Tenenbaum, Integers without large prime factors, §2 Rankin method; weaker elementary bound sufficient with R=4
    url: https://www.numdam.org/item/JTNB_1993__5_2_411_0/
---

## Statement

Let $x\ge y\ge3$, $u=(\log x)/(\log y)\ge e$, and $\log u\le(\log y)/4$. Let $\Psi(x,y)$ count integers at most $x$ whose prime divisors are at most $y$. Then, for an absolute $C$,

$$\Psi(x,y)\le Cx\log y\exp(-u\log u+Cu).$$


For fixed $R\ge4$ and $P=\exp((\log X)(\log\log\log X)/(R\log\log X))$, it follows that $\Psi(3X,P)\le X(\log X)^{1-R+o(1)}$ as $X\to\infty$.

## Statement references

[[lem-short-interval-prime-sum-calculus]]

[[thm-canonical-prime-factorisation]]

## Facts & Assumptions

**Given:** All data and hypotheses in the Statement.

[F1] The local supplier [[lem-short-interval-prime-sum-calculus]] gives its stated result under its stated hypotheses.

[F2] The local supplier [[thm-canonical-prime-factorisation]] gives its stated result under its stated hypotheses.

## Proof

1.1 Set $a=(\log u)/(\log y)$ and $\sigma=1-a\ge3/4$. Unique factorization and geometric series, all with nonnegative terms and finitely many primes, give $\Psi(x,y)\le x^\sigma\prod_{p\le y}(1-p^{-\sigma})^{-1}$. The terms of prime-power degree at least two in the logarithm of this product are bounded uniformly, since $\sigma\ge3/4$ and $\sum_{n\ge2}n^{-3/2}$ converges. For the degree-one sum write $$\sum_{p\le y}p^{-\sigma}=\sum_{p\le y}\frac1p+\sum_{p\le y}\frac{p^a-1}{p}.$$ In the second sum put $w(v)=(e^{av}-1)/v$, with $w(0)=a$, and use $A(e^v)=v+O(1)$. Summation by parts gives the second sum at most $\int_0^{\log y}(e^{av}-1)\,dv/v+O(1+w(\log y))$. To see the bounded error, $w$ is increasing by its power series and the error term is at most an absolute constant times $w(\log y)+w(\log2)$. Expand the nonnegative power series to get $\int_0^{\log y}(e^{av}-1)\,dv/v=\sum_{k\ge1}(\log u)^k/(k k!)\le u$. Also $w(\log y)\le u/\log y\ll u$. [F1] bounds the first sum by $\log\log y+O(1)$. Thus the Euler product is at most $C\log y\,e^{Cu}$. Finally $x^{\sigma}=x e^{-a\log x}=x e^{-u\log u}$, proving the claim. [given, F1, F2, algebra]

2.1 For fixed $R\ge4$, put $P=\exp((\log X)(\log\log\log X)/(R\log\log X))$. Applying the bound with $x=3X,y=P$ gives $\Psi(3X,P)\le X(\log X)^{1-R+o(1)}$: here $u\log u=(R+o(1))\log\log X$, $u=o(\log\log X)$, and $\log P\le\log X$. In particular $R=4$ gives density $(\log X)^{-3+o(1)}$, sufficient for the desired final $(\log X)^{-2+o(1)}$ errors. This deliberately does not assert Menon's exact $R=2$ smooth-density lemma. The theorem applications must select $R=4$ and carry that choice through the weighted estimates. [given, F1, F2, step 1.1, algebra] ∎
