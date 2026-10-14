# Batch 17 — Step 1 authoring notes

Run: `mathematical-statistics-foundations-37` · role: beta · batch: 17 · batch dependency level: 3.

## Controlling design and reconciliation

The controlling design is MSF-21 in `research/plan-mathematical-statistics-track.md` (row 98), read with `research/mathematical-statistics-foundations-37-owner-authoring-direction.md`. The A/B IDs, titles, order 1876/1877, and page prerequisites agree with `research/plan-spec.json`; the plan-spec item arrays were pre-authoring placeholders. The plan controls the six core A results: KL, Pinsker, Le Cam, Fano, Assouad, and product-KL additivity. Three local A suppliers were added before their consumers: the finite-uniform-hypothesis mutual-information definition, the equal-variance Gaussian KL formula, and the sparse Hamming packing used by the B examples.

The older F04 dossier's Pair 6 proposes one combined Le Cam/Fano/Assouad theorem. That conflicts with MSF-21's six-item inventory, so the plan's split is followed. Rigollet–Hütter's sparse Varshamov–Gilbert Lemma 4.14 assumes $k\le d/8$, while the sparse example needs $1\le k\le d/2$. The local q-ary block-code proof supplies that wider range; the source is not credited with the broader claim. The plan also names the concentration page as a prerequisite, but no concentration inequality is used. The stationary Markov page supplies the exact event-supremum TV convention with no factor $1/2$.

The dispatch gives direct prerequisite batches 3, 4, and 14 and the scheduling-input hash `dd05d82b8e5bf49626aa96d504293f4afc76b61792a92c3d8eaa81be00ba597c`. The stored level graph lists the transitive closure 1, 2, 3, 4, and 14 for batch 17; this is consistent with the dispatch's direct edges and level 3.

## Inventory and dependency levels

The manifest contains nine A items and three B examples. The 22-item in-run dependency closure was recomputed across batches 1, 2, 3, 4, 14, and 17. It is acyclic; all supplier labels match their current carriers, and the batch-17 manifest dependencies and levels match the item frontmatter.

| Item | Level | In-batch suppliers |
|---|---:|---|
| `lem-sparse-hamming-packing` | 0 | — |
| `def-kullback-leibler-divergence` | 3 | batch 4 likelihood-ratio/change-of-measure items |
| `def-mutual-information-for-finite-hypothesis-testing` | 4 | `def-kullback-leibler-divergence` |
| `thm-pinsker` | 4 | `def-kullback-leibler-divergence` |
| `thm-product-kl-additivity` | 4 | `def-kullback-leibler-divergence` |
| `lem-gaussian-location-kl-formula` | 4 | `def-kullback-leibler-divergence` |
| `thm-two-point-le-cam-risk-bound` | 5 | batch 1/2/3 experiment, kernel, risk, and minimax definitions |
| `thm-assouad-hypercube` | 5 | batch 1/2/3 experiment, kernel, risk, and minimax definitions |
| `thm-fano-packing` | 5 | mutual information, KL, Jensen, and batch 1/2/3 kernel/risk definitions |
| `ex-gaussian-two-point-le-cam-lower-bound` | 6 | Gaussian KL, Pinsker, product KL, and Le Cam theorem |
| `ex-sparse-gaussian-sequence-fano-lower-bound` | 6 | local packing, Gaussian KL, Fano, Pinsker, product KL, and Le Cam boundary case |
| `ex-gaussian-hypercube-assouad-lower-bound` | 6 | Gaussian KL, Pinsker, product KL, and Assouad theorem |

The assigned A page preserves the controlling page requirements: `losses-risk-and-decision-rules`, `dominated-experiments-likelihood-and-sufficiency`, `concentration-inequalities-and-tail-bounds`, and `probability/stationary-markov-chains-and-ergodic-limits`. The risk suppliers specify kernel-based pointwise risk; the minimax supplier requires a measurable parameter kernel and makes no minimizer-existence claim. The two-point and cube models use finite parameter spaces with their power-set sigma-algebras, so their model maps are kernels. The sparse example defines its full-class infimum/supremum using the pointwise risk definition and restricts the Fano argument to a finite packed submodel.

