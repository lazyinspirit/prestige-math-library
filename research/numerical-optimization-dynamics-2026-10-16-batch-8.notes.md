# Batch 8 authoring notes — Rare event importance sampling and multilevel splitting

## Controlling design, current plan, and conflict record

The controlling page is RARE1 at order 2300 with companion order 2301. The current plan-spec row and the task's four required pages agree: feynman-kac-particle-filters, iid-monte-carlo-integration-and-error, importance-sampling-and-weight-diagnostics, and smc-clts-error-and-degeneracy. The pair's in-run dependency level is zero; there are no prerequisite batches. The dispatch scheduling input was ca41fcdd6d4a40fbd61e4921a8bfdd410bd704a05c937a5f709843ed28d2e97d.

The base design at plan-numerical-optimization-track.md L120 and L132 agrees on the IS, Gaussian tilt, cross-entropy, independent splitting, SIR, and example scope. The controlling contract is Contract RARE1 at optimization-audit.md L187 onward, because the controlling plan and plan-spec entry explicitly incorporate that appendix and the owner direction says to preserve all approved amendments. XA-01 expands the stale compact prose with finite-budget stopped-kernel/event-normalizer identity, separate crossing approximation error, and finite-particle SIR variance work. The plan-spec row retains only the four current published navigation pages as page-level prerequisites. Older prose at plan-numerical-optimization-track.md L134 names NA39/45 and Asmussen–Glynn/Bucklew sources; those are not logical pair requirements in the current plan-spec item graph, and the source-level history is recorded below.

A mathematical contradiction remains in the incorporated RARE1 contract: its proposed bound from only squared normalized conditional future means is false. The local counterexample and an alternative valid bounded-potential absolute MSE theorem are complete. The shared plan/contract is owner-controlled and was not edited. Owner action requested: replace the false conditional-mean-only formula by the proved absolute bound below, or supply a separately verified stronger hypothesis under which the exact formula is valid. The present Step 1 records are authoring readiness only and do not accept or amend the shared design.

## Inventory, direct dependencies, and levels

The full 26-item A/B inventory, direct dependency IDs, levels, and exact titles are listed below from the current scaffold manifest. Levels count only suppliers in this batch. All direct carrier dependency lists were checked against the manifest.


### A page rare-event-importance-sampling-and-multilevel-splitting (order 2300)

| Item | Direct dependencies | Level |
|---|---|---:|
| def-rare-event-efficiency-criteria | alg-importance-sampling, thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment | 0 |
| lem-standard-normal-mills-ratio | def-standard-normal-and-normal-laws, def-axiom-of-choice | 0 |
| alg-cross-entropy-pilot-production | alg-importance-sampling, def-identically-distributed-and-iid-random-variables | 0 |
| def-nested-rare-event-levels | def-probability-measure | 0 |
| def-finite-budget-stopped-event-kernel | def-standard-borel-space, def-measure-kernel-and-probability-kernel, def-product-sigma-algebra-and-finite-product-sigma-algebras, thm-measurability-of-integration-against-a-kernel | 0 |
| lem-sir-bounded-potential-unnormalized-update-variance | def-measure-kernel-and-probability-kernel, def-probability-measure, def-moments-variance-and-covariance, thm-iid-monte-carlo-mean-moments | 0 |
| thm-zero-variance-importance-sampling-proposal | def-rare-event-efficiency-criteria, alg-importance-sampling | 1 |
| thm-gaussian-tail-exponential-tilting | def-rare-event-efficiency-criteria, def-standard-normal-and-normal-laws, def-axiom-of-choice, lem-standard-normal-mills-ratio, thm-ordinary-importance-sampling-is-unbiased, thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment, thm-iid-monte-carlo-mean-moments | 1 |
| thm-cross-entropy-production-unbiased-given-pilot | alg-cross-entropy-pilot-production, thm-ordinary-importance-sampling-is-unbiased | 1 |
| lem-nested-level-probability-factorization | def-nested-rare-event-levels | 1 |
| alg-independent-fixed-level-splitting | def-nested-rare-event-levels | 1 |
| alg-fixed-level-sir-splitting | def-nested-rare-event-levels, def-standard-borel-space, def-measure-kernel-and-probability-kernel, def-feynman-kac-path-targets-and-normalizers, alg-sequential-importance-resampling, def-axiom-of-choice | 1 |
| lem-finite-budget-stopped-normalizer | def-finite-budget-stopped-event-kernel, def-feynman-kac-path-targets-and-normalizers, thm-measurability-of-integration-against-a-kernel, thm-ionescu-tulcea-construction-of-a-markov-chain, def-axiom-of-choice | 1 |
| lem-stopped-kernel-discretization-bias | def-feynman-kac-path-targets-and-normalizers, def-finite-budget-stopped-event-kernel, lem-finite-budget-stopped-normalizer, def-measure-kernel-and-probability-kernel, def-probability-measure, thm-measurability-of-integration-against-a-kernel | 2 |
| thm-independent-splitting-product-moments-and-work | alg-independent-fixed-level-splitting, lem-nested-level-probability-factorization, def-nested-rare-event-levels, thm-iid-monte-carlo-mean-moments, def-iid-monte-carlo-estimators | 2 |
| thm-fixed-level-sir-estimator-unbiased | alg-fixed-level-sir-splitting, thm-sequential-particle-estimator-is-unbiased, lem-feynman-kac-path-measures-satisfy-forward-recursion, lem-nested-level-probability-factorization, def-nested-rare-event-levels, def-axiom-of-choice | 2 |
| thm-fixed-level-sir-absolute-mse-bound | alg-fixed-level-sir-splitting, thm-fixed-level-sir-estimator-unbiased, lem-sir-bounded-potential-unnormalized-update-variance, def-nested-rare-event-levels, def-feynman-kac-path-targets-and-normalizers, thm-iid-monte-carlo-mean-moments, def-moments-variance-and-covariance, cor-conditional-variance-decomposition, def-axiom-of-choice | 3 |
| cex-sir-l2-bound-from-conditional-means-is-false | alg-fixed-level-sir-splitting, alg-sequential-importance-resampling, def-nested-rare-event-levels, def-axiom-of-choice | 2 |
| rem-sir-finite-particle-error-bound-scope | thm-fixed-level-sir-estimator-unbiased, thm-fixed-level-sir-absolute-mse-bound, thm-smc-time-uniform-variance-bound-under-uniform-incremental-weights, def-axiom-of-choice | 4 |

