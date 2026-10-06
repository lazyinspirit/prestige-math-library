# Horn, cotensor path, corner and diagram model proofs

Repair helper packet for the sole batch23 reviewer, 2026-10-04. Write scope is this candidate only. The accepted Dold–Kan packet is SectionF of `hagii-model-foundations-candidate.md`; the original strict three-adjunction helper and ordinary normalization/prism/boundary packet are inputs. No item, carrier, readiness, coverage, ledger, task or engine state is changed here.

This packet supplies actual elementary arguments for E1/E2/E3 and the simplicial corner axiom. It consequently instantiates the preceding cell/retract transfer argument for simplicial modules and commutative unital/nonunital algebras over a variable simplicial ring. It does **not** assert the blanket properness/flatness axioms of a HAG context or the coherent-object strictification theorem.

## Exact sources read

The full Stacks *Simplicial Methods* PDF from <https://stacks.math.columbia.edu/download/simplicial.pdf> was already retrieved for the accepted DK packet: 682694 bytes,71 PDF pages, SHA256 `87847df7287b59afaf814cfffa2a1cd7c431869e1b455d3840ece4e44bbc2015`. Additionally read the complete text of31.1–31.9 (08NU–08P2, PDF57–60), especially Moore's actual two-pass horn-filling proof31.6, the kernel-reduction proof31.7, the normalized acyclic-kernel proof31.8, and31.9's free-additive/prism argument. The source proves the termwise-surjective case; the normalized positive-degree equivalence below is reconstructed locally using the accepted DK splitting. No unpublished source proof is claimed.

Goerss–Schemmerhorn's exact transfer and corner definitions/reductions, read in the preceding candidate (3.5–3.8,4.9–4.17), provide the route. Its statements without printed full proofs are **not** treated as proved imports. The product-horn matching argument below is a new local combinatorial proof from the definitions of simplex, product, horn, and nondegenerate simplex, not a quotation from that paper.

All complexes here are nonnegative homological complexes, and N(X)_n=∩_{i<n}ker d_i has differential ∂=(-1)^n d_n. Weak equivalence of an additive simplicial map means quasi-isomorphism of N, equivalently of the ordinary associated complex by the accepted normalization packet. AC is used in set-indexed choices/cell constructions.

## 1. Additive horn filling and normalized fibration criterion (E1)

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

## 2. Boundary lifting is fibration plus weak equivalence (E2)

Suppose f is Kan and N(f) is a quasi-isomorphism. Positive normalized degrees surject by Section1. H0-surjectivity upgrades degree0: for y0∈Y0 choose x0 with the same H0 class and write y0-fx0=∂v, lift v using N(f)_1, and correct x0. Thus all normalized degrees are surjective, and the DK decomposition makes f termwise surjective. Its simplicial additive kernel K then has acyclic normalization by the short exact sequence of normalized complexes and its homology exact sequence. The source/ordinary packet's explicit boundary argument fills a boundary: first lift its target simplex, reduce to a boundary in K, fill faces0,…,n-1 by degeneracy corrections, and use acyclicity to fill the last normalized discrepancy. For n=0 termwise surjectivity suffices. Therefore f has boundary lifting.

Conversely boundary lifting gives lifting against every simplicial monomorphism by the ordinary packet's skeletal cell construction. In particular it gives horn lifting. Lift ∅⊂Δ[n] to get termwise surjectivity, and lift ∅⊂Y to get a section s. Lift X×∂Δ[1]⊂X×Δ[1] over Y with endpoints id_X and sf; this produces a homotopy id_X~sf, while fs=id_Y. The accepted prism/free-additive homology argument yields that N(f) is a quasi-isomorphism. Thus boundary lifting is exactly Kan plus weak equivalence, as required in the transfer proof.

This implication uses the proved arbitrary-monomorphism extension of boundary lifting, not an unproved theorem about weak equivalences of all simplicial sets.

## 3. The product-horn attachment lemma

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

## 4. Cotensor corner lifting, path objects and E3

