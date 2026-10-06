# Step 6 Alpha group reader — read-only digest — group **b**, run `frontier-40-geometry-braids-rep-27`

- You are the read-only Step 6 Alpha group reader for batches **2**, **5**, **6**: 3 A/B pair(s), 6 page(s), 88 item(s).

- Read every owned item and every listed seam before returning the compact
  schema-constrained digest. That file, not this conversation, is the handoff
  to a fresh Step-7 adjudicator. No judge verdict is supplied here.
- Read items in dependency order across the group: suppliers before their
  direct and indirect consumers, including prerequisites outside the group.
- In the digest, `pages_read` is exactly the ids under **Your pages** and
  `items_read` exactly the ids under **Your content**. External items you
  open belong only in `published_dependencies`; never add them to those inventories.
- Everything below is derived from disk by `tools/step7-scope.mjs`; no line
  of it is a judgement about mathematics.

## Read scope

- **Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

- **This dispatch is read-only.** Record concerns about owned items and alerts
  about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `principal-series-representations-of-gl-n-over-a-finite-field` | A | representation-theory | 510.055 | `young-diagrams-tableaux-and-permutation-modules`, `specht-modules-and-the-irreducibles-of-the-symmetric-group`, `the-branching-rule-and-the-young-graph`, `the-hook-length-formula-and-rsk-correspondence`, `bruhat-decomposition-and-flags-over-finite-fields`, `induced-representations-and-frobenius-reciprocity`, `chain-conditions-and-semisimple-modules`, `polynomial-rings-and-roots`, `inverse-limits-and-noetherian-completion`, `modular-representations-and-projective-covers`, `braided-and-symmetric-monoidal-categories`, `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface`, `affine-algebraic-sets-and-coordinate-rings`, `dimension-constructible-images-and-dimensions-of-fibres`, `finite-weyl-invariants-bruhat-and-kostant-harmonics` |
| 2 | `principal-series-representations-of-gl-n-over-a-finite-field-examples` | B | representation-theory | 510.056 | `principal-series-representations-of-gl-n-over-a-finite-field` |
| 5 | `the-burau-representations` | A | braid-groups | 745 | `the-artin-action-on-a-free-group`, `covering-spaces-and-lifting`, `singular-chains-and-singular-homology`, `modules-over-a-pid-and-canonical-forms`, `garside-structure-normal-forms-and-the-center` |
| 5 | `the-burau-representations-examples` | B | braid-groups | 746 | `the-burau-representations` |
| 6 | `hecke-markov-traces-and-polynomial-link-invariants` | A | braid-groups | 751 | `oriented-links-braid-closures-and-markov-equivalence`, `the-burau-representations`, `principal-series-representations-of-gl-n-over-a-finite-field`, `modules-over-a-pid-and-canonical-forms`, `chern-and-pontryagin-classes-by-splitting-and-complexification`, `quasi-coherent-and-coherent-sheaves-and-vector-bundles`, `normalization-finiteness-for-affine-domains` |
| 6 | `hecke-markov-traces-and-polynomial-link-invariants-examples` | B | braid-groups | 752 | `hecke-markov-traces-and-polynomial-link-invariants` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `principal-series-representations-of-gl-n-over-a-finite-field` — Principal Series Representations of Gl N over a Finite Field (30 item(s))

