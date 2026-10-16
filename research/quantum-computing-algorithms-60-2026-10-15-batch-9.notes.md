# Batch 9 — scaffold and owner-hold evidence

Run: `quantum-computing-algorithms-60-2026-10-15`  
Pair: `circuit-syntax-denotational-semantics-and-measurement`  
Dispatch dependency level: 5; prerequisite batches: 2, 4, 5, 8.  
Scheduling input: `9b2c249d4992d9068191bb0f9b1490b0713c8529fcbaa1869bd16d178d892f85`.

## Plan and design reconciliation

The pair metadata in `research/plan-spec.json` and the batch 9 manifest agrees:
orders 2182–2183, category `quantum-computing`, the assigned A/B IDs, titles,
companion relation, and page requirements all match. The QC track design at
`research/plan-quantum-computing-track.md` L83 gives the scope as circuit
syntax and semantics, wire order, composition, measurement, classical control,
and deferred measurement. No page-identity or scope conflict was found.

The design fixes the root inner-product convention as linear in the first
argument and defines Dirac notation by reversing the root pairing. Register
basis order and endianness must be explicit. A measurement branch is normalized
only at positive probability; zero-probability conditional states remain
undefined. A matrix description does not grant controlled or inverse black-box
access. The QC09 audit (`research/scaffold-audit-2026-10-14/quantum-computing.md`
L19) retains chronological composition, local-gate embedding, disjoint-layer
commutation, distinct observed and hidden Kraus labels, reference-preserving
deferred measurement, and the resource model before QC14.

The run plan and batch 9 manifest currently contain empty `items` arrays. The
current audited QC proposal export has 11 A-page items and one B-page example.
That is an unmaterialized authoring inventory, not a scope conflict. The
run-level owner direction and the QC design both impose a pre-authoring hold
until the root repairs the inherited prerequisite graph and the actual proposal
checker passes. This condition applies before QC09 authoring; the batch task's
ordinary parallel-authoring instruction covers missing pair suppliers and does
not clear this separate owner hold. The proposal inventory below is therefore
documentary only and has not been copied into the run manifest.

The current QC proposal records a source-locator mismatch for every listed
QC09 contract, including the B example: the Preskill URL points to Chapter 3,
while its locator also names Chapter 5 §5.3. Chapter 5 has its own URL,
`https://www.preskill.caltech.edu/ph219/chap5_15.pdf`. Batch source evidence
keeps Chapter 3 §§3.1–3.3 and Chapter 5 §5.3 as separate records; future item
carriers should do the same.

## Proposed QC09 inventory and dependencies

These IDs, direct dependencies, and levels are from the current audited
`research/quantum-computing-planning/proposed-items.json`. They remain
provisional until materialized and independently checked against the full
run's current manifests and carriers.

| Item | Kind | Proposed level | Declared direct dependencies |
|---|---|---:|---|
| `def-qc-circuit-syntax-and-register-order` | definition | 2 | `def-qc-register-and-computational-basis`, `def-qc-ordered-bitstring-encoding` |
| `def-qc-circuit-denotational-semantics` | definition | 5 | `def-qc-circuit-syntax-and-register-order`, `def-qc-tensor-register-and-permutation`, `lem-qc-local-gate-wire-embedding`, `lem-qc-disjoint-layer-order-independence` |
| `def-qc-classical-control-and-measurement-circuit` | definition | 6 | `def-qc-projective-measurement`, `def-qc-povm-and-outcome-law`, `def-qc-instrument-and-conditional-state`, `def-qc-controlled-unitary-access` |
| `def-qc-elementary-circuit-resources` | definition | 3 | `def-qc-circuit-syntax-and-register-order` |
| `lem-qc-local-gate-wire-embedding` | lemma | 3 | `def-qc-circuit-syntax-and-register-order`, `def-qc-tensor-register-and-permutation` |
| `lem-qc-disjoint-layer-order-independence` | lemma | 4 | `lem-qc-local-gate-wire-embedding` |
| `thm-qc-circuit-inverse-reversal` | theorem | 7 | `def-qc-circuit-denotational-semantics`, `def-qc-inverse-unitary-access` |
| `def-qc-measurement-branch-output-law` | definition | 5 | `def-qc-povm-and-outcome-law`, `def-qc-instrument-and-conditional-state` |
| `lem-qc-coherent-record-isometry` | lemma | 6 | `def-qc-instrument-and-conditional-state`, `def-qc-kraus-representation`, `thm-qc-trace-preserving-kraus-normalization` |
| `thm-qc-deferred-measurement` | theorem | 8 | `lem-qc-coherent-record-isometry`, `def-qc-classical-control-and-measurement-circuit`, `thm-qc-finite-kraus-choi-stinespring-equivalence` |
| `thm-qc-terminal-measurement-circuit-equivalence` | theorem | 9 | `thm-qc-deferred-measurement`, `def-qc-measurement-branch-output-law` |
| `ex-qc-deferred-measurement-one-bit` | example | 9 | `thm-qc-deferred-measurement` |

