# Batch 15 authoring notes — Empirical-Process Complexity

Run mathematical-statistics-foundations-37, beta batch 15. Source assignment hash supplied by the dispatch: dd05d82b8e5bf49626aa96d504293f4afc76b61792a92c3d8eaa81be00ba597c. Controlling direction: research/mathematical-statistics-foundations-37-owner-authoring-direction.md.

## Controlling plan and conflict record

The current research/plan-mathematical-statistics-track.md MSF-19 design controls the scope and proof routes. It requires empirical and Rademacher processes with a countability/outer-expectation convention; independent-process convex-moment symmetrization with factor 2 inside Phi; one-sided contraction with factor L and no zero-at-zero condition; a separate absolute contraction statement with zero-at-zero and factor 2L; the finite-class [0,1] deviation bound; and the finite-r logarithmic VC-subgraph entropy theorem with finite traces as the only use of Sauer–Shelah.

research/plan-spec.json and the assigned task both list four A-page prerequisites: concentration, asymptotic convergence, independence/Borel–Cantelli, and linear algebra methods in combinatorics. The older research/mathematical-statistics-foundations-37-planning-scope.json omits linear-algebra-methods-in-combinatorics from MSF-19. This omission is recorded as a planning-scope conflict; this batch retains all four controlling prerequisites.

The owner’s Sauer–Shelah resolution controls over older dossier/task wording. The set-class supplier proves the exact all-finite-r form
[K(2/epsilon)^r log(3e(2/epsilon)^r)]^(V-1);
the coarser (A/epsilon)^(ArV) envelope bound is also stated. The earlier r-independent exponent is not used. Wellner Theorem 8.1 inequality (2) is proved in full; the sharper inequality (3), which is stated without proof in the inspected notes, is not imported.

## Inventory and dependency levels

The batch has 15 A items and 3 B items. Item levels are computed from in-batch item dependencies only, as required; the maximum item level is 4. Items are listed supplier-first in the batch manifest. No cycle was found.

- Level 0: def-empirical-process-and-rademacher-process; def-vc-class-of-sets-and-index; lem-bounded-variable-hoeffding-mgf; lem-finite-grid-interval-discrepancy; lem-real-power-preserves-measurability.
- Level 1: cex-uncountable-class-has-nonmeasurable-empirical-supremum; def-covering-packing-bracketing-number-and-metric-entropy; def-one-sided-empirical-rademacher-complexity; def-vc-subgraph-class-and-index; thm-finite-class-uniform-deviation; thm-independent-process-symmetrization.
- Level 2: cex-vc-entropy-exponent-cannot-be-uniform-in-r; ex-finite-class-rademacher-and-uniform-deviation; lem-packing-covering-number-comparison; thm-one-sided-coordinate-rademacher-contraction.
- Level 3: lem-vc-set-covering-entropy; thm-absolute-rademacher-contraction.
- Level 4: thm-vc-covering-entropy.

The exact per-item dependencies and labels are in research/mathematical-statistics-foundations-37-batch-15.pages.json and match the authored item frontmatter. The item-level dependency calculation is separate from the page-context reconciliation recorded below under owner E12.

## Cross-batch interfaces and initial construction readiness

Owner E12 round1 supersedes the initial author-time open/draft page-context hold. The actual batch-13 asymptotic and batch-14 concentration A pages, current manifests and relevant actual interfaces are present. Their native initial-author results report successful completion at 2026-10-14T03:23:34.029Z and 03:20:01.496Z respectively. Both pages correctly remain draft under the owner direction. Independent review and publication are separate later obligations; neither is a prerequisite to documenting initial construction readiness.

All 18 current batch-15 item manifest entries and their proof-contract citation inventories have no logical dependency on any batch-13 or batch-14 item. These two declared page prerequisites remain in the controlling plan and batch manifest as available authored context. Their cross-batch context rows now record verified construction interfaces, without granting mathematical acceptance or waiving subsequent review/gates.

The actual thm-hoeffding-independent-bounded-sums carrier explicitly assumes AC through its conditional-Hoeffding supplier. Batch15 does not use that branch. The finite-class deviation theorem instead uses the locally proved unit-interval MGF bound, finite independence factorization, Markov and the finite union bound, preserving its choice-free claim. The actual OP/asymptotic-distribution definitions are present; batch15 imports no asymptotic-distribution, consistency or identification result. No mathematical missing prerequisite was confirmed in the shared stale-readiness reason.

The published independence/Borel–Cantelli and linear-algebra-methods prerequisites retain their author-time supplier evidence; E12 changes neither their bodies nor the approved Sauer–Shelah route. Root owns hashes and readiness reconciliation for all 18 same-reason item records. Original escalation records remain historical. This update changes no item, theorem/definition interface, manifest, contract, native state or review verdict.

## Proof-route and convention notes

