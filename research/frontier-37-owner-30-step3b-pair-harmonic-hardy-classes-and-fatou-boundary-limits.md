# Step 3b — pair `harmonic-hardy-classes-and-fatou-boundary-limits` (batch 25)

Run `frontier-37-owner-30`, role `alpha-high`. Owned A page
`harmonic-hardy-classes-and-fatou-boundary-limits` (11 items) and owned B page
`harmonic-hardy-classes-and-fatou-boundary-limits-examples` (3 items) in the
shared batch manifest `research/frontier-37-owner-30-batch-25.pages.json`.
This file is the authoring checkpoint; it is updated after every item.

## State log

- Read: CLAUDE.md, SCHEMA.md, WORKFLOW.md, batch manifest, coverage, notes,
  cross-batch input (`[]`), Step 3a scope review (sufficient; no owner
  direction file exists for this run), pre-splice plan findings (no row names
  this pair), the ABR Ch. 6 full text (PDF pp. 116-125, 133-142; re-extracted
  to `/tmp/step3a-hh/hft_ch6_clean.txt`), the Koch Ch. 3 coverage rows, and the
  full statements of every declared direct supplier.
- Authoring order (dispatch): def-circle-maximal-function-and-nontangential-region;
  def-harmonic-hardy-class-disc; def-poisson-integral-of-finite-boundary-measure;
  lem-circle-maximal-weak-one-one; thm-poisson-extension-lp-contraction-and-norm-limit;
  thm-poisson-nontangential-maximal-bound; thm-fatou-nontangential-boundary-theorem-harmonic;
  thm-harmonic-hardy-one-measure-representation; cex-radial-boundary-limit-does-not-force-tangential-limit;
  thm-harmonic-hardy-representation-p-greater-one; thm-harnack-convergence-positive-harmonic-functions;
  ex-poisson-boundary-atom-in-h-one; ex-poisson-extension-of-an-indicator-arc;
  cor-bounded-harmonic-functions-have-nontangential-limits.

## Scaffold-audit decisions (author-level, carried into the arguments)

1. **Density-measure pairing joint (resolved, no new item).** `P[f] := P[fm]`
   needs `∫ g d(fm) = ∫ gf dm`. Published suppliers exist:
   `thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation`
   (fm is a finite complex measure, `|fm| = |f|m`),
   `def-radon-nikodym-derivative` + `thm-integration-against-a-radon-nikodym-derivative`
   (f is a representative of `d(fm)/dm`, so the pairing identity holds). No new
   item was added for this; the identity is quoted from the published theorem.
2. **Maximal bound constant.** `(A+1)^2` verified against ABR 6.28/6.29/6.30
   (their `C_alpha = (1+A_alpha)^n`, `n=2` for the disc) with the exact chain
   `| |x|ζ − η | ≤ | |x|ζ − x | + |x−η| ≤ |ζ−x| + |x−η| ≤ (A+1)|x−η|`;
   the middle inequality `||x|ζ − x| ≤ |ζ − x|` is elementary (verified from
   `(1−r)(1+r−2u) ≥ 0`, `u = Re(ζ̄x) ≤ r`).
3. **Weak-(1,1) constant 3 on the circle.** ABR 6.33/6.37 with `3^{n-1}=3`
   for the circle; local proof by lower semicontinuity (ABR's own Fatou
   argument), finite cap cover, greedy disjoint selection, triple dilation.
4. **Fatou theorem.** ABR 6.39's density argument, made measurable-containment
   exact: for each `ε>0` the bad set is contained in `{C_A M_T(f−g) > t} ∪
   {|f−g| > t}` with `m`-measure `≤ (3(A+1)^2+1)·ε/t`; integer apertures
   suffice because `Γ_A ⊆ Γ_m` for `A ≤ m`.
5. **h¹ representation.** ABR 6.13(a) route via `cor-separable-banach-dual-ball-...`
   with `C(T,C)` separable (from
   `lem-continuous-functions-on-a-compact-metric-space-have-a-countable-dense-family`
   plus the real/imaginary combination), then the Poisson representation
   `thm-poisson-representation-for-disc-harmonic-functions` on the discs of
   radius `r_j`, and `|μ|(T) ≤ ||u||_{h¹}` by testing the defining functional against
   continuous `g` with `||g||∞ ≤ 1`. The `no L¹ density` clause is proved with
   the Dirac witness inside the item.
