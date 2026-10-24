---
id: def-qc-dirac-notation-conversion
kind: definition
title: Dirac Notation Conversion
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-linear-map
  - def-real-and-complex-inner-product-space
  - def-coordinate-column-and-matrix-of-a-linear-map
  - def-matrix-product-and-identity-matrix
  - def-transpose-of-a-matrix
  - def-complex-conjugate-real-imaginary-part-and-modulus
justified_by:
  - thm-qc-dirac-notation-coordinate-identity
axiom_use: None; the notation uses only finite-dimensional inner-product and matrix interfaces.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information (2018 author-hosted draft), Chapters 1–2
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27), Appendices A.3 and A.10"
      url: https://arxiv.org/pdf/1907.09415v6
---

## Definition

All complex inner products in this track use the root convention: they are
linear in the first argument and conjugate-linear in the second
([[def-real-and-complex-inner-product-space]]). For vectors $x,y$ in the same
space, define the Dirac pairing by

$$\langle x|y\rangle_D:=\langle y,x\rangle_{\mathrm{root}}.$$

The ket $|x\rangle$ denotes the vector $x$. The bra $\langle x|$ denotes the
linear functional $z\mapsto\langle z,x\rangle_{\mathrm{root}}$.

For finite-dimensional complex inner-product spaces $H,K$, vectors $y\in H$ and
$x\in K$, define the rank-one linear map

$$|x\rangle\langle y|:H\to K,\qquad z\mapsto\langle z,y\rangle_{H,\mathrm{root}}x.$$

Given ordered orthonormal bases of $H$ and $K$, its coordinate matrix is
$[x][y]^\dagger$, where $[x]$ and $[y]$ are the corresponding coordinate
columns and $M^\dagger:=\overline M^{\mathsf T}$ is the conjugate transpose.
The coordinate assertion is established in
[[thm-qc-dirac-notation-coordinate-identity]].
