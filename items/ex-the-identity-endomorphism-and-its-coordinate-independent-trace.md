---
id: ex-the-identity-endomorphism-and-its-coordinate-independent-trace
kind: example
title: "The identity endomorphism and its coordinate-independent trace"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-contraction-of-a-mixed-tensor,
       def-trace-of-an-endomorphism,
       ex-an-endomorphism-as-a-type-one-one-tensor]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Example

For the identity endomorphism $\operatorname{id}_{\mathbb R^n}$, the associated
type $(1,1)$ tensor has contraction $n$, so its trace is $n$ in every basis.

## Facts & Assumptions

**Given:** A basis $e_1,\ldots,e_n$ of $\mathbb R^n$ with dual basis $e^1,\ldots,e^n$, and the identity endomorphism.

[F1] Contraction is the dual-basis sum $\sum_i T(e^i,e_i)$ ([[def-contraction-of-a-mixed-tensor]]).

[F2] Trace of an endomorphism is the sum of the diagonal entries in any basis ([[def-trace-of-an-endomorphism]]).

## Verification
**Proof technique:** direct.

1.1 The tensor associated to $\operatorname{id}_{\mathbb R^n}$ is $T(\alpha,v)=\alpha(v)$. Therefore [F1] gives $$ \operatorname{ctr}(T)=\sum_{i=1}^n e^i(e_i)=n. $$ [F1, given, algebra]

2.1 In the chosen basis, the matrix of the identity endomorphism is the identity matrix, so [F2] gives trace $n$. This agrees with step 1.1, and neither value depends on the basis. [F2, step 1.1, algebra]

3.1 Thus the identity endomorphism has coordinate-independent trace $n$. [step 2.1] ∎