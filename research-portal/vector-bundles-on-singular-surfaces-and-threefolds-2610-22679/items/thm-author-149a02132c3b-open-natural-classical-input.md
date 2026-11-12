---
id: thm-author-149a02132c3b-open-natural-classical-input
kind: theorem
title: Exact arbitrary-field open-natural classical cycle interface
status: published
domain: mathematics
deps:
  - thm-author-2ac325480ae8-bem-field-model
  - math:def-axiom-of-choice
  - def-bloch-higher-cycle-complex
  - math:def-perfect-field
  - math:thm-prime-subfield-classification
  - math:def-grothendieck-universe-closure-convention
  - math:def-scheme-over-base
  - math:def-smooth-morphism-schemes
  - math:def-separated-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-open-immersion-schemes
  - math:def-closed-immersion-schemes
  - math:cor-affine-scheme-quasi-compact
  - math:lem-diagonal-quasi-compact-iff-quasi-separated
dependency_roles:
  thm-author-2ac325480ae8-bem-field-model: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-bloch-higher-cycle-complex: mathematical-premise
  math:def-perfect-field: mathematical-premise
  math:thm-prime-subfield-classification: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-separated-morphism-schemes: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-open-immersion-schemes: mathematical-premise
  math:def-closed-immersion-schemes: mathematical-premise
  math:cor-affine-scheme-quasi-compact: mathematical-premise
  math:lem-diagonal-quasi-compact-iff-quasi-separated: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
