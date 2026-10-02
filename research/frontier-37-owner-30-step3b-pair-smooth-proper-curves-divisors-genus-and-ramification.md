# Step 3b authoring — `smooth-proper-curves-divisors-genus-and-ramification`

- Run: `frontier-37-owner-30`, batch 6, role `alpha-high` (step 3b pair author).
- A page: `smooth-proper-curves-divisors-genus-and-ramification`; B page:
  `smooth-proper-curves-divisors-genus-and-ramification-examples`.
- Direct in-run prerequisite pair inspected: `cartier-and-weil-divisors-line-bundles-and-picard-groups`
  (batch 5, order 366.079, draft supplier while this dispatch runs).
- Output: 36 A items + 12 B items authored in `items/`, both `library/scheme-theory/` pages,
  `research/frontier-37-owner-30-batch-6.proof-contracts.json`, then Step-3b item decisions.

## Status: HANDED OFF (final Step-3b author handoff below; checkpoint log retained)

### Checkpoint log

- (start) Read `CLAUDE.md`, `SCHEMA.md`, the AV-23 design section, the batch-6
  manifest/coverage/notes, the step 3a scope review for this pair, the
  pre-splice findings, and the batch-5 supplier manifest. Item order taken from
  the dispatch task (dependency levels 0–16).
- (start) `frontier-37-owner-30-owner-authoring-direction.md` does not exist
  (checked); no owner-held authoring obligations beyond the dispatch text.
- Pre-splice findings for this pair rechecked against current inputs: the
  `b-leaf` rows (B-page items depending on published examples-page items) are
  addressed in the authored B items, which cite the same or A-page suppliers
  and keep the claims. Full dispositions recorded in the final report below.


- (resume checkpoint) Synced manifest `deps` to item frontmatter; added local supplier row
  `lem-composite-finite-proper-morphism-proper` (AC; finite+proper ⇒ composite proper);
  `item-dependency-levels.mjs check --run frontier-37-owner-30` passes.
- Authored L3: `def-geometric-genus-singular-curve`, `lem-degree-effective-divisor-nonnegative`,
  `thm-plane-curve-arithmetic-genus`, `ex-divisor-degree-over-nonalgebraically-closed-field` (B);
  precheck/rendercheck pass. Next: L4 `def-nonconstant-morphism-curves-degree`,
  `lem-normalization-lowers-arithmetic-genus-delta`.
- (catch-up) L4-L7 authored before this session's checkpoint gap and rechecked here:
  `def-nonconstant-morphism-curves-degree`, `lem-normalization-lowers-arithmetic-genus-delta`,
  `cor-plane-curve-geometric-genus-delta-correction`, `def-ramification-index-curve-map`,
  `lem-function-with-poles-defines-map-p1`, `def-canonical-line-bundle-curve`, `def-gonality-curve`,
  `lem-curve-different-local-support-and-index-bound`, `lem-fibre-degree-sum-ramification-residue`,
  `ex-cuspidal-cubic-normalization-genus`, `ex-nodal-cubic-normalization-genus`,
  `ex-plane-quartic-genus-three-smooth`, `def-ramification-and-branch-points`,
  `lem-rational-differential-divisor-well-defined-class`; precheck/rendercheck pass.
- Authored L8 `def-different-divisor-curve-map` (definition, precheck/rendercheck pass) and
  completed `ex-hyperelliptic-curve-double-cover`: replaced the scaffold's incorrect
  `dim E_k=(k+1)^2` delta-count route by an explicit computation of `div(dx/y)`
  (even case `(g-1)(p_+ + p_-)`, odd case `(2g-2)p_inf`) plus a direct verification that
  every regular differential is `R(x)dx/y` with `deg R <= g-1`, and closed the genus with
  Serre duality on a projective model obtained from `O(1)`-pullback + ample powers.
  New suppliers added to the item's deps: `thm-projective-space-proper-over-base`,
  `thm-projective-morphism-proper`, `lem-ample-pullback-finite-morphism`,
  `def-projective-morphism-pre-proj`, `thm-regular-local-rings-are-normal`,
  `def-normal-noetherian-ring`, `def-finite-morphism-schemes`. Manifest deps re-synced;
  `item-dependency-levels.mjs check --run frontier-37-owner-30` passes. Next: L8
  `ex-ramification-power-map-projective-line` (B).
