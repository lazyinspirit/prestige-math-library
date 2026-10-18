---
id: alg-fehmm-periodic-cell-micro-macro
kind: algorithm
title: Periodic FE-HMM with simplicial macro and periodic P1 micro meshes
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-afem-nvb-labelled-triangulation-family
  - def-matching-affine-simplicial-meshes
  - def-broken-and-conforming-polynomial-spaces
  - thm-matching-continuous-piecewise-polynomials-are-wkp
  - thm-zero-boundary-piecewise-polynomials-in-w10p
  - def-periodic-cell-problem
  - def-periodic-cell-correctors-and-effective-tensor
  - def-periodic-scalar-diffusion-data
  - def-periodic-zero-mean-cell-space
  - def-function-space
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
justified_by: [lem-fehmm-micro-cell-solves-wellposedness]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Patrick Ciarlet Jr. and Christian Stohrer, Finite-element heterogeneous multiscale method for the Helmholtz equation"
      url: "https://comptes-rendus.academie-sciences.fr/mathematique/item/10.1016/j.crma.2014.07.006.pdf"
      locator: "§§2–3: quadrature points, periodic cell sampling, and macro assembly conventions."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---
## Definition

This procedure defines a real-arithmetic finite-dimensional FE-HMM discretization. Its output is $U_H$ unless an `ExactSolve` call returns `singular-system`, in which case that token is returned; [[lem-fehmm-micro-cell-solves-wellposedness]] proves the exceptional branch is unreachable for the stated inputs. It makes no bit-complexity claim, no coefficient-oracle claim, and no claim about numerically computing its exact integral entries; those entries are the mathematical values of the displayed integrals. Fix $Q=(0,1)^2$ and coefficient $a$ from [[def-periodic-scalar-diffusion-data]]. Use the diagonal of the square from $(0,0)$ to $(1,1)$ as a two-triangle initial matching macro mesh. Label that shared diagonal $0$ in both triangles and each exterior edge $1$. It is a compatible labeled mesh in the sense of [[def-afem-nvb-labelled-triangulation-family]]. The macro input is any finite admissible descendant triangulation $\mathcal T$ of this mesh. Its cells are closed affine triangles as in [[def-matching-affine-simplicial-meshes]].

