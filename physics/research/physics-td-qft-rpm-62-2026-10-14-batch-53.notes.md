# Batch 53 authoring notes — Explicit formal QED vertex/free-line convention

Run physics-td-qft-rpm-62-2026-10-14, role beta, assigned pair
qft-g02 / qft-g02-examples. The binding owner-authoring direction, current
QFT-G02 task, complete design section, plan-spec and the required source
materials were read. This note records authoring evidence, not independent
approval.

## Design and plan decision

The old QFT-G02 design reservation at research/plan-quantum-field-theory-track.md
L627 requires QFT-C01, QFT-MG03, QFT-MF04, QFT-MG02 and QFT-G01. The current
research/plan-spec.json and this assigned batch manifest require exactly
qft-g01, qft-mg02 and qft-mg03 for A, with B requiring qft-g02.
The current plan controls the page edges. The extra direct item prerequisites
remain in the authored item dependency lists where the arguments use them;
they do not change the page requires list. The page files and manifest use
the current page identifiers and remain under the 100-item cap.

The A/B inventory is the five assigned A items and two assigned B items:

| Item | Page | Level |
|---|---|---:|
| post-qft-formal-qed-coefficients | A | 6 |
| post-qft-compact-lattice-gauge-model | A | 4 |
| pthm-qft-lattice-gauge-existence | A | 6 |
| pthm-qft-lattice-gauge-ward | A | 8 |
| pthm-qft-qed-formal-ward | A | 7 |
| texp-qft-qed-infrared-sequence | B | 8 |
| texp-qft-lattice-charged-operator | B | 9 |

The batch-level record places batch 53 at level 6 and requires batches 45, 50
and 52. Item levels were recomputed against the current item manifests and
direct dependencies. The infrared consumer is level 8: current batch 52
lists post-qft-free-photon-model at item level 7, so its consuming level is
one higher. The earlier proposed level 5 is stale after that current supplier
row appeared. The item-dependency check also corrected the formal postulate
from level 7 to 6 and the formal Ward theorem from level 8 to 7, using the
current direct in-run supplier levels. The added matrix, unit and free-energy
dependencies are included in those computations. No dependency cycle was
found. The shared
batch-dependency-levels.json remains owner-owned and was not edited.

## Current cross-batch state

The current run manifests now contain all three required page carriers:
QFT-G01 in batch 52, QFT-MG02 in batch 50 and QFT-MG03 in batch 45. QFT-MG02's
compact-data, Gauss, evolution, Ward, contact and localization items have
current ready Step-1 records; their exact draft interfaces were inspected and
remain conditional.

The live files differ from some older batch notes and Step-1 escalation
reasons. Batch 45 currently lists nine QFT-MG03 A items and three B items,
including the formal ring, formal matrix Ward, tree Ward, conserved-current
and coherent infrared carriers. Earlier batch-45 notes and several existing
Step-1 escalation reasons say its item inventory was empty. Batch 44 currently
lists twelve QFT-MG01 A items, including the QED gauge-data and transverse
photon definitions, while its earlier notes and some existing escalation
reasons also say the item inventory was empty. Those records are not rewritten
here. The relevant current carriers exist, but their exact readiness state
still blocks dependent readiness:

- def-qft-qed-formal-ring, lem-qft-qed-formal-matrix-ward,
  lem-qft-qed-tree-ward, and
  lem-qft-qed-conserved-current-gauge have escalated Step-1 records. The
  current QFT-MG01 def-qft-qed-gauge-data item has no current Step-1 receipt;
  the tree chain also uses escalated def-qft-dirac-projections. The scalar
  mass-shell item has a ready record, but its QFT-MF02 page edge remains open.
- lem-qft-qed-coherent-ir-obstruction has an escalated Step-1 record through
  def-qft-qed-photon-energy-multiplier; that multiplier is escalated because
  current def-qft-photon-transverse-space has no Step-1 receipt. The Segal
  and second-quantized-spectrum items have ready records, with their upstream
  page routes still recorded as conditional.
- QFT-G01's post-qft-free-photon-model is present in the current batch-52
  manifest at level 7 but has no current Step-1 readiness record. Its QFT-MG01
  prerequisites have mixed item readiness: the transverse-space definition
  has no receipt, the local-Weyl result is escalated, and the null-quotient
  and covariance-spectrum items have ready-current records. The QFT-C01 unit
  and constructed-model postulate inputs are owner-held.
- def-qft-framework-units and
  post-qft-constructed-model-and-measurement have escalated owner-held
  records for root metadata, source coverage and supplier-handoff
  reconciliation. Their exact current statements were inspected; physical
  uses remain conditional.
- The QFT-MG02 carriers used for the finite-graph proofs have ready Step-1
  records. These are authoring-readiness records, not independent proof
  acceptance.

The IR item's [L1] readiness sentence was clarified after checking those
current QFT-MG01 receipts: it now records the mixed states in the
cross-batch ledger instead of saying every transitive input lacked a receipt.
After its escalation was recorded, a local coherent-overlap argument was also
added to prove the phase-adjusted sequence cannot be norm-Cauchy. Its existing
escalation remains in force and was not overwritten; that readiness record
predates both the wording correction and local proof addition, so its item
hash may need owner refresh if a ready decision is later considered.

The row-by-row item and page evidence, actual interfaces, manifest locations,
and readiness status are in
physics-td-qft-rpm-62-2026-10-14-batch-53.cross-batch-dependencies.json.
No upstream claim was treated as proved by its draft label.

## Authored claims and mathematical boundaries