## Cross-batch supplier checks still open

The following direct supplier item files are absent from current `items/`.
Their planned interfaces can guide a future draft but do not establish that the
suppliers are complete, accepted, or available as proof premises.

| Supplier and owning page | Required interface and hypotheses from current proposal | Declared supplier dependencies |
|---|---|---|
| `def-qc-register-and-computational-basis` (batch 2) | Finite register `C^d`, `d ≥ 1`, ordered computational basis; the `n=0` qubit register is one-dimensional, not the zero space. | `def-real-and-complex-inner-product-space`, `def-dimension`, `lem-standard-basis-of-f-n` |
| `def-qc-ordered-bitstring-encoding` (batch 2) | Big-endian `enc(x)=Σ_k x_k 2^(n−1−k)`; empty bitstring index is 0; fix ordered multi-register basis convention. | `def-qc-register-and-computational-basis` |
| `def-qc-tensor-register-and-permutation` (batch 2) | Product pairing on elementary tensors, lexicographic product basis, factor order as register data; prove multilinearity relations and positive definiteness. | `def-qc-register-and-computational-basis`, `def-real-and-complex-inner-product-space`, `def-dimension` |
| `def-qc-projective-measurement` (batch 4) | Finite labeled, pairwise orthogonal self-adjoint projections summing to identity; zero projections allowed; probability consequences separate. | `def-non-negative-and-positive-operator`, `def-qc-density-operator` |
| `def-qc-povm-and-outcome-law` (batch 4) | Finite effects `E_a ≥ 0` summing to identity and weights `p_a=tr(ρE_a)`; outcome space and effect types explicit; prove normalization separately. | `def-non-negative-and-positive-operator`, `def-qc-density-operator`, `def-trace-of-an-endomorphism`, `def-qc-finite-positive-effect-family` |
| `def-qc-instrument-and-conditional-state` (batch 4) | Finite CP outcome maps with `Σ_a tr(I_a(X))=tr(X)`; normalize `I_a(ρ)/p_a` only when `p_a>0`, otherwise use `⊥`; CP is defined by finite ancilla extensions. | `def-qc-completely-positive-map`, `def-trace-of-an-endomorphism`, `def-qc-density-operator` |
| `def-qc-controlled-unitary-access` (batch 8) | Control-first `C(U)=diag(I,U)`; controlled black-box access is an explicit capability, with control/target order and activation convention stated. | `def-qc-tensor-register-and-permutation`, `def-qc-one-qubit-gate-alphabet-and-rotations` |
| `def-qc-kraus-representation` (batch 5) | Finite rectangular operators `K_a` and `Φ(X)=Σ_a K_a X K_a†`; specify input domain and rectangular adjoints; CP proof separate. | `def-linear-map`, `def-qc-dirac-notation-conversion` |
| `thm-qc-trace-preserving-kraus-normalization` (batch 5) | For the Kraus map on all input matrices, trace preservation iff `Σ_a K_a†K_a=I`; expand rectangular traces and prove the converse using nondegenerate trace pairing. | `def-qc-kraus-representation`, `def-qc-quantum-channel`, `def-trace-of-an-endomorphism`, `thm-trace-of-ab-equals-trace-of-ba`, `thm-matrix-of-the-adjoint-is-the-conjugate-transpose` |
| `thm-qc-finite-kraus-choi-stinespring-equivalence` (batch 5) | Finite-dimensional CPTP map iff positive Choi matrix with its TP partial-trace condition, finite complete Kraus family, and isometric Stinespring dilation followed by partial trace; factor and environment order must be fixed. | `thm-qc-kraus-choi-equivalence`, `thm-qc-trace-preserving-kraus-normalization`, `thm-qc-choi-trace-preservation-condition`, `thm-qc-finite-stinespring-dilation`, `thm-qc-isometry-partial-trace-is-channel` |
| `def-qc-inverse-unitary-access` (batch 8) | Inverse access explicitly supplies `U†=U⁻¹`; black-box inverse queries are separately declared and charged, never inferred for free. | `def-qc-controlled-unitary-access` |

