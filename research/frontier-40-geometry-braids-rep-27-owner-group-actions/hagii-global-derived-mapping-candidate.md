# Candidate: the global derived square-zero adjunction

Prepared 2026-10-04 for the sole batch23 reviewer. This is a proof-construction candidate, not certification of `def-derived-scheme-and-cotangent-complex`. Only this separate artifact is changed. The argument proves the mapping adjunction under explicit model-existence hypotheses; it does not pretend those hypotheses have already been proved in the repository.

## Source boundary

Read the full HAGII 1.1.0.7 sheafification example (PDF27–28), 1.2.1.1–1.2.1.6 and all their printed proofs (PDF32–35), 1.3.2's hypercover/model-topos discussion (PDF73–74), 1.3.7.1–1.3.7.7 (PDF95–100), 1.4.1.7–1.4.1.9 (PDF107–108), and the previously read complete1.4.1.15–16/AppendixB. Full PDF <https://arxiv.org/pdf/math/0404373>: 2,035,138 bytes,228 pages,SHA256 `bcd956481bc89f2380d8b7e2def5e17772cc675e7bdbf2cefa38776cc9a90038`. Full extraction used: `/tmp/derive-module-hagii.txt`.

The complete relevant Toën sections previously read are §2.2, §3.1 QC/cotangent, and §4.1, PDF32–35,37–40,53–55 of <https://perso.math.univ-toulouse.fr/btoen/files/2012/04/dag-ems.pdf>: 741,213 bytes,88 pages,SHA256 `0a25ebd562c4301bfa902bd9b75370a3d906f2c16f7d38529298c1065eb08fa9`. The prior finite-module candidate records the complete HS§18 reading and its proof boundary. No new Dwyer–Kan/Quillen theorem is claimed read here.

HAGII explicitly says the **existence** proof for its local projective presheaf model categories is not given (printed21). Its affine universal derivation argument chains derived adjunctions under its HA-context assumptions. This candidate replaces that chain by a direct square-zero adjunction and proves its hypercover compatibility. It still requires actual projective/local simplicial model structures. Toën's gluing statements do not independently prove that existence.

## Exact hypotheses and categories

Let S be a small site of opens of a topological space X, or an affine-open basis enlarged as necessary to cover intersections, with its usual topology. It has enough points. A→B is a morphism of presheaves of simplicial commutative rings. Consider C=(simplicial presheaf A-algebras)/B and D=simplicial presheaf B-modules. Presheaf coefficients and restriction actions vary with the open; they are not replaced by a single constant ring.

The following are **explicit prerequisites**, not claimed consequences of stalk computations:

1. C and D have the projective simplicial model structures with weak equivalences and fibrations detected on each open's underlying simplicial sets. Their generating cofibrations are the free relative algebra, respectively free B-module, applied to representable boundary inclusions; all generating attachments and the simplicial corner axioms exist. A cell factorization is functorial. Evaluation preserves these cells. The fixed-base algebra/module model helper must supply the underlying transfer and corner assertions; the representable-cell construction then supplies their presheaf version.
2. There are local projective simplicial model structures obtained by localization at cofibrant split open hypercovers H→h_U. They have the same cofibrations as the projective structures. Their weak equivalences are isomorphisms on all stalk homotopy groups. Their fibrant objects are the projectively fibrant objects satisfying hypercover descent, and their derived mapping spaces are computed by the enriched mapping spaces from cofibrant sources into such fibrant targets. This hypothesis includes localization existence and the identification with stalk equivalences; neither is inferred from exact sheafification.
3. B is chosen projectively fibrant and hypercomplete as a presheaf. Section4 below explains coefficient replacement under prerequisites1–2 and the tensor-flatness proof in the localization candidate. The analogous double-comma model must represent the homotopical relative maps of derived ringed spaces on fixed X. This final presentation/interpretation is a prerequisite; it is not inferred merely from stalkwise formulas.

