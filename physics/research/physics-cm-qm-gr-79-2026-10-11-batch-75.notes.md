# Batch 75 notes — `gr-causal-and-initial-value-boundaries` / `gr-causal-and-initial-value-boundaries-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-75, covers 75.
Step 1 complete initial authoring only; neither a worker exit nor a readiness
record is independent mathematical approval (Step 2/3 review follows). The A
page is mixed-domain: twenty-one items are mathematics (`domain: mathematics`)
and the closing scope note `rem-gr-causal-and-initial-value-scope` is
`domain: physics`; all six B-page items are mathematics. No item reports a
measurement, and no experiment, empirical premise or empirical uncertainty
occurs anywhere in the batch; the physics remark states the physical scope and
records the deferrals.

## Scope built

- A page `gr-causal-and-initial-value-boundaries` (order 253, category
  `general-relativity`, `library: physics`), 22 locally authored items: 6
  definitions, 11 lemmas, 4 theorems and 1 physics remark.
- B page `gr-causal-and-initial-value-boundaries-examples` (order 254), 6 leaf
  items: 3 examples and 3 counterexamples, each with a numbered verification or
  counterexample argument.
- Library carriers `library/general-relativity/gr-causal-and-initial-value-boundaries.md`
  and `…-examples.md`; `_category.md` was created by batch-65 and is unchanged.
- Manifest `research/physics-cm-qm-gr-79-2026-10-11-batch-75.pages.json`:
  page order, kind, category and `library` fields are unchanged from the run
  scaffold; the edits are the item inventories (the two new local flat-model
  items), the item metadata, the dependency levels and the `requires`
  reconciliation recorded below. Statement, deps, dependency_roles,
  justified_by, provenance, source and level fields were regenerated from the
  final carriers with a script whose dry run reproduced every unchanged field;
  after regeneration the two directions (carrier → manifest) agree for all 28
  items.
