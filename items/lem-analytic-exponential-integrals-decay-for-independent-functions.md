---
id: lem-analytic-exponential-integrals-decay-for-independent-functions
kind: lemma
title: Uniform oscillatory decay for independent real-analytic functions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-real-analytic-function
  - cor-power-series-sums-are-smooth-with-coefficient-formula
  - thm-identity-theorem-for-real-analytic-functions-on-an-interval
  - lem-van-der-corput-oscillatory-integral-estimate
  - thm-heine-borel-rn
  - thm-extreme-value-metric
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves
      url: https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf
      locator: "Theorem 1.14 and complete proof in Appendix A by Jim Wright, §§1 and Appendix A, PDF pp. 6 and 27–28"
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves (arXiv v2 author preprint)
      url: https://arxiv.org/pdf/2509.06909v2
      locator: "arXiv:2509.06909v2, Theorem 1.14 and complete proof in Appendix A by Jim Wright, §§1 and Appendix A; full relevant passage inspected"
---

## Statement

Let $k\ge1$, let $f_1,\ldots,f_k:\mathbb R\to\mathbb R$ be real analytic such that $1,f_1,\ldots,f_k$ are linearly independent over $\mathbb R$, and let $I\subseteq\mathbb R$ be a compact interval. There are constants $C,\delta>0$ such that for every nonzero $\lambda=(\lambda_1,\ldots,\lambda_k)\in\mathbb R^k$,

$$\left|\int_I e\!\left(\sum_{j=1}^k\lambda_j f_j(x)\right)\,dx\right|\le C\|\lambda\|^{-\delta},$$

where $e(t)=\exp(2\pi i t)$ and $\|\cdot\|$ is the Euclidean norm on $\mathbb R^k$.

## Statement references

[Bergelson–Moreira, Theorem 1.14 and Appendix A](https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf)

[Bergelson–Moreira, arXiv:2509.06909v2](https://arxiv.org/pdf/2509.06909v2)

## Facts & Assumptions

**Given:** Real-analytic functions $f_1,\ldots,f_k$ with $1,f_1,\ldots,f_k$ linearly independent, and a compact interval $I$.

[F1] A real-analytic function is locally represented by a convergent real power series ([[def-real-analytic-function]]); such a sum is smooth inside its radius ([[cor-power-series-sums-are-smooth-with-coefficient-formula]]).

[F2] If two real-analytic functions on an open interval agree on a set with an interior accumulation point, they agree on the whole interval ([[thm-identity-theorem-for-real-analytic-functions-on-an-interval]]).

[F3] If $q\ge2$, $\psi\in C^q(J)$, $J$ is a bounded interval, and $|\psi^{(q)}|\ge c>0$ on $J$, then for $r>0$ the pure-phase integral is bounded by $C_q(rc)^{-1/q}$ ([[lem-van-der-corput-oscillatory-integral-estimate]], proof step 2.2).

[F4] The set $I\times S^{k-1}$ is a closed bounded subset of Euclidean space, so it is compact ([[thm-heine-borel-rn]]).

[F5] A continuous real-valued function on a nonempty compact metric space is bounded ([[thm-extreme-value-metric]]).

## Proof

1.1 If $I$ is a singleton, its integral is zero, so assume it has positive length. Let $S^{k-1}=\{\theta\in\mathbb R^k:\|\theta\|=1\}$ and $\psi_\theta(x)=\sum_j\theta_jf_j(x)$. For every $(x,\theta)\in I\times S^{k-1}$, some derivative $\psi_\theta^{(q)}(x)$ with $q\ge1$ is nonzero: otherwise its Taylor series makes $\psi_\theta$ constant near $x$, and [F2] makes it constant on $\mathbb R$, contradicting the stated linear independence. [given, F1, F2]

2.1 By continuity of the derivatives, each $(x,\theta)$ has a product neighbourhood $U\times V\subseteq I\times S^{k-1}$, an order $q\ge1$, and $c>0$ such that $|\psi_\vartheta^{(q)}(y)|\ge c$ for all $(y,\vartheta)\in U\times V$. The compactness in [F4] gives a finite such cover; let $D$ be the largest order in it. [step 1.1, F4]

3.1 Fix $\theta\in S^{k-1}$. The finitely many first-coordinate intervals of cover members whose second-coordinate neighbourhood contains $\theta$ cover $I$. Partitioning at their finitely many endpoints gives finitely many subintervals, each lying in one such neighbourhood. On a subinterval with selected order $q\ge2$, [F3] gives $\left|\int e(r\psi_\theta(x))\,dx\right|\le C_q(rc)^{-1/q}$ for $r\ge1$. [F3, step 2.1]

3.2 On a subinterval with selected order $q=1$, $|\psi_\theta'|\ge c$ and $|\psi_\theta''|$ is bounded uniformly over $\theta\in S^{k-1}$ and $x\in I$ by [F5]. Integration by parts gives a bound $O(r^{-1})$ uniformly: the endpoint terms are at most $1/(\pi r c)$ and the integral term is at most $|I|\sup_I|\psi_\theta''|/(2\pi r c^2)$. [F5, step 2.1, algebra]

4.1 There are uniformly finitely many subintervals and their derivative orders satisfy $1\le q\le D$. Summing steps 3.1 and 3.2 gives $\left|\int_I e(r\psi_\theta(x))\,dx\right|\le C_1r^{-1/D}$ for $r\ge1$, with $C_1$ independent of $\theta$. For $0<r<1$, the trivial bound $|I|$ is at most $|I|r^{-1/D}$. Writing $\lambda=r\theta$ proves the statement with $\delta=1/D$ and an enlarged constant. [step 3.1, step 3.2, algebra] ∎

## Remarks

The analyticity hypothesis is substantive in the source theorem. A smooth function can equal an integer on a positive-measure set, where integer-multiplied values cannot be uniformly distributed modulo one; this item makes no $C^\infty$ replacement claim.

## Remarks references

[Bergelson–Moreira, Remark 1.8](https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf)

[Bergelson–Moreira, arXiv:2509.06909v2](https://arxiv.org/pdf/2509.06909v2)
