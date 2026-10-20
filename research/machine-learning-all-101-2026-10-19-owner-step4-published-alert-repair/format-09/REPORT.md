# format-09 candidate repair report

Run: `machine-learning-all-101-2026-10-19`. Scope: exactly the 25 suppliers in `assignment.json`. One repair round; no second review/repair cycle needed.

All 83 assigned alert records are confirmed presentation defects and repaired in candidates. None is classified as a false alert. Exact findings, batch/group/index, original digest identities and per-alert dispositions are preserved in `alert-dispositions.json`.

The sole transformation replaces each Statement/Definition wikilink with its existing rendered label (explicit alias when present, otherwise target title), and puts the original wikilinks in an immediately following correctly named references section, one link per blank-separated one-line paragraph. Repeated identical links share one reference paragraph. Complete defining/concluding prose precedes references. No mathematical wording, hypotheses, conventions, proof text, metadata, dependencies, publication status or verification stamps were rewritten.

Independent Node comparison against frozen preimages used the renderer YAML package for target titles. It passed for all 25 items: rendered Statement/Definition equality; exact metadata, proofs and all other sections; immediate reference placement; one link per paragraph; inventory hashes; unchanged live sources. See `comparison.json` and `verify.mjs`. The independent check uses a separate implementation from the Python candidate generator.

Consumer impact: none. Every Statement/Definition has identical rendered mathematical prose, and the logical dependency graph is byte-for-byte unchanged in frontmatter. No direct/indirect consumer repair or recertification is proposed. The mathematical material outside this presentation change has not been newly audited.

Final explicit candidate proof-layout check ran in an isolated temporary tree after all candidate edits: `proof-layout: 25 items, 78 steps, 0 defects`; exit 0. Exact command, timestamp and final candidate hashes appear in `proof-layout-check.json`; output is in `proof-layout.log`. No corpus validator, workflow gate, engine transition, native digest/attempt edit, publication or push was performed. Live sources and Step 3 evidence were untouched.

Frozen before/after raw SHA256 inventory: `inventory.json`. Durable byte-exact preimages: `before/items/`. Proposed files: `candidate/items/`. All findings and comparisons are bound to the assigned source hashes.

## Item dispositions

| Item | Assigned alert records | Relocated link occurrences | Disposition |
| --- | ---: | ---: | --- |
| `alg-unadjusted-langevin-algorithm` | 1 | 10 | confirmed; candidate repaired; no consumer impact |
| `def-adapted-and-integrable-stochastic-process` | 3 | 3 | confirmed; candidate repaired; no consumer impact |
| `def-cholesky-factorisation-with-positive-diagonal` | 1 | 2 | confirmed; candidate repaired; no consumer impact |
| `def-convex-and-strictly-convex-functions-on-euclidean-sets` | 2 | 2 | confirmed; candidate repaired; no consumer impact |
| `def-equivariant-map-of-group-actions` | 1 | 3 | confirmed; candidate repaired; no consumer impact |
| `def-finite-kullback-leibler-divergence` | 2 | 2 | confirmed; candidate repaired; no consumer impact |
| `def-hessian-and-euclidean-critical-point` | 2 | 3 | confirmed; candidate repaired; no consumer impact |
| `def-ito-integral-for-square-integrable-predictable-processes` | 2 | 9 | confirmed; candidate repaired; no consumer impact |
| `def-martingale-difference-sequence` | 4 | 3 | confirmed; candidate repaired; no consumer impact |
| `def-metric-compactness` | 1 | 10 | confirmed; candidate repaired; no consumer impact |
| `def-natural-numbers` | 3 | 4 | confirmed; candidate repaired; no consumer impact |
| `def-probability-measure` | 19 | 2 | confirmed; candidate repaired; no consumer impact |
| `def-semicontinuity-on-euclidean-subsets` | 1 | 3 | confirmed; candidate repaired; no consumer impact |
| `def-stochastic-gradient-oracle-and-unconstrained-update` | 1 | 7 | confirmed; candidate repaired; no consumer impact |
| `def-weak-convergence-of-borel-probability-measures` | 3 | 2 | confirmed; candidate repaired; no consumer impact |
| `lem-finite-sum-laws` | 7 | 3 | confirmed; candidate repaired; no consumer impact |
| `lem-of-sign-rules` | 4 | 1 | confirmed; candidate repaired; no consumer impact |
| `lem-tube-lemma-for-a-compact-metric-factor` | 1 | 5 | confirmed; candidate repaired; no consumer impact |
| `thm-cardinality-of-a-set-of-functions` | 1 | 1 | confirmed; candidate repaired; no consumer impact |
| `thm-discrete-adjoint-gradient-recursion` | 1 | 1 | confirmed; candidate repaired; no consumer impact |
| `thm-geometric-series` | 4 | 2 | confirmed; candidate repaired; no consumer impact |
| `thm-ito-formula-one-dimensional` | 1 | 3 | confirmed; candidate repaired; no consumer impact |
| `thm-mcdiarmid-bounded-differences` | 3 | 3 | confirmed; candidate repaired; no consumer impact |
| `thm-of-archimedean` | 6 | 2 | confirmed; candidate repaired; no consumer impact |
| `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique` | 9 | 1 | confirmed; candidate repaired; no consumer impact |

## Issues and remaining owner work

No unresolved candidate defect found. Root retains ownership claims, integration, rehashing, recertification, current-input checks, repair receipts and engine routing. Existing native digests/attempts and Step 3 closure must remain intact.
