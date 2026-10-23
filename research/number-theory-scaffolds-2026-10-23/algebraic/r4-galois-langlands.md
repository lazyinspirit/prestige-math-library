# R4 — Galois representations, cohomology, and Langlands

**Snapshot date:** 2026-10-23. This is a research scaffold for algebraic-number-theory pages. It specifies buildable A/B contracts and their supplier graph; it is not a claim that every listed theorem proof has been formalized or locally reconstructed. The full reading ledger, exact source editions, hashes, locators, heading dispositions, and finite proof gates are in [r4-sources/README.md](r4-sources/README.md).

## Scope and existing interfaces

R4 owns generic Galois representations and Frobenius polynomials; étale lisse sheaves, compact support, trace formula, GOS conductors, and Deligne weights; perfectoid fields, spaces, and tilting; modular-form Galois representations; local Weil–Deligne and classical local Langlands; rational and selected integral/prismatic p-adic Hodge results; Mazur deformation theory and Wiles–Taylor–Wiles interfaces; Drinfeld modules/shtukas and the GL_r function-field correspondence; and a dated local/global Langlands frontier.

R2 owns local fields, ramification filtrations, local/global CFT, adeles/ideles, and Poitou–Tate duality. R3 owns elliptic/abelian arithmetic and Selmer/Sha arithmetic. R5 owns Iwasawa theory, p-adic L-functions, Euler/Kolyvagin systems, and statistics. R4 consumes those suppliers without redefining them.

The repository audit found:

- The published finite étale fundamental-group equivalence, def-etale-fundamental-group-and-fibre-functor and thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets, classifies finite étale covers only. It does not supply generic lisse Qℓ-sheaves or their cohomology.
- The published def-arith-tate-module-and-inertia and lem-arith-field-prime-to-characteristic-torsion-and-tate-module assume an abelian variety and prime-to-residue-characteristic torsion. They do not define a general continuous ℓ-adic representation.
- The existing def-level-one-modular-form-and-cusp-form is level one, whereas the Deligne representation interface uses arbitrary normalized cuspidal eigenforms at Γ₁(N).
- Existing group cohomology pages are general group-cohomology interfaces; no generic Galois deformation ring, lisse sheaf, compact ℓ-adic cohomology, GOS, or prismatic crystalline-lattice result was found.

R2’s planned exact interfaces consumed here include def-global-field, def-absolute-galois-group-of-a-global-field, def-absolute-galois-group-of-a-local-field, def-local-inertia-subgroup-of-absolute-galois-group, def-herbrand-function-and-upper-ramification-numbering, def-continuous-cohomology-of-a-profinite-group-with-discrete-module, and thm-poitou-tate-exact-sequence-for-finite-modules. Existing decomposition/inertia/Frobenius results are reused: def-decomposition-group-of-a-prime, def-inertia-group-of-a-prime, thm-decomposition-inertia-exact-sequence, def-arithmetic-frobenius-coset, thm-unramified-frobenius-element-exists-uniquely, and thm-frobenius-elements-above-a-prime-are-conjugate.

The page DAG below matches r4-sources/pair-fragment.json. Every B page requires only its own A companion. Item order, exact dependencies, titles, and kinds are in r4-sources/proposed-inventories.json.

1. galois-representations-and-frobenius requires global-fields-and-function-fields, local-fields-valuations-and-completions, decomposition-inertia-and-frobenius, local-galois-groups-and-continuous-cohomology, and abelian-varieties-base-change-and-arithmetic-models for the Tate-module example.
2. constructible-etale-sheaves-and-lisse-sheaves requires algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations and etale-covers-and-the-etale-fundamental-group.
3. compactly-supported-etale-cohomology-and-trace-formula requires constructible-etale-sheaves-and-lisse-sheaves.
4. swan-conductors-and-grothendieck-ogg-shafarevich requires constructible-etale-sheaves-and-lisse-sheaves, compactly-supported-etale-cohomology-and-trace-formula, local-extensions-ramification-and-different, and local-galois-groups-and-continuous-cohomology.
5. deligne-weights-and-finite-field-trace-bounds requires the constructible, compact-support, and Swan/GOS pages.
6. modular-forms-and-galois-representations requires galois-representations-and-frobenius, the constructible and compact-support pages, deligne-weights-and-finite-field-trace-bounds, and level-one-modular-forms-and-the-j-invariant as a classical base.
7. local-weil-deligne-representations-and-langlands requires galois-representations-and-frobenius, local-fields-valuations-and-completions, local-extensions-ramification-and-different, and local-galois-groups-and-continuous-cohomology.
8. p-adic-hodge-representations-and-comparison-theorems requires galois-representations-and-frobenius, local-fields-valuations-and-completions, and local-galois-groups-and-continuous-cohomology.
9. prismatic-galois-lattices-and-crystalline-representations requires the p-adic Hodge page, local-fields-valuations-and-completions, and perfectoid-fields-spaces-and-tilting for the BMS integral comparison input.
10. galois-deformation-rings-and-selmer-conditions requires galois-representations-and-frobenius, local-galois-groups-and-continuous-cohomology, local-extensions-ramification-and-different, and poitou-tate-duality-and-local-global-obstructions.
11. modularity-lifting-and-elliptic-curve-modularity requires modular-forms-and-galois-representations, galois-deformation-rings-and-selmer-conditions, local-weil-deligne-representations-and-langlands, and p-adic-hodge-representations-and-comparison-theorems.
12. drinfeld-modules-and-function-field-arithmetic requires global-fields-and-function-fields and galois-representations-and-frobenius.
13. drinfeld-shtukas-and-global-langlands-function-fields requires global-fields-and-function-fields, adeles-ideles-and-approximation, global-function-field-class-field-theory, drinfeld-modules-and-function-field-arithmetic, and all four étale/GOS/Deligne suppliers.
14. categorical-local-langlands-frontier requires local-weil-deligne-representations-and-langlands.
15. number-field-langlands-and-fontaine-mazur-frontiers requires galois-representations-and-frobenius, modular-forms-and-galois-representations, modularity-lifting-and-elliptic-curve-modularity, local-weil-deligne-representations-and-langlands, p-adic-hodge-representations-and-comparison-theorems, and drinfeld-shtukas-and-global-langlands-function-fields.
16. perfectoid-fields-spaces-and-tilting requires absolute-values-completions-and-p-adic-numbers, valuation-rings-and-discrete-valuation-rings, and local-fields-valuations-and-completions (including the R2 Krasner lemma supplier).

