# Learning-05 source dossier: advanced representation and generative learning

**Assignment.** Self-supervised and contrastive learning; autoencoders and VAEs; GANs, integral probability metrics (IPMs), and optimal transport; normalizing flows; score, diffusion, and flow-matching models; energy models; neural ODE/SDE models; multimodal, transfer, and foundation models; uncertainty and calibration. The organizing rule is to separate exact population identities and conditional theorems from finite-network training results.

**Reading record.** Twenty-one full source PDFs have been lawfully cached with complete page-text extraction under [`scratchpad/statistics-advanced-scaffolds-2026-10-11/sources/learning-05/`](../../../scratchpad/statistics-advanced-scaffolds-2026-10-11/sources/learning-05/). Extraction covers every PDF page; reading does not. [`sources.json`](sources.json) records the actual PDF pages read, the exact source range used for each claim, hypotheses, gaps, cache paths, and PDF/text SHA-256 hashes. Where selected ranges rather than a full paper were read, that is stated directly. No claim below treats extraction as a substitute for reading.

## Existing library inspection

I inspected the published page inventory and the bodies of the following actual library pages. There is currently no published statistics or machine-learning category and no item on contrastive/representation learning, autoencoders, VAE, GAN, IPM/Wasserstein transport, energy-based learning, score matching, diffusion, normalizing flows, neural ODE/SDE generative models, multimodal/foundation models, or calibration. The listed items are genuine mathematical/probability suppliers, not suppliers of ML performance claims.

| Existing page | Relevant published items and usable interface |
|---|---|
| `library/probability/probability-spaces-random-variables-and-expectation.md` | `def-law-or-distribution-of-a-random-element`; expectation and probability-space interfaces. |
| `library/probability/weak-convergence-tightness-and-representation.md` | `def-weak-convergence-of-borel-probability-measures`; `thm-portmanteau-theorem`; `thm-prokhorov-tightness-theorem-on-polish-spaces`; `thm-empirical-measures-of-iid-euclidean-samples-converge-weakly`; `lem-countable-compactly-supported-tests-determine-euclidean-weak-convergence`. The empirical-measure theorem is not a generalization or generative-model theorem. |
| `library/probability/conditional-distributions-and-regular-conditional-probability.md` | `thm-conditional-density-formula`; `thm-bayes-formula-for-dominated-kernels`. Useful for conditional latent-variable notation, not an ELBO supplier. |
| `library/probability/markov-kernels-and-markov-chains.md` | Markov-kernel/chain definitions for stochastic transitions; does not supply reverse-time SDE theory. |
| `library/probability/brownian-motion-construction-and-continuity.md` | `def-brownian-motion`; `def-d-dimensional-brownian-motion`; `thm-existence-of-continuous-brownian-motion`; `def-wiener-measure-on-continuous-path-space`. |
| `library/probability/the-ito-integral-with-respect-to-brownian-motion.md` | `def-continuous-brownian-ito-process`; `def-ito-integral-for-square-integrable-predictable-processes`; `thm-ito-isometry-and-linearity-in-predictable-l2`. |
| `library/probability/itos-formula-and-brownian-martingales.md` | `thm-multidimensional-ito-formula-for-brownian-driven-processes`; `thm-quadratic-covariation-of-brownian-ito-processes`. These do not establish general SDE well-posedness, smooth transition densities, or time reversal. |
| `library/real-analysis/convex-and-semicontinuous-functions-on-rn.md` | `thm-hessian-characterises-convexity`; supporting convexity facts only. |
| `library/linear-algebra/matrix-differentiation-and-first-order-spectral-perturbation.md` | `thm-gradient-and-hessian-of-the-frobenius-least-squares-functional`; local differentiation support, not a neural optimizer convergence theorem. |
| `library/real-analysis/fubini-and-change-of-variables.md`; `library/linear-algebra/matrix-differentiation-and-first-order-spectral-perturbation.md` | `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`; `def-jacobian-determinant-of-a-c-one-map`; `thm-determinant-differential-and-jacobis-formula`. The Euclidean change-of-variables theorem is the direct density-transform supplier for a global $C^1$ diffeomorphism. It explicitly assumes countable choice, which any consuming proof must carry. |
| `library/real-analysis/picard-lindelof-and-first-order-odes.md`; `library/differential-geometry/euclidean-ordinary-differential-equations-with-smooth-dependence.md` | `thm-existence-and-uniqueness-of-a-maximal-ode-solution`; `cor-globally-lipschitz-odes-have-global-solutions`; `thm-smooth-dependence-of-ode-solutions-on-parameters`. The global result assumes a globally state-Lipschitz field. These supply exact ODE flow existence/uniqueness and parameter dependence, not numerical solver error bounds. |

