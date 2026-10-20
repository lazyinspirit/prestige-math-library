# Batch 67 authoring notes

## Scope and design reconciliation

- Owned pair: `anderson-reverse-time-diffusion` and its B examples; the manifest inventory is recorded before carriers in `research/machine-learning-all-101-2026-10-19-batch-67.pages.json`.
- Read the complete current P-SDE-02 design and `plan-spec.json` entry. They agree on the two distinct contracts: bounded-start Anderson with unique smooth forward/joint/conditional KFP densities, and the separate unbounded-start Bayes-kernel/martingale-problem theorem. No plan-spec scope or hypothesis conflict was found.
- The published strong SDE supplier does not imply density smoothness or time reversal. Batch-1 Gaussian suppliers have actual bodies read but their ordinary full-run readiness rows are open because supplier/dependency hashes changed; consumers depending on them will be escalated unless the current full-run snapshot closes them.

## Item checkpoints

### `def-reversed-transition-kernels-for-diffusions`

- Claim/convention: defines the reverse kernel from forward densities for `u<v`, with the identity kernel at equal times; source state is at forward time `T-u`, output at `T-v`. It proves probability-kernel measurability, normalization, and reverse Chapman–Kolmogorov.
- Dependencies: `def-measure-kernel-and-probability-kernel`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`; no in-run supplier, so level 0. Choice-free.
- Sources consulted for context: Anderson §§3–4, printed pp. 317–320; Tang–Zhao §2.2, PDF pp. 3–5. Anderson's proof supports the bounded-start contract; Tang–Zhao explicitly marks their reverse-SDE derivation heuristic.
- Validation: item carrier written; proof has numbered steps 1.1, 1.2, 2.1.
- Unresolved: none for this definition. Next: local Brownian representation lemma.

### `lem-continuous-local-martingale-quadratic-variation`

- Claim/convention: constructs continuous bracket by partial and step partition sums for continuous local martingales, proves the product-compensator identity by stopped bounded martingales and left-step sums, and extends the product formula to a continuous finite-variation part. It also proves a continuous finite-variation local martingale is constant.
- Dependencies: Doob L2, orthogonal martingale increments, dominated convergence, stopping times, quadratic-covariation convention, and AC required by the supplied local-martingale/Doob interfaces; no in-run supplier, so level 0.
- Source: van der Vaart, *Martingales, Diffusions and Financial Mathematics*, Theorem 5.64, §5.8, printed pp. 80–82; the relevant convergence proof was inspected and the local proof is supplied here rather than imported.
- Validation: carrier written; proof stages 1.1–1.3 construct the bracket, 2.1–2.2 establish the product compensator/vector case, and 3.1–3.3 prove bounded integrals, semimartingale product, and the FV-local-martingale corollary.
- Unresolved: none for this local prerequisite. Next: use its product identity in the Bayes-kernel reversal proof.

### `lem-elliptic-local-martingale-brownian-representation` and `thm-markov-diffusion-reversal-by-bayes-kernels`

- The representation lemma now constructs the inverse-matrix integral by stopped left-step sums, establishes its isometry and bracket from the local covariation supplier, and applies the AC-dependent vector Lévy characterization. Manifest level 1 because it depends on `lem-continuous-local-martingale-quadratic-variation` at level 0.
- The generic theorem keeps the separate unbounded-start contract: positive smooth marginal/transition densities, forward marginal identity and CK, differentiability/IBP integrability, square uniformly nonsingular dispersion, and a well-posed nonexplosive reverse martingale problem. It derives the generator, obtains bracket from coordinate and product tests using the proved local product formula, then reconstructs Brownian motion. Manifest level 2.
- Source context read: van der Vaart, *Martingales, Diffusions and Financial Mathematics*, Theorem 5.64/§5.8 and Theorem 7.15/§7.2; Song et al., §3.2/App. A.3 via full ar5iv text; Tang–Zhao, §2.2. Song and Tang–Zhao are contextual applications/heuristic, not proof suppliers.
- Unresolved: neither theorem depends on the open Gaussian supplier page. Next: draft the additive Gaussian branch and examples; batch-1 supplier readiness remains open.

### `def-bayes-reversed-gaussian-smoothing-kernels`

- Claim/convention: positive-time reverse kernels use the Gaussian marginal density; at reverse time `v=T`, the kernel is the posterior measure against the possibly singular initial law `mu`, with no density asserted at time zero. Equal times use the identity. Normalization and reverse Chapman–Kolmogorov are proved, including the endpoint case.
- Dependencies: AC and batch-1 `def-gaussian-smoothed-data-law-and-transition-density`, measure/probability kernel convention, Tonelli. The supplier's exact statement and proof were rechecked; it assumes full AC and only positive-time densities. Dependency level 2.
- Sources: Anderson §§3–4 and Tang–Zhao §2.2 are contextual; the formulas and proof here use the actual batch-1 supplier.
- Validation: carrier written with `## Definition references` after the uninterrupted definition; proof steps 1.1, 1.2, 2.1.
- Unresolved: batch-1 supplier current readiness remains open, so this consumer will be escalated in the ordinary decision record. Next: prove truncated-time generator/martingale identity.

