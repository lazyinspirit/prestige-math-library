# Batch 11 authoring notes

Run: inverse-problems-knot-theory-all-109-2026-10-19
Role: beta
Pair: adaptive-spectral-regularization-and-solit
Scheduling input SHA-256: 57368cbd85bcfcd4564bddc4e45ab9f8d5136483322a1b64bc8956bf5072ce08

## Scope and plan reconciliation

The controlling authoring direction was read before authoring and overrides stale task/design text. The complete IP-11 design section was compared with plan-spec.json. The design controls the three planned A claims and the three examples. plan-spec has an empty item array at this stage, so it supplies no conflicting item inventory. No substantive plan conflict remains to record.

The assigned item inventory is complete. The A page has four items: the planned filter/source/grid definition, a local risk lemma required to establish the selector estimator interface, the selector algorithm, and the oracle/rate theorem. The B page has the three planned examples. The local lemma is placed before the algorithm that consumes it. The A page is below the 100-item cap. Both page files are YAML frontmatter only, with empty bodies and no summaries. Page summaries and compact-layout flags are left to the native workflow.

## Dependency audit and author order

Every declared page prerequisite is present. Actual supplier bodies, rather than planned interfaces alone, were inspected.

- Batch 3 page deterministic-source-conditions-and-optimal-recovery: draft item def-ip-index-source-ball states X_{psi,rho}(T), with psi(t)=phi(t^2), matching phi(T*T) on singular coordinates.
- Batch 7 page statistical-inverse-experiments-and-white-noise: draft item def-ip-isonormal-white-noise-experiment supplies the weak centered Gaussian process, covariance and finite orthonormal-tuple independence; draft item thm-ip-white-noise-spectral-sequence-representation supplies the fixed-basis coordinate law and makes no Hilbert-valued sample claim.
- Batch 8 page gaussian-sequence-models-and-risk-decomposition: draft item def-ip-gaussian-sequence-inverse-model supplies the minimum-norm positive-SVD sequence convention and positive-noise coordinate law.
- The published spectral-regularization-and-parameter-choice page and its def-compact-spectral-filter-and-qualification item supply the compact spectral multiplier and residual qualification convention.
- Published suppliers for compact SVD, Countable Choice, Fourier completeness, the Hilbert-space and L2 conventions, and the one-dimensional torus were also inspected.

These upstream carriers remain draft where marked. Their interfaces were checked for authoring only; this is not acceptance or publication.

The computed in-run levels are: def-ip-ordered-filter-grid-and-source-index 3; lem-ip-solit-filter-risk-decomposition-and-monotone-bias 4; alg-ip-solit-parameter-choice 5; thm-ip-solit-oracle-risk-and-rate 6; all three examples 6. The definition depends on the Batch 3 level-2 source-ball supplier. The lemma depends on the level-3 filter interface and Batch 7/8 white-noise and sequence interfaces. The algorithm depends on the proved local lemma. The theorem and examples depend on the completed selector interface. No cycle occurs in the assigned closure.

## Item claims, sources, decisions and remaining obligations

### def-ip-ordered-filter-grid-and-source-index — level 3 — ready

States the countable-choice source class, index-function convexity condition, ordered-filter inequalities and qualification residual bound. It now explicitly defines the trace-variance function, the geometric-variance ratio condition, v_m, u_m and the finite stopping index m_max. This closes a prerequisite gap found during audit: earlier wording used “geometric-variance candidate sequence” and v_m without defining either. Dependencies: def-ip-index-source-ball; def-compact-spectral-filter-and-qualification; thm-singular-value-decomposition-for-compact-operators; def-countable-choice.

Sources: Li and Werner, complete paper, Definition 1, Assumptions 1–3 and §§3.1.1–3.2.1; Clason, complete 119-page lecture notes, Chapter 5 §§5.1–5.2. Clason supports deterministic compact-filter and source-condition conventions, not the later statistical theorem.

### lem-ip-solit-filter-risk-decomposition-and-monotone-bias — level 4 — ready

