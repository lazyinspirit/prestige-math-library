# Batch 2 notes — `blowups-exceptional-divisors-and-strict-transforms` (366.091/.092)

Run `frontier-38-owner-30`, role beta, attempt 2. Output:
`research/frontier-38-owner-30-batch-2.pages.json` (47 A items, 12 B items; page cap 100
respected), `research/frontier-38-owner-30-batch-2.coverage.json`,
`research/frontier-38-owner-30-batch-2.cross-batch-dependencies.json` (empty), and one
`research/frontier-38-owner-30-step1-<id>.json` readiness record per item.

## Scope and binding direction

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the design section
`research/plan-algebraic-geometry-track.md` AV-26 (L1846 ff.) and the binding
`research/frontier-38-owner-30-owner-authoring-direction.md` before constructing items.
The pair is exactly the one selected in the direction (scheme-theory, 366.091/.092); the
direction's rules on local prerequisite construction, choice accounting, source evidence
and file discipline were followed. The design's scope, conventions and proof route (two
standard charts, `pi^*C = C' + mE`, `O_E(E) = O(-1)`, the `r·binom(m,2)` defect drop, the
lexicographic `(N,M)` contact-order termination, regular embedded normal-crossing support
without smoothness over imperfect residue fields) are preserved by the manifest.

## Design vs plan reconciliation

1. The design's `requires` paragraph names two published suppliers not in the plan's
   `requires` list: `cor-regular-local-ring-satisfies-s-two` and
   `lem-r-one-s-two-intersection-of-height-one-localisations` (from
   `regular-local-rings-and-homological-dimension`). `research/plan-spec.json` controls
   the run and lists neither page; the scaffold therefore does not consume them, and the
   H^0(Bl, O) = A and surface-regularity steps are closed by explicit two-chart
   computations (`lem-affine-point-blowup-pushforward-vanishing`,
   `thm-blowup-regular-surface-closed-point-regular`). Both items remain published and
   available if an author prefers the design's (S_2)-intersection route; this is recorded
   as a design/plan discrepancy, not a missing prerequisite.
2. `plan-spec.json` carries empty item inventories for both pages (items are created by
   this scaffold), so no per-item plan conflict is possible beyond the pair `requires`
   list above; the manifest `requires` array equals the plan's list verbatim.
3. The design's proposed inventory (32 A + 12 B) is preserved item-for-item. The scaffold
   adds 15 local prerequisite items, authorised by the dispatch, to close the binding
   termination route and the Euler-characteristic/defect machinery it needs:
   `lem-affine-blowup-algebra-properties`, `lem-affine-blowup-chart-universal-property`,
   `lem-affine-point-blowup-pushforward-vanishing`, `lem-blowup-point-pushforward-vanishing`,
   `lem-projection-formula-invertible-twist`,
   `lem-exceptional-fiber-line-bundle-euler-characteristic`,
   `thm-blowup-regular-surface-closed-point-regular`,
   `thm-normalization-reduced-curve-exists-finite`, `def-normalization-defect-of-reduced-curve`,
   `lem-normalization-defect-euler-and-lengths`,
   `lem-normalization-unchanged-under-finite-birational-curve-map`,
   `lem-blowup-multiplicity-euler-characteristic-drop`, `def-contact-order-regular-components`,
   `lem-blowup-lowers-contact-order`, `lem-blowup-separates-transverse-components`.
   No design claim was weakened, dropped or re-hypothesised.

## Suppliers and closure

- 96 distinct run-external suppliers; every one resolves to a **published** item on disk
  (checked mechanically, then read at statement level; the load-bearing ones —
  relative Proj and its base change, twisting-sheaf invertibility, Veronese invariance,
  cohomology of twists on P^n, Leray/Čech comparison, projection formula, Euler
  characteristic additivity, Cartier-divisor exact sequences, proper quasi-finite
  finiteness, curve normalization/δ items on
  `smooth-proper-curves-divisors-genus-and-ramification` — were read in full).
