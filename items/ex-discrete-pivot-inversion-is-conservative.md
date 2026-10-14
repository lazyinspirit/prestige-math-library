---
id: ex-discrete-pivot-inversion-is-conservative
kind: example
title: A discrete pivot can give conservative coverage
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-statistical-experiment
  - def-sigma-algebra
  - def-confidence-set-and-coverage
  - def-pivot
  - thm-pivot-inversion-exact-coverage
  - def-probability-measure
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Karl B. Gregory, USC STAT 713, Lecture 14: Confidence Intervals and Sets, slide 9, PDF p. 14"
      url: "https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_14_slides_annotated.pdf"
---

## Example

Let $\Theta=\mathbb Z$, let the measurable observation space be
$(\mathbb Z,2^{\mathbb Z})$, and for each $\theta\in\mathbb Z$ assign
probability $1/3$ to each of
$\theta-1,\theta,\theta+1$. Let $X$ have this law, put
$Q(X;\theta)=X-\theta$, choose nominal level $1-\alpha=4/5$, and use the
central pivot set $B=[-1,1]$. The inverted set is
$$C(X)=\{\eta\in\mathbb Z:|X-\eta|\le1\}=\{X-1,X,X+1\}$$
Its coverage is $1$, so it is conservative for the nominal $4/5$ level.
The atom masses prevent the equal-tail quantiles from calibrating the central
acceptance set to probability $4/5$.

## Facts & Assumptions

**Given:** The finite model and the procedure specified in the Example.

[F1] [[def-probability-measure]]: a probability measure has total mass one.

[F2] [[def-pivot]]: a pivot has a parameter-free sampling law.

[F3] [[def-confidence-set-and-coverage]]: coverage is the probability that the
true parameter belongs to the procedure's output.

[F4] [[thm-pivot-inversion-exact-coverage]]: pivot inversion has at-least
coverage when the acceptance set has probability at least the target level.

[F5] [[def-sigma-algebra]]: a sigma-algebra is an algebra of subsets closed
under countable unions.

[F6] [[def-statistical-experiment]]: an experiment fixes a measurable
observation space and a probability law for each parameter.

## Verification

1.1 The full power set $2^{\mathbb Z}$ is an algebra of subsets closed under countable unions, so it is a sigma-algebra by [F5]. Explicitly set $P_\theta(A)=\frac13(\mathbf1_A(\theta-1)+\mathbf1_A(\theta)+\mathbf1_A(\theta+1))$ for every $A\subseteq\mathbb Z$. These values are nonnegative and have total mass $1$. For a pairwise disjoint sequence $A_m$, $\sum_mP_\theta(A_m)=\frac13\sum_{z\in\{-1,0,1\}}\sum_m\mathbf1_{A_m}(\theta+z) =\frac13\sum_{z\in\{-1,0,1\}}\mathbf1_{\cup_mA_m}(\theta+z) =P_\theta(\cup_mA_m)$. Thus it is countably additive, hence a probability measure, and specifies the experiment family in [F6]. Under $P_\theta$, $Q(X;\theta)$ assigns mass $1/3$ to each of $-1,0,1$, independently of $\theta$; hence $Q$ is a pivot with $P_\theta(Q\in B)=1$. [given, F1, F2, F5, F6, algebra]

2.1 Define $F_Q(t):=P_\theta(Q\le t)$ and the generalized quantile $q_r:=\inf\{t\in\mathbb R:F_Q(t)\ge r\}$. By the definition of $C$, the event $\{\theta\in C(X)\}$ is $\{|X-\theta|\le1\}$, which occurs for all three possible observations. Thus its probability and coverage equal $1$; this exceeds $4/5$, while [F4] also applies since $P_\theta(Q\in B)=1\ge4/5$. The pivot cdf is $0$ below $-1$, $1/3$ on $[-1,0)$, $2/3$ on $[0,1)$, and $1$ from $1$ onward. Thus the generalized $1/10$ and $9/10$ quantiles are $-1$ and $1$, and their closed interval contains all atoms. [given, F3, F4, step 1.1, algebra] ∎
