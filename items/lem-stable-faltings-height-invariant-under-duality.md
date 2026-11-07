---
id: lem-stable-faltings-height-invariant-under-duality
kind: lemma
title: "Stable Faltings height is invariant under duality"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-stable-faltings-height-of-an-abelian-variety
  - lem-faltings-height-change-under-isogeny
  - lem-zarhin-trick-principal-polarization-on-four-copies-and-dual
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "G. Faltings, “Endlichkeitssätze für abelsche Varietäten über Zahlkörpern,” §3"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf"
      locator: "Printed pp. 357–358; duality behavior of the height."
verification:
  precheck: pending
axiom_use: "The explicit axiom branches are AC, DC; the displayed item-local proof is choice-free after the cited hypotheses unless its Proof status records an unresolved internal use."
---

## Statement

Assume AC and DC. For every abelian variety $A/K$ over a number field, the stable Faltings heights of $A$ and its dual $A^\vee$ are equal: $h_F(A^\vee)=h_F(A)$.

## Statement references

[[def-stable-faltings-height-of-an-abelian-variety]]

[[lem-faltings-height-change-under-isogeny]]

[[lem-zarhin-trick-principal-polarization-on-four-copies-and-dual]]

[Faltings 1983, §3](https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf)

## Facts & Assumptions

**Given:** AC and DC; an abelian variety $A/K$, its dual, and stable Faltings heights.

[A1] [[def-axiom-of-choice]]: AC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A2] [[def-dependent-choice]]: DC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[F1] [[def-stable-faltings-height-of-an-abelian-variety]]: stable height is the normalized degree of the invariant top-differential module with the Faltings metric.

[F2] [[lem-faltings-height-change-under-isogeny]]: the height change under an isogeny is determined by its degree and the kernel differential module.

## Proof status

The equality is standard and is used in the Zarhin product height calculation. The current isogeny formula alone does not establish it: a proof must compare the differential modules for $A$ and $A^\vee$ and verify cancellation of the local kernel and archimedean terms (or supply a separate arithmetic duality theorem). That exact comparison is absent, so this item remains escalated.

Unresolved proof prerequisite (not an accepted given): The cancellation of the finite and archimedean terms for duality requires the canonical duality pairing and its metric normalization; no complete local derivation is supplied. Proposed supplier ID: `lem-faltings-stable-height-duality-cancellation` (not scaffolded or accepted in this run; proposed placement is this A page before this consumer).
