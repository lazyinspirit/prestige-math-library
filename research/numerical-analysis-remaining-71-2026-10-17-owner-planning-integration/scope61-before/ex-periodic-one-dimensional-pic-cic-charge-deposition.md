---
id: ex-periodic-one-dimensional-pic-cic-charge-deposition
kind: example
title: One-dimensional periodic CIC deposition and adjoint potential gather
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-periodic-pic-grid-and-inner-product
  - def-periodic-pic-shape-assignment-and-gather
  - thm-periodic-pic-charge-conservation-and-neutralized-source
  - thm-periodic-pic-deposition-potential-gather-adjointness
proof_strategy: direct
axiom_use: No choice principle is used; all calculations are finite.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: R. W. Hockney and J. W. Eastwood, Computer Simulation Using Particles, Sections 2-2-3 and 5-2
      url: https://djvu.online/file/cjOfwRgltjv1g
---

## Statement

Take $L=1$, $N=5$, $h=1/5$, and one particle of charge $q=2$ at $X=h/3$. Define the one-dimensional cloud-in-cell (CIC) weights by $w_j(x)=\max\{1-d_L(x,x_j)/h,0\}$, where $d_L(x,x_j)=\min_{k\in\mathbb Z}|x-x_j+kL|$ is the periodic distance. The only nonzero weights at $X$ are $w_0(X)=2/3$ and $w_1(X)=1/3$. The deposited density before neutralization is $(20/3,10/3,0,0,0)$, and subtracting the uniform background $Q/L=2$ gives
$$ \rho=(14/3,4/3,-2,-2,-2),\qquad h\sum_{j=0}^4\rho_j=0. $$ For every grid potential $\phi$, the adjoint identity is $$ \langle\rho,\phi\rangle_h =2\left(\frac23\phi_0+\frac13\phi_1\right)-2\bar\phi. $$

The diagram shows the local CIC stencil between nodes $0$ and $1$; indices on the full grid are understood modulo $5$.

\begin{tikzpicture}[x=2cm,y=1cm,>=stealth,every node/.style={font=\small}]
  \draw[->] (-0.35,0) -- (2.35,0) node[right] {$x$};
  \foreach \j in {0,1,2} {
    \draw (\j,0.07) -- (\j,-0.07);
    \fill (\j,0) circle (1.4pt);
    \node[below=3pt] at (\j,-0.07) {node \j};
  }
  \fill[red] (0.333,0.55) circle (1.6pt);
  \node[above] at (0.333,0.55) {$X=h/3$};
  \draw[dashed,red] (0.333,0.52) -- (0,0.04);
  \draw[dashed,red] (0.333,0.52) -- (1,0.04);
  \node[red,left] at (-0.05,0.45) {$w_0=2/3$};
  \node[red,right] at (0.95,0.45) {$w_1=1/3$};
  \draw[<->] (0,0.26) -- node[above] {$h$} (1,0.26);
\end{tikzpicture}

## Facts & Assumptions

**Given:** The five-node periodic grid, a particle of charge $2$ at $h/3$, the CIC weights, and the assignment/gather conventions.

[F1] [[def-periodic-pic-grid-and-inner-product]]: $\langle u,v\rangle_h=h\sum_ju_jv_j$ and $\bar v=L^{-1}\langle v,1\rangle_h$.

[F2] [[def-periodic-pic-shape-assignment-and-gather]]: $\rho_j^+=h^{-1}q w_j(X)$, $\rho_j=\rho_j^+-Q/L$, and $(G_X\phi)=\sum_jw_j(X)\phi_j$.

[F3] [[thm-periodic-pic-charge-conservation-and-neutralized-source]]: normalized assignment conserves total charge and the neutralized source has zero mean.

[F4] [[thm-periodic-pic-deposition-potential-gather-adjointness]]: $\langle\rho,\phi\rangle_h=\sum_pq_p(G_X\phi)_p-Q\bar\phi$.

[F5] [[def-periodic-pic-shape-assignment-and-gather]]: an algebraic assignment shape need only be nonnegative and sum to one; smoothness is an additional condition for the smooth fixed-$\varepsilon$ branch.

## Proof

1.1 Since $h^{-1}=5$, the two nonzero assigned densities are $5\cdot2\cdot(2/3)=20/3$ and $5\cdot2\cdot(1/3)=10/3$. The background is $Q/L=2$, so the neutralized values are $14/3,4/3,-2,-2,-2$; their sum is $6-6=0$, hence their cell-weighted sum is zero. [F1, F2, given, algebra]

1.2 For any point in a periodic cell $[x_j,x_{j+1}]$, with its right endpoint interpreted modulo $L$, the CIC formula gives $w_j=(x_{j+1}-x)/h$ and $w_{j+1}=(x-x_j)/h$; all other weights vanish. Both are nonnegative and sum to one. At a grid node this reduces to the single weight one. Hence the stated CIC family is a nonnegative normalized assignment shape. [F2, given, algebra]

2.1 The pre-neutralized cell-weighted sum is $h(20/3+10/3)=2$, verifying charge conservation directly; [F3] also applies because step 1.2 proves the shape partition. By [F4], the potential pairing equals $2(\frac23\phi_0+\frac13\phi_1)-2\bar\phi$. Since $\bar\phi=\frac15\sum_{j=0}^4\phi_j$, the formula includes exactly the contribution of the uniform background. [F1, F2, F3, F4, step 1.1, step 1.2, algebra]

3.1 Near node $x_0=0$, the periodic distance formula gives $w_0(x)=1+x/h$ for $-h<x<0$ and $w_0(x)=1-x/h$ for $0<x<h$. The one-sided derivatives at the node are $1/h$ and $-1/h$, so the CIC weight is continuous but not differentiable at this grid crossing. Therefore CIC regularity alone does not supply the $C^4$ vector-field hypothesis of the RK4 error theorem; the page's time-error claim uses the separate smooth fixed-$\varepsilon$ branch. [F5, algebra] ∎
