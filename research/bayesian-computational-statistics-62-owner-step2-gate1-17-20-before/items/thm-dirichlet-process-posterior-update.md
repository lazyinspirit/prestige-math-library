---
id: thm-dirichlet-process-posterior-update
kind: theorem
title: "Dirichlet-process posterior update"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - def-standard-borel-space
  - def-finite-sigma-finite-and-semifinite-measures
  - def-dirichlet-process
  - thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure
  - lem-dirichlet-aggregation-under-coarsening
  - thm-dirichlet-multinomial-conjugate-update
  - def-dirichlet-distribution
  - def-bayesian-model-as-prior-and-sampling-kernel
  - def-bayesian-posterior-as-regular-conditional-law
  - def-identically-distributed-and-iid-random-variables
  - def-independent-random-elements
  - thm-independent-random-elements-have-product-joint-law
  - def-measure-kernel-and-probability-kernel
  - lem-finite-products-of-probability-kernels
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - lem-prior-and-model-kernel-define-joint-law
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-measurable-function-between-measurable-spaces
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - thm-nonnegative-weighted-sums-of-measures
  - def-probability-measure
  - def-law-or-distribution-of-a-random-element
  - def-conditional-law-given-a-random-element
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-pi-system
  - thm-dynkin-pi-lambda
  - lem-finite-measure-uniqueness-on-a-pi-system
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is carried from the normalized-gamma existence theorem and supplies the Countable Choice assumed by the finite-dimensional Dirichlet-multinomial update."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas S. Ferguson, A Bayesian Analysis of Some Nonparametric Problems, 1973, Sections 2 and 3"
      url: "https://users.wpi.edu/~balnan/Ferguson1973.pdf"
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process, 2017, Chapter 3"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
---

## Statement

Assume AC. Let $(\mathsf X,\mathcal A)$ be standard Borel, let $\alpha$ be a
finite nonzero measure, draw $G\sim DP(\alpha)$, and, conditionally on $G$,
draw $X_1,\ldots,X_n$ with joint law $G^{\otimes n}$, where $n\ge1$. Then
$$K(x_1,\ldots,x_n;\,\cdot)=DP\!\left(\alpha+\sum_{i=1}^n\delta_{x_i}\right)$$
is a measurable data-indexed posterior kernel version. It satisfies the
posterior disintegration identity on the evaluation sigma-algebra of
$\mathcal P(\mathsf X)$ and $\mathcal A^{\otimes n}$. On prior-predictive
null data sets its values are a version choice; the displayed formula is
well-defined there but is not asserted to be uniquely forced.

## Facts & Assumptions

**Given:** Full AC; the standard Borel space $(\mathsf X,\mathcal A)$; the finite nonzero measure $\alpha$; and the proper model with prior $DP(\alpha)$ and conditional sample kernel $G\mapsto G^{\otimes n}$.

[A1] Full AC is assumed. [[def-axiom-of-choice]].

[A2] AC implies Countable Choice, required by the finite-dimensional Dirichlet density normalization and conjugacy theorem. [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]].

[F1] The sample space is standard Borel, $\alpha$ is finite and nonzero, and $DP(\alpha)$ is the unique law on evaluation-measurable probability measures with its finite-partition Dirichlet laws; cells of zero base mass have mass zero. [[def-standard-borel-space]] [[def-finite-sigma-finite-and-semifinite-measures]] [[def-dirichlet-process]] [[thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure]].

[F2] IID means mutual independence and identical marginal law; the conditional sample kernel is the finite product $G^{\otimes n}$. [[def-identically-distributed-and-iid-random-variables]] [[def-independent-random-elements]] [[thm-independent-random-elements-have-product-joint-law]] [[lem-finite-products-of-probability-kernels]] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]].

[F3] A prior probability and a probability sampling kernel define a joint law by kernel integration. [[def-bayesian-model-as-prior-and-sampling-kernel]] [[def-measure-kernel-and-probability-kernel]] [[lem-prior-and-model-kernel-define-joint-law]].

[F4] A data-indexed posterior kernel is a probability kernel satisfying the joint-law rectangle identity; its values on a data-marginal null set are not fixed by that identity. [[def-bayesian-posterior-as-regular-conditional-law]].

[F5] For positive Dirichlet parameters and an admissible multinomial count vector, the finite-dimensional posterior is Dirichlet with parameters $a_j+y_j$; the evidence is finite positive. The supplier assumes Countable Choice. [[thm-dirichlet-multinomial-conjugate-update]] [[def-dirichlet-distribution]].

[F6] Grouping Dirichlet coordinates adds their parameters. [[lem-dirichlet-aggregation-under-coarsening]].

[F7] Finite measures agreeing on a generating pi-system and the whole space are equal. [[def-pi-system]] [[lem-finite-measure-uniqueness-on-a-pi-system]] [[thm-dynkin-pi-lambda]].

[F8] Each $\delta_x$ is a probability measure, and a finite sum of finite measures with nonnegative coefficients is a measure; hence $\beta_x=\alpha+\sum_i\delta_{x_i}$ is finite and nonzero. [[def-dirac-measure]] [[prop-dirac-measure-is-a-probability-measure]] [[thm-nonnegative-weighted-sums-of-measures]] [[def-finite-sigma-finite-and-semifinite-measures]].

