---
id: lem-cm-holomorphic-map-calculus
kind: lemma
title: "Calculus of holomorphic maps: chain rule, Wirtinger derivatives, coefficient extraction in one variable, and locally uniform limits"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-complex-phase-domains-and-holomorphic-maps, lem-cm-cauchy-formula-and-power-series-on-polydiscs, thm-chain-rule-for-total-derivatives, def-total-derivative-in-euclidean-space, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, thm-holomorphic-parameter-riemann-integral, thm-weierstrass-convergence-holomorphic-functions, thm-uniform-limit-continuous-complex-functions, def-uniform-convergence-of-complex-valued-functions, rem-locally-uniform-convergence-dictionary, def-ck-euclidean-maps-and-diffeomorphisms, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, rem-complex-plane-euclidean-dictionary, thm-complex-numbers-are-the-real-coordinate-plane]
dependency_roles:
  def-cm-complex-phase-domains-and-holomorphic-maps: mathematical-premise
  lem-cm-cauchy-formula-and-power-series-on-polydiscs: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  thm-holomorphic-parameter-riemann-integral: mathematical-premise
  thm-weierstrass-convergence-holomorphic-functions: mathematical-premise
  thm-uniform-limit-continuous-complex-functions: mathematical-premise
  def-uniform-convergence-of-complex-valued-functions: mathematical-premise
  rem-locally-uniform-convergence-dictionary: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  rem-complex-plane-euclidean-dictionary: mathematical-premise
  thm-complex-numbers-are-the-real-coordinate-plane: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, Chapter 1, Sections 1.1-1.3 (holomorphic maps, power series, derivatives), printed pages 13-31"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Chapter 1 Section 2 and Chapter 2 Section 5 (Cauchy formula, power series and limits of holomorphic functions)"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
verification:
  precheck: pass
---

## Statement

Let $m,l,p\ge1$ and let $D\subseteq\mathbb C^m$, $D'\subseteq\mathbb C^l$ be open, with holomorphy in the sense of [[def-cm-complex-phase-domains-and-holomorphic-maps]].

