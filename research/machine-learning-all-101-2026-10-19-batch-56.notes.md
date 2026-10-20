# Batch 56 authoring notes

Run `machine-learning-all-101-2026-10-19`; assigned pair `self-supervised-and-contrastive-representation-learning` only. All carrier work remains draft and within the assigned A/B pages.

## Controlling plan and conflicts

- Read the complete current ML-51 section in `research/plan-machine-learning-track.md`, lines 422–423. Its statement, proof route, limitations and source scope match the A-page `description` in `research/plan-spec.json` exactly.
- The generated task points to line 404, which is stale; the current ML-51 heading starts at line 422.
- The current plan-spec and task page metadata list only `rademacher-complexity-and-generalization` in page-level `requires`, while the ML-51 design also names ML-01 prediction/risk/ERM interfaces. I preserved the declared page-level edge and added the actual ML-01 definition/risk/measurability items as direct dependencies of the local framework definition. This conflict is recorded in `batch-56.dependency-inputs.json`; no shared plan was changed.
- Preserve the design's one independent marginal negative per positive pair, IID triplets, bounded representations, hinge/logistic source losses, attained measurable ERM, class-collision term, uniform class-label law for average binary tasks, within-class covariance term, and empirical-only SimCLR statements. The optional margin result retains its class-conditional sub-Gaussian and mean-margin assumptions.

## Current run and supplier evidence

- `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run machine-learning-all-101-2026-10-19 --state-dir .autopilot/machine-learning-all-101-2026-10-19` reports a running Step 1 held at `1-scaffold` by the existing owner-repair/recertification blocker. This is outside batch 56. The pre-authoring snapshot showed both assigned page inventories empty.
- Ran the ordinary full-run `node tools/step1-decisions.mjs check --run machine-learning-all-101-2026-10-19`; it exited 1 because the full run is not closed and many other pages/items remain open. The latest targeted parse reports 959/1,107 items ready, `closed: false`. It contains no open work row for the inspected current suppliers `def-supervised-learning-problem`, `def-population-and-empirical-risk`, `lem-population-and-empirical-risk-are-measurable`, `def-rademacher-complexity`, or `thm-rademacher-uniform-generalization`. Their actual bodies were inspected. This is current Step-1 readiness evidence, not mathematical acceptance or publication.
- Batch scheduling input is `e99db8f61043e163fd8503e5483a07018104e18d75cefaf3852dd84b4dc40d68`; the task declares batch level 3 and prerequisite batch 5. The item inventory, exact direct deps and levels were written to `batch-56.pages.json` and `batch-56.dependency-inputs.json` before item carriers.
- Recomputed the run-wide batch graph read-only after authoring. Its batch-56 row is still level 3 but requires batches `2` and `5`, because the ML-01 items in batch 2 are direct logical suppliers. This differs from the dispatch prerequisite list `[5]`; the local sidecar preserves `batch_requires: [5]` and records the recomputed graph as `observed_dependency_batches: [2,5]`. The shared artifact has input hash `e4d05960c5b86ceb1b82760e9467a49cec1a7fab1824e1aa5b2a7cd2357f3618`, while recomputation yields `39a19bea9a9d8567c16c03f8f37da9c45d9beee74411022a13aee96df89e0307`. `batch-dependency-levels.mjs check` reports the run artifact stale; the sidecar records `scheduling_hash_conflict: true`. The shared scheduler artifact remains for owner reconciliation.

## Declared inventory and dependency levels

The A page contains 12 items; the examples page contains 5. Item levels are recomputed from the declared in-run item suppliers (batch 2 and batch 5) and local edges:

| Level | Items |
|---|---|
| 0 | `lem-contrastive-hinge-and-logistic-loss-properties`; `lem-vector-rademacher-contraction-for-bounded-classes` |
| 3 | `def-latent-class-contrastive-learning` |
| 4 | `lem-mean-classifier-loss-from-contrastive-loss`; `lem-contrastive-class-collision-deviation`; `lem-subgaussian-contrastive-margin-comparison`; `lem-contrastive-uniform-generalization`; first four B-page examples |
| 5 | `lem-contrastive-empirical-minimizer-excess` |
| 6 | `thm-contrastive-representation-transfer-with-class-collisions`; `cor-contrastive-approximate-erm-transfer` |
| 7 | `thm-contrastive-representation-transfer-under-within-class-deviation` |
| 8 | `cor-subgaussian-contrastive-representation-transfer` |
| 9 | `ex-logistic-loss-not-covered-by-hinge-margin-comparison` |

