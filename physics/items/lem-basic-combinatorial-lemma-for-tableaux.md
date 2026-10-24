---
id: lem-basic-combinatorial-lemma-for-tableaux
kind: lemma
title: Basic row-column incidence lemma
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-partition-young-diagram-and-conjugate-partition, def-young-tableau-standard-tableau-and-shape, def-row-and-column-stabilizers-of-a-tableau, def-dominance-order-on-partitions]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups - Lemma 2.14 with its proof, printed pp. 9-10"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
    - title: "David Craven, Groups, Geometries and Representation Theory - Lemma 1.21 (Dominance lemma), printed p. 16"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $n\ge 0$, let $\lambda,\mu\vdash n$, let $t$ be a $\lambda$-tableau and let
$s$ be a $\mu$-tableau such that every row of $s$ meets each column of $t$ in
at most one entry. Then $\lambda\unrhd\mu$. Moreover, if $\lambda=\mu$, then
there are $\rho\in R_s$ and $\gamma\in C_t$ with
$$\rho\cdot s=\gamma\cdot t .$$

## Facts & Assumptions

**Given:** An integer $n\ge 0$, partitions $\lambda,\mu\vdash n$, a $\lambda$-tableau $t$, a $\mu$-tableau $s$, and the hypothesis that every row of $s$ meets every column of $t$ in at most one entry.

[L1] $R_s$ is the subgroup of $S_n$ consisting of the permutations that map each row set of $s$ onto itself, and $C_t$ is the subgroup of those that map each column set of $t$ onto itself ([[def-row-and-column-stabilizers-of-a-tableau]]).

[L2] For $\lambda=(\lambda_1,\dots,\lambda_k)$ the number of nodes of $[\lambda]$ in column $j$ is $\lambda'_j=\#\{i:\lambda_i\ge j\}$, so column $j$ has $\lambda'_j$ boxes and row $i$ has $\lambda_i$ entries of any $\lambda$-tableau ([[def-partition-young-diagram-and-conjugate-partition]]).

[L3] $\lambda\unrhd\mu$ means $\sum_{i\le r}\lambda_i\ge\sum_{i\le r}\mu_i$ for every $r\ge 1$, with both sequences padded by zeros ([[def-dominance-order-on-partitions]]).

[L4] A $\mu$-tableau is a bijection $s:[\mu]\to\{1,\dots,n\}$, so row $i$ of $s$ carries exactly $\mu_i$ entries and the entries of $s$ are exactly $1,\dots,n$ ([[def-young-tableau-standard-tableau-and-shape]]).

## Proof

**Proof technique:** direct.

1.1 Fix $r\ge 1$ and a column $j$ of $[\lambda]$. The first $r$ rows of $s$ contribute at most one entry each to column $j$ of $t$, by the hypothesis, and column $j$ contains only $\lambda'_j$ boxes; so column $j$ of $t$ contains at most $\min(r,\lambda'_j)$ entries drawn from the first $r$ rows of $s$. Double counting the nodes of $[\lambda]$ lying in its first $r$ rows, column $j$ contributes exactly $\min(r,\lambda'_j)$ of them, whence $\sum_j\min(r,\lambda'_j)=\sum_{i\le r}\lambda_i$. [given, L2, L4]

2.1 Summing the bound of step 1.1 over all columns: the first $r$ rows of $s$ contain exactly $\sum_{i\le r}\mu_i$ entries by [L4], and each of them lies in exactly one column of $t$, so $\sum_{i\le r}\mu_i\le\sum_j\min(r,\lambda'_j)=\sum_{i\le r}\lambda_i$. Since $r\ge 1$ was arbitrary, $\lambda\unrhd\mu$ by [L3], which is the first clause of the statement. [step 1.1, L3, L4]

3.1 Assume now that $\lambda=\mu$. Then the outer terms of the inequality of step 2.1 are equal for every $r\ge 1$, so each of the $\sum_j$ many column bounds of step 1.1 is attained: for all $r\ge 1$ and all columns $j$, exactly $\min(r,\lambda'_j)$ entries of the first $r$ rows of $s$ lie in column $j$ of $t$. [step 2.1, assume-hyp]

4.1 Let $A$ be the matrix with $A_{ij}=1$ when row $i$ of $s$ meets column $j$ of $t$ and $A_{ij}=0$ otherwise. Step 3.1 says $\sum_{i\le r}A_{ij}=\min(r,\lambda'_j)$ for all $r\ge 1$ and all $j$; taking $r\ge$ (number of rows of $s$) shows $\sum_i A_{ij}=\lambda'_j$, and comparing with general $r$ shows the ones in column $j$ of $A$ occur exactly in rows $i\le\lambda'_j$. Since $\lambda'_j\ge i$ holds exactly when $\lambda_i\ge j$ for the weakly decreasing sequence $\lambda$, row $i$ of $s$ meets column $j$ of $t$ precisely when $j\le\lambda_i$. [step 3.1, L2]

5.1 Define $v(i,j)$, for each node $(i,j)\in[\lambda]$, as the unique entry of $s$ that lies in row $i$ of $s$ and in column $j$ of $t$; step 4.1 supplies existence and uniqueness for exactly the nodes of $[\lambda]$, and the $n$ entries of $s$ are distributed bijectively over those nodes, so $v:[\lambda]\to\{1,\dots,n\}$ is a bijection, that is, a $\lambda$-tableau. [step 4.1, L1, L4]

6.1 For every row $i$, the entries $v(i,j)$ with $1\le j\le\lambda_i$ are exactly the entries of row $i$ of $s$, rearranged. Define $\sigma\in S_n$ on row $i$ of $s$ by sending the entry in box $(i,j)$ of $s$ to $v(i,j)$; as $j$ runs over $1,\dots,\lambda_i$ this is a permutation of the entries of row $i$ of $s$, so $\sigma$ preserves every row set of $s$ and $\sigma\cdot s=v$ holds by construction, whence $\sigma\in R_s$. [step 5.1, L1]

7.1 For every column $j$, the entries $v(i,j)$ with $1\le i\le\lambda'_j$ are $\lambda'_j$ distinct entries of the set $B_j$ of entries of column $j$ of $t$, hence they are exactly $B_j$. Define $\gamma\in S_n$ by $\gamma(t(i,j)):=v(i,j)$ for all nodes $(i,j)$; this is well defined because $t$ is a bijection, it maps $B_j$ bijectively onto itself for every column $j$, and it satisfies $\gamma\cdot t=v$, so $\gamma\in C_t$. [step 6.1, step 5.1, L1]

8.1 Steps 6.1 and 7.1 give $v=\sigma\cdot s=\gamma\cdot t$ with $\sigma\in R_s$ and $\gamma\in C_t$, the equality clause of the statement with $\rho:=\sigma$ and $\gamma$ as constructed, and step 2.1 proved the dominance clause; hence the lemma holds for every $n\ge 0$. ∎ [step 2.1, step 6.1, step 7.1]
