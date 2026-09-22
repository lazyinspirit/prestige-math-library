---
id: def-normalized-families-and-collectionwise-normality
kind: definition
title: "Normalized families and collectionwise normality"
status: draft
origin: pipeline
deps: [def-normal-and-t4-spaces, def-discrete-family-and-sigma-bases, def-cover-refinement-and-local-finiteness, def-topological-space, lem-discrete-families-are-locally-finite, lem-locally-finite-unions-and-closures]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  scraped: []
  references:
    - title: "Joan Bagaria and Samuel Gomes da Silva, omega-one-strongly compact cardinals and normality"
      url: "https://diposit.ub.edu/server/api/core/bitstreams/d5caf92a-962e-496a-a31e-5630dafa67ec/content"
      locator: "Definitions 2.2-2.3, pp. 4-5"
    - title: "D. H. Fremlin, Real-valued-measurable cardinals"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/rvmc.pdf"
      locator: "Sections 8D-8F, pp. 71-73"
---

## Definition

Let $(X, \mathcal T)$ be a topological space and let
$\mathcal A = \{A_i : i \in I\}$ be a family of subsets of $X$ that is
**pairwise disjoint**: $A_i \cap A_j = \varnothing$ for all distinct $i, j$.

- $\mathcal A$ is **separated** when it has a **pairwise disjoint open
  expansion**: there are open sets $U_i \supseteq A_i$ with
  $U_i \cap U_j = \varnothing$ for all distinct $i,j$. For $I = \varnothing$
  this is vacuous.

- $\mathcal A$ is **normalized** when every subunion can be separated from its
  complementary subunion: for every $J \subseteq I$ there are disjoint open
  $U, V \subseteq X$ with
$$\bigcup_{i \in J} A_i \subseteq U, \qquad \bigcup_{i \in I \setminus J} A_i \subseteq V .$$
  The two halves $J$ and $I \setminus J$ play symmetric roles, so it is enough
  to test one representative of each complementary pair.

- $X$ is **collectionwise normal** (cwn) when every discrete family of closed
  subsets of $X$ ([[def-discrete-family-and-sigma-bases]]) is separated.

## Remarks

- **Discrete closed families are normalized in a normal space.** Let
  $\mathcal F$ be a discrete family of closed sets and $J$ a set of indices.
  A discrete family is locally finite
  ([[lem-discrete-families-are-locally-finite]]), and a locally finite union of
  closed sets is closed ([[lem-locally-finite-unions-and-closures]]); hence
  $\bigcup_{i \in J} F_i$ and $\bigcup_{i \notin J} F_i$ are disjoint closed
  sets. If $X$ is normal ([[def-normal-and-t4-spaces]]) they can be separated by
  disjoint open sets, so $\mathcal F$ is normalized. Normality is thus the
  two-set case of the normalization of discrete closed families.

- **Collectionwise normality implies normality.** For disjoint closed
  $A, B \subseteq X$ the two-member family $\{A,B\}$ is discrete: a point of
  $A$ has a neighbourhood missing $B$, one of $B$ has a neighbourhood missing
  $A$, and a point outside $A \cup B$ has a neighbourhood missing both, since
  $A$ and $B$ are closed. Separating that discrete family yields disjoint open
  sets containing $A$ and $B$, so every cwn space is normal.

- **Separation implies normalization.** If $U_i \supseteq A_i$ are pairwise
  disjoint open sets and $J \subseteq I$, then
  $U := \bigcup_{i \in J} U_i$ and $V := \bigcup_{i \notin J} U_i$ are disjoint
  open sets containing the two subunions. Hence every separated family is
  normalized, and the two-member cases of the two conditions coincide.

- **No choice is hidden.** The definitions distinguish between "there exist open
  sets $U_i$" and "there is a family $i \mapsto U_i$" only in the usual way:
  a separation of a family is a family of open sets, so it is a single
  function together with its verification, not an application of choice.