## Pair contracts

### 1. Galois representations and Frobenius

A-page items: def-continuous-l-adic-galois-representation, def-residual-galois-representation, def-unramified-galois-representation-at-a-place, thm-unramified-galois-representation-has-well-defined-frobenius-characteristic-polynomial.

A continuous ℓ-adic representation is a continuous homomorphism from the relevant absolute Galois group into GL(V) for a finite-dimensional Qℓ-vector space V. A residual representation is the semisimplified reduction of a stable lattice. At a place v, unramified means inertia I_v acts trivially. Then the characteristic polynomial of Frobenius is independent of the lift of its conjugacy class. The arithmetic Frobenius convention follows R2’s def-arithmetic-frobenius-coset; examples separately state when geometric Frobenius is used.

B-page examples: ex-cyclotomic-l-adic-character-at-an-unramified-prime and ex-tate-module-frobenius-at-a-good-prime. The latter consumes the existing abelian-variety Tate module only under its published hypotheses.

Sources: Mazur Chapter I supplies deformation-adjacent Galois notation; Deligne’s modular-forms paper §3.1 gives the lisse/Frobenius representation context; the full source ledger records the exact R2 Frobenius suppliers.

### 2. Constructible étale sheaves and lisse sheaves

A-page items: def-small-etale-site-of-a-scheme, def-derived-category-of-etale-sheaves, def-l-adic-sheaf-as-compatible-system, def-tate-twist-of-an-l-adic-sheaf, def-smooth-curve-over-finite-field, def-constructible-l-adic-sheaf-on-a-scheme, def-lisse-l-adic-sheaf-on-a-scheme, thm-lisse-l-adic-sheaves-and-continuous-pi1-representations, def-middle-extension-l-adic-sheaf-on-a-curve, def-frobenius-trace-function-of-a-lisse-sheaf.

For connected finite-type X/F_q, geometric point x̄, and ℓ≠char(F_q), lisse finite-rank Qℓ-sheaves correspond to continuous finite-dimensional Qℓ-representations of π₁^et(X,x̄). Constructible means a finite locally closed stratification on which each restriction is lisse. For an open immersion j:U↪X of smooth curves, the middle extension is the perverse sheaf j_{!*}(F[1]) shifted back by one to a sheaf. For the lisse trace function on its lisse open U, t_F(x) is the geometric Frobenius trace on the stalk; in a local Galois description this is the trace on inertia invariants. Boundary values for a constructible middle extension use the separate constructible-stalk trace supplier in pair 3.

B-page examples: Artin–Schreier and Kummer rank-one sheaves and their additive/multiplicative character traces.

Evidence: Deligne, “Formes modulaires,” §3.1 (PDF pp. 5–6; printed pp. 166–167) explicitly gives the lcc Zℓ/Qℓ sheaf ↔ continuous π₁ representation equivalence for connected schemes with geometric base point. SGA5 VI §1.1 defines constructible ℓ-adic sheaves as projective systems. The finite étale library supplier is not used as a substitute for this l-adic equivalence.

### 3. Compactly supported étale cohomology and the trace formula

A-page items: def-derived-direct-image-with-proper-supports, thm-nagata-compactification-for-separated-finite-type-morphisms, thm-compact-support-direct-image-independent-of-compactification, def-compactly-supported-etale-cohomology, thm-proper-base-change-for-compact-support, thm-finiteness-of-compactly-supported-etale-cohomology, def-frobenius-trace-on-a-constructible-stalk, thm-grothendieck-lefschetz-trace-formula-for-constructible-l-adic-sheaves, thm-hc0-vanishing-for-lisse-sheaves-on-nonproper-smooth-curves, thm-poincare-duality-and-degree-zero-two-on-smooth-curves.

For separated finite-type X/F_q and constructible Qℓ-sheaf F, H_c^i(X̄,F) is finite-dimensional and vanishes outside a finite range. With geometric Frobenius on both sides, the trace formula is

    Σ_{x∈X(F_q)} tr(Frob_x^geom | F_x̄) = Σ_i (−1)^i tr(Frob_q^geom | H_c^i(X̄,F)).

This is Grothendieck–Lefschetz for constructible sheaves; SGA5 XV §3 derives it from the L-function identity. It is distinct from Milne’s proper smooth fixed-point formula.

