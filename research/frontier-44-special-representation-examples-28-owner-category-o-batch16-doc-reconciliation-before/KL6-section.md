## KL-6 — Parabolic category O and Fock-space bases

**Requires:** KL-5, `balanced-triples-and-global-crystal-bases`,
`grothendieck-groups-and-graded-cartan-pairings`, and
`young-diagrams-tableaux-and-permutation-modules`.

| proposed item | exact content and proof joint |
|---|---|
| `def-higher-level-wedge-tensor-fock-module` | Fix finite type-A tensor factors, column-strict tableaux, charge, and the standard monomial basis. |
| `thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis` | Construct each finite wedge quotient and, in the unbounded case, the stabilized direct limit; prove the normally ordered wedges and their column tensor products are a basis and that the quantum-group action is well defined weightwise. |
| `thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations` | Consume QG-5's `thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules`: its scope is finite tensor products of based integrable finite-weight-space type-A modules, with weightwise finite quasi-R action, involutive compatible bar, integral-lattice preservation, parenthesization independence, and locally finite dominance triangularity. Prove here that the column monomials meet those hypotheses and that the truncation embeddings commute with bar, so the unbounded direct limit carries a well-defined compatible bar. QG-5 does not supply this semi-infinite/direct-limit step. |
| `def-dual-canonical-canonical-and-quasi-canonical-fock-bases` | Define all four through one fixed pairing/bar convention; none are synonyms. |
| `thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix` | Match tableau permutations and Deodhar polynomials exactly. |
| `thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule` | Project the column monomial basis to the highest-weight constituent, prove the straightening/standard-monomial theorem in bounded type A, and pass through the truncation direct limit. This may not be inferred from the dimension of the category-O Grothendieck group. |
| `def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality` | Specify `gl_N`, standard parabolic/Levi, integral block, and its tableau labels. |
| `def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks` | Split tensoring with the natural and dual modules by generalized central character, and specify the residue/weight indexing and adjunction shifts. |
| `thm-residue-translation-functors-give-the-integrable-fock-space-action` | Verify the Chevalley and Serre relations on Grothendieck groups from their action on generalized Verma flags, then prove integrability and identify the highest vector. An action on labels alone is insufficient. |
| `thm-the-parabolic-o-grothendieck-group-is-the-integral-fock-module` | Standards map to monomials; functor action matches Chevalley operators. |
| `def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category` | Define tiltings by simultaneous standard and costandard filtrations, with the highest-weight-poset support conditions needed for uniqueness. |
| `thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o` | Construct the unique indecomposable tilting of each highest weight by successive universal extensions and duality; prove every tilting splits as their sum. |
| `def-the-ringel-dual-of-a-finite-highest-weight-ideal` | Take the opposite endomorphism algebra of a full tilting generator and prove the reversed-poset highest-weight structure before using Ringel duality. |
| `thm-type-a-parabolic-category-o-ringel-duality-via-the-opposite-parabolic` | Use Arkhipov's longest-element twisting functor to identify standard-filtered objects in the opposite parabolic category with costandard-filtered objects in the original one, send opposite projectives to tiltings, and pass compatibly through finite block ideals. This is the supplier for the canonical/quasi-canonical exchange. |
| `thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases` | Use KL-5, BGG reciprocity and the preceding proved Ringel self-duality to map simples to dual-canonical, projectives to quasi-canonical, and tiltings to canonical. |
| `lem-the-fock-pairing-matches-projective-simple-and-standard-costandard-pairings` | Track all dual and bar normalizations. |
| `thm-the-highest-weight-fock-submodule-has-the-qg-global-bases` | Compare the KL-defined bases to QG-5 by bar invariance, triangularity and pairing uniqueness. |

**B companion:** `parabolic-category-o-and-fock-space-bases-examples`.

