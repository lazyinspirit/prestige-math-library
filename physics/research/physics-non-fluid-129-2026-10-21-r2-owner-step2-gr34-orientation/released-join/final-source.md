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
  - def-covariant-derivative-along-a-curve
  - def-gr-curvature-tensor-and-derived-tensors
  - thm-gr-jacobi-equation-and-geodesic-deviation
  - def-countable-choice
dependency_roles:
  lem-gr-fx-null-normal-plane-and-screen: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-jacobi-equation-and-geodesic-deviation: mathematical-premise
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

Assume Countable Choice for the smooth tangent-bundle and time-orientation conventions of the Lorentzian suppliers. Let $(M,g,N)$ be a smooth time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$. A **closed spacelike two-surface** is a nonempty smooth embedded two-manifold $S\subset M$ that is compact without boundary. Let $\iota:S\hookrightarrow M$ be the inclusion and let its induced metric be $q:=\iota^*g$; require $q$ to be positive definite. Its normal bundle is $\mathcal NS=(TS)^\perp$. Work on an open set $U\subseteq S$ carrying a smooth ordered pair of future null normal fields $\ell,k$ with $g(\ell,\ell)=g(k,k)=0$ and $g(\ell,k)=-2$; such pairs exist locally by the preceding lemma. No global pair is part of the definition unless one is explicitly supplied.

For tangent fields $X,Y$ on $U$, define the null second fundamental form, expansion and shear by
$$\chi_\ell(X,Y):=g(\nabla_X\ell,Y),\qquad \theta_\ell:=\operatorname{tr}_q\chi_\ell,\qquad \sigma_\ell:=\chi_\ell-\frac{\theta_\ell}{2}q.$$
Here $\nabla$ is the metric-selected connection; its derivative of a section along $S$ means the pullback connection, equivalently the derivative of any smooth ambient extension along tangent directions. The preceding lemma establishes extension independence, symmetry of $\chi_\ell$, and positive definiteness of the screen metric. A **normal-frame boost** is the change $\ell\mapsto e^f\ell$, $k\mapsto e^{-f}k$ for a smooth real function $f$ on $U$. It leaves $q$ fixed; $\chi_\ell,\theta_\ell,\sigma_\ell$ scale by $e^f$.

A **null geodesic hypersurface congruence from $U$** along the chosen initial normal field $\ell$ is a smooth map $F:U\times J\to M$, where $J\subseteq\mathbb R$ is a nonempty open interval containing $0$, such that $F(p,0)=p$ and $\partial_\lambda F(p,0)=\ell_p$ for every $p\in U$, each curve $\gamma_p(\lambda):=F(p,\lambda)$ is future-directed and null, and its tangent $\ell:=\partial_\lambda F$ obeys the affine geodesic equation
$$D_\lambda\ell=0$$
along every curve $\gamma_p$; here $D_\lambda$ is the covariant derivative along a curve from [[def-covariant-derivative-along-a-curve]]. For each $p\in U$, let $J_{\mathrm{reg}}(p)$ be the connected component containing $0$ of the parameter values for which $d(F_\lambda)_p:T_pU\to T_{F(p,\lambda)}M$ is injective and the pullback form $(X,Y)\mapsto g(d(F_\lambda)_pX,d(F_\lambda)_pY)$ is positive definite on $T_pU$. Require, for every $\lambda\in J$, that its variation directions satisfy
$$g_{F(p,\lambda)}\bigl(\ell(p,\lambda),dF_{(p,\lambda)}(X,0)\bigr)=0\qquad(X\in T_pU).$$
Thus its variation directions are orthogonal to $\ell$. For $\lambda\in J_{\mathrm{reg}}(p)$, the map $F$ has rank three locally near $(p,\lambda)$: its two section directions are spacelike and orthogonal to the nonzero null vector $\ell$. Its local image is a null hypersurface, with tangent space $\ell^\perp$ and induced radical $\mathbb R\ell$, as in [[lem-gr-fx-null-normal-plane-and-screen]]. The parameter $\lambda$ is affine. On each section in $J_{\mathrm{reg}}$, the **screen** is $\mathscr S=\ell^\perp/\mathbb R\ell$ with metric $\bar q([X],[Y])=g(X,Y)$; it is the positive two-dimensional quotient, identified isometrically with the tangent plane of that section by projection. The induced form on the full null hypersurface has radical $\mathbb R\ell$ and has no inverse. All traces and inverses in this definition are taken on the screen.

All screen bundles associated with this congruence are understood as bundles over the parameter domain $U\times J$: the notation $\mathscr S_{F(p,\lambda)}$ denotes the branch determined by $(p,\lambda)$, so self-intersections do not identify distinct screen fibers. For each $\lambda\in J$, the screen Jacobi map $A_\lambda:T_pS\to\mathscr S_{F(p,\lambda)}$ sends $X$ to the screen class of the variation field $J_X(\lambda):=dF_{(p,\lambda)}(X,0)$; it is invertible for $\lambda\in J_{\mathrm{reg}}(p)$. A **focal instant** is a positive parameter in $J$ where $A_\lambda$ loses rank; the **first focal instant**, if it exists, is the least such parameter after $0$. Along an affine generator the screen derivative is $\mathcal D_\ell[X]:=[D_\ell X]$; it is independent of the representative, by the preceding lemma. On $J_{\mathrm{reg}}$, the derivative $A_\lambda'$ is taken using $\mathcal D_\ell$, and the **optical endomorphism** is $B_\lambda:=A_\lambda'A_\lambda^{-1}$. Its **optical expansion** is $\theta:=\operatorname{tr}B$, and its **optical shear** is $\sigma:=B-\frac12\theta\,\mathrm{id}_{\mathscr S}$. Since the congruence is normal to a null hypersurface, $B$ is self-adjoint. Its antisymmetric part $\omega:=(B-B^*)/2$, called the twist, therefore vanishes. At $\lambda=0$, $B$ is the endomorphism $q^{-1}\chi_\ell$ and these optical quantities agree with $\theta_\ell,\sigma_\ell$.

No orientation of $M$, $S$, or the screen is required for these constructions. Indeed, if two orthonormal screen frames are related by a real $2\times2$ matrix $O$ with $O^{\mathsf T}O=I_2$, then the endomorphism matrices obey $\widehat B=O^{-1}BO$ and $\widehat\sigma=O^{-1}\sigma O$. Cyclicity of the matrix trace gives $\operatorname{tr}\widehat B=\operatorname{tr}B$ and $\operatorname{tr}(\widehat\sigma^2)=\operatorname{tr}(\sigma^2)=|\sigma|_{\bar q}^2$; the last equality follows by summing the squared entries of the symmetric shear matrix in an orthonormal frame. This includes $\det O=-1$. The screen inner products and the rank of $A_\lambda$ are likewise invariant under changes of frame, so neither the index-form contractions nor the focal condition uses a signed screen area form. The preceding lemma constructs normal pairs using the supplied time orientation and only a local spacelike complement; changing the complement's sign interchanges the two future null rays. No global ordered pair follows. If an orientation is additionally supplied, the same formulas apply on that oriented subclass.

## Definition references

[[lem-gr-fx-null-normal-plane-and-screen]]

[[def-covariant-derivative-along-a-curve]]

[[def-gr-curvature-tensor-and-derived-tensors]]

[[thm-gr-jacobi-equation-and-geodesic-deviation]]

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
