---
id: def-brauer-character-of-a-finite-dimensional-kg-module
kind: definition
title: "Brauer character of a finite-dimensional kG-module"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-p-regular-and-p-singular-elements, def-teichmuller-lift-in-a-splitting-p-modular-system]
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Definition

Fix a splitting $p$-modular system $(K,\mathcal O,k)$ for a finite group $G$,
and let $V$ be a finite-dimensional $kG$-module. For $g\in G^0$, the element
$g$ has order prime to $p$, so any matrix representing its action on $V$
satisfies $X(g)^{|g|}=I$ with separable polynomial $t^{|g|}-1$. Hence $X(g)$
is diagonalizable over $k$, with eigenvalues $\lambda_1,\dots,\lambda_n$ of
order prime to $p$.

The **Brauer character** of $V$ is the function

$$\varphi_V:G^0\to K,\qquad \varphi_V(g):=\tau(\lambda_1)+\cdots+\tau(\lambda_n),$$

where $\tau$ denotes the Teichmuller lift.

So the Brauer character is the lifted trace of the action of $g$ on $V$, but
only on the $p$-regular part of $G$.
