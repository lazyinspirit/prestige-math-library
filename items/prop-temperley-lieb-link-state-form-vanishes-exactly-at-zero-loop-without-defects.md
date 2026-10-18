---
id: prop-temperley-lieb-link-state-form-vanishes-exactly-at-zero-loop-without-defects
kind: proposition
title: "The link-state form is identically zero only at zero loop value with no defects"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-temperley-lieb-link-state-standard-modules, lem-temperley-lieb-link-state-gram-form-is-invariant]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  scraped: []
  references:
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§3, PDF pp. 14–15: the form is nonzero when defects are present, while the zero-loop no-defect form vanishes identically and requires separate treatment."
    - title: "John Enyang and Frederick M. Goodman, Cellular bases for algebras with a Jones basic construction"
      url: "https://arxiv.org/pdf/1106.5339"
      locator: "§6.4.2, printed pp. 34–35: link-state and diagram basis conventions; the zero-loop boundary calculation is supplied locally."
---

## Statement

Let $R$ be a nonzero commutative ring with unit, $\delta\in R$, $n\ge0$, and $0\le t\le n$ with $n-t$ even. For the link-state form $\phi_{n,t}$ of [[lem-temperley-lieb-link-state-gram-form-is-invariant]], the form is identically zero if and only if $t=0$, $n>0$, and $\delta=0$. At $n=t=0$ the form is the unit form on the empty link state.

This statement concerns an identically zero form, not nondegeneracy or the radical at other parameter values.

## Facts & Assumptions

**Given:** A nonzero commutative ring $R$ with unit, $\delta\in R$, $n\ge0$, and an allowed defect number $t$.

[F1] The link-state basis consists of partial noncrossing matchings with $t$ defects and $a=(n-t)/2$ arcs ([[def-temperley-lieb-link-state-standard-modules]]).

[F2] For basis link states, $\phi_{n,t}$ is $\delta$ to the number of loops when all $t$ strands propagate, and is zero when fewer than $t$ strands propagate ([[lem-temperley-lieb-link-state-gram-form-is-invariant]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $t>0$ and put $a=(n-t)/2$. If $a=0$, take $x=y$ to be the all-defect state; gluing gives $t$ through paths and no loops, so $\phi_{n,t}(x,y)=1_R\ne0$. If $a>0$, let $x$ have adjacent arcs $(1,2),(3,4),\ldots,(2a-1,2a)$ and defects at $2a+1,\ldots,n$. Let $y$ have arcs $(2,3),(4,5),\ldots,(2a,2a+1)$, defects at $1$ and $2a+2,\ldots,n$. Both are link states. Their glued graph has one path alternating across sites $1,\ldots,2a+1$ and $t-1$ straight paths at the shared defects; it has no closed component. Hence $\phi_{n,t}(x,y)=1_R\ne0$. [F1, F2, given, construct]

2.1 Suppose $t=0$ and $n>0$, so $n=2a$ with $a\ge1$. Every pair of link states glues to a finite graph in which every boundary site has degree two; each connected component is a cycle, and at least one cycle occurs. Thus every form value is divisible by $\delta$, so the form is identically zero when $\delta=0$. Conversely, let $x$ have adjacent arcs $(1,2),(3,4),\ldots,(n-1,n)$, and let $y$ have the outer arc $(1,n)$ together with the adjacent interior arcs $(2,3),(4,5),\ldots,(n-2,n-1)$. Their overlay is one cycle, so $\phi_{n,0}(x,y)=\delta$. If $\delta\ne0$, this value is nonzero and the form is not identically zero. [F1, F2, step 1.1, construct]

3.1 If $n=t=0$, there is one empty link state. Its reflection glues to the empty diagram with no loops, so $\phi_{0,0}(x,x)=1_R\ne0$. Together with the cases already treated, this exhausts all allowed $t$ and proves the equivalence. [F1, F2, step 1.1, step 2.1] ∎
