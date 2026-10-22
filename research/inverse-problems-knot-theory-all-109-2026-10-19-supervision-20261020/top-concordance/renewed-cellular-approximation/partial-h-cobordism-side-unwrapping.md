# Explicit side unwrapping after an actual open-collar construction

This elementary operation consumes an actual collar; it does not prove that a homotopy collar is a collar.

Let W be a compact topological cobordism with faces V₀,V₁ and prescribed side ∂V₀×I. Identify V₀=Bˢ×Tⁿ. Suppose an actual homeomorphism

    c:∂(W−V₁)×[0,∞) → W−V₁

has been constructed and restricts to the identity at height zero. The boundary here includes V₀ and its given infinite side collar ∂V₀×[0,1). Then c determines an actual homeomorphism

    Bˢ×Tⁿ×[0,1) → W−V₁

which is the given identification on the bottom and the entire prescribed side. No extension theorem for a new manifold or smoothing is needed.

Here is the explicit model, with the torus factor carried identically. For s>0 put P=Bˢ×[0,1) and define

    u=x/(1−t),   v=t/(1−t),
    J(x,t)=(u, v−max(0,|u|−1)).

The first change of coordinates identifies P with the epigraph v≥max(0,|u|−1). Thus J is a homeomorphism P→Rˢ×[0,∞). Its inverse is

    v=w+max(0,|u|−1),   t=v/(1+v),   x=u/(1+v).

On the boundary, J sends the bottom disk (x,0) to (x,0); on the side (θ,t), |θ|=1, it sends the point to (θ/(1−t),0). Let q:∂P→Rˢ denote this exact boundary parametrization. The map

    Φ(b,w)=J⁻¹(q(b),w)

is therefore a homeomorphism ∂P×[0,∞)→P which fixes the whole boundary pointwise. Transport q to the actual boundary using the supplied bottom and side identifications, take its product with Tⁿ, and compose Φ⁻¹ with c. This proves the claimed relative homeomorphism. For s=0 simply reparametrize the collar height by t↦t/(1−t).

In particular, if the same actual collar construction is available at both ends, choose a closed partial collar C₀ of V₀. The compact complement of its relative interior is contained in W−V₀. In the second end's actual product coordinates it lies below a finite height, so a sufficiently long closed collar C₁ of V₁ contains that complement in its relative interior. Hence C₀∪C₁=W. Their internal frontiers can be chosen disjoint: the frontier of C₁ lies in int C₀ by the strict height bound. This supplies the genuine two-overlapping-collars input to the wrapping construction; it does not replace either actual collar by a homotopy assertion.
