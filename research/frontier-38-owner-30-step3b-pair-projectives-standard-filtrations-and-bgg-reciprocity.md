# Step 3b scaffold audit and item authoring — `projectives-standard-filtrations-and-bgg-reciprocity`

- Run `frontier-38-owner-30`, role `alpha-high`, label
  `step3b-pair-projectives-standard-filtrations-and-bgg-reciprocity-0ad5d58b23b305b2`;
  batch 7, A order 510.009 / B order 510.010, category `lie-theory`.
- Output report path: `research/frontier-38-owner-30-step3b-pair-projectives-standard-filtrations-and-bgg-reciprocity.md`.
- Inputs read: `CLAUDE.md`, `SCHEMA.md`, `research/plan-representation-theory-lie-track.md`
  RL-5 (L958–995), `research/plan-spec.json` (510.009/.010), the batch-7
  pages/coverage/notes/cross-batch inputs, the owner authoring direction (BGG
  clause), the Step 3a pair report and its receipt, the Step 1 drift note,
  and the published suppliers of the pair. Source passages were read from the
  fetched full texts (Etingof 18.757; Lin Chen Lectures 8–9; Gaitsgory
  §4.23), not from summaries.
- Owned pair only; no sibling pair, `.autopilot` state, published item, shared
  plan or judge/audit stamp was edited.

## Result

- All **36 assigned items authored** (29 A, 7 B) and both page files written:
  `library/lie-theory/projectives-standard-filtrations-and-bgg-reciprocity.md`
  and `…-examples.md` (`status: draft`, manifest item order, A page `requires`
  the five planned pages, B page `requires` the A page).
- **Every batch gate is clean**: precheck (36 paths, 32 proof-bearing, 0
  failing), rendercheck (36/36), strict proof-contract (36/36 entries, 230
  exact citation quotes, 134 step derivations), boundary worksheet (288 rows,
  no template or contradicted dispositions), citation-fidelity (all quotes
  found), item-dependency-levels and manifest-deps (0 errors),
  content-policy (0 errors), validate-plan (exit 0), coverage-checklist
  (73/73), audit-manifest (0 defects), depsource/extcheck/fwdcheck clean for
  these items, depcheck focused on the 36 items with no finding.
- **All 36 Step 3b item decisions recorded** with confidence 1, examined
  dependency IDs and concrete evidence — `accept` for the 26 items authored
  as scaffolded, `repaired` for the 10 items whose statement, proof route or
  leaf dependencies were repaired (the four statement/route repairs of the
  list below, the maximal-label lemma replacement, the four leaf-dependency
  rewrites and the `thm-projectives-in-category-o-have-verma-flags` remark
  relocation);
  `step3-decisions.mjs check --phase final` lists no open work for this pair,
  and `check --phase scope` confirms the Step 3a `sufficient` receipt still
  matches the current scope hash of the pair.
- **No unfinished or escalated supplier remains**: all 36 items depend only on
  published items or on earlier authored items of this same pair. No
  consumer was authored against an unfinished supplier, so no decision is
  escalated.

## Scaffold audit and repairs (with evidence)

The pre-author scaffold inventory is exactly the 36 manifest IDs; none had an
item file at entry. Each item was audited, repaired where the scaffold was
unsound, and authored in dependency order. Substantive repairs:

1. `lem-dominant-norm-distance-comparison` — **statement repaired**. The
   scaffold's equality clause (“$w\eta\in W_\xi\eta$” with undefined
   $W_\xi$, and “if $\eta$ is dominant regular, equality forces
   $w\eta=\eta$”) is false: $\xi=0$ with $\eta$ regular dominant gives
   equality for every $w$ while $w\eta\ne\eta$. The authored statement defines
   $W_\xi$ as the stabilizer and states equality exactly when
   $w\eta\in W_\xi\eta$ (the form the consuming exclusion lemma needs), with
   the regular-$\xi$ corollary. Proof: chamber descent with the strictly
   decreasing count $d(x)=\#\{\beta\in\Phi^+:\langle x\eta,\beta^\vee\rangle<0\}$.
