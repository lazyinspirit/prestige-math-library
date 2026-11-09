---
id: lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison
kind: lemma
title: One coherent K-flat family and its supplied perfect fibers
status: published
domain: mathematics
deps:
  - thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input
  - thm-author-c5bc2838d897-kcoherent-enhanced-localization-input
  - thm-author-4f716d60801a-derived-enhancement-input
  - math:def-axiom-of-choice
  - def-scheme-perfect-complexes
  - lem-author-c5bc2838d897-kflat-addendum-localization-equivalence
  - lem-author-c5bc2838d897-monoidal-transport-product-family
dependency_roles:
  thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input: mathematical-premise
  thm-author-c5bc2838d897-kcoherent-enhanced-localization-input: mathematical-premise
  thm-author-4f716d60801a-derived-enhancement-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-scheme-perfect-complexes: mathematical-premise
  lem-author-c5bc2838d897-kflat-addendum-localization-equivalence: mathematical-premise
  lem-author-c5bc2838d897-monoidal-transport-product-family: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 5
---

## Statement
Assume AC and use schemes and sheaves in a fixed universe, with larger universes for their categories. There is one coherent diagram

$$\widehat{\operatorname{Perf}}^{\otimes}:\operatorname{Sch}_{qcqs}^{op}\longrightarrow\operatorname{CAlg}(\operatorname{Cat}_{\infty})$$

whose fibers are stable, whose tensor is exact separately in each variable, whose transition functors are exact symmetric monoidal, and whose underlying categories are the perfect full subcategories of K-flat sheaf-complex localizations. Pullbacks are induced by actual degreewise sheaf pullback and products are total tensor. For each X its fiber has an actual exact equivalence to the supplied full sheaf-derived Perf(X), induced by inclusion into all $O_X$-complexes. This identifies the specified fiber enhancement. It does not claim a natural equivalence to a previously chosen diagram of pullbacks on the supplied fibers: that supplier specifies no such diagram. The single common family constructed here supplies the missing coherent diagram.

## Facts & Assumptions
**Given:** AC; all qcqs schemes in a fixed universe; F(X), the ordinary category of K-flat $O_X$-cochain complexes; $W_X$, its quasi-isomorphisms.

**Goal:** Construct the family before identifying its fibers, and verify every family-localization hypothesis.

[F1] [[thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input]] supplies K-flat resolutions, closure under shifts/cones/tensor, and preservation of K-flat objects and their quasi-isomorphisms by degreewise pullback.

[F2] [[thm-author-c5bc2838d897-kcoherent-enhanced-localization-input]] imports Hinich's functorial/family localization, its marked-cocartesian hypotheses and symmetric monoidal universal property; it also imports the nerve/opfibration, chain-interval and stable-Verdier comparisons.

[F3] [[thm-author-4f716d60801a-derived-enhancement-input]] identifies the supplied 𝒟(X) with localization of all sheaf complexes. [[def-scheme-perfect-complexes]] defines its full perfect fibers but chooses no scheme-indexed pullback or tensor diagram.

[F4] [[lem-author-c5bc2838d897-kflat-addendum-localization-equivalence]] proves the actual inclusion-induced K-flat fiber equivalence, using the precise Verdier localization criterion and explicit fullness/faithfulness.

[F5] [[lem-author-c5bc2838d897-monoidal-transport-product-family]] converts an actual product-base cocartesian family with pointwise Segal/unit equivalences into coherent strong symmetric monoidal transports by straightening and currying.

## Proof
1.1 Construct an ordinary Grothendieck opfibration E→B₀, where B₀=Sch_qcqs^op×Fin_*. Its objects over (X,⟨n⟩) are n-tuples of objects of F(X). For a base map (Y,⟨n⟩)→(X,⟨m⟩) given by f:X→Y and α:⟨n⟩→⟨m⟩, transport sends ($P_i$) to (⊗_{α(i)=j}f*$P_i$)_{1≤j≤m}, with the empty tensor $O_X$. A morphism over this base map is a tuple of chain maps from that transported tuple to the target tuple. Compose using composition of chain maps, canonical pullback-composition isomorphisms and the signed tensor associativity/symmetry. These comparison isomorphisms form an ordinary pseudofunctor: inverse-image composition and relative tensor associativity follow from their universal properties, and all paths give the same maps on elementary local tensors; the Koszul sign rule supplies the same permutation sign. Hence their unit, pentagon, symmetry and interchange equations hold before localization. The Grothendieck construction therefore is an ordinary category with associative composition, and the displayed identity maps from each transported tuple are its opcartesian arrows. By [F2], N(E)→N(B₀) is a cocartesian fibration. This encodes the entire scheme/tensor diagram, rather than isolated functors. [F1, F2, construct]

