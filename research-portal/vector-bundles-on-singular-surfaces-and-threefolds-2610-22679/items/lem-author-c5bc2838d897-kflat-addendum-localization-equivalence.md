---
id: lem-author-c5bc2838d897-kflat-addendum-localization-equivalence
kind: lemma
title: K-flat roofs give the full derived localization
status: published
domain: mathematics
deps:
  - thm-author-c5bc2838d897-kflat-addendum-verdier-criterion
  - thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input
  - thm-author-c5bc2838d897-kcoherent-enhanced-localization-input
  - thm-author-4f716d60801a-derived-enhancement-input
  - math:def-axiom-of-choice
  - math:thm-abelian-sheaves-form-abelian-category
  - math:def-scheme
  - math:def-ringed-space
  - math:def-module-on-ringed-space
  - math:def-grothendieck-universe-closure-convention
  - math:thm-the-homotopy-category-of-an-abelian-category-is-triangulated
  - math:thm-the-cone-long-exact-sequence
  - math:def-weak-homotopy-equivalence
dependency_roles:
  thm-author-c5bc2838d897-kflat-addendum-verdier-criterion: mathematical-premise
  thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input: mathematical-premise
  thm-author-c5bc2838d897-kcoherent-enhanced-localization-input: mathematical-premise
  thm-author-4f716d60801a-derived-enhancement-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:thm-abelian-sheaves-form-abelian-category: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-ringed-space: mathematical-premise
  math:def-module-on-ringed-space: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:thm-the-homotopy-category-of-an-abelian-category-is-triangulated: mathematical-premise
  math:thm-the-cone-long-exact-sequence: mathematical-premise
  math:def-weak-homotopy-equivalence: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
sources:
  references:
    - title: Jacob Lurie, Higher Algebra (September 18, 2017)
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Section 1.1.2, suspension/loop construction and mapping-space
        discussion preceding Lemma 1.1.2.9, printed p. 24 (zero-based PDF index
        23); Notation 1.1.2.17, p. 30 (index 29); Proposition 1.1.4.1, pp. 33–34
        (indices 32–33).
      statement: In a stable infinity-category suspension and loop are inverse.
        Suspension in the source identifies the mapping space with the based
        loop of the unshifted mapping space; iterating identifies positive
        homotopy groups at zero with shifted homotopy-category Hom groups. A
        functor between stable infinity-categories is exact precisely when it
        preserves zero and cofiber sequences, equivalently finite limits or
        finite colimits.
      hypotheses: Stable infinity-categories in fixed universes, mapping spaces
        pointed by the zero morphism; shifts are suspension powers. The
        exactness criterion requires both source and target stable. No
        presentability, field or K-projectivity hypothesis is imposed.
      reading_limits: This adjudication read the PDF text of the suspension/loop
        construction and mapping-space discussion on printed p. 24, Notation
        1.1.2.17, and Proposition 1.1.4.1 with its displayed proof. These
        foundations are imported; their cited foundations are not reconstructed.
        The local proof spells out loop translations rather than invoking an
        additional spectral-enrichment theorem.
    - title: Jacob Lurie, Higher Topos Theory
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Definition 1.1.3.4 and following discussion, printed p. 16 (zero-based
        PDF index 33); Section 1.1.4, realization/singular discussion on p. 19
        (index 36); Definition 1.2.10.1, Remark 1.2.10.2 and final paragraph of
        Section 1.2.10, p. 43 (index 60).
      statement: A weak homotopy equivalence is bijective on components and isomorphic
        on every positive based homotopy group. Spaces are used up to weak
        homotopy equivalence, equivalently in the simplicial or topological
        model. An infinity-functor is fully faithful when its maps of mapping
        spaces are equivalences; it is an equivalence if it is fully faithful
        and essentially surjective on the ordinary homotopy category.
      hypotheses: Spaces are homotopy types, rather than arbitrary topological spaces
        with strict homotopy inverses asserted. Infinity-categories and their
        mapping spaces are taken in suitable universes; essential surjectivity
        refers to equivalence of objects.
      reading_limits: This adjudication read Definition 1.1.3.4 and the following
        spaces-localization discussion, the realization/singular comparison on
        printed p. 19, and all of Section 1.2.10 in the PDF text. The
        foundational model comparison is imported, not reconstructed.
        Proposition 1.2.3.1, its proof and following presentation on pp. 28–29
        were also checked against the existing Verdier supplier; that adjunction
        remains supplied by that item.
---

## Statement
Assume AC. For any scheme X let A=Mod($O_X$), the abelian category of all Zariski module sheaves, $K=K$(A) its cochain homotopy category, and H⊆K the full subcategory on K-flat complexes. Let S be the quasi-isomorphisms in K and $S_H$=S∩Arrows(H). Then the functor induced by actual inclusion

