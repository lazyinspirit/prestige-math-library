---
id: thm-self-normalized-importance-sampling-ratio-clt-and-consistent-mcse
kind: theorem
title: Self-normalized importance sampling ratio CLT and consistent Monte Carlo standard error
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - alg-self-normalized-importance-sampling
  - thm-self-normalized-importance-sampling-is-consistent-under-finite-moments
  - thm-change-of-variables-for-expectation
  - thm-multivariate-iid-central-limit-theorem
  - thm-first-and-second-order-delta-method-for-random-vectors
  - thm-kolmogorov-iid-l1-strong-law
  - lem-measurable-functions-preserve-independence
  - def-identically-distributed-and-iid-random-variables
  - def-moments-variance-and-covariance
  - def-multivariate-normal-law
  - cor-holder-inequality-for-random-variables
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - cor-integral-over-a-null-set-vanishes
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Thomas B. Schön and Fredrik Lindsten, Learning of dynamical systems: Particle filters and Markov chain methods, Chapter 4 §4.3.3, Theorem 1"
      url: "https://www.ida.liu.se/divisions/stima/fokurser/smc2025/material/SMC2017.pdf"
    - title: "Tuan Anh Le, Importance Sampling, §Asymptotic Variance"
      url: "https://www.tuananhle.co.uk/notes/is.html"
    - title: "Monte Carlo Methods course notes, Chapter 6 §6.2"
      url: "https://archive.math.arizona.edu/tgk/mc/book_chap6.pdf"
---

## Statement

Let $(\mathsf X,\mathcal X,\mu)$, $\tilde p$, $Z_p$, $\pi$, $q$, $Q$, $f$, and $W_i$ satisfy the hypotheses and definitions of [[thm-self-normalized-importance-sampling-is-consistent-under-finite-moments]]. Assume also
$$\mathbb E_Q[W_1^2]<\infty,\qquad \mathbb E_Q[(W_1f(X_1))^2]<\infty,$$
and assume AC for the central limit conclusion. Set $\theta=\int f\,d\pi$ and
$$\tau^2:=\frac1{Z_p^2}\mathbb E_Q\!\left[W_1^2(f(X_1)-\theta)^2\right].$$
This is finite under the stated second moments. Then the estimate in [[alg-self-normalized-importance-sampling]] satisfies
$$\sqrt n\bigl(\hat\theta_{\mathrm{SN},n}-\theta\bigr)\Rightarrow N(0,\tau^2).$$
Define its plug-in variance estimate, when $S_n=\sum_iW_i>0$, by
$$\widehat{\operatorname{Var}}_{\mathrm{MC}}(\hat\theta_{\mathrm{SN},n}):=\frac{\sum_{i=1}^nW_i^2(f(X_i)-\hat\theta_{\mathrm{SN},n})^2}{S_n^2},$$
and set this quantity to $0$ if $S_n=0$. Then, without using AC,
$$n\widehat{\operatorname{Var}}_{\mathrm{MC}}(\hat\theta_{\mathrm{SN},n})\longrightarrow\tau^2\quad\text{almost surely}.$$
Define $\widehat{\operatorname{se}}_{\mathrm{MC},n}$ to be the nonnegative square root of this plug-in variance. Then $\sqrt n\,\widehat{\operatorname{se}}_{\mathrm{MC},n}\to\tau$ almost surely. No finite-sample unbiasedness assertion is made.

## Facts & Assumptions

**Given:** The IID sampling and first-moment hypotheses of [[thm-self-normalized-importance-sampling-is-consistent-under-finite-moments]], the additional second moments, and AC for the CLT branch.

[F1] [[alg-self-normalized-importance-sampling]]: The algorithm defines a measurable weight $w$ and, for $S_n>0$, returns $\hat\theta_{\mathrm{SN},n}=\sum_iW_if(X_i)/S_n$; when $S_n=0$, it returns the status **no estimate: zero observed target weight**.

[F2] [[thm-change-of-variables-for-expectation]]: A nonnegative measurable function of an IID draw with law $Q$ has expectation given by integration against $Q$, possibly with value $+\infty$; the same identity holds as a finite integral for integrable functions.

