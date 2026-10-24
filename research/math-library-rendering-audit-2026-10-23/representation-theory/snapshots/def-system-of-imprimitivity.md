---
id: def-system-of-imprimitivity
kind: definition
title: Systems of imprimitivity for a Borel $G$-space
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
  - def-strongly-continuous-unitary-representation
  - def-projection-valued-measure
  - def-group-action
  - def-standard-borel-space
  - def-measurable-function-between-measurable-spaces
  - def-separable-space
  - def-hilbert-space
  - def-locally-compact-space
  - def-second-countable-space
  - def-topological-group
  - def-measurable-space
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "G. W. Mackey, Imprimitivity for Representations of Locally Compact Groups I, PNAS 35 (1949) 537-545 (Internet Archive capture of the PubMed Central scan)"
      url: "https://web.archive.org/web/2020id_/https://pmc.ncbi.nlm.nih.gov/articles/PMC1063076/pdf/pnas01546-0045.pdf"
    - title: "G. Misra, E. K. Narayanan and C. Varughese, Mackey Imprimitivity and commuting tuples of homogeneous normal operators, arXiv:2402.15737"
      url: "https://arxiv.org/pdf/2402.15737"
---

## Definition

Let $G$ be a second-countable locally compact Hausdorff topological group
([[def-locally-compact-space]], [[def-second-countable-space]],
[[def-topological-group]]) acting measurably on a standard Borel space $X$
([[def-standard-borel-space]]), that is, the map $(g,x)\mapsto gx$ is
$\mathcal B(G)\otimes\mathcal B(X)$-measurable
([[def-group-action]], [[def-measurable-function-between-measurable-spaces]],
[[def-measurable-space]]), and let $H$ be a separable complex Hilbert space
([[def-hilbert-space]], [[def-separable-space]]). A **system of imprimitivity**
for the action is a pair $(U,P)$ in which
$U:G\to U(H)$ is a strongly continuous unitary representation
([[def-strongly-continuous-unitary-representation]]) and $P$ is a
projection-valued measure on the Borel $\sigma$-algebra of $X$
([[def-projection-valued-measure]]) such that

$$U_gP(E)U_g^{-1}=P(gE)\qquad(g\in G,\ E\subseteq X\ \text{Borel}).$$

The family of $P$-null Borel sets is the **null-set class** of the system; the
system is **ergodic** when every Borel $E$ with $U_gP(E)U_g^{-1}=P(E)$ for all
$g\in G$ satisfies $P(E)=0$ or $P(E)=I$, and is **nonzero** when $P(X)=I$ and
$H\ne\{0\}$.

**Well-definedness.** The covariance relation is a condition on the given
pair: for fixed $g$ the map $E\mapsto P(gE)$ is a projection-valued measure
because $E\mapsto gE$ is a $\sigma$-algebra automorphism of $\mathcal B(X)$,
and $U_gP(E)U_g^{-1}$ is the projection $U_g\bigl(P(E)H\bigr)$ with the same
range as $P(E)$ transported by the unitary $U_g$, so both sides of the
displayed identity are orthogonal projections
([[def-projection-valued-measure]]); since $U_g$ is unitary, $U_g^{-1}=U_g^*$
throughout. The null-set class is a $\sigma$-ideal of $\mathcal B(X)$: a
projection $P(E)$ vanishes exactly when the finite scalar set functions
$E\mapsto\langle P(E)\xi,\xi\rangle$ ($\xi\in H$) all vanish, and these are
countably additive because the series in clause 4 of the projection-valued
measure definition converges in norm and the inner product is continuous
([[def-projection-valued-measure]]). No regularity of $P$ is assumed, no
topological condition beyond measurability of the action is imposed, and the
definition itself makes no choice.
