---
id: def-dominant-morphism-and-rational-map
kind: definition
title: "Dominant morphisms and dominant rational maps"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-domain-of-definition-rational-map, def-morphism-classical-varieties]
justified_by: []
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Proposition 3.34(a) and Chapter 5k"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "J. S. Milne, Algebraic Geometry, Proposition 5.38"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

Let $X$ and $Y$ be classical affine varieties.

A morphism $\varphi:X \to Y$ is **dominant** when its image $\varphi(X)$ is
dense in $Y$.

A rational map $\eta:X \dashrightarrow Y$ is **dominant** when every
representative morphism $\varphi:U\to Y$ has dense image in $Y$.

The representatives are compatible on their overlaps and regularity is local,
so they glue to a unique regular map
$$
\eta_{\max}:\operatorname{Dom}(\eta)\longrightarrow Y.
$$
This is the **maximal representative** of $\eta$. In the dominant case its
image is dense in $Y$, since it contains the image of every representative.
