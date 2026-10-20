# Batch 25 authoring notes

Run: machine-learning-all-101-2026-10-19  
Pair: ml02-graphical-models / ml02-graphical-models-examples  
Batch dependency level: 0; scheduling input: 424a2623b4a02ffac30bca34f1e893445df04b9a3a30237f39748f9397b2e4a0.

## Plan and reconciliation

- research/machine-learning-all-101-2026-10-19-owner-authoring-direction.md is absent.
- The controlling ML-24 entry in research/plan-spec.json uses the refreshed prose from research/plan-machine-learning-track.md (supplier-reconciliation digest 7c2cab10727e075342eb53966069cd45e44c2c7beaea1361077898cdef13b219). Scope, six proposed main items, convention choices, warnings and proof route agree. No claim-level conflict was found.
- The beta task and plan-spec page-level requires arrays agree: central-limit-theorems, convex-and-semicontinuous-functions-on-rn, markov-kernels-and-markov-chains, probability-spaces-random-variables-and-expectation, and the-spectral-theorem-and-singular-value-decomposition. These are page prerequisites; the plan's Requires paragraph supplies item-level logical interfaces. All five prerequisite pages are present and published.
- The actual Gaussian proof needs the published thm-nondegenerate-multivariate-normal-law-has-density and thm-conditional-density-formula: def-multivariate-normal-law alone allows singular covariance and does not supply a density or conditional-density formula. The Gaussian item therefore assumes Σ ≻ 0 and adds these direct dependencies, plus the normal characteristic-function fact and conditional-independence definition actually used.
- lem-graphical-lasso-profiled-gaussian-likelihood is added on the A page. The objective is defined choice-free as a deterministic matrix functional; this local lemma separately proves its normalized Gaussian profile-likelihood interpretation under AC. This keeps the optimizer theorem choice-free.
- The finite-state clique-factorized class is defined separately from pairwise/global Markov properties. ESL and Oxford notes state Hammersley-Clifford equivalence but do not supply its proof in the read sections; the controlling plan forbids claiming that equivalence here. No such implication is asserted.
- The published pages for all task-level prerequisites were inspected. Actual local supplier bodies and proof hypotheses were inspected for the conditional-independence, random-element, expectation, multivariate-normal, nonnegative-operator, real spectral, Hessian and convexity interfaces.

## Scaffold inventory and dependency levels

The inventory, direct deps, and item dependency_level labels were entered in the scaffold manifest before item carriers were written. Scoped dependencyLevels and manifest-deps both passed for the batch manifest.

| Item | Page | In-run suppliers | Level |
|---|---|---|---:|
| def-undirected-graphical-model-and-markov-properties | A | none | 0 |
| def-graphical-lasso-objective | A | none | 0 |
| def-restricted-boltzmann-machine | A | none | 0 |
| thm-gaussian-precision-zero-conditional-independence | A | def-undirected-graphical-model-and-markov-properties | 1 |
| lem-graphical-lasso-profiled-gaussian-likelihood | A | def-graphical-lasso-objective | 1 |
| alg-graphical-lasso-coordinate-descent | A | def-graphical-lasso-objective, cor-real-spectral-theorem-for-self-adjoint-endomorphisms | 1 |
| thm-graphical-lasso-convexity-and-kkt | A | def-graphical-lasso-objective | 1 |
| ex-rbm-visible-units-conditionally-independent-given-hidden | B | def-restricted-boltzmann-machine | 1 |
| ex-three-node-gaussian-chain | B | def-undirected-graphical-model-and-markov-properties, thm-gaussian-precision-zero-conditional-independence | 2 |
| ex-graphical-lasso-penalty-sparsity-threshold | B | def-graphical-lasso-objective, thm-graphical-lasso-convexity-and-kkt | 2 |

Every other item dependency is outside this run. No cross-batch logical edge is declared, so batch-25.cross-batch-dependencies.json is empty. Item levels are one plus the largest in-run supplier level, ignoring published/out-of-run suppliers.

## Source record and recovery history

Four full-text treatments are being used for the A page:

