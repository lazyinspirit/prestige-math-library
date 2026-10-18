---
id: def-c2-cofinite-vertex-algebra
kind: definition
title: C2-cofiniteness
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-vertex-algebra-state-field
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Chongying Dong and Cuipo Jiang, Rationality of Vertex Operator Algebras, §5
      url: https://arxiv.org/pdf/math/0607679
    - title: Tomoyuki Arakawa and Anne Moreau, Arc Spaces and Vertex Algebras, §4.4
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
---

## Definition

For a complex vertex algebra $V$, define
$$
C_2(V):=\operatorname{span}_{\mathbb C}\{u_{(-2)}v:u,v\in V\},
$$
where $u_{(-2)}v$ is the $(-2)$-mode product in the state-field convention of [[def-vertex-algebra-state-field]]. The vertex algebra is **$C_2$-cofinite** if the quotient vector space $V/C_2(V)$ is finite dimensional. This definition alone does not assert rationality, semisimplicity, finite length of a module category, or modularity.
