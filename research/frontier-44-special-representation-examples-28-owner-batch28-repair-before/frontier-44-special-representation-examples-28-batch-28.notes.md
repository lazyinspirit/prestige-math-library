# Batch 28 — `murnaghan-stability-via-fi-modules` (SYMR-15)

Run `frontier-44-special-representation-examples-28`, role beta, label batch-28, 2026-10-08.
Written files: `research/frontier-44-special-representation-examples-28-batch-28.pages.json`,
`…-batch-28.coverage.json`, `…-batch-28.cross-batch-dependencies.json`, this note, and the 16
`…-step1-<item>.json` readiness records. No published content, shared plan, engine state or verdict was
edited. The binding owner direction (`…-owner-authoring-direction.md`) and the design section
(`research/plan-symmetric-group-representations-track.md` L50 with the SYMR-15 inventory in
`research/symmetric-group-planning/proposed-inventory.md` §SYMR-15) were read in full before construction.

## Scope built

- A page `murnaghan-stability-via-fi-modules` (order 1586, `special-topics-in-representation-theory`):
  **14 items** — 4 definitions, 4 lemmas, 1 proposition and 5 theorems: the σ-series/λ-ring layer
  (local definitions of the λ-ring specializations, the iterated Schur coefficients and the
  padding-completion operator, with the specialization-coproduct, Cauchy-adjoint and vertex-operator
  lemmas), the FI-module stability theorem, the reduced coefficient, Brion's formula, the nonnegative
  expansion, the Murnaghan–Littlewood top-degree lemma, the size-triangle proposition, the all-rank
  expansion and the exact global threshold.
  B page `murnaghan-stability-via-fi-modules-examples` (order 1587): **2 items** (1 example, 1
  counterexample), both dependency leaves on the A page.
- Build order follows the dependency levels; every item carries a manifest `dependency_level` verified
  against the tool. Levels: 0 (`def-lambda-ring-specializations-and-the-sigma-series`,
  `def-iterated-schur-coefficients`), 1 (`lem-schur-specialization-coproduct-and-plethysm-identities`),
  2 (`def-first-row-padding-completion-and-the-stabilization-operator`,
  `lem-sigma-series-cauchy-adjoint-and-reproducing-kernel-identities`), 3
  (`lem-vertex-operator-series-for-padded-schur-functions`), 8
  (`thm-murnaghan-stability-for-kronecker-coefficients`), 9 (`def-reduced-kronecker-coefficient`),
  10 (`thm-brion-formula-for-reduced-kronecker-coefficients`, `ex-murnaghan-stability-for-alpha-beta-two`),
  11 (`lem-bor-nonnegative-expansion-for-reduced-kronecker-coefficients`,
  `thm-murnaghan-expansion-for-all-admissible-ranks`,
  `cex-a-global-product-threshold-is-not-a-per-triple-sharpness-claim`), 12
  (`lem-murnaghan-littlewood-top-degree-reduced-coefficients-are-lr-coefficients`,
  `prop-reduced-kronecker-support-satisfies-size-triangle-inequalities`), 13
  (`thm-exact-global-stabilization-threshold-for-a-fixed-kronecker-product`). No cycle; page caps far
  from the 100-item limit (14 and 2 items).
- Outcomes recorded with `tools/step1-decisions.mjs`: **14 `ready`, 2 `escalated`** (the two threshold
  items below). All records name the examined dependency IDs and the concrete evidence. Nothing in this
  batch is `pending`.

## Owner direction, design and plan comparison (conflicts recorded)

