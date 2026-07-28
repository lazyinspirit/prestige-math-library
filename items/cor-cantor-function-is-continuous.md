---
id: cor-cantor-function-is-continuous
kind: corollary
title: "The Cantor function is continuous on $[0,1]$"
status: draft
origin: session
deps: [def-cantor-function, thm-cantor-function-properties, lem-monotone-with-interval-image-is-continuous, def-monotone-function, def-continuity-real, def-interval, def-cantor-set]
justified_by: []
aliases: []
landmark: true
short: "the Cantor function is continuous"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Cantor function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_function"
pipeline_run: null
---

## Statement

The Cantor function $c : [0,1] \to \mathbb{R}$ ([[def-cantor-function]]) is
continuous on $[0,1]$ ([[def-continuity-real]]). It is moreover nondecreasing
([[def-monotone-function]]), with $c(0) = 0$ and $c(1) = 1$.

**No intermediate value theorem is used.** The Cantor function is surjective
onto $[0,1]$ by construction ([[thm-cantor-function-properties]], claim 3), so
its image is order-convex without any appeal to continuity, and continuity is
then read off the monotone-with-interval-image criterion
([[lem-monotone-with-interval-image-is-continuous]]). The implication runs in
the direction opposite to the usual one: here surjectivity is known first and
continuity is deduced.

## Facts & Assumptions

**Given:** The Cantor set $C$ and the Cantor function $c : [0,1] \to \mathbb{R}$ ([[def-cantor-set]], [[def-cantor-function]]).

[L1] $c(x) \le c(y)$ whenever $0 \le x \le y \le 1$ ([[thm-cantor-function-properties]], claim 2).

[L2] $c$ is surjective onto $[0,1]$, and $c(0) = 0$, $c(1) = 1$ ([[thm-cantor-function-properties]], claim 3).

[L3] If $J \subseteq \mathbb{R}$ is order-convex, $h : J \to \mathbb{R}$ satisfies $h(u) \le h(v)$ whenever $u, v \in J$ and $u \le v$, and $h[J]$ is order-convex, then $h$ is continuous on $J$ ([[lem-monotone-with-interval-image-is-continuous]]).

[L4] Every interval of the nine written forms, and in particular $[0,1]$, is order-convex ([[def-interval]]).

[L5] A function $h : A \to \mathbb{R}$ with $h(x) \le h(y)$ whenever $x \le y$ in $A$ is nondecreasing ([[def-monotone-function]]).

## Proof

**Proof technique:** direct.

1.1 The domain $[0,1]$ is order-convex. [L4]

1.2 $c$ satisfies $c(x) \le c(y)$ whenever $x, y \in [0,1]$ and $x \le y$. [L1]

1.3 The image $c[\,[0,1]\,]$ is exactly $[0,1]$, since $c$ is surjective onto $[0,1]$, and $[0,1]$ is order-convex. [L2, L4]

2.1 The three hypotheses of the monotone-with-interval-image criterion hold for $c$ on $[0,1]$, so $c$ is continuous on $[0,1]$. [step 1.1, step 1.2, step 1.3, L3]

3.1 $c$ is nondecreasing, which is what the inequality of step 1.2 says, and $c(0) = 0$ and $c(1) = 1$. [step 1.2, L2, L5] ∎

## Remarks

- **[[thm-cantor-function-properties]] deliberately claims nothing about
  continuity, and says so**, for want of a definition of continuity at that
  point in the reading order. The present corollary supplies it, using nothing
  about $c$ beyond claims 2 and 3 of that theorem.

- **The Cantor function is not strictly monotone.** It is constant on every
  interval removed in the construction of the Cantor set
  ([[thm-cantor-function-properties]], claim 4), so it is nondecreasing but not
  increasing, and in particular it is not injective. The continuous inverse
  theorem ([[thm-continuous-inverse]]) therefore does not apply to it, and
  nothing here suggests otherwise.
