# Batch 38 notes — Scalar future mass-shell measure and test restriction

Run physics-td-qft-rpm-62-2026-10-14, role **beta**, batch **38**, pair
qft-mf02 (A, order 515) and qft-mf02-examples (B, order 516), category
quantum-field-theory-mathematics, library mathematics. The binding
owner-authoring direction was read before writing. All mathematics is
conditional on its stated conventions and supplier interfaces; no empirical
observation or measurement claim is made.

## Inventory and dependency levels

The A page contains nine items, in supplier-first order:

- def-qft-scalar-mass-shell — level 0.
- lem-qft-mass-shell-measure-invariant — level 1.
- lem-qft-mass-shell-test-range-dense — level 1.
- lem-qft-mass-shell-test-restriction-continuity — level 1.
- lem-qft-fock-unitary-lift — level 1.
- lem-qft-scalar-poincare-action — level 2.
- lem-qft-smeared-free-scalar — level 3.
- lem-qft-scalar-causal-commutator — level 4.
- lem-qft-scalar-local-weyl-algebra — level 5.

The B page contains ex-qftmath-spacelike-vacuum-correlation — level 6. The
additional local A-page results are the Jacobian proof of shell-measure
invariance, density and continuity of shell test restrictions, the
one-particle Poincare action, and the general unitary Fock lift. They close
prerequisites needed by the reserved claims; the full conditional proofs are
written before any consumer uses them. Ten items across the pair are below
the 100-item page cap.

Levels use the current batch-37 manifest's actual item levels: the Fock/test
definition is level 0, CCR level 1, and Segal and second-quantized spectrum
lemmas level 2. Published mathematical suppliers are outside this run and do
not raise item levels. The shell definition has no in-run item supplier and
is level 0; each later item is one plus the maximum level of its in-run item
suppliers. The page/batch level remains 1 because batch 38 depends on batch
37. Batch-level evidence is
in research/physics-td-qft-rpm-62-2026-10-14-batch-dependency-levels.json.
The exact page and item edges are recorded in the adjacent cross-batch ledger.

## Plan conflicts and scope decisions

The track design's original QFT-MF02 reservation says requires QFT-MF01,
while its declared-earlier-prerequisites text and current
research/plan-spec.json both require qft-mf01 and sr-spacetime-primitives.
The current plan controls, so both page carriers and the batch manifest retain
both requirements. The mathematical argument uses only SR definitions about
the affine Minkowski form, time orientation, future cone, causal
classification and inertial charts; it does not depend on the SR page's
physical postulates or SI-unit item.

The design reserves the mass-shell definition, smeared free scalar, causal
commutator, local Weyl algebra, and one B example. Five local A-page
prerequisites were added because the reserved proofs otherwise lack local
measure invariance, dense and continuous shell test restrictions, a general
Poincare action on the one-particle space, and a unitary Fock lift. No reserved
claim was removed or weakened.

## Supplier-interface comparison

The batch-37 manifest, its current item carriers, and the qft-mf01 library
page are present and were inspected; the page and all QFT-MF01 items are
status draft. The current autopilot blocker records unit 37 as covered but
artifact-incomplete and no longer running, with owner repair and
recertification required. Each consumer records the actual current
interfaces. No accepted QFT-MF01 readiness or review is present, so dependent
items remain conditional and escalated, all direct QFT-MF01 edges remain
open, and the published SR page edge is verified.

The actual lem-qft-segal-weyl-domain normalizes
phi_0(h)=(a†(h)+a(h))/sqrt(2) and gives
W(h)W(k)=exp(-i Im<h,k>_2/2)W(h+k). Stale FF2 wording used an unscaled
field. The scalar construction now explicitly uses
Phi_mu(f)=sqrt(2) Phi_Segal(K_mu f) for real tests and
W_mu(f)=W_Segal(sqrt(2)K_mu f); the resulting scalar Weyl phase is
exp(-i Im<K_mu f,K_mu g>_2). The actual QFT-MF01
lem-qft-second-quantized-spectrum interface is also matched: the translation
multiplier is (omega_mu(k),-k), giving phase
omega_mu x^0-k dot x. The QFT-MF01 Poincare helper drafts are not in the
batch-37 page manifest and are not dependencies here; the needed action is
defined and proved locally.

The SR library uses (-+++), while some QFT references and the inspected
QFT-MF01 Poincare draft use the opposite metric signature. Both have the
same Lorentz group. The shell phase is stated directly as
p circ x=omega x^0-k dot x=-eta_{-+++}(p,x), so covariance and signs are
checked against this explicit formula.

