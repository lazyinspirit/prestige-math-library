---
id: lem-internal-arcs-of-a-reduced-small-cancellation-diagram-are-pieces
kind: lemma
title: "Internal arcs of a reduced small cancellation diagram are pieces"
status: published
origin: pipeline
deps: [def-sc-toolkit-symmetrised-relators-and-pieces, lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction, def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram]
landmark: false
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
    - title: "Touikan \u00a73.5 Figure 3.5.1 and following paragraph"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html"
---

## Statement

The nonempty word on every internal arc of a reduced diagram is a piece, including an arc with the same face on both sides. Consequently in a $C'(1/6)$ diagram its length is strictly less than one sixth of each incident face perimeter, with boundary occurrences counted separately.

## Facts & Assumptions

**Given:** An internal arc $a$, oriented from one endpoint to the other, and its two incident face-side occurrences. The faces may coincide; distinct faces are noncancelling.

[F1] A common nonempty prefix of distinct symmetrised relator words is a piece, with the strict relative bound under $C'(1/6)$ ([[def-sc-toolkit-symmetrised-relators-and-pieces]]).

[F2] Reduced diagrams have no adjacent pair with identical full relator readings at a common oriented edge ([[lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction]]).

[F3] An internal arc retains its literal label and length after arc reduction ([[def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram]]).

## Proof

1.1 Start each incident face-side reading at the initial endpoint of $a$, choosing its orientation to traverse $a$ in the given direction. The two readings have opposite planar orientations, even if they belong to the same face. Their words $r,s$ belong to the symmetrised set and both begin with the nonempty label $p$ of $a$. No free cancellation occurs inside $p$ since it is a segment of a cyclically reduced relator. [F1, F3]

1.2 No nonempty cyclically reduced word equals a cyclic rotation of its inverse. Indeed, writing its letters $b_i$ with indices modulo its length $m$, such equality would give $b_i=b_{k-i}^{-1}$ for some integer $k$. If $m$ is odd, or if $m$ and $k$ are both even, $2i=k$ has a solution modulo $m$, forcing a letter to equal its formal inverse, impossible in $X^{\pm1}$. If $m$ is even and $k$ is odd, take $i=(k-1)/2$ modulo $m$; then $b_i=b_{i+1}^{-1}$, contrary to cyclic reduction. This includes proper-power words and uses no hypothesis on the presented group's torsion. [F1, algebra]

2.1 For distinct faces, equality $r=s$ would give a cancellable pair, excluded by [F2]. For the same face, the two opposite orientations make $s$ a cyclic rotation of $r^{-1}$, so step 1.2 excludes equality. Thus in both cases $r\ne s$ and $p$ is a piece by [F1]. Under $C'(1/6)$, apply its bound to $r$ and separately to $s$ to obtain $|p|<|r|/6$ and $|p|<|s|/6$. No injectivity of a face attaching walk has been assumed. [F1, F2, step 1.1, step 1.2] ∎