On a smooth geometrically connected nonproper curve U over an algebraically closed field of characteristic p, with ℓ≠p and F a lisse finite-rank Qℓ-sheaf, H_c^0(U,F)=0. Poincaré duality gives perfect pairings H_c^i(U,F) × H^{2−i}(U,F∨(1)) → Qℓ; in particular H_c^2(U,F) is dual to H^0(U,F∨(1)), the geometric invariants of F∨(1). These degree-zero/two contracts are needed to extract the correct main term in trace-sum bounds.

B-page examples: the constant sheaf on A¹ and the constant sheaf on G_m.

Evidence: Milne §§18–19, Thms. 19.1–19.2, establishes compactification independence and finiteness for the relevant torsion/flat Zℓ systems; §24 Thm. 24.1 gives Poincaré duality; SGA5 XV §3 (all 278 numbered lines) gives the finite-field constructible-sheaf trace formula and inverse-arithmetic/geometric Frobenius convention.

### 4. Swan conductors and GOS

A-page items: def-swan-conductor-of-an-l-adic-inertia-representation, def-artin-conductor-of-an-l-adic-inertia-representation, def-conductor-of-a-middle-extension-sheaf-on-a-curve, thm-grothendieck-ogg-shafarevich-euler-characteristic-formula, lem-gos-conductor-complexity-bound-on-the-affine-line.

For a lisse sheaf F on a smooth geometrically connected open curve U over an algebraically closed field of characteristic p, with smooth proper completion X̄, singular set S=X̄−U, and ℓ≠p, the GOS contract is

    χ_c(U,F) = rank(F) χ_c(U,Qℓ) − Σ_{x∈S} Swan_x(F).
Swan is computed from upper-numbering wild inertia; tame ramification has Swan zero. The Artin conductor is codim(V^{I_x})+Swan_x(V). This is not the same as FKM’s complexity c(F)=rank(F)+|Sing(F)|+ΣSwan_x(F), which is used for explicit estimates on P¹.

B-page examples: tame rank-one characters and the Artin–Schreier conductor at infinity.

Evidence: SGA5 Exposé X §§4–7 are read in full: §4 defines Swan/ramification local terms; §§5–6 develop the local Euler terms; §7 states the Euler–Poincaré/GOS formula and open-curve case. R2 supplies the local inertia and Herbrand numbering definitions. FKM §4 quotes, but does not prove, its tensor-conductor estimate; the exact bound and its local proof obligation are in the source ledger.

### 5. Deligne weights and finite-field trace bounds

A-page items: def-pointwise-purity-and-weights-of-an-l-adic-sheaf, thm-deligne-weight-bound-for-compactly-supported-cohomology, thm-geometric-invariants-control-compact-support-degree-two, thm-deligne-square-root-trace-bound-for-curves.

Deligne’s weight theorem: if F is mixed of weights ≤w on a finite-type scheme over F_q, then H_c^i has weights ≤w+i; for smooth proper maps and pure lisse input, the corresponding cohomology is pure. Let F₁,F₂ be geometrically irreducible, pointwise weight-zero middle-extension sheaves on A¹/F_p, with ℓ≠p, and put c_i=c(F_i). FKM Theorem 4.1 bounds the conjugate correlation by

    |Σ_{x∈F_p} t_F₁(x) overline{t_F₂(x)}| ≤ 3c₁²c₂²√p

when they are geometrically nonisomorphic. If they are geometrically isomorphic, t_F₁=αt_F₂ for some |α|=1, and

    |Σ_{x∈F_p} t_F₁(x) overline{t_F₂(x)} − αp| ≤ 3c₁²c₂²√p.

The proof uses F₁⊗D(F₂), where D denotes the dual sheaf.

The cohomological proof uses F₁⊗D(F₂) and needs all pieces: compact-support trace formula; H_c^0=0; H_c^2 invariants/main term; GOS Euler characteristic; and a tensor-conductor estimate. The bare GOS formula is insufficient to infer the explicit factor 3c₁²c₂². This local bound remains a proof gate, not an unproved inference in the scaffold.

B-page examples: geometrically distinct Kummer sheaves and the self-correlation main term.

Evidence: Deligne Weil II §3.3.1 Theorem (3.3.1), full statement/proof, plus §§0–1; FKM, Definition 2.5 and Theorem 4.1/proof discussion. See the source ledger for the extent and attribution of each ingredient.

### 6. Modular forms and Galois representations

A-page items: def-normalized-cuspidal-eigenform-over-gl2, thm-modular-curve-cohomology-realizes-cuspidal-eigensystems, thm-eichler-shimura-congruence-formula-on-modular-curve-cohomology, thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform, thm-delignes-galois-representation-has-eigenform-frobenius-polynomial.

For a normalized cuspidal Hecke eigenform f of weight k≥2, level N and nebentypus χ, modular-curve étale cohomology and Hecke correspondences give a continuous two-dimensional ℓ-adic Galois representation. With arithmetic Frobenius, for q∤Nℓ its characteristic polynomial is

    det(X−ρ_f(Frob_q)) = X²−a_q(f)X+χ(q)q^(k−1).
The statement uses the cohomological realization and the congruence formula, not just the existence of a Hecke eigenform. Coefficient-field embeddings and normalization of Fourier coefficients must be fixed in the item statement.

B-page examples: the weight-12 discriminant form and a good-prime Frobenius polynomial.

Evidence: Deligne, “Formes modulaires,” §§2–4 and Theorem 4.9, full 20-page paper read. The source explains the cohomological/Hecke construction and congruence formula; no claim is made that the note is a modern standalone proof of every refinement for all coefficient fields.

### 7. Local Weil–Deligne representations and classical local Langlands

