---
id: thm-uniform-subsampling-coverage-under-root-law-control
kind: theorem
title: Uniform subsampling coverage under root-law control
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-m-out-of-n-bootstrap-and-subsampling
  - def-identically-distributed-and-iid-random-variables
  - def-cumulative-distribution-function-of-a-random-variable
  - def-confidence-set-and-coverage
  - lem-uniform-cdf-order-and-quantile-coverage
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "J. P. Romano and A. M. Shaikh, On the Uniform Asymptotic Validity of Subsampling and the Bootstrap, §2.1, Theorems 2.1–2.2, Appendix A.1"
      url: "https://home.uchicago.edu/amshaikh/webfiles/uniformity.pdf"
    - title: "P. J. Bickel, F. Götze, and W. R. van Zwet, Resampling Fewer Than n Observations: Gains, Losses, and Remedies for Losses, §3"
      url: "https://www3.stat.sinica.edu.tw/statistica/oldpdf/a7n11.pdf"
---

## Statement

Let $\mathcal P$ be a nonempty class of IID laws on a measurable observation space. For $P\in\mathcal P$, let $\theta(P)\in\mathbb R$ be a target, let $\widehat\theta_k$ be a measurable estimator at every sample size $k$, and let $a_k>0$ be deterministic. Put
$$R_{n,P}=a_n(\widehat\theta_n-\theta(P)),\qquad J_{n,P}(x)=P^{\otimes n}(R_{n,P}\le x),$$
and define $H_{m,P}$ as the CDF of the actual size-$m$ root $a_m(\widehat\theta_m-\theta(P))$. Let $m=m_n$ be integers with $1\le m_n<n$ for all sufficiently large $n$, $m_n\to\infty$, and $m_n/n\to0$; for centered resampling roots, assume $a_m/a_n\to0$. Let $\widehat H_{m,n}$ be the conditional CDF of either $a_m(\widehat\theta^*_{m,n}-\widehat\theta_n)$ for the m-out-of-n bootstrap or $a_m(\widehat\theta_{I,m}-\widehat\theta_n)$ for uniform subsampling without replacement, as defined in [[def-m-out-of-n-bootstrap-and-subsampling]], with each evaluation measurable and almost surely right-continuous sample paths.

Suppose the following exact root-law and feasible-root conditions hold:
$$\limsup_{n\to\infty}\sup_{P\in\mathcal P}\sup_x\{H_{m,P}(x)-J_{n,P}(x)\}\le0,\qquad \limsup_{n\to\infty}\sup_{P\in\mathcal P}\sup_x\{J_{n,P}(x)-H_{m,P}(x)\}\le0,$$
and for every $\eta>0$,
$$\sup_{P\in\mathcal P}P^{\otimes n}\!\left(\sup_x|\widehat H_{m,n}(x)-H_{m,P}(x)|>\eta\right)\longrightarrow0.$$
For $0\le\alpha_1,\alpha_2$ with $\alpha_1+\alpha_2<1$, define
$$I_n=\left[\widehat\theta_n-\frac{q_{\widehat H_{m,n}}(1-\alpha_2)}{a_n},\ \widehat\theta_n-\frac{q_{\widehat H_{m,n}}(\alpha_1)}{a_n}\right].$$
Assume the interval endpoints are measurable functions of the data and set $\mathcal C_n=\{Q\in\mathcal P:\theta(Q)\in I_n\}$. Then
$$\liminf_{n\to\infty}\inf_{P\in\mathcal P}P^{\otimes n}\{P\in\mathcal C_n\}\ge1-\alpha_1-\alpha_2.$$
If only the first one-sided root-law comparison is assumed, together with feasible-root control, the upper root quantile gives the corresponding one-sided lower confidence bound; if only the second root-law comparison is assumed, again with feasible-root control, the lower root quantile gives the one-sided upper confidence bound. The m-regime alone does not imply any of these CDF conditions. Weak convergence of root laws alone is not a substitute for the stated uniform comparisons and feasible-root control.

