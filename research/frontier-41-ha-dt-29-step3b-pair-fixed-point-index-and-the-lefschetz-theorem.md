# Step 3b — pair `fixed-point-index-and-the-lefschetz-theorem`

Run `frontier-41-ha-dt-29`; role `alpha-high`; batch 8; label
`step3b-pair-fixed-point-index-and-the-lefschetz-theorem-4a16abd127329b2b`.

- A page `fixed-point-index-and-the-lefschetz-theorem` (plan order 543, 25 items) —
  `library/differential-topology/fixed-point-index-and-the-lefschetz-theorem.md`.
- B page `fixed-point-index-and-the-lefschetz-theorem-examples` (plan order 544, 5 items) —
  `library/differential-topology/fixed-point-index-and-the-lefschetz-theorem-examples.md`.
- Manifest `research/frontier-41-ha-dt-29-batch-8.pages.json` (batch 8 is this pair only).
- Scope receipt `research/frontier-41-ha-dt-29-step3a-review-fixed-point-index-and-the-lefschetz-theorem.json`
  (`sufficient`); item decisions `research/frontier-41-ha-dt-29-step3b-review-<id>.json`.
- Checkpoint file (this file) is the dispatch report: completed IDs, checks actually run,
  added suppliers, published concerns, open obligations.

## Owned IDs (30) and authoring order

Level 0: `def-local-fixed-point-index`, `def-nondegenerate-fixed-point`,
`lem-a-closed-discrete-subset-of-a-compact-space-is-finite`,
`lem-fixed-points-are-graph-diagonal-intersections`,
`lem-the-orientable-double-cover-of-a-smooth-manifold`.
Level 1: `def-global-geometric-lefschetz-number`,
`lem-graph-transversality-is-fixed-point-nondegeneracy`,
`lem-local-fixed-point-index-is-invariant-under-diffeomorphism-conjugation`,
`lem-the-derivative-lift-of-a-smooth-self-map-to-the-orientation-double-cover`.
Level 2: `lem-fixed-point-sum-of-the-two-lifts-of-a-self-map`,
`lem-local-fixed-point-index-is-coordinate-and-neighbourhood-independent`.
Level 3: `thm-index-of-a-nondegenerate-fixed-point`.
Level 4: `lem-local-fixed-point-index-splits-under-perturbation`,
`lem-the-local-intersection-sign-of-the-graph-and-diagonal`,
`prop-small-time-flow-fixed-point-indices-agree-with-vector-field-zero-indices`.
Level 5: `rem-isolated-does-not-imply-nondegenerate`.
Level 7: `def-algebraic-lefschetz-number`.
Level 8: `lem-diagonal-class-expansion-gives-the-alternating-trace`,
`lem-lefschetz-numbers-of-the-two-lifts-sum-to-twice-the-base-lefschetz-number`.
Level 9: `lem-lefschetz-hopf-index-formula-for-nondegenerate-fixed-points`.
Level 10: `thm-lefschetz-hopf-index-formula`.
Level 11: `cor-lefschetz-number-is-homotopy-invariant`,
`ex-a-degenerate-isolated-fixed-point-with-nonzero-local-index`,
`ex-degree-d-map-on-a-sphere-has-lefschetz-number-one-plus-minus-d`.
Level 12: `cor-lefschetz-number-of-the-identity-is-the-euler-characteristic`,
`thm-lefschetz-fixed-point-theorem`.
Level 13: `rem-lefschetz-index-formula-recovers-poincare-hopf`,
`cex-vanishing-lefschetz-number-allows-fixed-points`,
`ex-a-torus-translation-has-zero-lefschetz-number-and-no-fixed-points`,
`ex-rotations-of-the-two-sphere-and-their-lefschetz-number`.

## Open obligations at entry

