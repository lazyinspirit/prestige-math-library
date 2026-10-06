# Concrete derived ringed spaces, coherent diagrams and affine chart recognition

Separate proof-helper candidate for the sole batch23 reviewer,2026-10-04. This artifact alone is written. No item,manifest,decision,readiness,shared plan or engine state is changed. The commissioned definition and current hold in `derived-final-review.md` were read. This packet preserves the full derived-scheme/cotangent claim. Its final comparison uses the separately reviewed authoritative rectification/affine recognition and stable packets;it does not make a shared readiness decision.

## Exact definitions and source readings

Toën,*Derived algebraic geometry*,<https://perso.math.univ-toulouse.fr/btoen/files/2012/04/dag-ems.pdf>,741213 bytes,88 PDF pages,SHA256 `0a25ebd562c4301bfa902bd9b75370a3d906f2c16f7d38529298c1065eb08fa9`. Read the full Definition2.1 and comments(PDF20),the stack/∞-topos paragraph(PDF31),Warning2.4 and the complete definition of sComm(X),dRgSp,mapping spaces,dRgSp_loc,Definition2.5,truncation and affine Spec/global-functions description(PDF32–35). The source says morphisms require a genuine higher-category construction;Warning2.4 explicitly omits composition/coherence details. It asserts affine global-functions/Spec equivalence but does not print a complete affine recognition proof there. It defines sComm(X) as hyperdescent ∞-functors in Fun∞(Open(X)^op,sComm),not merely the ordinary localization of a strict category.

HAGII,<https://arxiv.org/pdf/math/0404373>,2035138 bytes,228 pages,SHA256 `bcd956481bc89f2380d8b7e2def5e17772cc675e7bdbf2cefa38776cc9a90038`. Re-read the full simplicial-ring/module HA context2.2.1(PDF142–145),including its model-theoretic imports and asserted Postnikov tower/completeness,plus the previously read global cotangent definitions1.4.1.15–16. Its model/Postnikov statements alone are not new locally supplied proofs.

Lurie,*Higher Topos Theory*,full PDF newly retrieved from <https://www.math.ias.edu/~lurie/papers/HTT.pdf>,4753810 bytes,949 pages,SHA256 `58855f3a0ad6d9c470ded74a38938b9468927592e9ae1209bab6a068e67ede6e`. Read the complete Proposition4.2.4.4 and proof(PDF276),and complete PropositionA.3.4.12–13/CorollaryA.3.4.14(PDF907–908),plus statement/beginning proof of LemmaA.3.4.15(PDF908–909). The comparison theorem actually assumes a combinatorial simplicial model category,a small simplicial category and its coherent realization equivalence,and a C-chunk. Its proof imports the Joyal/Bergner comparison2.2.5.1,chunk construction and categorical-equivalence/Cartesian-closed statements. Reading this short proof does not recursively close those prerequisites. The following cube-diagram proof supplies a concrete rectification route;it does not pretend to have reconstructed all HTT∞-category foundations.

Inputs already accepted by the sole reviewer are the affine models/enriched mapping packet and the direct local algebraic presheaf/sheaf model in `hagii-direct-local-algebraic-models-candidate.md`. Work on set-sized topological spaces and their open sites,with AC and the same set/universe bounds as those packets.

## 1. Genuine enriched varying-space composition in the concrete model

For each X,use the actual local model category R_X of simplicial commutative ring sheaves on X. Choose its full simplicially enriched subcategory R_X^cf of cofibrant and fibrant objects. Every original strict ring sheaf O has a cofibrant/fibrant replacement: first QO->O,then a trivial cofibration QO->RQO. The second object remains cofibrant. Weak replacement preserves all homotopy sheaves,hence preserves the scheme/QC object conditions.

