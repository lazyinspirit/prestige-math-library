---
id: def-margin-preserving-compression
kind: definition
title: "Margin-preserving compression of score classifiers"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-supervised-learning-problem
  - def-measurable-space
  - def-population-and-empirical-risk
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-measurable-function-between-measurable-spaces
  - thm-arithmetic-and-lattice-operations-preserve-measurability
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is assumed or used."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Sanjeev Arora, Rong Ge, Behnam Neyshabur, and Yi Zhang, Stronger Generalization Bounds for Deep Nets via a Compression Approach, §2, Definitions 1–2"
      url: "https://proceedings.mlr.press/v80/arora18b/arora18b.pdf"
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, Chapter 4 §4.2"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
---

## Definition

Let $(\mathcal X,\Sigma_X)$ be a nonempty measurable instance space, let $\mathcal Y=\{1,\ldots,K\}$ have its discrete sigma-algebra with $K\ge2$, and equip $\mathcal X\times\mathcal Y$ and its finite powers with their product sigma-algebras. Let $P$ be a probability law on $\mathcal X\times\mathcal Y$. For an integer $m\ge1$, write a sample as $S=((X_1,Y_1),\ldots,(X_m,Y_m))$. A score map $u=(u_1,\ldots,u_K):\mathcal X\to\mathbb R^K$ is **coordinatewise measurable** when each $u_k:(\mathcal X,\Sigma_X)\to(\mathbb R,\mathcal B(\mathbb R))$ is measurable. Define its classifier by the least-index tie rule

$$h_u(x):=\min\{k\in\mathcal Y:u_k(x)=\max_{j\in\mathcal Y}u_j(x)\}$$

and its margin on label $y$ by

$$M_u(x,y):=u_y(x)-\max_{j\in\mathcal Y,\ j\ne y}u_j(x).$$

For each $k\in\mathcal Y$,
$$\{x:h_u(x)=k\}=\bigcap_{j<k}\{x:u_k(x)>u_j(x)\}\cap\bigcap_{j>k}\{x:u_k(x)\ge u_j(x)\},$$
and each comparison set is measurable; an intersection over no indices means $\mathcal X$. Since $\mathcal Y$ is finite, $M_u$ is measurable on $\mathcal X\times\mathcal Y$ as well. The population zero-one risk is
$$R_P(h_u):=P\{(x,y):h_u(x)\ne y\}.$$
For a sample $S$ of length $m$ and $\gamma\ge0$, the empirical margin loss is
$$\widehat L_\gamma(u;S):=\frac1m\sum_{i=1}^m\mathbf1\{M_u(X_i,Y_i)\le\gamma\}.$$
The event defining $R_P(h_u)$ is measurable by measurability of $h_u$.

Fix integers $q\ge0$ and $r\ge1$. A fixed-helper finite parameter codebook consists of a helper string $s$ fixed independently of the sample, finite nonempty sets $D_1,\ldots,D_q$ with $|D_j|\le r$, a nonempty code set $\mathcal A\subseteq\prod_{j=1}^qD_j$, and one coordinatewise measurable decoder score map $g_{s,a}:\mathcal X\to\mathbb R^K$ for each $a\in\mathcal A$. For $q=0$, the empty product is the singleton containing the empty tuple. The codebook and all its decoders are fixed independently of the sample, so $|\mathcal A|\le r^q$.

Let $F:(\mathcal X\times\mathcal Y)^m\times\mathcal X\to\mathbb R^K$ be measurable for the product sigma-algebra on its domain and the Borel sigma-algebra on $\mathbb R^K$. Let $\alpha:(\mathcal X\times\mathcal Y)^m\to\mathcal A$ be measurable, where $\mathcal A$ has its discrete sigma-algebra, and write $f_S(x):=F(S,x)$. For $\epsilon>0$, the sample-dependent trained score map $f_S$ is $\epsilon$-compressible by this codebook on a sample $S$ if
$$\max_{k\in\mathcal Y}|f_S(X_i)_k-g_{s,\alpha(S)}(X_i)_k|\le\epsilon\qquad(1\le i\le m).$$
The code $\alpha(S)$ may depend on $S$; the helper string, codebook, and decoders remain fixed independently of the sample.

## Definition references

[[def-measurable-space]]: a measurable space consists of a set equipped with a sigma-algebra.

[[def-supervised-learning-problem]]: supplies measurable instance and label spaces, a joint probability law, measurable predictors, and a measurable loss.

[[def-population-and-empirical-risk]]: population risk is the nonnegative integral of the loss, and empirical risk is its finite sample average.

[[def-measurable-function-between-measurable-spaces]]: measurability is the preimage condition.

[[def-product-sigma-algebra-and-finite-product-sigma-algebras]]: finite product sigma-algebras are generated recursively by measurable rectangles.

[[thm-arithmetic-and-lattice-operations-preserve-measurability]]: finite maxima and arithmetic combinations of measurable real-valued functions are measurable.

[Arora et al., §2, Definitions 1–2](https://proceedings.mlr.press/v80/arora18b/arora18b.pdf): score closeness on training inputs with a finite code family and a helper fixed before sampling.

[Shalev-Shwartz and Ben-David, Chapter 4 §4.2](https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf): finite measurable hypothesis classes and empirical/population zero-one risk conventions.

## Facts & Assumptions

**Given:** The measurable space $(\mathcal X,\Sigma_X)$, the finite discrete label space $\mathcal Y$, the product sigma-algebras, the law $P$, and a coordinatewise measurable score map $u$.

[F1] Finite maxima and arithmetic combinations of measurable real-valued functions are measurable. [[thm-arithmetic-and-lattice-operations-preserve-measurability]]

[F2] A map is measurable when preimages of measurable sets are measurable. [[def-measurable-function-between-measurable-spaces]]

[F3] The product sigma-algebra is generated by measurable rectangles, and finite products use the recursively formed product sigma-algebra. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]

## Verification

**Given:** The hypotheses in the Definition.

1.1 For each $k$, the displayed fiber formula expresses $h_u^{-1}(\{k\})$ as a finite intersection. Each comparison set is the preimage of $(0,\infty)$ or $[0,\infty)$ under the measurable difference $u_k-u_j$, which is measurable by [F1] and [F2]. Hence every singleton fiber is measurable, and because $\mathcal Y$ is finite and discrete, $h_u$ is measurable. [given, F1, F2, algebra]

2.1 For each $y\in\mathcal Y$, the function $x\mapsto M_u(x,y)$ is measurable by finite maximization and subtraction in [F1]. For every Borel set $B\subseteq\mathbb R$, its inverse image under $M_u$ is the finite union over $y$ of $\{x:M_u(x,y)\in B\}\times\{y\}$, which belongs to the product sigma-algebra by [F3]. The error event is the finite union $\bigcup_{k\in\mathcal Y}h_u^{-1}(\{k\})\times(\mathcal Y\setminus\{k\})$, so it is measurable too. Thus the risk is defined as the probability of a measurable event. [given, F1, F3, step 1.1, algebra] ∎

