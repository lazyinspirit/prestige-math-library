---
id: thm-nadaraya-watson-finite-sample-bias
kind: theorem
title: Finite-sample mean bias of the Nadaraya–Watson estimator
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-identically-distributed-and-iid-random-variables
  - def-measure-with-density
  - def-moments-variance-and-covariance
  - def-nadaraya-watson-estimator
  - def-regression-target-version
  - thm-nadaraya-watson-population-bias
  - cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Whitney K. Newey, Nonparametric and Semiparametric Estimation, MIT course notes"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf"
    - title: "Ryan Tibshirani, Nonparametric Regression: Nearest Neighbors and Kernels"
      url: "https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/nn_kernels.pdf"
---

## Statement

Assume AC for the chosen regression version. Let $X_i$ be iid with density
$f$, and, conditional on the predictors, let the responses be independent
with the selected conditional laws $Q(X_i,dy)$, means $m(X_i)$ and variances
$\sigma^2(X_i)$. At a fixed interior point $x$, suppose $f(x)>0$, $f,m$ are
$C^2$ near $x$, and $\sigma^2$ is finite and continuous at $x$.
Let $K$ be finite-valued Borel, nonnegative, symmetric, positive on some
neighborhood of zero, with $\int K=1$, $0<\mu_2=\int u^2K<\infty$ and
$R(K)=\int K^2<\infty$. Assume either compact kernel support, or that
$f,m$ and their first two derivatives are bounded and continuous globally
and $\sigma^2$ is finite and bounded globally. A further localization alternative, including the Gaussian kernel, is that
$\mathbb E[Y^2]<\infty$, $K$ is bounded, and
$$\lim_{A\to\infty}\sup_{|u|\ge A}|u|^3K(u)=0.$$
Under this rapid-tail alternative only the stated local smoothness of
$f,m$ is needed; no global boundedness of $m$ or of its derivatives is assumed.
For $h_n\to0$ with
$nh_n^3\to\infty$, and any fixed finite fallback, the estimator in
[[def-nadaraya-watson-estimator]] is integrable for all sufficiently large
$n$ and
$$\mathbb E[\widehat m_{\mathrm{NW},h_n}(x)]-m(x)=\frac{h_n^2\mu_2}{2}\left(m''(x)+2m'(x)\frac{f'(x)}{f(x)}\right)+o(h_n^2).$$
The compact/global alternatives require no boundedness or continuity of $K$.

## Facts & Assumptions

**Given:** The explicit sampling, version, kernel, localization or global bounds, bandwidth, and fallback assumptions in the statement.

[F1] The chosen version represents the response mean. [[def-regression-target-version]].

[F2] The estimator is a normalized nonnegative weighted average or the fixed fallback. [[def-nadaraya-watson-estimator]].

[F3] The population bias expansion holds under precisely these smoothness and localization alternatives. [[thm-nadaraya-watson-population-bias]].

[F4] IID provides independence and a common law. [[def-identically-distributed-and-iid-random-variables]].

[F5] Density integration uses $f\,d\lambda$. [[def-measure-with-density]].

[F6] Under the rapid-tail alternative, conditional integration gives $\int\!\int y^2Q(t,dy)P_X(dt)=\mathbb E[Y^2]$. Thus $\int m^2f\le\mathbb E[Y^2]$ by conditional Cauchy–Schwarz and $\int|m|f\le\mathbb E|Y|$. [[cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable]]

## Proof

