# Prestige Math Library

The Prestige Math Library is the Markdown corpus and validation tooling used by
the Prestige Intelligence application's `/library`. Its production renderer and
web server are in the separate `prestige-intelligence` checkout, located by
`tools/paths.mjs` and configured to read this checkout through
`MATH_LIBRARY_DIR`.

## Source and document map

`items/` is the canonical source for mathematical item bodies. `library/`
places those items in category pages and, where present, reading pathways.

| Need | Start here |
| --- | --- |
| Item/page contract | [SCHEMA.md](SCHEMA.md) |
| Build and publication runbook | [WORKFLOW.md](WORKFLOW.md) |
| Repository operating rules | [CLAUDE.md](CLAUDE.md) |
| Article-specific contract | [articles/README.md](articles/README.md) |

The executable tools and configuration are authoritative for current behaviour;
documentation describes their intended contract.

## Repository map

- `.claude/` — shared agent-tool settings; `settings.local.json` is ignored
  machine-local configuration.
- `.autopilot/` — ignored runtime state, logs, control file, reports, and
  persisted sessions for the current build driver. Do not edit it as content.
- `articles/` — narrative “Rabbit holes” Markdown that links into library
  items; it has a separate contract and checker.
- `briefs/` — reusable role briefs and task templates. `briefs/tasks/` is the
  source for per-run task files rendered into `research/`.
- `explainer/` — self-contained HTML explainers and their video-render helper.
- `Handover-prompts/` — retained prompts from earlier sessions; historical
  context, not live run state.
- `research/` — design inputs, run manifests, generated task material,
  receipts, and retained build evidence. Dated run artefacts document
  history; change their generating template or tool rather than hand-editing
  generated output.
- `tools/` — Node-based validators, render checks, planning utilities, and
  dispatch helpers. Some use the app checkout's parser, TypeScript loader, or
  precheck implementation through `tools/paths.mjs`.
- `tools/autopilot/` — TypeScript control plane for the staged build: CLI,
  stage definitions, runtime implementation, and its test suite.

## Safe entry points

Read `CLAUDE.md` before changing the corpus or tooling. For focused work, use
the contract named in the table above rather than inferring rules from old run
artefacts.

```bash
# Inspect the current build state without steering it.
(cd tools/autopilot && node --import tsx bin/autopilot.mts status --repo ../..)

# Validate the item/page graph.
node tools/depcheck.mjs --quiet

# Validate all narrative articles.
node tools/tsx-run.mjs tools/articlecheck.mts

# Preview the static explainers only.
node explainer/serve.mjs
```

For an item proof-format check, run
`node tools/tsx-run.mjs tools/precheck.mts [items/file.md ...]`; omit file
arguments to check the full item corpus. Consult [WORKFLOW.md](WORKFLOW.md)
before creating, starting, pausing, or otherwise steering a build.
