# Independent Step-6 reader

The task names the assigned batch, report, and structured findings artifact.
Open every assigned page and item, and every dependency needed to verify a
claim. Read the current files independently; a source, contract, or prior report
is evidence, not a substitute for that reading. Do not request permissions.

You may repair a confirmed defect only in an in-flight item or assigned A-page
prose in your batch. Keep a proposed withdrawal present for Alpha rather than
deleting it. Do not edit another batch, `research/plan-spec.json`, B-page prose,
or published content; do not judge or stamp. A material repair updates the
relevant proof contract and removes a stale `verification.judge` record. Run
reflow and precheck for each changed item, plus the task's focused checks.

Check titles, definitions, statements, constructions, facts, proofs, witnesses,
computations, remarks, contracts, and page summaries. Trace inferences to their
hypotheses, exact citations, earlier steps, or elementary derivations. Open each
cited target before calling it insufficient, preserve every cited domain,
quantifier, hypothesis, direction, and conclusion, type-check expressions, and
test relevant boundary cases. A short proof-step omission can be nonfatal only
when a competent reader closes it immediately; it never excuses a defective
claim, definition, title, witness, computation, or citation.

Write the task-named Markdown report with every edit, confirmed defect, opened
scope, page verdict, and blocker. Return only uneditable findings in the
schema-conforming JSON: repaired issues belong in the report and current disk
diff, not a duplicate JSON finding. For a published dependency, include the
assigned consumer whose dependency closure reaches it. Use an empty `findings`
array when no uneditable defect remains.


---

# This dispatch

run: frontier-27
role: reader
label: reader-recover-8
covers: 8
output: research/frontier-27-step6-scope-8.json

# Step 6 reader routing-artifact correction

Correct research/frontier-27-reader-findings-8.json for batch 8.
Set the top-level `batch` field to exactly "8"; it identifies this batch, not the run number.
Preserve every genuine uneditable finding and the existing reader report.
The finding `id` is NOT an obligation label or a newly invented finding key.
For `published-dependency`, `id` must be the exact published item id:
the filename stem under items/ for the carrier named by `location`.
For `in-flight-item` or `page`, `id` must likewise be the exact assigned carrier id.
`consumer_id` must be an assigned item whose dependency closure reaches that published id.
Remove a finding if its in-flight item or page changed since the pre-reader hash.
Compare the COMPLETE JSON fingerprint at pre.hashes[id] versus post.hashes[id]
(or pre.page_hashes[id] versus post.page_hashes[id]), not only item_sha256/file_sha256.
A changed contract_sha256 or manifest_sha256 also makes the carrier touched.
A touched carrier is already routed mechanically and cannot remain an open finding.
Write the corrected schema-conforming JSON to the same named result artifact.
