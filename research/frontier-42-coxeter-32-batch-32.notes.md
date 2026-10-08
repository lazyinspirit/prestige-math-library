# Batch 32 notes — Sortable Projections and Finite Cambrian Lattices

Run `frontier-42-coxeter-32`, role beta, label `batch-32`, covers **CG-29**
(`sortable-projections-and-finite-cambrian-lattices`, order 1780, category
`coxeter-groups`, A page plus its example companion). All construction,
checks and records below refer to this pair only.

Files written (all inside the assigned write scope; no published content,
shared plan, engine state or verdict was edited):

| file | content |
|---|---|
| `research/frontier-42-coxeter-32-batch-32.pages.json` | 5 items: 3 on the A page, 2 on the B page |
| `research/frontier-42-coxeter-32-batch-32.coverage.json` | 3 sources × 2 pages, 26 harvested results, 6/6 full-text fetch stamps |
| `research/frontier-42-coxeter-32-batch-32.cross-batch-dependencies.json` | 50 cross-batch reviews (48 item edges + 2 page edges), status `open` (Step 3 closes them) |
| `research/frontier-42-coxeter-32-step1-<item>.json` | 5 readiness records, all `ready` |
| this file | batch notes |

The run-level `research/frontier-42-coxeter-32-cross-batch-dependencies.json`
was only regenerated through `tools/frontier-dependency-ledger.mjs refresh`
(the tool owns that file); no edit was made by hand.

## Owner direction, design and plan reconciliation

- `research/frontier-42-coxeter-32-owner-authoring-direction.md` was read before
  any item was constructed and is binding. It demands the richest
  mathematically sound promised claims, complete local proofs (no citation-only
  or empty scaffolds), correct dependency order and preserved choice
  hypotheses. Nothing in this batch conflicts with it.
- Design section `research/plan-coxeter-groups-track.md` L578 (CG-29) was read in
  full. Its three A-page local supplier contracts
  (`def-cg-recursive-sortable-projection-and-cambrian-congruence`,
  `thm-cg-sortable-meet-join-closure-and-cambrian-quotient`,
  `thm-cg-sortable-projection-greatest-element-and-interval-fibers`), its B
  companion contract and its `requires` edges match the manifest.
- `research/plan-spec.json` lists CG-29/CG-29-B with the same ids, orders
  1780/1781 and the same `requires`
  (`coxeter-euler-forms-and-sortable-chamber-cones`,
  `finite-lattice-projections-and-coxeter-chain-labels`; B requires A).
  **No design/plan conflict to record.**
- The only plan-level finding touching this pair is the `validate-plan`
  observation `[redundant-prereq]`: the A page names
  `finite-lattice-projections-and-coxeter-chain-labels` directly although it
  already reaches that page through `coxeter-euler-forms-and-sortable-chamber-cones`.
  Both the design and `plan-spec.json` list both edges, and the shared plan is
  outside this role's write scope, so the finding is recorded here rather than
  edited. It is a redundancy warning, not an error (`validate-plan` exit 0).

## Inventory and dependency levels

| page | item | kind | level | in-run deps |
|---|---|---|---|---|
| A | `def-cg-recursive-sortable-projection-and-cambrian-congruence` | definition | 27 | 7 |
| A | `thm-cg-sortable-meet-join-closure-and-cambrian-quotient` | theorem | 28 | 26 |
| A | `thm-cg-sortable-projection-greatest-element-and-interval-fibers` | theorem | 29 | 18 |
| B | `ex-cg-a3-sortable-subset-and-a-three-element-fiber` | example | 30 | 7 |
| B | `ex-cg-cambrian-quotient-of-s3-and-two-orientations` | example | 30 | 7 |

Levels follow the official rule (level 0 with no in-run item dependencies, else
one plus the maximum in-run `deps` level); the chains run through the
prerequisite pairs of batches 29, 23 and 5 and the HH-1 supplier page
scaffolded in batch 2, and published or other out-of-run suppliers contribute
0. `tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` reports
no finding for any batch-32 item and no cycle.

