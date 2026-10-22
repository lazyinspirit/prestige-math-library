# Proper lifting on the actual smooth/standard CE restrictions

This is new author development. It consumes only the adopted finite UV carrier-extension contract of `ce-finite-lifting.md`. It does not infer shrinking, an end collar, or a homeomorphism.

## Exact scope

Let f:X→Y be a proper cell-like surjection, where X is an actual smooth manifold and Y is a standard smooth manifold, both of fixed finite dimension and with countable locally finite triangulations. Assume Countable Choice. Then f is a proper homotopy equivalence. The argument applies separately to every open restriction whose source has such a triangulation and whose target is a standard open submanifold.

A relative product-collar assertion requires additional actual data: f is the prescribed homeomorphism there, the source collar is a smooth product, and smaller closed product collars are subcomplexes of the chosen triangulations. No relative claim for an arbitrary wild closed subset is made.

## Locally finite carrier extension

The adopted finite carrier construction extends to a countable locally finite complex of fixed finite dimension. Put D=max(dim Y,dim X+1) at the outset. Choose a locally finite relatively compact coordinate cover of Y. Use one initial stack of finitely many successive star refinements deep enough for every extension through dimension D, including both homotopies, sufficiently fine for the adopted UV extension carriers. Refine additionally so every carrier star is contained in one member of the relatively compact cover. These refinements can be chosen locally finite. A compact subset meets only finitely many members of each cover.

Subdivide the domain locally finitely to respect the base-map inverse cover. This can be done on its locally finite triangulation: first prescribe subdivisions of vertices, then edges, and so on, extending the already finite subdivisions on each compact simplex boundary. There are finitely many dimension steps. The resulting subdivision remains locally finite.

Extend the lift on cells in order of dimension, using exactly the adopted finite carrier extension on each compact cell. At one dimension the cells have disjoint interiors and their boundary maps have already been assigned. Their choices are independent; Countable Choice chooses all extensions at that dimension simultaneously. There are finitely many dimensions. Local finiteness proves continuity. This is a finite iteration of Countable Choice, rather than an infinite dependent sequence of whole-map choices.

Here is the properness control that will be imposed throughout. For each compact K⊂Y, the union of all carrier stars meeting K has compact closure, since only finitely many members of the locally finite relatively compact covers are involved. If the base map b:Z→Y is proper, and the constructed map u:Z→X has f(u(z)) and b(z) in the same assigned carrier enlargement, then u is proper. Indeed u(z)∈L, for compact L⊂X, forces b(z) into the compact carrier enlargement of f(L); its inverse image under b is compact. The closed set u⁻¹(L) is contained in that compact set. The same argument applies to a homotopy defined on the whole product with I.

## The inverse and the two whole proper homotopies

Use this extension on Y with base map idY. It produces g:Y→X with fg close to idY in the chosen carriers. Choose those carriers within distance less than 1 in a proper metric on Y. Then g is proper: g(y)∈L compact forces y into the compact closed 1-neighborhood of f(L).

Choose the carriers sufficiently fine that close maps to Y admit a homotopy in the same relatively compact carrier enlargements. In the actual models Y=Bᵏ×Rⁿ and Y=Bᵏ×(Rⁿ−B̄ᵣ), interpolate directly in the ambient Rᵏ⁺ⁿ. The Bᵏ coordinate stays in the convex ball. In the shell choose each coordinate carrier with closure at positive distance from the excluded normal ball and refine so every interpolating segment stays outside it. Smaller standard radial shells use the same positive-distance condition at both ends. Hence this is an actual homotopy in Y, with locally finite relatively compact carrier control, and it is proper by the preceding carrier bound. For any broader standard target allowed in the abstract statement, supply its Euclidean ENR embedding and neighborhood retraction as input; refine the carriers so the straight segments stay in that retraction domain.

For gf≈idX triangulate X×I relative to its two ends. Use base map b(x,t)=f(x), which is proper. Prescribe idX at one end and gf at the other. Their f-images lie in common sufficiently fine carriers, by choosing the approximation fg with the additional finite refinement levels required for dimension dim(X)+1. Apply the relative carrier extension to these prescribed endpoint maps. It gives H:X×I→X with those endpoints. If H(x,t)∈L compact, then f(x) lies in a fixed compact carrier enlargement of f(L). Consequently (x,t) lies in f⁻¹(that enlargement)×I, which is compact. Thus the whole H is proper, not merely each time slice.

For the product-relative version prescribe g=f⁻¹ on a smaller closed target collar and keep both homotopies constant on the corresponding source collar. Those are subcomplex data; the relative carrier construction applies. This does not create a smooth collar at a merely topological protected set.

## E3 binding and limitation

For the actual local CE handle f:V→Bᵏ×Rⁿ, the current application supplies the inherited DIFF structure on the source. The APPLICATION is conditional on supplying the countable locally finite bounded-dimension triangulations of each actual open source restriction. Inherited DIFF alone is not asserted to constitute that triangulation packet under Countable Choice. If those packets are supplied, standard open target-shell restrictions give actual proper homotopy equivalences. They identify the end systems. The end correspondence is transported by f; if a positive/negative label is wanted, it is the label of the corresponding standard target radial end, or an independently supplied signed marking. Whole proper homotopies eventually remain in prescribed corresponding end neighborhoods. Side-relative use additionally requires the actual smooth product-collar and subcomplex witnesses above. Thus no unsupplied source triangulation, collar, or signed marking is hidden in the E3 binding.

This supplies stronger input than ordinary weak equivalence. It does not assert that a proper homotopy equivalence is a homeomorphism, that an arbitrary compact set can be engulfed from a weak-equivalence open subset, or that a finite p-dimensional engulfing theorem covers a full-dimensional compact target. The geometric E3 expansion remains a separate operation.