6. **p>1 representation.** Scaled-duality route: `1<p<∞` by reflexive weak
   subsequences; `p=∞` from the h¹ measure plus `L¹`-duality
   (`thm-sigma-finite-duality-for-bounded-functionals-on-l-p` with `p=1` on the
   two real components) and the sharp norm from
   `lem-complex-lq-norm-from-finite-simple-dual-tests` at `q=∞`.
7. **Positive-harmonic representation.** `||u_r||_1 = u(0)` (mean value),
   h¹ representation, positivity of the limit measure proved in-item by a
   regularity/Urysohn argument (`lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set`),
   then weak-star sequential compactness of the probability measures and
   uniform convergence on compact subsets of `D`.
8. **Counterexample.** Disjoint arcs at `t_n = 2^{-n}` of half-width
   `w_n = 2^{-3n}`; radial value at `[0]`: `O(ε)` (explicit sum estimate);
   tangential values at `z_n = (1−w_n)e^{2πi t_n}` bounded below by
   `(2−w_n)/((π+1)^2 w_n) → ∞`; approach ratio `≍ 2^{2n} → ∞`.
9. **Indicator-arc example.** `||u_r||_1 = m(I)` by the mean value property;
   contraction gives `||u_r||_p ≤ m(I)^{1/p}`; interior points by a
   localisation argument (complement mass vanishes); the endpoint radial
   limit `1/2` by symmetry `∫_0^δ p_r = (1/2)(1 − o(1))`.
10. **Choice bookkeeping.** Definitions/lemmas carry `AC_ω`; the h¹, `p>1`,
    bounded-harmonic and positive-measure items carry full AC (which supplies
    DC, the ultrafilter lemma and Hahn-Banach at the exact published
    suppliers).

## Per-item checkpoint