For continuous f:X->Y,ordinary inverse image is locally left Quillen:it preserves stalk weak maps and takes each represented-open free cell to the free cell on f^-1U. Thus right pushforward f_* is right Quillen. On opens it is literally(f_*O)(V)=O(f^-1V);right pushforwards compose strictly because iterated inverse images of open subsets equal the inverse image of the composite. Pushforward also commutes with the cotensors defining enriched mapping objects,so is an enriched functor.

Define objects to be pairs(X,O_X)with O_X∈R_X^cf,and set

Map_conc((X,O_X),(Y,O_Y))
 = ⨿_{f:X->Y continuous} Map_{R_Y}(O_Y,f_*O_X).

Every summand is Kan:O_Y is cofibrant,and f_*O_X fibrant by the right Quillen property. Composition is actual enriched composition

O_Z -> g_*O_Y -> g_*f_*O_X=(g f)_*O_X.

Associativity and units hold strictly using the displayed pushforward equality and ordinary enriched composition. Thus this is an actual simplicial category,not a list of mapping-space isomorphisms lacking composition. The adjoint description is Map_{R_X}(f^-1O_Y,O_X);f^-1O_Y is cofibrant,so it computes the same derived mapping space.

This construction is independent of cofibrant/fibrant representatives in its concrete homotopy theory. A weak map between cf objects has a homotopy inverse by the accepted corner/path argument. Right pushforward preserves weak maps between fibrant objects:factor such a map as a trivial cofibration between fibrant objects followed by a trivial fibration;the first has a simplicial homotopy inverse,pushforward preserves its cotensor homotopy,and the second is preserved by right Quillen. Hence both factors remain weak. Derived source/target mapping invariance proves replacement-independent summands. Weak sheaf equivalences on the same space become actual equivalences of objects in this enriched category.

## 2. The local-ring condition is exactly a union of components

A point of the f-summand is adjoint to f^-1O_Y->O_X. Its truncation is the ordinary sheaf ring map

f^-1π0(O_Y) -> π0(O_X),

since inverse image preserves the colimit/finite-limit description of π0 sheaves. At each x it gives(π0O_Y)_{f(x)}->(π0O_X)_x. Require these ring homomorphisms to be local. This is exactly the locally ringed-space condition in Toën's dRgSp_loc.

A simplicial homotopy induces the same π0 sheaf map by the additive prism argument,so locality is constant on connected components of the mapping space. Select those components;they remain Kan and closed under composition because local ring maps compose. This supplies the actual nonfull enriched subcategory of derived locally ringed spaces. Importantly,one does not replace π0(f_*O_X) by f_*π0(O_X);those need not agree. The adjoint inverse-image description is the correct way to define the truncation/locality condition.

Within this concrete category,select the full subcategory of objects whose truncation is a scheme and whose higher homotopy sheaves are QC. This is the exact object/morphism condition commissioned in `def-derived-scheme-and-cotangent-complex`,with actual higher mapping spaces and composition. The abstract comparison with Toën's Fun∞ stack definition is supplied by the reviewed authoritative theorem route instantiated in Section5 below.

## 3. Discrete inclusion and correct truncation adjunction

A discrete ring sheaf D is locally fibrant. Its section spaces are discrete and its hypercover totalization reduces to the usual sheaf equalizer in degrees0/1:all higher matching conditions are forced by equality on overlaps. Matching covers give effective gluing of these compatible sections. The proved hypercover characterization therefore applies. Right pushforward of a discrete ring sheaf is discrete and is likewise fibrant.

For cofibrant P and discrete fibrant D,Map(P,D) is discrete:the cotensor D^{Δ[n]}=D because Δ[n] is connected. Its vertices are exactly ordinary ring-sheaf maps π0P->D. A cofibrant replacement of O preserves its homotopy sheafπ0,so

RMap_{R_X}(O,D)=Hom_ring-sheaves(π0O,D),

with the right side discrete. This is the actual derived mapping statement,not an assertion about ordinary global sections of non-discrete sheaves.

