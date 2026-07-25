---
id: lem-successor-of-extremal
kind: lemma
title: "The image of an extremal element is extremal"
status: draft
origin: session
deps: [lem-extremal-comparability, def-bw-extremal, lem-admissible-set-exists, def-chain-complete-poset]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
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
$f(x)$ is extremal.

## Facts & Assumptions

**Given:** A chain-complete poset $(P, \le)$, a progressive $f : P \to P$, the smallest admissible set $M$, an extremal $x \in M$, and an element $y \in M$ with $y < f(x)$.

[A1] $x$ is extremal: for every $z \in M$ with $z < x$, $f(z) \le x$ ([[def-bw-extremal]]).

[L1] For every $z \in M$, either $z \le x$ or $f(x) \le z$ ([[lem-extremal-comparability]]).

[L2] $M$ is closed under $f$ ([[lem-admissible-set-exists]]).

[L3] $f$ is progressive: $z \le f(z)$ for every $z \in P$ ([[def-chain-complete-poset]]).

## Proof

**Proof technique:** cases.

1.1 $f(x) \in M$ because $M$ is closed under $f$, so it makes sense to ask whether $f(x)$ is extremal. [L2]

1.2 It suffices to show $f(y) \le f(x)$ for the given $y \in M$ with $y < f(x)$, since that is exactly the defining condition. [suffices: f(y) le f(x)]

1.3 Comparability at the extremal $x$ gives $y \le x$ or $f(x) \le y$. [L1]

1.4 Suppose $y < x$. [assume-case strict]

1.5 Suppose $y = x$. [assume-case equal]

2.1 The alternative $f(x) \le y$ is impossible: combined with $y < f(x)$ it would give $f(x) < f(x)$. Hence $y \le x$. [step 1.3, step 1.2]

2.2 In the case $y < x$, extremality of $x$ gives $f(y) \le x$, and progressivity gives $x \le f(x)$, so $f(y) \le f(x)$ by transitivity. [step 1.4, A1, L3]

2.3 In the case $y = x$, we get $f(y) = f(x)$, hence $f(y) \le f(x)$ by reflexivity. [step 1.5]

3.1 The relation $y \le x$ holds exactly when $y < x$ or $y = x$, so the two cases are exhaustive and $f(y) \le f(x)$ in both; therefore $f(x)$ is extremal. [step 2.1, step 2.2, step 2.3, cases-exhaustive] ∎

## Remarks

- Step 2.1 is where the comparability lemma earns its place. Without it there
  would be no way to rule out an element of $M$ sitting strictly between $x$ and
  $f(x)$, and such an element would break extremality of $f(x)$ immediately.
- Extremality is not a monotonicity condition in disguise. Nothing here assumes
  $f$ preserves order, and the proof never compares $f$ of two different elements
  except through $x$ itself.
