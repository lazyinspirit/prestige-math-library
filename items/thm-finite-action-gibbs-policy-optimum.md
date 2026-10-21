---
id: thm-finite-action-gibbs-policy-optimum
kind: theorem
title: The finite-action Gibbs policy uniquely maximizes reward minus KL
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-kl-regularized-policy-improvement
  - def-proper-scoring-rule
  - thm-log-and-brier-strict-propriety
justified_by: []
proof_strategy: direct
verification: {}
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Rafael Rafailov et al., Direct Preference Optimization: Your Language Model is Secretly a Reward Model, arXiv:2305.18290v3 (2024)"
      url: "https://arxiv.org/pdf/2305.18290v3"
    - title: "Purdue course lecture notes, Preference Optimization (PrefOpt)"
      url: "https://www.cs.purdue.edu/homes/ribeirob/courses/Spring2026/lectures/18-pref-opt/PrefOpt.html"
---

## Statement

Let $Y$ be a finite nonempty set, let $q$ be a probability vector on $Y$ with $q_y>0$ for every $y$, let $r:Y\to\mathbb R$, and let $\beta>0$. Define
$$Z=\sum_{y\in Y}q_y e^{r(y)/\beta},\qquad p_y^*=\frac{q_y e^{r(y)/\beta}}{Z}.$$
Then $Z$ is finite and positive, $p^*$ is a full-support probability vector, the maximum objective value is $F_{q,r,\beta}(p^*)=\beta\log Z$, and for every probability vector $p$ on $Y$,
$$F_{q,r,\beta}(p^*)-F_{q,r,\beta}(p)=\beta D(p\|p^*)\ge0.$$
Equality holds exactly when $p=p^*$. Thus $p^*$ is the unique maximizer of the finite KL-regularized policy-improvement objective.

## Statement references

[[def-kl-regularized-policy-improvement|Finite KL-regularized policy improvement]]: defines $F_{q,r,\beta}$ and the finite KL support convention.

[[def-proper-scoring-rule|Finite-label score loss]]: defines logarithmic loss as $-\log q_y$ and its expected loss as the corresponding finite sum.

[[thm-log-and-brier-strict-propriety|Strict propriety of finite logarithmic loss]]: the truthful forecast uniquely minimizes expected logarithmic loss on the finite simplex.

## Facts & Assumptions

**Given:** The finite nonempty set $Y$, full-support probability vector $q$, real reward $r$, positive $\beta$, and the vectors $p,p^*$ in the Statement.

[F1] [[def-kl-regularized-policy-improvement]]: $F_{q,r,\beta}(p)=\sum_y p_y r(y)-\beta D(p\|q)$, and when the second vector is positive, $D(p\|q)=\sum_{y:p_y>0}p_y\log(p_y/q_y)$ with zero first-coordinate terms omitted.

[F2] [[def-proper-scoring-rule]]: the finite expected logarithmic loss at forecast $v$ under probability vector $u$ is $\bar S_{\log}(u,v)=\sum_{y:u_y>0}-u_y\log v_y$.

[F3] [[thm-log-and-brier-strict-propriety]]: for finite probability vectors $u,v$, the expected logarithmic loss is minimized at the truthful forecast $v=u$, with equality only there.

## Proof

1.1 Since $Y$ is finite and each $q_y e^{r(y)/\beta}$ is a positive finite real, their sum $Z$ is positive and finite. The coordinates of $p^*$ are positive and sum to $1$, so $p^*$ is a full-support probability vector. [given, algebra]

2.1 For each $y$, the definition of $p^*$ gives $\log(p_y^*/q_y)=r(y)/\beta-\log Z$. Substitution into the finite sum for $D(p\|p^*)$, omitting zero coordinates of $p$, yields $\beta D(p\|p^*)=\beta D(p\|q)-\sum_y p_y r(y)+\beta\log Z=\beta\log Z-F_{q,r,\beta}(p)$. All sums are finite, and all logarithm arguments in the sums are positive. [F1, given, step 1.1, algebra]

3.1 Substituting $p=p^*$ in step 2.1 gives $F_{q,r,\beta}(p^*)=\beta\log Z$, because $D(p^*\|p^*)=0$. Therefore for every $p$, step 2.1 gives $F_{q,r,\beta}(p^*)-F_{q,r,\beta}(p)=\beta D(p\|p^*)$. [F1, step 2.1, algebra]

4.1 If $|Y|=1$, its simplex contains only $p=p^*$, so the objective gap is zero and the maximizer is unique. Otherwise identify $Y$ with a $K$-label set, where $K=|Y|\ge2$. Since $p^*$ has full support, the difference $\bar S_{\log}(p,p^*)-\bar S_{\log}(p,p)$ is the finite sum $\sum_{y:p_y>0}p_y\log(p_y/p_y^*)=D(p\|p^*)$ by [F1] and [F2]. By [F3], this difference is nonnegative and is zero only when $p=p^*$. As $\beta>0$, step 3.1 proves the stated inequality and uniqueness. [F1, F2, F3, given, step 3.1, algebra] ∎