Consequently,for an ordinary scheme Y and concrete derived scheme X,each continuous f:Y->X contributes exactly ordinary local sheaf ring maps from π0O_X into f_*O_Y. Selecting the local components yields

Map_conc(iY,X)=Hom_Sch(Y,t0X)

as discrete spaces. This proves that i is fully faithful and left adjoint to t0. The natural ring sheaf map O_X->π0O_X gives the counit j_X:i(t0X)->X. This verifies the commissioned variance directly. It does not rely on reading an ambiguous arrow label in an exposition.

## 4. Explicit strict Spec(A) objects and their local charts

For a simplicial ring A,its0-ring A0 maps constantly into A through degeneracies. Let S=Spec A0 and let G_A be the sheaf of simplicial A0-algebras associated degreewise to the A0-modules A_n. On a principal open D(s),it is A[s^-1],with the degreewise simplicial localization already proved. Therefore

π_i(G_A)=the QC sheaf associated to π_i(A) as an A0-module.

The A0-action on each π_i(A)factors through π0A. Put X=Specπ0A⊂S,with closed immersionj. Outside X,π0(A)localizes to the zero ring;every π_i(A)then vanishes because it is a module over that zero localization. Hence G_A is weakly zero off X. Set O_A=j^-1G_A. Its stalk at q∈X is the corresponding A0-localization A_q. Its truncation is the ordinary structure sheaf of Specπ0A and its higher homotopy sheaves are exactly the QC modules associated to π_i(A)overπ0A. Thus(X,O_A)is an actual strict derived-scheme object.

One can also recover G_A up to weak equivalence by j_*O_A. At points on X,the relative open neighborhoods are cofinal,so the stalks agree;off X,the target is zero and G_A is weakly zero. Thus G_A->j_*j^-1G_A is stalkwise weak. This proves the support part of Toën's Spec construction,without pretending that it proves affine global-functions equivalence.

A strict ring map B->A gives the ordinary continuous/local morphism Specπ0A->Specπ0B and the compatible localized sheaf map. Localization functoriality makes composition strict at this level. A ring weak equivalence induces an isomorphism of the truncation spectra and weak equivalences of the localized stalk rings by the proved localization/weak-base comparisons. Hence Spec preserves the relevant weak presentations. Local fibrant/cofibrant replacement of O_A produces the corresponding object in Section1 without changing its scheme/QC conditions.

The principal refinements of these explicit Spec objects have exactly the simultaneous source/target coefficient localization comparisons already proved in the cotangent candidate. Accordingly the actual local cotangent sheaf comparison is valid on **these** strict charts. This construction proves existence of canonical affine examples and their compatibility. The separately reviewed derived-sections/Milnor recognition packet supplies essential surjectivity for every object with affine truncation;Section6 below supplies its full varying-space mapping comparison.

## 5. A concrete cube-resolution rectification theorem on the open poset

There is a stronger diagram statement which can be proved directly in the accepted affine model,without merely quoting HTT4.2.4.4. Let C be a small poset(indexing the open restrictions),and M the affine simplicial ring model,or affine variable-module model with a fixed coefficient ring. Its cofibrations are degreewise injections,it is left proper,filtered cell unions preserve weak maps,and its free generating domains/codomains are cofibrant.

Define a simplicial category WC with the same objects. For i<j,its mapping object is the union over strict finite chains i=i0<⋯<ir=j of cubes(Δ[1])^{r-1},identifying a face t_s=0 with the chain in which that intermediate vertex is omitted. For i=j use the identity point;for incomparable i,j use the empty set. Compose by concatenating chains and inserting coordinate1 at the join. This is associative and compatible with all face identifications. The augmentation p:WC->C sends the entire mapping object to its composite arrow. Every nonempty mapping object is simplicially contractible:replace every coordinate t by min(t,u)for u∈Δ[1]. This respects the0-face relations;u=1 is identity and u=0 gives the single composite edge. It fixes that edge. Thus the augmentation has an actual mapping-space contraction,not just a claim about its π0. The poset hypothesis avoids nontrivial identity-composite relations.

