---
id: ex-irregular-pentagon-area-by-triangulation-and-shoelace
kind: example
title: "An irregular pentagon computed by triangulation and the shoelace formula"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-simple-polygon-content-is-the-sum-of-triangle-contents, thm-shoelace-formula-for-simple-polygons]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $P$ have counterclockwise vertices $(0,0),(4,0),(5,2),(2,4),(0,3)$. It is a convex simple pentagon with Jordan content $15$.

## Facts & Assumptions

**Given:** The displayed cyclic vertex list.

[L1] A simple polygon has content equal to the sum of the contents of the triangles in any triangulation ([[thm-simple-polygon-content-is-the-sum-of-triangle-contents]]).

[L2] The counterclockwise shoelace formula gives the Jordan content of a simple polygon ([[thm-shoelace-formula-for-simple-polygons]]).

## Verification

**Proof technique:** direct.

1.1 The successive edge cross products are positive, so the polygon is convex and the diagonals from $(0,0)$ to $(5,2)$ and $(2,4)$ lie inside. The resulting triangle determinants are $8$, $16$, and $6$, so [L1] gives content $(8+16+6)/2=15$. [L1, algebra]

1.2 The cyclic shoelace sum is $(0+8+20+6+0)-(0+0+4+0+0)=30$, so [L2] gives content $30/2=15$. [L2, algebra]

2.1 The triangulation and shoelace computations agree at $15$. [step 1.1, step 1.2] ∎
