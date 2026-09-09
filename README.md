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

Step 1 is drift review → scaffold construction → an owner-held final gate.
Scaffolders record item readiness; unresolved findings do not trigger repair agents.
Step 6 reviews authored content directly through group adjudicators, without
reader/refuter stages. Local definitions and lemmas may supply missing dependencies;
the cross-batch audit and closure follow unchanged.
See [WORKFLOW.md](WORKFLOW.md) for source recovery, reconciliation and controls.

Verify active runs against their state directory and Git history.
Historical `research/*RESUME.md` files are not current status.
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
