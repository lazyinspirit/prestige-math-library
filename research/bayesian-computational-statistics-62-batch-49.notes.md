# Bayesian and Computational Statistics — batch 49 notes

Run: bayesian-computational-statistics-62  
Role: beta; pair: abc-mcmc-and-sequential-abc / abc-mcmc-and-sequential-abc-examples  
Assigned batch dependency level: 4; prerequisite batches: 27, 33, 44  
Scheduling input supplied by the batch task: 6b8298c9ed6497e30e79aea602ee1ecb1e5934ba2fb19a4107ce7a6658b765db  
Output manifest: research/bayesian-computational-statistics-62-batch-49.pages.json

## Plan comparison

The complete BCS-46 design at research/plan-bayesian-computational-statistics-track.md, L201–202, and the current research/plan-spec.json agree on the two page IDs, order 2138–2139, category, titles, companion relation, and A-page prerequisites approximate-bayesian-computation-and-simulation-based-inference, metropolis-hastings-algorithm-and-invariance, and feynman-kac-particle-filters. Both plan rows had empty items arrays before this batch inventory. There is no mathematical scope conflict between the design and plan-spec.

The task's scheduling input is 6b8298c9…; the dependency-level file records its own input_sha256 as 0ed93c53…. Both assign batch 49 level 4 with prerequisite batches 27, 33, and 44. The row agrees, but the digest difference is unresolved scheduling-input provenance; this batch did not edit the shared plan or dependency-level file.

The required BCS-24 page file is absent. Its exact item def-approximate-bayesian-computation is present in the batch-27 manifest and the full current Definition body was inspected. All local ABC target claims use only that available interface: standard-Borel parameter/data spaces, prior probability, simulator probability kernel, measurable summary, tolerance event, positive event probability, and its conditional parameter law. The exact item edge is recorded verified; the page edge remains open in the cross-batch input because the required page scope and summary cannot be checked. The claims were retained and drafted against the exact available item body; no missing page content or upstream approval is inferred.

The current BCS-30 MH A page and current BCS-41 Feynman–Kac A page are present as drafts. Their actual used item statements and complete proofs were read. The MH theorem assumes AC, standard-Borel state space, probability target, and probability proposal, and proves reversibility/invariance only. The BCS-41 multinomial/residual resampling theorem proves the conditional expected-offspring-count identity only. Batch 49 imports no irreducibility, convergence, mixing-rate, finite-particle error, or posterior-recovery result.

## Inventory and local proof route

The A-page inventory is six items. `def-approximate-bayesian-computation` is an in-run batch-27 supplier at level 1, so `def-abc-augmented-tolerance-target` is level 2. The marginal lemma and both algorithm definitions are level 3; the two local theorems are level 4. The B-page example levels are 4 for vanishing acceptance and 5 for the three examples that use a local theorem. A scoped recomputation from the run manifests confirms all ten labels. Every manifest dependency list mirrors the final carrier.

The ABC-MH procedure applies the general accepted-flow Metropolis–Hastings construction to the fixed positive-normalizer target on the augmented (theta,y) space. AC is inherited solely through the general MH accepted-flow RN construction; no stronger choice is used. The proof imports the actual current BCS-30 theorem and does not infer chain convergence.

The ABC-SMC procedure uses a finite, decreasing, positive tolerance schedule. Its prior-to-mixture Radon–Nikodym derivative uses the published finite-positive-measure lemma to choose a finite-valued nonnegative version; the proof uses the scalar RN theorem, simple approximation, monotone convergence, kernel measurability, and the prior-kernel joint-law formula. It resamples ancestors, perturbs once per child, simulates once, and gives a candidate the weight

    1{S(y) in B_epsilon} dPi/dphi_t^N(theta),

