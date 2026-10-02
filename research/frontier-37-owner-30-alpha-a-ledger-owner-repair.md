# Group-a final defect-ledger owner schema review

Run: `frontier-37-owner-30`. Recorded 2026-10-01. Scope: final group-a rows only.

## Verified final state

Native group a drained successfully at `2026-10-01T12:51:43.816Z`. Read the current Alpha report, its 15 decisions, and the schema and mutation routes in `tools/defect-ledger.mjs`. The report's Local checks section records normalization of group-a rows before completion. Earlier concurrent reports of invalid locations and missing evidence paths do not describe the final group-a rows.

The 23 final rows pass the prescribed schema unchanged. All evidence entries have paths, all local paths exist, and all 21 defect IDs referenced in the 15 current group-a decisions belong to these rows. The schema accepts `verification step 1.3` and `verification step 3.1` through `CURRENT_STEP5_LOCATION_RE`. The Kronecker row's source URL is already a populated evidence path accepted by the tool. No new evidence or audit was invented.

## Concurrency and actual checks

The CLI supports append, validate, stats, render and check; it has no row-update command. Appending a superseding row would retain an invalid historical row under validate, so it would not fix a schema error. No mutation was necessary here. Acquired the prescribed `research/defect-ledger.jsonl.append-lock` directory, re-read the current shared ledger while holding it, extracted only final group-a rows to a temporary focused ledger, then released the lock. No ledger row was mutated and no generated view rewritten. Active other-group rows, mathematical source, reports, decisions, findings and receipts remain untouched.

Actual focused command: `node tools/defect-ledger.mjs validate --run frontier-37-owner-30 --ledger /tmp/frontier-37-owner-30-alpha-a-focused-ledger.jsonl` returned exit 0, **23 rows checked, 0 errors**, both before and after the locked re-read. Additional path-existence and decision-reference assertions passed. No global gate, mathematical review wave, source repair, disposition change or adjudication was attempted.

## Exact row IDs and changes

Every row below is unchanged by this owner review. Defect descriptions, severity, dispositions, timestamps and history were preserved.

| Defect ID | Accepted location | Owner change |
|---|---|---|
| `frontier-37-owner-30-5a-a-kronecker-power-conjugates` | `facts-block` | None |
| `frontier-37-owner-30-5a-a-q-sqrt-ten-quotient-signs` | `verification step 1.3` | None |
| `frontier-37-owner-30-5a-a-regulator-deleted-row-signs` | `verification step 3.1` | None |
| `frontier-37-owner-30-5a-a-cyclotomic-page-discriminant-route` | `page-summary` | None |
| `frontier-37-owner-30-5a-a-touched-2-minkowski-null-overlaps` | `proof-step` | None |
| `frontier-37-owner-30-5a-a-touched-2-minkowski-measure-supplier` | `facts-block` | None |
| `frontier-37-owner-30-5a-a-touched-3-product-formula-f1-tag` | `proof-step` | None |
| `frontier-37-owner-30-5a-a-touched-3-unit-lattice-absolute-growth` | `proof-step` | None |
| `frontier-37-owner-30-5a-a-touched-3-regulator-pell-generator` | `statement` | None |
| `frontier-37-owner-30-5a-a-touched-3-zsqrt5-codomain` | `proof-step` | None |
| `frontier-37-owner-30-5a-a-touched-3-zsqrt5-group-distinction` | `proof-step` | None |
| `frontier-37-owner-30-5a-a-page-3-choice-summary` | `page-summary` | None |
| `frontier-37-owner-30-5a-a-page-3-sunit-saturation` | `page-summary` | None |
| `frontier-37-owner-30-5a-a-touched-4-second-supplement-parity` | `facts-block` | None |
| `frontier-37-owner-30-5a-a-page-4-monogenic-supplier` | `page-summary` | None |
| `frontier-37-owner-30-5a-a-page-4-frobenius-inputs` | `page-summary` | None |
| `frontier-37-owner-30-5a-a-refuter-3-1` | `proof-step` | None |
| `frontier-37-owner-30-5a-a-refuter-4-1` | `facts-block` | None |
| `frontier-37-owner-30-5a-a-refuter-4-2` | `remark` | None |
| `frontier-37-owner-30-5a-a-refuter-4-3` | `statement` | None |
| `frontier-37-owner-30-5a-a-refuter-4-4` | `facts-block` | None |
| `frontier-37-owner-30-5a-a-refuter-4-5` | `statement` | None |
| `frontier-37-owner-30-5a-a-refuter-4-6` | `facts-block` | None |

## SHA-256 evidence

- Shared ledger bytes at locked read: `1075b3cefe9c02dd27fd9fc12336e30e293b92b4c86137b0c669495168748c3b`. Other groups may append later.
- Focused 23-row snapshot: `c450f0039f747ddf13def6b8b82bce26eb7a4167849e12fb40dbb6acbc050252`.
- `research/frontier-37-owner-30-alpha-a-5a.md`: `959519fbf014562dbe7ed41473170ddaa1cb48b35ffb8ef51c65addcea0c745b`.
- `research/frontier-37-owner-30-alpha-a-5a-decisions.json`: `f5af71adf3be5aed7e94ff9093dd3643c98659249de499228d4d4a3d0925a4cc`.
- `tools/defect-ledger.mjs`: `8dd0c6611f9ff7dc7cf42ef85e84c308719fce14e4a1bd0d515360152515bed5`.

## Handoff

The bounded final group-a schema obligation is satisfied by the current rows; no owner mutation was warranted. Engine closure remains the orchestrator’s responsibility.