2. `lem-dominant-weights-are-maxima-of-their-weyl-orbits` — **statement
   repaired**. The scaffold allowed a nonnegative real pairing and concluded
   $\zeta-w\zeta\in Q^+$ for all $w$; false for non-integral dominant $\zeta$
   ($\mathfrak{sl}_3$, $\zeta=\omega_1+\tfrac12\omega_2$,
   $\zeta-s_2\zeta=\tfrac12\alpha_2\notin Q^+$). The authored statement
   requires $\zeta$ dominant **integral**, with the dot-shifted consequence
   for $\lambda+\rho$ dominant integral. Proof: reduced-word telescoping.
3. `lem-standard-costandard-hom-and-ext-vanishing` — **proof-route
   correction** (statement unchanged): the scaffold's case split
   (“$\mu\ge\nu$ dualize”) is replaced by $\nu-\mu\notin Q^+\setminus\{0\}$
   versus $\mu<\nu$; the weight argument handles $\mu=\nu$, and $\mu<\nu$
   dualises to the first case.
4. `thm-translation-to-and-from-a-wall-on-standard-modules` — **proof-route
   correction** (statement unchanged): the reverse functor uses
   $E^*=L(\nu)^*=L(-w_0\nu)\ne L(\nu)$, and the two wall labels
   $\{w\mathbin\cdot\lambda,w s\mathbin\cdot\lambda\}$ come from the equality
   case of the norm comparison. The scaffold's claim of non-splitting for the
   reverse flag was dropped (it needs the simple-translation statement, not
   part of the design; the sl2 example obtains $P(-2)$ and non-splitting
   independently from projectivity plus flag multiplicities).
5. `lem-maximal-label-vectors-in-a-finite-truncation-are-singular` — replaced
   the scaffold's false auxiliary claim (“every weight of an object of
   $\mathcal O_\Gamma$ lies below a maximal label”; false for incomparable
   maximal elements, e.g. $\mathfrak{sl}_3$, $\Gamma=W\mathbin\cdot\rho\setminus\{\rho\}$)
   with exactly what the projectivity argument needs (no weight strictly
   above a maximal label; maximal-label vectors singular; weight functor
   exact).
6. **B-page (leaf) dependency repair.** The scaffold's B-page items depended
   on other examples pages (`ex-verma-modules-for-sl-two`,
   `ex-the-regular-integral-sl2-block-of-category-o`,
   `ex-sl2-verma-embedding-chain`), which depcheck rejects as
   `b-leaf-content`. All seven such edges were removed:
   - `ex-projective-covers-in-the-regular-sl2-block` now derives the general
     rank-one Verma model, the submodule $U\cong M(-n-2)=L(-n-2)$, the
     simple quotient $L(n)$ and the non-splitting of
     $0\to L(-n-2)\to M(n)\to L(n)\to0$ **locally** from `def-verma-module`,
     `thm-poincare-birkhoff-witt`, `def-special-linear-lie-algebra-sl-two`
     and `thm-universal-property-of-verma-modules`.
   - `cex-a-verma-module-need-not-be-projective-in-the-whole-block`,
     `cex-standard-filtrations-are-not-closed-under-quotients` and
     `ex-translation-through-the-sl2-wall` reuse that computation of the
     same B page (legal intra-page dependency) and A-page suppliers
     (`cor-antidominant-verma-modules-are-simple`,
     `lem-every-nonzero-verma-submodule-contains-a-singular-vector`).
7. `thm-projectives-in-category-o-have-verma-flags` — the forward pointer to
   the label corollary was moved from the Statement section to a new
   `## Remarks` section, removing the last `cited-not-in-deps` warning for
   the batch (Remarks are not load-bearing citations).

## Dependency-level recomputation and manifest synchronisation

- The manifest deps of 24 items had drifted from the authored item files
  (published suppliers added while authoring were recorded in the item files
  but not in the manifest). The batch-7 manifest deps were synchronised to
  the item-file deps for all 36 items, and levels recomputed bottom-up within
  the batch (published deps have level 0; no cross-batch edge exists).
