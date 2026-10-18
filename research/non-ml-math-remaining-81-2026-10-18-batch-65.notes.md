# Batch 65 authoring notes

Run `non-ml-math-remaining-81-2026-10-18`; dispatch role beta. The assigned A/B pair is `yangians-quantum-affine-and-transfer-matrices`. Only these two pages, the fourteen listed draft carriers, and batch-65 evidence were edited. No shared plan, published item, engine state, verdict, or other pair was changed.

The batch scheduling dependency level is 2, with prerequisite batches 47 and 64; its scheduling input is `825ada459eb8a44f2bca9b180e0d40e43ed62d08f26d224468ce63c38b792042`. The item dependency levels in the inventory below are separately recomputed from the item graph.

## Live run and plan reconciliation

- Recomputed the active run from `.autopilot/non-ml-math-remaining-81-2026-10-18`. Final inspection reports `1-scaffold`, 34/81 pairs covered, and nothing in flight. It also retains a plan failure at `2026-10-17T16:44:57.525Z` (`Unexpected non-whitespace character after JSON`, line 129, column 2). The batch-65 manifest parses now and its scoped checks pass; no engine state was edited. The owner must rerun/reconcile the autopilot transition.
- The controlling owner direction assigns the unique finite C² family `def-hh-rational-spectral-r-matrix`, `lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter`, and `ex-hh-rational-spectral-r-matrix-singular-parameters` to batch 64. Batch 65 reuses the first two exact carriers; the singular example is explanatory only. The local rank-N proof supplies every N≥3 step and does not infer Yangian, evaluation, RTT, or transfer claims from the C² lemma.
- The original PA-34 entry in `research/physics-algebras-planning-2026-10-17/proposed-pages.json` lists PA-33 and PA-16 as reading prerequisites. Current `research/plan-spec.json` adds the published page `cyclotomic-klr-algebras-and-highest-weight-categorification`. The A-page `requires` and batch manifest follow the current plan. This difference is recorded; no shared plan was edited.
- Historical PA-34 and the current plan-spec still have empty item inventories, while the owner direction requires completion of all presentation, evaluation/intertwiner, Yang–Baxter, transfer, and Bethe-boundary duties. This batch fills the assigned local items while retaining all those claims under explicit hypotheses.
- Scope is the type-A RTT Yangian `Y_i(gl_N)` over C, N≥2, with `R_N(x)=xI+iP_N`. The exact parameter substitution `z=iu` is proved locally. No identification with a quantum affine algebra, shifted finite-W Yangian, completed universal R, arbitrary type/category braiding, or all-module Bethe completeness is asserted.

## Inventory, logical dependencies, and levels

Levels are recomputed from the assigned batch manifests. A level is zero without an in-run supplier and otherwise one plus the maximum level of its in-run suppliers. External published items do not raise the level.

