# Batch 36 — Step 1 authoring notes

Run: `mathematical-statistics-foundations-37` · role: beta · batch: 36 · batch dependency level: 0.

## Controlling design and reconciliation

The controlling design is MSF-36 in `research/plan-mathematical-statistics-track.md` (line 118), read with the owner authoring direction. Its A/B IDs, titles, order (1914/1915), and A-page prerequisite set agree with `research/plan-spec.json`. The generated scaffold had two extra direct A-page requirements, `density-separability-and-convolution-in-lp` and `orthonormal-bases-parseval-and-fourier-series`, absent from the controlling plan/spec. The manifest now uses the exact eight plan/spec requirements. A local, fully proved Parseval projection supplier is included, so the proof does not omit that mathematics.

The theorem retains the plan's scope: weak convergence of the normalized $H=L^2([0,1])$-valued sample sums, with the long-run covariance kernel interpreted as an $L^2([0,1]^2)$ equivalence class whose integral operator is Γ. It makes no time-indexed partial-sum process/FCLT claim. The proof supplies the plan's finite-dependent vector CLT locally and the approximation/covariance/tail arguments. Summability of the physical-dependence errors alone does not imply that the index times its error tends to zero at every index, so the proof selects a subsequence with that property and justifies the selection.

## Inventory and dependencies

The manifest contains 8 A items and 4 B items. The direct `deps` arrays match carrier frontmatter for all 12 items. Recomputed in-batch levels are acyclic and agree with every `dependency_level` label:

| Item | Level | In-batch suppliers |
|---|---:|---|
| `def-l2-m-approximable-causal-bernoulli-shift` | 0 | — |
| `lem-finite-dependent-vector-clt` | 0 | — |
| `lem-positive-trace-class-covariance-defines-hilbert-gaussian` | 0 | — |
| `lem-real-l-two-kernel-operator-is-bounded-and-rank-one-compatible` | 0 | — |
| `lem-l2-basis-projections-converge-and-satisfy-parseval` | 0 | — |
| `lem-independent-centered-hilbert-elements-have-zero-expected-inner-product` | 1 | `lem-l2-basis-projections-converge-and-satisfy-parseval` |
| `lem-long-run-covariance-is-trace-class` | 1 | `def-l2-m-approximable-causal-bernoulli-shift`, `lem-real-l-two-kernel-operator-is-bounded-and-rank-one-compatible` |
| `thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts` | 2 | definition, finite-dependent CLT, Gaussian supplier, Parseval, independent-inner-product lemma, long-run covariance lemma |
| `ex-nonsummable-physical-dependence-linear-process` | 1 | `def-l2-m-approximable-causal-bernoulli-shift` |
| `ex-finite-dependent-functional-moving-average` | 3 | definition, main theorem |
| `ex-geometrically-summable-bernoulli-shift` | 3 | definition, main theorem |
| `cex-terminal-weak-limit-does-not-imply-path-weak-limit` | 3 | main theorem |

Full direct dependencies, including out-of-batch suppliers, are recorded in the page manifest and item frontmatter. `research/mathematical-statistics-foundations-37-batch-36.cross-batch-dependencies.json` is `[]`; batch 36 has no prerequisite batches. The new local Parseval lemma and independent-centered-Hilbert lemma are proved before their consumers. The kernel/rank-one lemma is also a local prerequisite for the long-run covariance construction.

Choice assumptions stay on separate branches: the causal-shift definition and long-run covariance supplier require Countable Choice and Dependent Choice; the finite-dependent CLT, Hilbert-Gaussian construction, and main theorem explicitly retain AC; local Parseval and the independent-inner-product helper do not add choice beyond their stated basis. The examples state the assumptions needed for their countable innovations and theorem applications.

## Source reading and coverage

`research/mathematical-statistics-foundations-37-batch-36.coverage.json` is the per-result source ledger: each harvested named result has a locator, supported item, and disposition. It contains 23 harvested results across the two pages. The A-page evidence is:

- Horváth–Kokoszka–Reeder, *Estimation of the Mean of Functional Time Series and a Two-Sample Problem*, https://www.stat.colostate.edu/~piotr/horvathKokoszkaReeder2013.pdf, §1.1 and (1.1)–(1.3), Theorem 1, Appendix A.1. Supports the shift convention, H-valued sample-mean theorem and covariance-kernel scope. The source cites rather than proves its finite-dimensional $m$-dependent CLT; that supplier is proved locally.
- Hörmann–Kokoszka, *Functional Time Series*, https://www.researchgate.net/publication/268029796_Functional_Time_Series, §2.3 and §4.1–§4.3 (printed pp. 6, 19–26). The chapter's full text was previously inspected in the browser, but this URL is not fetch-verified. Its initial fetch and five recovery retries all returned HTTP 403. Exact-title/DOI searches found Springer subscription metadata/preview and a related arXiv paper, not an open byte-identical chapter. The URL-level source drop and complete local alternative arguments/dependencies for each affected item are recorded in the coverage file; no mathematical claim was dropped.
- Gerald Teschl, *Topics in Real and Functional Analysis*, https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf, §2.1, Theorems 2.2–2.4 and full proof discussion (printed pp. 49–51; PDF pp. 61–63). Supports the local projection/Parseval and independent-inner-product arguments.
- Rick Durrett, *Probability: Theory and Examples*, 5th ed., https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf, §2.1.2, Theorem 2.1.12 and full proof (printed pp. 48–49; PDF pp. 55–56). Supports independent-product expectation factorization and the worked product calculations.

The B page harvests the primary H-K-R paper and Durrett text at the same locators for its finite-dependent/geometric/nonsummable examples and product calculations. The fetch checker reports 5/6 source entries verified and all 6/6 resolved (one documented URL drop). No retrieval evidence is claimed for the dropped URL.

## Final scoped checks

- Focused `depcheck`: selected item/page and prerequisite-cycle checks passed.
- `content-policy`: 12 items, 0 errors, 0 warnings.
- `precheck`: 11 proof-bearing items checked, 0 failed; definition and two pages were not applicable.
- `rendercheck`: 14 item/page files, 0 errors, 0 warnings.
- `proof-layout`: 12 items, 43 steps, 0 defects.
- Strict proof contracts: 12/12 items, 0 errors, 0 warnings.
- Scoped item dependency recomputation: 12 items, 0 errors; maximum level 3. Manifest/frontmatter direct dependencies match 12/12.
- `source-fetch-check --stamp`: 5/6 verified, 6/6 resolved, one documented drop. `coverage-checklist`: 2 pages, 23 harvested results, 0 errors, 0 warnings. All six alternative dependency lists for the dropped URL were synchronized to the affected carrier frontmatter and match it.
- `step1-decisions record`: 12 ready records written with exact direct dependency arrays. A scoped hash check verified all 12 records closed. The normal loader is currently blocked by malformed JSON in out-of-batch `mathematical-statistics-foundations-37-batch-5.pages.json`; an isolated `/tmp` snapshot removed only that file's trailing two-character backslash-n sequence for the scoped readiness check. The out-of-batch manifest was not changed.
- The current `batch-dependency-levels check --run mathematical-statistics-foundations-37` is likewise blocked before graph calculation by the same batch-5 JSON parse error (`Unexpected non-whitespace character after JSON at position 53570 (line 1176 column 2)`). On the last successful graph calculation, batch 36 was level 0 with `requires: []` in both current and recorded rows, but the shared input hash was stale: computed `876b6fed331271dc3eda810f28bf59c08954288df8263dad3d39d5e114bd9740`, recorded `f8632f33a1d98ac87b8bfd98ee4e2c8d345dd5950b1933aefef1d594fbab7cfe`. The graph then differed at batches 7, 8, 9, 11, 17, 22, 24, 26 and 31, which list earlier prerequisite batches 1, 2 and/or 4 absent from the recorded graph. The shared scheduling artifact and out-of-batch manifest are left for the owner.

Readiness is recorded per item in the corresponding `research/mathematical-statistics-foundations-37-step1-<item-id>.json` files. Those records bind each carrier and its examined direct dependencies; they do not constitute independent approval.
