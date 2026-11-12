---
title: External enhanced quotient criterion and localizing nonconnective K
status: published
research_item: thm-author-50b5133c29cc-klocal-categorical-localizing-input
dependency_level: 12
sources:
  references:
    - title: Andrew J. Blumberg, David Gepner and Gonçalo Tabuada, A universal
        characterization of higher algebraic K-theory
      url: https://arxiv.org/pdf/1001.2282v4
      locator: Introduction p. 4; §2.2, Definition 2.12, following homotopy-category
        paragraph and idempotent-completion paragraph, p. 14; §5.1, cofiber
        convention following Definition 5.12 and Proposition 5.13, p. 35;
        Propositions 5.14–5.15, pp. 35–36; Definition 8.1, p. 52; Theorem 8.7,
        p. 55; Definition 9.6 and Theorem 9.8, p. 58.
      statement: The category Cat_ex consists of small stable infinity-categories and
        exact functors. Idem is left adjoint to the inclusion of Cat_perf. The
        cofiber quotient of a fully faithful exact functor exists in Cat_ex; its
        homotopy category agrees with the triangulated Verdier quotient.
        Exactness is equivalent to equivalence of the induced quotient functor
        after idempotent completion, and is detected on the triangulated
        sequence. On all of Cat_ex, U_loc inverts Morita equivalences and sends
        exact sequences to cofiber sequences. Its spectral mapping functor from
        U_loc(Sp^omega) is naturally BGT nonconnective IK.
      hypotheses: Compatible fixed universes, ZFC/AC conventions, small stable
        infinity-categories and actual exact functors. In §5 specialize
        kappa=omega, so the required colimits are finite; quotient equivalence
        is after idempotent completion. Supply the nullhomotopy of the composite
        to specify the induced quotient map. The kappa=omega specialization
        concerns the §5 criterion only, not the auxiliary cardinal in the
        construction of §9. Essentially small categories are handled through the
        equivalent domain of small presentations.
      reading_limits: "Historical reading record retained from the incoming generated
        item: For this proposal, read the named defining paragraphs and the
        statements of Propositions 5.13–5.15, Definition 8.1, Theorem 8.7,
        Definition 9.6 and Theorem 9.8 in primary PDF extracted text; also read
        the displayed proofs of Propositions 5.13 and 5.15. The quotient
        construction/comparison and the proofs of Theorems 8.7 and 9.8 are
        imported, not reconstructed or independently audited. The all-category
        functor is nonconnective IK; its restriction is compared with the
        already declared BGT functor, not with a different classical K model.
        Current maintenance read the assigned body and current supplier
        interfaces; no fresh primary-source or page-image reading, independent
        review or acceptance is claimed."
    - title: "The Stacks Project, Derived Categories, §13.6: Quotients of triangulated
        categories"
      url: https://stacks.math.columbia.edu/tag/05RA
      locator: Lemma 13.6.6 and equation (13.6.6.1); Definition 13.6.7 and the
        paragraph immediately following it; Lemma 13.6.8(2); linked Proposition
        13.5.6 (tag 05R6), statement and opening proof paragraph.
      statement: For a full triangulated subcategory N of a triangulated category T,
        the arrows with a cone isomorphic to an object of N form a
        multiplicative system compatible with triangles. The Verdier quotient is
        the localization at those arrows, is triangulated with exact quotient
        functor, and every exact functor annihilating N factors through it as an
        exact functor.
      hypotheses: A triangulated category and a full triangulated subcategory, with
        compatible size conventions. The subcategory need not be
        idempotent-complete or thick. Here take T=hB and N the essential image
        of hi; stability and exactness provide the triangulated structures.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the primary section through Lemma 13.6.8, including the
        formula, definition, exactness paragraph and factorization statement;
        also read linked Proposition 13.5.6 at
        https://stacks.math.columbia.edu/tag/05R6, including its definition of
        distinguished triangles in the opening proof paragraph. The general
        localization and triangulated-quotient existence proofs are imported; no
        new proof or prerequisite-source defect audit is claimed. Current
        maintenance read the assigned body and current supplier interfaces; no
        fresh primary-source or page-image reading, independent review or
        acceptance is claimed."
