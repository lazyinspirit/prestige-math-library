---
id: cex-gauss-sum-sign-is-not-canonical-without-conventions
kind: counterexample
title: "Gauss-sum phase requires a convention"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-gauss-sum-for-chi-four]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Andersen, section 16.2"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Statement refuted

“The displayed Gauss-sum phase is independent of the additive-character convention.”

## Facts & Assumptions

**Given:** Under $e(x)=\exp(2\pi ix)$, $\tau(\chi_4)=2i$ ([[ex-gauss-sum-for-chi-four]]).

## Counterexample

**Proof technique:** direct.

1.1 Replace $e(x)$ by $e(-x)$. The two terms become $e(-1/4)-e(-3/4)=-i-i=-2i$. [given, algebra]

2.1 This is the conjugate phase, not $2i$, although its squared modulus remains $4$. [step 1.1, algebra] ∎
