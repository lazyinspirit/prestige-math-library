---
id: lem-conjugation-reverses-dominance
kind: lemma
title: Conjugation reverses dominance
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-dominance-order-on-partitions, def-partition-young-diagram-and-conjugate-partition]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups - Remark 2.13(b), printed p. 9"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
    - title: "David Craven, Groups, Geometries and Representation Theory - Definitions 1.19 and Lemma 1.20, printed pp. 15-16"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

For all partitions $\lambda$ and $\mu$ of the same integer $n$,
$$\lambda\unrhd\mu\qquad\Longleftrightarrow\qquad\mu'\unrhd\lambda'.$$

## Facts & Assumptions

**Given:** An integer $n\ge 0$ and partitions $\lambda,\mu\vdash n$, with prefix sums $\sum_{i\le r}\lambda_i$ and $\sum_{i\le r}\mu_i$ padded by zeros beyond the number of parts.

[L1] $\lambda\unrhd\mu$ means $\sum_{i\le r}\lambda_i\ge\sum_{i\le r}\mu_i$ for every $r\ge 1$ ([[def-dominance-order-on-partitions]]).

[L2] The conjugate partition has column heights $\lambda'_j=\#\{i:\lambda_i\ge j\}$ ([[def-partition-young-diagram-and-conjugate-partition]]).

[L3] Conjugation is an involution, $(\lambda')'=\lambda$ ([[def-partition-young-diagram-and-conjugate-partition]]).

## Proof

**Proof technique:** direct.

1.1 Fix $k\ge 1$. Double counting the nodes of $[\lambda]$ in its first $k$ columns gives $\sum_{j\le k}\lambda'_j=\sum_i\min(\lambda_i,k)=n-\sum_i\max(0,\lambda_i-k)$; and because $\lambda$ is weakly decreasing, $\sum_i\max(0,\lambda_i-k)=\max_{r\ge 0}\bigl(\sum_{i\le r}\lambda_i-rk\bigr)$, this maximum being attained at the finite index $r=\lambda'_{k+1}$ (with $r=0$ when $k\ge\lambda_1$, using zero-padding). Hence $\sum_{j\le k}\lambda'_j=n-\max_{r\ge 0}\bigl(\sum_{i\le r}\lambda_i-rk\bigr)$ holds for every $k\ge 1$, and both sides vanish when $\lambda=\varnothing$. [L2]

2.1 Assume $\lambda\unrhd\mu$, and fix $k\ge 1$. By [L1] one has $\sum_{i\le r}\lambda_i\ge\sum_{i\le r}\mu_i$ for every $r\ge 0$, the case $r=0$ reading $0\ge 0$, so the maximum appearing in step 1.1 for $\lambda$ is at least the corresponding maximum for $\mu$; subtracting both from $n$ gives $\sum_{j\le k}\lambda'_j\le\sum_{j\le k}\mu'_j$. As $k\ge 1$ was arbitrary, $\mu'\unrhd\lambda'$. [step 1.1, L1]

3.1 Conversely assume $\mu'\unrhd\lambda'$. The partitions $\lambda'$ and $\mu'$ of $n$ are a pair of partitions of the same integer, so the implication of step 2.1 applies to them and yields $(\lambda')'\unrhd(\mu')'$; by the involution $(\lambda')'=\lambda$ and $(\mu')'=\mu$ of [L3] this is $\lambda\unrhd\mu$. [step 2.1, L3]

4.1 Step 2.1 proves the forward implication and step 3.1 the reverse one, so for all partitions $\lambda,\mu\vdash n$ one has $\lambda\unrhd\mu$ if and only if $\mu'\unrhd\lambda'$. ∎ [step 2.1, step 3.1]
