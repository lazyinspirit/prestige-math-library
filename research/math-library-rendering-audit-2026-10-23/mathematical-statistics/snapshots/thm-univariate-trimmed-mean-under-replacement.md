---
id: thm-univariate-trimmed-mean-under-replacement
kind: theorem
title: "Univariate trimmed-mean bound under sample replacement"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps: [alg-univariate-trimmed-mean, lem-univariate-trimmed-mean-total-and-measurable, def-adversarial-sample-replacement, thm-bernstein-independent-sums, def-random-element-and-real-random-variable, def-identically-distributed-and-iid-random-variables, def-bernoulli-and-binomial-random-variables, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-moments-variance-and-covariance, cor-markov-inequality-for-random-variables, def-natural-logarithm, thm-logarithm-derivative-and-integral, def-real-exponential-function-and-e, thm-natural-logarithm-laws, lem-absolutely-continuous-upper-quantile-exact-tail-mass, def-countable-choice]
axiom_use: Countable Choice is used only through the upper-quantile lemma's singleton-null dependency.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gábor Lugosi and Shahar Mendelson, Robust Multivariate Mean Estimation: The Optimality of Trimmed Mean, Theorem 1 and §2.1"
      url: "https://arxiv.org/pdf/1907.11391"
      locator: "PDF pp. 8–13; full theorem, estimator, and proof."
    - title: "Gábor Lugosi, Mean Estimation in High Dimension, §2"
      url: "https://ems.press/content/book-chapter-files/33347?nt=1"
      locator: "PDF pp. 2–3; independent trimmed-mean treatment and finite-variance context."
---

## Statement

Assume Countable Choice. Let $X$ be an absolutely continuous real random variable with mean $\mu$ and finite positive variance $\sigma^2=E[(X-\mu)^2]$ ([[def-moments-variance-and-covariance]]). Let $X_1,\ldots,X_N,Y_1,\ldots,Y_N$ be $2N$ iid clean copies of $X$, and let $(\widetilde X_1,\ldots,\widetilde X_N,\widetilde Y_1,\ldots,\widetilde Y_N)$ be a sample-replacement version with at most $\lfloor2\eta N\rfloor$ changed coordinates in total ([[def-adversarial-sample-replacement]]). Let $0\le\eta$, $0<\delta<1$, $\delta\ge e^{-N/4}$, and
$$
\varepsilon=8\eta+\frac{12\log(4/\delta)}{N}\in(0,1/4].
$$
Apply [[alg-univariate-trimmed-mean]] with these parameters. For the centered variable $Z=X-\mu$, define, for $0<u<1$,
$$
Q_u(Z)=\sup\{t\in\mathbb R:P(Z\ge t)\ge1-u\},
$$
and, for $0<u\le1$, define
$$
E(u,X)=\max\left\{E\bigl[|Z|\mathbf1_{\{Z\le Q_{u/2}(Z)\}}\bigr],\ E\bigl[|Z|\mathbf1_{\{Z\ge Q_{1-u/2}(Z)\}}\bigr]\right\}.
$$
Here $E$ is the raw centered-tail functional, distinct from the excess-tail lower-bound functional. The claims are
$$
P\!\left(|\widehat\mu-\mu|\le3E(4\varepsilon,X)+2\sigma\sqrt{\frac{\log(4/\delta)}{N}}\right)\ge1-\delta
$$
and
$$
P\!\left(|\widehat\mu-\mu|\le10\sqrt{\varepsilon}\,\sigma\right)\ge1-4e^{-\varepsilon N/12}.
$$

## Facts & Assumptions

**Given:** Countable Choice, the absolutely continuous centered clean variable $Z=X-\mu$, the iid halves and replacement budget, and the displayed parameter domain.

[F1] Apply [[lem-absolutely-continuous-upper-quantile-exact-tail-mass]] to the absolutely continuous variable $X$. The threshold set defining $Q_p(Z)$ is the translate by $-\mu$ of the one defining $Q_p(X)$, so $q_p=Q_p(Z)=Q_p(X)-\mu$ and $P(Z\le q_p)=p$, $P(Z\ge q_p)=1-p$ for $0<p<1$. Countable Choice is retained from that supplier ([[def-countable-choice]]).

[F2] [[def-adversarial-sample-replacement]] allows at most $M=\lfloor2\eta N\rfloor$ changes in either half. [[alg-univariate-trimmed-mean]] uses nearest-rank quantiles and clipping; [[lem-univariate-trimmed-mean-total-and-measurable]] makes the output measurable and total.

