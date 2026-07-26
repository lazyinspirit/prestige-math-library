---
id: cex-nested-open-intervals-empty
kind: counterexample
title: "The nested open intervals $(0, 1/k)$ have empty intersection"
status: published
origin: session
deps: [fs-nested-open-intervals-nonempty, def-interval, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, thm-nested-interval-property, def-sequence, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
---

## Statement refuted

**Refuted claim:** a nested sequence of nonempty bounded **open** intervals has
nonempty intersection ([[fs-nested-open-intervals-nonempty]],
[[def-interval]]).

The witness is $J_k = (0, 1/k)$ for $k \ge 1$: each is a nonempty bounded open
interval, the family is nested, and

$$\bigcap_{k \ge 1}\Big(0, \frac{1}{k}\Big) = \emptyset .$$

The refutation is carried out in full in
[[fs-nested-open-intervals-nonempty]] and is recorded here as the named
counterexample. The comparison worth keeping in view is the closed family $[0, 1/k]$, which
differs only by the inclusion of the left endpoint and intersects in $\{0\}$;
that computation is the preceding example on this page.

## Facts & Assumptions

**Given:** For $j \in \mathbb{N}$ the open interval $J_j := \{x \in \mathbb{R} : 0 < x < 1/(j+1)\}$, which is the family $(0,1/k)$ for $k \ge 1$ under the substitution $k = j+1$ ([[def-sequence]]).

[L1] The family $(J_j)$ consists of nonempty bounded open intervals, is nested, and has empty intersection ([[fs-nested-open-intervals-nonempty]], [[def-interval]]).

[L2] Canonical naturals are positive and strictly increasing in the index ([[lem-of-naturals-positive]]); reciprocals of positives are positive and reciprocation reverses the order ([[lem-of-inverse-positive]]).

[L3] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L4] Trichotomy of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

[L5] Nested interval property, for nonempty **closed** bounded intervals ([[thm-nested-interval-property]]).

[L6] The refuted claim: a nested sequence of nonempty bounded open intervals has nonempty intersection.

## Counterexample

**Proof technique:** direct.

1.1 Each $J_j$ is a nonempty bounded open interval and $J_{j+1} \subseteq J_j$, so the family is an instance of the claim, which asserts that its intersection is nonempty. [given, L1, L6]

2.1 Suppose $x$ belonged to every $J_j$. Then $x > 0$, and $x < 1/(j+1)$ for every $j \in \mathbb{N}$. [step 1.1, L1]

3.1 Since $x > 0$, fix a natural $n \ge 1$ with $1/n < x$, and write $n = j + 1$ with $j \in \mathbb{N}$; step 2.1 then gives $x < 1/n$ as well, which trichotomy forbids. [step 2.1, L2, L3, L4]

4.1 So no such $x$ exists: $\bigcap_j J_j = \emptyset$, and the claim is refuted by a family of nonempty bounded open intervals. [step 1.1, step 3.1, L1, L6] ∎

## Remarks

- **Exactly one hypothesis of [[thm-nested-interval-property]] is missing.** The
  intervals here are nonempty, bounded and nested; they are not closed. The true
  theorem is therefore not contradicted, and the counterexample shows that its
  closedness hypothesis cannot be dropped.

- **The candidate point exists and is excluded by a hair.** With
  $J_j = (a_j, b_j)$ one still has $a_j \to 0$ and $b_j \to 0$, and the only
  possible common point is $0$; but $0 \notin J_j$ for any $j$, because the left
  endpoint is excluded. Closedness is precisely the hypothesis that puts the
  limiting endpoint into each set. Compare
  [[ex-nested-intervals-single-point]], where it is present and the intersection
  is $\{0\}$.

- **The Archimedean property is doing the work in step 3.1.** In a
  non-Archimedean ordered field a positive infinitesimal lies in every
  $(0, 1/n)$, and the intersection is nonempty. So this is a counterexample about
  $\mathbb{R}$, supplied by [[cor-archimedean-reciprocal]], and not a formal
  consequence of openness alone.

- **Boundedness is a separate hypothesis and fails separately.**
  [[cex-nested-unbounded-closed-empty]] keeps closedness and drops boundedness,
  with the same empty intersection, so neither hypothesis implies the other.