Defines the finite filtered singular sums locally and proves their L2 convergence and measurable X-valued limit, exact bias–variance identity, decreasing bias, difference-of-means bound and pairwise variance domination. Proof phases: 1.1 existence; 2.1 monotone bias; 2.2 fixed-candidate risk; 3.1 pairwise variance. Countable Choice supplies only the fixed compact singular-system coordinates; the series and risk algebra make no further choice. Dependencies: def-ip-ordered-filter-grid-and-source-index; def-ip-gaussian-sequence-inverse-model; thm-singular-value-decomposition-for-compact-operators; def-ip-isonormal-white-noise-experiment; thm-ip-white-noise-spectral-sequence-representation; def-countable-choice.

Sources: Li and Werner, Lemma 3.6 and §§3.1.1–3.2.1; Clason, complete lecture notes, Chapter 5 §5.1. The local proof supplies the full statistical series and expectation argument.

### alg-ip-solit-parameter-choice — level 5 — ready

Defines the weak isonormal experiment, filtered coordinate estimators, pairwise variance and upper quantile, all-finer-index acceptance rule, finite endpoint and smallest accepted index. The risk lemma is an explicit prerequisite, removing the former circular relation in which the lemma cited the selector whose estimator it justified. Dependencies: the local risk lemma and ordered-filter definition; the Batch 7/8 Gaussian experiment, spectral-coordinate and Gaussian-sequence items; Countable Choice.

Sources: Li and Werner, §§3.2.1–3.2.2; Spokoiny and Willrich, complete 58-page 2015 preprint, §§2.1–2.4, as independent context for smallest-accepted ordered selection. The 2015 calibration is not used to prove the SOLIT oracle inequality.

### thm-ip-solit-oracle-risk-and-rate — level 6 — escalated

Preserves the complete cited oracle inequality and both rate regimes with the source, qualification, smooth-surrogate, spectrum, grid and variance-lower-bound hypotheses. It preserves the exact severe exponent restriction 0 < vartheta <= 1/2, the warning that the polynomial-smoothness severe rate is not established as adaptively minimax, and the spectral-cutoff candidate-grid warning for vartheta > 1.

The proof is not supplied. Li–Werner’s Theorem 3.4 proof checks decreasing bias and a geometric-ratio sum, then invokes Theorem B.1 and Proposition B.2 in the separate 2019 Spokoiny–Willrich supplement for the Gaussian maximal-risk/selector step. The complete 2015 preprint’s Theorem 2.3 and Appendix A are related but use a different multiplicity calibration, so they do not prove this exact threshold inequality. The theorem keeps its full claim and is escalated; no QED or substitute excerpt was invented.

The Project Euclid supplement retrieval was blocked. The DOI 10.1214/18-AOS1717SUPP resolved to a Project Euclid PDF endpoint, but browser requests were inaccessible/internal-error and the direct GET returned Incapsula HTML rather than full text. Searches were made for the theorem labels, article title, supplement DOI and alternate indexed copies. The five current recovery records and per-item unresolved argument/dependencies are in batch-11.coverage.json under source_resolution_history. Earlier retrieval failure is recorded in the authoring handoff; its per-attempt timestamps were not preserved. No further retrieval attempts are pending. The unresolved source and claim are owner-escalated, not dropped.

### ex-ip-solit-antiderivative — level 6 — ready

Proves the normalized Dirichlet sine basis is complete, the Green-kernel formula solves the weak boundary problem, the operator is compact Hilbert–Schmidt with eigenvalues (pi j)^-4, the exact truth coefficients/data image, Tikhonov ordered-filter bounds and a continuous exact-ratio variance grid. The source-reported example makes no rate or simulation claim. Dependencies: local definition, lemma and algorithm; Batch 8 sequence model; Countable Choice; published Hilbert-space, L2 quotient, torus and trigonometric-completeness items.

Sources: Li and Werner, §5.3.1; Clason, complete lecture notes, Chapter 5 for the deterministic spectral-regularization context. All Green-kernel, Fourier-coefficient and candidate-grid calculations are proved locally.

