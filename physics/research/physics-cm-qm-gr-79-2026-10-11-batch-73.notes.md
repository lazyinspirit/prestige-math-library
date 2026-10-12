# Batch 73 notes — `gr-homogeneous-cosmology` / `gr-homogeneous-cosmology-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-73, covers 73.
Step 1 complete initial authoring only; neither a worker exit nor a readiness
record is independent mathematical approval (Steps 2–3 review follow). The A
page is mixed-domain: ten items are mathematics (`domain: mathematics`) and
six are physics — the adopted model postulate, four model-conditional
physics-theorems and one scope remark. The B page holds four mathematical
leaf items: three examples and one counterexample, each an explicit
computation on a specified FLRW datum. No item reports a measurement; no
experiment, empirical premise or empirical uncertainty occurs anywhere in the
batch, and every physics-theorem states explicitly that it carries none.

## Scope built

- A page `gr-homogeneous-cosmology` (order 249, category
  `general-relativity`, `library: physics`), 16 locally authored items: 3
  definitions, 6 lemmas, 1 proposition, 1 postulate, 4 physics-theorems and 1
  remark, in the dependency order recorded in the manifest.
- B page `gr-homogeneous-cosmology-examples` (order 250), 4 leaf items: 3
  examples and 1 counterexample, each with a numbered verification or
  counterexample argument.
- Library carriers `library/general-relativity/gr-homogeneous-cosmology.md`
  and `…-examples.md`; `_category.md` was created earlier by batch-65 and is
  unchanged.
- Manifest `research/physics-cm-qm-gr-79-2026-10-11-batch-73.pages.json`:
  page orders, kinds, categories and `library` fields are as scaffolded; the
  item inventories, item metadata and the `requires` reconciliation recorded
  below were supplied here. Statement, deps, dependency_roles, justified_by,
  provenance, source and level fields were generated from the final carriers;
  the manifest was regenerated after every carrier edit, and a final
  regeneration was run after the last item change.
- Design budget (A 30 / B 12) and the 100-item cap are respected (16 + 4).
- Design inventory coverage (`research/plan-general-relativity-track.md`,
  "Homogeneous Cosmology"): "def FLRW metric/time/congruence/curvature
  parameter" = `def-gr-flrw-spatial-model`, `def-gr-flrw-model-data`,
  `lem-gr-flrw-metric-and-comoving-data`, `lem-gr-flrw-christoffel-symbols`,
  `lem-gr-flrw-comoving-congruence-expansion`; "post symmetry/fluid EOS" =
  `post-gr-flrw-homogeneous-cosmological-model`; "M18 Einstein reduction" =
  `lem-gr-flrw-ricci-and-einstein-tensors`,
  `def-gr-flrw-friedmann-system`,
  `prop-gr-flrw-equation-equivalences`,
  `pthm-gr-flrw-field-equations-reduction`; "pthm restricted solutions" =
  `pthm-gr-flrw-power-law-solutions`, `pthm-gr-flrw-de-sitter-solutions`,
  `pthm-gr-flrw-cosmological-redshift`; "rem observation/model dependence" =
  `rem-gr-flrw-observation-and-model-dependence`. The two local
  constant-curvature mathematics lemmas and the spatial-model definition
  supply the curvature input the design's "curvature parameter" names.

## Dependency levels (computed mechanically; run-global)

Levels are computed over **all** current run manifests, so a level counts
in-run suppliers in any batch, not only this one, exactly as
`item-dependency-levels.mjs` computes them. They were recomputed after every
dependency change and after the final manifest regeneration; the current
labels are:

