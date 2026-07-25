---
id: lem-reflection
kind: lemma
title: "Reflection through zero exchanges upper and lower bounds"
status: published
origin: session
deps: [def-bounded-set, def-complete-ordered-field, def-ordered-field, def-field, lem-of-inverse-unique]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

For $S \subseteq \mathbb{R}$ write $-S := \{-s : s \in S\}$. Then $-(-S) = S$,
and $S$ is nonempty if and only if $-S$ is nonempty. Moreover, for all
$u, \ell \in \mathbb{R}$:

1. $u$ is an upper bound of $S$ if and only if $-u$ is a lower bound of $-S$;
2. $\ell$ is a lower bound of $S$ if and only if $-\ell$ is an upper bound of $-S$.

Consequently $S$ is bounded above if and only if $-S$ is bounded below, $S$ is
bounded below if and only if $-S$ is bounded above, and $S$ is bounded if and
only if $-S$ is bounded ([[def-bounded-set]]).

## Facts & Assumptions

**Given:** A subset $S \subseteq \mathbb{R}$, its reflection $-S = \{-s : s \in S\}$, and elements $u, \ell \in \mathbb{R}$.

[L1] $\mathbb{R}$ is a complete ordered field, in particular an ordered field ([[def-complete-ordered-field]]), and in an ordered field the order is *defined* by the positive cone $P$: $x < y$ means exactly $y - x \in P$, and $x \le y$ means $x < y$ or $x = y$ ([[def-ordered-field]]).

[L2] Upper bound, lower bound, bounded above, bounded below and bounded have their meanings from [[def-bounded-set]]: $u$ bounds $S$ above when $s \le u$ for all $s \in S$, and $\ell$ bounds $S$ below when $\ell \le s$ for all $s \in S$.

[L3] Field arithmetic. Additive inverses are unique ([[lem-of-inverse-unique]]), and $(-x) + x = 0$ by the inverse axiom, so $x$ is the additive inverse of $-x$, that is $-(-x) = x$. Addition is commutative and $y - x$ abbreviates $y + (-x)$ ([[def-field]]), so $y - x = y + (-x) = (-x) + y = (-x) + (-(-y)) = (-x) - (-y)$ for all $x, y$.

## Proof

**Proof technique:** direct.

1.1 For all $x, y \in \mathbb{R}$ the field identity $y - x = (-x) - (-y)$ holds, and $-(-x) = x$. [L3, algebra]

1.2 The map $s \mapsto -s$ sends $S$ onto $-S$ and $-S$ onto $-(-S)$, and since $-(-s) = s$ it is a bijection of $S$ with $-S$ whose inverse is itself; hence $-(-S) = S$, and $S$ is nonempty exactly when $-S$ is nonempty. [L3, algebra]

2.1 For all $x, y \in \mathbb{R}$: $x < y$ holds exactly when $y - x$ is positive, which by 1.1 is exactly when $(-x) - (-y)$ is positive, which is exactly $-y < -x$; and $x = y$ holds exactly when $-x = -y$; hence $x \le y$ if and only if $-y \le -x$. [step 1.1, L1]

3.1 Suppose $u$ is an upper bound of $S$. Every element of $-S$ has the form $-s$ with $s \in S$, and $s \le u$ gives $-u \le -s$; hence $-u$ is a lower bound of $-S$. [assume-hyp, step 2.1, L2]

3.2 Conversely, suppose $-u$ is a lower bound of $-S$. For $s \in S$ we have $-s \in -S$, so $-u \le -s$, and applying 2.1 to this inequality gives $s \le u$; hence $u$ is an upper bound of $S$. This together with 3.1 proves claim 1. [assume-hyp, step 2.1, L2]

3.3 Suppose $\ell$ is a lower bound of $S$. For $s \in S$ we have $\ell \le s$, hence $-s \le -\ell$, and every element of $-S$ is such a $-s$; hence $-\ell$ is an upper bound of $-S$. [assume-hyp, step 2.1, L2]

3.4 Conversely, suppose $-\ell$ is an upper bound of $-S$. For $s \in S$ we have $-s \in -S$, so $-s \le -\ell$, and applying 2.1 gives $\ell \le s$; hence $\ell$ is a lower bound of $S$. This together with 3.3 proves claim 2. [assume-hyp, step 2.1, L2]

4.1 Claim 1 says the upper bounds of $S$ are exactly the negatives of the lower bounds of $-S$, so $S$ is bounded above exactly when $-S$ is bounded below; claim 2 says likewise that $S$ is bounded below exactly when $-S$ is bounded above; combining the two, $S$ is bounded exactly when $-S$ is bounded, and $-(-S) = S$ with $S$ nonempty exactly when $-S$ is nonempty. [step 3.1, step 3.2, step 3.3, step 3.4, step 1.2, L2] ∎
