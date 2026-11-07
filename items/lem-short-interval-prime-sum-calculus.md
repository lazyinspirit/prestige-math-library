---
dependency_level: 0
id: lem-short-interval-prime-sum-calculus
kind: lemma
title: Prime-sum calculus
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- thm-first-mertens-theorem-for-primes
justified_by: []
proof_strategy: direct
sources:
  references:
  - title: Victor Shoup, A Computational Introduction to Number Theory and Algebra, §5.3; summation-by-parts consequences
    url: https://www.shoup.net/ntb/ntb-v2_0.pdf
---

## Statement

For real $x\ge3$, there is an absolute constant $b$ such that

$$\sum_{p\le x}\frac1p=\log\log x+b+O(1/\log x).$$

Moreover, with $\pi(x)=\#\{p\le x:p\text{ prime}\}$, $\pi(x)\ll x/\log x$ and $\sum_{p>x}1/(p\log p)\ll1/\log x$. Consequently, for $z\ge3$,

$$\prod_{3\le p\le z}(1-2/p)\asymp(\log z)^{-2},\qquad \prod_{p\le z}(1-1/p)^{-1}\ll\log z.$$

All implied constants are absolute.

## Statement references

[[thm-first-mertens-theorem-for-primes]]

## Facts & Assumptions

**Given:** All data and hypotheses in the Statement.

[F1] The local supplier [[thm-first-mertens-theorem-for-primes]] gives its stated result under its stated hypotheses.

## Proof

1.1 For real $v\ge3$, let $A(v)=\sum_{p\le v}(\log p)/p$. The actual published first Mertens theorem says $A(v)=\log v+O(1)$, with a uniform absolute constant. Finite summation by parts (telescope the finitely many intervals between primes) gives $$\sum_{p\le v}\frac1p=\frac{A(v)}{\log v}+\int_2^v\frac{A(t)}{t(\log t)^2}\,dt=\log\log v+b+O(1/\log v).$$ Indeed the integral of the bounded error over $[2,\infty)$ converges, and its tail from $v$ is $O(1/\log v)$. [given, F1, algebra]

2.1 Thus $\sum_{a<p\le b}1/p=\log(\log b/\log a)+O(1/\log a)$ for $b\ge a\ge3$. Also $\pi(v)\ll v/\log v$: first $\sum_{v/2<p\le v}\log p\le v(A(v)-A(v/2))\ll v$; summing dyadically gives $\vartheta(v)\ll v$, and primes above $\sqrt v$ contribute at least $(\log v)/2$ each while there are at most $\sqrt v$ smaller integers. Summation by parts with this $\pi$ bound gives $$\sum_{p>v}\frac1{p\log p}\ll\frac1{\log v}.$$ The same assertions hold uniformly on bounded initial ranges after increasing constants. For all primes at least $3$, $\log\prod_{3\le p\le z}(1-2/p)=-2\log\log z+O(1)$, so this product is $\asymp(\log z)^{-2}$; for any subset the product is at least as large. Also and $\prod_{p\le z}(1-1/p)^{-1}\ll\log(2z)$: expand the logarithms and bound their terms of degree at least two by the convergent series $\sum_{n\ge3}n^{-2}$. [given, F1, step 1.1, algebra] ∎
