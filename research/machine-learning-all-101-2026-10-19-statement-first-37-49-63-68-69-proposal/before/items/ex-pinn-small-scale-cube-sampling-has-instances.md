---
id: ex-pinn-small-scale-cube-sampling-has-instances
kind: example
title: "Uniform cube sampling satisfies the corrected small-scale conditions"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-lebesgue-measure-and-the-lebesgue-sigma-algebra]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  references: []
---

## Example

For every integer $D\ge2$, take $U=(0,1)^D$ and $\Gamma=\partial[0,1]^D$. Uniform volume probability on $U$ and uniform surface probability on $\Gamma$ satisfy the corrected PINN sampling conditions for every $0<\ell\le1$. One may take $c_r=2^{-D}$ and $c_b=(2D)^{-1}2^{-(D-1)}$ for the lower cell-mass constants. The upper ball-mass constants may be taken as the volumes of the unit balls in $\mathbb R^D$ and $\mathbb R^{D-1}$, respectively, at every radius. Thus the small-scale condition has actual probability-measure instances, whereas its all-positive-scale predecessor does not.

## Statement references

[[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]

## Facts & Assumptions

**Given:** The unit cube, its full boundary, and the indicated uniform probabilities. Let $\omega_s$ denote the $s$-dimensional Lebesgue measure of the Euclidean unit ball.

[F1] Lebesgue measure of a rectangular cell is the product of its side lengths, and dilation by a factor $\rho$ multiplies $s$-dimensional volume by $\rho^s$ ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]).

## Verification

1.1 Fix $0<\ell\le1$ and put $N=\lceil1/\ell\rceil$. Since $1/\ell\le N<1/\ell+1\le2/\ell$, one has $\ell/2\le1/N\le\ell$. Partition each coordinate interval into $N$ intervals of length $1/N$, assigning endpoints by a fixed half-open convention and intersecting with $U$. Their product cells lie in side-$\ell$ cubes centered at their midpoints, which belong to the cells. Each has volume $N^{-D}\ge2^{-D}\ell^D$. On each of the $2D$ boundary faces perform the same $(D-1)$-dimensional partition. Assign shared face edges to the lowest-index incident face and then to a lowest-index neighboring cell; the grid vertices and edges have surface measure zero and lie in the closures of those cells. Each cell remains in its same closed ambient cube and its midpoint belongs to it. Its normalized surface mass is $(2D)^{-1}N^{-(D-1)}\ge(2D)^{-1}2^{-(D-1)}\ell^{D-1}$. [given, F1, algebra]

2.1 Every residual ball intersection has volume at most $\omega_D\rho^D$. On each face its surface intersection is contained in a $(D-1)$-dimensional ball of radius $\rho$, of measure at most $\omega_{D-1}\rho^{D-1}$. Summing over $2D$ faces and dividing by total surface area $2D$ gives boundary probability at most $\omega_{D-1}\rho^{D-1}$. The probability densities are the positive constants $1$ and $1/(2D)$ on their respective supports. These are the required upper and lower bounds with the stated small-scale range. [step 1.1, F1, algebra] ∎

