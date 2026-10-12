# Step 3b — pair `quiver-full-flag-projective-semisimplicity` / `…-examples`

- Run: `frontier-44-special-representation-examples-28`
- Role/label: alpha-high / `step3b-pair-quiver-full-flag-projective-semisimplicity-0e94f7f35f89ebd2`
- Batch: 49. A page `quiver-full-flag-projective-semisimplicity` (order 1834),
  B page `quiver-full-flag-projective-semisimplicity-examples` (order 1835),
  category `representation-theory`.
- Date: 2026-10-10

## Owned IDs and open obligations (entry checkpoint)

A page (2 items, to author, in this dependency order):

1. `lem-quiver-full-flag-incidence-has-a-smooth-projective-compactification` (scaffold level 0)
2. `cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero` (dispatch order level 26; manifest label 24 — recompute and synchronize)

B page (2 items, to author, after item 1 and before the corollary at the dispatch's level order):

3. `ex-one-color-quiver-full-flags-need-not-be-semismall` (level 1)
4. `ex-two-vertex-multiple-arrow-incidence-compactifications` (level 1)

Open obligations at entry:

- Author all four items and both page files; keep the sealed batch-49 manifest
  statements and IDs; preserve every promised claim (arbitrary finite loopless
  arrow multiplicities, every characteristic-zero coefficient field, no
  semismallness / finite-ADE / affine-paving hypothesis, increasing flag
  convention with rank count $q<p$); recompute and verify dependency levels
  after any dependency change (`node tools/item-dependency-levels.mjs check --run …`).
- The batch-49 manifest declares `cor-…` at `dependency_level` 24 while the
  current run-wide recomputation (dispatch order and
  `node tools/item-dependency-levels.mjs check --run …`) gives 26; synchronize
  the item and manifest labels with the verified current value before handoff.
- Flagged direct supplier for the corollary: at entry
  `items/thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology.md`
  did not exist (batch 48, page
  `projective-perverse-hard-lefschetz-and-decomposition`); it is the compact
  smooth-source projective semisimplicity theorem consumed by the corollary's
  step 2.1 of the scaffold strategy (final numbering: step 3.1). Inspect it
  provisionally, author the consumer anyway, and keep the
  corollary's decision escalated until the supplier file and the actual
  consuming step are reconciled.
- All other direct suppliers of the corollary are in-run drafts with no
  Step-3b decision at entry (batches 37, 40, 41, 42, 48); the same
  supplier-before-consumer escalation rule applies to them at decision time.
- Write `research/frontier-44-special-representation-examples-28-batch-49.proof-contracts.json`
  and run: explicit-path `precheck`, `rendercheck`, item `proof-layout` (single
  batched run at handoff), `content-policy` (batch manifest), `proof-contract
  --strict`, `item-dependency-levels check`, `validate-plan` against
  `research/plan-spec.json`, and the batch manifest/coverage/dependency-ledger
  checks the batch already carries.
- Record one `record-item` decision per item via `tools/step3-decisions.mjs`;
  the four IDs are original scaffold IDs, so each needs an ordinary current
  decision.

(Checkpoints appended as each item is audited, authored and checked.)

## Checkpoint 1 — `lem-quiver-full-flag-incidence-has-a-smooth-projective-compactification`

- Authored `items/lem-quiver-full-flag-incidence-has-a-smooth-projective-compactification.md`
  from the sealed batch-49 statement. All six declared suppliers were read at
  statement level and are published, audited and stable: `def-projective-bundle-scheme`
  (quotient convention; rank-zero case empty — the reason the trivial line is
  adjoined), `lem-grassmannian-standard-affine-charts`,
  `thm-plucker-image-closed`, `cor-projective-variety-product-exists`,
  `thm-projective-morphism-proper` (AC-qualified) and `def-axiom-of-choice`.
- Proof route kept: flag variety as closed incidence in a product of
  Grassmannians, iterated projective-space bundle for smoothness and dimension
  $\sum_i\beta_i(\beta_i-1)/2$, adapted-basis rank count
  $\sum_{h:i\to j}\#\{(p,q):\nu_p=i,\nu_q=j,q<p\}$ (loopless kills $q=p$),
  projectivity of $\pi_\nu$, and the two compactifications
  $\mathbb P_{\rm lines}(W_\nu\oplus\mathcal O)\to\mathbb P_{\rm lines}(E_V\oplus\mathbb C)$
  and its finite Grassmannian-model analogue. The target's absolute projectivity
  in the associated case is proved locally by twisting with
  $D=\bigotimes_{\beta_i>0}\det S_i$ and embedding into a trivial bundle; no
  general compactification theorem is consumed.
- Canonic step numbering adopted after the precheck's layer repair (steps
  1.1, 2.1, 3.1, 4.1, 4.2, 4.3, 5.1, 6.1). AC is used exactly through the
  relative Proj convention and the projective-implies-proper conversion.
