---
dependency_level: 0
id: lem-gowers-balanced-partition-density-increment
kind: lemma
title: "A balanced partition gives a large positive-density cell"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - thm-integers-modulo-n-basic-algebra
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "W. T. Gowers, A new proof of Szemeredi theorem, Lemma 5.15, printed pp.497--498"
      url: https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf
---

## Statement

Let $\Omega$ be a nonempty finite set of size $N$, let $P_1,\ldots,P_M$ be a partition into nonempty sets, let $f:\Omega\to[-1,1]$ satisfy $\sum_\Omega f=0$, and let $0<\alpha\le1$. If
$$\sum_{j=1}^M\left|\sum_{x\in P_j}f(x)\right|\ge\alpha N,$$
then some cell satisfies
$$|P_j|\ge\frac{\alpha N}{4M},\qquad \sum_{x\in P_j}f(x)\ge\frac\alpha4|P_j|.$$

## Statement references

[Gowers, Lemma 5.15, printed pp.497--498](https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf)

## Facts & Assumptions

**Given:** The finite set, partition, bounded real function and parameter in the Statement.

[F1] Every sum is finite. Finite additive reindexing and the order laws are the ordinary finite-sum laws; for cyclic applications the additive group is [[thm-integers-modulo-n-basic-algebra]].

## Proof

1.1 Put $s_j=\sum_{P_j}f$ and $a_j=\max(0,s_j)$. Since $\sum_js_j=0$, one has $\sum_ja_j=\frac12\sum_j|s_j|\ge\alpha N/2$. Also $a_j\le|P_j|$, since $f\le1$. [given, F1, algebra]

2.1 The cells with $a_j<\alpha|P_j|/4$ contribute in total less than $\alpha N/4$ to $\sum_ja_j$. The cells with $|P_j|<\alpha N/(4M)$ contribute less than $\alpha N/4$, because there are at most $M$ of them and $a_j\le|P_j|$. Empty collections have contribution zero, which is still smaller than these positive bounds. If every cell were in one of these two collections, their union would contribute less than $\alpha N/2$, contradicting step 1.1. A cell outside both has $a_j\ge\alpha|P_j|/4>0$, so $s_j=a_j$ and it has both asserted bounds. [F1, step 1.1, algebra] ∎