## Facts & Assumptions

**Given:** The IID class, target, estimator sequence, normalizations, actual m-roots, and the two displayed CDF comparisons and feasible-root condition.

[F1] [[def-m-out-of-n-bootstrap-and-subsampling]]: The bootstrap and subsampling roots at size $m$ use $a_m(\widehat\theta_{m}-\widehat\theta_n)$, with replacement or without replacement as separately declared.

[F2] [[def-identically-distributed-and-iid-random-variables]]: The sampling units have one common law and are mutually independent.

[F3] [[def-confidence-set-and-coverage]]: Coverage is the probability, under each fixed parameter law, that the confidence procedure contains the true target; membership sections must be measurable.

[F4] [[lem-uniform-cdf-order-and-quantile-coverage]]: Uniform one-sided CDF error bounds control the corresponding quantile tail probabilities, and a two-sided uniform CDF error controls the sum of the two tail errors.

[F5] [[def-cumulative-distribution-function-of-a-random-variable]]: The CDF of a real root $R$ is $x\mapsto P(R\le x)$ under its sampling law.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 By [F2], under each fixed $P$ the IID observations have joint sampling law $P^{\otimes n}$. By [F5], $J_{n,P}$ is the CDF of the actual root $R_{n,P}$ under that law. Fix $\eta>0$. The two root-law limsup conditions imply that, for all sufficiently large $n$ and every $P\in\mathcal P$, both one-sided differences between $H_{m,P}$ and $J_{n,P}$ are at most $\eta/2$. The feasible-root condition gives numbers $\delta_n\to0$ such that, uniformly in $P$, the event $E_{n,P}:=\{\sup_x|\widehat H_{m,n}(x)-H_{m,P}(x)|\le\eta/2\}$ has probability at least $1-\delta_n$. On this event, the triangle inequality gives $\sup_x|\widehat H_{m,n}(x)-J_{n,P}(x)|\le\eta$. [given, F2, F5, algebra]

1.2 To see that neither root-law comparison follows from the m-regime, take $\mathcal P=\{\delta_0\}$, $\theta(P)=0$, $a_k=k$, and the measurable constant statistic $T_k=\mathbf1_{\{k\text{ is odd}\}}/k$. Let $m_n=\lfloor\sqrt n\rfloor$. Then $a_{m_n}/a_n=m_n/n\to0$, $J_{n,P}=\delta_{\mathbf1_{\{n\text{ is odd}\}}}$, and $H_{m_n,P}=\delta_{\mathbf1_{\{m_n\text{ is odd}\}}}$. For every sufficiently large even $m$, the block $m^2\le n<(m+1)^2$ contains odd $n$, giving $H_{m_n,P}=\delta_0$, $J_{n,P}=\delta_1$, and $\sup_x(H_{m_n,P}(x)-J_{n,P}(x))=1$. For every sufficiently large odd $m$, the same block contains even $n$, giving $H_{m_n,P}=\delta_1$, $J_{n,P}=\delta_0$, and $\sup_x(J_{n,P}(x)-H_{m_n,P}(x))=1$. Each root-law comparison can therefore fail under the stated m-regime, even with $a_m/a_n\to0$. [F1, F2, given, construct, algebra]

2.1 Apply [F4], part 3, with $F=J_{n,P}$, $\widehat G=\widehat H_{m,n}$, CDF error $2\eta$, and exceptional-event probability $\delta_n$. Step 1.1 supplies the event on which the CDF error is at most $\eta$, so the lemma's pointwise tail inclusions bound the joint miss event without assuming independence of $R_{n,P}$ and that event. The root interval $[q_{\widehat H_{m,n}}(\alpha_1),q_{\widehat H_{m,n}}(1-\alpha_2)]$ therefore misses $R_{n,P}$ with probability at most $\alpha_1+\alpha_2+2\eta+\delta_n$, uniformly in $P$. [F3, F4, step 1.1, given]

