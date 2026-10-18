---
id: def-tpfa-harmonic-face-scheme
kind: definition
title: Orthogonal TPFA diffusion with harmonic face transmissibility
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
aliases: []
deps: [def-fv-admissible-cell-face-mesh]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "R. Eymard, T. Gallouët, and R. Herbin, Finite Volume Methods, Handbook of Numerical Analysis, Vol. VII, 2000; complete updated author text"
      url: "https://raphaeleh.github.io/PUBLI/bookevol.pdf"
      locator: "Chapter 9 §9.2, Definition 9.1 and equations (9.17)–(9.23), printed pp. 37–42; Chapter 11 §11.1, equations (11.3)–(11.5), printed pp. 78–81."
    - title: "Jérôme Droniou, Finite volume schemes for diffusion equations: introduction to and review of modern methods, 2014"
      url: "https://arxiv.org/pdf/1407.1567"
      locator: "§2, equations (2.1)–(2.7), PDF pp. 8–10."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $\mathcal T=(\mathcal K,\mathcal F)$ be a boundary-anchored mesh as in [[def-fv-admissible-cell-face-mesh]]. It is **TPFA-admissible** if, for each interior face $F=K|L$, the center segment $[x_K,x_L]$ is perpendicular to the supporting hyperplane of $F$ and intersects the relative interior of $F$ at a point $y_F$. Thus the center points lie on opposite sides of that face, and $d_{K,F}=|y_F-x_K|$, $d_{L,F}=|x_L-y_F|$, so define $d_F:=|x_L-x_K|=d_{K,F}+d_{L,F}$ for every interior face. Each boundary face $F\subset\partial K\cap\partial\Omega$ must satisfy $x_F-x_K=d_{K,F}n_{K,F}$ with $d_{K,F}>0$; in particular, its face centroid is the normal projection of $x_K$ onto the face plane.

Let the scalar diffusion coefficient be constant on each cell, $\lambda|_K=\lambda_K$, with fixed bounds $0<\lambda_*\le\lambda_K\le\lambda^*<\infty$. For each interior face and boundary face define the transmissibilities
$$ T_F=\frac{|F|}{d_{K,F}/\lambda_K+d_{L,F}/\lambda_L}\quad(F=K|L),\qquad T_{K,F}=\frac{|F|\lambda_K}{d_{K,F}}\quad(F\subset\partial K\cap\partial\Omega). $$
The interior formula is the conductance of two half-cell resistances in series. Equivalently, with $\lambda_F^{\rm harm}=d_F/(d_{K,F}/\lambda_K+d_{L,F}/\lambda_L)$, it is $T_F=|F|\lambda_F^{\rm harm}/d_F$. This is a distance-weighted harmonic mean; it equals the ordinary harmonic mean only when $d_{K,F}=d_{L,F}$.

For cell values $u_K$ and prescribed boundary face values $g_F$, the outward signed flux is
$$ Q_{K,F}(u)=T_F(u_K-u_L)\quad(F=K|L),\qquad Q_{K,F}(u)=T_{K,F}(u_K-g_F)\quad(F\subset\partial\Omega). $$
This is a **two-point flux approximation (TPFA)**: an interior face flux uses only the values in its two incident cells, and a boundary face flux uses only its incident cell value and the prescribed boundary value.
The finite-volume equations for a cellwise integrable source $f$ are
$$ \sum_{F\subset\partial K}Q_{K,F}(u)=\int_K f(x)\,dx\quad(K\in\mathcal K). $$
Thus an interior face uses one flux with opposite signs in its two balances. For homogeneous Dirichlet data define the symmetric energy form and its norm by
$$ a_h(u,v)=\sum_{F=K|L\in\mathcal F_{\rm int}}T_F(u_K-u_L)(v_K-v_L)+\sum_{F\in\mathcal F_{\rm bdy}}T_{K,F}u_Kv_K,\qquad \|u\|_{E_h}^2=a_h(u,u). $$
For each face take a separate copy $D_F$ of measure $|F|d_F$ on an interior face and $|F|d_{K,F}$ on a boundary face. The reconstructed normal gradient is $(u_L-u_K)n_{K,F}/d_F$ on an interior face (with either fixed orientation) and $-u_Kn_{K,F}/d_{K,F}$ on a homogeneous boundary face. Give the interior face copy coefficient $\lambda_F^{\rm harm}$ and the boundary face copy coefficient $\lambda_K$. Then $\|u\|_{E_h}^2$ is exactly the weighted $L^2$ norm of this face-copy gradient reconstruction. The copies are bookkeeping spaces; they are not claimed to partition $\Omega$.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
  \draw[thick] (0,0) rectangle (2,2);
  \draw[thick] (2,0) rectangle (4,2);
  \draw (2,0) -- (2,2);
  \fill (1,1) circle (2pt) node[below left] {$x_K$};
  \fill (3,1) circle (2pt) node[below right] {$x_L$};
  \draw[->,blue,thick] (1,1) -- (3,1) node[midway,above] {$d_F$};
  \draw[->,red,thick] (1,1) -- (1.7,1) node[below] {$Q_{K,F}$};
  \draw[->,red,thick] (3,1) -- (2.3,1) node[above] {$Q_{L,F}$};
  \node at (2,1.65) {$F$};
  \node at (1,1.7) {$K,\lambda_K$};
  \node at (3,1.7) {$L,\lambda_L$};
\end{tikzpicture}
```

The drawing uses the outward-from-cell sign convention, so $Q_{K,F}=-Q_{L,F}$. Orthogonality is required for the TPFA diffusion flux to approximate the full normal flux with only the two cell values. The definition includes scalar isotropic diffusion only; anisotropic tensors and nonorthogonal meshes require a separately analysed cell-and-face method. Cellwise coefficient jumps are allowed when their interfaces are mesh faces. No universal consistency claim is made for jumps that cut through cells.
