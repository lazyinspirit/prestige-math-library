---
id: "def-acyclic-sheaf-global-sections"
kind: "definition"
title: "Gamma-acyclic abelian sheaf"
status: draft
origin: pipeline
deps: [def-sheaf-cohomology-derived-global-sections, def-global-sections-functor-sheaves, def-acyclic-object-for-a-left-exact-functor, def-restriction-sheaf-open-subspace, def-subspace-topology-top, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
    - title: "Jiahui Gao and Shuwu Zhang, Lectures on Algebraic Geometry"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
---

## Definition

Assume the Axiom of Choice, let $X$ be a topological space and let $H^q(X,-)$ be
its sheaf cohomology ([[def-sheaf-cohomology-derived-global-sections]]).

A sheaf of abelian groups $\mathcal F$ on $X$ is **$\Gamma$-acyclic**, or
**acyclic for global sections**, when
$$H^q(X,\mathcal F)=0\qquad\text{for every }q>0.$$
Equivalently, since $H^q(X,-)=R_I^q\Gamma(X,-)$ and $\Gamma(X,-)$ is additive
and left exact
([[def-global-sections-functor-sheaves]],
[[def-acyclic-object-for-a-left-exact-functor]]), $\mathcal F$ is acyclic for
the left exact functor $\Gamma(X,-)$ in the sense of the general definition of
$F$-acyclicity.

For an open subspace $U\subseteq X$ ([[def-subspace-topology-top]]) we say that
$\mathcal F$ is **$\Gamma_U$-acyclic** when the restriction
$\mathcal F|_U$ ([[def-restriction-sheaf-open-subspace]]) is $\Gamma$-acyclic on
the space $U$, that is, when $H^q(U,\mathcal F|_U)=0$ for every $q>0$.
