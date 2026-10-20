# Root boundary integration collector (staged only)

`collect.mjs` is a mechanical, root-only integration helper. No live contracts, sources, runtime state, hashes, stamps or gates have been changed by this packet. It does not perform mathematical review or confer native credit.

The original inventory has **910 items and 3,876 distinct flagged item/axis pairs**, over 95 affected batches. Both original diagnostic files are input guards. The root reader registry establishes identity/ownership only; each packet must separately substantiate a full-source-read claim and an exact current source guard. Source text is read only for byte/hash comparisons, not as a new mathematical review. Actual per-item read ledgers from margin/UCRL/spectral are supported, with author identity, complete-read claim, flagged-axis coverage and genuine current-byte archives checked.

## Root sequence

1. Run a progressive dry run. This never writes live files. An optional output must be a new path; existing archives are never overwritten.

   ```sh
   node research/machine-learning-all-101-2026-10-19-owner-boundary-root-integration/your-proposal/collect.mjs inspect --reviews research/machine-learning-all-101-2026-10-19-owner-boundary-reader-registry.json --output /tmp/boundary-progress-NEW.json
   ```

2. Resolve every reported missing packet, missing axis, duplicate operation, unknown schema, absent actual read claim, source mismatch, before-object mismatch and unresolved gap. Rerun after packet authors finish or refresh guards. In particular, source repairs to batches22/67 require genuine refreshed reader guards; old snapshots remain history. Assignment alone never closes a read requirement.

3. Only root should seal, after all pending source repairs and all 910 items are covered. Seal recomputes `itemHashGuard` using the actual tool and row hashes using the exact boundary-audit projection. It binds the identified existing reader and row-specific existing reason, not a new review by root. Repeated normalized review reasons across three or more items are rejected under boundary-audit's default threshold.

   ```sh
   node research/machine-learning-all-101-2026-10-19-owner-boundary-root-integration/your-proposal/collect.mjs seal --reviews research/machine-learning-all-101-2026-10-19-owner-boundary-reader-registry.json --output /tmp/boundary-seal-NEW.json
   ```

4. Root inspects the seal, creates an explicit authorization JSON with `actor: "/root"`, `run: "machine-learning-all-101-2026-10-19"`, `action: "apply-boundary-field-cas"`, and `seal_sha256` equal to the **raw seal file SHA-256**. Then root may invoke the apply command below. This proposal author has not invoked it on the repository.

   ```sh
   node research/machine-learning-all-101-2026-10-19-owner-boundary-root-integration/your-proposal/collect.mjs apply --seal /tmp/boundary-seal-NEW.json --authorization /tmp/boundary-root-authorization.json --archive research/ROOT-CHOSEN-NEW-BOUNDARY-ARCHIVE
   ```

5. Root owns subsequent actual audits, current checks, binding/rehashing and run transitions. No such acceptance follows from collector success.

## Packet selection and normalization

The current root assignment registry controls the disjoint owner directories (including policy31–35 and neural child11–17). Hilbert18–22 prefers `packet-index-current-bindings.json` when present and otherwise uses `packet-index.json`: currently V2 for18–21 and V3 refreshed source bindings for22. Historical packets are excluded. Root's current assignment file is hashed into the seal. Other ready packet names supported are batch JSON from/to rows, batch `packet.json`, boundary-object operations, object-replacement operations, margin `field_operations`, calibration multi-batch `field-cas-23-24-25.json`/`field-cas-26.json`, and Wasserstein `boundary-object-CAS.json`. Each multi-batch operation is selected by its exact contract target; no foreign batch operation is imported.

Every expected axis must occur exactly once. The exact full before-boundary object and source bytes/hash must match. Whole-object proposals are normalized into owned boundary-field replacement while preserving unknown boundary keys. Known rationale fields omitted by the author's replacement are removed deliberately, so an obsolete `reason` cannot mask new checked `evidence` in the audit's `reason ?? evidence` projection. Unknown-field changes are rejected. Field-level packets additionally check each explicit field presence/value precondition. Source-only repair operations are unsupported and rejected rather than executed.

Apply starts from fresh current contract JSON, replaces only selected boundary objects, verifies all non-boundary fields unchanged (including **entire foreign `finite_smoke` arrays**), archives exact current contract bytes with exclusive creation, and changes only the selected JSON boundary-object spans in the original raw contract text. This preserves **every byte outside those objects**, including the current finite-smoke arrays, their escaping, numerical spelling, whitespace and unknown fields. It writes adjacent exclusive temporary files followed by atomic per-file rename. Duplicate JSON keys are rejected. Contract raw hashes at seal time prevent concurrent smoke changes from being lost: if they change after sealing, reseal from current contracts. The archive's transaction manifest records before/after hashes and temporary filenames. Multi-file atomicity is **not** claimed; an interruption requires root recovery using that manifest and before archives.

