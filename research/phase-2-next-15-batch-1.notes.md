# Phase 2 next 15 — beta batch 1 construction evidence

Status: **ESCALATED** — 44 owned outcomes: 42 ready and 2 escalated. This is Step 1 construction evidence, not independent mathematical approval. Owner/operator reconciliation and Step 3 review remain necessary. No published content, shared plan, engine state, selected pair, or verdict was edited.

The pre-existing frontier-34 scaffold and genuine source history were reused as directed. Nineteen now-published MT-21a/MT-21b supplier items remain external instead of being duplicated. The mechanically imported 30-A/10-B inventory was audited and repaired to the binding 33-A/11-B inventory.

## Instructions and controlling design

Read in full: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the beta and dependency-ledger briefs, assigned task, current plan and scope/drift evidence, old manifest/coverage/notes, and the published direct suppliers. Live `.autopilot/` state and git log, not concluded RESUME files, established run state.

The controlling design is **MT-22**, the complete section in `research/plan-measure-theory-track.md` lines 4415–4565. It owns this pair and fixes inventory, conventions, warnings, axiom strength, and proof route. **DG-36**, read completely at `research/plan-differential-geometry-track.md` lines 9006–9243, is downstream only: line 9011 and item 29 at lines 9099–9101 consume MT-22 for `cor-poincare-recurrence-for-finite-volume-hamiltonian-invariant-regions`, expressly on a finite-measure invariant region. It confirms the consumer hypothesis but does not control this pair.

### Plan/design comparison and conflicts

The current `research/plan-spec.json` controls page metadata. It agrees on A order 288.043, B order 288.044, category, titles, companions, and all eleven listed A prerequisites. Its item arrays are empty, so it supplies no competing item order. Conflicts/refinements:

1. The imported 30-A/10-B scaffold predated MT-22’s binding amendment (lines 4429–4475 and 4523–4527). The unused IDs `def-integer-base-map-on-the-circle`, `prop-integer-base-map-preserves-lebesgue-measure`, and `thm-integer-base-map-is-strongly-mixing` now occur after irrational-rotation ergodicity and before stable doubling specializations. `ex-base-three-cylinder-intervals-and-preimages` now follows the dyadic preimage example. Nothing was dropped.
2. MT-22 and the current plan omit `radon-measures-and-the-riesz-markov-kakutani-theorem` from `requires`, but MT-22 lines 4497–4506 require a diagonal/RMK proof of Krylov–Bogolyubov. Publication does not create an undeclared page edge. The manifest preserves the current plan’s requires, records the conflict, and escalates the affected items.
3. MT-22 line 4553 says doubling is not ergodic for `delta_0`. This is false: the one-point invariant probability is ergodic. The plan selects no contrary item contract. The retained B item uses the valid mixture of `delta_0` and the uniform law on the 2-cycle `{1/3,2/3}`; the strict eventual-zero invariant set has mass `1/2`.
4. MT-22 describes nested diagonal subsequences and attributes the cost to `AC_omega`. Arbitrary nested choices would resemble dependent choice. The strategy therefore uses canonical bisection intervals and least surviving indices. `AC_omega` remains explicit because the compact-metric dense-set supplier spends it. This refines axiom accounting without weakening the claim.

## Mathematical construction and dependency audit

Finite-measure recurrence uses disjoint equal-measure preimage towers and a last-return exceptional set, proving infinitely many positive returns without invertibility. Topological recurrence unions exceptions over a countable base and chooses least succeeding return times.

The induced system is now defined on the trace sigma-algebra `A|E_infinity`, with `mu_E(B)=mu(B)/mu(E)`. This fixes the imported misuse of `def-restriction-of-a-measure`, whose published convention retains the ambient sigma-algebra. Trace members are ambient measurable, recurrence gives `mu(E_infinity)=mu(E)`, and first-return levels are explicit finite intersections. Sarig Theorem 1.7 supplies the noninvertible preservation, ergodicity, Kac, and excursion route. E–W §2.9 was read but assumes invertibility and was not stretched.