| Page | Item | Direct dependencies | Level |
|---|---|---|---:|
| A | `def-yangian-gl-n-rtt-presentation` | `def-matrix-units`, `thm-tensor-product-basis-from-bases`, `def-hh-rational-spectral-r-matrix` | 1 |
| A | `lem-yangian-rtt-component-commutator-form` | `def-yangian-gl-n-rtt-presentation` | 2 |
| A | `prop-yangian-gl-n-rtt-hopf-structure` | `def-yangian-gl-n-rtt-presentation` | 2 |
| A | `def-yangian-evaluation-module` | `def-yangian-gl-n-rtt-presentation`, `def-matrix-units` | 2 |
| A | `thm-yangian-evaluation-module-well-defined` | `def-yangian-gl-n-rtt-presentation`, `def-yangian-evaluation-module`, `def-matrix-units`, `lem-yangian-rtt-component-commutator-form` | 3 |
| A | `lem-yangian-rtt-spectral-rescaling` | `def-yangian-gl-n-rtt-presentation`, `def-yangian-evaluation-module` | 3 |
| A | `prop-yangian-rational-r-matrix-yang-baxter-and-invertibility` | `def-yangian-gl-n-rtt-presentation`, `def-hh-rational-spectral-r-matrix`, `lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter` | 2 |
| A | `lem-yangian-fundamental-evaluation-intertwiner` | `def-yangian-evaluation-module`, `prop-yangian-gl-n-rtt-hopf-structure`, `thm-yangian-evaluation-module-well-defined`, `prop-yangian-rational-r-matrix-yang-baxter-and-invertibility` | 4 |
| A | `def-yangian-periodic-fundamental-chain` | `def-yangian-evaluation-module`, `thm-yangian-evaluation-module-well-defined` | 4 |
| A | `lem-yangian-periodic-monodromy-satisfies-rtt` | `def-yangian-periodic-fundamental-chain`, `prop-yangian-rational-r-matrix-yang-baxter-and-invertibility` | 5 |
| A | `thm-yangian-periodic-transfer-matrices-commute` | `def-yangian-periodic-fundamental-chain`, `lem-yangian-periodic-monodromy-satisfies-rtt`, `prop-yangian-rational-r-matrix-yang-baxter-and-invertibility` | 6 |
| A | `lem-yangian-gl2-one-root-bethe-cancellation` | `def-yangian-gl-n-rtt-presentation`, `lem-yangian-rtt-component-commutator-form` | 3 |
| B | `ex-yangian-two-site-periodic-transfer-matrix` | `def-yangian-periodic-fundamental-chain`, `thm-yangian-periodic-transfer-matrices-commute`, `def-hh-rational-spectral-r-matrix` | 7 |
| B | `cex-yangian-one-root-bethe-equation-does-not-guarantee-completeness` | `prop-yangian-gl-n-rtt-hopf-structure`, `lem-yangian-gl2-one-root-bethe-cancellation` | 4 |

The graph is acyclic. The tensor bases and all operators in these claims are explicitly finite; no choice axiom is used. The diagram in the rank-N Yang–Baxter item records an already-proved equality and is not a proof premise.

## Prerequisite and supplier review

- Read the actual batch-64 C² definition and its full parameterized Yang–Baxter proof. The current run has owner-sealed `ready` records for both `def-hh-rational-spectral-r-matrix` and `lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter` at `research/non-ml-math-remaining-81-2026-10-18-step1-def-hh-rational-spectral-r-matrix.json` and `research/non-ml-math-remaining-81-2026-10-18-step1-lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter.json`. These are authoring-readiness records, not independent mathematical acceptance.
- The presentation cites the existing matrix-unit and finite tensor-basis definitions with their exact conventions. The evaluation proof establishes the dual-natural bracket and checks every component RTT relation. The coproduct proof checks product RTT, coassociativity, counit, inverse RTT, and both antipode identities.
- The evaluation intertwiner is stated on the same ordered space with the opposite coproduct action explicit; its map remains an intertwiner at singular differences, while isomorphism is asserted only off `±i`.
- The periodic chain has finite length `m≥1`, arbitrary complex inhomogeneities, a fixed increasing site order, an untwisted ordinary auxiliary trace, and no twist. The monodromy proof uses only same-site YBE plus distinct-site commutation. Transfer commutativity uses the inverse only when `u-v∉{i,-i}` and then extends the finite polynomial identity to every pair.
- The one-root `gl_2` lemma assumes scalar vacuum eigenvalues regular at the root, `u≠v`, and a nonzero Bethe vector for its eigenvector conclusion. It derives only one-root unwanted-term cancellation. No completeness, Hermiticity, or exact Yangian symmetry of a periodic Hamiltonian is inferred.
- PA-16 and the published KLR page are current page-reading prerequisites only; no item from either route is a logical premise of a local proof. The exact page-level routes and their limits are in `batch-65.cross-batch-dependencies.json`.

## Source review

Full relevant source texts were inspected, and exact URLs, locators, supported claims, out-of-scope results, retrieval attempts, and fetch stamps are in `non-ml-math-remaining-81-2026-10-18-batch-65.coverage.json`.

