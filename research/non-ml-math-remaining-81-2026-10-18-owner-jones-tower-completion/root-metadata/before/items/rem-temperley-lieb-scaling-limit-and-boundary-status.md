---
id: rem-temperley-lieb-scaling-limit-and-boundary-status
kind: remark
title: "Scaling limits and non-open boundary models remain source-qualified"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-xxz-open-chain-temperley-lieb-representation
  - def-potts-open-chain-clock-shift-representation
justified_by: []
aliases: []
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. Nichols, The Temperley-Lieb Algebra and its Generalizations in the Potts and XXZ Models"
      url: "https://arxiv.org/pdf/hep-th/0509069"
      locator: "§§2.1.1–2.1.4, PDF pp. 4–6: finite open-chain definitions and separate Potts parameter conventions."
    - title: "A. M. Gainutdinov, N. Read, and H. Saleur, Continuum Limit and the Conformal Bootstrap in Two-Dimensional Logarithmic Theories"
      url: "https://arxiv.org/pdf/1303.2082"
      locator: "discussion around equation (49), printed pp. 19–20, and conclusion p. 36: conjectural/heuristic Virasoro-mode correspondence and unresolved general relation."
---

## Statement

The XXZ and Potts definitions in this batch are exact finite-dimensional open-chain operator families. The cited continuum-limit discussion calls its proposed lattice-to-Virasoro-mode formula conjectural and its derivation heuristic, while noting free-fermion results and numerical support in interacting cases. The source does not establish a theorem covering every spectrum, spectral gap, Bethe state, or boundary algebra; that limit is an inference from the stated scope of the cited discussion. Periodic, blob, and two-boundary Temperley–Lieb variants require their own generators and boundary relations and are outside these open-chain definitions.

## Facts & Assumptions

**Given:** The finite open-chain conventions and the cited continuum-limit source.

[F1] The XXZ Hamiltonian sums only $e_i$ for $1\le i<L$, and the Potts Hamiltonian sums only $e_i$ for $1\le i<2L$; neither definition includes a generator connecting the right endpoint to the left endpoint. ([[def-xxz-open-chain-temperley-lieb-representation]], [[def-potts-open-chain-clock-shift-representation]])

[F2] Around equation (49), the authors say “this formula is a conjecture” and that its derivation “is definitely heuristic”; they also report free-fermion convergence and numerical evidence for interacting systems. ([Gainutdinov et al., discussion around (49), printed p. 19](https://arxiv.org/pdf/1303.2082))

## Proof

**Given:** The model definitions and source statements in [F1]–[F2].

1.1 The finite operator formulas in [F1] contain only adjacent generators within the listed open range. A periodic bond would require a separately defined operator acting on sites $L$ and $1$ (or the corresponding last and first Potts sites), and no such term occurs in either sum. Thus these formulas define open-chain models only. [F1, given, algebra]

2.1 The exact source labels and qualifications in [F2] make the lattice-to-Virasoro-mode correspondence conjectural/heuristic, despite the stated partial evidence. This item therefore makes no universal spectral, Bethe-completeness or boundary-algebra claim; that limit is an inference from the scope of the cited result, not a separate assertion by its authors. [F1, F2, step 1.1, given] ∎
