# Models-02: finite-population sampling and experimental design

**Status: research dossier and proposed scaffold only.** No library item, canonical plan, active-run state, or workflow file has been authored or changed. A/B IDs below are stable drafting proposals, not created items or successful gates. The complete bibliography, integrity data and reading ranges are in [sources.json](./sources.json). Full sources and extracted text are retained in the ignored scratchpad/statistics-scaffolds-2026-10-11/sources/models-02/ cache.

## Scope and probability mechanisms

This dossier covers finite-population survey inference (inclusion probabilities, Horvitz–Thompson estimation and variance, stratification, clusters and two-stage sampling) and experimental design (randomization, blocking, factorials, aliasing, optimal design, power/sample size, and biological versus technical replication).

Keep three probability mechanisms separate.

1. **Survey/design-based probability:** finite population values are fixed; probability is over a specified distribution on possible samples. Unbiasedness means expectation under this sampling design equals the fixed population target.
2. **Treatment-assignment probability:** experimental units and their response schedules are fixed for randomization calculations; probability is over the specified treatment-allocation mechanism. This supports finite-sample randomization calculations for the stated estimand/null, but does not make experimental units a probability sample from a wider population.
3. **Model-based probability:** a response model supplies a distribution for errors/observations. Exact t/F tests and noncentral-distribution power calculations require their model assumptions. Random assignment does not make errors Gaussian, homoscedastic, independent or additive.

For fixed population U={1,…,N} and values y_i, write I_i=1{i sampled}, π_i=E_d(I_i), π_ij=E_d(I_i I_j), Δ_ij=π_ij−π_iπ_j and π_ii=π_i. E_d and Var_d refer to the sampling design; T=Σ_U y_i and μ_U=T/N. Positivity assumptions are explicit in inverse-probability formulas.

For experiments, record the experimental unit, treatment mechanism and restrictions, response/measurement units, estimand and any subsequent model. The unit independently receiving treatment determines treatment replication. Repeated readings from one treated unit can reduce measurement error but do not create additional randomized units.

A common model-based design model is y=Xβ+ε with fixed full-rank X and independent errors of mean zero and common variance σ²; exact classical t/F results further require Gaussian errors. Dependence, heteroscedasticity, random effects, treatment-by-block interaction, missingness and process drift need alternate models or design-specific methods. Physical feasibility is a scientific constraint, not a consequence of a model.

## Mathematical claims and proof routes

### Inclusion probabilities and Horvitz–Thompson

Under SRSWOR of n from N, π_i=n/N and for i≠j, π_ij=n(n−1)/(N(N−1)). Thus distinct inclusion indicators have covariance
π_ij−π_iπ_j=−n(N−n)/(N²(N−1)).
This negative covariance is induced by fixed-size sampling; unit indicators are not independent.

If π_i>0 for every unit, the HT total T̂=Σ_U I_i y_i/π_i is design-unbiased because E_d(I_i)=π_i; the mean estimator is T̂/N. If some unit has π_i=0, there is no generally unbiased estimator based only on observations for all possible finite populations.

The HT variance is
Var_d(T̂)=Σ_UΣ_U Δ_ij y_i y_j/(π_iπ_j).
When all π_ij>0, an unbiased estimator is
V̂=Σ_{i,j in s}(Δ_ij/π_ij)(y_i/π_i)(y_j/π_j),
since E_d(I_iI_j/π_ij)=1. For a fixed-size design, Σ_jΔ_ij=0 and the variance also equals
−(1/2)Σ_iΣ_j Δ_ij(y_i/π_i−y_j/π_j)².
The sample analogue with factors 1/π_ij is the Sen–Yates–Grundy estimator. It is nonnegative if Δ_ij≤0 for all distinct pairs; a general unbiased variance estimator can be negative. If π_ij=0 for some pair, this inverse-pair estimator is unavailable and may not estimate the variance unbiasedly.

With-replacement PPS should be distinguished: when draws and multiplicities are retained with draw probabilities p_i, the Hansen–Hurwitz estimator averages y_i/p_i over draws. HT weights distinct sampled units by their inclusion probabilities. Draw probabilities and inclusion probabilities are different quantities.

