---
id: ex-symmetric-group-splits-over-the-alternating-group
kind: example
title: ' For $n\ge2$, $S_n\cong A_n\rtimes C_2$ using any transposition complement'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-internal-external-semidirect-product-equivalence, thm-sign-is-a-homomorphism, def-alternating-group, thm-image-subgroup-and-kernel-normal, def-symmetric-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Example

For every $n\ge2$ and every transposition $\tau\in S_n$,

$$S_n\cong A_n\rtimes\langle\tau\rangle\cong A_n\rtimes C_2.$$

## Facts & Assumptions

**Given:** An integer $n\ge2$ and a transposition $\tau\in S_n$.

[L1] The sign map $\operatorname{sgn}:S_n\to\{1,-1\}$ is a surjective homomorphism for $n\ge2$ ([[thm-sign-is-a-homomorphism]]).

[L2] The alternating group $A_n$ is the kernel of the sign homomorphism ([[def-alternating-group]]).

[L3] The kernel of a group homomorphism is normal ([[thm-image-subgroup-and-kernel-normal]]).

[L4] A normal factor and a complement with trivial intersection give an external semidirect product by conjugation ([[thm-internal-external-semidirect-product-equivalence]]).

[L5] $S_n$ consists of the permutations of an $n$-element set ([[def-symmetric-group]]).

## Verification

**Proof technique:** direct.

1.1 By [L1]--[L3], $A_n$ is normal. The transposition $\tau$ has sign $-1$, so $\langle\tau\rangle=\{1,\tau\}$ intersects $A_n$ trivially. [L1, L2, L3, L5]

1.2 If $\sigma\in S_n$ is even, then $\sigma\in A_n$. If it is odd, then $\sigma\tau$ is even and $\sigma=(\sigma\tau)\tau$. Hence $S_n=A_n\langle\tau\rangle$. [L1, algebra]

2.1 The recognition theorem [L4] gives the asserted decomposition, with the action on $A_n$ given by conjugation by $\tau$. [step 1.1, step 1.2, L4] ∎
