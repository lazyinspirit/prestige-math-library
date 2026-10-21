# Batch 10 authoring notes — minimax signal detection and separation rates

Run: inverse-problems-knot-theory-all-109-2026-10-19
Role: beta · Batch: 10 · A/B pages: minimax-testing-and-detection-rates / minimax-testing-and-detection-rates-examples

## Active run and assignment

The live autopilot status was recomputed from .autopilot after authoring and reports the run as active in 1-scaffold, with 46/109 items covered and no work in flight. It remains held for owner repair/recertification; the current missing unit list includes batch 10. No outside-owner item or engine state was changed.

The assigned batch input digest is 618869dc6f33cd8031b1568271ee69f0cd860719b6a9fdd2645833750a24641b. Batch 10 is scheduled at dependency level 3 with prerequisite batches 7 and 8.

## Plan and inventory reconciliation

The controlling IP-10 design in research/plan-inverse-problems-track.md specifies five A claims and five B examples. research/plan-spec.json has empty item arrays for this pair, so it supplies no competing inventory. The generated assignment/scaffold inventory matches the five planned A carriers and five B leaves. Three additional A items were added under the Step 1 rule to create required local results: the q=2 fourth-power minimizer proof, a finite q=2 profile-existence lemma, and the separate sharp Gaussian-asymptotics corollary with its vanishing-largest-weight condition. The resulting inventory is 8 A items plus 5 B examples (13 total), below the 100-item cap. No planned claim was dropped.

The A page retains its assigned requirements: statistical-inverse-experiments-and-white-noise, gaussian-sequence-models-and-risk-decomposition, and the published minimax-lower-bounds-and-information-theoretic-methods. The item proofs use direct likelihood-ratio and total-variation calculations; no KL or Pinsker assertion is imported. The published finite-testing orientation supplier is separately recorded as an item edge in the cross-batch dependency file.

Pages are YAML frontmatter only with empty Markdown bodies. The native engine may set page_layout: compact-v1 after initial authoring.

## Dependency inventory and levels

In-run supplier levels were computed from actual item edges across batches 7, 8, and 10. The scoped DAG is acyclic, and every assigned item label matches the computed level: level 0 weighted-chi-square lemma; level 3 risk definition; level 4 q=2 profile existence/minimizer and Gaussian mixture lemma; level 5 q=2 detection boundary, sparse theorem, and the lambda-zero sparse example; level 6 sharp q=2 corollary and four q=2 rate examples. The complete 41-edge external page/item record, with current paths, statuses, file hashes, and supplier excerpts, is research/inverse-problems-knot-theory-all-109-2026-10-19-batch-10.cross-batch-dependencies.json.

The actual batch-7 and batch-8 supplier pages were checked against their manifests and coverage. Their current white-noise coordinate model states independent standard-normal coordinates; the Gaussian sequence model states Z_j=theta_j+epsilon sigma_j xi_j, hence scaling by sigma_j gives Y_j=eta_j+epsilon xi_j with eta_j=theta_j/sigma_j. The q=2 alternative uses the two stated weighted constraints. Published suppliers used locally were also inspected; exact quotes and every consuming proof step are recorded in the strict proof-contract file.

## Item-by-item claims, dependencies, and readiness

Each claim below is copied from the current authored Statement/Definition/Example and synchronized to the batch page manifest. Direct dependencies and final author-readiness records follow each claim.

### lem-ip-weighted-chi-square-triangular-array-limit — level 0, ready

**Claim:** Assume the Axiom of Choice. For each $n$, let $G_{n,1},\ldots,G_{n,m_n}$ be independent standard normal random variables, and let $w_{n,j}\ge0$ satisfy $2\sum_{j=1}^{m_n}w_{n,j}^2=1$. If $\max_{1\le j\le m_n}w_{n,j}\to0$, then $$T_n=\sum_{j=1}^{m_n}w_{n,j}(G_{n,j}^2-1)$$ has mean zero and variance one for every $n$ and converges in distribution to $N(0,1)$.

**Direct dependencies:** def-axiom-of-choice, def-standard-normal-and-normal-laws, lem-standard-normal-fourth-moment, thm-lindeberg-feller-central-limit-theorem-sufficiency, thm-dominated-convergence

