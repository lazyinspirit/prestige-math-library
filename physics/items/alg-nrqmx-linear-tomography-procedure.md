---
id: alg-nrqmx-linear-tomography-procedure
kind: algorithm
title: "Informationally complete linear tomography"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-nrqmx-finite-hermitian-frame-and-gram-pseudoinverse
  - lem-nrqmx-finite-hermitian-trace-inner-product
  - lem-nrqm-composites-finite-effects-and-instruments
dependency_roles:
  def-nrqmx-finite-hermitian-frame-and-gram-pseudoinverse: mathematical-premise
  lem-nrqmx-finite-hermitian-trace-inner-product: mathematical-premise
  lem-nrqm-composites-finite-effects-and-instruments: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Xhek Turkeshi and Markus Heinrich, Quantum Information Methods for Many-Body Physics, §3.1, equations (3.7)–(3.9)"
      url: "https://www.quantum-randomness.com/teaching_files/qinfo_for_mbp/lecture_notes6.pdf"
---

## Definition

Input integers $d,m\ge1$, a finite POVM $(F_a)_{a=1}^m$ on $\mathbb C^d$ that spans the real Hermitian matrices, and real frequencies $f_a\ge0$ with $\sum_af_a=1$. Form the Gram matrix $G_{ab}=\operatorname{Tr}(F_aF_b)$, compute its Moore–Penrose inverse $G^+$, set $D_a=\sum_b(G^+)_{ba}F_b$, and return
$$
X=\sum_{a=1}^m f_aD_a.
$$
All sums and matrices are finite. The output is Hermitian. The procedure does not project $X$ onto the positive cone, and it makes no positivity claim for finite frequency inputs.

## Definition references

[[def-nrqmx-finite-hermitian-frame-and-gram-pseudoinverse]]

[[lem-nrqm-composites-finite-effects-and-instruments]]