1. **No scope conflict.** `plan-spec.json` agrees with the batch task on both page ids, orders 1586/1587,
   titles, category, companion and `requires`. The design row agrees on the mathematical role
   ("complete FI-module proof, reduced coefficients and exact global thresholds"). All six design A items
   and both design B items are present with their claims intact; the design's conventions (FI-module route
   for Murnaghan stability; reduced coefficient as the stable value; source convention for `stab(α,β)`)
   are carried over. Eight further A items are local prerequisites added under the dispatcher's
   instruction to create every needed local definition/lemma; they are minimal for the design's own proof
   routes (a σ-series/λ-ring layer establishing Cauchy, the adjoint/reproducing identities and the
   vertex-operator series; the iterated Schur coefficient; the padding-completion/stabilization operator;
   Brion's formula; the all-rank expansion item).
2. **Deviations from the design's proof routes (route kept, wording/deps corrected; no claim weakened).**
   - `lem-bor-nonnegative-expansion-for-reduced-kronecker-coefficients`: the design's route ("source's
     vertex-operator reduction formula, expand each skew Schur function by LR coefficients") was replaced
     by a derivation from Brion's formula: `σ[XY] = Σ_ρ s_ρ[X]s_ρ[Y]`,
     `s_γ[XY+X+Y] = Σ_{μ,ν} c^γ_{μ,ν}s_μ[XY]s_ν[X+Y]`, `s_μ[XY] = Σ g^μ_{λ,η}s_λ[X]s_η[Y]`,
     `s_ν[X+Y] = Σ c^ν_{θ,π}s_θ[X]s_π[Y]`, and the iterated identity
     `Σ_ν c^γ_{μ,ν}c^ν_{θ,π} = c^γ_{μ,θ,π}`. The design's dependency `thm-outer-littlewood-richardson-rule`
     is therefore replaced by the local `def-iterated-schur-coefficients`, `thm-brion-formula-…` and
     `lem-schur-specialization-…`; this also supplies the independent second treatment required by the
     source rules.
   - `lem-murnaghan-littlewood-top-degree-reduced-coefficients-are-lr-coefficients`: the design's
     "top-degree forcing" is made precise: on each nonzero summand the degree equations give
     `|α|+|β|−|γ| = 2|ρ|+|μ|`, so `|γ|=|α|+|β|` forces `ρ=μ=∅`, then `λ=η=∅`; the six-fold sum collapses
     through `c^α_{∅,∅,θ}=δ_{α,θ}` and `c^β_{∅,∅,π}=δ_{β,π}` to `g^∅_{∅,∅}c^γ_{α,β}=c^γ_{α,β}`.
     Dependencies are the local expansion lemma plus the published LR product expansion and LR
     coefficient definition.
   - `thm-exact-global-stabilization-threshold-…`: the design's route (support expansion + LR row bounds
     + top-degree attainment) silently needs the all-admissible-rank Murnaghan expansion for the
     identification of `stab(α,β)` with `max{|γ|+γ_1}` (Lemma 3.1). That premise is stated explicitly as
     `thm-murnaghan-expansion-for-all-admissible-ranks`; the support-maximum half is fully scaffolded
     (threefold-containment chain `|γ|+γ_1 ≤ |μ|+μ_1+|θ|+θ_1+|π|+π_1 ≤ 2|μ|+|θ|+θ_1+|π|+π_1
     = |λ|+|θ|+θ_1+|η|+|π|+π_1 ≤ |α|+α_1+|β|+β_1`, attainment at `γ=α+β`).
   - B items: the design gave both B rows a dependency on the (now escalated) threshold theorem. To keep
     the B page free of escalated suppliers, both items verify their finite claims **directly** from BOR's
     displayed product table and the definition of `V`; the example still covers the design's scope
     ("calculate the products through the exact global threshold n=8 and display the stable expansion
     from (6,2)*(6,2)"), and the counterexample's non-sharpness point is a statement about that finite
     pair, not about the general theorem.
3. **Source-text note (BOR eq. (8)).** BOR's printed equation (8) and its own if-and-only-if statement
   list the same K₄ index pattern up to the order of the arguments of the symmetric threefold
   coefficients; the pattern derived and used here is
   `g^γ_{α,β} = Σ c^γ_{μ,θ,π} c^α_{ρ,λ,θ} c^β_{ρ,η,π} g^μ_{λ,η}`, which is the version used by BOR's own
   proof of Theorem 3.2. No mathematics depends on the printed order.
4. **Circularity avoided.** The definition of the reduced coefficient consumes the stability theorem and
   never appeals to its own name (the defect flagged in
   `research/symmetric-group-planning-main-review/local-agent-2-symmetric-functions-tableaux.md`).
   Murnaghan stability is proved first, by the FI-module route, from the batch-26/27 suppliers.
5. **Schema item.** The counterexample carries `provenance.statement = ai-generated` and now
   `generation.role = counterexample` in the manifest (it is a non-dependency leaf; no item anywhere
   depends on it).

## Escalations (owner decision requested; do not overwrite)

1. **`thm-murnaghan-expansion-for-all-admissible-ranks`** — the all-rank Murnaghan expansion
   `s_{α[n]} * s_{β[n]} = Σ_γ \bar g^γ_{α,β} s_{γ[n]}` (BOR Murnaghan Theorem p. 4, eq. (2); here stated
   for the range `n ≥ max{|α|+α_1, |β|+β_1}` where `α[n], β[n]` are partitions, `s_{γ[n]}` being the
   Jacobi–Trudi completion). Exact missing prerequisite: Littlewood's identity
   `s_{α[n]} * s_{β[n]} = U_n R_{α,β}` (BOR identity (9) pp. 7–8; attributed to Littlewood, Canad. J.
   Math. 10 (1958), and reproduced in Butler–King 1973 Formula 6.1 and Scharf–Thibon–Wybourne 1993
   Formula 8) with injectivity of `U_n` in degrees `≤ n/2`, or an equivalent all-rank argument (Thibon's
   vertex operators). The alternative route — comparing the generating series
   `Σ_n s_{α[n]}*s_{β[n]}z^n` against the vertex-operator series `Σ_n s_{α[n]}z^n = σ[zX]s_α[X−z^{-1}]`
   — still needs the compatibility of the internal product with that factorisation, which is not
   established locally. The published proofs (invariant theory, Brion's geometry, vertex operators,
   partition algebras) were not reduced to locally checkable form; the item is escalated rather than
   faked. Destination recorded as `owner-decision` in the coverage row for Littlewood's identity.
2. **`thm-exact-global-stabilization-threshold-for-a-fixed-kronecker-product`** — `stab(α,β) =
   |α|+|β|+α_1+β_1` with the sharpness witness (the product at index N is not `V` of the product at
   N−1: the expansion at N contains `s_{γ*[N]}` for `γ*=α+β`, whose first two parts are equal, and no
   Schur function with equal first two parts lies in the image of `V`). The support-maximum half is
   fully scaffolded; the identification of `stab` with that maximum (BOR Lemma 3.1) needs the escalated
   all-rank expansion. The claim is preserved unweakened.

## B-page finite data (with one correction made in this dispatch)

- `ex-murnaghan-stability-for-alpha-beta-two` re-verified from BOR's introduction table: the rank-6 and
  rank-7 products satisfy `Σ_γ g_γ dim V_{γ[n]} = dim V_{α[n]}·dim V_{β[n]}` (81 = 9·9 and 196 = 14·14,
  using the hook-length dimensions 2, 5, 9, 14, 20, 27 of `(n−2,2)`); the reduced coefficients for
  `α=β=(2)` are 1,1,2,1,1,2,1,1,1,1 for γ = ∅, (1,1,1), (2), (1), (1,1), (2,1), (2,2), (3), (3,1), (4);
  `V` maps the rank-8 expansion onto the rank-9 expansion term by term.
- **Correction.** An earlier draft of the two B items said that `V` of the rank-7 product "misses
  `s_{4,3}` and `s_{3,3,1}`". That is wrong: those two terms are *present* in the rank-7 product (their
  `V`-images `s_{5,3}`, `s_{4,3,1}` are among the new rank-8 terms), and the rank-8 product contains no
  degree-7 term at all. The actual failure of `V`-stability at rank 7 is the **single missing term
  `s_{4,4}`** (`s_{(3,4)}` is a Jacobi–Trudi determinant with two equal columns, hence zero). Both item
  texts and the two readiness records were corrected.
