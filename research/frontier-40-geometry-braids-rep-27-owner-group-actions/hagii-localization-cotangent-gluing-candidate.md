# Weak bases, localization, coefficient squares and a strict cotangent sheaf

Repair-helper candidate for the sole batch23 reviewer, 2026-10-04. Write scope: this file only. It does not certify the global derived definition or edit manifests, readiness, coverage, ledgers or engine state. Inputs are the accepted ordinary diagram/normalization/Dold–Kan helpers, the previous horn/path/corner candidate, and the sole reviewer's strict three-adjunction proof. The global module-descent/sheaf-mapping task is separate.

This packet proves the cellular-flatness and weak-base comparisons actually needed by the affine model route; proves relative localization when **both** charts shrink; and constructs a coefficient-square-natural cotangent presheaf compatible with germs. Its final sheaf conclusion is stated for a specified strict sheaf of simplicial rings presenting the derived charts. Identifying all homotopical sheaf presentations and proving global derived derivation representability still requires a sheaf mapping model. These are distinct assertions.

## Source boundary

Re-read the full printed HAGII Proposition1.2.1.6 and proof (PDF34–35),1.2.9.1–1.2.9.4 and their proofs (PDF51–53), Definition1.4.1.15/Lemma1.4.1.16 and the entire proof (PDF111–112), using the full PDF/extraction already retrieved by the root's descent helper. Full HAGII source: <https://arxiv.org/pdf/math/0404373>,2035138 bytes,228 pages, SHA256 `bcd956481bc89f2380d8b7e2def5e17772cc675e7bdbf2cefa38776cc9a90038`. The exact printed1.2.1.6 proof calls the transitivity/base-change assertions exercises and uses its imported HA context; the reconstruction below supplies them in the explicit simplicial model instead. Its1.2.9 proof imports Bousfield localization. We do not treat that import as a supplied proof; degreewise simplicial localization is computed directly below.

Re-read the complete Stacks Cotangent Lemmas92.8.1–92.8.5 (08QZ,08R0–08R3; PDF17–18 and the following printed assertion) from the existing full-source extraction. Full source: <https://stacks.math.columbia.edu/download/cotangent.pdf>,609250 bytes,48 pages, SHA256 `11ac3f3090cbd582cd4f6c54ff282533104693f6ff233307dfc1b661b510b952`. The ordinary localization-vanishing proof reduces a flat epimorphism to the already proved ordinary comparison with the same target. That ordinary comparison is an accepted local supplier; we use it for the discrete polynomial localization ring only. General simplicial localization is then deduced from the newly proved model base-change argument.

The finite diagram derived-colimit/projective/evaluation roofs used in Section1 below are actual proved local suppliers in `ordinary-packet-proofs.md`, not new source citations. The new cellular filtration, weak-base and germ arguments below are reconstructions; no claim is made that HAGII prints these recursive proofs. AC is allowed and used for projective sums, choices and cell ordering.

## 1. Bisimplicial diagonal and total comparison without an imported EZ theorem

For a bisimplicial R-module X, its diagonal associated complex and its first-quadrant total double associated complex are naturally isomorphic in D(R). The same holds with either or both directions normalized, by the accepted normalization homotopy equivalence.

Here is a complete derived-colimit proof. Regard X as a contravariant module diagram on C=Δ×Δ. For the cosimplicial object U_n=([n],[n]), the simplicial set Mor_C(U_n,([p],[q])) is Δ[p]×Δ[q]. Each factor contracts to vertex0 by the order map min with the constant0 map, and the product contracts coordinatewise. Thus the accepted contractible-cosimplicial-evaluation lemma identifies the diagonal complex s(diag X) with Lcolim_{C^op}X.

