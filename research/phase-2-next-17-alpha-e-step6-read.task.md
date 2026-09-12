# Step 6 whole-group reading — group **e**, run `phase-2-next-17`

You are the group Alpha for batches **8**, **9**: 3 A/B pair(s), 6 page(s), 60 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-7 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 8 | `affine-lie-algebras-and-loop-central-extensions` | A | lie-theory | 510.025 | `kac-moody-algebras-from-generalized-cartan-matrices`, `finite-weyl-invariants-bruhat-and-kostant-harmonics` |
| 8 | `affine-lie-algebras-and-loop-central-extensions-examples` | B | lie-theory | 510.026 | `affine-lie-algebras-and-loop-central-extensions` |
| 8 | `the-weyl-kac-character-formula` | A | lie-theory | 510.029 | `kac-moody-algebras-from-generalized-cartan-matrices`, `affine-lie-algebras-and-loop-central-extensions`, `integrable-highest-weight-kac-moody-modules` |
| 8 | `the-weyl-kac-character-formula-examples` | B | lie-theory | 510.03 | `the-weyl-kac-character-formula` |
| 9 | `brauers-first-main-theorem` | A | representation-theory | 510.061 | `blocks-defect-groups-and-the-brauer-homomorphism`, `vertices-sources-and-the-green-correspondence`, `modular-representations-and-projective-covers`, `brauer-characters-and-decomposition-matrices` |
| 9 | `brauers-first-main-theorem-examples` | B | representation-theory | 510.062 | `brauers-first-main-theorem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `affine-lie-algebras-and-loop-central-extensions` — Affine Lie Algebras and Loop Central Extensions (15 item(s))

- `def-loop-algebra-of-a-simple-lie-algebra` · definition — Loop algebra of a simple Lie algebra
- `def-residue-two-cocycle-on-a-loop-algebra` · definition — Residue two cocycle on a loop algebra
- `lem-the-loop-residue-form-is-alternating` · lemma — The loop residue form is alternating
- `lem-the-loop-residue-form-satisfies-the-lie-two-cocycle-identity` · lemma — The loop residue form satisfies the Lie two cocycle identity
- `def-untwisted-affine-central-extension` · definition — Untwisted affine central extension
- `def-degree-derivation-and-full-untwisted-affine-algebra` · definition — Degree derivation and full untwisted affine algebra
- `prop-the-derived-affine-algebra-omits-only-the-degree-derivation` · proposition — The derived affine algebra omits only the degree derivation
- `def-null-root-central-coroot-and-affine-level` · definition — Null root, central coroot, and affine level
- `lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root` · lemma — The affine simple root alpha zero is delta minus the highest root
- `thm-loop-and-affine-gcm-presentations-are-isomorphic` · theorem — Loop and affine GCM presentations are isomorphic
- `prop-affine-weyl-group-is-a-coroot-lattice-semidir-product` · proposition — Affine Weyl group is a coroot lattice semidirect product
- `prop-roots-of-an-untwisted-affine-lie-algebra` · proposition — Roots of an untwisted affine Lie algebra
- `def-evaluation-module-at-nonzero-loop-parameter` · definition — Evaluation module at a nonzero loop parameter
- `prop-evaluation-modules-have-level-zero-and-do-not-extend-canonically-over-d` · proposition — Evaluation modules have level zero and do not extend canonically over d
- `def-twisted-loop-algebra-from-a-diagram-automorphism` · definition — Twisted loop algebra from a diagram automorphism

### `affine-lie-algebras-and-loop-central-extensions-examples` — Affine Lie Algebras and Loop Central Extensions — Examples (6 item(s))

- `ex-affine-sl2-mode-brackets` · example — Affine sl2 mode brackets
- `ex-the-heisenberg-subalgebra-of-an-affine-lie-algebra` · example — The Heisenberg subalgebra of an affine Lie algebra
- `ex-the-affine-a1-simple-roots-and-gcm` · example — The affine A1 simple roots and GCM
- `ex-an-evaluation-module-for-affine-sl2` · example — An evaluation module for affine sl2
- `cex-omitting-the-central-term-breaks-the-affine-gcm-bracket` · counterexample — Omitting the central term breaks the affine GCM bracket
- `cex-the-residue-cocycle-depends-on-invariant-form-normalization` · counterexample — The residue cocycle depends on invariant form normalization

### `the-weyl-kac-character-formula` — The Weyl Kac Character Formula (16 item(s))

- `def-kac-moody-formal-character-completion` · definition — Kac Moody formal character completion
- `def-kac-moody-weyl-vector` · definition — Kac Moody Weyl vector
- `def-kac-moody-denominator-product-with-root-multiplicities` · definition — Kac Moody denominator product with root multiplicities
- `lem-the-kac-moody-denominator-is-weyl-skew` · lemma — The Kac Moody denominator is Weyl skew
- `lem-casimir-constrained-verma-character-expansion` · lemma — Casimir constrained Verma character expansion
- `lem-the-denominator-quotient-has-only-imaginary-cone-support` · lemma — The denominator quotient has only imaginary cone support
- `lem-casimir-norm-excludes-nonzero-denominator-corrections` · lemma — Casimir norm excludes nonzero denominator corrections
- `thm-kac-moody-denominator-identity` · theorem — Kac Moody denominator identity
- `lem-the-shifted-integrable-character-numerator-is-weyl-skew` · lemma — The shifted integrable character numerator is Weyl skew
- `lem-only-the-highest-dot-orbit-can-occur-in-the-integrable-numerator` · lemma — Only the highest dot orbit can occur in the integrable numerator
- `thm-weyl-kac-character-formula` · theorem — Weyl Kac character formula
- `def-generalized-kostant-partition-function` · definition — Generalized Kostant partition function
- `cor-kac-moody-kostant-multiplicity-formula` · corollary — Kac Moody Kostant multiplicity formula
- `cor-weyl-kac-specializes-to-the-finite-weyl-character-formula` · corollary — Weyl Kac specializes to the finite Weyl character formula
- `prop-affine-denominator-separates-real-and-imaginary-root-factors` · proposition — Affine denominator separates real and imaginary root factors
- `rem-weyl-kac-products-are-formal-not-analytic-identities-here` · remark — Weyl Kac products are formal not analytic identities here

### `the-weyl-kac-character-formula-examples` — The Weyl Kac Character Formula — Examples (4 item(s))

- `ex-finite-a1-specialization-of-weyl-kac` · example — Finite A1 specialization of Weyl Kac
- `ex-real-and-imaginary-factors-in-the-affine-sl2-denominator` · example — Real and imaginary factors in the affine sl2 denominator
- `ex-first-weight-layers-of-the-basic-affine-sl2-character` · example — First weight layers of the basic affine sl2 character
- `cex-using-multiplicity-one-for-imaginary-roots-gives-the-wrong-affine-denominator` · counterexample — Using multiplicity one for imaginary roots gives the wrong affine denominator

### `brauers-first-main-theorem` — Brauers First Main Theorem (15 item(s))

- `thm-modular-block-central-characters-correspond-to-blocks` · theorem — Modular block central characters correspond to blocks
- `def-induced-block-from-a-subgroup` · definition — A block induced from a subgroup
- `lem-induced-blocks-have-controlled-defect` · lemma — Induced blocks have controlled defect
- `lem-block-induction-exists-under-centralizer-containment` · lemma — Centralizer containment makes block induction well-defined
- `lem-block-induction-is-transitive` · lemma — Block induction is transitive when both stages are defined
- `lem-block-idempotents-are-fixed-by-normal-p-subgroup-brauer-projection` · lemma — Normal p-subgroups fix block idempotents under Brauer projection
- `lem-first-main-theorem-local-block-existence` · lemma — A global block of defect D determines a local block of defect D
- `lem-first-main-theorem-surjectivity` · lemma — Every local full-defect block induces to a global block of defect D
- `lem-first-main-theorem-injectivity` · lemma — Distinct local full-defect blocks induce to distinct global blocks
- `thm-brauer-first-main-theorem` · theorem — Brauer's First Main Theorem
- `def-brauer-correspondent-of-a-block` · definition — The Brauer correspondent of a block
- `thm-corresponding-block-bimodules-are-green-correspondents` · theorem — Corresponding block bimodules are Green correspondents
- `lem-tensoring-preserves-relative-projectivity-for-finite-group-modules` · lemma — Tensoring preserves relative projectivity for finite-group modules
- `thm-brauer-green-nagao-block-compatibility` · theorem — Brauer–Green block compatibility
- `cor-every-block-has-an-indecomposable-module-of-full-defect-vertex` · corollary — Every block contains a module whose vertex is a full defect group

### `brauers-first-main-theorem-examples` — Brauers First Main Theorem — Examples (4 item(s))

- `ex-brauer-correspondence-in-s7` · example — Brauer correspondence for a defect-D8 block of S7 in characteristic 2
- `ex-brauer-correspondence-for-sl2-over-fp` · example — Brauer correspondence for SL2(Fp) in defining characteristic
- `cex-centralizer-containment-is-not-necessary-for-block-induction` · counterexample — Centralizer containment is sufficient but not necessary
- `ex-defect-one-first-main-theorem-boundary` · example — The trivial-defect-group and identity-normalizer boundaries

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 — group reading digest, `phase-2-next-17`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