$$(S_H)^{-1}H\longrightarrow S^{-1}K=D(\mathcal O_X)$$

is an exact equivalence, including full faithfulness. Consequently the actual inclusion induces an exact equivalence F(X)[$W_X$⁻¹]→𝒟(X) of stable infinity-localizations, with F(X) the ordinary category of K-flat complexes and $W_X$ its quasi-isomorphisms, and 𝒟(X) the supplied derived enhancement. The ordinary-localization assertion holds for any ringed space. No K-flat complex is assumed K-projective, and morphisms in these localizations are not replaced by chain maps without denominators.

## Statement references
[[math:thm-abelian-sheaves-form-abelian-category]]

[[math:def-scheme]]

[[math:def-ringed-space]]

[[math:def-module-on-ringed-space]]

[[math:def-grothendieck-universe-closure-convention]]

[[math:thm-the-homotopy-category-of-an-abelian-category-is-triangulated]]

## Facts & Assumptions
**Given:** X, all unbounded sheaf complexes, AC and fixed Grothendieck universes containing $\omega$. Assume the existence of sufficiently large nested universes, independently of AC, so that the objects, arrows and denominator diagrams being localized are sets in the working universe. AC is retained for the imported unbounded replacements and for set-indexed choices of representatives and quasi-inverse data; no proper-class choice is used.

**Goal:** Prove essential surjectivity, fullness and faithfulness of this actual localization functor, then its stable enhanced upgrade.

[F0] [[math:def-scheme]] and [[math:def-ringed-space]] fix the geometric object types. [[math:def-module-on-ringed-space]] fixes module sheaves and their morphisms. Use [[math:def-grothendieck-universe-closure-convention]] for the size convention. The module-sheaf category is abelian by [[math:thm-abelian-sheaves-form-abelian-category]], and [[math:thm-the-homotopy-category-of-an-abelian-category-is-triangulated]] gives the ambient homotopy category with its usual shift and cone triangles, reindexed from chains by $C_n=C^{-n}$. The cochain, homotopy, quasi-isomorphism and cone conventions are those explicitly supplied by [F1]–[F3].

[F1] [[thm-author-c5bc2838d897-kflat-addendum-verdier-criterion]] gives Stacks Lemma 13.5.8 and the quasi-isomorphism multiplicative system, with the precise right-roof/common-refinement calculus. Its Definition fixes pretriangulated categories, exact ordinary functors, saturation, compatibility, and the universal property of ordinary localization.

[F2] [[thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input]] defines K-flatness using direct-sum total tensor and supplies its sheaf-complex conventions. It includes Stacks Lemma 20.26.12 (06YF), providing R→M K-flat and quasi-isomorphic for every complex M, and Lemma 20.26.6 (079S), providing shift/cone closure. These apply on every ringed space, without boundedness or quasi-coherence restrictions.

[F3] [[thm-author-c5bc2838d897-kcoherent-enhanced-localization-input]] supplies the dg-nerve, finite chain-interval and stability conventions, HA Proposition 1.3.4.5 (chain-homotopy localization and dg nerve), and Drew Theorem 1.3 (stable Verdier localization). [[thm-author-4f716d60801a-derived-enhancement-input]] supplies the infinity-localization universal property including natural transformations, identifies 𝒟(X) as localization of all complexes with h𝒟(X)=D($O_X$), and supplies the canonical cone cofibers. A stable infinity-category has zero and finite limits and colimits, with pushouts exactly pullbacks; an exact functor preserves finite limits and colimits. Infinity-localization of an ordinary category means localization of its ordinary nerve.

[F4] The Definition, Source contract [F4], and External input of [[thm-author-c5bc2838d897-kflat-addendum-verdier-criterion]] explicitly import the adjunction $h\dashv N$ of HTT Proposition 1.2.3.1: maps $C\to N(B)$ correspond naturally to ordinary functors $hC\to B$. Here $N$ is the ordinary nerve, $hC$ is the ordinary homotopy category, and $B$ is any ordinary category in the working universe. The localization consequence is derived in step 3.1 below, rather than attributed to the supplier's Statement.

