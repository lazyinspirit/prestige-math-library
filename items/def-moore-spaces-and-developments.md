---
id: def-moore-spaces-and-developments
kind: definition
title: "Moore spaces and developments"
status: draft
origin: pipeline
deps: [def-regular-and-t3-spaces, def-cover-refinement-and-local-finiteness, def-first-countable-top, def-topological-space, def-neighbourhood-top]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Dennis K. Burke, The Normal Moore Space Problem"
      url: "https://dmitripavlov.org/scans/ttu15.pdf"
      locator: "Definitions 1.1-1.2 and Example 1.1, printed pp. 1-2"
---

## Definition

Let $(X, \mathcal T)$ be a topological space ([[def-topological-space]]).

**Stars.** For a family $\mathcal U$ of subsets of $X$ and a set $A \subseteq X$ put
$$\operatorname{St}(A, \mathcal U) := \bigcup \{\, U \in \mathcal U : U \cap A \ne \varnothing \,\},$$
the **star of $A$** with respect to $\mathcal U$
([[def-cover-refinement-and-local-finiteness]]); write
$\operatorname{St}(x, \mathcal U)$ for $\operatorname{St}(\{x\}, \mathcal U)$. If
$\mathcal U$ covers $X$ then $x \in \operatorname{St}(x, \mathcal U)$, and
$\operatorname{St}(x, \mathcal U)$ is exactly the union of the members of
$\mathcal U$ containing $x$; it is open as soon as the members of $\mathcal U$
are open.

**Development.** A **development** for $X$ is a sequence
$(\mathcal G_n)_{n \in \mathbb N}$ of open covers of $X$ such that for every
$x \in X$ and every open $D$ with $x \in D$ there is $n \in \mathbb N$ with
$$\operatorname{St}(x, \mathcal G_n) \subseteq D .$$
Equivalently: the family
$\{\operatorname{St}(x, \mathcal G_n) : n \in \mathbb N\}$ is a neighbourhood
base at $x$ ([[def-neighbourhood-top]]). A development is **decreasing** when
$\mathcal G_{n+1}$ refines $\mathcal G_n$ for every $n$
([[def-cover-refinement-and-local-finiteness]]).

$X$ is **developable** when it admits a development, and a **Moore space** is a
regular $T_1$ space ([[def-regular-and-t3-spaces]]) that is developable.

**Every development can be made decreasing, and then it still is one.** Let
$(\mathcal G_n)$ be a development and let $\mathcal G'_n$ be the family of all
intersections $G_0 \cap \dots \cap G_n$ with $G_i \in \mathcal G_i$ for
$0 \le i \le n$. Each $\mathcal G'_n$ is an open cover of $X$; a member of
$\mathcal G'_m$ is contained in a member of $\mathcal G_i$ whenever $i \le m$,
so $\mathcal G'_m$ refines $\mathcal G_i$ and
$$\operatorname{St}(x, \mathcal G'_m) \subseteq \operatorname{St}(x, \mathcal G_i) \qquad (i \le m);$$
in particular $\mathcal G'_m$ refines $\mathcal G'_i$ for $i \le m$. Given
$x \in D$ open, choose $n$ with $\operatorname{St}(x, \mathcal G_n) \subseteq D$;
then $\operatorname{St}(x, \mathcal G'_n) \subseteq D$ by the displayed
inclusion. So $(\mathcal G'_n)$ is a decreasing development, and a space is
developable if and only if it has a decreasing development.

**Developments give first countability.** If $(\mathcal G_n)$ is a development,
then for each $x$ the sets $\operatorname{St}(x, \mathcal G_n)$ are open
neighbourhoods of $x$, and every open set containing $x$ contains one of them;
hence $\{\operatorname{St}(x, \mathcal G_n) : n \in \mathbb N\}$ is a countable
local base at $x$ and $X$ is first countable ([[def-first-countable-top]]). In
particular every Moore space is first countable.

## Remarks

- **Conventions.** *Regular* and *normal* name separation conditions alone in
  this library, with $T_1$ written separately; *Moore space* is defined as
  regular $T_1$ plus developable.

- **Why a development and not a metric.** Both structures define the topology
  by countably many "approximations"; a development survives in spaces that
  carry no compatible metric, and the whole point of this page is that a
  later ZFC theorem [[thm-collectionwise-normal-moore-spaces-are-metrizable]]
  concerns collectionwise normal **Moore spaces**, including the regular
  $T_1$ hypotheses. It does not assert metrization of arbitrary developable
  spaces. That later theorem is separate from the ZF definitions and finite
  normalization argument here.

- **The normalization uses no choice.** The family $\mathcal G'_n$ is described
  by a formula from the given $\mathcal G_0, \dots, \mathcal G_n$, and per point
  one selects one member of each of finitely many covers, which is finite choice
  and hence available in $\mathrm{ZF}$.