proof_strategy: direct
external_input: true
sources:
  references:
    - title: Tom Bachmann, Elden Elmanto and Matthew Morrow, A¹-invariant motivic
        cohomology of schemes
      url: https://arxiv.org/html/2508.09915v1
      locator: Theorem7.5 and Remark7.9; Corollary1.11 and preceding canonical
        comparison(1.9); Remark3.41 maps(3.42)–(3.43); Remark4.12;
        Definitions4.15/4.17 and Remark4.18; Theorem1.1(8); Remark4.21; proof of
        Theorem6.3, paragraphs preceding (6.4); §3.2 mapping-presheaf
        construction; formula(4.7); §1.6 notation; §3.1 definitions of SH and
        the Tate object; Definitions7.1/7.8
      statement: The absolute cdh functor restricts canonically over a field to the
        classical smooth-field cdh-local extension. Its canonical map to the
        A¹/slice theory is an equivalence on equicharacteristic schemes. Smooth
        pullback commutes with slice formation, and over a fixed field the
        represented smooth theory is classical motivic cohomology. These are
        natural functor constructions, not an arbitrary choice of objectwise
        equivalences. The target conventions are D(Z) for complexes and Sp for
        spectra; the mapping-spectrum construction is
        omega-infinity(E)(X)=map_SH(k)(M_k(X),E). The degree-r slice is the rth
        Tate twist of the zeroth slice.
      hypotheses: Every field B in the base-independence assertion; any qcqs
        equicharacteristic scheme for Corollary1.11; fixed perfect k for the
        classical smooth comparison used here; smooth separated finite-type
        k-schemes and open immersions.
      reading_limits: "Historical source-reading record retained from the prior draft:
        Read exact Theorem7.5 and short proof, Remark7.9, full Corollary1.11
        statement and preceding explanation, full Remark3.41, Remark4.12 and
        Definitions4.15/4.17 with Remark4.18, Theorem1.1(8). The deep proof of
        the equicharacteristic comparison and classical slice identification is
        imported, not reconstructed. Served HTML title date24August2026 is
        retained despite v1 URL. Current consumer maintenance inspected the
        current item, its canonical field-model supplier and the parallel
        open-natural importer; it did not reread these primary papers or
        independently judge their deep inputs. Adjudication 527196b903d4
        additionally read the served HTML title/version lines, Theorem1.1(8),
        Corollary1.11, the mapping-presheaf construction in §3.2, Remarks3.41,
        4.12, 4.18, 4.21, formula(4.7), the opening comparison paragraphs and
        (6.4) with its qualifications in the proof of Theorem6.3, Theorem7.5 and
        Remark7.9. The deep slice identification is imported. The global
        presheaf assertion preceding (6.4), rather than that fixed-site display
        alone, is used below. Adjudication adjudicate-8989548fd8ce reread the
        served primary HTML: title/version lines, §1.6, comparison(1.9) and
        Corollary1.11, §3.2 mapping spectra and(3.7), Remark3.41, formula(4.7)
        and its slice consequence, Remark4.12, Definitions4.15/4.17 and
        Remarks4.18/4.21, the global construction and qualification around(6.4),
        Definitions7.1/7.8, Theorem7.5 and its short proof, and Remark7.9. This
        checks the applications and target types; it does not reconstruct the
        deep comparison proofs or certify an HZ-linear refinement of the whole
        comparison."
    - title: Carlo Mazza, Vladimir Voevodsky and Charles Weibel, Lecture notes on
        motivic cohomology
      url: https://sites.math.rutgers.edu/~weibel/MVWnotes/prova-hyperlink.pdf
      locator: "Theorem16.7 and Suslin–Friedlander construction p.126; Lecture19
        pp.159–163: Lemma19.4, Theorem19.8, Proposition19.12, proof of
        Theorem19.1, Definition19.13 and Example19.14"
      statement: The classical complex has the actual Zariski-sheaf comparison zigzag
        Z(r)≃Z_SF(r)→z^r(-×A^r,*)[-2r]. Bloch complexes satisfy Zariski descent,
        and projection pullback z^r(-,*)→z^r(-×A^r,*) is a quasi-isomorphism.
        For flat maps the comparison uses actual flat pullback, hence open
        restriction.
      hypotheses: Smooth separated finite-type schemes over a perfect field; r>=0. No
        quasi-projectivity or resolution hypothesis is imposed in Theorem19.1 or
        the cited Zariski comparison/descent. Only open restriction, projection
        pullback and one fixed weight are used.
      reading_limits: "Historical source-reading record retained from the prior draft:
        Read Theorem16.7 statement and its preceding construction, and all
        Lecture19 pp.159–163 including the displayed zigzag, quasi-isomorphism,
        descent proof, proof of19.1 and flat-pullback Example19.14. The deep
        Suslin comparison and moving/localization foundations invoked there are
        imported; no claim to reconstruct all prior lectures or general nonflat
        pullbacks. Current consumer maintenance inspected the current item, its
        canonical field-model supplier and the parallel open-natural importer;
        it did not reread these primary papers or independently judge their deep
        inputs. Adjudication 527196b903d4 read the primary PDF, printed p.126
        (construction and Theorem16.7), and pp.159–163 (including the actual
        embedding, sheaf comparison, descent and flat-pullback description).
        This supplies the cycle maps and descent, not the preceding
        slice-to-classical bridge. Exact locally read PDF: 228 pages, creation
        metadata 18 July 2006, SHA256
        bb07651d8cc1b38f2552204e6c777cc7570c19e35d779987907a44efc2669486; the
        URL has no immutable revision identifier. Adjudication
        adjudicate-8989548fd8ce read the cached primary PDF at the same recorded
        SHA256, printed p.126 and all pp.159–163 (PDF pages138 and171–175),
        including Theorems16.7/19.8, the actual inclusion19.4, Proposition19.12,
        and Definition19.13/Example19.14. The current web fetch timed out; no
        newly downloaded revision is claimed. Deep Suslin comparison, moving and
        localization foundations remain imported."
    - title: Marc Levine, The homotopy coniveau tower (arXiv:math/0510334v1, 16
        October 2005)
      url: https://arxiv.org/pdf/math/0510334v1
      locator: §§1.2–1.4, pp.7–8; §3.3, p.18; Theorem4.1.1, pp.20–21; Theorem6.4.1,
        p.35; §6.5, pp.37–38; Example8.2.2(3), pp.45–46; Theorem9.0.3 and
        Remark9.0.4, p.47; §§10.4–10.5, pp.59–61. These are v1 page and theorem
        numbers.
      statement: The Bloch complexes admit fibrant complexes of Nisnevich sheaves Z^r
        on Sm/k whose restriction is isomorphic to the cycle functor in the
        derived category of sheaves on Sm//k. The latter category has all smooth
        separated finite-type k-schemes as objects and only smooth morphisms.
        Their Eilenberg–MacLane realizations form the classical motivic spectrum
        HZ. The homotopy-coniveau and slice constructions identify its
        zeroth-slice realization; BEM explicitly recalls the resulting
        comparison with s^0 KGL and the global presheaf comparison before (6.4).
      hypotheses: Here k is perfect and r>=0; no finite-generation assumption over its
        prime field. Open immersions belong to Sm//k. Theorem4.1.1 requires
        axiom A3 for finite k; Theorem6.4.1 verifies it for K-theory, and
        Remark9.0.4 explains the finite-field scope of the P^1-stable
        comparison. No general infinite-field restriction from §7 is imposed on
        the stated P^1-stable result.
      reading_limits: "Read the cited definitions, theorem statements and construction
        paragraphs in the cached primary v1 PDF/text; visually checked printed
        pp.37 and45. Read the proof of Theorem6.4.1, the proof paragraph and map
        description in Example8.2.2(3), and the closing map identification on
        p.61. Did not reconstruct moving lemmas, the long reverse-cycle-map
        construction or the full slice-comparison proofs. Read the conditional
        qualification in Corollary10.5.2 and the opening of §11; no claim
        depending on its working Conjecture11.1.1 is imported. BEM supplies the
        established slice identification used here. The arXiv v1 numbering
        differs from the 2008 journal article cited by BEM; no direct reading of
        the journal version is claimed. Exact locally read v1 PDF SHA256:
        5f268002b5ec36a74932a48ac051712c9c19c41a8b76e5bcb5dcdf0800538190.
        Adjudication adjudicate-8989548fd8ce read §§1.2–1.4, the Sm//k
        definition in §3.3, Theorem4.1.1 statements, Theorem6.4.1 and its proof,
        §6.5, Example8.2.2(3) with the map and its qualification on p.46,
        Theorem9.0.3 and Remark9.0.4 in the cached primary v1 text/PDF (same
        recorded SHA256), with web primary-PDF confirmation of the global model,
        realization and finite-field passages. No claim to reconstruct the deep
        moving or slice proofs, or to use Conjecture11.1.1."
