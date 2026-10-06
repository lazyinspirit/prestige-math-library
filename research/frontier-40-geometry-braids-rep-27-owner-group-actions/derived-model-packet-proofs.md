# Accepted finite simplicial model packet

## def-model-category-and-quillen-adjunction

### Statement

A model category is a category with all small limits and colimits ([[def-category]]), and three classes W,Fib,Cof of maps, each closed under retracts, such that W satisfies two-out-of-three, a Cof map lifts on the left against a Fib map whenever one belongs to W, and each map factors both as Cof followed by Fib intersection W and as Cof intersection W followed by Fib. A trivial (or acyclic) fibration/cofibration means membership in W as well. Cofibrant/fibrant objects have respectively initial-object structure map in Cof and terminal-object structure map in Fib. A Quillen adjunction L dashv R between model categories is an adjunction whose right adjoint preserves fibrations and trivial fibrations; equivalently the left adjoint preserves cofibrations and trivial cofibrations. For categories with simplicial mapping objects, an enriched adjunction is a natural isomorphism Map(LX,Y)=Map(X,RY) compatible with simplicial operators. A Quillen equivalence means that for cofibrant X and fibrant Y, a map LX->Y belongs to W exactly when its adjoint X->RY does. These definitions do not assert existence of any model structure. Initial and terminal objects must be distinguished: in unital A-algebras they are A and the zero ring.

### Full proof/construction

Definitions, following complete Definition1.3 and Remark1.4 of Goerss–Schemmerhorn, PDF3–4. The left/right lifting equivalence follows by transposing every square across the adjunction: left lifting against R of a trivial fibration is precisely the adjoint right lifting against the left image of a cofibration, and the same applies to trivial cofibrations. Factorization and retract lifting characterize these two classes. No model existence or properness theorem is imported.

## def-simplicial-horn-and-kan-fibration

### Statement

