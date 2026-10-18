---
id: lem-hp-simplex-p-explicit-conforming-interpolant
kind: lemma
title: Constructive varying-degree triangle interpolation in unweighted H1
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-hp-variable-degree-spaces-on-matching-meshes
  - def-hp-integrated-legendre-projector
  - lem-hp-triangle-degree-uniform-strong-edge-lift
  - thm-hp-triangle-unweighted-smooth-approximation
  - lem-variable-degree-polynomial-spaces-are-h1-conforming
  - thm-reference-simplex-trace-and-gauss-green
  - thm-lagrange-point-evaluation-threshold-on-reference-simplex
  - lem-smooth-density-on-reference-simplex
  - lem-shape-regular-affine-simplex-scaling
  - thm-cauchy-schwarz-in-an-inner-product-space
  - cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: Full Choice is inherited through the reference-simplex extension, the point-evaluation threshold, and the ordinary Sobolev representative interfaces. Finite polynomial projections and local energy solves use only uniquely determined finite-dimensional systems.
sources:
  references:
    - title: "Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 30: hp Finite Elements"
      url: https://jschoeberl.github.io/iFEM/pversion/hpfem.html
      locator: "§30.4.2, projection-based triangle interpolation and polynomial extension. The source leaves major extension steps as exercises; the local proof below supplies a strong-edge-norm lift and varying-degree assembly."
    - title: "Martin Vohralík, Finite Element Methods, Chapter 6: hp finite elements"
      url: https://who.rocq.inria.fr/Martin.Vohralik/Enseig/FEM/FEM.pdf
      locator: "Theorems 6.2.1 and 6.3.1, printed pp. 55–57: simplex hp rates are stated while their involved approximation developments are omitted; the complete local rate and assembly are proved here."
---

## Statement

Assume Full Choice. Let $\mathcal T$ be a finite matching shape-regular affine triangulation in two dimensions, let each cell $K$ have an arbitrary finite total degree $p_K\ge1$, and let $u\in C(\overline\Omega;\mathbb R)$ satisfy $u|_K\in H^2(K)$ for every cell. For an interior edge $E=K\cap K'$, let $\tau_E$ be either unit tangent direction and write $\partial_{\tau_E}v=\nabla v\cdot\tau_E$; set $p_E=\min(p_K,p_{K'})$; for a boundary edge of $K$, set $p_E=p_K$. Put $m_K=\min_{E\subset\partial K}p_E$. There is a linear interpolant $I_{\mathcal T,p}u$ in the trace-matching space of [[def-hp-variable-degree-spaces-on-matching-meshes]]. It preserves any zero boundary edge data: if $u$ vanishes on a boundary edge, so does $I_{\mathcal T,p}u$. For every $q\in\mathbb P_{m_K}(K;\mathbb R)$,

$$
|u-I_{\mathcal T,p}u|_{H^1(K)}\le |u-q|_{H^1(K)}+C_\gamma\sum_{E\subset\partial K}\left(\ell_E^{-1/2}\|u-q\|_{L^2(E)}+\ell_E^{1/2}\|\partial_{\tau_E}(u-q)\|_{L^2(E)}\right),
$$

and

$$
h_K^{-1}\|u-I_{\mathcal T,p}u\|_{L^2(K)}+|u-I_{\mathcal T,p}u|_{H^1(K)} \le C_\gamma\left(h_K^{-1}\|u-q\|_{L^2(K)}+|u-q|_{H^1(K)}+\sum_{E\subset\partial K}\left(\ell_E^{-1/2}\|u-q\|_{L^2(E)}+\ell_E^{1/2}\|\partial_{\tau_E}(u-q)\|_{L^2(E)}\right)\right).
$$

The constant is independent of the degrees and their ratios. In particular, if integer $r\ge5$, $m_K\ge2r-4$, $n_K=\lfloor m_K/2\rfloor$, and $u|_K\in H^r(K)$, then

