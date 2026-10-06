# Step 5b impact scope correction

Owner repair scope: `tools/impact-audit.mjs` only. Read `CLAUDE.md` and
`README.md` fully. Root owns workflow documentation, the run-local stage
wrapper, receipt normalization, implementation adjudication, and gate closure.

The tool now accepts the shared `--items-file` selector. The shared parser
rejects missing paths, unreadable files, empty/malformed arrays and duplicate
IDs; the tool rejects unknown canonical item IDs against the complete loaded
item graph. All items, aliases, dependency edges and direct citation channels
remain loaded before selecting subjects.

For each changed source, the existing logical traversal (including the existing
`--direct-boundary` semantics) and direct citation lookup run against that full
graph. A source event remains in scope exactly when its source is selected or
its actual required consumers contain a selected item. Logical consumer lists,
direct citation consumer lists, required reviews, and changed-interface
template/receipt expectations then describe this scope consistently. External
suppliers with selected consumers remain source events. Defaults without a
selector remain unchanged.

Every supplied receipt disposition still undergoes the existing strict shape,
duplicate, status and note validation. No pending disposition is waived or
invented as passing. Root will preserve the authentic unscoped receipt as
history and normalize the live scoped receipt separately.

Focused authorized computation, with no receipt validation or write:

```sh
node tools/impact-audit.mjs \
  --touches research/frontier-40-geometry-braids-rep-27-touches.json \
  --from pre-author --to post-5a --direct-boundary \
  --items-file research/frontier-40-geometry-braids-rep-27-gate-item-scope.json \
  --json
```

The native fixed Step 5b window computation returned 907 changed source events
and 786 required frontier consumers out of the 895 selected items. Twelve
external changed suppliers remain relevant source events. There are zero
outside consumers in the computed required set. Comparing this set with the
existing live receipt yields exactly 492 `still-licensed` and 294 `pending`
dispositions. This is a scope computation, not an accepted receipt or a
passing gate. Its JSON output is temporarily available at
`/tmp/frontier-40-geometry-braids-rep-27-owner-impact-scope-computation.json`.

No source/mathematical edits, tests, broad review, receipt mutation, or native
retry were performed. The genuine 294 pending frontier subjects remain for
their assigned source/use audit owners.
