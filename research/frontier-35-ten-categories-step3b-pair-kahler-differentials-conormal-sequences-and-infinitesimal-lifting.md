# Step 3b report — pair `kahler-differentials-conormal-sequences-and-infinitesimal-lifting`

Run `frontier-35-ten-categories`; stage `3b-author`; role alpha-high; label
`step3b-pair-kahler-differentials-conormal-sequences-and-infinitesimal-lifting-d8ded3366d227f40`.
A page `kahler-differentials-conormal-sequences-and-infinitesimal-lifting` (366.071, `scheme-theory`), B page
`...-examples` (366.072). Shared batch file `research/frontier-35-ten-categories-batch-6.pages.json`; the sibling pair
`diagonals-separated-morphisms-and-valuative-uniqueness` was preserved untouched (29 + 8 manifest rows, its coverage rows,
its 30 contracts, its two library pages, and the four pre-existing batch-6 rows of
`...batch-6.cross-batch-dependencies.json`, verified byte-identical across the ledger refresh; a fifth row was added by
this dispatch, for this pair's own consumer).
`research/frontier-35-ten-categories-owner-authoring-direction.md` does not exist (checked again this dispatch). No
published item, shared plan, engine state or verdict was edited; no `--owner` flag and no judge/audit stamp was written.

## Scope and scaffold decisions (read)

- Read `CLAUDE.md`, the current manifests, coverage, cross-batch rows, plan rows 366.071/366.072, the AV-16 design
  section of `research/plan-algebraic-geometry-track.md` (lines 1079-1137), the Step 3a scope receipt, and the relevant
  current supplier items, including the batch-3 algebraic-differential scaffolds and the published sheaf/ideal-sheaf,
  tensor, localization, Nakayama and diagonal supports.
- Inventory after authoring: 34 A items + 9 B items = 43. 43 = 30 designed A results + 9 designed B results + 4 local
  A-page prerequisites, two of which were added by this dispatch (`lem-affine-module-sheaf-universal-property`,
  `lem-field-is-noetherian`); the other two Step-1 local prerequisites (`lem-differentials-diagonal-ideal-square`,
  `lem-finite-type-field-zero-differentials-finite-separable`) keep their designed role. No promised result was dropped,
  no item or page was renamed, and no pair was added. The pair's scope decision was refreshed to `sufficient` at the
  post-author action hash, and all 43 item decisions are current at confidence 1 (30 `accept`, 11 `repaired`).
- **Tilde-construction reformulation.** The design assumed the standard description of the sheaf attached to a module on
  standard opens (`M~(D(g)) = M_g`). Because that description needs the basis-level gluing checked before the universal
  property can be used, this dispatch defines `M~ := aP_M` as the *sheafification* of the presheaf
  `P_M(U)=M⊗_B O_X(U)` and proves the universal property `Hom_{O_X}(M~,F) ≅ Hom_B(M,F(X))` from the sheafification and
  tensor universal properties (Stacks Schemes Lemma 26.7.1, tag 01I7). `lem-sheaf-differentials-affine-compatibility`
  then recovers the standard-open description where it is needed. This is a proof-strategy refinement inside the same
  claim; it changes no statement of the design's promised package.
- **B-page label.** The design label `cex-frobenius-differential-zero-not-etale` is realised as
  `cex-frobenius-zero-tangent-map-not-formally-etale` with the same refuted claim: over `F_p` the absolute Frobenius of
  `A^1` has `dF = 0` on absolute differentials while `Ω_{A^1_k/A^1_k,F} = k[t]dt ≠ 0`, so it is not formally étale.
  Formal étaleness is only read off through the definitions on this page; the unqualified étale/smooth equivalence stays
  at the later smooth-morphism page.
- **Smooth relative dimension.** `def-smooth-relative-dimension-via-differentials` records only the differential-rank
  condition and states explicitly that it is not a smoothness criterion; the flatness, fibre-dimension and finite
  presentation comparison is left to the smooth-morphism development. See the Step 4 note below.
- Scaffold repairs while authoring are listed under “Repairs and local suppliers”; each repaired item carries a
  `repaired` decision receipt naming the exact change.

## Completed item IDs (all 43, prerequisite order)

All items are `status: draft`, registered in the batch manifest, the coverage file, the batch proof contracts (32
proof-bearing items; the other 11 are definitions/remarks) and the two library pages. “precheck pass” means
`tools/tsx-run.mjs tools/precheck.mts <explicit path>` passes at the frozen content; “contract ok” means the item is
inside the strict-checked batch-6 contract. Row-by-row checkpoints (deps, facts/steps, source locators, notes) are in
`research/frontier-35-ten-categories-batch-6.notes.md` under “Final Step 3b checkpoint for this pair”.

A page: `def-derivation-algebra`, `def-kahler-differentials-algebra`, `thm-kahler-differentials-existence-presentation`,
`cor-derivations-represented-by-differentials`, `lem-differentials-polynomial-algebra-free`,
`thm-conormal-exact-sequence-algebra`, `cor-jacobian-presentation-differentials`,
`thm-transitivity-exact-sequence-differentials`, `lem-differentials-localization`, `lem-differentials-base-change`,
`def-sheaf-relative-differentials`, `thm-sheaf-differentials-universal-property`,
`lem-affine-module-sheaf-universal-property` (new supplier), `lem-sheaf-differentials-affine-compatibility` (repaired),
`thm-conormal-sequence-closed-immersion` (repaired), `thm-transitivity-sequence-schemes` (repaired),
`lem-differentials-commute-base-change-schemes`, `def-relative-cotangent-space`,
`thm-cotangent-space-maximal-ideal-quotient` (repaired), `thm-tangent-vectors-dual-numbers` (repaired),
`lem-differential-of-morphism-via-cotangent-map` (repaired), `def-formally-unramified-morphism`,
`def-formally-smooth-morphism`, `def-formally-etale-morphism`, `lem-differentials-diagonal-ideal-square`,
`thm-formally-unramified-differentials-zero` (repaired), `def-unramified-morphism-finite-type`,
`thm-unramified-diagonal-open-immersion`, `lem-field-is-noetherian` (new supplier),
`lem-finite-type-field-zero-differentials-finite-separable` (repaired, AC), `lem-etale-residue-extensions-finite-separable`
(repaired, AC), `def-smooth-relative-dimension-via-differentials`, `rem-conormal-map-need-not-injective`,
`rem-differentials-detect-infinitesimals-not-all-singularities-alone`.

B page: `ex-differentials-polynomial-ring`, `ex-differentials-hypersurface`, `ex-differentials-dual-numbers`,
`ex-differentials-separable-field-extension-zero`, `cex-differentials-purely-inseparable-field-nonzero` (repaired),
`cex-conormal-left-map-not-injective`, `ex-tangent-vectors-affine-space-dual-numbers`,
`ex-unramified-closed-point-immersion` (repaired), `cex-frobenius-zero-tangent-map-not-formally-etale`.

## Repairs and local suppliers

Repairs this dispatch (each recorded in the item's manifest row, facts and contract):

1. `thm-conormal-sequence-closed-immersion` step 2.2 now derives `B=P/I` from [F1] and cites
   `[F1, F3, F4, F5, F11, step 1.1, step 1.2]`.
2. `thm-transitivity-sequence-schemes` step 1.1 cites F3 (pullback) and explains
   `f^*Ω = O_X⊗_{f^{-1}O_Y} f^{-1}Ω`; step 2.2 cites F3.
3. `thm-cotangent-space-maximal-ideal-quotient` step 2.1 cites F4 (`def-relative-cotangent-space`).
4. `thm-tangent-vectors-dual-numbers` step 3.1 rewritten to cite steps 1.1 and 2.1 (bare `1.2` tokens removed).
5. `lem-differential-of-morphism-via-cotangent-map` step 3.1 now names steps 2.1 and 2.2.
6. `thm-formally-unramified-differentials-zero` gained the declared dependency `def-closed-immersion-schemes`.
7. `lem-sheaf-differentials-affine-compatibility` gained the declared dependency `def-localisation-of-a-module`
   (frontmatter + manifest row) to clear the `cited-not-in-deps` depcheck finding on its two fraction-gluing steps.
8. `lem-finite-type-field-zero-differentials-finite-separable` and `lem-etale-residue-extensions-finite-separable`:
   replaced `ex-noetherian-integers-and-fields` (a B-page leaf flagged `b-leaf-content`) by the A-page supplier
   `lem-field-is-noetherian` in deps and fact text; the residue-extension lemma also gained
   `thm-finitely-generated-algebraic-extensions-are-finite`.
9. `cex-differentials-purely-inseparable-field-nonzero`: the overloaded step was split into 3.1 (Frobenius identity,
   [F3,F4]) and 3.2 (divisor argument, [F1,F5]); the canonical stratification was adopted at every reference.
10. `ex-unramified-closed-point-immersion`: added `generation: role: example` (content-policy `generated-role`); the
    overloaded general step was split into 3.2 (Ω vanishes for a general closed immersion), 4.1 (local finite type on
    affine charts) and 5.1 (unramifiedness), with the stale prose reference corrected. Repairs 9 and 10 clear the only
    two strict-contract `shotgun-bracket` warnings; the batch contract is now 0 errors / 0 warnings.

Local suppliers added to the assigned A page (registered in manifest, coverage, contracts and the A page; a separate
class, not sent through a Step 3 self-review loop):

- `lem-affine-module-sheaf-universal-property` — for `X=Spec B`, the sheafification of `U ↦ M⊗_B O_X(U)` represents
  `F ↦ Hom_B(M,F(X))`; functorial, right exact, `B~ ≅ O_X`, `Γ(X,B~)=B`; no finiteness. Sources: Stacks *Schemes*
  Lemma 26.7.1 (tag 01I7); Stacks *Modules* Definition 17.10.1 (tag 01BE), Lemma 17.10.5 (tag 01BH), Definition 17.10.6
  (tag 01BI). Required by `lem-sheaf-differentials-affine-compatibility`.
- `lem-field-is-noetherian` — a field's only ideals are `(0)` and `K`, so every ideal is finitely generated and the field
  is Noetherian; choice-free. Sources: Stacks *Algebra* §10.31 (tag 00FM) and Lemma 10.31.3 (tag 00FO). Added to remove
  two dependencies on a B-page leaf item and to supply the Noetherian hypothesis of the cotangent/Nakayama chain.

Hand verification performed on the load-bearing results: the tilde-sheaf universal property (inverse
`m⊗a ↦ a·g(m)|_U`, mutually inverse because values on `m⊗1` determine the map), the field lemma (two-element ideal
list), the sheaf conormal sequence (α kills `I²` by Leibniz plus `t∘i=0`; exactness on affine charts and stalks), the
unramified-diagonal theorem (both directions, including the principal-open/idempotent converse), the finite-type field
lemma (localize to `C = B_s⊗_kK`, `C ≅ K^r` by CRT, `K`-basis independence bounds `dim_k B_s`, nonzero nilpotent from
the `p^e`-th power of the separable core), and the residue-extension lemma against the batch-3 supplier's hypotheses.

## Checks actually run (pair scope, explicit paths)

| Check | Result |
|---|---|
| `precheck.mts` on the 43 owned explicit paths | 32 checked, 0 failing (11 definitions/remarks have no proof body) |
| `proof-contract.mjs ...batch-6.proof-contracts.json --strict` | 0 errors, 0 warnings, 62/62 items |
| `rendercheck.mjs` on both owned library pages | OK, 2 files |
| `content-policy.mjs ...batch-6.pages.json` | 80 scoped items, 0 errors, 0 warnings |
| `coverage-checklist.mjs ...batch-6.coverage.json --require-destination` | 2 pages, 167 harvested rows, 0 errors, 0 warnings |
| `manifest-deps.mjs ...batch-6.pages.json` | 80 items, 0 normalized, 0 errors |
| `validate-plan.mjs research/plan-spec.json` | OK: acyclic, no item cycles/forward references/B-page dependencies/unresolved ids |
| `depcheck.mjs --quiet` / `fwdcheck.mjs` | zero findings on any owned item or page; both still exit FAIL on pre-existing library-wide debt outside this pair |
| `frontier-dependency-ledger.mjs refresh --run frontier-35-ten-categories` | refreshed; 16/16 batches reviewed, 46 declared edges, 0 orphaned, one unreviewed edge outside this pair (batch 17 → batch 14, named below); batch-6's five rows all `verified` |
| Consumer scan (`items/*.md` and every library page) | zero non-owned references to any owned id |

## Published concerns

- None claimed. `thm-conormal-sequence-closed-immersion` cites published `thm-conormal-exact-sequence-algebra` only
  through its statement, and that statement asserts right exactness with no injectivity of the first arrow, matching the
  sheaf statement exactly; no convention mismatch was found in the published supports used here
  (`thm-conormal-exact-sequence-algebra`, `thm-affine-closed-immersions-quotient-rings`, `thm-pullback-pushforward-module-adjunction`,
  `thm-exactness-of-sheaves-stalkwise`, `thm-sheafification-universal-property`, `thm-nakayama-lemma`,
  `lem-determinant-trick-for-nakayama`, `thm-global-sections-affine-scheme`, `thm-sections-basic-open-affine-scheme`).
- No published item depends on anything owned here (explicit scan found zero consumers), so this dispatch produces no
  published-consumer event and `research/published-consumer-supplier-ledger.md` was **not** touched (the serial
  reconciler owns it).
- Global gate failures observed and left alone as outside this pair's edit authority: the `def-flat-abelian-sheaf`
  item cycle and the brauer/blocks page cycle in `depcheck`/`fwdcheck`, 333 `published-unaudited` rows, 6 pre-existing
  `b-leaf-content` rows, 140 `multi-home` rows, 30 `forward-undeclared` rows elsewhere, and the 12 global `extcheck`
  findings recorded in the Step 1 notes. None lies in this pair's dependency closure.

## Open obligations and plan mismatches (for Step 4)

- **Plan rows still empty.** Plan rows 366.071/366.072 carry no item lists; the batch manifest supplies the post-author
  inventory for the Step 4 splice. The A page has 34 items against the plan's 32-item design inventory because of the two
  local suppliers added by this dispatch; both are registered and checked, and neither enlarges any promised claim.
- **Prose/plan note (not a local repair).** The coverage row for `def-smooth-relative-dimension-via-differentials` says
  “only the rank condition is defined here; full smoothness comparison is deferred”. In the source treatment the rank
  condition is defined *inside* smoothness: Stacks *Morphisms* Definition 29.35.13 (tag 02G2, fetched 2026-09-24) reads
  “smooth of relative dimension `d`” as smooth together with `Ω_{X/S}` finite locally free of constant rank `d`. The
  page's own wording is careful (it defines differential rank, states that it is not a smoothness criterion, and defers
  only the flatness/fibre-dimension/finite-presentation comparison), so no item was changed; Step 4 should keep the plan
  and coverage prose at that precision rather than implying the source bundles the comparison as a mere later fact.
- **Unresolved suppliers (recorded, not hidden).** Three owned items consume four batch-3 `status: draft` scaffolds —
  `thm-kahler-differentials-existence-presentation` → `def-ag-universal-algebraic-differentials`;
  `lem-etale-residue-extensions-finite-separable` → `lem-ag-separable-residue-cotangent-sequence` and
  `def-ag-separating-transcendence-basis`; `def-smooth-relative-dimension-via-differentials` →
  `def-ag-standard-smooth-algebra` — together with the page-level edge to
  `algebraic-differentials-separability-and-smooth-local-presentations`. All five suppliers were re-read this dispatch,
  their statements match the uses, and all five batch-6 review rows are `verified`. They are unpublished ready scaffolds,
  so any later change to their statements invalidates the affected owned receipts.
- **Run-ledger observation (outside this pair; for the owner/Step 4).** `frontier-dependency-ledger.mjs refresh --run
  frontier-35-ten-categories --require-reviewed` still refuses because one declared same-frontier edge has no reviewer
  row: item `def-type-a-standard-graph-bimodules-support-filtrations-and-character` (consumer batch 17) →
  `def-graded-ring-module-bimodule-and-internal-shift` (supplier batch 14), declared in the consumer's frontmatter only.
  Batch 6 has no unreviewed edge; batch 17's owner must record the review. This pair's own authoring added one missing
  review row: `lem-etale-residue-extensions-finite-separable` → `def-ag-separating-transcendence-basis` (use: [F8] plus
  step 4.1, where finite separability of `κ(x)/κ(s)` is converted into separably generated before the batch-3
  separable-residue cotangent sequence is applied).
- **AC.** Declared exactly on `lem-finite-type-field-zero-differentials-finite-separable` and
  `lem-etale-residue-extensions-finite-separable`, each with its exact uses (algebraic closure, vector-space bases,
  maximal ideals/Nakayama) in the statement; every other owned item is choice-free, including the whole algebraic and
  sheaf differential package.
- **Owner-held escalations.** None. No unresolved mathematics, no empty quantifier, no dropped hypothesis, and no
  cross-group change is required.
- **Sibling pair.** Untouched; its rows, contracts, coverage and library pages are preserved as recorded above.
  The Step 1 inventory for this pair (32 A + 9 B = 41) is exactly the 41 designed items authored here; the two local
  suppliers are the additions reported above. The sibling pair's own inventory is its writer's responsibility.

## Handoff

Completed: all 43 owned items and both A/B pages, registered and checked as tabled above, each with a current Step 3b
decision receipt (30 `accept`, 11 `repaired`, confidence 1, examined dependency IDs recorded). Local suppliers added:
`lem-affine-module-sheaf-universal-property`, `lem-field-is-noetherian`. No published concern is claimed; no open
obligation requires owner action. Next action: Step 4 post-author inventory snapshot and plan splice; nothing further
from this pair.

## Owner repair and recertification after the author handoff

The later read-only audit and owner repair corrected a false fibre claim in
`lem-differential-of-morphism-via-cotangent-map`: when $x\mapsto y$ and
$\kappa(y)\subsetneq\kappa(x)$, the dual fibre map takes values in the
$\kappa(x)$-dual of the cotangent space at $y$ extended to $\kappa(x)$, not in
$T_{Y/S,y}$. The Frobenius example and rank-warning remark now use that precise
target. The manifest statement and strategy were aligned with the repaired
item. The diagonal-ideal lemma's purported inverse
`Psi(b⊗c)=−c dc` was not bilinear; its proof now distinguishes the raw
generators $j_b=1⊗b−b⊗1\in J$ from their classes in $J/J²$ and uses the
bilinear inverse `Psi(b⊗c)=b dc`. Its calculation shows `Psi(J²)=0` and proves
the two-sided inverse. Both repaired mathematical statements have current
owner item decisions, as do their affected consumers.

The sheaf conormal proof now takes the full inverse image of an affine target
chart; the conormal, scheme transitivity and scheme base-change proofs compute
pullback module stalks by tensoring with the source local ring. This removes
the false identification of inverse-image sheaf sections with source ring
sections. The finite-type field proof now cites its earlier equality
`B_s=L` when identifying `C=L⊗_kK`, and the open-diagonal converse derives
comaximality of powers by expanding `(i+k)^{2m−1}`. Smaller repairs corrected
the variance label in the Kähler definition, obsolete affine-module prose,
the local base-section argument, tangent-basis wording and one proof-step
reference in the B examples.

The owner reviewed all five B items that were absent during the read-only
audit. The purely inseparable field, conormal noninjectivity and closed-point
examples have sound statements and witnesses; the affine tangent and
Frobenius items received the wording fixes above. No unresolved mathematical
claim was left in the pair. The owner recorded one current scope `proceed`
receipt and refreshed 37 item receipts after the first repair wave, then the
diagonal-ideal lemma and its seven dependent receipts after its proof repair;
all current pair decisions are closed. These owner receipts supersede the
author decisions reported above without altering their historical evidence.

Final checks: explicit precheck on all 32 proof-bearing owned items passed
before the last two wording corrections; precheck on the 10 repaired proof
items and separately on the diagonal-ideal lemma passed afterward. Strict
proof-contract checking passed on all 62 batch-6 proof contracts with zero
errors or warnings. Both pages passed rendercheck. The batch-6 manifest
dependency check passed for 80 items, and content policy passed for 80 items
with zero errors or warnings. `step3-decisions check --phase final` reports
zero open rows for this pair; the run still has open rows in other pairs,
outside batch-6 ownership.
