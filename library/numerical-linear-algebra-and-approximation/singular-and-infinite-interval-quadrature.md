---
page: singular-and-infinite-interval-quadrature
title: "Singular and infinite interval quadrature"
status: draft
requires:
  - gaussian-quadrature
  - clenshaw-curtis-and-extrapolation-quadrature
  - the-residue-theorem
items:
  - alg-double-exponential-trapezoid
  - def-duffy-reference-triangle-map
  - lem-c1-divided-difference-extends-continuously
  - lem-double-exponential-truncated-tail-bound
  - lem-log-power-regularity-after-endpoint-substitution
  - lem-real-power-improper-integral
  - thm-analytic-strip-trapezoid-error
  - thm-gaussian-product-rule-error-bound
  - def-cauchy-principal-value-subtraction
  - lem-duffy-reference-map-jacobian-and-image
  - lem-real-power-lebesgue-integrability
  - thm-double-exponential-transforms-and-integral-identities
  - lem-gauss-jacobi-weight-finite-moment-measure
  - thm-cauchy-principal-value-subtraction-identity
  - thm-double-exponential-trapezoid-error-bound
  - thm-duffy-weak-singularity-transform
  - def-gauss-jacobi-quadrature-rule
  - alg-duffy-weighted-product-gauss-quadrature
  - alg-endpoint-power-regularized-jacobi-quadrature
  - lem-gauss-jacobi-rule-data-well-defined
  - thm-gauss-jacobi-exactness-and-derivative-error
  - cor-duffy-weighted-product-gauss-error
  - thm-endpoint-regularized-jacobi-error
examples: []
---

This page develops four scoped tools for difficult quadrature domains. For endpoint factors $(x-a)^\alpha(b-x)^\beta$ with $\alpha,\beta>-1$, it constructs the positive Jacobi measure, defines its Gaussian rule, and proves exactness and a derivative error bound. Explicit endpoint power substitutions regularize finitely many logarithmic factors under stated derivative-order conditions.

For finite-interval, half-line, and whole-line maps, the finite trapezoid procedure separates the analytic-strip discretization estimate from the double-exponential tail estimate. Its error theorem is conditional on both hypotheses; integrability by itself supplies neither. The Cauchy principal-value definition is symmetric about the pole, and subtracting the pole value leaves a continuous quotient plus the explicit logarithmic term.

The reference-triangle Duffy map has Jacobian $r$ and turns a vertex singularity $\|(x,y)\|^{-\alpha}$, $\alpha<2$, into the integrable weight $r^{1-\alpha}$. A weighted product Gaussian rule then has a bound in terms of pure coordinate derivatives. These results concern a flat reference triangle; curved or surface boundary-element mappings remain outside this page's claims.

The square-to-triangle map is shown schematically below. In the source square, $r$ is horizontal and $s$ is vertical; in the target triangle, $x$ is horizontal and $y$ is vertical.

```tikz
\begin{tikzpicture}[scale=0.9,>=stealth]
  \coordinate (S00) at (0,0);
  \coordinate (S10) at (2,0);
  \coordinate (S01) at (0,2);
  \coordinate (S11) at (2,2);
  \coordinate (T00) at (5,0);
  \coordinate (T10) at (7,0);
  \coordinate (T11) at (7,2);
  \draw[thick] (S00)--(S10)--(S11)--(S01)--cycle;
  \draw[dashed,red,thick] (S00)--(S01);
  \draw[thick] (T00)--(T10)--(T11)--cycle;
  \fill (S00) circle (1.5pt) node[below left] {$(0,0)$};
  \fill (S10) circle (1.5pt) node[below right] {$(1,0)$};
  \fill (S01) circle (1.5pt) node[above left] {$(0,1)$};
  \fill (S11) circle (1.5pt) node[above right] {$(1,1)$};
  \fill (T00) circle (1.5pt) node[below left] {$(0,0)$};
  \fill (T10) circle (1.5pt) node[below right] {$(1,0)$};
  \fill (T11) circle (1.5pt) node[above right] {$(1,1)$};
  \node at (1,-0.55) {$[0,1]^2_{r,s}$};
  \node at (6,-0.55) {$T_{x,y}$};
  \node[red] at (-0.55,1) {$r=0$};
  \draw[->] (2.55,1)--(4.35,1) node[midway,above] {$D(r,s)=(r,rs)$};
\end{tikzpicture}
```

The top edge $s=1$ maps to $y=x$, the bottom edge $s=0$ maps to $y=0$, the right edge $r=1$ maps to $x=1$, and the dashed left edge $r=0$ collapses to $(0,0)$. These correspondences follow by substituting the edge equations into $D(r,s)=(r,rs)$; the local lemma also computes $\det DD(r,s)=r$. The picture is schematic and records the coordinate convention only: the Jacobian and integral identity are proved algebraically on the truncated rectangles, without relying on the diagram.