Step 3b authoring is in progress in the dispatch order. The level-27 definition and level-28 meet/join theorem are authored and checkpointed; the level-29 fiber theorem and both level-30 examples remain to be authored. The old readiness-hash summary below was computed before the current dependency reconciliation and is superseded: the definition's forward `justified_by` edge to the later fiber theorem has been removed under the dispatch rule, and the meet/join theorem's direct supplier list and level were synchronized. Its earlier escalation receipt now requires owner resolution because the manifest changed after the receipt was recorded. The definition-justifications scaffold registry still names the later fiber theorem; this registry mismatch is reported as an owner follow-up and is not treated as a prerequisite or an author decision.

## Sources

Two independent treatments plus a textbook are harvested per the run
requirement; all six source rows carry `fetch_verified` full-text stamps
(`tools/source-fetch-check.mjs --stamp`, 2026-10-07).

| source | URL | locator read |
|---|---|---|
| Reading–Speyer, *Sortable elements in infinite Coxeter groups*, arXiv:0803.2722v3 | `https://arxiv.org/pdf/0803.2722` | §6 at statement level (supplies the prerequisite page only); §7 (pp. 37–40) Theorems 7.1/7.3/7.4 with proofs and Remark 7.5 read in full. Stamp: 1,352,958 bytes, sha16 `5e0720cac6007bd6`, 62 pp. |
| Reading, *Sortable elements and Cambrian lattices*, arXiv:math/0512339v1 | `https://arxiv.org/pdf/math/0512339` | §2 at statement level; §3 (pp. 8–11) Proposition 3.1, Proposition 3.2, Corollary 3.3, proof of Theorem 1.2, upward projection π^↑ via Lemmas 3.4–3.6, Proposition 3.7, proof of Theorem 1.1, Remark 3.8, Lemma 3.9 read in full. Stamp: 309,472 bytes, sha16 `e2040043997930aa`, 23 pp. |
| Björner–Brenti, *Combinatorics of Coxeter Groups*, GTM 231 | `https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf` | Ch. 2 §2.4 (Prop. 2.4.4, parabolic factorization) and Ch. 3 §3.1–3.2 (Def. 3.1.1; Props. 3.1.2/3.1.5/3.1.6; Thm. 3.2.1; Cor. 3.2.2; Lemmas 3.2.3–3.2.4). Stamp: 4,320,702 bytes, sha16 `ad1e7d9260127bb2`, 370 pp. |

