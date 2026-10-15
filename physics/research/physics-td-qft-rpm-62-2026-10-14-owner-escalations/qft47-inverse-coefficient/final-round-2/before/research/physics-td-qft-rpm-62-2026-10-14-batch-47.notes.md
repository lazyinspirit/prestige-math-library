# Batch 47 authoring notes — soft-current angular norm and cutoff coherent model

Run physics-td-qft-rpm-62-2026-10-14, role beta. This batch owns only
qft-mx03 and qft-mx03-examples. Both manifests remain draft, preserve
orders 533/534 and the quantum-field-theory-mathematics category, and contain
three A items and two B examples, well below the 100-item page cap.

## Plan and scope decisions

The complete QFT-MX03 design section at
research/plan-quantum-field-theory-track.md and the current
research/plan-spec.json were compared. The current plan requires exactly
euclidean-surface-measure-divergence-and-green-identities, qft-mg03, and
qft-mx01 for the A page; the B page requires the A page. The older
reservation in the design/proposed inventory also lists qft-mf01 and
qft-mg01. The current plan controls page requirements, so the batch-47 page
requirements were preserved exactly.

The QX08 item-level graph still uses the actual QFT-MF01 Fock, Segal-Weyl and
second-quantized-spectrum items and the QFT-MG01 transverse-space item.
QFT-MG01 is transitively required through QFT-MG03, but QFT-MF01 is absent
from QFT-MX03's current page prerequisites. The three QFT-MF01 items have
current Step 1 ready records and their complete statements and proofs were
inspected; their containing page remains draft behind its own page edges.
This page-level dependency mismatch is recorded open in the cross-batch
ledger for owner reconciliation. No proof input was removed to match the
shorter plan list.

The source design keeps QX08 limited to a finite balanced prescribed massive
current, a transverse free-photon space and an exact cutoff coherent
preparation. It does not infer full interacting QED, universal charged
sectors, detector-inclusive observables, measured photon counts or
probabilities. QX09 proves one Euclidean cutoff integral and one selected
subtraction, plus a separate exact factorial-remainder integral; it does not
assert gauge-invariant renormalization or a continuum limit. The original
inventory's Fan et al. measurement paper is not used: this pair contains no
empirical claim or measured input, and that original reference remains in the
read-only upstream inventory.

## Inventory, dependencies and levels

All listed dependencies are mathematical premises. The local radial lemma is
authored first and proves the four-dimensional radial measure required by
QX09. QX09 precedes B07; QX08 precedes B06.

| Item | In-run suppliers | Level |
|---|---|---:|
| lem-qft-example-four-dimensional-radial-measure | none | 0 |
| lem-qft-example-cutoff-integrals-and-series | radial-measure lemma, def-qft-example-data | 1 |
| thm-qft-example-soft-current-angular-coherent | QFT-MF01 Fock/Weyl/spectrum items at level 2; QFT-MG03 Q8 at level 3; QFT-MG01 transverse-space item at level 1; QFT-MX01 data at level 0 | 4 |
| ex-qftmath-x07 | QX09 at level 1 | 2 |
| ex-qftmath-x06 | QX08 at level 4 | 5 |

The owner-maintained recorded batch dependency file was not changed. A
read-only recomputation from the current manifests gives batch 47 level 6
with requires [37, 41, 44, 45]. This adds the actual QFT-MF01 item suppliers
from batch 37 and QFT-MG01 transverse-space item from batch 44 to the
previously recorded [41, 45]. The batch-dependency-levels check reports the
shared file stale; owner refresh is required. The recomputed graph has no
cycle and maximum level 7. The local cross-batch dependency file records each
edge and its current evidence.

## Inspected supplier interfaces and unresolved readiness

- def-qft-example-data is present in batch 41 and its current Step 1 record
  is ready. Its h=-eta contraction, joule-valued energy vectors,
  dimensionless positive g=sqrt(4 pi alpha), and no-probability convention
  match the current QX08 and B06 calculations.
- def-qft-photon-transverse-space is now present in batch 44. Its complete
  definition and proof were inspected. It defines
  H_T=Ran M_PT for P_T(k)=I_3-n n^T, with the a.e. transverse range and the
  second-variable-linear positive L2 pairing. This matches QX08 exactly.
  There is currently no Step 1 readiness record for this item.
- lem-qft-qed-coherent-ir-obstruction is now present in batch 45. Its
  current Statement and full proof were inspected. Its Statement asserts that
  for nonzero transverse b in L2(S2;C3), the cutoff family has the exact
  logarithmic norm and finite free energy, is in the Hamiltonian domain,
  converges weakly to zero, and has no strong Fock limit. Its Step 1 decision
  is escalated because the QFT-MG03 photon-energy multiplier item is
  escalated on the QFT-MG01 transverse-space input.
- The current Q8 statement does not assert phase-invariant projective-ray
  nonconvergence, although the older research proof/design did. QX08 therefore
  uses only the actual Q8 conclusions for weak-zero and no-strong-limit, and
  proves the projective claim itself: successive e-fold profiles differ by
  squared norm C, their coherent overlap has modulus exp(-C/2), and the
  phase-minimized vector gap is at least 2(1-exp(-C/2)). The stronger
  current-specific conclusion is proved without attributing it to the
  current Q8 item.
