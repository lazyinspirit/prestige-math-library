---
id: def-qc-tqc-gauge-transform
kind: definition
title: Fusion-basis gauge change
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-qc-tqc-fusion-multiplicity-space, thm-qc-tqc-fusion-multiplicity-space-is-hilbert]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§3.5, Remark 3.5.21, PDF p. 16: different multiplicity bases give gauge-equivalent F-matrices."
    - title: "Chetan Nayak et al., Non-Abelian Anyons and Topological Quantum Computation"
      url: "https://arxiv.org/pdf/0707.1889"
      locator: "§II.A, PDF pp. 4–6: basis-phase freedom of F-symbols."
---

## Definition

A **fusion-basis gauge change** chooses, for every triple of simple charges
$a,b,c$, a unitary matrix $G_{ab}^c$ changing the orthonormal basis of
$V_{ab}^c$. The convention is that the new basis columns are the old basis
columns multiplied by $G_{ab}^c$. On a recoupling block this gives

$$F'=G_R^{-1}FG_L,$$

where $G_L$ and $G_R$ are the direct sums of tensor products of the vertex
changes on the source and target trees. On an exchange block it gives

$$R'=(G_{ba}^c)^{-1}R G_{ab}^c.$$

The matrices change with the bases; the underlying categorical maps do not.