- Hastie, Tibshirani and Friedman, The Elements of Statistical Learning, 2nd ed., Chapter 17 §§17.2–17.4.4, printed pp. 627–645. The planned official corrected-printing URL https://hastie.su.domains/ElemStatLearn/printings/ESLII_print12_toc.pdf returned HTTP 404; the legacy web.stanford.edu URL redirected to the same 404. Search found a complete second-edition book PDF at https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf. This is a 2011 university course mirror, not a verified copy of the 12th printing. The 20.64 MiB PDF was downloaded and its complete relevant printed-page range was extracted and inspected locally. The original URL and exact recovery history are retained in coverage. It supports the Markov-property definitions, Gaussian likelihood, Gaussian precision exercise, all-entry graphical-lasso objective and updates, and RBM/CD discussion.
- Robin Evans, Graphical Models course notes, §§4.1–4.3 and 5.1–5.2, printed pp. 15–25, https://www.stats.ox.ac.uk/~evans/gms/lecturenotes.pdf. The full relevant sections were inspected. The notes' proof of the Gaussian precision-zero statement is concise and the Hammersley-Clifford proof is explicitly omitted; our Gaussian block proof is supplied locally and Hammersley-Clifford is not claimed.
- Friedman, Hastie and Tibshirani, Sparse inverse covariance estimation with the lasso, §§1–3, pp. 1–5, https://hastie.su.domains/Papers/graph.pdf. The objective, all-entry penalty convention, subgradient equations, block/lasso reduction and cyclic coordinate updates were inspected in the complete relevant text. No convergence theorem for the implementation is claimed.
- Geoffrey Hinton, A Practical Guide to Training Restricted Boltzmann Machines, §§2–3, printed pp. 3–6, https://www.cs.toronto.edu/~hinton/absps/guideTR.pdf. The energy, partition function, exact likelihood gradient, sigmoid conditionals, Gibbs sampling and finite contrastive-divergence approximation were inspected.

ESL source search/retrieval: the official URL returned 404; the legacy Stanford URL redirected to the same 404; two recorded searches found the full second-edition text at the NEU course mirror; that full PDF was downloaded and the relevant pages inspected. The coverage records the failed candidates separately from source-fetch-check recovery attempts. No source was dropped and no source-resolution drop record is appropriate. source-fetch-check --stamp passed 4/4 sources: ESL 21,644,344 bytes / 764 pages / SHA-256 prefix 8c15b8b603edf939; Evans 552,871 bytes / 67 pages / c550a4705f761dc6; Friedman–Hastie–Tibshirani 157,114 bytes / 14 pages / 43caff20f1d0b140; Hinton 197,863 bytes / 21 pages / 93593c93a9be7838. coverage-checklist passed for 1 A page and 29 harvested entries with 0 errors and 0 warnings.

## Item checkpoints

### def-undirected-graphical-model-and-markov-properties — drafted

- Claim/conventions: finite simple undirected graph; pairwise conditioning on every remaining vertex; global vertex separation; finite-state strictly positive clique-potential factorization. No factorization/Markov implication or Hammersley–Clifford equivalence is stated.
- Sources: ESL, §17.2, printed pp. 627–629, https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf; Evans, §§4.1–4.3, printed pp. 15–17, https://www.stats.ox.ac.uk/~evans/gms/lecturenotes.pdf.
- Direct dependencies: def-random-element-and-real-random-variable, def-conditional-independence-given-a-sigma-algebra, def-axiom-of-choice. Dependency level 0; placed on the A page.
- Validation: Manifest dependency/placement and uninterrupted-statement checks passed; this definition has no separate numbered proof obligation.
- Unresolved obligations: none for this definition. AC is declared because the library's conditional-independence convention uses the conditional-expectation class interface.
- Next: the owner can rerun the native Step-1 record after the run-wide loader blocker is resolved; independent approval remains separate.

### def-graphical-lasso-objective — drafted

- Claim/conventions: centered covariance uses N^{-1}; the optimization domain is the symmetric positive-definite cone; the primary ℓ1 penalty sums every entry including the diagonal; the off-diagonal-only norm is named as a separate functional. The Gaussian profile interpretation is left to its own proof-bearing lemma so the deterministic functional remains choice-free.
- Sources: ESL §17.3.1 equation (17.11), §17.3.2 equation (17.21), printed pp. 632 and 635, https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf; Friedman–Hastie–Tibshirani §2 objective (1), PDF p. 2, https://hastie.su.domains/Papers/graph.pdf.
- Direct dependencies: none; all data, matrix domains, trace/log-determinant and penalty conventions are specified locally. Dependency level 0; placed on the A page.
- Validation: Manifest dependency/placement and uninterrupted-statement checks passed; this deterministic definition has no separate numbered proof obligation.
- Unresolved obligations: the profile-likelihood identity remains to be proved by lem-graphical-lasso-profiled-gaussian-likelihood.
- Next: the owner can rerun the native Step-1 record after the run-wide loader blocker is resolved; independent approval remains separate.

