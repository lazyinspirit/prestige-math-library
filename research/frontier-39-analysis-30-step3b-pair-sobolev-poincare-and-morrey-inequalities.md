# Step 3b authoring record — Sobolev, Poincaré and Morrey Inequalities

- Run: `frontier-39-analysis-30` (role: alpha-high; label
  `step3b-pair-sobolev-poincare-and-morrey-inequalities-cc09535983e36168`)
- A page: `sobolev-poincare-and-morrey-inequalities` (pde, order 458.025; batch 4)
- B page: `sobolev-poincare-and-morrey-inequalities-examples` (pde, order 458.026; batch 4)
- Batch: 4 (both pages). Shared files: `research/frontier-39-analysis-30-batch-4.{pages,coverage,proof-contracts,cross-batch-dependencies}.json`,
  `library/pde/sobolev-poincare-and-morrey-inequalities{,-examples}.md`.
- Entry state: the prior dispatch (`...-3eea4d6fb0846d19`, failed 2026-10-04T21:45Z) had
  left all 35 items, the batch-4 contracts and both pages on disk, and had recorded 35
  item receipts at 21:41Z, but no pair report. This pass re-audited every item against
  the current manifest, repaired the defects listed below, refreshed the registrations,
  and re-ran the full Step-3b check battery.

## Owned IDs and final status

All 35 owned item files exist and are fully authored on disk (26 A + 9 B). No new item
was created; no item was dropped.

- Level 0 (A): `cor-poincare-wirtinger-on-convex-domains`,
  `def-john-domain-and-john-constant`, `def-sobolev-conjugate-exponent`,
  `lem-mean-zero-poincare-estimate-on-bounded-connected-extension-domains-for-p-less-than-n`,
  `lem-pointwise-potential-bound-for-compactly-supported-smooth-functions`,
  `lem-weak-partial-derivatives-lower-sobolev-order`,
  `lem-weak-product-rule-for-bounded-sobolev-functions`,
  `rem-critical-sobolev-does-not-embed-in-linfinity`,
  `thm-gagliardo-nirenberg-sobolev-inequality-for-p-one`,
  `thm-poincare-inequality-for-w-one-p-zero`; (B)
  `ex-poincare-on-an-interval-with-sharp-scaling`.
- Level 1 (A): `lem-john-domain-admits-bounded-overlap-ball-chains`,
  `lem-truncated-riesz-kernel-potential-bounded-on-lp`,
  `thm-gagliardo-nirenberg-sobolev-inequality`, `thm-poincare-inequality-on-a-ball`,
  `thm-w-one-infinity-functions-have-lipschitz-representatives`; (B)
  `cex-poincare-without-mean-trace-or-zero-set-normalisation-fails`,
  `cex-w-one-p-to-lq-bound-fails-for-q-greater-than-p-star-by-dilation`,
  `ex-scaling-for-the-sobolev-conjugate`.
- Level 2 (A): `cor-sobolev-inequality-for-w-one-p-zero`,
  `lem-ball-mean-oscillation-potential-bound`,
  `thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n`; (B)
  `cex-sobolev-embedding-on-an-unbounded-domain-needs-the-full-norm-or-decay`.
- Level 3 (A): `thm-critical-sobolev-embedding-into-every-finite-lq`,
  `thm-morrey-inequality-for-p-greater-than-n`,
  `thm-poincare-wirtinger-on-bounded-john-domains`,
  `thm-sobolev-poincare-on-bounded-connected-extension-domains`.
- Level 4 (A): `rem-domain-classes-for-the-mean-zero-poincare-inequality`,
  `thm-higher-order-sobolev-embedding`,
  `thm-poincare-inequality-with-a-positive-measure-zero-set`; (B)
  `cex-morrey-endpoint-p-equals-n-fails`, `cex-poincare-wirtinger-needs-connectedness`,
  `ex-holder-representative-of-a-radial-sobolev-function`.
- Level 5 (A): `cor-sobolev-algebra-above-the-critical-index`; (B)
  `cex-critical-w-one-n-does-not-embed-in-linfinity`.

