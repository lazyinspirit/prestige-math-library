# Shard 07 read-only plan review

This review compares `plan-validation-before.txt` with
`plan-validation-preseal.txt` and checks the current item dependency graph
against the reconstructed baseline in `baseline-reconstruction.json`. It makes
no item, page, or plan changes. The baseline is a reconstruction of frozen
snapshots and preserved dirty files, **not** a clean Git baseline.

## Validator delta

The before report has 18 errors. Four duplicate-home errors have since been
resolved by approved rehomes, leaving a normalized baseline of 14. The preseal
report has 26 errors: 12 new diagnostics and those same 14 old diagnostics.
Three of the 12 are stale planned B-page dependencies on
`ex-sl2-verma-action-in-the-pbw-basis` in
`ex-sl2-verma-embedding-chain`,
`ex-the-regular-integral-sl2-block-of-category-o`, and
`ex-a-generic-sl2-block-is-semisimple`. Their current item frontmatter and
proofs already use direct A-page PBW suppliers instead. Syncing just these
three planned item dependency lists with the current frontmatter clears the
three B-leaf errors without deleting a valid current dependency.

The other nine new diagnostics are eight undeclared-prerequisite reports in
the Lie sequence and one four-page cycle. The current and reconstructed
baseline item graphs have **exactly the same 93 inter-page dependency edges**
among the four cycle pages: 93 before, 93 now, zero added, zero removed. Both
`depcheck-reconstructed-before.json` and `depcheck-after-rehomes.json` report
the same SCC:

`harish-chandra-isomorphism-casimir-and-central-characters` →
`homomorphisms-between-verma-modules-and-linkage` →
`verma-modules-and-shapovalov-forms` →
`category-o-finiteness-duality-and-blocks` → the first page.

The eight newly reported undeclared item-to-page edges likewise existed in
the reconstructed baseline. The plan validator has newly exposed older
dependency/order debt; the A–P repairs did not introduce those mathematical
edges. The 93-edge comparison used current `research/plan-spec.json` item homes
for these four unchanged Lie pages and parsed `deps` from their item files in
the current tree and `/tmp/ap319-baseline-xo02ods3/items` respectively.

## Three safe `requires` additions

These three root-owned plan changes declare genuine, earlier prerequisites and
do not add a requires cycle:

| Page | Add `requires` | Concrete item dependency |
| --- | --- | --- |
| `finite-weyl-invariants-bruhat-and-kostant-harmonics` (510.0002) | `cartan-subalgebras-and-root-space-decompositions` (501) | `lem-local-chevalley-restriction-for-kostant-freeness` → `thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras` |
| `harish-chandra-isomorphism-casimir-and-central-characters` (510.001) | `holomorphic-inverse-and-weierstrass-preparation` (353) | `lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction` → `thm-holomorphic-inverse-function-theorem-several-variables` |
| `homomorphisms-between-verma-modules-and-linkage` (510.005) | `highest-weight-theory-for-complex-semisimple-lie-algebras` (505) | `cor-antidominant-verma-modules-are-simple` → `prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system`; `thm-jantzen-sum-formula-for-a-verma-module` → `prop-weyl-vector-is-the-sum-of-fundamental-weights` |

The highest-weight page already requires
`root-systems-dynkin-diagrams-and-cartan-killing-classification` (503), so the
third addition also closes the separately reported root-systems prerequisite.
No fourth direct `requires` edge is necessary.

## Five inherited Lie diagnostics that remain

The four undeclared backward edges below cannot be converted mechanically to
`requires` at their current page positions:

1. HC A (510.001) → Homomorphisms A (510.005):
   `thm-harish-chandra-isomorphism-for-the-center` depends on
   `lem-simple-root-singular-vector-in-a-verma-module`.
2. HC examples B (510.002) → Homomorphisms A (510.005):
   `ex-dot-conjugate-weights-have-the-same-central-character` and
   `cex-unshifted-weyl-orbits-do-not-classify-central-characters` depend on
   that singular-vector lemma.
3. The same HC examples B (510.002) → Verma A (510.003): both examples
   depend on `thm-universal-property-of-verma-modules`.
4. Homomorphisms A (510.005) → Category O A (510.007):
   `lem-verma-embedding-implies-strong-linkage` depends on
   `thm-every-category-o-object-has-finite-length`, and
   `prop-verma-composition-multiplicities-are-finite` depends on two
   Category O results.

The fifth diagnostic is the already present four-page cycle. In the current
item graph, HC A → Homomorphisms A has 1 edge; Homomorphisms A → Verma A has
20; Verma A → HC A has 11. Homomorphisms A → Category O A has 3, while
Category O A → Homomorphisms A has 3. These bidirectional paths show why
adding the four backward page `requires` would create declared cycles or
forward-order violations. A coherent item/page reordering would need separate
proof-level review. The minimal bounded reconciliation is the three safe
`requires` additions, the three stale B-leaf plan syncs, and an explicit
record that these five Lie diagnostics are inherited. That predicts 19 hard
errors: 14 prior normalized errors plus these five.
