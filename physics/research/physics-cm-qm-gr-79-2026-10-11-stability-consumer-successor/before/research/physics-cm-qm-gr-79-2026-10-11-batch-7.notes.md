# Batch 7 notes — `cm-math-approximation` / `cm-math-approximation-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, batch 7, cover 7: the pair
`cm-math-approximation` (A, order 93) and `cm-math-approximation-examples`
(B, order 94), category `non-relativistic-classical-mechanics-mathematics`,
library `mathematics`. Every item here is mathematics (`domain: mathematics`,
only mathematical dependencies); nothing on either page asserts a physical
interpretation, unit convention or empirical fact. Content authored
2026-10-11; this file records inventory, conflicts, repairs and check results,
not approvals.

## Inventory and levels

- A page `cm-math-approximation`, 17 items; B page `cm-math-approximation-examples`, 8 items.
- Engine batch graph (`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`): batch 7 has `dependency_level: 2`, `requires: [3]`.
- A-page items and `dependency_level` (one plus the maximum level of the in-run `deps`; published and other out-of-run suppliers do not raise a level):
  `def-cm-oscillator-model-and-phase-system` (0), `def-cm-averaging-data-and-averaged-field` (0),
  `def-cm-parameter-dependent-action-angle-branch` (0), `lem-cm-convolution-differentiation` (0),
  `thm-cm-homogeneous-oscillator-solution-classification` (1), `prop-cm-oscillator-degenerate-and-repulsive-cases` (1),
  `cor-cm-variation-of-constants-for-linear-systems` (1), `cor-cm-homogeneous-oscillator-decay` (2),
  `thm-cm-forced-oscillator-variation-of-constants` (2), `cor-cm-forced-modal-oscillator-response` (3),
  `thm-cm-forced-oscillator-sinusoidal-response` (3), `prop-cm-oscillator-amplitude-maximum` (4),
  `lem-cm-averaging-data-basic-bounds` (1), `thm-cm-finite-time-linearization-error-bound` (2),
  `thm-cm-averaging-for-fast-periodic-oscillations` (2), `thm-cm-adiabatic-invariant-drift-bound` (1),
  `rem-cm-approximation-scope-and-limits` (5).
- B-page items and levels: `ex-cm-oscillator-cases-computed` (2), `ex-cm-resonant-forcing-and-amplitude-peak` (5),
  `ex-cm-uniform-force-and-linear-drag` (3), `ex-cm-pendulum-linearization-bound-check` (3),
  `ex-cm-averaging-oscillatory-deviation-check` (3), `ex-cm-adiabatic-drift-check` (2),
  `cex-cm-nonuniqueness-without-state-lipschitz` (1), `ex-cm-domain-escape-in-finite-time` (1).
- Cross-batch in-run suppliers reviewed in `research/physics-cm-qm-gr-79-2026-10-11-batch-7.cross-batch-dependencies.json`
  (all `verified`, all with current Step-1 `ready` records on the supplier side): page edge
  `cm-math-approximation -> cm-math-dynamics` (batch 3), item edges to
  `lem-cm-continuous-dependence-on-initial-data` (batch 3, four consumers),
  `thm-cm-compact-continuation-for-locally-lipschitz-odes` (batch 2, two consumers),
  `thm-cm-quadratic-mode-decomposition` (batch 3, one consumer) and
  `def-cm-local-flow-of-an-autonomous-system` (batch 3, one consumer, declared from the supplier side and merged).
  The unified ledger `research/physics-cm-qm-gr-79-2026-10-11-cross-batch-dependencies.json` carries 9 rows for batch 7.

## Files written by this batch

- `items/` carriers for the 25 ids above; page carriers
  `library/non-relativistic-classical-mechanics-mathematics/cm-math-approximation.md` and `...-examples.md`.
- `research/physics-cm-qm-gr-79-2026-10-11-batch-7.pages.json` (manifest: kind, domain, title, reference, design_state,
  `dependency_level`, `deps`, `dependency_roles`, statement, strategy, provenance, sources for every item).
