---
id: def-gr-fx-adm-end
kind: definition
title: "A specified asymptotically Euclidean ADM end"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
physical_scope: "A fixed-chart geometric definition of an asymptotic energy limit; no Einstein constraint, positivity, coordinate-invariance, or empirical claim is included."
deps:
  - thm-gr-constraint-equations-in-normal-frame
dependency_roles:
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Eric Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035v1 (2007), §§7.2.1–7.2.2 and 7.3.1–7.3.2, PDF pp. 103–110; geometric units are used."
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "Sebastiano Bernuzzi, Lecture Notes on 3+1 Numerical Relativity, v0.1 (2021), §§7.1–7.2 and §7.2.2, PDF pp. 32–35; geometric units are used."
      url: "https://www.ias.edu/sites/default/files/NR_notes.pdf"
    - title: "José Luis Jaramillo, Juan Antonio Valiente Kroon, and Eric Gourgoulhon, From Geometry to Numerics, arXiv:0712.2332v2 (2008), §2.1 and equation (2), PDF pp. 7–8."
      url: "https://arxiv.org/pdf/0712.2332"
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

For the geometric initial-data convention, let $(M,g)$ be a smooth time-oriented Lorentzian four-manifold and let $\iota:\Sigma\hookrightarrow M$ be a smooth embedded three-manifold whose induced metric $h:=\iota^*g$ is positive definite. Its future unit normal $n$ satisfies $g(n,n)=-1$ and $g(n,X)=0$ for $X\in T\Sigma$. The second fundamental form is $K(X,Y):=g(\nabla_Xn,Y)$, with $\nabla$ the Levi-Civita connection of $g$ and the curvature sign convention stated in the Definition references section. The end data below are specified as a Riemannian metric and a symmetric tensor of these types; no embedding or Einstein constraint equation is required.

Let $E=\{x\in\mathbb R^3:r>R_0\}$, where $R_0>0$ is a length, $x=(x^1,x^2,x^3)$ are Cartesian coordinates measured in metres, and $r:=\sqrt{(x^1)^2+(x^2)^2+(x^3)^2}$. Write $\delta:=\delta_{ij}\,dx^i dx^j$ for the standard Euclidean metric, where $\delta_{ij}=1$ if $i=j$ and $0$ otherwise; repeated spatial indices are summed over $1,2,3$. A **fixed-chart asymptotically Euclidean end** consists of this exterior domain, a $C^2$ symmetric positive-definite covariant $2$-tensor $h=h_{ij}\,dx^i dx^j$, and a $C^1$ symmetric covariant $2$-tensor $K=K_{ij}\,dx^i dx^j$ such that
$$h_{ij}(x)=\delta_{ij}+\frac{a_{ij}}{r}+\rho_{ij}(x),\qquad K_{ij}(x)=O_1(r^{-2}),$$
where $a_{ij}=a_{ji}$ is a constant real matrix, $\epsilon>0$, and $\rho=O_2(r^{-1-\epsilon})$. For any tensor components $T_{ij}$, the notation $T=O_k(r^{-q})$ means that for every multi-index $\alpha=(\alpha_1,\alpha_2,\alpha_3)$ with $|\alpha|:=\alpha_1+\alpha_2+\alpha_3\le k$ there are constants $C_\alpha,R_\alpha$ such that $|\partial^\alpha T_{ij}(x)|\le C_\alpha r^{-q-|\alpha|}$ for $r\ge R_\alpha$, uniformly in angle. Thus the definition requires two Cartesian derivatives of the metric remainder and one of $K$. The coordinates and $r$ have units of metres; $\delta_{ij}$ and $h_{ij}$ are dimensionless, $a_{ij}$ has units of metres, and $K$ has inverse-length units in a spatial orthonormal frame.

For $R>R_0$, the coordinate sphere $S_R:=\{x:r=R\}$ is a smooth embedded surface in $E$. Let $\jmath_R:S_R\hookrightarrow E$ be its inclusion and $\gamma_R:=\jmath_R^*\delta$ its induced Riemannian metric. The Euclidean area measure $dS$ is the Riemannian area measure of $\gamma_R$: for any smooth rank-two local parametrization $X:U\subseteq\mathbb R^2\to S_R$ with coordinates $(y^1,y^2)$, its coordinate density is
$$dS=\sqrt{\det\bigl[\delta(\partial_{y^a}X,\partial_{y^b}X)\bigr]_{a,b=1}^{2}}\,dy^1dy^2.$$

The change-of-variables formula makes this density independent of the chosen surface coordinates; since $x$ is measured in metres, $dS$ has units of square metres. The sphere's outward Euclidean unit normal has components $n^i:=x^i/R$. If its limiting integral exists as $R\to\infty$—the spatial-infinity limit in this chosen chart—the **fixed-chart ADM energy** and its associated mass are
$$E_{\mathrm{ADM}}(h;x):=\frac{c^4}{16\pi G_N}\lim_{R\to\infty}\int_{S_R}\bigl(\partial_jh_{ij}-\partial_ih_{jj}\bigr)n^i\,dS,\qquad M_{\mathrm{ADM}}:=\frac{E_{\mathrm{ADM}}}{c^2}.$$
Here $c>0$ is the SI speed-of-light conversion constant with units metres per second, and $G_N>0$ is the Newtonian gravitational conversion constant with units metres cubed per kilogram per second squared. The limit has units of metres, $E_{\mathrm{ADM}}$ has units of joules, and $M_{\mathrm{ADM}}$ has units of kilograms. The prefactor fixes the asymptotic time-translation normalization; in SI coordinates use $x^0=ct$. No rescaling of this convention is part of the definition.
## Definition references

[[thm-gr-constraint-equations-in-normal-frame]]

## Conventions and scope

The formula depends only on $h$, not on $K$; the stated decay of $K$ records the initial-data setting. This definition does not assert that $(h,K)$ satisfies the Einstein constraint equations, that the limit is invariant under changes of chart, or that the energy is positive. It is a limit at spatial infinity, not a finite-radius surface value or a local gravitational energy density. Angular momentum and center of mass require additional decay and parity hypotheses and are outside this definition.

The sketch is a two-dimensional section through the Cartesian end. The shaded disk is excluded from $E$, its dashed boundary is $r=R_0$, and the outer circle is a representative coordinate sphere $S_R$ with $R>R_0$. The arrow at the outer circle points along the outward Euclidean unit normal $n^i=x^i/R$. The sketch suppresses the other angular directions and plays no role in any proof; the definitions above specify the full three-dimensional objects.

```tikz
\begin{tikzpicture}[scale=1]
  \fill[gray!20] (0,0) circle (0.6);
  \draw[dashed] (0,0) circle (0.6);
  \draw[thick] (0,0) circle (1.6);
  \draw[->] (0,0) -- (0.6,0) node[midway,above] {$R_0$};
  \draw[->] (0,0) -- (1.6,0) node[midway,below] {$R>R_0$};
  \draw[->,thick] (1.6,0) -- (2.15,0) node[right] {$n^i=x^i/R$};
  \node at (0,-1.95) {radial section through the end};
\end{tikzpicture}
```