The local level-3 definition directly consumes the current level-0/1/2 ML-01 suppliers and the level-0 Rademacher definition. The uniform-generalization lemma consumes the batch-5 level-2 high-probability Rademacher theorem, with AC declared. The complete graph and exact edge inventory are in the dependency-inputs sidecar.

## Sources read and evidence status

- Saunshi et al., *A Theoretical Analysis of Contrastive Unsupervised Representation Learning*, official PMLR full paper, §§2–6; Definitions 2.1–2.3, Lemmas 4.2–4.4, Theorems 4.1/4.5, Lemma 5.1 and Corollary 5.1.1 were read at their complete relevant passages. Section 6 was checked to keep the assigned one-negative result separate from the paper's multiple-negative and block-similarity extensions.
- Saunshi et al., official PMLR supplement, Appendix A.1–A.4; the complete class-collision estimate, sub-Gaussian margin comparison, and bounded-loss/vector-contraction generalization proof were inspected. A.4's block-loss Jensen comparison was read and marked out of scope. The local proof supplies its own finite-dimensional vector-contraction derivation instead of using the source citation as a proof.
- Mohri, Rostamizadeh and Talwalkar, *Foundations of Machine Learning*, 2nd ed., complete author-linked book PDF, Chapter 3 §3.1, Definitions 3.1–3.2 and Theorem 3.3 with complete proof, printed pp. 30–33. This is the independent book treatment of the Rademacher uniform-generalization step.
- Maurer, “A vector-contraction inequality for Rademacher complexities,” complete arXiv full text, Theorem 3, Corollary 4 and the complete Lemma 7 / induction proof. The library lemma proves a sufficient finite-dimensional constant-`sqrt(3)` version directly; Maurer's sharper `sqrt(2)` result is a source comparison, not a proof premise.
- Lei et al., “Generalization Analysis for Contrastive Representation Learning,” complete arXiv full text, Theorem 4.6 and Appendix A proof. This is an independent contrastive generalization treatment with a different bounded `k`-negative unsupervised-risk target; it does not establish the latent-class downstream mean-classifier bounds here.
- Chen et al., “A Simple Framework for Contrastive Learning of Visual Representations,” official PMLR paper, §§2–4, including the batch NT-Xent setup, augmentation experiments and projection-head evaluation; official supplementary Appendix B.4 was inspected. Claims are reported empirical outcomes only. The plan's appendix pages 10–18 were not used; Appendix B.4 is the relevant projection-head report.
- A finite-space Markov supplier was checked and rejected for the sub-Gaussian tail step because the class-conditional laws are general probability measures. The authoring dependency uses the published integral Markov corollary, which has the required general-space hypothesis.
- Full bodies were manually downloaded and inspected from their URLs in `/tmp`. Ran `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-56.source-coverage.json --stamp`; all 11 source entries were fetch-verified, with no retrieval failures, drops or owner escalations. The per-source timestamp, byte count, hash and PDF page count are in the source-coverage file. The ordinary check mode also passed after stamping.

## Per-item progress

Items are appended here after completion, with their exact convention, direct dependencies, source locators, proof route, validation results and any unresolved check.

### Completed item: `lem-contrastive-hinge-and-logistic-loss-properties`

- Claim and convention: the source's one-negative hinge and base-2 logistic losses are convex, nondecreasing, have value 1 at zero, and admit common Lipschitz constant $L_0=1+1/\ln2$. On scores in $[-2R^2,2R^2]$, their oscillation is positive and at most $4L_0R^2$ for every $R>0$.
- Direct dependencies: `cor-second-derivative-characterises-convexity`, `def-natural-logarithm`, `def-real-exponential-function-and-e`, `lem-derivative-algebra-and-chain-rules`, `lem-mean-value-theorem-on-closed-interval`, `thm-derivative-of-exponential`, `thm-logarithm-derivative-and-integral`, `thm-natural-logarithm-laws`.
- Sources: Saunshi et al., PMLR 2019 §2.2 (official full PDF); MIT OCW 18.100B Lectures 15–16 (full notes PDF). The local derivative and range argument is explicit; no axiom is used.
- Decision: complete level-0 supplier; mathematical validation and scoped format checks remain pending.