dependency_level: 10
local_argument_provenance: ai-altered
formulation_deps:
  - thm-author-2ac325480ae8-bem-field-model
  - math:def-axiom-of-choice
  - def-bloch-higher-cycle-complex
  - math:def-perfect-field
  - math:thm-prime-subfield-classification
  - math:def-grothendieck-universe-closure-convention
  - math:def-scheme-over-base
  - math:def-smooth-morphism-schemes
  - math:def-separated-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-open-immersion-schemes
argument_deps:
  - thm-author-2ac325480ae8-bem-field-model
  - math:def-axiom-of-choice
  - def-bloch-higher-cycle-complex
  - math:def-perfect-field
  - math:thm-prime-subfield-classification
  - math:def-grothendieck-universe-closure-convention
  - math:def-scheme-over-base
  - math:def-smooth-morphism-schemes
  - math:def-separated-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-open-immersion-schemes
  - math:def-closed-immersion-schemes
  - math:cor-affine-scheme-quasi-compact
  - math:lem-diagonal-quasi-compact-iff-quasi-separated
---

## Statement
Assume the Axiom of Choice. Fix Grothendieck universes $U\in V\in W$ with $\omega,\mathbb Q\in U$; their existence is a separate size assumption. All fields and scheme data under consideration, including the objects and arrows of $\mathcal O_k$, lie in $U$. Regard the qcqs scheme categories as $V$-small, and perform the derived-category constructions in $W$ with the common bounds and conventions of the canonical field-model interface. Let $r\in\mathbb Z_{\geq0}$, let $k$ be perfect, and let $F$ be its prime subfield, either $\mathbb Q$ or $\mathbb F_p$. Define $C_{r,F}$ to be the cdh sheafification of the left Kan extension of classical weight-$r$ motivic cohomology from qcqs smooth $F$-schemes to qcqs $F$-schemes with data in $U$, with values in $\mathrm D(\mathbb Z)$, the stable presentable derived $\infty$-category of unbounded cochain complexes of $V$-small abelian groups, considered in $W$. Use the canonical field-model interface's BEM qcqs cdh topology, ordinary reflective sheafification, and left Kan extension adjoint to restriction along the opposite-category inclusion. Here qcqs means quasi-compact and quasi-separated.

