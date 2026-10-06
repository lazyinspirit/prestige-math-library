# Candidate: stable realization of the connective cotangent sheaf

Proof-only helper packet,2026-10-04, for the sole batch23 reviewer. This separate artifact does not certify the held derived definition or modify any item, manifest, readiness, plan, or engine state.

## Exact source and conditional premises

Read the complete HAGII §1.2.11, including Definition1.2.11.1, Lemma1.2.11.2 and its entire proof, and coefficient-extension discussion (PDF56–59). Full source <https://arxiv.org/pdf/math/0404373>: 2,035,138 bytes,228 pages,SHA256 `bcd956481bc89f2380d8b7e2def5e17772cc675e7bdbf2cefa38776cc9a90038`. The source defines stable A-modules **by sequential spectra**, with levelwise model structure followed by localization whose fibrant objects satisfy M_n≃RHom_A(S¹_A,M_{n+1}). Thus the construction below matches that definition. No identification with an unrelated external category of dg modules is needed merely to use this framework.

Retrieved Hovey, *Spectra and symmetric spectra in general model categories*, <https://arxiv.org/pdf/math/0004051>,487,114 bytes,45 pages,SHA256 `aff62c63a8d4cc3ba62886bd66a8ca0cbaae9018feab50b8b5b2759d8e970081`. Full text is `/tmp/derive-stable-hovey.txt`. Read the complete level-spectrum construction1.3–1.16, localization§2, stable construction3.1–3.8, telescope discussion4.1–4.9, and coefficient functor construction5.2–5.3. The actual source boundary is important: stable model **existence** uses the imported left Bousfield localization theorem2.2 and a cellularity argument, rather than proving localization from scratch. The telescope4.9 requires almost finite generation; arbitrary hypercover localization need not preserve that hypothesis. This packet does not use that telescope theorem or assert its hypotheses for the present site.

The following are the exact conditional inputs:

1. The global candidate's projective and local **simplicial** module/algebra model structures exist, with functorial replacements, corner axioms, cofibrations from representable cells, local weak equivalences detected on stalk homotopy, and local fibrant targets characterized by hypercover descent. Its strict enriched square-zero adjunction and its sheafified specific-resolution comparison then give K representing relative local derived derivations for connective test modules. These model-existence and sheaf/derived-ringed-space presentation premises remain held, not imported as facts.
2. The affine/localization candidates' checked tensor-flatness, diagonal/total comparison, coefficient weak-equivalence invariance, relative localization, and strict chart presentation give the local QC module K and its pullback/coefficient comparisons. A chart presentation or specified strict compatible chart zigzag is part of that input; existence of arbitrary coherent sheaf presentations is not presumed.
3. For the full model framework, the level-spectrum category admits its localization at the explicit suspension maps below, with the same cofibrations and Ω-spectrum fibrant objects. This is a precise **additional localization-existence premise**. One sufficient source route is a left proper cellular local module model and cellular level spectra, together with the actual localization theorem. Neither the general localization theorem nor its entire cellular applicability proof has been reconstructed here. Calling the local model combinatorial without supplying the appropriate existence theorem also would not discharge this premise.

The constructions and comparisons below prove their claims under these stated premises. The packet does not claim all three are already available locally.

## 1. Suspension and its actual full faithfulness

Let C_B be the conditional local model of simplicial sheaf/presheaf B-modules. Set D=the reduced free simplicial abelian group on Δ[1]/∂Δ[1]. Its normalized complex is Z in homological degree1 and zero elsewhere: the unique nondegenerate one-simplex generates degree1, its two faces vanish after reduction, and all higher simplices are degenerate. The accepted normalization/Dold–Kan decomposition identifies the normalized quotient by degeneracies with this complex.

Define ΣM=M⊗_Z D, equivalently tensor with the free B-module B⊗_Z D. Its right adjoint Ω is the pointed S¹ cotensor with the B-action through the constant map B→B^{S¹}. The local simplicial corner axiom makes Σ⊣Ω Quillen; the boundary inclusion of the basepoint and pointed quotient supply the ordinary tensor/cotensor argument. These are variable-B modules, not modules over a constant coefficient ring.

The actual affine diagonal/total proof in the localization candidate applies to the bisimplicial tensor M_p⊗D_q. It gives normalized ΣM naturally equivalent to the shift NM[1]. It also shows tensoring with D preserves weak equivalences before any cofibrant replacement. Taking stalks commutes with that tensor, normalization and their homology. Hence Σ preserves local weak equivalences and π_i(ΣM)=π_{i−1}(M), with π₀(ΣM)=0.

