---
id: lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two
kind: lemma
title: "The map $x \\mapsto x + c(x)$ is a homeomorphism from $[0,1]$ onto $[0,2]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-cantor-function-is-continuous, thm-cantor-function-properties,
       cor-continuous-image-of-an-interval-is-an-interval,
       thm-compactness-under-continuous-maps, thm-heine-borel-characterisation-r,
       def-open-cover-r]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Example 2.22"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Cantor function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_function"
pipeline_run: null
---

## Statement

Let $c:[0,1]\to\mathbb{R}$ be the Cantor function. Define

$$\psi:[0,1]\to\mathbb{R}, \qquad \psi(x):=x+c(x).$$

Then $\psi$ is a homeomorphism from $[0,1]$ onto $[0,2]$.

## Facts & Assumptions

**Given:** The Cantor function $c:[0,1]\to\mathbb{R}$ and the map $\psi(x)=x+c(x)$.

[L1] The Cantor function is continuous on $[0,1]$, is nondecreasing, and satisfies $c(0)=0$ and $c(1)=1$ ([[cor-cantor-function-is-continuous]]).

[L2] The image of an interval under a continuous real function is order-convex, hence an interval, and the image of a closed bounded interval is a closed bounded interval ([[cor-continuous-image-of-an-interval-is-an-interval]]).

[L3] A continuous bijection from a compact space to a Hausdorff space is a homeomorphism ([[thm-compactness-under-continuous-maps]], claim 3).

[L4] A subset of $\mathbb{R}$ is compact if and only if it is closed and bounded ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

## Proof

**Proof technique:** direct.

1.1 The map $\psi$ is continuous on $[0,1]$, being the sum of the identity map and the continuous function $c$. [L1, algebra]

1.2 If $0 \le x < y \le 1$, then $c(x) \le c(y)$ by [L1], so $\psi(y)-\psi(x)=(y-x)+(c(y)-c(x))>0$. Therefore $\psi$ is strictly increasing and hence injective. [L1, algebra]

2.1 By [L1], $\psi(0)=0$ and $\psi(1)=2$. Also $0 \le x \le 1$ and $0 \le c(x) \le 1$ for every $x \in [0,1]$, so $\psi([0,1]) \subseteq [0,2]$. Since step 1.1 makes $\psi$ continuous, [L2] makes $\psi([0,1])$ an interval, and the same step shows that this interval contains the endpoints $0$ and $2$, so it is exactly $[0,2]$. [step 1.1, L1, L2]

3.1 The interval $[0,1]$ is compact by [L4], and $[0,2]$ is a Hausdorff subspace of $\mathbb{R}$. Steps 1.1, 1.2 and 2.1 therefore make $\psi$ a continuous bijection from a compact space to a Hausdorff space, so [L3] gives that $\psi$ is a homeomorphism. [step 1.1, step 1.2, step 2.1, L3, L4] ∎