- `research/physics-cm-qm-gr-79-2026-10-11-batch-7.coverage.json` (4 full-text sources, 18 harvested contents: 13 `included`, 5 `inline`; every entry has a disposition and destination or support text).
- `research/physics-cm-qm-gr-79-2026-10-11-batch-7.proof-contracts.json` (strict contract, 21/21 proof-bearing items, boundary worksheets, citation excerpts).
- `research/physics-cm-qm-gr-79-2026-10-11-batch-7.cross-batch-dependencies.json` (1 page edge + 7 item edges, all `verified`).
- `research/physics-cm-qm-gr-79-2026-10-11-step1-<id>.json` readiness records for all 25 items, recorded after the final carrier and manifest edits.

## Design versus plan

1. **Reserved sections delivered.** The design (`research/plan-non-relativistic-classical-mechanics-track.md` L163, with
   `research/first-principles-2026-10-03/.../proposed-inventory.json` `CM-Math-approximation`, budgets A 80 / B 30,
   `section_count_not_item_count: true`) reserves local proved sections `E3` (oscillators, forcing and elementary examples)
   and `E8` (finite-time linearization, averaging and adiabatic control), to be proved locally with internal local proof
   dependencies `E2` and `M7`. Both are delivered: `E3` by the definition, classification, variation-of-constants,
   sinusoidal-response and amplitude items; `E8` by the convolution lemma, the averaging data and bounds items, the
   linearization bound and the averaging and adiabatic theorems. `E2` is realised by the batch-3 supplier
   `lem-cm-continuous-dependence-on-initial-data` (cylinder existence, uniqueness and Lipschitz dependence, its local
   uniqueness clause also driving the two classification proofs); `M7` by the batch-3 supplier
   `thm-cm-quadratic-mode-decomposition`, consumed by `cor-cm-forced-modal-oscillator-response`. The design's granular
   examples (uniform force, drag, resonant solution, non-Lipschitz nonuniqueness, finite-time domain escape) and its
   warnings ("no finite resonant amplitude is asserted", "these are adopted models, not measured laws", the continuation
   warning) are preserved as the eight B items and as `rem-cm-approximation-scope-and-limits`.
2. **Author-added local prerequisites not named in the design section list.** `lem-cm-convolution-differentiation` is the
   exact derivative rule for the variable-limit convolution `F(t)=int_{t0}^t g(t-s)f(s)ds` that `E3`'s prose proof of the
   Green-kernel formula silently differentiates; `lem-cm-averaging-data-basic-bounds` supplies the bounds `B=2MP`,
   `B1=2LP`, the identity `partial_t g = f - fbar` and the differentiability of `g` that `E8`'s prose asserts ("say by
   B,B1") without construction. Both are recorded as scaffolder-added necessary local prerequisites under the dispatch
   rule; the three model/data definitions (`def-cm-oscillator-model-and-phase-system`,
   `def-cm-averaging-data-and-averaged-field`, `def-cm-parameter-dependent-action-angle-branch`) and the scope remark
   likewise materialise definitions and qualifications that the design carries only in prose.
3. **"Published canonical mathematical suppliers: none" in the design is read as "none reserved".** The items consume
   published canonical mathematics at item level for elementary analysis (the real and complex exponential, sine/cosine,
   the fundamental theorems of calculus, Taylor remainder, Gronwall, Picard-Lindelof, the operator norm, the matrix
   exponential series, Heine-Borel/Heine-Cantor and the metric ball): the ordinary imported canonical route, all imported
   items used read-only. No conflict; the consumption is declared in each item's `deps` and in the manifest.
