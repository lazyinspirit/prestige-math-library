# Batch 15 — Fractional factorial aliases and foldover

Run: `statistical-models-experiments-62`  
Pair: `fractional-factorial-aliasing-and-foldover` / `fractional-factorial-aliasing-and-foldover-examples`  
Role: beta  
Batch dependency level: 3; in-run prerequisite batch: 14  
Scheduling input recorded in the assignment: `386e4ae06977e377b90dd7236b8bc21e4477e0cf0b4791e5511c16d11a581f99`

## Plan reconciliation and inventory

The controlling contract is SME-15 in `research/plan-statistical-models-experiments-track.md` at line 179, under `research/statistical-models-experiments-62-owner-authoring-direction.md`. The plan-spec page rows agree with the assignment on IDs, order 1946/1947, category, title, and prerequisites `full-factorial-contrasts-and-interactions` and `inner-product-spaces-and-orthogonality`. Both plan-spec item arrays are empty authoring placeholders, not a competing scope. No shared plan or dossier was edited.

The dossier and audit retain the planned defining-relation definition, foldover theorem, and examples. The A-page inventory adds two local results needed to prove rather than assume the planned interface: the signed defining-subgroup/column equivalence (including run count), and the nonidentifiability of coefficients on equal or opposite columns. These additions preserve the planned claims. The B page computes the complete residual relation sets for both follow-ups.

| Item | Page | Level | In-batch item suppliers |
|---|---|---:|---|
| `def-regular-fractional-factorial-defining-relation-and-resolution` | A | 1 | none; batch-14 `def-two-level-full-factorial-design` is level 0 |
| `thm-regular-fractional-factorial-aliasing-criterion` | A | 2 | regular-fraction definition |
| `thm-factorial-column-aliases-prevent-separate-identification` | A | 2 | regular-fraction definition |
| `thm-factorial-foldover-separates-opposite-parity-aliases` | A | 3 | regular-fraction definition; alias theorem |
| `ex-two-three-minus-one-alias-class` | B | 3 | regular-fraction definition; alias theorem; coefficient-identifiability theorem |
| `ex-resolution-three-foldover-and-targeted-followup` | B | 4 | regular-fraction definition; alias theorem; coefficient-identifiability theorem; foldover theorem |

The scoped item-level calculation over the batch-14 supplier manifest and batch-15 manifest has 11 items, no cycles, no label errors, and maximum level 4. Batch 15 remains level 3 in the supplied scheduling graph because its A page requires batch 14. The run-level dependency artifact is owner/engine-controlled and was not rewritten after populating this manifest.

## Supplier review and dependency decisions

The actual current batch-14 carrier `items/def-two-level-full-factorial-design.md` is a draft at level 0. I read its complete Definition and the pair's orthogonality and variance proofs. The exact interface used here is: “For a run $x\in\mathcal X_k$ and a subset $A\subseteq[k]$, define its sign column by $$x_A=\prod_{j\in A}x_j,$$ where the empty product is $x_\varnothing=1$.” It supplies the sign-cube and product-column convention used by the fraction; no orthogonality or variance claim is imported.

The A-page alias arguments use exact sign-column equality and signed-word multiplication, not the inner-product value or variance formula. The required published page `inner-product-spaces-and-orthogonality` remains in the A-page `requires` list. I read `prop-standard-coordinate-inner-products` and `def-orthogonal-vectors-sets-and-orthonormal-bases` and checked their statements/proofs; they do not need item-level edges because none of the local proofs uses an inner product or orthogonality claim. The cross-batch item ledger therefore records only the actual logical supplier `def-two-level-full-factorial-design`.

The batch-14 definition is present and its convention is mathematically sufficient. Its draft status is recorded in `research/statistical-models-experiments-62-batch-15.cross-batch-dependencies.json`; this check records current interface review, not owner acceptance. No assigned prerequisite is missing, and no supplier excerpt or approval was inferred from a plan or dossier.

## Mathematical checks and caveats

