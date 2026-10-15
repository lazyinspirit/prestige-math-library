---
id: thm-feynman-kac-path-radon-nikodym-weight
kind: theorem
title: "Feynman–Kac path Radon–Nikodym weight"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-feynman-kac-path-targets-and-normalizers
  - lem-jointly-measurable-radon-nikodym-derivatives-for-probability-kernels
  - thm-ionescu-tulcea-construction-of-a-markov-chain
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - thm-integration-against-a-radon-nikodym-derivative
  - thm-measurability-of-integration-against-a-kernel
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - thm-monotone-convergence-for-the-integral
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - thm-composition-with-borel-functions-preserves-measurability
proof_strategy: direct
axiom_use: "Assume AC through the finite path-law and scalar Radon–Nikodym suppliers and the jointly measurable kernel-derivative lemma. No stronger choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §§3.2–3.3"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
    - title: "Simo Särkkä and Lennart Svensson, Bayesian Filtering and Smoothing, 2nd ed., §§11.2–11.3"
      url: "https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf"
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, §§2.1–2.2"
      url: "https://arxiv.org/pdf/math/0508594"
---

## Statement

Assume AC and the setup of [[def-feynman-kac-path-targets-and-normalizers]] through a fixed horizon $t\le T$. Let $\nu_0$ be a proposal probability on $\mathsf X_0$, and for $1\le k\le t$ let $R_k:\mathsf X_{k-1}\rightsquigarrow\mathsf X_k$ be proposal probability kernels. Define $Q_s(dx_{0:s})=\nu_0(dx_0)\prod_{k=1}^sR_k(x_{k-1},dx_k)$. Suppose $\mu_0\ll\nu_0$, and for each $k$ suppose $M_k(x,\cdot)\ll R_k(x,\cdot)$ for almost every $x$ under the last-coordinate marginal of $Q_{k-1}$. Choose a measurable version $\rho_0=d\mu_0/d\nu_0$ and, using [[lem-jointly-measurable-radon-nikodym-derivatives-for-probability-kernels]], measurable versions $r_k(x,\cdot)=dM_k(x,\cdot)/dR_k(x,\cdot)$ for these preceding-state marginals.

Then $\gamma_s\ll Q_s$ for every $s\le t$, with product density
$$W_s(x_{0:s})=G_0(x_0)\rho_0(x_0)\prod_{k=1}^sG_k(x_k)r_k(x_{k-1},x_k).$$
That is, $\gamma_s(A)=\int_AW_s\,dQ_s$ for every measurable $A\subseteq\mathsf X_{0:s}$. If $0<Z_s<\infty$, the normalized path target has density $W_s/Z_s$ with respect to $Q_s$.

## Facts & Assumptions

**Given:** AC, the finite-horizon Feynman–Kac setup, the proposal laws, the initial domination, and the transition domination hypotheses in the Statement.

[A1] [[def-axiom-of-choice]]: AC is used through the path-law and Radon–Nikodym suppliers.

[F1] [[def-feynman-kac-path-targets-and-normalizers]]: $\gamma_s$ is the state path law with density factor $\prod_{j=0}^sG_j$.

[F2] [[lem-jointly-measurable-radon-nikodym-derivatives-for-probability-kernels]]: For each transition, almost-everywhere kernel domination under the preceding proposal marginal supplies one jointly measurable kernel derivative version.

[F3] [[thm-ionescu-tulcea-construction-of-a-markov-chain]]: The target and proposal kernels define finite-prefix path laws by ordered iterated integration.

[F4] [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]: Under AC, $\mu_0\ll\nu_0$ supplies a measurable initial density $\rho_0$.

[F5] [[thm-integration-against-a-radon-nikodym-derivative]]: A Radon–Nikodym representative $h$ satisfies the setwise identity $P(A)=\int_A h\,dQ$ for every measurable $A$. It also proves the corresponding integration identity for simple functions whose level sets have finite total variation.

[F6] [[thm-measurability-of-integration-against-a-kernel]]: Integrating a nonnegative product-measurable function against a probability kernel gives a measurable section integral.

[F7] [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]]: Every nonnegative measurable function is the pointwise increasing limit of nonnegative simple measurable functions.

[F8] [[thm-monotone-convergence-for-the-integral]]: Integrals of an increasing sequence of nonnegative measurable functions converge to the integral of its pointwise limit.