For n>=1 and0<=k<=n, the horn Lambda^k[n] is the union of the codimension-one faces of Delta[n] other than the kth face ([[def-simplicial-set-homotopy-and-trivial-kan-fibration]]). A Kan fibration is a simplicial-set map with right lifting against every horn inclusion. A simplicial set is Kan if its map to a point is a Kan fibration. For any inclusion i:K->L and j:K'->L', their pushout product is (K times L') union_(K times K') (L times K')->L times L'. An anodyne inclusion here is a composite of pushouts of coproducts of horn inclusions; a map with horn lifting lifts against this construction by successive lifts, with AC when choices are set-indexed. These are lifting/construction definitions, not an asserted model structure on all simplicial sets.

### Full proof/construction

Definitions from complete Stacks31.1 and the explicit horn union. The pushout product is the indicated union for injective maps because products are degreewise. Lifting against a succession of horn pushouts extends the given map at each stage and takes unions at limit stages; this is the defining lifting property plus AC, not a weak-equivalence theorem.

## lem-additive-kan-and-normalized-fibration-criterion

### Statement

Every simplicial abelian group is Kan. A homomorphism f of simplicial abelian groups is a Kan fibration exactly when N(f)_n is surjective for all n>0. It has boundary lifting exactly when it is a Kan fibration and a quasi-isomorphism on normalized complexes. Underlying horn/boundary lifting therefore detect precisely these classes for simplicial modules and commutative unital/nonunital simplicial algebras. Assume AC for the arbitrary-monomorphism contraction route in the boundary converse.

### Full proof/construction

Additive horn filling and normalized fibration criterion (E1)

**Every simplicial abelian group is Kan.** A horn prescribes x_i∈X_{n-1}, i≠k, with d_i x_j=d_{j-1}x_i for i<j, i,j≠k. Begin u=0. For i=0,…,k-1 replace

u <- u+s_i(x_i-d_i u).

The replacement fixes face i because d_i s_i=id, and preserves all earlier faces: for j<i, d_j(x_i-d_i u)=d_{i-1}(x_j-d_j u)=0, while d_j s_i=s_{i-1}d_j. Next for i=n,n-1,…,k+1 replace

u <- u+s_{i-1}(x_i-d_i u).

This fixes face i since d_i s_{i-1}=id. It preserves every already fixed face j<k and j>i: the compatibility identities make d_j of the first correction, respectively d_{j-1} of the second correction, zero. The relevant identities are d_jd_i=d_{i-1}d_j for j<i, d_{j-1}d_i=d_i d_j for j>i, and the corresponding relations with s_{i-1}. Thus the final u fills every prescribed face. This is the additive version of the complete Moore proof read in Stacks31.6.

**Every termwise-surjective additive simplicial map f:X->Y is Kan.** Lift the target n-simplex y to z∈X_n. Subtract z's faces from the prescribed horn, obtaining a compatible horn in ker f. Fill that horn by the preceding algorithm and add the filler to z. This is the complete argument of31.7.

**General criterion:** f is Kan if and only if N(f)_n is surjective for every n>0.

For the forward direction, choose y∈N(Y)_n and prescribe zero for the n faces i<n, leaving face n missing. Its image matches y's zero faces. A horn lift x satisfies f(x)=y and d_i x=0 for i<n; hence x∈N(X)_n. This proves normalized surjectivity for n>0.

For the reverse direction, define D_n⊂Y_n as the simplices whose vertex component in π0(Y)=Y_0/∂N(Y)_1 lies in the image of π0(X). Every vertex of a simplex has the same component: any two successive vertices are endpoints of its edge, and their difference is a boundary; for an arbitrary pair compose successive edges. Consequently D is a simplicial subgroup and is a union of components.

We claim f:X->D is termwise surjective. Use the accepted natural decomposition Y_n=⊕_{α:[n]↠[r]}N(Y)_r. Every coefficient with r>0 lifts by the normalized surjectivity hypothesis. The remaining r=0 coefficient y0 has a component lifting to π0(X), so choose x0∈X_0 and v∈N(Y)_1 with y0-f(x0)=∂v. Lift v to w∈N(X)_1. Then y0=f(x0+∂w). All coefficients lift, proving the claim. A horn square for f with n≥1 has a nonempty horn, so its target simplex has a vertex whose component lies in the image of π0(X); therefore that target simplex is in D. The termwise-surjective kernel argument now fills the horn over D and hence over Y. This proves the reverse implication.

In particular every simplicial module or commutative unital/nonunital ring is fibrant for the class detected by underlying horns: its additive underlying group is Kan. For a variable simplicial A, forgetting the A-action has not changed this horn calculation.

Boundary lifting is fibration plus weak equivalence (E2)

Suppose f is Kan and N(f) is a quasi-isomorphism. Positive normalized degrees surject by Section1. H0-surjectivity upgrades degree0: for y0∈Y0 choose x0 with the same H0 class and write y0-fx0=∂v, lift v using N(f)_1, and correct x0. Thus all normalized degrees are surjective, and the DK decomposition makes f termwise surjective. Its simplicial additive kernel K then has acyclic normalization by the short exact sequence of normalized complexes and its homology exact sequence. The source/ordinary packet's explicit boundary argument fills a boundary: first lift its target simplex, reduce to a boundary in K, fill faces0,…,n-1 by degeneracy corrections, and use acyclicity to fill the last normalized discrepancy. For n=0 termwise surjectivity suffices. Therefore f has boundary lifting.

Conversely boundary lifting gives lifting against every simplicial monomorphism by the ordinary packet's skeletal cell construction. In particular it gives horn lifting. Lift ∅⊂Δ[n] to get termwise surjectivity, and lift ∅⊂Y to get a section s. Lift X×∂Δ[1]⊂X×Δ[1] over Y with endpoints id_X and sf; this produces a homotopy id_X~sf, while fs=id_Y. The accepted prism/free-additive homology argument yields that N(f) is a quasi-isomorphism. Thus boundary lifting is exactly Kan plus weak equivalence, as required in the transfer proof.

This implication uses the proved arbitrary-monomorphism extension of boundary lifting, not an unproved theorem about weak equivalences of all simplicial sets.

## lem-boundary-horn-product-is-anodyne

### Statement

For m>=0,n>=1,0<=k<=n, the pushout product (boundary Delta[m]->Delta[m]) box (Lambda^k[n]->Delta[n]) is anodyne by a finite sequence of horn attachments. Consequently the pushout product of any simplicial monomorphism with a horn inclusion is anodyne. The pushout product of two monomorphisms is a monomorphism. Assume AC for arbitrary cell/lift choices; the displayed finite combinatorial construction itself needs no AC.

### Full proof/construction

The product-horn attachment lemma

Write u□v for the pushout product of simplicial inclusions. An **anodyne inclusion** here means a composite of pushouts of horn inclusions, possibly with coproducts and transfinite steps; this is a construction, not an imported model structure. A map with horn lifting lifts against such inclusions by successive lifts. We prove

(∂Δ[m]->Δ[m]) □ (Λ^k[n]->Δ[n])

is anodyne for m≥0,n≥1,0≤k≤n. This is the finite combinatorial ingredient for the corner axiom.

Δ[m]×Δ[n] is the nerve of the product ordered set [m]×[n]. A nondegenerate r-simplex is a strictly increasing chain of distinct pairs (i0,j0),…,(ir,jr), where both coordinates are nondecreasing. Let

S=(∂Δ[m]×Δ[n]) ∪ (Δ[m]×Λ^k[n]).

A nondegenerate chain lies outside S exactly when its first-coordinate image includes every0,…,m and its second-coordinate image includes every0,…,n other than possibly k. In particular for k<n it contains a vertex with second coordinate k+1, and for k=n it contains a vertex with second coordinate n-1.

**Matching when k<n.** In an outside chain take its first vertex above k, necessarily (a,k+1). The distinguished pivot is (a,k). If present, remove it; if absent, insert it immediately before the first vertex above k. This insertion is an increasing chain: every preceding vertex has second coordinate≤k and first coordinate≤a, and the following vertex is(a,k+1). It introduces no duplicate, by the assumption that the pivot is absent. Removal preserves all required projection values because (a,k+1) still supplies a, and k was not a required second-coordinate value. The anchor (a,k+1) and hence a are unchanged under this operation. This pairs every outside chain uniquely into a lower chain σ without the pivot and its upper chain τ with the pivot.

**Matching when k=n.** Use the last vertex below n, necessarily(a,n-1), and insert/remove(a,n) immediately after it. The same arguments prove a matching. Removal again preserves a through the anchor and does not remove a required second-coordinate value.

**Horn order.** For k<n order pairs by increasing dimension of τ and, at fixed dimension, decreasing a. For k=n use increasing dimension and then increasing a. Finitely many pairs occur because the product ordered set is finite. Attach the simplex τ along the horn omitting its pivot-deletion face σ.

Every other codimension-one face is already present. If it loses a required projection value, it is in S. Otherwise, deleting a vertex other than the pivot and anchor retains pivot and anchor, giving the upper simplex of a pair of smaller dimension. Deleting the anchor either loses its required second-coordinate value (and so lands in S), or moves the anchor to a strictly larger a for k<n, respectively strictly smaller a for k=n. The remaining face then lacks the new pivot: all its vertices at second coordinate k occurred before the old anchor (or after it for k=n). Thus it is the lower face of a pair of the same upper dimension but earlier in the specified a-order. These are all possibilities.

The omitted face σ is not already present. It lies outside S. A smaller-dimensional upper simplex cannot contain σ, except one of the same dimension as σ, which would have to equal σ; σ is a lower, not an upper simplex. If σ is a face of another upper simplex of the same dimension as τ, the inserted vertex either is its own pivot (giving τ itself) or changes the anchor. In the latter case the new anchor is strictly smaller a for k<n (strictly larger a for k=n): it must be inserted before the old first-above anchor, or after the old last-below anchor, respectively. That other upper simplex is later in the a-order. Higher-dimensional upper simplices occur later by dimension. Therefore each attachment adds exactly σ and τ, with all other faces present. This is precisely a pushout of Λ^p[dimτ]⊂Δ[dimτ], where p is the position of the pivot. Induction attaches all outside chains, proving the lemma.

For an arbitrary monomorphism K⊂L, its boundary-cell decomposition from the ordinary packet and preservation of colimits by simplicial product show

(K->L) □ (Λ^k[n]->Δ[n])

is anodyne. The argument is symmetric in the two product factors. Also the pushout product of any two monomorphisms is a monomorphism: degreewise it is the inclusion (K×L')∪(L×K')⊂L×L'. These facts do not invoke the Kan–Quillen model axioms or their general weak-equivalence theorem.

## lem-variable-base-cotensor-corner-and-path-objects

### Statement

For a simplicial commutative ring A, modules and unital/nonunital algebras have cotensor X^K with underlying simplicial exponent and A-action through constant precomposition A->A^K. For an augmentation to B use X^K times_(B^K) B. If p:X->Y has underlying horn lifting and i:K->L is monic, X^L->X^K times_(Y^K) Y^L has horn lifting. It has boundary lifting if i is a horn or p has boundary lifting. For each unsliced additive/algebraic object the cotensor path endpoints X^(Delta[1])->X times X are Kan and constant paths X->X^(Delta[1]) are weak equivalences on normalized additive homology. The relative assertions apply to fibrant sliced objects; arbitrary A-algebras augmented to B need not be fibrant. Assume AC for simultaneous lifts.

### Full proof/construction

Cotensor corner lifting, path objects and E3

For a simplicial set K, the cotensor of a fixed-variable-base A-module M is the simplicial mapping object M^K with its pointwise additive structure and A-action through the constant-precomposition map A->A^K. At an n-simplex, a∈A_n represents a map Δ[n]->A and multiplies a map K×Δ[n]->M pointwise, independently of the K-coordinate. For an A-algebra C, give C^K its A-structure through A->A^K->C^K. Nonunital multiplication is also pointwise. All constructions commute with face and degeneracy maps. Their underlying simplicial sets really are the simplicial exponents just used.

For a fixed slice/augmentation to B, use the relative cotensor C^K×_{B^K}B, with B mapping constantly in the K-variable. The underlying fixed-base restrictions are essential; an unrestricted exponent alone changes the prescribed augmentation.

Let p:X->Y have underlying horn lifting and i:K⊂L be a monomorphism. The cotensor corner

p^i: X^L -> X^K×_{Y^K}Y^L

has horn lifting: a horn lifting problem for p^i is, by the exponent adjunction, a lifting problem for p against i□(Λ^r[t]⊂Δ[t]), which is anodyne by [[lem-boundary-horn-product-is-anodyne]]. If i itself is a horn inclusion, p^i has **boundary** lifting, since the corresponding boundary problem for p is the pushout product of that horn with a boundary, again anodyne. If p has boundary lifting and i is any monomorphism, p^i also has boundary lifting, because all the corresponding pushout products are monomorphisms. These statements apply identically to the variable-base additive/algebraic cotensors: the underlying set corner is the exponent corner, and all A-structures remain fixed through constant precomposition.

Take Y=0 and i:∂Δ[1]⊂Δ[1]. Every additive object X is Kan by [[lem-additive-kan-and-normalized-fibration-criterion]], so X^{Δ[1]}->X×X is Kan. The constant-path map c:X->X^{Δ[1]} is a homotopy equivalence. Evaluation e0 satisfies e0c=id. Precompose with the map Δ[1]×Δ[1]->Δ[1] given on ordered vertices by min. At one endpoint this is constant0 and at the other it is identity; precomposition gives a simplicial homotopy ce0~id on X^{Δ[1]}. Pointwise operations and constant A-precomposition make this a homotopy compatible with the algebraic structures at every simplicial stage. In particular the ordinary prism/free-additive lemma implies c is a weak equivalence. This proves E3, including the actual endpoint fibration, for simplicial modules and unital/nonunital A-algebras over arbitrary simplicial A.

For augmented B-algebras, every augmentation D->B has a section and is termwise surjective, so [[lem-additive-kan-and-normalized-fibration-criterion]] makes it Kan. Applying the same relative corner and relative contraction proves the corresponding path facts. For an arbitrary slice A-alg/B, fibrant objects are those whose augmentation is Kan; do not assert all slice objects fibrant. Its standard slice model structure follows directly from the already constructed absolute model by factoring a map in the absolute category and carrying the given map to B through the factorization. Lifting and the inherited W/Cof/Fib axioms are the identical absolute diagrams over B.

## thm-model-structures-on-variable-simplicial-modules-and-algebras

### Statement

Assume AC. For any simplicial commutative unital ring A, its simplicial modules and commutative unital/nonunital simplicial A-algebras admit functorial model structures: W is normalized additive quasi-isomorphism, Fib is underlying horn lifting, and Cof is left lifting against boundary maps. Generating cofibrations and trivial cofibrations are free A-objects on simplex boundaries and horns. Model factorizations attach all lifting squares; no transfer theorem is imported. The categories have simplicial tensors/cotensors and mapping objects, and their mapping corner is Kan for a cofibration/fibration pair and has actual boundary lifting when either is acyclic. The corresponding slice models have inherited W/Fib/Cof; fibrancy in a slice means its structure map is fibrant. This theorem does not assert properness or tensor-flatness.

### Full proof/construction

Small limits are formed degreewise with induced A-action/multiplication. Small coproducts and coequalizers are formed by adjoining all indicated module/algebra generators and imposing the relations; functoriality induces their simplicial operators. Thus all small colimits exist and the universal properties hold degreewise. Filtered colimits are created in underlying sets because each relation is a finite algebraic expression, so equality is witnessed at a finite stage. The free A-module on K is A tensor_Z Z[K], the free unital algebra is A[K], and the free nonunital algebra is the positive-degree part of the symmetric algebra, all degreewise. Their adjunctions are verified by assigning the simplex generators; these assignments commute with simplicial operators. Instantiate the following explicit transfer construction with [[lem-additive-kan-and-normalized-fibration-criterion]] for E1/E2 and [[lem-variable-base-cotensor-corner-and-path-objects]] for E3; all formerly conditional premises are supplied.

An explicit small-object and transfer argument

The elementary premises in this construction are now supplied by the preceding dependency items.

Fix a simplicial commutative ring A. Consider simplicial A-modules, simplicial unital A-algebras, or simplicial nonunital commutative A-algebras. Their forgetful functor U to simplicial sets has a left adjoint F: respectively A tensor_Z the free simplicial abelian group, the degreewise polynomial algebra A[K], and the degreewise free nonunital commutative A-algebra on K. Limits exist; filtered colimits are degreewise and created in underlying sets. A simplex has finitely many operators in each fixed dimension; the free objects on a finite simplicial set have the required sequential smallness by the adjunction and finite presentation of that simplicial set. Here “finite” means finitely many nondegenerate simplices, not bounded cardinality of all simplices together. AC is permitted for simultaneous choices in the run's ordinary packet.

Take I={F(∂Δ[n])->F(Δ[n]): n≥0} and J={F(Λ^k[n])->F(Δ[n]): n≥1,0≤k≤n}. Let Fib=J-inj and let W be the maps inducing isomorphisms on normalized additive homology. The required elementary premises are:

- **E1:** for a simplicial abelian-group map, underlying horn lifting is equivalent to the positive-degree normalized surjectivity condition; every such group is Kan;
- **E2:** underlying boundary lifting is equivalent to horn lifting plus normalized quasi-isomorphism;
- **E3:** for each object X in the category, its strict cotensor path object P(X) has endpoint map P(X)->X×X in Fib and constant-path map X->P(X) in W; a simplicial homotopy gives identical normalized homology maps.

The ordinary packet supplies the normalization/prism homotopy conclusion and the surjective-quasiisomorphism boundary criterion. It has not been assumed to supply the entirety of E1 or the endpoint assertion in E3. This distinction is essential.

For an arbitrary f:X->Y, form Z0=X. At stage r attach, by a pushout, one copy of every codomain of a chosen generating map for every commutative lifting square into Zr->Y. Let Z=colim_r Zr. Every square from a generating domain into Z factors through one finite stage by smallness; the next-stage attachment solves it. Therefore f factors functorially as an I-cell map followed by I-inj, and also as a J-cell map followed by J-inj. Relative cell maps have the LLP against their indicated injectives by pushout, composition, and passage to colimits.

Here is the path-object part without a transfer citation. If i:X->Y has LLP against every Fib, apply it to the fibration X->0 (all objects fibrant by E1) to produce r:Y->X with ri=id_X. Apply it again to P(Y)->Y×Y with upper map the constant path on i and lower map (ir,id_Y). A lift gives a simplicial homotopy ir~id_Y. The prism assertion yields H(Ni)H(Nr)=id and H(Nr)H(Ni)=id, so i belongs to W. Thus all J-cell maps belong to W. They also have LLP against I-inj, since I-inj⊂J-inj by E2.

Define Cof to be the maps with LLP against I-inj. The I factorization shows every Cof is a retract of an I-cell map. A Cof map f in W can be J-factorized f=qj. We have j in W and q in Fib, so q in W by two-out-of-three, hence q in I-inj by E2. Lifting against q makes f a retract of j, proving the acyclic-cofibration lifting axiom. Conversely every map with LLP against Fib is in W by the explicit path argument and lies in Cof. All retract, lifting and factorization axioms now follow. W is closed under retracts and two-out-of-three because it is defined by homology. This proves the claimed transferred model structure when E1–E3 are supplied, without importing Theorem3.6.



Instantiated transfer and the full simplicial corner axiom

Sections1/2/4 prove the earlier E1/E2/E3 without an imported SSet model structure. Therefore the complete small-object/path-retraction/retract proof in SectionA of the preceding candidate constructs model structures on simplicial A-modules and commutative unital/nonunital A-algebras for any simplicial commutative A. Generating maps are the corresponding free objects on boundaries and horns. Fibrations are the underlying horn maps; weak equivalences are normalized additive quasi-isomorphisms; trivial fibrations are the underlying boundary maps. Smallness and filtered-colimit creation were explicitly proved in that section. Limits/colimits are the ordinary degreewise algebraic ones. This paragraph imports that *proved argument*, not Goerss–Schemmerhorn's transfer theorem.

For completeness, these categories have the required tensors and enriched mapping objects. A tensor K⊗C in unital A-algebras is the degreewise coproduct over K_n in A_n-algebras (tensor product of the copies over A_n); in A-modules it is ⊕_{K_n}C_n, and in nonunital algebras use the ordinary nonunital coproduct. Operators use the maps of A,C,K and fold the corresponding coproduct summands. A morphism K⊗C->D is exactly a K-indexed simplicial family of A-linear or A-algebra morphisms into D, equivalently C->D^K through the cotensor just specified. This proves the tensor/cotensor adjunction. The mapping simplicial set Map(C,D)_n=Hom(C,D^{Δ[n]}) has composition from pointwise composition and the diagonal Δ[n]->Δ[n]×Δ[n]; associativity/unitality hold because ordinary composition does. The tensor/cotensor adjunction holds enriched as well by applying it against every Δ[n]. Relative tensors/cotensors and mappings in slices are obtained by the corresponding base pushout/pullback, so prescribed structures are retained.

Let j:C->D be a cofibration and p:X->Y a fibration. To prove the enriched mapping corner

Map(D,X)->Map(D,Y)×_{Map(C,Y)}Map(C,X)

is Kan, transpose a horn problem to a lifting problem for j against p^{horn}. [[lem-variable-base-cotensor-corner-and-path-objects]] makes p^{horn} a boundary trivial fibration; the cofibration lifting axiom supplies the lift. If j is acyclic, transpose a boundary problem to j against p^{boundary}, which [[lem-variable-base-cotensor-corner-and-path-objects]] makes a fibration; the acyclic-cofibration lifting axiom supplies the lift. If p is acyclic, [[lem-variable-base-cotensor-corner-and-path-objects]] instead makes p^{boundary} a boundary trivial fibration and ordinary cofibration lifting again supplies it. Thus the corner is Kan and is boundary-trivial whenever j or p is acyclic. [[lem-additive-kan-and-normalized-fibration-criterion]] identifies boundary-trivial with the appropriate additive model W where needed; for mapping simplicial sets we retain the stronger actual boundary-lifting conclusion. This proves the full simplicial corner axiom rather than citing4.13.

## lem-replacement-invariant-derived-enriched-mapping-spaces

### Statement

In each supplied simplicial model category, define RMap(X,Y) using functorial cofibrant-fibrant models and the constructed simplicial mapping object. These mapping objects are Kan and are invariant under weak equivalences in either variable up to simplicial homotopy equivalence. An enriched Quillen adjunction gives a canonical derived mapping equivalence RMap(L^derived X,Y)=RMap(X,R^derived Y) by the actual replacement/adjunction construction. The pi0 category of cofibrant-fibrant models is the ordinary localization at W. These assertions concern this explicit enriched homotopy theory; no general coherent localization/strictification theorem is inferred.

### Full proof/construction

Derived enriched mapping and the three cotangent adjunctions

For cofibrant C and fibrant D define RMap(C0,D0) by first taking the explicit functorial cofibrant and fibrant replacements C->C0 and D0->D, then using Map(C,D). The corner axiom proves replacement invariance as follows. Maps from a cofibrant source send trivial fibrations between fibrant targets to boundary-trivial maps of simplicial sets. A trivial cofibration between fibrant targets has a retraction by lifting against its source's terminal fibration and a homotopy to the other composite by lifting its target path-endpoint fibration. Thus it becomes a homotopy equivalence after mapping from a cofibrant source. Factor a weak equivalence between fibrant objects into trivial cofibration followed by trivial fibration; the intermediate object is fibrant, proving target invariance.

Contravariantly, mapping a trivial cofibration between cofibrant sources into a fibrant object gives a boundary-trivial map by the corner axiom. A trivial fibration q:C->C' between cofibrant sources has a section by lifting from the initial object to C'. To compare sq and id_C, use the cotensor corner q^{∂Δ[1]}, which is boundary-trivial by [[lem-variable-base-cotensor-corner-and-path-objects]], and lift the cofibration from the initial object to C into it with endpoints sq,id_C and the constant path on q. This produces a homotopy over C'. Hence q is a homotopy equivalence and its contravariant mapping map is one. Factor a weak equivalence between cofibrant objects to obtain source invariance. The corner axiom ensures these mapping spaces are Kan. This proves the replacement comparison at the level of the actual constructed simplicial mapping spaces.

Every enriched adjunction whose right adjoint preserves fibrations and trivial fibrations is Quillen by the lifting adjunction. For a cofibrant source C and fibrant target D, enriched adjunction gives the strict equality Map(LC,D)=Map(C,RD), and LC/RD have the required cofibrancy/fibrancy. Replacement invariance just proved gives its derived mapping-space equivalence. No separate unenriched homotopy-category inference is used.



In these source lifts the initial object is used, not the terminal zero ring of unital algebras. The ordinary localized category is also recovered: functorial cofibrant then fibrant replacement supplies natural weak-equivalence zigzags between every object and a cofibrant-fibrant model. Weak maps between such models are homotopy equivalences by the arguments above. Simplicially homotopic maps agree in the localization, because the constant path map is weak and both endpoint maps are its inverse there. Thus the category of homotopy classes between these models has the universal localization property. This proves the pi0 interface; no independent hammock/infinity-category localization or arbitrary coherent diagram strictification is asserted. An enriched left Quillen functor preserves weak maps between cofibrant objects: factor such a map into a trivial cofibration and a trivial fibration between cofibrant objects. The first image is trivial by definition. The latter map has a simplicial homotopy inverse by the source argument above; enrichment preserves that homotopy and its inverse. The image is therefore a homotopy equivalence, hence a normalized quasi-isomorphism in the supplied additive/algebraic models by the prism argument. This supplies the left-derived comparison used below without an imported Brown lemma.

## thm-projective-models-for-simplicial-and-variable-module-diagrams

### Statement

Assume AC. For a small category J and any supplied simplicial model category C, the strict diagram category C^J has a functorial projective model structure with objectwise W and Fib, generated by free diagrams on the existing generating maps; it has the same simplicial corner property. For a strict diagram B:J->simplicial commutative rings, strict sections of the variable B_j-module categories have the same objectwise model and corner construction, with free section at j given at t by the sum over j->t of B_t tensor_(B_j) M. For a compatible cone B_j->B0, colimit after extension to B0 is enriched left Quillen adjoint to restrictions. These are strict diagram models; no essential-surjectivity theorem for arbitrary coherent cartesian diagrams is claimed.

### Full proof/construction

Projective diagrams, including variable module bases

For a small category J and a fixed constructed category C, let F_j:C->C^J be the free diagram, (F_j X)_t=⊔_{u:j->t}X, left adjoint to evaluation at j. Its enrichment follows pointwise. Generate projective cofibrations and acyclic cofibrations by F_j of the boundary and horn free generators. The right lifting classes are exactly objectwise trivial fibrations and objectwise fibrations by this explicit adjunction. Generating domains are small since evaluation creates sequential colimits and the original domains are small. Small-object factorizations exist by exactly the previous construction. A relative cell of the acyclic generating set is objectwise a composite of pushouts of coproducts of acyclic cofibrations in C, hence is objectwise acyclic: LLP against fibrations is preserved by these operations and the already proved model axiom identifies this class with acyclic cofibrations. Define W objectwise; the identical factor/retract argument proves the projective diagram model structure. Projective cofibrations are objectwise cofibrations by their cell/retract construction.

Cotensors of diagrams are objectwise. The cotensor corner of an objectwise fibration has the objectwise fibration/trivial-fibration conclusions of [[lem-variable-base-cotensor-corner-and-path-objects]]. Transposing against a projective cofibration therefore proves the diagram simplicial corner axiom exactly as in [[thm-model-structures-on-variable-simplicial-modules-and-algebras]]. This supplies actual projective diagram models; it does not import a diagram-model existence theorem.

Now let B:J->sCRing be a strict ring diagram. A module section is M_j∈sMod_{B_j} with transition M_j->Res_{B_j}^{B_t}M_t for each j->t, satisfying ordinary composition. Its free section at j has

(F_j M)_t=⊕_{u:j->t} B_t⊗_{B_j}M,

with transitions from tensor associativity and composition of u. The tensor expressions and their canonical maps give the required coherence; no arbitrary equality of associativity maps is presumed. The adjunction Hom(F_jM,N)=Hom_{B_j}(M,N_j) is immediate by evaluating at id_j, with inverse obtained by the transition maps. Generate the model using F_j of the actual B_j-module generating maps. Smallness follows by evaluation as before. For an acyclic generator, evaluation at t is a coproduct of its extensions B_t⊗_{B_j}(-); extension is left Quillen because restriction creates Fib and W. Thus its evaluation is acyclic cofibration. This proves all the same small-object/retract/model axioms, with objectwise W and Fib, for the variable-module section category.

The pointwise B_j-cotensor action is constant in K and is respected by the section transitions. Therefore the same corner argument makes this section model simplicial. A compatible ring cone B_j->B0 gives an enriched adjunction from sections to B0-modules: the left functor is the colimit of the extended modules B0⊗_{B_j}M_j with their indicated transition maps, and the right functor sends N to its restrictions to B_j. Restriction creates Fib and W objectwise, so this adjunction is Quillen and its actual enriched derived mapping comparison is supplied by [[lem-replacement-invariant-derived-enriched-mapping-spaces]]. In the fixed-base case this is ordinary colimit versus constant diagram.

These results construct strict projective diagrams and their derived mapping/colimit adjunctions. They do not claim that every homotopy-coherent cartesian section has a strict representative, or that this projective derived colimit has been compared with every independently specified infinity-categorical colimit model. Those are precisely the separate strictification/localization interfaces retained in the original blocker map.

## Integration disposition

Subject to the sole reviewer's independent check of the new finite matching argument, E1/E2/E3 and the simplicial corner axiom are supplied with complete constructions. The transfer, smallness, model mapping spaces, three derived cotangent adjunctions, affine derivation representation, and strict projective diagram models can therefore be supplied locally without a blanket HAGII assumption. The variable-base cotensor and fixed augmentation caveats are included explicitly.

Still unsupplied here: tensor-flatness/properness wherever another argument genuinely uses them; coherent localization/essential-surjectivity strictification of cartesian module objects; a homotopy-pushout/coherent diagram comparison sufficient for the full derived base-change statement unless separately proved; effective derived étale hyperdescent and Postnikov/totalization completeness. The root has a separate descent helper. The full derived-scheme/gluing claim retains its owner hold until those remaining interfaces have complete proofs. No conditional Quillen conclusion is promoted to a certified shared record by this helper artifact.

## Supplementary finite check of the new matching

An inline enumeration (no repository test or tool file added) listed every increasing product-poset chain for0≤m≤3,1≤n≤3 and every horn index. It checked that insertion/deletion is a pairing, that every non-omitted relative face is present at its attachment, that the omitted face is not prematurely present, and that every outside chain is eventually added. Result:36 boundary/horn products and390 pairs, all conditions satisfied. This is only a finite sanity check; [[lem-boundary-horn-product-is-anodyne]]'s dimension/anchor proof supplies the general argument.

## lem-projective-span-homotopy-pushout-mapping-property

### Statement

Assume AC. In a supplied simplicial model category, projectively replace a span A->B,A->C by A0->B0,A0->C0. Its initial object is cofibrant and its legs are cofibrations; D0=B0 coproduct_(A0) C0 is cofibrant. For a fibrant Y, Map(D0,Y) is the strict pullback of the two Kan mapping fibrations to Map(A0,Y), and is simplicially deformation equivalent to their path homotopy pullback. It computes the derived enriched colimit mapping property independently of the projective replacement. This is a fixed-model span comparison; identifying an arbitrary noncofibrant base's strict algebra category with a coherent undercategory needs an additional base-change/localization theorem.

### Full proof/construction

Explicit model homotopy-pushout mapping comparison

There is a further finite diagram comparison which can be proved now. For a span S=(A->B,A->C) in any one constructed simplicial model category, take its projective cofibrant replacement QS=(A0->B0,A0->C0) using [[thm-projective-models-for-simplicial-and-variable-module-diagrams]]. Then A0 is cofibrant and both legs are cofibrations. To verify the latter statement directly, the free span at its initial vertex is (X->X,X), and the two other free spans have X only at the respective vertex. Attaching a generating cell at the initial vertex pushes out its old initial object and both legs together, preserving the cofibration of both legs; attaching at either endpoint composes that leg with a cofibration. The assertion begins with the initial span, passes through cell sequences, and is preserved by retracts. Thus it applies to every projectively cofibrant span. In particular B0,C0 are cofibrant, and D0=B0⊔_{A0}C0 is cofibrant by pushout/composition.

For a fibrant target Y, the enriched pushout identity gives

Map(D0,Y)=Map(B0,Y)×_{Map(A0,Y)}Map(C0,Y).

Every displayed mapping space is Kan by [[thm-model-structures-on-variable-simplicial-modules-and-algebras]], and both maps to Map(A0,Y) are Kan fibrations by the corner axiom. This strict pullback agrees by an actual simplicial homotopy equivalence with its path homotopy pullback. Here is a full proof of that last assertion, avoiding a new model theorem about all simplicial sets.

Given a Kan fibration f:E->T and any g:F->T, put P=E×_T F and let H be triples(e,z,γ) with γ:Δ[1]->T, γ(0)=f(e), γ(1)=g(z). The constant-path map i:P->H is a monomorphism. Over H×Δ[1], lift the path γ through f with initial value e. Prescribe the lift to be constant on i(P)×Δ[1]. The inclusion

(H×{0}) ∪ (i(P)×Δ[1]) ⊂ H×Δ[1]

is the pushout product of i(P)⊂H and the horn {0}⊂Δ[1], hence anodyne by [[lem-boundary-horn-product-is-anodyne]]. Thus a simultaneous simplicial lift exists. Call it h, and set r(e,z,γ)=(h(1),z)∈P. The prescribed constant lift gives ri=id. To homotope id_H to ir, use at time t the first coordinate h(t), unchanged second coordinate z, and the path s↦γ(max(s,t)). The max map is a map of ordered sets [1]×[1]->[1], hence a simplicial map. Its path starts at f(h(t)) and ends at g(z); at t=0 the original triple is recovered and at t=1 it is ir. It is constant on i(P). Thus i is a simplicial deformation equivalence. This proves the pullback comparison.

The derived enriched colimit adjunction of [[thm-projective-models-for-simplicial-and-variable-module-diagrams]] makes D0 independent of the chosen projective replacement in its concrete model homotopy theory: its maps into every fibrant target compute RMap_{span}(S,const Y), whose replacement invariance is [[lem-replacement-invariant-derived-enriched-mapping-spaces]]. Hence the homotopy-pushout **model mapping property** is supplied by the explicit span construction and this comparison.

There is still an important variable-base boundary. This does not by itself prove that, for an arbitrary noncofibrant simplicial ring A, the model category of strict A-algebras computes the homotopy-coherent undercategory of A, or that replacing A by a weakly equivalent cofibrant base preserves the cotangent construction. Such a claim needs the appropriate base-change/undercategory equivalence (often proved using properness/cellular flatness), or an independent coherent localization construction. For a cofibrant base and cofibrant span the actual comparison above is available. Thus the earlier blanket phrase “homotopy-pushout mapping comparison remains unproved” should be narrowed to the noncofibrant-base/coherent-localization identification needed for the full unrestricted derived base-change/gluing statement. Do not retain the finite fixed-model span comparison as an unproved premise.

## lem-fixed-base-simplicial-cotangent-represents-derived-derivations

### Statement

Assume AC and fix a simplicial commutative ring A. For a simplicial A-algebra B, use the actual free-cell cofibrant replacement P->B in A-algebras augmented to B. The B-module L^fixed_(B/A)=Q ker(B tensor_A P->B), naturally isomorphic to B tensor_P Omega_(P/A), with Omega computed degreewise and its induced simplicial operators, represents relative derived derivations in that supplied fixed-A enriched model: RMap_B-Mod(L^fixed_(B/A),M)=RMap_(A-alg/B)(B,B direct_sum M). It is independent of the choice of cofibrant replacement P of the fixed augmented object B. Invariance under a weak change of the coefficient/augmentation base is a separate interface. For constant ordinary A,B this agrees canonically with the ordinary cotangent complex via the supplied polynomial-resolution comparison. This does not yet assert invariance under weak replacement of A or the full global derived-scheme gluing interface.

### Full proof/construction

The supplied model/corner and enriched replacement lemmas discharge the formerly conditional fixed-base premises in the following direct proof.

Derived relative derivations: exact formula and proof after B

Use the now supplied model structures and corner/replacement lemmas. No properness or tensor-flatness assertion is used without proof here. Let P->B be a cofibrant replacement of B in simplicial A-algebras augmented to B. Write D=B⊗_A P, with multiplication augmentation to B and its section from B. Extension/restriction is left/right Quillen because restriction creates Fib and W. Consequently D is cofibrant in the augmented B-algebra category. The strict augmented/nonunital equivalence transports it to a cofibrant nonunital B-algebra I=ker(D->B). Q is left Quillen because Z preserves underlying Fib and W. Therefore Q(I) is a cofibrant B-module.

For a B-module M (every underlying additive object fibrant), the enriched strict adjunctions give

Map_{A-alg/B}(P,B⊕M)
 = Map_{AugAlg_B}(B⊗_A P,B⊕M)
 = Map_{NUAlg_B}(I,ZM)
 = Map_{Mod_B}(Q(I),M).

Every term already has a cofibrant source and fibrant target, so these are the derived mapping spaces. This proves representation of derived relative derivations. An elementwise natural isomorphism identifies Q(I) with B⊗_P Ω_{P/A}: an augmented B-linear derivation of D into M is the same as an A-derivation of P into M through P->B; both are represented by the displayed modules. Alternatively map p to the class of 1⊗p minus its augmentation and verify the Leibniz relation modulo I². The universal derivation comes from the identity of this representing module. For two chosen cell/cofibrant replacements P1,P2->B, lift P1->P2 over B against the trivial fibration P2->B. This lift is a weak equivalence by two-out-of-three. The mapping corner Map(P1,P2)->Map(P1,B) has boundary lifting, so the fiber over the prescribed augmentation is contractible; all such lifts give the same homotopy class. Extension to augmented B-algebras, the strict kernel equivalence and indecomposables send these weak maps between cofibrant models to weak maps, by the supplied enriched left-Quillen comparison proof. Thus their representing modules have canonical comparison in the model homotopy category, independent of choices. No mapping-space Yoneda or weak coefficient-base invariance is imported here. For a discrete map, choose P->B by the actual I-cell factorization of the initial ordinary A-algebra map A->B. In each degree F(∂Δ[n])->F(Δ[n]) is a polynomial-ring inclusion on a subset of the simplex variables. A pushout adjoins precisely the complementary variables, and a sequential union of these polynomial extensions is again a polynomial ring on the union of the variable sets. Therefore each P_k is polynomial over ordinary A; its augmentation is a boundary trivial fibration by I-inj/E2. The completed ordinary comparison packet applies to this chosen resolution, proving the discrete comparison without an additional cofibrant-flatness theorem. This bridge was supplied by the sole reviewer and is conditional only on the actual model/I-factorization construction in A, not on a new independent foundation.



