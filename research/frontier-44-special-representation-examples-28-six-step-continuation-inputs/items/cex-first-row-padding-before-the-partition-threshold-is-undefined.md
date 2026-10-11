---
id: cex-first-row-padding-before-the-partition-threshold-is-undefined
kind: counterexample
title: First-row padding below the threshold is undefined
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-first-row-padding-of-a-partition,
       def-partition-young-diagram-and-conjugate-partition]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, FI-modules and stability for representations of symmetric groups, arXiv:1204.4533v4 (2014)"
      url: "https://arxiv.org/pdf/1204.4533"
      locator: "§3.2, Definition 3.2.1 and Proposition 3.4.1, printed pp. 17-19: the padded family begins only when the displayed sequence is a partition, at the threshold $n\\ge|\\lambda|+\\lambda_1$"
    - title: "Emmanuel Briand, Rosa Orellana and Mercedes Rosas, The stability of the Kronecker product of Schur functions, arXiv:0907.4652v2 (2009)"
      url: "https://arxiv.org/pdf/0907.4652"
      locator: "Introduction, printed pp. 1-3: first-row padding and the threshold below which the padded sequence is not a partition"
---

## Statement refuted

**Refuted claim:** for every partition $\alpha$ and every integer
$n\ge|\alpha|$ the displayed sequence $(n-|\alpha|,\alpha_1,\alpha_2,\dots)$ is
a partition of $n$, so that the padded family and the padded Kronecker
coefficient $g_n(\alpha,\beta,\gamma)$ would be defined as soon as the size
condition $n\ge|\alpha|$ holds
([[def-first-row-padding-of-a-partition]]).

The witness is $\alpha=(2,1)$, of size $|\alpha|=3$ and first part
$\alpha_1=2$. For $n=3$ and $n=4$ the size condition $n\ge|\alpha|$ holds, but
the displayed sequences are
$$\alpha[3]=(0,2,1),\qquad\alpha[4]=(1,2,1),$$
and neither is a partition: the first has a nonpositive leading entry, and the
second is not weakly decreasing. Only from the threshold
$|\alpha|+\alpha_1=3+2=5$ on does the family become a family of partitions,
starting with $\alpha[5]=(2,2,1)$. Hence the padded sequence is undefined below
the threshold, and for this shape the stable family begins at $n=5$.

## Facts & Assumptions

**Given:** The partition $\alpha=(2,1)$ and the integers $n=3,4,5$ ([[def-partition-young-diagram-and-conjugate-partition]]).

[F1] For a partition $\alpha$ and an integer $n\ge|\alpha|+\alpha_1$ one sets $\alpha[n]=(n-|\alpha|,\alpha_1,\alpha_2,\dots)$, which is then a partition of $n$; below the threshold the displayed sequence is not a partition and $\alpha[n]$ is undefined ([[def-first-row-padding-of-a-partition]]).

[F2] A partition of $n$ is a finite weakly decreasing sequence of positive integers with sum $n$; trailing zeros are not parts, so a displayed sequence that is not weakly decreasing, or that contains a nonpositive entry, is not a partition ([[def-partition-young-diagram-and-conjugate-partition]]).

[F3] $\alpha=(2,1)$ has $|\alpha|=2+1=3$ and $\alpha_1=2$, so its padding threshold is $|\alpha|+\alpha_1=5$. [F1, given]

## Counterexample

**Proof technique:** direct.

1.1 For $n=3$ the displayed sequence is $(3-3,2,1)=(0,2,1)$. Its leading entry $0$ is not a positive integer and $0<2$ shows that the sequence is not weakly decreasing, so by [F2] it is not a partition of $3$, although $3=|\alpha|$ and hence $n\ge|\alpha|$ holds. [F2, F3, given]

1.2 For $n=4$ the displayed sequence is $(4-3,2,1)=(1,2,1)$. Its entries are positive and sum to $4$, but $1<2$, so it is not weakly decreasing and by [F2] it is not a partition of $4$, although $4\ge|\alpha|$ holds. [F2, F3, given]

2.1 For $n=5$, which is the threshold $|\alpha|+\alpha_1$ computed in [F3], the displayed sequence is $(5-3,2,1)=(2,2,1)$: the entries are positive, weakly decreasing and sum to $5$, so it is a partition of $5$. By [F1] the padding $\alpha[5]=(2,2,1)$ is defined, and by step 1.1 and step 1.2 it is the first member of the family; the threshold is therefore exact. [F1, F2, F3]

3.1 Consequently the refuted claim fails at $n=3$ and $n=4$: the size condition $n\ge|\alpha|$ is not enough, and the padded family of $\alpha=(2,1)$ is a family of partitions only from $n=5$ on. Any padded Kronecker coefficient $g_n(\alpha,\beta,\gamma)$ with $\alpha=(2,1)$ and $n<5$ is likewise undefined, because one of its three entries is not a partition. [step 1.1, step 1.2, step 2.1, F1] ∎

## Remarks

- The failed threshold $|\alpha|$ is exactly weaker than the true one $|\alpha|+\alpha_1$; the extra term $\alpha_1$ is what keeps the padded partition weakly decreasing, since the new first part $n-|\alpha|$ must be at least the old first part $\alpha_1$.

- The example also shows why the padded Kronecker sequence of [[def-padded-kronecker-coefficient-sequence]] starts only at the maximum of the three thresholds: a single unpadded entry makes the whole expression undefined.
