---
id: thm-fricke-involution-eigenrelation-for-newform
kind: theorem
title: "Fricke Involution Eigenrelation for a Newform"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-normalized-cuspidal-eigenform-over-gl2
  - def-newform-subspace-of-congruence-forms
  - def-fricke-operator-on-congruence-forms
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
proof_strategy: not-supplied
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms, full course notes"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 4, Definition 4.5 and cusp conditions; Chapter 9, §§9.1–9.3, Mellin transforms and functional equations."
    - title: "Kimball Martin, Modular Forms: A Classical Introduction, full course notes"
      url: "https://kimballmartin.github.io/mfs/mfs.pdf"
      locator: "§§7.3 and 8.4; Mellin transform, functional equation and Atkin–Lehner operators."
---

## Statement

Let $N\ge1$, let $k\ge2$ be even, and let $f$ be a normalized newform in $S_k^{\mathrm{new}}(\Gamma_0(N))$ with trivial character. Define $W_N=\begin{pmatrix}0&-1\\N&0\end{pmatrix}$ and use the normalized weight-$k$ slash action $(f|_kW_N)(z)=N^{-k/2}z^{-k}f(-1/(Nz))$. There is a unique scalar $\omega_f\in\{+1,-1\}$ such that $f|_kW_N=\omega_f f$.

## Statement references

[J. S. Milne, Modular Functions and Modular Forms, full course notes](https://www.jmilne.org/math/CourseNotes/MF.pdf)

[Kimball Martin, Modular Forms: A Classical Introduction, full course notes](https://kimballmartin.github.io/mfs/mfs.pdf)

## Facts & Assumptions

**Given:** An even-weight normalized newform and the normalized Fricke operator.

[F1] [[def-newform-subspace-of-congruence-forms]]: a newform is a normalized Hecke eigenform lying in the Petersson-orthogonal complement of the old subspace.

[F2] [[def-fricke-operator-on-congruence-forms]]: $W_N$ preserves the cusp space and is an involution for even weight.

## Escalation

The proof requires Atkin–Lehner stability of the new subspace and multiplicity one for the full Hecke eigensystem. Those arguments are not present in the local supplier definitions and are not reconstructed here; the statement is escalated.
