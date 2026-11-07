---
id: def-artin-conductor-of-an-l-adic-inertia-representation
kind: definition
title: "Artin conductor of an l-adic inertia representation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-swan-conductor-of-an-l-adic-inertia-representation
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Grothendieck et al., SGA 5, Exposé X, §§4–7 (full text edition)"
      url: https://grothendiecksga.com/read/sga5/en/X-4.html
verification:
  precheck: n/a
---
## Definition

Let $K_x$ be a geometric local field at a curve point, let $\ell\ne p$, and let $V$ be a finite-dimensional continuous $\mathbb Q_\ell$-representation of its absolute Galois group. Since the residue field is algebraically closed, geometric inertia is the whole group $I_x=G_{K_x}$. Define the **Artin conductor exponent** by
$$a_x(V):=\operatorname{codim}V^{I_x}+\operatorname{Sw}_x(V),$$
where $\operatorname{Sw}_x(V)$ is the upper-numbering Swan conductor.

## Definition references

[[def-geometric-local-field-at-a-curve-point|Geometric local field at a curve point]]

[[def-swan-conductor-of-an-l-adic-inertia-representation|Swan conductor of an l-adic inertia representation]]

[SGA 5, Exposé X §4.2, formula (4.2.5)](https://grothendiecksga.com/read/sga5/en/X-4.html)
