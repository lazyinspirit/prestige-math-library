# Numerical Optimization, Inverse Problems and UQ visual audit — lane 01

## Coverage

Inspected all 73 assigned frozen titles and complete rendered ItemBodies across 103 revision-2 screenshot tiles. Every listed tile was individually opened using `tools.view_image` at original resolution. Coverage is **recovered body-preview coverage**, not canonical source parse/native-loader coverage. Exact source/snapshot/tile hashes and per-tile original-resolution attestations are recorded in [lane-01.json](lane-01.json).

The two malformed frontmatter items are recorded separately in `frontmatter-parse-blockers.json`: `cex-finite-support-makes-high-degree-moment-gram-singular` and `ex-total-degree-versus-tensor-product-work`. Their preview recovery strips only the exact malformed metadata line. These metadata blockers are not counted as visual defects.

## Confirmed visual defects

- `alg-saga-finite-sum-method`, line 35: undelimited mathematical notation appears literally in the opening definition sentence (including `n,d>=1`, `R^d->R`, `n^{-1}sum_i`, and `\nabla`).
- `alg-svrg-finite-sum-method`, lines 35, 41, 43–44, 49, 51: undelimited TeX-like notation appears literally in assumptions and procedure prose (including `n,d>=1`, `R^d->R`, `m>=1`, and `\nabla`); display equations render correctly.
- `lem-convex-smooth-component-gradient-cocoercivity`, lines 39, 45, 47–53, 55: undelimited notation such as `n,d>=1`, `R^d->R`, `<=`, and `<grad f(w),z-w>` appears literally in the Statement/Facts. Its centered display inequality renders correctly.
- `lem-svrg-unbiasedness-and-variance-bound`, lines 38, 52, 54, 66, 68, 80: un-delimited TeX-like notation appears literally in Statement, Facts and proof prose (including `\mathcal F_t`, `grad`, and `<=`); displayed equations render correctly.

The exact source lines, tile links, source hashes, and repair suggestions are in the JSON ledger. No clipping suspicion required crop or overlap verification.

## Editorial diagram candidate

`ex-zero-discrete-neb-residual-does-not-fix-a-continuum-path`, lines 30–34 and 52–56, could benefit from a two-chain comparison drawing: both M=2 chains share endpoints, have equal adjacent segment lengths and zero residual, but have distinct midpoints; the continuum family can be overlaid. This is an uncertain editorial candidate, not a rendering defect or mathematical evidence.

No repository source, application, library, or publication files were changed.