### SRS, stratification and clusters

Under SRSWOR, ȳ is design-unbiased and
Var_d(ȳ)=(1−n/N)S²/n,
where S²=Σ_U(y_i−μ_U)²/(N−1). For n>1, replacing S² by the sample variance s² gives an unbiased variance estimate. The finite-population correction is zero at a census; at n=1, s² is unavailable. This exact variance does not imply exact normal/t inference: a fixed finite population gives a discrete randomization law, so normal inference needs a superpopulation assumption or an approximation.

In stratified SRSWOR, U is partitioned into nonoverlapping strata U_h, independently sampled by SRSWOR; N_h=|U_h| and n_h units are selected. T̂_st=Σ_hN_h ȳ_h is unbiased, with
Var_d(T̂_st)=Σ_hN_h²(1−n_h/N_h)S_h²/n_h.
The terms add because strata are independently randomized; indicators within a stratum remain dependent. At fixed total sample size, continuous Neyman allocation n_h∝N_hS_h minimizes the variance. Under per-unit costs c_h and fixed budget, n_h∝N_hS_h/√c_h. Integer, minimum-sample and capacity restrictions can change the optimum.

For one-stage cluster sampling, estimate totals through selected cluster totals; do not treat all measured elements as independently sampled. Under SRSWOR of m from M clusters, the total estimate M times the sampled mean cluster total has variance M²(1−m/M)S_T²/m. For equal cluster size m_c, equal marginal variances, exchangeable within-cluster correlation ρ and negligible finite-population correction, DEFF≈1+(m_c−1)ρ relative to an equal-size element SRS. This approximation changes with unequal sizes/weights, unequal variances or another covariance structure. ρ=0 means no ICC inflation, not no sampling error.

In two-stage sampling, select PSUs and then subunits within selected PSUs. Expand within PSU first and between PSUs second. The variance is the between-PSU variance of true PSU totals plus expected within-PSU sampling variance. Prove it by conditioning on the first-stage sample, deriving conditional expectation and variance, then averaging over stage one. Allocation follows by minimizing this expression under integer and cost constraints.

### Experimental design, optimality and power

A completely randomized experiment generates treatment assignments from a stated probability mechanism. Blocking partitions units by nuisance factors and randomizes treatments within blocks; it controls/adjusts variation but does not erase it. An RCBD has every treatment in every block. In the balanced design, treatment contrasts are orthogonal to block contrasts under the additive model y_ij=μ+τ_i+β_j+ε_ij. Exact classical ANOVA F inference further assumes independent Gaussian errors with common variance and no unmodeled treatment-by-block interaction. With one observation per block-treatment cell, interaction can be inseparable from residual error.

A Latin square balances each treatment once per row and column but imposes restrictive balance/additivity assumptions and restricted randomization. The assignment description must state what was actually randomized; matching observations does not itself define randomization.

A full 2^k factorial uses all sign vectors x∈{−1,+1}^k. Products of factor columns index main effects and interactions. For distinct subsets A,B of factors, a coordinate in A△B changes sign across paired runs, so Σ_x x_Ax_B=0. This proves contrast orthogonality. Interaction is scale-dependent; assuming it is zero is a model restriction, not a consequence of balance.

A regular fraction defines some factor columns as products of base columns. Equal columns cannot have separate fitted coefficients: those effects are aliased. Multiplying generators yields alias classes and the defining relation. Resolution is the shortest nonidentity word: III allows main effects aliased with two-factor interactions; IV separates mains from two-factor interactions but permits two-factor interactions to alias each other; V separates mains and two-factor interactions from one another, though two-factor interactions may alias higher-order terms. These are for standard regular two-level designs. Sparsity/hierarchy is an empirical assumption used to interpret aliases, not a design guarantee.

A mirror-image foldover appends the sign reversal of all columns. A j-factor product column changes by (−1)^j, separating aliases of opposite parity, not every member of an alias class. Partial foldovers target selected aliases with fewer runs while leaving others. Partial confounding rotates effects lost to blocks across replications; information for an effect comes only from replicates where it is not confounded.

