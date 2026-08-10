---
id: def-inversions-inversion-number-and-sign
kind: definition
title: 'Inversions, inversion number, the sign $\operatorname{sgn}(\sigma)=(-1)^{\operatorname{inv}(\sigma)}$, and even and odd permutations'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-symmetric-group, def-finite-cardinality, def-group-power, thm-int-comm-ring]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'Stanford Math 51H, Permutations'
      url: 'https://math.stanford.edu/~lms/jpg/perms.pdf'
pipeline_run: null
---

## Definition

Let $n\in\mathbb N$ and $\sigma\in S_n=\operatorname{Sym}(n)$. An
**inversion** of $\sigma$ is a pair $(i,j)$ with $i<j<n$ and
$\sigma(i)>\sigma(j)$. The **inversion set** and **inversion number** are

$$\operatorname{Inv}(\sigma):=\{(i,j)\in n\times n:i<j\text{ and }\sigma(i)>\sigma(j)\},\qquad \operatorname{inv}(\sigma):=|\operatorname{Inv}(\sigma)|.$$

The **sign** of $\sigma$ is the integer

$$\operatorname{sgn}(\sigma):=(-1)^{\operatorname{inv}(\sigma)}\in\{+1,-1\}.$$

The permutation is **even** when its sign is $+1$, equivalently when its
inversion number is even, and **odd** when its sign is $-1$, equivalently when
its inversion number is odd. For $n=0$ or $n=1$, every inversion set is empty,
so the unique permutation is even.
