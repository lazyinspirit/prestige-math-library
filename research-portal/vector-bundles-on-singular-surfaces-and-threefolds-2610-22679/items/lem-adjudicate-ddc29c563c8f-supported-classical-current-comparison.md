---
id: lem-adjudicate-ddc29c563c8f-supported-classical-current-comparison
kind: lemma
title: Classical supported K zero and the current Euler map agree
status: draft
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - def-nonconnective-k-spectrum-interface
  - prop-supported-k-zero-devissage
  - prop-perfect-k-localization-input
  - lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison
  - thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input
  - lem-fiber-sequence-homotopy-exactness
  - math:def-smooth-morphism-to-field-classical
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-quasi-projective-morphism
  - math:def-closed-immersion-schemes
  - math:def-integral-scheme
  - math:def-generic-point-irreducible-closed-subset
  - math:def-residue-field-scheme-point
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:lem-noetherian-open-subsets-are-quasi-compact
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:lem-finite-type-local-on-source-and-target
  - math:def-quasi-compact-and-quasi-separated-morphism
  - math:def-open-immersion-schemes
  - math:def-locally-closed-immersion
  - math:thm-spectrum-sober
  - math:def-stalk-of-presheaf
  - math:thm-exactness-of-sheaves-stalkwise
  - math:def-coherent-module-scheme
  - math:def-finite-type-finite-presentation-module-sheaf
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  prop-supported-k-zero-devissage: mathematical-premise
  prop-perfect-k-localization-input: mathematical-premise
  lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison: mathematical-premise
  thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input: mathematical-premise
  lem-fiber-sequence-homotopy-exactness: mathematical-premise
  math:def-smooth-morphism-to-field-classical: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-quasi-projective-morphism: mathematical-premise
  math:def-closed-immersion-schemes: mathematical-premise
  math:def-integral-scheme: mathematical-premise
  math:def-generic-point-irreducible-closed-subset: mathematical-premise
  math:def-residue-field-scheme-point: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:thm-noetherian-ring-has-noetherian-spectrum: mathematical-premise
  math:lem-noetherian-open-subsets-are-quasi-compact: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:lem-finite-type-local-on-source-and-target: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-morphism: mathematical-premise
  math:def-open-immersion-schemes: mathematical-premise
  math:def-locally-closed-immersion: mathematical-premise
  math:thm-spectrum-sober: mathematical-premise
  math:def-stalk-of-presheaf: mathematical-premise
  math:thm-exactness-of-sheaves-stalkwise: mathematical-premise
  math:def-coherent-module-scheme: mathematical-premise
  math:def-finite-type-finite-presentation-module-sheaf: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Blumberg–Gepner–Tabuada, A universal characterization of higher algebraic
        K-theory, arXiv:1001.2282v4
      url: https://arxiv.org/pdf/1001.2282v4
      locator: §7.1; Lemma 7.11 and Corollary 7.12, printed pp.48–49; Definition 9.6
        and Theorem 9.8, p.58; Definition 9.30, Proposition 9.32 and Remark
        9.33, pp.63–64.
      statement: The canonical Waldhausen-to-localized-category comparison is natural
        in weakly exact functors. Its map to nonconnective K-theory preserves
        object classes and is an isomorphism on positive homotopy groups and on
        degree zero when the localized stable category is idempotent complete.
        Theorem 9.8 identifies the nonconnective functor with the U_loc
        realization.
      hypotheses: Small DHKS-saturated Waldhausen category with factorization, using
        compatible presentation universes; for degree zero its stable
        localization must be idempotent complete.
      reading_limits: "This repair read BGT Lemma 7.11, Corollary 7.12 and Proposition
        9.32 with their displayed arguments and Remark 9.33 in the primary PDF
        text. No fresh reading of the full section 7.1, Definition 9.6 or
        Theorem 9.8 is claimed; these retain the incoming import scope.
        Historical incoming reading record (not fresh credit): Current scoped
        repair read the primary PDF text of Lemma 7.11 and Corollary 7.12 with
        their displayed arguments, Definition 9.6 and Theorem 9.8 statements,
        Definition 9.30, and Proposition 9.32 with Remark 9.33. The construction
        and foundational equivalences remain imported; no fresh reading of all
        of section 7.1 or reconstruction of the proof of Theorem 9.8 is claimed.
        Historical incoming reading record (not fresh credit): This repair read
        the primary PDF text of Lemma 7.11/Corollary 7.12 and their displayed
        arguments, Definition 9.6, Theorem 9.8 statement, and Definition
        9.30/Proposition 9.32/Remark 9.33. §7.1 supplies the S-construction
        object map. Rigidification, comparison foundations and the full proof of
        Theorem 9.8 are imported, not reconstructed; no full-paper or scan
        reading is claimed."
    - title: Charles Weibel, The K-book, Chapter V
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.V.pdf
      locator: Theorem 2.2 pp.13–14; §2.7.3 p.18; Theorem 3.4 p.22; Theorem 3.9
        pp.27–28; §3.10.2 pp.28–29. Theorem 4.1 p.33; Exercise 4.3 p.35; Example
        6.11 p.47 (printed/PDF numbering).
      statement: Degree-zero inclusion and perfect-complex approximation compare
        classical vector-bundle and Waldhausen K-theory on quasi-projective
        schemes. Theorem 3.9 compares saturated cone-and-shift-closed complex
        categories with equivalent derived categories. On regular ambient
        schemes the Cartan map is an equivalence; §3.10.2 describes supported
        G-theory by complexes acyclic on the open complement. For any closed
        subscheme W of Noetherian V, closed direct image identifies G(W) with K
        of coherent V-modules supported on |W|; localization identifies this
        with fib(G(V)→G(V\W)). In the coherent-complex model a sheaf F maps to
        i_*F[0].
      hypotheses: Use quasi-projective finite-type schemes over a field, regular for
        the Cartan comparison, noetherian for the coherent supported model. The
        resolution theorem requires the actual inclusion of saturated Waldhausen
        subcategories of complexes, closed under cones and shifts, inducing an
        equivalence of derived categories. Closed-support dévissage uses the
        given closed subscheme W, without reducedness or regularity of W; the
        ambient V is Noetherian. The support category depends on |W|, while the
        equivalence from G(W) uses its actual closed immersion.
      reading_limits: "This repair read the primary Chapter V PDF text of Theorem 3.9
        and its approximation reduction, sections 2.7.3 and 3.10.2, Theorem 4.1
        and its displayed proof, Exercise 4.3, and Example 6.11. Exercise 4.3
        has no supplied solution; its closed-subscheme equivalence is explicitly
        invoked in Example 6.11. Quillen localization and higher dévissage
        remain imported; no independent reconstruction or full-chapter reading
        is claimed. Historical incoming reading record (not fresh credit):
        Current scoped repair read the primary PDF text of Theorem 2.2 and the
        beginning of its argument, section 2.7.3, Theorem 3.4, Theorem 3.9 and
        the displayed portion of its argument through the approximation
        reduction, and section 3.10.2. SGA6/TT, Waldhausen foundations, and
        remaining proof details are imported; no full-chapter reading is
        claimed. Historical incoming reading record (not fresh credit): This
        repair read the stated passages in the author-hosted PDF text, including
        the Theorem 2.2 and Theorem 3.9 displayed arguments and the support
        passage in §3.10.2. Their cited SGA6/TT and Waldhausen foundations
        remain imported; no fresh reading of those underlying papers is
        claimed."
    - title: Kahn–Levine, Motives of Azumaya algebras, published final
      url: https://webusers.imj-prg.fr/~bruno.kahn/preprints/Azumaya-final.pdf
      locator: Remark 6.1.2 p.534; Lemma 6.2.1 p.535, especially the first
        generic-restriction display of its proof; Lemmas 6.4.1–6.4.2 p.539,
        especially the support-pair natural transformation in the proof of Lemma
        6.4.2.
      statement: For ordinary K-theory the classical K-to-G transformation on a smooth
        ambient is an equivalence. It acts on support pairs and its cycle map is
        the actual coherent generic restriction, compatible with the K-to-G map.
      hypotheses: Specialize A=k; smooth quasi-projective finite-type ambient over a
        field, closed possibly singular support.
      reading_limits: "This repair read the primary final PDF text of Lemma 6.2.1 and
        its displayed proof and Lemmas 6.4.1–6.4.2 with their displayed
        arguments, including the support-pair transformation and generic
        restriction. No fresh reading of Remark 6.1.2 or the general slice
        package is claimed. Historical incoming reading record (not fresh
        credit): Current scoped repair read the primary final PDF text of Remark
        6.1.2, Lemma 6.2.1 and its displayed proof, and Lemmas 6.4.1–6.4.2 with
        their displayed arguments. In particular the first display of the proof
        of Lemma 6.2.1 is the coherent restriction to generic residue fields;
        the proof of Lemma 6.4.2 is the natural support-pair K-to-G
        construction. Quillen foundations and the general coniveau and slice
        package are imported, not reconstructed. Historical incoming reading
        record (not fresh credit): This repair read the cited statements,
        supported restriction definition, and displayed proof of Lemma 6.4.2 in
        the final PDF text. Quillen localization and resolution are imported;
        the article is not audited for source defects."
    - title: The Stacks Project, Schemes smooth over fields
      url: https://stacks.math.columbia.edu/tag/04QM
      locator: Lemma 33.25.3.
      statement: A scheme smooth over a field is regular.
      hypotheses: A smooth morphism to Spec(k), k a field.
      reading_limits: "This repair read Lemma 33.25.3 (tag 056S) and its displayed
        proof. Its cited algebra and regular-scheme criteria remain imported.
        Historical incoming reading record (not fresh credit): Current scoped
        repair read the Lemma 33.25.3 statement and its displayed proof at tag
        056S. The cited commutative-algebra and regular-scheme criteria are
        imported. Historical incoming reading record (not fresh credit): Read
        Lemma 33.25.3 and its displayed proof; the linked commutative-algebra
        theorem is imported."
    - title: The Stacks Project, Algebraic schemes
      url: https://stacks.math.columbia.edu/tag/06LF
      locator: Definition 33.20.1 and following Noetherianity paragraph.
      statement: A finite-type scheme over a field is Noetherian.
      hypotheses: Structure morphism of finite type over a field.
      reading_limits: "This repair read Definition 33.20.1 and the immediately
        following Noetherianity paragraph. The cited Morphisms Lemma 29.15.6
        remains imported. Historical incoming reading record (not fresh credit):
        Current scoped repair read Definition 33.20.1 and the following
        Noetherianity paragraph. Its cited Morphisms Lemma 29.15.6 remains
        imported. Historical incoming reading record (not fresh credit): Read
        the definition and following paragraph; its cited Morphisms Lemma
        29.15.6 is imported."
    - title: The Stacks Project, Morphisms and dimensions of fibres
      url: https://stacks.math.columbia.edu/tag/02FW
      locator: Lemma 29.29.5 and displayed proof.
      statement: A finite-type morphism with quasi-compact target has bounded fibre
        dimension; over a field this gives finite dimension.
      hypotheses: Finite-type morphism and quasi-compact target; apply to the spectrum
        of a field.
      reading_limits: "This repair read Lemma 29.29.5 (tag 0A3V) and its displayed
        proof. Its cited openness and finite-dimension foundations remain
        imported. Historical incoming reading record (not fresh credit): Current
        scoped repair read Lemma 29.29.5 and its displayed proof at tag 0A3V.
        Earlier dimension and openness results remain imported. Historical
        incoming reading record (not fresh credit): Read Lemma 29.29.5 and its
        displayed proof; preceding dimension and openness results are imported."
