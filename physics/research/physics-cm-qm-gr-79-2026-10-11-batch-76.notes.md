# Batch 76 notes — `gr-experimental-interface` / `gr-experimental-interface-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-76, covers 76
(orders 255/256). Step-1 complete initial authoring. A worker exit, the
readiness records and every green check below are **not** independent
mathematical approval; Steps 2–3 review follow. Single-agent authoring: no
sub-agents were spawned; every carrier was drafted, checked and recorded in
this dispatch by the beta.

## Scope built

- A page `gr-experimental-interface` (order 255, category `general-relativity`,
  `library: physics`), 3 locally authored items:
  - `def-gr-observation-and-analysis-architecture` — definition, domain
    physics: model configurations, the six interface readouts (frequency
    ratio/redshift, radar round-trip proper time, deflection angle, azimuthal
    increment/perihelion advance, arrival times, ideal-detector strain),
    operational models with the interpretation obligation $(*)$, hard-bound
    data records, calibration declarations, the declared uncertainty
    vocabulary, the separation of comparison claims, and the explicit
    well-definedness/scope clause.
  - `lem-gr-reciprocal-ratio-window` — lemma, domain mathematics: the
    reciprocal ratio map $a\mapsto a_*/a$ is a strictly decreasing bijection
    with inverse $u\mapsto a_*/u$, point preimages are singletons, and the
    preimage of a closed interval is the exact closed interval
    $[a_*/u_2,a_*/u_1]$ of length $a_*(u_2-u_1)/(u_1u_2)$. All deps are
    published root-mathematics items, so the item is level 0.
  - `rem-gr-primary-report-research-queue` — remark, domain physics: the six
    report families of the design (redshift/clock comparisons, propagation
    delay, light deflection, perihelion advance, binary timing, interferometric
    strain), the model-side prediction content each would consume, the
    unsupplied M20 primary-report/analysis layer, and the empirical
    qualifications every future comparison must carry.
- B page `gr-experimental-interface-examples` (order 256), 2 leaf items:
  - `ex-gr-cosmological-redshift-interface-record-window` — example, domain
    physics: an explicit future null geodesic family in an exponentially
    expanding flat FLRW datum (the de Sitter family, verified locally against
    the FLRW Christoffel symbols and the coordinate geodesic equation), the
    operational model with redshift readout $F(a_E)=a_R/a_E-1$ satisfying
    $(*)$, an illustrative one-point record with declared box $[1/2,3/4]$, and
    the exact consistency window $[4a_R/7,2a_R/3]$ of length $2a_R/21$
    (illustrative normalisation $a_R=1$: window $[4/7,2/3]$, length $2/21$).
  - `cex-gr-bounded-redshift-record-does-not-identify-the-parameter` —
    counterexample, domain physics: the same model and record are consistent
    with two distinct parameters $4a_R/7\ne2a_R/3$, and in fact with the whole
    positive-length interval, so a bounded one-point record does not determine
    the parameter uniquely.
- Library carriers `library/general-relativity/gr-experimental-interface.md`
  and `…-examples.md`, both `status: draft`, with page prose and the full item
  inventories. `_category.md` already existed and is unchanged.
- Manifest `research/physics-cm-qm-gr-79-2026-10-11-batch-76.pages.json`
  regenerated after every carrier or dependency edit; the final regeneration
  precedes the readiness records.
- Design budgets (A 18 / B 8) and the 100-item cap are respected (3 + 2). No
  page split was needed.

## Design control and design-versus-plan record

The dispatch lists two design locations. `research/plan-general-relativity-track.md`
L248–263 (page GR12, order 255) is the **controlling** design: it is this
run's GR track for the exact page ids of the batch. `research/plan-special-relativity-track.md`
L267 (page SR12) is the **analogous page in the sibling framework** and is
comparative context only: it documents the same interface role for special
relativity with its own vocabulary and its own already-authored carriers
(`sr-experimental-interface`), none of which is a supplier of this batch.
Its inventory is not applied to GR12; the GR design's inventory is.

Design inventory coverage (GR12 reservation): "def observation/analysis
architecture" = `def-gr-observation-and-analysis-architecture`;
"rem primary redshift, delay, light-deflection, perihelion, binary and
interferometer report queue" = `rem-gr-primary-report-research-queue`;
"M20 before exp items" = **not supplied**: the design's own closure is
"primary-report queue only; no experiment invented", the scaffold audit's M20
row records "no-experiment-authored; primary-report-queue-retained", and no
primary report was read in this dispatch, so no experiment item and no
measured value is authored. This is the design's promised deliverable, not an
escalation: the design promises the queue and only conditions future
experiments on M20. The exact wording of the reservation is preserved in the
remark, including the six families.