Let $\mathcal O_k$ have the smooth separated finite-type $k$-schemes with data in $U$ as objects and the open $k$-immersions with data in $U$ as morphisms; regard this category as $V$-small. Thus a $k$-scheme comes with a structure map to $\operatorname{Spec}k$; smoothness, separatedness and finite type refer to that map. Write $\mathrm{Sp}$ for the stable $\infty$-category of spectra and $\mathsf E:\mathrm D(\mathbb Z)\to\mathrm{Sp}$ for the ordinary Eilenberg–MacLane realization, with $\pi_n\mathsf E(K)=H^{-n}(K)$. Write $z^r(X,\bullet)$ for Bloch's unnormalized admissible-cycle complex. Regard homological degree $n$ as cochain degree $-n$ and use cochain shifts $K[a]^m=K^{m+a}$, with differential multiplied by $(-1)^a$. There is an equivalence
$$\mathsf E(C_{r,F}|_{\mathcal O_k})\simeq\mathsf E\bigl(z^r(-,\bullet)[-2r]\bigr)\quad\text{in }\operatorname{Fun}(\mathcal O_k^{\mathrm{op}},\mathrm{Sp}).$$
The functor category retains coherent natural transformations before evaluation or homotopy groups; an equivalence here is a natural transformation that is an equivalence at every object, or a zigzag of such equivalences. Realization is applied to both complex-valued diagrams. In particular the right-hand arrow for any open immersion is the realization of the actual cycle restriction. The field $k$ is fixed, with no finite-generation assumption over $F$.

Use the following actual route: the supplied canonical field-model equivalence identifies $C_{r,F}$ with the restriction of the absolute BEM cdh functor; its canonical comparison to the represented A¹ theory is an equivalence on these equicharacteristic schemes. Over the fixed $k$, smooth slice pullback identifies that represented functor with classical motivic cohomology. Finally use the MVW Zariski-sheaf zigzag and Bloch descent, with Eilenberg–MacLane realization throughout the spectrum-valued route. Every arrow or inverse equivalence is taken as a map of diagrams. Thus for an open immersion its cycle arrow is the actual open restriction.

## Statement references

[[thm-author-2ac325480ae8-bem-field-model]]

[[math:def-axiom-of-choice]]

[[def-bloch-higher-cycle-complex]]

[[math:def-perfect-field]]

[[math:thm-prime-subfield-classification]]

[[math:def-grothendieck-universe-closure-convention]]

[[math:def-scheme-over-base]]

[[math:def-smooth-morphism-schemes]]

[[math:def-separated-morphism-schemes]]

[[math:def-locally-finite-type-and-finite-type-morphism]]

[[math:def-quasi-compact-and-quasi-separated-scheme]]

[[math:def-open-immersion-schemes]]

[[math:def-closed-immersion-schemes]]

[[math:cor-affine-scheme-quasi-compact]]

[[math:lem-diagonal-quasi-compact-iff-quasi-separated]]

## External input
Import this restricted open-natural classical interface via the explicitly recorded zigzag. The base field k is fixed and perfect, with no finite-generation requirement over F. No separate construction of arbitrary nonflat cycle pullbacks is required. The completed field-model supplier states the canonical identification for any field B; its older application only used $B=Q$, whereas here $B=F$ can also be $F_p$. The new full source record explicitly retains that characteristic scope.

The global comparison is taken from the construction preceding BEM (6.4), supplemented by Levine's primary complex models, rather than inferred from (6.4) alone. Write $\mathrm{Sm}//k$ for Levine's category with all smooth separated finite-type $k$-schemes and smooth morphisms. His §6.5 supplies an isomorphism of derived sheaf objects on that whole category; BEM's proof of Theorem6.3 recalls its agreement in the homotopy category of presheaves. This is stronger than a natural isomorphism of cohomology groups, or a diagram in the homotopy category of the values. Only its restriction to open immersions and one fixed weight is used. The ordinary Eilenberg–MacLane realization in Levine §6.5 sends a complex to a presheaf of spectra; it is distinct from assembling a motivic spectrum over $k$. The spectrum realization in Example8.2.2(3), together with the established classical slice identification recalled in BEM, supplies the represented-to-classical bridge. Here $\mathrm{SH}(k)$ is the stable motivic category; $M_k(X)$ is the motivic suspension spectrum of $X$ with a disjoint base point, $\mathbb T_k$ is the reduced motive of $(\mathbb P^1_k,\infty)$, $\mathrm{KGL}_k$ represents homotopy $K$-theory, and $s^r$ is its $r$th effective slice. The spectrum-valued represented functor is $\omega^\infty(E)(X)=\operatorname{map}_{\mathrm{SH}(k)}(M_k(X),E)$. These constructions and their classical realization are imported from BEM §§3.1–3.3 and4.1–4.2 and Levine §§6.5/8.2; they are not new locally constructed motivic foundations. No compatibility between different weights, multiplicative comparison with cycles, or compatible $\mathbb Z$-linear refinement of the entire spectrum-valued zigzag is claimed.

## Facts & Assumptions