Every harvested result has a disposition: 13 `included` (with item IDs), 5
`inline` (absorbed into item proofs, with item IDs), 5 `deferred` (with valid
destinations: `coxeter-euler-forms-and-sortable-chamber-cones` for the RS §6 and
Reading §2 material, `weak-order-inversions-and-lattice-operations` for the
Björner–Brenti weak-order lemmas), and 3 `out-of-scope` with specific reasons
(e.g. RS Theorem 7.4's bijection, which is not needed by this pair's claims, and
Reading's W-Catalan counting and Lemma 3.9). No source failed and no source was
dropped, so no `source_resolution` record was required. This session re-read the
extracted RS §7 proof of Theorems 7.1/7.3 to verify the join-preservation case
analysis and re-ran every worked computation below.

## Construction and repairs

**A page.** `thm-cg-sortable-meet-join-closure-and-cambrian-quotient` (RS Thm 7.1
and Thm 7.3 with their proofs): meet closure and the inversion-set intersection
identity via rank-two recognition and alignment; join closure via
greatest-sortable-below; the initial-letter join formula via the cone criterion,
negative skip roots and the initial-case cover decomposition; meet/join
preservation by the three-case induction on (rank, ℓ(x∨y)) together with the
elementary order isomorphism `u ≤ v ⇔ su ≤ sv` for elements lengthening under a
simple generator (length identity plus subadditivity of §2). The mixed case now
mirrors the source exactly: the both-above argument applies verbatim to the pair
`(x, s∨y)`, and its induction step is used in the rotated system `scs` at the
pair `(sx, s(s∨y))`, whose join has length ℓ(x∨y)−1. `thm-…-interval-fibers`
(Reading 2005 Lemmas 3.4–3.6 and Proposition 3.7): the prefix identity
`(ww₀)_J = w_J w₀(J)` is proved through inversion sets and opposition; the
terminal and initial recursions for the upper projection, its monotonicity and
idempotence, `π∘u = π`, `u∘π = u`, and the interval-fiber theorem closing the
interval criterion of the finite-lattice prerequisite page.

**B page** (split into two examples so that the rank-two tables and the rank-three
scan stay readable): S₃ for both orientations, with all six sorting words, the
five fibers and both meet/join tables; and A₃ for `c = s₁s₂s₃`, with the full
left-descent scan of all 24 elements, the 14-element sortable subset, the six
nontrivial fibers (including the three-element fiber of `s₃`), the displayed
upper endpoints, the two displayed join/meet identities, and the second
orientation `c′ = s₁s₃s₂` with its five-element fiber of `s₂`.

Repairs made after re-derivation (each regenerated through
`/tmp/b32/gen-manifest.mjs`, with readiness records re-recorded only where the
hash changed):

1. **Mixed-case phrasing (A, thm 2)** tightened to the source's Case 3 (above);
   mathematically equivalent, strictly sharper about where the induction
   hypothesis is applied.
2. **Prefix notation (B, S₃ example).** The recursion text wrote
   `(s₂s₁)_{{s₁}}`, but in the definition's convention the subscript names the
   parabolic's generators, `⟨s₁⟩ = S∖{s₁} = {s₂}`, and the displayed value
   `π_{s₂}(s₂) = s₂` is the `W_{{s₂}}`-prefix. The subscript was corrected to
   `{s₂}` and a clarifying parenthetical added.
3. **False equality (B, A₃ example).** The statement read
   `w₀ = s₁s₂s₁s₃s₂s₁ = s₁s₂s₃s₁s₂s₃`. The second word is **not** `w₀`: in type
   A₃ it evaluates to the length-four element `3412` (equivalently `(s₁s₂s₃)²`),
   while `w₀ = 4321` has length six. It was replaced by the verified alternative
   reduced word `s₁s₂s₃s₁s₂s₁` (evaluates to `4321`, length 6, hence reduced).
   All other displayed A₃ values were re-derived and are unchanged; the item's
   strategies never used the false expression.
4. **Unused and inadmissible dependency removed (B, A₃ example).** The A₃
   example had listed the S₃ example in its `deps`. The S₃ example's statement
   is `ai-generated` (a legitimate, non-load-bearing example), and item-mode
   `content-policy` forbids an `ai-generated` statement as a `deps` target —
   the A₃ example never links to or uses the S₃ example, and its readiness
   reason does not cite it, so the edge was removed. The recomputed level of
   the A₃ example is 31 (not 32); no content was lost.

No claim was weakened, no inventory was padded, no prerequisite was omitted for
space, and no page split is needed (3 + 2 items, far below the 100-item cap).

## Exact computations (verification evidence, not proof inputs)

All B-page numbers and the A-page endpoint formula were checked with exact
permutation arithmetic in Reading's convention (`(uv)(x) = u(v(x))`, `w₀`
longest) via `/tmp/b32/*.mjs` scratch scripts:

- `cambrian.mjs`: A₂ with both orientations and A₃ with `c = s₁s₂s₃` and
  `c′ = s₁s₃s₂` — sortable counts 5, 5, 14, 14; every fiber is exactly a
  closed weak-order interval with bottom `π_c(w)` and top `u_c(w)`; `u` is
  constant on fibers; `π∘u = π`, `u∘π = u`, `u` idempotent and order
  preserving; `u_c(w) = π_{c⁻¹}(ww₀)w₀` uniformly; meet and join preservation
  holds for **all 36** S₃ pairs and **all 576** S₄ pairs.