- Authored L8 `ex-ramification-power-map-projective-line` (B): [s:t]->[s^n:t^n] constructed as the
  finite map of the rational function x^n, degree n via the fibre sum at 0, e_0=e_infinity=n from
  the zero and pole divisors, unramified away from {0,infinity} from the chart computation
  Omega=k[x]/(x^{n-1}) of lem-ag-polynomial-quotient-differentials, different
  R=(n-1)([0]+[infinity]). Provisional supplier flagged in text: lem-projective-line-divisors-
  classified-by-degree (sibling in-run draft; its clauses 1-2 read and verified); precheck/rendercheck pass.
- Authored L9 `thm-cartier-weil-divisors-curves-agree` (A): local rings DVR=>PID=>UFD, locally
  factorial, Cartier=Weil, Pic=Cl, O_C(D) for line bundles. FLAGGED unfinished batch-5 suppliers:
  def-invertible-sheaf-of-cartier-divisor, def-linear-equivalence-cartier-divisors,
  thm-cartier-divisors-mod-principal-to-picard, thm-cartier-to-weil-divisor-normal-scheme,
  thm-cartier-weil-isomorphism-locally-factorial, thm-line-bundle-rational-section-cartier-divisor
  (used at steps 1.2/3.1/4.1); item recorded escalate. precheck/rendercheck pass.
- Authored L10 `def-riemann-roch-space-of-divisor` (definition; L(D) as k-subspace of k(C);
  H^0 identification flagged on def-invertible-sheaf-of-cartier-divisor and
  thm-line-bundle-rational-section-cartier-divisor) and L10 `lem-torsion-quotient-invertible-sheaves-
  effective-divisor` (local DVR comparison L_p=t_p^{l_p}M_p, rational section of L^v (x) M, divisor
  sum l_p[p]; flagged batch-5 Cartier dictionary at steps 2.1/3.1). precheck/rendercheck pass;
  manifest deps synced. Next: L11 lem-effective-divisors-sections-mod-scalars and
  thm-canonical-bundle-ramification-formula.

- (resume 2026-09-30, alpha-high retry 8ddb0b6a) Owned IDs: the 37 A items and 12 B
  items of batch 6 as listed in the dispatch (49 total; the A page carries the
  owner-visible local addition `lem-composite-finite-proper-morphism-proper`).
  Verified on disk at entry: 43/49 item files exist and pass `precheck.mts` and
  `rendercheck.mjs`; the six missing items are `def-base-point-linear-system`,
  `thm-base-point-free-linear-system-morphism`,
  `ex-projective-line-divisors-linear-systems`,
  `ex-smooth-conic-is-projective-line-with-point`, `ex-basepoint-linear-system`,
  `cex-degree-zero-line-bundle-no-section`; neither library page exists yet and
  `research/frontier-37-owner-30-batch-6.proof-contracts.json` is absent.
  Open obligations at entry: (1) author the six missing items and both pages;
  (2) write the batch-6 proof contracts and run the Step-3b checks; (3) record
  Step-3b item decisions for all 49 items; (4) reconcile the flagged batch-5
  (Cartier) suppliers, most of which are still unauthored — consumers whose
  proofs cite them stay escalated; (5) resolve the pre-splice `b-leaf` and
  `undeclared-prereq` findings for this pair; (6) repair the two defective
  scaffold claims found at entry (`def-base-point-linear-system` "vanishes"
  equivalence; `ex-basepoint-linear-system` "constant map" clause).