[F5] [Higher Algebra, the cited stable mapping and exactness passages](https://www.math.ias.edu/~lurie/papers/HA.pdf), reference 0, imports the natural suspension/loop mapping-space comparison and the exactness criterion under its stable-category hypotheses. In particular, for $m\geq1$ it identifies $\pi_m\operatorname{Map}_{\mathcal C}(P,Q)_0$ with $\operatorname{Hom}_{h\mathcal C}(P[m],Q)$; in degree zero the set of components is $\operatorname{Hom}_{h\mathcal C}(P,Q)$.

[F6] [[math:def-weak-homotopy-equivalence]] defines the component-bijection and all-basepoint homotopy-group test. [Higher Topos Theory, the cited spaces and equivalence passages](https://www.math.ias.edu/~lurie/papers/HTT.pdf), reference 1, supplies the passage to spaces as homotopy types and the fully faithful plus essentially surjective criterion for equivalence of infinity-categories. A mapping space is pointed here by the zero morphism, and its homotopy groups mean those of its homotopy type. The test uses component sets in degree zero, and groups only in positive degrees.

[F7] [[math:thm-the-cone-long-exact-sequence]] supplies the long exact sequence of homology for a cone in any abelian category. Reindexing by $C_n=C^{-n}$ gives the cochain sequence with consecutive terms $H^n(P)\to H^n(Q)\to H^n(\operatorname{Cone}(f))\to H^{n+1}(P)\to H^{n+1}(Q)$ for $f:P\to Q$.

## External input
Only the foundational premises [F5] and [F6] are directly imported here, with the exact locators, hypotheses and reading limits in references 0 and 1. The inputs [F1]–[F4] are supplied by the declared local items; [F6] also uses the published weak-equivalence definition, and [F7] uses the published cone long exact sequence. The roof argument, the application of the nerve adjunction to localization, and the upgrade of this actual inclusion functor are local arguments; no proof of the cited infinity-category foundations is claimed.

## Proof
1.1 The subcategory H is full because between K-flat complexes it keeps all chain maps modulo all chain homotopies. K-flatness is invariant under chain homotopy equivalence: if $f-g=dh+hd$, tensoring with a fixed complex $N$ takes $h$ to $H(n\otimes p)=(-1)^i n\otimes h(p)$ for $n$ of degree $i$; the total differential gives $T(N,f)-T(N,g)=dH+Hd$. Thus tensoring preserves homotopy equivalences, hence the acyclicity test defining K-flatness. Zero and shifts are K-flat, and the cone of a map between K-flat complexes is K-flat by [F2]. The ambient K is triangulated by [F0]. H is additive (finite direct sums follow from zero and cones of zero maps), is invariant under homotopy equivalence, and is closed under shifts and cones. The ambient cone triangles therefore give its inherited pretriangulated structure: TR1 and rotation stay inside H, and the ambient TR3 completion is a morphism in H by fullness. By [F1], S is saturated and compatible with the triangulated structure, and S⁻¹$K=D$($O_X$). [F0, F1, F2, given]

2.1 Every M∈K receives a quasi-isomorphism R→M with R K-flat by [F2]. This verifies the replacement hypothesis of Stacks Lemma 13.5.8 for every ambient object, without boundedness or global scheme hypotheses. Together with step 1.1 all its hypotheses hold. Thus $S_H$ is a saturated compatible multiplicative system and ($S_H$)⁻¹H→S⁻¹K is an exact equivalence by [F1]. The following two steps make the full-faithfulness content explicit. [F1, F2, step 1.1]

2.2 For fullness, let P,Q∈H and represent a derived morphism by the right roof $P\xleftarrow{s}M\xrightarrow{a}Q$ in K, with s∈S, using [F1]. Choose r:R→M as in [F2]. Then $P\xleftarrow{sr}R\xrightarrow{ar}Q$ is a roof in H with denominator sr∈$S_H$ and represents the same ambient derived morphism. Thus the map on each localized Hom set is surjective. Essential surjectivity on objects follows from the same replacement R→M. [F1, F2, step 1.1]

2.3 For faithfulness, let roofs $P\xleftarrow{s_i}R_i\xrightarrow{a_i}Q$ in H, for $i=1,2$, have equal images in S⁻¹K. The right-calculus equivalence relation in [F1] provides a common refining roof $P\xleftarrow{t}M\xrightarrow{b}Q$ in K and maps $u_i$:M→$R_i$ in K with $s_i$ $u_i$=t∈S and $a_i$ $u_i$=b. Choose a K-flat quasi-isomorphism r:R→M. Then $u_i$ r:R→$R_i$ are morphisms of the full subcategory H, the common denominator tr belongs to $S_H$, and $s_i$ $u_i$ r=tr and $a_i$ $u_i$ r=br as equalities in H. They are equalities of homotopy classes; any witnessing chain homotopies are the same homotopies in the full complex subcategory, so no lifting of homotopies is needed. Hence $P\xleftarrow{tr}R\xrightarrow{br}Q$ is a common refining roof in H. The two original roofs are equal in ($S_H$)⁻¹H by the same [F1] equivalence relation. Thus the map on Hom sets is injective. [F1, F2, step 1.1]

2.4 Let $C_X$=F(X)[$W_X$⁻¹] denote the common model's fiber. K-flat complexes are closed under tensor with the finite chain interval: with its two vertices and one edge, the interval tensor is the cone of $(-1,1):P\to P\oplus P$, up to the standard chain/cochain reindexing and tensor-order signs of [F2]–[F3]. Finite sums, shifts and cones stay K-flat by step 1.1. First localizing F(X) at chain homotopy equivalences therefore gives its dg nerve by [F3], which is stable by shift/cone closure. Its homotopy category is H: the supplied dg-nerve construction has cochain maps as edges, and identifies two such edges precisely modulo $f-g=dh+hd$. Its full subcategory of acyclic objects contains zero and is closed under shifts and cones: in [F7] vanishing of the outer cohomology terms forces that of the cone terms. The same exact sequence says that a map is a quasi-isomorphism exactly when its cone is acyclic, since vanishing of all cone terms is equivalent to each $H^n(f)$ being an isomorphism. Drew's theorem in [F3] thus identifies the further quasi-isomorphism localization with the stable Verdier quotient, so $C_X$ is stable. Inverting quasi-isomorphisms already inverts chain homotopy equivalences; the two successive localizations consequently have the same functor-category universal property as F(X)[$W_X$⁻¹]. Actual inclusion into all complexes therefore supplies $I_X:C_X\to\mathcal D(X)$. [F1, F2, F3, F7, step 1.1]

3.1 For an infinity-category $C$, arrows $W$ and localization $L=C[W^{-1}]$, test its functor-category universal property against $N(B)$ for an ordinary category $B$. By [F4], maps to $N(B)$ correspond to ordinary functors out of $hC$. This also identifies natural transformations: the generators-and-relations presentation in that supplier gives $h(C\times\Delta^n)=hC\times[n]$. Indeed an edge in the product factors into its $C$ edge and its ordinal edge; the two triangles of each product square impose their commutation, with exactly the relations in $hC$ and $[n]$. Thus maps $C\times\Delta^n\to N(B)$ are functors $hC\times[n]\to B$, and the functor infinity-category is the ordinary nerve of the category of functors $hC\to B$ and natural transformations. The localization property therefore identifies $\operatorname{Fun}(hL,B)$ with the full subcategory of $\operatorname{Fun}(hC,B)$ inverting the images of $W$, naturally in $B$. This is the ordinary localization property including transformations; its uniqueness up to equivalence gives $hL\simeq(hC)[(hW)^{-1}]$, compatibly with the localization functor. Apply this after the chain-homotopy localization in step 2.4, whose homotopy category is H. We obtain $hC_X\simeq(S_H)^{-1}H$. Compatibility for inclusion identifies $hI_X$ with the ordinary inclusion-induced equivalence in steps 2.1–2.3. [F1, F3, F4, step 2.1, step 2.2, step 2.3, step 2.4]

3.2 Consider inclusion from the dg nerve of K-flat complexes into the dg nerve of all complexes, followed by the supplied localization to $\mathcal D(X)$. This functor preserves zero and every cofiber sequence: every edge in a dg nerve is an actual cochain map, and its canonical cone square represents its cofiber by [F3]. The inclusion preserves that same square and its nullhomotopy, and the supplied ambient derived localization preserves these cone cofibers. It is therefore exact by [F5]. It sends every acyclic K-flat complex to zero, since its map to zero is a quasi-isomorphism. The exact-functor universal property of the stable Verdier quotient in [F3] now factors it through an exact functor $C_X\to\mathcal D(X)$. This factorization agrees with the actual inclusion-induced $I_X$: both factor the same functor from the dg nerve and the localization universal property identifies such factorizations including natural transformations. Hence $I_X$ itself is exact. [F3, F5, step 2.4]

4.1 For $P,Q\in C_X$ and $m\geq1$, [F5] identifies the homotopy group at zero of its mapping space with $\operatorname{Hom}_{hC_X}(P[m],Q)$, and similarly in $\mathcal D(X)$; degree zero gives the sets of components. Exactness of $I_X$ identifies shifts, so the full faithfulness of $hI_X$ identifies these groups and component sets. This comparison also handles all basepoints: [F5] gives $\operatorname{Map}(P,Q)\simeq\Omega\operatorname{Map}(P[-1],Q)$ naturally for exact functors. In this loop model, concatenate with a loop representing any chosen point; concatenation with its reversed loop is a homotopy inverse and moves the zero component to that point's component. The induced map is a loop map, so these translations commute with it up to homotopy. Thus its homotopy-group isomorphisms at zero transfer to every source basepoint. By [F6] every $\operatorname{Map}(P,Q)\to\operatorname{Map}(I_XP,I_XQ)$ is an equivalence of spaces. Essential surjectivity follows from $hI_X$, so [F6] makes $I_X$ an equivalence, already exact by step 3.2. This proves exactly the missing fiber comparison for the unchanged coherent-family construction. [F5, F6, step 3.1, step 3.2] ∎