dependency_level: 17
formulation_deps:
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - def-nonconnective-k-spectrum-interface
  - prop-supported-k-zero-devissage
  - prop-perfect-k-localization-input
  - lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison
  - lem-fiber-sequence-homotopy-exactness
  - math:def-smooth-morphism-to-field-classical
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-quasi-projective-morphism
  - math:def-closed-immersion-schemes
  - math:def-integral-scheme
  - math:def-generic-point-irreducible-closed-subset
  - math:def-residue-field-scheme-point
  - math:thm-spectrum-sober
  - math:def-stalk-of-presheaf
  - math:def-coherent-module-scheme
argument_deps:
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - def-nonconnective-k-spectrum-interface
  - prop-supported-k-zero-devissage
  - prop-perfect-k-localization-input
  - lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison
  - thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input
  - lem-fiber-sequence-homotopy-exactness
  - math:def-smooth-morphism-to-field-classical
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-quasi-projective-morphism
  - math:def-closed-immersion-schemes
  - math:def-integral-scheme
  - math:def-generic-point-irreducible-closed-subset
  - math:def-residue-field-scheme-point
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:lem-noetherian-open-subsets-are-quasi-compact
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:lem-finite-type-local-on-source-and-target
  - math:def-quasi-compact-and-quasi-separated-morphism
  - math:def-open-immersion-schemes
  - math:def-locally-closed-immersion
  - math:thm-spectrum-sober
  - math:def-stalk-of-presheaf
  - math:thm-exactness-of-sheaves-stalkwise
  - math:def-coherent-module-scheme
  - math:def-finite-type-finite-presentation-module-sheaf