- Repairs made at entry before advancing: `thm-normalization-glues-integral-finite-type-curves`
  renumbered to the precheck canonical dependency layers (precheck now PASS);
  missing `deps` entries added for the cited suppliers
  `def-ramification-index-curve-map` (cex-inseparable-map), `cor-jacobian-presentation-differentials`
  (lem-curve-different), `thm-differentials-smooth-locally-free`
  (lem-rational-differential) and `def-rational-map-integral-schemes`,
  `thm-morphisms-into-affine-scheme-global-sections` (thm-curves-function-fields-equivalence);
  corrected the nonexistent supplier id in `lem-torsion-quotient-invertible-sheaves-effective-divisor`
  to `cor-finitely-generated-torsion-free-modules-over-a-pid-are-free`.

---

# Step-3b author handoff (run `frontier-37-owner-30`, pair batch 6)

## 1. Deliverables

- 49 item files in `items/` (37 A + 12 B), all listed in section 2.
- `library/scheme-theory/smooth-proper-curves-divisors-genus-and-ramification.md`
  and `library/scheme-theory/smooth-proper-curves-divisors-genus-and-ramification-examples.md`.
- `research/frontier-37-owner-30-batch-6.proof-contracts.json` (49 contracts,
  `version: 1`, every numbered step mapped exactly once; 10 contracts carry
  `PENDING:` citation quotes for the unauthored batch-5 suppliers, see §7).
- `research/frontier-37-owner-30-batch-6.pages.json` /
  `.coverage.json` / `.cross-batch-dependencies.json` (batch-6 cross-batch
  input now has one `open` review row per declared cross-batch edge: 84 item
  edges + the page edge; one missing row was added this dispatch:
  `cex-degree-zero-line-bundle-no-section -> def-degree-divisor-proper-curve`).
- Step-3b item decisions for 48 of the 49 items; the 49th
  (`lem-composite-finite-proper-morphism-proper`) is a genuinely-new addition
  and is intentionally left to the engine's mechanical
  `step3-auditor-items.mjs certify` class (it passes precheck/rendercheck and
  is registered in manifest, coverage and contracts).

Nothing in this dispatch used `--owner`, wrote a judge/audit stamp, consumed a
Recorded result, or edited another pair's file.

## 2. Completed items and current dispositions

Order is the dispatch's dependency-level order. `accept` = authored/audited
this dispatch, no defect found; `repaired` = a concrete defect was fixed
during this dispatch; `escalate` = cannot close until a named supplier is
authored/verified and the use re-read (owner-held, §7).

L0: `def-algebraic-curve-over-field` accept; `def-rational-map-integral-schemes`
accept; `lem-composite-finite-proper-morphism-proper` (new local supplier, no
Step-3 receipt by design); `thm-normalization-glues-integral-finite-type-curves`
repaired (renumbered).

L1: `lem-rational-map-smooth-curve-to-proper-scheme-extends` accept;
`thm-h0-structure-sheaf-proper-curve` accept; `thm-local-ring-smooth-curve-dvr`
repaired (dangling step references); `thm-nonconstant-morphism-proper-curves-finite-surjective`
accept.

L2: `def-arithmetic-genus-proper-curve` accept; `def-delta-invariant-curve-singularity`
accept; `def-divisor-smooth-proper-curve` **escalate** (churn,
§7B); `thm-curves-function-fields-equivalence` repaired (deps + step
references); `cex-rational-map-singular-curve-not-extend-uniquely` repaired
(missing `## Refutation` heading).

L3: `cor-birational-smooth-proper-curves-isomorphic` repaired (fact-use tag);
`def-geometric-genus-singular-curve` accept; `lem-degree-effective-divisor-nonnegative`
**escalate** (churn, §7B); `thm-plane-curve-arithmetic-genus` repaired
(fact-use tag); `ex-divisor-degree-over-nonalgebraically-closed-field`
**escalate** (churn, §7B).

L4: `def-nonconstant-morphism-curves-degree` accept;
`lem-normalization-lowers-arithmetic-genus-delta` accept.

L5: `cor-plane-curve-geometric-genus-delta-correction` accept;
`def-ramification-index-curve-map` **escalate** (churn, §7B);
`lem-function-with-poles-defines-map-p1` **escalate** (§7A13).

