---
id: def-hh-left-dual-of-a-finite-hopf-module
kind: definition
title: "The left dual of a finite-dimensional Hopf module"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 4
deps: [def-hh-module-category-and-tensor-action, def-hh-hopf-algebra-and-antipode, thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication, lem-hh-finite-tensor-duality-and-canonical-coevaluation, def-algebraic-dual-and-linear-functional]
justified_by: [thm-hh-left-dual-evaluation-coevaluation-and-triangle-identities]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (MIT 18.769 full course lecture notes, 2009)"
      url: "https://ocw.mit.edu/courses/18-769-topics-in-lie-theory-tensor-categories-spring-2009/8a51a9d1b57a35a0e6a5804bdea6e146_MIT18_769S09_notes.pdf"
    - title: "Christoph Schweigert, Hopf algebras, quantum groups and topological field theory (Hamburg University full lecture notes, 2025)"
      url: "https://christophschweigert.github.io/skripten/hskript.pdf"
verification:
  precheck: n/a
---

## Definition

Let $H$ be a bialgebra over a field $k$, let $S:H\to H$ be an antipode satisfying

$$\sum S(h_{(1)})h_{(2)}=\varepsilon(h)1_H=\sum h_{(1)}S(h_{(2)}),$$

and let $V$ be a finite-dimensional left $H$-module. The algebraic dual $V^*$ is the vector space of linear functionals $V\to k$ from [[def-algebraic-dual-and-linear-functional]]. Give it the candidate left $H$-action

$$ (h\cdot f)(v):=f(S(h)\cdot v). $$

Set $\operatorname{ev}:V^*\otimes V\to k$, $f\otimes v\mapsto f(v)$, and set $\operatorname{coev}:k\to V\otimes V^*$, $1\mapsto\sum_i e_i\otimes e^i$ for any finite basis $(e_i)$ and its dual basis $(e^i)$. The tensor in this formula is basis-independent by [[lem-hh-finite-tensor-duality-and-canonical-coevaluation]]. In this page's convention, “left dual” means these displayed orientations $V^*\otimes V\to k$ and $k\to V\otimes V^*$. Some sources use “right dual” for the same orientations; the formulas here fix the convention. The next theorem proves the candidate action and maps give a left dual, without assuming $S$ bijective.
