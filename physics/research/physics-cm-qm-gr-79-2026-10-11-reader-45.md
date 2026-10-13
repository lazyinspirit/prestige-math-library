# Reader report — batch 45

Run: physics-cm-qm-gr-79-2026-10-11  
Role: reader  
Scope: batch 45

## Inventory opened

Assigned pages:

- A page: library/non-relativistic-quantum-mechanics/qm-observables-and-born-probabilities.md
- B page: library/non-relativistic-quantum-mechanics/qm-observables-and-born-probabilities-examples.md

Declared page prerequisites opened: qm-state-geometry; qm-math-composites; qm-framework-and-quantities; qm-math-fock-and-equilibrium; qm-math-magnetic-and-detection; and the published page improper-and-parameter-dependent-multiple-integrals.

The current batch manifest lists 10 A-page items and 5 B-page items. The two page frontmatter inventories match those 15 entries.

Assigned A-page items:

- lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues
- lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity
- lem-nrqm-observables-moments-and-variance
- lem-nrqm-observables-states-separated-by-bounded-projections
- def-nrqm-observables-framework-observable-and-outcome-law
- pthm-nrqm-observables-born-outcome-law-properties
- pthm-nrqm-observables-preparation-moments
- pthm-nrqm-observables-position-and-momentum-outcome-laws
- pthm-nrqm-observables-states-separated-by-born-statistics
- rem-nrqm-observables-scope-and-empirical-status

Assigned B-page items:

- ex-nrqm-observables-two-level-energy-readout
- ex-nrqm-observables-position-bin-probabilities
- cex-nrqm-observables-plane-wave-is-not-a-preparation
- ex-nrqm-observables-position-mean-without-variance
- rem-nrqm-observables-examples-scope-limits

Relevant current-run draft suppliers read in dependency order included:

- Batch 35: lem-nrqm-composites-density-and-scalar-spectral-probability; lem-nrqm-composites-rank-one-operator-calculus; thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators.
- Batch 41: lem-nrqm-observables-spectral-support-and-outcome-law; lem-nrqm-observables-l2-multiplication-spectral-measure.
- Batch 42: def-nrqm-magnetic-and-detection-position-and-momentum-operators; lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint.
- Batch 43: def-nrqm-framework-quantities-and-units; post-nrqm-framework-state-and-composition; post-nrqm-framework-observable-and-probability; post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle; def-nrqm-framework-newtonian-spacetime; def-nrqm-framework-inertial-frames; def-nrqm-framework-classical-apparatus-trajectories.
- Batch 44: def-nrqm-state-geometry-framework-state-space; def-nrqm-state-geometry-pure-mixed-states-and-purity; def-nrqm-state-geometry-state-vectors-and-rays; lem-nrqm-state-geometry-density-set-convex-and-complete; lem-nrqm-state-geometry-ray-to-rank-one-projection; lem-nrqm-state-geometry-normalization-and-phase-classes; lem-nrqm-state-geometry-purity-criterion.

The L2 multiplier lemma depends on the spectral-support lemma; I checked that supplier’s statement and proof before assessing its use.

I checked the Statement or Definition of each of the 46 directly cited published mathematical dependencies used by the assigned items. All 46 matched an item pin in research/math-imports.json:

- cor-additivity-of-the-nonnegative-lebesgue-integral; cor-continuous-functions-are-borel-measurable; cor-inner-product-induces-a-norm; cor-second-countable-lch-locally-finite-borel-measures-are-regular; cor-trigonometric-parity-and-pythagorean-identity.
- def-adjoint-of-a-densely-defined-unbounded-operator; def-axiom-of-choice; def-borel-sigma-algebra; def-countable-choice; def-eigenvalue-eigenvector-eigenspace-and-spectrum; def-fourier-transform-on-l-one-of-rn; def-hilbert-orthogonal-projection; def-hilbert-space; def-inner-product-space; def-integral-over-a-measurable-set; def-l-p-space-as-a-quotient-by-null-functions; def-nonnegative-lebesgue-integral; def-projection-valued-measure; def-regular-borel-measure-on-an-lch-space; def-resolvent-and-spectrum-of-a-closed-unbounded-operator; def-self-adjoint-positive-unitary-and-normal-operator; def-symmetric-self-adjoint-and-essentially-self-adjoint; def-trace-class-operator; def-trace-of-a-trace-class-operator.
- lem-complex-conjugation-and-modulus-laws; lem-finite-measure-uniqueness-on-a-pi-system; lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form; lem-orthogonal-projection-is-linear-self-adjoint-contractive; lem-scalar-and-complex-measures-from-a-pvm; prop-countable-subsets-of-rn-are-lebesgue-null.
- thm-borel-products-of-euclidean-spaces-are-euclidean-borel; thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions; thm-complex-spectral-theorem-for-normal-endomorphisms; thm-dominated-convergence; thm-eulers-formula; thm-gaussian-integral; thm-indefinite-integral-of-a-nonnegative-function-is-a-measure; thm-monotone-convergence-for-the-integral; thm-nonnegative-series-bounded-partial-sums; thm-p-series-real-exponents; thm-plancherel; thm-spectral-theorem-for-unbounded-self-adjoint-operators; thm-tonelli-theorem-for-sigma-finite-product-spaces; thm-trace-class-is-a-two-sided-banach-operator-ideal; thm-trace-is-absolutely-convergent-and-basis-independent; thm-unbounded-borel-functional-calculus.