1. Sibling in-run suppliers are not yet authored as `items/*.md` files (checked at entry):
   batch 7 page `vector-field-index-euler-characteristic-and-poincare-hopf` —
   `def-isolated-zero-and-local-index-of-a-vector-field`, `def-nondegenerate-zero-of-a-vector-field`,
   `thm-index-of-a-nondegenerate-vector-field-zero`,
   `lem-local-index-is-additive-under-a-transverse-perturbation`,
   `lem-vector-field-index-is-independent-of-chart-ball-and-trivialization`,
   `lem-negation-scales-the-local-index-by-minus-one-to-the-dimension`,
   `thm-poincare-hopf-for-closed-manifolds`,
   `cor-closed-odd-dimensional-manifolds-have-zero-euler-characteristic`,
   `def-euler-characteristic-of-a-compact-manifold`,
   `prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions`;
   batch 2 page `intersection-pairings-self-intersection-and-euler-classes` —
   `def-geometric-intersection-pairing-on-a-closed-oriented-manifold`,
   `thm-geometric-intersection-equals-the-poincare-dual-cup-pairing`;
   batch 4 — `prop-morse-handle-chain-complex-computes-singular-homology`.
   These are consumed (by the exact consumer IDs and steps flagged below) only through their
   scaffold interfaces read from the sibling `*.pages.json` manifests. Consumers stay
   `escalate` until the suppliers are authored and the actual uses reconcile.
2. Published concern (recorded by Step 3a, not introduced here): the three published items
   `def-local-oriented-intersection-sign`, `def-oriented-intersection-number`,
   `thm-intersection-number-under-factor-interchange` are `published-unaudited` in depcheck.
   Statement and proof text are present and were read; the missing receipt is an owner action.
3. `local-coefficients-twisted-homology-and-duality` is a declared page prerequisite that the
   chosen (double-cover) route consumes in no item — recorded in the batch notes §2.2.

## Log

### Authored items (precheck + rendercheck clean at this point)

1. `def-local-fixed-point-index` — definition; convention `I−Df`; radius existence argued;
   no orientation of `M`; links all in deps.
2. `def-nondegenerate-fixed-point` — definition; equivalence with `1` not an eigenvalue;
   isolatedness by the inverse function theorem; `n=0` allowed.
3. `lem-a-closed-discrete-subset-of-a-compact-space-is-finite` — choice-free proof via the
   comprehension cover `{X∖S} ∪ {U open : U∩S a singleton}` (no selection of a `U_s` for
   each `s`).
4. `lem-fixed-points-are-graph-diagonal-intersections` — repaired the scaffold's preimage
   formula: `γ_f^{-1}(Δ_M) = Fix(f)`, not `{(x,x): x ∈ Fix(f)}` (the scaffold text mixed the
   graph map with the diagonal map). Claim preserved.
5. `lem-the-orientable-double-cover-of-a-smooth-manifold` — built as the tangent-space model
   `{(x,o_x)}` with basis of sheets; repaired the scaffold's "connected" clause (false in the
   orientable case) and the "regular" clause (regularity only when `M̃` is connected, i.e. `M`
   nonorientable). Deps extended with five published suppliers
   (`lem-connected-covers-of-smooth-manifolds-have-a-canonical-smooth-structure`,
   `thm-compactness-is-invariant-under-finite-sheeted-coverings`,
   `prop-local-path-connectedness-lifts-and-descends-along-coverings`,
   `thm-connected-and-locally-path-connected-implies-path-connected`,
   `prop-topological-manifolds-are-locally-compact-and-locally-path-connected`,
   `prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure`).
   The homological orientation cover of `def-orientation-local-system-and-orientation-cover`
   is recorded, in a Remark, as a canonically comparable model not used below (the
   identification with rays in `det T_xM` is not developed).
6. `def-global-geometric-lefschetz-number` — finiteness of `Fix(f)` through
   closed+discrete+compact; no orientation, no choice.
7. `lem-graph-transversality-is-fixed-point-nondegeneracy` — sum-of-tangent-spaces computed
   directly: `(a,b) ∈ TΓ+TΔ ⟺ b−a ∈ im(Df_x−I)`, so transversality ⟺ `Df_x−I` surjective ⟺
   invertible (rank–nullity). Deps extended with `thm-rank-nullity`,
   `thm-chain-rule-for-differentials-of-smooth-maps`,
   `prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure` and
   `def-the-diagonal-of-a-space`.
8. `lem-local-fixed-point-index-is-invariant-under-diffeomorphism-conjugation` — proved for
   *arbitrary* charts, so it does not presuppose the (later) chart-independence lemma:
   second-order Taylor comparison `g' = A^{-1}g∘k + o(|g∘k|)`, straight-line homotopy, then
   degree multiplicativity for the radial maps. Deps extended with
   `cor-multivariable-taylor-formula-with-peano-remainder` and
   `thm-regular-value-formula-for-degree`.

