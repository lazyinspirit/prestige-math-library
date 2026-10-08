# Step 3b pair author — finite-reflection-arrangements-and-spherical-coxeter-complexes

Run: `frontier-42-coxeter-32` · role `alpha-high` · label
`step3b-pair-finite-reflection-arrangements-and-spherical-coxeter-complexes-3de23f3140108cbf`.
A page `finite-reflection-arrangements-and-spherical-coxeter-complexes` (order 1750,
batch 17, category `coxeter-groups`, design label CG-14) · B page
`finite-reflection-arrangements-and-spherical-coxeter-complexes-examples` (order 1751).

## Owned IDs (authoring order: ascending dependency_level, ties by page order and item ID)

| # | level | item | home | checkpoint |
|---|---|---|---|---|
| 1 | 14 | `def-cg-finite-reflection-arrangement-and-spherical-chambers` | A | **written; precheck n/a, rendercheck OK; depcheck open only on unfinished in-run suppliers** |
| 2 | 14 | `ex-cg-infinite-dihedral-degeneration-versus-davis-complex` | B | **written; precheck PASS, rendercheck OK, proof-layout 0 defects; suppliers batch 4/9 partly written, partly open** |
| 3 | 15 | `thm-cg-finite-chamber-tiling-and-coset-face-identification` | A | **written (21 steps); precheck PASS, rendercheck OK, proof-layout 0 defects; in-run suppliers partly open** |
| 4 | 16 | `thm-cg-finite-parabolic-longest-element-and-opposition` | A | pending |
| 5 | 17 | `ex-cg-circle-coxeter-complex-of-i2-5` | B | pending |
| 6 | 17 | `ex-cg-sphere-coxeter-complex-of-a3-and-a-parabolic-residue` | B | pending |

The two page files are also owned (item/example lists and prose).

## Open obligations at entry

1. **All in-run suppliers are unauthored scaffolds at entry.** Every in-run `deps` target of the
   six items lives in batches 2, 4, 7, 9 or 13 and has no `items/<id>.md` file yet (checked
   2026-10-07 at dispatch). The items are authored against the scaffold interfaces; the exact
   supplier ID, consumer ID and consuming proof step are recorded per item below and the item
   decision is held escalated until the supplier file and the proof use are reconciled, per the
   dispatch rule.
2. **Flagged supplier defect (outside this pair, from Step 3a).**
   `lem-cg-dual-action-and-chamber-faces-exist` (batch 4) clause (3)(ii) states that for
   `m(s,t)=∞` the union of the chambers `wC_P` is the closed half-plane `{f : f(e_s+e_t) ≥ 0}`;
   the direct computation gives `{f : Δ(f) > 0} ∪ {0}`. This pair consumes only clause (2) of
   that lemma (nonempty faces) and proves the correct infinite-dihedral statement locally in
   item 2; the defect is routed to the owner for the canonical ledger (not edited here, since it
   is batch 4's file).
3. **Design deferral with live destination.** The B companion's "compare with the Davis complex
   for infinite W" is discharged here only negatively (U ≠ V*, no opposite chamber, Φ infinite,
   ℓ unbounded); the Davis-complex construction and comparison belongs to
   `spherical-parabolic-cosets-and-the-davis-complex` (batch 26, order 1768). Item 2 states the
   negative comparison and names that page in prose without depending on it.
4. **Source erratum carried (non-blocking).** Davis, Appendix D.2, Example D.2.1(i): "U is the
   half-plane x₁+x₂ ≥ 0" contradicts Lemma D.2.3/Corollary D.2.4 and the direct computation; the
   correct statement is proved locally in item 2.

## Checkpoints

### Checkpoint 0 — entry (2026-10-07)

- Read: `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md` (frontier sections), the batch-17 manifest,
  note and coverage, the six step-1 readiness records, the Step 3a pair review (decision
  `sufficient`), the drift review (no-drift), the owner authoring direction, design CG-14
  (`research/plan-coxeter-groups-track.md` L341–353), the scaffold inventory CG-14 entry,
  `definition-justifications.json` (definition justifier =
  `thm-cg-finite-chamber-tiling-and-coset-face-identification`), the classical source report,
  and the complete statements of the direct in-run suppliers (batches 2, 4, 7, 9, 13) from the
  run manifests.
- Files on disk at entry: none of the six item files; both page files are the Step-1 prose
  scaffolds with empty `items`/`examples` lists (only `def-cg-finite-lattice-congruence-and-interval-projections`
  of the whole run existed then, from the sibling batch-5 author).
