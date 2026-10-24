---
id: thm-misspecified-mle-sandwich-expansion
kind: theorem
title: A consistent approximate MLE has the misspecified sandwich limit under local LAN conditions
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-op-and-little-op-stochastic-bounds
  - def-total-variation-distance-for-probability-laws
  - lem-local-lipschitz-class-empirical-process-bound
  - thm-lan-implies-total-variation-bvm
  - thm-misspecified-iid-lan-under-kv-smoothness
  - thm-multivariate-iid-central-limit-theorem
  - thm-vector-slutsky
  - thm-vector-stochastic-order-calculus
  - thm-nondegenerate-multivariate-normal-law-has-density
justified_by: []
proof_strategy: direct
axiom_use: "AC is used by the multivariate iid CLT and the multivariate-normal law/density suppliers. The estimator consistency and approximate-maximization assumptions do not use AC."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises theorem under misspecification, Lemma 2.2 and proof conditions"
      url: "https://pure.uva.nl/ws/files/1850322/114737_376240.pdf"
    - title: "Peter Bartlett, Theoretical Statistics, Lecture 23, maximum likelihood conditions under QMD"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/23notes.pdf"
---

## Statement

Assume the hypotheses of [[thm-misspecified-iid-lan-under-kv-smoothness]]
and AC. Let $\widehat\theta_n$ be a measurable estimator such that
$\widehat\theta_n\to\theta^*$ in $P_0$-probability and
$$P_n\log p_{\widehat\theta_n}\ge \sup_{\theta\in\Theta}P_n\log p_\theta-o_{P_0}(n^{-1}),$$
where the empirical supremum is finite and measurable and the approximation remainder is measurable. Set $P_nf=n^{-1}\sum_{i=1}^nf(X_i)$. Then, with
$I=E_0[ss^T]$ and $S_n=n^{-1/2}\sum_i s(X_i)$,
$$\sqrt n(\widehat\theta_n-\theta^*)=V^{-1}S_n+o_{P_0}(1)\ \Rightarrow\ N_d(0,V^{-1}IV^{-1}).$$
Thus the MLE sampling covariance is the sandwich matrix $V^{-1}IV^{-1}$,
whereas the BvM posterior covariance is $V^{-1}$. For the optional
recentring conclusion, suppose the posterior $\Pi_n$ is formed from a proper
prior with a Lebesgue density continuous and strictly positive on a
neighbourhood of $\theta^*$, its evidence is finite and positive almost
surely, and for every deterministic sequence $M_n\to\infty$,
$$\Pi_n\!\left(\|\theta-\theta^*\|_2>n^{-1/2}M_n\mid X_1,\ldots,X_n\right)=o_{P_0}(1).$$
Then
$$\left\|\Pi_n\!\left(\sqrt n(\theta-\theta^*)\in\cdot\mid X_1,\ldots,X_n\right)-N_d\!\left(\sqrt n(\widehat\theta_n-\theta^*),V^{-1}\right)\right\|_{\rm TV}=o_{P_0}(1),$$
by [[thm-lan-implies-total-variation-bvm]] and the estimator expansion
proved here. The consistency and approximate-maximization hypotheses are
separate assumptions; this theorem proves neither MLE consistency nor
existence of an MLE.

## Facts & Assumptions

**Given:** The iid LAN hypotheses and notation, AC, a measurable consistent estimator, its stated $o_{P_0}(n^{-1})$ approximate-maximization property, and, for the optional recentering conclusion, a proper prior with a Lebesgue density continuous and strictly positive near $\theta^*$, finite positive evidence almost surely, and posterior contraction outside $n^{-1/2}M_n$ for every deterministic $M_n\to\infty$.

[F1] [[thm-misspecified-iid-lan-under-kv-smoothness]]: The score has mean zero and finite second moment, and the log-likelihood expansion is uniform on each compact set of local parameters.

[F2] [[def-op-and-little-op-stochastic-bounds]]: $o_P(1)$ denotes convergence in probability to zero and $O_P(1)$ denotes boundedness in probability.

[F3] [[lem-local-lipschitz-class-empirical-process-bound]]: A local log-likelihood class with square-integrable Lipschitz envelope has expected centered-process supremum at most $C_dr(E_0M^2)^{1/2}$ on a radius-$r$ ball.

[F4] [[thm-multivariate-iid-central-limit-theorem]]: Under AC, iid finite-second-moment vectors satisfy the multivariate CLT, including singular covariance.

[F5] [[thm-vector-stochastic-order-calculus]]: Finite-dimensional convergence in distribution implies boundedness in probability.

[F6] [[thm-vector-slutsky]]: If $Y_n-c=o_P(1)$ and $X_n\Rightarrow X$, then $(X_n,Y_n)\Rightarrow(X,c)$.

[F7] [[def-total-variation-distance-for-probability-laws]]: $\|P-Q\|_{\rm TV}=\sup_A|P(A)-Q(A)|$.

[F8] [[def-multivariate-normal-law]], [[thm-nondegenerate-multivariate-normal-law-has-density]]: Under AC, the multivariate-normal law exists for every positive-semidefinite covariance, including a possibly singular sandwich limit; the positive-definite Gaussian with covariance $V^{-1}$ also has its usual Lebesgue density for the optional recentering argument.

[F9] [[thm-lan-implies-total-variation-bvm]]: For a dominated finite-dimensional experiment with supplied jointly measurable density versions, a proper Lebesgue prior density continuous and strictly positive near the interior center, finite positive evidence almost surely, compact-uniform LAN, and contraction outside $\delta_nM_n$ for every deterministic $M_n\to\infty$, the posterior has the stated total-variation BvM limit.