For a fibrant target, the pointed circle cotensor is the derived based loop object: the endpoint path fibration and its contractible path object give π_i(RΩN)=π_{i+1}(N) for i≥0. At stalks the finite circle/cotensor equations commute with filtered colimits; the corner axiom and the local right-properness argument in the global packet justify these derived fibres. The unit M→RΩΣM induces the identity on π_i under the preceding shift identifications. Indeed a normalized cycle x suspends to x⊗e, where e is the degree1 circle cycle; its adjoint loop is the same suspended cycle, and the path-boundary identification returns x. Thus that unit is a stalkwise homotopy isomorphism and a local weak equivalence.

Consequently the **derived suspension is fully faithful**: the derived enriched adjunction gives

RMap(ΣM,ΣN) ≃ RMap(M,RΩΣN) ≃ RMap(M,N).

This is a proved unit calculation, rather than an assertion that suspension is invertible in the connective category. It is not invertible there: objects with nonzero π₀ are not connective suspensions.

## 2. Concrete full spectrum framework

A prespectrum E consists of B-modules E_n, n≥0, and strict maps ΣE_n→E_{n+1}. Define F_nM in level m to be zero for m<n and Σ^{m−n}M otherwise, with the obvious structure maps. It is left adjoint, including enrichment, to evaluation Ev_n. Limits and colimits exist levelwise; for limits use the natural map Σlim→limΣ, and for colimits use that Σ is a left adjoint.

There is a direct level-model proof once C_B exists. If I,J are its generating cofibrations/acyclic cofibrations, use ∪_nF_nI and ∪_nF_nJ. By adjunction, their injective maps are exactly level trivial fibrations and level fibrations. Every F_n cell is levelwise a cell built from iterated Σ of the original generator; Σ preserves cofibrations/acyclic cofibrations. Their pushouts and transfinite composites therefore have the corresponding levelwise property. Smallness of F_n domains follows from Ev_n commuting with colimits and the original domain smallness. The two small-object factorizations exist. The usual retract argument, applied to an acyclic projective cofibration factored by the J-set, supplies the remaining lifting axiom: its final level fibration is also a level weak equivalence by two-out-of-three, so the original map is a retract of the J-cell factor. This proves the level model without a spectrum citation.

For a cofibrant module G and n≥0 take s_{n,G}:F_{n+1}ΣG→F_nG, adjoint to the identity on ΣG. Localize at these maps for a set of cofibrant homotopy generators sufficient to detect module weak equivalences. On an open site one can use the free B-modules on h_U tensored with simplicial spheres: mapping out computes all homotopy groups of fibrant module sections, and hence detects local weak equivalences between local fibrant targets. Equivalently take cofibrant domains/codomains of the generating cofibrations and the cellular mapping-space detection proof.

The enrichment identifies locality with

Map(G,E_n) → Map(ΣG,E_{n+1}) = Map(G,ΩE_{n+1})

being weak for every detector. Thus the local fibrant prespectra are exactly the level locally fibrant **Ω-spectra**, whose adjoint structure maps E_n→ΩE_{n+1} are local weak equivalences. Under premise3 this is the full stable module model Sp(C_B,Σ), exactly HAGII1.2.11.1 with local sheaf coefficients. It includes spectra not coming from a single connective module; the entire Ω-spectrum framework, not only the suspension spectra, is retained.

The shift E↦(E_{n+1}) and level loop operation are inverse on its derived homotopy theory. The natural map E→shift(ΩE) is a level equivalence for Ω-spectra; shift and level loop commute, giving both inverse identities. These are the formal inverse identities in Hovey3.8. The stability/localization framework and its mapping model remain premise3; the natural identities do not prove localization existence. If one additionally wants a symmetric monoidal category of **all** stable modules, HAGII invokes symmetric spectra; no such unrequested monoidal comparison is used to establish the cotangent representation or the coefficient-extension calculation here.

## 3. Actual realization of K and its mapping spectrum

For a cofibrant representative K from the global adjunction put J_BK=F₀K, so (J_BK)_n=ΣⁿK. Its derived adjoint structure maps ΣⁿK→RΩΣⁿ⁺¹K are weak by §1. A level fibrant replacement of F₀K is therefore already an Ω-spectrum: levelwise weak replacements preserve the adjoint weak-equivalence equations through the derived Ω functor. Its zeroth level represents K. Thus K has a concrete stable realization without any infinite telescope or Postnikov convergence argument.

For any level fibrant Ω-spectrum E, F₀K is a cofibrant source, and the free/evaluation enriched adjunction gives the **actual** derived mapping space

RMap_{Sp}(J_BK,E)=Map_{Sp}(F₀K,E)=Map_{C_B}(K,E₀).

The last space uses the locally fibrant target E₀. In particular RMap_{Sp}(J_BK,J_BM)≃RMap_{C_B}(K,M); J_B is fully faithful on connective modules. There is no replacement of derived global maps by ordinary global sections.

Its mapping **spectrum** is explicitly the sequential spectrum with spaces

H_n=Map_{C_B}(K,E_n).

