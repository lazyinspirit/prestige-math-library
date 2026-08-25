---
id: ex-an-oddtown-family-on-four-points
kind: example
title: "An Oddtown family of four clubs on four citizens, and why a fifth cannot be added"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [thm-oddtown, cor-the-oddtown-bound-is-attained, def-set-family-and-its-incidence-matrix, lem-the-standard-form-of-two-incidence-vectors-is-the-intersection-size]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §1.1"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Example

Take the four singletons on $[4]$:

$$\{0\},\ \{1\},\ \{2\},\ \{3\}.$$

Their incidence matrix over $\mathbb{F}_2$ is the identity matrix

$$N=\begin{pmatrix} 1&0&0&0\\ 0&1&0&0\\ 0&0&1&0\\ 0&0&0&1 \end{pmatrix},$$

so $NN^{\mathsf T}=I_4$.

## Facts & Assumptions

**Given:** the four singleton sets above.

[L1] Oddtown families have at most $n$ members ([[thm-oddtown]]).

[L2] The singleton family attains that bound ([[cor-the-oddtown-bound-is-attained]]).

## Verification

**Proof technique:** direct.

1.1 Each singleton has odd size $1$, and any two distinct singletons meet in the empty set of even size $0$, so the family satisfies Oddtown. [given]

2.1 The displayed incidence matrix has pairwise orthogonal rows and $NN^{\mathsf T}=I_4$, exactly as the Oddtown proof predicts. [step 1.1]

3.1 A fifth set cannot be adjoined: by [L1] an Oddtown family on four points has at most four members, and [L2] says the bound is attained already. [L1, L2, step 1.1] ∎