| item | level |
|---|---|
| `lem-gr-constant-rescaling-preserves-levi-civita-and-curvature` | 0 |
| `def-gr-flrw-spatial-model` | 1 |
| `lem-gr-constant-curvature-three-manifold-ricci` | 2 |
| `def-gr-flrw-model-data` | 2 |
| `def-gr-flrw-friedmann-system` | 3 |
| `lem-gr-flrw-metric-and-comoving-data` | 4 |
| `prop-gr-flrw-equation-equivalences` | 4 |
| `ex-gr-flrw-flat-power-law-check` | 4 |
| `ex-gr-flrw-de-sitter-system-check` | 4 |
| `cex-gr-flrw-static-matter-not-a-flat-solution` | 4 |
| `lem-gr-flrw-christoffel-symbols` | 6 |
| `lem-gr-flrw-comoving-congruence-expansion` | 7 |
| `ex-gr-flrw-redshift-conservation-check` | 7 |
| `post-gr-flrw-homogeneous-cosmological-model` | 9 |
| `pthm-gr-flrw-cosmological-redshift` | 10 |
| `lem-gr-flrw-ricci-and-einstein-tensors` | 11 |
| `pthm-gr-flrw-field-equations-reduction` | 13 |
| `pthm-gr-flrw-power-law-solutions` | 14 |
| `pthm-gr-flrw-de-sitter-solutions` | 14 |
| `rem-gr-flrw-observation-and-model-dependence` | 15 |

Run-wide check: `node tools/physics-support/item-dependency-levels.mjs check
--run physics-cm-qm-gr-79-2026-10-11` reported 60 errors at the end of this
authoring session (56 in a later re-check as other batches completed), **all**
of them "empty scaffold inventory" of batches still being authored (and 0
level-mismatch errors for any item of any batch at the time of the final
run); no line names a batch-73 item or page. This is an in-flight run
condition, not a batch-73 finding. The 11 `nrqm-autonomous-dynamics`
level-mismatch errors seen earlier in the session were repaired by their
owning batch while this batch was being authored and no longer appear.

## Source mapping and harvest

Coverage file `research/physics-cm-qm-gr-79-2026-10-11-batch-73.coverage.json`
harvests four sources; `source-fetch-check --stamp` reports
**7/7 source entries fetch-verified** (4 distinct URLs across the two pages),
and check mode (no network) confirms 7/7 resolved with 0 documented drops.
All four documents were downloaded and inspected as full text; page numbers
and equation numbers below were re-checked against the extracted pages and
several item locators were corrected after that inspection (see below).

1. **Carroll, Lecture Notes on General Relativity**, arXiv:gr-qc/9712019v1
   (238 pp). Locator: Ch. 8 (8.1)–(8.68), printed pp. 217–229 (PDF
   pp. 224–236). Verified: (8.1)–(8.7) PDF 225–226; (8.32)–(8.37) PDF
   230; (8.49) PDF 233; (8.58) PDF 234; (8.61)–(8.67) PDF 235–236;
   (8.68) PDF 236. 13 harvested results, 9 included, 2 inline, 1 deferred
   (`gr-experimental-interface`), 1 out-of-scope.
2. **Tong, General Relativity** (Michaelmas 2019), §4.6 "A Taste of
   Cosmology", printed pp. 198–203 (PDF pp. 205–210). Verified: §4.6.1
   begins PDF 205; FRW metric (4.63) PDF 206; §4.6.2 begins PDF 208;
   Friedmann/acceleration (4.66)–(4.67) PDF 209–210; the comoving field
   $u^\mu=(1,0,0,0)$ and $\nabla_\mu u^\mu$ on PDF 209. 5 harvested results,
   2 included, 3 inline.
3. **Tong, Cosmology** (2019 revision), §§1.1.1–1.1.4, 1.2.1–1.2.3, 1.3.1
   and 1.3.3, printed pp. 7–16, 24–30, 32–34 and 40–43 (PDF pp. 13–22,
   30–36, 38–40 and 46–49). Verified: §1.1.1 PDF 13; FRW metric (1.12)
   PDF 16; redshift (1.18)–(1.23) PDF 20–21; P = wρ (1.35) PDF 32;
   continuity (1.39) PDF 34; Friedmann (1.42) PDF 35; Einstein–de Sitter
   PDF 39–40; de Sitter §1.3.3 PDF 46–49. 10 harvested results, 7 included,
   3 out-of-scope.