### Completed item: `lem-vector-rademacher-contraction-for-bounded-classes`

- Claim and convention: a one-sided vector contraction inequality for bounded finite-dimensional trace sets, with common Euclidean Lipschitz constant $L$, no zero-at-zero condition, and fully general finite or infinite trace sets. The local proof uses the elementary finite-sign lower bound $\mathbb E|\sum_t\eta_tu_t|\ge\|u\|_2/\sqrt3$, so its valid constant is $\sqrt3L$; no unproved sharp Khintchine result is imported.
- Direct dependencies: `lem-cauchy-schwarz-for-finite-random-variables` only.
- Sources: Maurer, Theorem 3/Corollary 4 and full Lemma 7 plus induction proof, https://arxiv.org/pdf/1605.00251; Lei et al., Lemma A.1 and full contrastive application, https://arxiv.org/pdf/2302.12383. Their sharper $\sqrt2L$ bound is recorded as an independent source comparison, not used in place of the local proof.
- Decision: complete level-0 supplier; the argument is choice-free and extends to infinite bounded classes by finite sign-cube approximation. Mathematical validation and scoped format checks remain pending.

### Completed item: `def-latent-class-contrastive-learning`

- Claim and conventions: defines the measurable latent-class sampling kernel, $D_{\rm sim}$/$D_{\rm neg}$, one independent marginal negative, hinge/logistic contrastive losses, IID triplet empirical loss, unnormalized vector Rademacher complexity, average ordered binary tasks with a uniform label law, the mean classifier, collision probability/conditional collision law, and within-class covariance deviation. It states measurability of class means and covariances and justifies countable additivity and total mass one for the collision-conditioned law $\nu$. The atomic specialization is $\nu(\{c\})=\rho(\{c\})^2/\tau$; a zero-collision branch is defined with $s(f)=0$.
- Direct dependencies: `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-identically-distributed-and-iid-random-variables`, `def-moments-variance-and-covariance`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `def-population-and-empirical-risk`, `def-probability-measure`, `def-rademacher-complexity`, `def-supervised-learning-problem`, `lem-contrastive-hinge-and-logistic-loss-properties`, `lem-population-and-empirical-risk-are-measurable`, `thm-independent-random-elements-have-product-joint-law`.
- Sources: Saunshi et al., PMLR 2019 §§2–4 (definitions 2.1–2.3 and one-negative setup), https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf; Lei et al., contrastive model setup, https://arxiv.org/pdf/2302.12383. The sampling diagram labels conditional laws and separate independent class roots; no proof relies on it.
- Decision: complete level-3 definition on the A page. The class space diagonal and sampling mixtures are explicitly required measurable/well-defined; random risk/supremum measurability and future selectors are stated rather than inferred. Mathematical validation and scoped format checks remain pending.

### Completed item: `lem-mean-classifier-loss-from-contrastive-loss`