L6: `def-canonical-line-bundle-curve` **escalate** (§7A); `def-gonality-curve`
**escalate**; `lem-curve-different-local-support-and-index-bound`
**escalate** (churn, §7B); `lem-fibre-degree-sum-ramification-residue`
**escalate** (churn, §7B); `ex-cuspidal-cubic-normalization-genus` accept;
`ex-nodal-cubic-normalization-genus` accept; `ex-plane-quartic-genus-three-smooth`
accept.

L7: `def-ramification-and-branch-points` **escalate** (churn, §7B);
`lem-rational-differential-divisor-well-defined-class` **escalate** (§7A).

L8: `def-different-divisor-curve-map` **escalate** (transitive);
`ex-hyperelliptic-curve-double-cover` **escalate** (§7A/§7C);
`ex-ramification-power-map-projective-line` **escalate** (§7C).

L9: `thm-cartier-weil-divisors-curves-agree` **escalate** (§7A).

L10: `def-riemann-roch-space-of-divisor` **escalate** (§7A);
`lem-torsion-quotient-invertible-sheaves-effective-divisor` **escalate** (§7A).

L11: `lem-effective-divisors-sections-mod-scalars` **escalate** (§7A);
`thm-canonical-bundle-ramification-formula` **escalate** (§7A).

L12: `def-complete-linear-system` **escalate** (§7A);
`thm-degree-positive-line-bundle-sections-zero-bound` **escalate** (§7A);
`cex-inseparable-map-riemann-hurwitz-naive-fails` **escalate** (§7A/§7C).

L13: `def-base-point-linear-system` **escalate** (§7A);
`cex-degree-zero-line-bundle-no-section` **escalate** (§7A);
`ex-smooth-conic-is-projective-line-with-point` **escalate** (§7A/§7C).

L14: `thm-base-point-free-linear-system-morphism` **escalate** (§7A).

L15: `ex-projective-line-divisors-linear-systems` **escalate** (§7A/§7C).

L16: `ex-basepoint-linear-system` **escalate** (§7A).

Totals: 14 accept, 6 repaired, 28 escalate (21 for unauthored batch-5
suppliers, 7 for the mid-flight rewrite of `def-weil-divisor-normal-noetherian-scheme`),
1 new-addition pending engine certification.

## 3. Checks actually run (exact results at handoff)

| Check | Result |
| --- | --- |
| `precheck.mts` explicit 49 paths | 34 checked, 0 failing (the 16 definitions have no proof body) |
| `rendercheck.mjs` 49 items + 2 pages | OK — 51 files: no wikilink in math, no delimiter problems, KaTeX parses, frontmatter parses |
| `content-policy.mjs research/frontier-37-owner-30-batch-6.pages.json` | 49 scoped items, 0 errors, 0 warnings |
| `proof-contract.mjs research/frontier-37-owner-30-batch-6.proof-contracts.json --strict` | 49/49 checked; **40 errors, all `citation-source-missing`** naming the 13 unauthored batch-5 suppliers (10 contracts, §7A); 1 warning `shotgun-bracket` (`thm-curves-function-fields-equivalence` 7.1 cites 9 of 16 facts in one step) |
| `coverage-checklist.mjs ...batch-6.coverage.json --require-destination` | 1 page, 112 harvest rows, 0 errors, 1 advisory `coverage-low-yield` (19/112 scaffolded) |
| `manifest-deps.mjs` (all 26 manifests) | 812 items, 0 normalized, 0 errors |
| `item-dependency-levels.mjs check --run frontier-37-owner-30` | exit 0; 812 items across 60 pages, max level 24 |
| `validate-plan.mjs research/plan-spec.json` | exit 0; acyclic; 367 planned pages still carry no item list (pre-splice, advisory); 27 advisory `redundant-prereq` rows name our pages |
| `depcheck.mjs` (49 paths) | exit 1 (repo-wide); for our items: 48 `dep-unresolved` + 54 `link-unresolved` naming the 13 missing batch-5 suppliers, and 6 `cited-not-in-deps` warnings for the declared `forward_refs` (cex-inseparable 1, ex-hyperelliptic 2, ex-projective-line 1, ex-ramification-power 1, ex-smooth-conic 1) |
| `fwdcheck.mjs` | exit 1 (repo-wide); for our items: 54 `link-unplanned` (the same 13 missing suppliers) and **4 `forward-dangling`** for `lem-projective-line-divisors-classified-by-degree` (cex-inseparable, ex-projective-line-divisors, ex-ramification-power, ex-smooth-conic) — its batch-7 page carries no item list in `plan-spec.json` yet, so the forward edge cannot be closed pre-splice (Step 4 item) |
| `step3-decisions.mjs check --run ... --phase final` | our batch: 20 current accept/repaired, 28 owner-held escalations (all carrying the changed-inputs marker because the supplier file of §7B kept changing after recording), 1 pending engine certification |
| `frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30` | **FAILS on an external item**: `items/thm-kronecker-root-of-unity-criterion.md: justified_by must be an array` (batch-3 draft, `justified_by:` empty scalar; fix: `justified_by: []`). Our batch-6 input itself reviews every declared cross-batch edge and is not implicated |