A-page items: def-weil-group-of-a-local-field, def-weil-deligne-representation-of-a-local-field, thm-grothendieck-monodromy-theorem-for-l-adic-local-representations, def-local-l-and-epsilon-factors-of-a-weil-deligne-representation, thm-unramified-local-langlands-for-gl-n, thm-local-langlands-correspondence-for-gl-n-over-p-adic-fields.

For a nonarchimedean p-adic field K, the classical correspondence is the unique bijection between irreducible admissible representations of GL_n(K) and Frobenius-semisimple n-dimensional Weil–Deligne representations, normalized by local reciprocity for n=1 and preserving Rankin–Selberg L- and ε-factors, twists, central characters and contragredients. The unramified dictionary is proved by the Satake parameter/Frobenius semisimple conjugacy class.

B-page examples: unramified principal series and the Steinberg parameter with nonzero monodromy.

Evidence: Wedhorn §1.2 Theorem 1.2.2 and §4.1. Its §4.4 outlines Harris–Taylor’s construction but explicitly does not prove the compatibilities. The Grothendieck monodromy theorem’s full source proof is a separate gate. The theorem itself is established for GL_n; the source note is a formulation and proof route, not a substitute for the full primary proof.

### 8. p-adic Hodge representations and comparison theorems

A-page items: def-hodge-tate-p-adic-galois-representation, thm-faltings-hodge-tate-decomposition-for-smooth-proper-varieties, def-de-rham-p-adic-galois-representation, def-crystalline-p-adic-galois-representation, thm-good-reduction-etale-cohomology-is-crystalline, def-semistaable-representation-and-filtered-phi-n-module, thm-colmez-fontaine-weakly-admissible-is-admissible, thm-potentially-semistaable-representation-theorem.

Hypotheses are always stated: K is a finite extension of Q_p or a complete discretely valued p-adic field with perfect residue field, as required by the source theorem; representations are finite-dimensional Q_p-vector spaces with continuous G_K-action. Hodge–Tate, de Rham, crystalline and semistable are distinct conditions, not synonyms. Good reduction of a proper smooth scheme gives crystalline p-adic étale cohomology. Weak admissibility is defined by t_N(D′)≥t_H(D′) for every subobject and equality for D; Colmez–Fontaine identifies weakly admissible filtered (φ,N)-modules with semistable representations. Every de Rham representation becomes semistable after finite extension.

B-page examples: cyclotomic character and an elliptic curve with good reduction.

Evidence: Brinon–Conrad Part I Ch. 2, Ch. 6, Ch. 8 §§8.1–8.2 and Ch. 9 §9.3; exact read extent in README.

### 9. Prismatic Galois lattices and crystalline representations

A-page items: def-prismatic-f-crystal-over-a-p-adic-formal-scheme, thm-bms-ainf-integral-comparison-for-smooth-proper-formal-schemes, thm-prismatic-f-crystals-over-ok-classify-crystalline-galois-lattices.

The integral comparison is stated for proper smooth p-adic formal schemes and carries exact torsion and torsion-freeness conditions. The categorical equivalence is narrower: for K complete discretely valued of mixed characteristic (0,p) with perfect residue field k, the étale realization from prismatic F-crystals of vector bundles on Spf(O_K) is an equivalence with finite-free Z_p lattices T equipped with continuous G_K-action such that T[1/p] is crystalline. This is the vector-bundle, torsion-free lattice theorem, not a claim about general torsion coefficients or arbitrary relative bases.

B-page examples: the trivial crystalline lattice and good-reduction integral cohomology.

Evidence: BMS Theorems 1.1, 1.8, 1.10, 14.6 and full §14 proof; BMS §3.2–3.3 perfectoid-ring definition/bridge; Bhatt–Scholze §§2–6.4 and Theorem 5.6. The 2023 arXiv source explicitly supplies the classification proof. The broader prismatic cohomology program is not included in this pair.

### 10. Galois deformation rings and Selmer conditions

A-page items: def-deformation-functor-of-a-residual-galois-representation, thm-mazur-representability-of-the-galois-deformation-functor, thm-galois-deformation-tangent-space-is-h1, thm-galois-deformation-obstructions-lie-in-h2, def-global-selmer-deformation-condition, thm-greenberg-wiles-selmer-dimension-formula.

A deformation problem fixes a residual representation, coefficient DVR and residue field, and an Artin local coefficient algebra. Deformations are lifts up to strict equivalence; fixed determinant, ramification, and local conditions are separate data. Mazur representability uses the stated Φ_p finiteness hypothesis and absolute irreducibility where the universal functor is claimed. Tangents are H¹; obstructions lie in H². A global Selmer condition is a family of local tangent subspaces, and the Greenberg–Wiles dimension relation consumes the R2 finite-module Poitou–Tate sequence and local duality.

B-page examples: unrestricted H¹ tangent space and an ordinary local deformation condition.

Evidence: Mazur Chapter I §§1.1–1.13; Wiles Introduction/Chapter 1; Taylor–Wiles §§1–4 and Appendix. The general-to-specific passage from a Galois deformation problem to a chosen Hecke algebra remains an item-specific proof task.

### 11. Modularity lifting and elliptic-curve modularity

A-page items: def-deformation-to-hecke-algebra-map, thm-taylor-wiles-minimal-hecke-algebra-complete-intersection-and-r-equals-t, thm-wiles-semistable-elliptic-curves-over-q-are-modular, thm-bcdt-every-elliptic-curve-over-q-is-modular.