For the slice C, use the free-algebra hypercover localization described below. This agrees with the hypercomplete slice over B because B is hypercomplete; a proof is supplied. Taking a nonfibrant base in a localized slice without this comparison would introduce a further gap.

Tests M are simplicial B-modules, equivalently connective derived modules once that module-model comparison is proved. This matches Toën's nonpositive-cohomology test modules for square-zero derivations. An assertion about the entire stable module category additionally requires its stabilization/comparison; it is not proved by this connective argument.

## 1. A strict enriched global adjunction

Define Q:C→D by Q(C)=B⊗_C Ω_{C/A}; define R:D→C by R(M)=B⊕M with structure A→B→B⊕M and augmentation to B. Each construction is degreewise and presheafwise. Restrictions preserve the differential presentation and the multiplication formula (b,m)(b′,m′)=(bb′,bm′+b′m).

An A-algebra map C→B⊕M over B is uniquely c↦(ε(c),d(c)). Its additive/Leibniz equations are precisely d(a)=0 and d(cc′)=ε(c)d(c′)+ε(c′)d(c). They hold in every degree, and the map commutes with simplicial operators and open restrictions iff d does. The differential presentation therefore gives the natural bijection

Hom_C(C,B⊕M)=Hom_D(B⊗_C Ω_{C/A},M).

This is a **global presheaf** adjunction; it includes all compatibility equations, not just stalkwise or sectionwise adjunctions. For enrichment use the relative cotensor: the cotensor of an object C→B in the slice is C^K×_{B^K}B, where B→B^K is constant paths. For B-modules, M^K has its B-action through B→B^K. Pointwise square-zero multiplication yields the strict isomorphism

R(M^K) ≅ (R M)^K×_{B^K}B.

Apply the ordinary natural bijection to K=Δ[n]; it commutes with every simplex operator because all operations above are natural in K. Thus Map_C(C,R M)=Map_D(Q C,M) as actual simplicial sets. This supplies the enrichment of the global adjunction, rather than assuming that a hom-set adjunction derives into mapping spaces.

R preserves projective fibrations and acyclic fibrations: each map is id_B×(M→N) on underlying simplicial sets. Products of the additive Kan objects preserve the indicated lifting properties, and products with B preserve weak equivalences, detected on homotopy groups. Consequently Q⊣R is a projective simplicial Quillen adjunction under prerequisite1. The same statement holds for relative-base cotensors; no constant-base substitution is used.

## 2. Hypercover compatibility of that adjunction

For a simplicial presheaf K, let F_A(K)=A[K] be the free relative algebra. To make it an object of C choose a map σ:K→underlying B. Its augmentation sends generator k to σ(k). Directly from the free differential presentation,

Q(F_A(K),σ)=B⊗_ℤ ℤ[K],

the free B-module on K. The result is independent of the augmentation value; the images of dk are free generators after coefficient extension to B.

For each cofibrant split hypercover H→h_U and each σ:h_U→underlying B, let s_{H,σ} be F_A(H)→F_A(h_U), both augmented by σ. Let t_H be the corresponding free B-module map. All sources and targets are projectively cofibrant: split degeneracies give representable latching inclusions, and the free left Quillen functors preserve their cofibrancy. We have **strictly** Q(s_{H,σ})=t_H.

A projectively fibrant B-module M is t_H-local exactly when

M(U)=Map(h_U,underlying M) → Map(H,underlying M)

is a weak equivalence for every H. These mapping spaces compute hypercover totalizations, since H is cofibrant and M objectwise fibrant; prerequisite2 identifies this condition with hypercompleteness. In particular a locally fibrant M satisfies it.