- `cex-a-global-product-threshold-is-not-a-per-triple-sharpness-claim`: the coefficient of `s_{4,2}` in
  `s_{4,2}*s_{4,2}` is 2 = `\bar g^{(2)}_{(2),(2)}`, while the rank-5 coefficient (of `s_{3,2}` in
  `s_{3,2}*s_{3,2}`) is 1; the coefficient first reaches its stable value at rank 6, while the whole
  product first becomes `V`-stable at rank 8. This is consistent with BOR Theorem 1.4 (`N_1 = 6` for this
  triple), though the item verifies the finite data directly and does not consume the escalated theorem.

## Sources (two independent treatments per A page, one a book; all full texts fetch-verified)

| source | locators read | supports | stamp |
|---|---|---|---|
| Briand–Orellana–Rosas, *The stability of the Kronecker product of Schur functions*, arXiv:0907.4652v2 (J. Algebra 331 (2011) 11–27) | introduction table p. 2; Murnaghan and Murnaghan–Littlewood theorems p. 4; `stab(α,β)` and Theorems 1.2/1.4/1.5 p. 5; Lemma 2.1 eq. (8) and identity (9) pp. 7–8; Lemma 3.1 and Theorem 3.2 with proofs pp. 8–9 | the reduced coefficient, the nonnegative expansion, the top-degree lemma, the size triangle, both threshold claims, and both B items | fetch-verified (253792 bytes, 16 pp., sha16 497b2e2219b85a65) |
| Church–Ellenberg–Farb, *FI-modules and stability for representations of symmetric groups*, arXiv:1204.4533v4 (Duke Math. J. 164 (2015) 1833–1910) | Prop. 2.3.6 pp. 12–15; Theorem 1.13 and Prop. 3.3.3 pp. 4–6, 23–25; Prop. 3.4.1, Thm. 3.4.2 pp. 23–24 | `thm-murnaghan-stability-…` | fetch-verified (860723 bytes, 54 pp., sha16 1ff5dd9de3e3663d) |
| Briand–Rattan–Rosas, *On the growth of the Kronecker coefficients*, arXiv:1607.02887v1 | Lemma 2.1 and λ-ring section 2.3 pp. 5–6; vertex operators (4)–(6) p. 7; Murnaghan's inequalities Lemma 3.1 p. 9; Brion's formula Prop. 3.2 and complete proof pp. 9–10; Cauchy-type identity (10) p. 10; bound (7) p. 9 | σ-series, vertex-operator series, Brion's formula | fetch-verified (447486 bytes, 42 pp., sha16 09a44a991f4d1755) |
| Macdonald, *Symmetric Functions and Hall Polynomials*, 2nd ed. (OUP 1995) | ch. I §3 (Schur functions), §5 (Pieri, Bernstein's operators Example 29), §7 (Hall inner product), §8 (plethysm) | A items 1–4, 6, 12; B page | fetch-verified (6276911 bytes, 486 pp., sha16 64e242b84d1f3b78) |

B page sources: BOR (locators as above) and Macdonald (ch. I §§5, 7).
Coverage: 2 pages, **40 harvested rows** with dispositions 19 `included`, 9 `inline`, 10 `out-of-scope`
(specific reasons recorded), 2 `deferred` — Littlewood's identity → `owner-decision`, and BOR Theorem 1.2 /
Lemma 3.1 → the companion A page `murnaghan-stability-via-fi-modules` (the escalated threshold item).
The source-fetch stamps are recorded in the coverage file; `--stamp` re-run reports 0 newly stamped
(all six already verified).

## Cross-batch dependencies and the unified ledger

- `…-batch-28.cross-batch-dependencies.json`: **17 open rows** — 15 item edges to batch-26/27 suppliers
  (`def-padded-kronecker-coefficient-sequence`, `def-kronecker-coefficient-and-internal-tensor-product`,
  `def-internal-product-on-symmetric-functions`, `def-first-row-padding-of-a-partition`,
  `prop-fi-module-realizing-one-padded-irreducible-family`, `prop-tensor-products-of-finitely-generated-fi-modules-are-finitely-generated`,
  `thm-finite-generation-is-equivalent-to-uniform-representation-stability`) and 2 page edges
  (`kronecker-coefficients-and-internal-products`, `character-polynomials-fi-modules-and-representation-stability`).
  All stay open because the suppliers are scaffolded-ready but not yet authored.
- `node tools/frontier-dependency-ledger.mjs refresh --run …` → `refreshed and deduplicated`; the unified
  `research/frontier-44-special-representation-examples-28-cross-batch-dependencies.json` lists the same
  17 batch-28 edges, each with one batch-28 review, `orphaned_reviews: []`, and batch 28 among the
  reviewed batches.
- Every declared dependency resolves: 8 published items on disk, 7 batch-26/27 scaffolded items,
  14 rows internal to this batch; no unresolved ID, no cycle, no forward reference (checked with
  `item-dependency-levels`, `manifest-deps` and `validate-plan`).

## Axiom strength / AC

- All 16 items record `axiom_use: None`. The λ-ring/symmetric-function route, Cauchy's identity, formal
  power series and the FI-module finite-generation arguments are choice-free; the eight direct published
  suppliers declare no choice dependency. The only choice-related library items reachable in the deeper
  convolution are `def-axiom-of-choice`/`def-countable-choice`/`def-dependent-choice`, reached through
  `thm-noetherian-ring-ideal-characterisations` as declared context; the published
  `thm-hilbert-basis-theorem` explicitly restricts its use to the choice-free implications (its
  `axiom_use` block says so), and the batch-27 notes record that restriction as an owner-authorized local
  repair. No proof path reaches `deferred-set-theory-beyond-choice`; no Recorded result is consumed.

## Consumer review of the concurrent batch-27 repair (recorded)

- During this dispatch a sibling owner-authorized repair rewrote parts of batch 27 (its notes at
  12:42:43Z and manifest at 12:44:24Z) and explicitly asked the active consumer batches to re-read the
  corrected interfaces. The changed items actually consumed here were re-read:
  `prop-fi-module-realizing-one-padded-irreducible-family` (statement unchanged: `V(λ)_n ≅ V_{λ[n]}` for
  `n ≥ |λ|+λ_1`, zero below, finitely generated in degree `|λ|+λ_1`, weight `|λ|`, stability degree
  `λ_1`), `prop-tensor-products-of-finitely-generated-fi-modules-are-finitely-generated` (unchanged),
  `thm-finite-generation-is-equivalent-to-uniform-representation-stability` (unchanged),
  `def-weight-of-a-characteristic-zero-fi-module` (definitional convention fix: constituent model
  `k⊗_Q S^λ_Q`; consumed only through the proposition's statement). No consumed statement was weakened,
  so the batch's claims are unaffected; the eight invalidated readiness records were re-recorded against
  the current bytes with this review recorded in the reason text.

## Checks actually run (exact commands and results)

- `node tools/item-dependency-levels.mjs check --run …` → **31 errors, none on a batch-28 page or item**
  (28 empty sibling scaffold inventories plus 3 label mismatches in a quantum batch). Per-item check via
  the tool's exported `dependencyLevels`: all 16 declared levels equal the computed levels
  (`thm-murnaghan-stability…` 8, `def-reduced…` 9, `def-first-row-padding-completion…` 2,
  `def-lambda-ring…` 0, `lem-schur-specialization…` 1, `lem-sigma-series…` 2,
  `lem-vertex-operator-series…` 3, `thm-brion-formula…` 10, `def-iterated-schur…` 0,
  `lem-bor-nonnegative-expansion…` 11, `lem-murnaghan-littlewood-top-degree…` 12,
  `prop-reduced-kronecker-support…` 12, `thm-murnaghan-expansion…` 11,
  `thm-exact-global-stabilization-threshold…` 13, `ex-murnaghan-stability…` 10,
  `cex-a-global-product-threshold…` 11); no page-level error for the two pages.
- `node tools/manifest-deps.mjs research/…-batch-28.pages.json` → `16 item(s), 0 normalized, 0 error(s)`;
  all batch manifests → `362 item(s), 0 normalized, 0 error(s)`.
- `node tools/coverage-checklist.mjs research/…-batch-28.coverage.json --require-destination` →
  `2 page(s), 40 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/…-batch-28.coverage.json --stamp` →
  `6/6 source(s) fetch-verified (0 newly stamped)` and `6/6 source(s) resolved (0 documented drops)`;
  check mode → `6/6 source(s) fetch-verified`.
- `node tools/content-policy.mjs --manifest-only research/…-batch-28.pages.json` → `16 scoped item(s),
  15 error(s), 0 warning(s)` — all 15 are `batch-dependency-missing` for the declared batch-26/27
  suppliers, which are scaffolded in this run but not yet authored on disk; expected before Step 3 and
  the reason for the open cross-batch edges. Run over all batch manifests →
  `362 scoped item(s), 0 error(s), 0 warning(s)` (cross-batch deps resolve as planned content).
- `node tools/frontier-item-gate.mjs --run … --tool validate-plan` → during construction this **FAILED**
  with 9 `[intra-order]` errors, all on the sibling page
  `divided-powers-integral-forms-and-quantum-highest-weights` (another batch's in-flight scaffold) and
  none on a batch-28 subject. After that sibling's repair the final re-run is **OK**: "declared page
  order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or
  unresolved ids", with advisory `[redundant-prereq]` warnings only, one of them for this page
  (`requires kronecker-coefficients-and-internal-products directly, but already reaches it through
  character-polynomials-fi-modules-and-representation-stability`, pre-existing plan shape).
- `node tools/step1-decisions.mjs check --run …` → run-wide `362 items, 287 ready, closed:false`
  (other batches still lack records); for this batch only the two escalated items appear, both as
  owner-held escalations. After the consumer re-record pass: all 14 `ready` items current. A final
  re-run minutes later read `363 items, 296 ready` with the same batch-28 result — the run-wide counts
  move as sibling scaffolds land, the batch-28 status does not.
- `node tools/url-sweep.mjs --coverage research/…-batch-28.coverage.json --out /tmp/b28/urls.json
  --recover` → `4/4 live; 0 failed (0 previously fetched, 0 blocking); 0 recoverable from the archive;
  0 suspect`, `4 citation decision(s) (0 documented source drops)` — the four unique URLs behind the six
  source rows.
- `node tools/source-backing.mjs --coverage research/…-batch-28.coverage.json --liveness /tmp/b28/urls.json
  --reharvest-plan /tmp/b28/reharvest.json` → `15 authored result(s) across 1 file(s), every one still
  backed by an openable source or documented alternative argument`.
- Not run here: `extcheck`/`fwdcheck` resolve their subjects through authored item files and run after
  Step 3 by the engine; the manifest-only policy pass covers the retired external-record fields at this
  boundary.

## Unresolved findings and owner decisions requested

1. **Fund the all-rank Murnaghan expansion** (`thm-murnaghan-expansion-for-all-admissible-ranks`): the
   exact smallest missing prerequisite is Littlewood's identity (or an equivalent all-rank argument)
   with the injectivity of `U_n` in degrees `≤ n/2`; once available, the threshold theorem closes with
   the scaffolded support-maximum half. Both affected items are escalated, not weakened.
2. The escalated threshold item carries one conservative dependency
   (`prop-reduced-kronecker-support-satisfies-size-triangle-inequalities`) that the scaffolded route does
   not strictly consume (its upper bound runs through the threefold containment chain). The dependency
   was left in place because the escalation record already names the examined dependency list and must
   not be overwritten; Step 3 may drop the edge in the authored item if the proof does not use it.
3. Whole-run gates are currently red only on sibling batches (31 dependency-level errors, 15+ empty
   scaffold inventories, other batches' missing readiness records; the `intra-order` failures seen
   earlier were repaired by the owning sibling and the plan gate now passes). None is a batch-28
   subject.
4. Batch-27's supplier bytes moved during this dispatch (sibling repair); if that page moves again before
   Step 1 closes, the eight records refreshed here will show stale again and need one more refresh pass.
   This is recorded so the engine does not read the staleness as a batch-28 defect.
5. Source-text history: BOR's printed eq. (8) index order differs from the pattern used in its own proof
   of Theorem 3.2 up to the symmetry of the threefold coefficients; recorded, no mathematical impact.
6. **Step-3/Step-5 verification joint (flagged in the readiness record).** In
   `lem-vertex-operator-series-for-padded-schur-functions` the reduction to the coproduct identity, the
   negative-alphabet rule `s_ν[−A] = (−1)^{|ν|}s_{ν'}[A]` and the Pieri rule is complete, but the final
   "chain-sum identification" — that the Jacobi–Trudi determinant of `α[n]`, expanded along its first
   row, is exactly the signed sum over pairs `μ ⊆ ν` with `α/μ` a vertical strip and `ν/μ` a horizontal
   strip of size `n−|μ|` — is the one classical step whose bookkeeping should be re-checked explicitly
   when the item is authored (it was checked here on `α=(1),(2),(1,1)` at several `n`, not in general).

## Correction history of this dispatch

- Corrected the rank-7 `V`-instability witness in both B items (`s_{4,4}`, not `s_{4,3}`/`s_{3,3,1}`);
  re-recorded both readiness rows.
- Added `generation.role: counterexample` to the counterexample manifest item (SCHEMA requirement for
  `ai-generated` statements); statement cannot be a dependency target, and no item depends on it.
- Reworded the escalated threshold item's sharpness clause to BOR's actual witness (failure at index `N`,
  read as "the product at `N` is not in the image of `V`"), removing an ambiguous "not for `n=N−1`"
  reading; the escalation record was not touched.
- Re-recorded the eight ready items invalidated by the sibling batch-27 repair after the consumer review
  above; the two escalation records were left exactly as first written.
- **Corrected the vertex-operator identity** `lem-vertex-operator-series-for-padded-schur-functions`: the
  earlier draft stated `Σ s_{α[n]}[X]t^n = σ[tX]s_α[X−t^{-1}]` with a horizontal-strip expansion, which
  is wrong on two counts. The correct identity is
  `Σ_{n∈ℤ} s_{α[n]}[X]t^n = σ[tX]s_α[tX−1] = t^{|α|}σ[tX]s_α[X−t^{-1}]` with the **vertical**-strip
  expansion `Σ_{α/μ VS}(−1)^{|α|−|μ|}t^{|μ|}σ[tX]s_μ[X]` (source: growth paper (6) p. 7, verified here
  against the Jacobi–Trudi determinants for `α=(1),(2),(1,1)`: e.g. `s_{(0,2)}=−s_{1,1}`, `s_{(0,1,1)}=0`,
  `s_{(1,1,1)}=s_{1,1,1}`, and the `t^{-2}` coefficient for `α=(1,1)`). The item, its strategy and its
  readiness reason were corrected, and the five records invalidated by the change were re-recorded.