An enriched WC-diagram is the explicit homotopy-coherent diagram:each chain carries the corresponding cube of compositional coherences. Categories of enriched diagrams on WC and ordinary diagrams on C have projective models. Free evaluation at i has component WC(i,j)⊗D or C(i,j)⊗D. Smallness follows from its evaluation adjunction. Tensoring a generating Cof(or acyclic Cof)with these simplicial sets preserves that class by the accepted literal corner/cell argument,so the projective small-object/retract construction applies. Objectwise weak maps/fibrations are the model classes. All target diagrams are fibrant in the affine model.

Enriched left Kan extension p_! is left adjoint to restriction p^*,which preserves/reflection of objectwise W and Fib. The adjunction is Quillen. Its unit on a free Cof diagram is componentwise

WC(i,j)⊗D -> C(i,j)⊗D,

an actual simplicial homotopy equivalence by the cube contraction. The unit remains weak through Cof cell attachments. At a successor stage,the comparison is a pushout comparison of weak cospans along cofibrations. Here is why the usual gluing assertion applies:all objects in the cell construction are cofibrant;factor the other leg of a cospan into a cofibration followed by a trivial fibration. The replaced span is projectively cofibrant and its pushout computes derived colimit by the proved span model. The replaced pushout maps weakly to the original pushout by left properness along the remaining cofibration. Weak comparison of the cofibrant span replacements is preserved by the actual left Quillen colimit. This proves the desired weak pushout comparison. At limit stages objectwise filtered exactness of normalized homology proves the assertion;retracts finish it for every Cof diagram.

Thus the unit F->p^*p_!F is objectwise weak for every projectively cofibrant F. Since p^* detects W,the usual two-out-of-three Quillen criterion proves a Quillen equivalence. More explicitly,p_! sends cofibrant diagrams to cofibrant diagrams,and affine targets are all fibrant. Enriched adjunction and the weak unit prove mapping-space full faithfulness;cofibrant replacement of p^*D and its counit provide essential surjectivity. This is an actual concrete rectification equivalence with derived mapping spaces on the two diagram enhancements.

For absolute affine rings this shows every cube-coherent ring presheaf has a strict ring presheaf model up to objectwise equivalence. The unit induces the same ordinary homotopy-sheaf diagrams,so the local stalk weak class is preserved. Hypercover descent for the resulting strict models has the actual free-hypercover interpretation supplied by the direct algebraic local model. Therefore the strict local model is a concrete presentation of hyperdescent **cube-coherent** ring diagrams.

### Locally presentable categories and the authoritative full comparison

Small-object smallness alone is not combinatoriality. Here is the exact stronger argument. Presheaf simplicial rings/modules over a fixed coefficient presheaf are models of a finitary many-sorted theory,with sorts(U,n),unary restriction/face/degeneracy operations,binary finite ring/module operations,and the fixed coefficient constants. Choose regular λ above the size of this signature/site/coefficient data. A presentation with fewer thanλ variables and relations is λ-presentable:each map of its variables into a λ-filtered colimit and each of its fewer-thanλ finite equations settle at a common stage. There is a set of such presentations. Every model has the presentation by all its section elements and their operation relations;the subpresentations with fewer thanλ variables/relations form a λ-filtered system (include the finitely many variables used by every chosen relation),and its colimit is the model. Together with the actual algebraic limits/colimits,this proves local λ-presentability.

For sheaves,enlarge λ above every cover/site arrow bound. Inclusion i preserves λ-filtered colimits,because their sectionwise colimits commute with the fewer-thanλ products/equalities of each sheaf covering condition. For a λ-presentable presheaf P,Hom(aP,colim E)=Hom(P,i colim E)=colim Hom(P,iE);hence aP is λ-presentable as a sheaf. Every sheaf E is a λ-filtered colimit of such aP,by applying the colimit-preserving sheafification to the presentation of iE. The set of these aP and the already constructed sheaf limits/colimits prove local presentability. Therefore the affine,presheaf and local sheaf models used here are genuinely combinatorial,since their generating I/J sets were already constructed. This is not an inference from SOA smallness.