- Pollard 1990 Theorem 2.2 and Wellner Lemma 5.1 support the expectation symmetrization argument. The page does not promote their separate tail forms without the added assumptions.
- Pollard 1990 Theorem 5.7 has a 3/2 Phi(2 sup) form; with Phi the identity it gives factor 3. It is not cited as the source of the planned factor-2 absolute result.
- Mohri–Rostamizadeh–Talwalkar Lemma 5.7 states one-sided contraction with factor L and no zero-at-zero condition. Its printed approximate-maximizer line uses (1-epsilon) sup, which does not establish an approximation when a conditional supremum is negative. The local proof instead averages over the selected sign exactly, replaces coordinates successively, and takes finite limits for countable classes. The source statement is retained, but that defective proof line is not.
- Wellner Theorem 8.2 transfers a set-class bound by an envelope-weighted product measure and a continuous auxiliary coordinate. In this repository the continuous interval-measure route would invoke a supplier explicitly qualified by Countable Choice. The local transfer preserves the envelope weighting and product/Tonelli argument but uses a finite trapezoidal grid; lem-finite-grid-interval-discrepancy supplies the required uniform interval error. This keeps the stated finite-r theorem choice-free.
- The finite Bernoulli example computes the one-sided sign supremum directly. The threshold counterexample is finite and choice-free; the uncountable measurability example explicitly assumes Countable Choice for closure of the countable-cocountable family under countable unions.

## Source reading and retrieval record

Complete relevant source reasoning was inspected, not only abstracts or theorem statements:

- Pollard, Empirical Processes: Theory and Applications, Chapter 2 Theorem 2.2 and Chapter 5 Theorem 5.7, with full proofs.
- Wellner, Empirical Processes: Theory and Applications, Lemma 5.1, Lemmas 5.2–5.3, Section 6 conventions, Theorem 8.1 inequalities (2)–(3), and Theorem 8.2, including the complete proofs where available; the sharper inequality (3) is specifically not claimed as proved.
- Pollard, Probability Tools, Tricks, and Miracles (2026), §§13.2–13.3 and 14.2/14.5, including countability warnings and finite-trace Sauer–Shelah use.
- Mohri–Rostamizadeh–Talwalkar, Foundations of Machine Learning, second edition, Definition 3.1 and Lemma 5.7 with the full printed proof. The official author page was located; the browser reader timed out on its HTML and did not expose the Dropbox PDF redirect. The author-linked PDF was then downloaded directly and inspected in full (505 pages; SHA-256 1a986e004028786686d51730693f200429d31424e687c5e18d19e28511852904). This source was recovered, not dropped or escalated.
- Rigollet–Hütter, High-Dimensional Statistics: Lecture Notes, Lemma 1.8 and Theorem 1.9, with the complete MGF proof.

The per-source locators, harvested results and dispositions are recorded in research/mathematical-statistics-foundations-37-batch-15.coverage.json. Source retrieval stamps and the final results of the required scoped checks are recorded after those checks. No source was marked dropped, and no source_resolution escalation was made because retrieval succeeded.

## Capacity and scope

The 15-item A page and 3-item B page are below the 100-item limit. No shared plan, published carrier, engine state, verdict or other batch file was edited. Completion here is an authoring handoff only; it is not independent approval.

## Scoped check results and run-wide blockers

- Batch-15 item-level dependencies: pass, 18 items, no cycles or label mismatches, maximum level 4.
- Proof layout: pass, 18 explicitly changed items and 60 numbered steps, 0 defects.
- Source coverage: pass, 2 pages and 24 harvested results, 0 errors and 0 warnings.
- Source retrieval: pass, 9/9 URLs fetch-verified and stamped; 0 documented drops.
- Batch-scoped proof-contract inventory: pass, all 18 IDs are covered and all 13 proof-bearing items have contract records with numbered derivations.

The whole-run checks still have unrelated pre-existing blockers; no other batch files were edited:

- The full item-dependency checker reports 24 other-batch label errors: def-randomized-conditional-p-value; thm-conditional-randomized-p-uniformity; def-conditional-test-given-statistic; thm-conditioning-on-a-nuisance-sufficient-statistic; thm-conditional-test-controls-unconditional-level; ex-fishers-exact-test-from-two-binomial-samples; thm-z-estimator-consistency; def-dqm-submodel-through-a-law; thm-dqm-score-mean-zero; def-tangent-set; def-tangent-space; thm-tangent-space-is-closed-linear-subspace; def-nuisance-tangent-space; def-nuisance-tangent-orthogonal-complement; ex-bounded-scores-generate-unrestricted-tangent-space; ex-regular-bernoulli-submodel-dqm-score; ex-boundary-score-cone-and-linear-tangent-space; def-huber-covariance-model; lem-huber-covariance-mixture-is-a-probability-measure; lem-gaussian-kullback-leibler-covariance-formula; lem-clean-dense-gaussian-covariance-minimax-lower-bound; lem-clean-block-sparse-gaussian-covariance-minimax-lower-bound; lem-huber-covariance-contamination-modulus-lower-bound; ex-dense-huber-covariance-model. It reports no batch-15 item errors.
- The whole-run proof-contract-coverage command stops at the unrelated missing carrier thm-convolution-bound-for-regular-estimators, which is still listed in batch 23's manifest. The batch-15-only contract inventory passes as recorded above.
- The whole-run batch-dependency check reports its shared derived file stale after the authored manifest dependency updates. It was left owner-managed; the batch-15 item graph was recomputed and checked locally instead.
- Step-1 decision records: all 18 batch-15 items have non-owner escalation records with their exact item dependencies and page requirements examined. They were written before Owner E12 round1 verified the two page-context rows; the records remain historical, and the owner retains hash/readiness reconciliation, as recorded above. The whole-run Step-1 check includes 446 items outside this batch and remains open; it reported 464 total and 208 ready at check time, so this handoff makes no whole-run closure claim.
