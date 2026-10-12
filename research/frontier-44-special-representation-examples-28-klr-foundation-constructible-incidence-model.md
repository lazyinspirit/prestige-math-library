# Actual analytic sheaves and finite incidence diagrams

Author `/root/klr_constructible_foundations`; same frontier44 foundation authorization. Exact candidate ID: `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model`. This fills the actual analytic-sheaf comparison needed by the topology, six-operation and equivariant authors. It is a proof conditional on an actual compatible triangulation and on the separately authored constant-sheaf/singular comparison; it does not prove algebraic triangulation existence.

## Statement and exact inputs

Let K be a finite simplicial complex and D a subcomplex. Let X=|K|\|D|, with its ordinary metric/polyhedral topology, stratified by the open simplices not in D. Let P be the finite poset of these simplices, ordered by face inclusion. Work over a field k and assume AC for the actual analytic injective models. A sheaf is P-constructible when its restriction to every open simplex is a finite-rank locally constant k-sheaf. Then the stalk/face-generization functor is an exact equivalence between such sheaves and finite-dimensional covariant k-diagrams on P. The induced functor

`D^b(finite-dimensional k-diagrams on P) → D^b(Sh_k(X))`

is fully faithful and has essential image the full subcategory with bounded P-constructible cohomology. All Hom groups in this full derived subcategory are finite-dimensional, vanish outside a finite degree interval for any fixed pair, and commute with every coefficient field extension. Internal derived Hom is bounded P-constructible and has the same field-extension compatibility. Ordinary and compactly supported cohomology have finite cochain models and commute with extension.

