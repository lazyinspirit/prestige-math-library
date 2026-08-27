---
id: cex-a-function-can-have-measurable-level-sets-without-being-measurable
kind: counterexample
title: "A function can have measurable level sets without being measurable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-a-vitali-set-is-not-lebesgue-measurable, thm-vitali-sets-exist-under-choice-on-r-over-q]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Exercise 29"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement refuted

That measurability of every level set $\{x:f(x)=a\}$ is enough to make
$f$ measurable.

## Facts & Assumptions

**Given:** The Axiom of Choice, the Lebesgue measurable space
$([0,1],\mathcal L(\mathbb R)|_{[0,1]})$, a Vitali set
$V \subseteq [0,1]$, and the function $f:[0,1]\to\mathbb R$ defined by
$f(x)=x$ for $x \notin V$, $f(x)=x+2$ for $x \in V$.

[L1] Assuming the Axiom of Choice, Vitali sets exist and are not Lebesgue measurable.
([[thm-vitali-sets-exist-under-choice-on-r-over-q]],
[[thm-a-vitali-set-is-not-lebesgue-measurable]])

## Counterexample

**Proof technique:** direct.

1.1 Every level set of $f$ is empty, a singleton, or a two-point set, so every [given]
level set is measurable. [given]

2.1 Yet $f^{-1}([2,3])=V$, and [L1] says that $V$ is not measurable. Therefore [step 1.1, L1]
$f$ is not measurable. [step 1.1, L1] ∎
