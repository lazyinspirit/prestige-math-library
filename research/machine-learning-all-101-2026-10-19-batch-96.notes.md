# Batch 96 authoring notes

Run: `machine-learning-all-101-2026-10-19` · pair: `preference-learning-and-direct-preference-optimization` · role: beta.

## Controlling plan, assignment, and run state

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the beta batch task, the dependency-order task, the owner authoring direction, the complete ML-88 design at `research/plan-machine-learning-track.md` L590–604, the matching `plan-spec.json` entries, the batch-96 page scaffold, and `research/machine-learning-all-101-2026-10-19-batch-dependency-levels.json`.

The active plan and plan-spec agree on A/B identities, title, category, order, six planned A items, finite-action scope, Gibbs formula, DPO reward substitution and gradient route, caveats, examples, and primary paper. The only conflict is prerequisite metadata: the ML-88 design prose says `ML-07/13/37` plus KL nonnegativity, while the current batch scaffold and plan-spec require `automatic-differentiation-and-backpropagation`, `calibration-proper-losses-and-surrogate-classification`, `ml02-linear-classification`, and `variational-inference-and-evidence-lower-bound`. The dispatch dependency artifact says batch 96 is level 2 with prerequisite batches 8, 14, and 38, which match the first three pages but has no batch for the fourth. Preserve the assigned page `requires` metadata; the owner controls any reconciliation. The ML-02 logistic supplier is used for the sigmoid definition. The finite KL and DPO arguments are drafted directly and do not use an ELBO.

The exact required page `variational-inference-and-evidence-lower-bound` is absent from `library/`. The existing `variational-autoencoders-and-the-elbo` page has a different ID and cannot be substituted without owner direction. A-page page-requirement row remains open for this supplier. No item claim or proof below assumes its body.

Native status was checked with `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run machine-learning-all-101-2026-10-19 --state-dir .autopilot/machine-learning-all-101-2026-10-19`: run remains at `1-scaffold`, 61/101 covered, no worker in flight, with the existing owner-held scaffold blocker. The ordinary full-run Step-1 decision check before this batch was populated returned 771/1045 current items ready and an open run; the two batch-96 page inventories were still empty then. No engine state, verdict, shared plan, or other pair was changed.

## Inventory and item dependency levels

The item inventory and direct logical dependencies were written to `research/machine-learning-all-101-2026-10-19-batch-96.pages.json` before any carrier. Batch level remains 2; `batch_requires` remains 8, 14, and 38. Item levels count in-run item dependencies only. No cycle is present.

| Item | Claim/interface | Direct logical dependencies | Level |
|---|---|---|---:|
| `def-kl-regularized-policy-improvement` | States the finite KL support convention and defines the KL-regularized policy objective | `def-finite-kullback-leibler-divergence`; `def-natural-logarithm` | 0 |
| `def-bradley-terry-preference-model` | Defines the finite-prompt Bradley–Terry comparison model using the supplied logistic sigmoid | `def-binary-logistic-and-multiclass-softmax-models` (batch 14) | 2 |
| `thm-finite-action-gibbs-policy-optimum` | Proves normalization, the Gibbs maximizer, uniqueness, and the KL objective gap | `def-kl-regularized-policy-improvement`; `def-proper-scoring-rule` and `thm-log-and-brier-strict-propriety` (batch 8) | 2 |
| `thm-dpo-reward-policy-reparameterization` | Proves reward-policy log-ratio cancellation, prompt-offset equivalence, and the finite preferred-minus-dispreferred loss gradient | `def-bradley-terry-preference-model`; `def-kl-regularized-policy-improvement`; `thm-finite-action-gibbs-policy-optimum`; published chain rule, log derivative, and exponential derivative | 3 |
| `rem-preference-coverage-and-model-misspecification` | Records finite-response, comparison-coverage, connected-support, and statistical-scope limits | `def-bradley-terry-preference-model`; `def-kl-regularized-policy-improvement`; `thm-finite-action-gibbs-policy-optimum`; `thm-dpo-reward-policy-reparameterization` | 4 |
| `alg-direct-preference-optimization-finite-budget` | Specifies finite mini-batch gradient descent, stable loss evaluation, AD call, and finite status return | `def-bradley-terry-preference-model`; `thm-dpo-reward-policy-reparameterization`; finite straight-line program; C1-map definition; published reverse-mode algorithm and correctness theorem | 4 |
| `ex-two-response-kl-regularized-gibbs-policy` | Verifies the exact two-response policy $(1/4,3/4)$ | `def-kl-regularized-policy-improvement`; `thm-finite-action-gibbs-policy-optimum`; `def-natural-logarithm` | 3 |
| `cex-disconnected-comparison-support-does-not-identify-policy` | Refutes policy identification from disconnected observed comparisons | Bradley–Terry definition; KL objective definition; finite-action optimum theorem; `def-natural-logarithm` | 3 |
| `ex-prompt-reward-offset-leaves-policy-unchanged` | Verifies prompt-constant invariance of BT probabilities and the Gibbs policy | Bradley–Terry definition; KL objective definition; finite-action optimum theorem | 3 |
| `cex-zero-reference-support-breaks-dpo-log-ratio` | Refutes extension of the logarithmic DPO reparameterization to a zero reference coordinate | KL objective definition; DPO reparameterization theorem; `def-natural-logarithm` | 4 |