The page-level prerequisites are the four batch pages named in the assignment:
QC02 registers/tensors, QC04 measurements/instruments, QC05 channels, and QC08
controlled gates. No actual bodies for the listed item suppliers were present
for inspection, so their hypotheses, definitions, conventions, and proofs have
not been verified against authored suppliers. In particular, later review must
check the reference-extension/partial-trace argument for
`thm-qc-deferred-measurement`, and the outcome-map/POVM relationship used by
`def-qc-measurement-branch-output-law`; the proposal names these obligations
but they do not substitute for supplier text. The proposed instrument
definition supplies CP outcome maps but does not include branch-wise Kraus
families. `thm-qc-deferred-measurement` therefore needs the exact finite-Kraus
existence result `thm-qc-kraus-choi-equivalence` applied to each outcome map,
with the outcome label retained. Selecting a Kraus list for each of finitely
many outcomes is a finite induction and requires no choice axiom. That supplier
is currently only transitive through the proposed QC05 channel
equivalence dependency; confirm the proof contract exposes this use directly
or add the direct dependency. A Kraus representation of the total channel alone
does not justify grouping operators by observed outcome.

## Owner hold and current disposition

`research/quantum-computing-algorithms-60-2026-10-15-owner-authoring-direction.md`
requires owner integration of the inherited prerequisite repairs and a passing
actual proposal checker before dependent quantum authoring. The preparation
records confirm this remains unresolved:

- `research/quantum-planning-review/prerequisite-repairs.json` is `draft-planning`.
- `research/quantum-planning-review/mechanical-check.json` records a pass for
  structural proposal checks. The separate
  `research/quantum-planning-review/root-prerequisite-closure.json` still
  contains these 10 inherited logical remark targets:
  `rem-heine-criterion-choice-cost`, `rem-sup-conventions`,
  `rem-metric-axiom-conventions`,
  `rem-real-and-complex-normed-space-convention`,
  `rem-real-exponents-deferred`,
  `rem-zero-times-infinity-convention-for-pointwise-products`,
  `rem-complex-plane-euclidean-dictionary`,
  `rem-euclidean-topology-dictionary`,
  `rem-complex-contours-as-planar-rectifiable-paths`, and
  `rem-plane-star-shaped-and-convex-dictionary`.
- `research/quantum-planning-review/planned-repair-check.json` reports a
  virtual pass only; `actual_library_closure` is `hold`, with 18 consumer
  repair recipes and 14 proposed prerequisite suppliers.
- `research/quantum-build-60-2026-10-15-owner/escalation.json` says the 10
  inherited remark targets and 18 consumer recipes remain unexecuted and names
  the smallest supplier proposals. Those proposals are the 14 IDs in that
  evidence file: `thm-complex-coordinate-map-preserves-real-scalar-multiplication`,
  `thm-complex-coordinate-isometry-and-topology-transport`,
  `thm-complex-coordinate-map-preserves-real-total-differentiability`,
  `def-complex-path-polygonal-length-and-rectifiability`,
  `thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed`,
  `thm-complex-path-length-invariant-under-monotone-reparametrization`,
  `def-measurable-pointwise-extended-real-product`,
  `def-complex-norm-and-complex-normed-space`,
  `lem-complex-modulus-of-real-embedding-equals-real-absolute-value`,
  `lem-complex-norm-realification-is-a-real-norm`,
  `lem-complex-coordinate-l1-is-a-norm`, `def-complex-normed-subspace`,
  `lem-complex-normed-subspace-realifies-to-real-normed-subspace`, and
  `def-equivalent-complex-norms`.
- The separate `quantum-prerequisites-4-2026-10-15` status report says
  `COMPLETE`, while warning that its historical Step-6 state requires guarded
  cutover for live status. The current run direction adopts no execution or
  review coverage from the earlier combined run. This completion report does
  not resolve the outstanding owner source-repair integration.