- A signed generator system is encoded as a rank-$p$ matrix over $\mathbb F_2$. Row reduction proves the fraction has $2^{k-p}$ runs and that a monomial is constant exactly when its incidence vector is in the row space. The sign is retained in the signed defining subgroup, so positive (equal-column) aliases and negative (opposite-column) aliases are not conflated.
- The coefficient result assumes an unrestricted fixed-design linear model with an error law independent of the coefficient vector. Equal or opposite columns make only the corresponding sum or difference enter the fitted vector. No Gaussian assumption is used.
- For a selected foldover factor set $J$, the exact residual subgroup is $H_J=\{(\epsilon,A)\in H:|A\cap J|\text{ is even}\}$. The complete mirror is $J=[k]$. The worked $2^{5-2}$ example proves that full and selected-factor follow-ups have distinct residual relation sets; it lists each complete set as $S$ paired with $S\triangle\{A,B,C,E\}$ or $S\triangle\{C,D,E\}$.
- All proofs use finite sign arithmetic and row reduction. No choice axiom, Gaussian error law, sparsity assumption, or hierarchy assumption is used as a theorem premise. Sparsity/hierarchy is identified as an additional modeling assumption.

## Sources and retrieval record

The A-page coverage is in `research/statistical-models-experiments-62-batch-15.coverage.json`.

- Gary W. Oehlert, *A First Course in Design and Analysis of Experiments*: complete relevant sections inspected in the author-hosted 679-page PDF—Chapter 15 §15.1; Chapter 18 §§18.2, 18.4, 18.6, and 18.7. The remainder of the book was not read or used.
- NIST/SEMATECH e-Handbook: complete focused sections §5.3.3.4.1–.4 and §5.3.3.8.1–.2 inspected. These provide an independent treatment of generator construction, signed aliases, resolution, mirror foldover, and selected-factor residual aliases.
- `node tools/source-fetch-check.mjs --coverage research/statistical-models-experiments-62-batch-15.coverage.json --stamp` fetched and stamped all 7 selected full-text URLs on the first attempt: 7/7 verified, 0 drops, 0 retrieval failures. No `source_resolution` failure record was needed, and no source was dropped.

Each harvested result has its item support and `included`/`inline` disposition in the coverage file. Citations document source scope; all active results have local arguments.

## Evidence and checks

- Item manifests and carriers agree on the six IDs, direct `deps`, and levels in the inventory table. The A/B pages, coverage, proof contracts, and cross-batch input are present; the A page has 4 items and the B page has 2 examples, below the 100-item page cap.
- `node tools/manifest-deps.mjs research/statistical-models-experiments-62-batch-15.pages.json`: 6 items, 0 missing, 0 errors.
- Focused item dependency calculation over batches 14 and 15: 11 items, no cycles or label mismatches; levels 1, 2, 2, 3, 3, 4 as listed above.
- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-15.proof-contracts.json --strict`: 6 items checked, 0 errors, 0 warnings.
- Scoped `precheck.mts`: 5 proof-bearing items passed; the definition is not applicable. The precheck's canonical phase renumbering was adopted before the final pass.
- `node tools/proof-layout.mjs` on all six explicit item files: 6 items, 16 proof steps, 0 defects.
- Focused `depcheck` on the six item IDs and both page IDs: 0 errors, 0 warnings; 7 dependency-closure items and 119 prerequisite pages checked.
- `rendercheck.mjs` on the six items and two pages: 8 files, 0 errors, 0 warnings.
- `content-policy.mjs` on the batch-15 manifest: 6 items, 0 errors, 0 warnings.
- `source-fetch-check` check mode: 7/7 sources fetch-verified; 0 drops.
- `step1-decisions.mjs record` created six `ready` records without `--owner`. They bind the examined direct/transitive item dependencies and current hashes. These are authoring-readiness records, not independent mathematical approval.

The run-wide `batch-dependency-levels check --run statistical-models-experiments-62` did not complete: it reports `Invalid escape sequence \m` at line 3, column 66 in `items/lem-translation-invariant-locally-finite-borel-measure-on-rd.md`, an existing item outside batch 15's dependency closure. The scoped batch-14/15 item-level calculation passes. The run-level batch dependency artifact was left to the owner/engine; the native engine recomputes that scheduling input before dispatch. No shared scheduling artifact, plan, engine state, or verdict was changed.

The final disk-derived autopilot status is still `running`, with Step 1 scaffold held for owner repair/recertification, no workers in flight, and 41/62 batches covered. It still lists batch 15's native artifact as missing; the authored local carriers and readiness records do not change native collection or workflow state. Owner integration/recertification remains pending.