**Readiness record:** owner=false, SHA-256 292d9f5fc4c15bbacb6f4f79d421e37b0b7554fe81b6974346cb24caafe70b5f. Ready: direct prerequisites were examined and recorded in batch-10.cross-batch-dependencies.json; proof inputs have exact supplier excerpts and mapped steps in batch-10.proof-contracts.json; scoped proof-layout, precheck, contract, citation, dependency, rendering, editorial, and content checks pass. Accessible source locators and dispositions are in batch-10.coverage.json.

### def-ip-minimax-detection-risk-and-separation — level 3, ready

**Claim:** Assume Countable Choice and use the Gaussian sequence inverse model with singular values $s_j>0$, inverse-noise weights $\sigma_j=s_j^{-1}$, and parameter coordinates $\theta=(\theta_j)\in\ell^2$. Let $a=(a_j)$ be a positive nondecreasing sequence with $a_j\to\infty$, and let $\sigma=(\sigma_j)$ be a positive nondecreasing sequence with $\sigma_j\to\infty$. For $\varepsilon>0$, put $\eta_j=\theta_j/\sigma_j$ and observe $Y_j=Z_j/\sigma_j=\eta_j+\varepsilon\xi_j$, where $Z$ is the normalized observation in the Gaussian sequence inverse model and the $\xi_j$ are independent standard normal random variables. For $0<q\le2$ and $r>0$, define $$\Theta_q(r)=\left\{\eta\in\mathbb R^{\mathbb N}:(\sigma_j\eta_j)_{j\ge1}\in\ell^2,\ \sum_{j=1}^{\infty}|a_j\sigma_j\eta_j|^q\le1,\ \sum_{j=1}^{\infty}\sigma_j^2\eta_j^2\ge r^2\right\}.$$ Test $H_0:\eta=0$ against $H_1:\eta\in\Theta_q(r)$ by a product-Borel measurable randomized test $\psi:\mathbb R^{\mathbb N}\to[0,1]$, where $\psi(y)$ is the rejection probability. Its type-I error and maximal type-II error are $$\alpha_\varepsilon(\psi)=\mathbb E_{\varepsilon,0}\psi,\qquad \beta_\varepsilon(\Theta_q(r),\psi)=\sup_{\eta\in\Theta_q(r)}\mathbb E_{\varepsilon,\eta}(1-\psi).$$ When $\Theta_q(r)=\varnothing$, define $\beta_\varepsilon(\Theta_q(r),\psi)=\beta_\varepsilon(\Theta_q(r),\alpha)=\gamma_\varepsilon(\Theta_q(r))=0$, the convention that no type-II error occurs when no alternative is possible. For $\alpha\in(0,1)$ define $$\beta_\varepsilon(\Theta_q(r),\alpha)=\inf_{\psi:\,\alpha_\varepsilon(\psi)\le\alpha}\beta_\varepsilon(\Theta_q(r),\psi),\qquad \gamma_\varepsilon(\Theta_q(r))=\inf_\psi\{\alpha_\varepsilon(\psi)+\beta_\varepsilon(\Theta_q(r),\psi)\}.$$ A positive family $r_\varepsilon^*\to0$ is a minimax separation rate if $\gamma_\varepsilon(\Theta_q(r_\varepsilon))\to1$ and $\beta_\varepsilon(\Theta_q(r_\varepsilon),\alpha)\to1-\alpha$ for every $\alpha\in(0,1)$ whenever $r_\varepsilon/r_\varepsilon^*\to0$, while $\gamma_\varepsilon(\Theta_q(r_\varepsilon))\to0$ and $\beta_\varepsilon(\Theta_q(r_\varepsilon),\alpha)\to0$ for every $\alpha\in(0,1)$ whenever $r_\varepsilon/r_\varepsilon^*\to\infty$.

**Direct dependencies:** def-ip-gaussian-sequence-inverse-model, def-countable-choice, def-finite-hypothesis-testing-beta

**Readiness record:** owner=false, SHA-256 eee3b0663e41c4c96fb808d481026bc9be362b949370d09c7d96d06bf131046c. Ready: direct prerequisites were examined and recorded in batch-10.cross-batch-dependencies.json; proof inputs have exact supplier excerpts and mapped steps in batch-10.proof-contracts.json; scoped proof-layout, precheck, contract, citation, dependency, rendering, editorial, and content checks pass. Accessible source locators and dispositions are in batch-10.coverage.json.

### lem-ip-q2-ellipsoid-extremal-profile-exists-for-small-r — level 4, ready

