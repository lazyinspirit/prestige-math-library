# Batch 84 authoring notes

Run: `machine-learning-all-101-2026-10-19`  
Role/batch: beta / 84  
Assigned A/B pair: `policy-gradients-reinforce-and-actor-critic`  
Files owned: the ten listed draft items, the A/B page frontmatter manifests, batch-84 evidence files, and item-level readiness records. No published item, shared plan, engine state, or verdict was edited.

## Item inventory and levels

The authored inventory follows the batch manifest and the dependency-level input. The level is zero for items without an in-run supplier and otherwise one plus the maximum supplier level.

| Item | Page | Level | Main in-run dependency path |
|---|---|---:|---|
| `def-differentiable-stochastic-policy` | A | 1 | batch 80 `def-finite-markov-decision-process` (0) |
| `lem-policy-score-has-zero-conditional-mean` | A | 3 | policy definition (1), batch 81 path-law lemma (2) |
| `thm-policy-gradient-theorem` | A | 4 | score-mean lemma (3), batch 81 episode-return definition (3); also batch 80 discounted value interface (2) |
| `alg-one-step-actor-critic` | A | 4 | batch 81 episode-return definition (3) and path-law lemma (2) |
| `alg-reinforce` | A | 5 | policy-gradient theorem (4) |
| `lem-action-independent-baseline-does-not-bias-policy-gradient` | A | 5 | policy-score lemma (3), policy-gradient theorem (4) |
| `alg-reinforce-with-baseline` | A | 6 | REINFORCE (5), baseline lemma (5) |
| `ex-actor-critic-bootstrap-can-bias-policy-update` | B | 5 | one-step actor-critic (4) |
| `ex-reinforce-one-step-bernoulli-mdp` | B | 6 | REINFORCE (5) |
| `ex-action-independent-baseline-eliminates-variance` | B | 7 | baseline-adjusted REINFORCE (6), baseline lemma (5) |

The exact item dependencies remain in `machine-learning-all-101-2026-10-19-batch-84.pages.json`; each in-run item edge and its supplier excerpt/readiness evidence is a separate row in `machine-learning-all-101-2026-10-19-batch-84.cross-batch-dependencies.json`. The A page retains its declared `requires`: `conditional-expectation`, `tabular-prediction-and-control`, and `the-total-derivative`. Plan prose also names ML-72 and ML-73; batch 81's current tabular page directly requires the finite-MDP page, so ML-72 is already transitive through ML-73. No additional page edge was inferred.

The assignment dispatch says prerequisite batch `81`, while the current `batch-dependency-levels.json` row for batch 84 says level 2 and `requires: [80, 81]`. The direct batch-80 item edges are genuine (`def-finite-markov-decision-process`; the theorem also directly uses `def-discounted-return-and-value-functions`). Preserve those declared dependencies and reconcile the dispatch label/shared scheduling input at the owner gate; no shared scheduling artifact was edited. Dispatch input named in the task: `adea8bf35c5fbfb02eddb759e68a9a82930d04783bb09ca14b99eec323baa71b`; current dependency artifact's recorded `input_sha256`: `69025dde350f98b7148b6e768b5696a275290fe171748be48746b2924054386b`.

## Plan comparison and mathematical correction

The controlling design is ML-76 in `research/plan-machine-learning-track.md` at lines 521–523. Its task-source locator calls for Sutton and Barto, Chapter 13, PDF pp. 343–361 (printed pp. 323–341). The current plan-track file SHA-256 is `0f469eecbfeb051f1fac59a008f7be02df42ca5738617ac53b6b4644ce0aa017`; the plan-spec ML-76 row cites this same current hash and has matching page prerequisites. There is no conflict between those two copies, but both state the episodic score identity without the start-time discount factor.

The actual return convention from `def-episodic-returns-td-errors-and-policy-support` is `G_t = sum_{k=t}^{T-1} gamma^{k-t} R_{k+1}`, and the objective is the start-state discounted value `J(theta)=V^{pi_theta}(s_0)`. Differentiating its trajectory likelihood and removing pre-action rewards gives

`grad J(theta) = E[sum_{t<T} gamma^t grad log pi_theta(A_t|S_t) G_t]`.

Sutton and Barto §13.3, Eq. 13.6, explicitly includes `gamma^t`; the local theorem proof derives it from the stated return convention. Without it, rewards from time `t` are weighted as though the objective discounted from time `t`, rather than from the fixed start state. This is material for `gamma<1` and `t>0`.

