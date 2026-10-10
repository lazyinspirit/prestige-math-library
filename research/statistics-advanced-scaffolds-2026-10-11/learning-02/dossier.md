# Learning-02 source dossier: classical and structured machine learning

Role: learning-02 source reader. Read date: 2026-10-11. This is planning prose only; it proposes no library-item edits. Public full-text PDFs and text extractions are held under the ignored role scratchpad. Exact source URLs, hashes, completed reading ranges, and limits are in sources.json.

The proposed interface below covers the complete assigned scope: linear and sparse prediction, kernels/RKHS/SVMs and Gaussian-process regression, trees/forests/boosting, clustering and mixtures, spectral and manifold methods, dimension reduction and metric learning, graphical/latent models, causal discovery, differential privacy/private learning, and federated/distributed optimization. It separates mathematical guarantees from empirical method descriptions. No proposed Category-4 pair is a prerequisite of Categories 1–3. Cat4 can consume the Cat1 learning-theory interfaces and Cat3 Bayesian/optimization interfaces where useful.

## Checked local suppliers

I inspected the published item bodies, not only filenames. The relevant existing mathematical suppliers are:

- Linear least squares and regularization: def-inner-product-norm; thm-least-squares-solutions-and-normal-equation (existence, normal equation, and affine set of minimizers); def-tikhonov-regularised-least-squares; thm-tikhonov-regularised-least-squares-has-a-unique-minimiser (strict convexity and the closed-form ridge/Tikhonov minimizer); thm-singular-value-decomposition.
- Finite-dimensional spectral and low-rank tools: cor-real-spectral-theorem-for-self-adjoint-endomorphisms; thm-non-negative-operator-characterisations; cor-rayleigh-quotient-extreme-eigenvalue-characterisation; thm-eckart-young-best-rank-k-approximation (operator-norm version); def-orthogonal-projection; thm-orthogonal-projection-is-the-unique-nearest-point.
- Graph Laplacians: def-laplacian-matrix-of-a-finite-simple-graph; thm-laplacian-is-the-oriented-incidence-product; thm-laplacian-is-positive-semidefinite-and-annihilates-ones; thm-laplacian-kernel-dimension-counts-components.
- Basic convex/probability interfaces: thm-hessian-characterises-convexity; thm-conditional-expectation-is-the-l2-orthogonal-projection; def-expectation-of-a-nonnegative-or-integrable-random-variable; thm-jensen-inequality-for-expectation.
- Gaussian processes: def-stochastic-process-and-finite-dimensional-distributions; def-multivariate-normal-law (possibly singular covariance and an explicit AC dependency); def-gaussian-process (normal finite linear combinations, equivalently possibly singular Gaussian finite-dimensional laws); thm-kolmogorov-extension-for-standard-borel-coordinate-spaces; thm-kolmogorov-construction-of-the-canonical-gaussian-process. The last is Brownian-covariance-specific and explicitly does not give path continuity.
- Markov models: def-time-homogeneous-markov-chain-with-transition-kernel.

There are no checked active items for SVM/RKHS, trees/forests/boosting, K-means or spectral clustering, metric learning, sparse-support recovery, graphical-lasso estimation, causal discovery, differential privacy, or federated optimization. Kernel/RKHS, Gaussian conditioning, convex-duality/KKT, estimator consistency, Gaussian graphical conditional-independence, and causal-graph interfaces below therefore need local statements and proofs (or explicit upstream Cat1–3 suppliers); the papers/books are evidence and proof guides, not substitute local prerequisites.

## Dependency-ordered pair proposals

These are local role labels, not final global ML numbering. The Cat4 author can renumber them after reconciling the six reader dossiers. “Examples” are examples only and never supplier dependencies.

### ML-02-01 — Linear prediction, shrinkage, and sparse regression

**Pages:** ml02-linear-sparse-models / ml02-linear-sparse-models-examples.

**Scope:** Define fixed-design least squares, empirical squared risk, ridge/Tikhonov, L1 lasso, group/fused penalties, and the role of feature scaling and an unpenalized intercept. State the normal-equation characterization for arbitrary rank; when X has full column rank, give the unique OLS solution. Ridge minimizes squared error plus λ‖β‖² and has the existing unique solution (XᵀX+λI)⁻¹Xᵀy. For orthonormal design, derive the lasso soft-threshold solution coordinatewise. Define the random-design Gaussian linear model separately from the fixed-design optimization problem.

State an exact-support theorem only under explicit assumptions. A suitable result is Wainwright’s Gaussian-design threshold theorem: rows xᵢ are iid N(0,Σ), noise wᵢ iid N(0,σ²) and independent, unit diagonal Σ, bounded Λmax(Σ) and Λmin(ΣSS)≥Cmin>0, ‖(ΣSS)⁻¹‖∞≤Dmax, and mutual incoherence ‖ΣSᶜS(ΣSS)⁻¹‖∞≤1−ε. For support size s=|S| and β-minimum ρn=minᵢ∈S|βᵢ*|, with s,n−s,p−s→∞, the theorem supplies explicit lower/upper constants θℓ, θu; below n<2(θℓ−ν)s log(p−s)+s+1, Lasso support recovery probability tends to zero for every positive nonincreasing λn, while above n>2(θu+ν)s log(p−s)+s, the stated λn scaling and ρn condition give probability tending to one. In the identity-covariance Gaussian ensemble θℓ=θu=1. Keep this as exact support recovery, not a general prediction-risk or universal feature-selection claim.

**Proof route:** Reuse the normal-equation and ridge suppliers. Prove orthonormal-design thresholding from coordinatewise convex minimization/KKT. For support recovery, reproduce Wainwright’s primal-dual witness argument: characterize active-set solution and inactive subgradient, then use Gaussian conditional laws, concentration of maxima, mutual incoherence, and beta-min. Cite the theorem only with all its asymptotic and design hypotheses. ESL’s Gauss–Markov proof is left as an exercise; if included, prove it locally from the covariance of any linear unbiased estimator.

