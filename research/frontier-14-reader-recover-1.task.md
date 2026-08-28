# Step 6 reader routing-artifact correction

Correct research/frontier-14-reader-findings-1.json for batch 1.
Preserve every genuine uneditable finding and the existing reader report.
The finding `id` is NOT an obligation label or a newly invented finding key.
For `published-dependency`, `id` must be the exact published item id:
the filename stem under items/ for the carrier named by `location`.
For `in-flight-item` or `page`, `id` must likewise be the exact assigned carrier id.
`consumer_id` must be an assigned item whose dependency closure reaches that published id.
Remove a finding if its in-flight item or page changed since the pre-reader hash;
that carrier is already routed as touched and cannot also remain an open finding.
Write the corrected schema-conforming JSON to the same named result artifact.