The R=T interface requires a specified deformation problem, local deformation conditions, Hecke algebra, and the natural map induced by the universal Galois representation. Taylor–Wiles is the minimal case. Wiles proves every semistable elliptic curve over Q modular; BCDT extends this to every elliptic curve over Q. These are theorems about elliptic curves, not a theorem that every odd two-dimensional Galois representation is modular.

B-page examples: check Wiles’s semistability hypothesis and distinguish Wiles’s theorem from BCDT’s extension.

Evidence: Wiles Theorem 0.4/Introduction and full Chapter 1; Taylor–Wiles full text; BCDT Introduction Theorem A. The detailed BCDT proof and Wiles Chapters 2–5 remain explicit external proof gates.

### 12. Drinfeld modules and function-field arithmetic

A-page items: def-drinfeld-module-over-an-a-field, def-rank-of-a-drinfeld-module, thm-drinfeld-tate-module-is-a-galois-representation, ex-carlitz-module-and-its-tate-module.

For a function-field coefficient ring A and A-field L, a Drinfeld A-module is an injective ring map A→L{τ} with the prescribed differential action; its rank r is characterized by deg(φ_a)=|a|^r. For a prime ideal ℓ of A distinct from 0 and the A-characteristic, its Tate module is a free A_ℓ-module of rank r with continuous G_L-action. This is the function-field analogue of the Tate-module construction, with different coefficient ring.

B-page examples: Carlitz and a rank-two Drinfeld module over F_q(T).

Evidence: Poonen §§2.1–2.2, 3.1–3.3, 3.8, 5, 7.2–7.3. Poonen’s note does not prove global Langlands; that is supplied by the separate Lafforgue pair.

### 13. Drinfeld shtukas and global Langlands over function fields

A-page item chain:
- def-drinfeld-shtuka-with-bounded-modification;
- thm-drinfeld-shtuka-stacks-have-partial-frobenius-and-hecke-correspondences;
- thm-arthur-selberg-truncated-trace-input-for-shtuka-lefschetz-counts;
- thm-shtuka-fixed-point-count-has-cuspidal-plus-lower-rank-expansion (Lafforgue 2002, Theorem I.13);
- thm-level-zero-shtuka-lefschetz-count-has-cuspidal-plus-lower-rank-expansion (Lafforgue 2002, Theorem II.15);
- thm-compactification-and-boundary-strata-of-drinfeld-shtuka-stacks;
- thm-grothendieck-lefschetz-fixed-point-formula-for-unstable-shtuka-opens;
- thm-stabilized-hecke-correspondences-are-stable-near-fixed-points;
- lem-boundary-and-truncation-shtuka-cohomology-is-lower-rank-negligible;
- thm-essential-shtuka-cohomology-splits-by-hecke-eigensystems;
- thm-laurent-lafforgue-global-langlands-for-gl-r-over-function-fields;
- thm-laurent-lafforgue-ramanujan-petersson-for-function-field-gl-r.

The endpoint is Theorem VI.9 with its exact coefficient/ramification hypotheses above. The theorem is proved through the lower-rank induction on essential cohomology; its inputs are made explicit in the inventory rather than treating “Lafforgue correspondence” as one unsupported item.

B-page examples: rank-one function-field correspondence and an unramified Hecke/Frobenius polynomial match.

Source gates are finite and explicit: full proof harvest of Astérisque 243 (1997), Ch. V §§3–4 and Ch. VI §2f; full read of Lafforgue 1998, “Une compactification des champs classifiant les chtoucas de Drinfeld,” especially §§1–2; remaining proof details of the 2002 Ch. I Theorem I.13 and Ch. II Theorem II.15. The 2002 Ch. III Proposition III.5 proof, Ch. IV Theorem IV.12, and Ch. V Theorems V.14/V.19 have been read as listed in README. Thus this is a source-located theorem scaffold with proof gates, not a claim that the entire 2002 proof has been reproduced.

### 14. The categorical local Langlands frontier

A-page items: thm-hansen-mann-gl-n-categorical-llc-conditional-on-eisenstein-compatibility, thm-helm-solleveld-xu-generic-categorical-llc-fully-faithful-embedding, thm-gleason-et-al-schematic-analytic-automorphic-categories-equivalent, op-categorical-local-langlands-full-equivalence-without-hypotheses.

The three 2026 results are different statements:
- Hansen–Mann, arXiv v2, Theorem 1.1.1: for GL_n, full categorical LLC follows **if** the enhanced Whittaker coefficient functor is compatible with Eisenstein functors along all standard parabolics of all standard Levi subgroups. The paper does not prove that hypothesis.
- Helm–Solleveld–Xu, arXiv v2, Theorem 7.3: unconditional fully faithful embeddings on the generic direct factor for the listed quasi-split groups GL_n, SL_n, PGL_n, U_n, Sp_2n, SO_n, SO*_2n, GSpin_n, GSpin*_2n, and G₂. This is not essential surjectivity on all representations.
- Gleason–Hamann–Ivanov–Lourenço–Zou, arXiv v1, Theorem 11.3.2(1): equivalence between Zhu’s schematic and Fargues–Scholze’s analytic automorphic categories with ℓ-torsion coefficients. This is not the equivalence with the spectral parameter category.

B-page examples: the GL₂ generic block and the automorphic-category equivalence illustrate the distinction between generic fully faithful results and full spectral CLLC.

### 15. Number-field Langlands and Fontaine–Mazur frontiers

A-page items: def-geometric-p-adic-galois-representation, thm-zhang-regular-two-dimensional-fontaine-mazur-over-q-for-odd-p, op-fontaine-mazur-in-higher-dimensions-and-general-number-fields, op-global-langlands-functoriality-over-number-fields. The open-problem records have no suppliers and are never used as dependencies.

