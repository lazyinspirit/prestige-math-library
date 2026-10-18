# Frozen Step3 ledger schema normalization

`step3-ledger-normalization-history.mjs` supplies an explicit owner historical
bridge only for the ledger comparison in `step3-close.mjs verify`. It is never
used by `close`: the original closure, its artifact set, native results and
frozen row hash/count remain unchanged. Ordinary current ledger schema checks
still apply. This bridge grants no mathematical acceptance, source review,
native execution coverage, new repair or resolution.

A version-1 `owner-step3-ledger-schema-normalization-history` receipt at
`research/RUN-step3-ledger-normalization-history.json` binds the actual original
closure, genuine successful native `tool-step3-close.result.json`, exact
original and normalized selected-row arrays, actual paused/drained recording
state, original row preimages, and applied normalization evidence. It states
`authorized_by: owner`, `owner_identity: /root`, `historical_only: true`,
`mathematical_acceptance: false`, `native_coverage_adopted: false`, a real
`recorded_at` and a substantive reason. File references are
`{path,sha256}` with exact raw SHA256 and regular nonsymlink research files.

The original selected array must match the unchanged closure's exact
`step3_ledger_rows_sha256` and count. Original and normalized arrays must have
the same unique IDs in the same order; the latter must equal the actual
current selected ledger rows. Every changed row has a bound authentic
preimage, exact before/after object hashes, sorted changed fields and a
substantive normalization reason. Unchanged rows are compared in full.

Only the helper's finite legacy taxonomy aliases, `alpha` to `group-alpha`,
a missing timestamp to the explicit value `unknown`, and specified legacy
location aliases are admitted. A legacy evidence string may become one
`{path,note}` entry only when the full original string survives exactly as its
note and the path is the original report/decision report. Newly added subtype
notes must preserve the original subtype name. Root migration annotations
must retain the missing-timestamp fact and bound original archive. Existing
timestamps, IDs, subjects, severities, evidence meanings, references, repair
confidence and all other semantic fields cannot change.

The single disposition alias `escalated` to `open` applies only to an original
`status: open` row already superseded by an unchanged same-subject fixed row
in that exact frozen inventory. It creates no new closure or resolution. All
other disposition edits fail. Additional, removed, reordered, duplicated or
unlisted rows, unsupported fields, unbound references and unknown mappings
fail closed.

`validateStep3LedgerNormalizationHistory(root,run,row,closure,currentRows)`
checks a sealed receipt without writing. `recordStep3LedgerNormalizationHistory`
accepts a payload, validates against the actual selected current rows, and
writes the immutable root receipt only at actual paused/drained own5.9 with
an identical archived state. Root owns recording, supporting-file retention,
ordinary validation and native reloading/recertification. No historical
report, original closure or canonical ledger is rewritten by either API.