- Checks: `precheck` PASS (direct), `proof-layout` 8 steps 0 defects,
  `rendercheck` OK (KaTeX and YAML parse). Level recomputed as 0.
- Open obligation: none beyond the batch-level checks; the dependency graph
  uses only published suppliers.

## Checkpoint 2 — `ex-one-color-quiver-full-flags-need-not-be-semismall`

- Authored the example from the sealed B-page statement: one vertex, no arrows,
  $\dim V=n\ge2$, $E_V=0$, $X_\nu=\operatorname{Flag}(V)$, defect
  $2\dim(\text{fiber})+\dim(\text{image})-\dim X_\nu=n(n-1)/2>0$, and the
  $n\in\{0,1\}$ degenerate boundary has defect zero. The defect formula is
  stated inline, matching the batch-48 pair's convention
  $r(f)=\max_{Y_i\ne\varnothing}(2i+\dim Y_i-n)$.
- Checks: `precheck` PASS (direct), `proof-layout` 2 steps 0 defects,
  `rendercheck` OK. Level recomputed as 1.

## Checkpoint 3 — `ex-two-vertex-multiple-arrow-incidence-compactifications`

- Authored the example: $h\ge0$ arrows $i\to j$, $\beta_i=\beta_j=1$,
  $E_V=\mathbb C^h$; the word $(i,j)$ has rank $0$ and stable incidence the
  point $x=0$, the word $(j,i)$ has rank $h$ and stable incidence all of
  $\mathbb C^h$; compactifications are $[0:1]\subset\mathbb P^h$ and
  $\mathrm{id}_{\mathbb P^h}$, with $h=0$ giving two point maps. Rank counts
  go through the authored lemma's explicit formula, and the $t\ne0$ chart
  identification is the lemma's.
- Checks: `precheck` PASS (direct), `proof-layout` 2 steps 0 defects,
  `rendercheck` OK. Level recomputed as 1.

## Checkpoint 4 entry — `cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero`

- Next: read the remaining corollary suppliers (batch 40/41 ordinary and
  equivariant perverse items; the Stiefel resolution and normalization items;
  the six-functor theorem; the batch-48 compact projective semisimplicity
  theorem; the batch-42 fundamental-group lemma), audit the scaffold strategy
  step by step, then author. The corollary's decision will be escalated if any
  supplier is still unfinished or its actual use unreconciled, per the
  dispatch.

## Checkpoint 4 — `cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero`

- Authored the corollary from the sealed batch-49 statement. All fourteen
  dependencies ([F1]-[F13] and [A1]) were read at statement level and their
  used clauses verified: the incidence compactifications [F1], the finite cochain models
  [F2], the equivariant category [F3], the six operations including the
  unconditional Cartesian exchange $u^*Rf_!\simeq Rf'_!v^*$ and proper
  equality $Rf_!=Rf_*$ [F4], the Stiefel resolution $Q_N$ with the
  $m\le b+r_N-a$ Hom comparison and the trivial-group clause [F5], the
  Cartesian model with idempotent completeness and the resolution-triple
  identity $\operatorname{pr}_X^*A\cong q_N^*Q_N(A)$ [F6], the perverse
  normalization [F7], the ordinary [F8] and equivariant [F9] perverse cores,
  the compact smooth-source theorem [F10], the dense-open fundamental-group
  lemma [F11], projective-implies-proper [F12] and the fibre-stalk formula for
  the proper-support functor [F13].
- **Step-3a interface obligations discharged inline** (Step-3a report §3):
  (a) the identification $Q_N(L_\nu)\cong R\pi_{\nu,N!}k[d_\nu]$ is derived in
  step 2.1 from the resolution-triple characterizing identity
  $\operatorname{pr}_{E_V}^*A\cong q_N^*Q_N(A)$ together with the
  unconditional Cartesian exchange, and the shift is fixed as
  $s_N=\dim_{\mathbb C}B_N$; no scaffold clause on pushforward compatibility
  had to be added.
  (b) the frame model $X_N=(U_N\times E_V)/G_V$ and the Grassmannian model
  $E_N$ (and likewise $X_{\nu,N}$) are matched through the frame bundle in
  step 2.1, including the Cartesianness of the free-quotient square.
  (c) the restriction formula $j^*\operatorname{IC}_Z(L)
  =\operatorname{IC}_{Z\cap E_N}(L|_{Z^{sm}\cap E_N})$ is proved inline in
  step 3.1 from the intermediate-extension description plus the elementary
  open-immersion exchange, not cited.
  (d) the compact theorem is applied to $\bar\pi_{\nu,N}$ on the lemma's
  smooth projective source and target in step 3.1 before restricting back to
  the affine chart.