[A1] [[def-axiom-of-choice]]: AC is used by the CLT [F4] and Gaussian-law/density suppliers [F8], and nowhere in the likelihood-optimization argument.

## Proof

**Proof technique:** First establish root-$n$ tightness by testing dyadic shells against the local quadratic KL loss; then use the compact-uniform LAN quadratic to identify the approximate maximizer.

**Given:** The objects and hypotheses in the Statement.

1.1 Write $f_t=\log(p_{\theta^*+t}/p_{\theta^*})$. Positive definiteness of $V$ and the contrast expansion in [F1] give constants $c,\rho>0$ with $E_0f_t\le-c\|t\|_2^2$ for $\|t\|_2\le\rho$. Use the measurable versions from [F3], obtained by zero extension off the common log-Lipschitz full set. The log-Lipschitz envelope and [F3] give $E_0\sup_{\|t\|\le r}|G_nf_t|\le C r$ for $r\le\rho$, where $G_n=\sqrt n(P_n-P_0)$ and $C=C_d(E_0M^2)^{1/2}$. [F1, F3, given, choose]

2.1 Let $\eta_n=n(\sup_{\theta\in\Theta}P_n\log p_\theta-P_n\log p_{\widehat\theta_n})$. The assumption gives $\eta_n=o_{P_0}(1)$ by [F2]. For fixed $A\ge1$, set $r_j=2^jA/\sqrt n$ and consider shells $r_j\le\|\widehat\theta_n-\theta^*\|_2\le2r_j$ with $2r_j\le\rho$. On such a shell, approximate maximization implies $nP_nf_{\widehat\theta_n-\theta^*}\ge-\eta_n$, while step 1.1 bounds the mean term above by $-cnr_j^2$. On $\{\eta_n\le cA^2/2\}$ this forces $\sup_{\|t\|\le2r_j}|G_nf_t|\ge(c/2)\sqrt n r_j^2$. For nonnegative $Z$ and $a>0$, $a\mathbf1_{\{Z\ge a\}}\le Z$ implies $P_0(Z\ge a)\le E_0Z/a$; apply this to the supremum and threshold above, then step 1.1 gives $C'/(\sqrt n r_j)=C'/(2^jA)$. Summing over the shells, using consistency to remove $\|\widehat\theta_n-\theta^*\|>\rho/4$, and then taking $A\to\infty$ proves $\sqrt n(\widehat\theta_n-\theta^*)=O_{P_0}(1)$. [F1, F2, F3, step 1.1, given, choose, algebra]

3.1 Set $\widehat h_n=\sqrt n(\widehat\theta_n-\theta^*)$ and $h_n^*=V^{-1}S_n$. By [F4] the score sums converge in distribution; [F5] makes $S_n$ and $h_n^*$ bounded in probability. Step 2.1 gives the same for $\widehat h_n$. Since $\theta^*$ is interior, $\theta^*+h_n^*/\sqrt n\in\Theta$ with probability tending to one. [A1, F4, F5, step 2.1, given]

4.1 On any fixed ball containing $\widehat h_n$ and $h_n^*$ with probability arbitrarily close to one, [F1] expands both log likelihoods uniformly. Approximate maximization then gives $Q_n(\widehat h_n)\ge Q_n(h_n^*)-o_{P_0}(1),\qquad Q_n(h)=h^TS_n-\tfrac12h^TVh.$ Completing the square gives $Q_n(h_n^*)-Q_n(\widehat h_n)=\tfrac12(\widehat h_n-h_n^*)^TV(\widehat h_n-h_n^*)\ge\tfrac12\lambda_{\min}(V)\|\widehat h_n-h_n^*\|_2^2$. Hence $\widehat h_n-h_n^*=o_{P_0}(1)$. [F1, step 3.1, given, algebra]

5.1 By [F1], $V^{-1}s(X_i)$ is centered, iid, and has covariance $V^{-1}IV^{-1}$. Applying the multivariate CLT [F4] to these vectors gives $h_n^*=V^{-1}S_n\Rightarrow N_d(0,V^{-1}IV^{-1})$, including when this covariance is singular. Then [F6] and step 4.1 give $\widehat h_n\Rightarrow N_d(0,V^{-1}IV^{-1})$. This is the sandwich sampling covariance; it need not equal the posterior covariance $V^{-1}$. [A1, F1, F4, F6, F8, step 4.1]

6.1 For each $n$, the iid sample experiment is dominated by the finite product $\mu^{\otimes n}$, with densities $p_{0,n}(x_1,\ldots,x_n)=\prod_i p_0(x_i)$ and $p_{n,\theta}(x_1,\ldots,x_n)=\prod_i p_\theta(x_i)$. Iterated integration gives the product-law formula on measurable rectangles, so uniqueness of product measures identifies these as densities of $P_0^{\otimes n}$ and $P_\theta^{\otimes n}$. Their likelihood ratio is the sum in the LAN conclusion of [F1]. Under the optional prior, evidence, and posterior-rate conditions in the Statement, [F9] therefore gives the BvM approximation centered at $h_n^*$. Let $\varphi_V$ be the density of $N_d(0,V^{-1})$ from [F8]. The fundamental theorem of calculus and translation invariance of Lebesgue measure give $\int|\varphi_V(x-a)-\varphi_V(x-b)|\,dx\le\|a-b\|_2\int\|\nabla\varphi_V(x)\|_2\,dx.$ The last integral is finite because $\nabla\varphi_V(x)=-Vx\varphi_V(x)$ and the Gaussian has a finite first moment. Taking $a=\widehat h_n$, $b=h_n^*$ and using step 4.1 makes this Gaussian-shift TV distance $o_{P_0}(1)$. The triangle inequality with the BvM approximation proves the recentered conclusion. [F7, F8, F9, step 4.1, given, algebra] ∎