Circle preservation uses inverse images of arcs. General `D_b` preservation uses its `b` affine inverse branches and the finite-measure pi-system criterion. For b-adic intervals of depths `r,s` and `n>=r`, mixing follows from the exact count
`b^(n-r) b^(-(n+s)) = b^(-(r+s))`; the published generator theorem extends it to Borel sets and Borel cores modulo null sets extend it to completions. Stable doubling propositions are genuine `b=2` specializations, while doubling ergodicity retains the independent dyadic density proof. Preservation always means `mu(T^-1 E)=mu(E)`, never forward-image preservation.

The fair-coin construction is page-local. A deterministic first-child binary tree proves compactness in ZF. Adding the complement to a disjoint algebra cover gives an open cover of the compact whole space; a finite subcover reduces countable additivity to finite additivity. Caratheodory extension and completion explicitly assume countable choice. No Tychonoff, BPI, or general product theorem is consumed.

For compact metric `K`, compact-metric separability, explicit enumeration, rational countability/countable unions, and real Stone–Weierstrass produce a countable dense family in `C(K,R)`. Canonical diagonal extraction extends uniformly to all continuous functions, and RMK represents the limit. Orbit averages telescope against `f o T`; regularity and RMK uniqueness identify the pushforward. Banach–Alaoglu is not used.

Every declared direct supplier’s complete statement and proof, or defining contract where proof is inapplicable, was opened and checked for hypotheses, direction, conventions, and actual use. Load-bearing interfaces included MT-21a preservation/ergodicity/mixing criteria; trace, measure restriction, and completion conventions; convergence and logarithmic-integration theorems; Lebesgue translation/scaling/density; compact-metric separability and Stone–Weierstrass; RMK representation/uniqueness/regularity; and countability suppliers. The direct manifest closure has no missing ID, duplicate dependency, local cycle, or forward reference. No Recorded result proves its replacement, and no Foundations path reaches `deferred-set-theory-beyond-choice`.

No defective published proof was found in the usable actual closure. The RMK items are published and their Cohn Chapter 7 proofs are adequate; the defect is the missing page prerequisite. Unrelated published consumer debt was not used to block this supplier.

## Exact owner escalation: existing RMK page edge

This is **not a new pair** and changes no selected inventory.

- Consumer: `measure-preserving-transformations-and-poincare-recurrence`, order 288.043.
- Existing published supplier: `radon-measures-and-the-riesz-markov-kakutani-theorem`, order 288.039.
- Exact placement: add the supplier to A `requires` immediately after `outer-measure-and-the-caratheodory-extension-theorem` and before `compactness`; B still requires only A.
- Exact used supplier inventory: `thm-rmk-positive-functional-is-integration-against-its-representing-measure`, `thm-rmk-uniqueness-among-radon-measures`, and `cor-second-countable-lch-locally-finite-borel-measures-are-regular`.
- Chain: `lem-continuous-functions-on-a-compact-metric-space-have-a-countable-dense-family` -> `lem-borel-probability-sequences-on-compact-metric-spaces-have-integral-convergent-subsequences` -> the three RMK suppliers -> `thm-krylov-bogolyubov-for-nonempty-compact-metric-spaces`.
- Sources: E–W Theorem 4.1/Corollary 4.2, printed pp.97–98; Royden–Fitzpatrick §22.4; Cohn, *Measure Theory*, 2nd ed., Chapter 7 for the published RMK proofs.

The last two local items in that chain are escalated. Planned suppliers were not treated as published, and the page edge was not silently changed.

There is no same-run consumer/supplier edge. The owned `research/phase-2-next-15-batch-1.cross-batch-dependencies.json` is `[]`. Ledger refresh with `--require-reviewed` correctly reports other batch inputs/reviews missing and made no shared-ledger edit.

## Choice ledger

- ZF: no-return towers, recurrence, deterministic binary-tree compactness, finite branch calculations, and explicit least-index choices.
- `AC_omega`: completed Lebesgue/fair-coin measures, completion transfer, inherited Lebesgue density/scaling, compact-metric dense data, the compact-probability/RMK route, and Gauss change of variables. Consuming statements/strategies name it and directly declare `def-countable-choice` where needed.
- No BPI, Tychonoff, Banach–Alaoglu, dependent choice, or full AC is used by new local routes. Choice-free branches remain intact.