[F3] The proof of [[thm-bernstein-independent-sums]], step 2.1, establishes the one-sided bound $P(\sum_iV_i\ge u)\le\exp[-u^2/(2(v+bu/3))]$ for centered independent summands with $|V_i|\le b$ and total variance $v$. In particular, a centered average of variance at most $\sigma^2/N$ has upper or lower deviation at most $\sqrt{2\sigma^2 a/N}+2ba/(3N)$ outside probability $e^{-a}$, by substituting this threshold into the displayed bound. The zero-variance case is deterministic.

[F4] Iid event indicators have the binomial distribution ([[def-identically-distributed-and-iid-random-variables]], [[def-bernoulli-and-binomial-random-variables]]); Markov's inequality is [[cor-markov-inequality-for-random-variables]]. Expectations and variances have their usual integral definitions ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[def-moments-variance-and-covariance]]).

## Proof

**Given:** The objects in the Statement. Write $Z=X-\mu$, $\ell=\log(4/\delta)$, $t=\ell/N$, and $T(u)=E(u,X)$; step 1.1 verifies that centering the data shifts the estimator output by $-\mu$.

1.1 Shifting every clean and observed coordinate by $-\mu$ shifts both order-statistic cutoffs, every clipped value, and the output by $-\mu$, so it suffices to analyze the centered data $Z$. By [F1], for each $p\in(0,1)$ the quantile $q_p=Q_p(Z)$ has $P(Z\le q_p)=p$ and $P(Z\ge q_p)=1-p$. Thus $|q_p|\le\sigma/\sqrt{\min(p,1-p)}$: if $q_p\ge0$, use $\sigma^2\ge q_p^2P(Z\ge q_p)$; if $q_p<0$, use $\sigma^2\ge q_p^2P(Z\le q_p)$. For any event $A$, $E[|Z|\mathbf1_A]\le\sigma\sqrt{P(A)}$: when $P(A)>0$, this follows by expanding $0\le E[(|Z|/\sigma-\mathbf1_A/\sqrt{P(A)})^2]$, and the zero-probability case is immediate. Also $T$ is nondecreasing, since its tail sets expand with $u$, and $T(4\varepsilon)\le\sigma\sqrt{2\varepsilon}$ by [F1] and this inequality. For a lower clipping endpoint $a=q_p$ with $p\le1/2$, put $L=E[|Z|\mathbf1_{\{Z\le a\}}]$. If $a\le0$, $E[(a-Z)\mathbf1_{\{Z\le a\}}]\le L$. If $a>0$, centering implies $a(1-p)\le E[Z\mathbf1_{\{Z>a\}}]=-E[Z\mathbf1_{\{Z\le a\}}]\le L$; hence $ap\le L$ and the clipping excess is at most $2L$. The symmetric upper-endpoint argument is identical. For a deterministic clip $W=\phi_{a,b}(Z)$, $E[(W-c)^2]=\operatorname{Var}W+(EW-c)^2$ with $c=\phi_{a,b}(0)$, and $|W-c|\le|Z|$ because clipping is 1-Lipschitz. Thus $\operatorname{Var}W\le\sigma^2$; also $|W-EW|\le b-a$ since both values lie in $[a,b]$. [F1, F4, given, algebra]

1.2 First use inner endpoints $q_{2\varepsilon},q_{1-2\varepsilon}$ and outer endpoints $q_{\varepsilon/2},q_{1-\varepsilon/2}$. Require each of the two inner clean $Y$ tail counts to exceed $N(\varepsilon+2\eta)$ and each outer count to be less than $N(\varepsilon-2\eta)$. Put $a=\eta/t\ge0$. Since $\varepsilon=(8a+12)t$, [F3] for the binomial counts bounds each inner failure by $\exp[-36(a+2)^2\ell/(36a+56)]\le e^{-18\ell/7}$, and each outer failure by $\exp[-(2a+6)^2\ell/((28/3)a+16)]\le e^{-9\ell/4}$. The two rational functions are increasing for $a\ge0$, as direct differentiation shows, so their minima are their values at zero. Thus all four count conditions hold outside probability $4e^{-9\ell/4}\le\delta/2$, since $\ell>\log4$. After $M\le2\eta N$ changes the inner counts are still strictly greater than $\varepsilon N$ and outer counts strictly less than $\varepsilon N$. Integer counts and the ranks $r_-=\lceil\varepsilon N\rceil$, $r_+=N-\lfloor\varepsilon N\rfloor$ therefore give $q_{\varepsilon/2}\le\alpha-\mu\le q_{2\varepsilon}$ and $q_{1-2\varepsilon}\le\beta-\mu\le q_{1-\varepsilon/2}$. For example fewer than $\varepsilon N$ values below an outer lower endpoint means at most $r_--1$ such values, while more than $\varepsilon N$ values above an inner upper endpoint means at least $\lfloor\varepsilon N\rfloor+1$ such values. These strict inequalities cover noninteger ranks and the integral boundary without a rounding loss. [F1, F2, F3, F4, algebra]

