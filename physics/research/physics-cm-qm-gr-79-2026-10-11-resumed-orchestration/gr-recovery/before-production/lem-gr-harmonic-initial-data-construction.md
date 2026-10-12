---
id: lem-gr-harmonic-initial-data-construction
kind: lemma
title: "Harmonic initial data from geometric data: prescribing the metric jet of a spacelike slice in a time-independent background"
status: draft
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-harmonic-gauge-and-reduced-equations, lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-christoffel-symbols-of-an-affine-connection, def-embedded-submanifold-and-slice-chart, def-gr-smooth-covariant-two-tensor-field, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  def-gr-harmonic-gauge-and-reduced-equations: mathematical-premise
  lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 5.1 (Local Existence Theorems for the Einstein Equations): harmonic-map gauge, the reduced initial data constructed from (h,chi), the propagation of the gauge by the homogeneous wave system for the gauge residual Delta^alpha, and the local existence theorem"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007), Sections 2.5 (Gauss-Codazzi relations: Gauss, Codazzi-Mainardi and Ricci equations), 4.2-4.3 (the Hamiltonian and momentum constraint equations (4.65)-(4.66) and the extrinsic curvature of a slice) and 10.3.2 (Propagation of the constraints)"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
verification:
  precheck: pending
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold, let
$\Sigma\subseteq M$ be a spacelike embedded hypersurface with induced metric
$h$, future unit normal field $n$ and second fundamental form
$K(V,W)=g(\nabla_Vn,W)$ ([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]],
[[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]]). Let
$s$ be a smooth function defined near $\Sigma$ with $s=0$ exactly on $\Sigma$
and $ds(n)=1$ (a normal time coordinate), and let $h_0$ be a smooth metric on a
product neighborhood of $\Sigma$ with $h_0|_{\Sigma}=h$ and
$\partial_sh_0=0$. Put $\bar g:=-ds^2+h_0$ as background metric. Define a smooth
metric germ $g_0$ on $\Sigma$ by the initial jet
$$g_{ij}=h_{ij},\qquad g_{00}=-1,\qquad g_{0i}=0,\qquad \partial_sg_{ij}=2K_{ij},\qquad \partial_sg_{0i}=0,\qquad \partial_sg_{00}=-2\operatorname{tr}_hK .$$
Then:

**(a)** $g_0$ is the germ of a smooth Lorentzian metric for which $\Sigma$ is
spacelike with induced metric $h$, future unit normal $n=\partial_s$ and second
fundamental form $K$;

**(b)** the harmonic-gauge vector of $(g_0,\bar g)$ vanishes on $\Sigma$:
$H^a|_\Sigma=0$.

## Facts & Assumptions
**Given:** the manifold, the spacelike hypersurface and its normal-coordinate setup, the background metric $\bar g=-ds^2+h_0$ with $h_0|_\Sigma=h$ and $\partial_sh_0=0$, and the prescribed jet.

[L1] If a smooth metric $g$ has $g(\partial_s,\partial_s)=-1$, $g(\partial_s,\partial_i)=0$ and $\partial_sg_{ij}=2K_{ij}$ on $\Sigma$, then $\partial_s$ is the future unit normal (after the orientation choice $N=\partial_s$) and $K_{ij}=g(\nabla_{\partial_i}\partial_s,\partial_j)$ on $\Sigma$; this follows from the Christoffel formula $g(\nabla_{\partial_i}\partial_s,\partial_j)=\tfrac12(\partial_ig_{sj}+\partial_jg_{si}-\partial_sg_{ij})+\ldots$ evaluated on $\Sigma$ ([[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]], [[def-christoffel-symbols-of-an-affine-connection]]).

