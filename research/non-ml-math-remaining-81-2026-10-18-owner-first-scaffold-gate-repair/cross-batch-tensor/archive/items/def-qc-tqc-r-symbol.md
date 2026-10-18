---
id: def-qc-tqc-r-symbol
kind: definition
title: R-symbol as a channel exchange map
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-qc-tqc-fusion-multiplicity-space, thm-qc-tqc-fusion-multiplicity-space-is-hilbert, def-qc-tqc-unitary-fusion-category, def-braiding]
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
      locator: "§3.5, PDF pp. 14–16: multiplicity-aware recoupling coordinates."
    - title: "Chetan Nayak et al., Non-Abelian Anyons and Topological Quantum Computation"
      url: "https://arxiv.org/pdf/0707.1889"
      locator: "§II.A, PDF pp. 5–6: exchange phases and the R-matrix convention."
---

## Definition

Let $a,b,c$ be simple objects in a unitary braided fusion category, with
braiding $c_{a,b}:a\otimes b\to b\otimes a$ as in [[def-braiding]]. The typed
channel-exchange map on $V_{ab}^c=\operatorname{Hom}(a\otimes b,c)$ is the
pullback

$$\mathcal R_{ab}^c(f):=f\circ c_{a,b}^{-1}\in V_{ba}^c.$$

Choose orthonormal bases in the two multiplicity spaces. The matrix of
$\mathcal R_{ab}^c$ in these bases is the **R-symbol** $R_{ab}^c$. This
pullback convention fixes the orientation of the coordinate exchange; reversing
the braiding orientation replaces it by the inverse convention. If the spaces
are zero-dimensional, the braiding isomorphism identifies both with $0$ and
the R-symbol is the unique empty $0\times0$ matrix.

