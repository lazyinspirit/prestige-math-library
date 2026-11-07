---
id: def-lisse-qbar-l-adic-sheaf-via-finite-coefficients
kind: definition
title: Lisse algebraic-closure adic sheaves from finite coefficients
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-l-adic-sheaf-as-compatible-system
- def-lisse-l-adic-sheaf-on-a-scheme
- lem-local-integers-of-finite-separable-local-extension-are-monogenic
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: SGA 5, Exposé VI, Sections 1.1–1.5
    url: https://grothendiecksga.com/read/sga5/en/VI-1.html
    locator: Finite-coefficient adic system convention; the algebraic-closure model below is specified explicitly.
dependency_level: 7
axiom_use: No choice principle or existence theorem is asserted in this definition.
---

## Definition

Fix ℓ, a specified algebraic closure `Qℓbar` of Qℓ, and a scheme X. For a finite subextension L/Qℓ in that closure, write O_L for its valuation ring. A finite-coefficient lisse O_L-system is a compatible sequence of finite locally constant free O_L/ℓ^n-module sheaves on X, with reduction isomorphisms at all levels. Its rational category has the same objects and morphisms of systems localized by ℓ, as in [[def-l-adic-sheaf-as-compatible-system]].

A **finite-model lisse Qℓbar-sheaf** is an object represented by such a rational system over some finite L⊂Qℓbar, with two representatives and their morphisms identified after scalar extension to a common finite subextension. Its geometric stalk is the scalar extension to Qℓbar of the rational inverse-limit stalk. It is constructible on the one-stratum partition X. The definition asserts neither that every possible algebraic-closure coefficient convention is equivalent to this finite-model category nor any derived direct-image construction.

## Source and authoring record

The finite-model convention is made explicit to specify the precise coefficient extension used by the local weight argument.