---

## Statement
Assume the Axiom of Choice and fixed compatible universes for schemes, sheaves, their enhanced categories and K-theory presentations. Let $V$ be smooth quasi-projective of finite type over a field, and let $i:W\hookrightarrow V$ be a closed subscheme. Write $K^{\mathrm{cl}}(Y)$ for classical vector-bundle K-theory, identified by the canonical inclusion/approximation maps with Waldhausen K-theory of sheaf perfect complexes. Write $K^{\mathrm{cur}}(Y)=\mathbb K(\operatorname{Perf}(Y))$ for the specified current common-family perfect-complex model. Put
$$K^{\mathrm{cl}}_W(V)=\operatorname{fib}(K^{\mathrm{cl}}(V)\to K^{\mathrm{cl}}(V\setminus W)),\qquad K^{\mathrm{cur}}_W(V)=\mathbb K(\operatorname{Perf}_{|W|}(V)).$$
There is a natural comparison on these support pairs, induced by localization of the same sheaf complexes and the canonical connective-to-nonconnective map. On degree zero it is an isomorphism
$$c_W:\pi_0K^{\mathrm{cl}}_W(V)\xrightarrow{\sim}\pi_0K^{\mathrm{cur}}_W(V).$$
Let $G_0(W)$ be the group of coherent sheaves with short-exact-sequence relations. If $\beta_{\mathrm{cl}}$ is the classical support-pair K-to-G map followed by coherent dévissage, and $\beta_{\mathrm{cur}}$ is the current coherent-cohomology Euler and ideal-power dévissage map, then
$$\beta_{\mathrm{cur}}c_W=\beta_{\mathrm{cl}}:\pi_0K^{\mathrm{cl}}_W(V)\longrightarrow G_0(W).$$
Both maps send the class of the supported perfect complex $i_*F[0]$ to $[F]$ for every coherent $F$ on $W$. The comparison respects open restriction and support-to-global maps. For integral $W$, it also commutes after coherent generic restriction to $K_0(k(W))$, where $k(W)$ is the residue field of its generic point. No equivalence in negative degrees is needed or asserted here.