- `s3tables.mjs`: reproduces the two displayed S₃ meet/join tables and the
  fiber profile 1, 1, 2, 1, 1 for both orientations.
- `check-b-items.mjs`: the greedy c^∞-scan gives exactly the displayed sorting
  words and block sequences — the 14 listed A₃ elements are precisely the weakly
  decreasing ones, the 10 listed others precisely the failures; the fiber
  member sets match (ii) element by element (with the commuting relation
  `s₁s₃ = s₃s₁` accounting for the alternative spellings).
- `check-a3.mjs`: `u_c(s₂)=s₂s₁`, `u_c(s₂s₃)=s₂s₁s₃s₂`,
  `u_c(s₁s₃)=s₁s₃s₂s₁`, `u_c(s₂s₃s₂)=s₂s₁s₃s₂s₁`; the displayed (iv) join and
  meet (`s₃s₂s₁ ∨ s₂s₃s₂ = s₂s₃s₂s₁`, `s₃s₂s₁ ∧ s₂s₃s₂ = s₃s₂`) and the
  corresponding π-values; the `c′ = s₁s₃s₂` fiber of `s₂` has size 5 with
  exactly the member set `{s₂, s₂s₁, s₂s₃, s₂s₁s₃, s₂s₁s₃s₂}`; and the `w₀`
  counterexample of repair 3 (`3412 ≠ 4321`).

The item texts state that no computer search is used as a proof input; the
computations above are recorded as evidence only, exactly as the readiness
records say.

## Checks run — actual results

| check | command (abbreviated) | result |
|---|---|---|
| whole-run manifest deps | `tools/manifest-deps.mjs` on all 32 batch manifests | 293 items, 0 normalized, **0 errors** |
| whole-run scaffold policy | `tools/content-policy.mjs --manifest-only` on all 32 manifests | 293 scoped items, **0 errors, 0 warnings** |
| dependency levels | `tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | exit 1; the only 2 findings are the empty batch-25 pages (below); **no finding for batch 32**, no cycle |
| readiness | `tools/step1-decisions.mjs check --run frontier-42-coxeter-32` | 293 items, 293 ready, 2 open work items — both the batch-25 empty pages; batch 32 fully closed |
| dependency ledger | `tools/frontier-dependency-ledger.mjs refresh --run …` | batch 32 in `reviewed_batches`; **50/50 batch-32 edges reviewed**; `unreviewed_batches: [25]`; `orphaned_reviews: 0` |
| coverage | `tools/coverage-checklist.mjs --require-destination research/…-batch-32.coverage.json` | 2 pages, 26 harvested, **0 errors, 1 warning** (`coverage-low-yield`, see below) |
| full-text stamps | `tools/source-fetch-check.mjs --coverage research/…-batch-32.coverage.json` | **6/6 fetch-verified, 6/6 resolved**, 0 documented drops |
| URL liveness | `tools/url-sweep.mjs --coverage research/…-batch-32.coverage.json` | **3/3 live**, 0 failed, 3 citation decisions, 0 source drops |
| source backing | `tools/source-backing.mjs --coverage research/…-batch-32.coverage.json --liveness research/…-url-liveness.json` | 4 authored results across 1 file, **every one still backed** |
| plan | `tools/validate-plan.mjs research/plan-spec.json` | exit 0; the only page finding is `[redundant-prereq]` (recorded above) |
| scope | `tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | 64 pages owed, 64 in the manifests, no scope drift, exit 0 |
| drift | `tools/drift-review-check.mjs --run frontier-42-coxeter-32` | 32 pages reviewed, 0 spec edits, no blocked edges, exit 0 |

External-reference boundary: at Step 1 the engine's external-record check is the
`content-policy --manifest-only` pass above (recorded-not-proved items and
`external_refs`/`external_dependency` fallbacks are retired; the item-level
`extcheck` gate runs after authoring, when manifest subjects resolve to item
carriers). No batch-32 item carries `external_refs`, `external_dependency`,
`proved_here` or any other retired external-record field, and every dependency
resolves to an in-run item.