**Examples:** correlated predictors where ridge shares weight and lasso selects one; an orthonormal design where soft thresholding is exact.

**Requires:** def-inner-product-norm; thm-least-squares-solutions-and-normal-equation; def-tikhonov-regularised-least-squares; thm-tikhonov-regularised-least-squares-has-a-unique-minimiser; thm-singular-value-decomposition. For any excess-risk or uniform-generalization statement, consume the relevant Cat1 learning-theory pair; do not derive one from support recovery.

**Sources:** [ESL] §3.2–3.9, pp. 43–100, especially §§3.4, 3.8 and 3.9; §18.4, pp. 661–667. [WAIN] §§2.2–2.3 and 3.1–3.4, pp. 5–15, Theorem 1 and its complete proof. ESL states and motivates the procedures; Wainwright proves the qualified support-recovery threshold.

### ML-02-02 — Linear classification, discriminants, logistic models

**Pages:** ml02-linear-classification / ml02-linear-classification-examples.

**Scope:** Define binary and multiclass linear score classifiers; indicator-regression classification; LDA under class-conditional Gaussian densities with a common covariance; QDA when class covariances differ; multinomial/binary logistic regression through linear log-odds; L1-penalized logistic likelihood; and the perceptron update. State that common Gaussian covariance, not linearity alone, yields LDA’s linear log-posterior odds. Logistic regression is a conditional model and does not require a Gaussian feature distribution. The binary logistic log-likelihood is concave; IRLS is a Newton/weighted-least-squares implementation. Under complete separation, the unpenalized MLE need not be finite. The perceptron converges after finitely many mistakes on a finite linearly separable sample under cyclic presentation, but can cycle on nonseparable data. Avoid treating the LDA or logistic model as robust to misspecification by theorem.

**Proof route:** Derive the LDA score by expanding Gaussian log densities and canceling common quadratic terms. Derive logistic score/Hessian directly and show negative semidefiniteness; prove the IRLS step by Newton algebra. State a perceptron mistake bound only if it is locally proved with an explicit margin γ>0, ‖xᵢ‖≤R, and update convention; ESL leaves its finite-convergence argument as an exercise. Do not identify coefficients across LDA and logistic regression without the specified Gaussian model and estimation distinction.

**Examples:** Same linear boundary form with a different estimation target: Gaussian generative LDA versus conditional likelihood logistic regression; a separated sample with diverging logistic coefficients.

**Requires:** thm-hessian-characterises-convexity; thm-least-squares-solutions-and-normal-equation; thm-singular-value-decomposition. Logistic MLE existence/separation and any asymptotic confidence claim require a separate explicit theorem with regularity assumptions.

**Sources:** [ESL] Ch. 4, §§4.1–4.5, pp. 101–135 (full chapter text read); regularized L1 logistic also §18.4, pp. 661–664. Chapter 4 expressly leaves perceptron convergence as Exercise 4.6 and refers nonseparable margins to Ch. 12.

### ML-02-03 — RKHS regularization, kernels, and support-vector machines

**Pages:** ml02-rkhs-svm / ml02-rkhs-svm-examples.

**Scope:** Define a positive-semidefinite kernel through finite Gram matrices or an explicit feature map, the induced finite-sample kernel objective, the RKHS evaluation/reproducing relation, and a representer result for objectives depending on finitely many evaluations plus a nondecreasing norm penalty. Define hard-margin SVM for separable binary data and soft-margin SVM with C>0:

minimize ½‖w‖²+CΣᵢξᵢ subject to yᵢ(⟨w,φ(xᵢ)⟩+b)≥1−ξᵢ, ξᵢ≥0.

Give the dual and KKT support-vector representation: maximize Σᵢαᵢ−½Σᵢⱼαᵢαⱼyᵢyⱼk(xᵢ,xⱼ), subject to 0≤αᵢ≤C and Σᵢαᵢyᵢ=0; w=Σᵢαᵢyᵢφ(xᵢ). Interpret C as a loss/regularization tradeoff, not a posterior probability. The decision score is not automatically calibrated. Kernel validity is a PSD requirement; a formula that looks like a similarity is insufficient.

**Proof route:** Build the RKHS from the completion of finite kernel sections (or give an explicit feature-space construction for the chosen kernel); decompose an optimizer into the span of the observed feature vectors and its orthogonal complement to prove the representer statement. Derive the SVM dual by a Lagrangian, stationarity and complementary slackness; check strict feasibility for Slater, and state which duality theorem is used. Convexity supplies a global optimum, but a chosen solver’s numerical convergence is a separate algorithmic claim.

**Examples:** Linear, polynomial and Gaussian radial kernels; separating and overlapping samples; compare margin score with logistic posterior.

**Requires:** thm-hessian-characterises-convexity; thm-orthogonal-projection-is-the-unique-nearest-point; cor-real-spectral-theorem-for-self-adjoint-endomorphisms for finite Gram-matrix PSD checks. A local convex-duality/KKT interface is absent and must be proved in this pair or supplied upstream by Cat3; this proposal imposes no backward dependency on Cat3. Cat1 margin/generalization results may be consumed only with their exact norm and distribution assumptions.

**Sources:** [ESL] §5.8, pp. 167–173; Ch. 12 §§12.2–12.4, pp. 417–438; Ch. 18 §18.5, pp. 668–672. [GPML] Ch. 6 §§6.1–6.4, pp. 129–150: RKHS, representer theorem, SVM primal/dual and regularization equivalence. GPML states Moore–Aronszajn and points elsewhere for its proof; it does not prove the general representer theorem in full, so the local proof obligation remains.

### ML-02-04 — Gaussian-process regression and prediction

**Pages:** ml02-gaussian-process-regression / ml02-gaussian-process-regression-examples.