**Claim:** Assume the minimax detection-risk definition with $q=2$, and let $a_j$ and $\sigma_j$ be positive nondecreasing sequences tending to infinity. There is a constant $r_0>0$ such that for every $r\in(0,r_0)$ there exist $A,z_0>0$ with finite nonempty $S=\{j:Aa_j^2<1\}$ for which $$\widetilde\eta_j^2=z_0^2\sigma_j^2(1-Aa_j^2)_+$$ satisfies $$\sum_{j\ge1}\sigma_j^2\widetilde\eta_j^2=r^2,\qquad \sum_{j\ge1}a_j^2\sigma_j^2\widetilde\eta_j^2=1.$$

**Direct dependencies:** def-ip-minimax-detection-risk-and-separation

**Readiness record:** owner=false, SHA-256 d8551c1cde914a6ea2072e744a257f013a37d233c9e8a87a8a3269f09a4a81cc. Ready: direct prerequisites were examined and recorded in batch-10.cross-batch-dependencies.json; proof inputs have exact supplier excerpts and mapped steps in batch-10.proof-contracts.json; scoped proof-layout, precheck, contract, citation, dependency, rendering, editorial, and content checks pass. Accessible source locators and dispositions are in batch-10.coverage.json.

### lem-ip-q2-ellipsoid-extremal-profile-is-minimizer — level 4, ready

**Claim:** Assume the minimax detection-risk definition, $q=2$, and positive nondecreasing sequences $a_j$ and $\sigma_j$ with $a_j\to\infty$. Let $A,z_0>0$ and suppose $S=\{j:Aa_j^2<1\}$ is finite and nonempty. Define $\widetilde\eta_j^2=z_0^2\sigma_j^2(1-Aa_j^2)_+$ and assume $$\sum_{j\ge1}\sigma_j^2\widetilde\eta_j^2=r^2,\qquad \sum_{j\ge1}a_j^2\sigma_j^2\widetilde\eta_j^2=1.$$ Then $\widetilde\eta\in\Theta_2(r)$ and minimizes $\sum_{j\ge1}\eta_j^4$ over $\Theta_2(r)$; the nonnegative minimizer is unique.

**Direct dependencies:** def-ip-minimax-detection-risk-and-separation

**Readiness record:** owner=false, SHA-256 d74d30e5f73af050c633e84e29c30d96611f505d7d37e4ad43a9e1002412c436. Ready: direct prerequisites were examined and recorded in batch-10.cross-batch-dependencies.json; proof inputs have exact supplier excerpts and mapped steps in batch-10.proof-contracts.json; scoped proof-layout, precheck, contract, citation, dependency, rendering, editorial, and content checks pass. Accessible source locators and dispositions are in batch-10.coverage.json.

### lem-ip-gaussian-product-mixture-testing-bound — level 4, ready

**Claim:** Assume Countable Choice. In the Gaussian sequence detection experiment, let $v\in\Theta_q(r)$ have finite support $J$ and put $$u(v)^2=\frac{1}{2\varepsilon^4}\sum_{j\in J}v_j^4.$$ Let $\pi_v$ be the uniform probability law on the finite family of mean sequences whose $j$th coordinate is independently $+v_j$ or $-v_j$ for $j\in J$ and is zero off $J$, and let $P_{\pi_v}$ be the corresponding mixture sampling law. Then its likelihood ratio with respect to the null law is $$L_v=\frac{dP_{\pi_v}}{dP_{\varepsilon,0}}=\prod_{j\in J}\exp\!\left(-\frac{v_j^2}{2\varepsilon^2}\right)\cosh\!\left(\frac{v_jY_j}{\varepsilon^2}\right),$$ it satisfies $$\mathbb E_{\varepsilon,0}L_v^2=\prod_{j\in J}\cosh\!\left(\frac{v_j^2}{\varepsilon^2}\right),\qquad \mathbb E_{\varepsilon,0}(L_v-1)^2\le \exp(u(v)^2)-1,$$ and the minimax risks obey $$\gamma_\varepsilon(\Theta_q(r))\ge1-\frac12\sqrt{\exp(u(v)^2)-1},\qquad \beta_\varepsilon(\Theta_q(r),\alpha)\ge1-\alpha-\frac12\sqrt{\exp(u(v)^2)-1}$$ for every $\alpha\in(0,1)$.

