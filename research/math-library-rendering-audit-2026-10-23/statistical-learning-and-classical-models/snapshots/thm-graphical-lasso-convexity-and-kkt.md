---
id: thm-graphical-lasso-convexity-and-kkt
kind: theorem
title: "The all-entry graphical-lasso objective has a unique KKT optimizer"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-graphical-lasso-objective
  - thm-non-negative-operator-characterisations
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-hessian-characterises-convexity
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "The Elements of Statistical Learning, second edition"
      url: "https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf"
      locator: "§17.3.2, equations (17.21)–(17.23), printed pp. 635–636"
    - title: "Friedman, Hastie and Tibshirani, Sparse inverse covariance estimation with the lasso"
      url: "https://hastie.su.domains/Papers/graph.pdf"
      locator: "§2, objective (1) and subgradient equation (6), PDF pp. 2–3"
---

## Statement

Let $\mathbb S_+^p$ be the real symmetric positive-semidefinite $p\times p$ matrices and $\mathbb S_{++}^p$ the real symmetric positive-definite ones. For $p\ge1$, $S\in\mathbb S_+^p$ and $\lambda>0$, maximize
$$F_{S,\lambda}(\Theta)=\log\det\Theta-\operatorname{tr}(S\Theta)-\lambda\sum_{i=1}^p\sum_{j=1}^p|\Theta_{ij}|$$
over $\Theta\in\mathbb S_{++}^p$. The objective is strictly concave and attains a unique maximizer $\Theta^*$. A feasible $\Theta$ is this unique maximizer if and only if there is a symmetric matrix $\Gamma$ such that $\Theta^{-1}-S-\lambda\Gamma=0$, with $\Gamma_{ii}=1$, $\Gamma_{ij}=\operatorname{sign}(\Theta_{ij})$ when $\Theta_{ij}\ne0$, and $\Gamma_{ij}\in[-1,1]$ when $\Theta_{ij}=0$.

## Statement references

[The Elements of Statistical Learning, §17.3.2](https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf)

[Friedman, Hastie and Tibshirani, §2](https://hastie.su.domains/Papers/graph.pdf)

## Facts & Assumptions

**Given:** $p\ge1$, $S\in\mathbb S_+^p$, $\lambda>0$, and the symmetric positive-definite domain and all-entry objective in the Statement.

[F1] The all-entry graphical-lasso functional is $F_{S,\lambda}(\Theta)=\log\det\Theta-\operatorname{tr}(S\Theta)-\lambda\sum_{i,j}|\Theta_{ij}|$ on $\mathbb S_{++}^p$. [[def-graphical-lasso-objective]].

[F2] A finite-dimensional nonnegative self-adjoint operator has a factorization $S=R^*R$. [[thm-non-negative-operator-characterisations]].

[F3] A real symmetric matrix has an orthonormal eigenbasis. [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]].

[F4] For a twice continuously differentiable function on an open convex Euclidean domain, positive-semidefinite Hessian everywhere implies convexity. [[thm-hessian-characterises-convexity]].

[F5] Convexity on a convex set is the chord inequality; strict convexity requires strict inequality for distinct points and interior weights. [[def-convex-and-strictly-convex-functions-on-euclidean-sets]].

## Proof

1.1 By the all-entry objective definition [F1] and the nonnegative-operator factorization [F2], write $S=R^TR$. Thus $\operatorname{tr}(S\Theta)=\operatorname{tr}(R\Theta R^T)\ge0$ for $\Theta\succ0$. Also $\|\Theta\|_1=\sum_{i,j}|\Theta_{ij}|\ge\sum_i\Theta_{ii}=\operatorname{tr}\Theta$, since positive-definite matrices have positive diagonal entries. [given, F1, F2, algebra]

1.2 The cone $\mathbb S_{++}^p$ is open and convex: positive quadratic forms remain positive under sufficiently small symmetric perturbations, and convex combinations of positive quadratic forms remain positive. For symmetric $H$, determinant expansion gives $\left.\frac{d}{dt}\log\det(\Theta+tH)\right|_{t=0}=\operatorname{tr}(\Theta^{-1}H)$. Differentiating $(\Theta+tH)(\Theta+tH)^{-1}=I$ gives $\left.\frac{d}{dt}(\Theta+tH)^{-1}\right|_{t=0}=-\Theta^{-1}H\Theta^{-1}$, so the second directional derivative is $-\operatorname{tr}(\Theta^{-1}H\Theta^{-1}H)$. [given, F3, algebra]

