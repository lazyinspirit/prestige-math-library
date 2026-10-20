---
id: def-cost-complexity-pruning
kind: definition
title: "Cost-complexity criteria for subtrees"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
dependency_level: 1
deps:
  - def-empirical-decision-tree
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, 2nd ed., §9.2.2–9.2.3'
      url: 'https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS'
    - title: 'MIT OpenCourseWare, 15.097, Lecture 8: Decision trees, slides 13 and 16'
      url: 'https://ocw.mit.edu/courses/15-097-prediction-machine-learning-and-statistics-spring-2012/f5678de0e329ce097fc6ec6182ebaea2_MIT15_097S12_lec08.pdf'
pipeline_run: machine-learning-all-101-2026-10-19
---

## Definition

Let $T_0$ be a fixed finite binary tree grown on the sample from an empirical decision tree. A subtree $T\subseteq T_0$ is obtained by collapsing zero or more internal nodes and all their descendants to leaves. For each leaf $m$ of $T$, let $N_m$ be its sample count and let $Q_m(T)$ be its regression squared-error impurity or its chosen classification impurity, computed as in the empirical decision-tree definition. Define the total training impurity $R(T)=\sum_{m\in\mathrm{leaves}(T)}N_mQ_m(T)$, the terminal-node count $|T|$, and for $\alpha\ge0$ the cost-complexity criterion $C_\alpha(T)=R(T)+\alpha|T|$.

For a current nonterminal node $t$, let $I_t$ be its sample set and let $T_t$ be its current descendant subtree. Let $R(t)=N_tQ_t$ be the training impurity if $t$ is collapsed to a leaf, using the same response or class rule as for a leaf; let $R(T_t)$ be the sum of the impurities of the current descendant leaves. Define the weakest-link quotient $g(t)=[R(t)-R(T_t)]/(|T_t|-1)$. The denominator is the number of leaves removed by collapsing $t$. This definition makes no claim that a weakest-link sequence globally minimizes $C_\alpha$ for every $\alpha$ or that validation selection guarantees test-risk performance.

## Definition references

[[def-empirical-decision-tree|Regression and classification leaf impurities and sample counts]]

[Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, §9.2.2–9.2.3, printed pp. 308–310](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[MIT OpenCourseWare, 15.097, Lecture 8: Decision trees, slides 13 and 16](https://ocw.mit.edu/courses/15-097-prediction-machine-learning-and-statistics-spring-2012/f5678de0e329ce097fc6ec6182ebaea2_MIT15_097S12_lec08.pdf)

## Remark

Choosing $\alpha$ by validation or cross-validation is a data-selection procedure; by itself, that choice does not guarantee test-risk performance.