[F3] [[thm-multivariate-iid-central-limit-theorem]]: Under AC, IID $\mathbb R^d$-valued variables with finite second moment and covariance $\Sigma$ have sample-mean limit $\sqrt n(\bar X_n-m)\Rightarrow N_d(0,\Sigma)$; singular $\Sigma$ is allowed.

[F4] [[thm-first-and-second-order-delta-method-for-random-vectors]]: If $\sqrt n(T_n-\eta)\Rightarrow Z$ and $g(\eta+h)-g(\eta)=Ah+o(\|h\|)$, then $\sqrt n(g(T_n)-g(\eta))\Rightarrow AZ$.

[F5] [[thm-self-normalized-importance-sampling-is-consistent-under-finite-moments]]: Under its support and finite first-moment assumptions, the ratio estimate converges almost surely to $\theta$, and its denominator is eventually positive almost surely. For the convergence statement, that theorem interprets the algorithm's no-estimate status as the numeric value $0$ on any finite prefix with zero observed target weight.

[F6] [[thm-kolmogorov-iid-l1-strong-law]]: Every IID integrable real sequence has sample mean converging almost surely to its expectation.

[F7] [[lem-measurable-functions-preserve-independence]]: Applying one measurable function to each member of an independent family preserves independence.

[F8] [[def-identically-distributed-and-iid-random-variables]]: A family is IID when it is mutually independent and has a common law.

[F9] [[def-moments-variance-and-covariance]]: Covariance is the expectation of the product of centered square-integrable variables, and variance is the self-covariance.

[F10] [[def-multivariate-normal-law]]: Under AC, $Z\sim N_d(0,\Sigma)$ exactly when each linear projection $u\cdot Z$ is normal with variance $u^T\Sigma u$; singular covariance is allowed.

[F11] [[cor-holder-inequality-for-random-variables]]: For conjugate exponents $p=q=2$, square-integrable real random variables $R,S$ satisfy $\mathbb E|RS|\le(\mathbb E|R|^2)^{1/2}(\mathbb E|S|^2)^{1/2}$, so $RS$ is integrable.

[F12] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: Finite products and sums, and absolute values, of measurable real functions remain measurable.

[F13] [[cor-integral-over-a-null-set-vanishes]]: A nonnegative measurable function has integral zero over a measurable null set.

[A1] [[def-axiom-of-choice]]: AC asserts that every family of nonempty sets has a choice function; the CLT branch inherits it through [F3] and [F10], while the strong-law standard-error branch is choice-free.

## Proof

**Given:** Let $Z_i=(W_i,W_if(X_i))$, $\bar W_n=n^{-1}\sum_iW_i$, and $\bar V_n=n^{-1}\sum_iW_if(X_i)$.

1.1 By the support condition, $\pi(\{q=0\})=0$. For each $i$, $X_i$ has law $Q$, so the given finite first moment applies to $W_i|f(X_i)|$. The integrable case of [F2] gives
$$\mathbb E_Q[W_i|f(X_i)|]=\int_{\{q>0\}}\frac{\tilde p(x)|f(x)|}{q(x)}q(x)\,d\mu(x)=\int_{\{q>0\}}\tilde p|f|\,d\mu<\infty.$$
By [F13], $\int_{\{q=0\}}|f|\,d\pi=0$, and hence $\int_{\{q=0\}}\tilde p|f|\,d\mu=Z_p\int_{\{q=0\}}|f|\,d\pi=0$. Thus $\int_{\mathsf X}\tilde p|f|\,d\mu<\infty$, and the integrable case of [F2] applied to $W_if(X_i)$ yields
$$\mathbb E_Q[W_if(X_i)]=\int_{\{q>0\}}\tilde p f\,d\mu=\int_{\mathsf X}\tilde p f\,d\mu=Z_p\theta,$$
because the omitted signed integral is zero by its absolute integrability on the $\pi$-null set. The nonnegative case of [F2] also gives $\mathbb E_QW_i=\int_{\{q>0\}}\tilde p\,d\mu=Z_p$, since $\int_{\{q=0\}}\tilde p\,d\mu=Z_p\pi(\{q=0\})=0$. The second-moment assumptions make $Z_i$ square-integrable. The map $x\mapsto(w(x),w(x)f(x))$ is measurable by [F1] and [F12]. Applying [F7] to this map proves that the pairs $Z_i$ are independent; their laws agree because each $X_i$ has law $Q$ and the same map is applied, so they are IID by [F8]. Therefore [F3] and [A1] give $\sqrt n((\bar W_n,\bar V_n)-(Z_p,Z_p\theta))\Rightarrow N_2(0,\Sigma)$, where $\Sigma=\operatorname{Cov}_Q(Z_1)$. [A1, F1, F2, F3, F7, F8, F12, F13, given]