## Facts & Assumptions
**Given:** The schemes, support pair, AC and compatible universes in the Statement; use small presentations in a sufficiently large fixed universe.

**Goal:** Compare the actual supported degree-zero maps, including their coherent generators.

[A1] [[math:def-axiom-of-choice]] is retained for the supplied enhancements, K-theory presentations and dévissage; it is not a geometric condition on $W$.

[F1] [[def-nonconnective-k-spectrum-interface]] and [[lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison]] specify the actual sheaf-derived perfect category and its common K-flat realization, with inclusion-induced equivalences to the full sheaf-complex localization. [[prop-perfect-k-localization-input]] identifies its supported category with the restriction fiber. [[lem-fiber-sequence-homotopy-exactness]] supplies the natural exact sequences on homotopy groups.

[F2] [[prop-supported-k-zero-devissage]] supplies $\beta_{\mathrm{cur}}$ and its inverse $[F]\mapsto[i_*F[0]]$, including perfection, finite Euler/ideal-power filtrations and support-to-global compatibility.

[F3] The first three references import the canonical BGT comparison, the classical complex approximation/resolution comparisons, and Kahn–Levine's actual support-pair K-to-G transformation. These are morphisms induced by categorical constructions, not unnamed group isomorphisms.

[F4] The final three references make $V$ regular Noetherian and finite-dimensional. They apply equally to its open complement after step 1.1 checks smoothness and finite type using [F5]. These are the ambient hypotheses for [F1]–[F3].