2.1 Mark only equivalences in the base. In each fiber mark componentwise quasi-isomorphisms, and in E mark a map over a base equivalence exactly when its vertical component after an opcartesian lift is componentwise a quasi-isomorphism. To justify the saturation requirement, first view the same actual transport formulas as a pseudofunctor of pairs (F(X)^n,$W_X^n$). The fiber markings are saturated, since quasi-isomorphisms are the inverse images of isomorphisms under cohomology; every transport preserves them. The Grothendieck construction for the wide subcategories $W_X^n$ and its inclusion into E give a natural diagram of these saturated pairs, hence a functor B→Cat_∞^+. Every base equivalence is carried to an equivalence of pairs. Hinich Lemma 2.1.6, with Remark 2.1.2, therefore equips E→B with the saturated total marking just described. This invokes the marked-family classification, rather than trying to infer saturation from two-out-of-three alone. The four hypotheses of Hinich Definition 2.1.1 now hold. The underlying map is cocartesian by step 1.1; lifts of marked base edges have identity vertical components; every transport preserves markings because f* preserves K-flat quasi-isomorphisms and tensoring K-flat complexes preserves quasi-isomorphisms; and transports over base equivalences are relative equivalences, hence equivalences after localization. For active Fin_* maps the same tensor argument verifies the additional hypothesis of Hinich Proposition 3.2.2; inert transports merely select coordinates. No morphism over a noninvertible scheme or Fin_* map is marked. [F1, F2, step 1.1]

3.1 Apply Hinich Proposition 2.1.4 to the ONE marked total fibration over Sch_qcqs^op×Fin_*. Only base equivalences are inverted, so, after the equivalent cocartesian presentation of Hinich Definition 2.1.3 if needed, its localization q remains cocartesian over B×N(Fin_*), $B=N(\mathrm{Sch}_{\mathrm{qcqs}}^{\mathrm{op}})$. The theorem's proof §2.2.2–2.2.6 identifies it with the unstraightening of L∘F⁺; the localization map is a natural map of diagrams, hence preserves transports. On restriction to each X, Hinich Proposition 3.2.2 applies because active tensor transports preserve the markings as checked in step 2.1. Thus its canonical inert Segal maps are equivalences and the zeroth fiber is terminal. Apply [[lem-author-c5bc2838d897-monoidal-transport-product-family]]: straightening over the PRODUCT and currying yield B→Fun(N(Fin_*),Cat∞), and its natural transformations unstraighten to maps preserving every Fin_*-cocartesian arrow. Therefore all scheme transports are strong symmetric monoidal, including their unit/tensor comparison equivalences and all higher compositions. This conclusion is derived from the single total family, not from separately given pointwise functors. [F2, F5, step 1.1, step 2.1]

4.1 Put $C_X$=L(F(X),$W_X$). Actual inclusion of K-flat into all sheaf complexes induces $I_X$:$C_X$→𝒟(X). The focused lemma [[lem-author-c5bc2838d897-kflat-addendum-localization-equivalence]] proves that this is an exact equivalence. Its proof verifies all hypotheses of Stacks Lemma 13.5.8 (0GSL), explicitly proves fullness and faithfulness by K-flat replacements of roofs and their common refinements, and upgrades the same exact inclusion-induced functor by stable mapping spaces. It assumes no K-projectivity. This supplies exactly the fiber comparison with the supplier's specified localization; the coherent scheme/tensor diagram remains the one constructed in steps 1.1 through 3.1. [F4, step 3.1]

5.1 Inside each $C_X$ take the full subcategory on objects whose $I_X$-image is locally a bounded finite locally free complex. Tensor and every transport preserve this condition: locally the tensor of two such representatives is bounded finite locally free, and pullback of such a representative is again so, computed without resolving further because bounded flat complexes are K-flat. These conditions are invariant under equivalence and preserved by shifts and cones. Hence they define a full cocartesian subfamily of the already constructed family, with exact transports and tensor exact in each variable. Its straightening is the asserted diagram widehat Perf^⊗. Each $I_X$ restricts to the actual exact equivalence widehat Perf(X)≃Perf(X). This common model is an enhancement realization of precisely the supplied fibers, and supplies their previously unspecified functorial tensor/pullback interface. No independent scheme-indexed diagram on those fibers has been invented or compared. [F1, F2, F3, step 3.1, step 4.1] ∎
