---
id: thm-abelian-variety-acquires-semistable-reduction-after-finite-extension
kind: theorem
title: "Semistable reduction after finite extension for an abelian variety"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-abelian-variety-over-a-field
  - def-axiom-of-choice
  - def-dependent-choice
  - def-number-field
  - def-fiberwise-semiabelian-group-scheme
  - thm-neron-model-existence-in-stated-class
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "G. Faltings and G. Wüstholz et al., *Rational Points*, Chapter IV, §1"
      url: "https://yhzhumath.github.io/Mordell2024/RP.pdf"
      locator: "Semistable reduction after finite extension for abelian varieties."
verification:
  precheck: pending
axiom_use: "The explicit axiom branches are AC, DC; the displayed item-local proof is choice-free after the cited hypotheses unless its Proof status records an unresolved internal use."
---

## Statement

Assume AC and DC. Let $K$ be a number field and let $A/K$ be an abelian variety. There is a finite extension $K'/K$ such that, at every finite place of $K'$, the base change $A_{K'}$ has a smooth separated finitely presented group model over the corresponding local ring of integers whose geometric fibres are connected semiabelian varieties. This is a fiberwise semiabelian model; the torus ranks of its fibres may vary.

## Statement references

[[def-abelian-variety-over-a-field]]

[[def-fiberwise-semiabelian-group-scheme]]

[Faltings–Wüstholz, *Rational Points*, Chapter IV, §1](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** AC and DC; a number field $K$ and an abelian variety $A/K$.

[A1] [[def-axiom-of-choice]]: AC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A2] [[def-dependent-choice]]: DC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[F1] [[def-abelian-variety-over-a-field]]: $A$ is a proper smooth geometrically connected group variety.

[F2] [[def-fiberwise-semiabelian-group-scheme]]: a fiberwise semiabelian model is smooth, separated and finitely presented, with connected geometric fibres that are extensions of abelian varieties by tori. The torus ranks are allowed to vary between fibres; no global extension by a fixed-rank torus is asserted.

## Proof status

The local theorem is Grothendieck's semistable-reduction theorem. To obtain a single number-field extension, one must apply the local result at each of the finitely many places of bad reduction and realize suitable local extensions inside finite number-field extensions, take their compositum, and verify preservation of semistability at the remaining places. The local theorem and the global patching proof are not supplied in the active item library. Retain and escalate this supplier.

Unresolved proof prerequisite (not an accepted given): The local semistable-reduction theorem after finite extension is a substantial input; a global extension is obtained by a local-to-global realization and finite compositum over the finitely many bad places. Proposed supplier ID: `thm-grothendieck-semistable-reduction-for-abelian-varieties-over-dvrs` (not scaffolded or accepted in this run; proposed placement is this A page before this consumer).
