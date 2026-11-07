---
id: ex-gauss-composition-discriminant-minus-thirty-one
kind: example
title: Compose a Positive-Definite Form of Discriminant Minus Thirty-One with Itself
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - alg-compose-primitive-binary-quadratic-forms-by-ideal-multiplication
  - thm-gauss-composition-algorithm-correct-and-terminates
  - alg-integer-column-hermite-normal-form
  - thm-integer-column-hnf-terminates-and-is-canonical
  - def-quadratic-order-of-discriminant
  - def-field-norm-and-trace
  - def-binary-quadratic-form-over-integers
  - def-primitive-binary-quadratic-form
  - def-discriminant-of-binary-quadratic-form
  - def-proper-equivalence-of-binary-quadratic-forms
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Manjul Bhargava, Higher Composition Laws I, §3.2 and Appendix, pp. 232–233, 249–250"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v159-n1-p03.pdf"
verification:
  precheck: pass
---

## Example

For $D=-31$, compose the primitive positive-definite form $Q=(2,1,4)$ with
itself using exact ideal multiplication and column-Hermite form. The product
ideal has basis $(4,\tau_D)$ in
$\mathcal O_{-31}=\mathbb Z[\tau_D]$, where
$\tau_D=(1+\sqrt{-31})/2$. The algorithm returns $(4,1,2)$, which is properly
equivalent to $(2,-1,4)$ by the determinant-one substitution
$(x,y)\mapsto(-y,x)$.

## Example references

[Bhargava, “Higher Composition Laws I,” Appendix, pp. 249–250](https://annals.math.princeton.edu/wp-content/uploads/annals-v159-n1-p03.pdf)

## Facts & Assumptions

**Given:** $D=-31$, $\delta=1$, $q_D=-8$, $\tau_D^2=\tau_D-8$, and $Q=(2,1,4)$.

[F1] [[def-quadratic-order-of-discriminant]]: $\mathcal O_{-31}=\mathbb Z+\mathbb Z\tau_D$ and $\tau_D^2=\tau_D-8$.

[F2] [[alg-compose-primitive-binary-quadratic-forms-by-ideal-multiplication]]: the product matrix columns and normalized norm-form output are those stated in its Definition.

[F3] [[alg-integer-column-hermite-normal-form]] and [[thm-integer-column-hnf-terminates-and-is-canonical]]: the canonical upper-triangular column-Hermite basis generates the input column lattice.

[F4] [[def-field-norm-and-trace]]: the quadratic field norm is the determinant of multiplication.

[F5] [[def-proper-equivalence-of-binary-quadratic-forms]]: a determinant-one integer substitution gives proper equivalence.

## Verification

1.1 The discriminant is $1-4\cdot2\cdot4=-31$, and $\gcd(2,1,4)=1$. Here $k=(1-1)/2=0$, so the two ideal bases are $(2,\tau_D)$. Their pairwise products give columns $(4,0),(0,2),(0,2),(-8,1)$ in the order basis. [F1, F2, given, algebra]

2.1 These columns generate the same lattice as $(4,0),(0,1)$, since $(0,1)=(-8,1)+2(4,0)$ and $(0,2)=2(0,1)$. The matrix with columns $(4,0),(0,1)$ is already in the stated column-Hermite convention, so by [F3] it is the output basis and $m=4$. [F2, F3, step 1.1, algebra]

3.1 Since $N(\tau_D)=8$ and $\operatorname{Tr}(\tau_D)=1$, one has $N(4x+\tau_Dy)=16x^2+4xy+8y^2$. Dividing by $m=4$ gives the returned form $(4,1,2)$. [F1, F2, F4, step 2.1, algebra]

4.1 The matrix $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ has determinant one and sends $(x,y)$ to $(-y,x)$. Substitution into $4x^2+xy+2y^2$ gives $2x^2-xy+4y^2$, namely $(2,-1,4)$, so the two forms are properly equivalent by [F5]. [F5, step 3.1, algebra] ∎
