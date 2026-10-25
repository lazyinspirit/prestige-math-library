---
id: thm-ip-conjugate-gaussian-sequence-contraction
kind: theorem
title: "Exact posterior second moment and contraction bound for a Gaussian sequence inverse problem"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-ip-gaussian-sequence-inverse-model
  - def-ip-posterior-contraction-rate
  - def-axiom-of-choice
  - def-countable-choice
  - def-independent-random-elements
  - thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel
  - thm-ip-finite-linear-gaussian-posterior
  - lem-uncorrelated-jointly-gaussian-blocks-are-independent
  - thm-dynkin-pi-lambda
  - lem-finite-measure-uniqueness-on-a-pi-system
  - thm-monotone-convergence-for-the-integral
  - thm-chebyshev-markov-inequality-for-the-integral
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited from the compact-SVD sequence model. AC is used to construct the countable Gaussian product law. The posterior-moment, nonnegative-series, and Markov calculations use no stronger choice principle."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: pass
sources:
  references:
    - title: "B. T. Knapik, A. W. van der Vaart, and J. H. van Zanten, Bayesian inverse problems with Gaussian priors, The Annals of Statistics 39 (2011), 2626–2657"
      url: "https://arxiv.org/pdf/1103.2692"
      locator: "§3, Proposition 3.1; §4, Theorem 4.1; §7.1 complete proof, with the diagonal coordinate expressions and sum bounds in Lemmas 8.1–8.2. The present coordinatewise trace identity is proved locally."
    - title: "Iain M. Johnstone, Gaussian estimation: Sequence and wavelet models, 2013 draft"
      url: "https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf"
      locator: "§§1.2 and 2.3, equations (1.4), (2.14)–(2.20), and the product-prior discussion (2.16), printed pp. 6 and 25–29."
    - title: "Litao Ding and Peter Mathé, Minimax rates for statistical inverse problems under general source conditions"
      url: "https://arxiv.org/pdf/1707.01706"
      locator: "§1, equations (1)–(3), PDF pp. 1–2, for the sequence inverse experiment and its compact-SVD convention; no Bayesian contraction claim is taken from this minimax paper."
---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice. Let $0<\epsilon$, let $(s_j)_{j\ge1}$ be the positive singular values in the Gaussian sequence inverse model, and let a fixed truth $\theta^\dagger=(\theta^\dagger_j)_{j\ge1}$ belong to $\ell^2(\mathbb N_{>0},\mathbb R)$. Let $\tau_j>0$ satisfy $\sum_{j\ge1}\tau_j^2<\infty$, and let the prior be a Borel probability on $\ell^2$ whose coordinates are independent $N(0,\tau_j^2)$ variables, independent of the observation noise. Under the prior-predictive law the observations are $Y_j=s_j\theta_j+\epsilon\xi_j$; under the fixed truth they are $Y_j=s_j\theta^\dagger_j+\epsilon\xi_j$, where the $\xi_j$ are independent $N(0,1)$ variables. Define $v_j=(\tau_j^{-2}+s_j^2/\epsilon^2)^{-1}$ and $\lambda_j=\tau_j^2s_j^2/(\epsilon^2+\tau_j^2s_j^2)$. For fixed-truth-almost every data sequence, a posterior version on $\ell^2$ is the restriction of $\bigotimes_{j\ge1}N(\lambda_jY_j/s_j,v_j)$. Its expected posterior squared distance from the truth is
$$S_\epsilon(\theta^\dagger):=\mathbb E_{\theta^\dagger}\!\left[\int_{\ell^2}\|\theta-\theta^\dagger\|_2^2\,\Pi_\epsilon(d\theta\mid Y)\right]=\sum_{j\ge1}\left[(1-\lambda_j)^2(\theta^\dagger_j)^2+\frac{v_j^2s_j^2}{\epsilon^2}+v_j\right].$$
The identity holds in $[0,+\infty]$; under the stated trace condition its right side is finite. For every $R>0$, the expected posterior mass outside the radius-$R$ ball is at most $S_\epsilon(\theta^\dagger)/R^2$. In particular, if $S_\epsilon(\theta^\dagger)\le C r_\epsilon^2$ for a constant $C$ and a positive $r_\epsilon\to0$, then $r_\epsilon$ is a posterior contraction rate in the sense of the preceding definition.