For a simplicial set K, the cotensor of a fixed-variable-base A-module M is the simplicial mapping object M^K with its pointwise additive structure and A-action through the constant-precomposition map A->A^K. At an n-simplex, a∈A_n represents a map Δ[n]->A and multiplies a map K×Δ[n]->M pointwise, independently of the K-coordinate. For an A-algebra C, give C^K its A-structure through A->A^K->C^K. Nonunital multiplication is also pointwise. All constructions commute with face and degeneracy maps. Their underlying simplicial sets really are the simplicial exponents just used.

For a fixed slice/augmentation to B, use the relative cotensor C^K×_{B^K}B, with B mapping constantly in the K-variable. The underlying fixed-base restrictions are essential; an unrestricted exponent alone changes the prescribed augmentation.

Let p:X->Y have underlying horn lifting and i:K⊂L be a monomorphism. The cotensor corner

p^i: X^L -> X^K×_{Y^K}Y^L

has horn lifting: a horn lifting problem for p^i is, by the exponent adjunction, a lifting problem for p against i□(Λ^r[t]⊂Δ[t]), which is anodyne by Section3. If i itself is a horn inclusion, p^i has **boundary** lifting, since the corresponding boundary problem for p is the pushout product of that horn with a boundary, again anodyne. If p has boundary lifting and i is any monomorphism, p^i also has boundary lifting, because all the corresponding pushout products are monomorphisms. These statements apply identically to the variable-base additive/algebraic cotensors: the underlying set corner is the exponent corner, and all A-structures remain fixed through constant precomposition.

Take Y=0 and i:∂Δ[1]⊂Δ[1]. Every additive object X is Kan by Section1, so X^{Δ[1]}->X×X is Kan. The constant-path map c:X->X^{Δ[1]} is a homotopy equivalence. Evaluation e0 satisfies e0c=id. Precompose with the map Δ[1]×Δ[1]->Δ[1] given on ordered vertices by min. At one endpoint this is constant0 and at the other it is identity; precomposition gives a simplicial homotopy ce0~id on X^{Δ[1]}. Pointwise operations and constant A-precomposition make this a homotopy compatible with the algebraic structures at every simplicial stage. In particular the ordinary prism/free-additive lemma implies c is a weak equivalence. This proves E3, including the actual endpoint fibration, for simplicial modules and unital/nonunital A-algebras over arbitrary simplicial A.

For augmented B-algebras, every augmentation D->B has a section and is termwise surjective, so Section1 makes it Kan. Applying the same relative corner and relative contraction proves the corresponding path facts. For an arbitrary slice A-alg/B, fibrant objects are those whose augmentation is Kan; do not assert all slice objects fibrant. Its standard slice model structure follows directly from the already constructed absolute model by factoring a map in the absolute category and carrying the given map to B through the factorization. Lifting and the inherited W/Cof/Fib axioms are the identical absolute diagrams over B.

## 5. Instantiated transfer and the full simplicial corner axiom

Sections1/2/4 prove the earlier E1/E2/E3 without an imported SSet model structure. Therefore the complete small-object/path-retraction/retract proof in SectionA of the preceding candidate constructs model structures on simplicial A-modules and commutative unital/nonunital A-algebras for any simplicial commutative A. Generating maps are the corresponding free objects on boundaries and horns. Fibrations are the underlying horn maps; weak equivalences are normalized additive quasi-isomorphisms; trivial fibrations are the underlying boundary maps. Smallness and filtered-colimit creation were explicitly proved in that section. Limits/colimits are the ordinary degreewise algebraic ones. This paragraph imports that *proved argument*, not Goerss–Schemmerhorn's transfer theorem.

For completeness, these categories have the required tensors and enriched mapping objects. A tensor K⊗C in unital A-algebras is the degreewise coproduct over K_n in A_n-algebras (tensor product of the copies over A_n); in A-modules it is ⊕_{K_n}C_n, and in nonunital algebras use the ordinary nonunital coproduct. Operators use the maps of A,C,K and fold the corresponding coproduct summands. A morphism K⊗C->D is exactly a K-indexed simplicial family of A-linear or A-algebra morphisms into D, equivalently C->D^K through the cotensor just specified. This proves the tensor/cotensor adjunction. The mapping simplicial set Map(C,D)_n=Hom(C,D^{Δ[n]}) has composition from pointwise composition and the diagonal Δ[n]->Δ[n]×Δ[n]; associativity/unitality hold because ordinary composition does. The tensor/cotensor adjunction holds enriched as well by applying it against every Δ[n]. Relative tensors/cotensors and mappings in slices are obtained by the corresponding base pushout/pullback, so prescribed structures are retained.

