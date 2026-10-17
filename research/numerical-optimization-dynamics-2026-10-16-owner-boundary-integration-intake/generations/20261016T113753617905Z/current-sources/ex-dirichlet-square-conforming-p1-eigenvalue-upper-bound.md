---
id: ex-dirichlet-square-conforming-p1-eigenvalue-upper-bound
kind: example
title: A conforming P1 Dirichlet discretization gives a first Ritz upper bound
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-broken-and-conforming-polynomial-spaces
  - def-countable-choice
  - def-matching-affine-simplicial-meshes
  - thm-courant-fischer-minimax-for-elliptic-eigenvalues
  - thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator
  - thm-zero-boundary-piecewise-polynomials-in-w10p
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Finite Element Methods, Fall 2025, Chapter 47
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap47.pdf
      locator: "§47.2.2, conforming Ritz values and the fixed-index upper bound."
    - title: Bertrand Mercier, Topics in Finite Element Solution of Elliptic Problems, Chapter 8
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr63.pdf
      locator: "§§8.4–8.7, printed pp. 131–140, the symmetric conforming eigenproblem and Rayleigh quotients."
verification: {}
---

## Example

Let $\Omega=(0,1)^2$ and put
$$z_0=(0,0),\ z_1=(1/2,0),\ z_2=(1,0),\ z_3=(1,1/2),\ z_4=(1,1),\ z_5=(1/2,1),\ z_6=(0,1),\ z_7=(0,1/2)$$
in counterclockwise order; these divide each side into two boundary edges.
Let $c=(1/2,1/2)$. The eight triangles
$K_j=\operatorname{conv}\{c,z_j,z_{j+1}\}$, with indices modulo $8$, form a
matching affine triangulation. Let $\phi$ be the continuous piecewise-linear
hat with value $1$ at $c$ and value $0$ at each $z_j$. Its trace vanishes on
the boundary. The one-dimensional conforming Ritz space
$V_h=\operatorname{span}\{\phi\}$ has first Ritz value $24$; hence the exact
Dirichlet ground-state eigenvalue satisfies $\lambda_1\le24$.

## Facts & Assumptions

**Given:** Countable Choice and the Axiom of Choice; the square, the eight
triangles, the hat function $\phi$, and the Dirichlet Laplacian forms
$a(u,v)=\int_\Omega\nabla u\cdot\overline{\nabla v}$ and
$b(u,v)=\int_\Omega u\overline v$.

[F1] Matching continuous piecewise polynomials with zero boundary facet trace
lie in $H^1_0(\Omega)$ ([[def-matching-affine-simplicial-meshes]],
[[def-broken-and-conforming-polynomial-spaces]],
[[thm-zero-boundary-piecewise-polynomials-in-w10p]]).

[F2] The exact symmetric Dirichlet spectrum has a nondecreasing eigenvalue
list, and its first eigenvalue is the attained minimum of the Rayleigh
quotient (the Courant–Fischer theorem assumes both Choice and Countable Choice)
([[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]],
[[thm-courant-fischer-minimax-for-elliptic-eigenvalues]]).

## Proof
**Proof technique:** direct.

**Given:** The conforming mesh, nodal hat $\phi$, and the continuous and
discrete Dirichlet Rayleigh quotients.

1.1 Adjacent triangles share the same endpoint values of $\phi$, so their linear traces agree on each interior edge. The boundary edges have zero values at both endpoints, so their linear traces vanish identically. Thus [F1] places $\phi$ in $H^1_0(\Omega)$. It is nonzero because $\phi(c)=1$. Each triangle has base length $1/2$, height $1/2$ and area $1/8$; the hat changes from $1$ at $c$ to $0$ across height $1/2$, so $|\nabla\phi|=2$ on each cell. Therefore $a(\phi,\phi)=8\cdot\frac18\cdot 2^2=4.$ [F1, given, algebra]

1.2 On a triangle, $\phi$ is the barycentric coordinate of $c$. On the reference triangle $\{(x,y):x>0,y>0,x+y<1\}$, direct integration gives $\int_0^1\int_0^{1-x}x^2\,dy\,dx=\frac1{12} =\frac16\left(\frac12\right).$ An affine change of variables preserves the ratio of this integral to the triangle area, so $\int_{K_j}\phi^2=|K_j|/6=1/48$. Summing the eight cells gives $b(\phi,\phi)=1/6$. [given, algebra]

2.1 Because $V_h$ is one-dimensional, its sole Ritz value is its Rayleigh quotient, $\lambda_{h,1}=a(\phi,\phi)/b(\phi,\phi)=4/(1/6)=24$. By [F2], the continuous first eigenvalue minimizes the same quotient over all nonzero $H^1_0$ functions. Since $\phi$ is an admissible nonzero function by step 1.1, $\lambda_1\le a(\phi,\phi)/b(\phi,\phi)=24=\lambda_{h,1}$. [F1, F2, step 1.1, step 1.2, algebra] ∎

## Remarks

This exact calculation verifies the fixed-index conforming upper bound for
one mesh. It does not check the small best-approximation-gap premise needed
for the quadratic error estimate on this particular coarse space.
