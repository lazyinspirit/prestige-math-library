---
id: ex-cellular-homology-of-real-projective-space
kind: example
title: Cellular homology of real projective space
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cellular-boundary-is-the-incidence-degree-matrix, thm-cellular-homology-computes-singular-homology]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Example 2.42
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Example

$\mathbb {RP}^m$ has one cell in every dimension $0\leq n\leq m$, with $d_n=0$ for odd $n$ and $d_n=2$ for positive even $n$. Thus $H_0\cong\mathbb Z$, $H_n\cong\mathbb Z/2$ for odd $0<n<m$, and the top group is $\mathbb Z$ if $m$ is odd and $0$ if $m$ is positive even.

## Facts & Assumptions

**Given:** The standard quotient CW structure of $\mathbb {RP}^m$.

## Verification

**Proof technique:** direct.

1.1 The attaching map of the $n$-cell has incidence degree $1+(-1)^n$, so [[thm-cellular-boundary-is-the-incidence-degree-matrix]] gives the stated alternating $0,2$ differentials. [given]

2.1 Taking kernels modulo images gives the listed groups, including $\mathbb {RP}^0$ where only $C_0=\mathbb Z$ occurs; [[thm-cellular-homology-computes-singular-homology]] identifies them with singular homology. [step 1.1] ∎
