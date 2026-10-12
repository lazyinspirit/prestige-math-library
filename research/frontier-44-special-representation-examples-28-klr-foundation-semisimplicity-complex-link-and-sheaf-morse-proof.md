# Complex-link and constructible-coefficient Morse comparison

This is the owning author's local construction component for `lem-complex-stratified-morse-data-have-tangential-normal-product-and-link-description`. It uses the actually constructed boundary product component, actual controlled proper-submersion/cone and finite incidence suppliers, and ordinary sheaf localization. It is not native acceptance. Full source reading: SMTI7.4–7.9,I12.1–12.6,II2.1–2.4; Goresky2019/2020 complete cone-stalk Lemma2 and§1.8.1–1.8.2. The following gives the mechanisms locally rather than citing those theorems as proof.

## 1. A complex normal slice survives real Morse coordinates

In an affine algebraic embedding, a smooth complex critical stratum S is locally a holomorphic graph n=H(s), by its Jacobian chart. Choose the transverse affine complex plane Nprime={s=0}. Straighten S by coordinates(s,n−H(s)); then change only the real tangent coordinates s by the ordinary Morse lemma. Thus the real Morse/tubular coordinates used in the boundary proof still have the original complex affine plane Nprime as their fiber at the critical point p. No nonholomorphic change of the normal slice is needed.

Whitney A makes Nprime transverse to every incident upper stratum near p. The induced normal strata are Whitney: their tangent planes are the original tangent planes intersected with the fixed transverse kernel; limits preserve the expected rank because the lower tangent plane is included. Equal normal-coordinate secants lie in that kernel by Taylor expansion, and in the limiting tangent plane by Whitney B. The normal critical stratum is the point p.

If there is no incident upper stratum, the normal slice is the point p locally. Its normal pair is(point,empty), its complex link is taken to be empty, and its relative cohomology is directly A_p. The rank and interpolation constructions below are needed only when upper strata occur; this avoids an artificial nonzero-covector requirement in the point case.

Let u be the original real normal Morse function minus its value at p. Its derivative w at p is a nondegenerate real conormal. Define the complex linear function h(z)=w(z)−i w(iz) on the complex normal plane. Because each generalized tangent plane is complex, h has complex rank1 there, equivalently its two real components have rank2. In particular Reh has the same derivative as u and is normally nondegenerate.

Interpolate u_v=(1−v)u+v Reh. The derivative at p stays w. Normal nondegeneracy is uniform over v∈[0,1]: a contrary sequence of upper tangent planes approaching p would give a limiting generalized tangent plane killed by w. Thus all u_v have no upper-stratum critical point sufficiently near p; p is their only local stratified critical point. The normal radial estimate in the boundary component, with tangent space dimension0, is uniform in v. On a positive radial annulus it gives a common band |u_v|≤eta with dρ,du_v independent. Pulling back the fixed box ρ≤delta,|u_v|≤eta and its lower face to N×[0,1] therefore gives a proper stratified parameter family. Flat endpoint collars make its base an open interval. The actual controlled-submersion theorem gives an original-stratum-preserving homeomorphism of normal pairs. This proves the normal-function comparison without assuming the linear h globally proper.

## 2. Derived transport, not arbitrary sheaf homotopy invariance

Here is the exact coefficient argument used for every isotopy and product below. On an actual stratum-preserving parameter product W×I, a bounded constructible complex has locally constant finite-rank cohomology on every original stratum times I. Triangulate the one fixed compact W (and its chosen closed face unions) using the actual compact controlled-space supplier; for deleted-boundary versions use its finite pair model. Each simplex times a contractible parameter cell has constant finite-rank cohomology. The actual finite incidence equivalence and star acyclicity identify such a bounded object with a finite coefficient complex on that cell: positive Ext between constant coefficients vanishes because the cell is contractible. Its ordinary truncation triangles split there.

