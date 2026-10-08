# Batch 9 Step 1 scaffold — Tits Cones, Chambers, and Parabolic Stabilizers

Run: `frontier-42-coxeter-32` · pair `tits-cones-chambers-and-parabolic-stabilizers`
(A order 1734, B order 1735, `coxeter-groups`, design label CG-06). Outputs:
`research/frontier-42-coxeter-32-batch-9.pages.json` (4 A + 3 B items), this note,
`research/frontier-42-coxeter-32-batch-9.coverage.json`,
`research/frontier-42-coxeter-32-batch-9.cross-batch-dependencies.json` (52 declared
cross-batch item edges, the declared page prerequisite, and two `removed` uniform-proposal
rows), and seven item-readiness records `research/frontier-42-coxeter-32-step1-<id>.json`.

## Scope, plan and binding inputs

- **Controlling direction.** `research/frontier-42-coxeter-32-owner-authoring-direction.md`
  (binding, read first) plus the design `research/plan-coxeter-groups-track.md` §CG-06
  (lines 212–226) and the binding proof-design inputs `research/coxeter-scaffold/inventory.json`
  (CG-06), `definition-justifications.json`, the native A/B page prose
  (`library/coxeter-groups/tits-cones-chambers-and-parabolic-stabilizers{,-examples}.md`),
  and `research/coxeter-scaffold/independent-audit.md`. The drift review
  (`research/frontier-42-coxeter-32-alpha-step1-drift.md`, lines 89–95) gives this page
  **no-drift** with "No prerequisite gap"; no plan edge or ordering change was applied.
- **Preserved.** The four planned local supplier contracts keep their exact ids and kinds:
  `def-cg-tits-cone-and-fundamental-chamber` (definition, justified by the finite-negativity
  theorem as the inventory requires), `thm-cg-tits-cone-finite-negativity-and-convexity`,
  `thm-cg-dual-chamber-intersections-and-point-stabilizers` and
  `thm-cg-tits-cone-interior-and-local-finiteness`. Their routes are the design's: the
  finite-negativity criterion with the one-letter reduction `Neg(s·f)=r_s(Neg(f)\{e_s})`;
  the chamber collision theorem by the left-descent induction with root inequalities (not a
  faithful-action shortcut); the stabilizer theorem with the explicit open-chamber
  `wC° ⊆ B_s` sign rule; and `f ∈ U° ⟺ W_{S(f)}` finite with local finiteness in `U°` and no
  local-finiteness claim on the boundary.
- **B companion (3 items).** `ex-cg-tits-cone-of-infinite-dihedral-type` (the D∞ Tits cone,
  its boundary and its stabilizers), `ex-cg-chamber-face-stabilizers-in-a2` (the wall
  stabilizer in A2, with the orbit and intersection checks) and
  `ex-cg-outside-tits-cone-point-with-infinite-stabilizer` (a vector outside U with infinite
  stabilizer), matching the design's three promised B-page tasks.
- **Plan-spec comparison.** `research/plan-spec.json` agrees with the task on the pair ids,
  orders 1734/1735, category, companion, the A-page `requires` list
  (`canonical-roots-signs-and-faithful-reflections`) and the B page's single requirement. Its
  item arrays are empty, so no item-level plan text can conflict. **No design-versus-plan
  conflict exists**, and no plan text was changed.

## Recorded clarifications and route decisions (no plan conflict)

1. **Inventory `depends_on` lists are uniform page-level proposals, not per-contract use sets.**
   The machine inventory attaches `thm-cg-root-inversion-formulas-and-strong-exchange` to all
   four CG-06 contracts and `thm-cg-tits-cone-finite-negativity-and-convexity` to the collision
   theorem. The recorded `deps` are the actual use sets. Two cross-batch proposals were not
   declared and are registered as `removed` rows in the ledger input: the definition item uses
   only the signed root system and ambient chamber data (no clause consumes `|N(w)|=ℓ(w)`), and
   the collision theorem uses the side rule, exchange and parity clauses only. The same-batch
   proposal collision-theorem ← finite-negativity-theorem was likewise not declared (the
   collision proof needs no convexity or criterion), and is recorded here rather than in the
   cross-batch input.