- No in-run (cross-batch) item is consumed; `manifest-deps` reports 59 items, 0 errors.
  `frontier-38-owner-30-batch-2.cross-batch-dependencies.json` is therefore `[]`.
  The unified ledger records this page as the **supplier** for batches 26
  (`intersection-products-on-smooth-projective-surfaces`) and 27
  (`point-blowup-resolution-on-arbitrary-regular-surfaces`); those consumer owners own
  their review rows.
- Choice: every proof item that inherits the relative-Proj/Normalization/coherence choice
  assumptions carries `def-axiom-of-choice` and states the inheritance in its strategy;
  the chart computations and the δ bookkeeping themselves are choice-free beyond the
  cited suppliers.
- `thm-normalization-reduced-curve-exists-finite` reuses the published
  `thm-normalization-glues-integral-finite-type-curves` for the integral components; the
  local content is the reducible/global case (total ring of fractions, gluing, coherence
  of `nu_*O`). The δ items are stated over arbitrary fields with residue-degree weights
  because the commissioned theorem needs `r = [kappa(p):k]`; the published δ items are
  algebraically-closed-only and are not consumed as substitutes.

## Repairs made to the attempt-1 scaffold (mathematical defects)

- `cex-blowup-singular-center-not-smooth`: the attempt-1 node example was **false** — the
  blowup of the node ring `k[x,y]/(xy)` at its singular point kills the chart torsion
  (`y/x = 0` since `x·y = 0`), so its charts are `k[x]` and `k[y]`, the blowup is the
  normalization (two disjoint lines), the total space is regular and the exceptional
  divisor is two reduced points. Replaced with the correct singular example
  `y^3 - x^5` (chart `k[x,s]/(s^3-x^2)` cuspidal, exceptional divisor
  `Proj k[X,Y]/(Y^3)`, nonreduced of length three).
- `cex-normalization-not-blowup-and-blowup-not-normalization`: the attempt-1 statement
  simultaneously claimed the strict transform "is not the normalization in one step" and
  (in its own strategy) that it *is* already normal. Rewritten: the strict transform of
  the cusp is regular, `C' -> C` is finite birational, so `C' ≅ C~` (one step here), while
  normalization and blowup remain different operations; a point blowup need not normalize
  a curve (`y^3 = x^5`, sibling counterexample).
- `ex-total-versus-strict-transform-line-through-origin`: the claim that "in the other
  chart the strict transform is all of the chart minus E" was wrong; the strict transform
  has no points in the second chart (the chart misses `L \ {0}`).
- `ex-blowup-affine-three-space-origin-exceptional-p2`: `E = V(x,y,z)` in "each chart" was
  wrong; `E` is cut by `x`, `y`, `z` in the three charts respectively.
- `lem-blowup-lowers-contact-order`: the attempt-1 strategy asserted `h(0,0) ≠ 0` and
  `ord_{t=0} h(0,t) = n`, inconsistent with `Z` regular at `p`; replaced by the correct
  computation `z = x·h`, `n = 1 + ord_x h(x,0)`.
- `lem-blowup-plane-origin-incidence-equations`: replaced the hand-waving injectivity
  clause by the primitivity/domain argument for `xv - yu` plus generic-fibre injectivity.
- `lem-total-transform-strict-plus-exceptional-multiplicity` (double-`C` hypothesis),
  `thm-pullback-center-ideal-invertible` (factorisation wording),
  `thm-blowup-effective-cartier-divisor-isomorphism` (`A[fI/f]` typo),
  `thm-blowup-smooth-surface-point-charts` (chart description),
  `def-rees-algebra-ideal-sheaf` ("graded-commutative" → commutative),
  `ex-blowup-ideal-power-same-proj` (Veronese re-embedding wording),
  `cex-blowup-arbitrary-base-change-failure` (component argument for non-isomorphism):
  corrected without changing the commissioned claims.
- `thm-blowup-separates-plane-curve-tangent-directions`: the attempt-1 phrase "bijection
  with the distinct linear factors" was only correct over a splitting field; the statement
  now says C' cap E is cut by f_m(u,v), with closed points corresponding to irreducible
  factors and multiplicities, total degree m, and transversality when f_m is squarefree.

## Sources (full-text evidence)

Coverage file `research/frontier-38-owner-30-batch-2.coverage.json`: 4 independent
treatments per page, 68 harvested headings all disposed. Full text fetched and inspected;
`source-fetch-check --stamp` records 8/8 fetch-verified stamps:

