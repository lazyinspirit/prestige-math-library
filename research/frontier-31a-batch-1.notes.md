# frontier-31a · beta · batch 1 scaffold notes

## Design control and plan alignment

I read the complete GT-20 section at `research/plan-group-theory-track.md`
L2548–2656 and its B-page continuation at L2620–2656.  I likewise read GT-23
at L2860–2973 and its B-page continuation at L2940–2973.  In each case the
later cited location is the B-page subsection of the same design section, not a
competing completion amendment; the whole named GT section is controlling.

The dispatch specification is retained where it differs from the design.  GT-20
lists `composition-series-and-solvable-groups` and
`sylow-theorems-and-nilpotent-groups` in addition to the socle page, while the
specification requires `brauer-characters-and-decomposition-matrices-examples`
and `socles-and-the-onan-scott-landscape`.  GT-23 lists the A pages on H2,
derived-functor cohomology, Ext, and tensor products; the specification instead
requires the two named example pages.  These are recorded as design/spec drift,
not adjudicated locally; both pairs keep the exact `requires` arrays in the
specification.  The stage-1 drift record says the GT-20 additions are already in
the socle page’s transitive closure.

## Item inventory, conventions, and route

`the-finite-simple-group-classification-landscape` has 24 items and its B page
has 6.  It uses the conventional finite-simple classification wording: cyclic of
prime order, alternating degree at least five, Lie type, or 26 sporadics.  The
Lie-type material is deliberately table-level; `rem-low-rank-coincidences-and-duplicate-family-names`
does not silently choose conventions beyond the named source table.  The local
proof spine is
`def-quasisimple-group-component-and-layer` →
`lem-distinct-components-commute` →
`def-generalized-fitting-subgroup` →
`thm-generalized-fitting-subgroup-contains-its-centralizer`.
`def-p-local-subgroup` supplies the local-analysis vocabulary.  The classification,
Feit–Thompson, Schreier, and two-generation entries are external, non-load-bearing
landmarks; neither has downstream proof dependencies.  The B-page witnesses the
families and the extension-data warning without trying to construct a sporadic
group.

`schur-multipliers-and-universal-central-extensions` has 41 items and its B page
has 6.  The fixed convention is `M(G)=H_2(G;Z)`.  For finite groups the related
`H^2(G,C^×)` description is recorded only as a qualified alternative, not a
definition.  The proof route is: derived-functor definitions of group homology
and cohomology; free-presentation data and the low-degree
homology sequence; the Hopf quotient and its presentation independence; the
exterior-square calculation for abelian groups; central/stem extensions and
perfectness; the free-presentation construction of the universal central
extension; then the degree-two universal-coefficient sequence and finite Schur
covers.  The UCT short exact sequence is natural but its splitting is explicitly
noncanonical.  The two B-page cover examples have a concrete calculation target:
`C2 → D8 → C2×C2` is stem but cannot be universal because its base is not
perfect, while `D8` and `Q8` are nonisomorphic stem covers of `C2×C2` once the
exterior-square calculation gives its multiplier `C2`.

The six false statements in each A page are the design-mandated boundary checks,
not padding.  All 77 manifest items have explicit `deps`, including every empty
array.  Both A pages are below 60 items, so no split is required.

## Dependency rationale and closure repair

The CFSG local spine depends only on already named group-theory suppliers:
components require simple/perfect/subnormal vocabulary; `F*` requires the
Fitting subgroup; its centralizer theorem additionally invokes the normal
centralizer lemma and the finite characteristically-simple decomposition.  The
examples depend only on their exact elementary family or composition-series
claims.

The Schur page intentionally names the intermediate results a proof needs:
`lem-hopf-formula-subgroups-are-normal-and-the-quotient-exists`,
`lem-five-term-homology-sequence-for-a-free-presentation`,
`cor-schur-multiplier-of-a-finitely-presented-group-is-finitely-generated`,
and `lem-positive-degree-integral-homology-of-a-finite-group-is-order-torsion`.
They make the covering-group existence proof honest rather than treating
finiteness as a black box.  It also reuses the established extension-classification
theorem rather than duplicating it.