2. **The design's finite-case gluing is realised as a proved finite-parabolic tiling.** The
   contract "glue its finitely many incident chamber sectors to a neighborhood using the
   rank-two halfspace/face intersection rules" is proved in
   `thm-cg-tits-cone-interior-and-local-finiteness` by the direct argument behind that gluing:
   average a positive definite form over the finite group `W_I` acting on `V_I^*`, maximise
   `⟨u·φ, γ⟩` over `W_I` (the maximiser lies in the closed dual chamber because each `t ∈ I`
   acts as the orthogonal reflection in `{φ : φ(e_t) = 0}`), and control the `S∖I` coordinates
   by the uniform constant `M = max ‖ρ(u)^{-1}e_s − e_s‖₁`. This yields both the covering
   `B(f,ε) ⊆ ⋃_{u∈W_I} w u C` and the local chamber/wall count. No claim or scope was changed;
   only the proof technique is spelled out rather than imported from the rank-two rules.
3. **The B companion's third task is realised in both readings.** The design asks to "show why
   an arbitrary vector outside the Tits cone need not have a finite parabolic stabilizer". In
   the rank-two example of `ex-cg-tits-cone-of-infinite-dihedral-type`, strictly outside points
   have stabilizers of order at most 2 and it is the nonzero **boundary** points that carry the
   infinite stabilizer `⟨st⟩`; the literal statement is therefore realised in the product type
   `A₁⁽¹⁾ × A₁⁽¹⁾`, where `f = (−1,0,1,−1)` lies outside `U = U₁ × U₂` and has the infinite
   stabilizer `{1,s₂} × ⟨s₃s₄⟩`. Both computations are in the item.
4. **Source caveat — Davis, Example D.2.1(i).** The printed text describes the infinite
   dihedral Tits cone as the closed half-plane `x₁+x₂ ≥ 0`. Direct computation from the
   printed dual action (also in Lemma D.1.5, Case 1) gives `U = {x₁+x₂ > 0} ∪ {0}`: the
   nonzero boundary points are limits of points of `U` but are not in `U` (each has infinitely
   many negative roots, `e_t + k(e_s+e_t)` and `e_s + k(e_s+e_t)`), and `0` lies in no open
   chamber. The example states the correct version, which also matches `I = int U` in the same
   source. The slip is not imported into any item.
5. **Source caveat — Perrin, Theorem 6.5.2(vi).** The printed statement is in orbit form
   (`|Wh| < ∞` iff `h` is interior), while its proof uses the isotropy group and the finite
   root set `Δᵸ₊`; the correct clause is that the **stabilizer** is finite, which is the form
   proved here as `f ∈ U° ⟺ W_{S(f)}` finite. No verbatim import.
6. **No Choice is used anywhere in this pair**: the finite-parabolic argument averages over a
   finite group and maximises over a finite set, and the infinite case is an explicit
   perturbation. No path in the declared prerequisite closure reaches
   `deferred-set-theory-beyond-choice`.

## Dependency levels (in-run only)

Computed with the shared `item-dependency-levels.mjs` logic over the current run manifests
(in-run suppliers are batches 2, 4 and 7; published and other out-of-run suppliers do not
raise a level).

| level | item |
|---|---|
| 11 | `def-cg-tits-cone-and-fundamental-chamber` |
| 12 | `thm-cg-tits-cone-finite-negativity-and-convexity` |
| 12 | `thm-cg-dual-chamber-intersections-and-point-stabilizers` |
| 13 | `thm-cg-tits-cone-interior-and-local-finiteness` |
| 13 | `ex-cg-tits-cone-of-infinite-dihedral-type` |
| 14 | `ex-cg-chamber-face-stabilizers-in-a2` |
| 14 | `ex-cg-outside-tits-cone-point-with-infinite-stabilizer` |

No item depends on a later item, on a B-page item outside its own backward-ordered examples
page, or on an item from a later page; the recorded labels equal the computed labels exactly.

## Dependency verification (examined, not assumed)