| source | kind | locator read | stamp |
|---|---|---|---|
| Stacks Project, Divisors §§31.33–31.36 + More on Morphisms §§37.16–37.18 | monograph | tags 01OF, 080C, 080J, 0F84, 039A, 0H1G, 0GSF (section pages in full) | html, 20941 chars |
| Vakil, FOAG (27 Jun 2011 draft) | textbook | Ch. 19 §§19.1–19.4, pp. 379–396 | pdf, 548 pp |
| MIT 18.725 consolidated notes | lecture-notes | Lecture 9, PDF pp. 24–25 | pdf, 63 pp |
| Milne, AG v6.10 | textbook | Ch. 8 §§g–h, pp. 196–197 | pdf, 231 pp |

The Stacks convention `O_{X'}(-1) = O_{X'}(E)` (Lemma 31.33.4) matches the manifest's
twist convention, and Lemma 37.17.3 (`E ≅ P(I/I^2)`, smoothness for smooth centers)
supports `cor-exceptional-divisor-smooth-center-normal-bundle`. No source was dropped; no
`source_resolution` record is needed.

## Readiness and checks (actual results)

- All 59 items recorded `ready` with examined dependency IDs; no escalation.
- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-2.pages.json` →
  `59 item(s), 0 normalized, 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only ...` → `59 scoped item(s), 0 error(s),
  0 warning(s)`.
- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` → the batch's
  59 labels recompute exactly (max level 9); remaining run-level errors belong to
  batches whose manifests are still empty and are not this batch's scope.
- `node tools/coverage-checklist.mjs ... --require-destination` → `2 page(s), 68 harvested
  result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage ...` → `8/8 source(s) fetch-verified`.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30` →
  refreshed; batch 2 input registered (empty).

Whole-run checks actually run on 2026-10-03 (attempt 2):

- `node tools/validate-plan.mjs research/plan-spec.json` → OK (acyclic order, no
  item-level cycles, no forward/B dependencies, no unresolved ids).
- `node tools/manifest-integrity.mjs --run frontier-38-owner-30` → 60 pages owed, 60 in
  the manifests, no scope drift.
- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-*.pages.json` →
  `571 item(s), 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-38-owner-30-batch-*.pages.json`
  → `571 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/extcheck.mjs` → OK (recorded-not-proved statements all cited remarks).
- `node tools/url-sweep.mjs --coverage <batch-2 coverage> --recover --fail-on-dead` →
  4/4 live, 0 failed (run with a temporary `--out` so the run-level liveness artifact is
  regenerated by the stage, not clobbered by a partial sweep).
- `node tools/source-backing.mjs --coverage <batch-2 coverage> --liveness <temp>` →
  `35 authored result(s) ... every one still backed by an openable source`.
- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` → 18 errors,
  **all** `empty scaffold inventory` for other batches' page shells (including the two
  consumer pages of this batch); none concerns an item of batch 2, whose 59 labels
  recompute exactly.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30 --require-reviewed`
  → "Cross-batch review incomplete": run-level condition, since batches 26/27 and others
  have not yet supplied inputs; batch 2's input is present and its page is declared as a
  supplier for those two consumers.

The stage gate `1-scaffold` remains held for the other batches' empty shells and for the
run-level ledger closure; batch 2 itself is artifact-complete (manifest + coverage +
notes + cross-batch input + 59/59 closed readiness records).

## Open uncertainties

- The manifest strategies are complete proof routes, not proofs; Step 3 authors must
  expand them (in particular the two-chart Čech computation for
  `lem-affine-point-blowup-pushforward-vanishing`, the Koszul-syzygy bookkeeping in
  `lem-blowup-plane-origin-incidence-equations`, and the geometric input inside
  `thm-blowup-regular-surface-closed-point-regular`).
- The design's optional `(S_2)`-intersection route (discrepancy 1) is unbuilt by choice of
  the plan; if an author adopts it, the two published suppliers are already available.
- `ex-empty-center-blowup-identity` is the one `ai-generated` statement (an example); it is
  marked `literature-derived` elsewhere in the pair and needs `generation.role: example`
  when authored.