For continuous factors, response surfaces use local polynomial approximations on a declared region. In a first-order coded model, steepest ascent is proportional to its slope vector. In y=β₀+xᵀβ+xᵀBx with symmetric nonsingular B, x₀=−(1/2)B⁻¹β; eigenvalue signs classify the fitted quadratic stationary point as maximum, minimum or saddle. These facts apply only to the fitted polynomial and region; significant lack of fit invalidates the interpretation. A central composite design combines factorial, axial and replicated center points. Rotatability, orthogonal blocking and prediction precision are separate properties, not simultaneous guarantees for every CCD.

For y_i=f(x_i)ᵀβ+ε_i with independent homoscedastic errors of variance σ², M(ξ)=Σ_x w_x f(x)f(x)ᵀ is the information matrix and Cov(β̂)=σ²M⁻¹ when M is nonsingular. D-optimality maximizes det M/minimizes confidence-ellipsoid volume; A-optimality minimizes tr(M⁻¹), E-optimality maximizes its smallest eigenvalue, and c-optimality minimizes cᵀM⁻¹c. Criteria differ by inferential goal and are model/candidate-set/covariance dependent.

For an approximate design on a finite candidate set with p parameters, a nonsingular design M is D-optimal iff f(x)ᵀM⁻¹f(x)≤p for every candidate x, with equality on support. Necessity follows from the nonpositive directional derivative of log det toward any candidate rank-one update. Sufficiency follows from log-det concavity and the global supporting-hyperplane inequality. Equality on support follows by averaging: Σ_xw_x f(x)ᵀM⁻¹f(x)=tr(M⁻¹M)=p. Exact integer-run design is a separate discrete problem; this equivalence theorem does not certify a heuristic exchange algorithm as exact-optimal.

Power is rejection probability at a specified alternative; type-II error is one minus power. A sample-size plan needs significance, practical effect size, variance/error model, allocation, sidedness and target power/precision. For independent Gaussian observations with known σ, a one-sided one-sample normal test for δ>0 has power Φ(δ√n/σ−z_{1−α}), so n≥σ²(z_{1−α}+z_{1−β})²/δ² gives target 1−β. Two-sided exact power includes both tails. With unknown σ, iterate with t critical values because degrees of freedom depend on n. For fixed-effects one-way normal ANOVA, λ=Σ_i n_i(μ_i−μ̄_w)²/σ², with df g−1,N−g; power is the upper-tail probability past the central F critical value under the corresponding noncentral F. A contrast has its own noncentral t. Exactness requires the stated model/test. Sensitivity analysis is needed when effect, variance, normality, independence, multiplicity or unit definition is uncertain.

Biological replication samples/randomizes independent biological units at the level of intended generalization; technical replication repeats measurement on the same biological material. In Y_ijk=μ+τ_i+b_ij+ε_ijk, with independent biological effects variance σ²_bio and technical errors variance σ²_tech, averaging m technical readings gives per-unit variance σ²_bio+σ²_tech/m; averaging n biological units gives σ²_bio/n+σ²_tech/(nm). Technical repeats reduce measurement error but cannot replace independent biological units when biological variation dominates. If treatment is assigned to a cage, litter, plot or batch, that assignment unit—not each animal, aliquot or reading—is the independent treatment replicate.

## Proposed A/B pairs

Every A is a proposed reusable definition/result; every B is an example/counterexample and not a cross-page supplier. IDs are proposals only.

### Finite-population and survey sampling

**S01 — target and sample design.** A: proposed def-finite-population-and-sampling-design defines fixed units/values, total/mean, possible samples and design probability; contrasts fixed-population and superpopulation targets. B: proposed ex-srswor-as-uniform-subset-design represents SRSWOR as the uniform measure on n-subsets and a census as a degenerate design. Sources: Shalabh ch. 1 and ch. 2 pp. 1–3.

