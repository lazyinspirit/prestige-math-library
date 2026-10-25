---
id: ex-graphical-lasso-penalty-sparsity-threshold
kind: example
title: "Increasing λ creates an exact zero edge in a two-variable graphical lasso"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-graphical-lasso-objective
  - thm-graphical-lasso-convexity-and-kkt
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Friedman, Hastie and Tibshirani, Sparse inverse covariance estimation with the lasso"
      url: "https://hastie.su.domains/Papers/graph.pdf"
      locator: "§2, objective (1) and subgradient equation (6), PDF pp. 2–3"
    - title: "The Elements of Statistical Learning, second edition"
      url: "https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf"
      locator: "§17.3.2, equations (17.21)–(17.23), printed pp. 635–636"
---

## Example

Take observations $x_1=(1,1)^T$ and $x_2=(-1,-1)^T$, so their centered sample covariance is $S=\begin{pmatrix}1&1\\1&1\end{pmatrix}$. Under the all-entry penalty objective, every $\lambda\ge1$ gives the unique maximizer $\Theta=(1+\lambda)^{-1}I_2$ with $\Theta_{12}=0$, while for $0<\lambda<1$ every optimizer has $\Theta_{12}\ne0$. In particular, $\lambda=2$ yields a zero edge and $\lambda=\tfrac12$ yields a nonzero edge.

## Example references

[Friedman, Hastie and Tibshirani, §2](https://hastie.su.domains/Papers/graph.pdf)

[The Elements of Statistical Learning, §17.3.2](https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf)

## Facts & Assumptions

**Given:** The two observations and the all-entry graphical-lasso convention in the Example.

[F1] The centered sample covariance and objective use $\|\Theta\|_1=\sum_{i,j}|\Theta_{ij}|$, including diagonal entries. [[def-graphical-lasso-objective]].

[F2] For $S\succeq0$ and $\lambda>0$, the objective has a unique maximizer characterized by the symmetric entrywise KKT condition; at a zero off-diagonal entry the subgradient lies in $[-1,1]$. [[thm-graphical-lasso-convexity-and-kkt]].

## Verification

**Proof technique:** direct.

1.1 The sample mean is zero, and $S=\tfrac12(x_1x_1^T+x_2x_2^T)=\begin{pmatrix}1&1\\1&1\end{pmatrix}$. This matrix is positive semidefinite because $u^TSu=(u_1+u_2)^2\ge0$. [given, F1, algebra]

2.1 Let $\lambda\ge1$, $a=(1+\lambda)^{-1}$, $\Theta=aI_2$, and let $\Gamma$ have diagonal entries $1$ and off-diagonal entries $-1/\lambda$. Then $\Theta\succ0$, $\Gamma_{12}\in[-1,1]$, and $\Theta^{-1}-S-\lambda\Gamma=0$: the diagonal entries are $(1+\lambda)-1-\lambda=0$ and the off-diagonal entries are $0-1-\lambda(-1/\lambda)=0$. By [F2], this is the unique maximizer, with zero off-diagonal edge. [F2, step 1.1, algebra]

3.1 Let $0<\lambda<1$. If an optimizer had $\Theta_{12}=0$, its off-diagonal KKT equation from [F2] would require $-1-\lambda\Gamma_{12}=0$ for some $\Gamma_{12}\in[-1,1]$, hence $\Gamma_{12}=-1/\lambda<-1$, a contradiction. Existence in [F2] therefore forces every optimizer to have $\Theta_{12}\ne0$. Taking $\lambda=2$ and $\lambda=\tfrac12$ gives the stated two cases. [given, F2, step 1.1, step 2.1, algebra] ∎
