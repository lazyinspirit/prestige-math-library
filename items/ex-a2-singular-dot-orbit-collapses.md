---
id: ex-a2-singular-dot-orbit-collapses
kind: example
title: "A singular A2 dot orbit collapses"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-strong-linkage-order-on-weights]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Lin Chen, Geometric Representation Theory I, Lecture 4, §3"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture4.pdf"
---

## Example

In type $A_2$, choose $\lambda$ with $\langle\lambda+\rho,\alpha_1^\vee\rangle=0$ and $\langle\lambda+\rho,\alpha_2^\vee\rangle>0$. Then $s_1\mathbin\cdot\lambda=\lambda$, so the dot orbit has $|S_3|/2=3$ distinct weights rather than six.

## Facts & Assumptions

**Given:** The dot-action and linkage conventions [[def-strong-linkage-order-on-weights]].

## Verification

**Proof technique:** direct.

1.1 The zero pairing means the shifted weight is fixed by $s_1$, hence $s_1\mathbin\cdot\lambda=\lambda$. [given, algebra]

2.1 Its stabilizer contains $\{1,s_1\}$ and is exactly this subgroup for a generic point on that wall, so orbit-stabilizer gives three distinct translates. The regular six-vertex diagram therefore cannot be used unchanged. [step 1.1, algebra] ∎