Every declared `deps` target was checked to exist on disk or as an in-run scaffold contract,
and its statement and proof route were read for adequacy. Published suppliers read for this
pair: `def-algebraic-dual-and-linear-functional`, `def-dual-family-associated-to-a-basis`,
`thm-dual-family-is-a-basis-in-finite-dimension`, `def-linear-basis`,
`def-linear-subspace`, `def-linear-combination-and-span`, `def-linear-map`,
`def-generated-subgroup`, `def-group`, `def-finite-cardinality`, `thm-induction-principle`,
`def-metric-space`, `def-metric-topology`, `def-metric-ball`,
`def-metric-interior-closure-boundary`, `def-metric-compactness`, `lem-metrics-on-rn`,
`thm-all-norms-on-rn-are-equivalent`, `def-real-and-complex-inner-product-space`,
`def-bilinear-symmetric-skew-and-alternating-forms`, `thm-quarter-turn-values-and-shift-formulas`,
`thm-reals-ordered-field`.
In-run suppliers read in the current manifests: batch 7 — `lem-cg-rank-two-prefix-and-chamber-length-induction`,
`thm-cg-root-sign-and-simple-reflection-positivity`, `thm-cg-root-length-criterion-and-faithfulness`,
`def-cg-geometric-inversion-set`, `thm-cg-root-inversion-formulas-and-strong-exchange`;
batch 4 — `def-cg-real-coxeter-form-and-reflection`,
`lem-cg-reflection-form-invariance-and-rank-two-orders`, `def-cg-canonical-reflection-homomorphism`,
`lem-cg-reflection-representation-descends-and-root-norms`, `def-cg-dual-chambers-and-reflection-hyperplanes`,
`lem-cg-dual-action-and-chamber-faces-exist`; batch 2 — `def-hh-coxeter-matrix-word-group-and-length`,
`thm-hh-coxeter-exchange-deletion-and-faithfulness`, `thm-hh-parabolic-minimal-representatives-and-length-additivity`.
Checks actually made: the **left/right convention** of the side rule (our equivalence is
`wC° ⊆ {f(e_s)>0} ⟺ ℓ(sw) > ℓ(w)`, derived from the CG-04 root-length criterion applied to
`w⁻¹`, and consistent with P/Q clause (4) of the CG-04 rank-two lemma); the direction of the
inversion bound (`Neg(f) ⊆ N(w⁻¹)` for `f = w·g`, never `N(w)`); the containment
`Φ₊ ⊆ V₊∖{0}` and the strict positivity of `C°` functionals on `Φ₊`; `r_s(Φ₊∖{e_s}) = Φ₊∖{e_s}`
and `r_s e_s = −e_s`; `|N(w⁻¹)| = ℓ(w⁻¹) = ℓ(w)`; the rank-two chamber conventions of
`lem-cg-dual-action-and-chamber-faces-exist` (3)(i)/(3)(ii), including `c(s,t)=1` for
`m=∞` and hence `B(e_s,e_t) = −1`; the deletion condition producing reduced expressions over
`I` for elements of `W_I`; and the dual-basis existence and Euclidean metric vocabulary used
for the topology on `V*`. No missing, circular, forward or inadequate dependency was found.

## Sources (full text fetched and stamped)

Two independent primary treatments back the A page; both full texts were downloaded, stamped
and inspected (hashes below are from `source-fetch-check --stamp`):

1. **M. W. Davis, _The Geometry and Topology of Coxeter Groups_** (author manuscript,
   `sha256_16 ccefbb950fdcfce9`, 600 PDF pages). Read: Lemma 4.2.2 (printed pp. 46–47), Lemma
   4.2.3, Remarks 4.8.1–4.8.2 and Tits' Lemma 4.8.3 with its `(P_n),(Q_n)` scheme (printed
   pp. 55–56); Lemma 6.6.8 with proof (printed pp. 90–91); Appendix D.1 including Lemma D.1.5
   Cases 1–2 (printed pp. 440–441); Appendix D.2, Examples D.2.1, Lemmas D.2.2–D.2.5,
   Corollaries D.2.4, Theorems D.2.6–D.2.8 and Corollary D.2.9 (printed pp. 442–445).
2. **N. Perrin, _Introduction to Kac–Moody groups and Lie algebras_** (complete lecture notes,
   `sha256_16 c273a40a1801bbcb`, 279 PDF pages). Read: Chapter 6, §6.5 "Dominant chambers and
   Tits cone", Definition 6.5.1 and the complete Theorem 6.5.2 (i)–(vi) with proof (printed
   pp. 55–56).

