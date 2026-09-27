---
id: fs-absolute-value-measurable-does-not-imply-measurability
kind: false-statement
title: "FALSE: if the absolute value is measurable, then the function is measurable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-a-vitali-set-is-not-lebesgue-measurable, thm-vitali-sets-exist-under-choice-on-r-over-q]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Exercise 29"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

**False claim.** If $|f|$ is measurable, then $f$ is measurable.

## Facts & Assumptions

**Given:** The Axiom of Choice, the Lebesgue measurable-space structure on $[0,1]$, and a Vitali set $V \subseteq [0,1]$.

[L1] Assuming the Axiom of Choice, Vitali sets exist. ([[thm-vitali-sets-exist-under-choice-on-r-over-q]])

[L2] Assuming the Axiom of Choice, a Vitali set is not Lebesgue measurable. ([[thm-a-vitali-set-is-not-lebesgue-measurable]])

## Refutation

**Proof technique:** direct.

1.1 By [L1], choose a Vitali set $V\subseteq[0,1]$. Define $f:[0,1]\to\mathbb R$ by $f(x)=1$ for $x\in V$ and $f(x)=-1$ for $x\in[0,1]\setminus V$. Then $|f|$ is the constant function $1$, hence measurable. [given, L1]

2.1 The inverse image $f^{-1}((0,\infty))=\{x:f(x)>0\}=V$ is not Lebesgue measurable by [L2]. Since $(0,\infty)$ is open, $f$ is not measurable even though $|f|$ is. [step 1.1, L2] ∎
