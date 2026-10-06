# Step 3b — pair `reductive-affine-invariant-theory-and-geometric-quotients` (dispatch report)

- Run: `frontier-40-geometry-braids-rep-27`
- Dispatch label: `step3b-pair-reductive-affine-invariant-theory-and-geometric-quotients-d0230920730bb77e`
- Role: alpha-high scaffold auditor and item author
- A page: `reductive-affine-invariant-theory-and-geometric-quotients` (order 881, category `algebraic-geometry`, 13 items)
- B page: `reductive-affine-invariant-theory-and-geometric-quotients-examples` (order 882, 4 items)
- Batch: 16; shared files `research/frontier-40-geometry-braids-rep-27-batch-16.pages.json`,
  `...-batch-16.coverage.json`, `...-batch-16.proof-contracts.json`,
  `...-batch-16.cross-batch-dependencies.json`
- Owned pair only; sibling pairs in batch 16 do not exist (batch 16 holds
  only this pair), so no sibling rows can be disturbed in this batch.

## Entry checkpoint (open obligations)

Owned IDs to audit, author, register and certify (17 items, dependency order):

1. `def-categorical-and-geometric-quotients-of-classical-varieties` (A, level 0)
2. `def-reductive-and-linearly-reductive-over-c` (A, level 0)
3. `lem-complex-algebraic-groups-are-smooth` (A, level 0)
4. `lem-positively-graded-noetherian-algebra-is-finitely-generated` (A, level 0)
5. `lem-invariant-polynomials-of-the-hyperbolic-gm-action-on-the-plane` (B, level 0)
6. `thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group` (A, level 1)
7. `rem-finite-group-noether-theorem-does-not-supply-the-reductive-finiteness-theorem` (B, level 1)
8. `lem-reynolds-operator-and-invariant-subring-properties` (A, level 2)
9. `lem-invariant-ring-of-finite-dimensional-module-is-finitely-generated` (A, level 3)
10. `lem-orbit-dimension-and-closed-orbits-for-complex-group-actions` (A, level 5)
11. `def-stable-points-of-an-affine-action` (A, level 6)
12. `lem-stabilizer-dimension-semicontinuity` (A, level 6)
13. `thm-invariant-ring-finite-generation-and-affine-categorical-quotient` (A, level 6)
14. `lem-separation-of-disjoint-closed-invariant-subsets-by-an-invariant` (A, level 7)
15. `cex-closed-orbit-does-not-imply-stability-positive-dimensional-stabilizer` (B, level 7)
16. `thm-stable-locus-geometric-quotient` (A, level 8)
17. `ex-gm-quotient-of-affine-plane` (B, level 9)

Open obligations carried into this dispatch:

- O1. Author all 17 item files (none exists on disk at entry; the manifest
  rows are design + strategy only), both `library/algebraic-geometry/` pages,
  and the batch-16 proof-contract entries.
- O2. Audit authoring readiness item by item and repair local gaps; keep every
  manifest statement (the Step-3a scope receipt hashes statements, so a
  statement change would void the `sufficient` scope decision).
- O3. Findings from the Step-3a review (rechecked against current inputs):
  (a) `def-reductive-and-linearly-reductive-over-c`'s Lie–Kolchin
  parenthetical has no in-library supplier; resolve by keeping it a sourced
  parenthetical and proving only what the pair uses (fixed-vector definition),
  with no edge to batch 18 (higher order). (b) `ex-gm-quotient-of-affine-plane`
  (iii) says "principal $\mathbf G_m$-bundle" while only a topological
  principal-bundle definition exists; resolve by phrasing (iii) through the
  explicit product trivialization and the published topological definition
  used only as a dictionary. (c) the local Lie bridge for
  `thm-complete-reducibility-...` must be authored here and reviewed in
  Steps 5–6; Milne 22.41–22.43 is a second treatment, not an imported proof.
- O4. In-run supplier edges (`...-batch-16.cross-batch-dependencies.json`, 4
  rows, all `open`): `lem-action-map-fibres-and-stabilizer-subscheme` and
  `lem-orbit-map-fibres-and-stabilizer-dimension` (batch 15) are scaffold-only
  at entry — no `items/<id>.md` files exist. Consumers:
  `lem-orbit-dimension-and-closed-orbits-for-complex-group-actions` (steps that
  import the orbit/dimension statements), `lem-stabilizer-dimension-semicontinuity`
  (the local fibre-dimension step), and the page-level edge. Per dispatch,
  author the consumers, flag the exact supplier IDs and consuming steps here,
  and leave their decisions `escalate` until the suppliers are authored and
  the uses reconciled.