- Claim and convention: for one independent marginal negative and the source's uniform binary labels, conditioning positive and negative classes to differ gives contrastive loss at least the average binary mean-classifier loss. The proof explicitly averages the positive-label term and uses symmetry of the ordered distinct-class pair law for the negative-label term.
- Direct dependencies: `def-latent-class-contrastive-learning`, `lem-contrastive-hinge-and-logistic-loss-properties`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-independent-random-elements-have-product-joint-law`, `thm-jensen-inequality-for-expectation`.
- Source: Saunshi et al., PMLR 2019, Lemma 4.3 and its complete proof, https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf, checked against the local class-pair symmetry and uniform-label convention.
- Decision: complete level-4 choice-free lemma; no optimizer existence or training convergence is asserted. Mathematical validation and scoped format checks remain pending.

### Completed item: `lem-contrastive-class-collision-deviation`

- Claim and convention: $L_{\rm un}=\tau L^=_{\rm un}+(1-\tau)L^\ne_{\rm un}$; for $\tau>0$, convexity gives $L^=_{\rm un}\ge1$, while conditional covariance gives $L^=_{\rm un}-1\le\sqrt2L_0s(f)$. The zero-collision branch sets $s(f)=0$ and uses $L_{\rm un}=L^\ne_{\rm un}$.
- Direct dependencies: `def-latent-class-contrastive-learning`, `def-moments-variance-and-covariance`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `lem-contrastive-hinge-and-logistic-loss-properties`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-independent-random-elements-have-product-joint-law`, `thm-jensen-inequality-for-expectation`, `thm-linearity-of-the-lebesgue-integral-on-l-one`.
- Sources: Saunshi et al., main paper Equations (8)–(9), Lemma 4.4; complete Supplementary Lemma A.1 proof, https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf and https://proceedings.mlr.press/v97/saunshi19a/saunshi19a-supp.pdf. The local proof specializes to one negative and derives $c_0=\sqrt2L_0$ directly from the covariance expansion.
- Decision: complete level-4 lemma. The proof uses product-law independence, Fubini on bounded probability-product integrands, Jensen, covariance and the operator norm; it is choice-free. Mathematical validation and scoped format checks remain pending.

### Completed item: `lem-subgaussian-contrastive-margin-comparison`

- Claim and conventions: for each fixed representation with centered classwise vector sub-Gaussian proxy $\sigma^2$, the one-negative **hinge** contrastive risk conditioned on distinct classes is at most $\gamma L^\mu_{\gamma,\rm sup}(f)+\epsilon$, with the source's exact cases $\gamma=1+2R\sigma\sqrt{2\ln R+\ln(3/\epsilon)}$ for $R\ge1$ and $1+2R\sigma\sqrt{\ln(3/\epsilon)}$ for $R<1$, for $0<\epsilon\le1$. It also handles $\sigma=0$ directly from the proxy-zero MGF condition.
- Direct dependencies: `cor-markov-inequality-for-random-variables`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-latent-class-contrastive-learning`, `def-natural-logarithm`, `def-probability-measure`, `def-real-exponential-function-and-e`, `def-subgaussian-variable-and-vector`, `lem-contrastive-hinge-and-logistic-loss-properties`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-independent-random-elements-have-product-joint-law`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-natural-logarithm-laws`.
- Sources: Saunshi et al., main paper §5.2, Lemma 5.1, and the complete Supplementary Appendix A.2 proof, https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf and https://proceedings.mlr.press/v97/saunshi19a/saunshi19a-supp.pdf. The proof uses the upper tail of a difference of two independent classwise sub-Gaussian projections, Markov/Chernoff, the score bound $2R^2$, and class-swap symmetry.
- Scope decision: the main paper defines and proves this margin result for hinge loss; its supplement bounds $(1+m+z)_+$ explicitly. Thus the task design's optional margin branch is recorded as hinge-only even though Theorems 4.1/4.5 retain both source hinge and logistic losses. The later B-page logistic example records why the same $γ$ margin inequality fails for logistic loss. No source extension was inferred.
- Decision: complete level-4 lemma; exact source gamma and $\epsilon$ range preserved. Mathematical validation and scoped format checks remain pending.

### Completed item: `lem-contrastive-uniform-generalization`

- Claim and conventions: for either source hinge or base-2 logistic loss, with AC and measurable empirical/independent-copy/sign suprema, the two-sided uniform deviation is $\Gamma_M=2\sqrt{18}L_0R\mathcal R_S(\mathcal F)/M+3B_{\ell,R}\sqrt{\ln(4/\delta)/(2M)}$, where $B_{\ell,R}=\ell(2R^2)-\ell(-2R^2)>0$ and the vector complexity is the unnormalized independent-sign sum over all three embeddings per triplet.
- Direct dependencies: `def-axiom-of-choice`, `def-identically-distributed-and-iid-random-variables`, `def-latent-class-contrastive-learning`, `def-natural-logarithm`, `lem-contrastive-hinge-and-logistic-loss-properties`, `lem-vector-rademacher-contraction-for-bounded-classes`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `thm-independent-random-elements-have-product-joint-law`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-natural-logarithm-laws`, `thm-rademacher-uniform-generalization`.
- Sources: Saunshi et al., Supplementary Appendix A.3; Mohri et al., *Foundations of Machine Learning*, 2nd ed., Theorem 3.3 and complete proof, printed pp. 30–33; Maurer, Theorem 3/Corollary 4 and complete vector-contraction proof. The local transfer Lipschitz constant is $\sqrt6L_0R$ on the product of three representation balls; the local vector-contraction constant $\sqrt3$ yields $\sqrt{18}L_0R$. The normalized loss class lies in $[0,1]$, and the common centering shift vanishes after sign averaging.
- Reconciliation: use the exact $\ln(4/\delta)$ term from the two-sided empirical Rademacher theorem for every $0<\delta<1$. The plan's $O(\sqrt{\ln(1/\delta)/M})$ shorthand is comparable for the conventional $0<\delta\le1/2$ confidence range; no shorthand replaced the exact result.
- Decision: complete level-4 lemma with AC expressly declared. Mathematical validation and scoped format checks remain pending.

