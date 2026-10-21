---
id: lem-geometric-polynomial-decay
kind: lemma
title: Polynomial factors times a geometric rate decay to zero
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-natural-numbers
  - def-integer-power
  - thm-induction-principle
  - def-ordered-field
  - def-complete-ordered-field
  - cor-cauchy-reals-lub-complete
  - lem-of-inverse-positive
  - thm-of-archimedean
  - lem-geometric-sequence-null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sashank J. Reddi, Satyen Kale, and Sanjiv Kumar, On the Convergence of Adam and Beyond"
      url: "https://arxiv.org/pdf/1904.09237"
      locator: "Appendix B, selection of a large even period parameter for the general Adam counterexample."
---

## Statement

For every real $q\in[0,1)$, every $p\in\{1,2\}$, and every real $\delta>0$, there is an integer $N\ge1$ such that $n^p q^n<\delta$ for every integer $n\ge N$.

## Statement references

[[def-natural-numbers]]: the indices $n$ and $N$ are natural numbers.

[[def-integer-power]]: $q^n$ is the natural integer power.

[[lem-geometric-sequence-null]]: if $0\le q<1$, then $q^n$ tends to zero.

[Reddi, Kale, and Kumar, Appendix B](https://arxiv.org/pdf/1904.09237)

## Facts & Assumptions

**Given:** $q\in[0,1)$, $p\in\{1,2\}$, and $\delta>0$.

[F1] [[lem-geometric-sequence-null]]: if $0\le s<1$, then for every positive tolerance there is an index after which $s^k$ is below that tolerance.

[F2] [[thm-of-archimedean]]: for every real $z$ there is an integer $N\ge1$ with $z<N$.

[F3] [[def-natural-numbers]] and [[def-integer-power]]: the powers and indices use natural-number recursion, with $q^{n+1}=q^nq$.

[F4] [[def-ordered-field]], [[def-complete-ordered-field]], [[cor-cauchy-reals-lub-complete]], and [[lem-of-inverse-positive]]: the real numbers are a totally ordered field, and positive denominators preserve inequalities when dividing.

## Proof

**Given:** $q,p,\delta$ as in the Statement.

1.1 If $q=0$, then $n^p q^n=0<\delta$ for every $n\ge1$, so take $N=1$. If $q>0$, set $s=(q+1)/2$, so $q<s<1$, and set $A=2^p-1\in\{1,3\}$. [given, F4, algebra, cases]

2.1 For every integer $n\ge1$, $(1+1/n)^p\le1+A/n$: for $p=1$ this is equality; for $p=2$, expand to $1+2/n+1/n^2$ and use $1/n^2\le1/n$. By [F2] choose $N_0\ge1$ so large that $q(1+A/N_0)\le s$. Then for every $n\ge N_0$, the ratio $((n+1)^p q^{n+1})/(n^p q^n)=q(1+1/n)^p\le s$. [given, F2, F3, F4, step 1.1, choose, algebra]

3.1 Induction on $k\ge0$ using step 2.1 gives $(N_0+k)^p q^{N_0+k}\le N_0^p q^{N_0}s^k$. By [F1] choose $K$ with $N_0^p q^{N_0}s^K<\delta$. The ratio bound in step 2.1 is at most $s<1$, so the sequence $n^p q^n$ is nonincreasing for $n\ge N_0$; hence every $n\ge N_0+K$ satisfies $n^p q^n\le N_0^p q^{N_0}s^K<\delta$. This proves the Statement in the $q>0$ case, and step 1.1 proves the $q=0$ case. [F1, F3, F4, step 1.1, step 2.1, induction, choose, algebra] ∎