- O5. Decisions: record `apply`-style items via
  `tools/step3-decisions.mjs record-item` with confidence 1 and examined
  dependency IDs only after authoring, contracts and checks; otherwise
  `escalate`. No `--owner`, no judge/audit stamps.
- O6. Checks before handoff: explicit-path `precheck`, `rendercheck`,
  `content-policy` (batch 16 manifest), `proof-contract --strict` on the
  batch-16 contract file, `item-dependency-levels` (run), `validate-plan`
  against `research/plan-spec.json`, `coverage-checklist` batch 16, and one
  batched `proof-layout.mjs` run over all changed item paths.
- O7. Refresh `research/<run>-cross-batch-dependencies.json` after dependency
  edits with `node tools/frontier-dependency-ledger.mjs refresh --run ...`.

## Progress log

(Item-by-item checkpoints are appended below as work proceeds: ID, exact
claim/conventions, source locators, dependencies, decisions, checks, open
gaps, next action.)

- **`def-categorical-and-geometric-quotients-of-classical-varieties`** (A,
  level 0): written; Definition + conventions paragraph (classical register,
  the geometric-to-categorical argument included); deps unchanged; precheck
  n/a (definition), rendercheck pass, contract entry written and strict-checked
  (boundaries item-specific). Decision pending final pass.
- **`def-reductive-and-linearly-reductive-over-c`** (A, level 0): written;
  Lie–Kolchin equivalence kept as a sourced parenthetical explicitly not used
  (resolves 3a finding 1 without a batch-18 edge); identity-component claims
  attributed to the bridge theorem via justified_by; precheck n/a,
  rendercheck pass, contract entry strict-checked.
- **`lem-complex-algebraic-groups-are-smooth`** (A, level 0): written with a
  direct classical-register proof (translations ⇒ homogeneous regularity via
  `cor-minimum-tangent-dimension-and-homogeneous-regularity`; scheme model
  smooth via `thm-regular-equals-smooth-over-perfect-field`; pure dimension via
  `lem-dimension-finite-union-components` + Noetherianity). Route deviates
  from the scaffold's bare scheme-theorem citation by adding the published
  classical dictionary items; deps updated accordingly (to be synced in the
  manifest). precheck PASS, rendercheck pass, contract 0 errors.
- **`lem-positively-graded-noetherian-algebra-is-finitely-generated`** (A,
  level 0): written; graded Nakayama induction; precheck PASS, contract clean.
- **`lem-invariant-polynomials-of-the-hyperbolic-gm-action-on-the-plane`** (B,
  level 0): written; single test value $t=2$ separates all off-diagonal
  monomials, so the proof is choice-free and avoids the scaffold's "all but
  finitely many roots of unity" phrasing; contract clean.
