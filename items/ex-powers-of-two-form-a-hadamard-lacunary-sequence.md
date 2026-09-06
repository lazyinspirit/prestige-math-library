---
id: ex-powers-of-two-form-a-hadamard-lacunary-sequence
kind: example
title: "The powers of two form a Hadamard-lacunary sequence"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Gilles Pisier, Sidon Sets in Uniformly Bounded Orthonormal Systems, More Examples"
      url: "https://www.math.kent.edu/~zvavitch/RAFA2018/info_about_talks_files/Pisier.pdf"
---

## Example

The sequence $\lambda_j=2^j$ for $j\ge1$ is Hadamard-lacunary with ratio
$q=2$.

## Facts & Assumptions

**Given:** The sequence $\lambda_j=2^j$.

## Verification

**Proof technique:** direct ratio calculation.

1.1 For every $j\ge1$, $\lambda_{j+1}=2^{j+1}=2\lambda_j$. [given, algebra]

2.1 Thus $\lambda_{j+1}\ge2\lambda_j$ with one fixed ratio $2>1$, exactly [step 1.1]
as required by [[def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series]].
[step 1.1] ∎
