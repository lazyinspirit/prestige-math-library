---
id: "def-classical-germ-and-local-ring"
kind: "definition"
title: "Germs and the local ring of a classical affine variety"
status: published
origin: "pipeline"
deps: ["def-classical-regular-function-on-open-set", "lem-classical-regular-functions-locality-and-gluing"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-09
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, §3b, p. 60"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
---

## Definition

For a point $x$ of an affine algebraic set $X$, a germ of a regular function at $x$ is a pair $(U,s)$, where $U$ is an open neighbourhood of $x$ and $s\in\mathcal O_X(U)$, modulo equality on some open neighbourhood of $x$ contained in both domains. Write $\mathcal O_{X,x}$ for the set of germs. Reflexivity uses $U$; symmetry reverses equality; transitivity intersects the two witness neighbourhoods, which still contain $x$. Add and multiply representatives after restricting to their intersection. If either representative is replaced by an equivalent one, intersect the two equality neighbourhoods: there both sums and both products agree. Thus the operations are well-defined. The restriction and algebra laws of [[lem-classical-regular-functions-locality-and-gluing]] on a common finite intersection give a unital $k$-algebra; constants define its structure map. Evaluation of a germ at $x$ is well-defined by the same equality condition. Its local-ring property is proved in the following theorem.

## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §3b, p. 60. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