Exact dependencies: actual field-module sheaves/injective models; `lem-finite-poset-diagrams-have-bounded-finite-bar-models` (finite diagram resolutions); `lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology` (the topology author's explicit analytic constant-sheaf comparison); ordinary exact open j! and closed i*; actual inverse/direct-image adjunction. For an algebraically constructible pair A,B, applying this lemma requires the topology author's actual compatible finite deleted-boundary triangulation of their cohomology supports. No assertion that an arbitrary algebraic map is simplicial is made.

## The ordinary equivalence, without assuming its derived version

Give P its Alexandrov topology of upward-closed sets. The map q:X→P sends a point to its open simplex. Its inverse image of the smallest neighborhood P≥σ is the ordinary open star St(σ), so q is continuous. A covariant diagram V on P is a sheaf on P with stalk V_σ and generization V_σ→V_τ for σ≤τ. The exact ordinary inverse-image q* realizes it as an actual sheaf on X. Its restriction to each simplex is constant with stalk V_σ.

Conversely, each open simplex is contractible and simply connected, so parallel transport identifies the stalks of a locally constant sheaf canonically along paths in that simplex. Fix its barycenter as the displayed stalk. If σ≤τ, represent a stalk vector at the barycenter of σ by a section on a small ordinary neighborhood. Its restriction into τ determines a germ of the locally constant sheaf on τ, and parallel transport extends this to its entire connected simplex. The result is independent of the representative and small neighborhood: two representatives of the same germ agree on a smaller neighborhood, which intersects τ, and a locally constant section on connected τ is determined by any such germ. Independence of the path uses simple connectivity of τ. Finite-dimensionality allows a common neighborhood for a basis when verifying k-linearity. The resulting map F_σ→F_τ is the face-generization map. For σ≤η≤τ, representatives near η and σ can be compared in a common incident neighborhood, giving the transitivity equation F_σ→F_τ=(F_η→F_τ)(F_σ→F_η).

These generization maps recover the sheaf itself. A compatible family on St(σ) is determined by its value on σ; all values on incident τ are its images under the generization maps. Such a family is locally represented by original sheaf sections: at a point of an incident face η choose representative germs for the finite basis at that face, and the finite set of further incident faces allows one common smaller neighborhood. Their restrictions are exactly the prescribed values by transitivity. Thus the local representatives glue, and Γ(St(σ),F)=F_σ. The same argument on sufficiently small stars centered at an arbitrary point gives the stalkwise isomorphism q*V≅F. Morphisms are likewise recovered from their stalk maps and the face equations. Since exactness is stalkwise, this equivalence is exact. This is an ordinary sheaf reconstruction argument; it does not use any derived full faithfulness.

## Actual acyclicity on open stars

For τ∈P and a finite-dimensional vector space W, define the diagram injective I_τ(W) by value W at σ≤τ and0 elsewhere, with identity maps whenever both source and target belong to that downset. A diagram map V→I_τ(W) is precisely a linear map V_τ→W, so I_τ(W) is injective. Every finite diagram embeds in the finite direct sum ⊕_τ I_τ(V_τ), via its generization maps; the identity component at τ detects a nonzero vector. Finite injective resolutions exist by the finite-poset bar bound (equivalently dualize a finite projective bar resolution over the opposite poset).

Its realized sheaf is **not claimed injective among all analytic sheaves**. It is instead the actual closed direct image

`q*I_τ(W)=i_τ*(W_(|τ|\|D|))`,

where i_τ:|τ|\|D|→X is closed. Closed direct image is exact and takes injectives to injectives, because ordinary inverse image is exact. Consequently actual derived global sections on any open V satisfy

`RΓ(V,q*I_τ(W))=RΓ(V∩(|τ|\|D|),W)`.

For V=St(σ), this intersection is empty unless σ≤τ. If σ≤τ, its barycentric description inside the closed simplex τ is λ_v>0 for every vertex v∈σ and λ_v≥0 for the other vertices, with total1. It is convex and contracts to the barycenter of σ by a straight-line homotopy staying in it. The deleted subcomplex D removes none of this star: if a containing face η were in D, its face σ would be in D, contrary to σ∈P. The topology author's actual constant-sheaf/singular comparison therefore gives H^j=0 for j>0 and H^0=W. Thus every realized diagram injective is genuinely Γ(St(σ),−)-acyclic in the full analytic sheaf category, independently of a derived incidence equivalence.

Realize a finite diagram-injective resolution of V by the exact functor q*. It is an actual sheaf resolution by these Γ-star-acyclic sheaves. It computes actual RΓ on stars, with the complex of its σ-values. Evaluation on σ is exact in the diagram category, so

`RΓ(St(σ),q*V)=V_σ` in degree0, with no higher cohomology.

The same resolution computes ordinary global cohomology of X: |τ|\|D| is either empty or contracts radially toward the barycenter of τ (for t>0 points enter the interior, which is not in D). Hence the realized injectives are Γ(X,−)-acyclic. All cochain terms are finite-dimensional because both P and the coefficient spaces are finite. For compact supports, the relevant cochains on a closed simplex minus deleted faces are the finite relative cochains (|τ|,|τ|∩|D|); their actual sheaf interpretation is supplied by the same ordinary compact-support/localization construction. No finite-dimensionality of arbitrary sections of arbitrary sheaves is asserted.

## Full derived comparison

The diagram projective P_σ has value k at τ≥σ and0 elsewhere. Its realization is the actual open extension by zero j_!k_St(σ). Exact j! and the ordinary adjunction give

`RHom_X(q*P_σ,q*V)=RΓ(St(σ),q*V)=V_σ`,

concentrated in degree0, by the independently proved star acyclicity. Thus realized diagram projectives are Ext-acyclic against the P-constructible targets, although they are not declared projective among all sheaves.

A finite projective resolution is completely explicit: degree r is the finite sum of P_σr⊗V_σ0 over strict chains σ0<⋯<σr. The first face applies the coefficient map, the internal faces delete a vertex, and the last face uses the natural map between representable projectives. At evaluation on τ, the augmented chain complex is the bar complex over the faces ≤τ. Appending the terminal face τ gives its contracting homotopy; the alternating deletion terms cancel in dh+hd=1. Strict chains have bounded length, so the normalized resolution is finite. Applying the actual derived Hom to the realized finite resolution and a realized bounded target complex now computes exactly the same finite matrix complex as diagram derived Hom. Therefore the realization functor is fully faithful on the actual derived categories.

For essential image, start with an actual bounded complex A whose cohomology sheaves are P-constructible. Each cohomology sheaf is already realized by the ordinary equivalence. Use the finite ordinary truncation triangles to build A from these cohomology sheaves. Full faithfulness lifts each connecting morphism to the diagram derived category, and its finite cone realizes the next truncation. Induction proves that A is realized. This does not assume that all arbitrary sheaf injectives lie in the constructible category.

All Hom computations used finite sums of finite-dimensional coefficient spaces, finite projective resolutions and finite cochain complexes. Tensor with a field extension is exact and commutes with these finite constructions; it commutes with their kernel/image/cohomology and their composition matrices. This proves the actual ordinary derived-Hom scalar comparison, not merely a same-dimension assertion.

For internal derived Hom, restrict the actual injective Hom construction to a sufficiently small polyhedral neighborhood of a point in an open simplex σ. Open restriction preserves injectives because its exact left adjoint is extension by zero. Such neighborhoods have a finite cell decomposition by their intersections with the incident simplices, all convex, with uniform face incidence. The finite projective/acyclic-star construction just proved computes the restricted Hom cohomology. Affine product charts along σ identify these finite complexes and restriction maps as the point moves in σ, giving locally constant finite-dimensional stalks there. Strict-chain lengths and the two fixed cohomology amplitudes bound the local complexes uniformly, so internal derived Hom is bounded constructible. Field extension commutes with these same finite matrices. This supplies the previously missing local internal-Hom clause.

## Local product projection, used for the Stiefel unit cone

Let pr:V×F→V be a product projection, with bounded constructible B on V and F a finite-type smooth space supplied with a finite deleted-boundary cell model. Choose a finite triangulation/cell model for B on the base chart. On the product polyhedral cells, pr*B is the external product of its base diagram with the constant fiber diagram. Tensor a finite injective-diagram resolution of the base diagram with a finite injective-diagram resolution of the fiber constant diagram. Its terms realize constant coefficient spaces supported on products of closed cells minus deleted boundary. These terms are actually Γ(St(σ)×F,−)-acyclic: their supports intersect the base star in the same convex sets above and the fiber closed cell in a contractible deleted-face set. The independently supplied constant-sheaf/singular comparison and ordinary cochain product comparison compute their actual cohomology, with no reliance on a derived incidence equivalence not yet proved.

The resulting finite double complex on every base open star is the tensor product of its base evaluation complex with the fiber cochain complex C*(F;k). The comparison maps agree with actual restriction and the inverse/direct-image adjunction. Hence they identify the actual derived image locally with

`Rpr_*pr*B ≅ B⊗_k C*(F;k)`,

and identify its unit with B⊗(k→C*(F;k)). Common subdivisions show independence of the displayed finite cell model. This is a local product statement, not a global splitting of the derived image of an associated bundle. If the fiber cohomology vanishes in degrees1…r, the cone belongs to D≥b+r+1 for B≥b. This is exactly the constructible unit-cone input used in the finite equivariant proof, and the finite model proves its field-extension compatibility without tensoring infinite injective products.

## Remaining declared construction inputs

The above derived comparison is complete once the actual finite triangulation and constant-polyhedral analytic sheaf cohomology comparison are supplied. Existence of compatible algebraic Whitney strata, conical control and deleted-boundary triangulations remains the topology author's construction. The constant-sheaf comparison is now separately authored there with exact ID `lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology`; its current proof/carrier must be read before use. Ordinary compact-support derived construction and its localization identities remain the six-functor author's task. Their cited names are real pending dependencies, not audits or proof substitutes. This author owns checking their final exact clauses and correcting the incidence/equivariant consumers after integration.
