---
id: "def-acyclic-cover-for-sheaf"
kind: "definition"
title: "Acyclic open cover for a sheaf"
status: published
origin: pipeline
deps: [def-acyclic-sheaf-global-sections, def-cech-cochain-complex-open-cover, def-axiom-of-choice, def-restriction-sheaf-open-subspace, def-sheaf-cohomology-derived-global-sections, lem-sheaf-section-over-empty-set-terminal, prop-an-exact-functor-has-vanishing-positive-derived-functors]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-27
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

Assume the Axiom of Choice, let $X$ be a topological space and let $\mathcal F$
be a sheaf of abelian groups on $X$, with sheaf cohomology
$H^q(W,\mathcal F|_W)$ of an open subspace as in
[[def-sheaf-cohomology-derived-global-sections]] and acyclicity over an open
subspace as in [[def-acyclic-sheaf-global-sections]]; the Axiom of Choice is
assumed because these groups are formed from the supplied injective resolutions
([[def-axiom-of-choice]]).

Let $\mathcal U=(U_i)_{i\in I}$ be an open cover of $X$ indexed by a linearly
ordered set, with ordered Čech cochains $C^\bullet(\mathcal U,\mathcal F)$
([[def-cech-cochain-complex-open-cover]]). The cover $\mathcal U$ is
**$\mathcal F$-acyclic**, or a **Leray cover for $\mathcal F$**, when for every
nonempty finite set of indices $\{i_0,\dots,i_p\}\subseteq I$ the sheaf
$\mathcal F$ is $\Gamma_W$-acyclic on the open subspace
$W:=U_{i_0}\cap\cdots\cap U_{i_p}$, that is, when
$$H^q\bigl(W,\mathcal F|_W\bigr)=0\qquad\text{for every }q>0,$$
where $\mathcal F|_W$ is the restriction of $\mathcal F$ to the open subspace $W$
([[def-restriction-sheaf-open-subspace]],
[[def-acyclic-sheaf-global-sections]]).

Equivalently: $\mathcal F$ is $\Gamma_W$-acyclic for every open set $W\subseteq X$
that is a finite nonempty intersection of members of $\mathcal U$. The single
member case $p=0$ is included, so every member $U_i$ is required to be such a
$W$, and the condition involves only the open sets occurring in $\mathcal U$ and
not the chosen linear order of the index set: reindexing $\mathcal U$, or passing
to a cover with the same members, does not change whether $\mathcal U$ is
$\mathcal F$-acyclic. An intersection $U_{i_0}\cap\cdots\cap U_{i_p}$ that happens
to be empty contributes no condition: the space $W$ is then empty and every sheaf
on it is the zero sheaf, because $\mathcal G(\varnothing)$ is a singleton
([[lem-sheaf-section-over-empty-set-terminal]]), so $\Gamma(W,-)$ is the zero
functor, which is exact, and its positive derived functors vanish
([[prop-an-exact-functor-has-vanishing-positive-derived-functors]]).