## Statement references

[[def-ip-gaussian-sequence-inverse-model|The compact-SVD coordinates have a square-summable parameter space, product-Borel data, and normalized observations.]]

[[def-ip-posterior-contraction-rate|A contraction rate is defined by expected posterior mass outside every diverging multiple of the rate tending to zero under the fixed-truth data laws.]]

[[thm-ip-finite-linear-gaussian-posterior|Finite Gaussian conditioning gives the scalar posterior mean and variance used coordinatewise.]]

[[thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel|Under AC, a consistent countable family of finite Gaussian laws has a probability law on the coordinate cylinder sigma-algebra.]]

[Knapik, van der Vaart, and van Zanten, *Bayesian inverse problems with Gaussian priors*, §§3–4 and §7.1](https://arxiv.org/pdf/1103.2692)

[Johnstone, *Gaussian estimation: Sequence and wavelet models*, §§1.2 and 2.3](https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf)

[Ding and Mathé, *Minimax rates for statistical inverse problems under general source conditions*, §1](https://arxiv.org/pdf/1707.01706)

## Facts & Assumptions

**Given:** AC and Countable Choice; the positive-noise Gaussian sequence inverse experiment; a fixed truth $\theta^\dagger\in\ell^2$; an independent-coordinate Gaussian prior with $\tau_j>0$ and $\sum_j\tau_j^2<\infty$; and prior/noise independence.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[A2] Countable Choice supplies a choice function for every countable family of nonempty sets; this is the branch assumed by the compact-SVD coordinate model. [[def-countable-choice]]

[F1] The Gaussian sequence inverse model has parameter $\theta\in\ell^2$, product-Borel data $Z\in\mathbb R^{\mathbb N_{>0}}$, and coordinates $Z_j=\theta_j+\epsilon s_j^{-1}\xi_j$ with independent standard normal $\xi_j$. Multiplying by $s_j>0$ gives $Y_j=s_j\theta_j+\epsilon\xi_j$. [[def-ip-gaussian-sequence-inverse-model]]

[F2] In a finite linear Gaussian model with Gaussian prior $N_n(m_0,C_0)$ and positive-definite observation-noise covariance $\Gamma$, the posterior law is multivariate normal with mean $m_0+C_0A^T(AC_0A^T+\Gamma)^{-1}(y-Am_0)$ and covariance $C_0-C_0A^T(AC_0A^T+\Gamma)^{-1}AC_0$. [[thm-ip-finite-linear-gaussian-posterior]]

[F3] Under AC, a consistent family of finite Gaussian laws on countably many real coordinates has a unique probability law on the product cylinder sigma-algebra. [[thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel]]

[F4] Independence of random elements is independence of their generated sigma-algebras; the assumed independent prior and noise coordinates give independent coordinate pairs. [[def-independent-random-elements]]

[F5] Finite measures that agree on a generating $\pi$-system and on the whole space agree on its generated sigma-algebra. [[lem-finite-measure-uniqueness-on-a-pi-system]]

[F6] A $\pi$-system contained in a Dynkin system has its generated sigma-algebra contained in that Dynkin system. [[thm-dynkin-pi-lambda]]

[F7] Increasing nonnegative measurable functions satisfy convergence of their integrals to the integral of their pointwise limit. [[thm-monotone-convergence-for-the-integral]]

[F8] For a nonnegative measurable function $f$ and $t>0$, $\mu\{f\ge t\}\le t^{-1}\int f\,d\mu$. [[thm-chebyshev-markov-inequality-for-the-integral]]

[F9] A posterior contraction rate is defined by the expected fixed-truth posterior tail condition in the Statement. [[def-ip-posterior-contraction-rate]]

[F10] In a jointly multivariate-normal vector, blocks with zero cross-covariance are independent, including when the covariance is singular. [[lem-uncorrelated-jointly-gaussian-blocks-are-independent]]

**Given:** The hypotheses of the Statement.

## Proof

**Given:** The hypotheses of the Statement.

1.1 For each fixed coordinate $j$, apply [F2] with one-dimensional prior variance $C_0=\tau_j^2$, observation map $A=s_j$, and noise variance $\Gamma=\epsilon^2$. Then $AC_0A^T+\Gamma=s_j^2\tau_j^2+\epsilon^2>0$, and [F2] gives posterior mean $\tau_j^2s_jY_j/(\epsilon^2+\tau_j^2s_j^2)=\lambda_jY_j/s_j$ and variance $\tau_j^2-\tau_j^4s_j^2/(\epsilon^2+\tau_j^2s_j^2)=v_j$. [A1, F2, given, algebra]

2.1 For every finite coordinate set $J$, the prior/noise pairs indexed by $J$ are independent of the pairs outside $J$: independence of the prior element from the noise element and independence within each coordinate family factor the probabilities of finite coordinate rectangles into the product of the pair marginals, and [F5] extends this factorization from the generating rectangles to the corresponding product-Borel events. Each $Y_j$ is a measurable function of its pair $(\theta_j,\xi_j)$, so $(\theta_J,Y_J)$ is independent of $Y_{J^c}$. For the finite block, put $D_\tau=\operatorname{diag}(\tau_j^2)_{j\in J}$ and $D_s=\operatorname{diag}(s_j)_{j\in J}$. [F2] gives posterior covariance $$D_\tau-D_\tau D_s^T(D_sD_\tau D_s^T+\epsilon^2I)^{-1}D_sD_\tau=\operatorname{diag}(v_j)_{j\in J},$$ and posterior mean with coordinates $\lambda_jY_j/s_j$. Since each $v_j>0$, the Gaussian coordinates have zero cross-covariance, and repeated application of [F10] shows they are independent. Thus the finite-block conditional law is the product of the scalar laws from step 1.1. Independence of the complement makes this also the conditional law given the full data: the conditional identity first holds on data rectangles by finite-block conditioning and independence, and [F5] extends it to all product-Borel data events. The product Gaussian law $Q_y=\bigotimes_{j\ge1}N(\lambda_jy_j/s_j,v_j)$ exists on $\mathbb R^{\mathbb N_{>0}}$ by [F3]. On finite-coordinate cylinders its evaluations are Borel functions of $y$; the class of Borel sets $B$ for which $y\mapsto Q_y(B)$ is measurable is a Dynkin system containing the generating cylinder $\pi$-system, so [F6] makes $Q$ a probability kernel. The same finite-block conditional identity holds on data cylinders, and [F5] applied successively in the data and parameter coordinates extends it to all product-Borel events. Thus $Q_y$ is the prior-predictive conditional law on the product coordinate space. [A1, A2, F2, F3, F4, F5, F6, F10, given, step 1.1, construct, algebra]

3.1 Put $m_j(y)=\lambda_jy_j/s_j$ and $Y_0=\{y:\sum_jm_j(y)^2<\infty\}$. This is Borel because each $m_j$ is coordinate-measurable and $\ell^2=\bigcup_{k\ge1}\bigcap_{N\ge1}\{x:\sum_{j=1}^Nx_j^2\le k\}$. The norm-Borel sigma-algebra of $\ell^2$ equals the trace of the product Borel sigma-algebra: finite-support rational sequences are countable and dense (truncate a square-summable sequence and approximate the retained coordinates), and for $a\in\ell^2$ and $r>0$, $B_{\ell^2}(a,r)=\ell^2\cap\bigcup_{\substack{q\in\mathbb Q\\0<q<r^2}}\bigcap_{N\ge1}\{x\in\mathbb R^{\mathbb N_{>0}}:\sum_{j=1}^N(x_j-a_j)^2\le q\}$. Thus every norm ball, and hence every norm-open set, is trace product-Borel; conversely the coordinate maps on normed $\ell^2$ are continuous. Therefore the restriction of $Q_y$ to $\ell^2$ is measurable on its norm-Borel sets. Since $v_j\le\tau_j^2$, [F7] gives $\int\sum_jx_j^2\,Q_y(dx)=\sum_j(m_j(y)^2+v_j)<\infty$ on $Y_0$, so $Q_y(\ell^2)=1$ there. Under the prior-predictive law, $\mathbb E m_j(Y)^2=\lambda_j^2\tau_j^2+\lambda_j^2\epsilon^2/s_j^2=\lambda_j\tau_j^2\le\tau_j^2$; under the fixed truth, $m_j(Y)=\lambda_j\theta_j^\dagger+\lambda_j\epsilon\xi_j/s_j$ and $\mathbb E_{\theta^\dagger}m_j(Y)^2=\lambda_j^2(\theta_j^\dagger)^2+\lambda_j^2\epsilon^2/s_j^2\le(\theta_j^\dagger)^2+\tau_j^2$. Applying [F7] to the partial sums shows $Y_0$ has full measure under both laws. Restrict $Q_y$ to $\ell^2$ on $Y_0$ and set it equal to $\delta_0$ outside $Y_0$; this is a posterior version on $\ell^2$ and is defined for fixed-truth-almost every observation. [A1, A2, F3, F6, F7, given, step 2.1, construct, algebra]

4.1 For $y\in Y_0$, the product posterior has coordinate mean $m_j(y)$ and variance $v_j$, so its expected squared coordinate error is $(m_j(y)-\theta_j^\dagger)^2+v_j$. The partial sums of these nonnegative errors increase to $\|\theta-\theta^\dagger\|_2^2$; [F7] therefore gives $\int\|\theta-\theta^\dagger\|_2^2\,\Pi_\epsilon(d\theta\mid y)=\sum_j((m_j(y)-\theta_j^\dagger)^2+v_j)$, with the value $+\infty$ allowed. [F7, given, step 3.1, algebra]

5.1 Under the fixed truth, $m_j(Y)-\theta_j^\dagger=-(1-\lambda_j)\theta_j^\dagger+\lambda_j\epsilon\xi_j/s_j$. The noise has mean zero and variance one, so its cross term has expectation zero and $\mathbb E_{\theta^\dagger}(m_j(Y)-\theta_j^\dagger)^2=(1-\lambda_j)^2(\theta_j^\dagger)^2+\lambda_j^2\epsilon^2/s_j^2$. The identity $v_js_j^2/\epsilon^2=\lambda_j$ gives $\lambda_j^2\epsilon^2/s_j^2=v_j^2s_j^2/\epsilon^2$. Taking expectations in step 4.1 and applying [F7] to the nonnegative partial sums proves the displayed exact series identity. [F1, F7, given, step 4.1, algebra]

6.1 For each fixed data sequence, apply [F8] to the posterior probability measure with $f(\theta)=\|\theta-\theta^\dagger\|_2^2$ and threshold $R^2>0$. This gives posterior tail mass at most $R^{-2}$ times the posterior second moment. Taking fixed-truth expectation and using step 5.1 yields the stated bound. If $S_\epsilon(\theta^\dagger)\le C r_\epsilon^2$, substitute $R=M_\epsilon r_\epsilon$ to obtain expected tail mass at most $C/M_\epsilon^2\to0$ for every $M_\epsilon\to\infty$; [F9] identifies $r_\epsilon$ as a posterior contraction rate. [F8, F9, step 5.1, given, algebra] ∎

## Remarks

At $s_j=\tau_j=\epsilon=1$, the coordinate posterior is $N(Y_j/2,1/2)$ and the prior-predictive law of $Y_j$ is $N(0,2)$. The finite check of this one-coordinate case does not test the infinite product or the $\ell^2$ support argument.