- **`thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group`**
  (A, level 1): the algebraic Lie bridge authored as a 12-step chain with 15
  imported facts (faithful embedding, smoothness, one-parameter subgroups,
  Cartan closed subgroups, radical and unipotent closure, additive Jordan
  decomposition, simultaneous diagonalisation, Weyl, Haar measure, compact
  complete reducibility). Clause
  (iv) stays conditional on the supplied $K$; no compact-existence direction is
  invoked. Contract 0 errors; needs Steps 5–6 review as the owner record
  states. The scaffold's `lem-nonaffine-connected-group-geometrically-connected`
  input was dropped: geometric integrality is not used anywhere in the proof,
  and that published item's home page is later in this run's plan order
  (#885), so keeping the link would have been an undeclared load-bearing
  forward reference on the spine (fwdcheck `forward-undeclared`).
- **`rem-finite-group-noether-theorem-does-not-supply-the-reductive-finiteness-theorem`**
  (B, level 1): written; scaffold provenance was `ai-generated`, which
  content-policy forbids for a remark, so the item is retagged `ai-altered`
  with the Brion URL and the claim is unchanged (the word "caveat" and the
  hypothesis comparison are preserved).
- **`lem-reynolds-operator-and-invariant-subring-properties`** (A, level 2):
  written; parts (a)–(d) with the graded part explicit; contract clean.
- **`lem-invariant-ring-of-finite-dimensional-module-is-finitely-generated`**
  (A, level 3): written; contract clean.
- **`lem-orbit-dimension-and-closed-orbits-for-complex-group-actions`** (A,
  level 5): written. **[F2] restated against the now-authored batch-15
  supplier `lem-orbit-map-fibres-and-stabilizer-dimension`** (its (a)–(c)
  match the consumer's use; the statement was read on disk at authoring time),
  and the closure-dimension argument made explicit. Decision recorded as
  `repaired`; ledger row kept `open` until the supplier pair certifies.
- **`def-stable-points-of-an-affine-action`** (A, level 6): definition record;
  contract clean.
- **`lem-stabilizer-dimension-semicontinuity`** (A, level 6): written using
  the published local fibre-dimension bound and the action-map supplier;
  component equidimensionality now derived from translations alone (no
  smoothness of a possibly nonreduced stabilizer). Decision `repaired`.
- **`thm-invariant-ring-finite-generation-and-affine-categorical-quotient`**
  (A, level 6): written as an 8-step proof covering (i)–(vi), including the
  radical-safe intersection formula and the full-classical-target descent;
  contract clean.
- **`lem-separation-of-disjoint-closed-invariant-subsets-by-an-invariant`**
  (A, level 7): written; contract clean.
- **`cex-closed-orbit-does-not-imply-stability-positive-dimensional-stabilizer`**
  (B, level 7): written with the `generation.role: counterexample` metadata the
  scaffold declares; precheck PASS.
- **`thm-stable-locus-geometric-quotient`** (A, level 8): written as an 8-step
  proof; sheaf identity re-derived locally from Reynolds naturality rather than
  quoted from the affine theorem's proof; contract clean.
- **`ex-gm-quotient-of-affine-plane`** (B, level 9): written; (iii) is phrased
  through the explicit trivialization $\Phi:\mathbf G_m\times\mathbf G_m\to X^s$
  (resolves Step-3a finding 2 without asserting any other principal-bundle
  theory); contract clean.

## Handoff summary

- **Completed IDs.** All 17 assigned items authored and registered:
  `def-categorical-and-geometric-quotients-of-classical-varieties`,
  `def-reductive-and-linearly-reductive-over-c`,
  `lem-complex-algebraic-groups-are-smooth`,
  `lem-positively-graded-noetherian-algebra-is-finitely-generated`,
  `lem-invariant-polynomials-of-the-hyperbolic-gm-action-on-the-plane`,
  `thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group`,
  `rem-finite-group-noether-theorem-does-not-supply-the-reductive-finiteness-theorem`,
  `lem-reynolds-operator-and-invariant-subring-properties`,
  `lem-invariant-ring-of-finite-dimensional-module-is-finitely-generated`,
  `lem-orbit-dimension-and-closed-orbits-for-complex-group-actions`,
  `def-stable-points-of-an-affine-action`,
  `lem-stabilizer-dimension-semicontinuity`,
  `thm-invariant-ring-finite-generation-and-affine-categorical-quotient`,
  `lem-separation-of-disjoint-closed-invariant-subsets-by-an-invariant`,
  `cex-closed-orbit-does-not-imply-stability-positive-dimensional-stabilizer`,
  `thm-stable-locus-geometric-quotient`, `ex-gm-quotient-of-affine-plane`.
  Both pages written:
  `library/algebraic-geometry/reductive-affine-invariant-theory-and-geometric-quotients{,-examples}.md`.
  Batch-16 proof contracts written with 17/17 strict entries; manifests
  resynced (deps only; statements, kinds, titles and page fields untouched so
  the Step-3a scope receipts stay current — `step3-decisions check --phase
  scope` reports no open entry for this pair).
- **Added suppliers.** None. No new item IDs were created; every helper the
  argument needs was already in the Step-1 scaffold, so the audit's "new-item
  dependency level" duty is vacuous here and all 17 levels match
  `tools/item-dependency-levels.mjs check`.
- **Checks actually run (all local, before handoff).**
  `tools/tsx-run.mjs tools/precheck.mts` over the 17 item paths: 13 proof-bearing
  items PASS, definitions/remarks `n/a`, 0 failing.
  `tools/rendercheck.mjs` over the 17 items + both pages: clean after repairing
  a shell-mangled `[F4]` paragraph in `lem-stabilizer-dimension-semicontinuity`.
  `tools/proof-contract.mjs research/frontier-40-...-batch-16.proof-contracts.json
  --strict`: 17/17 items, 0 errors. `tools/boundary-audit.mjs` on the same file
  with `--fail-on-contradicted --fail-on-template`: no contradicted rows; the
  only template cluster (three identical `endpoints` rationales) was
  differentiated. `tools/content-policy.mjs
  research/frontier-40-...-batch-16.pages.json`: 17 scoped items, 0 errors,
  0 warnings. `tools/coverage-checklist.mjs ... --require-destination`:
  55 rows, 0 errors, 1 previously explained low-yield warning.
  `tools/item-dependency-levels.mjs check --run ...`: pass.
  `tools/validate-plan.mjs research/plan-spec.json`: pass.
  `tools/manifest-integrity.mjs --run ...`: 54/54 pages, no scope drift.
  `tools/depcheck.mjs`: no finding for any of the 17 items (repo-wide
  `published-unaudited` rows elsewhere are pre-existing).
  `node tools/proof-layout.mjs <17 item paths>`: 71 steps, 0 defects.
  Item decisions: 13 `accept`, 4 `repaired`, confidence 1, examined deps =
  frontmatter `deps`; `step3-decisions check --phase final` reports no open
  entry for any of the 17.
- **Open obligations / flags.**
  1. `lem-orbit-map-fibres-and-stabilizer-dimension` and
     `lem-action-map-fibres-and-stabilizer-subscheme` (batch 15,
     `algebraic-group-actions-orbits-stabilizers-and-controlled-quotients`) were
     scaffold-only at entry and are now authored on disk; their statements were
     read and matched to the consumers' facts, and the four ledger rows were
     updated with the exact consuming steps. The rows stay `open` pending the
     supplier pair's own certification and Step-5 proof review, because those
     inputs are live and any later edit re-hashes the two consumer receipts.
  2. `thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group`
     is the owner-flagged local Lie bridge; it is authored in full and must be
     reviewed in Steps 5–6 as the owner record requires. Clause (iv) is
     conditional on the supplied compact $K$.
  3. `tools/frontier-dependency-ledger.mjs refresh --run ...` currently exits
     non-zero on an unrelated sibling item, `items/lem-upper-unitriangular-coordinate-ring-is-coconnected.md`,
     whose unquoted `title:` contains a colon ("Coconnected Hopf algebras: the
     coordinate ring of ...") and so fails the YAML parser the ledger uses.
     This is another pair's file and is not edited here; the unified ledger is
     therefore not yet re-merged, while this batch's own input file is complete.
     Retry the refresh once the sibling fixes the title.
  4. Pre-splice plan mismatches for this pair (batch-16 items absent from
     `plan-spec.json`) are the expected Step-4 splice work, reported rather than
     hidden.
- **Published concerns.** None new from this pair: no published item was edited,
  and no load-bearing use of a published item was found to be false. The only
  published-content observation is non-blocking: `def-reductive-and-linearly-reductive-over-c`
  keeps Brion's Lie–Kolchin parenthetical as a sourced remark and does not
  consume the higher-order unipotent/solvable page (Step-3a finding 1).

## Final state (checkpoint at handoff)

- After the last content edits (`thm-complete-reducibility-...` rebuild, the
  `[F4]` repair), the full local battery was re-run: precheck 13/13 proof items
  PASS, rendercheck clean over the 17 items + both pages, proof-layout 17 items
  / 71 steps / 0 defects, proof-contract `--strict` 17/17 with 0 errors,
  boundary-audit with `--fail-on-contradicted --fail-on-template` reporting no
  contradicted rows and no template cluster, content-policy 17 items 0/0,
  coverage 55 rows 0 errors, dependency levels pass, validate-plan pass,
  manifest-integrity 54/54 with no scope drift.
- All 17 item decisions were re-recorded after those edits (13 `accept`,
  4 `repaired`, confidence 1, examined deps = current frontmatter `deps`);
  `step3-decisions check --phase final` reports **0 open items for this pair**
  as of this checkpoint. Because the receipts hash each item's transitive
  in-run inputs and sibling pairs sharing the closure are still writing, a
  later sibling edit can re-stale a receipt; the engine's Step-3 pre-gate
  recertification pass (CLAUDE §21) re-records them against the frozen
  content, and Steps 5–8 do the independent review.
- The unified frontier ledger is the one handoff item this dispatch could not
  close: `tools/frontier-dependency-ledger.mjs refresh --run
  frontier-40-geometry-braids-rep-27` exits 1 parsing the unrelated sibling
  item `items/lem-upper-unitriangular-coordinate-ring-is-coconnected.md`
  (unquoted `title:` containing a colon). This batch's own input file
  `research/frontier-40-...-batch-16.cross-batch-dependencies.json` is complete,
  valid JSON, and carries the four updated rows; the serial reconciler or the
  sibling pair must fix that title before the unified file can re-merge.
