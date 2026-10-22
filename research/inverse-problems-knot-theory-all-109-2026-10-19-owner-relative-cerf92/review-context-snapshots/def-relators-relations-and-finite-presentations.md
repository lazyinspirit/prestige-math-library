---
id: def-relators-relations-and-finite-presentations
kind: definition
title: "Relators and relations; finitely generated, finitely related, and finite presentations"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-generated-subgroup, def-group-presentation, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-11
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "D. L. Johnson, Presentations of Groups, Chapter 4"
      url: "https://www.cambridge.org/core/books/abs/presentations-of-groups/free-presentations-of-groups/046AC3D3A9D8D8F2802C568A4B536BE2"
    - title: "Encyclopedia of Mathematics, Presentation"
      url: "https://encyclopediaofmath.org/wiki/Presentation"
pipeline_run: null
---

## Definition

In a presentation $\langle X\mid R\rangle$ as in
[[def-group-presentation]], an element $r\in R\subseteq F(X)$ is called a
**defining relator**. The equation $r=1$ that it imposes in the quotient is a
**defining relation**. More generally, an equation $u=v$ may be recorded by the
relator $u^{-1}v$. The published definition uses the common looser convention
of calling the members of $R$ relations; both conventions define the same
quotient group.

A presentation is **finitely generated** when $X$ is finite, **finitely
related** when $R$ is finite, and **finite** when both $X$ and $R$ are finite.
A group is called finitely generated, finitely related, or finitely presented
when it admits a presentation with the corresponding property. For finitely
generated groups this agrees with generation by a finite subset in the sense
of [[def-generated-subgroup]].