Let j:C->D be a cofibration and p:X->Y a fibration. To prove the enriched mapping corner

Map(D,X)->Map(D,Y)×_{Map(C,Y)}Map(C,X)

is Kan, transpose a horn problem to a lifting problem for j against p^{horn}. Section4 makes p^{horn} a boundary trivial fibration; the cofibration lifting axiom supplies the lift. If j is acyclic, transpose a boundary problem to j against p^{boundary}, which Section4 makes a fibration; the acyclic-cofibration lifting axiom supplies the lift. If p is acyclic, Section4 instead makes p^{boundary} a boundary trivial fibration and ordinary cofibration lifting again supplies it. Thus the corner is Kan and is boundary-trivial whenever j or p is acyclic. Section2 identifies boundary-trivial with the appropriate additive model W where needed; for mapping simplicial sets we retain the stronger actual boundary-lifting conclusion. This proves the full simplicial corner axiom rather than citing4.13.

## 6. Derived enriched mapping and the three cotangent adjunctions

For cofibrant C and fibrant D define RMap(C0,D0) by first taking the explicit functorial cofibrant and fibrant replacements C->C0 and D0->D, then using Map(C,D). The corner axiom proves replacement invariance as follows. Maps from a cofibrant source send trivial fibrations between fibrant targets to boundary-trivial maps of simplicial sets. A trivial cofibration between fibrant targets has a retraction by lifting against its source's terminal fibration and a homotopy to the other composite by lifting its target path-endpoint fibration. Thus it becomes a homotopy equivalence after mapping from a cofibrant source. Factor a weak equivalence between fibrant objects into trivial cofibration followed by trivial fibration; the intermediate object is fibrant, proving target invariance.

Contravariantly, mapping a trivial cofibration between cofibrant sources into a fibrant object gives a boundary-trivial map by the corner axiom. A trivial fibration q:C->C' between cofibrant sources has a section by lifting0->C'. To compare sq and id_C, use the cotensor corner q^{∂Δ[1]}, which is boundary-trivial by Section4, and lift the cofibration0->C into it with endpoints sq,id_C and the constant path on q. This produces a homotopy over C'. Hence q is a homotopy equivalence and its contravariant mapping map is one. Factor a weak equivalence between cofibrant objects to obtain source invariance. The corner axiom ensures these mapping spaces are Kan. This proves the replacement comparison at the level of the actual constructed simplicial mapping spaces.

Every enriched adjunction whose right adjoint preserves fibrations and trivial fibrations is Quillen by the lifting adjunction. For a cofibrant source C and fibrant target D, enriched adjunction gives the strict equality Map(LC,D)=Map(C,RD), and LC/RD have the required cofibrancy/fibrancy. Replacement invariance just proved gives its derived mapping-space equivalence. No separate unenriched homotopy-category inference is used.

The sole owner's strict three-adjunction helper applies: restriction of algebra/module scalars preserves underlying Fib and W; zero multiplication does the same; the augmented/nonunital splitting is an actual enriched categorical equivalence preserving these classes. Thus the three model/enriched Quillen adjunctions used by the preceding candidate's affine representation proof are now instantiated. A cofibrant replacement P->B in A-alg/B yields a cofibrant B-augmented algebra B⊗_A P, a cofibrant nonunital kernel I, and a cofibrant module QI. Chaining the actual enriched adjunctions represents relative derived derivations by QI≅B⊗_PΩ_{P/A} as in that proof. The earlier discrete I-cell polynomial bridge also applies. No properness or cofibrant-flatness premise is used in this affine representation argument.

