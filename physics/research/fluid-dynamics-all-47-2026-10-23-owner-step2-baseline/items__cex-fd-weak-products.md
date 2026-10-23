---
id: cex-fd-weak-products
kind: counterexample
title: Weak convergence does not pass quadratic products
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-fd-periodic-solenoidal-spaces, thm-fourier-basis-and-parseval-on-the-n-torus]
dependency_roles:
  def-fd-periodic-solenoidal-spaces: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Leonid Ryzhik, Math 256B Lecture Notes, version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "§§5.3–5.4, printed pp. 43–48, for the need to control nonlinear products in compactness arguments."
    - title: "L. C. Berselli and S. Spirito, On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "§4, printed pp. 8–12, for strong compactness in the passage to the nonlinear term."
---

## Statement refuted

**False statement.** Weak convergence in the periodic solenoidal space $H$
alone guarantees weak convergence of the quadratic tensors $u_n\otimes u_n$
to $u\otimes u$.

## Statement references

[Leonid Ryzhik, *Math 256B Lecture Notes*, §§5.3–5.4, pp. 43–48](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf).

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions*, §4, pp. 8–12](https://www.mdpi.com/2311-5521/6/1/42/pdf).

## Facts & Assumptions

**Given:** The normalized torus $\mathbb T_L^d$, an integer $d\ge2$, and the Fourier and solenoidal conventions of [[def-fd-periodic-solenoidal-spaces]].

[F1] [[def-fd-periodic-solenoidal-spaces]]: a vector field with Fourier support at $\pm k$ and coefficients perpendicular to $k$ is in $H$; its $H$ norm is the Parseval norm.

[F2] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: trigonometric polynomials are dense in $L^2$ and Fourier coefficients give its complete orthonormal expansion.

## Counterexample

**Proof technique:** direct.

1.1 Fix the second coordinate vector $e_2\in\mathbb R^d$ and set
$$u_n(x)=\sin(2\pi n x_1/L)e_2,\qquad u(x)=0.$$
Each $u_n$ has only the Fourier modes $k=\pm ne_1$ and its vector coefficient is perpendicular to $k$, so $u_n\in H$. For a finite trigonometric polynomial $g$, $(u_n,g)_H=0$ for all sufficiently large $n$ because its Fourier support is finite. Approximate an arbitrary $g\in H$ by such polynomials using [F2]; the error is at most $\sup_n\|u_n\|_2$ times the approximation error. Hence $u_n\rightharpoonup0$ in $H$. [given, F1, F2, algebra]

2.1 The only nonzero entry of $u_n\otimes u_n$ is its $(2,2)$ entry, equal to
$$\sin^2(2\pi n x_1/L)=\tfrac12-\tfrac12\cos(4\pi n x_1/L).$$
The oscillatory cosine has zero pairing eventually with every finite trigonometric polynomial and its $L^2$ norm is uniformly bounded; density and Cauchy–Schwarz therefore show it converges weakly to zero in $L^2$. Thus $u_n\otimes u_n\rightharpoonup\tfrac12 e_2\otimes e_2$ in $L^2$, while $u\otimes u=0$. This refutes the false statement. These fields are only a functional-analytic witness and are not claimed to solve Navier–Stokes. [given, F2, step 1.1, algebra] ∎
