# Step 3a reader report — batch 55

Run: **statistical-models-experiments-62**  
Assignment: **reader-55**  
Status checked from tools/autopilot: the run is live in Step 3a; batch 55 had no reader artifact yet.

## Opened inventory

Run context opened as evidence, not verdict: the batch 55 manifest, proof contracts, cross-batch dependency record, coverage record and author notes, plus the batch 52 and 54 manifests used to classify their two current-run suppliers.

Assigned pages:

- library/statistical-models-and-experiments/fdr-control-under-dependence.md (A)
- library/statistical-models-and-experiments/fdr-control-under-dependence-examples.md (B)

Their five required pages were opened:

- library/statistical-models-and-experiments/valid-p-values-bonferroni-and-simultaneous-coverage.md
- library/statistical-models-and-experiments/benjamini-hochberg-independent-fdr-control.md
- library/mathematical-statistics/finite-sample-tests-neyman-pearson-and-valid-p-values.md
- library/probability/conditional-distributions-and-regular-conditional-probability.md
- library/computability-theory/approximation-algorithms-and-gap-reductions.md

All nine assigned items were read in supplier-before-consumer order:

- alg-benjamini-yekutieli-step-up-procedure
- lem-unit-interval-is-standard-borel
- lem-step-up-leave-one-out-rejection-partition
- def-prds-on-true-null-coordinates
- thm-by-fdr-control-under-arbitrary-dependence
- lem-bh-prds-null-contribution-bound
- thm-bh-fdr-control-under-prds
- cex-pairwise-positive-correlation-does-not-imply-prds
- ex-by-bh-threshold-comparison-under-independent-null-pvalues

Direct suppliers used in the item facts and proofs were opened. These include the current-run batch 52 item def-null-valid-p-value-and-fwer-fdr and batch 54 item alg-benjamini-hochberg-step-up-procedure; neither has a defect. Other opened supplier items were def-statistical-experiment, def-p-value, def-harmonic-number-for-set-cover-analysis, thm-p-value-superuniformity, cor-expectation-of-an-indicator-is-probability, cor-expectation-linearity-monotonicity-and-modulus-bound, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-conditional-law-given-a-random-element, lem-finite-products-of-standard-borel-spaces-are-standard-borel, lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable, thm-existence-of-regular-conditional-distributions-for-standard-borel-targets, and def-axiom-of-choice.

For the elementary measurability, topology, countability and support arguments I opened the relevant definitions or statements in def-borel-sigma-algebra, def-measurable-function-between-measurable-spaces, def-product-sigma-algebra-and-finite-product-sigma-algebras, thm-seven-generators-of-the-borel-sigma-algebra-on-r, lem-real-line-is-a-metric-space, thm-reals-cauchy-complete, thm-rationals-countable, lem-rat-embeds-dense, thm-reals-ordered-field, def-real-order, lem-of-add-order, def-interval, def-open-and-closed-in-r, def-polish-space, def-standard-borel-space, def-isometry-and-metric-embedding, def-subspace-topology-top, thm-borel-sigma-algebra-of-a-subspace-is-the-trace, def-countable, def-equinumerous, lem-subset-of-countable, lem-countable-iff-surjection-from-n, thm-product-of-countable, and thm-finite-and-countable-subadditivity-of-measures.

## Mathematical review

- The BY algorithm has the stated finite step-up inputs, ordered ranks, cutoffs and rejection output. Its theorem proof is valid for arbitrary dependence and marginally superuniform true-null p-values. The finite CDF summation-by-parts step gives each true-null contribution at most q/m; it does not assume that each interval ((j-1)t,jt] has mass at most its width.
- The unit-interval lemma proves closedness, rational density, completeness and the trace Borel identity needed for standard Borel status. Its countability and metric steps use the cited suppliers with the stated domains.
- The generic rejection partition has Borel order statistics, the stated leave-one-coordinate event identity, a disjoint partition, and increasing cumulative sets. I repaired the endpoint and inserted-zero details below.
- The PRDS definition states its measurable structure and conditional-law convention. The relevant finite-product standard-Borel and regular-conditional-law suppliers provide the value-space interface, with AC carried explicitly.
- The BH single-null contribution proof is valid: it proves full marginal mass of the support, compares lower-tail averages only for increasing events, handles zero-probability cutoffs, and uses a finite induction to obtain the q/m bound. Summing these contributions gives the BH theorem under the stated true-null PRDS hypothesis.
- The four-state counterexample has valid marginal p-values, covariance 28/625 > 0, and forced conditional probabilities 0,1,0,1 on an increasing Borel set, so it refutes the pairwise-covariance implication without making an FDR claim.
- The independent finite example has superuniform marginals and an explicit monotone conditional kernel. On its positive-probability event the BH rejection count is three and the BY count is two; its stated FDR bounds follow from the two proved theorems.

