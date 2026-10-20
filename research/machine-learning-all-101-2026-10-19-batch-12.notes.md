# Batch 12 — authoring notes

Run: `machine-learning-all-101-2026-10-19`  
Pair: `fairness-criteria-and-impossibility-boundaries`  
Current scheduling input: `c50e15a536f4f5705ece38529e7fce7c1a084944aece5c1f2cf9ac4f468f12d4`

## Plan reconciliation

The current ML-11 section in `research/plan-machine-learning-track.md` and the corresponding A/B entries in `research/plan-spec.json` agree on the finite two-group, binary-outcome risk-score model; the three criteria; the nondegeneracy condition; the exact Theorem 1.1 alternative; the exclusions; and the proposed interfaces. There is no substantive design conflict. The scaffold A page requires ML-07. ML-01 remains a required interface in the pair design and is inherited through ML-07's own page requirement; it is not an additional direct page requirement.

No approximate-impossibility theorem, finite-sample inference claim, demographic-parity theorem, equalized-odds theorem, individual-fairness claim, or causal-fairness claim is being authored. KMR Theorem 1.2 is retained only as a scope boundary: its approximation conditions and $f(\varepsilon)$ alternative are substantially more specific than an unspecified approximate claim.

## Dependency inventory and levels

The scaffold manifest records seven items. Item levels are computed from direct in-run item suppliers: `def-group-risk-score-and-calibration` level 2 from batch-8 `def-probability-calibration` (level 1); `def-positive-and-negative-score-balance` and `lem-score-means-as-threshold-rate-areas` level 3; the incompatibility theorem level 4; and the three examples level 4. ML-01's prediction-problem interface is available transitively through ML-07's declared page/item dependency closure; this finite risk-score model does not consume a direct population-risk or empirical-risk claim. Batch level remains 2 with batch 8 as its direct prerequisite. No cycle is present.

## Source reading