**Direct dependencies:** def-ip-gaussian-sequence-inverse-model, thm-ip-white-noise-spectral-sequence-representation, def-ip-minimax-detection-risk-and-separation, def-total-variation-distance-for-probability-laws, thm-independent-random-elements-have-product-joint-law, lem-finite-measure-uniqueness-on-a-pi-system, lem-normal-density-has-total-mass-one, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, def-countable-choice

**Readiness record:** owner=false, SHA-256 17ff6a8aa79453822c30c8b7f4c4d17fe9bada32d97f59add89dcf77b5ccfd35. Ready: direct prerequisites were examined and recorded in batch-10.cross-batch-dependencies.json; proof inputs have exact supplier excerpts and mapped steps in batch-10.proof-contracts.json; scoped proof-layout, precheck, contract, citation, dependency, rendering, editorial, and content checks pass. Accessible source locators and dispositions are in batch-10.coverage.json.

### thm-ip-ellipsoid-detection-boundary — level 5, ready

**Claim:** Assume Countable Choice and the minimax detection-risk definition with $q=2$. For each $\varepsilon$, suppose $\Theta_2(r_\varepsilon)$ is nonempty and has a finite-support fourth-power minimizer $\widetilde\eta_\varepsilon$ with profile $\widetilde\eta_{\varepsilon,j}^2=z_0^2\sigma_j^2(1-Aa_j^2)_+$ as in the extremal-profile lemma. Put $$u_\varepsilon^2=\frac{1}{2\varepsilon^4}\sum_j\widetilde\eta_{\varepsilon,j}^4,\qquad w_{\varepsilon,j}=\frac{\widetilde\eta_{\varepsilon,j}^2}{\sqrt{2\sum_j\widetilde\eta_{\varepsilon,j}^4}},\qquad w_{\varepsilon,0}=\max_jw_{\varepsilon,j},$$ and define $$T_\varepsilon=\sum_jw_{\varepsilon,j}\bigl((Y_j/\varepsilon)^2-1\bigr),\qquad \psi_{\varepsilon,H}=\mathbf1_{\{T_\varepsilon>H\}}.$$ If $u_\varepsilon\to0$, then $\gamma_\varepsilon(\Theta_2(r_\varepsilon))\to1$ and $\beta_\varepsilon(\Theta_2(r_\varepsilon),\alpha)\to1-\alpha$ for every $\alpha\in(0,1)$. If $u_\varepsilon\to\infty$, then for every fixed $c\in(0,1)$ the tests $\psi_{\varepsilon,cu_\varepsilon}$ have total error tending to zero. For the extremal profile, define the finite sums $$J_1=\sum_j\sigma_j^4(1-Aa_j^2)_+,\quad J_2=A\sum_ja_j^2\sigma_j^4(1-Aa_j^2)_+,\quad J_0=\sum_j\sigma_j^4(1-Aa_j^2)_+^2.$$ The active constraints imply $$r_\varepsilon^2=A\frac{J_1}{J_2},\qquad u_\varepsilon^2=\left(\frac{r_\varepsilon}{\varepsilon}\right)^4\frac{J_0}{2J_1^2}.$$

**Direct dependencies:** def-ip-minimax-detection-risk-and-separation, def-ip-isonormal-white-noise-experiment, lem-ip-gaussian-product-mixture-testing-bound, lem-ip-q2-ellipsoid-extremal-profile-is-minimizer, def-countable-choice, lem-standard-normal-fourth-moment, thm-chebyshev-markov-inequality-for-the-integral

**Readiness record:** owner=false, SHA-256 26bcbc18ce5df698080b821d86b6843643014c06ff1783b19e0b77482c91ac6b. Ready: direct prerequisites were examined and recorded in batch-10.cross-batch-dependencies.json; proof inputs have exact supplier excerpts and mapped steps in batch-10.proof-contracts.json; scoped proof-layout, precheck, contract, citation, dependency, rendering, editorial, and content checks pass. Accessible source locators and dispositions are in batch-10.coverage.json.

### thm-ip-sparse-detection-regime-split — level 5, escalated

