# Step 3b authoring — `intersection-pairings-self-intersection-and-euler-classes`

- Run `frontier-41-ha-dt-29`; role alpha-high; label
  `step3b-pair-intersection-pairings-self-intersection-and-euler-classes-3d92d87a4d8ae31f`.
- A page `intersection-pairings-self-intersection-and-euler-classes` (order 531, batch 2,
  differential-topology); B page `...-examples` (order 532, companion). Batch 2 contains this
  pair alone, so the batch manifest, coverage file and proof contract are pair-local.
- Output of this report: authoring record, checkpoints, supplier reconciliation, open obligations.

## Owned IDs (21) and current status

Authoring order = dispatch dependency order (level, then page order, then item ID).

| level | id | page | status |
|---|---|---|---|
| 0 | def-geometric-intersection-pairing-on-a-closed-oriented-manifold | A | authored, decision `accept` |
| 0 | def-self-intersection-number-of-an-oriented-submanifold | A | authored, decision `accept` |
| 0 | lem-normal-bundle-of-the-diagonal-is-canonically-tm | A | authored, decision `repaired` (orientation wording) |
| 0 | lem-normal-bundle-of-the-zero-locus-of-a-transverse-section | A | authored, decision `repaired` (orientation clause wording) |
| 0 | lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold | A | authored, decision `repaired` (Koszul sign + wording) |
| 1 | lem-geometric-intersection-descends-through-oriented-cobordism-of-cycles | A | authored, decision `repaired` (forward step reference, relabelling) |
| 1 | lem-normal-push-off-zeros-are-self-intersection-points | A | authored, decision `repaired` (proof text: perturbation overclaim removed) |
| 1 | lem-pullback-of-the-thom-class-along-a-transverse-section | A | authored, decision `accept` |
| 2 | prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual | A | authored, decision `repaired` (Koszul sign) |
| 3 | prop-mod-two-self-intersection-needs-no-orientation | A | authored, decision `accept` |
| 3 | rem-euler-class-construction-remains-owned-by-at | A | authored, decision `accept` |
| 3 | thm-geometric-intersection-equals-the-poincare-dual-cup-pairing | A | authored, decision `accept` |
| 3 | thm-self-intersection-is-the-euler-number-of-the-normal-bundle | A | authored, decision `accept` |
| 4 | cor-diagonal-self-intersection-is-the-euler-number-of-tm | A | authored, decision `repaired` (dep registration) |
| 4 | cor-nowhere-zero-section-forces-the-euler-class-to-vanish | A | authored, decision `accept` |
| 4 | rem-cap-product-order-awaits-the-at-sign-convention | A | authored, decision `accept` |
| 4 | rem-not-every-homology-class-is-represented-by-an-embedded-submanifold-integrally | A | authored, decision `accept` |
| 4 | cex-the-core-circle-of-a-mobius-band-has-no-integral-oriented-self-intersection | B | authored, decision `accept` |
| 4 | ex-coordinate-circles-give-the-hyperbolic-intersection-form-on-a-torus | B | authored, decision `repaired` (dep registration) |
| 5 | ex-diagonal-in-the-two-sphere-has-self-intersection-two | B | authored, decision `repaired` (dep registration) |
| 5 | ex-self-intersection-of-the-zero-section-in-an-oriented-plane-bundle | B | authored, decision `accept` |

All 21 item files, both page files (`library/differential-topology/intersection-pairings-...md`
and `...-examples.md`) and the batch contract
`research/frontier-41-ha-dt-29-batch-2.proof-contracts.json` are written. Item 7 was edited
after its first receipt and after nine downstream receipts had been recorded; those nine receipts
were refreshed with unchanged verdicts after re-checking the exact supplier use (the lemma's
Statement is unchanged) — see "Late repair and closure refresh". `node tools/step3-decisions.mjs
check --run frontier-41-ha-dt-29 --phase final` reports 0 open work items naming any owned ID
(the run-wide gate stays red on other, unfinished pairs).

## Checkpoints (per item, in authoring order)