### Open obligation 1 (RESOLVED 2026-10-06 by the owner's proceed receipt — see the completion log below) — derivative lift needs invertibility

The scaffold statement of `lem-the-derivative-lift-of-a-smooth-self-map-to-the-orientation-double-cover`
("every smooth map has two lifts, `f̃(x,o_x)=(f(x),Df_x(o_x))`") is false as written:
when `Df_x` is singular, `Df_x(o_x)` is not a ray, and, more seriously, a general smooth
self-map of a nonorientable closed manifold need not lift to the orientation double cover at
all. Exact witness class: `M = RP²×S¹`, `f = (g∘pr_{S¹}, b₀)` with `g:S¹→RP²` the generator
loop; then `f_*(π₁M) = ⟨x⟩` where `w(x)=1`, so `f_*(\ker w) ⊄ \ker w` and the lifting
criterion ([[thm-covering-space-lifting-criterion]]) gives no lift; yet `L(f)=1=I(f)`, so the
theorem is not in question — only this route. Repair taken here: state the derivative lift for
local diffeomorphisms (where `Df_x` is invertible everywhere) and carry the lift as a
hypothesis in the transfer items. The general nonorientable case of
`thm-lefschetz-hopf-index-formula` (all smooth `f`) is *not* proved by the double-cover route;
it is escalated to the owner with remedy options (twisted-coefficient diagonal argument of the
design via `local-coefficients-twisted-homology-and-duality`, or a chain-level/simplicial
argument). Consumers: `lem-fixed-point-sum-of-the-two-lifts-of-a-self-map`,
`lem-lefschetz-numbers-of-the-two-lifts-sum-to-twice-the-base-lefschetz-number`,
`thm-lefschetz-hopf-index-formula`; `thm-lefschetz-fixed-point-theorem` is instead routed
through the published finite-complex theorem, which is orientation-free.

---

# Completion log — author pass 2026-10-06 (dispatch `step3b-pair-fixed-point-index-and-the-lefschetz-theorem-c9e5de1ac39e69e8`)

## 1. Corrections with witnesses (final texts on disk)

1. **`prop-small-time-flow-fixed-point-indices-agree-with-vector-field-zero-indices` —
   the scaffold statement is false.** Exact witness: `X(u₁,u₂)=(u₁²,u₂²)` on `ℝ²` has an
   isolated (degenerate) zero at the origin, but the flow
   `φ_t(u₁,u₂)=(u₁/(1−t u₁), u₂/(1−t u₂))` fixes *every* point of both punctured coordinate
   axes for every `t≠0`, so the time-`t` fixed set is not isolated and the proposition's
   conclusion is false as scaffolded. GP's Proposition assumes "for `t≠0` the maps `f_t`
   have no fixed point in `U` except the origin" (verified against the complete PDF;
   Ch. 3 §5, printed pp. 134–137), and GP's own Poincaré–Hopf derivation instead uses the
   normal-projection family `f_t(x)=π[x+t v(x)]`, whose fixed points are exactly the zeros
   of `v`. **Repair:** part (i) = the tangent family `f_t(x)=x+tX(x)+O(t²)` at an isolated
   zero *with the isolation hypothesis stated explicitly*: `ind_p(f_t)=(−1)^n ind_p X`
   (`t>0`) and `ind_p(f_{−t})=ind_p X`; part (ii) = the genuine flow at a **nondegenerate**
   zero (isolation proved via the inverse function theorem / continuity equation); a closing
   counterexample note records the degenerate witness. Deps added:
   `thm-smooth-inverse-function-theorem-on-manifolds`,
   `thm-degree-is-invariant-under-proper-smooth-homotopy`,
   `lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative`.
   Proof provenance → `ai-altered`; locator updated to GP pp. 134–137.
2. **`rem-lefschetz-index-formula-recovers-poincare-hopf` — rewritten** onto the same
   normal-projection family: for a proper embedding take a closed tubular neighbourhood with
   nearest-point retraction `r` and set `f_t(x)=r(x−tX(x))`; the fixed points of `f_t` are
   *exactly* the zeros of `X`; `f_t` is homotopic to the identity, so `L(f_t)=χ(M)`; the
   tangent-family clause applied to `−X` together with the negation law gives
   `ind_p(f_t)=ind_p X`; Lefschetz–Hopf then gives `Σ_p ind_p X = χ(M)`. This avoids the
   false flow-isolation step entirely. Deps updated (added
   `cor-lefschetz-number-is-homotopy-invariant`, `thm-weak-whitney-proper-embedding-theorem`,
   `thm-euclidean-tubular-neighbourhood-theorem`,
   `cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction`,
   `lem-negation-scales-…`; removed `def-local-and-global-flow`).
