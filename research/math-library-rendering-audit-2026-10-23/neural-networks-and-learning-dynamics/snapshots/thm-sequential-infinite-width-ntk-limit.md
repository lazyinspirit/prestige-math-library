---
id: thm-sequential-infinite-width-ntk-limit
kind: theorem
title: Sequential infinite-width NTK limit and finite-time lazy training dynamics
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - cor-iid-finite-variance-weak-law
  - def-axiom-of-choice
  - def-convergence-in-probability
  - def-multivariate-normal-law
  - def-neural-tangent-kernel
  - def-standard-normal-and-normal-laws
  - def-width-normalized-fully-connected-network
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - lem-bivariate-gaussian-feature-expectations-continuous
  - lem-characteristic-function-of-a-multivariate-normal-law
  - lem-fixed-time-lazy-training-stability
  - lem-standard-normal-fourth-moment
  - thm-absolutely-continuous-functions-have-integrable-derivatives
  - thm-c1-lipschitz-ac-bv-hierarchy
  - thm-chain-rule-for-total-derivatives
  - thm-factorization-of-expectations-for-independent-variables
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Arthur Jacot, Franck Gabriel, and Clément Hongler, Neural Tangent Kernel: Convergence and Generalization in Neural Networks"
      url: "https://arxiv.org/pdf/1806.07572"
      locator: "Theorems 1–2, §§4.1–4.2 and Appendices A.1–A.3, printed pp. 4–5 and 10–16; sequential initialization and training limits"
---

## Statement

Assume AC. Fix a finite list $x_1,\ldots,x_N\in\mathbb R^{n_0}$ with $N,n_0\ge1$, a depth $L\ge2$, a bias scale $\beta>0$, and a globally Lipschitz activation $\sigma:\mathbb R\to\mathbb R$. Let $s$ be any bounded Borel representative of the almost-everywhere derivative of $\sigma$, meaning that it agrees with the ordinary derivative outside a Lebesgue-null set; such a representative exists and is bounded by the Lipschitz constant. For each tuple of positive integer hidden widths $\mathbf n=(n_1,\ldots,n_{L-1})$, let $\mathbb P_{\mathbf n}$ be a probability law carrying the product standard-normal initialization marginal and any auxiliary randomness used by training; take all probabilities in the width limit under these laws. Use the width-normalized network with scalar linear output.

Put

$$\Sigma^1_{ij}=\frac{x_i\cdot x_j}{n_0}+\beta^2.$$

For $r=2,\ldots,L$, let $(U_i,U_j)$ have the centered Gaussian law with variances $\Sigma^{r-1}_{ii},\Sigma^{r-1}_{jj}$ and covariance $\Sigma^{r-1}_{ij}$, and define

$$\Sigma^r_{ij}=\mathbb E[\sigma(U_i)\sigma(U_j)]+\beta^2,\qquad \dot\Sigma^r_{ij}=\mathbb E[s(U_i)s(U_j)].$$

These Gaussian laws may be singular; their marginal variances are at least $\beta^2$, and their laws and expectations depend only on the displayed covariance. Define $\Theta^1_{ij}=\Sigma^1_{ij}$ and, for $r=2,\ldots,L$,

$$\Theta^r_{ij}=\Theta^{r-1}_{ij}\dot\Sigma^r_{ij}+\Sigma^r_{ij},\qquad K_\infty=(\Theta^L_{ij})_{i,j=1}^N.$$

At initialization, the finite-data neural tangent Gram matrix $K_0$ converges in probability to $K_\infty$ under the sequential hidden-width limit $n_1\to\infty$ first, then $n_2\to\infty$, and so on through $n_{L-1}$.

For the training conclusion, fix a horizon $T\ge0$. In addition, assume that $\sigma$ is twice continuously differentiable with bounded second derivative. For each width tuple, let $d_{\mathbf n}$ and $\theta_{\mathbf n}$ be jointly measurable in the probability outcome and time; for $\mathbb P_{\mathbf n}$-almost every outcome, assume $d_{\mathbf n}$ is integrable on $[0,T]$ and $\theta_{\mathbf n}$ is differentiable there and satisfies, with width and probability-outcome subscripts suppressed in the equation,