1.1 Write $h=h_n$, $Z_i=K((x-X_i)/h)$, $B_i=Z_i(m(X_i)-m(x))$, $T=n^{-1}\sum_iZ_i$, $Q=n^{-1}\sum_iB_i$, $a=\mathbb EZ_1$, and $b=\mathbb EB_1$. In the compact/global alternatives, $m$ and $\sigma^2$ are bounded on the active kernel region for small $h$; thus $\mathbb E[|Y_i|\mid X_i]\le |m(X_i)|+\sqrt{\sigma^2(X_i)}$ is uniformly bounded there. The weighted response average has integrable absolute value, since it is bounded by $\sum_i|Y_i|\mathbf1_{\{Z_i>0\}}$. Conditioning on the predictors gives mean bias $\mathbb E[Q/T;T>0]+(a_0-m(x))\mathbb P(T=0)$. Change of variables gives $a\asymp h$, and [F3] gives $c=b/a=m_h(x)-m(x)=O(h^2)$. Bounded $m$ on the active region yields $|B_i|\le C Z_i$, $\mathbb EZ_i^2=O(h)$ and $\mathbb E(B_i-cZ_i)^2=O(h)$, by $R(K)<\infty$ and the appropriate density bound. Under the rapid-tail alternative, [F6] gives $\int m^2f<\infty$ and $\mathbb E|Y|<\infty$, so integrability follows from the latter. The bounds $\mathbb EZ_i^2=O(h)$ and $\mathbb E(B_i-cZ_i)^2=O(h)$ still hold: inside a fixed smooth neighborhood $m,f$ are bounded; outside it $K((x-z)/h)^2\le C h^6/|x-z|^6$ and $\int m^2f\le\mathbb E Y^2<\infty$. For $R=Q-cT$, independence gives $\mathbb ER=0$, $\mathbb ER^2=O(h/n)$ and $\operatorname{Var}(T)=O(h/n)$. [given, F1, F2, F3, F4, F5, F6, algebra]

2.1 Positivity near zero implies there are $A,\kappa>0$ and a Borel set $J\subset[-A,A]$ of positive measure on which $K\ge\kappa$: the positive neighborhood is the countable union of its level sets $\{K\ge1/k\}$. Hence $p_h=\mathbb P((x-X_i)/h\in J)\asymp h$. The count $N$ is binomial. On $G=\{N\ge np_h/2\}$, $T\ge c_1h$. With $\gamma=1-e^{-1}-1/2>0$, Markov's bound applied to $e^{-N}$ gives $\mathbb P(G^c)\le e^{np_h/2}(1-p_h+p_he^{-1})^n\le e^{-\gamma np_h}\le e^{-c_2nh}$. In particular $T=0$ is contained in $G^c$. [given, F4, step 1.1, algebra]

3.1 On $G$, $R/T=R/a-R(T-a)/(aT)$. Since $\mathbb ER=0$, Cauchy–Schwarz bounds $|\mathbb E[R/a;G]|$ by $a^{-1}(\mathbb ER^2)^{1/2}\mathbb P(G^c)^{1/2}$. The second term has absolute expectation at most $C h^{-2}(\mathbb ER^2)^{1/2}\operatorname{Var}(T)^{1/2}=O((nh)^{-1})$. On $G^c\cap\{T>0\}$, $|R/T|\le C$ in the compact/global alternatives. In the rapid-tail alternative [F6] makes $m$ square-integrable, and the squared response-law mean is at most $\sum_i m(X_i)^2+a_0^2$. For each $i$, the event $G^c$ forces the count among the other $n-1$ observations below $np_h/2$; independence and the same binomial bound give $\mathbb E[m(X_i)^2;G^c]\le\mathbb E Y^2 e^{-c_3nh}$. Thus Cauchy–Schwarz bounds its first-moment bad-event contribution by $O(\sqrt n e^{-c_4nh})$. The fallback and the omitted $c\mathbb P(T=0)$ also contribute $O(\mathbb P(G^c))$. Consequently $\mathbb E\widehat m-m(x)=c+O((nh)^{-1})+O((1+\sqrt n+(nh)^{-1/2})e^{-c_5nh})$. Here $(nh)^{-1}=o(h^2)$ by $nh^3\to\infty$, and $nh\ge h^{-2}$ and $nh\ge n^{2/3}$ eventually make the exponential term $o(h^2)$. Substituting [F3] proves the claim. [given, F3, F6, step 1.1, step 2.1, algebra] ∎