4. **Plan `requires` versus manifest closure (plan-registry gap class).** The plan-spec entries for the two pages carry
   minimal lists (`cm-math-approximation`: `["cm-math-dynamics"]`; `cm-math-approximation-examples`:
   `["cm-math-approximation"]`). The final item graphs depend on items homed on imported host pages, so the manifest and
   page carriers extend the lists: A adds `bounded-linear-operators-and-quotient-spaces`,
   `complex-differentiability-and-cauchy-riemann`, `field-extensions-and-the-complex-numbers`, `the-exponential-function`
   and `the-fundamental-theorems-of-calculus`; B adds `darboux-lhopital-and-taylor` and
   `monotone-functions-and-discontinuities`. Each added host page is already declared in `plan-spec.json` as a `kind: "P"`
   imported page with order below 93 (`bounded-linear-operators-and-quotient-spaces` 80.061,
   `complex-differentiability-and-cauchy-riemann` 9, `field-extensions-and-the-complex-numbers` 80.207,
   `the-exponential-function` 80.841, `the-fundamental-theorems-of-calculus` 68, `darboux-lhopital-and-taylor` 80.991,
   `monotone-functions-and-discontinuities` 80.524), so the run's plan declares the targets and only the page `requires`
   lists are extended at batch level; this is the same plan-registry closure class batch 2 and batch 3 recorded, and no
   shared plan or engine state was edited here. If the operator prefers exact equality of plan and manifest `requires`,
   the smallest repair is a plan-side extension of the two order-93/94 lists (owner-held).
5. **Transitive hygiene on the B page.** The B page initially also required `bounded-linear-operators-and-quotient-spaces`
   and `the-exponential-function` directly; both are already reached transitively through `cm-math-approximation`, so
   `validate-plan` reported them as `redundant-prereq` warnings. They were removed from the manifest and the B carrier
   (the item dependencies themselves are satisfied through A, and `validate-plan` re-run reports no batch-7 finding).
   The manifest was re-hashed by the readiness records recorded after this edit.

## Mathematical review and repairs made during authoring

All 25 statements and proofs were read in full at their current carriers; the explicit computations of the B items and the
constants of the two E8 estimates were re-derived by hand (resonance solution and its derivative identities; the
amplitude maximum with `q(u)=m^2(u-u_*)^2+c^2(4mk-c^2)/(4m^2)`; the VoC kernels `u/m`, `(1-e^{-cu/m})/c`,
`e^{-gamma t} sin(omega t)/(m omega)`; the decay bounds including `t e^{lambda t}<=2/(lambda^2 t)`; the averaging
Gronwall chain with `B=2MP`, `B1=2LP`; the adiabatic conjugation identity). Four repairs/clarifications were made:

1. `ex-cm-oscillator-cases-computed` line (iii): the displayed solution paired each characteristic root with its own
   exponent, `(lambda_+ e^{lambda_+ t} - lambda_- e^{lambda_- t})/sqrt5`, which satisfies `x(0)=1` but gives
   `x'(0)=lambda_+^2-lambda_-^2)/sqrt5 = -3`, not `v_0=0`. Repaired to
   `x(t)=(-lambda_- e^{lambda_+ t}+lambda_+ e^{lambda_- t})/sqrt5` in the Example bullet and in step 1.3, matching the
   coefficients `A=-lambda_-/sqrt5`, `B=lambda_+/sqrt5` computed in the same step and restoring `x'(0)=0`. The proof
   contract's step-1.3 claim was updated.
2. `ex-cm-adiabatic-drift-check`: with `varepsilon=1/10`, `A=2`, the horizon is `[0,20]` and `s(t)=varepsilon t=t/10`
   runs over `[0,2]`, but the example had set `S_0=[0,1/5]`, so the theorem's trapping hypothesis `s(t) in S_0` failed
   after `t=2` and the phrase "stays in `K x S_0` for all `t>=0`" was false for `s`. Repaired by setting `S_0=[0,2]`
   (then `s` lies in `S_0` exactly on `[0,A/varepsilon]=[0,20]`), separating the invariant trapping of `I` in `K` for all
   `t>=0` from the horizon statement, and rewriting step 2.1 to give a proper compact-trapping argument at a finite
   maximal endpoint (`theta(t) in [0,11t/10]`, `s=t/10`, `I in K`); the theorem's value `19/50` and the exact bound `1/3`
   are unchanged. The proof contract's step-2.1 claim and boundary evidence were updated.
