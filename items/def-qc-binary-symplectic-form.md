---
id: def-qc-binary-symplectic-form
kind: definition
title: Binary symplectic form
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-binary-pauli-label-and-quotient
  - thm-z-mod-p-is-a-field
  - def-finite-field-and-its-order
  - def-vector-space
  - def-linear-basis
  - def-dimension
justified_by: []
dependency_level: 8
sources:
  references:
    - title: "John Preskill, Quantum Error Correction, Physics 229 Lecture Notes, Chapter 7"
      url: https://www.preskill.caltech.edu/ph229/notes/chap7.pdf
    - title: "M. Hein et al., Entanglement in Graph States and Its Applications"
      url: https://arxiv.org/pdf/quant-ph/0602096
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: "None; all claims follow by finite coordinate calculations."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

On $V_n=\mathbb F_2^n\oplus\mathbb F_2^n$, with coordinate order $(x,z)$, define

$$\omega((x,z),(x',z')):=x\cdot z'+z\cdot x'.$$

This is a nondegenerate alternating bilinear form over $\mathbb F_2$; $V_n$ has dimension $2n$. In characteristic two, alternating also implies symmetry.

## Facts & Assumptions

**Given:** $n\ge1$, $\mathbb F_2$ with its coordinate vector space operations, and $e_j\in\mathbb F_2^n$ denoting the vector whose $j$-th coordinate is $1$ and whose other coordinates are $0$.

[F1] [[def-qc-binary-pauli-label-and-quotient]]: $V_n=\mathbb F_2^n\oplus\mathbb F_2^n$ with coordinatewise vector operations.

[F2] [[thm-z-mod-p-is-a-field]]: $\mathbb F_2$ is a field, so coordinate addition and multiplication satisfy the field laws.

[F3] [[def-linear-basis]]: a basis is a linearly independent spanning family.

[F4] [[def-dimension]]: dimension is the size of a finite basis.

## Proof

1.1 The dot product is linear in each variable, and the displayed formula is a sum of two such terms; hence $\omega$ is bilinear in each of its two vector arguments. [given, F2, algebra]

2.1 For every $(x,z)$, $\omega((x,z),(x,z))=x\cdot z+z\cdot x=2(x\cdot z)=0$ in $\mathbb F_2$, so the form is alternating. Swapping the arguments leaves its displayed value unchanged, so it is symmetric. [given, F2, step 1.1, algebra]

3.1 If $x_j=1$ for some $j$, then $\omega((x,z),(0,e_j))=1$; if $x=0$ and $z_j=1$, then $\omega((0,z),(e_j,0))=1$. Thus every nonzero vector pairs nontrivially with some vector, which is nondegeneracy. [given, step 2.1, algebra]

4.1 The $2n$ vectors $(e_j,0)$ and $(0,e_j)$ span by coordinate expansion; a zero linear combination has every coordinate zero, so they are linearly independent. By [F3] they form a basis, and [F4] gives dimension $2n$. [given, F1, F3, F4, algebra] ∎