**Scope:** Define a GP prior by mean and PSD covariance kernel and finite-dimensional Gaussian laws. For finite inputs X and independent Gaussian noise ε∼N(0,σ²I), derive K_y=K(X,X)+σ²I and, for test inputs X*, posterior predictive mean K_*ᵀK_y⁻¹y and covariance K_**−K_*ᵀK_y⁻¹K_*. Include nonzero prior means by centering y and restoring the mean. State σ²>0 as a sufficient condition for invertibility even when K is singular. Define log marginal likelihood and its kernel hyperparameters as a model-selection objective, while labeling its optimization as nonconvex in general. Explain exact Cholesky computation costs O(n³) factorization and O(n²) per test vector. Do not claim posterior means or marginal likelihood optimize frequentist generalization error. A Gaussian likelihood is conjugate; logistic/probit GP classification requires approximations such as Laplace/EP and has no exact Gaussian posterior formula.

**Proof route:** Use the published GP/FDD definitions and general Kolmogorov extension for prior existence; do not reuse the Brownian-only construction as a general GP theorem. Prove the finite regression formula by conditioning a joint finite-dimensional multivariate normal, using a Schur complement/completing the square. Prove K_y positive definite when σ²>0. Treat the Cholesky procedure as a finite-dimensional numerical algorithm, with roundoff/conditioning caveats. Sample-path continuity requires a separate regularity criterion and is not implied by a GP definition or Kolmogorov extension alone.

**Examples:** Squared-exponential and Matérn covariance choices, noisy interpolation, and predictive variance behavior in a finite one-dimensional design.

**Requires:** def-stochastic-process-and-finite-dimensional-distributions; def-multivariate-normal-law; def-gaussian-process; thm-kolmogorov-extension-for-standard-borel-coordinate-spaces; thm-non-negative-operator-characterisations; thm-singular-value-decomposition. Do not require the Brownian-specific thm-kolmogorov-construction-of-the-canonical-gaussian-process. Coordinate interfaces with the BCS author so this consumes, and never becomes a prerequisite of, Cat3.

**Sources:** [GPML] Ch. 2 §§2.1–2.8, pp. 7–30; Ch. 4 §§4.1–4.4, pp. 79–102; Ch. 6 §§6.1–6.4, pp. 129–150. [ESL] §5.8, pp. 167–173. The GPML covariance-function discussion quotes Bochner/Mercer results and cites proofs elsewhere; include them only if locally proved or use explicit kernels with local PSD proofs.

### ML-02-05 — CART trees and pruning

**Pages:** ml02-cart / ml02-cart-examples.

**Scope:** Define a binary recursive partition of feature space, leaf predictions (means for squared-error regression; class proportions/majority or impurity for classification), and greedy best-split selection. Define the cost-complexity objective Cα(T)=ΣₘNₘQₘ+α|T| and weakest-link pruning. Distinguish a maximal grown tree, post-pruning, and validation/CV choice of α. State that exhaustive globally optimal tree search is combinatorial; greedy split selection does not solve it. No distribution-free risk guarantee is supplied by the source section.

**Proof route:** Prove each node’s mean minimizes within-leaf squared error by expanding around the sample mean. Show a chosen split minimizes the stated local empirical impurity among candidate splits and pruning selects subtrees by the displayed penalized objective. Prove finite termination of weakest-link pruning from strict decrease in the finite subtree sequence. Do not infer global tree optimality or test performance from local split improvement.

**Examples:** A one-dimensional threshold tree; identical training fit from two structures but different pruning cost.

**Requires:** thm-least-squares-solutions-and-normal-equation; finite-dimensional convexity/argmin facts. Generalization results consume Cat1 interfaces only if their assumptions are stated.

**Sources:** [ESL] §9.2, pp. 305–316; for boosting trees, [ESL] §§10.9–10.12, pp. 353–365.

### ML-02-06 — Bagging and random forests

**Pages:** ml02-random-forests / ml02-random-forests-examples.

**Scope:** Define a randomized tree h(x,Θ) conditional on a training set and the infinite-forest vote/average. Specify bootstrap resampling, random feature selection at each node, unpruned base trees, out-of-bag prediction, and classification margin. State Breiman’s limit theorem for the infinite classification forest: for iid randomizations Θ₁,Θ₂,… conditional on fixed training data, the vote probabilities converge almost surely, and the limiting population error is P_{X,Y}(PΘ[h(X,Θ)=Y]−max_{j≠Y}PΘ[h(X,Θ)=j]<0). State the strength/correlation bound PE*≤ρ(1−s²)/s² only with s>0 and Breiman’s raw-margin correlation definition. For regression, state the separate mean-unbiasedness condition E_Y Y=E_X h(X,Θ) for every randomized tree in Theorem 11.2 before giving its weighted residual-correlation bound.

**Proof route:** Use the strong law for the vote limit; the paper’s Appendix I gives the proof. Derive the strength/correlation bound from Chebyshev’s inequality and its raw-margin covariance identity, following §§2.2–2.3 and Appendix II. Keep the regression theorem separate; it does not follow from the classification theorem. “More trees do not overfit” means convergence to a vote-limit error for this fixed-data randomization setup, not monotone finite-sample improvement or universal generalization.

**Examples:** Vary feature-subsampling to illustrate the strength/correlation tradeoff; report OOB as an estimator, not an exact unbiased identity for every finite forest.

**Requires:** ML-02-05 for the CART base learner; Cat1 probability/generalization suppliers for any additional risk statements.

**Sources:** [BREIMAN] §§1–4, Theorems 1.2 and 2.3, pp. 1–9; §11, Theorems 11.1–11.2, pp. 24–26; Appendices I–II, pp. 29–33. [ESL] Ch. 15, §§15.1–15.4, pp. 587–602, for construction and empirical diagnostics.

### ML-02-07 — AdaBoost and gradient boosting

**Pages:** ml02-boosting / ml02-boosting-examples.

**Scope:** Define AdaBoost.M1 on binary labels yᵢ∈{−1,+1}, weak predictions hₘ∈{−1,+1}, weighted error errₘ<1/2, αₘ=½log((1−errₘ)/errₘ), exponential reweighting, and final sign of Σₘαₘhₘ. Give the empirical training-error bound by the product of normalizers ∏ₘ2√(errₘ(1−errₘ)). Distinguish this training bound from a test/generalization bound. Define gradient boosting for differentiable empirical loss as stagewise fitting of negative pseudo-residuals by a restricted base learner, with line search and shrinkage/subsampling. A tree fit to pseudo-residuals is an approximate descent direction in the tree class; it is not exact unconstrained gradient descent.