**Claim:** Assume Countable Choice and the minimax detection-risk definition with $0<q<2$, $a_j=j^\alpha$, $\sigma_j=j^\beta$, and $\alpha,\beta>0$. Let $r_\varepsilon\to0$ as $\varepsilon\downarrow0$, and put $$\lambda=\frac{\alpha+\beta}{2}-\frac{\beta}{q}.$$ For $\lambda>0$, put $A=2\alpha+1/q-1/2$, $B=2(\alpha+\beta)+1/q$, and $D=\alpha+\beta(1-2/q)>0$. Choose any $\delta_\varepsilon>0$ with $\delta_\varepsilon\to0$ and $\delta_\varepsilon\log\varepsilon^{-1}\to\infty$, set $\widetilde r_\varepsilon=r_\varepsilon(1-\delta_\varepsilon)$, and define $$u_\varepsilon^2=2\inf\left\{\sum_{j\ge1}h_j^2\sinh^2(z_j^2/2):\ 0\le h_j\le1,\ z_j\ge0,\ \sum_{j\ge1}j^{2\beta}h_jz_j^2\ge\frac{\widetilde r_\varepsilon^2}{\varepsilon^2},\ \sum_{j\ge1}j^{q(\alpha+\beta)}h_jz_j^q\le\frac1{\varepsilon^q}\right\}.$$ Then the sharp errors have Gaussian form $$\beta_\varepsilon(\Theta_q(r_\varepsilon),\alpha)=\Phi(H_\alpha-u_\varepsilon)+o(1),\qquad \gamma_\varepsilon(\Theta_q(r_\varepsilon))=2\Phi(-u_\varepsilon/2)+o(1),$$ where $\Phi(t)=(2\pi)^{-1/2}\int_{-\infty}^t e^{-x^2/2}\,dx$ and $H_\alpha$ is its $(1-\alpha)$-quantile. Moreover, $$u_\varepsilon\sim c_{\alpha,\beta,q}\,\varepsilon^{-A/D}r_\varepsilon^{B/D}$$ for a constant $c_{\alpha,\beta,q}>0$, and a minimax separation rate is $$r_\varepsilon^*=\varepsilon^{A/B}.$$ If $\lambda\le0$, put $n_\varepsilon=r_\varepsilon^{-1/\alpha}$ and $D_\varepsilon=n_\varepsilon^{-\beta}r_\varepsilon/\varepsilon-\sqrt{2\log n_\varepsilon}$. Then the sharp errors have degenerate form $$\beta_\varepsilon(\Theta_q(r_\varepsilon),\alpha)=(1-\alpha)\Phi(-D_\varepsilon)+o(1),\qquad \gamma_\varepsilon(\Theta_q(r_\varepsilon))=\Phi(-D_\varepsilon)+o(1),$$ and a sharp separation-rate normalization is $$r_\varepsilon^*=\Lambda\,\varepsilon^{\alpha/(\alpha+\beta)}(\log\varepsilon^{-1})^{\alpha/[2(\alpha+\beta)]},\qquad \Lambda=\left(\frac{2}{\alpha+\beta}\right)^{\alpha/[2(\alpha+\beta)]}.$$ Thus the sparse boundary $\lambda=0$ belongs to the degenerate regime, and the two regimes have different separation rates.

**Direct dependencies:** def-ip-minimax-detection-risk-and-separation, lem-ip-gaussian-product-mixture-testing-bound, def-countable-choice, def-total-variation-distance-for-probability-laws, def-ip-isonormal-white-noise-experiment, lem-normal-density-has-total-mass-one, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, thm-chebyshev-markov-inequality-for-the-integral

**Readiness record:** owner=false, SHA-256 bbddcc62a728dd7089b578d3032190c493323ee42a61b1070b54bdfe70927403. Escalated with the full source claim retained. The local proof establishes the rate lower bounds in both regimes and the lambda<=0 rate-order upper bound, but does not prove the lambda>0 consistency upper bound, either sharp-error formula, or the asymptotically minimax tests. The 2012 article omits the proof and cites Ingster–Suslina (2003), Theorems 4.5 and 6.1; six retrieval attempts yielded no complete proof. See batch-10 coverage/source_resolution and notes.

### cor-ip-ellipsoid-sharp-gaussian-testing-asymptotics — level 6, ready

