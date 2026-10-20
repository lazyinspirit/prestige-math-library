---
id: lem-finite-list-empirical-risk-selector-is-measurable
kind: lemma
title: "The finite-list ERM selector is measurable"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-finite-list-empirical-risk-minimizer
  - def-empirical-risk-minimizer
  - lem-population-and-empirical-risk-are-measurable
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-extended-real-valued-measurable-function
  - def-measurable-function-between-measurable-spaces
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, Chapter 3 Remark 3.1"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
---

## Statement

For a sample of positive length, a finite ordered nonempty list of measurable predictors, and finite tolerance $\eta\ge0$, let $J(S)$ be the index returned by the finite-list empirical-risk algorithm. Then $J$ is measurable into the finite index set with its discrete sigma-algebra, the evaluation map $(S,x)\mapsto f_{J(S)}(x)$ is jointly measurable, and the returned predictor is an $\eta$-approximate empirical risk minimizer as defined in the algorithm's input conditions. When $\eta=0$, it is an exact minimizer.

## Facts & Assumptions

**Given:** A supervised prediction problem, sample size $m\ge1$, an ordered list $(f_1,\ldots,f_n)$ of measurable predictors with $n\ge1$, and finite tolerance $\eta\ge0$.

[F1] The algorithm returns index $1$ when every list risk is infinite; otherwise it returns the first finite-risk index within $\eta$ of the finite list minimum. [[alg-finite-list-empirical-risk-minimizer]]

[F2] For each fixed predictor, the empirical-risk map on the sample space is extended-real measurable. [[lem-population-and-empirical-risk-are-measurable]]

[F3] A finite-list exact or approximate ERM is defined by its empirical risk relative to the list infimum, with a separate all-infinite case. [[def-empirical-risk-minimizer]]

[F4] Finite sums of measurable extended-real functions are measurable when pointwise defined; real scalar multiples of real-valued measurable functions, functions $f\mathbf1_E$ for nonnegative measurable extended-real $f$ and measurable $E$, countable infima, and increasing pointwise limits of measurable extended-real functions are measurable. [[prop-closure-properties-of-measurable-functions-used-by-the-integral]]

[F5] The finite sample-and-instance product sigma-algebra contains measurable rectangles and is closed under finite unions and differences. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]

[F6] An extended-real function is measurable when preimages of Borel sets, including the finite-value ray, are measurable. [[def-extended-real-valued-measurable-function]]

[F7] A map between measurable spaces is measurable exactly when preimages of measurable sets are measurable. [[def-measurable-function-between-measurable-spaces]]

## Proof

1.1 For $j=1,\ldots,n$, put $r_j(S)=\widehat R_S(f_j)$ and $r_*(S)=\min_j r_j(S)$. By [F2] each $r_j$ is measurable. The finite minimum is the infimum of the measurable sequence $r_1,\ldots,r_n,r_n,r_n,\ldots$, so [F4] makes $r_*$ measurable. Thus $E:=\{S:r_*(S)<+\infty\}$ is measurable by [F6]. [F2, F4, F6]

2.1 Define finite nonnegative measurable functions $u_j:=r_j\mathbf1_{\{r_j<+\infty\}}$ and $u_*:=r_*\mathbf1_E$. Their measurability follows from [F4], including the convention $0\cdot(+\infty)=0$. The sets $\{r_j<+\infty\}$ and $E$ are measurable by [F6]. On $E$, $u_*=r_*$ and each finite $r_j$ equals $u_j$, so $C_j:=E\cap\{r_j<+\infty\}\cap\{u_j-u_*\le\eta\}$ is measurable by [F4, F6]. At every $S\in E$ a finite minimizing index lies in some $C_j$. [F1, F4, F6, step 1.1]

3.1 The algorithm's selected-index events are $\{J=1\}=E^c\cup C_1$ and, for $j>1$, $\{J=j\}=C_j\setminus\bigcup_{k<j}C_k$. They are measurable by step 2.1, so $J$ is measurable into the finite discrete index set by [F7]. For each measurable $B\subseteq\mathsf A$, the evaluation preimage is $\bigcup_{j=1}^n(\{J=j\}\times f_j^{-1}(B))$, a finite union of measurable rectangles by [F5]; hence $(S,x)\mapsto f_{J(S)}(x)$ is jointly measurable by [F7]. [F1, F5, F7, step 2.1]

4.1 On $E^c$ all list risks are $+\infty$, so the returned first predictor is an exact minimizer by [F3]. On $E$, at least one finite minimizer exists in the finite list, belongs to some $C_j$, and the first selected $C_j$ has finite risk at most $r_*+\eta$ by its definition. If $\eta=0$, this inequality forces the selected risk to equal $r_*$. Thus the output has the asserted ERM property in both branches. [F1, F3, given, step 1.1, step 2.1] ∎