## Source evidence

Coverage has 44 explicit dispositions and three independent full treatments:

- Einsiedler–Ward, *Ergodic Theory*: printed pp.13–32, §2.9 pp.61–63, Lemma 3.5 pp.77–78, and Theorem 4.1/Corollary 4.2 pp.97–98. Complete relevant arguments were inspected. The old URL yielded the full 1,024,475-byte, 171-page PDF during this dispatch; retained stamp SHA-256 prefix `c8e8b3e47226ca27`.
- Sarig, *Lecture Notes on Ergodic Theory*: Theorem 1.1 p.4, Proposition 1.5 p.9, Definition 1.18 and Theorem 1.7 pp.28–29. The complete noninvertible argument was read. Retained stamp: 1,382,277 bytes, 153 pages, prefix `94b4fb65b7eb7730`.
- Royden–Fitzpatrick, *Real Analysis*, 4th ed., §22.4. Complete relevant argument read. Retained full-text HTML stamp: 1,425,323 bytes, prefix `2daf50a21dfeec34`.

Genuine historical failures, alternate search and retries remain in coverage and were not reset. Current connection resets on the modern E–W and Sarig URLs did not restart successful recovery histories. Every harvested result is included/inline, deferred to a resolvable destination, or excluded with a specific reason. Gauss ergodicity remains deferred; only invariance is included. No source was dropped and no alternative proof receipt was fabricated.

## Owned outcomes

Ready (42): `lem-no-return-sets-have-null-preimage-towers`; `thm-poincare-recurrence-for-finite-measure-preserving-systems`; `cor-topological-poincare-recurrence-on-second-countable-spaces`; `def-first-return-time-and-induced-transformation`; `prop-first-return-time-and-induced-map-are-measurable`; `thm-induced-transformation-preserves-the-restricted-measure`; `prop-inducing-preserves-ergodicity`; both Kac items; all circle, integer-base, doubling, fair-coin, and dense-`C(K)` items through `lem-continuous-functions-on-a-compact-metric-space-have-a-countable-dense-family`; all six prescribed false statements; and all eleven B items.

Escalated (2):

- `lem-borel-probability-sequences-on-compact-metric-spaces-have-integral-convergent-subsequences`
- `thm-krylov-bogolyubov-for-nonempty-compact-metric-spaces`

Every `research/phase-2-next-15-step1-<ID>.json` record binds to the current manifest hash and names examined dependency IDs. Initial outcomes were written in manifest prerequisite order. The final trace, null-witness, Dirac-measure, and choice-propagation audit refreshed only changed or transitively stale ready records; unchanged ready records were preserved and neither escalation was overwritten.

## Checks actually executed

- Owned `manifest-deps`: 44 items, 0 errors.
- Owned scaffold `content-policy`: 44 items, 0 errors/warnings.
- Owned `coverage-checklist --require-destination`: 1 page, 44 results, 0 errors/warnings.
- Owned `source-fetch-check --stamp`: 3/3 verified, 0 newly stamped; ordinary recheck resolved 3/3.
- `validate-plan research/plan-spec.json`: exit 0; 1,624 pages, acyclic/consistent where inventories exist.
- `extcheck --quiet`: exit 0 with 55 pre-existing recorded-not-proved warnings and no Foundations boundary violation.
- `drift-review-check`: 15 pages reviewed, 0 blocked edges.
- Whole-run snapshot across ten currently present manifests: `manifest-deps` 454 items/0 errors. Whole-run scaffold policy has eight errors in other batches’ degree and affine-character items; this batch passes alone.
- Whole-run `manifest-integrity`: all 30 owed pages are present with no scope drift. Whole-run readiness is 338/454 ready, with 64 escalations and 52 missing/stale records; the owned contribution is exactly the two RMK escalations and no missing/stale record.
- Read-only dependency-ledger collection finds six reviewed edges and no orphaned review, but batch 3 has not supplied its input. The shared ledger was therefore not refreshed; the owned empty input is present.

The full engine gate was not invoked. The RMK page-edge decision is the only owned blocker.
