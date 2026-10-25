---
id: def-polyhedral-selection-event-and-contrast-interval
kind: definition
title: Polyhedral selection event and contrast interval
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-orthogonal-projection
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Jason D. Lee, Dennis L. Sun, Yuekai Sun, and Jonathan E. Taylor, Exact Post-Selection Inference, with Application to the Lasso"
      url: "https://arxiv.org/pdf/1311.6238"
---

## Definition

Fix integers $n\ge1$ and $m\ge0$, a matrix $A\in\mathbb R^{m\times n}$, a vector $b\in\mathbb R^m$, and a fixed nonzero vector $\eta\in\mathbb R^n$. Inequalities between vectors are coordinatewise. Define the projection matrix and contrast direction
$$P_\eta=\frac{\eta\eta^T}{\|\eta\|^2},\qquad c_\eta=\frac{\eta}{\|\eta\|^2}.$$
The matrix $P_\eta$ is the orthogonal projection onto $\operatorname{span}\{\eta\}$ ([[def-orthogonal-projection]]). For a vector $y\in\mathbb R^n$, put
$$T(y)=\eta^Ty,\qquad Z(y)=(I_n-P_\eta)y.$$
Then $y=c_\eta T(y)+Z(y)$ and $\eta^TZ(y)=0$.

For row $j$ of $A$, written $a_j^T$, define
$$r_j=a_j^Tc_\eta,\qquad d_j(z)=b_j-a_j^Tz.$$
Let $J_-=\{j:r_j<0\}$, $J_+=\{j:r_j>0\}$, and $J_0=\{j:r_j=0\}$. Define
$$L(z)=\begin{cases}\max_{j\in J_-}d_j(z)/r_j,&J_-\ne\varnothing,\\-\infty,&J_-=\varnothing,\end{cases}\qquad U(z)=\begin{cases}\min_{j\in J_+}d_j(z)/r_j,&J_+\ne\varnothing,\\+\infty,&J_+=\varnothing.\end{cases}$$
Define $G(z)$ to hold exactly when $d_j(z)\ge0$ for every $j\in J_0$. The selection event is $S=\{y:Ay\le b\}$. The interval associated with $z$ is $I(z)=\varnothing$ if $G(z)$ fails or $L(z)>U(z)$, and is $[L(z),U(z)]$ otherwise. The next lemma proves that this interval describes precisely the fiber of $S$ along the contrast direction.

## Remarks

The empty-row case $m=0$ gives $L=-\infty$, $U=+\infty$, and $G$ true. Infinite endpoints mean that the corresponding side is not truncated.