Choice branches stay explicit. KL, mutual information, Pinsker, product additivity, Gaussian KL, and Fano retain AC through their Radon–Nikodym suppliers. The Gaussian formula also uses the AC-to-countable-choice supplier for change of variables. The finite greedy code, Le Cam threshold test, and Assouad coordinate tests add no choice. Implicit calculus prerequisites are named directly: the sparse-code proof uses log derivatives, the chain/product rules, higher-derivative notation, and the mean value theorem; Pinsker uses the same derivative rules and mean value theorem; Fano uses the log product rule and derivative rules for convexity; product-KL uses the log product identity. Their current supplier statements and proofs were inspected.

## Cross-batch supplier review

`research/mathematical-statistics-foundations-37-batch-17.cross-batch-dependencies.json` records 32 verified direct edges: 29 item edges into batches 1–4 and three page prerequisites into batches 3, 4, and 14. The actual batch 1 experiment/model definitions, batch 2 randomized-procedure definition, batch 3 risk/minimax definitions, and batch 4 likelihood-ratio/change-of-measure statements were read. The external stationary-Markov page is not an in-run ledger node; its published total-variation definition was read and cited with the no-$1/2$ convention. No missing supplier, unresolved interface, or cross-batch change remains for this pair.

## Source reading and coverage

`research/mathematical-statistics-foundations-37-batch-17.coverage.json` records the source URLs, exact sections and printed-page locators, each harvested result, its supported item, and its disposition. The A page has 16 harvested results and two independent lecture-note treatments; the B page has seven. The full relevant text was inspected in:

- Rigollet and Hütter, *High-Dimensional Statistics: Lecture Notes*, [arXiv PDF](https://arxiv.org/pdf/2310.19244v1), Chapter 4 §§4.3–4.5, including Gaussian KL Example 4.7, product additivity, Pinsker, Le Cam, Fano, the complete sparse-packing proof, and the Gaussian-sequence application.
- Duchi, *Lecture Notes on Statistics and Information Theory*, [Stanford full-text PDF](https://stanford.edu/class/stats311/lecture-notes.pdf), Chapter 2 Example 2.1.7 and Proposition 2.2.8, and Chapter 8 §§8.2–8.5, 8.7, and the deferred Assouad proof in §8.8.3. These give an independent Gaussian KL treatment as well as the Le Cam, Fano, product-KL, Pinsker, and Assouad methods.

The first browser open of `https://web.stanford.edu/class/stats311/lecture-notes.pdf` timed out. A title/date search found the full-text PDF at the canonical `stanford.edu` URL; the complete relevant sections were inspected and the canonical source fetched successfully. The failed open and search are preserved in the coverage source's `recovery_attempts` and `searches`; no source was dropped or escalated, so no `source_resolution` drop record was created. `source-fetch-check --stamp` verified all four page/source entries with zero drops.

## Final scoped checks and readiness

- `precheck`: 10 proof-bearing items, 0 failed.
- `proof-layout` on the explicitly changed proof items: 10 items, 38 steps, 0 defects.
- `rendercheck` on 12 item carriers and both pages: 14 files, 0 errors.
- Scoped `content-policy`: 12 items, 0 errors, 0 warnings.
- `coverage-checklist`: 2 pages, 23 harvested results, 0 errors, 0 warnings.
- `source-fetch-check --stamp` and check mode: 4/4 verified, 4/4 resolved, 0 drops.
- Strict proof contracts: 12/12 items, 0 errors, 0 warnings; 122 exact supplier citations and 38 step derivations.
- Scoped dependency recomputation: 22 closure items, 12 assigned items, maximum level 6, 0 manifest/carrier or dependency-level mismatches.
- `step1-decisions record`: all 12 items recorded `ready` with `owner: false` and their exact direct dependency lists. These records are completion evidence, not independent approval.

The post-authoring `content-policy --manifest-only` A0 invocation reported the expected `batch-item-already-exists` result for all 12 carriers; that mode is for pre-authoring mint checks. The normal scoped content-policy check passed. An attempted path-scoped `depcheck.mjs` invocation is not supported by that tool and fell back to its corpus scan; that output was discarded, and the scoped dependency-level check above is the recorded dependency result.

At the latest read-only `.autopilot` status (2026-10-14 04:24 UTC), the run remained `running` at `1-scaffold`, with 19/37 batches covered, batch 17 no longer listed as artifact-missing, no in-flight worker, and the owner blocker for batch 26's incomplete artifact still present. Batch 17 did not change autopilot state, shared plans, verdicts, or engine evidence.
