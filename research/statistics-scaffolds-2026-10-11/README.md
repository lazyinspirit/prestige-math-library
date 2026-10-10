# Statistics prose-scaffold research commission

Owner commissioned 2026-10-11. Draft planning only; no item/page authoring, canonical plan edits, publishing, active-run transitions, or workflow-engine changes.

## Deliverables

- `research/plan-mathematical-statistics-track.md`: Mathematical Statistics and Inference Foundations.
- `research/plan-statistical-models-experiments-track.md`: Statistical Models and Experimental Methods.
- Six independent full-text source dossiers per category in this directory.

## Completed synthesis

Both seven-agent teams completed their assigned source research and prose synthesis.
The foundations scaffold contains **35 proposed A/B pairs**, and the models/experiments
scaffold contains **62 proposed A/B pairs**. These are 97 proposed pairs, not authored
pages or a single 80-pair frontier. The six dossiers per category distinguish complete
focused readings from partial, unused, unavailable and extracted-but-unread sources.
Source defects and local proof obligations remain explicit; no source inventory or
hash check certifies a theorem. Necessary new suppliers are placed before consumers,
with model-specific counting-process results in Category 2 and general inference
interfaces in Category 1. Models consume the exact planned foundation item contracts.

The saved Codex setting is `agents.max_concurrent_threads_per_session = 15`, following
the [official configuration reference](https://developers.openai.com/codex/config-reference/).
`CLAUDE.md` now permits up to fifteen outside repair agents; its repair-round and gate
rules are retained. All fourteen commissioned workers used `gpt-6-luna` at `max` effort;
all four separately supervised CLI readers completed successfully. The source binaries
and complete extractions remain in the ignored source caches listed in each dossier.

Four-category order is: (1) foundations, (2) models/experiments, (3) Bayesian/computational statistics, (4) machine learning/adaptive decision methods. Category 1 cannot depend on categories 2–4; category 2 cannot depend on categories 3–4. Numerical methods remain separate, independent suppliers; inspect transitive dependencies to exclude hidden backward edges. Category-2 provisional category-1 interface requirements must be reconciled before final completion.

## Research standard

Obtain lawful author/institution/publisher full texts or open lecture notes, extract complete text, read and record actual page/section/line ranges and relevant theorem/proof anchors. Full-text acquisition is not full reading. Do not claim complete reading when only relevant chapters were read: record exactly what was and was not read. Abstracts, previews, snippets and tables of contents do not count as full-text mathematical coverage. Read complete relevant chapters/lecture units with proofs, assumptions, counterexamples and surrounding definitions; use a second independent treatment for load-bearing results when obtainable. Record unavailable sources and proof gaps. Never invent reading, proofs, citations, confidence, or check results. Do not bypass access controls.

Source caches live in ignored `scratchpad/statistics-scaffolds-2026-10-11/sources/<role>/`; committed dossiers record URLs, author/title/edition, integrity hashes, extraction method, actual reading ranges, topic coverage, exact theorem statements/hypotheses, proof routes/gaps, and existing-library suppliers checked by reading their bodies. `fitz` (PyMuPDF) is available for PDF extraction. Do not store credentials or raw model transcripts.

## Scaffold standard

Concise but sufficiently detailed prose A/B-pair scaffold, dependency-ordered. Each pair: stable proposed A/B IDs, purpose/scope, essential definitions and algorithms, result statements and hypotheses, proof routes, examples/counterexamples, exact existing item/page suppliers and newly planned suppliers, source theorem/section anchors. Propose reusable A suppliers; B examples are not cross-page suppliers. Algorithms are definition-like, with proved properties in separate result items. Conjectural/empirical material is explicit and cannot serve as a proved supplier; no active unproved fallback is permitted. Model assumptions and physical applicability are distinct from mathematical guarantees. Reuse the richest adequate existing theorem clauses; do not duplicate or presume coverage from names/old prose plans.

Include a complete topic-to-pair/source coverage matrix, checked existing-library prerequisite map, all new minimal prerequisite pairs and their earlier placement, category dependency interfaces, source-reading summary and unresolved gaps. Record proposed inventories as proposals, not authored items or successful gates. Scaffold authors integrate all six dossiers and actual library inspection before final completion.

## Team and settings

Exactly six `gpt-6-luna` source readers at `max` effort and one `gpt-6-luna` scaffold author at `max` effort for each category (14 workers). Codex configuration increased from 10 to 15 concurrent subagent threads; automatic compaction stays 500000 total. The current collaboration tool exposes 10 worker slots, so four readers may run as separately supervised Codex CLI workers; all fourteen can operate concurrently. No nested agents. Each source reader owns only its dossier directory and source cache; each scaffold author owns only its canonical scaffold. Orchestrator owns this plan, dispatch metadata, integration checks and settings.

## Topic assignments

- **foundations-01**: Statistical experiments, models and identifiability; estimators and randomization; losses, risks and decision theory; domination, likelihoods, sufficiency, completeness, exponential families, and exact inference.

- **foundations-02**: Point estimation and finite-sample optimality; unbiasedness, Rao–Blackwell and Lehmann–Scheffé; information bounds and their regularity; testing, Neyman–Pearson, uniformly most powerful tests, confidence sets, pivots, and inversion.

- **foundations-03**: Asymptotic inference; consistency, M/Z estimators, delta method, asymptotic normality, likelihood theory, local asymptotic normality, contiguity, asymptotic efficiency, and boundary or misspecification failures.

- **foundations-04**: Concentration inequalities and empirical processes; symmetrization, entropy and covering, chaining, uniform laws and central limit results; minimax lower bounds and decision-theoretic upper bounds, including high-dimensional foundations.

- **foundations-05**: Nonparametric and semiparametric inference; density and regression estimation, kernels and splines, approximation rates, tangent spaces, influence functions, efficient scores, semiparametric efficiency; rigorous local prerequisite map.

- **foundations-06**: Robust and high-dimensional statistical foundations; contamination, influence and breakdown, robust means, heavy tails, sparsity, covariance estimation, minimax rates; general randomized/sequential inference foundations without machine-learning dependencies.

- **models-01**: Regression and generalized linear models; likelihood theory applications, multivariate models, covariance/PCA classical inference, prediction, diagnostics, hierarchy, mixed effects and longitudinal models. Exclude Bayesian/computational prerequisites from future categories.

- **models-02**: Sampling and survey inference; inclusion probabilities, Horvitz–Thompson and variance estimates, stratification/clustering, finite populations; experimental design, blocking/factorials/aliasing, optimal design, power and sample-size methods; technical versus biological replication.

- **models-03**: Causal inference; potential outcomes and structural causal models, DAG identification, adjustment, interventions, instrumental variables, mediation and interference; missing-data mechanisms, identifiability, weighting and sensitivity; measurement-error models.

- **models-04**: Survival, reliability and event-time inference, censoring/truncation, counting-process methods, Kaplan–Meier, hazards/Cox, competing risks; scientific measurement/calibration, detection/quantification limits, agreement, batch effects and uncertainty.

- **models-05**: Time series, stationary/dependent data, autocovariance/spectral inference, ARMA, prediction and state-space definitions; spatial statistics/random fields, covariance/variograms/kriging; statistical point processes. Computational filtering goes in future category 3.

- **models-06**: Multiple testing, familywise/FDR control, simultaneous and selective inference, reproducibility; sequential tests, martingale confidence sequences, optional stopping, group-sequential and basic adaptive experiments; learning/bandit allocation reserved for future category 4.
