---
id: fs-composing-a-lebesgue-measurable-function-with-a-continuous-map-need-not-preserve-measurability
kind: false-statement
title: "FALSE: composing a Lebesgue measurable function with a continuous map preserves measurability"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset, lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one, cor-cantor-set-is-an-uncountable-lebesgue-null-set, thm-lebesgue-measure-is-a-complete-measure, lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two, prop-indicator-function-is-measurable-iff-its-set-is-measurable]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Definition 3.3 and Example 2.22"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

**False claim.** Let $X,Y\subseteq\mathbb R$ carry their trace Lebesgue
sigma-algebras. If $f:X\to Y$ is continuous and $g:Y\to\mathbb R$ is
Lebesgue measurable, then $g \circ f$ is Lebesgue measurable.

## Facts & Assumptions

**Given:** The Axiom of Choice, the Cantor set $C$, the homeomorphism
$\psi(x)=x+c(x)$ from $[0,1]$ onto $[0,2]$, and
$K:=\psi[C]$.

[L1] The compact set $K$ has positive Lebesgue measure and therefore contains a
nonmeasurable subset $N$. The set $C$ is Lebesgue null, Lebesgue measure is
complete, and $\psi$ is a homeomorphism.
([[lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one]],
[[cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset]],
[[cor-cantor-set-is-an-uncountable-lebesgue-null-set]],
[[thm-lebesgue-measure-is-a-complete-measure]],
[[lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two]])

[L2] The indicator of a measurable set is measurable.
([[prop-indicator-function-is-measurable-iff-its-set-is-measurable]])

## Refutation

**Proof technique:** direct.

1.1 Choose a nonmeasurable $N\subseteq K$ by [L1], put [L1, L2, choose]
$E:=\psi^{-1}[N]\subseteq C$, let $g:=\mathbf1_E:[0,1]\to\mathbb R$, and let
$f:=\psi^{-1}:[0,2]\to[0,1]$. Completeness makes $E$ Lebesgue measurable in
$\mathbb R$, hence measurable in the trace sigma-algebra on $[0,1]$, so [L2]
makes $g$ measurable, while [L1] makes $f$ continuous.

2.1 But [step 1.1, L1]

$$(g \circ f)^{-1}((1/2,\infty)) = f^{-1}[E]=N,$$

which does not lie in the trace sigma-algebra
$\mathcal L(\mathbb R)|_{[0,2]}$, even though $g$ is measurable and $f$ is
continuous. [step 1.1, L1] ∎