Choose $\epsilon>0$, a micro side length $\delta>0$, $f\in L^2(Q)$, and a finite matching triangulation $\mathcal M$ of the unit square whose opposite boundary edges and vertices match under translation by the PDE coordinate vectors $e_1,e_2$ of [[def-periodic-cell-correctors-and-effective-tensor]]. The periodic micro space is
$$W_{\mathcal M}:=\{z\in V_\#:z\text{ is continuous and affine on every triangle of }\mathcal M\}.$$
Here $z$ means an $H^1_\#(Y)$ class with a continuous periodic piecewise-affine representative; the periodic closure condition identifies opposite traces. Thus $W_{\mathcal M}$ is the finite-dimensional mean-zero subspace of the periodic P1 space, as proved in [[lem-fehmm-micro-cell-solves-wellposedness]]. Let $V_H$ be the conforming zero-boundary continuous piecewise-affine macro space on $\mathcal T$, using [[def-broken-and-conforming-polynomial-spaces]]. Its inclusion in $H^1_0(Q)$ is supplied by [[thm-matching-continuous-piecewise-polynomials-are-wkp]] and [[thm-zero-boundary-piecewise-polynomials-in-w10p]].

Identify vertices of $\mathcal M$ that match under the opposite-edge translations, and order the resulting periodic vertex classes by the lexicographically least representative of each class. Let $\phi_1,\ldots,\phi_N$ be the continuous periodic P1 nodal functions for these classes, with $\phi_i=1$ at class $i$ and $0$ at the other classes. Set $m_i=\int_Y\phi_i\,dy$. If $N=1$, use the empty basis of $W_{\mathcal M}$; otherwise use
$$\psi_i:=\phi_i-\frac{m_i}{m_1}\phi_1\qquad(2\le i\le N)$$
as the ordered basis of $W_{\mathcal M}$. The nodal basis spans the full periodic P1 space, and these functions form a basis of its mean-zero subspace.

Use the following exact solver on the systems assembled below. Given a real matrix $A\in\mathbb R^{n\times n}$ and $b\in\mathbb R^n$, `ExactSolve(A,b)` returns the empty vector if $n=0$. Otherwise use temporary solver labels $1,\ldots,n$, with solver coordinate $i$ corresponding to library coordinate $i-1$ of $\mathbb R^n$ ([[def-function-space]]), and form the augmented matrix $[A\mid b]$. For $k=1,\ldots,n$, choose the least row index $p\ge k$ whose current entry in column $k$ is nonzero; if there is no such row, return `singular-system`. Swap the entire augmented rows $p$ and $k$. For each $i=k+1,\ldots,n$, set $r=A_{ik}/A_{kk}$, replace the entire augmented row $i$ by row $i-r\,\mathrm{row}_k$, and set its column-$k$ entry to zero. After this loop, compute in order $k=n,n-1,\ldots,1$ by
$$x_k=\frac{b_k-\sum_{j=k+1}^n A_{kj}x_j}{A_{kk}},$$
using entries of the resulting upper-triangular augmented matrix. Return the vector $x\in\mathbb R^n$ whose library coordinate $x(k-1)$ equals $x_k$. All arithmetic and zero tests are exact over $\mathbb R$; the systems assembled below are positive definite.

Order macro triangles by lexicographic order of their barycenters. For each such $K$, use its barycenter $x_K$ as the single quadrature point with positive weight $|K|$, and set
$$b_K(y):=a\!\left(\frac{x_K}{\epsilon}+\frac{\delta}{\epsilon}y\right)\quad(y\in Y).$$
The affine change-of-variables theorem [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]] makes this a measurable coefficient class independent of the representative of $a$, with $\lambda\le b_K\le\Lambda$ almost everywhere. For each PDE coordinate vector $e_j$ of [[def-periodic-cell-correctors-and-effective-tensor]], in order $j=1,2$, assemble
$$G^K_{i\ell}:=\int_Yb_K\nabla\psi_\ell\cdot\nabla\psi_i\,dy,\qquad r^K_{i,j}:=-\int_Yb_K e_j\cdot\nabla\psi_i\,dy$$
over the micro-basis indices $2\le i,\ell\le N$. If that basis is empty, set $w^h_{K,j}=0$; otherwise call `ExactSolve(G^K,r^K_{\cdot,j})`, index its returned coordinates by $2,\ldots,N$, and set $w^h_{K,j}=\sum_{\ell=2}^N x_\ell\psi_\ell$. Then set
$$A^h_Ke_j:=\int_Yb_K(y)(e_j+\nabla_yw^h_{K,j}(y))\,dy.$$
If the micro call returns `singular-system`, propagate that output; [[lem-fehmm-micro-cell-solves-wellposedness]] proves this branch is not reached. Otherwise identify solver index $i-1$ with micro-basis index $i$ for $2\le i\le N$ and use the returned coefficient as $x_i$ in the displayed sum. The `singular-system` branch is included to make the solver instruction total.

Order the interior vertices of $\mathcal T$ lexicographically and let $\varphi_1,\ldots,\varphi_M$ be the corresponding nodal basis of $V_H$. If $M=0$, set $U_H=0$. Otherwise assemble
$$H_{rs}:=\sum_{K\in\mathcal T}|K|\,\nabla\varphi_s|_K\cdot A^h_K\nabla\varphi_r|_K,\qquad F_r:=\int_Qf\varphi_r\,dx,$$
call `ExactSolve(H,F)`. If it returns `singular-system`, propagate that output; the well-posedness lemma proves this branch is not reached. Otherwise set $U_H:=\sum_{s=1}^M x_s\varphi_s$, with solver index $s$ identified with macro-basis index $s$. This basis system is exactly the variational system
$$B_H(U,V)=\sum_{K\in\mathcal T}|K|\,\nabla U|_K\cdot A^h_K\nabla V|_K=\int_QfV\qquad(V\in V_H).$$
The macro matrix is positive definite and its `singular-system` branch is unreachable by [[lem-fehmm-micro-cell-solves-wellposedness]]. Output $U_H$. The centroid quadrature is positive and exact for constants, which is the only quadrature property used in the error theorem.

## Interface

The local continuum comparator uses the same coefficient $b_K$ on the unit micro cell with the full periodic space $V_\#$; it is defined and proved well posed in [[lem-fehmm-micro-cell-solves-wellposedness]]. The period ratio is $r=\delta/\epsilon$. No accuracy is asserted for arbitrary $r$; micro approximation and sampling/resonance are separated in [[thm-fehmm-macro-micro-resonance-error-decomposition]].
