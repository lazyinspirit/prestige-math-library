---
id: ex-hard-lefschetz-splitting-for-a-three-degree-complex
kind: example
title: "Hard Lefschetz splitting for a three-degree complex"
status: draft
origin: session
deps: ["lem-hard-lefschetz-splits-a-bounded-t-structure-complex"]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

In the bounded derived category of finite-dimensional $k$-vector spaces, take $K=k[2]\oplus k\oplus k[-2]$. Let $L:K\to K[2]$ identify the first summand with the shifted second and the second with the shifted third, and vanish on the third. Its nonzero t-cohomology objects are $H^{-2}(K)=k$, $H^0(K)=k$ and $H^2(K)=k$.

## Verification

**Given:** the data in the Example.

1.1 The displayed $L$ is a degree-two map because the first target is $k[2]$ and the second target is $k$ inside $K[2]$. Its square induces the identity $H^{-2}(K)\to H^2(K)$, so hard Lefschetz holds; the odd groups are zero. [given, algebra]

2.1 Apply [[lem-hard-lefschetz-splits-a-bounded-t-structure-complex]]. The result is exactly the displayed finite sum, with both extreme maps the coordinate inclusion and projection. This verifies the splitting and the zero odd-degree cases. [step 1.1, algebra] ∎
