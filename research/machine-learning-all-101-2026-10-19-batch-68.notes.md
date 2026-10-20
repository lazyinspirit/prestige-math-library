# Batch 68 authoring notes

## Scope and design reconciliation

- Owned pair: `score-sdes-and-reverse-time-generation` and its examples page. The scaffold manifest held empty inventories; the inventory below was derived from the current ML-60 design before item carriers were written.
- Read the complete ML-60 section in `research/plan-machine-learning-track.md` and its current `research/plan-spec.json` entry. Their page IDs, required pages, approved scope, conventions, warnings, and three proposed A-page items agree. No plan-spec conflict was found.
- The page-level `requires` list remains exactly the dispatched list: `anderson-reverse-time-diffusion`, `brownian-motion-construction-and-continuity`, `euler-maruyama-convergence`, `itos-formula-and-brownian-martingales`, and `the-ito-integral-with-respect-to-brownian-motion`.
- The plan keeps the reverse-diffusion theorem in P-SDE-02 and the Gaussian-smoothing endpoint proof upstream. This pair does not duplicate either. The score definition, probability-flow theorem, and predictor-corrector algorithm are local. The three designed examples are separate B-page items.
- `euler-maruyama-convergence` remains a required page. The algorithm makes no numerical convergence/error claim, so no P-NUM-SDE-02 rate theorem is a logical item dependency.

## Inventory and dependency levels

| Item | Page | In-run suppliers | Level |
|---|---|---|---:|
| `def-marginal-score-function` | A | none | 0 |
| `thm-probability-flow-ode-marginals` | A | `def-marginal-score-function` | 1 |
| `alg-predictor-corrector-score-sampling` | A | `thm-markov-diffusion-reversal-by-bayes-kernels` (batch 67, level 2), `def-marginal-score-function` | 3 |
| `ex-stationary-ornstein-uhlenbeck-probability-flow` | B | `thm-probability-flow-ode-marginals` | 2 |
| `ex-singular-data-score-truncation` | B | `alg-predictor-corrector-score-sampling`, `def-marginal-score-function` | 4 |
| `ex-vp-finite-terminal-prior-mismatch` | B | `alg-predictor-corrector-score-sampling`, `def-marginal-score-function` | 4 |

The listed `dependency_level` values are one plus the maximum level of each item's in-run `deps` suppliers, or zero without an in-run supplier. External published suppliers do not increase levels. The pair's batch level remains 3 with prerequisite batch 67 and dispatch scheduling input `fd344689bd1fc2065e67ed095d3deb702bb4d3ac76bf0fedb6b05ab35200b4fc`.

- **Scheduling provenance mismatch:** the dispatch hash is `fd344689bd1fc2065e67ed095d3deb702bb4d3ac76bf0fedb6b05ab35200b4fc`, while the current `research/machine-learning-all-101-2026-10-19-batch-dependency-levels.json` records input hash `98be114434e93c4ca10d22c7528b3413353279a3d334f08a6e0be5e0e382545e`. Both assign batch 68 level 3 and prerequisite 67, and the item levels agree with the current manifest. The mismatch is preserved for owner reconciliation; the shared artifact is unchanged.

## Item checkpoints

### `def-marginal-score-function`

- Claim/convention: for a Lebesgue probability density $p_t$, define $s_t(x)=\nabla_x\log p_t(x)$ exactly where $p_t(x)$ is positive, finite, and spatially differentiable; the score is undefined outside that domain. This does not impose regularity on singular data endpoints.
- Dependencies: none; level 0. No axiom is used.
- Sources: Song et al., §3.3, and Raginsky, §7.2. Both use the spatial gradient of the log marginal density; no source result is needed to establish the definition.
- Validation: item carrier written; definition has no proof phase; placement and level 0 verified. Item decision intent: ready if the repository Step-1 recorder loads the full run graph.

### `thm-probability-flow-ode-marginals`

