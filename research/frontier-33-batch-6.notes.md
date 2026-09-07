# Batch 6 scaffold — frontier-33

Authorised artifacts: this notes file, frontier-33-batch-6.pages.json and frontier-33-batch-6.coverage.json. No content, plan structure, other batches or workflow state are changed. Stage 1 only; proofs are planned, not authored or independently reviewed.

Design read: HA-14 at L2689 in full, its B/source/trap block at L2855, and the Stacks heading amendment at L3965. HA-14 controls exact claims and route; the later heading amendment broadens the coverage accounting but does not override the bounded, data-supplied route. Spec has order 365.063 and requires triangulated-categories-examples; HA-14 instead lists triangulated-categories, derived-functors, yoneda-extensions-and-homological-dimension and tor-flatness-and-global-dimension. Follow the spec unchanged and refer this mismatch to drift.

Conventions: cochains d:+1, X[k]^n=X^(n+k), differential (-1)^k d; H^(-n) corresponds to chain H_n. Cone(f)^n=Y^n plus X^(n+1), d(y,x)=(dy+fx,-dx); triangle ends in X[1]. Weibel's translation symbol T and his [-1] are translated to library [1]. Roof is X<-s-U->f-Y. Enough objects is not a class-indexed choice of replacements. Use the published definable-class convention in rem-category-theory-class-and-size-conventions, not undeclared universes. Assert Hom sets only under smallness/cofinal denominator data; the bounded module model proves local smallness in the worked cases. Do not assert locally small unbounded D(A) for every locally small abelian A.

Duplicate audit: design items 10 and 11 are already published under theorem-prefixed ids; reuse them without minting their proposed proposition-prefixed duplicates. The existing Yoneda/derived-Ext product theorem concerns resolution Ext; item 28 supplies the new derived-category comparison. No B item is a cross-page dependency.

Continuity: each item record below identifies the exact planned claim, dependencies, source and proof obligation. A source URL is not a claim of a successful shell byte-hash fetch. Browser reading succeeded; direct shell curl cannot resolve academic hosts. The final validation record below supersedes intermediate checks. Source-byte fetches remain blocked by shell DNS (EAI_AGAIN); do not fabricate fetch stamps.

## def-multiplicative-system-in-a-category

Fix a locally small category and a two-sided fraction system: identities/composition, both Ore squares, and both cancellation directions. Use the published definable-class convention; restrict to small categories or supply small cofinal denominator families; do not infer local smallness of localization.

Dependencies: def-category, rem-category-theory-class-and-size-conventions.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.3.1–10.3.14, pp. 379–384.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## def-localization-of-a-category-at-a-class-of-morphisms

A localization Q inverts S and is universal among functors inverting S, with the category and Q included in the data.

Dependencies: def-functor-and-contravariant-functor, def-natural-isomorphism.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.3.1–10.3.14, pp. 379–384.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## def-left-roof-representing-a-localized-morphism

A left roof X <-s- U -f-> Y represents Q(f)Q(s)^(-1), s in S.

Dependencies: def-multiplicative-system-in-a-category.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.3.1–10.3.14, pp. 379–384.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## def-common-refinement-equivalence-of-roofs

Roofs (s,f),(t,g) are equivalent when maps a:V->U,b:V->Uprime satisfy sa=tb in S and fa=gb; a,b need not separately lie in S.

Dependencies: def-left-roof-representing-a-localized-morphism.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.3.1–10.3.14, pp. 379–384.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## lem-roof-equivalence-is-an-equivalence-relation

Common refinement gives a reflexive, symmetric, transitive relation. Transitivity must use Ore and cancellation with the composite denominator, not assume refinement legs lie in S.

Dependencies: def-common-refinement-equivalence-of-roofs, def-multiplicative-system-in-a-category.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.3.1–10.3.14, pp. 379–384.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## lem-composition-of-roofs-is-well-defined

Compose via an Ore square f a=t b and denominator s a. Prove independence from the Ore square and both representatives; prove associativity and identity roof laws.

Dependencies: lem-roof-equivalence-is-an-equivalence-relation, def-multiplicative-system-in-a-category.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.3.1–10.3.14, pp. 379–384.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## thm-the-calculus-of-fractions-constructs-the-localization

Roof classes form the localization in the supplied size setting; descend F by (s,f) -> F(f)F(s)^(-1). Include equality detection Q(f)=Q(g) iff f u=g u for some denominator u and the dual roof presentation.

Dependencies: def-localization-of-a-category-at-a-class-of-morphisms, lem-composition-of-roofs-is-well-defined.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.3.1–10.3.14, pp. 379–384.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## prop-quasi-isomorphisms-contain-identities-and-are-closed-under-composition

Identities and composites induce cohomology isomorphisms.

Dependencies: def-quasi-isomorphism.

Source support: https://stacks.math.columbia.edu/tag/05RR — 13.11.1–13.11.6.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## thm-two-out-of-three-for-quasi-isomorphisms

For composable complex maps, if two of f,g,gf are quasi-isomorphisms, so is the third.

Dependencies: prop-quasi-isomorphisms-contain-identities-and-are-closed-under-composition.

Source support: https://stacks.math.columbia.edu/tag/05RR — 13.11.1–13.11.6.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category

Quasi-isomorphisms in the cochain homotopy category satisfy both Ore and cancellation axioms, also in each bounded variant. Use cone triangles and Hom exactness; size is a separate standing assumption.

Dependencies: def-multiplicative-system-in-a-category, prop-quasi-isomorphisms-contain-identities-and-are-closed-under-composition, thm-two-out-of-three-for-quasi-isomorphisms, thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism, thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic, thm-the-homotopy-category-of-an-abelian-category-is-triangulated, thm-long-exact-hom-sequences-of-a-distinguished-triangle, thm-homology-is-a-homological-functor-on-the-homotopy-category.

Source support: https://stacks.math.columbia.edu/tag/05RR — 13.11.1–13.11.6.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## def-derived-category-of-an-abelian-category

Use cochain reindexing of the published K(A); D(A)=K(A)[qis^(-1)]. D-,D+,Db initially localize termwise bounded variants; identification with cohomologically bounded full subcategories is proved later. Use the definable-class convention with the stated denominator smallness condition when asserting Hom sets; for bounded module calculations local smallness is supplied by the later resolution-model equivalence.

Dependencies: thm-the-calculus-of-fractions-constructs-the-localization, lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category, def-cochain-complex-in-an-abelian-category, def-bounded-bounded-below-and-bounded-above-complex.

Source support: https://stacks.math.columbia.edu/tag/05RR — 13.11.1–13.11.6.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms

Q(s) is invertible for every quasi-isomorphism s, with inverse the reversed roof.

Dependencies: def-derived-category-of-an-abelian-category.

Source support: https://stacks.math.columbia.edu/tag/05RR — 13.11.1–13.11.6.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## prop-cohomology-factors-through-the-derived-category

Each H^n factors uniquely through Q. Once triangulation is established, its long cohomology sequences follow from images of cone triangles (proved in item 17).

Dependencies: def-derived-category-of-an-abelian-category, thm-homology-is-a-homological-functor-on-the-homotopy-category.

Source support: https://stacks.math.columbia.edu/tag/05RR — 13.11.1–13.11.6.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## prop-a-complex-is-zero-in-the-derived-category-exactly-when-it-is-acyclic

Q(X) is a zero object iff all H^n(X) vanish; use X->0 in one direction and the factored cohomology in the other.

Dependencies: prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms, prop-cohomology-factors-through-the-derived-category.

Source support: https://stacks.math.columbia.edu/tag/05RR — 13.11.1–13.11.6.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## lem-addition-of-roofs-makes-an-additive-localization

For an additive category, common-denominator addition of roofs is representative-independent and bilinear for composition; Q preserves zero and biproducts.

Dependencies: thm-the-calculus-of-fractions-constructs-the-localization, def-additive-category.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.3.11, p. 383.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## lem-finite-roof-squares-and-composable-pairs-can-be-cleared

A commuting square in a two-sided fraction localization can be replaced by a commuting square in the original category with denominator comparison maps. Likewise clear a composable pair and its composite simultaneously; prove by Ore and cancellation.

Dependencies: lem-composition-of-roofs-is-well-defined, thm-the-calculus-of-fractions-constructs-the-localization.

Source support: https://stacks.math.columbia.edu/tag/05R1 — 13.5.5–13.5.6, including all TR1–TR4 proof paragraphs; https://stacks.math.columbia.edu/tag/05Q3 — Lemma 4.27.10, complete proof including footnote common denominator construction.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## lem-localized-cone-triangles-satisfy-tr-one-through-tr-three

Isomorphic images of cone triangles satisfy TR1, signed TR2, and TR3: use roofs for completion and the finite roof-clearing lemma to lift the square; obtain the third denominator via cohomology five lemma. The third comparison map is a quasi-isomorphism by the cohomology long exact sequences and five lemma, before triangulation of D is established.

Dependencies: def-derived-category-of-an-abelian-category, lem-addition-of-roofs-makes-an-additive-localization, lem-finite-roof-squares-and-composable-pairs-can-be-cleared, thm-the-homotopy-category-of-an-abelian-category-is-triangulated, thm-homology-is-a-homological-functor-on-the-homotopy-category, thm-five-lemma-in-an-abelian-category.

Source support: https://stacks.math.columbia.edu/tag/05R1 — 13.5.5–13.5.6, including all TR1–TR4 proof paragraphs.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## lem-localized-cone-triangles-satisfy-the-octahedral-axiom

After simultaneous denominator clearing of two composable maps, the published octahedron in K(A) descends to the required octahedron in D(A), with all connecting signs preserved.

Dependencies: lem-localized-cone-triangles-satisfy-tr-one-through-tr-three, lem-finite-roof-squares-and-composable-pairs-can-be-cleared, prop-octahedral-gives-a-triangle-relating-the-cones-of-f-g-and-gf.

Source support: https://stacks.math.columbia.edu/tag/05R1 — 13.5.5–13.5.6, including all TR1–TR4 proof paragraphs.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## thm-the-derived-category-inherits-a-triangulated-structure

Images of cone triangles, closed under isomorphism, give a triangulation and Q is exact. All H^n give the expected long exact sequences.

Dependencies: lem-localized-cone-triangles-satisfy-tr-one-through-tr-three, lem-localized-cone-triangles-satisfy-the-octahedral-axiom, def-exact-functor-between-triangulated-categories.

Source support: https://stacks.math.columbia.edu/tag/05R1 — 13.5.5–13.5.6, including all TR1–TR4 proof paragraphs.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## thm-the-derived-category-is-the-verdier-quotient-by-acyclic-complexes

Define the narrow Verdier quotient by the thick acyclic subcategory using precisely maps with acyclic cone. It is D(A); prove universal factorization for exact functors annihilating acyclics, using Hom exactness to detect invertibility.

Dependencies: thm-the-derived-category-inherits-a-triangulated-structure, prop-a-complex-is-zero-in-the-derived-category-exactly-when-it-is-acyclic, thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic, prop-the-full-subcategory-of-acyclic-complexes-is-thick-in-the-homotopy-category.

Source support: https://stacks.math.columbia.edu/tag/05RI — Definition 13.6.7, specialized to acyclic complexes.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## def-homotopically-projective-bounded-above-complex

Define K-projective by Hom_K(P,A[n])=0 for every acyclic A and every n; equivalently the cochain Hom complex is acyclic. Specialize to bounded-above P but do not build boundedness into the general K-projective predicate.

Dependencies: def-hom-complex-of-chain-complexes, thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex, def-bounded-bounded-below-and-bounded-above-complex.

Source support: https://arxiv.org/pdf/1206.6632v1 — 6.5.1 and 13.1 (K-injective definition); cochain convention.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## def-homotopically-injective-bounded-below-complex

Define K-injective dually by Hom_K(A,I[n])=0 for every acyclic A and integer n; emphasize bounded-below I as the licensed replacement case.

Dependencies: def-homotopically-projective-bounded-above-complex.

Source support: https://arxiv.org/pdf/1206.6632v1 — 6.5.1 and 13.1 (K-injective definition); cochain convention.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## thm-a-bounded-above-complex-of-projectives-is-homotopically-projective

A bounded-above cochain complex of projectives is K-projective: descend from its highest degree, lifting through cycles of the acyclic target. For the countable recursive homotopy construction assume DC, or supply the degreewise lifting choices.

Dependencies: def-homotopically-projective-bounded-above-complex, def-projective-object, def-dependent-choice.

Source support: https://stacks.math.columbia.edu/tag/0643 — 13.19.3–13.19.8; W 10.4.8 for the equivalence.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## thm-a-bounded-below-complex-of-injectives-is-homotopically-injective

A bounded-below cochain complex of injectives is K-injective: ascend from its lowest degree, extending residual maps from boundaries of the acyclic source. For the countable recursive homotopy construction assume DC, or supply the degreewise lifting choices.

Dependencies: def-homotopically-injective-bounded-below-complex, def-injective-object, def-dependent-choice.

Source support: https://stacks.math.columbia.edu/tag/013G — 13.18.3–13.18.8; W 10.4.8 for the equivalence.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## prop-morphisms-from-a-homotopically-projective-complex-need-no-roof

Hom_K(P,X)->Hom_D(P,X) is bijective for K-projective P. Cone Hom exactness gives the unique homotopy-class lift through each denominator.

Dependencies: def-homotopically-projective-bounded-above-complex, def-derived-category-of-an-abelian-category, thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic, thm-long-exact-hom-sequences-of-a-distinguished-triangle.

Source support: https://stacks.math.columbia.edu/tag/0643 — 13.19.3–13.19.8; W 10.4.8 for the equivalence.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## prop-morphisms-into-a-homotopically-injective-complex-need-no-roof

Hom_K(X,I)->Hom_D(X,I) is bijective for K-injective I. Use the dual denominator calculus and Hom exactness. Include the auxiliary splitting of the cone triangle of an outgoing quasi-isomorphism from I, using its retraction and cone matrices (Weibel Exercise10.4.1).

Dependencies: def-homotopically-injective-bounded-below-complex, def-derived-category-of-an-abelian-category, thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic, thm-long-exact-hom-sequences-of-a-distinguished-triangle.

Source support: https://stacks.math.columbia.edu/tag/013G — 13.18.3–13.18.8; W 10.4.8 for the equivalence.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## def-brutal-truncation-of-a-complex

Brutal truncation deletes all terms on one side without correcting the boundary term. In cochains sigma>=n is a subcomplex and sigma<=n a quotient.

Dependencies: def-cochain-complex-in-an-abelian-category.

Source support: https://stacks.math.columbia.edu/tag/0118 — 12.15, all four chain and four cochain truncations.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## def-canonical-truncation-of-a-complex

In cochains tau<=n uses ker(d^n) at n and tau>=n uses coker(d^(n-1)) at n; specify induced differentials and natural maps.

