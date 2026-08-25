---
id: prop-finiteness-is-a-geometric-property-of-finitely-generated-groups
kind: proposition
title: "Finiteness is a geometric property of finitely generated groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-a-finitely-generated-group-is-finite-exactly-when-it-is-quasi-isometric-to-a-one-point-space, def-quasi-isometry-invariant-and-geometric-property-of-a-finitely-generated-group, def-quasi-isometry-type-of-a-finitely-generated-group, thm-quasi-isometry-is-an-equivalence-relation-on-metric-spaces]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), 264 pp."
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory (with an appendix by B. Nica), 837 pp."
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---
## Statement

Finiteness is a geometric property of finitely generated groups.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] A quasi-isometry invariant is a map on finitely generated groups constant on quasi-isometry classes, and a property is geometric when its indicator is such an invariant ([[def-quasi-isometry-invariant-and-geometric-property-of-a-finitely-generated-group]]).

[L1] A finitely generated group is finite if and only if it is quasi-isometric to a one-point space ([[prop-a-finitely-generated-group-is-finite-exactly-when-it-is-quasi-isometric-to-a-one-point-space]]).

[L2] A finitely generated group is quasi-isometric to a metric space when its word metric for some, equivalently every, finite generating set is ([[def-quasi-isometry-type-of-a-finitely-generated-group]]).

[L3] Being quasi-isometric is a reflexive, symmetric and transitive relation on metric spaces ([[thm-quasi-isometry-is-an-equivalence-relation-on-metric-spaces]]).


## Proof

**Proof technique:** direct.

1.1 Two quasi-isometric finitely generated groups are simultaneously quasi-isometric to a point, by transitivity of the relation. [F1, L1, L2, L3]

2.1 Being quasi-isometric to a point characterises finiteness, so the indicator of finiteness is a quasi-isometry invariant and finiteness is a geometric property. [F1, step 1.1] ∎