Harvest dispositions (25 rows across the two sources, all naming this pair's items or a
destination): **11 `included`** (Davis D.1.5 Case 1 and D.2.1(i) → the D∞ example; D.1.5 Case 2
→ the A₂ example; D.2.2, D.2.5 and Perrin 6.5.2(i),(ii) → the collision/stabilizer theorem;
D.2.4 and D.2.6(ii)–(iii) → the interior theorem; D.2.7(i) → the convexity theorem;
Perrin 6.5.2(iii) → the finite-negativity criterion), **6 `inline`** (Definition 6.5.1;
D.2.3; D.2.6(i); Lemma 6.6.8; Lemma 4.2.2; Perrin 6.5.2(vi)), **3 `deferred`** (Tits'
Lemma 4.8.3 with Remarks 4.8.1–4.8.2 → `canonical-roots-signs-and-faithful-reflections`, the
proof home of `lem-cg-rank-two-prefix-and-chamber-length-induction`; D.2.8 with Corollary
D.2.9 → `davis-cat-zero-geometry-and-finite-subgroup-fixed-points`; Perrin 6.5.2(v) →
`finite-coxeter-diagrams-and-complete-classification`) and **5 `out-of-scope`** (hyperbolic
triangle groups D.2.1(ii); the segment-crossing refinement D.2.7(ii); the centre theorem
D.2.10; the reflection-normal-form Lemma 4.2.3; the coroot-difference clause Perrin
6.5.2(iv)), each with its specific reason in the coverage file. The two source caveats in
items 4–5 above are recorded here and are not imported into the items.

## Checks run (actual results)

| check | command (prefix `node`) | result |
|---|---|---|
| manifest dependency fields (batch) | `tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-9.pages.json` | `7 item(s), 0 missing, 0 error(s)` |
| manifest dependency fields (whole run) | `tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | `81 item(s), 0 missing, 0 error(s)` |
| scaffold policy (my batch with its suppliers 2, 4, 7) | `tools/content-policy.mjs --manifest-only ...batch-{2,4,7,9}.pages.json` | `35 scoped item(s), 0 error(s), 0 warning(s)` |
| scaffold policy (whole run) | `tools/content-policy.mjs --manifest-only ...batch-*.pages.json` | `81 scoped item(s), 0 error(s), 0 warning(s)` |
| coverage | `tools/coverage-checklist.mjs ...batch-9.coverage.json --require-destination` | `1 page(s), 25 harvested result(s), 0 error(s), 0 warning(s)` |
| full-text fetch | `tools/source-fetch-check.mjs --coverage ...batch-9.coverage.json --stamp` then check mode | `2/2 source(s) fetch-verified (2 newly stamped)`; check mode `2/2 resolved`, exit 0 |
| URL liveness | `tools/url-sweep.mjs --coverage ...batch-9.coverage.json --out /tmp/batch9-url-liveness.json --recover --fail-on-dead` | `2/2 live; 0 failed`; output written to `/tmp` to avoid touching the run's shared artifact |
| source backing | `tools/source-backing.mjs --coverage ...batch-9.coverage.json --liveness /tmp/batch9-url-liveness.json --reharvest-plan /tmp/batch9-reharvest.json --require-verified` | `5 authored result(s) across 1 file(s), every one still backed`; empty work list |
| manifest integrity | `tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | `64 page(s) owed, 64 in the manifests; no scope drift` |
| drift review | `tools/drift-review-check.mjs --run frontier-42-coxeter-32` | `32 page(s) reviewed, 0 spec edit(s) applied, no blocked edges` |
| plan | `tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool validate-plan` | exit 0: declared page order acyclic and consistent; no item-level cycles, forward references, B-page dependencies or unresolved ids |
| dependency levels (whole run) | `tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | fails while sibling batches are empty shells: **46 `empty scaffold inventory` errors, no other error line**; every batch-9 label equals the computed value |
| readiness (whole run) | `tools/step1-decisions.mjs check --run frontier-42-coxeter-32` | `items 81, ready 81`; no work entry names a batch-9 item |
| dependency ledger | `tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | exit 0 (refreshed and deduplicated); `--require-reviewed` still fails only because sibling batches have not supplied their inputs |
| wikilink/deps consistency | local extraction of every `[[...]]` in the manifest statements and strategies | 0 unresolved links, 0 links outside `deps`/`justified_by`/same-page ids, 0 forward same-page deps |

## Self-review corrections before hand-off

Two final reads of the statements and strategies found and corrected six defects, after which
the affected readiness records were re-recorded:

1. `ex-cg-tits-cone-of-infinite-dihedral-type` (i): the displayed generator action dropped the
   factor 2 in the second coordinate; the correct action is
   `s(x_s,x_t) = (−x_s, 2x_s+x_t)`, `t(x_s,x_t) = (x_s+2x_t, −x_t)`, consistent with
   `r_s e_t = e_t + 2e_s` for `B(e_s,e_t) = −1`.
2. The same item's stabilizer check of the outside point `(−1,0)` omitted the element
   `u⁻¹s = t` (the `k=−1` case); the corrected check gives `Stab = {1,t}` as stated.
