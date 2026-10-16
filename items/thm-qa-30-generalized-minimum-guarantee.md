---
id: thm-qa-30-generalized-minimum-guarantee
kind: theorem
title: Quantile minimum and coherent-score nondomination guarantee
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
page: quantum-optimization-sdp-and-variational-algorithms
deps:
  - alg-qa-30-capped-generalized-minimum
  - lem-qa-30-capamplify-state-output-bound
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - thm-exponential-is-strictly-increasing
  - def-natural-logarithm
  - thm-complex-exponential-addition-and-real-extension
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: van Apeldoorn et al., Quantum SDP-solvers, Appendix C, generalized minimum finding
      url: https://arxiv.org/pdf/1705.01843v4
---

## Statement

For the finite sampler in [[alg-qa-30-capped-generalized-minimum]], with integer quantile parameter $N\ge1$ and rational confidence $0<\delta<1$, put $q(v)=\Pr(\text{score}<v)$. With probability at least $1-\delta$ the returned score $v$ satisfies $q(v)<1/N$. If the minimum score has probability at least $1/N$, the returned score is a minimum. The algorithm uses $O(\sqrt N(1+\ln(1/\delta)))$ preparation/inverse/reflection calls on every branch; comparisons, finite arithmetic, gates and output are additional charged coordinates.

For the coherent-score version, suppose $V$ preserves a uniform index $j\in[m]$ and its estimate is bad with probability at most $\nu$ on each index. Let $Q$ bound all sampler, inverse and controlled sampler calls in the algorithm at confidence $\delta/2$. If $\nu\le(\delta/(16Q))^2$, running with $N=m$ returns, with probability at least $1-\delta$, a good label whose score is not strictly greater than every good label at any one index. Individual good labels need not have appreciable probability. This guarantee uses the actual coherent sampler and its inverse; it does not supply them or infer inverse access from postselection.

## Facts & Assumptions

**Given:** The supplied coherent access, exact comparisons, independent fresh samples and random bits, and numerical/implementation errors already included in the sampler contract.

[F1] [[alg-qa-30-capped-generalized-minimum]] specifies the bounded stages, direct samples, five bit attempts, independent trials and charged cap.

[F2] The finite good/bad decomposition and reflection rotation preserve the normalized good projection up to global phase ([[lem-qa-30-capamplify-state-output-bound]]); the two-dimensional calculation is also recorded below.

[F3] [[thm-exponential-is-strictly-increasing]]: $\exp$ is strictly increasing on $\mathbb R$.

[F4] [[def-natural-logarithm]] defines $\log y$ as the inverse of $\exp$ for $y>0$; here $\ln$ denotes that natural logarithm.

[F5] [[thm-complex-exponential-addition-and-real-extension]]: $\exp(x+y)=\exp(x)\exp(y)$ for real $x,y$.

## Proof

**Given:** The sampler, exact comparison/reflections and finite algorithm of [F1].

1.1 Write $p=\Pr(\text{score}<v)$ for an incumbent. By the good/bad decomposition in [F2], after $q$ Grover iterations the success probability is $|\operatorname{Im}(z^{2q+1})|^2$ for $z=\sqrt{1-p}+i\sqrt p$; the same exact two-coordinate recurrence as in that lemma applies. The flag-only good branch has the normalized good projection, whose score/label measurement is therefore distributed as the original sampler conditioned on score $<v$. Direct successes have this same conditional distribution. Thus every verified improvement has that conditional distribution, with probability zero of improvement when $p=0$. For $0<p<1$, the finite geometric sum in [F2] also gives the random-iteration average $\frac12-\operatorname{Im}(z^{4K})/(4K\beta)$, where $\beta=2\sqrt{p(1-p)}$ and $K$ is the current stage cap. [F1, F2, given, algebra]