- Claim/convention: for positive classical densities satisfying the displayed forward equation, the field $b-\tfrac12\nabla\!\cdot a-\tfrac12a\nabla\log p$ has a global differentiable flow whose pushforward matches the density family at every time. The theorem explicitly assumes the flow and proves equality only of one-time laws; it claims no equality of path laws or solver accuracy.
- Proof route: expand the full state-dependent diffusion term as a divergence, obtain the weak continuity equation, show both the density family and flow pushforwards solve it, transport compact test functions backward along the flow, then use rational boxes, monotone convergence, and the pi-lambda theorem to identify Borel laws. This proves uniqueness without a choice axiom or a source theorem for density transformation.
- Dependencies: `def-marginal-score-function`, `def-law-or-distribution-of-a-random-element`, `thm-dynkin-pi-lambda`, and `thm-monotone-convergence-for-the-integral`; the only in-run supplier is the score definition, so level 1. Choice-free.
- Sources read: Song et al., §4.3 and Appendix D.1, equations (35)–(38); Särkkä–Solin, §5.2, Theorem 5.4 and full proof; Raginsky, §2.3. The paper's formula rearrangement is not treated as a proof of continuity-equation uniqueness; the local argument above supplies that step.
- Validation: precheck, proof-layout, strict proof contract, rendercheck, and batch-68 dependency label checks passed. Item decision intent: ready; the open Anderson page edge concerns the separate reverse sampler claim, not this theorem.

## Supplier checks and open cross-batch issue

- Read the actual draft body and full proof of `thm-markov-diffusion-reversal-by-bayes-kernels`, plus its direct local suppliers `def-reversed-transition-kernels-for-diffusions`, `lem-reversed-kernels-and-generator-identity`, `lem-elliptic-local-martingale-brownian-representation`, and `lem-continuous-local-martingale-quadratic-variation`. The theorem's positive-density and transition-density hypotheses, uniform nonsingularity, forward-equation/integrability conditions, reverse-time convention, diffusion-divergence term, and reverse martingale-problem uniqueness condition are retained in the algorithm input interface.
- Read the published `alg-unadjusted-langevin-algorithm` definition. The corrector is one ULA step with target density $p_{t_{k+1}}$; its fixed-step update does not assert invariance of that density. The predictor is written as an explicit one-step Euler–Maruyama recurrence, with no numerical error or convergence claim.
- A Step-1 record file exists for `thm-markov-diffusion-reversal-by-bayes-kernels` with hash `469b9fb591053a4bf8c98b76a2871ee06cabe783d0d2a94915b83ea43fea9cc5`, decision `ready`, timestamp `2026-10-18T23:26:26.518Z`. Current closure could not be recomputed because `loadStep3` fails on malformed batch-71 item identities (recording blocker below); this historical authoring record is not independent approval.
- **Open defect, not repaired here:** the actual `thm-markov-diffusion-reversal-by-bayes-kernels` Statement does not state AC, while its `[A1]` and proof use AC through `lem-elliptic-local-martingale-brownian-representation` and the vector Lévy characterization. The consumer algorithm states AC and includes `def-axiom-of-choice`; its cross-batch item and required-page rows remain `open` for owner reconciliation. The exact supplier and its current body are the evidence; no source excerpt or approval is inferred.
- The batch-67 page and item carriers are present and draft; the owner direction permits draft in-run dependencies. The supplier's recorded readiness is historical and current closure could not be recomputed; the AC interface defect independently keeps the consumer's dependency disposition open.
- No batch-67 file was edited. No P-SDE-01 or P-SDE-03 item was copied or altered.

## Sources

- Song et al., *Score-Based Generative Modeling through Stochastic Differential Equations*, arXiv:2011.13456: read §3.4, §4.2, §4.3, Appendix D.1 and Appendix G. The source gives the general Fokker–Planck rearrangement/probability-flow formula and the predictor/corrector structure; the proof of marginal equality and the exact input conditions are supplied locally/upstream rather than asserted from the paper's abbreviated derivation.
- Särkkä and Solin, *Applied Stochastic Differential Equations*: read §5.2 Theorem 5.4 and its proof, §5.5, §6.1, and Example 5.7. This supplies an independent book treatment of the Fokker–Planck equation and linear-Gaussian SDE moments; the local proof retains the extra flow and uniqueness conditions.
- Raginsky, *Stochastic Differential Equations: A Systems-Theoretic Approach*: read §2.3 and §7.1–7.2. The reverse-drift derivation in §7.2 is explicitly heuristic and is context only; the assigned pair relies on the local batch-67 reverse-time theorem with its exact assumptions.
- Full-text URLs, per-item support/disposition, searches, retrieval checks, and stamps are recorded in the batch coverage/source-evidence files. No source retrieval failure or recovery retry has occurred.
- Source reading detail verified during this batch: Song et al. §3.3 was inspected in full for the marginal-score convention, in addition to the previously read SDE, probability-flow, VP, and predictor-corrector sections. The exact historical search query strings were not retained in the handoff and are not reconstructed.

