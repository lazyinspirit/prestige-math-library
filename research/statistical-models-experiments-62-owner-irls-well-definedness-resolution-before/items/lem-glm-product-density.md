---
id: lem-glm-product-density
kind: lemma
title: The product response law has the product density
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-glm-observation-family
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-measure-with-density
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - thm-arithmetic-and-lattice-operations-preserve-measurability
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Philippe Rigollet, MIT 18.650 Statistics for Applications, Lecture 10: Generalized Linear Models, PDF pp. 16–21, 30–32"
      url: "https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/dff89368051a5feae72b39c6422d0752_MIT18_650F16_GLM.pdf"
    - title: "Ryan Tibshirani, Generalized Linear Models, CMU Advanced Methods for Data Analysis, PDF pp. 1–5"
      url: "https://www.stat.cmu.edu/~ryantibs/advmethods/notes/glm.pdf"
---

## Statement

In the setup of [[def-glm-observation-family]], let $P_\theta=\bigotimes_{i=1}^nP_{i,\theta_i,\phi}$ and $\nu=\bigotimes_{i=1}^n\nu_i$. Then the joint sampling law has density

$$q_\theta(y_1,\ldots,y_n)=\prod_{i=1}^n f_i(y_i;\theta_i,\phi)$$

relative to $\nu$. On the common product support $\prod_iS_i$, its log likelihood is $\sum_i\log f_i(y_i;\theta_i,\phi)$.

## Facts & Assumptions

**Given:** The finite collection of sigma-finite component spaces, normalized densities, fixed supports, and product sampling law in [[def-glm-observation-family]].

[F1] [[def-glm-observation-family]]: each $f_i$ is a nonnegative measurable probability density relative to $\nu_i$, and the joint sampling law is the finite product of the component laws.

[F2] [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]: the finite product sigma algebra is generated recursively by measurable rectangles.

[F3] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]: for sigma-finite factors, the product measure is a measure and satisfies $(\nu_1\times\nu_2)(A_1\times A_2)=\nu_1(A_1)\nu_2(A_2)$.

[F4] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: finite pointwise products of measurable real-valued functions are measurable.

[F5] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: for nonnegative product-measurable functions on sigma-finite product spaces, the integral equals either iterated integral.

[F6] [[def-measure-with-density]]: if $q$ is nonnegative measurable, $q\,d\nu$ is the measure $A\mapsto\int_Aq\,d\nu$.

[F7] [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]: measures agreeing on a generating pi-system and on an increasing finite-measure exhaustion from that pi-system are equal.

## Proof

1.1 For each coordinate projection $\pi_i(y)=y_i$, the preimage of a measurable set is a measurable rectangle, so $f_i\circ\pi_i$ is product-measurable by [F2]. Their finite product $q_\theta=\prod_i(f_i\circ\pi_i)$ is product-measurable by [F4]. [F1, F2, F4]

2.1 Construct $\nu$ and $P_\theta$ by repeated finite products using [F3]. Repeated Tonelli [F5], applied to the nonnegative factors, gives $\int_{\prod_iA_i}q_\theta\,d\nu=\prod_i\int_{A_i}f_i\,d\nu_i=\prod_iP_{i,\theta_i,\phi}(A_i)=P_\theta(\prod_iA_i)$ for every measurable rectangle. Taking the rectangle to be the whole product and using normalization from [F1] gives $\int q_\theta\,d\nu=1$. [F1, F3, F5, step 1.1]

3.1 By [F6], $Q(A):=\int_Aq_\theta\,d\nu$ is a probability measure, and step 2.1 shows that $Q$ and $P_\theta$ agree on the rectangle pi-system. That system contains the whole product, which is a one-set increasing finite-measure exhaustion for both probability measures, so [F2] and [F7] give $Q=P_\theta$. On $\prod_iS_i$, every factor is positive by [F1], hence taking the logarithm of the product gives the stated sum. [F1, F2, F6, F7, step 2.1, algebra] ∎
