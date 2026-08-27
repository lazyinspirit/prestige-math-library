---
id: fs-ae-equality-with-a-measurable-function-does-not-imply-measurability
kind: false-statement
title: "FALSE: equality almost everywhere with a measurable function implies measurability"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-cantor-set-is-an-uncountable-lebesgue-null-set, cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset, lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one, lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two, thm-lebesgue-measure-is-a-complete-measure]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Example 2.22"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

**False claim.** If $g$ equals a measurable function almost everywhere, then
$g$ is measurable. This fails on incomplete measure spaces.

## Facts & Assumptions

**Given:** The Axiom of Choice and the Borel measure space
$(\mathbb{R},\mathcal{B}(\mathbb{R}),\lambda|_{\mathcal{B}(\mathbb{R})})$, the
Cantor set $C$, and the homeomorphism $\psi(x)=x+c(x)$ from $[0,1]$ onto
$[0,2]$.

[L1] The set $K=\psi[C]$ is compact and has Lebesgue measure $1$, so it has
positive outer measure; every positive-outer-measure subset of $\mathbb{R}$
contains a nonmeasurable subset.
([[lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one]],
[[cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset]])

[L2] The Cantor set has Lebesgue measure zero, and Lebesgue measure is complete.
([[cor-cantor-set-is-an-uncountable-lebesgue-null-set]],
[[thm-lebesgue-measure-is-a-complete-measure]])

[L3] The map $\psi$ is a homeomorphism from $[0,1]$ onto $[0,2]$.
([[lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two]])

## Refutation

**Proof technique:** direct.

1.1 By [L1], choose a nonmeasurable subset $N \subseteq K$, and put [L1, L2, L3, choose]
$E := \psi^{-1}[N] \subseteq C$. Since $E \subseteq C$ and $C$ is Lebesgue null,
[L2] makes $E$ Lebesgue measurable. If $E$ were Borel, then continuity of
$\psi^{-1}|_K$ from [L3] would make $N$ Borel in the subspace $K$, hence
Lebesgue measurable, which contradicts the choice of $N$. So $E$ is Lebesgue
measurable but not Borel. [L1, L2, L3, choose]

2.1 Let $f=0$ and $g=\mathbf{1}_E$ on $\mathbb{R}$. The function $f$ is Borel [step 1.1, L2]
measurable, and $g=f$ on $\mathbb{R} \setminus C$, so $g=f$ almost everywhere
with respect to $\lambda|_{\mathcal{B}(\mathbb{R})}$ because $C$ is a measurable
null set by [L2]. But

$$g^{-1}((1/2,\infty)) = E,$$

and $E$ is not Borel by step 1.1, so $g$ is not measurable on this incomplete
measure space. [step 1.1, L2] ∎