$$
|u-I_{\mathcal T,p}u|_{H^1(K)}\le C_{r,\gamma}h_K^{r-1}\left(\frac{(n_K-r+3)!}{(n_K+r-5)!}\right)^{1/2}|u|_{H^r(K)}.
$$

For $m_K\ge4(r-2)$ the factorial factor is at most $(4/m_K)^{r-4}$. The effective degree $m_K$ records the lowest degree among the shared edge traces; no rate independent of neighboring trace degrees is asserted.

## Facts & Assumptions

**Given:** Full Choice; the finite matching shape-regular affine mesh; finite degrees $p_K\ge1$; a real continuous input with cellwise $H^2$ regularity; and, for the final rate, integer $r\ge5$, $m_K\ge2r-4$, and cellwise $H^r$ regularity.

[A1] Full Choice is assumed through the Sobolev extension and point-evaluation suppliers used below. ([[def-axiom-of-choice]])

[F1] The integrated Legendre operator maps $f$ to a degree-$j$ polynomial, preserves both endpoint values, and its derivative is the $L^2$ projection of $f'$ onto degree $j-1$; that projection is a contraction. ([[def-hp-integrated-legendre-projector]])

[F2] The strong-edge lift constructs a degree-preserving polynomial extension of endpoint-zero edge data, zero on the other two edges, with $H^1$ seminorm and $L^2$ bounds independent of degree. ([[lem-hp-triangle-degree-uniform-strong-edge-lift]])

[F3] The ordinary triangle approximation theorem gives a degree-$p$ polynomial with the displayed scaled $H^2$ error and factorial ratio under $H^r$ regularity. ([[thm-hp-triangle-unweighted-smooth-approximation]])

[F4] On a triangle, the Sobolev trace maps $H^2(K)$ continuously into $H^1(E)$ on each edge, and tangential differentiation commutes with the trace; smooth density justifies the derivative trace identity. In dimension two, $H^2(K)$ also has a unique continuous representative and well-defined vertex values. ([[thm-reference-simplex-trace-and-gauss-green]], [[lem-smooth-density-on-reference-simplex]], [[thm-lagrange-point-evaluation-threshold-on-reference-simplex]], [[lem-shape-regular-affine-simplex-scaling]])

[F5] Matching polynomial traces on a finite simplicial mesh assemble into an $H^1$ function with the cellwise gradient. ([[lem-variable-degree-polynomial-spaces-are-h1-conforming]], [[def-hp-variable-degree-spaces-on-matching-meshes]])

[F6] One-dimensional $H^1$ functions have absolutely continuous representatives satisfying the integral formula; Cauchy–Schwarz then gives the endpoint and primitive bounds used for edge values and the zero-boundary polynomial Poincaré estimate. ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]], [[thm-cauchy-schwarz-in-an-inner-product-space]])

## Proof

1.1 Fix a single orientation of every geometric edge and define $g_E=I_{p_E}(u|_E)$ by affine transport of [F1]. Its two endpoint values agree with those of $u$. For each cell $K$, let $a_K$ be the affine polynomial with the three vertex values of $u$. Each residual $d_E=g_E-a_K|_E$ has zero endpoints and degree at most $p_E\le p_K$. Sum the three lifts from [F2] and put $G_K=a_K+\sum_{E\subset\partial K}L_Ed_E$; it has degree at most $p_K$ and trace $g_E$ on each edge. Let $Z_K=\{z\in\mathbb P_{p_K}(K):z|_{\partial K}=0\}$. In the finite-dimensional affine space $G_K+Z_K$, choose the unique $Iu|_K$ satisfying $\int_K\nabla(Iu-u)\cdot\nabla z=0$ for every $z\in Z_K$. Existence and uniqueness follow from the positive-definite Gram matrix of the gradients on $Z_K$: if $\int_K|\nabla z|^2=0$, the polynomial $z$ is constant, and its zero boundary trace forces $z=0$. If $Z_K=\{0\}$, the system is empty and $Iu|_K=G_K$. Thus the construction is linear and uses only uniquely determined finite systems. [A1, F1, F2, given, construct, algebra]

