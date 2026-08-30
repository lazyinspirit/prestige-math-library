---
id: ex-the-unit-disc-satisfies-all-grand-equivalence-clauses
kind: example
title: "The unit disc satisfies all of the grand-equivalent simple connectivity clauses"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-grand-equivalence-for-simply-connected-plane-domains]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 3, §5"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Example

The unit disc

$$\mathbb D=\{z\in\mathbb C:|z|<1\}$$

satisfies every clause of
[[thm-grand-equivalence-for-simply-connected-plane-domains]].

## Facts & Assumptions

**Given:** The unit disc $\mathbb D$.

[L1] The grand theorem makes connected spherical complement, homological simple connectivity, trivial fundamental group, primitives, holomorphic logarithms, harmonic conjugates, conformal equivalence to the disc, and contractibility equivalent for plane domains ([[thm-grand-equivalence-for-simply-connected-plane-domains]]).

## Verification

**Proof technique:** direct.

1.1 The complement $\widehat{\mathbb C}\setminus\mathbb D=\{z:|z|\ge1\}\cup\{\infty\}$ is connected: the exterior $\{z:|z|>1\}$ is path-connected, and $\infty$ is its point at infinity. [given]

2.1 By [L1], condition 1 from step 1.1 forces every other clause on the grand-equivalence list. So $\mathbb D$ satisfies them all. [step 1.1, L1] ∎