Plan conflict (recorded; the current plan controls): the design reservation
declares `requires` GR07–GR10 (`gr-flat-and-newtonian-bridges`,
`gr-spherical-vacuum-model`, `gr-homogeneous-cosmology`, `gr-linearized-waves`),
while `research/plan-spec.json` declares only the three pages
`["gr-homogeneous-cosmology","gr-linearized-waves","gr-spherical-vacuum-model"]`.
The manifest uses the plan's three roots; `gr-flat-and-newtonian-bridges` is
already inside their transitive plan closure, so no design scope is lost. The
manifest additionally declares `further-trigonometric-identities-and-inverses`
for the published `def-principal-inverse-sine-and-cosine` supplier used by the
deflection readout; `validate-plan` required it as the one non-redundant
closure addition, and after the addition the page has no `undeclared-prereq`
or `redundant-prereq` finding.

## Dependency graph and levels (mechanical, run-global)

In-run item levels (one plus the maximum in-run dependency level; published
root-mathematics suppliers do not raise levels), computed over all current run
manifests and checked by `item-dependency-levels.mjs check --run`:

| item | level |
|---|---|
| `lem-gr-reciprocal-ratio-window` | 0 |
| `def-gr-observation-and-analysis-architecture` | 15 |
| `rem-gr-primary-report-research-queue` | 16 |
| `ex-gr-cosmological-redshift-interface-record-window` | 16 |
| `cex-gr-bounded-redshift-record-does-not-identify-the-parameter` | 17 |

All in-run suppliers are items of batches 65–74 (all complete); batch 76's
dispatch level is 7 with dependencies on batches 72, 73 and 74, all of which
were complete before construction. The new items consume only supplier items
already on disk, with declared `dependency_roles`: mathematical-premise for
every mathematics-domain supplier, formulation-prerequisite for the
architecture and unit/postulate suppliers, physical-assumption for the two
adopted postulates (`post-gr-flrw-homogeneous-cosmological-model`,
`post-gr-ideal-clocks-and-free-fall`) and physical-result for
`pthm-gr-flrw-cosmological-redshift`. No empirical-premise role occurs
anywhere; no experiment exists in the batch.

## Mathematical route and conventions

- Readouts are functions of declared model configurations; the definition
  asserts no existence of configurations and no measurement. The frequency
  ratio is $F=E_R/E_E=g(W_R,U_R)/g(W_E,U_E)$ for worldlines parametrized by
  proper time, the redshift is $z=1/F-1$, and these agree with the observer
  energy $E_n(P)=-c\,g(P,n)$ of the cited definition for the unit observers
  $U/c$.
- The worked instance uses the framework's own FLRW items, not a textbook
  computation: the datum, comoving congruence and Christoffel symbols are
  `def-gr-flrw-model-data`, `lem-gr-flrw-metric-and-comoving-data`,
  `lem-gr-flrw-christoffel-symbols`; the redshift theorem used is
  `pthm-gr-flrw-cosmological-redshift`; the ray family
  $\eta(s)=(t_0+\frac1H\log(Hs),\,(r_0+\frac{c}{AH^2s},0,0))$ is verified
  locally against the coordinate geodesic equation, and
  $a(t(s))=AHs$ turns the affine parameter into $s_E=a_E/(AH)$.
- The window arithmetic is exact rational algebra
  ($a_R/(7/4)=4a_R/7$, $a_R/(3/2)=2a_R/3$, length $2a_R/21$); the
  normalisation $a_R=1$ is a declared illustrative value in the length unit of
  the datum. No choice principle is used; the only inherited choice-like
  assumption on the page is the countable choice already carried by
  `def-gr-smooth-lorentzian-objects` and its suppliers.
- The interface readouts for propagation delay, deflection, perihelion
  advance and arrival times are defined but have **no** in-framework
  prediction theorem; the definition and the queue say so. The strain readout
  points at the batch-74 detector definition and response theorem, and the
  redshift readouts point at the two restricted redshift theorems; these are
  nonlogical status pointers and are not premises of any item.

## Domain audit

