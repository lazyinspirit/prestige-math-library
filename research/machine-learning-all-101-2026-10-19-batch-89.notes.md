# Batch 89 authoring notes

## Controlling inputs and plan comparison

- Run: `machine-learning-all-101-2026-10-19`; assignment: beta batch 89, ML-81, pages `imitation-learning-and-dagger` / `imitation-learning-and-dagger-examples`.
- The initial live autopilot snapshot reported 57/101 pairs. The later read-only snapshot at `2026-10-18T23:10:17.188Z` reported 66/101 pairs, nothing in flight, and an existing owner-held Step 1 blocker with 6, 10, 40, 41, 42, 45, 49, 52, and 27 more missing batches/items. No engine state or owner verdict was changed.
- The run-specific owner authoring direction controls stale task/design text. The current ML-81 section in `research/plan-machine-learning-track.md` and its `research/plan-spec.json` description agree on the task-cost, infinite-sample, finite-sample, interactive-label, and expert-mixing claims. The page IDs, order, category, and `requires` lists also agree.
- **Recorded planning-input discrepancy:** `plan-spec.json` names `research/plan-machine-learning-track.md` with SHA-256 `2ebe29e29b45d4585dbf91f8d1789a02f9a6f144339179ddfd4e89d6611de5fc`; the current file hashes to `67ac60c570e0c2f9a94bf898e27621c66465143a863252b6e72c56911e95ce5f`. The current ML-81 scope text matches the plan-spec description, so authoring follows the current track text for the mathematical contract and plan-spec for identities/placement. The stale hash binding is recorded for owner reconciliation; the shared plan was not edited.
- Mathematical route clarification: the page-level ML-66 prerequisite is retained. The current OGD theorem gives a (O(N^{-1/2})) average-regret rate and carries Countable Choice; its theorem is not used to claim the planned ~O(uT) iteration count. The main route proves the bounded strongly convex Follow-the-Leader (O((\log N)/N)) regret step locally. Hedge's current theorem assumes an oblivious loss sequence, whereas DAgger's rollout losses depend on the learner's prior policies; it is not used as a DAgger proof supplier. This preserves the claim and states the correct online-loss timing.

## Scaffold inventory and dependency levels (before carriers)

The batch assignment manifest originally had empty inventories. The following inventory and logical dependencies are now declared in `research/machine-learning-all-101-2026-10-19-batch-89.pages.json`; levels were computed from all 202 current run pages using `tools/item-dependency-levels.mjs`'s exported full-run checker before any item carrier was written.

| Level | Item | Logical dependencies |
|---:|---|---|
| 0 | `lem-dagger-strongly-convex-follow-the-leader-regret` | none |
| 1 | `lem-finite-horizon-mdp-policy-occupancy` | `def-finite-markov-decision-process`, `def-sum-over-a-finite-index-set`, `lem-finite-sum-laws`, `lem-a-double-sum-over-finite-index-sets-may-be-interchanged`, `thm-induction-principle` |
| 2 | `def-imitation-learning-and-expert-surrogate-loss` | `def-finite-markov-decision-process`, `def-online-decision-protocol`, `lem-finite-horizon-mdp-policy-occupancy` |
| 3 | `alg-dagger` | `def-imitation-learning-and-expert-surrogate-loss`, `def-online-decision-protocol` |
| 3 | `lem-dagger-mixture-occupancy` | `def-imitation-learning-and-expert-surrogate-loss`, `lem-finite-horizon-mdp-policy-occupancy`, `thm-induction-principle` |
| 3 | `lem-dagger-task-cost-from-expert-surrogate` | `def-imitation-learning-and-expert-surrogate-loss` |
| 4 | `thm-dagger-no-regret-reduction` | definition, algorithm, FTL-regret lemma, mixture-occupancy lemma, task-cost lemma |
| 4 | `thm-dagger-finite-sample-generalization` | definition, algorithm, FTL-regret lemma, mixture-occupancy lemma, `thm-azuma-hoeffding-inequality`, filtered-probability/martingale definitions, `def-axiom-of-choice` |
| 3 | `ex-behavior-cloning-covariate-shift` | `def-imitation-learning-and-expert-surrogate-loss` |
| 4 | `ex-dagger-interactive-expert-labels` | definition, `alg-dagger` |
| 3 | `ex-surrogate-loss-fails-task-cost-control` | `def-imitation-learning-and-expert-surrogate-loss` |