3. **`lem-local-fixed-point-index-splits-under-perturbation` — step 4.1 bookkeeping
   corrected**: the global index sum is unchanged only in the isolating case
   `V∩Fix(f)={x}`; fixed points of `f` inside `supp ρ` other than the perturbed ones were
   previously dropped silently. `[F2]` now cites clause (ii) of
   `lem-local-index-is-additive-under-a-transverse-perturbation` (batch 7).
4. **`lem-local-fixed-point-index-is-invariant-under-diffeomorphism-conjugation` — final
   step rewritten** (the scaffold inferred a map identity from independence of degree):
   `deg = deg(Φ)·deg(σ)` by radial interpolation, `deg σ = sign det A` via the homotopy
   `t↦k(tv)/|k(tv)|` to `ρ_A`, then multiplicativity. Recorded `repaired`, confidence 1.

## 2. Owner-resolved obligation (was "Open obligation 1")

The owner's Step-3a `proceed` receipt
(`research/frontier-41-ha-dt-29-step3a-owner-fixed-point-index-and-the-lefschetz-theorem.json`,
sha256 `4c45b82992527e91172b206b17d7f5608cf75c049a188ec38a8201676a68231e`) integrated the
twisted-coefficient diagonal route and restored the all-map / nonorientable claim; it is
current for the present scope hash (the pair does not appear in `step3-decisions check`
work rows). Two **auditor-created additions** (absent from the immutable pre-author
baseline; the engine certifies this class after a successful dispatch — no self-review
loop, ordinary records otherwise complete):

- `lem-orientation-coefficients-as-deck-eigenspaces-and-product-pairings` (`dependency_level 8`)
- `lem-orientation-twisted-diagonal-realizes-the-lefschetz-trace` (`dependency_level 9`)

`thm-lefschetz-hopf-index-formula` now states `I(f)=L(f)` for **every** smooth self-map with
isolated fixed points of a closed, possibly disconnected or nonorientable manifold, with the
twist lemma as `[F3]`; the derivative-lift item remains correct for local diffeomorphisms
only, and `lem-lefschetz-numbers-of-the-two-lifts-…` carries the `τ`-commuting lift as an
explicit hypothesis. The `requires` entry `local-coefficients-twisted-homology-and-duality`
is now consumed: the additions cite its published items
(`def-homology-and-cohomology-with-local-coefficients`,
`def-cup-and-cap-products-with-local-coefficient-pairings`,
`thm-poincare-duality-with-the-orientation-local-system`,
`lem-canonical-twisted-fundamental-classes-over-compact-subsets`,
`thm-excision-and-mayer-vietoris-with-local-coefficients`). The batch-8 coverage row was
refreshed to match; the Step-1 batch notes file is a scaffold-era record and still
describes the withdrawn double-cover plan (and its 25-item inventory), so this report
supersedes that description rather than rewriting the historical notes.

## 3. Decision state at handoff (all 32 owned items)

**Closed, confidence 1 (18).**
`def-local-fixed-point-index`, `def-nondegenerate-fixed-point`,
`lem-a-closed-discrete-subset-of-a-compact-space-is-finite`,
`lem-fixed-points-are-graph-diagonal-intersections`,
`lem-the-orientable-double-cover-of-a-smooth-manifold`,
`def-global-geometric-lefschetz-number`,
`lem-graph-transversality-is-fixed-point-nondegeneracy`,
`lem-the-derivative-lift-of-a-smooth-self-map-to-the-orientation-double-cover`,
`lem-fixed-point-sum-of-the-two-lifts-of-a-self-map`,
`lem-local-fixed-point-index-is-coordinate-and-neighbourhood-independent`,
`lem-the-local-intersection-sign-of-the-graph-and-diagonal`,
`rem-isolated-does-not-imply-nondegenerate`,
`lem-local-fixed-point-index-is-invariant-under-diffeomorphism-conjugation` (`repaired`),
plus the five refreshed this pass:
`cex-vanishing-lefschetz-number-allows-fixed-points`,
`ex-a-degenerate-isolated-fixed-point-with-nonzero-local-index`,
`ex-degree-d-map-on-a-sphere-has-lefschetz-number-one-plus-minus-d`,
`ex-rotations-of-the-two-sphere-and-their-lefschetz-number`,
`lem-lefschetz-numbers-of-the-two-lifts-sum-to-twice-the-base-lefschetz-number`.
The five refreshes were forced by hash-bound receipts: sibling authors landed the batch-1
handle-decomposition items and the batch-1 manifest after 15:36Z, which moved each item's
transitive input hash even though the five texts are unchanged. Each receipt now records
the re-read interfaces and the reason the changed inputs are not used.

