---
id: lem-admissible-is-chain
kind: lemma
title: "The smallest admissible set is a chain"
status: draft
origin: session
deps: [lem-all-extremal, lem-extremal-comparability, def-chain, def-chain-complete-poset, def-partial-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Bourbaki–Witt theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bourbaki%E2%80%93Witt_theorem"
pipeline_run: null
---

## Statement

Let $(P, \le)$ be a chain-complete poset, $f : P \to P$ progressive, and $M$ the
smallest admissible set. Then $M$ is a chain ([[def-chain]]): any two elements of
$M$ are comparable.

## Facts & Assumptions

**Given:** A chain-complete poset $(P, \le)$, a progressive $f : P \to P$, the smallest admissible set $M$, and two elements $x, y \in M$.

[L1] Every element of $M$ is extremal ([[lem-all-extremal]]).

[L2] If $x \in M$ is extremal then every $y \in M$ satisfies $y \le x$ or $f(x) \le y$ ([[lem-extremal-comparability]]).

[L3] $f$ is progressive: $z \le f(z)$ for every $z \in P$ ([[def-chain-complete-poset]]).

[L4] A subset is a chain when any two of its elements are comparable ([[def-chain]]).

[L5] $\le$ is a partial order, in particular transitive: $u \le v$ and $v \le w$ imply $u \le w$ ([[def-partial-order]]).

## Proof

**Proof technique:** direct.

1.1 The element $x$ is extremal, because every element of $M$ is. [L1]

2.1 Applying comparability at $x$ to the element $y$, either $y \le x$ or $f(x) \le y$. [step 1.1, L2]

3.1 In the second case progressivity gives $x \le f(x)$, so $x \le y$ by transitivity. [step 2.1, L3, L5]

4.1 So in either case $x$ and $y$ are comparable, and since $x$ and $y$ were arbitrary, $M$ is a chain. [step 2.1, step 3.1, L4] ∎

## Remarks

- This is where the two halves of the argument meet. Comparability
  ([[lem-extremal-comparability]]) was conditional on extremality, and
  [[lem-all-extremal]] removes the condition; neither alone gives a chain.
- $M$ being a chain is exactly what makes $\sup M$ available in
  [[thm-bourbaki-witt]]. Chain-completeness supplies suprema for chains only, so
  without this lemma there would be no reason for $\sup M$ to exist at all.
- Note that $M$ is a chain but $P$ need not be. The construction carves a totally
  ordered piece out of an arbitrary chain-complete poset, and the fixed point is
  found at the top of that piece.