- **Two dependency-adequacy additions beyond the sealed manifest deps**, both
  load-bearing and recorded in the owned cross-batch input:
  1. `thm-projective-morphism-proper` (published; page
     `finite-proper-and-projective-morphisms`, inside the A page's declared
     requires closure): makes the projective compactification $\bar\pi_{\nu,N}$
     proper, giving $R\bar\pi_!=R\bar\pi_*$ and hence the identification of
     the model pushforward with the restriction of the compactified
     pushforward at step 3.1.
  2. `thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint`
     (in-run batch 40, page `analytic-derived-six-operations-and-duality`,
     inside the A page's requires closure through
     `equivariant-constructible-perverse-foundations`): supplies the fibre
     formula $(Rf_!A)_y\simeq R\Gamma_c(X_y;A|_{X_y})$ used with bound
     $d=2f$ at step 1.1 to convert the fibre cohomology bound into the
     ordinary amplitude of $L_\nu$.
- Manifest synchronized: the corollary's `deps` gained the two items above and
  `dependency_level` was corrected from 24 to the computed 26 (matching the
  dispatch order and the repository check). Steps are layered canonically
  (1.1, 2.1, 3.1, 4.1, 5.1, 6.1).
- Boundary dispositions (contract): the empty dimension vector is settled in
  step 1.1; zero arrows/ranks, $\beta_i\in\{0,1\}$, the trivial-group clause
  and the endpoint $m=0$ of the Hom comparison are all covered; no
  semismallness, finite-ADE or paving hypothesis is used anywhere.

## Supplier decision status at handoff (for the owner's reconciliation)

Step-3b decisions were recorded for all four owned items. The lemma and both
examples were recorded `accept` (defects `[]`); the corollary was recorded
`escalate` with defect `dependency`. Its direct in-run suppliers at handoff:

| supplier | decision | consuming step |
| --- | --- | --- |
| `def-equivariant-constructible-derived-category-for-complex-algebraic-varieties` | accept | statement, steps 1.1, 4.1 |
| `lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom` | repaired | steps 1.1, 4.1 |
| `lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom` | repaired | steps 2.1, 4.1 |
| `lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative` | repaired | steps 4.1, 5.1 |
| `thm-constructible-six-functors-proper-base-change-and-verdier-duality` | repaired | steps 2.1, 3.1 |
| `thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes` | repaired | statement, step 5.1 |
| `lem-algebraic-open-inclusion-surjects-on-fundamental-groups` | repaired | step 3.1 |
| `thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology` | escalate (`dependency`) | step 1.1 |
| `thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint` | escalate (`dependency`) | step 1.1 |
| `thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes` | escalate (`dependency`) | step 3.1 |
| `thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology` | no decision yet | step 3.1 |

The statement paragraphs of the repaired suppliers were re-read after their
last recorded edits and still contain exactly the clauses used; the escalated
suppliers' unresolved obligations are their own upstream dependencies (a
missing batch-36 incidence-model item; a missing fibre-dimension item; the
finite-conical-stratification item), not defects in the clauses my steps
consume. Until those and the batch-48 theorem are decided and their actual
uses are re-checked against the frozen text, the corollary's escalation
stands, per the dispatch. The only published supplier added by the authoring
pass, `thm-projective-morphism-proper`, is published, audited and unchanged.

## Checks run (exact results)

- `node tools/author-check.mts frontier-44-special-representation-examples-28 49`
  → `research/…-author-check-49.json` with `ok: true`: `precheck` (4 items)
  true, `rendercheck` (4 items + 2 pages) true, `content-policy-items` true,
  `proof-contract --strict` true.
- `node tools/proof-layout.mjs items/lem-… items/ex-one-color-… items/ex-two-vertex-… items/cor-…`
  → `4 items, 18 steps, 0 defects` (single batched run after the final edits).
- `node tools/tsx-run.mjs tools/precheck.mts <4 explicit item paths>` → all
  PASS (direct), 0 failing.
- `node tools/rendercheck.mjs <4 items + 2 pages>` → OK (YAML, KaTeX, no
  wikilinks in math, no unbalanced or multiline display delimiters).