I also inspected the current source passages cited for P2: Teschl, §2.1; Tong, §§3.2–3.3, including §3.3, “Measurement”; and Binney and Skinner, §1.4, “Measurement.” The source review covered the cited locations, not every chapter of those books.

## Independent review and repairs

1. In lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues, Proof step 1.2 called the sets C_n = {μ : |μ−λ| ≥ 1/n} a disjoint union. They are nested. I replaced the invalid “disjoint union” use with the disjoint sets D_1=C_1 and D_n=C_n\C_{n−1}; each is contained in a set whose scalar measure was proved zero, so countable additivity now applies exactly as stated.

2. In pthm-nrqm-observables-born-outcome-law-properties, Facts & Assumptions [F2] attributed “an outcome belongs to the spectral support” to P2 clauses (i)–(iii). That sentence is not in the current P2 carrier; the spectral-support consequence is supplied separately by [F5]. I removed the inaccurate attribution and kept the P2 paraphrase to clauses P2 actually states.

3. In pthm-nrqm-observables-position-and-momentum-outcome-laws, the slice-density formulas were presented as pointwise functions of an L2 equivalence class. I specified that the position and momentum densities are representative-independent L1 equivalence classes and that their displayed slice formulas hold almost everywhere. The proof now says how Tonelli gives these classes.

4. The same position/momentum theorem said an exact coordinate value “is not an outcome” when it had proved only that every singleton has probability zero. A nonatomic probability law on R can assign zero measure to each singleton while retaining R as its outcome space. I changed the statement to the proved claim: each coordinate law is atomless, which does not remove R from its Borel outcome space.

I updated the affected derivation records and step references in research/physics-cm-qm-gr-79-2026-10-11-batch-45.proof-contracts.json. The three repaired items had no verification.judge field to remove.

Checks after the edits:

- Reflow and precheck passed for all three changed items. The position/momentum proof initially needed the checker’s canonical supplier-before-consumer phase numbering; I adopted that numbering and reran reflow and precheck successfully.
- The final proof-layout run covered all three changed items: 17 steps, 0 defects.

No reported experiment or observed dataset appears in this batch. The model calculations are explicitly conditional; no measurement, apparatus performance, uncertainty estimate or empirical comparison is invented.

## Findings not edited

1. def-nrqm-observables-framework-observable-and-outcome-law, Definition clause (c), final sentence: the item first defines an exact value λ as the Borel singleton {λ} with probability μ^A_ρ({λ}), then says an exact value of a no-eigenvalue observable is “outside the assignment.” The same assigned definition gives the outcome law on Borel subsets of R, and the position/momentum theorem proves zero singleton probability, not absence of real-valued outcomes. This conflates no normalizable eigenvector (and no zero-width detector record under P2(iii)) with no coordinate in the law’s outcome space. I left this Definition unchanged because revising it changes a physical public interface and requires direct/indirect consumer review across later batches, outside this dispatch’s batch-45 repair scope.

2. post-nrqm-framework-observable-and-probability, Postulate clause (iv) and Sources: the source list is the current set of references for P2. The cited locations reviewed here support sharp/self-adjoint or ideal eigenbasis measurements and their Born probabilities: Teschl, §2.1, pp. 55–58 ([author PDF](https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf)); Tong, §3.3, pp. 76–78 ([author PDF](https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf)); and Binney and Skinner, §1.4, pp. 15–18 ([author PDF](https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf)). Clause (iv) additionally adopts finite families of bounded positive effects F_a with Σ_a F_a=I and probabilities tr(ρF_a), but the listed citations do not supply that effects/finite-outcome extension or identify it as an independently sourced assumption. The assigned consumer def-nrqm-observables-framework-observable-and-outcome-law reaches P2 and mentions clause (iv) only to defer its development. I did not edit P2 because it is assigned to batch 43.

## Page verdicts

- qm-observables-and-born-probabilities: hold for the unedited exact-value wording in its assigned Definition item, clause (c). The page summary itself describes zero singleton probability and the no-density/no-eigenbasis limits accurately; the remaining summaries are conditional and mathematically supported by the reviewed items.
- qm-observables-and-born-probabilities-examples: pass. Its model computations are correctly separated from observations. The Gaussian-bin and moment examples state model probabilities, not observed frequencies; the counterexample is limited to raw non-normalizable plane-wave/delta objects.

## Blocker and coverage limit

The Definition finding requires consumer review beyond batch 45 before an interface repair. The P2 source finding belongs to batch 43. Neither prevents this reader report from completing the assigned inventory.

The dependency closure contains 1,986 items because P5 and related framework suppliers reach broad mathematical and physical branches. I checked every assigned carrier, the directly used published mathematical statements/definitions, and the current-run draft suppliers relevant to the assigned claims; I did not inspect every transitive published proof or unrelated branch in that closure.