For the double total, take the explicit representable-sum projective resolution G_l->X in that diagram category. Form the first-quadrant triple complex s_p s_q G_l with the usual alternating signs on the three directions. Augmentation in l gives Tot(s_p s_q G_l)->Tot(s_p s_q X) a quasi-isomorphism: each evaluation resolution is exact, so the augmented rows in that direction are exact; finite-diagonal cycle elimination proves the total assertion. Augmentation in p,q gives Tot(s_p s_q G_l)->colim G_l a quasi-isomorphism. Indeed, each projective generator has evaluations

R[Hom_Δ([p],[a])×Hom_Δ([q],[b])]
 = R[Δ[a]_p]⊗_R R[Δ[b]_q].

The two simplex augmentations are chain homotopy equivalences onto R by the accepted prism contraction. Tensor their contractions (first contract one direction and then the other) to contract this double total onto R. Direct sums preserve the contractions. Applying finite-diagonal elimination in l proves the augmentation to colim G_l is a quasi-isomorphism. The latter complex computes the actual Lcolim. The two augmentation roofs therefore give the claimed natural comparison. Independence/naturality are the already supplied projective-comparison and diagram-evaluation roof arguments. Every total degree has finitely many triple indices; there is no unbounded-diagonal convergence premise.

In particular, if V and C are simplicial abelian groups/modules with C termwise free over Z, then

N(diag(V_p⊗_Z C_q)) ≃ Tot(NV⊗_Z NC).

Normalization commutes with tensor in the other, constant direction: its finite face-kernel projection is a natural split idempotent, and the identity showing its image is the normalized part persists under tensor. Hence normalizing both directions gives NV_p⊗NC_q. Each NC_q is projective over Z, being a direct summand of the free C_q by the accepted DK splitting. Tensoring a quasi-isomorphism of nonnegative complexes with NC consequently preserves quasi-isomorphisms, by the accepted bounded-above flat-tensor supplier (cohomological reindexing) or its finite-diagonal proof. Thus V↦V⊗_Z C preserves weak equivalences. This is the exact tensor comparison needed below.

## 2. Cofibrant modules and algebras really are tensor-flat

Fix a variable simplicial commutative A. “Tensor-flat” means M⊗_A(-) preserves underlying normalized quasi-isomorphisms of simplicial A-modules; it is a homotopical assertion, stronger than degreewise freeness alone.

For a module boundary cell, the pushout M_old->M_new is degreewise a split injection with quotient

A⊗_Z C_n,  C_n=Z[Δ[n]]/Z[∂Δ[n]].

The quotient C_n is termwise free over Z, with basis the surjective simplex maps. After tensoring an arbitrary module N, the exact quotient sequence remains exact degreewise and its quotient is N⊗_Z C_n. Section1 shows this last functor preserves weak equivalences. Starting with the zero module, the homology exact sequences of these quotient sequences prove inductively that each module cell object is tensor-flat. Filtered colimits are exact on modules and commute with finite normalized face conditions; tensor also commutes with them. Thus the induction passes through all cell limits. A cofibrant module is a retract of such a cell object; its tensor functor is a retract, so it is tensor-flat.

For an algebra boundary cell P_old->P_new, the free algebra map is degreewise an inclusion of polynomial rings on a subset of the simplex-generator set. Pushout substitutes the boundary variables by their assigned elements and freely adjoins the complementary variables. Consequently

(P_new)_k=(P_old)_k[x_θ : θ:[k]↠[n]].

Filter this by total degree in these **new** variables. Every simplicial operator sends a new variable either to another new variable or to its boundary-attaching polynomial in P_old. It never increases new-variable degree. Thus F_r is a simplicial A-submodule, F_0=P_old, and

gr_r F = P_old⊗_Z Sym^r_Z(C_n).

This formula is degreewise the new-variable monomial basis; in the associated graded, an operator hitting a boundary variable sends that positive-degree generator to zero, exactly as the quotient C_n requires. Sym^r(C_n) is termwise free over Z on its monomials. Its normalization is therefore projective over Z by the DK direct-summand decomposition. Section1 shows tensoring with this simplicial Z-module preserves weak equivalences.

