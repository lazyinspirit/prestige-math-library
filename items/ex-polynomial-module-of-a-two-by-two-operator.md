---
id: ex-polynomial-module-of-a-two-by-two-operator
kind: example
title: "The polynomial module of a two-by-two operator"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-polynomial-module-of-an-endomorphism, prop-polynomial-module-is-finitely-generated-torsion-with-minimal-annihilator, thm-cyclic-subspace-power-basis-and-companion-matrix, cor-largest-invariant-factor-is-the-minimal-polynomial]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "A. Apisa, Wisconsin Math 542, cyclic module examples"
      url: "https://people.math.wisc.edu/~apisa/notes542.pdf"
    - title: "M. Brussel, Finitely Generated Modules over a PID, Section 5"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
pipeline_run: null
---

## Example

For

$$T=\begin{pmatrix}0&-2\\1&0\end{pmatrix}\quad\text{on }\mathbb Q^2,$$

the polynomial module is

$$V_T\cong\mathbb Q[x]/(x^2+2).$$

Its sole invariant factor, minimal polynomial, and characteristic polynomial are all $x^2+2$, and the displayed matrix is the companion matrix $C(x^2+2)$.

## Facts & Assumptions

**Given:** The $\mathbb Q[x]$-module $V_T$ of [[def-polynomial-module-of-an-endomorphism]], its torsion and annihilator theorem ([[prop-polynomial-module-is-finitely-generated-torsion-with-minimal-annihilator]]), and the largest-factor dictionary ([[cor-largest-invariant-factor-is-the-minimal-polynomial]]).

[L1] In a cyclic power basis the restriction has the companion matrix with ones on the subdiagonal and the negative coefficients in the last column ([[thm-cyclic-subspace-power-basis-and-companion-matrix]]).

## Verification

**Proof technique:** direct.

1.1 For $e_1=(1,0)$, one has $Te_1=(0,1)=e_2$, so $e_1,Te_1$ is a basis of $\mathbb Q^2$. [algebra]

2.1 Direct multiplication gives $T^2e_1=-2e_1$, and no nonzero polynomial of degree below two kills $e_1$ because the vectors in step 1.1 are independent. Thus the vector annihilator is $x^2+2$, and [L1] gives its displayed companion matrix. [step 1.1, L1]

3.1 The cyclic map $\mathbb Q[x]\to V_T$, $p\mapsto p(T)e_1$, has kernel $(x^2+2)$ and is surjective, so it gives the displayed module isomorphism. Consequently the sole invariant factor is $x^2+2$; it is the minimal polynomial, and the companion determinant gives the same characteristic polynomial. [step 2.1, given] ∎