## Owner chart and surface repair — current Step-1 handoff (2026-10-03)

This section supersedes the earlier attempt-2 inventory/readiness/check counts above.
The current inventory is **48 A + 12 B = 60 items**, with no authored item files for
this packet yet. Readiness means a reviewed scaffold proof route, not a completed or
independently certified authored proof. The controller is paused and all engine writers
drained; no runtime state, receipts, global dependency ledger, or shared plan were
written by this reviewer. The parent owns shared-plan reconciliation.

The original overlap formula was false: in chart B_i=A[I/f_i], the overlap inverts
u_ij=f_j/f_i, not the base element f_j. For (x,y) in k[x,y], the x-chart is k[x,s]
with y=xs; D(s) contains exceptional points x=0,s!=0, whereas D(y)=D(xs) loses them.
The revised theorem uses the degree-zero part of the double homogeneous localization,
with a complete surjectivity/kernel argument that allows zero divisors. The affine
algebra helper proves an injection into A_a, and identifies the chart presentation as
the quotient by a-power torsion, equivalently saturation of (aX_i-a_i) by a. Unsaturated
presentations are used only after that torsion is proved zero.

Changed interfaces:

- `thm-affine-blowup-standard-charts`: ratio overlaps, explicit transition maps,
  zero-divisor/empty-chart cases, and comparison of different covers inside one Proj.
- `thm-blowup-smooth-surface-point-charts`: charts over an affine neighborhood R are
  R[T]/(xT-y) and R[U]/(yU-x); base change to O_{S,p} is stated separately. Actual
  affine-plane charts are asserted only for the polynomial-plane model. Smoothness
  over every original field k is retained.
- `thm-blowup-regular-surface-closed-point-regular`: regularity is proved in the
  quotient charts, including generic exceptional points of local dimension one and
  closed exceptional points of dimension two. The finite-type pure-two-dimensional
  hypothesis supplies local dimension two at the center; no non-Jacobson extension is
  assumed. E=P^1_kappa, O_E(E)=O(-1), and the rational smooth case are retained.
- `lem-blowup-plane-origin-incidence-equations`: restored both base coordinates in
  the affine rings and proved the incidence presentation over any commutative base
  ring by homogeneous-relation induction, without a domain/UFD assumption.
- `thm-exceptional-divisor-normal-cone-proj`: general fibers are projectivized normal
  cone fibers; they are tangent cones for point centers. Its chart ring is
  (gr_I A)_(a_bar), not the whole graded ring.
- `lem-total-transform-strict-plus-exceptional-multiplicity`: the intersection zero
  cycle has degree m over kappa(p) and m[kappa(p):k] over k. The exact divisor identity
  pi^*C=C'+mE is unchanged; a finite expression in degree-m monomial generators
  replaces an unjustified formal coordinate expansion.
- `thm-resolution-plane-curves-by-point-blowups`: retained the commissioned local
  embedded normal-crossing conclusion; removed the unsupported assertion that two
  components meet globally in at most one point. Contact descent is by finite rounds
  through all maximal-contact points, followed by multiple-point descent.

Proof-route/dependency repairs also cover `lem-affine-blowup-algebra-properties`,
`lem-blowup-independent-ideal-generators`, `thm-blowup-universal-property`,
`lem-affine-point-blowup-pushforward-vanishing`,
`lem-exceptional-curve-normal-bundle-minus-one`,
`lem-blowup-multiplicity-euler-characteristic-drop`,
`lem-blowup-reduced-integral-under-domain-rees`, and
`cor-exceptional-divisor-smooth-center-normal-bundle`.
The Euler filtration uses pi^*O(C)|_E trivial of degree zero. Integrality uses the
common dense off-center open, rather than an arbitrary gluing of domains.

One necessary local prerequisite is added:
`lem-regular-sequence-associated-graded-polynomial`. It proves
(R/J)[X_1,...,X_c]=gr_J R for any finite regular sequence generating J, without
Noetherian/domain hypotheses. The full double induction on sequence length and maximal
last-variable power is recorded in its strategy. This supplies the arbitrary regular
immersion corollary; the existing regular-local maximal-ideal theorem could not do so.