Dependencies: def-brutal-truncation-of-a-complex, def-cohomology-object-of-a-cochain-complex.

Source support: https://stacks.math.columbia.edu/tag/0118 — 12.15, all four chain and four cochain truncations.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology

The canonical truncations are functorial complexes preserving cohomology on the retained side and killing the other; they preserve quasi-isomorphisms and so descend to D.

Dependencies: def-canonical-truncation-of-a-complex.

Source support: https://stacks.math.columbia.edu/tag/0118 — 12.15, all four chain and four cochain truncations.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## thm-canonical-truncations-fit-a-distinguished-triangle

First prove every short exact sequence of complexes yields a distinguished triangle by the quasi-isomorphism Cone(inclusion)->quotient. Then X/tau<=n X -> tau>=n+1 X is a quasi-isomorphism, giving the truncation triangle and its adjacent-cohomology-layer variants.

Dependencies: lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology, thm-the-derived-category-inherits-a-triangulated-structure, thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic, thm-long-exact-sequence-in-homology.

Source support: https://stacks.math.columbia.edu/tag/08J5 — Remark 13.12.4 and its three triangles.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## prop-bounded-derived-localizations-embed-fully-faithfully

The bounded localizations embed fully faithfully in D(A); their essential images are exactly the complexes with the corresponding cohomological bounds. Truncate roof representatives and equality witnesses, using both roof orientations.

Dependencies: lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology, def-derived-category-of-an-abelian-category, thm-the-derived-category-inherits-a-triangulated-structure.

Source support: https://stacks.math.columbia.edu/tag/05RR — 13.11.1–13.11.6.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## lem-bounded-above-complexes-admit-projective-replacements

Enough projectives gives each bounded-above complex a termwise epic quasi-isomorphism from a bounded-above projective complex, preserving its upper bound. Descending induction chooses an epimorphism onto X^(n-1) fibre-product over X^n with ker(d_P^n); verify surjectivity on cycles and isomorphisms in higher cohomology. Assume DC for the countable inductive choices, or supply the successive epimorphisms as data.

Dependencies: lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology, def-a-category-with-enough-projectives-and-with-enough-injectives, thm-the-pullback-of-an-epimorphism-is-an-epimorphism, def-dependent-choice.

Source support: https://stacks.math.columbia.edu/tag/05T7 — Lemma 13.15.4, full descending induction.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## lem-bounded-below-complexes-admit-injective-replacements

Dual ascending pushout construction gives a termwise monic bounded-below injective replacement preserving the lower bound. Objectwise existence assumes DC for countable inductive choices, or supplied successive monomorphisms; a class-indexed replacement assignment remains supplied data.

Dependencies: lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology, def-a-category-with-enough-projectives-and-with-enough-injectives, cor-the-pushout-of-a-monomorphism-is-a-monomorphism, def-dependent-choice.

Source support: https://stacks.math.columbia.edu/tag/05T6 — Lemma 13.15.5, dual to 13.15.4.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## thm-projective-complexes-model-the-bounded-above-derived-category

With supplied projective replacements, K-(Proj A)->D-(A) is fully faithful and essentially surjective and admits the supplied quasi-inverse; cones and shifts stay in the model.

Dependencies: thm-a-bounded-above-complex-of-projectives-is-homotopically-projective, prop-morphisms-from-a-homotopically-projective-complex-need-no-roof, lem-bounded-above-complexes-admit-projective-replacements, prop-bounded-derived-localizations-embed-fully-faithfully.

Source support: https://stacks.math.columbia.edu/tag/0643 — 13.19.3–13.19.8; W 10.4.8 for the equivalence.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## thm-injective-complexes-model-the-bounded-below-derived-category

With supplied injective replacements, K+(Inj A)->D+(A) is the dual equivalence of triangulated categories. After canonical truncations are available, verify that bounded-below acyclic inputs suffice to test K-injectivity of a bounded-below complex (Yekutieli13.1.2).

Dependencies: thm-a-bounded-below-complex-of-injectives-is-homotopically-injective, prop-morphisms-into-a-homotopically-injective-complex-need-no-roof, lem-bounded-below-complexes-admit-injective-replacements, prop-bounded-derived-localizations-embed-fully-faithfully.

Source support: https://stacks.math.columbia.edu/tag/013G — 13.18.3–13.18.8; W 10.4.8 for the equivalence.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## thm-ext-is-hom-in-the-derived-category

For objects M,N and n>=0, classical Ext^n(M,N) is naturally Hom_D(M,N[n]) whenever enough projectives or enough injectives and the relevant resolution data are supplied; either model suffices, not both simultaneously.

Dependencies: prop-morphisms-from-a-homotopically-projective-complex-need-no-roof, prop-morphisms-into-a-homotopically-injective-complex-need-no-roof, thm-projective-complexes-model-the-bounded-above-derived-category, thm-injective-complexes-model-the-bounded-below-derived-category, thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex, def-ext-via-a-projective-resolution-of-the-first-variable, def-ext-via-an-injective-resolution-of-the-second-variable.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.4.7 and 10.7.5, pp. 388, 400.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## prop-yoneda-product-is-composition-in-the-derived-category

Yoneda splice corresponds to shifted composition beta[p] alpha. Compare the previously published resolution product with morphisms in D; verify degree-one extension roofs, shifts and units. Include the extension-class bijection by truncating a roof and pushing out its left end, and the Ext^2 zero-splice criterion via the Ext long exact sequence and pullback of an extension.

Dependencies: thm-ext-is-hom-in-the-derived-category, thm-canonical-truncations-fit-a-distinguished-triangle, prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product.

Source support: https://stacks.math.columbia.edu/tag/06XP — 13.27.4–13.27.6 and following composition paragraphs.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## def-canonical-t-structure-on-a-derived-category

State all t-structure axioms and the heart inside the definition: shift inclusions, Hom(D<=0,D>=1)=0 and decomposition triangles. Define the canonical candidate by cohomology vanishing.

Dependencies: thm-the-derived-category-inherits-a-triangulated-structure, prop-cohomology-factors-through-the-derived-category.

Source support: https://www.math.fsu.edu/~aluffi/archive/paper306.pdf — Lecture 3, section 3, definition and Main example, pp. 28–29.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## thm-the-canonical-pair-is-a-t-structure

The canonical candidate is a t-structure. To prove orthogonality replace the target by tau>=1 and a left-roof source by tau<=0, so every chain map is zero; shift closure and decomposition use the canonical truncation-triangle theorem. Include the same canonical structure on D-, D+, Db. The roof argument also proves Hom_D(X,Y[n])=0 for n<b-a and Hom_D(X,Y[b-a])=Hom_A(H^a X,H^b Y) when X has no cohomology above a and Y has none below b.

Dependencies: def-canonical-t-structure-on-a-derived-category, lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology, thm-canonical-truncations-fit-a-distinguished-triangle, prop-bounded-derived-localizations-embed-fully-faithfully.

Source support: https://www.math.fsu.edu/~aluffi/archive/paper306.pdf — Lecture 3, section 3, definition and Main example, pp. 28–29.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## thm-the-heart-of-the-canonical-t-structure-is-equivalent-to-the-original-abelian-category

The degree-zero embedding A->D identifies A with the heart; H^0 is its inverse. Double truncation reduces roofs between degree-zero objects to ordinary arrows.

Dependencies: thm-the-canonical-pair-is-a-t-structure, lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology.

Source support: https://arxiv.org/pdf/1206.6632v1 — Proposition 12.4.1, p. 64.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## def-left-total-derived-functor-on-the-bounded-above-derived-category

For additive F and supplied projective replacements define LF(X)=QF(P_X), including augmentation LF Q -> QF and the terminal universal comparison property.

Dependencies: thm-projective-complexes-model-the-bounded-above-derived-category, def-additive-functor.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.5.1–10.5.8, pp. 391–393; restrict to supplied replacement data.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## lem-left-total-derived-functor-is-independent-of-the-supplied-projective-replacement-up-to-unique-natural-isomorphism

Two supplied replacement systems give a natural comparison isomorphism unique among comparisons compatible with their augmentations; do not assert uniqueness of arbitrary natural automorphisms.

Dependencies: def-left-total-derived-functor-on-the-bounded-above-derived-category, prop-morphisms-from-a-homotopically-projective-complex-need-no-roof.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.5.1–10.5.8, pp. 391–393; restrict to supplied replacement data.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## thm-existence-of-the-bounded-above-left-total-derived-functor

The replacement recipe is a functor D-(A)->D-(B) with the left total-derived universal property. Additivity suffices; right exactness is needed to identify H^0 with F.

Dependencies: def-left-total-derived-functor-on-the-bounded-above-derived-category, lem-left-total-derived-functor-is-independent-of-the-supplied-projective-replacement-up-to-unique-natural-isomorphism, prop-an-additive-functor-on-abelian-categories-induces-an-exact-functor-on-homotopy-categories.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.5.1–10.5.8, pp. 391–393; restrict to supplied replacement data.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## def-right-total-derived-functor-on-the-bounded-below-derived-category

For additive F and supplied injective replacements define RF(X)=QF(I_X), with QF -> RF Q and the initial universal comparison property.

Dependencies: thm-injective-complexes-model-the-bounded-below-derived-category, def-additive-functor.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.5.1–10.5.8, pp. 391–393; restrict to supplied replacement data.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## thm-existence-of-the-bounded-below-right-total-derived-functor

The dual bounded-below construction is a functor D+(A)->D+(B); prove change-of-injective-replacement independence and uniqueness relative to coaugmentations, and the universal property. The supplied construction before Q_B also factors through K+(B), and model values agree under the bounded embedding in D.

Dependencies: def-right-total-derived-functor-on-the-bounded-below-derived-category, prop-morphisms-into-a-homotopically-injective-complex-need-no-roof, prop-an-additive-functor-on-abelian-categories-induces-an-exact-functor-on-homotopy-categories.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.5.1–10.5.8, pp. 391–393; restrict to supplied replacement data.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## prop-total-derived-functors-send-distinguished-triangles-to-distinguished-triangles

LF and RF preserve distinguished triangles with the shift comparisons transported through the bounded model equivalences. For an exact F, the termwise functor already descends and its derived comparison is an isomorphism.

Dependencies: thm-existence-of-the-bounded-above-left-total-derived-functor, thm-existence-of-the-bounded-below-right-total-derived-functor, thm-the-derived-category-inherits-a-triangulated-structure.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.5.1–10.5.8, pp. 391–393; restrict to supplied replacement data.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## prop-classical-derived-functors-are-the-cohomology-objects-of-the-total-derived-functor

For an additive F and supplied resolutions, H^(-n)(LF(M[0]))=L_nF(M) and H^n(RF(M[0]))=R^nF(M), n>=0. Right or left exactness respectively identifies degree zero with F; it is not required for the cohomology comparison. Check compatibility with connecting maps. Inline consequences: support bounds and truncation comparison, H0(LF) right exact and H0(RF) left exact, and, for exactness on the appropriate side, the acyclic-object criterion and its three short-exact-sequence closure cases. Recover the existing universal delta-functor statement under its DC/exactness hypotheses.

Dependencies: thm-existence-of-the-bounded-above-left-total-derived-functor, thm-existence-of-the-bounded-below-right-total-derived-functor, def-left-derived-object-relative-to-projective-resolution-data, def-right-derived-object-relative-to-injective-resolution-data, thm-derived-functors-are-universal-delta-functors, prop-total-derived-functors-send-distinguished-triangles-to-distinguished-triangles.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.5.1–10.5.8, pp. 391–393; restrict to supplied replacement data.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms

Tensoring a bounded-above acyclic cochain complex with a bounded-above flat complex gives an acyclic finite-diagonal total complex. Prove by finite cycle elimination along diagonals after reindexing; deduce invariance under quasi-isomorphisms in the other variable and balance via the two-replacement diagram. No spectral-sequence prerequisite. Reindex to chain degrees and use the dual of the published finite-diagonal assembly argument; explain the dualization and signs explicitly.

Dependencies: def-tensor-product-total-complex-of-chain-complexes, def-left-and-right-flat-modules-over-an-arbitrary-ring, thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic, lem-acyclic-assembly-by-exact-columns, lem-acyclic-assembly-by-exact-rows.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.6.1–10.6.4 and Exercise 10.6.1, p. 395; elementary finite-diagonal replacement for spectral sequence proof.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## def-derived-tensor-product-in-the-bounded-above-setting

For a bounded-above right R-complex N and left R-complex M, N tensor^L_R M is represented using a supplied projective replacement of either variable. The common two-replacement model gives the natural balancing isomorphism.

Dependencies: thm-existence-of-the-bounded-above-left-total-derived-functor, lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms, def-tensor-product-total-complex-of-chain-complexes, thm-module-categories-have-enough-projectives, lem-projective-modules-are-flat-over-an-arbitrary-ring.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.6.1–10.6.4 and Exercise 10.6.1, p. 395; elementary finite-diagonal replacement for spectral sequence proof.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## prop-homology-of-the-derived-tensor-product-is-tor

For modules in degree zero, H^(-n)(N tensor^L_R M)=Tor_n^R(N,M); no unrestricted hypertor assertion is needed.

Dependencies: def-derived-tensor-product-in-the-bounded-above-setting, def-balanced-tor-bifunctor.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.6.1–10.6.4 and Exercise 10.6.1, p. 395; elementary finite-diagonal replacement for spectral sequence proof.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## def-derived-hom-in-the-bounded-setting

For M in D-(A) and N in D+(A), define RHom in D+(Ab) via Hom(P_M,N) if enough projectives or Hom(M,I_N) if enough injectives. Prove invariance in both variables by K-orthogonality. When both exist compare through Hom(P_M,I_N).

Dependencies: thm-projective-complexes-model-the-bounded-above-derived-category, thm-injective-complexes-model-the-bounded-below-derived-category, prop-morphisms-from-a-homotopically-projective-complex-need-no-roof, prop-morphisms-into-a-homotopically-injective-complex-need-no-roof, def-hom-complex-of-chain-complexes.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.7.2–10.7.5 and Exercise 10.7.1, pp. 399–400.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## prop-cohomology-of-derived-hom-is-ext

For degree-zero M,N, H^n RHom(M,N)=classical Ext^n(M,N); more generally in the declared mixed bounded range it is Hom_D(M,N[n]).

Dependencies: def-derived-hom-in-the-bounded-setting, thm-ext-is-hom-in-the-derived-category.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.7.2–10.7.5 and Exercise 10.7.1, pp. 399–400.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## prop-bounded-derived-complexes-split-when-higher-ext-between-cohomologies-vanishes

With supplied projective or injective resolutions, if X is cohomologically bounded and Ext^p(H^i X,H^j X)=0 for p>=2 and i>j, then X is isomorphic to the finite sum of H^i(X)[-i]. Prove the zero-connecting-map splitting criterion inline using Hom exactness and the split triangle, then induct on cohomological amplitude. Inline corollary: if Ext^2 vanishes for every pair, all bounded complexes split; propagate vanishing via Yoneda splicing. The splitting is not claimed canonical.

