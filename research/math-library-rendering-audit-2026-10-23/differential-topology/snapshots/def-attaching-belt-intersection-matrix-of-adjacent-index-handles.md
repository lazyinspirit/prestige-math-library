---
id: def-attaching-belt-intersection-matrix-of-adjacent-index-handles
kind: definition
title: "Attaching-belt intersection matrix of adjacent-index handles"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 2
deps: [def-k-handle-core-cocore-attaching-region-and-belt-sphere, def-attaching-a-smooth-handle-with-corner-rounding, def-handle-decomposition-relative-to-the-incoming-boundary, def-transverse-complementary-dimensional-intersection-set, lem-compact-transverse-complementary-intersections-are-finite, def-oriented-intersection-number, def-mod-two-intersection-number, def-local-oriented-intersection-sign, def-induced-boundary-orientation, def-oriented-smooth-manifold-and-oriented-chart, def-countable-choice, thm-oriented-intersection-number-is-homotopy-invariant, thm-mod-two-intersection-number-is-homotopy-invariant]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "§5.4, printed pp. 143-148 (homology classes of handles and the effect of handle addition)"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow; scanned edition with text layer)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
      locator: "§6, printed pp. 67-70 (Definition 6.1 and the local intersection number)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $W$ be a compact smooth $n$-manifold with collared boundary, let $1\le k\le n-2$, and let an index-ordered presentation attach $k$-handles $e_1,\dots,e_m$ to a connected outgoing boundary $M$, then attach $(k+1)$-handles $g_1,\dots,g_\ell$ to the middle boundary $N=\partial_+(W\cup e_1\cup\cdots\cup e_m)$. Suppose every attaching sphere $A_i=g_i(S^k\times\{0\})$ meets every belt sphere $B_j$ of $e_j$ transversely. If the middle stage is oriented (the attachments extend the orientation of $W$) and the spheres carry the orientations induced by the handle framings and the induced boundary orientation of $N$, put $M_{ij}=I(A_i,B_j)\in\mathbb Z$, the oriented intersection number. Without orientations put $M_{ij}\in\mathbb Z_2$, the mod-2 intersection number. The resulting $\ell\times m$ matrix is the **attaching-belt intersection matrix** of the adjacent-index handles. For a nontransverse configuration use the homotopy-invariant extensions in the cited intersection-number definitions. Whenever an isotopy of the attaching embeddings makes the configuration transverse, its entries are those same numbers; no separate existence theorem for an arbitrarily small embedding isotopy is asserted here. The computations on this page use configurations already transverse.

The matrix depends on the chosen index-ordered presentation, on the framings and orientations of the handles, but not on an isotopy used only to make the attaching spheres transverse to the fixed belt spheres ([[thm-oriented-intersection-number-is-homotopy-invariant]], [[thm-mod-two-intersection-number-is-homotopy-invariant]]). For $k=n-1$ the roles of the two families degenerate and the matrix is not defined here: the definition is restricted to the middle range $1\le k\le n-2$, and the endpoint indices $k=0$ and $k=n-1$ are treated separately. When every pair is transverse the entries are finite sums of local signs by [[lem-compact-transverse-complementary-intersections-are-finite]], and the fixed-transverse entries are choice-free; Countable Choice is inherited only from the published intersection-number definitions cited above.
