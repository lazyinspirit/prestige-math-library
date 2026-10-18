---
id: ex-three-cell-grid-suppresses-continuous-turing-mode
kind: example
title: A three-cell periodic grid suppresses the Brusselator's unstable continuous mode
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
aliases: []
deps:
  - prop-two-species-continuous-and-discrete-turing-criterion
  - ex-brusselator-continuous-turing-instability
justified_by: []
proof_strategy: direct
axiom_base: No choice axiom is used; the check is a finite Fourier-mode calculation.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Luca Doria, Numerical Algorithms, lecture notes, Johannes Gutenberg-Universität Mainz, 2022
      url: https://www.staff.uni-mainz.de/doria/NumAlg/NumAlg.pdf
      locator: "§10.7, PDF pp. 150–151: general diffusion-dependent mode matrices. The Brusselator and the three-cell spectral calculation are supplied locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Use the Brusselator and torus from [[ex-brusselator-continuous-turing-instability]], but discretize the torus by the periodic centered grid with $N=3$. The continuous $k=1$ mode is unstable, while every mode of this three-node linearized grid is Hurwitz.

The diagram is schematic and not to scale; it records only the three cell indices and their periodic nearest-neighbor adjacency. The edge joining $2$ to $0$ is the wraparound face, and each edge is labeled by the physical periodic center spacing $h$. For three cells the two distinct neighbors of each cell are the other two nodes. The eigenvalue calculation below uses the stencil formula, not the drawing.

```tikz
\begin{tikzpicture}[scale=1.1]
  \node[draw,circle] (c0) at (0,1.3) {$0$};
  \node[draw,circle] (c1) at (2,1.3) {$1$};
  \node[draw,circle] (c2) at (1,-0.4) {$2$};
  \draw (c0) -- node[above] {$h$} (c1);
  \draw (c1) -- node[right] {$h$} (c2);
  \draw (c2) -- node[left] {$h$} (c0);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The Brusselator dispersion polynomial and continuous unstable band from [[ex-brusselator-continuous-turing-instability]], and the periodic grid symbol from [[prop-two-species-continuous-and-discrete-turing-criterion]].

[F1] [[ex-brusselator-continuous-turing-instability]]: $q(\lambda)=\tfrac15(\lambda-2)(\lambda-\tfrac52)$, the homogeneous Jacobian has negative trace and determinant $1$, and the continuous torus has an eigenvalue $9/4$ in the unstable interval.

[F2] [[prop-two-species-continuous-and-discrete-turing-criterion]]: for a three-node periodic grid on length $L$, its Laplacian eigenvalues are $\lambda_\ell=4h^{-2}\sin^2(\pi\ell/3)$ for $\ell=0,1,2$, and the mode matrix is Hurwitz when $q(\lambda_\ell)>0$.

## Proof

1.1 Here $h=L/3=4\pi/9$. The grid symbol gives $\lambda_0=0$ and $ \lambda_1=\lambda_2=\frac{3}{h^2}=\frac{243}{16\pi^2}<2, $ where the last inequality follows from $\pi>3$, since $243/(16\pi^2)<243/144=27/16<2$. [F1, F2, algebra]

2.1 At $\lambda_0=0$, the reaction Jacobian has trace $-1/2$ and determinant $1$, so it is Hurwitz by the two-dimensional criterion in [F2]. For $\ell=1,2$, step 1.1 gives $0<\lambda_\ell<2$, so both factors in $q(\lambda_\ell)=\tfrac15(\lambda_\ell-2)(\lambda_\ell-\tfrac52)$ are negative and their product is positive. The mode trace is $-1/2-(1/10+2)\lambda_\ell<0$, so [F2] makes both modes Hurwitz. These are all three grid modes, even though the continuous mode in [F1] is unstable. [F1, F2, step 1.1, algebra] ∎