**S02 — inclusion probabilities.** A: proposed def-first-and-second-order-inclusion-probabilities defines I_i, π_i, π_ij and support conditions. B: proposed ex-srswor-inclusion-probabilities-and-negative-covariance counts samples containing one and two units and derives the negative covariance. Sources: Shalabh ch. 2 pp. 3–15; Borkowski §§6.1–6.2.

**S03 — HT total.** A: proposed thm-horvitz-thompson-total-is-design-unbiased states T̂=ΣI_i y_i/π_i unbiased for π_i>0. B: proposed ex-zero-inclusion-probability-prevents-general-unbiased-total compares two populations differing at an unobservable unit. Proof: linearity plus E_dI_i=π_i. Sources: Shalabh ch. 7 pp. 23–30; Borkowski §6.2, printed pp. 141–143. Include HH only as a with-replacement contrast.

**S04 — HT variance.** A: proposed thm-horvitz-thompson-variance-and-pair-inclusion-estimator states the Δ_ij formula and unbiased pair estimator when all π_ij>0; includes fixed-size Yates–Grundy identity and nonnegativity condition. B: proposed ex-srswor-ht-variance-and-yates-grundy recovers SRSWOR and shows the π_ij=0 limitation. Proof: covariance expansion, pair indicator substitution and fixed-size row-sum identity. Sources: Shalabh ch. 7 pp. 25–31; Borkowski §6.2, printed pp. 143–146.

**S05 — SRSWOR and FPC.** A: proposed thm-srswor-mean-variance-and-finite-population-correction proves Var(ȳ)=(1−n/N)S²/n and the n>1 variance estimate. B: proposed ex-srswor-census-and-singleton-boundaries handles n=N and n=1. Sources: Shalabh ch. 2 pp. 1–23; Oehlert ch. 7. Correct Shalabh's covariance sign at p. 14.

**S06 — stratified design.** A: proposed def-stratified-srswor-design defines disjoint strata and independent within-stratum SRS. B: proposed ex-strata-proportional-and-disproportionate-allocation shows oversampling and reweighting by N_h. Proof: within-stratum unbiasedness. Source: Shalabh ch. 4, full 26-page chapter.

**S07 — stratified variance/allocation.** A: proposed thm-stratified-estimator-variance-and-neyman-allocation gives variance and derives n_h∝N_hS_h or cost allocation n_h∝N_hS_h/√c_h. B: proposed ex-stratified-cost-allocation-with-integer-constraints compares continuous optimum and constrained rounding. Proof: independent stratum variances, Lagrange multipliers/Cauchy–Schwarz. Source: Shalabh ch. 4; JPSM outline is not a proof source.

**S08 — one-stage clusters.** A: proposed def-one-stage-cluster-sampling-and-intracluster-correlation defines PSU, cluster total and ICC. B: proposed ex-equal-cluster-design-effect-under-exchangeable-correlation derives DEFF=1+(m_c−1)ρ under equal-size/equal-variance/exchangeability and negligible FPC. Proof: expand variance of cluster sums. Source: Shalabh ch. 9, full chapter. Do not repeat p. 7's “ρ=0 means no error.”

**S09 — two-stage sampling.** A: proposed thm-two-stage-ht-total-and-variance-decomposition proves the expansion estimator and between/within variance decomposition. B: proposed ex-two-stage-village-field-subsampling contrasts full enumeration in selected PSUs with subsampling. Proof: condition on stage one then apply total expectation/variance. Source: Shalabh ch. 10, full chapter.

### Randomized experiments and classical design

**E01 — assignment and experimental unit.** A: proposed def-randomized-experiment-experimental-unit-and-response-unit records experimental/measurement units, allocation law and estimand; separates treatment randomization from survey sampling. B: proposed ex-cage-plant-and-assay-units distinguishes cage, plant and assay levels. Sources: Oehlert chs. 1–2, 13; Holmes–Huber §13.2. No causal-graph/potential-outcomes dependency is presumed.

