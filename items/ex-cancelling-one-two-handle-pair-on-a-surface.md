---
id: ex-cancelling-one-two-handle-pair-on-a-surface
kind: example
title: "A cancelling one-two handle pair on a surface"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 8
deps: [def-geometric-cancelling-handle-pair, lem-one-intersection-gives-the-standard-local-cancelling-model, thm-handle-cancellation, def-k-handle-core-cocore-attaching-region-and-belt-sphere, def-attaching-a-smooth-handle-with-corner-rounding, def-local-oriented-intersection-sign, def-mod-two-intersection-number, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "§5.4, printed pp. 143-148 (handle attachment and cancellation in dimension 2); Figures 5.8-5.9"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow; scanned edition with text layer)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
      locator: "§6, printed pp. 67-70 (local intersection signs and the single-point count)"
verification:
  precheck: pass
---

## Example

Assume $\mathrm{AC}_\omega$. In dimension $n=2$ start with a closed disc $D^2$ (a $0$-handle) and attach a $1$-handle (a band) along two disjoint intervals of $\partial D^2$, with attaching orientations chosen so the disc orientation extends over the band; the result is an annulus whose two boundary circles each contain exactly one point of the belt sphere $S^0$ of the band. Attach a $2$-handle (a disc) along one boundary circle. Then the attaching sphere of the $2$-handle meets the belt sphere of the $1$-handle in exactly one point, the pair is geometrically cancelling, and $D^2\cup h^1\cup h^2\cong D^2$. The transverse count of the unique intersection point is $1$ mod $2$ and has local sign $\pm1$; the matrix definition of this page is stated for $1\le k\le n-2$ and does not cover the endpoint case $n=2$, which is handled here directly by the geometric criterion.

## Facts & Assumptions

**Given:** Dimension $n=2$: a closed disc $D^2$ as a $0$-handle, a $1$-handle (band) attached along two disjoint intervals of $\partial D^2$, with attaching orientations chosen so the disc orientation extends over the band, and then a $2$-handle (disc) attached along one boundary circle of the resulting annulus.

[F1] [[def-attaching-a-smooth-handle-with-corner-rounding]] and [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]: the $1$-handle $D^1\times D^1$ has attaching region $S^0\times D^1$ and outgoing region $D^1\times S^0$, so its belt sphere in the outgoing boundary is a $0$-sphere $\{0\}\times S^0$; the $2$-handle $D^2\times D^0$ has attaching sphere $S^1\times\{0\}$.

[F2] [[def-geometric-cancelling-handle-pair]]: in dimension $n=2$ and $k=1$ the attaching sphere of the $2$-handle is a circle and the belt sphere of the $1$-handle is a $0$-sphere in the middle boundary (the two boundary circles of the annulus); they meet transversely in isolated points, and the pair is geometrically cancelling when exactly one point of the belt sphere lies on the attaching circle.

[F3] [[thm-handle-cancellation]], [[def-local-oriented-intersection-sign]], [[def-mod-two-intersection-number]] and [[def-countable-choice]]: assume $\mathrm{AC}_\omega$; a geometrically cancelling pair may be deleted, so the total is diffeomorphic to the initial disc; the unique transverse intersection has local sign $\pm1$ and mod-2 count $1$.

## Verification

**Given:** The configuration of the statement.

1.1 Attaching a band to $D^2$ along two disjoint boundary intervals gives the annulus $S^1\times[0,1]$, whose two boundary circles each contain exactly one of the two points of the belt sphere $S^0=\{0\}\times S^0$ of the band: the two points are the end points of the cocore arc $\{0\}\times D^1$, one on each boundary circle. [F1, given]

2.1 Attaching the $2$-handle along one boundary circle makes the attaching circle meet the belt sphere in exactly one point, and the intersection is isolated and automatic in these dimensions; by [F2] the pair is geometrically cancelling, with the transverse count equal to $1$ modulo $2$ and local sign $\pm1$ by [F3]. [F2, F3, step 1.1]

3.1 By [F3] the pair cancels: $D^2\cup h^1\cup h^2\cong D^2$ relative to the incoming boundary. The attaching-belt matrix is not defined here: its definition requires $1\le k\le n-2$, and with $n=2$ and $k=1$ we have $k=n-1$, so the endpoint case is handled directly by the geometric criterion. [F2, F3, step 2.1, given] ∎