**Proof route:** The AdaBoost training bound follows by induction on the reweighted exponential loss and the inequality 1{yF≤0}≤exp(−yF); minimize each round’s weighted exponential loss to obtain the α formula. Gradient boosting’s pseudo-residual step is the chain rule for directional derivative; no global convergence theorem follows without assumptions on the function class, line search, step sizes and approximation error. Explicitly separate exponential, logistic and deviance losses and their noise sensitivity.

**Examples:** Two weak classifiers and one boosting update; shallow-tree negative-gradient fit with learning rate ν.

**Requires:** ML-02-05 if using trees as base learners; the exponential training-error proof is local algebra. Margin/generalization bounds consume Cat1 results and their margin/complexity assumptions.

**Sources:** [ESL] Ch. 10 §§10.1–10.6, pp. 337–350; §§10.9–10.12, pp. 353–365; Ch. 16 §§16.2–16.3, pp. 607–623. The text derives the stagewise/exponential-loss connection and gradient-boosting algorithms; empirical robustness claims are not theorem guarantees.

### ML-02-08 — K-means, Gaussian mixtures, and soft assignments

**Pages:** ml02-clustering-mixtures / ml02-clustering-mixtures-examples.

**Scope:** Define a K-partition and within-cluster sum of squares; define Lloyd’s alternating K-means updates (assign to nearest current center, then replace each center by its assigned sample mean). Prove objective nonincrease and state only convergence to a local fixed point under deterministic tie breaking; initialization matters and global partition minimization is combinatorial. Define a finite Gaussian mixture with weights πₖ, means μₖ and covariance matrices Σₖ, posterior responsibilities γᵢₖ, and the E/M updates. Under the standard EM conditions, observed log likelihood is nondecreasing; stationary-point/convergence claims require the BCS EM assumptions and do not establish a global maximum. Mention the equal-spherical-covariance, low-variance limit connecting soft responsibilities to K-means, with a precise limiting statement if included. Gaussian-mixture likelihood can become unbounded when a component covariance collapses unless covariance/model restrictions are imposed.

**Proof route:** Prove K-means’s center update by least-squares minimization and assignment update by pointwise minimization; finite assignments plus deterministic tie handling yield a fixed point, not a global optimum. For EM monotonicity, consume the Cat3 latent-variable EM pair or prove the Jensen/ELBO inequality locally; no Cat4 dependency is imposed on Cat3. State compactness/parameter constraints before claiming convergence of parameters.

**Examples:** Two spherical clusters where K-means has initialization-dependent local minima; overlapping Gaussian components with fractional responsibilities.

**Requires:** thm-least-squares-solutions-and-normal-equation; thm-jensen-inequality-for-expectation; planned Cat3 EM/ELBO supplier if its final interface is available. Keep K-means convergence independent of that upstream dependency.

**Sources:** [ESL] §13.2.1–13.2.3, pp. 460–463; §§14.3.4–14.3.7, pp. 507–512; §8.5, pp. 272–281 (the EM discussion leaves important general convergence details to regularity assumptions/external references). Cat3 owns the generic proof.

### ML-02-09 — Spectral clustering and graph cuts

**Pages:** ml02-spectral-clustering / ml02-spectral-clustering-examples.

**Scope:** Define an undirected weighted similarity graph, W, D, L=D−W, normalized Laplacians, RatioCut and NormalizedCut. Prove the quadratic-form identity fᵀLf=½Σᵢⱼwᵢⱼ(fᵢ−fⱼ)², PSD, and nullity equal to the number of connected components (the latter two have local suppliers). Define spectral-clustering algorithms by graph construction, lowest-eigenvector relaxation, optional row normalization, then K-means. Explain the relaxed cut objective; it does not give an approximation guarantee for the discrete clustering problem. Identify graph choice, scale, degree normalization, eigengap and number of clusters as modeling decisions, not conclusions supplied by the eigenproblem.

**Proof route:** Use the existing Laplacian form and spectral theorem. Derive RatioCut/Ncut quadratic forms from indicator vectors, relax the discrete indicators to orthogonal real vectors, and apply the Rayleigh–Ritz/min-max principle. When discussing perturbation stability, state Davis–Kahan’s eigengap and operator-norm assumptions and provide a proof or upstream supplier; the tutorial quotes it. A small cut relaxation value alone is not a bound on discrete clustering error.

**Examples:** Three disconnected components (exact embedding) and the concentric-circle graph construction; vary kNN graph scale to show dependence on graph construction.

**Requires:** def-laplacian-matrix-of-a-finite-simple-graph; thm-laplacian-is-positive-semidefinite-and-annihilates-ones; thm-laplacian-kernel-dimension-counts-components; cor-real-spectral-theorem-for-self-adjoint-endomorphisms; cor-rayleigh-quotient-extreme-eigenvalue-characterisation. Weighted/normalized Laplacians require their own definitions and proofs.

**Sources:** [VONLUX] §§2–5, pp. 4–22, including RatioCut/Ncut derivations, Davis–Kahan discussion and limitations; [ESL] §14.5.3, pp. 544–547. The tutorial gives complete derivations for the relaxation but refers out for Davis–Kahan and does not prove graph/manifold consistency results.

### ML-02-10 — PCA, kernel PCA, MDS, and manifold embeddings

**Pages:** ml02-dimension-reduction / ml02-dimension-reduction-examples.

**Scope:** Define centered empirical PCA and its rank-q orthogonal projection; prove that the top q right singular vectors minimize Frobenius reconstruction error and maximize captured sample variance. Define kernel PCA via centered PSD Gram matrix; classical MDS via centered distances/Gram matrices; ISOMAP via graph shortest paths then MDS; LLE via local affine reconstruction weights and bottom eigenvectors of (I−W)ᵀ(I−W). State their objective functions and neighborhood/centering conventions. These are algorithms for specified finite matrices, not guarantees that the embedding recovers a true manifold; ISOMAP additionally needs suitable neighborhood graph/geodesic approximation assumptions, which ESL does not prove.

