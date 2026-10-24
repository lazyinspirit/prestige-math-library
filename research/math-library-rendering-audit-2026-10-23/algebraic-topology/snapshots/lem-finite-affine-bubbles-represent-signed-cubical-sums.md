---
id: lem-finite-affine-bubbles-represent-signed-cubical-sums
kind: lemma
title: Finite affine bubbles represent signed cubical sums
deps: ["lem-based-sphere-maps-have-finite-affine-bubble-normal-forms", "thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one", "lem-cubical-concatenation-is-well-defined-on-higher-homotopy-classes", "prop-cubical-and-spherical-models-of-higher-homotopy-agree", "thm-gram-schmidt-orthonormalisation", "lem-continuity-is-local-and-pastes"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Local expansion of Hatcher Example 2.31 pp136–137 using finite affine charts and explicit cubical group laws; Gram–Schmidt is a published supplier
status: published
verification:
  audited: 2026-09-10
origin: pipeline
proof_strategy: direct
---

## Statement

In the preceding finite normal form, the based homotopy class is the cubical sum of one identity generator for each $\det A_j>0$ and one inverse generator for each $\det A_j<0$, also for r=1. All homotopies fix the cube boundary. The empty sum is the constant class. No infinite choice is used.

## Facts & Assumptions

[F1] The representative has finitely many disjoint affine bubbles and radial-collapse continuity. [[lem-based-sphere-maps-have-finite-affine-bubble-normal-forms]]

[F2] Finite independent columns admit Gram–Schmidt orthonormalization with the same successive spans. [[thm-gram-schmidt-orthonormalisation]]

[F3] Coordinate reversal represents the inverse in the cubical group. [[thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one]]

[F4] Finite pasted coordinate concatenations define the group operation. [[lem-cubical-concatenation-is-well-defined-on-higher-homotopy-classes]]

[F5] The oriented cube quotient gives the identity sphere generator. [[prop-cubical-and-spherical-models-of-higher-homotopy-agree]]

[F6] Finite compatible closed pieces paste continuously. [[lem-continuity-is-local-and-pastes]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 For an invertible real matrix A, apply F2 to its columns to get $A=QR$ with Q orthogonal and R upper triangular with strictly positive diagonal. Interpolating R to the identity retains positive diagonal, hence invertibility. If det Q>0, successive rotations in coordinate planes take its first unit column to e1, then the next within the remaining orthogonal complement, and so on; after r−1 stages the last entry is +1 because the determinant is +1. Each rotation is connected to the identity by varying its angle. This gives a finite continuous path from A to the identity. If det Q<0 apply the same procedure to QJ, where J reflects coordinate 1, obtaining a path from A to J instead. For r=1 interpolate the positive scalar to 1, or the negative scalar to −1, within its sign interval. [F2]

2.1 Choose a private Euclidean ball around each center inside its original parallelepiped. Along each fixed matrix path, inverse matrix entries are continuous: the cofactor formula has determinant bounded away from zero on the compact parameter interval. Hence there is a finite inverse-norm bound M. First shrink the bubble radius from R to ε>0 with $M\sqrt r\,\varepsilon$ less than the private-ball radius. This keeps the original support inside its original parallelepiped. Then replace A by the path A(t) in $Q_\varepsilon(A(t)(x-c))$. Every support stays in that private ball. The collapse boundary maps to infinity; the norm-divergence estimate of F1 gives joint continuity through its motion. Thus each bubble becomes a positive or reflected standard coordinate-cube bubble. [F1, F6, step 1.1]

3.1 Move each center by a sufficiently small segment in its private ball, making their first coordinates distinct. This is possible successively by avoiding finitely many previous coordinates in a nonempty interval. Shrink radii again so the finitely many first-coordinate support intervals are disjoint. Place each support in a separate closed slab across the cube, separated by constant slabs. The map is now literally a finite coordinate-1 concatenation after positive rescaling of the slabs. For any continuous $\phi:I\to I$ fixing 0 and 1, the formula $H(s,u,t)=a((1-t)s+t\phi(s),u)$ is a continuous boundary-fixed homotopy from $a$ to its reparametrization; applying this to the relevant piecewise-affine coordinate maps removes the constant slabs and changes their positive widths without changing the class. [F1, F4, F6, step 2.1]

4.1 Within each slab, translate the center to its midpoint along a segment, first making the support small enough to remain in that convex slab. Expand its coordinate half-widths positively to those of the full slab, evaluating the same radial map on the normalized coordinates. As a width reaches the slab boundary, the normalized sup-norm approaches one and the output diverges; hence the extension by infinity stays continuous, including the final outer boundary. The final map on the oriented normalized cube is $v\mapsto v/(1-\|v\|_\infty)$, or its first-coordinate reflection. To compare with the coordinatewise compactification in F5, interpolate this radial output with $v_i/(1-|v_i|)$ in each coordinate. For an index with $|v_i|=\|v\|_\infty$, both outputs have the same component, diverging at the boundary. Thus the interpolation extends continuously fixing infinity and identifies the positive map with the fixed quotient generator. Reflection is its inverse by F3. [F1, F3, F5, F6, step 3.1]

5.1 Consequently the original class is the ordered product of the indicated generator or inverse for each bubble. Products of powers of a single element add their integer exponents, so it is k times the identity generator, where k is the signed determinant count, even when r=1. Empty support gives the constant class by F1. All steps used finitely many supports and finite matrix paths. [F1, F3, F4, step 1.1, step 2.1, step 3.1, step 4.1] ∎
