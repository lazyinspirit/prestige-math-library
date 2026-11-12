---
id: lem-adjudicate-bd5616aab033-qcqs-sites-affine-detection
kind: lemma
title: Qcqs scheme sites and affine detection for space-valued sheafification
status: draft
domain: mathematics
deps:
  - def-scheme-sites-and-sheafification
  - def-nisnevich-covering-interface
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-affine-open-subscheme
  - math:def-smooth-morphism-schemes
  - math:thm-smooth-morphisms-stable-base-change-composition
  - math:lem-etale-stable-base-change-composition
  - math:thm-fibre-products-of-schemes-exist
  - math:def-separated-scheme-over-base
  - math:thm-separatedness-gluing-overlap-criterion
  - math:def-scheme
  - math:lem-base-change-open-closed-immersions
  - math:lem-field-valued-points-of-schemes
  - math:ex-localization-etale-open-immersion
  - math:def-etale-morphism-schemes
  - math:def-open-immersion-schemes
dependency_roles:
  def-scheme-sites-and-sheafification: mathematical-premise
  def-nisnevich-covering-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-affine-open-subscheme: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:thm-smooth-morphisms-stable-base-change-composition: mathematical-premise
  math:lem-etale-stable-base-change-composition: mathematical-premise
  math:thm-fibre-products-of-schemes-exist: mathematical-premise
  math:def-separated-scheme-over-base: mathematical-premise
  math:thm-separatedness-gluing-overlap-criterion: mathematical-premise
  math:def-scheme: mathematical-premise
  math:lem-base-change-open-closed-immersions: mathematical-premise
  math:lem-field-valued-points-of-schemes: mathematical-premise
  math:ex-localization-etale-open-immersion: mathematical-premise
  math:def-etale-morphism-schemes: mathematical-premise
  math:def-open-immersion-schemes: mathematical-premise
formulation_deps:
  - def-scheme-sites-and-sheafification
  - def-nisnevich-covering-interface
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-affine-open-subscheme
  - math:def-smooth-morphism-schemes
  - math:def-separated-scheme-over-base
  - math:def-scheme
  - math:def-etale-morphism-schemes
argument_deps:
  - def-scheme-sites-and-sheafification
  - def-nisnevich-covering-interface
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-affine-open-subscheme
  - math:def-smooth-morphism-schemes
  - math:thm-smooth-morphisms-stable-base-change-composition
  - math:lem-etale-stable-base-change-composition
  - math:thm-fibre-products-of-schemes-exist
  - math:def-separated-scheme-over-base
  - math:thm-separatedness-gluing-overlap-criterion
  - math:def-scheme
  - math:lem-base-change-open-closed-immersions
  - math:lem-field-valued-points-of-schemes
  - math:ex-localization-etale-open-immersion
  - math:def-etale-morphism-schemes
  - math:def-open-immersion-schemes
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Marc Hoyois, A quadratic refinement of the Grothendieck–Lefschetz–Verdier
        trace formula, author version dated 30 October 2018
      url: https://hoyois.app.uni-regensburg.de/papers/lefschetz.pdf
      locator: Appendix C, quasi-topology and space-sheaf definitions, printed p. 31;
        Corollary C.2 and Lemma C.3, adjacent sheafification formula and
        complete proof, printed p. 32 (PDF page 32).
      statement: Under the three stated covering and Cech-product conditions for a
        fully faithful inclusion, space-valued sheaves are identified by
        restriction and right Kan extension; sheafification is restriction
        followed by the smaller sheafification and right Kan extension.
      hypotheses: The smaller category is small, the larger one locally small.
        Generating covers on the smaller category have preserved Cech products
        and cover in the larger topology; restrictions of larger generating
        covering sieves cover in the smaller topology; each larger object has a
        cover all of whose Cech intersections belong to the smaller category.
      reading_limits: Read Appendix C quasi-topology and space-sheaf definitions,
        Corollary C.2, and Lemma C.3 with its formula and complete proof in the
        live author PDF on 12 November 2026. Import only this general comparison
        result; its proof inputs are not reconstructed. The source uses a
        separate Nisnevich convention, which is not imported.
    - title: The Stacks Project, Schemes, Remark 26.21.18, tag 0816
      url: https://stacks.math.columbia.edu/tag/0816
      locator: Remark 26.21.18, parts (1)–(3) and proof; apply P = quasi-compact and
        quasi-separated, and P = separated
      statement: Affines are qcqs and separated. Morphisms between qcqs schemes are
        qcqs, and fiber products of qcqs schemes are qcqs. The corresponding
        separatedness closure statements also hold.
      hypotheses: Schemes and scheme morphisms; all three schemes in the fiber-product
        assertion have the stated property. No noetherian or finite-type
        assumption.
      reading_limits: Read the complete live Remark 26.21.18, including its proof, on
        12 November 2026. Use parts (1)–(3) for qcqs and separated schemes. The
        proof’s cited lemmas are imported through this result, not separately
        audited.
    - title: Jacob Lurie, Higher Topos Theory, author-hosted PDF
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Definitions 1.2.16.1 (printed p. 51), 5.1.0.1 (p. 315), 6.2.2.6 and
        Proposition 6.2.2.7 (p. 579), proof pp. 582–583; hypercompletion
        paragraph following Proposition 6.5.2.8 (p. 669); Proposition 6.5.2.14
        and proof (pp. 670–671); Remark 6.5.2.2 (p. 666).
      statement: The cited definitions specify spaces, space-valued presheaves and
        covering-sieve sheaves. Sheafification is a left exact reflective
        localization; hypercompletion is a further left exact localization. The
        local simplicial-presheaf model presents hypercomplete sheaves, with
        stalk detection conditional on enough points.
      hypotheses: A small Grothendieck site in the fixed universes; hypercompletion of
        its infinity-topos. Stalk detection has the stated enough-points
        condition. No equality of ordinary and hypercomplete sheaves is
        asserted.
      reading_limits: Read the cited definitions, Proposition 6.2.2.7 and its
        transfinite and adjunction proof, the hypercompletion paragraph,
        Proposition 6.5.2.14 and its proof, and Remark 6.5.2.2 in the live PDF
        on 12 November 2026. Import these foundations without reconstructing
        their prerequisites or claiming whole-book reading.
