---
id: thm-kerov-central-limit-theorem-for-normalized-cycle-characters
kind: theorem
title: "Kerov's central limit theorem for normalized cycle characters"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
proof_strategy: direct
deps: [def-joint-convergence-and-normalized-cycle-character-observables, def-normalized-shifted-character-basis-elements, lem-hermite-leading-terms-for-normalized-shifted-characters, lem-hermite-orthogonality-and-monomial-expansion, prop-plancherel-expectations-of-shifted-character-observables, thm-multivariate-method-of-moments-for-a-determinate-limit, def-monic-probabilists-hermite-polynomials, def-multivariate-normal-law, thm-factorization-of-expectations-for-independent-variables, lem-gaussian-even-moment-bound-for-brownian-increments, cor-cauchy-schwarz-for-random-variables, def-standard-normal-and-normal-laws, def-plancherel-measure-on-partitions, def-shifted-character-observables-and-profile-moments]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vladimir Ivanov and Grigori Olshanski, Kerov's central limit theorem for the Plancherel measure on Young diagrams, arXiv:math/0304010; survey-paper version in Symmetric Functions 2001, NATO Science Series II 74 (2002), 93-151"
      url: "https://arxiv.org/pdf/math/0304010"
      locator: "Thm. 6.1 and its proof, printed pp. 29-32; Props. 6.2-6.4, formulas (6.4)-(6.9)"
    - title: "Piotr Sniady, Gaussian fluctuations of characters of symmetric groups and of Young diagrams, arXiv:math/0501112"
      url: "https://arxiv.org/pdf/math/0501112"
      locator: "Thm. and Def. 3.1, Cor. 3.3 and the Plancherel example following it, printed pp. 11-13 (independent genus-expansion treatment of the same limit)"
---

## Statement

