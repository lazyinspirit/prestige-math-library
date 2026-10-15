---
id: lem-logrank-risk-fraction-converges
kind: lemma
title: "Uniform convergence of the risk-set treatment fraction"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-logrank-risk-set-score-and-test
  - lem-logrank-risk-set-empirical-fractions-converge
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Lu Tian, STAT331 Unit 13: Large Sample Theory for 2-Sample Tests, PDF pp. 1-6"
      url: "https://web.stanford.edu/~lutian/coursepdf/stat331-twosample.pdf"
    - title: "Michal Kulich, NMST531 Censored Data Analysis: Extended Course Notes, §5.4, PDF pp. 61-62"
      url: "https://www.karlin.mff.cuni.cz/~kulich/vyuka/cens/doc/cens_notes_ext_220102.pdf"
---

## Statement

For each $g\in\{0,1\}$, let $(U_{gi})_{i\ge1}$ be IID measurable
$[0,\infty)$-valued observed times with law $P_g$; independence between
the two groups is not required. Along a sequence of deterministic positive
sample sizes, let $n=n_0+n_1\to\infty$ and
$n_g/n\to\rho_g\in(0,1)$, where $\rho_0+\rho_1=1$. Set
$s_g(t):=P_g(U_{g1}\ge t)$, $y_g(t)=\rho_gs_g(t)$, and
$y(t)=y_0(t)+y_1(t)$. Assume $\inf_{0\le t\le\tau}y(t)>0$. Write
$$Y_{g,n}(t)=\sum_{i=1}^{n_g}1\{U_{gi}\ge t\},\qquad p_n(t)=\begin{cases} Y_{1,n}(t)/(Y_{0,n}(t)+Y_{1,n}(t)),&Y_{0,n}(t)+Y_{1,n}(t)>0,\\ 0,&Y_{0,n}(t)+Y_{1,n}(t)=0. \end{cases}$$
Then, for $g=0,1$,
$$\sup_{t\le\tau}\left|\frac{Y_{g,n}(t)}n-y_g(t)\right|\longrightarrow_P0,$$
and
$$\sup_{0\le t\le\tau}\left|p_n(t)-\bar z(t)\right|\longrightarrow_P0, \qquad \bar z(t):=\frac{y_1(t)}{y(t)}.$$

## Facts & Assumptions

**Given:** The within-group IID observed-time sequences, the deterministic allocation limits and positive pooled support in the Statement, and the groupwise uniform empirical-risk convergence.

[F1] [[lem-logrank-risk-set-empirical-fractions-converge]]: for each group, $\sup_{t\le\tau}|Y_{g,n}(t)/n_g-s_g(t)|\to_P0$.

[F2] [[def-logrank-risk-set-score-and-test]]: $Y_{g,n}(t)$ counts subjects with observed time at least $t$; risk at event time is counted immediately before failures at that time.

[A1] The pooled limiting risk fraction obeys $\inf_{t\le\tau}y(t)=m>0$.

## Proof

1.1 By [F1], for each $g$, $ \sup_{t\le\tau}\left|\frac{Y_{g,n}(t)}n-y_g(t)\right| \le \left|\frac{n_g}n-\rho_g\right| \sup_{t\le\tau}\frac{Y_{g,n}(t)}{n_g} +\rho_g\sup_{t\le\tau}\left|\frac{Y_{g,n}(t)}{n_g}-s_g(t)\right| \longrightarrow_P0. $ The first term tends to zero deterministically, and the empirical fraction in the second term is at most one. Hence the pooled fraction $Y_n(t)/n$ converges uniformly in probability to $y(t)$ and the group-1 fraction $Y_{1,n}(t)/n$ converges uniformly to $y_1(t)$. [F1, given, algebra]

2.1 On the event $\inf_{t\le\tau}Y_n(t)/n\ge m/2$, whose probability tends to one by [A1] and step 1.1, the denominator is positive for all $t\le\tau$. There, $ \left|\frac{Y_{1,n}(t)}{Y_n(t)}-\frac{y_1(t)}{y(t)}\right| \le \frac{2}{m}\left|\frac{Y_{1,n}(t)}n-y_1(t)\right| +\frac{2}{m}\left|\frac{Y_n(t)}n-y(t)\right|, $ because $0\le y_1(t)/y(t)\le1$. Taking suprema and using step 1.1 proves convergence to zero in probability. The convention $p_n=0$ on an empty risk set is immaterial on this event. [F2, A1, step 1.1, algebra] ∎