[F9] [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]: A nonnegative measurable function with integral zero vanishes almost everywhere.

[F10] [[thm-composition-with-borel-functions-preserves-measurability]]: Composing a measurable function with a Borel function preserves measurability.

## Proof

**Given:** The hypotheses in the Statement.

1.1 For each $0\le s\le t$, let $P_s^M$ and $Q_s$ be the target and proposal finite-prefix path laws supplied by [F3]. Initially choose a real-valued Radon–Nikodym representative $\widetilde\rho_0$ from [F4]. Since $\mu_0$ is positive, for $N_-:=\{\widetilde\rho_0<0\}$ its setwise identity gives $0\le\mu_0(N_-)=\int_{N_-}\widetilde\rho_0\,d\nu_0\le0$. Thus $\int_{N_-}\widetilde\rho_0^-\,d\nu_0=0$, and [F9] implies $\widetilde\rho_0^-=0$ $\nu_0$-almost everywhere. Replace $\widetilde\rho_0$ by the measurable nonnegative version $\rho_0=\max(\widetilde\rho_0,0)$; [F10] gives measurability and the modification preserves the setwise density identity. Hence $P_0^M\ll Q_0$ with base density $\rho_0$; after weighting by $G_0$ in [F1], $\gamma_0$ has density $W_0=G_0\rho_0$. [A1, F1, F3, F4, F9, F10, given]

1.2 First record the nonnegative extension used below. If finite measures $P,Q$ satisfy $P(A)=\int_Au\,dQ$ for every measurable $A$, with $u\ge0$, choose by [F7] simple functions $g_n\uparrow g$ for any nonnegative measurable $g$. The simple-function identity in [F5] gives $\int g_n\,dP=\int g_nu\,dQ$ for each $n$; [F8] and monotone convergence of $g_nu$ give $\int g\,dP=\int gu\,dQ$, with infinity allowed. All measures to which this fact is applied below are probabilities, so the finite-level-set condition in [F5] holds. [F5, F7, F8]

2.1 Fix $1\le k\le t$ and assume $P_{k-1}^M\ll Q_{k-1}$ with density $D_{k-1}(x_{0:k-1})=\rho_0(x_0)\prod_{j=1}^{k-1}r_j(x_{j-1},x_j)$. For nonnegative product-measurable $h$, define $\psi(x_{0:k-1})=\int h(x_{0:k-1},x_k)M_k(x_{k-1},dx_k)$; [F6] makes $\psi$ measurable. For $Q_{k-1}$-almost every history, the kernel Radon–Nikodym identity and step 1.2 give $\psi(x_{0:k-1})=\int h(x_{0:k-1},x_k)r_k(x_{k-1},x_k)R_k(x_{k-1},dx_k)$. Step 1.2 also extends the induction density identity from sets to $\psi$, so ordered integration from [F3] gives $\begin{aligned} \int h\,dP_k^M &=\int\psi\,dP_{k-1}^M\\ &=\int D_{k-1}(x_{0:k-1})\,\psi(x_{0:k-1})\,Q_{k-1}(dx_{0:k-1})\\ &=\int h(x_{0:k})D_{k-1}(x_{0:k-1})r_k(x_{k-1},x_k)\,Q_k(dx_{0:k}). \end{aligned}$ Thus $P_k^M\ll Q_k$ with density $D_k=D_{k-1}r_k$. The kernel identity is needed only on a $Q_{k-1}$-conull set; the same is true for $P_{k-1}^M$ by the induction density, and changes on the exceptional set do not affect these nonnegative integrals. [A1, F1, F2, F3, F6, step 1.1, step 1.2, given]

3.1 Induction in step 2.1 gives the proposal density of every finite-horizon state path. The target measure $\gamma_s$ is obtained by integrating the nonnegative path potential $V_s=\prod_{j=0}^sG_j$ against $P_s^M$. For each measurable $A$, apply step 1.2 to $g=\mathbf1_A V_s$ and the density $D_s=\rho_0\prod_{j=1}^sr_j$ to obtain $\gamma_s(A)=\int_A V_sD_s\,dQ_s=\int_AW_s\,dQ_s.$ Dividing by $Z_s$ is valid exactly when $0<Z_s<\infty$. [A1, F1, step 1.2, step 2.1, algebra] ∎
