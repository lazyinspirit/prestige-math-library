# Batch 37 authoring notes — qsm-local-ensemble-bridge

Run `physics-remaining-80-2026-10-17`, beta batch 37. This dispatch owns only
the A/B pair `qsm-local-ensemble-bridge` / `qsm-local-ensemble-bridge-examples`
and its batch evidence. All 16 authored items and both pages remain drafts.

## Plan comparison and conflicts

The complete design section in `research/plan-quantum-statistical-mechanics-track.md`
reserves 11 A items and 3 B counterexamples and originally lists four page
prerequisites. After concurrent shared-plan edits during this run, I reread
the assigned design section and current A/B plan-spec rows; their pair IDs,
order, companion and current requirements remain as recorded here. The
current owner-resolved `research/plan-spec.json` row has
eight page prerequisites and empty `items` arrays. The current plan controls:
the A manifest declares all eight current page requirements and the initial
item arrays are populated only for this assigned pair. No shared plan was
edited.

Two missing local mathematical definitions were added on the A page before
use: `def-qsm-local-finite-matrix-entropy` and
`def-qsm-local-matrix-net-completion`. This expands the original 11-item
reservation to 13 A items; the page remains below the 100-item cap.

The source inventory's `qsm-contract-td-M32` and `qsm-contract-td-M7` are
noncanonical pseudo-support IDs. The exact finite independent-shell claim is
instead taken from the present published
`thm-tdmath-independent-microcanonical-block-limit`; its finite compactness
steps use the inspected `thm-heine-borel-rn` and
`thm-extreme-value-metric` interfaces. The exact width, finite alphabet,
additive energy and fixed-block restrictions are preserved. This replacement
and its scope are recorded here rather than silently treating pseudo-IDs as
production suppliers.

## Inventory, dependency graph and levels

The A items are ordered supplier-first. Run levels below use the batch graph
and current batch-36 item levels, not labels from the research inventory:

| Item | In-run suppliers | Level |
|---|---|---:|
| `lem-qsm-local-hermitian-diagonalization` | none | 0 |
| `def-qsm-local-finite-tensor-state` | none | 0 |
| `def-qsm-local-finite-matrix-entropy` | finite tensor state; diagonalization | 1 |
| `def-qsm-local-additive-spectral-ensembles` | finite tensor state | 1 |
| `lem-qsm-local-subsystem-trace-tests` | finite tensor state | 1 |
| `def-qsm-local-matrix-net-completion` | Hermitian diagonalization (0) | 1 |
| `post-qsm-local-ensemble-preparations` | finite tensor state; additive ensembles | 2 |
| `lem-qsm-local-tensor-gibbs-factorization` | additive ensembles | 2 |
| `thm-qsm-local-classical-diagonal-embedding` | matrix-net completion (1) | 2 |
| `thm-qsm-local-independent-shell-equivalence` | finite tensor state (0); finite entropy (1); subsystem tests (1); Gibbs factorization (2) | 3 |
| `def-qsm-local-coercive-regulated-model` | batch-36 normal-state postulate (level 2) | 3 |
| `pthm-qsm-local-qualified-shell-measurements` | independent-shell theorem (level 3) | 4 |
| `pthm-qsm-local-regulated-interacting-gibbs` | batch-36 thermal postulate (5), trace-Gibbs theorem (4), entropy definition (2), normal-state postulate (2), local model (3) | 6 |
| `cex-qsm-local-empty-exact-band` | additive ensembles (level 1) | 2 |
| `cex-qsm-local-entropy-density-insufficient` | finite state; finite entropy; subsystem tests (max 1) | 2 |
| `cex-qsm-local-local-global-distinction` | finite state; subsystem tests (level 1) | 2 |

The current batch-36 manifest now contains the normal-state postulate,
thermal-preparation postulate and trace-Gibbs theorem as draft carriers. This
changed after the earlier empty-manifest snapshot. I inspected their actual
Statements/Postulates, the complete available trace-Gibbs argument and its
mathematical inputs before retaining the conditional uses here. Their current
interfaces match the uses, but no
current Step 1 records exist. The trace-Gibbs theorem cites
`supplier-thermo-M33` and `supplier-thermo-M16` as completed research proofs,
not production item carriers or proof-acceptance receipts. The normal-state
trace calculus similarly carries research-only `supplier-nrqm-M9` and
`supplier-nrqm-M2` inputs. Thus the two direct batch-37 consumers
`def-qsm-local-coercive-regulated-model` and
`pthm-qsm-local-regulated-interacting-gibbs` are fully authored conditionally
but remain escalated. The A1–A4 facts in the latter reproduce the actual
positive-temperature, normal-state, AC and variational hypotheses; the QFT
trace theorem supplies trace finiteness for every positive parameter. No
research-only support is treated as a production carrier or accepted proof.

