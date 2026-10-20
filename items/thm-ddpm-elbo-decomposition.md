---
id: thm-ddpm-elbo-decomposition
kind: theorem
title: DDPM variational objective and weighted noise-prediction terms
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-forward-gaussian-diffusion-chain
  - def-kullback-leibler-divergence
  - def-law-or-distribution-of-a-random-element
  - def-multivariate-normal-law
  - def-variational-family-and-elbo
  - lem-isotropic-gaussian-kl-formula
  - thm-elbo-kl-decomposition
  - thm-gaussian-forward-and-posterior-kernels
justified_by: []
proof_strategy: direct
axiom_use: "AC is used by the Gaussian conditional and KL suppliers and by the library ELBO/KL identification. The density factorization and telescoping identity are choice-free."
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
    - title: "Jonathan Ho, Ajay Jain, and Pieter Abbeel, Denoising Diffusion Probabilistic Models (2020)"
      url: "https://arxiv.org/pdf/2006.11239"
    - title: "Simon J. D. Prince, Understanding Deep Learning, Chapter 18: Diffusion models (2026), pp. 363–387"
      url: "https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html"
---

## Statement

Assume AC. Fix a finite Gaussian forward chain and reverse model as defined above, with finite-valued Borel reverse means and fixed variances $\sigma_t^2\in(0,\infty)$. For the noise-prediction parameterization, let $\epsilon_\theta:\mathbb R^d\times\{1,\ldots,T\}\to\mathbb R^d$ be Borel and set
$$\mu_{\theta,t}(x_t)=\frac1{\sqrt{\alpha_t}}\left(x_t-\frac{\beta_t}{\sqrt{1-\bar\alpha_t}}\,\epsilon_\theta(x_t,t)\right),\qquad 1\le t\le T.$$
For each fixed observed $x_0$, require $0<p_\theta(x_0)<\infty$, define the proper posterior density
$$\pi_\theta(x_{1:T}\mid x_0)=\frac{p_\theta(x_{0:T})}{p_\theta(x_0)},$$
and let $Q_{x_0}$ and $\Pi_{\theta,x_0}$ be the path probability measures with Lebesgue densities $q(x_{1:T}\mid x_0)$ and $\pi_\theta(x_{1:T}\mid x_0)$. Require $Q_{x_0}\ll\Pi_{\theta,x_0}$ and
$$\mathbb E_{q(\cdot\mid x_0)}\!\left[|\log q(x_{1:T}\mid x_0)|+|\log p_\theta(x_{0:T})|\right]<\infty.$$
Here $\mathbb E_q[f]$ means the integral of $f$ against the path law with density $q(\cdot\mid x_0)$. Define
$$\operatorname{ELBO}_\theta(x_0)=\mathbb E_q\!\left[\log p_\theta(x_{0:T})-\log q(x_{1:T}\mid x_0)\right].$$
Then
$$\log p_\theta(x_0)=\operatorname{ELBO}_\theta(x_0)+D_{\mathrm{KL}}(Q_{x_0}\|\Pi_{\theta,x_0}),\qquad D_{\mathrm{KL}}(Q_{x_0}\|\Pi_{\theta,x_0})\ge0.$$
The negative ELBO has the exact decomposition
$$-\operatorname{ELBO}_\theta(x_0)=D_{\mathrm{KL}}\!\left(q(x_T\mid x_0)\middle\|N_d(0,I_d)\right)+\mathbb E_{q(x_1\mid x_0)}[-\log p_\theta(x_0\mid x_1)]+\sum_{t=2}^T\mathbb E_{q(x_t\mid x_0)}\!\left[D_{\mathrm{KL}}\!\left(q(x_{t-1}\mid x_t,x_0)\middle\|p_\theta(x_{t-1}\mid x_t)\right)\right].$$
In particular, for $t\ge2$, write
$$\tilde\mu_t(x_t,x_0)=\frac{\sqrt{\bar\alpha_{t-1}}\beta_t}{1-\bar\alpha_t}x_0+\frac{\sqrt{\alpha_t}(1-\bar\alpha_{t-1})}{1-\bar\alpha_t}x_t,\quad w_t=\frac{\beta_t^2}{2\sigma_t^2\alpha_t(1-\bar\alpha_t)},\quad C_t=\frac d2\left(\frac{\tilde\beta_t}{\sigma_t^2}-1+\log\frac{\sigma_t^2}{\tilde\beta_t}\right).$$
If $x_t=\sqrt{\bar\alpha_t}x_0+\sqrt{1-\bar\alpha_t}\,\epsilon$ with $\epsilon\sim N_d(0,I_d)$, then the corresponding per-step KL term is
$$\mathbb E_\epsilon\!\left[w_t\left\|\epsilon-\epsilon_\theta(x_t,t)\right\|_2^2+C_t\right].$$
At $t=1$, the reconstruction term is the separate learned likelihood $p_\theta(x_0\mid x_1)$ with variance $\sigma_1^2>0$; no Lebesgue density for $q(x_0\mid x_1,x_0)$ is used. For finite $T$, the terminal-prior KL is retained; no equality $q(x_T\mid x_0)=N_d(0,I_d)$ is assumed. The common unweighted objective
$$L_{\mathrm{simple}}(\theta;x_0)=\frac1T\sum_{t=1}^T\mathbb E_\epsilon\!\left[\left\|\epsilon-\epsilon_\theta\!\left(\sqrt{\bar\alpha_t}x_0+\sqrt{1-\bar\alpha_t}\epsilon,t\right)\right\|_2^2\right]$$
drops the schedule weights and replaces the separate endpoint terms with noise-prediction losses, so it is not in general the exact maximum-likelihood objective.

