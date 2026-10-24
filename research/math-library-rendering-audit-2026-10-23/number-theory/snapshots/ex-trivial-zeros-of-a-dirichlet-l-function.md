---
id: ex-trivial-zeros-of-a-dirichlet-l-function
kind: example
title: "Trivial zeros of the beta function"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-dirichlet-l-trivial-zeros, ex-gauss-sum-for-chi-four]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Andersen, section 16.3.2"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Example

The beta function $L(s,\chi_4)$ has forced zeros at $-1,-3,-5,\ldots$.
No assertion at $s=0$ follows from this odd-parity rule.

## Facts & Assumptions

**Given:** $\chi_4$ is odd ([[ex-gauss-sum-for-chi-four]]) and the trivial-zero corollary ([[cor-dirichlet-l-trivial-zeros]]).

## Verification

**Proof technique:** direct.

1.1 Odd parity means $a=1$. [given]

2.1 The given corollary gives $L(-1-2m,\chi_4)=0$ for $m\ge0$, which is exactly the displayed list. [step 1.1, given] ∎
