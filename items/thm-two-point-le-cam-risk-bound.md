---
id: thm-two-point-le-cam-risk-bound
kind: theorem
title: "Two-point Le Cam lower bound for squared-error risk"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-bayes-and-minimax-risk
  - def-loss-function-and-risk
  - def-parameter-measurable-statistical-model-as-markov-kernel
  - def-randomized-procedure-as-a-markov-kernel
  - def-statistical-experiment
  - def-total-variation-distance-for-probability-laws
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 4, §4.3, Le Cam reduction and equation (4.3.3)"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 8, §8.3"
      url: "https://stanford.edu/class/stats311/lecture-notes.pdf"
---

## Statement

Let an experiment have parameter set $\{0,1\}$, sample space $(\mathcal X,\mathcal A)$,
and laws $P_0,P_1$. Let the scalar targets satisfy $t_0<t_1$ and put
$\Delta=t_1-t_0>0$. An arbitrary randomized estimator is a probability
kernel $K$ from $\mathcal X$ to $\mathbb R$ with its Borel sigma-algebra, and
its loss at parameter $j$ is squared error $(a-t_j)^2$. For every such $K$,
$$\max_{j\in\{0,1\}} R_j(K)\ge \frac{\Delta^2}{8}\bigl(1-\|P_0-P_1\|_{\rm TV}\bigr),$$
where $\|P_0-P_1\|_{\rm TV}=\sup_{A\in\mathcal A}|P_0(A)-P_1(A)|$.
Consequently the minimax risk over all randomized estimators obeys the same
lower bound.

## Facts & Assumptions

**Given:** The finite-parameter statistical experiment with laws $P_0,P_1$, targets $t_0<t_1$, and an arbitrary randomized estimator kernel $K$.

[F1] [[def-statistical-experiment]] and [[def-parameter-measurable-statistical-model-as-markov-kernel]]: the parameter set $\{0,1\}$ has its power-set sigma-algebra and its model assigns the sample law $P_j$ to parameter $j$.

[F2] [[def-randomized-procedure-as-a-markov-kernel]]: for every measurable action event $B\subseteq\mathbb R$, $x\mapsto K(x,B)$ is measurable and is a probability measure in $B$ for fixed $x$.

[F3] [[def-loss-function-and-risk]]: for a nonnegative jointly measurable loss $L(j,a)$, the risk is $R_j(K)=\int_{\mathcal X}\int_{\mathbb R}L(j,a)K(x,da)P_j(dx)$, with an extended nonnegative value allowed.

[F4] [[def-total-variation-distance-for-probability-laws]]: with the event-supremum convention, $\|P_0-P_1\|_{\rm TV}=\sup_{A\in\mathcal A}|P_0(A)-P_1(A)|$.

[F5] [[def-bayes-and-minimax-risk]]: the maximum risk of a procedure is $\max_{j\in\{0,1\}}R_j(K)$ and minimax risk is the infimum of this maximum over all procedures.

## Proof

1.1 Put $c=(t_0+t_1)/2$ and define the randomized test $\phi(x)=K(x,[c,\infty))$. It is measurable and lies in $[0,1]$ by [F2]. Under parameter $0$, every action in $[c,\infty)$ has squared error at least $\Delta^2/4$; under parameter $1$, every action in $(-\infty,c)$ has squared error at least $\Delta^2/4$. Hence $R_0(K)+R_1(K)\ge\frac{\Delta^2}{4} \left(\int\phi\,dP_0+\int(1-\phi)\,dP_1\right).$ [F1, F2, F3, given, algebra]

2.1 For each integer $N\ge1$, let $\phi_N=N^{-1}\sum_{r=1}^N\mathbf1_{\{\phi\ge r/N\}}$. Then $0\le\phi-\phi_N\le1/N$. By [F4], each event term satisfies $P_0(\phi\ge r/N)-P_1(\phi\ge r/N)\ge-\|P_0-P_1\|_{\rm TV}$, so $\int\phi_NdP_0-\int\phi_NdP_1\ge-\|P_0-P_1\|_{\rm TV}$. The two integral errors from replacing $\phi$ by $\phi_N$ have total absolute value at most $2/N$; letting $N\to\infty$ gives $\int\phi\,dP_0+\int(1-\phi)\,dP_1\ge 1-\|P_0-P_1\|_{\rm TV}.$ Combining with step 1.1 and using $\max(R_0,R_1)\ge(R_0+R_1)/2$ proves the risk bound. Taking the infimum over $K$ and applying [F5] proves the minimax assertion. [F4, F5, step 1.1, algebra] ∎
