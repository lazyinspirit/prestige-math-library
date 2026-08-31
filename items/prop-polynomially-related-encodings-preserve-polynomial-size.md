---
id: prop-polynomially-related-encodings-preserve-polynomial-size
kind: proposition
title: "Polynomially related encodings preserve polynomial size bounds"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-instance-size-under-an-encoding]
proof_strategy: direct
justified_by: []
verification:
  precheck: pass
  audited: 2026-08-31
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "San Skulrattanakulchai, The Class P"
      url: "https://homepages.gac.edu/~sskulrat/Courses/2019S-265/lectures/P.html"
    - title: "John E. Savage, Models of Computation: Exploring the Power of Computing"
      url: "https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation.pdf"
---

## Statement

Let $\sigma,\tau:I\to\{0,1\}^*$ be polynomially related encodings of the same
instance set $I$. For any function $m:I\to\mathbb N$, the following are
equivalent:

1. There is a polynomial $p$ such that $m(x)\le p(|x|_\sigma)$ for every
   $x\in I$.
2. There is a polynomial $r$ such that $m(x)\le r(|x|_\tau)$ for every
   $x\in I$.

## Facts & Assumptions

**Given:** Polynomially related encodings $\sigma,\tau:I\to\{0,1\}^*$ and a function $m:I\to\mathbb N$.

[L1] The notation $|x|_\sigma$ means $|\sigma(x)|$, and polynomial relatedness means that there are polynomials $q,s$ with $|\sigma(x)|\le q(|x|_\tau)$ and $|\tau(x)|\le s(|x|_\sigma)$ for all $x\in I$, by [[def-instance-size-under-an-encoding]].

## Proof

**Proof technique:** direct.

1.1 Assume clause 1. Then there is a polynomial $p$ with $m(x)\le p(|x|_\sigma)$ for all $x\in I$. [given]

1.2 By [L1], there is a polynomial $q$ with $|x|_\sigma\le q(|x|_\tau)$ for all $x\in I$. Choose a polynomial $P:\mathbb N\to\mathbb N$ such that $p(n)\le P(n)$ for every $n$ and $P$ is nondecreasing; for example, if $p(t)=\sum_{j=0}^d a_j t^j$, one may take $P(t)=\sum_{j=0}^d \lceil |a_j| \rceil (t+1)^j$. Then $$m(x)\le p(|x|_\sigma)\le P(|x|_\sigma)\le P(q(|x|_\tau))$$ for every $x\in I$. Since $P\circ q$ is again a polynomial, clause 2 holds. [L1, algebra]

1.3 Conversely, assume clause 2. Then there is a polynomial $r$ with $m(x)\le r(|x|_\tau)$ for all $x\in I$. [given]

1.4 By [L1], there is a polynomial $s$ with $|x|_\tau\le s(|x|_\sigma)$ for all $x\in I$. Choose a polynomial $R:\mathbb N\to\mathbb N$ such that $r(n)\le R(n)$ for every $n$ and $R$ is nondecreasing. Then $$m(x)\le r(|x|_\tau)\le R(|x|_\tau)\le R(s(|x|_\sigma))$$ for every $x\in I$. Since $R\circ s$ is a polynomial, clause 1 holds. [L1, algebra]

2.1 Steps 1.2 and 1.4 prove the two implications, so clauses 1 and 2 are equivalent. [step 1.2, step 1.4] ∎