2.1 By [F3], the eigenvalues $t_1,\ldots,t_p$ of $\Theta\succ0$ are positive and $\log\det\Theta=\sum_k\log t_k$, $\operatorname{tr}\Theta=\sum_k t_k$. Hence $F_{S,\lambda}(\Theta)\le\sum_{k=1}^p h(t_k)$ for $h(t)=\log t-\lambda t$. The function $h$ is bounded above and tends to $-\infty$ as $t\downarrow0$ or $t\to\infty$. For any $c$, the upper level set $F_{S,\lambda}(\Theta)\ge c$ therefore forces each eigenvalue into a compact interval $[a_c,b_c]\subset(0,\infty)$: if $M=\sup_{t>0}h(t)$, then each $h(t_k)\ge c-(p-1)M$. These matrices form a closed bounded set of symmetric matrices contained in $\mathbb S_{++}^p$, hence a compact set. Taking $c=F_{S,\lambda}(I)$ gives a nonempty compact upper level set, and continuity of $F$ yields a maximizer. [step 1.1, F3, algebra]

2.2 Let $B=\Theta^{-1/2}H\Theta^{-1/2}$, using the positive square root from the orthonormal eigenbasis [F3]. Then $B$ is symmetric and $\operatorname{tr}(\Theta^{-1}H\Theta^{-1}H)=\operatorname{tr}(B^2)=\|B\|_F^2$, strictly positive when $H\ne0$. Thus the second derivative of $\log\det$ along every nonconstant segment is strictly negative, giving its strict chord inequality. The Hessian of $-\log\det$ is positive semidefinite by step 1.2, so [F4] gives convexity in the chord sense of [F5]. The trace term is linear and the entrywise $\ell^1$ norm is convex by the triangle inequality, so its negative is concave; adding these terms preserves the strict chord inequality. Hence $F_{S,\lambda}$ is strictly concave on its open convex domain. [F3, F4, F5, step 1.2, algebra]

2.3 Put $G=\Theta^{-1}-S$. At a maximizer every feasible one-coordinate directional derivative is at most zero, and when the objective is differentiable in both directions its derivative is zero. Since $\Theta_{ii}>0$, the diagonal penalty is locally differentiable with slope $1$, so the diagonal equation is $G_{ii}-\lambda=0$ and $\Gamma_{ii}=1$. For $i<j$, a symmetric perturbation by $t(E_{ij}+E_{ji})$ has smooth derivative $2G_{ij}t$ and changes the penalty by $2\lambda(|\Theta_{ij}+t|-|\Theta_{ij}|)$. If $\Theta_{ij}\ne0$, testing both signs of small $t$ gives $G_{ij}=\lambda\operatorname{sign}(\Theta_{ij})$. If $\Theta_{ij}=0$, taking $t>0$ gives $G_{ij}\le\lambda$ and taking $t<0$ gives $G_{ij}\ge-\lambda$. Defining $\Gamma_{ij}=\Gamma_{ji}=G_{ij}/\lambda$ at zero and the sign otherwise yields the stated KKT equation for the all-entry penalty [F1]. [given, F1, step 1.2, algebra]

3.1 Conversely, suppose $\Theta\succ0$ and a symmetric $\Gamma$ satisfies the stated entrywise conditions and $\Theta^{-1}-S-\lambda\Gamma=0$. Put $T=\Theta^{-1/2}\Theta'\Theta^{-1/2}$ for any $\Theta'\succ0$; its eigenvalues $t_r$ are positive. Since $\log t\le t-1$ for $t>0$ (the function $t-1-\log t$ has its minimum $0$ at $t=1$), $\log\det\Theta'-\log\det\Theta=\sum_r\log t_r\le\operatorname{tr}(T)-p=\operatorname{tr}(\Theta^{-1}(\Theta'-\Theta))$. For each scalar $x$ and each allowed subgradient $\gamma$ of $|x|$, $|y|\ge|x|+\gamma(y-x)$: if $x\ne0$, this follows from $|y|\ge\operatorname{sign}(x)y$, while for $x=0$ it follows from $|\gamma|\le1$. Summing gives $\|\Theta'\|_1\ge\|\Theta\|_1+\sum_{i,j}\Gamma_{ij}(\Theta'_{ij}-\Theta_{ij})$ for the all-entry objective [F1]. Combining these bounds with the linear trace term and the KKT equation yields $F_{S,\lambda}(\Theta')-F_{S,\lambda}(\Theta)\le\operatorname{tr}((\Theta^{-1}-S-\lambda\Gamma)(\Theta'-\Theta))=0$. Thus every such KKT point is a maximizer. The maximizer exists by step 2.1 and is unique by strict concavity from step 2.2, so the KKT condition is both necessary and sufficient for that unique optimum. [given, F1, step 2.1, step 2.2, step 2.3, algebra] ∎