Affected claims: `thm-policy-gradient-theorem`, `alg-reinforce`, `lem-action-independent-baseline-does-not-bias-policy-gradient`, and `alg-reinforce-with-baseline`, plus the two B examples that depend on REINFORCE or the baseline algorithm. Their authored formulas retain the corrected factor. The mismatch is escalated for plan/plan-spec reconciliation; no plan file was changed. The one-step actor-critic definition separately carries `I_t=gamma^t` and claims no unbiasedness or convergence guarantee.

The page-level design names ML-72 and ML-73. Batch 81's policy-action-state-reward path law requires AC; this batch carries `def-axiom-of-choice` in the score proof, policy-gradient theorem, algorithms, baseline result, and examples that inherit those general interfaces. The theorem proof uses it through the actual path-law supplier. Finite example arithmetic is calculated directly from its explicit finite distribution.

## Source reading and retrieval resolution

Two independent full-text treatments support the A page. The full accessible Stanford-hosted 455-page second-edition draft by Sutton and Barto was read through §§13.1–13.6, printed pp. 266–276. Williams (1992) was read as a complete 28-page article, including §§2, 4–5 and Appendix A.1–A.2. Williams uses an undiscounted total-reinforcement convention in the relevant episodic argument; it is not used to omit `gamma^t`. Both sources and their supported items/locators/dispositions are recorded in the batch coverage and source-evidence files.

Retrieval history is preserved in `machine-learning-all-101-2026-10-19-batch-84.source-evidence.json` under `source_resolution`. The task-assigned URL `SuttonBartoIPRLBook2ndEd.pdf` yielded an earlier 352-page draft whose Chapter 13 is Neuroscience. The official 2018 PDF reader returned HTTP 502; direct attempts at both www and non-www hosts failed TLS hostname verification; a chapter extract returned 404. Search then found the complete Stanford-hosted `SuttonBartoRL.pdf`, which was fetched, inspected, and stamped. Recovery stopped on that successful alternative; failure-route timestamps not retained in the author log remain null in the source-resolution record. This resolves the mathematical reading with a complete alternative source but leaves the exact task locator/version for owner reconciliation. The source is not marked dropped. The selected Stanford draft stamp is 10029704 bytes, SHA-256 prefix `94b195c3d5f73878`, 455 pages, at `2026-10-18T22:52:26.417Z`. Williams stamp is 648357 bytes, SHA-256 prefix `e1029df5459f4a83`, 28 pages, at `2026-10-18T22:52:26.513Z`.

Harvested results and dispositions are itemized in `machine-learning-all-101-2026-10-19-batch-84.coverage.json`; proof arguments and exact item dependencies for the alternative reading are in the `source_resolution` record. No source excerpt, fetch stamp, or proof completion was invented.

## Current supplier evidence

The actual full-run Step-1 snapshot was checked against supplier bodies. These direct in-run suppliers had current closed `ready` records:

| Supplier | Batch | Step-1 hash | Recorded at | Owner flag |
|---|---:|---|---|---|
| `def-finite-markov-decision-process` | 80 | `c2dab4d4007e619d36bc9db7ff372df846764d7a905c92f0a19c6c2bc50079c7` | `2026-10-18T21:55:41.640Z` | true |
| `def-discounted-return-and-value-functions` | 80 | `ae66919c28a89406d8fb278c2821bbb9670f0ea092fb46f3f63da24bdc694c31` | `2026-10-18T21:55:56.558Z` | true |
| `lem-finite-mdp-policy-action-state-reward-path-law` | 81 | `f23dd0a32814efa78d0fc3dab0cf61a044612bf4d4c26a9ba0e2c5230ec69e58` | `2026-10-18T22:44:29.482Z` | false |
| `def-episodic-returns-td-errors-and-policy-support` | 81 | `b404742289d48396fdd5dc2fcd06fa9ba1c43a4c537833794cd2778803c27984` | `2026-10-18T22:44:32.312Z` | false |
| `thm-finite-mdp-policy-induces-reward-state-chain` | 80, transitive | `15e72d2883d31124cd83edc38b73b9e7aa959df09421ddddf9c21bf11ac52246` | `2026-10-18T21:55:53.224Z` | true |

The `owner:true` supplier records are carried as current evidence only; they are not treated as independent approval. Full relevant supplier statements/proofs were inspected, including the transitive AC/Ionescu–Tulcea path-law argument and the discounted absorbing-extension convention. No dependent claim is declared accepted.

## Authored proof and example route

