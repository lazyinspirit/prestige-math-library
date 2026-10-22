---
id: lem-finite-triangulated-surface-tangent-field-index-sum
kind: lemma
title: "A boundary-tangent field has Euler index sum on supplied finite smooth triangles"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-euler-characteristic-of-a-finite-cw-complex
proof_strategy: direct
axiom_use: "No choice principle: finite smooth triangle data and the field are supplied. The proof uses finite argument lifts, planar cuts and incidence counts, not a general triangulation, classification, Gauss–Bonnet or Poincare–Hopf theorem."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rasmussen, Floer homology and knot complements, §9.3, p.77 and p.79"
      url: "https://arxiv.org/pdf/math/0306378"
---

## Statement

Let $S$ be a compact oriented smooth surface with smooth boundary and a supplied finite smooth triangulation. This means finite face-to-face triangular disks with circular interior vertex links and interval boundary vertex links; each face has an orientation-preserving parametrization by a closed Euclidean triangle whose derivative is nonsingular and smooth on a neighborhood of that triangle in a surface chart. Let $v$ be a supplied smooth tangent field on $S$, with finitely many isolated interior zeros, none on the triangulation's vertices or edges. Suppose $v$ is a positive multiple of the positively oriented tangent along every boundary component. The boundary may be empty.

At each zero $p$, define $\operatorname{ind}_p(v)$ as the winding of the nonzero coordinate vector $v$ along a sufficiently small positively oriented coordinate circle around $p$. This integer is independent of the positively oriented coordinate and of the small circle. Then, with $V,E,F$ the given finite triangulation counts,
$$\sum_{p:v(p)=0}\operatorname{ind}_p(v)=V-E+F=\chi(S).$$
There is no choice assumption. The assertion is conditional on the supplied smooth triangulation and field; it does not claim a triangulation or generic field exists in a more general category.

## Statement references

[[def-euler-characteristic-of-a-finite-cw-complex]]

## Facts & Assumptions

**Given:** The compact oriented surface, supplied finite smooth triangle data and supplied field satisfying all conditions in the Statement. Fix any smooth positive definite metric, for example the finite chart metrics patched by finitely many coordinate bumps.

[F1] Euler characteristic in a finite cell structure is its alternating cell count ([[def-euler-characteristic-of-a-finite-cw-complex]]).

## Proof

1.1 **The needed elementary degree facts.** A nonzero vector loop in $\mathbb R^2$ has a winding obtained by finitely subdividing its parameter interval until each normalized image lies in an open semicircle, lifting the argument there by arctangent, and matching successive lifts. The final change is an integer multiple of $2\pi$. Products add winding, and a homotopy preserves it: subdivide the compact parameter square finely enough that pointwise ratios on neighboring parameter slices lie in the semicircle about one, where the ratio has a single argument and contributes zero winding. A nonzero vector map on a polygon minus finitely many interior round disks consequently has outer winding equal to the sum on positive hole circles. To prove this excision directly, use a finite fine square grid such that the map on each intersected square has an argument. Move lines to avoid the finitely many circle tangencies and circle-grid vertices. The polygon edges, circle arcs and grid segments form a finite graph; the argument change along each component boundary inside one square is zero by telescoping. All interior segments cancel, leaving exactly the outer and negatively oriented inner boundaries. A zero index computed on two nested coordinate circles is the same by this argument. A positive coordinate change does not alter it: its derivative is a positive invertible real matrix over a disk, so its restriction to the boundary can be contracted to a constant matrix by radial contraction in that disk. A constant positive matrix is joined to the identity by real Gram–Schmidt, positive diagonal rescaling and a rotation. Acting by this homotopy on a nonzero vector loop preserves its winding. The same reasoning compares a circle in one coordinate with a small simple image circle in another, by the annular region or by the coordinate isotopy after shrinking; this isotopy follows from the derivative at the center and the uniform first-derivative estimate on a sufficiently small disk. [given, construct, algebra]

2.1 **One face, with the exact corner term.** For a face $D$, pull back $v$ by the derivative of its supplied triangle parametrization. It is a vector field on a Euclidean triangle, nonzero on its boundary, whose winding there is the sum of its zero indices by the finite excision in step 1.1. A smooth oriented orthonormal frame on this face exists by Gram–Schmidt on the parametrization frame. The two frames differ by a positive matrix over the whole disk, so step 1.1 shows the winding is unchanged. Let $T$ be the positive unit tangent on each face edge and let $\alpha_c\in(0,\pi)$ be its interior metric angle at a corner. Complete the tangent loop there by the exterior rotation $\delta_c=\pi-\alpha_c$. This tangent loop has winding one: in the parametrization frame the reference triangle tangent makes one positive turn, and the derivative matrix, defined over the whole disk, cannot change its winding by step 1.1. Along a smooth edge let $\Delta_e\arg(v/T)$ denote the argument change of the nonzero complex ratio, using the metric and orientation to identify vectors in one tangent plane. It is independent of an initial lift. At a corner the field $v$ is continuous while the completed tangent rotates by $\delta_c$, so the ratio has change $-\delta_c$. Thus the face zero sum is $1+(\sum_{e\subset\partial D}\Delta_e\arg(v/T)-\sum_c(\pi-\alpha_c))/(2\pi)$. This derivation specifies the corner contribution rather than assuming a turning or curvature formula for arbitrary curves. [step 1.1, construct, algebra]

3.1 **Cancel the edges and count the vertex sectors.** Sum the formula in step 2.1 over the $F$ faces. On a common interior edge the two positive boundary tangents are negatives of each other, so their ratios $v/T$ differ by the constant factor $-1$; they are traversed in opposite directions and their argument changes cancel. On a boundary edge $v$ is a positive multiple of its positive unit tangent, so the ratio has argument zero and contributes zero. At an interior vertex the triangular sectors fill the full tangent plane, so their angles sum to $2\pi$. At a boundary vertex they fill the tangent half-plane, so they sum to $\pi$. Writing $V_i,V_b$ for the counts, the corner sum is $3\pi F-2\pi V_i-\pi V_b$. Every zero is in exactly one face interior. Hence the total zero index is $F-(3\pi F-2\pi V_i-\pi V_b)/(2\pi)=V_i+V_b/2-F/2$. [step 2.1, algebra]

4.1 **The Euler count.** Every triangle has three edges; each interior edge has two incident triangles and each boundary edge has one. Thus $3F=2E_i+E_b$. Every boundary component is a subdivided circle, giving $E_b=V_b$, including the empty boundary case. Therefore $2E=3F+V_b$ and $V-E+F=V_i+V_b/2-F/2$. Combine this with step 3.1 and [F1] to obtain the asserted index sum. All faces, cuts, zeros, fibers and argument subdivisions used in this proof are finite; neither a global surface classification nor a stronger-choice field perturbation theorem was used. [F1, step 3.1, algebra] ∎