## Validation and handoff

- Item carriers, A/B pages, proof contracts, coverage, source evidence, dependency inputs, cross-batch rows, and ordinary Step-1 decisions are being completed only in batch-68-owned files.
- Final scoped validation: `node tools/tsx-run.mjs tools/precheck.mts <six item paths>` passed 4 proof-bearing items with 0 failures (the definition and algorithm have no proof phase); `node tools/proof-layout.mjs <six item paths>` passed 6 items, 15 steps, 0 defects; `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-68.proof-contracts.json --strict` passed 6/6 with 0 errors/warnings; `node tools/rendercheck.mjs <six item paths>` passed all six source files, KaTeX spans, and YAML frontmatter. Batch-68 manifest/carrier dependencies and labels match 6/6. Full-run `item-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` exits 1 on nine unrelated errors: empty inventories for the batch-60 GAN pair, batch-72 predictive-calibration pair, and batch-98 monotone-risk pair, plus missing item IDs in the batch-71 foundation-models A page and two B entries. Running the dependency graph over all run pages reports the assigned six labels as 0, 1, 3, 2, 4, 4 with no batch-68 errors.
- Any item depending on the open P-SDE-02 interface remains escalated; no page summary, source excerpt, supplier proof, or acceptance is fabricated.
- Live read-only autopilot status was recomputed with the repository's prescribed command: `1-scaffold` is active at 79/101 covered, nothing is in flight, and the stage is held by the shared owner-repair blocker `research/machine-learning-all-101-2026-10-19-step1-blockers.json`. No engine state was changed. `git log -1 --oneline` reports `50139bdcb6 Defer compact construction artifact scans until author drain`.
- Source retrieval check completed: the initial `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-68.coverage.json --stamp --timeout-sec 30` returned `7/7 source(s) fetch-verified (7 newly stamped)`; the final stamp returned `7/7 fetch-verified (0 newly stamped)` and `7/7 resolved (0 documented drops; not fetch stamps)`, exit 0. Four distinct full-text source URLs were verified across seven A/B-page rows; no recovery retries or drops.

## Remaining item checkpoints

### `alg-predictor-corrector-score-sampling`

- Claim/convention: the definition uses the actual terminal law $P_T$, the positive-density reverse drift $-b+\nabla\!\cdot a+a\nabla\log p$, one Euler–Maruyama predictor step, and one ULA correction targeting $p_{t_{k+1}}$ at each step. It states AC because the current upstream reverse proof uses it. It claims no finite-step exactness, invariance, convergence rate, or solver error bound.
- Interface hypotheses retained: complete right-continuous filtered Brownian setup with independent increments, continuous nonexplosive Markov Itô diffusion, pathwise drift/diffusion integrability, bounded inverse diffusion matrix, positive normalized marginal and transition densities, marginal/Chapman–Kolmogorov identities, classical forward equations, differentiation/integration-by-parts conditions, and unique nonexplosive reverse martingale problem. State-dependent diffusion divergence and reverse-time convention are explicit.
- Dependencies: `thm-markov-diffusion-reversal-by-bayes-kernels` (batch 67, level 2) makes this item level 3; local score, AC, Brownian, normal, and ULA interfaces are also declared. The required Euler–Maruyama page is retained, but this item makes no convergence or numerical error claim.
- Sources read: Song et al., §4.2 and Appendix G Algorithm 1; Särkkä–Solin, Algorithm 8.1; Durmus–Moulines, §1 equations (1)–(2), including the fixed-step ULA target caveat; Raginsky, §7.2, treated as heuristic context only.
- Readiness: the reverse-time supplier edge and required page remain open for owner reconciliation because the supplier Statement omits AC used by its proof. No supplier text was modified.

### `ex-stationary-ornstein-uhlenbeck-probability-flow`