- `def-diagonal-torus-characters-and-weyl-action` · definition — Diagonal torus characters and the Weyl action
- `lem-lifting-idempotents-in-complete-deformation-algebras` · lemma — Idempotents lift through adically complete quotients
- `lem-trace-form-nondegeneracy-characterizes-semisimple-finite-dimensional-algebras` · lemma — The trace form detects semisimplicity over the complex numbers
- `lem-constituent-multiplicities-under-a-semisimple-endomorphism-algebra` · lemma — Constituent multiplicities are dimensions of simple modules over the endomorphism algebra
- `def-generic-type-a-hecke-algebra` · definition — The generic type-A Hecke algebra
- `def-principal-series-module-for-finite-gl-n` · definition — The principal series module of GL_n over a finite field
- `thm-standard-basis-of-the-generic-type-a-hecke-algebra` · theorem — The standard basis of the generic type-A Hecke algebra
- `lem-formal-triviality-of-one-parameter-semisimple-algebras` · lemma — Formal triviality of a semisimple one-parameter deformation
- `lem-spherical-principal-series-is-the-flag-permutation-module` · lemma — The spherical principal series is the flag permutation module
- `lem-mackey-support-for-homs-between-finite-principal-series` · lemma — Mackey support for homomorphisms between principal series
- `thm-weyl-stabilizer-controls-principal-series-endomorphisms` · theorem — The Weyl stabiliser controls the endomorphisms of a principal series
- `thm-finite-hecke-algebra-as-convolution-corner-and-endomorphisms` · theorem — The finite Hecke algebra as a convolution corner of the group algebra
- `cor-regular-finite-principal-series-is-irreducible` · corollary — A principal series with regular character is irreducible
- `def-bruhat-double-coset-basis-of-the-finite-hecke-algebra` · definition — The Bruhat double coset basis of the finite Hecke algebra
- `lem-principal-series-endomorphisms-as-the-chi-idempotent-corner` · lemma — Principal series endomorphisms as an idempotent corner
- `lem-length-increasing-hecke-products` · lemma — Length-additive products in the finite Hecke algebra
- `lem-rank-one-hecke-quadratic-relation` · lemma — The rank-one quadratic relation in the finite Hecke algebra
- `lem-semisimplicity-and-trace-form-for-the-finite-spherical-hecke-algebra` · lemma — The finite spherical Hecke algebra is semisimple with nondegenerate trace form
- `def-standard-intertwining-operators-for-finite-principal-series` · definition — Standard intertwining operators for the finite principal series
- `thm-type-a-iwahori-hecke-presentation` · theorem — The type-A Iwahori-Hecke presentation of the finite Hecke algebra
- `lem-standard-intertwiners-form-a-basis-of-the-principal-series-endomorphism-algebra` · lemma — The standard intertwiners form a basis of the principal series endomorphism algebra
- `lem-equal-coordinate-rank-one-principal-series-of-gl2-fq` · lemma — The equal-coordinate rank-one principal series of GL_2
- `prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra` · proposition — Group algebra and finite-field specializations of the generic Hecke algebra
- `lem-length-additive-products-of-standard-intertwiners` · lemma — Length-additive products of the standard intertwiners
- `thm-tits-deformation-for-the-type-a-hecke-algebra` · theorem — Tits deformation for the type-A Hecke algebra
- `lem-rank-one-hecke-parameter-for-equal-torus-characters` · lemma — The rank-one Hecke parameter for equal torus characters
- `cor-type-a-finite-hecke-algebra-is-noncanonically-isomorphic-to-csn` · corollary — The finite Hecke algebra is non-canonically isomorphic to the group algebra of S_n
- `thm-general-finite-principal-series-endomorphism-algebra` · theorem — The endomorphism algebra of a general finite principal series
- `thm-spherical-principal-series-constituents-of-gl-n-fq` · theorem — The constituents of the spherical principal series of GL_n
- `cor-constituents-of-general-principal-series-for-finite-gl-n` · corollary — The constituents of a general finite principal series

### `principal-series-representations-of-gl-n-over-a-finite-field-examples` — Principal Series Representations of Gl N over a Finite Field — Examples (5 item(s))

- `ex-two-dimensional-hecke-algebra-for-gl2-fq` · example — The two-dimensional Hecke algebra for GL_2(F_q)
- `ex-trivial-and-steinberg-splitting-on-p1-fq` · example — The trivial and Steinberg splitting on P^1(F_q)
- `ex-q-equals-two-torus-boundary` · example — The q=2 torus boundary
- `ex-regular-and-singular-torus-characters-in-gl3-fq` · example — Regular and singular torus characters in GL_3(F_q)
- `rem-tits-isomorphism-is-noncanonical` · remark — The Tits isomorphism is non-canonical