**Escalated, owner-only (12).** `thm-index-of-a-nondegenerate-fixed-point`,
`lem-local-fixed-point-index-splits-under-perturbation`, `def-algebraic-lefschetz-number`,
`lem-diagonal-class-expansion-gives-the-alternating-trace`,
`lem-lefschetz-hopf-index-formula-for-nondegenerate-fixed-points`,
`thm-lefschetz-hopf-index-formula`, `cor-lefschetz-number-is-homotopy-invariant`,
`cor-lefschetz-number-of-the-identity-is-the-euler-characteristic`,
`thm-lefschetz-fixed-point-theorem`,
`prop-small-time-flow-fixed-point-indices-agree-with-vector-field-zero-indices`,
`rem-lefschetz-index-formula-recovers-poincare-hopf`,
`ex-a-torus-translation-has-zero-lefschetz-number-and-no-fixed-points`.
All twelve escalation receipts were recorded 2026-10-05 14:38Z against provisional
scaffolds; every supplier they name is now authored on disk with a matching interface
(re-read this pass): batch 7 — `def-euler-characteristic-of-a-compact-manifold`,
`prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions`,
`def-isolated-zero-and-local-index-of-a-vector-field`,
`def-nondegenerate-zero-of-a-vector-field`,
`thm-index-of-a-nondegenerate-vector-field-zero`,
`lem-local-index-is-additive-under-a-transverse-perturbation`,
`lem-vector-field-index-is-independent-of-chart-ball-and-trivialization`,
`lem-negation-scales-the-local-index-by-minus-one-to-the-dimension`,
`thm-poincare-hopf-for-closed-manifolds`,
`cor-closed-odd-dimensional-manifolds-have-zero-euler-characteristic`; batch 2 —
`def-geometric-intersection-pairing-on-a-closed-oriented-manifold`,
`thm-geometric-intersection-equals-the-poincare-dual-cup-pairing`; batch 4 —
`prop-morse-handle-chain-complex-computes-singular-homology`; batch 1 —
`lem-a-handle-decomposition-gives-a-relative-cw-complex`. The texts of several of these
items were rewritten after the escalations (notably `thm-lefschetz-hopf-index-formula`,
which now carries the twist route, and
`lem-local-fixed-point-index-splits-under-perturbation`, `prop-small-time-flow-…`,
`rem-lefschetz-…`), so the escalate receipts are stale and the tool refuses a non-owner
re-record ("The owner must resolve this item decision"). **Remedy (owner): record
`--owner --decision reopen` for each of the twelve, then the author re-audits the item
against the now-authored suppliers and records `accept`.** No mathematical defect is
asserted in these rows; the content is authored, checked and supplied.

Consumer → flagged supplier (consuming step recorded in the escalation receipt; current
texts checked against these uses):