For C→B projectively fibrant in the slice, mapping out of a cofibrant K gives a Kan fibration Map(K,C)→Map(K,B). The simplicial mapping space in the augmented free-algebra slice is its fiber over σ_K. Since B is hypercomplete, Map(h_U,B)→Map(H,B) is a weak equivalence. Requiring the corresponding fiber map to be a weak equivalence for **every** vertex σ of B(U) is equivalent to requiring Map(h_U,C)→Map(H,C) to be a weak equivalence. Indeed, compare the two Kan fibrations over those weakly equivalent bases; each base component has a vertex, and their fiber homotopy exact sequences give the claim in every component and degree. Thus s_{H,σ}-local projectively fibrant slice objects are exactly hypercomplete C→B over the hypercomplete base B. This proves the stated comparison of the two slice descriptions, subject to existence of the local model.

If M is locally fibrant, R(M)=B⊕M is projectively fibrant over B and underlying B×M is hypercomplete: maps into products and hypercover totalizations commute with products, and both factors have descent. Hence R(M) is locally fibrant in C. Equivalently, the enriched adjunction and Q(s)=t directly identify every s-locality test for R(M) with the t-locality test for M. This calculation is the decisive hypercover compatibility, not a stalk argument.

R also preserves local weak equivalences between modules: its stalk map is id_{B_x}×(M_x→N_x), which is a weak equivalence of additive Kan objects when M_x→N_x is. This will justify replacing a raw target by a locally fibrant one in the next step.

## 3. The actual derived mapping formula

Choose a projective cofibrant replacement P→B in C. It is also a local weak equivalence, and its source remains cofibrant in the local model. Put K=Q(P)=B⊗_P Ω_{P/A}; it is projectively and locally cofibrant by §1. For any M choose a **local fibrant** replacement M→M^f in D. Section2 proves R(M^f) is locally fibrant in C and R(M)→R(M^f) is a local weak equivalence. Therefore the actual local derived mapping spaces are

RMap_D(K,M)=Map_D(K,M^f)

and

Der_A^local(B,M):=RMap_C(B,B⊕M)=Map_C(P,B⊕M^f).

Section1 gives the equality of the two right sides as simplicial sets. Consequently

RMap_D(K,M) ≃ Der_A^local(B,M)

naturally in M. This proves global relative derived derivation representability under the explicit prerequisites. M^f is essential: replacing it by raw M(U) would not compute derived global maps. The proof does not commute ordinary global sections with derived Hom or assert that stalkwise universality is global universality.

The universal derivation is obtained by taking M=K and the local replacement map K→K^f. Its strict adjunct is P→B⊕K^f. Since P represents B in the local model, this determines the derived universal derivation. Composition with a derived module map gives the displayed natural mapping equivalence. Different choices of P represent the same functor; naturality on π₀ and ordinary Yoneda give inverse maps between their representing modules in the local homotopy category, while the formula itself identifies their full derived mapping spaces. No new arbitrary-diagram strictification is used.

The proof of the localized formula avoids an unproved blanket localization-of-Quillen-adjunction theorem: it checks cofibrancy, target fibrancy, target replacement, and the actual enriched adjunction directly. Its essential model-existence assumptions remain prerequisites1–3.

## 4. Sheafification and the affine/stalk comparison

Suppose B is presented by a sheaf of simplicial rings which is also a valid hypercomplete model, so degreewise sheafification a sends B-presheaf modules to B-sheaf modules. For any presheaf module V, V→iaV is a stalkwise isomorphism in every simplicial degree. Normalized homology commutes with taking stalks: each normalized degree is a finite intersection of kernels, and filtered colimits of modules are exact. Hence V→iaV is a local weak equivalence under prerequisite2.

Apply this to K. It follows that iaK and K define the same object of the local module homotopy theory, and the formula in §3 remains true with iaK as representing module. This assertion uses mapping invariance under a **local** weak equivalence and a local fibrant target, not ordinary Hom into the raw sheaf aK. Concretely choose a cofibrant replacement of iaK; the corner and lifting axioms make a weak equivalence between cofibrant sources induce a weak equivalence of mapping spaces into M^f. Factor into acyclic cofibration/acyclic fibration and use the lifting-provided homotopy inverses. Thus every step of the resolution comparison occurs in the correct derived mapping model.

