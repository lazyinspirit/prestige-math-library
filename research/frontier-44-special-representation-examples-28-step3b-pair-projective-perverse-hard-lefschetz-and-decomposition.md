# Step 3b — scaffold audit and authoring: `projective-perverse-hard-lefschetz-and-decomposition` / `…-examples`

- Run: `frontier-44-special-representation-examples-28`
- Role/label: alpha-high / `step3b-pair-projective-perverse-hard-lefschetz-and-decomposition-bd60d723b3c0dcd6` (completion dispatch; the entry report and the first five item files were written by the earlier attempt `…-024005226eb2570a`, which failed before the example, the pages, the contracts and the decisions)
- Batch: 48 (A page order 1830, category `algebraic-geometry`; B page order 1833)
- Date: 2026-10-10

## Owned IDs and dispatch order (levels recomputed from the manifest)

A page `projective-perverse-hard-lefschetz-and-decomposition`:

1. `lem-middle-lefschetz-primitive-polarization-follows-from-nonmiddle-polarizations` (14)
2. `lem-perverse-closed-support-splitting-is-equivalent-to-costalk-stalk-isomorphism` (20)
3. `lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction` (23)
4. `thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps` (24)
5. `thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology` (25)

B page `projective-perverse-hard-lefschetz-and-decomposition-examples`:

6. `ex-projective-perverse-decomposition-for-projective-space-to-a-point` (26)

Deliverables completed by this dispatch: the sixth item and both
`library/algebraic-geometry/<page>.md` pages; refreshed batch-48 manifest levels
(14/20/23/24/25/26, deps unchanged, sibling rows preserved);
`research/…-batch-48.proof-contracts.json`; six current item decisions; the scoped
checks battery; `research/…-author-check-48.json`; the ledger refresh; this report.

## First item (level 14) — audit result

`lem-middle-lefschetz-primitive-polarization-follows-from-nonmiddle-polarizations`.
Both exact suppliers were read at statement level: the centered admissible
filtration with its intrinsic formula, uniqueness and self-duality
(`lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual`) and real Kähler
hard Lefschetz, Hodge–Riemann positivity with $Q_n=\epsilon(n)\int_X(-)\wedge(-)$,
and the sign-adjusted polarization
(`thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties`,
closed in the run). The proof was re-derived at authoring level: the
Grassmannian limit $\Lambda$, the induction
$M\cap E_1^\perp\cap\cdots\cap E_i^\perp=M\cap W_{-i}H^n$ (hypotheses (a)–(c)
used exactly once each), the dimension count $D=\Lambda\mathbin{\perp\oplus}M$,
$\operatorname{rad}(D)=R=D\cap W_{-1}H^n$, and the limit positivity. No gap
found; `[F2]`'s claim $\ker L^j\subseteq W_{j-1}$ follows from the supplier's
intrinsic formula with $a=j-1$, $b=0$. Decision `accept` (defects `[]`).

## Item checkpoints (dispatch order)

### 2. `lem-perverse-closed-support-splitting-is-equivalent-to-costalk-stalk-isomorphism` (20) — repaired, decision escalated

- Suppliers read: `thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes` (escalated in-run) and `lem-analytic-constructible-sheaves-admit-coherent-six-operations` (escalated in-run); both still open, so the decision stays escalated until they are completed and steps 1.1–5.1 are reconciled.
- **Local repair:** step 4.1's final inference ("so $C$ is the image of that comparison") did not by itself prove that an arbitrary perverse extension $C$ of $Q$ with no supported subobject or quotient is $j_{!*}Q$; the step now factors the comparison $c$ through the epimorphism $f:{}^pH^0Rj_!Q\twoheadrightarrow C$ (possible because $K=\ker f$ is supported on $Z$ and $c|_K=0$ by the defining property of $j_{!*}$), shows $\bar c:C\to j_{!*}Q$ is an identity on $U$, and kills $\ker\bar c$ and $\operatorname{coker}\bar c$ by the two supported-object hypotheses. Tags and deps unchanged.
- Checks: precheck PASS, rendercheck OK, proof-layout 5 steps 0 defects, strict contract clean. Decision `escalate`, defects `["dependency"]`.

### 3. `lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction` (23) — authored, decision escalated

