# Batch 28 Step 3a adjudication

Run: `inverse-problems-knot-theory-all-109-2026-10-19`. Group: `batch-28`. Scope: batch 28 only.

The generated order routes the level-4 theorem risk review, then the level-5 counterexample touched decision and risk review, then the level-5 exact-data example risk review. Scope has no reader, refuter, page or foreign-gate obligations. Prior reports supply evidence only. Live status recomputed from `.autopilot/` shows Step 3a active; recent Git HEAD is `ace06e03bc`.

## Completed level 4 review

`thm-ip-nonlinear-landweber-fejer-and-finite-stopping`: independently checked every proof step and all 17 direct supplier statements, including the algorithm. The uniform two-point TCC is an explicit hypothesis, not inferred from the weaker one-basepoint definition. Squared-error expansion gives the stated estimate. Positive `c_tau` supplies domain invariance and finite noisy stopping by telescoping and Archimedean unboundedness. Exact-data residual summability and finite-block minimizers control both Cauchy differences; the distance-drop tail handles the earlier endpoint. Continuity and closed-ball containment give a solution limit. Fixed-index stability and Fejer monotonicity relative to this same limit resolve both stopping-index subsequence cases; Countable Choice licenses the bad-data selection. Checked zero residual, `d0=0`, `N=0`, `eta=0`, positive-noise threshold, finite budgets including `M=N`, and exact-data infinite execution. No rate or minimum-norm selection is asserted. Risk review is complete in the owning contract; no item edits or theorem decision are owed.

Sources actually opened: [Clason, Regularization of Inverse Problems](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf), Chapter 11, PDF pp.100-105, Lemma 11.1 proof, Assumption 11.2, Lemma 11.3 and Theorems 11.4-11.6 including proofs; [Hubmer et al.](https://epub.oeaw.ac.at/0xc1aa5576_0x003dd6da.pdf), section 2.1, equations (2.1)-(2.3) and the practical unknown-eta caveat (PDF p.3). These are source cross-checks, not imported proof acceptance. All mathematical inferences above were checked against the current local carrier.

## Completed counterexample review

`touched:28:cex-ip-landweber-outside-local-ball-stalls`: `accepted_repair`, repair confidence 1. The current raw SHA256 is `a066b4934c27abce35e918c72f8dacfbb2b669ea5aa91475546334d298e56244`, matching reader-post. Replacing only the current title by the old title reproduces reader-pre `7fd3c547bfc5a615bfdd474a16610dcab595cd7e0e10b715850eca4efa4e6488` exactly. Thus the historical delta is fully known. The start is the center of every proposed local ball; the old title is misleading and the corrected title states exactly what the witness proves. Derivative `2x`, residual one, stationary start zero and the nonzero increment at every positive radius verify both proof steps. The bare recurrence is expressly distinguished from an admissible algorithm execution. No assertion that only one theorem hypothesis fails is made. The Statement refuted is unchanged, so no Statement/Definition consumer propagation is triggered. The stale title in the owning pages manifest was synchronized; provenance and proof contracts otherwise remain valid. No judge stamp is present or invalidated. Closed title-defect row `ipkt109-b28-3a-local-tcc-title` is referenced by the decision. Counterexample risk review complete.

## Completed exact-data example review

`ex-ip-landweber-exact-data-no-finite-stop`: both verification steps and the current algorithm/theorem suppliers checked. Derivative norm is one half, the linearization remainder is zero, and radius one includes the solution on the inner-ball boundary. Recurrence multiplication by three quarters gives positive residual at every finite index, including zero. Thus any finite budget, including zero, returns `budget_exhausted` at its last index with exact data. The sequence tends to zero, the unique exact solution. Risk review complete; no edits or decision owed.

## Scope and consumer disposition

All three routed items have complete risk reviews. All their direct dependencies and exact cited supplier statements were checked. No Statement or Definition changed. No outside consumer correction, proposed withdrawal or defective published supplier was identified; published content stayed read-only. Stable IDs and dependency edges are preserved. No scoped diagrams are present or needed for these scalar witnesses or analytic estimates. No page decision is owed; pages remain untouched. The only supporting manifest change is the counterexample title. No mathematical item was edited in this adjudication.

## Local checks

All completed checks exited zero:

- `node tools/risk-report.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-28.proof-contracts.json`: initial routing, zero errors; repeated with `--require-reviewed`: zero errors, all three HIGH/CRITICAL reviews complete.
- `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-28.proof-contracts.json --strict`: four contracts checked, zero errors or warnings.
- `node tools/tsx-run.mjs tools/precheck.mts` with the theorem, counterexample and exact-data example paths: three proofs checked, zero failures.
- `node tools/rendercheck.mjs` with those same three paths and `--quiet`: all three files parse under actual KaTeX and renderer YAML.
- Final `node tools/proof-layout.mjs items/cex-ip-landweber-outside-local-ball-stalls.md`: reader-changed item checked after final supporting edits; two steps, zero layout defects. No formatter or item edit was needed in adjudication.
- Exact Python SHA256 checks: all five current item raw hashes equal reader-post. The counterexample old-title substitution exactly reproduces reader-pre. Exact obligation check: one touched decision, no extra decisions.
- `node tools/defect-ledger.mjs append --file /tmp/ipkt109-b28-defect.json`: one closed row appended with its decision reference, generated ledger view refreshed under the append tool lock.

Two attempted tool invocations were corrected before these successful checks: this environment has `python3` rather than `python`, and the precheck entrypoint is `tools/precheck.mts` through `tsx-run.mjs`, rather than nonexistent `tools/precheck.mjs`. Neither failure was mathematical or counted as a successful check.

No unresolved blocker, uncertainty or owner decision remains in the assigned scope. No judgment, certification, decision hash stamping or engine transition performed. The engine owns the later gate battery.
