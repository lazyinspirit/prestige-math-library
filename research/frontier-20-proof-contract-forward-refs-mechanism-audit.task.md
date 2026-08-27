# Independent mechanism audit: proof-contract forward references

Audit the current uncommitted change to `tools/proof-contract.mjs` independently.
This is a read-only review: do not edit any file and do not resume or otherwise
intervene in the active `frontier-20` autopilot run.

## Context

The strict proof-contract validator rejected three citations in
`ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals` even though the
item declares the later-page sources in `forward_refs` and `tools/fwdcheck.mjs`
accepts and closes them. The validator previously built its declared-citation
set from only `deps` and `justified_by`. The change adds `forward_refs` to that
set and updates its diagnostic and `WORKFLOW.md` documentation.

Focused checks already completed successfully:

- `node --check tools/proof-contract.mjs`
- strict proof-contract check for the affected item: 0 errors, 0 warnings
- strict proof-contract check for all 393 items: 0 errors, 0 warnings
- `node tools/fwdcheck.mjs`: all forward references declared, strictly forward,
  closed by planned later pages, off the spine except orientation links, and
  acyclic

## Review requirements

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, and the relevant portions of
`WORKFLOW.md`. Inspect the actual diff plus the implementations of
`tools/proof-contract.mjs` and `tools/fwdcheck.mjs`.

Determine whether accepting a proof citation declared through `forward_refs`
is schema-correct and whether the remaining proof-contract checks still require
an actual linked source, an exact source quote, and a valid reference. Confirm
that ordering, closure, spine, and cycle safety remain enforced by
`fwdcheck.mjs`. Look specifically for a bypass or regression caused by the
change.

Return a concise report with:

1. `VERDICT: PASS` or `VERDICT: FAIL`.
2. Any concrete defect, with file and line evidence.
3. Whether the focused checks are sufficient for this narrow mechanism change.

