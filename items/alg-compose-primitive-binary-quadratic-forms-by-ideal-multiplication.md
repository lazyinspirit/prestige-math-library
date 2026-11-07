---
id: alg-compose-primitive-binary-quadratic-forms-by-ideal-multiplication
kind: algorithm
title: Exact Gauss Composition by Ideal Multiplication and HNF
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - alg-integer-column-hermite-normal-form
  - def-quadratic-order-of-discriminant
  - def-proper-invertible-ideal-class-group-of-a-quadratic-order
  - def-oriented-proper-invertible-ideal-class-group-of-a-quadratic-order
  - def-fractional-ideal
  - def-invertible-fractional-ideal
  - def-product-and-colon-of-fractional-ideals
  - def-field-norm-and-trace
  - def-binary-quadratic-form-over-integers
  - def-primitive-binary-quadratic-form
  - def-discriminant-of-binary-quadratic-form
justified_by:
  - thm-gauss-composition-algorithm-correct-and-terminates
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Manjul Bhargava, Higher Composition Laws I, §§3.1–3.3 and Appendix, pp. 230–237, 249–250"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v159-n1-p03.pdf"
    - title: "J. S. Milne, Algebraic Number Theory v3.08, §4.29, pp. 81–83"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
    - title: "William Dallaporta, Recovering the Picard group of quadratic algebras from Wood's binary quadratic forms, §3"
      url: "https://arxiv.org/pdf/2111.13422"
verification:
  precheck: n/a
---

## Definition

Input two integral forms $Q_i=(a_i,b_i,c_i)$, $i=1,2$, with
$\gcd(a_i,b_i,c_i)=1$ and $b_i^2-4a_ic_i=D$, where $D$ is the same nonzero
nonsquare integer for both and $D\equiv0$ or $1\pmod4$; these hypotheses imply
$a_i\ne0$. If $D<0$, require
$Q_i(x,y)>0$ for every nonzero real pair $(x,y)$; if $D>0$, accept either sign
of each nonzero leading coefficient. Let $\delta=0$ for $D\equiv0\pmod4$ and $\delta=1$ for
$D\equiv1\pmod4$, put $q_D=(D-\delta^2)/4$ and
$k_i=(b_i-\delta)/2$, and use the quadratic order
$\mathcal O_D=\mathbb Z+\mathbb Z\tau_D$ with
$\tau_D^2=\delta\tau_D+q_D$.

1. In the order basis $(1,\tau_D)$, write each ideal basis as
$(a_i,k_i+\tau_D)$.

2. Form the $2\times4$ integer matrix with columns
$(a_1a_2,0)^t$, $(a_1k_2,a_1)^t$, $(a_2k_1,a_2)^t$, and
$(k_1k_2+q_D,k_1+k_2+\delta)^t$.

3. Apply the exact integer column-Hermite procedure that returns the canonical
upper-triangular basis of the input column lattice, with positive diagonal
entries and residues $0\le h_{ij}<h_{ii}$ for $i<j$. Write the returned basis
matrix as $\begin{pmatrix}h_{11}&h_{12}\\0&h_{22}\end{pmatrix}$ with columns
$u,v$, and set $m=h_{11}h_{22}>0$.

4. Let $\epsilon=1$ if $D<0$ and
$\epsilon=\operatorname{sgn}(a_1a_2)$ if $D>0$. Compute and return the
coefficient triple of
$Q''(x,y)=N_{K_D/\mathbb Q}(ux+\epsilon vy)/(\epsilon m)$, where
$N_{K_D/\mathbb Q}$ is the determinant of multiplication on $K_D$. For
$r\ne0$, $\operatorname{sgn}(r)=1$ if $r>0$ and $-1$ if $r<0$.

## Definition references

[[alg-integer-column-hermite-normal-form|Exact Euclidean column-Hermite basis extraction]]

[Bhargava, “Higher Composition Laws I,” §§3.2–3.3 and Appendix, pp. 232–237, 249–250](https://annals.math.princeton.edu/wp-content/uploads/annals-v159-n1-p03.pdf)

[Dallaporta, “Recovering the Picard group…,” §3](https://arxiv.org/pdf/2111.13422)

## Facts & Assumptions

**Given:** The two forms in the Definition.

[F1] [[alg-integer-column-hermite-normal-form]]: the integer column-Hermite procedure returns canonical upper-triangular basis columns which generate the input column lattice.

[F2] [[def-quadratic-order-of-discriminant]]: $\tau_D^2=\delta\tau_D+q_D$ and the order basis is $(1,\tau_D)$.

[F3] [[def-field-norm-and-trace]]: $N_{K_D/\mathbb Q}$ is the determinant of multiplication on $K_D$.