The original full-run level calculation found the declared levels above. After the later occupancy dependency was added to the mixture lemma, `node tools/item-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` reported 34 empty inventories on other active pages and no item-level error for batch 89; see final checks below. The other manifests were not changed.

## Claims, conventions, and local proof obligations

- Horizon convention: (T\ge1) decisions indexed (t=0,\ldots,T-1); (d_\pi) is the normalized average of these (T) state marginals. A DAgger rollout independently mixes the deterministic expert and current learner at each decision with expert probability \(\beta_i\).
- The task-cost reduction uses the source's one-step expert cost-to-go upper gap (Q_t^*(s,a)-V_t^*(s)\le u) for every state, action, and time, and a surrogate that upper-bounds the probability of expert-action disagreement. No offline guarantee is inferred from interactive labels.
- The infinite-sample statement uses the true rollout losses and a locally proved FTL regret bound. The finite-sample statement is separate: empirical comparator loss, (m\) conditional trajectory samples per iteration, a martingale/Azuma deviation, and expert-mixing occupancy error. It does not claim the finite-sample task-cost result.
- Local items to prove before consumers: finite-horizon occupancy normalization (choice-free finite recursion); FTL regret under attained minimizers and bounded, Lipschitz, strongly convex losses; the finite-horizon expert-mixing occupancy bound; and the hybrid-policy task-cost telescoping bound.

## Source reading and disposition

- Ross, Gordon, and Bagnell, *A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning*, complete PMLR PDF, https://proceedings.mlr.press/v15/ross11a/ross11a.pdf. Read the complete relevant text: §2 state occupancy and behavior-cloning setup (PDF pp. 1–2), Theorem 2.2 and hybrid-policy proof (pp. 2–3), Algorithm 3.1 and expert mixing (p. 3), Theorems 3.1–3.3 (pp. 3–4), Lemma 4.1 and Theorem 4.1 proof (p. 4), and Theorem 4.2 finite-sample martingale/Azuma proof (pp. 4–5). This is the primary theorem source and will support the exact local arguments.
- Daniil Mirylenka, *Towards Structured Representation of Academic Search Results*, PhD dissertation, §2.6.1, https://iris.unitn.it/retrieve/23f50bfb-467b-4951-9081-da4e28af353b/mirylenka.pdf, PDF pp. 36–38. Read DAgger Algorithm 1, the learner-induced loss definition, FTRL decomposition, and Theorem 1. Its theorem proof explicitly refers to the preceding decomposition and the cited FTL result, so it is supporting treatment only; it is not used as a completed proof.
- Bagnell, Boots, and Choudhury, *Modern Adaptive Control and Reinforcement Learning*, Chapter 6, “An Invitation to Imitation,” https://macrl-book.github.io/assets/pdf/6_macrl.pdf, PDF pp. 1–7 / printed pp. 53–60. Read the behavior-cloning distribution-shift discussion and DAgger interactive algorithm. It supports the conceptual setup and algorithm, not the formal DAgger theorem proof.
- Duisterhof, Truong, Agrawal, and course lecturer J. Andrew Bagnell, *Algorithmic Foundations of Interactive Learning*, Lecture 9 “DAgger & Covariate Shift in IL,” https://interactive-learning-algos.github.io/assets/pdfs/afil_scribe_book.pdf, PDF pp. 50–54 / lecture-note pp. 46–48. Read the algorithm, occupancy-loss definition, FTRL comparison, recoverability statement, and displayed cost proof. The final proof sketch does not establish the stated per-state disagreement estimate from its preceding average regret premise; that step will not be used. The local proof supplies the full argument.
- `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-89.coverage.json --stamp` initially returned 5/7 fetched and 2 failures: the Mirylenka IRIS PDF URL returned HTTP 403 on its initial fetch and five recovery retries for each coverage-page occurrence. After searching the dissertation title/author/PDF and checking the IRIS record, no alternate full-text URL was found. The thesis is dropped only as redundant source evidence: it supplies no unique logical premise, its theorem proof is a sketch, and the primary paper plus full textbook/course treatment and local proofs cover every item. Its six actual attempt records, searches, reasons, and per-item replacement arguments/dependencies are preserved as `source_resolution` rows in the coverage file. The retry allowance is exhausted; no more retries were made.
- The subsequent same command passed: `source-fetch-check: 5/7 source(s) fetch-verified (0 newly stamped); 7/7 source(s) resolved (2 documented drops; not fetch stamps)`. The primary Ross paper, full MACRL book chapter, and full AFIL course notes have actual fetch stamps. The AFIL notes' incomplete final cost-proof step remains out-of-scope and is not used to complete any proof.