### `the-burau-representations` — The Burau Representations (22 item(s))

- `def-total-winding-homomorphism-of-the-punctured-disk` · definition — The total winding homomorphism of the punctured disk
- `lem-the-punctured-disk-is-path-connected-locally-path-connected-and-semilocally-simply-connected` · lemma — The punctured disk is path-connected, locally path-connected and semilocally simply connected
- `def-the-laurent-polynomial-ring` · definition — The Laurent polynomial ring as the principal localisation of Z[t] at t
- `lem-units-and-powers-of-the-laurent-polynomial-ring` · lemma — Units, powers and the domain property of the Laurent polynomial ring
- `def-burau-infinite-cyclic-cover` · definition — The Burau infinite cyclic cover
- `def-reduced-burau-homology-module` · definition — The reduced Burau homology module
- `def-unreduced-burau-relative-homology-module` · definition — The unreduced Burau relative homology module
- `lem-the-cyclic-cover-deformation-retracts-onto-the-lifted-flower-and-spine` · lemma — The cyclic cover retracts onto the lifted flower and has a deck-equivariant spine model
- `lem-the-reduced-burau-module-is-free-of-rank-n-minus-one` · lemma — The reduced Burau module is free of rank n minus one
- `lem-braid-mapping-classes-lift-equivariantly-to-the-burau-cover` · lemma — Braid mapping classes lift equivariantly to the Burau cover
- `def-reduced-burau-representation` · definition — The reduced Burau representation
- `def-unreduced-burau-matrices` · definition — The unreduced Burau matrices
- `lem-unreduced-burau-matrices-satisfy-the-artin-relations` · lemma — The unreduced Burau matrices satisfy the Artin relations
- `lem-the-invariant-vector-and-covector-of-the-unreduced-burau` · lemma — The invariant vector and the invariant covectors of the unreduced Burau
- `prop-unreduced-burau-fits-an-exact-sequence-with-the-reduced-module` · proposition — The unreduced module fits an exact sequence with the reduced module
- `lem-the-geometric-half-twist-acts-on-the-lifted-edge-basis-by-the-burau-block` · lemma — The geometric half twist acts on the lifted-edge basis by the Burau block
- `thm-topological-and-matrix-burau-representations-agree` · theorem — The topological and matrix Burau representations agree
- `prop-reduced-and-unreduced-burau-representations-have-the-same-kernel` · proposition — The reduced and unreduced Burau representations have the same kernel
- `lem-the-minus-one-specialization-of-three-strand-burau-has-kernel-generated-by-delta-to-the-fourth` · lemma — The minus-one specialization of three-strand Burau has kernel generated by Delta to the fourth
- `lem-reduced-burau-detects-every-power-of-delta-to-the-fourth-in-b-three` · lemma — The reduced Burau representation detects every power of the fourth power of the half twist in B3
- `thm-reduced-burau-is-faithful-for-at-most-three-strands` · theorem — The reduced Burau representation is faithful for at most three strands
- `rem-current-faithfulness-status-of-the-reduced-burau-representation` · remark — Current faithfulness status of the reduced Burau representation

### `the-burau-representations-examples` — The Burau Representations — Examples (4 item(s))

- `ex-unreduced-and-reduced-burau-matrices-for-b-three` · example — Unreduced and reduced Burau matrices for three strands
- `ex-the-burau-image-of-the-full-twist` · example — The image of the full twist under the Burau representation
- `ex-specializing-burau-at-t-equals-one-recovers-permutation-data` · example — Specializing Burau at t = 1 recovers permutation data
- `cex-an-invariant-line-need-not-have-an-invariant-complement-over-a-laurent-ring` · counterexample — An invariant line need not have an invariant complement over a Laurent ring