For odd p, Zhang arXiv:2412.06812v5 Theorem 1.0.2: if ρ:G_Q→GL₂(Q_p) is continuous irreducible, ramified at finitely many primes, de Rham at p with distinct Hodge–Tate weights, and odd, then ρ arises from a cuspidal eigenform up to twist. This is dated 7 Oct 2026 and is still an arXiv preprint. It does not cover p=2 or higher dimension. The general number-field Fontaine–Mazur and Langlands functoriality conjectures remain separate open-problem items.

B-page examples: p=3 exceptional local type in Zhang’s theorem and the distinction between modularity lifting and global functoriality.

## Coverage and deferrals

Motives/standard conjectures and special-value conjectures are not silently subsumed under the Galois/automorphic pairs. General motives are deferred; selected p-adic L-functions, Iwasawa main conjectures, Euler/Kolyvagin systems and arithmetic statistics belong to the exact R5 pairs listed in README. Arithmetic dynamics and heights/preperiodic points belong to R3’s arithmetic-dynamics-heights-and-preperiodic-points. Linear forms in logarithms belong to R3’s linear-forms-in-logarithms-and-effective-diophantine-bounds. Transcendence theory beyond those inputs is deferred.

No new algorithm item is proposed in R4. All R4 A/B contracts are theorem/definition/example/frontier interfaces, with source proof obligations kept separate from algorithm-correctness obligations.


### 16. Perfectoid fields, spaces, and tilting

A-page items: def-complete-nonarchimedean-field, def-perfectoid-field-and-its-tilt, def-integral-perfectoid-ring-via-ainf-and-tilt, thm-bms-perfectoid-ring-and-perfectoid-tate-algebra-agree, def-tate-k-algebra-and-power-bounded-elements, def-perfectoid-k-algebra, thm-tilting-equivalence-for-perfectoid-k-algebras, thm-perfectoid-algebra-finite-etale-covers-have-tilting-full-faithfulness, thm-tilting-equivalence-for-finite-extensions-of-perfectoid-fields, def-perfectoid-affinoid-k-algebra, def-affinoid-adic-spectrum-and-rational-subsets, thm-perfectoid-affinoid-algebras-and-rational-subspaces-tilt, thm-perfectoid-affinoid-structure-sheaf-and-almost-acyclicity, def-perfectoid-space, thm-tilting-equivalence-for-perfectoid-spaces, def-strongly-finite-etale-perfectoid-space-morphism, thm-perfectoid-affinoid-etale-covers-correspond-to-finite-etale-algebras, def-etale-site-of-a-perfectoid-space, thm-tilting-equivalence-of-perfectoid-etale-sites.

A perfectoid field K has residue characteristic p>0, a complete rank-one nondiscrete valuation, and surjective Frobenius on K°/p. Its tilt K♭ has characteristic p and is formed from the inverse limit under Frobenius; finite extensions of K and K♭ are equivalent, preserving degree. A perfectoid K-algebra is a Banach K-algebra whose power-bounded subring is open and bounded and whose Frobenius on R°/ϖ is surjective. Tilting gives an equivalence of perfectoid K-algebras with those over K♭. For a perfectoid affinoid pair (R,R+), the associated adic spaces have homeomorphic underlying spaces under tilt; rational subsets correspond, their completed rational localizations remain perfectoid, and the structure presheaf is a sheaf with higher integral structure-sheaf cohomology killed by the maximal ideal. This local tilting glues to an equivalence of perfectoid spaces.

For an affinoid perfectoid U, Scholze’s Theorem 7.9 identifies strongly finite étale covers of U with finite étale covers of O_X(U); the associated theorem gives finite étale algebra equivalence under the theorem’s integral hypotheses. The étale site of a perfectoid space is preserved functorially under tilting. B-page examples cover the completed Q_p(p^{1/p^∞}) tower, the perfectoid open disc, and étale-site invariance.

Evidence and proof limits: Scholze, “Perfectoid Spaces,” §§2.1–2.19, 3, 5, 6, and 7.1–7.12, with exact printed pages and unread external inputs in the source ledger. This pair does not include Scholze’s later weight-monodromy argument (§9), the full theory of diamonds, or the relative/prismatic extensions.



### 17. Elliptic CM, singular moduli, and ring class fields

**Page pair:** **elliptic-cm-and-singular-moduli-ring-class-fields** / **elliptic-cm-and-singular-moduli-ring-class-fields-examples**.

**A-page contract.** The page depends on R1’s quadratic-orders-gauss-composition-and-ideal-classes, the existing positive-definite-binary-quadratic-forms-and-reduction page, R2’s global-fields-and-function-fields and global-class-field-theory-and-artin-reciprocity pages, the existing elliptic-functions-and-complex-tori and level-one-modular-forms-and-the-j-invariant suppliers, and R3’s abelian-varieties-base-change-and-arithmetic-models. It reuses the existing complex-lattice, complex-torus, modular j-invariant, and j-classification items; it does not redefine quadratic forms or global reciprocity.

The ordered A-page items and contracts are:

