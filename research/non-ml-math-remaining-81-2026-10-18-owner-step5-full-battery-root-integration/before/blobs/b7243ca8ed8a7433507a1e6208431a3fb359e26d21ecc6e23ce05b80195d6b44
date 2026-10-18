---
id: ex-partition-diagram-kernel-below-stable-range
kind: example
title: A partition orbit-basis element vanishes below the stable range
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-brauer-and-partition-diagram-categories
  - thm-partition-diagram-orbit-basis-centralizer
proof_strategy: direct
generation:
  role: example
axiom_use: "No choice principle is used; the partition poset is finite."
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "Halverson and Ram, Partition Algebras, Theorem 3.6(a)"
      url: https://arxiv.org/pdf/math/0401314
      locator: "PDF pp. 19–20: orbit-basis images and the kernel when a partition has more than $N$ blocks."
---

## Example

Take $N=1$ and $r=1$, so $N<2r$. In the partition algebra $P_1(1)$ let $d$ be the discrete partition $\{\{1\},\{1'\}\}$ and let $c=\{\{1,1'\}\}$ be the one-block partition. The orbit-basis element $x_d=d-c$ is nonzero in the free diagram module but acts as zero on $W=\mathbb Q^1$.

## Facts & Assumptions

**Given:** The two partition diagrams and the permutation action on $W^{\otimes1}$.

[F1] [[def-brauer-and-partition-diagram-categories]]: distinct set partitions are a free basis, and composition weights a removed middle block by the parameter.

[F2] [[thm-partition-diagram-orbit-basis-centralizer]]: the orbit-basis element for a pattern with more than $N$ blocks maps to zero.

## Verification

1.1 The discrete partition has two blocks, while the one-block partition coarsens it. Möbius inversion on this two-element interval gives $x_d=d-c$; by [F1] it is nonzero because $d$ and $c$ are distinct basis vectors. [F1, algebra]

2.1 The one-dimensional tensor basis has only the index $1$, so its equality pattern is $c$ and it cannot realize the two-block pattern $d$. Equivalently, both $d$ and $c$ act by the $1\times1$ matrix $(1)$, so $x_d$ acts by zero. Since $2>N=1$, this is the below-stable-range kernel predicted by [F2]. [F2, step 1.1, algebra] ∎
