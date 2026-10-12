# Batch 71 notes — `gr-flat-and-newtonian-bridges` / `gr-flat-and-newtonian-bridges-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-71, covers 71.
Step 1 complete initial authoring only; neither a worker exit nor a readiness
record is independent mathematical approval (Step 2/3 review follows). The A
page is mixed-domain: fifteen items are mathematics (`domain: mathematics`)
and three are physics — the adopted Newtonian comparison model and its
identification dictionary and the two model-conditional theorems. The B page
holds seven mathematical leaf items: five examples and two counterexamples.
No item reports a measurement; no experiment, no empirical premise and no
empirical uncertainty occurs anywhere in the batch, and both physics theorems
state explicitly that they carry none.

## Scope built

- A page `gr-flat-and-newtonian-bridges` (order 245, category
  `general-relativity`, `library: physics`), 18 locally authored items: 4
  definitions, 5 lemmas, 5 theorems, 1 definition with physics domain, 2
  physics-theorems and 2 remarks (1 mathematical, 1 physical).
- B page `gr-flat-and-newtonian-bridges-examples` (order 246), 7 leaf items:
  5 examples and 2 counterexamples, each with a numbered verification or
  refutation.
- Library carriers `library/general-relativity/gr-flat-and-newtonian-bridges.md`
  and `…-examples.md`; `_category.md` is unchanged from batch 65.
- Manifest `research/physics-cm-qm-gr-79-2026-10-11-batch-71.pages.json`:
  page orders, kinds, categories and `library` fields are unchanged from the
  run scaffold; the manifest edits are the item inventories, the item metadata
  and the `requires` reconciliation recorded below. Statement, deps,
  dependency_roles, justified_by, forward_refs, provenance, source and level
  fields were regenerated from the final carriers with a script.
- Design budget (40 items) and the 100-item cap are respected (18 + 7).
- Design inventory coverage (research/plan-general-relativity-track.md L144):
  "pthm Minkowski vacuum model with Lambda=0" =
  `pthm-gr-minkowski-vacuum-model`; "rem local flatness/global topology
  caveat" = `rem-gr-local-flatness-versus-global-flatness` and
  `cex-gr-flat-quotient-is-not-globally-minkowski`; "M08/M17 controlled
  geodesic/Poisson bridge" = `def-gr-stationary-weak-field-data`,
  `lem-gr-weak-field-admissibility-and-inverse-bounds`,
  `lem-gr-weak-field-christoffel-bounds`,
  `thm-gr-weak-field-einstein-stress-hierarchy`,
  `lem-gr-weak-field-geodesic-acceleration`,
  `thm-gr-weak-field-scaled-trajectory-limit`; "explicit variable/coupling
  identification" = `def-gr-newtonian-comparison-model-and-identification` and
  `pthm-gr-uniform-weak-slow-correspondence`; "first-use flat
  linearization/gauge mathematics before weak-field calculation" =
  `def-gr-minkowski-model-and-inertial-chart`,
  `lem-gr-flat-model-connection-curvature-and-geodesics`,
  `def-gr-flat-linearized-perturbation`,
  `thm-gr-flat-linearized-curvature-and-gauge`,
  `thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge`.

## Dependency levels (computed mechanically)

