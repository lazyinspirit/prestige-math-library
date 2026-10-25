# Batch 37 — Step 1 authoring evidence

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Scope: `qftx-p-form-symmetries` and its examples companion.

## Scope and plan reconciliation

Read the assigned beta task, binding owner direction, complete assigned design section, matching `plan-spec.json` rows, batch-37 manifest, batch dependency-level record, assigned item contracts, generalized-symmetry research note, and prose scaffold. The design and canonical plan agree on A/B IDs, titles, category, physics library, order 993, companion, and A-page prerequisites `qftx-defects-and-topological-operators` and `qftx-gauge-geometry`. B requires A. The planning item arrays were placeholders; the owner direction requires substantive B examples, so this batch fills only its assigned manifest and carriers. No design/plan conflict was found, and the shared plan was not changed.

The planned item contract is `def-aqft-p-form-global-symmetry`: define group-like p-form symmetry support, charge and backgrounds in a selected d-dimensional model. The A page also contains the conditional exchange/character theorem needed to justify the Pontryagin-dual charge result. The B page contains a compact-U(1) magnetic one-form calculation and a finite S3 zero-form representation example.

## Dependency inventory, interfaces, and levels

The last recorded batch scheduler snapshot placed batch 37 at level 4 and required batches 2 and 36. Those page requirements remain exact. After this batch's manifest changes, `batch-dependency-levels.mjs check` reports the run snapshot stale; the shared scheduler file is owner-controlled and was not rewritten. The current item-level computation gives the assigned levels below, with no mismatch for any owned item.

| Item | Direct suppliers | Level | Claim and convention |
|---|---|---:|---|
| `def-aqft-p-form-global-symmetry` | `def-aqft-topological-defect` (batch 36, level 0) | 1 | Selected-model, codimension-(p+1) topological symmetry defects; genuine p-observables; conditional character-charge convention; finite cochain and continuous higher-connection backgrounds. |
| `pthm-aqft-p-form-charge-characters` | `def-aqft-p-form-global-symmetry` | 2 | For d>=2 and 1<=p<d, explicit local exchange isotopies imply G is Abelian; a bounded nonzero simple operator with continuous unitary scalar crossing action has a continuous U(1) character. |
| `ex-aqft-maxwell-magnetic-one-form-charge` | p-form definition; `def-countable-choice`; `def-qftx-principal-connection-form` (level 0); `lem-qftx-principal-curvature-cartan-bianchi` (level 1); pinned Stokes theorem | 2 | Four-dimensional Euclidean pure compact U(1), natural units, holonomy exp(i∫A), real F/(2π) normalization, and external genuine line flux 2πm. Integer flux directly proves the character; the abstract theorem is not imported because its bounded-operator hypotheses are not assumed for the line. |
| `ex-aqft-s3-zero-form-representation-labels` | p-form definition; p-form character theorem | 3 | Exact finite C^3 permutation model: trivial plus irreducible standard representation of S3; group elements are transformations, representation labels are charges/sectors. |

The scoped computation from `item-dependency-levels.mjs` reports computed/declared levels 1, 2, 2, 3 respectively and no errors for these four items. The global tool currently reports 42 unrelated errors: 34 empty scaffold inventories in other batches and 8 unrelated level mismatches. No other batch was edited.

### Owner escalation: cross-batch supplier correction

The assigned A page still requires `qftx-defects-and-topological-operators`. The direct item edge initially pointed to `def-aqft-topological-interface`, but inspection of its current Statement shows it defines a **codimension-one** interface only. The p-form definition needs defects on supports of codimension p+1, including higher codimension. The exact broader carrier `def-aqft-topological-defect` defines model-specified defect data on closed embedded supports of any codimension and the required isotopy-invariance criterion. I changed only this batch's direct edge to that supplier and retained the assigned page requirement. The affected claim is the topologicality and group-like construction of arbitrary p-form symmetry defects; proposed supplier/placement is `def-aqft-topological-defect` on `qftx-defects-and-topological-operators`. This is a cross-batch edge correction for owner review, not a conflict with the shared plan. Its scoped dependency check is verified; independent owner acceptance remains separate.