### `ex-bounded-start-anderson-reversal`

- Claim/conventions: Brownian forward process with compactly supported smooth initial density; positive-time density is Gaussian convolution, and Anderson reversal yields unit covariance and plus-score drift. The joint and conditional augmented-density uniqueness hypotheses remain explicit assumptions; they are not inferred from strong SDE well-posedness. No endpoint score at time zero.
- Dependencies: AC, batch-1 Gaussian definition and heat equation, Anderson theorem; level 3. Batch-1 readiness remains open, so the example will be escalated.
- Sources: Anderson §§3–4 and exact local supplier body/proof.
- Validation: statement has separate `Example references`; verification has steps 1.1 and 2.1.
- Unresolved: augmented-density uniqueness is an explicit premise, not proved for this specialization.

### `lem-density-translation-factorization` and `thm-anderson-reverse-time-diffusion`

- The local density lemma proves Anderson's subtraction factorization by the determinant-one translation $d=b-c$ and Tonelli. Anderson's theorem keeps bounded start, strong solution, unique smooth marginal density, unique smooth augmented joint density, and unique smooth conditional augmented density as separate hypotheses. It proves the augmented KFP factorization, reverse-noise increment law, Brownian property in the reversed state/noise filtration, and the backward-Itô correction sign.
- Anderson theorem dependencies are AC, Brownian/strong-SDE definitions, the local density lemma, multidimensional Itô and covariation, and Tonelli; level 1. The separate choice-heavy convention is preserved because the existing Itô/covariation suppliers require AC.
- Source: Anderson, §§3–4, printed pp. 317–322, including the full augmented equation and proof; the source's short Lemma 4 is replaced by the local full proof. Tang–Zhao §2.2 is marked heuristic only.
- Unresolved: batch-1 Gaussian page readiness does not affect Anderson's theorem; the B example retains the full density uniqueness premise.

### `lem-reversed-kernels-and-generator-identity` and `thm-markov-diffusion-reversal-by-bayes-kernels`

- The kernel lemma now assumes and states the transition-density forward equation, differentiability under the semigroup integrals, and the no-boundary-term condition; it proves the generator quotient, adjoint product expansion, and compact-test martingale problem. The general theorem separately assumes uniformly nonsingular square dispersion and a well-posed nonexplosive reverse martingale problem, then proves coordinate/product brackets and reconstructs Brownian motion.
- Dependency levels are 1 and 2. The generic route is independent of the batch-1 Gaussian suppliers. Its local product calculus prerequisite is `lem-continuous-local-martingale-quadratic-variation`.
- Source context: Anderson §5, Tang–Zhao §2.2 (heuristic), and Song et al. §§3.2/App. A.3 (downstream use, not proof). Van der Vaart full notes §§5.8, 7.2 were inspected for quadratic variation and martingale-problem arguments; local proofs are supplied here.
- Unresolved: Haussmann–Pardoux optional full text retrieval history will be preserved in coverage; no local claim uses that source.