**Proof route:** Derive empirical PCA through the SVD and Frobenius norm/trace identities; the existing Eckart–Young supplier is operator-norm only and cannot be cited as the Frobenius result without proving the latter. Kernel PCA is a finite symmetric eigenproblem after centering. MDS’s classical closed form follows double-centering squared Euclidean distances and spectral decomposition. LLE’s embedding objective equals tr(Yᵀ(I−W)ᵀ(I−W)Y), with centering and unit-covariance constraints; eigenvectors minimize the relaxed criterion. Stress-minimizing MDS and local MDS are nonconvex and have initialization-dependent numerical solutions.

**Examples:** A rank-q compression with exact residual singular values; parabola/unrolled-curve comparison between classical MDS, ISOMAP, LLE and local MDS.

**Requires:** thm-singular-value-decomposition; thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison; cor-real-spectral-theorem-for-self-adjoint-endomorphisms; thm-eckart-young-best-rank-k-approximation (operator norm only, for a separate operator-norm statement); graph-Laplacian suppliers for spectral embeddings.

**Sources:** [ESL] §14.5.1, pp. 534–541; §§14.5.4–14.5.5, pp. 547–552; §§14.8–14.9, pp. 570–576; §18.5.2, pp. 670–672. [VONLUX] for the spectral-clustering comparison. ESL describes algorithms and examples but leaves some PCA algebra as exercises and does not prove manifold-recovery guarantees.

### ML-02-11 — Latent factors, ICA, NMF, and representation ambiguity

**Pages:** ml02-latent-representations / ml02-latent-representations-examples.

**Scope:** Define factor analysis X=AS+ε with q<p, uncorrelated idiosyncratic noise, covariance AAᵀ+Dε; explain rotational nonidentifiability of loadings. Define ICA X=AS with independent sources; after whitening, identify the additional distributional condition needed for identifiability (at most one Gaussian independent source), and identify scale/permutation ambiguity. Define nonnegative factorization X≈WH and its Poisson-likelihood objective; give multiplicative updates only with positive initialization/denominator conventions and label the optimization nonconvex. State that exact NMF factors need not be unique.

**Proof route:** Prove factor-analysis rotational invariance by substituting ARᵀ and RS. For ICA, a full identifiability theorem needs a local Darmois–Skitovich/characteristic-function argument and the non-Gaussian condition; ESL gives the condition and explanation but not the proof. For NMF, state an auxiliary-function monotonicity proof only if its complete MM argument is supplied; otherwise present the update as an algorithm with a proof obligation and no theorem of global convergence. Never use a learned latent direction as a uniquely identified scientific cause without extra assumptions.

**Examples:** Rotating two Gaussian factors leaves the covariance unchanged; non-unique nonnegative cone factorization; ICA source separation with non-Gaussian independent sources.

**Requires:** thm-singular-value-decomposition; cor-real-spectral-theorem-for-self-adjoint-endomorphisms; Cat3 latent-variable likelihood/EM interfaces may be consumed for a specified probabilistic fit.

**Sources:** [ESL] §§14.7.1–14.7.2, pp. 558–565; §14.6, pp. 553–554. [ESL] explicitly notes factor-analysis rotational nonidentifiability, Gaussian ICA nonidentifiability and NMF nonuniqueness; its NMF MM proof is assigned as an exercise. No independent ICA-identifiability proof source was acquired in this pass; retain that proof obligation rather than upgrading the textbook discussion to a proved item.

### ML-02-12 — Nearest neighbors and learned metrics

**Pages:** ml02-metric-learning / ml02-metric-learning-examples.

**Scope:** Define kNN and a Mahalanobis pseudometric dM²(x,x′)=(x−x′)ᵀM(x−x′), M⪰0; M=LᵀL. Define LMNN target neighbors and impostor triplets, pull loss, unit-margin hinge push loss, and semidefinite program over M and nonnegative slacks. The convex objective is globally convex in M, but the paper’s custom gradient-projection solver is not itself furnished with a complete convergence proof. Distinguish optimized training surrogate from actual kNN test error. Multiclass use is direct, but this does not imply class-conditional calibration or generalization.

**Proof route:** Show M⪰0 iff the quadratic form is nonnegative and equivalent to a transformed Euclidean squared distance. Each triplet distance is linear in M, hinge is convex, and PSD cone constraints are convex, so the SDP is convex. Derive the active-set gradient and PSD projection from spectral decomposition only as algorithm details. State separately the paper’s global convex problem formulation and the solver’s implementation/termination check.

**Examples:** A locally striped class where shrinking all same-class distances harms kNN; small PSD matrix projection.

**Requires:** thm-non-negative-operator-characterisations; cor-real-spectral-theorem-for-self-adjoint-endomorphisms; thm-hessian-characterises-convexity; ML-02-03 if a kernelized LMNN extension is included.

**Sources:** [LMNN] §§2.1, 3.1–3.5, pp. 209–221; §§5.3, 6.1–6.3, pp. 230–240; Appendix A.2–A.3. This is the complete metric, loss, SDP, kernelization and projection-algorithm treatment; empirical sections do not supply generalization theorems.

### ML-02-13 — Undirected graphical models and sparse precision estimation

**Pages:** ml02-graphical-models / ml02-graphical-models-examples.

**Scope:** Define a finite undirected Markov graph and pairwise/global conditional-independence semantics. For a nonsingular Gaussian vector with precision Θ=Σ⁻¹, define the graph by nonzero off-diagonal Θᵢⱼ and state/prove that Θᵢⱼ=0 iff Xi⊥Xj conditional on all remaining coordinates. Define Gaussian log likelihood log det Θ−tr(SΘ) and graphical-lasso objective with λ‖Θ‖₁ (specify whether diagonal entries are penalized); state block-coordinate/coordinate-descent algorithm and its KKT equations. For discrete positive distributions, define clique-potential factorization and partition function; distinguish pairwise from higher-order clique interactions. Define a restricted Boltzmann machine’s bipartite energy model and conditional layer independence; contrast likelihood gradients with contrastive-divergence approximation.

