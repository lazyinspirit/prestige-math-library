# Step 6 reader routing-artifact correction

Correct research/frontier-14-reader-findings-6.json for batch 6.
Set the top-level `batch` field to exactly "6"; it identifies this batch, not the run number.
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
