---
id: fs-absolute-value-measurable-does-not-imply-measurability
kind: false-statement
title: "FALSE: if the absolute value is measurable, then the function is measurable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-a-vitali-set-is-not-lebesgue-measurable, thm-vitali-sets-exist-under-choice-on-r-over-q]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Exercise 29"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

**False claim.** If $|f|$ is measurable, then $f$ is measurable.

## Facts & Assumptions

**Given:** The Axiom of Choice, the Lebesgue measurable-space structure on
$[0,1]$, and a Vitali set $V \subseteq [0,1]$.

[L1] Assuming the Axiom of Choice, Vitali sets exist.
([[thm-vitali-sets-exist-under-choice-on-r-over-q]])

[L2] Assuming the Axiom of Choice, a Vitali set is not Lebesgue measurable.
([[thm-a-vitali-set-is-not-lebesgue-measurable]])

## Refutation

**Proof technique:** direct.

1.1 Define $f : [0,1] \to \mathbb{R}$ by $f=1$ on $V$ and $f=-1$ on [given, L1]
$[0,1] \setminus V$. Then $|f|$ is the constant function $1$, hence measurable.
[given, L1]

2.1 But [step 1.1, L2]

$$\{x : f(x) > 0\} = V,$$

which is not measurable by [L2]. So $f$ is not measurable even though $|f|$ is.
[step 1.1, L2] ∎