### B page rare-event-importance-sampling-and-multilevel-splitting-examples (order 2301)

| Item | Direct dependencies | Level |
|---|---|---:|
| ex-gaussian-barrier-exponential-tilting | thm-gaussian-tail-exponential-tilting | 2 |
| ex-queue-overflow-and-redundant-splitting-work | alg-independent-fixed-level-splitting, thm-independent-splitting-product-moments-and-work | 3 |
| ex-cross-entropy-pilot-misses-event-support | alg-cross-entropy-pilot-production, thm-cross-entropy-production-unbiased-given-pilot | 2 |
| cex-dependent-level-samples-bias-product-estimator | def-nested-rare-event-levels, alg-independent-fixed-level-splitting, thm-independent-splitting-product-moments-and-work | 3 |
| ex-sir-zero-particle-prefix-positive-event | def-nested-rare-event-levels, alg-fixed-level-sir-splitting, thm-fixed-level-sir-estimator-unbiased | 3 |
| ex-finite-budget-crossing-misses-between-grid-times | def-finite-budget-stopped-event-kernel, lem-finite-budget-stopped-normalizer, lem-stopped-kernel-discretization-bias | 3 |
| ex-importance-sampling-finite-mean-infinite-second-moment | def-rare-event-efficiency-criteria, alg-importance-sampling, thm-ordinary-importance-sampling-is-unbiased, thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment | 1 |


## Actual suppliers and hypothesis checks

The four required published pages and every direct published item supplier were inspected at the current carrier. For IS, these include alg-importance-sampling, thm-ordinary-importance-sampling-is-unbiased, and thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment: support and integrability are required for unbiasedness, and the weighted second moment is required for finite variance. The IID estimator supplier thm-iid-monte-carlo-mean-moments and its definitions were checked for the Gaussian moments and the independent-level variance calculation.

For the Feynman–Kac/SIR branch, the actual suppliers inspected include def-feynman-kac-path-targets-and-normalizers, lem-feynman-kac-path-measures-satisfy-forward-recursion, alg-sequential-importance-resampling, alg-multinomial-and-residual-offspring-resampling, thm-sequential-particle-estimator-is-unbiased, and the finite-horizon SMC empirical-law/variance suppliers. Canonical SIR unbiasedness requires full resampling and positive finite prefix normalizers. The published smc CLT class-variance and time-uniform variance statements are asymptotic and do not claim a finite-particle MSE result. Conditional-variance suppliers were also read for the new SIR martingale proof. No SIR result was moved from its published page.

The stopped-level kernel is explicitly on a standard Borel space, uses the cemetery status for budget exhaustion, and distinguishes the finite budget event normalizer from an exact-hitting oracle. The normalizer identity and TV telescoping proof are local; no crossing-rate or exact-sampler expected-work bound is inferred without added assumptions.

### SIR finite-particle contradiction and local repair

For the proposed conditional-mean-only formula, take E={0,1}, P uniform, A0=A1=E, A2={0}, L=2, and N≥1. Set M1 to the identity and K1(x,·)=P(·). Then K1 is supported on A1 and leaves pi1=P invariant. The prefixes are Z0=Z1=1 and Z2=1/2, and eta0=eta1=P. Both normalized future means h0,2 and h1,2 are identically one, so B=1. Full resampling at level one followed by the independent refresh makes the final particles IID P; the SIR normalizer is their Bernoulli(1/2) mean and its exact MSE is 1/(4N). The contract's proposed right side is zero when B=1, a contradiction. This is proved in cex-sir-l2-bound-from-conditional-means-is-false.