**Supplier boundary.** There is no published compact-metric Kantorovich–Rubinstein duality, Wasserstein transport theorem, SDE existence/uniqueness and forward equation, Anderson reverse-time theorem, probability-flow ODE theorem, numerical ODE/SDE error result, VAE/ELBO identity, or statistical calibration theorem. There is also no theorem for finite neural-network training of the methods in this dossier. The published Euclidean change-of-variables page can support the normalizing-flow density formula when its $C^1$ hypotheses and countable-choice assumption hold; it does not turn a merely invertible or numerically approximated map into a diffeomorphism.

## Proposed pair sequence

These are coverage-complete candidate pairs for the learning-05 scope, in dependency order. Their local labels `GEN-01`–`GEN-14` are dossier labels, not canonical item/page IDs; the Category-4 scaffold author may renumber them into the track-wide `ML-xx` sequence. The teaching pair IDs proposed below are new interfaces and must not be presented as already published results. Every claimed dependency points to mathematics, Categories 1–3, or an earlier Category-4 pair. No Category-3 dependency points to any Category-4 pair.

### Candidate GEN-01 — Self-supervised and contrastive representations

**Pages:** `self-supervised-and-contrastive-representation-learning` / `self-supervised-and-contrastive-representation-learning-examples`.

**Proposed items:** `def-positive-and-negative-pair-contrastive-objective` (Definition); `alg-empirical-contrastive-risk-minimisation` (Algorithm); `thm-latent-class-contrastive-transfer-bound` (Theorem, conditional); `ex-contrastive-class-collision-failure` (Example/counterexample).