### Completed item: `lem-contrastive-empirical-minimizer-excess`

- Claim and conventions: on the uniform-deviation event, any measurable selector satisfying $\widehat L_{\rm un}(\widehat f)\le\widehat L_{\rm un}(f)+\eta$ for every comparator has $L_{\rm un}(\widehat f)\le L_{\rm un}(f)+2\Gamma_M+\eta$ simultaneously for all $f$. This condition directly defines the approximate-ERM tolerance and does not claim a minimizer exists.
- Direct dependencies: `def-axiom-of-choice`, `def-latent-class-contrastive-learning`, `lem-contrastive-uniform-generalization`.
- Sources: Saunshi et al., main paper Theorem 4.1's empirical-to-population comparison; Mohri et al., *Foundations of Machine Learning*, Chapter 3's risk comparison from uniform deviation. The local argument applies the same two-sided deviation once to the selector and once to each comparator.
- Decision: complete level-5 lemma. AC is inherited only through the uniform-deviation supplier; no optimizer-existence result is asserted. Mathematical validation and scoped format checks remain pending.

### Completed items: `thm-contrastive-representation-transfer-with-class-collisions`; `cor-contrastive-approximate-erm-transfer`

- Claims and conventions: for either source hinge or logistic loss and $\tau<1$, the exact empirical minimizer satisfies $L^\mu_{\rm sup}(\widehat f)\le [L_{\rm un}(f)-\tau+2\Gamma_M]/(1-\tau)$ simultaneously for every comparator with probability at least $1-\delta$. A measurable approximate empirical selector with tolerance $\eta$ has the same bound with $+\eta$ in the numerator. The exact theorem assumes a measurable attained minimizer; the corollary does not assert selector existence.
- Direct dependencies for each result: `def-axiom-of-choice`, `def-latent-class-contrastive-learning`, `lem-contrastive-class-collision-deviation`, `lem-contrastive-empirical-minimizer-excess`, `lem-mean-classifier-loss-from-contrastive-loss`.
- Sources: Saunshi et al., main paper Theorem 4.1, Lemmas 4.3–4.4, Supplementary Appendices A.1 and A.3. Both local proofs explicitly combine empirical excess, the Jensen mean-classifier comparison, and the collision decomposition/lower bound. The approximate version retains the optimization tolerance additively.
- Decision: complete level-6 results; the downstream guarantee is average binary classification with uniform task label and the class-mean linear classifier only. AC flows through the high-probability empirical-risk supplier. Mathematical validation and scoped format checks remain pending.

### Completed item: `thm-contrastive-representation-transfer-under-within-class-deviation`

- Claim and conventions: for an exact measurable empirical minimizer, $L_{\rm sup}(\widehat f)\le L^\mu_{\rm sup}(\widehat f)\le L^\ne_{\rm un}(f)+[\sqrt2L_0\tau s(f)+2\Gamma_M]/(1-\tau)$ for every comparator and with probability at least $1-\delta$. The factor $\sqrt2L_0$ is derived in the collision lemma; $2\Gamma_M$ is the two-sided empirical/population excess.
- Direct dependencies: `def-axiom-of-choice`, `def-latent-class-contrastive-learning`, `lem-contrastive-class-collision-deviation`, `thm-contrastive-representation-transfer-with-class-collisions`.
- Sources: Saunshi et al., main paper Theorem 4.5 and Lemma 4.4; complete Supplementary Appendices A.1/A.3. The proof substitutes the collision-loss upper estimate into the class-collision transfer theorem. The infimum over all linear weights is no greater than the risk of the mean weight by definition.
- Decision: complete level-7 theorem, including the $\tau=0$ branch and denominator condition $\tau<1$. AC enters only through high-probability generalization. Mathematical validation and scoped format checks remain pending.