1. **def-elliptic-lattice-with-complex-multiplication-by-an-order:** for a full lattice Λ ⊂ C, its multiplier ring is O(Λ) = {z ∈ C : zΛ ⊆ Λ}. It has CM by an imaginary-quadratic order O exactly when O(Λ) = O. This exact multiplier-ring condition is essential; an order merely embedded in the multiplier ring does not give the order-specific class count.
2. **thm-cm-lattice-homothety-classes-are-proper-ideal-classes:** the homothety classes of full lattices with multiplier ring exactly O are in bijection with proper invertible fractional O-ideal classes Pic(O). A proper fractional ideal is viewed as a lattice in the fixed complex embedding of K = Frac(O), and scaling by K× is its principal-ideal equivalence. For D < 0, R1 identifies Pic(O_D) with proper SL₂(Z)-classes of positive-definite primitive forms of discriminant D via Q = (a,b,c) ↦ I_Q = (a,(b+√D)/2).
3. **thm-ring-class-group-is-ray-class-group-quotient-by-scalar-residues:** for O_f = Z + fO_K, let I_K(f) be the fractional O_K-ideals prime to fO_K, P₁(f) the principal ideals generated by α ≡ 1 mod fO_K, and P_{K,Z}(f) the subgroup generated by principal ideals (α) with α ∈ O_K prime to f and α ≡ c mod fO_K for some c ∈ Z coprime to f. Then

   Pic(O_f) ≅ I_K(f)/P_{K,Z}(f) ≅ Cl_f(K)/Δ_f,

   where Cl_f(K) = I_K(f)/P₁(f) is the ray class group and Δ_f is the image in it of scalar residues (Z/fZ)×, represented by principal ideals (c). The kernel of that residue map includes the image of O_K×; this is not a quotient by a raw φ(f)-sized group. Under R2 arithmetic Artin reciprocity, the ring class field K_{O_f} is the subfield of the ray class field K_f fixed by Δ_f, with Gal(K_{O_f}/K) ≅ Pic(O_f). For f = 1, this is the Hilbert class field.
4. **def-cm-class-polynomial-of-an-imaginary-quadratic-order:** define H_O(X) = ∏_[a]∈Pic(O) (X − j(a)), using each proper invertible fractional ideal as a complex lattice. This is Cox’s “class equation”; it is the Hilbert class polynomial for O = O_K, and for f > 1 it is the ring class polynomial of O_f.
5. **thm-cm-class-polynomial-is-integral-and-irreducible-over-q:** H_O ∈ Z[X] is monic irreducible of degree h(O) = |Pic(O)|; its distinct roots are exactly the singular moduli j(a) as [a] ranges over Pic(O). The same roots can be indexed by R1’s primitive form classes.
6. **thm-singular-modulus-generates-the-ring-class-field:** for every proper fractional O-ideal a, K(j(a)) = K_O, the ring class field of O. In particular, for maximal O_K, K(j(O_K)) is the Hilbert class field.
7. **thm-ring-class-reciprocity-on-cm-singular-moduli:** if p is a prime of O_K coprime to f, arithmetic Artin sends j(a) to j(conjugate(p ∩ O_f) a). Equivalently the ideal-class automorphism σ_b acts by σ_b(j(a)) = j(conjugate(b) a). Since conjugation sends [b] to [b]⁻¹ in Pic(O_f), preserve this inverse-class action explicitly. Cox Lemma 5.19 uses arithmetic Frobenius x ↦ x^{N p}, the same convention as R2.

**B-page examples.** **ex-hilbert-class-polynomials-for-discriminants-minus-three-and-minus-four** computes H₋₃(X) = X and H₋₄(X) = X − 1728. The A-page elliptic-point corollary gives E₄(ω) = 0 and E₆(i) = 0, so the j-formula gives j(ω) = 0 and j(i) = 1728; reduction and the primitive-form bridge give one proper class for each discriminant. Thus both degree-one class polynomials and their class fields follow without a B-page supplier. **ex-conductor-one-ring-class-field-is-the-hilbert-class-field** specializes the quotient and Artin statements to f = 1.

**Source and proof status.** Cox, first edition (1989), Chapter II §8, Lemma 5.19 and proof, Chapter III §§9–11, and §13.A Proposition 13.2, is fully read for these exact contracts; the scan is image-only and the OCR/page locators are in r4-sources/README.md. Cox Theorem 11.1 establishes integrality and K(j(a)) = K_O; Proposition 13.2 supplies the product formula; Theorem 11.36 states the Artin action and cites Deuring/Lang/Cohn for its proof. The R4 local proof must (i) derive the P_{K,Z}(f) quotient with the global-unit image correct, (ii) prove the singular-modulus field-generation theorem from the modular-equation/Kronecker congruence and ray-class splitting steps, and (iii) author the ideal-action theorem from its cited proof source or a complete local argument. These are established claims with finite proof obligations, not open problems. Cox’s explicit Weber generators of general ray class fields (Theorem 11.39) and the class-polynomial computation algorithm are deferred.

### 18. CM types, reflex fields, and abelian-variety reciprocity

**Page pair:** **cm-types-reflex-fields-and-abelian-variety-reciprocity** / **cm-types-reflex-fields-and-abelian-variety-reciprocity-examples**.

**A-page contract.** The page depends on R2 global fields, idèles and global class field theory, the existing elliptic-functions-and-complex-tori complex-lattice supplier, groups-of-multiplicative-type-and-arithmetic-tori, the R3 abelian-variety/arithmetic-model suppliers, and the R4 galois-representations-and-frobenius Tate-module interface.

The ordered A-page items are:

1. **def-cm-algebra-and-cm-type:** a CM algebra E is a finite product of CM fields with its complex-conjugation involution; a CM type Φ chooses exactly one embedding in each conjugate pair, so |Φ| = [E:Q]/2. The associated CM pair is (E,Φ).
2. **def-reflex-field-and-reflex-type-of-a-cm-type:** in a Galois closure, the reflex field E* is the fixed field of the stabilizer of Φ; the reflex type Φ* is the induced CM type on E*. The definitions are made componentwise for a CM algebra where the source uses that extension.
3. **def-reflex-norm-associated-to-a-cm-type:** the reflex norm N_Φ : T_{E*} → T_E is the morphism of restriction-of-scalars tori attached to the reflex type. On finite idèles it is the continuous homomorphism N_Φ : A_{f,E*}× → A_{f,E}×, defined by the determinant construction in Milne §1; it sends E*× into E×.
4. **def-complex-abelian-variety-with-cm-type:** a g-dimensional complex abelian variety A with an embedding E ↪ End⁰(A), [E:Q] = 2g, has type (E,Φ) when the action on T₀A has the embedding characters in Φ.
5. **thm-complex-cm-abelian-varieties-classified-up-to-isogeny-by-cm-pairs:** isogeny classes of pairs (A,ι:E ↪ End⁰(A)) of CM type over C correspond to isomorphism classes of CM pairs (E,Φ); a simple CM abelian variety gives a primitive CM type. This is the complex classification, not an integral-model or moduli-stack classification.
6. **thm-shimura-taniyama-frobenius-ideal-factorization-for-cm-abelian-varieties:** let A be a CM abelian variety over a number field k, with CM algebra E, type Φ ⊂ Hom(E,k), k containing all conjugates of E, and End(A) ∩ E = O_E. At a prime P of good reduction such that p = P ∩ Z is unramified in E, the q-power Frobenius endomorphism of the reduction is induced by π ∈ O_E and

   (π) = ∏_(φ∈Φ) φ⁻¹(N_{k/φE}(P)),   q = |O_k/P|.

   This is the ideal-factorization theorem; it is not an unconditional formula at bad-reduction or ramified primes.
7. **thm-reflex-field-ideal-reciprocity-on-cm-torsion:** for A/C with CM by E, type Φ, End(A) ∩ E = O_E, and σ ∈ Aut(C/E*), there is an ideal a(σ) and an a(σ)-multiplication λ:A → σA acting as σ on A[m]. The ideal class in the corresponding ray class group C_m(E) is uniquely determined. For sufficiently divisible ray modulus m of E*, if σ|_{L_m} = Art(b), then [a(σ)] = [N_Φ(b)]. State the ray-modulus divisibility and source’s ideal-class convention exactly.
8. **thm-reflex-field-idele-reciprocity-on-cm-tate-modules:** for the same CM data and σ fixing E*, if s ∈ A_{f,E*}× satisfies Art_{E*}(s) = σ|_{E*ab}, there is a unique E-isogeny λ:A → σA such that λ(N_Φ(s)x) = σx for every x ∈ V_fA. Replacing s by another representative changes N_Φ(s) by E×, as required for the statement to be well defined.
9. **def-polarized-cm-type-uniformization:** type data (E,Φ;a,t) consist of the CM pair, a lattice ideal a ⊂ E, and t ∈ E× with conjugate(t) = −t and Im(φ(t)) > 0 for every φ ∈ Φ. In the E-coordinate determined by a basis e, the Riemann form is ψ(xe,ye) = Tr_{E/Q}(t x conjugate(y)). Replacing e by an E×-multiple changes the ideal/type data by (a,t) ↦ (a b,t/(b conjugate(b))); the tuple is not canonical.
10. **thm-fundamental-theorem-of-cm-over-q:** for a CM field E and CM type Φ, there is a canonical idele-class map f_Φ : Aut(C) → A_{f,E}×/E× with f_Φ(σ) conjugate(f_Φ(σ)) = χ_cyc(σ)E×. If A has type (E,Φ;a,t), then σA has type (E,σΦ; f_Φ(σ)a, tχ_cyc(σ)/(f_Φ(σ)conjugate(f_Φ(σ)))), and a uniformization can be chosen so the f_Φ(σ)-map on finite Tate modules corresponds to the action of σ on torsion. This is the classical theorem, with its local proof boundary explicitly retained below.

**B-page examples.** **ex-product-of-q-i-cm-elliptic-curves-with-product-cm-type** takes K = Q(i), A = (C/Z[i])², E = K × K acting diagonally on the two factors, and the type selecting the fixed embedding K ↪ C on both factors; then E* = K and N_Φ(a) = (a,a). **ex-reflex-reciprocity-for-the-standard-q-i-cm-type** takes E = E* = Q(i) and the standard type, for which N_Φ is the identity, and instantiates the reflex-field idèle statement.

**Source and proof status.** Milne’s preliminary 2020 notes, Chapter I §§1–3 and Chapter II §§6–10, were read in full for definitions, classification, good reduction, and theorem context. Milne’s 2007 author article was read in full. Theorem 2.1 (pp. 16–18), Theorem 3.2 (pp. 19–21), and Theorem 3.10 (pp. 22–24) include proofs and are the main local proof suppliers. Theorem 4.1/4.2 (pp. 26–27) is established but the end of the proof in §4 (pp. 31–32) invokes Deligne’s absolute-Hodge theorem; the cited 1982 source was not read here. The over-Q item therefore has that bounded proof gate and is not called locally proof-complete. Milne notes I.4–5 (Mumford–Tate groups, Serre groups, and CM motives), general CM-motive theory, and special-value conjectures are deferred; R5 owns the selected Iwasawa/special-value interfaces. No open problem is used as a logical supplier.