- The 94 KB carrier (statement, 9-step main proof, ordered local constructions A–H) is embedded in the item; main proof steps 1.1–9.1, each construction with its own inputs and boundary notes. Structure checked: no step is justified by a later step; the lexicographic pair $(r(f),\dim f(X))$ has $r$ primary and the image-zero base is step 1.1.
- Consumed suppliers: all 26 declared deps were located on disk; the following remain unfinished and their consuming steps are recorded in the decision: `thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes` (steps 2.1–8.1), `lem-analytic-constructible-sheaves-admit-coherent-six-operations` (steps 2.1–8.1), `lem-artin-affine-vanishing-for-constructible-perverse-sheaves` (steps 2.1–8.1); also open at handoff: `lem-noncharacteristic-complex-stratified-pullback-is-perverse-exact`, `thm-smooth-projective-gauss-manin-local-systems-are-semisimple`, `thm-mixed-hodge-weights-control-proper-cohomological-restriction-images`, `thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree`. The published Thom/line/stratification/generic-smoothness/Bertini supplies were read at statement level and match the uses.
- **Register note (editorial, non-blocking):** the embedded construction texts retain research-lane boundary sentences ("root owns …", "no native acceptance is claimed", one reference to a research file `semisimplicity-hyperplane-thom-cup-proof.md`). They are honest about status but are not library-register prose; recommended for Step 4/5 editorial trimming without changing claims. Claimed content is unchanged.
- Checks: precheck PASS, rendercheck OK, proof-layout 9 steps 0 defects, strict contract clean (23 citation entries). Decision `escalate`, defects `["dependency"]`.

### 4. `thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps` (24) — authored, decision escalated

- Two-step lexicographic induction on [F1]; reduction to connected components, reduced projective image, image-zero base by [F2], ample-to-very-ample replacement via `thm-ample-powers-very-ample-proper-base`, and component reassembly. Consuming steps 1.1 and 2.1 use the escalated item 3, `lem-analytic-constructible-sheaves-admit-coherent-six-operations` and `thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes`.
- Checks: precheck PASS, rendercheck OK, proof-layout 2 steps 0 defects, strict contract clean. Decision `escalate`, defects `["dependency"]`.

### 5. `thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology` (25) — authored with Remark refresh, decision escalated

- Coefficient comparison: scalar extension of the rational splitting, IC compatibility, semisimple extension by the closed `lem-characteristic-zero-scalar-extension-preserves-geometric-local-system-semisimplicity`, additive IC construction from the perverse-heart item; no embedding $k\hookrightarrow\mathbb C$ used.
- **Repair:** the Remarks paragraph still claimed the coefficient-comparison item's proof "is owed to the run"; that supplier is now authored and closed, so the remark was rewritten to state the completed reduction relative to the named suppliers. This edit invalidated the earlier escalation receipt hash; the tool permits only the owner to re-record after an escalation, so the run-check now reports this item (and its consumer 6) as "changed inputs require a current owner decision" — the owner will re-bind on resolution. Decision `escalate`, defects `["dependency"]`, consuming steps 1.1 and 2.1 (item 4, `lem-analytic-constructible-sheaves-admit-coherent-six-operations`, `thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes`).

### 6. `ex-projective-perverse-decomposition-for-projective-space-to-a-point` (26) — newly authored, decision escalated

- Authored from the carrier and the analogous sibling example: cellular structure of $\mathbb P^n$ with vanishing differential (`thm-cellular-cochains-compute-cohomology-with-local-coefficients`), the point perverse heart as finite-dimensional vector spaces, and the finite splitting of `thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology`; steps 1.1 and 2.1, final `[step 1.1, algebra] ∎`. Rendered YAML repaired (a `\m` escape in the Hatcher locator was invalid YAML and dropped the file from the corpus; rendercheck now clean). Decision `escalate`, defects `["dependency"]` (consumers of escalated items 5 and the perverse-heart item).

## Step 3a findings rechecked against current inputs