3. `ex-cg-outside-tits-cone-point-with-infinite-stabilizer` (iii) inherited the same two
   errors; the corrected first-factor computation gives `Stab_{W₁}(f₁) = {1,s₂}` (the `k=−1`
   element `u₁⁻¹s₁` is `s₂`), as stated.
4. The same item's (iii) check is written with the generator actions `s₁`:`(x₁,x₂) ↦
   (−x₁, 2x₁+x₂)`, `s₂`:`(x₁,x₂) ↦ (x₁+2x₂, −x₂)` (a later revision had displayed the `s₁`
   formula under the label `s₂`; see the second verification pass below) and the unipotent
   formula `u₁ᵏ·x = x + 2kΔ₁(x)(−1,1)`.
5. `thm-cg-dual-chamber-intersections-and-point-stabilizers` (6): the disjointness argument
   applied the collision theorem to `(w⁻¹v)·(w⁻¹·z)`; the correct element is `v⁻¹w`, with
   `(v⁻¹w)·(w⁻¹·z) = v⁻¹·z`, as now written.
6. The interval cover in `ex-cg-tits-cone-of-infinite-dihedral-type` (iii) is stated as the
   explicit covering of the line by the two families `[−2k,1−2k]` and `[−(2k+1),−2k]`. The
   wall argument written into `thm-cg-tits-cone-interior-and-local-finiteness` (3)(iii) in this
   pass (a "limit of interior points of `vC`" step) was itself incorrect and was replaced in
   the second verification pass below.

## Second verification pass (pre-hand-off re-check of the proof strategies)

A full re-read of the seven strategies against the printed sources (the Davis author manuscript
downloaded and inspected for Appendix D.1–D.2 and Lemma 6.6.8) and against the supplier items
found and repaired three genuine defects. All affected items were re-recorded `ready`; item
`ex-cg-chamber-face-stabilizers-in-a2`, whose transitive input closure contains the repaired
interior theorem, was re-recorded as well (readiness records hash the transitive input closure,
`tools/step3-decisions.mjs` `itemInputs`). No dependency list, coverage row, ledger row or source
record changed.

1. **`thm-cg-tits-cone-interior-and-local-finiteness` (3)(iii).** The earlier wall argument
   asserted that every point of the wall `vH_{e_r}` is a limit of interior points of the
   chamber `vC`. That is false: a wall is a whole hyperplane, and a point of it outside the
   closed chamber `vC` is not a limit of points of `vC°` (in the infinite dihedral picture
   `(0,−1) ∈ H_{e_s}` while `C° = {x_s > 0, x_t > 0}`). Repaired to the correct argument:
   `f(α) ≠ 0` for every `f` in every open chamber (the `W`-invariant signed-root computation of
   `thm-cg-root-sign-and-simple-reflection-positivity` (2): `f = u·g`, `g ∈ C°`, gives
   `f(α) = g(ρ(u)⁻¹α)`, and `g` is strictly signed on `Φ_±`), so `H_α ∩ uC° = ∅`; a point of
   the ball lies in some `uC` with `u ∈ W_I` by the covering, hence on a wall `uH_{e_s}` of the
   polyhedral cone `uC`; the nonempty open piece `H_α ∩ B` of the hyperplane `H_α` is covered
   by the finitely many `H_α ∩ uH_{e_s}`, each all of `H_α` or a proper affine subspace, and a
   finite union of proper affine subspaces cannot contain a nonempty open set, so
   `H_α = uH_{e_s}`. The transport sentence for general `f = w·f₀` was rewritten to transport
   the three statements (i)–(iii) along the linear isomorphism `w`.
2. **`ex-cg-tits-cone-of-infinite-dihedral-type` (iv).** The recurrence `r_s α_k = α_{k+1}` is
   wrong: the reflection formula with `B(α_k,e_s) = B(β_k,e_t) = −1` gives
   `r_s α_k = α_k + 2e_s = β_{k+1}` and `r_t β_k = β_k + 2e_t = α_{k+1}`, so the two families
   advance only by mutual induction (`α_{k+1} = r_t β_k`, `β_{k+1} = r_s α_k`), which still
   yields `α_k, β_k ∈ Φ_+` for all `k ≥ 0` from `α_0 = e_t`, `β_0 = e_s`.
3. **`ex-cg-outside-tits-cone-point-with-infinite-stabilizer` (iii).** The displayed
   first-factor action put the `s₁` formula under the label `s₂`; the correct actions are
   `s₁:(x₁,x₂) ↦ (−x₁, 2x₁+x₂)` and `s₂:(x₁,x₂) ↦ (x₁+2x₂, −x₂)`, consistently with `s₂`
   fixing the line `{x₂ = 0}` pointwise and hence `f₁ = (−1,0)`. The closing contrast sentence
   ("every point outside `U` has stabilizer of order at most 2") was false, because the nonzero
   boundary points `Δ = 0` lie outside `U = {Δ > 0} ∪ {0}` and have the infinite stabilizer
   `⟨st⟩`; it now states the correct rank-two picture (infinite stabilizer exactly on the
   boundary line with the origin removed; stabilizer of order at most 2 for every point with
   `Δ ≠ 0`) and the strengthened fact that the product-type point `f` lies outside even the
   closure `overline U`.

Re-run results after the repairs (the run now carries 93 items, sibling batches having landed
in the meantime; batch-9 counts are unchanged):

| check | result |
|---|---|
| `manifest-deps` (whole run) | `93 item(s), 0 normalized, 0 error(s)` |
| `content-policy --manifest-only` (whole run) | `93 scoped item(s), 0 error(s), 0 warning(s)` |
| `coverage-checklist ... --require-destination` | `1 page(s), 25 harvested result(s), 0 error(s), 0 warning(s)` |
| `source-fetch-check` (check mode) | `2/2 source(s) resolved` |
| `step1-decisions check` | `items 93, ready 93`, no stale record; work lists only sibling empty scaffolds |
| `item-dependency-levels check` | only sibling `empty scaffold inventory` lines; every batch-9 label still equals the computed value |
| `frontier-item-gate --tool validate-plan` | exit 0 (page-level; item lists are validated per batch by the manifest checks) |
| `manifest-integrity` | `64 page(s) owed, 64 in the manifests; no scope drift` |
| `drift-review-check` | exit 0, no blocked edges |
| `frontier-dependency-ledger refresh` | exit 0 |

## Exploratory item-validator probes (not stage-1 gates) and hand-off numbers

The stage-1 battery no longer includes item-scoped `extcheck`/`fwdcheck` (its selector is
derived from the live manifests while the item carriers do not exist until `3b-author`). The
probes were nevertheless run and are recorded honestly:

- `node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool extcheck --quiet`
  → `FAIL` with `[focus-item-unknown]` for all 81 scaffolded-but-unwritten ids, including the
  six of this pair. Expected pre-author state.
- `node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool fwdcheck --quiet`
  → the same `focus-item-unknown` failure, same cause.
- `node tools/depsource.mjs --items-file research/frontier-42-coxeter-32-frontier-gate-items.json --run frontier-42-coxeter-32`
  → `Error: Invalid or empty current page in frontier-42-coxeter-32-batch-10.pages.json`, the
  same partially populated sibling manifest observation recorded by batch 6 and batch 8. Not a
  batch-9 defect.

At this batch's hand-off:

- `node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` → `items 81, ready 81`;
  **no work entry names a batch-9 item**; all seven
  `research/frontier-42-coxeter-32-step1-<id>.json` records are current for the manifest bytes
  on disk.
- `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` → exit 1 with only
  `empty scaffold inventory` lines for the not-yet-scaffolded sibling pages (46 at the time of
  the run) and no label, dependency or cycle error; the seven levels are the tabled values.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` → exit 0; the
  input carries the declared page edge, one row per declared cross-batch item edge (52), and
  two `removed` uniform-proposal rows; `--require-reviewed` fails only on sibling batches that
  have not written their inputs.

## Completion

- All seven items recorded `ready` with the examined direct dependency ids as evidence;
  records are `research/frontier-42-coxeter-32-step1-<id>.json` and are current for the final
  manifest bytes after the second verification pass (three repaired items plus the transitive
  consumer `ex-cg-chamber-face-stabilizers-in-a2` re-recorded). No item was escalated; the
  final whole-run readiness check reported `items 93, ready 93` with no stale batch-9 record.
- This batch is mathematically scaffolded but not proved: the seven items are proof contracts
  for Step-3 authoring. No published content, shared plan, engine state or verdict was edited,
  and no selected pair was changed.
- The whole-run `step1-readiness`, `item-dependency-levels` and `content-policy` gates cannot
  pass while sibling batches are empty shells; every remaining failure names only other
  batches' empty or in-flight files and resolves when those batches land. Noted for owner
  reconciliation: the two source-text slips in §"Recorded clarifications" items 4–5.