**Given:** The hypotheses in the Statement, including the Axiom of Choice, $U\in V\in W$, $\omega,\mathbb Q\in U$, all fields and scheme data in $U$, and the common $V$-small sites and $W$-ambient enhanced target.

**Goal:** Construct the stated actual maps and prove their consequence.

[A1] The Axiom of Choice is the existing ambient assumption for the imported derived-category models and their fixed small sites in steps 1.1–3.1, and discharges the inherited Choice hypothesis of the cycle-complex supplier in step 4.1. It is not an additional field or finite-generation hypothesis. [[math:def-axiom-of-choice]]

[F1] The canonical field-model equivalence supplied by [[thm-author-2ac325480ae8-bem-field-model]], BEM Corollary1.11, and its represented-presheaf identification in Remark4.21.

[F2] The global classical comparison constructions in BEM's proof of Theorem6.3 before (6.4), Levine §6.5 and Example8.2.2(3), and the established slice equivalences recalled in BEM Remark4.12 and that proof. Use their sheaf/complex models, not only their cohomology-group consequences. Levine §§1.2–1.4 distinguish the homotopy category of presheaves from presheaves of homotopy-category values.

[F3] MVW Theorem16.7, Lemma19.4, Theorem19.8 and Proposition19.12 supply the classical-to-cycle sheaf zigzag, cycle homotopy invariance and descent. Definition19.13 and Example19.14 identify its flat maps, including open restriction.

[F4] The definition and well-defined differential of $z^r(X,\bullet)$ are supplied by [[def-bloch-higher-cycle-complex]], under [A1]. The reindexing and shift convention is fixed in the Statement; it gives $\pi_{-m}\mathsf E(z^r(X,\bullet)[-2r])=H_{2r-m}(z^r(X,\bullet))$.

[F5] The perfect-field and prime-field conventions are [[math:def-perfect-field]] and [[math:thm-prime-subfield-classification]]. The explicitly assumed universes $U\in V\in W$, with $\omega,\mathbb Q\in U$ and all fields and scheme data in $U$, satisfy the size hypotheses of [[thm-author-2ac325480ae8-bem-field-model]]. Its $V$-small sites and $W$-ambient enhanced target are used unchanged. [[math:def-grothendieck-universe-closure-convention]] supplies the closure convention; existence of these universes is a separate assumption, not a consequence of Choice. Objects and arrows of $\mathcal O_k$ use [[math:def-scheme-over-base]], [[math:def-smooth-morphism-schemes]], [[math:def-separated-morphism-schemes]], [[math:def-locally-finite-type-and-finite-type-morphism]], [[math:def-quasi-compact-and-quasi-separated-scheme]], and [[math:def-open-immersion-schemes]]. They meet exactly the smooth separated finite-type hypotheses of the classical imports. Finite type includes quasi-compactness of the structure map, and the field spectrum is quasi-compact by [[math:cor-affine-scheme-quasi-compact]], so the objects are quasi-compact. A closed immersion identifies inverse images of affine opens with closed subspaces of quasi-compact affine spaces; these are quasi-compact, and finite affine subcovers give the same conclusion for every quasi-compact open. Apply this to the closed diagonal supplied by separatedness and [[math:def-closed-immersion-schemes]]. The criterion [[math:lem-diagonal-quasi-compact-iff-quasi-separated]] makes every intersection of two affine opens quasi-compact. Thus the objects are qcqs and the BEM functors are defined on them.

## Proof

1.1 By the explicit size assumptions and [F5], the fields $F,k$ and all scheme data lie in $U$, where $U\in V\in W$ and $\omega,\mathbb Q\in U$. The sites are $V$-small and the common enhanced target is considered in $W$, exactly as required by the canonical field-model supplier. Apply its equivalence to $B=F$, and then restrict to $k$-schemes. Compose it with the canonical cdh-to-A¹ comparison, an equivalence here by equicharacteristic. Remark4.21 identifies the resulting restriction to smooth $k$-schemes with the presheaf represented by $s^r\mathrm{KGL}_k[-2r]$. Apply $\mathsf E$ to the complex-valued maps: the represented presheaf has values in $\mathrm{Sp}$, and its maps are precomposition on mapping spectra. All of these operations are on functors into the same target. This step uses neither finite generation of $k/F$ nor a choice of equivalence at each individual scheme. [A1, F1, F5]

