# Step 3b authoring report — pair `em-wave-equation-prerequisites`

- Run: `physics-em-sr-40-2026-10-08`
- Role: alpha-high, Step 3b scaffold audit + authoring
- A page: `em-wave-equation-prerequisites` (order 311, batch 17, category
  `classical-electromagnetism-mathematics`, library `mathematics`)
- B page: `em-wave-equation-prerequisites-examples` (order 312, batch 17)
- Owned IDs (authoring order, ascending dependency level):
  1. `lem-em-spherical-mean-family-smoothness` (A, level 1) — **authored; decision `repaired` (re-recorded 2026-10-09 on the refreshed input hash; the Step-3 final check closes it)**
  2. `thm-em-wave-cauchy-kirchhoff` (A, level 2) — **authored; decision `escalate`** (missing in-run supplier)
  3. `ex-em-wave-equation-prerequisites-source-and-support-boundaries` (B, level 3) — **authored; decision `escalate`** (same supplier)
- Direct in-run prerequisite pair inspected: `em-expanded-analysis-prerequisites`
  (order 310, batch 16) — supplier `lem-em-spherical-mean-wave-identity`
  (level 1, **still unauthored**) and, through the A page, `lem-em-parameter-integrals`
  (batch 13, page `em-elementary-mathematical-prerequisites`, order 305, authored).

## Status log (chronological; checkpoints)

### Entry — 2026-10-09 (first pass, interrupted by a WSL crash)

Read for entry: `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`,
`../PHYSICS-CONTENT-MODEL.md`, `../CLAUDE.md`, owner authoring direction
`research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`, Step 3a
report/review for this pair, batch-17 manifest/coverage/notes/cross-batch file,
the plan entries 305/310/311/312 and the design reservation
`research/plan-classical-electromagnetism-track.md` L516–L562 with
`…/scaffold/completed-expansion-arguments.md#W1–W3`.

Open obligations at entry:

1. Author the three owned items and the two library pages; create
   `research/physics-em-sr-40-2026-10-08-batch-17.proof-contracts.json`.
2. Reconcile the two unfinished in-run suppliers `lem-em-parameter-integrals`
   (batch 13) and `lem-em-spherical-mean-wave-identity` (batch 16) with the
   actual proof uses; leave the item decision escalated if either is still
   unauthored at decision time (their authors are running concurrently).
3. Report the scaffold-audit findings and any dependency corrections to the item
   objects (they invalidate the Step-1 readiness hashes for the changed items
   and must be flagged).
4. Run the Step-3b check battery on the changed paths and record item decisions.

### Continuation after the WSL interruption — 2026-10-09 18:2x–18:4x

The working tree already contained the three item carriers (written 17:58–18:06
by the interrupted first pass) and the entry section above, but no page
carriers, no proof contracts, no decisions and no consolidated checks. Resumed
by re-reading the three carriers, the batch-17 manifest and coverage, the
cross-batch input, the Step 3a report, the batch notes, the published suppliers
and the two in-run suppliers, then repairing local gaps, authoring the pages and
contracts, re-running the full battery, and recording decisions.

### Third pass — verification and reconciliation — 2026-10-09 18:46–18:57 (resumed from the checkpoint)

Resumed from this checkpoint and re-audited the current bytes rather than the
summary: re-read all three carriers, both pages, the batch-17 manifest and
coverage, the proof contracts, the cross-batch inputs and the in-run suppliers;
re-derived the theorem's key computations (the step 2.2 telescoping with the
Euler–Poisson–Darboux substitution, step 2.3's reflection argument for
$\theta<0$, steps 4.1/4.2 with the translated-time application of the published
local uniqueness theorem, and clause (d)); and re-verified that each scoped
manifest statement matches its carrier verbatim. Two actions resulted:

1. **Micro-repair in `thm-em-wave-cauchy-kirchhoff` step 5.1.** The two
   estimation chains used a strict `>` where only `>=` is available in the
   boundary cases (a point of the closed base ball with $|y-x|=c(t-t_0)$, and a
   cone point with $v=t_0$). They were corrected to
   $|y|\ge|x|-|y-x|\ge|x|-c(t-t_0)>\rho$ and
   $|y|\ge|x|-|y-x|\ge|x|-c(t-v)\ge|x|-c(t-t_0)>\rho$; the final strict
   inequality, the conclusion $|y|>\rho$ and clause (d) are unchanged. No
   Statement clause, hypothesis, fact, tag or contract row changed, and the
   batch-17 proof contracts quote no text from this step.