[F5] [[math:def-locally-noetherian-and-noetherian-scheme]] gives a finite affine cover by spectra of Noetherian rings for a Noetherian scheme. [[math:thm-noetherian-ring-has-noetherian-spectrum]] makes each such affine chart a Noetherian topological space under [A1], and [[math:lem-noetherian-open-subsets-are-quasi-compact]] makes every open subset of each chart quasi-compact. [[math:def-quasi-compact-and-quasi-separated-scheme]] defines qcqs by quasi-compactness of the scheme and intersections of affine opens. [[math:def-open-immersion-schemes]] gives the restricted open-subscheme structure. [[math:lem-finite-type-local-on-source-and-target]] makes local finite type invariant under affine refinement, while [[math:def-quasi-compact-and-quasi-separated-morphism]] defines the needed quasi-compactness by inverse images of quasi-compact opens. [[math:def-quasi-projective-morphism]] and [[math:def-locally-closed-immersion]] define a quasi-projective presentation as a quasi-compact immersion into finite projective space followed by its projection. The immersion factors as a closed immersion into an open subscheme and that open inclusion; quasi-compactness is required of the composite immersion.

[F6] For the generic-point terminology use [[math:def-generic-point-irreducible-closed-subset]]. An integral scheme is nonempty and irreducible, and its nonempty affine opens are spectra of domains, by [[math:def-integral-scheme]]. Under the already assumed AC, [[math:thm-spectrum-sober]] gives existence and uniqueness of the generic point on each such affine open. [[math:def-residue-field-scheme-point]] identifies the local ring at the zero prime of a domain with its fraction field, which is also its residue field. The global existence and uniqueness needed here are deduced in step 2.1.

[F7] [[math:def-stalk-of-presheaf]] defines a stalk as the filtered colimit of sections over open neighborhoods, with transition maps given by restriction. [[math:thm-exactness-of-sheaves-stalkwise]] makes taking a stalk exact on short exact sequences of module sheaves by applying it to their underlying abelian sheaves. A coherent module is of finite type by [[math:def-coherent-module-scheme]], and [[math:def-finite-type-finite-presentation-module-sheaf]] supplies, under AC, its local finite free surjection. These facts justify the generic restriction $\mathrm{res}_\eta:G_0(W)\to K_0(k(W))$, $[F]\mapsto[F_\eta]$, in step 2.1. For a field, the target is the Grothendieck group of finite-dimensional vector spaces with short exact relations. The third reference, Lemma 6.2.1, proof's first restriction display, uses this coherent generic restriction; Lemma 6.4.2, proof, makes it compatible with the actual support-pair K-to-G transformation.

[F8] Weibel V, Exercise 4.3 and Example 6.11, import the classical equivalence $d_W:G(W)\xrightarrow{\sim}G_W(V)$ for the given closed immersion, where $G_W(V)=\operatorname{fib}(G(V)\to G(V\setminus W))$. Together with V.2.2 and V.3.10.2, its object map is $[F]\mapsto[i_*F[0]]$. Here $G(X)$ is classical K-theory of coherent sheaves. The ambient scheme must be Noetherian; $W$ may be nonreduced or singular. The support category uses $|W|$, while $d_W$ uses the actual $\mathcal O_W$-module structure. This is the second source reference, not a consequence of the current K-theory comparison [F2].

