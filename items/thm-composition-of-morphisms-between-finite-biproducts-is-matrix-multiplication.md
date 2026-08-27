---
id: thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication
kind: theorem
title: "Composition of morphisms between finite biproducts is matrix multiplication"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-additive-category, thm-morphisms-between-finite-biproducts-correspond-to-matrices]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Merlin Christ, Tobias Dyckerhoff, and Tashi Walde, Lax Additivity, formula (2.6)"
      url: "https://www.edit.fis.uni-hamburg.de/ws/files/59475679/2402.12251v1.pdf"
pipeline_run: frontier-20
---

## Statement

Let $\mathcal C$ be an additive category. Let
$f:\bigoplus_{i=1}^mA_i\to\bigoplus_{j=1}^nB_j$ have matrix
$F=(f_{ji})_{j,i}$ and let $g:\bigoplus_{j=1}^nB_j\to\bigoplus_{k=1}^rC_k$ have
matrix $G=(g_{kj})_{k,j}$. Then the matrix of $gf$ is

$$((gf)_{ki})_{k,i},\qquad (gf)_{ki}=\sum_{j=1}^ng_{kj}f_{ji}.$$

The finiteness of the middle index set is part of the statement.

## Facts & Assumptions

**Given:** Morphisms $f$ and $g$ between finite biproducts in an additive
category, with matrix entries
$f_{ji}$ and $g_{kj}$.

[L1] A morphism between finite biproducts is reconstructed from its matrix by a
finite sum of injection-entry-projection terms
([[thm-morphisms-between-finite-biproducts-correspond-to-matrices]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], one may write $f=\sum_{i,j}i_jf_{ji}p_i$ and $g=\sum_{j,k}i'_kg_{kj}q_j$, where $q_j$ are the projections of the middle biproduct and $i'_k$ are the injections of the target biproduct. [L1]

2.1 Multiply the two finite sums and use the zero equations $q_ji_{j'}=0$ for $j\ne j'$ and $q_ji_j=1_{B_j}$. The only surviving terms are $i'_kg_{kj}f_{ji}p_i$, so $gf=\sum_{i,j,k}i'_kg_{kj}f_{ji}p_i$. [L1, step 1.1, algebra]

3.1 Taking the $(k,i)$ entry of the matrix, again by [L1], yields $(gf)_{ki}=\sum_{j=1}^ng_{kj}f_{ji}$. The sum is finite because the middle biproduct has only $n$ summands. [L1, step 2.1] ∎