`loadStep1Record` and `step1Decision` currently report `def-aqft-topological-defect` and `def-aqft-topological-interface` ready (both owner-recorded); the former is the direct p-form supplier. The interface remains part of the assigned page prerequisite, but is not used as the definition of higher-codimension defects. `def-qftx-principal-connection-form` and `lem-qftx-principal-curvature-cartan-bianchi` have current ready records. Their complete current proofs and exact statements were inspected. The conventions retained are a smooth right principal bundle, right action, K_H(X,Y)=-v([hX,hY]), local F_i=dA_i+1/2[A_i∧A_i], and D_A F=0; the inherited axiom strength is AC_omega, not full Choice.

The Maxwell proof also uses the pinned imported `thm-stokes-theorem-for-smooth-singular-chains` (local pin SHA256 `4ca4ee8333f2ef28244e37e8447a26dc89b38521a63d08ca2f60a815215b16fe`). Its complete statement and proof were read. Stokes applies to the supplied finite smooth singular chains and smooth forms without choice. The example distinguishes the intersecting swept track W from the punctured source-free chain V used by Stokes, and supplies the normal-linking-sphere collar and orientation convention explicitly. `def-countable-choice` is used only for the stated AC_omega mathematical inputs.

## Sources read and per-result dispositions

1. Davide Gaiotto, Anton Kapustin, Nathan Seiberg, and Brian Willett, [Generalized Global Symmetries](https://arxiv.org/pdf/1412.5148), arXiv:1412.5148v2. Read the full relevant text in §1 (PDF pp. 1–3), §2 (pp. 5–8), §3 (pp. 11–12), §4.1 (pp. 14–16), and Appendix F (pp. 70–71). It supports defect support/topologicality/fusion, the local exchange argument, compact-U(1) magnetic surface and line charge, ordinary zero-form representations, and the torsion-flux caveat. Appendix F's torsion-pairing commutator concerns mixed electric/magnetic flux operators on spatial manifolds with torsion and does not contradict the conditional within-group theorem.
2. Lakshya Bhardwaj, Lea E. Bottini, Ludovic Fraser-Taliente, Liam Gladden, Dewi S. W. Gould, Arthur Platschorre, and Hannah Tillim, [Lectures on Generalized Symmetries](https://arxiv.org/pdf/2307.07547), arXiv:2307.07547v2. Retrieved the full 150-page PDF and read §§2.1, 2.2.1–2.2.2 (PDF pp. 5–20), including the complete simple-operator crossing/character argument, and §4.1 (pp. 60–62) for continuous and discrete backgrounds.

Every harvested result and item disposition is in `research/advanced-qft-supersymmetry-build-2026-10-23-batch-37.coverage.json`. The finite Z_N self-duality example and higher-categorical charges are marked out of scope with reasons; higher-group background modifications are deferred to `qftx-two-group-symmetry-backgrounds`; the torsion caveat is inline. Maxwell normalizations differ across sources; the local example fixes holonomy exp(i∫A), integral F/(2π), and line flux 2πm. No source citation replaces the local proofs. The four coverage records have successful fetch stamps (GKS PDF: 648499 bytes, 77 pages, SHA256 prefix `40b591074a5932d8`; Bhardwaj PDF: 1529496 bytes, 150 pages, SHA256 prefix `3e97a62f7f9dcfca`). Retrieval succeeded on the initial recorded fetch for each source, so no `source_resolution` failure record or retries were fabricated.

## Item progress

- `def-aqft-p-form-global-symmetry`: defines the selected model, codimension-general group-like defects and fusion/inverse conditions, effective group, genuine p-observables, conditional character charges, finite cochain backgrounds, continuous higher-connection data, boundary restrictions and no-automatic-coupling/gauging claim. Direct supplier is the current ready codimension-general defect definition. Its statement has no inline links; references follow in `Definition references`.
- `pthm-aqft-p-form-charge-characters`: proves individual-group Abelianity from the explicit local exchange isotopy and proves the simple bounded operator crossing function is a continuous U(1) character. Simplicity, nonzero boundedness, unitary action and continuity are explicit. It does not infer joint commutativity of distinct symmetry groups; Appendix F's torsion caveat is retained. The diagram is explanatory only; the proof is complete independently.
- `ex-aqft-maxwell-magnetic-one-form-charge`: fixes compact U(1), R^4, units, action and flux conventions, no dynamical magnetic sources, external line boundary condition and finite support motion. Bianchi plus source-free Stokes proves the flux jump; integer m proves periodicity and multiplicativity directly. It makes no continuum-measure, empirical, equation-of-motion or general interacting-QFT claim.
- `ex-aqft-s3-zero-form-representation-labels`: fixes the normalized-trace finite quantum model, computes the permutation representation and its invariant complement, proves irreducibility of V2 by the distinct 3-cycle eigenlines and a transposition exchange, and distinguishes zero-form transformations from representation labels.

## Final validation and remaining owner-owned blockers

Successful scoped checks:

- `source-fetch-check --stamp`: 4/4 source records fetch-verified, 0 newly stamped, 4/4 resolved.
- `coverage-checklist --require-destination`: 2 pages, 18 harvested results, 0 errors/warnings.
- Authored and ordinary batch `content-policy`: all 4 items, 0 errors/warnings.
- `precheck`: definition not applicable; theorem and both examples pass.
- Strict proof contract: all 4 items, 0 errors/warnings.
- Explicit `proof-layout`: 4 items, 17 numbered steps, 0 defects.
- Explicit `rendercheck`: 6 item/page files checked, 0 errors/warnings.
- Focused `depcheck`: 4 authored items; 1044-item dependency closure and 235 prerequisite pages, 0 errors/warnings.
- Direct statement-first inspection using the workflow parser: all 4 assigned statements pass with no editorial defects.
- Scoped item dependency calculation: levels 1, 2, 2, 3 match declarations. Cross-batch dependency JSON is a five-row array with exact consumer/supplier IDs, valid statuses and nonempty evidence.
- A/B page carriers are frontmatter only with the expected inventories and no Markdown bodies or summaries.

Run-wide checks remain owner-blocked by other batches' incomplete scaffolds. `statement-first-check --run ... --domain physics` stops at batch 33 `qftx-susy-moduli-and-dualities` because its manifest inventory is empty. `page-layout check` stops at the same empty page before it reaches this pair; the engine's `compact-v1` materialization was therefore not run here, and no page summaries were authored. The run-wide item dependency tool reports the 34 empty inventories and 8 unrelated level mismatches noted above. `batch-dependency-levels check` reports the owner scheduler snapshot stale after the authorized manifest changes; that shared scheduler state was left untouched for the owner to recompute after the run manifests settle.

After the final readiness records, list their exact decisions and evidence here. Independent review and acceptance are not implied by Step 1 readiness.

### Final Step 1 records

`step1-decisions.mjs record` created current non-owner `ready` records for all four assigned items; `step1Decision` subsequently confirmed each hash current and each decision closed.

| Item | Decision | Examined direct dependencies | Record time (UTC) |
|---|---|---|---|
| `def-aqft-p-form-global-symmetry` | ready | `def-aqft-topological-defect` | 2026-10-23 09:28:51 |
| `pthm-aqft-p-form-charge-characters` | ready | `def-aqft-p-form-global-symmetry` | 2026-10-23 09:28:58 |
| `ex-aqft-maxwell-magnetic-one-form-charge` | ready | `def-aqft-p-form-global-symmetry`, `def-countable-choice`, `def-qftx-principal-connection-form`, `lem-qftx-principal-curvature-cartan-bianchi`, `thm-stokes-theorem-for-smooth-singular-chains` | 2026-10-23 09:29:12 |
| `ex-aqft-s3-zero-form-representation-labels` | ready | `def-aqft-p-form-global-symmetry`, `pthm-aqft-p-form-charge-characters` | 2026-10-23 09:29:20 |

The cross-batch supplier correction above remains visible for owner review. Step 1 readiness records authorship readiness only; they do not represent independent approval or publication.

The run-wide `step1-decisions.mjs check` reports 158/220 items ready and the full run still open because of other batches' missing/escalated records and empty scaffold pages. The four batch-37 records above are current and closed.
