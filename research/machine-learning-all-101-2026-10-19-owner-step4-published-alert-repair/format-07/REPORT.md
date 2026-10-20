# format-07 candidate repair report

Prepared 26 presentation-only candidates for the assigned published suppliers. All 62 assigned alerts are confirmed against the current source and the exact hash-bound digest alert; none are false or unresolved. Each complete Statement/Definition retains its original prose, hypotheses and qualifications. Only wikilink tokens become the actual renderer display labels (explicit alias, otherwise target item title); unique original links follow the complete section in the correctly named references section, one source line per blank-separated paragraph. Repeated identical links have one reference paragraph. 83 original link occurrences were moved.

## Scope and semantic comparison

Raw preimages are frozen in `before/items/`; candidates are in `candidate/items/`. `inventory.json` binds all before/after raw SHA256 values, original alert objects and exact dispositions, original links and display-label source hashes. `SHA256SUMS` freezes these artifacts. `comparison.json` records a separate comparison of every candidate with its preimage: resolving original wikilinks to actual display labels produces exactly the candidate primary-section text (apart from section-boundary trailing whitespace). The entire original prefix (including all metadata) and suffix (including all Facts, proofs and Remarks) remain byte-identical. Original link targets and first-occurrence ordering are preserved. Full titles can be long or grammatically awkward in prose; they are deliberately retained without paraphrase as required.

No Statement/Definition meaning changes. Dependencies, published status, verification stamps and all mathematical arguments remain unchanged. Consequently no direct or indirect consumer has a changed mathematical interface, and the supplier-interface-change consumer-repair duty is not triggered. No consumer edits or whole-closure mathematical audit are claimed. No newly discovered mathematical issue or missing prerequisite arose from this presentation comparison.

## Validation and limits

One review/repair cycle; no second cycle needed. After the final candidate edits, ran `node tools/proof-layout.mjs` with all 26 explicit candidate paths in an isolated temporary `items/` tree. Exit 0: `proof-layout: 26 items, 67 steps, 0 defects`. Exact command, output, date and candidate hashes are recorded in `proof-layout.json`. No corpus validators, native gates, rehash, publication, commits, pushes, live-source edits, metadata edits or engine actions were performed. Native digest files and attempts, and Step 3 closure, were not modified. Live source SHA256 values still matched the assignment at comparison time. Root owns integration, claims, actual local publication checks, receipts and routing.

## Exact alert dispositions

Every row below is **confirmed presentation defect, repaired in candidate; consumer impact none**. Batch:index identifies the original alert exactly; full original findings and bound digest paths/hashes are retained in `inventory.json`.

| Supplier | Batch:index |
|---|---|
| alg-reverse-mode-automatic-differentiation | 95:0, 93:1, 38:2, 96:2, 94:0 |
| cor-zero-derivative-implies-constant | 23:4 |
| def-cartesian-product | 82:3 |
| def-conformal-nonconformity-score-and-rank-pvalue | 72:0 |
| def-directional-and-partial-derivatives | 19:1, 39:9 |
| def-filtration-and-filtered-probability-space | 78:1, 89:3, 40:7, 91:0, 82:14, 29:8 |
| def-glm-observation-family | 14:2 |
| def-interval | 42:8 |
| def-limsup-liminf | 42:9 |
| def-metric-ball | 62:9 |
| def-natural-logarithm | 78:7, 72:6, 100:0, 3:1, 20:8, 5:6, 7:2, 76:7, 96:0, 99:8, 70:1, 11:9, 75:20, 6:5, 66:6, 28:12, 29:10 |
| def-parametric-statistical-model | 2:5 |
| def-regular-conditional-distribution | 72:9, 98:4, 2:11 |
| def-statistic-and-estimator | 72:1 |
| def-variational-family-and-elbo | 97:3, 66:7 |
| lem-finite-choice | 82:8 |
| lem-of-inverse-positive | 42:20, 78:4, 99:12, 2:15 |
| lem-total-variation-half-l1-formula-on-a-countable-space | 86:3 |
| thm-borel-sets-are-lebesgue-measurable | 36:3, 64:2, 46:10 |
| thm-continuous-ode-adjoint-gradient-formula | 65:3 |
| thm-ftc-first-part | 23:5 |
| thm-intermediate-value | 91:7, 51:13 |
| thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets | 20:6, 66:2 |
| thm-nonnegative-weighted-sums-of-measures | 76:30 |
| thm-riesz-fischer-completeness-of-l-p | 51:17 |
| thm-villes-inequality | 91:6 |

## Outstanding issues

None within the assigned presentation scope. Integration and owner checks remain with root.