- A proof-input gap remains in the current Q8 carrier: its proof step 1.2
  invokes d^3 k = r^2 dr dOmega but its direct deps omit a polar-coordinate
  theorem and the surface-measure definition/equivalence. This affects Q8's
  norm, energy and shell computations. Proposed repair placement is on the
  QFT-MG03 A item lem-qft-qed-coherent-ir-obstruction: add
  thm-polar-coordinates-formula-for-lebesgue-measure,
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure, and
  def-surface-integral-on-a-compact-c-one-hypersurface, or supply an
  equivalent complete local derivation. This batch does not edit another
  pair's item. QX08 independently proves its own angular norm and energy
  using these exact measure suppliers, while retaining the Q8 no-strong and
  weak-zero conclusions as conditional.

The full current facts, actual supplier excerpts, proof steps and boundary
cases are in the proof contract. The two unresolved QFT-MG inputs keep QX08
escalated; B06 is escalated through QX08. The local radial lemma, QX09 and
B07 have all current mathematical inputs and are ready. These are Step 1
authoring decisions, not independent review.

## QX08 separability proof and record status

The Segal-Weyl supplier requires a separable complex one-particle space. QX08
now proves that prerequisite explicitly: it reads the rational-box theorem as
real-valued scalar L2 density, forms the dense complexification D+iD, proves
its countability using the product theorem and the countable-surjection
criterion, then does the same for three component functions. For the
transverse range it expands the complex Euclidean norm of
(I-nn^T)z, showing pointwise contractivity from n·n=1; the multiplier
therefore sends that countable dense set to a countable dense subset of its
range. The direct mathematical dependencies
def-euclidean-inner-product, thm-product-of-countable and
lem-countable-iff-surjection-from-n are included in QX08's item and batch
manifest. The assigned dependency level stays 4 because these are imported
mathematical suppliers outside the run.

The existing QX08 Step 1 record was already escalated. The record tool rejects
rewriting an escalation without --owner, which this batch may not use, so that
row remains unchanged. Its existing reason still identifies the missing
QFT-MG01 readiness, the escalated Q8 input and the undeclared polar-measure
dependencies. The current direct dependency list, corrected proof and exact
evidence are recorded in the manifest, proof contract and these notes; no
owner override or escalation overwrite was made.

## Source harvest and retrieval evidence

The A page has independent full-text QFT treatments from David Tong's
author-hosted Chapter 2/Chapter 6 notes and Mark Srednicki's complete
616-page author-hosted book draft. Folland's Real Analysis, Theorem 2.49,
and John McCuan's complete nine-page Georgia Tech MATH 6702 note independently
support the radial-coordinate context. The local four-dimensional radial
lemma proves the exact Borel-weighted formula and constant from its own
two-plane polar Jacobian, null-complement, Tonelli and FTC steps.

source-fetch-check --stamp verified five active full-text sources. Their
stamps are recorded directly in the batch-47 coverage file: Tong Chapter 2
fc7652fe8703434b, Tong Chapter 6 c8bdddedb1fed612, Srednicki
7990bad06ed96750 (616 pages), Folland 10d9740e2849a5de, and McCuan
c7f43a1a6145df69 (9 pages).

The full Axler MIRA PDF was read, but the source-fetch parser could not verify
its compressed-PDF page count because mutool is unavailable. The initial
fetch and five recovery retries all returned that same parser error. Searches
found no separate official HTML chapter or alternative official PDF route;
an independent complete McCuan lecture note was found and inspected. Axler
supplied no unique claim, so it is recorded as a certain redundant-source
drop, with all six attempts, searches, and the complete local alternative
proof/dependencies in coverage.json under source_resolution. No mathematical
result was dropped. The source-fetch check reports five active stamps and one
documented drop.

## Scoped checks and readiness records

Final results: source-fetch-check reports five active fetch stamps and one
documented source drop; coverage-checklist reports 11 harvested results, zero
errors and zero warnings; proof-contract strict checks all five items with
zero errors or warnings; precheck passes all five; rendercheck passes all
five; content-policy reports zero errors or warnings; focused depcheck passes
all five and their prerequisite cycle closure; proof-layout passes all five
items and 22 proof steps with zero defects. The proof-layout renderer needed
a temporary read-only ESM alias resolver because the application checkout's
fallback TypeScript loader does not resolve its @/ imports; no repository
tool or application file was changed.

The assigned item dependency levels recompute to 0, 1, 4, 5, and 2 in the
table above. The whole-run item-level check still reports five unrelated
stale TD item levels (def-td-cross-type-reaction-network and four dependent
TD theorem/remark items); the assigned items have no level mismatch. The
whole-run batch-dependency-levels check reports its shared record stale as
described above. Both derived run-wide files remain untouched for owner
refresh.

Final Step 1 decisions: the local radial lemma, QX09 and B07 are ready; QX08
is escalated on the missing Step 1 readiness of its QFT-MG01 photon-space
carrier and the escalated QFT-MG03 Q8 carrier, including the Q8 proof's
undeclared polar-measure input; B06 is escalated through QX08. The separate
QFT-MF01 page-level omission remains open in the cross-batch ledger. These
authoring records are not independent approval. No shared plan, imported
mathematics, published content, engine state, or verdict was modified.
