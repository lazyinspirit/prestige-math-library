---
id: def-annihilator-ideal-and-minimal-polynomial-of-an-endomorphism
kind: definition
title: "The annihilator set $\\operatorname{Ann}(T)=\\{p\\in F[x]:p(T)=0\\}$; once existence is proved, its unique monic generator $\\mu_T$ is the minimal polynomial"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-polynomial-evaluation-at-an-endomorphism, def-generated-and-principal-ideals, def-polynomial-degree-leading-coefficient-and-monic]
justified_by: [thm-minimal-polynomial-is-well-defined-and-controls-annihilators]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'Keith Conrad, The Minimal Polynomial and Some Applications, §4'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/minpolyandappns.pdf'
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §5B'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Definition

Let $T:V\to V$ be an endomorphism of a finite-dimensional vector space over $F$. Its **annihilator set** is

$$\operatorname{Ann}(T):=\{p\in F[x]:p(T)=0\},$$

where polynomial evaluation at $T$ is that of [[def-polynomial-evaluation-at-an-endomorphism]].

Once [[thm-minimal-polynomial-is-well-defined-and-controls-annihilators]] proves that this set is a nonzero principal ideal, the **minimal polynomial** of $T$, denoted $\mu_T$, is its unique monic generator ([[def-generated-and-principal-ideals]], [[def-polynomial-degree-leading-coefficient-and-monic]]). Thus existence is not built into the definition. On the zero space, $I_V=0$, so $1\in\operatorname{Ann}(T)$ and $\mu_T=1$.