- Next action: author item 1.

### Checkpoint 1 — items 1–3 written (2026-10-07, same session)

- **Item 1** `def-cg-finite-reflection-arrangement-and-spherical-chambers` (level 14, A):
  definition with the `V ≅ V*` identification made only here, the arrangement/chambers/faces,
  the spherical section and the coset face poset; clause (4) records the abstentions; no
  Choice. Justifier exactly `thm-cg-finite-chamber-tiling-and-coset-face-identification` as
  recorded in `definition-justifications.json`. Checks: precheck `not-applicable` (0 checked),
  rendercheck OK.
- **Item 2** `ex-cg-infinite-dihedral-degeneration-versus-davis-complex` (level 14, B):
  explicit computation of the dual action for `m(s,t)=∞` with `(st)^k = I+kN`, the chamber
  cones over the unit intervals of `{Δ=1}`, `U = {Δ>0} ∪ {0}`, `0 ∉ U°` via
  `thm-cg-tits-cone-interior-and-local-finiteness` (5), no chamber `= −C`, Φ infinite, ℓ
  unbounded, and the ray-chart bijection; the Davis-complex comparison is deferred in prose.
  Checks: precheck PASS (9 steps), rendercheck OK, proof-layout 0 defects. (The manifest
  strategy phrase "ρ(t^k)e_s gives infinitely many roots" is wrong — `r_t` is an involution;
  the item uses the correct witness `ρ((st)^k)e_s = (1+2k)e_s − 2k e_t`.)
- **Item 3** `thm-cg-finite-chamber-tiling-and-coset-face-identification` (level 15, A):
  full 21-step proof of (1) tiling/components/closures, (2) simplicial cones + dihedral
  angle, (3) face dictionary + stabilizers + partition, (4) triangulation by the explicit
  complex `K` and map `φ`, with the `S=∅` case separated first. One scaffold error was found
  and corrected while authoring: the manifest strategy's "C = (C∩P) ⊕ P⊥" and "C∩P is the
  sector" are false in rank ≥ 3 (in `A₃`, `C ∩ span(e₁,e₂) = {0}`); the corrected step 2.5
  computes the dihedral angle in the quotient `V/(H_{e_s}∩H_{e_t}) ≅ Re_s+Re_t`, which is the
  correct and provable statement. Checks: precheck PASS, rendercheck OK after making the
  display formulas single-line, proof-layout 21 steps / 0 defects.
- **Open supplier reconciliation** (unchanged rule): the exact in-run supplier files used are
  the batch 2/4/7/9/13 items listed in the manifests; at this checkpoint
  `def-cg-canonical-reflection-homomorphism`, `def-cg-dual-chambers-and-reflection-hyperplanes`,
  `lem-cg-dual-action-and-chamber-faces-exist`, `lem-cg-reflection-representation-descends-and-root-norms`,
  `def-cg-geometric-inversion-set`, `thm-cg-root-sign-and-simple-reflection-positivity`,
  `thm-cg-root-inversion-formulas-and-strong-exchange`, `thm-cg-root-length-criterion-and-faithfulness`,
  `thm-cg-finite-type-positive-definite-criterion`, `lem-cg-diagram-products-and-invariant-form-comparison`,
  `thm-cg-tits-cone-interior-and-local-finiteness` and
  `thm-hh-parabolic-minimal-representatives-and-length-additivity` had no item file yet; the
  items are authored against their scaffold interfaces and the decisions stay escalated until
  those files exist and the proof uses are reconciled.

---

## Checkpoint 2 — continuation dispatch `...a24cc7e1258daff4`: all six items complete (2026-10-07)

Label `step3b-pair-finite-reflection-arrangements-and-spherical-coxeter-complexes-a24cc7e1258daff4`,
role `alpha-high`. Preserves Checkpoint 0/1 above (earlier dispatch `3de23f3140108cbf`); the entry
state below was recomputed from disk, not from those notes.

**Entry state (verified on disk).** Items 1–4 existed (written 19:12–19:26; items 1–3 as recorded in
Checkpoint 1, item 4 written by that session after the checkpoint was saved); items 5 and 6 did not
exist; both page files still carried empty `items`/`examples` lists; batch 17 had no
`proof-contracts.json`. All in-run suppliers of the six items now exist as files (batches 2, 4, 7, 9,
13 and this pair), so the Checkpoint-1 escalation on unauthored suppliers is discharged by
reconciliation against the current files.

### Item work

