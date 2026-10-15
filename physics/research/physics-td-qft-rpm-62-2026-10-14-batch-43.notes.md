# Batch 43 notes — `qft-mf04` / `qft-mf04-examples`

Run `physics-td-qft-rpm-62-2026-10-14`, beta batch 43, 2026-10-14. This
authoring covers the assigned A/B pair only. Both pages and all four items
remain drafts; the readiness records and authored evidence are not independent
approval.

## Instructions, plan comparison, and conflicts

Read `../CLAUDE.md`, this workspace's `CLAUDE.md`, `README.md`, `SCHEMA.md`,
`WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, the complete QFT-MF04 design
section, `research/plan-spec.json`, the assigned batch instructions, the owner
authoring direction, the batch dependency-level file, and the current run
evidence before authoring. The owner direction supersedes stale reservations
and requires continuing with complete conditional arguments when a supplier is
still draft.

The design section's original QFT-MF04 reservation lists page prerequisites
QFT-MF02, QFT-MF03, and QFT-MF01. The current plan-spec and assigned batch
manifest list only `qft-mf03` as the A-page prerequisite. The plan controls this
page-level conflict, so `qft-mf04` keeps `requires: ["qft-mf03"]`; the B page
keeps `requires: ["qft-mf04"]`. The item dependency lists still name every
QFT-MF01/02/03 carrier actually used. Accordingly, the recorded batch-level
row for batch 43 is dependency level 3 with prerequisite batches 37, 38, and
42. The run-wide batch-level check currently reports a stale input digest after
manifest updates; the shared scheduling record is left for its owner to
refresh.

The read-only autopilot status showed the active run at `1-scaffold`, held for
an owner repair in unrelated batch 37. No autopilot state, shared plan, or
verdict was changed.

## Inventory, suppliers, and item levels

The exact reserved inventory is present: three A items and one B example. All
four carriers have `domain: mathematics`, `library: mathematics`, and
`physical_scope: null`. Both pages are below the 100-item cap.

| Item | Page | Level | Highest direct in-run supplier |
|---|---|---:|---|
| `lem-qft-free-time-ordered-kernel` | A | 5 | `lem-qft-scalar-causal-commutator` (4) |
| `lem-qft-free-action-equations` | A | 2 | `def-qft-dirac-projections` (1) |
| `lem-qft-free-domain-observables` | A | 6 | `lem-qft-free-dirac-car-locality` (5) |
| `ex-qftmath-timeordered-jump` | B | 6 | `lem-qft-free-time-ordered-kernel` (5) |

These levels are zero when there is no in-run supplier and otherwise one plus
the maximum direct supplier level. The item-level checker finds no level
mismatch among the four assigned items. Its run-wide check still reports 32
empty scaffold inventories in other batches: `td-math-convex-contact-and-mixing`,
`td-math-convex-contact-and-mixing-examples`, `td-irreversible-boundaries`,
`td-irreversible-boundaries-examples`, `td-math-interacting-ensemble-geometry`,
`td-math-interacting-ensemble-geometry-examples`, `td-continuum-heat-model`,
`td-continuum-heat-model-examples`, `rpm-external-charge-examples`,
`rpm-exact-flat-orbits-examples`, `qft-mg01`, `qft-mg01-examples`, `qft-mg03`,
`qft-mg03-examples`, `qft-mx02`, `qft-mx02-examples`, `qft-mx03`,
`qft-mx03-examples`, `qft-g01`, `qft-g01-examples`, `qft-g02`,
`qft-g02-examples`, `qft-x02`, `qft-x02-examples`, `qft-x03`,
`qft-x03-examples`, `qft-f03`, `qft-f03-examples`, `qft-f04`,
`qft-f04-examples`, `qft-ir03`, and `qft-ir03-examples`. Those pages and their
items are outside this assignment.

The direct QFT suppliers occur in batches 37, 38, and 42. Their current carrier
statements and proofs were inspected, and each remains a draft; every QFT
deduction in this pair is conditional on the exact recorded interface. The
cross-batch dependency record lists each consumed item and its current
interface.

During final reconciliation, the current QFT-MF02 `lem-qft-smeared-free-scalar`
carrier was reread after its statement had gained additional Weyl, weak
distribution, Poincare, and translation-spectrum clauses. Its smeared-field
formula and vacuum covariance used by this pair are unchanged and match the
current statement and proof. No new claim from those added clauses is used
here, and the A1/A3 readiness hashes were refreshed.

Two implicit prerequisites were made explicit in the domain item. The Segal
field domain supplier requires a separable one-particle Hilbert space, so
`lem-qft-mass-shell-test-range-dense` is cited and directly declared; its
current QFT-MF02 draft statement proves that `H_mu` is separable. The product
domain for unbounded operators is taken from the published mathematical
statement `lem-nrqm-uncertainty-schrodinger-robertson-anticommutator-bound`,
which states the exact condition `Psi in D(B)` and `B Psi in D(A)`. The
published `thm-p-series-real-exponents` is cited for the `p=2,4,0` convergence
and divergence facts in the number-domain counterexample. No new local carrier
or inventory expansion was needed.

The Dirac translation and locality carriers also require the QFT-MF03 matrix
projection lemma and the QFT-MF01 fermionic Fock CAR lemma. Both are recorded as
direct conditional dependencies: the matrix lemma supplies orthogonality,
closed ranges, and separability; those separable one-particle spaces meet the
CAR carrier's explicit hypothesis.

The A item constructs the time-ordered scalar kernel directly as a tempered
partial spatial Fourier distribution, proves the mode derivative jump and
the `i delta` Green source, and fixes the value at coincidence through its
displayed distributional pairing. The action item proves both directions for
the compactly supported scalar and commuting-spinor variations in the fixed
`(-,+,+,+)` convention. The domain item gives exact scalar and Dirac domains,
finite mean and variance from domain membership, the `N_s` versus `N_s^2`
counterexample, and separate scalar-vacuum and equal-time Dirac norm
obstructions. The B example repeats the mode jump with its own half-line
distributional integration-by-parts proof. No item asserts a physical
measurement, interacting-field construction, pointwise diagonal product, or
empirical observation.

## Sources and retrieval record

The A-page coverage uses two independent QFT treatments: David Tong's complete
author-hosted Chapters 1, 2, and 4 HTML, and Mark Srednicki's complete
author-hosted 616-page book draft. The relevant scalar variation, free-field
time ordering, Fock-sector, and Dirac-action sections were read in full. Tong
uses the opposite `(+---)` signature; Srednicki's propagator carries an extra
prefactor `i`, and his spinor treatment uses anticommuting fields. The local
proofs redo signs, normalizations, domains, and commuting-spinor variations
under the exact stated conventions.

`source-fetch-check --stamp` verified all four active source records, with two
new stamps for Tong Chapters 1 and 4 and two reused stamps for Tong Chapter 2
and Srednicki from batch 38. The final check reports 4/4 fetch-verified and
4/4 resolved. Tong's PDF route was already recorded as a six-attempt drop in
batch 38; this batch reuses the stamped Chapter 2 HTML alternative and does not
retry or rely on the PDF route. The coverage checklist records all 11 harvested
results and their item-specific dispositions; it reports zero errors and zero
warnings. No source retrieval failed in this batch, so no new source-drop
record was invented.

## Scoped checks and readiness

Final scoped checks report:

- precheck: all four items pass;
- strict proof contracts: 4/4 items, 18 numbered steps, zero errors and
  warnings; each contract includes exact supplier excerpts, step inputs,
  boundary worksheets, applicable finite checks, and a risk review;
- content policy: four items, zero errors and warnings;
- focused dependency check: zero errors and warnings for the four items and
  their page edges;
- `manifest-deps`: four item rows, zero missing dependency arrays;
- source-fetch check: 4/4 sources verified and resolved;
- coverage checklist: 11 harvested results, zero errors and warnings;
- rendercheck: all four items and both pages pass, including KaTeX and
  single-line display blocks.

The required `proof-layout.mjs` scan was run on all four assigned items, but
the shared renderer cannot start in this checkout: Node reports
`ERR_MODULE_NOT_FOUND: Cannot find package '@/components'` imported from
`/Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx`.
Retrying with the app `tsconfig.json` path produces the same alias-resolution
failure. This is recorded as a renderer/environment blocker, not a proof-layout
pass.

The run-wide item-level check reports the four assigned levels correctly and
19 empty inventories elsewhere: `rpm-external-charge-examples`, `qft-mg01`,
`qft-mg01-examples`, `qft-mg03`, `qft-mg03-examples`, `qft-mx02`,
`qft-mx02-examples`, `qft-mx03`, `qft-mx03-examples`, `qft-g01`,
`qft-g01-examples`, `qft-g02`, `qft-g02-examples`, `qft-x02`,
`qft-x02-examples`, `qft-x03`, `qft-x03-examples`, `qft-f04`, and
`qft-f04-examples`.

The run-wide batch-dependency check reports a stale input digest. A read-only
recomputation over all 64 current batch manifests succeeds and returns batch
43 at level 3 with prerequisites 37, 38, and 42; the stored row agrees, but its
digest does not. During concurrent writes, an earlier parse scan found YAML
errors in unrelated carriers `def-td-rectangular-local-equilibrium-fields`,
`def-td-regular-elastic-collision-model`, `post-td-fourier-conductivity`,
`post-td-local-energy-balance`,
`post-td-local-equilibrium-entropy-density`,
`post-td-boltzmann-molecular-chaos-model`, `pthm-td-collision-h-theorem`,
`pthm-td-fourier-entropy-production`, `rem-td-solution-existence-scope`,
`ex-td-insulated-polynomial-relaxation`, and
`ex-td-diffusive-infinite-propagation`; the final run-carrier parse scan reports
none. The shared dependency artifact is left for its owner to recertify.

`step1-decisions.mjs record` wrote current `ready` records for the four items
with `owner: false`, examined dependencies, and conditional supplier status.
The records were verified against their current item/dependency hashes. The
run-wide readiness check remains open for unrelated missing/escalated records
and empty scaffold pages. A `ready` record only makes the completed conditional
argument available for independent review; it is not proof approval.