1.2 Suppose the sampler preserves a uniform input index $j\in[m]$ and has bad-estimate probability at most $\nu$ for each $j$. In analysis only, replace its per-index output by the normalized good projection. The good subspace can depend on the true value; no implementation of that projector is assumed. For each $j$, a two-dimensional rotation takes the actual unit output to its good normalization with operator distance at most $2\sqrt\nu$: its angle has cosine $\sqrt{1-p_{bad}}$, so $2\sin(\gamma/2)\le2\sqrt\nu$. The direct sum of these rotations over the preserved index gives a unitary sampler replacement with the same operator bound. Inverses and controlled versions have the same bound. For at most $Q$ sampler calls, telescoping products gives output-vector error at most $2Q\sqrt\nu$, and any measured event changes by at most $4Q\sqrt\nu$. This also covers adaptive classical branches by retaining measurement results as orthogonal history registers. [given, F1, construct, algebra]

2.1 If $p=0$, no improvement is possible and the incumbent already has strict-lower mass zero. For $0<p\le1/2$, put $\beta=2\sqrt{p(1-p)}\ge\sqrt{2p}$, $t=5/(2\beta)\ge5/2$, and let $J$ be the first stage with $K_J\ge t$. For every subsequent stage, step 1.1 gives conditional Grover success at least $2/5$; five bounded bit attempts make the random part accepted with probability at least $31/32$, so stage survival is at most $49/80$. The pre-threshold charge is at most $42t$: use $\sum_{j\le J}(4K_j+4)\le12(3/2)^J+8(J+1)$, $(3/2)^J<(3/2)t$, and $J+1\le3t$. The remaining expected charge is at most $\sum_{h\ge0}(49/80)^h(6t(3/2)^h+8)=960t/13+640/31$. Together these are below $128t$, hence below $256/\sqrt p$. If $p>1/2$, the direct sample alone makes stage survival at most $1/2$, and total expected charge is at most $\sum_{j\ge0}2^{-j}(4(3/2)^j+8)=32\le256/\sqrt p$. Thus every verified improvement has expected charge at most $256/\sqrt p$. [step 1.1, algebra]

3.1 For clarity choose dyadic rank bands $[a,2a)$, $a=2^\ell/N$, truncated at one. If an incumbent lies in such a band, the next improvement has probability at least $1/2$ of having rank below $a$. Indeed, under the distribution conditioned below the incumbent, the total mass of scores whose strict lower cumulative mass is less than $a$ is at least $a$; an atom crossing that cumulative threshold is included, so discreteness cannot reduce that mass. The conditional mass is at least $a/q(v)\ge1/2$. Ranks decrease, so each band is entered at most once and has at most two visits in expectation. The expected charge until rank is below $1/N$ is therefore at most $1+512\sqrt N\sum_{\ell\ge0}2^{-\ell/2}<2048\sqrt N$. Markov's inequality at the declared finite cap $100000\lceil\sqrt N\rceil$ gives trial failure below $1/8$. Truncation is coupled to the precharged unbounded procedure: on paths whose hitting charge is within the cap, no precharge check stops the trial before its successful incumbent. [step 1.1, step 2.1, algebra]

4.1 Independent trials each succeed with probability at least $7/8$. Returning their smallest score preserves success whenever one trial succeeds, so the all-failure probability is at most $8^{-R}\le\delta$ by the exact rational cap test in [F1]. If $R>1$, minimality gives $8^{-(R-1)}>\delta$; applying the increasing logarithm and using $\ln(8^{R-1})=(R-1)\ln8$ yields $R-1<\ln(1/\delta)/\ln8$, with $\ln8>0$ since $8>1$. This also gives $R=O(1+\ln(1/\delta))$ when $R=1$. A cutoff with $q(v)<1/N$ is at or below any score whose cumulative mass is at least $1/N$; this proves the minimum specialization. No probability of an exact score atom is assumed beyond the stated quantile/minimum promise. [given, F1, F3, F4, F5, step 3.1, algebra]

5.1 Run the quantile algorithm with $N=m$ and confidence $\delta/2$ on that ideal cleaned sampler, and choose $\nu\le(\delta/(16Q))^2$. The ideal output is good and has less than $1/m$ strict-lower score mass. Thus no index can have every good output score strictly below the returned score: that one index alone would contribute probability $1/m$. The hybrid bound transfers this good-output/nondomination property to the implemented sampler with failure at most $\delta$. It does not require the selected score atom to have probability $1/m$, does not union-bound unmeasured branches as classical samples, and does not infer a simultaneous deterministic table of all estimates. The separate planar oracle proof handles compatible completion of its two score orders. [given, step 4.1, step 1.2, algebra] ∎