### def-restricted-boltzmann-machine — drafted

- Claim/conventions: finite binary visible/hidden state spaces; absent bipartite edges have zero weight; energy, finite partition sum, layerwise Bernoulli conditionals, exact single-observation likelihood gradients, and a conditional-expectation CD-k negative phase from a finite data-initialized transition matrix. No claim of likelihood-gradient equality, training performance or chain convergence.
- Sources: ESL §17.4.1 equation (17.30) and §17.4.4, printed pp. 639–644, https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf; Hinton §§2–3, printed pp. 3–6, https://www.cs.toronto.edu/~hinton/absps/guideTR.pdf.
- Direct dependencies: def-random-element-and-real-random-variable, def-conditional-independence-given-a-sigma-algebra, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-axiom-of-choice. Dependency level 0; placed on the A page. The finite Gibbs transition matrix is defined explicitly, so no general chain theorem is used in its finite k-step definition.
- Validation: Strict proof contract passed with exact supplier excerpts, all seven verification steps, and eight boundary dispositions; statement-first and proof-layout checks passed.
- Unresolved obligations: none for the finite definition and derivations. AC is needed only for the library's general conditional-independence convention; all finite energy sums and gradient differentiations are choice-free.
- Next: the owner can rerun the native Step-1 record after the run-wide loader blocker is resolved; independent approval remains separate.

### thm-gaussian-precision-zero-conditional-independence — drafted

- Claim/conventions: for every pair i≠j in a nondegenerate p-dimensional Gaussian, Θ_ij=0 iff conditional independence given all remaining coordinates. The proof uses the two-coordinate precision block; the remaining-coordinate conditional density is obtained by completing the square. Singular covariance is excluded explicitly.
- Sources: ESL §17.3.1 / Exercise 17.3, printed pp. 630–631, https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf; Evans §5.1, Proposition 5.2, printed p. 23, https://www.stats.ox.ac.uk/~evans/gms/lecturenotes.pdf. The source leaves the block inverse implication as an exercise/sketch; the item proves the conditional density and both directions locally.
- Direct dependencies: def-undirected-graphical-model-and-markov-properties, def-multivariate-normal-law, thm-nondegenerate-multivariate-normal-law-has-density, thm-conditional-density-formula, def-conditional-independence-given-a-sigma-algebra, lem-characteristic-function-of-a-normal-law, thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets, def-countable-choice, lem-ac-supplies-sequential-choices-for-probability-constructions, def-axiom-of-choice. Dependency level 1; placed on the A page.
- Validation: Strict proof contract passed with exact supplier excerpts, all seven proof steps, both iff directions and eight boundary dispositions; statement-first and proof-layout checks passed.
- Unresolved obligations: none known; the p=2 empty-conditioning case is handled explicitly. AC is required only for the conditional-independence convention.
- Next: the owner can rerun the native Step-1 record after the run-wide loader blocker is resolved; independent approval remains separate.

### lem-graphical-lasso-profiled-gaussian-likelihood — drafted

- Claim/conventions: for iid N_p(μ,Σ) observations with Σ ≻ 0, profiling μ gives C+(N/2)(log det Θ−tr(SΘ)) under the required N^{-1} centered covariance convention; the displayed normalization is 2/N.
- Sources: ESL §17.3.1, equations (17.10)–(17.11), printed pp. 631–632, https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf; Evans §5.2, printed p. 25, https://www.stats.ox.ac.uk/~evans/gms/lecturenotes.pdf.
- Direct dependencies: def-graphical-lasso-objective, def-multivariate-normal-law, thm-nondegenerate-multivariate-normal-law-has-density, def-measure-kernel-and-probability-kernel, lem-finite-products-of-dominated-kernels-have-product-density, def-axiom-of-choice. Dependency level 1; placed on the A page.
- Validation: Strict proof contract passed with exact supplier excerpts, all four proof steps, explicit product-kernel hypotheses and eight boundary dispositions; statement-first and proof-layout checks passed.
- Unresolved obligations: none; the cross term vanishes because the centered residuals sum to zero.
- Next: the owner can rerun the native Step-1 record after the run-wide loader blocker is resolved; independent approval remains separate.