**E02 — randomized blocks.** A: proposed def-randomized-complete-block-design defines a treatment-complete block and within-block randomization; Latin squares are a separate constrained structure. B: proposed ex-complete-block-and-latin-square-randomization enumerates permitted assignments. Sources: Oehlert ch. 13; NIST §5.3.3.2, PDF pp. 1303–1306; Holmes–Huber §13.4.4. NIST's separate Latin-square pages were not fully read.

**E03 — blocked contrasts.** A: proposed thm-blocked-treatment-contrast-and-randomization-unbiasedness states design unbiasedness and separately classical RCBD F exactness under independent Gaussian homoscedastic additive errors. B: proposed ex-paired-treatment-contrast-with-block-heterogeneity compares unblocked and paired variances and shows improvement is conditional on within-pair covariance. Proof: average within-block contrasts; use projection/rank and Gaussian quadratic forms for model-based F. Sources: Oehlert chs. 7,13; NIST §5.3.3.2; Holmes–Huber §13.4.4.

**E04 — full factorials.** A: proposed thm-full-two-level-factorial-contrast-orthogonality proves sign-product column orthogonality and defines effects. B: proposed ex-two-factor-interaction-and-scale-dependence shows an additive restriction and scale-dependent interaction. Proof: sign cancellation across A△B; derive coefficient covariance only under common-variance errors. Sources: Oehlert ch. 8; NIST §5.3.3.3, PDF pp. 1320–1328.

**E05 — fractional factorial aliases.** A: proposed def-regular-fractional-factorial-defining-relation-and-resolution defines generators, aliases and resolution. B: proposed ex-two-three-minus-one-alias-class derives A=BC, B=AC, C=AB for I=ABC and labels sparsity as an assumption. Proof: sign-group characters/equal design columns. Sources: Oehlert chs. 15,18; NIST §5.3.3.4.1–.4, PDF pp. 1333–1347.

**E06 — foldover.** A: proposed thm-factorial-foldover-separates-opposite-parity-aliases proves the parity sign rule and remaining alias limitation. B: proposed ex-resolution-three-foldover-and-targeted-followup compares full and one-factor reversals. Proof: parity block separation; recompute partial-foldover generators. Sources: Oehlert chs. 15,18; NIST §5.3.3.8, PDF pp. 1382–1389.

**E07 — response surfaces/CCD.** A: proposed def-local-response-surface-model-and-central-composite-design defines local polynomial, region, factorial/axial/center points and lack-of-fit role. B: proposed ex-augment-first-order-factorial-to-blocked-ccd adds axial points after curvature. Proof: design matrix rank, stationary-point formula and eigenvalue classification; no physical quadratic guarantee. Sources: Oehlert ch. 19 §§19.1–19.7; NIST §5.3.3.6–.9, PDF pp. 1356–1392.

### Optimal design, power and replication

**O01 — information and criteria.** A: proposed def-linear-model-information-matrix-and-design-criteria defines M(ξ), estimability, D/A/E/c criteria for the stated model. B: proposed ex-a-vs-d-vs-e-optimal-candidate-designs compares distinct objectives. Proof: Cov(β̂)=σ²M⁻¹ and confidence-ellipsoid volume. Sources: Boyd–Vandenberghe §7.5; NIST §5.5.2.1.

**O02 — D-optimal equivalence.** A: proposed thm-d-optimal-design-equivalence-criterion proves f(x)ᵀM⁻¹f(x)≤p for all candidates, equality on support. B: proposed ex-candidate-set-leverage-bound verifies a small example. Proof: logdet directional derivative, concavity, trace identity; exact integer design remains discrete. Sources: Boyd–Vandenberghe §§3.1.5, 5.10 and 7.5. NIST states criterion, not proof.

**P01 — power/sample-size target.** A: proposed def-test-power-type-two-error-and-sample-size-plan defines size, power, type-II error, precision and integer minimum n. B: proposed ex-one-sample-known-variance-power-plan solves a one-sided known-σ normal plan and compares exact two-sided power. Proof: rejection region under alternative. Sources: Oehlert ch. 7; NIST §7.2.2.2, PDF pp. 2019–2021.

