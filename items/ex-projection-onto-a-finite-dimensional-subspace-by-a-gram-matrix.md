---
id: ex-projection-onto-a-finite-dimensional-subspace-by-a-gram-matrix
kind: example
title: Projection onto a finite-dimensional subspace by a Gram matrix
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-hilbert-orthogonal-projection, def-gram-matrix-and-gram-determinant, thm-gram-determinant-detects-linear-independence, cor-finite-dimensional-subspaces-are-closed, thm-operator-invertible-iff-determinant-nonzero, def-orthogonality-and-orthogonal-complement, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §1.3.3, pp.38–41"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Definition 182 and Proposition 183"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Example

Assume the Axiom of Countable Choice. Let $H$ be a real or complex Hilbert space, let $v_1,\dots,v_n$ be a linearly independent finite list in $H$, put $M=\operatorname{span}\{v_1,\dots,v_n\}$, and for $x\in H$ set

$$G_{ij}=\langle v_i,v_j\rangle,\qquad b_i=\langle x,v_i\rangle\qquad (1\le i,j\le n).$$

Then $M$ is closed, and the Hilbert projection of $x$ onto $M$ is

$$P_Mx=\sum_{j=1}^{n}c_jv_j,\qquad\text{where } c\in\mathbb K^n \text{ is the unique solution of } G^{\mathsf T}c=b .$$

The result does not depend on the chosen independent spanning list: any other such list produces the same vector $P_Mx$ and its own unique coefficient vector solving the corresponding system.

## Facts & Assumptions

[A1] The Gram matrix of an independent list satisfies $\det G>0$, and a square matrix is invertible exactly when its determinant is nonzero ([[thm-gram-determinant-detects-linear-independence]], [[def-gram-matrix-and-gram-determinant]], [[thm-operator-invertible-iff-determinant-nonzero]]).

[A2] A finite-dimensional subspace of a normed space is closed, and the Hilbert projection $P_M$ is characterised by $P_Mx\in M$ and $x-P_Mx\in M^\perp$ ([[cor-finite-dimensional-subspaces-are-closed]], [[def-hilbert-orthogonal-projection]]).

[A3] $S^\perp=\{v:\langle v,s\rangle=0\text{ for all }s\in S\}$ and the pairing is linear in the first argument and conjugate-linear in the second ([[def-orthogonality-and-orthogonal-complement]], [[def-hilbert-orthogonal-projection]]).

[A4] Countable Choice is the hypothesis under which the Hilbert projection is defined ([[def-countable-choice]]).

## Verification

**Proof technique:** direct.

**Given:** Countable Choice, a Hilbert space $H$, an independent list $v_1,\dots,v_n\in H$, its span $M$ and a vector $x\in H$.

1.1 The Gram matrix $G$ is invertible by [A1], so $G^{\mathsf T}$ is invertible and $c=(G^{\mathsf T})^{-1}b$ is the unique solution of $G^{\mathsf T}c=b$; and $M$ is closed by [A2]. [A1, A2, A4]

2.1 With $m=\sum_jc_jv_j\in M$ one has $\langle x-m,v_i\rangle=\langle x,v_i\rangle-\sum_jc_j\langle v_j,v_i\rangle=b_i-(G^{\mathsf T}c)_i=0$ for every $i$, and hence $\langle x-m,w\rangle=0$ for every $w=\sum_i a_iv_i\in M$ by conjugate-linearity in the second argument. [A3, step 1.1, algebra]

3.1 Therefore $m\in M$ and $x-m\in M^\perp$, so $m$ satisfies the two defining properties of the Hilbert projection and $P_Mx=m=\sum_jc_jv_j$. [step 1.1, step 2.1, A2]

4.1 Basis independence and uniqueness: if $w_1,\dots,w_n$ is another independent list with the same span $M$, its Gram matrix again has nonzero determinant and the same argument gives $P_Mx$ as a linear combination of the $w_i$ with the unique coefficient vector solving the corresponding system; since $P_Mx\in M$ is the same vector, the two displayed formulas agree, and the coefficient vector is unique because $G^{\mathsf T}$ is invertible. [step 3.1, A1, A2] ∎
