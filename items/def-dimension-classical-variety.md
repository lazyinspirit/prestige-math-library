---
id: "def-dimension-classical-variety"
kind: "definition"
title: "Global and local dimension of classical varieties"
deps: ["def-dimension-noetherian-topological-space", "lem-dimension-finite-union-components", "lem-classical-variety-noetherian-components"]
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Milne §5j p.115 and §3c Note 3.13 p.63; local-dimension convention prescribed by AV-5 design"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: "draft"
origin: "pipeline"
---

## Definition

For a classical variety $X$, let $\dim X$ be its chain dimension. If $X_1,\ldots,X_m$ are its irreducible components and $x\in X$ is a closed point, define $\dim_xX=\max_{x\in X_i}\dim X_i$. The indexing family is nonempty. Say that $X$ has pure dimension $d$ if every irreducible component has dimension $d$; the condition on components is vacuous for the empty variety, whose dimension is nevertheless $-\infty$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.