## Current supplier inspection

- `def-finite-markov-decision-process` (`items/def-finite-markov-decision-process.md`): current full Definition inspected. It states finite state/action sets, normalized nonnegative joint reward-transition masses, derived transition rows, and probability-vector policy rows. Its current hash-bound Step 1 record is ready, owner=true (owner actual-current-input reconciliation).
- `def-online-decision-protocol` (`items/def-online-decision-protocol.md`): current Definition inspected. It requires the learner to choose from earlier history before current feedback; the DAgger round order matches. Its current hash-bound Step 1 record is ready, owner=false.
- `hedge-and-online-gradient-descent`: A/B page, algorithms, and both regret proofs read. The page-level plan prerequisite is retained. Hedge's theorem is for an oblivious sequence; OGD's pathwise bound is (3DG\sqrt N/2) and assumes Countable Choice only in its nondegenerate projection branch. Neither is substituted for the local strongly convex FTL proof.
- `thm-azuma-hoeffding-inequality` (`items/thm-azuma-hoeffding-inequality.md`): full published statement/proof and direct conditional-Hoeffding, tower, taking-out, Markov, and AC supplier bodies read. The finite-sample theorem will carry AC and use bounded increments in ([-1,1]), hence predictable range width 2.

## Handoff state and next action

- All 11 assigned items, both frontmatter-only pages, coverage, proof contracts, and the batch-89 cross-batch input are authored. The current `lem-dagger-mixture-occupancy` dependencies include the finite occupancy lemma as well as the DAgger definition and induction theorem; its level remains 3.
- The 11 per-item Step 1 authoring-readiness records are complete and current. The batch-89 items are ready for independent review; preserve the global blockers and leave other batches, shared scheduling inputs, and owner state to the owner.
- The run-level scheduling artifact and aggregate cross-batch collector currently fail on other current-run inputs. Read-only recomputation still gives batch 89 level 2 but now lists batches 73, 74, and 80; see final checks below. No owner/engine artifact was rewritten.

## Item checkpoint: `lem-dagger-strongly-convex-follow-the-leader-regret`

- Claim: for bounded [0,1], (G)-Lipschitz, (μ)-strongly convex losses with attained cumulative minima, FTL's cumulative regret is at most (1+(4G^2/μ)H_{N-1}). This explicit harmonic bound is sufficient for the planned ~O((uT)) DAgger route.
- Conventions: midpoint form of strong convexity on a convex Euclidean parameter set; exact cumulative minimizers; no randomization and no choice axiom.
- Dependencies: none (dependency level 0). The later DAgger algorithm and both reduction theorems depend on this local result.
- Source: Ross–Gordon–Bagnell, PMLR PDF §4.1–4.2, PDF pp. 3–4, for FTL under strongly convex losses. The source names the no-regret fact; this item supplies the complete local stability/telescoping proof and does not treat the citation as a proof.
- Decision: complete first supplier in ascending item level. No unresolved mathematical obligation in this item. Final proof-layout/precheck/contract checks are pending until the final edits.
- Next: author level-1 finite-horizon MDP occupancy lemma, then use it in the imitation-learning definition.