## 4. Local supplier added

`lem-composite-finite-proper-morphism-proper` (A page, L0): the composite of a
finite morphism with a proper morphism is proper, hence a composite of finite
morphisms of finite type is finite and proper. It was added during the Step-3b
scaffold audit to replace an implicit use in `ex-hyperelliptic-curve-double-cover`
([F10]) and in the page's properness arguments; registered in the batch-6
manifest, coverage and proof contracts. Under the dispatch's new-ID rule it is
deliberately **not** sent through a Step-3 receipt; the engine's
`step3-auditor-items.mjs certify` supplies its certification (all 7 run-wide
additions are authored on disk, so the certifier's no-file failure mode does
not apply).

## 5. Scaffold repairs made during this dispatch

- Owner-flagged defects repaired: `lem-composite-finite-proper-morphism-proper`
  (statement/proof completed, owner-flagged issue); `def-base-point-linear-system`
  ("vanishes" equivalence restated as support of `div(f)+D`); `ex-basepoint-linear-system`
  ("constant map" clause corrected). `def-base-point-linear-system` and
  `ex-basepoint-linear-system` remain escalated for batch-5 suppliers.
- `thm-normalization-glues-integral-finite-type-curves` renumbered into the
  precheck canonical dependency layers; `thm-curves-function-fields-equivalence`,
  `thm-local-ring-smooth-curve-dvr` and `thm-base-point-free-linear-system-morphism`
  had dangling step-range references corrected.
- Missing declared suppliers added to deps: `def-ramification-index-curve-map`
  (cex-inseparable), `cor-jacobian-presentation-differentials` (lem-curve-different),
  `thm-differentials-smooth-locally-free` (lem-rational-differential),
  `def-rational-map-integral-schemes` + `thm-morphisms-into-affine-scheme-global-sections`
  (thm-curves-function-fields-equivalence), `def-degree-divisor-proper-curve`
  (cex-degree-zero-line-bundle-no-section).
- Nonexistent supplier id corrected to
  `cor-finitely-generated-torsion-free-modules-over-a-pid-are-free`
  (lem-torsion-quotient-invertible-sheaves-effective-divisor).
- Fact-use tag mismatches corrected in 7 items (cor-birational, thm-plane-curve,
  ex-divisor-degree, thm-base-point-free, thm-degree-positive, lem-function-with-poles,
  ex-projective-line-divisors); `cex-rational-map-singular-curve-not-extend-uniquely`
  got its missing `## Refutation` heading; `ex-hyperelliptic-curve-double-cover`
  moved its two later suppliers to `forward_refs`.
- Manifest `deps` re-synced to item frontmatter for the whole batch
  (`manifest-deps` 0 errors).

## 6. Pre-splice plan findings — dispositions for this pair (14/14 resolved)