The root authorized the exact authoritative HA/HTT theorem route,whose full source proofs and hypotheses were independently checked by the sole reviewer in `hagii-rectification-affine-recognition-candidate.md`. Additionally read here the complete HA1.3.4.20 proof and1.3.4.21/.23/.25 statements/proofs(PDF117–120),using the already retrieved full Higher Algebra PDF: <https://www.math.ias.edu/~lurie/papers/HA.pdf>,6899809 bytes,1553 pages,SHA256 `112b145a95a62daefb8275851cac9ab6430004cfc8f751a33a8d981fd7ad68c3`. The exact comparison is HA1.3.4.20(model enhancement equals infinity-localization),1.3.4.21(Quillen equivalences give infinity-equivalences),1.3.4.23(model homotopy limits equal infinity-limits),and1.3.4.25(strict diagram localization equals the full Fun∞ category). These are imported as checked authoritative theorems;their generic Joyal/Dwyer–Kan foundations are not claimed to have been reconstructed locally.

For the cube description,C[N C]=WC:nondegenerate simplices of N C are strict chains;the coherent realization of each simplex has the Boolean cube of its intermediate vertices,with a0-coordinate deleting that vertex and composition inserting1. The colimit over simplices gives exactly the stated WC relations. HTT4.2.4.4 with S=N C,its coherent realization WC,and the whole combinatorial simplicial ring model as its chunk therefore identifies the **full** coherent-diagram enhancement with Fun∞(N C,sComm). The whole model and its actual projective diagram model satisfy the chunk closure by their factorization axioms;small chunks/universe bookkeeping are the exact A.3.4.15 route read in full through its final proof(PDF908–909). The concrete p_! Quillen equivalence above and HA1.3.4.21 carry this comparison to strict diagrams. This is the required higher-mapping comparison,not an object-level declaration.

The accepted direct local algebraic model selects exactly the hypercover-descending diagrams. HA1.3.4.23 identifies its model limits with the limits in Toën's stack definition;the full subcategory restriction therefore yields the same ring-stack category. The actual sheafification Quillen equivalence gives the strict sheaf presentation. Its inverse-image/pushforward Quillen adjunctions are the ones in Section1,and the authoritative equivalence transports these adjunctions by their universal properties. Thus the varying-space mapping formula and its strict composition present Toën's dRgSp,including full mapping spaces. Section2's local components then present dRgSp_loc. This uses the accepted authoritative theorem route explicitly,rather than claiming that equivalent stalks alone prove the comparison.

## 6. Full affine mapping spaces and natural inverse

The exact inputs in `hagii-rectification-affine-recognition-candidate.md` were read in full and independently checked by the sole reviewer:bounded coskeleton layers,ordinary affine QC acyclicity,compatible additive fibres,and the eventually constant Milnor tower prove A=RΓ(X,O_X),π_iA=Γ(X,π_iO_X),A[a^-1]≃RΓ(D([a]),O_X),and the coherent counit Spec(RΓO_X)≃X for an affine truncation. In particular A≃RΓ(Spec A,O_A). These are derived-section equivalences,not mere stalk matching. We use those completed comparisons;we do not retain their former unbounded recognition hold. The authorized standard-localization input is the full HAGII1.2.9.1 property:restriction from the derived localization gives an equivalence of mapping spaces onto the maps for which the element hasπ0-unit image,and each extension space is contractible. It is natural in simultaneous finite localizations and in targets;the concrete localization was identified with that standard localization in the checked affine packet.