**P02 — contrast and ANOVA power.** A: proposed thm-normal-linear-model-contrast-and-anova-power derives noncentral t/F under independent Gaussian common-variance errors. B: proposed ex-noncentral-f-power-for-prespecified-effects compares allocations at equal N. Proof: contrast variance and independent residual sum of squares; λ_t=cᵀμ/(σ√Σc_i²/n_i), λ_F=Σn_i(μ_i−μ̄_w)²/σ², dfs g−1,N−g. Sources: Oehlert chs. 7–8; NIST §7.2.2.2.

**R01 — biological/technical replication.** A: proposed def-biological-technical-replication-and-nested-measurement-model defines generalization/assignment levels and nested readings. B: proposed ex-reassay-one-sample-vs-add-biological-units shows five assays on one mouse/sample are not five biological treatment replicates. Sources: Holmes–Huber §§13.3.2,13.4.2,13.4.5; Oehlert ch. 1. Do not import source computational procedures.

**R02 — nested replicate variance.** A: proposed thm-nested-biological-and-technical-average-variance proves σ²_bio/n+σ²_tech/(nm). B: proposed ex-technical-replication-has-diminishing-return compares increasing technical m to independent biological n. Proof: covariance/variance expansion by nested levels. If treatment is assigned to cage/litter/plot/batch, that is the independent treatment cluster. Sources: Holmes–Huber §§13.3.2,13.4.5.

## Topic-to-pair and source coverage

| Topic | Pairs | Sources | Proof/coverage obligation |
|---|---|---|---|
| Finite populations, targets and design law | S01–S02 | Shalabh chs. 1–2 | Definition and exact subset counting |
| Inclusion probabilities | S02 | Shalabh ch. 2; Borkowski §6.2 | Count samples; correct covariance sign |
| HT total/mean and positivity | S03 | Shalabh ch. 7; Borkowski §6.2 | Indicator expectation; zero-support counterexample |
| HT variance/estimator/Yates–Grundy | S04 | Shalabh ch. 7; Borkowski §6.2 | Covariance expansion, pair condition and row sums |
| SRS/FPC | S05 | Shalabh ch. 2; Oehlert ch. 7 | Exact variance versus normal approximation |
| Stratification and allocations | S06–S07 | Shalabh ch. 4 | Independent strata, constrained optimization |
| Cluster sampling/ICC/DEFF | S08 | Shalabh ch. 9; Holmes–Huber ch. 13 | Explicit equal-size/equicorrelation assumptions |
| Two-stage sampling | S09 | Shalabh ch. 10 | Conditional variance decomposition |
| Assignment and unit hierarchy | E01, R01–R02 | Oehlert chs. 1–2,13; Holmes–Huber §§13.2–13.3.2 | Assignment/generalization levels |
| Blocking/pairing/Latin square | E02–E03 | Oehlert ch. 13; NIST §5.3.3.2; Holmes–Huber §13.4.4 | Restricted randomization and exact model assumptions |
| Factorials/interactions | E04 | Oehlert ch. 8; NIST §5.3.3.3 | Sign-product orthogonality and model restrictions |
| Aliasing/resolution | E05–E06 | Oehlert chs. 15,18; NIST §§5.3.3.4,.8 | Generator group, parity and empirical sparsity |
| Response surfaces | E07 | Oehlert ch. 19 §§19.1–19.7; NIST §§5.3.3.6–.9 | Local model, lack of fit, rank and classification |
| Optimality | O01–O02 | Boyd–Vandenberghe §§3.1.5,7.5; NIST §5.5.2.1 | Criteria plus full equivalence proof |
| Power and sample size | P01–P02 | Oehlert chs. 7–8; NIST §7.2.2.2 | Exact assumptions, noncentrality and integer solution |
| Biological/technical replication | R01–R02 | Holmes–Huber §§13.3.2,13.4.2,.4.5; Oehlert ch. 1 | Nested variance and true biological n |

All requested topics have source and pair coverage. A items are reusable proposed suppliers; B examples are not.

## Existing library suppliers checked by reading bodies

