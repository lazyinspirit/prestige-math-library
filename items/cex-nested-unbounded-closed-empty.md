---
id: cex-nested-unbounded-closed-empty
kind: counterexample
title: "The nested closed unbounded sets $[k, \\infty)$ have empty intersection, so boundedness cannot be dropped"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-nested-interval-property, def-interval, thm-of-archimedean, lem-of-naturals-positive, def-sequence, def-complete-ordered-field, def-ordered-field]
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

**Refuted claim:** a nested sequence of nonempty **closed** intervals has
nonempty intersection, boundedness being unnecessary
([[thm-nested-interval-property]], [[def-interval]]).

The witness is $I_k = [k, \infty)$ for $k \in \mathbb{N}$, where $k$ denotes the
canonical natural of $\mathbb{R}$. Each is a nonempty closed interval, the family
is nested, and

$$\bigcap_{k \in \mathbb{N}} [k, \infty) = \emptyset .$$

[[thm-nested-interval-property]] therefore cannot be improved by deleting
"bounded" from its hypotheses. Together with the open-interval
counterexample on this page, which deletes "closed" instead, this shows
that the two hypotheses are independent and that neither is an artefact of the
proof.

## Facts & Assumptions

**Given:** For $k \in \mathbb{N}$ the set $I_k := \{x \in \mathbb{R} : k \le x\}$, where $k$ denotes the canonical natural $k \cdot 1_{\mathbb{R}}$; this is the closed interval $[k,\infty)$ ([[def-interval]], [[def-sequence]]).

[L1] Intervals: $[a, \infty) = \{x : a \le x\}$ is a closed interval, it is not bounded above, and it is nonempty since it contains $a$ ([[def-interval]]).

[L2] Canonical naturals: $m \mapsto m \cdot 1_{\mathbb{R}}$ is strictly increasing, so $k \le k+1$ in $\mathbb{R}$ for every $k \in \mathbb{N}$ ([[lem-of-naturals-positive]]).

[L3] Archimedean property: for every real $x$ there is a natural $n \ge 1$ with $x < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]).

[L4] Trichotomy and transitivity of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

[L5] Nested interval property, for nonempty closed **bounded** intervals ([[thm-nested-interval-property]]).

[L6] The refuted claim: a nested sequence of nonempty closed intervals has nonempty intersection.

## Counterexample

**Proof technique:** direct.

1.1 Each $I_k$ is a nonempty closed interval, containing the canonical natural $k$; and none of them is bounded, since $[a,\infty)$ has no upper bound. [given, L1]

2.1 The family is nested: $k \le k+1$ in $\mathbb{R}$, so $k+1 \le x$ implies $k \le x$, that is $I_{k+1} \subseteq I_k$. [step 1.1, L2, L4]

3.1 Suppose $x$ belonged to every $I_k$. Then $k \cdot 1_{\mathbb{R}} \le x$ for every $k \in \mathbb{N}$. [step 2.1, L1]

4.1 By the Archimedean property fix a natural $n \ge 1$ with $x < n \cdot 1_{\mathbb{R}}$; step 3.1 applied to $k = n$ gives $n \cdot 1_{\mathbb{R}} \le x$, which trichotomy forbids. [step 3.1, L3, L4]

5.1 So no such $x$ exists: the family $(I_k)$ consists of nonempty closed intervals, is nested, and has empty intersection. The claim is refuted, and boundedness cannot be dropped from [[thm-nested-interval-property]]. [step 1.1, step 2.1, step 4.1, L5, L6] ∎

## Remarks

- **What fails is the existence of the supremum, not the argument's bookkeeping.**
  In the proof of [[thm-nested-interval-property]] the intersection is computed as
  $[\sup a_k, \inf b_k]$. Here $a_k = k$ and the set $\{k : k \in \mathbb{N}\}$ has
  no supremum in $\mathbb{R}$, precisely because $\mathbb{R}$ is Archimedean, so
  there is no candidate point at all. This is a different failure mode from
  [[cex-nested-open-intervals-empty]], where the candidate point exists and is
  merely not a member.

- **The sets are intervals but not bounded intervals.** [[def-interval]] admits
  $[a,\infty)$ as one of its nine forms and assigns it no length, which is exactly
  why the length hypothesis of the nested interval property has nothing to say
  about this family.

- **The Archimedean property is again what makes the intersection empty.** In a
  non-Archimedean ordered field an element exceeding every canonical natural lies
  in every $I_k$, so the intersection is nonempty there. The counterexample is a
  statement about $\mathbb{R}$.
