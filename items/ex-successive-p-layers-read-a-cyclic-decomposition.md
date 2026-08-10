---
id: ex-successive-p-layers-read-a-cyclic-decomposition
kind: example
title: "Successive p-multiple layers recover the summands of C_p^2 times C_{p^3} times C_{p^4}^2"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-successive-p-multiple-quotients-recover-elementary-divisors, prop-order-of-finite-direct-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Decomposition of Finite Abelian Groups, §§1-4"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/finite-abelian.pdf"
    - title: "Richard Elman, Lectures on Abstract Algebra, Ch. 14"
      url: "https://www.math.ucla.edu/~rse/algebra_book.pdf"
pipeline_run: null
---
## Example

For $$G=C_p^2\times C_{p^3}\times C_{p^4}^2,$$ the dimensions $d_i$ defined by $|p^iG/p^{i+1}G|=p^{d_i}$ are $$5,3,3,2,0.$$

## Facts & Assumptions

**Given:** The objects and hypotheses in the example.

[L1] Suppose $G\cong\prod_{j<r}C_{p^{e_j}}$ with $e_j\ge1$, and in additive notation write $p^iG=\{p^ig:g\in G\}$. Define $d_i$ by $|p^iG/p^{i+1}G|=p^{d_i}$. Then $$d_i=|\{j:e_j\ge i+1\}|.$$ Consequently the number of summands of order $p^k$ is $d_{k-1}-d_k$, so the elementary divisors are intrinsic. ([[lem-successive-p-multiple-quotients-recover-elementary-divisors]]).

[L2] If $G$ and $H$ are finite groups, then their external direct product is finite and has order $|G\times H|=|G|\,|H|$. ([[prop-order-of-finite-direct-product]]).

## Verification

**Proof technique:** direct.

1.1 At layers $i=0,1,2,3,4$, the numbers of exponents among $1,1,3,4,4$ that exceed $i$ are respectively $5,3,3,2,0$. [given, L1, L2]

2.1 The differences $d_0-d_1=2$, $d_1-d_2=0$, $d_2-d_3=1$, and $d_3-d_4=2$ recover two $C_p$ factors, no $C_{p^2}$ factor, one $C_{p^3}$ factor, and two $C_{p^4}$ factors. [step 1.1] ∎