3. `thm-cm-homogeneous-oscillator-solution-classification` step 4.1: the uniqueness lemma is stated for initial time 0;
   the exhaustiveness argument applies it at `t_1`. The time translation (the field `G_0` is autonomous) is now explicit
   in the step.
4. `prop-cm-oscillator-degenerate-and-repulsive-cases` clause 3: the closing phrase "escaping to infinity in finite
   exponential time" was replaced by "unbounded solution growing exponentially on `[0,infinity)`", which is what the
   preceding sentence proves.

## Sources and limitations

- Four sources, all fetched with full text and `--stamp`ed by `source-fetch-check.mjs` (4/4 fetch-verified, 4/4 resolved,
  0 drops): Likharev, *Essential Graduate Physics, Classical Mechanics* (Ch. 5 Sec. 5.1/5.3, Ch. 10 Sec. 10.2-10.3);
  Stewart, *Advanced Classical Mechanics* (MIT 8.09 Fall 2014, Ch. 5, Ch. 7 Sec. 7.1.3); Tong, *Classical Dynamics*
  (Sec. 4.6); Teschl, *Ordinary Differential Equations and Dynamical Systems* (Sec. 2.4, 3.1-3.2, 6.2-6.3, 8.6).
  Every A-page topic has at least two independent treatments (oscillator and resonance: Likharev + Stewart; averaging:
  Likharev + Stewart; adiabatic: Likharev + Tong + Stewart; linearization: Teschl + Stewart; convolution and VoC:
  Teschl + Likharev).
- Honest limitations: the local proofs are independent conditional arguments checked against the cited treatments, not
  copied; the cited treatments derive the adiabatic statement only in the averaged sense (Tong explicitly defers stricter
  proofs), so the item proves the exact conjugation identity `(I+varepsilon g)'=varepsilon^2(...)` under its own explicit
  frequency-gap and trapping hypotheses and asserts no exact invariance; the averaging theorem compares two different
  models and is finite-horizon only; the two classification theorems and the forced/modal items are exact for the stated
  constant-coefficient linear models only; the B items are finite computations, not general bounds. No physical or
  empirical claim is made anywhere; physical units, forces, damping, driving and adiabatic parameter variation belong to
  the consuming classical-mechanics pages, which must restate their own postulates and empirical qualifications.
- No source was dropped for this batch, so `source_resolution` is not applicable.

## Check results (commands actually run; outputs current)

