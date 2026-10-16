---
id: def-complex-normed-subspace
kind: definition
title: "A complex normed subspace"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complex-norm-and-complex-normed-space, def-linear-subspace]
sources:
  references:
    - title: "Tomasz Kochanek, Functional analysis, Lecture 1, Definition 1.1 and Example 1.2"
      url: "https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf"
---

## Definition

Let $(V,N)$ be a complex normed space ([[def-complex-norm-and-complex-normed-space]]) and $W\subseteq V$ a complex-linear subspace ([[def-linear-subspace]] instantiated over $\mathbb C$). The **complex normed subspace** $W$ carries the restricted norm $N_W(w)=N(w)$ for $w\in W$.

This is a complex norm: separation and the triangle inequality restrict directly, and $W$ is closed under multiplication by every complex scalar, so $N_W(\lambda w)=|\lambda|N_W(w)$. Its norm metric is exactly the restriction of $d_N$ to $W\times W$.
