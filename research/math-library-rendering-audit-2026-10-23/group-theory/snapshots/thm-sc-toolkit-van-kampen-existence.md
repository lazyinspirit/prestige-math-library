---
id: thm-sc-toolkit-van-kampen-existence
kind: theorem
title: "Sc toolkit van kampen existence"
status: published
origin: pipeline
deps: [def-sc-toolkit-labelled-planar-disc-diagram, prop-normal-closure-is-products-of-conjugates]
landmark: true
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Touikan \u00a73.1, Theorem 3.1.7 and the balloon-diagram construction"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/IntroCGGT.pdf"
---

## Statement

A finite word $w$ is null in the presented group if and only if it is the outer boundary label of a diagram. Boundary spurs are allowed; in particular the statement holds for freely reduced $w$ as an exact word, and also for arbitrary words before free reduction. A diagram with $m$ faces gives a product of $m$ conjugates of oriented relators freely equal to its boundary word.

## Facts & Assumptions

**Given:** A symmetrised presentation and a finite word $w$ on its alphabet.

[F1] Diagrams are finite, planar and simply connected, with the outer-walk and zero-face conventions of [[def-sc-toolkit-labelled-planar-disc-diagram]].

[F2] Normal-closure membership is a finite product of conjugates of relators or their inverses, including the zero-factor identity ([[prop-normal-closure-is-products-of-conjugates]]).

## Proof

1.1 Let a diagram have a face. There is a face edge bordering the unbounded region of the union of faces: a generic ray from an interior point has a last crossing of that finite union. Deleting this open edge and its incident open face retracts that polygon onto its complementary boundary path, leaving a connected simply connected planar complex. At the chosen outer occurrence write the boundary as $A e B$ and the face word as $r=e q^{-1}$, so the new boundary is $A q B$. In the free group $A e B=(A r A^{-1})(A q B)$, since the inserted $q^{-1}q$ and $A^{-1}A$ cancel. Repeat until every face has been removed; each removal contributes exactly one conjugate. The remaining connected simply connected graph is a tree, whose boundary freely cancels to the empty word by deleting end edges. Thus the original boundary is freely equal to a product of exactly $m$ conjugates when there are $m$ faces. This peeling is the algebraic unfolding of the diagram into face polygons and conjugating paths. It also treats $m=0$ directly. [F1, F2]

1.2 Conversely suppose $w$ lies in the normal closure. First freely reduce it to $\bar w$. By [F2] express $\bar w$ as a product $\prod_{j=1}^m u_jr_ju_j^{-1}$ in the free group, using the least possible $m$. Draw $m$ disjoint polygons in planar order, joining their basepoints to a common point by separate whiskers labelled $u_j$. Its outer word is that literal product. With $m=0$, a sequence of inverse-pair insertions into the empty walk gives a tree reading any freely trivial word. [F2, construct]

2.1 Fold consecutive outer edges whose letters cancel, identifying them with opposite traversals. If they already form an end spur, delete the spur. Otherwise the two edges bound a sector in the unbounded region and can be identified across that sector. Distinct other endpoints are merged; the sector closes to a slit, so the resulting complex remains planar and simply connected. If the other endpoints already agree, the two edges instead enclose a component. The fold would seal this component into a sphere attached at a point. Before sealing it, discard its interior and identify the two edges: its boundary is precisely the cancelling pair, so the outside boundary word undergoes the same free cancellation. Any positive-area discarded component would give a diagram with fewer than $m$ faces for the same freely reduced word; step 1.1 would give a product with fewer than $m$ factors, contrary to minimality. A component of area zero is a tree and is removed by spur deletions. This accounts for the possible spherical closure, including when the outside word is empty; then minimality already forces $m=0$. [step 1.1, step 1.2, F1]

3.1 Each fold decreases outer length by two, so the finite reduction terminates with a planar simply connected diagram reading exactly $\bar w$. To recover $w$, reverse its chosen free reduction: for each insertion of $aa^{-1}$ at a boundary occurrence attach a fresh edge labelled $a$ in that occurrence's exterior sector. This adds a spur, introduces no face or hole, and inserts exactly the required pair. Together with step 1.1 this proves both directions and the $m$-factor assertion. [step 1.1, step 2.1, F1] ∎