2.1 On the count event, monotonicity of clipping endpoints bounds the clean first-half clipped average above by the average of $W^+=\phi_{q_{2\varepsilon},q_{1-\varepsilon/2}}(Z)$ and below by the average of $W^-=\phi_{q_{\varepsilon/2},q_{1-2\varepsilon}}(Z)$. Step 1.1 bounds $EW^+\le2T(4\varepsilon)$ and $EW^-\ge-2T(4\varepsilon)$, their variances by $\sigma^2$, and their interval widths by $2\sqrt2\sigma/\sqrt\varepsilon$. These comparison variables have fixed endpoints, so their deviation events are functions of the clean $X$ half and do not rely on the corrupted cutoffs being independent of it. Apply [F3] at $a=\ell$ separately to the two comparisons. As $t/\varepsilon\le1/12$, each deviation is at most $\sigma\sqrt t[\sqrt2+(4\sqrt2/3)\sqrt{t/\varepsilon}]\le2\sigma\sqrt t$. Their total exceptional probability is $2e^{-\ell}=\delta/2$. [F2, F3, step 1.1, step 1.2, algebra]

3.1 Write $A=q_{\varepsilon/2}$, $B=q_{1-\varepsilon/2}$. Replacing at most $M$ first-half points changes the clipped average by at most $2\eta(B-A)\le(\varepsilon/4)(B-A)$. If $A\le0\le B$, $(\varepsilon/4)(B-A)\le\max\{(\varepsilon/2)|A|,(\varepsilon/2)|B|\}\le T(\varepsilon)$. If both endpoints are positive, use $B-A\le B$ and the same upper-tail bound; if both are negative, use $B-A\le|A|$ and its lower-tail bound. By monotonicity $T(\varepsilon)\le T(4\varepsilon)$. Combining this with step 2.1 and the two exceptional probabilities proves the first displayed bound with its exact constants $3$ and $2$, uniformly over every admissible sample-dependent replacement. [F1, F2, step 1.1, step 1.2, step 2.1, algebra]

4.1 For the second bound put $s=\varepsilon N/12\ge\ell>\log4$ and keep the same inner quantiles but use wider outer endpoints $q_{\varepsilon/4},q_{1-\varepsilon/4}$. Use the same count thresholds $N(\varepsilon\pm2\eta)$. Since $2\eta\le\varepsilon/4$, the inner downward gap is at least $3\varepsilon/4$ from mean $2\varepsilon$, and the outer upward gap is at least $\varepsilon/2$ from mean $\varepsilon/4$. The function $u^2/(2(p+u/3))$ increases for $u>0$, so [F3] bounds each inner failure by $e^{-\varepsilon N/8}=e^{-3s/2}$ and each outer failure by $e^{-3\varepsilon N/10}=e^{-18s/5}$. The same strict rank argument of step 1.2 brackets the corrupted cutoffs. For the fixed comparison clips, step 1.1 gives directional bias at most $2T(4\varepsilon)\le2\sqrt2\sigma\sqrt\varepsilon$, variance at most $\sigma^2$ and width at most $4\sigma/\sqrt\varepsilon$. Bernstein at $a=s$ therefore bounds each directional clean-average noise by $(1/\sqrt6+2/9)\sigma\sqrt\varepsilon$. The replacement shift is at most $2\eta\cdot4\sigma/\sqrt\varepsilon\le\sigma\sqrt\varepsilon$. The total error is consequently at most $(2\sqrt2+1/\sqrt6+2/9+1)\sigma\sqrt\varepsilon<10\sigma\sqrt\varepsilon$. Its exceptional probability is at most $2e^{-3s/2}+2e^{-18s/5}+2e^{-s}\le4e^{-s}$, because the first two terms sum to at most $4e^{-3s/2}\le2e^{-s}$. This proves the second assertion. [F1, F2, F3, step 1.1, step 1.2, step 2.1, step 3.1, algebra] ∎

## Remarks

The source distinguishes an excess-tail lower-bound functional from the raw-tail upper-bound functional used here. The former transcription into this theorem was false; [[cex-excess-tail-functional-does-not-bound-trimmed-mean]] gives a continuous counterexample. [[cex-univariate-clean-quantile-count-exponent-is-false]] refutes a different source proof step. The exact-count and wider-outer-quantile arguments above avoid that step while preserving both estimator constants, confidence levels and the procedure. No atomic-law extension is claimed.