A different finite-particle statement is proved without mixing or rarity assumptions. The one-step lemma lem-sir-bounded-potential-unnormalized-update-variance rewrites the resampled proposal/update as an IID bounded-potential empirical mean; its conditional variance is at most z^2/(4N). In thm-fixed-level-sir-absolute-mse-bound, backward Feynman–Kac functions give a martingale of unnormalized empirical measures. The initial empirical sample and each of the L updates contribute at most 1/(4N), yielding E[(p-hat-P(A_L))^2] <= (L+1)/(4N). The result is absolute MSE only; it gives no relative-error guarantee uniform in rarity. The CLT variance theorem and the paper's Theorem 1.5 remain distinct results, with the latter's additional domination hypotheses.

## Source reading, dispositions, and retrieval history

The source-coverage file is the evidence ledger for both A/B pages: it records full-text locators, each harvested result's disposition, supported item, reading verification, and fetch stamps. The A page uses the complete Biondini chapter sections on IS, optimal proposals, tilting, cross-entropy and splitting; Laub's complete Lecture 1 Part 2 and Lecture 2; Pagano's complete tutorial; NIST DLMF 7.12(i); Johansen–Del Moral–Doucet's complete author-hosted paper; and the complete Cérou–Del Moral–Guyader paper including Theorem 1.5 and §5. The B page uses the independent full-text treatments relevant to its worked cases. The current coverage has 12 source rows: all 12 passed the no-network source-fetch check. The initial stamp pass had 13 rows; one redundant Numdam row was removed from the B-page coverage after the A-page row already documented that result. No selected source failed the fetch gate and no source drop record was created.

The named Asmussen–Glynn, Bucklew, and Del Moral book routes were attempted during source selection. Springer book routes redirected to metadata/paywall rather than full text, and an indexed NZDR Asmussen PDF route returned 404. Alternatives were located and the math was checked from Biondini, Laub, Pagano, Johansen–Del Moral–Doucet, NIST, and Cérou–Del Moral–Guyader full text. The inaccessible candidate routes are not active item or coverage sources; their failure did not remove any required mathematical claim. The former Springer book reference in the SIR unbiasedness carrier was replaced by the full accessible Numdam/Johansen papers. No failed active source is marked dropped or owner-escalation.

## Reconciliation and cross-batch inputs

The current cross-batch dependency input is empty: every new logical supplier is either in batch 8 or already published. The four required pages are published context, not cross-batch edges. No absent cross-pair supplier remains. The 100-item page cap is not approached.

The supplied dispatch scheduling input was ca41fcdd6d4a40fbd61e4921a8bfdd410bd704a05c937a5f709843ed28d2e97d. The current authored manifest now has 26 items and additional same-batch logical edges; its computed batch remains level zero. The shared run dependency artifact was not rewritten because it is owner-managed. The owner should recompute that artifact after integrating these manifests. The global dependency checks are also blocked by concurrent run work outside this pair and were not repaired here. Full item-dependency checking reported many other empty scaffold inventories and an unrelated level mismatch at lem-finite-straight-line-program-defines-c2-map. The global batch-dependency check could not parse an unrelated carrier, items/def-matching-affine-simplicial-meshes.md, because its frontmatter locator has an unquoted colon. The scoped batch-8 dependency calculation passes with 26 items and maximum level 4. No foreign pair, shared plan, engine state, or verdict was edited.

## Final scoped checks and readiness

- A/B page inventories match the current 19-item A manifest and 7-item B manifest.
- Manifest and carrier direct dependencies/levels match for all 26 items.
- Scoped dependencyLevels: 26 items, no cycles or label errors, maximum level 4.
- Strict proof-contract validation: 26/26 items, 0 errors and 0 warnings. Contracts contain current exact supplier excerpts, step claims/inputs, boundary worksheets, applicable finite checks, and axiom-use records.
- proof-layout on all 26 changed carriers: 26 items, 56 proof steps, 0 defects.
- coverage-checklist: 2 pages, 44 harvested results, 0 errors and 0 warnings.
- source-fetch-check: 12/12 final coverage source rows fetch-verified; 0 documented drops.
- node tools/tsx-run.mjs tools/author-check.mts numerical-optimization-dynamics-2026-10-16 8: pass. Precheck, rendercheck, content-policy-items, and strict proof-contract gates all exited 0; result is research/numerical-optimization-dynamics-2026-10-16-author-check-8.json. manifest-deps: 26 items, 0 normalized, 0 errors.
- No test suite was run; the listed authoring, dependency, source, contract and layout checks are the requested scoped checks.

All 26 items have batch placement and complete contracts; their Step 1 records are current ready with owner=false (26/26 hashes verified). This does not resolve the owner-controlled contract contradiction described above or constitute independent approval.
