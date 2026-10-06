---
id: "rem-surgery-exact-sequence-and-l-groups-are-a-dedicated-sequel"
kind: "remark"
title: "The surgery exact sequence and L-groups are a dedicated sequel"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 1
deps: ["def-degree-one-normal-map-for-the-surgery-program"]
justified_by: []
aliases: []
proved_here: false
provenance:
  statement: "literature-derived"
  proof: "not-supplied"
verification:
  precheck: "n/a"
external_dependency:
  source_url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
  exact_statement: "In the high-dimensional surgery setting over a finite oriented Poincaré complex, there is a surgery obstruction to killing K_n(M_n) to obtain a bordant (n+1)-connected degree 1 normal map, which takes value in the surgery obstruction group L_m(Z[pi_1(X)]). (Ranicki, Algebraic and Geometric Surgery, Chapter 10 introduction, printed pp. 193-194: 'there is a surgery obstruction (to be defined in Chapters 11 and 12) ... which takes value in the surgery obstruction group L_m(Z[pi_1(X)])'.)"
  local_proof_attempt: "No local proof is attempted. The obstruction is defined through the algebraic L-groups of forms and formations (Ranicki Chapters 11-12), which are neither stated nor constructed in this library, and their definition is outside the commissioned scope of this page. The page records the boundary of the commissioned level and does not consume the construction anywhere on this page or on its downstream pages."
  necessity: "The L-group valued obstruction is what the surgery programme of this page runs into and is the subject of the sequel; recording it here documents the exact statement-and-construction boundary. No item in this library depends on this remark."
sources:
  references:
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002; electronic copy)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Chapter 10 introduction, printed pp. 193-194 (the surgery obstruction takes value in L_m(Z[pi_1(X)]); the definition occupies Chapters 11-12); Chapter 10 §10.4, printed p. 211"
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (lecture notes, Münster, 27 October 2004)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 4 introduction and §4.1, printed pp. 79-84 (the surgery obstruction takes values in L-groups defined in terms of forms and formations; the completion problem)"
---

## Remark

**Recorded boundary result (not proved here).** For $m\ge5$, an oriented finite $m$-dimensional Poincaré complex $X$, and the normal structures of the classical smooth surgery programme, the literature attaches to an
$m$-dimensional degree-one normal map $(f,b):M\to X$
([[def-degree-one-normal-map-for-the-surgery-program]]) a surgery obstruction
taking values in the surgery obstruction group
$L_m(\mathbb Z[\pi_1(X)])$, and assembles these obstructions into the surgery
exact sequence. Completing the programme in that setting requires that theory. This does not assert a surgery exact sequence for an arbitrary finite CW complex merely endowed with a top homology generator, which the local normal-map definition also allows.

This page neither states nor proves the values of the obstruction, the
definition of the $L$-groups, or the exact sequence itself, and no item on this
page depends on this remark: it records the exact statement-and-construction
boundary of the commissioned level, as the design requires. The formal
existence and role of the obstruction is recorded in the external dependency
above; the definition is a construction of the sequel and is not claimed here.
