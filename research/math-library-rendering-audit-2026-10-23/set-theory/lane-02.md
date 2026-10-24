# Set Theory visual audit — lane 02

## Scope and coverage

Reviewed all 128 assigned items against their frozen source snapshots and matching local `ItemBody` HTML. Opened all 196 receipt-listed PNG tiles individually using `tools.view_image` at original resolution. The per-item ledger records source, snapshot, and HTML hashes, checked sections, tile paths, tile hashes, and individual-view attestations in [lane-02.json](lane-02.json).

All 128 source hashes match the assignment, all snapshot hashes match their frozen source hashes, all 128 local HTML hashes match the assignment, and all 196 tile hashes match their per-item screenshot receipts. Coverage: 127 clean items and one confirmed rendering finding.

## Confirmed finding

- **A Markdown table is rendered as pipe-delimited text:** `ex-first-difference-order-on-a-binary-branching-tree`, snapshot line 53. The header, separator, and seven rows occupy one source line; the local HTML shows the contents as one run of text instead of columns. Split the header, delimiter, and each row onto separate source lines while preserving the displayed comparisons. The finding and source/HTML hashes are in the ledger.

## Diagram candidates

- `ex-first-difference-order-on-a-binary-branching-tree`, lines 28–32: a TikZ diagram of the depth-three binary tree, with leaves ordered `000<001<010<011<100<101<110<111`, would show the shared prefixes and first-difference coordinate used in the calculation.
- `ex-a-relation-on-a-three-element-set-with-its-domain-range-inverse-and-composites`, lines 38–49: a directed relation graph on `u,v,w` with arrows `u→v`, `v→w`, `w→u`, and `u→u` would make the displayed relation and length-two paths for `R∘R` easier to check.

No library item, application, publication status, or source file was changed. Work was recorded only in this lane report and ledger.
