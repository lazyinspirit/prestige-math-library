# Batch 15 authoring notes — `emg-mm01`

## Plan, scope, and inventory

The design section at `research/plan-einstein-maxwell-models-track.md` L516 and
`research/plan-spec.json` agree on both page identities, titles, order 465,
category, library, and page-level requirements. The machine plan keeps item
arrays empty pending build; the active batch manifest records the authored
inventory. The prose design reserves five A-page results; the active manifest
already adds `def-emg-pointwise-energy-conditions` for the exact vocabulary
used by the energy-condition theorem. This is consistent with the design's
inventory-expansion and audit-contract provisions.

Two additional A-page items are necessary for the reserved charged first
integral: `def-emg-c2-curve-covariant-acceleration` gives the coordinate
candidate for a C2 curve, and
`lem-emg-c2-curve-covariant-acceleration-well-defined` proves its vector
transformation law. The imported smooth-curve derivative definition does not
cover this C2 use. The new interface uses any interval with nonempty interior,
including closed and half-open finite segments; included endpoints have the
one-sided C2 regularity specified in clause (a) of
`def-gr-timelike-worldline-and-proper-time`. The overlap identity is first
proved at interior parameters and extends to included endpoints by continuity.

The assigned inventory is eight A items and four B examples, below the
100-item page limit. Recomputed item levels are A `[0,1,1,0,1,0,1,6]` and B
`[2,2,2,7]` in manifest order. Batch dependency metadata is level 3 with
required batches 2, 3, and 4.

## Mathematical and empirical scope

- `def-emg-matter-formal-systems` records smooth formal equations, observer
  contractions, and SI bookkeeping. Equations are conditions on supplied
  fields; no law adoption, existence, or uniqueness is inferred.
- `thm-emg-charged-dust-projection` proves the balance equivalence and advected
  ratio only on positive density. Its quotient regularity uses the positive
  reciprocal, chain rule, and C1 closure; nothing is divided by at zero density.
- `thm-emg-charged-fluid-projections` proves the longitudinal/rest-space
  identities and converse. The Ohmic relation is optional, and the heating
  sign uses the positive induced metric on the observer rest space.
- `thm-emg-selected-matter-energy-conditions` derives the Maxwell, dust, and
  perfect-fluid conditions in signature `(-,+,+,+)`. The total-stress result
  covers finite sums only; it assumes no general matter positivity.
- The four B examples directly verify their stated fields and hypotheses. B01
  uses a positive polynomial ratio profile; B03 supplies full eigenvalue
  multiplicities; B04 uses a smooth potential and derives the Lorentz factor
  from the norm and future direction.
- No empirical measurement or statistical inference is used. All claims are
  conditional mathematical deductions.

## Sources

The coverage manifest records complete full-text review of David Tong's
290-page General Relativity notes and Sean Carroll's 238-page General
Relativity notes, plus the complete 8-page Meinel–Hütten paper. Relevant
locators include Tong §§3.2.1–3.2.3 and 4.5.3–4.5.7, Carroll Ch. 3, §1.4.1,
and Ch. 5, and Meinel–Hütten §2. The different unit, metric, index, and source
sign conventions were compared; local conventions and calculations are stated
in the items. Each of 13 harvested results has an item-level disposition.
`source-fetch-check --stamp` verified 3/3 sources (0 new stamps); the coverage
check found 1 page, 13 harvested results, 0 errors, and 0 warnings. No retrieval
failure, recovery search, dropped source, or source-resolution escalation
occurred; `source_resolution` is empty accordingly.

## Cross-batch prerequisites and consumers

The page prerequisite `emg-mg04` supplies the exact conditional result used in
`thm-emg-charged-symmetry-current`: for smooth real `F` and `j`, `mu_0 > 0`,
`dF = 0`, and `nabla_a F^{ab} = -mu_0 j^b`,
`nabla_a T_EM^{ab} = -F^{bc} j_c`. The stress-divergence carrier and its
current-form, action-variation, and seven typed mathematical inputs have current
Step 1 records marked `ready`; the dated owner final-dispositions record
resolves the previous authoring-readiness hold at the current source bindings.
The local theorem therefore has complete current prerequisites and is recorded
`ready`. These statuses denote authoring readiness only, not independent proof
approval, gate acceptance, or publication. Its stress-current deduction stays
conditional on the exact supplier statement and model equations. The local
test-particle clause is separately proved. B04 is ready at that local clause.