The active run’s batch-10 manifest is missing the two derived-functor pages, so
the first manifest-only gate exposed six otherwise unresolved uses of group
homology/cohomology and universal coefficients.  The three minimal suppliers
are now explicitly carried here:
`def-group-homology-as-a-derived-functor`,
`def-group-cohomology-as-a-derived-functor`, and
`thm-universal-coefficient-theorem-for-cohomology-over-a-pid`.  They were absent
from current manifests, are source-supported by Löh’s §§3.1 and 3.2.5, and make
the batch dependency-closed without changing the page plan or workflow state.
Any later recovery of the batch-10 pages must reuse these item IDs rather than
create duplicate claims.

## Harvest and source repair

The exact URLs, exact locators, source headings, and result-by-result
dispositions are in `frontier-31a-batch-1.coverage.json`.  The independent
primary treatments are Smith’s CFSG lecture notes, Löh’s group-cohomology notes,
Lassueur’s cohomology notes, and Weibel’s textbook chapters.  Aschbacher’s survey
supplies the classification-history/quasithin treatment; the AMS Number 10 page
is used only for the dated publication-status wording.

The previous historical Solomon row was not copied: its recorded
`https://ksda.ccny.cuny.edu/PostedPapers/Scott110609.pdf` now serves an unrelated
Len Scott paper, not Solomon’s history.  No historical result was removed to
clear that gate: Aschbacher’s surveyed original-proof/second-effort and
quasithin passages carry the retained history and repair items.  The canonical
AMS Number 10 page was read at the live publisher URL; its source role is
metadata/status rather than a substitute for a full mathematical treatment.

Known scope limits remain explicit: no CFSG proof, recognition theory, Lie
algebra development, character tables, order formulae, or sporadic construction;
no K-theoretic recognition criterion, projective-factor-set theory, full integral
duality, or general Sylow-restriction theory.  The status item is dated to the
design’s 2026-08-14 check and does not claim that a later edition or proof is
complete.

## Checkpoint

Manifest construction completed: 24/6 and 41/6 items, with all dependencies
present syntactically.  Validation on 2026-09-05:

- `manifest-deps.mjs research/frontier-31a-batch-1.pages.json`: **PASS** — 77
  items, zero normalizations, zero errors.
- `coverage-checklist.mjs --require-destination`: **PASS** — 2 A pages, 55
  harvested results, zero errors or warnings.
- `source-fetch-check.mjs --coverage … --stamp`, then check mode: **PASS** —
  7/7 source records fetch-verified, zero newly needed stamps.
- `git diff --check` on the three batch artefacts: **PASS**.
- `content-policy.mjs --manifest-only`: **PASS** — 77 scoped items, zero errors
  and warnings.  The missing run-level derived-functor suppliers were repaired
  in this manifest as described above.
- `validate-plan.mjs research/plan-spec.json`: **PASS** for the global plan;
  its output reports 547 planned pages still without item lists, as expected in
  the active partial run.
- `manifest-integrity.mjs --run frontier-31a`: reports the independent existing
  run-level scope loss for the two batch-10 derived-functor pages.  This batch
  did not create, modify, or resolve that workflow-state issue.

## Step-3 fix pass

The Step-3 review has no separately numbered finding ids.  To avoid inventing
or renumbering them, the records below use its exact stable row or subsection
locator.

- **`Verdicts` row — `the-finite-simple-group-classification-landscape` (sufficient):
  accepted; no manifest change.** The current record remains a 24-item A page
  and six-item B page, below the 60-item limit.  I re-read GT-20 at
  `plan-group-theory-track.md` L2548–2656 and its B-page continuation at
  L2620–2656.  Its conventions remain: the CFSG is an external,
  non-load-bearing landmark; Lie-type material is table-level only; and the
  local proof spine is component/layer → distinct components commute →
  $F^*(G)$ → its centralizer theorem.  The design/spec `requires` drift remains
  recorded above and is not adjudicated in this batch.

- **`Verdicts` row — `schur-multipliers-and-universal-central-extensions`
  (sufficient): accepted; no manifest change.** The current record is a
  38-item A page and six-item B page.  I re-read GT-23 at
  `plan-group-theory-track.md` L2860–2973 and its B-page continuation at
  L2940–2973.  It retains $M(G)=H_2(G;\mathbb Z)$, the free-presentation/Hopf
  route, the perfect-group universal-central-extension route, and the
  degree-two UCT with an explicitly noncanonical splitting.  The source passages
  checked were Löh §1.5 and §§3.1.4–3.2.5; Weibel Ch. 3 §3.6.5 and Ch. 6
  §§6.8–6.9; and Lassueur Ch. 9 §§34–37, at the exact coverage locators.

