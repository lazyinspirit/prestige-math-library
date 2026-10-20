# Batch 27 authoring notes — additive-noise causal discovery

## Controlling scope and plan reconciliation

- The owner-authoring-direction file is absent. The current run task assigns only `ml02-causal-anm` and `ml02-causal-anm-examples`; the shared plan and run state remain owner-controlled.
- `research/plan-spec.json` row ML-26 binds the current `research/plan-machine-learning-track.md` contract with SHA-256 `7c2cab10727e075342eb53966069cd45e44c2c7beaea1361077898cdef13b219`. The proposed interfaces, population-only caveat, proof route, and source agree. The task/scaffold's four broad page requirements are retained as page prerequisites; the plan prose's exact item interfaces are recorded as logical item dependencies. One scope ambiguity is escalated: the plan glosses multivariate causal minimality as “each $f_j$ nonconstant,” while the cited source requires each parent coordinate to be essential. If the plan phrase is read as aggregate nonconstancy of each nonroot equation, graph identifiability is false: take independent standard normal $H,N_X,N_Z,N_Y$ and equations $X=H+N_X$, $Z=H+N_Z$, and $Y=X+N_Y$. Use graphs $H→X,H→Z,X→Y$ and $H→X,H→Z,X→Y,Z→Y$, with the latter function $f_Y(x,z)=x$. All nonroot structural functions are nonconstant, the two models have the same positive observational law, and the added edge $Z→Y$ is inessential. The cited definition exempts roots and requires each parent coordinate to be essential. The carriers use the source’s exact edgewise definition and flag the affected items for owner clarification; no claim was weakened.
- Condition 19 is written with the source's exact differential equation and domain restriction `nu''(y-f(x)) f'(x) != 0`; “does not solve at all such points” is stated as failure at at least one point in that domain. Conditional densities use the finite-valued versions furnished by the positive joint density; a witness has `0 < p_S(s) < infinity`, so its conditional-density ratio is defined.
- The additive-noise model is causally sufficient: all vertices are observed. The latent-common-cause construction is a separate B-page warning and is not used as an ANM supplier.
- Eight A-page local prerequisites/results were authored before their consumers: the positive joint-density formula, noise independence from nondescendants, persistence of parent dependence under nondescendant conditioning, nonperiodicity of probability measures, the youngest-child conditional-density factorization, an ANM density-to-d-separation conditional-independence lemma, a positive-minimal-DAG conditioned-reversal lemma, and the pointwise smooth-residual density factorization. The population theorem states graph identifiability and RESIT correctness; its Phase 1 regression rule is explicitly $C^3$ on each full predictor space, as required where the false-sink proof invokes the bivariate Condition 19 theorem. This makes the plan's smoothness interface explicit and asserts no finite-sample result.

Active-run status was recomputed with `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run machine-learning-all-101-2026-10-19 --state-dir .autopilot/machine-learning-all-101-2026-10-19`: the run remains `running` at `1-scaffold` (25/101 covered, nothing in flight; status refreshed at 2026-10-18T20:53:16.932Z); the existing blocker requires owner repair and recertification for Step 1. No `.autopilot/` state or shared verdict was edited. Batch 27 scheduling input hash: `424a2623b4a02ffac30bca34f1e893445df04b9a3a30237f39748f9397b2e4a0`.

## Item inventory and dependency order

The manifest records thirteen A-page items and three B-page examples. Batch dependency level remains zero with no in-run prerequisite batches. Batch-local item levels, recomputed from the current `deps`, are:

| Level | Items |
|---:|---|
| 0 | `def-additive-noise-model`, `lem-probability-measure-has-no-nonzero-period`, `lem-smooth-residual-independence-has-pointwise-density-factorization` |
| 1 | `alg-resit`, `lem-anm-joint-density`, `lem-anm-noise-independent-of-nondescendants` |
| 2 | `def-restricted-additive-noise-model`, `lem-anm-parent-dependence-persists-under-conditioning`, `lem-youngest-child-descendants-conditionally-independent`, `lem-anm-density-factorization-implies-dsep-conditional-independence`, `ex-latent-confounding-mimics-anm-direction` |
| 3 | `lem-positive-minimal-dags-have-a-conditioned-reversal`, `thm-bivariate-additive-noise-identifiability`, `ex-linear-gaussian-reversible-additive-noise-model` |
| 4 | `thm-restricted-anm-population-identification`, `ex-identifiable-nonlinear-additive-noise-model` |

The batch-local `item-dependency-levels` calculation reported no cycles or label mismatches. No A-page/B-page item is a supplier of another batch. The four generated page `requires` entries and B-to-A companion requirement are unchanged.

## Prerequisite audit

- All four broad required pages exist and are published: `probability/independence-borel-cantelli-and-zero-one-laws`, `measure-theory/measurable-functions-and-simple-approximation`, `probability/probability-spaces-random-variables-and-expectation`, and `statistical-models-and-experiments/structural-causal-models-dags-and-adjustment`.
- Read the complete current bodies of `def-law-or-distribution-of-a-random-element`, `def-measurable-function-between-measurable-spaces`, `def-independent-random-elements`, and `def-recursive-structural-causal-model-and-dag`. The last defines finite topological recursion and Markovianity by mutual independence of exogenous variables; it does not assert an observed-only factorization when latent variables are present.
- Also read the exact product-law, Tonelli, product-measure uniqueness, density-measure, measurable-closure, and Lebesgue-translation interfaces used by the local density proof. The chosen finite-product and translation arguments are choice-free; no Axiom of Choice dependency is introduced.
- Density and conditional-density versions are supplied locally from the triangular equations and positive noise densities. The graph-comparison proof derives the required density conditional-independence implication locally from the ANM product density and ancestral moral separation; it imports no global-Markov theorem or Axiom of Choice. No faithfulness, Markov-equivalence, or latent-variable identification result is imported.

## Sources and retrieval

1. Peters, Mooij, Janzing, and Schölkopf, “Causal Discovery with Continuous Additive Noise Models,” *JMLR* 15 (2014), full 45-page paper: <https://jmlr.org/papers/volume15/peters14a/peters14a.pdf>. Read §1.1’s Markov-property definition, §3, Definition 16, Proposition 17, Definitions 18/27, Condition 19, Theorems 20/28/34, Example 24, and the complete relevant arguments in Appendices A.5, A.10–A.12, and A.15 (printed pp. 2010–2029 and 2040–2049). This is the complete proof source for the local bivariate derivation, nondescendant-noise fact, conditional-minimality argument, restricted identifiability, and population RESIT proof. Section 1.1 states the Markov property; the new ANM density-to-d-separation item proves its needed density factorization locally. Its finite-sample section is not used as a guarantee.
2. Peters, Janzing, and Schölkopf, *Elements of Causal Inference*, complete author-hosted book: <https://web.math.ku.dk/~peters/jonas_files/ElementsOfCausalInference.pdf>. Retrieved as the full 20.96 MB PDF and extracted for inspection. Read §4.1.4, Definition 4.4, Theorem 4.5 and its full displayed proof sketch (printed pp. 49–51), plus the ANM/RESIT overview in §7.2. The book independently states the smooth-model and derivative-exception framing, but Theorem 4.5 explicitly gives only a proof sketch and refers to Hoyer et al.; it is corroborating context, not a substitute for the complete JMLR argument.
3. Assaad, Devijver, and Gaussier, “Causal discovery: noise-based methods,” full 42-slide 2023 course-note PDF: <https://ckassaad.github.io/courses/courses_materials/ENSLyon_Causality/2023/CausalDiscoveryNoiseBased.pdf>. Read the nonlinear ANM condition and latent-confounding caveat (slides 22–23), causal-sufficiency/minimality assumptions and ANM algorithm (slides 29–31), and multivariate walkthrough (slides 32–35). This is an independently authored overview; it omits the complete proof and smoothness details, so the carriers rely on the JMLR proof. The source-coverage record will give each harvested result its exact disposition.

The author-hosted book PDF was not extractable through the browser viewer, but the full PDF was successfully retrieved directly and inspected with `mutool`; no mathematical source remains unavailable. `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-27.coverage.json --stamp` succeeded: 3/3 sources full-text verified, zero drops, and one successful fetch per URL. Stamps: JMLR (867,551 bytes, 45 pages, SHA prefix `333f16ef62b40d5b`, 2026-10-18T18:53:36.730Z); *Elements of Causal Inference* (21,983,056 bytes, 289 pages, SHA prefix `f6c64e1e8c7d4966`, 2026-10-18T18:54:33.352Z); Assaad et al. notes (976,166 bytes, 74 PDF pages, SHA prefix `21ef6ca11bd488cb`, 2026-10-18T18:54:34.678Z). The browser extraction error recovered by full direct retrieval; no failed fetch or unresolved `source_resolution` entry remains.

## Proof route and current obligations

- The joint-density lemma proves the triangular product-density formula using the finite product law, Tonelli, and coordinate translations; it does not assume a Jacobian formula for merely measurable structural functions.
- The nondescendant-noise lemma substitutes the finite recursive equations and factors the exogenous noise vector. The parent-dependence lemma proves the edgewise shift-identifiability fact and the positive-density intersection argument before RESIT pruning uses it.
- The bivariate theorem derives a positive $C^3$ reverse-noise density version from the forward joint density and independence, then derives `d/dx (pi_xx/pi_xy)=0` and expands it to the exact Condition 19 equation. The argument handles the nonzero domain and separately excludes the independent case.
- The population proof obtains graph identifiability from the local conditioned-reversed-edge lemma. Its RESIT proof treats true and false sinks separately, uses the exact restricted intermediate conditioning set, removes sinks with deterministic tie-breaking, and prunes only superfluous parents. The C3 regression-rule interface makes the reverse slice used in the false-sink contradiction valid at the specified density witness.
- No diagram is needed in these analytic proofs. The latent-confounding B example will carry a fully explained TikZ DAG comparison; no proof relies on it.

### Completed item checkpoint — `def-additive-noise-model`

- **Claim/conventions:** finite nonempty causally sufficient DAG, real recursive equations, continuous Borel structural functions, mutually independent exogenous noises with strictly positive Lebesgue densities, and coordinatewise causal minimality. Nondescendants exclude the node itself; every vertex is observed.
- **Sources/locators:** JMLR 2014 Definition 16 and Proposition 17, §§3–3.1, printed pp. 2014–2022; *Elements of Causal Inference* Definition 4.4, §4.1.4, printed pp. 49–51; Assaad et al. slides 22–23 and 29–31. The book/lecture notes provide independent context; the JMLR article supplies the detailed proof route.
- **Direct dependencies:** `def-recursive-structural-causal-model-and-dag`, `def-d-separation-in-a-dag`, `def-law-or-distribution-of-a-random-element`, `def-measurable-function-between-measurable-spaces`, `def-independent-random-elements`. All actual supplier bodies were inspected; all are published.
- **Placement/level:** A page `ml02-causal-anm`, level 0; manifest and A-page inventory agree.
- **Validation:** precheck not applicable (no phase proof); strict proof-contract check passes for all 16 items; citation-fidelity records 81 exact supplier quotes with no missing quotes or widening candidates; final proof-layout passed all 16 assigned items and 61 numbered steps with zero defects.
- **Unresolved obligations/next action:** owner clarification is required for the plan’s multivariate causal-minimality wording; the exact counterexample, source-standard edgewise hypothesis, and dependent claims are recorded in the reconciliation section. No local proof or placement work remains.

### Completed item checkpoint — `lem-anm-joint-density`

- **Claim/conventions:** for topological order $v_1,\dots,v_p$, the law has density $\prod_r q_{v_r}(x_{v_r}-f_{v_r}(x_{\operatorname{pa}(v_r)}))$ relative to finite product Lebesgue measure, positive everywhere. The proof factors the noise law, then applies fixed-coordinate translations successively; no differentiability/Jacobian premise is used.
- **Sources/locators:** Peters et al., JMLR (2014), equation (6) and §3; Tao, *An Introduction to Measure Theory*, Theorem 1.7.18 (Tonelli). Exact local product-law, product-measure, Tonelli, density-measure, measurability, and translation suppliers are cited in [lem-anm-joint-density.md](/home/lazyinspirit/Projects/prestige-math-library/items/lem-anm-joint-density.md).
- **Direct dependencies:** `def-additive-noise-model`, `def-measure-with-density`, `thm-independent-random-elements-have-product-joint-law`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, and `thm-composition-with-borel-functions-preserves-measurability`.
- **Placement/level:** A page, level 1; manifest level is one above its in-run supplier `def-additive-noise-model`.
- **Validation:** precheck pass; strict proof-contract check passes for all 16 items; citation-fidelity records 81 exact supplier quotes with no missing quotes or widening candidates; final proof-layout passed all 16 assigned items and 61 numbered steps with zero defects.
- **Unresolved obligations/next action:** no item-specific mathematical, source, dependency, or placement blocker. The batch-level minimality wording escalation is recorded above and does not alter this item’s stated claim.

### Completed item checkpoint — `lem-anm-noise-independent-of-nondescendants`

- **Claim/conventions:** for any vertex `j`, `N_j` is independent of the vector of any finite set of nondescendants. The proof expresses each such endogenous variable as a Borel function of the finite noise set in its ancestor closure and uses disjointness from `j`.
- **Sources/locators:** Peters et al., JMLR (2014), Appendix A.10, Lemma 37, printed p. 2044; Durrett, *Probability: Theory and Examples*, Theorem 2.1.10. The local proof states the finite recursive substitution and measurable-map steps explicitly.
- **Direct dependencies:** `def-additive-noise-model`, `thm-independent-random-elements-have-product-joint-law`, and `lem-measurable-functions-preserve-independence`; exact published statements/proofs were inspected.
- **Placement/level:** A page, level 1; manifest level is one above `def-additive-noise-model`.
- **Validation:** precheck pass; strict proof-contract check passes for all 16 items; citation-fidelity records 81 exact supplier quotes with no missing quotes or widening candidates; final proof-layout passed all 16 assigned items and 61 numbered steps with zero defects.
- **Unresolved obligations/next action:** no item-specific mathematical, source, dependency, or placement blocker. The batch-level minimality wording escalation is recorded above and does not alter this item’s stated claim.

### Completed item checkpoint — `alg-resit`

- **Claim/conventions:** definition of the population RESIT procedure: sink search, reverse the sink list into a topological order, prune candidate parents by residual independence, deterministic tie/loop order, and an explicit `failure` output when no sink candidate is found. The regression rule is a fixed Borel population rule; consistency is defined by recovery of the structural regression function up to a constant on non-descendant predictor sets.
- **Sources/locators:** Peters et al., JMLR (2014), Algorithm 1, printed p. 2028; Assaad et al., 2023 course notes, Algorithm 2, slide 31; Elements of Causal Inference, §7.2.3. The notes/book are overviews; the JMLR Appendix A.15 proof remains the proof source.
- **Direct dependencies:** `def-additive-noise-model`, `def-recursive-structural-causal-model-and-dag`; both bodies were inspected.
- **Placement/level:** A page, level 1; manifest level is one above `def-additive-noise-model`.
- **Validation:** precheck not applicable (no phase proof); strict proof-contract check passes for all 16 items; citation-fidelity records 81 exact supplier quotes with no missing quotes or widening candidates; final proof-layout passed all 16 assigned items and 61 numbered steps with zero defects.
- **Unresolved obligations/next action:** no item-specific mathematical, source, dependency, or placement blocker. The batch-level minimality wording escalation is recorded above and does not alter this item’s stated claim.

### Completed item checkpoint — `ex-latent-confounding-mimics-anm-direction`

- **Claim/conventions:** a latent common-cause SCM on $(U,X,Y)$ and an observed two-node linear ANM have the same explicitly computed $(X,Y)$ density, but distinct $do(X=1)$ densities. The diagram labels $U$ as latent and is explanatory only; the verification is by density and intervention calculations.
- **Axiom branch:** the example assumes AC for the library's standard normal laws and density normalization; its manifest dependencies include `def-axiom-of-choice` and `def-countable-choice`. The ANM and identifiability theorems remain choice-free.
- **Sources/locators:** JMLR 2014 latent-variable discussion; Assaad et al., 2023 course notes slide 23; *Elements of Causal Inference* §7.2.3. The numerical construction and both calculations are local.
- **Direct dependencies:** `def-additive-noise-model`, `def-recursive-structural-causal-model-and-dag`, `lem-anm-joint-density`, standard-normal/density/AC suppliers, Gaussian integral, Tonelli, and linear Lebesgue change of variables.
- **Placement/level:** B page `ml02-causal-anm-examples`, level 2; manifest includes the density lemma as its sole in-run supplier.
- **Validation:** precheck pass; strict proof-contract check passes for all 16 items; citation-fidelity records 81 exact supplier quotes with no missing quotes or widening candidates; final proof-layout passed all 16 assigned items and 61 numbered steps with zero defects.
- **Unresolved obligations/next action:** no item-specific mathematical, source, dependency, or placement blocker. The batch-level minimality wording escalation is recorded above and does not alter this item’s stated claim.

### Completed item checkpoint — `def-restricted-additive-noise-model`

- **Claim/conventions:** Condition 19 is the source's exact differential equation with the required nonzero denominator domain, stated as failure at one domain point. The multivariate restriction quantifies over every parent edge and every intermediate set; conditional input laws use the explicit finite density ratio at a witness with $0<p_S(s)<\infty$. As in the source's Definition 27, all structural functions and noise densities in this restricted class are globally $C^3$, with positive noise densities.
- **Sources/locators:** JMLR 2014 Definitions 18/27 and Condition 19, printed pp. 2021–2025; *Elements of Causal Inference* §4.1.4, Theorem 4.5, printed pp. 49–51; Assaad et al. slides 22–23. The two latter sources are explicitly recorded as overview/sketch treatments in the coverage ledger.
- **Direct dependencies:** `def-additive-noise-model` and `lem-anm-joint-density`; both current bodies are present and the density lemma proves the required positive joint-density version.
- **Placement/level:** A page, level 2; manifest level is one above the density lemma.
- **Validation:** precheck not applicable (no phase proof); strict proof-contract check passes for all 16 items; citation-fidelity records 81 exact supplier quotes with no missing quotes or widening candidates; final proof-layout passed all 16 assigned items and 61 numbered steps with zero defects.
- **Unresolved obligations/next action:** owner clarification is required for the plan’s multivariate causal-minimality wording; the exact counterexample, source-standard edgewise hypothesis, and dependent claims are recorded in the reconciliation section. No local proof or placement work remains.

### Completed item checkpoint — `lem-anm-parent-dependence-persists-under-conditioning`

- **Claim/conventions:** under the local positive-density conditional-factorization convention, every edge remains conditionally dependent for each conditioning set between the other parents and the nondescendants. The proof first derives the base dependence from a nonconstant noise-density shift, then proves the positive-density intersection step explicitly.
- **Sources/locators:** JMLR 2014, Appendix A.10, Proposition 17 and Lemma 38, printed p. 2044; *Elements of Causal Inference*, §4.1.4. The source's named result is expanded into the exact density equalities used here.
- **Direct dependencies:** `def-additive-noise-model`, `lem-anm-joint-density`, `lem-anm-noise-independent-of-nondescendants`; all actual bodies were inspected.
- **Placement/level:** A page, level 2; manifest level is one above its level-1 density and noise suppliers.
- **Validation:** precheck pass; strict proof-contract check passes for all 16 items; citation-fidelity records 81 exact supplier quotes with no missing quotes or widening candidates; final proof-layout passed all 16 assigned items and 61 numbered steps with zero defects.
- **Unresolved obligations/next action:** owner clarification is required for the plan’s multivariate causal-minimality wording; the exact counterexample, source-standard edgewise hypothesis, and dependent claims are recorded in the reconciliation section. No local proof or placement work remains.

### Completed item checkpoint — `lem-probability-measure-has-no-nonzero-period`

- **Claim/conventions:** a probability measure invariant under a nonzero real translation would assign equal mass to a countable partition of the line by translated intervals; finite additivity and total mass one rule this out. This is stronger than the positive-density shift fact used in the parent-dependence proof.
- **Sources/locators:** Peters et al., JMLR (2014), Appendix A.5, where the no-period argument is used in the density setting; the item proves the general probability-measure statement directly.
- **Direct dependencies:** `def-probability-measure`, `def-translation-of-a-set-in-rn`, `def-complete-ordered-real-field`, and `thm-of-archimedean`; all supplier statements were inspected.
- **Placement/level:** A page, level 0; no in-run suppliers.
- **Validation:** precheck pass; strict proof-contract check passes for all 16 items; citation-fidelity records 81 exact supplier quotes with no missing quotes or widening candidates; final proof-layout passed all 16 assigned items and 61 numbered steps with zero defects.
- **Unresolved obligations/next action:** no item-specific mathematical, source, dependency, or placement blocker. The batch-level minimality wording escalation is recorded above and does not alter this item’s stated claim.

### Completed item checkpoint — `lem-smooth-residual-independence-has-pointwise-density-factorization`

- **Claim/conventions:** for a positive C3 joint density and a C3 regression function, an independent residual yields positive C3 density versions whose shear factorization holds at every predictor value, not only almost everywhere. The proof uses sectionwise translations, product law, Tonelli and continuity.
- **Sources/locators:** Peters et al., JMLR (2014), Appendix A.15, which uses the reverse residual equation but does not state this pointwise density upgrade; the complete shear-density proof is local.
- **Direct dependencies:** `def-independent-random-elements`, `thm-independent-random-elements-have-product-joint-law`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, and `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`; supplier bodies/proofs were inspected.
- **Placement/level:** A page, level 0; no in-run suppliers.
- **Validation:** precheck pass; strict proof-contract check passes for all 16 items; citation-fidelity records 81 exact supplier quotes with no missing quotes or widening candidates; final proof-layout passed all 16 assigned items and 61 numbered steps with zero defects.
- **Unresolved obligations/next action:** no item-specific mathematical, source, dependency, or placement blocker. The batch-level minimality wording escalation is recorded above and does not alter this item’s stated claim.

### Completed item checkpoint — `lem-youngest-child-descendants-conditionally-independent`

- **Claim/conventions:** for a child with no path to another child of the target, the target is density-conditionally independent of the child's strict descendants given all other current vertices and the child. The product-density proof provides a fixed-section factorization for every finite positive conditioning value.
- **Sources/locators:** Peters et al., JMLR (2014), Appendix A.15, Theorem 34 proof, printed p. 2049; Assaad et al. slides 29–31 for the sink-search outline. The source outlines the graphical choice; the density factorization and exact conditioning section are proved locally.
- **Direct dependencies:** `def-additive-noise-model`, `def-d-separation-in-a-dag`, `lem-anm-joint-density`, and `thm-tonelli-theorem-for-sigma-finite-product-spaces`.
- **Placement/level:** A page, level 2; one above `lem-anm-joint-density`.
- **Validation:** precheck pass; strict proof-contract check passes for all 16 items; citation-fidelity records 81 exact supplier quotes with no missing quotes or widening candidates; final proof-layout passed all 16 assigned items and 61 numbered steps with zero defects.
- **Unresolved obligations/next action:** no item-specific mathematical, source, dependency, or placement blocker. The batch-level minimality wording escalation is recorded above and does not alter this item’s stated claim.

### Completed item checkpoint — `lem-positive-minimal-dags-have-a-conditioned-reversal`

- **Claim/conventions:** two distinct positive-density causally minimal ANM DAGs sharing one law have a reversed edge and a conditioning set containing all other parents and lying among nondescendants in both graphs. The proof includes the finite sink reduction, all adjacency-partition cases, the augmented-graph separator argument, and the path-to-route-to-path step.
- **Sources/locators:** Peters et al., JMLR (2014), Proposition 29(i), Appendix A.12, printed pp. 2045–2047; Appendix A.10, Lemma 38 for the dependence contradiction. The full A.12 argument was inspected and expanded locally. Its global-Markov premise is replaced by the new local density-factorization lemma, so this carrier has no AC dependency.
- **Direct dependencies:** `def-additive-noise-model`, `def-d-separation-in-a-dag`, `lem-anm-joint-density`, `lem-anm-noise-independent-of-nondescendants`, `lem-anm-parent-dependence-persists-under-conditioning`, `lem-active-routes-in-a-finite-dag-have-active-paths`, `lem-anm-density-factorization-implies-dsep-conditional-independence`, and Lebesgue translation invariance.
- **Axiom branch:** the graph and density arguments are choice-free; the imported global-Markov theorem and its AC/kernel proof are no longer used.
- **Placement/level:** A page, level 3; one above the level-2 parent-dependence lemma.
- **Validation:** precheck pass; strict proof-contract check passes for all 16 items; citation-fidelity records 81 exact supplier quotes with no missing quotes or widening candidates; final proof-layout passed all 16 assigned items and 61 numbered steps with zero defects.
- **Unresolved obligations/next action:** owner clarification is required for the plan’s multivariate causal-minimality wording; the exact counterexample, source-standard edgewise hypothesis, and dependent claims are recorded in the reconciliation section. No local proof or placement work remains.

### Completed item checkpoint — `thm-bivariate-additive-noise-identifiability`

- **Claim/conventions:** a nonconstant C3 forward function, positive C3 input/noise densities, and Condition 19 exclude any reverse representation with an independent residual and C3 reverse function. The proof derives a positive C3 density version for the reverse residual from the forward joint density before differentiating log densities, so no residual smoothness is silently assumed.
- **Sources/locators:** Peters et al., JMLR (2014), Theorem 20 and complete Appendix A.5 proof, printed pp. 2022 and 2040–2041; the book's Theorem 4.5 is recorded as a proof sketch, and the lecture slides as overview.
- **Direct dependencies:** `def-additive-noise-model`, `lem-anm-joint-density`, `def-restricted-additive-noise-model`, `lem-probability-measure-has-no-nonzero-period`, Tonelli, and translation invariance.
- **Placement/level:** A page, level 3; its highest in-run supplier is `def-restricted-additive-noise-model` at level 2.
- **Validation:** precheck pass; strict proof-contract check passes for all 16 items; citation-fidelity records 81 exact supplier quotes with no missing quotes or widening candidates; final proof-layout passed all 16 assigned items and 61 numbered steps with zero defects.
- **Unresolved obligations/next action:** no item-specific mathematical, source, dependency, or placement blocker. The batch-level minimality wording escalation is recorded above and does not alter this item’s stated claim.

### Completed item checkpoint — `ex-linear-gaussian-reversible-additive-noise-model`

- **Claim/conventions:** independent standard normals with $Y=X+N$ also satisfy $X=Y/2+M$, with an explicit joint-density factorization for $(Y,M)$. The exact unit-variance case fails Condition 19 on its whole nonzero domain.
- **Sources/locators:** Peters et al., JMLR (2014), Example 24, printed p. 2023; *Elements of Causal Inference* §4.1.4; Assaad et al. slides 22–23. The local proof uses an explicit determinant-one density transform.
- **Axiom branch:** AC is assumed for the library normal-law/normalization interfaces; AC implies the Countable Choice interface used by the suppliers and linear change-of-variables theorem.
- **Direct dependencies:** the bivariate ANM and restricted-model definitions, joint-density lemma, AC/Countable Choice, standard-normal definition and density normalization, and linear Lebesgue change of variables.
- **Placement/level:** B page, level 3; highest in-run supplier is `def-restricted-additive-noise-model` at level 2.
- **Validation:** precheck pass; strict proof-contract check passes for all 16 items; citation-fidelity records 81 exact supplier quotes with no missing quotes or widening candidates; final proof-layout passed all 16 assigned items and 61 numbered steps with zero defects.
- **Unresolved obligations/next action:** no item-specific mathematical, source, dependency, or placement blocker. The batch-level minimality wording escalation is recorded above and does not alter this item’s stated claim.

### Completed item checkpoint — `ex-identifiable-nonlinear-additive-noise-model`

- **Claim/conventions:** for $X,N\sim N(0,1)$ and $Y=X^3+N$, the Condition 19 domain contains $(1,0)$ and the equation's two sides are $0$ and $28$, so the bivariate theorem rules out a reverse ANM with an independent residual and C3 reverse function.
- **Sources/locators:** Peters et al., JMLR (2014), Condition 19 and Theorem 20, printed pp. 2022–2023; the book's Theorem 4.5 is a proof sketch; course notes slides 22–23 are overview.
- **Axiom branch:** AC for standard-normal law and normalization suppliers; no additional choice is used in the derivative calculation.
- **Direct dependencies:** ANM and restricted-model definitions, bivariate theorem, joint-density lemma, AC/Countable Choice, standard-normal law and normalization.
- **Placement/level:** B page, level 4; highest in-run supplier is the level-3 bivariate theorem.
- **Validation:** precheck pass; strict proof-contract check passes for all 16 items; citation-fidelity records 81 exact supplier quotes with no missing quotes or widening candidates; final proof-layout passed all 16 assigned items and 61 numbered steps with zero defects.
- **Unresolved obligations/next action:** no item-specific mathematical, source, dependency, or placement blocker. The batch-level minimality wording escalation is recorded above and does not alter this item’s stated claim.

### Completed item checkpoint — `thm-restricted-anm-population-identification`

- **Claim/conventions:** graph identifiability follows from the conditioned-reversal lemma plus the bivariate Condition 19 theorem. Population RESIT is proved with a perfect oracle and population-consistent regression rule; each Phase 1 rule is explicitly C3 on the full predictor space, which is the smoothness needed when its false-sink reverse slice is tested by Condition 19. No finite-sample claim is made.
- **Sources/locators:** Peters et al., JMLR (2014), Theorems 28/34 and complete Appendices A.11/A.15, printed pp. 2024–2029 and 2044–2049; *Elements of Causal Inference* §4.1.4/§7.2; Assaad et al. slides 29–35. The local arguments expand the source's graph-comparison and false-sink sketches.
- **Axiom branch:** no choice axiom is used by graph comparison, regression, or analytic steps. The standard-normal B examples retain their separate AC and Countable Choice dependencies.
- **Direct dependencies:** the ANM/restricted definitions, joint-density and nondescendant-noise lemmas, conditioned-parent dependence, youngest-child density CI, conditioned graph reversal, nonperiodicity, smooth residual factorization, RESIT definition, and bivariate identifiability.
- **Placement/level:** A page, level 4; highest in-run suppliers are the level-3 graph lemma and bivariate theorem.
- **Validation:** precheck pass; strict proof-contract check passes for all 16 items; citation-fidelity records 81 exact supplier quotes with no missing quotes or widening candidates; final proof-layout passed all 16 assigned items and 61 numbered steps with zero defects.
- **Unresolved obligations/next action:** owner clarification is required for the plan’s multivariate causal-minimality wording; the exact counterexample, source-standard edgewise hypothesis, and dependent claims are recorded in the reconciliation section. No local proof or placement work remains.

### Completed item checkpoint — `lem-anm-density-factorization-implies-dsep-conditional-independence`

- **Claim/conventions:** for a finite ANM with positive product density, d-separation implies the explicit marginal-density conditional-independence identity almost everywhere. The proof integrates nonancestors by reverse-topological sink elimination, regroups factors over components of the ancestral moral graph with $C$ deleted, then integrates hidden coordinates by Tonelli.
- **Sources/locators:** Peters et al., JMLR (2014), §1.1 Markov-property definition and Appendix A.12. The carrier proves the needed density implication locally; it does not import the paper’s global-Markov theorem.
- **Direct dependencies:** ANM and d-separation definitions, ancestral moral graph definition and published separation lemma, positive ANM joint-density lemma, Tonelli, and translation invariance. The exact supplier bodies were inspected.
- **Placement/level:** A page, level 2; highest in-run supplier is `lem-anm-joint-density` at level 1.
- **Unresolved obligations/next action:** no item-specific mathematical, source, dependency, or placement blocker. The batch-level minimality wording escalation is recorded above and does not alter this item’s stated claim.

## Scoped validation and readiness

- Batch 27 contains 16 items: 13 A-page items and 3 B-page examples. The scoped dependency-level calculation passes with no cycles or mismatched labels and maximum item level 4; the cross-batch dependency input is empty, and the batch itself has no prerequisite batches.
- Scoped precheck examined 16 carriers: 13 proof-bearing items passed and 3 definitions/algorithm were not applicable. Proof-contract strict passed 16/16 items with 81 citations and 61 derivations, zero errors, and zero shotgun warnings. Citation-fidelity found 81 exact supplier quotes with no missing quotes or widening candidates.
- The citation-faithfulness screen flagged two notation candidates in the B examples and both were inspected: the Gaussian-integral fact writes its full-line domain as $\mathbb R$, and the standard-normal fact uses $\phi$, defined in that item’s Given line, for the density formula in its supplier. Neither changes the cited hypothesis or claim.
- Source-fetch-check with --stamp verified all 3 recorded full-text sources (0 new stamps, 0 drops); coverage-checklist required-destination passed 25 harvested results with zero errors/warnings. Content-policy passed 16 items; focused depcheck passed all 16 with no errors or warnings; rendercheck passed all 18 item/page files. Proof-layout passed all 16 assigned items and 61 numbered steps with zero defects.
- The complete-item link scan found no hyperlinks inside any assigned Statement/Definition/Example section. Both A/B page files parse as YAML frontmatter with empty bodies and no summary or page_layout flag; the engine sets the compact-layout flag after initial authoring.
- Step 1 has 16 records: 11 hash-closed ready and 5 owner-held escalations. The escalations remain open and were not overwritten after a later fact/citation clarification in the graph lemma; that clarification does not change the unresolved plan-scope question. The five escalations are def-additive-noise-model, def-restricted-additive-noise-model, lem-anm-parent-dependence-persists-under-conditioning, lem-positive-minimal-dags-have-a-conditioned-reversal, and thm-restricted-anm-population-identification. They require the owner to confirm the multivariate causal-minimality scope before Step 1 can close; the local carriers and contracts are complete.
- The run-wide dependency-level check remains open on other scaffolds: 139 empty scaffold inventories and one unrelated existing label mismatch (lem-finite-metric-plan-lifts-to-a-borel-coupling, recorded level 0 versus computed 1). Batch 27 has no such errors. The run-wide Step 1 check remains open on these five escalations and other existing work outside this pair. Current HEAD is 50139bdcb6; no shared plan, engine state, published content, or other-pair item was edited.

These authoring records do not constitute independent approval.