## Statement references

Finite-chain ELBO decomposition and exact Gaussian posterior: [Ho, Jain, and Abbeel, §§2–3 and Appendix A, Eqs. (5)–(7), (17)–(22)](https://arxiv.org/pdf/2006.11239).

Weighted noise prediction and the unweighted simple objective: [Ho, Jain, and Abbeel, §3.2 and §3.4, Eqs. (8)–(14)](https://arxiv.org/pdf/2006.11239).

Pedagogical ELBO and noise-prediction derivation; its simplification approximates the finite-horizon terminal-prior term by zero: [Prince, Chapter 18, “The diffusion ELBO” and “Simplifying it”](https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html).

## Facts & Assumptions

**Given:** AC, a finite forward chain and reverse Gaussian model with positive finite variances, a fixed $x_0$, a Borel noise predictor, and finite absolute $q$-expectations of the log path densities in the Statement.

[A1] AC is assumed by the Gaussian conditional-law supplier and the library KL/ELBO interface. [[def-axiom-of-choice]].

[F1] The forward and reverse path densities factor into normalized Gaussian transitions; their variances are finite and strictly positive. [[def-forward-gaussian-diffusion-chain]].

[F2] The forward marginal and, for $t\ge2$, the exact Gaussian law of $x_{t-1}$ conditioned on $x_t,x_0$ are as stated. [[thm-gaussian-forward-and-posterior-kernels]].

[F3] The variational-family interface requires $0<Z<\infty$ before it normalizes $\pi=\gamma/Z$. [[def-variational-family-and-elbo]].

[F9] An admissible density has the required support and finite $q$-integrability of $|\log\gamma|+|\log q|$. [[def-variational-family-and-elbo]].

[F4] Under those conditions, the log-evidence equals the ELBO plus reverse KL under AC, and the KL is nonnegative. [[thm-elbo-kl-decomposition]].

[F5] For positive isotropic Gaussian variances, the reverse KL is the sum of the variance term and squared-mean term in the proved formula. [[lem-isotropic-gaussian-kl-formula]].

[F6] Expectation of an integrable function is its integral with respect to the stated probability law. [[def-expectation-of-a-nonnegative-or-integrable-random-variable]].

[F7] A probability law is the pushforward probability measure of its random element. [[def-law-or-distribution-of-a-random-element]].

[F8] The library KL is directional: its first argument must be absolutely continuous with respect to its second. [[def-kullback-leibler-divergence]].

[F10] A multivariate normal law has its specified mean and covariance, so a standard $d$-dimensional normal residual has second moment $d$. [[def-multivariate-normal-law]].

## Proof

**Proof technique:** verify the path-space ELBO hypotheses, telescope the forward-density ratios, and evaluate the remaining Gaussian divergences.

**Given:** The hypotheses in the Statement.

1.1 The reverse path density is strictly positive and finite at every finite path because every Gaussian variance is positive and each mean is finite. Its path marginal on $x_{1:T}$ is a probability density by successive integration of its reverse kernels and prior. For fixed $x_0$, the decoder density satisfies $p_\theta(x_0\mid x_1)\le(2\pi\sigma_1^2)^{-d/2}$, so integrating against that path marginal gives $p_\theta(x_0)<\infty$. It is strictly positive: on the positive-measure box $[-1,1]^{dT}$, the sets $\{p_\theta(x_{0:T})\ge1/n\}$ for positive integers $n$ cover the box because the density is positive everywhere. If all these sets had measure zero, their countable union would have measure zero, contradicting the positive measure of the box; one set therefore has positive measure, and the integral is positive. Thus $\pi_\theta(\cdot\mid x_0)$ is a proper positive density. [F1, F7, given, construct]

1.2 The forward path density is a probability density and is positive everywhere. Its log is the finite sum $\log q(x_{1:T}\mid x_0)=\sum_{t=1}^T\left[-\frac d2\log(2\pi\beta_t)-\frac{\|x_t-\sqrt{\alpha_t}x_{t-1}\|_2^2}{2\beta_t}\right]$. Under $q$, each normalized residual $(x_t-\sqrt{\alpha_t}x_{t-1})/\sqrt{\beta_t}$ has law $N_d(0,I_d)$ and finite second moment $d$ by [F10], so $\mathbb E_q|\log q|<\infty$. Since the reverse density is also positive everywhere, $\pi_\theta>0$ everywhere and the support condition $Q_{x_0}\ll\Pi_{\theta,x_0}$ holds. [F1, F6, F7, F10, given]

2.1 Let $\gamma(x_{1:T})=p_\theta(x_{0:T})$ on path space with base measure $\lambda_{dT}$. Step 1.1 gives $Z=\int\gamma\,d\lambda_{dT}=p_\theta(x_0)\in(0,\infty)$ and the normalized target $\pi=\gamma/Z$; step 1.2 gives the support condition, and the Statement's integrability hypothesis together with step 1.2 gives $\mathbb E_q(|\log\gamma|+|\log q|)<\infty$. The direction is $Q_{x_0}\ll\Pi_{\theta,x_0}$, as required by [F8]. Therefore [F3], [F6], and [F9] apply, and [F4] gives the exact log-evidence identity and nonnegative reverse KL. [A1, F3, F4, F6, F8, F9, step 1.1, step 1.2]

2.2 For $t\ge2$, the Markov property and positive Gaussian densities give $q(x_t\mid x_{t-1})=q(x_{t-1}\mid x_t,x_0)q(x_t\mid x_0)/q(x_{t-1}\mid x_0)$. Substitute this into $p_\theta(x_{0:T})/q(x_{1:T}\mid x_0)$. The ratios $q(x_{t-1}\mid x_0)/q(x_t\mid x_0)$ telescope, leaving $p_\theta(x_{0:T})/q(x_{1:T}\mid x_0)=[p(x_T)/q(x_T\mid x_0)]p_\theta(x_0\mid x_1)\prod_{t=2}^T p_\theta(x_{t-1}\mid x_t)/q(x_{t-1}\mid x_t,x_0)$. Each reverse Gaussian log-density factor is bounded above; the assumed integrability of their finite sum therefore makes each factor integrable. The forward marginals and conditioned laws are Gaussian with finite quadratic moments, so their log-density terms are integrable as well. Taking expectations term by term now gives the stated endpoint-plus-step decomposition, with the $t=1$ term $-\mathbb E_{q(x_1\mid x_0)}\log p_\theta(x_0\mid x_1)$. [F1, F2, step 1.2, algebra]

3.1 For $t\ge2$, substitute $x_t=\sqrt{\bar\alpha_t}x_0+\sqrt{1-\bar\alpha_t}\epsilon$ into the posterior mean in [F2]. Using $\bar\alpha_t=\alpha_t\bar\alpha_{t-1}$ and $\beta_t=1-\alpha_t$ gives $\tilde\mu_t(x_t,x_0)=\frac1{\sqrt{\alpha_t}}\left(x_t-\frac{\beta_t}{\sqrt{1-\bar\alpha_t}}\epsilon\right)$. The reverse mean is the same expression with $\epsilon_\theta(x_t,t)$ in place of $\epsilon$, so $\|\tilde\mu_t-\mu_{\theta,t}\|_2^2=\frac{\beta_t^2}{\alpha_t(1-\bar\alpha_t)}\|\epsilon-\epsilon_\theta(x_t,t)\|_2^2$. Both posterior and reverse variances are positive for $t\ge2$, so [F5] applies with $v=\tilde\beta_t$ and $w=\sigma_t^2$; it gives exactly the coefficient $w_t$ and constant $C_t$ in the Statement. [F2, F5, step 2.2, algebra]

4.1 The terminal term remains $D_{\mathrm{KL}}(q(x_T\mid x_0)\|N_d(0,I_d))$ in step 2.2 because finite $T$ and $0<\beta_t<1$ give $\bar\alpha_T>0$; the $t=1$ term remains the separate positive-variance decoder log-likelihood. For an explicit counterexample, take $d=1$, $T=2$, $\beta_1=\tfrac14$, $\beta_2=\tfrac12$, $\sigma_1^2=(2\pi)^{-1}$, and $\sigma_2^2=\tilde\beta_2=\tfrac15$. Then $\bar\alpha_1=\tfrac34$, $\bar\alpha_2=\tfrac38$, $w_2=\frac{(1/2)^2}{2(1/5)(1/2)(5/8)}=2$, and $C_2=\frac12(1-1+\log1)=0$. For a fixed datum $x_0$, set $\epsilon_\theta(x_1,1)=(x_1-\sqrt{3/4}\,x_0)/\sqrt{1/4}$ and $\epsilon_\theta(x_2,2)=(x_2-\sqrt{3/8}\,x_0)/\sqrt{5/8}+c$, with any $c\in\mathbb R$. These are finite Borel maps, and their Gaussian log densities have finite $q$-expectations because they are quadratic functions of finite-dimensional Gaussian variables. The first map makes $\mu_{\theta,1}(x_1)=x_0$, so the decoder density at its mean is $(2\pi\sigma_1^2)^{-1/2}=1$; integrating it against the normalized reverse path density gives $p_\theta(x_0)=1$ for every $c$. Under the forward chain, the $t=1$ noise error is zero and the $t=2$ error is $c$, so $L_{\mathrm{simple}}=c^2/2$, while the exact weighted $t=2$ ELBO contribution is $2c^2$ and its prior term is independent of $c$. Taking $c\ne0$ gives $L_{\mathrm{simple}}>0$ but exact negative log-likelihood $-\log p_\theta(x_0)=0$. Thus the unweighted loss is a surrogate, not in general the maximum-likelihood objective. [F1, F2, F5, step 2.2, step 3.1, algebra] ∎

## Source notes

Variational-family support and log-integrability requirements: [[def-variational-family-and-elbo]].

Exact ELBO/KL identity and its AC branch: [[thm-elbo-kl-decomposition]].

Exact Gaussian posterior conditional and its positive observed-covariance hypothesis: [[thm-gaussian-forward-and-posterior-kernels]].

Isotropic Gaussian reverse-KL calculation: [[lem-isotropic-gaussian-kl-formula]].
