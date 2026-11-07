---
dependency_level: 1
id: lem-nonnegative-prime-cluster-weights-detect-bounded-gaps
kind: lemma
title: "Positive excess of nonnegative weights detects prime clusters and bounds H_m"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-prime
  - def-liminf-consecutive-prime-gap-hm
justified_by: []
proof_strategy: direct
axiom_use: "Finite positivity and unbounded integer sets suffice; no sequence of witnesses or choice axiom is required."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Maynard, Small gaps between primes (2015)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
      locator: "Section 2, nonnegative-weight detection; Proposition 4.2 proof, printed p. 389."
verification:
  precheck: pending
---

## Statement

Let $h_1<\cdots<h_k$ be integers and $1\le m<k$. Write $P_H(n)=\sum_{i=1}^k1_{\mathbb P}(n+h_i)$, where the indicator is one exactly at positive primes. For a finite set $\mathcal N$ of positive integers and nonnegative real weights $w_n$, set $S_1=\sum_{n\in\mathcal N}w_n$ and $S_2=\sum_{n\in\mathcal N}w_nP_H(n)$. If $S_2>mS_1$, some $n\in\mathcal N$ has $w_n>0$ and $P_H(n)\ge m+1$.

If for every sufficiently large real $X$ such weights exist on a finite subset of $[X,2X)\cap\mathbb Z$, then infinitely many positive integers $n$ satisfy $P_H(n)\ge m+1$, and $H_m\le h_k-h_1$.

More generally, the same conclusion follows from asymptotics $S_1(X)=a(X)(I+o(1))$ and $S_2(X)=a(X)(cJ+o(1))$, where $a(X)>0$, $I>0$, and $cJ>mI$ are fixed real numbers, provided the weights and supports have the preceding properties for all sufficiently large $X$.

## Statement references

[Maynard, Section 2 and Proposition 4.2 proof](https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf)

## Facts & Assumptions

**Given:** The finite weights or the family of finite weights and limits as stated.

[F1] [[def-prime]]: positive primes are integers exceeding one.

[F2] [[def-liminf-consecutive-prime-gap-hm]]: the increasing sequence $p_r$ lists all positive primes, and $H_m=\sup_R\inf_{r\ge R}(p_{r+m}-p_r)$ in the extended nonnegative real line.

## Proof

1.1 The difference $S_2-mS_1$ is $\sum_{n\in\mathcal N}w_n(P_H(n)-m)$. If every term were nonpositive, their finite sum would be nonpositive. A positive term therefore exists. Since $w_n\ge0$ and $P_H(n)$ is an integer, that term has $w_n>0$ and $P_H(n)\ge m+1$. The empty set or all-zero weights cannot satisfy the strict hypothesis. [given, F1, algebra]

2.1 In the dyadic-family case, step 1.1 supplies a successful translate $n\ge X$ for every sufficiently large $X$. The successful set is unbounded, hence infinite. This reasoning needs no simultaneous choice of translates. For each successful $n$, let $p_r$ be the first positive prime at least $n+h_1$. The interval $[n+h_1,n+h_k]$ contains at least $m+1$ distinct primes, so $p_{r+m}\le n+h_k$, while $p_r\ge n+h_1$. Therefore $p_{r+m}-p_r\le h_k-h_1$. [F1, F2, step 1.1, algebra]

3.1 The resulting indices $r$ are unbounded: for any index bound $R$, take a successful $n$ with $n+h_1>p_R$. Then $r>R$. Thus for every $R$ there is $r\ge R$ with $p_{r+m}-p_r\le h_k-h_1$. Each tail infimum in [F2] is at most that diameter, so its supremum is also at most the diameter. [F2, step 2.1, algebra]

4.1 Under the final asymptotic hypotheses, $S_2-mS_1=a(X)(cJ-mI+o(1))>0$ for all sufficiently large $X$, since $a(X)>0$ and the fixed limiting excess is positive. Apply the preceding steps. This implication assumes those asymptotics and does not establish them. [given, step 1.1, step 2.1, step 3.1, algebra] ∎
