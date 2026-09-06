---
id: fs-uct-for-homology-has-an-ext-term-and-uct-for-cohomology-a-tor-term
title: "The homological and cohomological UCT correction terms are not reversed"
kind: false-statement
status: draft
origin: pipeline
deps: ["thm-universal-coefficient-theorem-for-homology-over-a-pid", "thm-universal-coefficient-theorem-for-cohomology-over-a-pid"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
---

## Statement

The asserted reversal of the UCT correction terms is false: homology has $\operatorname{Tor}_1$ and cohomology has $\operatorname{Ext}^1$.

## Refutation

**Given:** the two UCT exact sequences.

1.1 Tensoring the cycle-boundary presentation produces its first derived functor $\operatorname{Tor}_1$ in homology. [given]

2.1 Applying $\operatorname{Hom}(-,G)$ produces its first right derived functor $\operatorname{Ext}^1$ in cohomology, so the claimed reversal is false. [step 1.1] ∎
