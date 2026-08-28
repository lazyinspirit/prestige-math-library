---
id: thm-mobius-group-and-projective-linear-identification
kind: theorem
title: "Möbius transformations form a group and identify with the projective linear quotient of GL_2(C)"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-mobius-transformation, def-invertible-matrix-and-general-linear-group, def-quotient-group, thm-image-subgroup-and-kernel-normal]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §§2.2-3.5"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 1 §§1.3-1.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §§1-2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
pipeline_run: frontier-22
---

## Statement

Möbius transformations form a group under composition. More precisely, if
$$A=\begin{pmatrix}a&b\\ c&d\end{pmatrix}\in GL_2(\mathbb C),$$
let $M_A$ be the associated fractional linear map. Then
$$A\longmapsto M_A$$
is a surjective group homomorphism from $GL_2(\mathbb C)$ onto the Möbius group,
its kernel is the scalar subgroup $\mathbb C^\times I$, and therefore
$$\operatorname{Mob}(\widehat{\mathbb C})\cong GL_2(\mathbb C)/(\mathbb C^\times I)=PGL_2(\mathbb C).$$

## Facts & Assumptions

**Given:** Invertible complex $2\times2$ matrices and their fractional linear maps.

[L1] A surjective group homomorphism identifies its codomain with the quotient by its kernel ([[thm-image-subgroup-and-kernel-normal]], [[def-quotient-group]]).

## Proof

**Proof technique:** direct.

1.1 For $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ and $B=\begin{pmatrix}\alpha&\beta\\\gamma&\delta\end{pmatrix}$, direct algebra gives $M_A(M_B(z))=M_{AB}(z)$ wherever both sides are finite, hence on all of $\widehat{\mathbb C}$. So $A\mapsto M_A$ is a homomorphism, and it is surjective by the definition of Möbius transformation. [given, algebra]

1.2 Because $A^{-1}\in GL_2(\mathbb C)$, the identity $M_A\circ M_{A^{-1}}=M_I=M_{A^{-1}}\circ M_A$ shows that Möbius transformations form a group. The kernel condition $M_A(z)=z$ gives $cz^2+(d-a)z-b=0$ for all finite $z$, so $b=c=0$ and $a=d\neq0$; hence the kernel is exactly $\mathbb C^\times I$. [given, algebra]

2.1 Applying [L1] to the surjective homomorphism proved above and the kernel computation of step 1.2 gives $\operatorname{Mob}(\widehat{\mathbb C})\cong GL_2(\mathbb C)/(\mathbb C^\times I)=PGL_2(\mathbb C)$. [L1, given] ∎
