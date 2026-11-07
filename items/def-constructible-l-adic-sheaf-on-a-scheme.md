---
dependency_level: 7
id: def-constructible-l-adic-sheaf-on-a-scheme
kind: definition
title: Constructible rational adic sheaves
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-l-adic-sheaf-as-compatible-system
  - def-lisse-l-adic-sheaf-on-a-scheme
  - def-constructible-etale-sheaf-of-finite-modules
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Grothendieck et al., SGA 5, Exposé VI, Sections 1.2–1.4
      url: https://grothendiecksga.com/read/sga5/en/VI-1.html
      locator: Common finite stratification and the rational constructible category
---

## Definition

Let $X$ be a scheme and let $\ell$ be a prime. The **constructible $\mathbb Q_\ell$-sheaves on $X$** are the objects of the rational adic category of strict constructible systems with a common finite locally closed stratification. They include systems that are singular along the boundaries of the strata. They are not restricted to globally lisse systems or to systems whose integral modules are free. A constructible object is represented by a globally defined integral system; morphisms and isomorphisms are taken after tensoring the system morphism groups with $\mathbb Q_\ell$.

For finite coefficients, the convention on any base-change scheme is that a sheaf is constructible if a finite locally closed partition makes its restrictions finite locally constant. On a Noetherian scheme this is the usual constructible finite-module condition. An integral system in the present definition has one partition working simultaneously at every finite level. The customary description of rational constructibility as a finite partition on which the rational restrictions are lisse requires the flat-lattice replacement and finite-level representation arguments; that equivalence is a separate mathematical assertion, not a replacement of the global integral system by independently chosen lattices on strata.

The geometric stalk of a constructible rational object is the rationalized inverse limit of its finite-level geometric stalks. Its finite-dimensionality and compatibility with exact sequences require the finite adic module and geometric-stalk lemmas. This definition makes no cohomological finiteness or trace-formula assertion.

## Definition references

[[def-l-adic-sheaf-as-compatible-system]]

[[def-lisse-l-adic-sheaf-on-a-scheme]]

[[def-constructible-etale-sheaf-of-finite-modules]]

[SGA 5, Exposé VI, Sections 1.2–1.4](https://grothendiecksga.com/read/sga5/en/VI-1.html)