1. **`def-cg-finite-reflection-arrangement-and-spherical-chambers` — accept.** Audited clause by
   clause against its contract and its justifier. Unchanged (accept; only the manifest entry's deps
   were verified to match). Checks: precheck `not-applicable`, rendercheck OK, proof-layout 0
   defects, proof-contract `--strict` 0 errors, content-policy 0 errors.
2. **`ex-cg-infinite-dihedral-degeneration-versus-davis-complex` — accept.** Audited: the dual
   action and its invariant $\Delta$; $A=I+N$, $N^2=0$; chamber cones over the unit intervals of
   $\{\Delta=1\}$; $U=\{\Delta>0\}\cup\{0\}$ with $0\notin U^\circ$ via
   `thm-cg-tits-cone-interior-and-local-finiteness` (5); no chamber $=-C$; the root witness
   $\rho((st)^k)e_s=(1+2k)e_s-2ke_t$; $\ell$ unbounded. Repair to the **manifest only**: the scaffold
   strategy sentence citing $\rho(t^k)e_s$ as the infinite-root witness was corrected to the witness
   actually used in the item (the manifest statement is synchronized). Checks: precheck PASS (9
   steps), rendercheck OK, proof-layout 0 defects, proof-contract 0 errors, content-policy 0 errors.
3. **`thm-cg-finite-chamber-tiling-and-coset-face-identification` — repaired.** Repair: F1 cited
   `def-cg-coxeter-diagram-components-and-finite-type`, which was absent from `deps`; it is now
   declared (proof-contract error `citation-undeclared-dependency` cleared) and the manifest deps are
   synchronized. Content audited: the 21-step proof of the tiling, the dual-basis faces with the
   dihedral angle in the quotient, the coset-face dictionary with the intersection formula and
   stabilizers, and the explicit triangulation by $K$ and $\varphi$ (with $S=\emptyset$ separated
   first). Checks: precheck PASS, rendercheck OK, proof-layout 21 steps 0 defects, proof-contract 0
   errors, content-policy 0 errors.
4. **`thm-cg-finite-parabolic-longest-element-and-opposition` — repaired.** Repair: steps 4.1–4.3
   and 5.1 now carry the `[F1]` tag for the length facts they consume through step 1.2, clearing the
   proof-contract `shotgun-bracket` warning; citations regenerated. Checks: precheck PASS,
   rendercheck OK, proof-layout 12 steps 0 defects, proof-contract 0 errors **and 0 warnings**,
   content-policy 0 errors.
5. **`ex-cg-circle-coxeter-complex-of-i2-5` — repaired (authored from the scaffold).** New file,
   14 canonical steps. Computes $4c^2-2c-1=0$ from the double/triple-angle formulas,
   $|W|=10$ (ten pairwise distinct matrix images; word reduction $s^2=t^2=(st)^5=1$),
   $\Phi=\{\pm e_s,\pm e_t,\pm 2c(e_s+e_t),\pm(2ce_s+e_t),\pm(e_s+2ce_t)\}$ with $|\Phi|=10$,
   $|\Phi_+|=|T|=5$ and five distinct root lines, the ten arcs as the spherical chambers with the
   decagon triangulation (five vertices per type, Euler 0), the dual vectors with
   $B(u_s,u_t)=c=\cos(\pi/5)$ and the angle $\pi/5$ on every arc, the two-chamber/ two-vertex
   incidences with the rank-one residues, and $w_0=(st)^2s$ with
   $\rho(w_0)e_s=-e_t$, $\rho(w_0)e_t=-e_s$ and $\ell(w_0)=5$. Repairs against the scaffold: clause
   (iii) now states **angular** measures of the arcs instead of path lengths (the length
   identification belongs to the in-flight `spherical-simplex-metrics-angular-links-and-cones` and is
   not used); the residue clause is phrased through the face dictionary instead of a zero-sphere
   symbol; the two vertices of each chamber are identified via the face correspondence. The manifest
   statement, strategy and deps are synchronized. Checks: precheck PASS, rendercheck OK, proof-layout
   14 steps 0 defects, proof-contract 0 errors, content-policy 0 errors. No Choice.