Item receipts: 15 of the 35 receipts already recorded by the prior attempt remain
hash-current (the untouched suppliers `cor-poincare-wirtinger-on-convex-domains`,
`def-john-domain-and-john-constant`, `def-sobolev-conjugate-exponent`,
`lem-pointwise-potential-bound-for-compactly-supported-smooth-functions`,
`lem-weak-partial-derivatives-lower-sobolev-order`,
`rem-critical-sobolev-does-not-embed-in-linfinity`,
`thm-gagliardo-nirenberg-sobolev-inequality-for-p-one`,
`thm-poincare-inequality-for-w-one-p-zero`, `ex-poincare-on-an-interval-with-sharp-scaling`,
`lem-truncated-riesz-kernel-potential-bounded-on-lp`, `thm-poincare-inequality-on-a-ball`,
`thm-w-one-infinity-functions-have-lipschitz-representatives`,
`cex-poincare-without-mean-trace-or-zero-set-normalisation-fails`,
`ex-scaling-for-the-sobolev-conjugate`, `lem-ball-mean-oscillation-potential-bound`).
The remaining 20 receipts are stale because the item, its manifest registration or a
transitive supplier changed; they cannot be re-recorded in this dispatch — see the
owner escalation below.

## Repairs made in this pass

**Claim amendments written into the item files and the batch-4 manifest** (these change
the pair scope hash; owner ratification required):

1. `thm-poincare-wirtinger-on-bounded-john-domains`: the statement promised
   `||u-u_Ω||_{L^p} ≤ C(n,p,c_J)||Du||_{L^p}` with a constant independent of the
   domain. That is false: for `Ω = B(0,R)` with the centre as distinguished point
   (`c_J = 1` for every `R`) and `u(x) = x_1`, the ratio of the two sides is
   `c R^{1+n/p}/c' R^{n/p} = (c/c')R → ∞`. The statement now carries the necessary
   factor `diam(Ω)`; step 3.1 was rewritten accordingly (the truncated-kernel bound is
   applied with `ρ = diam Ω` directly, and the earlier invalid "absorption of |Ω| into
   a constant depending only on n,p,c_J" was removed).
2. `thm-poincare-inequality-with-a-positive-measure-zero-set`: same defect and same
   repair (`C(n,p,c_J,γ) diam(Ω)`).
3. `thm-higher-order-sobolev-embedding`: assertion (1) said "for every `q` with
   `1/q ≥ 1/p-k/n` (equivalently `p ≤ q ≤ np/(n-kp)`)". The equivalence is wrong —
   the set is `1 ≤ q ≤ np/(n-kp)` — and step 2.1's sentence "every such q satisfies
   `q ≥ p`" was false; the defect was repaired to `1 ≤ q ≤ p*_k` (Holder supplies
   `q < p` on the finite-measure domain).
4. Manifest-only registration corrections (item text was already correct; the manifest
   claimed a different, false formula and was synced to the item): 
   `ex-holder-representative-of-a-radial-sobolev-function` (denominator `pδ`, not
   `p(α_0+δ)-n`), `cex-sobolev-embedding-on-an-unbounded-domain-needs-the-full-norm-or-decay`
   and `cex-w-one-p-to-lq-bound-fails-for-q-greater-than-p-star-by-dilation` (derivative
   scaling `λ^{n/p-1}` / `k^{n/p-1}`, the reciprocal of the scaffolded formula, so that
   each row is consistent with its own λ-ratio), and
   `cex-morrey-endpoint-p-equals-n-fails` (self-contained witness statement replacing
   the cross-reference/truncation formulation).

**Proof repairs** (statement text unchanged):

5. `lem-john-domain-admits-bounded-overlap-ball-chains`, step 1.2 (near case
   `x ∈ B(x_0,2r_0)`): the scaffolder's chain had disjoint consecutive balls (so
   property (1) failed) and, for `x = x_0`, infinitely many balls through one point
   (so property (3) failed). Replaced by an explicit chain with radii halving at each
   step and centres moving towards `x` (along a fixed direction when `x = x_0`):
   consecutive balls overlap in a ball of radius `r_i/4`, the union lies in
   `B(x_i,3r_i/2)`, and a point lies in at most two balls. Assembly step 4.1 updated
   (`M ≥ max(6^n, M_1, 4c_J, N, 2, 1)`).
6. `thm-morrey-inequality-for-p-greater-than-n`, step 3.1, case `ℓ > r/2`: step 2.1
   (radius `2r`) was not licensed because its proof requires `B(x,4r) ⊂⊂ Ω`. Replaced
   by the direct mean over `B(x,2r)` from step 1.1.
