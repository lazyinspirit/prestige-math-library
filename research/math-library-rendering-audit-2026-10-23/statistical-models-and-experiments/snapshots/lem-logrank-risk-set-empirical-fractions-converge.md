---
id: lem-logrank-risk-set-empirical-fractions-converge
kind: lemma
title: "Uniform convergence of empirical risk-set fractions"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-identically-distributed-and-iid-random-variables
  - def-random-element-and-real-random-variable
  - def-empirical-process-and-rademacher-process
  - def-covering-packing-bracketing-number-and-metric-entropy
  - def-glivenko-cantelli-class
  - thm-gc-by-bracketing-entropy
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lu Tian, STAT331 Unit 13: Large Sample Theory for 2-Sample Tests, PDF pp. 1-12"
      url: "https://web.stanford.edu/~lutian/coursepdf/stat331-twosample.pdf"
    - title: "Michal Kulich, NMST531 Censored Data Analysis: Extended Course Notes, §5.4, PDF pp. 61-62"
      url: "https://www.karlin.mff.cuni.cz/~kulich/vyuka/cens/doc/cens_notes_ext_220102.pdf"
---

## Statement

For $g\in\{0,1\}$, let $X_{g1},X_{g2},\ldots$ be IID measurable
$[0,\infty)$-valued observed times with law $P_g$. For deterministic
$n_g\to\infty$, define
$$Y_{g,n}(t):=\sum_{i=1}^{n_g}1\{X_{gi}\ge t\},\qquad s_g(t):=P_g(X_{g1}\ge t),\qquad 0\le t\le\tau.$$
Then, for each group,
$$\sup_{0\le t\le\tau}\left| \frac{Y_{g,n}(t)}{n_g}-s_g(t)\right|\longrightarrow_P0.$$

## Facts & Assumptions

**Given:** A fixed finite horizon, an IID sequence of real observed times in each group, and the empirical threshold class
$\mathcal F=\{f_t:t\in[0,\tau]\}$ with $f_t(x)=1\{x\ge t\}$.

[F1] [[def-identically-distributed-and-iid-random-variables]]: within each group the observations have one common law and the full family is mutually independent.

[F2] [[def-random-element-and-real-random-variable]]: each observed time is a measurable real-valued map, so every threshold indicator $f_t(X_{gi})$ is a random variable.

[F3] [[def-empirical-process-and-rademacher-process]]: $P_gf=\int f\,dP_g$ and $P_{g,n}f=n_g^{-1}\sum_{i=1}^{n_g}f(X_{gi})$.

[F4] [[def-glivenko-cantelli-class]]: a nonempty pointwise-measurable class with an integrable envelope is $P_g$-Glivenko--Cantelli when its uniform empirical deviation tends to zero in probability.

[F5] [[def-covering-packing-bracketing-number-and-metric-entropy]]: an $L^1(P_g)$ bracket has measurable endpoints $\ell\le u$, contains every function in its class between those endpoints, and has width $P_g(u-\ell)$.

[F6] [[thm-gc-by-bracketing-entropy]]: for IID observations, a nonempty pointwise-measurable function class with an integrable envelope and finite $L^1(P_g)$ bracketing number at every positive scale has uniform empirical deviation tending to zero in probability. The theorem's separate almost-sure branch assumes Countable Choice; that branch is not used here.

## Proof

1.1 Each $f_t$ is measurable. The subclass with rational thresholds in $[0,\tau]$ is countable and pointwise dense: for $t>0$ choose rationals $q_k\uparrow t$ with $0\le q_k<t$, while for $t=0$ use the member $f_0$ itself. If $x\ge t$, every $f_{q_k}(x)=1$; if $x<t$, then $q_k>x$ eventually and $f_{q_k}(x)=0$. Hence $f_{q_k}(x)\to f_t(x)$ for every $x$. The envelope is the constant function $1$, which is measurable and has $P_g$-integral $1$. [F1, F2, F4, given]

1.2 Put $q(t):=P_g(X_{g1}\ge t)$. For $s<t$, the indicators are nested and $P_g|f_s-f_t|=P_g(s\le X_{g1}<t)=q(s)-q(t)$. The function $q$ is nonincreasing with range in $[0,1]$. Fix $\epsilon>0$ and set $\delta=\epsilon/3$. Partition $[0,1]$ into finitely many intervals of length at most $\delta$ and group thresholds whose $q$-values lie in the same interval. Each threshold class in one group is nested; its pointwise infimum and supremum are measurable threshold indicators (possibly their one-sided endpoint limits), and they bracket the group. The $L^1(P_g)$ width is the supremum of $P_g|f_s-f_t|$ over thresholds in that group, at most $\delta$, by the displayed identity. Thus at most $\lceil1/\delta\rceil+1$ brackets cover $\mathcal F$, so $N_{[]}(\epsilon,\mathcal F,L^1(P_g))<\infty$. This also handles atoms: a jump in $q$ larger than a bin width places the two threshold sides in different bins, while a smaller jump contributes at most the bin's total $q$-width. [F5, given]

2.1 Steps 1.1 and 1.2 verify pointwise measurability, the integrable envelope, and every finite-bracketing hypothesis in [F6]. Its convergence-in-probability conclusion gives $\sup_{t\in[0,\tau]}|P_{g,n}f_t-P_gf_t|\to_P0$. Since $P_{g,n}f_t=Y_{g,n}(t)/n_g$ and $P_gf_t=s_g(t)$ by their definitions, this is the asserted uniform risk-set convergence. No Countable Choice or strong Glivenko--Cantelli conclusion is used. [F3, F4, F6, step 1.1, step 1.2] ∎