1. **Chain rule.** If $g:D'\to D$ and $F:D\to\mathbb C^p$ are holomorphic, then $F\circ g:D'\to\mathbb C^p$ is holomorphic and
 $$D(F\circ g)(z)=DF\bigl(g(z)\bigr)\circ Dg(z)\qquad(z\in D').$$
2. **Wirtinger derivatives and the bracket matrix.** If $f:D\to\mathbb C$ is holomorphic, then $f$ is totally differentiable as a map of $\mathbb R^{2m}$ and, writing $x_k,y_k$ for the real and imaginary parts of $z_k$,
 $$\partial_{\bar z_k}f:=\tfrac12\bigl(\partial_{x_k}f+i\,\partial_{y_k}f\bigr)=0,\qquad \partial_{z_k}f:=\tfrac12\bigl(\partial_{x_k}f-i\,\partial_{y_k}f\bigr)=Df(e_k).$$
 Consequently, for holomorphic $f,g$ on a complex phase domain $D\subseteq\mathbb C^{2d}$, with $\nabla f=(\partial_{z^1}f,\dots,\partial_{w_d}f)$ and $J$ the standard matrix,
 $$\{f,g\}=(\nabla f)^{\mathsf T}J\,\nabla g.$$
3. **Coefficient extraction in a complex step variable.** Let $0<\sigma\le\infty$ and let $D\subseteq\mathbb C^m$ be open, and let $F:\{|h|<\sigma\}\times D\to\mathbb C^p$ be holomorphic. Then for every $j\in\mathbb N$ the coefficient map
 $$c_j(z):=\partial_h^jF(0,z)/j!$$
 is holomorphic on $D$, and for every $0<s<\sigma$, $c_j(z)=\frac{1}{2\pi i}\oint_{|h|=s}\frac{F(h,z)}{h^{j+1}}\,dh$.
4. **Locally uniform limits.** If $F_n:D\to\mathbb C^p$ are holomorphic and $F_n\to F$ locally uniformly on $D$ in the sense of [[rem-locally-uniform-convergence-dictionary]] and [[def-uniform-convergence-of-complex-valued-functions]], then $F$ is holomorphic on $D$.

## Facts & Assumptions

**Given:** The open sets $D,D'$ and the holomorphic maps named in each clause; $\mathbb C^m\cong\mathbb R^{2m}$ throughout ([[rem-complex-plane-euclidean-dictionary]], [[thm-complex-numbers-are-the-real-coordinate-plane]]).

[L1] $\mathbb C$-linear maps are $\mathbb R$-linear, and the real total derivative of a holomorphic map equals its $\mathbb C$-linear derivative read on $\mathbb R^{2m}$; moreover a composition of $\mathbb C$-linear maps is $\mathbb C$-linear ([[def-cm-complex-phase-domains-and-holomorphic-maps]], [[def-total-derivative-in-euclidean-space]], [[def-directional-and-partial-derivatives]]).

[L2] The chain rule for total derivatives: $D(G\circ H)(x)=DG(H(x))\circ DH(x)$; and the partial derivatives in the coordinate directions are the entries of the total derivative ([[thm-chain-rule-for-total-derivatives]], [[def-jacobian-matrix-and-gradient]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[L3] Cauchy formula in one variable and Taylor coefficients: for holomorphic $G$ on $D(h_0,s)$ and $0<s'<s$, $\partial^jG(h_0)/j!=\frac{1}{2\pi i}\oint_{|h-h_0|=s'}G(h)(h-h_0)^{-j-1}dh$ ([[lem-cauchy-formula-and-power-series-on-polydiscs]], clause 2, with $m=1$; [[cor-cauchy-estimates-taylor-coefficients]]).

[L4] Parameter integrals: a jointly continuous $\varphi:[0,2\pi]\times\Omega\to\mathbb C$ with $h$-slice holomorphic in the parameter $z\in\Omega$ has holomorphic parameter integral ([[thm-holomorphic-parameter-riemann-integral]]); and a locally uniform limit of holomorphic one-variable functions is holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

[L5] Continuity: uniform limits of continuous complex-valued maps are continuous ([[thm-uniform-limit-continuous-complex-functions]]); a holomorphic function of several variables is continuous, because differentiability at every point implies continuity ([[def-cm-complex-phase-domains-and-holomorphic-maps]]).

[L6] The matrix identity: for $\nabla f,\nabla g$ as in clause 2, $(\nabla f)^{\mathsf T}J\nabla g=\sum_i(\partial_{z^i}f\,\partial_{w_i}g-\partial_{w_i}f\,\partial_{z^i}g)$, by block multiplication ([[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]]).

## Proof

**Proof technique:** direct; compose derivatives, decompose the complex derivative into real partials, and use one-variable Cauchy theory slice by slice.

1.1 Clause 2. Let $f$ be holomorphic and fix $k$. The partial derivatives $\partial_{x_k}f,\partial_{y_k}f$ exist and are the images under $Df$ of the real basis vectors $e_{x_k},e_{y_k}$ by [L2]; because $Df$ is $\mathbb C$-linear, $Df(e_{y_k})=Df(i\,e_{x_k})=i\,Df(e_{x_k})$, that is, $\partial_{y_k}f=i\,\partial_{x_k}f$. Hence $\partial_{\bar z_k}f=\tfrac12(\partial_{x_k}f+i\,i\,\partial_{x_k}f)=0$ and $\partial_{z_k}f=\tfrac12(\partial_{x_k}f-i\,i\,\partial_{x_k}f)=\partial_{x_k}f=Df(e_k)$. The matrix identity of clause 2 is then exactly [L6]. [given, L1, L2, L6]

1.2 Clause 1. A holomorphic map is totally differentiable as a real map with $D_{\mathbb R}F=DF$ by step 1.1, so [L2] applies to $F\circ g$: it is totally differentiable with derivative $DF(g(z))\circ Dg(z)$, a composite of $\mathbb C$-linear maps, hence $\mathbb C$-linear by [L1]. Since $z$ was arbitrary, $F\circ g$ is holomorphic with the displayed derivative. [given, step 1.1, L1, L2]

2.1 Clause 3, holomorphy of $c_j$. For fixed $z\in D$ the map $h\mapsto F(h,z)$ is holomorphic on $\{|h|<\sigma\}$ (composition of the holomorphic $F$ with the holomorphic slice injection, clause 1), so $c_j(z)$ is well defined and equals the contour integral of [L3]. To see that $z\mapsto c_j(z)$ is holomorphic, fix one coordinate $z_k$ and hold the others; the integrand $\varphi(h,z_k):=F(h,z)h^{-j-1}$ is, on the compact circle $\{|h|=s\}$ times a small disc in $z_k$, jointly continuous because $F$ is continuous by [L5], and holomorphic in $z_k$ for each $h$ because the slice $z\mapsto F(h,z)$ is holomorphic (clause 1). By [L4] applied to the parametrized integral, $c_j$ is holomorphic in $z_k$ on that disc; hence $c_j$ is separately holomorphic, and it is continuous as an integral of a jointly continuous family on a compact contour. By [[lem-cm-cauchy-formula-and-power-series-on-polydiscs]] applied to $c_j$ on a polydisc around any point, $c_j$ is holomorphic on $D$. [given, L3, L4, L5, lem-cm-cauchy-formula-and-power-series-on-polydiscs]

2.2 Clause 4. Uniform convergence on compacta makes $F$ continuous by [L5]; fixing all coordinates but one, the slice $F_n(\dots,\cdot,\dots)$ is a locally uniform limit of holomorphic one-variable functions, hence holomorphic by [L4]; thus $F$ is continuous and separately holomorphic on $D$, and [[lem-cm-cauchy-formula-and-power-series-on-polydiscs]] upgrades this to holomorphy on $D$. [given, L4, L5, lem-cm-cauchy-formula-and-power-series-on-polydiscs]

3.1 Conclusion. Clause 1 is step 1.2, clause 2 is step 1.1, clause 3 is step 2.1 and clause 4 is step 2.2. [step 1.1, step 1.2, step 2.1, step 2.2] ∎

## Remarks

- Clause 3 is applied on this page to families $h\mapsto L_hf$ whose coefficients are the field components $X_j$; it is the only place where the analytic (rather than merely formal) dependence on the complex step variable is used.
- Clause 1 for $l=1$ and $D'$ a disc is used to see that $h\mapsto\Psi_h(z)$ is holomorphic in $h$ for fixed $z$, once the joint holomorphy of $(h,z)\mapsto\Psi_h(z)$ is available from [[lem-cm-complex-analytic-flow-existence-and-holomorphy]].