[F9] [[thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input]] defines a sheaf complex $P$ to be K-flat when $\operatorname{Tot}^{\oplus}(N\otimes_{\mathcal O_Y}P)$ is acyclic for every acyclic sheaf cochain complex $N$, with its cochain Koszul differential. It supplies K-flat resolutions of arbitrary sheaf complexes, closure under shifts and mapping cones, and preservation of K-flat complexes and their quasi-isomorphisms by degreewise pullback, in particular open restriction. Use its size convention within the compatible universes already assumed: fix Grothendieck universes $\mathcal U\in\mathcal V$ with $\omega\in\mathcal U$, take schemes, underlying ringed spaces and module-sheaf section sets in $\mathcal U$, and form their complex categories and localizations in $\mathcal V$, enlarging further for K-theory presentations as needed. Their existence is a standing size assumption separate from AC. The term Grothendieck universe uses the closure convention of [[math:def-grothendieck-universe-closure-convention]]; this definition makes no assertion of existence. The input applies to arbitrary ringed spaces; $Y=V,O$ therefore satisfies its geometric scope without any extra flatness assumption.

## External input
Import only the statements and hypotheses in the six references above. In particular BGT's degree-zero comparison requires idempotent completeness, and the classical vector-bundle/perfect comparison is used only on the stated quasi-projective schemes. The comparison theorems, the classical closed-support equivalence [F8], and the regular-scheme and dimension inputs are not proved here. The construction on the selected local model and the equality of Euler maps below are local deductions from those inputs.

## Proof
1.1 Put $O=V\setminus W$ with its open-subscheme structure. By [F4], $V$ is Noetherian. Take a finite affine cover by spectra of Noetherian rings using [F5]. For any open subset $B\subseteq V$, its intersections with these charts are quasi-compact by [F5]. Restricting an open cover of $B$ to each intersection and taking the union of the finitely many finite subcovers proves that $B$ is quasi-compact. This includes the empty case and every intersection of affine opens in $O$. Consequently [F5] makes both $V$ and $O$ qcqs and $O\hookrightarrow V$ quasi-compact. Local smooth charts restrict to $O$, and affine refinement preserves local finite type by [F5]; since $O$ is quasi-compact over the field, it is smooth of finite type. Thus [F4] applies to both schemes. To check quasi-projectivity of $O$, write the supplied immersion of $V$ into projective space as a closed immersion into an open subscheme $H$. The open subset $O$ of $V$ is the inverse image of some open $H\prime\subseteq H$. Restricting the closed immersion identifies $O$ with a closed subscheme of $H\prime$. The composite immersion into projective space is quasi-compact: inverse images of its affine opens are open subsets of $V$ and hence quasi-compact by [F5]. This is precisely the quasi-projective presentation required in [F5]. For $Y=V$ and $Y=V\setminus W$, let $\mathcal C(Y)$ be the Waldhausen category of K-flat sheaf complexes with perfect derived image, quasi-isomorphisms as weak equivalences and degreewise split monomorphisms with such cokernel as cofibrations. By [F9] cones and shifts remain K-flat, and by [F1] their derived images remain perfect; the ordinary mapping-cylinder factorization, formed from finite direct sums, shifts and a cone, stays in this category. A map is a weak equivalence exactly when it is invertible in the localized category, since the inclusion-induced localization in [F1] is an equivalence to the full derived perfect category. This checks factorization and DHKS saturation. The localization is stable and idempotent complete by [F1]. Use [A1] and the fixed larger presentation universe to make this a small presentation without discarding its cylinder constructions. The same discussion holds for the full supported subcategory: The resolutions supplied by [F9] are quasi-isomorphisms and hence preserve supported cohomology, and all intermediate objects quasi-isomorphic to a supported perfect object are again supported and perfect. Thus the inclusion of these models in all sheaf perfect complexes induces the actual derived equivalences of [F1]. The cone/shift and saturation hypotheses of the imported resolution comparison [F3] are now met. Together with the quasi-projective classical approximation, BGT gives natural maps $a_Y:K^{\mathrm{cl}}(Y)\to K^{\mathrm{cur}}(Y)$ inducing isomorphisms on $\pi_0$ and $\pi_1$ and carrying complex classes to the same derived-object classes. Open restriction is exact on sheaves and preserves K-flat complexes and their quasi-isomorphisms by [F9]; by [F1] it preserves perfect derived images and commutes with the inclusions, so the maps induce a map on the actual restriction fibers. By [F1], identify its current fiber with the category-defined current support spectrum. To see that its map $c_W$ on $\pi_0$ is an isomorphism, use the two exact rows $\pi_1K(V)\to\pi_1K(V\setminus W)\to\pi_0K_W(V)\to\pi_0K(V)\to\pi_0K(V\setminus W)$. The four outer vertical maps are isomorphisms. For injectivity, a middle element mapping to zero comes from the preceding group; its image there can be lifted back from the first group and subtracted, proving it was zero. For surjectivity, lift its next-group image through the fourth vertical isomorphism, use the fifth to obtain a middle lift, and correct its difference using the second vertical isomorphism. This proves the assertion about $c_W$ and preserves the actual fiber and support maps. [A1, F1, F3, F4, F5, F9, construct]

