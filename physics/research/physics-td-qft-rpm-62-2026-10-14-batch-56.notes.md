# Batch 56 notes — qft-f02 / qft-f02-examples

Run `physics-td-qft-rpm-62-2026-10-14`, beta batch 56, assigned pair qft-f02
(order 551) and qft-f02-examples (order 552). The owner authoring direction,
repository and physics content rules, full assigned plan section, plan-spec,
batch inventory, and current supplier statements and proofs were inspected
before and during authoring. The A page contains three items and the B page one,
within the page cap. Both pages and all four carriers remain drafts.

## Plan comparison and conflicts

The assigned QFT-F02 design section describes the exact real-scalar free
specialization and its conditional free-field deductions. The current
plan-spec and assigned task give the A page requirement `qft-f01`; the B page
is the `qft-f02` companion. The broader pair-level design dependency text also
names the QFT-MF01, QFT-MF02, and QFT-MF04 mathematical supplier groups. These
are item-level mathematical inputs, not extra A-page `requires` entries in
the current plan-spec. The A page therefore keeps `requires: [qft-f01]`, while
every actual mathematical supplier remains explicit on the consuming item
frontmatter and in the batch manifest. No prerequisite is erased.

The design inventory is preserved: `def-qft-free-scalar-model`,
`pthm-qft-scalar-free-properties`, `pthm-qft-scalar-vacuum-moments`, and the
B-page `ex-qft-scalar-vacuum-correlation`. The exact conventions and caveats
remain in scope: real scalar species, inverse-length shell parameter
`mu >= 0`, massless branch, canonical dimension `m^-1`,
`H_phys = hbar c dGamma_s(omega_mu)`, exact multiplier domain, conditional
model deductions, and no interacting convergence, point-field product,
renormalized local product, empirical universality, or signaling claim.

## Inventory, dependencies, and levels

The run's stored batch-dependency evidence is stale and owner-controlled. A
read-only recomputation from current run manifests gives batch 51 level 4
(requires 37, 38, 40, 42, 43) and batch 56 level 5 (requires 37, 38, 40,
43, 51); current manifest input hash `52b83c98f6ceba66025c6842d4ac86f976d7a667c1a0aaa42cdb104ec7058d91`. The assigned item levels use actual current in-run supplier levels:

| Item | In-run supplier levels used | Item level |
| --- | --- | ---: |
| def-qft-free-scalar-model | post-qft-free-field-model (6), def-qft-framework-units (0), def-qft-scalar-mass-shell (0), def-qft-fock-and-test-spaces (0), lem-qft-second-quantized-spectrum (0), lem-qft-smeared-free-scalar (3) | 7 |
| pthm-qft-scalar-free-properties | post-qft-free-field-model (6), def-qft-free-scalar-model (7), mass-shell (0), smeared scalar (3), causal commutator (4), second-quantized spectrum (2), local Weyl algebra (5) | 8 |
| pthm-qft-scalar-vacuum-moments | post-qft-free-field-model (6), def-qft-free-scalar-model (7), smeared scalar (3), Segal Weyl domain (2), time-ordered kernel (5) | 8 |
| ex-qft-scalar-vacuum-correlation | pthm-qft-scalar-free-properties (8), mass-shell (0) | 9 |

Countable Choice and the named mathematical analysis suppliers are outside
this run and do not raise these levels. The B example directly depends on the
published mathematical sphere-angle lemma
`lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates`, in addition
to the radial polar formula. Its complete Statement and Proof were inspected.
This supplies the chart surface measure `sin(theta) dtheta dvarphi` and
`sigma(S^2)=4 pi`; the angular factor is not left to an unsupported cross-
product/Jacobian assertion. The new dependency is recorded in both the B-item
frontmatter and this batch manifest. The within-batch graph is acyclic and
supplier-first.

The stored batch-dependency file was not rewritten. Its check reports stale
shared scheduling metadata, which the owner must refresh. The canonical
autopilot status command was attempted with the assigned run/state directory,
but live recomputation is unavailable because the stored workflow revision
differs from current stage numbering; it reports that a fresh run/state
directory is needed and no current `status.md` exists. No shared run state was
changed.