external_input: true
---

PDF p. 7: Zariski locality; PDF p. 15: Localization diagram

## Prerequisites

- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input](item-thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input)
- [math:def-triangulated-category](https://alphabetamath.cc/item/def-triangulated-category)
- [math:def-exact-functor-between-triangulated-categories](https://alphabetamath.cc/item/def-exact-functor-between-triangulated-categories)
- [math:def-localization-of-a-category-at-a-class-of-morphisms](https://alphabetamath.cc/item/def-localization-of-a-category-at-a-class-of-morphisms)
- [math:def-the-idempotent-completion-of-a-preadditive-category](https://alphabetamath.cc/item/def-the-idempotent-completion-of-a-preadditive-category)
- [` Andrew J. Blumberg, David Gepner and Gonçalo Tabuada, A universal characterization of higher algebraic K-theory · Introduction p. 4; §2.2, Definition 2.12, following homotopy-category paragraph and idempotent-completion paragraph, p. 14; §5.1, cofiber convention following Definition 5.12 and Proposition 5.13, p. 35; Propositions 5.14–5.15, pp. 35–36; Definition 8.1, p. 52; Theorem 8.7, p. 55; Definition 9.6 and Theorem 9.8, p. 58. `](https://arxiv.org/pdf/1001.2282v4)
- [` The Stacks Project, Derived Categories, §13.6: Quotients of triangulated categories · Lemma 13.6.6 and equation (13.6.6.1); Definition 13.6.7 and the paragraph immediately following it; Lemma 13.6.8(2); linked Proposition 13.5.6 (tag 05R6), statement and opening proof paragraph. `](https://stacks.math.columbia.edu/tag/05RA)

## Statement
Assume the Axiom of Choice and compatible fixed universes. A stable infinity-category has a zero object, finite limits and finite colimits, with the same pullback and pushout squares. An exact functor preserves finite limits and finite colimits. Let $\mathrm{Cat}_{\mathrm{ex}}$ have small stable infinity-categories as objects and exact functors as arrows; its mapping spaces retain natural equivalences of exact functors and all their higher homotopies. The zero category has just a zero object. Let $\mathrm{Cat}_{\mathrm{perf}}$ be its full subcategory on idempotent-complete objects, and let $\operatorname{Idem}:\mathrm{Cat}_{\mathrm{ex}}\to\mathrm{Cat}_{\mathrm{perf}}$ be the left adjoint to inclusion. This completion is the closure of the Yoneda image under retracts in presheaves of spaces, with its induced stable structure. Smallness is relative to the chosen universe; categories of small categories are formed in a larger one.

Consider actual exact functors $\mathcal A\xrightarrow{i}\mathcal B\xrightarrow{g}\mathcal C$, with $i$ fully faithful and a specified natural equivalence $\eta:gi\simeq0$. Fully faithful means equivalences on all mapping spaces. The enhanced quotient is the pushout $Q=\mathcal B/\mathcal A=\mathcal B\sqcup_{\mathcal A}0$ in $\mathrm{Cat}_{\mathrm{ex}}$, with its quotient functor $q:\mathcal B\to Q$. Precisely, for every small stable $\mathcal D$ it has the natural mapping-space universal property
$$\operatorname{map}_{\mathrm{Cat}_{\mathrm{ex}}}(Q,\mathcal D)\simeq\operatorname{map}_{\mathrm{Cat}_{\mathrm{ex}}}(\mathcal B,\mathcal D)\times_{\operatorname{map}_{\mathrm{Cat}_{\mathrm{ex}}}(\mathcal A,\mathcal D)}\{0\}.$$
The product is a homotopy pullback, and its points are exact functors from $\mathcal B$ equipped with a natural equivalence of their restriction along $i$ to zero. Thus $(g,\eta)$ specifies an induced exact functor $\bar g:Q\to\mathcal C$, uniquely up to contractible compatible choice. The sequence is called exact when its idempotent-completed sequence identifies $\operatorname{Idem}(\mathcal C)$ with the pushout of $\operatorname{Idem}(\mathcal B)\leftarrow\operatorname{Idem}(\mathcal A)\to0$ in $\mathrm{Cat}_{\mathrm{perf}}$, using the induced map and nullhomotopy.

For a stable $\mathcal D$, $h\mathcal D$ has the same objects and morphisms $\pi_0\operatorname{map}_{\mathcal D}(x,y)$. It has its canonical triangulation: translation is suspension and distinguished triangles are induced by cofiber sequences with their connecting morphisms. Exact enhanced functors induce exact triangulated functors, with the suspension comparison induced by preservation of these colimits. Write $V=h\mathcal B/h\mathcal A$ for the Verdier quotient by the full essential image of $hi$. Explicitly, this is the ordinary categorical localization of $h\mathcal B$ at arrows that have a cone isomorphic to an object of that image. Here a cone of an arrow $f:x\to y$ means a third object $z$ in a distinguished triangle $x\xrightarrow{f}y\to z\to x[1]$; membership in the localization class requires the existence of such a triangle with $z$ isomorphic to an object of the image. The quotient's translation is induced by suspension, and its distinguished triangles are those isomorphic to images of distinguished triangles of $h\mathcal B$. The functor $hg$, which annihilates that image, induces $v:V\to h\mathcal C$ with the induced suspension comparison.

The sequence is exact precisely when $v$ is an equivalence after idempotent completion; equivalently $\operatorname{Idem}(\bar g)$ is an equivalence. Here ordinary idempotent completion means the Karoubi category: objects are $(x,e)$ with $e^2=e$, and arrows $u:(x,e)\to(y,f)$ satisfy $fue=u$; the induced functor on these categories must be an equivalence. In particular the comparison $V\to hQ$ induced by $q$ is an equivalence before completion. These are criteria for the given enhanced functors and their induced quotient map.

Let $\mathbb K_{\mathrm{perf}}$ be the BGT nonconnective functor already used by the supplied K interface. BGT also defines a functor $IK:\mathrm{Cat}_{\mathrm{ex}}\to\mathrm{Sp}$ on all small stable infinity-categories, including those not idempotent-complete. It inverts maps that become equivalences under $\operatorname{Idem}$, and its restriction to $\mathrm{Cat}_{\mathrm{perf}}$ is naturally the supplied $\mathbb K_{\mathrm{perf}}$. More explicitly, naturally in $\mathcal D$,
$$IK(\mathcal D)\simeq IK(\operatorname{Idem}(\mathcal D))\simeq\mathbb K_{\mathrm{perf}}(\operatorname{Idem}(\mathcal D)).$$
For each exact sequence above, $IK(\mathcal A)\to IK(\mathcal B)\to IK(\mathcal C)$ is a cofiber, hence fiber, sequence of spectra. These sequences are functorial for coherent diagrams of the given exact functors and their nullhomotopies. On essentially small idempotent-complete categories this is the same functor and the same diagrams as in the supplied K interface, through its equivalent domain of small presentations.

## Statement references

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input](item-thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input)

[math:def-triangulated-category](https://alphabetamath.cc/item/def-triangulated-category)

[math:def-exact-functor-between-triangulated-categories](https://alphabetamath.cc/item/def-exact-functor-between-triangulated-categories)

[math:def-localization-of-a-category-at-a-class-of-morphisms](https://alphabetamath.cc/item/def-localization-of-a-category-at-a-class-of-morphisms)

[math:def-the-idempotent-completion-of-a-preadditive-category](https://alphabetamath.cc/item/def-the-idempotent-completion-of-a-preadditive-category)

[def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)

[def-stable-spectra-interface](item-def-stable-spectra-interface)

## Facts & Assumptions
**Given:** The actual enhanced sequence $(i,g,\eta)$, full faithfulness of $i$, and the compatible universe conventions above. Assume AC as in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice); it is retained in the imported higher-category and K-theory foundations, without claiming a choice-free version.

**Goal:** Specify the enhanced localization criterion and the localizing property on the correct domain of nonconnective K-theory.

[F1] [thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input](item-thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input) supplies the stable, exact and idempotent-complete interfaces, the category $\mathrm{Cat}_{\mathrm{perf}}$, the restricted BGT functor, compact spectra $\mathrm{Sp}^{\omega}$, the stable motive target $\mathcal M_{\mathrm{loc}}$, and its mapping spectra. Reference 0 supplies $\mathrm{Cat}_{\mathrm{ex}}$, the completion adjunction and the canonical homotopy-category triangulation.

[F2] Reference 0, the cofiber convention following Definition 5.12 and Propositions 5.13–5.15, supplies the actual enhanced quotient, its comparison with the triangulated quotient, and the exactness criterion. Use $\kappa=\omega$ only in this criterion: finite colimits and their preservation suffice. The universal mapping-space property specifies its induced map from $(g,\eta)$.

[F3] [math:def-triangulated-category](https://alphabetamath.cc/item/def-triangulated-category) and [math:def-exact-functor-between-triangulated-categories](https://alphabetamath.cc/item/def-exact-functor-between-triangulated-categories) specify the ordinary triangulated structures and exact functors. [math:def-localization-of-a-category-at-a-class-of-morphisms](https://alphabetamath.cc/item/def-localization-of-a-category-at-a-class-of-morphisms) specifies ordinary localization; reference 1 supplies its cone class, triangulation and exact factorization for a Verdier quotient. [math:def-the-idempotent-completion-of-a-preadditive-category](https://alphabetamath.cc/item/def-the-idempotent-completion-of-a-preadditive-category) supplies the Karoubi construction used in the ordinary completion criterion.

[F4] Reference 0, Definition 8.1, Theorem 8.7, Definition 9.6 and Theorem 9.8, supplies the all-small-category nonconnective $IK$ and a natural equivalence
$$IK(\mathcal D)\simeq\operatorname{Map}_{\mathcal M_{\mathrm{loc}}}(U_{\mathrm{loc}}(\mathrm{Sp}^{\omega}),U_{\mathrm{loc}}(\mathcal D)).$$
Here $U_{\mathrm{loc}}$ is the same localizing-motive functor as in [F1], extended to $\mathrm{Cat}_{\mathrm{ex}}$ by completion. A localizing invariant inverts maps becoming equivalences after completion, preserves filtered colimits, and sends exact sequences to cofiber sequences. Its representing formula and this property identify the restriction and completion equivalences in the Statement.

[F5] [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) fixes the coherent essentially small idempotent-complete domain and chooses exactly the BGT functor of [F1]. [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies the target spectra, homotopy pullbacks, cofibers and fibers; in spectra cofiber sequences are fiber sequences.

## External input
Import the quotient existence, comparison and criterion in [F2], the triangulated-quotient construction in [F3], and the all-small-category nonconnective functor and its natural representing formula in [F4], under the recorded source hypotheses and reading limits. The stable, exact, retract-completion and homotopy-category interfaces in the Statement are sourced specifications. These are imported results, without a claimed local proof of their existence or comparison theorems.

The mapping-spectrum functor in [F4] preserves finite limits in its second variable by representability; the stable motive category and spectra identify cofiber sequences with fiber sequences. Thus the imported representing formula expresses the stated localizing property. This is BGT's nonconnective $IK$ on the larger domain, restricting to the chosen functor of [F1] and [F5]. Its completion equivalence is natural on coherent diagrams, so it also specifies the application through the essentially small domain without choosing unrelated skeletons for separate arrows. This input applies to actual exact functors with their nullhomotopies; an abstract triangulated equivalence alone does not provide an enhanced functor.
