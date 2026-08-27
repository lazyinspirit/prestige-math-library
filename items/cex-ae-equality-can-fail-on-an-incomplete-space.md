---
id: cex-ae-equality-can-fail-on-an-incomplete-space
kind: counterexample
title: "Equality almost everywhere with a measurable function can fail on an incomplete space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-cantor-set-is-an-uncountable-lebesgue-null-set, cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset, lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one, lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two, thm-lebesgue-measure-is-a-complete-measure]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Example 2.22"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement refuted

That equality almost everywhere with a measurable function forces measurability
even on an incomplete measure space.

## Facts & Assumptions

**Given:** The Axiom of Choice and the Borel measure space
$(\mathbb{R},\mathcal{B}(\mathbb{R}),\lambda|_{\mathcal{B}(\mathbb{R})})$, the
Cantor set $C$, and the homeomorphism $\psi(x)=x+c(x)$ from $[0,1]$ onto
$[0,2]$.

[L1] The positive-measure compact set $K=\psi[C]$ contains a nonmeasurable
subset $N$, and $E=\psi^{-1}[N]$ is a Lebesgue measurable subset of the Cantor
set that is not Borel.
([[lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one]],
[[cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset]],
[[cor-cantor-set-is-an-uncountable-lebesgue-null-set]],
[[thm-lebesgue-measure-is-a-complete-measure]],
[[lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two]])

## Counterexample

**Proof technique:** direct.

1.1 Let $f=0$ and $g=\mathbf{1}_E$. The set $C$ is Borel null, so $g=f$ on [L1]
$\mathbb{R} \setminus C$ and hence $g=f$ almost everywhere. [L1]

2.1 But [step 1.1, L1]
$g^{-1}((1/2,\infty))=E$, and [L1] says $E$ is not Borel. Thus $g$ is not
measurable for the Borel sigma-algebra, even though it agrees almost everywhere
with the measurable function $f$. [step 1.1, L1] ∎