6. **`ex-cg-sphere-coxeter-complex-of-a3-and-a-parabolic-residue` — repaired and ESCALATED.** New
   file, 8 canonical steps. Proves: $W\cong S_4$, $|W|=24$, $B$ positive definite; the $24/36/14$
   count with the vertex types $\{s_2,s_3\}$ (order 6), $\{s_1,s_3\}$ (order 4), $\{s_1,s_2\}$
   (order 6) and Euler $14-36+24=2$; the residue of a vertex of type $I=\{s,t\}$ as a cycle with
   $|W_I|=2m(s,t)$ edges (the $I_2(3)$ hexagon, the $I_2(2)$ four-cycle) and the two-point link of an
   edge, through the face dictionary; the dihedral angles $\pi/3,\pi/3,\pi/2$ with congruent chambers;
   and the reversal permutation as $w_0$ with $\rho(w_0)e_{s_i}=-e_{s_{4-i}}$. **Held claim:** the
   scaffold's areal sentence (area $\pi/6$ per chamber, total $24\cdot\pi/6=4\pi$) is **not** asserted
   because no item in the active dependency closure states the spherical-excess identity or the
   additivity of surface area over this tiling; the two library items with that content
   (`ex-spherical-geodesic-triangle-area-excess`, `ex-gauss-bonnet-for-the-round-sphere`) are homed on
   examples pages — so SCHEMA forbids consuming them — and assume the Axiom of Choice, and the
   AC-free `ex-sphere-and-hemisphere-surface-integrals` is likewise examples-homed. The abstention is
   recorded in the item's Remarks; the manifest statement was synchronized; the item decision is
   **escalate** (owner-held). Checks: precheck PASS, rendercheck OK, proof-layout 8 steps 0 defects,
   proof-contract 0 errors, content-policy 0 errors.

### Supplier reconciliation (flagged suppliers, now authored)

All direct in-run suppliers of the six items were read at their cited clauses and match the uses:
batch 2 `def-hh-coxeter-matrix-word-group-and-length`,
`thm-hh-parabolic-minimal-representatives-and-length-additivity` (1)–(4); batch 4
`def-cg-real-coxeter-form-and-reflection`, `lem-cg-reflection-form-invariance-and-rank-two-orders`
(2)–(3), `def-cg-canonical-reflection-homomorphism`,
`lem-cg-reflection-representation-descends-and-root-norms` (2)–(4),
`def-cg-dual-chambers-and-reflection-hyperplanes`, `lem-cg-dual-action-and-chamber-faces-exist`;
batch 7 `def-cg-geometric-inversion-set`, `thm-cg-root-sign-and-simple-reflection-positivity` (1)–(3),
`thm-cg-root-inversion-formulas-and-strong-exchange` (1)–(2),
`thm-cg-root-length-criterion-and-faithfulness`; batch 9 `def-cg-tits-cone-and-fundamental-chamber`,
`thm-cg-tits-cone-finite-negativity-and-convexity` (1),
`thm-cg-dual-chamber-intersections-and-point-stabilizers` (1)–(6),
`thm-cg-tits-cone-interior-and-local-finiteness` (5); batch 13
`thm-cg-finite-type-positive-definite-criterion` (1)–(2),
`lem-cg-diagram-products-and-invariant-form-comparison` (4),
`def-cg-coxeter-diagram-components-and-finite-type`.

**Carried defect resolved on disk.** The batch-4 item `lem-cg-dual-action-and-chamber-faces-exist`
(3)(ii) now states the correct union $\{\varphi:\delta(\varphi)>0\}\cup\{0\}$ (the earlier checkpoint's
defect note is discharged by that batch's own repair; the item no longer claims the closed half-plane
itself). This pair consumed only its non-defective clauses in any case.

### Manifest, pages, and contracts

- `research/frontier-42-coxeter-32-batch-17.pages.json`: statements, strategies and deps synchronized
  for items 5 and 6 (including the held areal claim for item 6), the item-2 strategy witness
  corrected, and the deps of item 3 and item 5 reconciled with the item files (item 5 gained the
  thirteen suppliers actually used; the unused `def-cg-coxeter-diagram-components-and-finite-type`
  row was dropped from its deps).
- `library/coxeter-groups/finite-reflection-arrangements-and-spherical-coxeter-complexes.md`:
  `items` list set to the three A items; the scaffold body replaced by the authored summary (the
  justifier clause, the tiling/dictionary/triangulation content, and the longest-element results);
  the prerequisite and companion section kept.
- `library/coxeter-groups/finite-reflection-arrangements-and-spherical-coxeter-complexes-examples.md`:
  `examples` list set to the three B examples; body rewritten as the leaf summary of the three
  computations, including the explicit note that the areal claim is held and that the Davis-complex
  comparison belongs to the later page `spherical-parabolic-cosets-and-the-davis-complex`.
