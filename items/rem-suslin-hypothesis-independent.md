---
id: rem-suslin-hypothesis-independent
kind: remark
title: "The Suslin hypothesis is independent of ZFC, in both directions"
status: draft
origin: session
proved_here: false
deps: [rem-martins-axiom]
justified_by: []
forward_refs: [def-well-order, thm-r-uncountable, def-cardinal]
aliases: []
landmark: true
short: "Solovay-Tennenbaum for SH, Jensen's diamond for its failure"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Suslin's problem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Suslin%27s_problem"
    - title: "S. Tennenbaum, Souslin's problem, Proc. Nat. Acad. Sci. USA 59 (1968), 60-63"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC286001/"
    - title: "Martin's axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Martin%27s_axiom"
pipeline_run: null
---

## Statement

A **Suslin line** is a dense complete linear order without endpoints that
satisfies the countable chain condition (every family of pairwise disjoint
nonempty open intervals is countable) but is **not separable**. The **Suslin
hypothesis** (SH) says that no Suslin line exists; equivalently, that every such
order satisfying the ccc is order-isomorphic to $\mathbb{R}$.

**Kurepa (1935): three equivalent forms.** Over ZFC, a Suslin line exists if and
only if a **Suslin tree** exists (a tree of height $\omega_1$ with no uncountable
chain and no uncountable antichain), if and only if a **Suslin algebra** exists (a
complete ccc atomless Boolean algebra that is not a measure algebra).

The following are relative to the consistency of ZFC.

**(a) Con(ZFC + SH).** Solovay and Tennenbaum (1971) force SH by iterating ccc
forcings that kill Suslin trees. The clean statement of what they proved is:
**MA + (not CH) implies SH**, together with the consistency of MA + (not CH)
recorded in [[rem-martins-axiom]].

**(b) Con(ZFC + not SH).** Jech (1967) and Tennenbaum (1968) force a Suslin tree
into existence. Jensen (1972) then proved the sharper result that **the diamond
principle implies a Suslin tree exists**, and diamond holds in the constructible
universe, so **a Suslin line exists in $L$**.

**(c) The consequence for the ccc.** If a Suslin line exists then the countable
chain condition is **not productive**: there is a ccc partial order whose square
is not ccc. So "a product of ccc spaces is ccc" is not a ZFC theorem, while under
MA + (not CH) it is.

## Remarks

- **Not proved in this library.** None of (a), (b), (c) is proved here, and
  neither trees of height $\omega_1$ nor the diamond principle is defined here.

- **What would prove it.** For (a), iterated ccc forcing as in
  [[rem-martins-axiom]]. For (b), the fine structure of $L$ far enough to derive
  diamond, plus the tree construction from diamond. For (c), the combinatorics
  of Suslin trees. All lie in a forcing and inner-model track this library does
  not contain.

- **Why it matters here.** Suslin's 1920 question is the natural sequel to the
  order-theoretic characterisation of $\mathbb{R}$: the classical theorem says a
  dense complete separable linear order without endpoints is
  order-isomorphic to $\mathbb{R}$, and the question is whether "separable" can
  be weakened to "ccc". The answer is that ZFC does not decide it, so the
  characterisation of the real line cannot be improved in that direction by any
  argument in this library. It is also the reason the library must not use "ccc
  implies separable" as a step anywhere. The ZFC-provable substitute is available
  and needs no independence at all: the Cantor cube $\{0,1\}^{\kappa}$ for
  $\kappa$ larger than the continuum is ccc and not separable, which settles the
  question for topological spaces even though it says nothing about linear
  orders ([[def-well-order]], [[def-cardinal]], [[thm-r-uncountable]]).

- **Conditional discipline.** (a) and (b) are relative consistency statements;
  the implications inside them, MA + (not CH) implies SH, and diamond implies not
  SH, are ordinary ZFC theorems. Nothing here asserts that a Suslin line exists
  or that one does not.
