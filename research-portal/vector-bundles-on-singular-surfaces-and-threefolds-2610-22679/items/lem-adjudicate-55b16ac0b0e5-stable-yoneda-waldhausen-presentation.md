---
id: lem-adjudicate-55b16ac0b0e5-stable-yoneda-waldhausen-presentation
kind: lemma
title: Stable Yoneda Waldhausen presentations without retract completion
status: draft
domain: mathematics
deps:
  - thm-author-e0b0bf18ed2b-stable-enhancement-input
  - math:def-model-category-and-quillen-adjunction
  - math:def-grothendieck-universe-closure-convention
  - math:def-axiom-of-choice
dependency_roles:
  thm-author-e0b0bf18ed2b-stable-enhancement-input: mathematical-premise
  math:def-model-category-and-quillen-adjunction: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Blumberg–Gepner–Tabuada, A universal characterization of higher algebraic
        K-theory, arXiv:1001.2282v4
      url: https://arxiv.org/pdf/1001.2282v4
      locator: §2.2, pp. 12–14; §4.2, Definition 4.7 and Proposition 4.8 with its
        proof, p. 26; Proposition 4.9 and its proof, p. 27
      statement: The simplicial realization of a small stable infinity-category has a
        projective simplicial model of spectral presheaves. The full spectral
        category of stably representable cofibrant-fibrant presheaves has
        underlying infinity-category naturally equivalent to the original stable
        category. Its image lies in the exact spectral presheaves. This is the
        model and Yoneda input; closure and Waldhausen axioms for the chosen
        category of cofibrants are proved locally.
      hypotheses: Small stable infinity-category in compatible universes; projectively
        cofibrant-fibrant presheaves in the stated spectral model. Idempotent
        completeness is not required. Presheaf values may be taken in the larger
        V universe and their collection formed in W.
      reading_limits: "Read the cached primary arXiv:1001.2282v4 PDF text on 12
        November 2026 at the listed passages; the versioned primary URL was also
        opened. Cached PDF SHA256:
        08a8ae7fb5715d8269fd728c8a20d72403527aaefbeaa974b7040ec21d667a2d. The
        projective model, enrichment and Yoneda foundations are imported, not
        reconstructed. No scan inspection, complete-paper reading or independent
        acceptance is claimed."
    - title: Jacob Lurie, Higher Algebra, September 18, 2017
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Proposition 1.3.4.7 and Example 1.3.4.8, pp. 110–111; Construction
        1.3.4.18, Lemma 1.3.4.19 and Theorem 1.3.4.20, pp. 116–117; full proof
        of Theorem 1.3.4.20, p. 120
      statement: A simplicial category with the four stated interval and
        weak-equivalence conditions has the same marked localization as its
        simplicial nerve after fibrant replacement. In a simplicial model
        category, ordinary localization of the cofibrants is equivalent to the
        nerve of the cofibrant-fibrant simplicial category; the proof uses
        interval tensors and a fibrant-replacement adjunction. The restriction
        of that proof to the selected homotopy-closed full subcategory is
        checked locally.
      hypotheses: For Proposition 1.3.4.7, the class contains isomorphisms, satisfies
        two-out-of-three, has enriched interval tensors and contains interval
        projections. Theorem 1.3.4.20 assumes a simplicial model category. It is
        not cited as a theorem about arbitrary full subcategories; the interval
        and replacement conditions are checked in Proof 2.1.
      reading_limits: "Read the live author-hosted PDF extraction on 12 November 2026:
        all four interval conditions, Example 1.3.4.8, Construction 1.3.4.18,
        Lemma 1.3.4.19 statement, Theorem 1.3.4.20 and its complete proof. The
        marked-simplicial-set foundations and proof of Proposition 1.3.4.7 are
        imported; no book-wide reading or local-byte hash is claimed."
    - title: Paul Goerss and Kristen Schemmerhorn, Model Categories and Simplicial
        Methods, arXiv:math/0609537v2
      url: https://arxiv.org/pdf/math/0609537v2
      locator: §4.2, tensor and enriched adjunction formulas (4.2)–(4.4), p. 25;
        Definition 4.11, p. 26; Proposition 4.12 and Corollary 4.15/Remark 4.16,
        pp. 27–28
      statement: Simplicial model categories have enriched tensor adjunctions and the
        corner mapping-space axiom, equivalently the pushout-product axiom.
        Cofibrant-to-fibrant mapping spaces compute the model homotopy mapping
        spaces. These statements supply the mapping-space and interval calculus
        used locally.
      hypotheses: A tensored and cotensored simplicial model category; cofibrant
        source and fibrant target for derived mapping spaces. The mapping-space
        corner uses a cofibration and a fibration and is trivial if either is
        trivial.
      reading_limits: Read the live primary arXiv PDF extraction on 12 November 2026,
        §4.2 through Remark 4.16, including the enriched adjunction, full corner
        axiom and both pushout-product clauses. These model-category foundations
        are imported, not independently reconstructed. The interval consequence
        used here follows from Proposition 4.12. No full-paper reading is
        claimed.