`research/frontier-37-owner-30-pre-splice-plan-findings.json` lists, for this
pair, 10 `b-leaf` findings (items depending on published examples-page items)
and 4 `undeclared-prereq` findings (page `requires` closure). Current-state
evidence that all are resolved:

- all 10 items named in the `b-leaf` rows no longer link the examples-page item
  at all (checked item by item); each promised claim was kept and supplied by an
  A-page supplier or a complete local argument — `depcheck`'s `b-leaf-content`
  check reports 0 rows for our items;
- `validate-plan.mjs research/plan-spec.json` exits 0, so no `undeclared-prereq`
  row survives; the A page's `requires` now names the differentials and
  normalization pages it uses, and the B page depends only on the A page.

The 27 `redundant-prereq` advisories that name our pages (the A page's own
`requires` are transitively reachable through one another, and three downstream
pages re-list our prerequisites) are recorded for Step 4 serial reconciliation;
they are advisories and `validate-plan` exits 0.

## 7. Flagged unfinished suppliers: exact supplier / consumer / step

### 7A. Unauthored batch-5 suppliers (13 distinct), with the importing consumers and the steps that state the obligation

The proof-contract strict check reports exactly these 13 as
`citation-source-missing`; `depcheck`/`fwdcheck` report the same set through
their unresolved-dep/link rows. Every consumer below is authored with the
obligation stated in its text and its decision is `escalate`.

| Unfinished supplier (batch 5) | Consumers in batch 6 (consuming step) |
| --- | --- |
| `def-invertible-sheaf-of-cartier-divisor` | thm-cartier-weil-divisors-curves-agree (1.2/2.1/3.1/4.1/5.1); def-riemann-roch-space-of-divisor; lem-effective-divisors-sections-mod-scalars (2.1); def-base-point-linear-system; thm-base-point-free-linear-system-morphism (1.1/3.1); lem-torsion-quotient (2.1/3.1/4.1); thm-canonical-bundle-ramification-formula (4.1/5.1); thm-degree-positive (1.1/3.1); cex-inseparable (3.1); ex-projective-line-divisors (2.1); cex-degree-zero (1.2/2.1/3.1); ex-basepoint (1.2/1.3) |
| `thm-line-bundle-rational-section-cartier-divisor` | thm-cartier-weil (1.2/2.1/3.1/4.1/5.1); def-riemann-roch-space; lem-effective (2.1); thm-base-point-free (1.1/3.1); def-canonical-line-bundle-curve (final identification); lem-rational-differential (3.1/3.2); lem-torsion-quotient; thm-canonical-bundle-ramification (4.1/5.1); thm-degree-positive; cex-inseparable (3.1); cex-degree-zero; ex-basepoint |
| `def-linear-equivalence-cartier-divisors` | thm-cartier-weil; lem-effective; def-complete-linear-system; lem-rational-differential (3.1/3.2); lem-torsion-quotient; thm-canonical-bundle-ramification; cex-inseparable |
| `thm-cartier-divisors-mod-principal-to-picard` | thm-cartier-weil; lem-torsion-quotient; thm-canonical-bundle-ramification (4.1/5.1); cex-inseparable |
| `def-effective-cartier-divisor` | lem-effective (2.1); def-complete-linear-system; lem-torsion-quotient (2.1); thm-degree-positive |
| `cor-degree-descends-picard-curve` | thm-degree-positive (1.1/3.1); cex-degree-zero (1.2/3.1) |
| `def-pullback-cartier-divisor` | thm-canonical-bundle-ramification (4.1); cex-inseparable (3.1) |
| `lem-cartier-divisor-addition-tensor` | thm-canonical-bundle-ramification (4.1); cex-inseparable (3.1) |
| `lem-pullback-cartier-divisor-line-bundle` | thm-canonical-bundle-ramification (4.1); cex-inseparable (3.1) |
| `thm-cartier-to-weil-divisor-normal-scheme` | thm-cartier-weil (3.1) |
| `thm-cartier-weil-isomorphism-locally-factorial` | thm-cartier-weil (3.1) |
| `lem-global-section-effective-divisor` | lem-effective (2.1) |
| `lem-finite-flat-curve-fibre-degree` | lem-function-with-poles-defines-map-p1 (2.2); transitively def-gonality-curve and ex-ramification-power-map-projective-line |

