---
id: cex-excess-tail-functional-does-not-bound-trimmed-mean
kind: counterexample
title: "The excess-tail functional cannot upper-bound the trimmed mean"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [alg-univariate-trimmed-mean, lem-absolutely-continuous-upper-quantile-exact-tail-mass, def-countable-choice, cor-chebyshev-inequality-for-random-variables]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Lugosi and Mendelson, Robust Multivariate Mean Estimation: The Optimality of Trimmed Mean, pp. 6-23"
      url: "https://arxiv.org/pdf/1907.11391"
---

## Statement refuted

Replacing the raw centered-tail functional in the univariate trimmed-mean bound by
$$E_{\mathrm{exc}}(u)=\max\{E[|Z-Q_{u/2}(Z)|\mathbf1_{\{Z\le Q_{u/2}(Z)\}}],E[|Z-Q_{1-u/2}(Z)|\mathbf1_{\{Z\ge Q_{1-u/2}(Z)\}}]\}$$
would falsely assert $P(|\widehat\mu-\mu|\le3E_{\mathrm{exc}}(4\varepsilon)+2\sigma\sqrt{\log(4/\delta)/N})\ge1-\delta$ for [[alg-univariate-trimmed-mean]]. This fails for a bounded absolutely continuous law.

## Facts & Assumptions

**Given:** $N=10^6$, $\eta=1/100$, $\delta=1/10$, $w=1/1000$, and $X=S+U$, where $S$ is a uniform sign and $U$ is independent uniform on $[-w,w]$; clean coordinates are iid copies. Assume Countable Choice as in the quantile supplier.

[F1] [[alg-univariate-trimmed-mean]] sorts the second half at levels $\varepsilon$ and $1-\varepsilon$ and averages the clipped first half.

[F2] [[lem-absolutely-continuous-upper-quantile-exact-tail-mass]] uses exact continuous quantiles, with its Countable Choice hypothesis ([[def-countable-choice]]).

[F3] [[cor-chebyshev-inequality-for-random-variables]] bounds a centered random variable's tail by its variance divided by the squared threshold.

## Counterexample

**Given:** The displayed parameters and symmetric two-interval clean law. Replace the first $20000$ negative first-half observations by $+1$, or all negatives if fewer; do not change the second half.

1.1 This law is absolutely continuous with density $1/(4w)$ on each interval $[-1-w,-1+w]$ and $[1-w,1+w]$, has mean zero and variance $\sigma^2=1+w^2/3$. The replacement rule is a measurable finite-coordinate rule and makes at most $20000=2\eta N$ changes. Put $\varepsilon=.08+12\log40/10^6$, so $.08<\varepsilon<.081<1/4$, and $\delta\ge e^{-N/4}$. At lower tail mass $2\varepsilon$ the quantile is $-1-w+8w\varepsilon$. Integration over the lower interval gives $E[(Q_{2\varepsilon}-X)\mathbf1_{\{X\le Q_{2\varepsilon}\}}]=(8w\varepsilon)^2/(8w)=8w\varepsilon^2$; symmetry gives the same upper-tail excess. Hence $3E_{\mathrm{exc}}(4\varepsilon)+2\sigma\sqrt{\log40/10^6}<.0042$, using $\log40<4$, $\varepsilon<.081$ and $\sigma^2<1.000001$. [F1, F2, given, algebra]

2.1 Let $A$ be the event that the clean first-half sign average has absolute value at most $.01$, and let $B$ be the event that the second-half negative-sign count lies between $N/4$ and $3N/4$. The sign average has variance $1/N$, so [F3] gives $P(A^c)\le.01$. The second-half count has variance $N/4$, so $P(B^c)\le4/N$. On $A$ there are at least $.495N$ negative first-half signs, so the replacement changes exactly $20000$ of them. The resulting sign average is at least $-.01+.04=.03$. On $B$, the ranks in [F1] put $\alpha$ in the negative interval and $\beta$ in the positive interval, since $\varepsilon<.081<1/4$. Every clipped value is at least its altered sign minus $w$: a negative value is at least $-1-w$, and a positive value, including a replacement $+1$, clips to at least $1-w$. Therefore $\widehat\mu\ge.03-w=.029$ on $A\cap B$, whose probability is at least $.989996$. This exceeds the proposed threshold $.0042$ with probability greater than $\delta=.1$, disproving the asserted coverage. [F1, F3, step 1.1, algebra] ∎