- The policy definition fixes a finite state/action interface, open Euclidean parameter domain, total differentiability, and a fixed positive common support so every sampled log score is defined.
- The zero-conditional-mean lemma conditions on finite pre-action history atoms, obtains the conditional action probabilities from the actual path law, differentiates the finite normalization sum, and handles zero-probability and terminal atoms explicitly.
- The episodic theorem codes the countable finite trajectory set, differentiates each positive-likelihood path, applies the stated summable remainder envelope, uses the conditional score identity to remove earlier rewards, and derives the required `gamma^t` factor.
- The baseline lemma proves the baseline-score term is zero using the pre-action filtration, finite score/baseline bounds, the geometric sum, and dominated convergence. It does not claim every baseline reduces variance.
- The REINFORCE procedures freeze the policy for each episode and update once after collecting all returns; the baseline variant freezes its finite state baseline before the episode. Updates are assumed to stay in the stated open parameter domains.
- The one-step actor-critic uses the current pre-update parameters for both increments and discounts the actor trace. The four-state B example computes true gradient `0` and expected first actor increment `1/8` under the stated inaccurate critic.
- The Bernoulli B example computes both the one-step estimator expectation and objective derivative as `1`. The baseline B example computes variance `1` without its baseline and variance `0` with `b(s)=1/2`; this is one finite case only.

Proof contracts contain all actual numbered steps, input tags, exact current supplier-section excerpts, boundary cases, and hand-checked finite calculations. Proof layout and source resolution remain authoring evidence, not independent approval.

## Scoped checks and blockers

- `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-84.coverage.json`: passed, 2/2 fetch-verified and 2/2 resolved.
- `node tools/proof-layout.mjs` on the ten explicitly assigned items: passed, 10 items, 21 steps, 0 defects.
- `node tools/tsx-run.mjs tools/precheck.mts` on all six proof-bearing items: passed, 6 checked, 0 failing.
- `node tools/rendercheck.mjs` on all ten items and both pages: passed, 12 files, renderer YAML/KaTeX checks clean.
- `node tools/manifest-deps.mjs research/machine-learning-all-101-2026-10-19-batch-84.pages.json`: passed, 10 items, no missing dependency arrays or manifest errors.
- `node tools/content-policy.mjs research/machine-learning-all-101-2026-10-19-batch-84.pages.json`: passed, 10 scoped items, 0 errors and 0 warnings.
- Scoped `statement-first` inspection: passed, all 10 item statements and reference sections meet the uninterrupted-statement and one-line reference rules.
- Carrier/page/edge alignment check: passed, 10 items, 25 cross-batch rows, 0 defects; proof-contract audit: 10 items, 21 numbered steps, supplier excerpts match current source sections.
- `node tools/manifest-integrity.mjs --run machine-learning-all-101-2026-10-19`: passed, all 202 scoped pages present, no scope drift.
- `node tools/item-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19`: whole-run check exits 1 on empty scaffold inventories in other batches and existing `def-pac-mdp-known-state-action-mdp` (`declared 3`, computed 4). It reported no level defect for batch-84 items. Other batches were not edited.
- `node tools/batch-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19`: whole-run recomputation is blocked while loading another owner's `items/ex-matched-observation-mrps-have-distinct-bellman-errors.md`; its double-quoted frontmatter locator contains an unescaped `\gamma` at line 22, column 113. The native YAML parser reports `Invalid escape sequence \g`. This is outside batch 84 and was not edited. The current recorded batch graph still lists batch 84 at level 2 with prerequisites 80 and 81; a current recomputation remains for owner reconciliation.
- Final `step1-decisions.mjs record` entries: 4 `ready` and 6 `escalated`. Ready records are authoring readiness only; escalations remain open for owner review and no record constitutes proof approval.

## Step-1 item decisions

| Decision | Items |
|---|---|
| `ready` | `def-differentiable-stochastic-policy`; `lem-policy-score-has-zero-conditional-mean`; `alg-one-step-actor-critic`; `ex-actor-critic-bootstrap-can-bias-policy-update` |
| `escalated` | `thm-policy-gradient-theorem`; `alg-reinforce`; `lem-action-independent-baseline-does-not-bias-policy-gradient`; `alg-reinforce-with-baseline`; `ex-reinforce-one-step-bernoulli-mdp`; `ex-action-independent-baseline-eliminates-variance` |

The native per-item records are `research/machine-learning-all-101-2026-10-19-step1-<item-id>.json`. The theorem and its REINFORCE/baseline consumers are escalated because the shared ML-76 claim omits `gamma^t`; the B Bernoulli examples are individually exact at time zero but remain open because their direct REINFORCE supplier is escalated. No escalation was overwritten and `--owner` was not used.