## Sources and qualifications

The A page has two independent full-text QFT treatments: Tong's author-hosted
HTML chapter 2 and Srednicki's complete author-hosted book draft (explicitly
identified as a prepublication draft). Fewster–Rejzner's complete
arXiv article supplies an independent algebraic treatment of causal
propagation and Weyl algebras. The relevant Fourier arguments in Dyatlov's
complete MIT notes and Melrose's MIT OCW section 9 PDF were inspected, but
strict local page-count verification failed after five recovery retries on
each compressed PDF because mutool was unavailable. Their attempts and
searches are preserved in source_resolution, with the complete local
test-range proof and published Fourier supplier recorded as alternative
coverage. Tong's equivalent chapter HTML is fetch-verified. Coverage records
exact locators, supported items, dispositions and fetch evidence. Tong and
Srednicki use differing sign and
normalization conventions; the local arguments retain the conventions above
and rederive the required formulas.

The mass parameter mu is an inverse-length parameter only; no physical
rest-mass identification is made. The shell apex is omitted when mu=0 and
its measure is shown locally integrable. Fields are Schwartz-smeared
operators on the finite-particle domain, not point fields. The B example is a
strictly positive mathematical vacuum pairing for two chosen tests, not
evidence of a measurement or signaling effect.

## Readiness and blockers

The five items with complete local/published prerequisites are recorded
ready: the shell definition, measure-invariance lemma, dense-range lemma,
test-restriction continuity lemma, and one-particle Poincare-action lemma.
The Fock lift is escalated because its QFT-MF01 Fock definition is a
draft supplier. The smeared field, causal commutator, local Weyl algebra, and
B example are escalated because they depend directly or transitively on
draft QFT-MF01 carriers in the artifact-incomplete batch 37. Their complete
conditional arguments and contracts are still authored.

The active state is in .physics-autopilot/physics-td-qft-rpm-62-2026-10-14
in this checkout; .autopilot is absent. Its latest read-only status says the
workflow revision differs, so it shows the last report: stage 1-scaffold has
13/64 covered and is blocked by stage-stalemate for unit 37. The exact blocker
is research/physics-td-qft-rpm-62-2026-10-14-step1-blockers.json. That shared
state and the batch-37 artifacts were not changed by this batch.

## Required checks

Final checks after the content pass:

- `manifest-deps` passed: 10 items, no normalization and no errors.
- `content-policy` passed: 10 scoped items, 0 errors and 0 warnings.
- Strict proof-contract validation passed: 10/10 items, 0 errors and 0
  warnings. The contracts cover 28 numbered proof steps.
- `coverage-checklist` passed: 2 pages, 27 harvested results, 0 errors and 0
  warnings. The dropped Tong alternative now names exactly the dependencies
  declared by `lem-qft-smeared-free-scalar`.
- Source-fetch checking resolved all nine coverage sources: five verified
  full-text stamps and four documented PDF-route drops after the initial
  retrieval and five recovery retries. The exact full-text routes and
  complete local alternatives remain recorded in coverage.
- `precheck` passed for the nine proof-bearing items, with 0 failures.
- The current batch-37 plus batch-38 dependency graph passed: 18 items, no
  errors; batch-38 levels are 0, 1, 1, 1, 1, 2, 3, 4, 5 and 6 in manifest
  order.
- The run-wide item dependency check is blocked by 65 unrelated scaffold
  errors: 58 empty inventories and 7 entries without IDs in qft-mf03 and
  qft-mf03-examples. The assigned 37–38 graph has no such errors. The
  run-wide Step 1 recorder/check also stops at `Duplicate item undefined` on
  those malformed QFT-MF03 entries. No other batch manifests or engine state
  were changed.
- All ten batch-38 Step 1 records were created with the required
  `step1-decisions.mjs record` command in a temporary root containing the
  exact batch-37 and batch-38 manifests, their coverage files, the current
  plan spec, and the live item directory; the records were copied into this
  batch's research evidence. The scoped recorder check verified the five
  `ready` records and their hashes. Five dependent items are `escalated` with
  `owner:false` because the QFT-MF01 carriers remain draft. Existing records
  were not overwritten. The normal run-wide command remains blocked until
  the owner repairs the unrelated malformed scaffold inventory.
- The final explicit-item `proof-layout` attempt covered all ten changed
  items but failed before scanning. Its renderer cannot resolve
  `@/components` imported from
  `/Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx`.
  This is an external renderer checkout dependency; no shared web files were
  changed.

Readiness records describe authoring completeness only; they are not
independent mathematical approval.