The Q6 consumer also cites the current batch-36 draft
`def-qsm-relative-entropy-domain` to fix the infinite-dimensional entropy
convention. Its Definition matches the use, but it has no current Step 1
readiness record and inherits the same unresolved normal trace-state calculus
inputs. This is recorded as a separate direct cross-batch edge.

All A mathematical items have only mathematical prerequisites. Physical
postulates and physics theorems keep physical assumptions in their declared
roles; empirical premises are empty. The three B items are mathematical
counterexamples and make no empirical claims.

## Argument and scope review

- Finite tensor conventions use the ordered product basis, density matrices,
  Hermitian observable pairings and POVM effects. The trace pairing is
  mathematical until a separate P2 or QSM normal-state postulate supplies its
  physical probability interpretation.
- The independent-shell theorem uses exactly the published supplier's
  condition `delta_N >= q sum_j |e_j|` for every N and `delta_N/N -> 0`; it
  proves nonempty shells, fixed-k trace-norm convergence, and the entropy
  density limit only. It asserts neither global trace convergence nor an
  interacting/continuous equivalence.
- The diagonal C-star construction extends a consistent finite classical
  law to one state on the explicitly defined local matrix completion. It does
  not identify general quantum states as classical.
- The QFT model selects the form realization provided by the QFT suppliers.
  It does not assert essential self-adjointness of the bare differential
  expression, uniqueness among all extensions, regulator removal, or a
  continuum interacting QFT.
- The three counterexamples separately show empty zero-width bands, entropy
  density without local convergence, and fixed proper marginals without
  global trace-norm convergence. Their state constructions are hypothetical
  mathematics, not observations.

## Full-text source reading and disposition

The coverage file records complete source URLs, inspected locators, supported
items and each disposition. The A page has independent full-text treatments
from Watrous, Preskill, Tong and Arovas, including full textbooks/lecture
notes; Teschl and Laugesen supply additional form/spectral context; Shirbisheh
and Bekka supply C-star/state context. The B page uses Watrous and Arovas for
finite state and entropy conventions. Context sources are not used as a
substitute for the local proofs. The exact shell theorem and QFT trace result
are local published suppliers whose statements and proofs were inspected.

`source-fetch-check --stamp` fetched and stamped all 10 source entries (8
unique full-text URLs).
No retrieval failure occurred, so there are no recovery attempts or
`source_resolution` changes. The source stamps establish full-text retrieval,
not mathematical acceptance.

## Evidence and checks

The manifest and both page inventories are populated with 13 A items and 3 B
counterexamples, below the page cap. The A page's prerequisite list matches
the current eight-page plan. The final scoped checks report:

- `manifest-deps`: 16 items, no missing dependency arrays or errors.
- `content-policy`: 16 scoped items, 0 errors and 0 warnings.
- focused `depcheck`: selected item/page checks and prerequisite-cycle checks
  passed.
- `proof-layout`: 16 explicitly changed items, 31 steps, 0 defects.
- strict proof contracts: 16/16 items, 0 errors and 0 warnings.
- `rendercheck`: all 18 assigned item/page files pass YAML and KaTeX parsing,
  with no broken math delimiters or multiline displays.
- `source-fetch-check`: 10/10 source entries (8 unique URLs)
  fetch-verified, 0 documented drops.
- Scoped batch-36/37 item-level recomputation: all 16 batch-37 levels match
  their current in-run suppliers and there are no assigned cycles.

Step 1 records currently show 14/16 batch-37 items ready and no stale or
missing batch-37 records. The final run check observed 385 items, 166 ready,
and `closed: false`. The two escalations are
`def-qsm-local-coercive-regulated-model` and
`pthm-qsm-local-regulated-interacting-gibbs`, because their current batch-36
QSM inputs are draft without Step 1 readiness and retain the research-only
NRQM M9/M2 and Thermodynamics M33/M16 supports described above. The other
unfinished pairs remain outside this dispatch.

The full run item-level checker exits nonzero with 130 errors across other
unfinished manifests (empty inventories and unrelated stored-level
mismatches); it reports no batch-37 item error. The run-wide
`batch-dependency-levels` check passes for 80 batches with maximum level 8.
The current batch-37 row remains level 1 with `requires: [36]`. These run-wide
item-level errors do not change the passing scoped batch-36/37 item-level
recomputation above.

The item and page carriers remain drafts. Readiness and completion records
are authoring evidence only and do not constitute independent proof approval.
