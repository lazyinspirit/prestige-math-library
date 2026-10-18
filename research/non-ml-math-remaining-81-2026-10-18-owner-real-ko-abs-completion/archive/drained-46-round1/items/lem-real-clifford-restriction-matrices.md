---
id: lem-real-clifford-restriction-matrices
kind: lemma
title: "Restriction matrices for real Clifford modules"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 3
deps: [def-clifford-module-restriction-cokernel-a-n, lem-graded-c-n-modules-equivalent-to-ungraded-c-n-1-modules, lem-real-clifford-low-dimensional-models, lem-real-division-algebra-tensor-identities, lem-real-clifford-signature-recurrences-and-periodicity, thm-real-complex-clifford-algebra-classification, thm-graded-clifford-modules-and-real-complex-types]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Topology 3, Supplement 1 (1964)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/abs.pdf"
    - title: "Jost-Hinrich Eschenburg and Bernhard Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory (2021)"
      url: "https://arxiv.org/pdf/2011.14368"
    - title: "M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with K-Theory and Reality reprint"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf"
---

## Statement

For C_n=Cl(ℝ^n,−‖·‖²), let M_n be the Grothendieck group of finite-dimensional graded real C_n-modules and r_n:M_(n+1)→M_n restriction along the first n generators. Using the exact real Clifford and graded-module tables, compute each r_n as an integer matrix in the classified irreducible-module bases and compute A_n=coker(r_n). Retain M_0=ℤ⊕ℤ with its even/odd parity basis. The output table must give every residue row n=0,…,7 and the periodic continuation, with the sign/index shift translated from the plus-square convention.

## Authoring status

The eight current batch-35 Statement/Proof bodies are present and have been read. Their readiness is not established here, and no local restriction-matrix computation/cokernel table proof has been completed. Preserve the n=0 parity boundary.