| Source | Read locator | Local use and limit |
|---|---|---|
| Molev–Nazarov–Olshanski, *Yangians and Classical Lie Algebras* | §§1.1, 1.4–1.8, 1.11–1.19, 1.28 | RTT/Hopf/evaluation and rational YB conventions; local proofs fix the i-normalization and recheck the claims. No completed universal R or category result is inferred. |
| Loebbert, *Lectures on Yangian Symmetry* | §§3.1–3.3, 5.1–5.3 | Independent Yangian/Hopf, Lax, monodromy, and periodic transfer treatment; finite periodic boundary terms do not license an exact Yangian-symmetry claim. |
| Isaev, *Lectures on Quantum Groups and Yang-Baxter Equations* | §§3.9, 3.13.1–3.13.2, 5.1 | Independent RTT/rational/YBE and finite transfer route; no all-type quantum-affine conclusion is claimed. |
| Faddeev, *How Algebraic Bethe Ansatz Works for Integrable Model* | §§3–4, especially equations (31)–(52), (66)–(97) | Shared rational normalization, Lax/monodromy/transfer, and one-root calculation; the local proof verifies signs and all finite-model hypotheses. No general completeness or continuum conclusion is imported. |

`source-fetch-check --stamp` succeeded for 4/4 full-text URLs; there were no retrieval failures, recovery retries, source drops, or `source_resolution` records. The fetch stamps attest retrieval only, not source correctness or proof acceptance. The page normally calls for two independent A-page treatments; three independent full-text treatments were inspected for the A proof route, with Faddeev supplying the concrete model/ABA treatment.

## Readiness record discrepancy

The first local readiness recording for `def-yangian-gl-n-rtt-presentation` was made at `2026-10-17T16:39:47.423Z` as `escalated`, using the older batch-64 note that said no supplier readiness existed. A subsequent live check showed that both exact batch-64 suppliers already had owner-sealed `ready` records timestamped `2026-10-17T16:08:20Z`; the original escalation reason is therefore stale. The dispatch explicitly forbids overwriting an escalation, so this record was preserved at `research/non-ml-math-remaining-81-2026-10-18-step1-def-yangian-gl-n-rtt-presentation.json` and no `--owner` option was used. It is a status inconsistency, not a mathematical objection to the inspected batch-64 bodies or the completed Yangian definition. The other thirteen final items were independently recorded `ready` against their actual complete dependency bodies, page placements, and contracts; those records do not rewrite, inherit, or approve the stale `def-yangian-gl-n-rtt-presentation` record. The owner must reconcile that one record separately.

## Scoped checks

Final scoped results after edits:

- `proof-layout`: 14 items, 32 steps, 0 defects.
- Strict proof contracts: 11/11 proof-bearing items, 0 errors, 0 warnings.
- `source-fetch-check`: 4/4 full-text sources fetch-verified; 0 drops.
- `content-policy`: 14 scoped items, 0 errors, 0 warnings.
- Focused `depcheck`: 14 selected items; selected page and prerequisite cycle checks covered 198 items and 43 pages, with no errors or warnings.
- `rendercheck`: 16 files; every math span parsed under KaTeX and every frontmatter block parsed, with no rendering defects.
- Recomputed item levels across batches 64 and 65: 18 items, 0 errors. Batch 65 ranges from level 1 through level 7.
- Whole-run `item-dependency-levels.mjs check --run ...` could not pass: it reports many unrelated empty scaffolds and stale labels, and its input scan also finds `research/non-ml-math-remaining-81-2026-10-18-batch-42.pages.json` malformed at line 159, column 2 (JSON parse position 6043). That file is outside this pair; no other batch was edited.
- `step1-decisions.mjs record`: 13 items recorded `ready`; the existing `def-yangian-gl-n-rtt-presentation` escalation was preserved unchanged. No `--owner` option was used. These are authoring-readiness records, not independent acceptance.

First-pass layout/contract errors were corrected before these final scoped checks; the results above describe the current files.

