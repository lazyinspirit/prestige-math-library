# Prestige Math Library

Markdown content and validation tools for Prestige Intelligence's `/library`.
`items/` holds shared mathematical items; `library/` arranges them into pages,
categories, and reading pathways.

Read [CLAUDE.md](CLAUDE.md) before working here. Use
[SCHEMA.md](SCHEMA.md) for content, [WORKFLOW.md](WORKFLOW.md) for builds,
and [articles/README.md](articles/README.md) for narrative articles.
Executable tools and configuration determine current behavior.

## Layout

| Path | Purpose |
|---|---|
| `items/`, `library/` | Canonical content |
| `articles/` | Narrative articles linking library items |
| `briefs/`, `briefs/tasks/` | Agent briefs and templates for generated run tasks |
| `research/` | Designs, manifests, generated tasks, reviews, and receipts |
| `tools/` | Validators, planning, dispatch, and publication tools |
| `tools/autopilot/` | TypeScript workflow engine, stage definitions, and tests |
| `.autopilot/` | Ignored runtime state; each selected state directory belongs to one run |
| `explainer/` | Standalone HTML explainers and video helper |
| `Handover-prompts/` | Historical instructions, not live state |
| `.claude/` | Agent settings; local settings are ignored |

Step 1 is drift review → dependency-safe scaffold construction → an owner-held
final gate. A scaffold batch waits for artifact-complete in-run supplier batches;
independent branches remain parallel. Scaffolders record item readiness and
label each manifest item with its in-run dependency level. The Step-1 gate
checks those levels against the item DAG. Unresolved findings do not trigger
repair agents. Step-3 authors audit and author their assigned items from the
lowest level upward, following the generated item order. A run-local
`owner-authoring-direction.md`, when present, is a mandatory Step-1 Beta input
and overrides stale generated task or design text.
Step 3 assigns one scope reviewer and one scaffold auditor/item author per A/B pair.
New plans place one pair in each batch so its author can follow the complete
batch's dependency-level order.
Its scope-decision check also covers declined source rows in batches outside
the alpha-group assignment, using a fallback `all` receipt.
Authors sharing a batch run sequentially. Across batches, consumers wait for
artifact-complete transitive in-run prerequisites while independent branches run in parallel.
They may supply local definitions/lemmas; substantial prerequisites and potential
published defects go to the owner. Step 4 splices the plan and snapshots content.
Step 5a runs independent reviewers, read-only refuters and routed group
adjudication; Step 5b reconciles dependencies and closes it.
Every agent must acknowledge uncertainty and consult authoritative sources when
unsure. Logical validity governs decisions; sources and judges can be mistaken.
Step 7 must confine repair, adjudication, Sol rejudgment and item gates to the
immutable frontier in `research/<run>-step7-v2/frontier.json`. Sol xhigh batch
adjudicators repair confirmed frontier defects, and three Sol xhigh owner lanes
run concurrently on disjoint frontier impact assignments. Every necessary
frontier repair and review finishes before one central certification pass after
all writers drain. Repeat judgment and repair until the latest round's unique
fatal original items are strictly below 5% of the frozen frontier. Nonfatal
defects also require repair; the threshold only permits the final gate.

Downstream work starts only when a repair changes its `## Statement` or
`## Definition`. Examine direct dependency/reference consumers; continue a
further hop only when a necessary repair changes that consumer's own interface.
Proof-only, citation, dependency and metadata edits do not propagate. Never
pre-expand a blanket transitive closure. Sound consumers remain unchanged.
New packs retain section hashes, and historical evidence stays immutable.
Repeated pending work at an earlier content state holds for operator resolution.

Frontier membership governs draft scope. Published-item repairs remain outside
item gates, rejudgment and adjudication, even when a published ID appears in
the frozen Step-7 frontier. Published consumers use separate maintenance.
After frontier writers drain, three disjoint maintenance lanes examine direct
consumer events before central certification. Each supplier-interface event and
consumer is handled once; gates and unrelated context changes do not reopen it.
A necessary maintenance statement change may propagate another hop, returning
frontier targets to ordinary owner work. No outside target enters Step-7 repair,
adjudication, rejudgment or item gates.

Maintenance reports bind exact edit snippets and explain the affected use,
invalidated claim and minimality. Unreported changes are rejected; mathematical
necessity still requires an honest examination of the argument. Sound consumers
remain unchanged. Frontier repair and separate maintenance must both finish
before certification; candidate records alone do not establish completion.

Steps 7.8/7.10 run the battery with item findings scoped to the frozen frontier.
Outside findings are explicitly excluded, with complete raw diagnostics retained;
they are neither mathematical passes nor frontier blockers. Global integrity,
runtime and unknown failures still block. Three parallel 7.9 lanes repair actual
frontier failures, followed by central recertification and the same gate.
7.9 permits no new items. Earlier repair phases may fully author genuine unmet
prerequisites, with registered ownership and author-origin evidence, without
adding them to the frozen frontier or its rejudgment/gate loops.
Shared metadata writes use short sections under
`tools/step7-shared-write-lock.mjs`; continuations wait for previous writers.
Historical repairs and certificates remain evidence, not fresh repair authority.
Historical V2 fatal decisions lacking a category need exact original evidence
and remain explicitly unclassified; new adjudications provide the category.

Across Steps 1–9 outside this authorized Step-7 loop, every failed gate is
immediately escalated to the owner. A
gate failure never launches another automatic repair, review, author or judge
round. The owner/operator repairs every rejected item, refreshes every
certification invalidated by the repair, and only then uses `retry` to rerun the
rejecting gate. No item can enter the next step until that gate passes on its
repaired, recertified carrier. Normal
first-pass stages and their planned dispatches are unchanged.
An explicitly owner-authorized fatal finding discovered after the freeze uses
the guarded Step-8 recovery command documented in WORKFLOW; it preserves Step 7
and recertifies only the changed suffix before Step 9.
See [WORKFLOW.md](WORKFLOW.md) for source recovery, reconciliation and controls.

Verify active runs against their state directory and Git history.
Historical `research/*RESUME.md` files are not current status.
Past-run counters, coverage limitations and recoverable cleanup records live in
[research/run-telemetry/README.md](research/run-telemetry/README.md).
Owner-authorized historical continuations use the verified checkpoint migration
in WORKFLOW.md: fresh state, current author/review gates and fresh Step 5b closure.
Change generators or templates instead of hand-editing generated run artifacts.

## Commands

Run from this repository's root:

```bash
# Replace RUN with the run name and use its actual state directory.
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run RUN --state-dir .autopilot/RUN

node tools/depcheck.mjs --quiet
node tools/tsx-run.mjs tools/precheck.mts items/ID.md
node tools/tsx-run.mjs tools/articlecheck.mts
node explainer/serve.mjs
```

Omitting precheck's item paths checks all proof-bearing items. Batch authors
must supply their explicit item paths. Read WORKFLOW before steering a build.

The renderer and server live in the separate `prestige-intelligence` checkout.
[tools/paths.mjs](tools/paths.mjs) locates it; set `PRESTIGE_APP_DIR` if needed.
The app uses `MATH_LIBRARY_DIR` to locate this content. TypeScript tools use
`tools/tsx-run.mjs`, which selects the app's loader or a global TypeScript
fallback. Rendering and proof checks also need the app's parser/dependencies
and normative `worker/src/precheck.ts`.
