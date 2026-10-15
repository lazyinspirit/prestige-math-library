# Step-5 defect-ledger registration resolution

Proposal only. No live ledger, worker report, source item, proof contract, manifest or native receipt was edited. No gate, test or model was run. `build-proposal.py` performs read-only artifact reconciliation and writes only this proposal directory.

The 54 native confirmed-fatal decisions (50 initial round 1, four repeat round 1) lack exact ledger ownership. Collection retained the workers' ledger proposals without registering them. This follows the worker brief at `tools/step5-workflow.mjs:607`: workers propose updates and must not concurrently edit shared ledgers. Collection records those proposals at line 1124, while line 1175 appends decisions to the separate judge-adjudication ledger. The defect-ledger validator's exact-reference requirement is correct; weakening its matching rule would conceal missing registration.

`gate-1.json` assigns defect-ledger to unit 3 as `ownerHeld: true` with `subjects: []`. Its native repair writer cannot supply these owner registrations.

`rows.proposed.json` contains all 54 required append operations. Fifty register previously unregistered defects. Four are same-subject backward supersession corrections to genuine existing semantic defect rows that lack exact references: the initial petite-small, drift-composition and RQMC-marginal rows from impact unit 3, and the repeat unit-47 particle-Gibbs domain row. Each correction preserves its original taxonomy, date, stage, role, disposition and repair cost, retains its evidence, and adds the exact native adjudication reference. This avoids recording the same defect twice. Original rows remain in append-only history.

Seven decisions have no matching worker `ledger_updates` entry. Their rows are explicitly derived from the original confirmed-fatal decision and corresponding `repaired` review, not a newly invented worker proposal or mathematical review. The seven IDs are enumerated in `resolution.json`. The remaining rows reuse their authentic worker proposal, filling missing canonical metadata and exact reference fields. `sources.json` preserves every original proposal or explicit null, original decision/review, original superseded row, and report/pack/collection/dispatch hashes. Existing recorded repair costs are retained; none is invented where omitted.

Every reference uses the native rejected tuple `(id, model, item_sha256, context_sha256)`. The item hash is taken from the native adjudication ledger and independently matched to the original round pack's `before` map. Current repaired bytes are never substituted. Each decision is also present unchanged in its collected receipt and has an original successful native dispatch. This registration asserts only the original disposition and repair record; current currency, rejudgment and gate acceptance remain the controller's obligations.

Read-only reconciliation established zero existing exact owners, no proposed ID collisions at the inspected ledger snapshot, and exactly one projected owner per native fatal. All 54 rows use admitted canonical enum values. The exact frozen Step-3 projection remains 149 rows with SHA256 `b759c5d77798948457514eaa2ab473b7e984a77ba3b125fcb0c1ab558502ab36`; no Step-3 row is superseded or edited.

After native writers drain, the owner must recheck current ledger IDs and exact tuple ownership against this proposal, then use the supported atomic append API:

```sh
node tools/defect-ledger.mjs append --file research/bayesian-computational-statistics-62-owner-step5-ledger-gate-resolution/rows.proposed.json
```

The native append command locks the ledger, checks duplicate IDs and full row schema, appends all rows, and refreshes the generated view in the same transaction. Do not use `--no-render`: the 55th reported failure is the stale generated view and the ordinary append refresh addresses it. Do not rewrite any original worker proposal/report or frozen receipt. The owner retains recertification and full-battery responsibility.