The six new explicit published prerequisite page edges, mirrored by the parent into
shared plan metadata, are `regular-local-rings-and-homological-dimension`,
`flat-smooth-and-etale-morphisms`, `linear-independence-bases-and-dimension`,
`tensor-products-of-modules`, `krull-dimension-and-height-theorems`, and
`koszul-complexes-and-regular-sequences`. Actual newly used supplier interfaces were
read, including regular-local domain/CM and parameter quotients, polynomial regularity,
maximal-ideal height in affine domains, smooth base change/definition, vector-space
basis existence, and free-module flatness. No later homological field-module item is
used. Choice is inherited and explicitly retained throughout surface/smooth proofs.

Direct-consumer review inspected every manifest use of the changed chart theorem on
batch 2 and the current batch-26/27 contracts. The chart consumers either use retained
individual charts or the corrected ratio overlap. The two batch-26 consumers
`lem-blowup-intersection-matrix-at-smooth-point` and
`ex-intersection-pairing-on-blowup-of-p2` use only retained regularity, E=P^1_kappa,
O_E(E)=O(-1), and total-transform divisor geometry; their Statements are unchanged.
The batch-27 reviewer confirms its uses of normal cone and chart geometry are compatible
and owns its readiness refresh. Proof-only dependency changes create hash refreshes,
not further Statement propagation.

New full-text source retrievals: Stacks **052P**, Definition 10.70.1 and Lemmas
10.70.2/6/9/10; **01M3**, Lemmas 27.8.1/6/7/10; **061M**, Lemma 10.69.2 (00LN).
The complete HTML bodies were retrieved and inspected; bytes/digests/timestamps and
exact proof uses are in coverage. Original Stacks 01OF, Lemmas 31.33.2/4, was also
retrieved during this review. No source-access or authored-proof certification is
inferred merely from a fetch stamp.

Focused checks actually run on current repaired manifest:
`manifest-deps`: 60 items, 0 errors; `content-policy --manifest-only`: 60 items,
0 errors/warnings; `coverage-checklist --require-destination`: 2 pages, 71 harvested
results, 0 errors/warnings; `source-fetch-check`: 11/11 fetch-verified and resolved.
No item precheck/render/proof-layout was run, since there are no authored item files
for this packet. Whole-run dependency-level/readiness results are handed to the parent
only after the two batch-26 labels and dependent readiness records are refreshed.

Final owned closure: all 60 batch-2 records and both affected batch-26 records
are current ready (62 scoped, 0 unclosed); whole-run dependency-level check passes
804 in-run items across 60 pages, maximum level 16, 0 errors after the two batch-26 labels became 8 and 9.
No certification/gate/receipt has been bypassed.

---

# Step 3b checkpoint — pair authoring (2026-10-03, run frontier-38-owner-30)

Pair: `blowups-exceptional-divisors-and-strict-transforms` / `...-examples`.
60/60 scaffold items authored (48 A + 12 B); no new IDs were added, so no
auditor-created certification class applies. The two library pages
`library/scheme-theory/blowups-...{,-examples}.md` were created at Step 3b.

## Ledger of what was done (all checks rerun against the final bytes)

- Items: every `items/<id>.md` written in dependency-level order by the lead
  (level 0) and helper lanes B/C-stand-in/F/G/H for the remaining levels. The
  Step-1 statements were preserved; only `deps`, proofs and non-scope fields
  move. Dep changes are mirrored into this batch file's `pages.json` rows.
- Check battery (batched explicit paths):
  `node tools/tsx-run.mjs tools/precheck.mts items/*.md` → 50 proof items
  checked, 0 failing (10 definitions/remarks are n/a);
  `node tools/rendercheck.mjs items/*.md` → OK for all 60;
  `PRESTIGE_APP_DIR=/tmp/f38-app node tools/proof-layout.mjs items/*.md` →
  60 items, 266 numbered steps, 0 defects;
  `node tools/proof-contract.mjs research/frontier-38-owner-30-batch-2.proof-contracts.json --strict`
  → 0 errors, 0 warnings, 60/60 items;
  `boundary-audit --fail-on-contradicted --fail-on-template` → 0 templates,
  0 contradictions;
  `citation-fidelity --fail-on-missing-quote` → no widening candidates;
  `risk-report` → 0 errors; `finite-smoke` → 0 errors, 0 obligations;
  `manifest-deps` → 0 errors; `item-dependency-levels` → 0 errors (818 items
  across 60 pages); `coverage-checklist --require-destination` → 0 errors,
  0 warnings (71 harvested results); `content-policy` item mode → 0 errors.