The one locally authored mathematical item,
`lem-gr-reciprocal-ratio-window`, is `domain: mathematics` with only
mathematical-premise deps; every physics item has `domain: physics` and a
nonempty `physical_scope`; no mathematics item depends on a physics item; no
physics item appears on a mathematics page. The engine's scoped
`validatePhysicsContent` run over the 5 items and 2 pages reports 0 errors
(import verification bypassed because the workspace's mathematical import
drift is external to this batch; see below).

## Source handling

Three independent treatments are recorded in the coverage file, all fetched as
full text and inspected in this dispatch (extractions kept in `/tmp/b76/`):

- C. M. Will, *The Confrontation between General Relativity and Experiment*,
  Living Rev. Relativity 17 (2014) 4, `https://arxiv.org/pdf/1403.7377` —
  §2.1.3 pp. 12–16 (redshift as frequency-standard comparison), §4.1.1
  pp. 40–43 (deflection: astrometry/interferometry and fitted coefficient),
  §4.1.2 pp. 43–44 (time delay: differential round-trip times, ephemerides),
  §4.2 pp. 45–46 (perihelion residual after perturbation modelling), §6.1
  pp. 67–71 (binary pulsar arrival times), §7.1 pp. 77–78 (laser
  interferometers, strain, pulsar timing arrays).
- S. M. Carroll, *Lecture Notes on General Relativity*, arXiv:gr-qc/9712019v1
  — Ch. 6 (6.58)–(6.66) printed pp. 152–153; Ch. 7 (7.56)–(7.62) printed
  pp. 179–181 (perihelion, exact redshift ratio) and the deflection/time-delay
  narrative p. 181; Ch. 8 (8.1)–(8.7) and (8.61)–(8.67) printed pp. 217–219
  and 228–229 (FLRW metric, comoving family, redshift).
- D. Tong, *General Relativity* (Cambridge Part III 2019), author-hosted PDF,
  `https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf` — §1.2.5
  printed pp. 25–26 (Pound–Rebka frequency-standard comparison), §§5.2.2–5.2.3
  printed pp. 212–215 (bobbing geodesics, arm response), §§4.6.1–4.6.2
  printed pp. 198–204 (FRW metric, comoving observers, light and redshift).

Dispositions: 21 harvested result rows — 4 `included` (two per page), 16
`inline` into the named interface/queue/example items, and 1 `out-of-scope`
with a specific reason (the survey's tabulated measured determinations, which
require the primary reports and are not recorded). `source-fetch-check
--stamp` reports 5/5 fetch-verified with byte counts, SHA-256 prefixes and
page counts; the stamped URLs are the ones cited in the item frontmatter.
`coverage-checklist --require-destination` reports 2 pages, 21 harvested
results, 0 errors and 1 warning (`coverage-low-yield`: 2/15 rows scaffolded as
included items) — the warning is the expected shape of an interface page whose
content is one architecture definition plus a queue, and the inline rows are
the source sections absorbed into those two items.

## Cross-batch dependencies

