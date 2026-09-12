# Phase 2 next 17 — beta batch 1 construction evidence

Status: **READY** — all 44 owned outcomes (33 A and 11 B) have fresh, non-owner readiness records bound to the current manifest and dependency hashes. This is Step 1 construction evidence, not independent mathematical approval; owner/operator reconciliation and Step 3 review remain necessary. No published content, shared plan, engine state, selected pair, or verdict was edited.

The scaffold and coverage were imported unchanged from `phase-2-next-15` batch 1 as directed by the run import record. The imported inventory was not rebuilt merely because `plan-spec.json` has empty item arrays. Fresh proof-level review found no mathematical drift requiring a manifest or coverage edit.

## Instructions, run evidence, and controlling design

Read in full: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, `briefs/tasks/frontier-dependency-ledger.md`, the assigned task, the current plan and scope/drift evidence, this run's manifest/coverage/import note, the predecessor construction evidence and readiness records, and the statements and proofs of the actual direct suppliers. Live `.autopilot/phase-2-next-17` status, not any concluded `RESUME.md`, established the active run.

The controlling design is **MT-22**, the complete section at `research/plan-measure-theory-track.md` lines 4415–4563. It owns this A/B pair and fixes its 33-A/11-B inventory, conventions, warnings, axiom ledger, and proof routes.

The complete **DG-36** section at `research/plan-differential-geometry-track.md` lines 9010–9244 was also read. It is downstream only: its item 29, `cor-poincare-recurrence-for-finite-volume-hamiltonian-invariant-regions`, consumes MT-22 on a finite-measure invariant region. It neither controls nor expands this pair.

## Current-plan comparison and recorded conflicts

The current `research/plan-spec.json` controls page metadata. It agrees with MT-22 and the dispatch on A order 288.043, B order 288.044, titles, category, companionship, and all twelve A prerequisites, including the published `radon-measures-and-the-riesz-markov-kakutani-theorem` page needed by the compact-probability argument. B requires only A.

The following conflicts or refinements are recorded rather than hidden:

1. Both plan item arrays are empty, while MT-22 explicitly binds 33 A and 11 B items. This is a staging mismatch, not a competing inventory: the run import record expressly requires preservation of the completed imported scaffold. The manifest therefore remains unchanged and the current plan continues to control all page metadata and prerequisite edges.
2. MT-22 line 4553 says doubling is not ergodic for `delta_0`. That is false: the one-point invariant probability at the fixed point is ergodic. The retained item `cex-doubling-ergodicity-depends-on-the-invariant-measure` uses the valid mixture of `delta_0` and the uniform probability on the 2-cycle `{1/3,2/3}`; the strict eventual-zero invariant set then has measure `1/2`.
3. MT-22 attributes the compact-probability diagonal route to `AC_omega`, including wording about nested subsequence selections. The manifest makes the extraction deterministic through canonical bisection intervals and least surviving indices, so it does not hide dependent choice. `AC_omega` remains genuinely required through the compact-metric separability and countable-family suppliers.
4. MT-22 states induced preservation under the ergodic hypothesis. The retained theorem proves the useful stronger finite-measure result without ergodicity or invertibility. This is supported by the noninvertible one-sided pullback argument and does not weaken or contradict the designed consumer theorem.

The predecessor run's only escalation was a missing RMK page prerequisite. It is not a current conflict: MT-22 and the current plan both now declare MT-20/RMK before this page, and the drift report confirms that repair.

## Mathematical and dependency audit

Finite-measure recurrence uses disjoint equal-measure preimage towers and places every finite-return exception in a countable union of preimages of the no-return set. It proves infinitely many positive return times without invertibility. The topological corollary takes the countable union of basis-set exceptions and uses least later returns into shrinking metric balls.

The induced system is defined on the infinitely returning core with the trace sigma-algebra and normalized restricted measure. Return-time levels are explicit finite intersections. For a trace-measurable set, repeated pullback and splitting at the base gives the one-sided induced-preimage inequality; applying the same inequality to its complement and using that the two induced preimages partition the recurrent core forces equality. Thus induced preservation does not inherit the invertibility assumption used by Einsiedler–Ward §2.9. First-entry extension plus the published sweep-out criterion proves induced ergodicity.

For Kac, with `C_N` the set avoiding the base at times `0,...,N-1`, stationarity gives
`mu(E intersect {r_E>j}) = mu(C_j)-mu(C_{j+1})`.
Ergodic sweep-out gives `mu(C_N) -> 0`, and monotone convergence gives the return-time formula. Repeated integral splitting, truncation, and monotone/dominated convergence give the excursion formula. No invertibility is used.

Circle and integer-base preservation are verified by inverse images, never by forward images. Irrational rotation ergodicity follows from orbit density plus Lebesgue density, avoiding Fourier suppliers. For `D_b`, the `b` affine inverse branches establish preservation; exact `b`-adic counts establish mixing, and Borel cores transfer both claims to completions. Doubling remains a stable `b=2` specialization while retaining its independent dyadic-density proof.

The fair-coin construction is page-local: finite unions of cylinders form the algebra, deterministic first-child recursion proves compactness in ZF, compactness reduces a disjoint algebra cover to finite additivity, and Caratheodory provides the measure. No general product theorem, Tychonoff theorem, or BPI is consumed.

For compact metric `K`, compact-metric separability, rational finite polynomials in distance functions, and Stone–Weierstrass give a countable dense family in `C(K,R)`. Canonical diagonal extraction extends integral convergence to all continuous functions. RMK represents the positive normalized limit functional. Cesaro orbit averages telescope against `f o T`, and the pushforward integration identity plus regularity and RMK uniqueness prove invariance. Banach–Alaoglu is not used.