- Claim/convention: for $dX_t=-\gamma X_tdt+\sqrt{2\gamma\theta}dW_t$ with independent $X_0\sim N(0,\theta)$, the explicit solution has stationary law $N(0,\theta)$, score $-x/\theta$, zero Fokker–Planck right-hand side, and zero probability-flow velocity. The verification now states the filtered Brownian increment hypotheses and justifies independence of the deterministic Itô integral from $X_0$ using an almost-sure subsequence of its elementary approximants.
- Dependencies: the local probability-flow theorem is the highest in-run supplier (level 1), so this item is level 2. The added published subsequence theorem supports the measurability argument and does not change its level.
- Sources read: Särkkä–Solin, §5.2 Theorem 5.4/proof, Example 5.7 and §6.1; Raginsky, §2.3 and Chapter 2 Problem 8; Song et al., §4.3 and Appendix D.1. Local calculations supply the solution law, score, Fokker–Planck check, and flow.
- Validation: precheck, proof-layout, strict proof contract, rendercheck, and batch-68 dependency label checks passed. Item decision intent: ready; the example does not consume the open reverse-time supplier.

### `ex-singular-data-score-truncation`

- Claim/convention: scalar Brownian data has $P_0(\{0\})=1$, no Lebesgue density or score at zero, and for $t>0$ density $N(0,t)$ with score $-x/t$. For every positive cutoff, $E|W_\epsilon|^2=\epsilon$; continuity yields almost-sure endpoint convergence, while bounded-continuous tests and dominated convergence yield $P_\epsilon\Rightarrow P_0$.
- Dependencies: `alg-predictor-corrector-score-sampling` is level 3, so this item is level 4; Brownian, score, normal-density, law, weak-convergence, DCT, and AC interfaces are explicit. The algorithm prerequisite remains open because its reverse-time supplier statement omits AC used in the proof.
- Sources read: Särkkä–Solin, §5.2 Theorem 5.4/proof; Raginsky, §2.3. These provide forward-density context; the endpoint singularity and convergence claims are proved locally.
- Validation: precheck, proof-layout, strict proof contract, rendercheck, and batch-68 dependency label checks passed. Item decision intent: escalated because the algorithm dependency remains open.

### `ex-vp-finite-terminal-prior-mismatch`

- Claim/convention: for continuous strictly positive finite schedule $\beta$ and point-mass start, the explicit VP solution has variance $v_t=1-e^{-\int_0^t\beta}$, score $-x/v_t$ for positive times, and finite terminal variance strictly below one. Its true terminal law therefore differs from $N(0,1)$, so that standard-Gaussian substitution changes the algorithm's prescribed initial law.
- Dependencies: `alg-predictor-corrector-score-sampling` is level 3, so this item is level 4; deterministic Gaussian Itô integration, the Itô formula, normal density, score, law, Brownian, and AC interfaces are explicit. The algorithm prerequisite remains open at the reverse-time interface.
- Sources read: Song et al., §3.4; Särkkä–Solin, §§5.2 and 6.1; Raginsky, §§2.3 and 7.1. The integrating-factor solution, variance integral, score, and strict mismatch are calculated locally.
- Validation: precheck, proof-layout, strict proof contract, rendercheck, and batch-68 dependency label checks passed. Item decision intent: escalated because the algorithm dependency remains open.

## Step-1 recording blocker

- Attempted `node tools/step1-decisions.mjs record` for all six items without `--owner`. Every invocation exited before writing with `Duplicate item undefined` from `loadStep3`.
- The shared run loader encounters batch-71 pages with string-valued `items` instead of item objects: `foundation-models-transfer-and-scaling-evidence` lists `def-foundation-model-as-broad-pretraining-and-adaptation` as a string, and its B page lists `ex-empirical-language-model-scaling-law` and `ex-pretraining-adaptation-interface-limitations` as strings. A second string creates the duplicate `undefined` key. The full dependency-level gate also reports those missing IDs. These pages are outside batch 68 and were not edited.
- No Step-1 record was written for this batch. After the shared loader is repaired, the content-based decisions are `ready` for `def-marginal-score-function`, `thm-probability-flow-ode-marginals`, and `ex-stationary-ornstein-uhlenbeck-probability-flow`; `escalated` for the predictor-corrector algorithm and its two dependent examples because the AC supplier interface remains open.
