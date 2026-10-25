---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-irregular-pentagon-area-by-triangulation-and-shoelace.json
  precheck: pass
id: ex-irregular-pentagon-area-by-triangulation-and-shoelace
kind: example
title: "An irregular pentagon computed by triangulation and the shoelace formula"
status: published
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

1.1 Write the vertices as $v_0,\ldots,v_4$ in the displayed order. The five supporting-line calculations $$\det(v_{i+1}-v_i,v_j-v_i)>0\qquad(j\notin\{i,i+1\})$$ give respectively the positive lists $(8,16,12)$, $(8,8,11)$, $(16,8,7)$, $(6,10,7)$, and $(12,15,6)$, with indices modulo five. Thus every other vertex lies strictly to the left of every directed boundary edge. The intersection of these five closed left half-planes is convex, has exactly the displayed boundary chain, and contains both diagonals from $v_0$; hence the chain is simple and counterclockwise and those diagonals triangulate it. The three triangle determinants are $8$, $16$, and $6$, so [L1] gives content $(8+16+6)/2=15$. [L1, algebra]

1.2 The cyclic shoelace sum is $(0+8+20+6+0)-(0+0+4+0+0)=30$, so [L2] gives content $30/2=15$. [L2, algebra]

2.1 The triangulation and shoelace computations agree at $15$. [step 1.1, step 1.2] ∎

## Remarks

The arrows follow the counterclockwise boundary order. The two dashed diagonals from $v_0$ give the three triangles of step 1.1; their displayed areas sum to $4+8+3=15$, agreeing with the shoelace computation in step 1.2.

```tikz
\begin{tikzpicture}[scale=1.2,>=stealth]
\coordinate (v0) at (0,0);
\coordinate (v1) at (4,0);
\coordinate (v2) at (5,2);
\coordinate (v3) at (2,4);
\coordinate (v4) at (0,3);
\draw[thick,->] (v0) -- (v1);
\draw[thick,->] (v1) -- (v2);
\draw[thick,->] (v2) -- (v3);
\draw[thick,->] (v3) -- (v4);
\draw[thick,->] (v4) -- (v0);
\draw[dashed] (v0) -- (v2);
\draw[dashed] (v0) -- (v3);
\fill (v0) circle (1.5pt);
\fill (v1) circle (1.5pt);
\fill (v2) circle (1.5pt);
\fill (v3) circle (1.5pt);
\fill (v4) circle (1.5pt);
\node[below left] at (v0) {$v_0=(0,0)$};
\node[below] at (v1) {$v_1=(4,0)$};
\node[right] at (v2) {$v_2=(5,2)$};
\node[above] at (v3) {$v_3=(2,4)$};
\node[left] at (v4) {$v_4=(0,3)$};
\node at (3,0.65) {$4$};
\node at (2.4,2) {$8$};
\node at (0.65,2.35) {$3$};
\end{tikzpicture}
```
