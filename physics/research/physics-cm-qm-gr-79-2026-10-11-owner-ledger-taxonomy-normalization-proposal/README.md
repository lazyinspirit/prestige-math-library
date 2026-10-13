# Guarded native-ledger normalization proposal

`normalize-ledger.py` regenerates a proposal from the fresh current canonical ledger. Default execution is read-only for the canonical ledger. It snapshots full original bytes, inventories exact native current-run schema errors, preserves every row/ID/order/other-run byte and every existing evidence/severity/decision reference, and validates the proposed snapshot with the native closed-schema checker. Unknown mappings fail before a global write.

From the physics workspace:

```bash
python3 research/physics-cm-qm-gr-79-2026-10-11-owner-ledger-taxonomy-normalization-proposal/normalize-ledger.py
```

Root may apply only after final native/adopted ledger writers drain and explicit authorization:

```bash
python3 research/physics-cm-qm-gr-79-2026-10-11-owner-ledger-taxonomy-normalization-proposal/normalize-ledger.py --apply --writers-drained
```

Apply additionally checks live native writer processes, exclusively acquires the native append lock without stealing it, rereads and archives fresh complete before bytes, and verifies the canonical ledger has not changed before replacing it. It validates the proposed and actual final ledger natively and records full before/after hashes, exact operations and a diff. No content edits, gates, controls or commits are performed.

Canonical aliases preserve actual existing role/disposition semantics. Human locations remain in `location_note`. Unsupported descriptive subtypes use the native `other` fallback with the exact original subtype and full original evidence copied into `subclass_note`; existing evidence itself remains unchanged. The twelve batch52 `rigor` rows are canonical accuracy defects already established in their evidence. All original fields and histories remain in the complete before archive and per-row original hash/provenance. Missing original `at` is explicitly recorded as absent; application uses its fresh owner correction timestamp without inventing an original observation date.

Two additional native batch4 `resolved` rows appeared after the initial proposal. Exact guarded mappings to `fixed` are supported by their actual recorded already-completed producer3 repairs and precise native decision references. Any other `resolved` value remains unsupported and stops regeneration for owner disposition.

The latest successful dry-run checks938 current-run rows with0native schema errors, changing584metadata rows; no global write occurred. Workers may append more rows, so root must regenerate after final drain. The initial snapshot/proposal is919rows,574changes and0schema errors and is retained for history. Locations now use actual page identity, so an item whose broad legacy location mentions a companion page is not mislabeled as page prose.