- **`Cross-group prerequisite-closure alert` (review L71–83): pushed back as
  foreign to batch 1; no manifest change.** The three reported targets are
  absent from this batch and have the existing earlier homes
  `group-cohomology-as-a-derived-functor` (the two derived-functor definitions,
  batch 10) and `universal-coefficients-and-kunneth-theorems` (the cohomology
  UCT, batch 9).  The batch-only diagnostic consequently reports the six listed
  edges, but the mandated whole-run manifest-only policy over all
  `frontier-31a` batch manifests passes with 908 scoped items and zero errors
  or warnings.  Adding duplicate suppliers here would contradict both the
  review and the stable-id rule.

- **Source record repair — AMS Number 10 publisher record: applied in
  `frontier-31a-batch-1.coverage.json`.** The generic publisher URL had a
  transient command-line DNS failure alongside all six unrelated source hosts.
  I recovered and read the same official product record at
  `https://bookstore.ams.org/surv-40-10`, preserved the generic URL as
  `original_url`, and tightened the locator to its title, Book Details,
  Table of Contents, and publisher description.  This changes no harvested
  result: it still supports only
  `rem-status-of-the-second-generation-proof`; the contents remain explicitly
  out of scope.  A forced CLI fetch at 2026-09-05T09:02:31Z returned
  `EAI_AGAIN` for all seven hosts, while browser full-text retrieval read the
  listed source ranges and the normal stamp gate remains 7/7.

Current validation on 2026-09-05: `manifest-deps` passes (74 items, zero
normalizations/errors); `coverage-checklist --require-destination` passes (2 A
pages, 55 harvested results, zero errors/warnings); whole-run
`content-policy --manifest-only` passes (908 items, zero errors/warnings); and
`validate-plan` reports an acyclic consistent plan with no item-level cycles,
forward references, B-page dependencies, or unresolved IDs among the 746
itemized pages.  The next action is Step 4 splice; no mathematical or
dependency obligation remains in this batch.

## Step-5 authoring

**Blocked before any item or page was authored.**  The exact batch manifest
requires both `thm-classification-of-finite-simple-groups` and
`thm-feit-thompson-odd-order-theorem` to have `kind: theorem` and
`proved_here: false`.  This cannot be represented truthfully under the active
schema: `SCHEMA.md` §2 requires every recorded-not-proved result to be a
`remark`, and `tools/extcheck.mjs` enforces the same condition as its hard
`unproved-kind` error.  Retaining the theorem kind would make the required
in-flight content invalid; changing either planned kind/id or the manifest is
outside this Beta batch's authority; and setting `proved_here: true` would
falsely claim local proofs of CFSG and Feit–Thompson.  Therefore no planned
item was written, no planned page was written, and no proof-contract scope was
created.

The source passages were recovered before the block: Smith, *CFSG—A User's
Manual*, PDF pp. 1–24 (including the statement, family table, components and
generalized Fitting discussion); Aschbacher, *Status of the Classification*,
PDF pp. 1–5; Löh §1.5 and §§3.1.4–3.2.5; and Weibel Ch. 6 §§6.8–6.9.  These
support the planned mathematical route but cannot repair the metadata
contradiction.

Checks actually run on 2026-09-05:

- `node tools/validate-plan.mjs research/plan-spec.json`: **PASS** (its normal
  global informational output is extensive; it reports acyclic declared order
  and no item-level cycle/forward/B-page/unresolved-id faults among itemized
  pages).
- `node tools/tsx-run.mjs tools/precheck.mts` was invoked with all 74 explicit
  `items/ID.md` paths generated directly from this manifest: **BLOCKED** at the
  first absent file, `items/rem-simple-groups-as-composition-factors.md`.
- `node tools/content-policy.mjs research/frontier-31a-batch-1.pages.json`:
  **FAIL as expected**, 74 `scope-item-missing` errors because authoring could
  not begin.
- `node tools/proof-contract.mjs research/frontier-31a-batch-1.proof-contracts.json --strict`:
  **FAIL as expected**, the required output does not exist because there are no
  honest authored proof-bearing items to scope.

No provenance, sources, generation data, verification records, workflow state,
published content, or another batch was changed.  The required resolution is
an owner-level schema/manifest reconciliation (for example, a planned
`rem-` recorded-not-proved landmark in place of each incompatible `thm-` item),
after which this batch can be authored against the reconciled task.