They are pointed Kan simplicial abelian groups. The maps E_n→ΩE_{n+1}, composed with the enriched pointed-cotensor adjunction, give H_n→ΩH_{n+1}; these are weak because K is cofibrant and the targets are locally fibrant. Thus H is an Ω-spectrum. It models the mapping spectrum from J_BK to E: its level n is the mapping space from J_BK to the n-fold derived shift of E, with the displayed compatible loop maps. Its homotopy groups consequently give all stable shifted morphisms. This calculation does not require a closed symmetric monoidal structure on the entire stable category.

For each n, the frozen global-derived-mapping proof, under premise1, gives a natural equivalence

H_n ≃ Der_A^local(B,E_n).

The zero derivation supplies the basepoint. The right square-zero functor preserves the pointed cotensor, and the enriched adjunction is natural, so these equivalences commute with the Ω-structure maps. Therefore H is also the **stable relative derivation spectrum**, formed from the actual connective square-zero derivation spaces at all spectrum levels. For E=J_BM its level0 is the original square-zero derivation space with connective coefficients M. For a general stable E, its level0 uses the connective evaluation E₀; its negative/positive stable degrees are retained by the other levels. One must not write a literal simplicial ring B⊕E for an unbounded stable spectrum: the stable derivation spectrum is the compatible levelwise construction just given.

The universal derivation is the global packet's universal point at K, embedded by J_B. Its composition property identifies the entire mapping spectrum, not just π₀, because the adjunction equalities and all the spectrum structure maps are natural. This proves the stable representation comparison under the exact connective/global/stable model hypotheses.

## 4. Coefficients and the commissioned truncation pullback

For a ring-sheaf map B→B′ on fixed X, extension L=B′⊗_B(−) and restriction R have the conditional local enriched derived adjunction proved in the global packet. They commute strictly with the suspension tensor D. Therefore they induce levelwise adjunctions on prespectra; restriction preserves level locally fibrant Ω-spectra, because it preserves the underlying presheaf, derived loops, and their weak-equivalence structure maps. Extension takes the localization map s_{n,G} to s_{n,LG}. Thus it respects stable localization under premise3. For the particular connective cotangent one can prove the stable pullback comparison directly, without a general localization criterion:

RMap_{Sp(B′)}(J_{B′}(B′⊗_B^L K),E)
 ≃ RMap_{C_{B′}}(B′⊗_B^L K,E₀)
 ≃ RMap_{C_B}(K,RE₀)
 ≃ RMap_{Sp(B)}(J_BK,RE).

This identifies the stable extension of J_BK with J_{B′}(B′⊗_B^LK). Applying the same equalities to E_n gives the comparison on mapping spectra and proves compatibility with all their structure maps. The canonical extension map, not an arbitrary chosen isomorphism, is used. Composition and identity compatibility come from ordinary associative tensor adjunctions and the already strict coefficient-square cotangent functor.

In particular for j_X:t₀X→X the topological space is unchanged and the coefficient map is B→π₀B. The commissioned stable derived pullback is

j_X*J_BK ≃ J_{π₀B}(π₀B⊗_B^LK).

Since K is cofibrant, its ordinary module tensor computes this derived extension under the tensor-flatness input. It is a complex/stable module over π₀B; it is not the original B-module. Higher homology/Tor can survive, and this formula does not replace the full cotangent object by its π₀-module or zeroth homology. Weak coefficient changes and affine localization squares remain compatible by premise2 and the displayed stable extension identity.

For a map of **different** underlying topological spaces, derived pullback additionally uses the sheaf inverse-image/base-extension adjunction. Its stalk inverse image is exact and commutes with the finite simplicial constructions, but a compatible local simplicial model adjunction must be supplied to derive the mapping comparison. Conditional on that adjunction, the same argument with L=B⊗_{f⁻¹A}f⁻¹(−) proves J commutes with derived pullback. It would be incorrect to claim that exactness of stalk inverse image alone supplies its enriched global derived adjunction. The specific commissioned j_X formula above needs only the fixed-space coefficient adjunction and is already established conditionally on the frozen inputs.

## Disposition for integration

The actual new comparisons are suspension-unit full faithfulness, the level-spectrum small-object model, the concrete stable realization F₀K, the full Ω-spectrum mapping/derivation calculation, and fixed-space coefficient/truncation-pullback compatibility. The full framework is precisely the HAGII sequential-spectrum definition; no unused external dg-category identification remains a purported blocker.

The remaining proved-versus-assumed boundary is local algebra/module model existence and sheaf presentation from the frozen global packet, plus existence of the spectrum localization specified in premise3. Hovey's complete relevant sections were read, but its imported general localization theorem is not recursively proved here. General topological-space-changing pullback also needs its local sheaf inverse-image model adjunction if commissioned beyond the fixed-space j_X clause. Preserve the full-derived hold until these exact model/presentation prerequisites are actually supplied or the sole reviewer constructs another valid full framework. This packet supplies comparisons inside that framework; it does not invent its existence.