The filtration sequences split degreewise as P_old-modules by their monomial bases, hence remain exact after tensoring any A-module N. If P_old is tensor-flat, then (P_old⊗_A N)⊗_Z Sym^r(C_n) preserves weak equivalences in N. Induction on r via the filtration homology exact sequences proves every F_r⊗_A(-) does so. Their filtered union is P_new, and filtered exactness proves P_new is tensor-flat. Begin with the initial algebra A, whose tensor functor is identity. For a coproduct of cells, well-order the set of cells and attach one at a time; the coproduct pushout is their transfinite composite. At limit stages tensor and homology commute with the filtered union. Cofibrant algebras are retracts of these cell algebras, so their underlying A-modules are tensor-flat. This proof handles attaching maps which are arbitrary old polynomials; it never assumes that their ordinary polynomial degree is bounded.

The same result for cofibrant nonunital algebras follows through the actual augmented/nonunital equivalence: its unitalization A⊕I is cofibrant as an augmented A-algebra, hence as an A-algebra; I is a direct summand of its underlying module, so its tensor functor is a retract of a tensor-flat one.

## 3. Weak-base equivalence and concrete coherent undercategories

For a weak equivalence u:A->A', extension/restriction on modules and algebras is enriched Quillen: restriction creates fibrations and trivial fibrations. For a cofibrant A-algebra P, the unit

