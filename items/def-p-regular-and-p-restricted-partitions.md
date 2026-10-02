---
id: def-p-regular-and-p-restricted-partitions
kind: definition
title: p-regular and p-restricted partitions
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
proof_strategy: direct
deps:
  - def-partition-young-diagram-and-conjugate-partition
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, §10.1 definition and Lemma 10.2, printed pp. 36-37"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
    - title: "David A. Craven, Groups, Geometries and Representation Theory, §2.3, printed pp. 23-24 (p-regular partitions and the reversed-row construction)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Definition

Let $p$ be a prime and let $\lambda\vdash n$ be a partition of $n\ge0$ with
parts $\lambda_1\ge\lambda_2\ge\cdots\ge\lambda_k\ge1$ and conjugate partition
$\lambda'$, whose $j$-th part is the number $\lambda'_j=\#\{i:\lambda_i\ge j\}$
of nodes of $[\lambda]$ in column $j$
([[def-partition-young-diagram-and-conjugate-partition]]). For $j\ge1$ let
$$z_j(\lambda):=\#\{\,i:\lambda_i=j\,\}$$
be the multiplicity with which the positive integer $j$ occurs as a part of
$\lambda$; only finitely many $z_j$ are nonzero.

- $\lambda$ is **$p$-regular** when every positive part of $\lambda$ occurs
  fewer than $p$ times, that is, when $z_j(\lambda)<p$ for every $j\ge1$.
- $\lambda$ is **$p$-restricted** when $\lambda_i-\lambda_{i+1}<p$ for every
  $i\ge1$, where the sequence is padded by the trailing zeros
  $\lambda_i:=0$ for $i>k$.

Both conditions are finite families of inequalities. For $i>k$ one has
$\lambda_i-\lambda_{i+1}=0<p$, so the restrictedness condition is the finite
list for $1\le i\le k$. The empty partition $\varnothing\vdash0$ has no parts
and $k=0$, so $z_j(\varnothing)=0<p$ and $0-0=0<p$ for every $j,i\ge1$: it is
simultaneously $p$-regular and $p$-restricted for every prime $p$.

The two conditions are exchanged by conjugation: **$\lambda$ is $p$-restricted
if and only if $\lambda'$ is $p$-regular.** The number of columns of $[\lambda]$
of height exactly $i$ is the difference $\lambda_i-\lambda_{i+1}$ of consecutive
parts, and these heights are precisely the parts of $\lambda'$, so the
multiplicity of the part $i$ in $\lambda'$ is $\lambda_i-\lambda_{i+1}$; the
stated equivalence compares the same integers with $p$.

The names record two genuinely different label conventions used later on this
page: James's modular simple modules $D^\lambda$ are labelled by **$p$-regular**
$\lambda$. Dual Specht modules themselves are defined for every partition;
their simple heads give the **$p$-restricted** labelling of simple modules,
related to the first convention by transposition and a sign twist. Neither
class of partitions contains the other in general.

## Facts & Assumptions

**Given:** A prime $p$ and a partition $\lambda\vdash n$ with $k$ parts and
conjugate $\lambda'$.

[F1] A partition of $n$ is a finite weakly decreasing sequence
$\lambda=(\lambda_1,\dots,\lambda_k)$ of positive integers with sum $n$;
trailing zeros are not parts. Its conjugate has parts
$\lambda'_j=\#\{i:\lambda_i\ge j\}$ and is again a partition of $n$
([[def-partition-young-diagram-and-conjugate-partition]]).

[F2] Column $j$ of $[\lambda]$ carries exactly $\lambda'_j$ nodes, and row $i$
carries exactly $\lambda_i$ nodes
([[def-partition-young-diagram-and-conjugate-partition]]).

## Proof

**Proof technique:** direct.

1.1 Since the parts of $\lambda$ are weakly decreasing, the rows of length at least $i$ are exactly the first $\lambda'_i$ rows, so the rows of length exactly $i$ are rows $\lambda'_{i+1}+1,\dots,\lambda'_i$ and there are $\lambda'_i-\lambda'_{i+1}$ of them. [given, F1, F2, algebra]

1.2 Equivalently, the columns of height exactly $i$ number $\lambda_i-\lambda_{i+1}$: column $j$ has height $\#\{r:\lambda_r\ge j\}$, which is at least $i$ exactly when $j\le\lambda_i$, so the columns of height at least $i$ are columns $1,\dots,\lambda_i$ and those of height exactly $i$ number $\lambda_i-\lambda_{i+1}$. [given, F1, F2, algebra]

2.1 By [F1] the parts of $\lambda'$ are the column heights of $[\lambda]$, so the multiplicity of the part $i$ in $\lambda'$ is the number of columns of height exactly $i$, namely $\lambda_i-\lambda_{i+1}$ by step 1.2. Hence $\lambda'$ is $p$-regular if and only if $\lambda_i-\lambda_{i+1}<p$ for every $i\ge1$, which is exactly the statement that $\lambda$ is $p$-restricted. [given, F1, step 1.2, algebra]

2.2 The conjugation statement includes $n=0$: for $\lambda=\varnothing$ the conjugate is $\varnothing$ by [F1], both defining conditions are the empty family of inequalities, and steps 1.1-1.2 give $\lambda_i-\lambda_{i+1}=0$ for every $i$. [given, F1, step 1.1, step 1.2]

3.1 Taking $i>k$ in the definition gives $\lambda_i-\lambda_{i+1}=0<p$, so the restrictedness condition is finite and the displayed equivalence of step 2.1 is a comparison of the same integers $z_i(\lambda')=\lambda_i-\lambda_{i+1}$ with $p$; this proves the asserted conjugation statement. [given, F1, step 1.2, step 2.1] ∎
