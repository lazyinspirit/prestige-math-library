# Step 3a reader report — batch 30

Run: `machine-learning-all-101-2026-10-19`  
Batch: `30`  
Role: `reader-30`

## Result

Reviewed both assigned pages, all 37 assigned items in dependency order, their direct item suppliers, the additional Lasso-definition supplier needed to check the least-squares example, and the four page-level prerequisites of the A-page. Repaired one false descriptive clause in an assigned example. No unedited defect or workflow blocker remains in batch 30.

The draft false-statement item `fs-scaffold-general-convex-uniform-output-round-headline` remains present, with its full counterexample, for the 3b owner to adjudicate. It records a potential defect in Karimireddy et al., Theorem III (PDF p. 5), whose general-convex headline includes the `NF/S` term. The counterexample targets the constant-step, uniform-server-iterate reading and its proof was checked; the reader did not withdraw or rewrite the item.

## Assigned pages and items opened

Both assigned page files were opened. Each contains YAML frontmatter only, has `page_layout: compact-v1`, and matches the current manifest inventory.

- A-page `ml02-federated-optimization`: 33 items; no examples.
- B-page `ml02-federated-optimization-examples`: no items; four examples.

All assigned items were opened in the manifest's dependency order:

- Level 0: `def-federated-objective-and-client-sampling`, `alg-local-sgd`, `lem-relaxed-euclidean-squared-norm`, `lem-finite-martingale-difference-sum-variance`, `lem-local-sgd-weighted-recursion`, `lem-federated-recursion-averaging`, `lem-smooth-convex-gradient-difference`, `lem-convex-gradient-step-nonexpansive`, `def-bounded-client-gradient-dissimilarity`.
- Level 1: `alg-fedavg`, `alg-scaffold`, `lem-uniform-client-sampling-moments`, `lem-local-sgd-virtual-progress`, `lem-local-sgd-sampling-variance`, `lem-local-sgd-client-drift`, `lem-perturbed-strong-convexity`, `lem-standard-client-dissimilarity-implies-gap-form`, `ex-local-versus-periodic-synchronization`, `ex-client-data-locality-does-not-imply-dp`.
- Level 2: `thm-local-sgd-convex-round-complexity`, `lem-fedavg-one-round-progress`, `lem-fedavg-local-drift`, `def-scaffold-analysis-trajectory-and-errors`, `fs-scaffold-general-convex-uniform-output-round-headline`, `ex-two-client-shifted-optima`, `ex-scaffold-control-correction`.
- Level 3: `thm-fedavg-under-gradient-dissimilarity`, `lem-scaffold-control-tracking-identity`, `lem-scaffold-convex-control-lag`.
- Level 4: `lem-scaffold-convex-server-variance`, `lem-scaffold-convex-client-drift`, `lem-scaffold-nonconvex-server-variance`, `lem-scaffold-nonconvex-client-drift`.
- Level 5: `lem-scaffold-convex-round-progress`, `lem-scaffold-nonconvex-control-lag`.
- Level 6: `lem-scaffold-nonconvex-round-progress`.
- Level 7: `thm-scaffold-convex-and-nonconvex-rates`.

## Supplier and source inventory

Opened the 20 distinct direct item suppliers used by the assigned items:

`cor-expectation-agrees-with-the-finite-weighted-sum`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `def-axiom-of-choice`, `def-conditional-expectation-as-an-ae-class`, `def-convex-and-strictly-convex-functions-on-euclidean-sets`, `def-differential-privacy-and-adjacency`, `def-euclidean-inner-product`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-filtration-and-filtered-probability-space`, `def-independent-random-elements`, `def-linear-regression-objectives`, `def-measurable-space`, `def-measure-kernel-and-probability-kernel`, `def-probability-measure`, `lem-finite-sum-gradient-is-average`, `lem-l-smoothness-descent-inequality`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-finite-jensen-inequality-in-euclidean-space`, and `thm-taking-out-what-is-known`.

Also opened `def-lasso-estimator`, used by the out-of-batch draft definition `def-linear-regression-objectives`, and checked page metadata for the four A-page requirements: `ml02-differential-privacy`, `ml02-linear-sparse-models`, `probability-spaces-random-variables-and-expectation`, and `variance-reduced-finite-sum-and-adaptive-gradient-optimization`. The required-page metadata was checked as context; no prose from those pages was used as a proof premise.