## Supplier inspection and interface decisions

- Batch 14: read `def-binary-logistic-and-multiclass-softmax-models` and its finite linear-classifier supplier. The sigmoid is defined on finite real inputs and lies strictly between 0 and 1. Current Step-1 records for both suppliers are `ready`, owner-reconciled on 2026-10-18. The Bradley–Terry definition uses only this sigmoid interface.
- Batch 8: read the full proof of `thm-log-and-brier-strict-propriety`, including the finite-log-loss boundary argument. It yields the needed choice-free fact $D(p\|q)\ge0$, equality iff $p=q$, for finite probability vectors; the Gibbs theorem uses it with its positive Gibbs vector. Its current Step-1 record is `ready`, owner-reconciled on 2026-10-18. The finite Gibbs proof does not use the general measure-theoretic KL theorem or AC.
- Batch 38: read the complete current AD page inventory, recurrence algorithm, and shared-parameter gradient theorem. Their Step-1 records are `ready`; the precise graph and fixed-strict-branch conditions are retained. The DPO algorithm uses the more general published scalar-graph reverse-mode interface (finite C1 program, fixed strict branch, no derivative at an ambiguous boundary), whose algorithm and correctness proof were read. The DPO algorithm does not claim floating-point accuracy or optimization convergence.
- The local objective definition states its finite KL formula and support convention explicitly. The finite Gibbs theorem restricts the reference to full support, making every log ratio and objective term finite. The zero-support counterexample is outside that theorem's hypotheses and uses the explicitly stated extended KL boundary convention.
- No Axiom of Choice or other non-finite selection axiom is used. All arguments involve finite sets, sums, and real calculus.

## Source search, reading, and fetch evidence

Two independent full-text treatments were read for the A page:

1. Rafailov et al., `https://arxiv.org/pdf/2305.18290v3`: arXiv v3 PDF (27 pages), fetched 2026-10-18 23:06 UTC, 1,299,212 bytes, SHA-256 prefix `92cb3a2b71362acd`. Read the KL objective and optimal-policy argument (§3 Eq. 3, §4 Eqs. 4–7, Appendix A.1–A.2 Eqs. 11–17), the reward-class discussion (§5.1/Theorem 1), the gradient section (Appendix A.4), and Appendix B implementation. The main Eq. 7 has the preferred-minus-dispreferred orientation used here. Appendix A.4 Eq. 21 reverses that orientation relative to Eq. 7; its sign/orientation is excluded as a proof source, and the finite gradient is derived locally from Eq. 7.
2. Purdue course lecture notes, `https://www.cs.purdue.edu/homes/ribeirob/courses/Spring2026/lectures/18-pref-opt/PrefOpt.html`: full relevant course page fetched 2026-10-18 23:06 UTC, 1,196,795 bytes, 31,362 extracted text characters, SHA-256 prefix `e104f624034b0fc5`. Read §2 Bradley–Terry, §§3c/3e KL regularization and its Gibbs/log-ratio derivation, and §4a DPO substitution and loss.

