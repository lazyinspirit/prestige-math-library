---
id: cex-p-regular-and-p-restricted-are-not-the-same-label
kind: counterexample
title: "p-regular and p-restricted labels differ"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
proof_strategy: direct
deps:
  - def-p-regular-and-p-restricted-partitions
  - prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality
  - def-sign-representation-and-restriction-of-a-representation
  - def-partition-young-diagram-and-conjugate-partition
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, §10.1 and Lemma 10.2, printed pp. 36-37"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Remark 5.5 (q=1 dictionary), PDF p. 25"
      url: "https://arxiv.org/pdf/0909.4844"
verification:
  precheck: pass
---

## Statement refuted

The $p$-regular and $p$-restricted partitions of $n$ coincide, so that the
James labelling $D^\lambda$ of the simple $k[S_n]$-modules by $p$-regular
$\lambda$ and the labelling $D(\mu)$ by $p$-restricted $\mu$ assign the same
partition to each simple module, and a statement proved for one labelling
applies verbatim to the other.

## Facts & Assumptions

**Given:** The prime $p=2$ and the partitions $(2)$ and $(1,1)$ of $n=2$, with multiplicities $z_j(\lambda)$ of the positive parts and the conjugate partition $\lambda'$ ([[def-p-regular-and-p-restricted-partitions]], [[def-partition-young-diagram-and-conjugate-partition]]).

[F1] A partition $\lambda$ is $p$-regular when $z_j(\lambda)<p$ for every $j\ge1$, and $p$-restricted when $\lambda_i-\lambda_{i+1}<p$ for every $i\ge1$, with the sequence padded by zeros; and $\lambda$ is $p$-restricted if and only if $\lambda'$ is $p$-regular ([[def-p-regular-and-p-restricted-partitions]]).

[F2] The conjugate partition has parts $\lambda'_j=\#\{i:\lambda_i\ge j\}$; in particular the conjugate of a one-part partition is a column and conversely ([[def-partition-young-diagram-and-conjugate-partition]]).

[F3] For a $p$-regular partition $\lambda$ the James simple module $D^\lambda$ and the dual-label simple module $D(\lambda')$ are related by $D^\lambda\cong D(\lambda')\otimes\operatorname{sgn}$ ([[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]]).

[F4] The sign representation is the one-dimensional representation on which $\sigma$ acts by $\operatorname{sgn}(\sigma)=\pm1$; over a field of characteristic $2$ one has $-1=1$, so the sign representation is the trivial representation ([[def-sign-representation-and-restriction-of-a-representation]]).

## Counterexample

**Proof technique:** direct.

1.1 For $\lambda=(2)$ one has $z_2(\lambda)=1<2$, so $(2)$ is $2$-regular; and $\lambda_1-\lambda_2=2-0=2$, which is not $<2$, so $(2)$ is not $2$-restricted. Thus $(2)$ is $2$-regular but not $2$-restricted. [given, F1, algebra]

1.2 For $\lambda=(1,1)$ one has $z_1(\lambda)=2$, which is not $<2$, so $(1,1)$ is not $2$-regular; and the padded differences are $\lambda_1-\lambda_2=1-1=0<2$ and $\lambda_2-\lambda_3=1-0=1<2$, so $(1,1)$ is $2$-restricted. Thus $(1,1)$ is $2$-restricted but not $2$-regular. [given, F1, algebra]

2.1 By [F2], $(2)'=(1,1)$ and $(1,1)'=(2)$: the diagram of $(2)$ has two columns of height $1$, and the diagram of $(1,1)$ has one column of height $2$. This is exactly the conjugation exchange of [F1] that matches the two partitions of steps 1.1 and 1.2. [given, F1, F2, step 1.1, step 1.2, algebra]

3.1 Steps 1.1 and 1.2 exhibit partitions of the same integer $2$ that lie in exactly one of the two classes: $(2)$ is $2$-regular and not $2$-restricted, while $(1,1)$ is $2$-restricted and not $2$-regular. Hence the two families do not coincide, and labelling by one of them is not labelling by the other. Moreover the two labels describe the same simple module: by [F3] applied to the $2$-regular partition $(2)$, whose conjugate $(1,1)$ is $2$-restricted, $$D^{(2)}\cong D\bigl((1,1)\bigr)\otimes\operatorname{sgn} \cong D\bigl((1,1)\bigr),$$ the last step because the sign representation is trivial in characteristic $2$ by [F4]. So a statement about the $p$-restricted label $D(\mu)$ cannot be applied to the James label $D^\lambda$ without transposing the partition (and, in odd characteristic, inserting the sign twist); the change of partition is present already at $p=2$, where the sign twist itself is invisible. [given, F1, F3, F4, step 1.1, step 1.2, step 2.1] ∎