Dependencies: thm-ext-is-hom-in-the-derived-category, thm-canonical-truncations-fit-a-distinguished-triangle, prop-yoneda-product-is-composition-in-the-derived-category, thm-long-exact-hom-sequences-of-a-distinguished-triangle, prop-zero-and-split-triangles-are-distinguished, prop-two-isomorphism-components-of-a-morphism-of-triangles-force-the-third.

Source support: https://stacks.math.columbia.edu/tag/06XP — Lemmas 13.27.8–13.27.10; https://stacks.math.columbia.edu/tag/05QT — Lemma 13.4.11.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## fs-localization-identifies-a-quasi-isomorphism-with-an-identity-morphism

For every quasi-isomorphism s, Q(s) is literally an identity. Refute with -1 on Z[0], detected by H^0.

Dependencies: prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms, prop-cohomology-factors-through-the-derived-category.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — Boundary check against the licensed construction.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## fs-two-roofs-are-equal-whenever-their-right-hand-arrows-are-equal

Two roofs with the same right arrow necessarily agree. Use numerator id on Z[0] and denominators id,-id, giving id,-id in D.

Dependencies: thm-the-calculus-of-fractions-constructs-the-localization, prop-cohomology-factors-through-the-derived-category.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — Boundary check against the licensed construction.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## fs-the-derived-category-is-the-same-category-as-the-homotopy-category

Q:K(A)->D(A) is always an equivalence. The nonsplit exact complex 0->Z->Z->Z/2->0 is zero only in D.

Dependencies: prop-a-complex-is-zero-in-the-derived-category-exactly-when-it-is-acyclic, fs-every-acyclic-complex-is-contractible.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — Boundary check against the licensed construction.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## fs-every-complex-of-projectives-is-homotopically-projective

Every unbounded complex of projectives is K-projective. Over Z/4 use the doubly infinite multiplication-by-2 complex: acyclic, but the identity cannot be dh+hd since its components would be even.

Dependencies: def-homotopically-projective-bounded-above-complex, def-projective-module.

Source support: https://mathoverflow.net/questions/120075/dg-projective-vs-k-projective-complexes — Boundary check against the licensed construction.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## fs-brutal-and-canonical-truncation-are-the-same

Brutal and canonical truncation coincide. For Z --2--> Z in degrees 0,1, sigma<=0 is Z[0] whereas tau<=0 is zero.

Dependencies: def-brutal-truncation-of-a-complex, def-canonical-truncation-of-a-complex.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — Boundary check against the licensed construction.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## fs-an-unbounded-total-derived-functor-exists-from-enough-injectives-alone

Enough injectives alone licenses computing unbounded RF by arbitrary termwise injective replacements. Over R=Z/4 the periodic 2 complex is an acyclic complex of injectives but Hom_R(R/2,-) gives zero differentials and nonzero terms. Prove R is injective by Baer on its three ideals. This refutes the asserted recipe, not a blanket nonexistence theorem.

Dependencies: def-homotopically-injective-bounded-below-complex, def-right-total-derived-functor-on-the-bounded-below-derived-category, thm-baer-criterion-for-injective-modules.

Source support: https://mathoverflow.net/questions/120075/dg-projective-vs-k-projective-complexes — Boundary check against the licensed construction.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## fs-a-derived-functor-is-canonical-without-supplied-replacement-data

A replacement model LF is literally canonical without supplied replacement data. Adding the contractible identity complex to a chosen projective replacement changes the literal representative while preserving its derived isomorphism class.

Dependencies: def-left-total-derived-functor-on-the-bounded-above-derived-category, lem-left-total-derived-functor-is-independent-of-the-supplied-projective-replacement-up-to-unique-natural-isomorphism, def-contractible-complex.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — Boundary check against the licensed construction.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## ex-a-roof-representing-an-ext-one-class

For 0->Z->2 Z->Z/2->0 use U=(Z->2 Z) in degrees -1,0, roof Z/2[0]<-U->Z[1] with right component id in degree -1. This is the nonsplit generator.

Dependencies: thm-ext-is-hom-in-the-derived-category, prop-yoneda-product-is-composition-in-the-derived-category.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.4.7 and 10.7.5, pp. 388, 400.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## ex-an-acyclic-complex-that-becomes-zero-in-d-but-not-in-k

The nonsplit exact three-term complex Z->2 Z->Z/2 is acyclic and hence zero in D, but any contraction would split the quotient.

Dependencies: prop-a-complex-is-zero-in-the-derived-category-exactly-when-it-is-acyclic.

Source support: https://stacks.math.columbia.edu/tag/05RR — 13.11.1–13.11.6.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## ex-inverting-a-quasi-isomorphism-by-a-reversed-roof

The augmentation (Z->2 Z)->Z/2[0] is inverted by the roof Z/2[0]<-(Z->2 Z)->id (Z->2 Z).

Dependencies: prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms.

Source support: https://stacks.math.columbia.edu/tag/05RR — 13.11.1–13.11.6.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## ex-ext-one-as-a-derived-category-morphism

Compute Hom_D(Z/m[0],Z/n[1])=Z/gcd(m,n), m,n>0, through the two-term free resolution and its Hom complex.

Dependencies: thm-ext-is-hom-in-the-derived-category.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.4.7 and 10.7.5, pp. 388, 400.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## ex-brutal-versus-canonical-truncation

Compute all four truncations at 0 of Z->2 Z in degrees 0,1, distinguishing kernel/cokernel from brutal boundary terms.

Dependencies: def-brutal-truncation-of-a-complex, def-canonical-truncation-of-a-complex, lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology.

Source support: https://stacks.math.columbia.edu/tag/0118 — 12.15, all four chain and four cochain truncations.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## ex-a-canonical-truncation-triangle

For X=(Z/4->2 Z/4) in degrees 0,1, display tau<=0 X -> X -> tau>=1 X -> tau<=0 X[1] and obtain its maps via the quotient complex.

Dependencies: thm-canonical-truncations-fit-a-distinguished-triangle.

Source support: https://stacks.math.columbia.edu/tag/08J5 — Remark 13.12.4 and its three triangles.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## ex-derived-tensor-of-two-cyclic-abelian-groups

For m,n>0, model Z/m tensor^L_Z Z/n by Z/n->m Z/n in degrees -1,0. H^-1 and H^0 are Z/gcd(m,n); other cohomology vanishes.

Dependencies: def-derived-tensor-product-in-the-bounded-above-setting, prop-homology-of-the-derived-tensor-product-is-tor.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.6.1–10.6.4 and Exercise 10.6.1, p. 395; elementary finite-diagonal replacement for spectral sequence proof.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## ex-derived-hom-of-cyclic-abelian-groups

For m,n>0, RHom_Z(Z/m,Z/n) is Z/n->m Z/n in degrees 0,1. Its two cohomology groups are Z/gcd(m,n).

Dependencies: def-derived-hom-in-the-bounded-setting, prop-cohomology-of-derived-hom-is-ext.

Source support: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.7.2–10.7.5 and Exercise 10.7.1, pp. 399–400.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## cex-an-unbounded-complex-of-projectives-that-is-not-k-projective

Over Z/4 the unbounded periodic free complex with d=2 is acyclic but not K-projective: 1=2h+2hprime is impossible modulo 2.

Dependencies: def-homotopically-projective-bounded-above-complex.

Source support: https://mathoverflow.net/questions/120075/dg-projective-vs-k-projective-complexes — Explicit specialization of the bounded models; see batch notes.

Status: scaffolded; author the indicated construction/proof or inline witness at step 5. Dependencies supply the definitions and proof steps, and the coverage harvest records the exact result disposition. No authored-proof review is claimed.

## Proof and source decisions after dependency audit

There are 60 A items and 9 terminal B examples. Design entries10–11 reuse the published theorem IDs rather than duplicate them. Nine focused additions close the localization/triangulation, bounded embedding/replacement and tensor arguments and include the cheaply proved bounded splitting proposition. This is within the A-page limit; no content has been dropped to avoid a split.

The ordinary Ore construction precedes all derived-category use. For TR3 clear the two given K arrows and localized square as in Stacks4.27.10, including the footnote common denominator. Complete the resulting maps of cone triangles in K; the third denominator is a quasi-isomorphism by cohomology and the five lemma. It is not an isomorphism in K merely because the first two are quasi-isomorphisms. For TR4 simultaneously clear the composable pair, apply the entire published K octahedron with all faces and the cone triangle, then transport through triangle isomorphisms. Hom exactness and the two-isomorphism argument justify independence of chosen completions. Weibel10.4.1 leaves this proof as an exercise; Stacks13.5.6 supplies the full argument.

For the short-exact-complex triangle use Cone(inclusion)->quotient with kernel the identity cone; compare the maps, not just the objects. Stacks uses a different cone sign convention and writes -p; transport its formula to the library cone convention before naming the connecting map. Noohi's displayed truncation quotient and the kernel/cokernel canonical truncation are compared by the explicit quasi-isomorphism of Stacks13.12.4, not identified termwise. In Stacks13.27.3 the smart-truncated source vanishes ABOVE a despite the printed opposite inequality. In Yekutieli13.1.5 follow the statement I->M; its proof diagram reverses the arrow. In Stacks13.19.9 the projective bounded context is above, despite its Comp+ typo.

Enough projectives/injectives does not supply class-indexed replacements. Bounded objectwise construction assumes DC or explicitly supplied successive choices; all functors use supplied replacement systems. Direct pullback/pushout induction (Stacks13.15.4–5) avoids any forward dependency on Cartan–Eilenberg resolutions. K-projectivity/injectivity is the general Hom-orthogonality predicate; boundedness is a hypothesis of the existence theorem, not part of that predicate. The alternative Ext constructions are conditional branches, not a demand for both enough-projectives and enough-injectives simultaneously. The balancing theorem is used only when both models exist.

The periodic Z/4 example has ker(2)=im(2)=(2). A contracting homotopy would imply 1=2h+2h' componentwise, impossible modulo2. For the injective recipe counterexample, Baer on ideals0,(2),R shows R injective: the image of2 must be0 or2 and extends by multiplication by0 or1. Hom_R(R/2,R) has two elements and multiplication by2 induces zero, so the image of the periodic complex is not acyclic. Use the published Baer criterion with its AC hypothesis. The false-statement ID about unbounded existence is retained from design but its exact assertion refuted is the arbitrary termwise-injective replacement recipe; this example is not evidence that all unbounded total derived functors fail to exist. K-injective existence in Grothendieck categories is not denied.

Primary independent readings are Weibel's textbook chapter, Yekutieli's full lecture-note set and Noohi's lecture notes; the Stacks sections independently verify the detailed constructions. Yekutieli's author-host v1 URL timed out; the complete version-pinned arXiv v1 document was fetched and read and original_url is preserved in coverage. No harvest is attributed to an unread replacement. The MathOverflow entries are supplementary original calculations, not primary pair backing. Failed attempts to locate a thesis were not harvested. Browser reading and byte-fetch stamps are separate: browser returned complete97-page Yekutieli,48-page Weibel and33-page Noohi documents, and the cited Stacks HTML sections. Shell requests fail DNS across all these hosts.

Every included/inline heading has a concrete item. Multiple independent sources often map to the same item; this explains the checklist low-yield warning without padding new IDs. Only selected complete result ranges are claimed in coverage, not every statement in entire chapters. The design amendment's broader topics are scoped faithfully: general partial ind/pro derivability and weak-Serre constraints are outside the bounded route; adjunction extensions await an owner-selected category-track destination; complex horseshoes and derived-composition comparison are routed to grothendieck-spectral-sequences-and-computations. Ordinary bounded replacements and proof prerequisites are retained here.

## Validation and remaining work

Final validator results are recorded after the last artifact changes below. The next author must read the current item, its actual dependency statements, and cited source passages before authoring; these notes do not replace them. All step-5 proofs and independent reviews remain future obligations, as appropriate for this step-1 scaffold. Do not mark the batch ready while source-fetch and URL gates fail.
Command: `node tools/coverage-checklist.mjs research/frontier-33-batch-6.coverage.json --require-destination`

Exit 0.

```text
coverage-checklist: 1 page(s), 189 harvested result(s), 0 error(s), 1 warning(s)
WARN coverage-low-yield [derived-categories]: frontier-33-batch-6.coverage.json: derived-categories: 50/189 harvested results scaffolded; confirm the declines with Alpha
```


Command: `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-6.pages.json`

Exit 0.

```text
content-policy: 69 scoped item(s), 0 error(s), 0 warning(s)
```


Command: `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-1.pages.json research/frontier-33-batch-10.pages.json research/frontier-33-batch-11.pages.json research/frontier-33-batch-12.pages.json research/frontier-33-batch-13.pages.json research/frontier-33-batch-14.pages.json research/frontier-33-batch-15.pages.json research/frontier-33-batch-16.pages.json research/frontier-33-batch-17.pages.json research/frontier-33-batch-18.pages.json research/frontier-33-batch-19.pages.json research/frontier-33-batch-2.pages.json research/frontier-33-batch-20.pages.json research/frontier-33-batch-3.pages.json research/frontier-33-batch-4.pages.json research/frontier-33-batch-5.pages.json research/frontier-33-batch-6.pages.json research/frontier-33-batch-7.pages.json research/frontier-33-batch-8.pages.json research/frontier-33-batch-9.pages.json`

Exit 1.

```text
content-policy: 920 scoped item(s), 2 error(s), 0 warning(s)
ERROR batch-dependency-missing [thm-kernel-range-annihilator-identities]: thm-kernel-range-annihilator-identities depends on def-weak-star-topology, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-kernel-range-annihilator-identities]: thm-kernel-range-annihilator-identities depends on thm-bipolar-closure-for-linear-subspaces, which is neither declared by this batch nor an item on disk
```


Command: `node tools/validate-plan.mjs research/plan-spec.json`

Exit 0.

```text
OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 844 page(s) with item lists.
NOTE: 511 planned page(s) carry no item list yet (marked * above). Their reading
```


Command: `node tools/validate-plan.mjs /tmp/frontier-33-batch-6-composed-plan.json`

Exit 0.

```text
OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 846 page(s) with item lists.
NOTE: 509 planned page(s) carry no item list yet (marked * above). Their reading
```


Final recheck after adding the explicit homotopy-choice hypothesis and the interior Weibel exercise disposition:

`node tools/coverage-checklist.mjs research/frontier-33-batch-6.coverage.json --require-destination`: exit 0.

```text
coverage-checklist: 1 page(s), 190 harvested result(s), 0 error(s), 1 warning(s)
WARN coverage-low-yield [derived-categories]: frontier-33-batch-6.coverage.json: derived-categories: 50/190 harvested results scaffolded; confirm the declines with Alpha
```

`node tools/content-policy.mjs --manifest-only research/frontier-33-batch-6.pages.json`: exit 0.