**Proof route:** Derive the Gaussian conditional law by block inversion/completing the square and obtain the precision-zero equivalence; local conditional-independence interface is absent. For graphical lasso, derive convexity from concavity of log det on positive-definite Θ plus convex L1 penalty, and derive KKT equations; the cited coordinate-descent article is algorithmic and does not prove global convergence. Hammersley–Clifford requires positivity and a finite-state setting; ESL states it but refers to literature for proof. Hidden-variable marginalization can induce higher-order dependencies. Contrastive divergence is approximate and is not an exact likelihood-gradient theorem.

**Examples:** Three-node Gaussian chain with one precision zero; a sparse precision estimate at two penalties; an RBM where visible units are conditionally independent given hidden units.

**Requires:** def-multivariate-normal-law; def-conditional-independence-given-a-sigma-algebra; def-expectation-of-a-nonnegative-or-integrable-random-variable; thm-non-negative-operator-characterisations; cor-real-spectral-theorem-for-self-adjoint-endomorphisms; thm-hessian-characterises-convexity. Add local Gaussian-conditioning/precision-conditional-independence and convex log-det proof interfaces if not already upstream.

**Sources:** [ESL] Ch. 17 §§17.2–17.4.4, pp. 627–645. [GLASSO] §§1–5, pp. 1–12: objective, block equations, coordinate algorithm and empirical comparisons. ESL cites Hammersley–Clifford and Gaussian zero-partial-correlation facts; it does not prove either theorem in full.

### ML-02-14 — PC algorithm and Markov-equivalence structure learning

**Pages:** ml02-causal-pc / ml02-causal-pc-examples.

**Scope:** Define a DAG, d-separation/Markov property, causal sufficiency, faithfulness, conditional-independence oracle, and CPDAG (the Markov-equivalence class). Give the population PC skeleton deletion and collider/orientation rules, then the sample Gaussian partial-correlation/Fisher-z test variant. State the Kalisch–Bühlmann uniform-consistency theorem only with their assumptions: Gaussian faithful DAG sequence; p_n=O(nᵃ) for finite a; maximum degree q_n=O(n^{1−b}), 0<b≤1; minimum nonzero partial correlation c_n with c_n⁻¹=O(nᵈ), 0<d<b/2; all partial correlations bounded by M<1. Their skeleton/CPDAG error probability is O(exp(−C n^{1−2d})) under these conditions.

**Proof route:** Prove the oracle algorithm’s skeleton and collider orientation correctness using local separation-set lemmas and the Markov-equivalence characterization. For the sample theorem, reproduce the paper’s uniform Fisher-transform/partial-correlation concentration, union bound over the tested conditioning sets, sparsity-growth control, and deterministic orientation rules. Include every d-separation/faithfulness/causal-sufficiency hypothesis. A CPDAG does not orient every edge; interventions or stronger assumptions may be needed. Latent confounding violates causal sufficiency, and weak faithfulness can make the finite-sample procedure unstable.

**Examples:** Three-node chain versus collider; two DAGs with the same skeleton and v-structures.

**Requires:** finite-dimensional probability/concentration from Cat1/2 where provided; local conditional-independence and DAG/CPDAG definitions/proofs are missing. No backward Cat4 dependency may be imposed to obtain them.

**Sources:** [PC] §§2–4, pp. 613–620, Theorems 1–2; Appendix A, pp. 628–636 (proofs of uniform skeleton and CPDAG consistency). The Gaussian CI/partial-correlation equivalence and Markov-equivalence characterization are cited standard results in the article and remain local proof obligations unless upstream suppliers exist.

### ML-02-15 — Additive-noise causal discovery and identifiability

**Pages:** ml02-causal-anm / ml02-causal-anm-examples.

**Scope:** Define an additive-noise model Xi=fᵢ(PAᵢ)+Ni on an acyclic graph, with jointly independent exogenous noises and absolutely continuous variables with strictly positive densities; state the paper’s smoothness and causal-minimality conditions. For the bivariate direction theorem, include Condition 19’s differential-equation exclusion (and the theorem’s C³/positive-density assumptions); linear-Gaussian models generally do not orient direction from observations. For the multivariate theorem, restricted ANM requires that exclusion for each parent under every conditioning set between PAᵢ\{j} and NDᵢ\{i,j}, with the stated positive conditional-density condition. Define the RESIT algorithm (regress each node on the others, choose/remove a sink by residual independence, then prune incoming edges). State Theorem 34 only in the population setting with restricted ANM, causal minimality, consistent regression and a perfect independence oracle.

**Proof route:** For bivariate identifiability, derive the necessary reverse-model differential equation from factorization of the joint density and use the paper’s exclusion condition. For multivariate identification, use sink-removal induction plus the restricted ANM condition over the listed conditioning sets. For RESIT, separate the population proof from finite-sample estimation; the paper’s sample algorithm uses HSIC/other independence tests and does not furnish a broad finite-sample consistency theorem.

**Examples:** Nonlinear additive model whose direction is identifiable; linear Gaussian pair where both orientations admit a representation; latent-confounded observations where the method’s assumptions fail.

**Requires:** density/conditional-independence interfaces; local regression consistency and independence-testing assumptions. Category 4 may consume statistical foundations but may not require them to depend on Cat4.

**Sources:** [ANM] §2, §3.1–3.3 and Theorems 20, 28, 34, pp. 2014–2029; Appendix A.5, A.11–A.15 and associated proofs, pp. 2040–2049. The paper explicitly says finite-sample/high-dimensional performance is difficult and treats the practical algorithm empirically.

### ML-02-16 — Differential privacy mechanisms and composition

