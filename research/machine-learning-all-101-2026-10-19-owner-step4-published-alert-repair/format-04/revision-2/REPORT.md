# format-04 revision-2 candidate repair report

Run: `machine-learning-all-101-2026-10-19`. Owner: `format-04`. Candidate-only work; two review/repair cycles (maximum reached).

All 63 assigned alerts are confirmed presentation defects and repaired in 26 candidates. No false alerts. 75 inline wikilink occurrences are replaced by their exact renderer labels (target item title where no explicit label exists; explicit labels trimmed as resolveWikilinks does); 72 unique per-item links are retained after the entire original section in immediately following correctly named references sections, each as a single-line paragraph. Original punctuation, prose, mathematical formulas, hypotheses, proof text, status, dependencies and all frontmatter remain unchanged apart from stripping link wrappers in the primary section.

The before snapshots match assignment raw SHA256 values. `inventory.json` freezes each before/candidate SHA256, reference list, original exact alert, digest identity, batch/group/index and disposition. `comparison.json` records independent section comparisons: primary text equals the preimage after replacing wikilinks with exact renderer labels, prefix/frontmatter and later sections are byte-identical, references retain original links, and current live sources still match snapshots. `diffs/` holds the complete review diffs.

Consumer impact: none. No Statement/Definition meaning changes, so no direct or indirect consumer mathematical rechecks or repairs are triggered. This is focused presentation acceptance, not a new mathematical audit. Existing Step3 closure, native attempts/digests, source metadata, live items and engine state were not edited. Owner retains integration, published ownership/receipts, actual item checks and route/rehash responsibilities.

Explicit final candidate proof-layout was run on copies of all 26 candidates in `/tmp/format-04-revision-2-proof-layout-xhy3cvkt/items/`; exit 0: `proof-layout: 26 items, 56 steps, 0 defects`. Exact command, execution time, output and input hashes are in `proof-layout.json`. No corpus validators or native gates were run.

Issues: no unresolved assigned presentation defects. One alert for the total derivative (batch 94 index 1) loosely describes order around “by the displayed estimate”; current source places the norm link earlier in the same zero-dimensional paragraph. Its substantive claim that inline links interrupt Definition is confirmed. Definition sections containing explanatory/proof prose (notably dependent choice and integer powers) retain that complete prose and move all section links together after it. Repeated citations are retained once per reference list.

| Item | Exact alert coordinates (batch:index) | Disposition |
|---|---|---|
| `alg-forward-mode-automatic-differentiation` | 93:4, 38:1 | Confirmed; candidate repaired; no consumer impact |
| `cor-expectation-agrees-with-the-finite-weighted-sum` | 82:7 | Confirmed; candidate repaired; no consumer impact |
| `def-borel-sigma-algebra` | 69:0, 72:5, 62:2, 82:1, 46:2, 28:4 | Confirmed; candidate repaired; no consumer impact |
| `def-conditional-expectation-given-a-sigma-algebra` | 78:6, 69:10, 84:8, 98:3, 87:7, 28:20, 29:7 | Confirmed; candidate repaired; no consumer impact |
| `def-dependent-choice` | 51:2 | Confirmed; candidate repaired; no consumer impact |
| `def-extended-real-valued-measurable-function` | 3:8, 2:8 | Confirmed; candidate repaired; no consumer impact |
| `def-function` | 33:0, 11:2 | Confirmed; candidate repaired; no consumer impact |
| `def-integer-power` | 42:7, 7:7, 76:5 | Confirmed; candidate repaired; no consumer impact |
| `def-l-p-space-as-a-quotient-by-null-functions` | 51:4 | Confirmed; candidate repaired; no consumer impact |
| `def-measure` | 69:1, 40:4, 99:2, 62:24 | Confirmed; candidate repaired; no consumer impact |
| `def-moore-penrose-pseudoinverse` | 92:0, 75:13 | Confirmed; candidate repaired; no consumer impact |
| `def-nonnegative-weighted-sum-of-measures` | 76:9 | Confirmed; candidate repaired; no consumer impact |
| `def-random-element-and-real-random-variable` | 78:0, 57:4, 40:5, 76:11, 98:0 | Confirmed; candidate repaired; no consumer impact |
| `def-singular-values-of-an-endomorphism` | 16:3 | Confirmed; candidate repaired; no consumer impact |
| `def-total-derivative-in-euclidean-space` | 19:0, 95:1, 84:0, 38:0, 99:5, 39:1, 41:2, 94:1 | Confirmed; candidate repaired; no consumer impact |
| `lem-derivative-of-a-power` | 76:14 | Confirmed; candidate repaired; no consumer impact |
| `lem-normal-location-scale-density` | 68:8 | Confirmed; candidate repaired; no consumer impact |
| `lem-q-and-irrationals-dense-r` | 2:13 | Confirmed; candidate repaired; no consumer impact |
| `thm-arithmetic-and-lattice-operations-preserve-measurability` | 43:2, 89:9, 7:23, 64:5, 27:8, 29:5 | Confirmed; candidate repaired; no consumer impact |
| `thm-checkpointed-reverse-schedules-preserve-adjoints-and-cost-bounds` | 38:3 | Confirmed; candidate repaired; no consumer impact |
| `thm-finite-gaussian-process-posterior-and-predictive-laws` | 16:4 | Confirmed; candidate repaired; no consumer impact |
| `thm-hessian-characterises-convexity` | 14:1 | Confirmed; candidate repaired; no consumer impact |
| `thm-lebesgue-measure-is-a-complete-measure` | 36:1, 46:11 | Confirmed; candidate repaired; no consumer impact |
| `thm-multivariable-taylor-formula-with-lagrange-remainder` | 75:9 | Confirmed; candidate repaired; no consumer impact |
| `thm-product-rule` | 88:10 | Confirmed; candidate repaired; no consumer impact |
| `thm-strict-separation-of-a-point-from-a-closed-convex-set` | 44:2 | Confirmed; candidate repaired; no consumer impact |

Revision 1 is retained unchanged under the parent directory and is superseded: its default target-ID text was not the rendered label. Revision 2 uses actual application `resolveWikilinks`, tested for all 75 occurrences; exact labels and resolver outputs are frozen in `renderer-labels.json`. No other prose edits. Target title source hash bindings are in `title-sources.json`.
