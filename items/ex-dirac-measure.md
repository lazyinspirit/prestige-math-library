---
id: ex-dirac-measure
kind: example
title: "A Dirac probability measure concentrates all mass at one point"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-dirac-measure-is-a-probability-measure, prop-restriction-is-a-measure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Axler, Measure, Integration & Real Analysis, Example 2.55"
      url: "https://measure.axler.net/MIRA.pdf"
pipeline_run: null
---

## Example

Let $x_0\in X$. The Dirac probability measure satisfies $\delta_{x_0}(E)=1$ exactly when $x_0\in E$ and otherwise has value $0$. For measurable $F$, its same-ambient restriction satisfies

$$ (\delta_{x_0})_F=\begin{cases}\delta_{x_0},&x_0\in F,\\0,&x_0\notin F.\end{cases}$$

## Facts & Assumptions

**Given:** A measurable space $(X,\mathcal A)$, a point $x_0\in X$, and a measurable set $F$.

[L1] The Dirac set function at $x_0$ is a probability measure and has value $1$ exactly on sets containing $x_0$ ([[prop-dirac-measure-is-a-probability-measure]]).

[L2] Restriction to $F$ is the measure $A\mapsto\mu(A\cap F)$ on the original sigma-algebra ([[prop-restriction-is-a-measure]]).

## Verification

**Proof technique:** direct.

1.1 For every measurable $E$, [L1] gives $\delta_{x_0}(E)=1$ if $x_0\in E$ and $0$ otherwise; in particular its values on $\varnothing$ and $X$ are $0$ and $1$. [given, L1]

1.2 By [L2], $(\delta_{x_0})_F(A)=\delta_{x_0}(A\cap F)$. If $x_0\in F$, this equals $1$ exactly when $x_0\in A$, so it is $\delta_{x_0}(A)$; if $x_0\notin F$, it is always $0$. [given, L1, L2]

2.1 Steps 1.1 and 1.2 verify the concentration and both restriction cases, including $F=\varnothing$ and $F=X$. [step 1.1, step 1.2] ∎