`node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-96.coverage.json --stamp` passed: 4/4 page-source entries fetched and stamped, 0 documented drops. No retrieval failed, so no `source_resolution` failure record is applicable. Coverage records the supported item IDs and each result's disposition. Neither source is used as a substitute for the local finite proof. No consistency, countable-string partition, or generalization theorem is imported.

## Current authoring state

- Page manifest inventories and dependency levels: complete before carriers.
- A/B item carriers, frontmatter-only pages, contracts, batch coverage, dependency inputs, and decision records: complete. All ten items have native Step-1 `escalated` records because the exact required ELBO page is absent and the dispatch/current scheduling hashes differ.
- Open reconciliation: exact required page `variational-inference-and-evidence-lower-bound` is absent; preserve its page edge and keep affected readiness escalated for owner reconciliation.

## Authoring status

All assigned A/B carriers and evidence are complete. The absent `variational-inference-and-evidence-lower-bound` page and scheduling-input mismatch require owner reconciliation before these items can be marked ready. No other pair’s files or shared plan/schedule were edited.

### Completed item: `def-kl-regularized-policy-improvement`

Defined the extended finite KL boundary convention and the objective on a finite nonempty response alphabet; the full-support reference regime makes the objective finite on the entire simplex. Direct suppliers: `def-finite-kullback-leibler-divergence` (finite direction and support convention) and `def-natural-logarithm` (positive domain). No in-run supplier; manifest level 0. Source locators: DPO §3 Eq. (3), Appendix A.1; PrefOpt §§3c/3e. Choice-free finite setting; no proof phase applies. Final render and content checks passed; readiness is escalated for the page/scheduling blockers below. Next item: `def-bradley-terry-preference-model` at level 2.

### Completed item: `def-bradley-terry-preference-model`

Defined finite prompt and response sets, finite reward values, ordered distinct comparisons, sigmoid probability, reverse orientation, and the model's non-universal scope. Direct supplier: `def-binary-logistic-and-multiclass-softmax-models` (batch 14), whose exact sigmoid formula and finite domain were read; its transitive linear-score definition was read. Current supplier readiness records are ready and the manifest dependency level is 2. Source locators: Rafailov et al. §3/§4 and Purdue PrefOpt §2. No proof phase applies. Next item: `thm-finite-action-gibbs-policy-optimum` at level 2.

### Completed item: `thm-finite-action-gibbs-policy-optimum`

Proved $Z\in(0,\infty)$, normalization/full support of $p^*$, the exact objective-gap identity, and uniqueness for all finite probability vectors including those with zero coordinates. Direct dependencies: local finite KL objective definition and the batch-8 log-loss propriety theorem. Its full finite proof is choice-free; no measure-theoretic KL or AC branch is used. Source locators: Rafailov et al. Appendix A.1 Eqs. (11)–(15); Purdue PrefOpt §3e. Exact supplier facts are labeled F1–F2; the objective gap uses the same KL direction $D(p\|p^*)$. Final precheck, proof-layout, proof-contract, rendering, and focused dependency checks passed. Next item: `thm-dpo-reward-policy-reparameterization` after checking the item-level finite-output interface and gradient domains.

### Completed item: `thm-dpo-reward-policy-reparameterization`

Proved prompt-level reward log-ratio cancellation, the converse policy-to-reward construction, prompt-constant invariance, and the exact finite preferred-minus-dispreferred negative-log-likelihood gradient. The domain is finite response support, positive reference and policy probabilities, finite rewards, beta > 0, and an open C1 parameter domain; no empirical consistency or infinite-sequence claim is included. Direct dependencies: both local definitions, finite Gibbs theorem, and the published finite-dimensional chain rule/log/exponential derivatives. Source locators: Rafailov et al. §4 Eqs. (6)–(7), Appendix A.2/A.4; Purdue PrefOpt §§3e–4a. Appendix A.4's reversed orientation is explicitly excluded; the gradient is derived from the preferred-minus-dispreferred likelihood in Eq. (7). No axiom use. Final precheck, proof-layout, proof-contract, rendering, and focused dependency checks passed. Next item: `alg-direct-preference-optimization-finite-budget` at level 4; its gradient evaluation will use the explicit formula, and reverse mode only on the C1 conditional log-probability graphs.