Assume AC. For every fixed integer $N\ge2$, as $n\to\infty$ under the Plancherel measures $P_n$,
$$\bigl(\eta_k^{(n)}\bigr)_{2\le k\le N}\ \Longrightarrow\ N_{N-1}(0,I_{N-1}),$$
that is, the $N-1$ normalized cycle-character observables of [[def-joint-convergence-and-normalized-cycle-character-observables]] converge jointly in distribution to independent standard Gaussians. Equivalently,
$$\Bigl(\frac{p_k^\#}{n^{k/2}}\Bigr)_{2\le k\le N}\ \Longrightarrow\ (\zeta_2,\dots,\zeta_N),$$
where the $\zeta_k$ are independent centered Gaussians of variances $k$. Convergence is the joint convergence of [[def-joint-convergence-and-normalized-cycle-character-observables]].

## Facts & Assumptions

**Given:** AC; a fixed integer $N\ge2$; the monic Hermite polynomials $H_m$ with $H_0=1$ ([[def-monic-probabilists-hermite-polynomials]]); the normalized observables $\eta_\rho^{(n)}=p_\rho^\#/\bigl(n^{|\rho|_1/2}\prod_{k\ge2}k^{m_k(\rho)/2}\bigr)$ with $|\rho|_1=|\rho|+m_1(\rho)$ and $\eta_k^{(n)}=p_k^\#/(\sqrt k\,n^{k/2})$ ([[def-normalized-shifted-character-basis-elements]], [[def-joint-convergence-and-normalized-cycle-character-observables]]); and the probability spaces $(Y_n,P_n)$ of [[def-plancherel-measure-on-partitions]].

[F1] For every partition $\rho$ with $m_1(\rho)=0$ and every $n\ge|\rho|$, $\prod_{k\ge2}H_{m_k(\rho)}(\eta_k^{(n)})=\eta_\rho^{(n)}+R_\rho^{(n)}$ with $\bigl|\mathbb E_{P_n}[\prod_{k\ge2}H_{m_k(\rho)}(\eta_k^{(n)})]-\mathbb E_{P_n}[\eta_\rho^{(n)}]\bigr|=O(n^{-1/2})$; in particular the expectation of the Hermite product is $O(n^{-1/2})$ when $\rho\ne\emptyset$ and equals $1$ when $\rho=\emptyset$ ([[lem-hermite-leading-terms-for-normalized-shifted-characters]]).

[F2] For $Z\sim N(0,1)$: $\mathbb E[H_m(Z)]=0$ for every $m\ge1$ and $\mathbb E[H_m(Z)H_n(Z)]=m!\,\delta_{mn}$; and for any $m_1,\dots,m_N\in\mathbb N$ the mixed monomial $\prod_kx_k^{m_k}$ is a $\mathbb Z$-linear combination of products $\prod_kH_{m'_k}(x_k)$ with $m'_k\le m_k$ and $m'_k\equiv m_k\pmod 2$, the coefficient of $\prod_kH_{m_k}$ being $1$ ([[lem-hermite-orthogonality-and-monomial-expansion]]).

[F3] $\mathbb E_{P_n}[\eta_\rho^{(n)}]=0$ whenever $m_1(\rho)=0$ and $\rho\ne\emptyset$; and $\eta_k^{(n)}=p_k^\#/(\sqrt k\,n^{k/2})$ for $2\le k\le N$ ([[def-normalized-shifted-character-basis-elements]], [[def-joint-convergence-and-normalized-cycle-character-observables]]).

[F4] Joint convergence means weak convergence of the laws $\mu_n$ on $\mathbb R^{N-1}$; the target law $N_{N-1}(0,I_{N-1})$ is the law of a vector with independent standard normal coordinates $\xi_2,\dots,\xi_N$, whereas for $\zeta_k:=\sqrt k\,\xi_k$ the law of $(\zeta_2,\dots,\zeta_N)$ is $N_{N-1}(0,\operatorname{diag}(2,\dots,N))$ ([[def-joint-convergence-and-normalized-cycle-character-observables]], [[def-multivariate-normal-law]]).

[F5] Under AC, if $\mathbb R^d$-valued random vectors have all mixed moments converging to those of a Borel probability $\mu$ with finite moments that is determined by its mixed moments, then their laws converge weakly to $\mu$; every multivariate Gaussian law is moment-determinate ([[thm-multivariate-method-of-moments-for-a-determinate-limit]]).

[F6] If $X_2,\dots,X_N$ are independent real random variables and $g_k$ Borel measurable with $g_k(X_k)$ integrable, then $\mathbb E[\prod_kg_k(X_k)]=\prod_k\mathbb E[g_k(X_k)]$ ([[thm-factorization-of-expectations-for-independent-variables]]).

[F7] For $Z\sim N(0,1)$ one has $\mathbb E[Z^{2m}]=(2m-1)!!$ and $\mathbb E|Z|^{k}<\infty$ for every $k$; hence every polynomial in $Z$ is integrable ([[lem-gaussian-even-moment-bound-for-brownian-increments]], [[cor-cauchy-schwarz-for-random-variables]], [[def-standard-normal-and-normal-laws]]).

## Proof

**Proof technique:** direct.

1.1 Hermite-product moments: fix nonnegative integers $m_2,\dots,m_N$ and put $\rho:=(2^{m_2},\dots,N^{m_N})$, so $m_1(\rho)=0$ and $\rho=\emptyset$ exactly when all $m_k=0$. If all $m_k=0$, then both $\mathbb E_{P_n}[\prod_kH_{m_k}(\eta_k^{(n)})]=1$, using $H_0=1$, and $\prod_k\mathbb E[H_{m_k}(\xi_k)]=1$ by [F2]; if some $m_k\ge1$ then $\rho\ne\emptyset$, and [F1] with [F3] gives $\mathbb E_{P_n}[\prod_kH_{m_k}(\eta_k^{(n)})]=\mathbb E_{P_n}[\eta_\rho^{(n)}]+O(n^{-1/2})=O(n^{-1/2})\to0$, while $\prod_k\mathbb E[H_{m_k}(\xi_k)]=0$ by [F2] and [F6] because some factor has $m_k\ge1$ and the remaining factors are integrable by [F7]. Hence $\mathbb E_{P_n}[\prod_kH_{m_k}(\eta_k^{(n)})]\to\prod_k\mathbb E[H_{m_k}(\xi_k)]$ for every tuple $(m_k)_{2\le k\le N}$. [given, F1, F2, F3, F6, F7, algebra]

2.1 Monomial moments: let $m_2,\dots,m_N\ge0$. By the expansion clause of [F2] the mixed monomial $\prod_kx_k^{m_k}$ equals a finite $\mathbb Z$-linear combination $\sum_jc_j\prod_kH_{j_k}(x_k)$; evaluating at $x_k=\eta_k^{(n)}$, taking expectations and using step 1.1 termwise for the finitely many tuples $(j_k)$ gives $\mathbb E_{P_n}[\prod_k(\eta_k^{(n)})^{m_k}]\to\sum_jc_j\prod_k\mathbb E[H_{j_k}(\xi_k)]$; evaluating the same expansion at $x_k=\xi_k$ and using [F6] and [F7] gives $\mathbb E[\prod_k\xi_k^{m_k}]=\sum_jc_j\prod_k\mathbb E[H_{j_k}(\xi_k)]$. Hence all mixed moments of $(\eta_2^{(n)},\dots,\eta_N^{(n)})$ converge to the corresponding mixed moments of the standard Gaussian vector $(\xi_2,\dots,\xi_N)$. [given, F2, F6, F7, step 1.1, algebra]

3.1 Convergence in distribution: by step 2.1 hypothesis (i) of [F5] holds for the vectors $X_n:=(\eta_2^{(n)},\dots,\eta_N^{(n)})$, $d:=N-1$, and the target $\mu:=N_{N-1}(0,I_{N-1})$, which by [F4] is the law of $(\xi_2,\dots,\xi_N)$; hypothesis (ii) is the Gaussian determinacy clause of [F5]; hence $\eta^{(n)}\Longrightarrow N_{N-1}(0,I_{N-1})$. [given, F4, F5, step 2.1]

3.2 Equivalent unnormalized form: by [F3], $p_k^\#/n^{k/2}=\sqrt k\,\eta_k^{(n)}$ for each $k$, so for every tuple $(m_k)$ the moment $\mathbb E_{P_n}[\prod_k(p_k^\#/n^{k/2})^{m_k}]$ equals $\prod_kk^{m_k/2}\mathbb E_{P_n}[\prod_k(\eta_k^{(n)})^{m_k}]$ and converges by step 2.1 to $\prod_kk^{m_k/2}\mathbb E[\prod_k\xi_k^{m_k}]=\mathbb E[\prod_k\zeta_k^{m_k}]$, where the last equality uses $\zeta_k=\sqrt k\,\xi_k$ and the factorization [F6]; the law of $(\zeta_2,\dots,\zeta_N)$ is the multivariate Gaussian law $N_{N-1}(0,\Sigma)$ with $\Sigma=\operatorname{diag}(2,\dots,N)$ of [F4], which is moment-determinate by [F5], so a second application of [F5] gives $(p_k^\#/n^{k/2})_{2\le k\le N}\Longrightarrow(\zeta_2,\dots,\zeta_N)$. [given, F3, F4, F5, F6, step 2.1, algebra]

4.1 Conclusion: step 3.1 proves the normalized convergence and step 3.2 its stated equivalent form, both for every fixed $N\ge2$. AC is used exactly through [F5] (Prokhorov, Skorokhod and the Gaussian determinacy clause) and the target law of [F4]. [given, F4, F5, step 3.1, step 3.2] ∎ 