## Additional explicit evidence records

The assignment registry may additionally contain `records` entries when a packet's existing full-read claim lives in another recorded artifact:

```json
{
  "packet": "research/EXACT-READY-PACKET.json",
  "reviewer": "/root/ACTUAL_READER",
  "confirmed_full_source_read": true,
  "items": ["EXACT_ITEM_ID"],
  "evidence": [{"path": "research/EXISTING-READ-RECORD.json", "claim": "Exact existing quote recording the actual full-source read."}]
}
```

The exact quote must occur in the evidence file; its bytes are guarded in the seal. Root supplies actual facts, not placeholder claims. Explicit records take precedence over schema-specific extraction of packet/read-list claims. A reviewed item list must be duplicate-free and cover every operation in that packet.

Historical gap entries with an explicit root-application resolution are checked against the real receipt's path/after hash and exact current source bytes. Other entries can be closed by root's `gap_resolutions` entries: `{packet, gap_sha256, resolved:true, evidence:[{path,claim}]}`. `gap_sha256` is SHA-256 of the recursively key-sorted JSON gap object; the dry-run error prints it. The existing resolution receipt must contain the exact quote and is guarded. This does not bypass fresh source/before-object guards. Leaving an old gap entry with no explicit resolution blocks sealing.

## Focused verification

`node collector.test.mjs` passed using an isolated temporary repository with 910 synthetic entries. It checks root authorization, duplicate-axis rejection, source/contract CAS failure before any archive/write, exact row-hash grammar, unknown-field preservation/rejection, whole foreign finite-smoke arrays, unrelated top/entry fields, genuine before archives, and per-file replacement. The synthetic tree is removed afterward. This is a mechanical test, not a run gate or mathematical check.

`progress-*.json` are time-specific dry-run reports, not acceptance or reading claims. Packet authors may refresh them after this handoff; rerun against current disk before sealing.

## Mandatory root requirement52

Sealing also requires an explicit root registry `required_clearances` entry independent of historical packet gaps:

```json
{
  "key": "particle-model-width-zero-52",
  "resolved": true,
  "receipt": "research/ACTUAL-ROOT-APPLICATION.json",
  "after_raw_sha256": "ACTUAL-CURRENT-RAW-SHA256",
  "consumer_checks_complete": true,
  "owner_bindings_refreshed": true,
  "evidence": [{"path": "research/ACTUAL-OWNER-FOLLOWUP.json", "claim": "Exact existing substantive followup quote."}]
}
```

This is mandatory because root confirmed the width-zero Definition gap even before the old52 packet recorded it. Root supplies the actual receipt after application and the actual owner followup after all consumer checks and guard refresh. The collector requires a matching source path/after hash in the root receipt and current source bytes; the refreshed packet/ledger guards must pass independently. Neither assignment nor receipt existence alone closes the requirement.

## Frozen current proposal and global analysis

`normalized-plan.json` is the complete **prospective-only** normalized plan, with all 910 items / 3,876 flagged axes and zero packet/CAS/source/clearance errors. It has not been applied and is not the root seal. `final-report.json` records exact artifact hashes. `global-prospective-final.json` analyzes all101 current contracts plus proposed rows:9,624 rows,88 cross-item template candidates,88 fully bound groups,0 remaining unbound groups and0 normalized review-reason reuse groups. No native gate was invoked.

Root can reproduce the mechanical global analysis before sealing:

```sh
node research/machine-learning-all-101-2026-10-19-owner-boundary-root-integration/your-proposal/collect.mjs analyze --reviews research/machine-learning-all-101-2026-10-19-owner-boundary-reader-registry.json --output /tmp/boundary-global-prospective-NEW.json
```

The `seal` command also requires this prospective global normalization to have no remaining unbound/reused-review candidates. It guards all101 current contract inputs and the actual source bytes used to validate global template bindings. It does not run contradiction detectors, validate mathematical conclusions, substitute for root's actual review, or run any native gate.

The focused synthetic test also verifies exact foreign finite-smoke bytes containing alternate JSON string escapes and number spellings (`\\u0061` and `1.00`), and rejects duplicate JSON keys. Raw-span replacement preserves these bytes even where whole-document JSON serialization would change them.
