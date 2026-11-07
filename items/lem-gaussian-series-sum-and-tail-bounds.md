---
id: lem-gaussian-series-sum-and-tail-bounds
kind: lemma
title: Gaussian series sum and tail bounds
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-geometric-series
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Ian Petrow, Introduction to Analytic Number Theory
      url: https://www.homepages.ucl.ac.uk/~ucahpet/IANTnotes2018.pdf
      locator: Chapter 7, Gaussian theta sums and exponential decay, printed pp. 55–56.
---

## Statement

Fix $c>0$ and $a\in\{0,1\}$. There is $C_{a,c}>0$ such that for $0<t\le1$,
$$\sum_{n\ge1}n^a e^{-cn^2t}\le C_{a,c}t^{-(a+1)/2},$$
and for $t\ge1$,
$$\sum_{n\ge1}n^a e^{-cn^2t}\le C_{a,c}e^{-ct/2}.$$
For every integer $N\ge1$, the corresponding tails satisfy
$$\sum_{n>N}n^a e^{-cn^2t}\le C_{a,c}t^{-(a+1)/2}e^{-cN^2t/2}\quad(0<t\le1),$$
and
$$\sum_{n>N}n^a e^{-cn^2t}\le C_{a,c}e^{-cN^2t/2}e^{-ct/4}\quad(t\ge1).$$

## Statement references

Ian Petrow, *Introduction to Analytic Number Theory*, Chapter 7, printed pp. 55–56.

## Facts & Assumptions

**Given:** Real $c>0$, $a\in\{0,1\}$, real $t>0$, and an integer $N\ge1$.

[F1] A geometric series with ratio $r$ satisfying $0\le r<1$ converges to $1/(1-r)$ ([[thm-geometric-series]]).

## Proof

1.1 Suppose $0<t\le1$ and group positive integers by $k\le n\sqrt t<k+1$ for $k\ge0$. Each group has at most $2t^{-1/2}$ integers. Within it, $n^a\le(k+1)^a t^{-a/2}$ and $e^{-cn^2t}\le e^{-ck^2}$. Therefore $$\sum_{n\ge1}n^ae^{-cn^2t}\le2t^{-(a+1)/2}\sum_{k\ge0}(k+1)^ae^{-ck^2}.$$ The ratio of consecutive terms in the last series is $((k+2)/(k+1))^ae^{-c(2k+1)}\to0$, so it is at most $1/2$ for all sufficiently large $k$; [F1] bounds that tail by a convergent geometric series. [F1, given, algebra]

1.2 For $t\ge1$ and $n\ge1$, $n^2t\ge t/2+n^2/2$, since $(2n^2-1)t\ge n^2$. Thus $$\sum_{n\ge1}n^ae^{-cn^2t}\le e^{-ct/2}\sum_{n\ge1}n^ae^{-cn^2/2},$$ and the remaining series converges because its consecutive-term ratio $((n+1)/n)^ae^{-c(2n+1)/2}$ tends to zero and [F1] gives a geometric tail. This proves the full-sum bounds after enlarging $C_{a,c}$. [F1, given, algebra]

2.1 If $n>N$, then $n^2\ge(N^2+n^2)/2$. Hence $$\sum_{n>N}n^ae^{-cn^2t}\le e^{-cN^2t/2}\sum_{n\ge1}n^ae^{-cn^2t/2}.$$ For $0<t\le1$, apply step 1.1 with $c/2$. For $t\ge1$, apply step 1.2 with $c/2$, obtaining the two asserted tail estimates after enlarging the same constant. [step 1.1, step 1.2, given, algebra] ∎

