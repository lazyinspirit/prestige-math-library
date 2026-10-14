---
id: lem-zero-covariance-multivariate-trimmed-mean-exact
kind: lemma
title: "Exact recovery by the multivariate trimmed mean at zero covariance"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps: [lem-finite-covariance-matrix-basic-properties, alg-multivariate-trimmed-mean, lem-multivariate-trimmed-mean-selector-total-and-measurable, def-adversarial-sample-replacement, def-identically-distributed-and-iid-random-variables]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Gábor Lugosi and Shahar Mendelson, Robust Multivariate Mean Estimation: The Optimality of Trimmed Mean, §3.1"
      url: "https://arxiv.org/pdf/1907.11391"
      locator: "PDF pp. 15–16; directional clipping and slab selector that the local proof analyzes at zero covariance. The exact recovery claim is proved here."
    - title: "Gábor Lugosi, Mean Estimation in High Dimension, §3.2"
      url: "https://ems.press/content/book-chapter-files/33347?nt=1"
      locator: "PDF pp. 6–7; independent exposition of directional clipping and dyadic slabs."
---

## Statement

Let $X$ be a Borel random vector in $\mathbb R^d$, $d\ge1$, with finite second moment, mean $\mu$, and covariance matrix $\Sigma$ as defined in [[lem-finite-covariance-matrix-basic-properties]]. Let two halves of size $N$ be iid clean copies, and let the observed vector be a sample-replacement version with at most $\lfloor2\eta N\rfloor$ changed coordinates in total. Assume $0\le\eta\le1/10$, $0<\delta<1$, and $N\ge2560\log(2/\delta)$. With $\varepsilon=\max\{10\eta,2560\log(2/\delta)/N\}$, if $\operatorname{tr}\Sigma=0$, then [[alg-multivariate-trimmed-mean]] returns $\mu$ almost surely.

## Facts & Assumptions

**Given:** The clean iid halves, their zero-trace covariance, the sample-replacement budget, and the displayed parameter domain.

[F1] For a finite-second-moment vector, zero covariance trace implies that the clean law is concentrated at its mean ([[lem-finite-covariance-matrix-basic-properties]]).

[F2] The replacement model allows at most $\lfloor2\eta N\rfloor$ changed entries among the full vector of length $2N$; the clean entries are iid and the observed entries may depend on all clean data ([[def-adversarial-sample-replacement]], [[def-identically-distributed-and-iid-random-variables]]).

[F3] The algorithm uses the second-half directional order statistics at ranks $\lceil\varepsilon N/2\rceil$ and $\lceil(1-\varepsilon/2)N\rceil$, clips first-half projections to the interval expanded by $Q$, and returns the minimum-norm point of the all-scale intersection when every $K_j$ is nonempty ([[alg-multivariate-trimmed-mean]]).

[F4] On the stated domain, $0<\varepsilon\le1$ and $\varepsilon\ge10\eta$ ([[alg-multivariate-trimmed-mean]]).

[F5] The all-scale minimum-norm selector is single-valued whenever its intersection is nonempty ([[lem-multivariate-trimmed-mean-selector-total-and-measurable]]).

## Proof

**Proof technique:** direct.

**Given:** The zero-trace covariance, iid clean halves of size $N$, the sample-replacement budget, and the displayed $\eta,\delta,N$ domain.

1.1 By [F1] and iid sampling in [F2], with probability one every clean coordinate in both halves equals $\mu$. Fix any such clean realization and any admissible replacement output. Each observed half has at most $m\le\lfloor2\eta N\rfloor\le2\eta N\le\varepsilon N/5$ changed coordinates. Put $q=\varepsilon N/2$, so $m<q\le N/2$. The two ranks in [F3] are $r_- =\lceil q\rceil$ and $r_+=\lceil N-q\rceil=N-\lfloor q\rfloor$. They satisfy $m<r_-,r_+$ and $r_-,r_+\le N-m$: indeed $r_-\le\lceil N/2\rceil\le N-m$, while $r_+\ge\lceil N/2\rceil>m$ and $r_+=N-\lfloor q\rfloor\le N-m$. Thus for every unit $v$, both order statistics of the second half equal $\langle\mu,v\rangle$, since the unaltered projections occupy all ranks from $m+1$ through $N-m$. [F1, F2, F3, F4, given, algebra]

2.1 For any $Q>0$ and unit $v$, the unaltered first-half projections equal $\langle\mu,v\rangle$, while each changed projection after clipping to $[\langle\mu,v\rangle-Q,\langle\mu,v\rangle+Q]$ differs from it by at most $Q$. By step 1.1 these are the clipping endpoints used by [F3], so $|U_Q(v)-\langle\mu,v\rangle|\le mQ/N\le2\eta Q\le\varepsilon Q/5<2\varepsilon Q$. Hence $\mu\in\Gamma(Q)$ for every dyadic $Q=2^i$, and $\mu\in K_j$ for every integer $j$. Therefore $S=\mathbb Z$ in [F3]. [F3, F4, step 1.1, algebra]

3.1 Let $z$ belong to the algorithm's all-scale intersection. For each fixed unit $v$ and every integer $i$, its slab constraint and step 2.1 imply $|\langle z-\mu,v\rangle|\le|\langle z,v\rangle-U_{2^i}(v)|+|U_{2^i}(v)-\langle\mu,v\rangle|\le2\varepsilon2^i+2\eta2^i$. Letting $i\to-\infty$ gives $\langle z-\mu,v\rangle=0$ for every unit $v$. If $z\ne\mu$, choosing $v=(z-\mu)/\|z-\mu\|_2$ contradicts that equality; thus the all-scale intersection is exactly $\{\mu\}$. Since $S=\mathbb Z$, [F3] and [F5] make the algorithm return its unique point $\mu$. The argument holds on the probability-one event from step 1.1, proving the claim. [F3, F5, step 1.1, step 2.1, algebra] ∎