**Pages:** ml02-differential-privacy / ml02-differential-privacy-examples.

**Scope:** Define add/remove neighboring databases (state adjacency exactly) and randomized (ε,δ)-differential privacy: for every neighboring D,D′ and measurable S, P[M(D)∈S]≤eᵋP[M(D′)∈S]+δ. Define global L1 sensitivity. Prove postprocessing invariance; define and prove the Laplace mechanism with scale Δ₁f/ε; define the exponential mechanism with distribution proportional to exp(εu(D,r)/(2Δu)) and its privacy/utility bound; state basic and advanced adaptive composition with exact parameter conditions. Distinguish record-level central DP from local DP, client-level DP and secure aggregation.

**Proof route:** Compare likelihood ratios pointwise for Laplace density; bound the exponential-mechanism probability ratio by score sensitivity and partition functions; prove postprocessing by preimages of events. Derive basic composition by multiplying conditional privacy bounds. For advanced composition, use the moment/privacy-loss argument under the book’s theorem assumptions. Include the adjacency convention and numerical/floating-point caveat. DP controls the change from one neighboring record; it does not imply no sensitive inference about an attribute shared by many records.

**Examples:** Release a bounded count with calibrated Laplace noise; choose among finite hypotheses by exponential mechanism; postprocess a private release without further privacy loss.

**Requires:** def-finite-probability-space-and-event; def-expectation-of-a-nonnegative-or-integrable-random-variable; probability inequalities/union bounds from Cat1/2 where used.

**Sources:** [DR] Ch. 2, §§2.1–2.4, pp. 11–27; Ch. 3, §§3.1–3.5, §§3.6–3.7 and §§3.9–3.10, pp. 28–65; complete proofs of postprocessing, Laplace, exponential mechanism, basic/advanced composition and sparse vector were read. Exact theorem numbers are indexed in sources.json.

### ML-02-17 — Private ERM and private online learning

**Pages:** ml02-private-learning / ml02-private-learning-examples.

**Scope:** Define finite hypothesis class C, empirical 0–1 error and agnostic PAC objective. Give private ERM by applying the exponential mechanism to score −err_D(h), with sensitivity 1/n. Under iid data, finite C, privacy ε, desired excess error α, and failure probability β, combine mechanism utility and uniform convergence to obtain sufficient n=O(max{(log|C|+log(1/β))/(εα), (log|C|+log(1/β))/α²}). State that this does not guarantee computational efficiency if C is huge. Define randomized weighted majority/Hedge for T adaptive or adversarial [0,1] losses and its expected regret O(√(log k/T)); for the private variant, include only the book’s exact privacy-composition and high-probability regret theorem with its ε,δ,β conditions.

**Proof route:** Private ERM is exponential-mechanism utility plus uniform convergence over finite C; state the confidence/log(1/β) terms instead of hiding them in an exact theorem. Hedge regret follows from the log-partition potential. Differential privacy of its private version follows by composing the per-round exponential mechanisms; use advanced composition and the book’s proof for its exact rate. Do not conflate empirical accuracy, population excess error, privacy, and computational efficiency.

**Examples:** Finite threshold class and a large finite class whose private ERM is information-theoretically possible but computationally infeasible to enumerate.

**Requires:** ML-02-16 for DP mechanisms/composition; Cat1 PAC/uniform-convergence suppliers for the learning definition and finite-class bound. This pair depends upstream only.

**Sources:** [DR] Ch. 11 §§11.1–11.2, pp. 216–230; complete private finite-class ERM calculation and online-learning proofs through Theorems 11.1–11.6. The source’s finite-class result is not an efficient learner for arbitrary classes.

### ML-02-18 — Federated averaging, local SGD, and SCAFFOLD

**Pages:** ml02-federated-optimization / ml02-federated-optimization-examples.

**Scope:** Define client objectives Fₖ and weighted global objective f(w)=Σₖ(nₖ/n)Fₖ(w); distinguish distributed iid minibatch SGD from federated data with non-IID/unbalanced clients, partial participation and limited communication. Give FedAvg’s sampled-client local-SGD and weighted-model-average algorithm, while marking the original evidence as empirical (it does not prove DP or a general convergence guarantee). Define local SGD’s synchronization schedule and gap H. State Stich’s convex local-SGD theorem with L-smooth, μ-strongly-convex f, unbiased stochastic gradients with variance ≤σ² and second moment ≤G², K workers, synchronization gap ≤H, and stepsize ηt=4/[μ(a+t)] for a>max{16L/μ,H}; for S_T=Σₜ₌₀^(T−1)(a+t)² and x̂_T=(KS_T)⁻¹ΣₖΣₜ(a+t)²xₜᵏ, give E[f(x̂_T)−f*]≤μa³‖x₀−x*‖²/(2S_T)+4T(T+2a)σ²/(μKS_T)+256TG²H²L/(μ²S_T). The resulting variance-dominated linear-computation speedup requires H=O(√(T/(Kb))) in the stated asymptotic regime. Define SCAFFOLD’s server/client control variates and corrected local update. State Karimireddy et al.’s theorem separately: β-smooth client objectives, unbiased stochastic gradients with within-client variance bound, exact client-sampling protocol, step-size restrictions, and its strongly-convex/general-convex/nonconvex rates. SCAFFOLD’s stated result needs no gradient-similarity assumption, unlike the paper’s FedAvg theorem.

The theorem audit should distinguish the original FedAvg empirical paper from the later FedAvg theorem in SCAFFOLD. In the latter, bounded gradient dissimilarity is N⁻¹Σᵢ‖∇fᵢ(x)‖²≤G²+B²‖∇f(x)‖² (with a stated convex relaxation); under its smoothness, variance, convexity and sampling assumptions, ηg≥√(N/S), ηl≤[6(1+B²)βKηg]⁻¹, and the strongly-convex round bound is Õ(σ²/(μKSε)+(1−S/N)G²/(μSε)+√βG/(μ√ε)+B²β/μ). For SCAFFOLD Theorem III, ηg=√(N/S); the smoothness/variance assumptions and local-step restrictions yield round bounds Õ(σ²/(μKSε)+β/μ+N/S) for strongly convex, Õ(σ²D²/(KSε²)+βD²/ε+NF/S) for general convex, and O(βσ²F/(KSε²)+(N/S)^(2/3)βF/ε) for nonconvex objectives. D=‖x₀−x*‖ and F=f(x₀)−f*. The nonconvex theorem controls expected gradient stationarity, not objective suboptimality; preserve the paper’s exact output definition. SCAFFOLD removes the gradient-dissimilarity hypothesis but still requires its stated β-smoothness, stochastic-gradient variance, sampling and step-size assumptions.

