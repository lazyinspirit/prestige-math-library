---
id: thm-a-morphism-factors-uniquely-through-its-image
kind: theorem
title: "A morphism factors uniquely through its image"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-image-and-coimage-in-a-category-with-kernels-and-cokernels]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gautam Tamme, Algebra II Lecture 9, §9.1"
      url: "https://people.math.osu.edu/gautam.42/S21/AII/Notes/Lecture09.pdf"
pipeline_run: frontier-21
---

## Statement

Let $f:A\to B$ be a morphism in a category with kernels and cokernels. If
$c:B\to C$ is a cokernel of $f$ and $i:\operatorname{im}(f)\to B$ is a kernel
of $c$, then there exists a unique morphism
$\widehat f:A\to\operatorname{im}(f)$ with

$$i\circ\widehat f=f.$$

## Facts & Assumptions

**Given:** A morphism $f:A\to B$, a cokernel $c:B\to C$ of $f$, and a kernel
$i:\operatorname{im}(f)\to B$ of $c$.

[L1] The image of $f$ is the kernel of a cokernel of $f$
([[def-image-and-coimage-in-a-category-with-kernels-and-cokernels]]).

## Proof

**Proof technique:** direct.

1.1 Because $c$ is a cokernel of $f$, one has $c\circ f=0$. [L1, given]

2.1 The morphism $i$ is a kernel of $c$, so step 1.1 gives a unique $\widehat f:A\to\operatorname{im}(f)$ with $i\widehat f=f$. That is the claimed factorization through the image. [L1, step 1.1] ∎
