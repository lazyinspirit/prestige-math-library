---
id: "def-flasque-sheaf"
kind: "definition"
title: "Flasque sheaf"
status: draft
origin: pipeline
deps: [def-sheaf-on-topological-space, thm-abelian-sheaves-form-abelian-category, def-section-restriction-and-global-section, lem-sheaf-section-over-empty-set-terminal]
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
---

## Definition

Let $X$ be a topological space and let $\mathcal F$ be a sheaf of abelian
groups on $X$ ([[def-sheaf-on-topological-space]],
[[thm-abelian-sheaves-form-abelian-category]]). For open subsets
$U\subseteq V\subseteq X$ write
$$\rho^V_U:\mathcal F(V)\longrightarrow\mathcal F(U)$$
for the restriction map of $\mathcal F$
([[def-section-restriction-and-global-section]]).

Then $\mathcal F$ is **flasque**, also called **flabby**, when each of these
restriction maps is surjective: for all open $U\subseteq V\subseteq X$ the map
$\rho^V_U$ is onto. Equivalently, $\mathcal F$ is flasque when every section of
$\mathcal F$ over an open subset $U$ extends to every larger open subset $V$,
that is, when for every $s\in\mathcal F(U)$ there is $t\in\mathcal F(V)$ with
$t|_U=s$.

The same condition on restriction maps defines flasque sheaves of sets and
flasque sheaves of modules over a sheaf of rings; on this page the notion is
used for sheaves of abelian groups.