`…-batch-76.cross-batch-dependencies.json` holds 29 rows: 25 item rows (every
dep homed in another run batch, with consumer-side evidence naming the fact
labels and steps that use the supplier) plus 4 page rows
(`gr-experimental-interface` → `gr-homogeneous-cosmology`,
`gr-linearized-waves`, `gr-spherical-vacuum-model`;
`gr-experimental-interface-examples` → `gr-experimental-interface`).
`frontier-dependency-ledger.mjs refresh --run …` completed ("refreshed and
deduplicated") and the unified ledger records batch 76 in `reviewed_batches`
with 28 deduplicated edges whose consumer batch is 76.

## Proof contracts

`…-batch-76.proof-contracts.json` (version 1, level
`physics-cm-qm-gr-79-2026-10-11-batch-76`) covers the three proof-bearing
items (`lem-gr-reciprocal-ratio-window`,
`ex-gr-cosmological-redshift-interface-record-window`,
`cex-gr-bounded-redshift-record-does-not-identify-the-parameter`); the
definition and the remark are outside contract scope, as for the definition-like
items of batches 71–75. Every fact's items links carry an exact citation
contract whose quote was sliced from the cited item's own Statement/Definition
section after the final edit; derivations map every numbered step with its
stated inputs; `routine_steps` is empty; all eight standard boundary cases are
disposed for each item (with `not_applicable` reasons where no such case
arises). `proof-contract --strict` reports 0 errors, 0 warnings, 3/3 items.

## Checks run (actual results)

| check | result |
|---|---|
| `precheck` (5 items) | 3 pass; definition and remark not-applicable (no phase body); 0 fail |
| `rendercheck` (5 items + 2 pages) | OK — no wikilink in math, balanced delimiters, no multiline display, all math parses in KaTeX, all frontmatter parses |
| `proof-layout` (5 items) | 5 items, 13 steps, 0 defects |
| `proof-contract --strict` | 0 errors, 0 warnings, 3/3 items |
| `depcheck --items-file` (5 items) | OK — selected item/page checks and prerequisite cycle checks passed; no warning after the queue pointer was changed from a wikilink to a backticked status pointer |
| `fwdcheck --items-file` | OK — the batch declares no forward reference (the four reported items inherit markers from existing suppliers, not new links) |
| `extcheck` | OK — 28349 items, 0 recorded-not-proved |
| `citecheck` (5 items) | OK — every recognised elementary move cites a home that states it |
| `citation-fidelity` (batch contracts, `--fail-on-missing-quote`) | 0 missing quotes; no widening candidates from the three detectors |
| `manifest-deps` | 5 items, 0 errors |
| `content-policy` (batch manifest) | 5 scoped items, 0 errors, 0 warnings |
| scoped `validatePhysicsContent` (5 items, 2 pages; import check bypassed) | 0 errors |
| `item-dependency-levels check --run` | no batch-76 finding; the run-wide output still lists 34 empty-inventory errors for unauthored batches and 3 level-label mismatches in the QM batches (all outside batch 76) |
| `coverage-checklist --require-destination` | 2 pages, 21 results, 0 errors, 1 `coverage-low-yield` warning (justified above) |
| `source-fetch-check --stamp` then check | 5/5 fetch-verified |
| `validate-plan --run` | earlier in the dispatch it failed run-wide with 5 `undeclared-prereq` errors on other pages; at the final run it exits 0 with warnings on other pages and no batch-76 error or warning (after adding `further-trigonometric-identities-and-inverses`) |
| `physics-check` | FAIL before item checks: `mathematics import changed: items/def-cardinal.md; reconcile and re-import before a new run` — external mathematical-workspace drift, not caused by batch 76 and outside this batch's authority; the scoped content validation above bypasses it deliberately |
| `proof-contract-coverage --run --contracts` | run-wide FAIL: `Empty or invalid frontier page inventory cm16-stability-perturbations-and-chaos` (another batch's unauthored page inventory); the batch-76 contract file itself passes `proof-contract --strict` 3/3 and its scope matches the three proof-bearing items |
| `step1-decisions check --run` | all 5 batch-76 items closed (ready) |

## Readiness records

All 5 items recorded `ready` with their declared dependency IDs after the
final carrier writes; `step1-decisions check --run` shows no batch-76 item
outstanding. No `--owner` reset and no escalation was used. Run-wide findings
left for owner/operator reconciliation (outside this batch's authority): the
mathematical import drift blocking `physics-check`, the run-wide
`undeclared-prereq` errors on other pages, the empty inventories of
unauthored batches, and the three QM level-label mismatches.

## Explicit non-claims

- No experiment item is authored, no measurement is recorded, and no
  numerical value is attributed to any source. The only numbers on either
  page are declared illustrative values of the worked instance
  ($1/2,3/4,5/8,1/8,4/7,2/3,2/21$).
- No in-framework prediction is claimed for propagation delay, deflection,
  perihelion advance or binary timing; the definition and the queue state the
  absence explicitly.
- The de Sitter configuration of the example is hypothetical: no claim is
  made that its $H$ satisfies the field law with any cosmological parameter,
  and no field equation, matter model or observation enters the example.
- The batch does not attempt any Step-2 or Step-3 gate, audit, verdict or
  publication; `status: draft` throughout.
- No defect was found in any consumed published or draft supplier during this
  dispatch; the only blocked run-wide check is the external mathematical
  import drift recorded above.

## Final dispatch status

After the last carrier edit (the frequency-ratio readout of the definition was
renamed $\mathcal F$ to avoid a notation clash with the prediction map $F$),
the manifest and proof contracts were regenerated, the full battery was
re-run with every batch-76 result green, and all five readiness records were
re-recorded against the frozen carriers. The batch is ready for Step-2 scope
review.
