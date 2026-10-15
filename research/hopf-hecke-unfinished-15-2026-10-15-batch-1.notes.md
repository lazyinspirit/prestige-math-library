# Hopf–Hecke unfinished 15 — batch 1 authoring notes

Run `hopf-hecke-unfinished-15-2026-10-15`; role Beta; assigned pair `coalgebras-counits-and-the-fundamental-coalgebra-theorem` and its examples only. The output manifest is `research/hopf-hecke-unfinished-15-2026-10-15-batch-1.pages.json`. I read the repository instructions, owner direction, task, full HH-2 design section, plan-spec records, scaffold inventory, dependency-level input, batch evidence, schema, and workflow before authoring.

## Controlling plan and conflicts

The design at `research/plan-hopf-hecke-algebras-track.md` L154 controls the mathematical scope. The HH-2 records in `research/plan-spec.json` agree on page IDs, titles, category, orders 1690–1691, and page prerequisites, but both machine page records have empty `items` arrays. The scaffold inventory lists six intended A-page results. I kept the plan-spec page metadata and scaffolded those six intended results, plus two local prerequisites needed for the stated proofs: `lem-hh-finite-spanning-list-contains-a-basis` (choice-free finite basis extraction) and `def-hh-group-like-and-primitive-elements` (terminology used by the B examples). This is an inventory omission, not a conflicting mathematical instruction. No shared plan was edited.

The assigned dispatch pins scheduling input `58cf41778ca737ce2c4e0a45aba6eaf8476b4c24fb4e64f5f1794e1d28217856`. Concurrent sibling manifest updates made the shared derived artifact stale twice; I recomputed it from the current manifests. Its final checked input digest is `af174adebd9c7757f619129f8c23dd9db949b50f57fb82ef23457433b3dfd119`; batch 1 remains level 0 with `requires: []`. The cross-batch dependency input for batch 1 is `[]`. HH-1, `tensor-coherence-and-algebraic-descent`, is the sole required page and is already published; no cross-batch supplier is absent or unresolved.

## Inventory and dependency order

The A page contains eight items and the B page contains four; neither approaches the 100-item page cap. Direct dependency arrays are synchronized between carrier frontmatter and the manifest. Levels are zero without an in-run supplier and otherwise one plus the largest in-run supplier level.

| Page | Item | Level | In-run suppliers |
|---|---|---:|---|
| A | `def-hh-coalgebra-and-coalgebra-map` | 0 | none |
| A | `lem-hh-finite-spanning-list-contains-a-basis` | 0 | none |
| A | `lem-hh-counit-uniqueness-and-finite-sweedler-calculus` | 1 | `def-hh-coalgebra-and-coalgebra-map` |
| A | `def-hh-subcoalgebras-coideals-and-quotient-coalgebras` | 1 | `def-hh-coalgebra-and-coalgebra-map` |
| A | `lem-hh-finite-comatrix-coalgebra-exists` | 1 | `def-hh-coalgebra-and-coalgebra-map` |
| A | `def-hh-group-like-and-primitive-elements` | 1 | `def-hh-coalgebra-and-coalgebra-map` |
| A | `thm-hh-coalgebra-quotient-and-kernel-descent` | 2 | `def-hh-coalgebra-and-coalgebra-map`; `def-hh-subcoalgebras-coideals-and-quotient-coalgebras` |
| A | `thm-hh-fundamental-theorem-of-coalgebras` | 3 | `def-hh-coalgebra-and-coalgebra-map`; `def-hh-subcoalgebras-coideals-and-quotient-coalgebras`; `lem-hh-finite-spanning-list-contains-a-basis`; `lem-hh-finite-comatrix-coalgebra-exists`; `thm-hh-coalgebra-quotient-and-kernel-descent` |
| B | `ex-hh-group-like-elements-in-finite-set-coalgebra` | 2 | `def-hh-coalgebra-and-coalgebra-map`; `def-hh-group-like-and-primitive-elements` |
| B | `ex-hh-relative-primitive-elements-in-two-dimensional-coalgebra` | 2 | `def-hh-coalgebra-and-coalgebra-map`; `def-hh-group-like-and-primitive-elements` |
| B | `ex-hh-counital-coideal-quotient-of-comatrix-coalgebra` | 3 | `def-hh-coalgebra-and-coalgebra-map`; `def-hh-subcoalgebras-coideals-and-quotient-coalgebras`; `lem-hh-finite-comatrix-coalgebra-exists`; `thm-hh-coalgebra-quotient-and-kernel-descent` |
| B | `cex-hh-coideal-with-nonzero-counit-does-not-give-quotient-map` | 2 | `def-hh-coalgebra-and-coalgebra-map`; `def-hh-group-like-and-primitive-elements`; `def-hh-subcoalgebras-coideals-and-quotient-coalgebras` |