2.1 On this regular ambient, the classical K-to-G map is an equivalence both on $V$ and on its open complement by [F3]–[F4], and hence on their fibers. Let $t_W:K^{\mathrm{cl}}_W(V)\to G_W(V)$ be this actual support-pair Cartan equivalence. By [F8], the given closed immersion has the classical equivalence $d_W:G(W)\to G_W(V)$; no replacement of $W$ by its reduction is made. The map in the Statement is $\beta_{\mathrm{cl}}=(\pi_0d_W)^{-1}\pi_0t_W$. Since both maps carry the represented supported complex to that same object in the coherent model, its inverse sends $[F]$ to $[i_*F[0]]$. Such complexes are perfect by [F2], even if $W$ is singular. The comparison in step 1.1 is induced by localization of those same complexes, and thus $c_W$ sends this classical supported object class to the class of the identical object in the current supported category, with its acyclic-on-the-complement trivialization. Applying [F2] gives $\beta_{\mathrm{cur}}c_W([i_*F[0]])=[F]=\beta_{\mathrm{cl}}([i_*F[0]])$. These classes generate the classical supported group by the just stated classical dévissage isomorphism, so the equality holds on every class. All comparison functors commute with restriction to opens and forgetting support. For integral $W$, choose a nonempty affine open $B=\operatorname{Spec}A\subseteq W$. By [F6], $A$ is a domain and $B$ has a unique generic point $\eta$, the zero prime. Every nonempty open of the irreducible space $W$ is dense: otherwise it and the nonempty open complement of its closure would be disjoint, contradicting irreducibility. Hence $B$ is dense in $W$. The closure of $\eta$ in $W$ contains $B$ and therefore equals $W$. Every generic point of $W$ lies in $B$, since otherwise the closed complement of $B$ would contain its closure; it is then generic in $B$ and equals $\eta$ by affine uniqueness in [F6]. This proves global existence and uniqueness without an affineness assumption on $W$. The affine identification in [F6] gives $\mathcal O_{W,\eta}=\kappa(\eta)=k(W)$. By [F7], for every coherent $F$ a finite free surjection near $\eta$ gives a surjection $k(W)^n\to F_\eta$, so $F_\eta$ is finite-dimensional. Taking stalks preserves short exact sequences by [F7], so $[F]\mapsto[F_\eta]$ respects every defining relation of $G_0(W)$ and defines $\mathrm{res}_\eta$. Explicitly $F_\eta=\varinjlim_{\eta\in C}F(C)$ over open neighborhoods ordered by shrinking. Every nonempty open of $W$ contains $\eta$, and for such an open $D$, the neighborhoods contained in $D$ are cofinal by $C\mapsto C\cap D$; thus restriction identifies $(F|_D)_\eta$ canonically with $F_\eta$, compatibly with further restriction. This is precisely the coherent generic restriction in [F7] and the third reference. Postcomposing the proved equality $\beta_{\mathrm{cur}}c_W=\beta_{\mathrm{cl}}$ with this same homomorphism proves the claimed generic compatibility. Since the comparison retains each represented coherent class, a one-dimensional generic stalk still represents $[k(W)]$, the positive residue-field generator. [A1, F1, F2, F3, F4, F6, F7, F8, step 1.1] ∎
