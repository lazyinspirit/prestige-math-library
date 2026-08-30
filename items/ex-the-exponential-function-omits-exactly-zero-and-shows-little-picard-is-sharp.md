---
id: ex-the-exponential-function-omits-exactly-zero-and-shows-little-picard-is-sharp
kind: example
title: "The exponential function omits exactly zero and shows little Picard is sharp"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-complex-exponential-is-entire-with-derivative-itself, thm-complex-exponential-surjects-onto-the-punctured-plane, thm-kernel-and-fibres-of-complex-exponential, thm-little-picard-theorem]
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
    - title: "Aleksander Simonic, The Ahlfors lemma and Picard's theorems, §6.2"
      url: "https://arxiv.org/pdf/1506.07019"
---

## Example

The exponential function $e^z$ is entire, omits exactly the value $0$, and
therefore shows that Little Picard's "at most one omitted finite value" is
sharp.

## Facts & Assumptions

**Given:** The complex exponential function.

[L1] The exponential is entire ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[L2] Its image is exactly $\mathbb C\setminus\{0\}$ ([[thm-complex-exponential-surjects-onto-the-punctured-plane]]).

[L3] Little Picard allows at most one omitted finite value ([[thm-little-picard-theorem]]).

## Verification

**Proof technique:** direct.

1.1 Facts [L1] and [L2] show that $e^z$ is a nonconstant entire function whose omitted finite-value set is exactly $\{0\}$. [L1, L2, given]

2.1 Fact [L3] says no nonconstant entire function can omit two finite values, while step 1.1 exhibits one omitting exactly one. Therefore the bound in Little Picard is sharp. [L3, step 1.1] ∎
