---
id: ex-a-wedge-product-detects-linear-dependence
kind: example
title: "A wedge product detects linear dependence in concrete coordinates"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-a-decomposable-wedge-is-nonzero-exactly-for-independent-vectors]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Exterior Powers"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf"
---

## Example

In $\mathbb R^3$, four samples pair the zero/nonzero behaviour of the wedge with dependence/independence. Dependent pairs give the zero wedge: $e_1\wedge(2e_1)=0$, and for $u=(1,2,0)$, $v=(2,4,0)$ one has $u\wedge v=0$ because $v=2u$. Independent pairs give a nonzero wedge: $e_1\wedge e_2\ne0$, and for $u=(1,0,0)$, $v=(0,1,0)$ one has $u\wedge v=e_1\wedge e_2\ne0$.

## Facts & Assumptions

**Given:** The standard basis of $\mathbb R^3$ and the four displayed pairs.

[L1] A decomposable wedge is nonzero exactly when its vectors are linearly independent ([[thm-a-decomposable-wedge-is-nonzero-exactly-for-independent-vectors]]).

## Verification

**Proof technique:** direct.


1.1 The pair $(e_1,2e_1)$ is dependent and its wedge is $e_1\wedge(2e_1)=2(e_1\wedge e_1)=0$, the zero case of [L1]. [L1, algebra]

1.2 The pair $(e_1,e_2)$ is independent and its wedge $e_1\wedge e_2$ is a basis vector of $\Lambda^2\mathbb R^3$, hence nonzero, the nonzero case of [L1]. [L1]

1.3 For $u=(1,2,0)$ and $v=(2,4,0)$, the relation $v=2u$ gives $u\wedge v=2(u\wedge u)=0$, matching the dependence. [L1, algebra]

2.1 For $u=(1,0,0)$ and $v=(0,1,0)$, one has $u\wedge v=e_1\wedge e_2$, which step 1.2 shows is nonzero, matching the independence. [step 1.2, L1]

3.1 In all four samples the wedge is zero exactly for the dependent pairs, in agreement with [L1]. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