The full direct dependency lists, including published suppliers, are in the manifest and each item carrier. Local suppliers were authored in ascending level order. Actual HH-1 supplier statements and proofs were inspected before use: the tensor-injection/quotient-kernel result explicitly assumes AC; coefficient separation says independent tensor coefficients vanish and its arbitrary-ambient argument is AC-dependent, while its finite-dimensional case is choice-free; tensor functoriality and associator, symmetry, and unit-map coherence have the stated naturality. The FCT proof uses these exact interfaces and does not extend coordinate functionals from a finite subspace to all of `C`.

## Mathematics and proof routes

- Coalgebra axioms are written with explicit associator and unit maps. The finite comatrix item verifies coassociativity and both counit equations on each basis vector. Counit uniqueness is proved by a single well-defined scalar contraction; the Sweedler item treats summands as a finite tensor presentation, not canonical data.
- Subcoalgebras, coideals, and quotient coalgebras are defined separately. The image-based tensor conditions are stated without assuming tensor injections; their familiar subspace forms are identified under the declared AC supplier. The quotient definition itself asserts no quotient formula.
- The quotient/kernel theorem proves well-defined quotient maps, both quotient coalgebra axioms, uniqueness and the universal property; it separately proves kernel coideals and arbitrary sums of subcoalgebras. Its AC uses are confined to the declared tensor-injection and quotient-kernel interfaces.
- The fundamental coalgebra theorem has a choice-free finite-dimensional branch. In the arbitrary-dimensional branch, a finite tensor expression is regrouped with independent right coefficients; coassociativity, coefficient separation, and the tensor-kernel identity give a finite right coefficient space. Finite-list basis extraction supplies coordinate maps and matrix coefficients. The comatrix map, its kernel quotient, and transport to the image produce a finite-dimensional subcoalgebra. The empty and zero cases are explicit. The local proof uses the planned quotient-separation route and provides the full details rather than claiming a global basis or global functional extension.
- The B examples compute normalized group-like and relative primitive elements, a one-dimensional quotient by a counital coideal, and a counterexample showing why zero counit is required for the canonical quotient projection. The counterexample makes no claim about unrelated coalgebra structures on the quotient vector space.

## Source record

`research/hopf-hecke-unfinished-15-2026-10-15-batch-1.coverage.json` records every harvested heading, its disposition, the supported item, exact locators, and authoring evidence. All four selected full-text PDFs fetched and were inspected in full over the cited ranges; no retrieval failed, so no `source_resolution` drop or escalation was needed.

