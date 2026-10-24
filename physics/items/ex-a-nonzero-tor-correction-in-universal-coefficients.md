---
id: ex-a-nonzero-tor-correction-in-universal-coefficients
title: "A nonzero Tor correction in universal coefficients"
kind: example
status: published
origin: pipeline
deps: ["thm-universal-coefficient-theorem-for-homology-over-a-pid", "thm-tor-of-two-cyclic-abelian-groups"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
---

## Statement

For the complex $0\to\mathbb Z\xrightarrow{2}\mathbb Z\to0$ and coefficients $\mathbb Z/2$, the degree-one UCT correction is $\operatorname{Tor}_1^{\mathbb Z}(\mathbb Z/2,\mathbb Z/2)\cong\mathbb Z/2$.

## Verification

**Given:** $H_0C\cong\mathbb Z/2$, $H_1C=0$, and coefficients $\mathbb Z/2$.

1.1 Tensoring produces $0\to\mathbb Z/2\xrightarrow0\mathbb Z/2\to0$, so $H_1(C\otimes\mathbb Z/2)\cong\mathbb Z/2$. [given]

2.1 The displayed integral complex is itself a length-one free resolution of $H_0C=\mathbb Z/2$. Tensoring this resolution with $\mathbb Z/2$ makes its differential zero, so the definition of Tor (equivalently, [[thm-tor-of-two-cyclic-abelian-groups]]) gives $\operatorname{Tor}_1^{\mathbb Z}(H_0C,\mathbb Z/2)=\mathbb Z/2$. Since $H_1C\otimes\mathbb Z/2=0$, the degree-one correction is exactly the nonzero group computed in step 1.1. This finite free-resolution calculation needs no choice; under AC it is also the correction term in [[thm-universal-coefficient-theorem-for-homology-over-a-pid]]. [step 1.1] ∎
