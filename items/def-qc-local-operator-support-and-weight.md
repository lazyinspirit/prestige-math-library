---
id: def-qc-local-operator-support-and-weight
kind: definition
title: Support and weight of an operator on a finite register
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps: [def-qc-quantum-code-isometry-and-code-projector, def-qc-register-and-computational-basis, def-qc-tensor-map, def-qc-tensor-register-and-permutation, thm-qc-wire-permutation-is-unitary]
justified_by: [lem-qc-local-operator-support-is-permutation-invariant]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Richard Cleve, Quantum Information Processing course notes, §§36.1, 36.3, and 37.3
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: John Preskill, Quantum Computation, Chapter 7, §7.4.1
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Definition

Fix an ordered physical register $\mathcal H_P=\bigotimes_{j<n}\mathcal H_j$ with finite-dimensional factors. For $S\subseteq[n]:=\{0,\ldots,n-1\}$, form $\mathcal H_S$ and $\mathcal H_{S^c}$ in the inherited order, and let $\Pi_S:\mathcal H_P\to\mathcal H_S\otimes\mathcal H_{S^c}$ be the declared bijective wire permutation. An operator $E\in\operatorname{End}(\mathcal H_P)$ is **supported in $S$** if there is $E_S\in\operatorname{End}(\mathcal H_S)$ with

$$\Pi_S E\Pi_S^{-1}=E_S\otimes I_{S^c}.$$

Its **weight** is $\operatorname{wt}(E):=\min\{|S|:E\text{ is supported in }S\}$. The minimum exists because the full set $[n]$ supports every operator and $[n]$ has finitely many subsets. Let $\mathcal H_\varnothing=\mathbb C$; scalar identity operators have weight zero. The weight is invariant under reordering the tensor factors by their declared wire permutation ([[lem-qc-local-operator-support-is-permutation-invariant]]).

Here $E_S\otimes I_{S^c}$ is the tensor map of [[def-qc-tensor-map]]. The product factors may have arbitrary finite dimensions; qubits are the special case $\dim\mathcal H_j=2$ for every $j$.

## Remarks

The register tensor pairing and exact permutation convention are supplied by [[def-qc-tensor-register-and-permutation]] and [[thm-qc-wire-permutation-is-unitary]]. Their current bodies were inspected; [[lem-qc-local-operator-support-is-permutation-invariant]] proves the resulting weight invariance.