```text
content-policy: 69 scoped item(s), 0 error(s), 0 warning(s)
```

`node tools/validate-plan.mjs /tmp/frontier-33-batch-6-composed-plan.json`: exit 0.

```text
OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 846 page(s) with item lists.
```

## Source gates and handoff status

`node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-6.coverage.json --stamp --timeout-sec 12`: exit1; 0/21 verified, 0 newly stamped, 21 failures, all EAI_AGAIN. The final coverage has the same21 URLs; the later changes only refine claims/dispositions. No source-fetch stamp was invented.

`node tools/url-sweep.mjs --coverage research/frontier-33-batch-6.coverage.json --out /tmp/frontier-33-batch-6-url-liveness.json --recover --fail-on-dead --timeout-ms 12000`: exit1; 0/21 live,21 failed,0 recovered,0 suspect; the original author-host Yekutieli URL is correctly recorded as superseded. Exact failures follow. Recovery returned no snapshots, but because the transport failed DNS this is not evidence that archives or the original texts are unavailable. The tool's automatic “re-sourcing is justified” text does not override the successful browser reads or license replacing sources merely to clear the gate.

- https://arxiv.org/pdf/1206.6632v1 — curl: (6) Could not resolve host: arxiv.org; HTTP status0; recovered=null.
- https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — curl: (6) Could not resolve host: math.mit.edu; HTTP status0; recovered=null.
- https://mathoverflow.net/questions/120075/dg-projective-vs-k-projective-complexes — curl: (6) Could not resolve host: mathoverflow.net; HTTP status0; recovered=null.
- https://stacks.math.columbia.edu/tag/0118 — curl: (6) Could not resolve host: stacks.math.columbia.edu; HTTP status0; recovered=null.
- https://stacks.math.columbia.edu/tag/013G — curl: (6) Could not resolve host: stacks.math.columbia.edu; HTTP status0; recovered=null.
- https://stacks.math.columbia.edu/tag/014Z — curl: (6) Could not resolve host: stacks.math.columbia.edu; HTTP status0; recovered=null.
- https://stacks.math.columbia.edu/tag/0156 — curl: (6) Could not resolve host: stacks.math.columbia.edu; HTTP status0; recovered=null.
- https://stacks.math.columbia.edu/tag/05Q3 — curl: (6) Could not resolve host: stacks.math.columbia.edu; HTTP status0; recovered=null.
- https://stacks.math.columbia.edu/tag/05QT — curl: (6) Could not resolve host: stacks.math.columbia.edu; HTTP status0; recovered=null.
- https://stacks.math.columbia.edu/tag/05R1 — curl: (6) Could not resolve host: stacks.math.columbia.edu; HTTP status0; recovered=null.
- https://stacks.math.columbia.edu/tag/05RA — curl: (6) Could not resolve host: stacks.math.columbia.edu; HTTP status0; recovered=null.
- https://stacks.math.columbia.edu/tag/05RR — curl: (6) Could not resolve host: stacks.math.columbia.edu; HTTP status0; recovered=null.
- https://stacks.math.columbia.edu/tag/05S7 — curl: (6) Could not resolve host: stacks.math.columbia.edu; HTTP status0; recovered=null.
- https://stacks.math.columbia.edu/tag/05T3 — curl: (6) Could not resolve host: stacks.math.columbia.edu; HTTP status0; recovered=null.
- https://stacks.math.columbia.edu/tag/05TB — curl: (6) Could not resolve host: stacks.math.columbia.edu; HTTP status0; recovered=null.
- https://stacks.math.columbia.edu/tag/05TM — curl: (6) Could not resolve host: stacks.math.columbia.edu; HTTP status0; recovered=null.
- https://stacks.math.columbia.edu/tag/0643 — curl: (6) Could not resolve host: stacks.math.columbia.edu; HTTP status0; recovered=null.
- https://stacks.math.columbia.edu/tag/06UP — curl: (6) Could not resolve host: stacks.math.columbia.edu; HTTP status0; recovered=null.
- https://stacks.math.columbia.edu/tag/06XP — curl: (6) Could not resolve host: stacks.math.columbia.edu; HTTP status0; recovered=null.
- https://stacks.math.columbia.edu/tag/0A8C — curl: (6) Could not resolve host: stacks.math.columbia.edu; HTTP status0; recovered=null.
- https://www.math.fsu.edu/~aluffi/archive/paper306.pdf — curl: (6) Could not resolve host: www.math.fsu.edu; HTTP status0; recovered=null.

Readiness: NOT READY at the source/URL gates. The scaffold and structural checks are complete; whole-run content policy also remains blocked by the two unrelated annihilator-item dependency errors recorded above. No other batch was edited to resolve them. Remaining operational action: run source-fetch stamping and URL recovery/liveness in the driver's network-capable environment, retaining this harvest and original_url provenance. The drift stage owns the design/prerequisite discrepancy. Alpha owns the coverage-decline review; no review verdict is claimed here.

Only the three batch6 artifacts were written in the repository. Temporary composed-plan and liveness outputs were kept under /tmp; canonical plan structure, published items and workflow state were not modified. Final scaffold/coverage byte hashes (integrity snapshots, not source-fetch or review stamps):

- research/frontier-33-batch-6.pages.json: SHA256 baf729987aca44dd1795939cd067f60ca2d86e4684a3f573081a3d97f4102a62
- research/frontier-33-batch-6.coverage.json: SHA256 cdb210a3ea3ce4fe507b0356dc62f62965ad4e7b009cba66730e52ff2db44b90

## Step-3 fix pass

Read `research/frontier-33-alpha-c-step3-scaffold-review.md`, the complete
HA-14 design section and its later Stacks-heading amendment, and the current
assigned artifacts. The review gives the two batch-6 findings by their affected
stable item ids (it assigns no separate finding-number labels); those ids are
preserved here rather than renumbered. The plan-spec/design prerequisite
discrepancy remains recorded above and is not changed in this batch.

