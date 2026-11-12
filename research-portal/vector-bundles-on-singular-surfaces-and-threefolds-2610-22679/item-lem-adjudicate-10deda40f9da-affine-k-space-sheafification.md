---
title: Full affine K-space comparison and its sheafification
status: published
research_item: lem-adjudicate-10deda40f9da-affine-k-space-sheafification
dependency_level: 13
sources:
  references:
    - title: Charles Weibel, The K-book, author-hosted Chapter V
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.V.pdf
      locator: Theorem V.2.2 and its displayed proof, printed pp. 13–14
      statement: The exact degree-zero inclusion of finite projective modules into
        their bounded complexes induces a natural equivalence of entire
        K-spaces.
      hypotheses: Finite projective modules over an arbitrary commutative unital ring;
        split exact structure; degreewise split cofibrations and
        quasi-isomorphisms on bounded complexes. Kernels of surjections of
        projectives are projective.
      reading_limits: This assignment read the live author PDF extraction of Theorem
        V.2.2 and the displayed proof on printed pp. 13–14. The earlier item
        also recorded V.2.7.2–2.7.3; that passage was not reread. Localization
        and approximation foundations remain imported.
    - title: Charles Weibel, The K-book, author-hosted Chapter IV
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.IV.pdf
      locator: IV.8.3.2 and IV.8.5, p. 68; Exercises IV.8.5–8.7, pp. 74–75
      statement: The canonical exact-category S/Q comparison identifies the entire
        K-spaces and their object and automorphism maps.
      hypotheses: A small exact category, including finite projective modules and the
        vector-bundle exact categories in the fixed universes. The site-wide
        application uses the general exact-category S/Q comparison; it does not
        assume all vector-bundle sequences split globally.
      reading_limits: This assignment read IV.8.3.2, IV.8.5 and its infinite-loop
        discussion, and the full published S/Q comparison outline in Exercises
        IV.8.5–8.7. The theorem and exercise outline are imported, not claimed
        as a completed local reconstruction.
    - title: Blumberg–Gepner–Tabuada, A universal characterization of higher algebraic
        K-theory, arXiv:1001.2282v4
      url: https://arxiv.org/pdf/1001.2282v4
      locator: Definition 7.1 and S construction/core map, pp. 44–45; Lemma
        7.11/Corollary 7.12, pp. 48–49; Proposition 9.32 and Remark 9.33, p. 64;
        Definition 9.6/Theorem 9.8, p. 58, used via the enhanced supplier
      statement: For a saturated Waldhausen category with factorization the canonical
        entire connective K-space agrees naturally with the
        infinity-localization K-space. The canonical connective-to-nonconnective
        map is an isomorphism in positive degrees and also degree zero for an
        idempotent-complete underlying category. Definition 7.1 defines
        cofiber-flag S diagrams and the following text gives their natural core
        map.
      hypotheses: Smallness in the fixed universes, DHKS-saturation and factorization;
        bounded projective complexes satisfy these. The target perfect category
        is stable and idempotent complete.
      reading_limits: This assignment read the live versioned PDF extraction of
        Definition 7.1 and the S construction and core map, Lemma 7.11 and
        Corollary 7.12 with their displayed proofs, and Proposition 9.32/Remark
        9.33. The identification with the specified nonconnective model is
        supplied by the inspected enhanced-comparison item. Definition 9.6 and
        Theorem 9.8 were not newly read or reconstructed.
    - title: Asakura–Sato, Chern Class and Riemann–Roch Theorem for Cohomology Theory
        without Homotopy Invariance, 2019
      url: https://www.ms.u-tokyo.ac.jp/journal/26-3-1.pdf
      locator: "Definition 5.1(1),(3), printed pp. 268–269; Steps 1–2 and Proposition
        5.3, p. 270 (earlier construction record: Steps 1–3, pp. 269–271)"
      statement: The K-space sheaf is the local sheafification of the exact-category Q
        presheaf; the universal class is completed on this sheaf model.
      hypotheses: The source uses its specified Zariski simplicial-sheaf homotopy
        category. Only its formal Q-space model is used here. The qcqs Nisnevich
        and smooth site application is proved with the separate site helper, not
        imported as a geometric theorem of this source.
      reading_limits: This assignment read the live journal PDF extraction of
        Definition 5.1(1),(3), Steps 1–3, Proposition 5.3 and formula (5.3.1),
        printed pp. 268–271. Only the formal local Q-model convention is used
        here. No full admissibility theorem or geometric extension to arbitrary
        qcqs sites is imported.
    - title: Jacob Lurie, Higher Topos Theory, author-hosted PDF
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Proposition 6.2.2.7, printed p. 579, proof pp. 582–583; hypercompletion
        paragraph after Proposition 6.5.2.8, p. 669; Proposition 6.5.2.14 and
        proof, pp. 670–671; Remark 6.5.2.2, p. 666
      statement: Space-valued sheafification is a left exact reflective localization.
        Hypercompletion is a further left exact localization. The
        simplicial-presheaf local model presents hypercomplete sheaves; when the
        set-sheaf topos has enough points, its weak equivalences are detected on
        all stalks.
      hypotheses: A small Grothendieck site in the fixed universes; hypercompletion of
        its infinity-topos. Stalk detection has the stated enough-points
        condition. No equality of ordinary and hypercomplete sheaves is
        asserted.
      reading_limits: This assignment read the live author PDF extraction of the
        proposition, its transfinite construction and adjunction proof, the
        defining hypercompletion paragraph, and Proposition 6.5.2.14 with its
        proof; also Remark 6.5.2.2. These are imported foundational inputs, with
        no reconstruction of their cited foundations or full-book reading.
