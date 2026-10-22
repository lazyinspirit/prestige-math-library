---
id: ex-knot-kt-12-worked-cases
kind: example
title: "Trefoil and figure-eight Levine–Tristram and Arf calculations"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 18
deps:
  - def-levine-tristram-hermitian-form-and-signature
  - lem-seifert-stabilization-preserves-levine-tristram-signature
  - def-knot-arf-invariant-from-seifert-form
  - thm-arf-equals-second-conway-coefficient-mod-two
  - lem-arf-quadratic-enhancement-from-seifert-form
  - def-seifert-s-equivalence-and-conway-normalization
  - lem-conway-polynomial-from-seifert-determinant
  - ex-knot-kt-07-worked-cases
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes"
      url: "https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf"
      locator: "§6.2.3, Example 6.2.11 and Proposition 6.2.12, printed pp. 44–47: genus-one trefoil surface and Seifert matrix; complete 53-page PDF inspected."
    - title: "R. Robertello, An Invariant of Knot Cobordism, Communications on Pure and Applied Mathematics 18 (1965), 543–555"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/robertel.pdf"
      locator: "§§3–5, pp. 546–552: Seifert quadratic form, Arf basis formula, and determinant expansion modulo (2,(1+t)^4); all seven scanned pages visually inspected."
---
## Example

Assume full AC. Use the positive-push Seifert matrices
$$V_T=\begin{pmatrix}1&0\\-1&1\end{pmatrix},\qquad V_F=\begin{pmatrix}1&0\\-1&-1\end{pmatrix}$$
for the positive trefoil and the figure-eight knot, respectively. At $\omega=-1$, their Levine–Tristram signatures are $2$ and $0$. In the displayed symplectic bases both quadratic forms have $q(a)=q(b)=1$, so both Arf invariants are $1$. Their normalized Conway polynomials are $1+z^2$ and $1-z^2$, respectively.

## Example references

[[ex-knot-kt-07-worked-cases|The trefoil and figure-eight matrices and determinants]]

[[def-levine-tristram-hermitian-form-and-signature|The $\omega=-1$ signature convention]]

[[lem-conway-polynomial-from-seifert-determinant|The determinant formula for the normalized Conway polynomial]]

## Facts & Assumptions

**Given:** Full AC and the two displayed oriented knot Seifert matrices in the positive-push convention.

[A1] Full AC is the ambient hypothesis for the Seifert pairing. [[def-axiom-of-choice]]

[F1] The trefoil matrix $V_T$ is the positive-push matrix for the positive trefoil. [[ex-knot-kt-07-worked-cases]]

[F2] The figure-eight matrix $V_F$ is a positive-push Seifert matrix; its skew part is the standard symplectic block. [[def-knot-seifert-pairing-and-matrix]], [[lem-seifert-matrix-skew-part-is-surface-intersection]]

[F3] The Arf invariant is $q(a)q(b)$ for a genus-one symplectic basis and equals $a_2$ modulo two. [[def-knot-arf-invariant-from-seifert-form]], [[thm-arf-equals-second-conway-coefficient-mod-two]]

[F4] For a Seifert matrix $V$, the determinant substitution gives the normalized Conway polynomial $D_K(u)=\det(uV-u^{-1}V^T)=\nabla_K(u-u^{-1})$. [[lem-conway-polynomial-from-seifert-determinant]]

[F5] The Levine–Tristram signature of the knot is independent of the chosen surface and basis, including the one-sided-average value at an Alexander root. [[lem-seifert-stabilization-preserves-levine-tristram-signature]]

## Proof

1.1 Since $1-(-1)=2$, $H_{-1}(V)=2(V+V^T)$. For the trefoil, $V_T+V_T^T=\begin{psmallmatrix}2&-1\\-1&2\end{psmallmatrix}$ has eigenvalues $1,3$, so the signature is $2$. For the figure-eight, $V_F+V_F^T=\begin{psmallmatrix}2&-1\\-1&-2\end{psmallmatrix}$ has determinant $-5<0$, hence one positive and one negative eigenvalue, so the signature is $0$. [A1, F1, F2, F5, given, algebra]

2.1 The standard intersection block is $\begin{psmallmatrix}0&1\\-1&0\end{psmallmatrix}$ for both matrices. The quadratic values on the basis vectors are their diagonal entries modulo two, namely $(1,1)$ for each matrix. Therefore $\operatorname{Arf}=1\cdot1=1$ for each knot. Their Alexander determinants are $\det(V_T-tV_T^T)=1-t+t^2$ and $\det(V_F-tV_F^T)=-1+3t-t^2$. Substituting $t^{1/2}-t^{-1/2}=z$ with the symmetric normalization gives $\nabla_T=1+z^2$ and $\nabla_F=1-z^2$; both $z^2$ coefficients are odd, agreeing with the Arf values. [F1, F2, F3, F4, step 1.1, algebra] ∎
