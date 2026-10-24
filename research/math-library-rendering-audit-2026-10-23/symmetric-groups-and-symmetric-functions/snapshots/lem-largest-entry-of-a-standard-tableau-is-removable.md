---
id: lem-largest-entry-of-a-standard-tableau-is-removable
kind: lemma
title: The largest standard entry lies in a removable box
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-young-tableau-standard-tableau-and-shape, def-removable-and-addable-nodes-of-a-partition]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "David Craven, Groups, Geometries and Representation Theory - Section 1.4, printed p. 7"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups - Chapter 2, printed pp. 7-8"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

For every $n\ge 1$, the box occupied by $n$ in a standard tableau of size $n$
is removable, and deleting it leaves a standard tableau of size $n-1$.

## Facts & Assumptions

**Given:** An integer $n\ge 1$, a partition $\lambda\vdash n$, a standard $\lambda$-tableau $t$, and the node $b=(i,j)$ with $t(i,j)=n$.

[L1] A $\lambda$-tableau is a bijection $t:[\lambda]\to\{1,\dots,n\}$, and $t$ is standard exactly when $t(i,j)<t(i,j+1)$ holds for adjacent nodes within a row and $t(i,j)<t(i+1,j)$ holds for adjacent nodes within a column ([[def-young-tableau-standard-tableau-and-shape]]).

[L2] For a partition $\lambda=(\lambda_1,\dots,\lambda_k)$, with $\lambda_{k+1}:=0$, the node $(i,\lambda_i)$ is removable if and only if $\lambda_i>\lambda_{i+1}$, and deleting a removable node leaves the diagram of a partition of $n-1$ ([[def-removable-and-addable-nodes-of-a-partition]]).

## Proof

**Proof technique:** direct.

1.1 The entry $n$ is the largest entry of $t$, because $t$ is a bijection onto $\{1,\dots,n\}$. If $(i,j+1)\in[\lambda]$, then $t(i,j+1)>t(i,j)=n$ by [L1], which is impossible; hence $j=\lambda_i$. [L1, given]

1.2 If $(i+1,j)\in[\lambda]$, then $t(i+1,j)>t(i,j)=n$ by [L1], again impossible; hence $i=k$, or $i<k$ and $\lambda_i>\lambda_{i+1}$. [L1, given]

2.1 By steps 1.1 and 1.2 the node $b$ has the form $(i,\lambda_i)$ and satisfies $\lambda_i>\lambda_{i+1}$ with the convention $\lambda_{k+1}=0$, so $b$ is removable by [L2]. [step 1.1, step 1.2, L2]

3.1 Let $\mu\vdash n-1$ be the partition with $[\mu]=[\lambda]\setminus\{b\}$, which exists by [L2], and let $t'$ be the restriction of $t$ to $[\mu]$. Then $t'$ is a bijection $[\mu]\to\{1,\dots,n-1\}$, because $t$ is a bijection and the only node removed is the one carrying $n$. [step 2.1, L2]

4.1 Two nodes of $[\mu]$ that are adjacent in a row or column of $[\mu]$ are adjacent in $[\lambda]$ and so satisfy the corresponding strict inequality in $t$; as their entries are unchanged by the restriction, the same strict inequality holds in $t'$. Hence $t'$ is a standard tableau of shape $\mu$, that is, a standard tableau of size $n-1$, and deleting the box $b$ occupied by $n$ has produced it. ∎ [step 3.1, L1]
