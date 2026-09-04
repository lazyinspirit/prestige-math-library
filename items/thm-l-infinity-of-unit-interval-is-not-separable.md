---
id: thm-l-infinity-of-unit-interval-is-not-separable
kind: theorem
title: "$L^\\infty[0,1]$ is not separable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separable-space, def-countable, def-l-infinity-on-a-measure-space, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]
landmark: true
proof_strategy: "Use the uncountable family $\\{\\mathbf{1}_{[0,t]} : t \\in [0,1]\\}$, whose pairwise $L^\\infty$ distances are exactly $1$. Any dense set would have to hit the disjoint radius-$1/2$ balls around all of them."
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Statement

The space $L^\infty([0,1])$ is not separable.

## Facts & Assumptions

**Given:** The essential-supremum norm on $L^\infty([0,1])$.

[L1] Separability means having a countable dense subset
([[def-separable-space]], [[def-countable]]).

[L2] $L^\infty$ is normed by the essential supremum
([[def-l-infinity-on-a-measure-space]],
[[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]).

## Proof

**Proof technique:** direct.

1.1 For each $t \in [0,1]$, let $u_t := \mathbf{1}_{[0,t]}$. If $s < t$, then [L2, given, algebra]
$u_s$ and $u_t$ differ by $1$ on $(s,t]$, a set of positive measure, so
$$ \|u_t-u_s\|_\infty = 1 $$
by [L2]. Thus the family $\{u_t : t \in [0,1]\}$ is uncountable and
$1$-separated. [L2, given, algebra]

2.1 Suppose $D$ were a countable dense subset. For each $t \in [0,1]$, choose [L1, step 1.1, choose, algebra]
$d_t \in D$ with $\|d_t-u_t\|_\infty < 1/3$. If $s \neq t$, then the balls
$B_\infty(u_s,1/3)$ and $B_\infty(u_t,1/3)$ are disjoint because the centers are
distance $1$ apart, so $d_s \neq d_t$. This gives an injection
$[0,1] \hookrightarrow D$, contradicting countability. [L1, step 1.1, choose, algebra]

3.1 Therefore no countable subset is dense in $L^\infty([0,1])$, so [step 2.1]
$L^\infty([0,1])$ is not separable. [step 2.1] ∎