The constructed enriched model category and replacement-invariant mapping spaces are concrete. Comparing this enriched localization with an arbitrary independently defined infinity-category/hammock localization requires a localization comparison theorem or defining the homotopy theory by this explicit simplicial model. This packet has not asserted that an unproved Dwyer–Kan comparison or coherent-object strictification follows merely from the enriched model axioms.

## 7. Projective diagrams, including variable module bases

For a small category J and a fixed constructed category C, let F_j:C->C^J be the free diagram, (F_j X)_t=⊔_{u:j->t}X, left adjoint to evaluation at j. Its enrichment follows pointwise. Generate projective cofibrations and acyclic cofibrations by F_j of the boundary and horn free generators. The right lifting classes are exactly objectwise trivial fibrations and objectwise fibrations by this explicit adjunction. Generating domains are small since evaluation creates sequential colimits and the original domains are small. Small-object factorizations exist by exactly the previous construction. A relative cell of the acyclic generating set is objectwise a composite of pushouts of coproducts of acyclic cofibrations in C, hence is objectwise acyclic: LLP against fibrations is preserved by these operations and the already proved model axiom identifies this class with acyclic cofibrations. Define W objectwise; the identical factor/retract argument proves the projective diagram model structure. Projective cofibrations are objectwise cofibrations by their cell/retract construction.

Cotensors of diagrams are objectwise. The cotensor corner of an objectwise fibration has the objectwise fibration/trivial-fibration conclusions of Section4. Transposing against a projective cofibration therefore proves the diagram simplicial corner axiom exactly as in Section5. This supplies actual projective diagram models; it does not import a diagram-model existence theorem.

Now let B:J->sCRing be a strict ring diagram. A module section is M_j∈sMod_{B_j} with transition M_j->Res_{B_j}^{B_t}M_t for each j->t, satisfying ordinary composition. Its free section at j has

(F_j M)_t=⊕_{u:j->t} B_t⊗_{B_j}M,

with transitions from tensor associativity and composition of u. The tensor expressions and their canonical maps give the required coherence; no arbitrary equality of associativity maps is presumed. The adjunction Hom(F_jM,N)=Hom_{B_j}(M,N_j) is immediate by evaluating at id_j, with inverse obtained by the transition maps. Generate the model using F_j of the actual B_j-module generating maps. Smallness follows by evaluation as before. For an acyclic generator, evaluation at t is a coproduct of its extensions B_t⊗_{B_j}(-); extension is left Quillen because restriction creates Fib and W. Thus its evaluation is acyclic cofibration. This proves all the same small-object/retract/model axioms, with objectwise W and Fib, for the variable-module section category.

The pointwise B_j-cotensor action is constant in K and is respected by the section transitions. Therefore the same corner argument makes this section model simplicial. A compatible ring cone B_j->B0 gives an enriched adjunction from sections to B0-modules: the left functor is the colimit of the extended modules B0⊗_{B_j}M_j with their indicated transition maps, and the right functor sends N to its restrictions to B_j. Restriction creates Fib and W objectwise, so this adjunction is Quillen and its actual enriched derived mapping comparison is supplied by Section6. In the fixed-base case this is ordinary colimit versus constant diagram.

These results construct strict projective diagrams and their derived mapping/colimit adjunctions. They do not claim that every homotopy-coherent cartesian section has a strict representative, or that this projective derived colimit has been compared with every independently specified infinity-categorical colimit model. Those are precisely the separate strictification/localization interfaces retained in the original blocker map.

## Integration disposition

Subject to the sole reviewer's independent check of the new finite matching argument, E1/E2/E3 and the simplicial corner axiom are supplied with complete constructions. The transfer, smallness, model mapping spaces, three derived cotangent adjunctions, affine derivation representation, and strict projective diagram models can therefore be supplied locally without a blanket HAGII assumption. The variable-base cotensor and fixed augmentation caveats are included explicitly.

Still unsupplied here: tensor-flatness/properness wherever another argument genuinely uses them; coherent localization/essential-surjectivity strictification of cartesian module objects; a homotopy-pushout/coherent diagram comparison sufficient for the full derived base-change statement unless separately proved; effective derived étale hyperdescent and Postnikov/totalization completeness. The root has a separate descent helper. The full derived-scheme/gluing claim retains its owner hold until those remaining interfaces have complete proofs. No conditional Quillen conclusion is promoted to a certified shared record by this helper artifact.

