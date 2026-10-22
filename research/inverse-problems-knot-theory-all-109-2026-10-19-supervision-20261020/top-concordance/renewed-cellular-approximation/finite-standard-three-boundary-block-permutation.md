# An explicit finite three-boundary block and its relative permutation

New finite source geometry for Cantrell1963 printed189. This is not an arbitrary annulus theorem and does not identify arbitrary tangent triples with this model. The formula supplies exactly the boundary permutation of a DISPLAYED standard block; a consumer must still give its actual block parameters.

## The actual block

Work in S⁵=R⁵∪{∞}, with p=0. On the unit S⁴ choose the three centers

    a₀=(1,0,0,0,0),
    a₁=(−1/2,√3/2,0,0,0),
    a₂=(−1/2,−√3/2,0,0,0).

For a fixed 0<r₀<π/12 let D_j be the closed geodesic four-ball of radius r₀ about a_j. These three round caps are disjoint. Set

    Q_j={sθ: θ∈D_j, 0≤s≤1},
    P=S⁵ \ (intQ₀∪intQ₁∪intQ₂),
    w_j=∂Q_j.

Each Q_j is a supplied convex Euclidean five-ball: it is the intersection of the unit ball with the closed circular cone about a_j. Its interior is nonempty. Choose any displayed interior point b_j on its axis. If R_j(θ)>0 is its radial boundary distance from b_j, then b_j+tR_j(θ)θ, 0≤t≤1, is its actual closed-ball parameter. The boundary parameter is the same formula at t=1. These continuous positive radial distances exist for a convex compact body with an interior point; on the circular cone and round ceiling they are the first positive roots of their explicit linear/quadratic boundary equations. Distinct Q_j meet precisely at p.

The complement C=S⁵\intQ₀ is also an actual parametrized five-ball without a Schoenflies or annulus import. In coordinates centered at b₀ use the ambient radial homeomorphism

    T(b₀+tθ)=t θ/R₀(θ),       t≥0,
    T(∞)=∞.

It takes Q₀ to the unit ball. Inversion z↦z/|z|² on its exterior, sending ∞ to0, identifies C with D⁵. Thus P=C\(intQ₁∪intQ₂), literally an outer parametrized ball with two displayed interior-ball holes sharing its one boundary point p. No unsupported complement recognition is hidden in the word block.

## A homeomorphism fixing one whole boundary and exchanging the other two

Let R be rotation through π in the (e₂,e₃)-plane of R⁵, fixing its orthogonal complement. Then R fixes a₀, interchanges a₁,a₂, preserves D₀ and interchanges D₁,D₂. Its action on D₀ is not the identity; correct it as follows.

Choose r₀<r₁<π/3 and a continuous cutoff α:[0,π]→[0,1], equal to1 on [0,r₀] and0 on [r₁,π]. In geodesic polar coordinates about a₀ write

    θ=(cos r)a₀+(sin r)v,       v∈S³⊂a₀⊥.

Define τ on S⁴ by replacing v with its rotation through −πα(r) in the same (e₂,e₃)-plane, retaining r. At r=0 the formula fixes a₀ and is continuous; for r≥r₁ it is identity, so there is no polar-coordinate issue at the antipode. Its inverse retains r and rotates by +πα(r). Hence τ is an actual homeomorphism. Set h=τR.

The rotation R preserves r. For r≤r₀ the two rotations cancel exactly, so h fixes EVERY point of D₀. The support of τ is disjoint from D₁∪D₂, since their distances from a₀ are at least 2π/3−r₀>r₁. Consequently h interchanges D₁,D₂ by the original rigid rotation. Extend to all S⁵ by

    H(sθ)=s h(θ),       s>0,
    H(0)=0,            H(∞)=∞.

The displayed inverse uses h⁻¹ and retains s. Continuity at0 and∞ follows from preservation of |x|. Thus H is an actual ambient homeomorphism, not a proposed boundary map awaiting extension. It fixes Q₀ pointwise, exchanges Q₁,Q₂, and preserves P. Its restriction to P fixes the WHOLE w₀ pointwise, with every chosen parameter of that boundary retained, and exchanges w₁,w₂ with their explicitly induced parameters. Relabeling the three centers supplies the permutation fixing either chosen common boundary.

In particular the source/target boundary comparison for a Cantrell block can be transported through H when the two blocks have actual parameters by this displayed model and their common boundary parameters agree. That is a literal marked-input requirement; this operation does not manufacture such block parameters for arbitrary embedded balls or settle the infinite chamber assembly.

## Scope

This is the finite relative boundary permutation which printed189 uses when writing maps fixing w_(2i) or w_(2i+1). The construction uses only explicit rotations, a cutoff on a real interval, radial maps and convex-ball parameters. It has no choice beyond finite data, no four-dimensional Whitney operation and no general four-dimensional annulus assertion. It remains new research mathematics awaiting independent disposition. Full E1, exceptional-endpoint acceptance and the actual matching of Cantrell's chamber blocks are not claimed here.