- Recomputed current status is `PAUSED` at `1-scaffold`: 3/60 batches are
  covered, batches 1–9 and 49 more are listed as missing, all 60 scaffold
  artifacts are reported missing, and no workers are in flight. The current
  run manifests contain 70 items in batches 3, 6, and 13; batch 9 remains
  empty. These other-batch inventories do not clear the batch 9 or owner holds.

Accordingly, batch 9 items, A/B pages, item inventory, proof contracts,
item-level source dispositions, readiness records, and cross-batch input
updates were not created. The batch source coverage file is listed below. No
`step1-decisions record` was issued because the batch 9
proposed IDs are not registered in its empty manifests; the tool accepts
records only for current run item IDs. The owner must integrate the actual
repairs, pass the actual strict proposal/root-closure checker, and verify the
no-remark prerequisite closure before this batch can proceed past its hold.

## Checks and source evidence

- `node tools/batch-dependency-levels.mjs check --run
  quantum-computing-algorithms-60-2026-10-15`: an initial snapshot passed
  (60 batches, maximum level 15). A fresh check after concurrent manifest and
  carrier changes now fails while parsing `items/def-qc-ensemble-and-purification.md`
  line 19: its unquoted Preskill source title contains a colon. No repair was
  made because that item is outside batch 9. The current graph could not be
  recomputed. Level 5, prerequisites 2, 4, 5, and 8, and input hash
  `9b2c249d4992d9068191bb0f9b1490b0713c8529fcbaa1869bd16d178d892f85` are the
  dispatch values, not a verified post-change level.
- `node tools/item-dependency-levels.mjs check --run
  quantum-computing-algorithms-60-2026-10-15`: FAIL. Batch 9's two pages and
  112 other pages have empty inventories; the 70 items in batches 3, 6, and
  13 have declared levels that differ from levels recomputed against the
  partial current manifests. This is incomplete construction evidence; it does
  not validate their final intended levels. The proposed levels in the table
  above are not a check of current run manifests.
- `node tools/step1-decisions.mjs check --run
  quantum-computing-algorithms-60-2026-10-15`: FAIL, 70 items, 0 ready, and
  empty scaffold inventories on 114 pages, including both batch 9 pages.
- `node tools/proof-layout.mjs` was not run because no item carrier changed.
- `node tools/source-fetch-check.mjs --coverage
  research/quantum-computing-algorithms-60-2026-10-15-batch-9-sources.json
  --stamp`: PASS, 3/3 sources full-text fetch-verified; the cached PDF hash
  prefixes match all three fresh stamps.

The full relevant text was inspected in the cached PDFs and their extracted
page text. Preskill Chapter 3 §§3.1–3.3 (PDF pp.4–24) develops projective and
generalized measurement, outcome-dependent state updates, finite POVMs,
operator-sum channels, complete positivity, and Stinespring dilation. These
are mathematical source treatments; its physical measurement postulates are
context only and are not proof premises. Preskill Chapter 5 §5.3 (PDF pp.22–24)
defines the finite circuit model, explicit local unitary gates, final readout,
and states that intermediate measurements can be postponed, without proving
that claim. de Wolf §2.1.2 (PDF pp.26–28) treats circuit wires, gate input
order, tensor and serial composition, final computational-basis readout, and
inverse circuits; §2.2 begins on PDF p.28. Chapter 2, Exercise 8 asks the
reader to prove deferred measurement using one auxiliary qubit per delayed
one-qubit result. Neither source supplies the local product-basis lemmas or
the full branch-preserving, reference-correlating finite-instrument proof.

The source records in
`research/quantum-computing-algorithms-60-2026-10-15-batch-9-sources.json`
map these treatments to the supported QC09 contracts and state each source's
limits. No source was dropped and no retrieval failed, so no
`source_resolution` recovery record was required. The corrected source route
is Preskill Chapter 3 at
`https://www.preskill.caltech.edu/ph219/chap3_15.pdf`, Preskill Chapter 5 at
`https://www.preskill.caltech.edu/ph219/chap5_15.pdf`, and de Wolf at
`https://arxiv.org/pdf/1907.09415`.

## Owner-released authoring continuation (2026-10-15 18:14 UTC)

This section records the current continuation and supersedes the historical
prerequisite hold and “items/pages not created” disposition above. I re-read
the current owner direction and `authoring-release.json`: the owner released
the hold for all 60 pairs after actual integration of 71 repairs and an actual
source-planning PASS. This authoring release grants draft work only; it is not
mathematical acceptance or publication permission. No shared plan, published
item, owner verdict, or Autopilot state was edited.

