# Statistical Learning and Classical Models visual audit — lane 06

## Scope and coverage

Reviewed all 43 assigned item titles and complete ItemBody content, including formulas, proofs/verifications, and diagram source. Viewed all 65 receipt-listed revision-2 PNG tiles individually at original resolution. Exact source, snapshot, HTML, tile paths, and SHA256 values, plus individual view attestations, are recorded in [lane-06.json](lane-06.json). All assignment and receipt hashes match disk, and every frozen snapshot is byte-identical to its assigned item source. No item content or publication status was changed; no live HTTP(S) site was accessed.

## Confirmed rendering defect

The TikZ tree diagram in `ex-random-forest-zero-margin-vote-limit` (source lines 39–47) fails to render. The local HTML and first assigned tile display the raw source in a diagram error block; the screenshot receipt also records the failure. The two split cases and their leaf labels agree with the sample and the verification, so this is a rendering defect rather than a displayed mathematical error. Rewrite the tree source in a form supported by the renderer and inspect the resulting tiles.

No other raw-math or title rendering issue, incorrect displayed diagram, or mathematical defect was confirmed. The causal DAG diagram in `ex-pc-latent-confounding-limitations` renders and matches the stated latent and direct-edge models. No additional missing diagram was sufficiently high-likelihood to report.