## Item checkpoint: `lem-finite-horizon-mdp-policy-occupancy`

- Claim: for a finite MDP, an initial probability vector, a stationary Markov policy, and finite horizon (T), the recursively defined state vectors and their equal-time average are probability vectors.
- Conventions: (P(s'\mid s,a)) is the marginal of the MDP's joint reward-transition mass; only finite-horizon marginals are constructed, so the proof does not use the infinite path-space theorem or any choice axiom.
- Dependencies: `def-finite-markov-decision-process`, `def-sum-over-a-finite-index-set`, `lem-finite-sum-laws`, `lem-a-double-sum-over-finite-index-sets-may-be-interchanged`, and `thm-induction-principle`; dependency level 1 from current in-run supplier `def-finite-markov-decision-process` at level 0.
- Source locators: Sutton–Barto §3.6 printed pp. 67–69 for transition rows; Ross–Gordon–Bagnell §2 PDF p. 1 for the finite-horizon occupancy convention. The normalization argument is complete locally by finite-sum interchange, policy-row normalization, and induction.
- Decision: complete level-1 supplier before the definition. It is choice-free. No unresolved mathematical obligation in this item; final proof-layout/precheck/contract checks are pending.
- Next: author `def-imitation-learning-and-expert-surrogate-loss` using this exact normalized occupancy interface and `def-online-decision-protocol`.

## Item checkpoint: `def-imitation-learning-and-expert-surrogate-loss`

- Claim/conventions: defines finite-horizon task cost, expert cost-to-go, learner-policy parameterization, statewise surrogate domination of expert-action disagreement, behavior-cloning's expert-state distribution, DAgger's per-decision expert/learner mixture, and the true per-round online losses. Time indices are (0,\ldots,T-1); (d_\pi) is normalized by (T); the expert is a deterministic stationary policy.
- Dependencies: `def-finite-markov-decision-process`, `def-online-decision-protocol`, and `lem-finite-horizon-mdp-policy-occupancy`; dependency level 2. The occupancy lemma supplies the finite, choice-free (d_\pi) interface.
- Sources/locators: Ross et al., PMLR PDF §2, pp. 1–2; MACRL Chapter 6, PDF pp. 1–5 / printed pp. 53–58; AFIL Lecture 9, PDF pp. 50–53 / note pages 46–47. AFIL is cited for loss/algorithm conventions only; its incomplete final theorem sketch is not used.
- Decision: definition complete with all links after the uninterrupted Definition section. No proof or choice axiom is claimed. Final scoped formatting/precheck and page checks remain pending.
- Next: author the mixture-occupancy and hybrid task-cost lemmas before the DAgger algorithm/theorems.

Manifest refinement before the level-3 carrier: the mixture-occupancy proof expands the finite policy-transition recursion by induction, so `thm-induction-principle` was added to its explicit dependencies. Its computed level remains 3 because that supplier is published/out-of-run.

## Item checkpoint: `lem-dagger-mixture-occupancy`

- Claim: under a per-decision expert/learner mixture with expert probability \(\beta\), every bounded state-loss expectation under the mixed policy differs from the learner's own occupancy expectation by at most (1-(1-\beta)^T\le\min(1,T\beta)).
- Conventions: (d_\pi) is normalized average occupancy over the first (T) states; mixture actions are sampled independently at each decision. The proof works directly with finite state-transition recursions and does not posit an infinite trajectory-space extension.
- Dependencies: `def-imitation-learning-and-expert-surrogate-loss`, `thm-induction-principle`; dependency level 3. The finite occupancy supplier and induction principle support the recursion and Bernoulli bound.
- Source locators: Ross et al., Lemma 4.1 and proof, §4.2, PDF p. 4; AFIL Lecture 9, PDF pp. 50–53 / note pages 46–47 for mixture and learner-induced loss conventions.
- Decision: complete local occupancy decomposition with exact coefficient; no unresolved mathematical obligation. Proof-layout/precheck and proof-contract checks are pending final edits.
- Next: author the hybrid-policy task-cost lemma, then DAgger's FTL aggregation procedure.

## Item checkpoint: `lem-dagger-task-cost-from-expert-surrogate`

- Claim: if every action's one-step expert cost-to-go increase is at most (u) and the surrogate upper-bounds the learner's probability of disagreeing with the deterministic expert, then (J(\pi_\theta)-J(\pi^*)\le uT\,\mathbb E_{d_{\pi_\theta}}\ell(s,\theta)).
- Conventions: nonnegative upper gap only is required (the learner may improve on expert cost); the hypothesis applies at every state/time, including unreachable states. The proof uses finite hybrid policies and does not import an unproved performance-difference lemma.
- Dependencies: `def-imitation-learning-and-expert-surrogate-loss`; dependency level 3.
- Source locator: Ross et al., Theorem 2.2 and complete hybrid-policy proof, §2.2, PDF pp. 2–3. AFIL equations are recorded as terminology context only; their displayed proof sketch is not used.
- Decision: complete local cost conversion proof. No unresolved mathematical obligation; final proof-layout/precheck/contract checks remain pending.
- Next: author `alg-dagger` with the exact infinite/finite loss interfaces and FTL update.

## Item checkpoint: `alg-dagger`

- Claim/procedure: each round independently mixes expert and learner decisions with probability \(\beta_i\), queries expert labels at every visited state, aggregates the labeled states, and updates by FTL. The item defines both finite-trajectory empirical losses and the population-loss idealization; only the former is executable.
- Conventions: (m\ge1) trajectories per round; (T\) decisions indexed from 0; expert labels are recorded and not executed except when the expert-mixing coin selects the expert; output is the whole learned-policy sequence and aggregate dataset.
- Dependencies: `def-imitation-learning-and-expert-surrogate-loss`, `def-online-decision-protocol`; level 3. The algorithm takes an explicit minimizer selector and requires attained minima; the separate FTL lemma is a logical supplier to the regret theorems, not needed to define this procedure.
- Sources/locators: Ross et al., Algorithm 3.1, §3, PDF p. 3; MACRL Ch. 6, PDF pp. 4–6 / printed pp. 57–59; AFIL Lecture 9 Algorithm 1, PDF pp. 51–53 / note pages 47–48. The theorem sketch in AFIL is not used.
- Decision: procedure complete; FTL minimizer attainment is explicit and strong convexity is required for the local regret theorem. No off-line expert-label guarantee is claimed. No proof/precheck applies to this algorithm item; final author checks and page placement remain pending.
- Next: complete the two level-3 intermediate lemmas before authoring the no-regret and finite-sample theorems.

## Item checkpoint: `ex-behavior-cloning-covariate-shift`

- Claim/example: a deterministic two-state MDP has expert-state disagreement ε but learner task cost (\sum_{k=1}^T(1-(1-\epsilon)^k)), bounded between ε(T^2/8) and ε(T^2) for (0<\epsilon\le1/T).
- Conventions: states (g,b); (g\xrightarrow{c/0}g), (g\xrightarrow{e/1}b), (b\xrightarrow{r/0}g), (b\xrightarrow{e/1}b); edge labels are action/task cost. The learner selects (e) with probability ε at (g) and always (e) at (b); the expert is correct on both states.
- Dependencies: `def-imitation-learning-and-expert-surrogate-loss`; dependency level 3.
- Sources/locators: Ross et al., Theorem 2.1 and §2.1, PDF pp. 1–2; MACRL Ch. 6, PDF pp. 3–4 / printed pp. 56–57. All expected costs and the quadratic bounds are verified locally; no source bound substitutes for the computation.
- Decision: complete example with a TikZ state diagram and proof-independent textual specification. Boundary (T=1,\epsilon=1) is handled explicitly. Final layout/precheck/proof-contract checks remain pending.
- Next: author the surrogate-failure example and then the remaining level-4 interactive example before/alongside the theorem consumers.

## Item checkpoint: `ex-surrogate-loss-fails-task-cost-control`

- Claim/example: in a one-state finite MDP, the learner always takes a unit-cost action while a constant-zero candidate score reports zero loss. This does not satisfy the required expert-disagreement domination condition, so it witnesses the necessity of that premise and is not a counterexample to the proved DAgger theorem.
- Conventions: horizon (T\ge1); both actions self-transition; expert action cost 0, learner action cost 1; the candidate score is explicitly outside the library's defined class of dominating expert surrogate losses.
- Dependencies: `def-imitation-learning-and-expert-surrogate-loss`; level 3.
- Source locator: Ross et al., Theorem 2.2 and its explicit surrogate-disagreement premise, §2.2, PDF pp. 2–3. The finite calculation is local.
- Decision: complete example with diagram labels and a full verification; no unresolved mathematics. Final proof-layout/precheck/proof-contract checks remain pending.
- Next: author the level-4 interactive-label example, then the infinite- and finite-sample theorem consumers.

## Item checkpoint: `ex-dagger-interactive-expert-labels`

- Claim/example: in a two-round, two-state model, the first learner rollout visits a bad state absent from expert-only trajectories; DAgger queries the expert's recovery label there, aggregates it, and FTL uniquely selects the correcting policy.
- Conventions: (T=2), (m=1), (eta_1=\beta_2=0); state/action transitions and costs match the BC example; the finite learner class is exactly ({\pi^{\rm bad},\pi^{\rm good}}) with statewise 0–1 loss. This finite example does not invoke the strong-convexity theorem.
- Dependencies: `def-imitation-learning-and-expert-surrogate-loss`, `alg-dagger`; dependency level 4.
- Sources/locators: Ross et al., Algorithm 3.1, §3, PDF p. 3; MACRL Ch. 6, PDF pp. 4–6 / printed pp. 57–59. The two FTL losses and unique minimizer are computed locally.
- Decision: complete interactive-label example with TikZ state diagram and textual transition specification; no source proof or diagram is used to justify the finite calculation. Final scoped checks remain pending.
- Next: author the two level-4 theorem consumers; both are now checkpointed below.

## Item checkpoint: `thm-dagger-no-regret-reduction`

- Claim: with the finite-horizon expert-disagreement surrogate, uniformly bounded [0,1], G-Lipschitz, μ-strongly convex state losses, exact population FTL, an attained hindsight minimum, the geometric per-decision expert-use schedule, and a one-step expert cost-to-go gap at most u, some iterate satisfies the exact task bound `J(π̂) ≤ J(π*) + uT[ε_N + (1+(4G²/μ)H_{N−1}+k_α(q_T+2))/N]`.
- Conventions: positive integer T,N; normalized average occupancy over t=0,…,T−1; α is fixed independently of T,N; `k_α=min{k≥1:kα≥1}` and `q_T=min{q≥0:T≤2^q}`. The reduction is population-loss/infinite-sample and requires interactive labels on states visited under the mixed rollout.
- Dependencies: local imitation-learning definition, DAgger algorithm, bounded strongly convex FTL regret, two-sided mixture occupancy comparison, and hybrid task-cost lemma; dependency level 4.
- Sources/locators: Ross et al., PMLR §§2–4, PDF pp. 1–5, especially Theorems 2.2, 3.1–3.2, Lemma 4.1 and their complete proofs; MACRL Ch. 6, PDF pp. 1–7 / printed pp. 53–60; AFIL Lecture 9, PDF pp. 50–54 / note pages 46–48. AFIL's final cost argument is incomplete and is not used. The local proof supplies the FTL, geometric-series, occupancy-direction, and cost-conversion steps.
- Route decision: the page-level Hedge/OGD prerequisite is retained. The OGD pathwise rate is only O(N^-1/2), while the Hedge theorem assumes an oblivious loss sequence; neither establishes the planned logarithmic FTL regret for DAgger's adaptive rollout losses. The local FTL lemma supplies that rate. This is a proof-route clarification, not a scope change.
- Decision: full proof drafted. During audit the mixture fact was strengthened in the theorem to cite the local supplier's absolute occupancy bound, since the needed direction is learner occupancy ≤ mixed occupancy + mixing error. Finite-sample A/B theorem, page/manifest sync, contracts and final validators remain pending.
- Next: finish the separate finite-sample theorem and then create the frontmatter-only pages and proof contracts.

## Item checkpoint: `thm-dagger-finite-sample-generalization`

- Claim: for finite-trajectory DAgger with m trajectories per round, conditionally unbiased rollout averages, bounded strongly convex losses, exact empirical FTL and geometric mixing, Azuma gives probability at least 1−δ that some iterate has own-occupancy surrogate loss at most `ε̂_N + [1+(4G²/μ)H_{N−1}+k_α(q_T+2)]/N + sqrt(2 ln(1/δ)/(mN))`. For fixed m, α, μ, G, δ≤1/2 and N≥C T² ln(1/δ), this is `ε̂_N+O(1/T)`. No finite-sample task-cost consequence is claimed.
- Conventions: positive integers T,N,m; reveal order is round-major and each trajectory loss is conditionally centered at the true mixed-rollout loss given all previous observations. The martingale increments lie in [-1,1], hence Azuma range width is 2. AC is explicit for conditional-expectation classes, the martingale interface and Azuma.
- Dependencies: imitation definition, DAgger algorithm, local strongly convex FTL and two-sided mixture occupancy lemmas, Azuma–Hoeffding, filtered probability/filtration and adapted-process definitions, martingale difference and martingale correspondence interfaces, conditional-expectation class, and AC; dependency level 4. The authored manifest and carrier list these direct mathematical inputs.
- Sources/locators: Ross et al., Theorem 4.2 and complete proof, §4.2, PMLR PDF pp. 4–5; MACRL Ch. 6, PDF pp. 4–7 / printed pp. 57–60 for interactive rounds; AFIL Lecture 9, PDF pp. 51–54 / note pages 47–48 for loss conventions. The local proof explicitly supplies the filtration order, centered increments, width-2 Azuma application, empirical regret, mixing correction and rate estimate.
- Decision: complete draft proof. Its sampling hypothesis states the conditional-mean identity directly, so no within-round independence assumption is introduced. AC remains an explicit branch; the theorem makes no claim without the stated axiom. Final proof-layout, source check, proof-contract and Step-1 readiness checks remain pending.
- Next: author the frontmatter-only A/B pages and item proof contracts, then run final scoped checks and record ready/escalated decisions.

## Final scoped validation and owner handoff

- This final validation section supersedes earlier item checkpoints that said proof-layout, precheck, contract, page, or readiness checks were still pending.
- All 11 batch-89 carriers have the declared dependency levels 0, 1, 2, 3, and 4 in the order in the manifest. The mixture-occupancy lemma has the explicit finite-occupancy dependency because its proof uses that probability-vector interface. The latest run-wide item-level command returned 28 errors, all `empty scaffold inventory` diagnostics on other active pages; it returned no batch-89 level mismatch.
- `node tools/proof-layout.mjs` on all 11 assigned item files passed: 38 proof steps checked, 0 layout defects. This includes the FTL, occupancy, mixture, and task-cost proofs after converting displayed calculations to inline equations inside their single proof-step paragraphs.
- The scoped statement-reference audit checked 11 items with 0 errors. The local page inventory check found both authored YAML frontmatter pages match batch 89 exactly, with empty Markdown bodies, 8 A-page items, and 3 B-page examples. The workflow's `page_layout: compact-v1` flag is intentionally left to the engine's post-authoring mechanical pass.
- The normative phase-format precheck checked 9 proof-bearing items and reported 0 repairs or failures; the two Definition/Algorithm items are not applicable.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-89.proof-contracts.json --strict` passed with 0 errors, 0 warnings, and 11/11 item contracts; the contracts contain 38 mapped proof steps and 30 exact supplier citations. The latest run-wide `proof-contract-coverage` command is blocked by another page, `active-querying-version-spaces-and-abstention`, reporting an empty or invalid frontier inventory; all 11 batch-89 items have strict contract entries.
- The batch source gate passed: `source-fetch-check: 5/7 source(s) fetch-verified; 7/7 source(s) resolved (2 documented drops; not fetch stamps)`. The two Mirylenka occurrences retain all six actual 403 attempts, alternative searches, and local proof replacements in `source_resolution`; no source coverage was waived.
- Current supplier checks: the finite-MDP Definition (batch 80) and online-protocol Definition (batch 73) were inspected in full and their current Step 1 records are hash-closed ready. Hedge/OGD page suppliers (batch 74) were inspected; their current algorithms and regret theorems also have hash-closed ready records. The external `martingale-inequalities-and-convergence` page exists under `library/probability`; its published Azuma supplier and direct proof prerequisites were inspected. These checks establish authoring interfaces only, not independent approval.
- The current `batch-dependency-levels` record is stale: its recorded input hash is `a4ceb137a414ece6240fd042cc4654658056b078b733764f9eb13be67e1cf824`, while the latest read-only recomputation gives `b92161364a8aba1113cc81285b771cbd741c6eab9522936d897d9ab917f213a9`. The recomputed batch-89 row remains level 2, with current batch prerequisites 73, 74, and 80; the dispatch listed 74 and 80. Batch 73 arises from the explicit `def-online-decision-protocol` item edges. The shared scheduling artifact was not rewritten; the owner must reconcile and regenerate it.
- A direct comparison of the current batch manifests and the batch-89 sidecar found exactly six expected cross-batch edges, with no missing or extra rows. The run-wide cross-batch collector cannot refresh its aggregate because batch 48 has stale consumer ownership rows: `sample-covariance-resolvent-limits` and `cor-isotropic-minimum-norm-risk-closure-under-edge-gap` are currently owned by batch 47. Batch-89's six page/item interface rows are verified from current bodies and hash-bound supplier records. No other batch input was edited.
- No unresolved mathematical gap remains in the local batch-89 arguments. The remaining blockers are run-wide owner/scheduler reconciliation and missing or stale inputs in other active batches; they do not prevent the authored batch-89 proofs, pages, source records, contracts, or sidecar from being reviewed.
- The 11 per-item authoring-readiness records were written in ascending dependency level with the exact direct dependency arrays; all are `ready`, and these records are not independent approval. Their current Step 1 hashes all verify closed. The ordinary CLI `node tools/step1-decisions.mjs check --run machine-learning-all-101-2026-10-19` returned exit 1: 975/1116 items ready, 141 unready items, 169 unready pages, `closed: false`. None of the 11 batch-89 items appears in the returned work list.
- The remaining run blockers are outside this assignment: an owner-held Step 1 scaffold repair/recertification blocker; 28 other-page empty inventories in the latest item-level check; the stale run-level batch scheduling input; an empty/invalid other-page inventory blocking global proof-contract coverage; and stale batch-48 consumer ownership rows blocking aggregate cross-batch collection. No item in batch 89 is escalated; its current dependencies, placement, proof contract and scoped checks are complete.