### Completed item: `alg-direct-preference-optimization-finite-budget`

Specified finite data, full-support references and policies, fixed nonempty mini-batches, nonnegative finite learning rates, finite horizon, exact reverse-mode calls on C1 policy log-probability graphs, stable loss-value evaluation, explicit smooth gradient, domain/branch statuses, and the T=0 case. Direct dependencies are the BT model, the locally proved DPO gradient formula, and published finite-graph reverse AD. The exact gradient never differentiates through the value-only max/absolute-value expression, avoiding a spurious branch kink at $u=0$. Source locators: Rafailov et al. §4 Eq. (7), Appendix B; Purdue PrefOpt §4a. No optimization convergence or finite-precision property is asserted. Source supplier proofs and strict-branch hypotheses are recorded above. Final proof-contract, layout, rendering, and focused dependency checks passed. Next item: `rem-preference-coverage-and-model-misspecification` at level 4.

### Completed item: `rem-preference-coverage-and-model-misspecification`

Recorded the BT modeling assumption, finite/full-support boundary, countable-space partition/summability obligations, and a direct disconnected-comparison argument: componentwise reward shifts preserve observed edge differences while reweighting Gibbs component masses. The proof is embedded in complete prose; no graph connectedness or empirical MLE consistency theorem is asserted. Dependencies: the BT definition, finite objective, Gibbs optimum, and DPO reparameterization theorem. Manifest level 4. Source locators: Rafailov et al. §5.1/Theorem 1; Purdue PrefOpt §2 and §§3e–4a. No axiom use. Final scoped proof, layout, rendering, content, and dependency checks passed. Next: author the B-page arithmetic and boundary witnesses in levels 3–4.

### Completed item: `ex-two-response-kl-regularized-gibbs-policy`

Verified $Z=2$, $p^*=(1/4,3/4)$, uniqueness, and the maximum value $\beta\log2$. Dependencies are the local objective/Gibbs theorem and the natural-log supplier for $e^{\log3}=3$; level 3. This is a locally computed boundary example, not an external numerical check. Source locators: Rafailov et al. Appendix A.1; Purdue PrefOpt §3e. Proof facts F1–F3 and verification steps 1.1–1.2 are complete; final proof-contract, layout, rendering, and focused dependency checks passed. Next B item: `cex-disconnected-comparison-support-does-not-identify-policy`.

### Completed item: `cex-disconnected-comparison-support-does-not-identify-policy`

Refuted the exact edge-probability identification claim with $Y=\{a,b,c,d\}$, $E=\{\{a,b\},\{c,d\}\}$, uniform $q$, and two rewards that give $1/2$ on both observed edges but Gibbs policies $(1/4,1/4,1/4,1/4)$ and $(1/8,1/8,3/8,3/8)$. The proof computes all weights and partition sums; the adjacent TikZ picture labels the edge set but is not used in the proof. Direct suppliers are BT, the finite objective/Gibbs theorem, and natural-log inversion; level 3. Sources: Purdue PrefOpt §2; Rafailov et al. §5.1; all arithmetic is local. Final proof-contract, layout, rendering, and focused dependency checks passed. Next B item: `ex-prompt-reward-offset-leaves-policy-unchanged`.

### Completed item: `ex-prompt-reward-offset-leaves-policy-unchanged`

Verified that a prompt-constant cancels from every BT reward difference and multiplies all Gibbs weights/partition terms by the same $e^{c_x/\beta}$. Full-support q and finite rewards keep every ratio defined. Dependencies: BT definition, KL objective, finite Gibbs theorem; level 3. Sources: Rafailov et al. §5.1/Theorem 1 and Purdue PrefOpt §§2/3e. Final proof-contract, layout, rendering, and focused dependency checks passed. Next B item: `cex-zero-reference-support-breaks-dpo-log-ratio`.

### Completed item: `cex-zero-reference-support-breaks-dpo-log-ratio`