2.2 Suppose only the first root-law limsup condition and the feasible-root condition hold. For any $\eta>0$, all sufficiently large $n$ satisfy $H_{m,P}(x)-J_{n,P}(x)\le\eta/2$ uniformly in $P,x$, and on an event $E_{n,P}$ of probability at least $1-\delta_n$ we have $\widehat H_{m,n}(x)-H_{m,P}(x)\le\eta/2$ for all $x$. Hence on $E_{n,P}$, $\widehat H_{m,n}-J_{n,P}\le\eta$. If $\alpha_2+\eta<1$, quantile ordering in [F4] gives $q_{J_{n,P}}(1-\alpha_2-\eta)\le q_{\widehat H_{m,n}}(1-\alpha_2)$. Thus the joint failure event $\{R_{n,P}>q_{\widehat H_{m,n}}(1-\alpha_2)\}\cap E_{n,P}$ is contained in $\{R_{n,P}>q_{J_{n,P}}(1-\alpha_2-\eta)\}$, whose probability is at most $\alpha_2+\eta$ by [F4]; adding $P(E_{n,P}^c)\le\delta_n$ bounds total failure. Letting $n\to\infty$ and then $\eta\downarrow0$ proves uniform asymptotic coverage at least $1-\alpha_2$ for the lower confidence bound; if $\alpha_2+\eta\ge1$, the intermediate lower bound is trivial. For the second assertion, if only the second root-law condition holds, then on the same event $J_{n,P}-\widehat H_{m,n}\le\eta$. When $\alpha_1+\eta<1$, [F4] gives $q_{\widehat H_{m,n}}(\alpha_1)\le q_{J_{n,P}}(\alpha_1+\eta)$. The joint failure event $\{R_{n,P}<q_{\widehat H_{m,n}}(\alpha_1)\}\cap E_{n,P}$ is contained in $\{R_{n,P}<q_{J_{n,P}}(\alpha_1+\eta)\}$, whose probability is at most $\alpha_1+\eta$ by [F4]; adding the complement probability and letting $\eta\downarrow0$ proves uniform asymptotic coverage at least $1-\alpha_1$ for the upper confidence bound. If $\alpha_1+\eta\ge1$, the intermediate lower bound is trivial. [F4, step 1.1, given, algebra]

3.1 By the definition of $\mathcal C_n$, $P\in\mathcal C_n$ exactly when $\theta(P)\in I_n$. Since $a_n>0$, this is algebraically equivalent to $q_{\widehat H}(\alpha_1)\le a_n(\widehat\theta_n-\theta(P))\le q_{\widehat H}(1-\alpha_2)$. It is the coverage event in [F3]. Thus its uniform lower bound is $1-\alpha_1-\alpha_2-2\eta-\delta_n$. Take the liminf in $n$, then let $\eta\downarrow0$, to obtain the stated inequality. The proof uses no independence between the two tail events. [F1, F3, step 2.1, algebra]

4.1 To see that feasible-root control can fail even when both root-law comparisons hold exactly, take $\mathcal P=\{P\}$ with $P=\delta_0$, $\theta(P)=0$, $T_k(z_1,\ldots,z_k)=1/k$, and $a_k=k$, again with $m_n=\lfloor\sqrt n\rfloor$. For all $n\ge4$, $1\le m_n<n$, $m_n\to\infty$, $m_n/n\to0$, and $a_{m_n}/a_n=m_n/n\to0$. The actual size-$n$ and size-$m_n$ roots are both identically $1$, so $J_{n,P}=H_{m_n,P}$. For either resampling method, every resampled statistic is $1/m_n$, hence $\widehat H_{m,n}=\delta_{1-m_n/n}$. Its sup-CDF distance from $H_{m_n,P}=\delta_1$ is $1$, so feasible-root control fails. With $\alpha_1=\alpha_2=1/4$, both quantiles equal $1-m_n/n$ and $I_n=\{m_n/n^2\}$, which excludes $\theta(P)=0$; coverage is zero for every $n\ge4$. [F1, F3, F4, given, algebra] ∎