Every declared direct supplier's complete statement and proof, or defining contract where no proof applies, was examined for hypotheses, direction, conventions, actual use, well-definedness, and axiom strength. Load-bearing interfaces included preservation/ergodicity/mixing criteria, trace and completion conventions, recurrence and integral invariance, Lebesgue translation/scaling/density, compact-metric separability and Stone–Weierstrass, RMK representation/regularity/uniqueness, and the countability suppliers. The local order has no forward dependency or cycle, and all B items remain leaves.

No defective published item occurs in the actual prerequisite closure. The repository-wide external-reference check still reports 55 pre-existing Recorded/not-proved warnings, none used by this pair and no Foundations path to `deferred-set-theory-beyond-choice`. The three current whole-run content-policy errors belong to batch 7 (`thm-regular-value-formula-for-degree` and `prop-degree-is-multiplicative-under-composition`) and do not enter this pair's closure.

## Choice ledger

- **ZF:** no-return towers, finite-measure recurrence, the deterministic binary-tree compactness proof, finite branch and cylinder calculations, and canonical least-index diagonal steps.
- **`AC_omega`:** completed Lebesgue and fair-coin measures, inherited Lebesgue density/scaling interfaces, the compact-metric dense-family route, RMK compact-probability construction, and the Gauss change-of-variables branch. Consuming contracts declare `def-countable-choice` where required.
- **Not used:** dependent choice, full AC, BPI, full Tychonoff, and Banach–Alaoglu. Choice-free branches and incompatible-axiom boundaries remain intact.

No Recorded result is consumed to prove its replacement. Foundations does not reach `deferred-set-theory-beyond-choice` through any owned proof or prerequisite path.

## Source evidence and dispositions

Coverage retains 44 explicit dispositions and three independent complete treatments:

- Manfred Einsiedler and Thomas Ward, *Ergodic Theory* (171-page draft): printed pp.13–32, §2.9 pp.61–63, Lemma 3.5 pp.77–78, and Theorem 4.1/Corollary 4.2 pp.97–98. The complete relevant passages were inspected; retained full-PDF stamp is 1,024,475 bytes, 171 pages, SHA-256 prefix `c8e8b3e47226ca27`.
- Omri Sarig, *Lecture Notes on Ergodic Theory*: Theorem 1.1 p.4, Proposition 1.5 p.9, and Definition 1.18/Theorem 1.7 pp.28–29. The retained full-PDF stamp is 1,382,277 bytes, 153 pages, prefix `94b4fb65b7eb7730`. This supplies the noninvertible induced/Kac route.
- Royden–Fitzpatrick, *Real Analysis*, 4th ed., §22.4: the complete compact-invariant-measure argument was inspected. The retained full-text HTML stamp is 1,425,323 bytes, prefix `2daf50a21dfeec34`.

Historical failures and successful recoveries remain in coverage and were not reset. Every harvested result is included/inline with an item ID, deferred to a resolvable destination, or excluded for a specific scope reason. Gauss ergodicity remains deferred; only invariance is included. No source was dropped and no alternative-proof receipt was fabricated. `source-fetch-check --stamp` and the ordinary source gate both report 3/3 fetch-verified and 3/3 resolved.

## Cross-batch dependencies and owned outcomes

There is no same-run consumer/supplier dependency for this pair. The owned `research/phase-2-next-17-batch-1.cross-batch-dependencies.json` remains `[]`; no shared-ledger edit was needed. DG-36 is a future downstream page, not a same-run dependency input.

All 44 items are ready. Records were written exactly once in manifest prerequisite order with:

`node tools/step1-decisions.mjs record --run phase-2-next-17 --item ID --decision ready --dependencies JSON --reason TEXT`

No `--owner` flag was used and no escalation was overwritten. A hash-aware verification through `step1Decision` reports 44/44 owned records closed, ready, and non-owner.

## Checks actually executed

- Owned `manifest-deps`: 44 items, 0 errors.
- Owned scaffold `content-policy --manifest-only`: 44 items, 0 errors/warnings.
- Owned `coverage-checklist --require-destination`: 1 page, 44 harvested results, 0 errors/warnings.
- Owned `source-fetch-check --stamp`: 3/3 verified, 0 newly stamped; ordinary source gate: 3/3 verified and resolved.
- Whole-run snapshot across 11 manifests: `manifest-deps` 480 items, 0 errors.
- Whole-run scaffold policy snapshot: 480 scoped items, 3 errors and 0 warnings. All three errors are the unrelated batch-7 missing dependencies named above; the owned batch passes independently.
- `manifest-integrity --run phase-2-next-17`: all 34 owed pages present, no scope drift.
- `validate-plan research/plan-spec.json`: 1,624 pages; declared page order acyclic and consistent, with no item-level cycles, forward references, B-page dependencies, or unresolved IDs among pages with inventories.
- `drift-review-check --run phase-2-next-17`: 17 pages reviewed, 0 blocked edges; all 60 checked same-category prerequisite edges satisfy the buildability threshold.
- `extcheck --quiet`: 55 pre-existing Recorded/not-proved warnings, no owned dependency and no Foundations boundary violation.
- `fwdcheck --quiet`: pass; every forward reference is declared, strictly forward, resolvable, off-spine unless orientation-only, and acyclic.
- Fresh owned readiness verification: 44/44 ready, current-hash-valid, and non-owner. The whole run remains open for other batches, as expected.

Unresolved owned findings: **none**. The full engine gate was not invoked; reconciliation and Step 3 remain responsible for independent review.
