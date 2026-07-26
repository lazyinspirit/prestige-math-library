---
id: fs-nested-open-intervals-nonempty
kind: false-statement
title: "FALSE: a nested sequence of nonempty bounded open intervals has nonempty intersection"
status: draft
origin: session
deps: [thm-nested-interval-property, def-interval, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, def-sequence, def-complete-ordered-field, def-ordered-field]
justified_by: []
forward_refs: [ex-nested-intervals-single-point, cex-nested-open-intervals-empty]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.38)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
---

## Statement

**False claim:** if $(J_k)_{k \in \mathbb{N}}$ is a sequence of nonempty bounded
**open** intervals of $\mathbb{R}$ ([[def-interval]]) with
$J_{k+1} \subseteq J_k$ for every $k$, then
$\bigcap_{k \in \mathbb{N}} J_k \ne \emptyset$.

The corresponding statement for **closed** bounded intervals is true and is
[[thm-nested-interval-property]]. The claim above is what one gets by replacing
"closed" with "open" there, and it fails: the intersection can be empty. So
closedness is not a convenience of the proof, it is a hypothesis without which
the conclusion is false.

The witness is $J_k = \big(0,\; 1/(k+1)\big)$, refuted below and recorded
separately as the named counterexample of the companion page. The index shift $1/(k+1)$ is
the usual one for sequences starting at $k = 0$; in the customary notation the
family is $(0, 1/n)$ for $n \ge 1$.

## Facts & Assumptions

**Given:** For $k \in \mathbb{N}$ the open interval $J_k := \{x \in \mathbb{R} : 0 < x < 1/(k+1)\}$, where $k+1$ denotes the canonical natural $(k+1)\cdot 1_{\mathbb{R}}$, which is positive and invertible; this is a sequence of subsets of $\mathbb{R}$ indexed by $\mathbb{N}$ ([[def-sequence]]).

[L1] Intervals: $(a,b) = \{x : a < x < b\}$ is an open interval, bounded, and nonempty whenever $a < b$, since then $a < (a+b)/2 < b$ ([[def-interval]]).

[L2] Canonical naturals: $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$, and $m \mapsto m \cdot 1_{\mathbb{R}}$ is strictly increasing ([[lem-of-naturals-positive]]).

[L3] Reciprocals: if $a > 0$ then $1/a > 0$, and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]).

[L4] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L5] Trichotomy, so $x < y$ and $y < x$ cannot both hold ([[def-complete-ordered-field]], [[def-ordered-field]]).

[L6] The refuted claim: a nested sequence of nonempty bounded open intervals has nonempty intersection.

## Refutation

**Proof technique:** direct.

1.1 Each $J_k$ is an open interval and is bounded, with $0$ a lower bound and $1/(k+1)$ an upper bound. [given, L1]

1.2 Each $J_k$ is nonempty: $k + 1 \ge 1$ gives $1/(k+1) > 0$, so the endpoints satisfy $0 < 1/(k+1)$ and [L1] applies. [given, L1, L2, L3]

2.1 The family is nested: $k + 1 < k + 2$ gives $0 < 1/(k+2) < 1/(k+1)$, so $0 < x < 1/(k+2)$ implies $0 < x < 1/(k+1)$, that is $J_{k+1} \subseteq J_k$. [step 1.2, L2, L3]

2.2 So $(J_k)$ is a sequence of nonempty bounded open intervals, nested, and is therefore an instance of the claim, which asserts that its intersection is nonempty. [step 1.1, step 1.2, L6]

3.1 Suppose $x \in \bigcap_{k} J_k$. Then $x > 0$, and $x < 1/(k+1)$ for every $k \in \mathbb{N}$. [step 2.2, given]

4.1 Since $x > 0$, [L4] supplies a natural $n \ge 1$ with $1/n < x$; writing $n = k+1$ with $k \in \mathbb{N}$, which is possible because $n \ge 1$, step 3.1 gives $x < 1/n$ as well. [step 3.1, L4, choose]

5.1 That is $x < 1/n$ and $1/n < x$, which trichotomy forbids. So no such $x$ exists and $\bigcap_k J_k = \emptyset$. [step 4.1, L5]

6.1 The sequence $(J_k)$ therefore consists of nonempty bounded open intervals, is nested, and has empty intersection: the claim is false. [step 2.2, step 5.1, L6] ∎

## Remarks

- **Which hypothesis of [[thm-nested-interval-property]] is being violated.**
  Only closedness. The intervals here are nonempty and bounded, and the family is
  nested, so the true theorem does not apply, and the refutation shows that no
  weakening of it to open intervals is available.

- **What goes wrong in the proof of the true theorem.** With $J_k = (a_k, b_k)$
  the endpoint sequences still converge, to $a = \sup a_k$ and $b = \inf b_k$,
  and the intersection is still an interval with those endpoints; but for open
  intervals it is $[a, b]$ intersected with the open conditions, and here
  $a = 0 = b$ while $0 \notin J_k$ for any $k$. The candidate point exists as a
  real number and simply fails to lie in the sets. Closedness is exactly the
  hypothesis that puts the endpoint into each interval.

- **The Archimedean property is what makes the intersection empty.** In a
  non-Archimedean ordered field the same family has a nonempty intersection,
  since a positive infinitesimal lies below every $1/n$. So the counterexample is
  a statement about $\mathbb{R}$, and it is [[cor-archimedean-reciprocal]] that
  supplies it.

- **A closely related true statement.** The intersection of the *closures*
  $[0, 1/(k+1)]$ is $\{0\}$ ([[ex-nested-intervals-single-point]]), which is the
  same computation with the endpoint included, and it is exactly what the true
  theorem predicts once the lengths are seen to tend to $0$.

- The witness is recorded as the named counterexample
  [[cex-nested-open-intervals-empty]].