4. **Reall, Part III General Relativity** (12 Oct 2022), §6.4 "Einstein's
   equation", printed pp. 67–68 (PDF pp. 68–69). Verified: the postulates
   and equation (6.32) on PDF 68; (6.34)–(6.35) and the cosmological-constant
   discussion on PDF 69. 6 harvested results, 1 included, 5 deferred to the
   pages of this run that own them, 1 out-of-scope (the Lovelock uniqueness
   theorem).

Locator corrections made after inspecting the extracted full text: the
de Sitter citations in `pthm-gr-flrw-de-sitter-solutions` and
`ex-gr-flrw-de-sitter-system-check` were corrected from "printed pp. 44–47"
to "printed pp. 40–43 (PDF pp. 46–49)"; the redshift citations in
`pthm-gr-flrw-cosmological-redshift`, `rem-gr-flrw-observation-and-model-dependence`
and `ex-gr-flrw-redshift-conservation-check` were corrected from §1.2.x to
§1.1.3 with the verified page ranges; the constant-curvature citations in
`lem-gr-constant-curvature-three-manifold-ricci` and
`def-gr-flrw-spatial-model` were corrected from §1.1.2 pp. 6–8 to §1.1.1
pp. 7–9 (PDF 13–15); the FRW-metric and comoving-coordinate citations in
`def-gr-flrw-model-data` and `lem-gr-flrw-metric-and-comoving-data` were
corrected to §§1.1.2/1.2.1; the Tong GR Christoffel locator changed from
PDF 206–207 to 206–208 and the comoving-frame locator from 205–207 to
205–209. The misattributed Tong-Cosmology citation in
`lem-gr-flrw-comoving-congruence-expansion` (which quoted an expansion-rate
discussion that is not in §1.4.1) was removed; the claim already cites the
verified Tong GR §4.6.2 computation on PDF 209. The Reall locator in
`pthm-gr-flrw-field-equations-reduction` was corrected from pp. 66–68 to
pp. 67–68 (PDF 68–69), and the citation no longer attributes conservation
to Reall, who adopts it as a separate postulate.

Harvest coverage statement: the coverage checklist reports **2 pages, 44
harvested results, 0 errors, 0 warnings** with `--require-destination`.
Everything harvested within the claimed ranges is either built, absorbed
inline, deferred to a resolving page of this run, or declined with a
result-specific reason; no result is silently dropped.

## Design vs plan-spec conflicts (recorded as required)

- The design section (`research/plan-general-relativity-track.md`,
  "Homogeneous Cosmology") declares the earlier prerequisite
  `gr-einstein-and-matter` only; `research/plan-spec.json` declares the same
  single prerequisite for the A page and the B page's dependency on the A
  page. The authored closure additionally consumes, through its items, the
  declared mathematics pages `riemannian-metrics-length-distance-and-volume`,
  `riemann-curvature-and-riemannian-submanifolds` and
  `the-exponential-function` (A page) and
  `construction-of-r-via-cauchy-sequences` (B page, through
  `lem-of-square-positive`). Following `validate-plan`'s own
  `undeclared-prereq` instruction and the batch-65/67/68/69 precedent, the A
  and B manifest and library `requires` now list these; no plan-spec, design
  or shared file was edited. Because the plan-spec page `requires` and the
  manifest differ, `splice-plan.mjs` will report a `requires` drift for the
  owner to reconcile at the join; every added page is genuinely consumed.
- CONFLICT (recorded): the published differential-geometry page
  `riemannian-comparison-theorems` hosts the published proposition
  `prop-half-space-model-geometry` (upper half-space model, constant
  sectional curvature $-a^2$, hence $-1$ for $a=1$), but that page is not
  declared anywhere in `plan-spec.json`, so `requires-resolve` forbids naming
  it and `undeclared-prereq` flags any item dependency homed on it.
  `def-gr-flrw-spatial-model` clause (d) therefore **restates** the $n=3$,
  $a=1$ instance with its exact metric, domain and curvature in prose and
  attributes it to the published proposition by ID, without a formal
  dependency or wikilink; this is the only use made of it, and the fact is
  flagged in the item text itself. If the owner later declares the
  comparison-theorems page in the plan, the formal dependency can be
  restored in a repair. No claim was weakened: the model's Ricci condition
  is still derived from the quoted constant-curvature statement by the
  in-batch companion lemma.
