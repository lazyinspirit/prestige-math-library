---
id: thm-equivalent-characterizations-of-noetherian-modules
kind: theorem
title: "Finite generation, ACC, and maximal-condition characterizations of Noetherian modules"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-noetherian-module]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Noetherian Modules, Sections 1-2"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/noetherianmod.pdf"
pipeline_run: null
---

## Statement

For a left $R$-module $M$, the following are equivalent: every submodule is finitely generated; every ascending chain of submodules stabilizes; and every nonempty family of submodules has a maximal member. The implication from ACC to the maximal condition uses dependent choice; the other displayed implications are choice-free. See [[def-noetherian-module]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement. The adopted axiom of dependent choice is assumed for the one direction identified in the Statement; it is not cited as a forward dependency.

[L1] A left $R$-module $M$ is Noetherian when every submodule of $M$ is finitely generated (def-generated-cyclic-finitely-generated-and-free-modules). This finite-generation definition is the convention; its equivalence with ACC and the maximal condition is proved in thm-equivalent-characterizations-of-noetherian-modules. ([[def-noetherian-module]]).

## Proof

**Proof technique:** direct.

1.1 We prove that finite generation of every submodule implies ACC by taking the union of a chain and locating a finite generating set in one stage. [L1, given, algebra]

2.1 Assuming the adopted dependent-choice axiom in Facts, ACC implies the maximal condition: if a nonempty family had no maximal member, recursively choose a strict ascending chain in it. [step 1.1, given, algebra]

3.1 Choice-free: for a submodule N, the maximal condition applied to its finitely generated submodules gives a maximal L; if L is proper in N, adjoining one element of N minus L contradicts maximality. [step 2.1, given, algebra]

4.1 Thus the finite-generation condition, ACC, and the maximal condition are equivalent. Only the recursive construction in step 2.1 uses the adopted dependent-choice axiom. This proves the stated claim. [step 3.1, given, algebra] ∎