`node tools/physics-support/item-dependency-levels.mjs check --run` computes
these in-run levels (manifest and item frontmatter agree): `def-gr-minkowski-model-and-inertial-chart` 4,
`lem-gr-flat-model-connection-curvature-and-geodesics` 10,
`def-gr-flat-linearized-perturbation` 7,
`thm-gr-flat-linearized-curvature-and-gauge` 10,
`thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge` 11,
`def-gr-stationary-weak-field-data` 7,
`lem-gr-weak-field-admissibility-and-inverse-bounds` 8,
`lem-gr-weak-field-christoffel-bounds` 9,
`thm-gr-weak-field-einstein-stress-hierarchy` 11,
`lem-gr-weak-field-geodesic-acceleration` 10,
`thm-gr-weak-field-scaled-trajectory-limit` 11,
`lem-gr-observer-relative-velocity-expansions` 7,
`thm-gr-vanishing-curvature-implies-locally-minkowski` 13,
`def-gr-newtonian-comparison-model-and-identification` 8,
`pthm-gr-minkowski-vacuum-model` 13,
`pthm-gr-uniform-weak-slow-correspondence` 12,
`rem-gr-local-flatness-versus-global-flatness` 14,
`rem-gr-flat-bridge-scope-and-limits` 14,
`ex-gr-linearized-curvature-of-the-diagonal-perturbation` 11,
`ex-gr-minkowski-free-fall-and-clock-identities` 11,
`ex-gr-observer-velocity-expansion-numeric-check` 8,
`ex-gr-weak-field-poisson-quadratic-potential` 12,
`ex-gr-scaled-newtonian-harmonic-trajectory` 12,
`cex-gr-first-order-vacuum-is-not-exact-vacuum` 11,
`cex-gr-flat-quotient-is-not-globally-minkowski` 14.
`item-dependency-levels.mjs check --run` reports errors only for other
batches' "empty scaffold inventory" (62 at first check, 52 at the final
re-run — the count moves with other batches' authoring); no line names a
batch-71 item. Items were authored in ascending level order; every supplier of this
batch is either an item of batches 65–69 (read at statement level and
recorded ready in their own batches) or a published/imported mathematical
supplier.

## Design vs plan-spec conflicts (recorded as required)