### Plan and inventory reconciliation

The current QC track design fixes the root pairing as linear in the first
argument, uses ordered finite register bases, distinguishes a branch outcome
from a hidden Kraus index, assigns conditional states only at positive branch
weight, and does not infer controlled or inverse access from a matrix. The
current `plan-spec.json` A/B pair metadata agrees with the current QC proposal
export for orders 2182–2183, titles, category, companion relation, and all four
A-page `Requires` edges (QC02, QC04, QC05, QC08). Its QC09 `items` arrays are
empty, while the audited QC proposal export supplies 11 A items and one B
example. This is an inventory omission in the machine plan, not a page-identity
conflict; the batch manifest now contains the full assigned contracts plus
four local A-page prerequisites required by the proofs. The old embedded
pre-authoring hold in the historical notes is superseded by the owner release.

The original source inventory attached Preskill Chapter 5 §5.3 to the Chapter
3 PDF URL. The current source map separates the full Chapter 3 and Chapter 5
PDFs and records the corrected locators. The A page has 15 items, well below
the 100-item cap; the companion B page has one worked example. The 11 proposed
A-page IDs and the B example are preserved. Four proved local results were
added to the A page:

The dispatch dependency contract remains batch level 5 with prerequisite
batches 2, 4, 5, and 8. The page-level `Requires` edges have not changed, and
the current item-level DAG has no QC09 cycle. The global batch-level checker
cannot certify the post-edit batch graph while it encounters unrelated
malformed YAML described below; its shared derived state was not written.

- `lem-qc-finite-isometry-unitary-extension` supplies a finite padding and
  orthogonal-complement extension, with no synthesis or cost claim.
- `lem-qc-instrument-output-space-is-nonzero` derives the nonzero output-space
  hypothesis needed to apply that extension to an instrument.
- `thm-qc-instrument-kraus-normalization` derives total branch Kraus
  normalization directly from the instrument trace identity and the existing
  QC02 nondegenerate trace-pairing lemma.
- `thm-qc-instrument-induces-povm` proves existence, outcome law, positivity,
  normalization, and uniqueness of the induced effects.

The final item dependency levels were recomputed from the live manifests. The
items appear in supplier-first order:

| Level | QC09 items |
|---:|---|
| 2 | `def-qc-circuit-syntax-and-register-order`; `lem-qc-finite-isometry-unitary-extension` |
| 4 | `lem-qc-local-gate-wire-embedding` |
| 5 | `lem-qc-disjoint-layer-order-independence` |
| 6 | `def-qc-circuit-denotational-semantics`; `lem-qc-instrument-output-space-is-nonzero`; `thm-qc-instrument-kraus-normalization` |
| 7 | `lem-qc-coherent-record-isometry`; `thm-qc-instrument-induces-povm` |
| 8 | `def-qc-classical-control-and-measurement-circuit`; `def-qc-elementary-circuit-resources`; `def-qc-measurement-branch-output-law` |
| 9 | `thm-qc-circuit-inverse-reversal`; `thm-qc-deferred-measurement` |
| 10 | `thm-qc-terminal-measurement-circuit-equivalence`; `ex-qc-deferred-measurement-one-bit` (B) |

The local instrument proof route does not rely on QC05's separate
trace-preserving-Kraus theorem. It proves the needed branch-family identity
from the trace-preserving instrument definition and
`lem-qc-trace-pairing-nondegenerate` on QC02. The POVM proof groups Kraus
families by observed outcome. The coherent dilation retains the observed label
separately from hidden Kraus indices, carries an arbitrary finite reference,
and keeps the label record available for later feed-forward. The terminal
equivalence is an induction on finite fixed-register measurement-history
trees, with every history label kept in its own orthogonal record subspace.
The output-space lemma supplies the previously implicit nonzero-output
hypothesis for unitary padding. All finite basis choices are explicit and no
choice axiom is used.

### Current supplier and cross-batch status

The QC05 page carrier appeared in the working tree during this continuation;
I re-read the current page and batch-5 manifest instead of retaining the stale
“page absent” observation above. The current QC05 A page has 19 assigned items
and all 19 item carrier files are present. I inspected the exact Kraus–Choi
supplier `thm-qc-kraus-choi-equivalence` and its three proof components:
complete positivity implies Choi positivity, a positive Choi matrix yields a
finite Kraus family, and a finite Kraus sum is completely positive. The exact
QC09 trace-pairing dependency is the present QC02 item
`lem-qc-trace-pairing-nondegenerate`; no QC09 item depends on the previously
seen batch-5 alias `lem-qc-nondegenerate-trace-pairing`.