| consumer | supplier(s), consuming step |
| --- | --- |
| `thm-index-of-a-nondegenerate-fixed-point` | `def-isolated-zero-and-local-index-of-a-vector-field` (1.1, 2.1), `def-nondegenerate-zero-of-a-vector-field` (1.1), `thm-index-of-a-nondegenerate-vector-field-zero` (3.1) |
| `lem-local-fixed-point-index-splits-under-perturbation` | `lem-local-index-is-additive-under-a-transverse-perturbation` (4.1, `[F2]`; clause (ii)) |
| `def-algebraic-lefschetz-number` | `prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions` (clause (i)), `prop-morse-handle-chain-complex-computes-singular-homology` (finite-CW comparison) |
| `lem-diagonal-class-expansion-gives-the-alternating-trace` | `def-geometric-intersection-pairing-on-a-closed-oriented-manifold` and `thm-geometric-intersection-equals-the-poincare-dual-cup-pairing` (3.1, 4.1 via `[L3]`, `[F1]`); `prop-euler-characteristic-additivity-…` (clause (i) in `[F1]`) |
| `lem-lefschetz-hopf-index-formula-for-nondegenerate-fixed-points` | `def-geometric-intersection-pairing-on-a-closed-oriented-manifold` and `thm-geometric-intersection-equals-the-poincare-dual-cup-pairing` (2.1 via `[L1]`) |
| `thm-lefschetz-hopf-index-formula` | `lem-local-fixed-point-index-splits-under-perturbation` (1.1 via `[F2]`); the receipt's step-2.1/step-3.1 branch predates the owner's rewrite, whose step 2.1 now uses `[F3]` = `lem-orientation-twisted-diagonal-realizes-the-lefschetz-trace` |
| `cor-lefschetz-number-is-homotopy-invariant` | `thm-lefschetz-hopf-index-formula` (2.1 via `[L1]`); the receipt's "lift hypothesis" clause is obsolete — the theorem now carries no lift hypothesis |
| `cor-lefschetz-number-of-the-identity-is-the-euler-characteristic` | `def-euler-characteristic-of-a-compact-manifold` and `prop-euler-characteristic-additivity-…` (1.1 via `[F2]`) |
| `thm-lefschetz-fixed-point-theorem` | `lem-a-handle-decomposition-gives-a-relative-cw-complex`, `prop-morse-handle-chain-complex-computes-singular-homology` (1.1 via `[F1]`, `[F2]`) |
| `prop-small-time-flow-fixed-point-indices-agree-with-vector-field-zero-indices` | `def-isolated-zero-and-local-index-of-a-vector-field` (1.1, 2.1), `lem-vector-field-index-is-independent-of-chart-ball-and-trivialization` (2.1), `lem-negation-scales-the-local-index-by-minus-one-to-the-dimension` (2.1) |
| `rem-lefschetz-index-formula-recovers-poincare-hopf` | `def-isolated-zero-and-local-index-of-a-vector-field`, `thm-poincare-hopf-for-closed-manifolds`, plus (after the rewrite) `thm-weak-whitney-proper-embedding-theorem`, `thm-euclidean-tubular-neighbourhood-theorem`, `cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction`, `lem-negation-scales-…` |
| `ex-a-torus-translation-has-zero-lefschetz-number-and-no-fixed-points` | `def-euler-characteristic-of-a-compact-manifold` and `prop-euler-characteristic-additivity-…` (2.1 via `[F2]`) |

**Auditor-created additions awaiting engine certification (2).** The two orientation items
above; they have no ordinary receipts by design and are certified by
`tools/step3-auditor-items.mjs certify --run frontier-41-ha-dt-29` once a successful author
result covers batch 8 / this pair. (At the time of writing that tool exits on an unrelated
batch-13 item, `lem-isotopy-extension-for-a-compact-source-with-boundary`, whose pair has
not yet had a successful dispatch; batch 8 is not implicated.)

## 4. Registration and supplier reconciliation

- Manifest `research/frontier-41-ha-dt-29-batch-8.pages.json`: 27 A items + 5 B items,
  includes both additions; deps synced to item frontmatter; `manifest-deps` 0 errors.
- Coverage `research/frontier-41-ha-dt-29-batch-8.coverage.json`: refreshed route row and
  decline prose; `coverage-checklist --require-destination` 0 errors/warnings (2 pages, 47
  harvested results); the nine group-e declines are `stands` in
  `research/frontier-41-ha-dt-29-alpha-e-scope-decisions.json`.
- Proof contracts `research/frontier-41-ha-dt-29-batch-8.proof-contracts.json`: 32 entries,
  complete 8-case boundary worksheets, `--strict` clean.
- Cross-batch `research/frontier-41-ha-dt-29-batch-8.cross-batch-dependencies.json`:
  32 rows — 27 `verified`, 5 `removed` (uses deleted by the rewrites), 0 open. Exact
  supplier/consumer/step evidence is in the rows; each named supplier is authored on disk.