- `node tools/physics-support/proof-layout.mjs <25 item paths>`: 25 items, 72 steps, 0 defects — re-run after the final
  edits to the four repaired items.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts --json <25 item paths>`: 25 items,
  21 `pass`, 0 `fail`, 4 `not-applicable` (3 definitions, 1 remark).
- `node tools/physics-support/rendercheck.mjs <25 item paths> <2 page carriers>`: OK — 27 files, no wikilink inside math,
  no unbalanced delimiters, all math parses under KaTeX, all frontmatter parses.
- `node tools/physics-support/content-policy.mjs research/physics-cm-qm-gr-79-2026-10-11-batch-7.pages.json`: 25 scoped
  items, 0 errors, 0 warnings. Whole run (15 nonempty manifests): 325 scoped items, 0 errors, 0 warnings.
- `node tools/physics-support/manifest-deps.mjs` (batch manifest): 25 items, 0 normalized, 0 errors. Whole run:
  325 items, 0 errors.
- `node tools/physics-support/proof-contract.mjs ... --strict`: 0 errors, 0 warnings, 21/21 items checked (re-run after
  the contract claim updates).
- `node tools/physics-support/coverage-checklist.mjs ... --require-destination`: 1 page, 18 harvested results,
  0 errors, 0 warnings. `source-fetch-check.mjs --coverage ...`: 4/4 sources fetch-verified, 4/4 resolved.
- `node tools/physics-support/item-dependency-levels.mjs check --run physics-cm-qm-gr-79-2026-10-11`: no finding names
  any batch-7 page or item; the command still exits 1 for other batches' empty scaffold inventories, as for every
  earlier batch.
- `node tools/physics-support/audit-manifest.mjs <15 nonempty run manifests>`: 0 errors for batch 7; the 34
  `unresolved` rows all belong to batches 65 and 66 (other batches' inputs).
- `node tools/physics-support/depcheck.mjs --json <25 item ids>`: no `dep-unresolved`, `link-unresolved`,
  `cited-not-in-deps`, `b-leaf`, `multi-home` or cycle finding mentions any batch-7 item or either page; the nonzero
  whole-corpus total is other content (`published-unaudited`, unresolved legacy links).
- `node tools/physics-support/citecheck.mjs` (full corpus): no mention of any batch-7 item or page (exit 0).
  `node tools/physics-support/extcheck.mjs`: OK, 0 recorded-not-proved, 0 resting on them.
- `node tools/physics-support/validate-plan.mjs research/plan-spec.json --run physics-cm-qm-gr-79-2026-10-11`:
  zero findings for `cm-math-approximation` and `cm-math-approximation-examples` (the two `redundant-prereq` warnings
  recorded above were removed; re-run confirmed no warning or error names either page). The remaining findings — their
  counts drift while other batches are authored concurrently in the same workspace (observed: 2 errors shortly before
  this batch's B-page edit, 37 errors and 21 warnings at the final re-run) — all name other run pages
  (`qm-math-intervals-and-contacts`, `qm-math-orbital-and-spin`, `cm-math-rotation-double-cover`, `cm-math-variations`,
  `cm-math-rigid`, `gr-framework-and-geometry`, ...), owned by their batches.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-cm-qm-gr-79-2026-10-11`: refreshed and
  deduplicated; the unified ledger carries all 9 batch-7 rows. `--require-reviewed` still reports the run-level
  incomplete review because other batches have not supplied their inputs.
- `node tools/physics-support/step1-decisions.mjs check --run physics-cm-qm-gr-79-2026-10-11`: 0 outstanding rows for
  any batch-7 item or page (all 25 records `ready`, hashes current after the final manifest and carrier edits). The
  run-level remainder is other batches' work (124 missing records and 124 empty scaffold inventories).
- `node tools/physics-support/citation-faithfulness-screen.mjs <25 item ids>` (heuristic, read): 13 candidates, every
  flag a token-level notation difference between a fact and the cited statement (`phi`, `psi`, `theta`, `omega`,
  `lambda`, `mathbb`, `overline`, `sqrt`, `infty`, `sin`/`cos`, `langle`/`rangle`, `times`, `partial`, `sup`, `exp`);
  each candidate was read against its source and no scope inflation, dropped hypothesis or direction change was found.

## Unresolved findings owned elsewhere

- No published defect was found in the imported suppliers consumed by this batch: the published canonical items
  (exponential, sine/cosine, FTC, Taylor, Gronwall, Picard-Lindelof, operator norm, matrix-exponential series,
  Heine-Borel/Heine-Cantor, metric ball) and the four draft in-run suppliers (batch 2
  `thm-cm-compact-continuation-for-locally-lipschitz-odes`; batch 3 `lem-cm-continuous-dependence-on-initial-data`,
  `thm-cm-quadratic-mode-decomposition`, `def-cm-local-flow-of-an-autonomous-system`) were read at their current
  carriers, and the hypotheses each proof actually uses are those recorded in the cross-batch dependency input.
- Whole-run `item-dependency-levels check` exits 1 on other batches' empty scaffold inventories; whole-run
  `validate-plan` reports findings on other pages only (counts change as other batches are authored concurrently);
  whole-run `audit-manifest` has 34 unresolved rows in batches 65/66; whole-run `depcheck`/`citecheck` totals are other
  content. None of these blocks or touches batch 7.
- The merged run-level proof contract, the `frontier-dependency-ledger --require-reviewed` gate and the Step-3 review
  remain open until all batches finish. This batch's Step-2/Step-3 independent review is still pending; no readiness
  record here is independent mathematical approval.