### Completed item: `cor-subgaussian-contrastive-representation-transfer`

- Claim and conventions: under hinge contrastive training, a measurable exact empirical minimizer obeys $L_{\rm sup}(\widehat f)\le L^\mu_{\rm sup}(\widehat f)\le\gamma L^\mu_{\gamma,\rm sup}(f)+\epsilon+[\sqrt2L_0\tau s(f)+2\Gamma_M]/(1-\tau)$ for every comparator satisfying the stated common classwise centered sub-Gaussian proxy. The transfer theorem uses hinge loss; its optional margin branch is not applied to logistic training.
- Direct dependencies: `def-axiom-of-choice`, `def-latent-class-contrastive-learning`, `lem-subgaussian-contrastive-margin-comparison`, `thm-contrastive-representation-transfer-under-within-class-deviation`.
- Sources: Saunshi et al., main paper Corollary 5.1.1/Lemma 5.1 and complete Supplementary Appendix A.2. The local result substitutes the hinge margin comparison into the within-class transfer theorem.
- Scope reconciliation: because Appendix A.2 controls the hinge score loss, the corollary is explicitly hinge-only, while Theorems 4.1/4.5 and the approximate-ERM corollary retain hinge or logistic losses. The B-page logistic example supplies a finite counterexample to the same-$\gamma$ logistic extension.
- Decision: complete level-8 hinge-margin corollary, conditional on the cited classwise sub-Gaussian hypothesis. Mathematical validation and scoped format checks remain pending.

### Completed item: `ex-contrastive-same-class-negative-collision`

- Example claim: with two equiprobable deterministic classes and scalar embeddings $0,1$, a negative-class collision has probability $1/2$, hinge loss $1$ on collision, conditional distinct-class risk $1/2$, and total contrastive risk $3/4$.
- Direct dependencies: `def-latent-class-contrastive-learning`, `lem-contrastive-hinge-and-logistic-loss-properties`.
- Source: Saunshi et al., main paper §4.2, Equation (8), https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf. The finite two-class arithmetic is verified locally.
- Decision: complete level-4 example; no generalization claim is made. Scoped validation remains pending.

### Completed item: `ex-contrastive-high-within-class-variance`

- Example claim: two uniform classes with representations $(1,\eta r)$ and $(-1,\eta r)$ have zero mean-classifier hinge loss, while exact one-negative hinge risk is $1/4+r^2/2$ for $r\ge1$; the covariance grows with $r^2$.
- Direct dependencies: `def-latent-class-contrastive-learning`, `lem-contrastive-hinge-and-logistic-loss-properties`.
- Source: Saunshi et al., main paper §5.1 and Figure 1(b), https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf. The local example gives the full finite computation underlying the reported qualitative example.
- Decision: complete level-4 example; all class/noise probabilities and both collision branches are enumerated. Scoped validation remains pending.

### Completed item: `ex-augmentation-erases-class-information`

- Example claim: a deterministic augmentation $T(c,n)=n$ removes the binary class coordinate when $n$ is class-conditionally uniform; identical post-augmentation class laws force average uniform-label hinge risk at least $1$, attained by the zero classifier.
- Direct dependencies: `def-latent-class-contrastive-learning`, `lem-contrastive-hinge-and-logistic-loss-properties`.
- Source: Chen et al., main paper §3, https://proceedings.mlr.press/v119/chen20j/chen20j.pdf, for the empirical-design role of augmentations; the finite counterexample and verification are local.
- Decision: complete level-4 synthetic example; it makes no claim about all augmentation schemes. Scoped validation remains pending.

### Completed item: `ex-simclr-projection-head-reported-results`