- Decisions: `tools/step3-decisions.mjs check --run frontier-38-owner-30
  --phase final` reports no work item for either page; all 60 current item
  receipts recorded with confidence 1 and examined dependency lists.
- Contract fragments merged into this batch's single
  `research/frontier-38-owner-30-batch-2.proof-contracts.json`
  (lane-a 7, lane-b 9, lane-f 21 including level 6, lane-d 16, lane-g 7,
  lane-h-lead 10 duplicate-checked); duplicates were reconciled in favour of
  the current item bytes and the merged file revalidated.

## Published concern (reported, not repaired here)

`items/thm-affine-closed-immersions-quotient-rings.md` (published, owner
repair receipt `research/frontier-38-owner-30-published-affine-closed-immersion-receipt.json`)
was touched during Step 3b by a drifting helper lane; at handoff its
`itemHashGuard` is `c8f6c6ba41257a27a7d51216ebc13519a53524f37286a3a588dd9db4833ff687`,
which does not match the receipt's `content_sha256`
`e7bb39a4328edc42e9a08ae5fe05ead4ba6c5abc6509a3e6a0580cdbf9f58859`. Owner-lane
artifacts for the inlining repair
(`...-published-affine-closed-immersion-{review.md,inline-evidence.json,row.json,before-inline.md}`)
postdate the receipt, so an owner-side reconciliation of item bytes and receipt
is in flight; this pair's lead did not edit the published item or any ledger.

## Consumer edges (for the consumer owners, not this pair)

Batches 26/27 consume this page as supplier
(`lem-blowup-intersection-matrix-at-smooth-point`,
`ex-intersection-pairing-on-blowup-of-p2`; `lem-intersection-multiplicity-drop-under-point-blowup`,
`lem-point-blowup-of-integral-curve-is-finite`,
`lem-normalization-factors-through-blowup-of-curve-point`,
`lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center`,
`thm-regularization-of-finite-normalization-curve-by-point-blowups`,
`lem-regularization-of-curve-on-noetherian-ambient-by-point-blowups`,
`lem-blowup-of-closed-point-of-regular-surface-is-regular`,
`thm-separation-of-regular-curve-components-by-point-blowups`,
`thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface`,
`ex-node-resolved-by-one-blowup`, `ex-cusp-resolution-and-delta-drop`,
`cex-finite-normalization-does-not-make-the-curve-regular-before-blowups`).
Their recorded escalations name this pair's items as unfinished; every supplier
ID they name is now authored and contract-consistent, so those consumer
decisions can be refreshed by their owners.

## Step 3b follow-up — b-leaf dependency repairs (2026-10-03)

Two `depcheck` `b-leaf-content` errors inside this batch were repaired by the
lead before handoff, replacing load-bearing examples-page suppliers with
A-page arguments: `lem-exceptional-fiber-line-bundle-euler-characteristic` now
uses `thm-cohomology-projective-space-twisting-sheaves` for the dimensions of
H^0 and H^1 of O(d) on P^1_kappa (no dependency on
`ex-cohomology-o-d-projective-line-all-d`), and
`lem-normalization-defect-euler-and-lengths` derives skyscraper flasqueness
from `def-skyscraper-sheaf-abelian-group` + `def-flasque-sheaf` and applies
`thm-flasque-sheaves-acyclic` (no dependency on `ex-skyscraper-sheaf-acyclic`).
Both item files were rechecked with precheck/rendercheck/proof-layout, their
contract entries regenerated in the batch contract (still 60/60 strict-clean,
boundary-audit 0/0), the manifest rows resynced, and all 60 item decisions
re-recorded. The three remaining repo-wide `b-leaf-content` findings are on
other pages/pairs.