Filter the fixed finite simplicial model by closed skeleta. The open/closed extension triangles reconstruct the object from these cell pieces. Pullback from W to W×I is fully faithful on the supplied incidence models, because the actual product comparison has fiber I and its cochain augmentation k→C*(I;k) is an explicit quasi-isomorphism. Thus the connecting morphisms between previously reconstructed pullbacks lift to W, and their finite cones are pullbacks again. Induction gives an actual derived isomorphism with the pullback of the endpoint object. The same proof works for a convex contractible parameter ball, and simultaneously for a finite collection of relative face unions. It applies to the inverse image of the original coefficients under the isotopy product, since that inverse image is constructible on the product original strata.

Therefore endpoint cohomology, relative cones of the actual restriction maps, and support complexes are transported together. This is not the false assertion that arbitrary constructible coefficients are invariant under an arbitrary ordinary homotopy. It uses their supplied stratum-preserving parameter product and actual derived incidence descent. All finite vector-space steps work over every field.

## 3. Normal radial and complex cylindrical domains

Write N=Nprime∩Z near p and ρ=|z−p|². The pair(dReh,dImh) is uniformly of real rank2 on every incident upper stratum near p, since any nontrivial limiting real combination would kill a complex generalized tangent plane. The map(ρ,Reh,Imh) has no characteristic point over h=0 for positive sufficiently small ρ. Otherwise a sequence z_i→p on h=0 has limiting tangent T and radial secant v∈T by Whitney B. Dependence means some real combination of the two h differentials vanishes on T_i∩ker dρ. In the limit it vanishes on the complementary radial line as well, because h(z_i)=h(p)=0. It therefore kills all T, contradicting the rank2 statement. The normalization is by unit coefficient pairs; compactness gives the uniform conclusion.

Consequently, for each small positive δ, a sufficiently small ε gives joint independence of(dρ,dReh,dImh) on ρ=δ,|h|≤ε and on a small closed collar of that sphere. Compactness is on the tangent-plane graph closure: limiting upper planes contain the actual lower tangent space, where these covectors are independent. This avoids an unjustified assertion that rank conditions are closed across original strata.

Let ℒ={ρ≤δ,h=ζ}, with 0<|ζ|<ε. It is a compact complex link with a collared radial boundary. On N∩{ρ≤δ,0<|h|<ε}, the map h is a proper stratified submersion to the punctured disk: dh is onto on interior strata; on the radial boundary joint independence keeps it onto. The preimage of a compact target subset is a closed subset of the compact normal ball and avoids h=0. This is the required properness. No global properness of h:Nprime→C is used.

Over the convex left half-disk B={Reζ<0,|ζ|<ε}, this proper bundle is globally trivial by actual controlled transport. For rigor, form the product with its endpoint parameter ζ and lift the base field(ζ−ζstar,0) on B×B; start in the fixed fiber over ζstar<0. Straight base segments stay in B. Properness gives complete time-one lifts for every segment, and the controlled flow is jointly continuous in the additional parameter. Reversing the same segment gives the inverse. Thus the total source is ℒ×B with its original strata, and the coefficient argument in§2 identifies its actual cohomology with RΓ(ℒ,A|ℒ).

Open versus closed radial bounds give the same cohomology. The jointly submersive collar(ρ,h) at ρ=δ gives a stratum-preserving collar with h fixed; a small inward push, equal to the identity off that collar, identifies the restriction cohomology of ρ<δ with ρ≤δ. Coefficients are transported by§2.

These cylinders form a cofinal neighborhood system at p. Choose δ_i→0 and then ε_i→0 sufficiently small also for each radial annulus[δ_(i+1),δ_i]. On that annulus(ρ,h) is a proper submersion for |h|≤ε_i, so radial transport preserving h makes the corresponding restriction in cohomology a quasi-isomorphism. Shrinking ε is likewise a quasi-isomorphism on the left half-disk, because the above derived product restricts from a contractible base to a smaller contractible base. Therefore all maps in this cofinal restriction system are actual quasi-isomorphisms, not merely abstract isomorphisms of equal-dimensional groups. It follows that

(Rj_*j* A)_p ≅ RΓ(ℒ,A|ℒ),

where j is the open inclusion Reh<0. The orientation of ζ can be changed within the punctured disk by the same proper transport.

## 4. The normal Morse triangle

