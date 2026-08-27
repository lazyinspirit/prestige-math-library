---
id: fs-measurable-level-sets-do-not-imply-measurability
kind: false-statement
title: "FALSE: if every level set of a real-valued function is measurable, then the function is measurable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-a-vitali-set-is-not-lebesgue-measurable, thm-vitali-sets-exist-under-choice-on-r-over-q]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Exercise 29"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

**False claim.** If every level set $\{x:f(x)=a\}$ of a real-valued function is
measurable, then the function itself is measurable.

## Facts & Assumptions

**Given:** The Axiom of Choice, the Lebesgue measurable-space structure on
$[0,1]$, and a Vitali set $V \subseteq [0,1]$.

[L1] Assuming choice, Vitali sets exist.
([[thm-vitali-sets-exist-under-choice-on-r-over-q]])

[L2] Assuming the Axiom of Choice, a Vitali set is not Lebesgue measurable.
([[thm-a-vitali-set-is-not-lebesgue-measurable]])

## Refutation

**Proof technique:** direct.

1.1 Define $f : [0,1] \to \mathbb{R}$ by [given, L1]
$f(x)=x$ for $x \notin V$ and $f(x)=x+2$ for $x \in V$. Every level set of $f$ is
empty, a singleton, or a two-point set, hence measurable. [given, L1]

2.1 The set $f^{-1}([2,3])$ is exactly $V$, because on $[0,1]\setminus V$ the [step 1.1, L2]
values lie in $[0,1]$ and on $V$ they lie in $[2,3]$. By [L2], the set $V$ is
not measurable, so $f$ is not measurable. [step 1.1, L2] ∎