The A-page summaries match these results. The two-sided-Gaussian caveat is phrased as absence of a blanket PRDS guarantee, not as a claim that every two-sided Gaussian model fails PRDS. The B-page accurately previews its counterexample and threshold comparison.

## Edits and evidence

1. In items/lem-step-up-leave-one-out-rejection-partition.md, step 2.1 no longer refers to the undefined rank p_(m+1) when k=m; it handles that endpoint directly and retains the rank-(k+1) contradiction for k<m. Steps 3.1 and 4.1 now justify that an inserted zero is rejected even when other coordinates tie at zero: all zero-valued ranks pass because every critical value is positive. I synchronized the corresponding step derivations in research/statistical-models-experiments-62-batch-55.proof-contracts.json. The Statement and Definition did not change, so no consumer statement/definition check was triggered. No verification.judge record was present to remove.
2. I added the required blank line between numbered steps in all seven proof-bearing assigned items. These changes preserve the mathematics and references. Reflow initially collapsed the counterexample's Markdown state table; I restored the four separate rows and rechecked the item. This correction preserves the original witness data.

Reflow completed for all seven changed items; six reported unchanged and the counterexample was reflowed before its table was restored. Precheck passed for all seven items, including a final post-restoration precheck of the counterexample. The final single proof-layout run covered the seven changed item paths: 28 proof steps, zero defects.

## Source checks

- Benjamini and Yekutieli, “The Control of the False Discovery Rate in Multiple Testing under Dependency,” Annals of Statistics 29(4) (2001): Section 2.2 and Theorem 1.2 give the PRDS condition and BH conclusion; the complete Section 4 derivation gives the increasing-set folding argument. I read the author-uploaded full text at [ResearchGate](https://www.researchgate.net/publication/38348313_The_control_of_the_false_discovery_rate_in_multiple_testing_under_dependency), article lines 360–396 and 1293–1546. Section 3, Case 3 and Case 4, lines 849–884, supports the page's two-sided caveat. The paper's Section 5 Theorem 1.3 provides the harmonic correction; its classic continuous-uniform interval argument is broader here only after the local proof's separate superuniform-CDF summation-by-parts step.
- Katsevich, [STAT 9610 lecture notes](https://katsevich-teaching.github.io/stat-9610-fall-2023/assets/lecture-notes.pdf), §6.3.2, PDF pp. 138–139: I read the full BY arbitrary-dependence calculation and the PRDS theorem context. The lecture's interval-mass step is for exact-uniform null p-values; the local proof supplies the discrete-superuniform extension.
- Benjamini, [“Discovering the False Discovery Rate” slides](https://sites.uclouvain.be/IAP-Stat-Phase-V-VI/PhaseV/download/Leoven1.pdf), slides 33–35 and 62: I checked the PRDS definition, folding proof sketch and warning that absolute values of correlated normals need not be PRDS when true and false nulls coexist.
- Marker, [Descriptive Set Theory notes](https://www.math.uic.edu/~marker/math512/dst.pdf), §1 Definition 1.1 and the examples on PDF p. 2, and §2 Definition 2.2 on PDF p. 14: these give the Polish and standard-Borel definitions and list [0,1] as a Polish example; the local interval proof establishes the needed fact directly.

## Uneditable findings, page verdicts and blocker

Uneditable defects found: none. The two draft dependencies from current-run batches 52 and 54 were inspected and are not defective; no published dependency defect was identified.

- fdr-control-under-dependence (A): pass after the partition proof repair. Its BY, PRDS and Gaussian-scope summaries are supported.
- fdr-control-under-dependence-examples (B): pass. Both example summaries accurately describe the assigned constructions.

Blocker: none.

Coverage limitation: I reviewed all assigned items/pages and the direct supplier statements used by their proofs, including the regular-conditional-law interface. I did not independently audit every proof in the full 548-item transitive dependency closure; this report is not a new audit of that entire closure.
