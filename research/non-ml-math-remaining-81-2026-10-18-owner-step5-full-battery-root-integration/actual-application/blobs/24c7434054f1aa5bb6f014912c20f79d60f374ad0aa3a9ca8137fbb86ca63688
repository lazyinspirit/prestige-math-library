---
id: def-hh-cochain-complex-and-gerstenhaber-bracket
kind: definition
title: Hochschild cochains, differential, and Gerstenhaber insertion bracket
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-algebra-over-a-commutative-ring
  - def-cochain-complex-in-an-abelian-category
  - def-smooth-manifold
justified_by:
  - prop-hochschild-cochains-form-a-differential-graded-lie-algebra
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Sarah J. Witherspoon, Hochschild Cohomology for Algebras
      url: https://people.tamu.edu/~sjw/pub/gsm204.pdf
      locator: Chapter 1, §§1.1 and 1.4; Chapter 5, §5.1
    - title: Nima Moshayedi, Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory
      url: https://arxiv.org/pdf/2012.14662
      locator: §4.2.5, Definitions 4.2.38 and 4.2.42 (PDF pp. 96–97)
verification:
  precheck: n/a
---

## Definition

Let $A$ be a unital associative real algebra. For each integer $p\geq1$,
the **Hochschild $p$-cochains** are
$$C^p(A,A):=\operatorname{Hom}_{\mathbb R}(A^{\otimes p},A).$$
The Hochschild differential $\delta:C^p\to C^{p+1}$ is
$$\begin{aligned} (\delta\phi)(a_1,\ldots,a_{p+1})={}&a_1\phi(a_2,\ldots,a_{p+1})\\ &+\sum_{i=1}^{p}(-1)^i\phi(a_1,\ldots,a_{i-1},a_i a_{i+1},a_{i+2},\ldots,a_{p+1})\\ &+(-1)^{p+1}\phi(a_1,\ldots,a_p)a_{p+1}. \end{aligned}$$
The general cochain-complex convention is degree $+1$ with square-zero
differential ([[def-cochain-complex-in-an-abelian-category]]); the proposition
[[prop-hochschild-cochains-form-a-differential-graded-lie-algebra]] proves
that this formula has square zero.

A cochain is **normalized** if it vanishes whenever any input is $1$. If
$A=C^\infty(M,\mathbb R)$ for a smooth manifold $M$, a cochain is
**multidifferential** if in every coordinate chart it is locally a finite sum
of terms
$$c_{\alpha_1,\ldots,\alpha_p}(x) \prod_{j=1}^{p}\partial^{\alpha_j}f_j(x),$$
with smooth coefficients and a finite order bound in each input. The
normalized multidifferential cochains are the subcomplex used for differential
star-product obstructions; closure under $\delta$ and insertion is proved
in the cited proposition. For $r\geq2$, $HH^r_{\mathrm{diff,norm}}(A,A)$
denotes the kernel of $\delta:C^r_{\mathrm{diff,norm}}\to
C^{r+1}_{\mathrm{diff,norm}}$ modulo the image from degree $r-1$.

For $\phi\in C^p(A,A)$ and $\psi\in C^q(A,A)$, define insertion
$$(\phi\circ\psi)(a_1,\ldots,a_{p+q-1})= \sum_{i=0}^{p-1}(-1)^{(q-1)i} \phi(a_1,\ldots,a_i,\psi(a_{i+1},\ldots,a_{i+q}), a_{i+q+1},\ldots,a_{p+q-1}),$$
and the **Gerstenhaber bracket** by
$$[\phi,\psi]_G:=\phi\circ\psi- (-1)^{(p-1)(q-1)}\psi\circ\phi.$$
The shifted degree of a $p$-cochain is $p-1$. These formulas fix all
insertion signs used in the local deformation equations below.
