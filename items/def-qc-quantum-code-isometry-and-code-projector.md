---
id: def-qc-quantum-code-isometry-and-code-projector
kind: definition
title: Quantum code as an isometric encoding and its code projector
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps: [def-adjoint-of-a-linear-map-between-inner-product-spaces, def-linear-isometry-and-orthogonal-or-unitary-operator, def-linear-map, def-qc-register-and-computational-basis, def-qc-tensor-register-and-permutation, def-real-and-complex-inner-product-space]
justified_by: [thm-qc-isometric-encoding-projector]
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
    - title: John Preskill, Quantum Computation, Chapter 7, §§7.1 and 7.4.1
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Definition

Let $\mathcal H_L$ be a finite-dimensional complex inner-product space and let $\mathcal H_P=\bigotimes_{j<n}\mathcal H_j$ be a fixed ordered finite register tensor product with $n\ge1$, supplied by the QC register interface. A **quantum code** is an isometric encoding $V:\mathcal H_L\to\mathcal H_P$. Its **code subspace** is $\mathcal C:=\operatorname{im}V$, its logical dimension is $K:=\dim\mathcal H_L$, and its physical block length is the number $n$ of tensor factors. When each physical factor is a qubit, $\mathcal H_P\cong(\mathbb C^2)^{\otimes n}$; a logical $k$-qubit register has $K=2^k$. Require $K\ge1$.

Using the root library's adjoint convention, the **code projector** is $P:=VV^*\in\operatorname{End}(\mathcal H_P)$. The theorem [[thm-qc-isometric-encoding-projector]] proves $V^*V=I_{\mathcal H_L}$, $P^*=P=P^2$, and $\operatorname{im}P=\mathcal C$, including one-dimensional logical spaces and the full-space code.

## Remarks

The QC02 suppliers set $Q_d=\mathbb C^d$ for $d\ge1$, order qubit strings lexicographically with the first wire most significant, and distinguish the empty register $\mathbb C$ from $\mathbb C^0$ ([[def-qc-register-and-computational-basis]]). Ordered tensor registers use the factorwise product pairing, linear in the first argument, and declared wire permutations have inverse permutations ([[def-qc-tensor-register-and-permutation]]). These are the conventions used here.
