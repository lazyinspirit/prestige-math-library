---
id: cex-it-lloyd-fixed-point-need-not-be-global
kind: counterexample
title: Lloyd can stop at a strictly suboptimal finite-data fixed point
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - alg-it-finite-data-lloyd-quantizer
  - def-it-finite-squared-error-quantizer
  - lem-it-weighted-centroid-squared-error-identity
justified_by: []
aliases: []
axiom_use: No choice principle is used; every distance and cost is computed exactly.
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Robert Gallager, 6.450 Principles of Digital Communications I, Chapter 3: Quantization"
      url: https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/926689aaa62a0315473fa9b982de1b07_book_3.pdf
      locator: §3.2.3, printed pp. 67–68, Lloyd-Max fixed points need not be globally optimal; the exact finite witness here is computed locally.
    - title: Robert M. Gray and David L. Neuhoff, Quantization, IEEE Transactions on Information Theory 44(6) (1998)
      url: https://www.csd.uoc.gr/~hy438/lectures/Quantization.pdf
      locator: §II, printed pp. 2328–2330, Lloyd optimality conditions and multiple local optima; the exact finite witness here is computed locally.
---

## Statement refuted

Every fixed point of the exact finite-data Lloyd iteration is a global minimizer of empirical squared-error distortion.

## Facts & Assumptions

**Given:** Five equally weighted data points $0,1,4,5,9\in\mathbb R$, two ordered centers, and the exact iteration of [[alg-it-finite-data-lloyd-quantizer]].

[F1] [[alg-it-finite-data-lloyd-quantizer]]: the iteration uses least-index nearest-center assignments, updates nonempty clusters to their weighted centroids, leaves empty centers unchanged, and stops when centers are unchanged.

[F2] [[lem-it-weighted-centroid-squared-error-identity]]: each nonempty cluster's weighted squared error is minimized at its weighted centroid.

[F3] Let $X_5:=\{0,1,4,5,9\}$ and $(x_1,x_2,x_3,x_4,x_5):=(0,1,4,5,9)$. Put $\mu_5:=\frac15\sum_{i=1}^5\delta_{x_i}$ on $X_5$, where $\delta_{x_i}$ is unit point mass at $x_i$. This is a probability measure on the relative Borel sigma algebra of the finite Borel set $X_5$, with finite second moment $\frac15\sum_{i=1}^5|x_i|^2<\infty$. For a center pair $c=(c_1,c_2)$, let $Q_c:X_5\to\{1,2\}$ be its least-index nearest-center rule. Each fiber is Borel because $X_5$ is finite, so [[def-it-finite-squared-error-quantizer]] gives

$$D_{\mu_5}(Q_c;c_1,c_2)=\frac15\sum_{i=1}^5\min_{1\le j\le2}|x_i-c_j|^2,$$

so the sample-average costs below are exactly the distortions for this explicitly specified empirical law.

## Counterexample

1.1 Give each point weight $1/5$ and initialize centers at $(5/2,9)$. The squared distances to these centers, in point order $0,1,4,5,9$, are $(25/4,81)$, $(9/4,64)$, $(9/4,25)$, $(25/4,16)$, and $(169/4,0)$; each comparison is strict, so the clusters are $\{0,1,4,5\}$ and $\{9\}$. [given, F1, F3, algebra]

1.2 The alternative centers $(1/2,6)$ assign $0,1$ to $1/2$ and $4,5,9$ to $6$, with strict comparisons: the respective squared-distance pairs are $(1/4,36)$, $(1/4,25)$, $(49/4,4)$, $(81/4,1)$, and $(289/4,9)$. Their total squared error is $(1/2)+(4+1+9)=29/2$, hence their average distortion is $29/10$. [given, F3, algebra]

2.1 The two weighted centroids are $(0+1+4+5)/4=5/2$ and $9$, so the center update leaves $(5/2,9)$ unchanged by [F2]. The nearest assignment is unchanged as well by step 1.1, so [F1] stops at this tuple. Its distortion is $(25/4+9/4+9/4+25/4)/5=17/5$ by [F3]. [F1, F2, F3, step 1.1, algebra]

3.1 Since $29/10<17/5$, the alternative two-center quantizer has strictly lower distortion than the stopped Lloyd output in step 2.1. Thus that exact fixed point is not globally optimal, refuting the statement. [step 2.1, step 1.2, algebra] ∎
