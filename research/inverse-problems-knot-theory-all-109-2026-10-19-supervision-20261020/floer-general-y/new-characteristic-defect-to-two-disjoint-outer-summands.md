# A characteristic homology defect gives two disjoint outer summands

This is a new rank-splitting operation, conditional on an actual marked characteristic product region E×I with the stated enclosure property. It does not assert that the region has already been constructed. It uses the newly supplied signed hierarchy nonvanishing and signed cut maps directly. Source actually read: complete Juhász arXiv:math/0609779v3 Claim 9.10 and the remainder of Theorem 9.7, including the boundary rotation calculation; the shared hierarchy owner supplies chosen taut representatives in the eventual marked-norm linear range, not tautness of an arbitrary prescribed surface.

## Exact input and class construction

Let (M,γ) be a taut integral homology product with connected R₊,R₋ and connected suture. Suppose it is horizontally prime. Suppose an actual E×I encloses every embedded product annulus, with its horizontal markings respected up to the specified ambient isotopies, and

    H₁(E×{1};Q) → H₁(R₊;Q)

is not onto. Choose an embedded oriented multicurve ω₊ whose class lies outside this image. Clear denominators if needed; choose an oriented multicurve ω₋ representing the matching class on R₋ under the integral homology-product isomorphisms. Then i₊[ω₊]=i₋[ω₋] in H₁(M;Z). A small regular neighborhood N of γ∪ω₊∪ω₋ carries these fixed boundary curves. The relative exact sequence gives a class s∈H₂(M,N;Z) with boundary [ω₊]−[ω₋]. It is unique because H₂(M;Z)=0. Put r=[R₊]=[R₋] in this marked relative group. Its image in H₂(M,∂M) is zero. All these are the actual inclusion maps, not an identification of unrelated rational vector spaces.

## Strict marked norm inequality

For p,q≥0 choose marked norm-minimizing S₁,S₂ in s+pr and −s+qr, arranging their boundary multicurves on the face neighborhoods as opposite parallel copies of ω₊ and ω₋, and their remaining boundaries as p and q coherently oriented suture copies. Delete spherical and disk components using irreducibility and incompressibility of the faces. At a boundary cancellation pair, use the explicit oppositely oriented collar strips to cancel it. Put the remaining surfaces transverse and minimize their intersection. Inessential intersection loops bound disks on both surfaces; exchange those disks and use the ball they bound to remove the loop. This produces no disk patch in the remaining cut-and-paste decomposition.

Take the oriented double-curve sum P. The switch along each intersection circle removes two annular collars and inserts two annular collars, so χ(P)=χ(S₁)+χ(S₂); the boundary strip cancellations have the same Euler additivity. P has no disk or sphere component. If P has a torus component, its patches alternate annuli from S₁ and S₂. Exchange the S₁ annuli in that component with oppositely oriented S₂ annuli, and conversely. The boundary curves of S_i and their Euler characteristics stay fixed. Their marked homology classes stay fixed because those boundary curves determine the class when H₂(M)=0. The exchange decreases the number of intersection circles. Iterating removes torus components from P. Thus x(P)=x(S₁)+x(S₂), and [P]=(p+q)r.

Suppose equality with (p+q)x(r) held. Define the integer height of a point in M\P by oriented intersection with a path to R₊. It is well defined because the absolute relative image of [P] is zero. Consecutive height frontiers P_i each represent r: their cobordism with R₊ is the closure of the corresponding sublevel region. There are exactly p+q such frontiers. An additional level with no boundary on γ would give a closed component of P; its class is zero since H₂(M)=0 and, with torus and sphere components already absent, deleting it would strictly lower norm. Thus there are no hidden levels outside this range. A frontier has one boundary suture and no closed norm-carrying component, so it is connected. Since x(P_i)≥x(r) and their sum is (p+q)x(r), every one is norm minimizing with the Euler characteristic and boundary of R₊. Each P_i is therefore horizontal.

Horizontal primeness makes these frontiers parallel to R₊ or R₋. Order them so the first k are parallel to R₊ and the rest to R₋. The complementary regions are product collars, except for one middle J_k canonically homeomorphic to M with its face markings.

Here is the required inverse-switch normal form for S₁. Keep the horizontal patches of S₁ on the P_i sheets, with a very small collar on their chosen sides. At each original double curve, undo the smoothing in its product annular neighborhood; its two colored strips form an annular bridge between the neighboring sheets. Push the horizontal patches back to the sheets while retaining those bridges. All interior pieces in a height region are then precisely these disjoint annular bridges; a piece returning to the same sheet bounds an outermost switch collar and would remove an intersection, contrary to the minimized choice. Thus S₁ in J_i consists of product annuli C_i×I, with its endpoint curves C_i on the horizontal sheets. Across every product collar, the classes C_i transport the original boundary class [ω₊]. In the middle J_k their total class is the image of [ω₊] under the marked homeomorphism M→J_k.

At least one annulus C′_k×I in J_k has its upper boundary class outside the image of H₁(E×{1};Q), since their sum does. Its thickening is an embedded product region and cannot be homotoped into the transported E×I while respecting its upper marking: that would put its boundary class in the stated image. This contradicts the actual enclosing hypothesis. Equality is impossible. Therefore

    x(s+pr)+x(−s+qr) > (p+q)x(r).

## Use chosen taut representatives, rather than arbitrary minima

Apply the shared prescribed-boundary hierarchy construction separately to s and −s in its eventual marked-norm linear ranges. It supplies chosen surfaces T₁,T₂ in s+pr and −s+qr for sufficiently large p,q with taut cut manifolds and the prescribed opposite face boundaries. They are norm minimizing in those marked classes. No claim is made that the arbitrary S_i used to prove the norm inequality themselves give taut cuts. Positive boundary fingers put these chosen T_i in good position without changing their cut manifolds or outer sets.

Use a global framing t of the boundary orthogonal plane. Such a framing exists here: its Euler number is χ(R₊)−χ(R₋)=0 on the connected boundary; cancel opposite-index frame zeros in disjoint boundary corridors. Boundary copies of the suture have rotation χ(R₊) each. The opposite face multicurves contribute K and −K, and their normals may be chosen nowhere parallel to the fixed boundary vector. The crossing half-index term is zero for the parallel suture pieces. Hence their outer Euler constants are

    c(T₁,t)=−x(s+pr)+p x(r)−K,
    c(T₂,t)=−x(−s+qr)+q x(r)+K.

The strict inequality makes their sum negative. If one relative Spin^c class were outer for both, its relative Chern evaluation on [T₁]=s=−[T₂] in H₂(M,∂M) would give c(T₁,t)=−c(T₂,t), a contradiction. Thus the two outer sets are disjoint.

## The actual integer rank split

Both chosen cuts are taut. The newly constructed hierarchy-nonvanishing operation supplies an actual Z summand in each cut homology for its induced orientation class. The signed surface-cut operation embeds each in the corresponding direct sum of exterior Spin^c subcomplexes. Since the two outer sets are disjoint, their inclusions have disjoint summands and their retractions combine. The original integral homology therefore has a split Z⊕Z summand. This is the actual rank conclusion and its signed chain source. It uses neither abstract rank-one auxiliary groups nor field-rank calculations as substitutes for the integer maps.

The outstanding characteristic construction must supply the actual E×I and the non-surjectivity branch after the product/horizontal reductions. This note supplies the ensuing strict norm and signed outer-summand operation once those concrete inputs are available.