dependency_level: 1
---

## Statement
Assume the Axiom of Choice and fixed nested Grothendieck universes $U\in V\in W$ with $\omega\in U$. For every $U$-small stable infinity-category $D$ there is a $W$-small DHKS-saturated Waldhausen category $C_D$ with cofibration/weak-equivalence factorization and an equivalence $N(C_D)[W_D^{-1}]\simeq D$, where $W_D$ is its class of weak equivalences. Its homotopy pushouts correspond to the finite pushouts of $D$. No idempotent completion of $D$ is taken.

Here a Waldhausen category has a zero object, subcategories of cofibrations and weak equivalences containing the isomorphisms, every map from zero a cofibration, pushouts along cofibrations whose cobase-changed leg is a cofibration, and the gluing axiom: an objectwise weak equivalence between two such pushout spans induces a weak equivalence of pushouts. Both designated classes are closed under composition. DHKS-saturated means that a map is a weak equivalence exactly when it is invertible in the homotopy category of the infinity-localization. Factorization means that every map is a cofibration followed by a weak equivalence. A weakly exact functor preserves weak equivalences, zero up to equivalence and homotopy pushout squares. An exact Waldhausen functor preserves zero, cofibrations, weak equivalences and pushouts along cofibrations.

One possible $C_D$ is the full category of cofibrant $V$-small spectral presheaves in BGT's projective simplicial model whose derived images are stably representable by objects of $D$. This full category is $W$-small; cofibrations and weak equivalences are inherited from the model category. The stable Yoneda image, rather than its retract closure, specifies the objects.

## Statement references

[[thm-author-e0b0bf18ed2b-stable-enhancement-input]]

[[math:def-model-category-and-quillen-adjunction]]