- `node tools/content-policy.mjs research/…-batch-49.pages.json` → 4 scoped
  items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/…-batch-49.proof-contracts.json --strict`
  → 4/4 items checked, 0 errors, 0 warnings (contract authored in this pass:
  citations regenerated from the current supplier statements, derivations for
  all 18 steps, full boundary worksheet for every item).
- `node tools/item-dependency-levels.mjs check --run …` → the four owned items
  now match the computed levels 0, 1, 1, 26; the run-wide remaining errors all
  name other batches' items (in flux from concurrent writers).
- `node tools/depcheck.mjs --items-file <4 ids>` → 0 errors, 0 warnings
  (4746-item dependency closure, 450 pages); `fwdcheck --items-file` → 0
  errors; `extcheck --items-file` → 0 errors. Repo-wide `extcheck` exit 0;
  repo-wide `fwdcheck`/`depcheck` diagnostics name only unrelated in-flight
  items.
- `node tools/validate-plan.mjs research/plan-spec.json --run …` → the pair
  appears as orders 1834/1835 with 2 items each; the only diagnostics naming
  it are its pre-existing `redundant-prereq` advisories. Whole-run exit 1 is
  caused by other pages' `undeclared-prereq` runs, none of them this pair.
- `node tools/manifest-deps.mjs research/…-batch-49.pages.json` → 4 items, 0
  errors. `node tools/coverage-checklist.mjs research/…-batch-49.coverage.json
  --require-destination` → 0 errors, 1 pre-existing `coverage-low-yield`
  warning (explained in the batch notes; all declines are deliberate).

## Findings for the owner / Step 4 (no shared files edited beyond the owned batch)

1. **Plan splice reconciliation (Step 4).** The plan-spec's stored corollary
   deps remain the twelve original entries; the current manifest and item add
   `thm-projective-morphism-proper` and
   `thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint`
   (both genuine clause uses; the second is an in-run batch-40 supplier). The
   manifest `dependency_level` for the corollary is now 26 (was 24; the
   dispatch order already listed 26). No claim was weakened, no pair added.
2. **Authoring-pass dependency completion report.** The two additions above
   are the complete delta of this pass; the previous Step-3a/Step-1 additions
   (lemma: `thm-plucker-image-closed`, `cor-projective-variety-product-exists`;
   corollary: `def-equivariant-constructible-derived-category-…`,
   `thm-ordinary-middle-perverse-…`) were rechecked and remain necessary.
3. **Unreconciled suppliers.** See the table above; the corollary's escalation
   is the only open owned decision and is caused by suppliers that are
   themselves escalated or undecided, exactly the dispatch's unfinished-supplier
   case. No consumer-side defect in the authored argument was found.
4. **Published concerns.** None: every published supplier read
   (`def-axiom-of-choice`, `def-projective-bundle-scheme`,
   `lem-grassmannian-standard-affine-charts`, `thm-plucker-image-closed`,
   `cor-projective-variety-product-exists`, `thm-projective-morphism-proper`)
   supports the exact clause used, with its audited status intact.
5. **Consumer-side expectations owed by siblings.** Batch 10
   `klr-algebras-induction-and-quantum-serre-categorification` consumes this
   A page; its ledger row and its owner-held global-basis item remain owned by
   batch 10's writer (unchanged by this pass).

## Handoff summary

- **Completed IDs.** `lem-quiver-full-flag-incidence-has-a-smooth-projective-compactification`
  (accept, level 0), `ex-one-color-quiver-full-flags-need-not-be-semismall`
  (accept, level 1), `ex-two-vertex-multiple-arrow-incidence-compactifications`
  (accept, level 1),
  `cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero`
  (authored; decision escalated `dependency`, level 26). Both pages
  (`quiver-full-flag-projective-semisimplicity`,
  `quiver-full-flag-projective-semisimplicity-examples`) and the batch-49
  proof contracts are on disk; manifest deps/level synchronized.
- **Prerequisite pairs inspected** (dispatch list):
  `complex-algebraic-stratified-topology`,
  `equivariant-constructible-perverse-foundations` and
  `projective-perverse-hard-lefschetz-and-decomposition` were read at the
  statement level through the exact supplier items consumed here, plus the
  `analytic-derived-six-operations-and-duality` item added by this pass. All
  cited clauses were verified against the current files, including the
  re-reads taken after their authors' last recorded edits.
- **Checks actually run.** author-check 49 (`ok: true` for precheck,
  rendercheck, content-policy, proof-contract --strict); batched explicit-path
  `proof-layout` (4 items, 18 steps, 0 defects); explicit-path `precheck` and
  `rendercheck` for the four items and two pages; focused
  `depcheck`/`fwdcheck`/`extcheck` on the four IDs (0 errors); run-wide
  `item-dependency-levels` (owned items match 0/1/1/26), `validate-plan`
  (only pre-existing advisories for this pair), `manifest-deps`,
  `coverage-checklist`; `frontier-dependency-ledger refresh` (batch 49 in
  `reviewed_batches`).
- **Added suppliers.** `thm-projective-morphism-proper` (published) and
  `thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint`
  (in-run batch 40) for the corollary, both recorded in the owned cross-batch
  input and flagged for Step-4 splice.
- **Published concerns.** None.
- **Open obligations.** The corollary's escalation: supplier decisions and the
  exact consuming steps are tabulated above; the owner resolves once the
  batch-37/40/48 writers' items are decided and their actual uses re-checked.
  No other owned item is open. I did not edit sibling or published content,
  the shared plan, the unified ledger or any engine state.
