---
id: ex-dual-of-a-finite-dimensional-space
kind: example
title: "Finite-dimensional duals and matrix transposes"
status: draft
origin: pipeline
deps: ["def-transpose-of-a-bounded-operator", "thm-dual-family-is-a-basis-in-finite-dimension", "cor-linear-maps-with-finite-dimensional-domain-are-bounded"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Example 4.5, p.173"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "Coordinate estimates give boundedness of all linear functionals using norm equivalence; expand sum_i g_i sum_j A_ij x_j. This is not the Hilbert conjugate transpose."
---

## Example

Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $X,Y$ be finite-dimensional normed spaces with fixed ordered bases. Their continuous duals equal their algebraic duals. If $T:X\to Y$ has matrix $A=(A_{ij})$ in these bases, then $T^*:Y^*\to X^*$ has matrix $A^{\mathsf t}$ in the dual bases, even over $\mathbb C$.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[def-transpose-of-a-bounded-operator]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $T:X\to Y$ be bounded and linear between normed spaces. Its **transpose**, or Banach adjoint, is $T^*:Y^*\longrightarrow X^*,\qquad (T^*g)(x)=g(Tx).$ The duals are def-dual-space-of-a-normed-space. Composition is bounded by lem-composition-operator-norm-inequality, so this has the displayed codomain. It is linear in $g$ over $\mathbb K$. No complex conjugation is inserted; a Hilbert adjoint uses a separate inner-product identification.

[F2] From [[thm-dual-family-is-a-basis-in-finite-dimension]], with its stated hypotheses: If $B=(b_1,\ldots,b_n)$ is a basis of a finite-dimensional $F$-vector space $V$, then its dual family $B^*=(b_1^*,\ldots,b_n^*)$ is a basis of $V^*$. Consequently $\dim V^*=\dim V=n$.

[F3] From [[cor-linear-maps-with-finite-dimensional-domain-are-bounded]], with its stated hypotheses: Let $X$ and $Y$ be normed spaces over the same scalar field, and assume $X$ admits an ordered basis of finite length. Then every linear map $S:X\to Y$ is a bounded linear operator in the sense of def-bounded-linear-operator.

## Verification

1.1 Every algebraic linear functional on $X$ or $Y$ is bounded, since its domain has a fixed finite basis and its scalar codomain is normed. Conversely a continuous-dual functional is algebraically linear by definition. The dual families are bases of these duals. [F2, F3]

2.1 Writing $x=\sum_jx_je_j$ and $g=\sum_ig_if_i^*$ gives $(T^*g)(x)=g(Tx)=\sum_i g_i\sum_jA_{ij}x_j=\sum_j(\sum_iA_{ij}g_i)x_j$. Thus the dual-coordinate column is $A^{\mathsf t}g$. The computation is bilinear, without conjugation. [F1, F2, step 1.1]

3.1 If either dimension is zero, the corresponding sums are empty and define the unique zero map with its appropriate rectangular matrix. In dimension one the transpose leaves the scalar entry unchanged, including a nonreal scalar. [step 2.1] ∎
