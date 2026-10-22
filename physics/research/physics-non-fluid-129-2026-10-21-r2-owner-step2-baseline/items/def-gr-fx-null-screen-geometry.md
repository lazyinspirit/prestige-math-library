---
id: def-gr-fx-null-screen-geometry
kind: definition
title: "Null normal pairs and screen geometry"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
physical_scope: "Geometric definitions only; no Einstein equation, stress-energy assumption, observation, or model-validity claim is included."
deps:
  - lem-gr-fx-null-normal-plane-and-screen
  - def-gr-spacelike-initial-data-and-constraints
  - def-gr-curvature-tensor-and-derived-tensors
  - def-countable-choice
dependency_roles:
  lem-gr-fx-null-normal-plane-and-screen: mathematical-premise
  def-gr-spacelike-initial-data-and-constraints: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-countable-choice: mathematical-premise
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "E. Gourgoulhon and J. L. Jaramillo, A 3+1 perspective on null hypersurfaces and isolated horizons, Physics Reports 423 (2006), arXiv:gr-qc/0503113v2: §§2.2, 2.6-2.7, 4.4, 5.1, 5.5-5.8"
      url: "https://arxiv.org/pdf/gr-qc/0503113"
    - title: "Edward Witten, Light Rays, Singularities, and All That, Clay Mathematics Institute lecture notes, full 106-page PDF: §§5.4-5.5 and 8.5"
      url: "https://www.claymath.org/wp-content/uploads/2022/03/WittenLectures.pdf"
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice for the smooth tangent-bundle and time-orientation conventions of the Lorentzian suppliers. Let $(M,g,N)$ be a smooth oriented, time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$. A **closed spacelike two-surface** is a nonempty smooth embedded two-manifold $S\subset M$ that is compact without boundary. Let $\iota:S\hookrightarrow M$ be the inclusion and let its induced metric be $q:=\iota^*g$; require $q$ to be positive definite. Its normal bundle is $\mathcal NS=(TS)^\perp$. Work on an open set $U\subseteq S$ carrying a smooth ordered pair of future null normal fields $\ell,k$ with $g(\ell,\ell)=g(k,k)=0$ and $g(\ell,k)=-2$; such pairs exist locally by the preceding lemma. No global pair is part of the definition unless one is explicitly supplied.

For tangent fields $X,Y$ on $U$, define the null second fundamental form, expansion and shear by
$$\chi_\ell(X,Y):=g(\nabla_X\ell,Y),\qquad \theta_\ell:=\operatorname{tr}_q\chi_\ell,\qquad \sigma_\ell:=\chi_\ell-\frac{\theta_\ell}{2}q.$$
Here $\nabla$ is the metric-selected connection; its derivative of a section along $S$ means the pullback connection, equivalently the derivative of any smooth ambient extension along tangent directions. The preceding lemma establishes extension independence, symmetry of $\chi_\ell$, and positive definiteness of the screen metric. A **normal-frame boost** is the change $\ell\mapsto e^f\ell$, $k\mapsto e^{-f}k$ for a smooth real function $f$ on $U$. It leaves $q$ fixed; $\chi_\ell,\theta_\ell,\sigma_\ell$ scale by $e^f$.

A **null geodesic hypersurface congruence from $U$** is a smooth map $F:U\times J\to M$, for an interval $J\subseteq\mathbb R$ containing $0$, such that $F(p,0)=p$, every curve $\lambda\mapsto F(p,\lambda)$ is future-directed, null and affinely parametrized, and each map $F_\lambda:=F(\cdot,\lambda)$ is a spacelike immersion before its first focal instant. The field $\ell:=\partial_\lambda F$ is normal to each section and tangent to the immersed null hypersurface swept out by the curves. The parameter $\lambda$ is an affine parameter. On each section, the **screen** is $\mathscr S=\ell^\perp/\mathbb R\ell$ with metric $\bar q([X],[Y])=g(X,Y)$; it is the positive two-dimensional quotient, identified with the tangent plane of that section. The induced form on the full null hypersurface has radical $\mathbb R\ell$ and has no inverse. All traces and inverses in this definition are taken on the screen.

Before the first **focal instant**, the screen Jacobi map $A_\lambda:T_pS\to\mathscr S_{F(p,\lambda)}$ sends $X$ to the screen class of the variation field $J_X(\lambda):=dF_{(p,\lambda)}(X,0)$ and is invertible. The first focal instant is the first positive $\lambda$ at which $A_\lambda$ loses rank. Along an affine generator the screen derivative is $\mathcal D_\ell[X]:=[D_\ell X]$; it is independent of the representative, by the preceding lemma. The derivative $A_\lambda'$ is taken using $\mathcal D_\ell$. The **optical endomorphism** is $B_\lambda:=A_\lambda'A_\lambda^{-1}$, the **optical expansion** is $\theta:=\operatorname{tr}B$, and the **optical shear** is $\sigma:=B-\frac12\theta\,\mathrm{id}_{\mathscr S}$. Since the congruence is normal to a null hypersurface, $B$ is self-adjoint; equivalently its twist vanishes. At $\lambda=0$, $B$ is the endomorphism $q^{-1}\chi_\ell$ and these optical quantities agree with $\theta_\ell,\sigma_\ell$.

## Definition references

[[lem-gr-fx-null-normal-plane-and-screen]]

[[def-gr-spacelike-initial-data-and-constraints]]

[[def-gr-curvature-tensor-and-derived-tensors]]

[[def-countable-choice]]

## Conventions and scope

Use $K(X,Y)=g(\nabla_X n,Y)$ for a spacelike hypersurface with future unit normal $n$, and use
$$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z.$$
Thus the Jacobi equation in the supplied convention is $D_\ell^2J=R(\ell,J)\ell$ and the screen curvature endomorphism is $[X]\mapsto[R(X,\ell)\ell]$. The stated data are geometric definitions and make no claim about an Einstein equation, stress-energy tensor, energy condition or the physical validity of a model.

For a physical dimensional reading in SI, use length-valued coordinates $x^0=ct$ and a dimensionless metric; take the affine parameter $\lambda$ in metres. Then $\ell$ and $k$ are dimensionless tangent components, $\chi_\ell,\theta_\ell,\sigma_\ell$ have units $\mathrm m^{-1}$, and curvature and $\operatorname{Ric}(\ell,\ell)$ have units $\mathrm m^{-2}$. A constant boost rescales $\lambda$ inversely, as recorded in the companion calculations.

The schematic shows one tangent-space section at $p\in S$. The horizontal line represents a two-dimensional spacelike tangent plane in a two-dimensional drawing; the upward arrows are the two future null rays in its Lorentzian normal plane. The labels $\lambda_\ell,\lambda_k$ increase to the future along their respective affine generators. The figure illustrates the convention $g(\ell,k)=-2$ and asserts neither a global pair over $S$ nor any statement used by a proof.

```tikz
\begin{tikzpicture}[>=stealth,scale=1.0]
  \draw[thick] (-2.1,0) -- (2.1,0);
  \fill (0,0) circle (1.5pt);
  \node[below] at (0,-0.08) {$p$};
  \node[below] at (1.65,0) {$T_pS$};
  \draw[->,very thick] (0,0) -- (1.35,1.05) node[above right] {$\ell$};
  \draw[->,very thick] (0,0) -- (-1.35,1.05) node[above left] {$k$};
  \node at (0,1.58) {$g(\ell,k)=-2$};
  \node[right] at (1.38,0.98) {$\lambda_\ell\uparrow$};
  \node[left] at (-1.38,0.98) {$\lambda_k\uparrow$};
\end{tikzpicture}
```
