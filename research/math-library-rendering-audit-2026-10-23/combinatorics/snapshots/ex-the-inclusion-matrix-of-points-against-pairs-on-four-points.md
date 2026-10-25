---
id: ex-the-inclusion-matrix-of-points-against-pairs-on-four-points
kind: example
title: "$W_{1,2}(4)$ written out, and its rank computed"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [thm-rank-of-the-point-inclusion-matrix, def-inclusion-matrix, def-row-space-column-space-nullspace-and-matrix-ranks, def-matrix-product-and-identity-matrix]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §7.1"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Example

Ordering the rows by the points $0,1,2,3$ and the columns by the pairs
$01,02,03,12,13,23$, one has

$$W_{1,2}(4)= \begin{pmatrix} 1&1&1&0&0&0\\ 1&0&0&1&1&0\\ 0&1&0&1&0&1\\ 0&0&1&0&1&1 \end{pmatrix}.$$

## Facts & Assumptions

**Given:** the matrix above.

[L1] The point-inclusion matrix has rank $4$ ([[thm-rank-of-the-point-inclusion-matrix]]).

## Verification

**Proof technique:** direct.

1.1 Row operations reduce the matrix to a row-echelon form with four pivot rows, so its rank is $4$. [given]

2.1 This agrees with [L1]. [L1, step 1.1]

3.1 Direct multiplication also gives $$W_{0,1}(4)\,W_{1,2}(4)=2\,W_{0,2}(4),$$ since every pair contains exactly two points. [given] ∎