Transitive (declared-chain) consumers of the same block, escalated without a
direct citation: `def-different-divisor-curve-map`,
`def-canonical-line-bundle-curve`, `def-complete-linear-system`,
`def-gonality-curve`, `ex-hyperelliptic-curve-double-cover` (through
`def-canonical-line-bundle-curve`), `ex-smooth-conic-is-projective-line-with-point`
(through `def-riemann-roch-space-of-divisor`).

When the batch-5 pair lands: replace the 40 `PENDING:` citation quotes in the
batch-6 contracts (10 items: thm-canonical-bundle-ramification 7,
cex-inseparable 7, thm-cartier-weil 6, lem-effective 5, thm-degree-positive 4,
lem-torsion-quotient 4, cex-degree-zero 3, lem-rational-differential 2,
lem-function-with-poles 1, ex-projective-line-divisors 1) with verbatim
`Definition`/`Statement` excerpts, re-read each use against the authored
statement, re-run the strict contract check, and only then have the owner
reconcile the 21 escalations (§7A consumers) from `escalate` to a closing
decision.

### 7B. Supplier churn observed during this dispatch (new, second class)

While this dispatch was handing off, the batch-5 draft
`items/def-weil-divisor-normal-noetherian-scheme.md` was rewritten by a
concurrent writer (observed mtimes 2026-09-30T13:16:13Z, 13:18:14Z and
13:18:43Z; file currently **fails precheck**: "phase body but no
proof_strategy in frontmatter"). Note that the batch-5 author dispatch itself
ended unsuccessfully (`...cartier-and-weil...-d30bb1b3f729a8d8.result.json`,
`result: null`, 10:30:57–10:55:52Z) and batch 5 is 11/46 authored; a
writer outside the batch-5 unit is editing its files, so the owner should
identify that writer before reconciling.

Seven of our items declare it in their transitive prerequisite chain and were
moved from accept/repaired to **escalate** for this reason (their own content
is complete; only the supplier is mid-flight): `def-divisor-smooth-proper-curve`,
`def-ramification-index-curve-map`, `lem-curve-different-local-support-and-index-bound`,
`lem-fibre-degree-sum-ramification-residue`, `def-ramification-and-branch-points`,
`lem-degree-effective-divisor-nonnegative`,
`ex-divisor-degree-over-nonalgebraically-closed-field`. Each receipt names the
exact chain and the precheck failure. The other 21 escalations also carry the
changed-inputs marker because the same file is in their closure; the owner
should re-read this supplier once it stabilises and then resolve all 28.

### 7C. Declared forward references (consequence kinds only)

- `lem-projective-line-divisors-classified-by-degree` (batch 7, in-run draft,
  file exists): used by cex-inseparable (clauses 1–2), ex-projective-line-divisors
  (steps 1.1/1.3), ex-ramification-power-map (steps 1.2/2.3/2.4/5.1/6.1),
  ex-smooth-conic (step 1.2). Its clauses were re-read at authoring; the
  consumers stay escalated, and `fwdcheck` cannot see its home page until the
  Step-4 splice gives the batch-7 page its item list (4 `forward-dangling`
  rows above).
- `lem-twisting-sheaf-projective-space-ample` (batch 8, in-run draft) and
  the published `thm-serre-duality-smooth-projective-variety-locally-free-sheaves`:
  used by ex-hyperelliptic ([F9]–[F10], step 7.1). Both are on disk; the
  consumer is escalated only through §7A/§7B chains.

## 8. Published-item concerns

No confirmed defect in a *published* item was found while authoring this pair.
Two suspicious items are reported for the owner/Step-5 ledger rather than
asserted as defects:

- `items/thm-kronecker-root-of-unity-criterion.md` (batch-3 draft, not
  published) blocks the run's unified-ledger refresh with a malformed
  `justified_by:` scalar; this is a bookkeeping defect with a one-token fix,
  routed to that pair's owner by this report.
- The published examples-page items named by the pre-splice `b-leaf` rows
  (`ex-differentials-separable-field-extension-zero`,
  `ex-rational-parametrization-circle-conic`,
  `cex-differentials-purely-inseparable-field-nonzero`,
  `ex-normalization-nodal-coordinate-domain`,
  `ex-integral-closure-cusp-semigroup-affine-domain`,
  `ex-plane-curve-local-ring-not-dvr`,
  `ex-morphism-projective-line-power-map`) are no longer linked by our items at
  all; every promised claim they once supported now rests on an A-page supplier
  or a complete local argument (§6), so no claim about them is left
  load-bearing. The published `thm-serre-duality-smooth-projective-variety-locally-free-sheaves`
  remains cited by `ex-hyperelliptic-curve-double-cover` ([F9], step 7.1) as a
  declared forward reference and was re-read against that use.

The published items escalated *by other groups* through our pair
(`def-canonical-line-bundle-curve` -> `thm-line-bundle-rational-section-cartier-divisor`
and `lem-function-with-poles-defines-map-p1` -> `lem-finite-flat-curve-fibre-degree`
chains, e.g. batch 8's `thm-serre-duality-curves-line-bundles`,
`cor-genus-degree-smooth-plane-curve`, `def-hyperelliptic-curve`) are recorded
in those groups' receipts; our report is the upstream evidence for them.

## 9. Open obligations (owner / Step 4 / next pair dispatch)

1. Author the 13 batch-5 suppliers in §7A (+ the rest of batch 5), then
   replace the `PENDING:` contract quotes, re-verify each use, and reconcile
   the 21 + 7 escalations of §7A/§7B. Until then the batch-6 strict contract,
   depcheck, fwdcheck and the Step-3 final gate cannot be green — this is the
   run's existing blocker, not a defect of the authored pair.
2. Step-4 splice: give the batch-7/8 plan pages their item lists so the four
   `forward-dangling` rows close; re-run `fwdcheck`.
3. Fix `items/thm-kronecker-root-of-unity-criterion.md` (`justified_by: []`)
   so `frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30`
   completes; then re-run it for the unified ledger (our batch-6 input is
   complete).
4. Re-read `def-weil-divisor-normal-noetherian-scheme` once its writer stops
   (it currently fails precheck) and re-run precheck/rendercheck on it and on
   the items whose receipts carry the changed-inputs marker (28 at the last
   check) before the owner resolves them; the marker is expected to persist
   while that file keeps changing.
5. Non-blocking follow-ups recorded, not fixed: the `shotgun-bracket` warning on
   `thm-curves-function-fields-equivalence` 7.1 (a citation-style warning, not
   an error), the `coverage-low-yield` advisory (19/112 harvest rows scaffolded),
   and the 27 `redundant-prereq` advisories naming our pages (Step 4 prose).

## 10. Reproduction commands

```
node tools/tsx-run.mjs tools/precheck.mts $(cat /tmp/b6items.txt)
node tools/rendercheck.mjs $(cat /tmp/b6items.txt) library/scheme-theory/smooth-proper-curves-divisors-genus-and-ramification{,-examples}.md
node tools/content-policy.mjs research/frontier-37-owner-30-batch-6.pages.json
node tools/proof-contract.mjs research/frontier-37-owner-30-batch-6.proof-contracts.json --strict
node tools/coverage-checklist.mjs research/frontier-37-owner-30-batch-6.coverage.json --require-destination
node tools/manifest-deps.mjs $(ls research/frontier-37-owner-30-batch-*.pages.json)
node tools/item-dependency-levels.mjs check --run frontier-37-owner-30
node tools/validate-plan.mjs research/plan-spec.json
node tools/depcheck.mjs $(cat /tmp/b6items.txt)
node tools/fwdcheck.mjs
node tools/tsx-run.mjs tools/step3-decisions.mjs check --run frontier-37-owner-30 --phase final
node tools/frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30
```
