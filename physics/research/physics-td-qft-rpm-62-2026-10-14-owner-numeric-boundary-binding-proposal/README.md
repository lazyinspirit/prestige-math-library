# Root numeric boundary-binding helper proposal

Run: `physics-td-qft-rpm-62-2026-10-14`. This is an unexecuted implementation
proposal for root use after contract integration and numeric metadata edits.
The agent wrote only this research helper and documentation. It did not execute
the helper, run tests, change sources or shared contracts, or perform gates or
recertification. Root's actual execution supplies the result and receipt.

From the **physics workspace**, root can inspect the proposed changes:

```sh
node research/physics-td-qft-rpm-62-2026-10-14-owner-numeric-boundary-binding-proposal/bind-numeric-boundaries.mjs \
  --numeric-receipt research/physics-td-qft-rpm-62-2026-10-14-owner-step2-numeric-metadata/2026-10-14T12-13-58-524Z/receipt.json \
  --dry-run
```

Root alone applies with the explicit writer-drain assertion:

```sh
node research/physics-td-qft-rpm-62-2026-10-14-owner-numeric-boundary-binding-proposal/bind-numeric-boundaries.mjs \
  --numeric-receipt research/physics-td-qft-rpm-62-2026-10-14-owner-step2-numeric-metadata/2026-10-14T12-13-58-524Z/receipt.json \
  --apply --writers-drained
```

An optional `--receipt-sha256 HEX` binds a numeric receipt already hashed by root.
Neither mode writes sources, manifests, plans, readiness, or native state. The
default mode is read-only; only `--apply --writers-drained` permits shared writes.

The helper reads the current 64 manifest and contract documents at root execution,
checks unique ownership of the 686 current local items, and selects only source
IDs recorded in the explicit numeric receipt. For those changed sources alone it
compares the receipt's archived `.before` bytes and current bytes with the known
before/after hashes, proves the body returned by the normative frontmatter parser
is exactly unchanged, verifies both carriers are local draft items, and checks
that `dependency_level` is the only changed YAML property. The current manifest
level must equal the receipt's new level. No unaffected source is read or hashed.

An unproved remark with `provenance.proof: not-applicable` and no supplied argument
under the shared `isProofBearing` predicate may lack a proof contract. The helper
still performs every numeric source/archive/body/ownership guard for that item;
it skips only the absent contract and records the exemption. Existing contracts
must remain in their owning scope, and missing nonexempt contracts still fail.

For an existing `boundaries[].case_scope.current_raw_sha256` belonging to one of
those IDs, an exact before-hash becomes the **receipt's** after-hash. An already
matching after-hash is retained unchanged. An existing case scope with a missing,
invalid, or unexpected hash fails with the item/case and expected values. An
explicit source/root/provider field must identify that same physics item.
Historical unbound manual rows remain unbound; no new case scope is fabricated.

Validation collects all unexpected, missing, or malformed bindings across the
entire numeric changed-source selection before refusing. Root execution writes
an immutable grouped research diagnostic under `validation-reports/` and a latest
pointer copy `numeric-binding-validation-failure.json` before any shared write.
Each group includes the verified numeric preimage archive as known byte authority.
An older unexpected hash has no authority established by that receipt: the
scientific owner must identify any older archive and approve the focused metadata
repair. Unknown hashes are never accepted or silently rewritten.

Only the selected JSON string-value spans are replaced, so all other bytes remain
identical: case flags, roles, source excerpts, manual and historical worksheets,
unknown fields, and formatting. A parsed-object comparison independently checks
that the selected hash fields are the entire semantic difference. The helper
hashes only affected contract preimages/outputs for its own write receipt, never
the full source frontier. It uses file identities to refuse input changes during
preparation and exact contract-byte comparisons immediately before each commit.

After all validation, root execution archives affected contract preimages, stages
exclusive temporary files and commits by atomic per-file rename. It writes a root
receipt under `root-executions/TIMESTAMP/`. Failure attempts rollback only where
current bytes still match the helper's own output; concurrent changes are left
intact and reported for root recovery. A second execution is idempotent and lists
already-current bindings without writing their documents. Atomicity is per file;
the archive and failure receipt support recovery across a multi-file commit.