- Design budget and the 100-item cap are respected (22 + 6). Design inventory
  coverage (research/plan-general-relativity-track.md, "Causal And Initial
  Value Boundaries", reservation `GR11` "C3–C5 exact causal hierarchy, Cauchy
  definitions, flat countermodels and Raychaudhuri/focusing"):
  "causal hierarchy" = `def-gr-causal-curves-and-reachability`,
  `lem-gr-causal-curve-calculus`,
  `def-gr-causal-conditions-and-global-hyperbolicity`,
  `lem-gr-temporal-functions-and-time-functions`; "Cauchy definitions" =
  `def-gr-spacelike-hypersurfaces-and-cauchy-sets`,
  `def-gr-spacelike-initial-data-and-constraints`,
  `lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form`,
  `lem-gr-constraint-projections`; "flat countermodels" =
  `def-gr-flat-minkowski-model-and-inertial-charts`,
  `lem-gr-flat-inertial-cone-criterion-and-sums`,
  `lem-gr-flat-time-monotonicity-and-lipschitz-graphs`,
  `thm-gr-minkowski-cauchy-and-global-hyperbolicity`,
  `lem-gr-quotient-by-isometric-free-proper-action`,
  `thm-gr-flat-cylinder-closed-timelike-and-no-cauchy-set`,
  `thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice` and the six B items;
  "Raychaudhuri/focusing" = `def-gr-geodesic-congruence-and-kinematics`,
  `lem-gr-kinematic-decomposition-identities`,
  `lem-gr-contracted-commutator-identity`,
  `thm-gr-timelike-raychaudhuri-and-local-focusing`,
  `ex-gr-radial-focusing-in-flat-minkowski`. Supporting local items:
  `lem-gr-maximal-geodesics-and-extension`,
  `lem-gr-constant-component-chart-flatness`.

## Dependency levels (in-run dependencies only)

Computed mechanically from the run manifests and stored in both manifest and
item frontmatter. A page: `lem-gr-quotient-by-isometric-free-proper-action` 2,
`def-gr-causal-curves-and-reachability` 3,
`def-gr-flat-minkowski-model-and-inertial-charts` 3,
`lem-gr-causal-curve-calculus` 4,
`def-gr-causal-conditions-and-global-hyperbolicity` 4,
`lem-gr-flat-inertial-cone-criterion-and-sums` 4,
`lem-gr-temporal-functions-and-time-functions` 5,
`def-gr-spacelike-hypersurfaces-and-cauchy-sets` 5,
`def-gr-spacelike-initial-data-and-constraints` 7,
`def-gr-geodesic-congruence-and-kinematics` 7,
`lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form` 8,
`lem-gr-kinematic-decomposition-identities` 8,
`lem-gr-maximal-geodesics-and-extension` 8,
`lem-gr-constraint-projections` 9,
`lem-gr-flat-time-monotonicity-and-lipschitz-graphs` 9,
`lem-gr-constant-component-chart-flatness` 10,
`thm-gr-minkowski-cauchy-and-global-hyperbolicity` 10,
`lem-gr-contracted-commutator-identity` 11,
`thm-gr-flat-cylinder-closed-timelike-and-no-cauchy-set` 11,
`thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice` 11,
`thm-gr-timelike-raychaudhuri-and-local-focusing` 12,
`rem-gr-causal-and-initial-value-scope` 13. B page:
`ex-gr-minkowski-level-sets-and-causal-double-cones` 11,
`cex-gr-spacelike-hypersurface-need-not-be-cauchy` 11,
`cex-gr-achronal-set-need-not-be-acausal` 11,
`ex-gr-flat-slab-vertical-line-proper-time` 12,
`cex-gr-flat-cylinder-has-a-closed-timelike-curve` 12,
`ex-gr-radial-focusing-in-flat-minkowski` 13. Maximum in-run level 13.
Only the two new items required new labels (3 and 4); every pre-existing
batch-75 label was reproduced unchanged by the mechanical recomputation, and
no item outside batch 75 changed level. `item-dependency-levels.mjs check
--run …` reports no line naming a batch-75 item; its 50 errors are the empty
scaffold inventories of unauthored batches.

## Design vs plan-spec conflicts (recorded as required)

1. The design reservation `GR11` (research/plan-general-relativity-track.md,
   section "Causal And Initial Value Boundaries") lists `requires` GR03, GR04,
   GR05, while `research/plan-spec.json` for page 253 records only
   `gr-einstein-and-matter`. The plan controls this run. The manifest and
   library carrier therefore declare `gr-einstein-and-matter` plus the four
   published root-mathematics pages actually used as reading-order roots
   (`absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus`,
   `bounded-variation-and-riemann-stieltjes`, `compactness`,
   `lie-subgroups-actions-and-homogeneous-spaces`); the batch-65/66/67/68/69
   item suppliers are reached through the declared closure, and
   `validate-plan … --run` raises no `undeclared-prereq` for page 253.
2. The scaffold explicitly reserved `sr-causality-and-signals` in the page
   `requires`. After the local restatement recorded below, no batch-75 item
   depends on any item of that page; the entry was removed from the manifest
   and the library carrier. `validate-plan` still passes page 253, whose
   closure reaches the owner-authorized draft SR context through
   `gr-einstein-and-matter`.
3. The binding owner direction
   (`physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`) authorizes
   exactly six external draft SR items as prerequisite context. All six remain
   directly consumed by batch-75 items: `def-causal-classification-of-lorentz-vectors`
   (14 consumers), `def-time-orientation-and-future-causal-sets` (10),
   `def-lorentz-form-and-inertia` (2), `lem-lorentz-form-has-orthonormal-basis`
   (2), `def-lorentz-orthogonality-and-orthogonal-complement` (2),
   `lem-timelike-cone-has-two-convex-components` (1). Their draft status and
   the owner exception are carried in every consuming fact.

## The external-draft authorization problem and the local restatement

The first authoring pass built the flat-model items on three draft SR items
that are **not** in the owner direction's `external_draft_context` allow-list:
`def-sr-affine-minkowski-model`, `def-inertial-frame-and-inertial-chart` and
`lem-sr-future-causal-sums-and-inertial-coordinate-criterion` (all homed on
`sr-spacetime-primitives`/`sr-causality-and-signals`, outside this run's
subject inventory). Ten batch-75 items depended on them, so the batch audit
reported 103 unresolved-dependency rows (22 run-wide in the repair session's
count, all batch-75). The scaffold audit direction
(`research/scaffold-audit-2026-10-11/general-relativity/audit-report.md`,
`supplier-map.json`) is that GR restates the needed flat facts locally rather
than depending on the broad SR reservations.

Repair: the flat model is now fixed locally in two new items.

- `def-gr-flat-minkowski-model-and-inertial-charts` (definition, level 3)
  defines $M=\mathbb R^4$ with the standard smooth structure, the constant
  Lorentz form $\eta=\operatorname{diag}(-1,1,1,1)$, the time orientation
  $N=\partial_0$, events, displacements, straight paths, translations, global
  inertial charts and frames, and the coordinate cone sets with clauses
  (a)–(g); its cone identification is discharged by the local lemma.
- `lem-gr-flat-inertial-cone-criterion-and-sums` (lemma, level 4, seven-step
  direct proof) proves in every inertial chart: the criterion for future/past
  timelike, null and causal vectors (a), the cone identities
  $C_p^+=\{v^0>|v_s|\}$ and $\operatorname{cl}(C_p^+)=\{v^0\ge|v_s|\}$ (b), and
  closure of the future cone under sums with the strict timelike case (c). It
  uses only the general Lorentz-vector-space cone structure
  (`lem-timelike-cone-has-two-convex-components`) and the timelike-field
  classification already in this run, both authorized.

All ten consumers were rewritten: deps and dependency_roles now cite the two
local items; their statements, facts and proof steps say "$(M,\eta,N)$ the
flat model of [[def-gr-flat-minkowski-model-and-inertial-charts]] with global
inertial chart $x=(x^0,z)$", read displacements in the vector space
$M=\mathbb R^4$ through the global chart, and cite lemma clauses (a)/(b)/(c)
for the criteria, cone identities and sums. In the slab and cylinder items the
letter $M$ names the constructed manifold (slab, quotient) and the flat model
is written $A:=\mathbb R^4$. A grep for the three removed ids over all 28 item
files returns nothing; the run-wide `audit-manifest` reports 0 defects and 0
`unresolved` rows (batch-75 rows classify as 87 cross-batch, 31
external-draft-context, 96 published-backward). A single-file
`audit-manifest <batch-75 manifest>` invocation cannot resolve other batches'
items and prints spurious `unresolved` rows; the run-wide invocation is the
meaningful one.

## Source work

- Two independent treatments per A page are recorded in the coverage file: the
  Minguzzi survey plus Gourgoulhon, Reall, Carroll and Lee (A), and Minguzzi,
  Gourgoulhon and Carroll (B); 8 fetch-verified source records, 37 harvested
  results, 0 coverage errors.
- Minguzzi, *Lorentzian causality theory*, Living Reviews in Relativity 22
  (2019), article 3. Fetch history: six genuine retrieval failures (publisher
  and mirror HTML/PDF shapes), then success at
  `https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609`; the
  successful download is stamped in the coverage file (202 PDF pages,
  2,775,216 bytes, sha256 `0fe164b293c9697d…`), `kind` corrected from `review`
  to `survey`, and the recovery attempts are retained as history.
- Locator corrections (52 corrections across 23 item files): Minguzzi page
  numbers were re-anchored to the verified 202-page PDF (Def 2.16 p. 33,
  Lem 2.17 pp. 33–34, Thm 2.12 pp. 32–33, §1.11 pp. 15–16, §1.12 pp. 17–19,
  Def 2.19 p. 34, Def 2.95 p. 63, §§2.14–2.15 pp. 59–66, §2.11 pp. 45–49,
  §§3.1–3.3 pp. 83–103, Def 3.14 p. 87, Def 3.35 p. 95, §§4.2–4.5
  pp. 111–148, Def 4.117 p. 146, Thm 4.119 p. 147, §§6.2–6.3 pp. 161–169,
  Prop 4.18/Def 4.19 p. 113); Carroll to printed pp. 7/25–26/75–76/117/119–127;
  Gourgoulhon §§2.2, 2.3–2.4, 4.1–4.2, 4.4.3; Reall §10.2 p. 119, §10.4
  p. 123, §10.5 pp. 123–124, §§4.2–4.6 pp. 41–49; Lee 726 pp., Prop 21.4
  p. 543, Thm 21.10 pp. 544–546.
- `source-fetch-check` (check mode): 8/8 fetch-verified, 8/8 resolved, 0
  documented drops. No `source_resolution` drop was needed in this batch.

## Deferrals and scope limits

- Deferred with destinations recorded in the coverage file: Minguzzi
  §§6.5–6.6.1 printed pp. 171–179 (global focusing, completeness and existence
  statements) and Gourgoulhon §§2.4–2.5 printed pp. 28–39 (Gauss–Codazzi–Ricci);
  Reall §10.5 printed pp. 123–124 (the initial value problem, domain of
  dependence, maximal Cauchy development).
- Out of scope with a specific reason: Minguzzi §§6.6.2–6.6.4 printed
  pp. 179–192 (the Penrose, Hawking–Penrose and Hawking singularity
  theorems) — this pair proves local focusing and flat countermodels only.
- `rem-gr-causal-and-initial-value-scope` records that the equivalences of
  global hyperbolicity with the Cauchy-surface and smooth-splitting
  formulations, the existence/uniqueness theory for the Einstein-matter
  initial value problem, the maximal globally hyperbolic development and the
  singularity theorems are deferred to the later pages of the track; the
  counterexamples here are conditional statements inside the flat models and
  carry no claim about nature.

## Proof contracts

`research/physics-cm-qm-gr-79-2026-10-11-batch-75.proof-contracts.json`:
scope 21 proof-bearing items (the 22 A items minus the definition-only
`def-gr-flat-minkowski-model-and-inertial-charts` and the remark, plus the B
items). The two new items received a full new contract
(`lem-gr-flat-inertial-cone-criterion-and-sums`: 7 derivations, 8 boundary
rows, 8 exact citations; the definition is a nonproof item). Because the ten
consumers' statements and facts changed, their contract citations and
derivation rows were regenerated from the final carriers with exact source
excerpts and step-level `uses`; two weak auto-picked quotes for
`thm-gr-minkowski-cauchy-and-global-hyperbolicity` were replaced by the
straight-path and positive-definite-restriction sentences of the local
definition. Two pre-existing boundary rows of
`lem-gr-kinematic-decomposition-identities` (`iff-forward`, `iff-reverse`)
wrongly said "not applicable" for an item whose part (d) states vanishing
biconditionals; both are now `checked` with step 5.1 evidence.
`proof-contract.mjs --strict`: 0 errors, 0 warnings, 21/21. Scoped replication
of `proof-contract-coverage` (the run-wide tool aborts on the unrelated empty
page `cm13-symplectic-geometry-and-canonical-methods`): 28 items checked, 21
proof-bearing, 21/21 covered, 0 errors. `boundary-audit
--fail-on-contradicted`: no contradicted dispositions, no template reuse
clusters.

## Checkpoint: files owned

Items (28), the two library pages, the run manifest, the coverage, contract
and cross-batch-dependency inputs and this note. No published content, shared
plan, engine state or verdict file was edited. Imported mathematics is
read-only and was never edited. Mathematical items depend only on mathematical
items: no `domain: mathematics` batch-75 item has a `domain: physics` item in
`deps` or `justified_by`. B-page items are leaves and are not dependency
targets of other pages. Choice principles enter only where the cited root
theorems carry them (the absolutely continuous FTC's countable and dependent
choice in `lem-gr-flat-time-monotonicity-and-lipschitz-graphs`, inherited
unchanged); no batch-75 item reaches `deferred-set-theory-beyond-choice`
through any proof or prerequisite path.

## Cross-batch dependency evidence

- `research/physics-cm-qm-gr-79-2026-10-11-batch-75.cross-batch-dependencies.json`
  has 88 rows: 87 `item` rows (every declared `deps`/`justified_by` edge from a
  batch-75 item into a batch-65/66/67/68/69 item, each `verified`) plus 1
  `page` row (`gr-causal-and-initial-value-boundaries` → `gr-einstein-and-matter`,
  batch 69). The same-batch B→A `requires` edge is deliberately not in this
  input. Six rows were added in the repair: five for the edges of the two new
  items into batch 65 (`def-gr-smooth-covariant-two-tensor-field`,
  `def-gr-smooth-lorentzian-objects`,
  `lem-gr-future-causal-classification-by-a-timelike-field`) and one for the
  new `ex-gr-radial-focusing-in-flat-minkowski` →
  `lem-gr-future-causal-classification-by-a-timelike-field` edge.
- `frontier-dependency-ledger.mjs refresh --run …`: "refreshed and
  deduplicated". Batch-75 is a reviewed batch; its 88 consumer edges have 0
  open rows and the batch input contributes 0 orphaned reviews. The ledger
  currently records exactly one edge whose supplier is batch-75 content:
  page `gr-gr13-convex-normal-neighborhoods` (batch 77, still an empty
  scaffold) requires our A page `gr-causal-and-initial-value-boundaries`, with
  no review row yet — that review obligation belongs to batch 77. The
  batch-71 consumer row into `lem-gr-quotient-by-isometric-free-proper-action`
  reported by the repair handoff no longer exists: the current
  `cex-gr-flat-quotient-is-not-globally-minkowski` deps cite the root theorem
  `thm-free-proper-action-quotient-manifold`, the smooth inverse function
  theorem and curvature items, not this batch.

## Checks run (exact results)

- precheck (28 batch items): 21 checked, 0 failing — all clean.
- rendercheck (28 items + 2 library pages): OK — 30 files, no wikilink inside
  math, no nested or unbalanced delimiters, no multiline display block, every
  math span parses under KaTeX, every frontmatter block parses.
- proof-layout (28 items): 28 items, 101 steps, 0 defects.
- proof-contract `--strict`: 0 error(s), 0 warning(s), 21/21. Scoped
  proof-contract coverage: 28 checked, 21/21 supplied arguments covered. The
  run-wide `proof-contract-coverage --run …` aborts before checking with
  "Empty or invalid frontier page inventory
  cm13-symplectic-geometry-and-canonical-methods" (unrelated empty page).
- manifest-deps (batch-75 manifest): 28 item(s), 0 normalized, 0 error(s);
  (all 79 run manifests): 1058 item(s), 0 error(s).
- content-policy (batch-75 manifest): 28 scoped item(s), 0 errors, 0 warnings.
- coverage-checklist (batch-75 coverage, paired manifest): 2 page(s), 37
  harvested result(s), 0 error(s), 0 warning(s). source-fetch-check (check
  mode): 8/8 fetch-verified; 8/8 resolved, 0 documented drops.
- item-dependency-levels check `--run`: no line names a batch-75 item; the 50
  errors are empty scaffold inventories of unauthored batches.
- validate-plan (plan-spec, `--run`): page 253 shows 22 items; no error row
  names a batch-75 page or item. The remaining run errors are four
  `undeclared-prereq` rows of other batches' qm pages
  (`qm-math-controlled-dynamics`, `qm-math-fock-and-equilibrium`,
  `qm-massive-particle-kinematics-examples`), plus 77 `redundant-prereq`
  warnings elsewhere.
- audit-manifest over the run's 79 manifests: 12,895 relationship(s) over
  1,058 item(s) in 79 batch(es); 0 defect(s). Batch-75 rows: 87 cross-batch,
  31 external-draft-context, 96 published-backward, 0 `unresolved`. (A
  single-batch invocation prints spurious unresolved rows for other batches'
  items by construction.)
- depcheck (run-wide, 3,611 finding lines): 0 rows name a batch-75 item.
- fwdcheck (run-wide): 0 batch-75 rows (`forward-undeclared` rows are other
  scopes). extcheck: "OK — every recorded-not-proved statement is a cited
  remark with no proof, and every consequence is marked."
- `physics-check.mjs --run … --plan research/plan-spec.json`: 81 error(s) over
  1,058 items, none naming a batch-75 item (all in qm/nrqm scopes).
- manifest-integrity `--run`: "158 page(s) owed, 158 in the manifests — no
  scope drift" (both batch-75 pages still present in the run).
- frontier-dependency-ledger refresh: "refreshed and deduplicated" (see
  above).

## Readiness records

All 28 items are recorded `ready` with
`step1-decisions.mjs record --run physics-cm-qm-gr-79-2026-10-11 --item ID
--decision ready --dependencies <the item's declared deps> --reason <evidence
summary>` after the final carrier edits (dependent levels, manifest and
contracts were written first), so every record's hash binds the final item
text and the examined dependency list. `step1-decisions.mjs check --run`
reports no batch-75 work row (the 44 remaining run-wide work rows are other
batches' missing records). No record was created with `--owner`, and no
escalation record exists in this batch.