2.1 Use the established equivalences $s^0\mathrm{KGL}_k\simeq s^0(1_k)\simeq H\mathbb Z_k^{\mathrm{cl}}$ recalled in [F2], where the last object is the classical motivic spectrum with Levine's complex models. The ordinary Eilenberg–MacLane realization of the complexes is as fixed above and in Levine §6.5. The Bott/slice identification $s^r\mathrm{KGL}_k\simeq\mathbb T_k^{\otimes r}\otimes s^0\mathrm{KGL}_k$ and the represented-presheaf functor produce the classical weight-$r$ functor on the entire smooth $k$-category. Use the complex realization of [F2]: Levine §6.5 supplies the comparison on the whole category $\mathrm{Sm}//k$ as a derived-sheaf isomorphism, and Example8.2.2(3) identifies the assembled spectrum with classical $H\mathbb Z$. Thus this is a comparison of the sheaf/presheaf objects before evaluation. The fixed-site statement (6.4) is a consequence of this construction, not a substitute for its global scope. The finite-field qualification causes no loss: the K-theory A3 hypothesis and the P¹-stable finite-field case are explicitly covered by the source contracts. [A1, F2, step 1.1]

3.1 The derived-sheaf and homotopy-presheaf comparisons just invoked can be represented by zigzags of maps between the corresponding models. Apply functorial derived sections to the sheaf models and then the ordinary realization $\mathsf E$. Their isomorphisms become equivalences in $\operatorname{Fun}(\mathcal O_k^{\mathrm{op}},\mathrm{Sp})$; they are not merely commuting squares after independently passing each value to its homotopy category. Restriction to the category of open immersions preserves those equivalences. Derived sections of the sheaf models and the source descent identifications supply the presheaf values. This is the coherence needed here: choose the global comparison once and then restrict it, rather than choosing unrelated comparisons on different small sites. [F2, F3, step 2.1]

4.1 Under [A1], [F4] fixes the actual cycle complex. Apply derived sections and ordinary Eilenberg–MacLane realization to the actual MVW sheaf zigzag $\mathbb Z(r)\simeq\mathbb Z_{SF}(r)\to z^r(-\times\mathbb A^r,\bullet)[-2r]\leftarrow z^r(-,\bullet)[-2r]$. Its middle arrow is the cycle inclusion of Lemma19.4, a Zariski quasi-isomorphism by Theorem19.8. Its last arrow is projection flat pullback, a quasi-isomorphism by cycle homotopy invariance. Proposition19.12 identifies derived sections with cycle values. These are maps on the category of open immersions: the inclusion and projection pullback commute with restriction, and Example19.14 identifies the induced flat map with actual cycle pullback. They therefore give exactly the desired cycle arrows. [A1, F3, F4, step 3.1]

5.1 Compose the comparisons in steps 1.1–4.1 and invert only equivalences of the diagrams. An inverse of an equivalence in that functor category is again a map of diagrams, so the composite in $\operatorname{Fun}(\mathcal O_k^{\mathrm{op}},\mathrm{Sp})$ gives the asserted equivalence on all smooth separated finite-type $k$-schemes and open immersions. No uniqueness, canonicity across weights, arbitrary nonflat cycle pullback or multiplicative compatibility is inferred. In particular every open arrow is the actual cycle restriction, after realization by $\mathsf E$, with the declared homological-to-cochain indexing. Its homotopy-group arrow is the corresponding cycle-homology restriction by [F4]. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, step 4.1] ∎

## Local application provenance
The numbered argument is a locally assembled, AI-altered application of the imported comparison constructions. The literature-derived proof provenance records those external inputs; it does not attribute this five-step assembly verbatim to a published source. The existing source-reading records are retained from earlier authoring and adjudication. Adjudication adjudicate-8989548fd8ce checked the current body, its field-model and cycle-definition suppliers, the exact published formulation suppliers, and the sole direct restriction-diagram consumer. The primary-source passages actually reread for this repair are recorded in the appended reading limits above. Deep external proofs remain imported. This repair supplies no independent acceptance or library audit stamp.

Adjudication adjudicate-2ade0e123c72 read the current assigned body, the canonical field-model body and universe definition, the declared formulation interfaces, and the direct restriction-diagram consumer. This scoped repair states the inherited size hypotheses explicitly and tracks their use in step 1.1. Earlier primary-source reading records remain historical; no fresh primary-source reading, reconstruction of deep comparison proofs or independent acceptance is claimed. The Statement clarification requires the native downstream owner to check the direct consumer against these exact bounds.
