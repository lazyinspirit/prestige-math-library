---
id: ex-kunneth-for-two-cyclic-two-term-complexes
title: "Kunneth for two cyclic two-term complexes"
kind: example
status: draft
origin: pipeline
deps: ["thm-kunneth-theorem-for-free-complexes-over-a-pid", "thm-tor-of-two-cyclic-abelian-groups"]
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
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

For the two complexes $0\to\mathbb Z\xrightarrow2\mathbb Z\to0$, the Kunneth sequence has a nonzero degree-one term $\operatorname{Tor}_1^{\mathbb Z}(\mathbb Z/2,\mathbb Z/2)\cong\mathbb Z/2$.

## Verification

**Given:** $H_0C=H_0D\cong\mathbb Z/2$ and $H_iC=H_iD=0$ for $i>0$.

1.1 In degree one, the tensor-product side of the Kunneth sequence is zero because one of the two homology degrees would be positive. [given]

2.1 The quotient is $\operatorname{Tor}_1(\mathbb Z/2,\mathbb Z/2)\cong\mathbb Z/2$, hence $H_1(C\otimes D)\cong\mathbb Z/2$. [step 1.1] ∎