- **One level changed**: `cex-a-projective-verma-flag-need-not-split` is now
  level **9** (it depends on the level-8 `cex-a-verma-module-need-not-be-projective-in-the-whole-block`);
  the dispatch's level-8 label was the scaffold's stale label. All other 35
  levels are unchanged. `item-dependency-levels.mjs check --run
  frontier-38-owner-30` reports 816 items, 0 errors, and
  `manifest-deps.mjs` reports 36 items, 0 errors.
- No other batch's item depends on this batch (checked), so the level change
  has no external consumer.

## Checks actually run (2026-10-03, exact commands/results)

- `node tools/tsx-run.mjs tools/precheck.mts <all 36 item paths>`:
  `32 checked, 0 failing` (the four definition items carry no numbered-phase
  body; every proof-bearing item passes with the canonical layer numbering).
- `node tools/rendercheck.mjs <all 36>`: OK (no wikilinks in math, balanced
  delimiters, single-line display math, KaTeX/YAML parse).
- `PRESTIGE_APP_DIR=/tmp/b7/app node tools/proof-layout.mjs <all 36>`:
  `36 items, 134 steps, 0 defects`. (Environment workaround: the default
  `tools/typescript-register.mjs` cannot compile the `.tsx` app loader, so a
  shim app dir at `/tmp/b7/app` symlinks the app sources; recorded for
  reproducibility, no content effect.)
- `node tools/proof-contract.mjs research/frontier-38-owner-30-batch-7.proof-contracts.json --strict`:
  `0 error(s), 0 warning(s), 36/36 item(s) checked`.
- `node tools/boundary-audit.mjs … --fail-on-contradicted --fail-on-template`:
  288 rows, no template cluster ≥3, no contradicted disposition.
- `node tools/citation-fidelity.mjs … --fail-on-missing-quote`: 230 citations,
  every quote found, no widening candidate.
- `node tools/finite-smoke.mjs <batch contract>`: `0 error(s), 0 check(s)`;
  no item in this pair carries a registered finite-model invariant (the
  registry has no category-O check), so no obligation was invented — see
  “Observations” below.
- `node tools/gate-liveness.mjs --run frontier-38-owner-30 --contracts <merged>
  --checklists research/frontier-38-owner-30-batch-7.coverage.json`:
  proof-contract live (36), coverage-checklist live (73), precheck live
  (18,7xx); finite-smoke reported `VACUOUS 0 checks` for the batch-scoped
  contract only.
- `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-7.coverage.json`:
  2 pages, 73 harvested results, 0 errors, 0 warnings.
- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`:
  816 items, 0 errors, maximum level 16.
- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-7.pages.json`:
  36 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs research/frontier-38-owner-30-batch-7.pages.json`
  (post-authoring mode, without `--manifest-only`): 36 scoped items,
  0 errors, 0 warnings. (`--manifest-only` is the pre-authoring “may these
  IDs be minted?” mode and by design flags every already-authored ID.)
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; 4,457
  pre-existing plan-level warnings (see Observations) and 289 pages still
  without item lists, including 510.009/.010 whose plan-spec `items` arrays
  are empty by construction — the splicer hydrates them at Step 4 from this
  manifest.
- `node tools/depcheck.mjs --items-file <36 ids>`: no finding for any of the
  36 items (the batch's former seven `b-leaf-content` errors and the
  `cited-not-in-deps` warning are gone).
- `node tools/fwdcheck.mjs`: 0 open forward references run-wide; the batch
  items appear only as `inherited` (they rest on later published material
  through their pages, no open pointer).
- `node tools/depsource.mjs`: OK, 0 unresolved. `node tools/extcheck.mjs`: OK.
- `node tools/audit-manifest.mjs research/frontier-38-owner-30-batch-7.pages.json`:
  286 relationships over 36 items, 0 defects.
- `node tools/merge-proof-contracts.mjs --level frontier-38-owner-30 …`:
  merges this batch cleanly (36 scoped items) for the engine's contract gates.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30`:
  refreshed; the batch input `research/frontier-38-owner-30-batch-7.cross-batch-dependencies.json`
  remains `[]` (verified: no item or page of this batch consumes any other
  batch's planned material).
- `node tools/step3-decisions.mjs check --run frontier-38-owner-30 --phase scope`:
  no work item for this pair (the Step 3a `sufficient` receipt matches the
  current scope hash). `… --phase final`: none of the 36 items listed; all
  decisions `accept`.

## Per-item checkpoints (final state)

Level 0 (10): `def-truncated-category-o-at-a-finite-weight-ideal`,
`lem-dominant-weights-are-maxima-of-their-weyl-orbits` (repair above),
`lem-dominant-norm-distance-comparison` (repair above),
`lem-tensoring-a-projective-with-a-finite-dimensional-module-is-projective`
(plus published `def-restricted-dual-of-a-weight-module` for the restricted
dual used in its injective clause; precheck PASS, 4 steps),
`lem-block-projection-preserves-projectives`,
`lem-finite-length-objects-decompose-into-indecomposables` (choice-free
Fitting/Krull-Schmidt proof; the only item of the batch without AC),
`def-verma-flag-and-its-multiplicities` (carries
`justified_by: [lem-verma-flag-multiplicities-are-independent-of-the-flag]`),
`lem-standard-costandard-hom-and-ext-vanishing` (route correction above),
`def-dot-action-facets-and-single-wall-translation-data`,
`lem-weight-norm-bound-for-finite-dimensional-simple-modules`.

Level 1 (7): `lem-maximal-label-vectors-in-a-finite-truncation-are-singular`
(repair above), `lem-maximal-verma-is-projective-in-a-finite-truncation` (Hom =
weight space via the universal property; maximality is the essential
hypothesis), `prop-projective-covers-in-o-are-indecomposable-and-unique`,
`lem-verma-flag-multiplicities-are-independent-of-the-flag`,
`lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags`,
`lem-maximal-weight-verma-peels-off-a-standard-filtration` (uses published
`lem-a-nonzero-verma-homomorphism-is-injective` and
`lem-every-nonzero-verma-submodule-contains-a-singular-vector`),
`lem-hom-to-costandards-counts-verma-flag-factors` (induction with declared
`[base]`/`[ih]`/`[discharge-induction: step 2.1]`), `def-translation-functor-between-o-blocks`
(identifies the functors for dot-conjugate parameters; records the Etingof
18.757 §24.1/Lin Chen L9 §3 conventions).

Level 2 (4): `lem-maximal-verma-is-projective-in-a-finite-truncation`'s
consumer `lem-direct-summands-of-verma-filtered-objects-are-verma-filtered`,
`prop-translation-functors-are-exact-and-biadjoint-across-a-wall` (biadjoint,
preserves projectives/injectives), `lem-single-wall-tensor-weight-exclusion`
(norm squeeze; all but one standard factor excluded),
`cex-standard-filtrations-are-not-closed-under-quotients` (B; negative
Grothendieck coefficient $-1$ for $\Delta(-2)$).

Level 3 (2): `lem-finite-dimensional-tensors-reach-every-block-simple`,
`thm-translation-to-and-from-a-wall-on-standard-modules` (route correction
above).

Levels 4–7 (7): `thm-category-o-has-enough-projectives`,
`lem-hom-from-projectives-counts-simple-composition-factors`,
`thm-projectives-in-category-o-have-verma-flags` (remark moved to
`## Remarks`), `thm-bgg-reciprocity` (through restricted duality),
`cor-projective-standard-labels-lie-above-the-head`,
`cor-injectives-have-costandard-filtrations`,
`ex-projective-covers-in-the-regular-sl2-block` (B; local rank-one
computation above; contains the general-$n$ computation quoted by the other
B items of the page).

Level 8 (3): `ex-bgg-reciprocity-matrix-for-sl2`,
`ex-translation-through-the-sl2-wall` (B; wall datum $(-2,-1)$,
$T_0^{-1}\Delta(0)\cong T_0^{-1}\Delta(-2)\cong\Delta(-1)$, $L(0)\mapsto0$,
$T_{-1}^0\Delta(-1)\cong P(-2)$ identified from projectivity plus flag
multiplicities $(1,1)$), `cex-a-verma-module-need-not-be-projective-in-the-whole-block`
(B; general $m\ge0$, repaired as above).

Level 9 (2): `cex-a-projective-verma-flag-need-not-split` (B; relabelled
8→9, see above), `ex-truncation-projectivity-does-not-mean-block-projectivity`
(B; canonical layer numbering adopted).

## Proof contracts

`research/frontier-38-owner-30-batch-7.proof-contracts.json` (version 1,
scope = the 36 IDs) carries: 230 citation rows, each with an exact quote
inside the cited item's Statement/Definition/Example/Statement-refuted
section and the exact list of proof steps that use the fact; 134 derivation
rows, one per numbered step, with the step's actual claim and the tokens it
cites as inputs; and 8 boundary dispositions per item (288 rows), authored
per item (choice cases checked where AC is used, `not_applicable` only with
item-specific reasons; the four items whose statements/proofs exhibit an
iff, a family aggregate or a division were given `checked` rows).

## Published concerns and repo-level observations

1. **Dead source URL (published items; carried forward, high confidence).**
   `cor-restricted-duality-preserves-linkage-blocks`,
   `def-integral-weyl-group-of-a-weight` and
   `ex-a-singular-a2-central-character-summand` cite the kolxoz/nzdr.ru
   Humphreys scan, which returns HTTP 404 (checked 2026-10-03); the AMS
   landing page is bot-walled. No statement or proof of this batch depends on
   that URL (every Humphreys locator is redundant with the fetched Etingof and
   Lin Chen texts). Repair strategy: re-point or retire the URL once a live
   redundant backing is confirmed. Owner-held.
2. **Batch-scoped `finite-smoke` is vacuous.** No item of this pair asserts a
   registered finite-model invariant (the registry covers graph/poset/GNS/
   shift/counting checks and the sl2 Killing form, none of which any
   category-O statement here asserts), so no `finite_smoke` obligation was
   invented. The run-level merged contract stays live through the batches
   that do declare such checks (e.g. batches 1 and 11).
3. **Pre-splice plan state (Step 4 note).** `plan-spec.json` still carries
   empty `items` arrays for 510.009/.010 and `validate-plan` reports the A
   page's `requires` as containing three redundant prerequisites
   (`semisimple-lie-algebras-cohomology-and-levi-theory`,
   `projective-and-injective-resolutions` via two paths) — plan-level
   warnings, present across the plan (4,457 run-wide); the pair's own
   dependency graph is acyclic and resolved.
4. **Other batches' in-flight repo-level failures (observed, not owned).**
   The whole-repo `depcheck`/`fwdcheck` runs fail on a page cycle
   `schemes-subschemes-and-morphisms-locally-of-finite-type ⇄
   fibre-products-base-change-and-scheme-theoretic-fibres`
   (scheme-theory), missing `library/scheme-theory/blowups-…` page items, and
   `b-leaf-content` edges in several other in-flight batches (e.g.
   `cex-calderon-zygmund-*`, `ex-pontryagin-dual-of-the-integers-is-the-circle`,
   `thm-compact-groups-have-discrete-duals-…`, `lem-exceptional-fiber-…`,
   `lem-normalization-defect-…`). Confirmed by the focused runs that none of
   them involves this pair; routed to the owning writers.

## Open obligations

- None for this pair: all 36 items authored and decision-closed; every
  supplier proved earlier or published; no escalation outstanding.
- Handoff notes: the proof-contract file and both page files are new
  artifacts of this run; the batch manifest was updated in place (deps
  synchronised, one level corrected to 9); the cross-batch input is empty and
  refreshed. Step 4 should hydrate the plan-spec `items` arrays from the
  manifest and may use this report's plan-level notes above.