## Step-5 authoring

**Recovery check: still blocked; no assigned item or page was authored.** The
current batch manifest and current `research/plan-spec.json` both retain
`thm-classification-of-finite-simple-groups` and
`thm-feit-thompson-odd-order-theorem` as `kind: theorem` with
`proved_here: false`. `SCHEMA.md` §2 and `tools/extcheck.mjs` require every
such recorded-not-proved item to be a `remark`; the stable `thm-` IDs also have
the theorem prefix required by the schema. Thus neither changing kind nor
writing these as the planned theorem items is schema-valid, while changing the
manifest/plan or supplying nonexistent local proofs is outside this batch.

The assigned artifact check found 0/78 planned item-or-page files present.
The proof-contract output was created with an empty scope and no contracts,
truthfully reflecting that there are no authored proof-bearing items. No claim
was narrowed or dropped, and no provenance, source, generation, or
verification record was created. The controlling recovery source and
dependency route remain those recorded above; no mathematical source defect is
the blocker. Next action requires the owner-level schema/manifest
reconciliation already identified above.

Checks actually run on 2026-09-05 for this recovery:

- `node tools/tsx-run.mjs tools/precheck.mts` was invoked with all 74 explicit
  manifest paths. It stopped at the first missing assigned item,
  `items/rem-simple-groups-as-composition-factors.md` (`ENOENT`, exit 1).
  There is no canonical precheck repair to apply without first making the
  schema-invalid planned recorded-not-proved theorem items.
- `node tools/validate-plan.mjs` exits 2 because the current tool requires its
  mandatory `<plan-spec.json>` argument. Its canonical invocation,
  `node tools/validate-plan.mjs research/plan-spec.json`, passed: declared page
  order is acyclic and consistent, with no item-level cycles, forward
  references, B-page dependencies, or unresolved IDs among the 800 pages with
  item lists.
- `node tools/content-policy.mjs research/frontier-31a-batch-1.pages.json`
  exits 1 with exactly 74 `scope-item-missing` errors, one for every planned
  batch item; this is the expected consequence of the truthful no-authoring
  decision.
- `node tools/proof-contract.mjs
  research/frontier-31a-batch-1.proof-contracts.json --strict` passes with 0
  errors, 0 warnings, and 0/0 scoped items.

## Step-5 authoring — recovery authoring

Authored all 74 planned draft items and the four assigned group-theory pages.
The external landmarks retain the reconciled stable ids
rem-classification-of-finite-simple-groups and rem-feit-thompson-odd-order-theorem,
both as recorded-not-proved remarks with structured external-dependency records;
neither is a dependency target. All other items retain their manifest ids,
dependencies, provenance, and draft status. No judge record was created.

The CFSG page follows the local component/layer to generalized-Fitting-subgroup
spine. Classification, Feit–Thompson, Schreier, and two-generation remain
explicit external landmarks. The Schur page fixes $M(G)=H_2(G;\mathbb Z)$ and
uses the free-presentation/Hopf, perfect-group universal-extension, and
degree-two UCT route; its splitting is explicitly noncanonical. Both design
locations were read. Their older prerequisite lists differ from the manifest's
plan-spec requirements, so the manifest was retained as instructed rather than
adjudicating drift locally.

Statements are literature-derived. Local proof or verification text is
ai-generated; definitions and ordinary remarks are not-applicable; the two
recorded external remarks are not-supplied. CFSG material uses the
coverage-recorded Smith, Aschbacher, and AMS locators; Schur material uses the
coverage-recorded Löh, Lassueur, and Weibel locators. No claim was narrowed or
dropped, and there are no batch blockers.

Checks run on 2026-09-05:

- Explicit-manifest-path precheck: PASS, 47 proof-bearing items checked.
- validate-plan without its required argument exits 2; canonical
  validate-plan research/plan-spec.json: PASS.
- content-policy on this batch: PASS, 74 scoped items, 0 errors and warnings.
- strict proof-contract: PASS, 47/47 items, 0 errors and warnings.
- Focused rendercheck of the Hopf, exterior-square, and cover proofs: PASS
  after repairing TeX escaping.

Repository-wide depcheck retains pre-existing legacy warnings; it reported no
new unresolved reference or cycle from this batch.
