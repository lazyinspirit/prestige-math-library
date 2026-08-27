---
id: cor-pentagonal-recurrence-for-partition-numbers
kind: corollary
title: "Euler's pentagonal recurrence for partition numbers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-euler-pentagonal-number-theorem-by-franklin,
       cor-integer-partitions-have-euler-product,
       prop-coefficient-extraction-linearity-and-extensionality]
justified_by: []
aliases: []
landmark: false
proof_strategy: coefficient-comparison
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Darij Grinberg, Enumerative Combinatorics: class notes"
      url: "https://www.cip.ifi.lmu.de/~grinberg/t/19fco/n/n.pdf"
pipeline_run: null
---

## Statement

Let $p(n)=0$ for $n<0$ and $p(0)=1$. Then for every integer $n>0$,

$$p(n)=p(n-1)+p(n-2)-p(n-5)-p(n-7)+p(n-12)+p(n-15)-\cdots,$$

where the offsets are the generalized pentagonal numbers
$r(3r-1)/2$ and the sum stops once the offset exceeds $n$.

Equivalently, for every integer $n$,

$$\sum_{r \in \mathbb{Z}}(-1)^r p\!\left(n-\frac{r(3r-1)}{2}\right)=0$$

when $n>0$, while the same sum is $1$ at $n=0$.

## Facts & Assumptions

**Given:** the partition series $P(x)=\sum_{n \ge 0}p(n)x^n$.

[L1] The partition generating function is $P(x)=\prod_{m \ge 1}(1-x^m)^{-1}$ ([[cor-integer-partitions-have-euler-product]]).

[L2] Euler's pentagonal theorem gives $\prod_{m \ge 1}(1-x^m)=\sum_{r \in \mathbb{Z}}(-1)^r x^{r(3r-1)/2}$ ([[thm-euler-pentagonal-number-theorem-by-franklin]]).

[L3] Coefficients of products are Cauchy sums, and equality of formal series is coefficientwise ([[prop-coefficient-extraction-linearity-and-extensionality]]).

## Proof

**Proof technique:** coefficient comparison.

1.1 Multiply the identities of [L1] and [L2]. The two products are reciprocals, so $P(x)\sum_{r \in \mathbb{Z}}(-1)^r x^{r(3r-1)/2}=1$. [L1, L2, algebra]

2.1 By [L3], the coefficient of $x^n$ on the left side of step 1.1 is $\sum_{r \in \mathbb{Z}}(-1)^r p\!\left(n-\frac{r(3r-1)}{2}\right)$, with the convention $p(m)=0$ for $m<0$. The coefficient on the right side is $0$ when $n>0$ and $1$ when $n=0$. This proves the equivalent formulation. [step 1.1, L3]

3.1 For $n>0$, isolate the $r=0$ term in step 2.1. The remaining nonzero terms occur in the pairs $r=\pm1,\pm2,\dots$, whose offsets are $1,2,5,7,12,15,\dots$. Moving them to the other side yields the displayed recurrence for $p(n)$. [step 2.1, algebra] ∎