---

PDF p. 17: Corollary 6.9: actual supported Chern operation; affine perfect K-space prerequisite

## Prerequisites

- [thm-adjudicate-9ead0798f06a-projective-q-w-comparison](item-thm-adjudicate-9ead0798f06a-projective-q-w-comparison)
- [thm-author-da44cda020c0-units-k1-enhanced-comparisons](item-thm-author-da44cda020c0-units-k1-enhanced-comparisons)
- [lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model)
- [lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence)
- [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)
- [lem-adjudicate-bd5616aab033-qcqs-sites-affine-detection](item-lem-adjudicate-bd5616aab033-qcqs-sites-affine-detection)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [math:def-exact-sequence-sheaves](https://alphabetamath.cc/item/def-exact-sequence-sheaves)
- [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)
- [math:thm-exactness-of-sheaves-stalkwise](https://alphabetamath.cc/item/thm-exactness-of-sheaves-stalkwise)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)
- [lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback](item-lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback)
- [` Charles Weibel, The K-book, author-hosted Chapter V · Theorem V.2.2 and its displayed proof, printed pp. 13–14 `](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.V.pdf)
- [` Charles Weibel, The K-book, author-hosted Chapter IV · IV.8.3.2 and IV.8.5, p. 68; Exercises IV.8.5–8.7, pp. 74–75 `](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.IV.pdf)
- [` Blumberg–Gepner–Tabuada, A universal characterization of higher algebraic K-theory, arXiv:1001.2282v4 · Definition 7.1 and S construction/core map, pp. 44–45; Lemma 7.11/Corollary 7.12, pp. 48–49; Proposition 9.32 and Remark 9.33, p. 64; Definition 9.6/Theorem 9.8, p. 58, used via the enhanced supplier `](https://arxiv.org/pdf/1001.2282v4)
- [` Asakura–Sato, Chern Class and Riemann–Roch Theorem for Cohomology Theory without Homotopy Invariance, 2019 · Definition 5.1(1),(3), printed pp. 268–269; Steps 1–2 and Proposition 5.3, p. 270 (earlier construction record: Steps 1–3, pp. 269–271) `](https://www.ms.u-tokyo.ac.jp/journal/26-3-1.pdf)
- [` Jacob Lurie, Higher Topos Theory, author-hosted PDF · Proposition 6.2.2.7, printed p. 579, proof pp. 582–583; hypercompletion paragraph after Proposition 6.5.2.8, p. 669; Proposition 6.5.2.14 and proof, pp. 670–671; Remark 6.5.2.2, p. 666 `](https://www.math.ias.edu/~lurie/papers/HTT.pdf)


## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds, including $\omega$ in the data universe. Existence of these universes is a separate assumption. For any commutative unital ring $A$, let $\mathcal P(A)$ be its exact category of finite projective modules and let $\mathcal C(A)=\mathrm{Ch}^b(\mathcal P(A))$ have degreewise split cofibrations and quasi-isomorphisms. The canonical comparisons give natural equivalences of entire pointed spaces
$$\Omega BQ\mathcal P(A)\simeq\Omega^\infty K^W(\mathcal C(A))\simeq\Omega^\infty K_{\mathrm{Perf}}(\operatorname{Spec}A).$$
Here $K^W$ denotes the connective Waldhausen spectrum, whose zeroth infinite-loop space is the Waldhausen K-space, and $K_{\mathrm{Perf}}$ is the specified nonconnective perfect-complex theory. The equivalences include components, preserve direct sum and carry the actual degree-zero object and automorphism maps to those of the same perfect objects.

For every qcqs scheme $X$, use the qcqs presentations of the small Zariski, small Nisnevich and smooth big sites: respectively quasi-compact open subschemes, qcqs étale $X$-schemes, and qcqs smooth $X$-schemes; arrows are inclusions in the first and all $X$-morphisms in the others. The first has Zariski open covers, the second Nisnevich covers, and the third either topology. Nisnevich covers are étale families with a residue-field-preserving lift of every target point. All scheme data satisfy the fixed size bound. On these sites let $\mathcal V(T)$ be the exact category of finite locally free $\mathcal O_T$-modules with sheaf short exact sequences, and set $\mathcal Q(T)=\Omega BQ\mathcal V(T)$ and $\mathcal K(T)=\Omega^\infty K_{\mathrm{Perf}}(T)$, using their coherent pullbacks.

The actual degree-zero bundle-to-perfect functor induces a natural arrow $\mathcal Q\to\mathcal K$ which is an equivalence on every affine object. Its derived space-valued sheafification is therefore an equivalence on each indicated site. Finite affine open covers and quasi-compact open refinements suffice, including for nonseparated $X$. When using the source's stalkwise local homotopy convention, take the further hypercomplete replacement consistently on both sides. The perfect K-space has its canonical natural map into derived sections of the chosen common model, where sections at $X$ mean derived evaluation at the terminal object. No global equality of vector-bundle and perfect $K_0$ is asserted, and ordinary sheafification is not identified with hypercompletion.

## Statement references
[lem-adjudicate-bd5616aab033-qcqs-sites-affine-detection](item-lem-adjudicate-bd5616aab033-qcqs-sites-affine-detection)

[def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)

[math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

[math:def-exact-sequence-sheaves](https://alphabetamath.cc/item/def-exact-sequence-sheaves)

## External input
Import the full S/Q and Gillet–Waldhausen comparisons at source references 1 and 0, and BGT's S construction and comparisons at source reference 2. In particular, use Remark 9.33's degree-zero clause with its idempotent-completeness hypothesis. The local Q-model convention in reference 3 and the space-valued localizations in reference 4 are separate inputs. The site helper supplies the checked qcqs domains and affine-detection argument. The proof below is a local application and composition, not a reconstruction of the imported foundations.

## Facts & Assumptions
[A1] Choice is used through the supplied essentially small enhanced models and small presentations. Their compatible universes include $\omega$; their existence is assumed independently of Choice. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] The full Quillen–Waldhausen supplier gives the entire affine comparison with the actual degree-zero object map and extension-of-scalars naturality. It also specifies the nerve, Q and S constructions and the distinction between the K-space and its spectrum. The general exact-category S/Q comparison and its core maps are imported at source reference 1. [thm-adjudicate-9ead0798f06a-projective-q-w-comparison](item-thm-adjudicate-9ead0798f06a-projective-q-w-comparison)

[F2] The enhanced supplier gives the full Waldhausen-to-connective comparison and the canonical positive-degree comparison with the specified nonconnective functor. The additional degree-zero clause of BGT Remark 9.33 at source reference 2 applies when the underlying stable category is idempotent complete. BGT Definition 7.1 and the following construction send cofiber flags to the connective K-space and give its core map. [thm-author-da44cda020c0-units-k1-enhanced-comparisons](item-thm-author-da44cda020c0-units-k1-enhanced-comparisons)

[F3] The bounded-projective model supplies K-projectivity, shifts, the signed cochain cone and the actual localization. Associated sheaf gives the enhanced affine equivalence. The specified perfect category is stable and idempotent complete; its K-theory and coherent derived pullbacks exist for every qcqs scheme. The scheme-perfect definition retains ambient cofiber sequences, and the derived enhancement identifies the actual cochain cone as a cofiber for module sheaves on every scheme. The coherent pullback supplier computes derived pullback on local bounded finite locally free representatives by ordinary degreewise pullback, compatibly with the single enhanced family. The affine Euler bridge also identifies the degree-zero object-class map. [lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model) [lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence) [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge) [lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback](item-lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback) [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)

[F4] The exact HTT input at source reference 4 supplies derived space-valued sheafification and its left exactness, and separately further left exact hypercompletion. HTT Proposition 6.5.2.14 identifies the simplicial-presheaf local model with hypercomplete sheaves; Remark 6.5.2.2 supplies its stalkwise description when there are enough points. Asakura–Sato Definition 5.1 and Proposition 5.3 at reference 3 specify the formal local Q-model convention. These are not inferred from set-valued sheafification. The general site and size terminology is supplied here. Derived sections of a space-valued local model mean evaluation after the chosen derived local replacement. [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[F5] The site helper defines precisely the three categories and covering families used here, proves closure under covering pullbacks and finite affine open coverings, and proves that an affine-objectwise equivalence is inverted by ordinary space-valued sheafification and then by hypercompletion. Its proof treats nonaffine intersections on nonseparated schemes. [lem-adjudicate-bd5616aab033-qcqs-sites-affine-detection](item-lem-adjudicate-bd5616aab033-qcqs-sites-affine-detection)

[F6] Bundles are finite locally free module sheaves and exact sequences are sheaf short exact sequences. Exactness can be tested on stalks. Pullback of modules is the sheaf tensor formula; it preserves finite free modules, since tensoring the ring with itself gives the ring, and preserves split sequences by their direct-sum form. Thus it preserves locally split bundle sequences. [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank) [math:def-exact-sequence-sheaves](https://alphabetamath.cc/item/def-exact-sequence-sheaves) [math:thm-exactness-of-sheaves-stalkwise](https://alphabetamath.cc/item/thm-exactness-of-sheaves-stalkwise) [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)

## Proof
**Given:** The ring, qcqs site presentations, category models, Choice and compatible size bounds in the Statement.

**Goal:** Establish the entire affine comparison and its well-defined local use.

1.1 Apply [F1]'s entire projective comparison. A bounded acyclic projective complex is contractible by the K-projective property in [F3]. For a map $f:P\to Q$, the graph map $P\to Q\oplus\operatorname{Cone}(\mathrm{id}_P)$, $p\mapsto(f(p),(p,0))$, is a cochain map and degreewise split monomorphism; projection to $Q$ is a quasi-isomorphism because the identity cone is contractible. This gives factorization inside bounded finite projectives. A map invertible in the localization is a quasi-isomorphism because its image in the derived category is invertible, verifying DHKS-saturation. The localization is the actual stable idempotent-complete affine perfect category by [F3]. Compose [F1]'s S/Q and degree-zero bounded-complex comparisons with [F2]'s enhanced and canonical nonconnective comparisons. The positive-degree agreement and BGT Remark 9.33's degree-zero clause apply; the Euler bridge identifies this same object-class map. Hence the comparison is an equivalence of entire spaces. Direct-sum translations in these grouplike K-spaces reduce all components and basepoints to the zero component. Scalar extension preserves projectives, split cofibrations and the contractible cones of quasi-isomorphisms, so the functors and comparisons are natural; they preserve direct sums and the same object and automorphism core maps. [A1, F1, F2, F3, given, construct]

2.1 Every scheme object used here is qcqs by [F5], so [F3] defines $\mathcal K$ and all its coherent pullbacks on the whole site. Use all bundle sheaves, maps and admissible flags encoded in the fixed data universe, regarded as small in the next universe. Pullbacks and their canonical composition isomorphisms give a coherent diagram; no independent skeleton choices are needed. The bundle exact category is well-defined: sums and extensions of finite locally free modules are finite locally free, and the kernel of a bundle surjection is finite locally free. Indeed trivialize the quotient near a point, lift its finite basis through the surjection on stalks using [F6], represent these finitely many lifts on a common neighbourhood and shrink until their images are the chosen basis sections. This splits the sequence locally. For an extension of two bundles, its middle term is therefore locally a sum of two finite free modules. For the kernel of a surjection of bundles, take a common affine trivializing neighbourhood: the splitting exhibits the kernel as the associated sheaf of a finite projective summand, which is finite locally free by [F3]'s degree-zero affine model. The inherited exact structure follows as well: pushouts of admissible injections and pullbacks of admissible surjections are locally split sequences with bundle end terms, so remain bundle sequences. By [F6], arbitrary pullback preserves these sequences and bundles. For a short exact bundle sequence, the cone of its injection maps to its quotient in degree zero; local splitting makes this map a quasi-isomorphism on every stalk. The cone-cofiber and full-perfect-subcategory interfaces in [F3] therefore send the sequence to its actual cofiber sequence. Thus the degree-zero bundle inclusion sends each admissible flag to its cofiber flag in $\operatorname{Perf}(T)$; apply [F2]'s S construction and then the canonical nonconnective map, and precompose with the inverse of [F1]'s natural general S/Q equivalence. This constructs the pointed natural arrow $\mathcal Q\to\mathcal K$ on every site object, without asserting an enhanced equivalence for globally bounded bundle complexes there. Compatibility with pullback is the coherent derived-pullback compatibility of [F3], restricted to these degree-zero objects and flags; local freeness makes their ordinary pullback compute derived pullback. On an affine it is exactly step 1.1's arrow. The affine-detection theorem in [F5] therefore makes its derived sheafification an equivalence. By left exactness in [F4], sheafification of the looped Q-model also agrees with looping the sheafified Q-model, using its zero basepoint. Applying further hypercompletion gives the same comparison in the source's stalkwise convention. If $L_\tau$ denotes the chosen local replacement, its natural unit gives $\mathcal K(X)\to(L_\tau\mathcal K)(X)$, the required map into derived sections of the common model. Naturality gives compatible restriction maps. This proves the local comparison and global unit without identifying the unit as an equivalence or global bundle $K_0$ with perfect $K_0$. [A1, F1, F2, F3, F4, F5, F6, step 1.1] ∎

## Source versions and reading limits
The current repair reopened the primary URLs and read only the passages specified in the updated source records. The earlier item recorded cached PDF SHA256 identifiers: Chapter IV `9f1c1b8cccfe19d547c27dd04c61f198fd7a0cddd0018a0b84442b00fa575248`; Chapter V `52dcc8ee3a1764e5ea309c59f093ac8e2a1ea64f3b94bacc05e6a2b6125b1da8`; BGT v4 `08a8ae7fb5715d8269fd728c8a20d72403527aaefbeaa974b7040ec21d667a2d`; Asakura–Sato 2019 `6736b9710dd4d8d5fd89dfa2863a72cf90fc274ba47a45651fc7024209b4dcbf`. They are retained as historical identifiers; no new local-byte authentication is claimed. The earlier HTT access date was 9 November 2026; this assignment read the live extraction on 12 November 2026. Long comparison and localization foundations remain explicit imported premises. This is a repair proposal, with no independent acceptance asserted.
