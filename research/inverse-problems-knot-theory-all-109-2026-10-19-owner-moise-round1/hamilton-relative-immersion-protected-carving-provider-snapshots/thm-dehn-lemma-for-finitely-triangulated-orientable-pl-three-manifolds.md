---
id: thm-dehn-lemma-for-finitely-triangulated-orientable-pl-three-manifolds
kind: theorem
title: "Dehn's lemma for finitely triangulated orientable piecewise linear three-manifolds"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds, lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar, lem-finite-pl-level-collars-give-global-band-products, lem-finite-polygonal-disk-and-collar-surgery, lem-finite-convex-cell-complexes-admit-compatible-triangulations]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed p.48, Corollary3.2; annular boundary transfer is proved explicitly below in the finite PL category."
---

## Statement

Let $M$ be a compact connected orientable PL three-manifold with a supplied finite compatible manifold triangulation. Every finite embedded PL circle $C\subset\partial M$ that is nullhomotopic in $M$ bounds a properly embedded finite PL disk in $M$. No choice hypothesis is introduced.

## Facts & Assumptions

**Given:** The supplied finite PL manifold and nullhomotopic boundary circle.

[F1] The finite orientable PL Loop theorem, in its normal-subgroup form ([[thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds]]).

[F2] Compact locally collared PL subpolyhedra have PL collars, including manifold boundaries and surface boundary circles ([[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]]).

[F3] Finite PL collar heights can be leveled on a short band by matching zero-positive vertex cuts; local level collars on a compact band give a global height-preserving product ([[lem-finite-pl-level-collars-give-global-band-products]]).

[F4] Planar polygonal Jordan disks and annuli cut along a joining strip have finite disk parameters and prescribed-boundary extensions ([[lem-finite-polygonal-disk-and-collar-surgery]]).

[F5] Finite convex cell complexes admit compatible finite triangulations ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]).

## Proof

**Given:** The manifold and circle.

1.1 The circle has a supplied finite PL annular neighborhood $F$ in $\partial M$. Construct it from small polygonal vertex disks and disjoint edge strips. Its two sides do not interchange because the boundary surface is orientable, with orientation induced from $M$; tracing the coherent local orientations makes the band close as an annulus. Choose its product parameter taking $C$ to its central circle, by cutting a transverse strip and applying [F4] to the resulting disk. A nullhomotopy of $C$ gives the disk map required by [F1] with marked subsurface $F$ and trivial normal subgroup of $\pi_1(F)$. The central-circle class is nontrivial. Hence [F1] supplies a proper PL embedded disk $E$ whose boundary $C_0$ is an essential simple circle in $\operatorname{Int}F$. In the planar annulus model, $C_0$ surrounds the inner missing disk: otherwise its bounded Jordan disk would lie in $F$ and contract it. Each region between $C_0$ and one boundary component of $F$ is therefore a parametrized PL annulus, obtained by a thin joining-strip cut and [F4]. [given, F1, F4, F5, construct]

2.1 We prove the boundary-transfer operation used next. Suppose two disjoint circles $B_0,B_1$ in $\partial M$ cobound a parametrized PL annulus, and $B_0$ bounds a proper finite PL disk $D$. Choose a boundary collar $c:\partial M\times[0,1]\to M$ by [F2], and write $s$ for its height near the boundary, extended positively to the rest of $M$ by a finite PL function. On $D$, $s$ is positive away from its boundary. The intrinsic disk collar of $B_0$ supplied by [F2] can be leveled against $s$ on a short range by the zero-positive vertex-cut construction of [F3]: triangulate the collar parameter and its image with $s$ linear, choose a cut below every positive vertex value, and match the truncated cells by equal-height coning. Compactness makes this short range contain the entire part of $D$ at sufficiently small height. Thus for small $\epsilon>0$, the truncated disk $D^{\ge\epsilon}$ is a parametrized disk with its boundary $B_\epsilon$ in $c(\partial M\times\{\epsilon\})$, and its remaining points have height strictly greater than $\epsilon$. Projection along $c$ makes $B_\epsilon$ an embedded boundary-surface circle tending to $B_0$ through a homotopy. Choose $\epsilon$ so this circle lies in a thin annulus about $B_0$, disjoint from $B_1$, and is essential there. [F2, F3, F5, step 1.1, construct]

3.1 The projected $B_\epsilon$ and $B_1$ cobound a parametrized annulus $A_\epsilon$ in the union of that thin annulus and the originally given one. This follows in its planar annulus parameter exactly as in step 1.1. Attach $c(A_\epsilon\times\{\epsilon\})$ to $D^{\ge\epsilon}$ along $B_\epsilon$, then attach the vertical annulus $c(B_1\times[0,\epsilon])$ along its other boundary. The result is an embedded finite PL disk with boundary $B_1$. Indeed the first disk's remaining interior has height greater than $\epsilon$, the horizontal annulus has height $\epsilon$, and the vertical annulus has height at most $\epsilon$ and meets the others only at its top circle. Each gluing adds an annular collar to a disk, so finite compatible prism and disk triangulations give a disk parameter. Its interior misses $\partial M$; corners at the two seams are PL corners and do not affect embeddedness or properness. This proves the transfer operation without an arbitrary boundary-curve isotopy-extension theorem. [F4, F5, step 2.1, construct]

4.1 Transfer the disk $E$ from $C_0$ first to a boundary circle $B$ of $F$, using its intervening annulus from step 1.1. Transfer it next from $B$ to the original central circle $C$, using the given product annulus in $F$. Both transfers have disjoint attaching circles; they do not require $C_0$ and $C$ to be disjoint. The result is the required properly embedded finite PL disk with exact boundary $C$. Only finite collars, subdivisions, plane regions and choices were used, so no choice principle is introduced. [given, step 1.1, step 3.1, construct] ∎
