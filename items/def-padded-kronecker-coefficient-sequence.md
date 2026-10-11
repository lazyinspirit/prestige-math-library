---
id: def-padded-kronecker-coefficient-sequence
kind: definition
title: Padded Kronecker coefficient sequences
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-partition-young-diagram-and-conjugate-partition,
       def-first-row-padding-of-a-partition,
       def-kronecker-coefficient-and-internal-tensor-product]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Emmanuel Briand, Rosa Orellana and Mercedes Rosas, The stability of the Kronecker product of Schur functions, arXiv:0907.4652v2 (2009)"
      url: "https://arxiv.org/pdf/0907.4652"
      locator: "Introduction, printed p. 2: padded triples and eventual coefficient sequences; §1, printed p. 3: lambda[n] is a partition only if n - |lambda| >= lambda_1."
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, FI-modules and stability for representations of symmetric groups, arXiv:1204.4533v4 (2014)"
      url: "https://arxiv.org/pdf/1204.4533"
      locator: "§2.2, Definition 2.2.5, printed p. 13: first-row padding and the exact range n >= |lambda| + lambda_1 for V(lambda)_n."
---

## Definition

Let $\alpha,\beta,\gamma$ be partitions
([[def-partition-young-diagram-and-conjugate-partition]]) and put
$$n_0:=\max\bigl\{|\alpha|+\alpha_1,\ |\beta|+\beta_1,\ |\gamma|+\gamma_1\bigr\},$$
where the first part of the empty partition is read as $0$. For every integer
$n\ge n_0$ the three first-row paddings $\alpha[n]$, $\beta[n]$, $\gamma[n]$ are
partitions of $n$, by
[[def-first-row-padding-of-a-partition]] and the choice of $n_0$ as the maximum
of the three thresholds. On that range define the **size-indexed padded
Kronecker coefficients** by
$$g_n(\alpha,\beta,\gamma):=g\bigl(\alpha[n],\ \beta[n],\ \gamma[n]\bigr),$$
the Kronecker coefficient of three partitions of $n$
([[def-kronecker-coefficient-and-internal-tensor-product]]).

**Domain.** The threshold $n_0$ is exactly where the common domain of the three
padded families starts: for $n\ge n_0$ all three padded sequences are
partitions of $n$, while for $n<n_0$ at least one of the three padded
sequences is not a partition of $n$ and the expression is left undefined. The **padded Kronecker coefficient sequence**, indexed from $0$ on
$\mathbb N$, is
$$k\longmapsto g_{n_0+k}(\alpha,\beta,\gamma)\qquad(k\in\mathbb N).$$
Every term is defined since $n_0+k\ge n_0$. The notation $g_n$ retains
$n$ as the common size of the padded partitions: it is defined only for
$n\ge n_0$, and no values at smaller sizes are introduced by reindexing.

**No constancy is asserted.** This definition introduces notation only. It
asserts neither that $g_n(\alpha,\beta,\gamma)$ is eventually constant, nor any
bound on it, nor any comparison between different values of $n$; Murnaghan
stability is a theorem about this sequence proved elsewhere, and this
definition is available as its noncircular input.