The item-level checker reports no qft-f02 level errors, but exits nonzero for
unrelated active-run issues: empty inventories on
`rpm-external-charge-examples`, `qft-x03`, and `qft-x03-examples`; and stale
labels on `thm-qft-example-soft-current-angular-coherent` (3, computed 4),
`ex-qftmath-x06` (4, computed 5),
`post-qft-formal-qed-coefficients` (7, computed 6),
`pthm-qft-qed-formal-ward` (8, computed 7), and
`texp-qft-qed-infrared-sequence` (5, computed 8). These unrelated inventory
and label issues are not changed by this batch.
## Supplier interface and readiness review

- The current QFT-F01 page and `post-qft-free-field-model` carrier are now
  present. The exact real-scalar action, statistics/vacuum assignment,
  massless branch, and field conventions were inspected. The postulate is still
  draft and its current Step 1 record is escalated: `def-qft-framework-units`
  has no current receipt, `def-qft-dirac-projections` remains escalated, and
  the smeared-scalar and Dirac CAR-locality receipts remain escalated through
  QFT-MF01/MF02 edges. Every dependent qft-f02 item remains conditional and
  escalated.
- While authoring, the postulate's [L1] action-variation reference was
  corrected upstream. Its current text now matches the actual
  `lem-qft-free-action-equations` carrier, whose complete Statement and Proof
  and current ready Step 1 record were read. An earlier observation that [L1]
  named an absent carrier is superseded by this current interface. The ready
  action-variation item does not make the postulate itself ready.
- `def-qft-framework-units` exists, but has no current Step 1 readiness record;
  its QFT-C01/batch-40 artifacts remain incomplete. It is used conditionally.
- `def-qft-scalar-mass-shell`, `def-qft-fock-and-test-spaces`,
  `lem-qft-second-quantized-spectrum`, and `lem-qft-segal-weyl-domain` have
  current ready Step 1 records. Their full statements and complete proofs
  were inspected at the exact claimed interfaces.
- `lem-qft-smeared-free-scalar`, `lem-qft-scalar-causal-commutator`, and
  `lem-qft-scalar-local-weyl-algebra` have current escalated records because
  required QFT-MF01/batch-37 artifacts remain unresolved. Their complete
  current statements and proofs were inspected; the qft-f02 uses are
  conditional and do not treat their titles as approval.
- `lem-qft-free-time-ordered-kernel` exists in the current QFT-MF04/batch-43
  manifest and has a current ready Step 1 record. Its exact Fourier extension,
  equal-time prescription, Wightman restrictions, and Green-equation sign
  match the vacuum-moments use. Its conditional upstream field interfaces are
  preserved.
- Imported mathematics is used only through its inspected mathematical
  statements. In particular, the angular-coordinate sphere lemma is an
  existing published mathematical supplier; no physics result is used as a
  mathematical premise.

All four final qft-f02 readiness records are `escalated`: the definition and
both A-page theorems require at least one missing or escalated physical input,
and the B example inherits the escalated A-page locality result. The exact
examined dependency lists and unresolved inputs are recorded in the Step 1
records. No record is marked ready or written with owner authority.

## Source reading and dispositions

The A page is backed by two independent full-text treatments: David Tong's
complete author-hosted QFT lecture-note HTML, Chapters 2 and 3, and Mark
Srednicki's complete author-hosted 616-page book draft. The B page uses Tong
Chapter 2 and Srednicki. The complete Tong chapters and complete Srednicki
book were inspected. The relevant passages include Tong §§2.2–2.4, §2.6.1,
§2.7 and §3.3.1, and Srednicki §3, printed pp. 36–42, and §8, pp. 67–69.
Exact locators, supported items, limitations, harvested results, and
per-result dispositions are recorded in batch-56.coverage.json. Existing
fetch stamps are reused for Tong Chapter 2 (393,517 bytes,
`fc7652fe8703434b`), Tong Chapter 3 (424,967 bytes,
`a553be3508a1b1bc`), and Srednicki (3,452,472 bytes, 616 pages,
`7990bad06ed96750`). `source-fetch-check --stamp` verified the five active
source records and one documented drop; it fetched no duplicate body.