[F9] If $P_j\in\mathcal A$, the indicator $x_i\mapsto\mathbf1_{P_j}(x_i)$ is measurable, so each finite count-pattern fiber is measurable. [[def-measurable-function-between-measurable-spaces]].

[F10] Measurable data rectangles form a generating pi-system for the finite product sigma-algebra $\mathcal A^{\otimes n}$. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]].

## Proof

**Given:** The hypotheses in the Statement.

1.1 For $x=(x_1,\ldots,x_n)$ put $\beta_x=\alpha+\sum_{i=1}^n\delta_{x_i}$. This is a finite nonzero measure because its total mass is $\alpha(\mathsf X)+n$ by [F8]. The existence theorem [F1] therefore defines $DP(\beta_x)$ for every $x$. [A1, given, F1, F8, algebra]

1.2 Fix a finite evaluation cylinder $C=\{G:(G(A_1),\ldots,G(A_s))\in H\}$ with Borel $H$, and form the finite Boolean partition generated by $A_1,\ldots,A_s$. On each cell $P_j$, the updated parameter is $\beta_x(P_j)=\alpha(P_j)+\sum_i\mathbf1_{P_j}(x_i)$. Each count is a measurable finite-valued function of $x$ by [F9], so $x\mapsto DP(\beta_x)(C)$ is measurable: it is constant on each of finitely many count-pattern preimages. [F1, F9, given, construct]

1.3 For each $G\in\mathcal P(\mathsf X)$, the map $A\mapsto G(A)$ is a probability kernel from the evaluation-measurable space $\mathcal P(\mathsf X)$ to $(\mathsf X,\mathcal A)$. Its finite product $G^{\otimes n}$ is a probability kernel by [F2]; on rectangles $D_1\times\cdots\times D_n$ it has value $\prod_iG(D_i)$, which is evaluation-measurable. The proper model in [F3] therefore gives a joint probability $J$ for $(G,X_{1:n})$ and its data marginal $M$. [F2, F3, given, construct]

1.4 Fix a finite-partition cylinder $C$ and a data rectangle $D=D_1\times\cdots\times D_n$. Refine the partition defining $C$ by all $D_i$ to obtain a finite measurable partition $P_1,\ldots,P_m$ of $\mathsf X$. The data rectangle is a disjoint union of ordered cell-pattern blocks $P_{j_1}\times\cdots\times P_{j_n}$. For one such block let $y_j=\#\{i:j_i=j\}$. If $y_j>0$ for a cell with $\alpha(P_j)=0$, then $G(P_j)=0$ almost surely by [F1], so the block has prior-predictive mass zero. [F1, given, construct]

2.1 The finite evaluation cylinders form a generating pi-system. The class of sets $C$ for which $x\mapsto DP(\beta_x)(C)$ is measurable contains this pi-system, contains the whole space, is closed under complements, and is closed under countable disjoint unions by pointwise limits of partial sums. Dynkin's theorem [F7] gives measurability on the full evaluation sigma-algebra. Each section is a probability measure by [F1], so $K$ is a probability kernel. [F1, F7, step 1.2, construct]

2.2 Otherwise omit cells with $\alpha(P_j)=0$ (their counts are zero). On the remaining cells the prior vector is Dirichlet with positive parameters $a_j=\alpha(P_j)$. Given that vector, the likelihood of this particular ordered pattern is $\prod_jG(P_j)^{y_j}$, a constant multiple $\prod_jy_j!/n!$ of the multinomial count likelihood. By [A2] and [F5], its posterior vector is Dirichlet$(a_1+y_1,\ldots,a_m+y_m)$ with positive finite evidence. Coarsening to the cells defining $C$ gives the same cylinder probability as $DP(\beta_x)$ by [F6]. This probability is constant over the ordered block because its cell counts are fixed. [A2, F1, F5, F6, step 1.4, algebra]

3.1 Summing step 2.2 over the ordered blocks contained in $D$ gives $J(C\times D)=\int_DK(x,C)\,M(dx)$ for every finite-partition cylinder $C$ and data rectangle $D$. For fixed such $C$, the two sides define finite measures of $D$; their total masses agree by taking $D=\mathsf X^n$. Finite-measure uniqueness [F7] extends the identity to every $D\in\mathcal A^{\otimes n}$. [F3, F7, F10, step 2.2, algebra]

4.1 Now fix any $D\in\mathcal A^{\otimes n}$. The set functions $C\mapsto J(C\times D)$ and $C\mapsto\int_DK(x,C)\,M(dx)$ are finite measures on the evaluation sigma-algebra; the second is a measure because $K$ is a probability kernel. They have common total mass $M(D)$ and agree on every finite-partition cylinder by step 3.1. These cylinders form a generating pi-system, so [F7] extends equality to every measurable $C$. By [F4], $K(x;\cdot)$ is the claimed posterior version. Null data blocks contribute zero to both sides, so the proof imposes no pointwise uniqueness there. [F4, F7, step 2.1, step 3.1, algebra] ∎
