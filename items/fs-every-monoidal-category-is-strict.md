---
id: fs-every-monoidal-category-is-strict
kind: false-statement
title: "FALSE: every monoidal category is strict"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-strict-monoidal-category, rem-isbells-argument-that-isomorphic-objects-cannot-simply-be-identified]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.1"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Statement

**False claim:** every monoidal category is strict.

## Facts & Assumptions

**Given:** A skeleton of $\mathbf{Set}$ containing an infinite set $D$ with
$D\cong D\times D$.

[L1] A strict monoidal category makes associativity and unit equalities literal and all constraints identities ([[def-strict-monoidal-category]]).

[L2] In the Isbell skeleton example, forcing those identities collapses every endomorphism $D\to D$ to the same map, which is absurd ([[rem-isbells-argument-that-isomorphic-objects-cannot-simply-be-identified]]).

## Refutation

**Proof technique:** direct.

1.1 If every monoidal category were strict, then the monoidal structure on that skeleton of $\mathbf{Set}$ would satisfy the condition in [L1]. [L1]

1.2 But [L2] says that in this example such an identification forces all endomorphisms $D\to D$ to be equal, contradicting the existence of distinct endomorphisms such as the identity and a constant map. [L2]

2.1 Therefore not every monoidal category is strict. [step 1.1, step 1.2] ∎
