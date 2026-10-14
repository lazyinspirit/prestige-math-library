---
id: ex-sample-mean-attains-unrestricted-mean-bound
kind: example
title: The sample mean attains the unrestricted mean bound
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 10
deps:
  - def-dqm-submodel-through-a-law
  - def-pathwise-differentiable-functional
  - thm-influence-curve-representers
  - def-asymptotically-linear-estimator-and-influence-function
  - thm-asymptotic-linearity-implies-normality
  - lem-one-sided-dqm-implies-iid-lan
  - thm-le-cam-third-lemma
  - thm-multivariate-iid-central-limit-theorem
  - thm-slutsky-for-real-random-variables
  - thm-cramer-wold-device
  - thm-semiparametric-information-bound-for-regular-al-estimators
  - cor-cauchy-schwarz-inequality-for-l-two
  - cor-taylor-remainder-bound
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: A. W. van der Vaart, Semiparametric Statistics, Lecture Notes in Mathematics 1781, Lecture 2, Example 2.11 (Springer, 2002)
      url: https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf
    - title: Edward H. Kennedy, Semiparametric theory, §§3–4 (2017)
      url: https://arxiv.org/pdf/1709.06418
---

## Example

Let $P$ be any law on $\mathbb R$ with $P[X^2]<\infty$, let $\mu=PX$, and consider the local model whose allowed paths are all bounded mean-zero tilts $dP_{t,s}=(1+ts)dP$ for sufficiently small $t\ge0$. For $\psi(Q)=QX$, the sample mean $\bar X_n$ is regular along each allowed one-sided path (the centered root-$n$ error has one common limit law for every fixed $h\ge0$), and is asymptotically linear with influence function $X-\mu$. Its asymptotic variance equals the unrestricted mean bound.

## Facts & Assumptions

**Given:** A probability law $P$ on $\mathbb R$ with $P[X^2]<\infty$, the stated bounded-score local model, and AC and Countable Choice.

[F1] [[def-dqm-submodel-through-a-law]]: a supplied common-dominated one-sided path is DQM when its square-root densities have the stated $L^2(\mu)$ first-order expansion.

[F2] [[def-pathwise-differentiable-functional]]: the tangent space is the closed $L^2_0(P)$ span of allowed scores, and a parameter influence curve represents the path derivative by $P[\phi s]$.

[F3] [[def-asymptotically-linear-estimator-and-influence-function]]: asymptotic linearity means $\widehat\psi_n-\psi(P)=(P_n-P)\varphi+o_P(n^{-1/2})$ with $\varphi\in L^2_0(P)$.

[F4] [[thm-multivariate-iid-central-limit-theorem]]: under AC, iid square-integrable vectors have their centered Gaussian limit, including singular covariance.

[F5] [[lem-one-sided-dqm-implies-iid-lan]]: each bounded-score path has a mean-one local likelihood-ratio proxy with the Gaussian LAN expansion, an actual-law total-variation error tending to zero, and proxy-zero probability tending to zero.

[F6] [[thm-le-cam-third-lemma]]: under the proxy law, a joint Gaussian limit shifts the statistic's mean by its covariance with the log likelihood ratio and preserves its covariance.

[F7] [[thm-asymptotic-linearity-implies-normality]]: the estimator's base-law limit is normal with covariance equal to its influence-function covariance.

[F8] [[thm-semiparametric-information-bound-for-regular-al-estimators]]: every regular asymptotically linear estimator has influence covariance at least the canonical-gradient covariance.

[F9] [[thm-influence-curve-representers]]: the canonical gradient is the unique derivative representer in the tangent space; Countable Choice is assumed for its projection construction.

[F10] [[cor-cauchy-schwarz-inequality-for-l-two]]: the $L^2(P)$ pairing is continuous.

[F11] [[thm-slutsky-for-real-random-variables]] and [[thm-cramer-wold-device]]: scalar $o_P(1)$ perturbations preserve projected limits, and all projection limits determine the vector limit.

[F12] [[cor-taylor-remainder-bound]]: if the second derivative is bounded on an interval, the first-order Taylor polynomial has a remainder bounded by a constant times the square of the displacement.

[A1] [[def-axiom-of-choice]]: AC is used by the iid CLT [F4]; the displayed tilt densities are explicit and require no selection.

[A2] [[def-countable-choice]]: Countable Choice is used for the tangent-space projection in [F9].

## Verification

**Given:** $P[X^2]<\infty$, $\mu=PX$, and the bounded-score path family in the example.

1.1 For each bounded $s$ with $Ps=0$, choose $t\ge0$ so small that $|ts|\le1/2$ everywhere. On $[-1/2,1/2]$, $g(x)=\sqrt{1+x}$ has $g''(x)=-1/(4(1+x)^{3/2})$, so $|g''(x)|\le1$. [F12] with $n=1$ gives $\sqrt{1+ts}=1+\frac t2s+O(t^2\|s\|_\infty^2)$ uniformly. The remainder is $o(t)$ in $L^2(P)$, so this is a DQM path with score $s$. Its mean is $\psi(P_{t,s})=\mu+tP[Xs]$, hence $\dot\psi_P(s)=P[(X-\mu)s]$. [F1, F12, given, algebra]

1.2 Bounded centered functions are dense in $L^2_0(P)$: for $g\in L^2_0(P)$, the bounded functions $g_M=g\mathbf1_{\{|g|\le M\}}-P[g\mathbf1_{\{|g|\le M\}}]$ are centered and converge to $g$ in $L^2(P)$ by truncation and $Pg=0$. Thus $\mathcal T=L^2_0(P)$. By [F10], $\dot\psi_P$ is continuous and is represented by $\phi=X-\mu\in\mathcal T$; [F9] makes this the canonical gradient. Its covariance is $V_{\rm can}=P[(X-\mu)^2]=\sigma^2$. [A2, F2, F9, F10, given, algebra]

1.3 The identity $\bar X_n-\mu=(P_n-P)(X-\mu)$ proves exact asymptotic linearity with influence $\varphi=X-\mu$. Therefore [F7] gives the base limit $N(0,\sigma^2)$. [A1, F3, F7, given, algebra]

1.4 Fix a bounded centered score $s$ and $h\ge0$. Under the base law, the iid vectors $(X_i-\mu,s(X_i))$ have finite second moment. By [F4], their normalized sums converge jointly to a centered Gaussian with covariance entries $\sigma^2$, $P[(X-\mu)s]$, and $P[s^2]$. The lemma [F5] also gives $P(L_n=0)\to0$; set $\ell_n=\log L_n$ when $L_n>0$ and $\ell_n=0$ otherwise, which changes the joint law only on an $o(1)$-probability event. Scalar Slutsky and Cramér–Wold [F11] give the joint Gaussian limit with $\ell_n$; exponentiation gives the likelihood-ratio limit required by [F6]. The proxy limit of $\sqrt n(\bar X_n-\mu)$ is therefore $N(hP[(X-\mu)s],\sigma^2)$, and total-variation closeness [F5] transfers it to the actual local law. [A1, F4, F5, F6, F11, given]

2.1 The target shift is exact: $\sqrt n\{\psi(P_{h/\sqrt n,s})-\mu\}=hP[(X-\mu)s]$. Subtracting it from step 1.4 gives $N(0,\sigma^2)$ for every fixed $h\ge0$, so the sample mean is regular on every allowed path. Its influence covariance is $\sigma^2=V_{\rm can}$ by step 1.2; [F8] shows it attains the regular asymptotically linear lower bound. This includes $\sigma^2=0$, when both covariance matrices vanish. [F8, step 1.2, step 1.4, given, algebra] ∎