1. `def-geometric-intersection-pairing-on-a-closed-oriented-manifold` — definition assembled from the
   published DT-11 interfaces (`def-oriented-intersection-number`'s compact-source/closed-target
   hypotheses hold for closed $A,B$ in a closed $M$); `verification.precheck: n/a`, no proof section,
   as for the published `def-oriented-intersection-number`. Statement kept verbatim.
2. `def-self-intersection-number-of-an-oriented-submanifold` — definition kept verbatim; added a
   Remarks block recording (a) why small push-offs are embedded (zero section closed by
   `prop-the-zero-section-is-a-smooth-embedding`, tube by the tubular theorem plus the neighbourhood
   retraction), (b) the first-factor-first order, (c) the mod-2 clause. `justified_by` names the
   evaluation theorem, which depends on this definition (verified in the manifest), so the
   justification edge is backward-legal. `precheck: n/a`.
3. `lem-normal-bundle-of-the-diagonal-is-canonically-tm` — orientation wording repaired to the
   tangent-first convention (see the entry finding); explicit determinant comparison
   $\det\begin{pmatrix}I&0\\ I&I\end{pmatrix}=+1$ gives the orientation-preserving identification.
   Steps relabelled 1.1, 2.1. Passes precheck, proof-layout, rendercheck, strict contract.
4. `lem-normal-bundle-of-the-zero-locus-of-a-transverse-section` — orientation clause restated
   tangent-first; added closedness of $Z$ (zero section is closed in $E$); zero-locus facts and the
   submanifold structure cited to `thm-transverse-preimage-theorem` (which does not itself state
   closedness, so the proof supplies it). Passes all four checks.
5. `lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold` — repaired: the conclusion now
   carries the Koszul factor $(-1)^{rz}$ of the cohomology-first front-evaluation cap (see the entry
   finding for the two independent verifications), the orientation wording is tangent-first, and the
   local step 3.1 states the shuffle sign explicitly. Steps relabelled 1.1…5.1. All checks clean.
6. `lem-geometric-intersection-descends-through-oriented-cobordism-of-cycles` — repaired the scaffold's
   "step 2.1" reference (it pointed at another item's step and would have failed
   `forward-ref-2.1`); now cites [[cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary]]
   without a step number. Boundary-orientation comparison retained from the published DT-11 convention
   (`def-induced-boundary-orientation` is outward-normal-first); no independent re-derivation claimed.
7. `lem-normal-push-off-zeros-are-self-intersection-points` — repaired after the first receipt: the
   scaffold's [F1] implied that a section can be perturbed relative to a neighbourhood of its zeros,
   which the cited `cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section` does not
   state (it gives only the submanifold structure of $Z(s)$); [F1] now records exactly what the two
   suppliers prove, and step 2.1 states that the definition of $A\cdot A$ uses only small transverse
   push-offs, deferring independence of the choice to
   `thm-self-intersection-is-the-euler-number-of-the-normal-bundle`, as the definition records. The
   determinant computation ($\varepsilon=\operatorname{sign}\det J$ in the ordered ambient basis,
   first factor $A$, tangent-first) is unchanged and is the one that pins the pair's convention;
   steps 1.1, 1.2, 2.1. Receipt re-recorded as `repaired`.
8. `lem-pullback-of-the-thom-class-along-a-transverse-section` — kept as scaffolded (statement and
   proof); the local normalization step is orientation-consistent with item 4's clause. Checks clean.
9. `prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual` — repaired sign:
   $e(E)\cap[M]=(-1)^{r(n-r)}(i_Z)_*[Z]$; the $z=0$ case used by the self-intersection theorem is
   sign-free, so the design's downstream claims are untouched. Steps 1.1…4.1.
10. `thm-geometric-intersection-equals-the-poincare-dual-cup-pairing` — kept as scaffolded; the local
    sign comparison is a Koszul-$+1$ computation because $\dim(A\cap B)=0$, so the identity holds in
    the pair's conventions without extra signs. Steps re-chained 1.1, 1.2, 2.1, 3.1, 4.1, 5.1.
