---
id: def-weak-join-classifying-model-for-a-discrete-group
kind: definition
title: "Weak-join classifying model of a discrete group"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-abstract-simplicial-complex
  - def-geometric-realization-of-an-abstract-simplicial-complex
  - def-quotient-topology
dependency_level: 0
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "John Milnor, Construction of Universal Bundles II"
      url: "https://uregina.ca/~franklam/Math527/Milnor_Universal2.pdf"
      locator: "Sections 2–3 and 5, printed pp.430–433 and 435–436; join construction and weak CW variant, specialized and justified for discrete groups in local rows 2–3"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

For a discrete group G, let J(G) be the weak geometric realization of the abstract simplicial complex with vertices (s,g), s∈N and g∈G, whose nonempty simplices contain at most one vertex in each slot s; include the empty simplex. Right multiplication on every label defines a G-action. Define B_wG=J(G)/G with the orbit quotient topology. Its geometric realization uses the published simplex-wise weak topology, not an alternative Milnor-model topology.

The construction is unambiguous: the vertex set and the simplex condition are defined by comprehension, and right multiplication $(s,h)\cdot g=(s,hg)$ preserves slot distinctness, so it is an automorphism of the abstract simplicial complex and restricts to a homeomorphism of the geometric realization. The orbit quotient and its quotient topology are therefore well defined as an ordinary quotient space, and the quotient map is continuous by definition of the quotient topology. The definition selects nothing; orbit representatives are needed only in later arguments and are handled there. The weak (simplex-wise) topology is the one fixed by [[def-geometric-realization-of-an-abstract-simplicial-complex]], not an alternative join-model topology.
