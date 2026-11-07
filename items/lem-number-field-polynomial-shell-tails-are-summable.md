---
id: lem-number-field-polynomial-shell-tails-are-summable
kind: lemma
title: Number-field polynomial shell tails are summable
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-fundamental-identity-for-primes-in-number-fields
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  scraped: []
  references: []
---

## Statement

Let $F$ be a number field of degree $d$, and write $q_v$ for the residue cardinality of a finite place. Fix integers $m\ge1$ and $D\ge0$, a constant $C\ge0$, and $\delta>1$. Suppose that for each finite place outside a fixed finite set, a nonnegative number $a_v$ is at most the sum of shell contributions indexed by $\lambda\in\mathbb Z_{\ge0}^m$ with $|\lambda|\ge1$, and that the contribution of each shell is at most $C(1+|\lambda|)^Dq_v^{-\delta|\lambda|}$. Then $\sum_v a_v<\infty$ after adjoining any finite values at the excluded places. The same bound is uniform for a family of tails satisfying the same constants.

## Facts & Assumptions

**Given:** The number field, constants and local shell bounds in the Statement.

[F1] For each rational prime the sum of ramification index times residue degree over the primes above it equals $d$. [[thm-fundamental-identity-for-primes-in-number-fields]]

## Proof

**Given:** The Statement data and [F1].

1.1 For $k\ge1$ the number of nonnegative integer $m$-tuples of sum $k$ is $\binom{k+m-1}{m-1}\le(k+1)^{m-1}$. Because $q_v\ge2$ and $\delta>1$, the shell bound gives $a_v\le Cq_v^{-\delta}\sum_{k\ge1}(k+1)^{D+m-1}2^{-(k-1)}$. The last series is finite by the ratio test. [given, construct, algebra]

2.1 By [F1] at most $d$ finite places lie over a rational prime $p$, and their residue cardinalities are positive integral powers of $p$. Thus $\sum_vq_v^{-\delta}\le d\sum_p p^{-\delta}\le d\sum_{n\ge2}n^{-\delta}<\infty$; the last series converges by grouping $2^j\le n<2^{j+1}$ and summing the resulting geometric majorant $2^{j(1-\delta)}$. Combining this with step 1.1 proves the claim and the same constant proves uniformity. [given, F1, step 1.1, algebra] ∎
