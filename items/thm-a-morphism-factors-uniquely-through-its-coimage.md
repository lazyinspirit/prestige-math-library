---
id: thm-a-morphism-factors-uniquely-through-its-coimage
kind: theorem
title: "A morphism factors uniquely through its coimage"
status: draft
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
$k:K\to A$ is a kernel of $f$ and $q:A\to\operatorname{coim}(f)$ is a cokernel
of $k$, then there exists a unique morphism
$\widetilde f:\operatorname{coim}(f)\to B$ with

$$\widetilde f\circ q=f.$$

## Facts & Assumptions

**Given:** A morphism $f:A\to B$, a kernel $k:K\to A$ of $f$, and a cokernel
$q:A\to\operatorname{coim}(f)$ of $k$.

[L1] The coimage of $f$ is the cokernel of a kernel of $f$
([[def-image-and-coimage-in-a-category-with-kernels-and-cokernels]]).

## Proof

**Proof technique:** direct.

1.1 Because $k$ is a kernel of $f$, one has $f\circ k=0$. [L1, given]

2.1 The morphism $q$ is a cokernel of $k$, so step 1.1 gives a unique $\widetilde f:\operatorname{coim}(f)\to B$ with $\widetilde f q=f$. That is exactly the claimed factorization through the coimage. [L1, step 1.1] ∎
