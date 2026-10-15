# Batch 4 scaffold notes — Complex Subspace Realification

## Inventory and levels

The batch owns one A supplier, lem-complex-normed-subspace-realifies-to-real-normed-subspace, and one B example, ex-complex-line-realification-basis-in-c2. Both pages remain draft. The A item depends on the level-1 subspace-definition and norm-realification suppliers, plus the level-0 complex norm definition, so its item dependency_level is 2. The B example depends on the A item at level 2 and batch-2 norm suppliers at levels 0 and 1, so its item level is 3. The batch-level scheduling label remains 1 as recorded in quantum-prerequisites-4-2026-10-15-batch-dependency-levels.json; batch and item levels are distinct.

The batch-2 supplier IDs and levels come from its current manifest: def-complex-norm-and-complex-normed-space is level 0; lem-complex-norm-realification-is-a-real-norm, lem-complex-coordinate-l1-is-a-norm, and def-complex-normed-subspace are level 1. The scoped run-wide item-dependency-level check passed with 18 items across 8 pages and maximum level 4, including the batch-4 levels 2 and 3.

The dispatched task records the original scheduling input hash `7a9fade1c2973db63bbee55b192c95d09e7ce7b6ed822c4443021691462ffe49`. Adding explicit external proof dependencies changed the manifest input digest, so I recomputed the derived batch-level file; its current `input_sha256` is `d9174154aaaa8f6f5f86c2cdb144b99a242cff567340bb268e8e03f1478e04b6`. The batch graph itself is unchanged: batch 4 remains level 1 and requires batch 2; no cycle was found. The old task hash remains dispatch history and was not edited.

## Plan/spec comparison

The batch-4 manifest row, owner page-rows.json, and plan-spec.json agree on order 479.1, title, category functional-analysis, companion, and page prerequisites. The A page requires complex-norms-and-realification and normed-and-banach-spaces; the B page requires the A page.

Plan-spec.json rows `.pages[2269]` and `.pages[2270]` have empty `items` arrays, while the approved design at L119–143 and the assigned scaffold require one A lemma and a nonempty B example. I used the explicit design inventory and recorded manifest rather than interpreting those pre-authoring empty arrays as permission to omit the assigned items; the canonical plan remains owner-controlled.

The plan's A-item dependency list names def-complex-normed-subspace, def-realification-of-a-complex-vector-space, lem-complex-norm-realification-is-a-real-norm, def-normed-subspace, and def-linear-basis. The carrier also directly depends on def-complex-norm-and-complex-normed-space for all three complex norm axioms, def-linear-subspace for the closure conditions, def-linear-combination-and-span and lem-span-is-the-set-of-linear-combinations for the finite coefficient representation, def-linear-independence for the relation test, def-vector-space for the regrouping/distributivity laws, lem-independent-list-is-injective to obtain the ordered-basis interface, and thm-complex-numbers-are-the-real-coordinate-plane for unique real/imaginary coordinates. The B example directly uses the norm, vector-space, independent-list, and zero-scalar suppliers as well. These are explicit proof inputs omitted from the short design dependency list; they are retained in the authored carriers and scaffold manifest for mathematical completeness and owner reconciliation. No claim or proof route was narrowed.

## Supplier checks and unresolved work

Actual published suppliers read and checked for their uses: def-realification-of-a-complex-vector-space, def-normed-subspace, def-linear-subspace, def-linear-basis, thm-complex-numbers-are-the-real-coordinate-plane, and lem-complex-conjugation-and-modulus-laws. The finite-basis proof uses unique real/imaginary coordinates, groups each real relation into a complex relation, checks injectivity, and handles the empty basis explicitly. It assumes a finite ordered basis is supplied and uses no choice.

