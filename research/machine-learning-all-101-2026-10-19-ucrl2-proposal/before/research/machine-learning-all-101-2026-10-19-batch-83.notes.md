# Batch 83 notes — average-reward regret and UCRL2

## Scope and controlling materials

Run `machine-learning-all-101-2026-10-19`; role `beta`; owned pair `average-reward-regret-and-ucrl2` and its examples page only. The controlling authoring instructions, `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, batch task, full ML-75 design, plan-spec page entry, owner direction, batch dependency-level artifact, and current run status were read before authoring. No shared plan, engine state, other batch, or published item was edited.

The design and plan-spec page IDs, companion, category, and four prerequisite pages agree. The plan-spec item inventory was empty; the controlling design named five interfaces, which the A-page inventory below elaborates with necessary local prerequisites. No plan-spec inventory conflict was found.

## Plan/source conflicts and mathematical decisions

- The design's regret convention puts expectation inside the regret variable, while Jaksch–Ortner–Auer define the random, pathwise quantity from realized cumulative reward. `def-average-reward-and-regret` now defines both pathwise regret and its expectation separately; the upper theorem uses the pathwise quantity and the lower theorem uses expected regret.
- The plan states the upper bound for `T≥1`; Jaksch–Ortner–Auer Theorem 2 states it for `T>1`. The assigned `T≥1` claim is preserved and refuted at `T=1` in `thm-ucrl2-high-probability-regret`: on a one-state, two-action deterministic MDP, UCRL2's specified tie rule selects the zero-reward action; with `δ=e^{-1/100000}`, the claimed threshold is `34/√50000<1`, so the asserted event has probability zero although `1−δ>0`. This theorem is escalated, not silently narrowed.
- Batch 80's actual `def-finite-markov-decision-process` has a finite reward alphabet. Jaksch's model permits any reward law supported on `[0,1]`. `def-bounded-reward-finite-mdp` explicitly extends the finite state/action skeleton to a Borel reward law and states its probability-kernel, product-sigma, mean-reward, path-law, and Choice conventions. The actual batch-80 supplier remains open: it is draft and has no current Step 1 readiness record.
- The original diameter is zero for a singleton state. `def-communicating-mdp-and-diameter` keeps that raw value and defines normalized `D=max(1,D₀)`, making the singleton boundary explicit.
- The design's lower-bound coefficient `0.015` is preserved. The inspected primary proof constructs `D′=D/4`, `k=floor(S/2)`, `A′=floor((A−1)/2)` and concludes `0.015√(D′kA′T)`. Since `D′kA′≤DSA/16`, this does not establish the planned `0.015√(DSAT)` coefficient. The elementary floor bounds give `D′kA′≥DSA/36` for `S,A≥10`, so the displayed line could support `0.0025√(DSAT)` on that branch if the construction hypotheses and diameter are verified. Exact state/action padding, diameter verification, the small-`D` branch, and the KL/Pinsker transfer are not fully proved locally. The item is escalated; the theorem is not weakened.
- The UCRL2 EVI termination proof in Jaksch–Ortner–Auer Appendix B is a sketch. The author-hosted Puterman–Chan Chapter 7 states the convergence proposition but explicitly omits its proof. `lem-ucrl2-evi-termination` and its dependent upper theorem remain escalated.
- The exact Manchester-hosted Puterman PDF URL returned HTTP 404 on the initial attempt and five retries. Its URL alone is documented as dropped with certainty; this does not drop the mathematical proof obligation. The author-hosted replacement was fetched and inspected, and its omitted proof is recorded.

## Inventory, item claims, levels, and direct dependencies

The batch-level input remains level 1 with prerequisite batch 80. The item levels below count actual in-run item suppliers; batch 80's `def-finite-markov-decision-process` is level 0. The complete rows and cross-batch excerpts are in `batch-83.dependency-inputs.json` and `batch-83.cross-batch-dependencies.json`.

### A page: `average-reward-regret-and-ucrl2`

- Level 0 — `lem-almost-additive-sequence-has-limit`: bounded real sequences with a uniformly bounded additive defect have a finite normalized limit. Direct dependencies: none. Its complete proof shifts by `±C`; source support is AFP `Theory Fekete`, Szpankowski §5.1, Theorem 5.1, and Friedli–Velenik Appendix B.1.3, Lemma B.5. It is tagged `literature-derived`, with an AI-generated local proof.
- Level 1 — `def-bounded-reward-finite-mdp`: finite nonempty state/action sets, a probability kernel on `S×[0,1]`, its transition marginal and mean reward, conditional interaction law, and AC for the path-space construction. Direct dependencies: `def-finite-markov-decision-process` (batch 80, open), `def-borel-sigma-algebra`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-probability-measure`, `def-measure-kernel-and-probability-kernel`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `thm-ionescu-tulcea-construction-of-a-markov-chain`, `def-axiom-of-choice`.
- Level 2 — `def-communicating-mdp-and-diameter`: measurable history-dependent policies, expected hitting times, raw diameter, and normalized diameter. Direct dependencies: `def-bounded-reward-finite-mdp`, `def-finite-markov-decision-process` (batch 80, open), `def-expectation-of-a-nonnegative-or-integrable-random-variable`.
- Level 2 — `lem-ucrl2-adaptive-sample-tape-representation`: finite-horizon adaptive observations can be realized as prefixes of independent fixed sample tapes with the same interaction law. Direct dependencies: `def-bounded-reward-finite-mdp`, `thm-ionescu-tulcea-construction-of-a-markov-chain`, `def-axiom-of-choice`.
- Level 2 — `alg-extended-value-iteration`: confidence-set optimistic Bellman updates and the span stopping rule; termination is explicitly separate. Direct dependency: `def-bounded-reward-finite-mdp`.
- Level 3 — `lem-ucrl2-evi-termination`: planned finite stopping claim under the UCRL2 confidence sets and communicating assumptions; proof obligation unresolved. Direct dependencies: `alg-extended-value-iteration`, `def-communicating-mdp-and-diameter`.
- Level 3 — `lem-ucrl2-uniform-confidence-bounds`: simultaneous reward and transition empirical bounds, proved using the tape lemma, width-one Azuma–Hoeffding, subset-to-ℓ1 conversion, and finite union bounds. Direct dependencies: `def-bounded-reward-finite-mdp`, `lem-ucrl2-adaptive-sample-tape-representation`, `def-martingale-difference-sequence`, `thm-martingales-and-martingale-differences-correspond`, `thm-azuma-hoeffding-inequality`, `def-axiom-of-choice`.
- Level 3 — `thm-communicating-mdp-common-optimal-average-reward`: the optimal finite-horizon value divided by horizon converges to a common state-independent value. The complete proof bounds the value span by the diameter and applies the local almost-additive lemma. Direct dependencies: `def-bounded-reward-finite-mdp`, `def-communicating-mdp-and-diameter`, `lem-almost-additive-sequence-has-limit`, `def-axiom-of-choice`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-conditional-expectation-as-an-ae-class`, `thm-tower-property-of-conditional-expectation`, `cor-expectation-linearity-monotonicity-and-modulus-bound`.
- Level 4 — `alg-ucrl2`: confidence estimates, optimistic EVI planning, deterministic tie-breaking, and count-doubling episode termination. Direct dependencies: `alg-extended-value-iteration`, `lem-ucrl2-uniform-confidence-bounds`.
- Level 4 — `def-average-reward-and-regret`: pathwise realized regret and expected regret are distinct. Direct dependencies: `def-bounded-reward-finite-mdp`, `thm-communicating-mdp-common-optimal-average-reward`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `cor-expectation-linearity-monotonicity-and-modulus-bound`.
- Level 5 — `thm-ucrl2-high-probability-regret`: planned `34DS√(AT log(T/δ))` pathwise claim for `T≥1`; refuted at the one-step boundary and escalated. Direct dependencies: `alg-ucrl2`, `lem-ucrl2-evi-termination`, `lem-ucrl2-uniform-confidence-bounds`, `def-average-reward-and-regret`, `def-communicating-mdp-and-diameter`.
- Level 5 — `thm-ucrl2-regret-lower-bound`: planned expected-regret lower bound with `c=0.015` and exact parameter scope; source transfer/padding proof remains open. Direct dependencies: `def-average-reward-and-regret`, `def-communicating-mdp-and-diameter`, `thm-pinsker`, `thm-total-variation-bounds-for-expectations`, `def-kullback-leibler-divergence`.

### B page: `average-reward-regret-and-ucrl2-examples`

- Level 2 — `ex-noncommunicating-mdp-has-state-dependent-gain`: two absorbing states with distinct long-run gains; direct dependency `def-bounded-reward-finite-mdp`.
- Level 5 — `ex-one-state-diameter-convention`: raw diameter zero, normalized diameter one, gain one, regret zero; direct dependencies `def-bounded-reward-finite-mdp`, `def-communicating-mdp-and-diameter`, `thm-communicating-mdp-common-optimal-average-reward`, `def-average-reward-and-regret`.
- Level 5 — `ex-pathwise-and-expected-regret-are-different`: a one-state Bernoulli example; pathwise regret is random while expected regret is zero. Direct dependencies `def-average-reward-and-regret`, `def-bounded-reward-finite-mdp`, `thm-communicating-mdp-common-optimal-average-reward`.

The A page has 12 items and B has 3 examples, below the 100-item cap. The page files contain YAML frontmatter only and empty Markdown bodies; no summary was authored and `page_layout` remains for the engine.

## Sources and result dispositions

The complete URLs, locators, stamps, supported IDs, and per-result dispositions are in `batch-83.coverage.json` and `batch-83.source-evidence.json`.

- Jaksch, Ortner, and Auer, JMLR 2010, full 38-page PDF: model/reward scope, communicating diameter, pathwise regret, both algorithms, confidence arguments, upper proof, and lower construction. The source's EVI convergence proof is deferred because it is only a sketch.
- Dimitrakakis and Ortner, *Decision Making Under Uncertainty and Reinforcement Learning*, full 273-page book, Chapter 10.3.1, printed pp. 222–228. This treatment shares Ortner with the JMLR paper.
- Agarwal, Ganguly, and Aggarwal, PMLR 2022, full 10-page paper: independent diameter/bias-span cross-check only.
- Puterman and Chan, full 84-page author-hosted Chapter 7: average-reward and value-iteration context; Proposition 7.3's formal proof is omitted.
- Szpankowski, *Average Case Analysis of Algorithms on Sequences*, full 530-page textbook, §5.1, Theorem 5.1, PDF pp. 100–101; Friedli and Velenik, *Statistical Mechanics of Lattice Systems*, full 44-page mathematical appendix, Appendix B.1.3, Lemma B.5, PDF pp. 2–3; and Gouëzel's full AFP formalization, `almost_additive_converges`, lines 277–323. These support the almost-additive helper; the local proof is also complete.
- The Devetak paper and Watrous book were fetched and inspected but did not supply a complete Fekete proof; their results are explicitly marked out-of-scope. They are not counted as proof sources.

`coverage-checklist` records 25 harvested results, 0 errors, 0 warnings after the AFP result was assigned to the local helper. `source-fetch-check --stamp` reports 9/10 fetch-verified and 10/10 resolved: one dead Puterman URL is documented as dropped; three relevant Fekete sources were newly stamped. The drop is URL-specific and does not close the EVI mathematics.

## Cross-batch and run-wide dependency evidence

- Required page suppliers: `discrete-time-martingales`, `markov-kernels-and-markov-chains`, and `martingale-inequalities-and-convergence` are published and verified from actual supplier statements/proofs. `finite-mdps-and-bellman-operators` is draft/open; its finite reward alphabet is insufficient for the Borel `[0,1]` reward law and its `def-finite-markov-decision-process` has no Step 1 readiness record.
- The transitive external supplier closure has 649 published items on 65 pages, 26 external item roots, and no unresolved published carriers. The in-run pair supplier is the batch-80 finite MDP definition at item level 0; its status/readiness remains open.
- Scoped item-level check over batches 80+83 passes: 32 items, batch-83 maximum level 5. The current full-run item-level snapshot has 202 pages and 824 item entries; it finds 79 empty inventories in other batches and no batch-83 level defect.
- The first batch-dependency check was blocked by invalid YAML in batch-92 source frontmatter. On the latest retry that carrier parse no longer blocks; the check now reports a stale shared dependency artifact. The recomputed input hash is `50d5c68f…`, while the shared artifact currently records `21a3ae2a…`; the dispatch hash is `49eadc4c…`. Recomputed rows still give batch 83 level 1 requiring batch 80 at level 0. All three hashes and the current blocker are recorded in the dependency-input artifact; the shared artifact was not rewritten.
- Cross-batch rows, exact excerpts, current supplier statuses, and open/verified labels are in `batch-83.cross-batch-dependencies.json`.

## Owner reconciliation proposals

- **Finite reward interface:** the exact open supplier is batch-80 `def-finite-markov-decision-process`. Its current finite reward alphabet does not imply arbitrary Borel laws on `[0,1]`. The new local supplier `def-bounded-reward-finite-mdp` is placed on this A page at level 1 and states the required probability-kernel, product-sigma, conditional-law, path-law, and Choice interfaces. To close the page-level edge, the owner can either broaden the batch-80 finite-MDP definition while retaining its finite-alphabet case or approve the local bounded-reward extension as the additional interface. This affects the average-gain, confidence, EVI, UCRL2, regret, and example items downstream.
- **EVI termination:** keep `lem-ucrl2-evi-termination` in its current A-page placement before `alg-ucrl2` and the upper theorem. It needs a full local proof of finite termination for the confidence-set update, or an authoritative proof source with the omitted hypotheses and argument.
- **Upper-bound boundary:** the planned `T≥1` claim has the in-carrier counterexample. The primary theorem uses `T>1`; a plan repair could set `T≥2`, or use a bound with a positive logarithm offset such as `log(2T/δ)` after proving that variant. The current assigned claim remains unchanged and escalated for owner decision.
- **Lower-bound coefficient:** to retain `c=0.015`, add and prove an exact parameter-transfer/padding result before `thm-ucrl2-regret-lower-bound`, including the small-`D` branch, exactly `S` states, exactly `A` actions, and diameter at most `D`. The displayed large-`D` arithmetic supports a conservative `0.0025` transfer if its construction hypotheses hold; do not substitute it without owner direction.

## Scoped validation and Step 1 decisions

- `statement-first` inspection: 15 items, 0 defects. Both page Markdown bodies are empty.
- `content-policy`: 15 items, 0 errors/warnings.
- `precheck`: 15 files, 8 proof-bearing items checked, 0 failures; the remaining definitions/algorithms/escalated claims have no supplied proof body.
- `proof-layout`: 15 explicit item carriers, 20 numbered steps, 0 defects.
- `rendercheck`: 17 files (15 carriers and both pages), 0 errors/warnings.
- Strict proof contracts: 15/15 items, 20 step derivations, 28 exact supplier citations, 0 errors/warnings. No finite-smoke selector applies to these claims; finite examples are calculated directly in their proof contracts.

Formal Step 1 records were written through `node tools/step1-decisions.mjs record` for all 15 items, without `--owner`. A native `step1Decision` audit against the current snapshot confirms 1 hash-valid `ready` record (`lem-almost-additive-sequence-has-limit`) and 14 `escalated` records, with no record errors. Items depending directly or transitively on the batch-80 finite-MDP carrier are escalated because that supplier's readiness record is missing and its reward law is too narrow. The EVI convergence item, the `T≥1` upper-bound claim, and the exact lower-bound coefficient are escalated for the mathematical reasons above. No escalation was overwritten.
