# Bayesian and Computational Statistics — batch 41 authoring notes

Run: bayesian-computational-statistics-62  
Role: beta; pair: state-space-filtering-and-predictive-laws  
Batch level at dispatch: 2; declared in-run prerequisite batch: 5.  
Scheduling input at dispatch: 4353922e2bc21330b8d06b628923b2b91b410a0bed9abbcf2167572e3af83d9d.

## Plan comparison and reconciliation

The complete BCS-38 design at research/plan-bayesian-computational-statistics-track.md L177 sets the scope: finite-horizon standard-Borel state and observation spaces, an initial law and transition/observation kernels, RCD definitions of filtering, prediction and full-path smoothing, jointly measurable observation densities for updates, finite-positive normalization, predictive fillers on zero/infinite evidence fibers, a path-law/RCD/Bayes proof route, and finite HMM, scalar Gaussian, and impossible-observation examples.

The plan-spec and assigned page manifest agree on page IDs, order (2122/2123), title, category, companion, and page requirements. The design names BCS-01 and BCS-02; the concrete page requirement is BCS-02 plus SME-44 state-space-models-as-probability-laws. BCS-02 itself requires BCS-01 and the dominated-experiment page. The local definition includes the MSF parametric-model contract; the SME finite-horizon law theorem imports Ionescu–Tulcea. These are the same transitive interfaces, so no prerequisite was dropped.

The plan's proposed A-item table at L318 names alg-recursive-bayesian-filter, but the generated batch manifest omitted that procedure. I added the planned algorithm to the assigned A page and manifest. I retained the manifest's explicit def-state-space-filtering-laws, thm-state-space-filtering-and-smoothing-laws-exist, and thm-dominated-state-space-filtering-recursion interfaces; the local existence theorem supplies the RCD/factorization prerequisite needed by the recursion proof. The theorem proves the algorithm's filtering-kernel identities, and the algorithm's justified_by points to that theorem.

The generated plan-spec statement for conditional-law existence treated predictive kernels as defined for all 0≤t≤T, which would require an undefined history space F_{1:-1}. The carriers now define π₀=μ₀ as the initial filtering kernel on the singleton empty history and predictive kernels for 1≤t≤T; full-path smoothing still includes T=0. This resolves the index convention without narrowing the planned claims.

## Inventory, dependencies, and levels

The assigned pair has four A-page items and three B-page examples. The A page remains below the 100-item cap. Item levels were recomputed with tools/item-dependency-levels.mjs; external items do not raise in-run levels.

| Item | Page | Level | In-run item suppliers |
|---|---|---:|---|
| def-state-space-filtering-laws | A | 0 | none |
| thm-state-space-filtering-and-smoothing-laws-exist | A | 1 | def-state-space-filtering-laws |
| alg-recursive-bayesian-filter | A | 1 | def-state-space-filtering-laws |
| thm-dominated-state-space-filtering-recursion | A | 2 | definition, existence theorem, recursive algorithm |
| ex-finite-hidden-markov-filtering-and-smoothing | B | 3 | definition, existence theorem, algorithm, recursion theorem |
| ex-scalar-gaussian-state-space-filter | B | 3 | definition, existence theorem, algorithm, recursion theorem |
| ex-impossible-observation-zero-evidence-fiber | B | 3 | definition, existence theorem, algorithm, recursion theorem |

The item dependency arrays, statements, placements, and levels match batch-41.pages.json and the carrier frontmatter. The scalar Gaussian item includes the full Countable Choice/Lebesgue-dilation branch and the continuous-to-Borel supplier used to verify joint density measurability.

## Supplier verification and mathematical arguments