**Claim:** Assume the $q=2$ ellipsoid detection-boundary theorem, Countable Choice, and the Axiom of Choice. Along a sequence for which $u_\varepsilon$ is bounded above and bounded away from zero and $w_{\varepsilon,0}\to0$, the minimax level-$\alpha$ type-II error and minimax total error satisfy $$\beta_\varepsilon(\Theta_2(r_\varepsilon),\alpha)=\Phi(H_\alpha-u_\varepsilon)+o(1),\qquad \gamma_\varepsilon(\Theta_2(r_\varepsilon))=2\Phi(-u_\varepsilon/2)+o(1),$$ where $\Phi$ is the standard normal distribution function and $H_\alpha$ is defined by $\Phi(H_\alpha)=1-\alpha$. Let $c_{\varepsilon,\alpha}=\inf\{t:\mathbb P_{\varepsilon,0}(T_\varepsilon\le t)\ge1-\alpha\}$; then $\mathbb P_{\varepsilon,0}(T_\varepsilon>c_{\varepsilon,\alpha})\le\alpha$ and $c_{\varepsilon,\alpha}\to H_\alpha$. The weighted tests with thresholds $c_{\varepsilon,\alpha}$ and $u_\varepsilon/2$ attain these asymptotics, while the uncalibrated threshold $H_\alpha$ has asymptotic size $\alpha$. The vanishing-largest-weight condition is required for this Gaussian sharp branch.

**Direct dependencies:** thm-ip-ellipsoid-detection-boundary, lem-ip-weighted-chi-square-triangular-array-limit, lem-ip-gaussian-product-mixture-testing-bound, thm-slutsky-for-real-random-variables, thm-portmanteau-theorem, thm-chebyshev-markov-inequality-for-the-integral, lem-standard-normal-fourth-moment, def-axiom-of-choice, def-countable-choice, def-ip-isonormal-white-noise-experiment

**Readiness record:** owner=false, SHA-256 d855ec07aa531d0d11fe549b1a3f6eb58907fab149cc18ab6cf72251e6839083. Ready: direct prerequisites were examined and recorded in batch-10.cross-batch-dependencies.json; proof inputs have exact supplier excerpts and mapped steps in batch-10.proof-contracts.json; scoped proof-layout, precheck, contract, citation, dependency, rendering, editorial, and content checks pass. Accessible source locators and dispositions are in batch-10.coverage.json.

### ex-ip-sparse-detection-lambda-zero-boundary — level 5, ready

**Claim:** Take $q=1$, $\alpha=\beta=1$, $a_j=j$, and $\sigma_j=j$ in the Gaussian sequence detection experiment. Then the sparse boundary parameter is $\lambda=0$, the source-normalized constant is $\Lambda=1$, and a minimax separation rate has order $$r_\varepsilon^*\asymp\varepsilon^{1/2}(\log\varepsilon^{-1})^{1/4}\qquad(\varepsilon\downarrow0).$$

**Direct dependencies:** def-ip-minimax-detection-risk-and-separation, lem-ip-gaussian-product-mixture-testing-bound, def-ip-isonormal-white-noise-experiment, lem-normal-density-has-total-mass-one, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, thm-chebyshev-markov-inequality-for-the-integral, def-countable-choice

**Readiness record:** owner=false, SHA-256 7fd8a0c122ac1b9db3d654beca65c8f05b703883b5af18cd05c84c0f2f0df6af. Ready: the q=1, alpha=beta=1 lambda=0 rate is proved locally by a finite location/sign mixture lower bound and finite-coordinate maximum-test upper bound. Direct suppliers were inspected; source references and the unread general sparse-book route are transparently dispositioned in batch-10 coverage. Scoped proof, contract, dependency, rendering, and content checks pass.

### ex-ip-mildly-illposed-sobolev-detection-rate — level 6, ready

**Claim:** Assume $\alpha,\beta>0$, $q=2$, $a_j=j^\alpha$, and $\sigma_j=j^\beta$ in the Gaussian sequence detection experiment. The minimax separation rate over $\Theta_2(r)$ has order $$r_\varepsilon^*\asymp\varepsilon^{4\alpha/(4\alpha+4\beta+1)}.$$

**Direct dependencies:** thm-ip-ellipsoid-detection-boundary, lem-ip-q2-ellipsoid-extremal-profile-exists-for-small-r, lem-ip-q2-ellipsoid-extremal-profile-is-minimizer

**Readiness record:** owner=false, SHA-256 c7b15d5b018495a3aef8fc9403175ae55369d46eb3b0f415d195220f5556ed82. Ready: direct prerequisites were examined and recorded in batch-10.cross-batch-dependencies.json; proof inputs have exact supplier excerpts and mapped steps in batch-10.proof-contracts.json; scoped proof-layout, precheck, contract, citation, dependency, rendering, editorial, and content checks pass. Accessible source locators and dispositions are in batch-10.coverage.json.