- Finding `lem-localized-cone-triangles-satisfy-tr-one-through-tr-three`
  (the first batch-6 bullet under the review's `Direct repairs applied`):
  **accepted; already repaired on the current bytes.** Its explicit `deps`
  array in `frontier-33-batch-6.pages.json` names
  `lem-finite-roof-squares-and-composable-pairs-can-be-cleared`, and its
  matching notes record names that same lemma; neither authorized record still
  contains the stale “item 48” reference. The repair is mathematically
  appropriate: [Stacks Project §13.5, Proposition 13.5.6](https://stacks.math.columbia.edu/tag/05R1),
  proof of TR3, first clears the localized square via Categories Lemma 4.27.10,
  then completes it using TR3 and MS6 before forming the localized third map.
  This is the source-grounded role assigned to the finite roof-clearing
  prerequisite. Changed scaffold record: no additional mutation was needed in
  this pass; the existing manifest `deps` record and the item note are the
  applied repair.

- Finding `thm-the-canonical-pair-is-a-t-structure` (the second batch-6
  bullet under the review's `Direct repairs applied`): **accepted; already
  repaired on the current bytes.** Its explicit `deps` array and matching note
  name `thm-canonical-truncations-fit-a-distinguished-triangle`; neither keeps
  the stale “item 32” reference. In [Aluffi--Noohi, Lecture 3 §3](https://www.math.fsu.edu/~aluffi/archive/paper306.pdf),
  pp. 28--29, the canonical $t$-structure is defined by cohomology vanishing
  and axiom (t3) is supplied by
  $\tau^{\leq 0}X \to X \to \tau^{\geq 1}X \to \tau^{\leq 0}X[1]$;
  the same passage states the induced structures on $D^-$, $D^+$, and $D^b$.
  Thus the named truncation-triangle theorem, not an ordinal reference, is the
  required decomposition input. Changed scaffold record: no additional
  mutation was needed in this pass; the existing manifest `deps` record and
  the item note are the applied repair.

Current validation after the review confirmation:

- `node tools/manifest-deps.mjs research/frontier-33-batch-6.pages.json`:
  69 items, 0 normalizations, 0 errors; all 69 manifest objects have an
  explicit `deps` array.
- `node tools/coverage-checklist.mjs research/frontier-33-batch-6.coverage.json --require-destination`:
  190 harvested results, 0 errors. It retains the known informational
  `coverage-low-yield` warning (50/190 scaffolded), whose 14 declines were
  reviewed by Alpha; this pass neither deletes nor reclassifies a harvest row.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-6.coverage.json`:
  21/21 sources fetch-verified.
- `node tools/content-policy.mjs research/frontier-33-batch-*.pages.json --manifest-only`:
  923 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; the plan
  order is acyclic and consistent, with no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the populated
  page lists.

No plan, item, library page, workflow-state, or other-batch file was changed.

## Step-5 authoring

Dispatch `frontier-33`, batch 6. Required inputs and the group-c verdict/review are present. Preserve the reviewed 60+9-item route and stable IDs. All authored items/pages remain draft; no workflow state or plan edit is authorized. Source verification uses the browser because shell DNS cannot resolve the MIT host. No precheck, mathematical review, or publication stamp is inferred from the scaffold review. Checkpoints below report completed local work; final validator results will be appended separately.

### Authored checkpoint: `def-multiplicative-system-in-a-category`

Claim and conventions: Let $\mathcal C$ be a locally small category, using the definable-class convention of [[rem-category-theory-class-and-size-conventions]]. A **two-sided multiplicative system** $S$ is a class of arrows satisfying:

1. Every $1_X$ belongs to $S$, and composites of composable members belong to $S$.
2. Given $f:U\to Y$ and $t:V\to Y$ in $S$, there exist $a:W\to U$ in $S$ and $b:W\to V$ with $fa=tb$. Dually, given $f:X\to U$ and $s:X\to V$ in $S$, there exist $a:U\to W$ in $S$ and $b:V\to W$ with $af=bs$.
3. For parallel $f,g:X\to Y$, existence of $t:Y\to Z$ in $S$ with $tf=tg$ is equivalent to existence of $s:W\to X$ in $S$ with $fs=gs$.

For the locally small localization construction we additionally require either that $\mathcal C$ is small or that, for each $X$, a set $S_X$ of denominators into $X$ is supplied such that every $s:U\to X$ in $S$ admits $a:V\to U$ with $sa\in S_X$. The map $a$ need not lie in $S$. These size data are separate from the fraction axioms; local smallness of $\mathcal C$ alone is insufficient. Objects and arrows have the types prescribed in [[def-category]].

Dependencies: def-category, rem-category-theory-class-and-size-conventions.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.3.1–10.3.14, pp. 379–384.

Provenance: {"statement": "ai-altered", "proof": "not-applicable"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; definition only; no proof check claimed. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `def-localization-of-a-category-at-a-class-of-morphisms`

Claim and conventions: For a category $\mathcal C$ and a class $S$ of its arrows, a **localization** consists of a category $\mathcal L$ and a functor $Q:\mathcal C\to\mathcal L$ such that $Q(s)$ is invertible for every $s\in S$ and every functor $F:\mathcal C\to\mathcal E$ inverting $S$ has a unique factorization $F=\overline FQ$. We use the strict factorization convention for the same-object roof model. Natural transformations between such functors also descend uniquely; in the equivalence-invariant formulation, precomposition with $Q$ is an equivalence onto the functors inverting $S$. Functors and natural isomorphisms have the meanings of [[def-functor-and-contravariant-functor]] and [[def-natural-isomorphism]]. All category and functor quantifiers use the standing size convention.

Dependencies: def-functor-and-contravariant-functor, def-natural-isomorphism.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.3.1–10.3.14, pp. 379–384.

Provenance: {"statement": "ai-altered", "proof": "not-applicable"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; definition only; no proof check claimed. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `def-left-roof-representing-a-localized-morphism`

Claim and conventions: For a multiplicative system as in [[def-multiplicative-system-in-a-category]], a **left roof** from $X$ to $Y$ is the typed pair $(s,f)$ with $s:U\to X$ in $S$ and $f:U\to Y$. Its intended localized value is $Q(f)Q(s)^{-1}$. Thus the common vertex is the source of both arrows. This is a syntactic presentation; existence of the localized category is a subsequent theorem.

Dependencies: def-multiplicative-system-in-a-category.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.3.1–10.3.14, pp. 379–384.

Provenance: {"statement": "ai-altered", "proof": "not-applicable"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; definition only; no proof check claimed. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `def-common-refinement-equivalence-of-roofs`

Claim and conventions: Two left roofs $(s:U\to X,f:U\to Y)$ and $(t:U'\to X,g:U'\to Y)$ are **common-refinement equivalent** if there are $a:V\to U$ and $b:V\to U'$ such that $sa=tb\in S$ and $fa=gb$. Only the composite $sa=tb$ is required to belong to $S$; neither refinement leg is separately required to do so. Left roofs have the orientation fixed in [[def-left-roof-representing-a-localized-morphism]].

Dependencies: def-left-roof-representing-a-localized-morphism.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.3.1–10.3.14, pp. 379–384.

Provenance: {"statement": "ai-altered", "proof": "not-applicable"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; definition only; no proof check claimed. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `lem-roof-equivalence-is-an-equivalence-relation`

Claim and conventions: For any two objects $X,Y$ of a category with a two-sided multiplicative system $S$, common refinement is an equivalence relation on left roofs from $X$ to $Y$.

Dependencies: def-common-refinement-equivalence-of-roofs, def-multiplicative-system-in-a-category.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.3.1–10.3.14, pp. 379–384.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `lem-composition-of-roofs-is-well-defined`

Claim and conventions: Given roofs $(s:U\to X,f:U\to Y)$ and $(t:V\to Y,g:V\to Z)$, choose $a:W\to U$ in $S$, $b:W\to V$ with $fa=tb$. Their composite is the class of $(sa,gb)$. This is independent of both representatives and of the Ore square, is associative, and has identity roof $(1_X,1_X)$.

Dependencies: lem-roof-equivalence-is-an-equivalence-relation, def-multiplicative-system-in-a-category.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.3.1–10.3.14, pp. 379–384.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `thm-the-calculus-of-fractions-constructs-the-localization`

Claim and conventions: Under the smallness or supplied cofinal-denominator hypothesis of the multiplicative-system definition, roof classes with the preceding composition form a locally small localization $Q:\mathcal C\to S^{-1}\mathcal C$, with $Q(f)=[(1,f)]$. For parallel $f,g:X\to Y$, $Q(f)=Q(g)$ if and only if $fv=gv$ for some $v:W\to X$ in $S$. Every arrow also has a right-roof presentation $Q(t)^{-1}Q(h)$, with $h:X\to V$ and $t:Y\to V$ in $S$.

Dependencies: def-localization-of-a-category-at-a-class-of-morphisms, lem-composition-of-roofs-is-well-defined.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.3.1–10.3.14, pp. 379–384.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `prop-quasi-isomorphisms-contain-identities-and-are-closed-under-composition`

Claim and conventions: For complexes in an abelian category, identity maps are quasi-isomorphisms and composites of quasi-isomorphisms are quasi-isomorphisms. We use cochain indexing, so $H^n=H_{-n}$ under reindexing.

Dependencies: def-quasi-isomorphism.

Sources: https://stacks.math.columbia.edu/tag/05RR — 13.11.1–13.11.6.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `thm-two-out-of-three-for-quasi-isomorphisms`

Claim and conventions: For composable complex maps $f:X\to Y$ and $g:Y\to Z$, if any two of $f,g,gf$ are quasi-isomorphisms, then so is the third.

Dependencies: prop-quasi-isomorphisms-contain-identities-and-are-closed-under-composition.

Sources: https://stacks.math.columbia.edu/tag/05RR — 13.11.1–13.11.6.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category`

Claim and conventions: In the cochain homotopy category $K(\mathcal A)$ of an abelian category, quasi-isomorphisms form a two-sided multiplicative system. The same assertion holds in $K^-,K^+,K^b$. These are fraction axioms; local smallness of the localization requires the separate standing size data.

Dependencies: def-multiplicative-system-in-a-category, prop-quasi-isomorphisms-contain-identities-and-are-closed-under-composition, thm-two-out-of-three-for-quasi-isomorphisms, thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism, thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic, thm-the-homotopy-category-of-an-abelian-category-is-triangulated, thm-long-exact-hom-sequences-of-a-distinguished-triangle, thm-homology-is-a-homological-functor-on-the-homotopy-category.

Sources: https://stacks.math.columbia.edu/tag/05RR — 13.11.1–13.11.6.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `def-derived-category-of-an-abelian-category`

Claim and conventions: Let $\mathcal A$ be an abelian category. We use cochains as in [[def-cochain-complex-in-an-abelian-category]], with $X[k]^n=X^{n+k}$ and $d_{X[k]}^n=(-1)^kd_X^{n+k}$. Thus $H^n(X[k])=H^{n+k}(X)$. The cochain category $K(\mathcal A)$ is the reindexed published homotopy category. Put

$$D(\mathcal A)=K(\mathcal A)[\mathrm{qis}^{-1}],\qquad Q:K(\mathcal A)\longrightarrow D(\mathcal A).$$

Likewise $D^-,D^+,D^b$ initially mean the localizations of the termwise bounded variants of [[def-bounded-bounded-below-and-bounded-above-complex]]. Roof morphisms exist by [[lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category]] and [[thm-the-calculus-of-fractions-constructs-the-localization]] under its standing size hypothesis: a small category of complexes, or supplied small cofinal denominator families. Every assertion of Hom sets is under that hypothesis. In the bounded module models, supplied replacements will separately exhibit those Hom sets. No general local-smallness theorem for unbounded $D(\mathcal A)$ is asserted.

The cone convention is $\operatorname{Cone}(f)^n=Y^n\oplus X^{n+1}$, $d(y,x)=(d_Yy+fx,-d_Xx)$, and its triangle ends in $X[1]$.

Dependencies: thm-the-calculus-of-fractions-constructs-the-localization, lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category, def-cochain-complex-in-an-abelian-category, def-bounded-bounded-below-and-bounded-above-complex.

Sources: https://stacks.math.columbia.edu/tag/05RR — 13.11.1–13.11.6.

Provenance: {"statement": "ai-altered", "proof": "not-applicable"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; definition only; no proof check claimed. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms`

Claim and conventions: For every quasi-isomorphism $s:X\to Y$, $Q(s)$ is invertible in the derived category, with inverse represented by the roof $Y\xleftarrow sX\xrightarrow {1_X}X$.

Dependencies: def-derived-category-of-an-abelian-category.

Sources: https://stacks.math.columbia.edu/tag/05RR — 13.11.1–13.11.6.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `prop-cohomology-factors-through-the-derived-category`

Claim and conventions: For every integer $n$, $H^n:K(\mathcal A)\to\mathcal A$ factors uniquely through $Q:D(\mathcal A)$. More precisely, there is a unique $\overline H^n:D(\mathcal A)\to\mathcal A$ with $H^n=\overline H^nQ$, and $\overline H^n(s,f)=H^n(f)H^n(s)^{-1}$.

Dependencies: def-derived-category-of-an-abelian-category, thm-homology-is-a-homological-functor-on-the-homotopy-category.

Sources: https://stacks.math.columbia.edu/tag/05RR — 13.11.1–13.11.6.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `prop-a-complex-is-zero-in-the-derived-category-exactly-when-it-is-acyclic`

Claim and conventions: A complex $X$ becomes a zero object in $D(\mathcal A)$ if and only if $H^n(X)=0$ for every integer $n$.

Dependencies: prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms, prop-cohomology-factors-through-the-derived-category.

Sources: https://stacks.math.columbia.edu/tag/05RR — 13.11.1–13.11.6.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `lem-addition-of-roofs-makes-an-additive-localization`

Claim and conventions: For an additive category $\mathcal C$ with a two-sided multiplicative system and the standing localization size data, addition of left roofs by a common denominator makes $S^{-1}\mathcal C$ additive. Composition is bilinear, and $Q$ preserves zero objects and finite biproducts.

Dependencies: thm-the-calculus-of-fractions-constructs-the-localization, def-additive-category.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.3.11, p. 383.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `lem-finite-roof-squares-and-composable-pairs-can-be-cleared`

Claim and conventions: Let $f:X\to Y$ and $f':X'\to Y'$ be ordinary arrows, and let $\alpha:QX\to QX'$, $\beta:QY\to QY'$ satisfy $\beta Qf=Qf'\alpha$. There exist $f'':X''\to Y''$, $k:X\to X''$, $l:Y\to Y''$, and denominators $s:X'\to X''$, $t:Y'\to Y''$, such that $f''k=lf$, $f''s=tf'$, $\alpha=Q(s)^{-1}Q(k)$, $\beta=Q(t)^{-1}Q(l)$. Moreover two composable localized arrows and their composite can simultaneously be represented by ordinary arrows after denominator isomorphisms of the three objects.

Dependencies: lem-composition-of-roofs-is-well-defined, thm-the-calculus-of-fractions-constructs-the-localization.

Sources: https://stacks.math.columbia.edu/tag/05R1 — 13.5.5–13.5.6, including all TR1–TR4 proof paragraphs; https://stacks.math.columbia.edu/tag/05Q3 — Lemma 4.27.10, complete proof including footnote common denominator construction.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `lem-localized-cone-triangles-satisfy-tr-one-through-tr-three`

Claim and conventions: In $D(\mathcal A)$ let distinguished triangles mean triangles isomorphic to images of cone triangles in $K(\mathcal A)$. The cochain shift descends and these triangles satisfy TR1, signed TR2, and TR3.

Dependencies: def-derived-category-of-an-abelian-category, lem-addition-of-roofs-makes-an-additive-localization, lem-finite-roof-squares-and-composable-pairs-can-be-cleared, thm-the-homotopy-category-of-an-abelian-category-is-triangulated, thm-homology-is-a-homological-functor-on-the-homotopy-category, thm-five-lemma-in-an-abelian-category.

Sources: https://stacks.math.columbia.edu/tag/05R1 — 13.5.5–13.5.6, including all TR1–TR4 proof paragraphs.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `lem-localized-cone-triangles-satisfy-the-octahedral-axiom`

Claim and conventions: The distinguished localized cone triangles in $D(\mathcal A)$ satisfy TR4, the octahedral axiom, with the cochain shift and connecting signs inherited from $K(\mathcal A)$.

Dependencies: lem-localized-cone-triangles-satisfy-tr-one-through-tr-three, lem-finite-roof-squares-and-composable-pairs-can-be-cleared, prop-octahedral-gives-a-triangle-relating-the-cones-of-f-g-and-gf, thm-the-homotopy-category-of-an-abelian-category-is-triangulated.

Sources: https://stacks.math.columbia.edu/tag/05R1 — 13.5.5–13.5.6, including all TR1–TR4 proof paragraphs.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `thm-the-derived-category-inherits-a-triangulated-structure`

Claim and conventions: The derived category, with shift $[1]$ and distinguished triangles the isomorphic images of cone triangles, is triangulated. The localization functor $Q$ is exact. Every such triangle gives a long exact cohomology sequence $\cdots\to H^n(X)\to H^n(Y)\to H^n(Z)\to H^{n+1}(X)\to\cdots$.

Dependencies: lem-localized-cone-triangles-satisfy-tr-one-through-tr-three, lem-localized-cone-triangles-satisfy-the-octahedral-axiom, def-exact-functor-between-triangulated-categories.

Sources: https://stacks.math.columbia.edu/tag/05R1 — 13.5.5–13.5.6, including all TR1–TR4 proof paragraphs.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `thm-the-derived-category-is-the-verdier-quotient-by-acyclic-complexes`

Claim and conventions: Let $K_{\mathrm{ac}}(\mathcal A)$ be the thick full subcategory of acyclic complexes. Define its Verdier quotient here by inverting maps whose cones are acyclic. Under the standing size assumption this quotient is $D(\mathcal A)$. An exact functor $F:K(\mathcal A)\to\mathcal T$ annihilating acyclic complexes factors uniquely through an exact functor $\overline F:D(\mathcal A)\to\mathcal T$; conversely any such factorization annihilates acyclics. The kernel of $Q$ is exactly $K_{\mathrm{ac}}(\mathcal A)$.

Dependencies: thm-the-derived-category-inherits-a-triangulated-structure, prop-a-complex-is-zero-in-the-derived-category-exactly-when-it-is-acyclic, thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic, prop-the-full-subcategory-of-acyclic-complexes-is-thick-in-the-homotopy-category, thm-long-exact-hom-sequences-of-a-distinguished-triangle.

Sources: https://stacks.math.columbia.edu/tag/05RI — Definition 13.6.7, specialized to acyclic complexes.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `def-homotopically-projective-bounded-above-complex`

Claim and conventions: For cochain complexes put $\underline{\operatorname{Hom}}^r(P,A)=\prod_n\operatorname{Hom}_{\mathcal A}(P^n,A^{n+r})$, with $(du)^n=d_Au^n-(-1)^ru^{n+1}d_P$. This is the reindexing of [[def-hom-complex-of-chain-complexes]]. A complex $P$ is **homotopically projective**, or **K-projective**, if $\operatorname{Hom}_K(P,A[r])=0$ for every acyclic complex $A$ and every integer $r$. Equivalently $\underline{\operatorname{Hom}}(P,A)$ is acyclic: the degree-zero Hom/homotopy identification of [[thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex]], applied after shifting $A$, identifies these groups with its cohomology (a boundary differs only by the invertible sign $(-1)^r$).

The bounded-above case additionally requires $P^n=0$ for all sufficiently large $n$, as in [[def-bounded-bounded-below-and-bounded-above-complex]]. Boundedness is not part of the general K-projective predicate. Nor is termwise projectivity: a contractible complex has zero Hom from it in $K$ and is K-projective irrespective of its terms.

Dependencies: def-hom-complex-of-chain-complexes, thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex, def-bounded-bounded-below-and-bounded-above-complex.

Sources: https://arxiv.org/pdf/1206.6632v1 — 6.5.1 and 13.1 (K-injective definition); cochain convention.

Provenance: {"statement": "ai-altered", "proof": "not-applicable"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; definition only; no proof check claimed. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `def-homotopically-injective-bounded-below-complex`

Claim and conventions: A cochain complex $I$ is **homotopically injective**, or **K-injective**, if $\operatorname{Hom}_K(A,I[r])=0$ for every acyclic cochain complex $A$ and every integer $r$. Equivalently, $\underline{\operatorname{Hom}}(A,I)$ is acyclic. This uses the Hom complex and shifted Hom identification fixed in [[def-homotopically-projective-bounded-above-complex]]. A **bounded-below K-injective complex** additionally has $I^n=0$ for all sufficiently negative $n$. The K-injective property itself neither assumes boundedness nor means termwise injectivity.

Dependencies: def-homotopically-projective-bounded-above-complex.

Sources: https://arxiv.org/pdf/1206.6632v1 — 6.5.1 and 13.1 (K-injective definition); cochain convention.

Provenance: {"statement": "ai-altered", "proof": "not-applicable"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; definition only; no proof check claimed. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `thm-a-bounded-above-complex-of-projectives-is-homotopically-projective`

Claim and conventions: A bounded-above cochain complex $P$ of projective objects is K-projective. Assume dependent choice for the countable successive homotopy choices, or supply those lifts as data.

Dependencies: def-homotopically-projective-bounded-above-complex, def-projective-object, def-dependent-choice.

Sources: https://stacks.math.columbia.edu/tag/0643 — 13.19.3–13.19.8; W 10.4.8 for the equivalence.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `thm-a-bounded-below-complex-of-injectives-is-homotopically-injective`

Claim and conventions: A bounded-below cochain complex $I$ of injective objects is K-injective. Assume dependent choice for the countable successive homotopy extensions, or supply those extensions as data.

Dependencies: def-homotopically-injective-bounded-below-complex, def-injective-object, def-dependent-choice.

Sources: https://stacks.math.columbia.edu/tag/013G — 13.18.3–13.18.8; W 10.4.8 for the equivalence.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `prop-morphisms-from-a-homotopically-projective-complex-need-no-roof`

Claim and conventions: For a K-projective complex $P$ and any complex $X$, $Q:\operatorname{Hom}_K(P,X)\to\operatorname{Hom}_D(P,X)$ is bijective, under the standing localization size convention.

Dependencies: def-homotopically-projective-bounded-above-complex, def-derived-category-of-an-abelian-category, thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic, thm-long-exact-hom-sequences-of-a-distinguished-triangle.

Sources: https://stacks.math.columbia.edu/tag/0643 — 13.19.3–13.19.8; W 10.4.8 for the equivalence.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `prop-morphisms-into-a-homotopically-injective-complex-need-no-roof`

Claim and conventions: For a K-injective complex $I$ and any complex $X$, $Q:\operatorname{Hom}_K(X,I)\to\operatorname{Hom}_D(X,I)$ is bijective. Moreover, if $s:I\to J$ is a quasi-isomorphism, its cone triangle is split in $K$: $J\cong I\oplus\operatorname{Cone}(s)$ with $s$ corresponding to the inclusion.

Dependencies: def-homotopically-injective-bounded-below-complex, def-derived-category-of-an-abelian-category, thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic, thm-long-exact-hom-sequences-of-a-distinguished-triangle.

Sources: https://stacks.math.columbia.edu/tag/013G — 13.18.3–13.18.8; W 10.4.8 for the equivalence.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `def-brutal-truncation-of-a-complex`

Claim and conventions: For a cochain complex $X$ and $n\in\mathbb Z$, the **brutal truncations** are $(\sigma^{\leq n}X)^i=X^i$ for $i\leq n$ and zero otherwise, and $(\sigma^{\geq n}X)^i=X^i$ for $i\geq n$ and zero otherwise. Retain the differentials between retained terms and use zero for all other differentials. The former is a quotient $X\to\sigma^{\leq n}X$; the latter is a subcomplex $\sigma^{\geq n}X\to X$. These are functorial constructions of cochain complexes as in [[def-cochain-complex-in-an-abelian-category]]; no kernel or cokernel correction is made at the cut.

Dependencies: def-cochain-complex-in-an-abelian-category.

Sources: https://stacks.math.columbia.edu/tag/0118 — 12.15, all four chain and four cochain truncations.

Provenance: {"statement": "ai-altered", "proof": "not-applicable"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; definition only; no proof check claimed. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `def-canonical-truncation-of-a-complex`

Claim and conventions: For a cochain complex $X$, define the **canonical truncations** by

$$ (\tau^{\leq n}X)^i=\begin{cases}X^i&i<n,\\\ker d_X^n&i=n,\\0&i>n,\end{cases}\qquad (\tau^{\geq n}X)^i=\begin{cases}0&i<n,\\\operatorname{coker}d_X^{n-1}&i=n,\\X^i&i>n.\end{cases} $$

The differential into $\ker d_X^n$ is the factorization of $d_X^{n-1}$; the differential out of $\operatorname{coker}d_X^{n-1}$ is induced by $d_X^n$. All other retained differentials are those of $X$. There are natural maps $\tau^{\leq n}X\to X\to\tau^{\geq n}X$. Unlike [[def-brutal-truncation-of-a-complex]], these constructions correct the boundary using the cycle and boundary objects of [[def-cohomology-object-of-a-cochain-complex]].

Dependencies: def-brutal-truncation-of-a-complex, def-cohomology-object-of-a-cochain-complex.

Sources: https://stacks.math.columbia.edu/tag/0118 — 12.15, all four chain and four cochain truncations.

Provenance: {"statement": "ai-altered", "proof": "not-applicable"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; definition only; no proof check claimed. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology`

Claim and conventions: Canonical truncations are functorial on complexes and on the homotopy category, with $H^i(\tau^{\leq n}X)=H^i(X)$ for $i\leq n$ and zero for $i>n$, and $H^i(\tau^{\geq n}X)=H^i(X)$ for $i\geq n$ and zero for $i<n$. They preserve quasi-isomorphisms and descend to functors on the derived category.

Dependencies: def-canonical-truncation-of-a-complex.

Sources: https://stacks.math.columbia.edu/tag/0118 — 12.15, all four chain and four cochain truncations.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `thm-canonical-truncations-fit-a-distinguished-triangle`

Claim and conventions: Every short exact sequence $0\to A\xrightarrow iB\xrightarrow qC\to0$ of cochain complexes gives a natural distinguished triangle $A\to B\to C\to A[1]$ in $D(\mathcal A)$. In particular, for every integer $n$ there are canonical distinguished triangles

$$\tau^{\leq n}X\to X\to\tau^{\geq n+1}X\to(\tau^{\leq n}X)[1],$$

$$\tau^{\leq n}X\to\tau^{\leq n+1}X\to H^{n+1}(X)[-n-1]\to(\tau^{\leq n}X)[1],$$

$$H^n(X)[-n]\to\tau^{\geq n}X\to\tau^{\geq n+1}X\to H^n(X)[-n+1].$$

Dependencies: lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology, thm-the-derived-category-inherits-a-triangulated-structure, thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic, thm-long-exact-sequence-in-homology.

Sources: https://stacks.math.columbia.edu/tag/08J5 — Remark 13.12.4 and its three triangles.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `prop-bounded-derived-localizations-embed-fully-faithfully`

Claim and conventions: The canonical functors $D^-(\mathcal A),D^+(\mathcal A),D^b(\mathcal A)\to D(\mathcal A)$ are fully faithful and exact. Their essential images consist exactly of complexes with cohomology respectively bounded above, bounded below, or bounded on both sides.

Dependencies: lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology, def-derived-category-of-an-abelian-category, thm-the-derived-category-inherits-a-triangulated-structure.

Sources: https://stacks.math.columbia.edu/tag/05RR — 13.11.1–13.11.6.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `lem-bounded-above-complexes-admit-projective-replacements`

Claim and conventions: If $\mathcal A$ has enough projectives and $X^n=0$ for $n>b$, there is a termwise epic quasi-isomorphism $p:P\to X$ with each $P^n$ projective and $P^n=0$ for $n>b$. Assume DC for the successive objectwise choices, or supply the successive projective epimorphisms. If only $H^n(X)=0$ for $n>b$, a quasi-isomorphism with this upper bound still exists, without the termwise-epic assertion.

Dependencies: lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology, def-a-category-with-enough-projectives-and-with-enough-injectives, thm-the-pullback-of-an-epimorphism-is-an-epimorphism, def-dependent-choice.

Sources: https://stacks.math.columbia.edu/tag/05T7 — Lemma 13.15.4, full descending induction.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `lem-bounded-below-complexes-admit-injective-replacements`

Claim and conventions: If $\mathcal A$ has enough injectives and $X^n=0$ for $n<a$, there is a termwise monic quasi-isomorphism $j:X\to I$ with each $I^n$ injective and $I^n=0$ for $n<a$. Assume DC for the successive objectwise choices, or supply the successive injective monomorphisms. If only $H^n(X)=0$ for $n<a$, a quasi-isomorphism to such an $I$ still exists, without the termwise-monic assertion.

Dependencies: lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology, def-a-category-with-enough-projectives-and-with-enough-injectives, cor-the-pushout-of-a-monomorphism-is-a-monomorphism, def-dependent-choice.

Sources: https://stacks.math.columbia.edu/tag/05T6 — Lemma 13.15.5, dual to 13.15.4.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `thm-projective-complexes-model-the-bounded-above-derived-category`

Claim and conventions: With supplied bounded-above projective replacements $p_X:P_X\to X$ (and DC or supplied homotopy lifts), the functor $K^-(\operatorname{Proj}\mathcal A)\to D^-(\mathcal A)$ is an equivalence of triangulated categories with a quasi-inverse determined by those data. In particular its Hom collections are sets whenever $\mathcal A$ is locally small.

Dependencies: thm-a-bounded-above-complex-of-projectives-is-homotopically-projective, prop-morphisms-from-a-homotopically-projective-complex-need-no-roof, lem-bounded-above-complexes-admit-projective-replacements, prop-bounded-derived-localizations-embed-fully-faithfully.

Sources: https://stacks.math.columbia.edu/tag/0643 — 13.19.3–13.19.8; W 10.4.8 for the equivalence.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `thm-injective-complexes-model-the-bounded-below-derived-category`

Claim and conventions: With supplied bounded-below injective replacements $j_X:X\to I_X$ (and DC or supplied homotopy extensions), $K^+(\operatorname{Inj}\mathcal A)\to D^+(\mathcal A)$ is an equivalence of triangulated categories. For a bounded-below complex $I$, K-injectivity can be tested using only bounded-below acyclic inputs.

Dependencies: thm-a-bounded-below-complex-of-injectives-is-homotopically-injective, prop-morphisms-into-a-homotopically-injective-complex-need-no-roof, lem-bounded-below-complexes-admit-injective-replacements, prop-bounded-derived-localizations-embed-fully-faithfully.

Sources: https://stacks.math.columbia.edu/tag/013G — 13.18.3–13.18.8; W 10.4.8 for the equivalence.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `thm-ext-is-hom-in-the-derived-category`

Claim and conventions: Let $M,N$ be objects of an abelian category and $n\geq0$. With enough projectives and supplied projective resolutions, or with enough injectives and supplied injective resolutions, there is a natural isomorphism $\operatorname{Ext}^n(M,N)\cong\operatorname{Hom}_{D(\mathcal A)}(M[0],N[n])$. The Ext group is the classical construction relative to the supplied data. Either resolution hypothesis suffices; when both apply the two comparisons agree through the mixed Hom complex.

Dependencies: prop-morphisms-from-a-homotopically-projective-complex-need-no-roof, prop-morphisms-into-a-homotopically-injective-complex-need-no-roof, thm-projective-complexes-model-the-bounded-above-derived-category, thm-injective-complexes-model-the-bounded-below-derived-category, thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex, def-ext-via-a-projective-resolution-of-the-first-variable, def-ext-via-an-injective-resolution-of-the-second-variable.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.4.7 and 10.7.5, pp. 388, 400.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `prop-yoneda-product-is-composition-in-the-derived-category`

Claim and conventions: Assume DC, set-sized extension classes, and enough projectives with supplied resolutions, or dually enough injectives with supplied resolutions. The Yoneda-class bijection is $\operatorname{YExt}^n(M,N)\cong\operatorname{Hom}_D(M,N[n])$ for $n\geq1$. If $\alpha\in\operatorname{YExt}^p(M,L)$ and $\beta\in\operatorname{YExt}^q(L,N)$, their splice corresponds to $\beta[p]\alpha:M\to N[p+q]$; degree-zero maps act by pullback and pushout, with identity units.

In particular, for $e:0\to A\to Z\to B\to0$ and $e':0\to B\xrightarrow u Z'\to C\to0$, the splice is zero in $\operatorname{Ext}^2(C,A)$ if and only if there is an extension $0\to A\to W\to Z'\to0$ whose pullback along $u$ is $e$. Equivalently there is a commutative diagram of these two rows, with vertical maps $1_A,Z\to W,u$, whose middle and right columns are $0\to Z\to W\to C\to0$ and $0\to B\to Z'\to C\to0$.

Dependencies: thm-ext-is-hom-in-the-derived-category, thm-canonical-truncations-fit-a-distinguished-triangle, prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product, thm-higher-yoneda-ext-agrees-with-derived-ext, thm-long-exact-hom-sequences-of-a-distinguished-triangle.

Sources: https://stacks.math.columbia.edu/tag/06XP — 13.27.4–13.27.6 and following composition paragraphs.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `def-canonical-t-structure-on-a-derived-category`

Claim and conventions: For a triangulated category $T$ with shift $[1]$, a **t-structure** is a pair of strictly full subcategories $(T^{\leq0},T^{\geq0})$ such that $T^{\leq0}[1]\subseteq T^{\leq0}$, $T^{\geq0}[-1]\subseteq T^{\geq0}$, $\operatorname{Hom}_T(T^{\leq0},T^{\geq1})=0$, and every $X$ has a distinguished triangle $A\to X\to B\to A[1]$ with $A\in T^{\leq0}$ and $B\in T^{\geq1}$. Here $T^{\geq1}=T^{\geq0}[-1]$ and $T^{\leq n}=T^{\leq0}[-n]$, $T^{\geq n}=T^{\geq0}[-n]$. Its **heart** is $T^{\leq0}\cap T^{\geq0}$.

For the triangulation of [[thm-the-derived-category-inherits-a-triangulated-structure]], the canonical candidate is $D^{\leq0}=\{X:H^i(X)=0\text{ for }i>0\}$ and $D^{\geq0}=\{X:H^i(X)=0\text{ for }i<0\}$, using [[prop-cohomology-factors-through-the-derived-category]].

Dependencies: thm-the-derived-category-inherits-a-triangulated-structure, prop-cohomology-factors-through-the-derived-category.

Sources: https://www.math.fsu.edu/~aluffi/archive/paper306.pdf — Lecture 3, section 3, definition and Main example, pp. 28–29.

Provenance: {"statement": "ai-altered", "proof": "not-applicable"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; definition only; no proof check claimed. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `thm-the-canonical-pair-is-a-t-structure`

Claim and conventions: The canonical pair is a t-structure on $D(\mathcal A)$ and on each of $D^-,D^+,D^b$ by intersection. More generally if $H^i(X)=0$ for $i>a$ and $H^j(Y)=0$ for $j<b$, then $\operatorname{Hom}_D(X,Y[n])=0$ for $n<b-a$, and naturally $\operatorname{Hom}_D(X,Y[b-a])\cong\operatorname{Hom}_{\mathcal A}(H^aX,H^bY)$.

Dependencies: def-canonical-t-structure-on-a-derived-category, lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology, thm-canonical-truncations-fit-a-distinguished-triangle, prop-bounded-derived-localizations-embed-fully-faithfully.

Sources: https://www.math.fsu.edu/~aluffi/archive/paper306.pdf — Lecture 3, section 3, definition and Main example, pp. 28–29.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `thm-the-heart-of-the-canonical-t-structure-is-equivalent-to-the-original-abelian-category`

Claim and conventions: The degree-zero functor $\mathcal A\to D(\mathcal A)$ identifies $\mathcal A$ with the heart of the canonical t-structure. The inverse equivalence is $H^0$.

Dependencies: thm-the-canonical-pair-is-a-t-structure, lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology.

Sources: https://arxiv.org/pdf/1206.6632v1 — Proposition 12.4.1, p. 64.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `def-left-total-derived-functor-on-the-bounded-above-derived-category`

Claim and conventions: Let $F:\mathcal A\to\mathcal B$ be additive. Supply bounded-above projective replacements $p_X:P_X\to X$ and the hypotheses for [[thm-projective-complexes-model-the-bounded-above-derived-category]]. Write $T=Q_{\mathcal B}K(F)$. The **left total derived functor** is $LF:D^-(\mathcal A)\to D^-(\mathcal B)$ with $LF(X)=Q_{\mathcal B}F(P_X)$, its maps obtained from the unique homotopy classes between projective models. Its augmentation is $\epsilon:LFQ_{\mathcal A}\to T$, induced by $F(p_X)$.

The defining universal property is terminal: for every functor $G:D^-(\mathcal A)\to D^-(\mathcal B)$ and natural $\gamma:GQ_{\mathcal A}\to T$, there is a unique natural $\mu:G\to LF$ with $\epsilon\circ(\mu Q_{\mathcal A})=\gamma$. Additive has the meaning of [[def-additive-functor]].

Dependencies: thm-projective-complexes-model-the-bounded-above-derived-category, def-additive-functor.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.5.1–10.5.8, pp. 391–393; restrict to supplied replacement data.

Provenance: {"statement": "ai-altered", "proof": "not-applicable"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; definition only; no proof check claimed. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `lem-left-total-derived-functor-is-independent-of-the-supplied-projective-replacement-up-to-unique-natural-isomorphism`

Claim and conventions: Two supplied projective replacement systems for the same additive $F$ give a natural isomorphism of left total derived functors, unique among natural comparisons commuting with the augmentations. This is not uniqueness of unrestricted natural automorphisms.

Dependencies: def-left-total-derived-functor-on-the-bounded-above-derived-category, prop-morphisms-from-a-homotopically-projective-complex-need-no-roof.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.5.1–10.5.8, pp. 391–393; restrict to supplied replacement data.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `thm-existence-of-the-bounded-above-left-total-derived-functor`

Claim and conventions: For additive $F:\mathcal A\to\mathcal B$ and supplied bounded-above projective replacements with the model-equivalence hypotheses, the replacement construction is a functor $LF:D^-(\mathcal A)\to D^-(\mathcal B)$ with the terminal universal property in its definition. Right exactness of $F$ is not needed for existence.

Dependencies: def-left-total-derived-functor-on-the-bounded-above-derived-category, lem-left-total-derived-functor-is-independent-of-the-supplied-projective-replacement-up-to-unique-natural-isomorphism, prop-an-additive-functor-on-abelian-categories-induces-an-exact-functor-on-homotopy-categories.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.5.1–10.5.8, pp. 391–393; restrict to supplied replacement data.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `def-right-total-derived-functor-on-the-bounded-below-derived-category`

Claim and conventions: Let $F:\mathcal A\to\mathcal B$ be additive and supply bounded-below injective replacements $j_X:X\to I_X$ under the hypotheses of [[thm-injective-complexes-model-the-bounded-below-derived-category]]. Put $T=Q_{\mathcal B}K(F)$. The **right total derived functor** is $RF:D^+(\mathcal A)\to D^+(\mathcal B)$ with $RF(X)=Q_{\mathcal B}F(I_X)$ and maps induced by the injective model equivalence. It has coaugmentation $\eta:T\to RFQ_{\mathcal A}$ induced by $F(j_X)$.

Its universal property is initial: for every $G:D^+(\mathcal A)\to D^+(\mathcal B)$ and natural $\gamma:T\to GQ_{\mathcal A}$ there is a unique natural $\nu:RF\to G$ such that $(\nu Q_{\mathcal A})\eta=\gamma$. Here $F$ is additive in the sense of [[def-additive-functor]].

Dependencies: thm-injective-complexes-model-the-bounded-below-derived-category, def-additive-functor.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.5.1–10.5.8, pp. 391–393; restrict to supplied replacement data.

Provenance: {"statement": "ai-altered", "proof": "not-applicable"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; definition only; no proof check claimed. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `thm-existence-of-the-bounded-below-right-total-derived-functor`

Claim and conventions: The supplied injective replacement construction for additive $F$ gives $RF:D^+(\mathcal A)\to D^+(\mathcal B)$ with its initial universal property. It is independent of the replacement system up to unique natural isomorphism compatible with coaugmentations. Before localization in the target it factors through $K^+(\mathcal B)$; its values agree with these models under the bounded embedding into $D(\mathcal B)$.

Dependencies: def-right-total-derived-functor-on-the-bounded-below-derived-category, prop-morphisms-into-a-homotopically-injective-complex-need-no-roof, prop-an-additive-functor-on-abelian-categories-induces-an-exact-functor-on-homotopy-categories.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.5.1–10.5.8, pp. 391–393; restrict to supplied replacement data.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `prop-total-derived-functors-send-distinguished-triangles-to-distinguished-triangles`

Claim and conventions: The bounded total derived functors $LF$ and $RF$ are exact functors of triangulated categories, with shift comparisons transported through their model equivalences. If $F$ is exact as a functor of abelian categories, its termwise functor already descends to the derived category and the respective derived augmentation or coaugmentation is an isomorphism.

Dependencies: thm-existence-of-the-bounded-above-left-total-derived-functor, thm-existence-of-the-bounded-below-right-total-derived-functor, thm-the-derived-category-inherits-a-triangulated-structure.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.5.1–10.5.8, pp. 391–393; restrict to supplied replacement data.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `prop-classical-derived-functors-are-the-cohomology-objects-of-the-total-derived-functor`

Claim and conventions: For additive $F$ with the supplied bounded projective or injective replacements, $H^{-n}(LF(M[0]))=L_nF(M)$ and $H^n(RF(M[0]))=R^nF(M)$ for $n\geq0$, relative to the same resolution data, naturally and compatibly with connecting maps. The left comparison with $F$ in degree zero is an isomorphism when $F$ is right exact; the right comparison is an isomorphism when $F$ is left exact. Conversely such a natural degree-zero comparison isomorphism forces that side-exactness.

The functor $LF$ preserves upper cohomological bounds and $RF$ preserves lower bounds. The truncation maps induce $H^iLF(X)\cong H^iLF(\tau^{\geq a}X)$ for $i\geq a$, and $H^iRF(\tau^{\leq a}X)\cong H^iRF(X)$ for $i\leq a$. On objects of $\mathcal A$, $H^0LF$ is right exact and $H^0RF$ is left exact.

For left exact $F$, call $M$ right $F$-acyclic when $F(M)[0]\to RF(M[0])$ is invertible. This holds iff $R^nF(M)=0$ for all $n>0$. In $0\to A\to B\to C\to0$, right acyclicity of $(A,C)$ implies that of $B$; that of $(A,B)$ implies that of $C$; that of $(B,C)$ together with epic $F(B)\to F(C)$ implies that of $A$. In each case $0\to F(A)\to F(B)\to F(C)\to0$ is exact. Dually, for right exact $F$, left acyclicity is equivalent to $L_nF(M)=0$ for $n>0$: the pairs $(A,C)$ and $(B,C)$ imply respectively $B$ and $A$, while $(A,B)$ implies $C$ provided $F(A)\to F(B)$ is monic, again with the resulting short exact sequence. Under DC, both supplied object-resolution data, and the respective enough-projective/right-exact or enough-injective/left-exact hypotheses, these are the classical universal delta functors.

Dependencies: thm-existence-of-the-bounded-above-left-total-derived-functor, thm-existence-of-the-bounded-below-right-total-derived-functor, def-left-derived-object-relative-to-projective-resolution-data, def-right-derived-object-relative-to-injective-resolution-data, thm-derived-functors-are-universal-delta-functors, prop-total-derived-functors-send-distinguished-triangles-to-distinguished-triangles.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.5.1–10.5.8, pp. 391–393; restrict to supplied replacement data.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms`

Claim and conventions: Let $R$ be a ring. Tensoring a bounded-above acyclic left $R$-complex $A$ with a bounded-above complex $P$ of flat right $R$-modules gives an acyclic total complex. The assertion also holds with the sides exchanged. Thus a bounded-above flat complex preserves quasi-isomorphisms between bounded-above complexes in the other variable. The common two-flat-replacement model gives the balancing isomorphism whenever the replacement maps are supplied.

Dependencies: def-tensor-product-total-complex-of-chain-complexes, def-left-and-right-flat-modules-over-an-arbitrary-ring, thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic, lem-acyclic-assembly-by-exact-columns, lem-acyclic-assembly-by-exact-rows.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.6.1–10.6.4 and Exercise 10.6.1, p. 395; elementary finite-diagonal replacement for spectral sequence proof.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `def-derived-tensor-product-in-the-bounded-above-setting`

Claim and conventions: For a bounded-above right $R$-complex $N$ and left $R$-complex $M$, supply bounded-above projective replacements $P_N\to N$ and $P_M\to M$, and the homotopy lifts required for their model functors. The **derived tensor product** $N\otimes_R^{\mathbf L}M\in D^-(\mathbf{Ab})$ is the object represented by $\operatorname{Tot}(P_N\otimes_RM)$, equivalently $\operatorname{Tot}(N\otimes_RP_M)$. If existence of enough module projectives is invoked, assume AC as in [[thm-module-categories-have-enough-projectives]].

Use the cochain reindexing of [[def-tensor-product-total-complex-of-chain-complexes]]. Projectives are flat by [[lem-projective-modules-are-flat-over-an-arbitrary-ring]]. Consequently [[lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms]] gives the natural quasi-isomorphisms $P_N\otimes_RP_M\to P_N\otimes_RM$ and $P_N\otimes_RP_M\to N\otimes_RP_M$. This fixes the balancing identification. Homotopy comparison maps between projective replacements, as in [[thm-existence-of-the-bounded-above-left-total-derived-functor]], induce tensor maps; chain homotopies induce total homotopies with the same Koszul rule. Quasi-isomorphisms in the other variable are inverted by the flat-tensor lemma, so localization gives a bifunctor $D^-(\operatorname{Mod}\!\text{-}R)\times D^-(R\!\text{-}\operatorname{Mod})\to D^-(\mathbf{Ab})$, independent of the supplied representatives up to these comparisons.

Dependencies: thm-existence-of-the-bounded-above-left-total-derived-functor, lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms, def-tensor-product-total-complex-of-chain-complexes, thm-module-categories-have-enough-projectives, lem-projective-modules-are-flat-over-an-arbitrary-ring.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.6.1–10.6.4 and Exercise 10.6.1, p. 395; elementary finite-diagonal replacement for spectral sequence proof.

Provenance: {"statement": "ai-altered", "proof": "not-applicable"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; definition only; no proof check claimed. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `prop-homology-of-the-derived-tensor-product-is-tor`

Claim and conventions: For a right $R$-module $N$, a left $R$-module $M$, and $n\geq0$, with supplied projective resolutions, $H^{-n}(N[0]\otimes_R^{\mathbf L}M[0])\cong\operatorname{Tor}_n^R(N,M)$ naturally in both modules.

Dependencies: def-derived-tensor-product-in-the-bounded-above-setting, def-balanced-tor-bifunctor.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.6.1–10.6.4 and Exercise 10.6.1, p. 395; elementary finite-diagonal replacement for spectral sequence proof.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `def-derived-hom-in-the-bounded-setting`

Claim and conventions: Let $M\in D^-(\mathcal A)$ and $N\in D^+(\mathcal A)$, with termwise bounded representatives. With supplied bounded-above projective models under [[thm-projective-complexes-model-the-bounded-above-derived-category]], define $\mathbf R\operatorname{Hom}(M,N)=Q\underline{\operatorname{Hom}}(P_M,N)$. Alternatively, with supplied bounded-below injective models under [[thm-injective-complexes-model-the-bounded-below-derived-category]], use $Q\underline{\operatorname{Hom}}(M,I_N)$. The target is $D^+(\mathbf{Ab})$.

Here the cochain form of [[def-hom-complex-of-chain-complexes]] has degree-$r$ term $\prod_i\operatorname{Hom}(M^i,N^{i+r})$ and differential $du=d_Nu-(-1)^ru d_M$. If $M^i=0$ above $b$ and $N^j=0$ below $a$, nonzero factors require $a-r\leq i\leq b$, a finite interval, and the whole term is zero for $r<a-b$.

This construction is a bifunctor on the declared derived categories. Indeed homotopies in either variable induce Hom-complex homotopies. Replacing a projective model by a homotopy equivalent one therefore changes its Hom complex by a homotopy equivalence. A quasi-isomorphism in the target has acyclic cone, whose Hom from $P_M$ is acyclic by K-projectivity; hence the Hom map is a quasi-isomorphism. This also follows degree by degree from [[prop-morphisms-from-a-homotopically-projective-complex-need-no-roof]], which identifies each Hom-complex cohomology with the corresponding derived Hom. The injective argument uses [[prop-morphisms-into-a-homotopically-injective-complex-need-no-roof]] and reverses the roles of source and target. Thus both variables descend through localization. When both systems exist, the quasi-isomorphisms $\underline{\operatorname{Hom}}(P_M,N)\to\underline{\operatorname{Hom}}(P_M,I_N)\leftarrow\underline{\operatorname{Hom}}(M,I_N)$ give their natural identification. Either one-sided resolution hypothesis suffices.

Dependencies: thm-projective-complexes-model-the-bounded-above-derived-category, thm-injective-complexes-model-the-bounded-below-derived-category, prop-morphisms-from-a-homotopically-projective-complex-need-no-roof, prop-morphisms-into-a-homotopically-injective-complex-need-no-roof, def-hom-complex-of-chain-complexes.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.7.2–10.7.5 and Exercise 10.7.1, pp. 399–400.

Provenance: {"statement": "ai-altered", "proof": "not-applicable"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; definition only; no proof check claimed. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `prop-cohomology-of-derived-hom-is-ext`

Claim and conventions: In the mixed bounded range of derived Hom, $H^n\mathbf R\operatorname{Hom}(M,N)\cong\operatorname{Hom}_{D(\mathcal A)}(M,N[n])$ for every integer $n$. For objects $M,N$ in degree zero and $n\geq0$ this is classical $\operatorname{Ext}^n(M,N)$ under the supplied one-sided resolution hypothesis.

Dependencies: def-derived-hom-in-the-bounded-setting, thm-ext-is-hom-in-the-derived-category.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.7.2–10.7.5 and Exercise 10.7.1, pp. 399–400.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `prop-bounded-derived-complexes-split-when-higher-ext-between-cohomologies-vanishes`

Claim and conventions: Assume the standing supplied projective or injective resolution hypotheses and let $X$ have cohomology in a finite interval. If $\operatorname{Ext}^p(H^iX,H^jX)=0$ for every $p\geq2$ and $i>j$, then $X\cong\bigoplus_iH^i(X)[-i]$, a finite sum. The isomorphism is not asserted canonical. If $\operatorname{Ext}^2(M,N)=0$ for every pair, all cohomologically bounded complexes split this way; for this corollary impose also DC and set-sized extension classes as in the Yoneda comparison.

Dependencies: thm-ext-is-hom-in-the-derived-category, thm-canonical-truncations-fit-a-distinguished-triangle, prop-yoneda-product-is-composition-in-the-derived-category, thm-long-exact-hom-sequences-of-a-distinguished-triangle, prop-zero-and-split-triangles-are-distinguished, prop-two-isomorphism-components-of-a-morphism-of-triangles-force-the-third.

Sources: https://stacks.math.columbia.edu/tag/06XP — Lemmas 13.27.8–13.27.10; https://stacks.math.columbia.edu/tag/05QT — Lemma 13.4.11.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `fs-localization-identifies-a-quasi-isomorphism-with-an-identity-morphism`

Claim and conventions: For every quasi-isomorphism $s$, its image $Q(s)$ in the derived category is literally an identity morphism.

Dependencies: prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms, prop-cohomology-factors-through-the-derived-category.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — Boundary check against the licensed construction.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `fs-two-roofs-are-equal-whenever-their-right-hand-arrows-are-equal`

Claim and conventions: Two roofs between the same objects are equal in the derived category whenever their right-hand arrows are equal.

Dependencies: thm-the-calculus-of-fractions-constructs-the-localization, prop-cohomology-factors-through-the-derived-category.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — Boundary check against the licensed construction.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `fs-the-derived-category-is-the-same-category-as-the-homotopy-category`

Claim and conventions: For every abelian category, $Q:K(\mathcal A)\to D(\mathcal A)$ is an equivalence of categories.

Dependencies: prop-a-complex-is-zero-in-the-derived-category-exactly-when-it-is-acyclic, fs-every-acyclic-complex-is-contractible.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — Boundary check against the licensed construction.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `fs-every-complex-of-projectives-is-homotopically-projective`

Claim and conventions: Every complex of projective modules, without any boundedness hypothesis, is K-projective.

Dependencies: def-homotopically-projective-bounded-above-complex, def-projective-module.

Sources: https://mathoverflow.net/questions/120075/dg-projective-vs-k-projective-complexes — Boundary check against the licensed construction.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `fs-brutal-and-canonical-truncation-are-the-same`

Claim and conventions: Brutal and canonical truncation of a complex at the same degree always coincide, even up to derived isomorphism.

Dependencies: def-brutal-truncation-of-a-complex, def-canonical-truncation-of-a-complex.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — Boundary check against the licensed construction.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `fs-an-unbounded-total-derived-functor-exists-from-enough-injectives-alone`

Claim and conventions: Enough injectives alone licenses the unbounded right-derived-functor recipe using an arbitrary quasi-isomorphism into any termwise injective complex.

Dependencies: def-homotopically-injective-bounded-below-complex, def-right-total-derived-functor-on-the-bounded-below-derived-category, thm-baer-criterion-for-injective-modules.

Sources: https://mathoverflow.net/questions/120075/dg-projective-vs-k-projective-complexes — Boundary check against the licensed construction.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `fs-a-derived-functor-is-canonical-without-supplied-replacement-data`

Claim and conventions: A projective replacement model for a total derived functor is literally canonical without supplied replacement data.

Dependencies: def-left-total-derived-functor-on-the-bounded-above-derived-category, lem-left-total-derived-functor-is-independent-of-the-supplied-projective-replacement-up-to-unique-natural-isomorphism, def-contractible-complex.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — Boundary check against the licensed construction.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `ex-a-roof-representing-an-ext-one-class`

Claim and conventions: The nonsplit extension $0\to\mathbb Z\xrightarrow2\mathbb Z\to\mathbb Z/2\to0$ is represented in $D(\mathbf{Ab})$ by the roof $\mathbb Z/2[0]\xleftarrow sU\xrightarrow f\mathbb Z[1]$, where $U=(\mathbb Z\xrightarrow2\mathbb Z)$ in degrees $-1,0$, $s^0$ is reduction modulo two, and $f^{-1}=1$. Its class generates $\operatorname{Ext}^1(\mathbb Z/2,\mathbb Z)\cong\mathbb Z/2$.

Dependencies: thm-ext-is-hom-in-the-derived-category, prop-yoneda-product-is-composition-in-the-derived-category.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.4.7 and 10.7.5, pp. 388, 400.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `ex-an-acyclic-complex-that-becomes-zero-in-d-but-not-in-k`

Claim and conventions: The complex $X=(\mathbb Z\xrightarrow2\mathbb Z\to\mathbb Z/2)$ in degrees $0,1,2$ is zero in $D(\mathbf{Ab})$ and is nonzero in $K(\mathbf{Ab})$.

Dependencies: prop-a-complex-is-zero-in-the-derived-category-exactly-when-it-is-acyclic.

Sources: https://stacks.math.columbia.edu/tag/05RR — 13.11.1–13.11.6.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `ex-inverting-a-quasi-isomorphism-by-a-reversed-roof`

Claim and conventions: Let $U=(\mathbb Z\xrightarrow2\mathbb Z)$ in degrees $-1,0$ and let $s:U\to\mathbb Z/2[0]$ be reduction modulo two at degree zero. The inverse of $Q(s)$ is the roof $\mathbb Z/2[0]\xleftarrow sU\xrightarrow1U$.

Dependencies: prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms.

Sources: https://stacks.math.columbia.edu/tag/05RR — 13.11.1–13.11.6.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `ex-ext-one-as-a-derived-category-morphism`

Claim and conventions: For positive integers $m,n$, $\operatorname{Hom}_{D(\mathbf{Ab})}(\mathbb Z/m[0],\mathbb Z/n[1])\cong\mathbb Z/\gcd(m,n)$.

Dependencies: thm-ext-is-hom-in-the-derived-category.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.4.7 and 10.7.5, pp. 388, 400.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `ex-brutal-versus-canonical-truncation`

Claim and conventions: For $X=(\mathbb Z\xrightarrow2\mathbb Z)$ in degrees $0,1$, its four truncations at zero are $\sigma^{\leq0}X=\mathbb Z[0]$, $\tau^{\leq0}X=0$, $\sigma^{\geq0}X=X$, and $\tau^{\geq0}X=X$.

Dependencies: def-brutal-truncation-of-a-complex, def-canonical-truncation-of-a-complex, lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology.

Sources: https://stacks.math.columbia.edu/tag/0118 — 12.15, all four chain and four cochain truncations.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `ex-a-canonical-truncation-triangle`

Claim and conventions: For $R=\mathbb Z/4$ and $X=(R\xrightarrow2R)$ in degrees $0,1$, the canonical truncation triangle is $(2R)[0]\xrightarrow iX\xrightarrow q(R/2R)[-1]\xrightarrow\delta(2R)[1]$. The first map is inclusion in degree zero, the second is quotient in degree one, and the connecting map has the explicit roof described below.

Dependencies: thm-canonical-truncations-fit-a-distinguished-triangle.

Sources: https://stacks.math.columbia.edu/tag/08J5 — Remark 13.12.4 and its three triangles.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `ex-derived-tensor-of-two-cyclic-abelian-groups`

Claim and conventions: For $m,n>0$, $\mathbb Z/m\otimes_{\mathbb Z}^{\mathbf L}\mathbb Z/n$ is represented by $(\mathbb Z/n\xrightarrow m\mathbb Z/n)$ in degrees $-1,0$. Both $H^{-1}$ and $H^0$ are isomorphic to $\mathbb Z/\gcd(m,n)$, and all other cohomology vanishes.

Dependencies: def-derived-tensor-product-in-the-bounded-above-setting, prop-homology-of-the-derived-tensor-product-is-tor.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.6.1–10.6.4 and Exercise 10.6.1, p. 395; elementary finite-diagonal replacement for spectral sequence proof.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `ex-derived-hom-of-cyclic-abelian-groups`

Claim and conventions: For $m,n>0$, $\mathbf R\operatorname{Hom}_{\mathbb Z}(\mathbb Z/m,\mathbb Z/n)$ is represented by $(\mathbb Z/n\xrightarrow m\mathbb Z/n)$ in degrees $0,1$. Its $H^0$ and $H^1$ are isomorphic to $\mathbb Z/\gcd(m,n)$; other cohomology is zero.

Dependencies: def-derived-hom-in-the-bounded-setting, prop-cohomology-of-derived-hom-is-ext.

Sources: https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf — 10.7.2–10.7.5 and Exercise 10.7.1, pp. 399–400.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Authored checkpoint: `cex-an-unbounded-complex-of-projectives-that-is-not-k-projective`

Claim and conventions: Every unbounded complex whose terms are projective modules is K-projective.

Dependencies: def-homotopically-projective-bounded-above-complex.

Sources: https://mathoverflow.net/questions/120075/dg-projective-vs-k-projective-complexes — Explicit specialization of the bounded models; see batch notes.

Provenance: {"statement": "ai-altered", "proof": "ai-altered"}; local exposition/proof follows the cited construction with explicit conventions. Draft written; proof uses and boundary dispositions recorded in the batch proof contract. Focused validators pending. No unresolved obligation within this completed item; next action is the next assigned item and final validation.

### Final validation and disposition

Authored page material: `library/homological-algebra/derived-categories.md`
and `library/homological-algebra/derived-categories-examples.md`. Both pages
remain `status: draft`. The A page contains the exact 60-item manifest order:
`def-multiplicative-system-in-a-category`,
`def-localization-of-a-category-at-a-class-of-morphisms`,
`def-left-roof-representing-a-localized-morphism`,
`def-common-refinement-equivalence-of-roofs`,
`lem-roof-equivalence-is-an-equivalence-relation`,
`lem-composition-of-roofs-is-well-defined`,
`thm-the-calculus-of-fractions-constructs-the-localization`,
`prop-quasi-isomorphisms-contain-identities-and-are-closed-under-composition`,
`thm-two-out-of-three-for-quasi-isomorphisms`,
`lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category`,
`def-derived-category-of-an-abelian-category`,
`prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms`,
`prop-cohomology-factors-through-the-derived-category`,
`prop-a-complex-is-zero-in-the-derived-category-exactly-when-it-is-acyclic`,
`lem-addition-of-roofs-makes-an-additive-localization`,
`lem-finite-roof-squares-and-composable-pairs-can-be-cleared`,
`lem-localized-cone-triangles-satisfy-tr-one-through-tr-three`,
`lem-localized-cone-triangles-satisfy-the-octahedral-axiom`,
`thm-the-derived-category-inherits-a-triangulated-structure`,
`thm-the-derived-category-is-the-verdier-quotient-by-acyclic-complexes`,
`def-homotopically-projective-bounded-above-complex`,
`def-homotopically-injective-bounded-below-complex`,
`thm-a-bounded-above-complex-of-projectives-is-homotopically-projective`,
`thm-a-bounded-below-complex-of-injectives-is-homotopically-injective`,
`prop-morphisms-from-a-homotopically-projective-complex-need-no-roof`,
`prop-morphisms-into-a-homotopically-injective-complex-need-no-roof`,
`def-brutal-truncation-of-a-complex`,
`def-canonical-truncation-of-a-complex`,
`lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology`,
`thm-canonical-truncations-fit-a-distinguished-triangle`,
`prop-bounded-derived-localizations-embed-fully-faithfully`,
`lem-bounded-above-complexes-admit-projective-replacements`,
`lem-bounded-below-complexes-admit-injective-replacements`,
`thm-projective-complexes-model-the-bounded-above-derived-category`,
`thm-injective-complexes-model-the-bounded-below-derived-category`,
`thm-ext-is-hom-in-the-derived-category`,
`prop-yoneda-product-is-composition-in-the-derived-category`,
`def-canonical-t-structure-on-a-derived-category`,
`thm-the-canonical-pair-is-a-t-structure`,
`thm-the-heart-of-the-canonical-t-structure-is-equivalent-to-the-original-abelian-category`,
`def-left-total-derived-functor-on-the-bounded-above-derived-category`,
`lem-left-total-derived-functor-is-independent-of-the-supplied-projective-replacement-up-to-unique-natural-isomorphism`,
`thm-existence-of-the-bounded-above-left-total-derived-functor`,
`def-right-total-derived-functor-on-the-bounded-below-derived-category`,
`thm-existence-of-the-bounded-below-right-total-derived-functor`,
`prop-total-derived-functors-send-distinguished-triangles-to-distinguished-triangles`,
`prop-classical-derived-functors-are-the-cohomology-objects-of-the-total-derived-functor`,
`lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms`,
`def-derived-tensor-product-in-the-bounded-above-setting`,
`prop-homology-of-the-derived-tensor-product-is-tor`,
`def-derived-hom-in-the-bounded-setting`,
`prop-cohomology-of-derived-hom-is-ext`,
`prop-bounded-derived-complexes-split-when-higher-ext-between-cohomologies-vanishes`,
`fs-localization-identifies-a-quasi-isomorphism-with-an-identity-morphism`,
`fs-two-roofs-are-equal-whenever-their-right-hand-arrows-are-equal`,
`fs-the-derived-category-is-the-same-category-as-the-homotopy-category`,
`fs-every-complex-of-projectives-is-homotopically-projective`,
`fs-brutal-and-canonical-truncation-are-the-same`,
`fs-an-unbounded-total-derived-functor-exists-from-enough-injectives-alone`,
and `fs-a-derived-functor-is-canonical-without-supplied-replacement-data`.
The B page contains the exact nine manifest examples:
`ex-a-roof-representing-an-ext-one-class`,
`ex-an-acyclic-complex-that-becomes-zero-in-d-but-not-in-k`,
`ex-inverting-a-quasi-isomorphism-by-a-reversed-roof`,
`ex-ext-one-as-a-derived-category-morphism`,
`ex-brutal-versus-canonical-truncation`,
`ex-a-canonical-truncation-triangle`,
`ex-derived-tensor-of-two-cyclic-abelian-groups`,
`ex-derived-hom-of-cyclic-abelian-groups`, and
`cex-an-unbounded-complex-of-projectives-that-is-not-k-projective`.

Provenance rationale: all 69 statements are `ai-altered`; the 55
proof-bearing items are also `proof: ai-altered`, while the 14 definitions are
`proof: not-applicable`. The mathematics follows the item-specific source
locators recorded above, but the local text supplies the size conventions,
boundedness, cochain shifts, proof details, examples, and counterexample
calculations needed for these exact scaffold claims. Every source URL and
locator was preserved when the inline scaffold source objects were converted
to the schema-recognized `sources.references` YAML form. No generated statement
is used as a dependency. The exact current dependency statements were checked
through the proof-contract fact quotes and strict contract validation.

Narrowed or dropped claims: none beyond the qualifications already fixed in
the accepted scaffold. In particular, the unbounded item refutes only the
arbitrary termwise-injective replacement recipe; it does not deny unbounded
derived functors obtainable by stronger methods. The bounded-model claims keep
their supplied replacement, size, and choice hypotheses, and the t-structure,
Ext, Tor, and derived-Hom statements keep their stated bounded ranges. No item
was dropped.

Repairs applied during authoring: the initial explicit-path precheck requested
canonical phase layering on the 55 proof-bearing items. Step labels, all
internal proof references, and the matching proof-contract derivations and
boundary evidence were synchronized; no mathematical claim changed in that
repair. A notation ambiguity `a=id` in the roof-calculus cancellation proof was
made explicit as `a=i\circ d`. The first content-policy run then found that the
69 inline JSON `sources` mappings were not parsed as `sources.references`; they
were converted mechanically to nested YAML without changing any source URL or
title. Both repairs were confined to this batch.

Final checks:

- Explicit 69-path `node tools/tsx-run.mjs tools/precheck.mts ...`: exit 0,
  55 proof-bearing items checked, 0 failing.
- The literal no-argument `node tools/validate-plan.mjs` invocation returned
  usage and exit 2 because this CLI requires a plan path. The operative
  invocation `node tools/validate-plan.mjs research/plan-spec.json`: exit 0;
  declared order is acyclic and consistent, with no item cycles, forward
  references, B-page dependencies, or unresolved ids among the 892 populated
  pages. Its repository-wide redundant-prerequisite advisories and 463
  unpopulated planned pages are non-failing and were not edited.
- `node tools/content-policy.mjs research/frontier-33-batch-6.pages.json`:
  exit 0, 69 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-33-batch-6.proof-contracts.json --strict`:
  exit 0, 55/55 items checked, 0 errors, one non-failing shotgun-bracket
  advisory on the four genuinely simultaneous model/definition citations in
  step 1.1 of
  `prop-classical-derived-functors-are-the-cohomology-objects-of-the-total-derived-functor`.
- Additional dependency check
  `node tools/manifest-deps.mjs research/frontier-33-batch-6.pages.json`:
  exit 0, 69 items, 0 normalized, 0 errors.
- Status check: all 69 items and both page files are draft; no scoped item has
  a `verification.judge` record.

Blockers: none. No plan structure, workflow state, other batch artifact, or
published content was changed.
