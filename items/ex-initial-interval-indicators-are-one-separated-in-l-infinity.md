---
id: ex-initial-interval-indicators-are-one-separated-in-l-infinity
kind: example
title: "The family $\\{\\mathbf{1}_{[0,t]} : t \\in [0,1]\\}$ is $1$-separated in $L^\\infty[0,1]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-l-infinity-of-unit-interval-is-not-separable]
landmark: false
proof_strategy: "For $s \\neq t$, the two indicators disagree on an interval of positive measure, so their essential-supremum distance is exactly $1$. This is the explicit computation behind the nonseparability theorem."
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Example

The family
$$ \left\{\mathbf{1}_{[0,t]} : t \in [0,1]\right\} $$
is $1$-separated in $L^\infty([0,1])$.

## Facts & Assumptions

**Given:** Two parameters $s,t \in [0,1]$ with $s \neq t$.

[L1] $L^\infty([0,1])$ is not separable, and the proof runs through this
explicit family ([[thm-l-infinity-of-unit-interval-is-not-separable]]).

## Verification

**Proof technique:** direct.

1.1 Assume $s < t$. Then [L1, given, algebra]
$\mathbf{1}_{[0,t]}-\mathbf{1}_{[0,s]}$ equals $1$ on $(s,t]$, a set of positive
measure. [L1, given, algebra]

2.1 Hence [step 1.1, algebra]
$$ \|\mathbf{1}_{[0,t]}-\mathbf{1}_{[0,s]}\|_\infty = 1. $$
The same conclusion holds when $t < s$ by symmetry. [step 1.1, algebra]

3.1 So any two distinct members of the family are distance $1$ apart, which is [L1, step 2.1]
exactly the one-separated property used in [L1]. [L1, step 2.1] ∎