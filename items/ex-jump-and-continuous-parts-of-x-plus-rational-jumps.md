---
id: ex-jump-and-continuous-parts-of-x-plus-rational-jumps
kind: example
title: "The function x plus summable rational jumps decomposes as its continuous part x and its jump part"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-countable-choice, thm-increasing-functions-split-uniquely-as-jump-plus-continuous, thm-rationals-countable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
---

## Example

Let $(q_n)_{n \ge 1}$ enumerate $\mathbb{Q} \cap (0,1]$ without repetitions,
and define, for $x \in [0,1]$,

$$
F(x) := x + \sum_{q_n \le x} 2^{-n}.
$$

Then the continuous part of $F:[0,1]\to\mathbb R$ is $x$, and the jump part is
$x \mapsto \sum_{q_n \le x}2^{-n}$.

## Facts & Assumptions

**Given:** An enumeration $(q_n)$ without repetitions of
$\mathbb{Q} \cap (0,1]$ and the function $F:[0,1]\to\mathbb R$ above.

[A1] The symbols are those of the statement.

## Verification

**Proof technique:** direct.

1.1 Each summand $x\mapsto \mathbf 1_{\{q_n\le x\}}2^{-n}$ is nondecreasing, and the geometric tail $\sum_{n>N}2^{-n}$ tends to $0$. Consequently $J(x):=\sum_{q_n\le x}2^{-n}$ is well defined and nondecreasing. Since $x\mapsto x$ is continuous and increasing, $F=x+J$ is nondecreasing. [given]

2.1 Fix $N$. Away from the finite set $\{q_1,\ldots,q_N\}$, the first $N$ summands defining $J$ are locally constant, while the remaining summands have total size at most $\sum_{n>N}2^{-n}$. Letting $N\to\infty$ shows that $J$ is continuous at every point outside the enumeration. At $q_m$, take $N\ge m$: the same tail estimate shows that the left limit differs from $J(q_m)$ by exactly $2^{-m}$ and that the right limit equals $J(q_m)$. It also shows that $J(x)\to0=J(0)$ as $x\downarrow0$. Thus $J$ has no endpoint defect at $0$, has an interior left jump of size $2^{-n}$ at each $q_n\in(0,1)$, has the left jump $2^{-n}$ at the unique $q_n=1$, and has no right jumps. [step 1.1]

3.1 The continuous summand $x\mapsto x$ does not change these jump data. Claim 2 of [[thm-increasing-functions-split-uniquely-as-jump-plus-continuous]] therefore computes the jump function of $F$ on $[0,1]$ as precisely $J$. The continuous remainder is $F-J=x$. [step 1.1, step 2.1]

4.1 This is the claimed decomposition. [step 3.1] ∎
