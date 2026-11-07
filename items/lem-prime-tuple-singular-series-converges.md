---
dependency_level: 1
id: lem-prime-tuple-singular-series-converges
kind: lemma
title: "Convergence and positivity of the admissible-tuple singular series"
status: draft
origin: pipeline
proof_strategy: direct
deps: [def-admissible-prime-tuple, def-prime, def-unit-group-modulo-n-and-euler-totient, cor-totient-at-one-and-at-a-prime]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Goldston–Pintz–Yıldırım, “Primes in Tuples I” (2009)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v170-n2-p10-p.pdf"
    - title: "James Maynard, “Small gaps between primes” (2015)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
    - title: "D. H. J. Polymath, “Variants of the Selberg sieve, and bounded intervals containing many primes” (2014), arXiv v4"
      url: "https://arxiv.org/pdf/1407.4897v4"
---

## Statement

Let $H=\{h_1,\ldots,h_k\}$ be a set of $k\ge1$ distinct integer shifts, and for each prime $p$ put $\nu_H(p)=|\{[h_i]_p:1\le i\le k\}|$ and
$$\sigma_p(H):=\frac{1-\nu_H(p)/p}{(\varphi(p)/p)^k}.$$
If $H$ is admissible, then the partial products $\prod_{p\le y}\sigma_p(H)$, with primes ordered increasingly, converge as $y\to\infty$ to a finite strictly positive real number.


## Statement references

[[def-admissible-prime-tuple|Admissibility]]


## Facts & Assumptions

**Given:** An admissible finite set $H$ of $k\ge1$ distinct integer shifts.

[F1] The tuple $H$ is **admissible** when $\nu_H(p)<p$ for every prime $p$, equivalently when at least one residue class modulo every prime is missed by all shifts ([[def-admissible-prime-tuple]]).

[F2] If $p$ is prime, then $\varphi(p)=p-1$ ([[cor-totient-at-one-and-at-a-prime]]).

## Proof

**Proof technique:** direct.

1.1 Put $D=\max_{h,h'\in H}|h-h'|$. If $p>D$, distinct shifts remain distinct modulo $p$, so $\nu_H(p)=k$. By [F2], for $p>\max(D,2k)$, [F2, algebra]
$$\sigma_p(H)=\frac{1-k/p}{(1-1/p)^k}=1+O_k(p^{-2}),$$
because the binomial expansion of $(1-1/p)^k$ is $1-k/p+O_k(p^{-2})$ and its denominator is bounded below by $2^{-k}$. [F2, algebra]


2.1 Consequently $\sum_{p>\max(D,2k)}|\sigma_p(H)-1|$ converges: it is bounded by a constant times $\sum_{n>\max(D,2k)}n^{-2}$, and the latter converges by grouping integers in dyadic blocks, whose $j$th block contributes at most $2^j(2^j)^{-2}=2^{-j}$. The finitely many remaining factors are positive by [F2] and $\varphi(p)>0$. [step 1.1, F1, F2, algebra]

3.1 Choose a tail of primes for which $a_p:=|\sigma_p(H)-1|<1/2$ and $S:=\sum a_p<1/2$. For any finite segment of that tail, expansion of the product gives $\prod(1+a_p)\le\sum_{j\ge0}S^j\le2$, while induction gives $\prod(1-a_p)\ge1-\sum a_p\ge1/2$. Hence every tail product lies between $1/2$ and $2$, and $|\prod(1+(\sigma_p-1))-1|\le\prod(1+a_p)-1\le S/(1-S)\le2S$. Let $P_0$ be the positive product over the finite initial segment. Every later partial product is at most $2P_0$. If $m<n$ lie in the tail and $S_{m,n}=\sum_{m<p\le n}a_p$, the ratio of the two partial products differs from $1$ by at most $2S_{m,n}$, so their difference is at most $4P_0S_{m,n}$. The partial products are therefore Cauchy; the lower-tail bound $1/2$ also keeps their limit positive. [step 2.1, algebra] ∎