P -> Res(A'⊗_A P)

is a weak equivalence by Section2 applied to the quasi-isomorphism A->A' of A-modules. Restriction detects weak equivalences. Therefore a map A'⊗_A P->D is weak if and only if its adjoint P->Res D is weak, by two-out-of-three with that unit. This proves the Quillen equivalence directly. The identical argument uses module tensor-flatness for the module adjunction.

More explicitly, restrict the extension functor to the simplicially enriched subcategory of cofibrant objects. All absolute algebra/module objects are fibrant. For cofibrant P,Q, enriched adjunction and target replacement invariance give

Map_{A'}(A'⊗_A P,A'⊗_A Q)
 =Map_A(P,Res(A'⊗_A Q)) ≃ Map_A(P,Q).

For any cofibrant A'-object D, take a cofibrant replacement Q->Res D. Its adjoint A'⊗_A Q->D is weak by the previous criterion. Both are cofibrant/fibrant, so that weak map is a homotopy equivalence by the earlier mapping-model proof. Thus extension is fully faithful on mapping spaces and essentially surjective up to actual model homotopy equivalence. This proves invariance of the concrete enriched enhancement, rather than inferring it solely from an unenriched homotopy-category equivalence.

For a cofibrant base A, the undercategory mapping space itself has the required homotopy-fiber description. A cofibrant replacement P of an A-algebra has A->P a cofibration, and P is absolutely cofibrant. For fibrant D, the map Map(P,D)->Map(A,D) is Kan by the corner axiom; its strict fiber at the specified A-structure is precisely Map_{A-alg}(P,D), and computes the path homotopy fiber by the explicit deformation proof from the previous candidate. For a general A, choose a cofibrant weakly equivalent A0->A. The proven base-change enriched equivalence transfers this description to the strict A-algebra model. Thus the old noncofibrant-base mapping obstruction is closed **in the explicit enriched model**.

This does not identify an unspecified external infinity-category or a sheaf infinity-category with that enhancement without supplying its definition/comparison. It does supply the actual relative affine mapping spaces, their weak-base invariance, and composition-compatible enriched functor needed by the model route.

For use with augmented slices, right properness can also be proved directly. If f:X->Y is a weak additive map and p:Z->Y is Kan, normalization preserves the pullback and Np is epic in positive degrees. For a cycle z in NZ_n, choose a cycle x in NX_n with [f x]=[p z]; their difference is ∂y with y∈NY_{n+1}. Lift y through Np_{n+1} and correct z by that boundary to obtain a cycle pair in N(X×_Y Z). This proves surjectivity on H_n, including n=0. If a cycle pair(x,z) maps to zero in H_n(Z), write z=∂w; H_n(f) injectivity gives x=∂v. The cycle f v-p w in NY_{n+1} has a cycle lift u in NX_{n+1} modulo a boundary ∂t. Replace v by v-u and correct w by the boundary of a lift of t through Np_{n+2}; the two primitives then have matching images and bound the original pair. This proves injectivity. Hence the pullback map to Z is weak. The argument works for rings and fixed-base modules because pullbacks and normalization are detected in their additive groups.

Postcomposition/pullback on slices along a weak target B->B' is Quillen, since pullback preserves fibrations/trivial fibrations. For a fibrant object over B', its pullback comparison is weak by the just-proved right properness; factoring the other side fibrantly and applying two-out-of-three proves the unit is weak as well. The same Quillen-equivalence criterion therefore proves the target-slice equivalence. Together with source-base equivalence this supplies the relative double-category comparisons, with actual enriched mapping spaces.

For completeness, the algebra model is also left proper: a cofibration A->P makes P cofibrant in A-algebras, and Section2 makes its pushout against a weak A->A' weak. The module model is left proper because its cofibrations are degreewise injections (cell/retract construction); pushout preserves a common quotient and the exact homology sequences prove preservation of a weak map. The module monoidal corner axiom reduces on free boundary/horn generators to the free module of the simplicial-set pushout product; Section3 of the horn candidate makes it respectively a boundary-cell or horn-cell inclusion. Tensor preserves colimits/retracts, so this extends to all cofibrations. The unit A is cofibrant. These facts are genuinely proved consequences, not blanket imported HAGII properness/flatness assumptions.

## 4. Canonical affine cotangent base change and transitivity

Write K(A,B)=B⊗_PΩ_{P/A}, where P->B is the chosen functorial cofibrant A-algebra resolution. The strict three-adjunction proof and instantiated model/enrichment show K(A,B) is a cofibrant B-module representing relative derived derivations. In particular ordinary B'⊗_B K(A,B) computes derived module extension.

For a weak coefficient square A->B, A'->B' with both vertical maps weak, P'=A'⊗_A P is cofibrant over A'. Tensor-flatness makes P->P' weak. Since P->B->B' is weak, P'->B' is weak by two-out-of-three. Thus P' is a valid cofibrant model of B' over A'. Ordinary differential base change identifies its representing module exactly as

B'⊗_{P'}Ω_{P'/A'}=B'⊗_PΩ_{P/A}=B'⊗_B K(A,B).

Comparison with the chosen functorial resolution on the other side is canonical at the representing-mapping-space level: the map is obtained by pulling back the universal derivation. This proves the natural cotangent weak-base equivalence, not merely existence of an abstract isomorphism.

For a homotopy pushout square, choose a cofibrant span A0->B0,A0->A1 as in the previous candidate, with cofibrant base and legs. Its strict pushout B1 is cofibrant and has the proved homotopy-pushout mapping property. For a B1-module M, strict pushout adjunction and the homotopy mapping property identify relative A1-derivations on B1 with relative A0-derivations on B0 with coefficients M. The square

B0⊕M -> B1⊕M
 ↓          ↓
B0       -> B1

is a homotopy pullback: it is a strict pullback of the termwise-surjective square-zero projection, and the previous path-pullback proof computes that homotopy pullback. Hence these are the actual derived derivation spaces of the two arrows. Their representatives give the natural equivalence

B1⊗^L_{B0}L_{B0/A0} ≃ L_{B1/A1}.

Enriched representability makes the canonical comparison an equivalence: a natural mapping-space equivalence for all test modules yields inverse morphisms by evaluating on the two representatives' identities; naturality makes both composites identity in π0, and the resulting homotopy inverses give a weak module map. Transfer this cofibrant-span result to any weakly equivalent presentation using the coefficient weak-base and slice equivalences just proved. Thus full affine model homotopy-base-change is now supplied, including originally noncofibrant bases.

For a chain A->B->C, replace the entire chain projectively so A is cofibrant and its two successive maps are cofibrations. For a C-module M, restriction of enriched maps from C to maps from B is a Kan fibration by the corner axiom. Its fiber over the zero B-derivation is precisely the relative B-derivation space of C. Pulling back the square-zero projection to B gives B⊕M, a homotopy pullback as above. Therefore there is the actual homotopy-fiber sequence

Der_B(C,M) -> Der_A(C,M) -> Der_A(B,M).

A homotopy cofiber of C-modules maps into M by the corresponding homotopy-fiber sequence, using the proved projective-span/cofiber mapping property. Applying representation and the same identity-evaluation argument gives the natural transitivity cofiber sequence

C⊗^L_B L_{B/A} -> L_{C/A} -> L_{C/B}.

Weak-base and slice comparisons transfer this to the original chain. This reconstructs HAGII1.2.1.6 in the explicit simplicial model; it does not invoke a global sheaf mapping theorem.

## 5. Exact simplicial localization and two-chart cotangent compatibility

For f∈A_0, form A[f^-1] degreewise, inverting its degeneracy in A_n. These degeneracies commute with every simplicial operator because f is a0-simplex. For an A-module M, its degreewise localization is the filtered colimit of multiplication-by-f maps M->M->…. Filtered colimits of modules are exact; normalization uses finitely many kernels and commutes with this colimit. Hence

π_j(M[f^-1])=π_j(M)[[f]^-1],

and the same formula holds for A. This proves that localization preserves every weak equivalence, and a localization at a π0-unit is a weak equivalence. For a set of elements use the filtered colimit over finite products/subsets; the argument is identical. Localization is exact on every simplicial module, so it is tensor-flat without a cofibrancy hypothesis. Extension/restriction on localized algebra/module categories is enriched Quillen by the underlying fibration classes. Derived extension agrees with this ordinary localization since the latter preserves weak equivalences even before replacement.

The localization cotangent vanishes, with a recursively closed source route. Let S=Z[t_s:s∈E] and T=S[t_s^-1:s∈E], where E is the chosen set of elements of A0. Map S->A by t_s↦s. S is cofibrant as a free ordinary polynomial ring; a cofibrant S-algebra replacement P->A localizes weakly to P⊗_S T->A⊗_S T=A[E^-1] by the exact localization formula. Replace T cofibrantly over S as well. Tensor-flatness of P makes replacing that second leg harmless, so the strict localization square represents the model homotopy pushout of S->A and S->T. The ordinary accepted cotangent comparison gives L_{T/S}=0: T is a flat epimorphism and T⊗^L_S T=T, so ordinary same-target comparison identifies it with L_{T/T}=0 (the complete source is Stacks92.8.1–8.4). The newly proved affine base-change theorem therefore gives

L_{A[E^-1]/A}=0.

No Bousfield-localization existence theorem is used.

Now let A->B, let S⊂A0 and T⊂B0 be multiplicative sets such that B_T inverts the image of S. Transitivity for A->B->B_T and localization vanishing give

B_T⊗^L_B L_{B/A} ≃ L_{B_T/A}.

Transitivity for A->A_S->B_T and the vanishing L_{A_S/A}=0 give

L_{B_T/A} ≃ L_{B_T/A_S}.

Composition gives the exact two-chart comparison

B_T⊗^L_B L_{B/A} ≃ L_{B_T/A_S}.

If images of S are only π0-units in the chosen strict B_T representative, first further localize there: that map is weak by the computed π_* formula and the coefficient weak-base result transfers the comparison back. Stalks use arbitrary multiplicative sets, not a restriction to one principal element. For refinements within a principal affine basis, one may take S,T generated by the relevant finite products. These are all canonical comparison maps induced by universal derivations; the zero-cotangent and transitivity arguments prove that those maps, rather than some unrelated chosen isomorphisms, are weak equivalences.

## 6. Strict coefficient-square-natural resolutions and germs

Use the **actual all-lifting-squares** I-small-object construction, not an arbitrary functorial cofibrant replacement. For an arrow A->B, begin P0=A. At stage r and for every n, attach a copy of F_AΔ[n] for each square

F_A∂Δ[n] -> P_r
       ↓          ↓
F_AΔ[n]     ->  B.

Take the countable union P(A,B). The earlier smallness argument makes P->B a boundary trivial fibration and P cofibrant as an A-algebra. A coefficient square(A,B)->(A',B') carries every such square to its square on the other side. Map the indexed generators accordingly. Pushout universality extends the coefficient map at each stage. Identity and composition hold **strictly**, by induction and pushout uniqueness. Thus this is a functor on the entire arrow category of simplicial rings, with its augmentations natural under coefficient squares.

It commutes with filtered colimits of arrows. A map from Δ[n] or ∂Δ[n] into an underlying simplicial set is specified by finitely many nondegenerate simplices and finitely many face compatibility equations. Hence its Hom functor commutes with filtered colimits; the set of commutative lifting squares is a finite limit of these Hom sets and also commutes with them. Polynomial rings and their coproduct/pushout constructions commute with the resulting filtered colimit of coefficients and variable sets: every polynomial and relation contains only finitely many coefficients/variables. Induction gives P_r commuting with the colimit, and exchanging the sequential r-colimit with the filtered arrow-colimit gives the result for P. This is stronger than fixed-base functoriality and proves the exact coefficient/germ interface needed here.

Differentials and tensor are also defined by finite algebraic expressions/relations, so they commute with filtered colimits. Define

K(A,B)=B⊗_{P(A,B)}Ω_{P(A,B)/A}.

A coefficient square gives a strict semilinear map K(A,B)->K(A',B'), equivalently a B'-linear map B'⊗_B K(A,B)->K(A',B'). Functoriality of P and of universal differentials proves the identity and composition equations; the tensor associativity maps are the canonical ones, with their ordinary coherent identities. Because K(A,B) is cofibrant as a B-module, this ordinary extension computes its derived extension. Thus these strict maps are genuine representatives of the natural affine derived cotangent comparisons. Weak squares give weak maps by Section4; localization squares give weak extended maps by Section5. This gives concrete overlap coherence rather than declaring pairwise isomorphisms compatible without a construction.

For sheaves of simplicial rings A->B on a topological space, apply this arrow functor to their sections on every open and then sheafify degreewise. The coefficient functor makes every restriction a strict map. At a stalk x, the filtered-colimit result gives

P_sheaf,x=P(A_x,B_x),
K_sheaf,x=K(A_x,B_x).

The normalization and its homology commute with stalks: the normalized degree uses finitely many kernels and stalk filtered colimits are exact. Polynomial/differential/tensor sheafification has exactly these germs, since every expression and every relation is finite and represented on some neighborhood. In particular the sheafified augmentation is a weak equivalence on stalks and its stalk resolution is actually cofibrant/trivial-fibrant in the local ring model. This does not say the resulting sheaf resolution is cofibrant for a global sheaf model which has not yet been constructed.

## 7. A single strict cotangent sheaf and its affine comparisons

Suppose a derived morphism is presented by a specified strict sheaf map A=f^-1O_Y->B=O_X with specified actual affine chart-to-sheaf coefficient maps (or a specified strict compatible zigzag) inducing the stated stalk weak equivalences with canonical simplicial localizations. Existence of such chart presentations is an explicit hypothesis here, not inferred from an unnamed infinity-category equivalence. Apply Section6 to this sheaf arrow and set the single simplicial B-module sheaf

K=B⊗_{P_sheaf}Ω_{P_sheaf/A}.

All module actions, simplicial operators and coefficient comparisons exist before passing to homotopy; no arbitrary collection of overlap equivalences needs to be strictified to define this particular sheaf.

On affine U⊂X mapping into affine V⊂Y, with chart rings A_V->B_U, there are the canonical coefficient maps from those rings into the restricted sheaves and their stalks. At x∈U, with q∈Specπ0(B_U) and p=f(x)∈Specπ0(A_V), the chart/stalk maps factor through

(A_V)_p -> (B_U)_q,

up to the specified weak equivalences of the affine presentation. Every element outside p maps outside q, so the target stalk localization inverts the source stalk set. Section5 gives the canonical weak equivalence

(B_U)_q⊗^L_{B_U}L_{B_U/A_V} ≃ L_{(B_U)_q/(A_V)_p}.

Section4 transfers it through the chosen chart-to-stalk weak presentations, and Section6 identifies the latter with K_x. Explicitly take the affine module sheaf J=(O_X|U)⊗_{constant B_U}(constant K(A_V,B_U)), using sheaf tensor and the specified chart coefficient map. Its germ is B_x⊗_{B_U}K(A_V,B_U); cofibrancy of the latter module makes this the derived extension. The strict coefficient-square map of Section6 gives J->K|U. The comparison computed above proves this actual map is a stalkwise quasi-isomorphism. Stalkwise exactness detects quasi-isomorphisms of module sheaves, so J->K|U is a quasi-isomorphism. If the chart presentation is a strict zigzag, the same construction produces the corresponding strict zigzag of sheaf module comparisons; each weak chart leg stays stalkwise weak by Sections2/4. This supplies the comparison without asserting that unproved derived global sections equal ordinary chart sections. Its homotopy sheaves are the ordinary quasi-coherent sheaves associated to π_jL_{B_U/A_V}: localization of a module is exact, so the germ computations above give precisely their module localizations. This proves the quasi-coherence and affine compatibility of the one strict cotangent sheaf.

When both charts shrink the map used is exactly Section5's coefficient-square comparison; for further refinements all diagrams commute through the strict functorial P and Ω constructions of Section6. The canonical comparisons consequently agree on stalks and on triple refinements. The sheaf K itself already has strict restriction maps, so no general arbitrary-object QCoh strictification theorem is needed merely to define or glue this particular K.

**Remaining global boundary.** The ordinary sheaf differential adjunction represents strict sheaf derivations on P_sheaf: B-linear sheaf maps K->M correspond to A-algebra sheaf maps P_sheaf->B⊕M over B, degreewise and enriched, because the local universal formulas glue. It is **not yet a proof of global derived** derivation representation. Stalkwise cofibrancy does not imply global cofibrancy, and ordinary sections of a Hom sheaf do not compute derived global mapping spaces. One must supply a sheaf algebra/module derived mapping model (or an exact affine-basis totalization comparison), valid replacements and the derived sheaf adjunction. Also, if the commissioned definition starts with a general infinity-category-valued sheaf rather than a given strict simplicial-ring sheaf presentation, it needs the corresponding presentation/localization theorem. The present packet proves chart/germ compatibility conditional on that presentation; it does not silently strictify the entire category of derived schemes.

## Precise integration disposition

The following premises now have actual local constructions: bisimplicial diagonal/total comparison; cofibrant module/algebra tensor-flatness; enriched weak-base and target-slice equivalence; concrete noncofibrant affine undercategory mapping; affine cotangent weak-base invariance, transitivity and homotopy base change; derived localization vanishing and simultaneous source/target localization; strictly coefficient-square-natural resolutions commuting with germs; and a single cotangent sheaf with the required affine/quasi-coherent comparisons for a specified strict sheaf presentation.

The remaining hold should concern the **global sheaf-derived mapping/derivation adjunction and the homotopical sheaf presentation/localization interface**, unless another helper supplies them. General arbitrary QCoh hyperdescent is a possible way to supply these; it is not used as an unproved premise of the strict cotangent-sheaf construction above. This candidate does not certify any shared readiness record. All newly reconstructed proofs require sole-reviewer integration and independent mathematical checking.