For these cited SCAFFOLD rates, use the paper’s equal-client objective f=N⁻¹Σᵢfᵢ and its uniform client-sampling protocol. Weighted example-count aggregation is a separate objective convention; although the paper notes weighted extensions, do not silently transfer a theorem or constants to that setting.

**Proof route:** For local SGD, follow the virtual synchronized iterate, minibatch variance reduction and drift bound in the full proof, retaining the dependence on H, K, σ² and G². For FedAvg/SCAFFOLD, state gradient- and Hessian-dissimilarity assumptions when invoking their theorems; follow the one-round progress, control-lag, variance and client-drift lemmas in the appendices. Do not report empirical FedAvg communication savings as a theorem. “Data stay local” is a data-flow property, not differential privacy; updates can leak information.

**Examples:** Two clients with shifted local optima showing FedAvg client drift; SCAFFOLD correction with controls ci and c; compare one local step with frequent synchronization.

**Requires:** ML-02-01 for a convex statistical objective if used as the running example; Cat3 optimization/convexity interfaces may be consumed when available. No Cat3 item is made dependent on this pair. Any privacy claim additionally requires ML-02-16 and a formally analyzed client-level mechanism.

**Sources:** [FEDAVG] §§1–4, especially §2 Algorithm 1, pp. 1–12: method and experiments, not a convergence proof. [LOCALSGD] §§2–3, Theorem 2.2 and Corollary 2.3, pp. 4–8; complete proof in Appendix A and asynchronous variant §5/Appendix B. [SCAFFOLD] §§2–5, Theorems I–III, and Appendices B, D.2 and E.1–E.2; full theorem proofs and assumptions A1–A5 were read. SCAFFOLD’s quadratic-only Theorem IV must not be generalized to arbitrary smooth objectives.

## Topic-to-pair and source matrix

| Assigned topic | Pair(s) | Main full-text sources |
|---|---|---|
| Linear models; sparse prediction; support recovery | ML-02-01, ML-02-02 | ESL, WAIN |
| Kernel/RKHS/SVM | ML-02-03 | ESL, GPML |
| GP learning | ML-02-04 | GPML, ESL |
| Trees/forests/boosting | ML-02-05–07 | ESL, BREIMAN |
| Clustering/mixtures | ML-02-08 | ESL; Cat3 EM interface |
| Spectral clustering | ML-02-09 | VONLUX, ESL |
| Dimension reduction/manifold learning | ML-02-10 | ESL, VONLUX |
| Metric learning | ML-02-12 | LMNN |
| Graphical and latent-variable models | ML-02-11, ML-02-13 | ESL, GLASSO |
| Causal discovery | ML-02-14–15 | PC, ANM |
| Privacy/private learning | ML-02-16–17 | DR |
| Federated/distributed learning | ML-02-18 | FEDAVG, LOCALSGD, SCAFFOLD |

## Minimal suppliers and open proof obligations

1. Keep Cat1 learning-theory results upstream for PAC, finite-class uniform convergence, margin/Rademacher bounds and any risk claims. Do not convert an empirical benchmark into a theorem.
2. Coordinate with Cat3 for generic EM/ELBO, finite-dimensional Gaussian conditioning, and any optimization/factorization interfaces it independently needs. GP finite-dimensional regression and mixture EM may consume Cat3, never the reverse.
3. Add local convex duality/KKT/Slater and PSD-kernel interfaces for the SVM pair if not already in Cat3; otherwise prove the finite-dimensional facts in the Cat4 pair. No new upstream dependency is required.
4. Add local finite-dimensional Gaussian-conditioning/precision-zero conditional-independence results for graphical models. Pairwise Gaussian zero precision is not proved by ESL’s chapter.
5. Add local DAG/Markov-equivalence, d-separation and conditional-independence definitions before proving PC. The PC paper’s high-dimensional consistency proofs rely on those standard characterizations.
6. Preserve the distinction between population causal identification and sample algorithm performance for PC/ANM. Exact faithfulness/restricted-ANM assumptions and independence-oracle conditions must appear in the theorem statement.
7. PCA’s Frobenius reconstruction theorem is distinct from the checked operator-norm Eckart–Young item. Prove the needed norm statement rather than citing the wrong version.
8. RKHS/Bochner/Mercer claims, generic NMF monotonicity, ICA identifiability and graphical-model Hammersley–Clifford are not all proved in the cited ESL/GPML treatments. The dossier records them as local proof obligations or limited algorithm descriptions.
9. DP proofs must name adjacency granularity, mechanism, composition parameters and model (central, local or client-level). Federated averaging alone is not a privacy guarantee.
10. For local SGD/SCAFFOLD, preserve the stochastic-gradient variance, smoothness, convexity, client sampling and synchronization assumptions exactly; the deep-learning/federated empirical papers do not establish convergence outside those regimes.

## Integration caveat: forest limiting ties

Root integration check found that vote-proportion convergence by the iid strong law does not alone prove classifier-risk convergence at zero limiting margin. For a fixed binary observation with equiprobable constant positive/negative random trees, the limiting margin is zero while odd finite-forest majority errors fluctuate. The canonical scaffold therefore retains unrestricted vote-proportion convergence, and states classifier-risk convergence only under probability zero of limiting ties, with a dominated-convergence proof. This additional hypothesis is a local mathematical correction, not a claim that Breiman explicitly supplied it.