$$\dot\theta_p(t)=-\frac1N\sum_{i=1}^N\partial_{\theta_p}f_{\theta(t)}(x_i)d_i(t).$$

Write $f_t(x)=f_{\theta(t)}(x)$ and $K_t(i,j)=K_{\theta(t)}(x_i,x_j)$, where $K_\theta$ is the finite-network neural tangent kernel; width and probability-outcome subscripts are suppressed. The sample paths of $K_t$ are continuous, so joint measurability makes the supremum events below measurable. Define $\|v\|_N=(N^{-1}\sum_i|v_i|^2)^{1/2}$. Suppose $\int_0^T\|d_{\mathbf n}(t)\|_Ndt$ is stochastically bounded in the prescribed sequential limit, meaning that for every $\varepsilon>0$ some $M<\infty$ satisfies $\limsup_{n_{L-1}\to\infty}\cdots\limsup_{n_1\to\infty}\mathbb P_{\mathbf n}(\int_0^T\|d_{\mathbf n}(t)\|_Ndt>M)<\varepsilon$. Then

$$\sup_{0\le t\le T}\|K_t-K_\infty\|_{op}\longrightarrow0\quad\text{in probability},$$

where $\|\cdot\|_{op}$ is the Euclidean operator norm. Along the path,

$$\dot f_t(x_i)=-\frac1N\sum_{j=1}^N K_t(i,j)d_j(t),$$

and

$$\sup_{0\le t\le T}\left\|f_t-f_0+\frac1N\int_0^tK_\infty d(s)\,ds\right\|_N\longrightarrow0\quad\text{in probability}.$$

Thus the finite-time output equation has the deterministic limiting kernel as its generator in the precise integrated-error sense displayed above.
## Statement references