Used $Y=\{a,b\}$, $q=(1,0)$, $\beta=1$, and finite rewards $(0,1)$. The extended KL convention makes $\delta_a$ the unique finite-objective maximizer; at $b$, $p_b^*/q_b=0/0$ and the logarithm is undefined. This is outside, and confirms the necessity of, the full-support hypothesis in the finite DPO theorem. Direct suppliers: local extended-KL objective, DPO theorem, and log-domain definition; level 4. Source locators: Rafailov et al. §5.1/Theorem 1 full-support hypothesis; local boundary proof is complete. Final proof-contract, layout, rendering, and focused dependency checks passed. Next: no further local authoring. The final validation record below captures the completed evidence; owner reconciliation is required before readiness.

## Scheduling-input reconciliation

The dispatched dependency-order task binds scheduling input `baf5d05b7d9fe45fd92edfa6b4de724741492c90a83bcd943f439040aef6c918`. The shared dependency-level artifact's `input_sha256` was first observed as `ae5958f3538e11bf0c79b52ca607ed705f1fd575eae21b6d734fffbe1c15ae0c`, then changed to `29e907d1dc4e4b1883273370ca88d8eea3e56200d4602c30b55ce10b2a62857c` during this handoff. Its batch-96 row still says level 2, requires 8/14/38. `batch-96.dependency-inputs.json` preserves the dispatch hash, the latest observed artifact hash, and `scheduling_hash_conflict: true`; neither shared schedule nor plan was modified. Owner reconciliation is required before readiness.

The A/B pages are frontmatter-only; the manifest contains all 10 assigned items and computed item levels. Authored carriers: `def-kl-regularized-policy-improvement`, `def-bradley-terry-preference-model`, `thm-finite-action-gibbs-policy-optimum`, `thm-dpo-reward-policy-reparameterization`, `alg-direct-preference-optimization-finite-budget`, `rem-preference-coverage-and-model-misspecification`, and the two-response, disconnected-support, reward-offset, and zero-reference-support B examples. Contracts, batch coverage, and scoped checks are complete; see the final validation record below.


## Final validation and readiness record

- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-96.proof-contracts.json --strict --json`: passed for all 10 contracts; zero errors and warnings.
- Scoped `precheck`: passed for all six proof-bearing items.
- `node tools/proof-layout.mjs` on all ten changed item carriers: 10 items, 19 steps, zero defects.
- `rendercheck` on ten carriers and two pages: 12 checked, zero errors and warnings.
- `content-policy` on the batch manifest: 10 items, zero errors and warnings. Focused `depcheck` on ten items/two pages: zero errors and warnings. The statement-first check found no violations on the ten assigned items.
- Scoped level recomputation, including the in-run level-1 logistic and strict-propriety suppliers and the level-0 proper-scoring definition, matches all ten manifest labels with no cycle. The repository-wide item dependency check exits nonzero on unrelated empty scaffold inventories; it reported no dependency-level error for an assigned item. The batch dependency check passed at an earlier snapshot, but its final invocation now reports `Stale batch dependency levels ...; recompute before authoring` after the shared artifact changed. Its stored batch-96 row remains level 2 with prerequisites 8, 14, and 38. Recomputing the shared schedule is owner work and was not performed.
- Source fetch check: 4/4 entries fetch-verified, zero drops; the earlier `--stamp` run stamped all four coverage entries.
- The ten native Step-1 records were written with `decision: escalated`, exact direct manifest dependencies, and no `--owner`. The run-wide decision check remains nonzero because the active run still contains unresolved escalations, including this batch’s page and scheduling blockers; these ten records are present with the exact direct dependencies.

No registered DPO finite-smoke fixture applies. The exact finite arithmetic is verified in the authored examples and the finite gradient is derived in the proof. No tests were run.

### Open owner reconciliation

1. The A-page requirement `variational-inference-and-evidence-lower-bound` has no library carrier. Preserve the assigned `requires` edge; do not substitute `variational-autoencoders-and-the-elbo`. The direct item proofs do not assume ELBO results, but page-level readiness remains incomplete.
2. Dispatch scheduling input `baf5d05b7d9fe45fd92edfa6b4de724741492c90a83bcd943f439040aef6c918` differs from the latest recorded shared artifact input `53bf69605352dd598c8eac43b9c78ca4ac25aedae1face6e1d00fcc4fb203bc4`. The current dependency artifact still assigns batch 96 level 2 with prerequisites 8, 14, and 38; owner reconciliation is needed before readiness.