- The earlier B-page `redundant-prereq` warning (a direct requirement of
  `the-exponential-function` already reached through the A page) was removed
  by transitive reduction; the B page requires only its A page and
  `construction-of-r-via-cauchy-sequences`.

## Cross-batch dependency input

`research/physics-cm-qm-gr-79-2026-10-11-batch-73.cross-batch-dependencies.json`
records 5 `page` rows and 58 `item` rows (one per consumer→supplier pair),
each `verified` with the consumer's fact labels, their step uses and the link
context extracted from the final carriers. The page edges are
`gr-homogeneous-cosmology` → `gr-einstein-and-matter` (the manifest
`requires` edge: field law, conservation theorem, fluid model and fluid
conservation proposition), and item-dependency edges to
`gr-framework-and-geometry`, `gr-connections-and-free-fall`,
`gr-tensors-and-observers` and `gr-curvature-and-tides` for the framework,
connection, observer and curvature items consumed. Batch-73 is the consumer
for every row; no row asserts that a supplier batch is complete, and no
same-batch B→A `requires` edge is recorded here.

`frontier-dependency-ledger.mjs refresh --run physics-cm-qm-gr-79-2026-10-11`
reports "refreshed and deduplicated" after this input was written.

Recorded cross-batch metadata defect (not repaired here, batch-73 owns no
part of it): a scoped `validatePhysicsContent` run over batch 69's postulates
`post-gr-einstein-field-law` and `post-gr-classical-gravitational-action`
reports `nonproof-derivation` for these items, because each declares the
framework postulates `post-gr-spacetime-and-classical-domain` and
`post-gr-field-and-matter-assumptions` in `dependency_roles` with role
`physical-assumption`, and `tools/physics-support/physics-content.mjs` line
110 forbids `physical-assumption`/`physical-result`/`empirical-premise` roles
on nonproof kinds (a postulate must use `operational-prerequisite` or
`formulation-prerequisite`). This is exactly the metadata batch 69's own
content-policy run does not exercise in manifest-only mode. Exact repair
strategy (for the owner or a batch-69 repairer): re-role those two edges to
`formulation-prerequisite` on both postulates — no claim changes. Batch 73's
own postulate declares its postulate suppliers only as
`formulation-prerequisite` and therefore does not trigger this defect.
The run-wide `physics-check.mjs --run … --plan …` (see the checks below)
reproduces this with two `nonproof-derivation` errors on each of the two
postulates and names no batch-73 item.

## Checks run (exact results)

- precheck (20 batch items): 16 checked, 0 failing — all clean.
- rendercheck (20 items + 2 library pages): OK — 22 files, no wikilink
  inside math, no nested or unbalanced delimiters, no multiline display,
  every math span parses under KaTeX, every frontmatter block parses.
- proof-layout (20 items): 20 items, 69 steps, 0 defects.
- manifest-deps (batch-73 manifest): 20 item(s), 0 normalized, 0 errors.
- content-policy (batch-73 manifest): 20 scoped item(s), 0 errors, 0
  warnings.
- coverage-checklist `--require-destination`: 2 page(s), 44 harvested
  result(s), 0 errors, 0 warnings.
- source-fetch-check: stamp mode 7/7 fetch-verified; check mode 7/7 resolved,
  0 documented drops.
- proof-contract `--strict` on
  `…batch-73.proof-contracts.json`: 16/16 item(s) checked, 0 errors,
  0 warnings (15 proof-bearing items with citations, derivations and
  boundary worksheets; the postulate with `physics_review` only).