## Supplementary finite check of the new matching

An inline enumeration (no repository test or tool file added) listed every increasing product-poset chain for0≤m≤3,1≤n≤3 and every horn index. It checked that insertion/deletion is a pairing, that every non-omitted relative face is present at its attachment, that the omitted face is not prematurely present, and that every outside chain is eventually added. Result:36 boundary/horn products and390 pairs, all conditions satisfied. This is only a finite sanity check; Section3's dimension/anchor proof supplies the general argument.

## 8. Explicit model homotopy-pushout mapping comparison

There is a further finite diagram comparison which can be proved now. For a span S=(A->B,A->C) in any one constructed simplicial model category, take its projective cofibrant replacement QS=(A0->B0,A0->C0) using Section7. Then A0 is cofibrant and both legs are cofibrations. To verify the latter statement directly, the free span at its initial vertex is (X->X,X), and the two other free spans have X only at the respective vertex. Attaching a generating cell at the initial vertex pushes out its old initial object and both legs together, preserving the cofibration of both legs; attaching at either endpoint composes that leg with a cofibration. The assertion begins with the initial span, passes through cell sequences, and is preserved by retracts. Thus it applies to every projectively cofibrant span. In particular B0,C0 are cofibrant, and D0=B0⊔_{A0}C0 is cofibrant by pushout/composition.

For a fibrant target Y, the enriched pushout identity gives

Map(D0,Y)=Map(B0,Y)×_{Map(A0,Y)}Map(C0,Y).

Every displayed mapping space is Kan by Section5, and both maps to Map(A0,Y) are Kan fibrations by the corner axiom. This strict pullback agrees by an actual simplicial homotopy equivalence with its path homotopy pullback. Here is a full proof of that last assertion, avoiding a new model theorem about all simplicial sets.

Given a Kan fibration f:E->T and any g:F->T, put P=E×_T F and let H be triples(e,z,γ) with γ:Δ[1]->T, γ(0)=f(e), γ(1)=g(z). The constant-path map i:P->H is a monomorphism. Over H×Δ[1], lift the path γ through f with initial value e. Prescribe the lift to be constant on i(P)×Δ[1]. The inclusion

(H×{0}) ∪ (i(P)×Δ[1]) ⊂ H×Δ[1]

is the pushout product of i(P)⊂H and the horn {0}⊂Δ[1], hence anodyne by Section3. Thus a simultaneous simplicial lift exists. Call it h, and set r(e,z,γ)=(h(1),z)∈P. The prescribed constant lift gives ri=id. To homotope id_H to ir, use at time t the first coordinate h(t), unchanged second coordinate z, and the path s↦γ(max(s,t)). The max map is a map of ordered sets [1]×[1]->[1], hence a simplicial map. Its path starts at f(h(t)) and ends at g(z); at t=0 the original triple is recovered and at t=1 it is ir. It is constant on i(P). Thus i is a simplicial deformation equivalence. This proves the pullback comparison.

The derived enriched colimit adjunction of Section7 makes D0 independent of the chosen projective replacement in its concrete model homotopy theory: its maps into every fibrant target compute RMap_{span}(S,const Y), whose replacement invariance is Section6. Hence the homotopy-pushout **model mapping property** is supplied by the explicit span construction and this comparison.

There is still an important variable-base boundary. This does not by itself prove that, for an arbitrary noncofibrant simplicial ring A, the model category of strict A-algebras computes the homotopy-coherent undercategory of A, or that replacing A by a weakly equivalent cofibrant base preserves the cotangent construction. Such a claim needs the appropriate base-change/undercategory equivalence (often proved using properness/cellular flatness), or an independent coherent localization construction. For a cofibrant base and cofibrant span the actual comparison above is available. Thus the earlier blanket phrase “homotopy-pushout mapping comparison remains unproved” should be narrowed to the noncofibrant-base/coherent-localization identification needed for the full unrestricted derived base-change/gluing statement. Do not retain the finite fixed-model span comparison as an unproved premise.
