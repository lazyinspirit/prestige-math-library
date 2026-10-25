# Information Theory visual audit — lane 06

## Scope and coverage

Reviewed all 46 assigned items, their titles, and complete ItemBody content in the frozen source snapshots and local HTML. Viewed all 67 revision-2 PNG tiles individually at original resolution. The per-item sections, page placements, item and HTML hashes, and each screenshot tile hash are recorded in [lane-06.json](lane-06.json); recorded values match the assignment and local capture receipts. No item content or publication status was edited, and no live HTTP(S) site was accessed.

## Confirmed rendering defects

Two defects are confirmed. In `thm-ams-ergodic-information-aep`, the Statement at source line 37 prints `-n^{-1}log_2 P(X_0^{n-1})` literally instead of typesetting it as mathematics. In `ex-hmm-viterbi-exact-sequence-map`, the Example at lines 61–73 prints the TikZ source in place of the two-state transition diagram. The intended initial weights and transition labels agree with the stated HMM parameters; no diagram-mathematics error was observed. Detailed evidence, tile paths, hashes, and repair suggestions are in the JSON findings.

One optional flow-diagram candidate is recorded for `def-it-operational-rate-distortion-function`: source block, encoder, message, decoder, reconstruction, and block-distortion comparison. The existing prose is clear and mathematically intact, so this is editorial only. No optional typography observations or other source-supported diagram defects were found.