[Jacot, Gabriel, and Hongler, Theorems 1–2, sequential infinite-width NTK and training limits](https://arxiv.org/pdf/1806.07572)

[[def-width-normalized-fully-connected-network]]: Hidden layers use $1/\sqrt{n_\ell}$ scaling and independent Gaussian initialization

[[lem-bivariate-gaussian-feature-expectations-continuous|Gaussian feature expectations are continuous, including singular covariance limits]]

[[lem-fixed-time-lazy-training-stability|The finite-data NTK stays close to its initialization on fixed time intervals]]

## Facts & Assumptions

**Given:** AC; finite data; $L\ge2$; $\beta>0$; a globally Lipschitz activation; the source-normalized network under the width-specific laws; and, for training, the additional $C^2$ bound, jointly measurable paths and directions with the stated pathwise properties, and an integrated-direction bound.

[A1] AC supplies the finite Gaussian probability laws and the countable/dependent choice needed by the sequential construction ([[def-axiom-of-choice]], [[lem-ac-supplies-sequential-choices-for-probability-constructions]]).

[F1] The network definition fixes the layer dimensions, fan-in scaling, bias scale, scalar linear output, and independent standard-normal initialization ([[def-width-normalized-fully-connected-network]]).

[F2] A finite Gaussian law, including a singular one, is uniquely determined by its mean and covariance; the layer's independent Gaussian weights and biases have product laws ([[def-multivariate-normal-law]], [[lem-characteristic-function-of-a-multivariate-normal-law]], [[def-standard-normal-and-normal-laws]], [[thm-factorization-of-expectations-for-independent-variables]]).

[F3] Empirical averages of iid square-integrable variables converge in probability to their means, and standard normals have finite fourth moment ([[cor-iid-finite-variance-weak-law]], [[lem-standard-normal-fourth-moment]]).

[F4] Bivariate Gaussian expectations of Lipschitz features and bounded Borel features vary continuously with covariance, including singular limits ([[lem-bivariate-gaussian-feature-expectations-continuous]]).

[F5] The pointwise total-derivative chain rule applies to the finite network at differentiability points ([[thm-chain-rule-for-total-derivatives]]).

[F6] Under the additional $C^2$ bounded-second-derivative, path-existence, and integrated-direction hypotheses, the finite-data NTK remains uniformly close to its initialization ([[lem-fixed-time-lazy-training-stability]]).

[F7] The probability limit uses the event-probability convention in [[def-convergence-in-probability]].

[F8] A globally Lipschitz real function is absolutely continuous on every compact interval ([[thm-c1-lipschitz-ac-bv-hierarchy]]).

[F9] Under countable choice, every absolutely continuous real function on a compact interval is differentiable almost everywhere ([[thm-absolutely-continuous-functions-have-integrable-derivatives]]).
## Proof

**Proof technique:** establish almost-sure differentiability at initialization, induct on layer covariances and Jacobian blocks, then apply the separate fixed-time drift estimate.

1.1 By [F8], $\sigma$ is absolutely continuous on every compact interval; applying [F9] on $[-m,m]$ for each positive integer $m$ shows that it is differentiable outside a Lebesgue-null set. The forward difference quotients $s_0(x)=\limsup_{k\to\infty}k(\sigma(x+1/k)-\sigma(x))$ define a bounded Borel function and equal $\sigma\prime(x)$ wherever the derivative exists. Since the given representative $s$ also equals $\sigma\prime$ almost everywhere, there is a Lebesgue-null set $E$ outside which $\sigma$ is differentiable and $s=s_0=\sigma\prime$. For any fixed finite width tuple, condition on the preceding layers: every coordinate of every data-point preactivation is normal with variance $\|z^\ell(x_i)\|_2^2/n_\ell+\beta^2\ge\beta^2$. Thus each avoids $E$ almost surely, and a finite union shows all preactivations at initialization avoid $E$ almost surely. The finite network is therefore parameter-differentiable at initialization for every data point, and [F5] applies with derivative values $s(U)$. The first-layer covariance is $\Sigma^1$; its diagonal is positive, and its Jacobian Gram block is exactly $K^1_{(i,a),(j,b)}=\delta_{ab}\Sigma^1_{ij}$ because different neurons use disjoint parameters. [A1, F1, F2, F5, F8, F9, given, construct]

2.1 Let $C_n$ be the conditional empirical covariance of the layer-$(r-1)$ preactivation vectors across the $n_{r-1}$ neurons. By induction $C_n\to\Sigma^{r-1}$ in probability; conditional on the preceding layer, these vectors are iid centered Gaussian with covariance $C_n$ and diagonal entries at least $\beta^2$. Choose $R>1+\max_i\Sigma^{r-1}_{ii}$, so $\mathbb P(\max_i(C_n)_{ii}>R)\to0$. Write $L_\sigma$ for a global Lipschitz constant. If $Y_a=\sigma(U^{r-1}_a(x_i))\sigma(U^{r-1}_a(x_j))$, the Lipschitz bound $|\sigma(u)|\le|\sigma(0)|+L_\sigma|u|$, Gaussian fourth moments, and Cauchy--Schwarz give $\mathbb E[Y_a^2\mid C_n]\le M_R$ whenever all diagonal entries of $C_n$ are at most $R$, for a finite constant $M_R$. The conditional variance bound in [F3] therefore gives $\mathbb P(|n_{r-1}^{-1}\sum_aY_a-\mathbb E[Y_a\mid C_n]|>\eta)\le\mathbb P(\max_i(C_n)_{ii}>R)+M_R/(n_{r-1}\eta^2)\to0$. The conditional mean is a bivariate Gaussian feature expectation and converges by [F4] to $\mathbb E[\sigma(U_i)\sigma(U_j)]$. For $V_a=s(U^{r-1}_a(x_i))s(U^{r-1}_a(x_j))$, the same conditional variance estimate holds with $M_R=\|s\|_\infty^4$, and [F4] makes its conditional mean converge to $\dot\Sigma^r_{ij}$. Adding the bias Gram gives $\Sigma^r$. Each empirical feature Gram plus that bias Gram is positive semidefinite with diagonal at least $\beta^2$; the cone of positive-semidefinite matrices is closed, so its deterministic limit $\Sigma^r$ is positive semidefinite and defines the next Gaussian pairs. This proves the covariance and derivative recursions at every layer. [F1, F2, F3, F4, step 1.1, given]

2.2 For a finite network, [F5] gives the exact tangent-kernel block recursion $K^{r}_{(i,c),(j,d)}=\delta_{cd}(n_{r-1}^{-1}\sum_a Z^{r-1}_{ai}Z^{r-1}_{aj}+\beta^2)+n_{r-1}^{-1}\sum_{a,b}W^{(r-1)}_{ca}W^{(r-1)}_{db}s(U^{r-1}_{ai})s(U^{r-1}_{bj})K^{r-1}_{(i,a),(j,b)}$. The first term is the current-layer weight-and-bias Gram, and the second is the contribution of all earlier shared parameters. At the first layer this block is the one in step 1.1. [F1, F5, step 1.1, algebra]

3.1 At this sequential stage the previous widths have already been taken to their limits while $n_{r-1}$ and $n_r$ are fixed, so the inductive block has limit $K^{r-1}_{(i,a),(j,b)}=\delta_{ab}\Theta^{r-1}_{ij}$ for the finitely many $a,b$. Substituting this block in the Jacobian term of step 2.2 leaves $\Theta^{r-1}_{ij}n_{r-1}^{-1}\sum_a W^{(r-1)}_{ca}W^{(r-1)}_{da}q_a$, where $q_a=s(U^{r-1}_a(x_i))s(U^{r-1}_a(x_j))$ and $|q_a|\le\|s\|_\infty^2$. The current weights are independent standard normals, independent of the preceding $U$ values. Conditional on those values, for $c=d$ the mean is $\Theta^{r-1}_{ij}n_{r-1}^{-1}\sum_aq_a$ and the variance is at most $2(\Theta^{r-1}_{ij})^2\|s\|_\infty^4/n_{r-1}$, using $\operatorname{Var}(W^2)=2$; for $c\ne d$ the mean is zero and the variance is at most $(\Theta^{r-1}_{ij})^2\|s\|_\infty^4/n_{r-1}$, using independence of the two rows. The empirical average of $q_a$ converges to $\dot\Sigma^r_{ij}$ by step 2.1, so the Jacobian term converges to $\delta_{cd}\Theta^{r-1}_{ij}\dot\Sigma^r_{ij}$. The covariance term converges to $\delta_{cd}\Sigma^r_{ij}$ by steps 2.1–2.2. Hence the limiting block is $\delta_{cd}(\Sigma^r_{ij}+\Theta^{r-1}_{ij}\dot\Sigma^r_{ij})=\delta_{cd}\Theta^r_{ij}$. Since the final layer has one output, its scalar block is $K_\infty$. [F2, F3, step 2.1, step 2.2, algebra]

4.1 Under the additional $C^2$ training hypotheses, [F6] and the initialization convergence from step 3.1 give $\sup_{t\le T}\|K_t-K_\infty\|_{op}\le\sup_{t\le T}\|K_t-K_0\|_{op}+\|K_0-K_\infty\|_{op}\to0$ in probability. The parameter-flow equation and [F5] give $\dot f_t(x_i)=-N^{-1}\sum_jK_t(i,j)d_j(t)$. Integrating and subtracting the equation with $K_\infty$ yields $\sup_{t\le T}\|f_t-f_0+N^{-1}\int_0^tK_\infty d(s)\,ds\|_N\le N^{-1}\sup_{t\le T}\|K_t-K_\infty\|_{op}\int_0^T\|d(s)\|_Nds$. For any $M>0$ and $\delta>0$, the product exceeds $\delta$ only if $\int_0^T\|d(s)\|_Nds>M$ or $\sup_{t\le T}\|K_t-K_\infty\|_{op}>\delta N/M$; first use stochastic boundedness to choose $M$, then use kernel convergence. Thus the right side tends to zero in probability. [F5, F6, F7, step 3.1, algebra] ∎