dependency_level: 7
---

## Statement
Assume the Axiom of Choice. Fix compatible Grothendieck universes $U\in V\in W$ with $\omega\in U$ and a qcqs scheme $X$ encoded in $U$. Existence of these universes is a separate assumption. Here qcqs means quasi-compact and quasi-separated. Use the following categories, containing all objects and morphisms with data in $U$, regarded as $V$-small categories; values of presheaves are spaces in the larger universe $W$.

The small Zariski category $\mathcal Z_X$ consists of quasi-compact open subschemes of $X$, with inclusions. The small Nisnevich category $\mathcal N_X$ consists of qcqs schemes étale over $X$, with all morphisms over $X$. The smooth big category $\mathcal S_X$ consists of qcqs schemes smooth over $X$, with all morphisms over $X$. Its morphisms need not themselves be smooth. The object $X$ is terminal in each category. These are the qcqs presentations meant here by the small Zariski, small Nisnevich and smooth big sites.

On $\mathcal Z_X$ use Zariski open covering families. On $\mathcal N_X$ use Nisnevich covering families: étale maps $T_i\to T$ such that every $t\in T$ has a lift $t_i$ inducing an isomorphism $\kappa(t)\to\kappa(t_i)$ of residue fields. On $\mathcal S_X$ use either these Nisnevich families or Zariski open covering families. Every source must be an object of the category in question; the topology is generated by the covering sieves of these families. Also write $a_{\rm Zar}$ for Zariski space-valued sheafification on any of the three categories, and $a_\tau$ for the chosen topology's space-valued sheafification. On $\mathcal Z_X$ no additional Nisnevich topology is asserted.

Covering families admit the required pullbacks within these categories, and every object has a finite covering by affine open objects. If $f:F\to G$ is a natural map of space-valued presheaves which is an equivalence on every affine object, then $a_{\rm Zar}f$ and $a_\tau f$ are equivalences. The same holds after applying hypercompletion to both sheafifications. No separatedness or noetherian assumption on $X$ is required, and no equality of ordinary sheafification and hypercompletion is asserted.

## Facts & Assumptions
[A1] Choice and universe closure have the stated meanings. Using all encoded $U$-data makes the categories $V$-small without selecting unrelated skeletons. The site, sieve and scheme-over-base conventions are supplied by the scheme-site interface. [[math:def-axiom-of-choice]] [[math:def-grothendieck-universe-closure-convention]] [[def-scheme-sites-and-sheafification]]

