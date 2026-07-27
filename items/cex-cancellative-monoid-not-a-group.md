---
id: cex-cancellative-monoid-not-a-group
kind: counterexample
title: "A commutative monoid in which cancellation holds need not be a group: $(\\mathbb{N}, +)$"
status: published
origin: session
deps: [def-semigroup-and-monoid, def-group, def-invertible-element, def-identity-element, def-binary-operation, def-natural-numbers, def-nat-addition, lem-nat-add-associative, lem-nat-add-commutative, lem-nat-add-identity, lem-nat-add-cancellative]
justified_by: []
aliases: []
landmark: false
short: "$(\\mathbb{N},+)$ cancellative, not a group"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Cancellative semigroup (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cancellative_semigroup"
    - title: "Monoid (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monoid"
pipeline_run: null
---

## Statement refuted

**False claim:** every commutative monoid ([[def-semigroup-and-monoid]]) in which
the cancellation law holds, that is in which $x + z = y + z$ implies $x = y$, is
a group ([[def-group]]).

The natural numbers under addition refute it: $(\mathbb{N}, +, 0)$ is a
commutative monoid, cancellation holds in it, and it is not a group, because $1$
has no additive inverse.

## Facts & Assumptions

**Given:** $\mathbb{N}$ with addition defined by $m + 0 = m$ and $m + \sigma(n) = \sigma(m+n)$ ([[def-nat-addition]]), and $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$, $1 = \sigma(0)$ ([[def-natural-numbers]]).

[L1] Addition is a binary operation $\mathbb{N} \times \mathbb{N} \to \mathbb{N}$ ([[def-nat-addition]], [[def-binary-operation]]).

[L2] Addition is associative ([[lem-nat-add-associative]]) and commutative ([[lem-nat-add-commutative]]).

[L3] $0 + n = n$ for every $n$ ([[lem-nat-add-identity]]), and $n + 0 = n$ by the defining recursion ([[def-nat-addition]]).

[L4] Cancellation: $m + k = n + k$ implies $m = n$ ([[lem-nat-add-cancellative]]).

[L5] A monoid is an associative binary operation with a two-sided identity; a group is a monoid in which every element has a two-sided inverse ([[def-semigroup-and-monoid]], [[def-group]], [[def-invertible-element]], [[def-identity-element]]).

[L6] The refuted claim: every commutative cancellative monoid is a group.

## Counterexample

**Proof technique:** direct.

1.1 Addition is a binary operation on $\mathbb{N}$, associative and commutative. [L1, L2]

1.2 $0$ is a two-sided identity for addition: $n + 0 = n$ by the recursion and $0 + n = n$ by [L3]. Hence $(\mathbb{N},+,0)$ is a commutative monoid. [L3, L5]

1.3 Cancellation holds: $m + k = n + k$ implies $m = n$, and by commutativity $k + m = k + n$ implies $m = n$ as well. [L2, L4]

1.4 For every $k \in \mathbb{N}$, $\sigma(k) \ne 0$: the set $\sigma(k) = k \cup \{k\}$ has $k$ as an element, whereas $0 = \varnothing$ has no elements. [given]

2.1 $1$ has no additive inverse in $\mathbb{N}$: for any $k \in \mathbb{N}$, $1 + k = k + 1 = k + \sigma(0) = \sigma(k + 0) = \sigma(k) \ne 0$, so no $k$ satisfies $1 + k = 0$. [step 1.4, L2, given]

3.1 Hence $(\mathbb{N},+,0)$ is not a group, since a group requires every element to be invertible and $1 \in \mathbb{N}$ is not. [step 2.1, L5]

4.1 By steps 1.2, 1.3 and 3.1 the monoid $(\mathbb{N},+,0)$ is commutative and cancellative but not a group, so the claim of [L6] is false. [step 1.2, step 1.3, step 3.1, L6] ∎

## Remarks

- **This is the sharpest available refutation, not merely a refutation.** The weaker observation that $(\mathbb{N},+)$ is not a group leaves open the possibility that cancellation is what is missing; the point here is that cancellation is present and still does not suffice. In a group cancellation is a theorem ([[lem-group-cancellation]]), so the implication runs one way only.

- **What is missing is exactly invertibility**, and the standard remedy is to adjoin it: the construction of $\mathbb{Z}$ from $\mathbb{N}$ ([[def-integers]]) is precisely the passage from this cancellative monoid to a group containing it, which is why the pairs $(a,b)$ there stand for formal differences.

- The element $1$ is not special: no $n \ne 0$ has an additive inverse in $\mathbb{N}$, by the same computation with $n$ in place of $1$ once $n$ is written as a successor. One witness suffices to refute the claim.
