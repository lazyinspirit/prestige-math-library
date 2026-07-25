---
id: lem-extremal-cut-closed-under-f
kind: lemma
title: "The cut at an extremal element is closed under $f$"
status: draft
origin: session
deps: [def-bw-extremal, lem-admissible-set-exists, def-chain-complete-poset, def-partial-order]
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
smallest admissible set, and $x \in M$ extremal ([[def-bw-extremal]]). Then the
cut $M_x$ satisfies $f(y) \in M_x$ for every $y \in M_x$.

## Facts & Assumptions

**Given:** A chain-complete poset $(P, \le)$, a progressive $f : P \to P$, the smallest admissible set $M$, an extremal $x \in M$, and an element $y \in M_x$.

[A1] $x$ is extremal: for every $z \in M$ with $z < x$, $f(z) \le x$ ([[def-bw-extremal]]).

[A2] $M_x = \{z \in M : z \le x \text{ or } f(x) \le z\}$ ([[def-bw-extremal]]).

[L1] $M$ is admissible, so it is closed under $f$ and under suprema of its chains ([[lem-admissible-set-exists]]).

[L2] $f$ is progressive: $z \le f(z)$ for every $z \in P$ ([[def-chain-complete-poset]]).

[L3] $\le$ is a partial order: it is reflexive ($u \le u$) and transitive ($u \le v$ and $v \le w$ imply $u \le w$), and its strict form $u < v$ means $u \le v$ together with $u \ne v$ ([[def-partial-order]]).

## Proof

**Proof technique:** cases.

1.1 Since $y \in M_x$ we have $y \in M$, and $M$ is closed under $f$, so $f(y) \in M$. [A2, L1]

1.2 Membership of $M_x$ gives $y \le x$ or $f(x) \le y$, and the relation $y \le x$ holds exactly when $y < x$ or $y = x$, by the definition of the strict order. [A2, L3]

1.3 Suppose $y < x$. [assume-case below]

1.4 Suppose $y = x$. [assume-case equal]

1.5 Suppose $f(x) \le y$. [assume-case above]

2.1 In the case $y < x$, extremality of $x$ gives $f(y) \le x$, so $f(y)$ lies in $M$ and satisfies $f(y) \le x$, hence $f(y) \in M_x$. [step 1.3, A1, step 1.1, A2]

2.2 In the case $y = x$, we get $f(y) = f(x)$, and $f(x) \le f(x)$ by reflexivity, so $f(y) \in M$ satisfies the second alternative, hence $f(y) \in M_x$. [step 1.4, step 1.1, A2, L3]

2.3 In the case $f(x) \le y$, progressivity gives $y \le f(y)$, so $f(x) \le f(y)$ by transitivity, hence $f(y) \in M_x$. [step 1.5, L2, step 1.1, A2, L3]

3.1 The three cases cover every $y \in M_x$, and each yields $f(y) \in M_x$. [step 1.2, step 2.1, step 2.2, step 2.3, cases-exhaustive] ∎

## Remarks

- The case $y = x$ is the one that explains the shape of the cut. It is precisely
  why $M_x$ is defined with $f(x) \le z$ rather than $x < z$: the image $f(x)$
  must itself land inside $M_x$, and it does so on the upper side.
- Extremality of $x$ is used only in the first case, and it is exactly what stops
  $f$ from carrying an element from strictly below $x$ into the forbidden zone
  strictly between $x$ and $f(x)$. That zone is what the cut omits, and keeping
  it empty of elements of $M$ is what eventually makes $M$ a chain
  ([[lem-admissible-is-chain]]).