### ex-ip-mildly-illposed-analytic-detection-rate — level 6, ready

**Claim:** Assume $\alpha,\beta>0$, $q=2$, $a_j=e^{\alpha j}$, and $\sigma_j=j^\beta$ in the Gaussian sequence detection experiment. The minimax separation rate over $\Theta_2(r)$ has order $$r_\varepsilon^*\asymp\varepsilon(\log\varepsilon^{-1})^{\beta+1/4}.$$

**Direct dependencies:** thm-ip-ellipsoid-detection-boundary, lem-ip-q2-ellipsoid-extremal-profile-exists-for-small-r, lem-ip-q2-ellipsoid-extremal-profile-is-minimizer

**Readiness record:** owner=false, SHA-256 740abae15741383b8c00ab4f0cbdb0e9618005c6269f73e1656e446d6a1ff36c. Ready: direct prerequisites were examined and recorded in batch-10.cross-batch-dependencies.json; proof inputs have exact supplier excerpts and mapped steps in batch-10.proof-contracts.json; scoped proof-layout, precheck, contract, citation, dependency, rendering, editorial, and content checks pass. Accessible source locators and dispositions are in batch-10.coverage.json.

### ex-ip-severely-illposed-sobolev-detection-rate — level 6, ready

**Claim:** Assume $\alpha,\beta>0$, $q=2$, $a_j=j^\alpha$, and $\sigma_j=e^{\beta j}$ in the Gaussian sequence detection experiment. A minimax separation rate over $\Theta_2(r)$ is $$r_\varepsilon^*\asymp\left(\frac{\log\varepsilon^{-1}}{\beta}\right)^{-\alpha}.$$

**Direct dependencies:** thm-ip-ellipsoid-detection-boundary, lem-ip-q2-ellipsoid-extremal-profile-exists-for-small-r, lem-ip-q2-ellipsoid-extremal-profile-is-minimizer

**Readiness record:** owner=false, SHA-256 47233ad61129cf8afd8c92a988e6d16a2d314408ab133ef2ec0b23cbfa11b935. Ready: direct prerequisites were examined and recorded in batch-10.cross-batch-dependencies.json; proof inputs have exact supplier excerpts and mapped steps in batch-10.proof-contracts.json; scoped proof-layout, precheck, contract, citation, dependency, rendering, editorial, and content checks pass. Accessible source locators and dispositions are in batch-10.coverage.json.

### ex-ip-severely-illposed-analytic-detection-rate — level 6, ready

**Claim:** Assume $\alpha,\beta>0$, $q=2$, $a_j=e^{\alpha j}$, and $\sigma_j=e^{\beta j}$ in the Gaussian sequence detection experiment. A minimax separation rate over $\Theta_2(r)$ is $$r_\varepsilon^*\asymp\varepsilon^{\alpha/(\alpha+\beta)}.$$

**Direct dependencies:** thm-ip-ellipsoid-detection-boundary, lem-ip-q2-ellipsoid-extremal-profile-exists-for-small-r, lem-ip-q2-ellipsoid-extremal-profile-is-minimizer

**Readiness record:** owner=false, SHA-256 8b6e7a7d01c58182098e571d79a14d50a8462dfc0655af2c379cb74bdcf1c2ca. Ready: direct prerequisites were examined and recorded in batch-10.cross-batch-dependencies.json; proof inputs have exact supplier excerpts and mapped steps in batch-10.proof-contracts.json; scoped proof-layout, precheck, contract, citation, dependency, rendering, editorial, and content checks pass. Accessible source locators and dispositions are in batch-10.coverage.json.

## Sources and mathematical coverage

The authoritative full-text source records are in research/inverse-problems-knot-theory-all-109-2026-10-19-batch-10.coverage.json.

