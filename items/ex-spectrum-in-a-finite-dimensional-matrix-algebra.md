---
id: ex-spectrum-in-a-finite-dimensional-matrix-algebra
kind: example
title: Spectrum in a finite-dimensional matrix algebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-spectrum-and-resolvent-set-in-a-banach-algebra, def-determinant-of-a-square-matrix, thm-adjugate-identity-over-a-commutative-ring, thm-determinant-multiplicative, cor-finite-dimensional-normed-spaces-are-banach, def-unital-banach-algebra, def-bounded-linear-operator, def-operator-norm]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.1.1 and §5.2.1 examples, printed pp. 209–214 and 219–222"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Example

Let $n \ge 1$ and let $M_n(\mathbb C)$ carry the **Euclidean operator norm**
induced by identifying $M_n(\mathbb C)$ with $\mathcal B(\mathbb C^n)$,
$\mathbb C^n$ having the Euclidean norm, and by the operator norm on that space
([[def-bounded-linear-operator]], [[def-operator-norm]]). Then $M_n(\mathbb C)$
is a unital complex Banach algebra ([[def-unital-banach-algebra]]), and for
every $A \in M_n(\mathbb C)$

$$\sigma(A) = \{\,\lambda \in \mathbb C : \det(\lambda I - A) = 0\,\}$$

with the spectrum taken in that algebra
([[def-spectrum-and-resolvent-set-in-a-banach-algebra]]) and the determinant of
[[def-determinant-of-a-square-matrix]].

## Facts & Assumptions

**Given:** An integer $n \ge 1$, the algebra $M_n(\mathbb C)$ of $n\times n$ complex matrices with the operator norm, and a matrix $A \in M_n(\mathbb C)$.

[L1] The operator norm is submultiplicative and $\|I\| = 1$; an element is invertible in $M_n(\mathbb C)$ exactly when it has a two-sided inverse matrix, and $\lambda \in \sigma(A)$ exactly when $\lambda I - A$ is not invertible ([[def-bounded-linear-operator]], [[def-operator-norm]], [[def-spectrum-and-resolvent-set-in-a-banach-algebra]], [[def-unital-banach-algebra]]).

[L2] The adjugate identity: $B\,\mathrm{adj}(B) = \mathrm{adj}(B)B = \det(B)I$ for every $B \in M_n(\mathbb C)$ ([[thm-adjugate-identity-over-a-commutative-ring]], [[def-determinant-of-a-square-matrix]]).

[L3] Determinants are multiplicative: $\det(BC) = \det(B)\det(C)$ ([[thm-determinant-multiplicative]]).

[L4] Finite-dimensional normed spaces are complete, so $M_n(\mathbb C) = \mathcal B(\mathbb C^n)$ is complete for the operator norm ([[cor-finite-dimensional-normed-spaces-are-banach]]).

## Verification

**Proof technique:** direct.

1.1 $M_n(\mathbb C)$ is an associative complex algebra under matrix multiplication with unit $I$; by [L1] the operator norm is submultiplicative with $\|I\| = 1$, and by [L4] the space is complete; hence it is a unital complex Banach algebra. [L1, L4]

2.1 If $\det(\lambda I - A) \ne 0$ then $B := \lambda I - A$ has the two-sided inverse $\det(B)^{-1}\mathrm{adj}(B)$ by [L2], so $\lambda \notin \sigma(A)$ by [L1]. [step 1.1, L2, L1]

2.2 Conversely, if $\lambda I - A$ has a two-sided inverse $C$ in the algebra of [step 1.1], then [L3] gives $\det(\lambda I - A)\det(C) = \det(I) = 1$, so $\det(\lambda I - A) \ne 0$. [step 1.1, L3, algebra]

3.1 Combining [step 2.1] and [step 2.2] with the characterization of the spectrum in [L1]: $\lambda \in \sigma(A)$ precisely when $\lambda I - A$ is not invertible, which by the two steps happens precisely when $\det(\lambda I - A) = 0$. [step 2.1, step 2.2, L1] ∎
