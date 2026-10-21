---
id: def-piccirillo-conway-pair
kind: definition
title: "Conway knot and its Piccirillo trace partner"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Lisa Piccirillo, The Conway knot is not slice"
      url: "https://arxiv.org/pdf/1808.02923"
      locator: "Figure 1 (Conway diagram) and Figure 2 (trace partner), PDF pp. 1–3"
    - title: "Marc Kegel and Jonathan Spreer, The search for exotic knot traces"
      url: "https://arxiv.org/html/2603.22438"
      locator: "§1.3 and Example 2.2; the Conway knot is $K11n34$ and $K_3$ is the Piccirillo friend"
---

## Definition

Let $C$ denote the Conway knot represented by the Conway diagram in Figure 1 of
Piccirillo's paper, and let $K_P$ denote the knot represented by the partner
diagram in Figure 2 of that paper. Choose an orientation on each diagram. The
symbols $C$ and $K_P$ refer to these specified diagram isotopy classes.

## Definition references

[Piccirillo, Figure 1 and Figure 2](https://arxiv.org/pdf/1808.02923)

[Kegel–Spreer, §1.3 and Example 2.2](https://arxiv.org/html/2603.22438)

## Facts & Assumptions

**Given:** The two diagram isotopy classes specified in the Definition.

[F1] Piccirillo labels the knot in Figure 1 as the Conway knot and the knot in
Figure 2 as its trace partner $K'$. The figures determine the two isotopy
classes used here.

## Proof

**Proof technique:** direct.

1.1 The two isotopy classes are fixed by the two named diagrams; no equivalence
of knots is inferred from their polynomial or homological invariants. [F1, given, def. diagram-specified isotopy classes]

1.2 The orientations are auxiliary choices for the later oriented invariants;
the underlying knot types in this definition are fixed by the diagrams and do
not depend on a choice of a different representative in the same ambient
isotopy class. [F1, step 1.1] ∎