## Unresolved findings (all outside this batch)

1. **Batch 25 empty scaffold** — `coxeter-descents-poincare-polynomials-and-growth`
   and its companion page have empty inventories; this is the only open work in
   `step1-decisions` and `item-dependency-levels` and the only unreviewed batch
   in the ledger. It belongs to batch 25's worker, not to this pair, and it is
   the sole blocker for the run-level `1-scaffold` gates.
2. **`coverage-low-yield` warning (7/19 on the A page)** — expected and
   evidenced: 4 harvested results are `inline` in the item proofs, 5 are
   `deferred` to named pages (`coxeter-euler-forms-and-sortable-chamber-cones`,
   `weak-order-inversions-and-lattice-operations`), and 3 are `out-of-scope`
   with specific reasons, all recorded in the coverage file; the checker
   validates the destinations (0 errors) and the warning asks Alpha to confirm
   the declines at Step 3.
3. **Run-level liveness artifact caveat** — `research/frontier-42-coxeter-32-url-liveness.json`
   was generated before this batch's coverage existed and carries no rows for
   the two arXiv URLs; `source-backing` deliberately treats URLs unknown to the
   sweep as *not* dead, and the direct evidence for this batch is the fresh
   batch sweep (3/3 live) plus the full-text fetch stamps (6/6). The engine's
   `url-liveness` gate regenerates the run-level artifact over all coverage
   files once the stage's units are complete.
4. **Same-class dependency defects outside this batch** — a read-only scan of
   all 32 manifests for `deps` edges into `ai-generated` statements (forbidden
   as dependency targets by SCHEMA.md and enforced by item-mode
   `content-policy`) found, after the repair above, six further edges in other
   batches: `ex-cg-s4-rank-three-interval-mobius-from-recurrence` →
   `ex-cg-s4-rank-three-interval-chain-labels-and-lex-first-chain` (batch 16),
   `ex-cg-b2-davis-complex-octagon-and-boundary-circle` →
   `ex-cg-a2-davis-complex-hexagon-and-boundary-circle` (batch 26),
   `ex-cg-distributive-weak-intervals-of-fully-commutative-elements` →
   `ex-cg-heap-of-one-three-two-in-a3` and
   `ex-cg-nondistributive-weak-interval-of-a-non-fully-commutative-element` →
   `ex-cg-heap-of-one-two-one-in-a2-and-long-braid` (batch 28), and
   `ex-cg-skips-and-cone-walls-for-a-sorting-word-in-a3` and
   `ex-cg-source-sink-move-and-sign-convention` →
   `ex-cg-euler-and-skew-form-in-a3` (batch 29). They are outside this batch's
   write scope and were not touched; they are flagged here because they will
   fail the Step-3 `content-policy-items` gate unless their owning workers
   remove the unused edges or re-prove the needed step inline.

## Published defects, cross-batch changes, AC

- No published defect was identified in this pair's scope; the pair's
  prerequisites are all in-run scaffolds (batches 29, 23, 5 and the HH-1
  supplier page in batch 2) — no published item is a dependency of this pair —
  and none of them was found defective at statement level. No
  published-consumer repair is claimed or needed here.
- No cross-batch change, new prerequisite pair or placement change is
  requested; the 50 cross-batch rows record the exact required claims and uses
  for Step 3 and stay `open` there.
- No item uses the Axiom of Choice or any incompatible-axiom branch; each item
  states "No Choice is used", and no Recorded result or
  `deferred-set-theory-beyond-choice` path is consumed anywhere in the pair.

## Handoff

Batch 32's artifacts are complete and self-consistent on disk: 5 items with
explicit stable `deps`, levels recomputed and checked, 5 `ready` records with
examined dependency IDs and evidence, 26 dispositioned harvested results with
full-text stamps, and 50 reviewed cross-batch edges. The engine owns the
`1-scaffold` gates and will evaluate them over the whole run once batch 25
lands; a readiness record is not mathematical approval — Step 3 is the
independent review of every proof.
