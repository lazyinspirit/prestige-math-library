# Batch 26 authoring notes — Classical configuration, phase and reference spaces

Run: `physics-remaining-80-2026-10-17`  
Owner scope: `csm-phase-ensembles` (A, order 487) and `csm-phase-ensembles-examples` (B, order 488).  
Category/library: `classical-statistical-mechanics` / `physics`.

## Plan and inventory reconciliation

- The controlling `research/plan-spec.json` requires `cm-math-canonical`,
  `improper-and-parameter-dependent-multiple-integrals`,
  `td-math-mixture-dynamics-and-shells`,
  `the-lebesgue-integral-and-the-convergence-theorems`,
  `em-potentials-and-gauge`, and
  `cm12-legendre-transformation-and-hamiltonian-mechanics`. The older track
  section at L21 lists only the first four. The plan controls; the EM gauge and
  CM12 pages are retained as prerequisites.
- The current canonical pair IDs are `csm-phase-ensembles` and
  `csm-phase-ensembles-examples`. The preserved per-item `page` fields in the
  research paired inventory still say `csm-foundations-ensembles`; those are
  stale module labels. The selected plan and batch manifest IDs control page
  ownership and placement.
- The paired inventory assigns 20 A items and 4 B examples. The full item IDs
  and reserved scope were read from the current paired inventory, pathway,
  prose scaffold, F0–F9 proof module, supplier maps, and 2026-10-16 audit.
  Both pages remain well below the 100-item cap.
- The 2026-10-17 owner direction's local Jacobian replacement applies to the
  later `csm-exact-models` page. It does not add an item or supplier to this
  batch.

## Supplier interface and proof-status audit

- `supplier-nrcm-E7`, `supplier-thermo-L17`, `supplier-thermo-L20`,
  `supplier-thermo-M27`, and `supplier-thermo-M36` are research aliases, not
  production items. Their recorded conditional arguments were inspected but
  are not used as accepted logical suppliers. Phase geometry/flow use the
  current canonical-math and Liouville suppliers; differentiation and entropy
  arguments are proved locally from current Lebesgue/Tonelli suppliers.
- The current published `thm-tdmath-regular-energy-shell-measure` is the exact
  available shell supplier. Its inspected Statement assumes full AC, a C2
  Hamiltonian, compact inverse energy bands and a nonvanishing gradient; its
  invariant-measure clause additionally assumes a Hamiltonian diffeomorphism
  on the whole band. The A-page shell result states AC, checks these hypotheses,
  and carries AC to the microcanonical postulate and shell-moment consumers.
  The local flat-torus extension is proved by finite canonical charts.
- The actual canonical phase suppliers are the published cotangent one-form
  definition, canonical cotangent symplectic theorem, and the `cm-math-canonical`
  chart definition/closed-nondegenerate lemma. Countable Choice is stated at
  its actual use in the cotangent construction and COV theorem.
- The actual Liouville supplier is the published `thm-liouville-volume-preservation`.
  The density transport, expectation and entropy identities are derived here;
  no ergodicity, relaxation or entropy increase is asserted.
- `def-cm12-hamiltonian` defines the Legendre transform for a hyperregular
  potential branch `L=K-U`; it does not supply velocity-dependent EM coupling.
  The static EM definition computes its affine Legendre inverse directly and
  preserves Tong's published static gauge sign convention from
  `def-em-gauge-transformation`.
- The old static-gauge inventory roles `local-research-premise` and
  `published-source-premise` are not valid schema dependency roles. Current
  item carriers use the permitted mathematical/formulation/physical roles and
  list only resolvable exact IDs.

## In-run dependency levels prepared before carrier authoring

Batch 26 is level 0 with no in-run pair suppliers, as recorded in
`physics-remaining-80-2026-10-17-batch-dependency-levels.json`. The following
levels use only logical suppliers among the 24 assigned carriers; all other
suppliers are external context.