**Scope:** Define view/positive-pair and negative-pair sampling, normalized embeddings, temperature-scaled objectives, and the distinction between representation (h) and projection head (gcirc h). State the Arora/Saunshi latent-class setup exactly: classes (csim\rho), positive examples are independent within-class draws, negatives are marginal draws, bounded representation norm, a finite iid triplet sample, downstream binary tasks generated from the same class family, and a loss/function-class generalization term. Explain the class-collision probability (	au=\Pr(c=c')), within-class deviation, and the additional concentration/margin conditions needed for a useful supervised transfer conclusion. Present SimCLR as a specific empirical recipe, not a theorem.

**Proof route:** Jensen’s inequality compares the expected pairwise contrastive loss with the loss of class-mean representations; a Rademacher/vector-contraction bound controls the finite-sample ERM gap; the supplementary appendices supply the proofs. State the resulting comparator bound with its (1-\tau) denominator and its explicit failure regime. The paper’s multiclass top-1 performance is outside its theorem. SimCLR’s batch, augmentation, and benchmark results are reported observations.

**Examples:** A finite latent-class model where positives identify class but collisions or high within-class variance destroy a margin; a two-view image augmentation example to show which invariances the task imposes.

**Requires:** Existing probability-law/expectation interfaces above; earlier Category-4 foundations pair from the learning-01 scope for ERM/generalization/Rademacher complexity. No contrastive learning result may be used as a Category-3 supplier.

**Sources:** Arora/Saunshi main paper §§2–5, Theorems 4.1 and 4.5, Corollary 5.1.1, pp. 2–9, and its supplementary proofs §§A.2–A.4, pp. 2–8; Chen et al. (SimCLR) §§2–5, pp. 2–9, and appendix pp. 19–20. Actual read ranges are in `sources.json`.

### Candidate GEN-02 — Reconstruction, denoising, and masked autoencoders

**Pages:** `reconstruction-and-masked-autoencoders` / `reconstruction-and-masked-autoencoders-examples`.

**Proposed items:** `def-reconstruction-autoencoder` (Definition); `alg-masked-autoencoder-pretraining` (Algorithm); `ex-reconstruction-objective-shortcut` (Example).

**Scope:** Define encoder/decoder reconstruction risk, corruption/denoising objectives, masking, and the asymmetric MAE design in which the encoder sees only visible patches and a smaller decoder predicts masked pixels. Separate reconstruction of a specified target from semantic sufficiency, identifiability, or downstream usefulness.

**Proof route:** Derive the empirical MSE objective from the declared masked-patch sampling distribution. No semantic-representation theorem is proposed: the transfer results in He et al. are benchmark evidence for their architecture, masking ratio, data, optimizer, and compute settings.

**Examples:** Constant/shortcut reconstructions under a poorly chosen loss, and the 75%-mask image-patch setup from MAE.

**Requires:** Earlier Category-4 architecture pair from the learning-03 scope and training/objective pair from learning-04; probability expectations. No claim that reconstruction alone guarantees useful features.

**Sources:** He et al., §§2–4 and main empirical tables/ablations, pp. 2–8. This is an empirical method paper, not a theorem source.

### Candidate GEN-03 — Variational autoencoders and the ELBO

**Pages:** `variational-autoencoders-and-the-elbo` / `variational-autoencoders-and-the-elbo-examples`.

**Proposed items:** `def-variational-autoencoder` (Definition); `thm-elbo-kl-decomposition` (Theorem/identity); `alg-reparameterized-variational-training` (Algorithm); `ex-vae-inference-gap` (Example).

**Scope:** For a normalized joint model $p_\theta(x,z)$ and variational conditional $q_\phi(z\mid x)$, derive
\[
\log p_\theta(x)=\mathcal L(\theta,\phi;x)+\mathrm{KL}(q_\phi(z\mid x)\Vert p_\theta(z\mid x)),
\]
so the ELBO is a lower bound when the KL is well-defined and nonnegative. Explain a pathwise estimator $z=g_\phi(\epsilon,x)$, with parameter-independent noise $\epsilon$, and distinguish the identity from Monte Carlo estimation, optimization, posterior accuracy, and identifiability.

**Proof route:** Factor the posterior $p_\theta(z\mid x)$, expand the KL, and rearrange under integrability and posterior-density assumptions. For the pathwise gradient, state differentiability and domination/integrability conditions sufficient to interchange derivative and expectation; Kingma–Welling call the conditions mild but do not supply a general theorem with a complete hypothesis list. The Cat-3 Bayesian-computation scaffold should own the generic variational-inference/ELBO interface; this pair consumes it.

**Examples:** Gaussian latent-variable model with an analytic posterior and a restricted $q_\phi$, illustrating a nonzero variational gap.

**Requires:** Category-3 computational-inference (bayesian-05) ELBO/variational-inference interface (if the integrated Cat-3 author provides that interface); existing conditional-density/Bayes interfaces. The dependency is one-way: Category 3 must not call this pair.

**Sources:** Kingma & Welling, §§2–4, especially the ELBO and reparameterization derivations, pp. 2–7; full 9-page PDF read. The identity is exact; the neural training claims are not.

### Candidate GEN-04 — Energy-based models, score matching, and contrastive divergence

**Pages:** `energy-models-score-matching-and-contrastive-divergence` / `energy-models-score-matching-and-contrastive-divergence-examples`.

**Proposed items:** `def-energy-based-density-and-partition-function` (Definition); `thm-score-matching-integration-by-parts-identity` (Theorem, conditional); `alg-contrastive-divergence-k` (Algorithm); `ex-short-run-contrastive-divergence-bias` (Example).

**Scope:** Define (p_\theta(x)=\exp(-E_\theta(x))/Z_\theta), explain why (Z_\theta) is difficult, and distinguish normalized likelihood gradients from score objectives. State Hyvärinen’s integration-by-parts identity with differentiable data density, square-integrable scores/derivatives, and boundary decay (p_{data}(x)\psi_\theta(x)\to0); the parameter-dependent score objective then avoids the unknown normalizer. State identifiability and correct-specification conditions for a population minimizer. Explain Hinton’s exact likelihood gradient versus finite-chain CD-k, including the omitted derivative of the reconstruction/transition distribution.

**Proof route:** Expand squared score discrepancy and integrate the cross term by parts; boundary conditions remove the boundary contribution and leave the stated objective up to a parameter-independent constant. Do not elevate the empirical-consistency corollary in Hyvärinen to a general theorem: its proof sketch does not establish uniform convergence/argmin regularity. For CD, show the finite-chain expected update is not generally the likelihood gradient and cite the paper’s own bias discussion; do not imply a general likelihood-optimization guarantee.

**Examples:** A normalized exponential-family model with a tractable partition function compared with an unnormalized model; a short Gibbs chain that fails to reach equilibrium.

**Requires:** Category-3 computational-inference (bayesian-05) likelihood/latent-inference and MCMC (bayesian-03) interfaces; existing conditional expectation and measure/probability items. These Category-3 prerequisites remain independent of ML-05.

**Sources:** Hyvärinen, §§2–4 and consistency discussion, pp. 2–10, plus assumptions/conclusion pp. 13–15; Hinton, pp. 1–5 only for likelihood-gradient and CD derivation. The Hinton text extraction is noisy for its old two-column layout and pp. 6–19 were not read; restrict claims to the read derivation.

### Candidate GEN-05 — GAN minimax games and their ideal optimum

**Pages:** `generative-adversarial-networks` / `generative-adversarial-networks-examples`.

**Proposed items:** `def-gan-minimax-objective` (Definition); `thm-optimal-discriminator-and-js-divergence` (Theorem, unrestricted function-space setting); `ex-neural-game-nonconvergence` (Example/limitation).

**Scope:** Define generator and discriminator distributions/objective, derive the pointwise optimal discriminator (D_G^*(x)=p_{data}(x)/(p_{data}(x)+p_G(x))) almost everywhere where the densities are defined, and substitute it to obtain (C(G)=-\log4+2\,\mathrm{JS}(p_{data}\Vert p_G)). Thus the unrestricted global distribution optimum is equality of the generated and data laws. Explicitly distinguish this ideal minimax result from alternating gradient descent with finite neural networks.

**Proof route:** Pointwise maximize the binary cross-entropy integrand in (D(x)), then rewrite the optimized functional using the KL definition of Jensen–Shannon divergence. The convergence proposition requires unlimited capacity, an optimal discriminator at each generator update, and infinitesimal updates in distribution space; it does not prove convergence of the neural algorithm.

**Examples:** Separated supports and an overconfident discriminator; a finite-parameter game whose vector field cycles.

**Requires:** Probability densities/expectation and Category-3 KL/convexity interfaces; earlier Category-4 training/optimization pair from the learning-04 scope. No practical GAN convergence theorem is asserted.

**Sources:** Goodfellow et al., §§2–4 and convergence discussion, pp. 2–6; complete 9-page paper read.

### Candidate GEN-06 — IPMs, Wasserstein distance, and WGAN

**Pages:** `ipms-optimal-transport-and-wasserstein-gans` / `ipms-optimal-transport-and-wasserstein-gans-examples`.

**Proposed items:** `def-integral-probability-metric` (Definition); `def-wasserstein-one-distance` (Definition); `thm-kantorovich-rubinstein-duality-on-compact-metric-spaces` (Theorem); `thm-wgan-ideal-critic-generator-gradient` (conditional Theorem); `ex-weight-clipping-is-not-exact-lipschitz-enforcement` (Example).

**Scope:** Contrast an IPM over a function class with $W_1$’s coupling formulation; state the compact-metric KR dual using 1-Lipschitz test functions. Then state the WGAN paper’s differentiability result only on its compact data space, for a locally Lipschitz generator and its local Lipschitz/parameter regularity assumptions. The theorem about an ideal optimal critic is not a theorem about an approximate neural critic or full adversarial optimization. Do not silently extend the paper’s compact-space theorem to arbitrary $P_1$ spaces.

**Proof route:** A sound KR supplier route is finite-metric linear-programming duality followed by quantization/approximation for compact metric spaces, or a complete compact-space OT duality proof. The read Santambrogio short note derives $\psi^c=-\psi$ for 1-Lipschitz $\psi$ but treats the inf–sup exchange formally; it is not a proof supplier for full KR duality. Once KR is supplied, WGAN’s coupling/same-noise argument and bounded convergence establish continuity; differentiation uses its Assumption 1 and an ideal critic. Weight clipping is the paper’s practical proposal, which the authors themselves describe as a poor enforcement of the Lipschitz constraint.

**Examples:** Two separated point masses (TV/JSD versus $W_1$ behavior); compact-support generator under a shared latent variable; a clipped affine critic whose slopes cannot express the desired function.

**Requires:** Proposed pre-Category-4 mathematics supplier `P-KR-01` (compact-metric KR duality) and Category-3 measure/probability basics; earlier Category-4 training/optimization pair from the learning-04 scope. `P-KR-01` must be independent of Category 4 so it cannot create a Category-3-to-Category-4 path.

**Sources:** Arjovsky et al., §§2–3, Theorems 1–2, Assumption 1 and proof in appendix, pp. 2–8 and 20–25; Santambrogio, pp. 1–7, for the definitions and partial dual reduction only. Santambrogio’s formal duality gap is recorded in `sources.json`.

### Candidate GEN-07 — Exact-density normalizing flows

**Pages:** `normalizing-flows-and-exact-density-models` / `normalizing-flows-and-exact-density-models-examples`.

**Proposed items:** `def-normalizing-flow` (Definition); `thm-change-of-variables-density-for-diffeomorphic-flow` (Theorem); `thm-triangular-flow-universal-density-representation` (conditional representation theorem); `ex-singular-data-support-limitation` (Example).

**Scope:** For equal-dimensional (C^1) global bijection $T$ with (C^1) inverse and base density (p_U), derive (p_X(x)=p_U(T^{-1}x)|\det JT^{-1}(x)|); compose maps by adding log-Jacobian determinants. Present triangular conditional-CDF representation only under everywhere-positive target density and the paper’s conditional smoothness assumptions. It is a representational existence construction, not a finite architecture’s trainability or approximation guarantee. Explain full-dimensional smooth-density limits and the need for dequantization/augmentation or alternative models for discrete/singular data.

**Proof route:** Apply the library’s Euclidean (C^1) change-of-variables theorem to a diffeomorphism; chain rule and determinant multiplicativity give the composition formula. The triangular CDF construction is proved successively coordinate by coordinate and requires positive/smooth conditional densities. Keep exact density algebra separate from finite numerical estimation.

**Examples:** Affine coupling with triangular Jacobian; a density on a lower-dimensional manifold that cannot be represented by a smooth full-dimensional density without augmentation/noise.

**Requires:** Existing `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, Jacobian determinant and determinant differential items; probability density interfaces. Importing that theorem carries its countable-choice assumption. No numerical solver prerequisite for discrete flows.

**Sources:** Papamakarios et al., §2, pp. 3–6; §3 representation, pp. 12–15; continuous-flow discussion only for the next pair, pp. 31–33; limitations/architecture material pp. 52–54.

### Candidate GEN-08 — Neural ODEs and continuous normalizing flows

**Pages:** `neural-odes-and-continuous-normalizing-flows` / `neural-odes-and-continuous-normalizing-flows-examples`.

**Proposed items:** `def-neural-ode` (Definition); `thm-instantaneous-change-of-variables-for-ode-flow` (conditional Theorem); `alg-adjoint-sensitivity-method` (Algorithm); `ex-numerical-adjoint-error` (Example/limitation).

**Scope:** Define (\dot z=f_\theta(z,t)); under a state-Lipschitz field and conditions for a differentiable flow, state (d\log p_t(z_t)/dt=-\operatorname{tr}(\partial f_\theta/\partial z)). Explain adjoint sensitivity and continuous-time likelihood accounting. Distinguish exact continuous dynamics from discretized ODE solver outputs, and continuous adjoint gradients from the gradients of a finite numerical computation.

**Proof route:** Differentiate the flow Jacobian, use Jacobi’s determinant formula, and differentiate the change-of-variables density along the path. Cite the existing global Lipschitz ODE result for unique global trajectories under its hypotheses; state additional differentiability/boundedness assumptions needed for the Jacobian calculation. The neural-ODE paper discusses reverse-solve sensitivity and reconstruction issues; no generic numerical accuracy bound follows.

**Examples:** One-dimensional linear field with closed-form density change; a stiff field where solver tolerance affects likelihood/gradient.

**Requires:** Existing `thm-existence-and-uniqueness-of-a-maximal-ode-solution`, `cor-globally-lipschitz-odes-have-global-solutions`, smooth-dependence theorem, change-of-variables, determinant differential; proposed independent numerical supplier `P-NUM-ODE-01` for convergence/error if the course teaches implementation error bounds. This numerical supplier must predate Categories 3–4.

**Sources:** Chen et al., §§2–3 and Appendix B/C, pp. 2–9 and 13–16; Papamakarios et al., continuous-flow section, pp. 31–33. State exact mathematical and numerical regimes separately.

### Candidate GEN-09 — Discrete-time diffusion and DDPM objectives

**Pages:** `discrete-diffusion-and-variational-objectives` / `discrete-diffusion-and-variational-objectives-examples`.

**Proposed items:** `def-forward-gaussian-diffusion-chain` (Definition); `thm-gaussian-forward-and-posterior-kernels` (Theorem/identity); `thm-ddpm-elbo-decomposition` (Theorem/identity); `alg-epsilon-prediction-diffusion-training` (Algorithm).

**Scope:** Define fixed forward Gaussian noising chain and learned reverse Gaussian chain. Derive (q(x_t\mid x_0)) and (q(x_{t-1}\mid x_t,x_0)), and decompose the variational lower bound into endpoint and per-step KL terms. State carefully that the noise-prediction objective is a weighted ELBO term, while the commonly used `L_simple` deliberately drops weights and therefore is not exact maximum-likelihood training. Separate the exact finite-chain identities from learned score/noise estimation and empirical samples/metrics.

**Proof route:** Repeated Gaussian marginalization gives the closed forward marginal and Gaussian conditioning gives the posterior kernel; apply the Category-3 ELBO decomposition to the latent chain. Algebra yields the weighted noise-prediction term. The Cat-3 ELBO is a prerequisite, never a consumer of this Category-4 pair.

**Examples:** Scalar Gaussian chain with analytic posterior; compare weighted variational objective with unweighted simple loss.

**Requires:** Category-3 computational-inference (bayesian-05) ELBO/latent-variable interface, Category-3 Gaussian conditioning and probability; previous GEN-03 may share notation but must not be the only supplier for Cat 3.

**Sources:** Ho et al., §§2–4, pp. 2–9, appendix posterior/objective derivations pp. 13–16; empirical results remain empirical.

### Candidate GEN-10 — Score SDEs and reverse-time generation

**Pages:** `score-sde-and-reverse-time-diffusion` / `score-sde-and-reverse-time-diffusion-examples`.

**Proposed items:** `def-forward-diffusion-sde-and-score` (Definition); `thm-anderson-reverse-time-diffusion` (conditional Theorem); `thm-probability-flow-ode-marginals` (conditional Theorem); `alg-predictor-corrector-score-sampling` (Algorithm).

**Scope:** Define forward diffusion (dX=f(X,t)dt+g(t)dW) and score (\nabla_x\log p_t). Present Anderson’s theorem with its actual regularity conditions: unique strong forward solution, smooth density solving the forward Kolmogorov equation, and the required unique smooth joint KFP solution. The general state-dependent diffusion drift contains a density-divergence correction; the familiar (f-g^2\nabla\log p_t) reverse drift is the state-independent scalar (g(t)) specialization (with reversed-time convention stated). For Song et al., state the exact-score reverse SDE and probability-flow ODE as continuous population equations with matching one-time marginals, not as a guarantee for learned finite scores or finite-step sampling.

**Proof route:** Anderson derives reverse increments and drift by forward/reverse joint Fokker–Planck equations and proves the reversed noise has the Brownian independence properties. The probability-flow ODE follows by matching the Fokker–Planck equation to the continuity equation. The existing library only has Brownian motion and Itô calculus; it does not supply forward SDE well-posedness, smooth transition densities, KFP regularity, or reverse-time theorem. These must be explicit earlier mathematics/probability suppliers.

**Examples:** Ornstein–Uhlenbeck process with known score and reverse dynamics; show why a learned-score approximation leaves an unquantified sampling error absent score and solver error bounds.

**Requires:** Independent pre-Category-3/4 supplier `P-SDE-01` (Itô SDE existence/uniqueness, Fokker–Planck/KFP regularity, time reversal); Category-3 Brownian/Itô interfaces already present; `P-NUM-SDE-01` if sampler convergence/error is taught. No Cat-4 result may serve as a Cat-3 SDE prerequisite.

**Sources:** Anderson, pp. 1–9 for theorem and proof; Song et al., §§2–4 pp. 2–5 and appendices on probability flow/sampling pp. 13–15, 17–19, 31–32. Song’s “exact likelihood” refers to the continuous equation with exact score/divergence; numerical trace and solver estimates in practice are approximations.

### Candidate GEN-11 — Conditional flow matching and transport paths

**Pages:** `flow-matching-and-transport-paths` / `flow-matching-and-transport-paths-examples`.

**Proposed items:** `def-probability-path-and-velocity-field` (Definition); `thm-conditional-flow-matching-gradient-identity` (conditional Theorem); `thm-gaussian-conditional-optimal-transport-map` (Theorem); `alg-flow-matching-training-and-sampling` (Algorithm).

**Scope:** Define a probability path and continuity equation. State the conditional-to-marginal vector-field theorem with regularity permitting differentiation under the integral; state that the conditional-flow-matching objective equals the marginal-flow-matching objective up to a parameter-independent constant under positivity, Fubini, decay, and boundedness assumptions. Derive the Gaussian conditional OT interpolation used in the paper. Explicitly say conditional OT paths do not make the resulting marginal vector field globally optimal transport. Training/image-sampling gains are experimental.

**Proof route:** Integrate the conditional continuity equation over conditioning variables to obtain the marginal continuity equation. Expand the squared objective and use conditional expectation to show the difference is parameter-independent; use a Cauchy–Schwarz covariance argument for the Gaussian optimal affine coupling if teaching its optimality. Solve the learned field as an ODE using GEN-08’s exact flow results and state numerical integration limits separately.

**Examples:** Gaussian prior-to-data conditional interpolation; demonstrate that a mixture of straight conditional trajectories can induce curved marginal flow.

**Requires:** GEN-08 continuous flow; `P-KR-01` only if a Wasserstein-1 discussion is included; independent $W_2$ Gaussian coupling proof or local covariance/Cauchy–Schwarz argument for the Gaussian path. `P-NUM-ODE-01` for solver-error claims. No reliance on a blanket OT claim.

**Sources:** Lipman et al., §§2–4, Theorems 1–3, pp. 2–7; appendices pp. 14–16 for sufficient regularity and derivations. Empirical model comparisons are not included as formal consequences.

### Candidate GEN-12 — Multimodal alignment and transfer

**Pages:** `multimodal-contrastive-alignment-and-transfer` / `multimodal-contrastive-alignment-and-transfer-examples`.

**Proposed items:** `def-symmetric-image-text-contrastive-loss` (Definition); `alg-zero-shot-prompt-classification` (Algorithm); `ex-prompt-and-distribution-sensitive-transfer` (Example).

**Scope:** Define CLIP’s symmetric image-to-text/text-to-image in-batch contrastive loss, encoders, normalized embeddings, temperature, and zero-shot prompt classifier. Explain its use of 400 million web image–text pairs and reported benchmark/multitask transfer. All zero-shot accuracy, robustness, transfer and safety properties are empirical for the measured data, architecture, pretraining and prompt choices. Include the authors’ overlap analysis and stated limitations rather than claiming universal OOD/general-reasoning transfer.

**Proof route:** Verify the loss is the stated batch cross-entropy and show how normalized dot products produce the logits. There is no theorem deriving general transfer from paired web data; mark all performance as experiment. Contrastive latent-class theory from GEN-01 does not automatically apply because web captions, pair sampling, task labels and class assumptions differ.

**Examples:** Prompt wording changes class prototypes; image–text retrieval versus zero-shot classification; semantically mismatched web captions.

**Requires:** GEN-01 contrastive objective; earlier Category-4 architecture pair from the learning-03 scope, training pair from learning-04, and generalization/shift pair from learning-01. All dependencies point into earlier Category-4 or Categories 1–3.

**Sources:** Radford et al., §§2–5, pp. 2–9, including training and evaluation limitations. Appendices pp. 10–16 were not read and must not support claims in this dossier.

### Candidate GEN-13 — Foundation models, transfer, and scaling claims

**Pages:** `foundation-models-transfer-and-scaling-evidence` / `foundation-models-transfer-and-scaling-evidence-examples`.

**Proposed items:** `def-foundation-model-as-broad-pretraining-and-adaptation` (Definition); `ex-empirical-language-model-scaling-law` (Example); `ex-pretraining-adaptation-interface-limitations` (Example).

**Scope:** Present Bommasani et al.’s broad-data/self-supervised pretraining followed by adaptation framing, transfer modalities, and the report’s risk/ecosystem analysis. Present Kaplan et al.’s fitted power laws for decoder-only Transformer cross-entropy as empirical regularities in its tested WebText2/data/model/compute ranges. Distinguish an observed scaling curve from a theorem about emergent capability, transfer, optimal compute allocation, future modalities, or out-of-distribution reliability. The report explicitly identifies theory and the pretrain/adapt interface as open issues.

**Proof route:** No formal proof is appropriate for the report’s taxonomy or empirical curves. Explain fitted regressions, reported ranges and caveats, and label claims empirical. A formal result may only be added if separately sourced and its hypotheses proved.

**Examples:** Reproduce a power-law fit over the paper’s observed range; contrast interpolation of measured cross-entropy with extrapolation to an unmeasured capability.

**Requires:** Earlier Category-4 architecture pair from the learning-03 scope, training/scaling pair from learning-04, and generalization/shift pair from learning-01. May consume Category-3 uncertainty/evaluation definitions. Does not supply Category-3 results.

**Sources:** Bommasani et al., pp. 3–12 (definition/ecosystem), 81–90 (training/adaptation), 118–122 (theory); Kaplan et al., pp. 1–6 and 20–22. Both are report/empirical sources, not theorem proofs.

### Candidate GEN-14 — Predictive uncertainty, calibration, and shift

**Pages:** `predictive-calibration-and-uncertainty-under-shift` / `predictive-calibration-and-uncertainty-under-shift-examples`.

**Proposed items:** `def-top-label-calibration` (Definition); `def-binned-expected-calibration-error` (Definition); `alg-validation-temperature-scaling` (Algorithm); `ex-calibration-degradation-under-shift` (Example).

**Scope:** Define top-label calibration $\Pr(Y=\widehat Y\mid C=p)=p$; distinguish calibration from accuracy, proper scoring rules (NLL/Brier) from binned ECE/MCE, and explain binning resolution/estimation limitations. Define scalar temperature scaling on logits and prove it preserves argmax; selecting $T$ by validation NLL is an empirical calibration procedure, not an exact or distribution-free guarantee. Summarize Ovadia et al.’s benchmark under specified covariate/corruption shifts and separate known-label shift from unknown-label OOD, where ordinary accuracy calibration cannot be measured without labels. No universal ensemble ordering or shift-robust-calibration theorem follows.

**Proof route:** Argmax invariance follows because division by $T>0$ preserves logit order. The conditional calibration definition is not a finite-sample guarantee; ECE is a bin-dependent estimator. Report Guo’s temperature-scaling outcomes and Ovadia’s benchmark patterns as empirical. State that iid validation-calibration does not imply calibration under shift.

**Examples:** A perfectly accurate but overconfident classifier; identical predictions with different temperature and ECE; shift-corrupted image benchmark with NLL/ECE changes.

**Requires:** Earlier Category-4 calibration/generalization/shift and evaluation pair from the learning-01 scope; Category-3 uncertainty (bayesian-02) or resampling (bayesian-06) interfaces if supplied, but never a Category-4 prerequisite for Category 3. Probability conditional-law interface exists.

**Sources:** Guo et al., pp. 1–8; Ovadia et al., full pp. 1–12. These are an empirical method paper and a benchmark, not distribution-free guarantees.

## Prerequisite and dependency design

### Independent suppliers to plan before Category 3 and Category 4

1. **`P-KR-01` — Kantorovich–Rubinstein duality on compact metric spaces.** State compact metric $X$, Borel probability measures, primal $W_1$ over couplings, and dual supremum over 1-Lipschitz functions. Provide a complete proof route: finite metric LP duality plus quantization/approximation, or a full compact-space Kantorovich duality proof. The short Santambrogio note is not sufficient: it gives the 1-Lipschitz $c$-transform reduction but does not prove the formal exchange of infimum and supremum. Put this supplier in independent analysis/measure mathematics before Cat 3, so no Category-3 result needs a Category-4 WGAN pair.
2. **`P-SDE-01` — Itô SDE well-posedness and reverse-time diffusion.** Add strong existence/uniqueness conditions; existence and smoothness of transition densities/forward Kolmogorov solutions; sufficient joint KFP regularity; and Anderson’s reverse-time result with its divergence correction and the time-only scalar-diffusion specialization. Existing Brownian/Itô pages alone are insufficient. Put it in independent probability/mathematics before Cat 3. Do not make Cat 3 depend on the learning-05 score-SDE pair.
3. **`P-NUM-ODE-01` — numerical ODE convergence and error.** State consistency/stability hypotheses and global error for Euler/RK methods, plus a separate sensitivity/log-density integration error account where relevant. The existing Picard–Lindelöf theorem proves an exact solution, not solver convergence. Put it among independent numerical suppliers before Cat 3.
4. **`P-NUM-SDE-01` — Euler–Maruyama strong/weak convergence and error.** State coefficient regularity, moment conditions, strong/weak orders and limits, and be clear these apply to a correctly specified SDE, not learned-score/model error. Put it among independent numerical suppliers before Cat 3.
5. **`P-OT-GAUSSIAN-01` (optional/local) — Gaussian $W_2$ optimal coupling.** If flow matching teaches the Gaussian conditional OT formula, either supply the exact covariance/affine map theorem in earlier mathematics, or prove only the special formula needed in GEN-11 via the covariance/Cauchy–Schwarz argument. Do not let a flow-matching experiment stand in for a general OT theorem.

### Directed edges

- Existing probability, measure, change-of-variables, Brownian/Itô and ODE items → GEN-01 through GEN-14 as listed per pair.
- `P-KR-01` → GEN-06; optionally GEN-11.
- `P-SDE-01` → GEN-10. `P-NUM-SDE-01` → only numerical error content in GEN-10.
- `P-NUM-ODE-01` → numerical error content in GEN-08 and GEN-11.
- Category-3 computational-inference scope (bayesian-05) ELBO/variational inference → GEN-03 and GEN-09; Category-3 MCMC scope (bayesian-03) → GEN-04; Category-3 uncertainty/evaluation may support GEN-14. These are Cat 3 → Cat 4 edges only.
- Earlier Category-4 pairs drawn from learning-01 (generalization/shift/calibration) → GEN-01, GEN-12–14; learning-03 (architectures/transformers) → GEN-02, GEN-12–13; learning-04 (optimization) → GEN-01, GEN-04–06, GEN-08–13. Final ML-xx pair IDs are assigned during integration. Within this sequence GEN-01 → GEN-12, GEN-07 → GEN-08 → GEN-11, and GEN-03 → GEN-09 are allowed. All edges point forward in Category 4.
- **Forbidden edge:** no Category-3 Bayesian/statistical computation pair may require any of GEN-01–GEN-14 or any other Category-4 item. Category 3 owns any generic optimization/factorization/ELBO interface it needs.

## Evidence classification and proof obligations

- **Exact mathematical identities under stated models:** VAE ELBO/KL decomposition; GAN optimal discriminator and Jensen–Shannon objective; flow change of variables for a global diffeomorphism; DDPM Gaussian kernels/ELBO algebra; Hyvärinen score-matching integration-by-parts identity; CLIP/SimCLR/MAE objective formulas; temperature-scaling argmax preservation.
- **Conditional theorems:** Arora/Saunshi latent-class contrastive transfer bound; WGAN compact-space regularity and ideal-critic gradient; Anderson reverse-time theorem; score-SDE probability-flow marginal equivalence for exact score; conditional-to-marginal flow-matching identities; ODE instantaneous density change under regularity; triangular normalizing-flow density representation under positivity/smoothness assumptions.
- **Empirical claims only:** SimCLR/MAE transfer, GAN/WGAN image quality and mode behavior, DDPM/score-SDE/flow-matching sample quality and speed, CLIP zero-shot/multimodal transfer and robustness, foundation-model scaling/capability, and all reported calibration-under-shift patterns.
- **Explicit open proof/completion obligations:** Full compact KR duality proof; SDE/KFP regularity supplier and time-reversal proof under usable assumptions; ODE/SDE numerical convergence and error suppliers; a complete differentiation-under-expectation statement for VAE pathwise gradients; Hyvärinen’s empirical argmin consistency sketch needs uniform convergence/argmin regularity before it can be taught as a theorem; no finite-neural-network convergence guarantee for GAN, contrastive, flow, score, or calibration algorithms is supported by these sources.

The exact range-by-range reading record, source notes, and hashes are in [`sources.json`](sources.json). The source cache contains complete downloaded PDFs and full page-text extraction; paper pages not named there were not relied on. No tests or mathematical library changes were made in this reader task.