post-qft-formal-qed-coefficients adopts Tong's vertex and free-line coefficient
convention with the local h=-eta mapping, explicit off-shell denominators,
and no distribution products or all-loop claim.
post-qft-compact-lattice-gauge-model adopts the inspected finite graph
rotor/CAR data, exact operator domains and joule-unit assignment, without a
spatial embedding or continuum interpretation.

pthm-qft-lattice-gauge-existence is a complete conditional proof under full
AC and the current Gauss-projection and physical-evolution interfaces. It
constructs the zero-link/background-occupation physical vector and states the
restricted self-adjoint Hamiltonian domain. pthm-qft-lattice-gauge-ward
keeps its finite-regulator selection/contact/region clauses separate from
the continuum implication and repeats the common-domain, locality, Gauss and
two-limit assumptions. pthm-qft-qed-formal-ward separates coefficientwise
finite-matrix identities from the two stated on-shell tree currents.
Determinant invariance uses the published determinant-multiplicativity
theorem explicitly. Pointwise rational photon denominators require
h(k,k) != 0; the off-shell fermion coefficient requires
h(p,p)-mu^2 != 0; distributional +i0 products are not formed.

The infrared B item computes the transverse angular coefficient
8 pi lambda^2/3 and radial norm/energy integrals. It derives a local lower
bound on successive coherent-vector distances from the Fock overlap formula,
so arbitrary phase choices cannot make the sequence norm-Cauchy; weak-zero
and no-Fock-norm-limit claims remain conditional on the inspected current
QFT-MG03 and mathematical interfaces. It remains a free-model thought
experiment, not an interacting charged sector or observation.
The lattice B item applies the exact finite-region Gauss/flux interface on
the stated common domain; it asserts no continuum-locality theorem.

## Source harvest and retrieval history

The A page uses three active full-text treatments across its subjects:
David Tong's complete author-hosted Cambridge Chapter 6 (QED vertex,
propagator and tree-current conventions), John B. Kogut's complete 55-page
review §VI.C (compact links, integer electric spectrum, Hamiltonian and Gauss
law), and Emonts–Zohar's complete lecture notes §§2.1–2.2 (an independent
compact-rotor and physical-Gauss treatment). Tong's convention and scope
differences are recorded explicitly; the two lattice sources' specific cubic
and staggered examples are not imported as claims about this abstract graph.
B-page source coverage records the QED infrared and charged-flux dispositions.

physics-td-qft-rpm-62-2026-10-14-batch-53.coverage.json records each
retrieved result, locator, supported item and disposition. Tong was fetched
and stamped for this batch: 351,487 bytes, hash prefix
c8bdddedb1fed612. The complete Kogut PDF stamp was reused from batch 50:
4,185,088 bytes, hash prefix 005acf041cd354e7. The complete Emonts–Zohar
HTML stamp was reused from batch 50: 568,406 bytes, hash prefix
12ea249805323ff6. No URL failed in this batch; no source was dropped and no
new source-resolution recovery history was required.

## Scoped checks

All seven assigned Step-1 records are escalated with owner=false. No prior
escalation was overwritten and no --owner flag was used. Each record names
the examined direct dependencies and the exact owner-held or unready supplier
that prevents readiness. The IR record predates both a final wording
correction in its Facts block and the added local coherent-overlap proof. The
wording now distinguishes the transverse-space and local-Weyl blockers from
the ready quotient/spectrum records; the overlap argument establishes the
phase-adjusted norm-Cauchy obstruction locally. The existing IR escalation
was preserved as required and may need owner refresh to bind the updated item
hash; it makes no readiness claim.

The final scoped checks were:

- author-check for batch 53 passed: precheck 7/7, rendercheck 9 files, content
  policy 7/7 with zero warnings, and strict proof contracts 7/7 with zero
  errors/warnings. The durable result is
  physics-td-qft-rpm-62-2026-10-14-author-check-53.json.
- Explicit proof-layout over all seven changed item files passed with 22
  proof steps and zero defects. The normal renderer first failed on the app's
  unresolved @/ aliases; rerunning with the temporary ESM alias resolver in
  /private/tmp/physics-b53-layout and PRESTIGE_APP_DIR pointed at the existing
  application checkout passed. No application files were changed.
- source-fetch-check --stamp passed: 6/6 source records verified, zero newly
  stamped; 6/6 sources resolved. Coverage checklist found two pages and
  fourteen harvested results, zero errors and one low-yield warning for
  qft-g02 (3/10 results classified included). The named out-of-scope declines
  are Tong's loop corrections and Emonts–Zohar's unitary-gauging and Trotter
  sections; each has an item-specific reason in the coverage file. Alpha
  confirmation of those scope declines remains a review point.
- Item dependency-levels check confirms all seven batch-53 levels match the
  current graph. It reports five unrelated thermodynamics items with stale
  labels: def-td-cross-type-reaction-network 14→15,
  pthm-td-contact-product-comparison 12→13,
  pthm-td-entropy-under-product-comparison 13→14,
  pthm-td-universal-mixing-entropy 18→19, and
  rem-td-entropy-construction-hypotheses 19→20. Those items are outside this
  assignment and remain unchanged.
- The read-only batch-dependency-levels check reports the owner-owned shared
  graph is stale. Current recomputation gives batch 53 level 6 with item/page
  dependency closure through batches 37, 38, 40, 42, 43, 44, 45, 50 and 52;
  the stored row lists only 45, 50 and 52. The shared file was not rewritten.
- The run-wide Step-1 check remains open: 683 items total, 294 ready. All seven
  assigned items appear with their final escalated, owner=false records. This
  batch did not mutate autopilot state, shared plans, upstream records or
  verdicts.