[[math:def-grothendieck-universe-closure-convention]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions
**Given:** $D$, Choice and the three universes as in the Statement. All presheaves and point-set spectra used in the construction are $V$-small; the collection of those structures is formed in $W$.

**Goal:** Verify the stated Waldhausen presentation from the precise imported model and localization inputs.

[A1] [[math:def-axiom-of-choice]] and [[math:def-grothendieck-universe-closure-convention]] supply the choice and size conventions. The existence of the displayed universes is an assumption, not a consequence of Choice. [[thm-author-e0b0bf18ed2b-stable-enhancement-input]] supplies the infinity-category, mapping-space, stable-spectrum and coherent finite-limit/colimit conventions. [[math:def-model-category-and-quillen-adjunction]] supplies model factorization, lifting, cofibrant/fibrant objects and weak equivalences.

[F1] Reference 0 supplies BGT's projective simplicial model $P_D=\operatorname{Fun}_\Delta(\mathfrak C[D]^{\mathrm{op}},\mathrm{Sp}_{\mathrm{model},V})$ and its equivalence with spectral presheaves on $D$. Its weak equivalences are objectwise stable equivalences of spectra. The simplicial category $\mathfrak C[D]$ is the simplicial realization used there. The stably representable cofibrant-fibrant objects form $\Upsilon(D)$, and $N(\Omega^\infty\Upsilon(D))\simeq D$ by Proposition 4.8. Stably representable here means equivalent to the spectral Yoneda presheaf $d\mapsto\operatorname{Map}_D(d,e)$ for some $e\in D$; the stable mapping spectrum has nth space $\operatorname{map}_D(d,e[n])$. This input applies to every small stable $D$, with no retract-completeness hypothesis.

[F2] Reference 1 supplies the interval criterion of Higher Algebra Proposition 1.3.4.7 and the fibrant-replacement argument in the proof of Theorem 1.3.4.20. Reference 2 supplies simplicial tensors, the enriched tensor adjunction, the corner axiom and its pushout-product formulation. In particular, restriction along a cofibration is a fibration of mapping Kan complexes into a fibrant target, and is a weak equivalence when that cofibration is trivial. Tensoring a cofibrant object with a simplex remains cofibrant; its map back to that object is a weak equivalence.

## External input
Import the projective spectral-presheaf model and stable Yoneda equivalence [F1], and the simplicial-model and localization calculus [F2], with the hypotheses and reading limits of references 0–2. The proof below verifies closure, the restriction of that calculus and size for this particular presentation. The unnumbered paragraph after BGT Corollary 7.12 is not used as a source for detailed presentation properties.

## Proof
1.1 Form $P_D$ using [F1] and let $C_D$ consist of all its cofibrant objects whose derived presheaves are stably representable. The spectral Yoneda embedding preserves finite limits: evaluation at each $d$ gives the mapping-spectrum functor, which preserves limits in its second variable. Since both $D$ and spectral presheaves are stable, finite limits and finite colimits coincide, so this embedding is exact. Its full replete image is therefore closed under zero and finite homotopy pushouts, without adding retracts. The model zero is cofibrant and belongs to $C_D$. For a map $X\to Y$ in $C_D$, model factorization $X\hookrightarrow Z\xrightarrow{\sim}Y$ has cofibrant $Z$, and $Z$ is still stably representable because it is weakly equivalent to $Y$. For a span $Y\leftarrow X\to Z$ of cofibrant objects with $X\to Y$ a cofibration, its model pushout $T$ is cofibrant: $Z\to T$ is a cofibration. For every fibrant test object $B$, the enriched adjunction identifies $\operatorname{map}(T,B)$ with $\operatorname{map}(Y,B)\times_{\operatorname{map}(X,B)}\operatorname{map}(Z,B)$. The restriction from $Y$ is a fibration by [F2], so this is a homotopy pullback. Thus $T$ computes the ambient homotopy pushout and belongs to $C_D$ by exactness of Yoneda. The same mapping-space calculation shows that objectwise weak equivalences between these spans induce weak equivalences on pushouts, giving gluing. Closure of cofibrations under composition and pushout follows from their lifting characterization in [A1]; weak equivalences are closed under composition by two-out-of-three. These facts verify every stated Waldhausen axiom and factorization. [A1, F1, F2, construct]

2.1 The infinity-localization of $C_D$ is the full subcategory modeled by its cofibrant-fibrant objects. To justify this restriction rather than assume it, regard $C_D$ as a full simplicial subcategory of the cofibrants of $P_D$. It is closed under $\Delta[1]\otimes X$ by [F2] and its defining weak-equivalence closure. Thus the four hypotheses of Proposition 1.3.4.7 hold: isomorphisms and two-out-of-three are inherited, interval objects satisfy the enriched adjunction, and interval projection is a weak equivalence. Every $X$ also has a trivial-cofibration fibrant replacement $X\to RX$ remaining in $C_D$. Into any cofibrant-fibrant $B$, this replacement induces an equivalence of mapping spaces by the corner axiom. Consequently the fibrant-replacement adjunction and marked-localization argument in the proof of Theorem 1.3.4.20 restrict to this full simplicial subcategory: their units are these weak equivalences and their mapping spaces into the fibrant objects are unchanged. They identify $N(C_D)[W_D^{-1}]$ with the nerve of the full simplicial category of its cofibrant-fibrant objects. That category is exactly $\Omega^\infty\Upsilon(D)$, so [F1] identifies the localization fully with $D$. In particular it embeds fully in the underlying infinity-category of $P_D$; a map inverted in it is an equivalence of spectral presheaves, hence an objectwise equivalence of spectra, and therefore a projective model weak equivalence by [F1]. The converse holds by the defining localization, proving DHKS-saturation. Step 1.1 and this full embedding identify its homotopy pushouts with those in $D$. Finally all $V$-small presheaf structures and morphisms on the fixed small indexing category form sets in $W$, by the universe closure convention; the full subcategory used here is therefore $W$-small. The model operations are performed in $V$ and their results are retained in this full category, not discarded by taking an ordinary skeleton. Larger compatible universes are assumed if another category of these data is needed. Choice enters the imported realizations and replacements through [A1]; no functorial strict selection of $C_D$ as $D$ varies is claimed. [A1, F1, F2, step 1.1] ∎
