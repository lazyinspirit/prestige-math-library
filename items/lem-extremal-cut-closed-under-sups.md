---
id: lem-extremal-cut-closed-under-sups
kind: lemma
title: "The cut at an extremal element is closed under chain suprema"
status: draft
origin: session
deps: [def-bw-extremal, lem-admissible-set-exists, def-chain-complete-poset, def-upper-bound, def-partial-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
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

Let $(P, \le)$ be a chain-complete poset, $f : P \to P$ progressive, $M$ the
smallest admissible set, and $x \in M$ extremal ([[def-bw-extremal]]). Then
$\sup C \in M_x$ for every chain $C \subseteq M_x$.

## Facts & Assumptions

**Given:** A chain-complete poset $(P, \le)$, a progressive $f : P \to P$, the smallest admissible set $M$, an extremal $x \in M$, and a chain $C \subseteq M_x$.

[A1] $M_x = \{z \in M : z \le x \text{ or } f(x) \le z\}$ ([[def-bw-extremal]]).

[L1] $M$ is admissible, so it is closed under $f$ and under suprema of its chains ([[lem-admissible-set-exists]]).

[L2] Every chain of $P$ has a least upper bound in $P$ ([[def-chain-complete-poset]]).

[L3] A least upper bound is below every upper bound of the same set ([[def-upper-bound]]).

[L4] $\le$ is a partial order, in particular transitive: $u \le v$ and $v \le w$ imply $u \le w$ ([[def-partial-order]]).

## Proof

**Proof technique:** cases.

1.1 Write $s = \sup C$, which exists in $P$ because $C$ is a chain. [L2, construct]

1.2 Since $C \subseteq M_x \subseteq M$ and $M$ is closed under suprema of its chains, $s \in M$. [A1, L1]

1.3 Suppose every $z \in C$ satisfies $z \le x$. [assume-case under]

1.4 Suppose some $z_0 \in C$ satisfies $z_0 \not\le x$. [assume-case over]

2.1 In the first case $x$ is an upper bound of $C$, so $s \le x$ because $s$ is the least upper bound, hence $s \in M_x$. [step 1.3, step 1.1, L3, step 1.2, A1]

2.2 In the second case $z_0 \in M_x$ together with $z_0 \not\le x$ forces $f(x) \le z_0$, and $z_0 \le s$ since $s$ is an upper bound of $C$, so $f(x) \le s$ by transitivity, hence $s \in M_x$. [step 1.4, A1, step 1.1, step 1.2, L4]

3.1 Either every element of $C$ is below $x$ or some element is not, so the two cases are exhaustive and $\sup C \in M_x$ in both. [step 2.1, step 2.2, cases-exhaustive] ∎

## Remarks

- The empty chain is covered without a separate argument: it falls into the first
  case vacuously, and $\sup \emptyset = \bot \le x$.
- Note which property of the supremum each case uses. The first case uses
  **leastness**, that $s$ is below any upper bound; the second uses only that $s$
  is an **upper bound**. Both halves of the definition of least upper bound are
  needed, which is why chain-completeness cannot be weakened here to the mere
  existence of some upper bound.
- Together with [[lem-extremal-cut-closed-under-f]] this makes $M_x$ admissible,
  which is what [[lem-extremal-comparability]] feeds to minimality.