- `research/frontier-42-coxeter-32-batch-17.proof-contracts.json`: created for the six items with the
  eight standard boundary worksheets per item (empty, zero, one, degenerate, endpoints,
  non-choice, iff-forward, iff-reverse), then regenerated with `regen-contract-entries.mjs` for the
  exact citations (full statement-section quotes and per-step uses) and step derivations.
  `proof-contract.mjs --strict`: **6/6 items, 0 errors, 0 warnings**.
- Scope decision refreshed for the A page (the statement sync invalidated the Step-3a hash); item
  decisions recorded through `tools/step3-decisions.mjs record-item` with the examined dependency
  ids: accept for items 1–2, repaired for items 3–5, escalate for item 6.

### Checks actually run (current content)

| check | command (abbreviated) | result |
|---|---|---|
| proof layout | `node tools/proof-layout.mjs` on the six item paths (one command) | 6 items, 64 steps, 0 defects |
| precheck | `node tools/tsx-run.mjs tools/precheck.mts` on the six item paths | 5 checked (the definition is n/a), 0 failing |
| rendering | `node tools/rendercheck.mjs` on the six items and the two pages | OK |
| content policy | `node tools/content-policy.mjs research/frontier-42-coxeter-32-batch-17.pages.json` | 6 items, 0 errors, 0 warnings |
| proof contracts | `node tools/proof-contract.mjs …batch-17.proof-contracts.json --strict` | 6/6, 0 errors, 0 warnings |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | no finding names any batch-17 item (the single error is `ex-cg-reducible-semidefinite-forms-are-factorwise`, a sibling pair's item) |
| manifest deps | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | 303 items, 0 errors |
| depcheck (scoped) | `node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool depcheck` | 113 run-wide findings; **0 name a batch-17 item** (other pairs' unresolved in-flight links) |
| validate-plan (scoped) | `node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool validate-plan` | plan-closure mismatches reported below (no error names a batch-17 item file directly beyond the page-level `undeclared-prereq` rows) |

### Pre-splice plan mismatches reported for Step 4

`validate-plan` reports five page-level `undeclared-prereq` findings for this pair: item deps reach
pages outside the closure of the declared `requires`
(`finite-coxeter-diagrams-and-complete-classification`,
`finite-lattice-projections-and-coxeter-chain-labels`). Exact rows:

1. A page ← `hilbert-space-geometry-and-riesz-representation`, from
   `def-real-and-complex-inner-product-space` and `cor-inner-product-induces-a-norm` (items 1 and 3:
   the positive definite form as an inner product, the norm $\lVert\cdot\rVert_B$, the unit sphere
   and the metric topology).
2. A page ← `partitions-of-unity-and-paracompactness`, from
   `lem-algebra-of-continuous-real-maps-on-a-space` (item 3, the continuity of sums/quotients in the
   construction of $\varphi$).
3. B page ← `hilbert-space-geometry-and-riesz-representation` (item 5, via
   `cor-inner-product-induces-a-norm`).
4. B page ← `further-trigonometric-identities-and-inverses` (item 5, via
   `def-principal-inverse-sine-and-cosine` for the principal angle).
5. B page ← `permutation-statistics-inversions-and-eulerian-numbers` (item 6, via
   `cor-symmetric-group-has-factorial-cardinality-again` for $|S_4|=24$).

The same species of finding is present for many other pairs of this run (for example
`tits-cones-chambers-and-parabolic-stabilizers`, `finite-coxeter-diagrams-and-complete-classification`
and `finite-reflection-length-and-orthogonal-moved-spaces` all reach `hilbert-space-geometry-and-riesz-representation`),
so this is a plan-closure issue rather than a defect of the six items. Remedy for the owner/Step 4:
add the four pages above (directly, or through a page whose closure contains them) to CG-14's
`requires` in `research/plan-spec.json`, or replace the suppliers; the items cannot drop those
suppliers without weakening their proofs.

### Escalations, blockers, and open obligations

1. **Owner-held item escalation.** `ex-cg-sphere-coxeter-complex-of-a3-and-a-parabolic-residue`:
   the scaffold-promised areal computation is held (no A-homed spherical-excess or area-additivity
   supplier; the two candidate items are examples-homed and AC-dependent). Remedy: authorize an
   A-homed spherical-excess prerequisite, or approve the narrowed statement. Recorded as `escalate`.
2. **Blocked shared tool: dependency-ledger refresh.**
   `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` aborts with
   `Invalid escape sequence \l at line 19, column 84` — the offending frontmatter is in
   `items/thm-cg-compact-local-cat-one-short-circle-criterion.md` (a sibling pair's file, authored
   concurrently; a double-quoted YAML scalar containing `$\le\kappa$`). Until that file is fixed the
   batch-17 `cross-batch-dependencies.json` rows could not be refreshed; they are **stale** with
   respect to the final deps of items 5 and 6 and must be regenerated by the owning run after the
   sibling repairs its YAML. Reported, not edited (other pair's file).
3. **Unresolved run-wide depcheck/validate-plan findings** are all in sibling pairs still being
   authored (no batch-17 item is named); they belong to those pairs' own handoffs.
4. **No unresolved mathematical obligation remains inside items 1–5**; item 6's only open obligation
   is the held areal claim of escalation 1.

### Next action

Hand off: the pair's six items, both pages, the batch manifest, the proof contracts and this report
are on disk and checked; Step 4 must resolve the five plan-closure rows above, and the owner must
resolve the item-6 escalation. The Davis-complex comparison remains deferred to
`spherical-parabolic-cosets-and-the-davis-complex` (order 1768), as the design records.

## Checkpoint 3 — final handoff verification, dispatch `...a24cc7e1258daff4` (2026-10-07)

Every acceptance check was re-run on the frozen content after the last item edit; no item or page
was touched afterwards, so this is the handoff state.

| check | result |
|---|---|
| `proof-layout.mjs` on the six item paths (one command) | 6 items, 64 steps, 0 defects |
| `tsx-run.mjs tools/precheck.mts` on the six explicit paths | 5 checked, 0 failing (definition n/a) |
| `rendercheck.mjs` on the six items and the two pages | OK, 8 files |
| `content-policy.mjs` batch-17 manifest | 6 scoped, 0 error, 0 warning |
| `proof-contract.mjs --strict` batch-17 | 6/6, 0 error, 0 warning |
| `coverage-checklist.mjs` batch-17 (engine gate form) | 1 page, 17 harvested, 0 error |
| `frontier-dependency-ledger.mjs refresh` | **blocked** by a sibling file’s YAML (below) |
| `item-dependency-levels.mjs check --run` | no finding names a batch-17 item |
| `manifest-deps.mjs` (all 32 manifests) | 303 items, 0 errors |
| `frontier-item-gate --tool depcheck` | one finding names a batch-17 ID (below) |
| `frontier-item-gate --tool validate-plan` | only the five `undeclared-prereq` rows of §“Pre-splice plan mismatches” |

Decisions on the `step3-decisions` record (no `--owner`, no judge/audit stamps): items 1–2 `accept`,
items 3–5 `repaired`, item 6 `escalate`. All six IDs appear in the immutable
`frontier-42-coxeter-32-frontier-gate-items.json` (303 items), so they are original scaffold IDs
whose ordinary current item decisions are the correct receipt; none is an addition requiring
engine-issued certification, and none was put through a fabricated review authority.

### Newly observed cross-pair finding (reported, sibling file not edited)

`frontier-item-gate --tool depcheck` now reports:

```
[cited-not-in-deps] items/ex-cg-infinite-dihedral-growth.md: cites
"thm-cg-finite-parabolic-longest-element-and-opposition" in Statement/Facts but it is not in deps
```

The consumer is batch 25’s `ex-cg-infinite-dihedral-growth` (pair
`coxeter-descents-poincare-polynomials-and-growth`, order 1766); its Facts `[L5]` uses our item 4
clause (1)(ii),(iii) for `t^N P_W(t^{-1}) = P_W(t)`, `N = ℓ(w_0)`, and the citation matches our
statement clause by clause. The remedy is for that pair to add
`thm-cg-finite-parabolic-longest-element-and-opposition` to the consumer’s `deps` (or drop the
citation); no change to this pair is required. This is the only depcheck finding that names any
batch-17 ID.

### Handoff status

Complete: six items authored and checked, both pages written, batch-17 manifest and proof
contracts current, coverage and policy gates green, decisions recorded, this report final. Open
for the owner: the item-6 areal-claim escalation; the ledger-refresh blocker (sibling YAML escape
`$\le\kappa$` at `items/thm-cg-compact-local-cat-one-short-circle-criterion.md` line 19, which
keeps the batch-17 `cross-batch-dependencies.json` rows for items 5–6 stale); and the five
plan-closure `undeclared-prereq` rows for Step 4. No mathematical obligation remains open inside
items 1–5.
