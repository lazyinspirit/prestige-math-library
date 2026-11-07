---
id: def-fricke-operator-on-congruence-forms
kind: definition
title: "Normalized Fricke Operator on Congruence-Level Cusp Forms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-congruence-modular-form-with-nebentypus
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms, full course notes"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 4, Definition 4.5 and cusp conditions; Chapter 9, §§9.1–9.3, Mellin transforms and functional equations."
    - title: "Kimball Martin, Modular Forms: A Classical Introduction, full course notes"
      url: "https://kimballmartin.github.io/mfs/mfs.pdf"
      locator: "§§7.3 and 8.4; Mellin transform, functional equation and Atkin–Lehner operators."
---

## Definition

Let $N\ge1$ and let $k\ge2$ be even. Write $S_k(\Gamma_0(N))$ for the weight-$k$ cusp forms with trivial character. For a real matrix $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ with positive determinant, define
$$(f|_k\gamma)(z):=\det(\gamma)^{k/2}(cz+d)^{-k}f\!\left(\frac{az+b}{cz+d}\right).$$
The normalized Fricke operator is $W_N=\begin{pmatrix}0&-1\\N&0\end{pmatrix}$ acting by this slash rule, so
$$(f|_kW_N)(z)=N^{-k/2}z^{-k}f\!\left(-\frac1{Nz}\right).$$
It maps $S_k(\Gamma_0(N))$ to itself and satisfies $(f|_kW_N)|_kW_N=f$ for even $k$.

## Definition references

[J. S. Milne, Modular Functions and Modular Forms, full course notes](https://www.jmilne.org/math/CourseNotes/MF.pdf)

[Kimball Martin, Modular Forms: A Classical Introduction, full course notes](https://kimballmartin.github.io/mfs/mfs.pdf)

## Facts & Assumptions

**Given:** The congruence subgroup $\Gamma_0(N)$ and its weight-$k$ cusp space.

[F1] [[def-congruence-modular-form-with-nebentypus]]: a modular form obeys the weight-$k$ slash law under $\Gamma_0(N)$ and its cusp condition is vanishing at every cusp.

## Proof

**Proof technique:** matrix calculation and the cusp condition.

1.1 For $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\Gamma_0(N)$, direct multiplication gives $W_N^{-1}\gamma W_N=\begin{pmatrix}d&-c/N\\-Nb&a\end{pmatrix}\in\Gamma_0(N)$ because $N\mid c$. Thus $W_N$ normalizes $\Gamma_0(N)$; the slash action carries the automorphy law in [F1] to itself. [given, F1, algebra]

2.1 The fractional linear map $z\mapsto-1/(Nz)$ permutes rational cusps, so the normalizer action carries a vanishing cusp expansion to a vanishing cusp expansion; hence it preserves the cusp space. Since $W_N^2=-NI$, the normalized slash factor for the scalar matrix $-NI$ is $(-1)^k=1$ when $k$ is even. This proves the asserted involution identity. [step 1.1, F1, algebra] ∎
