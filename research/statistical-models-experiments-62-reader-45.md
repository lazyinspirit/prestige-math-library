# Step 3a reader report — batch 45

Run: `statistical-models-experiments-62`  
Role: reader  
Assignment: pages `random-fields-covariance-and-variograms` and `random-fields-covariance-and-variograms-examples`

## Opened inventory

Assigned pages read:

- `library/statistical-models-and-experiments/random-fields-covariance-and-variograms.md` — draft A page.
- `library/statistical-models-and-experiments/random-fields-covariance-and-variograms-examples.md` — draft B page.

All six assigned items were read in dependency order:

| Item | Kind | Review |
|---|---|---|
| `def-random-field-stationarity-covariance-and-variogram` | definition | Sound as stated. |
| `lem-random-field-covariance-kernel-is-positive-semidefinite` | lemma | Proof establishes symmetry and positivity for every finite real quadratic form. |
| `thm-gaussian-random-field-existence-from-a-positive-semidefinite-kernel` | theorem | Construction, consistency, extension, and stated limits are justified. |
| `thm-order-two-field-variogram-is-conditionally-negative-definite` | theorem | Both the covariance identity and real zero-sum inequality are justified. |
| `thm-continuous-stationary-field-covariance-has-bochner-measure` | theorem | The covariance is shown complex positive definite before the LCA Bochner theorem is applied. |
| `ex-covariance-kernel-and-intrinsic-variogram-checks` | example | The two-site refutation, CND calculation, witness moments, variogram, and variance calculation are correct. |

Opened direct suppliers used by the assigned items:

- Current-run draft supplier from batch 40: `def-strict-and-weak-stationarity-for-time-series`.
- Published field/probability suppliers: `def-stochastic-process-and-finite-dimensional-distributions`, `def-random-element-and-real-random-variable`, `def-law-or-distribution-of-a-random-element`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-moments-variance-and-covariance`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, and `lem-variance-and-covariance-identities-for-random-variables`.
- Gaussian-construction suppliers: `def-multivariate-normal-law`, `lem-characteristic-function-of-a-multivariate-normal-law`, `lem-second-countable-lch-spaces-are-standard-borel`, `def-second-countable-space`, `def-locally-compact-space`, `lem-real-line-is-a-metric-space`, `thm-heine-borel-rn`, `thm-rationals-countable`, `lem-rat-embeds-dense`, `thm-product-of-countable`, `def-consistent-family-of-finite-dimensional-distributions`, `def-coordinate-maps-and-cylinder-sigma-algebra`, `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces`, `def-gaussian-process`, and `def-axiom-of-choice`.
- Spectral-representation suppliers: `def-positive-definite-function-on-an-abelian-group`, `thm-bochner-theorem-for-lca-groups`, `def-fourier-transform-on-an-lca-group`, `def-pontryagin-dual-and-compact-open-topology`, and `def-dependent-choice`.
- Finite-witness suppliers: `def-finite-probability-space-and-event`, `def-finite-real-random-variable-and-distribution`, and `def-expectation-on-a-finite-probability-space`.

The batch proof-contract records were checked against the current proof steps and their sources, and were not treated as verdicts.

## Mathematical and source review

The field definition distinguishes coordinate measurability from joint measurability, keeps strict stationarity at the finite-dimensional-law level, and states the moment and domain conditions for wide and order-two intrinsic stationarity. Its use of the broader increment-moment convention is supported by Spodarev, *Spatial Statistics* (2024), Section 1.1, PDF pp. 3–5; Biermé, *Introduction to random fields and scale invariance: Lecture I* (2016), PDF pp. 4–6, defines a process as a collection of measurable real random variables. The published finite-dimensional-distribution definition's product index `j<n` includes `j=0` because this library's natural numbers include zero, so it enumerates coordinates 1 through n.

The covariance-kernel lemma applies the variance of the finite linear combination `sum_i a_i X(s_i)`. The supplied covariance bilinearity result and the displayed square-integrability bound justify all terms.

The Gaussian-field proof assigns a possibly singular Gaussian law to each finite set, removes dependence on its enumeration using the multivariate characteristic function, and proves restriction consistency with characteristic functions. It verifies that the coordinate space `R` is standard Borel and applies the stated Kolmogorov extension theorem to the cylinder sigma-algebra. Repeated sites are handled by collecting their coefficients. Neither continuity of sample paths nor joint measurability is claimed. Biermé, PDF p. 7, states the Gaussian finite-dimensional formulation and Kolmogorov existence result; the batch supplies the consistency and extension details locally.

The order-two variogram proof uses only square-integrable increments based at 0 and the real zero-sum expansion into a negative expected square. Under wide stationarity, constant means make increments centered and covariance symmetry yields `gamma(h)=C(0)-C(h)`. This agrees with Spodarev (2024), Section 1.1 and PDF p. 5, and the real-coefficient negative-type statement in Biermé, PDF pp. 19–20.

For the Bochner item, wide stationarity and covariance symmetry make `C` even. The finite covariance matrices are real symmetric positive semidefinite, so decomposing complex coefficients into real and imaginary parts proves the positive-definite hypothesis required by the LCA Bochner supplier. The stated AC+DC assumptions, uniqueness, finite Radon measure, and mass `C(0)` follow from that supplier. Spodarev (2024), Section 1.2, PDF pp. 5–6, states the spectral representation; the 2009 draft states its general-dimensional Bochner–Khinchin theorem at Theorem 2.1.1, PDF pp. 32–33, and says there that its proof is given only for dimension one, with the general case referred to an external source. The batch instead uses the local LCA theorem.

The example's matrix at 0 and 1 has eigen-direction `(1,-1)` with quadratic form `-2`; its zero-sum formula is `-2(sum_i a_i s_i)^2`. The equal-weight witness `Z=±sqrt(2)` has mean 0 and second moment 2, so `X(t)=tZ` has variogram `h^2` and variance `2t^2`. Spodarev (2009), Example 2.2.1(1), PDF p. 44, gives the same random-line construction with a general centered slope of finite positive second moment; Spodarev (2024), PDF p. 8, records the H=1 linear-process case.

Source convention differences do not create defects in the current items. Spodarev's 2009 Definition 1.4.3 (PDF p. 18) additionally imposes zero-mean increments; the 2024 definition allows the increment mean to depend on displacement, which is the convention adopted here. The 2009 Proposition 2.2.1(4), PDF pp. 43–44, prints complex weights without conjugation. The assigned theorem states the real-coefficient inequality and proves it directly, so it does not rely on that source calculation. Biermé, PDF pp. 19–20, states the real-coefficient conditional negative type criterion.

### Source URLs and locators

- Evgeny Spodarev, [*Spatial Statistics: Lecture Notes* (2024)](https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/lehre/ss24/SpatialStatistics_2024.pdf) — Sections 1.1–1.2, PDF pp. 4–5 (field and stationarity definitions, covariance positivity, spectral representation); Definition 1.8, PDF p. 7 (Gaussian fields); Exercise 1.10(e), PDF p. 8 (the H=1 linear-process case).
- Evgeny Spodarev, [*Random Fields I: Lecture Notes* (Draft, 2009)](https://www.uni-ulm.de/fileadmin/website_uni_ulm/allgemein/zuloeschen/Random_Field.pdf) — Definitions 1.4.1–1.4.3, PDF pp. 18–19 (stationarity conventions); Theorem 2.1.1, PDF pp. 32–33 (Bochner–Khinchin statement and proof-scope note); Proposition 2.2.1(4) and its proof, PDF pp. 43–44 (conditional negative definiteness); Example 2.2.1(1), PDF p. 44 (random line).
- Hermine Biermé, [*Introduction to Random Fields and Scale Invariance: Lecture I* (2016)](https://www.lebesgue.fr/sites/default/files/attach/Bierme_Lecture1.pdf) — PDF pp. 4–7 (coordinate random variables, finite-dimensional laws, covariance positivity, and Gaussian processes); pp. 13–14 (stationary covariance positive type and Bochner representation); pp. 19–20 (variograms and real-coefficient conditional negative type).

## Page verdicts

- `random-fields-covariance-and-variograms` — sound. Its summary preserves the domain and axiom qualifications of the assigned results and states the absence of path regularity, joint measurability, and density claims.
- `random-fields-covariance-and-variograms-examples` — sound. Its summary accurately reports the two-site covariance failure, explicit quadratic-variogram witness, and nonconstant level variance.

## Edits, uneditable defects, and blockers

- Edits: none. No assigned item or A-page prose needed repair; consequently no item proof-contract update, stale judge removal, reflow, precheck, or proof-layout run was needed.
- Uneditable defects: none found in the assigned pages, items, or direct suppliers needed for their claims.
- Blocker: none for this review. The recomputed run status after writing the artifacts reports the run as active in Step 3a and includes batch 45 in `3a-read` coverage (36/62). The workflow's `3a-split` routing artifact is still pending.

Coverage was item-level: the assigned pages, all assigned items, their direct suppliers needed by the arguments, the relevant proof-contract entries, and the cited source sections listed above were opened. I did not re-audit unrelated transitive proof dependencies beneath already published suppliers or source pages outside the relevant units.