[F1] Qcqs and affine open subschemes have their scheme meanings. Every scheme is covered by affine open subschemes; quasi-compact means that every open cover has a finite subcover, so a quasi-compact scheme has a finite affine open subcover. Open subschemes carry the restricted structure sheaf. In a quasi-separated scheme finite intersections of quasi-compact opens are quasi-compact: write each as a finite union of affine opens and use the pairwise-intersection definition, then iterate. An open subscheme inherits quasi-separatedness by that same definition. [[math:def-quasi-compact-and-quasi-separated-scheme]] [[math:def-affine-open-subscheme]] [[math:def-scheme]]

[F2] Smooth objects use the published smooth-morphism definition. Smooth and étale morphisms are stable under base change and composition under the assumed Choice. Étale means smooth of relative dimension zero. An open immersion identifies its source with an open subscheme carrying the restricted structure sheaf. The direct open-immersion supplier proves that every such morphism is étale, including the empty immersion. At corresponding points the local rings, and hence residue fields, agree because the structure sheaf is restricted. Consequently every Zariski open covering family is Nisnevich by the residue-field lifting definition. The required scheme fiber products exist with their usual universal property. In particular, for maps of commutative unital rings $A\to B$ and $A\to C$, allowing the zero ring, $\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_A C)$, compatibly with the projections; thus a fiber product of affine schemes over an affine scheme is affine. Open immersions remain open immersions after arbitrary base change, with pullback the open inverse image. [[math:lem-base-change-open-closed-immersions]] [[math:def-smooth-morphism-schemes]] [[math:thm-smooth-morphisms-stable-base-change-composition]] [[math:lem-etale-stable-base-change-composition]] [[def-nisnevich-covering-interface]] [[math:thm-fibre-products-of-schemes-exist]] [[math:ex-localization-etale-open-immersion]] [[math:def-etale-morphism-schemes]] [[math:def-open-immersion-schemes]] [[math:def-affine-open-subscheme]]

[F3] Import the qcqs and separatedness closure facts in source reference 1. In particular, fiber products of qcqs schemes stay qcqs. Separated below always means absolutely separated over $\operatorname{Spec}\mathbb Z$. On a separated scheme, every intersection of two affine opens is affine, by the supplied affine-overlap criterion with this affine base. The same criterion shows that every open subscheme of a separated scheme is separated: its affine opens are affine opens of the ambient scheme, with the same intersections and restriction maps. [[math:def-separated-scheme-over-base]] [[math:thm-separatedness-gluing-overlap-criterion]]

[F4] Use the space and presheaf conventions of source reference 2: spaces are modeled by Kan complexes, and space-valued presheaves on an ordinary category $D$ form $\operatorname{Fun}(N(D)^{\rm op},\mathcal{S})$, where $N(D)$ is its nerve and $\mathcal{S}$ is the infinity-category of spaces in the specified value universe. A sheaf is a presheaf local for covering-sieve inclusions: restriction from a represented object to any covering sieve induces an equivalence of mapping spaces. Sheafification is the left adjoint to their full inclusion. Hypercompletion is the further localization at infinity-connective morphisms. A quasi-topology is a pullback-stable choice of sieves, as in source reference 0; its covering Čech products are the finite iterated fiber products of covering arrows. Import Hoyois Lemma C.3 with all three hypotheses in source reference 0, including its formula $a_D=u_*a_Cu^*$, where $u^*$ is restriction and $u_*$ is its right adjoint, right Kan extension. Corollary C.2 allows the generating open-cover quasi-topologies in that lemma. Import the space-valued reflective localizations of source reference 2. Its Proposition 6.5.2.14 identifies the simplicial-presheaf local model with hypercomplete sheaves; the separate stalkwise description has the enough-points hypothesis of Remark 6.5.2.2. These are foundational inputs, not consequences of set-valued sheafification.

[F5] For a field $K$ and scheme $T$, a morphism $\operatorname{Spec}K\to T$ is a point $t\in T$ together with an embedding $\kappa(t)\to K$. Taking $K=\kappa(t)$ and the identity gives its canonical field-valued point, compatibly with scheme morphisms. Use this field-valued part of the supplier; its separate common-overfield assertion is not needed. [[math:lem-field-valued-points-of-schemes]]

## External input
The exact imported premises are the space-valued comparison lemma and sheafification formula of source reference 0, the scheme closure facts of source reference 1, and the ordinary and hypercomplete localization inputs of source reference 2. The proof checks their hypotheses for the categories above; it does not reconstruct those foundational theorems.