Only the stated clauses are reusable; none of these items is a sampling or experiment-design theorem.

### Finite probability and variance

- **def-finite-probability-space-and-event** defines finite outcome weights and events.
- **def-expectation-on-a-finite-probability-space** defines finite weighted expectation.
- **cor-expectation-agrees-with-the-finite-weighted-sum** reconciles it with general expectation/law formulas.
- **cor-expectation-of-an-indicator-is-probability** supplies E(1_A)=P(A).
- **def-moments-variance-and-covariance**, **thm-covariance-bilinearity-and-symmetry**, **thm-variance-of-a-finite-sum** supply moments and full covariance expansion.
- **cor-variance-adds-for-pairwise-independent-random-variables** does not apply to SRSWOR inclusion indicators: they are dependent.

These support HT expectation/variance proofs once the sampling design is defined. They do not define finite-population sampling, inclusion positivity, variance estimability, stratification, clustering, treatment randomization, power or sample size.

### Linear algebra and model matrices

- **def-linear-basis**, **thm-rank-nullity**, **thm-row-rank-equals-column-rank** supply finite-dimensional rank basics.
- **thm-orthogonal-projection-is-the-unique-nearest-point** supplies finite-dimensional projection.
- **thm-normal-equations-for-best-affine-l2-prediction** proves best affine L² prediction and covariance normal equations, not exact sampling/ANOVA/power.
- **thm-rank-of-the-point-inclusion-matrix** proves rank_Q W_{1,k}(n)=n only for the complete point-versus-k-subset matrix, 1≤k≤n−1; it does not imply rank for arbitrary treatment designs.

These support matrix proofs once a design matrix and error model are specified. No inspected body supplies logdet concavity, D-optimality, factorial orthogonality, noncentral t/F power, or sample-size inversion.

### Combinatorial designs and incidence matrices

- **def-two-design**, **def-incidence-matrix-of-a-two-design**, **lem-replication-number-is-constant-in-a-two-design**, **thm-counting-identities-for-a-two-design** supply a 2-(v,k,λ) incidence structure and bk=vr, r(k−1)=λ(v−1).
- **cor-divisibility-conditions-for-a-two-design**, **cor-finite-projective-planes-are-symmetric-two-designs**, **thm-incidence-matrix-identity-for-a-two-design** supply integrality, an example and NNᵀ=(r−λ)I+λJ.
- **def-set-family-and-its-incidence-matrix** supplies set-family incidence rows and Gram matrix.

These are reusable combinatorial balance/counting or matrix suppliers only when the hypotheses hold. They do not supply assignment distributions, treatment estimators, variances, blocked ANOVA or power. A BIBD definition alone is not a randomized treatment assignment.

## Smallest missing prerequisites and planned Cat-1 interfaces

The existing generic probability items supply finite expectation, indicator expectation, covariance bilinearity and finite-sum variance. The library has no published statistical inference or experimental-design items. These are the smallest required Cat-1 interfaces and are **PLANNED, not authored or assumed to exist**.

1. **PLANNED def-statistical-experiment-estimator-bias-and-risk:** parameter/design-indexed laws, estimator, target, bias and variance/risk, with finite-sample unbiasedness. Cat 2 supplies survey and treatment-design indicators/estimators.
2. **PLANNED thm-expectation-linearity-and-indicator-expansion:** linearity and E(I_A)=P(A) in the general probability setting. Reconcile the existing finite/generic paths rather than duplicate.
3. **PLANNED def-test-size-power-and-confidence-coverage:** size, power, type-II error, confidence coverage/width, rejection regions and inversion. Cat 2 owns model-specific noncentralities.
4. **PLANNED def-normal-student-t-central-f-and-noncentral-laws:** parameterizations/hypotheses for exact contrast and ANOVA calculations.
5. **PLANNED thm-gaussian-contrast-and-variance-ratio-inference:** exact t/F laws under independent Gaussian/homoscedastic assumptions. Cat 2 specializes them to blocks/factorials and power.
6. **PLANNED thm-confidence-procedure-by-test-inversion:** reusable relation between tests and confidence sets when planning by coverage or width.

