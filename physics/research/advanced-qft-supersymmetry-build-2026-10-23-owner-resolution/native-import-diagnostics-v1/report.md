# Scoped current-original drift diagnostics — Root code review requested

The actual repeated `physics-content` import failure stops at the first
unaccepted current-original raw hash change. This repair collects those same
mismatches in the existing selected-original loop and throws once at its end,
with the existing diagnostic text repeated for each path in sorted order.
No accepted successor, pin, import, classification or checker-equivalence rule
was added or changed.

Exact changed files:

- `tools/physics-support/physics-imports.mjs`: one array, replace the current-original hash-mismatch throw with collection, then sorted failure after that loop. The local pin loop and all other guards remain intact. Single-mismatch diagnostic text remains byte-for-byte equivalent.
- `tools/physics-support/original-maintenance.test.mjs`: five focused fixture regressions cover multiple reached originals including a page, deterministic order despite reversed receipt order, unrelated exclusion, exact accepted-original omission, successful return count, local pin tampering, immediate publication/kind/domain/identity failures, and the CLI's failing exit status.
- `physics/WORKFLOW.md`: one paragraph under reviewed original mathematics maintenance explains diagnostic scope and hard-failure precedence.

The input raw hashes for review are in `review-inputs.json`. No content,
original supplier, pin, authority receipt, engine control or native gate was
modified or invoked. All fixture writes are temporary synthetic test data.
The diagnostic aggregate provides no mathematical review or acceptance.

Limits: aggregation covers only raw hash mismatches of the originals already
selected by the existing loop. Exact accepted current hashes remain excluded;
category handling is unchanged. Missing-source, identity, home, metadata,
classification, local-pin and publication failures retain immediate errors.
A hard failure can therefore preempt or interrupt the loop and intentionally
prevent a purported complete drift list. The successful return count and CLI
exit status retain their previous meanings. No unrelated original is added
as a subject, and there is no reimport or successor acceptance mechanism here.

Actual verification:

- The related original-maintenance, category-projection and original-rendering-maintenance suites passed all 111 tests, exit 0 (`related-test-summary.json`, full output tool-streamed).
- After adding the explicit exact successful-count assertion, the affected original-maintenance suite passed all 12 tests, exit 0 (`focused-tests.tap`).
- `node --check tools/physics-support/physics-imports.mjs` and scoped `git diff --check` both exited 0.

Root code review is required before a local commit of these exact three paths.
No commit has been made for this change. Root owns actual failed-check diagnosis,
scientific dispositions, authority updates, fresh native preparation and gates.

## Reviewed code commit completed

Root's final acceptance is `root-code-review.json`. All three current file
SHA256 values matched the reviewed values before committing exactly those
paths in `34cce848fe54d8486c9eb96c46281240b0b30525`. Diffstat: physics WORKFLOW
+10, original-maintenance tests +72, physics-imports +6/-1; total three files,
88 insertions and one deletion. The index was empty afterward. No research,
source, contract, import or authority files were staged, and no further content
check was run after commit. Root owns executing the actual failed
`physics-content` command to obtain its scoped diagnostics.