where phi_t^N is the actual previous weighted proposal mixture and the explicit support condition is Pi << phi_t^N. This batch uses the finite-proposal variant: out-of-tolerance simulations receive zero weight, and a zero total weight is reported as finite-particle degeneracy. The local RN proof shows the conditional unnormalized weighted empirical mean equals the current tolerance target measure; it does not claim finite-sample self-normalized unbiasedness. AC is used to select the finite nonnegative RN version. Ancestor resampling uses only finite probability laws. The finite schedule example normalizes expected unnormalized weights and explicitly distinguishes that population identity from a realized normalized finite-particle estimate.

The ABC-MH examples specify their independence proposals as the prior-simulator law. Their acceptance calculations use the general accepted-flow construction directly. One example exhibits an acceptance probability tending to zero for a continuous simulator; another computes the invariant augmented tolerance target and shows its parameter marginal can differ from the exact-data posterior.

## Source harvest

All four full-text sources were inspected at the listed locators and passed node tools/source-fetch-check.mjs --coverage research/bayesian-computational-statistics-62-batch-49.coverage.json --stamp: 4/4 fetch-verified, 4/4 resolved, 0 source drops. Three independent ABC treatments are included, including the full Chapter 8 textbook. The Fearnhead–Prangle paper was inspected for summary-statistic context; its optimal-summary theorem is explicitly out of scope and is not imported.

The sources' standard ABC-SMC pseudocode repeats proposals until acceptance. This batch instead uses a single proposal per resampled child with the tolerance indicator in the RN weight. The item proves the exact weighted-law identity for this procedure directly; no equivalence of finite algorithms is claimed.

## Unresolved and check record

- Open supplier page: approximate-bayesian-computation-and-simulation-based-inference. The exact used item def-approximate-bayesian-computation is present and inspected, but the page-level scope/summary remains for owner reconciliation.
- No other unresolved mathematical supplier body was found for the assigned claims.
- Source fetch: passed, 4/4 sources; stamps and byte metadata are in the coverage file.
- Strict proof-contract check: passed all 10 assigned items, with no warnings.
- Scoped phase precheck: passed all 7 proof-bearing assigned items; the definition and two algorithm items are not applicable.
- Explicit-item proof-layout: passed all 10 changed items, 20 proof steps, zero defects.
- Scoped item dependency recomputation: passed all 10 assigned labels. The final full-run command reports one issue outside this pair: `ex-cylinder-gaussian-process-is-not-banach-valued` declares level 1 versus computed level 2. No batch-49 item is reported by the full-run command.
- Content policy: passed the 10-item batch manifest with zero errors and warnings.
- Source fetch with `--stamp`: passed, 4/4 full texts fetch-verified and resolved, 0 new stamps.
- Step 1 records: all ten assigned items are recorded `escalated` with `owner: false`, the direct dependencies examined, and the BCS-24 page-level blocker. The exact BCS-24 definition item is verified, but the required page carrier remains absent, so readiness is not complete. Owner reconciliation is required before these records can be marked ready.
- A post-record carrier/manifest consistency audit found two omitted direct-dependency entries and added them to the manifest: `lem-finite-products-of-standard-borel-spaces-are-standard-borel` for `thm-abc-metropolis-hastings-invariance`, and `thm-measurability-of-integration-against-a-kernel` for `thm-abc-sequential-smc-rn-weight-update`. The consistency audit now passes. Because Step 1 explicitly forbids overwriting an escalation, the already-escalated decision records were left intact; their `dependencies` arrays and hashes reflect the manifest just before these two additions. The current item carriers and manifest are consistent, and owner reconciliation must include these two dependencies when resolving the escalations.

## Owner recovered missing upstream ABC pagepair

Both previously missing batch27 draft page carriers now exist with exact approved9-item inventory. Focused same-agent final10 consumer interface check after native49 drain is recorded in research/bayesian-computational-statistics-62-owner-abc-final-resolution.json. This closes the actual missing-page hold; it does not confer independent mathematical approval or waive native review/full gates.