The actual batch-2 carriers are now present and were read in full. The complex norm definition explicitly requires finite real values, separation, triangle inequality, and homogeneity for every complex scalar. The complex normed-subspace definition gives the restricted norm; this proof checks all three norm axioms locally before applying the realification lemma. The realification lemma's complete proof inherits separation and triangle, uses the real-embedding modulus identity for real homogeneity, and preserves the induced metric. I read and checked the modulus-restriction proof and its absolute-value/square-root inputs. The coordinate-l1 proof handles n=0, arbitrary complex scalars, modulus subadditivity, and finite-sum monotonicity/additivity. The published vector-space and independent-list results used for the finite-basis details were also read and checked. The actual complex-norm page and all expected A suppliers are present. Batch-2 source-fetch-check evidence reports both references fetch-verified. These are supplier-body and interface checks, not independent acceptance of batch 2.

The A and B cross-batch dependency rows are marked verified after inspecting the current page and item carriers, checking the exact interfaces against this proof, and verifying source stamps. Their independent review and acceptance remain with the run's later stages.

The B item's Step-1 readiness record has a wording typo in its reason: it says “C-supremum norm”; the carrier uses the coordinate $\ell^1$ norm $N(z_1,z_2)=|z_1|+|z_2|$. The example statement, verification, proof contract, and manifest all use the coordinate $\ell^1$ norm. `step1-decisions.mjs` protects an unchanged ready record from non-owner replacement, so the decision record was left intact; this note records the precise correction for the owner.

## Sources

Two independent full-text treatments were inspected for the A page:

- Tomasz Kochanek, Functional Analysis, Lecture 1, PDF p. 1, Definition 1.1 and the induced metric discussion. The full five-page lecture text was inspected at research/quantum-build-60-2026-10-15-owner/norms/sources/lecture1.txt.
- M. S. Moslehian et al., “Similarities and differences between real and complex Banach spaces,” Section 2.1, PDF p. 5 / journal p. 88. The full-text PDF metadata and the complete real-versus-complex linear-space section were inspected.

The first supports the real/complex norm and induced metric conventions. The second states scalar restriction and the finite basis conversion. Neither is used in place of the local proof. The initial batch-4 source-fetch-check --stamp recorded both sources as newly stamped; a current scoped `--stamp` check returned 2/2 fetch-verified with 0 newly stamped, reusing those existing stamps. The stamps and exact item support are recorded in the batch coverage file. No retrieval failure occurred during inspection.

## Scoped checks

After the final item edits, the assigned scope checks returned:

- `node tools/tsx-run.mjs tools/precheck.mts <two item files> --json`: exit 0, two checked, zero failures.
- `node tools/rendercheck.mjs --json <two item files> <two page files>`: exit 0, four checked, no errors or warnings.
- `node tools/depcheck.mjs --items-file /tmp/quantum-prerequisites-4-2026-10-15-batch4-items.json --json`: exit 0, focused on the two assigned items and their dependency closure; zero errors or warnings, 291 prerequisite items and 119 prerequisite pages checked for cycles.
- `node tools/content-policy.mjs research/quantum-prerequisites-4-2026-10-15-batch-4.pages.json --json`: exit 0, two scoped items, zero errors or warnings.
- `node tools/item-dependency-levels.mjs check --run quantum-prerequisites-4-2026-10-15`: exit 0, 18 items across eight pages, maximum level 4.
- `node tools/batch-dependency-levels.mjs write --run quantum-prerequisites-4-2026-10-15`, followed by `check`: exit 0; four batches, maximum level 1, current input hash recorded above.
- `node tools/source-fetch-check.mjs --coverage research/quantum-prerequisites-4-2026-10-15-batch-4.coverage.json --stamp`: exit 0, two of two sources fetch-verified, no new stamps and no documented drops.
- `node tools/proof-layout.mjs <two item files>`: exit 0, two items and eleven numbered steps, zero defects.

An unsupported `--help` probe on `depcheck.mjs` and `rendercheck.mjs` invoked their read-only whole-library defaults. Those outputs were not used as batch evidence, and the commands made no file changes. The scoped commands above are the results for this pair.