### ex-ip-solit-satellite-gradiometry — level 6 — ready

Proves zero mean, multiplier summability/compactness, the double spectrum n^2(n+1)^2 R^-2n-4, the Tikhonov ordered-filter inequalities and a continuous exact-ratio variance grid. It makes no estimator-rate claim. Dependencies: local definition, lemma and algorithm; Batch 8 sequence model; Countable Choice; published trigonometric completeness.

Sources: Li and Werner, §5.3.2; Clason, Chapter 5 for filter context. The local proof supplies the mean-zero, operator and grid calculations.

### ex-ip-solit-periodic-heat-equation — level 6 — ready

Proves the periodic heat multipliers, injective compact Hilbert–Schmidt property, divergence of spectral-cutoff consecutive variance ratios, Tikhonov ordered-filter bounds and a continuous exact-ratio Tikhonov grid. The 10^4-run simulation at time 0.1 is attributed to Li and Werner and clearly identified as their reported result, not a local experiment. Dependencies: local definition, lemma and algorithm; Batch 8 sequence model; Countable Choice; published trigonometric completeness.

Sources: Li and Werner, §5.3.3 within §5.3 Numerical simulations; Clason, Chapter 5 for deterministic filter context. The statistical simulation is reported source evidence only.

## Source harvest and retrieval evidence

The coverage file records all three full-text sources, complete-document inspection, locators, supported items, and per-result dispositions. Li–Werner supports the exact theorem statements and cited applications but not the local missing Gaussian maximal-risk proof. Clason is a complete lecture-note treatment of deterministic spectral regularization and explicitly does not treat statistical SOLIT risk. Spokoiny–Willrich 2015 is read in full as related context and explicitly disposed as insufficient for the exact theorem proof. source-fetch-check stamped all three PDFs; the subsequent non-network check verified 3/3 fetch stamps.

## Validation record

- Batch manifest consistency: all seven statements, levels and dependency arrays match the authored items; A/B page inventories match their frontmatter, and both page bodies are empty.
- Focused content-policy: 7 items, 0 errors, 0 warnings.
- Focused depcheck: 7 selected items, 2 selected pages, 0 errors, 0 warnings; prerequisite closure 1,493 items and 194 pages, no cycles.
- Focused dependency-level recomputation: all seven labels match the computed levels 3, 4, 5, 6, 6, 6, 6; no assigned cycles.
- Proof-layout: 7 items, 19 proof steps, 0 defects.
- Rendercheck: 9 authored files, 0 errors and 0 warnings.
- Final `source-fetch-check --stamp`: 3/3 full-text sources fetch-verified, 0 newly stamped; the heat simulation locator is §5.3.3 within §5.3 Numerical simulations.
- Proof-contract check: all contracts outside the unresolved theorem pass. The theorem contract reports seven uncontracted fact links because no proof steps are supplied; this is the documented escalation, not a manufactured derivation.
- Precheck: all complete proof-bearing items pass. The theorem remains the sole failure because its phase body has no local proof strategy or Proof section; its exact unresolved obligation is recorded above.
- The repository-wide item-dependency-level command reports 138 errors in unassigned pages/items with empty inventories or stale labels. The focused closure and all Batch 11 level labels pass; no other batch was changed.
- Focused Step 1 snapshot check: all six ready records remain closed against current item and dependency hashes; the oracle/rate theorem remains escalated. All seven records have owner=false and list examined dependency IDs. The run-wide `step1-decisions check` remains open across 611 items (371 ready); no Batch 11 escalation was overwritten.

## Native run boundary

The live autopilot status was recomputed after authoring: the run remains at 1-scaffold with 47/109 batches covered, no work in flight, and the owner repair/recertification gate still open. The active scheduler still lists batch 11 among missing handoffs; its artifact completion is deferred until authoring coverage is complete and writers drain. The latest git commit inspected was 50139bdcb6. No engine state, shared plan, verdict or published content was changed. Step 1 records are authoring readiness only; they do not resolve the owner gate.