2. **Stale-hash reconciliation.** The batch-13 manifest row for the in-run
   supplier `lem-em-parameter-integrals` was updated (file mtime
   2026-10-09T07:39:43Z, after this pair's earlier decision records) to record
   that supplier's current deps and
   `dependency_level`; its carrier Statement is unchanged (re-read this pass)
   and the lemma's step 3.1 use still matches it. The lemma's previously
   recorded `repaired` decision was consequently hash-stale (the final check
   reported "current item audit required"), so the decision was re-recorded
   with the refreshed input hash `ddbd4417…`, confidence 1, the same 17
   examined dependencies and evidence updated for the refresh. The Step-3
   final check now closes the lemma. The theorem and the example remain
   owner-held escalations (a non-owner cannot overwrite an escalated
   decision); their "changed inputs" note is caused by the same manifest
   update plus the step-5.1 proof repair, not by any Statement change. The
   missing supplier `lem-em-spherical-mean-wave-identity` is still
   unauthored, so the escalations stand with the same exact consumer IDs and
   consuming steps, and the cross-batch rows and provisional contract
   citations are unchanged.

## Per-item checkpoints

### Item 1 — `lem-em-spherical-mean-family-smoothness` (level 1) — repaired

- Exact claim/conventions (matches the scoped manifest statement verbatim):
  $\mathrm{AC}_\omega$ declared; $h\in C^\infty(\mathbb R^3\times[t_0,T])$ in the
  extension sense (restriction of a $C^\infty$ function on $\mathbb R^3\times J$,
  $J\supset[t_0,T]$); $d\Omega$ the surface measure on $S^2$ of total mass
  $4\pi$; $M(x,s,v)=(4\pi)^{-1}\int_{S^2}h(x+sn,v)\,d\Omega(n)$; then $M$ is
  $C^\infty$ on $\mathbb R^3\times\mathbb R\times[t_0,T]$ in the same extension
  sense with every differentiated-integral formula, and
  $\tilde H(x,t,v)=(t-v)M(x,c(t-v),v)$ is $C^\infty$ near the closed triangle
  $t_0\le v\le t\le T$, for fixed $x$ as well. No decay, boundedness or compact
  support is assumed; only uniform bounds on compact parameter sets.
- Suppliers read and matched: `lem-em-parameter-integrals` (authored carrier,
  18:00) — one-parameter set/surface statement whose hypotheses (fixed compact
  measurable set of finite measure; $f$ continuous with continuous parameter
  derivative on a neighbourhood) are instantiated in step 3.1 with the parameter
  renamed to a coordinate direction, exactly the pattern the carrier's statement
  permits and no moving set; the published imports at their exact
  Statement/Definition sections ([F1]–[F10], [A1]).
- Local repair: fact [F3] now also carries the `thm-algebra-of-derivatives`
  citation, grounding the scalar-multiple rule invoked in step 3.1 (the item
  already declared that dependency).
- Checks for this item: precheck PASS; proof-layout 0 defects; rendercheck OK;
  prosecheck 0 errors; content-policy 0 errors; proof-contract `--strict` 0
  errors; focused depcheck clean (every dep resolves); computed level 1 equals
  the declared label.
- Decision: `repaired`, confidence 1, dependencies = its 17 declared deps
  (recorded in `research/physics-em-sr-40-2026-10-08-step3b-review-lem-em-spherical-mean-family-smoothness.json`).

### Item 2 — `thm-em-wave-cauchy-kirchhoff` (level 2) — escalated

- Exact claim/conventions (matches the scoped manifest statement verbatim):
  $c>0$, $t_0<T$, $a,b\in C^\infty(\mathbb R^3)$, $h$ smooth in the extension
  sense, $W=c^{-2}\partial_t^2-\Delta$ so $c^2W=\Box_c$, $H_\varphi(x,s)=sM_{cs}\varphi(x)$,
  $u=\partial_sH_a+H_b+c^2\int_{t_0}^tH_{h(\cdot,v)}(\cdot,t-v)\,dv$;
  clauses (a) $C^\infty$ solution attaining the data and solving $Wu=h$,
  (b) uniqueness among $C^2$ extension-sense solutions, (c) domain of
  dependence on the closed backward cone, (d) compact-support propagation with
  the explicit bound $|x|>\rho+c(t-t_0)$. No finite-domain boundary condition,
  no finite-energy hypothesis, no spatial decay.
- Local repairs (continuation pass):
  1. Step 3.1: corrected the reflected-datum evaluation to
     $c^2\hat m(x,0,t_0+\mu)=c^2h(x,t_0-\mu)$ (the earlier form had
     $t_0-\mu$ inside $\hat m$, which equals $h(x,t_0+\mu)$ under
     $\hat m(x,s,v)=m(x,s,2t_0-v)$; the displayed conclusion $c^2h(x,t_0-\mu)$
     was and remains correct).
  2. Steps 4.1 and 4.2: stated explicitly that the equation for
     $w=u-\tilde v$ (respectively $w=u-\tilde u$) holds on the whole
     neighbourhood because it holds on each open half-slab and both sides are
     continuous at $t=t_0$; the earlier text asserted it only "there".
  3. Final step 6.1: moved $\qed$ after the tag group to the schema form
     `[tags] ∎`.
  4. Dep correction: `def-surface-integral-on-a-compact-c-one-hypersurface` is
     cited by fact [F5] but was absent from `deps`; added to the item
     frontmatter, its `dependency_roles` (`mathematical-premise`) and the
     batch-17 manifest row. This invalidates the Step-1 readiness hash for this
     item (flagged here; the focused depcheck `cited-not-in-deps` warning is
     cleared). The scoped Statement is unchanged, so the Step-3a scope hash is
     unaffected.
- Supplier reconciliation: 22 of 23 deps verified (all published imports read
  at their statements and matched to the uses; `lem-em-parameter-integrals`
  authored and matched; `lem-em-spherical-mean-family-smoothness` authored in
  this batch). The remaining dep `lem-em-spherical-mean-wave-identity` (batch
  16, page `em-expanded-analysis-prerequisites`) has **no carrier on disk**.
  Exact use: fact [F4]; steps 1.2 (data at $s=0$, evenness, Euler–Poisson–Darboux
  identity on both signs), 2.1 ($\partial_t^2H_\varphi=c^2\Delta H_\varphi$),
  and through step 1.2 steps 2.2 and 3.1 (the source-term identity
  $\partial_t^2u_s=c^2h+c^2\Delta u_s$).
- Checks for this item: precheck PASS; proof-layout 0 defects; rendercheck OK;
  prosecheck 0 errors; content-policy 0 errors; proof-contract `--strict`
  reports exactly the deliberate `citation-source-missing [F4]`; focused
  depcheck reports `dep-unresolved` plus the two `link-unresolved` for the same
  missing carrier, and nothing else; computed level 2 equals the declared label.
- Decision: `escalate` (supplier ID, consumer ID and consuming steps recorded),
  pending the authored carrier.

### Item 3 — `ex-em-wave-equation-prerequisites-source-and-support-boundaries` (level 3) — escalated

- Exact claim (matches the scoped manifest statement verbatim): three
  computations on the theorem's formula — (i) constant source $h\equiv1$ gives
  $u=c^2t^2/2$, nonzero spatial constant on every $t>0$, so clause (d)'s fixed
  compact support hypothesis cannot be dropped; (ii) a source supported in
  $\overline B_1(0)$ gives $u(x,t)=0$ for $|x|>1+ct$; (iii) $b(x)=x_1$ gives
  $u=(t-t_0)x_1$, unbounded on every slice and of total energy $+\infty$ in the
  sense of `def-wave-energy-and-energy-flux`, outside the finite-initial-energy
  hypothesis of `cor-energy-uniqueness-for-the-wave-cauchy-problem` while
  clause (b) of the theorem still applies. Provenance `ai-generated` with
  `generation.role: example`.
- Local repairs (continuation pass):
  1. Step 1.1: added `[A1]` to the tag group so the declared $\mathrm{AC}_\omega$
     assumption is cited by a step (the [A1] fact was otherwise uncited; the
     proof-contract gate requires each fact to be cited somewhere).
  2. Step 3.1: rewrote the sentence about the published Duhamel principle so it
     no longer asserts a necessity proof of that item's per-slice compact
     support hypothesis; it now states that the hypothesis is what [F7]'s own
     statement uses to place slices in the admissible velocity-data class, and
     that the constant-source witness is outside it, while the theorem of this
     pair applies to the witness and produces the non-compactly-supported
     solution. The scoped Statement text is untouched.
- Supplier reconciliation: 15 of 16 deps verified; `thm-em-wave-cauchy-kirchhoff`
  (same batch) authored and specialised clause by clause. The remaining dep
  `lem-em-spherical-mean-wave-identity` is the same missing carrier; exact use:
  fact [F2], steps 1.1 ($M_{cs}1=1$), 2.1 ($M_rh_0$ vanishes on spheres missing
  $\operatorname{supp}h_0$) and 2.2 ($H_b(x,s)=sM_{cs}b(x)$, $M_{cs}x_1=x_1$).
- Checks for this item: precheck PASS; proof-layout 0 defects; rendercheck OK
  (item and both pages); prosecheck 0 errors; content-policy 0 errors;
  proof-contract `--strict` reports exactly the deliberate
  `citation-source-missing [F2]`; focused depcheck reports the matching
  unresolved entries only; computed level 3 equals the declared label.
- Decision: `escalate`, pending the same authored carrier.

## Pages authored (registered in `library/classical-electromagnetism-mathematics/`)

- `em-wave-equation-prerequisites.md`: title `Em Wave Equation Prerequisites`
  (identical to the plan-spec/manifest title), `status: draft`,
  `items: [lem-em-spherical-mean-family-smoothness, thm-em-wave-cauchy-kirchhoff]`,
  `examples: []`; summary fixes the $W=c^{-2}\partial_t^2-\Delta$ convention,
  states both items' content and the no-decay/no-boundary/no-finite-energy
  scope, records the $\mathrm{AC}_\omega$ carry and points to the companion page.
- `em-wave-equation-prerequisites-examples.md`: title `Em Wave Equation
  Prerequisites — Examples`, `status: draft`, `items: []`,
  `examples: [ex-em-wave-equation-prerequisites-source-and-support-boundaries]`;
  summary records the three checks and their qualified conclusions.

## Proof contracts, manifests, coverage, cross-batch inputs

- Created `research/physics-em-sr-40-2026-10-08-batch-17.proof-contracts.json`
  (version 1, batch 17, scope = the three owned IDs) with per-fact citation
  contracts (exact quotes verified against each source's Statement/Definition),
  per-step derivations with the actual inputs, and all eight boundary
  dispositions per item (empty, zero, one, degenerate, endpoints,
  nonempty-choice, iff-forward, iff-reverse). The two citations to
  `lem-em-spherical-mean-wave-identity` are marked `provisional` and quote the
  current batch-16 scaffold statement; they must be regenerated when the carrier
  is authored.
- Batch-17 manifest: the theorem's `deps`/`dependency_roles` gained
  `def-surface-integral-on-a-compact-c-one-hypersurface` (single, preserved-format
  edit); no other manifest field, statement, title, order or item inventory was
  changed; sibling rows were not touched.
- `research/…-batch-17.cross-batch-dependencies.json`: `lem-em-parameter-integrals`
  rows updated to `verified` with the exact carrier claim and per-step uses; the
  `lem-em-spherical-mean-wave-identity` rows remain `open` with the exact
  consumer IDs and consuming steps; the page row preserved its Step-1 evidence
  and gains the continuation-pass status sentence.
- Coverage: unchanged (A-page source coverage with two full-text treatments and
  the disposition table; authored work adds no new source claims).

## Checks actually run (2026-10-09, continuation pass; exact commands and results)

- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts <three item paths>` — **PASS** (3 checked, 0 failing; strategy `direct`).
- `node tools/physics-support/proof-layout.mjs <three item paths>` — **0 defects** (3 items, 22 steps).
- `node tools/physics-support/rendercheck.mjs <three items + two pages>` — **OK** (5 files; YAML parses, no wikilink in math, all KaTeX spans parse).
- `node tools/physics-support/prosecheck.mjs <three items + two pages>` — **0 errors, 0 warnings**.
- `node tools/physics-support/content-policy.mjs research/…-batch-17.pages.json` — **3 scoped items, 0 errors, 0 warnings**.
- `node tools/physics-support/proof-contract.mjs research/…-batch-17.proof-contracts.json --strict` — **2 errors, both deliberate**: `citation-source-missing [thm-em-wave-cauchy-kirchhoff]: F4` and `[…source-and-support-boundaries]: F2`, each naming the unauthored `lem-em-spherical-mean-wave-identity`. All other citations, derivations and 24 boundary rows validate.
- `node tools/physics-support/depcheck.mjs --items-file <three IDs>` — **6 errors, all the single missing carrier** (two `dep-unresolved` and four `link-unresolved` across the two consumers); no other dependency, link, page or cycle error; the page depth table lists both pages with their declared prerequisites.
- `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` — **no label, shape or cycle error** (473 items, 80 pages; the three items compute 1/2/3 exactly as declared).
- `node tools/physics-support/pathcheck.mjs --pages-file <two page IDs>` — 0 pathway errors/warnings for the selected pages.
- `node tools/physics-support/manifest-integrity.mjs --run physics-em-sr-40-2026-10-08` — **80 pages owed, 80 in the manifests, no scope drift**.
- `node tools/physics-support/validate-plan.mjs research/plan-spec.json --run physics-em-sr-40-2026-10-08` — **FAIL run-wide (34 `undeclared-prereq`), none on pages 311/312**; the failure list names sibling pages still in flight (SR primitives, EM elementary/expanded/boundary/experiment/variational/material pages). Pre-splice plan mismatch to report for Step 4, not hidden debt of this pair. The Step-1 escalation for `wave-equation-representation-formulas` is resolved: the current plan carries the P entries and page 311's `requires` reaches every used supplier.
- `node tools/physics-support/frontier-item-gate.mjs --run … --tool validate-plan` — same run-wide FAIL; pages 311/312 appear only in the depth table with their `requires` and no error row.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08` — **refreshed and deduplicated**.
- `node tools/physics-support/physics-check.mjs --plan research/plan-spec.json` — run-wide FAIL (41 errors, 26986 items); exactly two concern this pair: `edge-unresolved [thm-em-wave-cauchy-kirchhoff]: deps: lem-em-spherical-mean-wave-identity` and the same for the example. The other 39 are sibling `edge-unresolved` entries not owned by this pair.

### Third-pass re-run on current bytes (2026-10-09 18:47–18:57; after the step-5.1 micro-repair)

- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts <three item paths>` — **PASS** (3 checked, 0 failing; strategy `direct`).
- `node tools/physics-support/proof-layout.mjs <three item paths>` — **0 defects** (3 items, 22 steps) — run once after the final edit, as required.
- `node tools/physics-support/rendercheck.mjs <three items + two pages>` — **OK** (5 files).
- `node tools/physics-support/prosecheck.mjs <three items + two pages>` — **0 errors, 0 warnings**.
- `node tools/physics-support/content-policy.mjs research/…-batch-17.pages.json` — **3 scoped items, 0 errors, 0 warnings**.
- `node tools/physics-support/proof-contract.mjs research/…-batch-17.proof-contracts.json --strict` — **2 errors, both the deliberate missing-supplier citations** ([F4] of the theorem, [F2] of the example); all other citations, derivations and boundary rows validate.
- `node tools/physics-support/depcheck.mjs --items-file <three IDs>` — **6 errors, all the single missing carrier** (two `dep-unresolved`, four `link-unresolved`); nothing else.
- `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` — clean; explicit recomputation gives levels 1/2/3 exactly as declared.
- `node tools/physics-support/pathcheck.mjs --pages-file <two page IDs>` — 0 errors, 0 warnings.
- `node tools/physics-support/manifest-integrity.mjs --run physics-em-sr-40-2026-10-08` — **80 pages owed, 80 in the manifests, no scope drift**.
- `node tools/physics-support/validate-plan.mjs research/plan-spec.json --run physics-em-sr-40-2026-10-08` — **FAIL run-wide (39 `undeclared-prereq`, sibling pages only)**; no error row names pages 311/312. The only rows naming our pages are sibling `redundant-prereq` notes on `em-potentials-and-gauge` (that page's own `requires` list), reported for Step 4.
- `node tools/physics-support/physics-check.mjs --plan research/plan-spec.json` — run-wide FAIL (31 errors, 27019 items); exactly two concern this pair (`edge-unresolved` for `lem-em-spherical-mean-wave-identity` from the theorem and from the example).
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08` — refreshed and deduplicated after the cross-batch third-pass note.
- `node tools/physics-support/step3-decisions.mjs check --run physics-em-sr-40-2026-10-08 --phase final` — the lemma is **closed** with the refreshed `repaired` decision; the theorem and the example remain owner-held escalations.

## Open obligations and escalations

1. **Missing in-run supplier `lem-em-spherical-mean-wave-identity` (batch 16, page `em-expanded-analysis-prerequisites`, level 1).**
   - Consumers and consuming steps: `thm-em-wave-cauchy-kirchhoff` fact [F4], steps 1.2, 2.1, 2.2/3.1; `ex-em-…-source-and-support-boundaries` fact [F2], steps 1.1, 2.1, 2.2.
   - Required claim for reconciliation (as currently scaffolded): smoothness of $r\mapsto M_rf(x)$ for $r\ge0$ with the Euler–Poisson–Darboux identity, and $H_f(x,t)=tM_{ct}f(x)$ satisfying $\partial_t^2H_f=c^2\Delta H_f$, $H_f(\cdot,0)=0$, $\partial_tH_f(\cdot,0)=f$; no decay of $f$; surface normalisation of total mass $4\pi$.
   - Remedy: when the batch-16 carrier lands, re-read its Statement against the steps above, regenerate the two provisional citations in the proof contracts and the cross-batch rows, re-run `proof-contract --strict` and focused `depcheck` (expecting 0 errors), then re-record both item decisions. Both decisions are currently `escalate`; only the owner resolves them (a fresh non-owner decision cannot overwrite an escalation).
   - Third-pass status: the in-run supplier `lem-em-parameter-integrals` reconciliation was refreshed on current bytes and the lemma's `repaired` decision re-recorded (closed at the Step-3 final check). The two consumer escalations stand; their current receipts report "changed inputs require a current owner decision" because of the batch-13 manifest-row update and the step-5.1 proof repair, not any Statement change. Only the owner resolves them once the carrier lands.
2. **Run-level pre-splice plan mismatches (not this pair).** The `undeclared-prereq` errors (34 at the continuation pass, 39 at the third-pass re-run; all on sibling pages, notably `em-elementary-mathematical-prerequisites`, `em-expanded-analysis-prerequisites`, `em-material-response`) belong to pairs still being authored; report for Step 4. The non-pair `physics-check` errors (39 continuation pass, 29 third pass) are the same class of in-flight sibling debt.
3. **Sibling scope staleness (observation).** `step3-decisions check --phase scope` currently reports `sr-newtonian-bridge` as requiring a fresh scope review; it does not affect this pair (our Step-3a scope hash is unchanged because no Statement/title was altered).
4. **Run-level Step-1 readiness staleness (observation, owner-held).** `step1-decisions check --run` now reports `changed inputs require a current owner decision` for all three items of this pair and for 457 of the run's 473 items, including sibling completed batches; this is the ordinary consequence of authoring carriers against scaffold records and is handled by the owner's Step-1 refresh before the native gates, not by this pair.

## Published concerns

- No defective published supplier was found among the 31 distinct published imports read for this pair; statements, hypotheses and axiom carries matched their uses.
- Two exact-instantiation notes are recorded rather than defects: the published `thm-domain-of-dependence-and-local-uniqueness` is anchored at initial time $0$ with $t_0>0$, so clauses (b)/(c) of the theorem apply it after the explicit time translation $t\mapsto t-t_0$ (steps 4.1/4.2); and the published `thm-wave-duhamel-principle` assumes per-slice spatial compact support, so the example treats it as a boundary comparison and never invokes its conclusion for the constant source.
- The two published suppliers already used by the page (`thm-kirchhoff-formula-for-the-three-dimensional-wave-equation`, `lem-euler-poisson-darboux-equation-for-spherical-means`) were spot-checked and retain their recorded status; no hash or interface drift involving this pair was observed.

## Handoff summary

- Completed: all three item carriers authored (statements verbatim to the scoped manifests), both page carriers authored and registered, the batch-17 proof-contracts file created, the manifest dep correction applied, the cross-batch input reconciled (third-pass note added), the ledger refreshed, the step-5.1 boundary-inequality micro-repair applied, and the full check battery re-run on current bytes after the final edit (proof-layout last; 0 defects).
- Decisions: `lem-em-spherical-mean-family-smoothness` = `repaired` (confidence 1, re-recorded on the refreshed input hash; closed at the Step-3 final check); `thm-em-wave-cauchy-kirchhoff` = `escalate`; `ex-em-…-source-and-support-boundaries` = `escalate` — the two escalations name the exact supplier ID, consumer IDs and consuming steps and must be resolved by the owner after `lem-em-spherical-mean-wave-identity` is authored.
- Added suppliers: none (the pair's one added prerequisite, `lem-em-spherical-mean-family-smoothness`, was scaffolded in Step 1 and is authored here).
- Missing items/pages/contracts: none; the only unfinished inputs are the sibling supplier above and the run-level items in section "Open obligations".
