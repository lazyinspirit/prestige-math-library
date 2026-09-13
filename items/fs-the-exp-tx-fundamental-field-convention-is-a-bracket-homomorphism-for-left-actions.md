---
id: fs-the-exp-tx-fundamental-field-convention-is-a-bracket-homomorphism-for-left-actions
kind: false-statement
title: The plus exponential convention is not a homomorphism for left actions
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, def-fundamental-vector-field-of-a-left-action, thm-fundamental-vector-fields-form-a-lie-algebra-homomorphism, def-lie-group, def-determinant-of-a-square-matrix, def-matrix-units]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Equation (20.11) and Theorem 20.18(a), including the sign computation in the complete proof, printed pages 529-530
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Proposition 9.1 and proof, printed page 53
verification:
  precheck: pass
proof_strategy: direct
---

## False statement

Assume $\mathrm{AC}_\omega$. For a smooth left action, the plus-sign
assignment

$$X\longmapsto \widehat X_M,\qquad \widehat X_M(p)=\left.\frac d{dt}\right|_0\exp(tX)\cdot p$$

is a Lie-algebra homomorphism.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a smooth left action of a Lie group $G$ on
$M$. Write $X_M$ for the library's minus-sign fundamental field and
$\widehat X_M$ for the plus-sign field in the false claim.

[A1] The standing definition is $X_M(p)=\left.\frac d{dt}\right|_0
\exp(-tX)\cdot p$, and its field assignment is a Lie-algebra homomorphism.
[[def-countable-choice]], [[def-fundamental-vector-field-of-a-left-action]],
[[thm-fundamental-vector-fields-form-a-lie-algebra-homomorphism]].

[F1] A Lie group has smooth multiplication and inversion, and $E_{ij}$ denotes
the matrix with its single nonzero entry $1$ in position $(i,j)$.
[[def-lie-group]], [[def-matrix-units]].  The determinant is the usual finite
polynomial. [[def-determinant-of-a-square-matrix]].

## Refutation

**Proof technique:** compute the sign and evaluate it on a nonabelian action.

1.1 Replacing $t$ by $-t$ in [A1] gives $\widehat X_M=-X_M$. Therefore bilinearity and the theorem in [A1] give $[\widehat X_M,\widehat Y_M]=[X_M,Y_M]=[X,Y]_M=-\widehat{[X,Y]}_M$. Thus the plus-sign assignment is an antihomomorphism. [A1, algebra]

2.1 Let $G=\operatorname{GL}_2(\mathbb R)$ act on itself by left multiplication.  The determinant-nonzero locus is open in $M_2(\mathbb R)$; multiplication is polynomial and the formula $A^{-1}=(\det A)^{-1}\operatorname{adj}(A)$ makes inversion smooth there, so [F1] makes $G$ a Lie group and its left action smooth.  Take $X=E_{01}$ and $Y=E_{10}$.  Direct matrix multiplication gives $[X,Y]=E_{00}-E_{11}\ne0$. At the identity, the plus fundamental field of this bracket has value $\left.\frac d{dt}\right|_0\exp(t(E_{00}-E_{11}))=E_{00}-E_{11}\ne0$. Hence step 1.1 yields $[\widehat X_M,\widehat Y_M]=-\widehat{[X,Y]}_M\ne\widehat{[X,Y]}_M$, so the claimed homomorphism identity fails. [F1, step 1.1, algebra, construct]

3.1 The statement is therefore false; the minus sign in the library convention is essential. For abelian groups both signs give the zero bracket, which is why a nonabelian witness is required. The witness is the four-dimensional open matrix group $\operatorname{GL}_2(\mathbb R)$ and has no endpoint or degenerate issue. $\mathrm{AC}_\omega$ is inherited through [A1]; the explicit matrix calculation itself is finite and choice-free. [A1, F1, step 2.1, discharge-construct: nonzero $2$-by-$2$ matrix bracket witness] ∎
