---
id: lem-discrete-summation-by-parts-poincare-and-inverse-bound
kind: lemma
title: Discrete summation by parts, Poincaré inequality and inverse bound
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-rectangular-grid-and-dirichlet-flux-stencil]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Endre Süli, Numerical Solution of PDEs, complete lecture notes"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§3.2, Lemmas 3–4 and Theorem 4, PDF pp. 16–22; §4.1(a), Lemmas 5–6 and Theorem 7, PDF pp. 27–30."
    - title: "Benjamin Seibold, MIT 18.336 Lecture 6: General Linear Second Order Equation"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/c395389a94e1177997aa6364b24852d8_MIT18_336S09_lec6.pdf"
      locator: "Complete PDF, pp. 3–5: the error identity, uniform inverse-operator stability, and the stated one-dimensional Poisson spectral check."
verification:
  precheck: pass
---

## Statement

On the grid of [[def-rectangular-grid-and-dirichlet-flux-stencil]], put $q^x_{i+1/2,j}=a_{i+1/2,j}D_xv_{i+1/2,j}$ and $q^y_{i,j+1/2}=a_{i,j+1/2}D_yv_{i,j+1/2}$. For any grid functions $v,w$,
$$
\langle A_h^av,w\rangle_h=E_h^a(v,w)-h_y\sum_{j=1}^{N_y-1}\left(q^x_{N_x-1/2,j}w_{N_x,j}-q^x_{1/2,j}w_{0,j}\right)-h_x\sum_{i=1}^{N_x-1}\left(q^y_{i,N_y-1/2}w_{i,N_y}-q^y_{i,1/2}w_{i,0}\right).
$$
In particular, if $w$ vanishes on the boundary, then $\langle A_h^av,w\rangle_h=E_h^a(v,w)$. For every $v\in X_{h,0}$,
$$
\|v\|_h^2\le L_x^2\,h_xh_y\sum_{j=1}^{N_y-1}\sum_{i=0}^{N_x-1}|D_xv_{i+1/2,j}|^2.
$$
If all horizontal and vertical face values satisfy $a_{i+1/2,j},a_{i,j+1/2}\ge a_0>0$, then the homogeneous Dirichlet matrix $A_h^a$ is invertible and
$$
\|(A_h^a)^{-1}\|_{\ell_h^2\to\ell_h^2}\le \frac{L_x^2}{a_0},
$$
where $\ell_h^2$ is the norm $\|\cdot\|_h$ on interior vectors. The constants are independent of $N_x,N_y$.

## Facts & Assumptions

**Given:** $L_x,L_y>0$, integers $N_x,N_y\ge2$, the grid, its real grid functions, the inner product, the positive flux operator $A_h^a$, and edge energy $E_h^a$ defined in [[def-rectangular-grid-and-dirichlet-flux-stencil]].

[F1] [[def-rectangular-grid-and-dirichlet-flux-stencil]]: $A_h^a$ is the negative horizontal and vertical flux divergence; $E_h^a$ is the weighted sum of the horizontal and vertical edge-gradient products; $X_{h,0}$ consists of grid functions vanishing on every boundary node.

## Proof

1.1 Fix an interior row $j$ and write $q_i=q^x_{i+1/2,j}$. Telescoping the horizontal contribution gives $h_xh_y\sum_{i=1}^{N_x-1}-(q_i-q_{i-1})w_{ij}/h_x=h_y\sum_{i=0}^{N_x-1}q_i(w_{i+1,j}-w_{ij})-h_y(q^x_{N_x-1/2,j}w_{N_x,j}-q^x_{1/2,j}w_{0,j})$. Summing this identity over $j$ gives the horizontal energy and its two boundary terms. [given, F1, algebra]

1.2 Let $v\in X_{h,0}$. For each interior row, $v_{ij}=\sum_{k=0}^{i-1}h_xD_xv_{k+1/2,j}$. Cauchy–Schwarz gives $|v_{ij}|^2\le (ih_x)\sum_{k=0}^{i-1}h_x|D_xv_{k+1/2,j}|^2\le L_x\sum_{k=0}^{N_x-1}h_x|D_xv_{k+1/2,j}|^2$. Summing with weights $h_xh_y$ and using $\sum_{i=1}^{N_x-1}h_x<L_x$ proves the displayed discrete Poincaré inequality. [given, F1, algebra]

2.1 Applying the same telescoping sum in each column to the vertical flux gives the vertical energy minus the top and bottom boundary terms. Adding it to step 1.1 proves the displayed two-dimensional identity, with all four boundary contributions present. [F1, step 1.1, algebra]

3.1 If $w$ vanishes at every boundary node, both boundary sums in step 2.1 are zero, so $\langle A_h^av,w\rangle_h=E_h^a(v,w)$. [step 2.1, given, algebra]

4.1 Apply step 3.1 with $w=v$. The face lower bound gives $E_h^a(v,v)\ge a_0h_xh_y\sum_{j,i}|D_xv_{i+1/2,j}|^2\ge (a_0/L_x^2)\|v\|_h^2$ by step 1.2. [F1, step 3.1, step 1.2, algebra]

5.1 If $A_h^av=0$ for $v\in X_{h,0}$, step 4.1 forces $\|v\|_h=0$, hence every interior value is zero; the boundary values already vanish, so $v=0$. Thus the square finite-dimensional matrix is injective and therefore invertible. [step 4.1, algebra]

6.1 For $A_h^av=f_h$, steps 3.1 and 4.1 imply $(a_0/L_x^2)\|v\|_h^2\le\langle f_h,v\rangle_h\le\|f_h\|_h\|v\|_h$. If $v=0$ the claimed estimate is immediate; otherwise divide by $\|v\|_h$ to obtain $\|v\|_h\le(L_x^2/a_0)\|f_h\|_h$, which is the asserted inverse-operator bound. [step 3.1, step 4.1, step 5.1, algebra] ∎

## Remarks

No choice axiom is used: the proof uses finite sums, Cauchy–Schwarz, and finite-dimensional injectivity implying surjectivity.
