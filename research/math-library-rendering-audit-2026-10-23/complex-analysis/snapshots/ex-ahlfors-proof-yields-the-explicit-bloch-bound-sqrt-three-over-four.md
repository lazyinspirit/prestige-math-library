---
id: ex-ahlfors-proof-yields-the-explicit-bloch-bound-sqrt-three-over-four
kind: example
title: "The elementary Bloch proof on this page yields the explicit lower bound 1/48"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-bloch-theorem]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Matthias Weber, Complex Analysis, §7.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
---

## Example

The proof of [[thm-bloch-theorem]] gives the concrete universal estimate

$$\beta(f)\ge\frac1{48}\qquad(|f'(0)|=1).$$

## Facts & Assumptions

**Given:** A holomorphic map $f:\mathbb D\to\mathbb C$ with $|f'(0)|=1$.

[L1] Bloch's theorem on this page proves $\beta(f)\ge1/48$ ([[thm-bloch-theorem]]).

## Verification

**Proof technique:** direct.

1.1 Fact [L1] gives the lower bound $\beta(f)\ge1/48$ for every normalized holomorphic disc map. [L1, given]

2.1 Applying step 1.1 to the present function is exactly the stated example. [step 1.1] ∎