2.1 Both cells incident to an edge use the same oriented edge polynomial $g_E$, so their traces agree and have degree at most $p_E$. By [F5], the assembled interpolant is in the trace-matching $H^1$ space. If $E$ is a boundary edge on which $u=0$, then $g_E=I_{p_E}0=0$, so the interpolant also vanishes there. [F1, F5, step 1.1, given, algebra]

2.2 Fix $q\in\mathbb P_{m_K}(K)$ and put $w=u-q$. Since $m_K\le p_E$, [F1] reproduces $q|_E$, so $g_E-q|_E=I_{p_E}(w|_E)$. Its endpoint values are those of $w$. The one-dimensional endpoint estimate from [F4] bounds each vertex value $|w(v)|$ by $C(\ell_E^{-1/2}\|w\|_{L^2(E)}+\ell_E^{1/2}\|\partial_{\tau_E} w\|_{L^2(E)})$ on any incident edge. Consequently the affine interpolant $a_K^w$ of the vertex values has $|a_K^w|_{H^1(K)}+h_K^{-1}\|a_K^w\|_{L^2(K)}$ bounded by the sum of these three edge terms. On each edge, $I_{p_E}(w|_E)-a_K^w|_E$ vanishes at its endpoints. The derivative contraction in [F1] and the preceding endpoint estimate bound its strong edge norm by the same sum. Applying [F2] to the three endpoint-zero residuals and adding the lifts gives $c_K\in\mathbb P_{p_K}(K)$ with trace $g_E-q|_E$ and $|c_K|_{H^1(K)}+h_K^{-1}\|c_K\|_{L^2(K)}\le C_\gamma\sum_{E\subset\partial K}\left(\ell_E^{-1/2}\|w\|_{L^2(E)}+\ell_E^{1/2}\|\partial_{\tau_E} w\|_{L^2(E)}\right).$ [F1, F2, F4, F6, step 1.1, algebra]

3.1 The polynomial $q+c_K$ has the same boundary trace as $Iu|_K$, so $z:=q+c_K-Iu\in Z_K$. The energy orthogonality in step 1.1 makes $Iu$ the best $H^1$-seminorm approximation to $u$ in the affine space $G_K+Z_K$; hence $|u-Iu|_{H^1(K)}\le|u-q-c_K|_{H^1(K)}\le|u-q|_{H^1(K)}+|c_K|_{H^1(K)}$. This and step 2.2 prove the first estimate. For the full norm, the reference-triangle identity $z(x,y)=\int_0^x\partial_xz(t,y)dt$ holds because $z=0$ on $x=0$; Fubini and Cauchy–Schwarz [F6] give $\|z\|_{L^2(K)}\le C_\gamma h_K|z|_{H^1(K)}$. Also $|z|_{H^1(K)}\le |q+c_K-u|_{H^1(K)}+|u-Iu|_{H^1(K)}\le2(|u-q|_{H^1(K)}+|c_K|_{H^1(K)})$. Decompose $u-Iu=(u-q)-c_K-z$, use the triangle inequality and the $L^2$ lift bound from step 2.2, and obtain the displayed full-norm estimate. If $u|_K\in H^r(K)$, choose $q=A_{m_K,r}u$ from [F3]. The H2 trace bound [F4] controls every edge term by $C_{r,\gamma}h_K^{r-1}\eta_{n_K,r}|u|_{H^r(K)}$, proving the stated rate. Finally $\eta_{n_K,r}^{-2}$ is the product of $2(r-4)$ consecutive integers beginning at $n_K-r+4\ge m_K/4$; taking square roots proves the simplified power bound. [F3, F4, F6, step 1.1, step 2.2, algebra] ∎