[L2] Christoffel symbols on $\Sigma$ in the coordinate frame $(\partial_s,\partial_i)$: $g^{00}=-1$, $g^{0i}=0$ and $g^{ij}=h^{ij}$ there, so $\Gamma^0{}_{00}=-\tfrac12\partial_sg_{00}=\operatorname{tr}_hK$, $\Gamma^0{}_{0i}=\tfrac12\partial_ig_{00}=0$, $\Gamma^0{}_{ij}=\tfrac12\partial_sg_{ij}=K_{ij}$, $\Gamma^i{}_{00}=0$ and $\Gamma^i{}_{jk}=\Gamma^h{}^i{}_{jk}$ on $\Sigma$ ([[def-christoffel-symbols-of-an-affine-connection]], [[def-gr-metric-selected-connection]]).

[L3] Background Christoffel symbols: $\bar g=-ds^2+h_0$ with $\partial_sh_0=0$ gives $\bar\Gamma^0{}_{00}=0$, $\bar\Gamma^0{}_{0i}=0$, $\bar\Gamma^0{}_{ij}=0$, $\bar\Gamma^i{}_{00}=0$ and $\bar\Gamma^i{}_{jk}=\Gamma^h{}^i{}_{jk}$ on $\Sigma$ (because $h_0|_\Sigma=h$ and the tangential derivatives of $g_{jk}$ and $h_{0,jk}$ agree on $\Sigma$) ([[def-christoffel-symbols-of-an-affine-connection]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L4] The gauge vector is $H^a=g^{bc}(\Gamma^a{}_{bc}-\bar\Gamma^a{}_{bc})$ ([[def-gr-harmonic-gauge-and-reduced-equations]]).



## Proof

**Proof technique:** direct.

1.1 (Existence of the metric germ and its slice geometry (a).) Prescribe a smooth metric on a product neighborhood whose value and $s$-derivative on $\Sigma$ are the displayed jet and whose higher jets are chosen arbitrarily smooth; such a metric germ exists because a smooth function and its first normal derivative can be prescribed on a hypersurface and extended smoothly. On $\Sigma$, $g_{00}=-1$, $g_{0i}=0$, $g_{ij}=h_{ij}$, so $g$ restricted to $T\Sigma$ is $h$ and $\partial_s$ is a unit timelike vector orthogonal to $\Sigma$; by [L1] it is the future unit normal (with the orientation of the statement) and the second fundamental form is $\tfrac12\partial_sg_{ij}=K_{ij}$. This is (a). [L1, algebra]

1.2 (Computation of $H^0$.) Insert the Christoffel components [L2], [L3] into [L4]: $H^0=g^{00}(\Gamma^0{}_{00}-\bar\Gamma^0{}_{00})+g^{ij}(\Gamma^0{}_{ij}-\bar\Gamma^0{}_{ij})+2g^{0i}(\Gamma^0{}_{0i}-\bar\Gamma^0{}_{0i})=-(\operatorname{tr}_hK-0)+h^{ij}(K_{ij}-0)+0=-\operatorname{tr}_hK+\operatorname{tr}_hK=0$ on $\Sigma$. [L2, L3, L4, algebra]

2.1 (Computation of $H^i$.) Similarly $H^i=g^{00}(\Gamma^i{}_{00}-\bar\Gamma^i{}_{00})+g^{jk}(\Gamma^i{}_{jk}-\bar\Gamma^i{}_{jk})+2g^{0j}(\Gamma^i{}_{0j}-\bar\Gamma^i{}_{0j})=-(0-0)+h^{jk}(\Gamma^h{}^i{}_{jk}-\Gamma^h{}^i{}_{jk})+2\cdot0=0$ on $\Sigma$, using that the tangential Christoffel symbols of $g$ on $\Sigma$ agree with those of $h$ and hence with those of the background because $h_0|_\Sigma=h$ and tangential derivatives agree. This is (b). [step 1.2, L2, L3, L4, algebra] ∎



## Remarks

- **Role.** This construction produces the Cauchy data $(g^0,g^1)$ to which [[thm-gr-reduced-einstein-local-existence]] is applied in [[thm-gr-local-geometric-development]]; the background $\bar g$ is chosen by the constructor and disappears from the final geometric conclusions via [[thm-gr-local-geometric-uniqueness]].