For u=Reh, choose η≪δ in the real radial regular band. The normal pair is P={ρ≤δ,−η≤u≤η}, Q={ρ≤δ,u=−η}. We give its precise comparison to support cohomology.

Expand its upper face by keeping ρ≤δ and imposing

(1−s)(u−η)+s(ρ−δ)≤0.

The active line pivots at(δ,η), has negative slope, and ends at the upper segment of ρ=δ. Its transported auxiliary upper face is defined by the moving-wall equality together with u≥η, with that persistent pivot cut retained at the endpoint; equality alone at s=1 would select the entire sphere and is not the transported face. In the positive-u region the kernel of a normal radial characteristic covector has positive slope, by the normal estimate; thus this moving negative line is transverse. The fixed pivot lies in the radial regular band. Then expand the lower face by

(1−s)(−u−η)+s(ρ−δ)≤0.

Its active line has positive slope in the negative-u region, where characteristic kernels have negative slope; its pivot(δ,−η) is again regular. The transported relative lower face is the moving-wall equality together with u≤−η. Keep this cut and its pivot as persistent face strata throughout the family, including s=1; then its endpoint is precisely Kminus, rather than the entire radial sphere where the endpoint inequality becomes equality. The final pair is the whole normal ball Bδ relative to Kminus={ρ=δ,u≤−η}. Relative lower faces and the fixed pivot are carried through each proper wall family. Use flat time collars and an outer compact chart as in the boundary component. These are the explicit two normal-wall comparisons, not a citation to metric invariance.

Refine the normal strata by u=0. This is Whitney: upper tangent limits intersect kerdu with fixed rank, and same-level secants lie there; at p the same zero-level radial argument gives the required Whitney B. The radius is submersive on every refined positive-radius stratum for small δ. The controlled radial flow for this real Whitney refinement gives a cone homeomorphism preserving the sign of u. Properness on every closed positive radial annulus supplies all finite radial transports; r→0 makes the transported point approach p uniformly because its actual radius tends to0. Thus the negative punctured ball is the product of its negative link with(0,δ], and its actual coefficient cohomology is that of the negative link by§2.

On the sphere ρ=δ, u has no stratum critical value in[−η,0]. Proper controlled u-transport therefore identifies the negative open link u<0 with its closed cap u≤−η in cohomology. Combining this with the radial product gives RΓ(Kminus,A)≅RΓ(Bδ∩{u<0},A). The same cone rescalings identify the whole-ball cohomology with A_p: all sufficiently small conical neighborhoods have quasi-isomorphic restriction cochains; their filtered limit is the derived stalk, whose cohomology is exact filtered colimit over a field. Open and closed balls have the same cohomology by the radial collar. Hence the relative restriction cone for(Bδ,Kminus), and therefore for(P,Q), is

Cone(A_p→RΓ(ℒ,A|ℒ))[−1].

Equivalently, it is the stalk of RΓ_{u≥0}A, by the ordinary localization triangle. The argument transports the restriction arrow itself, so the normal Morse cohomology triangle is genuine with its stated maps. If the complex link is empty, its cochain complex is zero and the same triangle gives the stalk. No purity, affine paving or decomposition theorem is used.

## 5. Tangential shift and global localization

The corrected boundary component identifies an adapted local pair with the product of this normal pair and the tangent quadratic pair(D^λ×D^(2s−λ),∂D^λ×D^(2s−λ)). Under the actual parameter product,§2 identifies the coefficients with their normal restriction. The positive tangent disk is contractible. The negative disk pair has relative cochains k in degree λ and no other cohomology, by its radial disk/sphere cellular pair. Tensoring its finite relative cochains with the normal complex gives

RΓ(local pair,A) ≅ RΓ(normal pair,A|N)[−λ].

This is the actual coefficient shift, including the restriction maps on the relative faces.