Do not add these from this dossier; the foundation scaffold author must reconcile names, dependencies and source support. Existing matrix rank/projection items may be reused. A narrower treatment-design estimability statement belongs in the statistical model scaffold or an explicit planned interface after dependency inspection.

Category 2 must depend only on published mathematics and the reconciled Category-1 interfaces. No Bayesian priors/posteriors, computational statistics/MCMC, ML estimators/feature selection, bandit/adaptive learning or their prerequisite chains may enter directly or indirectly. A D-opt candidate-set maximization is defined mathematically; a numerical exchange routine is not cited as a proof of optimality. General numerical foundations remain an independent supplier. No such backward edge appears in these proposals.

## Source reading and audit record

Full sources from author/institution/publisher locations were extracted completely with PyMuPDF/fitz and retained with hashes, page/word counts and reading ranges in [sources.json](./sources.json). Full extraction is not claimed to be full reading.

- Oehlert's complete 679-page author-hosted PDF: 237,456 extracted words. Read chs. 1–2, 7–8, 13–15, 18, ch. 19 §§19.1–19.7, ch. 20 §§20.1–20.3. The rest and ch. 19 §§19.8 onward were not read.
- Shalabh's six complete IITK chapters were all read: chs. 1, 2, 4, 7, 9, 10 (133 pages). HT claims were independently compared with Montana notes.
- Borkowski's nine-page Montana State STAT 446 HT lecture was fully read.
- NIST/SEMATECH's 2,333-page PDF (483,450 extracted words): only complete units listed in sources.json were read. Direct NIST requests returned 403 during this session; no access bypass was attempted.
- Boyd–Vandenberghe's 714-page full book (258,328 words): read §3.1.5, only the §5.10 exercise statement, and §7.5 in full.
- Holmes–Huber's 18-document HTML archive (772 fitz pages, 171,222 words): read all of ch. 13 (52 fitz pages, 12,860 words); other 17 documents were not read. Only non-computational design/replication discussion is used.
- The 3-page JPSM outline was excluded as a mathematical source; it is a nontechnical short-course outline, not the lecture notebook. Penn State STAT 506 pages were not acquired after direct TLS failure; no bypass was attempted.

### Source errors and cautions

- Shalabh ch. 2 p. 14 has the wrong positive sign for distinct SRSWOR indicator covariance; the correct covariance is negative.
- Shalabh ch. 2 pp. 17–21 presents exact normal inference for a sample mean from a finite normal population. A fixed population gives a finite/discrete randomization distribution. Use these normal results only under a superpopulation model or as approximation.
- Borkowski printed p. 145 has PPS-WR arithmetic typos, including a complement inconsistent with π_i=.04. General formulas agree with Shalabh ch. 7.
- Shalabh ch. 9 p. 7's “ρ=0 means no error” is false: it means no ICC design-effect inflation; sampling error remains.
- NIST center-point advice is for process monitoring. Preserve the monitoring purpose but account for treatment randomization and process drift.
- NIST applied material does not prove the D-opt equivalence theorem; O02 records the proof route.
- Power requires explicit effect, variance, independent unit count, error law, df, allocation, sidedness and multiplicity. It is not a design-intrinsic number.

## Remaining gaps

1. For arbitrary designs, zero pair-inclusion probabilities require separate variance-estimability analysis; do not extend the inverse-pair formula.
2. The reviewed SRS notes do not establish exact distribution-free confidence intervals for arbitrary finite-population means.
3. The ICC design effect is only the equal-size exchangeable case; unequal clusters, weights, variances and covariance structures need new derivations.
4. Exact t/F power depends on planned Cat-1 distribution/inference interfaces and Cat-2 assumptions. Without these, power/sample-size pairs are incomplete.
5. D-optimality is model/candidate dependent. Exact integer-run optima may differ from approximate designs; heuristic output needs a certificate before being called globally optimal.
6. Fractional-factorial balance does not resolve aliases. Separate main-effect claims require hierarchy/sparsity assumptions or follow-up runs.
