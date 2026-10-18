# Batch 72 authoring notes

Run: non-ml-math-remaining-81-2026-10-18  
Pair: double-affine-hecke-algebras-and-macdonald-theory  
Assigned dependency level: **0**, scheduling input a4ef77c0100cec988f34a4dbcc803a1c8bcae8308af7860af2b32d71dee22c40.

## Plan and design comparison

The PA-41 design in plan-physics-algebras-track.md, its 05-hecke dossier, and the placement inventory retains three A-page obligations: define a selected-root DAHA with Cherednik parameters; prove a polynomial representation and its true faithfulness range; derive the Macdonald eigenfunction theorem. It also retains skein/DAHA and physical knot applications only as interface claims. The B design requires worked examples and parameter-boundary checks.

The canonical plan-spec.json and the incoming batch-72 page manifest listed empty inventories for both pages. This did not supply the design's proof obligations. The assigned manifest now records thirteen A items and two B examples/counterexamples. The selected root system is A1, which is the explicit scope allowed by the original claim. No arbitrary-root-system extension, norm formula, or unrelated classification has been added.

The plan and batch manifest both declare affine-hecke-algebras-beyond-type-a as the A-page reading prerequisite. The batch task and current scheduling artifact say batch 72 is level 0 with no prerequisite batches; the run-level artifact does not list batch 71, even though the current batch-71 manifest owns that page. I left the shared plan and scheduling artifact unchanged and recorded this exact mismatch in batch-72.cross-batch-dependencies.json. It is a page-route reconciliation issue, not a logical dependency of the local A1 proofs.

## Inventory and dependency levels

Levels below count in-batch logical deps; external suppliers do not raise them.

| Level | Items |
|---:|---|
| 0 | def-daha-a1-root-datum-and-parameter-conventions |
| 1 | lem-daha-a1-bernstein-quotients-are-laurent; lem-daha-a1-q-affine-automorphisms-linearly-independent |
| 2 | def-daha-a1-double-affine-hecke-algebra |
| 3 | lem-daha-a1-affine-normal-words-span; def-daha-a1-polynomial-representation |
| 4 | lem-daha-a1-polynomial-operators-satisfy-presentation; thm-daha-a1-polynomial-representation-faithful; def-daha-a1-symmetric-macdonald-operator; rem-daha-skein-and-physical-knot-interfaces-require-specific-maps |
| 5 | lem-daha-a1-macdonald-operator-preserves-orbit-sums; cex-daha-a1-eigenvalue-separation-fails-at-q-one |
| 6 | lem-daha-a1-y-sum-restricts-to-macdonald-operator |
| 7 | thm-daha-a1-macdonald-eigenfunctions |
| 8 | ex-daha-a1-first-symmetric-macdonald-eigenfunctions |

The incoming page inventory was empty. I formed the above item graph before drafting the carriers and serialized it into the assigned batch manifest after the initial carrier drafts. The final batch-local level check passes with 15 items, maximum level 8, and no graph or label errors; run-wide exceptions are listed below.

## Prerequisites inspected

- Read the complete published lem-hh-free-associative-ring-and-relations-descent Statement and Proof. It supplies only the free-algebra quotient universal property used by the presentation and representation.
- Read the current PA-40 A-page and the complete current bodies of its Iwahori–Matsumoto definition/basis and Bernstein-presentation/quotient items. They are draft material, not accepted approval. Its rem-hh-affine-hecke-general-bernstein-pbw-awaits-local-proof explicitly records that general Bernstein PBW and the full presentation isomorphism remain unproved.
- Read the complete published thm-hh-affine-type-a-bernstein-pbw Statement and Proof. Its scope is type-A affine PBW over its stated universal coefficient ring; it supplies no DAHA generator, DAHA PBW, faithful polynomial representation, or Macdonald theorem. It is not a logical dependency here.
- The remaining in-batch prerequisites are supplied locally in ascending item level. No axiom of choice, excluded middle beyond classical field algebra, or other set-theoretic axiom is used.

## Mathematical scope and limits

The A-page proves the equal-parameter A1 DAHA presentation, all polynomial-action relations, generic faithfulness for q not a root of unity and t nonzero, and the symmetric Macdonald eigenbasis when eigenvalues are separated, i.e. when t^2 != q^-N for every positive integer N. It does not claim the Macdonald inner-product norm formula or the theorem for general root systems.

The B counterexample records why q=1 must not be included in the simple-spectrum claim. The A-page remark keeps the original skein and physical-knot interface claims visible and names the required missing map, parameters, representation space/completion, and model data. No skein representation or physical-knot theorem is claimed.

## Sources

Three full-text sources were inspected: Kirillov's complete 42-page lecture notes (DAHA definition/operators, leading-term faithfulness, and Macdonald eigenfunctions); Etingof–Ma's complete 93-page Cherednik lecture notes (A1 and root-system presentations); and Macdonald's complete 20-page Astérisque article (orthogonal normalization and an independent Macdonald eigenfunction treatment). Their actual locators, retrieval stamps, item dispositions, and reading limits are recorded in batch-72.source-coverage.json and batch-72.source-evidence.json.

All three source-fetch-check --stamp attempts succeeded on the first request. No failed source, dropped source, or source-resolution recovery is recorded.

## Scoped verification results

- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-72.proof-contracts.json --strict --json`: passed for all 15 assigned items; no errors or warnings.
- `node tools/tsx-run.mjs tools/precheck.mts <15 assigned item files> --json`: 15 files selected, 10 proof-bearing files checked, zero failures; five definitions/remarks were not applicable.
- `node tools/rendercheck.mjs <15 assigned item files> <A page> <B page> --json`: 17 files checked, zero errors or warnings.
- `node tools/proof-layout.mjs <15 assigned item files>` after final item edits: 15 items, 26 proof steps, zero defects.
- Focused `depcheck`: 15 items and two pages, closure of 209 items/42 pages, zero errors/warnings. Focused `fwdcheck`: zero errors/warnings. `citecheck`: 15 items scanned, zero warnings. Focused `extcheck`: zero errors/warnings.
- Batch-local dependency-level computation: 15 items, maximum level 8, zero errors. The current whole-run computation has 102 errors, all outside batch 72. The errors are empty scaffold inventories and stale item-level labels in other batches.
- `node tools/source-fetch-check.mjs --coverage research/non-ml-math-remaining-81-2026-10-18-batch-72.source-coverage.json --stamp`: final check passed with 3/3 sources fetch-verified/resolved and no new stamps; the initial stamped run recorded all three.
- All 15 Step-1 records are current, ready, and hash-verified. No `--owner` flag was used and no escalation was overwritten.
- `node tools/batch-dependency-levels.mjs check --run non-ml-math-remaining-81-2026-10-18`: reports the run-level artifact is stale. The PA-40 page-route/schedule mismatch is documented in `batch-72.cross-batch-dependencies.json`; shared scheduling remains for owner reconciliation.
