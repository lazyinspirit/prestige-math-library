# Batch 106 authoring notes

Run `physics-non-fluid-129-2026-10-21-r2`; assigned pair `qsmx-integrable-transfer` / `qsmx-integrable-transfer-examples` only.

## Plan and inventory reconciliation

The plan page identities, titles, category, library, companion links, order (A 909, B 910), and page prerequisites agree across the assigned design and `research/plan-spec.json`. The A page requires `qsm-local-ensemble-bridge` and `hopf-hecke-and-quantum-symmetry-interfaces`; the B page requires the A page. These page requirements are outside this run, so there are no in-run cross-batch edges for the cross-batch dependency file.

The assigned design in `research/plan-quantum-statistical-mechanics-frontier-expansion-track.md` L233 and its source `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/prose-scaffold.md#qsmx-integrable-transfer` specify four A items and one B item. The matching `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/inventory.json` entry has those same four A statements and the one-magnon B example. The corresponding A/B `items` arrays in `research/plan-spec.json` are still empty placeholders. I left that shared plan untouched and recorded the completed inventory in this batch manifest.

Three A-page proof carriers were added because the planned proof routes otherwise used unproved transitions: `lem-qsmx-monodromy-rtt` lifts the supplied Yang–Baxter equation to the ordered chain; `lem-qsmx-transfer-regular-point` proves the cyclic-shift value, invertibility and exchange logarithmic derivative; `thm-qsmx-regular-bethe-eigenpair` supplies the complete conditional Bethe-vector eigenvalue proof. They are placed before their consumers. This keeps the design's finite homogeneous spin-half XXX scope and its exclusions of singular-root regularization, descendants, completeness and thermodynamic conclusions.

The page summaries, item IDs and exact statement mirrors now agree with the two-page manifest. The A page has seven items, below the 100-item cap; the B page carries the one-magnon example.

## Dependencies and levels

Levels below are recomputed from in-batch item suppliers. External mathematical suppliers do not raise an in-run level.

| Level | Item | Direct item dependencies |
|---:|---|---|
| 0 | `def-qsmx-rational-monodromy` | `def-hh-rational-spectral-r-matrix` |
| 1 | `lem-qsmx-monodromy-rtt` | `def-qsmx-rational-monodromy`, `lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter` |
| 1 | `lem-qsmx-transfer-regular-point` | `def-qsmx-rational-monodromy` |
| 2 | `thm-qsmx-transfer-commutativity` | `def-qsmx-rational-monodromy`, `lem-qsmx-monodromy-rtt`, `lem-qsmx-transfer-regular-point` |
| 3 | `thm-qsmx-transfer-heisenberg-charge` | `def-qsmx-rational-monodromy`, `lem-qsmx-transfer-regular-point`, `thm-qsmx-transfer-commutativity` |
| 3 | `def-qsmx-regular-bethe-data` | `def-qsmx-rational-monodromy`, `thm-qsmx-transfer-commutativity` |
| 4 | `thm-qsmx-regular-bethe-eigenpair` | `def-qsmx-rational-monodromy`, `def-qsmx-regular-bethe-data`, `lem-qsmx-monodromy-rtt` |
| 4 | `ex-qsmx-one-magnon` | `thm-qsmx-transfer-heisenberg-charge` |

The selected DAG has no cycle. The current run-wide batch dependency record computes batch 106 at level 0; the A/B prerequisites above remain page-level requirements and are not item premises. The imported rational-R definition and Yang–Baxter proof were inspected at their current statements and complete proofs. Their missing per-run readiness snapshots do not constitute a mathematical gap, so they were not escalated.

All eight assigned items have Step 1 `ready` records with their direct item dependencies and scoped evidence. A fresh `loadStep1Record` / `step1Decision` check confirms all eight hashes are current. These records establish authoring readiness, not independent proof approval.

## Source reading and disposition

The source evidence and every harvested result disposition are in `research/physics-non-fluid-129-2026-10-21-r2-batch-106.coverage.json`. All listed sources were read in full at the cited sections; `source_resolution` is empty because no retrieval failed and no source was dropped.

