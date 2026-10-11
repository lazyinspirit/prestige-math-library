---
id: def-first-row-padding-of-a-partition
kind: definition
title: First-row padding of a partition
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-partition-young-diagram-and-conjugate-partition]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, FI-modules and stability for representations of symmetric groups, arXiv:1204.4533v4 (2014), published in Duke Math. J. 164 (2015)"
      url: "https://arxiv.org/pdf/1204.4533"
      locator: "§2.2, Definition 2.2.5, printed p. 13: first-row padding and the exact range n >= |lambda| + lambda_1 for V(lambda)_n."
    - title: "Emmanuel Briand, Rosa Orellana and Mercedes Rosas, The stability of the Kronecker product of Schur functions, arXiv:0907.4652v2 (2009)"
      url: "https://arxiv.org/pdf/0907.4652"
      locator: "Introduction, printed p. 2: padded triples and eventual coefficient sequences; §1, printed p. 3: lambda[n] is a partition only if n - |lambda| >= lambda_1."
---

## Definition

Let $\alpha=(\alpha_1,\dots,\alpha_k)$ be a partition with $|\alpha|=\alpha_1+\cdots+\alpha_k$
([[def-partition-young-diagram-and-conjugate-partition]]), and let $n\ge0$ be
an integer. Read $|\varnothing|=0$ and $\alpha_1=0$ when
$\alpha=\varnothing$. Whenever

$$n\;\ge\;|\alpha|+\alpha_1,$$

define the **first-row padding** of $\alpha$ to size $n$ to be
$$\alpha[n]:=\bigl(n-|\alpha|,\ \alpha_1,\ \alpha_2,\ \dots,\ \alpha_k\bigr).$$

The threshold is exact.

**Above the threshold.** Suppose $n\ge|\alpha|+\alpha_1$. Then
$n-|\alpha|\ge\alpha_1\ge0$, so every entry of the displayed sequence is a
nonnegative integer, the entries sum to $(n-|\alpha|)+|\alpha|=n$, and the
sequence is weakly decreasing because $n-|\alpha|\ge\alpha_1$ and $\alpha$ is
weakly decreasing ([[def-partition-young-diagram-and-conjugate-partition]]).
If $\alpha$ is nonempty then $\alpha_1\ge1$, hence $n-|\alpha|\ge1$ and the
displayed sequence is a partition of $n$ with positive parts. If
$\alpha=\varnothing$ then the displayed sequence is $(n)$; this is a partition
of $n$ for every $n\ge1$, while for $n=0$ one takes $\varnothing[0]:=\varnothing$,
the unique partition of $0$. Thus the padding is defined and is a partition of
$n$ on the whole displayed range.

**Below the threshold.** If $\alpha$ is nonempty and $n<|\alpha|+\alpha_1$,
then $n-|\alpha|<\alpha_1$; if also $n\ge|\alpha|$ the leading entry is
nonnegative but smaller than the second entry $\alpha_1$, and if $n<|\alpha|$
it is negative. In both cases the displayed sequence is not a partition, so
$\alpha[n]$ is left undefined. The threshold $|\alpha|+\alpha_1$ is therefore
the exact size at which the padded family begins: for nonempty $\alpha$, at
$n=|\alpha|+\alpha_1$ the padding equals $(\alpha_1,\alpha_1,\alpha_2,\dots)$,
which is a partition with a repeated first part when $\alpha$ is nonempty.

**Neutrality of the notation.** This definition records a family of partitions;
it asserts no constancy of any quantity along the family and no stability
property. The same notation is used by the FI-module and
representation-stability developments; no FI-module structure or generation
degree is asserted here.