7. `thm-gagliardo-nirenberg-sobolev-inequality` (1<p<n), step 1.1: `v_δ` decreases to
   `|u|^γ` as `δ ↓ 0`, not increases; the limit was redone with monotone convergence
   applied to `v_1 - v_δ` (dominated by `(|u|+1)^γ`, integrable on the compact support).
8. `lem-weak-product-rule-for-bounded-sobolev-functions`, step 1.2: the truncated
   square `G_M` is `C^1` (its derivative is `2M sgn t` outside `[-M,M]`), so the chain
   rule applies directly with `G_M'(w) = 2w` a.e.; the false "fails to be
   differentiable at ±M" and the unsupported "level-set clause" sentence were removed.
9. `cor-sobolev-algebra-above-the-critical-index`: the scaffolded route ("iterate the
   weak product rule for bounded factors") is not valid at top orders because
   intermediate derivatives need not be bounded. Rewritten as: step 1.1 product
   estimate for `D^{γ_1}w_1 D^{γ_2}w_2` (explicit exponents `∞`, `1/p-s/n`, `1/(2n)` at
   the critical order; the sum is `≤ 1/p` in every case), and step 2.1 the Leibniz
   identity via Meyers–Serrin smooth approximation, termwise `L^p` convergence,
   and the test-function characterisation of the weak derivative. Dependencies
   updated: added `thm-meyers-serrin-density-on-an-arbitrary-open-set` and
   `def-weak-derivative-of-a-locally-integrable-function`; removed
   `lem-weak-product-rule-for-bounded-sobolev-functions` and
   `def-local-holder-and-c-two-alpha-norms-on-euclidean-balls` (no longer used).
10. `thm-higher-order-sobolev-embedding`, step 3.1: replaced the vague borderline
    sentence with the exact Morrey exponent `k-m-n/p` (equality allowed in the
    non-integer case) and added the consistency argument for the representatives of
    the various derivatives (continuity + uniqueness of weak derivatives; dependency
    `lem-weak-derivatives-are-unique-almost-everywhere` added).
11. `lem-mean-zero-poincare-estimate-on-bounded-connected-extension-domains-for-p-less-than-n`,
    steps 3.1/4.1: the compact-support claim for mollifications needs `0 < ε ≤ 1`; the
    steps now say so (the diagonal uses `ε_m = 2^{-m}`).
12. `cex-critical-w-one-n-does-not-embed-in-linfinity`, step 1.1: "f ∈ L^n because it is
    bounded with compact support" was false (f is unbounded at 0). Replaced by a
    direct test-function proof that `h_i = φD_ig + gD_iφ` is the weak gradient of
    `f = φg` on `R^n` (`supp φ ⊂ B(0,ρ)`, `ρ<1`, using the weak-derivative identity
    for `g ∈ W^{1,n}(B(0,1))`), with `f ∈ L^n` from `|f| ≤ |g|` on `B(0,ρ)`.
13. `cex-morrey-endpoint-p-equals-n-fails`, step 1.1: the passage "f is C^1 off the
    point 0, hence f ∈ W^{1,n}(B)" was completed by the integration-by-parts
    boundary-term computation on `B \ B(0,ε)` (`ε^{n-1} loglog(1/1/ε) → 0`).

Manifest registrations were updated in the same pass (statements synced, strategies
refreshed for items 1, 5, 9, 10 and for the four registration corrections;
dependencies synced for items 9 and 10). The batch-4 proof contracts were regenerated
for the 12 edited items (`tools/regen-contract-entries.mjs`) and the `zero`/`one`/
`degenerate`/`nonempty-choice` boundary rows of `cor-sobolev-algebra-above-the-critical-index`
were updated by hand; the merged run contracts were rebuilt
(`tools/merge-proof-contracts.mjs`). Page prose adjusted once: the A-page sentence
"the Leibniz rule for bounded Sobolev factors" → "the higher-order Leibniz identity".

No published item was edited; no item or page ID was added or removed.

## Checks actually run (all after the last edit)

- `node tools/tsx-run.mjs tools/precheck.mts <all 35 item paths>` → 31 checked, 0 failing.
- `node tools/proof-layout.mjs <all 35 items> <A page> <B page>` → 37 items, 117 steps, 0 defects.
- `node tools/rendercheck.mjs <all 35 items + 2 pages>` → OK (KaTeX, YAML, delimiters).
- `node tools/content-policy.mjs research/frontier-39-analysis-30-batch-4.pages.json`
  → 35 scoped item(s), 0 error(s), 0 warning(s).
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-4.coverage.json --require-destination`
  → 2 page(s), 77 harvested result(s), 0 error(s).
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-*.pages.json`
  → 928 item(s), 0 error(s).
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
  → 928 item(s) checked across 60 page(s); no mismatch (declared levels of all 35
  owned items verified; levels unchanged by this pass).
- `node tools/validate-plan.mjs research/plan-spec.json` → OK (page order acyclic and
  consistent; plan-spec still carries empty item arrays, spliced at Step 4).
- `node tools/proof-contract.mjs research/frontier-39-analysis-30-proof-contracts.json --strict --items <35 ids>`
  → 0 error(s), 0 warning(s), 35/35 checked.
- `node tools/manifest-integrity.mjs --run frontier-39-analysis-30` → 60 owed, 60 present, no scope drift.
- `node tools/prosecheck.mjs` → OK; `node tools/pathcheck.mjs` → 0 errors (28 warnings, elsewhere);
  `node tools/depsource.mjs research/plan-spec.json` → OK; `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30` → refreshed.
- Run-wide observations (not owned by this pair, reported for the reconciler):
  merged `proof-contract --strict` reports 59 errors run-wide (at the time of writing);
  none is in this pair's 35 rows, and only the seven consumer rows listed in the next
  section touch this pair's items; the rest belong to the other in-flight groups
  (Hardy/Hone, Khovanov, semigroups, coherent-sheaf rows);
  `tools/gate-liveness.mjs ... --min-checks 1` exits 1 because `finite-smoke` has
  0 checks over 0/922 items run-wide; `tools/depcheck.mjs` fails on unrelated
  published items and other pairs; `tools/fwdcheck.mjs` fails on Khovanov/Littlewood-
  Richardson items of other pairs; `tools/splice-plan.mjs --verify` reports the
  expected pre-splice manifest-vs-plan difference for every in-flight batch.

## Supplier and consumer reconciliation

- All dependencies of the 35 items resolve to published items or same-pair items
  proved earlier (manifest-deps 0 errors; the four run items supplied by this pair —
  `thm-gagliardo-nirenberg-sobolev-inequality`, `thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n`,
  `thm-critical-sobolev-embedding-into-every-finite-lq`, `thm-morrey-inequality-for-p-greater-than-n`,
  `thm-higher-order-sobolev-embedding`, `lem-weak-partial-derivatives-lower-sobolev-order`,
  `cor-sobolev-inequality-for-w-one-p-zero`, `def-sobolev-conjugate-exponent` — were
  read at statement level and match every declared consumer's required claim).
- Seven consumer contracts outside this pair quote statements of this pair and need a
  mechanical refresh (`tools/regen-contract-entries.mjs` on the consumer's batch file
  then `merge-proof-contracts`), because the supplier text changed after their rows
  were written. Five are in the sibling pair `rellich-kondrachov-and-sobolev-compactness`
  (batch 9) still quote the placeholders `SOURCE ITEM NOT YET ON DISK: <id>` for
  supplier item now on disk: `cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets`
  [F2 → `cor-sobolev-inequality-for-w-one-p-zero`], `thm-rellich-kondrachov-for-p-less-than-n`
  [F2 → `thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n`],
  `thm-rellich-kondrachov-at-the-critical-source-exponent` [F2 → `thm-critical-sobolev-embedding-into-every-finite-lq`],
  `thm-morrey-rellich-compactness-for-p-greater-than-n` [F2 → `thm-morrey-inequality-for-p-greater-than-n`],
  `thm-higher-order-rellich-kondrachov` [F3 → `thm-higher-order-sobolev-embedding`].
  This is a mechanical contract refresh for the batch-9 owner (supplier statements are
  read and support the uses): `node tools/regen-contract-entries.mjs research/frontier-39-analysis-30-batch-9.proof-contracts.json <those five consumer ids>`
  then `merge-proof-contracts` and the batch-9 ledger rows in
  `research/frontier-39-analysis-30-batch-9.cross-batch-dependencies.json` re-checked
  (they are `open` there). These five rows are the only `citation-fidelity` failures
  involving this pair from batch 9. Two more are in batch 13:
  `thm-weak-global-w-two-p-dirichlet-regularity-for-the-laplacian` [F3] and
  `thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian` [F5], both quoting
  `thm-higher-order-sobolev-embedding`; their owning group regens the batch-13 contract
  file the same way. The required claims themselves still match the supplier
  statements (the parenthetical exponent-range fix does not weaken the embedding used).
- Verified cross-batch rows that cite this pair (batches 10, 12, 13, 15, 16) remain
  correct: none of the repaired statements weaken the required claims, and the
  `thm-higher-order-sobolev-embedding` range used by batches 12–13 is preserved.

## Owner escalation (blocking the Step-3 receipts for this pair)

The repairs changed claim texts carried by the batch-4 manifest, so the pair scope hash
moved from the owner-approved `d3c2a7b0accd562698c4491629a8fd65f1cb0b60d433c1149ff26d972147edd1`
to `9e231bd4b68feb3149cde28512bbdbf28ced1a04b4b5731689a6cbde757431c7`. Only the owner may
re-record a scope decision, and `tools/step3-decisions.mjs record-item` refuses to run
while the pair scope is stale ("Step 3a must clear for the item pair before item
auditing"). Remedy:

1. Owner: `node tools/step3-decisions.mjs record-scope --run frontier-39-analysis-30 --page sobolev-poincare-and-morrey-inequalities --decision proceed --owner --reason "<amendment: John/zero-set Poincaré constants carry diam(Ω); higher-order embedding exponent range restated as 1≤q≤p*_k; manifest registrations synced to the authored witnesses>"`.
2. Then re-record the 20 stale item receipts (confidence 1, dependencies = the item's
   current declared deps, which are hash-verified by the tool):
   - `repaired` (11 items actually edited): `lem-john-domain-admits-bounded-overlap-ball-chains`,
     `thm-poincare-wirtinger-on-bounded-john-domains`,
     `thm-poincare-inequality-with-a-positive-measure-zero-set`,
     `thm-morrey-inequality-for-p-greater-than-n`, `thm-gagliardo-nirenberg-sobolev-inequality`,
     `thm-higher-order-sobolev-embedding`, `lem-weak-product-rule-for-bounded-sobolev-functions`,
     `lem-mean-zero-poincare-estimate-on-bounded-connected-extension-domains-for-p-less-than-n`,
     `cex-morrey-endpoint-p-equals-n-fails`, `cex-critical-w-one-n-does-not-embed-in-linfinity`,
     `cor-sobolev-algebra-above-the-critical-index`.
   - `repaired` (3 further items; registration corrected, item text already correct): `ex-holder-representative-of-a-radial-sobolev-function`,
     `cex-sobolev-embedding-on-an-unbounded-domain-needs-the-full-norm-or-decay`,
     `cex-w-one-p-to-lq-bound-fails-for-q-greater-than-p-star-by-dilation`.
   - `accept` (text untouched; receipt invalidated only transitively):
     `cor-sobolev-inequality-for-w-one-p-zero`,
     `thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n`,
     `thm-sobolev-poincare-on-bounded-connected-extension-domains`,
     `thm-critical-sobolev-embedding-into-every-finite-lq`,
     `rem-domain-classes-for-the-mean-zero-poincare-inequality`,
     `cex-poincare-wirtinger-needs-connectedness`.
   Exact stale list (20 = 11 edited + 3 registration-only + 6 accept):
   `cex-critical-w-one-n-does-not-embed-in-linfinity`, `cex-morrey-endpoint-p-equals-n-fails`,
   `cex-poincare-wirtinger-needs-connectedness`,
   `cex-sobolev-embedding-on-an-unbounded-domain-needs-the-full-norm-or-decay`,
   `cex-w-one-p-to-lq-bound-fails-for-q-greater-than-p-star-by-dilation`,
   `cor-sobolev-algebra-above-the-critical-index`, `cor-sobolev-inequality-for-w-one-p-zero`,
   `ex-holder-representative-of-a-radial-sobolev-function`,
   `lem-john-domain-admits-bounded-overlap-ball-chains`,
   `lem-mean-zero-poincare-estimate-on-bounded-connected-extension-domains-for-p-less-than-n`,
   `lem-weak-product-rule-for-bounded-sobolev-functions`,
   `rem-domain-classes-for-the-mean-zero-poincare-inequality`,
   `thm-critical-sobolev-embedding-into-every-finite-lq`,
   `thm-gagliardo-nirenberg-sobolev-inequality`, `thm-higher-order-sobolev-embedding`,
   `thm-morrey-inequality-for-p-greater-than-n`,
   `thm-poincare-inequality-with-a-positive-measure-zero-set`,
   `thm-poincare-wirtinger-on-bounded-john-domains`,
   `thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n`,
   `thm-sobolev-poincare-on-bounded-connected-extension-domains`.
   Command template: `node tools/step3-decisions.mjs record-item --run frontier-39-analysis-30 --item ID --decision repaired|accept --confidence 1 --reason "<scope/evidence note>" --dependencies '<item deps JSON>'`.
3. Every consumer of the amended statements must have its receipt refreshed too; the
   affected in-run consumers outside this pair are the batch-9 items listed above and
   batches 12–13 items depending on `thm-higher-order-sobolev-embedding`
   (`cor-smooth-data-give-smooth-interior-solutions`, `cor-smooth-weak-dirichlet-solutions-are-classical`,
   `ex-bootstrapping-a-smooth-poisson-problem`, `cex-smooth-interior-data-do-not-repair-incompatible-dirichlet-corner-values`,
   `thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian`,
   `cor-w-two-p-regularity-implies-classical-or-holder-regularity-when-p-is-large`,
   `thm-weak-global-w-two-p-dirichlet-regularity-for-the-laplacian`) plus any later
   consumer of the repaired items; their owning authors are still in flight and can
   re-record against the new text.

## Open obligations at handoff

1. Owner ratification of the amended scope (above), then the 20 stale item receipts
   (no further mathematical work expected).
2. Batch-9 contract refresh for the five placeholder quotes (consumer-side, mechanical).
3. Step 4 must splice the batch-4 item ids as usual; the plan-spec item arrays are
   still empty, and `splice-plan --verify` reports the expected pre-splice difference.
4. Run-wide gate observations recorded above (vacuous `finite-smoke` scope under
   `gate-liveness`; unrelated `depcheck`/`fwdcheck` failures in other groups) are
   outside this pair and are left to the serial reconciler.

No unresolved mathematical uncertainty remains in the 35 authored items: every proof
route was checked step by step, the repaired arguments were re-derived from published
suppliers, and all Step-3 content, rendering, dependency, coverage and contract gates
for batch 4 pass on the current text.

## Independent post-handoff review

After the author dispatch exited, a reviewer found and repaired the coordinate shift in `thm-poincare-inequality-for-w-one-p-zero`: Step 1.1 now integrates from the lower slab face in coordinates x=x_perp+x_n e, and Step 2.1 bounds the slices in those same coordinates. The statement and constant are unchanged; the empty-domain case remains vacuous and n=1 is handled directly. The manifest strategy already described this corrected calculation; item metadata and the proof-contract entry are now synchronized.

The three Step 3a Sobolev-scope additions were already present in the current B4 manifest, A/B page lists, coverage, proof contracts, and plan. Their proofs and dependencies were independently checked. Kinnunen Theorem 3.47 in the exact downloaded source (SHA256 `255f17a2dd431f95a188be5b69a5eb16b92e45d8eead77dec5ea56921df31beb`, PDF pp. 93-94 / printed pp. 90-91) states the mean-zero p* inequality for 1<p<n on bounded connected extension domains; the new local helper replaces the source's Rellich step without adding a B9 dependency. The B9 coverage note now reflects the integrated B4 supplier.

Focused proof-layout after the edits: 4 items, 18 steps, 0 defects. No owner scope decision, readiness receipt, ledger refresh, gate, or test was recorded by this review. The content is ready for the owner to record `proceed` against the current scope; the owner decision itself remains pending.


## Owner follow-up — higher-order embedding and closure-wide Morrey bound (2026-10-05)

The B4 item thm-higher-order-sobolev-embedding retains its statement, including the fractional endpoint. Its proof now first applies one bounded extension operator and a cutoff to obtain a single compactly supported whole-space extension. The supercritical proof iterates the whole-space first-order inequalities; when an exponent reaches q>n, local Morrey estimates on a fixed ambient ball give the closure-wide Hölder seminorm, and the average plus the L^q bound controls the supremum. At the critical exponent q=n, at least two derivatives remain; compact support and Hölder reduce the function and its first derivatives to W^{1,s}, s<n, before the GNS inequality supplies a supercritical exponent. Mollification proves that the continuous representatives of successive derivatives agree classically. Thus local Morrey estimates have been converted to the claimed global C^{m,α}(closure Omega) norm; the statement did not need narrowing. The item, B4 manifest row and contract entry are synchronized.

Focused proof-layout passes for thm-higher-order-sobolev-embedding. No tests, gates, receipts, or scope decisions were run or recorded.
