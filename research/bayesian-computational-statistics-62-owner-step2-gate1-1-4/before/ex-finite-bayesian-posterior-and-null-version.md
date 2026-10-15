---
id: ex-finite-bayesian-posterior-and-null-version
kind: example
title: A finite Bayesian update and a null-data posterior version
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-bayesian-model-as-prior-and-sampling-kernel
  - def-bayesian-posterior-as-regular-conditional-law
  - def-measure-kernel-and-probability-kernel
  - lem-prior-and-model-kernel-define-joint-law
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 2 §§2.1.1–2.1.4"
      url: https://www.bayesrulesbook.com/chapter-2.html
    - title: "Andrew Gelman, John B. Carlin, Hal S. Stern, David B. Dunson, Aki Vehtari, and Donald B. Rubin, Bayesian Data Analysis, 3rd ed., Chapter 1 §1.3"
      url: https://sites.stat.columbia.edu/gelman/book/BDA3.pdf
---

## Example

Let $\Theta=\{0,1\}$ with prior $\Pi(1)=1/3$, and let $Y=\{0,1,2\}$ have its power-set sigma-algebra. Given $\theta=1$, assign probabilities $(1/4,3/4,0)$ to $(0,1,2)$; given $\theta=0$, assign probabilities $(3/4,1/4,0)$. The posterior probability of $\theta=1$ is $1/7$ after data $0$ and $3/5$ after data $1$. Data value $2$ has prior-predictive probability zero, so two versions may assign different posterior laws there.

## Facts & Assumptions

**Given:** The finite parameter and data spaces and the prior and sampling probabilities specified in the example.

[F1] A proper Bayesian model consists of a prior probability and a parameter-measurable sampling probability kernel. [[def-bayesian-model-as-prior-and-sampling-kernel]]

[F2] A data-indexed posterior kernel satisfies the rectangle conditional-law identity; its values on prior-predictive null data may vary by version. [[def-bayesian-posterior-as-regular-conditional-law]]

[F3] A proper prior and sampling kernel define the joint law by $J(A\times B)=\int_AK(\theta,B)\,\Pi(d\theta)$. [[lem-prior-and-model-kernel-define-joint-law]]

## Verification

**Given:** The assumptions and finite model in the example.

1.1 The joint masses are $J(1,0)=1/12$, $J(0,0)=1/2$, $J(1,1)=1/4$, and $J(0,1)=1/6$, while both masses at data $2$ are zero. Therefore $J_Y(0)=7/12$, $J_Y(1)=5/12$, and $J_Y(2)=0$. [given, F1, F3, algebra]

2.1 Define $\Pi_0(1)=1/7$, $\Pi_1(1)=3/5$, and choose any probability law for $\Pi_2$; set $\Pi_y(0)=1-\Pi_y(1)$. Each $\Pi_y$ is a probability, and measurability is automatic on the finite power-set data space. The displayed ratios give $\Pi_0(1)J_Y(0)=J(1,0)$ and $\Pi_1(1)J_Y(1)=J(1,1)$; subtraction from the marginal gives the same identities for parameter value $0$. [F1, F2, step 1.1, algebra, construct]

3.1 For any $A\subseteq\Theta$ and $B\subseteq Y$, summing the singleton identities in step 2.1 over $y\in B$ gives $\int_B\Pi_y(A)\,J_Y(dy)=J(A\times B)$; the zero-mass term at $y=2$ contributes zero for every choice of $\Pi_2$. Thus every such kernel is a data-indexed posterior version by [F2]. In particular, $\Pi_2=\delta_0$ and $\widetilde\Pi_2=\delta_1$, with the same values at $0,1$, are distinct versions of the same posterior law. [F2, step 1.1, step 2.1, algebra] ∎