Tong's complete PDF delivery URL remains in coverage history with its six
actual attempts, all reporting `compressed PDF page count could not be
verified with mutool`. It is dropped as a delivery URL only; the complete
Chapter 2 HTML alternative is opened, stamped, and inspected. The massless
example provides its full local regulated-kernel argument and all declared
mathematical inputs, so the dropped URL waives no mathematical coverage.

The model literature is convention context, not operator-domain proof. Tong
and Srednicki use source-specific mode and unit conventions; local item
statements fix `(-+++)`, `x^0=ct`, the shell phase, SI factors and exact Fock
domains. The sources provide no experimental report, measurement, or
statistical inference in this batch.


## Scoped validation results

- `precheck`: 4 items supplied, 3 proof-bearing items checked, 0 failures; the
  definition is not applicable.
- `rendercheck`: all 4 items and both pages checked, 0 errors and 0 warnings.
- `content-policy`: 4 scoped items, 0 errors and 0 warnings.
- Focused `depcheck`: 4 selected items and their dependency closure checked,
  1,508 items and 339 pages, 0 errors and 0 warnings.
- `proof-contract --strict`: all 4 items checked, 0 errors and 0 warnings.
- `coverage-checklist`: 2 pages and 9 harvested results, 0 errors and
  0 warnings. `source-fetch-check` resolves all 6 source records: 5 current
  fetch stamps and 1 documented PDF delivery-URL drop.
- `proof-layout` on the 4 changed items: 16 numbered steps, 0 defects. The
  installed TypeScript fallback does not read the web `@/` path mapping, so a
  temporary resolver under `/tmp` mapped the web aliases for the real SSR
  renderer; no application or shared workspace files were modified.
- `step1-decisions check` shows all 4 assigned items escalated with current
  dependency hashes and `owner: false`. The run is not globally closed; the
  check reports 243 other ready items and unresolved work outside this batch.
- The full run item-level dependency check has no qft-f02 errors but reports
  the unrelated inventory and level-label issues listed above. The batch-level
  check reports stale shared metadata; the read-only recomputation above gives
  batch 56 level 5 and input hash
  `52b83c98f6ceba66025c6842d4ac86f976d7a667c1a0aaa42cdb104ec7058d91`.

## Proof audit and remaining owner inputs

The scalar field equation in `pthm-qft-scalar-free-properties` is derived
from the exact shell phase and mass-shell identity by integration by parts;
it does not rely on the postulate's action-variation claim. The Hamiltonian
proof checks the vacuum sector, positive-energy almost-everywhere support,
the massive infimum and massless no-gap case. The vacuum-moments proof derives
the odd/even Wick recursion from the current CCR interface, substitutes the
`sqrt(2)` Segal scale explicitly, and uses the current exact time-ordered
kernel carrier for the coincidence extension and Green normalization.

The B example constructs dimensioned nonnegative compact tests with strictly
spacelike-separated supports. It damps the massless shell kernel by
`exp(-delta |k|)`, evaluates the exact angular integral using the inspected
sphere-angle and radial polar suppliers, proves absolute integrability before
Fubini, uses the shell-vector L2 bound for dominated convergence, and takes a
uniform kernel limit on the compact spacelike support-difference set. This
proves a strictly positive model vacuum correlation while the conditional
locality theorem gives zero field commutator and commuting local Weyl
operators. It asserts no experiment or signaling result.

Owner follow-up remains necessary for current qft-f01 readiness and repair of
the escalated QFT-MF01 suppliers, as already identified in active-run
artifacts. The batch leaves those artifacts, shared plans, run state,
published items, and verdicts untouched. Completion records are scaffolding
evidence only, not independent approval.