| # | Item | State | Notes |
|---|---|---|---|
| 1 | def-circle-maximal-function-and-nontangential-region | authored | rendercheck pass |
| 2 | def-harmonic-hardy-class-disc | authored | rendercheck pass (fixed one multiline display) |
| 3 | def-poisson-integral-of-finite-boundary-measure | authored | rendercheck pass (fixed one multiline display) |
| 4 | lem-circle-maximal-weak-one-one | authored | precheck pass; rendercheck pass |
| 5 | thm-poisson-extension-lp-contraction-and-norm-limit | authored | precheck pass; rendercheck pass; need dep refresh in manifest (dropped fubini/dominated; added harmonicity suppliers) |
| 6 | thm-poisson-nontangential-maximal-bound | authored | precheck pass; rendercheck pass; layer-1/2/3 structure fixed |
| 7 | thm-fatou-nontangential-boundary-theorem-harmonic | authored | precheck pass; rendercheck pass |
| 8 | thm-harmonic-hardy-one-measure-representation | authored | precheck pass; rendercheck pass (2026-09-30) |
| 9 | cex-radial-boundary-limit-does-not-force-tangential-limit | authored | precheck pass; rendercheck pass. Repairs vs scaffold: (a) added `thm-fatou-nontangential-boundary-theorem-harmonic` as supplier (the Statement's no-contradiction clause needs it; raises level 2 -> 3); (b) provenance proof changed ai-altered -> ai-generated (derivation is not adapted from a published argument; no source URL would otherwise be required and none exists); (c) constants: radial bound is O(eps), tangential lower bound is the constant 1/(pi+1)^2 (NOT divergent — the scaffold note claiming divergence was wrong). |
| 10 | thm-harmonic-hardy-representation-p-greater-one | authored | precheck pass; rendercheck pass (after one multiline-display fix). Both cases (1<p<∞ reflexive weak limit; p=∞ via h¹ boundary measure + C(T) functional bound + L¹-density extension + L¹–L∞ duality + complex-simple dual-test norm). deps extended beyond scaffold (extension theorem, Riesz uniqueness, Fubini, regularity). |
| 11 | thm-harnack-convergence-positive-harmonic-functions | authored | precheck pass; rendercheck pass (2026-09-30). Parts: (a) nonnegative harmonic u ⇒ u∈h¹ with norm u(0) (circle MVP), unique boundary measure μ; positivity of μ by testing nonnegative continuous g (Λ positive bounded functional + `lem-positive-c-zero-functionals...` uniqueness) ⇒ μ≥0, μ(T)=u(0). (b) converse via 1.1-type positivity claim for the signed integral. (c) u_n(0)=1 ⇒ probability measures μ_n; weak-star sequential compactness (separable C(T,C) via T ≅ S¹ compact metric + countable dense family lemma); limit μ≥0 with μ(T)=1; u=P[μ]; pointwise then locally uniform via explicit kernel Lipschitz bound 12N⁴|z−z′| on compacta + finite δ-net. deps extended substantially (choice bookkeeping, kernel estimate, separability, uniform convergence). |
| 12 | ex-poisson-boundary-atom-in-h-one | authored | precheck pass; rendercheck pass (2026-09-30). Boundary atom δ_{ζ0}: u=P[δ] ∈ h¹, ‖u‖=1, no L¹ density (m({ζ0})=0), limits 0 off ζ0, radial blow-up (1+r)/(1−r). AC carried via h¹ representation + second-countable regularity. |
| 13 | ex-poisson-extension-of-an-indicator-arc | authored | precheck pass; rendercheck pass (2026-09-30). ||u_r||₁=m(I)=2h via circle MVP; ||u_r||_p ≤ m(I)^{1/p}; limits 1/0 at interior points (localized kernel bound via chord estimate \|e^{2πix}−1\|≥2\|x\|, \|x\|≤1/2); radial limit 1/2 at endpoints by evenness; indicator itself jumps. |
| 14 | cor-bounded-harmonic-functions-have-nontangential-limits | authored | precheck pass; rendercheck pass (2026-09-30). p=∞ representation (+ norm equality) + Hölder (∞,1) with m(T)=1 gives f∈L¹, then L¹ Fatou. AC carried (AC⇒DC⇒AC_ω at step 1.1). Layer auto-repair adopted verbatim (steps 1.1, 2.1, 3.1, 4.1, 5.1). |

## Pages, manifest, contracts checklist

- [x] All 14 items authored, precheck + rendercheck pass.

## Final record (2026-09-30)

### Handoff — completed IDs

Authored, checked and recorded in this dispatch (dispatch order; IDs unchanged;
all 14 also carry a current `step3b-review` receipt at the frozen tree):

| # | Item | Kind | Recorded decision |
|---|---|---|---|
| 1 | def-poisson-integral-of-finite-boundary-measure | A | repaired, confidence 1 |
| 2 | def-harmonic-hardy-class-disc | A | repaired, confidence 1 |
| 3 | def-circle-maximal-function-and-nontangential-region | A | repaired, confidence 1 |
| 4 | lem-circle-maximal-weak-one-one | A | repaired, confidence 1 |
| 5 | thm-poisson-extension-lp-contraction-and-norm-limit | A | repaired, confidence 1 |
| 6 | thm-poisson-nontangential-maximal-bound | A | repaired, confidence 1 |
| 7 | thm-fatou-nontangential-boundary-theorem-harmonic | A | repaired, confidence 1 |
| 8 | thm-harmonic-hardy-one-measure-representation | A | repaired, confidence 1 |
| 9 | cex-radial-boundary-limit-does-not-force-tangential-limit | B | repaired, confidence 1 |
| 10 | thm-harmonic-hardy-representation-p-greater-one | A | repaired, confidence 1 |
| 11 | thm-harnack-convergence-positive-harmonic-functions | A | repaired, confidence 1 |
| 12 | ex-poisson-boundary-atom-in-h-one | B | repaired, confidence 1 |
| 13 | ex-poisson-extension-of-an-indicator-arc | B | repaired, confidence 1 |
| 14 | cor-bounded-harmonic-functions-have-nontangential-limits | A | repaired, confidence 1 |

All 14 IDs existed in the Step-3 auditor baseline scaffold inventory, so they
are ordinary scaffold items: none is eligible for the auditor-created bypass
(which requires absence from both the baseline inventory and its item-file
list), and each carries a current receipt under the frozen tree.
`node tools/step3-decisions.mjs check --run frontier-37-owner-30 --phase final`
leaves 0 run items of this pair open; the run-wide gate stays open only for
other pairs.

### Checks actually run (frozen tree)

| Check | Command (explicit paths unless noted) | Result |
|---|---|---|
| Item phase format | `node tools/tsx-run.mjs tools/precheck.mts` on all 14 item files | 11 checked, 0 failing; the 3 definitions carry no phase body |
| Rendering | `node tools/rendercheck.mjs` on 14 items + both pages | OK, 16 files: no math/YAML defects |
| Content policy (items) | `node tools/content-policy.mjs research/frontier-37-owner-30-batch-25.pages.json` | 14 scoped items, 0 errors, 0 warnings |
| Proof contracts | `node tools/proof-contract.mjs research/frontier-37-owner-30-batch-25.proof-contracts.json --strict` | 0 errors, 0 warnings, 14/14 items |
| Coverage | `node tools/coverage-checklist.mjs research/frontier-37-owner-30-batch-25.coverage.json --require-destination` | 1 page, 47 harvested rows, 0 errors, 0 warnings |
| Manifest deps | `node tools/manifest-deps.mjs research/frontier-37-owner-30-batch-25.pages.json` | 14 items, 0 normalized, 0 errors |
| Dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30` | 812 items / 60 pages, exit 0 |
| Plan validation | `node tools/validate-plan.mjs research/plan-spec.json` | OK: acyclic, no item cycles, forward refs or B-page deps |
| Prose | `node tools/prosecheck.mjs` on the 16 files | 0 errors, 2 heuristic `count-in-prose` warnings ("two definitions" phrasing) |
| Repo depcheck | `node tools/depcheck.mjs` (repo-wide) | FAIL repo-wide: 570 pre-existing findings, **0** on this pair's items/pages |
| Repo precheck | `node tools/tsx-run.mjs tools/precheck.mts` (bare, repo-wide) | 17881 checked, 13 failing — all on other pairs (none of this pair's 14 items) |
| Repo forward refs | `node tools/fwdcheck.mjs --quiet` | 134 errors — none on this pair |
| Dep-to-page resolution | `node tools/depsource.mjs` | OK, 0 unresolved; 0 of its warnings touch this pair |
| Ledger refresh | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30` | FAIL — blocker below (another pair's file) |
| Artifact accounting | `checkPairAuthorArtifacts(root, run, [A page])` | ok, 18/18 required files present and non-empty |

Manifest rows were synced to the item frontmatter and are idempotent
(re-running the sync script leaves the file byte-identical); the cross-batch
input `research/frontier-37-owner-30-batch-25.cross-batch-dependencies.json` is
`[]` and the closure walk (1547 transitive nodes) found 0 missing and 0
non-published non-owned nodes.

### Local suppliers added by this dispatch

No new item IDs were minted. Local repairs to the scaffold's declared
dependencies, all inside this pair:

- `lem-circle-maximal-weak-one-one`: added
  `def-total-variation-of-a-signed-or-complex-measure` (used by the
  total-variation step, previously undeclared).
- `thm-poisson-extension-lp-contraction-and-norm-limit`: dropped the unused
  Fubini/dominated-convergence declarations; added the harmonicity,
  uniform-limit and approximate-identity suppliers actually used.
- `thm-harmonic-hardy-one-measure-representation`,
  `thm-harmonic-hardy-representation-p-greater-one`,
  `thm-harnack-convergence-positive-harmonic-functions`: dependency lists
  extended beyond the scaffold to the published suppliers the written proofs
  actually cite (Poisson representation, uniqueness, Fubini, regularity,
  choice, separability, kernel estimates, L^p duality).
- `cex-radial-boundary-limit-does-not-force-tangential-limit`: added
  `thm-fatou-nontangential-boundary-theorem-harmonic` (the Statement's
  no-contradiction clause; raises the item to level 3) and corrected the
  false scaffold claim of a divergent tangential lower bound to the true
  constant bound `(π+1)^{-2}`; provenance proof → `ai-generated` with
  `generation.role: counterexample`.
- `ex-poisson-boundary-atom-in-h-one`: removed the examples-page dependency
  `ex-dirac-integral-is-evaluation-at-a-point` (a B-leaf content dependency)
  and proved the evaluation identity locally in step 1.1.

### Flagged unfinished in-run suppliers

None. Every direct supplier and the whole transitive closure are published
items; no in-run item outside this pair appears in the closure and the pair has
no direct in-run prerequisite pair. No item decision was left escalated for an
unfinished supplier.

### Published concerns (owner-facing; suspicion vs confirmed)

- No confirmed defect was found in a published item used by this pair while
  authoring. Step-3a's supplier read was reused, the closure was re-resolved
  (0 missing, all published), and the specific mathematical uses were checked
  against the cited statements while writing (density-measure pairing,
  Radon–Nikodym identity, separability of C(T), dual-ball weak-star
  compactness, L^1–L^∞ duality, Chebyshev, mean-value property).
- Repo-wide `depcheck` currently reports 570 findings (175 cited-not-in-deps,
  141 multi-home, 138 link-unresolved, 104 dep-unresolved, 10
  page-item-missing, 1 orphan, 1 id-filename) — all on other pairs
  (scheme-theory residue, randomized-complexity duplication, in-flight sibling
  drafts). **None** touches this pair. Reported for the serial reconciler; not
  repaired here because they are other owners' files.

### Open obligations / escalations

1. **Escalation — run-wide ledger refresh blocked by another pair's item.**
   `node tools/frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30`
   fails with `Invalid escape sequence \c at line 26, column 170` while parsing
   `items/def-modular-specht-form-and-radical-quotient.md` (page
   `integral-specht-modules-and-modular-simple-modules`, batch 23, another
   owner). Cause: YAML double-quoted titles containing `\cap`/`\lambda`/`\perp`
   (`"…S^lambda/(S^lambda\cap(S^lambda)^perp)…"`). Proposed remedy (for the
   owning writer or a mechanical repair, not done here): single-quote those
   titles or escape the backslashes. Until then the unified ledger cannot be
   refreshed, though this batch's own input file is written and valid.
2. **Step-4 splice note.** `research/plan-spec.json` rows 835 (A) and 836 (B)
   still carry `items: []` with unchanged `order`/`requires`; the splice must
   copy the 11 A + 3 B manifest rows from
   `research/frontier-37-owner-30-batch-25.pages.json`. No other plan amendment
   is requested; the pre-splice findings file contains no row for this pair
   (its four "harmonic" rows belong to
   `poisson-problems-and-interior-harmonic-estimates`).
3. **Scope refresh (done, recorded).** The Step-3a `sufficient` review was
   invalidated by the authored statement/dependency repairs; this dispatch
   recorded a fresh `sufficient` scope decision at the current scope hash
   (`e2857ce623c19de0d8c0ff6c0b2c4168df4bd195875d4378a6078eb3b02d5ce7`) per the
   group-author brief. No owner-held scope exists for this pair and none was
   invented.
4. **Run-level observation (not pair-owned, no honest pair fix).** The
   `finite-smoke` registry currently defines only three checks
   (`gns-cyclic-c2-boundaries`, `polynomial-gaussian-derivatives`,
   `sl2-killing-form-matrix-calculation`); none is applicable to this pair's
   complex-analysis claims, and no batch contract in this run carries a
   `finite_smoke` entry (merged 236-item test contract: 0 checks). Consequently
   `gate-liveness --min-checks 1` reports `finite-smoke` as vacuous and exits 1
   for the merged level contract. Adding an inapplicable check would fabricate
   evidence, so this is left for the owner/serial lead (extend the registry or
   take the vacuity disposition); it is not a defect of this pair.

No further authoring work is owed on this pair. The recorded decisions are
bound to the current file bytes: any later edit to an item, its manifest row
or its closure invalidates them.
