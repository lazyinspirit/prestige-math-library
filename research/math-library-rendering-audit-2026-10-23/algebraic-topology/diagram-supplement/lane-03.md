# Lane 03 — AHSS naturality and edge maps

**Item:** `thm-naturality-and-edge-maps-of-the-ahss`  
**Review:** targeted missing-diagram candidate  
**Source:** bound snapshot, SHA-256 `6b2c27b8aba6b75eab915624c296177df10ed5d877a50cb0ceb10e49b8e25415`

I read the bound source and viewed both assigned PNG tiles at original resolution. The preview has no diagram; its receipt records `tikz_count: 0` and no diagram or KaTeX failures. The rendering is readable.

## Assessment

A compact explanatory schematic is warranted, though optional: the claim connects cellular maps of filtrations, exact-couple maps, pagewise maps and differentials, next-page transitions, and stable edge maps. A single generic page square plus a small filtration/edge comparison should clarify these layers. Avoid an exhaustive diagram of all pages if it becomes crowded.

The source's variance is consistent. For a cellular map `f:X→Y`, cohomology is contravariant: the skeletal-pair maps go from the `Y` groups to the `X` groups. Homology is covariant and goes from `X` to `Y`. The proof's “same with covariant arrows” correctly flags the distinction. For a theory morphism `φ:h̃→k̃`, the induced theory maps point from `h̃` to `k̃` in both homology and cohomology. The maps on exact couples induce page maps, commute with each `d_r`, and respect the next-page identifications. The edge-map claim should be drawn through the stable exact-couple structure and associated abutment filtration; it should not suggest that an edge map is necessarily an isomorphism or that a filtration quotient is the entire abutment.

I found no diagram-related mathematical defect in the source. A possible schematic should distinguish homological and cohomological variance, label the skeletal levels `p`, use a generic `r` page square, and show the edge comparison to the stable filtration. This recommendation is editorial, not a claim that the theorem is incomplete without a figure.

**Relevant source lines:** 24–35 (statement), 39–43 (exact-couple and edge-map facts).