### alg-graphical-lasso-coordinate-descent — drafted

- Claim/conventions: finite R-sweep/K-coordinate-sweep truncation of the coupled covariance-block/lasso updates; initialize W=S+λI; retain the all-entry penalty convention; use the source soft-threshold coordinate minimizers; return an explicit failure if a candidate loses positive definiteness. No optimizer, convergence or runtime claim.
- Sources: ESL §17.3.2, Algorithm 17.2 and equations (17.26)–(17.27), printed pp. 635–636, https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf; Friedman–Hastie–Tibshirani §§2–3, Algorithm 1 and equations (11)–(12), PDF pp. 3–5, https://hastie.su.domains/Papers/graph.pdf.
- Direct dependencies: def-graphical-lasso-objective and cor-real-spectral-theorem-for-self-adjoint-endomorphisms (for the explicit eigenvalue acceptance test). Dependency level 1; placed on the A page.
- Validation: Strict proof contract passed with exact supplier excerpts, all four verification steps and eight boundary dispositions; statement-first and proof-layout checks passed.
- Unresolved obligations: no mathematical gap for the stated finite procedure. The original iterative source procedure's convergence is intentionally not claimed.
- Next: the owner can rerun the native Step-1 record after the run-wide loader blocker is resolved; independent approval remains separate.

### thm-graphical-lasso-convexity-and-kkt — drafted

- Claim/conventions: for every p≥1, S⪰0 and λ>0, the objective with the full-matrix ℓ1 penalty has an attained unique maximizer; the symmetric entrywise subgradient KKT equation is necessary and sufficient. Diagonal subgradients are 1 because Θ_ii>0.
- Sources: ESL §17.3.2, equations (17.21)–(17.23), printed pp. 635–636, https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf; Friedman–Hastie–Tibshirani §2, objective (1) and subgradient (6), PDF pp. 2–3, https://hastie.su.domains/Papers/graph.pdf.
- Direct dependencies: def-graphical-lasso-objective, thm-non-negative-operator-characterisations, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, thm-hessian-characterises-convexity, def-convex-and-strictly-convex-functions-on-euclidean-sets. Dependency level 1; placed on the A page.
- Validation: Strict proof contract passed with exact supplier excerpts, all six proof steps, both KKT directions and eight boundary dispositions; statement-first and proof-layout checks passed.
- Unresolved obligations: none. The optimizer theorem uses only deterministic matrix assumptions and remains choice-free.
- Next: the owner can rerun the native Step-1 record after the run-wide loader blocker is resolved; independent approval remains separate.



### ex-rbm-visible-units-conditionally-independent-given-hidden — drafted

- Claim/conventions: m=2, n=1, zero biases and both weights log 3; conditionals are Bernoulli(1/2) at H=0 and Bernoulli(3/4) at H=1; summing the finite joint law gives P(H=1)=4/5, visible marginals 7/10 and joint visible success probability 1/2, proving conditional but not marginal independence.
- Sources: ESL §17.4.4, printed pp. 643–644, https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf; Hinton §§2, printed pp. 3–4, https://www.cs.toronto.edu/~hinton/absps/guideTR.pdf.
- Direct dependencies: def-restricted-boltzmann-machine, def-conditional-independence-given-a-sigma-algebra, def-axiom-of-choice. Dependency level 1; placed on the B page.
- Validation: Strict proof contract passed with exact supplier excerpts, all three verification steps and eight boundary dispositions; statement-first and proof-layout checks passed.
- Unresolved obligations: none.
- Next: the owner can rerun the native Step-1 record after the run-wide loader blocker is resolved; independent approval remains separate.


### ex-three-node-gaussian-chain — drafted