- Example claim: report only SimCLR's measured linear-evaluation comparison: the nonlinear projection condition is about three points above linear and over ten above no head; pre-projection $h$ is over ten points above $g(h)$. Conditions include ResNet-50, 2-layer MLP to 128 dimensions, NT-Xent, batch 4096 and 100 epochs.
- Direct dependency: `def-latent-class-contrastive-learning`.
- Sources: Chen et al., main paper §4 default setup and §4.2/Figure 8, printed pp. 6 and 8, https://proceedings.mlr.press/v119/chen20j/chen20j.pdf; official Supplementary Appendix B.4, https://proceedings.mlr.press/v119/chen20j/chen20j-supp.pdf. The full relevant passages were inspected; claims are empirical and setup-bound.
- Decision: complete level-4 reported-results example, explicitly not a universal theorem. Scoped validation remains pending.

### Completed item: `ex-logistic-loss-not-covered-by-hinge-margin-comparison`

- Example claim: for equal deterministic classes with embeddings $2,4$, $R=4$, $\tau=1/2$, and $\sigma=0$, the distinct-class logistic risk is $\frac12[\log_2(1+e^4)+\log_2(1+e^{-8})]>5/2$, whereas the source $γ=1$ hinge margin risk is exactly $5/2$. It gives a positive-gap counterexample to extending the same margin comparison or corollary unchanged to logistic contrastive training.
- Direct dependencies: `cor-subgaussian-contrastive-representation-transfer`, `def-latent-class-contrastive-learning`, `lem-subgaussian-contrastive-margin-comparison`, `lem-contrastive-hinge-and-logistic-loss-properties`.
- Source: Saunshi et al., main paper §5.2, Lemma 5.1 and Corollary 5.1.1, https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf. Their margin result is hinge-only; the local strict gap follows from the positive exponential series and monotonicity of $\log_2$.
- Decision: complete level-9 scope-boundary example; the finite logistic extension fails, including for a singleton empirical class as sample-size deviation tends to zero. Scoped validation remains pending.

## Final scoped validation and readiness

- `node tools/proof-layout.mjs` on all 17 assigned items: 17 items, 54 proof steps, 0 defects. `precheck.mts`: 16 proof-bearing items checked, 0 failures; the definition is not applicable.
- `rendercheck.mjs` on all 17 item files and both A/B pages: 19 files checked, 0 errors or warnings. `content-policy.mjs`: 17 assigned items, 0 errors or warnings. Focused `depcheck.mjs` and `fwdcheck.mjs` passed with 0 errors or warnings. `manifest-deps.mjs`: 17 items, no missing dependency arrays. `item-dependency-levels.mjs`: all 1,247 run items across 202 pages checked; maximum level 15.
- `coverage-checklist.mjs --require-destination`: 2 pages and 30 harvested source results, 0 errors or warnings. `source-fetch-check.mjs` check mode: 11/11 source entries fetch-verified. Strict proof-contract validation: all 17 assigned contracts checked, 0 errors or warnings. The scoped statement/reference scan checked all 17 statements and both page bodies; no statement hyperlinks or page-body summaries were found.
- Used `node tools/step1-decisions.mjs record` without `--owner` for all 17 assigned items, with their direct `deps` and `justified_by` IDs. The post-record ordinary full-run check reports 1,136/1,247 items ready, `closed: false`, and no open rows for batch 56; 111 open work rows remain elsewhere in the run. These are authoring-readiness records, not approval or publication.
- The shared `batch-dependency-levels.mjs check` still reports a stale run artifact. The dispatch hash is `e99db8f61043e163fd8503e5483a07018104e18d75cefaf3852dd84b4dc40d68`; the shared artifact records input hash `e4d05960c5b86ceb1b82760e9467a49cec1a7fab1824e1aa5b2a7cd2357f3618`, while read-only recomputation gives `39a19bea9a9d8567c16c03f8f37da9c45d9beee74411022a13aee96df89e0307`. The recomputed batch-56 row remains level 3 with observed prerequisites `[2,5]`, while dispatch declares `[5]`. The local dependency-input sidecar preserves the dispatch list and records the observed graph/hash conflict; shared scheduler metadata remains for owner reconciliation.

### Next action

The assigned authoring scope is complete. Owner reconciliation of the stale run-wide batch scheduler input remains open; no shared scheduler file was changed. Independent approval is still separate from this readiness record.
