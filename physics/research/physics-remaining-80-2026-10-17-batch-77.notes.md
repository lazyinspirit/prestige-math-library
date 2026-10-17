# Batch 77 notes — `tgr-phs01` / `tgr-phs01-examples`

Run `physics-remaining-80-2026-10-17`, beta batch 77. The assigned A/B pair is
`tgr-phs01` (order 651) and `tgr-phs01-examples` (order 652), in
`thermodynamics-and-general-relativity`. New items and pages remain drafts.
Only the four assigned items, both assigned pages, the batch manifest, and
batch-local evidence were authored or updated.

## Plan comparison and conflicts

The current `plan-spec.json`, batch-77 manifest, and current pair design require
`emg-s01`, `tgr-i01`, and `tgr-mhs01` for the A page. The design's original
reservation lists only `TGR-I01` and `TGR-MHS01`; that older reservation omits
the current EMG supplier. The current plan and its exact ordering control, so
all three current page prerequisites are retained. The B page requires
`tgr-phs01` and is a leaf.

The old proposed item inventory uses the invalid combined dependency role
`physical-premise-or-result` for this pair's postulate and area theorem. The
authored carriers use the schema roles that express the inspected interfaces:
`physical-assumption`, `physical-result`, `formulation-prerequisite`, and
`mathematical-premise`. Their physical scopes retain the original restricted
smooth-horizon and stationary-family claims.

## Inventory, dependency interfaces, and levels

The A page contains three items; the B page contains one thought experiment.
Both pages are well below the 100-item cap. The exact direct dependencies,
roles, and item levels are in `batch-77.pages.json`.

| Item | In-run direct suppliers | Level |
|---|---|---:|
| `post-tgr-smooth-horizon-energy-condition` | `def-tgr-framework-units` (5), `post-emg-einstein-maxwell-equations` (2), `def-tgr-horizon-screen-family` (0) | 6 |
| `pthm-tgr-restricted-classical-area` | postulate (6), `thm-tgr-smooth-null-area` (2), `def-tgr-horizon-screen-family` (0), `post-emg-einstein-maxwell-equations` (2) | 7 |
| `pthm-tgr-kn-family-mechanics` | `pthm-emg-xs-kn-horizons` (10), `prop-tgr-kn-first-law-smarr` (9), `lem-tgr-schwarzschild-horizon-data` (8), `def-tgr-framework-units` (5), `def-emg-xs-si-parameters` (3), `pthm-emg-xs-kn-model` (7), `thm-emg-xs-kn-extension` (7) | 11 |
| `texp-tgr-classical-schwarzschild-work` | KN family mechanics (11), `lem-tgr-schwarzschild-horizon-data` (8) | 12 |

`def-emg-lorentzian-forms` and `def-countable-choice` are published
mathematical context, not in-run suppliers, and do not raise item levels. The
current scoped dependency recomputation covers 103 items on 17 pages and
reproduces levels 6, 7, 11, and 12 with zero errors. No dependency cycle was
found.

The run's pre-authoring scheduling file recorded batch 77 at level 5 with
requirements `24`, `54`, and `73`. Recomputing the current full run graph after
authoring gives batch 77 level 5 with direct batch requirements `5`, `22`,
`24`, `54`, and `73`, because the authored item dependencies expose the EMG
equation postulate and the current ingoing KN extension. The level is unchanged,
but the shared row is stale: `batch-dependency-levels.mjs check` reports
`Stale batch dependency levels ...; recompute before authoring`. This shared
run scheduling artifact was left untouched for the owner to refresh at the
drained construction join. The refreshed batch-77 row is recorded here as
context, not as an owner rewrite.

## Supplier inspection and conditional proof route

Current Step-1 records for all direct in-run suppliers are present, hash-current,
and `ready`. I read the current statements and complete relevant arguments of
`post-emg-einstein-maxwell-equations`, `def-tgr-framework-units`,
`def-tgr-horizon-screen-family`, `thm-tgr-smooth-null-area`,
`def-emg-xs-si-parameters`, `pthm-emg-xs-kn-model`,
`thm-emg-xs-kn-extension`, `pthm-emg-xs-kn-horizons`,
`prop-tgr-kn-first-law-smarr`, and
`lem-tgr-schwarzschild-horizon-data`. I checked their actual hypotheses and
conventions against the consuming steps. The GR and EM Einstein-tensor/Ricci
conventions agree. The area theorem assumes `AC_omega`, nonnegative Ricci
contraction on the full future flow, and persistent compact spacelike cuts.
Its proof is a complete current mathematical argument; its draft status and
absence of independent approval are not missing prerequisites.

The postulate adopts the equation-based smooth Einstein–Maxwell field law and
the null energy condition only on the specified future null generator. The
area theorem contracts the field equation with that null vector, drops the
metric-proportional cosmological and scalar-curvature terms, and applies the
exact smooth mathematical area theorem. It claims no result for arbitrary
event horizons, nonsmooth generators, quantum states, or generalized entropy.