- Ingster, Sapatinas, and Suslina, “Minimax signal detection in ill-posed inverse problems,” full 26-page PDF, https://arxiv.org/pdf/1001.1853: §2, PDF pp. 4–6 (risk/separation conventions); §4.1, pp. 6–7 (q=2 extremal test and mixture lower bound); Theorems 4.2–4.5, pp. 12–14 (four q=2 axes); §4.7, pp. 18–19 (full sparse statement). The article explicitly omits the proof of Theorem 4.7 and refers to Ingster–Suslina (2003), Theorems 4.5 and 6.1.
- Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, complete 705-page book PDF, https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf: §§6.2.1 and 6.2.3, PDF pp. 489–494 and 506–508. This is an independent book treatment for the A page and the q=2 testing claims.
- Marteau and Sapatinas, “A unified treatment for non-asymptotic and asymptotic approaches to minimax signal detection,” complete 37-page PDF, https://arxiv.org/pdf/1406.5387: §§3.1–3.2, independent q=2 extremal/testing context.
- Ingster and Suslina, Nonparametric Goodness-of-Fit Testing Under Gaussian Models (2003), Springer record https://link.springer.com/book/10.1007/978-0-387-21580-8: cited by the 2012 article for the sparse proof but not read as full text. The six retrieval attempts, search log, partial alternative arguments, and owner-escalation status are recorded in the source source_resolution object. The source was not dropped and no unread theorem is presented as read.

Local proof coverage: the q=2 sign-mixture likelihood ratio, chi-square-to-TV calculation, weighted triangular-array CLT, profile minimization, profile existence, Chebyshev test bound, log-cosh likelihood expansion, quantile calibration, and all four q=2 active-sum rates are proved in the carriers. The lambda-zero q=1 example proves both rate implications directly. The sparse theorem proves lower bounds in both regimes and the lambda-nonpositive rate-order upper bound. The lambda-positive consistency upper bound, sharp sparse error formulas in both regimes, and corresponding asymptotically minimax sparse tests remain unresolved; the full statement is retained and the theorem is escalated.

## Retrieval verification and scoped checks

The source-fetch-check stamp run verified 3/4 sources: the 2012 article (26 pages; 345,502 bytes; SHA prefix cdcfa8e49d867d9f), Giné–Nickl (705 pages; 3,871,144 bytes; bbdfef841cf264f0), and Marteau–Sapatinas (37 pages; 436,081 bytes; 2b9edd693d80810f). Check mode verifies those three stamps. The fourth source is an intentional owner escalation: the checker refuses to treat the unread Springer record as a full-text source.

Final batch-scoped checks:

- proof-layout on the 13 assigned items: 49 steps, 0 defects.
- precheck: 12 proof-bearing items passed; the definition is not applicable. Ten repository-proposed dependency-layer step relabelings were adopted before the final pass.
- Strict proof contracts: 13/13 entries; 0 errors and 0 warnings. Citation fidelity: 58 citations checked, 0 missing quotes, 0 widening candidates.
- rendercheck: 15 item/page files checked, 0 errors and 0 warnings.
- depcheck --items-file /tmp/ip10-items.json: selected item/page checks and prerequisite closure passed with 0 errors/warnings (1,633 items and 451 pages in dependency closure).
- content-policy on the batch manifest: 13 assigned items, 0 errors/warnings. Statement/Definition/Example link audit and empty-page-body audit: 0 violations.
- Scoped item dependency calculation across batches 7/8/10: 25 items, 0 level/cycle errors; assigned levels match 0, 3, 4, 5, and 6 as listed above.
- source-fetch-check check mode: 3/4 full-text sources stamped; the remaining result is the owner-escalated 2003 source, not a claimed fetch success.

## Run-level blockers and handoff

The all-run item-dependency-levels check reports 138 errors from other pairs’ empty scaffold inventories and pre-existing stale labels; the batch-7/8/10 scoped DAG passes with 0 errors. The current run-level batch-dependency-levels check cannot parse unrelated items/lem-kontsevich-morse-isotopy-decomposition.md frontmatter because its unquoted title contains a colon (reported at line 23, “Nested mappings are not allowed in compact mappings”). The run-level check also reflects owner repair/recertification holds; no outside-owner item, shared schedule, engine state, or verdict was changed.

Step 1 records were written for all 13 assigned items without --owner: 12 ready, 1 escalated (thm-ip-sparse-detection-regime-split). The full run readiness check remains open because the sparse theorem is escalated and unrelated batch items/pages remain unscaffolded or escalated. Completion of this batch does not constitute independent approval.

**Next owner action:** provide/retrieve a complete proof of Ingster–Suslina (2003), Theorems 4.5 and 6.1 (or authorize a complete replacement proof) for the sparse lambda-positive upper bound and both sharp-error regimes; reconcile the unresolved source record before marking that theorem ready. Separately repair the unrelated malformed prerequisite item and resume the native scaffold gate.