- Kleinberg, Mullainathan, and Raghavan, [official 23-page v2 full text](https://arxiv.org/pdf/1609.05807v2): relevant full sections §§1.1–1.2, Definitions 1–3 and Theorem 1.1; §2, complete exact-Theorem-1.1 proof; §3, exact approximation definitions and complete Theorem 1.2 proof, read for scope and excluded-claim boundaries. The exact proof uses groupwise calibration to equate total expected score with positive mass, then the shared positive/negative class mean scores to derive the odds equation. The approximation theorem is not stated in these carriers.
- *Applied Statistics: From Data to Decisions*, [full chapter “Fairness in Algorithmic Decision-Making”](https://stanford-mse-125.github.io/book/lec20-fairness.html): “Predictive parity and calibration” and “The impossibility: you cannot satisfy them all,” including the distinction between the real-valued score theorem and the separate binary-classifier theorem. It is used as an independent treatment and scope check, not as a substitute for the local proof.

## Item checkpoint

### `def-group-risk-score-and-calibration`

- Claim/convention: finite nonempty feature-type and score-bin sets; two groups; a common conditional positive-outcome probability $p_\sigma$ per feature type; one group- and outcome-blind row-stochastic randomization matrix; scores in $[0,1]$; within-group calibration is the cross-multiplied bin identity, including empty bins. Defines $N_t$, expected positive mass $\mu_t$, base rate $\rho_t$, and both instance-level and assignment-level perfect prediction.
- Dependencies: `def-probability-calibration`; item level 2. ML-01's `def-supervised-learning-problem` is transitive through the declared ML-07 prerequisite closure and is not a direct claim supplier for this finite model.
- Readiness evidence: `def-supervised-learning-problem` is closed/ready in the actual full-run snapshot (owner-reconciled current record). After its author completed Step 1, the current `def-probability-calibration` body was rechecked and its ordinary full-run record is `ready`, hash `eec8b2cb0803bb9b13e7829996cd133f6d50922cdbbe3f7dc8f3900acddcde40`.
- Sources/locators: KMR §§1.1–1.2; Stanford book chapter sections listed above. Full relevant texts inspected; both sources are stamped in `batch-12.coverage.json`.
- Validation: definition proof is not applicable; final source, content-policy, dependency, renderer, and proof-contract checks pass for this batch.
- Decision: `ready`, recorded through the ordinary full-run Step-1 recorder; its direct calibration supplier and transitive supervised-problem context are current.

### `def-positive-and-negative-score-balance`

- Claim/convention: in the same finite two-group model, require $0<\mu_t<N_t$ for both groups; define the positive and negative conditional mean assigned scores $\alpha_t$ and $\beta_t$; balance means equality of each separately across groups. Explicitly distinguish these outcome-conditioned means from overall group means and thresholded error-rate equality.
- Dependencies: `def-group-risk-score-and-calibration`; item level 3.
- Sources/locators: KMR §1.1, conditions (B) and (C); Stanford book chapter “The impossibility: you cannot satisfy them all,” real-valued score theorem. Full relevant text inspected; both sources are stamped in `batch-12.coverage.json`.
- Validation: definition proof is not applicable; final source, content-policy, dependency, renderer, and proof-contract checks pass for this batch.
- Decision: `ready`, recorded after its in-run supplier definition was recorded ready.

### `lem-score-means-as-threshold-rate-areas`

- Claim/convention: for each group and finite-valued score in $[0,1]$, the positive-class mean is $\int_0^1\mathrm{TPR}_t(u)\,du$ and the negative-class mean is $\int_0^1\mathrm{FPR}_t(u)\,du$, with threshold event $S\ge u$; ordinary Riemann integrals of finite step functions suffice.
- Proof: two finite-sum calculations, one for each outcome class; endpoint scores 0 and 1 are included and handled by interval lengths 0 and 1. No interchange theorem or choice principle is used.
- Dependencies: `def-group-risk-score-and-calibration`; item level 3.
- Sources/locators: KMR §§1.1–2 for the finite-bin class-conditioned score distributions and Theorem 1.1 proof route; Stanford book chapter section noted above for score-threshold context. The area identities themselves are proved locally. Full relevant text inspected; both sources are stamped in `batch-12.coverage.json`.
- Validation: proof contract and final precheck pass; the final proof-layout check includes this item.
- Decision: `ready`, recorded after its in-run supplier definition was recorded ready.

### `thm-calibration-and-balance-incompatibility-for-risk-scores`

- Claim/convention: in the exact finite KMR model (two groups, binary outcome, shared $p_\sigma$, a common possibly randomized feature-to-bin assignment, scores in $[0,1]$, and $0<\mu_t<N_t$), groupwise calibration and equality of positive- and negative-class mean scores imply equal base rates or that the same assignment is perfectly predictive ($S=Y$ a.s.); then all occupied feature types have endpoint $p_\sigma$. No other fairness criterion or unspecified approximate version is asserted.
- Proof route: sum calibration over bins to get $\mathbb E_t[S]=\rho_t$; partition by outcome, use common conditional means and the finite threshold-rate area identities, then split the algebraic branches $\alpha<1$ and $\alpha=1$.
- Dependencies: `def-group-risk-score-and-calibration`, `def-positive-and-negative-score-balance`, `lem-score-means-as-threshold-rate-areas`; item level 4. No axiom of choice or non-finite selection is used.
- Sources/locators: KMR Theorem 1.1 and complete §2 proof; §3 definitions/proof for Theorem 1.2 inspected only to preserve its exact scope boundary. Stanford book chapter “The impossibility: you cannot satisfy them all” independently states the score theorem and distinguishes it from its binary-classifier companion. Full relevant text inspected; both sources are stamped in `batch-12.coverage.json`.
- Validation: strict proof contract, precheck, proof-layout, render, source, content-policy, and dependency checks pass for this item and its dependency closure.
- Decision: `ready`, recorded after all three direct in-run suppliers were recorded ready.

### `ex-equal-base-rates-admit-constant-calibrated-score`

- Claim/convention: a single feature type with $p_\sigma=1/2$ in each group, one deterministic bin with score $1/2$, and group mass one gives equal base rates and both score-balance criteria without perfect prediction.
- Dependencies: `def-group-risk-score-and-calibration`, `def-positive-and-negative-score-balance`; item level 4.
- Proof/check: direct calibration identity and conditional mean calculation; exact finite witness is recorded in its proof contract.
- Source context: KMR §1.2 gives the constant-score equal-base-rate boundary case; its external URL and locator are in `batch-12.coverage.json`. The exact one-type witness is recalculated locally.
- Validation: strict proof contract, precheck, proof-layout, render, source, content-policy, and dependency checks pass for this item and its dependency closure.
- Decision: `ready`, recorded after both direct in-run suppliers were recorded ready.

### `ex-perfect-risk-prediction-with-unequal-base-rates`

- Claim/convention: two feature types have deterministic outcomes $p_{\sigma_0}=0,p_{\sigma_1}=1$; groups use proportions $(3/4,1/4)$ and $(1/4,3/4)$; deterministic scores $0,1$ produce base rates $1/4,3/4$, calibration, and balanced class means $0,1$.
- Dependencies: `def-group-risk-score-and-calibration`, `def-positive-and-negative-score-balance`; item level 4.
- Proof/check: binwise calibration and conditional mean calculations; exact finite witness is recorded in its proof contract.
- Source context: KMR §1.2 gives the deterministic-feature perfect-prediction boundary case; its external URL and locator are in `batch-12.coverage.json`. The unequal group proportions are recalculated locally.
- Validation: strict proof contract, precheck, proof-layout, render, source, content-policy, and dependency checks pass for this item and its dependency closure.
- Decision: `ready`, recorded after both direct in-run suppliers were recorded ready.

### `ex-threshold-rates-vary-under-score-balance`

- Claim/convention: the explicit two-group score laws have base rate $1/2$, matched first and second score moments, calibration, positive mean $17/25$, and negative mean $8/25$; their TPR/FPR values differ both across groups at threshold $1/2$ and across thresholds $1/2,9/10$.
- Dependencies: `def-group-risk-score-and-calibration`, `def-positive-and-negative-score-balance`, `lem-score-means-as-threshold-rate-areas`; item level 4.
- Proof/check: exact rational finite weighted sums and conditional rates; the item makes no equalized-odds or other threshold-fairness theorem claim. Exact computations are recorded in its proof contract.
- Source context: KMR §§1.1–2 and the Stanford book chapter’s score/threshold distinction; URLs and locators are in `batch-12.coverage.json`. The five-score distributions and every threshold value are constructed and verified locally.
- Validation: strict proof contract, precheck, proof-layout, render, source, content-policy, and dependency checks pass for this item and its dependency closure.
- Decision: `ready`, recorded after all three direct in-run suppliers were recorded ready.

## Readiness and final scoped checks

All seven item readiness records were created in ascending dependency order with `node tools/step1-decisions.mjs record`, without `--owner`; all have `decision: ready` and `owner: false`. The current full-run snapshot verifies every row as closed at its bound source/dependency hash. Their exact hashes and timestamps are in the corresponding `research/machine-learning-all-101-2026-10-19-step1-<id>.json` records.

- `source-fetch-check --stamp` and the subsequent check mode: pass, 4/4 full-text entries stamped and resolved, no drops.
- `proof-contract.mjs --strict`: pass, all 7 items checked, no errors or warnings.
- `precheck.mts`: pass, all 5 proof-bearing items checked.
- `proof-layout.mjs`: pass, 7 items and 13 proof steps, no defects.
- `rendercheck.mjs`: pass, 9 files, no errors or warnings.
- `content-policy.mjs`: pass, 7 scoped items, no errors or warnings.
- `depcheck.mjs` with the batch-12 item selection: pass, no errors or warnings.
- Full-run `item-dependency-levels.mjs check`: fails on empty inventories outside this pair; none of the batch-12 items has a dependency-level error. The batch-12 manifest labels are 2, 3, 3, 4, 4, 4, 4.

The ordinary full-run Step-1 snapshot after recording contains 823 items, 475 ready, and is not closed; all seven batch-12 records are current and closed/ready. The other missing records remain owned by their respective authors and the owner.

## Transitive prerequisite audit

The direct ML-07 calibration carrier is a definition with declared dependencies on the general supervised-prediction model, conditional expectation, probability measure, and Borel sigma-algebra. Its supervised-prediction supplier in turn declares measurable spaces/functions, finite product sigma-algebras, probability measure, experiment/model, and loss/risk interfaces. The relevant actual Definition sections were inspected. In the final full-run snapshot, `def-supervised-learning-problem` is owner-reconciled ready and `def-probability-calibration` is current ready. This batch's finite joint law and finite-bin event identities use no RCD existence theorem, abstract conditional-expectation existence theorem, loss/risk claim, or AC; the calibration definition supplies the binary event convention. ML-07's other page items are not logical suppliers to this batch, and no claims about their local unresolved rows are imported. The ML-07 page's transitive page requirements remain in the actual page dependency graph.

## Current authoring artifacts

- A/B page carriers are frontmatter-only. The A page places four local items and the B page places the three verified finite examples.
- The scaffold manifest records all seven IDs, direct item dependencies, and levels 2, 3, 3, 4, 4, 4, 4. `batch-12.dependency-inputs.json` records the dispatched batch level 2, batch-8 prerequisite, and matching scheduling hashes.
- `batch-12.coverage.json` records the two independent treatments, supported items, locators, and dispositions. `source-fetch-check --stamp` completed: 4/4 source entries fetched and stamped, 4/4 resolved, no drops.
- Proof contracts exist for all seven items and pass strict validation. The native engine's compact page-layout flag remains a mechanical post-authoring action; both authored page bodies are empty.

## Live run status and out-of-scope dependency-check findings

At 2026-10-18 22:14 UTC, `.autopilot/machine-learning-all-101-2026-10-19` was still running `1-scaffold`, at 47/101 covered with nothing in flight. It remains held for owner repair/recertification under `research/machine-learning-all-101-2026-10-19-step1-blockers.json`. Batch 12 did not alter engine state or verdicts.

The latest full-run dependency-level command exited 1 with 79 `empty scaffold inventory` findings, all outside this pair. The exact current page IDs are:

`algorithmic-stability-and-generalization`, `algorithmic-stability-and-generalization-examples`, `distribution-shift-and-domain-adaptation`, `distribution-shift-and-domain-adaptation-examples`, `stochastic-gradient-descent-for-learning`, `stochastic-gradient-descent-for-learning-examples`, `momentum-and-accelerated-training`, `momentum-and-accelerated-training-examples`, `adaptive-gradient-optimizers`, `adaptive-gradient-optimizers-examples`, `overparameterized-training-and-interpolation`, `overparameterized-training-and-interpolation-examples`, `minimum-norm-interpolation-and-double-descent`, `minimum-norm-interpolation-and-double-descent-examples`, `neural-tangent-kernels-and-lazy-training`, `neural-tangent-kernels-and-lazy-training-examples`, `mean-field-training-and-feature-learning`, `mean-field-training-and-feature-learning-examples`, `norm-and-margin-generalization-for-neural-networks`, `norm-and-margin-generalization-for-neural-networks-examples`, `compression-generalization-for-trained-networks`, `compression-generalization-for-trained-networks-examples`, `algorithmic-stability-of-stochastic-training`, `algorithmic-stability-of-stochastic-training-examples`, `self-supervised-and-contrastive-representation-learning`, `self-supervised-and-contrastive-representation-learning-examples`, `generative-adversarial-networks`, `generative-adversarial-networks-examples`, `integral-probability-metrics-and-wasserstein-gans`, `integral-probability-metrics-and-wasserstein-gans-examples`, `anderson-reverse-time-diffusion`, `anderson-reverse-time-diffusion-examples`, `score-sdes-and-reverse-time-generation`, `score-sdes-and-reverse-time-generation-examples`, `conditional-flow-matching-and-transport-paths`, `conditional-flow-matching-and-transport-paths-examples`, `multimodal-contrastive-alignment-and-transfer`, `multimodal-contrastive-alignment-and-transfer-examples`, `foundation-models-transfer-and-scaling-evidence`, `foundation-models-transfer-and-scaling-evidence-examples`, `predictive-calibration-and-uncertainty-under-shift`, `predictive-calibration-and-uncertainty-under-shift-examples`, `mirror-descent-and-adaptive-regularization`, `mirror-descent-and-adaptive-regularization-examples`, `adversarial-bandits-and-importance-weighted-feedback`, `adversarial-bandits-and-importance-weighted-feedback-examples`, `contextual-expert-bandits`, `contextual-expert-bandits-examples`, `pac-mdp-exploration`, `pac-mdp-exploration-examples`, `policy-gradients-reinforce-and-actor-critic`, `policy-gradients-reinforce-and-actor-critic-examples`, `rl-function-approximation-and-off-policy-limits`, `rl-function-approximation-and-off-policy-limits-examples`, `model-based-planning-dyna-and-model-exploitation`, `model-based-planning-dyna-and-model-exploitation-examples`, `offline-reinforcement-learning-and-off-policy-evaluation`, `offline-reinforcement-learning-and-off-policy-evaluation-examples`, `pomdps-and-belief-state-planning-examples`, `imitation-learning-and-dagger`, `imitation-learning-and-dagger-examples`, `constrained-mdps-and-policy-safety`, `constrained-mdps-and-policy-safety-examples`, `bilevel-learning-hypergradients-and-implicit-layers`, `bilevel-learning-hypergradients-and-implicit-layers-examples`, `exact-tiled-attention-and-memory-aware-differentiation`, `exact-tiled-attention-and-memory-aware-differentiation-examples`, `low-rank-adaptation-and-parameter-update-geometry`, `low-rank-adaptation-and-parameter-update-geometry-examples`, `preference-learning-and-direct-preference-optimization`, `preference-learning-and-direct-preference-optimization-examples`, `monotone-risk-calibration-and-deployment-guarantees`, `monotone-risk-calibration-and-deployment-guarantees-examples`, `verifiable-generation-and-test-time-sampling`, `verifiable-generation-and-test-time-sampling-examples`, `active-querying-version-spaces-and-abstention`, `active-querying-version-spaces-and-abstention-examples`, `semi-supervised-graph-propagation-and-pseudolabeling-limits`, `semi-supervised-graph-propagation-and-pseudolabeling-limits-examples`.
