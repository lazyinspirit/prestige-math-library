---
id: thm-monotone-real-functions-are-borel-measurable
kind: theorem
title: "Every monotone real function is Borel measurable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-monotone-function, thm-threshold-characterisations-of-real-and-extended-real-measurability]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Section 2B"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Section 3.2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Every monotone function $f : \mathbb{R} \to \mathbb{R}$ in the sense of
[[def-monotone-function]] is Borel measurable.

## Facts & Assumptions

**Given:** A monotone function $f : \mathbb{R} \to \mathbb{R}$.

[L1] A real-valued function is measurable exactly when all of its threshold sets
$\{x : f(x) > a\}$ are measurable.
([[thm-threshold-characterisations-of-real-and-extended-real-measurability]])

## Proof

**Proof technique:** direct.

1.1 Suppose first that $f$ is increasing. For each real $a$, the threshold set [given]
$E_a := \{x : f(x) > a\}$ is upward closed: if $x \in E_a$ and $y>x$, then
$f(y) \ge f(x) > a$, so $y \in E_a$. Therefore $E_a$ is one of the four Borel
sets $\varnothing$, $\mathbb{R}$, $(c,\infty)$, or $[c,\infty)$ for some real
$c$. [given]

2.1 Every set named in step 1.1 is Borel, so [L1] gives that every increasing [step 1.1, L1, algebra]
real function is measurable. If $f$ is decreasing, then $-f$ is increasing and
hence measurable by the first half, and therefore $f$ is measurable as well.
[step 1.1, L1, algebra] ∎