The outside-batch consumer `pthm-emg-matter-symmetry-charges` was inspected at
its finite proper-time segment `[a,b]`; the broadened interval interface covers
that segment with one-sided endpoint regularity. Its stored item level is 5,
while the current dependency graph computes 7 after this supplier's current
level and dependencies. The consumer is outside this assignment; the owner
needs to refresh that level. No outside item was edited.

## Scoped validation and external blockers

- Precheck: 11 assigned files supplied, 8 proof-bearing files checked, 0
  failures.
- Proof layout: 11 items, 33 steps, 0 defects.
- Rendercheck: 11 files passed KaTeX, delimiter, link, and frontmatter checks.
- Proof contracts: 9/9 proof-bearing items checked, 0 errors, 0 warnings.
- Content policy: 12 assigned items, 0 errors, 0 warnings.
- Depcheck: focused checks passed for 12 items; cycle/page checks covered 1,290
  items and 280 pages.
- Batch dependency levels: 80 batches checked, maximum level 8, pass.
- Item dependency levels: all assigned item levels pass. The global check still
  reports 54 empty scaffold pages outside batch 15: `emg-mm03[-examples]`,
  `emg-mm02[-examples]`, `emg-mp03[-examples]`, `emg-mp02[-examples]`,
  `emg-ms03[-examples]`, `emg-s01[-examples]`, `emg-s02[-examples]`,
  `qsm-commuting-quantum-phases[-examples]`,
  `qsm-nonnormal-thermal-states[-examples]`,
  `qsm-infinite-spin-physical-models[-examples]`,
  `qsm-interacting-exact-models[-examples]`,
  `qsm-dt-response[-examples]`, `qsm-dt-channels[-examples]`,
  `qsm-dt-relaxation[-examples]`, `tgr-c04[-examples]`,
  `tgr-et03[-examples]`, `tgr-pet01[-examples]`, `tgr-pet02[-examples]`,
  `tgr-pet03[-examples]`, `tgr-mg01[-examples]`, `tgr-g01[-examples]`,
  `tgr-g02[-examples]`, `tgr-mhs01[-examples]`, `tgr-phs01[-examples]`,
  `tgr-phs02[-examples]`, `tgr-phs03[-examples]`, and `tgr-phs04[-examples]`.
  It also reports stale outside-batch item levels for
  `def-emg-xs-ingoing-rn`, `thm-emg-xs-rn-crossing`,
  `prop-emg-xs-rn-horizon-data`, `thm-emg-xs-kn-extension`,
  `lem-emg-xs-null-barrier`, `thm-emg-xs-rn-escape`,
  `prop-emg-xs-kn-horizon-data`, `thm-emg-xs-kn-escape`,
  `prop-emg-xs-kn-ergoregion`, `prop-emg-xs-charged-ring-obstruction`,
  `prop-emg-xs-rn-local-gauges`, `ex-emg-xs-extremal-horizon`,
  `cex-emg-xs-ergo-is-not-horizon`, `ex-emg-xs-superextremal-rn`,
  `ex-emg-xs-topological-charge`, `def-qsm-kms-state`,
  `lem-qsm-kms-strip-uniqueness`, `lem-qsm-gibbs-strip-limit`,
  `lem-qsm-kms-invariance`, `thm-qsm-finite-kms-gibbs-characterization`,
  `thm-qsm-infinite-spin-kms-existence`, and
  `ex-qsm-kms-two-level-gibbs-boundary`. These are outside assignment and were
  not edited.

All assigned items have current `ready` authoring-readiness records. The run
remains open for other batches and for owner handling of the listed global
metadata findings. No imported mathematical source, published content, shared
plan, or root original was edited.
