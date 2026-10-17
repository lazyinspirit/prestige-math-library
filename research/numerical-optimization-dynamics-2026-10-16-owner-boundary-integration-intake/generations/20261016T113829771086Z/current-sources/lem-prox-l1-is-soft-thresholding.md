---
id: lem-prox-l1-is-soft-thresholding
kind: lemma
title: "The proximal map of the l1 norm is soft thresholding"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-proper-closed-convex-function-on-rn
  - def-proximal-mapping
  - thm-proximal-operator-existence-resolvent-firm-nonexpansive
  - def-p-norms-on-rn
  - lem-p-norms-are-norms-and-induce-the-published-metrics
  - lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric
  - def-soft-thresholding-function
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §6.5.2"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
    - title: "Amir Beck, First-Order Methods in Optimization, SIAM, 2017, Chapter 6"
      url: "https://epubs.siam.org/doi/book/10.1137/1.9781611974997"
---

## Statement

For $n\ge1$ and $\lambda>0$, the function $g_\lambda(u)=\lambda\|u\|_1$ is proper, closed and convex in the convention of [[def-proper-closed-convex-function-on-rn]]. For every $t>0$ and $v\in\mathbb R^n$,
$$\operatorname{prox}_{t\lambda\|\cdot\|_1}(v)=\big(S_{t\lambda}(v_i)\big)_{i=1}^n,$$
where $S_\tau$ is the soft-thresholding map of [[def-soft-thresholding-function]].

## Facts & Assumptions

**Given:** $n\ge1$, $\lambda,t>0$, and $v\in\mathbb R^n$.

[F1] [[def-p-norms-on-rn]]: $\|u\|_1=\sum_{i=1}^n|u_i|$ and $\|u-v\|_2^2=\sum_{i=1}^n(u_i-v_i)^2$.

[F2] [[def-proximal-mapping]]: the proximal point minimizes $\lambda\|u\|_1+\|u-v\|_2^2/(2t)$ over $u\in\mathbb R^n$.

[F3] [[def-soft-thresholding-function]]: $S_\tau(s)=s-\tau$ if $s>\tau$, $0$ if $|s|\le\tau$, and $s+\tau$ if $s< -\tau$.

[F4] [[lem-p-norms-are-norms-and-induce-the-published-metrics]]: for $n\ge1$, $\|\cdot\|_1$ is a norm on $\mathbb R^n$.

[F5] [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]: for $n\ge1$, every norm on $\mathbb R^n$ is continuous in the Euclidean metric.

[F6] [[def-proper-closed-convex-function-on-rn]]: properness is nonempty effective domain, convexity is the Jensen inequality, and closedness means closed epigraph.

## Proof

1.1 Set $h(u)=\lambda\|u\|_1$. It is finite everywhere and $h(0)=0$, so its effective domain is nonempty. By [F4] and $\lambda>0$, the norm triangle and homogeneity inequalities give $$h((1-\theta)u+\theta w)\le(1-\theta)h(u)+\theta h(w)\qquad(0\le\theta\le1),$$ so $h$ is convex. It is continuous by [F5]. To see its epigraph is closed, take any $(u,s)$ with $s<h(u)$, set $\varepsilon=(h(u)-s)/3$, and choose $\delta_0>0$ so $\|u'-u\|_2<\delta_0$ implies $|h(u')-h(u)|<\varepsilon$. If $\|(u'-u,s'-s)\|_2<\min\{\delta_0,\varepsilon\}$ in $\mathbb R^{n+1}$, then $s'<s+\varepsilon<h(u)-\varepsilon<h(u')$, so this neighborhood misses the epigraph. Thus the complement is open and the epigraph is closed. By [F6], $h$ is proper, closed and convex, as required by the proximal definition. [F1, F4, F5, F6, given, choose, algebra]

1.2 Fix a scalar $s=v_i$. On $u\ge0$, completing the square shows the minimum is at $u=\max\{s-t\lambda,0\}$; on $u\le0$ it is at $u=\min\{s+t\lambda,0\}$. If $s>t\lambda$, the first candidate is $s-t\lambda>0$ and has value strictly below the common boundary value at $0$, while the second candidate is $0$. If $s<-t\lambda$, the symmetric argument gives the unique minimizer $s+t\lambda<0$. If $-t\lambda\le s\le t\lambda$, both half-line minima are $0$. Thus the unique scalar minimizer is $S_{t\lambda}(s)$ in all three cases. [F3, given, algebra]

2.1 By [F1], the objective in [F2] is the sum over coordinates of $\phi_i(u_i)=\lambda|u_i|+(u_i-v_i)^2/(2t)$. It is enough to find the unique minimizer of each scalar function: the sum is minimized exactly when every coordinate is at its scalar minimum, and the positive quadratic term makes each scalar function strictly convex. [F1, F2, step 1.1, given, algebra]

3.1 Applying step 1.2 to each of the finitely many coordinates gives the unique vector minimizer $(S_{t\lambda}(v_i))_{i=1}^n$, which is the proximal point by [F2]. [F2, step 2.1, step 1.2, algebra] ∎