- proof-contract-coverage `--run … --contracts …`: **blocked by other
  batches** — "Empty or invalid frontier page inventory
  cm08-symmetry-noether-and-conditional-conservation". The tool requires
  every page of every run manifest to be nonempty; dozens of unauthored
  batches still have empty inventories, so this run-wide check cannot pass
  during construction. Within batch 73 the same coverage is established by
  the strict contract run above (all 15 proof-bearing carriers have entries;
  the definitions and remark carry no proof section and are outside contract
  scope, per the batch-65/67/68/69 convention).
- validate-plan (plan-spec, `--run`): 60 findings, **none names a batch-73
  page or item** — 3 `undeclared-prereq` errors in
  `gr-flat-and-newtonian-bridges-examples`, `qm-math-controlled-dynamics`
  and `qm-math-fock-and-equilibrium`, and 57 `redundant-prereq` warnings in
  other batches' pages. The batch-73 `requires` extension and transitive
  reduction are recorded above; `splice-plan.mjs` will report the resulting
  `requires` drift for owner reconciliation.
- item-dependency-levels check `--run`: 60 empty-inventory errors of
  unauthored batches; no line names a batch-73 item. (Batch-73's own labels
  were checked against the computed run-global values after the final
  manifest regeneration.)
- depcheck (focused on the 20 items): no finding names a batch-73 item; the
  remaining corpus rows (published-unaudited, multi-home, etc.) belong to
  other scopes. One earlier `b-leaf-content` finding — an A-page item
  depending on `ex-hyperbolic-space-has-negative-constant-sectional-curvature`,
  which lives only on a B/examples page — was repaired by the conflict
  resolution above (the dependency and its wikilink were removed and the
  fact restated in prose; see the recorded conflict).
- fwdcheck (focused): 0 open forward references; no `forward-*` finding
  names a batch-73 item.
- extcheck (focused): "28150 items, 0 recorded-not-proved, 0 resting on
  them"; OK.
- audit-manifest over the run's 79 manifests: 11 659 relationships over 972
  items in 79 batches; 22 defects, all in batch 75 (other scope); 0 name a
  batch-73 item, and batch-73 is listed with its two pages.
- physics-check `--run … --plan research/plan-spec.json`: 87 errors over 1028
  items checked, **none naming a batch-73 item**; the only GR items named are
  the two batch-69 postulates (the recorded `nonproof-derivation` metadata
  defect) and `rem-gr-flat-bridge-scope-and-limits` (batch 71). The remaining
  errors are other batches' (`thm-nrqm-*` role and dependency metadata).
- frontier-dependency-ledger refresh: see above.

## Readiness records

All 20 items are recorded `ready` with
`step1-decisions.mjs record --run physics-cm-qm-gr-79-2026-10-11 --item ID
--decision ready --dependencies <the item's declared deps> --reason
<evidence summary>` after the final carrier, manifest, page and contract
edits, so every record's hash binds the final item text and the examined
dependency list. The dependency lists passed are the items' declared `deps`,
including the cross-batch suppliers and the imported mathematical suppliers
actually used. This is an in-flight run: if another batch edits a supplier
inside a batch-73 dependency closure after this record, the engine's
readiness-currency check will mark the affected records stale and they must
be re-recorded against the current bytes; no claim of this batch depends on
that possibility. No item was escalated: every cross-batch supplier is an
in-run item recorded ready by its own batch or an inspected published
mathematical item, and the two plan-level issues (the `requires` extension
and the undeclared comparison-theorems page) are recorded above for owner
reconciliation.

`step1-decisions.mjs check --run` after recording reported 999 run items,
881 ready, not closed (other batches still in flight), with **0 unsettled
items for either batch-73 page**; the 176 unsettled run items are
missing-record, empty-inventory and stale-record conditions of other
batches. A later re-check (1013 run items, 905 ready) still reported 0
batch-73 unsettled; these run-wide totals move as other batches author. A
first recording attempt had no failures; no batch-73 record was re-recorded
before these checks.

Two kind-specific qualifications: the six definitions and the remark carry
no proof section and no proof-contract entry (they are outside contract
scope); the postulate carries a `physics_review` contract entry rather than a
proof worksheet, with formulation, scope, sources and non-derivation
evidence.
