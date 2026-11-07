---
id: lem-faltings-homomorphism-between-semiabelian-models-extends-uniquely
kind: lemma
title: "A generic homomorphism between semiabelian models extends uniquely over a normal base"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-abelian-variety-over-a-field
  - def-semiabelian-variety-over-a-scheme
  - def-neron-model-and-mapping-property
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Bosch, Lütkebohmert, Raynaud, *Néron Models*, Chapter 7"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
      locator: "Extension of homomorphisms between semiabelian schemes by the Néron mapping property."
verification:
  precheck: pending
---

## Statement

Let $R$ be a normal Dedekind domain with fraction field $K$, and let $G_1,G_2$ be semiabelian schemes over $R$. Every homomorphism of their generic fibers $G_{1,K}\to G_{2,K}$ extends uniquely to a homomorphism $G_1\to G_2$ over $R$.

## Statement references

[[def-semiabelian-variety-over-a-scheme]]

[[def-neron-model-and-mapping-property]]

[Bosch–Lütkebohmert–Raynaud, *Néron Models*, Chapter 7](https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf)

## Facts & Assumptions

**Given:** A normal Dedekind domain $R$, its fraction field $K$, two semiabelian schemes over $R$, and a homomorphism on generic fibers.

[F1] [[def-semiabelian-variety-over-a-scheme]]: a semiabelian scheme is a smooth group extension of an abelian scheme by a torus.

[F2] [[def-neron-model-and-mapping-property]]: the Néron mapping property gives unique extension of maps from smooth $R$-schemes to a Néron model.

## Proof status

The standard proof identifies semiabelian models with the identity components of Néron models and applies the Néron mapping property to the smooth source. The current Néron definition states the mapping property, but the needed identity-component/base-change comparison is not supplied as an accepted theorem in this batch. Escalate until that exact comparison is supplied.

Unresolved proof prerequisite (not an accepted given): The identity components of the relevant Néron models and extension of homomorphisms between semiabelian models require the Néron mapping theorem in the precise base-change setting. Proposed supplier ID: `lem-neron-identity-component-base-change-and-semiabelian-mapping-property` (not scaffolded or accepted in this run; proposed placement is this A page before this consumer).