Current required page and item interface evidence is in
`research/quantum-computing-algorithms-60-2026-10-15-batch-9.cross-batch-dependencies.json`:
five page edges and 61 cross-page item edges are all `verified`, with zero
open rows. “Verified” records current statement/interface inspection only; it
does not certify independent mathematical acceptance. The exact QC02, QC04,
QC05, and QC08 supplier bodies used in the proofs were inspected, including
the relevant instrument, tensor/partial-trace, controlled-access,
Kraus/Choi, and adjoint conventions.

### Sources, contracts, and finite evidence

The A-page source map has four full-text treatments: Preskill Chapter 3
(65-page PDF), Watrous *The Theory of Quantum Information* §§2.2.2 and 2.3.2
(598-page author-hosted PDF), Preskill Chapter 5 (54-page PDF), and de Wolf's
full 239-page lecture notes. It has two independent circuit/measurement
treatments and includes both a textbook and full lecture notes. The companion
uses three of those sources. Per-item `included`, `inline`, and `out-of-scope`
dispositions and full-text locators are recorded in
`research/quantum-computing-algorithms-60-2026-10-15-batch-9.coverage.json`;
fetch history and stamps are in `...-batch-9-sources.json` and
`...-batch-9.source-evidence.json`. The Watrous stamp and successful prior
retrieval were reused from batch 2. No retrieval failed or was dropped, so no
`source_resolution` recovery record was needed.

`research/quantum-computing-algorithms-60-2026-10-15-batch-9.proof-contracts.json`
covers all 16 assigned items, including 100 exact supplier excerpts, every
numbered step with its claim and inputs, all eight standard boundary cases,
and zero undeclared axioms. The B example has an explicit finite check. Its
inline Node.js calculation in standard basis order
`|00>,|01>,|10>,|11>` gives measured branch probabilities `[1/2,1/2]`,
measured final law `[1/2,0,0,1/2]`, and the same deferred terminal law. The
numerical check reports both distributions equal within `1e-12`; the item proof
contains the exact symbolic calculation. No registered `finite-smoke` check
applies to this circuit example.

### Readiness and scoped checks

All 16 current Step 1 records are `ready`, have `owner:false`, list the exact
direct dependencies examined, and have hashes matching the current items and
dependency inputs. These records mean authoring prerequisites, placement, and
contracts are complete; they are not independent approval.

- `node tools/proof-layout.mjs <the 16 assigned item paths>`: PASS, 16 items,
  57 numbered steps, 0 defects.
- `node tools/proof-contract.mjs research/...-batch-9.proof-contracts.json
  --strict`: PASS, 16/16 items, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage
  research/...-batch-9-sources.json --stamp`: PASS, 7/7 source uses
  fetch-verified, 0 newly stamped, 0 drops.
- The assigned dependency labels all match their recomputed levels above.
  `node tools/item-dependency-levels.mjs check --run ...` remains globally
  blocked by 48 other empty page inventories and 7 stale labels in other
  batches after the latest concurrent updates; it reports no batch-9 item
  error. Earlier in the continuation the unrelated totals were 54 empty pages
  and 8 stale labels, so those global counts are still moving with parallel
  authors.
- `node tools/batch-dependency-levels.mjs check --run ...` currently stops on
  the same malformed batch-19 metadata named below. Its earlier scan first
  stopped at `items/def-qc-css-code-from-nested-binary-codes.md`, whose
  unquoted Preskill Chapter 7 title has a colon in frontmatter line 26; other
  batch-20 files show the same YAML shape. No out-of-batch source or shared
  dependency-level state was changed.
- `node tools/step1-decisions.mjs check --run ...` cannot load the global
  snapshot because `items/thm-qa-19-measurement-distribution.md` has an
  unquoted source title `Ronald de Wolf, Quantum Computing: Lecture Notes,
  Chapter 9 §9.1` (frontmatter line 30). The same malformed title blocks the
  current batch-level check. The 16 batch-9 records were rechecked against current
  item/dependency hashes and all remain ready; no out-of-batch source was
  changed.