### `lem-reversed-smoothing-generator-and-martingale` and `thm-gaussian-smoothing-reversal-on-truncated-time-interval`

- The Gaussian generator is proved from the explicit variable-variance heat kernel and positive-time heat equation on $[\epsilon,T]$; its reverse martingale problem is proved by differentiating the Bayes kernel and integrating by parts on compact tests. The truncated SDE theorem localizes coordinate and product tests, reconstructs Brownian motion through the inverse scalar noise, applies the Lipschitz strong-solution interface on the truncated interval, and separately carries the exact endpoint coupling limit.
- The score supplier gives the uniform bound only on $[\epsilon,T]$; the endpoint supplier gives $E|X_\epsilon-X_0|^2=dv(\epsilon)$ and $W_2\le\sqrt{dv(\epsilon)}$. No density or score assertion is made at zero.
- Dependency levels are 4 and 5. Both depend on actual batch-1 bodies read; their ordinary supplier readiness remains open, so final decisions are escalated unless the current full-run snapshot closes them.

### `ex-stationary-ornstein-uhlenbeck-reversal` and `cex-state-dependent-diffusion-score-only-reversal`

- The OU verification derives its explicit transition law, invariant mean/variance, Gaussian Bayes reverse kernel, and identical reverse drift. The counterexample uses a compactly supported smooth bump diffeomorphism, proves global Lipschitz/elliptic forward coefficients and positive transformed Gaussian densities, verifies reverse-problem well-posedness on $[\epsilon,T]$, and exhibits $a'=2h''\ne0$.
- Both examples depend on the generic reversal theorem and are level 3; the OU example also uses the exact deterministic Gaussian increment interface. The counterexample is a direct-refutation item with `## Statement references` after the uninterrupted refuted statement.
- No source claims are imported beyond the stated internal suppliers and contextual Anderson/Song references.

## Scoped check attempts and operational holds

- `node tools/item-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` was attempted after authoring. It fails on many other active pair manifests with `empty scaffold inventory` and stale item levels, including `algorithmic-stability-and-generalization`, `distribution-shift-and-domain-adaptation`, `stochastic-gradient-descent-for-learning`, and unrelated published-item label mismatches. No other owner's manifests/items were changed.
- `node tools/batch-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` was attempted and fails parsing another batch's manifest with `Invalid escape sequence \\g at line 23, column 113` (claim text containing `\\gamma=1/2`). This shared input was left untouched.
- Next: finish source coverage, proof contracts, dependency/cross-batch evidence, then run assigned-scope layout and content checks, current full-run readiness snapshot/record attempts, and preserve exact operational errors.

## Final authoring and current evidence

