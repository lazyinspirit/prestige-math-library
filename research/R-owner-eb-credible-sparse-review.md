# Sparse undercoverage repair and focused positive-branch review

Parent authorized live integration only after native batch-21 writer completed and the writer process inventory drained. Exact preimages are in `research/R-owner-eb-credible-before/`.

Changed only the sparse counterexample and its example. The counterexample now proves retained-block bias, the deterministic score bound `sup_{alpha<=a_j} h <= 62 M`, posterior-radius upper bound, pathwise domination of all noise norms above `a_j`, and vanishing coverage. It consumes only the arbitrary-truth one-sided likelihood bracket from the sibling's repaired bracket item. The example now derives coverage from the proved counterexample. No new supplier was needed.

Necessary cap correction: for every beta>0, run the procedure with any chosen fixed A>beta. The proof uses a_j=beta+s log(rho_j)/(4 log(n_j)); for the actual rho_j=2^j and ceiling recursion, a_j tends to beta from above. Thus A>beta suffices without requiring A>beta+1/2. The previous cap-unspecified claim and the printed source theorem omitted this necessary qualification. Choosing A>beta preserves the counterexample for every beta>0. The source's general fixed-cap claim must not be silently applied to beta>=A. The first n_1=2 is a finite asymptotically irrelevant index, explicitly noted.

Explicit final layout command:

`node tools/proof-layout.mjs items/cex-sparse-gap-truth-causes-empirical-bayes-credible-set-undercoverage.md items/ex-sparse-gap-sequence-is-hyperrectangular-but-undercovered.md`

Actual result: `proof-layout: 2 items, 15 steps, 0 defects` (exit 0). No hashes, recertification, live contracts, manifests, numeric levels, readiness records or gates were changed.

Independent focused mathematical review (outside cycle 1): read the new `lem-empirical-bayes-radius-bias-and-noise-comparison` and repaired `thm-adaptive-empirical-bayes-credible-ball-conservative-coverage-on-polished-tails`. Checked the noise trace and maximum weight; the common-normal pathwise process domination; the retained-coordinate quantile lower bound; the low-frequency bias-to-h ratio; the floor(N) polished-tail block; fixed-cap coverage; and the growing-cap inflation exponents. No mathematical defect found, conditional on the sibling's final bracket item supplying its stated sharpened growing-cap rate comparison. The comparison lemma's uniform tail-integral factor 2 uses `(1+4 A_n+2p)/N_{n,A_n}->0` when replacing floor(N) by N; this follows from its hypotheses, though explicitly mentioning it improves clarity. Parent owns the final bracket-source check and all affected-consumer closure.

A preliminary research-only contract/manifest-row proposal exists at `research/R-owner-eb-credible-sparse-contract-proposals.json`; it explicitly omits the not-yet-integrated bracket quote rather than fabricating it. Parent will supersede it with a merged final source-exact proposal after bracket integration.