If B is only a hypercomplete presheaf rather than a sheaf, aK is an aB-module. One must use coefficient equivalence along B→iaB, rather than write aK as if its ring were unchanged. This equivalence has a direct proof under prerequisites1–2 and the actual tensor-flatness construction in `hagii-localization-cotangent-gluing-candidate.md`, §§2–3: for a local weak ring map B→B′, extension/restriction of modules is projectively enriched Quillen, and restriction preserves locally fibrant modules because the underlying presheaf and its hypercover descent are unchanged. Extension takes each free B-module hypercover generator to the corresponding free B′-module generator. The same fibrant-target calculation as §§2–3 therefore gives the local derived adjunction. A globally cofibrant representable-cell B-module has a cofibrant germ over B_x: each representable cell has empty or singleton germ and stalks commute with its pushout/union. Cofibrant germ tensor-flatness makes the unit M_x→B′_x⊗_{B_x}M_x weak for every x. Hence its global unit is a local weak equivalence. Restriction detects local weak equivalences. The unit and two-out-of-three now give the usual Quillen-equivalence criterion directly: a derived extended map is weak exactly when its adjoint is. Thus local coefficient replacement is proved **conditional on existence of the local models and the checked tensor-flatness supplier**; it is not another independent mapping-adjunction assumption.

Similarly local algebra right properness follows from the affine right-properness proof in that candidate §3. A local fibration is a projective fibration; finite horn lifting commutes with the filtered stalk colimit, so its stalk is an affine Kan fibration. Stalks preserve pullbacks and local weak equivalences are stalkwise weak. The affine pullback proof therefore proves the local pullback assertion. Postcomposition/pullback along a local weak target B→B^f consequently gives equivalent local target-slice theories by the same fibrant-object pullback and unit/counit argument used in the affine candidate. This allows one to choose the hypercomplete target B^f before applying §§1–3. Identifying these local slice theories with the intended derived ringed-space mapping theory remains prerequisite3.

There is also an explicit local resolution comparison. A projective cell replacement P is built from free A-algebra cells on representable boundaries. At an open V, evaluation replaces the representable by the set of maps V→U. Every cell becomes a coproduct of the corresponding free A(V)-algebra cells, and algebra pushouts are computed openwise. Thus P(V) is cofibrant over A(V); P(V)→B(V) is a projective weak equivalence. Therefore K(V) is the affine cotangent module for the **section-ring** map A(V)→B(V), using the affine derived adjunction supplied by the model helper.

For an open-poset site, the germ of a representable h_U at x is empty or a singleton according as x∉U or x∈U. Stalks preserve free polynomial constructions, cell pushouts, and sequential colimits. The germ P_x is therefore a cofibrant A_x-algebra resolution of B_x. The augmentation remains a weak equivalence because normalized additive homology commutes with the filtered germ colimit. Consequently

(aK)_x = B_x⊗_{P_x} Ω_{P_x/A_x} ≃ L_{B_x/A_x}.

This is a valid comparison of specific resolutions. The separate `hagii-localization-cotangent-gluing-candidate.md` has now been read in full. Its §5 constructs the needed relative localization comparison L_{B₀/A₀}⊗^L_{B₀}(B₀)_q≃L_{(B₀)_q/(A₀)_p}, natural under changing both charts, from affine transitivity, localization vanishing, and the proved weak-base comparisons. Its §§6–7 construct a sectionwise all-lifting-squares resolution commuting with germs and the specific cotangent sheaf with affine/quasi-coherent comparisons. Its explicit §7 hypothesis is a specified strict sheaf presentation with actual chart-to-sheaf coefficient maps, or a specified strict compatible zigzag inducing the canonical localized stalk weak equivalences. Accepting those checked affine proofs **and this presentation hypothesis**, the comparison with the commissioned affine glue is supplied; it should not continue to be described as an unspecified missing localization theorem.