1.2 Put $U_i=W_i^2(f(X_i)-\theta)^2$, $C_i=W_i^2(f(X_i)-\theta)$, and $B_i=W_i^2$. Their measurability follows from [F12]. The stated second moments and $(W_if(X_i)-\theta W_i)^2\le2(W_if(X_i))^2+2\theta^2W_i^2$ give $\mathbb E U_i<\infty$ and $\mathbb E B_i<\infty$; [F11] gives $\mathbb E|C_i|\le(\mathbb E U_i)^{1/2}(\mathbb E B_i)^{1/2}<\infty$. Each transformed sequence is IID by [F7] and [F8], so [F6] applies to all three. Also $(W_i)$ is IID and integrable, with mean $Z_p$ by step 1.1; applying [F6] to this sequence gives $\bar W_n\to Z_p>0$ almost surely. Separately, [F5] gives $\hat\theta_{\mathrm{SN},n}\to\theta$ almost surely. [F5, F6, F7, F8, F11, F12, given, step 1.1, algebra]

2.1 Define the Borel function $g(s,t)=t/s$ for $s>0$ and $g(s,t)=0$ for $s\le0$; it is Borel because the ratio is continuous on the open set $s>0$ and the other branch is constant on its Borel complement. At $\eta=(Z_p,Z_p\theta)$, its derivative is $A(h_1,h_2)=(-\theta h_1+h_2)/Z_p$: for $h_1$ small enough that $Z_p+h_1>0$, $g(\eta+h)-g(\eta)-A h=-\frac{h_1(h_2-\theta h_1)}{Z_p(Z_p+h_1)}=O(\|h\|^2)$. Since $Z_p>0$, this is a valid first-order expansion. Since $\bar W_n\ge0$, $g(\bar W_n,\bar V_n)$ equals the ratio when $S_n>0$; when $S_n=0$, it equals the zero extension specified by [F5] for the finite prefix, while the algorithm itself returns the status in [F1]. Apply [F4] to step 1.1 to obtain the scalar limit $A Z$, where $Z\sim N_2(0,\Sigma)$. [F1, F4, F5, step 1.1, given, algebra]

3.1 By [F10], $AZ$ is centered normal with variance $A\Sigma A^T$. The centered linear combination of $Z_1$ defining this variance is $Z_p^{-1}(W_1f(X_1)-\theta W_1)$, whose mean is zero by [F2]. Therefore $A\Sigma A^T=Z_p^{-2}\mathbb E_Q[W_1^2(f(X_1)-\theta)^2]=\tau^2$, which proves the stated CLT. [F2, F9, F10, step 1.1, step 2.1, algebra]

4.1 On the probability-one event from step 1.2 the denominator is eventually positive, and expansion of the squared residual gives $n\widehat{\operatorname{Var}}_{\mathrm{MC}}=\frac{\bar U_n-2(\hat\theta_{\mathrm{SN},n}-\theta)\bar C_n+(\hat\theta_{\mathrm{SN},n}-\theta)^2\bar B_n}{\bar W_n^2}$. The numerator tends to $\mathbb E U_1$ and the denominator tends to $Z_p^2$, so the limit is $Z_p^{-2}\mathbb E U_1=\tau^2$. Continuity of the nonnegative square-root map gives $\sqrt n\,\widehat{\operatorname{se}}_{\mathrm{MC},n}\to\tau$. This argument uses only the choice-free suppliers [F5], [F6], [F7], [F8], [F11], and [F12], not AC. [F5, F6, F7, F8, F11, F12, step 1.2, given, algebra] ∎