- Unified ledger `research/frontier-41-ha-dt-29-cross-batch-dependencies.json` could not be
  refreshed: `frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29` exits with
  `frontier-41-ha-dt-29-batch-19.cross-batch-dependencies.json: invalid review or consumer
  ownership` (another group's input). The batch-8 input itself validates.

## 5. Checks actually run (this pass, after the final edits)

| Check | Command | Result |
| --- | --- | --- |
| precheck | `node tools/tsx-run.mjs tools/precheck.mts <32 item paths>` | 26 checked, 0 failing (6 non-proof items n/a) |
| proof layout | `node tools/proof-layout.mjs <32 item paths>` (single batched run after final edits) | 32 items, 86 steps, 0 defects |
| rendercheck | `node tools/rendercheck.mjs <32 items + 2 pages>` | OK — 34 files |
| proof contracts | `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-8.proof-contracts.json --strict` | 0 errors, 0 warnings, 32/32 |
| author check | `node tools/tsx-run.mjs tools/author-check.mts frontier-41-ha-dt-29 8` | `ok=true` (precheck, rendercheck, content-policy-items, proof-contract all code 0) → `research/frontier-41-ha-dt-29-author-check-8.json` (fingerprint `df298614bb2d…`) |
| content policy | `node tools/content-policy.mjs research/frontier-41-ha-dt-29-batch-8.pages.json` | 32 scoped items, 0 errors, 0 warnings |
| manifest deps | `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-8.pages.json` | 32 items, 0 errors |
| coverage | `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-8.coverage.json --require-destination` | 2 pages, 47 results, 0 errors, 0 warnings |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | no finding names a batch-8 item (run-wide findings belong to other batches) |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | OK (pre-splice note only) |
| splice | `node tools/splice-plan.mjs --run frontier-41-ha-dt-29 --verify` | expected pre-splice drift for both pages (manifest 27/5 vs plan 0); **no** undeclared-prerequisite finding names a batch-8 item |
| prose | `node tools/prosecheck.mjs` | OK — no positional claim contradicts the spec |
| depsource | `node tools/depsource.mjs` | 0 unresolved |
| extcheck | `node tools/extcheck.mjs` | OK (single unrelated published note: `thm-urysohn-lemma`) |
| pathcheck | `node tools/pathcheck.mjs` | 0 errors, 28 run-wide warnings, none batch-8 |
| decisions | `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase final` | see §3; the pair's scope row is closed, 18/32 items closed, 12 owner-held, 2 engine-certified |

`depcheck` / `fwdcheck` were last observed with run-wide debt whose findings do not name any
batch-8 item; the stage gates re-run them over the whole run and they are not batch-8
blockers.

## 6. Added suppliers and published concerns

- **Added suppliers (this pair's only additions):** the two orientation items of §2. New
  dependency levels were computed from actual dependencies and recorded in item frontmatter
  and manifest (`8`, `9`); `item-dependency-levels check` is clean for batch 8.
- **Published concern (carried from Step 3a):** `def-local-oriented-intersection-sign`,
  `def-oriented-intersection-number`, `thm-intersection-number-under-factor-interchange`
  are `published-unaudited` in depcheck (statements and proofs present; owner receipt
  missing). Exact IDs, evidence = the depcheck rows; confidence: receipt-only issue, no
  mathematical defect asserted; remedy = owner audit receipt.
- **Step 4 note:** the earlier `handle-decompositions-duality-and-rearrangement`
  undeclared-prerequisite finding for `thm-lefschetz-fixed-point-theorem` closed when that
  page file landed (`library/differential-topology/handle-decompositions-duality-and-rearrangement.md`,
  2026-10-06 02:46 +11:00); `splice-plan --verify` no longer reports it. The remaining
  batch-8 drift rows are the ordinary pre-splice manifest-vs-plan differences for both
  pages. `validate-plan` passes against `research/plan-spec.json`.

## 7. Open obligations at handoff

1. Owner: `reopen` the twelve escalated items of §3, then the author (or the next
   dispatch of this pair) re-audits and accepts them; every named supplier is authored.
2. Engine: certify the two auditor-created additions once this dispatch's result covers
   batch 8 (requires no action from the pair author).
3. Owner receipt: the three `published-unaudited` intersection-theory items of §6.
4. Run-level, not batch-8: unified-ledger refresh is blocked by the batch-19 cross-batch
   input; `scope-decisions`/`step3-decisions` run-wide work rows outside batch 8 remain for
   their groups.
5. Hash-bound receipts: if any supplier in a closed item's transitive closure changes
   again before the stage gate runs, that receipt re-stales and the item needs one more
   refresh pass; the mechanism is the tool's `itemHash` closure, not a mathematical gap.
