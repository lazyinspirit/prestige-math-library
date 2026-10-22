---
id: lem-original-between-copy-exchanges-contained-in-normal-products-are-vertical
kind: lemma
title: "Original between-copy exchanges contained in normal products are vertical"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams
  - lem-exchange-surfaces-inside-normal-disk-copy-products-are-vertical
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
---

## Statement

Let $F$ be the full resolution of an actual original-triangulation regular normal diagram. Let two distinct disk components $D_0,D_1$ bound a supplied cellwise normal disk product $P$: its tetrahedral pieces are the disk prisms between corresponding normal pieces, its face pieces are their normal-arc strips, and its fibers stay in their original simplices.

Let $A$ be an exchange annulus or proper exchange disk of that diagram, with one frontier component on each $D_i$, with its usual rectangular switching neighborhood. Suppose $A\subset P$. Then the product can be parametrized to make $A$ vertical while preserving its simplex incidence. In the annular case its two disk caps are normally parallel along $A$. In the disk case both corresponding cap pairs are normally parallel along $A$, with their remaining vertical boundary in $\partial M$.

This concerns the actual original-diagram exchange surface inside the supplied cellwise product. It makes no assertion that an arbitrary between-copy exchange is contained in that product, or can be moved there by following first contact.

## Facts & Assumptions

**Given:** The actual diagram, the two disk components, their cellwise product and its contained between-copy exchange.

[F1] An original double curve is assembled from finitely many transverse tetrahedral arcs joining distinct faces. Its switching neighborhood is assembled from the corresponding small rectangular neighborhoods, chosen consistently through the faces and disjoint from the original edges. Its full-resolution frontier traces are the two sides of the exchange annulus or disk. [[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]]

[F2] A contained annular or disk exchange whose tetrahedral parts are disjoint proper rectangles between corresponding horizontal disk pieces, with the same distinct-face incidence at both ends, admits a cellwise vertical product parametrization. The corresponding end caps then cobound the indicated subproducts. [[lem-exchange-surfaces-inside-normal-disk-copy-products-are-vertical]]

## Proof

1.1 Use the actual small rectangular switching neighborhood of [F1]. Inside each tetrahedron a piece of $A$ is a rectangle with its two frontier sides on the full-resolution sheets and its other two sides in the two distinct faces crossed by that original double arc. Its two frontier sides lie respectively on $D_0$ and $D_1$: these are the two entire frontier components stipulated in the Statement, so following either component cannot change its full-resolution component. The rectangle's interior misses $F$ and all original edges. Different such pieces have disjoint interiors because the selected exchange surface and its switching neighborhood are embedded. [given, F1, construct]

2.1 Each such open rectangle lies in one tetrahedral prism of $P$. Indeed the interiors of those prisms are the components between their horizontal normal sheets inside that tetrahedron. Passing from one to another inside the tetrahedron would cross a horizontal $D_0$ or $D_1$ sheet or an original edge; the rectangle's interior crosses neither. Its two frontier sides consequently lie on the two horizontal ends of that one prism. They cannot be different normal pieces on the same horizontal end, since one side belongs to $D_0$ and the other to $D_1$. Thus they lie on the corresponding disk pieces bounding the prism. Their endpoints are on the same two distinct original faces, by step 1.1. Similarly, in a face strip each side of the exchange gives a proper arc joining the two horizontal arcs: it cannot leave the strip across an edge interval, since it misses the original edges. In the proper-disk case the remaining boundary of $A$ lies in $\partial M$ and hence in the prescribed vertical boundary of $P$. These are all the local rectangle and incidence conditions of [F2], now obtained from the actual diagram and containment, rather than imposed on an unrelated spanning surface. [given, F1, step 1.1, construct]

3.1 Apply [F2] to these finite rectangle and face-strip families. Its relative disk-region maps on the face strips agree at the original edge intervals, and its proper-disk cutting construction extends them across the tetrahedral prisms. The resulting parametrization makes $A=\beta\times[0,1]$, where $\beta$ is its circle or proper-arc frontier on $D_0$. The disk caps of $\beta$ give the asserted subproducts and their boundary conditions. Every fiber stays in its original simplex by that construction. This proves the claimed normal parallelism under the actual containment hypothesis, without any irreducibility assumption on the ambient manifold. [F2, step 2.1, construct] ∎