Reviewed the current batch proof contracts against the corresponding authored steps and exact supplier interfaces. The contract file has 36 entries for 37 assigned items; `def-bounded-client-gradient-dissimilarity` has no proof section, so it has no proof-bearing contract obligation. The repaired fact below has no contract assertion or proof-step row mirroring its former adjective; the existing supplier citations, derivations, and finite-smoke statement remain current. No stale `verification.judge` record existed on the repaired item.

Primary sources consulted for claims whose exact interfaces or scope mattered:

- Stich, *Local SGD Converges Fast and Communicates Little*: Definition 2.1 and Algorithm 1 (PDF p. 3), Theorem 2.2, Corollary 2.3 and mini-batch Remark 2.4 (PDF p. 4), [arXiv v3](https://arxiv.org/pdf/1805.09767v3). The local three-term bound and the minibatch variance factor were checked against the current local proofs.
- McMahan et al., *Communication-Efficient Learning of Deep Networks from Decentralized Data*: §2 and Algorithm 1 (PDF pp. 3–4), [PMLR PDF](https://proceedings.mlr.press/v54/mcmahan17a/mcmahan17a.pdf). Its finite-sum objective, client-size weights and local-update schedule agree with the explicit count-weighted FedAvg branch; the local page also states its unselected-client convention directly.
- Karimireddy et al., *SCAFFOLD*: Theorem III (PDF p. 5), Algorithm 1 (PDF p. 3), output rule (22) and the cited Appendix E.1/E.2 lemma interfaces, [author-hosted PDF](https://cs.nyu.edu/~mohri/pub/scaffold.pdf). The source's general-convex headline includes the `NF/S` term; the assigned false-statement item preserves that literal clause and supplies a counterexample to its uniform-output, constant-step reading. The locally proved convex and nonconvex potential recurrences were checked independently.
- Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, Definition 2.4 (printed p. 17), [PDF](https://privacytools.seas.harvard.edu/sites/g/files/omnuum6656/files/privacytools/files/the_algorithmic_foundations_of_differential_privacy.pdf). The ordered neighboring-database event inequality and pure-DP specialization match the local definition.

## Review and page verdicts

- **A-page `ml02-federated-optimization`: pass.** Its title, requires list, and all 33 item placements agree with the manifest; it has no body summary. The local-SGD, FedAvg and SCAFFOLD definitions specify the inputs and update rules used by their local results. The FedAvg equal-client theorem and its separate weighted-deployment branch are kept distinct. The convex and nonconvex SCAFFOLD recurrences were checked coefficient by coefficient against their stated supplier lemmas and hypotheses.
- **B-page `ml02-federated-optimization-examples`: pass.** Its four example placements agree with the manifest; it has no body summary. The finite trajectories, least-squares minimizer, control correction and exact-count privacy witness are directly computed and match their item statements.
- **Statement formatting:** Complete definitions, statements and example descriptions are uninterrupted by hyperlinks; references follow in their dedicated sections. Proof supplier links remain in Facts & Assumptions and arguments.
- **Diagram review:** `alg-scaffold` is the only TikZ diagram in the assigned items. Its server-to-client `(x,c)` arrow and client-to-server `(Δx_i,Δc_i)` arrow match the procedure. The equations, not the diagram, define the update, and the proof is independent of it.
- **False statement:** `fs-scaffold-general-convex-uniform-output-round-headline` is intentionally classified as a false statement and its exact finite-sampling counterexample was checked. The source clause is retained for owner adjudication rather than removed.

## Edit and validation

- In `items/ex-client-data-locality-does-not-imply-dp.md`, Facts & Assumptions `[F2]` called the exact-count release's output space `finite` and named it `ℕ`. The DP definition has databases valued in `ℕ₀`, and their finite-support counts range over the countably infinite `ℕ₀`; the kernel is therefore correctly described as taking values in the countable output space `ℕ₀` with its power-set sigma algebra. The proof's measurable event `{1}` and privacy violation are unchanged.
- `node tools/tsx-run.mjs tools/reflow.mts items/ex-client-data-locality-does-not-imply-dp.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-client-data-locality-does-not-imply-dp.md`: pass, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/ex-client-data-locality-does-not-imply-dp.md`: 1 item, 2 steps, 0 defects.

## Unedited defects and blocker

No unedited defects found in the assigned batch. No blocker.

## Coverage note

The complete assigned item/page inventory, all direct item suppliers, the additional Lasso definition supplier, the four required-page metadata records, the relevant source locators, and the current batch contracts were reviewed. I did not independently re-audit every transitive prerequisite of already-established published suppliers beyond the exact current interfaces and proof arguments used by this batch.
