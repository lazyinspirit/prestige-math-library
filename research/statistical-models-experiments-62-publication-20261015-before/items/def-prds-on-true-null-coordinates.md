---
id: def-prds-on-true-null-coordinates
kind: definition
title: "Positive regression dependence on true-null coordinates (PRDS)"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-p-value
  - def-borel-sigma-algebra
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-standard-borel-space
  - lem-unit-interval-is-standard-borel
  - def-conditional-law-given-a-random-element
  - lem-finite-products-of-standard-borel-spaces-are-standard-borel
  - lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable
  - thm-existence-of-regular-conditional-distributions-for-standard-borel-targets
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Yoav Benjamini and Daniel Yekutieli, The Control of the False Discovery Rate in Multiple Testing under Dependency, The Annals of Statistics 29(4) (2001), Section 2.2 and Theorem 1.2"
      url: "https://www.researchgate.net/publication/38348313_The_control_of_the_false_discovery_rate_in_multiple_testing_under_dependency"
    - title: "Yoav Benjamini, Discovering the False Discovery Rate, full 75-slide lecture, slides 33–35"
      url: "https://sites.uclouvain.be/IAP-Stat-Phase-V-VI/PhaseV/download/Leoven1.pdf"
---

## Definition

Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space, let $m\ge1$, and let $\mathbf P=(P_1,\ldots,P_m):\Omega\to[0,1]^m$ be a random vector whose coordinates are p-value statistics ([[def-p-value]]). Fix a designated true-null index set $I_0\subseteq\{1,\ldots,m\}$. For $i\in I_0$, write $\mu_i$ for the law of $P_i$ under $\mathbb P$ and define its support relative to $[0,1]$ by

$$\operatorname{supp}(\mu_i):=\{x\in[0,1]:\mu_i(U)>0\text{ for every relatively open neighborhood }U\text{ of }x\}.$$

Give each coordinate $[0,1]$ its trace Borel sigma-algebra ([[def-borel-sigma-algebra]]) and give $[0,1]^m$ the finite product sigma-algebra ([[def-product-sigma-algebra-and-finite-product-sigma-algebras]]). In this definition, “Borel set” means a member of that product sigma-algebra; thus “increasing measurable set” means coordinatewise increasing in this stated structure. The unit-interval lemma proves that $[0,1]$ with this trace Borel structure is standard Borel ([[lem-unit-interval-is-standard-borel]]). The finite-product result then makes $[0,1]^m$ with the specified product sigma-algebra a standard-Borel target ([[def-standard-borel-space]], [[lem-finite-products-of-standard-borel-spaces-are-standard-borel]]); its finite-product proof uses only finite choice in ZF. Under the Axiom of Choice ([[def-axiom-of-choice]]), this target has a regular conditional distribution given $\sigma(P_i)$, and the conditional-law factorization result supplies a kernel $K_i:[0,1]\to[0,1]^m$ representing the conditional law of $\mathbf P$ given $P_i=x$ ([[thm-existence-of-regular-conditional-distributions-for-standard-borel-targets]], [[lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable]], [[def-conditional-law-given-a-random-element]]).

The law of $\mathbf P$ is **positive regression dependent on the true-null coordinates (PRDS on $I_0$)** if, for each $i\in I_0$, such a conditional-law version can be chosen so that for every coordinatewise increasing Borel set $D$, the function

$$x\longmapsto K_i(x,D)$$

is nondecreasing on $\operatorname{supp}(\mu_i)$. If $I_0=\varnothing$, this condition is vacuous. The monotonicity condition is a full conditional-law requirement; pairwise correlations alone do not verify it.

## Remarks

The regular conditional law is a chosen version. PRDS requires the monotonicity on the stated support, including support points where a conditional version is not determined by an atom of positive mass. The companion examples include a finite counterexample showing that valid p-values can have positive pairwise covariance without satisfying PRDS. The BY source's one-sided Gaussian sufficient conditions do not imply a general guarantee for two-sided Gaussian tests; the PRDS theorem below applies only after its exact conditional monotonicity premise is established.
