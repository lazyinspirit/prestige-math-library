---
id: alg-gradient-boosting
kind: algorithm
title: "Exact-line-search gradient tree boosting on a finite sample"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
dependency_level: 4
deps:
  - def-negative-gradient-pseudo-residual
  - lem-pseudo-residuals-are-negative-score-gradient
  - def-empirical-decision-tree
  - alg-cart-greedy-split
  - thm-cart-greedy-split-is-best-listed-split-and-terminates
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, 2nd ed., 12th printing'
      url: 'https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS'
    - title: 'Alexey Natekin and Alois Knoll, "Gradient boosting machines, a tutorial," Frontiers in Neurorobotics 7 (2013), Article 21'
      url: 'https://www.frontiersin.org/journals/neurorobotics/articles/10.3389/fnbot.2013.00021/full'
pipeline_run: machine-learning-all-101-2026-10-19
---

## Definition

Fix a finite regression sample $(x_i,y_i)_{i=1}^N$ with $N\ge1$, $x_i\in\mathbb R^p$ for a finite $p\ge1$, and $y_i\in\mathcal Y$. Let $\ell:\mathcal Y\times\mathbb R\to\mathbb R$ be a finite-valued per-observation loss, differentiable in its second argument at every score used. Choose a finite round count $M\ge0$ and finite integer tree-depth cap $d_{\max}\ge0$. The algorithm is admissible only when the following required minima are attained: an initial constant minimizer and, at every round, a line minimizer in each terminal leaf. For any admitted run, choose any one such minimizer at each finite stage.

Initialize $f_0(x)=c_0$ with
$$c_0\in\arg\min_{c\in\mathbb R}\sum_{i=1}^N\ell(y_i,c).$$
For each round $m=1,\ldots,M$, perform the following steps.

1. For each observation compute the negative score derivative
$$r_{im}=-\partial_2\ell\bigl(y_i,f_{m-1}(x_i)\bigr).$$

2. Run finite-depth CART regression-tree growth, using squared error and depth cap $d_{\max}$, on the responses $r_{im}$ at features $x_i$. Let its nonempty terminal feature regions be $R_{1m},\ldots,R_{J_m m}$; their training-index sets partition $\{1,\ldots,N\}$. This tree fit approximates the unrestricted negative score gradient. Its fitted leaf means are used to determine the regression-tree fit and regions, but are not the boosting update offsets.

3. For each leaf region choose an attained exact line minimizer
$$\gamma_{jm}\in\arg\min_{\gamma\in\mathbb R}\sum_{i:x_i\in R_{jm}}\ell\bigl(y_i,f_{m-1}(x_i)+\gamma\bigr).$$
In particular, zero is an admissible comparison offset.

4. Update
$$f_m(x)=f_{m-1}(x)+\sum_{j=1}^{J_m}\gamma_{jm}\mathbf 1\{x\in R_{jm}\}.$$

The output is $f_M$. Because the run has finitely many rounds and finitely many leaves, choosing one attained minimizer at each stage requires no axiom of choice. The defined variant uses the full training sample and exact leafwise line minimization; shrinkage and subsampling are separate variants. This definition asserts no convergence or generalization result.

## Definition references

[[def-negative-gradient-pseudo-residual|Finite-sample pseudo-residual and score-loss conventions]]

[[lem-pseudo-residuals-are-negative-score-gradient|The pseudo-residual vector is the negative score-space gradient]]

[[def-empirical-decision-tree|Finite regression-tree regions and nonempty leaf sample sets]]

[[alg-cart-greedy-split|The finite-depth CART regression-tree fit]]

[[thm-cart-greedy-split-is-best-listed-split-and-terminates|Finite output and nonempty leaves]]

[Trevor Hastie, Robert Tibshirani, and Jerome Friedman, *The Elements of Statistical Learning*, 2nd ed., §§10.9–10.10.3, printed pp. 353–361](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Alexey Natekin and Alois Knoll, “Gradient boosting machines, a tutorial,” §§2.3–2.4](https://www.frontiersin.org/journals/neurorobotics/articles/10.3389/fnbot.2013.00021/full)