For a proper global stratified Morse exhaustion with finitely many critical points, choose disjoint adapted neighborhoods at each critical value, with every side face transverse to the exhaustion. The complement of their interiors inside a compact critical-value band has no stratum critical point and its boundary faces are included in the refinement. Proper controlled transport to the band bottom gives a product there. Relative excision leaves the direct sum of the local pairs; the side-face/bottom pairs are acyclic because they are products with the height interval. Their collars extend the transport to a stratum-preserving parameter deformation. Applying§2 gives the actual relative-cohomology comparison for arbitrary constructible coefficients. Equal critical values are handled by the finite disjoint union of neighborhoods, not by an unproved distinct-value perturbation. Regular bands and the infinite regular ray above the last critical value are likewise products: every finite base path has compact proper inverse image, so the lifted flow is complete along it. Clamping the height to the last regular level yields the cohomology comparison, using§2 rather than ordinary homotopy invariance.

## 6. Nonpure dimension and the local ball-link exhaustion

This section assumes Z is complex algebraic and A is algebraically constructible; the global algebraic affine refinement and finite-critical exhaustion below are not claimed for arbitrary analytic spaces or merely analytic constructibility.

Let d be an allowed upper complex dimension and s the critical stratum dimension. Incident upper strata R have dimR>s. Their transverse link strata have dimension dimR−s−1, so the link has dimension at most d−s−1; it may be empty or lower-dimensional. Relative to the allowed upper dimension d−s−1, their codimensions equal d−dimR. A further finite compatible refinement lowers the stratum dimension and only weakens the stalk upper bound. Thus the Artin codimension induction is valid for nonpure spaces.

The link is a ball cut of the closed affine variety Yζ=Nprime∩Z∩{h=ζ}, not itself a closed affine variety. Its original spherical boundary is regular on all link strata by§3. First take a compatible global algebraic Whitney refinement on Yζ and the given coefficients, subordinate to the algebraic intersections of the original pieces. Refinement can destroy transversality to a previously fixed sphere, so it is not asserted to preserve that sphere. Instead choose a radius R² in an arbitrarily small existing original-stratum collar about δ which is regular on every new smooth stratum. Morse–Sard for the finitely many stratum radius maps supplies such a radius; it also avoids the finitely many zero-dimensional stratum values. The original collar transport identifies this new-radius closed link with the old link using the original coefficients. On the new compact refined-stratum boundary, Whitney A makes the radius differential nonzero on every limiting tangent plane as well, so compactness gives an open neighborhood of distance centers preserving its transversality. Choose a nearby center a there by the strengthened finite-critical exhaustion construction, which supplies a good center in every prescribed real parameter open. Proper time transport for the family of these nearby sphere centers identifies the new-radius closed link with L_a={φ_a≤R²} on the refined strata. The radial collar then identifies this closed link with its open version V_a={φ_a<R²} in coefficient cohomology. This order avoids assuming that an arbitrary refinement preserves a previously fixed collar.

On V_a put ψ=−log(R²−φ_a). Its sublevel ψ≤c is the compact algebraic ball cut φ_a≤R²−e^(−c), so it is proper. Its Levi form is

ψ'(φ_a) Levi(φ_a)+ψ''(φ_a) ∂φ_a⊗overline(∂φ_a),

with both coefficients positive, hence it is strongly plurisubharmonic. At a stratum critical point dφ_a=0, Hessψ=ψ'(φ_a) Hessφ_a; critical points and Morse indices are therefore exactly those of φ_a in this open ball. The finite-critical affine theorem on the closed Yζ supplies their finiteness and normal nondegeneracy; multiplication by the positive ψ' preserves the latter. The global-local calculation of§5 applies to this proper exhaustion on the open ball with its finite inherited Whitney strata. Its collar and coefficient transport identify the resulting calculation with the full original closed link. This closes the precise ball-link clause consumed by Artin and never invokes affine vanishing on a nonaffine ball cut.

## Current acceptance boundary

The preceding local construction supplies the complex-link triangle, actual constructible transport/tangent shift, finite global relative attachment, nonpure link upper dimension and collar-compatible logarithmic exhaustion. It is conditional on the exact actual topology/control, finite incidence and ordinary sheaf constructions, which have their own draft/independent review status. It must be assembled with the corrected boundary component into the single existing Morse item, with its precise direct prerequisites, and then checked with the actual Artin consumer. No native audit, readiness or original global-basis acceptance is asserted.