| Item | In-run suppliers | `dependency_level` |
|---|---|---:|
| `def-csm-phase-space-reference` | — | 0 |
| `thm-csm-equipartition-boundary-lemma` | — | 0 |
| `def-csm-statistical-state-observable` | `def-csm-phase-space-reference` | 1 |
| `thm-csm-regular-shell-coarea` | `def-csm-phase-space-reference` | 1 |
| `post-csm-counting-and-physical-observables` | phase-space and statistical-state definitions | 2 |
| `thm-csm-exponential-normalization-covariance` | statistical-state definition | 2 |
| `thm-csm-kinetic-potential-shell-marginals` | regular-shell result | 2 |
| `thm-csm-liouville-entropy-transport` | phase-space and statistical-state definitions | 2 |
| `post-csm-canonical-preparation` | counting postulate; statistical-state definition | 3 |
| `post-csm-grand-preparation` | counting postulate; statistical-state definition | 3 |
| `post-csm-isobaric-preparation` | counting postulate; statistical-state definition | 3 |
| `post-csm-microcanonical-preparation` | counting postulate; statistical-state definition; regular-shell result | 3 |
| `thm-csm-relative-gibbs-variational-principle` | statistical-state definition; exponential theorem | 3 |
| `pthm-csm-canonical-momentum-equipartition` | canonical postulate | 4 |
| `pthm-csm-canonical-response-identities` | canonical postulate; exponential theorem | 4 |
| `pthm-csm-ensemble-potentials` | three preparation postulates; relative-Gibbs and exponential theorems | 4 |
| `pthm-csm-grand-response-identities` | grand postulate; exponential theorem | 4 |
| `pthm-csm-isobaric-response-identities` | isobaric postulate; exponential theorem | 4 |
| `def-csm-static-gauge-coupled-particle-model` | phase-space definition | 1 |
| `pthm-csm-static-gauge-canonical-partition-invariance` | static-gauge model; canonical postulate | 4 |
| `ex-csm-finite-mixing-count` | counting postulate; relative-Gibbs theorem | 4 |
| `ex-csm-ideal-full-shell` | microcanonical postulate; shell-marginal theorem | 4 |
| `ex-csm-ideal-canonical-grand` | canonical and grand response theorems | 5 |
| `ex-csm-ideal-isobaric` | isobaric response theorem | 5 |

Maximum within-batch item level is 5. No cycle or missing in-run supplier is
present in the prepared item graph.

## Source retrieval and reading

The assigned A page has six active, fetch-verified source URLs covering five
full-text treatments in the coverage ledger: Tong's complete statistical-physics
Chapters 1 and 2, Arovas's complete 635-page course text, the complete Concordia
NPT notes, Tong's complete EM notes, and Tong's complete classical-dynamics
notes. Tong's statistical-physics chapters and Arovas's book are the two
independent statistical-mechanics treatments; the latter also satisfies the
book/full-lecture-notes requirement. Prior successful fetch
stamps are reused by exact URL and hash. The historical Tong statistical-physics
PDF route is left untouched with its prior six-attempt drop and is not a current
source dependency. The Concordia NPT PDF was newly fetched and stamped in this
batch. Exact locators, source-specific limitations, supported items and all
harvest dispositions are in the sibling `.coverage.json`.

Tong's reservoir expansion, Gibbs-paradox language and macroscopic ensemble
equivalence remain source context. The carriers adopt preparations explicitly,
derive exact finite normalizations only under stated integrability hypotheses,
and preserve the finite indistinguishable-particle mixing correction. No
measurement, precision, source-backed experiment or empirical model validation
is asserted.

## Final checks and readiness

The final coverage ledger was stamped with:

```sh
node tools/physics-support/source-fetch-check.mjs --coverage research/physics-remaining-80-2026-10-17-batch-26.coverage.json --stamp
```

Six of six source URLs were fetch-verified, 1 new Concordia stamp was
recorded, and 6/6 sources resolved with 0 new drops. The final non-stamping
source check also passed 6/6. `coverage-checklist.mjs --require-destination`
reports 1 A page, 39 harvested source results, 0 errors and 0 warnings.

Scoped final checks passed:

- `proof-contract.mjs ...batch-26.proof-contracts.json --strict`: 24/24 items,
  0 errors and 0 warnings.
- `precheck.mts` on the 24 explicit item files: 21 proof-bearing items checked,
  0 failures; the 3 definitions are not phase-proof items.
- `proof-layout.mjs` on the 24 explicit item files: 48 numbered steps, 0
  layout defects.
- `rendercheck.mjs` on the 24 item files and 2 page files: all 26 parse, with
  no math delimiter or YAML errors.
- `content-policy.mjs` on the batch manifest: 24 scoped items, 0 errors and 0
  warnings.
- Scoped `depcheck`, `fwdcheck` and `extcheck`: all passed.
- Batch 26 item dependency levels: 24 items, maximum level 5, 0 errors or
  cycles. This agrees with the prepared internal levels in this file and with
  the run's batch-level level 0 for batch 26.

`step1-decisions.mjs record` wrote `ready` for all 24 assigned items, with the
direct examined dependencies and a note that readiness is not independent
acceptance; no `--owner` flag was used. The full-run decision check confirms 0
blockers on these two pages. Its run-wide result is not closed because other
assigned pages remain in progress: at the final check it showed 324 items, 94
ready decisions and 323 work records, all outside this pair. The full-run
dependency-level audit likewise remains open elsewhere: 160 pages / 324
items, 102 errors (93 empty other-page scaffolds and 9 stale dependency-level
labels); the 24 batch 26 items pass their scoped audit.

The repository-wide `fwdcheck` and `extcheck` were also attempted; they report
legacy findings outside this batch (480 forward-reference errors and one
unrelated published open-problem metadata error). Their scoped checks above
pass. An unscoped `depcheck` was stopped after it exceeded the check window;
the explicit batch-scoped dependency check passed. These outcomes do not
certify or block independent mathematical review of the authored statements.