Let X=Spec B and Y=Spec A. Choose valid cofibrant ring representatives and cofibrant/fibrant local sheaf presentations when computing mapping spaces. The constant-ring sheaf/global-sections adjunction is Quillen:constants send affine represented free boundary cells to the free cell supported on the terminal open,and acyclic Cof maps stay stalkwise affine acyclic. Thus for locally fibrant C,

RMap_sheaf(const A,C)=RMap_ring(A,RΓ(Y,C)).

For each continuous f:X->Y put C_f(V)=RΓ(f^-1V,O_B)on the principal affine basis P of Y,including Y. It is the restriction of the derived pushforward ring stack. Derived global sections at Y are B. Precomposing a ring-stack map O_A->Rf_*O_B with the counit const A->O_A therefore gives a natural map

Φ_f:RMap_ring-stacks(Y)(O_A,Rf_*O_B) -> RMap_ring(A,B).

The principal-localization presentation of O_A and hyperdescent identify its left side with derived natural maps of principal diagrams. This identification is of full mapping spaces by Section5's authoritative rectification,not just ordinary natural transformations.

Define T_f⊂RMap_ring(A,B)to be the **union of components** whose inducedπ0 ring maps have underlying continuous spectrum map f. Distinctπ0 ring homomorphisms may have the same f;they remain distinct components/points here. No collapse to the set of continuous maps is made. A local ring-stack morphism over f lands in T_f,by the ordinary affine scheme correspondence applied to its truncation.

Here is an actual full-space inverse argument. Work on I=P^op,whose initial object is Y,with the strict principal localization diagram D_A(V)=A localized at its labels. Use finite-label principal refinements if different elements represent the same open;their ordinary localization comparisons are canonical equivalences,and their inclusion yields the same basis ring stack. Take a projective cofibrant replacement **under constant A** of this diagram:factor const A->D_A as a Cof map const A->QD followed by an objectwise trivial fibration. Constant A is the free diagram at the initial object Y,so it is projectively cofibrant when A is cofibrant;QD is also globally Cof. Its values QD(V)are cofibrant A-algebra models of the required localizations.

Take an objectwise fibrant representative of C_f with its actual restriction maps. All affine ring targets are fibrant,and the coherent/strict diagram theorem permits this strict representative. The literal mapping corner gives a Kan fibration

p:Map_{diagrams}(QD,C_f) -> Map_{diagrams}(const A,C_f)=RMap_ring(A,B).

The last equality is evaluation at the initial basis object:every constant-diagram natural map is determined by its global component,and its homotopy version is the same constant/limit adjunction. For β∈T_f,view C_f as an A-algebra diagram using β followed by the fixed restriction B->C_f(V). Its homotopy fibre is derived coherent natural maps from QD to C_f **under A**.

That fibre is contractible,with all coherence included. To see this,resolve QD by its projective simplicial bar:degree r is the coproduct over chains V0->⋯->Vr in I of the free diagram at Vr on QD(V0),in the category of A-algebras. Its degenerate chains form the latching summands,and the remaining summands are Cof,so the realization is projectively Cof. Its augmentation to QD is objectwise a homotopy equivalence:at W,the strings ending in an arrow to W admit the extra degeneracy appending W;composition gives the augmentation and the identity string W gives its section. The usual prism inserting W after each prefix gives the contraction;all equations are just composition/unit equations. Thus it is a valid Cof resolution. Mapping it into C_f yields the Reedy-fibrant cosimplicial mapping object

N^r=∏_{V0->⋯->Vr} RMap_{A-alg}(QD(V0),C_f(Vr)).

Every factor is contractible. Indeed Vr⊂V0,and if V0=D(a),then f^-1Vr⊂f^-1D(a). Since β'sπ0 map induces f,the image of a is invertible on this inverse-image open;the derived sections on it consequently have thatπ0-unit image. For a finite-label principal localization all its labels are units there. The exact derived localization universal property therefore makes the displayed relative A-algebra mapping space contractible. The assertion includes every parameter simplex;itsπ0 ring map is constant on that simplex,and the mapping-space localization comparison is natural over it.