- [Faddeev, *How Algebraic Bethe Ansatz Works for Integrable Model*](https://arxiv.org/pdf/hep-th/9605187), full 59-page PDF: §3, PDF pp. 7–10, equations (33)–(65), supports monodromy, RTT, regular point, commuting transfer matrices and exchange normalization; §4, pp. 10–16, equations (66)–(115), supports regular Bethe data, wanted/unwanted terms, eigenvalue formula and one-magnon conventions.
- [Classical and Quantum Integrable Systems, Lecture 14](https://vu-ff.github.io/integrability/en/lectures/14/), §§14.3–14.5, equations (14.2)–(14.9), Theorems 14.1–14.3, supports the Lax/monodromy convention, RTT lift and transfer commutativity.
- [Classical and Quantum Integrable Systems, Lecture 15](https://vu-ff.github.io/integrability/en/lectures/15/), §§15.2–15.8, equations (15.1)–(15.17), Propositions 15.1/15.3, Lemma 15.8, Theorem 15.7 and singular-root caveats, supports the regular point, exchange derivative and Bethe proof route.
- [Classical and Quantum Integrable Systems, Lecture 10](https://vu-ff.github.io/integrability/en/lectures/10/), §§10.2–10.3, equations (10.2)–(10.5), supports the periodic one-down-spin action and Fourier dispersion.

The A page is backed by the independent Faddeev and VU lecture-note treatments. `source-fetch-check --stamp` verified all five source entries (0 new stamps; 0 documented drops). The harvested 17 results have 17 explicit dispositions and no coverage warnings.

## Mathematical and physical scope

All eight items are mathematical finite-dimensional statements. The spectral parameter is dimensionless; real couplings are assigned joule units only when the exchange operator is interpreted as a physical energy. The one-magnon calculation and finite matrix checks are mathematical diagnostics, not observations or experimental proof. The Bethe theorem is conditional on the stated regular roots and nonzero vector and makes no completeness or singular-root claim.

Finite checks are evidence recorded in the proof contracts, not replacements for the arguments: N=3 RTT residuals vanish exactly at ordinary and singular differences; the regular-point identities and transfer commutator checks have exact residual zero; the Pauli-swap check is exact; the one-root Bethe case has the stated double-precision residuals; and the N=3 Fourier modes give eigenvalues/J `3, 0, 0` with the recorded matrix residuals.

## Scoped checks and external blockers

- `content-policy`: 8 items, 0 errors and 0 warnings.
- `precheck`: 6 proof-bearing items pass; both definitions are not applicable.
- `proof-layout`: 8 items, 20 numbered steps, 0 defects.
- `rendercheck`: all 8 items and 2 pages pass.
- Strict proof contracts: 8/8 items, 0 errors and 0 warnings; exact current supplier sections, step inputs and boundary cases are recorded.
- Coverage checklist: 2 pages, 17 harvested results, 0 errors and 0 warnings.
- Focused `depcheck`: 8 selected items pass, checking a prerequisite closure of 189 items and 43 pages with no errors or warnings.
- Selected item dependency levels are `0,1,1,2,3,3,4,4`, with no cycles. The run-level batch dependency snapshot was recomputed and checked: 129 batches, maximum level 5, batch 106 at level 0.
- Manifest/page/item consistency check: 2 pages and 8 items, 0 errors. `cross-batch-dependencies.json` is the valid empty array because there is no declared in-run cross-batch edge.

The run-wide `proof-contract-coverage.mjs` command cannot restrict itself to batch 106 and exits before scanning contracts with `Empty or invalid frontier page inventory emx-paraxial-optics`. The run-wide `item-dependency-levels.mjs check --run` likewise reports empty inventories in unrelated batch manifests; the selected batch DAG check above passes. The run-wide Step 1 checker remains open on work outside this batch. These are aggregate-run state, not missing mathematical prerequisites in this pair.
