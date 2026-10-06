# Active defect ownership

`defect-ledger-ownership.mjs` shares the existing append-only ledger ownership
projection between `defect-ledger check` and Step5 routing. A later row may
explicitly `supersedes` earlier rows for the same run and subject. Original rows
remain immutable history; the latest active row alone owns the adjudication.
Native verdicts and severity labels are unchanged by this projection.

Both callers validate mappings before accepting ownership. References must be
nonempty, unique and backward to actual earlier rows for that exact run and
subject. Missing/future references, self references, cycles and different
subjects/runs remain errors. Step5 checks only its current run's ownership
history, then requires every active owned defect to have its exact ordinary
decision reference. A `supersedes` field never supplies a mathematical repair,
changes a verdict or stamps current evidence.

This prevents superseded historical IDs from creating spurious `ledger-unowned`
failures while retaining the original findings and all ordinary gate duties.
Do not invent additional decisions for an inactive duplicate row. A genuinely
active source correction on a previously untouched carrier instead requires
its own explicit owner supplemental gate decision, backed by the actual source
correction report and current hashes.

Verification: `node --test tools/defect-ledger-ownership.test.mjs` and the
Step5-routing/defect-ledger regression suites exercise genuine append-only
corrections, unchanged original bytes and rejected invalid mappings.