| Source | Locator read and local support | Fetch stamp |
|---|---|---|
| Sheldon Axler, *Linear Algebra Done Right*, 4th ed., [full PDF](https://linear.axler.net/LADR4e.pdf) | Ch. 2, §2B, Theorem 2.30 and proof, printed pp. 40–41 / PDF pp. 53–54; finite spanning-list basis lemma. | PDF, 404 pages, 2,795,156 bytes, SHA-256 prefix `1207d90a1310e79d`. |
| UCSD Math 207A, Hopf Algebras notes, Spring 2020, [full PDF](https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf) | Ch. 1, Definition 1.19, Lemma 1.20, Proposition 1.21, Examples 1.23/1.26, and Theorem 1.28 with proof, printed pp. 15–20; coideals, tensor-kernel context, finite comatrix formulas, quotient/kernel claims, and FCT. The source leaves quotient/kernel details as an exercise; local proofs supply them. | PDF, 64 pages, 746,273 bytes, SHA-256 prefix `d1d94293afc7fa79`. |
| William Chin, *A Brief Introduction to Coalgebra Representation Theory*, [full PDF](https://condor.depaul.edu/~wchin/crt.pdf) | §§2, 2.1, and 2.4, printed pp. 2–5; coalgebra/coideal definitions, coefficient-space proof, and group-like/skew-primitive terminology. | PDF, 18 pages, 251,685 bytes, SHA-256 prefix `bc6908592ae6e321`. |
| Benedikt Stufler, Hopf Algebra lecture notes, 2018, [full PDF](https://www.dmg.tuwien.ac.at/stufler/doc/lec/2018hopf.pdf) | §3.1, Definition 3.1, Examples 3.2(1)–(4), Definitions 3.3–3.4 and 3.19, printed pp. 12–17; coalgebra convention, set/comatrix/skew-primitive examples, finite-sum Sweedler notation, coalgebra maps, coideals, and quotients. | PDF, 81 pages, 567,285 bytes, SHA-256 prefix `de82a7c22648a870`. |

The selected sources have two independent treatments on the A page, including a textbook and full lecture notes. The coverage file records all source-result dispositions, including the source's global-basis FCT proof as read context while the local item follows the controlling quotient-separation route; it also records the triangular quotient as out of scope and the divided-power example as deferred to the later bialgebra page.

## Proof contracts and scoped checks

Nine proof-bearing items have contracts with the actual steps, claims, inputs, exact supplier excerpts, boundary dispositions, and one applicable finite check each. The three definitions are non-proof-bearing. Readiness records mean authoring completeness only and are not independent mathematical approval.

- `node tools/proof-contract.mjs research/hopf-hecke-unfinished-15-2026-10-15-batch-1.proof-contracts.json --strict --json`: 9 items, 0 errors, 0 warnings.
- `node tools/tsx-run.mjs tools/precheck.mts` on the 9 proof-bearing items: 9 checked, 0 failures.
- `node tools/proof-layout.mjs` on the 12 assigned carriers: 12 items, 39 steps, 0 defects.
- `node tools/rendercheck.mjs` on the 12 carriers and two assigned pages: 14 checked, 0 errors, 0 warnings.
- `node tools/content-policy.mjs` on the batch manifest: 12 items, 0 errors, 0 warnings. `node tools/manifest-deps.mjs` reports 12 items, no missing dependency arrays, 0 errors.
- `node tools/item-dependency-levels.mjs check --run hopf-hecke-unfinished-15-2026-10-15`: 138 run items across 30 pages checked, maximum level 14; pass. `node tools/batch-dependency-levels.mjs check --run hopf-hecke-unfinished-15-2026-10-15`: 15 batches checked, maximum level 7; batch 1 is level 0 with no prerequisite batches.
- `node tools/coverage-checklist.mjs research/hopf-hecke-unfinished-15-2026-10-15-batch-1.coverage.json --json`: 1 A page, 27 harvested results, 0 errors, 0 warnings. `node tools/source-fetch-check.mjs --coverage research/hopf-hecke-unfinished-15-2026-10-15-batch-1.coverage.json`: 4/4 sources fetch-verified.

A mistaken `node tools/depcheck.mjs --help` invocation fell through to the read-only whole-corpus checker; its output is not used as scoped evidence, and it wrote no files. The scoped validators listed above are the batch evidence.

## Readiness and remaining run scope

All 12 assigned items have complete prerequisites, placement, source support, and (where proof-bearing) contracts; their Step 1 records are `ready`. No item in this pair is escalated. At the final local check, the run-wide Step 1 status reports 54 of 138 items ready, with 84 records outstanding across 18 other pages; none of this pair's items is open. Those records are outside this assignment and remain for their owners.
