---
id: ex-logrank-crossing-hazards-zero-score
kind: example
title: "Crossing hazards with a zero observed logrank score"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-logrank-risk-set-score-and-test
  - def-nelson-aalen-kaplan-meier-greenwood-estimators
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Statement

Use follow-up horizon $\tau=2.5$. Let the event times be mutually
independent, with group hazards
$$\lambda_1(t)=\begin{cases}2,&0\le t\le1,\\1,&t>1,\end{cases} \qquad \lambda_0(t)=\begin{cases}1,&0\le t\le1,\\2,&t>1.\end{cases}$$
Let all censoring times be mutually independent and independent of the
entire event-time family. In group 1, let each censoring time equal $1.5$
with probability $2/3$ and $2.5$ with probability $1/3$; in group 0 let it
equal $2.5$. Observe each subject through
$U_i=\min(T_i,C_i)$ and $\delta_i=1\{T_i\le C_i\}$, using the event-censor
tie convention in [[def-logrank-risk-set-score-and-test]]. Since every
$C_i\le\tau$, these records lie in $[0,\tau]\times\{0,1\}$. A possible
sample has
$n_1=4$: one event at $t_1\in(0,1)$, two subjects censored at $1.5$, and
one subject censored at $2.5$. It has $n_0=2$: one event at
$t_2\in(2,2.5)$ and one subject censored at $2.5$. Compute the unweighted
logrank score, its plug-in variance, and the empirical product-limit
curves. Verify that this sample pattern has positive probability and that
the population survival curves cross even though the observed score is zero.

## Facts & Assumptions

**Given:** The group hazards, mutually independent event and censoring times with the stated censoring laws, the sample pattern, and the definitions in [[def-logrank-risk-set-score-and-test]] and [[def-nelson-aalen-kaplan-meier-greenwood-estimators]].

[F1] [[def-logrank-risk-set-score-and-test]]: at event time $t_j$, the score contribution is $O_j-d_jY_{1j}/Y_j$ and the plug-in variance contribution is the displayed risk-set formula; with one failure it is $Y_{1j}Y_{0j}/Y_j^2$.

[F2] [[def-nelson-aalen-kaplan-meier-greenwood-estimators]]: in each group, the empirical product-limit estimate is $\widehat S_g(t)=\prod_{0\le u\le t:\,d_g(u)>0}(1-d_g(u)/Y_g(u))$, where $Y_g(u)$ is the number at risk and $d_g(u)$ the number of failures at $u$.

## Proof

1.1 Integrating the hazards gives, for $t\ge1$, $S_1(t)=e^{-(t+1)}$ and $S_0(t)=e^{-(2t-1)}$; for $0\le t\le1$, $S_1(t)=e^{-2t}$ and $S_0(t)=e^{-t}$. On $[0,1]$, $S_1(t)<S_0(t)$ for $t>0$. For $t\ge1$ their ratio is $S_1(t)/S_0(t)=e^{t-2}$, so they meet at $t=2$ and reverse order after it. Each event-time interval $(0,1)$ and $(2,2.5)$ has positive probability, and the specified censor-time values have positive mass. For every subject required to be censored at $c\in\{1.5,2.5\}$, $P(T>c)=S_g(c)>0$ under its group hazard. Mutual independence of all event and censoring times therefore makes the finite intersection defining the sample pattern have positive probability. [given, algebra]

2.1 At $t_1$, $(Y_{1},Y_{0},d,O)=(4,2,1,1)$, so the score contribution is $1-4/6=1/3$ and the plug-in variance contribution is $4\cdot2/6^2=2/9$. The two censorings at $1.5$ leave one group-1 subject at risk. At $t_2$, $(Y_{1},Y_{0},d,O)=(1,2,1,0)$, so the score contribution is $0-1/3=-1/3$ and the plug-in variance contribution is $1\cdot2/3^2=2/9$. Hence $U=0$ and $\widehat V=4/9>0$, giving standardized score zero. By [F2], $\widehat S_1(t)=1-1/4=3/4$ for $t_1\le t\le2.5$ because the only group-1 failure is at $t_1$; and $\widehat S_0(t)=1$ for $t<t_2$, then $1-1/2=1/2$ for $t_2\le t\le2.5$. The censorings contribute no product factors. Thus the empirical curves reverse order at $t_2$. The cancellation of the score and the crossing population hazards show why this one sample statistic does not establish equality of the survival laws. [F1, F2, step 1.1, given, algebra] ∎
