# Jordan component and local square-degree bridges

Preparation only. This makes the root's component feedback explicit and supplies the topology omitted from the first area derivation. No active proof or certification is changed.

## Explicit exterior-component justification

Let Ω be the bounded component of the complement of a Jordan curve Γ, and Ω_ext the other open component, containing infinity. Jordan–Schönflies/separation give connected Ω_ext and ∂Ω_ext=Γ.

For boundary injectivity, let L be a Jordan loop contained in Ω∪{a}, meeting Γ exactly at a. It is disjoint from Ω_ext. Connectedness and infinity force Ω_ext to lie in the unbounded component Ext(L) of the complement of L. For each b∈Γ\{a}, choose exterior points b_j∈Ω_ext converging to b. Since b∉L, a sufficiently small neighborhood of b lies entirely in one component of the complement of L; the b_j eventually belong to that same component. Hence b∈Ext(L), not merely in its closure. Thus Γ\{a} lies in Ext(L). Every point of the bounded Jordan interior Int(L) therefore lies neither in Ω_ext nor Γ; it belongs to Ω. This proves Int(L)⊂Ω. It is the exact justification missing from the earlier sentence that inferred the other component was in Ω merely from connected Γ\{a}.

For a genuine short crosscut C with endpoints a,b∈Γ, concatenate it with a short Γ subarc J to form a small Jordan loop L=C∪J. Again Ω_ext is connected, contains infinity and is disjoint from L, so Ω_ext⊂Ext(L). For every point c of the OTHER open Γ subarc (Γ\J), exterior approximation as above gives c∈Ext(L). Consequently Int(L) contains no point of Ω_ext or Γ, hence Int(L)⊂Ω. Points of J lie on L, not in its interior. With a fixed base point p=f(0) outside a ball containing the small loop, Jordan separation identifies the image source cap not containing p with Int(L). The component identity follows from the usual crosscut separation of a topological disk supplied by Schönflies: C divides Ω into exactly two components with boundaries C joined to the respective Γ subarcs; Int(L) is the one adjacent to J. For coincident endpoints use the first loop argument instead.

In the injectivity proof, the image of a source chord with equal endpoint values a is precisely a loop of the first type. The corresponding source cap maps to Int(L); continuity forces that cap's boundary-circle arc into Γ∩closure(Int(L))={a}. The Schwarz-reflection/identity-theorem contradiction in the previous preparation then applies. No unproved inference from “Γ lies in one component” remains.

## Local winding equals signed regular fibre count

Let D be a closed planar rectangle and F a smooth map on a neighborhood of D. Suppose y∉F(∂D) is a regular value for F on the interior of D. Its fibre in D is compact and consists of isolated points, hence finite, say p₁,…,p_m. Choose disjoint small closed disks B_i inside D about the fibre points, with no other fibre points and boundaries mapped away from y. On D minus their interiors the angular one-form

`alpha_y=[−(v−y₂)du+(u−y₁)dv]/(2π((u−y₁)²+(v−y₂)²))`

is defined after pullback by F and is closed. Ordinary Stokes on the rectangle with round holes (or a finite subdivision and cancellation) gives

`wind(F|∂D,y)=sum_i wind(F|∂B_i,y)`.

At p_i, write F(p_i+v)−y=A_i v+o(|v|) with A_i invertible. For a sufficiently small boundary circle the remainder is smaller than half the least singular value of A_i times its radius. Straight interpolation to A_i v avoids0, so homotopy invariance of winding gives that term equal to the winding of the linear ellipse A_i(∂B_i), namely sign(det A_i). The positive case deforms continuously through invertible matrices to a positive dilation/rotation and has winding1; the negative case adds a reflection and has winding−1. Thus

`wind(F|∂D,y)=sum_{p∈F⁻¹(y)∩D} sign det DF(p)`.

This local formula follows from winding, smooth Stokes and elementary invertible linear algebra; it does not invoke the proper boundaryless-map degree theorem with altered hypotheses. Critical values form a null set by the published smooth Sard theorem, so the formula holds for almost every target y off F(∂D).

## Boundary homotopy and the reverse area inequality

Let f be an orientation-preserving continuous W1,2 homeomorphism on a neighborhood of D, with J_f≥0 a.e. For compact T⊂f(D°), the distance from T to f(∂D) is positive. Mollifications F_n converge uniformly to f on a neighborhood of D. For all large n and each y∈T, the straight boundary interpolation between F_n and f stays away from y. Consequently their boundary winding numbers agree. Since f(∂D) is a positively oriented Jordan curve, its winding about each y∈f(D°) is1 by the Jordan winding/index theorem; orientation preservation supplies the positive sign. Thus almost every y∈T has signed regular fibre count1 for F_n and in particular at least one positive-determinant preimage in D°.

Partition {det DF_n>0}∩D° into countably many disjoint Borel pieces, each lying in an inverse-function neighborhood (use a countable rational basis and subtract previously used neighborhoods). On each piece, ordinary nonnegative change of variables gives integral of det DF_n equal to the area of its image; Tonelli counts image multiplicities. The presence of a positive preimage for almost every y∈T yields

`∫D (det DF_n)_+ >= area(T)`.

Since gradients converge in L2, determinants converge to J_f in L1. Nonnegativity of J_f implies `||(det DF_n)_-||_1→0`. Hence

`∫D J_f =lim ∫D det DF_n >= area(T)`.

Exhaust f(D°) by compact T to obtain the reverse area inequality on D°. Boundaries of source rectangles have planar area0; the already-proved lower inequality and Borel-measure uniqueness are used on open rectangles, avoiding any assumption about the area of f(∂D). Equality of the locally finite image-area measure and J_f dA on an interior rectangle basis extends to all Borel sets. This is the exact signed-multiplicity correction to Lyubich's p182 proof.

Prerequisite mapping still to check before active editing: the precise existing Jordan winding/index theorem for rectifiable image boundary is not enough when f(∂D) is nonrectifiable. Its winding is the continuous-loop topological degree, obtained by approximation or the existing circle-degree/local-homology interface. The above proof uses this continuous-loop winding; it must not silently use a complex contour integral of a nonrectifiable Jordan curve. Alternatively choose rectangles whose boundary images are rectifiable by ACL/Fubini, and exhaust the domain by their interiors; then the existing contour winding supplier applies after verifying its Jordan index clause. This is a bounded explicit supplier choice, not completed certification.
