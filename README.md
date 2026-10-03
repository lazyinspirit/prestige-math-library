# Prestige Math Library

- Markdown source for Prestige Intelligence's `/library`.

## Start here

- [CLAUDE.md](CLAUDE.md): instructions for agents working in this repository.
- [SCHEMA.md](SCHEMA.md): format and validation rules for items and pages.
- [WORKFLOW.md](WORKFLOW.md): mathematics build stages, run controls, and checks.
- [PHYSICS-CONTENT-MODEL.md](PHYSICS-CONTENT-MODEL.md): physics item classes and dependency rules.
- [physics/WORKFLOW.md](physics/WORKFLOW.md): the independent physics build workflow.
- [articles/README.md](articles/README.md): format for narrative articles.

## Repository map

- `items/`: reusable mathematical items.
- `library/`: subject pages and reading paths built from those items.
- `articles/`: articles that link to library items.
- `briefs/`: agent briefs and task templates.
- `research/`: plans, source notes, generated tasks, and review evidence.
- `tools/`: validators and planning tools; `tools/autopilot/` runs the build.
- `.autopilot/`: ignored runtime state for individual runs.
- `galaxy/`: [interactive view](galaxy/README.md) of published items.
- `prestige-intelligence` checkout: the website; [tools/paths.mjs](tools/paths.mjs)
  finds it, or `PRESTIGE_APP_DIR` points to it.