- Completed all 13 assigned items and both A/B carriers. `library/machine-learning/anderson-reverse-time-diffusion.md` and its examples page are frontmatter-only with empty bodies. Item inventories, direct `deps`, carrier page IDs, and levels agree between the page manifest and item frontmatter. Full-run graph recomputation gives the authored levels 0, 1, 2, 3, 4, and 5 exactly; batch 67 remains level 2 with prerequisite batch 1.
- Final proof labels were adjusted to the native phase-format layer order. Mathematical text was preserved from the pre-normalization proof contracts; displayed formulas are inline display-style math so each complete numbered step ends with its tags in one paragraph. The regenerated contract matches all 54 final steps and 84 exact supplier citations.
- Contracts include item-specific boundary worksheets, three exact special-case checks (singular Gaussian prior/endpoint, Dirac-start unit-noise reversal, and the OU half-life kernel), and empty finite-smoke selections where the general continuous-time claims have no registered finite model.
- The state-dependent counterexample explicitly uses continuity of $a'$ and positivity of $p_t$ to show the omitted divergence changes the reverse drift on an open set of positive density, rather than relying on a single point.
- Final scoped checks pass: `node tools/proof-layout.mjs` reports 13 items, 54 steps, 0 defects; `tools/precheck.mts` reports 13 checked, 0 failed; strict `tools/proof-contract.mjs` reports 0 errors and 0 warnings; `coverage-checklist` reports 2 pages, 19 harvested results, 0 errors/warnings; the statement-link audit finds no links interrupting complete statements; both page bodies are empty.
- Source fetch evidence is current: `source-fetch-check --stamp` reports 8/9 fetched and 9/9 resolved, with one documented drop and no new stamps. `tools/source-resolution.mjs` reports no structural errors for the dropped optional Haussmann–Pardoux source. It remains unused as a logical premise: the local kernel-generator and generic reversal proofs supply the alternative arguments. The preserved handoff honestly records six failed routes (initial attempt plus five retries), while exact historical timestamps and some deep endpoint paths were not retained; no missing values were invented.
- The five actual batch-1 Gaussian supplier items were reread and their current ordinary Step 1 rows all close ready at their recorded current hashes. The supplier page remains draft. `dependency-inputs.json` and `cross-batch-dependencies.json` record these verified item interfaces, the five hashes, all 27 other direct published dependencies, and zero unresolved prerequisite checks.
- Final `step1-decisions check` snapshot after the counterexample clarification: 1,147 run items, 1,010 ready, 160 work rows, `closed:false`; all 13 batch-67 rows and all five batch-1 supplier rows are closed ready. The remaining work is outside this pair. Each assigned item has an ordinary `ready` record with `owner:false`; none is an approval.
- The full-run item-level check reports 21 errors, all `empty scaffold inventory` on unrelated pages; none names an item in this pair. The exact current list is: `adaptive-gradient-optimizers`, `adaptive-gradient-optimizers-examples`, `overparameterized-training-and-interpolation`, `overparameterized-training-and-interpolation-examples`, `algorithmic-stability-of-stochastic-training`, `algorithmic-stability-of-stochastic-training-examples`, `generative-adversarial-networks`, `generative-adversarial-networks-examples`, `score-sdes-and-reverse-time-generation-examples`, `multimodal-contrastive-alignment-and-transfer`, `multimodal-contrastive-alignment-and-transfer-examples`, `foundation-models-transfer-and-scaling-evidence`, `foundation-models-transfer-and-scaling-evidence-examples`, `predictive-calibration-and-uncertainty-under-shift`, `predictive-calibration-and-uncertainty-under-shift-examples`, `monotone-risk-calibration-and-deployment-guarantees`, `monotone-risk-calibration-and-deployment-guarantees-examples`, `verifiable-generation-and-test-time-sampling`, `verifiable-generation-and-test-time-sampling-examples`, `active-querying-version-spaces-and-abstention`, `active-querying-version-spaces-and-abstention-examples`.
- The latest `batch-dependency-levels check` is stale after another concurrent shared-manifest update: the recorded input hash is `cdace3639e8df109f7abfa6ec032821842cd47b0787b1d17682719eb805194c5`, while the latest read-only graph hash is `188477a411e57d3d43d22531aa0e7cfcae5b1cf4a09ec837d1c5b1f5748802fb`. The current graph has 101 batches (maximum level 5) and still computes batch 67 at level 2 with `requires: ["1"]`. A transient check passed before this newer change; the shared artifact was left untouched.
- Current `.autopilot` status is `1-scaffold`, running with 77/101 scheduled batches covered, 16 further batches beyond the listed missing units, and no in-flight work. Missing units include 6, 10, 40, 41, 42, 45, 52, and 53. Its owner blocker is a `stage-stalemate` on units 15, 28, 31, and 46; it does not list unit 67. Latest observed commit is `50139bdcb6` (`Defer compact construction artifact scans until author drain`). This pair did not alter autopilot state or owner verdicts.
- The earlier dependency-check note records a temporary invalid `\g` escape in another batch. That parse issue was resolved before the current passing batch-level check.