- Claim/conventions: precision matrix with diagonal 2 and adjacent off-diagonal −1; graph edges are exactly nonzero off-diagonal entries; the quadratic form proves Σ ≻ 0, then Θ_13=0 gives endpoint conditional independence given X_2.
- Sources: ESL §17.3.1, printed pp. 630–631, https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf; Evans §5.1, printed p. 23, https://www.stats.ox.ac.uk/~evans/gms/lecturenotes.pdf.
- Direct dependencies: def-undirected-graphical-model-and-markov-properties, thm-gaussian-precision-zero-conditional-independence, def-multivariate-normal-law, def-axiom-of-choice. Dependency level 2; placed on the B page. TikZ path diagram uses the stated nonzero-precision-edge convention; proof is independent of the drawing.
- Validation: Strict proof contract passed with exact supplier excerpts, all three verification steps and eight boundary dispositions; statement-first and proof-layout checks passed.
- Unresolved obligations: none.
- Next: the owner can rerun the native Step-1 record after the run-wide loader blocker is resolved; independent approval remains separate.


### ex-graphical-lasso-penalty-sparsity-threshold — drafted

- Claim/conventions: two centered observations give rank-one S=[[1,1],[1,1]]. Under the full-entry penalty, λ≥1 admits the diagonal KKT point Θ=(1+λ)^{-1}I, while λ<1 makes a zero off-diagonal KKT coordinate impossible. The objective theorem supplies existence and uniqueness where claimed.
- Sources: Friedman–Hastie–Tibshirani §2, objective (1) and subgradient (6), PDF pp. 2–3, https://hastie.su.domains/Papers/graph.pdf; ESL §17.3.2, equations (17.21)–(17.23), printed pp. 635–636, https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf.
- Direct dependencies: def-graphical-lasso-objective, thm-graphical-lasso-convexity-and-kkt. Dependency level 2; placed on the B page.
- Validation: Strict proof contract passed with exact supplier excerpts, all three verification steps and eight boundary dispositions; statement-first and proof-layout checks passed.
- Unresolved obligations: none.
- Next: the owner can rerun the native Step-1 record after the run-wide loader blocker is resolved; independent approval remains separate.



## Final validation and handoff

- `node tools/item-dependency-levels.mjs` scoped to batch 25: 10 items, maximum dependency level 2, 0 errors. The batch order is ascending by level; B-page examples are ordered level 1, then level 2.
- `node tools/manifest-deps.mjs research/machine-learning-all-101-2026-10-19-batch-25.pages.json`: 10 items, 0 missing dependencies, 0 errors. Manifest statements/dependencies match the item carriers.
- `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-25.coverage.json --stamp`: 4/4 sources fetch-verified, 0 newly stamped. `coverage-checklist`: 1 page, 29 harvested results, 0 errors/warnings.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-25.proof-contracts.json --strict`: 8/8 proof-bearing items checked, 40 supplier citations, 37 derivations, 0 errors/warnings. No registered finite-smoke checks apply; the finite examples and checks are proved in their item verifications.
- `node tools/proof-layout.mjs` on all 10 assigned items: 37 numbered proof steps, 0 defects. Scoped statement-first inspection: 10 items, 0 defects. Carrier consistency: 2 YAML-only pages, 10 ordered items, 0 defects; no page summaries or manually assigned `page_layout`.
- `node tools/content-policy.mjs research/machine-learning-all-101-2026-10-19-batch-25.pages.json --json`: 10 scoped items, 0 errors/warnings. `node tools/depcheck.mjs --items-file /tmp/ml25-item-scope.json --json`: focused item checks pass for all 10 items; dependency closure covers 1,576 items and 286 pages, with 0 errors/warnings.
- The full-run dependency-level command remains blocked by unfinished other-batch scaffolds: many pages have empty inventories, and batch 26 page `ml02-causal-pc` has 15 string item IDs instead of `{id,...}` item records. The assigned-batch DAG check passes.
- The native Step-1 recorder was attempted but wrote no decision: `node tools/step1-decisions.mjs record` aborts while loading the full run with `Duplicate item undefined`. The blocker is the malformed item-row shape in `research/machine-learning-all-101-2026-10-19-batch-26.pages.json` (`ml02-causal-pc`); this is outside batch-25 ownership and was not edited. All ten batch-25 readiness records remain absent until the owner/engine makes the run snapshot readable.
- Batch-25 mathematical prerequisites, placement, arguments and proof contracts are complete; no batch-25 supplier is missing. Independent approval and publication remain with the owner.