- state-space-models-as-probability-laws is published. I read the actual def-general-state-space-model-by-kernels definition and the complete thm-finite-horizon-state-space-kernel-law-exists-uniquely proof. They specify standard-Borel finite products, the initial probability and both kernel families, and the ordered path law; AC is used through the Ionescu–Tulcea construction. This supplies the finite path law only; it does not supply filtering.
- For BCS-02, I read its current A-page body and both draft A-item bodies. The fixed-fiber definition allows sigma-finite priors and does not infer joint measurability; the proposition proves that finite-positive evidence is exactly the condition for probability normalization. The published thm-bayes-formula-for-dominated-kernels proof requires a proper prior probability and a specified jointly measurable normalized density, and fills zero/infinite fibers with the supplied prior. The filtering theorem states those stronger hypotheses explicitly. The BCS-02 interface is body-verified only; its carriers remain drafts and this is not acceptance.
- For conditional-law existence, I inspected the complete standard-Borel RCD existence theorem and the full factor-through-kernel lemma. The former requires AC and a standard-Borel target, with no countable-generation assumption on the conditioning sigma-algebra; the latter additionally requires a standard-Borel conditioning variable. The finite-history targets and the full state-path target satisfy those hypotheses. Finite-product standard-Borel closure is supplied by its choice-free finite-product lemma.
- For the filtering theorem, I read the complete published conditional-integration, kernel-integration-measurability, dominated Bayes, conditional-density, Tonelli, monotone-convergence, change-of-variables, and π–λ supplier bodies. Their hypotheses match the proof: probability-valued predictive kernels, sigma-finite observation measures, product-measurable normalized densities, and finite measures on generating history rectangles. The explicit Bayes update is choice-free; AC is inherited only through the model path law and conditional-kernel suppliers.
- For the Gaussian example, the normal-law definition and Gaussian integral proof were inspected. Translation invariance is choice-free; Lebesgue dilation and the continuous-to-Borel corollary require Countable Choice, which follows from AC by the declared sequential-choice lemma. The proof also cites the corollary to verify the translated density is jointly measurable.
- The finite HMM example verifies the normalized counting-measure density directly and calculates the smoother using the ordered path-law factorization. The impossible-observation example directly checks the RCD event identities for an arbitrary probability at the null observation, not just the selected predictive filler.

## Source reading and retrieval

Two independent full-text sources support the A page; locators, harvested-result dispositions, URLs, and prior successful full-text retrieval records are in batch-41.coverage.json.

- Särkkä and Svensson, Bayesian Filtering and Smoothing, 2nd ed., Chapter 6 §§6.1–6.2, printed pp. 91–96 (PDF pp. 121–126): state-space conventions, examples, equations (6.7)–(6.13), and Theorem 6.5 with its proof. Its density-based equations motivate the local recursion and algorithm; the local proof adds the standard-Borel RCD construction and explicit bad-evidence behavior. [Author-hosted book](https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf).
- Doucet and Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, version 1.1, §§2.1–2.3, printed pp. 2–7 (PDF pp. 4–9): HMM and linear-Gaussian models, finite-state examples, density recursions, and full-path smoothing. Its density formulas support the examples and algorithm; they are not used as a substitute for the local kernel-level proof. [Authors' Warwick copy](https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf).

The required source-fetch check passed: 2/2 source URLs fetch-verified, 0 newly stamped, 2/2 resolved, 0 documented drops. There were no retrieval failures or recovery retries, so no source-resolution escalation was needed.

## Scoped checks and remaining run-level reconciliation

Final assigned-scope results:

- focused depcheck: 7 item checks, both page checks and their prerequisite closure; 0 errors, 0 warnings;
- scoped item dependency levels: 7 items, no errors; levels 0/1/1/2/3/3/3;
- precheck: 5 proof-bearing items, 0 failures;
- strict proof contracts: 7/7 items, 0 errors, 0 warnings;
- proof-layout: 7 items, 18 steps, 0 defects;
- renderer: 9 files, no frontmatter, math, delimiter, or wikilink errors;
- content policy: 7 scoped items, 0 errors, 0 warnings.

The run-wide item-level command still reports 56 empty scaffold inventories in other BCS pages; it reports no batch-41 level mismatch. The current read-only batch-graph recomputation is 78ce96a10e8dfe1c106d60caf4ed944dc3003ecae8235806436c70b3c4b3e692, with batch 41 still at level 2 and requiring batch 5. The stored shared batch-dependency-level input remains stale because this assigned manifest changed; the owner/autopilot must refresh that run-level artifact after author writers drain. I left the shared scheduling file and engine state untouched.

Cross-batch page interfaces are recorded as verified in batch-41.cross-batch-dependencies.json. These records describe current-body/interface inspection only; they do not record mathematical acceptance or approval.

The seven final item readiness records were written with node tools/step1-decisions.mjs record, each with the inspected direct dependency IDs and current evidence. A current-hash verification through the Step 1 decision helper reports all seven records closed. These are authoring-readiness records only, not independent mathematical acceptance.

The live run remains in 1-scaffold and is owner-held. The autopilot state retains an item-handoff failure recorded at 2026-10-15T04:32:48Z for items/ex-uniform-endpoint-bootstrap-failure-and-m-out-of-n-remedy.md:4; that current line is now single-quoted, so the stored handoff diagnosis may be stale and remains for owner reconciliation. The fresh step1-blockers.json at 2026-10-15T05:03:51Z reports stage-stalemate for batch 30, described as artifact-incomplete and no longer running. These run blockers do not involve batch 41 and were left to the owner/operator.