### `hecke-markov-traces-and-polynomial-link-invariants` — Hecke Markov Traces and Polynomial Link Invariants (23 item(s))

- `def-markov-trace-on-the-type-a-hecke-tower` · definition — The Markov trace on the type-A Hecke tower
- `lem-the-hecke-tower-is-free-over-the-previous-level` · lemma — The Hecke tower is free over the previous level
- `thm-the-ocneanu-markov-trace-exists-and-is-unique` · theorem — The Ocneanu Markov trace exists and is unique
- `lem-the-markov-trace-of-an-inverse-hecke-generator` · lemma — The Markov trace of an inverse Hecke generator
- `def-exponent-sum-of-a-braid` · definition — The exponent sum of a braid
- `lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units` · lemma — The Hecke generators satisfy the Artin relations and are units
- `def-the-homflypt-coefficient-ring` · definition — The HOMFLYPT coefficient ring
- `def-homflypt-polynomial-from-the-hecke-markov-trace` · definition — The HOMFLYPT polynomial from the Hecke Markov trace
- `thm-the-hecke-trace-construction-is-an-oriented-link-invariant` · theorem — The Hecke trace construction is an oriented link invariant
- `thm-the-homflypt-skein-relation` · theorem — The HOMFLYPT skein relation
- `def-temperley-lieb-quotient-and-jones-specialization` · definition — The Temperley-Lieb quotient and the Jones specialization
- `lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold` · lemma — The complement of an oriented link is a connected smooth three-manifold
- `def-one-variable-alexander-module-of-an-oriented-link` · definition — The one-variable Alexander module of an oriented link
- `lem-the-alexander-module-of-a-link-complement-is-finitely-presented` · lemma — The Alexander module of a link complement is finitely presented
- `lem-the-laurent-polynomial-ring-is-noetherian-and-a-unique-factorisation-domain` · lemma — The Laurent polynomial ring is Noetherian and a unique factorisation domain
- `def-elementary-ideals-of-a-finitely-presented-module` · definition — Elementary ideals of a finitely presented module
- `lem-elementary-ideals-are-independent-of-the-presentation` · lemma — Elementary ideals are independent of the presentation
- `def-alexander-polynomial-from-the-first-elementary-ideal` · definition — The Alexander polynomial from the zeroth elementary ideal
- `thm-the-alexander-polynomial-is-an-oriented-link-invariant` · theorem — The Alexander polynomial is an oriented link invariant
- `def-coloured-reduced-burau-matrix` · definition — The coloured reduced Burau matrix
- `lem-the-deficiency-one-fox-calculus-determinant-rule` · lemma — The deficiency-one Fox calculus rule for the Alexander invariant
- `thm-the-burau-determinant-formula-for-a-closed-braid-and-its-axis` · theorem — The Burau determinant formula for a closed braid and its axis
- `prop-burau-determinant-recovers-the-alexander-polynomial-of-a-closed-braid` · proposition — The Burau determinant recovers the Alexander polynomial of a closed braid

### `hecke-markov-traces-and-polynomial-link-invariants-examples` — Hecke Markov Traces and Polynomial Link Invariants — Examples (4 item(s))

- `ex-the-hecke-trace-skein-calculation-for-a-three-crossing-braid` · example — The Hecke trace skein calculation for a three-crossing braid
- `ex-the-burau-determinant-for-a-two-strand-torus-link` · example — The Burau determinant for a two-strand torus link
- `ex-the-jones-specialization-of-a-two-strand-closure` · example — The Jones specialization of a two-strand closure
- `cex-an-unnormalized-hecke-trace-is-not-markov-invariant` · counterexample — An unnormalized Hecke trace is not Markov invariant

## Your seams

Another group's pages depend on yours:

- `matrix-factorizations-and-khovanov-rozansky-link-homology` (group d) requires your `hecke-markov-traces-and-polynomial-link-invariants`
- `categorical-braid-actions-and-decategorification` (group f) requires your `the-burau-representations`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-40-geometry-braids-rep-27`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
