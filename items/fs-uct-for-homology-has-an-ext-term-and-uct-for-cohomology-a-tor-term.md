---
id: fs-uct-for-homology-has-an-ext-term-and-uct-for-cohomology-a-tor-term
title: "The homological and cohomological UCT correction terms are not reversed"
kind: false-statement
status: published
origin: pipeline
deps: ["def-axiom-of-choice", "thm-universal-coefficient-theorem-for-homology-over-a-pid", "thm-universal-coefficient-theorem-for-cohomology-over-a-pid"]
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
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume the Axiom of Choice. The asserted reversal of the UCT correction terms is false: for free chain complexes over a PID, homology has $\operatorname{Tor}_1$ and cohomology has $\operatorname{Ext}^1$.

## Refutation

**Given:** the Axiom of Choice and the two AC-qualified UCT exact sequences.

1.1 The homological UCT [[thm-universal-coefficient-theorem-for-homology-over-a-pid]] for a free PID chain complex places $\operatorname{Tor}_1(H_{n-1}C,G)$ on the quotient side of its exact sequence. [given]

2.1 The cohomological UCT [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]] places $\operatorname{Ext}^1(H_{n-1}C,G)$ on the kernel side of its exact sequence. Thus the asserted reversal is false under the same Choice premise. [step 1.1] ∎