There is an explicit comparison with that candidate's particular resolution. Let P^g be the global projective all-representable-cell resolution used here and P^s(V)=P(A(V),B(V)) the sectionwise all-squares resolution from its §6. Construct P^g_r(V)→P^s_r(V) by induction. The initial map is identity on A(V). A global attaching cell indexed by a square on U, evaluated along V→U, is the free A(V) cell of the restricted square. Compose its upper boundary with the induction map; its lower simplex in B(V) is unchanged. This is one of the actual all-squares cells attached in P^s_{r+1}(V), so map its new generator to that generator. The universal pushout gives the stage map. Restrictions agree strictly because the coefficient-square functor sends precisely these indexed squares to their restrictions. The maps commute with augmentations. Taking the sequential union gives a strict presheaf map P^g→P^s over B.

On each V both resolutions are cofibrant A(V)-algebras and their augmentations to B(V) are weak equivalences; the comparison is weak by two-out-of-three. The affine derived differential adjunction, or its cofibrant homotopy inverse followed by Q, shows the resulting B(V)⊗Ω map K^g(V)→K^s(V) is weak. Thus K^g→K^s is an objectwise weak presheaf map, and their sheafifications are locally weakly equivalent. Section3 consequently proves the global derived mapping universal property for the localization candidate's **specific** sheaf K^s, not merely for an unrelated abstract representative. Its §7 localization argument supplies quasi-coherence and the affine chart comparison under the exact stated presentation hypothesis. This strict resolution comparison closes the interface between the two construction packets.

This identifies exactly which part is proved here: the global mapping adjunction and its invariance under sheafification are supplied once the model hypotheses hold. The localization theorem identifying it with the commissioned affine cotangent glue is an additional exact supplier. Neither raw sections nor germs alone establish that theorem or the mapping adjunction.

## 5. Extra-degeneracy clarification from the sole reviewer

For the coefficient-square-natural relative free-comonad resolution, its extra-degeneracy contraction is a **set-level** simplicial homotopy, natural in the input's simplicial degree. A bisimplicial contraction H_{q,n}:P_{q,n}×Δ[1]_q→P_{q,n} which is natural in n restricts on q=n to a diagonal simplicial-set homotopy: diagonal faces/degeneracies apply both commuting directions and preserve the same formulas. This proves the diagonal augmentation is an underlying-set homotopy equivalence. The augmentation itself is additive. The sole reviewer's already proved interface that an additive simplicial map which is an underlying-set homotopy equivalence induces a normalized quasi-isomorphism applies; the contraction need not be additive. Thus no diagonal spectral sequence is needed for this weak-equivalence conclusion. The actual cofibrancy/cotangent-admissibility of that diagonal remains separate. This clarification narrows the earlier module candidate's diagonal gap without changing that artifact or any carrier.

## Integration boundary

This packet replaces the vague missing phrase “global mapping adjunction” by a precise enriched adjunction, its free-hypercover compatibility, and an explicit derived mapping-space formula with locally fibrant targets. It also gives the specific projective-cell/germ/sheafification comparison. It avoids general HS/B strictification for the specific cotangent construction.

It does not prove existence of the local presheaf simplicial model categories, their stalk/hypercover characterization, or their identification with the commissioned homotopical category of derived ringed spaces. Conditional on those models, it proves the global mapping adjunction, local coefficient equivalence, local target-slice replacement, sheafification invariance, and the strict comparison with the localization candidate's specific cotangent sheaf. The latter candidate supplies affine localization and quasi-coherence under its explicit strict chart-presentation hypothesis. The remaining full-item hold is therefore local-model existence/characterization and the homotopical sheaf/chart presentation interface, together with any affine model premises the sole reviewer has not yet checked. This is a conditional proof supplier with substantially narrowed hypotheses, not a claim that a source citation closes them.