## Proof
**Given:** The universes, qcqs base, categories and covers in the Statement, with [A1].

**Goal:** Verify the site domains and prove affine detection, including for nonseparated bases.

1.1 Closure of encoded scheme and map data under the indicated constructions follows from [A1]. In $\mathcal Z_X$, a covering pullback is intersection with a quasi-compact open and stays quasi-compact by [F1]. For $\mathcal N_X$ and $\mathcal S_X$, pull back a covering arrow $T_i\to T$ along any arrow $R\to T$: [F2] supplies the fiber product and preserves its étaleness or open-immersion property, while [F3] makes its source qcqs. Composing its étale projection to $R$ with $R\to X$ keeps it étale or smooth as required. For an open cover, these pullbacks are its open inverse images in $R$, which still cover $R$. For the Nisnevich condition, let $r\in R$ map to $t\in T$ and choose a lift $t_i\in T_i$ with $\kappa(t)\to\kappa(t_i)$ an isomorphism. By [F5], its inverse followed by $\kappa(t)\to\kappa(r)$ defines a map $\operatorname{Spec}\kappa(r)\to T_i$. Its composite to $T$ agrees with that of the canonical point $\operatorname{Spec}\kappa(r)\to R$. The fiber-product universal property in [F2] gives $\operatorname{Spec}\kappa(r)\to P=T_i\times_T R$ over $R$. If its image is $p\in P$, [F5] gives field maps $j:\kappa(r)\to\kappa(p)$ and $e:\kappa(p)\to\kappa(r)$ with $ej=\mathrm{id}$. Since $e$ is injective, $e(j(e(a)))=e(a)$ implies $j(e(a))=a$ for every $a\in\kappa(p)$; thus $j$ is an isomorphism. This is the required residue-field-preserving lift of $r$. Lifts also compose, so identity, composition and base change give the covering axioms. Affine open restrictions remain étale or smooth over $X$ by [F2]; they are qcqs by [F3]. A finite affine open cover exists by [F1], and all its finite intersections are qcqs opens. By [F2], this open cover is also Nisnevich. This verifies all needed covering pullbacks, without claiming that arbitrary fiber products of smooth objects over a smooth object must be smooth. [A1, F1, F2, F3, F5, given, construct]

2.1 Fix one of the categories $D$ and its Zariski covers. Let $D_{\rm sep}$ be its full subcategory of separated objects and $D_{\rm aff}$ its full subcategory of affine objects. Apply [F4] first to $D_{\rm aff}\hookrightarrow D_{\rm sep}$. On $D_{\rm aff}$ use the sieves generated by affine open covers, and on $D_{\rm sep}$ and $D$ use those generated by qcqs open covers. These are quasi-topologies: covering pullbacks exist by step 1.1; in $D_{\rm aff}$ the pullbacks are affine because all three schemes are affine, so the affine tensor-product case of [F2] applies. The generated topologies are Zariski, since every permitted open cover has an affine open refinement. For the first inclusion, each generating cover in $D_{\rm aff}$ consists of affine opens of an affine target, so its finite intersections are affine by [F3], and the same products are intersections in both categories. Every Zariski cover restricts to a cover after refining its open members by affine opens, which verifies hypothesis (b); hypotheses (a) and (c) follow from the same affine covers and intersection calculation. Next apply [F4] to $D_{\rm sep}\hookrightarrow D$. Generating covers in $D_{\rm sep}$ have separated qcqs open intersections, so their products are preserved. Restrictions of Zariski covering sieves again contain open covers by separated objects, verifying (b). For (c), cover any $T\in D$ by affine opens. Each nonempty finite intersection is a quasi-compact open subscheme of one affine, hence separated and qcqs by [F1] and [F3]; it remains an object by step 1.1. An intersection with no points is the empty affine scheme. Thus [F4] applies even when $T$ is nonseparated. Its two sheafification formulas show that an objectwise equivalence on $D_{\rm aff}$ is inverted by $a_{\rm Zar}$. Finally every $\tau$-sheaf is a Zariski sheaf since $\tau$ contains the Zariski covers; the reflective universal property in [F4] therefore makes $a_\tau$ factor through $a_{\rm Zar}$. It too inverts $f$, as does the further hypercompletion functor. This establishes the asserted comparisons with both localization conventions kept distinct. [A1, F1, F2, F3, F4, step 1.1] ∎