11. `thm-self-intersection-is-the-euler-number-of-the-normal-bundle` — kept as scaffolded; step 2.1 now
    records that the zero-locus duality is used with $z=0$ (Koszul factor $1$) and that
    $\sigma_x=\operatorname{sign}\det\partial_\nu s_x$ in the pair's orientation. Steps 1.1, 2.1, 3.1.
12. `prop-mod-two-self-intersection-needs-no-orientation` — kept; the mod-2 clause has no Koszul sign
    ($-1=1$ in $\mathbb F_2$). Steps 1.1, 2.1, 3.1.
13. `rem-euler-class-construction-remains-owned-by-at` — seam remark; `## Remark`, `precheck: n/a`,
    no proof section, provenance `not-applicable`.
14. `rem-not-every-homology-class-is-represented-by-an-embedded-submanifold-integrally` — kept as the
    recorded caveat (Steenrod-operation obstruction; Thom's mod-2 representability); the external facts
    have no in-library supplier and no consumer, as Step 3a recorded, so the remark stays
    `not-applicable` rather than `proved_here: false`.
15. `rem-cap-product-order-awaits-the-at-sign-convention` — kept verbatim; it is the remark that makes
    the cohomology-first cap convention authoritative for the pair (and hence the Koszul repairs).
16. `cor-diagonal-self-intersection-is-the-euler-number-of-tm` — kept; registered
    `prop-the-diagonal-is-an-embedded-submanifold` in the item deps (the scaffold's own strategy cited
    it; manifest deps omit it). Steps 1.1, 2.1.
17. `cor-nowhere-zero-section-forces-the-euler-class-to-vanish` — kept; the "converse is false" clause
    names the published AT counterexample as prose, with no citation edge (Step 3a caveat 2, unchanged).
18. `ex-self-intersection-of-the-zero-section-in-an-oriented-plane-bundle` — kept; case (a) $0$, case (b)
    $2$ with both pole indices $+1$ (the $(-1)$-signs of the two polar charts cancel as recorded).
19. `ex-coordinate-circles-give-the-hyperbolic-intersection-form-on-a-torus` — kept (the post-scaffold
    reduced claim); registered `thm-intersection-number-under-factor-interchange` in the item deps.
20. `cex-the-core-circle-of-a-mobius-band-has-no-integral-oriented-self-intersection` — kept; the
    integral count is undefined (monodromy reverses the fibre orientation) and the mod-2 count is $1$;
    sign-free. Steps 1.1, 2.1, 3.1.
21. `ex-diagonal-in-the-two-sphere-has-self-intersection-two` — kept; registered the same-page
    `ex-self-intersection-of-the-zero-section-in-an-oriented-plane-bundle` in the item deps; steps 1.1, 2.1.

## Repairs and deviations from the scaffold (for Step 4)

The manifest `research/frontier-41-ha-dt-29-batch-2.pages.json` was **not edited** (its Step-1 readiness
records, coverage and hashes are preserved, and sibling pairs that consume these items keep their
current hashes). Three classes of divergence between the manifest entries and the authored item files
are reported here for the Step-4 reconciler:

1. **Statement repairs (2 items).**
   - `lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold`: conclusion changed from
     $\alpha\cap[M]=(i_Z)_*[Z]$ to $\alpha\cap[M]=(-1)^{rz}(i_Z)_*[Z]$ ($r=n-z$), and the orientation
     phrase changed from "positive normal basis followed by a positive tangent basis" to "positive
     tangent basis followed by a positive normal basis".
   - `prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual`: conclusion
     changed from $e(E)\cap[M]=(i_Z)_*[Z]$ to $e(E)\cap[M]=(-1)^{r(n-r)}(i_Z)_*[Z]$.
   - `lem-normal-bundle-of-the-diagonal-is-canonically-tm`: orientation phrase only, to tangent-first.
   Evidence and the two independent verifications are in the entry finding above. The design's own
   item A10 is phrased as "represents $\mathrm{PD}(e(E))$" with the sign convention deferred to build
   time (design §DT-12, item 10), so no design claim is narrowed; the headline identity A7 is unchanged.
2. **Deps registered in item frontmatter only (3 items).**
   - `cor-diagonal-self-intersection-is-the-euler-number-of-tm`: `+ prop-the-diagonal-is-an-embedded-submanifold`.
   - `ex-coordinate-circles-give-the-hyperbolic-intersection-form-on-a-torus`: `+ thm-intersection-number-under-factor-interchange`.
   - `ex-diagonal-in-the-two-sphere-has-self-intersection-two`: `+ ex-self-intersection-of-the-zero-section-in-an-oriented-plane-bundle` (same-page, earlier item — legal).
   Manifest `dependency_level` labels are unchanged and still match the computed levels, because all
   three targets are published or same-batch items.
3. **Style/structure repairs.** Step relabellings to the canonical citation layering (items 5, 6, 8, 9,
   10, 16, 18, 20, 21), removal of the cross-item "step 2.1" reference in item 6, and the tangent-first
   rewording of the orientation clauses in items 3 and 4.
4. **Proof-text repair (1 item).** `lem-normal-push-off-zeros-are-self-intersection-points` was
   repaired after its first receipt: the scaffold's [F1] implied that a section can be perturbed
   relative to a neighbourhood of its zeros, which the cited
   `cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section` does not state; [F1] now
   records exactly the two suppliers' content, and step 2.1 states that the definition uses only small
   transverse push-offs and defers independence of the choice to
   `thm-self-intersection-is-the-euler-number-of-the-normal-bundle`, as the definition records. The
   lemma's Statement is unchanged.

## Late repair and closure refresh

The item-7 proof-text repair was made after the first batch of receipts was recorded. Because
`def-self-intersection-number-of-an-oriented-submanifold` carries the evaluation theorem in
`justified_by`, the lemma lies in the transitive closure of that definition and of its consumers, so
nine receipts went stale on the closure hash even though no Statement changed. All nine were re-checked
against the current inputs (each uses only the lemma's unchanged Statement, the sign identity
$\varepsilon=\operatorname{sign}\det\partial_\nu s_x$) and re-recorded at confidence 1 with their
unchanged verdicts: `def-self-intersection-number-of-an-oriented-submanifold` (accept),
`thm-self-intersection-is-the-euler-number-of-the-normal-bundle` (accept),
`prop-mod-two-self-intersection-needs-no-orientation` (accept),
`cor-diagonal-self-intersection-is-the-euler-number-of-tm` (repaired),
`cor-nowhere-zero-section-forces-the-euler-class-to-vanish` (accept),
`ex-self-intersection-of-the-zero-section-in-an-oriented-plane-bundle` (accept),
`ex-diagonal-in-the-two-sphere-has-self-intersection-two` (repaired),
`ex-coordinate-circles-give-the-hyperbolic-intersection-form-on-a-torus` (repaired),
`cex-the-core-circle-of-a-mobius-band-has-no-integral-oriented-self-intersection` (accept). The
contract's `degenerate` boundary evidence for item 7 was aligned with the new step 2.1 wording (the
non-transverse case is outside the lemma's hypothesis, not handled by perturbation).

## Checks actually run (with results)

- `node tools/tsx-run.mjs tools/precheck.mts items/<all 21 owned items>` (explicit paths) → 16 checked,
  0 failing — all clean (the other five owned items declare `verification.precheck: n/a`: the two
  definitions, the two seam remarks and the representability remark).
- `node tools/proof-layout.mjs items/<all 21 owned items>` (one batched command, run after the final
  edit) → 21 items, 52 steps, 0 defects, and no file was rewritten.
- `node tools/rendercheck.mjs items/<all 21> library/differential-topology/intersection-pairings-....md library/differential-topology/...-examples.md`
  → 23 files, no wikilink in math, no unbalanced delimiters, every math span parses under KaTeX, every
  frontmatter block parses.
- `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-2.proof-contracts.json --strict`
  (re-run after the item-7 and contract-text edits) → 21/21 items checked, 0 errors, 0 warnings (every
  fact→source pair has an exact quote and every numbered step has a derivation contract with its
  inputs; all eight boundary cases are disposed).
- `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-2.pages.json` → 21 items, 0 normalized,
  0 errors.
- `node tools/content-policy.mjs research/frontier-41-ha-dt-29-batch-2.pages.json` (item mode) →
  21 scoped items, 0 errors, 0 warnings. (`--manifest-only` mint mode reports `batch-item-already-exists`
  for every owned item, which is the expected consequence of authoring the files; that mode belongs to
  the stamped `1-scaffold` stage, not to Step 3b.)
- `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-2.coverage.json --require-destination`
  → 2 pages, 35 harvested results, 0 errors, 0 warnings.
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` → exit 1 run-wide, but no
  error line names any batch-2 item; the reported mismatches are all in other, unfinished pairs
  (`cor-center-is-morita-invariant-via-natural-endomorphisms`,
  `ex-matrix-ring-morita-pair-with-explicit-tensor-inverses`,
  `ex-central-elements-as-natural-endomorphisms-of-the-identity`).
- `node tools/validate-plan.mjs research/plan-spec.json` → OK: no item-level cycles, forward references,
  B-page dependencies or unresolved ids among the 1422 page(s) with item lists; no line names an owned
  item beyond the recorded plan-owned `redundant-prereq` warning.
- `node tools/depcheck.mjs --items-file <21 owned ids>` → 0 errors naming any owned item; 12 benign
  `cited-not-in-deps` warnings (listed below). The run-level depcheck still fails on other batches'
  items (37 errors, none owned).
- `node tools/fwdcheck.mjs --quiet` → fails on other pairs only: a page stack cycle
  (`morse-inequalities-and-the-handle-chain-complex` ↔
  `vector-field-index-euler-characteristic-and-poincare-hopf`) and
  `thm-smale-hirsch-for-open-source-manifolds` linking `prop-dual-elimination-of-top-index-handles`;
  nothing owned here. `node tools/extcheck.mjs` → exit 0 (its notices name no owned item).
- `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase final` → 0 open work items
  naming an owned ID (194/899 accepted run-wide at the time of the check; the rest are other pairs
  still in flight). All 21 owned receipts are current against their closure hashes after the refresh.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29` → batch 2 is a
  `reviewed_batch` with its (empty, correct) input; the refresh currently fails on
  `frontier-41-ha-dt-29-batch-19.cross-batch-dependencies.json` (invalid review/consumer ownership in
  another batch's input — its owner's repair, not editable here).

## Owned-item depcheck warnings (benign, recorded)

12 `cited-not-in-deps` warnings name owned items, all from Statement or Facts links to published or
same-page suppliers outside the scaffold's `deps` arrays: item 3 cites
`prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold`; item 7 the same item; item 8
cites `lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold`; item 12 cites
`def-fundamental-class-of-a-compact-oriented-manifold` and `thm-self-intersection-...`; item 10 cites
`cor-homotopic-maps-induce-the-same-map-on-singular-homology`, `def-transverse-embedded-submanifolds`
and `lem-compact-transverse-complementary-intersections-are-finite`; item 11 cites
`prop-a-transverse-...` and `prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section`;
items 18/19 cite `cor-nowhere-zero-section-forces-the-euler-class-to-vanish` and
`thm-self-intersection-...` in prose, and item 7 also cites
`thm-self-intersection-is-the-euler-number-of-the-normal-bundle` in its Statement as the location where
independence of the push-off is proved (a deferral note, not a use in this lemma's proof). No warning
is a missing logical prerequisite; the cited items are published, earlier, and used only for
orientation of the reader or as immediate restatements.

## Open obligations at entry

1. Author all 21 item files and both pages (`library/differential-topology/...`); none exists yet
   (checked: no `items/<id>.md` for any owned ID; the two page files are absent).
2. Register items in the batch-2 manifest (already present), coverage (already present, 35
   harvested results), and the batch-2 proof contract `research/frontier-41-ha-dt-29-batch-2.proof-contracts.json`
   (to be written; strict merge gate merges all batches).
3. All 21 items were audited `ready` in Step 1 and scope was recorded `sufficient` in Step 3a.
   Direct suppliers: all cited ids are published items or draft items of this same pair
   (Step 3a: 109 cited ids, 93 published, 16 in-pair, 0 unresolvable, 0 forward). No cross-batch
   in-run supplier is required; batch-2 cross-batch input is empty (to be re-verified after
   authoring, since item frontmatter deps are ledger inputs).
4. Recheck Step 3a caveats: (a) `rem-not-every-homology-class-is-represented...` is an
   orientation remark with `proof: not-applicable`, external facts have no in-library supplier;
   (b) `cor-nowhere-zero-section-forces-the-euler-class-to-vanish` names the published
   counterexample without a citation edge; (c) `validate-plan` `redundant-prereq` WARN on
   `smooth-vector-bundles-and-sections` is plan-owned; (d) source locators (bookR4 renumbering,
   Milnor–Stasheff OCR) are recorded at chapter/section resolution.
5. Record Step 3b item decisions (`accept`/`repaired`) after complete authoring and checks, with
   examined dependency IDs; escalate only genuine blockers.

## Checkpoints

### Entry finding — normal-orientation convention (decided before item 3)

The scaffold mixes two opposite conventions for the orientation of the normal bundle
$\nu_A=TM|_A/TA$:

- (a) *tangent-first*: a positive tangent basis of $A$ followed by a positive normal basis is
  positive in $M|_A$. This is what the proof of the cited
  `prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold` constructs
  (local frames of $TS$ extended to frames of $TM|_S$ give the ordered isomorphism
  $\det(TM|_S)\cong\det(TS)\otimes\det(\nu S)$), and it is what the pair's own
  `lem-normal-push-off-zeros-are-self-intersection-points` step 1.2 and the design's headline
  item (A7, $A\cdot A=\langle e(\nu_A),[A]\rangle$) need: with $\varepsilon$ the DT-11 local sign
  of $(A,A_s)$ (first factor $A$), a determinant computation in the ordered splitting gives
  $\varepsilon=\operatorname{sign}\det\partial_\nu s_x$ exactly in convention (a), with no
  $(-1)^{a}$; the frontier's sibling pairs assume the same convention (batch 7
  `prop-vector-field-zero-index-is-a-zero-section-intersection-number`: "direct sum of the
  horizontal (tangent) and the vertical (fibre) orientation"; batch 24
  `lem-thom-class-of-a-disk-bundle-pairs-with-the-base-generator`: "total orientation base
  followed by fiber").
- (b) *normal-first*: a positive normal basis followed by a positive tangent basis is positive in
  $M|_A$. This is the wording of the scaffold's two Thom-duality items and of the published
  `prop-collapse-pullback-of-the-thom-class-is-the-poincare-dual` (order 547, DT-16) and
  `def-induced-orientation-on-a-hypersurface-from-a-coorientation`.

The library's cap product is the cohomology-first, front-evaluation operation
(`def-cap-product-with-cohomology-first`; the authoring remark A4 makes it authoritative), and in
that convention the classical Thom-class-duality statement reads (Cohen Cor. 9.3 / Ionel Thm. 139)
with a Koszul factor: if $\nu_Z$ carries the *tangent-first* orientation, then
$\alpha\cap[M]=(-1)^{r z}(i_Z)_*[Z]$ with $r=n-z$. Evidence (checked, not assumed):

- local determinant computation in a tube: with $M$ oriented by $du\wedge dv$ (tangent-first) and
  $\alpha=f(v)dv_1\wedge\cdots\wedge dv_r$ normalized by the tangent-first fibre orientation, one
  has $\alpha\wedge \beta=(-1)^{rz}f g\,du\wedge dv$ for $\beta=g\,du$, so
  $\langle\beta,\alpha\cap[M]\rangle=(-1)^{rz}\langle\beta,[Z]\rangle$;
- the case $r=z=1$ is the published computation
  `ex-fundamental-classes-and-duality-for-spheres-and-tori`, whose stated cohomology-first duality
  is $x_I\cap[T^m]=(-1)^{\sum_{r=1}^k(i_r-r)}b_{I^c}$, hence $x_2\cap[T^2]=-b_1$; for the circle
  $Z=S^1\times\{*\}$ in $T^2$ the tangent-first Thom class extends to $\operatorname{pr}_2^*u=x_2$,
  so $\alpha\cap[M]=-i_*[Z]$, matching $(-1)^{rz}$. The same direct computation was redone at the
  chain level with the library's Alexander-Whitney and front-face conventions and agrees.

Decision: the pair uses convention (a) throughout, because the design's headline identity
(item A7) and the frontier's sibling pairs require it. Consequently the two Thom-duality items are
repaired by the explicit Koszul factor $(-1)^{rz}$ (the *claims* of the design's A10, phrased as
"represents PD(e(E))" with the sign convention deferred to build time, are preserved; only the
scaffold's sign-free concretization is corrected). The opposite convention in the published DT-16
item is recorded as a published concern in the handoff section; it does not block this pair because
the two pages state their own conventions and neither cites the other's item.

## Handoff

**Completed.** All 21 owned items authored and final: 12 recorded `accept` and 9 recorded `repaired`
(items 3, 4, 5, 6, 7, 9, 16, 19, 21), every receipt current at confidence 1 with its examined
dependency IDs. Both pages written at status `draft`
(`library/differential-topology/intersection-pairings-self-intersection-and-euler-classes.md`, order
531, 17 items; `...-examples.md`, order 532, 4 items) and the batch contract
`research/frontier-41-ha-dt-29-batch-2.proof-contracts.json` complete (scope 21). The batch manifest
and coverage file were deliberately not edited (they preserve the Step-1 scaffold state and sibling
hashes); their step-4 reconciliation inputs are in "Repairs and deviations from the scaffold".

**Checks actually run (all after the final edit).** `precheck` 16 checked / 0 failing (5 items
`precheck: n/a`); one batched `proof-layout` 21 items / 52 steps / 0 defects with no rewrite;
`rendercheck` 23 files OK; strict `proof-contract` 21/21, 0 errors, 0 warnings; `manifest-deps`
0 errors; `content-policy` 21/21, 0 errors; `coverage-checklist --require-destination` 0 errors;
`depcheck` 0 owned errors (12 benign warnings); `item-dependency-levels` no owned mismatch;
`validate-plan` OK; `step3-decisions check --phase final` 0 open owned items; `extcheck` exit 0.

**Added suppliers.** None. Every cited supplier is a published library item or an earlier item of
this same pair; no new prerequisite item was needed and no cross-batch in-run supplier is consumed
(batch-2 cross-batch input stays empty).

**Published concerns (report only; not edited here).**
1. `prop-collapse-pullback-of-the-thom-class-is-the-poincare-dual` (order 547, DT-16) states
   $c^*u_\nu\cap[M]=i_*[S]$ with normal-first orientation wording; under the library's
   cohomology-first, front-evaluation cap product that identity needs the Koszul factor
   $(-1)^{rz}$, exactly as repaired here in `lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold`
   and `prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual`.
   Confidence: high on the algebra, medium on which wording the DT-16 proof intends. Neither page
   cites the other's item, so this pair is not blocked; owner may route a DT-16 repair.
2. Step 3a caveats unchanged: `rem-not-every-homology-class-is-represented-by-an-embedded-submanifold-integrally`
   cites external facts (Steenrod-operation obstruction, Thom's mod-2 representability) that have no
   in-library supplier and no consumer; `cor-nowhere-zero-section-forces-the-euler-class-to-vanish`
   names the published counterexample for the false converse as prose without a citation edge.
3. Source locators for Cohen's book are recorded at bookR4 chapter/section resolution (the design's
   bookR3 numbering is stale), and the Milnor–Stasheff PDF is OCR text; both are recorded in the item
   `sources` blocks.

**Open obligations.** None owned by this pair. Run-wide gates remain red only on other pairs'
unfinished work, none editable or blocking here: `fwdcheck` (morse page cycle;
`thm-smale-hirsch-for-open-source-manifolds` unplanned link), `item-dependency-levels` (Morita items),
run-wide `depcheck` errors, and `frontier-dependency-ledger refresh`
(`frontier-41-ha-dt-29-batch-19.cross-batch-dependencies.json`, another owner's input). Step 4 must
apply the three item-frontmatter dep additions listed above; no scope amendment to the shared plan or
prose is requested.
