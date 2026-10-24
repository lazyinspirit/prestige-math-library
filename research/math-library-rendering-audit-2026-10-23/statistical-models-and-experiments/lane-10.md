# Statistical Models and Experiments visual audit — lane 10

## Scope and coverage

Reviewed all 51 assigned frozen snapshots and their hash-matched local HTML. Opened all 86 receipt-listed PNG tiles individually with `tools.view_image` at original resolution. Snapshot, HTML, and tile SHA-256 values match their assignment and screenshot receipts.

Checked each title and complete rendered ItemBody, including its LaTeX and any TikZ/drawing content. No visible KaTeX failures, malformed existing diagrams, or missing formula content were identified. The assigned snapshots contain no TikZ/tikzcd diagrams. Published source statuses are recorded without modification.

Two items have high-value optional causal-graph diagrams: [lem-frontdoor-interventional-identities](snapshots/lem-frontdoor-interventional-identities.md), whose three hypotheses depend on directed paths and d-separation in mutilated graphs, and [ex-binary-confounding-standardization](snapshots/ex-binary-confounding-standardization.md), whose treatment-stratum imbalance explains the crude-versus-standardized contrast. Their exact source lines, diagram types, rationales, and concrete node/edge proposals are in [lane-10.json](lane-10.json). Other reviewed items are recorded clean; no diagram is proposed where the displayed formulas and prose already communicate the structure adequately.

The JSON ledger records all 51 item identities, source/HTML hashes, page memberships, sections checked, receipt-listed tile paths and hashes, and an individual original-resolution view attestation for every tile. No item, library page, application file, or publication status was changed.
