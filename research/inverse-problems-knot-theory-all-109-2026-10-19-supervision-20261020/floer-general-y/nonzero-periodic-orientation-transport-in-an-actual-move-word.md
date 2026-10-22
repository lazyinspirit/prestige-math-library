# Transporting a specified orientation class through actual move diagrams

This is a new algebraic/sign operation needed because a fiber cut can be a homology product while the uncut exterior has nonzero H₂. It does not assert that different orientation classes give the same homology. It does not reread or revalidate completed analytic or zero-periodic constructions. All statements about counts below refer to actual weakly admissible move multidiagrams; the final paragraph records the remaining geometric admission needed before using this as unrestricted exterior invariance.

## The exact periodic lattice, including the boundary radical

Fix an actual punctured surface Σ and complete compressionbody disk families α,β,γ,δ. The latter three are related by the actual isotopies and disk slides in one compressionbody. Write H=H₁(Σ;Z), A=span[α_i], B=span[β_i]=span[γ_i]=span[δ_i], and C=A∩B inside H. These are integral subgroups, not rational Lagrangians. Boundary-parallel classes, if present, are included in H and hence in C and B.

A periodic domain is uniquely determined by its attaching-circle boundary with zero coefficient on ∂Σ. Existence is precisely that this boundary vanishes in H. Indeed, this is the definition of an absolute bounding two-chain on the surface; uniqueness follows from H₂(Σ)=0, or directly by propagating the zero boundary-region coefficient. Consequently the four-family periodic group is exactly

    K₄ = {(a,b,c,d)∈A⊕B⊕B⊕B : a+b+c+d=0}
       ≅ C⊕B⊕B,
    (u,v,w) ↦ (u,v,w,−u−v−w).

No splitting of A+B in H, no nondegeneracy of the intersection form, and no omission of its radical is used. Similarly K₃≅C⊕B, with (u,v)↦(u,v,−u−v). The main pair periodic groups are C; the auxiliary pair groups are B. These are the full domain groups, not only a convenient subgroup.

For d≥2 all these domain relations are realized by polygon classes whenever the corner component is nonempty: the boundary loop in the symmetric product represents the sum of the displayed attaching-circle classes, and π₁(Sym^dΣ)=H₁Σ. The sum is zero, so it fills. Two fillings with the same domain differ by a zero-domain sphere; its complex determinant orientation is fixed. For d=0 there are no moving coordinates. For d=1, the already constructed actual boundary-region stabilization first gives d=2 by a literal integral chain isomorphism, so no abelianization assertion about Sym¹Σ is needed.

## A reference orientation and the character calculation

Use the actual ordered global tangent frames of the attaching tori. Cut each polygon operator along its boundary and cap its framed real boundary segments. The closed complex part has its complex orientation; the ordered real caps and the translation/modulus factors have their specified order. A change of the cutting uses the same finite-kernel splice isomorphism as for strips. Its associativity follows by identifying both orders with the determinant of the same augmented kernel, with the same ordered cokernel columns. A periodic loop does not introduce an unrecorded frame sign: the tangent frames are global on the tori. The zero-domain sphere factor is complex oriented. This constructs a reference coherent orientation for this finite move configuration. It is not a choice of independently positive signs for its rigid polygons.

Relative to this reference, any other coherent orientation is a Z/2-character of the actual domain group, modulo generator orientation changes. Let h₀₁,h₁₂,h₀₂:B→Z/2 be the auxiliary pair characters. The already constructed auxiliary top-triangle unit fixes their compatibility as

    h₀₂ = h₀₁+h₁₂.

Let m₀:C→Z/2 be the specified orientation class on (α,β). A triangle character on K₃ is of the form φ(u,v)=m(u)+h(v). Restricting it to the three pairs gives

    (α,β): m(u)+h(u),
    (α,γ): m(u),
    (β,γ): h(v).

Thus, once the actual auxiliary unit class is fixed, the transported class on (α,γ) is forced to be

    m₁ = m₀+h₀₁|C.

This is an affine transport relative to the specified reference; in particular it does not identify all characters of C. Apply it a second time to get m₂=m₁+h₁₂|C. A character on K₄ of the form q(u)+r(v)+s(w) restricts to

    (α,β): q+r|C,     (α,γ): q+s|C,     (α,δ): q,
    (β,γ): r+s,       (γ,δ): s,          (β,δ): r.

Taking q=m₂, r=h₀₂ and s=h₁₂ realizes all six required pair classes simultaneously. This explicitly checks the stabilizer condition even when C≠0. It explains why prescribing the three exterior orientation systems independently would be wrong, and why transporting the specified one works. Every boundary-radical element of C is evaluated by the same formulas.

The same computation applies to each finite quadrilateral used for a slide, its inverse slide, and the small-isotopy comparison. Choose the classes successively along the move word and use this simultaneous extension on each inverse/composition configuration. At an end repeated diagram use the transported original class. A different move word need not induce the same automorphism; an isomorphism of the homology groups is what is needed here.

## Consequence for admitted actual multidiagrams

On an actual weakly admissible configuration, the new signed exterior compactification and these compatible determinant orientations give the integer triangle and quadrilateral identities. The already constructed auxiliary unit and finite triangular isotopy inverse then give the signed handleslide equivalence and its two inverse homotopies with the transported class. The boundary-region stabilization is the literal old operator times the invertible constant factor, so it transports the same C-character. The relative compressionbody move word supplies the topology. On a zero-periodic homology-product branch C=0, and this paragraph specializes directly to the completed construction with no further choices.

For a general nonzero-C exterior, the missing geometric step is **simultaneous weak admissibility of the complete finite move configurations, with the specified endpoints connected by admitted moves**. Pairwise admissibility of a nice diagram does not imply this. In particular, none of the preceding character algebra asserts that an arbitrary auxiliary periodic domain has both signs. A winding argument would have to retain the actual boundary-radical classes and produce the required opposite coefficient witnesses for every nonzero element of C⊕B⊕B, while protecting the finite slide/unit patches. Until that operation is supplied, this file gives the precise orientation transport and the conditional signed move theorem, not unrestricted general-Y integral invariance.
