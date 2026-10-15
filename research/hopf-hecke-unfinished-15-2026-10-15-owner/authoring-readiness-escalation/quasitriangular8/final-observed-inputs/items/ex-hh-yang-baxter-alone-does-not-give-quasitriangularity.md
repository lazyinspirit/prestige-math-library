---
id: ex-hh-yang-baxter-alone-does-not-give-quasitriangularity
kind: example
title: "An invertible Yang–Baxter solution that is not a universal R-matrix"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 5
deps: [def-hh-hopf-algebra-and-antipode, def-hh-leg-notation-and-quasitriangular-hopf-algebra, lem-hh-quasitriangular-counit-and-yang-baxter-identities]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Kalle Kytölä, Introduction to Hopf Algebras and Representations (Helsinki lecture notes, Spring 2011)"
      url: "https://www.math.aalto.fi/~kkytola/files_KK/lectures_files_KK/Hopf-lecture_notes.pdf"
      locator: "§4.2, printed pp. 63–66: the Yang–Baxter equation, Definition 4.7 and Proposition 4.9"
    - title: "Pavel Etingof and Mykola Semenyakin, A Brief Introduction to Quantum Groups, arXiv:2106.05252v3 (2024)"
      url: "https://arxiv.org/pdf/2106.05252"
      locator: "Exercise 3.30, PDF p. 17: quasitriangular structures satisfy QYBE"
verification:
  precheck: pass
---

## Example

Take the one-dimensional Hopf algebra $H=\mathbb{Q}$ with $\Delta(q)=q(1\otimes1)$, $\varepsilon(q)=q$, and $S(q)=q$. The invertible tensor $R=2(1\otimes1)$ satisfies the quantum Yang–Baxter equation but is not quasitriangular: its first hexagon fails. Thus even invertibility and QYBE do not replace the coproduct compatibility and both hexagons in the definition of a universal R-matrix.

## Facts & Assumptions

**Given:** The field $\mathbb{Q}$, the one-dimensional algebra $H=\mathbb{Q}$ with the displayed Hopf maps, and $R=2(1\otimes1)$.

[F1] [[def-hh-hopf-algebra-and-antipode]]: the displayed maps define a Hopf algebra when they satisfy the algebra, coalgebra, and antipode identities.

[F2] [[def-hh-leg-notation-and-quasitriangular-hopf-algebra]]: QYBE is $R_{12}R_{13}R_{23}=R_{23}R_{13}R_{12}$, while quasitriangularity also requires both hexagons.

[F3] [[lem-hh-quasitriangular-counit-and-yang-baxter-identities]]: every quasitriangular structure satisfies QYBE.

## Verification

**Given:** The rational field and the displayed one-dimensional maps and tensor.

1.1 Multiplication and unit on $H=\mathbb{Q}$ are the usual ones; $\Delta$, $\varepsilon$, and $S$ are the identity scalar maps with the tensor-unit identification. They preserve multiplication and unit, both coalgebra composites send $q$ to $q(1\otimes1\otimes1)$, both counit contractions return $q$, and both antipode contractions give $q$. Thus these maps make $H$ a Hopf algebra. [given, F1, algebra]

1.2 The tensor $R$ has inverse $\frac12(1\otimes1)$. Each leg tensor is $2(1\otimes1\otimes1)$, so both sides of QYBE are $8(1\otimes1\otimes1)$. Therefore $R$ is an invertible QYBE solution. [given, F2, algebra]

1.3 The first hexagon has left side $(\Delta\otimes\operatorname{id})(R)=2(1\otimes1\otimes1)$, whereas $R_{13}R_{23}=4(1\otimes1\otimes1)$. These tensors differ over $\mathbb{Q}$, so the first hexagon fails and $R$ is not quasitriangular. [given, F2, algebra]

2.1 By [F3], every quasitriangular element must satisfy QYBE, and step 1.2 gives an invertible QYBE solution for which step 1.3 fails a defining hexagon. Hence QYBE is necessary but not sufficient for quasitriangularity. [step 1.2, step 1.3, F3] ∎

## Remarks

The usual generic $U_q(\mathfrak{sl}_2)$ formula is an infinite series: on finite-dimensional type-I modules its action truncates, but the universal element belongs to a completed tensor product rather than the algebraic $H\otimes H$. This is a separate topological construction, not an instance of the finite-tensor definition above; see Etingof–Semenyakin, §3.7.3, Remark 3.41, printed p. 22.