Products of these Kan contractible spaces are contractible under AC,and their homotopy totalization is contractible because it is the limit of a diagram equivalent to the terminal-space diagram. HA1.3.4.23 supplies the model-to-infinity-limit comparison already authorized. The bar computation proves that this is precisely the fibre of p,not an uncorrelated collection of local choices. Hence p is an equivalence over T_f. Equivalently its inverse extension choices form a contractible space with coherent restriction choices;this is stronger than proving pointwise extension existence.

For precision,not every map over an arbitrary f must be local. The unrestricted diagram-map image can contain β whose induced spectrum map is a pointwise generalization of f. We restrict to p^-1(T_f). Conversely **every** map in that preimage is local:itsπ0 map on a principal open is the unique ordinary localized map extendingβ,by the same universal property. At q∈Specπ0B it is therefore(π0A)_{β^-1q}->(π0B)_q,and β^-1q=f(q);this is a local homomorphism. Thus the local-morphism subspace is exactly p^-1(T_f),and

RMap_dSch,f(Spec B,Spec A) ≃ T_f.

Taking the disjoint union over f retains all ring-map components and gives

RMap_dSch(Spec B,Spec A) ≃ RMap_ring(A,B).

This proves full affine faithfulness,including higher homotopies. Together with the accepted counit recognition it proves the affine equivalence with opposite derived rings.

Naturality is built into Φ:it is the constant/sections derived adjunction followed by the natural affine global-functions equivalence. Composition of ringed maps is right-pushforward composition from Section1;Γ_Y f_*=Γ_X strictly,and adjunction units/counits are natural,so Φ sends it to ring-map composition. The inverse is the coherent localization extension constructed above. Since each fibre is contractible,its inverse is unique as an inverse in the mapping-space category,and that uniqueness gives all compatible higher inverse/naturality choices. On a principal refinement the restriction is the canonical localization comparison,on simultaneous refinements it is the iterated finite-set localization,and on chains these are the actual coefficient-square maps from the earlier cotangent construction. The bar end included all chain coherences,so triple overlaps and parameter simplices are included. This does not infer coherence merely fromπ0 or from unrelated local point choices.

## 7. Final compatibility and disposition

Section5 and the accepted authoritative rectification/affine recognition packet identify the direct local algebraic model with Toën's full fixed-space ring stacks. Section1 supplies the varying-space enriched mapping formula,composition and inverse-image adjunction;Section2 supplies the local-ring subcategory. Section6 supplies full affine mapping faithfulness and coherent localization inverse,while the accepted derived-sections/counit construction supplies all affine charts and essential surjectivity. Thus the commissioned homotopical derived locally ringed-space/strict affine-chart interface is supplied under the exact theorem route authorized by the root and checked by the sole reviewer.

The concrete cotangent construction is compatible with this equivalence:derived equivalences preserve its universal mapping-space representative,the actual global square-zero/indecomposable adjunction computes it,the simultaneous two-chart localization and strict coefficient-square maps give the same principal restrictions,and Section6's inverse mapping construction uses those natural localization comparisons. The accepted stable-realization/localization-applicability packets now realize that connective representative in the full stable O_X-module framework with the required pullbacks/mapping spectra;that former stable hold is no longer retained by this helper. The discrete t0 adjunction and the distinction between full O_X-module and itsπ0 pullback are preserved.

No additional mathematical premise is left open by this varying-space/affine-mapping packet **once the named, separately reviewed model/rectification/affine-recognition/stable inputs are accepted**. It is not a recursive reconstruction of every theorem inside HA/HTT/Hovey;it uses the exact authoritative theorem alternative explicitly authorized for this run. The sole reviewer owns final integration and any shared readiness decision. This helper makes no manifest or status edit.
