---
id: thm-composition-with-borel-functions-preserves-measurability
kind: theorem
title: "Composition with a Borel measurable outer map preserves measurability"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-measurable-function-between-measurable-spaces]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Definition 3.3"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal{A})$, $(Y,\mathcal{B})$, and $(Z,\mathcal{C})$ be measurable
spaces. If $f : (X,\mathcal{A}) \to (Y,\mathcal{B})$ is measurable and
$g : (Y,\mathcal{B}) \to (Z,\mathcal{C})$ is measurable, then
$g \circ f : (X,\mathcal{A}) \to (Z,\mathcal{C})$ is measurable.

In particular, if $f$ is measurable and $g$ is a Borel measurable function on
its codomain, then $g \circ f$ is measurable.

## Facts & Assumptions

**Given:** Measurable spaces $(X,\mathcal{A})$, $(Y,\mathcal{B})$,
$(Z,\mathcal{C})$, a measurable map $f : X \to Y$, and a measurable map
$g : Y \to Z$.

[L1] Measurability means that preimages of measurable sets are measurable.
([[def-measurable-function-between-measurable-spaces]])

## Proof

**Proof technique:** direct.

1.1 Let $C \in \mathcal{C}$. Since $g$ is measurable, [L1] gives [given, L1]
$g^{-1}(C) \in \mathcal{B}$. [given, L1]

2.1 Since $f$ is measurable, [L1] applied again gives [step 1.1, L1]

$$(g \circ f)^{-1}(C) = f^{-1}(g^{-1}(C)) \in \mathcal{A}.$$

So $g \circ f$ is measurable. [step 1.1, L1] ∎
