# Mathematics workflow engine

Use `WORKFLOW.md` for the six-step stage table, run controls, owner holds and evidence procedures.

The rebuild plan is `research/workflow-rebuild-plan.md`. Step 1 performs complete initial authoring; Step 2 is the bounded Luna-max whole-batch scope/prerequisite loop. Planning generates group metadata; accepted plan synchronization is part of the Step-2 mechanical handoff. There are no separate assignment or splice stages.

Mathematics inventory supports 130 pairs, one per batch, and at most three batches per group. Group labels extend through `aa`, `ab`, and beyond; valid native category assignments determine the task scope. Physics limits are independent.

Current revision: `six-step-v1-construction-scope`. Use fresh run state. The engine owns all transitions and enforces the shared 30-agent cap. See `package.json` for typechecking and focused test commands.

Step 3 ends with `3a-baseline` and mechanical `3a-close`. Dependency-level authoring replaces the legacy Step 3b cross-batch review; no Step 3b stage or continuation is dispatched. Historical evidence remains preserved.

Within the Step-3 pipeline, ready downstream work gets available slots before
upstream work: adjudicators, collection tools, refuters, split tools, then readers.
Each batch still requires its predecessor receipts and artifacts, with no live
predecessor writer. Stage, role, and global caps include workers adopted after a
controller restart; the full group gate barrier remains in place.

Routine reports build their current snapshot only when the report timer is due;
forced reports still recompute immediately. In coverage mode, stage status checks
artifacts for effectively covered units and retains uncovered units as missing.
A successful worker still needs every declared artifact, including after it exits;
legacy count mode and all readiness, writer and gate checks retain their behavior.

A run-local stage wrapper may opt priority `1-scaffold` into
`deferConstructionArtifactsUntilDrain`. While any owed unit lacks current
successful coverage (including a pending native refresh), or any same-stage local
or adopted writer remains, status withholds all completion credit and skips
artifact-based stalemate detection. Initial priority dispatch, failed-execution
retry limits and blockers, and native refreshes continue. Once all owed authoring
has coverage and every writer drains, the full artifact, readiness, stalemate and
gate paths run normally. This defaults off and is invalid for other stage policies;
common mathematics stages do not enable it.
The optional `owner-supervised-construction.mts` stage table composes the owner
boundary wrapper with this construction-only option. Select it through the exact
run-local configuration to preserve live parallel authoring; other runs retain
their selected tables. Native artifact/readiness and gate checks still run after
all initial authors have coverage and every writer drains.

The same opt-in grants a fresh capability only to initial priority graph checks
and plan generation, including startup/hot-reload validation of that initial
authoring DAG. Their scheduling projection may retain duplicate item IDs
within one page or its validated companion, only with the same batch and explicit
valid kind. Every raw entry and its declared/current source dependencies remain
in the batch DAG; raw manifests and projection metadata bind the scheduling digest.
Cross-batch, kind and noncompanion conflicts still fail. Projected and strict
snapshots use separate caches. Repair checks (`requireComplete: true`), actual
readiness/artifacts, post-drain recomputation and gates receive no capability and
still reject duplicate inventory. An unblocked scheduling graph explicitly says
when its projection does not certify that inventory.

Adopted completion reconciliation ignores local and externally live writers. It
reads results only for missing or impossible end stamps, binds native author
identity, attempt, coverage, ordered timestamps and immutable replay evidence,
and leaves attempt counters and start history intact. Native engine-written tool
receipts retain their smaller explicit schema. An old stable result cannot close
a newer dispatch; an impossible old stamp can recover from its genuine current
result on a later tick. Retry controls reconcile adopted success before rearming
failed lanes. Artifact, readiness and gate completion still require their checks.

Freshly planned namespaces now use `six-step-v1-statement-first` through the composed
`mathlib.statement-first.mts` table. Every item class presents uninterrupted
statements/descriptions and separate following reference lines. Existing runs
keep their original revision and table. See [the editorial policy](../STATEMENT-FIRST.md).