The Kerr–Newman theorem pulls the complete strict-subextremal mathematical
first-law and Smarr identities through the explicit SI map. It derives
`j=G_N J/c^3`, `E_par=c^4 m/G_N`, `Omega_SI=c Omega_geom`,
`kappa_acc=c^2 kappa_geom`, and
`Phi_SI=(c/alpha) Phi_geom=c^2 Phi_geom/sqrt(4 pi epsilon_0 G_N)`.
The voltage retains the selected displayed gauge and its zero-at-infinity
reference. The joint zero-spin/zero-charge point uses the separate current
Schwarzschild horizon lemma, because the generic physical KN horizon theorem
excludes that point. `E_par` remains an energy-valued family parameter and is
not identified with ADM or Komar gravitational energy. The B item differentiates
the exact Schwarzschild family area and verifies its SI work differential;
it is a model deduction, not a process or observation.

All draft mathematical and physical suppliers are consumed only at their
inspected current statements and proof status. The conditional claims do not
confer independent proof approval.

## Source reading and dispositions

The A page has two independent complete full-text treatments, including
Carroll's complete 238-page General Relativity lecture notes, plus an
independent complete Kerr–Newman review. I inspected the relevant full-text
passages in this turn:

- Wald, *The Thermodynamics of Black Holes*, complete 46-page review,
  §2 PDF pp. 3–10. I read the null-generator/Raychaudhuri and global
  predictability discussion plus the stationary first-law and
  thermodynamic-distinction discussion. The global theorem and its broader
  thermodynamic claims are not transferred.
- Carroll, *Lecture Notes on General Relativity*, complete 238-page notes,
  Chapter 7, equations (7.114)–(7.116) and (7.148)–(7.156), printed
  pp. 208–216 (PDF pp. 214–223). Kerr-only calculations are used as context;
  no Kerr formula is extended to KN.
- Adamo–Newman, *The Kerr-Newman Metric: A Review*, complete 30-page review,
  §3.3 equations (3.18)–(3.23) and §4.1 equations (4.1)–(4.2), printed
  pp. 16–21 (PDF pp. 17–22). Its signature, units, and thermodynamic
  identification are not adopted.

The inspected local full-text bodies are the Wald PDF/text in
`research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/workers/horizons-semiclassical/raw/`,
Carroll's complete PDF/layout in
`research/first-principles-2026-10-03/relativity/reader-carroll/`, and the
Adamo–Newman complete PDF/text in
`research/extended-frameworks-2026-10-03/einstein-maxwell-models/workers/solutions/raw/`.

Every harvested result and limitation has an item-level `included` or `inline`
disposition in `batch-77.coverage.json`. The complete PDF fetch stamps and
original successful retrieval attempts are preserved from current-run batch 73.
`source-fetch-check --stamp` verifies 5/5 page-source entries, with 0 new
stamps; there were no retrieval failures, recovery retries, source drops, or
source-resolution escalations. No empirical measurement is claimed.

## Cross-batch inputs

`batch-77.cross-batch-dependencies.json` contains 17 rows and matches all 17
current in-run cross-batch edges exactly: three page requirements and fourteen
item edges. Each row is `verified` at the scoped interface level. This means
the actual supplier statement and use were checked; it is not independent
proof approval. Published mathematical inputs have no cross-batch row.

## Scoped checks

- Rendercheck: 6 changed item/page files, 0 errors.
- Normative precheck: 3 proof-bearing items, all pass.
- Proof layout: 4 changed items, 8 numbered steps, 0 defects.
- Strict proof contracts: 4/4 items, 0 errors and 0 warnings.
- Content policy: 4 items, 0 errors and 0 warnings.
- Focused dependency check: 4 selected items; 1,877-item/407-page
  prerequisite closure; 0 errors and 0 warnings.
- Forward-reference and recorded-not-proved checks: selected scope passes.
- Coverage checklist: 2 pages, 5 harvested results, 0 errors and 0 warnings.
- Source-fetch check: 5/5 entries verified, 0 newly stamped, 0 drops.
- Manifest dependency check: 4 items, 0 missing dependency arrays, 0 errors.
- Scoped item dependency levels: 4/4 declared levels match recomputation.
- Cross-batch interface rows: 17/17 exact current in-run edges.
- Pathcheck: no pathway files selected for these draft pages; 0 errors and
  0 warnings.

The only outstanding shared evidence issue is the stale run-wide batch
scheduling row described above. It is not a missing supplier carrier or a
reason to mark an authored item escalated; the owner must refresh the shared
batch graph at the drained join. Step-1 records below record item authoring
readiness only and do not grant independent acceptance.

## Step-1 readiness

All four assigned items have current `decision: ready` records with
`owner: false`. The direct dependency closures were reloaded after the final
edits and every recorded hash is current. The records are
`physics-remaining-80-2026-10-17-step1-post-tgr-smooth-horizon-energy-condition.json`,
`physics-remaining-80-2026-10-17-step1-pthm-tgr-restricted-classical-area.json`,
`physics-remaining-80-2026-10-17-step1-pthm-tgr-kn-family-mechanics.json`, and
`physics-remaining-80-2026-10-17-step1-texp-tgr-classical-schwarzschild-work.json`.