- F1 (thin B page, design-faithful): unchanged; the single example is exactly the planned one and no consumer needs more.
- F2 (coverage labels for dcM 2.1.8–2.1.9 `inline`): unchanged; the coverage file was not edited.
- F3 (deferral destination §2.3 → batch 46): recorded uncertainty stays with the owner; no in-run consumer needs it.
- F4 (splice bookkeeping): still valid and reported for Step 4 — manifest item deps are strict supersets of `plan-spec.json` on items 3, 5 and 6; item 3's title follows the carrier; the example's plan dep on item 4 was already replaced by item 5 in the manifest and the authored item follows the manifest (its proof links item 4 through item 5's own splitting). Additionally, item 3's deps still list `thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle` although Construction A records that the line normalization is already carried by `prop-first-chern-class-of-tensor-dual-and-conjugate-lines`; a redundant-but-harmless declaration for the Step-4 splice to normalize.

## Manifest, coverage, contracts, ledger, decisions

- `…-batch-48.pages.json`: dependency levels refreshed to the computed 14/20/23/24/25/26 (the five item files already carried these); deps, statements, orders and the example row unchanged; `item-dependency-levels check --run` now clean for the whole run (868 items, max level 47).
- `research/…-batch-48.proof-contracts.json` created: 6 items, 37 citation entries with exact quotes (2/2/23/5/5/0 by item), every numbered step mapped with inputs, all eight boundary cases per item — `proof-contract --strict` reports 6/6, 0 errors, 0 warnings.
- Cross-batch input `research/…-batch-48.cross-batch-dependencies.json` left at its 37 `verified` declaration-level rows (no dependency edits; sibling rows untouched); `frontier-dependency-ledger.mjs refresh --run …` run after the manifest edits and again at handoff.
- Decisions (`step3-decisions record-item`): item 1 `accept` (defects `[]`); items 2–6 `escalate` (defects `["dependency"]`) with the exact supplier IDs and consuming steps; no `--owner`, no judge stamps. Items 5 and 6 carry stale-hash escalations after the final Remark edit, surfaced by the check as "changed inputs require a current owner decision".

## Checks actually run (results at this writing)

- `node tools/tsx-run.mjs tools/author-check.mts frontier-44-special-representation-examples-28 48` — `ok: true`, fingerprint `8c65ff52772024cb`; sub-gates `precheck`, `rendercheck`, `content-policy-items`, `proof-contract` all true (`research/…-author-check-48.json`).
- `tools/precheck.mts` on the six explicit item paths — 6 checked, 0 failing.
- `tools/rendercheck.mjs` on the six items and both pages — OK, 8 files (frontmatter, math and wikilink checks).
- `node tools/proof-layout.mjs` on all six changed item paths in one command — 6 items, 27 steps, 0 defects.
- `tools/content-policy.mjs …-batch-48.pages.json` — 6 scoped items, 0 errors, 0 warnings.
- `tools/proof-contract.mjs …-batch-48.proof-contracts.json --strict` — 6/6 items, 0 errors, 0 warnings.
- `tools/manifest-deps.mjs …-batch-48.pages.json` — 6 items, 0 normalized, 0 errors.
- `tools/item-dependency-levels.mjs check --run …` — clean, no error names any batch-48 row.
- `tools/validate-plan.mjs research/plan-spec.json --run …` — exit 1 with exactly one `undeclared-prereq` error naming the unrelated pair `equivariant-borel-moore-correspondence-convolution-and-constructible-ext-examples`; this pair's pages appear as orders 1830 (5 items) and 1833 (1 item) with only pre-existing `redundant-prereq` advisories (22 on the A page, 3 on the B page). Reported for its owner, not edited.
- `tools/coverage-checklist.mjs …-batch-48.coverage.json --require-destination` — 2 pages, 44 harvested results, 0 errors, 1 explained `coverage-low-yield` warning (pre-existing; inline absorption, Step 3a reviewed).
- `tools/manifest-integrity.mjs --run …` — 100/100 owed pages present, no scope drift.
- `frontier-item-gate.mjs --run … --tool depcheck|fwdcheck|extcheck` — the run-wide exits are non-zero only through other in-flight pairs; no diagnostic names any of the six items or either page (depcheck prints this page only in its prerequisite-closure inventory; fwdcheck lists the items only as inherited context; extcheck names only the cyclotomic-hecke focus items).
- `tools/pathcheck.mjs` — no diagnostic names either new page (the three pathway errors and the `draft-unplaced` warnings belong to other categories).
- `tools/step3-decisions.mjs check --run … --phase final` — item 1 closed; items 2–6 appear as owner-held escalations (5 and 6 with changed-input reason as noted); the pair's scope decision is still `sufficient` with a matching scope hash.

## Published concerns

None confirmed. All published suppliers consumed at statement level were read and matched to their uses (`def-axiom-of-choice`, `lem-pullback-of-the-thom-class-along-a-transverse-section`, `prop-first-chern-class-of-tensor-dual-and-conjugate-lines`, `thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle`, `thm-generic-smoothness-characteristic-zero`, `thm-bertini-smooth-hyperplane-section`, `lem-projective-hypersurface-dimension-drop`, `thm-ample-powers-very-ample-proper-base`, `thm-cellular-cochains-compute-cohomology-with-local-coefficients`); no mismatch, missing hypothesis or wrong-direction use was found, and no published-repair machinery is needed. Source caution carried from the scaffold: dcM v1 Lemma 2.11.1's unqualified bound is false and is not imported; only the final version's route is used.

## Handoff and open obligations

- Completed IDs: item 1 `accept`; items 2–6 authored, format/contract/content clean, decisions recorded as `escalate` pending their unfinished in-run suppliers with the exact supplier IDs and consuming steps named above.
- Added suppliers: none created by this dispatch (the example item is an original scaffold ID, in the immutable pre-author baseline).
- Open obligations: (1) owner resolution of the five escalations once `thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes`, `lem-analytic-constructible-sheaves-admit-coherent-six-operations`, `lem-artin-affine-vanishing-for-constructible-perverse-sheaves`, `lem-noncharacteristic-complex-stratified-pullback-is-perverse-exact`, `thm-smooth-projective-gauss-manin-local-systems-are-semisimple`, `thm-mixed-hodge-weights-control-proper-cohomological-restriction-images`, `thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree` and `thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars` close, with the recorded uses reconciled (items 5 and 6 re-bind after the Remark edit); (2) Step-4 splice reconciliation of the deps supersets, the item 3 title and the example dep replacement (Step 3a F4) plus the redundant top-Chern declaration; (3) Step-4/5 editorial trimming of the research-lane register in item 3's embedded construction texts; (4) the unrelated `validate-plan` error and the other pairs' gate findings listed above are left to their owners.
- Mathematical acceptance: this report claims no independent audit — thorough independent mathematical review follows in Steps 5–7.
