---
id: def-fppf-h1-of-commutative-group-sheaves-as-torsors
kind: definition
title: "First fppf cohomology of a commutative group sheaf via torsors"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-fppf-topology-on-schemes
  - def-fppf-sheaf-and-sheafification
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "The Stacks Project, Cohomology on Sites, Section 21.4, Lemma 21.4.3"
      url: "https://stacks.math.columbia.edu/tag/03AJ"
---

## Definition

Let $K$ be a field and let $\mathcal C_K=(\mathit{Sch}/\operatorname{Spec}K)_{fppf}$ be the big fppf site. Let $\mathcal G$ be a sheaf of abelian groups on $\mathcal C_K$. A right $\mathcal G$-torsor is a sheaf of sets $\mathcal P$ with a right $\mathcal G$-action such that the action map $\mathcal P\times\mathcal G\to\mathcal P\times\mathcal P$, $(p,g)\mapsto(p,p+g)$, is an isomorphism, and every object $U$ of $\mathcal C_K$ has an fppf covering $\{U_i\to U\}$ for which $\mathcal P(U_i)$ is nonempty for every $i$. Define $H^1_{fppf}(K,\mathcal G)$ to be the set of isomorphism classes of right $\mathcal G$-torsors.

## Definition references

[The Stacks Project, First Cohomology and Torsors, Lemma 21.4.3](https://stacks.math.columbia.edu/tag/03AJ)

[[def-fppf-topology-on-schemes|The big fppf site]]

[[def-fppf-sheaf-and-sheafification|Fppf sheaves]]