- The design section (research/plan-general-relativity-track.md L144, "Flat
  And Newtonian Bridges") and `research/plan-spec.json` declare the single
  prerequisite `gr-einstein-and-matter`. The authored closure additionally
  consumes five mathematical pages that are NOT in the transitive closure of
  that prerequisite — `compactness` (compact spaces/subsets and continuous
  images), `darboux-lhopital-and-taylor` (Taylor–Lagrange remainders),
  `the-divergence-theorem-and-classical-stokes` (the Laplacian definition),
  `volumes-of-elementary-solids-and-solids-of-revolution` and
  `wave-equation-representation-formulas` (polar coordinates, spherical
  measures and the wave-equation suppliers) — and, on the B page, the two
  lie-theory pages `lie-subgroups-actions-and-homogeneous-spaces` and
  `group-actions-and-cayleys-theorem`. Following `validate-plan`'s own
  instruction and the batch-65/67/68/69 precedent, the A/B page manifests and
  library requires now list these; no plan-spec, design or shared file was
  edited. The five GR pages actually consumed (`gr-framework-and-geometry`,
  `gr-tensors-and-observers`, `gr-connections-and-free-fall`,
  `gr-curvature-and-tides`, `gr-einstein-and-matter`) are all inside the
  declared closure and were not added again.
- CONFLICT (recorded): the definition `def-lie-group` is homed on the
  lie-theory page `lie-groups-invariant-fields-and-the-exponential-map`,
  which is not declared in `plan-spec.json`; naming it in a `requires` list
  would fail `requires-resolve`, while keeping it as a dependency would fail
  `undeclared-prereq`. As in batch 69's undeclared-page case, the
  counterexample now **restates** the convention inline ("a discrete group
  with the discrete (zero-dimensional) smooth structure is a Lie group — the
  convention of the library definition `def-lie-group` (Lie-theory track),
  restated here") and keeps the two declared lie-theory suppliers as formal
  dependencies. A repair can restore the formal dependency if the owner
  declares the page.
- ESCALATION (owner): `cex-gr-flat-quotient-is-not-globally-minkowski`
  depends on `lem-gr-quotient-by-isometric-free-proper-action`, which is
  homed on the later page `gr-causal-and-initial-value-boundaries` (order
  253) and belongs to batch 75 of this run. The dependency is genuine (the
  counterexample needs the quotient manifold and its descended metric) and
  load-bearing; the item therefore declares it in `forward_refs` (permitted
  for a counterexample) and not in `deps`, and the consumer-batch ledger
  records the edge with status `open` for the owner/engine review
  (`frontier-dependency-ledger.mjs refresh --run` shows supplier batch 75).
  The supplier's item text was read in full on disk (statement, facts, proof
  and remarks all present and mathematically checked) but its batch has not
  yet recorded readiness, so its final bytes may still change; if the owner
  prefers, the counterexample can be re-based on a locally authored quotient
  construction in a repair, which would require the Lee-style quotient
  theorem as a local prerequisite.
- The plan-spec page entries carry empty item inventories (the engine fills
  them at the join), so `planHomes` is empty for these pages and
  `content-policy --manifest-only` reports `batch-item-already-exists` for
  every freshly authored id; the post-authoring gate is the full
  `content-policy` mode, which reports 0 errors / 0 warnings.

## Repairs made during the final read-through

- `ex-gr-linearized-curvature-of-the-diagonal-perturbation` was left
  half-rewritten by the interrupted session with two false values
  (`Ric^(1)_ij = 0` and a mid-proof `= 5 delta_ij` scratch computation) and a
  wrong sign in the first-order connection. The item was rewritten: the
  family is verified admissible with epsilon_1 = 1/8 (`|E| < 1/8` by the
  Lorentzian-stability lemma), and the values `Gamma^(1)i_00 = x^i`,
  `Gamma^(1)i_jk = -delta^i_k x_j - delta^i_j x_k + delta_jk x^i`,
  `Ric^(1)_00 = 3`, `Ric^(1)_ij = 3 delta_ij`, `S^(1) = 6`,
  `G^(1)_00 = 6 = 2 Delta phi`, `G^(1)_0i = G^(1)_ij = 0` are derived twice
  (directly from clauses (a)-(c) and through the trace-reversed closed
  formula), with the arithmetic `G^(1) = Ric^(1) - (1/2) eta S^(1)` checked.
  The upper-time-index components were repaired further in the second pass
  below.

## Second-pass repairs (independent recomputation)

A final independent recomputation of every explicit component and boundary
claim in the batch (symbolic algebra with sympy plus direct re-derivation;
Carroll/Reall/Tong locators re-fetched for the gauge convention) found and
repaired four further defects. Three touch displayed text (the example's
clause 1, the Duhamel theorem's clause (b) and the definition's clause (d)
gloss); the Christoffel lemma's displayed Statement is unchanged. No
consumer's conclusion is affected (impact re-read below).

- `ex-gr-linearized-curvature-of-the-diagonal-perturbation`: clause 1's
  all-index claim `Gamma^(1)0_bc = 0` was false. The exact expansion of
  `g(lambda) = eta + lambda h` gives `Gamma^(1)0_0i = Gamma^(1)0_i0 = x_i`
  (the dropped terms are `partial_b h_c0 + partial_c h_b0`, which do not
  vanish for mixed indices), confirmed twice symbolically (formula
  insertion and a brute-force exact Christoffel expansion of `eta+lambda h`).
  Clause 1 and step 1.2 now carry the complete correct list, including
  `Gamma^(1)i_0j = Gamma^(1)i_j0 = 0`, `Gamma^(1)0_00 = Gamma^(1)0_ij = 0`
  and `Gamma^(1)0_0i = Gamma^(1)0_i0 = x_i`; the Ric/S/G values of
  clauses 2-3 were re-verified unchanged against the same exact expansion.
- `lem-gr-weak-field-christoffel-bounds`: step 2.2 derived the `Gamma^0_0j`
  bound from the false intermediate equality
  `Gamma^0_0j = -(1/2) g^(0a) partial_a g_(0j)`, dropping the leading term
  `(1/2) g^(0a) partial_j g_(a0) = (1/2) g^00 partial_j g_00 = eps
  partial_j phi + O(eps^2/L)`, and the associated remark claimed false
  sharper internal orders. `[L1]` now carries the supplier's sharp inverse
  expansion `g^ab = eta^ab - eta^(ac) E_(cd) eta^(db) + R^ab`,
  `|R^ab| <= C1 eps^2` (already cited as the admissibility lemma's clause
  (b)), and step 2.2 splits each upper-0 component correctly
  (`|g^0i| <= C' eps^(3/2)`, `|g^00| <= 2`); the displayed bounds are
  unchanged and remain true, and the remark now records the attained orders
  (`Gamma^0_00 = O(eps^(5/2)/L)`, `Gamma^0_0j` dominated by the
  `g^00 partial_j g_00` term at `eps/L`, `Gamma^0_jk` dominated by the
  `g^00 partial_j r_0k` term at `eps^(3/2)/L`). The false sharper orders
  were removed, not replaced by weaker claims on the displayed bounds.
- `thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge`: clause (b)'s final
  claim that every partial derivative of the Duhamel solution is bounded on
  `R^3 x [a,b]` was false for general smooth sources (for `F = (x^1)^3`,
  `partial_1 u` grows quadratically in `x^1` at fixed `t != t_0`). Clause
  (b) and step 5.1 now state and prove boundedness on `K x [a,b]` for every
  compact `K` in `R^3`, which is what the differentiation-under-the-integral
  arguments and clause (c) use; the wave equation, zero data, smoothness and
  the harmonic-gauge construction are unchanged. This is the only repair
  that weakens a displayed claim.
- `def-gr-flat-linearized-perturbation`: clause (d)'s gloss identified
  `h_ab - partial_a xi_b - partial_b xi_a` with the first-order perturbation
  of the pullback family `Phi_lambda^* g(lambda)` along the flow of `xi`,
  but the pullback along that flow has first-order coefficient
  `h + 2 partial_(a xi_b)` (Reall, *Part III GR*, eq. (7.14), where the
  gauge freedom is `h -> h + L_xi eta`; Tong eq. (5.10) uses the same plus
  sign). The displayed formula has the opposite sign, so the gloss now reads
  "the first-order perturbation of the pullback family
  `Phi_{-lambda}^* g(lambda)` along the local flows `Phi_s` of
  `xi^a = eta^(ab) xi_b`, that is, the perturbation produced by the
  infinitesimal chart change `x'^a = x^a + lambda xi^a` and re-read on the
  fixed inertial chart". The formula, the harmonic-gauge condition and the
  theorems about them are unchanged and were verified symbolically with
  generic polynomial `h`, `xi` (Ric, S, G gauge invariance; the
  trace-reversal and divergence identities of the gauge theorem).

Impact and cascade of the second pass: the manifest was regenerated from the
final carriers (`/tmp/gen71.mjs`; no dependency level changed), the
proof-contract citations/derivations were regenerated from the final text for
all 19 non-remark entries (2 remarks skipped by design) and pass `--strict`
0/0 with no contradicted boundary row, and all 13 readiness records whose
transitive dependency closure contains an edited item were re-made with
repair evidence (4 directly edited items + 9 transitive consumers:
`thm-gr-flat-linearized-curvature-and-gauge`,
`thm-gr-weak-field-einstein-stress-hierarchy`,
`lem-gr-weak-field-geodesic-acceleration`,
`thm-gr-weak-field-scaled-trajectory-limit`,
`pthm-gr-uniform-weak-slow-correspondence`,
`rem-gr-flat-bridge-scope-and-limits`,
`ex-gr-weak-field-poisson-quadratic-potential`,
`ex-gr-scaled-newtonian-harmonic-trajectory`,
`cex-gr-first-order-vacuum-is-not-exact-vacuum`). Consumer impact was
re-read: the transitive consumers cite only unchanged clauses (family
definition, first-order coefficient definitions, harmonic-gauge condition,
the displayed Christoffel bounds) or, for the Duhamel theorem, nothing
affected by the compact-set restriction, so no consumer Statement or proof
step changed. The escalation for
`cex-gr-flat-quotient-is-not-globally-minkowski` is untouched.
- `lem-gr-weak-field-admissibility-and-inverse-bounds` and
  `thm-gr-weak-field-scaled-trajectory-limit` carried hard-wrapped steps
  split by display formulas; the steps were joined to single logical lines
  and renumbered to the canonical depth-based form
  (`precheck` PASS, `proof-layout` 0 defects).
- Dep-name repair: three A items and the new counterexample cited
  `def-compact-subset-of-a-topological-space` and
  `cor-continuous-image-of-a-compact-is-compact`, neither of which exists on
  disk; the existing items are `def-compact-space` and
  `thm-compactness-under-continuous-maps`, and the deps were corrected
  everywhere.
- `def-gr-flat-linearized-perturbation` linked
  `thm-gr-flat-linearized-curvature-and-gauge` forward from its own
  Definition (a consumer of the definition): `depcheck` reported
  `cited-not-in-deps`. The link was replaced by a prose pointer to the
  theorem on the same page, keeping the spine strictly ordered.
- `lem-gr-weak-field-christoffel-bounds` declared a fact `[L3]` that no
  numbered step cited; steps 2.1 and 2.2 now cite it where the algebraic
  derivative rules are actually used (the proof-contract gate requires every
  declared fact to be used).
- Missing dependencies added after the `citation-undeclared-dependency`
  gate: `def-rational-power` (free-fall and clock example) and
  `lem-gr-flat-model-connection-curvature-and-geodesics` (quotient
  counterexample); an unused wikilink
  (`def-lorentz-orthogonality-and-orthogonal-complement`) was dropped from
  the Poisson example.
- `rem-gr-flat-bridge-scope-and-limits` assigned `physical-result` to three
  mathematical suppliers (the hierarchy, acceleration and scaled-trajectory
  theorems); `physics-check` reported `role-supplier` for all three and the
  roles were corrected to `mathematical-premise`, with the readiness record
  re-made afterwards.
- `cex-gr-first-order-vacuum-is-not-exact-vacuum`: the exact
  `Ric_00 = -2 lambda^2/((1+2 lambda x^1)(1-2 lambda x^1)^2)` and the
  closed form for a general static potential,
  `Ric_00 = ((1-4 Phi^2) Delta Phi - 2|grad Phi|^2)/((1+2 Phi)(1-2 Phi)^2)`,
  were verified by symbolic computation before authoring; the Christoffel
  symbols listed in step 1.3 were checked against the same computation
  (all agree).

## Sources

- Five broad treatments, all fetch-verified for this batch with
  `source-fetch-check --coverage … --stamp` ("7/7 source(s) fetch-verified
  (7 newly stamped)"): Carroll, *Lecture Notes on General Relativity*,
  arXiv:gr-qc/9712019; Reall, *Part III General Relativity*, October 12,
  2022 revision; Tong, *General Relativity*, Michaelmas 2019; Ivrii,
  *Partial Differential Equations* (Toronto, 2018); Folland, *Real
  Analysis*, 2nd ed. The first three are full lecture-note treatments and
  supply the two-independent-treatment requirement.
- `research/physics-cm-qm-gr-79-2026-10-11-batch-71.coverage.json` harvests
  37 named results with dispositions (21 included, 14 inline, 1 deferred,
  1 out-of-scope). `coverage-checklist.mjs --require-destination`: 2 pages,
  37 harvested results, 0 errors, 0 warnings. The deferred result is Tong
  §5.1.1 p. 210's isotropic-versus-areal warning, whose comparison is built
  on `gr-spherical-vacuum-model` (order 247); the out-of-scope result is
  Carroll's Misner space (a tilted-cone identification, not the rolled-up
  flat model and not built on this page). No source drop or escalation
  record was needed for a missing source.
- Locator discipline: the Carroll locators used in the two counterexamples
  (Ch. 2 p. 31 torus; Ch. 4 pp. 124-127 Misner space) and the Tong locator
  (section 6.3.2 pp. 272-273, closed timelike curves) were re-checked
  against fresh full-text fetches of the two PDFs during this batch.

## Proof contracts

- `research/physics-cm-qm-gr-79-2026-10-11-batch-71.proof-contracts.json`
  covers 21 entries: the 19 proof-bearing items and the two remarks (empty
  citations/derivations, `routine_steps: []` and eight boundary
  dispositions). The four definitions carry no supplied argument and are
  outside the contract scope, matching batch-65…69.
- Citations and derivations were generated by `regen-contract-entries.mjs`
  from the final on-disk Facts and numbered steps (rerun after the
  second-pass repairs for all 19 non-remark entries, including every entry
  whose citation quotes the edited `def-gr-flat-linearized-perturbation`
  Definition text, so every quote matches the current supplier text);
  boundary rows were authored per item (168 rows, 108 `not_applicable`,
  each with an item-specific reason or step-anchored evidence) and were
  re-audited unchanged after the repairs.
- `proof-contract.mjs … --strict`: 0 error(s), 0 warning(s), 21/21 checked.
  `boundary-audit.mjs … --fail-on-contradicted`: 168 rows, no template
  clusters at or above 3 members, no contradicted dispositions.

## Checkpoint: files owned

Items (25), the two library pages, the run manifest, the coverage, contract
and cross-batch-dependency inputs and this note. No published content, shared
plan, engine state or verdict file was edited. Imported mathematics is
read-only and was never edited. Mathematical items depend only on
mathematical items: no `domain: mathematics` batch-71 item has a
`domain: physics` item in `deps`, `justified_by` or `forward_refs`. B-page
items are leaves and are not dependency targets of other pages except the
intended B→A `requires`. The only choice principle used anywhere in the batch
is the `AC_ω` inherited by `thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge`
from the polar-surface and divergence suppliers (recorded in its statement
and boundary row); no item reaches `deferred-set-theory-beyond-choice`
through any proof or prerequisite path.

## Cross-batch dependency evidence

- `research/physics-cm-qm-gr-79-2026-10-11-batch-71.cross-batch-dependencies.json`
  has 122 rows: 109 `item` rows (every declared `deps` edge from a batch-71
  item into a batch-65…69 item, each `verified` with the consumer's cited
  supplier and proof-step uses) plus 13 `page` rows (the five GR pages, the
  five math pages added to the A page's `requires` and the two lie pages and
  the A page for the B page). One extra `item` row records the load-bearing
  forward reference of `cex-gr-flat-quotient-is-not-globally-minkowski` to
  `lem-gr-quotient-by-isometric-free-proper-action` (supplier batch 75) with
  status `open`.
- `frontier-dependency-ledger.mjs refresh --run …`: "refreshed and
  deduplicated"; batch 71 is in `reviewed_batches`; its edges are merged, the
  forward-reference edge visible with supplier batch 75 and the open review
  of this file's row. The refresh was re-run after the final item bytes: the
  unified ledger `research/physics-cm-qm-gr-79-2026-10-11-cross-batch-dependencies.json`
  now carries 114 batch-71 consumer edges, 113 `verified` and the one `open`
  quotient forward-reference edge. The supplier item
  `lem-gr-quotient-by-isometric-free-proper-action` has since been authored
  on disk by batch 75 (its clauses (a)–(c) were read and match the consumer's
  [L2] restatement), but its Step-1 readiness record still does not exist, so
  the row remains `open` and the consumer record remains `escalated`.

## Checks run (exact results)

The full battery below was re-run on the final bytes after the second-pass
repairs (which also regenerated the manifest and the proof contracts and
re-made 13 readiness records); the numbers are from that post-repair re-run.
Run-wide counts drift as other batches edit concurrently, so only the
batch-71 findings are batch-owned evidence.

- precheck (25 items): 19 checked, 0 failing — all clean (6 nonproof
  items are reported as nonproof structure).
- rendercheck (25 items + 2 library pages): OK — no wikilink inside math, no
  nested or unbalanced delimiters, no multiline display, every math span
  parses under KaTeX, every frontmatter block parses.
- proof-layout (25 items): 25 items, 99 steps, 0 defects.
- manifest-deps (batch-71 manifest): 25 item(s), 0 normalized, 0 errors.
- content-policy (batch-71 manifest, full mode): 25 scoped item(s), 0
  errors, 0 warnings. (`--manifest-only` is the pre-authoring gate and
  reports the expected `batch-item-already-exists` for already-minted ids,
  because the plan-spec page inventories are empty; see the conflict note.)
- validate-plan (plan-spec, `--run`): no error and no warning names a
  batch-71 page; the remaining run errors belong to other batches
  (`qm-math-*`, `gr-homogeneous-cosmology*`).
- item-dependency-levels check `--run`: no line names a batch-71 item; the
  52 errors are empty scaffold inventories of unauthored batches.
- depcheck (whole corpus): the error finding `cited-not-in-deps` for
  `def-gr-flat-linearized-perturbation` was repaired. One warning remains
  naming a batch-71 item: `cited-not-in-deps` for
  `cex-gr-flat-quotient-is-not-globally-minkowski`, which cites its declared
  forward reference `lem-gr-quotient-by-isometric-free-proper-action` in the
  Facts. depcheck's own comment says a `forward_refs` pointer is deliberate
  and is owned by fwdcheck ("Reporting it here too would just be noise"), but
  its `cited` check does not include `forward_refs` in the declared set; the
  warning is therefore the expected shape of a load-bearing forward reference
  on a consequence item, and fwdcheck reports no finding for the item.
- fwdcheck: no `forward-undeclared`, `forward-dangling`,
  `forward-not-later`, `forward-in-deps`, `forward-on-spine`,
  `forward-unused` or `forward-cycle` finding names a batch-71 item after
  the forward-reference declaration; the run-wide output has unrelated
  findings from other batches.
- extcheck (scoped to the batch; the tool still loads the whole corpus):
  "28168 items, 0 recorded-not-proved, 0 resting on them".
- coverage-checklist `--require-destination`: 2 pages, 37 harvested results,
  0 errors, 0 warnings. source-fetch-check `--stamp`: 7/7 fetch-verified.
- proof-contract `--strict`: 0 error(s), 0 warning(s), 21/21. boundary-audit
  `--fail-on-contradicted`: no template clusters, no contradicted rows.
- frontier-dependency-ledger refresh: see above.
- physics-check `--run … --plan research/plan-spec.json`: ran to completion
  with "physics-content: 92 error(s), 1041 items checked"; none of the 92
  findings names a batch-71 item (they are other batches' `role-supplier`,
  `dependency-role-extra`, `mathematical-role` and `nonproof-derivation`
  findings, none in general-relativity pages owned here). The
  "mathematics import changed: items/def-integer-power.md" stop recorded in
  the batch-69 notes did not reproduce at this time; if it reappears it
  blocks the run-wide gate as recorded there, not this batch.
- audit-manifest over the run's 79 manifests: 12654 relationships over 1041
  items, 22 defects, none naming a batch-71 item (all 22 name batch-75
  unresolved dependencies).

## Readiness records

Twenty-four items are recorded `ready` with `step1-decisions.mjs record
--run physics-cm-qm-gr-79-2026-10-11 --item ID --decision ready
--dependencies <the item's declared deps and forward_refs> --reason
<evidence summary>` after the final carrier edits, so every record's hash
binds the final item text and the examined dependency list.
`cex-gr-flat-quotient-is-not-globally-minkowski` is recorded `escalated`
with the exact blocker: its load-bearing forward reference
`lem-gr-quotient-by-isometric-free-proper-action` is homed on the later page
`gr-causal-and-initial-value-boundaries` (order 253, batch 75), whose
readiness is not recorded, so its final bytes cannot be confirmed even
though the on-disk argument was read in full and checked; the consumer
ledger row for this edge is open. After the second-pass repairs the 4
edited items and their 9 transitive consumers were re-recorded with repair
evidence, so the main estimate is now exact: the repaired clauses preserve
every consumed claim, with the single exception of the Duhamel theorem's
boundedness statement, which was restricted from all of `R^3 x [a,b]` to
compact `K x [a,b]` and has no consumer of the discarded global claim.
`step1-decisions.mjs check --run` then reports 1041 items and closed false
with the only batch-71 work row being this intended escalation; no other
batch-71 record is stale at the time of writing (the run-wide ready count
grows as other batches record: 976 at the post-repair check, 988 at the
last check). (The run is actively
reconciling moving imports and other batches are editing their items
concurrently, so later stale-hash messages caused solely by other batches'
bytes are expected and are reported as they occur.)
